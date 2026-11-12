param(
    [string]$Runtime = 'win-x64',
    [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$project = Join-Path $root 'src\GitHubCopilotChinese\GitHubCopilotChinese.csproj'
[xml]$projectXml = Get-Content -LiteralPath $project -Raw
$version = [string]$projectXml.Project.PropertyGroup.Version
if (-not $version) { throw '无法从 csproj 读取版本号。' }

if (-not $SkipBuild) {
    & (Join-Path $PSScriptRoot 'build.ps1') -Runtime $Runtime
    if ($LASTEXITCODE -ne 0) { throw '主启动器构建失败。' }
}

$exe = Join-Path $root 'dist\GitHubCopilotChinese.exe'
if (-not (Test-Path -LiteralPath $exe)) { throw "缺少构建产物：$exe" }

$artifactRoot = [IO.Path]::GetFullPath((Join-Path $root 'artifacts'))
New-Item -ItemType Directory -Force -Path $artifactRoot | Out-Null
$stage = [IO.Path]::GetFullPath((Join-Path $artifactRoot "GitHubCopilotChinese-v$version-$Runtime"))
if (-not $stage.StartsWith($artifactRoot, [StringComparison]::OrdinalIgnoreCase)) { throw "拒绝操作非预期目录：$stage" }
if (Test-Path -LiteralPath $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'dist'), (Join-Path $stage 'scripts') | Out-Null

# setup.cmd 最后生成；其余文件先组成安装器的内嵌负载。
foreach ($name in @('setup.ps1', 'README.md', 'LICENSE', 'NOTICE.md', 'SECURITY.md', 'CONTRIBUTING.md')) {
    Copy-Item -LiteralPath (Join-Path $root $name) -Destination (Join-Path $stage $name) -Force
}
Copy-Item -LiteralPath $exe -Destination (Join-Path $stage 'dist\GitHubCopilotChinese.exe') -Force
Copy-Item -LiteralPath (Join-Path $root 'src\GitHubCopilotChinese\config.json') -Destination (Join-Path $stage 'dist\config.json') -Force
foreach ($name in @('audit-ui.mjs', 'run-audit.ps1')) {
    Copy-Item -LiteralPath (Join-Path $root "scripts\$name") -Destination (Join-Path $stage "scripts\$name") -Force
}

# 将完整安装文件压缩为内嵌负载。即使 Windows 只从 ZIP 临时提取 setup.cmd，
# 批处理也能从自身恢复 setup.ps1、启动器和巡检脚本，全程无需联网。
$payloadZip = Join-Path $artifactRoot "payload-$version-$Runtime.tmp.zip"
if (Test-Path -LiteralPath $payloadZip) { Remove-Item -LiteralPath $payloadZip -Force }
Compress-Archive -Path (Join-Path $stage '*') -DestinationPath $payloadZip -CompressionLevel Optimal

$payloadBase64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($payloadZip))
$payloadLines = [regex]::Matches($payloadBase64, '.{1,76}') | ForEach-Object { $_.Value }
$templatePath = Join-Path $PSScriptRoot 'setup-selfextract-template.cmd'
if (-not (Test-Path -LiteralPath $templatePath)) { throw "缺少自解压模板：$templatePath" }
$header = [IO.File]::ReadAllText($templatePath, [Text.Encoding]::ASCII)
if (-not $header.EndsWith("`n")) { $header += "`r`n" }
$standaloneCmd = Join-Path $artifactRoot "GitHubCopilotChinese-Setup-v$version-$Runtime.cmd"
$selfExtracting = $header + ($payloadLines -join "`r`n") + "`r`n"
[IO.File]::WriteAllText($standaloneCmd, $selfExtracting, [Text.Encoding]::ASCII)
Copy-Item -LiteralPath $standaloneCmd -Destination (Join-Path $stage 'setup.cmd') -Force

# 同步根目录 setup.cmd，方便源码仓库和 GitHub 自动生成的 ZIP 直接使用。
Copy-Item -LiteralPath $standaloneCmd -Destination (Join-Path $root 'setup.cmd') -Force

# 将相同负载嵌入自包含控制台安装器；安装器自身携带 .NET 运行时。
$setupProjectDir = Join-Path $root 'src\GitHubCopilotChinese.Setup'
$setupProject = Join-Path $setupProjectDir 'GitHubCopilotChinese.Setup.csproj'
$payloadResource = Join-Path $setupProjectDir 'payload.zip'
$setupPublishDir = [IO.Path]::GetFullPath((Join-Path $artifactRoot "setup-publish-$version-$Runtime"))
if (-not $setupPublishDir.StartsWith($artifactRoot, [StringComparison]::OrdinalIgnoreCase)) { throw "拒绝操作非预期目录：$setupPublishDir" }
if (Test-Path -LiteralPath $setupPublishDir) { Remove-Item -LiteralPath $setupPublishDir -Recurse -Force }

try {
    Copy-Item -LiteralPath $payloadZip -Destination $payloadResource -Force
    & dotnet publish $setupProject -c Release -r $Runtime -o $setupPublishDir `
        --self-contained true `
        -p:PublishSingleFile=true `
        -p:PublishTrimmed=true `
        -p:EnableCompressionInSingleFile=true `
        -p:IncludeNativeLibrariesForSelfExtract=true `
        -p:DebugType=None `
        -p:DebugSymbols=false
    if ($LASTEXITCODE -ne 0) { throw '安装器 EXE 发布失败。' }

    $builtSetupExe = Join-Path $setupPublishDir 'GitHubCopilotChinese-Setup.exe'
    if (-not (Test-Path -LiteralPath $builtSetupExe)) { throw "缺少安装器 EXE：$builtSetupExe" }
    $standaloneExe = Join-Path $artifactRoot "GitHubCopilotChinese-Setup-v$version-$Runtime.exe"
    Copy-Item -LiteralPath $builtSetupExe -Destination $standaloneExe -Force
}
finally {
    if (Test-Path -LiteralPath $payloadResource) { Remove-Item -LiteralPath $payloadResource -Force }
    if (Test-Path -LiteralPath $setupPublishDir) { Remove-Item -LiteralPath $setupPublishDir -Recurse -Force }
    if (Test-Path -LiteralPath $payloadZip) { Remove-Item -LiteralPath $payloadZip -Force }
}

$zip = "$stage.zip"
if (Test-Path -LiteralPath $zip) { Remove-Item -LiteralPath $zip -Force }
Compress-Archive -Path (Join-Path $stage '*') -DestinationPath $zip -CompressionLevel Optimal

$checksumPath = Join-Path $artifactRoot "SHA256SUMS-v$version-$Runtime.txt"
$checksumAssets = @($standaloneExe, $standaloneCmd, $zip)
$checksumLines = foreach ($asset in $checksumAssets) {
    $hash = (Get-FileHash -LiteralPath $asset -Algorithm SHA256).Hash.ToLowerInvariant()
    "$hash  $([IO.Path]::GetFileName($asset))"
}
[IO.File]::WriteAllLines($checksumPath, $checksumLines, [Text.UTF8Encoding]::new($false))

Write-Host "发布包：$zip" -ForegroundColor Green
Write-Host "自解压 CMD：$standaloneCmd" -ForegroundColor Green
Write-Host "首选安装器 EXE：$standaloneExe" -ForegroundColor Green
Write-Host "SHA-256：$checksumPath" -ForegroundColor Green
