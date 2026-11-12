# 贡献指南

感谢参与 GitHub Copilot App 中文启动器。

## 基本原则

1. 不修改 GitHub Copilot 安装目录和官方 `github.exe`。
2. 不向 Copilot CLI 的 `app.js` 注入翻译。
3. 翻译只处理 UI 文本、占位文字和无障碍属性。
4. 不翻译项目名、模型名、提供商名、斜杠命令名和代码内容。
5. 不为了汉化覆盖控件 class、颜色、字体或状态样式。
6. 不把 Token、API Key、用户消息或本地路径提交到仓库。

## 添加翻译

翻译表位于：

```text
src/GitHubCopilotChinese/inject/zh-CN.js
```

优先使用：

- `zh`：完整固定文案。
- `fragmentZh`：被 React 拆分成多个文本节点的片段。
- `dynamic()`：包含数量、名称、日期、状态或错误详情的动态文案。
- `formValueZh`：仅用于官方内置且可安全替换的默认表单值。

专业名词可使用中英双语，例如：

```js
zh.set('Max prompt tokens', '最大提示词令牌数（Max prompt tokens）');
```

## 发现遗漏文案

先通过汉化启动器运行 GitHub Copilot，然后执行：

```powershell
.\setup.ps1 -Action Audit
```

重点查看：

```text
%LOCALAPPDATA%\GitHubCopilotChinese\untranslated-report.txt
```

提交 Issue 或 PR 时请尽量提供：

- 英文原文
- 所在页面或操作路径
- GitHub Copilot App 版本
- 汉化启动器版本
- 截图（请遮盖仓库名、账号、Token 和用户消息）

## 本地验证

```powershell
node --check .\src\GitHubCopilotChinese\inject\zh-CN.js
node --check .\scripts\audit-ui.mjs

dotnet build .\src\GitHubCopilotChinese\GitHubCopilotChinese.csproj -c Release

.\setup.ps1 -Action Install -Quiet -WhatIf
.\setup.ps1 -Action Uninstall -Quiet -WhatIf
```

PowerShell 文件应通过 AST 语法检查，安装器的递归删除路径必须保持在：

```text
%LOCALAPPDATA%\GitHubCopilotChinese
```

## Pull Request 建议

- 一个 PR 尽量只处理一个页面、一个功能或一组相关文案。
- 说明为什么需要动态规则，而不是固定映射。
- 若修改安装器，请同时说明升级和卸载行为。
- 若新增快捷方式操作，必须支持卸载恢复。
## 贡献许可

提交代码、翻译或文档即表示你同意贡献内容按 PolyForm Noncommercial License 1.0.0 提供。贡献不得引入与非商业限制冲突的第三方代码。
