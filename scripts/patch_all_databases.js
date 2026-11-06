const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. High School Clean Definitions Map
const HS_CLEAN_ZH = {
    'let': 'vt. 讓、允許、准許、同意；n. 出租、租借',
    'tell': 'v. 告訴、講述、告知、說',
    'in': 'prep. 在……內、在……裡、進……裡；adv. 進入、朝裡、在裡頭；adj. 在裡面的、流行的',
    'or': 'conj. 或者、還是、也不',
    'airport': 'n. 機場、飛機場、航空站',
    'bed': 'n. 床、床鋪、河床、苗圃；v. 把……固定、嵌入、安置',
    'bottom': 'n. 底部、底、盡頭；adj. 最低的、底部的',
    'cage': 'n. 籠子、鳥籠；v. 把……關進籠中、囚禁',
    'church': 'n. 教堂、教會、禮拜儀式；adj. 教會的',
    'doll': 'n. 洋娃娃、玩偶',
    'dove': 'n. 鴿、鴿子、溫和派人士',
    'elephant': 'n. 大象、象',
    'fish': 'n. 魚、魚肉；vi. 釣魚、捕魚',
    'flower': 'n. 花、開花植物；vi. 開花、繁榮',
    'fly': 'v. 飛、飛行、乘飛機；n. 蒼蠅',
    'frog': 'n. 青蛙、蛙；v. 捕蛙',
    'ghost': 'n. 鬼、幽靈；v. 悄悄行進',
    'glass': 'n. 玻璃、玻璃杯、眼鏡',
    'grass': 'n. 草、草地、草坪；v. 種草',
    'gray': 'adj. 灰色的、灰白的；vi. 成為灰色；vt. 使成灰色；n. 灰色',
    'ham': 'n. 火腿、大腿後部',
    'self': 'n. 自身、自己、自我；pron. 自己、本人',
    'snake': 'n. 蛇；vi. 蛇行、蜿蜒前進',
    'vegetable': 'n. 蔬菜；adj. 植物的、蔬菜的',
    'weather': 'n. 天氣、氣候；vt. 平安度過、經受住、風化',
    'worm': 'n. 蠕蟲、幼蟲；vt. 驅蟲、蠕動行進',
    'broad': 'adj. 寬闊的、廣泛的、寬廣的',
    'effective': 'adj. 有效的、生效的、起作用的；n. 有效兵力',
    'entire': 'adj. 全部的、整個的、完全的',
    'former': 'adj. 以前的、前任的；pron. 前者',
    'frank': 'adj. 坦白的、坦率的、直言不諱的',
    'gentle': 'adj. 溫柔的、和緩的、平緩的',
    'royal': 'adj. 皇家的、王室的、盛大的；n. 王室成員',
    'upper': 'adj. 較高的、上面的、上層的；n. 鞋幫、鞋面',
    'flute': 'n. 長笛、長笛吹奏者；v. 吹長笛',
    'general': 'adj. 一般的、整體的、普遍的；n. 將軍、上將',
    'goat': 'n. 山羊、替罪羊',
    'golf': 'n. 高爾夫球運動；v. 打高爾夫球',
    'guy': 'n. 傢伙、男人、夥伴；v. 嘲弄',
    'habit': 'n. 習慣、習性、嗜好',
    'hanger': 'n. 衣架、掛鉤、吊架',
    'invitation': 'n. 邀請、請柬',
    'item': 'n. 項目、條款、一件商品；v. 逐條列出',
    'liquid': 'n. 液體；adj. 液態的、流動的',
    'loaf': 'n. 一條（麵包）；v. 遊蕩、閒逛',
    'necklace': 'n. 項鍊',
    'paste': 'n. 麵糊、糊狀物、肉醬；vt. 黏貼、貼上',
    'peach': 'n. 桃子、桃樹、桃紅色；adj. 桃紅色的',
    'pigeon': 'n. 鴿子',
    'pizza': 'n. 披薩、比薩餅',
    'pump': 'n. 泵、抽水機；vt. 用泵輸送、打氣、抽水',
    'quarter': 'n. 四分之一、一刻鐘、季度、25美分硬幣；vt. 提供住宿、四等分',
    'shelf': 'n. 架子、擱板、陸架',
    'stamp': 'n. 郵票、印章、戳記；vt. 蓋印、蓋章、重踏、跺腳',
    'tent': 'n. 帳篷；v. 住帳篷、搭帳篷',
    'thumb': 'n. 拇指；v. 用拇指翻閱、按拇指',
    'trick': 'n. 花招、詭計、把戲、竅門；vt. 欺騙、哄騙',
    'turkey': 'n. 火雞、火雞肉',
    'turtle': 'n. 烏龜、海龜',
    'wound': 'n. 創傷、傷口；vt. 傷害、使受傷',
    'yard': 'n. 院子、庭院、碼（長度單位）',
    'confident': 'adj. 有信心的、自信的、確信的',
    'interrupt': 'vt. 打斷、打擾、使中斷；vi. 打斷',
    'recover': 'v. 恢復、找回、康復、尋回',
    'boot': 'n. 靴子、後車廂、啟動；vt. 猛踢、啟動（電腦）',
    'fry': 'vt. 油煎、油炸；n. 炸薯條、炸物',
    'gas': 'n. 氣體、瓦斯、汽油；v. 加油、閒聊',
    'gram': 'n. 公克、克',
    'permit': 'v. 允許、准許、使……可能；n. 許可證、執照',
    'rent': 'n. 租金；vt. 租用、出租',
    'scarf': 'n. 圍巾、披巾、領巾',
    'peculiar': 'adj. 奇怪的、特殊的、獨特的',
    'doctor': 'n. 醫生、博士；vt. 篡改、偽造、給……下藥',
    'surf': 'v. 上網、衝浪；n. 浪花、海浪',
    'bachelor': 'n. 單身漢、學士',
    'bleak': 'adj. 荒涼的、暗淡的、無希望的',
    'hack': 'v. 劈、砍、駭入；n. 駭客、劈砍、竅門',
    'ball': 'n. 球、球狀物、舞會；v. 捏成球形',
    'pork': 'n. 豬肉',
    'shark': 'n. 鯊魚、投機者',
    'cancer': 'n. 癌症、腫瘤',
    'desert': 'n. 沙漠、荒原；v. 拋棄、遺棄',
    'elect': 'v. 選舉、推選；adj. 當選的',
    'fair': 'adj. 公平的、晴朗的；n. 市集、博覽會',
    'find': 'v. 找到、發現；n. 發現物',
    'lip': 'n. 嘴唇、邊緣',
    'plate': 'n. 盤子、金屬板、車牌；vt. 電鍍',
    'slim': 'adj. 苗條的、纖細的、微小的；v. 減肥、縮減',
    'none': 'pron. 沒有一個、毫無；adv. 決不',
    'organ': 'n. 器官、風琴、機構',
    'private': 'adj. 私人的、私密的、私立的；n. 二等兵',
    'miss': 'v. 想念、錯過、漏掉；n. 小姐',
    'november': 'n. 十一月',
    'spiral': 'n. 螺旋形、螺旋式上升；v. 螺旋式上升、急劇惡化；adj. 螺旋形的',
    'few': 'adj. 很少的、少數的；pron. 很少、少數',
    'ai': 'abbr. 人工智慧；n. 人工智慧'
};

