<div align="center">

# Copilot App 汉化 · 增强版

**GitHub Copilot 桌面应用（Windows）的运行时简体中文汉化 —— 零侵入 · 全量覆盖 v1.3.0 · 热换字典**

[![License: PolyForm NC](https://img.shields.io/badge/License-PolyForm--Noncommercial--1.0.0-6A5ACD.svg)](LICENSE)
[![Copilot App](https://img.shields.io/badge/适配%20Copilot%20App-1.3.0-D97757.svg)](#支持范围)
[![Dictionary](https://img.shields.io/badge/字典-1700%2B%20词条-2D7D9A.svg)](#字典是怎么来的)
[![Platform](https://img.shields.io/badge/平台-Windows%20x64-0078D4.svg)](#安装)
[![Fork](https://img.shields.io/badge/fork%20of-khiqwq%2Fgithub--copilot--app--chinese-8B8B8B.svg)](https://github.com/khiqwq/github-copilot-app-chinese)

[主页](https://jensen-yao.github.io/copilot-app-zh/) · [安装](#安装) · [字典工作流](#字典工作流循环补全) · [构建](#构建)

</div>

---

> ⚠️ 非官方工具，与 GitHub, Inc. 无关联。仅限**非商业用途**（继承上游 [PolyForm Noncommercial 1.0.0](LICENSE) 许可）。

## 这个 Fork 增强了什么

在 [khiqwq/github-copilot-app-chinese](https://github.com/khiqwq/github-copilot-app-chinese)（v0.4.1，适配 1.1.2）基础上：

| | 上游 v0.4.1 | 本仓库 |
|---|---|---|
| 适配 Copilot App | 1.1.2 | **1.3.0**（基于运行时审计逐条补全） |
| 字典规模 | ~470 词条 | **1700+ 词条** + 8 个新动态模式 |
| 字典更新 | 需重新编译 | **热换**：替换 `zh-CN.js` 即生效 |
| 启动时 bundle 全量扫描 | 默认开启（每次启动扫 160 个 JS 文件） | **默认关闭**，`config.json` 一键开启 |
| 窗口隐藏时 | 后台仍全量重扫 | **暂停重扫**，零开销 |
| 重扫成本 | 每 750ms 全树翻译 | 先做**廉价预检**，仅含英文的节点才翻译 |
| 翻译缺口数据 | — | `tools/` 收割→筛选→合并流水线，可循环补全 |

**零侵入不变**：不修改 `github.exe`、不写官方文件、随时卸载还原。

## 安装

### 方式一：Release 安装包（推荐）

1. 从 [Releases](../../releases) 下载最新 `copilot-app-zh-vX.Y.Z-win-x64.zip`
2. 解压后双击 `setup.cmd`（或 `setup.ps1 -Action Install -Quiet` 静默安装）
3. 从系统托盘**完全退出** GitHub Copilot
4. 用桌面上的 **「GitHub Copilot 汉化」** 快捷方式启动

### 方式二：从源码构建

```powershell
git clone https://github.com/Jensen-Yao/copilot-app-zh.git
cd copilot-app-zh
powershell -File scripts/build.ps1        # 需要 .NET 8 SDK
# 产物: dist/GitHubCopilotChinese.exe + zh-CN.js + config.json
```

### 自定义安装目录（不装 C 盘）

安装器支持 `-InstallDir` 参数，且日志/审计报告**跟随 exe 所在目录**，完全便携：

```powershell
.\setup.ps1 -Action Install -Quiet -InstallDir "D:\Tools\copilot-zh" `
  -AppPath "F:\github-app\github.exe" -DesktopShortcut Yes -StartMenuShortcut Yes `
  -KeepOriginalShortcut Yes -ForceCloseCopilot
```

不指定 `-InstallDir` 时默认装到 `%LOCALAPPDATA%\GitHubCopilotChinese`。

把 `dist` 下三个文件放入 `%LOCALAPPDATA%\GitHubCopilotChinese\`，编辑 `config.json` 的 `appPath` 指向你的 `github.exe`，然后用任意快捷方式/命令启动该 exe 即可。

### 配置（`config.json`）

```jsonc
{
  "appPath": "F:\\github-app\\github.exe",  // Copilot App 位置
  "captureUntranslated": true,              // 运行时审计：记录漏翻文案（开销极小）
  "scanBundles": false,                     // bundle 全量扫描：默认关闭，补字典时开启
  "auditIntervalSeconds": 8                 // 审计轮询间隔
}
```

## 字典工作流（循环补全）

本仓库的核心是一套**可持续补全**的流水线，Copilot App 每次更新后照着跑一遍即可：

```text
运行 App（正常使用）
      │  运行时审计自动记录漏翻 → %LOCALAPPDATA%\GitHubCopilotChinese\untranslated-report.json
      ▼
tools/curate.mjs     筛选真实 UI 文案（剔除代码/测试/第三方噪音，GOOD_FILES 白名单 + 句式规则）
      ▼
gap/zh-*.json        人工/LLM 翻译缺口
      ▼
tools/merge_dict.py  合并进 inject/zh-CN.js（含 dynamic 正则模式）
      ▼
node --check 校验 → 拷到 %LOCALAPPDATA%\GitHubCopilotChinese\zh-CN.js
      ▼
重启 App —— 热换生效（无需重新编译）
```

开始菜单的「检查遗漏汉化」快捷方式可随时生成当次会话的漏翻报告（`run-audit.ps1`）。

## 支持范围

- **Copilot App 1.3.0**（2026-11）— 字典逐条核对
- 更早版本可用，新版本文案可能漏翻（跑一遍字典工作流即可补全）
- 聊天消息 / 代码块 / Markdown 内容**有意不翻译**（保留 Agent 输出原样）

## 构建

```powershell
scripts/build.ps1          # 主启动器（.NET 8, self-contained 单文件）
scripts/package.ps1        # 打包发布 ZIP
```

## 目录结构

```text
src/GitHubCopilotChinese/       启动器（C#）与注入脚本
  ├─ Program.cs                 CDP 注入、审计轮询、外挂字典加载
  └─ inject/zh-CN.js            翻译引擎 + 全部字典（嵌入资源，亦可外挂）
scripts/                        安装/构建/审计脚本（继承自上游）
tools/                          字典流水线（harvest / curate / merge_dict / verify）
gap/                            翻译数据（to-translate / zh-a / zh-b）
docs/                           GitHub Pages 主页
```

## 致谢与许可

- 本项目 fork 自 [khiqwq/github-copilot-app-chinese](https://github.com/khiqwq/github-copilot-app-chinese)，其 CDP 运行时注入架构、安装器与初始字典为本项目的基础 —— **感谢原作者**。
- 许可证：[PolyForm Noncommercial 1.0.0](LICENSE)（仅限非商业用途），衍生须保留 [NOTICE](NOTICE.md)。
- “GitHub Copilot” 是 GitHub, Inc. 的商标；本项目与其无隶属关系。
