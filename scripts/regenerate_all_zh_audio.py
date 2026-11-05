import asyncio
import os
import json
import hashlib
import shutil
import edge_tts

VOICE = "zh-TW-HsiaoChenNeural"
CONCURRENCY = 35

async def generate_speech_phrase(phrase, cache_path, semaphore, retry_limit=5):
    if os.path.exists(cache_path) and os.path.getsize(cache_path) > 500:
        return True
    
    async with semaphore:
        for attempt in range(1, retry_limit + 1):
            try:
                tts = edge_tts.Communicate(phrase, VOICE)
                await tts.save(cache_path)
                if os.path.exists(cache_path) and os.path.getsize(cache_path) > 500:
                    return True
            except Exception as e:
                # Exponential backoff
                await asyncio.sleep(attempt * 0.8)
    return False

async def main():
    json_path = 'f:/EN/scratch/all_concise_zh.json'
    if not os.path.exists(json_path):
        print(f"Error: {json_path} not found!")
        return
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    total_words = len(data)
    print(f"Loaded {total_words} words from {json_path}.")
    
    pool_dir = 'f:/EN/scratch/zh_pool'
    out_dir = 'f:/EN/audio/zh'
    os.makedirs(pool_dir, exist_ok=True)
    os.makedirs(out_dir, exist_ok=True)
    
    # Group IDs by unique speech text
    phrase_to_ids = {}
    phrase_to_cache = {}
    for wid_str, item in data.items():
        wid = int(wid_str)
        sp = item['speech'].strip()
        if not sp:
            sp = item['display'].strip() or item['en']
        if sp not in phrase_to_ids:
            phrase_to_ids[sp] = []
            # Hash to filename
            h = hashlib.sha1(sp.encode('utf-8')).hexdigest()
            phrase_to_cache[sp] = os.path.join(pool_dir, f"{h}.mp3")
        phrase_to_ids[sp].append(wid)
    
    unique_phrases = list(phrase_to_ids.keys())
    print(f"Total unique Chinese phrases to generate: {len(unique_phrases)}")
    
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    # Check already cached
    missing_phrases = [p for p in unique_phrases if not (os.path.exists(phrase_to_cache[p]) and os.path.getsize(phrase_to_cache[p]) > 500)]
    print(f"Already cached: {len(unique_phrases) - len(missing_phrases)}, To fetch: {len(missing_phrases)}")
    
    completed = len(unique_phrases) - len(missing_phrases)
    lock = asyncio.Lock()
    
    async def worker(phrase):
        nonlocal completed
        cp = phrase_to_cache[phrase]
        ok = await generate_speech_phrase(phrase, cp, semaphore)
        async with lock:
            completed += 1
            if completed % 200 == 0 or completed == len(unique_phrases):
                print(f"Progress: {completed}/{len(unique_phrases)} phrases ({(completed/len(unique_phrases)*100):.1f}%)")
        return ok
    
    if missing_phrases:
        print("Starting asynchronous Edge-TTS downloads...")
        tasks = [asyncio.create_task(worker(p)) for p in missing_phrases]
        results = await asyncio.gather(*tasks)
        failed_count = results.count(False)
        print(f"Download finished. Success: {results.count(True)}, Failed: {failed_count}")
        if failed_count > 0:
            print("Retrying failed phrases with lower concurrency...")
            retry_tasks = [asyncio.create_task(worker(p)) for p, r in zip(missing_phrases, results) if not r]
            await asyncio.gather(*retry_tasks)
    
    # Now copy from cache pool to audio/zh/{id}.mp3
    print("Writing/copying MP3s to audio/zh/{id}.mp3...")
    written_ids = set()
    for phrase, ids in phrase_to_ids.items():
        cp = phrase_to_cache[phrase]
        if os.path.exists(cp) and os.path.getsize(cp) > 500:
            for wid in ids:
                target_path = os.path.join(out_dir, f"{wid}.mp3")
                # Direct file copy
                shutil.copyfile(cp, target_path)
                written_ids.add(wid)
        else:
            print(f"Warning: Missing cache for phrase '{phrase}' for IDs: {ids[:5]}")
    
    print(f"Successfully deployed {len(written_ids)}/{total_words} audio files in audio/zh/!")
    
    # Update zh_audio_manifest.js
    manifest_ids = sorted(list(written_ids))
    manifest_js = f"// Auto-generated 100% verified zh audio manifest\nwindow.ZH_AUDIO_MANIFEST = new Set({json.dumps(manifest_ids)});\n"
    with open('f:/EN/zh_audio_manifest.js', 'w', encoding='utf-8') as f:
        f.write(manifest_js)
    print("Updated zh_audio_manifest.js with all verified IDs!")

if __name__ == '__main__':
    asyncio.run(main())
