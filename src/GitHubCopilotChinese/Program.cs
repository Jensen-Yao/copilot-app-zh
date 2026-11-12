using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Net.WebSockets;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Runtime.InteropServices;
using Microsoft.Win32;
using System.Runtime.Versioning;

namespace GitHubCopilotChinese;

[SupportedOSPlatform("windows")]
internal static class Program
{
    private const string MutexName = "Local\\GitHubCopilotChinese.Launcher";
    private static readonly HttpClient Http = new() { Timeout = TimeSpan.FromSeconds(2) };
    // 便携模式：日志与审计报告跟随 exe 所在目录，不再写死 %LOCALAPPDATA%
    private static readonly string DataDir = AppContext.BaseDirectory;
    private static readonly string LogPath = Path.Combine(DataDir, "launcher.log");
    private static readonly string AuditReportPath = Path.Combine(DataDir, "untranslated-report.json");
    private static readonly string AuditTextPath = Path.Combine(DataDir, "untranslated-report.txt");

    [STAThread]
    private static async Task Main(string[] args)
    {
        Directory.CreateDirectory(DataDir);
        Log("Launcher entry");
        using var mutex = new Mutex(true, MutexName, out var first);
        Log("Mutex result: " + first);
        if (!first) return;

        try
        {
            var config = LoadConfig();
            var appPath = GetArg(args, "--app") ?? config.AppPath;
            Log("Configured app path: " + appPath);
            if (string.IsNullOrWhiteSpace(appPath) || !File.Exists(appPath))
            {
                Show($"找不到 GitHub Copilot：\n{appPath}\n\n请修改 config.json 中的 appPath。", true);
                return;
            }

            appPath = Path.GetFullPath(appPath);
            if (IsAlreadyRunning(appPath))
            {
                Show("GitHub Copilot 已在运行。\n\n请从系统托盘完全退出 GitHub Copilot 后，再使用“GitHub Copilot 汉化”启动。");
                return;
            }

            var port = ReservePort();
            var script = ReadEmbeddedScript();
            Log($"Starting {appPath}; CDP port {port}");

            var psi = new ProcessStartInfo(appPath) {
                WorkingDirectory = Path.GetDirectoryName(appPath)!,
                UseShellExecute = false
            };
            var extra = $"--remote-debugging-port={port} --remote-allow-origins=http://127.0.0.1:{port}";
            if (psi.Environment.TryGetValue("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", out var existing) && !string.IsNullOrWhiteSpace(existing))
                extra = existing + " " + extra;
            psi.Environment["WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS"] = extra;
            psi.Environment["GITHUB_COPILOT_CHINESE"] = "1";
            ApplyUserProxy(psi);

            using var app = Process.Start(psi) ?? throw new InvalidOperationException("无法启动 GitHub Copilot。 ");
            var injected = false;
            string? lastTarget = null;
            var deadline = DateTime.UtcNow.AddSeconds(35);
            var nextAuditAt = DateTime.MinValue;
            string? lastAuditPayload = null;

            while (!app.HasExited)
            {
                try
                {
                    var target = await FindMainTarget(port);
                    if (target?.WebSocketDebuggerUrl is not null && (target.Id != lastTarget || !injected))
                    {
                        await Inject(new Uri(target.WebSocketDebuggerUrl), script);
                        lastTarget = target.Id;
                        injected = true;
                        nextAuditAt = DateTime.UtcNow.AddSeconds(2);
                        Log($"Injected target {target.Id} ({target.Url})");
                        Log($"Untranslated text report: {AuditReportPath}");
                    }

                    if (config.CaptureUntranslated && injected && target?.WebSocketDebuggerUrl is not null && DateTime.UtcNow >= nextAuditAt)
                    {
                        nextAuditAt = DateTime.UtcNow.AddSeconds(Math.Clamp(config.AuditIntervalSeconds, 3, 120));
                        var payload = await ReadAuditReport(new Uri(target.WebSocketDebuggerUrl));
                        if (string.IsNullOrWhiteSpace(payload) || payload.Trim().Equals("null", StringComparison.OrdinalIgnoreCase))
                        {
                            Log("Translation heartbeat missing; reinjecting current target.");
                            await Inject(new Uri(target.WebSocketDebuggerUrl), script);
                            nextAuditAt = DateTime.UtcNow.AddSeconds(2);
                        }
                        else if (!string.Equals(payload, lastAuditPayload, StringComparison.Ordinal))
                        {
                            WriteAuditReport(payload);
                            lastAuditPayload = payload;
                        }
                    }
                }
                catch (Exception ex)
                {
                    Log("Injection retry: " + ex.Message);
                }

                if (!injected && DateTime.UtcNow > deadline)
                {
                    Show("GitHub Copilot 已启动，但汉化脚本未能注入。\n\n请查看日志：\n" + LogPath);
                    return;
                }
                await Task.Delay(injected ? 2500 : 400);
                app.Refresh();
            }
        }
        catch (Exception ex)
        {
            Log(ex.ToString());
            Show("启动失败：\n" + ex.Message + "\n\n日志：\n" + LogPath, true);
        }
    }

