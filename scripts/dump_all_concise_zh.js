const fs = require('fs');
const path = require('path');

// 1. 完全照抄 index.html 裡的 splitPosAndZh 和 getConciseZh
function splitPosAndZh(zhStr, explicitPos = '') {
    let pos = (explicitPos || '').trim();
    let pureZh = (zhStr || '').trim();
    if (!pureZh) return { pos: '', posBadgeText: '', pureZh: '', formattedZh: '', items: [], hasExampleMatch: false };

    const posRegex = /(?:^|[；;]\s*)((?:adj|adv|prep|conj|pron|int|num|det|art|aux|modal\s*v|ph|vi|vt|[avnd])\.)\s*/gi;
    const matches = [...pureZh.matchAll(posRegex)];
    if (matches && matches.length > 0) {
        let items = [];
        for (let i = 0; i < matches.length; i++) {
            const m = matches[i];
            let p = m[1].toLowerCase().trim();
            if (p === 'a.') p = 'adj.';
            if (p === 'ad.') p = 'adv.';
            if (!p.endsWith('.')) p += '.';
            const contentStart = m.index + m[0].length;
            const contentEnd = (i + 1 < matches.length) ? matches[i + 1].index : pureZh.length;
            let text = pureZh.slice(contentStart, contentEnd).trim();
            text = text.replace(/^[；;、，,\s]+|[；;、，,\s]+$/g, '').trim();
            if (text) {
                items.push({ pos: p, text, originalIdx: i });
            }
        }
        if (items.length > 0) {
            return { items };
        }
    }

    const m = pureZh.match(/^(\(?[a-zA-Z./]+\.?\)?)\s*[:：.]?\s*(.*)$/);
    if (m && m[1]) {
        let detected = m[1].replace(/[()]/g, '').trim().toLowerCase();
        if (detected === 'a.') detected = 'adj.';
        if (detected === 'ad.') detected = 'adv.';
        if (!detected.endsWith('.')) detected += '.';
        if (!pos) pos = detected;
        pureZh = m[2] ? m[2].trim() : pureZh;
        return { items: [{ pos, text: pureZh }] };
    }
    
    pureZh = pureZh.replace(/^[:：、，,\s]+/, '').trim();
    return { items: [{ pos: '', text: pureZh }] };
}

function getConciseZh(zhStr, explicitPos = '') {
    if (!zhStr) return '';
    const parsed = splitPosAndZh(zhStr, explicitPos);
    let firstText = '';
    if (parsed.items && parsed.items.length > 0) {
        firstText = parsed.items[0].text;
    } else {
        firstText = zhStr;
    }
    firstText = firstText.replace(/[\(（][^）\)]*[\)）]/g, '').trim();
    firstText = firstText.replace(/[…\.]{2,}的?/g, '').trim();
    const rawTerms = firstText.split(/[,，、/；;\s]+/).map(t => t.trim()).filter(Boolean);
    const terms = rawTerms.map(t => t.replace(/[…\.]{2,}的?/g, '').trim()).filter(Boolean);
    if (!terms.length) return firstText.slice(0, 8);
    let res = terms[0];
    if (terms.length > 1 && (res.length + terms[1].length <= 8) && terms[1] !== res) {
        res += '、' + terms[1];
    }
    return res;
}

// 2. 載入全庫所有資料庫
function loadFileVar(filePath, varName) {
    let code = fs.readFileSync(filePath, 'utf8');
    code = code.replace(new RegExp(`const\\s+${varName}\\s*=`), `global.${varName} =`);
    eval(code);
    return global[varName] || [];
}

const allWords = [];
allWords.push(...loadFileVar('f:/EN/words_data.js', 'externalVocabularyDB'));
allWords.push(...loadFileVar('f:/EN/toeic_data.js', 'toeicWordsDB'));
allWords.push(...loadFileVar('f:/EN/jh_data.js', 'jhWordsDB'));
allWords.push(...loadFileVar('f:/EN/synonyms_unit8_data.js', 'synUnit8WordsDB'));
allWords.push(...loadFileVar('f:/EN/examples_unit9_data.js', 'examplesUnit9WordsDB'));
allWords.push(...loadFileVar('f:/EN/listening_words_data.js', 'listeningWordsDB'));

console.log(`Loaded ${allWords.length} words from all databases.`);

const resultMap = {};
const uniquePhrases = new Set();

for (const w of allWords) {
    const wid = Number(w.id);
    const concise = getConciseZh(w.zh, w.pos);
    const speech = concise.replace(/、/g, '，').trim();
    resultMap[wid] = {
        id: wid,
        en: w.en,
        display: concise,
        speech: speech || concise || '暫無翻譯'
    };
    if (resultMap[wid].speech) {
        uniquePhrases.add(resultMap[wid].speech);
    }
}

fs.writeFileSync('f:/EN/scratch/all_concise_zh.json', JSON.stringify(resultMap, null, 2), 'utf8');
console.log(`Unique words: ${Object.keys(resultMap).length}`);
console.log(`Unique speech phrases to generate: ${uniquePhrases.size}`);

// Verify cub, tomorrow, birth, country, girl, act
[413, 939, 324, 407, 521, 267].forEach(id => {
    console.log(`Verify ID ${id}:`, resultMap[id]);
});
