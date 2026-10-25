import asyncio
import json
import os
import re
import sys
import time
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)

VOICE = "en-US-JennyNeural"
MANIFEST_PATH = "examples_audio_manifest.js"
AUDIO_DIR = os.path.join("audio", "examples")

def load_unit8_unit9_items():
    u8_code = open('synonyms_unit8_data.js', encoding='utf-8').read()
    u9_code = open('examples_unit9_data.js', encoding='utf-8').read()
    
    u8_data = json.loads(re.search(r'const\s+synUnit8WordsDB\s*=\s*(\[[\s\S]*?\]);', u8_code).group(1))
    u9_data = json.loads(re.search(r'const\s+examplesUnit9WordsDB\s*=\s*(\[[\s\S]*?\]);', u9_code).group(1))
    
    return u8_data + u9_data

def update_manifest():
    # 掃描 audio/examples 目錄下所有有效音檔
    existing_files = set(int(f.replace('.mp3', '')) for f in os.listdir(AUDIO_DIR) if f.endswith('.mp3') and os.path.getsize(os.path.join(AUDIO_DIR, f)) > 300)
    sorted_ids = sorted(list(existing_files))
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        f.write("// 自動產生的 Edge-TTS 例句真人音檔清單 (ID 集合)\n")
        f.write("window.EXAMPLES_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(sorted_ids), 25):
            chunk = sorted_ids[i:i+25]
            f.write("  " + ", ".join(map(str, chunk)) + ",\n")
        f.write("]);\n")
    print(f"Manifest updated: {len(sorted_ids)} items total.")

async def process_item(item, sem):
    word_id = item["id"]
    text = (item.get("example") or "").strip()
    if not text:
        return word_id, False
    mp3_path = os.path.join(AUDIO_DIR, f"{word_id}.mp3")
    
    if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 300:
        return word_id, True

    async with sem:
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(text, VOICE)
                await comm.save(mp3_path)
                if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 300:
                    return word_id, True
            except Exception:
                await asyncio.sleep(0.5 * (attempt + 1))
        return word_id, False

async def main():
    os.makedirs(AUDIO_DIR, exist_ok=True)
    items = load_unit8_unit9_items()
    total = len(items)
    
    existing_files = set(int(f.replace('.mp3', '')) for f in os.listdir(AUDIO_DIR) if f.endswith('.mp3') and os.path.getsize(os.path.join(AUDIO_DIR, f)) > 300)
    to_generate = [it for it in items if it["id"] not in existing_files]
    
    print(f"★ 單元 8 & 9 總例句: {total} | 需生成音檔: {len(to_generate)}")
    
    if not to_generate:
        print("✔ 所有例句音檔已存在！更新 manifest...")
        update_manifest()
        return

    chunk_size = 25
    sem = asyncio.Semaphore(12)
    done_count = total - len(to_generate)
    
    for i in range(0, len(to_generate), chunk_size):
        chunk = to_generate[i:i+chunk_size]
        tasks = [process_item(it, sem) for it in chunk]
        results = await asyncio.gather(*tasks)
        done_count += len([ok for _, ok in results if ok])
        print(f"音檔生成進度: {done_count}/{total} ({done_count/total*100:.1f}%)")
        update_manifest()
        await asyncio.sleep(0.1)

    print("★ 全部單元 8 & 9 例句真人語音音檔生成完成！")
    update_manifest()

if __name__ == "__main__":
    asyncio.run(main())
