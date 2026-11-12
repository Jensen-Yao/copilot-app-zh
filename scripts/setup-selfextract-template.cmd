@echo off
setlocal EnableExtensions
chcp 65001 >nul
if not exist "%~dp0setup.ps1" goto embedded
if "%GCC_EMBEDDED_TEST%"=="1" (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup.ps1" -Action Status -Quiet
) else (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup.ps1" %*
)
set "GCC_EXIT=%ERRORLEVEL%"
if not "%GCC_EXIT%"=="0" pause
exit /b %GCC_EXIT%

:embedded
set "GCC_SELF=%~f0"
echo Preparing the self-contained GitHub Copilot Chinese installer...
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $self=$env:GCC_SELF; $marker='::GCC_PAYLOAD::'; $raw=[IO.File]::ReadAllText($self,[Text.Encoding]::ASCII); $index=$raw.LastIndexOf($marker); if($index -lt 0){throw 'Embedded installer payload was not found.'}; $base64=($raw.Substring($index+$marker.Length) -replace '\s',''); $work=Join-Path $env:TEMP ('GitHubCopilotChinese-Setup-'+[guid]::NewGuid().ToString('N')); New-Item -ItemType Directory -Force -Path $work|Out-Null; try{$zip=Join-Path $work 'payload.zip'; [IO.File]::WriteAllBytes($zip,[Convert]::FromBase64String($base64)); $extract=Join-Path $work 'files'; Expand-Archive -LiteralPath $zip -DestinationPath $extract -Force; $setup=Join-Path $extract 'setup.ps1'; if(-not(Test-Path -LiteralPath $setup)){throw 'setup.ps1 is missing from the embedded payload.'}; if($env:GCC_EMBEDDED_TEST -eq '1'){& $setup -Action Status -Quiet}else{& $setup}}finally{if(Test-Path -LiteralPath $work){Remove-Item -LiteralPath $work -Recurse -Force}}"
set "GCC_EXIT=%ERRORLEVEL%"
if not "%GCC_EXIT%"=="0" pause
exit /b %GCC_EXIT%

::GCC_PAYLOAD::
