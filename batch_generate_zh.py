import asyncio
import json
import os
import re
import sys
import time
import edge_tts

VOICE = 'zh-TW-HsiaoChenNeural'
MANIFEST_PATH = 'zh_audio_manifest.js'
AUDIO_DIR = os.path.join('audio', 'zh')

def clean_zh_for_tts(zh_str):
    if not zh_str:
        return ''
    s = re.sub(r'[\(（][^\)）]*[\)）]', '', zh_str)
    s = re.sub(r'(?:^|[；;、,\s])(?:[a-zA-Z./]+)\.\s*', ' ', s)
    s = re.sub(r'^[a-zA-Z./\s]+', '', s)
    s = re.sub(r'[/;；、~]+', '，', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip(' ，,;；、.')

def load_all_words():
    all_words = []
    def parse_file(fn, varname):
        if not os.path.exists(fn):
            return []
        with open(fn, 'r', encoding='utf-8') as f:
            text = f.read()
        m = re.search(r'const\s+' + varname + r'\s*=\s*(\[.*?\]);', text, re.DOTALL)
        if m:
            return json.loads(m.group(1))
        return []

    all_words.extend(parse_file('words_data.js', 'externalVocabularyDB'))
    all_words.extend(parse_file('jh_data.js', 'jhWordsDB'))
    all_words.extend(parse_file('toeic_data.js', 'toeicWordsDB'))
    return all_words

def save_manifest(completed_ids):
    sorted_ids = sorted(list(completed_ids))
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        f.write('// Edge-TTS zh manifest\n')
        f.write('window.ZH_AUDIO_MANIFEST = new Set([\n')
        for i in range(0, len(sorted_ids), 25):
            chunk = sorted_ids[i:i+25]
            f.write('  ' + ', '.join(map(str, chunk)) + ',\n')
        f.write(']);\n')
    print(f'Manifest updated with {len(sorted_ids)} items.')

async def process_item(item, sem):
    word_id = item['id']
    text = clean_zh_for_tts(item.get('zh', ''))
    if not text:
        return word_id, False
    
    mp3_path = os.path.join(AUDIO_DIR, f'{word_id}.mp3')
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
    words = load_all_words()
    print(f'Loaded total {len(words)} words across all databases.')
    
    existing_files = set()
    for f in os.listdir(AUDIO_DIR):
        if f.endswith('.mp3'):
            try:
                wid = int(f.replace('.mp3', ''))
                if os.path.getsize(os.path.join(AUDIO_DIR, f)) > 300:
                    existing_files.add(wid)
            except ValueError:
                pass

    completed_ids = set(existing_files)
    to_generate = [w for w in words if w['id'] not in completed_ids]

    print(f'Existing completed audio: {len(completed_ids)}, To generate: {len(to_generate)}')
    save_manifest(completed_ids)

    if not to_generate:
        print('All Chinese audio files already generated!')
        return

    sem = asyncio.Semaphore(15)
    batch_size = 50
    total_new = 0

    for i in range(0, len(to_generate), batch_size):
        batch = to_generate[i:i+batch_size]
        tasks = [process_item(w, sem) for w in batch]
        results = await asyncio.gather(*tasks)

        for wid, success in results:
            if success:
                completed_ids.add(wid)
                total_new += 1

        print(f'Progress: {len(completed_ids)}/{len(words)} ({len(completed_ids)/len(words)*100:.1f}%)')
        save_manifest(completed_ids)

    print(f'All done! Newly generated: {total_new}. Total available: {len(completed_ids)}.')

if __name__ == '__main__':
    asyncio.run(main())
