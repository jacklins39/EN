#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
Spaced Repetition Vocab App (Cloud Version) - 全域資料庫健康檢查腳本
=============================================================================
定期執行此腳本檢驗全域三大單字庫 (words_data.js / jh_data.js / toeic_data.js)：
1. 內部重複：同一詞庫內是否有重複收錄之英文字詞 (0 筆)
2. 空音標 / 異常音標：音標是否為空或缺少標準台灣 KK 括號格式 [ˋ...] (0 筆)
3. 遺漏詞性標籤：是否缺少詞性標記 (n./v./adj./adv./prep./aux./ph. 等) (0 筆)
4. 機械占位例句：是否存在 Can you use the word ... 等範本套皮例句 (0 筆)
5. 格式或英文殘留：zh 中文釋義是否無中文字或純英文未翻譯殘留 (0 筆)

執行方式：
  python scripts/audit_database.py
=============================================================================
"""

import sys
import os
import re
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATABASES = [
    {
        'file': 'words_data.js',
        'var_name': 'externalVocabularyDB',
        'label': '學測核心字庫 (7000字)'
    },
    {
        'file': 'jh_data.js',
        'var_name': 'jhWordsDB',
        'label': '國中教育部必背字庫 (2000字)'
    },
    {
        'file': 'toeic_data.js',
        'var_name': 'toeicWordsDB',
        'label': '多益高頻核心商務字庫 (3000字)'
    }
]

POS_REGEX = re.compile(
    r'(?:^|[；;]\s*)((?:adj|adv|prep|conj|pron|int|num|det|art|aux|modal\s*v|ph|vi|vt|[avnd])\.)\s*',
    re.IGNORECASE
)

CHINESE_CHAR_REGEX = re.compile(r'[\u4e00-\u9fff]')

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

def run_health_audit():
    print("=" * 66)
    print(" 🏥 Spaced Repetition Vocab App - 全域詞庫品質健康檢查")
    print("=" * 66)

    overall_metrics = {
        'duplicates': 0,
        'abnormal_kk': 0,
        'missing_pos': 0,
        'placeholder_examples': 0,
        'english_residual_zh': 0
    }

    total_words_inspected = 0
    any_issues = False

    for db_info in DATABASES:
        file_path = os.path.join(ROOT_DIR, db_info['file'])
        if not os.path.exists(file_path):
            print(f"❌ 找不到資料庫檔案: {file_path}")
            any_issues = True
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        match = re.search(r'(?:const|let|var)\s+' + db_info['var_name'] + r'\s*=\s*(\[[\s\S]*?\]);', content)
        if not match:
            print(f"❌ 無法解析 {db_info['file']} 中的變數 {db_info['var_name']}")
            any_issues = True
            continue

        try:
            data = json.loads(match.group(1))
        except Exception as e:
            print(f"❌ JSON 解析失敗 {db_info['file']}: {e}")
            any_issues = True
            continue

        db_count = len(data)
        total_words_inspected += db_count

        db_metrics = {
            'duplicates': [],
            'abnormal_kk': [],
            'missing_pos': [],
            'placeholder_examples': [],
            'english_residual_zh': []
        }

        seen_words = {}

        for item in data:
            item_id = item.get('id')
            word = (item.get('en') or '').strip().lower()
            kk = (item.get('kk') or '').strip()
            pos = (item.get('pos') or '').strip()
            zh = (item.get('zh') or '').strip()
            ex = (item.get('example') or '').strip()

            # 1. 內部重複
            if word in seen_words:
                db_metrics['duplicates'].append((word, seen_words[word], item_id))
            seen_words[word] = item_id

            # 2. 空音標 / 異常音標
            if not kk or not (kk.startswith('[') and kk.endswith(']')) or len(kk) <= 2:
                db_metrics['abnormal_kk'].append((item_id, item.get('en'), kk))

            # 3. 遺漏詞性標籤
            has_pos = bool(pos) or bool(POS_REGEX.search(zh))
            if not has_pos:
                db_metrics['missing_pos'].append((item_id, item.get('en'), zh))

            # 4. 機械占位例句
            if 'Can you use the word' in ex or 'in a sentence?' in ex:
                db_metrics['placeholder_examples'].append((item_id, item.get('en'), ex))

            # 5. 格式或英文殘留 (中文無任何漢字)
            if not CHINESE_CHAR_REGEX.search(zh):
                db_metrics['english_residual_zh'].append((item_id, item.get('en'), zh))

        # 輸出此檔案健檢結果
        print(f"\n📂 [{db_info['file']}] {db_info['label']} (共 {db_count:,} 筆單字):")
        
        checks = [
            ("內部重複", len(db_metrics['duplicates']), 'duplicates'),
            ("空音標 / 異常音標", len(db_metrics['abnormal_kk']), 'abnormal_kk'),
            ("遺漏詞性標籤", len(db_metrics['missing_pos']), 'missing_pos'),
            ("機械占位例句", len(db_metrics['placeholder_examples']), 'placeholder_examples'),
            ("格式或英文殘留", len(db_metrics['english_residual_zh']), 'english_residual_zh')
        ]

        for label, count, key in checks:
            overall_metrics[key] += count
            if count == 0:
                print(f"  ✅ {label:14}: 0 筆")
            else:
                print(f"  ❌ {label:14}: {count} 筆")
                any_issues = True
                # 印出前 3 筆違規示範
                samples = db_metrics[key][:3]
                for s in samples:
                    print(f"     -> {s}")

    print("\n" + "=" * 66)
    print(f" 📊 全域健檢總結報告 (總檢測單字: {total_words_inspected:,} 筆)")
    print("=" * 66)
    print(f"  內部重複      : {overall_metrics['duplicates']} 筆")
    print(f"  空音標/異常音標: {overall_metrics['abnormal_kk']} 筆")
    print(f"  遺漏詞性標籤  : {overall_metrics['missing_pos']} 筆")
    print(f"  機械占位例句  : {overall_metrics['placeholder_examples']} 筆")
    print(f"  格式或英文殘留: {overall_metrics['english_residual_zh']} 筆")
    print("=" * 66)

    if not any_issues and all(v == 0 for v in overall_metrics.values()):
        print(" 🎉 全域資料庫 100% 通過品質健檢，零缺陷！")
        return 0
    else:
        print(" ⚠️ 健檢發現異常資料，請依上方清單修正後再次執行！")
        return 1

if __name__ == '__main__':
    sys.exit(run_health_audit())
