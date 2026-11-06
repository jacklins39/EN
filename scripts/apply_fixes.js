const fs = require('fs');

const fixes = JSON.parse(fs.readFileSync('scratch/fixes.json', 'utf8'));
const fixesMap = new Map();
fixes.forEach(f => fixesMap.set(f.en.toLowerCase(), f));

function patchDatabase(filePath, varName) {
    let content = fs.readFileSync(filePath, 'utf8');
    const startIdx = content.indexOf('[');
    const endIdx = content.lastIndexOf(']');
    const prefix = content.slice(0, startIdx);
    const suffix = content.slice(endIdx + 1);
    const data = JSON.parse(content.slice(startIdx, endIdx + 1));

    let updatedCount = 0;
    for (const item of data) {
        const enLower = (item.en || '').trim().toLowerCase();
        if (fixesMap.has(enLower)) {
            const fix = fixesMap.get(enLower);
            if (fix.zh && item.zh !== fix.zh) {
                item.zh = fix.zh;
                updatedCount++;
            }
            if (fix.exampleZh && item.exampleZh !== fix.exampleZh) {
                item.exampleZh = fix.exampleZh;
                updatedCount++;
            }
        }
    }

    const newJson = JSON.stringify(data, null, 4);
    fs.writeFileSync(filePath, prefix + newJson + suffix, 'utf8');
    console.log(`Successfully patched ${filePath} (${varName}): ${updatedCount} field modifications.`);
}

patchDatabase('words_data.js', 'externalVocabularyDB');
patchDatabase('jh_data.js', 'jhWordsDB');
patchDatabase('toeic_data.js', 'toeicWordsDB');