function loadDB(filePath, varName) {
    const code = fs.readFileSync(filePath, 'utf8');
    const sandbox = {};
    vm.runInNewContext(code.replace(new RegExp(`const\\s+${varName}\\s*=`), `${varName} =`), sandbox);
    return sandbox[varName] || [];
}

const hsDB = loadDB('words_data.js', 'externalVocabularyDB');
const jhDB = loadDB('jh_data.js', 'jhWordsDB');
const toeicDB = loadDB('toeic_data.js', 'toeicWordsDB');

console.log(`Loaded: HS=${hsDB.length}, JH=${jhDB.length}, TOEIC=${toeicDB.length}`);

const changedZh = [];      // { id, en, oldZh, newZh, type }
const changedExample = []; // { id, en, oldEx, newEx, oldExZh, newExZh }

// 2. Patch HS DB
for (const item of hsDB) {
    const key = (item.en || '').toLowerCase().trim();
    if (HS_CLEAN_ZH[key] && item.zh !== HS_CLEAN_ZH[key]) {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: HS_CLEAN_ZH[key], source: 'words_data.js' });
        item.zh = HS_CLEAN_ZH[key];
    }
}

// Build map of master HS words
const hsMasterMap = new Map();
for (const item of hsDB) {
    const key = (item.en || '').toLowerCase().trim();
    if (!hsMasterMap.has(key)) {
        hsMasterMap.set(key, item);
    }
}

