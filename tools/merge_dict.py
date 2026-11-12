# -*- coding: utf-8 -*-
# 将 gap/zh-a.json + gap/zh-b.json 合并进 inject/zh-CN.js，并应用引擎性能优化
import json, io, sys

ROOT = r'F:\copilot-zh\repo'
JS = ROOT + r'\src\GitHubCopilotChinese\inject\zh-CN.js'

src = io.open(JS, encoding='utf-8').read()
orig = src

# 1) 版本号
src = src.replace("const VERSION = '0.4.1';", "const VERSION = '1.3.0-jy.1';", 1)
assert "1.3.0-jy.1" in src

# 2) 新 dynamic 模式（插在 dynamic() 的 return s; 之前）
dyn_marker = "    return s;\n  }\n\n  function translateValue"
assert dyn_marker in src, 'dynamic 结尾标记未找到'
dyn_block = """    if ((m = s.match(/^(.+), open user menu$/))) return `打开 ${m[1]} 的用户菜单`;
    if ((m = s.match(/^Environment: (.+)$/))) return `环境：${known(m[1])}`;
    if ((m = s.match(/^Repository: (.+)$/))) return `仓库：${known(m[1])}`;
    if ((m = s.match(/^Free, (\\d+(?:\\.\\d+)?) GB$/))) return `可用 ${m[1]} GB`;
    if ((m = s.match(/^Free up disk space\\. (\\d+) GB free\\. Copilot sessions use (\\d+) MB\\.$/))) return `释放磁盘空间。可用 ${m[1]} GB，Copilot 会话占用 ${m[2]} MB。`;
    if ((m = s.match(/^Restore v(.+)$/))) return `恢复 v${m[1]}`;
    if ((m = s.match(/^Archive (\\d+) sessions?$/))) return `归档 ${m[1]} 个会话`;
    if ((m = s.match(/^Loading (.+)$/))) return `正在加载 ${m[1]}`;
"""
src = src.replace(dyn_marker, dyn_block + dyn_marker, 1)

# 3) 字典合并（插在 skipSelector 之前）
words = {}
for part in ('a', 'b'):
    words.update(json.load(io.open(rf'{ROOT}\gap\zh-{part}.json', encoding='utf-8')))
words.update({  # 少量补充
    'MONDAY': '周一', 'TUESDAY': '周二', 'SUNDAY': '周日',
    'Computer Use': 'Computer Use',
})

def js_str(v: str) -> str:
    return json.dumps(v, ensure_ascii=False)

entries = ',\n'.join(f'{js_str(k)}:{js_str(v)}' for k, v in words.items())
dict_block = f"""
  // ===== v1.3.0 扩展字典（本仓库自动生成，{len(words)} 条）=====
  for (const [key, value] of Object.entries({{
{entries}
  }})) zh.set(key, value);

"""
marker = '  const skipSelector = '
assert marker in src
src = src.replace(marker, dict_block + marker, 1)

# 4) 性能：重扫定时器 — 隐藏时暂停 + 廉价预检
old_rescan = """    window.__githubCopilotChineseRescanTimer = setInterval(() => {
      document.querySelectorAll('[aria-live],[role="tooltip"],[role="menu"],[role="listbox"],[role="dialog"]').forEach(translateTree);
    }, 750);"""
new_rescan = """    window.__githubCopilotChineseRescanTimer = setInterval(() => {
      if (document.hidden) return; // 性能：窗口隐藏/最小化时暂停重扫
      document.querySelectorAll('[aria-live],[role="tooltip"],[role="menu"],[role="listbox"],[role="dialog"]')
        .forEach(el => { if (/[A-Za-z]/.test(el.textContent || '')) translateTree(el); }); // 性能：廉价预检再翻译
    }, 1000);"""
assert old_rescan in src, '重扫定时器未找到'
src = src.replace(old_rescan, new_rescan, 1)

# 5) 性能：bundle 全量扫描改为按需（默认关闭，审计时或 __copilotZhScanBundles 时才扫）
old_scan = """    const runStaticScan = () => scanResources().catch(() => {});
    if ('requestIdleCallback' in window) requestIdleCallback(runStaticScan, { timeout: 4000 });
    else setTimeout(runStaticScan, 1500);"""
new_scan = """    // 性能：bundle 全量扫描改为按需（默认关闭；审计快捷方式或 window.__copilotZhScanBundles 开启时执行）
    const runStaticScan = () => scanResources().catch(() => {});
    if (window.__copilotZhScanBundles) {
      if ('requestIdleCallback' in window) requestIdleCallback(runStaticScan, { timeout: 4000 });
      else setTimeout(runStaticScan, 1500);
    }"""
assert old_scan in src, '静态扫描未找到'
src = src.replace(old_scan, new_scan, 1)

assert src != orig
io.open(JS, 'w', encoding='utf-8', newline='\n').write(src)
print(f'完成：字典 +{len(words)} 条，dynamic +8 模式，性能修改 3 处，总行数 {src.count(chr(10))+1}')
