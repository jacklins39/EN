// node crawl_kk.js  — 抓音標寫入 words_data.js（可中斷續跑，快取在 kk_cache.json）
const fs = require('fs');
const FILE = 'words_data.js';
const CACHE = 'kk_cache.json';
const CONCURRENCY = 5;

const src = fs.readFileSync(FILE, 'utf8');
const words = [...src.matchAll(/\{\s*id:\s*(\d+),\s*en:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)'(?:,\s*kk:\s*'(?:[^'\\]|\\.)*')?\s*\}/g)].map((m) => ({
  id: +m[1],
  en: m[2],
  zh: m[3],
}));
console.log('words:', words.length);

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const save = () => fs.writeFileSync(CACHE, JSON.stringify(cache));

async function fetchKK(w, retry = 0) {
  try {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(w));
    if (res.status === 404) return '';
    if (res.status === 429) throw new Error('429');
    const data = await res.json();
    for (const e of data) {
      if (e.phonetic) return e.phonetic;
      for (const p of e.phonetics || []) if (p.text) return p.text;
    }
    return '';
  } catch (err) {
    if (retry < 4) {
      await sleep(2000 * (retry + 1));
      return fetchKK(w, retry + 1);
    }
    return null; // 失敗不寫快取，下次重跑會再試
  }
}

function write() {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const lines = words.map((w) => {
    const kk = cache[w.en];
    return `    { id: ${w.id}, en: '${w.en}', zh: '${w.zh}'${kk ? `, kk: '${esc(kk)}'` : ''} },`;
  });
  fs.writeFileSync(FILE, '// 高中 7000 單字資料庫（含音標）\nconst externalVocabularyDB = [\n' + lines.join('\n') + '\n];\n', 'utf8');
}

(async () => {
  const todo = words.filter((w) => !(w.en in cache));
  console.log('todo:', todo.length);
  let i = 0, done = 0;
  async function worker() {
    while (i < todo.length) {
      const w = todo[i++];
      const kk = await fetchKK(w.en);
      if (kk !== null) cache[w.en] = kk;
      if (++done % 50 === 0) {
        save();
        console.log(`${done}/${todo.length}`);
      }
      await sleep(150);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  save();
  write();
  const got = words.filter((w) => cache[w.en]).length;
  console.log(`完成：${got}/${words.length} 有音標`);
})();