    private static Config LoadConfig()
    {
        var path = Path.Combine(AppContext.BaseDirectory, "config.json");
        if (!File.Exists(path)) return new Config();
        return JsonSerializer.Deserialize<Config>(File.ReadAllText(path), JsonOptions) ?? new Config();
    }

    private static string? GetArg(string[] args, string name)
    {
        for (var i = 0; i < args.Length - 1; i++) if (args[i].Equals(name, StringComparison.OrdinalIgnoreCase)) return args[i + 1];
        return null;
    }

    private static bool IsAlreadyRunning(string appPath)
    {
        foreach (var process in Process.GetProcessesByName(Path.GetFileNameWithoutExtension(appPath)))
        {
            try { if (string.Equals(process.MainModule?.FileName, appPath, StringComparison.OrdinalIgnoreCase)) return true; }
            catch { }
            finally { process.Dispose(); }
        }
        return false;
    }

    private static int ReservePort()
    {
        var listener = new TcpListener(IPAddress.Loopback, 0);
        listener.Start();
        var port = ((IPEndPoint)listener.LocalEndpoint).Port;
        listener.Stop();
        return port;
    }

    private static string ReadEmbeddedScript()
    {
        // 热换字典：exe 旁的 zh-CN.js 优先于内置版本，更新字典无需重新编译
        var external = Path.Combine(AppContext.BaseDirectory, "zh-CN.js");
        if (File.Exists(external))
        {
            try
            {
                var disk = File.ReadAllText(external, new UTF8Encoding(false));
                if (disk.Contains("__githubCopilotChinese"))
                {
                    Log("Using external dictionary: " + external);
                    return disk;
                }
            }
            catch (Exception ex) { Log("External script read failed, falling back to embedded: " + ex.Message); }
        }
        using var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("GitHubCopilotChinese.inject.zh-CN.js")
            ?? throw new InvalidOperationException("内置汉化脚本不存在。");
        using var reader = new StreamReader(stream, Encoding.UTF8);
        return reader.ReadToEnd();
    }

    private static async Task<Target?> FindMainTarget(int port)
    {
        var json = await Http.GetStringAsync($"http://127.0.0.1:{port}/json");
        var targets = JsonSerializer.Deserialize<List<Target>>(json, JsonOptions) ?? [];
        return targets.FirstOrDefault(t => t.Type == "page" && t.Url.StartsWith("http://tauri.localhost", StringComparison.OrdinalIgnoreCase));
    }

