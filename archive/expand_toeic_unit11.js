const fs = require('fs');

const toeicFile = 'toeic_data.js';
const toeic = (new Function(fs.readFileSync(toeicFile, 'utf8') + '\nreturn toeicWordsDB;'))();
const currentToeicSet = new Set(toeic.map(w => w.en.trim().toLowerCase()));

// 高中庫拿已有 KK
const hsWords = (new Function(fs.readFileSync('words_data.js', 'utf8') + '\nreturn externalVocabularyDB;'))();
const hsMap = new Map(hsWords.map(w => [w.en.trim().toLowerCase(), w]));

// 37 個多益核心單字清單 (含詞性與中文)
const wordsToAdd = [
    { en: 'adjacent', zh: 'adj. 鄰近的；毗連的', kk: '/əˈdʒesənt/' },
    { en: 'appointment', zh: 'n. 約定；任命', kk: '/əˈpɔɪntmənt/' },
    { en: 'appraisal', zh: 'n. 評估；考核', kk: '/əˈprezəl/' },
    { en: 'asset', zh: 'n. 資產；優勢', kk: '/ˈæset/' },
    { en: 'attendee', zh: 'n. 出席者；參加者', kk: '/əˌtɛnˈdi/' },
    { en: 'authorize', zh: 'v. 授權；批准', kk: '/ˈɔθɝˌaɪz/' },
    { en: 'availability', zh: 'n. 可用性；空檔', kk: '/əˌveləˈbɪləti/' },
    { en: 'bulletin', zh: 'n. 公告；快報', kk: '/ˈbʊɫɪtən/' },
    { en: 'clientele', zh: 'n. 客戶群；顧客', kk: '/ˌklaɪənˈtɛl/' },
    { en: 'commence', zh: 'v. 開始；著手', kk: '/kəˈmɛns/' },
    { en: 'compliance', zh: 'n. 遵守；合規', kk: '/kəmˈplaɪəns/' },
    { en: 'corporation', zh: 'n. 公司；企業法人', kk: '/ˌkɔɹpɝˈeɪʃən/' },
    { en: 'correspondence', zh: 'n. 通信；商務信件', kk: '/ˌkɔɹəˈspɑndəns/' },
    { en: 'designate', zh: 'v. 指定；指派', kk: '/ˈdɛzəɡˌneɪt/' },
    { en: 'dispatch', zh: 'v. 派遣；發送', kk: '/dɪˈspætʃ/' },
    { en: 'distribute', zh: 'v. 分發；分銷', kk: '/dɪˈstɹɪbjut/' },
    { en: 'endorse', zh: 'v. 背書；贊同', kk: '/ɪnˈdɔrs/' },
    { en: 'entrepreneur', zh: 'n. 企業家；創業者', kk: '/ˌɑntrəprəˈnɝ/' },
    { en: 'flexible', zh: 'adj. 彈性的；靈活的', kk: '/ˈfɫɛksəbəɫ/' },
    { en: 'furnish', zh: 'v. 提供；配備家具', kk: '/ˈfɝnɪʃ/' },
    { en: 'headquarters', zh: 'n. 總部；總公司', kk: '/ˈhɛdˌkɔɹtɝz/' },
    { en: 'installation', zh: 'n. 安裝；設施', kk: '/ˌɪnstəˈɫeɪʃən/' },
    { en: 'jeopardize', zh: 'v. 危及；危害', kk: '/ˈdʒɛpɝˌdaɪz/' },
    { en: 'minutes', zh: 'n. 會議記錄', kk: '/ˈmɪnɪts/' },
    { en: 'notify', zh: 'v. 通知；告知', kk: '/ˈnoʊtəˌfaɪ/' },
    { en: 'occupy', zh: 'v. 佔用；佔據', kk: '/ˈɑkjəˌpaɪ/' },
    { en: 'overdue', zh: 'adj. 逾期的；拖欠的', kk: '/ˌovɝˈdu/' },
    { en: 'patron', zh: 'n. 老主顧；贊助人', kk: '/ˈpeɪtɹən/' },
    { en: 'precaution', zh: 'n. 預防措施', kk: '/pɹiˈkɔʃən/' },
    { en: 'presentation', zh: 'n. 簡報；發表會', kk: '/ˌpɹɛzənˈteɪʃən/' },
    { en: 'promotion', zh: 'n. 升遷；促銷', kk: '/pɝˈmoʊʃən/' },
    { en: 'résumé', zh: 'n. 履歷表', kk: '/ˈrɛzəˌme/' },
    { en: 'securities', zh: 'n. 證券；有價證券', kk: '/səˈkjʊrətiz/' },
    { en: 'terminate', zh: 'v. 終止；結束', kk: '/ˈtɝməˌneɪt/' },
    { en: 'transit', zh: 'n. 運輸；轉運', kk: '/ˈtɹænzɪt/' },
    { en: 'utility', zh: 'n. 公共事業；效用', kk: '/juˈtɪɫəti/' },
    { en: 'venue', zh: 'n. 場地；會場', kk: '/ˈvɛnju/' }
];

let maxId = 0;
toeic.forEach(w => { if (w.id > maxId) maxId = w.id; });
let nextId = maxId + 1;

let addedCount = 0;
for (const item of wordsToAdd) {
    const key = item.en.toLowerCase();
    if (currentToeicSet.has(key)) continue;

    // 若高中庫有 KK，優先取高中庫標準音標
    const hs = hsMap.get(key);
    const kk = (hs && hs.kk) ? hs.kk : item.kk;

    toeic.push({
        id: nextId++,
        en: item.en,
        kk: kk,
        zh: item.zh,
        unit: 11, // 歸入多益單元 11
        example: '',
        exampleZh: ''
    });
    currentToeicSet.add(key);
    addedCount++;
}

fs.writeFileSync(toeicFile, `// 全新制多益 3000 單字資料庫\nconst toeicWordsDB = ${JSON.stringify(toeic, null, 4)};\n`, 'utf8');
console.log(`✔ 成功將 ${addedCount} 個多益核心單字擴充至 toeic_data.js (單元 11)！`);
console.log(`多益單字庫總數: ${toeic.length} (ID 範圍: 20001 ~ ${nextId - 1})`);
