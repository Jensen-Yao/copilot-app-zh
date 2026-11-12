// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
using System.Diagnostics;
using System.IO.Compression;
using System.Reflection;
using System.Text;

namespace GitHubCopilotChinese.Setup;

internal static class Program
{
    private const string ResourceName = "GitHubCopilotChinese.Setup.payload.zip";

    private static int Main(string[] args)
    {
        Console.OutputEncoding = Encoding.UTF8;
        Console.InputEncoding = Encoding.UTF8;
        Console.Title = "GitHub Copilot 汉化 · 安装与卸载";
        Console.WriteLine("GitHub Copilot App 中文启动器");
        Console.WriteLine("正在准备安装菜单……");
        Console.WriteLine();

        var workDir = Path.Combine(Path.GetTempPath(), "GitHubCopilotChinese-Setup-" + Guid.NewGuid().ToString("N"));
        try
        {
            Directory.CreateDirectory(workDir);
            var zipPath = Path.Combine(workDir, "payload.zip");
            var extractDir = Path.Combine(workDir, "files");
            using (var resource = Assembly.GetExecutingAssembly().GetManifestResourceStream(ResourceName)
                ?? throw new InvalidOperationException("安装程序内未找到 payload.zip。"))
            using (var output = File.Create(zipPath))
                resource.CopyTo(output);

            ZipFile.ExtractToDirectory(zipPath, extractDir, overwriteFiles: true);
            var setupScript = Path.Combine(extractDir, "setup.ps1");
            if (!File.Exists(setupScript)) throw new FileNotFoundException("内嵌负载中缺少 setup.ps1。", setupScript);

            var psi = new ProcessStartInfo
            {
                FileName = "powershell.exe",
                WorkingDirectory = extractDir,
                UseShellExecute = false
            };
            psi.ArgumentList.Add("-NoProfile");
            psi.ArgumentList.Add("-ExecutionPolicy");
            psi.ArgumentList.Add("Bypass");
            psi.ArgumentList.Add("-File");
            psi.ArgumentList.Add(setupScript);

            if (Environment.GetEnvironmentVariable("GCC_EMBEDDED_TEST") == "1")
            {
                psi.ArgumentList.Add("-Action");
                psi.ArgumentList.Add("Status");
                psi.ArgumentList.Add("-Quiet");
            }
            else
            {
                foreach (var argument in args) psi.ArgumentList.Add(argument);
            }

            using var process = Process.Start(psi) ?? throw new InvalidOperationException("无法启动 PowerShell 安装菜单。");
            process.WaitForExit();
            return process.ExitCode;
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("安装程序启动失败：" + ex.Message);
            Console.ResetColor();
            Console.WriteLine();
            Console.WriteLine("按 Enter 退出……");
            Console.ReadLine();
            return 1;
        }
        finally
        {
            TryDelete(workDir);
        }
    }

    private static void TryDelete(string path)
    {
        for (var attempt = 0; attempt < 4; attempt++)
        {
            try
            {
                if (Directory.Exists(path)) Directory.Delete(path, recursive: true);
                return;
            }
            catch when (attempt < 3)
            {
                Thread.Sleep(250 * (attempt + 1));
            }
            catch { return; }
        }
    }
}