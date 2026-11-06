const fs = require('fs');
const path = require('path');
const vm = require('vm');

const OUTPUT_DIR = path.join(__dirname, '..', 'split_txt');
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const filesToSplit = [
    { file: 'words_data.js', varName: 'externalVocabularyDB', prefix: 'words_data', label: '高中 7000 單' },
    { file: 'jh_data.js', varName: 'jhWordsDB', prefix: 'jh_data', label: '國中 2000 單' },
    { file: 'toeic_data.js', varName: 'toeicWordsDB', prefix: 'toeic_data', label: '多益單字庫' },
    { file: 'synonyms_unit8_data.js', varName: 'synUnit8WordsDB', prefix: 'synonyms_unit8_data', label: '同義字專題 (Unit 8)' },
    { file: 'examples_unit9_data.js', varName: 'examplesUnit9WordsDB', prefix: 'examples_unit9_data', label: '情境例句專題 (Unit 9)' },
    { file: 'listening_words_data.js', varName: 'listeningWordsDB', prefix: 'listening_words_data', label: '聽力單字庫' }
];

const CHUNK_SIZE = 1000;
const manifestList = [];

for (const item of filesToSplit) {
    const srcPath = path.join(__dirname, '..', item.file);
    if (!fs.existsSync(srcPath)) {
        console.log(`Skipping non-existent: ${item.file}`);
        continue;
    }
    const code = fs.readFileSync(srcPath, 'utf8');
    const sandbox = {};
    vm.runInNewContext(code.replace(new RegExp(`const\\s+${item.varName}\\s*=`), `${item.varName} =`), sandbox);
    const records = sandbox[item.varName] || [];

    const total = records.length;
    const partsCount = Math.ceil(total / CHUNK_SIZE);
    console.log(`\nSplitting ${item.file} (${item.label}) - Total: ${total} records into ${partsCount} part(s)...`);

    for (let p = 0; p < partsCount; p++) {
        const startIdx = p * CHUNK_SIZE;
        const endIdx = Math.min(startIdx + CHUNK_SIZE, total);
        const chunk = records.slice(startIdx, endIdx);
        const partNum = p + 1;
        const outFileName = `${item.prefix}_part${partNum}.txt`;
        const outFilePath = path.join(OUTPUT_DIR, outFileName);

        fs.writeFileSync(outFilePath, JSON.stringify(chunk, null, 2), 'utf8');

        const firstId = chunk[0] ? chunk[0].id : 'N/A';
        const lastId = chunk[chunk.length - 1] ? chunk[chunk.length - 1].id : 'N/A';
        const firstEn = chunk[0] ? chunk[0].en : '';
        const lastEn = chunk[chunk.length - 1] ? chunk[chunk.length - 1].en : '';

        console.log(`  Created: ${outFileName} (${chunk.length} words, ID ${firstId} ~ ${lastId}, [${firstEn} ~ ${lastEn}])`);

        manifestList.push({
            file: outFileName,
            source: item.file,
            label: item.label,
            part: partNum,
            count: chunk.length,
            idRange: `ID ${firstId} ~ ${lastId}`,
            wordRange: `${firstEn} ~ ${lastEn}`
        });
    }
}

// Generate an INDEX & Prompt Template file for other AI
const indexContent = `# 單字庫拆分清單與 AI 校正專用指南
生成時間：${new Date().toLocaleString()}
總計拆分檔案數量：${manifestList.length} 個檔案（每檔上限 1,000 個單字）
存放路徑：${OUTPUT_DIR}

============================================================
【檔案清單一覽表】
============================================================
${manifestList.map(m => `* ${m.file.padEnd(30)} | ${m.label.padEnd(20)} | 筆數: ${String(m.count).padStart(4)} | 範圍: ${m.idRange.padEnd(20)} (${m.wordRange})`).join('\n')}

============================================================
【丟給其他 AI (ChatGPT / Claude / Gemini) 的建議提示詞 (Prompt)】
============================================================
你只需將檔案上傳或貼上內容，並附帶以下 Prompt：

「我上傳了一份英文單字庫 JSON 資料（每筆資料包含 id, en, kk, uk, zh, example, exampleZh）。
請扮演專業的英語教學與詞典編輯專家，針對這份資料庫進行全面檢核，並回傳錯漏診斷報告：

1. 【中文釋義 (zh)】：
   - 檢查核心釋義是否精準、自然、符合台灣繁體中文用語。
   - 抓出並剔除：荒謬的機器翻譯錯字、極端冷僻的動植物學名或冷門學科術語（如紋章學、古老宗教口令等）、成人限制級或粗俗俚語黑話。
2. 【例句與翻譯 (example / exampleZh)】：
   - 檢查英文例句文法是否正確，有無拼字錯誤或語病。
   - 檢查中文例句翻譯是否流暢通順，有無生硬機翻。
3. 【音標 (kk / uk)】：
   - 檢查音標是否有亂碼、缺漏或明顯錯誤。

【輸出格式】：
請依下列條列格式清晰輸出需要修正的單字：
* [ID] [單字 (中文)]：
   * 問題說明：(指出是 zh 錯字、不當字義、或例句翻譯生硬)
   * 建議修正：
     - zh: "..."
     - example: "..."
     - exampleZh: "..."」
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README_INDEX.txt'), indexContent, 'utf8');
console.log(`\nAll done! Created ${manifestList.length} TXT files + README_INDEX.txt in ${OUTPUT_DIR}`);
