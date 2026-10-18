// node crawl_toeic.js — 補 toeic_data.js 的 kk / example / exampleZh（可續跑）
const fs = require('fs');
const FILE = 'toeic_data.js';
const CACHE = 'toeic_cache.json';
const src = fs.readFileSync(FILE, 'utf8');
const words = eval('(' + src.match(/\[[\s\S]*\]/)[0] + ')');
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// 先用本地 words_data.js 的音標預填
{
  const local = {};
  for (const m of fs.readFileSync('words_data.js', 'utf8').matchAll(/en:\s*'((?:[^'\\]|\\.)*)'[^}]*?kk:\s*'((?:[^'\\]|\\.)*)'/g)) local[m[1].toLowerCase()] = m[2].replace(/\\'/g, "'");
  let n = 0;
  words.forEach((w) => { if (!w.kk && local[w.en.toLowerCase()]) { w.kk = local[w.en.toLowerCase()]; n++; } });
  console.log('local kk filled', n);
}
const clean = (s) => s.replace(/<[^>]*>?/gm, '');

async function j(url, retry = 0) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (r.status === 404) return null;
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch (e) {
    if (retry < 1) { await sleep(1000); return j(url, retry + 1); }
    return undefined;
  }
}
async function getKK(w) {
  const d = await j('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(w));
  if (d === undefined) return undefined;
  for (const e of d || []) {
    if (e.phonetic) return e.phonetic;
    for (const p of e.phonetics || []) if (p.text) return p.text;
  }
  return '';
}
async function getEx(w) {
  const g = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&';
  const d = await j(g + 'dt=ex&q=' + encodeURIComponent(w));
  if (d === undefined) return undefined;
  const ex = d && d[13] && d[13][0] && d[13][0][0] && d[13][0][0][0] ? clean(d[13][0][0][0]) : '';
  if (!ex) return { ex: '', exZh: '' };
  const t = await j(g + 'dt=t&q=' + encodeURIComponent(ex));
  if (!t) return undefined;
  return { ex, exZh: t[0].map((x) => x[0]).join('') };
}
const write = () => {
  words.forEach((w) => {
    const c = cache[w.en] || {};
    if (!w.kk && c.kk) w.kk = c.kk;
    if (!w.example && c.ex) { w.example = c.ex; w.exampleZh = c.exZh; }
  });
  fs.writeFileSync(FILE, '// 多益常考單字 (單元 11-16)\nconst toeicWordsDB = ' + JSON.stringify(words, null, 2) + ';\n', 'utf8');
};

(async () => {
  const todo = words.filter((w) => {
    const c = cache[w.en] || {};
    return (!w.kk && c.kk === undefined) || (!w.example && c.ex === undefined);
  });
  console.log('todo', todo.length);
  let i = 0, done = 0;
  async function worker() {
    while (i < todo.length) {
      const w = todo[i++];
      const c = (cache[w.en] = cache[w.en] || {});
      if (!w.kk && c.kk === undefined) { const k = await getKK(w.en); if (k !== undefined) c.kk = k; }
      if (!w.example && c.ex === undefined) { const e = await getEx(w.en); if (e) { c.ex = e.ex; c.exZh = e.exZh; } }
      if (++done % 20 === 0) { fs.writeFileSync(CACHE, JSON.stringify(cache)); write(); console.log(done + '/' + todo.length); }
      await sleep(200);
    }
  }
  await Promise.all([worker(), worker(), worker()]);
  fs.writeFileSync(CACHE, JSON.stringify(cache));
  write();
  const f = (k) => words.filter((w) => w[k]).length;
  console.log('DONE', words.length, 'kk', f('kk'), 'ex', f('example'));
})();
