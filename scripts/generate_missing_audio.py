import asyncio
import os
import re
import json
import edge_tts

VOICE = "en-US-JennyNeural"

def clean_filename(text):
    s = text.lower().strip()
    s = re.sub(r'[/\\:*?"<>|]', '_', s)
    s = re.sub(r'\s+', '_', s)
    s = re.sub(r'\.+', '', s)
    s = re.sub(r'_+', '_', s).strip('_')
    return s

def prepare_speech_text(text):
    t = text.strip()
    # ask for help / advice -> ask for help or advice
    t = re.sub(r'\s*/\s*', ' or ', t)
    # remove trailing ...
    t = re.sub(r'\.{2,}', '', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

async def generate_single(text_to_speak, output_path, semaphore):
    async with semaphore:
        if os.path.exists(output_path) and os.path.getsize(output_path) > 1000:
            return True
        for attempt in range(3):
            try:
                communicate = edge_tts.Communicate(text_to_speak, VOICE)
                await communicate.save(output_path)
                if os.path.exists(output_path) and os.path.getsize(output_path) > 500:
                    return True
            except Exception as e:
                await asyncio.sleep(1)
        return False

async def main():
    os.makedirs('audio/words', exist_ok=True)
    os.makedirs('audio/collocations', exist_ok=True)

    with open('scratch_missing_summary.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    missing_db_words = data['missing_db_words']
    missing_verb_forms = data['missing_verb_forms']
    collocations = data['collocations']

    print(f"Task count: {len(missing_db_words)} missing DB words, {len(missing_verb_forms)} verb forms, {len(collocations)} collocations.")

    semaphore = asyncio.Semaphore(10)
    tasks = []

    # 1. Missing DB words
    for w in missing_db_words:
        fn = clean_filename(w) + ".mp3"
        out_p = os.path.join('audio/words', fn)
        speech_text = prepare_speech_text(w)
        tasks.append((w, out_p, speech_text, 'word'))

    # 2. Missing verb forms
    for vf in missing_verb_forms:
        fn = clean_filename(vf) + ".mp3"
        out_p = os.path.join('audio/words', fn)
        tasks.append((vf, out_p, vf, 'verb_form'))

    # 3. Collocations
    colloc_map = {}
    for col in collocations:
        safe_key = col.strip()
        fn = clean_filename(col) + ".mp3"
        out_p = os.path.join('audio/collocations', fn)
        speech_text = prepare_speech_text(col)
        rel_path = f"audio/collocations/{fn}"
        colloc_map[safe_key.lower()] = rel_path
        tasks.append((safe_key, out_p, speech_text, 'collocation'))

    print(f"Starting async generation for {len(tasks)} audio files...")
    
    coros = [generate_single(t[2], t[1], semaphore) for t in tasks]
    results = await asyncio.gather(*coros)

    success_count = sum(1 for r in results if r)
    print(f"Generation finished: {success_count}/{len(tasks)} succeeded.")

    # 4. 更新 words_audio_manifest.js
    all_words_in_dir = set()
    for fn in os.listdir('audio/words'):
        if fn.endswith('.mp3'):
            base = fn[:-4].lower()
            all_words_in_dir.add(base)

    sorted_words = sorted(all_words_in_dir)
    manifest_js = "window.WORDS_AUDIO_MANIFEST = new Set(" + json.dumps(sorted_words, ensure_ascii=False) + ");\n"
    with open('words_audio_manifest.js', 'w', encoding='utf-8') as f:
        f.write(manifest_js)
    print(f"Updated words_audio_manifest.js with {len(sorted_words)} words.")

    # 5. 建立 collocations_audio_manifest.js
    colloc_manifest_js = "window.COLLOCATIONS_AUDIO_MANIFEST = new Map(Object.entries(" + json.dumps(colloc_map, ensure_ascii=False, indent=2) + "));\n"
    with open('collocations_audio_manifest.js', 'w', encoding='utf-8') as f:
        f.write(colloc_manifest_js)
    print(f"Created collocations_audio_manifest.js with {len(colloc_map)} collocations.")

if __name__ == '__main__':
    asyncio.run(main())
