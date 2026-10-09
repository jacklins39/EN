const fs = require('fs');

let wordsData = fs.readFileSync('words_data.js', 'utf8');
let toeicData = fs.readFileSync('toeic_data.js', 'utf8');

const exampleCache = JSON.parse(fs.readFileSync('example_cache.json', 'utf8'));

let match = wordsData.match(/const externalVocabularyDB = (\[[\s\S]*?\]);/);
if (match) {
    let db = eval(match[1]);
    let modified = false;
    db.forEach(w => {
        if (!w.example && exampleCache[w.en] && exampleCache[w.en].ex) {
            w.example = exampleCache[w.en].ex;
            w.exampleZh = exampleCache[w.en].exZh;
            modified = true;
        }
    });
    if (modified) {
        wordsData = wordsData.replace(match[1], JSON.stringify(db, null, 4));
        fs.writeFileSync('words_data.js', wordsData);
        console.log('Updated words_data.js');
    }
} else {
    console.log("Could not match externalVocabularyDB");
}

match = toeicData.match(/const toeicWordsDB = (\[[\s\S]*?\]);/);
if (match) {
    let db = eval(match[1]);
    let modified = false;
    db.forEach(w => {
        if (!w.example && exampleCache[w.en] && exampleCache[w.en].ex) {
            w.example = exampleCache[w.en].ex;
            w.exampleZh = exampleCache[w.en].exZh;
            modified = true;
        }
    });
    if (modified) {
        toeicData = toeicData.replace(match[1], JSON.stringify(db, null, 4));
        fs.writeFileSync('toeic_data.js', toeicData);
        console.log('Updated toeic_data.js');
    }
} else {
    console.log("Could not match toeicWordsDB");
}
