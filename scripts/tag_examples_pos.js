const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

const DB_FILES = [
  { file: 'words_data.js', varName: 'externalVocabularyDB', indent: 4 },
  { file: 'jh_data.js', varName: 'jhWordsDB', indent: 4 },
  { file: 'toeic_data.js', varName: 'toeicWordsDB', indent: 4 },
  { file: 'synonyms_unit8_data.js', varName: 'synUnit8WordsDB', indent: 2 },
  { file: 'examples_unit9_data.js', varName: 'examplesUnit9WordsDB', indent: 2 },
  { file: 'listening_words_data.js', varName: 'listeningWordsDB', indent: 4 },
];

const DETERMINERS = new Set([
  'a', 'an', 'the', 'this', 'that', 'these', 'those',
  'my', 'your', 'his', 'her', 'its', 'our', 'their',
  'some', 'any', 'no', 'every', 'each', 'many', 'much', 'few', 'little',
  'several', 'another', 'other', 'such', 'what', 'which', 'whose',
  'one', 'two', 'three', 'four', 'five', 'first', 'second', 'last', 'next'
]);

const MODALS_AND_AUX = new Set([
  'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must',
  'do', 'does', 'did', "don't", "doesn't", "didn't", "won't", "wouldn't",
  "can't", "cannot", "couldn't", "shouldn't", "mustn't", "didn't",
  'please', "let's"
]);

const HAVE_AUX = new Set(['have', 'has', 'had', "haven't", "hasn't", "hadn't"]);
const BE_VERBS = new Set(['am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', "isn't", "aren't", "wasn't", "weren't", "im", "youre", "hes", "shes", "its", "were", "theyre"]);
const LINKING_VERBS = new Set([
  ...BE_VERBS,
  'feel', 'feels', 'felt', 'look', 'looks', 'looked', 'seem', 'seems', 'seemed',
  'sound', 'sounds', 'sounded', 'taste', 'tastes', 'tasted', 'smell', 'smells', 'smelled',
  'become', 'becomes', 'became', 'get', 'gets', 'got', 'grow', 'grows', 'grew',
  'turn', 'turns', 'turned', 'remain', 'remains', 'remained', 'stay', 'stays', 'stayed',
  'keep', 'keeps', 'kept', 'appear', 'appears', 'appeared', 'prove', 'proves', 'proved'
]);

const SUBJECT_PRONOUNS = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'who', 'there']);
const OBJECT_PRONOUNS = new Set(['me', 'you', 'him', 'her', 'it', 'us', 'them', 'whom', 'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves']);
const PREPOSITIONS = new Set([
  'in', 'on', 'at', 'of', 'for', 'with', 'about', 'against', 'between', 'into',
  'through', 'during', 'before', 'after', 'above', 'below', 'from', 'up', 'down',
  'out', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'by', 'without',
  'within', 'along', 'across', 'behind', 'beyond', 'around', 'near', 'among', 'towards',
  'toward', 'upon', 'beside', 'besides', 'despite', 'except', 'inside', 'outside', 'onto',
  'throughout', 'underneath', 'unto', 'via', 'past', 'since', 'until', 'till', 'as', 'like', 'than'
]);

const FREQUENCY_AND_DEGREE_ADVERBS = new Set([
  'always', 'usually', 'often', 'sometimes', 'seldom', 'rarely', 'never', 'ever',
  'already', 'just', 'still', 'also', 'only', 'even', 'almost', 'nearly', 'hardly', 'barely', 'scarcely',
  'very', 'quite', 'rather', 'too', 'so', 'more', 'most', 'less', 'least', 'extremely', 'really', 'pretty', 'fairly'
]);

const NON_ADVERB_LY = new Set([
  'family', 'early', 'friendly', 'lovely', 'lonely', 'lively', 'ugly', 'silly',
  'likely', 'unlikely', 'holy', 'daily', 'weekly', 'monthly', 'yearly', 'costly',
  'deadly', 'orderly', 'elderly', 'cowardly', 'manly', 'womanly', 'timely',
  'supply', 'apply', 'reply', 'fly', 'rely', 'ally', 'bully', 'jelly', 'belly',
  'rally', 'tally', 'folly', 'lily', 'chilly', 'hilly', 'jolly', 'holly',
  'monopoly', 'anomaly', 'assembly', 'melancholy', 'butterfly', 'dragonfly', 'july', 'italy'
]);

