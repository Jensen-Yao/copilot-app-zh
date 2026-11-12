#Requires -Version 5.1
[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Medium')]
param(
    [ValidateSet('Menu', 'Install', 'Repair', 'Uninstall', 'Status', 'Audit')]
    [string]$Action = 'Menu',

    [string]$AppPath,

    # 自定义安装目录（默认 %LOCALAPPDATA%\GitHubCopilotChinese；指定后完全便携，不写 C 盘）
    [string]$InstallDir,

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$DesktopShortcut = 'Ask',

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$StartMenuShortcut = 'Ask',

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$ReplaceOriginalShortcuts = 'Ask',

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$KeepOriginalShortcut = 'Ask',

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$AuditShortcut = 'Ask',

    [ValidateSet('Ask', 'Yes', 'No')]
    [string]$LaunchAfterInstall = 'Ask',

    [switch]$Quiet,
    [switch]$ForceCloseCopilot,
    [switch]$SkipBuild
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$Script:Root = Split-Path $PSScriptRoot -Parent
if ((Split-Path -Leaf $PSScriptRoot) -ne 'scripts') {
    $Script:Root = $PSScriptRoot
}
$Script:DistDir = Join-Path $Script:Root 'dist'
$Script:SourceExe = Join-Path $Script:DistDir 'GitHubCopilotChinese.exe'
$Script:InstallDir = if ($InstallDir) { [IO.Path]::GetFullPath($InstallDir) } else { Join-Path $env:LOCALAPPDATA 'GitHubCopilotChinese' }
$Script:InstalledExe = Join-Path $Script:InstallDir 'GitHubCopilotChinese.exe'
$Script:InstalledConfig = Join-Path $Script:InstallDir 'config.json'
$Script:StatePath = Join-Path $Script:InstallDir 'install-state.json'
$Script:BackupDir = Join-Path $Script:InstallDir 'shortcut-backups'
$Script:DesktopDir = [Environment]::GetFolderPath('Desktop')
$Script:ProgramsDir = [Environment]::GetFolderPath('Programs')
$Script:StartMenuDir = Join-Path $Script:ProgramsDir 'GitHub Copilot 汉化'
$Script:DesktopChineseLink = Join-Path $Script:DesktopDir 'GitHub Copilot 汉化.lnk'
$Script:StartChineseLink = Join-Path $Script:StartMenuDir 'GitHub Copilot 汉化.lnk'
$Script:DesktopOriginalLink = Join-Path $Script:DesktopDir 'GitHub Copilot（原版）.lnk'
$Script:StartOriginalLink = Join-Path $Script:StartMenuDir 'GitHub Copilot（原版）.lnk'
$Script:AuditLink = Join-Path $Script:StartMenuDir '检查遗漏汉化.lnk'
$Script:Wsh = New-Object -ComObject WScript.Shell

function Write-Title([string]$Text) {
    if ($Quiet) { return }
    Write-Host ''
    Write-Host ('=' * 68) -ForegroundColor DarkCyan
    Write-Host ('  ' + $Text) -ForegroundColor Cyan
    Write-Host ('=' * 68) -ForegroundColor DarkCyan
}

function Write-Info([string]$Text) { if (-not $Quiet) { Write-Host ('[信息] ' + $Text) -ForegroundColor Cyan } }
function Write-Ok([string]$Text) { if (-not $Quiet) { Write-Host ('[完成] ' + $Text) -ForegroundColor Green } }
function Write-Warn([string]$Text) { if (-not $Quiet) { Write-Host ('[注意] ' + $Text) -ForegroundColor Yellow } }

function Read-YesNo([string]$Question, [bool]$Default = $true) {
    if ($Quiet) { return $Default }
    $hint = if ($Default) { '[Y/n]' } else { '[y/N]' }
    while ($true) {
        $answer = (Read-Host "$Question $hint").Trim().ToLowerInvariant()
        if (-not $answer) { return $Default }
        if ($answer -in @('y', 'yes', '是', '1')) { return $true }
        if ($answer -in @('n', 'no', '否', '0')) { return $false }
        Write-Warn '请输入 Y 或 N。'
    }
}

function Resolve-TriState([string]$Value, [string]$Question, [bool]$Default) {
    if ($Value -eq 'Yes') { return $true }
    if ($Value -eq 'No') { return $false }
    return Read-YesNo $Question $Default
}

function Get-ShortcutInfo([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { return $null }
    try {
        $shortcut = $Script:Wsh.CreateShortcut($Path)
        return [pscustomobject]@{
            Path = $Path
            TargetPath = $shortcut.TargetPath
            Arguments = $shortcut.Arguments
            WorkingDirectory = $shortcut.WorkingDirectory
            IconLocation = $shortcut.IconLocation
            Description = $shortcut.Description
        }
    } catch { return $null }
}

function New-Shortcut {
    param(
        [Parameter(Mandatory)][string]$Path,
        [Parameter(Mandatory)][string]$Target,
        [string]$Arguments = '',
        [string]$WorkingDirectory = '',
        [string]$IconLocation = '',
        [string]$Description = ''
    )
    $parent = Split-Path -Parent $Path
    if ($parent) { New-Item -ItemType Directory -Force -Path $parent | Out-Null }
    $shortcut = $Script:Wsh.CreateShortcut($Path)
    $shortcut.TargetPath = $Target
    $shortcut.Arguments = $Arguments
    $shortcut.WorkingDirectory = if ($WorkingDirectory) { $WorkingDirectory } else { Split-Path -Parent $Target }
    if ($IconLocation) { $shortcut.IconLocation = $IconLocation }
    if ($Description) { $shortcut.Description = $Description }
    $shortcut.Save()
}

function Get-InstalledState {
    if (-not (Test-Path -LiteralPath $Script:StatePath)) { return $null }
    try { return Get-Content -LiteralPath $Script:StatePath -Raw -Encoding UTF8 | ConvertFrom-Json } catch { return $null }
}

function Save-InstalledState([hashtable]$State) {
    New-Item -ItemType Directory -Force -Path $Script:InstallDir | Out-Null
    $State | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $Script:StatePath -Encoding UTF8
}

function Test-CopilotExecutable([string]$Path) {
    return $Path -and (Test-Path -LiteralPath $Path -PathType Leaf) -and ([IO.Path]::GetFileName($Path) -ieq 'github.exe')
}

function Get-CopilotCandidates {
    $candidates = [System.Collections.Generic.List[string]]::new()
    $state = Get-InstalledState
    if ($state -and $state.appPath) { $candidates.Add([string]$state.appPath) }
    if (Test-Path -LiteralPath $Script:InstalledConfig) {
        try {
            $config = Get-Content -LiteralPath $Script:InstalledConfig -Raw -Encoding UTF8 | ConvertFrom-Json
            if ($config.appPath) { $candidates.Add([string]$config.appPath) }
        } catch { }
    }
    foreach ($process in Get-Process github -ErrorAction SilentlyContinue) {
        try { if ($process.Path) { $candidates.Add($process.Path) } } catch { }
    }
    foreach ($path in @(
        'D:\GitHub Copilot\github.exe',
        (Join-Path $env:LOCALAPPDATA 'Programs\GitHub Copilot\github.exe'),
        (Join-Path $env:LOCALAPPDATA 'GitHub Copilot\github.exe'),
        (Join-Path $env:ProgramFiles 'GitHub Copilot\github.exe'),
        $(if (${env:ProgramFiles(x86)}) { Join-Path ${env:ProgramFiles(x86)} 'GitHub Copilot\github.exe' })
    )) { if ($path) { $candidates.Add($path) } }

    $registryRoots = @(
        'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
        'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*',
        'HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'
    )
    foreach ($root in $registryRoots) {
        foreach ($entry in Get-ItemProperty $root -ErrorAction SilentlyContinue) {
            $displayNameProperty = $entry.PSObject.Properties['DisplayName']
            if (-not $displayNameProperty -or [string]$displayNameProperty.Value -notlike '*GitHub Copilot*') { continue }
            $installProperty = $entry.PSObject.Properties['InstallLocation']
            if ($installProperty -and $installProperty.Value) {
                $location = ([string]$installProperty.Value).Trim().Trim('"')
                if ($location) { $candidates.Add((Join-Path $location 'github.exe')) }
            }
            $iconProperty = $entry.PSObject.Properties['DisplayIcon']
            if ($iconProperty -and $iconProperty.Value) {
                $candidates.Add((([string]$iconProperty.Value -replace ',\d+$', '').Trim().Trim('"')))
            }
        }
    }


    return @($candidates | ForEach-Object {
        try { [IO.Path]::GetFullPath($_) } catch { $_ }
    } | Where-Object { Test-CopilotExecutable $_ } | Sort-Object -Unique)
}

function Resolve-CopilotPath([string]$RequestedPath) {
    if ($RequestedPath) {
        if (-not (Test-CopilotExecutable $RequestedPath)) { throw "找不到 GitHub Copilot 主程序：$RequestedPath" }
        return [IO.Path]::GetFullPath($RequestedPath)
    }
    $candidates = @(Get-CopilotCandidates)
    if ($candidates.Count -eq 1) { return $candidates[0] }
    if ($candidates.Count -gt 1 -and -not $Quiet) {
        Write-Host '检测到多个 GitHub Copilot 安装：' -ForegroundColor Yellow
        for ($i = 0; $i -lt $candidates.Count; $i++) { Write-Host "  $($i + 1). $($candidates[$i])" }
        Write-Host '  M. 手动输入路径'
        while ($true) {
            $choice = (Read-Host '请选择').Trim()
            if ($choice -match '^\d+$' -and [int]$choice -ge 1 -and [int]$choice -le $candidates.Count) { return $candidates[[int]$choice - 1] }
            if ($choice -match '^[mM]$') { break }
        }
    } elseif ($candidates.Count -gt 0) { return $candidates[0] }
    if ($Quiet) { throw '未能自动检测 GitHub Copilot，请通过 -AppPath 指定 github.exe。' }
    while ($true) {
        $manual = (Read-Host '请输入 github.exe 的完整路径').Trim('"')
        if (Test-CopilotExecutable $manual) { return [IO.Path]::GetFullPath($manual) }
        Write-Warn '路径无效，请重新输入。'
    }
}

function Get-LauncherVersion([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path)) { return $null }
    try { return (Get-Item -LiteralPath $Path).VersionInfo.ProductVersion } catch { return $null }
}

function Ensure-Build {
    if (Test-Path -LiteralPath $Script:SourceExe) { return }
    if ($SkipBuild) { throw "缺少构建产物：$Script:SourceExe" }
    $buildScript = Join-Path $Script:Root 'scripts\build.ps1'
    if (-not (Test-Path -LiteralPath $buildScript)) { throw '缺少 build.ps1，无法自动构建。' }
    if (-not (Get-Command dotnet -ErrorAction SilentlyContinue)) { throw '未找到 .NET SDK，且 dist 中没有可安装程序。' }
    Write-Info '未发现构建产物，正在自动构建……'
    & $buildScript
    if (-not (Test-Path -LiteralPath $Script:SourceExe)) { throw '构建完成后仍未找到 GitHubCopilotChinese.exe。' }
}

function Stop-LauncherProcess {
    $currentPid = $PID
    foreach ($process in Get-Process GitHubCopilotChinese -ErrorAction SilentlyContinue | Where-Object { $_.Id -ne $currentPid }) {
        try { Stop-Process -Id $process.Id -Force -ErrorAction Stop; Write-Info "已停止旧版汉化启动器进程 $($process.Id)。" } catch { }
    }
}

function Stop-CopilotIfRequested {
    $running = @(Get-Process github -ErrorAction SilentlyContinue)
    if ($running.Count -eq 0) { return }
    if ($ForceCloseCopilot -or ((-not $Quiet) -and (Read-YesNo 'GitHub Copilot 正在运行。是否立即关闭，以便让新版完整生效？' $false))) {
        $running | Stop-Process -Force
        Start-Sleep -Seconds 2
        Write-Info '已关闭 GitHub Copilot。'
    } else {
        Write-Warn 'GitHub Copilot 仍在运行；新版将在下次完全退出并重新启动后完整生效。'
    }
}

function Get-OriginalShortcutCandidates([string]$CopilotPath) {
    $paths = [System.Collections.Generic.List[string]]::new()
    foreach ($base in @($Script:DesktopDir, $Script:ProgramsDir)) {
        if (-not (Test-Path -LiteralPath $base)) { continue }
        foreach ($link in Get-ChildItem -LiteralPath $base -Filter '*.lnk' -File -Recurse -ErrorAction SilentlyContinue) {
            if ($link.Name -like '*汉化*' -or $link.Name -like '*原版*' -or $link.FullName -eq $Script:AuditLink) { continue }
            $info = Get-ShortcutInfo $link.FullName
            if (-not $info) { continue }
            $isCopilotTarget = $info.TargetPath -and ([IO.Path]::GetFileName($info.TargetPath) -ieq 'github.exe') -and ($info.TargetPath -like '*GitHub*Copilot*')
            if ($isCopilotTarget -or ($info.TargetPath -and ([IO.Path]::GetFullPath($info.TargetPath) -ieq [IO.Path]::GetFullPath($CopilotPath)))) {
                $paths.Add($link.FullName)
            }
        }
    }
    return @($paths | Sort-Object -Unique)
}

function Restore-ReplacedShortcuts($State) {
    if (-not $State -or -not $State.replacements) { return }
    foreach ($item in @($State.replacements)) {
        $originalPath = [string]$item.originalPath
        $backupPath = [string]$item.backupPath
        if ($originalPath -and $backupPath -and (Test-Path -LiteralPath $backupPath)) {
            $parent = Split-Path -Parent $originalPath
            if ($parent) { New-Item -ItemType Directory -Force -Path $parent | Out-Null }
            Copy-Item -LiteralPath $backupPath -Destination $originalPath -Force
            Write-Info "已恢复原快捷方式：$originalPath"
        }
    }
}

function Replace-OriginalShortcuts([string]$CopilotPath, $ExistingState) {
    New-Item -ItemType Directory -Force -Path $Script:BackupDir | Out-Null
    $records = [System.Collections.Generic.List[object]]::new()
    $existingByPath = @{}
    if ($ExistingState -and $ExistingState.replacements) {
        foreach ($record in @($ExistingState.replacements)) {
            $existingByPath[[string]$record.originalPath] = $record
            if (Test-Path -LiteralPath ([string]$record.backupPath)) {
                $records.Add($record)
                New-Shortcut -Path ([string]$record.originalPath) -Target $Script:InstalledExe -WorkingDirectory $Script:InstallDir -IconLocation "$CopilotPath,0" -Description '以中文界面启动 GitHub Copilot（原快捷方式已备份）'
            }
        }
    }
    foreach ($shortcutPath in @(Get-OriginalShortcutCandidates $CopilotPath)) {
        if ($shortcutPath -eq $Script:DesktopChineseLink -or $shortcutPath -eq $Script:StartChineseLink) { continue }
        if ($existingByPath.ContainsKey($shortcutPath) -and (Test-Path -LiteralPath ([string]$existingByPath[$shortcutPath].backupPath))) {
            if (-not ($records | Where-Object { [string]$_.originalPath -eq $shortcutPath })) { $records.Add($existingByPath[$shortcutPath]) }
        } else {
            $safeName = ([IO.Path]::GetFileNameWithoutExtension($shortcutPath) -replace '[^\w\-.\u4e00-\u9fff]', '_')
            $backupPath = Join-Path $Script:BackupDir ("$safeName-$([guid]::NewGuid().ToString('N').Substring(0,8)).lnk")
            Copy-Item -LiteralPath $shortcutPath -Destination $backupPath -Force
            $records.Add([pscustomobject]@{ originalPath = $shortcutPath; backupPath = $backupPath })
        }
        New-Shortcut -Path $shortcutPath -Target $Script:InstalledExe -WorkingDirectory $Script:InstallDir -IconLocation "$CopilotPath,0" -Description '以中文界面启动 GitHub Copilot（原快捷方式已备份）'
        Write-Info "已替换并备份：$shortcutPath"
    }
    return @($records)
}

function Install-AuditFiles {
    foreach ($name in @('audit-ui.mjs', 'run-audit.ps1')) {
        $source = Join-Path (Join-Path $Script:Root 'scripts') $name
        if (Test-Path -LiteralPath $source) { Copy-Item -LiteralPath $source -Destination (Join-Path $Script:InstallDir $name) -Force }
    }
}

function Configure-Shortcuts {
    param(
        [string]$CopilotPath,
        [bool]$CreateDesktop,
        [bool]$CreateStartMenu,
        [bool]$ReplaceOriginal,
        [bool]$KeepOriginal,
        [bool]$CreateAudit,
        $ExistingState
    )
    if ($CreateDesktop) {
        New-Shortcut -Path $Script:DesktopChineseLink -Target $Script:InstalledExe -WorkingDirectory $Script:InstallDir -IconLocation "$CopilotPath,0" -Description '以中文界面启动 GitHub Copilot'
    } elseif (Test-Path -LiteralPath $Script:DesktopChineseLink) { Remove-Item -LiteralPath $Script:DesktopChineseLink -Force }

    if ($CreateStartMenu) {
        New-Shortcut -Path $Script:StartChineseLink -Target $Script:InstalledExe -WorkingDirectory $Script:InstallDir -IconLocation "$CopilotPath,0" -Description '以中文界面启动 GitHub Copilot'
    } elseif (Test-Path -LiteralPath $Script:StartChineseLink) { Remove-Item -LiteralPath $Script:StartChineseLink -Force }

    if ($KeepOriginal) {
        if ($CreateDesktop -or $ReplaceOriginal) { New-Shortcut -Path $Script:DesktopOriginalLink -Target $CopilotPath -WorkingDirectory (Split-Path -Parent $CopilotPath) -IconLocation "$CopilotPath,0" -Description '不加载汉化，直接启动原版 GitHub Copilot' }
        if ($CreateStartMenu -or $ReplaceOriginal) { New-Shortcut -Path $Script:StartOriginalLink -Target $CopilotPath -WorkingDirectory (Split-Path -Parent $CopilotPath) -IconLocation "$CopilotPath,0" -Description '不加载汉化，直接启动原版 GitHub Copilot' }
    } else {
        foreach ($path in @($Script:DesktopOriginalLink, $Script:StartOriginalLink)) { if (Test-Path -LiteralPath $path) { Remove-Item -LiteralPath $path -Force } }
    }

    if ($CreateAudit -and (Test-Path -LiteralPath (Join-Path $Script:InstallDir 'run-audit.ps1'))) {
        New-Shortcut -Path $Script:AuditLink -Target 'powershell.exe' -Arguments "-NoProfile -ExecutionPolicy Bypass -File `"$(Join-Path $Script:InstallDir 'run-audit.ps1')`"" -WorkingDirectory $Script:InstallDir -IconLocation "$CopilotPath,0" -Description '自动遍历主要界面并导出待汉化文案报告'
    } elseif (Test-Path -LiteralPath $Script:AuditLink) { Remove-Item -LiteralPath $Script:AuditLink -Force }

    if ($ReplaceOriginal) { return @(Replace-OriginalShortcuts $CopilotPath $ExistingState) }
    Restore-ReplacedShortcuts $ExistingState
    return @()
}

function Invoke-Install([bool]$RepairOnly = $false) {
    Write-Title $(if ($RepairOnly) { '修复 GitHub Copilot 汉化安装' } else { '安装 / 更新 GitHub Copilot 汉化' })
    $copilotPath = Resolve-CopilotPath $AppPath
    Write-Info "GitHub Copilot：$copilotPath"
    Ensure-Build
    $existingState = Get-InstalledState

    $desktop = Resolve-TriState $DesktopShortcut '是否创建“GitHub Copilot 汉化”桌面快捷方式？' $true
    $start = Resolve-TriState $StartMenuShortcut '是否创建开始菜单快捷方式？' $true
    $replace = Resolve-TriState $ReplaceOriginalShortcuts '是否备份并替换现有的原版 GitHub Copilot 快捷方式？' $false
    $keepOriginal = Resolve-TriState $KeepOriginalShortcut '是否额外保留“GitHub Copilot（原版）”快捷方式？' $true
    $audit = Resolve-TriState $AuditShortcut '是否在开始菜单添加“检查遗漏汉化”快捷方式？' $true
    $launch = Resolve-TriState $LaunchAfterInstall '完成后是否启动 GitHub Copilot 汉化？' $true

    if (-not $PSCmdlet.ShouldProcess($Script:InstallDir, $(if ($RepairOnly) { '修复汉化安装和快捷方式' } else { '安装或更新汉化启动器' }))) { return }
    Stop-LauncherProcess
    Stop-CopilotIfRequested
    New-Item -ItemType Directory -Force -Path $Script:InstallDir | Out-Null
    if (-not $RepairOnly -or -not (Test-Path -LiteralPath $Script:InstalledExe)) {
        Copy-Item -LiteralPath $Script:SourceExe -Destination $Script:InstalledExe -Force
    }
    @{ appPath = $copilotPath; language = 'zh-CN'; captureUntranslated = $true; auditIntervalSeconds = 8 } | ConvertTo-Json | Set-Content -LiteralPath $Script:InstalledConfig -Encoding UTF8
    Install-AuditFiles
    $replacements = @(Configure-Shortcuts -CopilotPath $copilotPath -CreateDesktop $desktop -CreateStartMenu $start -ReplaceOriginal $replace -KeepOriginal $keepOriginal -CreateAudit $audit -ExistingState $existingState)

    $state = @{
        schemaVersion = 1
        installedAt = (Get-Date).ToString('o')
        launcherVersion = Get-LauncherVersion $Script:InstalledExe
        appPath = $copilotPath
        desktopShortcut = $desktop
        startMenuShortcut = $start
        replaceOriginalShortcuts = $replace
        keepOriginalShortcut = $keepOriginal
        auditShortcut = $audit
        replacements = $replacements
    }
    Save-InstalledState $state
    Write-Ok "汉化启动器已安装：$Script:InstalledExe"
    Write-Ok "版本：$($state.launcherVersion)"
    if ($replace -and $replacements.Count -eq 0) { Write-Warn '没有找到可替换的原版快捷方式；专用汉化快捷方式仍已按选择创建。' }
    if ($launch) {
        if (@(Get-Process github -ErrorAction SilentlyContinue).Count -gt 0) {
            Write-Warn '原应用仍在运行，未重复启动。完全退出后请使用汉化快捷方式重新打开。'
        } else {
            Start-Process -FilePath $Script:InstalledExe -WorkingDirectory $Script:InstallDir
            Write-Ok '已启动 GitHub Copilot 汉化。'
        }
    }
}

function Invoke-Uninstall {
    Write-Title '卸载 GitHub Copilot 汉化'
    $state = Get-InstalledState
    if (-not (Test-Path -LiteralPath $Script:InstallDir) -and -not $state) {
        Write-Info '未检测到已安装的汉化启动器。'
        return
    }
    $restore = if ($Quiet) { $true } else { Read-YesNo '是否恢复之前被替换的原版快捷方式？' $true }
    if (-not $PSCmdlet.ShouldProcess($Script:InstallDir, '卸载汉化启动器并清理快捷方式')) { return }
    Stop-LauncherProcess
    if ($restore) { Restore-ReplacedShortcuts $state }
    foreach ($path in @($Script:DesktopChineseLink, $Script:DesktopOriginalLink, $Script:StartChineseLink, $Script:StartOriginalLink, $Script:AuditLink)) {
        if ($path -and (Test-Path -LiteralPath $path)) { Remove-Item -LiteralPath $path -Force }
    }
    if (Test-Path -LiteralPath $Script:StartMenuDir) {
        $remaining = @(Get-ChildItem -LiteralPath $Script:StartMenuDir -Force -ErrorAction SilentlyContinue)
        if ($remaining.Count -eq 0) { Remove-Item -LiteralPath $Script:StartMenuDir -Force }
    }
    if (Test-Path -LiteralPath $Script:InstallDir) {
        $resolved = [IO.Path]::GetFullPath($Script:InstallDir)
        $expected = [IO.Path]::GetFullPath((Join-Path $env:LOCALAPPDATA 'GitHubCopilotChinese'))
        if ($resolved -ne $expected) { throw "拒绝删除非预期目录：$resolved" }
        Remove-Item -LiteralPath $resolved -Recurse -Force
    }
    Write-Ok '汉化启动器已卸载；GitHub Copilot 原始安装文件未被修改。'
}

function Show-Status {
    Write-Title 'GitHub Copilot 汉化状态'
    $state = Get-InstalledState
    $candidates = @(Get-CopilotCandidates)
    Write-Host ('安装状态：' + $(if (Test-Path -LiteralPath $Script:InstalledExe) { '已安装' } else { '未安装' }))
    Write-Host ('汉化版本：' + $(if (Test-Path -LiteralPath $Script:InstalledExe) { Get-LauncherVersion $Script:InstalledExe } else { '-' }))
    Write-Host ('安装目录：' + $Script:InstallDir)
    Write-Host ('Copilot 路径：' + $(if ($state -and $state.appPath) { $state.appPath } elseif ($candidates.Count) { $candidates[0] } else { '未检测到' }))
    Write-Host ('桌面快捷方式：' + $(if (Test-Path -LiteralPath $Script:DesktopChineseLink) { '有' } else { '无' }))
    Write-Host ('开始菜单快捷方式：' + $(if (Test-Path -LiteralPath $Script:StartChineseLink) { '有' } else { '无' }))
    Write-Host ('替换原快捷方式：' + $(if ($state -and $state.replaceOriginalShortcuts) { '是' } else { '否' }))
    Write-Host ('正在运行：' + $(if (@(Get-Process github -ErrorAction SilentlyContinue).Count) { 'GitHub Copilot' } else { '否' }))
    $report = Join-Path $Script:InstallDir 'untranslated-report.txt'
    Write-Host ('审计报告：' + $(if (Test-Path -LiteralPath $report) { $report } else { '尚未生成' }))
}

function Invoke-Audit {
    $script = if (Test-Path -LiteralPath (Join-Path $Script:InstallDir 'run-audit.ps1')) { Join-Path $Script:InstallDir 'run-audit.ps1' } else { Join-Path $Script:Root 'scripts\run-audit.ps1' }
    if (-not (Test-Path -LiteralPath $script)) { throw '找不到巡检脚本。请先安装或从完整源码仓库运行。' }
    if (-not $PSCmdlet.ShouldProcess('当前 GitHub Copilot 界面', '执行安全自动巡检并生成报告')) { return }
    & $script -NoPause
}

function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Title 'GitHub Copilot App 中文启动器 · 通用安装工具'
        $version = Get-LauncherVersion $Script:InstalledExe
        Write-Host "  当前状态：$(if ($version) { "已安装 $version" } else { '未安装' })"
        Write-Host ''
        Write-Host '  1. 安装或更新（推荐）'
        Write-Host '  2. 修复配置与快捷方式'
        Write-Host '  3. 查看安装状态'
        Write-Host '  4. 执行汉化完整巡检'
        Write-Host '  5. 卸载汉化并恢复原快捷方式'
        Write-Host '  0. 退出'
        Write-Host ''
        $choice = (Read-Host '请选择操作').Trim()
        try {
            switch ($choice) {
                '1' { Invoke-Install $false }
                '2' { Invoke-Install $true }
                '3' { Show-Status }
                '4' { Invoke-Audit }
                '5' { Invoke-Uninstall }
                '0' { return }
                default { Write-Warn '无效选项。' }
            }
        } catch { Write-Host "[错误] $($_.Exception.Message)" -ForegroundColor Red }
        if ($choice -ne '0') { Write-Host ''; Read-Host '按 Enter 返回主菜单' | Out-Null }
    }
}

switch ($Action) {
    'Menu' { Show-Menu }
    'Install' { Invoke-Install $false }
    'Repair' { Invoke-Install $true }
    'Uninstall' { Invoke-Uninstall }
    'Status' { Show-Status }
    'Audit' { Invoke-Audit }
}