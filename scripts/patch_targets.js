const fs = require('fs');
const vm = require('vm');

// 1. Master Gold Standard Clean Definitions for all target words
const MASTER_CLEAN_ZH = {
    'accident-prone': 'adj. 容易出事故的、易發生意外的',
    'ai': 'abbr. 人工智慧；n. 人工智慧',
    'airport': 'n. 機場、飛機場、航空站',
    'bachelor': 'n. 單身漢、學士',
    'ball': 'n. 球、球狀物、舞會；v. 捏成球形',
    'bed': 'n. 床、床鋪、河床、苗圃；v. 把……固定、嵌入、安置',
    'bleak': 'adj. 荒涼的、暗淡的、無希望的',
    'bone': 'n. 骨頭、骨骼；vt. 去骨',
    'boot': 'n. 靴子、後車廂、啟動；vt. 猛踢、啟動（電腦）',
    'bottom': 'n. 底部、底、盡頭；adj. 最低的、底部的',
    'bravo': 'int. 太棒了、喝采；n. 喝采聲',
    'broad': 'adj. 寬闊的、廣泛的、寬廣的',
    'cage': 'n. 籠子、鳥籠；v. 把……關進籠中、囚禁',
    'cancer': 'n. 癌症、腫瘤',
    'chopstick': 'n. 筷子',
    'church': 'n. 教堂、教會、禮拜儀式；adj. 教會的',
    'collect': 'v. 收集、集合、收費',
    'come': 'vi. 來、來到、到達、產生',
    'confident': 'adj. 有信心的、自信的、確信的',
    'data': 'n. 資料、數據',
    'desert': 'n. 沙漠、荒原；v. 拋棄、遺棄',
    'doctor': 'n. 醫生、博士；vt. 篡改、偽造、給……下藥',
    'doll': 'n. 洋娃娃、玩偶',
    'dolphin': 'n. 海豚',
    'donkey': 'n. 驢子、傻瓜',
    'doughnut': 'n. 甜甜圈',
    'dove': 'n. 鴿、鴿子、溫和派人士',
    'effective': 'adj. 有效的、生效的、起作用的；n. 有效兵力',
    'elect': 'v. 選舉、推選；adj. 當選的',
    'elephant': 'n. 大象、象',
    'entire': 'adj. 全部的、整個的、完全的',
    'fair': 'adj. 公平的、晴朗的；n. 市集、博覽會',
    'fat': 'adj. 肥胖的、多脂肪的；n. 脂肪、烹調用油',
    'few': 'adj. 很少的、少數的；pron. 很少、少數',
    'find': 'v. 找到、發現；n. 發現物',
    'fiscal': 'adj. 財政的、會計的、國庫的；n. 財政官員',
    'fish': 'n. 魚、魚肉；vi. 釣魚、捕魚',
    'flower': 'n. 花、開花植物；vi. 開花、繁榮',
    'flute': 'n. 長笛、長笛吹奏者；v. 吹長笛',
    'fly': 'v. 飛、飛行、乘飛機；n. 蒼蠅',
    'former': 'adj. 以前的、前任的；pron. 前者',
    'frank': 'adj. 坦白的、坦率的、直言不諱的',
    'frog': 'n. 青蛙、蛙；v. 捕蛙',
    'fry': 'vt. 油煎、油炸；n. 炸薯條、炸物',
    'gas': 'n. 氣體、瓦斯、汽油；v. 加油、閒聊',
    'general': 'adj. 一般的、整體的、普遍的；n. 將軍、上將',
    'gentle': 'adj. 溫柔的、和緩的、平緩的',
    'ghost': 'n. 鬼、幽靈；v. 悄悄行進',
    'glass': 'n. 玻璃、玻璃杯、眼鏡',
    'goat': 'n. 山羊、替罪羊',
    'golf': 'n. 高爾夫球運動；v. 打高爾夫球',
    'gram': 'n. 公克、克',
    'grass': 'n. 草、草地、草坪；v. 種草',
    'gray': 'adj. 灰色的、灰白的；vi. 成為灰色；vt. 使成灰色；n. 灰色',
    'guy': 'n. 傢伙、男人、夥伴；v. 嘲弄',
    'habit': 'n. 習慣、習性、嗜好',
    'hack': 'v. 劈、砍、駭入；n. 駭客、劈砍、竅門',
    'ham': 'n. 火腿、大腿後部',
    'hanger': 'n. 衣架、掛鉤、吊架',
    'headwind': 'n. （經濟）逆風、阻力',
    'if': 'conj. 如果、假如、是否',
    'in': 'prep. 在……內、在……裡、進……裡；adv. 進入、朝裡、在裡頭；adj. 在裡面的、流行的',
    'interchangeable': 'adj. 可互換的、通用的',
    'interrupt': 'vt. 打斷、打擾、使中斷；vi. 打斷',
    'invitation': 'n. 邀請、請柬',
    'item': 'n. 項目、條款、一件商品；v. 逐條列出',
    'jacket': 'n. 夾克、短上衣、外皮',
    'legal': 'adj. 合法的、法律的、正當的',
    'let': 'vt. 讓、允許、准許、同意；n. 出租、租借',
    'letter': 'n. 信、字母',
    'lettuce': 'n. 萵苣、生菜',
    'lip': 'n. 嘴唇、邊緣',
    'liquid': 'n. 液體；adj. 液態的、流動的',
    'loaf': 'n. 一條（麵包）；v. 遊蕩、閒逛',
    'metrics': 'n. 指標、衡量標準、度量數據',
    'miss': 'v. 想念、錯過、漏掉；n. 小姐',
    'mull': 'v. 深思熟慮、仔細考慮、研磨',
    'necklace': 'n. 項鍊',
    'none': 'pron. 沒有一個、毫無；adv. 決不',
    'november': 'n. 十一月',
    'or': 'conj. 或者、還是、也不',
    'organ': 'n. 器官、風琴、機構',
    'ox': 'n. 公牛',
    'paste': 'n. 麵糊、糊狀物、肉醬；vt. 黏貼、貼上',
    'peach': 'n. 桃子、桃樹、桃紅色；adj. 桃紅色的',
    'peculiar': 'adj. 奇怪的、特殊的、獨特的',
    'permit': 'v. 允許、准許、使……可能；n. 許可證、執照',
    'pigeon': 'n. 鴿子',
    'pizza': 'n. 披薩、比薩餅',
    'plate': 'n. 盤子、金屬板、車牌；vt. 電鍍',
    'pork': 'n. 豬肉',
    'pressing': 'adj. 緊迫的、迫切的',
    'private': 'adj. 私人的、私密的、私立的；n. 二等兵',
    'pump': 'n. 泵、抽水機；vt. 用泵輸送、打氣、抽水',
    'quarter': 'n. 四分之一、一刻鐘、季度、25美分硬幣；vt. 提供住宿、四等分',
    'quarterly': 'adj. 每季的；adv. 按季度；n. 季刊',
    'recover': 'v. 恢復、找回、康復、尋回',
    'rent': 'n. 租金；vt. 租用、出租',
    'residual': 'adj. 殘留的、剩餘的；n. 殘留物、餘數',
    'rose': 'n. 玫瑰、玫瑰花、粉紅色；adj. 玫瑰色的',
    'royal': 'adj. 皇家的、王室的、盛大的；n. 王室成員',
    'scarf': 'n. 圍巾、披巾、領巾',
    'self': 'n. 自身、自己、自我；pron. 自己、本人',
    'shark': 'n. 鯊魚、投機者',
    'shelf': 'n. 架子、擱板、陸架',
    'slim': 'adj. 苗條的、纖細的、微小的；v. 減肥、縮減',
    'snake': 'n. 蛇；vi. 蛇行、蜿蜒前進',
    'spiral': 'n. 螺旋形、螺旋式上升；v. 螺旋式上升、急劇惡化；adj. 螺旋形的',
    'stamp': 'n. 郵票、印章、戳記；vt. 蓋印、蓋章、重踏、跺腳',
    'surf': 'v. 上網、衝浪；n. 浪花、海浪',
    'teapot': 'n. 茶壺',
    'tell': 'v. 告訴、講述、告知、說',
    'tent': 'n. 帳篷；v. 住帳篷、搭帳篷',
    'thumb': 'n. 拇指；v. 用拇指翻閱、按拇指',
    'time': 'n. 時間、次數、倍數；vt. 計時',
    'tool': 'n. 工具、器具、手段；v. 用工具加工',
    'trick': 'n. 花招、詭計、把戲、竅門；vt. 欺騙、哄騙',
    'turkey': 'n. 火雞、火雞肉',
    'turtle': 'n. 烏龜、海龜',
    'typo': 'n. 排印錯誤、打字錯誤',
    'upper': 'adj. 較高的、上面的、上層的；n. 鞋幫、鞋面',
    'vegetable': 'n. 蔬菜；adj. 植物的、蔬菜的',
    'weather': 'n. 天氣、氣候；vt. 平安度過、經受住、風化',
    'wo': 'n. 困難、悲傷、痛苦、災禍',
    'woe': 'n. 困難、悲傷、痛苦、災禍',
    'worm': 'n. 蠕蟲、幼蟲；vt. 驅蟲、蠕動行進',
    'wound': 'n. 創傷、傷口；vt. 傷害、使受傷',
    'yard': 'n. 院子、庭院、碼（長度單位）'
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

const changedZhList = [];
const changedExList = [];

// 1. Patch High School (Authority Master)
for (const item of hsDB) {
    const key = (item.en || '').toLowerCase().trim();
    if (MASTER_CLEAN_ZH[key] && item.zh !== MASTER_CLEAN_ZH[key]) {
        changedZhList.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: MASTER_CLEAN_ZH[key], file: 'words_data.js' });
        item.zh = MASTER_CLEAN_ZH[key];
    }
}

