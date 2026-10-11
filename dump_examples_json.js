const fs = require('fs');

function loadJS(filepath, varname) {
    const code = fs.readFileSync(filepath, 'utf8');
    const fn = new Function(code + `; return ${varname};`);
    return fn();
}

function cleanText(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/\\+(['"])/g, '$1').replace(/\\+/g, '').trim();
}

const w = loadJS('./words_data.js', 'externalVocabularyDB');
const t = loadJS('./toeic_data.js', 'toeicWordsDB');
const j = loadJS('./jh_data.js', 'jhWordsDB');

const all = [...w, ...t, ...j];
const examples = [];

all.forEach(item => {
    if (item && item.id && item.example) {
        const clean = cleanText(item.example);
        if (clean) {
            examples.push({
                id: item.id,
                en: item.en || '',
                unit: item.unit || 99,
                example: clean
            });
        }
    }
});

fs.writeFileSync('./examples_data.json', JSON.stringify(examples, null, 2), 'utf8');
console.log(`Successfully exported ${examples.length} example sentences to examples_data.json`);
