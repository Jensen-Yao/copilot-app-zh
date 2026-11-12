#Requires -Version 5.1
[CmdletBinding()]
param([switch]$NoPause)

$ErrorActionPreference = 'Stop'
$scriptPath = Join-Path $PSScriptRoot 'audit-ui.mjs'
if (-not (Test-Path -LiteralPath $scriptPath)) { throw "找不到巡检脚本：$scriptPath" }
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) { throw '未找到 Node.js。请安装 Node.js 18 或更高版本后再运行巡检。' }

try {
    & $node.Source $scriptPath
    if ($LASTEXITCODE -ne 0) { throw "巡检脚本退出代码：$LASTEXITCODE" }
    $report = Join-Path $env:LOCALAPPDATA 'GitHubCopilotChinese\untranslated-report.txt'
    Write-Host ''
    Write-Host '巡检完成。' -ForegroundColor Green
    Write-Host "报告：$report" -ForegroundColor Cyan
} catch {
    Write-Host "巡检失败：$($_.Exception.Message)" -ForegroundColor Red
    Write-Host '请确认 GitHub Copilot 已通过“GitHub Copilot 汉化”启动，并保持窗口打开。' -ForegroundColor Yellow
    if (-not $NoPause) { Read-Host '按 Enter 退出' | Out-Null }
    exit 1
}

if (-not $NoPause) { Read-Host '按 Enter 退出' | Out-Null }