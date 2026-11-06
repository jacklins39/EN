import asyncio
import os
import json
import edge_tts

ZH_VOICE = "zh-TW-HsiaoChenNeural"
EN_VOICE = "en-US-JennyNeural"
CONCURRENCY = 25

async def generate_file(text, voice, out_path, semaphore, retry_limit=5):
    # Ensure parent dir
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    # Delete old file if present
    if os.path.exists(out_path):
        try:
            os.remove(out_path)
        except Exception as e:
            print(f"Warning removing {out_path}: {e}")
            
    async with semaphore:
        for attempt in range(1, retry_limit + 1):
            try:
                tts = edge_tts.Communicate(text, voice)
                await tts.save(out_path)
                if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
                    return True
            except Exception as e:
                await asyncio.sleep(attempt * 0.6)
    return False

async def main():
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    # 1. Process Chinese Audio Tasks
    zh_tasks_file = 'scratch/zh_tts_tasks.json'
    with open(zh_tasks_file, 'r', encoding='utf-8') as f:
        zh_tasks = json.load(f)
    print(f"Loaded {len(zh_tasks)} Chinese TTS tasks.")
    
    zh_results = []
    completed = 0
    lock = asyncio.Lock()
    
    async def zh_worker(task):
        nonlocal completed
        wid = task['id']
        sp = task['speech']
        out_p = f"audio/zh/{wid}.mp3"
        ok = await generate_file(sp, ZH_VOICE, out_p, semaphore)
        async with lock:
            completed += 1
            if completed % 25 == 0 or completed == len(zh_tasks):
                print(f"ZH Audio Progress: {completed}/{len(zh_tasks)} ({(completed/len(zh_tasks)*100):.1f}%)")
        return ok

    zh_futures = [asyncio.create_task(zh_worker(t)) for t in zh_tasks]
    zh_done = await asyncio.gather(*zh_futures)
    print(f"ZH Audio Generation Finished. Success: {zh_done.count(True)}, Failed: {zh_done.count(False)}")
    
    # 2. Process Examples Audio Tasks
    ex_tasks_file = 'scratch/audio_ex_to_generate.json'
    if os.path.exists(ex_tasks_file):
        with open(ex_tasks_file, 'r', encoding='utf-8') as f:
            ex_tasks = json.load(f)
        print(f"Loaded {len(ex_tasks)} Examples TTS tasks.")
        for ext in ex_tasks:
            wid = ext['id']
            sent = ext['example']
            out_p = f"audio/examples/{wid}.mp3"
            ok = await generate_file(sent, EN_VOICE, out_p, semaphore)
            print(f"Generated Example {wid} ({ext['en']}): {ok} -> {out_p}")

if __name__ == '__main__':
    asyncio.run(main())
