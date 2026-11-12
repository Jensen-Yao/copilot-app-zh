[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [string]$AppPath,
    [ValidateSet('Ask','Yes','No')][string]$DesktopShortcut = 'Ask',
    [ValidateSet('Ask','Yes','No')][string]$StartMenuShortcut = 'Ask',
    [ValidateSet('Ask','Yes','No')][string]$ReplaceOriginalShortcuts = 'Ask',
    [ValidateSet('Ask','Yes','No')][string]$KeepOriginalShortcut = 'Ask',
    [ValidateSet('Ask','Yes','No')][string]$AuditShortcut = 'Ask',
    [ValidateSet('Ask','Yes','No')][string]$LaunchAfterInstall = 'Ask',
    [switch]$Quiet,
    [switch]$ForceCloseCopilot,
    [switch]$SkipBuild
)
$root = Split-Path $PSScriptRoot -Parent
& (Join-Path $root 'setup.ps1') -Action Install -AppPath $AppPath -DesktopShortcut $DesktopShortcut -StartMenuShortcut $StartMenuShortcut -ReplaceOriginalShortcuts $ReplaceOriginalShortcuts -KeepOriginalShortcut $KeepOriginalShortcut -AuditShortcut $AuditShortcut -LaunchAfterInstall $LaunchAfterInstall -Quiet:$Quiet -ForceCloseCopilot:$ForceCloseCopilot -SkipBuild:$SkipBuild -WhatIf:$WhatIfPreference
exit $LASTEXITCODE