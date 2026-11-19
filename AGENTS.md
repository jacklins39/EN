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

## 新單字加入標準作業程序 (Word Ingestion SOP v2 — Zero-TTS / 3-Bucket CDN / Local AI)
1. **統一入口腳本**：凡批次或單筆新增單字，一律使用 [ingest_words_sop.py](scripts/ingest_words_sop.py)（取代舊版 `ingest_38_words_sop.py`），禁止手寫繞過 32k 轉檔或漏掉 `exampleZh` 的片段腳本：
   ```powershell
   python f:\EN\scripts\ingest_words_sop.py --input f:\EN\tmp\new_words.json --target-db u89 --bump-version --push
   ```
   - `--target-db`: `words` (`words_data.js`) / `u78` (`synonyms_unit8_data.js`) / `u89` (`examples_unit9_data.js`) / `toeic` (`toeic_data.js`) / `jh` (`jh_data.js`) / `listening` (`listening_words_data.js`)。
   - **必填欄位**：`en`, `kk`, `uk`, `zh`（含標準詞性前綴）, `unit`, `example`（含 `[pos.]` 前綴）, `exampleZh`。
2. **全軌 100% 真人發音規範（24kHz mono 32kbps MP3 via Edge-TTS + ffmpeg）**：
   - 新字寫入同時必須補齊 **5+1 軌** 32k 真人 MP3（透過 `f:\EN\audio` NTFS Junctions 直寫 3 個外部 CDN 倉庫）：
     1. 單字美音 `words/us/{safe}.mp3` (`en-US-JennyNeural`) + 單字英音 `words/uk/{safe}.mp3` (`en-GB-RyanNeural`)
     2. 英文例句 `examples/{id}.mp3` (`en-US-JennyNeural`)
     3. 中文釋義 `zh/{id}.mp3` (`zh-TW-HsiaoChenNeural`)
     4. 例句中文 `example_zh/{canonId}.mp3` (`zh-TW-HsiaoChenNeural`，全域依正文去重建立 `EXAMPLE_ZH_AUDIO_ALIAS`)
     5. **Zero-TTS 護城河**：自動解析新字的 `computeWordForms` 詞形變化、例句內可點選單字與關聯詞，凡缺檔一律同步補產 US + UK 32k MP3。
   - 同步更新 4 張音檔 Manifest：`words_audio_manifest.js`、`examples_audio_manifest.js`、`zh_audio_manifest.js`、`example_zh_audio_manifest.js`（另文法/搭配詞變更時一併更新 `collocations_audio_manifest.js`）。
3. **本地 AI 雙軌助記詞與插圖資源互斥原則**：
   - 助記詞由本地 Ollama `qwen3:8b`（`F:\ollama_models`）編譯並通過 `--audit --max-score 99` (`weak == 0`)。
   - 若加跑具體名詞插圖（`--with-images` / `generate_word_images.py --size 256 --quality 82`），必須先 `ollama stop qwen3:8b` 釋放 RTX 3050 VRAM 再載入 `SDXL-Turbo`。
4. **發布順序鐵律（防止線上短暫 404）**：
   - 嚴禁使用過大命令列 `git add`（Windows 32k 字元限制），海量音檔一律走 `git add --pathspec-from-file=-`。
   - **必須先 Push 3 個音檔 CDN 倉庫（`F:\EN-audio-words`、`F:\EN-audio-examples`、`F:\EN-audio-zh`）**，確認無誤後才更新並 Push 主站 `F:\EN`（遞增 `index.html` `APP_BUILD_VERSION` 與 `version.json`）。
