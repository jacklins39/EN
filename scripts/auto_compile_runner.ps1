param(
    [switch]$SkipFailed
)

$ErrorActionPreference = "Stop"
$RepoDir = "F:\EN"
$TmpDir = Join-Path $RepoDir "tmp"
New-Item -ItemType Directory -Force -Path $TmpDir | Out-Null

$env:PYTHONIOENCODING = "utf-8"
$env:OLLAMA_MODELS = if ([Environment]::GetEnvironmentVariable("OLLAMA_MODELS", "User")) {
    [Environment]::GetEnvironmentVariable("OLLAMA_MODELS", "User")
} else {
    "F:\ollama_models"
}

$PyExe = (Get-Command python -ErrorAction Stop).Source
$CompilerScript = Join-Path $RepoDir "scripts\compile_local_mnemonics.py"
$AutoLog = Join-Path $TmpDir "compile_auto.log"
$OllamaLog = Join-Path $TmpDir "ollama_auto.log"
$StatusFile = Join-Path $TmpDir "compile_status.json"

function Write-AutoLog([string]$Msg) {
    $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Msg
    Add-Content -Path $AutoLog -Value $line -Encoding UTF8
}

# 1. Fast pending check without booting GPU/Ollama (exit in <1s if 100% done)
$ErrorActionPreference = "Continue"
$checkArgs = @($CompilerScript, "--all", "--check-pending")
if ($SkipFailed) { $checkArgs += "--skip-failed" }
$checkOut = & $PyExe @checkArgs 2>&1 | Out-String
if ($checkOut -match "PENDING=(\d+)\s+DONE=(\d+)\s+TOTAL=(\d+)") {
    $pending = [int]$Matches[1]
    $doneCount = [int]$Matches[2]
    $totalCount = [int]$Matches[3]
    $statusObj = @{
        updatedAt = (Get-Date).ToString("o")
        pending = $pending
        done = $doneCount
        total = $totalCount
        running = $false
    } | ConvertTo-Json -Compress
    Set-Content -Path $StatusFile -Value $statusObj -Encoding UTF8

    if ($pending -eq 0) {
        exit 0
    }
    Write-AutoLog "Pending words detected: $pending / $totalCount (done=$doneCount)."
} else {
    Write-AutoLog "Pending check returned unexpected output: $($checkOut.Trim())"
}

# 2. Ensure local Ollama server is listening cleanly
$ollamaStartedByUs = $null
$ollamaAlive = $false
try {
    $null = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/tags" -TimeoutSec 2
    $ollamaAlive = $true
} catch {
    $ollamaAlive = $false
}

if (-not $ollamaAlive) {
    $ollamaExe = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama.exe"
    if (-not (Test-Path $ollamaExe)) {
        $cmd = Get-Command ollama -ErrorAction SilentlyContinue
        if ($cmd) { $ollamaExe = $cmd.Source }
    }
    if (-not (Test-Path $ollamaExe)) {
        Write-AutoLog "ERROR: ollama.exe not found; cannot compile."
        exit 1
    }
    Write-AutoLog "Starting Ollama server (OLLAMA_MODELS=$env:OLLAMA_MODELS)..."
    $ollamaStartedByUs = Start-Process -FilePath $ollamaExe -ArgumentList "serve" -WindowStyle Hidden `
        -RedirectStandardOutput $OllamaLog -RedirectStandardError (Join-Path $TmpDir "ollama_auto.err.log") -PassThru

    for ($i = 0; $i -lt 40; $i++) {
        try {
            $null = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/tags" -TimeoutSec 2
            $ollamaAlive = $true
            break
        } catch {}
        Start-Sleep -Milliseconds 500
    }
    if (-not $ollamaAlive) {
        Write-AutoLog "ERROR: Ollama server failed to listen on 127.0.0.1:11434."
        exit 1
    }
}

# 3. Run resumable full-catalog compilation under single-instance OS lock
try {
    Write-AutoLog "Launching compile_local_mnemonics.py --all --save-every 5 (SkipFailed=$SkipFailed)"
    $runArgs = @($CompilerScript, "--all", "--save-every", "5")
    if ($SkipFailed) { $runArgs += "--skip-failed" }
    & $PyExe @runArgs 2>&1 | ForEach-Object { $_ | Out-File -FilePath $AutoLog -Append -Encoding utf8 }
    $exitCode = $LASTEXITCODE
    Write-AutoLog "Compiler exited with code=$exitCode"

    # Update status snapshot after run
    $postOut = & $PyExe $CompilerScript "--all" "--check-pending" 2>&1 | Out-String
    if ($postOut -match "PENDING=(\d+)\s+DONE=(\d+)\s+TOTAL=(\d+)") {
        $postStatus = @{
            updatedAt = (Get-Date).ToString("o")
            pending = [int]$Matches[1]
            done = [int]$Matches[2]
            total = [int]$Matches[3]
            running = $false
        } | ConvertTo-Json -Compress
        Set-Content -Path $StatusFile -Value $postStatus -Encoding UTF8
    }
} finally {
    # Free RTX 3050 VRAM when we started Ollama specifically for this run
    if ($ollamaStartedByUs -and (-not $ollamaStartedByUs.HasExited)) {
        Write-AutoLog "Stopping self-started Ollama server PID=$($ollamaStartedByUs.Id) to free VRAM."
        Stop-Process -Id $ollamaStartedByUs.Id -Force -ErrorAction SilentlyContinue
    }
}
