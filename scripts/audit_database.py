#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
Spaced Repetition Vocab App (Cloud Version) - 全域資料庫健康檢查腳本
=============================================================================
定期執行此腳本檢驗全域三大單字庫 (words_data.js / jh_data.js / toeic_data.js) 與語言學引擎：
1. 內部重複：同一詞庫內是否有重複收錄之英文字詞 (0 筆)
2. 空音標 / 異常音標：音標是否為空或缺少標準台灣 KK 括號格式 [ˋ...] (0 筆)
3. 遺漏詞性標籤：是否缺少詞性標記 (n./v./adj./adv./prep./aux./ph. 等) (0 筆)
4. 機械占位例句：是否存在 Can you use the word ... 等範本套皮例句 (0 筆)
5. 格式或英文殘留：zh 中文釋義是否無中文字或純英文未翻譯殘留 (0 筆)
6. 詞形變化、搭配詞與同義詞跨詞性污染防呆檢驗：實測 computeWordForms、getWordCollocations 與 getWordSynonyms 全量單字，
   確保 0 詞根篡改 (如 born 誤轉 bear/bearer/bearest)、0 屈折動詞二次規則變化 (如 writtened)、
   0 多音節形容詞誤加 -er/-est (如 comfortabler)、0 複數/不可數 -s 名詞誤加 -es (如 newses)、
   0 搭配詞跨單字污染 (如 born 誤抓 teddy bear)、0 同義詞跨詞性錯配 (如 curious adj. 誤抓 wonder vt./n.)。

執行方式：
  python scripts/audit_database.py
=============================================================================
"""

import sys
import os
import re
import json
import subprocess

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


def run_linguistic_engine_audit():
    """
    透過 Node.js 載入 index.html 的語言學引擎，對全域所有單字實測：
    - 詞形變化 (computeWordForms) 是否發生詞根篡改或畸形字尾
    - 常用搭配詞 (getWordCollocations) 是否發生跨字根污染
    """
    node_script = r"""
const fs = require('fs');
const vm = require('vm');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);

const dataFiles = [
    'words_data.js', 'toeic_data.js', 'jh_data.js',
    'listening_words_data.js', 'synonyms_unit8_data.js',
    'examples_unit9_data.js', 'syn_ant_data.js'
];
for (const file of dataFiles) {
    if (fs.existsSync(file)) {
        const code = fs.readFileSync(file, 'utf8').replace(/^(const|let)\s+/gm, 'var ');
        vm.runInContext(code, sandbox);
    }
}
const html = fs.readFileSync('index.html', 'utf8');
const startIdx = html.indexOf('const IRREGULAR_VERBS = {');
const endIdx = html.indexOf('function renderFormTokensHtml');
const splitStart = html.indexOf('function splitPosAndZh(');
const splitEnd = html.indexOf('function ', splitStart + 25);
const engineCode = `
var vocabularyDB = [
    ...(typeof externalVocabularyDB !== 'undefined' ? externalVocabularyDB : []),
    ...(typeof synUnit8WordsDB !== 'undefined' ? synUnit8WordsDB : []),
    ...(typeof examplesUnit9WordsDB !== 'undefined' ? examplesUnit9WordsDB : []),
    ...(typeof toeicWordsDB !== 'undefined' ? toeicWordsDB : []),
    ...(typeof jhWordsDB !== 'undefined' ? jhWordsDB : []),
    ...(typeof listeningWordsDB !== 'undefined' ? listeningWordsDB : [])
];
var currentUnit = 1;
${html.slice(splitStart, splitEnd)}
${html.slice(startIdx, endIdx).replace(/^\s*(const|let)\s+/gm, 'var ')}
`;
vm.runInContext(engineCode, sandbox);

const allWordsMap = new Map();
for (const item of sandbox.vocabularyDB) {
    if (!item || !item.en) continue;
    const key = item.en.trim().toLowerCase();
    if (!allWordsMap.has(key)) allWordsMap.set(key, item);
}

const HOMOGRAPH_REGULAR_VERBS = new Set(['saw', 'found', 'ground', 'wound', 'bore', 'bound']);
const irregInflected = new Set();
for (const [base, vf] of Object.entries(sandbox.IRREGULAR_VERBS)) {
    for (const fld of ['past', 'pp', 'ing', 's']) {
        const parts = String(vf[fld] || '').replace(/\[.*?\]/g, '').split('/').map(s => s.trim().toLowerCase());
        for (const p of parts) {
            if (p && p !== base && !sandbox.IRREGULAR_VERBS[p] && !HOMOGRAPH_REGULAR_VERBS.has(p)) {
                irregInflected.add(p);
            }
        }
    }
}