// 3. Patch JH DB
for (const item of jhDB) {
    const key = (item.en || '').toLowerCase().trim();
    
    // Check JH specific overrides
    if (item.id === 30297) { // chopstick
        if (item.exampleZh !== '他會使用筷子。') {
            changedExample.push({ id: item.id, en: item.en, oldEx: item.example, newEx: item.example, oldExZh: item.exampleZh, newExZh: '他會使用筷子。' });
            item.exampleZh = '他會使用筷子。';
        }
    }
    if (item.id === 30407 && item.zh !== 'n. 資料、數據') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 資料、數據', source: 'jh_data.js' });
        item.zh = 'n. 資料、數據';
    }
    if (item.id === 30596 && item.zh !== 'adj. 肥胖的、多脂肪的；n. 脂肪、烹調用油') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 肥胖的、多脂肪的；n. 脂肪、烹調用油', source: 'jh_data.js' });
        item.zh = 'adj. 肥胖的、多脂肪的；n. 脂肪、烹調用油';
    }
    if (item.id === 30832) { // if
        if (item.example !== 'I will be there if possible.' || item.exampleZh !== '如果可能的話我會去那兒。') {
            changedExample.push({ id: item.id, en: item.en, oldEx: item.example, newEx: 'I will be there if possible.', oldExZh: item.exampleZh, newExZh: '如果可能的話我會去那兒。' });
            item.example = 'I will be there if possible.';
            item.exampleZh = '如果可能的話我會去那兒。';
        }
    }
    if (item.id === 30864 && item.en === 'Interrupt') {
        item.en = 'interrupt';
    }
    if (item.id === 31182) { // ox
        if (item.example !== 'Seven sheep and eight oxen.' || item.exampleZh !== '七隻羊和八頭公牛。') {
            changedExample.push({ id: item.id, en: item.en, oldEx: item.example, newEx: 'Seven sheep and eight oxen.', oldExZh: item.exampleZh, newExZh: '七隻羊和八頭公牛。' });
            item.example = 'Seven sheep and eight oxen.';
            item.exampleZh = '七隻羊和八頭公牛。';
        }
    }
    if (item.id === 31412 && item.zh !== 'n. 玫瑰、玫瑰花、粉紅色；adj. 玫瑰色的') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 玫瑰、玫瑰花、粉紅色；adj. 玫瑰色的', source: 'jh_data.js' });
        item.zh = 'n. 玫瑰、玫瑰花、粉紅色；adj. 玫瑰色的';
    }
    if (item.id === 31697 && item.zh !== 'n. 茶壺') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 茶壺', source: 'jh_data.js' });
        item.zh = 'n. 茶壺';
    }
    if (item.id === 31748 && item.zh !== 'n. 時間、次數、倍數；vt. 計時') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 時間、次數、倍數；vt. 計時', source: 'jh_data.js' });
        item.zh = 'n. 時間、次數、倍數；vt. 計時';
    }
    if (item.id === 31931 && item.zh !== 'n. 創傷、傷口；vt. 傷害、使受傷') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 創傷、傷口；vt. 傷害、使受傷', source: 'jh_data.js' });
        item.zh = 'n. 創傷、傷口；vt. 傷害、使受傷';
    }

    // High School priority sync: if word is in HS master map and clean
    if (hsMasterMap.has(key)) {
        const hsItem = hsMasterMap.get(key);
        // Sync zh
        if (item.zh !== hsItem.zh) {
            changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: hsItem.zh, source: 'jh_data.js (sync HS)' });
            item.zh = hsItem.zh;
        }
    }
}