// Build map of clean High School items
const hsMap = new Map();
for (const item of hsDB) {
    const key = (item.en || '').toLowerCase().trim();
    if (!hsMap.has(key)) hsMap.set(key, item);
}

// 2. Patch Junior High (Align with High School where shared, otherwise use Master)
for (const item of jhDB) {
    const key = (item.en || '').toLowerCase().trim();

    // Specific JH sentence bug fixes
    if (item.id === 30297 && item.exampleZh !== '他會使用筷子。') {
        changedExList.push({ id: item.id, en: item.en, example: item.example, exampleZh: '他會使用筷子。', file: 'jh_data.js' });
        item.exampleZh = '他會使用筷子。';
    }
    if (item.id === 30832 && (item.example !== 'I will be there if possible.' || item.exampleZh !== '如果可能的話我會去那兒。')) {
        changedExList.push({ id: item.id, en: item.en, example: 'I will be there if possible.', exampleZh: '如果可能的話我會去那兒。', file: 'jh_data.js' });
        item.example = 'I will be there if possible.';
        item.exampleZh = '如果可能的話我會去那兒。';
    }
    if (item.id === 30864 && item.en === 'Interrupt') {
        item.en = 'interrupt';
    }
    if (item.id === 31182 && (item.example !== 'Seven sheep and eight oxen.' || item.exampleZh !== '七隻羊和八頭公牛。')) {
        changedExList.push({ id: item.id, en: item.en, example: 'Seven sheep and eight oxen.', exampleZh: '七隻羊和八頭公牛。', file: 'jh_data.js' });
        item.example = 'Seven sheep and eight oxen.';
        item.exampleZh = '七隻羊和八頭公牛。';
    }

    // Only update if word is in our target report set!
    if (MASTER_CLEAN_ZH[key]) {
        const targetZh = hsMap.has(key) ? hsMap.get(key).zh : MASTER_CLEAN_ZH[key];
        if (item.zh !== targetZh) {
            changedZhList.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: targetZh, file: 'jh_data.js' });
            item.zh = targetZh;
        }
    }
}