function isAdverbToken(tok) {
  if (!tok) return false;
  if (FREQUENCY_AND_DEGREE_ADVERBS.has(tok)) return true;
  if (tok.length > 4 && tok.endsWith('ly') && !NON_ADVERB_LY.has(tok)) return true;
  return false;
}

const POS_REGEX = /(?:^|[\s;；/／,，、()（）])(n|v|vt|vi|adj|adv|prep|conj|pron|interj|int|art|num|aux|det|phr|abbr|pl)\s*[.．]/gi;
const EXISTING_PREFIX_RE = /^\s*\[([a-zA-Z]+(?:\s*\/\s*[a-zA-Z]+)*)\.?\s*\]\s*/;

function extractPosList(zh) {
  if (!zh || typeof zh !== 'string') return [];
  const list = [];
  let m;
  POS_REGEX.lastIndex = 0;
  while ((m = POS_REGEX.exec(zh)) !== null) {
    const p = m[1].toLowerCase() + '.';
    if (!list.includes(p)) list.push(p);
  }
  return list;
}

function getWordForms(word) {
  const w = word.toLowerCase().trim();
  const forms = new Set([w]);
  if (w.length > 2) {
    forms.add(w + 's');
    forms.add(w + 'es');
    forms.add(w + 'ed');
    forms.add(w + 'd');
    forms.add(w + 'ing');
    forms.add(w + 'er');
    forms.add(w + 'est');
    if (w.endsWith('e')) {
      forms.add(w.slice(0, -1) + 'ing');
      forms.add(w.slice(0, -1) + 'ed');
      forms.add(w.slice(0, -1) + 'er');
      forms.add(w.slice(0, -1) + 'est');
    }
    if (w.endsWith('y') && w.length > 2) {
      forms.add(w.slice(0, -1) + 'ies');
      forms.add(w.slice(0, -1) + 'ied');
      forms.add(w.slice(0, -1) + 'ier');
      forms.add(w.slice(0, -1) + 'iest');
    }
    const last = w[w.length - 1];
    const prev = w[w.length - 2];
    if ('bcdgklmnprstvz'.includes(last) && 'aeiou'.includes(prev)) {
      forms.add(w + last + 'ed');
      forms.add(w + last + 'ing');
      forms.add(w + last + 'er');
      forms.add(w + last + 'est');
    }
  }
  return forms;
}

