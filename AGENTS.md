# F:\EN Project Workspace Guidelines

## Mnemonics Compilation & Audio Policy (Zero External API)
1. **No External Gemini API Calls**: Never use `--allow-api` or paid cloud generation APIs in this repository. All mnemonic compilation runs 100% locally via `Ollama` (`qwen3:8b`, model directory `F:\ollama_models`) on local GPU (`RTX 3050`).
2. **No Windows Boot / Periodic Background Tasks**: Do **not** register Windows Scheduled Tasks (`AtLogOn` / hourly tasks) that hijack the GPU while the user games or reboots. Local compilation runs **only inside active Antigravity sessions** (or when explicitly invoked).
3. **Auto-Compile & Auto-Fill New Words Inside Antigravity**:
   - Whenever building, maintaining vocabulary DBs (`words_data.js`, `synonyms_unit8_data.js`, `examples_unit9_data.js`, `toeic_data.js`, `jh_data.js`, `listening_words_data.js`), or resuming `F:\EN` in Antigravity, check pending dual-track coverage first:
     ```powershell
     python f:\EN\scripts\compile_local_mnemonics.py --all --check-pending
     ```
   - If `PENDING > 0` (either unfinished entries or newly added vocabulary rows), automatically ensure local `ollama serve` (`$env:OLLAMA_MODELS = "F:\ollama_models"`) is running inside the Antigravity session (`IsDaemon: true`) and compile missing/new entries via:
     ```powershell
     python f:\EN\scripts\compile_local_mnemonics.py --all --save-every 5
     ```
     (Supports `--resume` checkpointing and `f:\EN\tmp\compile_dual.lock` single-instance locking.)
   - Alternatively, for a self-contained single run that auto-stops Ollama afterward to free VRAM, run:
     ```powershell
     powershell -NoProfile -ExecutionPolicy Bypass -File f:\EN\scripts\auto_compile_runner.ps1
     ```
4. **Dual-Track Format & Audit Gates**:
   - [index.html](index.html) (`formatMnemonicHtml`) renders both `dual_track` (`#### 1.` + `#### 2.`) and `compact_3line` safely.
   - Before releasing updates to `mnemonics/*.js`, run `python f:\EN\scripts\generate_mnemonics.py --stats --audit --max-score 99` (`weak == 0`) and Node `vm` validation across all DBs, shard files, and inline `<script>` blocks in `index.html`.