// 4. Patch TOEIC DB
for (const item of toeicDB) {
    const key = (item.en || '').toLowerCase().trim();

    // TOEIC Specific Overrides
    if (item.id === 23012) { // wo -> woe
        item.en = 'woe';
        item.kk = '[wo]';
        item.uk = '/wəʊ/';
        const newZh = 'n. 困難、悲傷、痛苦、災禍';
        const newEx = 'The company faced severe economic woes during the crisis.';
        const newExZh = '該公司在危機期間面臨嚴重的經濟困境。';
        if (item.zh !== newZh) {
            changedZh.push({ id: item.id, en: 'woe', oldZh: item.zh, newZh: newZh, source: 'toeic_data.js' });
            item.zh = newZh;
        }
        if (item.example !== newEx) {
            changedExample.push({ id: item.id, en: 'woe', oldEx: item.example, newEx: newEx, oldExZh: item.exampleZh, newExZh: newExZh });
            item.example = newEx;
            item.exampleZh = newExZh;
        }
    }
    if (item.id === 31991) { // headwind
        const newZh = 'n. （經濟）逆風、阻力';
        if (item.zh !== newZh) {
            changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: newZh, source: 'toeic_data.js' });
            item.zh = newZh;
        }
    }
    if (item.id === 20041) { // accident-prone
        const newZh = 'adj. 容易出事故的、易發生意外的';
        const newEx = 'The accident-prone factory has improved its safety standards.';
        const newExZh = '這家容易發生事故的工廠已經提升了其安全標準。';
        if (item.zh !== newZh) {
            changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: newZh, source: 'toeic_data.js' });
            item.zh = newZh;
        }
        if (item.example !== newEx) {
            changedExample.push({ id: item.id, en: item.en, oldEx: item.example, newEx: newEx, oldExZh: item.exampleZh, newExZh: newExZh });
            item.example = newEx;
            item.exampleZh = newExZh;
        }
    }
    if (item.id === 21050 && item.zh !== 'adj. 有效的、生效的、起作用的；n. 有效兵力') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 有效的、生效的、起作用的；n. 有效兵力', source: 'toeic_data.js' });
        item.zh = 'adj. 有效的、生效的、起作用的；n. 有效兵力';
    }
    if (item.id === 21303 && item.zh !== 'adj. 財政的、會計的、國庫的；n. 財政官員') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 財政的、會計的、國庫的；n. 財政官員', source: 'toeic_data.js' });
        item.zh = 'adj. 財政的、會計的、國庫的；n. 財政官員';
    }
    if (item.id === 22493 && item.zh !== 'adj. 殘留的、剩餘的；n. 殘留物、餘數') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 殘留的、剩餘的；n. 殘留物、餘數', source: 'toeic_data.js' });
        item.zh = 'adj. 殘留的、剩餘的；n. 殘留物、餘數';
    }
    if (item.id === 22349 && item.zh !== 'adj. 每季的；adv. 按季度；n. 季刊') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 每季的；adv. 按季度；n. 季刊', source: 'toeic_data.js' });
        item.zh = 'adj. 每季的；adv. 按季度；n. 季刊';
    }
    if (item.id === 20494 && item.zh !== 'int. 太棒了、喝采；n. 喝采聲') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'int. 太棒了、喝采；n. 喝采聲', source: 'toeic_data.js' });
        item.zh = 'int. 太棒了、喝采；n. 喝采聲';
    }
    if (item.id === 21751 && item.zh !== 'adj. 可互換的、通用的') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 可互換的、通用的', source: 'toeic_data.js' });
        item.zh = 'adj. 可互換的、通用的';
    }
    if (item.id === 31957 && item.zh !== 'n. 指標、衡量標準、度量數據') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 指標、衡量標準、度量數據', source: 'toeic_data.js' });
        item.zh = 'n. 指標、衡量標準、度量數據';
    }
    if (item.id === 22014 && item.zh !== 'v. 深思熟慮、仔細考慮、研磨') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'v. 深思熟慮、仔細考慮、研磨', source: 'toeic_data.js' });
        item.zh = 'v. 深思熟慮、仔細考慮、研磨';
    }
    if (item.id === 22868 && item.zh !== 'n. 排印錯誤、打字錯誤') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'n. 排印錯誤、打字錯誤', source: 'toeic_data.js' });
        item.zh = 'n. 排印錯誤、打字錯誤';
    }
    if (item.id === 32001 && item.zh !== 'adj. 緊迫的、迫切的') {
        changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: 'adj. 緊迫的、迫切的', source: 'toeic_data.js' });
        item.zh = 'adj. 緊迫的、迫切的';
    }

    // High School priority sync: if word is in HS master map and clean
    if (hsMasterMap.has(key)) {
        const hsItem = hsMasterMap.get(key);
        if (item.zh !== hsItem.zh) {
            changedZh.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: hsItem.zh, source: 'toeic_data.js (sync HS)' });
            item.zh = hsItem.zh;
        }
    }
}

console.log(`Summary of Changes:`);
console.log(`Total changed Zh items: ${changedZh.length}`);
console.log(`Total changed Example items: ${changedExample.length}`);

fs.writeFileSync('scratch/changed_zh.json', JSON.stringify(changedZh, null, 2), 'utf8');
fs.writeFileSync('scratch/changed_examples.json', JSON.stringify(changedExample, null, 2), 'utf8');

// Function to write clean DB file
function writeDB(filePath, varName, data) {
    const content = `const ${varName} = ${JSON.stringify(data, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully wrote ${filePath} (${data.length} records)`);
}

writeDB('words_data.js', 'externalVocabularyDB', hsDB);
writeDB('jh_data.js', 'jhWordsDB', jhDB);
writeDB('toeic_data.js', 'toeicWordsDB', toeicDB);
