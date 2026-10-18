import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from opencc import OpenCC

sys.stdout.reconfigure(encoding='utf-8')
cc = OpenCC('s2twp')

def parse_js_db(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'=\s*(\[\s*\{.*\}\s*\]);?', content, re.DOTALL)
    if match:
        return json.loads(match.group(1))
    raise ValueError(f"Could not parse DB from {filepath}")

def save_js_db(filepath, var_name, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f"const {var_name} = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

def translate_one(item):
    text = item['example']
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q={requests.utils.quote(text)}"
        r = requests.get(url, headers=headers, timeout=5)
        if r.status_code == 200:
            res = r.json()[0][0][0].strip()
            return item['id'], cc.convert(res)
    except:
        pass
    return item['id'], None

def main():
    w_data = parse_js_db('words_data.js', 'externalVocabularyDB')
    t_data = parse_js_db('toeic_data.js', 'toeicWordsDB')
    j_data = parse_js_db('jh_data.js', 'jhWordsDB')

    all_items = w_data + t_data + j_data
    targets = [x for x in all_items if x.get('exampleZh') and '生活例句' in x.get('exampleZh')]
    print(f"殘留目標筆數: {len(targets)}")

    results = {}
    with ThreadPoolExecutor(max_workers=12) as executor:
        future_map = {executor.submit(translate_one, item): item for item in targets}
        for f in as_completed(future_map):
            i_id, trans = f.result()
            if trans:
                results[i_id] = trans

    print(f"成功翻譯: {len(results)}/{len(targets)}")

    for item in w_data:
        if item['id'] in results:
            item['exampleZh'] = results[item['id']]
    for item in t_data:
        if item['id'] in results:
            item['exampleZh'] = results[item['id']]
    for item in j_data:
        if item['id'] in results:
            item['exampleZh'] = results[item['id']]

    save_js_db('words_data.js', 'externalVocabularyDB', w_data)
    save_js_db('toeic_data.js', 'toeicWordsDB', t_data)
    save_js_db('jh_data.js', 'jhWordsDB', j_data)
    print("✅ 寫入完成！")

if __name__ == '__main__':
    main()
