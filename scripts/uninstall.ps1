[CmdletBinding(SupportsShouldProcess = $true)]
param([switch]$Quiet)
$root = Split-Path $PSScriptRoot -Parent
& (Join-Path $root 'setup.ps1') -Action Uninstall -Quiet:$Quiet -WhatIf:$WhatIfPreference
exit $LASTEXITCODE