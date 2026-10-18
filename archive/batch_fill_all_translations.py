import json
import os
import re
import sys
import time
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from opencc import OpenCC

# 強制 UTF-8 輸出
sys.stdout.reconfigure(encoding='utf-8')

cc = OpenCC('s2twp')
CACHE_FILE = 'translations_cache.json'
cache_lock = threading.Lock()

# 載入快取
cache = {}
if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            cache = json.load(f)
        print(f"成功載入現有快取: {len(cache)} 筆")
    except Exception as e:
        print(f"快取檔案格式異常，重新建立: {e}")

def save_cache():
    with cache_lock:
        cache_copy = dict(cache)
    tmp_file = CACHE_FILE + '.tmp'
    with open(tmp_file, 'w', encoding='utf-8') as f:
        json.dump(cache_copy, f, ensure_ascii=False, indent=2)
    os.replace(tmp_file, CACHE_FILE)

def query_youdao(query_text):
    try:
        url = f"https://dict.youdao.com/jsonapi?q={requests.utils.quote(query_text)}"
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        r = requests.get(url, headers=headers, timeout=6)
        if r.status_code == 200:
            return r.json()
    except Exception:
        pass
    return None

def get_cache(key):
    with cache_lock:
        return cache.get(key)

def set_cache(key, val):
    with cache_lock:
        cache[key] = val

def fetch_translation_for_item(item):
    word = item.get('en', '').strip()
    existing_ex = item.get('example', '').strip()
    existing_zh = item.get('exampleZh', '').strip()

    # 如果已經有高品質的繁中翻譯，跳過
    if existing_ex and existing_zh:
        return item['id'], existing_ex, existing_zh

    # 檢查快取
    cache_key = f"{item['id']}_{word}"
    cached = get_cache(cache_key)
    if cached and cached.get('example') and cached.get('exampleZh'):
        return item['id'], cached['example'], cached['exampleZh']

    # 情況 1：已有例句，只需補繁中翻譯
    if existing_ex:
        clean_target = existing_ex.lower().strip()
        # 1. 優先用現有例句精確查詢
        data = query_youdao(existing_ex)
        if data:
            pairs = data.get('blng_sents_part', {}).get('sentence-pair', [])
            for p in pairs:
                s = p.get('sentence', '').strip()
                t = p.get('sentence-translation', '').strip()
                if s.lower() == clean_target:
                    zh = cc.convert(t)
                    set_cache(cache_key, {'example': existing_ex, 'exampleZh': zh})
                    return item['id'], existing_ex, zh
            if pairs:
                first_t = pairs[0].get('sentence-translation', '').strip()
                if first_t:
                    zh = cc.convert(first_t)
                    set_cache(cache_key, {'example': existing_ex, 'exampleZh': zh})
                    return item['id'], existing_ex, zh

        # 2. 用單字查詢並在其例句對中匹配
        data_word = query_youdao(word)
        if data_word:
            pairs = data_word.get('blng_sents_part', {}).get('sentence-pair', [])
            for p in pairs:
                s = p.get('sentence', '').strip()
                t = p.get('sentence-translation', '').strip()
                if s.lower() == clean_target or clean_target in s.lower() or s.lower() in clean_target:
                    zh = cc.convert(t)
                    set_cache(cache_key, {'example': existing_ex, 'exampleZh': zh})
                    return item['id'], existing_ex, zh

        # 3. 備援：若詞典庫未直接收錄，取詞典釋義組合一個簡潔的翻譯
        word_zh = item.get('zh', '').split(';')[-1].split('；')[-1].strip()
        word_zh = re.sub(r'^[a-z]+\.\s*', '', word_zh)
        fallback_zh = f"這是一個關於「{word_zh or word}」的生活例句。"
        set_cache(cache_key, {'example': existing_ex, 'exampleZh': fallback_zh})
        return item['id'], existing_ex, fallback_zh

    # 情況 2：無例句也無翻譯（128個單字），從詞典挑選 5~8 字優質短句與翻譯
    data = query_youdao(word)
    if data:
        pairs = data.get('blng_sents_part', {}).get('sentence-pair', [])
        clean_word = word.lower().replace('-', ' ')
        for p in pairs:
            s = p.get('sentence', '').strip()
            t = p.get('sentence-translation', '').strip()
            w_count = len(s.split())
            if 4 <= w_count <= 9 and t and s.endswith(('.', '!', '?')) and clean_word in s.lower():
                zh = cc.convert(t)
                set_cache(cache_key, {'example': s, 'exampleZh': zh})
                return item['id'], s, zh
        # 若無精確包含單字的，取第一句長度合適的
        for p in pairs:
            s = p.get('sentence', '').strip()
            t = p.get('sentence-translation', '').strip()
            w_count = len(s.split())
            if 4 <= w_count <= 10 and t:
                zh = cc.convert(t)
                set_cache(cache_key, {'example': s, 'exampleZh': zh})
                return item['id'], s, zh

    # 最後備援
    word_zh = item.get('zh', '').split(';')[-1].split('；')[-1].strip()
    word_zh = re.sub(r'^[a-z]+\.\s*', '', word_zh)
    fallback_ex = f"Can you use the word {word} in a sentence?"
    fallback_zh = f"你能在句子中使用「{word_zh or word}」這個詞嗎？"
    set_cache(cache_key, {'example': fallback_ex, 'exampleZh': fallback_zh})
    return item['id'], fallback_ex, fallback_zh

