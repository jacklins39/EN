const fs = require('fs');

const FILE = 'words_data.js';
const CACHE = 'example_cache.json';
const CONCURRENCY = 2; // Google API 限制較嚴，並發 2 就好

const src = fs.readFileSync(FILE, 'utf8');
const words = [...src.matchAll(/\{\s*id:\s*(\d+),\s*en:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)'(?:,\s*kk:\s*'((?:[^'\\]|\\.)*)')?(?:,\s*example:\s*'((?:[^'\\]|\\.)*)')?(?:,\s*exampleZh:\s*'((?:[^'\\]|\\.)*)')?\s*\}/g)].map((m) => ({
  id: +m[1],
  en: m[2],
  zh: m[3],
  kk: m[4] || '',
  example: m[5] || '',
  exampleZh: m[6] || ''
}));

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const save = () => fs.writeFileSync(CACHE, JSON.stringify(cache));

// 清理字串
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const cleanHtml = (s) => s.replace(/<[^>]*>?/gm, '');

function writeDB() {
  const lines = words.map((w) => {
    let ex = w.example || (cache[w.en] && cache[w.en].ex);
    let exZh = w.exampleZh || (cache[w.en] && cache[w.en].exZh);
    let parts = [`id: ${w.id}`, `en: '${w.en}'`, `zh: '${w.zh}'`];
    if (w.kk) parts.push(`kk: '${esc(w.kk)}'`);
    if (ex) parts.push(`example: '${esc(ex)}'`);
    if (exZh) parts.push(`exampleZh: '${esc(exZh)}'`);
    return `    { ${parts.join(', ')} },`;
  });
  fs.writeFileSync(FILE, '// 高中 7000 單字資料庫（含音標與例句）\nconst externalVocabularyDB = [\n' + lines.join('\n') + '\n];\n', 'utf8');
}

async function fetchExample(wordEn, retry = 0) {
  try {
    // dt=ex: 拿例句
    let res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=ex&q=${encodeURIComponent(wordEn)}`);
    if (!res.ok) throw new Error('status ' + res.status);
    let data = await res.json();
    
    let ex = '';
    if (data[13] && data[13][0] && data[13][0][0] && data[13][0][0][0]) {
       ex = cleanHtml(data[13][0][0][0]);
    }
    if (!ex) return { ex: '', exZh: '' };

    // dt=t: 翻譯例句
    res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(ex)}`);
    if (!res.ok) throw new Error('status ' + res.status);
    let transData = await res.json();
    
    let exZh = '';
    if (transData && transData[0]) {
       exZh = transData[0].map(x => x[0]).join('');
    }
    
    return { ex, exZh };
  } catch (err) {
    if (retry < 2) {
      await sleep(1000 * (retry + 1));
      return fetchExample(wordEn, retry + 1);
    }
    return null;
  }
}

(async () => {
  const todo = words.filter((w) => !w.example && !(w.en in cache));
  console.log(`Need examples for ${todo.length} words.`);
  
  let i = 0, done = 0;
  async function worker() {
    while (i < todo.length) {
      const w = todo[i++];
      const result = await fetchExample(w.en);
      if (result) {
        if (result.ex) {
          cache[w.en] = result;
          w.example = result.ex;
          w.exampleZh = result.exZh;
        } else {
          cache[w.en] = { ex: '', exZh: '' }; // 空的也記錄，避免重查
        }
      }
      
      done++;
      if (done % 5 === 0) {
        save();
        writeDB(); // 每抓 5 個就寫入一次檔案，讓前端馬上能用
        console.log(`Progress: ${done} / ${todo.length}`);
      }
      await sleep(200);
    }
  }
  
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  save();
  writeDB();
  console.log('Done fetching examples.');
})();
