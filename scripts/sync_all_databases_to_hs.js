const fs = require('fs');

function loadJsonFromJs(filePath, varName) {
    let content = fs.readFileSync(filePath, 'utf8');
    const startIdx = content.indexOf('[');
    const endIdx = content.lastIndexOf(']');
    const prefix = content.slice(0, startIdx);
    const suffix = content.slice(endIdx + 1);
    const data = JSON.parse(content.slice(startIdx, endIdx + 1));
    return { prefix, suffix, data };
}

function saveJsonToJs(filePath, prefix, data, suffix) {
    const jsonStr = JSON.stringify(data, null, 4);
    fs.writeFileSync(filePath, prefix + jsonStr + suffix, 'utf8');
}

// 1. Load High School master database
const hs = loadJsonFromJs('words_data.js', 'externalVocabularyDB');
const hsMap = new Map();
hs.data.forEach(w => {
    if (w.en) {
        hsMap.set(w.en.trim().toLowerCase(), w);
    }
});
console.log(`High School Master DB loaded: ${hsMap.size} unique words.`);

// 2. Synchronize Junior High (jh_data.js)
const jh = loadJsonFromJs('jh_data.js', 'jhWordsDB');
let jhUpdatedCount = 0;
jh.data.forEach(w => {
    if (!w.en) return;
    const key = w.en.trim().toLowerCase();
    if (hsMap.has(key)) {
        const hsWord = hsMap.get(key);
        if (w.zh !== hsWord.zh) {
            w.zh = hsWord.zh;
            jhUpdatedCount++;
        }
    }
});
saveJsonToJs('jh_data.js', jh.prefix, jh.data, jh.suffix);
console.log(`Junior High (jh_data.js) synchronized: ${jhUpdatedCount} words updated to match High School.`);

// 3. Synchronize TOEIC (toeic_data.js)
const toeic = loadJsonFromJs('toeic_data.js', 'toeicWordsDB');
let toeicUpdatedCount = 0;
toeic.data.forEach(w => {
    if (!w.en) return;
    const key = w.en.trim().toLowerCase();
    if (hsMap.has(key)) {
        const hsWord = hsMap.get(key);
        if (w.zh !== hsWord.zh) {
            w.zh = hsWord.zh;
            toeicUpdatedCount++;
        }
    }
});
saveJsonToJs('toeic_data.js', toeic.prefix, toeic.data, toeic.suffix);
console.log(`TOEIC (toeic_data.js) synchronized: ${toeicUpdatedCount} words updated to match High School.`);

// 4. Synchronize Listening Words (listening_words_data.js)
const listening = loadJsonFromJs('listening_words_data.js', 'listeningWordsDB');
let listeningUpdatedCount = 0;
listening.data.forEach(w => {
    if (!w.en) return;
    const key = w.en.trim().toLowerCase();
    if (hsMap.has(key)) {
        const hsWord = hsMap.get(key);
        if (w.zh !== hsWord.zh) {
            w.zh = hsWord.zh;
            listeningUpdatedCount++;
        }
    }
});
saveJsonToJs('listening_words_data.js', listening.prefix, listening.data, listening.suffix);
console.log(`Listening Words (listening_words_data.js) synchronized: ${listeningUpdatedCount} words updated to match High School.`);
