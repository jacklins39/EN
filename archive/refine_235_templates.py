import json
import os
import re
import sys
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

def translate_sentence(sentence, word):
    try:
        # 1. 查有道雙語
        url = f"https://dict.youdao.com/jsonapi?q={requests.utils.quote(sentence)}"
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            pairs = r.json().get('blng_sents_part', {}).get('sentence-pair', [])
            for p in pairs:
                sen = p.get('sentence', '').strip()
                t = p.get('sentence-translation', '').strip()
                if sen.lower() == sentence.lower() and t:
                    return cc.convert(t)
            if pairs:
                t = pairs[0].get('sentence-translation', '').strip()
                if t:
                    return cc.convert(t)
    except:
        pass

    try:
        # 2. 查單字
        url = f"https://dict.youdao.com/jsonapi?q={requests.utils.quote(word)}"
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            pairs = r.json().get('blng_sents_part', {}).get('sentence-pair', [])
            for p in pairs:
                sen = p.get('sentence', '').strip()
                t = p.get('sentence-translation', '').strip()
                if (sentence.lower() in sen.lower() or sen.lower() in sentence.lower()) and t:
                    return cc.convert(t)
    except:
        pass

    return None

def main():
    w_data = parse_js_db('words_data.js', 'externalVocabularyDB')
    t_data = parse_js_db('toeic_data.js', 'toeicWordsDB')
    j_data = parse_js_db('jh_data.js', 'jhWordsDB')

    all_items = w_data + t_data + j_data
    targets = [x for x in all_items if x.get('exampleZh') and '生活例句' in x.get('exampleZh')]
    print(f"待精修翻譯的模板例句: {len(targets)} 筆")

    fixed = 0
    for item in targets:
        trans = translate_sentence(item['example'], item['en'])
        if trans:
            item['exampleZh'] = trans
            fixed += 1
            print(f"[{item['id']}] {item['en']} -> {item['example']} | {trans}")
        else:
            # 手動常規處理
            ex = item['example']
            if 'What time is' in ex:
                item['exampleZh'] = f"{item['en']}是幾點？"
            elif 'works at a' in ex:
                item['exampleZh'] = f"在一家{item['zh'].split(';')[-1].strip()}工作。"
            elif 'Do you have' in ex:
                item['exampleZh'] = f"你有{item['zh'].split(';')[-1].strip()}嗎？"
            elif 'I want to eat' in ex:
                item['exampleZh'] = f"我想吃{item['zh'].split(';')[-1].strip()}。"
            elif 'I am a' in ex:
                item['exampleZh'] = f"我是個{item['zh'].split(';')[-1].strip()}。"
            elif 'The voters want' in ex:
                item['exampleZh'] = "選民希望有所改變。"
            fixed += 1

    print(f"\n精修完成: {fixed} 筆！正在寫入資料庫...")
    save_js_db('words_data.js', 'externalVocabularyDB', w_data)
    save_js_db('toeic_data.js', 'toeicWordsDB', t_data)
    save_js_db('jh_data.js', 'jhWordsDB', j_data)
    print("✅ 資料庫更新完畢！")

if __name__ == '__main__':
    main()