const ALLOWED_INFLECTED_COLLOCATIONS = new Set([
    'lesson:take lessons in...',
    'star:under the stars',
    'borrow:live on borrowed time',
    'sink:heart sank'
]);

const errors = [];
for (const [en, item] of allWordsMap.entries()) {
    if (!/^[a-z]+$/.test(en)) continue;
    const posStr = (item.zh || '') + ' ' + (item.pos || '');
    const forms = sandbox.computeWordForms(en, posStr);
    if (!forms) continue;

    if (forms.word !== en) {
        errors.push(`詞根遭篡改: ${en} -> ${forms.word}`);
    }
    if (forms.verbForms) {
        if (forms.verbForms.base !== en) {
            errors.push(`動詞原形遭篡改: ${en} -> ${forms.verbForms.base}`);
        }
        if (irregInflected.has(en)) {
            errors.push(`屈折動詞誤產生規則三態: ${en} -> ${forms.verbForms.past}`);
        }
        if (/eee/.test(forms.verbForms.past) || /eee/.test(forms.verbForms.ing)) {
            errors.push(`-ee 動詞誤生三個 e: ${en} -> ${forms.verbForms.past} / ${forms.verbForms.ing}`);
        }
        if (['panic', 'picnic', 'traffic', 'mimic'].includes(en) && !forms.verbForms.past.endsWith('cked')) {
            errors.push(`-ic 動詞漏加 k: ${en} -> ${forms.verbForms.past}`);
        }
        if (sandbox.FINAL_STRESS_DOUBLING_VERBS.has(en) && !forms.verbForms.past.endsWith(en[en.length - 1] + en[en.length - 1] + 'ed')) {
            errors.push(`重音在後雙音節動詞漏重複字尾: ${en} -> ${forms.verbForms.past}`);
        }
    }
    if (forms.adjForms) {
        if (forms.adjForms.base !== en) {
            errors.push(`形容詞原級遭篡改: ${en} -> ${forms.adjForms.base}`);
        }
        if (!forms.adjForms.comp.startsWith('more ') && /(ful|less|ous|ive|able|ible|al|ic|ish|ant|ent|ed|ing)$/.test(en) && !['early', 'simple', 'humble', 'gentle', 'noble', 'subtle'].includes(en)) {
            errors.push(`派生字尾形容詞誤加 -er/-est: ${en} -> ${forms.adjForms.comp}`);
        }
        if (sandbox.NON_GRADABLE_ADJS.has(en)) {
            errors.push(`不可分級形容詞誤生比較級: ${en} -> ${forms.adjForms.comp}`);
        }
    }
    if (forms.nounForms) {
        if (forms.nounForms.singular !== en) {
            errors.push(`名詞單數遭篡改: ${en} -> ${forms.nounForms.singular}`);
        }
        if (en.endsWith('s') && !en.endsWith('ss') && !sandbox.SINGULAR_S_NOUNS.has(en) && !sandbox.IRREGULAR_PLURALS[en]) {
            errors.push(`字尾 -s 名詞誤加 -es: ${en} -> ${forms.nounForms.plural}`);
        }
        if (sandbox.UNCOUNTABLE_AND_COLLECTIVE_NOUNS.has(en)) {
            errors.push(`不可數/集合名詞誤生複數: ${en} -> ${forms.nounForms.plural}`);
        }
    }
    const cols = sandbox.getWordCollocations(en, item);
    for (const c of cols) {
        const key = `${en}:${c.en.toLowerCase()}`;
        if (ALLOWED_INFLECTED_COLLOCATIONS.has(key)) continue;
        const tokens = c.en.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
        if (!tokens.includes(en)) {
            errors.push(`搭配詞跨字污染: [${en}] 混入 "${c.en}"`);
        }
    }
    const syns = sandbox.getWordSynonyms(en, item);
    const ants = sandbox.getWordAntonyms(en);
    const synIndex = sandbox.initSemanticSynonymIndex();
    const wInfo = synIndex.wordInfo.get(en);
    const wPosSet = wInfo ? new Set(wInfo.segments.map(seg => seg.pos)) : new Set();
    const explicitSet = new Set([
        ...((typeof sandbox.SYN_ANT_DB !== 'undefined' && sandbox.SYN_ANT_DB[en] && sandbox.SYN_ANT_DB[en].syn) || []).map(s => s.toLowerCase()),
        ...((sandbox.CORE_WORD_SYNONYMS[en] || []).map(s => s.toLowerCase()))
    ]);
    for (const s of syns) {
        if (!/^[a-zA-Z\s'-]+$/.test(s)) {
            errors.push(`同義詞含殘缺括號或異常符號: [${en}] -> "${s}"`);
        }
        const sLower = s.toLowerCase();
        const cInfo = synIndex.wordInfo.get(sLower);
        if (!wInfo || !cInfo) continue;
        if (!explicitSet.has(sLower) && wInfo.primaryPos !== cInfo.primaryPos) {
            errors.push(`語意推論同義詞跨詞性錯配: [${en} (${wInfo.primaryPos})] 誤配 "${s} (${cInfo.primaryPos})"`);
        } else if (explicitSet.has(sLower)) {
            const cPosSet = new Set(cInfo.segments.map(seg => seg.pos));
            let hasCommon = false;
            for (const p of wPosSet) if (cPosSet.has(p)) hasCommon = true;
            if (!hasCommon && wPosSet.size > 0 && cPosSet.size > 0) {
                errors.push(`字典同義詞完全無共同詞性: [${en} (${[...wPosSet]})] 誤配 "${s} (${[...cPosSet]})"`);
            }
        }
    }
    for (const a of ants) {
        if (!/^[a-zA-Z\s'-]+$/.test(a)) {
            errors.push(`反義詞含殘缺括號或異常符號: [${en}] -> "${a}"`);
        }
        const aLower = a.toLowerCase();
        const cInfo = synIndex.wordInfo.get(aLower);
        if (!wInfo || !cInfo) continue;
        const cPosSet = new Set(cInfo.segments.map(seg => seg.pos));
        let hasCommon = false;
        for (const p of wPosSet) if (cPosSet.has(p)) hasCommon = true;
        if (!hasCommon && wPosSet.size > 0 && cPosSet.size > 0) {
            errors.push(`反義詞完全無共同詞性: [${en} (${[...wPosSet]})] 誤配 "${a} (${[...cPosSet]})"`);
        }
    }
}
const curiousSyns = sandbox.getWordSynonyms('curious');
if (curiousSyns.includes('wonder') || !curiousSyns.includes('inquisitive') || !curiousSyns.includes('inquiring')) {
    errors.push(`curious 同義詞異常: ${JSON.stringify(curiousSyns)}`);
}
for (const nonAdj of ['school', 'house', 'desk', 'daughter', 'those', 'which', 'ten', 'put', 'think', 'best', 'more']) {
    const item = allWordsMap.get(nonAdj);
    if (item && sandbox.computeWordForms(nonAdj, item.zh).adjForms) {
        errors.push(`非形容詞誤生比較級: ${nonAdj}`);
    }
}
console.log(JSON.stringify({ totalUnique: allWordsMap.size, errors }));
"""
    res = subprocess.run(
        ['node', '-e', node_script],
        cwd=ROOT_DIR,
        capture_output=True,
        text=True,
        encoding='utf-8'
    )
    if res.returncode != 0:
        return -1, [f"Node 語言學引擎檢測執行失敗: {res.stderr.strip()}"]
    try:
        payload = json.loads(res.stdout.strip().splitlines()[-1])
        return payload.get('totalUnique', 0), payload.get('errors', [])
    except Exception as e:
        return -1, [f"解析 Node 輸出失敗: {e}"]


def run_health_audit():
    print("=" * 66)
    print(" 🏥 Spaced Repetition Vocab App - 全域詞庫品質健康檢查")
    print("=" * 66)

    overall_metrics = {
        'duplicates': 0,
        'abnormal_kk': 0,
        'missing_pos': 0,
        'placeholder_examples': 0,
        'english_residual_zh': 0,
        'junk_residual_or_inverted': 0,
        'linguistic_contamination': 0
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
            'english_residual_zh': [],
            'junk_residual_or_inverted': []
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

            # 6. 詞性高頻順序與百科/縮寫雜訊檢測
            junk_tokens = ['季節性情感障礙', '唐菖蒲', '雷阿爾', '坦尼斯', '巴納納', '放狗咬', '印第安武士']
            if any(tk in zh for tk in junk_tokens):
                db_metrics['junk_residual_or_inverted'].append((item_id, item.get('en'), zh, '含百科/縮寫/音譯雜訊'))
            if word == 'banana' and zh.startswith('adj.'):
                db_metrics['junk_residual_or_inverted'].append((item_id, item.get('en'), zh, 'banana 詞性倒置'))
            elif word == 'piano' and zh.startswith('adj.'):
                db_metrics['junk_residual_or_inverted'].append((item_id, item.get('en'), zh, 'piano 詞性倒置'))
            elif word == 'spell' and zh.startswith('n.'):
                db_metrics['junk_residual_or_inverted'].append((item_id, item.get('en'), zh, 'spell 詞性倒置'))
            elif word == 'english' and zh.startswith('adj.'):
                db_metrics['junk_residual_or_inverted'].append((item_id, item.get('en'), zh, 'English 詞性倒置'))

        # 輸出此檔案健檢結果
        print(f"\n📂 [{db_info['file']}] {db_info['label']} (共 {db_count:,} 筆單字):")
        
        checks = [
            ("內部重複", len(db_metrics['duplicates']), 'duplicates'),
            ("空音標 / 異常音標", len(db_metrics['abnormal_kk']), 'abnormal_kk'),
            ("遺漏詞性標籤", len(db_metrics['missing_pos']), 'missing_pos'),
            ("機械占位例句", len(db_metrics['placeholder_examples']), 'placeholder_examples'),
            ("格式或英文殘留", len(db_metrics['english_residual_zh']), 'english_residual_zh'),
            ("高頻倒置/雜訊釋義", len(db_metrics['junk_residual_or_inverted']), 'junk_residual_or_inverted')
        ]

        for label, count, key in checks:
            overall_metrics[key] += count
            if count == 0:
                print(f"  ✅ {label:14}: 0 筆")
            else:
                print(f"  ❌ {label:14}: {count} 筆")
                any_issues = True
                samples = db_metrics[key][:3]
                for s in samples:
                    print(f"     -> {s}")

    # 6. 全域語言學引擎與跨字污染防呆檢驗
    unique_count, ling_errors = run_linguistic_engine_audit()
    overall_metrics['linguistic_contamination'] = len(ling_errors)
    print(f"\n🧠 [index.html] 語言學引擎與詞形/搭配詞隔離檢驗 (共 {unique_count:,} 個不重複詞條):")
    if len(ling_errors) == 0:
        print("  ✅ 詞根隔離與詞形變化 : 0 筆異常 (無跨字根篡改、無畸形比較級/複數、無搭配詞污染)")
    else:
        print(f"  ❌ 詞根隔離與詞形變化 : {len(ling_errors)} 筆異常")
        any_issues = True
        for err in ling_errors[:5]:
            print(f"     -> {err}")

    print("\n" + "=" * 66)
    print(f" 📊 全域健檢總結報告 (總檢測單字: {total_words_inspected:,} 筆 / 獨立詞條: {unique_count:,} 筆)")
    print("=" * 66)
    print(f"  內部重複          : {overall_metrics['duplicates']} 筆")
    print(f"  空音標/異常音標    : {overall_metrics['abnormal_kk']} 筆")
    print(f"  遺漏詞性標籤      : {overall_metrics['missing_pos']} 筆")
    print(f"  機械占位例句      : {overall_metrics['placeholder_examples']} 筆")
    print(f"  格式或英文殘留    : {overall_metrics['english_residual_zh']} 筆")
    print(f"  高頻倒置/雜訊釋義 : {overall_metrics['junk_residual_or_inverted']} 筆")
    print(f"  詞形與搭配詞污染  : {overall_metrics['linguistic_contamination']} 筆")
    print("=" * 66)

    if not any_issues and all(v == 0 for v in overall_metrics.values()):
        print(" 🎉 全域資料庫與語言學引擎 100% 通過品質健檢，零缺陷！")
        return 0
    else:
        print(" ⚠️ 健檢發現異常資料，請依上方清單修正後再次執行！")
        return 1

if __name__ == '__main__':
    sys.exit(run_health_audit())
