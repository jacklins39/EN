const fs = require('fs');

const CACHE_FILE = 'example_cache.json';
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const saveCache = () => fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const cleanHtml = (s) => s.replace(/<[^>]*>?/gm, '');

// Fetch from Google Translate
async function fetchExample(wordEn, retry = 0) {
  try {
    let res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=ex&q=${encodeURIComponent(wordEn)}`);
    if (!res.ok) throw new Error('status ' + res.status);
    let data = await res.json();
    
    let ex = '';
    if (data[13] && data[13][0] && data[13][0][0] && data[13][0][0][0]) {
       ex = cleanHtml(data[13][0][0][0]);
    }
    if (!ex) return { ex: '', exZh: '' };

    res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(ex)}`);
    if (!res.ok) throw new Error('status ' + res.status);
    let transData = await res.json();
    
    let exZh = '';
    if (transData && transData[0]) {
       exZh = transData[0].map(x => x[0]).join('');
    }
    
    return { ex, exZh };
  } catch (err) {
    if (retry < 3) {
      await sleep(2000 * (retry + 1));
      return fetchExample(wordEn, retry + 1);
    }
    return null;
  }
}

function extractDB(filename, regex) {
    let content = fs.readFileSync(filename, 'utf8');
    let match = content.match(regex);
    if (!match) return null;
    return eval(match[1]); // returns the array
}

function saveDB(filename, regex, dbArray, space = 4) {
    let content = fs.readFileSync(filename, 'utf8');
    let match = content.match(regex);
    if (match) {
        content = content.replace(match[1], JSON.stringify(dbArray, null, space));
        fs.writeFileSync(filename, content);
    }
}

async function run() {
    let wordsDB = extractDB('words_data.js', /const externalVocabularyDB = (\[[\s\S]*?\]);/);
    let toeicDB = extractDB('toeic_data.js', /const toeicWordsDB = (\[[\s\S]*?\]);/);
    
    let todo = [];
    wordsDB.forEach(w => { if (!w.example && !(w.en in cache)) todo.push(w.en); });
    toeicDB.forEach(w => { if (!w.example && !(w.en in cache)) todo.push(w.en); });
    
    todo = [...new Set(todo)]; // deduplicate
    console.log(`Need examples for ${todo.length} words.`);
    
    let done = 0;
    let hit = 0;
    for (let i = 0; i < todo.length; i++) {
        let en = todo[i];
        let res = await fetchExample(en);
        if (res) {
            cache[en] = res;
            if (res.ex) hit++;
        } else {
            cache[en] = { ex: '', exZh: '' }; // empty to prevent recrawling
        }
        
        done++;
        if (done % 5 === 0) {
            saveCache();
            console.log(`${done}/${todo.length} hit ${hit}`);
        }
        await sleep(300); // polite delay
    }
    saveCache();
    console.log(`DONE! Found ${hit} examples.`);
}

run();