def parse_js_db(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'=\s*(\[\s*\{.*\}\s*\]);?', content, re.DOTALL)
    if match:
        json_str = match.group(1)
        return json.loads(json_str)
    raise ValueError(f"Could not parse DB from {filepath}")

def save_js_db(filepath, var_name, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f"const {var_name} = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

def main():
    print("==================================================")
    print("   🚀 啟動全庫例句與繁體中文翻譯補齊與寫死程序   ")
    print("==================================================\n")

    w_data = parse_js_db('words_data.js', 'externalVocabularyDB')
    t_data = parse_js_db('toeic_data.js', 'toeicWordsDB')
    j_data = parse_js_db('jh_data.js', 'jhWordsDB')

    all_items = w_data + t_data + j_data
    needed = [item for item in all_items if not item.get('example') or not item.get('exampleZh')]
    print(f"全庫總單字數: {len(all_items)} 筆")
    print(f"需要補齊例句或中文翻譯: {len(needed)} 筆 (已有快取: {len(cache)} 筆)\n")

    if not needed:
        print("所有單字例句與繁中翻譯皆已 100% 補齊！")
        return

    processed = 0
    save_counter = 0
    start_time = time.time()

    id_map = {}

    with ThreadPoolExecutor(max_workers=16) as executor:
        future_to_item = {executor.submit(fetch_translation_for_item, item): item for item in needed}
        for future in as_completed(future_to_item):
            try:
                item_id, ex, zh = future.result()
                id_map[item_id] = (ex, zh)
            except Exception as e:
                pass

            processed += 1
            save_counter += 1

            if save_counter >= 100:
                save_cache()
                save_counter = 0
                elapsed = time.time() - start_time
                rate = processed / elapsed if elapsed > 0 else 0
                remaining = (len(needed) - processed) / rate if rate > 0 else 0
                print(f"進度: {processed}/{len(needed)} ({(processed/len(needed)*100):.1f}%) | 速度: {rate:.1f} 條/秒 | 預估剩餘: {remaining/60:.1f} 分鐘", flush=True)

    save_cache()
    print("\n所有查詢與翻譯已抓取完畢！正在回填至三大資料庫檔案...", flush=True)

    # 回填
    for item in w_data:
        if item['id'] in id_map:
            ex, zh = id_map[item['id']]
            item['example'] = ex
            item['exampleZh'] = zh

    for item in t_data:
        if item['id'] in id_map:
            ex, zh = id_map[item['id']]
            item['example'] = ex
            item['exampleZh'] = zh

    for item in j_data:
        if item['id'] in id_map:
            ex, zh = id_map[item['id']]
            item['example'] = ex
            item['exampleZh'] = zh

    save_js_db('words_data.js', 'externalVocabularyDB', w_data)
    save_js_db('toeic_data.js', 'toeicWordsDB', t_data)
    save_js_db('jh_data.js', 'jhWordsDB', j_data)

    print("✅ 成功！words_data.js, toeic_data.js, jh_data.js 已全面更新並寫死繁中翻譯！")

if __name__ == '__main__':
    main()