    private static async Task Inject(Uri socketUri, string script, bool scanBundles = false)
    {
        using var socket = new ClientWebSocket();
        await socket.ConnectAsync(socketUri, CancellationToken.None);
        var id = 0;
        await Send(socket, ++id, "Page.enable", new { });
        await Send(socket, ++id, "Runtime.enable", new { });
        if (scanBundles)
        {
            // 按需开启 bundle 全量扫描（默认关闭以降低启动开销）
            const string prelude = "window.__copilotZhScanBundles = true;";
            await Send(socket, ++id, "Page.addScriptToEvaluateOnNewDocument", new { source = prelude });
            await Send(socket, ++id, "Runtime.evaluate", new { expression = prelude, returnByValue = true });
        }
        await Send(socket, ++id, "Page.addScriptToEvaluateOnNewDocument", new { source = script });
        await Send(socket, ++id, "Runtime.evaluate", new { expression = script, awaitPromise = true, returnByValue = true });
        await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "done", CancellationToken.None);
    }

    private static async Task Send(ClientWebSocket socket, int id, string method, object parameters)
    {
        _ = await Request(socket, id, method, parameters);
    }

    private static async Task<JsonElement> Request(ClientWebSocket socket, int id, string method, object parameters)
    {
        var payload = JsonSerializer.SerializeToUtf8Bytes(new { id, method, @params = parameters });
        await socket.SendAsync(payload, WebSocketMessageType.Text, true, CancellationToken.None);
        var buffer = new byte[64 * 1024];
        while (true)
        {
            using var body = new MemoryStream();
            WebSocketReceiveResult result;
            do
            {
                result = await socket.ReceiveAsync(buffer, CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Close)
                    throw new InvalidOperationException($"CDP 连接在等待 {method} 响应时已关闭。");
                body.Write(buffer, 0, result.Count);
            } while (!result.EndOfMessage);

            using var doc = JsonDocument.Parse(body.ToArray());
            if (!doc.RootElement.TryGetProperty("id", out var responseId) || responseId.GetInt32() != id) continue;
            if (doc.RootElement.TryGetProperty("error", out var error))
                throw new InvalidOperationException($"CDP {method}: {error}");
            return doc.RootElement.TryGetProperty("result", out var value) ? value.Clone() : default;
        }
    }

    private static async Task<string?> ReadAuditReport(Uri socketUri)
    {
        using var socket = new ClientWebSocket();
        await socket.ConnectAsync(socketUri, CancellationToken.None);
        var result = await Request(socket, 1, "Runtime.evaluate", new
        {
            expression = "JSON.stringify(window.__githubCopilotChinese?.getReport?.() ?? null)",
            awaitPromise = true,
            returnByValue = true
        });
        await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "done", CancellationToken.None);
        if (!result.TryGetProperty("result", out var remote) || !remote.TryGetProperty("value", out var value)) return null;
        return value.ValueKind == JsonValueKind.String ? value.GetString() : null;
    }

    private static void WriteAuditReport(string payload)
    {
        using var doc = JsonDocument.Parse(payload);
        var temp = AuditReportPath + ".tmp";
        File.WriteAllText(temp, payload, new UTF8Encoding(false));
        File.Move(temp, AuditReportPath, true);

        var text = new StringBuilder();
        var root = doc.RootElement;
        text.AppendLine("GitHub Copilot 汉化遗漏报告");
        text.AppendLine($"汉化版本：{root.GetProperty("translationVersion").GetString()}");
        text.AppendLine($"生成时间：{root.GetProperty("generatedAt").GetString()}");
        text.AppendLine();
        foreach (var section in new[] { "runtime", "bundle" })
        {
            text.AppendLine(section == "runtime" ? "=== 运行时界面遗漏 ===" : "=== 前端资源候选 ===");
            if (root.TryGetProperty(section, out var entries))
            {
                foreach (var entry in entries.EnumerateArray())
                {
                    if (!entry.TryGetProperty("text", out var value)) continue;
                    text.AppendLine(value.GetString());
                }
            }
            text.AppendLine();
        }
        File.WriteAllText(AuditTextPath, text.ToString(), new UTF8Encoding(true));
    }

    private static void ApplyUserProxy(ProcessStartInfo psi)
    {
        if (psi.Environment.ContainsKey("HTTPS_PROXY") || psi.Environment.ContainsKey("https_proxy"))
        {
            Log("Using existing proxy environment for GitHub Copilot child process.");
            return;
        }

        try
        {
            using var key = Registry.CurrentUser.OpenSubKey(@"Software\Microsoft\Windows\CurrentVersion\Internet Settings");
            var enabled = Convert.ToInt32(key?.GetValue("ProxyEnable", 0) ?? 0) != 0;
            var raw = key?.GetValue("ProxyServer") as string;
            if (!enabled || string.IsNullOrWhiteSpace(raw)) return;

            string? http = null;
            string? https = null;
            if (raw.Contains('='))
            {
                foreach (var item in raw.Split(';', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
                {
                    var parts = item.Split('=', 2, StringSplitOptions.TrimEntries);
                    if (parts.Length != 2) continue;
                    if (parts[0].Equals("http", StringComparison.OrdinalIgnoreCase)) http = parts[1];
                    if (parts[0].Equals("https", StringComparison.OrdinalIgnoreCase)) https = parts[1];
                }
            }
            else
            {
                http = raw;
                https = raw;
            }

            http = NormalizeProxy(http ?? https);
            https = NormalizeProxy(https ?? http);
            if (http is null || https is null) return;

            foreach (var name in new[] { "HTTP_PROXY", "http_proxy" }) psi.Environment[name] = http;
            foreach (var name in new[] { "HTTPS_PROXY", "https_proxy", "ALL_PROXY", "all_proxy" }) psi.Environment[name] = https;
            const string noProxy = "localhost,127.0.0.1,::1,tauri.localhost";
            psi.Environment["NO_PROXY"] = noProxy;
            psi.Environment["no_proxy"] = noProxy;
            Log($"Inherited active user proxy for GitHub Copilot child process: {MaskProxy(https)}");
        }
        catch (Exception ex)
        {
            Log("Unable to inherit user proxy: " + ex.Message);
        }
    }

    private static string? NormalizeProxy(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return null;
        value = value.Trim();
        return value.Contains("://", StringComparison.Ordinal) ? value : "http://" + value;
    }

    private static string MaskProxy(string value)
    {
        return Uri.TryCreate(value, UriKind.Absolute, out var uri)
            ? $"{uri.Scheme}://{uri.Host}:{uri.Port}"
            : "configured";
    }
    private static void Show(string text, bool error = false)
    {
        MessageBoxW(IntPtr.Zero, text, "GitHub Copilot 汉化", error ? 0x10u : 0x40u);
    }

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    private static extern int MessageBoxW(IntPtr hWnd, string text, string caption, uint type);
    private static void Log(string message)
    {
        try { File.AppendAllText(LogPath, $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {message}{Environment.NewLine}"); } catch { }
    }

    private static readonly JsonSerializerOptions JsonOptions = new() { PropertyNameCaseInsensitive = true, ReadCommentHandling = JsonCommentHandling.Skip };

    private sealed class Config
    {
        [JsonPropertyName("appPath")]
        public string AppPath { get; set; } = @"D:\GitHub Copilot\github.exe";

        [JsonPropertyName("captureUntranslated")]
        public bool CaptureUntranslated { get; set; } = true;

        [JsonPropertyName("scanBundles")]
        public bool ScanBundles { get; set; } = false;

        [JsonPropertyName("auditIntervalSeconds")]
        public int AuditIntervalSeconds { get; set; } = 8;
    }

    private sealed class Target
    {
        public string Id { get; set; } = "";
        public string Type { get; set; } = "";
        public string Title { get; set; } = "";
        public string Url { get; set; } = "";
        public string? WebSocketDebuggerUrl { get; set; }
    }
}