function tokenizeSentence(sentence) {
  const rawTokens = sentence.trim().split(/\s+/);
  return rawTokens.map(raw => {
    const clean = raw.replace(/^[^a-zA-Z0-9']+|[^a-zA-Z0-9']+$/g, '').toLowerCase();
    const hasTrailingPunct = /[,.;:!?'"”’)\]]$/.test(raw);
    return { raw, clean, hasTrailingPunct };
  }).filter(t => t.clean.length > 0);
}

function isLikelyNounOrAdjToken(tok) {
  if (!tok) return false;
  if (PREPOSITIONS.has(tok) || DETERMINERS.has(tok) || MODALS_AND_AUX.has(tok) ||
      BE_VERBS.has(tok) || HAVE_AUX.has(tok) || SUBJECT_PRONOUNS.has(tok) || OBJECT_PRONOUNS.has(tok)) {
    return false;
  }
  return true;
}

function inferPosFromContext(word, posCandidates, sentence, zhText) {
  if (!posCandidates || posCandidates.length === 0) {
    // Fallback inference when zh has no explicit POS marker
    const cleanZh = (zhText || '').trim();
    if (cleanZh.endsWith('的')) return 'adj.';
    if (cleanZh.endsWith('地')) return 'adv.';
    return 'n.';
  }
  if (posCandidates.length === 1) return posCandidates[0];
  if (!sentence) return posCandidates[0];

  const cleanWord = word.toLowerCase().trim();
  if (cleanWord.includes(' ')) {
    return posCandidates[0];
  }

  const tokens = tokenizeSentence(sentence);
  const forms = getWordForms(cleanWord);
  let idx = tokens.findIndex(t => t.clean === cleanWord);
  if (idx === -1) {
    idx = tokens.findIndex(t => forms.has(t.clean));
  }
  if (idx === -1) return posCandidates[0];

  const tok = tokens[idx].clean;
  const prev1 = idx > 0 ? tokens[idx - 1].clean : '';
  const prev2 = idx > 1 ? tokens[idx - 2].clean : '';
  const next1 = idx + 1 < tokens.length ? tokens[idx + 1].clean : '';
  const next2 = idx + 2 < tokens.length ? tokens[idx + 2].clean : '';
  const prevHasPunct = idx > 0 ? tokens[idx - 1].hasTrailingPunct : true;
  const currHasPunct = tokens[idx].hasTrailingPunct;

  const scores = {};
  posCandidates.forEach((p, i) => {
    scores[p] = (posCandidates.length - i) * 0.05;
  });

  const addScore = (posGroup, delta) => {
    for (const p of posCandidates) {
      if (posGroup === 'V' && (p === 'v.' || p === 'vt.' || p === 'vi.' || p === 'aux.')) {
        scores[p] += delta;
      } else if (posGroup === 'VT' && (p === 'vt.' || p === 'v.')) {
        scores[p] += delta;
      } else if (posGroup === 'VI' && (p === 'vi.' || p === 'v.')) {
        scores[p] += delta;
      } else if (posGroup === 'N' && (p === 'n.' || p === 'pl.' || p === 'pron.')) {
        scores[p] += delta;
      } else if (posGroup === 'ADJ' && (p === 'adj.' || p === 'det.' || p === 'num.' || p === 'art.')) {
        scores[p] += delta;
      } else if (posGroup === 'ADV' && p === 'adv.') {
        scores[p] += delta;
      } else if (posGroup === 'PREP' && p === 'prep.') {
        scores[p] += delta;
      } else if (posGroup === 'CONJ' && p === 'conj.') {
        scores[p] += delta;
      } else if (posGroup === 'PRON' && p === 'pron.') {
        scores[p] += delta;
      } else if (posGroup === 'DET' && (p === 'det.' || p === 'adj.' || p === 'pron.')) {
        scores[p] += delta;
      }
    }
  };

  // 1. Morphological clues on matched token
  if (tok !== cleanWord) {
    if (tok.endsWith('ed') || tok.endsWith('ing')) {
      addScore('V', 4);
      if (DETERMINERS.has(prev1) && isLikelyNounOrAdjToken(next1)) {
        addScore('ADJ', 3);
      }
    } else if (tok.endsWith('s') || tok.endsWith('es')) {
      if (DETERMINERS.has(prev1) || PREPOSITIONS.has(prev1) || (idx > 0 && isLikelyNounOrAdjToken(prev1) && !SUBJECT_PRONOUNS.has(prev1))) {
        addScore('N', 4);
      } else if (SUBJECT_PRONOUNS.has(prev1)) {
        addScore('V', 5);
      } else {
        addScore('N', 2);
        addScore('V', 2);
      }
    } else if (tok.endsWith('er') || tok.endsWith('est')) {
      addScore('ADJ', 4);
      addScore('ADV', 3);
    }
  }

  // 2. Preceding token clues
  if (prev1 === 'to' && !prevHasPunct) {
    if (idx >= 2 && PREPOSITIONS.has(prev1) && ['look', 'looked', 'looking', 'used', 'accustomed', 'devoted', 'object', 'opposed', 'key', 'answer', 'solution', 'access', 'approach', 'visit', 'trip', 'road', 'way', 'next', 'close', 'due', 'prior', 'according', 'thanks', 'owing'].includes(prev2)) {
      addScore('N', 5);
    } else if (DETERMINERS.has(next1) || OBJECT_PRONOUNS.has(next1) || PREPOSITIONS.has(next1) || currHasPunct || next1 === '') {
      addScore('V', 6);
    } else {
      addScore('V', 4);
    }
  }

  if (MODALS_AND_AUX.has(prev1) && !prevHasPunct) {
    addScore('V', 7);
  }
  if (MODALS_AND_AUX.has(prev2) && isAdverbToken(prev1)) {
    addScore('V', 6);
  }

  if (HAVE_AUX.has(prev1) && !prevHasPunct) {
    if (tok !== cleanWord && (tok.endsWith('ed') || tok.endsWith('en'))) {
      addScore('V', 6);
    } else if (DETERMINERS.has(next1) || currHasPunct || PREPOSITIONS.has(next1)) {
      addScore('N', 2);
      addScore('V', 2);
    }
  }

  if (DETERMINERS.has(prev1) && !prevHasPunct) {
    if (currHasPunct || next1 === '' || PREPOSITIONS.has(next1) || BE_VERBS.has(next1) || MODALS_AND_AUX.has(next1) || HAVE_AUX.has(next1) || next1 === 'that' || next1 === 'which' || next1 === 'who') {
      addScore('N', 7);
    } else if (isLikelyNounOrAdjToken(next1)) {
      if ((cleanWord === 'first' || cleanWord === 'second' || cleanWord === 'last' || cleanWord === 'next') && !currHasPunct) {
        addScore('DET', 6);
        addScore('ADJ', 6);
      } else {
        addScore('ADJ', 5);
        addScore('N', 2);
      }
    } else {
      addScore('N', 5);
    }
  }

  if (DETERMINERS.has(prev2) && isLikelyNounOrAdjToken(prev1) && !prevHasPunct) {
    if (currHasPunct || next1 === '' || PREPOSITIONS.has(next1) || BE_VERBS.has(next1) || MODALS_AND_AUX.has(next1) || HAVE_AUX.has(next1)) {
      addScore('N', 6);
    } else if (idx === 2 && !currHasPunct && isLikelyNounOrAdjToken(next1)) {
      // Subject noun phrase at start of sentence: "A strong wind blew..." -> wind is N, blew is V
      addScore('N', 4.5);
    }
  }

  // Longer NP at end of clause: "set a new world record."
  if (idx >= 3 && DETERMINERS.has(tokens[idx - 3].clean) && (currHasPunct || next1 === '' || PREPOSITIONS.has(next1))) {
    addScore('N', 5.5);
  }

  if (PREPOSITIONS.has(prev1) && prev1 !== 'to' && !prevHasPunct) {
    if (currHasPunct || next1 === '' || PREPOSITIONS.has(next1)) {
      addScore('N', 6);
    } else if (isLikelyNounOrAdjToken(next1)) {
      addScore('ADJ', 4);
      addScore('N', 3);
    } else {
      addScore('N', 4);
    }
  }

  if (SUBJECT_PRONOUNS.has(prev1) && !prevHasPunct) {
    addScore('V', 6);
  }
  if (SUBJECT_PRONOUNS.has(prev2) && isAdverbToken(prev1) && !prevHasPunct) {
    addScore('V', 6);
  }

  if (LINKING_VERBS.has(prev1) && !prevHasPunct) {
    if (DETERMINERS.has(next1) || OBJECT_PRONOUNS.has(next1)) {
      if (tok.endsWith('ing') || tok.endsWith('ed')) {
        addScore('V', 5);
      } else {
        addScore('PREP', 4);
      }
    } else if (currHasPunct || next1 === '' || PREPOSITIONS.has(next1) || next1 === 'to' || next1 === 'that') {
      addScore('ADJ', 5);
    }
  }

  if (isAdverbToken(prev1) && !prevHasPunct) {
    if (LINKING_VERBS.has(prev2)) {
      addScore('ADJ', 6);
    } else if (DETERMINERS.has(prev2)) {
      addScore('ADJ', 6);
    } else if (currHasPunct || next1 === '' || PREPOSITIONS.has(next1)) {
      addScore('ADV', 5);
      addScore('ADJ', 3);
    } else if (isLikelyNounOrAdjToken(next1)) {
      addScore('ADJ', 4);
      addScore('ADV', 3);
    }
  }

  // 3. Sentence-initial position (idx === 0)
  if (idx === 0) {
    if (currHasPunct) {
      addScore('ADV', 5);
    } else if (DETERMINERS.has(next1) || OBJECT_PRONOUNS.has(next1)) {
      addScore('V', 4);
      addScore('PREP', 4);
    } else if (SUBJECT_PRONOUNS.has(next1)) {
      addScore('CONJ', 6);
      addScore('ADV', 3);
    } else if (BE_VERBS.has(next1) || MODALS_AND_AUX.has(next1) || HAVE_AUX.has(next1)) {
      addScore('N', 6);
      addScore('PRON', 6);
    }
  }

  // 4. Following token clues for VT vs VI vs PREP vs ADV vs CONJ
  const hasBothVtAndVi = posCandidates.includes('vt.') && posCandidates.includes('vi.');
  if (DETERMINERS.has(next1) || OBJECT_PRONOUNS.has(next1)) {
    if (!DETERMINERS.has(prev1) && !PREPOSITIONS.has(prev1)) {
      addScore('V', 2);
    }
    if (hasBothVtAndVi) {
      scores['vt.'] += 1.5;
    }
    if (!DETERMINERS.has(prev1) && !SUBJECT_PRONOUNS.has(prev1) && !MODALS_AND_AUX.has(prev1) && prev1 !== 'to') {
      addScore('PREP', 5);
    }
  } else if (PREPOSITIONS.has(next1) || currHasPunct || next1 === '') {
    if (hasBothVtAndVi) {
      scores['vi.'] += 1.5;
    }
    if (!DETERMINERS.has(prev1) && !PREPOSITIONS.has(prev1) && !LINKING_VERBS.has(prev1) && !SUBJECT_PRONOUNS.has(prev1) && !MODALS_AND_AUX.has(prev1) && prev1 !== 'to') {
      addScore('ADV', 5);
    }
  }

  if (SUBJECT_PRONOUNS.has(next1) || (DETERMINERS.has(next1) && idx > 0 && !BE_VERBS.has(prev1) && !SUBJECT_PRONOUNS.has(prev1) && !MODALS_AND_AUX.has(prev1) && prev1 !== 'to')) {
    if (posCandidates.includes('conj.')) {
      if (SUBJECT_PRONOUNS.has(next1) || (DETERMINERS.has(next1) && next2 && !currHasPunct)) {
        addScore('CONJ', 4);
      }
    }
  }

  let bestPos = posCandidates[0];
  let bestScore = -Infinity;
  for (const p of posCandidates) {
    if (scores[p] > bestScore) {
      bestScore = scores[p];
      bestPos = p;
    }
  }
  return bestPos.toLowerCase();
}

function main() {
  // First pass: load all databases and build a global word -> POS list map for fallback
  const loadedDBs = [];
  const globalWordPosMap = new Map();

  for (const dbInfo of DB_FILES) {
    const fullPath = path.join(ROOT, dbInfo.file);
    const rawContent = fs.readFileSync(fullPath, 'utf8');
    const declRegex = new RegExp(`(const\\s+${dbInfo.varName}\\s*=\\s*)\\[`);
    const match = declRegex.exec(rawContent);
    if (!match) {
      throw new Error(`Could not find declaration for ${dbInfo.varName} in ${dbInfo.file}`);
    }
    const headerPrefix = rawContent.slice(0, match.index + match[1].length);

    const sandbox = {};
    vm.runInNewContext(rawContent + `\n;globalThis.__DATA__ = ${dbInfo.varName};`, sandbox);
    const records = sandbox.__DATA__;

    for (const r of records) {
      const posList = extractPosList(r.zh);
      if (posList.length > 0 && r.en) {
        const key = r.en.toLowerCase().trim();
        if (!globalWordPosMap.has(key)) {
          globalWordPosMap.set(key, posList);
        }
      }
    }

    loadedDBs.push({ ...dbInfo, fullPath, headerPrefix, records });
  }

  // Second pass: tag every record's example with lowercase [pos.]
  let totalTagged = 0;
  let totalMultiPosResolved = 0;
  let totalFallbackPosUsed = 0;

  for (const db of loadedDBs) {
    let fileTagged = 0;
    for (const r of db.records) {
      if (!r.example || typeof r.example !== 'string' || !r.example.trim()) continue;

      // Strip any existing [pos.] prefix cleanly
      const cleanExample = r.example.replace(EXISTING_PREFIX_RE, '').trim();
      let posList = extractPosList(r.zh);

      if (posList.length === 0 && r.en) {
        const key = r.en.toLowerCase().trim();
        if (globalWordPosMap.has(key)) {
          posList = globalWordPosMap.get(key);
        }
        totalFallbackPosUsed++;
      }

      if (posList.length > 1) {
        totalMultiPosResolved++;
      }

      const chosenPos = inferPosFromContext(r.en || '', posList, cleanExample, r.zh || '');
      const normalizedTag = chosenPos.endsWith('.') ? chosenPos.toLowerCase() : (chosenPos.toLowerCase() + '.');
      r.example = `[${normalizedTag}] ${cleanExample}`;

      // Also clean any accidental leading "中文：" in exampleZh if present
      if (typeof r.exampleZh === 'string') {
        r.exampleZh = r.exampleZh.replace(/^\s*中文[：:]\s*/, '').trim();
      }

      fileTagged++;
      totalTagged++;
    }

    const serialized = db.headerPrefix + JSON.stringify(db.records, null, db.indent) + ';\n';
    fs.writeFileSync(db.fullPath, serialized, 'utf8');
    console.log(`[OK] ${db.file}: tagged ${fileTagged} / ${db.records.length} records`);
  }

  console.log(`\nDone! Total tagged: ${totalTagged} (Multi-POS resolved: ${totalMultiPosResolved}, Fallback POS used: ${totalFallbackPosUsed})`);
}

main();
