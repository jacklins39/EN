// node crawl_tatoeba.js — 用 Tatoeba 補缺的例句 (words_data.js + toeic_data.js)，可續跑
const fs = require('fs');
const CACHE = 'tatoeba_cache.json';
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const save = () => fs.writeFileSync(CACHE, JSON.stringify(cache));

// ---- 讀兩個字庫缺例句的字 ----
const toeic = eval('(' + fs.readFileSync('toeic_data.js', 'utf8').match(/\[[\s\S]*\]/)[0] + ')');
const wsrc = fs.readFileSync('words_data.js', 'utf8');
const wordsMissing = [...wsrc.matchAll(/\{\s*id:\s*\d+,\s*en:\s*'((?:[^'\\]|\\.)*)'([^}]*)\}/g)]
  .filter((m) => !/example:\s*'./.test(m[2])).map((m) => m[1].replace(/\\'/g, "'"));
const ecache = fs.existsSync('example_cache.json') ? JSON.parse(fs.readFileSync('example_cache.json', 'utf8')) : {};
const toeicMissing = toeic.filter((w) => !w.example).map((w) => w.en);
const all = [...new Set([...wordsMissing, ...toeicMissing])];
const todo = all.filter((w) => !(w in cache));
console.log('missing words', all.length, 'todo', todo.length);

async function j(url, retry = 0) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (r.status === 429) throw new Error('429');
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch (e) {
    if (retry < 2) { await sleep(2000 * (retry + 1)); return j(url, retry + 1); }
    return undefined; // 失敗：不寫快取，下次重跑再試
  }
}
const rx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function find(en) {
  const d = await j('https://tatoeba.org/en/api_v0/search?from=eng&sort=relevance&unapproved=no&orphans=no&word_count_max=16&query=' + encodeURIComponent('"' + en + '"'));
  if (d === undefined) return undefined;
  const re = new RegExp('\\b' + rx(en) + '(s|es|ed|d|ing|ly)?\\b', 'i');
  const cands = (d.results || []).map((x) => x.text).filter((t) => re.test(t) && t.length >= 18 && t.length <= 90 && /[.?!]$/.test(t));
  if (!cands.length) return { ex: '', exZh: '' };
  cands.sort((a, b) => a.length - b.length);
  const ex = cands[Math.min(1, cands.length - 1)]; // 取偏短但不是最短的
  const t = await j('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=' + encodeURIComponent(ex));
  if (!t || !t[0]) return undefined;
  return { ex, exZh: t[0].map((x) => x[0]).join('') };
}

function apply() {
  // 1) 多益：直接寫回 toeic_data.js
  toeic.forEach((w) => { const c = cache[w.en]; if (!w.example && c && c.ex) { w.example = c.ex; w.exampleZh = c.exZh; } });
  fs.writeFileSync('toeic_data.js', '// 多益常考單字 (單元 11-16)\nconst toeicWordsDB = ' + JSON.stringify(toeic, null, 2) + ';\n', 'utf8');
  // 2) 高中字庫：灌進 example_cache.json，再由 crawl_examples.js 的 writeDB 寫回 words_data.js
  for (const en in cache) if (cache[en].ex && !(ecache[en] && ecache[en].ex)) ecache[en] = cache[en];
  fs.writeFileSync('example_cache.json', JSON.stringify(ecache));
}

(async () => {
  let i = 0, done = 0, hit = 0;
  async function worker() {
    while (i < todo.length) {
      const en = todo[i++];
      const r = await find(en);
      if (r) { cache[en] = r; if (r.ex) hit++; }
      if (++done % 25 === 0) { save(); console.log(`${done}/${todo.length} hit ${hit}`); }
      await sleep(250);
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  save();
  apply();
  console.log(`DONE ${done}/${todo.length} hit ${hit}`);
})();
