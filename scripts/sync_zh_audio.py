import json, os, shutil

def load_db(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()
    start = text.find('[')
    end = text.rfind(']')
    return json.loads(text[start:end+1])

hs = load_db('words_data.js')
jh = load_db('jh_data.js')
toeic = load_db('toeic_data.js')
listening = load_db('listening_words_data.js')

hs_map = {w['en'].lower().strip(): w for w in hs}

audio_dir = 'audio/zh'

copied_jh = 0
for w in jh:
    en = w.get('en', '').lower().strip()
    if en in hs_map:
        hs_word = hs_map[en]
        src_path = os.path.join(audio_dir, f"{hs_word['id']}.mp3")
        dst_path = os.path.join(audio_dir, f"{w['id']}.mp3")
        if os.path.exists(src_path) and os.path.getsize(src_path) > 300:
            shutil.copyfile(src_path, dst_path)
            copied_jh += 1

copied_toeic = 0
for w in toeic:
    en = w.get('en', '').lower().strip()
    if en in hs_map:
        hs_word = hs_map[en]
        src_path = os.path.join(audio_dir, f"{hs_word['id']}.mp3")
        dst_path = os.path.join(audio_dir, f"{w['id']}.mp3")
        if os.path.exists(src_path) and os.path.getsize(src_path) > 300:
            shutil.copyfile(src_path, dst_path)
            copied_toeic += 1

copied_listening = 0
for w in listening:
    en = w.get('en', '').lower().strip()
    if en in hs_map:
        hs_word = hs_map[en]
        src_path = os.path.join(audio_dir, f"{hs_word['id']}.mp3")
        dst_path = os.path.join(audio_dir, f"{w['id']}.mp3")
        if os.path.exists(src_path) and os.path.getsize(src_path) > 300:
            shutil.copyfile(src_path, dst_path)
            copied_listening += 1

print(f"Copied {copied_jh} audio files for Junior High from High School master.")
print(f"Copied {copied_toeic} audio files for TOEIC from High School master.")
print(f"Copied {copied_listening} audio files for Listening from High School master.")