// 3. Patch TOEIC (Align with High School where shared, otherwise use Master)
for (const item of toeicDB) {
    const key = (item.en || '').toLowerCase().trim();

    // Specific TOEIC entry fixes
    if (item.id === 23012) { // wo -> woe
        item.en = 'woe';
        item.kk = '[wo]';
        item.uk = '/wəʊ/';
        const newZh = 'n. 困難、悲傷、痛苦、災禍';
        const newEx = 'The company faced severe economic woes during the crisis.';
        const newExZh = '該公司在危機期間面臨嚴重的經濟困境。';
        if (item.zh !== newZh) {
            changedZhList.push({ id: item.id, en: 'woe', oldZh: item.zh, newZh: newZh, file: 'toeic_data.js' });
            item.zh = newZh;
        }
        if (item.example !== newEx || item.exampleZh !== newExZh) {
            changedExList.push({ id: item.id, en: 'woe', example: newEx, exampleZh: newExZh, file: 'toeic_data.js' });
            item.example = newEx;
            item.exampleZh = newExZh;
        }
    } else if (item.id === 20041) { // accident-prone
        const newZh = 'adj. 容易出事故的、易發生意外的';
        const newEx = 'The accident-prone factory has improved its safety standards.';
        const newExZh = '這家容易發生事故的工廠已經提升了其安全標準。';
        if (item.zh !== newZh) {
            changedZhList.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: newZh, file: 'toeic_data.js' });
            item.zh = newZh;
        }
        if (item.example !== newEx || item.exampleZh !== newExZh) {
            changedExList.push({ id: item.id, en: item.en, example: newEx, exampleZh: newExZh, file: 'toeic_data.js' });
            item.example = newEx;
            item.exampleZh = newExZh;
        }
    } else if (MASTER_CLEAN_ZH[key]) {
        const targetZh = hsMap.has(key) ? hsMap.get(key).zh : MASTER_CLEAN_ZH[key];
        if (item.zh !== targetZh) {
            changedZhList.push({ id: item.id, en: item.en, oldZh: item.zh, newZh: targetZh, file: 'toeic_data.js' });
            item.zh = targetZh;
        }
    }
}

console.log(`Patch Result:`);
console.log(`- Changed Zh entries: ${changedZhList.length}`);
console.log(`- Changed Example entries: ${changedExList.length}`);

// Write files
function writeDB(filePath, varName, data) {
    const content = `const ${varName} = ${JSON.stringify(data, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrote ${filePath} successfully.`);
}

writeDB('words_data.js', 'externalVocabularyDB', hsDB);
writeDB('jh_data.js', 'jhWordsDB', jhDB);
writeDB('toeic_data.js', 'toeicWordsDB', toeicDB);

fs.writeFileSync('scratch/audio_zh_to_generate.json', JSON.stringify(changedZhList, null, 2), 'utf8');
fs.writeFileSync('scratch/audio_ex_to_generate.json', JSON.stringify(changedExList, null, 2), 'utf8');
console.log('Saved audio lists for generation.');
