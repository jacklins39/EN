import asyncio
import json
import os
import sys
import time
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)

VOICE = "en-US-JennyNeural"
MANIFEST_PATH = "examples_audio_manifest.js"
AUDIO_DIR = os.path.join("audio", "examples")

def save_manifest(completed_ids):
    sorted_ids = sorted(list(completed_ids))
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        f.write("// 自動產生的 Edge-TTS 例句真人音檔清單 (ID 集合)\n")
        f.write("window.EXAMPLES_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(sorted_ids), 25):
            chunk = sorted_ids[i:i+25]
            f.write("  " + ", ".join(map(str, chunk)) + ",\n")
        f.write("]);\n")
    print(f"Manifest updated with {len(sorted_ids)} items.")

async def process_item(item, sem):
    word_id = item["id"]
    text = item["example"].strip()
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
            except Exception as e:
                await asyncio.sleep(0.5 * (attempt + 1))
        return word_id, False

async def main():
    os.makedirs(AUDIO_DIR, exist_ok=True)
    
    with open("examples_data.json", "r", encoding="utf-8") as f:
        items = json.load(f)
    
    total = len(items)
    existing_files = set(int(f.replace('.mp3', '')) for f in os.listdir(AUDIO_DIR) if f.endswith('.mp3'))
    
    completed_ids = set()
    to_generate = []
    
    for item in items:
        wid = item["id"]
        if wid in existing_files and os.path.getsize(os.path.join(AUDIO_DIR, f"{wid}.mp3")) > 300:
            completed_ids.add(wid)
        else:
            to_generate.append(item)
            
    print(f"★ 總例句: {total} | 已存在: {len(completed_ids)} | 待生成: {len(to_generate)}")
    save_manifest(completed_ids)
    
    if not to_generate:
        print("✔ 全部 8622 句例句真人語音已 100% 生成完畢！")
        return

    # Process in chunks of 30 to prevent network pipe congestion
    chunk_size = 30
    sem = asyncio.Semaphore(15)
    
    for i in range(0, len(to_generate), chunk_size):
        chunk = to_generate[i:i+chunk_size]
        tasks = [process_item(it, sem) for it in chunk]
        results = await asyncio.gather(*tasks)
        for wid, ok in results:
            if ok:
                completed_ids.add(wid)
            else:
                print(f"Failed: {wid}")
        print(f"進度: {len(completed_ids)}/{total} ({len(completed_ids)/total*100:.1f}%)")
        save_manifest(completed_ids)
        await asyncio.sleep(0.2)

    print(f"★ 完成！總庫存: {len(completed_ids)} / {total}")
    save_manifest(completed_ids)

if __name__ == "__main__":
    asyncio.run(main())
