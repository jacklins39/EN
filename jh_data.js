// 國中基礎 2000 單字資料庫
const jhWordsDB = [
    {
        "id": 30001,
        "en": "able",
        "kk": "",
        "zh": "adj. 有能力的",
        "unit": 17,
        "example": "She was barely able to stand.",
        "exampleZh": "她幾乎無法站立。"
    },
    {
        "id": 30002,
        "en": "about",
        "kk": "",
        "zh": "prep. 有關",
        "unit": 17,
        "example": "I'm definite about this.",
        "exampleZh": "我對此很確定。"
    },
    {
        "id": 30003,
        "en": "above",
        "kk": "",
        "zh": "adv. 在上方",
        "unit": 17,
        "example": "The cliffs towered above them.",
        "exampleZh": "懸崖高聳在他們上方。"
    },
    {
        "id": 30004,
        "en": "abroad",
        "kk": "",
        "zh": "adv. 在國外",
        "unit": 17,
        "example": "She worked abroad for a year.",
        "exampleZh": "她在國外工作了一年。"
    },
    {
        "id": 30005,
        "en": "absent",
        "kk": "",
        "zh": "adj. 缺席的",
        "unit": 17,
        "example": "She was absent for nine consecutive days.",
        "exampleZh": "她已經連續缺席九天了。"
    },
    {
        "id": 30006,
        "en": "accept",
        "kk": "/əkˈsept/",
        "zh": "v. 接受",
        "unit": 17,
        "example": "You have to accept the inevitable.",
        "exampleZh": "你必須接受不可避免的事情。"
    },
    {
        "id": 30007,
        "en": "accident",
        "kk": "",
        "zh": "n. 意外",
        "unit": 17,
        "example": "It was an unfortunate accident.",
        "exampleZh": ""
    },
    {
        "id": 30008,
        "en": "across",
        "kk": "",
        "zh": "prep. 在...對面",
        "unit": 17,
        "example": "Clouds drifted across the sky.",
        "exampleZh": "雲彩飄過天際。"
    },
    {
        "id": 30009,
        "en": "act",
        "kk": "",
        "zh": "n. 行為",
        "unit": 17,
        "example": "Can you act as interpreter?",
        "exampleZh": "你能擔任翻譯嗎？"
    },
    {
        "id": 30010,
        "en": "action",
        "kk": "",
        "zh": "n. 活動",
        "unit": 17,
        "example": "Take whatever action is needed.",
        "exampleZh": "採取任何需要的行動。"
    },
    {
        "id": 30011,
        "en": "active",
        "kk": "",
        "zh": "adj. 積極的",
        "unit": 17,
        "example": "They were both politically active.",
        "exampleZh": "他們都是政治活躍分子。"
    },
    {
        "id": 30012,
        "en": "activity",
        "kk": "",
        "zh": "n. 活動",
        "unit": 17,
        "example": "Parents encourage every activity imaginable.",
        "exampleZh": ""
    },
    {
        "id": 30013,
        "en": "actor",
        "kk": "",
        "zh": "n. 男演員",
        "unit": 17,
        "example": "Grodin is a fine comic actor.",
        "exampleZh": "格羅丁是一位優秀的喜劇演員。"
    },
    {
        "id": 30014,
        "en": "actress",
        "kk": "",
        "zh": "n. 女演員",
        "unit": 17,
        "example": "She fancies herself (as) a serious actress.",
        "exampleZh": "她幻想自己是一位嚴肅的演員。"
    },
    {
        "id": 30015,
        "en": "actually",
        "kk": "",
        "zh": "adv. 確實",
        "unit": 17,
        "example": "It's not actually raining now.",
        "exampleZh": ""
    },
    {
        "id": 30016,
        "en": "add",
        "kk": "",
        "zh": "v. 增加",
        "unit": 17,
        "example": "Add up all the money I owe you.",
        "exampleZh": "把我欠你的錢全部加起來。"
    },
    {
        "id": 30017,
        "en": "address",
        "kk": "",
        "zh": "n. 地址",
        "unit": 17,
        "example": "They had no permanent address.",
        "exampleZh": "他們沒有永久地址。"
    },
    {
        "id": 30018,
        "en": "admire",
        "kk": "",
        "zh": "v. 欽佩",
        "unit": 17,
        "example": "I really admire your enthusiasm.",
        "exampleZh": ""
    },
    {
        "id": 30019,
        "en": "adult",
        "kk": "/ˈædʌlt/",
        "zh": "n. 成人",
        "unit": 17,
        "example": "Each ticket admits one adult.",
        "exampleZh": "每張門票可容納一名成人。"
    },
    {
        "id": 30020,
        "en": "advertisement",
        "kk": "",
        "zh": "n. 廣告",
        "unit": 17,
        "example": "The advertisement is for a men's fragrance.",
        "exampleZh": ""
    },
    {
        "id": 30021,
        "en": "advice",
        "kk": "/ədˈvaɪs/",
        "zh": "n. 勸告",
        "unit": 17,
        "example": "He offered some useful advice.",
        "exampleZh": ""
    },
    {
        "id": 30022,
        "en": "advise",
        "kk": "",
        "zh": "v. 勸告",
        "unit": 17,
        "example": "I'd advise you against doing that.",
        "exampleZh": ""
    },
    {
        "id": 30023,
        "en": "affect",
        "kk": "/əˈfekt/",
        "zh": "v. 影響",
        "unit": 17,
        "example": "Does television affect children's behaviour?",
        "exampleZh": ""
    },
    {
        "id": 30024,
        "en": "afraid",
        "kk": "/əˈfreɪd/",
        "zh": "adj. 害怕的",
        "unit": 17,
        "example": "I'm afraid you guessed wrong.",
        "exampleZh": "恐怕你猜錯了。"
    },
    {
        "id": 30025,
        "en": "after",
        "kk": "",
        "zh": "conj. 在...之後",
        "unit": 17,
        "example": "They arrived shortly after 5.",
        "exampleZh": "5點多他們就到了。"
    },
    {
        "id": 30026,
        "en": "afternoon",
        "kk": "",
        "zh": "n. 下午",
        "unit": 17,
        "example": "He's arriving in the afternoon.",
        "exampleZh": "他下午到。"
    },
    {
        "id": 30027,
        "en": "again",
        "kk": "",
        "zh": "adv. 再度",
        "unit": 17,
        "example": "She smiled again, prettily.",
        "exampleZh": "她又笑了，笑得很漂亮。"
    },
    {
        "id": 30028,
        "en": "against",
        "kk": "",
        "zh": "prep. 靠著",
        "unit": 17,
        "example": "Rain drove against the window.",
        "exampleZh": "雨打在窗戶上。"
    },
    {
        "id": 30029,
        "en": "age",
        "kk": "",
        "zh": "n. 年齡",
        "unit": 17,
        "example": "She's long past retirement age.",
        "exampleZh": "她早已過了退休年齡。"
    },
    {
        "id": 30030,
        "en": "ago",
        "kk": "",
        "zh": "adv. ...之前",
        "unit": 17,
        "example": "She was hired three years ago.",
        "exampleZh": "她三年前被錄用。"
    },
    {
        "id": 30031,
        "en": "agree",
        "kk": "/əˈɡriː/",
        "zh": "v. 同意",
        "unit": 17,
        "example": "I don't agree with spanking.",
        "exampleZh": "我不同意打屁股。"
    },
    {
        "id": 30032,
        "en": "ahead",
        "kk": "/əˈhed/",
        "zh": "adv. 向前",
        "unit": 17,
        "example": "Already, she is thinking ahead.",
        "exampleZh": "她已經在提前思考了。"
    },
    {
        "id": 30033,
        "en": "aim",
        "kk": "/eɪm/",
        "zh": "n. 目標",
        "unit": 17,
        "example": "His aim was to become president.",
        "exampleZh": "他的目標是成為總統。"
    },
    {
        "id": 30034,
        "en": "air",
        "kk": "/eər/",
        "zh": "n. 空氣",
        "unit": 17,
        "example": "His hands clawed the air.",
        "exampleZh": "他的雙手在空中抓抓。"
    },
    {
        "id": 30035,
        "en": "airplane",
        "kk": "",
        "zh": "n. 飛機",
        "unit": 17,
        "example": "The airplane had dual controls.",
        "exampleZh": "這架飛機有雙重控制。"
    },
    {
        "id": 30036,
        "en": "airport",
        "kk": "",
        "zh": "n. 機場",
        "unit": 17,
        "example": "He was fogbound at JFK airport.",
        "exampleZh": "他在甘迺迪機場時渾身大霧。"
    },
    {
        "id": 30037,
        "en": "alarm",
        "kk": "/əˈlɑːrm/",
        "zh": "n. 警報器",
        "unit": 17,
        "example": "An alarm bell went off.",
        "exampleZh": "警鐘響起。"
    },
    {
        "id": 30038,
        "en": "album",
        "kk": "/ˈælbəm/",
        "zh": "n. 相簿",
        "unit": 17,
        "example": "Their new album is dynamite.",
        "exampleZh": "他們的新專輯是炸藥。"
    },
    {
        "id": 30039,
        "en": "alike",
        "kk": "/əˈlaɪk/",
        "zh": "adv. 相同地",
        "unit": 17,
        "example": "My sister and I do not look alike.",
        "exampleZh": "我和我姐姐長得不太像。"
    },
    {
        "id": 30040,
        "en": "alive",
        "kk": "/əˈlaɪv/",
        "zh": "adj. 活的",
        "unit": 17,
        "example": "He's still alive, isn't he?",
        "exampleZh": "他還活著，不是嗎？"
    },
    {
        "id": 30041,
        "en": "all",
        "kk": "",
        "zh": "adj. 全部的",
        "unit": 17,
        "example": "They're all good players, but she's the best of all.",
        "exampleZh": "他們都是優秀的球員，但她是其中最好的。"
    },
    {
        "id": 30042,
        "en": "allow",
        "kk": "/əˈlaʊ/",
        "zh": "v. 允許",
        "unit": 17,
        "example": "We must allow for human error.",
        "exampleZh": "我們必須允許人為錯誤。"
    },
    {
        "id": 30043,
        "en": "almost",
        "kk": "/ˈɔːlmoʊst/",
        "zh": "adv. 幾乎",
        "unit": 17,
        "example": "Almost overnight I was cured.",
        "exampleZh": "幾乎一夜之間我就痊癒了。"
    },
    {
        "id": 30044,
        "en": "alone",
        "kk": "/əˈloʊn/",
        "zh": "adv. 獨自地",
        "unit": 17,
        "example": "Exercising alone can be boring.",
        "exampleZh": "獨自運動可能會很無聊。"
    },
    {
        "id": 30045,
        "en": "along",
        "kk": "/əˈlɔːŋ/",
        "zh": "prep. 沿著",
        "unit": 17,
        "example": "Things are going along nicely.",
        "exampleZh": "事情進展順利。"
    },
    {
        "id": 30046,
        "en": "aloud",
        "kk": "",
        "zh": "adv. 大聲地",
        "unit": 17,
        "example": "She cried aloud in protest.",
        "exampleZh": "她大聲哭泣以示抗議。"
    },
    {
        "id": 30047,
        "en": "already",
        "kk": "/ɔːlˈredi/",
        "zh": "adv. 已經",
        "unit": 17,
        "example": "Eight o'clock had already chimed.",
        "exampleZh": "八點鐘的鐘聲已經敲響。"
    },
    {
        "id": 30048,
        "en": "also",
        "kk": "/ˈɔːlsoʊ/",
        "zh": "adv. 也",
        "unit": 17,
        "example": "The nation also exports beef.",
        "exampleZh": "該國也出口牛肉。"
    },
    {
        "id": 30049,
        "en": "altogether",
        "kk": "/ˌɔːltəˈɡeðər/",
        "zh": "adv. 總共",
        "unit": 17,
        "example": "I don't altogether agree with you.",
        "exampleZh": "我不完全同意你的觀點。"
    },
    {
        "id": 30050,
        "en": "always",
        "kk": "/ˈɔːlweɪz/",
        "zh": "adv. 總是",
        "unit": 17,
        "example": "She always looks immaculate.",
        "exampleZh": "她看起來總是完美無缺。"
    },
    {
        "id": 30051,
        "en": "ambulance",
        "kk": "/ˈæmbjələns/",
        "zh": "n. 救護車",
        "unit": 17,
        "example": "When the ambulance had gone, the crowd dissolved.",
        "exampleZh": ""
    },
    {
        "id": 30052,
        "en": "among",
        "kk": "/əˈmʌŋ/",
        "zh": "prep. 在...之間",
        "unit": 17,
        "example": "Bees buzzed lazily among the flowers.",
        "exampleZh": "蜜蜂在花叢中慵懶地嗡嗡作響。"
    },
    {
        "id": 30053,
        "en": "ancient",
        "kk": "/ˈeɪnʃənt/",
        "zh": "adj. 古代的",
        "unit": 17,
        "example": "Lettuce was grown by the ancient Romans.",
        "exampleZh": "生菜是古羅馬人種植的。"
    },
    {
        "id": 30054,
        "en": "angel",
        "kk": "",
        "zh": "n. 天使",
        "unit": 17,
        "example": "The angel appeared unto him in a dream.",
        "exampleZh": ""
    },
    {
        "id": 30055,
        "en": "anger",
        "kk": "/ˈæŋɡər/",
        "zh": "n. 憤怒",
        "unit": 17,
        "example": "His words ignited their anger.",
        "exampleZh": "他的話激起了他們的憤怒。"
    },
    {
        "id": 30056,
        "en": "angry",
        "kk": "/ˈæŋɡri/",
        "zh": "adj. 生氣的",
        "unit": 17,
        "example": "Roberta felt frustrated and angry.",
        "exampleZh": "羅伯塔感到沮喪和憤怒。"
    },
    {
        "id": 30057,
        "en": "ankle",
        "kk": "",
        "zh": "n. 腳踝",
        "unit": 17,
        "example": "John twisted his ankle badly.",
        "exampleZh": "約翰嚴重扭傷了腳踝。"
    },
    {
        "id": 30058,
        "en": "animal",
        "kk": "/ˈænɪml/",
        "zh": "n. 動物",
        "unit": 17,
        "example": "The animal retracted into its shell.",
        "exampleZh": "動物縮回殼裡。"
    },
    {
        "id": 30059,
        "en": "another",
        "kk": "/əˈnʌðər/",
        "zh": "adj. 另外的",
        "unit": 17,
        "example": "She was expecting another baby.",
        "exampleZh": "她正懷著另一個孩子。"
    },
    {
        "id": 30060,
        "en": "answer",
        "kk": "/ˈænsər/",
        "zh": "n. 答案",
        "unit": 17,
        "example": "Your answer is exactly right.",
        "exampleZh": "你的答案是完全正確的。"
    },
    {
        "id": 30061,
        "en": "ant",
        "kk": "",
        "zh": "n. 螞蟻",
        "unit": 17,
        "example": "The ant is carrying a leaf.",
        "exampleZh": "螞蟻拿著一片葉子。"
    },
    {
        "id": 30062,
        "en": "any",
        "kk": "/ˈeni/",
        "zh": "adj. 任何的",
        "unit": 17,
        "example": "I'd welcome any suggestions.",
        "exampleZh": "我歡迎任何建議。"
    },
    {
        "id": 30063,
        "en": "anyone",
        "kk": "/ˈeniwʌn/",
        "zh": "pron. 任何人",
        "unit": 17,
        "example": "Anyone can appreciate our music.",
        "exampleZh": ""
    },
    {
        "id": 30064,
        "en": "anything",
        "kk": "/ˈeniθɪŋ/",
        "zh": "n. 任何事物",
        "unit": 17,
        "example": "They'll eat almost anything.",
        "exampleZh": ""
    },
    {
        "id": 30065,
        "en": "anywhere",
        "kk": "/ˈeniwer/",
        "zh": "adv. 任何地方",
        "unit": 17,
        "example": "Did you go anywhere interesting?",
        "exampleZh": "有沒有去什麼有趣的地方？"
    },
    {
        "id": 30066,
        "en": "apartment",
        "kk": "/əˈpɑːrtmənt/",
        "zh": "n. 公寓",
        "unit": 17,
        "example": "We rented an unfurnished apartment.",
        "exampleZh": "我們租了一間沒有家具的公寓。"
    },
    {
        "id": 30067,
        "en": "apologize",
        "kk": "/əˈpɑːlədʒaɪz/",
        "zh": "v. 道歉",
        "unit": 17,
        "example": "I'm damned if I'll apologize!",
        "exampleZh": ""
    },
    {
        "id": 30068,
        "en": "appear",
        "kk": "/əˈpɪr/",
        "zh": "v. 出現",
        "unit": 17,
        "example": "She will appear in court tomorrow.",
        "exampleZh": "她將於明天出庭。"
    },
    {
        "id": 30069,
        "en": "apple",
        "kk": "/ˈæpl/",
        "zh": "n. 蘋果",
        "unit": 17,
        "example": "She crunched her apple noisily.",
        "exampleZh": "她大聲地嚼著蘋果。"
    },
    {
        "id": 30070,
        "en": "appreciate",
        "kk": "/əˈpriːʃieɪt/",
        "zh": "v. 欣賞",
        "unit": 17,
        "example": "Anyone can appreciate our music.",
        "exampleZh": ""
    },
    {
        "id": 30071,
        "en": "April",
        "kk": "",
        "zh": "n. 四月",
        "unit": 17,
        "example": "We went to Japan last April.",
        "exampleZh": "去年四月我們去了日本。"
    },
    {
        "id": 30072,
        "en": "area",
        "kk": "/ˈeriə/",
        "zh": "n. 地區",
        "unit": 17,
        "example": "The area is largely uninhabited.",
        "exampleZh": "該地區大部分無人居住。"
    },
    {
        "id": 30073,
        "en": "argue",
        "kk": "/ˈɑːrɡjuː/",
        "zh": "v. 爭論",
        "unit": 17,
        "example": "I'm not disposed to argue.",
        "exampleZh": "我不打算爭論。"
    },
    {
        "id": 30074,
        "en": "arm",
        "kk": "/ɑːrm/",
        "zh": "n. 手臂",
        "unit": 17,
        "example": "He squeezed her arm reassuringly.",
        "exampleZh": "他安慰地握住她的手臂。"
    },
    {
        "id": 30075,
        "en": "armchair",
        "kk": "",
        "zh": "n. 扶手椅",
        "unit": 17,
        "example": "I sank down into a voluminous armchair.",
        "exampleZh": "我坐進一張寬大的扶手椅。"
    },
    {
        "id": 30076,
        "en": "army",
        "kk": "/ˈɑːrmi/",
        "zh": "n. 軍隊",
        "unit": 17,
        "example": "They were old army comrades.",
        "exampleZh": "他們是老軍隊戰友。"
    },
    {
        "id": 30077,
        "en": "around",
        "kk": "/əˈraʊnd/",
        "zh": "adv. 在附近",
        "unit": 17,
        "example": "He arrived around five o'clock.",
        "exampleZh": "他大約五點左右到達。"
    },
    {
        "id": 30078,
        "en": "arrange",
        "kk": "/əˈreɪndʒ/",
        "zh": "v. 安排",
        "unit": 17,
        "example": "Can I arrange an appointment for Monday?",
        "exampleZh": "我可以安排週一的預約嗎？"
    },
    {
        "id": 30079,
        "en": "arrive",
        "kk": "/əˈraɪv/",
        "zh": "v. 到達",
        "unit": 17,
        "example": "We should arrive before dark.",
        "exampleZh": "我們應該在天黑之前到達。"
    },
    {
        "id": 30080,
        "en": "art",
        "kk": "/ɑːrt/",
        "zh": "n. 藝術",
        "unit": 17,
        "example": "Can we call television art?",
        "exampleZh": "我們可以稱之為電視藝術嗎？"
    },
    {
        "id": 30081,
        "en": "artist",
        "kk": "/ˈɑːrtɪst/",
        "zh": "n. 藝術家",
        "unit": 17,
        "example": "He is little known as an artist.",
        "exampleZh": "作為一名藝術家，他鮮為人知。"
    },
    {
        "id": 30082,
        "en": "as",
        "kk": "/æz/",
        "zh": "prep. 像,如同",
        "unit": 17,
        "example": "You're as tall as your father.",
        "exampleZh": "你和你父親一樣高。"
    },
    {
        "id": 30083,
        "en": "ask",
        "kk": "/æsk/",
        "zh": "v. 詢問",
        "unit": 17,
        "example": "Did you ask the price?",
        "exampleZh": "你問過價格嗎？"
    },
    {
        "id": 30084,
        "en": "asleep",
        "kk": "/əˈsliːp/",
        "zh": "adj. 睡著的",
        "unit": 17,
        "example": "He had fallen asleep on the sofa.",
        "exampleZh": "他已經在沙發上睡著了。"
    },
    {
        "id": 30085,
        "en": "assistant",
        "kk": "/əˈsɪstənt/",
        "zh": "n. 助手",
        "unit": 17,
        "example": "The assistant pursed her lips.",
        "exampleZh": "助理抿了抿唇。"
    },
    {
        "id": 30086,
        "en": "assume",
        "kk": "/əˈsuːm/",
        "zh": "v. 假設",
        "unit": 17,
        "example": "Assume A knows B is guilty.",
        "exampleZh": ""
    },
    {
        "id": 30087,
        "en": "attack",
        "kk": "/əˈtæk/",
        "zh": "n. 攻擊",
        "unit": 17,
        "example": "The attack on Charles was unjust.",
        "exampleZh": "對查爾斯的攻擊是不公正的。"
    },
    {
        "id": 30088,
        "en": "attention",
        "kk": "/əˈtenʃn/",
        "zh": "n. 注意力",
        "unit": 17,
        "example": "My shoes caught his attention.",
        "exampleZh": "我的鞋子引起了他的注意。"
    },
    {
        "id": 30089,
        "en": "August",
        "kk": "",
        "zh": "n. 八月",
        "unit": 17,
        "example": "Grouse shooting begins in August.",
        "exampleZh": "松雞射擊從八月開始。"
    },
    {
        "id": 30090,
        "en": "aunt",
        "kk": "",
        "zh": "n. 姑媽",
        "unit": 17,
        "example": "Aunt Emilie darned old socks.",
        "exampleZh": "艾蜜莉阿姨補舊襪子。"
    },
    {
        "id": 30091,
        "en": "autumn",
        "kk": "/ˈɔːtəm/",
        "zh": "n. 秋天",
        "unit": 17,
        "example": "Autumn is my favourite season.",
        "exampleZh": "秋天是我最喜歡的季節。"
    },
    {
        "id": 30092,
        "en": "available",
        "kk": "/əˈveɪləbl/",
        "zh": "adj. 可獲得的",
        "unit": 17,
        "example": "Ample free parking is available.",
        "exampleZh": ""
    },
    {
        "id": 30093,
        "en": "avoid",
        "kk": "/əˈvɔɪd/",
        "zh": "v. 避免",
        "unit": 17,
        "example": "We have tried to avoid any moralizing.",
        "exampleZh": "我們盡力避免任何說教。"
    },
    {
        "id": 30094,
        "en": "away",
        "kk": "/əˈweɪ/",
        "zh": "adv. 不在",
        "unit": 17,
        "example": "She walked quickly away.",
        "exampleZh": "她快步走開。"
    },
    {
        "id": 30095,
        "en": "baby",
        "kk": "",
        "zh": "n. 嬰兒",
        "unit": 17,
        "example": "She dreamed about her baby.",
        "exampleZh": "她夢見了她的孩子。"
    },
    {
        "id": 30096,
        "en": "baby",
        "kk": "",
        "zh": "sitter. n. 保母",
        "unit": 17,
        "example": "She dreamed about her baby.",
        "exampleZh": "她夢見了她的孩子。"
    },
    {
        "id": 30097,
        "en": "back",
        "kk": "/bæk/",
        "zh": "n. 背部",
        "unit": 17,
        "example": "Let's head back home.",
        "exampleZh": "我們回家吧。"
    },
    {
        "id": 30098,
        "en": "backward(s)",
        "kk": "",
        "zh": "adv. 向後地",
        "unit": 17,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 30099,
        "en": "bad",
        "kk": "/bæd/",
        "zh": "adj. 壞的",
        "unit": 17,
        "example": "Divorce is bad for children.",
        "exampleZh": "離婚對孩子不好。"
    },
    {
        "id": 30100,
        "en": "badminton",
        "kk": "",
        "zh": "n. 羽毛球",
        "unit": 17,
        "example": "While playing badminton, I ruptured my Achilles tendon.",
        "exampleZh": ""
    },
    {
        "id": 30101,
        "en": "bag",
        "kk": "/bæɡ/",
        "zh": "n. 袋子",
        "unit": 17,
        "example": "Someone's left their bag behind.",
        "exampleZh": "有人把包包落在後面了。"
    },
    {
        "id": 30102,
        "en": "bake",
        "kk": "/beɪk/",
        "zh": "v. 烘烤",
        "unit": 17,
        "example": "Bake until the crust is golden.",
        "exampleZh": "烘烤至外皮呈金黃色。"
    },
    {
        "id": 30103,
        "en": "bakery",
        "kk": "",
        "zh": "n. 麵包店",
        "unit": 17,
        "example": "Start her own bakery.",
        "exampleZh": "開辦自己的麵包店。"
    },
    {
        "id": 30104,
        "en": "balcony",
        "kk": "",
        "zh": "n. 陽臺",
        "unit": 17,
        "example": "She drew me onto the balcony.",
        "exampleZh": "她把我拉到陽台。"
    },
    {
        "id": 30105,
        "en": "ball",
        "kk": "/bɔːl/",
        "zh": "n. 球",
        "unit": 17,
        "example": "The ball rolled into the net.",
        "exampleZh": "球滾入網內。"
    },
    {
        "id": 30106,
        "en": "balloon",
        "kk": "",
        "zh": "n. 氣球",
        "unit": 17,
        "example": "A balloon suddenly went bang.",
        "exampleZh": "一個氣球突然爆炸了。"
    },
    {
        "id": 30107,
        "en": "banana",
        "kk": "",
        "zh": "n. 香蕉",
        "unit": 17,
        "example": "He slipped on a banana skin.",
        "exampleZh": "他踩到香蕉皮滑倒了。"
    },
    {
        "id": 30108,
        "en": "band",
        "kk": "/bænd/",
        "zh": "n. 樂團",
        "unit": 17,
        "example": "The singer re-formed his band.",
        "exampleZh": "這位歌手重組了他的樂隊。"
    },
    {
        "id": 30109,
        "en": "bank",
        "kk": "/bæŋk/",
        "zh": "n. 銀行",
        "unit": 17,
        "example": "The bank wired her the money.",
        "exampleZh": "銀行匯了錢給她。"
    },
    {
        "id": 30110,
        "en": "barbecue",
        "kk": "",
        "zh": "v. 火烤",
        "unit": 17,
        "example": "Let's have a barbecue!",
        "exampleZh": "我們去吃燒烤吧！"
    },
    {
        "id": 30111,
        "en": "barber",
        "kk": "",
        "zh": "n. 理髮師",
        "unit": 17,
        "example": "I gave the barber a tip.",
        "exampleZh": "我給了理髮師小費。"
    },
    {
        "id": 30112,
        "en": "bark",
        "kk": "/bɑːrk/",
        "zh": "v. 吠叫",
        "unit": 17,
        "example": "Deer had stripped the tree of its bark.",
        "exampleZh": "鹿把樹的樹皮剝掉了。"
    },
    {
        "id": 30113,
        "en": "base",
        "kk": "/beɪs/",
        "zh": "n. 基礎",
        "unit": 17,
        "example": "He acted from base motives.",
        "exampleZh": "他的行為動機卑鄙。"
    },
    {
        "id": 30114,
        "en": "baseball",
        "kk": "",
        "zh": "n. 棒球",
        "unit": 17,
        "example": "He often wore a baseball cap.",
        "exampleZh": "他經常戴著棒球帽。"
    },
    {
        "id": 30115,
        "en": "basement",
        "kk": "",
        "zh": "n. 地下室",
        "unit": 17,
        "example": "Kitchen goods are sold in the basement.",
        "exampleZh": "廚房用品在地下室出售。"
    },
    {
        "id": 30116,
        "en": "basic",
        "kk": "/ˈbeɪsɪk/",
        "zh": "adj. 基礎的",
        "unit": 17,
        "example": "Basic foodstuffs were in short supply.",
        "exampleZh": "基本食品供應短缺。"
    },
    {
        "id": 30117,
        "en": "basket",
        "kk": "",
        "zh": "n. 籃子",
        "unit": 17,
        "example": "There was a complimentary basket of fruit in our room.",
        "exampleZh": "我們的房間裡有一籃免費水果。"
    },
    {
        "id": 30118,
        "en": "basketball",
        "kk": "/ˈbæskɪtbɔːl/",
        "zh": "n. 籃球",
        "unit": 17,
        "example": "He coaches basketball and soccer.",
        "exampleZh": "他擔任籃球和足球教練。"
    },
    {
        "id": 30119,
        "en": "bat",
        "kk": "/bæt/",
        "zh": "n. 蝙蝠",
        "unit": 17,
        "example": "I bolted the door the instant I saw the bat.",
        "exampleZh": "我一看到蝙蝠就鎖上門了。"
    },
    {
        "id": 30120,
        "en": "bath",
        "kk": "/bæθ/",
        "zh": "n. 沐浴",
        "unit": 17,
        "example": "The baby loves bath time.",
        "exampleZh": "寶寶很喜歡洗澡。"
    },
    {
        "id": 30121,
        "en": "bathe",
        "kk": "",
        "zh": "v. 沐浴",
        "unit": 17,
        "example": "Slowly, people began to bathe more frequently.",
        "exampleZh": "慢慢地，人們開始更頻繁地洗澡。"
    },
    {
        "id": 30122,
        "en": "bathroom",
        "kk": "/ˈbæθruːm/",
        "zh": "n. 浴室",
        "unit": 17,
        "example": "The bathroom floor was awash.",
        "exampleZh": "浴室地板被水淹沒了。"
    },
    {
        "id": 30123,
        "en": "beach",
        "kk": "/biːtʃ/",
        "zh": "n. 沙灘",
        "unit": 17,
        "example": "We cantered along the beach.",
        "exampleZh": "我們沿著海灘慢跑。"
    },
    {
        "id": 30124,
        "en": "bean",
        "kk": "/biːn/",
        "zh": "n. 豆子",
        "unit": 17,
        "example": "This is my favourite bean, and they are long bean.",
        "exampleZh": "這是我最喜歡的豆子，它們是長豆子。"
    },
    {
        "id": 30125,
        "en": "bear",
        "kk": "/ber/",
        "zh": "n. 熊",
        "unit": 17,
        "example": "'Bear' and 'bare' are homophonous.",
        "exampleZh": "「熊」與「裸」同音。"
    },
    {
        "id": 30126,
        "en": "beard",
        "kk": "/bɪrd/",
        "zh": "n. 鬍鬚",
        "unit": 17,
        "example": "He's had his beard shaved off.",
        "exampleZh": "他的鬍子已經被剃掉了。"
    },
    {
        "id": 30127,
        "en": "beat",
        "kk": "/biːt/",
        "zh": "v. 拍打",
        "unit": 17,
        "example": "You can't beat Italian shoes.",
        "exampleZh": "你無法打敗義大利鞋。"
    },
    {
        "id": 30128,
        "en": "beautiful",
        "kk": "/ˈbjuːtɪfl/",
        "zh": "adj. 美麗的",
        "unit": 17,
        "example": "It was a beautiful morning.",
        "exampleZh": "這是一個美麗的早晨。"
    },
    {
        "id": 30129,
        "en": "beauty",
        "kk": "/ˈbjuːti/",
        "zh": "n. 美貌",
        "unit": 17,
        "example": "Her beauty appeared ageless.",
        "exampleZh": "她的美麗顯得永恆。"
    },
    {
        "id": 30130,
        "en": "because",
        "kk": "/bɪˈkɔːz/",
        "zh": "conj. 因為",
        "unit": 17,
        "example": "They are here because of us.",
        "exampleZh": "他們因為我們而來到這裡。"
    },
    {
        "id": 30131,
        "en": "become",
        "kk": "/bɪˈkʌm/",
        "zh": "v. 成為",
        "unit": 17,
        "example": "Doctors become inured to death.",
        "exampleZh": "醫生已經見怪不怪了。"
    },
    {
        "id": 30132,
        "en": "bed",
        "kk": "/bed/",
        "zh": "n. 床",
        "unit": 17,
        "example": "It's such a comfortable bed.",
        "exampleZh": "這是一張多麼舒服的床。"
    },
    {
        "id": 30133,
        "en": "bedroom",
        "kk": "/ˈbedruːm/",
        "zh": "n. 臥室",
        "unit": 17,
        "example": "The main bedroom is enormous.",
        "exampleZh": "主臥室很大。"
    },
    {
        "id": 30134,
        "en": "bee",
        "kk": "/biː/",
        "zh": "n. 蜜蜂",
        "unit": 17,
        "example": "The flower opens to reveal a bee.",
        "exampleZh": "花開了，露出一隻蜜蜂。"
    },
    {
        "id": 30135,
        "en": "beef",
        "kk": "/biːf/",
        "zh": "n. 牛肉",
        "unit": 17,
        "example": "The nation also exports beef.",
        "exampleZh": "該國也出口牛肉。"
    },
    {
        "id": 30136,
        "en": "beer",
        "kk": "/bɪr/",
        "zh": "n. 啤酒",
        "unit": 17,
        "example": "Are you a beer drinker?",
        "exampleZh": "你是啤酒愛好者嗎？"
    },
    {
        "id": 30137,
        "en": "before",
        "kk": "/bɪˈfɔːr/",
        "zh": "conj. 在...之前",
        "unit": 17,
        "example": "We should arrive before dark.",
        "exampleZh": "我們應該在天黑之前到達。"
    },
    {
        "id": 30138,
        "en": "begin",
        "kk": "/bɪˈɡɪn/",
        "zh": "v. 開始",
        "unit": 17,
        "example": "Their trial will shortly begin.",
        "exampleZh": "他們的審判即將開始。"
    },
    {
        "id": 30139,
        "en": "beginner",
        "kk": "",
        "zh": "n. 初學者",
        "unit": 17,
        "example": "The white belt signifies that he's an absolute beginner.",
        "exampleZh": "白帶錶示他是個絕對的初學者。"
    },
    {
        "id": 30140,
        "en": "beginning",
        "kk": "/bɪˈɡɪnɪŋ/",
        "zh": "n. 開始",
        "unit": 17,
        "example": "The snow was beginning to melt.",
        "exampleZh": ""
    },
    {
        "id": 30141,
        "en": "behave",
        "kk": "/bɪˈheɪv/",
        "zh": "v. 表現",
        "unit": 17,
        "example": "Will you kids just behave!",
        "exampleZh": ""
    },
    {
        "id": 30142,
        "en": "behind",
        "kk": "/bɪˈhaɪnd/",
        "zh": "adv. 在之後",
        "unit": 17,
        "example": "She heard footsteps behind her.",
        "exampleZh": "她聽到身後有腳步聲。"
    },
    {
        "id": 30143,
        "en": "believe",
        "kk": "/bɪˈliːv/",
        "zh": "v. 相信",
        "unit": 17,
        "example": "They don't believe in marriage.",
        "exampleZh": "他們不相信婚姻。"
    },
    {
        "id": 30144,
        "en": "bell",
        "kk": "/bel/",
        "zh": "n. 鈴",
        "unit": 17,
        "example": "The shop bell jangled loudly.",
        "exampleZh": "商店的門鈴叮噹作響。"
    },
    {
        "id": 30145,
        "en": "belong",
        "kk": "/bɪˈlɔːŋ/",
        "zh": "v. 屬於",
        "unit": 17,
        "example": "The islands belong to Spain.",
        "exampleZh": "這些島嶼屬於西班牙。"
    },
    {
        "id": 30146,
        "en": "below",
        "kk": "/bɪˈloʊ/",
        "zh": "adv. 在下面",
        "unit": 17,
        "example": "It's 15 degrees below freezing.",
        "exampleZh": "氣溫低於冰點 15 度。"
    },
    {
        "id": 30147,
        "en": "belt",
        "kk": "/belt/",
        "zh": "n. 皮帶",
        "unit": 17,
        "example": "We live in the commuter belt.",
        "exampleZh": "我們生活在通勤帶。"
    },
    {
        "id": 30148,
        "en": "bench",
        "kk": "/bentʃ/",
        "zh": "n. 長凳",
        "unit": 17,
        "example": "We sat primly at either end of a long bench.",
        "exampleZh": "我們一本正經地坐在長凳的兩端。"
    },
    {
        "id": 30149,
        "en": "besides",
        "kk": "/bɪˈsaɪdz/",
        "zh": "adv. 此外",
        "unit": 17,
        "example": "I've got no family besides my parents.",
        "exampleZh": "除了父母之外我沒有家人。"
    },
    {
        "id": 30150,
        "en": "between",
        "kk": "/bɪˈtwiːn/",
        "zh": "prep. 在...之間",
        "unit": 17,
        "example": "He toggled between the two windows.",
        "exampleZh": "他在兩個視窗之間切換。"
    },
    {
        "id": 30151,
        "en": "beyond",
        "kk": "/bɪˈjɑːnd/",
        "zh": "prep. 超出",
        "unit": 17,
        "example": "Her honesty is beyond question.",
        "exampleZh": "她的誠實是毋庸置疑的。"
    },
    {
        "id": 30152,
        "en": "bicycle",
        "kk": "/ˈbaɪsɪkl/",
        "zh": "n. 腳踏車",
        "unit": 17,
        "example": "Oscar had a new bicycle.",
        "exampleZh": "奧斯卡有一輛新自行車。"
    },
    {
        "id": 30153,
        "en": "big",
        "kk": "/bɪɡ/",
        "zh": "adj. 大的",
        "unit": 17,
        "example": "This shirt isn't big enough.",
        "exampleZh": "這件襯衫不夠大。"
    },
    {
        "id": 30154,
        "en": "bill",
        "kk": "/bɪl/",
        "zh": "n. 帳單;鈔票",
        "unit": 17,
        "example": "Your bill includes line rental.",
        "exampleZh": "您的帳單包括線路租金。"
    },
    {
        "id": 30155,
        "en": "biology",
        "kk": "/baɪˈɑːlədʒi/",
        "zh": "n. 生物學",
        "unit": 17,
        "example": "Biology is my favourite subject.",
        "exampleZh": ""
    },
    {
        "id": 30156,
        "en": "bird",
        "kk": "/bɜːrd/",
        "zh": "n. 鳥",
        "unit": 17,
        "example": "The bird continued to warble.",
        "exampleZh": "鳥兒繼續鳴叫。"
    },
    {
        "id": 30157,
        "en": "birthday",
        "kk": "/ˈbɜːrθdeɪ/",
        "zh": "n. 生日",
        "unit": 17,
        "example": "We threw a huge birthday party.",
        "exampleZh": ""
    },
    {
        "id": 30158,
        "en": "bite",
        "kk": "/baɪt/",
        "zh": "v. 咬",
        "unit": 17,
        "example": "Most European spiders don't bite.",
        "exampleZh": "大多數歐洲蜘蛛不咬人。"
    },
    {
        "id": 30159,
        "en": "bitter",
        "kk": "/ˈbɪtər/",
        "zh": "adj. 痛苦的",
        "unit": 17,
        "example": "The leaves taste rather bitter.",
        "exampleZh": "葉子的味道比較苦。"
    },
    {
        "id": 30160,
        "en": "black",
        "kk": "/blæk/",
        "zh": "adj. 黑的",
        "unit": 17,
        "example": "The exhaust streamed black smoke.",
        "exampleZh": "排氣管冒著黑煙。"
    },
    {
        "id": 30161,
        "en": "blackboard",
        "kk": "",
        "zh": "n. 黑板",
        "unit": 17,
        "example": "The menu was on a blackboard.",
        "exampleZh": "菜單在黑板上。"
    },
    {
        "id": 30162,
        "en": "blame",
        "kk": "/bleɪm/",
        "zh": "v. 責怪",
        "unit": 17,
        "example": "No blame attaches to you.",
        "exampleZh": ""
    },
    {
        "id": 30163,
        "en": "blank",
        "kk": "/blæŋk/",
        "zh": "adj. 空白的",
        "unit": 17,
        "example": "Do we have a blank video ?",
        "exampleZh": "我們有空白影片嗎？"
    },
    {
        "id": 30164,
        "en": "blanket",
        "kk": "/ˈblæŋkɪt/",
        "zh": "n. 毯子",
        "unit": 17,
        "example": "I wrapped a blanket around the baby.",
        "exampleZh": ""
    },
    {
        "id": 30165,
        "en": "blind",
        "kk": "/blaɪnd/",
        "zh": "adj. 失明的",
        "unit": 17,
        "example": "Doctors think he will go blind.",
        "exampleZh": "醫生認為他會失明。"
    },
    {
        "id": 30166,
        "en": "block",
        "kk": "/blɑːk/",
        "zh": "n. 街區",
        "unit": 17,
        "example": "Block draughts around doors and windows.",
        "exampleZh": "阻擋門窗周圍的氣流。"
    },
    {
        "id": 30167,
        "en": "blood",
        "kk": "/blʌd/",
        "zh": "n. 血",
        "unit": 17,
        "example": "The wound was oozing blood.",
        "exampleZh": "傷口正在滲血。"
    },
    {
        "id": 30168,
        "en": "bloody",
        "kk": "",
        "zh": "adj. 血腥的",
        "unit": 17,
        "example": "She did bloody well to win that race.",
        "exampleZh": "她表現出色，贏得了那場比賽。"
    },
    {
        "id": 30169,
        "en": "blow",
        "kk": "/bloʊ/",
        "zh": "v. 吹",
        "unit": 17,
        "example": "Blow! I completely forgot it.",
        "exampleZh": "吹！我完全忘記了。"
    },
    {
        "id": 30170,
        "en": "blue",
        "kk": "/bluː/",
        "zh": "adj. 藍的",
        "unit": 17,
        "example": "His eyes were piercingly blue.",
        "exampleZh": "他的眼睛是銳利的藍色。"
    },
    {
        "id": 30171,
        "en": "boat",
        "kk": "/boʊt/",
        "zh": "n. 船",
        "unit": 17,
        "example": "The boat chugged slowly along.",
        "exampleZh": "小船緩緩前進。"
    },
    {
        "id": 30172,
        "en": "body",
        "kk": "/ˈbɑːdi/",
        "zh": "n. 身體",
        "unit": 17,
        "example": "Exercise tones up your body.",
        "exampleZh": "運動可以強身健體。"
    },
    {
        "id": 30173,
        "en": "boil",
        "kk": "/bɔɪl/",
        "zh": "v. 燒開",
        "unit": 17,
        "example": "She put some potatoes on to boil.",
        "exampleZh": "她放了一些馬鈴薯來煮。"
    },
    {
        "id": 30174,
        "en": "bomb",
        "kk": "/bɑːm/",
        "zh": "n. 炸彈",
        "unit": 17,
        "example": "The bomb has been safely disposed of.",
        "exampleZh": "炸彈已被安全處置。"
    },
    {
        "id": 30175,
        "en": "bone",
        "kk": "/boʊn/",
        "zh": "n. 骨頭",
        "unit": 17,
        "example": "The dog was gnawing a bone.",
        "exampleZh": "那隻狗正在啃骨頭。"
    },
    {
        "id": 30176,
        "en": "book",
        "kk": "/bʊk/",
        "zh": "n. 書",
        "unit": 17,
        "example": "Shoot! I've forgotten my book!",
        "exampleZh": "射擊！我忘了帶書！"
    },
    {
        "id": 30177,
        "en": "bookcase",
        "kk": "",
        "zh": "n. 書櫥",
        "unit": 17,
        "example": "The bookcase is screwed to the wall.",
        "exampleZh": "書櫃是用螺絲固定在牆上的。"
    },
    {
        "id": 30178,
        "en": "bored",
        "kk": "",
        "zh": "adj. 厭倦的",
        "unit": 17,
        "example": "The boys were getting bored.",
        "exampleZh": ""
    },
    {
        "id": 30179,
        "en": "born",
        "kk": "/bɔːrn/",
        "zh": "adj. 天生的",
        "unit": 17,
        "example": "Some people are born brainy.",
        "exampleZh": "有些人天生聰明。"
    },
    {
        "id": 30180,
        "en": "borrow",
        "kk": "/ˈbɑːroʊ/",
        "zh": "v. 借",
        "unit": 17,
        "example": "Can I borrow your calculator?",
        "exampleZh": "我可以藉你的計算機嗎？"
    },
    {
        "id": 30181,
        "en": "boss",
        "kk": "/bɔːs/",
        "zh": "n. 老闆",
        "unit": 17,
        "example": "His boss has a foul temper.",
        "exampleZh": "他的老闆脾氣暴躁。"
    },
    {
        "id": 30182,
        "en": "both",
        "kk": "/boʊθ/",
        "zh": "pron. 兩者",
        "unit": 17,
        "example": "Both partners shared childcare.",
        "exampleZh": "雙方共同照顧孩子。"
    },
    {
        "id": 30183,
        "en": "bother",
        "kk": "/ˈbɑːðər/",
        "zh": "v. 使煩惱",
        "unit": 17,
        "example": "I hope I haven't been a bother.",
        "exampleZh": "我希望我沒有成為麻煩。"
    },
    {
        "id": 30184,
        "en": "bottle",
        "kk": "/ˈbɑːtl/",
        "zh": "n. 瓶子",
        "unit": 17,
        "example": "Shall I open another bottle?",
        "exampleZh": "我要再開一瓶嗎？"
    },
    {
        "id": 30185,
        "en": "bottom",
        "kk": "/ˈbɑːtəm/",
        "zh": "n. 底部",
        "unit": 17,
        "example": "The marriage had reached rock bottom.",
        "exampleZh": "婚姻已經跌入谷底。"
    },
    {
        "id": 30186,
        "en": "bow",
        "kk": "",
        "zh": "n. 弓",
        "unit": 17,
        "example": "He was armed with a bow and arrow.",
        "exampleZh": "他手持弓箭。"
    },
    {
        "id": 30187,
        "en": "bowl",
        "kk": "/boʊl/",
        "zh": "n. 碗",
        "unit": 17,
        "example": "She served him a bowl of beef stew.",
        "exampleZh": "她給他端了一碗燉牛肉。"
    },
    {
        "id": 30188,
        "en": "bowling",
        "kk": "",
        "zh": "n. 保齡球",
        "unit": 17,
        "example": "They go in for tennis and bowling.",
        "exampleZh": "他們喜歡打網球和保齡球。"
    },
    {
        "id": 30189,
        "en": "box",
        "kk": "/bɑːks/",
        "zh": "n. 箱子",
        "unit": 17,
        "example": "She was holding a large box.",
        "exampleZh": "她手裡拿著一個大盒子。"
    },
    {
        "id": 30190,
        "en": "boy",
        "kk": "/bɔɪ/",
        "zh": "n. 男孩",
        "unit": 17,
        "example": "The boy has great potential.",
        "exampleZh": "這個男孩有很大的潛力。"
    },
    {
        "id": 30191,
        "en": "brain",
        "kk": "/breɪn/",
        "zh": "n. 腦",
        "unit": 17,
        "example": "Alcohol acts quickly on the brain.",
        "exampleZh": "酒精對大腦的作用很快。"
    },
    {
        "id": 30192,
        "en": "branch",
        "kk": "/bræntʃ/",
        "zh": "n. 分店",
        "unit": 17,
        "example": "He chopped a branch off the tree.",
        "exampleZh": "他從樹上砍下一根樹枝。"
    },
    {
        "id": 30193,
        "en": "brand",
        "kk": "/brænd/",
        "zh": "n. 品牌",
        "unit": 17,
        "example": "Choose whichever brand you prefer.",
        "exampleZh": "選擇您喜歡的品牌。"
    },
    {
        "id": 30194,
        "en": "brave",
        "kk": "/breɪv/",
        "zh": "adj. 勇敢的",
        "unit": 17,
        "example": "Charles was brave and remarkably good-humoured.",
        "exampleZh": "查爾斯很勇敢，而且非常幽默。"
    },
    {
        "id": 30195,
        "en": "bread",
        "kk": "/bred/",
        "zh": "n. 麵包",
        "unit": 17,
        "example": "The bread had a spongy texture.",
        "exampleZh": "麵包質地鬆軟。"
    },
    {
        "id": 30196,
        "en": "break",
        "kk": "/breɪk/",
        "zh": "v. 弄壞",
        "unit": 17,
        "example": "You need a break from routine.",
        "exampleZh": "你需要從日常生活中休息一下。"
    },
    {
        "id": 30197,
        "en": "breakfast",
        "kk": "/ˈbrekfəst/",
        "zh": "n. 早餐",
        "unit": 17,
        "example": "Your breakfast is coming soon.",
        "exampleZh": "你的早餐很快就來了。"
    },
    {
        "id": 30198,
        "en": "brick",
        "kk": "/brɪk/",
        "zh": "n. 磚塊",
        "unit": 17,
        "example": "The school is built of brick.",
        "exampleZh": "學校是磚砌的。"
    },
    {
        "id": 30199,
        "en": "bridge",
        "kk": "/brɪdʒ/",
        "zh": "n. 橋",
        "unit": 17,
        "example": "When was the bridge constructed?",
        "exampleZh": "這座橋是什麼時候蓋的？"
    },
    {
        "id": 30200,
        "en": "brief",
        "kk": "/briːf/",
        "zh": "adj. 短暫的",
        "unit": 17,
        "example": "He let out a brief cackle.",
        "exampleZh": "他發出短促的咯咯笑聲。"
    },
    {
        "id": 30201,
        "en": "bright",
        "kk": "/braɪt/",
        "zh": "adj. 明亮的",
        "unit": 17,
        "example": "Bright colours are his signature.",
        "exampleZh": "明亮的色彩是他的標誌。"
    },
    {
        "id": 30202,
        "en": "bring",
        "kk": "/brɪŋ/",
        "zh": "v. 帶來",
        "unit": 17,
        "example": "All you need bring are sheets.",
        "exampleZh": "您只需攜帶床單即可。"
    },
    {
        "id": 30203,
        "en": "broad",
        "kk": "/brɔːd/",
        "zh": "adj. 寬闊的",
        "unit": 17,
        "example": "He is tall, broad and muscular.",
        "exampleZh": "他身材高大、寬闊、肌肉發達。"
    },
    {
        "id": 30204,
        "en": "broadcast",
        "kk": "/ˈbrɔːdkæst/",
        "zh": "v. 廣播",
        "unit": 17,
        "example": "The programme was broadcast nationally.",
        "exampleZh": "該節目在全國播出。"
    },
    {
        "id": 30205,
        "en": "brother",
        "kk": "/ˈbrʌðər/",
        "zh": "n. 兄弟",
        "unit": 17,
        "example": "She's smarter than her brother.",
        "exampleZh": "她比哥哥聰明。"
    },
    {
        "id": 30206,
        "en": "brown",
        "kk": "/braʊn/",
        "zh": "adj. 棕色的",
        "unit": 17,
        "example": "He removed his brown slip-ons.",
        "exampleZh": "他脫下了棕色便鞋。"
    },
    {
        "id": 30207,
        "en": "brunch",
        "kk": "",
        "zh": "n. 早午餐",
        "unit": 17,
        "example": "What time is brunch?",
        "exampleZh": ""
    },
    {
        "id": 30208,
        "en": "brush",
        "kk": "/brʌʃ/",
        "zh": "n. 刷子",
        "unit": 17,
        "example": "Brush beaten egg over the pastry.",
        "exampleZh": ""
    },
    {
        "id": 30209,
        "en": "bucket",
        "kk": "",
        "zh": "n. 桶子",
        "unit": 17,
        "example": "She ran hot water into the bucket.",
        "exampleZh": ""
    },
    {
        "id": 30210,
        "en": "buffet",
        "kk": "",
        "zh": "n. 自助餐",
        "unit": 17,
        "example": "Dinner will be a cold buffet, not a sit-down meal.",
        "exampleZh": ""
    },
    {
        "id": 30211,
        "en": "bug",
        "kk": "",
        "zh": "n. 昆蟲",
        "unit": 17,
        "example": "I only did it to bug my parents.",
        "exampleZh": "我這樣做只是為了打擾我的父母。"
    },
    {
        "id": 30212,
        "en": "build",
        "kk": "/bɪld/",
        "zh": "v. 建造",
        "unit": 17,
        "example": "There are no plans to build new offices.",
        "exampleZh": "目前沒有建造新辦事處的計劃。"
    },
    {
        "id": 30213,
        "en": "building",
        "kk": "/ˈbɪldɪŋ/",
        "zh": "n. 建築物",
        "unit": 17,
        "example": "The building soared above us.",
        "exampleZh": "這棟建築高聳在我們頭頂上。"
    },
    {
        "id": 30214,
        "en": "bun",
        "kk": "",
        "zh": "n. 圓麵包",
        "unit": 17,
        "example": "She wore her hair in a bun.",
        "exampleZh": "她把頭髮盤成髮髻。"
    },
    {
        "id": 30215,
        "en": "bundle",
        "kk": "",
        "zh": "n. (一)包,束",
        "unit": 17,
        "example": "That car must have cost a bundle.",
        "exampleZh": "那輛車肯定花了一大筆錢。"
    },
    {
        "id": 30216,
        "en": "burn",
        "kk": "/bɜːrn/",
        "zh": "v. 燒",
        "unit": 17,
        "example": "Turn the heat down or it'll burn.",
        "exampleZh": "把火關小，不然會燒焦的。"
    },
    {
        "id": 30217,
        "en": "burst",
        "kk": "/bɜːrst/",
        "zh": "v. 爆裂",
        "unit": 17,
        "example": "The class burst out laughing.",
        "exampleZh": "全班哄堂大笑。"
    },
    {
        "id": 30218,
        "en": "bus",
        "kk": "/bʌs/",
        "zh": "n. 公車",
        "unit": 17,
        "example": "The bus bounced down the hill.",
        "exampleZh": "公共汽車彈著衝下山。"
    },
    {
        "id": 30219,
        "en": "business",
        "kk": "/ˈbɪznəs/",
        "zh": "n. 商業",
        "unit": 17,
        "example": "They flew business class.",
        "exampleZh": "他們搭乘的是商務艙。"
    },
    {
        "id": 30220,
        "en": "businessman",
        "kk": "",
        "zh": "n. 商人",
        "unit": 17,
        "example": "Warren was an adventurous businessman.",
        "exampleZh": ""
    },
    {
        "id": 30221,
        "en": "busy",
        "kk": "/ˈbɪzi/",
        "zh": "adj. 忙碌的",
        "unit": 17,
        "example": "We're not always this busy!",
        "exampleZh": "我們並不總是這麼忙！"
    },
    {
        "id": 30222,
        "en": "but",
        "kk": "/bʌt/",
        "zh": "conj. 但是",
        "unit": 17,
        "example": "I'm married, but we're separated.",
        "exampleZh": "我已婚，但我們分居了。"
    },
    {
        "id": 30223,
        "en": "butter",
        "kk": "/ˈbʌtər/",
        "zh": "n. 奶油",
        "unit": 17,
        "example": "Butter is perishable and can go rancid.",
        "exampleZh": "黃油很容易腐爛並且會變質。"
    },
    {
        "id": 30224,
        "en": "butterfly",
        "kk": "",
        "zh": "n. 蝴蝶",
        "unit": 17,
        "example": "The butterfly fluttered from flower to flower.",
        "exampleZh": "蝴蝶從一朵花飛到另一朵花。"
    },
    {
        "id": 30225,
        "en": "button",
        "kk": "/ˈbʌtn/",
        "zh": "n. 鈕扣",
        "unit": 17,
        "example": "This button is for adjusting the volume.",
        "exampleZh": ""
    },
    {
        "id": 30226,
        "en": "buy",
        "kk": "/baɪ/",
        "zh": "v. 買",
        "unit": 17,
        "example": "Money can't buy you happiness.",
        "exampleZh": "金錢買不來幸福。"
    },
    {
        "id": 30227,
        "en": "by",
        "kk": "/baɪ/",
        "zh": "prep. 沿;用...方法",
        "unit": 17,
        "example": "They sleep by day and hunt by night.",
        "exampleZh": "他們白天睡覺，晚上狩獵。"
    },
    {
        "id": 30228,
        "en": "cabbage",
        "kk": "",
        "zh": "n. 甘藍菜",
        "unit": 17,
        "example": "I've always hated cabbage.",
        "exampleZh": ""
    },
    {
        "id": 30229,
        "en": "cable",
        "kk": "/ˈkeɪbl/",
        "zh": "n. 電纜",
        "unit": 17,
        "example": "Rats had gnawed through the cable.",
        "exampleZh": ""
    },
    {
        "id": 30230,
        "en": "cafeteria",
        "kk": "",
        "zh": "n. 自助餐廳",
        "unit": 17,
        "example": "Does the college cafeteria provide a healthful diet?",
        "exampleZh": ""
    },
    {
        "id": 30231,
        "en": "cage",
        "kk": "",
        "zh": "n. 鳥籠",
        "unit": 17,
        "example": "The cage smelled of excrement.",
        "exampleZh": "籠子裡有排泄物的味道。"
    },
    {
        "id": 30232,
        "en": "cake",
        "kk": "/keɪk/",
        "zh": "n. 蛋糕",
        "unit": 17,
        "example": "That cake looks very tempting.",
        "exampleZh": "那個蛋糕看起來很誘人。"
    },
    {
        "id": 30233,
        "en": "calendar",
        "kk": "",
        "zh": "n. 日曆",
        "unit": 17,
        "example": "This is one of the biggest weeks in the racing calendar.",
        "exampleZh": ""
    },
    {
        "id": 30234,
        "en": "call",
        "kk": "/kɔːl/",
        "zh": "n. 呼叫",
        "unit": 17,
        "example": "Can we call television art?",
        "exampleZh": "我們可以稱之為電視藝術嗎？"
    },
    {
        "id": 30235,
        "en": "calm",
        "kk": "/kɑːm/",
        "zh": "adj. 平靜的",
        "unit": 17,
        "example": "Her voice was surprisingly calm.",
        "exampleZh": ""
    },
    {
        "id": 30236,
        "en": "camera",
        "kk": "/ˈkæmərə/",
        "zh": "n. 照相機",
        "unit": 17,
        "example": "The camera whirred and clicked.",
        "exampleZh": "相機嗡嗡作響並發出喀喀聲。"
    },
    {
        "id": 30237,
        "en": "camp",
        "kk": "/kæmp/",
        "zh": "v. 紮營",
        "unit": 17,
        "example": "He spent two weeks at camp this summer.",
        "exampleZh": "今年夏天他在營地度過了兩週。"
    },
    {
        "id": 30238,
        "en": "campus",
        "kk": "/ˈkæmpəs/",
        "zh": "n. 校園",
        "unit": 17,
        "example": "There are three dining halls on campus.",
        "exampleZh": ""
    },
    {
        "id": 30239,
        "en": "can",
        "kk": "/kæn/",
        "zh": "aux. 能夠",
        "unit": 17,
        "example": "Can you last (out) until I can get help?",
        "exampleZh": "你能堅持下去直到我得到幫助嗎？"
    },
    {
        "id": 30240,
        "en": "cancel",
        "kk": "/ˈkænsəl/",
        "zh": "v. 取消",
        "unit": 17,
        "example": "The customer called to cancel.",
        "exampleZh": "客戶打電話要求取消。"
    },
    {
        "id": 30241,
        "en": "cancer",
        "kk": "/ˈkænsər/",
        "zh": "n. 癌症",
        "unit": 17,
        "example": "He has terminal lung cancer.",
        "exampleZh": ""
    },
    {
        "id": 30242,
        "en": "candle",
        "kk": "",
        "zh": "n. 蠟燭",
        "unit": 17,
        "example": "I blew out the candle.",
        "exampleZh": ""
    },
    {
        "id": 30243,
        "en": "candy",
        "kk": "",
        "zh": "n. 糖果",
        "unit": 17,
        "example": "Who wants the last piece of candy?",
        "exampleZh": "誰想要最後一塊糖果？"
    },
    {
        "id": 30244,
        "en": "cap",
        "kk": "",
        "zh": "n. 帽子",
        "unit": 17,
        "example": "He often wore a baseball cap.",
        "exampleZh": "他經常戴著棒球帽。"
    },
    {
        "id": 30245,
        "en": "captain",
        "kk": "/ˈkæptən/",
        "zh": "n. 隊長",
        "unit": 17,
        "example": "This is the captain speaking.",
        "exampleZh": ""
    },
    {
        "id": 30246,
        "en": "car",
        "kk": "/kɑːr/",
        "zh": "n. 車子",
        "unit": 17,
        "example": "Buddy totalled his car.",
        "exampleZh": "巴迪把他的車報廢了。"
    },
    {
        "id": 30247,
        "en": "card",
        "kk": "/kɑːrd/",
        "zh": "n. 卡片",
        "unit": 17,
        "example": "Simon's a whiz at card games.",
        "exampleZh": "西蒙是紙牌遊戲高手。"
    },
    {
        "id": 30248,
        "en": "care",
        "kk": "/ker/",
        "zh": "v. 關心",
        "unit": 17,
        "example": "Joe Sixpack doesn't care about that.",
        "exampleZh": "喬·斯克斯帕克並不關心這些。"
    },
    {
        "id": 30249,
        "en": "careful",
        "kk": "/ˈkerfəl/",
        "zh": "adj. 小心的",
        "unit": 17,
        "example": "The trip needs careful planning.",
        "exampleZh": "旅行需要仔細計劃。"
    },
    {
        "id": 30250,
        "en": "careless",
        "kk": "",
        "zh": "adj. 粗心的",
        "unit": 17,
        "example": "She had been inexcusably careless.",
        "exampleZh": ""
    },
    {
        "id": 30251,
        "en": "carpet",
        "kk": "",
        "zh": "n. 地毯",
        "unit": 17,
        "example": "We rolled up the carpet.",
        "exampleZh": ""
    },
    {
        "id": 30252,
        "en": "carrot",
        "kk": "",
        "zh": "n. 胡蘿蔔",
        "unit": 17,
        "example": "Her carrot cake is divine.",
        "exampleZh": ""
    },
    {
        "id": 30253,
        "en": "carry",
        "kk": "/ˈkæri/",
        "zh": "v. 拿,運送",
        "unit": 17,
        "example": "Only one carry-on is allowed.",
        "exampleZh": "只允許攜帶一件隨身行李。"
    },
    {
        "id": 30254,
        "en": "cartoon",
        "kk": "",
        "zh": "n. 卡通",
        "unit": 17,
        "example": "They visited the Cartoon Museum.",
        "exampleZh": ""
    },
    {
        "id": 30255,
        "en": "case",
        "kk": "/keɪs/",
        "zh": "n. 例子",
        "unit": 17,
        "example": "He zipped his case shut.",
        "exampleZh": "他拉上箱子的拉鍊。"
    },
    {
        "id": 30256,
        "en": "cash",
        "kk": "/kæʃ/",
        "zh": "n. 現金",
        "unit": 17,
        "example": "I'm short of cash right now.",
        "exampleZh": ""
    },
    {
        "id": 30257,
        "en": "cassette",
        "kk": "",
        "zh": "n. 卡帶",
        "unit": 17,
        "example": "I swapped him my CD for his cassette.",
        "exampleZh": ""
    },
    {
        "id": 30258,
        "en": "castle",
        "kk": "/ˈkæsl/",
        "zh": "n. 城堡",
        "unit": 17,
        "example": "The castle was bathed in moonlight.",
        "exampleZh": ""
    },
    {
        "id": 30259,
        "en": "cat",
        "kk": "/kæt/",
        "zh": "n. 貓",
        "unit": 17,
        "example": "Our cat hates being handled.",
        "exampleZh": "我們的貓討厭被人撫摸。"
    },
    {
        "id": 30260,
        "en": "catch",
        "kk": "/kætʃ/",
        "zh": "v. 追捕",
        "unit": 17,
        "example": "Where did you catch the fish?",
        "exampleZh": "你在哪裡釣到的魚？"
    },
    {
        "id": 30261,
        "en": "cause",
        "kk": "/kɔːz/",
        "zh": "v. 導致",
        "unit": 17,
        "example": "High temperatures can cause hallucination.",
        "exampleZh": "高溫會引起幻覺。"
    },
    {
        "id": 30262,
        "en": "ceiling",
        "kk": "/ˈsiːlɪŋ/",
        "zh": "n. 天花板",
        "unit": 17,
        "example": "The ceiling was grey and cracked.",
        "exampleZh": ""
    },
    {
        "id": 30263,
        "en": "celebrate",
        "kk": "/ˈseləbreɪt/",
        "zh": "v. 慶祝",
        "unit": 17,
        "example": "I was in a mood to celebrate.",
        "exampleZh": ""
    },
    {
        "id": 30264,
        "en": "cell",
        "kk": "/sel/",
        "zh": "n. 細胞",
        "unit": 17,
        "example": "Each cell of our bodies contains 46 chromosomes.",
        "exampleZh": ""
    },
    {
        "id": 30265,
        "en": "cent",
        "kk": "",
        "zh": "n. 分",
        "unit": 17,
        "example": "I'm not a hundred per cent sure.",
        "exampleZh": "我不是百分百確定。"
    },
    {
        "id": 30266,
        "en": "center",
        "kk": "/ˈsentər/",
        "zh": "n. 中央",
        "unit": 17,
        "example": "Any shopping center is fine.",
        "exampleZh": "任何購物中心都可以。"
    },
    {
        "id": 30267,
        "en": "centimeter",
        "kk": "",
        "zh": "n. 公分",
        "unit": 17,
        "example": "Who guesses one centimeter?",
        "exampleZh": ""
    },
    {
        "id": 30268,
        "en": "central",
        "kk": "/ˈsentrəl/",
        "zh": "adj. 中央的",
        "unit": 17,
        "example": "The house has gas-fired central heating.",
        "exampleZh": "房子配有瓦斯中央暖氣系統。"
    },
    {
        "id": 30269,
        "en": "century",
        "kk": "/ˈsentʃəri/",
        "zh": "n. 世紀",
        "unit": 17,
        "example": "A new century was dawning.",
        "exampleZh": ""
    },
    {
        "id": 30270,
        "en": "cereal",
        "kk": "",
        "zh": "n. 穀類食物",
        "unit": 17,
        "example": "He ate a large bowlful of cereal.",
        "exampleZh": ""
    },
    {
        "id": 30271,
        "en": "certain",
        "kk": "/ˈsɜːrtn/",
        "zh": "adj. 確實的",
        "unit": 17,
        "example": "That's true, to a certain extent.",
        "exampleZh": "在某種程度上，確實如此。"
    },
    {
        "id": 30272,
        "en": "chair",
        "kk": "/tʃer/",
        "zh": "n. 椅子",
        "unit": 17,
        "example": "Emily edged her chair forward.",
        "exampleZh": ""
    },
    {
        "id": 30273,
        "en": "chalk",
        "kk": "",
        "zh": "n. 粉筆",
        "unit": 17,
        "example": "You may chalk it on the wall.",
        "exampleZh": ""
    },
    {
        "id": 30274,
        "en": "chance",
        "kk": "/tʃæns/",
        "zh": "n. 機會",
        "unit": 17,
        "example": "Everyone has a chance to win.",
        "exampleZh": "每個人都有機會獲勝。"
    },
    {
        "id": 30275,
        "en": "change",
        "kk": "/tʃeɪndʒ/",
        "zh": "v. 改變",
        "unit": 17,
        "example": "Needs change while policies fossilize.",
        "exampleZh": ""
    },
    {
        "id": 30276,
        "en": "channel",
        "kk": "/ˈtʃænl/",
        "zh": "n. 電視臺",
        "unit": 17,
        "example": "The programme's on Channel 4.",
        "exampleZh": ""
    },
    {
        "id": 30277,
        "en": "character",
        "kk": "/ˈkærəktər/",
        "zh": "n. 性格",
        "unit": 17,
        "example": "She's a good judge of character.",
        "exampleZh": ""
    },
    {
        "id": 30278,
        "en": "charge",
        "kk": "/tʃɑːrdʒ/",
        "zh": "v. 收費",
        "unit": 17,
        "example": "She left her assistant in charge.",
        "exampleZh": ""
    },
    {
        "id": 30279,
        "en": "chart",
        "kk": "/tʃɑːrt/",
        "zh": "n. 圖表",
        "unit": 17,
        "example": "He copied the chart from a book.",
        "exampleZh": "他從一本書上複製了圖表。"
    },
    {
        "id": 30280,
        "en": "chase",
        "kk": "/tʃeɪs/",
        "zh": "v. 追趕",
        "unit": 17,
        "example": "We gave chase along the footpath.",
        "exampleZh": "我們沿著人行道追趕。"
    },
    {
        "id": 30281,
        "en": "cheap",
        "kk": "/tʃiːp/",
        "zh": "adj. 便宜的",
        "unit": 17,
        "example": "The meal was amazingly cheap.",
        "exampleZh": "這頓飯出奇的便宜。"
    },
    {
        "id": 30282,
        "en": "cheat",
        "kk": "",
        "zh": "v. 欺騙",
        "unit": 17,
        "example": "He was a liar and a cheat.",
        "exampleZh": ""
    },
    {
        "id": 30283,
        "en": "check",
        "kk": "/tʃek/",
        "zh": "v. 檢查",
        "unit": 17,
        "example": "Check whether a fuse has blown.",
        "exampleZh": "檢查保險絲是否熔斷。"
    },
    {
        "id": 30284,
        "en": "cheer",
        "kk": "",
        "zh": "v. 歡呼",
        "unit": 17,
        "example": "A great cheer went up from the crowd.",
        "exampleZh": ""
    },
    {
        "id": 30285,
        "en": "cheese",
        "kk": "/tʃiːz/",
        "zh": "n. 起司",
        "unit": 17,
        "example": "There's mould on the cheese.",
        "exampleZh": ""
    },
    {
        "id": 30286,
        "en": "chemical",
        "kk": "/ˈkemɪkl/",
        "zh": "adj. 化學的",
        "unit": 17,
        "example": "Chemical weapons are banned internationally.",
        "exampleZh": ""
    },
    {
        "id": 30287,
        "en": "chess",
        "kk": "",
        "zh": "n. 西洋棋",
        "unit": 17,
        "example": "Chess is not a game of chance.",
        "exampleZh": ""
    },
    {
        "id": 30288,
        "en": "chicken",
        "kk": "/ˈtʃɪkən/",
        "zh": "n. 雞",
        "unit": 17,
        "example": "Luke munched the chicken sandwiches.",
        "exampleZh": "盧克嚼著雞肉三明治。"
    },
    {
        "id": 30289,
        "en": "chief",
        "kk": "/tʃiːf/",
        "zh": "n. 首領",
        "unit": 17,
        "example": "Unemployment was the chief cause of poverty.",
        "exampleZh": "失業是貧困的主要原因。"
    },
    {
        "id": 30290,
        "en": "child",
        "kk": "/tʃaɪld/",
        "zh": "n. 小孩",
        "unit": 17,
        "example": "The child was born prematurely.",
        "exampleZh": "孩子早產了。"
    },
    {
        "id": 30291,
        "en": "childish",
        "kk": "",
        "zh": "adj. 幼稚的",
        "unit": 17,
        "example": "She's just being childish and immature.",
        "exampleZh": "她只是幼稚、不成熟而已。"
    },
    {
        "id": 30292,
        "en": "childlike",
        "kk": "",
        "zh": "adj. 天真的",
        "unit": 17,
        "example": "He retained a childlike sense of wonder.",
        "exampleZh": "他保留著孩子般的好奇心。"
    },
    {
        "id": 30293,
        "en": "chin",
        "kk": "/tʃɪn/",
        "zh": "n. 下巴",
        "unit": 17,
        "example": "She rubbed her chin thoughtfully.",
        "exampleZh": ""
    },
    {
        "id": 30294,
        "en": "chocolate",
        "kk": "/ˈtʃɔːklət/",
        "zh": "n. 巧克力",
        "unit": 17,
        "example": "It contains real chocolate chips.",
        "exampleZh": ""
    },
    {
        "id": 30295,
        "en": "choice",
        "kk": "/tʃɔɪs/",
        "zh": "n. 選擇",
        "unit": 17,
        "example": "I wouldn't go there by choice.",
        "exampleZh": ""
    },
    {
        "id": 30296,
        "en": "choose",
        "kk": "/tʃuːz/",
        "zh": "v. 選擇",
        "unit": 17,
        "example": "Choose whichever brand you prefer.",
        "exampleZh": "選擇您喜歡的品牌。"
    },
    {
        "id": 30297,
        "en": "chopstick",
        "kk": "",
        "zh": "n. 筷子",
        "unit": 17,
        "example": "He can use chopsticks.",
        "exampleZh": ""
    },
    {
        "id": 30298,
        "en": "Christmas",
        "kk": "",
        "zh": "n. 耶誕節",
        "unit": 17,
        "example": "Christmas is still months away.",
        "exampleZh": "距離聖誕節還有幾個月。"
    },
    {
        "id": 30299,
        "en": "chubby",
        "kk": "",
        "zh": "adj. 豐滿的",
        "unit": 17,
        "example": "Do you think I'm too chubby?",
        "exampleZh": ""
    },
    {
        "id": 30300,
        "en": "church",
        "kk": "/tʃɜːrtʃ/",
        "zh": "n. 教堂",
        "unit": 17,
        "example": "She plays the organ in church.",
        "exampleZh": "她在教堂裡演奏風琴。"
    },
    {
        "id": 30301,
        "en": "claim",
        "kk": "/kleɪm/",
        "zh": "v. 主張",
        "unit": 17,
        "example": "The judge allowed my claim.",
        "exampleZh": ""
    },
    {
        "id": 30302,
        "en": "circle",
        "kk": "/ˈsɜːrkl/",
        "zh": "n. 圓圈",
        "unit": 17,
        "example": "The children stood in a circle.",
        "exampleZh": ""
    },
    {
        "id": 30303,
        "en": "city",
        "kk": "/ˈsɪti/",
        "zh": "n. 城市",
        "unit": 17,
        "example": "The cathedral dominates the city.",
        "exampleZh": "大教堂主宰著這座城市。"
    },
    {
        "id": 30304,
        "en": "clap",
        "kk": "",
        "zh": "v. 拍(手)",
        "unit": 17,
        "example": "Let's clap our hands together!",
        "exampleZh": ""
    },
    {
        "id": 30305,
        "en": "class",
        "kk": "/klæs/",
        "zh": "n. 班級",
        "unit": 17,
        "example": "I've joined an aerobics class.",
        "exampleZh": "我參加了健美操班。"
    },
    {
        "id": 30306,
        "en": "classic",
        "kk": "/ˈklæsɪk/",
        "zh": "adj. 古典的",
        "unit": 17,
        "example": "The novel may become a modern classic.",
        "exampleZh": ""
    },
    {
        "id": 30307,
        "en": "classmate",
        "kk": "",
        "zh": "n. 同學",
        "unit": 17,
        "example": "She felt like a fifth-grader who had snitched on a classmate.",
        "exampleZh": ""
    },
    {
        "id": 30308,
        "en": "classroom",
        "kk": "/ˈklæsruːm/",
        "zh": "n. 班級",
        "unit": 17,
        "example": "She'd sent him outside the classroom.",
        "exampleZh": ""
    },
    {
        "id": 30309,
        "en": "clay",
        "kk": "",
        "zh": "n. 黏土",
        "unit": 17,
        "example": "Clay is a plastic substance.",
        "exampleZh": ""
    },
    {
        "id": 30310,
        "en": "clean",
        "kk": "/kliːn/",
        "zh": "adj. 乾淨的",
        "unit": 17,
        "example": "Cats are very clean animals.",
        "exampleZh": "貓是非常愛乾淨的動物。"
    },
    {
        "id": 30311,
        "en": "clear",
        "kk": "/klɪr/",
        "zh": "adj. 清楚的",
        "unit": 17,
        "example": "She made her objections clear.",
        "exampleZh": "她明確表示了自己的反對意見。"
    },
    {
        "id": 30312,
        "en": "clerk",
        "kk": "/klɜːrk/",
        "zh": "n. 店員",
        "unit": 17,
        "example": "A sharp-eyed shop clerk spotted the fake.",
        "exampleZh": ""
    },
    {
        "id": 30313,
        "en": "clever",
        "kk": "/ˈklevər/",
        "zh": "adj. 聰明的",
        "unit": 17,
        "example": "'You are clever,' she gushed.",
        "exampleZh": "「你很聰明，」她滔滔不絕地說。"
    },
    {
        "id": 30314,
        "en": "climate",
        "kk": "",
        "zh": "n. 氣候",
        "unit": 17,
        "example": "The economic climate remains uncertain.",
        "exampleZh": ""
    },
    {
        "id": 30315,
        "en": "climb",
        "kk": "",
        "zh": "v. 攀爬",
        "unit": 17,
        "example": "Nancy began to climb the stairs.",
        "exampleZh": "南希開始爬樓梯。"
    },
    {
        "id": 30316,
        "en": "clock",
        "kk": "",
        "zh": "n. 時鐘",
        "unit": 17,
        "example": "The clock struck the hour.",
        "exampleZh": "時鐘敲響了整點。"
    },
    {
        "id": 30317,
        "en": "close",
        "kk": "",
        "zh": "v. 關",
        "unit": 17,
        "example": "Some smallish firms may close.",
        "exampleZh": "一些小公司可能會關閉。"
    },
    {
        "id": 30318,
        "en": "closet",
        "kk": "",
        "zh": "n. 櫥櫃",
        "unit": 17,
        "example": "It was in your closet.",
        "exampleZh": ""
    },
    {
        "id": 30319,
        "en": "clothes",
        "kk": "",
        "zh": "n. 衣服",
        "unit": 17,
        "example": "She wears really funky clothes.",
        "exampleZh": ""
    },
    {
        "id": 30320,
        "en": "cloud",
        "kk": "",
        "zh": "n. 雲",
        "unit": 17,
        "example": "The plane disappeared behind a cloud.",
        "exampleZh": "飛機消失在雲層後面。"
    },
    {
        "id": 30321,
        "en": "club",
        "kk": "",
        "zh": "n. 俱樂部",
        "unit": 17,
        "example": "He belongs to an exclusive club.",
        "exampleZh": ""
    },
    {
        "id": 30322,
        "en": "coach",
        "kk": "",
        "zh": "n. 教練",
        "unit": 17,
        "example": "What you need is a drama coach.",
        "exampleZh": ""
    },
    {
        "id": 30323,
        "en": "coast",
        "kk": "",
        "zh": "n. 海岸",
        "unit": 17,
        "example": "They live on the south coast.",
        "exampleZh": "他們住在南海岸。"
    },
    {
        "id": 30324,
        "en": "coat",
        "kk": "",
        "zh": "n. 大衣",
        "unit": 17,
        "example": "She was wearing a new coat.",
        "exampleZh": "她穿著一件新外套。"
    },
    {
        "id": 30325,
        "en": "cockroach",
        "kk": "",
        "zh": "n. 蟑螂",
        "unit": 17,
        "example": "FIRST, catch your cockroach.",
        "exampleZh": ""
    },
    {
        "id": 30326,
        "en": "coffee",
        "kk": "",
        "zh": "n. 咖啡",
        "unit": 17,
        "example": "Her coffee was now lukewarm.",
        "exampleZh": "她的咖啡現在已經微溫了。"
    },
    {
        "id": 30327,
        "en": "coin",
        "kk": "",
        "zh": "n. 硬幣",
        "unit": 17,
        "example": "The coin rolled underneath the piano.",
        "exampleZh": ""
    },
    {
        "id": 30328,
        "en": "coke",
        "kk": "",
        "zh": "n. 可樂",
        "unit": 17,
        "example": "My sister likes Coke.",
        "exampleZh": "我姐姐喜歡可樂。"
    },
    {
        "id": 30329,
        "en": "cold",
        "kk": "",
        "zh": "adj. 冷的",
        "unit": 17,
        "example": "It's flipping cold today!",
        "exampleZh": "今天天氣突然變冷了！"
    },
    {
        "id": 30330,
        "en": "collect",
        "kk": "",
        "zh": "v. 收集",
        "unit": 17,
        "example": "I used to collect stamps.",
        "exampleZh": "我以前收集郵票。"
    },
    {
        "id": 30331,
        "en": "college",
        "kk": "",
        "zh": "n. 大學",
        "unit": 17,
        "example": "He studied maths at college.",
        "exampleZh": ""
    },
    {
        "id": 30332,
        "en": "color",
        "kk": "",
        "zh": "n. 顏色",
        "unit": 17,
        "example": "What color is Paul's shirt?",
        "exampleZh": "保羅的球衣是什麼顏色的？"
    },
    {
        "id": 30333,
        "en": "colorful",
        "kk": "",
        "zh": "adj. 多采多姿的",
        "unit": 17,
        "example": "This is a more colorful scale.",
        "exampleZh": "這是一個更豐富多彩的音階。"
    },
    {
        "id": 30334,
        "en": "comb",
        "kk": "",
        "zh": "n. 梳子",
        "unit": 17,
        "example": "Your hair needs a good comb.",
        "exampleZh": ""
    },
    {
        "id": 30335,
        "en": "come",
        "kk": "",
        "zh": "v. 來",
        "unit": 17,
        "example": "Have you come far?",
        "exampleZh": "你已經走了很遠嗎？"
    },
    {
        "id": 30336,
        "en": "comfortable",
        "kk": "",
        "zh": "adj. 舒服的",
        "unit": 17,
        "example": "You'll be quite comfortable here.",
        "exampleZh": "你在這裡會很舒服。"
    },
    {
        "id": 30337,
        "en": "command",
        "kk": "",
        "zh": "v. 命令",
        "unit": 17,
        "example": "Begin when I give the command.",
        "exampleZh": ""
    },
    {
        "id": 30338,
        "en": "comment",
        "kk": "",
        "zh": "n. 意見",
        "unit": 17,
        "example": "Buckingham Palace refused to comment.",
        "exampleZh": ""
    },
    {
        "id": 30339,
        "en": "common",
        "kk": "",
        "zh": "adj. 共同的",
        "unit": 17,
        "example": "Jackson is a common English name.",
        "exampleZh": "傑克森是一個常見的英文名字。"
    },
    {
        "id": 30340,
        "en": "company",
        "kk": "",
        "zh": "n. 公司",
        "unit": 17,
        "example": "The company employs 18 workers.",
        "exampleZh": ""
    },
    {
        "id": 30341,
        "en": "compare",
        "kk": "",
        "zh": "v. 比較",
        "unit": 17,
        "example": "The point of the lesson is to compare the two countries.",
        "exampleZh": "本課的重點是比較這兩個國家。"
    },
    {
        "id": 30342,
        "en": "complain",
        "kk": "",
        "zh": "v. 抱怨",
        "unit": 17,
        "example": "I was too cowardly to complain.",
        "exampleZh": "我太懦弱了，不敢抱怨。"
    },
    {
        "id": 30343,
        "en": "complaint",
        "kk": "",
        "zh": "n. 抱怨",
        "unit": 17,
        "example": "You have no grounds for complaint.",
        "exampleZh": ""
    },
    {
        "id": 30344,
        "en": "complete",
        "kk": "",
        "zh": "adj. 完整的",
        "unit": 17,
        "example": "We were in complete agreement.",
        "exampleZh": "我們完全同意。"
    },
    {
        "id": 30345,
        "en": "computer",
        "kk": "",
        "zh": "n. 電腦",
        "unit": 17,
        "example": "My computer keeps going funny.",
        "exampleZh": ""
    },
    {
        "id": 30346,
        "en": "concern",
        "kk": "",
        "zh": "n. 擔心",
        "unit": 17,
        "example": "There is no cause for concern.",
        "exampleZh": ""
    },
    {
        "id": 30347,
        "en": "confident",
        "kk": "",
        "zh": "adj. 有自信的",
        "unit": 17,
        "example": "Marina was a confident, happy child.",
        "exampleZh": ""
    },
    {
        "id": 30348,
        "en": "conflict",
        "kk": "",
        "zh": "n. 衝突",
        "unit": 17,
        "example": "She was unafraid of conflict.",
        "exampleZh": ""
    },
    {
        "id": 30349,
        "en": "confuse",
        "kk": "",
        "zh": "v. 使迷惑",
        "unit": 17,
        "example": "I always confuse my left with my right.",
        "exampleZh": ""
    },
    {
        "id": 30350,
        "en": "congratulation",
        "kk": "",
        "zh": "n. 道賀",
        "unit": 17,
        "example": "We have received many letters of congratulation.",
        "exampleZh": ""
    },
    {
        "id": 30351,
        "en": "connect",
        "kk": "",
        "zh": "v. 連接",
        "unit": 17,
        "example": "Click 'Continue' to connect to the Internet.",
        "exampleZh": ""
    },
    {
        "id": 30352,
        "en": "consider",
        "kk": "",
        "zh": "v. 考慮",
        "unit": 17,
        "example": "Let's consider this point further.",
        "exampleZh": "讓我們進一步考慮這一點。"
    },
    {
        "id": 30353,
        "en": "considerate",
        "kk": "",
        "zh": "adj. 體貼的",
        "unit": 17,
        "example": "He was charming, considerate and impeccably mannered.",
        "exampleZh": ""
    },
    {
        "id": 30354,
        "en": "contact",
        "kk": "",
        "zh": "v. 聯絡",
        "unit": 17,
        "example": "I will contact you by letter.",
        "exampleZh": ""
    },
    {
        "id": 30355,
        "en": "continue",
        "kk": "",
        "zh": "v. 使繼續",
        "unit": 17,
        "example": "They'll continue to fight injustice.",
        "exampleZh": "他們將繼續與不公義作鬥爭。"
    },
    {
        "id": 30356,
        "en": "contract",
        "kk": "",
        "zh": "n. 合約",
        "unit": 17,
        "example": "He mailed me the contract.",
        "exampleZh": ""
    },
    {
        "id": 30357,
        "en": "control",
        "kk": "",
        "zh": "v. 控制",
        "unit": 17,
        "example": "The situation is under control.",
        "exampleZh": ""
    },
    {
        "id": 30358,
        "en": "convenient",
        "kk": "",
        "zh": "adj. 方便的",
        "unit": 17,
        "example": "If it's convenient I can come tomorrow.",
        "exampleZh": "如果方便的話我明天可以來。"
    },
    {
        "id": 30359,
        "en": "conversation",
        "kk": "",
        "zh": "n. 對話",
        "unit": 17,
        "example": "She was engrossed in conversation.",
        "exampleZh": ""
    },
    {
        "id": 30360,
        "en": "cook",
        "kk": "",
        "zh": "v. 煮",
        "unit": 17,
        "example": "She's an exceptionally good cook.",
        "exampleZh": "她是一位非常出色的廚師。"
    },
    {
        "id": 30361,
        "en": "cookie",
        "kk": "",
        "zh": "n. 點心",
        "unit": 17,
        "example": "Heart-shaped cookie cutters come in many sizes.",
        "exampleZh": "心形餅乾切刀有多種尺寸。"
    },
    {
        "id": 30362,
        "en": "cool",
        "kk": "",
        "zh": "adj. 涼的",
        "unit": 17,
        "example": "She seemed very cool and unemotional.",
        "exampleZh": "她看起來非常冷靜，不帶任何情緒。"
    },
    {
        "id": 30363,
        "en": "copy",
        "kk": "",
        "zh": "v. 複製",
        "unit": 17,
        "example": "Can you copy me in on your report?",
        "exampleZh": ""
    },
    {
        "id": 30364,
        "en": "corn",
        "kk": "",
        "zh": "n. 玉米",
        "unit": 17,
        "example": "She pounded the corn kernels.",
        "exampleZh": "她搗碎了玉米粒。"
    },
    {
        "id": 30365,
        "en": "corner",
        "kk": "",
        "zh": "n. 角落",
        "unit": 17,
        "example": "The referee awarded a corner.",
        "exampleZh": ""
    },
    {
        "id": 30366,
        "en": "correct",
        "kk": "",
        "zh": "adj. 正確的",
        "unit": 17,
        "example": "Only one of the answers is correct.",
        "exampleZh": "只有一個答案是正確的。"
    },
    {
        "id": 30367,
        "en": "cost",
        "kk": "",
        "zh": "v. 花費",
        "unit": 17,
        "example": "Success has cost him dearly.",
        "exampleZh": "成功讓他付出了慘痛的代價。"
    },
    {
        "id": 30368,
        "en": "cotton",
        "kk": "",
        "zh": "n. 棉花",
        "unit": 17,
        "example": "The sheets are 100% pure cotton.",
        "exampleZh": ""
    },
    {
        "id": 30369,
        "en": "couch",
        "kk": "",
        "zh": "n. 長沙發",
        "unit": 17,
        "example": "Linda lay face down on a living room couch, nibbling popcorn.",
        "exampleZh": ""
    },
    {
        "id": 30370,
        "en": "cough",
        "kk": "",
        "zh": "v. 咳嗽",
        "unit": 17,
        "example": "Graham began to cough violently.",
        "exampleZh": ""
    },
    {
        "id": 30371,
        "en": "count",
        "kk": "",
        "zh": "v. 計數",
        "unit": 17,
        "example": "Her father was a Polish count.",
        "exampleZh": "她的父親是波蘭伯爵。"
    },
    {
        "id": 30372,
        "en": "country",
        "kk": "",
        "zh": "n. 國家",
        "unit": 17,
        "example": "I'm a simple country girl.",
        "exampleZh": "我是一個簡單的鄉村女孩。"
    },
    {
        "id": 30373,
        "en": "couple",
        "kk": "",
        "zh": "n. 一對",
        "unit": 17,
        "example": "The couple have no children.",
        "exampleZh": ""
    },
    {
        "id": 30374,
        "en": "courage",
        "kk": "",
        "zh": "n. 勇氣",
        "unit": 17,
        "example": "He showed courage in adversity.",
        "exampleZh": ""
    },
    {
        "id": 30375,
        "en": "course",
        "kk": "",
        "zh": "n. 課程",
        "unit": 17,
        "example": "The course lasts five weeks.",
        "exampleZh": "課程為期五週。"
    },
    {
        "id": 30376,
        "en": "court",
        "kk": "",
        "zh": "n. 法院;球場",
        "unit": 17,
        "example": "The court adjourned for lunch.",
        "exampleZh": ""
    },
    {
        "id": 30377,
        "en": "cousin",
        "kk": "",
        "zh": "n. 表(堂)兄弟姊妹",
        "unit": 17,
        "example": "Eric was my cousin Edward's boy.",
        "exampleZh": ""
    },
    {
        "id": 30378,
        "en": "cover",
        "kk": "",
        "zh": "v. 覆蓋",
        "unit": 17,
        "example": "$100 should cover your expenses.",
        "exampleZh": "100 美元應該可以支付你的開支。"
    },
    {
        "id": 30379,
        "en": "cow",
        "kk": "",
        "zh": "n. 母牛",
        "unit": 17,
        "example": "A mature cow has horns.",
        "exampleZh": "一頭成熟的牛有角。"
    },
    {
        "id": 30380,
        "en": "cowboy",
        "kk": "",
        "zh": "n. 牛仔",
        "unit": 17,
        "example": "He shows up in jeans and cowboy boots.",
        "exampleZh": "他穿著牛仔褲和牛仔靴出現。"
    },
    {
        "id": 30381,
        "en": "crab",
        "kk": "",
        "zh": "n. 螃蟹",
        "unit": 17,
        "example": "I can't remember when I last had crab.",
        "exampleZh": ""
    },
    {
        "id": 30382,
        "en": "crayon",
        "kk": "",
        "zh": "n. 蠟筆",
        "unit": 17,
        "example": "Someone had scribbled all over the table in crayon.",
        "exampleZh": ""
    },
    {
        "id": 30383,
        "en": "crazy",
        "kk": "",
        "zh": "adj. 瘋狂的",
        "unit": 17,
        "example": "We're crazy about each other.",
        "exampleZh": "我們都為彼此瘋狂。"
    },
    {
        "id": 30384,
        "en": "cream",
        "kk": "",
        "zh": "n. 乳液",
        "unit": 17,
        "example": "The sauce is mostly cream.",
        "exampleZh": ""
    },
    {
        "id": 30385,
        "en": "create",
        "kk": "",
        "zh": "v. 創造",
        "unit": 17,
        "example": "We set business free to create more jobs.",
        "exampleZh": "我們放開商業自由，創造更多就業機會。"
    },
    {
        "id": 30386,
        "en": "crime",
        "kk": "",
        "zh": "n. 罪",
        "unit": 17,
        "example": "Crime figures are rising rapidly.",
        "exampleZh": ""
    },
    {
        "id": 30387,
        "en": "cross",
        "kk": "",
        "zh": "v. 穿過",
        "unit": 17,
        "example": "I'm terribly cross with him.",
        "exampleZh": ""
    },
    {
        "id": 30388,
        "en": "crowd",
        "kk": "",
        "zh": "n. 人群",
        "unit": 17,
        "example": "The crowd began throwing stones.",
        "exampleZh": ""
    },
    {
        "id": 30389,
        "en": "cruel",
        "kk": "",
        "zh": "adj. 殘忍的",
        "unit": 17,
        "example": "Her eyes were cruel and hard.",
        "exampleZh": "她的目光殘忍而冷酷。"
    },
    {
        "id": 30390,
        "en": "cry",
        "kk": "",
        "zh": "v. 哭",
        "unit": 17,
        "example": "She let out an anguished cry.",
        "exampleZh": "她發出一聲痛苦的叫聲。"
    },
    {
        "id": 30391,
        "en": "culture",
        "kk": "",
        "zh": "n. 文化",
        "unit": 17,
        "example": "We are living in a consumer culture.",
        "exampleZh": ""
    },
    {
        "id": 30392,
        "en": "cup",
        "kk": "",
        "zh": "n. 杯子",
        "unit": 17,
        "example": "She crumpled up her coffee cup.",
        "exampleZh": "她把咖啡杯弄皺了。"
    },
    {
        "id": 30393,
        "en": "cure",
        "kk": "",
        "zh": "n. 治療",
        "unit": 17,
        "example": "The search for a cure goes on.",
        "exampleZh": ""
    },
    {
        "id": 30394,
        "en": "curious",
        "kk": "",
        "zh": "adj. 好奇的",
        "unit": 17,
        "example": "Steve was intensely curious about the world I came from.",
        "exampleZh": "史蒂夫對我來自的世界非常好奇。"
    },
    {
        "id": 30395,
        "en": "current",
        "kk": "",
        "zh": "adj. 現在的",
        "unit": 17,
        "example": "We were rowing against the current.",
        "exampleZh": ""
    },
    {
        "id": 30396,
        "en": "curtain",
        "kk": "",
        "zh": "n. 窗簾",
        "unit": 17,
        "example": "She pulled the curtain aside.",
        "exampleZh": ""
    },
    {
        "id": 30397,
        "en": "curve",
        "kk": "",
        "zh": "n. 曲線",
        "unit": 17,
        "example": "The slope increases as you go up the curve.",
        "exampleZh": ""
    },
    {
        "id": 30398,
        "en": "custom",
        "kk": "",
        "zh": "n. 習慣",
        "unit": 17,
        "example": "This quaint custom should be revived.",
        "exampleZh": ""
    },
    {
        "id": 30399,
        "en": "customer",
        "kk": "",
        "zh": "v. 顧客",
        "unit": 17,
        "example": "The customer called to cancel.",
        "exampleZh": ""
    },
    {
        "id": 30400,
        "en": "cut",
        "kk": "",
        "zh": "v. 切割",
        "unit": 17,
        "example": "You've had your hair cut!",
        "exampleZh": "你已經剪頭髮了！"
    },
    {
        "id": 30401,
        "en": "cute",
        "kk": "",
        "zh": "adj. 可愛的",
        "unit": 17,
        "example": "Shame, she's so cute!",
        "exampleZh": "可惜了，她太可愛了！"
    },
    {
        "id": 30402,
        "en": "damage",
        "kk": "",
        "zh": "v. 損害",
        "unit": 17,
        "example": "The fire caused extensive damage.",
        "exampleZh": ""
    },
    {
        "id": 30403,
        "en": "dance",
        "kk": "",
        "zh": "v. 跳舞",
        "unit": 17,
        "example": "Come on Doreen, let's dance.",
        "exampleZh": "來吧，多琳，我們跳舞吧。"
    },
    {
        "id": 30404,
        "en": "danger",
        "kk": "",
        "zh": "n. 危險",
        "unit": 17,
        "example": "The red triangle denotes danger.",
        "exampleZh": "紅色三角形表示危險。"
    },
    {
        "id": 30405,
        "en": "dangerous",
        "kk": "",
        "zh": "adj. 危險的",
        "unit": 17,
        "example": "The man is armed and dangerous.",
        "exampleZh": "該男子攜帶武器且危險。"
    },
    {
        "id": 30406,
        "en": "dark",
        "kk": "",
        "zh": "adj. 黑的",
        "unit": 17,
        "example": "We should arrive before dark.",
        "exampleZh": "我們應該在天黑之前到達。"
    },
    {
        "id": 30407,
        "en": "data",
        "kk": "",
        "zh": "n. 資料",
        "unit": 17,
        "example": "He copied the data into a notebook.",
        "exampleZh": ""
    },
    {
        "id": 30408,
        "en": "date",
        "kk": "",
        "zh": "n. 日期",
        "unit": 17,
        "example": "I've got a hot date tonight.",
        "exampleZh": "今晚我有一個熱烈的約會。"
    },
    {
        "id": 30409,
        "en": "daughter",
        "kk": "",
        "zh": "n. 女兒",
        "unit": 17,
        "example": "My daughter is at university.",
        "exampleZh": "我女兒正在讀大學。"
    },
    {
        "id": 30410,
        "en": "dawn",
        "kk": "",
        "zh": "n. 黎明",
        "unit": 17,
        "example": "The troops landed at dawn.",
        "exampleZh": ""
    },
    {
        "id": 30411,
        "en": "day",
        "kk": "",
        "zh": "n. 一天",
        "unit": 17,
        "example": "They're improving day by day.",
        "exampleZh": "他們正在一天天進步。"
    },
    {
        "id": 30412,
        "en": "dead",
        "kk": "",
        "zh": "adj. 死的",
        "unit": 17,
        "example": "Suddenly the phone went dead.",
        "exampleZh": "突然電話沒電了。"
    },
    {
        "id": 30413,
        "en": "deaf",
        "kk": "",
        "zh": "adj. 聾的",
        "unit": 17,
        "example": "The two deaf actors converse solely in signing.",
        "exampleZh": "兩位聾啞演員僅透過手語交談。"
    },
    {
        "id": 30414,
        "en": "deal",
        "kk": "",
        "zh": "n. 交易",
        "unit": 17,
        "example": "They shook on the deal.",
        "exampleZh": "他們對這筆交易感到震驚。"
    },
    {
        "id": 30415,
        "en": "dear",
        "kk": "",
        "zh": "adj. 親愛的",
        "unit": 17,
        "example": "My dear girl, you're wrong.",
        "exampleZh": "我親愛的女孩，你錯了。"
    },
    {
        "id": 30416,
        "en": "death",
        "kk": "",
        "zh": "n. 死亡",
        "unit": 17,
        "example": "Doctors become inured to death.",
        "exampleZh": "醫生已經見怪不怪了。"
    },
    {
        "id": 30417,
        "en": "debate",
        "kk": "",
        "zh": "n. 辯論",
        "unit": 17,
        "example": "Anti-war protesters disrupted the debate.",
        "exampleZh": ""
    },
    {
        "id": 30418,
        "en": "December",
        "kk": "",
        "zh": "n. 十二月",
        "unit": 17,
        "example": "I keep forgetting it's December.",
        "exampleZh": "我總是忘記現在是十二月。"
    },
    {
        "id": 30419,
        "en": "decide",
        "kk": "",
        "zh": "v. 決定",
        "unit": 17,
        "example": "It's up to you to decide.",
        "exampleZh": "由您決定。"
    },
    {
        "id": 30420,
        "en": "decision",
        "kk": "",
        "zh": "n. 決定",
        "unit": 17,
        "example": "It was a collective decision.",
        "exampleZh": ""
    },
    {
        "id": 30421,
        "en": "decorate",
        "kk": "",
        "zh": "v. 裝飾",
        "unit": 17,
        "example": "The boys are planning to decorate when they get the time.",
        "exampleZh": "男孩們計劃一有時間就裝飾一下。"
    },
    {
        "id": 30422,
        "en": "decrease",
        "kk": "",
        "zh": "v. 減少",
        "unit": 17,
        "example": "People should decrease the amount of fat they eat.",
        "exampleZh": ""
    },
    {
        "id": 30423,
        "en": "deep",
        "kk": "",
        "zh": "adj. 深的",
        "unit": 17,
        "example": "He sank into deep melancholia.",
        "exampleZh": "他陷入了深深的憂鬱之中。"
    },
    {
        "id": 30424,
        "en": "deer",
        "kk": "",
        "zh": "n. 鹿",
        "unit": 17,
        "example": "He'd gone deer hunting with his cousins.",
        "exampleZh": "他和他的表兄弟一起去獵鹿。"
    },
    {
        "id": 30425,
        "en": "degree",
        "kk": "",
        "zh": "n. 程度",
        "unit": 17,
        "example": "She's reading for a law degree.",
        "exampleZh": ""
    },
    {
        "id": 30426,
        "en": "delicious",
        "kk": "",
        "zh": "adj. 美味的",
        "unit": 17,
        "example": "He served up a delicious meal.",
        "exampleZh": "他為我們準備了一頓美味的飯菜。"
    },
    {
        "id": 30427,
        "en": "deliver",
        "kk": "",
        "zh": "v. 投遞",
        "unit": 17,
        "example": "We deliver the goods in batches.",
        "exampleZh": "我們分批發貨。"
    },
    {
        "id": 30428,
        "en": "dentist",
        "kk": "",
        "zh": "n. 牙醫",
        "unit": 17,
        "example": "The dentist scaled and polished my teeth.",
        "exampleZh": ""
    },
    {
        "id": 30429,
        "en": "deny",
        "kk": "",
        "zh": "v. 否認",
        "unit": 17,
        "example": "My instinctive reaction was to deny everything.",
        "exampleZh": "我的本能反應是否認一切。"
    },
    {
        "id": 30430,
        "en": "department",
        "kk": "",
        "zh": "n. 部門",
        "unit": 17,
        "example": "He moved to the sales department.",
        "exampleZh": ""
    },
    {
        "id": 30431,
        "en": "depend",
        "kk": "",
        "zh": "v. 依賴",
        "unit": 17,
        "example": "Wage rates depend on levels of productivity.",
        "exampleZh": "工資率取決於生產力水準。"
    },
    {
        "id": 30432,
        "en": "describe",
        "kk": "",
        "zh": "v. 描述",
        "unit": 17,
        "example": "Can you describe him to me?",
        "exampleZh": "你能給我描述一下他嗎？"
    },
    {
        "id": 30433,
        "en": "desert",
        "kk": "",
        "zh": "n. 沙漠",
        "unit": 17,
        "example": "The heat in the desert was extreme.",
        "exampleZh": ""
    },
    {
        "id": 30434,
        "en": "design",
        "kk": "",
        "zh": "v. 設計",
        "unit": 17,
        "example": "She's good at art and design.",
        "exampleZh": ""
    },
    {
        "id": 30435,
        "en": "desire",
        "kk": "",
        "zh": "n. 慾望",
        "unit": 17,
        "example": "We all desire health and happiness.",
        "exampleZh": ""
    },
    {
        "id": 30436,
        "en": "desk",
        "kk": "",
        "zh": "n. 書桌",
        "unit": 17,
        "example": "A phone trilled on the desk.",
        "exampleZh": "桌上的電話響起。"
    },
    {
        "id": 30437,
        "en": "dessert",
        "kk": "",
        "zh": "n. 甜點",
        "unit": 17,
        "example": "I was tempted by the dessert menu.",
        "exampleZh": ""
    },
    {
        "id": 30438,
        "en": "detect",
        "kk": "",
        "zh": "v. 查出",
        "unit": 17,
        "example": "Arnold could detect a certain sadness in the old man's face.",
        "exampleZh": "阿諾德可以從老人的臉上看出某種悲傷。"
    },
    {
        "id": 30439,
        "en": "develop",
        "kk": "",
        "zh": "v. 發展",
        "unit": 17,
        "example": "How fast would the disease develop?",
        "exampleZh": "這種疾病的發展速度有多快？"
    },
    {
        "id": 30440,
        "en": "dial",
        "kk": "",
        "zh": "v. 撥電話",
        "unit": 17,
        "example": "Broadband is still more expensive than dial-up services.",
        "exampleZh": ""
    },
    {
        "id": 30441,
        "en": "diamond",
        "kk": "",
        "zh": "n. 鑽石",
        "unit": 17,
        "example": "The diamond is mounted in gold.",
        "exampleZh": ""
    },
    {
        "id": 30442,
        "en": "diary",
        "kk": "",
        "zh": "n. 日記",
        "unit": 17,
        "example": "Eleanor began to keep a diary.",
        "exampleZh": ""
    },
    {
        "id": 30443,
        "en": "dictionary",
        "kk": "",
        "zh": "n. 字典",
        "unit": 17,
        "example": "Can you suggest a good dictionary?",
        "exampleZh": ""
    },
    {
        "id": 30444,
        "en": "die",
        "kk": "",
        "zh": "v. 死",
        "unit": 17,
        "example": "I thought I'd die laughing.",
        "exampleZh": "我以為我會笑死。"
    },
    {
        "id": 30445,
        "en": "diet",
        "kk": "",
        "zh": "n. 飲食",
        "unit": 17,
        "example": "Sugar is ubiquitous in the diet.",
        "exampleZh": ""
    },
    {
        "id": 30446,
        "en": "difference",
        "kk": "",
        "zh": "n. 差異",
        "unit": 17,
        "example": "Few people understand the difference.",
        "exampleZh": ""
    },
    {
        "id": 30447,
        "en": "different",
        "kk": "",
        "zh": "adj. 不同的",
        "unit": 17,
        "example": "Different countries specialized in different products.",
        "exampleZh": "不同的國家專門生產不同的產品。"
    },
    {
        "id": 30448,
        "en": "difficult",
        "kk": "",
        "zh": "adj. 困難的",
        "unit": 17,
        "example": "The exam was quite difficult.",
        "exampleZh": "考試相當難。"
    },
    {
        "id": 30449,
        "en": "difficulty",
        "kk": "",
        "zh": "n. 困難",
        "unit": 17,
        "example": "Do you have difficulty getting up?",
        "exampleZh": ""
    },
    {
        "id": 30450,
        "en": "dig",
        "kk": "",
        "zh": "v. 挖掘",
        "unit": 17,
        "example": "I'll dig some potatoes for lunch.",
        "exampleZh": "我會挖一些馬鈴薯當午餐。"
    },
    {
        "id": 30451,
        "en": "diligent",
        "kk": "",
        "zh": "adj. 勤勉的",
        "unit": 17,
        "example": "Meyers is a diligent and prolific worker.",
        "exampleZh": ""
    },
    {
        "id": 30452,
        "en": "diplomat",
        "kk": "",
        "zh": "n. 外交官",
        "unit": 17,
        "example": "Fearey had all the charm and urbanity of the trained diplomat.",
        "exampleZh": ""
    },
    {
        "id": 30453,
        "en": "dinner",
        "kk": "",
        "zh": "n. 晚餐",
        "unit": 17,
        "example": "Dinner was in two sittings.",
        "exampleZh": "晚餐分兩次進行。"
    },
    {
        "id": 30454,
        "en": "dinosaur",
        "kk": "",
        "zh": "n. 恐龍",
        "unit": 17,
        "example": "'Dinosaur' combines CGI animation with live-action location shots.",
        "exampleZh": ""
    },
    {
        "id": 30455,
        "en": "direct",
        "kk": "",
        "zh": "adj. 直的",
        "unit": 17,
        "example": "Christopher will direct day-to-day operations.",
        "exampleZh": "克里斯托弗將指導日常運作。"
    },
    {
        "id": 30456,
        "en": "direction",
        "kk": "",
        "zh": "n. 方向",
        "unit": 17,
        "example": "Which direction are you facing?",
        "exampleZh": ""
    },
    {
        "id": 30457,
        "en": "dirty",
        "kk": "",
        "zh": "adj. 骯髒的",
        "unit": 17,
        "example": "Don't get your dress dirty!",
        "exampleZh": "別弄髒你的衣服！"
    },
    {
        "id": 30458,
        "en": "disagree",
        "kk": "",
        "zh": "v. 不同意",
        "unit": 17,
        "example": "'I disagree,' said Polly stoutly.",
        "exampleZh": "「我不同意，」波莉堅決地說。"
    },
    {
        "id": 30459,
        "en": "disappear",
        "kk": "",
        "zh": "v. 消失",
        "unit": 17,
        "example": "They watched the bus disappear into the distance.",
        "exampleZh": "他們看著公車消失在遠方。"
    },
    {
        "id": 30460,
        "en": "discover",
        "kk": "",
        "zh": "v. 發現",
        "unit": 17,
        "example": "It's exciting to discover traces of earlier civilizations.",
        "exampleZh": "發現早期文明的痕跡是令人興奮的。"
    },
    {
        "id": 30461,
        "en": "discuss",
        "kk": "",
        "zh": "v. 討論",
        "unit": 17,
        "example": "They had important matters to discuss.",
        "exampleZh": "他們有重要的事情要討論。"
    },
    {
        "id": 30462,
        "en": "discussion",
        "kk": "",
        "zh": "n. 討論",
        "unit": 17,
        "example": "The time for discussion is past.",
        "exampleZh": ""
    },
    {
        "id": 30463,
        "en": "dish",
        "kk": "",
        "zh": "n. 盤子",
        "unit": 17,
        "example": "It lapped milk from a dish.",
        "exampleZh": "它從盤子裡舔牛奶。"
    },
    {
        "id": 30464,
        "en": "dishonest",
        "kk": "",
        "zh": "adj. 不誠實的",
        "unit": 17,
        "example": "he was a dishonest hypocrite prepared to exploit his family.",
        "exampleZh": "他是一個不誠實的偽君子，準備利用他的家人。"
    },
    {
        "id": 30465,
        "en": "distance",
        "kk": "",
        "zh": "n. 距離",
        "unit": 17,
        "example": "Mountains rose in the distance.",
        "exampleZh": ""
    },
    {
        "id": 30466,
        "en": "distant",
        "kk": "",
        "zh": "adj. 遠的",
        "unit": 17,
        "example": "He's a distant cousin of mine.",
        "exampleZh": "他是我的遠房表弟。"
    },
    {
        "id": 30467,
        "en": "divide",
        "kk": "",
        "zh": "v. 分割",
        "unit": 17,
        "example": "The cells began to divide rapidly.",
        "exampleZh": ""
    },
    {
        "id": 30468,
        "en": "dizzy",
        "kk": "",
        "zh": "adj. 頭暈的",
        "unit": 17,
        "example": "She felt dizzy and nauseous.",
        "exampleZh": "她感到頭暈、噁心。"
    },
    {
        "id": 30469,
        "en": "doctor",
        "kk": "",
        "zh": "n. 醫生",
        "unit": 17,
        "example": "The doctor tested her reflexes.",
        "exampleZh": ""
    },
    {
        "id": 30470,
        "en": "dog",
        "kk": "",
        "zh": "n. 狗",
        "unit": 17,
        "example": "The dog refused to budge.",
        "exampleZh": "狗狗拒絕讓步。"
    },
    {
        "id": 30471,
        "en": "doll",
        "kk": "",
        "zh": "n. 洋娃娃",
        "unit": 17,
        "example": "The child was clutching a doll in her hand.",
        "exampleZh": "孩子手裡拿著一個洋娃娃。"
    },
    {
        "id": 30472,
        "en": "dollar",
        "kk": "",
        "zh": "n. 元",
        "unit": 17,
        "example": "The dollar continued to slide.",
        "exampleZh": "美元繼續下滑。"
    },
    {
        "id": 30473,
        "en": "dolphin",
        "kk": "",
        "zh": "n. 海豚",
        "unit": 17,
        "example": "The dolphin is an intelligent animal.",
        "exampleZh": ""
    },
    {
        "id": 30474,
        "en": "donkey",
        "kk": "",
        "zh": "n. 驢",
        "unit": 17,
        "example": "The donkey brayed and tried to bolt.",
        "exampleZh": ""
    },
    {
        "id": 30475,
        "en": "door",
        "kk": "",
        "zh": "n. 門",
        "unit": 17,
        "example": "The door opens outwards.",
        "exampleZh": "門向外打開。"
    },
    {
        "id": 30476,
        "en": "dot",
        "kk": "",
        "zh": "n. 點",
        "unit": 17,
        "example": "The weaker dot-coms have collapsed.",
        "exampleZh": ""
    },
    {
        "id": 30477,
        "en": "double",
        "kk": "",
        "zh": "v. 加倍",
        "unit": 17,
        "example": "He served 17 double faults.",
        "exampleZh": ""
    },
    {
        "id": 30478,
        "en": "doubt",
        "kk": "",
        "zh": "v. 懷疑",
        "unit": 17,
        "example": "There was little doubt in my mind.",
        "exampleZh": ""
    },
    {
        "id": 30479,
        "en": "doughnut",
        "kk": "",
        "zh": "n. 甜甜圈",
        "unit": 17,
        "example": "Don't you like a doughnut?",
        "exampleZh": ""
    },
    {
        "id": 30480,
        "en": "dove",
        "kk": "",
        "zh": "n. 鴿子",
        "unit": 17,
        "example": "He wore a dove-grey suit.",
        "exampleZh": "他穿著一套鴿灰色的西裝。"
    },
    {
        "id": 30481,
        "en": "down",
        "kk": "",
        "zh": "adv. 向下",
        "unit": 17,
        "example": "He crouched down beside her.",
        "exampleZh": "他在她身邊蹲下。"
    },
    {
        "id": 30482,
        "en": "downstairs",
        "kk": "",
        "zh": "adv. 在樓下",
        "unit": 17,
        "example": "Denise went downstairs and made some tea.",
        "exampleZh": "丹妮絲下樓泡了茶。"
    },
    {
        "id": 30483,
        "en": "downtown",
        "kk": "",
        "zh": "n. 商業區",
        "unit": 17,
        "example": "Parking can be tricky downtown.",
        "exampleZh": ""
    },
    {
        "id": 30484,
        "en": "dozen",
        "kk": "",
        "zh": "n. (一)打",
        "unit": 17,
        "example": "Packages arrived by the dozen from America.",
        "exampleZh": "幾十個包裹從美國運來。"
    },
    {
        "id": 30485,
        "en": "drag",
        "kk": "",
        "zh": "v. 拖",
        "unit": 17,
        "example": "Walking's a drag—let's drive there.",
        "exampleZh": ""
    },
    {
        "id": 30486,
        "en": "dragon",
        "kk": "",
        "zh": "n. 龍",
        "unit": 17,
        "example": "The dragon is a blue dragon.",
        "exampleZh": ""
    },
    {
        "id": 30487,
        "en": "drama",
        "kk": "",
        "zh": "n. 戲劇",
        "unit": 17,
        "example": "He knew nothing of Greek drama.",
        "exampleZh": ""
    },
    {
        "id": 30488,
        "en": "draw",
        "kk": "",
        "zh": "v. 拉",
        "unit": 17,
        "example": "They managed an honourable 2–2 draw.",
        "exampleZh": "他們打了一場光榮的2-2平手。"
    },
    {
        "id": 30489,
        "en": "drawer",
        "kk": "",
        "zh": "n. 抽屜",
        "unit": 17,
        "example": "She yanked open the drawer.",
        "exampleZh": ""
    },
    {
        "id": 30490,
        "en": "dream",
        "kk": "",
        "zh": "n. 夢",
        "unit": 17,
        "example": "He finally actualized his dream.",
        "exampleZh": "他終於實現了他的夢想。"
    },
    {
        "id": 30491,
        "en": "dress",
        "kk": "",
        "zh": "n. 洋裝",
        "unit": 17,
        "example": "For lunch, dress is informal.",
        "exampleZh": ""
    },
    {
        "id": 30492,
        "en": "drink",
        "kk": "",
        "zh": "v. 喝",
        "unit": 17,
        "example": "This drink tastes like sherry.",
        "exampleZh": "這種飲料嘗起來像雪利酒。"
    },
    {
        "id": 30493,
        "en": "drive",
        "kk": "",
        "zh": "v. 開車",
        "unit": 17,
        "example": "You shouldn't drive so fast.",
        "exampleZh": "你不應該開這麼快。"
    },
    {
        "id": 30494,
        "en": "driver",
        "kk": "",
        "zh": "n. 駕駛人",
        "unit": 17,
        "example": "The driver suffered head injuries.",
        "exampleZh": "司機頭部受傷。"
    },
    {
        "id": 30495,
        "en": "drop",
        "kk": "",
        "zh": "v. 落下",
        "unit": 17,
        "example": "Temperatures can drop to freezing at night.",
        "exampleZh": ""
    },
    {
        "id": 30496,
        "en": "drug",
        "kk": "",
        "zh": "n. 藥;毒品",
        "unit": 17,
        "example": "The new drug was ineffective.",
        "exampleZh": ""
    },
    {
        "id": 30497,
        "en": "drum",
        "kk": "",
        "zh": "n. 鼓",
        "unit": 17,
        "example": "When you beat the drum, you feel good.",
        "exampleZh": ""
    },
    {
        "id": 30498,
        "en": "dry",
        "kk": "",
        "zh": "adj. 乾的",
        "unit": 17,
        "example": "My mouth felt completely dry.",
        "exampleZh": "我感覺口乾舌燥。"
    },
    {
        "id": 30499,
        "en": "dryer",
        "kk": "",
        "zh": "n. 烘乾機",
        "unit": 17,
        "example": "Do you have a hair dryer?",
        "exampleZh": ""
    },
    {
        "id": 30500,
        "en": "duck",
        "kk": "",
        "zh": "n. 鴨子",
        "unit": 17,
        "example": "The main course was roast duck.",
        "exampleZh": "主菜是烤鴨。"
    },
    {
        "id": 30501,
        "en": "dumb",
        "kk": "",
        "zh": "adj. 笨的;啞的",
        "unit": 17,
        "example": "That was a pretty dumb thing to do.",
        "exampleZh": "這是一件非常愚蠢的事。"
    },
    {
        "id": 30502,
        "en": "dumpling",
        "kk": "",
        "zh": "n. 餃子",
        "unit": 17,
        "example": "My favorite food is dumpling.",
        "exampleZh": ""
    },
    {
        "id": 30503,
        "en": "during",
        "kk": "",
        "zh": "prep. 在...期間",
        "unit": 17,
        "example": "Eggs were rationed during the war.",
        "exampleZh": "戰爭期間雞蛋實施配給制。"
    },
    {
        "id": 30504,
        "en": "duty",
        "kk": "",
        "zh": "n. 義務",
        "unit": 17,
        "example": "He was recalled to military duty.",
        "exampleZh": ""
    },
    {
        "id": 30505,
        "en": "each",
        "kk": "/iːtʃ/",
        "zh": "adj. 每個",
        "unit": 17,
        "example": "We're crazy about each other.",
        "exampleZh": "我們都為彼此瘋狂。"
    },
    {
        "id": 30506,
        "en": "eagle",
        "kk": "",
        "zh": "n. 老鷹",
        "unit": 17,
        "example": "An eagle circled high overhead.",
        "exampleZh": "一隻鷹在頭頂高空盤旋。"
    },
    {
        "id": 30507,
        "en": "ear",
        "kk": "/ɪr/",
        "zh": "n. 耳朵",
        "unit": 17,
        "example": "He tweaked Guy's ear roughly.",
        "exampleZh": "他粗暴地扭動蓋伊的耳朵。"
    },
    {
        "id": 30508,
        "en": "early",
        "kk": "/ˈɜːrli/",
        "zh": "adj. 早的",
        "unit": 17,
        "example": "We didn't leave early enough.",
        "exampleZh": "我們離開得不夠早。"
    },
    {
        "id": 30509,
        "en": "earn",
        "kk": "/ɜːrn/",
        "zh": "v. 獲得",
        "unit": 17,
        "example": "'How much (money) does she earn?",
        "exampleZh": "“她賺多少錢？”"
    },
    {
        "id": 30510,
        "en": "earring",
        "kk": "",
        "zh": "n. 耳環",
        "unit": 17,
        "example": "I've lost an earring and it was an expensive one.",
        "exampleZh": ""
    },
    {
        "id": 30511,
        "en": "earth",
        "kk": "/ɜːrθ/",
        "zh": "n. 地球",
        "unit": 17,
        "example": "The Earth orbits in an ellipse.",
        "exampleZh": "地球繞橢圓軌道運行。"
    },
    {
        "id": 30512,
        "en": "ease",
        "kk": "/iːz/",
        "zh": "v. 放鬆",
        "unit": 17,
        "example": "This should help ease the pain.",
        "exampleZh": "這應該有助於減輕疼痛。"
    },
    {
        "id": 30513,
        "en": "east",
        "kk": "/iːst/",
        "zh": "n. 東方",
        "unit": 17,
        "example": "They live on the east coast.",
        "exampleZh": "他們住在東海岸。"
    },
    {
        "id": 30514,
        "en": "eastern",
        "kk": "/ˈiːstərn/",
        "zh": "adj. 東方的",
        "unit": 17,
        "example": "The wild card in the picture is eastern Europe.",
        "exampleZh": "圖中的通配符是東歐。"
    },
    {
        "id": 30515,
        "en": "easy",
        "kk": "/ˈiːzi/",
        "zh": "adj. 容易的",
        "unit": 17,
        "example": "The problem is anything but easy.",
        "exampleZh": "問題絕非易事。"
    },
    {
        "id": 30516,
        "en": "eat",
        "kk": "/iːt/",
        "zh": "v. 吃",
        "unit": 17,
        "example": "She began to eat ravenously.",
        "exampleZh": "她開始狼吞虎嚥地吃東西。"
    },
    {
        "id": 30517,
        "en": "edge",
        "kk": "/edʒ/",
        "zh": "n. 邊緣",
        "unit": 17,
        "example": "Be careful—it has a sharp edge.",
        "exampleZh": "小心——它有鋒利的邊緣。"
    },
    {
        "id": 30518,
        "en": "education",
        "kk": "/ˌedʒuˈkeɪʃn/",
        "zh": "n. 教育",
        "unit": 17,
        "example": "Education is a top priority.",
        "exampleZh": ""
    },
    {
        "id": 30519,
        "en": "effect",
        "kk": "/ɪˈfekt/",
        "zh": "n. 影響",
        "unit": 17,
        "example": "The effect has proved hard to reproduce.",
        "exampleZh": ""
    },
    {
        "id": 30520,
        "en": "effort",
        "kk": "/ˈefərt/",
        "zh": "n. 努力",
        "unit": 17,
        "example": "You should put more effort into your work.",
        "exampleZh": ""
    },
    {
        "id": 30521,
        "en": "egg",
        "kk": "/eɡ/",
        "zh": "n. 蛋",
        "unit": 17,
        "example": "Brush beaten egg over the pastry.",
        "exampleZh": "在糕點上刷上打好的蛋。"
    },
    {
        "id": 30522,
        "en": "eight",
        "kk": "/eɪt/",
        "zh": "n. 八",
        "unit": 17,
        "example": "The cut needed eight stitches.",
        "exampleZh": "傷口需要縫八針。"
    },
    {
        "id": 30523,
        "en": "eighteen",
        "kk": "/ˌeɪˈtiːn/",
        "zh": "n. 十八",
        "unit": 17,
        "example": "His boat is an eighteen-footer.",
        "exampleZh": ""
    },
    {
        "id": 30524,
        "en": "eighty",
        "kk": "/ˈeɪti/",
        "zh": "n. 八十",
        "unit": 17,
        "example": "He's getting on for eighty.",
        "exampleZh": "他已經八十歲了。"
    },
    {
        "id": 30525,
        "en": "either",
        "kk": "/ˈiːðər/",
        "zh": "prop. (兩者中)任何一個",
        "unit": 17,
        "example": "Pete can't go and I can't either.",
        "exampleZh": "皮特不能去，我也不能。"
    },
    {
        "id": 30526,
        "en": "elder",
        "kk": "",
        "zh": "adj. 年長的",
        "unit": 17,
        "example": "He is her elder by several years.",
        "exampleZh": ""
    },
    {
        "id": 30527,
        "en": "elect",
        "kk": "",
        "zh": "v. 選出",
        "unit": 17,
        "example": "The committee voted to re-elect him (as) chairman.",
        "exampleZh": "委員會投票選舉他再次擔任主席。"
    },
    {
        "id": 30528,
        "en": "elephant",
        "kk": "",
        "zh": "n. 大象",
        "unit": 17,
        "example": "The elephant flapped its ears.",
        "exampleZh": "大象拍打著耳朵。"
    },
    {
        "id": 30529,
        "en": "eleven",
        "kk": "/ɪˈlevn/",
        "zh": "n. 十一",
        "unit": 17,
        "example": "Charles I ruled for eleven years.",
        "exampleZh": "查理一世統治十一年。"
    },
    {
        "id": 30530,
        "en": "electric",
        "kk": "/ɪˈlektrɪk/",
        "zh": "adj. 電的",
        "unit": 17,
        "example": "He invented the first electric clock.",
        "exampleZh": ""
    },
    {
        "id": 30531,
        "en": "else",
        "kk": "/els/",
        "zh": "adv. 其他",
        "unit": 17,
        "example": "Everyone else was getting sloshed.",
        "exampleZh": "其他人都喝得酩酊大醉。"
    },
    {
        "id": 30532,
        "en": "embarrass",
        "kk": "",
        "zh": "v. 使尷尬",
        "unit": 17,
        "example": "When you embarrass me, I'll tell you.",
        "exampleZh": ""
    },
    {
        "id": 30533,
        "en": "emotion",
        "kk": "/ɪˈmoʊʃn/",
        "zh": "n. 情緒",
        "unit": 17,
        "example": "Jealousy is a primal emotion.",
        "exampleZh": ""
    },
    {
        "id": 30534,
        "en": "emphasize",
        "kk": "",
        "zh": "v. 強調",
        "unit": 17,
        "example": "He flourished the glass to emphasize the point.",
        "exampleZh": ""
    },
    {
        "id": 30535,
        "en": "employ",
        "kk": "/ɪmˈplɔɪ/",
        "zh": "v. 雇用",
        "unit": 17,
        "example": "How many people does the company employ?",
        "exampleZh": ""
    },
    {
        "id": 30536,
        "en": "empty",
        "kk": "/ˈempti/",
        "zh": "adj. 空的",
        "unit": 17,
        "example": "The nation's coffers are empty.",
        "exampleZh": ""
    },
    {
        "id": 30537,
        "en": "end",
        "kk": "/end/",
        "zh": "v. 結束",
        "unit": 17,
        "example": "Waitressing was a dead-end job.",
        "exampleZh": "服務生是一份沒有出路的工作。"
    },
    {
        "id": 30538,
        "en": "enemy",
        "kk": "/ˈenəmi/",
        "zh": "n. 敵人",
        "unit": 17,
        "example": "They retreated before the enemy.",
        "exampleZh": ""
    },
    {
        "id": 30539,
        "en": "energetic",
        "kk": "",
        "zh": "adj. 精力充沛的",
        "unit": 17,
        "example": "He was hardworking and energetic.",
        "exampleZh": ""
    },
    {
        "id": 30540,
        "en": "energy",
        "kk": "/ˈenərdʒi/",
        "zh": "n. 精力",
        "unit": 17,
        "example": "She's always full of energy.",
        "exampleZh": ""
    },
    {
        "id": 30541,
        "en": "engine",
        "kk": "/ˈendʒɪn/",
        "zh": "n. 引擎",
        "unit": 17,
        "example": "The engine spluttered and died.",
        "exampleZh": ""
    },
    {
        "id": 30542,
        "en": "engineer",
        "kk": "/ˌendʒɪˈnɪr/",
        "zh": "n. 工程師",
        "unit": 17,
        "example": "His father meant him to be an engineer.",
        "exampleZh": ""
    },
    {
        "id": 30543,
        "en": "enjoy",
        "kk": "/ɪnˈdʒɔɪ/",
        "zh": "v. 享受",
        "unit": 17,
        "example": "You're going to enjoy this.",
        "exampleZh": "你會喜歡這個的。"
    },
    {
        "id": 30544,
        "en": "enough",
        "kk": "/ɪˈnʌf/",
        "zh": "adj. 足夠的",
        "unit": 17,
        "example": "Six bottles should be enough.",
        "exampleZh": "六瓶應該夠了。"
    },
    {
        "id": 30545,
        "en": "enter",
        "kk": "/ˈentər/",
        "zh": "v. 進入",
        "unit": 17,
        "example": "The sentry would not let her enter.",
        "exampleZh": "哨兵不讓她進去。"
    },
    {
        "id": 30546,
        "en": "entrance",
        "kk": "",
        "zh": "n. 入口",
        "unit": 17,
        "example": "This entrance is in constant use.",
        "exampleZh": ""
    },
    {
        "id": 30547,
        "en": "envelope",
        "kk": "",
        "zh": "n. 信封",
        "unit": 17,
        "example": "She opened the perfumed envelope.",
        "exampleZh": ""
    },
    {
        "id": 30548,
        "en": "environment",
        "kk": "/ɪnˈvaɪrənmənt/",
        "zh": "n. 自然環境",
        "unit": 17,
        "example": "Children need a caring environment.",
        "exampleZh": ""
    },
    {
        "id": 30549,
        "en": "envy",
        "kk": "",
        "zh": "v. 忌妒",
        "unit": 17,
        "example": "I don't envy her that job.",
        "exampleZh": ""
    },
    {
        "id": 30550,
        "en": "equal",
        "kk": "/ˈiːkwəl/",
        "zh": "adj. 相等的",
        "unit": 17,
        "example": "We are equal in every way.",
        "exampleZh": "我們在各方面都是平等的。"
    },
    {
        "id": 30551,
        "en": "eraser",
        "kk": "",
        "zh": "n. 橡皮擦",
        "unit": 17,
        "example": "I hide the eraser in her boot.",
        "exampleZh": ""
    },
    {
        "id": 30552,
        "en": "error",
        "kk": "/ˈerər/",
        "zh": "n. 錯誤",
        "unit": 17,
        "example": "Vicenzo failed to spot the error.",
        "exampleZh": ""
    },
    {
        "id": 30553,
        "en": "especially",
        "kk": "/ɪˈspeʃəli/",
        "zh": "adv. 特別地",
        "unit": 17,
        "example": "I especially like sweet things.",
        "exampleZh": "我特別喜歡甜的東西。"
    },
    {
        "id": 30554,
        "en": "eve",
        "kk": "",
        "zh": "n. 前夕",
        "unit": 17,
        "example": "Richard had turned up on Christmas Eve with Tony.",
        "exampleZh": ""
    },
    {
        "id": 30555,
        "en": "even",
        "kk": "/ˈiːvən/",
        "zh": "adv. 甚至",
        "unit": 17,
        "example": "She can't even change a nappy.",
        "exampleZh": "她連尿布都不會換。"
    },
    {
        "id": 30556,
        "en": "evening",
        "kk": "/ˈiːvnɪŋ/",
        "zh": "n. 傍晚",
        "unit": 17,
        "example": "I'll see you tomorrow evening.",
        "exampleZh": "明天晚上見。"
    },
    {
        "id": 30557,
        "en": "event",
        "kk": "/ɪˈvent/",
        "zh": "n. 事件",
        "unit": 17,
        "example": "The event was voted a great success.",
        "exampleZh": ""
    },
    {
        "id": 30558,
        "en": "ever",
        "kk": "/ˈevər/",
        "zh": "adv. 從來",
        "unit": 17,
        "example": "It's raining worse than ever.",
        "exampleZh": "雨比以前下得更大了。"
    },
    {
        "id": 30559,
        "en": "every",
        "kk": "/ˈevri/",
        "zh": "adj. 每個",
        "unit": 17,
        "example": "Elections take place every year.",
        "exampleZh": "選舉每年舉行。"
    },
    {
        "id": 30560,
        "en": "evil",
        "kk": "",
        "zh": "n. 惡魔",
        "unit": 17,
        "example": "Good and evil may co-exist within one family.",
        "exampleZh": ""
    },
    {
        "id": 30561,
        "en": "exact",
        "kk": "/ɪɡˈzækt/",
        "zh": "adj. 正確的",
        "unit": 17,
        "example": "I don't remember the exact words.",
        "exampleZh": "我不記得確切的詞了。"
    },
    {
        "id": 30562,
        "en": "exam",
        "kk": "",
        "zh": "n. 考試",
        "unit": 17,
        "example": "He passed the exam with ease.",
        "exampleZh": "他輕鬆地通過了考試。"
    },
    {
        "id": 30563,
        "en": "example",
        "kk": "/ɪɡˈzæmpl/",
        "zh": "n. 例子",
        "unit": 17,
        "example": "Let me give you an example.",
        "exampleZh": "讓我舉個例子。"
    },
    {
        "id": 30564,
        "en": "excellent",
        "kk": "/ˈeksələnt/",
        "zh": "adj. 優秀的",
        "unit": 17,
        "example": "Her musicianship is excellent.",
        "exampleZh": "她的音樂才華非常出色。"
    },
    {
        "id": 30565,
        "en": "except",
        "kk": "/ɪkˈsept/",
        "zh": "prep. 除...之外",
        "unit": 17,
        "example": "They all came except Matt.",
        "exampleZh": "除了馬特之外，他們都來了。"
    },
    {
        "id": 30566,
        "en": "excite",
        "kk": "",
        "zh": "v. 使...興奮",
        "unit": 17,
        "example": "Daniel's early exposure to motor racing did not excite his interest.",
        "exampleZh": "丹尼爾早期接觸賽車運動並沒有激發他的興趣。"
    },
    {
        "id": 30567,
        "en": "excuse",
        "kk": "/ɪkˈskjuːs/",
        "zh": "v. 原諒",
        "unit": 17,
        "example": "She served up the usual excuse.",
        "exampleZh": ""
    },
    {
        "id": 30568,
        "en": "exercise",
        "kk": "/ˈeksərsaɪz/",
        "zh": "n. 運動",
        "unit": 17,
        "example": "Do you take regular exercise?",
        "exampleZh": ""
    },
    {
        "id": 30569,
        "en": "exist",
        "kk": "/ɪɡˈzɪst/",
        "zh": "v. 存在",
        "unit": 17,
        "example": "Many possible orderings may exist.",
        "exampleZh": "可能存在許多可能的排序。"
    },
    {
        "id": 30570,
        "en": "exit",
        "kk": "/ˈeɡzɪt/",
        "zh": "n. 出口",
        "unit": 17,
        "example": "There was a stampede for the exit.",
        "exampleZh": ""
    },
    {
        "id": 30571,
        "en": "expect",
        "kk": "/ɪkˈspekt/",
        "zh": "v. 期望",
        "unit": 17,
        "example": "Don't expect it to improve overnight.",
        "exampleZh": "不要指望它會在一夜之間有所改善。"
    },
    {
        "id": 30572,
        "en": "expensive",
        "kk": "/ɪkˈspensɪv/",
        "zh": "adj. 昂貴的",
        "unit": 17,
        "example": "Food was scarce and expensive.",
        "exampleZh": "食物稀缺且昂貴。"
    },
    {
        "id": 30573,
        "en": "experience",
        "kk": "/ɪkˈspɪriəns/",
        "zh": "n. 經驗",
        "unit": 17,
        "example": "It was a cathartic experience.",
        "exampleZh": ""
    },
    {
        "id": 30574,
        "en": "explain",
        "kk": "/ɪkˈspleɪn/",
        "zh": "v. 說明",
        "unit": 17,
        "example": "It's pretty hard to explain.",
        "exampleZh": "這很難解釋。"
    },
    {
        "id": 30575,
        "en": "express",
        "kk": "/ɪkˈspres/",
        "zh": "v. 表達",
        "unit": 17,
        "example": "Words cannot express how pleased I am.",
        "exampleZh": ""
    },
    {
        "id": 30576,
        "en": "extra",
        "kk": "/ˈekstrə/",
        "zh": "adj. 額外的",
        "unit": 17,
        "example": "Running shoes have extra cushioning.",
        "exampleZh": ""
    },
    {
        "id": 30577,
        "en": "eye",
        "kk": "/aɪ/",
        "zh": "n. 眼睛",
        "unit": 17,
        "example": "The film has a painterly eye.",
        "exampleZh": "這部電影有著繪畫般的眼光。"
    },
    {
        "id": 30578,
        "en": "eyebrow",
        "kk": "",
        "zh": "n. 眉毛",
        "unit": 17,
        "example": "She raised a questioning eyebrow.",
        "exampleZh": ""
    },
    {
        "id": 30579,
        "en": "face",
        "kk": "/feɪs/",
        "zh": "n. 臉",
        "unit": 17,
        "example": "Her eyes flicked from face to face.",
        "exampleZh": "她的目光從一張臉掃到另一張臉。"
    },
    {
        "id": 30580,
        "en": "fact",
        "kk": "/fækt/",
        "zh": "n. 事實",
        "unit": 17,
        "example": "Her argument was grounded in fact.",
        "exampleZh": "她的論點是有事實根據的。"
    },
    {
        "id": 30581,
        "en": "factory",
        "kk": "/ˈfæktəri/",
        "zh": "n. 工廠",
        "unit": 17,
        "example": "Striking workers picketed the factory.",
        "exampleZh": "罷工的工人在工廠設置了糾察線。"
    },
    {
        "id": 30582,
        "en": "fail",
        "kk": "/feɪl/",
        "zh": "v. 失敗",
        "unit": 17,
        "example": "He won't allow himself to fail.",
        "exampleZh": ""
    },
    {
        "id": 30583,
        "en": "fair",
        "kk": "/fer/",
        "zh": "adj. 公平的",
        "unit": 17,
        "example": "The punishment was very fair.",
        "exampleZh": ""
    },
    {
        "id": 30584,
        "en": "fall",
        "kk": "/fɔːl/",
        "zh": "v. 倒下",
        "unit": 17,
        "example": "Output will fall by 6%.",
        "exampleZh": "產量將下降6%。"
    },
    {
        "id": 30585,
        "en": "false",
        "kk": "/fɔːls/",
        "zh": "adj. 錯的",
        "unit": 17,
        "example": "The thief used a false identity.",
        "exampleZh": "小偷使用了虛假身分。"
    },
    {
        "id": 30586,
        "en": "family",
        "kk": "/ˈfæməli/",
        "zh": "n. 家",
        "unit": 17,
        "example": "They were an insular family.",
        "exampleZh": "他們是一個與世隔絕的家庭。"
    },
    {
        "id": 30587,
        "en": "famous",
        "kk": "/ˈfeɪməs/",
        "zh": "adj. 著名的",
        "unit": 17,
        "example": "Some day he'll be famous.",
        "exampleZh": "總有一天他會出名的。"
    },
    {
        "id": 30588,
        "en": "fan",
        "kk": "/fæn/",
        "zh": "n. 電扇",
        "unit": 17,
        "example": "She installed a wall-mounted electric fan.",
        "exampleZh": ""
    },
    {
        "id": 30589,
        "en": "fancy",
        "kk": "",
        "zh": "n. 想像力",
        "unit": 17,
        "example": "Do you fancy a jar after work?",
        "exampleZh": ""
    },
    {
        "id": 30590,
        "en": "fantastic",
        "kk": "",
        "zh": "adj. 極好的",
        "unit": 17,
        "example": "You've got the job? Fantastic!",
        "exampleZh": ""
    },
    {
        "id": 30591,
        "en": "far",
        "kk": "/fɑːr/",
        "zh": "adj. 遠方的",
        "unit": 17,
        "example": "It's been quiet so far.",
        "exampleZh": "到目前為止一直很安靜。"
    },
    {
        "id": 30592,
        "en": "farm",
        "kk": "/fɑːrm/",
        "zh": "n. 農場",
        "unit": 17,
        "example": "Whose is that farm over yonder?",
        "exampleZh": ""
    },
    {
        "id": 30593,
        "en": "farmer",
        "kk": "/ˈfɑːrmər/",
        "zh": "n. 農夫",
        "unit": 17,
        "example": "There once was a poor farmer who had four sons.",
        "exampleZh": "從前有一個貧窮的農民，他有四個兒子。"
    },
    {
        "id": 30594,
        "en": "fashion",
        "kk": "/ˈfæʃn/",
        "zh": "n. 流行",
        "unit": 17,
        "example": "Carolyne is a fashion designer.",
        "exampleZh": ""
    },
    {
        "id": 30595,
        "en": "fast",
        "kk": "/fæst/",
        "zh": "adj. 快的",
        "unit": 17,
        "example": "You shouldn't drive so fast.",
        "exampleZh": "你不應該開這麼快。"
    },
    {
        "id": 30596,
        "en": "fat",
        "kk": "/fæt/",
        "zh": "adj. 肥胖的",
        "unit": 17,
        "example": "This dress makes me look fat.",
        "exampleZh": ""
    },
    {
        "id": 30597,
        "en": "father",
        "kk": "/ˈfɑːðər/",
        "zh": "n. 父親",
        "unit": 17,
        "example": "His father hailed from Italy.",
        "exampleZh": ""
    },
    {
        "id": 30598,
        "en": "faucet",
        "kk": "",
        "zh": "n. 水龍頭",
        "unit": 17,
        "example": "If God turns off one faucet, he can turn on another.",
        "exampleZh": ""
    },
    {
        "id": 30599,
        "en": "fault",
        "kk": "/fɔːlt/",
        "zh": "n. 缺點",
        "unit": 17,
        "example": "His worst fault was his inconsistency.",
        "exampleZh": ""
    },
    {
        "id": 30600,
        "en": "favorite",
        "kk": "/ˈfeɪvərɪt/",
        "zh": "adj. 最喜歡的",
        "unit": 17,
        "example": "What's your favorite and less favorite Chinese food?",
        "exampleZh": ""
    },
    {
        "id": 30601,
        "en": "fear",
        "kk": "/fɪr/",
        "zh": "n. 害怕",
        "unit": 17,
        "example": "Fear clutched at her heart.",
        "exampleZh": "恐懼抓住了她的心。"
    },
    {
        "id": 30602,
        "en": "February",
        "kk": "",
        "zh": "n. 二月",
        "unit": 17,
        "example": "His exhibition opens on February 5.",
        "exampleZh": "他的展覽將於2月5日開幕。"
    },
    {
        "id": 30603,
        "en": "fee",
        "kk": "/fiː/",
        "zh": "n. 費用",
        "unit": 17,
        "example": "The fee is pitifully low.",
        "exampleZh": ""
    },
    {
        "id": 30604,
        "en": "feed",
        "kk": "/fiːd/",
        "zh": "v. 餵養",
        "unit": 17,
        "example": "Can you feed the cat, please?",
        "exampleZh": "請問可以餵貓嗎？"
    },
    {
        "id": 30605,
        "en": "feel",
        "kk": "/fiːl/",
        "zh": "v. 感覺",
        "unit": 17,
        "example": "'I feel...' There she stopped.",
        "exampleZh": "「我感覺……」她停了下來。"
    },
    {
        "id": 30606,
        "en": "feeling",
        "kk": "/ˈfiːlɪŋ/",
        "zh": "n. 感覺",
        "unit": 17,
        "example": "She's feeling a little homesick.",
        "exampleZh": "她有點想家了。"
    },
    {
        "id": 30607,
        "en": "female",
        "kk": "/ˈfiːmeɪl/",
        "zh": "n. 女性",
        "unit": 17,
        "example": "Oestrogen is a female sex hormone.",
        "exampleZh": ""
    },
    {
        "id": 30608,
        "en": "fence",
        "kk": "/fens/",
        "zh": "n. 柵欄",
        "unit": 17,
        "example": "The fence snagged my sweater.",
        "exampleZh": ""
    },
    {
        "id": 30609,
        "en": "festival",
        "kk": "",
        "zh": "n. 節慶",
        "unit": 17,
        "example": "I declare this festival open.",
        "exampleZh": ""
    },
    {
        "id": 30610,
        "en": "fever",
        "kk": "",
        "zh": "n. 發燒",
        "unit": 17,
        "example": "The fever has passed its crisis.",
        "exampleZh": ""
    },
    {
        "id": 30611,
        "en": "few",
        "kk": "/fjuː/",
        "zh": "adj. 少數的",
        "unit": 17,
        "example": "Few soldiers were in evidence.",
        "exampleZh": "幾乎沒有士兵在場。"
    },
    {
        "id": 30612,
        "en": "fifteen",
        "kk": "/ˌfɪfˈtiːn/",
        "zh": "n. 十五",
        "unit": 17,
        "example": "The talks began some fifteen minutes late.",
        "exampleZh": "會談晚了大約十五分鐘才開始。"
    },
    {
        "id": 30613,
        "en": "fifty",
        "kk": "/ˈfɪfti/",
        "zh": "n. 五十",
        "unit": 17,
        "example": "Fifty is the new forty.",
        "exampleZh": ""
    },
    {
        "id": 30614,
        "en": "fight",
        "kk": "/faɪt/",
        "zh": "n. 戰鬥",
        "unit": 17,
        "example": "Did you have a fight with him?",
        "exampleZh": "你和他吵架了嗎？"
    },
    {
        "id": 30615,
        "en": "fill",
        "kk": "/fɪl/",
        "zh": "v. 裝滿",
        "unit": 17,
        "example": "Dentists fill teeth and repair broken ones.",
        "exampleZh": ""
    },
    {
        "id": 30616,
        "en": "film",
        "kk": "/fɪlm/",
        "zh": "n. 電影",
        "unit": 17,
        "example": "Jenny's writing a film script.",
        "exampleZh": ""
    },
    {
        "id": 30617,
        "en": "final",
        "kk": "/ˈfaɪnl/",
        "zh": "adj. 最後的",
        "unit": 17,
        "example": "The judges' decision is final.",
        "exampleZh": "評審的決定是最終決定。"
    },
    {
        "id": 30618,
        "en": "finally",
        "kk": "/ˈfaɪnəli/",
        "zh": "adv. 最後",
        "unit": 17,
        "example": "Finally she drifted into sleep.",
        "exampleZh": ""
    },
    {
        "id": 30619,
        "en": "find",
        "kk": "/faɪnd/",
        "zh": "v. 找到",
        "unit": 17,
        "example": "I find cooking very relaxing.",
        "exampleZh": ""
    },
    {
        "id": 30620,
        "en": "fine",
        "kk": "/faɪn/",
        "zh": "adj. 精巧的",
        "unit": 17,
        "example": "'That's fine,' he replied amiably.",
        "exampleZh": ""
    },
    {
        "id": 30621,
        "en": "finger",
        "kk": "/ˈfɪŋɡər/",
        "zh": "n. 指頭",
        "unit": 17,
        "example": "He wagged a disapproving finger.",
        "exampleZh": ""
    },
    {
        "id": 30622,
        "en": "finish",
        "kk": "/ˈfɪnɪʃ/",
        "zh": "v. 結束",
        "unit": 17,
        "example": "Listen, I finish at one.",
        "exampleZh": "聽著，我講完了。"
    },
    {
        "id": 30623,
        "en": "fire",
        "kk": "/ˈfaɪər/",
        "zh": "n. 火",
        "unit": 17,
        "example": "The wooden rafters caught fire.",
        "exampleZh": "木椽著火了。"
    },
    {
        "id": 30624,
        "en": "first",
        "kk": "/fɜːrst/",
        "zh": "adj. 第一的",
        "unit": 17,
        "example": "His first marriage broke up.",
        "exampleZh": "他的第一次婚姻破裂了。"
    },
    {
        "id": 30625,
        "en": "fish",
        "kk": "/fɪʃ/",
        "zh": "n. 魚",
        "unit": 17,
        "example": "These fish are very aggressive.",
        "exampleZh": "這些魚非常具有攻擊性。"
    },
    {
        "id": 30626,
        "en": "fisherman",
        "kk": "",
        "zh": "n. 漁夫",
        "unit": 17,
        "example": "The fisherman rowed us back to the shore.",
        "exampleZh": ""
    },
    {
        "id": 30627,
        "en": "fit",
        "kk": "/fɪt/",
        "zh": "v. 適合",
        "unit": 17,
        "example": "Where do I fit in?",
        "exampleZh": ""
    },
    {
        "id": 30628,
        "en": "five",
        "kk": "/faɪv/",
        "zh": "n. 五",
        "unit": 17,
        "example": "She brought up five children.",
        "exampleZh": "她撫養了五個孩子。"
    },
    {
        "id": 30629,
        "en": "fix",
        "kk": "/fɪks/",
        "zh": "v. 固定",
        "unit": 17,
        "example": "He cannot fix the electricity.",
        "exampleZh": ""
    },
    {
        "id": 30630,
        "en": "flag",
        "kk": "/flæɡ/",
        "zh": "n. 旗幟",
        "unit": 17,
        "example": "The American flag was flying.",
        "exampleZh": ""
    },
    {
        "id": 30631,
        "en": "flash",
        "kk": "",
        "zh": "n. 閃光",
        "unit": 17,
        "example": "I'll need flash for this shot.",
        "exampleZh": ""
    },
    {
        "id": 30632,
        "en": "flashlight",
        "kk": "",
        "zh": "n. 手電筒",
        "unit": 17,
        "example": "Sam was flicking a flashlight on and off.",
        "exampleZh": ""
    },
    {
        "id": 30633,
        "en": "flight",
        "kk": "/flaɪt/",
        "zh": "n. 飛機航次",
        "unit": 17,
        "example": "The flight was heavily overbooked.",
        "exampleZh": ""
    },
    {
        "id": 30634,
        "en": "flood",
        "kk": "",
        "zh": "n. 洪水",
        "unit": 17,
        "example": "The flood waters slowly retreated.",
        "exampleZh": ""
    },
    {
        "id": 30635,
        "en": "floor",
        "kk": "/flɔːr/",
        "zh": "n. 地板",
        "unit": 17,
        "example": "The bathroom floor was awash.",
        "exampleZh": "浴室地板被水淹沒了。"
    },
    {
        "id": 30636,
        "en": "flour",
        "kk": "",
        "zh": "n. 麵粉",
        "unit": 17,
        "example": "Flour is sold by the kilogram.",
        "exampleZh": ""
    },
    {
        "id": 30637,
        "en": "flower",
        "kk": "/ˈflaʊər/",
        "zh": "n. 花",
        "unit": 17,
        "example": "I've been weeding the flower beds.",
        "exampleZh": "我一直在為花壇除草。"
    },
    {
        "id": 30638,
        "en": "flu",
        "kk": "",
        "zh": "n. 流行性感冒",
        "unit": 17,
        "example": "The whole family has the flu.",
        "exampleZh": ""
    },
    {
        "id": 30639,
        "en": "flute",
        "kk": "",
        "zh": "n. 長笛",
        "unit": 17,
        "example": "I want a flute.",
        "exampleZh": ""
    },
    {
        "id": 30640,
        "en": "fly",
        "kk": "/flaɪ/",
        "zh": "v. 飛",
        "unit": 17,
        "example": "She brushed the fly away.",
        "exampleZh": "她把蒼蠅趕走了。"
    },
    {
        "id": 30641,
        "en": "focus",
        "kk": "/ˈfoʊkəs/",
        "zh": "n. 焦點",
        "unit": 17,
        "example": "He prefers to focus on the positive.",
        "exampleZh": ""
    },
    {
        "id": 30642,
        "en": "fog",
        "kk": "",
        "zh": "n. 霧",
        "unit": 17,
        "example": "The fog began to disperse.",
        "exampleZh": "霧氣開始散去。"
    },
    {
        "id": 30643,
        "en": "foggy",
        "kk": "",
        "zh": "adj. 濃霧的",
        "unit": 17,
        "example": "Get away from the foggy morning.",
        "exampleZh": "遠離大霧的早晨。"
    },
    {
        "id": 30644,
        "en": "follow",
        "kk": "/ˈfɑːloʊ/",
        "zh": "v. 跟隨",
        "unit": 17,
        "example": "She signalled him to follow.",
        "exampleZh": "她示意他跟上。"
    },
    {
        "id": 30645,
        "en": "food",
        "kk": "/fuːd/",
        "zh": "n. 食物",
        "unit": 17,
        "example": "Food aid is urgently needed.",
        "exampleZh": "迫切需要糧食援助。"
    },
    {
        "id": 30646,
        "en": "fool",
        "kk": "",
        "zh": "n. 傻子",
        "unit": 17,
        "example": "The man's a deuced fool!",
        "exampleZh": ""
    },
    {
        "id": 30647,
        "en": "foolish",
        "kk": "",
        "zh": "adj. 愚笨的",
        "unit": 17,
        "example": "How foolish I am to entertain doubts.",
        "exampleZh": "我是多麼愚蠢啊，居然還去懷疑。"
    },
    {
        "id": 30648,
        "en": "foot",
        "kk": "/fʊt/",
        "zh": "n. 腳",
        "unit": 17,
        "example": "She stamped her foot again.",
        "exampleZh": "她又跺了跺腳。"
    },
    {
        "id": 30649,
        "en": "football",
        "kk": "/ˈfʊtbɔːl/",
        "zh": "n. 足球",
        "unit": 17,
        "example": "Luckily, we both love football.",
        "exampleZh": ""
    },
    {
        "id": 30650,
        "en": "for",
        "kk": "/fɔːr/",
        "zh": "prep. 為了",
        "unit": 17,
        "example": "He was jailed for life for murder.",
        "exampleZh": "他因謀殺罪被判終身監禁。"
    },
    {
        "id": 30651,
        "en": "force",
        "kk": "/fɔːrs/",
        "zh": "v. 強迫",
        "unit": 17,
        "example": "Is religion always a force for good?",
        "exampleZh": ""
    },
    {
        "id": 30652,
        "en": "foreign",
        "kk": "/ˈfɔːrən/",
        "zh": "adj. 外國的",
        "unit": 17,
        "example": "Foreign News is on page 16.",
        "exampleZh": "《外國新聞》在第 16 頁。"
    },
    {
        "id": 30653,
        "en": "foreigner",
        "kk": "",
        "zh": "n. 外國人",
        "unit": 17,
        "example": "Being a foreigner was not a handicap.",
        "exampleZh": ""
    },
    {
        "id": 30654,
        "en": "forest",
        "kk": "/ˈfɔːrəst/",
        "zh": "n. 森林",
        "unit": 17,
        "example": "We need to preserve the forest.",
        "exampleZh": ""
    },
    {
        "id": 30655,
        "en": "forget",
        "kk": "/fərˈɡet/",
        "zh": "v. 忘記",
        "unit": 17,
        "example": "Let's forget the whole thing.",
        "exampleZh": "讓我們忘記整件事。"
    },
    {
        "id": 30656,
        "en": "forgive",
        "kk": "",
        "zh": "v. 原諒",
        "unit": 17,
        "example": "All right, I'll forgive you.",
        "exampleZh": "好吧，我就原諒你了。"
    },
    {
        "id": 30657,
        "en": "fork",
        "kk": "",
        "zh": "n. 叉子",
        "unit": 17,
        "example": "She stabbed the air with her fork.",
        "exampleZh": "她用叉子刺向空氣。"
    },
    {
        "id": 30658,
        "en": "form",
        "kk": "/fɔːrm/",
        "zh": "v. 形成",
        "unit": 17,
        "example": "He hates violence in any form.",
        "exampleZh": ""
    },
    {
        "id": 30659,
        "en": "formal",
        "kk": "/ˈfɔːrml/",
        "zh": "adj. 正式的",
        "unit": 17,
        "example": "He wore formal evening dress.",
        "exampleZh": "他穿著正式的晚禮服。"
    },
    {
        "id": 30660,
        "en": "former",
        "kk": "/ˈfɔːrmər/",
        "zh": "adj. 前者的",
        "unit": 17,
        "example": "The former option would be much more sensible.",
        "exampleZh": "前一種選擇會更明智。"
    },
    {
        "id": 30661,
        "en": "forty",
        "kk": "",
        "zh": "n. 四十",
        "unit": 17,
        "example": "Fifty is the new forty.",
        "exampleZh": "五十歲是新的四十歲。"
    },
    {
        "id": 30662,
        "en": "forward(s)",
        "kk": "",
        "zh": "adv. 向前",
        "unit": 17,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 30663,
        "en": "four",
        "kk": "/fɔːr/",
        "zh": "n. 四",
        "unit": 17,
        "example": "I took four Tylenol capsules.",
        "exampleZh": "我吃了四顆泰諾膠囊。"
    },
    {
        "id": 30664,
        "en": "fourteen",
        "kk": "/ˌfɔːrˈtiːn/",
        "zh": "n. 十四",
        "unit": 17,
        "example": "I'm fourteen years old.",
        "exampleZh": "我今年十四歲。"
    },
    {
        "id": 30665,
        "en": "fox",
        "kk": "",
        "zh": "n. 狐狸",
        "unit": 17,
        "example": "He's a wily old fox.",
        "exampleZh": ""
    },
    {
        "id": 30666,
        "en": "frank",
        "kk": "",
        "zh": "adj. 直率的",
        "unit": 17,
        "example": "The talks had been brutally frank.",
        "exampleZh": "會談非常坦率。"
    },
    {
        "id": 30667,
        "en": "free",
        "kk": "/friː/",
        "zh": "adj. 自由的",
        "unit": 17,
        "example": "Sterling went into free fall.",
        "exampleZh": "斯特林開始自由落體。"
    },
    {
        "id": 30668,
        "en": "freedom",
        "kk": "/ˈfriːdəm/",
        "zh": "n. 自由",
        "unit": 17,
        "example": "He burbles on about freedom.",
        "exampleZh": ""
    },
    {
        "id": 30669,
        "en": "fresh",
        "kk": "/freʃ/",
        "zh": "adj. 新鮮的",
        "unit": 17,
        "example": "We sell only fresh local produce.",
        "exampleZh": "我們只賣新鮮的當地農產品。"
    },
    {
        "id": 30670,
        "en": "Friday",
        "kk": "/ˈfraɪdeɪ/",
        "zh": "n. 星期五",
        "unit": 17,
        "example": "Today is Friday, September 14th.",
        "exampleZh": "今天是 9 月 14 日，星期五。"
    },
    {
        "id": 30671,
        "en": "friend",
        "kk": "/frend/",
        "zh": "n. 朋友",
        "unit": 17,
        "example": "She's a very special friend.",
        "exampleZh": ""
    },
    {
        "id": 30672,
        "en": "friendly",
        "kk": "/ˈfrendli/",
        "zh": "adj. 友好的",
        "unit": 17,
        "example": "The locals are very friendly.",
        "exampleZh": "當地人非常友善。"
    },
    {
        "id": 30673,
        "en": "frighten",
        "kk": "",
        "zh": "v. 使害怕",
        "unit": 17,
        "example": "Sorry, I didn't mean to frighten you.",
        "exampleZh": "抱歉，我不是故意嚇唬你的。"
    },
    {
        "id": 30674,
        "en": "frog",
        "kk": "",
        "zh": "n. 青蛙",
        "unit": 17,
        "example": "The frog puffed itself up.",
        "exampleZh": ""
    },
    {
        "id": 30675,
        "en": "from",
        "kk": "/frʌm/",
        "zh": "prep. 從...",
        "unit": 17,
        "example": "Cheap flights are available from budget travel agents from $240.",
        "exampleZh": "廉價旅行社提供廉價航班，起價為 240 美元。"
    },
    {
        "id": 30676,
        "en": "front",
        "kk": "/frʌnt/",
        "zh": "adj. 前面的",
        "unit": 17,
        "example": "Charlene sat in the front pew.",
        "exampleZh": "夏琳坐在前排。"
    },
    {
        "id": 30677,
        "en": "fruit",
        "kk": "/fruːt/",
        "zh": "n. 水果",
        "unit": 17,
        "example": "Sugar occurs naturally in fruit.",
        "exampleZh": "糖天然存在於水果中。"
    },
    {
        "id": 30678,
        "en": "fry",
        "kk": "",
        "zh": "v. 油炸",
        "unit": 17,
        "example": "You'll fry on the beach if you're not careful.",
        "exampleZh": ""
    },
    {
        "id": 30679,
        "en": "full",
        "kk": "/fʊl/",
        "zh": "adj. 滿的",
        "unit": 17,
        "example": "She's always full of energy.",
        "exampleZh": "她總是充滿活力。"
    },
    {
        "id": 30680,
        "en": "fun",
        "kk": "/fʌn/",
        "zh": "n. 趣味",
        "unit": 17,
        "example": "It was all innocent fun.",
        "exampleZh": "這一切都是天真的樂趣。"
    },
    {
        "id": 30681,
        "en": "function",
        "kk": "/ˈfʌŋkʃn/",
        "zh": "n. 功能",
        "unit": 17,
        "example": "Breathing is an automatic function of the body.",
        "exampleZh": ""
    },
    {
        "id": 30682,
        "en": "funny",
        "kk": "/ˈfʌni/",
        "zh": "adj. 好笑的",
        "unit": 17,
        "example": "She found it hilariously funny.",
        "exampleZh": "她覺得非常好笑。"
    },
    {
        "id": 30683,
        "en": "furniture",
        "kk": "/ˈfɜːrnɪtʃər/",
        "zh": "n. 傢俱",
        "unit": 17,
        "example": "We specialize in quality furniture.",
        "exampleZh": ""
    },
    {
        "id": 30684,
        "en": "future",
        "kk": "/ˈfjuːtʃər/",
        "zh": "n. 未來",
        "unit": 17,
        "example": "The future is not without hope.",
        "exampleZh": ""
    },
    {
        "id": 30685,
        "en": "gain",
        "kk": "/ɡeɪn/",
        "zh": "v. 獲得",
        "unit": 17,
        "example": "Regular exercise helps prevent weight gain.",
        "exampleZh": ""
    },
    {
        "id": 30686,
        "en": "game",
        "kk": "/ɡeɪm/",
        "zh": "n. 遊戲",
        "unit": 17,
        "example": "He paced his game skilfully.",
        "exampleZh": "他熟練地控制著比賽的節奏。"
    },
    {
        "id": 30687,
        "en": "garage",
        "kk": "",
        "zh": "n. 車庫",
        "unit": 17,
        "example": "Tim climbed on to the garage roof.",
        "exampleZh": ""
    },
    {
        "id": 30688,
        "en": "garden",
        "kk": "/ˈɡɑːrdn/",
        "zh": "n. 花園",
        "unit": 17,
        "example": "The garden looked uncared for.",
        "exampleZh": "花園看起來無人打理。"
    },
    {
        "id": 30689,
        "en": "garbage",
        "kk": "",
        "zh": "n. 垃圾",
        "unit": 17,
        "example": "They are especially fond of garbage.",
        "exampleZh": ""
    },
    {
        "id": 30690,
        "en": "gas",
        "kk": "/ɡæs/",
        "zh": "n. 瓦斯",
        "unit": 17,
        "example": "This gas is highly poisonous.",
        "exampleZh": ""
    },
    {
        "id": 30691,
        "en": "gate",
        "kk": "",
        "zh": "n. 大門",
        "unit": 17,
        "example": "He pushed open the garden gate.",
        "exampleZh": ""
    },
    {
        "id": 30692,
        "en": "gather",
        "kk": "",
        "zh": "v. 集合",
        "unit": 17,
        "example": "Gather ye rosebuds while ye may.",
        "exampleZh": "趁還可以的時候，收集玫瑰花蕾。"
    },
    {
        "id": 30693,
        "en": "general",
        "kk": "/ˈdʒenərəl/",
        "zh": "adj. 一般的",
        "unit": 17,
        "example": "My father venerated General Eisenhower.",
        "exampleZh": ""
    },
    {
        "id": 30694,
        "en": "generous",
        "kk": "",
        "zh": "adj. 慷慨的",
        "unit": 17,
        "example": "She is generous to a fault.",
        "exampleZh": "她慷慨得過分了。"
    },
    {
        "id": 30695,
        "en": "genius",
        "kk": "",
        "zh": "n. 天才",
        "unit": 17,
        "example": "She was extolled as a genius.",
        "exampleZh": ""
    },
    {
        "id": 30696,
        "en": "gentle",
        "kk": "",
        "zh": "adj. 溫和的",
        "unit": 17,
        "example": "These poems reveal her gentle side.",
        "exampleZh": "這些詩揭示了她溫柔的一面。"
    },
    {
        "id": 30697,
        "en": "gentleman",
        "kk": "",
        "zh": "n. 紳士",
        "unit": 17,
        "example": "He behaved like a true gentleman.",
        "exampleZh": ""
    },
    {
        "id": 30698,
        "en": "geography",
        "kk": "",
        "zh": "n. 地理",
        "unit": 17,
        "example": "Geography was my weak subject.",
        "exampleZh": ""
    },
    {
        "id": 30699,
        "en": "gesture",
        "kk": "",
        "zh": "n. 姿勢,手勢",
        "unit": 17,
        "example": "They communicated entirely by gesture.",
        "exampleZh": ""
    },
    {
        "id": 30700,
        "en": "get",
        "kk": "",
        "zh": "v. 得到",
        "unit": 17,
        "example": "Somebody get a doctor!",
        "exampleZh": "有人請醫生來嗎！"
    },
    {
        "id": 30701,
        "en": "ghost",
        "kk": "",
        "zh": "n. 鬼",
        "unit": 17,
        "example": "A ghost indeed! I've never heard anything so silly.",
        "exampleZh": "確實是鬼啊！我從來沒有聽過這麼愚蠢的話。"
    },
    {
        "id": 30702,
        "en": "giant",
        "kk": "",
        "zh": "adj. 巨大的",
        "unit": 17,
        "example": "He's a giant of a man.",
        "exampleZh": ""
    },
    {
        "id": 30703,
        "en": "gift",
        "kk": "/ɡɪft/",
        "zh": "n. 禮物",
        "unit": 17,
        "example": "Would you like the chocolates gift-wrapped?",
        "exampleZh": "您想要禮品包裝的巧克力嗎？"
    },
    {
        "id": 30704,
        "en": "girl",
        "kk": "/ɡɜːrl/",
        "zh": "n. 女孩",
        "unit": 17,
        "example": "An older girl befriended me.",
        "exampleZh": "一個年長的女孩和我成了朋友。"
    },
    {
        "id": 30705,
        "en": "give",
        "kk": "/ɡɪv/",
        "zh": "v. 給予",
        "unit": 17,
        "example": "I'll give you a ring.",
        "exampleZh": "我會打電話給你。"
    },
    {
        "id": 30706,
        "en": "glad",
        "kk": "",
        "zh": "adj. 高興的",
        "unit": 17,
        "example": "I'm glad you came along.",
        "exampleZh": "我很高興你能來。"
    },
    {
        "id": 30707,
        "en": "glass",
        "kk": "/ɡlæs/",
        "zh": "n. 玻璃",
        "unit": 17,
        "example": "Glass contracts as it cools.",
        "exampleZh": "玻璃冷卻時會收縮。"
    },
    {
        "id": 30708,
        "en": "glasses",
        "kk": "",
        "zh": "n. 眼鏡",
        "unit": 17,
        "example": "I wear glasses for driving.",
        "exampleZh": "我開車時戴眼鏡。"
    },
    {
        "id": 30709,
        "en": "glove",
        "kk": "",
        "zh": "n. 手套",
        "unit": 17,
        "example": "She bent down to pick up her glove.",
        "exampleZh": ""
    },
    {
        "id": 30710,
        "en": "glue",
        "kk": "",
        "zh": "n. 膠水",
        "unit": 17,
        "example": "I made a model out of paper and glue.",
        "exampleZh": ""
    },
    {
        "id": 30711,
        "en": "go",
        "kk": "",
        "zh": "v. 去",
        "unit": 17,
        "example": "Very well, if you want to go, go you shall.",
        "exampleZh": "很好，如果你想去，那就去吧。"
    },
    {
        "id": 30712,
        "en": "goal",
        "kk": "/ɡoʊl/",
        "zh": "n. 目標",
        "unit": 17,
        "example": "The second goal was disallowed.",
        "exampleZh": ""
    },
    {
        "id": 30713,
        "en": "goat",
        "kk": "",
        "zh": "n. 山羊",
        "unit": 17,
        "example": "I roped the goat to a post.",
        "exampleZh": ""
    },
    {
        "id": 30714,
        "en": "god",
        "kk": "",
        "zh": "n. 上帝",
        "unit": 17,
        "example": "Do you believe in God ?",
        "exampleZh": "你相信上帝嗎？"
    },
    {
        "id": 30715,
        "en": "gold",
        "kk": "/ɡoʊld/",
        "zh": "n. 黃金",
        "unit": 17,
        "example": "Gold rings adorned his fingers.",
        "exampleZh": "他的手指上戴著金戒指。"
    },
    {
        "id": 30716,
        "en": "golden",
        "kk": "",
        "zh": "adj. 金色的",
        "unit": 17,
        "example": "The golden light gilded the sea.",
        "exampleZh": "金色的光芒為大海鍍上了一層金色。"
    },
    {
        "id": 30717,
        "en": "golf",
        "kk": "",
        "zh": "n. 高爾夫球",
        "unit": 17,
        "example": "His favourite pastime is golf.",
        "exampleZh": ""
    },
    {
        "id": 30718,
        "en": "good",
        "kk": "/ɡʊd/",
        "zh": "adj. 好的",
        "unit": 17,
        "example": "She speaks good English.",
        "exampleZh": "她英語說得很好。"
    },
    {
        "id": 30719,
        "en": "goodness",
        "kk": "",
        "zh": "n. 善良",
        "unit": 17,
        "example": "Goodness, I wonder if he knows.",
        "exampleZh": ""
    },
    {
        "id": 30720,
        "en": "goose",
        "kk": "",
        "zh": "n. 鵝",
        "unit": 17,
        "example": "The big white goose became a black goose.",
        "exampleZh": "大白鵝變成了黑鵝。"
    },
    {
        "id": 30721,
        "en": "government",
        "kk": "/ˈɡʌvərnmənt/",
        "zh": "n. 政府",
        "unit": 17,
        "example": "The government took swift action.",
        "exampleZh": ""
    },
    {
        "id": 30722,
        "en": "grade",
        "kk": "/ɡreɪd/",
        "zh": "n. 分數",
        "unit": 17,
        "example": "I flunked math in second grade.",
        "exampleZh": ""
    },
    {
        "id": 30723,
        "en": "gram",
        "kk": "",
        "zh": "n. 克",
        "unit": 17,
        "example": "A few twentieths of a gram can be critical.",
        "exampleZh": ""
    },
    {
        "id": 30724,
        "en": "grandfather",
        "kk": "",
        "zh": "n. 祖父",
        "unit": 17,
        "example": "His grandfather was a professor.",
        "exampleZh": "他的祖父是一位教授。"
    },
    {
        "id": 30725,
        "en": "grandmother",
        "kk": "",
        "zh": "n. 祖母",
        "unit": 17,
        "example": "Her grandmother mumbled in her sleep.",
        "exampleZh": "奶奶在睡夢中呢喃著。"
    },
    {
        "id": 30726,
        "en": "grandson",
        "kk": "",
        "zh": "n. 孫子",
        "unit": 17,
        "example": "He is my grandson.",
        "exampleZh": "他是我的孫子。"
    },
    {
        "id": 30727,
        "en": "grape",
        "kk": "",
        "zh": "n. 葡萄",
        "unit": 17,
        "example": "Is it a grape or a plum?",
        "exampleZh": ""
    },
    {
        "id": 30728,
        "en": "grass",
        "kk": "",
        "zh": "n. 草",
        "unit": 17,
        "example": "The grass had grown waist-high.",
        "exampleZh": "草已經長到及腰高了。"
    },
    {
        "id": 30729,
        "en": "gray",
        "kk": "",
        "zh": "adj. 灰色的",
        "unit": 17,
        "example": "I want that gray coat.",
        "exampleZh": "我想要那件灰色外套。"
    },
    {
        "id": 30730,
        "en": "great",
        "kk": "/ɡreɪt/",
        "zh": "adj. 傑出的",
        "unit": 17,
        "example": "We became great buddies.",
        "exampleZh": "我們成了好朋友。"
    },
    {
        "id": 30731,
        "en": "greedy",
        "kk": "",
        "zh": "adj. 貪心的",
        "unit": 17,
        "example": "Linda became an honest girl and was never greedy.",
        "exampleZh": "琳達變成了一個誠實的女孩，從不貪婪。"
    },
    {
        "id": 30732,
        "en": "green",
        "kk": "/ɡriːn/",
        "zh": "adj. 綠色的",
        "unit": 17,
        "example": "She wore purple and green silk.",
        "exampleZh": "她穿著紫色和綠色的絲綢。"
    },
    {
        "id": 30733,
        "en": "greet",
        "kk": "",
        "zh": "v. 問候",
        "unit": 17,
        "example": "She floated down the steps to greet us.",
        "exampleZh": "她飄下台階迎接我們。"
    },
    {
        "id": 30734,
        "en": "ground",
        "kk": "/ɡraʊnd/",
        "zh": "n. 土地",
        "unit": 17,
        "example": "The ground was frozen solid.",
        "exampleZh": "地面凍得嚴嚴實實。"
    },
    {
        "id": 30735,
        "en": "group",
        "kk": "/ɡruːp/",
        "zh": "n. 群,組",
        "unit": 17,
        "example": "The group encompasses all ages.",
        "exampleZh": "該群體涵蓋所有年齡層。"
    },
    {
        "id": 30736,
        "en": "grow",
        "kk": "/ɡroʊ/",
        "zh": "v. 生長",
        "unit": 17,
        "example": "The economy continues to grow.",
        "exampleZh": "經濟持續成長。"
    },
    {
        "id": 30737,
        "en": "guard",
        "kk": "/ɡɑːrd/",
        "zh": "n. 警衛",
        "unit": 17,
        "example": "A guard was posted outside the building.",
        "exampleZh": ""
    },
    {
        "id": 30738,
        "en": "guava",
        "kk": "",
        "zh": "n. 番石榴",
        "unit": 17,
        "example": "I want to eat guava.",
        "exampleZh": ""
    },
    {
        "id": 30739,
        "en": "guess",
        "kk": "/ɡes/",
        "zh": "v. 猜測",
        "unit": 17,
        "example": "'Guess what?' she said archly.",
        "exampleZh": "「你猜怎麼著？」她調皮地說。"
    },
    {
        "id": 30740,
        "en": "guest",
        "kk": "/ɡest/",
        "zh": "n. 客人",
        "unit": 17,
        "example": "Our special guest tonight is...",
        "exampleZh": "今晚我們的特別嘉賓是…"
    },
    {
        "id": 30741,
        "en": "guide",
        "kk": "/ɡaɪd/",
        "zh": "v. 引導",
        "unit": 17,
        "example": "The guide flashed a light into the cave.",
        "exampleZh": "嚮導向山洞裡照射了燈光。"
    },
    {
        "id": 30742,
        "en": "guitar",
        "kk": "",
        "zh": "n. 吉他",
        "unit": 17,
        "example": "He played some wah-wah guitar.",
        "exampleZh": ""
    },
    {
        "id": 30743,
        "en": "gun",
        "kk": "/ɡʌn/",
        "zh": "n. 槍",
        "unit": 17,
        "example": "He refused to yield up his gun.",
        "exampleZh": "他拒絕交出槍。"
    },
    {
        "id": 30744,
        "en": "guy",
        "kk": "",
        "zh": "n. 小伙子",
        "unit": 17,
        "example": "He's a real meat-and-potatoes guy.",
        "exampleZh": ""
    },
    {
        "id": 30745,
        "en": "gym",
        "kk": "",
        "zh": "n. 體育館",
        "unit": 17,
        "example": "The commons is next to the gym.",
        "exampleZh": ""
    },
    {
        "id": 30746,
        "en": "habit",
        "kk": "/ˈhæbɪt/",
        "zh": "n. 習慣",
        "unit": 17,
        "example": "I only do it out of habit.",
        "exampleZh": ""
    },
    {
        "id": 30747,
        "en": "hair",
        "kk": "/her/",
        "zh": "n. 頭髮",
        "unit": 17,
        "example": "Katy has long blackish hair.",
        "exampleZh": "凱蒂有一頭黑色的長髮。"
    },
    {
        "id": 30748,
        "en": "half",
        "kk": "/hæf/",
        "zh": "adj. 一半的",
        "unit": 17,
        "example": "Children travel (at) half fare.",
        "exampleZh": "兒童乘車半價。"
    },
    {
        "id": 30749,
        "en": "hall",
        "kk": "/hɔːl/",
        "zh": "n. 大廳",
        "unit": 17,
        "example": "Applause rang through the hall.",
        "exampleZh": ""
    },
    {
        "id": 30750,
        "en": "Halloween",
        "kk": "",
        "zh": "n. 萬聖節",
        "unit": 17,
        "example": "Halloween is a strange holiday.",
        "exampleZh": ""
    },
    {
        "id": 30751,
        "en": "ham",
        "kk": "",
        "zh": "n. 火腿",
        "unit": 17,
        "example": "I was eating ham and Swiss cheese on rye.",
        "exampleZh": "我正在吃黑麥火腿和瑞士起司。"
    },
    {
        "id": 30752,
        "en": "hamburger",
        "kk": "",
        "zh": "n. 漢堡",
        "unit": 17,
        "example": "We stopped at a drive-in for a hamburger.",
        "exampleZh": ""
    },
    {
        "id": 30753,
        "en": "hammer",
        "kk": "",
        "zh": "n. 槌子",
        "unit": 17,
        "example": "He hit the nail squarely on the head with the hammer.",
        "exampleZh": ""
    },
    {
        "id": 30754,
        "en": "hand",
        "kk": "/hænd/",
        "zh": "n. 手",
        "unit": 17,
        "example": "He patted her hand patronizingly.",
        "exampleZh": "他居高臨下地拍拍她的手。"
    },
    {
        "id": 30755,
        "en": "handkerchief",
        "kk": "",
        "zh": "n. 手帕",
        "unit": 17,
        "example": "The handkerchief is edged with lace.",
        "exampleZh": ""
    },
    {
        "id": 30756,
        "en": "handle",
        "kk": "/ˈhændl/",
        "zh": "v. 處理",
        "unit": 17,
        "example": "I pumped the handle like crazy.",
        "exampleZh": ""
    },
    {
        "id": 30757,
        "en": "handsome",
        "kk": "",
        "zh": "adj. 英俊的",
        "unit": 17,
        "example": "He was tall, lean and handsome.",
        "exampleZh": ""
    },
    {
        "id": 30758,
        "en": "hang",
        "kk": "/hæŋ/",
        "zh": "v. 掛",
        "unit": 17,
        "example": "Hang on—I'm not quite ready.",
        "exampleZh": "等一下——我還沒準備好。"
    },
    {
        "id": 30759,
        "en": "hanger",
        "kk": "",
        "zh": "n. 衣架",
        "unit": 17,
        "example": "I need some hangers.",
        "exampleZh": ""
    },
    {
        "id": 30760,
        "en": "happen",
        "kk": "/ˈhæpən/",
        "zh": "v. 發生",
        "unit": 17,
        "example": "That doesn't happen very often.",
        "exampleZh": "這種情況並不常發生。"
    },
    {
        "id": 30761,
        "en": "happy",
        "kk": "/ˈhæpi/",
        "zh": "adj. 快樂的",
        "unit": 17,
        "example": "She had a happy childhood.",
        "exampleZh": "她有一個幸福的童年。"
    },
    {
        "id": 30762,
        "en": "hard",
        "kk": "/hɑːrd/",
        "zh": "adj. 難的",
        "unit": 17,
        "example": "It's pretty hard to explain.",
        "exampleZh": "這很難解釋。"
    },
    {
        "id": 30763,
        "en": "hardly",
        "kk": "",
        "zh": "adv. 幾乎不",
        "unit": 17,
        "example": "I've got hardly any money.",
        "exampleZh": "我幾乎沒有錢了"
    },
    {
        "id": 30764,
        "en": "hat",
        "kk": "/hæt/",
        "zh": "n. 帽子",
        "unit": 17,
        "example": "She pulled her hat straight.",
        "exampleZh": "她把帽子拉直。"
    },
    {
        "id": 30765,
        "en": "hate",
        "kk": "/heɪt/",
        "zh": "v. 憎恨",
        "unit": 17,
        "example": "The obverse of love is hate.",
        "exampleZh": "愛的反面是恨。"
    },
    {
        "id": 30766,
        "en": "have",
        "kk": "/hæv/",
        "zh": "v. 有",
        "unit": 17,
        "example": "Times have changed and so have I.",
        "exampleZh": "時代變了，我也變了。"
    },
    {
        "id": 30767,
        "en": "head",
        "kk": "/hed/",
        "zh": "n. 頭",
        "unit": 17,
        "example": "He shook his head tiredly.",
        "exampleZh": "他疲倦地搖搖頭。"
    },
    {
        "id": 30768,
        "en": "headache",
        "kk": "",
        "zh": "n. 頭痛",
        "unit": 17,
        "example": "He complained of a headache.",
        "exampleZh": ""
    },
    {
        "id": 30769,
        "en": "health",
        "kk": "/helθ/",
        "zh": "n. 健康",
        "unit": 17,
        "example": "He's always enjoyed good health.",
        "exampleZh": "他一直身體健康。"
    },
    {
        "id": 30770,
        "en": "healthy",
        "kk": "",
        "zh": "adj. 健康的",
        "unit": 17,
        "example": "He has a healthy appetite.",
        "exampleZh": "他胃口健康。"
    },
    {
        "id": 30771,
        "en": "hear",
        "kk": "/hɪr/",
        "zh": "v. 聽",
        "unit": 17,
        "example": "I can hear someone calling.",
        "exampleZh": "我能聽到有人打電話。"
    },
    {
        "id": 30772,
        "en": "heart",
        "kk": "/hɑːrt/",
        "zh": "n. 心臟",
        "unit": 17,
        "example": "My heart was knocking wildly.",
        "exampleZh": "我的心劇烈地跳動著。"
    },
    {
        "id": 30773,
        "en": "heat",
        "kk": "/hiːt/",
        "zh": "n. 熱",
        "unit": 17,
        "example": "The heat was becoming unbearable.",
        "exampleZh": "炎熱變得難以忍受。"
    },
    {
        "id": 30774,
        "en": "heater",
        "kk": "",
        "zh": "n. 熱水器",
        "unit": 17,
        "example": "This type of heater uses a lot of electricity.",
        "exampleZh": ""
    },
    {
        "id": 30775,
        "en": "heavy",
        "kk": "/ˈhevi/",
        "zh": "adj. 重的",
        "unit": 17,
        "example": "These scissors are awfully heavy.",
        "exampleZh": "這些剪刀非常重。"
    },
    {
        "id": 30776,
        "en": "height",
        "kk": "/haɪt/",
        "zh": "n. 高度",
        "unit": 17,
        "example": "The aircraft was gaining height.",
        "exampleZh": ""
    },
    {
        "id": 30777,
        "en": "helicopter",
        "kk": "",
        "zh": "n. 直升機",
        "unit": 17,
        "example": "The helicopter rose into the air.",
        "exampleZh": ""
    },
    {
        "id": 30778,
        "en": "help",
        "kk": "/help/",
        "zh": "n. 幫忙",
        "unit": 17,
        "example": "You never help me.",
        "exampleZh": "你從來不幫我。"
    },
    {
        "id": 30779,
        "en": "helpful",
        "kk": "",
        "zh": "adj. 有助益的",
        "unit": 17,
        "example": "Sorry I can't be more helpful.",
        "exampleZh": "抱歉，我無法提供更多協助。"
    },
    {
        "id": 30780,
        "en": "hen",
        "kk": "",
        "zh": "n. 母雞",
        "unit": 17,
        "example": "The hen may not be able to feed its young.",
        "exampleZh": ""
    },
    {
        "id": 30781,
        "en": "here",
        "kk": "/hɪr/",
        "zh": "adv. 在這裡",
        "unit": 17,
        "example": "'Here?' said Kate, incredulous.",
        "exampleZh": "'這裡？ '凱特難以置信地說。"
    },
    {
        "id": 30782,
        "en": "hero",
        "kk": "/ˈhɪroʊ/",
        "zh": "n. 英雄",
        "unit": 17,
        "example": "He was eulogized as a hero.",
        "exampleZh": ""
    },
    {
        "id": 30783,
        "en": "hide",
        "kk": "/haɪd/",
        "zh": "v. 藏",
        "unit": 17,
        "example": "He didn't hide his pacifism.",
        "exampleZh": "他並沒有掩飾自己的和平主義。"
    },
    {
        "id": 30784,
        "en": "high",
        "kk": "/haɪ/",
        "zh": "adj. 高的",
        "unit": 17,
        "example": "How high is Mount Aconcagua?",
        "exampleZh": "阿空加瓜山有多高？"
    },
    {
        "id": 30785,
        "en": "highway",
        "kk": "",
        "zh": "n. 公路",
        "unit": 17,
        "example": "Anita drove north up Pacific Highway.",
        "exampleZh": ""
    },
    {
        "id": 30786,
        "en": "hike",
        "kk": "",
        "zh": "n. 遠足",
        "unit": 17,
        "example": "The site is reached by a 30-minute hike through dense forest.",
        "exampleZh": ""
    },
    {
        "id": 30787,
        "en": "hill",
        "kk": "",
        "zh": "n. 小山丘",
        "unit": 17,
        "example": "The ball rolled down the hill.",
        "exampleZh": "球滾下了山。"
    },
    {
        "id": 30788,
        "en": "hip",
        "kk": "",
        "zh": "n. 臀部",
        "unit": 17,
        "example": "He fell and fractured his hip.",
        "exampleZh": ""
    },
    {
        "id": 30789,
        "en": "hippo",
        "kk": "",
        "zh": "n. 河馬",
        "unit": 17,
        "example": "The hippo lives in water.",
        "exampleZh": ""
    },
    {
        "id": 30790,
        "en": "hire",
        "kk": "",
        "zh": "v. 雇用",
        "unit": 17,
        "example": "Do you hire out bikes?",
        "exampleZh": ""
    },
    {
        "id": 30791,
        "en": "history",
        "kk": "",
        "zh": "n. 歷史",
        "unit": 17,
        "example": "I'm very interested in history.",
        "exampleZh": "我對歷史很有興趣。"
    },
    {
        "id": 30792,
        "en": "hit",
        "kk": "",
        "zh": "v. 打",
        "unit": 17,
        "example": "The ferry hit us amidships.",
        "exampleZh": "渡輪撞到了我們的船中部。"
    },
    {
        "id": 30793,
        "en": "hobby",
        "kk": "",
        "zh": "n. 嗜好",
        "unit": 17,
        "example": "His hobby is freefall parachuting.",
        "exampleZh": ""
    },
    {
        "id": 30794,
        "en": "hold",
        "kk": "",
        "zh": "v. 抓住",
        "unit": 17,
        "example": "Does your offer still hold?",
        "exampleZh": "你的報價還有效嗎？"
    },
    {
        "id": 30795,
        "en": "hole",
        "kk": "",
        "zh": "n. 洞",
        "unit": 17,
        "example": "There's a hole in the crotch.",
        "exampleZh": "胯部有一個洞。"
    },
    {
        "id": 30796,
        "en": "holiday",
        "kk": "",
        "zh": "n. 假日",
        "unit": 17,
        "example": "Today is a holiday in Wales.",
        "exampleZh": "今天是威爾斯的假期。"
    },
    {
        "id": 30797,
        "en": "home",
        "kk": "",
        "zh": "n. 家",
        "unit": 17,
        "example": "Burglars broke into their home.",
        "exampleZh": "竊賊闖入了他們的家。"
    },
    {
        "id": 30798,
        "en": "homework",
        "kk": "",
        "zh": "n. 作業",
        "unit": 17,
        "example": "How much homework do you get?",
        "exampleZh": "你有多少作業？"
    },
    {
        "id": 30799,
        "en": "honest",
        "kk": "",
        "zh": "adj. 誠實的",
        "unit": 17,
        "example": "I'm disappointed, to be honest.",
        "exampleZh": "老實說，我很失望。"
    },
    {
        "id": 30800,
        "en": "honesty",
        "kk": "",
        "zh": "n. 誠實",
        "unit": 17,
        "example": "Her honesty is beyond question.",
        "exampleZh": ""
    },
    {
        "id": 30801,
        "en": "honey",
        "kk": "",
        "zh": "n. 蜂蜜",
        "unit": 17,
        "example": "Have you seen my keys, honey?",
        "exampleZh": ""
    },
    {
        "id": 30802,
        "en": "hop",
        "kk": "",
        "zh": "n. 跳躍",
        "unit": 17,
        "example": "Hop in, I'll drive you home.",
        "exampleZh": ""
    },
    {
        "id": 30803,
        "en": "hope",
        "kk": "",
        "zh": "n. 希望",
        "unit": 17,
        "example": "I hope (that) you're okay.",
        "exampleZh": "我希望你沒事。"
    },
    {
        "id": 30804,
        "en": "horrible",
        "kk": "",
        "zh": "adj. 恐怖的",
        "unit": 17,
        "example": "Ugh – it was horrible.",
        "exampleZh": ""
    },
    {
        "id": 30805,
        "en": "horse",
        "kk": "",
        "zh": "n. 馬",
        "unit": 17,
        "example": "This horse needs firm handling.",
        "exampleZh": "這匹馬需要堅定的駕馭。"
    },
    {
        "id": 30806,
        "en": "hospital",
        "kk": "",
        "zh": "n. 醫院",
        "unit": 17,
        "example": "The VA hospital needs renovation.",
        "exampleZh": ""
    },
    {
        "id": 30807,
        "en": "host",
        "kk": "",
        "zh": "n. 主人",
        "unit": 17,
        "example": "Shall I take my host family a gift?",
        "exampleZh": ""
    },
    {
        "id": 30808,
        "en": "hot",
        "kk": "",
        "zh": "adj. 熱的",
        "unit": 17,
        "example": "It's hot out – very hot, very humid.",
        "exampleZh": "外面很熱——非常熱、非常潮濕。"
    },
    {
        "id": 30809,
        "en": "hotel",
        "kk": "",
        "zh": "n. 旅館",
        "unit": 17,
        "example": "They bugged her hotel room.",
        "exampleZh": ""
    },
    {
        "id": 30810,
        "en": "hour",
        "kk": "",
        "zh": "n. 小時",
        "unit": 17,
        "example": "That clock's an hour fast.",
        "exampleZh": "那個時鐘快了一個小時。"
    },
    {
        "id": 30811,
        "en": "house",
        "kk": "",
        "zh": "n. 房子",
        "unit": 17,
        "example": "Their house is massive.",
        "exampleZh": "他們的房子很大。"
    },
    {
        "id": 30812,
        "en": "housewife",
        "kk": "",
        "zh": "n. 家庭主婦",
        "unit": 17,
        "example": "I hated the label 'housewife'.",
        "exampleZh": ""
    },
    {
        "id": 30813,
        "en": "housework",
        "kk": "",
        "zh": "n. 家事",
        "unit": 17,
        "example": "Housework is a never-ending task.",
        "exampleZh": ""
    },
    {
        "id": 30814,
        "en": "how",
        "kk": "",
        "zh": "adv. 如何",
        "unit": 17,
        "example": "How much is haulage?",
        "exampleZh": "運費是多少？"
    },
    {
        "id": 30815,
        "en": "however",
        "kk": "",
        "zh": "adv. 然而",
        "unit": 17,
        "example": "On one issue, however, she was immovable.",
        "exampleZh": "然而，在一個問題上，她卻無動於衷。"
    },
    {
        "id": 30816,
        "en": "huge",
        "kk": "",
        "zh": "adj. 巨大的",
        "unit": 17,
        "example": "The huge, iron gate was locked.",
        "exampleZh": "巨大的鐵門緊鎖著。"
    },
    {
        "id": 30817,
        "en": "human",
        "kk": "",
        "zh": "n. 人",
        "unit": 17,
        "example": "Human longevity runs in families.",
        "exampleZh": "人類的長壽與家庭息息相關。"
    },
    {
        "id": 30818,
        "en": "humble",
        "kk": "",
        "zh": "adj. 謙虛的",
        "unit": 17,
        "example": "He always makes much of his humble origins.",
        "exampleZh": "他總是看重自己卑微的出身。"
    },
    {
        "id": 30819,
        "en": "humid",
        "kk": "",
        "zh": "adj. 潮溼的",
        "unit": 17,
        "example": "These plants love warm, humid atmospheres.",
        "exampleZh": "這些植物喜歡溫暖、潮濕的氣氛。"
    },
    {
        "id": 30820,
        "en": "humor",
        "kk": "",
        "zh": "n. 幽默",
        "unit": 17,
        "example": "The movie mixes broad humor with romance.",
        "exampleZh": ""
    },
    {
        "id": 30821,
        "en": "humorous",
        "kk": "",
        "zh": "adj. 幽默的",
        "unit": 17,
        "example": "The writing is brutally tough and savagely humorous.",
        "exampleZh": ""
    },
    {
        "id": 30822,
        "en": "hundred",
        "kk": "",
        "zh": "n. 一百",
        "unit": 17,
        "example": "He's on three hundred a week.",
        "exampleZh": "他每週收入三百。"
    },
    {
        "id": 30823,
        "en": "hunger",
        "kk": "",
        "zh": "n. 飢餓",
        "unit": 17,
        "example": "Hunger drove her to steal.",
        "exampleZh": ""
    },
    {
        "id": 30824,
        "en": "hungry",
        "kk": "",
        "zh": "adj. 飢餓的",
        "unit": 17,
        "example": "You're not hungry, are you?",
        "exampleZh": "你不餓吧？"
    },
    {
        "id": 30825,
        "en": "hunt",
        "kk": "",
        "zh": "v. 狩獵",
        "unit": 17,
        "example": "They sleep by day and hunt by night.",
        "exampleZh": ""
    },
    {
        "id": 30826,
        "en": "hunter",
        "kk": "",
        "zh": "n. 獵人",
        "unit": 17,
        "example": "Hunter knew nearly all of this already.",
        "exampleZh": ""
    },
    {
        "id": 30827,
        "en": "hurry",
        "kk": "",
        "zh": "v. 匆忙",
        "unit": 17,
        "example": "Take your time—there's no hurry.",
        "exampleZh": ""
    },
    {
        "id": 30828,
        "en": "hurt",
        "kk": "",
        "zh": "v. 受傷",
        "unit": 17,
        "example": "Did you hurt yourself ?",
        "exampleZh": "你傷到自己了嗎？"
    },
    {
        "id": 30829,
        "en": "husband",
        "kk": "",
        "zh": "n. 丈夫",
        "unit": 17,
        "example": "Her husband was a violent man.",
        "exampleZh": "她的丈夫是一個暴力的人。"
    },
    {
        "id": 30830,
        "en": "ice",
        "kk": "",
        "zh": "n. 冰",
        "unit": 17,
        "example": "The ice started to crack.",
        "exampleZh": "冰開始破裂。"
    },
    {
        "id": 30831,
        "en": "idea",
        "kk": "",
        "zh": "n. 想法",
        "unit": 17,
        "example": "He's dead against the idea.",
        "exampleZh": "他堅決反對這個想法。"
    },
    {
        "id": 30832,
        "en": "if",
        "kk": "",
        "zh": "conj. 假如",
        "unit": 17,
        "example": "I'll be there if poss.",
        "exampleZh": "如果有的話我會去的。"
    },
    {
        "id": 30833,
        "en": "ignore",
        "kk": "",
        "zh": "v. 忽視",
        "unit": 17,
        "example": "We cannot afford to ignore this warning.",
        "exampleZh": "我們不能忽視這項警告。"
    },
    {
        "id": 30834,
        "en": "ill",
        "kk": "",
        "zh": "adj. 生病的",
        "unit": 17,
        "example": "The patient is terminally ill.",
        "exampleZh": ""
    },
    {
        "id": 30835,
        "en": "imagine",
        "kk": "",
        "zh": "v. 想像",
        "unit": 17,
        "example": "I can just imagine his reaction.",
        "exampleZh": "我可以想像他的反應。"
    },
    {
        "id": 30836,
        "en": "impolite",
        "kk": "",
        "zh": "adj. 不禮貌的",
        "unit": 17,
        "example": "Some people think it is impolite to ask someone's age.",
        "exampleZh": ""
    },
    {
        "id": 30837,
        "en": "importance",
        "kk": "",
        "zh": "n. 重要性",
        "unit": 17,
        "example": "This matter is of paramount importance.",
        "exampleZh": ""
    },
    {
        "id": 30838,
        "en": "important",
        "kk": "",
        "zh": "adj. 重要的",
        "unit": 17,
        "example": "He likes to feel important.",
        "exampleZh": "他喜歡感覺自己很重要。"
    },
    {
        "id": 30839,
        "en": "impossible",
        "kk": "",
        "zh": "adj. 不可能的",
        "unit": 17,
        "example": "Thick mist made flying impossible.",
        "exampleZh": ""
    },
    {
        "id": 30840,
        "en": "improve",
        "kk": "",
        "zh": "v. 改進",
        "unit": 17,
        "example": "I need to improve my English.",
        "exampleZh": "我需要提高我的英語能力。"
    },
    {
        "id": 30841,
        "en": "in",
        "kk": "",
        "zh": "prep. 在...之中",
        "unit": 17,
        "example": "They lived in rooms in Kensington.",
        "exampleZh": "他們住在肯辛頓的房間裡。"
    },
    {
        "id": 30842,
        "en": "inch",
        "kk": "",
        "zh": "n. 英吋",
        "unit": 17,
        "example": "There are 2.54 centimetres to an inch.",
        "exampleZh": "一吋等於 2.54 公分。"
    },
    {
        "id": 30843,
        "en": "include",
        "kk": "",
        "zh": "v. 包括",
        "unit": 17,
        "example": "Symptoms include a sore throat.",
        "exampleZh": "症狀包括喉嚨痛。"
    },
    {
        "id": 30844,
        "en": "income",
        "kk": "",
        "zh": "n. 收入",
        "unit": 17,
        "example": "All income must be declared.",
        "exampleZh": ""
    },
    {
        "id": 30845,
        "en": "increase",
        "kk": "",
        "zh": "v. 增加",
        "unit": 17,
        "example": "Prices will increase pro rata.",
        "exampleZh": ""
    },
    {
        "id": 30846,
        "en": "independent",
        "kk": "",
        "zh": "adj. 獨立的",
        "unit": 17,
        "example": "Mozambique became independent in 1975.",
        "exampleZh": "莫三比克於1975年獨立。"
    },
    {
        "id": 30847,
        "en": "indicate",
        "kk": "",
        "zh": "v. 指示",
        "unit": 17,
        "example": "Road markings indicate where you can stop.",
        "exampleZh": "道路標記指示您可以在哪裡停車。"
    },
    {
        "id": 30848,
        "en": "influence",
        "kk": "",
        "zh": "n. 影響",
        "unit": 17,
        "example": "His influence has diminished with time.",
        "exampleZh": ""
    },
    {
        "id": 30849,
        "en": "information",
        "kk": "",
        "zh": "n. 資訊",
        "unit": 17,
        "example": "We pooled ideas and information.",
        "exampleZh": ""
    },
    {
        "id": 30850,
        "en": "ink",
        "kk": "",
        "zh": "n. 墨水",
        "unit": 17,
        "example": "These ink stains won't wash out.",
        "exampleZh": ""
    },
    {
        "id": 30851,
        "en": "insect",
        "kk": "",
        "zh": "n. 昆蟲",
        "unit": 17,
        "example": "At rest the insect looks like a dead leaf.",
        "exampleZh": ""
    },
    {
        "id": 30852,
        "en": "inside",
        "kk": "",
        "zh": "adv. 在內部地",
        "unit": 17,
        "example": "The tree trunk was hollow inside.",
        "exampleZh": "樹幹內部是空心的。"
    },
    {
        "id": 30853,
        "en": "insist",
        "kk": "",
        "zh": "v. 堅持",
        "unit": 17,
        "example": "I insist on paying for the damage.",
        "exampleZh": "我堅持要求賠償損失。"
    },
    {
        "id": 30854,
        "en": "inspire",
        "kk": "",
        "zh": "v. 激勵",
        "unit": 17,
        "example": "We must promote originality, inspire creativity and encourage innovation.",
        "exampleZh": ""
    },
    {
        "id": 30855,
        "en": "instance",
        "kk": "",
        "zh": "n. 例子",
        "unit": 17,
        "example": "Can you quote me an instance of when this happened?",
        "exampleZh": ""
    },
    {
        "id": 30856,
        "en": "instant",
        "kk": "",
        "zh": "adj. 立即的",
        "unit": 17,
        "example": "For an instant, Barney was tempted to flee.",
        "exampleZh": ""
    },
    {
        "id": 30857,
        "en": "instrument",
        "kk": "",
        "zh": "n. 樂器",
        "unit": 17,
        "example": "Is he learning an instrument?",
        "exampleZh": ""
    },
    {
        "id": 30858,
        "en": "intelligent",
        "kk": "",
        "zh": "adj. 聰明的",
        "unit": 17,
        "example": "The dolphin is an intelligent animal.",
        "exampleZh": ""
    },
    {
        "id": 30859,
        "en": "interest",
        "kk": "",
        "zh": "n. 興趣",
        "unit": 17,
        "example": "Interest rates should come down.",
        "exampleZh": "利率應該會下降。"
    },
    {
        "id": 30860,
        "en": "interested",
        "kk": "",
        "zh": "adj. 感興趣的",
        "unit": 17,
        "example": "I'm not interested in sport.",
        "exampleZh": ""
    },
    {
        "id": 30861,
        "en": "interesting",
        "kk": "",
        "zh": "adj. 有趣的",
        "unit": 17,
        "example": "Did you go anywhere interesting?",
        "exampleZh": ""
    },
    {
        "id": 30862,
        "en": "international",
        "kk": "",
        "zh": "adj. 國際的",
        "unit": 17,
        "example": "His speciality is international law.",
        "exampleZh": "他的專業是國際法。"
    },
    {
        "id": 30863,
        "en": "Internet",
        "kk": "",
        "zh": "n. 網路",
        "unit": 17,
        "example": "I'm jacking into the Internet now.",
        "exampleZh": ""
    },
    {
        "id": 30864,
        "en": "Interrupt",
        "kk": "",
        "zh": "v. 打擾",
        "unit": 17,
        "example": "Please continue—I didn't mean to interrupt.",
        "exampleZh": ""
    },
    {
        "id": 30865,
        "en": "interview",
        "kk": "",
        "zh": "n. 訪問",
        "unit": 17,
        "example": "She spruced up for the interview.",
        "exampleZh": ""
    },
    {
        "id": 30866,
        "en": "into",
        "kk": "",
        "zh": "prep. 進入...之內",
        "unit": 17,
        "example": "Caterpillars change into butterflies.",
        "exampleZh": "毛毛蟲變蝴蝶。"
    },
    {
        "id": 30867,
        "en": "introduce",
        "kk": "",
        "zh": "v. 介紹",
        "unit": 17,
        "example": "Can I introduce my wife?",
        "exampleZh": "我可以介紹一下我的妻子嗎？"
    },
    {
        "id": 30868,
        "en": "invent",
        "kk": "",
        "zh": "v. 發明",
        "unit": 17,
        "example": "So they proceeded to invent the verge-and-foliot escapement.",
        "exampleZh": "於是他們開始發明邊緣式擒縱機構。"
    },
    {
        "id": 30869,
        "en": "invitation",
        "kk": "",
        "zh": "n. 邀請",
        "unit": 17,
        "example": "Admission is by invitation only.",
        "exampleZh": ""
    },
    {
        "id": 30870,
        "en": "invite",
        "kk": "",
        "zh": "v. 邀請",
        "unit": 17,
        "example": "Who did you invite to the party?",
        "exampleZh": "你邀請了誰來參加聚會？"
    },
    {
        "id": 30871,
        "en": "iron",
        "kk": "",
        "zh": "n. 熨斗",
        "unit": 17,
        "example": "The huge, iron gate was locked.",
        "exampleZh": "巨大的鐵門緊鎖著。"
    },
    {
        "id": 30872,
        "en": "island",
        "kk": "",
        "zh": "n. 島",
        "unit": 17,
        "example": "The island is thinly populated.",
        "exampleZh": ""
    },
    {
        "id": 30873,
        "en": "item",
        "kk": "",
        "zh": "n. 項目",
        "unit": 17,
        "example": "This item should be hand washed.",
        "exampleZh": ""
    },
    {
        "id": 30874,
        "en": "jacket",
        "kk": "",
        "zh": "n. 外套",
        "unit": 17,
        "example": "Is your jacket real leather?",
        "exampleZh": ""
    },
    {
        "id": 30875,
        "en": "jam",
        "kk": "",
        "zh": "n. 果醬",
        "unit": 17,
        "example": "We were stuck in a traffic jam.",
        "exampleZh": ""
    },
    {
        "id": 30876,
        "en": "January",
        "kk": "",
        "zh": "n. 一月",
        "unit": 17,
        "example": "January is my least favourite month.",
        "exampleZh": "一月是我最不喜歡的月份。"
    },
    {
        "id": 30877,
        "en": "jazz",
        "kk": "",
        "zh": "n. 爵士樂",
        "unit": 17,
        "example": "Jazz is mother's milk to me.",
        "exampleZh": ""
    },
    {
        "id": 30878,
        "en": "jealous",
        "kk": "",
        "zh": "adj. 妒忌的",
        "unit": 17,
        "example": "She was jealous of his wealth.",
        "exampleZh": ""
    },
    {
        "id": 30879,
        "en": "jeans",
        "kk": "",
        "zh": "n. 牛仔褲",
        "unit": 17,
        "example": "His jeans were left in tatters.",
        "exampleZh": ""
    },
    {
        "id": 30880,
        "en": "jeep",
        "kk": "",
        "zh": "n. 吉普車",
        "unit": 17,
        "example": "The jeep bumped along the dirt track.",
        "exampleZh": ""
    },
    {
        "id": 30881,
        "en": "job",
        "kk": "",
        "zh": "n. 工作",
        "unit": 17,
        "example": "Her job is multifaceted.",
        "exampleZh": "她的工作是多方面的。"
    },
    {
        "id": 30882,
        "en": "jog",
        "kk": "",
        "zh": "v. 慢跑",
        "unit": 17,
        "example": "I got up early the next morning to jog.",
        "exampleZh": ""
    },
    {
        "id": 30883,
        "en": "join",
        "kk": "",
        "zh": "v. 參加",
        "unit": 17,
        "example": "How do these two pieces join?",
        "exampleZh": "這兩個部分如何連接？"
    },
    {
        "id": 30884,
        "en": "joke",
        "kk": "",
        "zh": "n. 笑話",
        "unit": 17,
        "example": "Whoever thought up that joke?",
        "exampleZh": "這個笑話是誰想出來的？"
    },
    {
        "id": 30885,
        "en": "journalist",
        "kk": "",
        "zh": "n. 新聞記者",
        "unit": 17,
        "example": "Michael Cross is a freelance journalist.",
        "exampleZh": ""
    },
    {
        "id": 30886,
        "en": "joy",
        "kk": "",
        "zh": "n. 喜悅",
        "unit": 17,
        "example": "To his great joy, she accepted.",
        "exampleZh": "讓他非常高興的是，她接受了。"
    },
    {
        "id": 30887,
        "en": "judge",
        "kk": "",
        "zh": "v. 判斷",
        "unit": 17,
        "example": "The judge allowed my claim.",
        "exampleZh": ""
    },
    {
        "id": 30888,
        "en": "juice",
        "kk": "",
        "zh": "n. 果汁",
        "unit": 17,
        "example": "The juice contains no added sugar.",
        "exampleZh": "果汁不含添加糖。"
    },
    {
        "id": 30889,
        "en": "July",
        "kk": "",
        "zh": "n. 七月",
        "unit": 17,
        "example": "The car is taxed until July.",
        "exampleZh": "這輛車的稅期截止到七月。"
    },
    {
        "id": 30890,
        "en": "jump",
        "kk": "",
        "zh": "v. 跳",
        "unit": 17,
        "example": "A loud bang made me jump.",
        "exampleZh": "一聲巨響讓我跳了起來。"
    },
    {
        "id": 30891,
        "en": "June",
        "kk": "",
        "zh": "n. 六月",
        "unit": 17,
        "example": "Ann's expecting a baby in June.",
        "exampleZh": "安六月就要生孩子了。"
    },
    {
        "id": 30892,
        "en": "just",
        "kk": "",
        "zh": "adv. 剛才",
        "unit": 17,
        "example": "Accountancy just isn't sexy.",
        "exampleZh": "會計並不性感。"
    },
    {
        "id": 30893,
        "en": "keep",
        "kk": "/kiːp/",
        "zh": "v. (使)保持",
        "unit": 17,
        "example": "Her grandchildren keep her young.",
        "exampleZh": "她的孫子讓她保持年輕。"
    },
    {
        "id": 30894,
        "en": "ketchup",
        "kk": "",
        "zh": "n. 番茄醬",
        "unit": 17,
        "example": "Would you like ketchup with your fries?",
        "exampleZh": ""
    },
    {
        "id": 30895,
        "en": "key",
        "kk": "/kiː/",
        "zh": "n. 鑰匙",
        "unit": 17,
        "example": "His contribution could be key.",
        "exampleZh": "他的貢獻可能是關鍵。"
    },
    {
        "id": 30896,
        "en": "kick",
        "kk": "/kɪk/",
        "zh": "v. 踢",
        "unit": 17,
        "example": "This drink has quite a kick.",
        "exampleZh": "這飲料很有勁兒。"
    },
    {
        "id": 30897,
        "en": "kid",
        "kk": "/kɪd/",
        "zh": "n. 小孩",
        "unit": 17,
        "example": "'Oh, she's just a kid,' he said scathingly.",
        "exampleZh": "「哦，她只是個孩子，」他嚴厲地說。"
    },
    {
        "id": 30898,
        "en": "kill",
        "kk": "/kɪl/",
        "zh": "v. 殺死",
        "unit": 17,
        "example": "Chlorine is added to kill bacteria.",
        "exampleZh": "添加氯以殺死細菌。"
    },
    {
        "id": 30899,
        "en": "kilogram",
        "kk": "",
        "zh": "n. 公斤",
        "unit": 17,
        "example": "Flour is sold by the kilogram.",
        "exampleZh": ""
    },
    {
        "id": 30900,
        "en": "kilometer",
        "kk": "",
        "zh": "n. 公里",
        "unit": 17,
        "example": "What's the area of Canada in square kilometer?",
        "exampleZh": ""
    },
    {
        "id": 30901,
        "en": "kind",
        "kk": "/kaɪnd/",
        "zh": "adj. 仁慈的",
        "unit": 17,
        "example": "I've caught some kind of lurgy.",
        "exampleZh": "我得了某種胃病。"
    },
    {
        "id": 30902,
        "en": "kindergarten",
        "kk": "",
        "zh": "n. 幼稚園",
        "unit": 17,
        "example": "She's in kindergarten now.",
        "exampleZh": ""
    },
    {
        "id": 30903,
        "en": "king",
        "kk": "/kɪŋ/",
        "zh": "n. 國王",
        "unit": 17,
        "example": "His king had been checkmated.",
        "exampleZh": "他的國王已被將死。"
    },
    {
        "id": 30904,
        "en": "kingdom",
        "kk": "",
        "zh": "n. 王國",
        "unit": 17,
        "example": "Rome annexed the Nabatean kingdom in AD 106.",
        "exampleZh": ""
    },
    {
        "id": 30905,
        "en": "kiss",
        "kk": "",
        "zh": "n. 吻",
        "unit": 17,
        "example": "The first kiss is dynamite.",
        "exampleZh": "初吻是炸藥。"
    },
    {
        "id": 30906,
        "en": "kitchen",
        "kk": "/ˈkɪtʃən/",
        "zh": "n. 廚房",
        "unit": 17,
        "example": "Her kitchen was kept immaculate.",
        "exampleZh": "她的廚房保持得一塵不染。"
    },
    {
        "id": 30907,
        "en": "kite",
        "kk": "",
        "zh": "n. 風箏",
        "unit": 17,
        "example": "The kite has a span of 1.5 metres.",
        "exampleZh": "風箏的跨距為1.5米。"
    },
    {
        "id": 30908,
        "en": "kitten",
        "kk": "",
        "zh": "n. 小貓",
        "unit": 17,
        "example": "From somewhere, the kitten mewed.",
        "exampleZh": "不知道從什麼地方傳來了小貓的喵喵叫聲。"
    },
    {
        "id": 30909,
        "en": "knee",
        "kk": "/niː/",
        "zh": "n. 膝蓋",
        "unit": 17,
        "example": "The water was only knee-deep.",
        "exampleZh": "水只有膝蓋深。"
    },
    {
        "id": 30910,
        "en": "knife",
        "kk": "/naɪf/",
        "zh": "n. 刀",
        "unit": 17,
        "example": "The knife sliced his jacket.",
        "exampleZh": "刀劃破了他的夾克。"
    },
    {
        "id": 30911,
        "en": "knock",
        "kk": "/nɑːk/",
        "zh": "v. 敲",
        "unit": 17,
        "example": "You don't have to knock—just walk in.",
        "exampleZh": ""
    },
    {
        "id": 30912,
        "en": "know",
        "kk": "/noʊ/",
        "zh": "v. 知道",
        "unit": 17,
        "example": "You wouldn't know him.",
        "exampleZh": "你不會認識他的。"
    },
    {
        "id": 30913,
        "en": "knowledge",
        "kk": "/ˈnɑːlɪdʒ/",
        "zh": "n. 知識",
        "unit": 17,
        "example": "His knowledge of music is extensive.",
        "exampleZh": ""
    },
    {
        "id": 30914,
        "en": "lack",
        "kk": "/læk/",
        "zh": "v. 缺乏",
        "unit": 17,
        "example": "Her eyes ached from lack of sleep.",
        "exampleZh": "她的眼睛因缺乏睡眠而疼痛。"
    },
    {
        "id": 30915,
        "en": "lady",
        "kk": "/ˈleɪdi/",
        "zh": "n. 女士",
        "unit": 17,
        "example": "Her mother was a titled lady.",
        "exampleZh": "她的母親是一位有爵位的女士。"
    },
    {
        "id": 30916,
        "en": "lake",
        "kk": "/leɪk/",
        "zh": "n. 湖泊",
        "unit": 17,
        "example": "They walked around the lake.",
        "exampleZh": "他們繞著湖走了一圈。"
    },
    {
        "id": 30917,
        "en": "lamb",
        "kk": "",
        "zh": "n. 小羊",
        "unit": 17,
        "example": "The lamb gave a faint bleat.",
        "exampleZh": "小羊發出微弱的咩咩叫聲。"
    },
    {
        "id": 30918,
        "en": "lamp",
        "kk": "",
        "zh": "n. 燈",
        "unit": 17,
        "example": "She switched on the bedside lamp.",
        "exampleZh": "她打開了床頭燈。"
    },
    {
        "id": 30919,
        "en": "land",
        "kk": "/lænd/",
        "zh": "n. 土地",
        "unit": 17,
        "example": "90% of the land is cultivated.",
        "exampleZh": "90%的土地為耕地。"
    },
    {
        "id": 30920,
        "en": "language",
        "kk": "/ˈlæŋɡwɪdʒ/",
        "zh": "n. 語言",
        "unit": 17,
        "example": "Her language was not very ladylike.",
        "exampleZh": ""
    },
    {
        "id": 30921,
        "en": "lantern",
        "kk": "",
        "zh": "n. 燈籠",
        "unit": 17,
        "example": "The night lantern glowed softly in the darkness.",
        "exampleZh": ""
    },
    {
        "id": 30922,
        "en": "large",
        "kk": "/lɑːrdʒ/",
        "zh": "adj. 大的",
        "unit": 17,
        "example": "He was smoking a large cigar.",
        "exampleZh": "他抽著一支大雪茄。"
    },
    {
        "id": 30923,
        "en": "last",
        "kk": "/læst/",
        "zh": "adj. 最後的",
        "unit": 17,
        "example": "The doctors operated last night.",
        "exampleZh": "醫生昨晚進行了手術。"
    },
    {
        "id": 30924,
        "en": "late",
        "kk": "/leɪt/",
        "zh": "adj. 晚的",
        "unit": 17,
        "example": "They're nearly always late.",
        "exampleZh": "他們幾乎總是遲到。"
    },
    {
        "id": 30925,
        "en": "later",
        "kk": "",
        "zh": "adj. 稍晚的",
        "unit": 17,
        "example": "Two days later tragedy struck.",
        "exampleZh": ""
    },
    {
        "id": 30926,
        "en": "latest",
        "kk": "",
        "zh": "adj. 最新的",
        "unit": 17,
        "example": "The latest trend is gardening.",
        "exampleZh": "最新的趨勢是園藝。"
    },
    {
        "id": 30927,
        "en": "laugh",
        "kk": "/læf/",
        "zh": "n. 笑聲",
        "unit": 17,
        "example": "He uttered a snorting laugh.",
        "exampleZh": "他發出一聲鼻息般的笑聲。"
    },
    {
        "id": 30928,
        "en": "law",
        "kk": "/lɔː/",
        "zh": "n. 法律",
        "unit": 17,
        "example": "Her specialty is taxation law.",
        "exampleZh": "她的專業是稅法。"
    },
    {
        "id": 30929,
        "en": "lawyer",
        "kk": "",
        "zh": "n. 律師",
        "unit": 17,
        "example": "I should like to call my lawyer.",
        "exampleZh": ""
    },
    {
        "id": 30930,
        "en": "lay",
        "kk": "/leɪ/",
        "zh": "v. 放置",
        "unit": 17,
        "example": "She lay in bed, contemplating.",
        "exampleZh": "她躺在床上，陷入沉思。"
    },
    {
        "id": 30931,
        "en": "lazy",
        "kk": "",
        "zh": "adj. 懶惰的",
        "unit": 17,
        "example": "Look how lazy we've become.",
        "exampleZh": "看看我們變得多麼懶惰。"
    },
    {
        "id": 30932,
        "en": "lead",
        "kk": "/liːd/",
        "zh": "v. 領導",
        "unit": 17,
        "example": "He has gone into the lead.",
        "exampleZh": ""
    },
    {
        "id": 30933,
        "en": "leader",
        "kk": "/ˈliːdər/",
        "zh": "n. 領袖",
        "unit": 17,
        "example": "The party wants her as leader.",
        "exampleZh": "該黨希望她擔任領導人。"
    },
    {
        "id": 30934,
        "en": "leaf",
        "kk": "",
        "zh": "n. 葉子",
        "unit": 17,
        "example": "The trees are coming into leaf.",
        "exampleZh": "樹木開始長葉了。"
    },
    {
        "id": 30935,
        "en": "learn",
        "kk": "/lɜːrn/",
        "zh": "v. 學習",
        "unit": 17,
        "example": "The kids were quick to learn.",
        "exampleZh": "孩子們學得很快。"
    },
    {
        "id": 30936,
        "en": "least",
        "kk": "/liːst/",
        "zh": "adv. 最少",
        "unit": 17,
        "example": "It'll cost at least 500 dollars.",
        "exampleZh": "至少要花費500美元。"
    },
    {
        "id": 30937,
        "en": "leave",
        "kk": "/liːv/",
        "zh": "v. 離開",
        "unit": 17,
        "example": "We didn't leave early enough.",
        "exampleZh": "我們離開得不夠早。"
    },
    {
        "id": 30938,
        "en": "left",
        "kk": "/left/",
        "zh": "adj. 左邊的",
        "unit": 17,
        "example": "He entered stage left.",
        "exampleZh": "他進入舞台左側。"
    },
    {
        "id": 30939,
        "en": "leg",
        "kk": "/leɡ/",
        "zh": "n. 腿",
        "unit": 17,
        "example": "His leg was getting better.",
        "exampleZh": "他的腿越來越好了。"
    },
    {
        "id": 30940,
        "en": "legal",
        "kk": "/ˈliːɡl/",
        "zh": "adj. 合法的",
        "unit": 17,
        "example": "Should euthanasia be made legal?",
        "exampleZh": "安樂死應該合法化嗎？"
    },
    {
        "id": 30941,
        "en": "lemon",
        "kk": "",
        "zh": "n. 檸檬",
        "unit": 17,
        "example": "I plucked a lemon from the tree.",
        "exampleZh": ""
    },
    {
        "id": 30942,
        "en": "lend",
        "kk": "",
        "zh": "v. 借",
        "unit": 17,
        "example": "Here, I'll lend you my pen.",
        "exampleZh": "在這裡，我把筆借給你。"
    },
    {
        "id": 30943,
        "en": "less",
        "kk": "/les/",
        "zh": "adj. 較少的",
        "unit": 17,
        "example": "Her calls became less frequent.",
        "exampleZh": "她的電話越來越少了。"
    },
    {
        "id": 30944,
        "en": "lesson",
        "kk": "/ˈlesn/",
        "zh": "n. 課",
        "unit": 17,
        "example": "I've got a piano lesson later today.",
        "exampleZh": "今天晚些時候我有鋼琴課。"
    },
    {
        "id": 30945,
        "en": "let",
        "kk": "/let/",
        "zh": "v. 讓",
        "unit": 17,
        "example": "Let your body relax.",
        "exampleZh": "讓你的身體放鬆。"
    },
    {
        "id": 30946,
        "en": "letter",
        "kk": "/ˈletər/",
        "zh": "n. 信",
        "unit": 17,
        "example": "I returned the letter unopened.",
        "exampleZh": "我把信原封不動地退回了。"
    },
    {
        "id": 30947,
        "en": "lettuce",
        "kk": "",
        "zh": "n. 生菜",
        "unit": 17,
        "example": "Lettuce was grown by the ancient Romans.",
        "exampleZh": ""
    },
    {
        "id": 30948,
        "en": "level",
        "kk": "/ˈlevl/",
        "zh": "n. 水準",
        "unit": 17,
        "example": "He studied French to degree level.",
        "exampleZh": "他學習了法語並達到了學位水平。"
    },
    {
        "id": 30949,
        "en": "library",
        "kk": "/ˈlaɪbreri/",
        "zh": "n. 圖書館",
        "unit": 17,
        "example": "The library is all on one level.",
        "exampleZh": ""
    },
    {
        "id": 30950,
        "en": "lick",
        "kk": "",
        "zh": "v. 舔",
        "unit": 17,
        "example": "Well, you didn't get a lick amiss, I reckon.",
        "exampleZh": ""
    },
    {
        "id": 30951,
        "en": "lid",
        "kk": "",
        "zh": "n. 蓋子",
        "unit": 17,
        "example": "The lid should fit snugly.",
        "exampleZh": ""
    },
    {
        "id": 30952,
        "en": "lie",
        "kk": "/laɪ/",
        "zh": "n. 謊言",
        "unit": 17,
        "example": "We must nail this lie.",
        "exampleZh": "我們必須揭穿這個謊言。"
    },
    {
        "id": 30953,
        "en": "life",
        "kk": "/laɪf/",
        "zh": "n. 生命",
        "unit": 17,
        "example": "Are you enjoying married life?",
        "exampleZh": "你的婚姻生活幸福嗎？"
    },
    {
        "id": 30954,
        "en": "lift",
        "kk": "/lɪft/",
        "zh": "v. 抬起",
        "unit": 17,
        "example": "There is a lift to all floors.",
        "exampleZh": "所有樓層均設有電梯。"
    },
    {
        "id": 30955,
        "en": "light",
        "kk": "/laɪt/",
        "zh": "n. 燈",
        "unit": 17,
        "example": "Suddenly a warning light blinked.",
        "exampleZh": "突然，警告燈閃爍。"
    },
    {
        "id": 30956,
        "en": "lightning",
        "kk": "",
        "zh": "n. 閃電",
        "unit": 17,
        "example": "Driving today demands lightning reflexes.",
        "exampleZh": ""
    },
    {
        "id": 30957,
        "en": "like",
        "kk": "/laɪk/",
        "zh": "v. 喜歡",
        "unit": 17,
        "example": "It tastes like chocolate.",
        "exampleZh": "嘗起來像巧克力。"
    },
    {
        "id": 30958,
        "en": "likely",
        "kk": "",
        "zh": "adv. 可能",
        "unit": 17,
        "example": "We will likely see him later.",
        "exampleZh": "我們可能稍後會見到他。"
    },
    {
        "id": 30959,
        "en": "lily",
        "kk": "",
        "zh": "n. 百合花",
        "unit": 17,
        "example": "Lily lives in a penthouse just off Park Avenue.",
        "exampleZh": "莉莉住在公園大道附近的一間頂樓公寓。"
    },
    {
        "id": 30960,
        "en": "limit",
        "kk": "",
        "zh": "n. 限度",
        "unit": 17,
        "example": "The road has a 30 mph speed limit.",
        "exampleZh": ""
    },
    {
        "id": 30961,
        "en": "line",
        "kk": "/laɪn/",
        "zh": "n. 線",
        "unit": 17,
        "example": "Your bill includes line rental.",
        "exampleZh": "您的帳單包括線路租金。"
    },
    {
        "id": 30962,
        "en": "link",
        "kk": "/lɪŋk/",
        "zh": "n. 關聯",
        "unit": 17,
        "example": "Click the link and see what happens.",
        "exampleZh": ""
    },
    {
        "id": 30963,
        "en": "lion",
        "kk": "",
        "zh": "n. 獅子",
        "unit": 17,
        "example": "The lion was stalking a zebra.",
        "exampleZh": "獅子正在跟蹤斑馬。"
    },
    {
        "id": 30964,
        "en": "lip",
        "kk": "",
        "zh": "n. 嘴唇",
        "unit": 17,
        "example": "She bit her lip nervously.",
        "exampleZh": "她緊張地咬著嘴唇。"
    },
    {
        "id": 30965,
        "en": "liquid",
        "kk": "",
        "zh": "n. 液體",
        "unit": 17,
        "example": "The liquid is then diluted.",
        "exampleZh": ""
    },
    {
        "id": 30966,
        "en": "list",
        "kk": "/lɪst/",
        "zh": "v. 把...列表",
        "unit": 17,
        "example": "Princess Anne topped the guest list.",
        "exampleZh": "安妮公主名列賓客名單之首。"
    },
    {
        "id": 30967,
        "en": "listen",
        "kk": "/ˈlɪsn/",
        "zh": "v. 聽",
        "unit": 17,
        "example": "Why couldn't he listen to her?",
        "exampleZh": "為什麼他就不能聽她的？"
    },
    {
        "id": 30968,
        "en": "liter",
        "kk": "",
        "zh": "n. 升(容量單位)",
        "unit": 17,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 30969,
        "en": "little",
        "kk": "/ˈlɪtl/",
        "zh": "adj. 少的",
        "unit": 17,
        "example": "I'm feeling a little tipsy.",
        "exampleZh": "我覺得有點醉了。"
    },
    {
        "id": 30970,
        "en": "live",
        "kk": "/lɪv/",
        "zh": "v. 居住",
        "unit": 17,
        "example": "They live in the suburbs.",
        "exampleZh": "他們住在郊區。"
    },
    {
        "id": 30971,
        "en": "loaf",
        "kk": "",
        "zh": "n. 一條(麵包)",
        "unit": 17,
        "example": "He was sawing energetically at a loaf of bread.",
        "exampleZh": ""
    },
    {
        "id": 30972,
        "en": "local",
        "kk": "/ˈloʊkl/",
        "zh": "adj. 本地的",
        "unit": 17,
        "example": "He dabbles in local politics.",
        "exampleZh": ""
    },
    {
        "id": 30973,
        "en": "lock",
        "kk": "/lɑːk/",
        "zh": "n. 鎖",
        "unit": 17,
        "example": "The key doesn't fit the lock.",
        "exampleZh": ""
    },
    {
        "id": 30974,
        "en": "locker",
        "kk": "",
        "zh": "n. 寄物櫃",
        "unit": 17,
        "example": "In the locker room, Amanda changed quickly.",
        "exampleZh": ""
    },
    {
        "id": 30975,
        "en": "lonely",
        "kk": "",
        "zh": "adj. 寂寞的",
        "unit": 17,
        "example": "I could see she was lonely.",
        "exampleZh": "我看得出來她很孤獨。"
    },
    {
        "id": 30976,
        "en": "long",
        "kk": "/lɔːŋ/",
        "zh": "v. 渴望",
        "unit": 17,
        "example": "The bureaucrats dallied too long.",
        "exampleZh": "官僚們耽擱太久了。"
    },
    {
        "id": 30977,
        "en": "look",
        "kk": "",
        "zh": "v. 看",
        "unit": 17,
        "example": "Look, that's not fair.",
        "exampleZh": "聽著，這不公平。"
    },
    {
        "id": 30978,
        "en": "lose",
        "kk": "",
        "zh": "v. 失去",
        "unit": 17,
        "example": "No one likes to lose.",
        "exampleZh": "沒有人喜歡失敗。"
    },
    {
        "id": 30979,
        "en": "loser",
        "kk": "",
        "zh": "n. 失敗者",
        "unit": 17,
        "example": "If you talk like a loser, you'll end up losing.",
        "exampleZh": ""
    },
    {
        "id": 30980,
        "en": "lot",
        "kk": "",
        "zh": "n. 許多",
        "unit": 17,
        "example": "She does a lot of quilting.",
        "exampleZh": "她做了很多絎縫工作。"
    },
    {
        "id": 30981,
        "en": "loud",
        "kk": "",
        "zh": "adj. 大聲的",
        "unit": 17,
        "example": "She gave a loud hiccup.",
        "exampleZh": "她大聲打了個嗝。"
    },
    {
        "id": 30982,
        "en": "love",
        "kk": "",
        "zh": "n. 愛",
        "unit": 17,
        "example": "I love my country as you love yours.",
        "exampleZh": "我愛我的國家，就像你愛你的國家一樣。"
    },
    {
        "id": 30983,
        "en": "lovely",
        "kk": "",
        "zh": "adj. 可愛的",
        "unit": 17,
        "example": "You look lovely, Marcia.",
        "exampleZh": "你看起來很可愛，瑪西亞。"
    },
    {
        "id": 30984,
        "en": "lover",
        "kk": "",
        "zh": "n. 情人",
        "unit": 17,
        "example": "I'm a lover of the outdoors.",
        "exampleZh": ""
    },
    {
        "id": 30985,
        "en": "low",
        "kk": "",
        "zh": "adj. 低的",
        "unit": 17,
        "example": "The humidity is relatively low.",
        "exampleZh": "濕度相對較低。"
    },
    {
        "id": 30986,
        "en": "luck",
        "kk": "",
        "zh": "n. 運氣",
        "unit": 17,
        "example": "Our luck couldn't hold forever.",
        "exampleZh": ""
    },
    {
        "id": 30987,
        "en": "lucky",
        "kk": "",
        "zh": "adj. 幸運的",
        "unit": 17,
        "example": "The 'lucky' tag stuck for years.",
        "exampleZh": "「幸運」的標籤貼了很多年。"
    },
    {
        "id": 30988,
        "en": "lunch",
        "kk": "",
        "zh": "n. 午餐",
        "unit": 17,
        "example": "We'll discuss it over lunch.",
        "exampleZh": "我們將在午餐時討論這個問題。"
    },
    {
        "id": 30989,
        "en": "machine",
        "kk": "",
        "zh": "n. 機器",
        "unit": 17,
        "example": "This machine only accepts coins.",
        "exampleZh": "這台機器只接受硬幣。"
    },
    {
        "id": 30990,
        "en": "mad",
        "kk": "",
        "zh": "adj. 生氣的",
        "unit": 17,
        "example": "He's mad keen on planes.",
        "exampleZh": "他對飛機非常著迷。"
    },
    {
        "id": 30991,
        "en": "magazine",
        "kk": "",
        "zh": "n. 雜誌",
        "unit": 17,
        "example": "The magazine is still produced in-house.",
        "exampleZh": ""
    },
    {
        "id": 30992,
        "en": "magic",
        "kk": "",
        "zh": "n. 魔術",
        "unit": 17,
        "example": "He suddenly appeared as if by magic.",
        "exampleZh": ""
    },
    {
        "id": 30993,
        "en": "magician",
        "kk": "",
        "zh": "n. 魔術師",
        "unit": 17,
        "example": "The magician vanished in a puff of smoke.",
        "exampleZh": ""
    },
    {
        "id": 30994,
        "en": "mail",
        "kk": "",
        "zh": "n. 郵件",
        "unit": 17,
        "example": "There isn't much mail today.",
        "exampleZh": "今天郵件不多。"
    },
    {
        "id": 30995,
        "en": "main",
        "kk": "",
        "zh": "adj. 主要的",
        "unit": 17,
        "example": "What's the main disadvantage ?",
        "exampleZh": ""
    },
    {
        "id": 30996,
        "en": "maintain",
        "kk": "",
        "zh": "v. 維持",
        "unit": 17,
        "example": "It's hard to maintain competitive pricing.",
        "exampleZh": "要保持有競爭力的價格是很困難的。"
    },
    {
        "id": 30997,
        "en": "major",
        "kk": "",
        "zh": "adj. 主要的",
        "unit": 17,
        "example": "Rotterdam is a major port.",
        "exampleZh": ""
    },
    {
        "id": 30998,
        "en": "make",
        "kk": "",
        "zh": "v. 做",
        "unit": 17,
        "example": "Four quarters make a whole.",
        "exampleZh": "四分之四是一個整體。"
    },
    {
        "id": 30999,
        "en": "male",
        "kk": "",
        "zh": "n. 男性",
        "unit": 17,
        "example": "I'm not a male chauvinist.",
        "exampleZh": ""
    },
    {
        "id": 31000,
        "en": "mall",
        "kk": "",
        "zh": "n. 商場",
        "unit": 17,
        "example": "Let's go to the mall.",
        "exampleZh": ""
    },
    {
        "id": 31001,
        "en": "man",
        "kk": "",
        "zh": "n. 男人",
        "unit": 18,
        "example": "He's a highly intelligent man.",
        "exampleZh": "他是一個非常聰明的人。"
    },
    {
        "id": 31002,
        "en": "manager",
        "kk": "",
        "zh": "n. 經理",
        "unit": 18,
        "example": "John is the London area manager.",
        "exampleZh": ""
    },
    {
        "id": 31003,
        "en": "mango",
        "kk": "",
        "zh": "n. 芒果",
        "unit": 18,
        "example": "Mango and pineapple are yellow.",
        "exampleZh": ""
    },
    {
        "id": 31004,
        "en": "manner",
        "kk": "",
        "zh": "n. 態度",
        "unit": 18,
        "example": "She responded in like manner.",
        "exampleZh": ""
    },
    {
        "id": 31005,
        "en": "many",
        "kk": "",
        "zh": "adj. 許多的",
        "unit": 18,
        "example": "Many pesticides are highly toxic.",
        "exampleZh": "許多農藥具有劇毒。"
    },
    {
        "id": 31006,
        "en": "map",
        "kk": "",
        "zh": "n. 地圖",
        "unit": 18,
        "example": "I'm trying to read the map.",
        "exampleZh": "我正在嘗試閱讀地圖。"
    },
    {
        "id": 31007,
        "en": "March",
        "kk": "",
        "zh": "n. 三月",
        "unit": 18,
        "example": "The trial reopened on 6 March.",
        "exampleZh": ""
    },
    {
        "id": 31008,
        "en": "mark",
        "kk": "",
        "zh": "n. 標記",
        "unit": 18,
        "example": "Mark was withdrawn and uncontrollable.",
        "exampleZh": ""
    },
    {
        "id": 31009,
        "en": "market",
        "kk": "",
        "zh": "n. 市場",
        "unit": 18,
        "example": "The market collapsed last October.",
        "exampleZh": "去年十月市場崩盤了。"
    },
    {
        "id": 31010,
        "en": "marriage",
        "kk": "",
        "zh": "n. 結婚",
        "unit": 18,
        "example": "You both have to work hard at marriage.",
        "exampleZh": ""
    },
    {
        "id": 31011,
        "en": "married",
        "kk": "",
        "zh": "adj. 已婚的",
        "unit": 18,
        "example": "They're not married, actually.",
        "exampleZh": ""
    },
    {
        "id": 31012,
        "en": "marry",
        "kk": "",
        "zh": "v. 結婚",
        "unit": 18,
        "example": "They'll forbid you to marry.",
        "exampleZh": "他們會禁止你結婚。"
    },
    {
        "id": 31013,
        "en": "marvelous",
        "kk": "",
        "zh": "adj. 非凡的",
        "unit": 18,
        "example": "What a wonderful, beautiful, marvelous country!",
        "exampleZh": ""
    },
    {
        "id": 31014,
        "en": "mask",
        "kk": "",
        "zh": "n. 面具",
        "unit": 18,
        "example": "The gunman, whose mask had slipped, fled.",
        "exampleZh": ""
    },
    {
        "id": 31015,
        "en": "mass",
        "kk": "",
        "zh": "n. 塊",
        "unit": 18,
        "example": "The mass media tends to personalize politics.",
        "exampleZh": ""
    },
    {
        "id": 31016,
        "en": "master",
        "kk": "",
        "zh": "n. 大師",
        "unit": 18,
        "example": "Students are expected to master a second language.",
        "exampleZh": "學生應該掌握第二語言。"
    },
    {
        "id": 31017,
        "en": "mat",
        "kk": "",
        "zh": "n. 墊子",
        "unit": 18,
        "example": "Wipe your feet on the mat before you come in, please.",
        "exampleZh": ""
    },
    {
        "id": 31018,
        "en": "match",
        "kk": "",
        "zh": "n. 比賽",
        "unit": 18,
        "example": "He was watching a football match.",
        "exampleZh": ""
    },
    {
        "id": 31019,
        "en": "mate",
        "kk": "",
        "zh": "n. 配偶",
        "unit": 18,
        "example": "He has found his ideal mate.",
        "exampleZh": ""
    },
    {
        "id": 31020,
        "en": "material",
        "kk": "",
        "zh": "n. 材料",
        "unit": 18,
        "example": "This material is 45% nylon.",
        "exampleZh": ""
    },
    {
        "id": 31021,
        "en": "matter",
        "kk": "",
        "zh": "n. 事情",
        "unit": 18,
        "example": "This matter is their concern.",
        "exampleZh": "這件事是他們關心的。"
    },
    {
        "id": 31022,
        "en": "maximum",
        "kk": "",
        "zh": "adj. 最多的",
        "unit": 18,
        "example": "Both face maximum forfeitures of about $1.2 million.",
        "exampleZh": ""
    },
    {
        "id": 31023,
        "en": "may",
        "kk": "",
        "zh": "aux. 可能",
        "unit": 18,
        "example": "That may or may not be true.",
        "exampleZh": "這可能是真的，也可能不是。"
    },
    {
        "id": 31024,
        "en": "May",
        "kk": "",
        "zh": "n. 五月",
        "unit": 18,
        "example": "That may or may not be true.",
        "exampleZh": "這可能是真的，也可能不是。"
    },
    {
        "id": 31025,
        "en": "maybe",
        "kk": "",
        "zh": "adv. 也許",
        "unit": 18,
        "example": "Maybe you should socialize more.",
        "exampleZh": "也許你應該多社交。"
    },
    {
        "id": 31026,
        "en": "meal",
        "kk": "",
        "zh": "n. 餐",
        "unit": 18,
        "example": "The meal was amazingly cheap.",
        "exampleZh": ""
    },
    {
        "id": 31027,
        "en": "mean",
        "kk": "",
        "zh": "v. 意指",
        "unit": 18,
        "example": "What does this sentence mean?",
        "exampleZh": "這句話是什麼意思呢？"
    },
    {
        "id": 31028,
        "en": "meaning",
        "kk": "",
        "zh": "n. 意思",
        "unit": 18,
        "example": "What's the meaning of this word?",
        "exampleZh": ""
    },
    {
        "id": 31029,
        "en": "measure",
        "kk": "",
        "zh": "v. 測量",
        "unit": 18,
        "example": "He irritated me beyond measure.",
        "exampleZh": ""
    },
    {
        "id": 31030,
        "en": "meat",
        "kk": "",
        "zh": "n. 肉類",
        "unit": 18,
        "example": "This meat is extremely tender.",
        "exampleZh": "這肉特別嫩。"
    },
    {
        "id": 31031,
        "en": "mechanic",
        "kk": "",
        "zh": "n. 技工",
        "unit": 18,
        "example": "The mechanic located the fault immediately.",
        "exampleZh": ""
    },
    {
        "id": 31032,
        "en": "media",
        "kk": "",
        "zh": "n. 大眾傳媒",
        "unit": 18,
        "example": "Her car was mobbed by the media.",
        "exampleZh": ""
    },
    {
        "id": 31033,
        "en": "medicine",
        "kk": "",
        "zh": "n. 藥",
        "unit": 18,
        "example": "Laughter is the best medicine.",
        "exampleZh": ""
    },
    {
        "id": 31034,
        "en": "medium",
        "kk": "",
        "zh": "adj. 中等的",
        "unit": 18,
        "example": "There are three sizes—small, medium and large.",
        "exampleZh": ""
    },
    {
        "id": 31035,
        "en": "meet",
        "kk": "",
        "zh": "v. 見面",
        "unit": 18,
        "example": "Let's meet on neutral territory.",
        "exampleZh": "讓我們在中立地區見面。"
    },
    {
        "id": 31036,
        "en": "meeting",
        "kk": "",
        "zh": "n. 會議",
        "unit": 18,
        "example": "The meeting went off well.",
        "exampleZh": ""
    },
    {
        "id": 31037,
        "en": "member",
        "kk": "",
        "zh": "n. 會員",
        "unit": 18,
        "example": "He's a member of several London clubs.",
        "exampleZh": ""
    },
    {
        "id": 31038,
        "en": "memory",
        "kk": "",
        "zh": "n. 記憶",
        "unit": 18,
        "example": "Memory is selective and fallible.",
        "exampleZh": ""
    },
    {
        "id": 31039,
        "en": "menu",
        "kk": "",
        "zh": "n. 菜單",
        "unit": 18,
        "example": "The menu included roast grouse.",
        "exampleZh": ""
    },
    {
        "id": 31040,
        "en": "message",
        "kk": "",
        "zh": "n. 信息",
        "unit": 18,
        "example": "Message understood. Over and out.",
        "exampleZh": ""
    },
    {
        "id": 31041,
        "en": "metal",
        "kk": "",
        "zh": "n. 金屬",
        "unit": 18,
        "example": "Rust had eaten into the metal.",
        "exampleZh": ""
    },
    {
        "id": 31042,
        "en": "meter",
        "kk": "",
        "zh": "n. 公尺",
        "unit": 18,
        "example": "A man came to read the gas meter.",
        "exampleZh": ""
    },
    {
        "id": 31043,
        "en": "method",
        "kk": "",
        "zh": "n. 方法",
        "unit": 18,
        "example": "There is just one method that might work.",
        "exampleZh": ""
    },
    {
        "id": 31044,
        "en": "microwave",
        "kk": "",
        "zh": "n. 微波爐",
        "unit": 18,
        "example": "A microwave is a good investment.",
        "exampleZh": ""
    },
    {
        "id": 31045,
        "en": "middle",
        "kk": "",
        "zh": "adj. 中間的",
        "unit": 18,
        "example": "His middle name is Justin.",
        "exampleZh": "他的中間名是賈斯汀。"
    },
    {
        "id": 31046,
        "en": "midnight",
        "kk": "",
        "zh": "n. 午夜",
        "unit": 18,
        "example": "They had to leave at midnight.",
        "exampleZh": ""
    },
    {
        "id": 31047,
        "en": "mile",
        "kk": "",
        "zh": "n. 英里",
        "unit": 18,
        "example": "After a mile, the slope steepened.",
        "exampleZh": "一英里後，斜坡變得陡峭。"
    },
    {
        "id": 31048,
        "en": "milk",
        "kk": "",
        "zh": "n. 牛奶",
        "unit": 18,
        "example": "She's gone for some milk.",
        "exampleZh": "她去喝牛奶了。"
    },
    {
        "id": 31049,
        "en": "million",
        "kk": "",
        "zh": "n. 百萬",
        "unit": 18,
        "example": "Unfilled positions number several million countrywide.",
        "exampleZh": ""
    },
    {
        "id": 31050,
        "en": "mind",
        "kk": "",
        "zh": "v. 介意",
        "unit": 18,
        "example": "She had a brilliant mind.",
        "exampleZh": "她有一個聰明的頭腦。"
    },
    {
        "id": 31051,
        "en": "mine",
        "kk": "",
        "zh": "n. 礦",
        "unit": 18,
        "example": "He's a distant cousin of mine.",
        "exampleZh": ""
    },
    {
        "id": 31052,
        "en": "minor",
        "kk": "",
        "zh": "adj. 次要的",
        "unit": 18,
        "example": "Relatively minor modifications were required.",
        "exampleZh": ""
    },
    {
        "id": 31053,
        "en": "minus",
        "kk": "",
        "zh": "prep. 減",
        "unit": 18,
        "example": "One minus one is zero.",
        "exampleZh": ""
    },
    {
        "id": 31054,
        "en": "minute",
        "kk": "",
        "zh": "n. 分",
        "unit": 18,
        "example": "They arrived barely a minute later.",
        "exampleZh": "不到一分鐘他們就到了。"
    },
    {
        "id": 31055,
        "en": "mirror",
        "kk": "",
        "zh": "n. 鏡子",
        "unit": 18,
        "example": "Steam had clouded the mirror.",
        "exampleZh": ""
    },
    {
        "id": 31056,
        "en": "Miss",
        "kk": "",
        "zh": "n. 小姐",
        "unit": 18,
        "example": "I miss thee, beloved father.",
        "exampleZh": "我想念你，親愛的父親。"
    },
    {
        "id": 31057,
        "en": "miss",
        "kk": "",
        "zh": "v. 想念",
        "unit": 18,
        "example": "I miss thee, beloved father.",
        "exampleZh": "我想念你，親愛的父親。"
    },
    {
        "id": 31058,
        "en": "mistake",
        "kk": "",
        "zh": "n. 錯誤",
        "unit": 18,
        "example": "We've made a dreadful mistake.",
        "exampleZh": "我們犯了一個可怕的錯誤。"
    },
    {
        "id": 31059,
        "en": "mix",
        "kk": "",
        "zh": "v. 混合",
        "unit": 18,
        "example": "You can't mix business with pleasure.",
        "exampleZh": ""
    },
    {
        "id": 31060,
        "en": "model",
        "kk": "",
        "zh": "n. 模特兒",
        "unit": 18,
        "example": "I made a full-size cardboard model.",
        "exampleZh": ""
    },
    {
        "id": 31061,
        "en": "modern",
        "kk": "",
        "zh": "adj. 現代的",
        "unit": 18,
        "example": "She is very modern in outlook.",
        "exampleZh": "她的觀點非常現代。"
    },
    {
        "id": 31062,
        "en": "moment",
        "kk": "",
        "zh": "n. 片刻",
        "unit": 18,
        "example": "It was a really scary moment.",
        "exampleZh": "這真是一個可怕的時刻。"
    },
    {
        "id": 31063,
        "en": "Monday",
        "kk": "",
        "zh": "n. 星期一",
        "unit": 18,
        "example": "She started work last Monday.",
        "exampleZh": "她上週一開始工作。"
    },
    {
        "id": 31064,
        "en": "money",
        "kk": "",
        "zh": "n. 錢",
        "unit": 18,
        "example": "Money can't buy you happiness.",
        "exampleZh": "金錢買不來幸福。"
    },
    {
        "id": 31065,
        "en": "monkey",
        "kk": "",
        "zh": "n. 猴子",
        "unit": 18,
        "example": "The woolly spider monkey is the largest primate in the Americas.",
        "exampleZh": "毛蜘蛛猴是美洲最大的靈長類動物。"
    },
    {
        "id": 31066,
        "en": "monster",
        "kk": "",
        "zh": "n. 妖怪",
        "unit": 18,
        "example": "He drew a monster and coloured it green.",
        "exampleZh": ""
    },
    {
        "id": 31067,
        "en": "month",
        "kk": "",
        "zh": "n. 月份",
        "unit": 18,
        "example": "We're moving house next month.",
        "exampleZh": "我們下個月就要搬家了。"
    },
    {
        "id": 31068,
        "en": "moon",
        "kk": "",
        "zh": "n. 月亮",
        "unit": 18,
        "example": "The moon is a satellite of earth.",
        "exampleZh": "月球是地球的衛星。"
    },
    {
        "id": 31069,
        "en": "more",
        "kk": "",
        "zh": "adj. 更多的",
        "unit": 18,
        "example": "More and more people are using the Internet.",
        "exampleZh": "越來越多的人正在使用網路。"
    },
    {
        "id": 31070,
        "en": "morning",
        "kk": "",
        "zh": "n. 早上",
        "unit": 18,
        "example": "I've been sneezing all morning.",
        "exampleZh": "我整個早上都在打噴嚏。"
    },
    {
        "id": 31071,
        "en": "mop",
        "kk": "",
        "zh": "n. 拖把",
        "unit": 18,
        "example": "I mop the kitchen floor twice a week.",
        "exampleZh": ""
    },
    {
        "id": 31072,
        "en": "mosquito",
        "kk": "",
        "zh": "n. 蚊子",
        "unit": 18,
        "example": "A single mosquito can infect a large number of people.",
        "exampleZh": ""
    },
    {
        "id": 31073,
        "en": "most",
        "kk": "",
        "zh": "adj. 最多的",
        "unit": 18,
        "example": "Most vegetables contain fibre.",
        "exampleZh": "大多數蔬菜都含有纖維。"
    },
    {
        "id": 31074,
        "en": "mother",
        "kk": "",
        "zh": "n. 母親",
        "unit": 18,
        "example": "His mother is partially blind.",
        "exampleZh": "他的母親是半盲的。"
    },
    {
        "id": 31075,
        "en": "motion",
        "kk": "",
        "zh": "n. 動作",
        "unit": 18,
        "example": "Some scenes were filmed in slow motion.",
        "exampleZh": ""
    },
    {
        "id": 31076,
        "en": "motorcycle",
        "kk": "",
        "zh": "n. 摩托車",
        "unit": 18,
        "example": "They sell used and reconditioned motorcycle parts.",
        "exampleZh": ""
    },
    {
        "id": 31077,
        "en": "mountain",
        "kk": "",
        "zh": "n. 山",
        "unit": 18,
        "example": "He mimed climbing a mountain.",
        "exampleZh": "他模仿著爬山的動作。"
    },
    {
        "id": 31078,
        "en": "mouse",
        "kk": "",
        "zh": "n. 老鼠",
        "unit": 18,
        "example": "He moves the cursor, clicks the mouse.",
        "exampleZh": "他移動遊標，點擊滑鼠。"
    },
    {
        "id": 31079,
        "en": "mouth",
        "kk": "",
        "zh": "n. 嘴巴",
        "unit": 18,
        "example": "My mouth felt completely dry.",
        "exampleZh": "我感覺口乾舌燥。"
    },
    {
        "id": 31080,
        "en": "move",
        "kk": "",
        "zh": "v. 移動",
        "unit": 18,
        "example": "I can't move my fingers.",
        "exampleZh": "我的手指動不了。"
    },
    {
        "id": 31081,
        "en": "movement",
        "kk": "",
        "zh": "n. 動作",
        "unit": 18,
        "example": "They were watching her every movement.",
        "exampleZh": "他們注視著她的一舉一動。"
    },
    {
        "id": 31082,
        "en": "movie",
        "kk": "",
        "zh": "n. 電影",
        "unit": 18,
        "example": "That movie was really wack.",
        "exampleZh": "那部電影真的很古怪。"
    },
    {
        "id": 31083,
        "en": "Mr.",
        "kk": "",
        "zh": "n. 先生",
        "unit": 18,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 31084,
        "en": "MRT",
        "kk": "",
        "zh": "n. 捷運",
        "unit": 18,
        "example": "I got there by MRT.",
        "exampleZh": ""
    },
    {
        "id": 31085,
        "en": "mud",
        "kk": "",
        "zh": "n. 泥濘",
        "unit": 18,
        "example": "Your boots are covered in mud.",
        "exampleZh": "你的靴子沾滿了泥巴。"
    },
    {
        "id": 31086,
        "en": "mug",
        "kk": "",
        "zh": "n. 馬克杯",
        "unit": 18,
        "example": "The mug tipped over, spilling hot coffee everywhere.",
        "exampleZh": "杯子翻倒了，熱咖啡灑得到處都是。"
    },
    {
        "id": 31087,
        "en": "museum",
        "kk": "",
        "zh": "n. 博物館",
        "unit": 18,
        "example": "The museum is open Mon.-Sun.",
        "exampleZh": ""
    },
    {
        "id": 31088,
        "en": "music",
        "kk": "",
        "zh": "n. 音樂",
        "unit": 18,
        "example": "They played some Cajun music.",
        "exampleZh": "他們演奏了一些卡真音樂。"
    },
    {
        "id": 31089,
        "en": "musician",
        "kk": "",
        "zh": "n. 音樂家",
        "unit": 18,
        "example": "He was a brilliant musician.",
        "exampleZh": ""
    },
    {
        "id": 31090,
        "en": "must",
        "kk": "",
        "zh": "aux. 必須",
        "unit": 18,
        "example": "We must set realistic goals.",
        "exampleZh": "我們必須設定現實的目標。"
    },
    {
        "id": 31091,
        "en": "nail",
        "kk": "",
        "zh": "n. 釘子",
        "unit": 18,
        "example": "This nail won't come out.",
        "exampleZh": ""
    },
    {
        "id": 31092,
        "en": "name",
        "kk": "/neɪm/",
        "zh": "n. 名字",
        "unit": 18,
        "example": "Is your name hyphenated?",
        "exampleZh": "你的名字有連字符嗎？"
    },
    {
        "id": 31093,
        "en": "napkin",
        "kk": "",
        "zh": "n. 餐巾",
        "unit": 18,
        "example": "Her father cleaned his glasses with a paper napkin.",
        "exampleZh": ""
    },
    {
        "id": 31094,
        "en": "narrow",
        "kk": "",
        "zh": "adj. 狹窄的",
        "unit": 18,
        "example": "He turned into a narrow street.",
        "exampleZh": "他拐進一條狹窄的街道。"
    },
    {
        "id": 31095,
        "en": "nation",
        "kk": "/ˈneɪʃn/",
        "zh": "n. 國家",
        "unit": 18,
        "example": "The article captured the mood of the nation.",
        "exampleZh": "這篇文章抓住了全國人民的情緒。"
    },
    {
        "id": 31096,
        "en": "national",
        "kk": "",
        "zh": "adj. 國家的",
        "unit": 18,
        "example": "The area has been declared a national park.",
        "exampleZh": "該地區已被宣佈為國家公園。"
    },
    {
        "id": 31097,
        "en": "natural",
        "kk": "/ˈnætʃərəl/",
        "zh": "adj. 自然的",
        "unit": 18,
        "example": "She is a natural athlete.",
        "exampleZh": "她是一位天生的運動員。"
    },
    {
        "id": 31098,
        "en": "nature",
        "kk": "/ˈneɪtʃər/",
        "zh": "n. 自然",
        "unit": 18,
        "example": "Violence is not in his nature.",
        "exampleZh": "暴力不是他的本性。"
    },
    {
        "id": 31099,
        "en": "naughty",
        "kk": "",
        "zh": "adj. 頑皮的",
        "unit": 18,
        "example": "Girls, you're being very naughty.",
        "exampleZh": "姑娘們，你們太調皮了。"
    },
    {
        "id": 31100,
        "en": "near",
        "kk": "/nɪr/",
        "zh": "adj. 接近的",
        "unit": 18,
        "example": "His stables are near Oxford.",
        "exampleZh": "他的馬厩在牛津附近。"
    },
    {
        "id": 31101,
        "en": "nearly",
        "kk": "",
        "zh": "adv. 幾乎",
        "unit": 18,
        "example": "The beach was nearly empty.",
        "exampleZh": "海灘幾乎空無一人。"
    },
    {
        "id": 31102,
        "en": "necessary",
        "kk": "/ˈnesəseri/",
        "zh": "adj. 必要的",
        "unit": 18,
        "example": "Military action may become necessary.",
        "exampleZh": "軍事行動可能變得必要。"
    },
    {
        "id": 31103,
        "en": "neck",
        "kk": "/nek/",
        "zh": "n. 脖子",
        "unit": 18,
        "example": "Her arms crept around his neck.",
        "exampleZh": "她的手臂爬上他的脖子。"
    },
    {
        "id": 31104,
        "en": "necklace",
        "kk": "",
        "zh": "n. 項鍊",
        "unit": 18,
        "example": "When did you first miss the necklace?",
        "exampleZh": ""
    },
    {
        "id": 31105,
        "en": "need",
        "kk": "/niːd/",
        "zh": "v. 需要",
        "unit": 18,
        "example": "We need more storage now.",
        "exampleZh": "我們現在需要更多的儲存空間。"
    },
    {
        "id": 31106,
        "en": "needle",
        "kk": "",
        "zh": "n. 針",
        "unit": 18,
        "example": "A compass needle points north.",
        "exampleZh": ""
    },
    {
        "id": 31107,
        "en": "negative",
        "kk": "",
        "zh": "adj. 負面的",
        "unit": 18,
        "example": "They received a negative reply.",
        "exampleZh": ""
    },
    {
        "id": 31108,
        "en": "neighbor",
        "kk": "/ˈneɪbər/",
        "zh": "n. 鄰居",
        "unit": 18,
        "example": "My neighbor is a doctor.",
        "exampleZh": ""
    },
    {
        "id": 31109,
        "en": "neither",
        "kk": "/ˈniːðər/",
        "zh": "adv. 既不...也不",
        "unit": 18,
        "example": "She seemed neither surprised nor worried.",
        "exampleZh": "她看起來既不驚訝也不擔心。"
    },
    {
        "id": 31110,
        "en": "nephew",
        "kk": "",
        "zh": "n. 姪子,外甥",
        "unit": 18,
        "example": "He entrusted the task to his nephew.",
        "exampleZh": ""
    },
    {
        "id": 31111,
        "en": "nervous",
        "kk": "",
        "zh": "adj. 緊張的",
        "unit": 18,
        "example": "He's not the nervous type.",
        "exampleZh": ""
    },
    {
        "id": 31112,
        "en": "nest",
        "kk": "",
        "zh": "n. 鳥巢",
        "unit": 18,
        "example": "The owl seems to have deserted its nest.",
        "exampleZh": ""
    },
    {
        "id": 31113,
        "en": "never",
        "kk": "/ˈnevər/",
        "zh": "adv. 從未",
        "unit": 18,
        "example": "Her determination never wavered.",
        "exampleZh": "她的決心從未動搖過。"
    },
    {
        "id": 31114,
        "en": "new",
        "kk": "/nuː/",
        "zh": "adj. 新的",
        "unit": 18,
        "example": "New England is beautiful.",
        "exampleZh": "新英格蘭很美麗。"
    },
    {
        "id": 31115,
        "en": "news",
        "kk": "/nuːz/",
        "zh": "n. 新聞",
        "unit": 18,
        "example": "The news lifted our spirits.",
        "exampleZh": "這個消息讓我們精神振奮。"
    },
    {
        "id": 31116,
        "en": "newspaper",
        "kk": "",
        "zh": "n. 報紙",
        "unit": 18,
        "example": "May I borrow your newspaper?",
        "exampleZh": "可以藉你的報紙嗎？"
    },
    {
        "id": 31117,
        "en": "next",
        "kk": "/nekst/",
        "zh": "adj. 下一個的",
        "unit": 18,
        "example": "When is your next appointment?",
        "exampleZh": "您的下一次預約是什麼時候？"
    },
    {
        "id": 31118,
        "en": "nice",
        "kk": "/naɪs/",
        "zh": "adj. 友善的",
        "unit": 18,
        "example": "It's been nice meeting you.",
        "exampleZh": "很高興見到你。"
    },
    {
        "id": 31119,
        "en": "niece",
        "kk": "",
        "zh": "n. 姪女,甥女",
        "unit": 18,
        "example": "He looked affectionately at his niece.",
        "exampleZh": ""
    },
    {
        "id": 31120,
        "en": "night",
        "kk": "/naɪt/",
        "zh": "n. 夜晚",
        "unit": 18,
        "example": "I couldn't sleep last night.",
        "exampleZh": "我昨晚無法入睡。"
    },
    {
        "id": 31121,
        "en": "nine",
        "kk": "/naɪn/",
        "zh": "n. 九",
        "unit": 18,
        "example": "We still sighted nine yachts.",
        "exampleZh": "我們仍然看到了九艘遊艇。"
    },
    {
        "id": 31122,
        "en": "nineteen",
        "kk": "",
        "zh": "n. 十九",
        "unit": 18,
        "example": "They have nineteen days to make up their minds.",
        "exampleZh": "他們有十九天的時間來做決定。"
    },
    {
        "id": 31123,
        "en": "ninety",
        "kk": "",
        "zh": "n. 九十",
        "unit": 18,
        "example": "Her weight was under ninety pounds.",
        "exampleZh": "她的體重不到九十磅。"
    },
    {
        "id": 31124,
        "en": "no",
        "kk": "",
        "zh": "adv. 不",
        "unit": 18,
        "example": "She had no money coming in and no funds.",
        "exampleZh": "她沒有錢進來，也沒有資金。"
    },
    {
        "id": 31125,
        "en": "nod",
        "kk": "",
        "zh": "v. 點頭",
        "unit": 18,
        "example": "Don't let yon dog nod off.",
        "exampleZh": ""
    },
    {
        "id": 31126,
        "en": "noise",
        "kk": "/nɔɪz/",
        "zh": "n. 噪音",
        "unit": 18,
        "example": "The noise outside wakened her.",
        "exampleZh": "外面的喧鬧聲吵醒了她。"
    },
    {
        "id": 31127,
        "en": "noisy",
        "kk": "",
        "zh": "adj. 吵雜的",
        "unit": 18,
        "example": "Our next-door neighbours are very noisy.",
        "exampleZh": "我們的隔壁鄰居非常吵鬧。"
    },
    {
        "id": 31128,
        "en": "none",
        "kk": "/nʌn/",
        "zh": "pron. 沒有人",
        "unit": 18,
        "example": "None of them could sing in tune.",
        "exampleZh": "他們誰都唱不準。"
    },
    {
        "id": 31129,
        "en": "noodle",
        "kk": "",
        "zh": "n. 麵條",
        "unit": 18,
        "example": "They have two restaurants that purvey dumplings and chicken noodle soup.",
        "exampleZh": ""
    },
    {
        "id": 31130,
        "en": "noon",
        "kk": "",
        "zh": "n. 中午",
        "unit": 18,
        "example": "I'm leaving on the noon train.",
        "exampleZh": "我要搭中午的火車出發。"
    },
    {
        "id": 31131,
        "en": "nor",
        "kk": "",
        "zh": "conj. 也不",
        "unit": 18,
        "example": "She seemed neither surprised nor worried.",
        "exampleZh": "她看起來既不驚訝也不擔心。"
    },
    {
        "id": 31132,
        "en": "north",
        "kk": "/nɔːrθ/",
        "zh": "n. 北方",
        "unit": 18,
        "example": "A compass needle points north.",
        "exampleZh": "指南針的指針指向北方。"
    },
    {
        "id": 31133,
        "en": "nose",
        "kk": "/noʊz/",
        "zh": "n. 鼻子",
        "unit": 18,
        "example": "I wrinkled my nose in disgust.",
        "exampleZh": "我厭惡地皺起了鼻子。"
    },
    {
        "id": 31134,
        "en": "not",
        "kk": "/nɑːt/",
        "zh": "adv. 不是",
        "unit": 18,
        "example": "It's not over yet—not by a long chalk.",
        "exampleZh": "事情還沒結束——還遠遠沒有結束。"
    },
    {
        "id": 31135,
        "en": "note",
        "kk": "/noʊt/",
        "zh": "n. 便條",
        "unit": 18,
        "example": "Someone left this note for you.",
        "exampleZh": "有人留了這張紙條給你。"
    },
    {
        "id": 31136,
        "en": "notebook",
        "kk": "",
        "zh": "n. 筆記本",
        "unit": 18,
        "example": "Bob whipped out his notebook.",
        "exampleZh": ""
    },
    {
        "id": 31137,
        "en": "nothing",
        "kk": "/ˈnʌθɪŋ/",
        "zh": "pron. 沒有什麼",
        "unit": 18,
        "example": "Sam shrugged and said nothing.",
        "exampleZh": "薩姆聳聳肩，什麼也沒說。"
    },
    {
        "id": 31138,
        "en": "notice",
        "kk": "/ˈnoʊtɪs/",
        "zh": "v. 注意到",
        "unit": 18,
        "example": "He pretended not to notice.",
        "exampleZh": "他假裝沒有註意到。"
    },
    {
        "id": 31139,
        "en": "novel",
        "kk": "",
        "zh": "n. 小說",
        "unit": 18,
        "example": "Have you read her new novel?",
        "exampleZh": ""
    },
    {
        "id": 31140,
        "en": "November",
        "kk": "",
        "zh": "n. 十一月",
        "unit": 18,
        "example": "She left back in November.",
        "exampleZh": "她十一月就離開了。"
    },
    {
        "id": 31141,
        "en": "now",
        "kk": "/naʊ/",
        "zh": "adv. 現在",
        "unit": 18,
        "example": "She's in kindergarten now.",
        "exampleZh": "她現在上幼稚園了。"
    },
    {
        "id": 31142,
        "en": "number",
        "kk": "/ˈnʌmbər/",
        "zh": "n. 數字",
        "unit": 18,
        "example": "My phone number is 266998.",
        "exampleZh": "我的電話號碼是266998。"
    },
    {
        "id": 31143,
        "en": "nurse",
        "kk": "",
        "zh": "n. 護士",
        "unit": 18,
        "example": "The nurse cleaned the wound.",
        "exampleZh": "護士清理了傷口。"
    },
    {
        "id": 31144,
        "en": "nut",
        "kk": "",
        "zh": "n. 堅果",
        "unit": 18,
        "example": "Plant fruit and nut trees.",
        "exampleZh": ""
    },
    {
        "id": 31145,
        "en": "obey",
        "kk": "",
        "zh": "v. 聽從",
        "unit": 18,
        "example": "It was his duty to obey.",
        "exampleZh": "服從是他的職責。"
    },
    {
        "id": 31146,
        "en": "object",
        "kk": "/ˈɑːbdʒɪkt/",
        "zh": "n. 物體",
        "unit": 18,
        "example": "A rock is an inanimate object.",
        "exampleZh": ""
    },
    {
        "id": 31147,
        "en": "ocean",
        "kk": "/ˈoʊʃn/",
        "zh": "n. 海洋",
        "unit": 18,
        "example": "The grey ocean seethed beneath them.",
        "exampleZh": "灰色的海洋在他們腳下沸騰。"
    },
    {
        "id": 31148,
        "en": "o'clock",
        "kk": "",
        "zh": "adv. ...點鐘",
        "unit": 18,
        "example": "The clock said three o'clock.",
        "exampleZh": "時鐘指向三點鐘。"
    },
    {
        "id": 31149,
        "en": "October",
        "kk": "",
        "zh": "n. 十月",
        "unit": 18,
        "example": "The film festival takes place in October.",
        "exampleZh": "電影節於十月舉行。"
    },
    {
        "id": 31150,
        "en": "of",
        "kk": "/ʌv/",
        "zh": "prep. ...的",
        "unit": 18,
        "example": "One of the penalties of fame is loss of privacy.",
        "exampleZh": "名譽的懲罰之一就是失去隱私。"
    },
    {
        "id": 31151,
        "en": "off",
        "kk": "/ɔːf/",
        "zh": "prep. 從...離開",
        "unit": 18,
        "example": "The wedding is off.",
        "exampleZh": "婚禮取消了。"
    },
    {
        "id": 31152,
        "en": "offer",
        "kk": "/ˈɔːfər/",
        "zh": "v. 提出",
        "unit": 18,
        "example": "We offer free technical support.",
        "exampleZh": ""
    },
    {
        "id": 31153,
        "en": "office",
        "kk": "/ˈɔːfɪs/",
        "zh": "n. 辦公室",
        "unit": 18,
        "example": "Moira bounced into the office.",
        "exampleZh": "莫伊拉跳進辦公室。"
    },
    {
        "id": 31154,
        "en": "officer",
        "kk": "",
        "zh": "n. 警官,官員",
        "unit": 18,
        "example": "The officer radioed for advice.",
        "exampleZh": "該官員透過無線電尋求建議。"
    },
    {
        "id": 31155,
        "en": "often",
        "kk": "/ˈɔːfən/",
        "zh": "adv. 經常",
        "unit": 18,
        "example": "She often goes around barefoot.",
        "exampleZh": "她經常赤腳到處走動。"
    },
    {
        "id": 31156,
        "en": "oil",
        "kk": "/ɔɪl/",
        "zh": "n. 石油",
        "unit": 18,
        "example": "The price of oil increased.",
        "exampleZh": "石油價格上漲。"
    },
    {
        "id": 31157,
        "en": "okay",
        "kk": "",
        "zh": "adj. 可以的",
        "unit": 18,
        "example": "Okay, there is a slight difference.",
        "exampleZh": "好吧，有一點不同。"
    },
    {
        "id": 31158,
        "en": "old",
        "kk": "/oʊld/",
        "zh": "adj. 老的",
        "unit": 18,
        "example": "The old man spoke deferentially.",
        "exampleZh": "老者恭敬的說道。"
    },
    {
        "id": 31159,
        "en": "omit",
        "kk": "",
        "zh": "v. 省略",
        "unit": 18,
        "example": "If you are a student, you can omit questions 16–18.",
        "exampleZh": "如果您是學生，則可以省略問題 16-18。"
    },
    {
        "id": 31160,
        "en": "on",
        "kk": "/ɑːn/",
        "zh": "prep. 在...上面",
        "unit": 18,
        "example": "She went on and on about her trip.",
        "exampleZh": "她滔滔不絕地講述她的旅行。"
    },
    {
        "id": 31161,
        "en": "once",
        "kk": "/wʌns/",
        "zh": "adv. 一次",
        "unit": 18,
        "example": "I met Miquela once, briefly.",
        "exampleZh": "我曾短暫見過米克拉一次。"
    },
    {
        "id": 31162,
        "en": "one",
        "kk": "/wʌn/",
        "zh": "adj. 一個的",
        "unit": 18,
        "example": "One minus one is zero.",
        "exampleZh": "一減一為零。"
    },
    {
        "id": 31163,
        "en": "onion",
        "kk": "",
        "zh": "n. 洋蔥",
        "unit": 18,
        "example": "I sliced up an onion.",
        "exampleZh": ""
    },
    {
        "id": 31164,
        "en": "only",
        "kk": "/ˈoʊnli/",
        "zh": "adj. 唯一的",
        "unit": 18,
        "example": "Only the yolk contains cholesterol.",
        "exampleZh": "只有蛋黃含有膽固醇。"
    },
    {
        "id": 31165,
        "en": "open",
        "kk": "/ˈoʊpən/",
        "zh": "v. 打開",
        "unit": 18,
        "example": "The door squeaked open.",
        "exampleZh": "門吱呀一聲打開了。"
    },
    {
        "id": 31166,
        "en": "operate",
        "kk": "/ˈɑːpəreɪt/",
        "zh": "v. 操作",
        "unit": 18,
        "example": "They operate franchises in London and Paris.",
        "exampleZh": "他們在倫敦和巴黎經營特許經營權。"
    },
    {
        "id": 31167,
        "en": "opinion",
        "kk": "/əˈpɪnjən/",
        "zh": "n. 意見",
        "unit": 18,
        "example": "We'll need an expert opinion.",
        "exampleZh": ""
    },
    {
        "id": 31168,
        "en": "or",
        "kk": "/ɔːr/",
        "zh": "conj. 或者",
        "unit": 18,
        "example": "I don't drink whisky or brandy or any other spirits.",
        "exampleZh": "我不喝威士忌、白蘭地或任何其他烈酒。"
    },
    {
        "id": 31169,
        "en": "orange",
        "kk": "",
        "zh": "n. 柑橘",
        "unit": 18,
        "example": "I plucked an orange from the tree.",
        "exampleZh": "我從樹上摘了一個橘子。"
    },
    {
        "id": 31170,
        "en": "order",
        "kk": "/ˈɔːrdər/",
        "zh": "n. 命令",
        "unit": 18,
        "example": "She barked out an order.",
        "exampleZh": "她大聲下達命令。"
    },
    {
        "id": 31171,
        "en": "ordinary",
        "kk": "/ˈɔːrdəneri/",
        "zh": "adj. 普通的",
        "unit": 18,
        "example": "The meal was very ordinary.",
        "exampleZh": "這頓飯很普通。"
    },
    {
        "id": 31172,
        "en": "organ",
        "kk": "",
        "zh": "n. 器官",
        "unit": 18,
        "example": "The largest organ in the body is the liver.",
        "exampleZh": ""
    },
    {
        "id": 31173,
        "en": "organization",
        "kk": "/ˌɔːrɡənəˈzeɪʃn/",
        "zh": "n. 機構",
        "unit": 18,
        "example": "The organization is heavily overspent.",
        "exampleZh": ""
    },
    {
        "id": 31174,
        "en": "other",
        "kk": "/ˈʌðər/",
        "zh": "adj. 其他的",
        "unit": 18,
        "example": "Are there any other questions?",
        "exampleZh": "還有其他問題嗎？"
    },
    {
        "id": 31175,
        "en": "out",
        "kk": "/aʊt/",
        "zh": "adv. 向外",
        "unit": 18,
        "example": "The flame sputters out.",
        "exampleZh": "火焰噴濺而出。"
    },
    {
        "id": 31176,
        "en": "outside",
        "kk": "/ˌaʊtˈsaɪd/",
        "zh": "adv. 在外面",
        "unit": 18,
        "example": "Outside it was bitterly cold.",
        "exampleZh": "外面寒冷刺骨。"
    },
    {
        "id": 31177,
        "en": "oven",
        "kk": "",
        "zh": "n. 烤箱",
        "unit": 18,
        "example": "Nobody relishes cleaning the oven.",
        "exampleZh": ""
    },
    {
        "id": 31178,
        "en": "over",
        "kk": "/ˈoʊvər/",
        "zh": "prep. 在...之上",
        "unit": 18,
        "example": "He plays the same songs over and over.",
        "exampleZh": "他一遍又一遍地播放相同的歌曲。"
    },
    {
        "id": 31179,
        "en": "overseas",
        "kk": "",
        "zh": "adv. 在國外",
        "unit": 18,
        "example": "Nearly half the students come from overseas.",
        "exampleZh": "近一半的學生來自海外。"
    },
    {
        "id": 31180,
        "en": "own",
        "kk": "/oʊn/",
        "zh": "v. 擁有",
        "unit": 18,
        "example": "She makes her own clothes.",
        "exampleZh": "她自己做衣服。"
    },
    {
        "id": 31181,
        "en": "owner",
        "kk": "",
        "zh": "n. 物主",
        "unit": 18,
        "example": "The dog looked mournfully after its owner.",
        "exampleZh": ""
    },
    {
        "id": 31182,
        "en": "ox",
        "kk": "",
        "zh": "n. 公牛",
        "unit": 18,
        "example": "Seven sheep and eight ox.",
        "exampleZh": ""
    },
    {
        "id": 31183,
        "en": "pack",
        "kk": "/pæk/",
        "zh": "v. 打包",
        "unit": 18,
        "example": "All joiners will receive a welcome pack.",
        "exampleZh": ""
    },
    {
        "id": 31184,
        "en": "package",
        "kk": "",
        "zh": "n. 包裹",
        "unit": 18,
        "example": "I tore the package open.",
        "exampleZh": ""
    },
    {
        "id": 31185,
        "en": "page",
        "kk": "/peɪdʒ/",
        "zh": "n. 頁",
        "unit": 18,
        "example": "I ran my eyes over the page.",
        "exampleZh": "我的目光掃過這一頁。"
    },
    {
        "id": 31186,
        "en": "pain",
        "kk": "/peɪn/",
        "zh": "n. 痛苦",
        "unit": 18,
        "example": "The pain was receding slightly.",
        "exampleZh": ""
    },
    {
        "id": 31187,
        "en": "painful",
        "kk": "",
        "zh": "adj. 痛苦的",
        "unit": 18,
        "example": "Her glands were swollen and painful.",
        "exampleZh": "她的腺體腫脹且疼痛。"
    },
    {
        "id": 31188,
        "en": "paint",
        "kk": "/peɪnt/",
        "zh": "v. 畫圖",
        "unit": 18,
        "example": "Why do people paint pictures?",
        "exampleZh": "人們為什麼要畫畫？"
    },
    {
        "id": 31189,
        "en": "painter",
        "kk": "",
        "zh": "n. 畫家",
        "unit": 18,
        "example": "His father was a painter.",
        "exampleZh": ""
    },
    {
        "id": 31190,
        "en": "pair",
        "kk": "/per/",
        "zh": "n. 一對",
        "unit": 18,
        "example": "Maximo put on a pair of glasses.",
        "exampleZh": "馬克西莫戴上一副眼鏡。"
    },
    {
        "id": 31191,
        "en": "pajamas",
        "kk": "",
        "zh": "n. 睡衣",
        "unit": 18,
        "example": "We also need some pajamas.",
        "exampleZh": ""
    },
    {
        "id": 31192,
        "en": "pale",
        "kk": "",
        "zh": "adj. 蒼白的",
        "unit": 18,
        "example": "Rachel looked pale and weary.",
        "exampleZh": ""
    },
    {
        "id": 31193,
        "en": "pan",
        "kk": "",
        "zh": "n. 平底鍋",
        "unit": 18,
        "example": "Oh hell, I've burned the pan.",
        "exampleZh": ""
    },
    {
        "id": 31194,
        "en": "panda",
        "kk": "",
        "zh": "n. 貓熊",
        "unit": 18,
        "example": "The panda is a shy creature.",
        "exampleZh": ""
    },
    {
        "id": 31195,
        "en": "pants",
        "kk": "",
        "zh": "n. 褲子",
        "unit": 18,
        "example": "Don't tell me you've split another pair of pants!",
        "exampleZh": "別告訴我你又裂開了一條褲子！"
    },
    {
        "id": 31196,
        "en": "papaya",
        "kk": "",
        "zh": "n. 木瓜",
        "unit": 18,
        "example": "Apply papaya pulp on the skin.",
        "exampleZh": ""
    },
    {
        "id": 31197,
        "en": "paper",
        "kk": "/ˈpeɪpər/",
        "zh": "n. 紙",
        "unit": 18,
        "example": "He folded the paper carefully.",
        "exampleZh": "他小心翼翼地把紙折起來。"
    },
    {
        "id": 31198,
        "en": "pardon",
        "kk": "",
        "zh": "n. 原諒",
        "unit": 18,
        "example": "I must crave your pardon.",
        "exampleZh": ""
    },
    {
        "id": 31199,
        "en": "parent",
        "kk": "/ˈperənt/",
        "zh": "n. 父親(或母親)",
        "unit": 18,
        "example": "I'm wearing two hats tonight—parent and teacher.",
        "exampleZh": "今晚我身兼兩職──家長和老師。"
    },
    {
        "id": 31200,
        "en": "park",
        "kk": "/pɑːrk/",
        "zh": "n. 公園",
        "unit": 18,
        "example": "Families were strolling around the park.",
        "exampleZh": "一家人在公園散步。"
    },
    {
        "id": 31201,
        "en": "parrot",
        "kk": "",
        "zh": "n. 鸚鵡",
        "unit": 18,
        "example": "Generations of students have learned to parrot the standard explanations.",
        "exampleZh": ""
    },
    {
        "id": 31202,
        "en": "part",
        "kk": "/pɑːrt/",
        "zh": "n. 部分",
        "unit": 18,
        "example": "Have you learned your part yet?",
        "exampleZh": "你已經學會你的部分了嗎？"
    },
    {
        "id": 31203,
        "en": "particular",
        "kk": "/pərˈtɪkjələr/",
        "zh": "adj. 特別的",
        "unit": 18,
        "example": "He loves science fiction in particular.",
        "exampleZh": "他特別喜歡科幻小說。"
    },
    {
        "id": 31204,
        "en": "partner",
        "kk": "/ˈpɑːrtnər/",
        "zh": "n. 夥伴",
        "unit": 18,
        "example": "Gerry offered to partner me at tennis.",
        "exampleZh": ""
    },
    {
        "id": 31205,
        "en": "party",
        "kk": "/ˈpɑːrti/",
        "zh": "n. 派對",
        "unit": 18,
        "example": "The party was arranged quickly.",
        "exampleZh": "聚會很快就安排好了。"
    },
    {
        "id": 31206,
        "en": "pass",
        "kk": "/pæs/",
        "zh": "v. 通過",
        "unit": 18,
        "example": "She timed the pass perfectly.",
        "exampleZh": ""
    },
    {
        "id": 31207,
        "en": "passenger",
        "kk": "",
        "zh": "n. 乘客",
        "unit": 18,
        "example": "I dinged my passenger door.",
        "exampleZh": ""
    },
    {
        "id": 31208,
        "en": "past",
        "kk": "/pæst/",
        "zh": "adj. 過去的",
        "unit": 18,
        "example": "Three runners sprinted past.",
        "exampleZh": "三名跑者疾馳而過。"
    },
    {
        "id": 31209,
        "en": "paste",
        "kk": "",
        "zh": "n. 麵糰",
        "unit": 18,
        "example": "It's quicker to cut and paste than to retype.",
        "exampleZh": ""
    },
    {
        "id": 31210,
        "en": "path",
        "kk": "/pæθ/",
        "zh": "n. 小徑",
        "unit": 18,
        "example": "The path climbed steeply upwards.",
        "exampleZh": ""
    },
    {
        "id": 31211,
        "en": "patient",
        "kk": "/ˈpeɪʃnt/",
        "zh": "n. 病人",
        "unit": 18,
        "example": "The patient is terminally ill.",
        "exampleZh": ""
    },
    {
        "id": 31212,
        "en": "pattern",
        "kk": "/ˈpætərn/",
        "zh": "n. 模式",
        "unit": 18,
        "example": "All three attacks followed the same pattern.",
        "exampleZh": ""
    },
    {
        "id": 31213,
        "en": "pause",
        "kk": "",
        "zh": "n. 停頓",
        "unit": 18,
        "example": "There was a longish pause.",
        "exampleZh": ""
    },
    {
        "id": 31214,
        "en": "pay",
        "kk": "/peɪ/",
        "zh": "v. 付款",
        "unit": 18,
        "example": "She stubbornly refused to pay.",
        "exampleZh": ""
    },
    {
        "id": 31215,
        "en": "peace",
        "kk": "/piːs/",
        "zh": "n. 和平",
        "unit": 18,
        "example": "The people yearned for peace.",
        "exampleZh": ""
    },
    {
        "id": 31216,
        "en": "peaceful",
        "kk": "",
        "zh": "adj. 和平的",
        "unit": 18,
        "example": "I was amazingly light-hearted and peaceful.",
        "exampleZh": "我出奇地輕鬆、平靜。"
    },
    {
        "id": 31217,
        "en": "peach",
        "kk": "",
        "zh": "n. 桃子",
        "unit": 18,
        "example": "He picked out the ripest peach for me.",
        "exampleZh": ""
    },
    {
        "id": 31218,
        "en": "pear",
        "kk": "",
        "zh": "n. 梨子",
        "unit": 18,
        "example": "She bit into a ripe juicy pear.",
        "exampleZh": ""
    },
    {
        "id": 31219,
        "en": "peanut",
        "kk": "",
        "zh": "n. 花生",
        "unit": 18,
        "example": "James flicked a peanut at her.",
        "exampleZh": ""
    },
    {
        "id": 31220,
        "en": "pen",
        "kk": "/pen/",
        "zh": "n. 筆",
        "unit": 18,
        "example": "Where's the top of this pen?",
        "exampleZh": "這支筆的頂部在哪裡？"
    },
    {
        "id": 31221,
        "en": "pencil",
        "kk": "",
        "zh": "n. 鉛筆",
        "unit": 18,
        "example": "I snapped the pencil in half.",
        "exampleZh": "我把鉛筆折成兩半。"
    },
    {
        "id": 31222,
        "en": "people",
        "kk": "/ˈpiːpl/",
        "zh": "n. 人",
        "unit": 18,
        "example": "She tends to annoy people.",
        "exampleZh": "她很容易惹惱別人。"
    },
    {
        "id": 31223,
        "en": "pepper",
        "kk": "",
        "zh": "n. 胡椒粉",
        "unit": 18,
        "example": "She shook some pepper onto her sandwich.",
        "exampleZh": ""
    },
    {
        "id": 31224,
        "en": "perfect",
        "kk": "/ˈpɜːrfɪkt/",
        "zh": "adj. 完美的",
        "unit": 18,
        "example": "He always plays in perfect time.",
        "exampleZh": ""
    },
    {
        "id": 31225,
        "en": "perhaps",
        "kk": "/pərˈhæps/",
        "zh": "adv. 也許",
        "unit": 18,
        "example": "Perhaps I spoke too hastily.",
        "exampleZh": "也許我說得太倉促了。"
    },
    {
        "id": 31226,
        "en": "period",
        "kk": "/ˈpɪriəd/",
        "zh": "n. 一段時間",
        "unit": 18,
        "example": "It was a period of intense activity.",
        "exampleZh": ""
    },
    {
        "id": 31227,
        "en": "personal",
        "kk": "/ˈpɜːrsənl/",
        "zh": "adj. 個人的",
        "unit": 18,
        "example": "The letter was marked 'Personal'.",
        "exampleZh": "這封信被標記為“個人”。"
    },
    {
        "id": 31228,
        "en": "pet",
        "kk": "",
        "zh": "n. 寵物",
        "unit": 18,
        "example": "They had had their pet dog stuffed.",
        "exampleZh": "他們給自己的寵物狗餵了毛絨玩具。"
    },
    {
        "id": 31229,
        "en": "photo",
        "kk": "/ˈfoʊtoʊ/",
        "zh": "n. 照片",
        "unit": 18,
        "example": "The photo wasn't very clear.",
        "exampleZh": ""
    },
    {
        "id": 31230,
        "en": "physics",
        "kk": "",
        "zh": "n. 物理",
        "unit": 18,
        "example": "Have you read this month's 'Physics World'?",
        "exampleZh": ""
    },
    {
        "id": 31231,
        "en": "piano",
        "kk": "",
        "zh": "n. 鋼琴",
        "unit": 18,
        "example": "The piano was in good condition.",
        "exampleZh": "鋼琴狀況良好。"
    },
    {
        "id": 31232,
        "en": "pick",
        "kk": "/pɪk/",
        "zh": "v. 挑選",
        "unit": 18,
        "example": "I'll pick you up at five.",
        "exampleZh": ""
    },
    {
        "id": 31233,
        "en": "picnic",
        "kk": "",
        "zh": "n. 野餐",
        "unit": 18,
        "example": "We're going on a picnic tomorrow.",
        "exampleZh": ""
    },
    {
        "id": 31234,
        "en": "picture",
        "kk": "/ˈpɪktʃər/",
        "zh": "n. 照片",
        "unit": 18,
        "example": "I saw her picture everywhere.",
        "exampleZh": "我到處都看到她的照片。"
    },
    {
        "id": 31235,
        "en": "pie",
        "kk": "",
        "zh": "n. 派",
        "unit": 18,
        "example": "We all had a second helping of pie.",
        "exampleZh": "我們都吃了第二份派。"
    },
    {
        "id": 31236,
        "en": "piece",
        "kk": "/piːs/",
        "zh": "n. 一張",
        "unit": 18,
        "example": "I never found the missing piece.",
        "exampleZh": "我一直沒有找到缺少的部分。"
    },
    {
        "id": 31237,
        "en": "pig",
        "kk": "",
        "zh": "n. 豬",
        "unit": 18,
        "example": "The pig rose squealing and bolted.",
        "exampleZh": "豬尖叫著逃跑了。"
    },
    {
        "id": 31238,
        "en": "pigeon",
        "kk": "",
        "zh": "n. 鴿子",
        "unit": 18,
        "example": "A large Pigeon flew far above him.",
        "exampleZh": ""
    },
    {
        "id": 31239,
        "en": "pile",
        "kk": "",
        "zh": "n. 堆",
        "unit": 18,
        "example": "He swept the leaves up into a pile.",
        "exampleZh": ""
    },
    {
        "id": 31240,
        "en": "pillow",
        "kk": "",
        "zh": "n. 枕頭",
        "unit": 18,
        "example": "He pummelled the pillow with his fists.",
        "exampleZh": ""
    },
    {
        "id": 31241,
        "en": "pin",
        "kk": "",
        "zh": "n. 別針",
        "unit": 18,
        "example": "They're trying to pin it on us.",
        "exampleZh": ""
    },
    {
        "id": 31242,
        "en": "pineapple",
        "kk": "",
        "zh": "n. 鳳梨",
        "unit": 18,
        "example": "Mango and pineapple are yellow.",
        "exampleZh": ""
    },
    {
        "id": 31243,
        "en": "pink",
        "kk": "",
        "zh": "adj. 粉紅色的",
        "unit": 18,
        "example": "Judi's favourite colour is pink.",
        "exampleZh": ""
    },
    {
        "id": 31244,
        "en": "pipe",
        "kk": "",
        "zh": "n. 煙斗",
        "unit": 18,
        "example": "He puffed (away) on his pipe.",
        "exampleZh": ""
    },
    {
        "id": 31245,
        "en": "pizza",
        "kk": "",
        "zh": "n. 披薩",
        "unit": 18,
        "example": "They pigged out on pizza.",
        "exampleZh": ""
    },
    {
        "id": 31246,
        "en": "place",
        "kk": "/pleɪs/",
        "zh": "n. 地方",
        "unit": 18,
        "example": "That place is a madhouse.",
        "exampleZh": "那個地方就是瘋人院。"
    },
    {
        "id": 31247,
        "en": "plain",
        "kk": "",
        "zh": "n. 平原",
        "unit": 18,
        "example": "It was the plain unvarnished truth.",
        "exampleZh": ""
    },
    {
        "id": 31248,
        "en": "plan",
        "kk": "/plæn/",
        "zh": "n. 計畫",
        "unit": 18,
        "example": "If Plan A fails, go to Plan B.",
        "exampleZh": "如果 A 計劃失敗，則轉向 B 計劃。"
    },
    {
        "id": 31249,
        "en": "planet",
        "kk": "",
        "zh": "n. 行星",
        "unit": 18,
        "example": "Saturn is the second biggest planet in the solar system.",
        "exampleZh": ""
    },
    {
        "id": 31250,
        "en": "plant",
        "kk": "/plænt/",
        "zh": "n. 植物",
        "unit": 18,
        "example": "This plant is a vigorous grower.",
        "exampleZh": "這種植物生長旺盛。"
    },
    {
        "id": 31251,
        "en": "plate",
        "kk": "",
        "zh": "n. 盤子",
        "unit": 18,
        "example": "Don't touch that plate—it's hot!",
        "exampleZh": ""
    },
    {
        "id": 31252,
        "en": "platform",
        "kk": "",
        "zh": "n. 月臺",
        "unit": 18,
        "example": "The platform began to produce oil in 1994.",
        "exampleZh": ""
    },
    {
        "id": 31253,
        "en": "play",
        "kk": "/pleɪ/",
        "zh": "v. 玩",
        "unit": 18,
        "example": "I used to play basketball.",
        "exampleZh": "我以前打籃球。"
    },
    {
        "id": 31254,
        "en": "player",
        "kk": "",
        "zh": "n. 運動員",
        "unit": 18,
        "example": "She's a good all-round player.",
        "exampleZh": "她是一位出色的全能球員。"
    },
    {
        "id": 31255,
        "en": "playground",
        "kk": "",
        "zh": "n. 操場",
        "unit": 18,
        "example": "Sam pushed me over in the playground.",
        "exampleZh": "山姆在操場上把我推倒了。"
    },
    {
        "id": 31256,
        "en": "pleasant",
        "kk": "",
        "zh": "adj. 舒適的",
        "unit": 18,
        "example": "The woman had a pleasant face.",
        "exampleZh": "女人面容愉快。"
    },
    {
        "id": 31257,
        "en": "please",
        "kk": "/pliːz/",
        "zh": "v. 請",
        "unit": 18,
        "example": "Two pints of mild, please.",
        "exampleZh": "請來兩品脫淡啤酒。"
    },
    {
        "id": 31258,
        "en": "plus",
        "kk": "/plʌs/",
        "zh": "prep. 加",
        "unit": 18,
        "example": "Two plus five is seven.",
        "exampleZh": ""
    },
    {
        "id": 31259,
        "en": "pocket",
        "kk": "",
        "zh": "n. 口袋",
        "unit": 18,
        "example": "I slid the wallet into his pocket.",
        "exampleZh": "我把錢包塞進他的口袋。"
    },
    {
        "id": 31260,
        "en": "poem",
        "kk": "",
        "zh": "n. 詩",
        "unit": 18,
        "example": "The poem uses simple language.",
        "exampleZh": ""
    },
    {
        "id": 31261,
        "en": "poet",
        "kk": "",
        "zh": "n. 詩人",
        "unit": 18,
        "example": "He is a very underrated poet.",
        "exampleZh": ""
    },
    {
        "id": 31262,
        "en": "point",
        "kk": "/pɔɪnt/",
        "zh": "v. 指出",
        "unit": 18,
        "example": "This last point is crucial.",
        "exampleZh": "最後一點至關重要。"
    },
    {
        "id": 31263,
        "en": "poison",
        "kk": "",
        "zh": "n. 毒藥",
        "unit": 18,
        "example": "Some mushrooms contain a deadly poison.",
        "exampleZh": ""
    },
    {
        "id": 31264,
        "en": "police",
        "kk": "/pəˈliːs/",
        "zh": "n. 警察",
        "unit": 18,
        "example": "Police work is mainly routine.",
        "exampleZh": "警察的工作主要是日常工作。"
    },
    {
        "id": 31265,
        "en": "polite",
        "kk": "",
        "zh": "adj. 有禮貌的",
        "unit": 18,
        "example": "We made polite, stilted conversation.",
        "exampleZh": "我們進行了禮貌而生硬的交談。"
    },
    {
        "id": 31266,
        "en": "pollute",
        "kk": "",
        "zh": "v. 汙染",
        "unit": 18,
        "example": "Mining would pollute the lake and denude the forest.",
        "exampleZh": ""
    },
    {
        "id": 31267,
        "en": "pollution",
        "kk": "",
        "zh": "n. 汙染",
        "unit": 18,
        "example": "Pollution can harm marine life.",
        "exampleZh": ""
    },
    {
        "id": 31268,
        "en": "pond",
        "kk": "",
        "zh": "n. 池塘",
        "unit": 18,
        "example": "The evening breeze ruffled the pond.",
        "exampleZh": "晚風吹動了池塘。"
    },
    {
        "id": 31269,
        "en": "pool",
        "kk": "",
        "zh": "n. 水塘",
        "unit": 18,
        "example": "Does the hotel have a pool?",
        "exampleZh": "飯店有游泳池嗎？"
    },
    {
        "id": 31270,
        "en": "poor",
        "kk": "/pʊr/",
        "zh": "adj. 貧窮的",
        "unit": 18,
        "example": "He passionately championed the poor.",
        "exampleZh": "他熱情地支持窮人。"
    },
    {
        "id": 31271,
        "en": "popcorn",
        "kk": "",
        "zh": "n. 爆米花",
        "unit": 18,
        "example": "Linda lay face down on a living room couch, nibbling popcorn.",
        "exampleZh": "琳達臉朝下躺在客廳的沙發上，啃著爆米花。"
    },
    {
        "id": 31272,
        "en": "popular",
        "kk": "/ˈpɑːpjələr/",
        "zh": "adj. 受歡迎的",
        "unit": 18,
        "example": "The restaurant is deservedly popular.",
        "exampleZh": "這家餐廳當之無愧地很受歡迎。"
    },
    {
        "id": 31273,
        "en": "population",
        "kk": "/ˌpɑːpjəˈleɪʃn/",
        "zh": "n. 人口",
        "unit": 18,
        "example": "The population continues to increase.",
        "exampleZh": ""
    },
    {
        "id": 31274,
        "en": "pork",
        "kk": "",
        "zh": "n. 豬肉",
        "unit": 18,
        "example": "Here the cooks dish out sweet and sour pork.",
        "exampleZh": ""
    },
    {
        "id": 31275,
        "en": "port",
        "kk": "",
        "zh": "n. 港口",
        "unit": 18,
        "example": "The ship steered into port.",
        "exampleZh": ""
    },
    {
        "id": 31276,
        "en": "pose",
        "kk": "",
        "zh": "n. 姿勢",
        "unit": 18,
        "example": "She rearranged herself in another pose.",
        "exampleZh": ""
    },
    {
        "id": 31277,
        "en": "position",
        "kk": "/pəˈzɪʃn/",
        "zh": "n. 位置",
        "unit": 18,
        "example": "My position is quite different.",
        "exampleZh": "我的立場則截然不同。"
    },
    {
        "id": 31278,
        "en": "positive",
        "kk": "/ˈpɑːzətɪv/",
        "zh": "adj. 肯定的",
        "unit": 18,
        "example": "The athlete tested positive for steroids.",
        "exampleZh": ""
    },
    {
        "id": 31279,
        "en": "possible",
        "kk": "/ˈpɑːsəbl/",
        "zh": "adj. 有可能的",
        "unit": 18,
        "example": "Many possible orderings may exist.",
        "exampleZh": "可能存在許多可能的排序。"
    },
    {
        "id": 31280,
        "en": "post",
        "kk": "/poʊst/",
        "zh": "n. 郵件",
        "unit": 18,
        "example": "Have you opened your post yet?",
        "exampleZh": ""
    },
    {
        "id": 31281,
        "en": "pot",
        "kk": "",
        "zh": "n. 鍋",
        "unit": 18,
        "example": "They drank a pot of coffee.",
        "exampleZh": ""
    },
    {
        "id": 31282,
        "en": "potato",
        "kk": "",
        "zh": "n. 馬鈴薯",
        "unit": 18,
        "example": "The boiled potato was mealy.",
        "exampleZh": ""
    },
    {
        "id": 31283,
        "en": "pound",
        "kk": "",
        "zh": "n. 磅",
        "unit": 18,
        "example": "They cost two dollars a pound.",
        "exampleZh": ""
    },
    {
        "id": 31284,
        "en": "powder",
        "kk": "",
        "zh": "n. 粉末",
        "unit": 18,
        "example": "The snow was like powder.",
        "exampleZh": ""
    },
    {
        "id": 31285,
        "en": "power",
        "kk": "/ˈpaʊər/",
        "zh": "n. 力量",
        "unit": 18,
        "example": "They've switched off the power.",
        "exampleZh": "他們已經關掉了電源。"
    },
    {
        "id": 31286,
        "en": "practice",
        "kk": "/ˈpræktɪs/",
        "zh": "n. 練習",
        "unit": 18,
        "example": "She runs a general practice in Hull.",
        "exampleZh": ""
    },
    {
        "id": 31287,
        "en": "praise",
        "kk": "",
        "zh": "n. 讚美",
        "unit": 18,
        "example": "Even his praise is double-edged.",
        "exampleZh": ""
    },
    {
        "id": 31288,
        "en": "pray",
        "kk": "",
        "zh": "v. 禱告",
        "unit": 18,
        "example": "Will you pray to Our Lady for me?",
        "exampleZh": "你願意為我向聖母祈禱嗎？"
    },
    {
        "id": 31289,
        "en": "precious",
        "kk": "",
        "zh": "adj. 珍貴的",
        "unit": 18,
        "example": "Her family's support is particularly precious to Josie.",
        "exampleZh": ""
    },
    {
        "id": 31290,
        "en": "prefer",
        "kk": "",
        "zh": "v. 較喜歡",
        "unit": 18,
        "example": "I prefer walking to climbing.",
        "exampleZh": "比起爬山，我更喜歡步行。"
    },
    {
        "id": 31291,
        "en": "prepare",
        "kk": "/prɪˈper/",
        "zh": "v. 準備",
        "unit": 18,
        "example": "I had no time to prepare.",
        "exampleZh": "我沒有時間準備。"
    },
    {
        "id": 31292,
        "en": "presence",
        "kk": "",
        "zh": "n. 存在",
        "unit": 18,
        "example": "His presence no longer signified.",
        "exampleZh": ""
    },
    {
        "id": 31293,
        "en": "present",
        "kk": "/ˈpreznt/",
        "zh": "adj. 現在的",
        "unit": 18,
        "example": "Her letters conflate past and present.",
        "exampleZh": ""
    },
    {
        "id": 31294,
        "en": "president",
        "kk": "/ˈprezɪdənt/",
        "zh": "n. 總統;校長",
        "unit": 18,
        "example": "Who succeeded Kennedy as President?",
        "exampleZh": ""
    },
    {
        "id": 31295,
        "en": "pressure",
        "kk": "",
        "zh": "n. 壓力",
        "unit": 18,
        "example": "The pressure now was relentless.",
        "exampleZh": ""
    },
    {
        "id": 31296,
        "en": "pretty",
        "kk": "/ˈprɪti/",
        "zh": "adj. 漂亮的",
        "unit": 18,
        "example": "The results were pretty good.",
        "exampleZh": "結果非常好。"
    },
    {
        "id": 31297,
        "en": "price",
        "kk": "/praɪs/",
        "zh": "n. 價格",
        "unit": 18,
        "example": "The price was not negotiable.",
        "exampleZh": "價格沒商量。"
    },
    {
        "id": 31298,
        "en": "pride",
        "kk": "",
        "zh": "n. 驕傲",
        "unit": 18,
        "example": "His words rang with pride.",
        "exampleZh": ""
    },
    {
        "id": 31299,
        "en": "priest",
        "kk": "",
        "zh": "n. 神父",
        "unit": 18,
        "example": "The priest anointed her with oil.",
        "exampleZh": ""
    },
    {
        "id": 31300,
        "en": "primary",
        "kk": "/ˈpraɪmeri/",
        "zh": "adj. 主要的",
        "unit": 18,
        "example": "We turn now to our primary question.",
        "exampleZh": ""
    },
    {
        "id": 31301,
        "en": "prince",
        "kk": "",
        "zh": "n. 王子",
        "unit": 18,
        "example": "The prince should be plunged into work.",
        "exampleZh": ""
    },
    {
        "id": 31302,
        "en": "princess",
        "kk": "",
        "zh": "n. 公主",
        "unit": 18,
        "example": "Princess Anne topped the guest list.",
        "exampleZh": ""
    },
    {
        "id": 31303,
        "en": "principal",
        "kk": "",
        "zh": "n. 原則",
        "unit": 18,
        "example": "The principal is a very busy woman.",
        "exampleZh": ""
    },
    {
        "id": 31304,
        "en": "print",
        "kk": "/prɪnt/",
        "zh": "v. 印刷",
        "unit": 18,
        "example": "Click on the icon when you want to print.",
        "exampleZh": "當您想要列印時，請按一下該圖示。"
    },
    {
        "id": 31305,
        "en": "prison",
        "kk": "",
        "zh": "n. 監獄",
        "unit": 18,
        "example": "The prison is infested with rats.",
        "exampleZh": ""
    },
    {
        "id": 31306,
        "en": "private",
        "kk": "/ˈpraɪvət/",
        "zh": "adj. 私人的",
        "unit": 18,
        "example": "He has a private income.",
        "exampleZh": "他有私人收入。"
    },
    {
        "id": 31307,
        "en": "prize",
        "kk": "",
        "zh": "n. 獎",
        "unit": 18,
        "example": "She stepped up to receive her prize.",
        "exampleZh": ""
    },
    {
        "id": 31308,
        "en": "probably",
        "kk": "/ˈprɑːbəbli/",
        "zh": "adv. 或許",
        "unit": 18,
        "example": "It was probably infested with cooties.",
        "exampleZh": ""
    },
    {
        "id": 31309,
        "en": "problem",
        "kk": "/ˈprɑːbləm/",
        "zh": "n. 問題",
        "unit": 18,
        "example": "The problem is well documented.",
        "exampleZh": "該問題有詳細記錄。"
    },
    {
        "id": 31310,
        "en": "produce",
        "kk": "/prəˈduːs/",
        "zh": "v. 製造",
        "unit": 18,
        "example": "We sell only fresh local produce.",
        "exampleZh": ""
    },
    {
        "id": 31311,
        "en": "production",
        "kk": "",
        "zh": "n. 製造",
        "unit": 18,
        "example": "Production costs began to spiral.",
        "exampleZh": ""
    },
    {
        "id": 31312,
        "en": "professor",
        "kk": "/prəˈfesər/",
        "zh": "n. 教授",
        "unit": 18,
        "example": "His grandfather was a professor.",
        "exampleZh": ""
    },
    {
        "id": 31313,
        "en": "program",
        "kk": "/ˈproʊɡræm/",
        "zh": "n. 節目",
        "unit": 18,
        "example": "The program aired last week.",
        "exampleZh": ""
    },
    {
        "id": 31314,
        "en": "progress",
        "kk": "",
        "zh": "n. 進步",
        "unit": 18,
        "example": "Progress is maddeningly slow.",
        "exampleZh": ""
    },
    {
        "id": 31315,
        "en": "project",
        "kk": "/ˈprɑːdʒekt/",
        "zh": "n. 方案",
        "unit": 18,
        "example": "The whole project was badly managed.",
        "exampleZh": ""
    },
    {
        "id": 31316,
        "en": "promise",
        "kk": "/ˈprɑːmɪs/",
        "zh": "n. 承諾",
        "unit": 18,
        "example": "Their future was full of promise.",
        "exampleZh": ""
    },
    {
        "id": 31317,
        "en": "pronounce",
        "kk": "",
        "zh": "v. 發音",
        "unit": 18,
        "example": "The judge will pronounce sentence today.",
        "exampleZh": "法官今天將宣判。"
    },
    {
        "id": 31318,
        "en": "protect",
        "kk": "/prəˈtekt/",
        "zh": "v. 保護",
        "unit": 18,
        "example": "Women banded together to protect each other.",
        "exampleZh": "婦女們團結起來互相保護。"
    },
    {
        "id": 31319,
        "en": "proud",
        "kk": "/praʊd/",
        "zh": "adj. 驕傲的",
        "unit": 18,
        "example": "I'm proud of my Italian roots.",
        "exampleZh": "我為我的義大利血統感到自豪。"
    },
    {
        "id": 31320,
        "en": "prove",
        "kk": "",
        "zh": "v. 證明",
        "unit": 18,
        "example": "This advice was to prove valuable.",
        "exampleZh": "事實證明，這個建議很有價值。"
    },
    {
        "id": 31321,
        "en": "provide",
        "kk": "/prəˈvaɪd/",
        "zh": "v. 提供",
        "unit": 18,
        "example": "He refused to provide a specimen.",
        "exampleZh": "他拒絕提供樣本。"
    },
    {
        "id": 31322,
        "en": "public",
        "kk": "/ˈpʌblɪk/",
        "zh": "adj. 公共的",
        "unit": 18,
        "example": "She retreated from public life.",
        "exampleZh": "她退出了公眾生活。"
    },
    {
        "id": 31323,
        "en": "pull",
        "kk": "/pʊl/",
        "zh": "v. 拉",
        "unit": 18,
        "example": "You push and I'll pull.",
        "exampleZh": "你推，我拉。"
    },
    {
        "id": 31324,
        "en": "pump",
        "kk": "",
        "zh": "n. 抽水機",
        "unit": 18,
        "example": "The pump sucks air out through the valve.",
        "exampleZh": ""
    },
    {
        "id": 31325,
        "en": "pumpkin",
        "kk": "",
        "zh": "n. 南瓜",
        "unit": 18,
        "example": "Pumpkin pie is a traditional American dish served on Thanksgiving.",
        "exampleZh": ""
    },
    {
        "id": 31326,
        "en": "punish",
        "kk": "",
        "zh": "v. 處罰",
        "unit": 18,
        "example": "I don't believe that George ever had to punish the children.",
        "exampleZh": "我不認為喬治必須懲罰孩子。"
    },
    {
        "id": 31327,
        "en": "puppy",
        "kk": "",
        "zh": "n. 小狗",
        "unit": 18,
        "example": "A puppy stepped in the fresh cement.",
        "exampleZh": ""
    },
    {
        "id": 31328,
        "en": "purple",
        "kk": "",
        "zh": "adj. 紫色的",
        "unit": 18,
        "example": "She was dressed in purple.",
        "exampleZh": "她穿著紫色衣服。"
    },
    {
        "id": 31329,
        "en": "purpose",
        "kk": "/ˈpɜːrpəs/",
        "zh": "n. 目的",
        "unit": 18,
        "example": "The purpose of industry is to create wealth.",
        "exampleZh": "工業的目的是創造財富。"
    },
    {
        "id": 31330,
        "en": "purse",
        "kk": "",
        "zh": "n. 錢包",
        "unit": 18,
        "example": "She closed her purse with a snap.",
        "exampleZh": ""
    },
    {
        "id": 31331,
        "en": "push",
        "kk": "/pʊʃ/",
        "zh": "v. 推",
        "unit": 18,
        "example": "You push and I'll pull.",
        "exampleZh": "你推，我拉。"
    },
    {
        "id": 31332,
        "en": "put",
        "kk": "/pʊt/",
        "zh": "v. 放置",
        "unit": 18,
        "example": "Danny put down his glass.",
        "exampleZh": "丹尼放下杯子。"
    },
    {
        "id": 31333,
        "en": "puzzle",
        "kk": "",
        "zh": "n. 謎題",
        "unit": 18,
        "example": "The rise in accidents remains a puzzle.",
        "exampleZh": ""
    },
    {
        "id": 31334,
        "en": "quality",
        "kk": "/ˈkwɑːləti/",
        "zh": "n. 品質",
        "unit": 18,
        "example": "The quality is uniformly high.",
        "exampleZh": ""
    },
    {
        "id": 31335,
        "en": "quantity",
        "kk": "",
        "zh": "n. 量",
        "unit": 18,
        "example": "Is it available in sufficient quantity?",
        "exampleZh": ""
    },
    {
        "id": 31336,
        "en": "quarter",
        "kk": "",
        "zh": "n. 四分之一",
        "unit": 18,
        "example": "Nowitzki fouled Mitchell early in the third quarter.",
        "exampleZh": ""
    },
    {
        "id": 31337,
        "en": "queen",
        "kk": "",
        "zh": "n. 女王",
        "unit": 18,
        "example": "She curtsied to the Queen.",
        "exampleZh": "她向女王行屈膝禮。"
    },
    {
        "id": 31338,
        "en": "question",
        "kk": "/ˈkwestʃən/",
        "zh": "n. 問題",
        "unit": 18,
        "example": "That's a very hard question.",
        "exampleZh": "這是一個非常難的問題。"
    },
    {
        "id": 31339,
        "en": "quick",
        "kk": "/kwɪk/",
        "zh": "adj. 迅速的",
        "unit": 18,
        "example": "He kept giving quick blinks.",
        "exampleZh": "他不停地快速眨眼。"
    },
    {
        "id": 31340,
        "en": "quiet",
        "kk": "/ˈkwaɪət/",
        "zh": "adj. 安靜的",
        "unit": 18,
        "example": "'Be quiet,' said the teacher.",
        "exampleZh": ""
    },
    {
        "id": 31341,
        "en": "quit",
        "kk": "",
        "zh": "v. 停止",
        "unit": 18,
        "example": "He quit his job as an office boy.",
        "exampleZh": "他辭去了辦公室勤雜工的工作。"
    },
    {
        "id": 31342,
        "en": "quite",
        "kk": "/kwaɪt/",
        "zh": "adv. 相當地",
        "unit": 18,
        "example": "I worked quite irregular hours.",
        "exampleZh": "我的工作時間很不規律。"
    },
    {
        "id": 31343,
        "en": "quiz",
        "kk": "",
        "zh": "n. 小考",
        "unit": 18,
        "example": "Have you entered your name for the quiz yet?",
        "exampleZh": ""
    },
    {
        "id": 31344,
        "en": "rabbit",
        "kk": "",
        "zh": "n. 兔子",
        "unit": 18,
        "example": "The dog scented a rabbit.",
        "exampleZh": ""
    },
    {
        "id": 31345,
        "en": "race",
        "kk": "/reɪs/",
        "zh": "n. 賽跑",
        "unit": 18,
        "example": "He finished fifth in the race.",
        "exampleZh": "他在比賽中獲得第五名。"
    },
    {
        "id": 31346,
        "en": "radio",
        "kk": "/ˈreɪdioʊ/",
        "zh": "n. 收音機",
        "unit": 18,
        "example": "The radio crackled into life.",
        "exampleZh": "收音機噼裡啪啦地響了起來。"
    },
    {
        "id": 31347,
        "en": "railroad",
        "kk": "",
        "zh": "n. 鐵路",
        "unit": 18,
        "example": "Court decisions always went against railroad workers.",
        "exampleZh": "法院的判決總是對鐵路工人不利。"
    },
    {
        "id": 31348,
        "en": "rain",
        "kk": "",
        "zh": "n. 雨",
        "unit": 18,
        "example": "The rain continued unabated.",
        "exampleZh": "雨一直下個不停。"
    },
    {
        "id": 31349,
        "en": "rainbow",
        "kk": "",
        "zh": "n. 彩虹",
        "unit": 18,
        "example": "Finally the rainbow disappeared.",
        "exampleZh": "最後彩虹消失了。"
    },
    {
        "id": 31350,
        "en": "rainy",
        "kk": "",
        "zh": "adj. 多雨的",
        "unit": 18,
        "example": "The rainy season in the Andes normally starts in December.",
        "exampleZh": "安第斯山脈的雨季通常從十二月開始。"
    },
    {
        "id": 31351,
        "en": "raise",
        "kk": "/reɪz/",
        "zh": "v. 增加",
        "unit": 18,
        "example": "How can we raise standards in schools?",
        "exampleZh": "我們怎樣才能提高學校的標準？"
    },
    {
        "id": 31352,
        "en": "range",
        "kk": "/reɪndʒ/",
        "zh": "n. 範圍",
        "unit": 18,
        "example": "We stock a wide range of perfumes.",
        "exampleZh": ""
    },
    {
        "id": 31353,
        "en": "rare",
        "kk": "",
        "zh": "adj. 稀少的",
        "unit": 18,
        "example": "This species is extremely rare.",
        "exampleZh": "該品種極為罕見。"
    },
    {
        "id": 31354,
        "en": "rat",
        "kk": "",
        "zh": "n. 老鼠",
        "unit": 18,
        "example": "He held his breath as a rat scuttled past.",
        "exampleZh": "當一隻老鼠疾馳而過時，他屏住了呼吸。"
    },
    {
        "id": 31355,
        "en": "rather",
        "kk": "/ˈræðər/",
        "zh": "adv. 稍微",
        "unit": 18,
        "example": "The leaves taste rather bitter.",
        "exampleZh": "葉子的味道比較苦。"
    },
    {
        "id": 31356,
        "en": "reach",
        "kk": "/riːtʃ/",
        "zh": "v. 到達",
        "unit": 18,
        "example": "I can't reach the top shelf.",
        "exampleZh": "我搆不到最上面的架子。"
    },
    {
        "id": 31357,
        "en": "read",
        "kk": "/riːd/",
        "zh": "v. 閱讀",
        "unit": 18,
        "example": "What does the thermometer read?",
        "exampleZh": "溫度計的讀數是什麼？"
    },
    {
        "id": 31358,
        "en": "ready",
        "kk": "/ˈredi/",
        "zh": "adj. 準備好的",
        "unit": 18,
        "example": "Everybody ready? It's showtime!",
        "exampleZh": "大家準備好了嗎？演出時間到了！"
    },
    {
        "id": 31359,
        "en": "real",
        "kk": "/riːl/",
        "zh": "adj. 真的",
        "unit": 18,
        "example": "She's a real cosmopolitan.",
        "exampleZh": "她是一位真正的國際主義者。"
    },
    {
        "id": 31360,
        "en": "realize",
        "kk": "",
        "zh": "v. 瞭解",
        "unit": 18,
        "example": "Only later did she realize her mistake.",
        "exampleZh": "直到後來她才意識到自己的錯誤。"
    },
    {
        "id": 31361,
        "en": "really",
        "kk": "/ˈriːli/",
        "zh": "adv. 真實地",
        "unit": 18,
        "example": "This sweater really itches.",
        "exampleZh": ""
    },
    {
        "id": 31362,
        "en": "reason",
        "kk": "/ˈriːzn/",
        "zh": "n. 理由",
        "unit": 18,
        "example": "The reason is blindingly obvious.",
        "exampleZh": "原因是顯而易見的。"
    },
    {
        "id": 31363,
        "en": "receive",
        "kk": "/rɪˈsiːv/",
        "zh": "v. 收到",
        "unit": 18,
        "example": "He will receive $6,000 in back pay.",
        "exampleZh": "他將收到 6,000 美元的欠薪。"
    },
    {
        "id": 31364,
        "en": "record",
        "kk": "/ˈrekərd/",
        "zh": "n. 記錄",
        "unit": 18,
        "example": "Profits were at record levels.",
        "exampleZh": ""
    },
    {
        "id": 31365,
        "en": "recover",
        "kk": "",
        "zh": "v. 康復",
        "unit": 18,
        "example": "The economy is at last beginning to recover.",
        "exampleZh": ""
    },
    {
        "id": 31366,
        "en": "rectangle",
        "kk": "",
        "zh": "n. 長方形",
        "unit": 18,
        "example": "This is a smaller rounded rectangle.",
        "exampleZh": ""
    },
    {
        "id": 31367,
        "en": "recycle",
        "kk": "",
        "zh": "v. 回收",
        "unit": 18,
        "example": "The objective would be to recycle 98 percent of domestic waste.",
        "exampleZh": ""
    },
    {
        "id": 31368,
        "en": "red",
        "kk": "/red/",
        "zh": "adj. 紅色的",
        "unit": 18,
        "example": "She was wearing red lipstick.",
        "exampleZh": "她塗著紅色口紅。"
    },
    {
        "id": 31369,
        "en": "refrigerator",
        "kk": "",
        "zh": "n. 冰箱",
        "unit": 18,
        "example": "His refrigerator frequently looked half empty.",
        "exampleZh": ""
    },
    {
        "id": 31370,
        "en": "refuse",
        "kk": "",
        "zh": "v. 拒絕",
        "unit": 18,
        "example": "I could hardly refuse, could I?",
        "exampleZh": "我很難拒絕，不是嗎？"
    },
    {
        "id": 31371,
        "en": "regard",
        "kk": "",
        "zh": "v. 認為",
        "unit": 18,
        "example": "I regard this as a serious matter.",
        "exampleZh": ""
    },
    {
        "id": 31372,
        "en": "regret",
        "kk": "",
        "zh": "n. 後悔",
        "unit": 18,
        "example": "I deeply regret what I said.",
        "exampleZh": ""
    },
    {
        "id": 31373,
        "en": "regular",
        "kk": "",
        "zh": "adj. 規律的",
        "unit": 18,
        "example": "Do you take regular exercise?",
        "exampleZh": ""
    },
    {
        "id": 31374,
        "en": "reject",
        "kk": "",
        "zh": "v. 拒絕",
        "unit": 18,
        "example": "Patients often reject transplanted organs.",
        "exampleZh": "患者常常排斥移植的器官。"
    },
    {
        "id": 31375,
        "en": "relation",
        "kk": "",
        "zh": "n. 關係",
        "unit": 18,
        "example": "It is a question of the relation of ethics to economics.",
        "exampleZh": ""
    },
    {
        "id": 31376,
        "en": "relative",
        "kk": "",
        "zh": "n. 親戚",
        "unit": 18,
        "example": "He's a distant relative of the mayor.",
        "exampleZh": ""
    },
    {
        "id": 31377,
        "en": "remember",
        "kk": "/rɪˈmembər/",
        "zh": "v. 記得",
        "unit": 18,
        "example": "I'll sure remember this trip!",
        "exampleZh": "我一定會記得這次旅行！"
    },
    {
        "id": 31378,
        "en": "remind",
        "kk": "",
        "zh": "v. 提醒",
        "unit": 18,
        "example": "Remind me to phone Alan before I go out.",
        "exampleZh": ""
    },
    {
        "id": 31379,
        "en": "rent",
        "kk": "",
        "zh": "v. 租借",
        "unit": 18,
        "example": "His landlord doubled the rent.",
        "exampleZh": ""
    },
    {
        "id": 31380,
        "en": "repair",
        "kk": "",
        "zh": "v. 修理",
        "unit": 18,
        "example": "I took my bike in for repair.",
        "exampleZh": ""
    },
    {
        "id": 31381,
        "en": "repeat",
        "kk": "/rɪˈpiːt/",
        "zh": "v. 重複",
        "unit": 18,
        "example": "The claims are, I repeat, totally unfounded.",
        "exampleZh": ""
    },
    {
        "id": 31382,
        "en": "reply",
        "kk": "",
        "zh": "v. 回應",
        "unit": 18,
        "example": "His reply was not repeatable.",
        "exampleZh": ""
    },
    {
        "id": 31383,
        "en": "report",
        "kk": "/rɪˈpɔːrt/",
        "zh": "n. 報告",
        "unit": 18,
        "example": "She glanced through the report.",
        "exampleZh": "她瀏覽了一下報告。"
    },
    {
        "id": 31384,
        "en": "reporter",
        "kk": "",
        "zh": "n. 記者",
        "unit": 18,
        "example": "He is a 24-year-old trainee reporter.",
        "exampleZh": ""
    },
    {
        "id": 31385,
        "en": "require",
        "kk": "/rɪˈkwaɪər/",
        "zh": "v. 需要",
        "unit": 18,
        "example": "All decisions would require unanimity.",
        "exampleZh": "所有決定都需要一致同意。"
    },
    {
        "id": 31386,
        "en": "respect",
        "kk": "",
        "zh": "n. 尊重",
        "unit": 18,
        "example": "I respect him as a doctor.",
        "exampleZh": ""
    },
    {
        "id": 31387,
        "en": "responsible",
        "kk": "",
        "zh": "adj. 有責任的",
        "unit": 18,
        "example": "He's directly responsible to the boss.",
        "exampleZh": "他直接對老闆負責。"
    },
    {
        "id": 31388,
        "en": "rest",
        "kk": "/rest/",
        "zh": "n. 休息",
        "unit": 18,
        "example": "Let's rest under yonder tree.",
        "exampleZh": "我們在那棵樹下休息吧。"
    },
    {
        "id": 31389,
        "en": "restaurant",
        "kk": "",
        "zh": "n. 餐廳",
        "unit": 18,
        "example": "The restaurant is deservedly popular.",
        "exampleZh": ""
    },
    {
        "id": 31390,
        "en": "restroom",
        "kk": "",
        "zh": "n. 洗手間",
        "unit": 18,
        "example": "The girl went into the restroom with a blush.",
        "exampleZh": ""
    },
    {
        "id": 31391,
        "en": "result",
        "kk": "/rɪˈzʌlt/",
        "zh": "n. 結果",
        "unit": 18,
        "example": "They were elated at the result.",
        "exampleZh": ""
    },
    {
        "id": 31392,
        "en": "return",
        "kk": "/rɪˈtɜːrn/",
        "zh": "v. 歸來",
        "unit": 18,
        "example": "Regulars return year after year.",
        "exampleZh": "常客年復一年地回歸。"
    },
    {
        "id": 31393,
        "en": "review",
        "kk": "/rɪˈvjuː/",
        "zh": "v. 複習",
        "unit": 18,
        "example": "The case is subject to judicial review.",
        "exampleZh": ""
    },
    {
        "id": 31394,
        "en": "revise",
        "kk": "",
        "zh": "v. 改變",
        "unit": 18,
        "example": "I can't come out tonight. I have to revise.",
        "exampleZh": ""
    },
    {
        "id": 31395,
        "en": "rice",
        "kk": "",
        "zh": "n. 米",
        "unit": 18,
        "example": "We eat rice every single day.",
        "exampleZh": "我們每天都吃米飯。"
    },
    {
        "id": 31396,
        "en": "rich",
        "kk": "/rɪtʃ/",
        "zh": "adj. 有錢的",
        "unit": 18,
        "example": "They must be stinking rich.",
        "exampleZh": "他們一定很有錢。"
    },
    {
        "id": 31397,
        "en": "ride",
        "kk": "/raɪd/",
        "zh": "v. 騎",
        "unit": 18,
        "example": "They hitched a ride in a truck.",
        "exampleZh": ""
    },
    {
        "id": 31398,
        "en": "right",
        "kk": "/raɪt/",
        "zh": "adj. 正確的",
        "unit": 18,
        "example": "if only I could have helped put matters right.",
        "exampleZh": ""
    },
    {
        "id": 31399,
        "en": "ring",
        "kk": "/rɪŋ/",
        "zh": "n. 戒指",
        "unit": 18,
        "example": "I'll give you a ring tomorrow.",
        "exampleZh": "明天我會打電話給你。"
    },
    {
        "id": 31400,
        "en": "rise",
        "kk": "/raɪz/",
        "zh": "v. 上升",
        "unit": 18,
        "example": "When water levels rise, flooding results.",
        "exampleZh": "當水位上升時，就會發生洪水。"
    },
    {
        "id": 31401,
        "en": "river",
        "kk": "",
        "zh": "n. 河流",
        "unit": 18,
        "example": "The river gurgled and burbled.",
        "exampleZh": "河水潺潺，潺潺。"
    },
    {
        "id": 31402,
        "en": "road",
        "kk": "/roʊd/",
        "zh": "n. 道路",
        "unit": 18,
        "example": "Claire hurried along the road.",
        "exampleZh": "克萊爾快步沿著路走。"
    },
    {
        "id": 31403,
        "en": "rob",
        "kk": "",
        "zh": "v. 搶劫",
        "unit": 18,
        "example": "She turned to Rob for solace.",
        "exampleZh": ""
    },
    {
        "id": 31404,
        "en": "robot",
        "kk": "",
        "zh": "n. 機器人",
        "unit": 18,
        "example": "This is the latest in robot technology.",
        "exampleZh": ""
    },
    {
        "id": 31405,
        "en": "rock",
        "kk": "/rɑːk/",
        "zh": "n. 石塊",
        "unit": 18,
        "example": "A rock is an inanimate object.",
        "exampleZh": "岩石是無生命的物體。"
    },
    {
        "id": 31406,
        "en": "role",
        "kk": "/roʊl/",
        "zh": "n. 角色",
        "unit": 18,
        "example": "He's a natural for the role.",
        "exampleZh": ""
    },
    {
        "id": 31407,
        "en": "roll",
        "kk": "",
        "zh": "v. 滾動",
        "unit": 18,
        "example": "Comedy is the new rock and roll.",
        "exampleZh": ""
    },
    {
        "id": 31408,
        "en": "roof",
        "kk": "",
        "zh": "n. 屋頂",
        "unit": 18,
        "example": "The roof was declared unsafe.",
        "exampleZh": "屋頂被宣布不安全。"
    },
    {
        "id": 31409,
        "en": "room",
        "kk": "/ruːm/",
        "zh": "n. 房間",
        "unit": 18,
        "example": "This room faces west.",
        "exampleZh": "這個房間朝西。"
    },
    {
        "id": 31410,
        "en": "root",
        "kk": "",
        "zh": "n. 根",
        "unit": 18,
        "example": "We got to the root of the problem.",
        "exampleZh": "我們找到了問題的根源。"
    },
    {
        "id": 31411,
        "en": "rope",
        "kk": "",
        "zh": "n. 繩子",
        "unit": 18,
        "example": "The rope suddenly went slack.",
        "exampleZh": "繩子突然鬆弛了。"
    },
    {
        "id": 31412,
        "en": "rose",
        "kk": "",
        "zh": "n. 玫瑰",
        "unit": 18,
        "example": "The price of gas rose.",
        "exampleZh": "天然氣價格上漲。"
    },
    {
        "id": 31413,
        "en": "round",
        "kk": "",
        "zh": "adj. 圓的",
        "unit": 18,
        "example": "We're leaving round about ten.",
        "exampleZh": "我們十點左右出發。"
    },
    {
        "id": 31414,
        "en": "row",
        "kk": "",
        "zh": "n. 一排",
        "unit": 18,
        "example": "I took Daniel for a row.",
        "exampleZh": "我帶丹尼爾吵了一架。"
    },
    {
        "id": 31415,
        "en": "royal",
        "kk": "",
        "zh": "adj. 皇室的",
        "unit": 18,
        "example": "We were given a royal welcome.",
        "exampleZh": "我們受到了皇家般的歡迎。"
    },
    {
        "id": 31416,
        "en": "rub",
        "kk": "",
        "zh": "v. 摩擦",
        "unit": 18,
        "example": "She gave her knee a quick rub.",
        "exampleZh": "她快速地揉了揉膝蓋。"
    },
    {
        "id": 31417,
        "en": "rubber",
        "kk": "",
        "zh": "n. 橡膠",
        "unit": 18,
        "example": "The boy was wearing rubber-soled shoes.",
        "exampleZh": "這個男孩穿著膠底鞋。"
    },
    {
        "id": 31418,
        "en": "rude",
        "kk": "",
        "zh": "adj. 粗魯的",
        "unit": 18,
        "example": "The man was downright rude to us.",
        "exampleZh": "那個人對我們非常粗魯。"
    },
    {
        "id": 31419,
        "en": "ruin",
        "kk": "",
        "zh": "v. 毀壞",
        "unit": 18,
        "example": "The vineyards were falling into ruin.",
        "exampleZh": ""
    },
    {
        "id": 31420,
        "en": "rule",
        "kk": "/ruːl/",
        "zh": "v. 統治",
        "unit": 18,
        "example": "That's a good rule to go by.",
        "exampleZh": "這是一個值得遵守的好規則。"
    },
    {
        "id": 31421,
        "en": "ruler",
        "kk": "",
        "zh": "n. 統治者;尺",
        "unit": 18,
        "example": "The ruler cracked and splintered into pieces.",
        "exampleZh": ""
    },
    {
        "id": 31422,
        "en": "run",
        "kk": "/rʌn/",
        "zh": "v. 跑步",
        "unit": 18,
        "example": "Engines won't run without lubricants.",
        "exampleZh": "沒有潤滑油，引擎就無法運轉。"
    },
    {
        "id": 31423,
        "en": "rush",
        "kk": "",
        "zh": "v. 衝進",
        "unit": 18,
        "example": "You can't rush a search.",
        "exampleZh": ""
    },
    {
        "id": 31424,
        "en": "sad",
        "kk": "",
        "zh": "adj. 悲傷的",
        "unit": 18,
        "example": "I overreact to anything sad.",
        "exampleZh": "我對任何悲傷的事情都反應過度。"
    },
    {
        "id": 31425,
        "en": "safe",
        "kk": "/seɪf/",
        "zh": "adj. 安全的",
        "unit": 18,
        "example": "The children are quite safe here.",
        "exampleZh": "孩子們在這裡很安全。"
    },
    {
        "id": 31426,
        "en": "safety",
        "kk": "",
        "zh": "n. 安全",
        "unit": 18,
        "example": "They are anxious for her safety.",
        "exampleZh": ""
    },
    {
        "id": 31427,
        "en": "sail",
        "kk": "",
        "zh": "v. 航行",
        "unit": 18,
        "example": "We sail at 2 p.m. tomorrow.",
        "exampleZh": "我們下午 2 點啟航。明天。"
    },
    {
        "id": 31428,
        "en": "sailor",
        "kk": "",
        "zh": "n. 水手",
        "unit": 18,
        "example": "A sailor carrying a sawn-off shotgun was arrested in Los Angeles.",
        "exampleZh": ""
    },
    {
        "id": 31429,
        "en": "salad",
        "kk": "",
        "zh": "n. 沙拉",
        "unit": 18,
        "example": "The salad had lost its crispness.",
        "exampleZh": ""
    },
    {
        "id": 31430,
        "en": "sale",
        "kk": "",
        "zh": "n. 出售",
        "unit": 18,
        "example": "Tickets go on sale this week.",
        "exampleZh": "門票本週開始販售。"
    },
    {
        "id": 31431,
        "en": "salt",
        "kk": "",
        "zh": "n. 鹽",
        "unit": 18,
        "example": "He read a poem entitled 'Salt'.",
        "exampleZh": ""
    },
    {
        "id": 31432,
        "en": "same",
        "kk": "/seɪm/",
        "zh": "adj. 相同的",
        "unit": 18,
        "example": "Mario said the very same thing.",
        "exampleZh": "馬裡奧也說過同樣的話。"
    },
    {
        "id": 31433,
        "en": "sample",
        "kk": "",
        "zh": "n. 樣品",
        "unit": 18,
        "example": "A routine DNA sample was taken.",
        "exampleZh": ""
    },
    {
        "id": 31434,
        "en": "sand",
        "kk": "",
        "zh": "n. 沙",
        "unit": 18,
        "example": "She traced a line in the sand.",
        "exampleZh": "她在沙上畫了一條線。"
    },
    {
        "id": 31435,
        "en": "sandwich",
        "kk": "",
        "zh": "n. 三明治",
        "unit": 18,
        "example": "She was eating a sandwich.",
        "exampleZh": ""
    },
    {
        "id": 31436,
        "en": "satisfy",
        "kk": "",
        "zh": "v. 滿意",
        "unit": 18,
        "example": "We cannot satisfy demand for the product.",
        "exampleZh": "我們無法滿足對該產品的需求。"
    },
    {
        "id": 31437,
        "en": "Saturday",
        "kk": "",
        "zh": "n. 星期六",
        "unit": 18,
        "example": "We're going sailing on Saturday.",
        "exampleZh": ""
    },
    {
        "id": 31438,
        "en": "sauce",
        "kk": "",
        "zh": "n. 醬料",
        "unit": 18,
        "example": "The sauce is mostly cream.",
        "exampleZh": ""
    },
    {
        "id": 31439,
        "en": "save",
        "kk": "/seɪv/",
        "zh": "v. 拯救",
        "unit": 18,
        "example": "We should try to save water.",
        "exampleZh": "我們應該努力節約用水。"
    },
    {
        "id": 31440,
        "en": "say",
        "kk": "/seɪ/",
        "zh": "v. 說",
        "unit": 18,
        "example": "He didn't even say sorry.",
        "exampleZh": "他甚至沒有說對不起。"
    },
    {
        "id": 31441,
        "en": "scare",
        "kk": "",
        "zh": "v. (使)害怕",
        "unit": 18,
        "example": "We've had quite a scare.",
        "exampleZh": ""
    },
    {
        "id": 31442,
        "en": "scarf",
        "kk": "",
        "zh": "n. 圍巾",
        "unit": 18,
        "example": "Her scarf streamed behind her.",
        "exampleZh": ""
    },
    {
        "id": 31443,
        "en": "scene",
        "kk": "/siːn/",
        "zh": "n. 風景",
        "unit": 18,
        "example": "It's a scene of complete devastation.",
        "exampleZh": ""
    },
    {
        "id": 31444,
        "en": "scenery",
        "kk": "",
        "zh": "n. 景色",
        "unit": 18,
        "example": "The area is remarkable for its scenery.",
        "exampleZh": ""
    },
    {
        "id": 31445,
        "en": "school",
        "kk": "/skuːl/",
        "zh": "n. 學校",
        "unit": 18,
        "example": "Which school do they attend?",
        "exampleZh": ""
    },
    {
        "id": 31446,
        "en": "science",
        "kk": "/ˈsaɪəns/",
        "zh": "n. 科學",
        "unit": 18,
        "example": "Economics is an inexact science.",
        "exampleZh": ""
    },
    {
        "id": 31447,
        "en": "scientist",
        "kk": "",
        "zh": "n. 科學家",
        "unit": 18,
        "example": "He's a brilliant young scientist.",
        "exampleZh": ""
    },
    {
        "id": 31448,
        "en": "scooter",
        "kk": "",
        "zh": "n. 摩托車",
        "unit": 18,
        "example": "A half-way house for many people is a scooter or motorbike.",
        "exampleZh": ""
    },
    {
        "id": 31449,
        "en": "score",
        "kk": "/skɔːr/",
        "zh": "n. 得分",
        "unit": 18,
        "example": "It's my best ever score.",
        "exampleZh": ""
    },
    {
        "id": 31450,
        "en": "screen",
        "kk": "",
        "zh": "n. 螢幕",
        "unit": 18,
        "example": "Suddenly the screen went blank.",
        "exampleZh": ""
    },
    {
        "id": 31451,
        "en": "sea",
        "kk": "/siː/",
        "zh": "n. 海",
        "unit": 18,
        "example": "The sea rippled and sparkled.",
        "exampleZh": "大海波光粼粼，波光粼粼。"
    },
    {
        "id": 31452,
        "en": "seafood",
        "kk": "",
        "zh": "n. 海鮮",
        "unit": 18,
        "example": "Seafood is a speciality on the island.",
        "exampleZh": ""
    },
    {
        "id": 31453,
        "en": "search",
        "kk": "",
        "zh": "v. 搜索",
        "unit": 18,
        "example": "It was a fruitless search.",
        "exampleZh": ""
    },
    {
        "id": 31454,
        "en": "season",
        "kk": "/ˈsiːzn/",
        "zh": "n. 季節",
        "unit": 18,
        "example": "Autumn is my favourite season.",
        "exampleZh": "秋天是我最喜歡的季節。"
    },
    {
        "id": 31455,
        "en": "seat",
        "kk": "/siːt/",
        "zh": "n. 座位",
        "unit": 18,
        "example": "Stephen returned to his seat.",
        "exampleZh": "史蒂芬回到座位上。"
    },
    {
        "id": 31456,
        "en": "second",
        "kk": "/ˈsekənd/",
        "zh": "adj. 第二的",
        "unit": 18,
        "example": "The second goal was disallowed.",
        "exampleZh": "第二個進球被判無效。"
    },
    {
        "id": 31457,
        "en": "secret",
        "kk": "",
        "zh": "n. 祕密",
        "unit": 18,
        "example": "The meeting was held in secret.",
        "exampleZh": ""
    },
    {
        "id": 31458,
        "en": "secretary",
        "kk": "",
        "zh": "n. 祕書",
        "unit": 18,
        "example": "We hired a new secretary.",
        "exampleZh": ""
    },
    {
        "id": 31459,
        "en": "section",
        "kk": "/ˈsekʃn/",
        "zh": "n. 部分",
        "unit": 18,
        "example": "The school has a special education section.",
        "exampleZh": ""
    },
    {
        "id": 31460,
        "en": "see",
        "kk": "/siː/",
        "zh": "v. 看見",
        "unit": 18,
        "example": "Can I see your authorization?",
        "exampleZh": "我可以看看你的授權嗎？"
    },
    {
        "id": 31461,
        "en": "seed",
        "kk": "",
        "zh": "n. 種子",
        "unit": 18,
        "example": "The top seed won comfortably.",
        "exampleZh": "頭號種子輕鬆獲勝。"
    },
    {
        "id": 31462,
        "en": "seek",
        "kk": "/siːk/",
        "zh": "v. 尋找",
        "unit": 18,
        "example": "We were advised to seek legal advice.",
        "exampleZh": ""
    },
    {
        "id": 31463,
        "en": "seem",
        "kk": "/siːm/",
        "zh": "v. 似乎",
        "unit": 18,
        "example": "They seem an ill-assorted couple.",
        "exampleZh": "他們看起來是一對不般配的夫妻。"
    },
    {
        "id": 31464,
        "en": "seesaw",
        "kk": "",
        "zh": "n. 蹺蹺板",
        "unit": 18,
        "example": "Two kids can play on a seesaw.",
        "exampleZh": "兩個孩子可以玩蹺蹺板。"
    },
    {
        "id": 31465,
        "en": "seldom",
        "kk": "",
        "zh": "adv. 不常",
        "unit": 18,
        "example": "I've seldom felt so happy.",
        "exampleZh": ""
    },
    {
        "id": 31466,
        "en": "select",
        "kk": "",
        "zh": "v. 挑選",
        "unit": 18,
        "example": "click Tools on the menu bar and select Settings.",
        "exampleZh": "點擊選單列上的“工具”並選擇“設定”。"
    },
    {
        "id": 31467,
        "en": "self",
        "kk": "",
        "zh": "n. 自我",
        "unit": 18,
        "example": "He gave a self-deprecating shrug.",
        "exampleZh": "他自嘲地聳聳肩。"
    },
    {
        "id": 31468,
        "en": "selfish",
        "kk": "",
        "zh": "adj. 自私的",
        "unit": 18,
        "example": "She calls me lazy and selfish.",
        "exampleZh": "她說我又懶又自私。"
    },
    {
        "id": 31469,
        "en": "sell",
        "kk": "/sel/",
        "zh": "v. 販賣",
        "unit": 18,
        "example": "They sell all kinds of things.",
        "exampleZh": "他們賣各種各樣的東西。"
    },
    {
        "id": 31470,
        "en": "semester",
        "kk": "",
        "zh": "n. 學期",
        "unit": 18,
        "example": "Do you think you'll pledge this semester?",
        "exampleZh": ""
    },
    {
        "id": 31471,
        "en": "send",
        "kk": "/send/",
        "zh": "v. 送",
        "unit": 18,
        "example": "Shall I send you the book?",
        "exampleZh": "我把書寄給你好嗎？"
    },
    {
        "id": 31472,
        "en": "sense",
        "kk": "/sens/",
        "zh": "n. 感覺官能",
        "unit": 18,
        "example": "The sense of community is lost.",
        "exampleZh": "社區意識消失了。"
    },
    {
        "id": 31473,
        "en": "sentence",
        "kk": "",
        "zh": "n. 句子",
        "unit": 18,
        "example": "What does this sentence mean?",
        "exampleZh": "這句話是什麼意思呢？"
    },
    {
        "id": 31474,
        "en": "September",
        "kk": "",
        "zh": "n. 九月",
        "unit": 18,
        "example": "The rains come in September.",
        "exampleZh": "九月雨來了。"
    },
    {
        "id": 31475,
        "en": "serious",
        "kk": "/ˈsɪriəs/",
        "zh": "adj. 嚴重的",
        "unit": 18,
        "example": "You're joking. Are you serious?",
        "exampleZh": "你在開玩笑。你是認真的？"
    },
    {
        "id": 31476,
        "en": "servant",
        "kk": "",
        "zh": "n. 僕人",
        "unit": 18,
        "example": "He was a loyal, distinguished and very competent civil servant.",
        "exampleZh": ""
    },
    {
        "id": 31477,
        "en": "serve",
        "kk": "/sɜːrv/",
        "zh": "v. 服務",
        "unit": 18,
        "example": "They serve good French cooking.",
        "exampleZh": "他們提供美味的法式菜餚。"
    },
    {
        "id": 31478,
        "en": "service",
        "kk": "/ˈsɜːrvɪs/",
        "zh": "n. 服務",
        "unit": 18,
        "example": "The service is maddeningly slow.",
        "exampleZh": "服務速度慢得令人發狂。"
    },
    {
        "id": 31479,
        "en": "set",
        "kk": "/set/",
        "zh": "n. 一套,一組",
        "unit": 18,
        "example": "I've collected the complete set.",
        "exampleZh": "我已經收集了全套。"
    },
    {
        "id": 31480,
        "en": "settle",
        "kk": "",
        "zh": "v. 解決",
        "unit": 18,
        "example": "This should settle your stomach.",
        "exampleZh": "這應該可以解決你的胃。"
    },
    {
        "id": 31481,
        "en": "seven",
        "kk": "",
        "zh": "n. 七",
        "unit": 18,
        "example": "The performance starts at seven.",
        "exampleZh": "表演七點開始。"
    },
    {
        "id": 31482,
        "en": "seventeen",
        "kk": "",
        "zh": "n. 十七",
        "unit": 18,
        "example": "Jenny is seventeen years old.",
        "exampleZh": "珍妮十七歲了。"
    },
    {
        "id": 31483,
        "en": "seventy",
        "kk": "",
        "zh": "n. 七十",
        "unit": 18,
        "example": "How old is she—seventy odd?",
        "exampleZh": "她多大了──七十多歲了？"
    },
    {
        "id": 31484,
        "en": "several",
        "kk": "/ˈsevrəl/",
        "zh": "adj. 幾個的",
        "unit": 18,
        "example": "She wrote him several poems.",
        "exampleZh": "她給他寫了幾首詩。"
    },
    {
        "id": 31485,
        "en": "shake",
        "kk": "/ʃeɪk/",
        "zh": "v. 搖動",
        "unit": 18,
        "example": "Her hands had started to shake.",
        "exampleZh": "她的雙手開始顫抖。"
    },
    {
        "id": 31486,
        "en": "shall",
        "kk": "",
        "zh": "aux. 將要",
        "unit": 18,
        "example": "Shall we order some coffee?",
        "exampleZh": "我們要喝點咖啡嗎？"
    },
    {
        "id": 31487,
        "en": "shape",
        "kk": "",
        "zh": "n. 形狀",
        "unit": 18,
        "example": "The knives were bent out of shape.",
        "exampleZh": "刀子彎曲變形了。"
    },
    {
        "id": 31488,
        "en": "share",
        "kk": "/ʃer/",
        "zh": "v. 分享",
        "unit": 18,
        "example": "Share prices moved ahead today.",
        "exampleZh": ""
    },
    {
        "id": 31489,
        "en": "shark",
        "kk": "",
        "zh": "n. 鯊魚",
        "unit": 18,
        "example": "The shark described a circle around the shoal of fish.",
        "exampleZh": "鯊魚在魚群周圍畫了一圈。"
    },
    {
        "id": 31490,
        "en": "sharp",
        "kk": "",
        "zh": "adj. 銳利的",
        "unit": 18,
        "example": "He has a sharp tongue.",
        "exampleZh": "他的舌頭很尖。"
    },
    {
        "id": 31491,
        "en": "sheep",
        "kk": "",
        "zh": "n. 羊",
        "unit": 18,
        "example": "Sheep were grazing in the fields.",
        "exampleZh": "羊群在田裡吃草。"
    },
    {
        "id": 31492,
        "en": "sheet",
        "kk": "",
        "zh": "n. 床單",
        "unit": 18,
        "example": "This sheet has a tear in it.",
        "exampleZh": "這張紙上有一處撕裂。"
    },
    {
        "id": 31493,
        "en": "shelf",
        "kk": "",
        "zh": "n. 架",
        "unit": 18,
        "example": "I can't reach the top shelf.",
        "exampleZh": ""
    },
    {
        "id": 31494,
        "en": "shell",
        "kk": "",
        "zh": "n. 貝殼",
        "unit": 18,
        "example": "The animal retracted into its shell.",
        "exampleZh": ""
    },
    {
        "id": 31495,
        "en": "shine",
        "kk": "",
        "zh": "v. 照耀",
        "unit": 18,
        "example": "This gel gives a beautiful shine to the hair.",
        "exampleZh": "這種凝膠賦予頭髮美麗的光澤。"
    },
    {
        "id": 31496,
        "en": "ship",
        "kk": "/ʃɪp/",
        "zh": "n. 船",
        "unit": 18,
        "example": "The ship was carrying contraband.",
        "exampleZh": "這艘船載有違禁品。"
    },
    {
        "id": 31497,
        "en": "shirt",
        "kk": "",
        "zh": "n. 襯衫",
        "unit": 18,
        "example": "What's your shirt made of?",
        "exampleZh": "你的襯衫是什麼材質的？"
    },
    {
        "id": 31498,
        "en": "shock",
        "kk": "",
        "zh": "n. 震驚",
        "unit": 18,
        "example": "He's in for a shock!",
        "exampleZh": ""
    },
    {
        "id": 31499,
        "en": "shoe",
        "kk": "",
        "zh": "n. 鞋子",
        "unit": 18,
        "example": "The back of my shoe is rubbing.",
        "exampleZh": "我的鞋後跟在摩擦。"
    },
    {
        "id": 31500,
        "en": "shop",
        "kk": "/ʃɑːp/",
        "zh": "n. 商店",
        "unit": 18,
        "example": "The shop bell jangled loudly.",
        "exampleZh": "商店的門鈴叮噹作響。"
    },
    {
        "id": 31501,
        "en": "shoot",
        "kk": "/ʃuːt/",
        "zh": "v. 射擊",
        "unit": 18,
        "example": "He'd love to shoot his film in Cuba.",
        "exampleZh": ""
    },
    {
        "id": 31502,
        "en": "shore",
        "kk": "",
        "zh": "n. 岸",
        "unit": 18,
        "example": "Huge waves lashed the shore.",
        "exampleZh": "巨大的海浪拍打著海岸。"
    },
    {
        "id": 31503,
        "en": "short",
        "kk": "/ʃɔːrt/",
        "zh": "adj. 短的",
        "unit": 18,
        "example": "Short hair really becomes you.",
        "exampleZh": "短髮真的很適合你。"
    },
    {
        "id": 31504,
        "en": "shorts",
        "kk": "",
        "zh": "n. 短褲",
        "unit": 18,
        "example": "My shorts were chafing my thighs.",
        "exampleZh": ""
    },
    {
        "id": 31505,
        "en": "should",
        "kk": "/ʃʊd/",
        "zh": "aux. 應該",
        "unit": 18,
        "example": "This should save you shedloads.",
        "exampleZh": ""
    },
    {
        "id": 31506,
        "en": "shoulder",
        "kk": "",
        "zh": "n. 肩膀",
        "unit": 18,
        "example": "The arrow pierced his shoulder.",
        "exampleZh": "箭射穿了他的肩膀。"
    },
    {
        "id": 31507,
        "en": "shout",
        "kk": "",
        "zh": "v. 大聲喊叫",
        "unit": 18,
        "example": "It's wrong to swear and shout.",
        "exampleZh": "罵人、喊叫都是錯的。"
    },
    {
        "id": 31508,
        "en": "show",
        "kk": "/ʃoʊ/",
        "zh": "v. 展現",
        "unit": 18,
        "example": "The show was just awesome.",
        "exampleZh": "這場演出太棒了。"
    },
    {
        "id": 31509,
        "en": "shower",
        "kk": "",
        "zh": "n. 淋浴",
        "unit": 18,
        "example": "She usually sings in the shower.",
        "exampleZh": ""
    },
    {
        "id": 31510,
        "en": "shrimp",
        "kk": "",
        "zh": "n. 蝦子",
        "unit": 18,
        "example": "Hines slowly masticated a shrimp.",
        "exampleZh": ""
    },
    {
        "id": 31511,
        "en": "shut",
        "kk": "",
        "zh": "v. 關閉",
        "unit": 18,
        "example": "She slammed the door shut.",
        "exampleZh": "她砰地關上門。"
    },
    {
        "id": 31512,
        "en": "shy",
        "kk": "",
        "zh": "adj. 害羞的",
        "unit": 18,
        "example": "Their son was painfully shy.",
        "exampleZh": "他們的兒子非常害羞。"
    },
    {
        "id": 31513,
        "en": "sick",
        "kk": "",
        "zh": "adj. 生病的",
        "unit": 18,
        "example": "The sick man's pupils were dilated.",
        "exampleZh": "病人的瞳孔放大了。"
    },
    {
        "id": 31514,
        "en": "side",
        "kk": "/saɪd/",
        "zh": "n. 面",
        "unit": 18,
        "example": "The ship rolled from side to side.",
        "exampleZh": "船從一邊搖到另一邊。"
    },
    {
        "id": 31515,
        "en": "sidewalk",
        "kk": "",
        "zh": "n. 人行道",
        "unit": 18,
        "example": "Glass from broken bottles litters the sidewalk.",
        "exampleZh": ""
    },
    {
        "id": 31516,
        "en": "sight",
        "kk": "",
        "zh": "n. 視力",
        "unit": 18,
        "example": "Her sight is beginning to go.",
        "exampleZh": "她的視力開始消失。"
    },
    {
        "id": 31517,
        "en": "sign",
        "kk": "/saɪn/",
        "zh": "v. 示意",
        "unit": 18,
        "example": "The sign read 'No admittance'.",
        "exampleZh": ""
    },
    {
        "id": 31518,
        "en": "silence",
        "kk": "",
        "zh": "n. 沉默",
        "unit": 18,
        "example": "There was a fraught silence.",
        "exampleZh": ""
    },
    {
        "id": 31519,
        "en": "silent",
        "kk": "",
        "zh": "adj. 沉默的",
        "unit": 18,
        "example": "The three men remained silent.",
        "exampleZh": "三人保持沉默。"
    },
    {
        "id": 31520,
        "en": "silk",
        "kk": "",
        "zh": "n. 絲",
        "unit": 18,
        "example": "She wore purple and green silk.",
        "exampleZh": ""
    },
    {
        "id": 31521,
        "en": "silly",
        "kk": "",
        "zh": "adj. 傻的",
        "unit": 18,
        "example": "No, silly, those aren't your shoes!",
        "exampleZh": "不，傻瓜，那不是你的鞋！"
    },
    {
        "id": 31522,
        "en": "silver",
        "kk": "",
        "zh": "n. 銀",
        "unit": 18,
        "example": "He's an Olympic silver medallist.",
        "exampleZh": "他是奧運銀牌得主。"
    },
    {
        "id": 31523,
        "en": "similar",
        "kk": "/ˈsɪmələr/",
        "zh": "adj. 相似的",
        "unit": 18,
        "example": "They have uncannily similar voices.",
        "exampleZh": "他們的聲音驚人地相似。"
    },
    {
        "id": 31524,
        "en": "simple",
        "kk": "/ˈsɪmpl/",
        "zh": "adj. 簡單的",
        "unit": 18,
        "example": "The poem uses simple language.",
        "exampleZh": "這首詩使用了簡單的語言。"
    },
    {
        "id": 31525,
        "en": "simply",
        "kk": "",
        "zh": "adv. 簡單地",
        "unit": 18,
        "example": "The house was simply furnished.",
        "exampleZh": "房子陳設簡單。"
    },
    {
        "id": 31526,
        "en": "since",
        "kk": "/sɪns/",
        "zh": "prep. 從...時起",
        "unit": 18,
        "example": "We've lived here since 1994.",
        "exampleZh": "我們從 1994 年起就住在這裡。"
    },
    {
        "id": 31527,
        "en": "sincere",
        "kk": "",
        "zh": "adj. 真誠的",
        "unit": 18,
        "example": "He seemed sincere enough when he said he wanted to help.",
        "exampleZh": ""
    },
    {
        "id": 31528,
        "en": "sing",
        "kk": "/sɪŋ/",
        "zh": "v. 唱歌",
        "unit": 18,
        "example": "Can white girls sing the blues?",
        "exampleZh": "白人女孩可以唱布魯斯嗎？"
    },
    {
        "id": 31529,
        "en": "singer",
        "kk": "",
        "zh": "n. 歌手",
        "unit": 18,
        "example": "The singer re-formed his band.",
        "exampleZh": "這位歌手重組了他的樂隊。"
    },
    {
        "id": 31530,
        "en": "single",
        "kk": "/ˈsɪŋɡl/",
        "zh": "adj. 單一的",
        "unit": 18,
        "example": "How much is a single to York?",
        "exampleZh": ""
    },
    {
        "id": 31531,
        "en": "sink",
        "kk": "",
        "zh": "v. 沉",
        "unit": 18,
        "example": "He decided to scour the sink.",
        "exampleZh": ""
    },
    {
        "id": 31532,
        "en": "sir",
        "kk": "",
        "zh": "n. 先生",
        "unit": 18,
        "example": "Is everything in order, sir?",
        "exampleZh": "先生，一切都順利嗎？"
    },
    {
        "id": 31533,
        "en": "sister",
        "kk": "/ˈsɪstər/",
        "zh": "n. 姊妹",
        "unit": 18,
        "example": "His sister Sarah helped him.",
        "exampleZh": "他的妹妹莎拉幫助了他。"
    },
    {
        "id": 31534,
        "en": "sit",
        "kk": "/sɪt/",
        "zh": "v. 坐",
        "unit": 18,
        "example": "'Sit down!' Meekly, she obeyed.",
        "exampleZh": "'坐下！ '她溫順地服從了。"
    },
    {
        "id": 31535,
        "en": "six",
        "kk": "/sɪks/",
        "zh": "n. 六",
        "unit": 18,
        "example": "Six bottles should be enough.",
        "exampleZh": "六瓶應該夠了。"
    },
    {
        "id": 31536,
        "en": "sixteen",
        "kk": "",
        "zh": "n. 十六",
        "unit": 18,
        "example": "He worked sixteen hours a day.",
        "exampleZh": "他每天工作十六個小時。"
    },
    {
        "id": 31537,
        "en": "sixty",
        "kk": "",
        "zh": "n. 六十",
        "unit": 18,
        "example": "She is close on sixty.",
        "exampleZh": "她已經快六十歲了。"
    },
    {
        "id": 31538,
        "en": "size",
        "kk": "/saɪz/",
        "zh": "n. 尺碼",
        "unit": 18,
        "example": "The jacket was the wrong size.",
        "exampleZh": "這件夾克的尺寸不對。"
    },
    {
        "id": 31539,
        "en": "skate",
        "kk": "",
        "zh": "v. 溜冰",
        "unit": 18,
        "example": "We never learned to ice skate or ski.",
        "exampleZh": ""
    },
    {
        "id": 31540,
        "en": "ski",
        "kk": "",
        "zh": "v. 滑雪",
        "unit": 18,
        "example": "There are three ski lifts in operation.",
        "exampleZh": ""
    },
    {
        "id": 31541,
        "en": "skill",
        "kk": "/skɪl/",
        "zh": "n. 技巧",
        "unit": 18,
        "example": "It's time to showcase real skills.",
        "exampleZh": "是時候展示真正的技能了。"
    },
    {
        "id": 31542,
        "en": "skillful",
        "kk": "",
        "zh": "adj. 熟練的",
        "unit": 18,
        "example": "Military tactics are skillful.",
        "exampleZh": "軍事戰術是嫻熟的。"
    },
    {
        "id": 31543,
        "en": "skin",
        "kk": "/skɪn/",
        "zh": "n. 皮膚",
        "unit": 18,
        "example": "I can skin up.",
        "exampleZh": "我可以剝皮。"
    },
    {
        "id": 31544,
        "en": "skinny",
        "kk": "",
        "zh": "adj. 皮包骨的",
        "unit": 18,
        "example": "He was quite a skinny little boy.",
        "exampleZh": "他是個骨瘦如柴的小男孩。"
    },
    {
        "id": 31545,
        "en": "skirt",
        "kk": "",
        "zh": "n. 裙子",
        "unit": 18,
        "example": "There's a mark on your skirt.",
        "exampleZh": ""
    },
    {
        "id": 31546,
        "en": "sky",
        "kk": "",
        "zh": "n. 天空",
        "unit": 18,
        "example": "Clouds drifted across the sky.",
        "exampleZh": "雲彩飄過天際。"
    },
    {
        "id": 31547,
        "en": "sleep",
        "kk": "/sliːp/",
        "zh": "v. 睡覺",
        "unit": 18,
        "example": "Finally she drifted into sleep.",
        "exampleZh": "最後她迷迷糊糊地睡著了。"
    },
    {
        "id": 31548,
        "en": "sleepy",
        "kk": "",
        "zh": "adj. 想睡的",
        "unit": 18,
        "example": "He had begun to feel sleepy.",
        "exampleZh": "他開始感到困倦。"
    },
    {
        "id": 31549,
        "en": "slender",
        "kk": "",
        "zh": "adj. 纖細的",
        "unit": 18,
        "example": "Sherry is black, tall, slender and soft-spoken.",
        "exampleZh": "雪莉是黑人，身材高大，身材苗條，說話輕聲細語。"
    },
    {
        "id": 31550,
        "en": "slide",
        "kk": "",
        "zh": "v. 滑動",
        "unit": 18,
        "example": "The dollar continued to slide.",
        "exampleZh": ""
    },
    {
        "id": 31551,
        "en": "slim",
        "kk": "",
        "zh": "adj. 苗條的",
        "unit": 18,
        "example": "She goes for tall slim men.",
        "exampleZh": "她喜歡高個子苗條的男人。"
    },
    {
        "id": 31552,
        "en": "slippers",
        "kk": "",
        "zh": "n. 拖鞋",
        "unit": 18,
        "example": "She spent the morning padding about the house in her slippers.",
        "exampleZh": ""
    },
    {
        "id": 31553,
        "en": "slow",
        "kk": "",
        "zh": "adj. 緩慢的",
        "unit": 18,
        "example": "The process was needlessly slow.",
        "exampleZh": "這個過程不必要地緩慢。"
    },
    {
        "id": 31554,
        "en": "small",
        "kk": "/smɔːl/",
        "zh": "adj. 小的",
        "unit": 18,
        "example": "The room was disappointingly small.",
        "exampleZh": "房間小得令人失望。"
    },
    {
        "id": 31555,
        "en": "smart",
        "kk": "",
        "zh": "adj. 聰明的",
        "unit": 18,
        "example": "She mixes with the smart set.",
        "exampleZh": "她與聰明人混在一起。"
    },
    {
        "id": 31556,
        "en": "smell",
        "kk": "",
        "zh": "v. 聞",
        "unit": 18,
        "example": "Where's that smell coming from?",
        "exampleZh": "那味道是從哪裡來的？"
    },
    {
        "id": 31557,
        "en": "smile",
        "kk": "/smaɪl/",
        "zh": "v. 微笑",
        "unit": 18,
        "example": "A smile brightened her face.",
        "exampleZh": "她的臉上露出笑容。"
    },
    {
        "id": 31558,
        "en": "smoke",
        "kk": "",
        "zh": "n. 煙",
        "unit": 18,
        "example": "Smoke had blackened the walls.",
        "exampleZh": "煙霧使牆壁變黑。"
    },
    {
        "id": 31559,
        "en": "snack",
        "kk": "",
        "zh": "n. 點心",
        "unit": 18,
        "example": "Lunch was a snack in the fields.",
        "exampleZh": ""
    },
    {
        "id": 31560,
        "en": "snail",
        "kk": "",
        "zh": "n. 蝸牛",
        "unit": 18,
        "example": "Is the snail really helpful?",
        "exampleZh": ""
    },
    {
        "id": 31561,
        "en": "snake",
        "kk": "",
        "zh": "n. 蛇",
        "unit": 18,
        "example": "A snake was twisting around his arm.",
        "exampleZh": "一條蛇在他的手臂上盤旋。"
    },
    {
        "id": 31562,
        "en": "sneakers",
        "kk": "",
        "zh": "n. 運動鞋",
        "unit": 18,
        "example": "He wore old jeans and a pair of sneakers.",
        "exampleZh": ""
    },
    {
        "id": 31563,
        "en": "snow",
        "kk": "",
        "zh": "n. 雪",
        "unit": 18,
        "example": "It's hard work shovelling snow.",
        "exampleZh": "鏟雪真是辛苦啊。"
    },
    {
        "id": 31564,
        "en": "snowy",
        "kk": "",
        "zh": "adj. 下雪多的",
        "unit": 18,
        "example": "We strode across the snowy fields.",
        "exampleZh": "我們大步穿過雪原。"
    },
    {
        "id": 31565,
        "en": "so",
        "kk": "",
        "zh": "adv. 如此",
        "unit": 18,
        "example": "She is always so chic, so elegant.",
        "exampleZh": "她總是那麼瀟灑，那麼優雅。"
    },
    {
        "id": 31566,
        "en": "soap",
        "kk": "",
        "zh": "n. 肥皂",
        "unit": 18,
        "example": "He had soap suds in his ears.",
        "exampleZh": "他的耳朵裡進了肥皂水。"
    },
    {
        "id": 31567,
        "en": "soccer",
        "kk": "",
        "zh": "n. 足球",
        "unit": 18,
        "example": "He coaches basketball and soccer.",
        "exampleZh": ""
    },
    {
        "id": 31568,
        "en": "social",
        "kk": "/ˈsoʊʃl/",
        "zh": "adj. 社會的",
        "unit": 18,
        "example": "I have a fantastic social life.",
        "exampleZh": "我有很棒的社交生活。"
    },
    {
        "id": 31569,
        "en": "society",
        "kk": "/səˈsaɪəti/",
        "zh": "n. 社會",
        "unit": 18,
        "example": "Ours is a secular society.",
        "exampleZh": ""
    },
    {
        "id": 31570,
        "en": "sock",
        "kk": "",
        "zh": "n. 襪子",
        "unit": 18,
        "example": "He groped around in the dark for his other sock.",
        "exampleZh": ""
    },
    {
        "id": 31571,
        "en": "soda",
        "kk": "",
        "zh": "n. 汽水",
        "unit": 18,
        "example": "She quickly gulped her soda.",
        "exampleZh": "她很快就喝了一口蘇打水。"
    },
    {
        "id": 31572,
        "en": "sofa",
        "kk": "",
        "zh": "n. 沙發",
        "unit": 18,
        "example": "They were snogging on the sofa.",
        "exampleZh": "他們在沙發上接吻。"
    },
    {
        "id": 31573,
        "en": "soft",
        "kk": "/sɔːft/",
        "zh": "adj. 軟的",
        "unit": 18,
        "example": "The grass was soft and springy.",
        "exampleZh": "草柔軟而有彈性。"
    },
    {
        "id": 31574,
        "en": "soldier",
        "kk": "/ˈsoʊldʒər/",
        "zh": "n. 士兵",
        "unit": 18,
        "example": "The soldier acted qua soldier, not as a human being.",
        "exampleZh": ""
    },
    {
        "id": 31575,
        "en": "solve",
        "kk": "/sɑːlv/",
        "zh": "v. 解決",
        "unit": 18,
        "example": "It isn't going to solve a single thing.",
        "exampleZh": "它不會解決任何一件事。"
    },
    {
        "id": 31576,
        "en": "some",
        "kk": "/sʌm/",
        "zh": "adj. 一些的",
        "unit": 18,
        "example": "Robin opened some champagne.",
        "exampleZh": "羅賓開了一些香檳。"
    },
    {
        "id": 31577,
        "en": "someone",
        "kk": "/ˈsʌmwʌn/",
        "zh": "pron. 某人",
        "unit": 18,
        "example": "Someone threw an apple core.",
        "exampleZh": "有人丟了一個蘋果核。"
    },
    {
        "id": 31578,
        "en": "something",
        "kk": "/ˈsʌmθɪŋ/",
        "zh": "n. 某事",
        "unit": 18,
        "example": "It tastes something like melon.",
        "exampleZh": "嘗起來有點像甜瓜。"
    },
    {
        "id": 31579,
        "en": "sometimes",
        "kk": "/ˈsʌmtaɪmz/",
        "zh": "adv. 有時候",
        "unit": 18,
        "example": "Life seems so unfair sometimes.",
        "exampleZh": "生活有時顯得如此不公平。"
    },
    {
        "id": 31580,
        "en": "somewhere",
        "kk": "",
        "zh": "adv. 在某處",
        "unit": 18,
        "example": "Sarah's off in India somewhere.",
        "exampleZh": "莎拉去印度某處了。"
    },
    {
        "id": 31581,
        "en": "son",
        "kk": "/sʌn/",
        "zh": "n. 兒子",
        "unit": 18,
        "example": "Their son was painfully shy.",
        "exampleZh": "他們的兒子非常害羞。"
    },
    {
        "id": 31582,
        "en": "song",
        "kk": "/sɔːŋ/",
        "zh": "n. 歌",
        "unit": 18,
        "example": "The melancholy song died away.",
        "exampleZh": "憂鬱的歌聲漸漸遠去。"
    },
    {
        "id": 31583,
        "en": "soon",
        "kk": "/suːn/",
        "zh": "adv. 不久",
        "unit": 18,
        "example": "Things soon returned to normal.",
        "exampleZh": "事情很快就恢復正常。"
    },
    {
        "id": 31584,
        "en": "sore",
        "kk": "",
        "zh": "adj. 疼痛的",
        "unit": 18,
        "example": "Symptoms include a sore throat.",
        "exampleZh": ""
    },
    {
        "id": 31585,
        "en": "sorry",
        "kk": "",
        "zh": "adj. 感到抱歉的",
        "unit": 18,
        "example": "'Sorry,' she said humbly.",
        "exampleZh": "「抱歉，」她謙虛地說。"
    },
    {
        "id": 31586,
        "en": "soul",
        "kk": "",
        "zh": "n. 靈魂",
        "unit": 18,
        "example": "We commend her soul to God.",
        "exampleZh": "我們將她的靈魂交託給上帝。"
    },
    {
        "id": 31587,
        "en": "sound",
        "kk": "/saʊnd/",
        "zh": "v. 聽起來",
        "unit": 18,
        "example": "You don't sound very sure.",
        "exampleZh": "你聽起來不太確定。"
    },
    {
        "id": 31588,
        "en": "soup",
        "kk": "",
        "zh": "n. 湯",
        "unit": 18,
        "example": "The soup has very little taste.",
        "exampleZh": "湯的味道很少。"
    },
    {
        "id": 31589,
        "en": "sour",
        "kk": "",
        "zh": "adj. 酸的",
        "unit": 18,
        "example": "The heat turned the milk sour.",
        "exampleZh": "熱量使牛奶變酸了。"
    },
    {
        "id": 31590,
        "en": "source",
        "kk": "",
        "zh": "n. 出處",
        "unit": 18,
        "example": "What is their main source of income?",
        "exampleZh": ""
    },
    {
        "id": 31591,
        "en": "south",
        "kk": "/saʊθ/",
        "zh": "n. 南方",
        "unit": 18,
        "example": "Swallows migrate south in winter.",
        "exampleZh": "冬季，燕子南遷。"
    },
    {
        "id": 31592,
        "en": "soy",
        "kk": "",
        "zh": "n. 醬油",
        "unit": 18,
        "example": "Enormous acreages of soy beans are grown in the United States.",
        "exampleZh": ""
    },
    {
        "id": 31593,
        "en": "space",
        "kk": "/speɪs/",
        "zh": "n. 空間",
        "unit": 18,
        "example": "She needed space to be herself.",
        "exampleZh": "她需要空間來做自己。"
    },
    {
        "id": 31594,
        "en": "spaghetti",
        "kk": "",
        "zh": "n. 義大利麵",
        "unit": 18,
        "example": "He's a dab hand at cooking spaghetti.",
        "exampleZh": ""
    },
    {
        "id": 31595,
        "en": "speak",
        "kk": "/spiːk/",
        "zh": "v. 講話",
        "unit": 18,
        "example": "I agreed to speak second.",
        "exampleZh": "我同意第二個發言。"
    },
    {
        "id": 31596,
        "en": "speaker",
        "kk": "",
        "zh": "n. 演講者",
        "unit": 18,
        "example": "She's a very capable speaker.",
        "exampleZh": ""
    },
    {
        "id": 31597,
        "en": "special",
        "kk": "/ˈspeʃl/",
        "zh": "adj. 特別的",
        "unit": 18,
        "example": "Couldn't we call a special meeting?",
        "exampleZh": "我們就不能召開一次特別會議嗎？"
    },
    {
        "id": 31598,
        "en": "speech",
        "kk": "",
        "zh": "n. 演講",
        "unit": 18,
        "example": "He muffed his opening speech.",
        "exampleZh": "他的開場白被壓低了。"
    },
    {
        "id": 31599,
        "en": "speed",
        "kk": "",
        "zh": "n. 速度",
        "unit": 18,
        "example": "The car was gathering speed.",
        "exampleZh": ""
    },
    {
        "id": 31600,
        "en": "spell",
        "kk": "",
        "zh": "v. 拼寫",
        "unit": 18,
        "example": "I've never been able to spell.",
        "exampleZh": "我從來都不會拼字。"
    },
    {
        "id": 31601,
        "en": "spend",
        "kk": "/spend/",
        "zh": "v. 花費(時間)",
        "unit": 18,
        "example": "I spend too much time watching television.",
        "exampleZh": "我花了太多時間看電視。"
    },
    {
        "id": 31602,
        "en": "spider",
        "kk": "",
        "zh": "n. 蜘蛛",
        "unit": 18,
        "example": "A spider had spun a perfect web outside the window.",
        "exampleZh": ""
    },
    {
        "id": 31603,
        "en": "spirit",
        "kk": "",
        "zh": "n. 精神",
        "unit": 18,
        "example": "The human spirit is virtually indestructible.",
        "exampleZh": ""
    },
    {
        "id": 31604,
        "en": "spoon",
        "kk": "",
        "zh": "n. 湯匙",
        "unit": 18,
        "example": "She licked the spoon clean.",
        "exampleZh": "她把湯匙舔乾淨了。"
    },
    {
        "id": 31605,
        "en": "sport",
        "kk": "",
        "zh": "n. 體育活動",
        "unit": 18,
        "example": "I'm not interested in sport.",
        "exampleZh": "我對運動沒興趣。"
    },
    {
        "id": 31606,
        "en": "spring",
        "kk": "",
        "zh": "n. 春天",
        "unit": 18,
        "example": "Spring came late this year.",
        "exampleZh": ""
    },
    {
        "id": 31607,
        "en": "square",
        "kk": "",
        "zh": "n. 廣場",
        "unit": 18,
        "example": "They live at 95 Russell Square.",
        "exampleZh": ""
    },
    {
        "id": 31608,
        "en": "stage",
        "kk": "/steɪdʒ/",
        "zh": "n. 舞臺",
        "unit": 18,
        "example": "She pirouetted across the stage.",
        "exampleZh": ""
    },
    {
        "id": 31609,
        "en": "stair",
        "kk": "",
        "zh": "n. 樓梯",
        "unit": 18,
        "example": "The house had a panelled hall and a fine oak stair.",
        "exampleZh": "房子有一個鑲板大廳和一個精美的橡木樓梯。"
    },
    {
        "id": 31610,
        "en": "stamp",
        "kk": "",
        "zh": "n. 郵票",
        "unit": 18,
        "example": "He stuck a stamp on the envelope.",
        "exampleZh": ""
    },
    {
        "id": 31611,
        "en": "stand",
        "kk": "",
        "zh": "v. 站起來",
        "unit": 18,
        "example": "I couldn't stand that yowling.",
        "exampleZh": "我受不了那種嚎叫。"
    },
    {
        "id": 31612,
        "en": "star",
        "kk": "/stɑːr/",
        "zh": "n. 星星",
        "unit": 18,
        "example": "She's a US soap star.",
        "exampleZh": "她是美國肥皂劇明星。"
    },
    {
        "id": 31613,
        "en": "start",
        "kk": "/stɑːrt/",
        "zh": "v. 開始",
        "unit": 18,
        "example": "They determined to start early.",
        "exampleZh": "他們決定早點出發。"
    },
    {
        "id": 31614,
        "en": "state",
        "kk": "/steɪt/",
        "zh": "v. 敘述",
        "unit": 18,
        "example": "Music can induce a meditative state.",
        "exampleZh": "音樂可以引發冥想狀態。"
    },
    {
        "id": 31615,
        "en": "station",
        "kk": "/ˈsteɪʃn/",
        "zh": "n. 車站",
        "unit": 18,
        "example": "The train pulled into a station.",
        "exampleZh": "火車進站了。"
    },
    {
        "id": 31616,
        "en": "stationery",
        "kk": "",
        "zh": "n. 文具",
        "unit": 18,
        "example": "The stationery order has arrived.",
        "exampleZh": ""
    },
    {
        "id": 31617,
        "en": "stay",
        "kk": "/steɪ/",
        "zh": "v. 停留",
        "unit": 18,
        "example": "Will you stay for supper?",
        "exampleZh": "你會留下來吃晚餐嗎？"
    },
    {
        "id": 31618,
        "en": "steak",
        "kk": "",
        "zh": "n. 牛排",
        "unit": 18,
        "example": "He dug his fork into the steak.",
        "exampleZh": ""
    },
    {
        "id": 31619,
        "en": "steal",
        "kk": "",
        "zh": "v. 偷竊",
        "unit": 18,
        "example": "Hunger drove her to steal.",
        "exampleZh": "飢餓驅使她去偷竊。"
    },
    {
        "id": 31620,
        "en": "steam",
        "kk": "",
        "zh": "n. 蒸汽",
        "unit": 18,
        "example": "Who invented the steam engine?",
        "exampleZh": ""
    },
    {
        "id": 31621,
        "en": "step",
        "kk": "/step/",
        "zh": "v. 行走",
        "unit": 18,
        "example": "She took a step nearer.",
        "exampleZh": "她又靠近了一步。"
    },
    {
        "id": 31622,
        "en": "still",
        "kk": "/stɪl/",
        "zh": "adv. 仍然",
        "unit": 18,
        "example": "He still misbehaves occasionally.",
        "exampleZh": "他還是時不時地表現不端正。"
    },
    {
        "id": 31623,
        "en": "stingy",
        "kk": "",
        "zh": "adj. 小氣的",
        "unit": 18,
        "example": "Don't be so stingy!",
        "exampleZh": ""
    },
    {
        "id": 31624,
        "en": "stomach",
        "kk": "",
        "zh": "n. 胃",
        "unit": 18,
        "example": "He had violent stomach pains.",
        "exampleZh": ""
    },
    {
        "id": 31625,
        "en": "stomachache",
        "kk": "",
        "zh": "n. 胃痛",
        "unit": 18,
        "example": "I can't stand this stomachache.",
        "exampleZh": ""
    },
    {
        "id": 31626,
        "en": "stone",
        "kk": "",
        "zh": "n. 石頭",
        "unit": 18,
        "example": "She's trying to lose a stone.",
        "exampleZh": "她正試圖失去一塊石頭。"
    },
    {
        "id": 31627,
        "en": "stop",
        "kk": "/stɑːp/",
        "zh": "v. 停",
        "unit": 18,
        "example": "Why didn't he stop me?",
        "exampleZh": "他為什麼不阻止我？"
    },
    {
        "id": 31628,
        "en": "store",
        "kk": "/stɔːr/",
        "zh": "n. 商店",
        "unit": 18,
        "example": "They run a small grocery store.",
        "exampleZh": "他們經營一家小雜貨店。"
    },
    {
        "id": 31629,
        "en": "storm",
        "kk": "",
        "zh": "n. 暴風雨",
        "unit": 18,
        "example": "The storm clouds were gathering.",
        "exampleZh": ""
    },
    {
        "id": 31630,
        "en": "story",
        "kk": "/ˈstɔːri/",
        "zh": "n. 故事",
        "unit": 18,
        "example": "Newspapers blew up the story.",
        "exampleZh": "報紙報道了這個故事。"
    },
    {
        "id": 31631,
        "en": "stove",
        "kk": "",
        "zh": "n. 火爐",
        "unit": 18,
        "example": "I burned myself on the stove.",
        "exampleZh": ""
    },
    {
        "id": 31632,
        "en": "straight",
        "kk": "",
        "zh": "adj. 直的",
        "unit": 18,
        "example": "His teeth were perfectly straight.",
        "exampleZh": ""
    },
    {
        "id": 31633,
        "en": "strange",
        "kk": "",
        "zh": "adj. 奇怪的",
        "unit": 18,
        "example": "Then a strange thing happened.",
        "exampleZh": "然後奇怪的事情發生了。"
    },
    {
        "id": 31634,
        "en": "stranger",
        "kk": "",
        "zh": "n. 陌生人",
        "unit": 18,
        "example": "She married a practical stranger.",
        "exampleZh": ""
    },
    {
        "id": 31635,
        "en": "straw",
        "kk": "",
        "zh": "n. 稻草",
        "unit": 18,
        "example": "The floors are covered with woven straw mats.",
        "exampleZh": ""
    },
    {
        "id": 31636,
        "en": "strawberry",
        "kk": "",
        "zh": "n. 草莓",
        "unit": 18,
        "example": "I want a strawberry milkshake.",
        "exampleZh": ""
    },
    {
        "id": 31637,
        "en": "stream",
        "kk": "",
        "zh": "n. 小河",
        "unit": 18,
        "example": "They jumped over the stream.",
        "exampleZh": ""
    },
    {
        "id": 31638,
        "en": "street",
        "kk": "/striːt/",
        "zh": "n. 街道",
        "unit": 18,
        "example": "He lives just down the street.",
        "exampleZh": "他就住在街上。"
    },
    {
        "id": 31639,
        "en": "strike",
        "kk": "",
        "zh": "n. 罷工",
        "unit": 18,
        "example": "A strike has shut the factory.",
        "exampleZh": ""
    },
    {
        "id": 31640,
        "en": "strong",
        "kk": "/strɔːŋ/",
        "zh": "adj. 強壯的",
        "unit": 18,
        "example": "He's the strong silent type.",
        "exampleZh": "他是那種沉默寡言的強者。"
    },
    {
        "id": 31641,
        "en": "student",
        "kk": "/ˈstuːdənt/",
        "zh": "n. 學生",
        "unit": 18,
        "example": "Student numbers are expanding rapidly.",
        "exampleZh": "學生人數正在迅速增加。"
    },
    {
        "id": 31642,
        "en": "study",
        "kk": "/ˈstʌdi/",
        "zh": "v. 學習",
        "unit": 18,
        "example": "She was accepted to study music.",
        "exampleZh": "她被錄取學習音樂。"
    },
    {
        "id": 31643,
        "en": "stupid",
        "kk": "",
        "zh": "adj. 笨的",
        "unit": 18,
        "example": "How could I have been so stupid?",
        "exampleZh": "我怎麼會這麼蠢呢？"
    },
    {
        "id": 31644,
        "en": "style",
        "kk": "/staɪl/",
        "zh": "n. 風格",
        "unit": 18,
        "example": "He had a dense, ponderous style.",
        "exampleZh": ""
    },
    {
        "id": 31645,
        "en": "subject",
        "kk": "/ˈsʌbdʒɪkt/",
        "zh": "n. 科目",
        "unit": 18,
        "example": "Biology is my favourite subject.",
        "exampleZh": ""
    },
    {
        "id": 31646,
        "en": "subway",
        "kk": "",
        "zh": "n. 地鐵",
        "unit": 18,
        "example": "The subway was covered in graffiti.",
        "exampleZh": ""
    },
    {
        "id": 31647,
        "en": "succeed",
        "kk": "",
        "zh": "v. 成功",
        "unit": 18,
        "example": "The project seemed unlikely to succeed.",
        "exampleZh": "該項目似乎不太可能成功。"
    },
    {
        "id": 31648,
        "en": "success",
        "kk": "/səkˈses/",
        "zh": "n. 成功",
        "unit": 18,
        "example": "The book ensured his success.",
        "exampleZh": ""
    },
    {
        "id": 31649,
        "en": "successful",
        "kk": "",
        "zh": "adj. 成功的",
        "unit": 18,
        "example": "I think it's going to be successful.",
        "exampleZh": "我認為它會成功。"
    },
    {
        "id": 31650,
        "en": "such",
        "kk": "/sʌtʃ/",
        "zh": "det. 如此的",
        "unit": 18,
        "example": "Such a view is pleasing.",
        "exampleZh": "這樣的景色令人賞心悅目。"
    },
    {
        "id": 31651,
        "en": "sudden",
        "kk": "",
        "zh": "adj. 突然的",
        "unit": 18,
        "example": "A sudden noise startled her.",
        "exampleZh": ""
    },
    {
        "id": 31652,
        "en": "sugar",
        "kk": "",
        "zh": "n. 糖",
        "unit": 18,
        "example": "Sugar occurs naturally in fruit.",
        "exampleZh": "糖天然存在於水果中。"
    },
    {
        "id": 31653,
        "en": "suggest",
        "kk": "/səɡˈdʒest/",
        "zh": "v. 建議",
        "unit": 18,
        "example": "I suggest we let the matter drop.",
        "exampleZh": ""
    },
    {
        "id": 31654,
        "en": "suit",
        "kk": "",
        "zh": "v. 適合",
        "unit": 18,
        "example": "Lighter shades suit you best.",
        "exampleZh": ""
    },
    {
        "id": 31655,
        "en": "summer",
        "kk": "/ˈsʌmər/",
        "zh": "n. 夏天",
        "unit": 18,
        "example": "I really love summer evenings.",
        "exampleZh": "我真的很喜歡夏天的夜晚。"
    },
    {
        "id": 31656,
        "en": "sun",
        "kk": "/sʌn/",
        "zh": "n. 太陽",
        "unit": 18,
        "example": "The sun disappeared from view.",
        "exampleZh": "太陽從視野中消失了。"
    },
    {
        "id": 31657,
        "en": "Sunday",
        "kk": "",
        "zh": "n. 星期天",
        "unit": 18,
        "example": "We work every day except Sunday.",
        "exampleZh": "除了星期日，我們每天都會工作。"
    },
    {
        "id": 31658,
        "en": "sunny",
        "kk": "",
        "zh": "adj. 陽光充足的",
        "unit": 18,
        "example": "It's a brilliantly sunny morning.",
        "exampleZh": "這是一個陽光明媚的早晨。"
    },
    {
        "id": 31659,
        "en": "super",
        "kk": "",
        "zh": "adj. 極好的",
        "unit": 18,
        "example": "We had a super time.",
        "exampleZh": "我們度過了一段美好的時光。"
    },
    {
        "id": 31660,
        "en": "supermarket",
        "kk": "",
        "zh": "n. 超市",
        "unit": 18,
        "example": "I do a weekly shop at the supermarket.",
        "exampleZh": ""
    },
    {
        "id": 31661,
        "en": "supper",
        "kk": "",
        "zh": "n. 晚餐",
        "unit": 18,
        "example": "Who's going to cook supper?",
        "exampleZh": "誰來煮飯？"
    },
    {
        "id": 31662,
        "en": "supply",
        "kk": "",
        "zh": "v. 提供",
        "unit": 18,
        "example": "The electricity supply here is quite erratic.",
        "exampleZh": ""
    },
    {
        "id": 31663,
        "en": "support",
        "kk": "/səˈpɔːrt/",
        "zh": "v. 支持",
        "unit": 18,
        "example": "We offer free technical support.",
        "exampleZh": ""
    },
    {
        "id": 31664,
        "en": "sure",
        "kk": "/ʃʊr/",
        "zh": "adj. 確定的",
        "unit": 18,
        "example": "'I'm not sure,' she responded.",
        "exampleZh": "「我不確定，」她回答。"
    },
    {
        "id": 31665,
        "en": "surf",
        "kk": "",
        "zh": "v. 衝浪",
        "unit": 18,
        "example": "I'm going to buy a surfboard and learn to surf.",
        "exampleZh": ""
    },
    {
        "id": 31666,
        "en": "surface",
        "kk": "/ˈsɜːrfəs/",
        "zh": "n. 表面",
        "unit": 18,
        "example": "He staggered on the uneven surface.",
        "exampleZh": ""
    },
    {
        "id": 31667,
        "en": "surprise",
        "kk": "",
        "zh": "v. 驚訝",
        "unit": 18,
        "example": "She looked up in surprise.",
        "exampleZh": "她驚訝地抬起頭。"
    },
    {
        "id": 31668,
        "en": "surprised",
        "kk": "",
        "zh": "adj. 感到驚訝的",
        "unit": 18,
        "example": "I'm really not a bit surprised.",
        "exampleZh": ""
    },
    {
        "id": 31669,
        "en": "survive",
        "kk": "",
        "zh": "v. 生存",
        "unit": 18,
        "example": "Most women will survive their spouses.",
        "exampleZh": "大多數女性都會在她們的配偶後存活下來。"
    },
    {
        "id": 31670,
        "en": "swallow",
        "kk": "",
        "zh": "v. 吞嚥",
        "unit": 18,
        "example": "You are asked to swallow a capsule containing vitamin B.",
        "exampleZh": ""
    },
    {
        "id": 31671,
        "en": "swan",
        "kk": "",
        "zh": "n. 天鵝",
        "unit": 18,
        "example": "The swan flapped its wings noisily.",
        "exampleZh": ""
    },
    {
        "id": 31672,
        "en": "sweater",
        "kk": "",
        "zh": "n. 毛衣",
        "unit": 18,
        "example": "The fence snagged my sweater.",
        "exampleZh": ""
    },
    {
        "id": 31673,
        "en": "sweep",
        "kk": "",
        "zh": "v. 清掃",
        "unit": 18,
        "example": "Strong winds regularly sweep the islands.",
        "exampleZh": ""
    },
    {
        "id": 31674,
        "en": "sweet",
        "kk": "",
        "zh": "adj. 甜的",
        "unit": 18,
        "example": "I especially like sweet things.",
        "exampleZh": "我特別喜歡甜的東西。"
    },
    {
        "id": 31675,
        "en": "swim",
        "kk": "",
        "zh": "v. 游泳",
        "unit": 18,
        "example": "I managed to swim to safety.",
        "exampleZh": "我設法游到安全的地方。"
    },
    {
        "id": 31676,
        "en": "swing",
        "kk": "",
        "zh": "v. 搖擺",
        "unit": 18,
        "example": "I need to work on my swing.",
        "exampleZh": ""
    },
    {
        "id": 31677,
        "en": "symbol",
        "kk": "",
        "zh": "n. 象徵",
        "unit": 18,
        "example": "What's the chemical symbol for mercury?",
        "exampleZh": ""
    },
    {
        "id": 31678,
        "en": "system",
        "kk": "/ˈsɪstəm/",
        "zh": "n. 系統",
        "unit": 18,
        "example": "Trust is implicit in the system.",
        "exampleZh": ""
    },
    {
        "id": 31679,
        "en": "table",
        "kk": "/ˈteɪbl/",
        "zh": "n. 桌子",
        "unit": 18,
        "example": "He thumped the table angrily.",
        "exampleZh": "他生氣地拍著桌子。"
    },
    {
        "id": 31680,
        "en": "tail",
        "kk": "",
        "zh": "n. 尾巴",
        "unit": 18,
        "example": "The pony swished its tail.",
        "exampleZh": "小馬搖著尾巴。"
    },
    {
        "id": 31681,
        "en": "take",
        "kk": "/teɪk/",
        "zh": "v. 拿",
        "unit": 18,
        "example": "Take whatever action is needed.",
        "exampleZh": "採取任何需要的行動。"
    },
    {
        "id": 31682,
        "en": "tale",
        "kk": "",
        "zh": "n. 故事",
        "unit": 18,
        "example": "She unfolded her tale to us.",
        "exampleZh": "她向我們講述了她的故事。"
    },
    {
        "id": 31683,
        "en": "talent",
        "kk": "",
        "zh": "n. 才能",
        "unit": 18,
        "example": "He's got lots of talent.",
        "exampleZh": ""
    },
    {
        "id": 31684,
        "en": "talk",
        "kk": "/tɔːk/",
        "zh": "v. 說話",
        "unit": 18,
        "example": "They talk about it endlessly.",
        "exampleZh": "他們無休無止地談論它。"
    },
    {
        "id": 31685,
        "en": "talkative",
        "kk": "",
        "zh": "adj. 多話的",
        "unit": 18,
        "example": "He is very talkative.",
        "exampleZh": "他很健談。"
    },
    {
        "id": 31686,
        "en": "tall",
        "kk": "",
        "zh": "adj. 高的",
        "unit": 18,
        "example": "She was tall and slim.",
        "exampleZh": "她又高又苗條。"
    },
    {
        "id": 31687,
        "en": "tangerine",
        "kk": "",
        "zh": "n. 橘子",
        "unit": 18,
        "example": "Tangerine, raspberry, and kumquat have many small seeds.",
        "exampleZh": ""
    },
    {
        "id": 31688,
        "en": "tank",
        "kk": "",
        "zh": "n. 坦克",
        "unit": 18,
        "example": "The tank became bogged down in mud.",
        "exampleZh": ""
    },
    {
        "id": 31689,
        "en": "tape",
        "kk": "",
        "zh": "n. 錄音帶",
        "unit": 18,
        "example": "We've got her statement on tape.",
        "exampleZh": ""
    },
    {
        "id": 31690,
        "en": "task",
        "kk": "/tæsk/",
        "zh": "n. 任務",
        "unit": 18,
        "example": "The task was a formidable one.",
        "exampleZh": ""
    },
    {
        "id": 31691,
        "en": "taste",
        "kk": "",
        "zh": "n. 味道",
        "unit": 18,
        "example": "The salads taste too vinegary.",
        "exampleZh": "沙拉味道太醋了。"
    },
    {
        "id": 31692,
        "en": "taxi",
        "kk": "",
        "zh": "n. 計程車",
        "unit": 18,
        "example": "I hailed a passing taxi.",
        "exampleZh": "我招呼了一輛路過的計程車。"
    },
    {
        "id": 31693,
        "en": "tea",
        "kk": "",
        "zh": "n. 茶",
        "unit": 18,
        "example": "There's hardly any tea left.",
        "exampleZh": "茶已經所剩無幾了。"
    },
    {
        "id": 31694,
        "en": "teach",
        "kk": "/tiːtʃ/",
        "zh": "v. 教導",
        "unit": 18,
        "example": "Could you teach me to do that?",
        "exampleZh": "你能教我這樣做嗎？"
    },
    {
        "id": 31695,
        "en": "teacher",
        "kk": "/ˈtiːtʃər/",
        "zh": "n. 老師",
        "unit": 18,
        "example": "She's a very capable teacher.",
        "exampleZh": "她是一位非常有能力的老師。"
    },
    {
        "id": 31696,
        "en": "team",
        "kk": "/tiːm/",
        "zh": "n. 隊伍",
        "unit": 18,
        "example": "The team was soundly defeated.",
        "exampleZh": ""
    },
    {
        "id": 31697,
        "en": "teapot",
        "kk": "",
        "zh": "n. 茶壺",
        "unit": 18,
        "example": "For some, it may seem silly, a tempest in a teapot.",
        "exampleZh": ""
    },
    {
        "id": 31698,
        "en": "tear",
        "kk": "",
        "zh": "n. 眼淚",
        "unit": 18,
        "example": "Ann wiped a tear from her eye.",
        "exampleZh": ""
    },
    {
        "id": 31699,
        "en": "teenager",
        "kk": "",
        "zh": "n. 青少年",
        "unit": 18,
        "example": "He was acting like a lovelorn teenager.",
        "exampleZh": ""
    },
    {
        "id": 31700,
        "en": "telephone",
        "kk": "",
        "zh": "n. 電話",
        "unit": 18,
        "example": "He snatched up the telephone.",
        "exampleZh": ""
    },
    {
        "id": 31701,
        "en": "television",
        "kk": "/ˈtelɪvɪʒn/",
        "zh": "n. 電視",
        "unit": 18,
        "example": "I'll turn the television on.",
        "exampleZh": ""
    },
    {
        "id": 31702,
        "en": "tell",
        "kk": "/tel/",
        "zh": "v. 說",
        "unit": 18,
        "example": "Tell me what really happened.",
        "exampleZh": "告訴我到底發生了什麼事。"
    },
    {
        "id": 31703,
        "en": "temperature",
        "kk": "",
        "zh": "n. 溫度",
        "unit": 18,
        "example": "The temperature has dropped considerably.",
        "exampleZh": ""
    },
    {
        "id": 31704,
        "en": "temple",
        "kk": "",
        "zh": "n. 廟宇",
        "unit": 18,
        "example": "We go to temple on Saturdays.",
        "exampleZh": ""
    },
    {
        "id": 31705,
        "en": "ten",
        "kk": "/ten/",
        "zh": "n. 十",
        "unit": 18,
        "example": "Tickets cost ten dollars each.",
        "exampleZh": "門票每張十美元。"
    },
    {
        "id": 31706,
        "en": "tennis",
        "kk": "",
        "zh": "n. 網球",
        "unit": 18,
        "example": "I'm not much good at tennis.",
        "exampleZh": ""
    },
    {
        "id": 31707,
        "en": "tent",
        "kk": "",
        "zh": "n. 帳篷",
        "unit": 18,
        "example": "I heard the tent rip.",
        "exampleZh": ""
    },
    {
        "id": 31708,
        "en": "term",
        "kk": "/tɜːrm/",
        "zh": "n. 任期",
        "unit": 18,
        "example": "It's nearly the end of term.",
        "exampleZh": ""
    },
    {
        "id": 31709,
        "en": "terrible",
        "kk": "",
        "zh": "adj. 可怕的",
        "unit": 18,
        "example": "I'm in a terrible predicament.",
        "exampleZh": "我陷入了可怕的困境。"
    },
    {
        "id": 31710,
        "en": "terrific",
        "kk": "",
        "zh": "adj. 很棒的",
        "unit": 18,
        "example": "She's doing a terrific job.",
        "exampleZh": "她做得很好。"
    },
    {
        "id": 31711,
        "en": "test",
        "kk": "/test/",
        "zh": "n. 測驗",
        "unit": 18,
        "example": "He failed his driving test.",
        "exampleZh": ""
    },
    {
        "id": 31712,
        "en": "textbook",
        "kk": "",
        "zh": "n. 教科書",
        "unit": 18,
        "example": "I gave the textbook back to him.",
        "exampleZh": ""
    },
    {
        "id": 31713,
        "en": "than",
        "kk": "/ðæn/",
        "zh": "conj. 比...",
        "unit": 18,
        "example": "Faith is stronger than reason.",
        "exampleZh": "信仰比理性更強大。"
    },
    {
        "id": 31714,
        "en": "thank",
        "kk": "/θæŋk/",
        "zh": "v. 謝謝",
        "unit": 18,
        "example": "I'm better now, thank you.",
        "exampleZh": "我現在好多了，謝謝。"
    },
    {
        "id": 31715,
        "en": "Thanksgiving",
        "kk": "",
        "zh": "n. 感恩節",
        "unit": 18,
        "example": "Are you going home for Thanksgiving?",
        "exampleZh": ""
    },
    {
        "id": 31716,
        "en": "that",
        "kk": "/ðæt/",
        "zh": "pron. 那",
        "unit": 18,
        "example": "Phew! That was close—that car nearly hit us.",
        "exampleZh": "唷！很接近——那輛車差點撞到我們。"
    },
    {
        "id": 31717,
        "en": "theater",
        "kk": "",
        "zh": "n. 電影院",
        "unit": 18,
        "example": "It's the South Theater Company.",
        "exampleZh": ""
    },
    {
        "id": 31718,
        "en": "then",
        "kk": "/ðen/",
        "zh": "adv. 然後",
        "unit": 18,
        "example": "The seagulls soared then dived.",
        "exampleZh": "海鷗飛翔，然後潛入水中。"
    },
    {
        "id": 31719,
        "en": "there",
        "kk": "/ðer/",
        "zh": "adv. 那裡",
        "unit": 18,
        "example": "There were thousands of people there.",
        "exampleZh": "那裡有數千人。"
    },
    {
        "id": 31720,
        "en": "therefore",
        "kk": "",
        "zh": "adv. 因此",
        "unit": 18,
        "example": "He's only 17 and therefore not eligible to vote.",
        "exampleZh": "他只有 17 歲，因此沒有資格投票。"
    },
    {
        "id": 31721,
        "en": "these",
        "kk": "/ðiːz/",
        "zh": "pron. 這些",
        "unit": 18,
        "example": "These questions frustrated me.",
        "exampleZh": "這些問題讓我很沮喪。"
    },
    {
        "id": 31722,
        "en": "thick",
        "kk": "",
        "zh": "adj. 厚的",
        "unit": 18,
        "example": "He had thick black hair.",
        "exampleZh": "他有一頭濃密的黑髮。"
    },
    {
        "id": 31723,
        "en": "thief",
        "kk": "",
        "zh": "n. 小偷",
        "unit": 18,
        "example": "The thief used a false identity.",
        "exampleZh": ""
    },
    {
        "id": 31724,
        "en": "thin",
        "kk": "",
        "zh": "adj. 薄的",
        "unit": 18,
        "example": "The dog was painfully thin.",
        "exampleZh": "那隻狗瘦得令人痛苦。"
    },
    {
        "id": 31725,
        "en": "thing",
        "kk": "",
        "zh": "n. 事情",
        "unit": 18,
        "example": "Then a strange thing happened.",
        "exampleZh": "然後奇怪的事情發生了。"
    },
    {
        "id": 31726,
        "en": "think",
        "kk": "",
        "zh": "v. 想",
        "unit": 18,
        "example": "I think their methods stink.",
        "exampleZh": "我認為他們的方法很糟糕。"
    },
    {
        "id": 31727,
        "en": "third",
        "kk": "",
        "zh": "adj. 第三的",
        "unit": 18,
        "example": "He finished in third place.",
        "exampleZh": "他獲得第三名。"
    },
    {
        "id": 31728,
        "en": "thirsty",
        "kk": "",
        "zh": "adj. 口渴的",
        "unit": 18,
        "example": "When a baby is thirsty, it feeds more often.",
        "exampleZh": "當寶寶口渴時，他會更頻繁地吃奶。"
    },
    {
        "id": 31729,
        "en": "thirteen",
        "kk": "",
        "zh": "n. 十三",
        "unit": 18,
        "example": "Thirteen is often considered an unlucky number.",
        "exampleZh": "十三常常被認為是一個不吉利的數字。"
    },
    {
        "id": 31730,
        "en": "thirty",
        "kk": "",
        "zh": "n. 三十",
        "unit": 18,
        "example": "Some thirty people attended the funeral.",
        "exampleZh": "約有三十人參加了葬禮。"
    },
    {
        "id": 31731,
        "en": "this",
        "kk": "",
        "zh": "pron. 這",
        "unit": 18,
        "example": "This carpet stains easily.",
        "exampleZh": "這塊地毯很容易弄髒。"
    },
    {
        "id": 31732,
        "en": "those",
        "kk": "",
        "zh": "pron. 那些",
        "unit": 18,
        "example": "Those laws no longer pertain.",
        "exampleZh": "這些法律不再適用。"
    },
    {
        "id": 31733,
        "en": "though",
        "kk": "",
        "zh": "conj. 雖然",
        "unit": 18,
        "example": "He did reply, though not immediately.",
        "exampleZh": "他確實回復了，儘管不是立即。"
    },
    {
        "id": 31734,
        "en": "thought",
        "kk": "",
        "zh": "n. 想法",
        "unit": 18,
        "example": "I thought you'd never finish!",
        "exampleZh": "我以為你永遠不會完成！"
    },
    {
        "id": 31735,
        "en": "thousand",
        "kk": "",
        "zh": "n. 千",
        "unit": 18,
        "example": "A thousand people were there.",
        "exampleZh": "那裡有一千人。"
    },
    {
        "id": 31736,
        "en": "three",
        "kk": "",
        "zh": "n. 三",
        "unit": 18,
        "example": "The clock said three o'clock.",
        "exampleZh": "時鐘指向三點鐘。"
    },
    {
        "id": 31737,
        "en": "throat",
        "kk": "",
        "zh": "n. 喉嚨",
        "unit": 18,
        "example": "Symptoms include a sore throat.",
        "exampleZh": ""
    },
    {
        "id": 31738,
        "en": "through",
        "kk": "",
        "zh": "adv. 自始至終",
        "unit": 18,
        "example": "He breezed through the tests.",
        "exampleZh": "他輕鬆地通過了測試。"
    },
    {
        "id": 31739,
        "en": "throw",
        "kk": "",
        "zh": "v. 投,扔",
        "unit": 18,
        "example": "I never throw anything away.",
        "exampleZh": "我從不丟掉任何東西。"
    },
    {
        "id": 31740,
        "en": "thumb",
        "kk": "",
        "zh": "n. 拇指",
        "unit": 18,
        "example": "There's a hole in the thumb.",
        "exampleZh": ""
    },
    {
        "id": 31741,
        "en": "thunder",
        "kk": "",
        "zh": "n. 雷",
        "unit": 18,
        "example": "Thunder cracked in the sky.",
        "exampleZh": ""
    },
    {
        "id": 31742,
        "en": "Thursday",
        "kk": "",
        "zh": "n. 星期四",
        "unit": 18,
        "example": "We agreed to meet on Thursday.",
        "exampleZh": "我們同意週四見面。"
    },
    {
        "id": 31743,
        "en": "ticket",
        "kk": "",
        "zh": "n. 票",
        "unit": 18,
        "example": "You can have my ticket.",
        "exampleZh": "你可以拿走我的票。"
    },
    {
        "id": 31744,
        "en": "tidy",
        "kk": "",
        "zh": "adj. 整潔的",
        "unit": 18,
        "example": "They sat in her neat and tidy kitchen.",
        "exampleZh": ""
    },
    {
        "id": 31745,
        "en": "tie",
        "kk": "",
        "zh": "n. 領帶",
        "unit": 18,
        "example": "He carefully knotted his tie.",
        "exampleZh": "他小心翼翼地打結領帶。"
    },
    {
        "id": 31746,
        "en": "tiger",
        "kk": "",
        "zh": "n. 老虎",
        "unit": 18,
        "example": "The tiger is native to India.",
        "exampleZh": "老虎原產於印度。"
    },
    {
        "id": 31747,
        "en": "till",
        "kk": "",
        "zh": "conj. 直到",
        "unit": 18,
        "example": "We're open till 6 o'clock.",
        "exampleZh": "我們營業到六點。"
    },
    {
        "id": 31748,
        "en": "time",
        "kk": "",
        "zh": "n. 時間",
        "unit": 18,
        "example": "This time they've messed up big time!",
        "exampleZh": "這一次，他們闖大禍了！"
    },
    {
        "id": 31749,
        "en": "tiny",
        "kk": "",
        "zh": "adj. 極小的",
        "unit": 18,
        "example": "Each individual flower is tiny.",
        "exampleZh": "每朵花都很小。"
    },
    {
        "id": 31750,
        "en": "tip",
        "kk": "",
        "zh": "n. 祕訣",
        "unit": 18,
        "example": "Did you give the waiter a tip?",
        "exampleZh": ""
    },
    {
        "id": 31751,
        "en": "tired",
        "kk": "",
        "zh": "adj. 疲倦的",
        "unit": 18,
        "example": "He looked tired and dishevelled.",
        "exampleZh": ""
    },
    {
        "id": 31752,
        "en": "title",
        "kk": "",
        "zh": "n. 標題",
        "unit": 18,
        "example": "The title is printed in italics.",
        "exampleZh": ""
    },
    {
        "id": 31753,
        "en": "to",
        "kk": "",
        "zh": "prep. 向,朝",
        "unit": 18,
        "example": "I was trying to save money to go to college.",
        "exampleZh": "我想存錢去上大學。"
    },
    {
        "id": 31754,
        "en": "toast",
        "kk": "",
        "zh": "n. 吐司",
        "unit": 18,
        "example": "He was choking on a piece of toast.",
        "exampleZh": ""
    },
    {
        "id": 31755,
        "en": "today",
        "kk": "",
        "zh": "n. 今天",
        "unit": 18,
        "example": "I'm revising Geography today.",
        "exampleZh": "我今天正在複習地理。"
    },
    {
        "id": 31756,
        "en": "toe",
        "kk": "",
        "zh": "n. 腳趾頭",
        "unit": 18,
        "example": "Ouch! You trod on my toe!",
        "exampleZh": ""
    },
    {
        "id": 31757,
        "en": "tofu",
        "kk": "",
        "zh": "n. 豆腐",
        "unit": 18,
        "example": "Tofu is a kind of traditional Chinese food.",
        "exampleZh": ""
    },
    {
        "id": 31758,
        "en": "together",
        "kk": "",
        "zh": "adv. 一起",
        "unit": 18,
        "example": "Fate had thrown them together.",
        "exampleZh": "命運讓他們走到了一起。"
    },
    {
        "id": 31759,
        "en": "toilet",
        "kk": "",
        "zh": "n. 馬桶",
        "unit": 18,
        "example": "Do you need the toilet ?",
        "exampleZh": ""
    },
    {
        "id": 31760,
        "en": "tomato",
        "kk": "",
        "zh": "n. 番茄",
        "unit": 18,
        "example": "It's similar in size to a tomato.",
        "exampleZh": ""
    },
    {
        "id": 31761,
        "en": "tomorrow",
        "kk": "",
        "zh": "n. 明天",
        "unit": 18,
        "example": "Snow is forecast for tomorrow.",
        "exampleZh": "預計明天會下雪。"
    },
    {
        "id": 31762,
        "en": "tongue",
        "kk": "",
        "zh": "n. 舌頭",
        "unit": 18,
        "example": "The dog's tongue was hanging out.",
        "exampleZh": ""
    },
    {
        "id": 31763,
        "en": "tonight",
        "kk": "",
        "zh": "n. 今晚",
        "unit": 18,
        "example": "What's on television tonight?",
        "exampleZh": "今晚電視有什麼節目？"
    },
    {
        "id": 31764,
        "en": "too",
        "kk": "",
        "zh": "adv. 也",
        "unit": 18,
        "example": "Critics derided the move as too little, too late.",
        "exampleZh": "批評者嘲笑此舉太少、太晚。"
    },
    {
        "id": 31765,
        "en": "tool",
        "kk": "",
        "zh": "n. 工具",
        "unit": 18,
        "example": "What is this tool for?",
        "exampleZh": "這個工具有什麼用？"
    },
    {
        "id": 31766,
        "en": "tooth",
        "kk": "",
        "zh": "n. 牙齒",
        "unit": 18,
        "example": "He's got a front tooth missing.",
        "exampleZh": ""
    },
    {
        "id": 31767,
        "en": "toothache",
        "kk": "",
        "zh": "n. 牙痛",
        "unit": 18,
        "example": "I've got a toothache.",
        "exampleZh": ""
    },
    {
        "id": 31768,
        "en": "toothbrush",
        "kk": "",
        "zh": "n. 牙刷",
        "unit": 18,
        "example": "How do you choose your toothbrush?",
        "exampleZh": ""
    },
    {
        "id": 31769,
        "en": "top",
        "kk": "",
        "zh": "n. 上面",
        "unit": 18,
        "example": "She got the top job.",
        "exampleZh": "她得到了最高職位。"
    },
    {
        "id": 31770,
        "en": "topic",
        "kk": "",
        "zh": "n. 主題",
        "unit": 18,
        "example": "He spoke with authority on the topic.",
        "exampleZh": ""
    },
    {
        "id": 31771,
        "en": "total",
        "kk": "",
        "zh": "adj. 完全的",
        "unit": 18,
        "example": "Total recycling is a fiction.",
        "exampleZh": "完全回收是一個虛構的故事。"
    },
    {
        "id": 31772,
        "en": "touch",
        "kk": "",
        "zh": "v. 感動",
        "unit": 18,
        "example": "She recoiled from his touch.",
        "exampleZh": "她從他的碰觸中退縮了。"
    },
    {
        "id": 31773,
        "en": "toward",
        "kk": "",
        "zh": "prep. 朝",
        "unit": 18,
        "example": "She turned back toward home.",
        "exampleZh": "她轉身朝家的方向走去。"
    },
    {
        "id": 31774,
        "en": "towel",
        "kk": "",
        "zh": "n. 毛巾",
        "unit": 18,
        "example": "He flicked me with a wet towel.",
        "exampleZh": ""
    },
    {
        "id": 31775,
        "en": "tower",
        "kk": "",
        "zh": "n. 塔",
        "unit": 18,
        "example": "The tower is leaning dangerously.",
        "exampleZh": ""
    },
    {
        "id": 31776,
        "en": "town",
        "kk": "",
        "zh": "n. 城鎮",
        "unit": 18,
        "example": "The town was weirdly familiar.",
        "exampleZh": "這個小鎮有一種奇怪的熟悉感。"
    },
    {
        "id": 31777,
        "en": "toy",
        "kk": "",
        "zh": "n. 玩具",
        "unit": 18,
        "example": "The toy industry is in a slump.",
        "exampleZh": "玩具業正陷入低迷。"
    },
    {
        "id": 31778,
        "en": "trace",
        "kk": "",
        "zh": "n. 蹤跡",
        "unit": 18,
        "example": "The trace showed a normal heart rhythm.",
        "exampleZh": ""
    },
    {
        "id": 31779,
        "en": "track",
        "kk": "",
        "zh": "v. 跟蹤",
        "unit": 18,
        "example": "The track snaked perilously upwards.",
        "exampleZh": ""
    },
    {
        "id": 31780,
        "en": "trade",
        "kk": "",
        "zh": "n. 貿易",
        "unit": 18,
        "example": "Trade was very good last month.",
        "exampleZh": ""
    },
    {
        "id": 31781,
        "en": "tradition",
        "kk": "",
        "zh": "n. 傳統",
        "unit": 18,
        "example": "This region is steeped in tradition.",
        "exampleZh": ""
    },
    {
        "id": 31782,
        "en": "traditional",
        "kk": "",
        "zh": "adj. 傳統的",
        "unit": 18,
        "example": "Traditional values have been reasserted.",
        "exampleZh": "傳統價值觀得到了重申。"
    },
    {
        "id": 31783,
        "en": "traffic",
        "kk": "",
        "zh": "n. 交通",
        "unit": 18,
        "example": "The traffic lights were on amber.",
        "exampleZh": ""
    },
    {
        "id": 31784,
        "en": "train",
        "kk": "",
        "zh": "n. 訓練",
        "unit": 18,
        "example": "The train was flying along.",
        "exampleZh": "火車一路飛馳著。"
    },
    {
        "id": 31785,
        "en": "trap",
        "kk": "",
        "zh": "n. 陷阱",
        "unit": 18,
        "example": "A trap was laid, with fresh bait.",
        "exampleZh": ""
    },
    {
        "id": 31786,
        "en": "trash",
        "kk": "",
        "zh": "n. 垃圾",
        "unit": 18,
        "example": "Would you take out the trash?",
        "exampleZh": ""
    },
    {
        "id": 31787,
        "en": "travel",
        "kk": "",
        "zh": "v. 旅行",
        "unit": 18,
        "example": "It's cheaper to travel midweek.",
        "exampleZh": ""
    },
    {
        "id": 31788,
        "en": "treasure",
        "kk": "",
        "zh": "n. 寶藏",
        "unit": 18,
        "example": "The treasure had lain undisturbed for centuries.",
        "exampleZh": ""
    },
    {
        "id": 31789,
        "en": "treat",
        "kk": "",
        "zh": "v. 對待",
        "unit": 18,
        "example": "Valium is usually prescribed to treat anxiety.",
        "exampleZh": ""
    },
    {
        "id": 31790,
        "en": "tree",
        "kk": "",
        "zh": "n. 樹",
        "unit": 18,
        "example": "Let's rest under yonder tree.",
        "exampleZh": "我們在那棵樹下休息吧。"
    },
    {
        "id": 31791,
        "en": "triangle",
        "kk": "",
        "zh": "n. 三角形",
        "unit": 18,
        "example": "The red triangle denotes danger.",
        "exampleZh": ""
    },
    {
        "id": 31792,
        "en": "trick",
        "kk": "",
        "zh": "n. 惡作劇",
        "unit": 18,
        "example": "That was a nasty little trick.",
        "exampleZh": ""
    },
    {
        "id": 31793,
        "en": "trip",
        "kk": "",
        "zh": "n. 旅行",
        "unit": 18,
        "example": "She videotaped the entire trip.",
        "exampleZh": "她錄下了整趟旅程。"
    },
    {
        "id": 31794,
        "en": "trouble",
        "kk": "",
        "zh": "n. 麻煩",
        "unit": 18,
        "example": "Are you causing trouble again?",
        "exampleZh": "你又惹麻煩了嗎？"
    },
    {
        "id": 31795,
        "en": "trousers",
        "kk": "",
        "zh": "n. 褲子",
        "unit": 18,
        "example": "These trousers are a bit tight.",
        "exampleZh": ""
    },
    {
        "id": 31796,
        "en": "truck",
        "kk": "",
        "zh": "n. 卡車",
        "unit": 18,
        "example": "I've just loaded my truck up.",
        "exampleZh": ""
    },
    {
        "id": 31797,
        "en": "true",
        "kk": "",
        "zh": "adj. 真的",
        "unit": 18,
        "example": "This is not strictly true.",
        "exampleZh": "這並不完全正確。"
    },
    {
        "id": 31798,
        "en": "trumpet",
        "kk": "",
        "zh": "n. 喇叭",
        "unit": 18,
        "example": "I played the trumpet in the school orchestra.",
        "exampleZh": ""
    },
    {
        "id": 31799,
        "en": "trust",
        "kk": "",
        "zh": "v. 相信",
        "unit": 18,
        "example": "I couldn't trust him anymore.",
        "exampleZh": ""
    },
    {
        "id": 31800,
        "en": "truth",
        "kk": "",
        "zh": "n. 事實",
        "unit": 18,
        "example": "Slowly the awful truth dawned.",
        "exampleZh": ""
    },
    {
        "id": 31801,
        "en": "try",
        "kk": "",
        "zh": "v. 試圖",
        "unit": 18,
        "example": "Let's try to plan further ahead.",
        "exampleZh": "讓我們嘗試進一步計劃。"
    },
    {
        "id": 31802,
        "en": "T-shirt",
        "kk": "",
        "zh": "n. T 恤",
        "unit": 18,
        "example": "She wore an olive-green T-shirt.",
        "exampleZh": "她穿著一件橄欖綠的T卹。"
    },
    {
        "id": 31803,
        "en": "tube",
        "kk": "",
        "zh": "n. 管子",
        "unit": 18,
        "example": "I work in the extruded tube business.",
        "exampleZh": ""
    },
    {
        "id": 31804,
        "en": "Tuesday",
        "kk": "",
        "zh": "n. 星期二",
        "unit": 18,
        "example": "Tuesday is her half day.",
        "exampleZh": "星期二是她的半天。"
    },
    {
        "id": 31805,
        "en": "Tunnel",
        "kk": "",
        "zh": "n. 隧道",
        "unit": 18,
        "example": "He passed down the tunnel.",
        "exampleZh": ""
    },
    {
        "id": 31806,
        "en": "turkey",
        "kk": "",
        "zh": "n. 火雞",
        "unit": 18,
        "example": "Who's going to carve the turkey?",
        "exampleZh": ""
    },
    {
        "id": 31807,
        "en": "turn",
        "kk": "",
        "zh": "v. 轉彎",
        "unit": 18,
        "example": "He decided to turn professional.",
        "exampleZh": "他決定轉為職業。"
    },
    {
        "id": 31808,
        "en": "turtle",
        "kk": "",
        "zh": "n. 烏龜",
        "unit": 18,
        "example": "The Mock Turtle went on.",
        "exampleZh": ""
    },
    {
        "id": 31809,
        "en": "twelve",
        "kk": "",
        "zh": "n. 十二",
        "unit": 18,
        "example": "He retired twelve batters in a row.",
        "exampleZh": "他連續十二名擊球手退場。"
    },
    {
        "id": 31810,
        "en": "twenty",
        "kk": "",
        "zh": "n. 二十",
        "unit": 18,
        "example": "Twenty-eight is divisible by seven.",
        "exampleZh": "二十八可以被七整除。"
    },
    {
        "id": 31811,
        "en": "twice",
        "kk": "",
        "zh": "adv. 兩次",
        "unit": 18,
        "example": "I visited once or twice.",
        "exampleZh": "我去過一兩次。"
    },
    {
        "id": 31812,
        "en": "two",
        "kk": "",
        "zh": "n. 二",
        "unit": 18,
        "example": "Two prisoners have escaped.",
        "exampleZh": "兩名囚犯越獄了。"
    },
    {
        "id": 31813,
        "en": "type",
        "kk": "",
        "zh": "v. 打字",
        "unit": 18,
        "example": "What blood type do you have?",
        "exampleZh": ""
    },
    {
        "id": 31814,
        "en": "typhoon",
        "kk": "",
        "zh": "n. 颱風",
        "unit": 18,
        "example": "A typhoon is coming.",
        "exampleZh": ""
    },
    {
        "id": 31815,
        "en": "ugly",
        "kk": "",
        "zh": "adj. 醜陋的",
        "unit": 18,
        "example": "An ugly new building blocked the view from the window.",
        "exampleZh": "一座醜陋的新建築擋住了窗外的視線。"
    },
    {
        "id": 31816,
        "en": "umbrella",
        "kk": "",
        "zh": "n. 雨傘",
        "unit": 18,
        "example": "Her umbrella blew inside out.",
        "exampleZh": ""
    },
    {
        "id": 31817,
        "en": "uncle",
        "kk": "",
        "zh": "n. 叔伯",
        "unit": 18,
        "example": "My uncle taught me to juggle.",
        "exampleZh": "我叔叔教我雜耍。"
    },
    {
        "id": 31818,
        "en": "under",
        "kk": "/ˈʌndər/",
        "zh": "prep. 在...下面",
        "unit": 18,
        "example": "They feel under permanent threat.",
        "exampleZh": "他們感到永遠受到威脅。"
    },
    {
        "id": 31819,
        "en": "underline",
        "kk": "",
        "zh": "v. 強調",
        "unit": 18,
        "example": "Some readers would underline the page as they read.",
        "exampleZh": ""
    },
    {
        "id": 31820,
        "en": "understand",
        "kk": "/ˌʌndərˈstænd/",
        "zh": "v. 了解",
        "unit": 18,
        "example": "I fully understand your motives.",
        "exampleZh": "我完全理解你的動機。"
    },
    {
        "id": 31821,
        "en": "underwear",
        "kk": "",
        "zh": "n. 內衣褲",
        "unit": 18,
        "example": "She packed one change of underwear.",
        "exampleZh": ""
    },
    {
        "id": 31822,
        "en": "unhappy",
        "kk": "",
        "zh": "adj. 不快樂的",
        "unit": 18,
        "example": "I hate to see you unhappy.",
        "exampleZh": ""
    },
    {
        "id": 31823,
        "en": "uniform",
        "kk": "",
        "zh": "n. 制服",
        "unit": 18,
        "example": "He was wearing a brown uniform.",
        "exampleZh": ""
    },
    {
        "id": 31824,
        "en": "unique",
        "kk": "",
        "zh": "adj. 獨一無二的",
        "unit": 18,
        "example": "Each person's signature is unique.",
        "exampleZh": ""
    },
    {
        "id": 31825,
        "en": "universe",
        "kk": "",
        "zh": "n. 宇宙",
        "unit": 18,
        "example": "The universe is slowly yielding up its secrets.",
        "exampleZh": ""
    },
    {
        "id": 31826,
        "en": "university",
        "kk": "/ˌjuːnɪˈvɜːrsəti/",
        "zh": "n. 大學",
        "unit": 18,
        "example": "My daughter is at university.",
        "exampleZh": ""
    },
    {
        "id": 31827,
        "en": "until",
        "kk": "/ənˈtɪl/",
        "zh": "prep. 直到...",
        "unit": 18,
        "example": "She lay sleepless until dawn.",
        "exampleZh": "她一直睡到天亮。"
    },
    {
        "id": 31828,
        "en": "up",
        "kk": "/ʌp/",
        "zh": "adv. 向上",
        "unit": 18,
        "example": "Interest rates went up.",
        "exampleZh": "利率上升。"
    },
    {
        "id": 31829,
        "en": "upper",
        "kk": "",
        "zh": "adj. 上面的",
        "unit": 18,
        "example": "Her novels poke fun at the upper class.",
        "exampleZh": "她的小說取笑上流社會。"
    },
    {
        "id": 31830,
        "en": "upstairs",
        "kk": "",
        "zh": "adv. 在樓上",
        "unit": 18,
        "example": "I carried her bags upstairs.",
        "exampleZh": "我把她的包包搬上樓。"
    },
    {
        "id": 31831,
        "en": "use",
        "kk": "/juːz/",
        "zh": "v. 使用",
        "unit": 18,
        "example": "That's a word I never use.",
        "exampleZh": "這是我從來不用的詞。"
    },
    {
        "id": 31832,
        "en": "user",
        "kk": "/ˈjuːzər/",
        "zh": "n. 使用者",
        "unit": 18,
        "example": "I am a Windows user.",
        "exampleZh": ""
    },
    {
        "id": 31833,
        "en": "useful",
        "kk": "/ˈjuːsfəl/",
        "zh": "adj. 有用的",
        "unit": 18,
        "example": "He offered some useful advice.",
        "exampleZh": "他提供了一些有用的建議。"
    },
    {
        "id": 31834,
        "en": "usual",
        "kk": "/ˈjuːʒuəl/",
        "zh": "adj. 通常的",
        "unit": 18,
        "example": "He came home later than usual.",
        "exampleZh": "他比平常回家晚了。"
    },
    {
        "id": 31835,
        "en": "usually",
        "kk": "/ˈjuːʒuəli/",
        "zh": "adv. 通常",
        "unit": 18,
        "example": "Windows are usually sealed off.",
        "exampleZh": ""
    },
    {
        "id": 31836,
        "en": "vacation",
        "kk": "",
        "zh": "n. 假期",
        "unit": 18,
        "example": "We're going to the beach for vacation.",
        "exampleZh": ""
    },
    {
        "id": 31837,
        "en": "valley",
        "kk": "",
        "zh": "n. 山谷",
        "unit": 18,
        "example": "Mist ascended from the valley.",
        "exampleZh": ""
    },
    {
        "id": 31838,
        "en": "valuable",
        "kk": "",
        "zh": "adj. 有價值的",
        "unit": 18,
        "example": "Luckily, nothing valuable was stolen.",
        "exampleZh": ""
    },
    {
        "id": 31839,
        "en": "value",
        "kk": "/ˈvæljuː/",
        "zh": "n. 價值",
        "unit": 18,
        "example": "Let y have the value 33.",
        "exampleZh": ""
    },
    {
        "id": 31840,
        "en": "vegetable",
        "kk": "",
        "zh": "n. 蔬菜",
        "unit": 18,
        "example": "The vegetable harvest is disastrously behind schedule.",
        "exampleZh": "蔬菜收成嚴重落後於計劃。"
    },
    {
        "id": 31841,
        "en": "vendor",
        "kk": "",
        "zh": "n. 攤販",
        "unit": 18,
        "example": "I think the vendor is still there.",
        "exampleZh": ""
    },
    {
        "id": 31842,
        "en": "very",
        "kk": "/ˈveri/",
        "zh": "adv. 非常",
        "unit": 18,
        "example": "He was very polite and very correct.",
        "exampleZh": ""
    },
    {
        "id": 31843,
        "en": "vest",
        "kk": "",
        "zh": "n. 背心",
        "unit": 18,
        "example": "His life was saved by a quarter-inch-thick bullet-proof vest.",
        "exampleZh": ""
    },
    {
        "id": 31844,
        "en": "victory",
        "kk": "",
        "zh": "n. 勝利",
        "unit": 18,
        "example": "The team hung on for victory.",
        "exampleZh": ""
    },
    {
        "id": 31845,
        "en": "video",
        "kk": "/ˈvɪdioʊ/",
        "zh": "n. 錄影帶",
        "unit": 18,
        "example": "Do we have a blank video ?",
        "exampleZh": ""
    },
    {
        "id": 31846,
        "en": "village",
        "kk": "/ˈvɪlɪdʒ/",
        "zh": "n. 村莊",
        "unit": 18,
        "example": "The entire village was destroyed.",
        "exampleZh": ""
    },
    {
        "id": 31847,
        "en": "vinegar",
        "kk": "",
        "zh": "n. 醋",
        "unit": 18,
        "example": "Wine vinegar tenderizes meat.",
        "exampleZh": ""
    },
    {
        "id": 31848,
        "en": "violin",
        "kk": "",
        "zh": "n. 小提琴",
        "unit": 18,
        "example": "Lizzie used to play the violin.",
        "exampleZh": ""
    },
    {
        "id": 31849,
        "en": "visit",
        "kk": "/ˈvɪzɪt/",
        "zh": "v. 探訪",
        "unit": 18,
        "example": "She will try and visit tomorrow.",
        "exampleZh": "她明天會嘗試去拜訪。"
    },
    {
        "id": 31850,
        "en": "visitor",
        "kk": "",
        "zh": "n. 訪客",
        "unit": 18,
        "example": "I wasn't expecting a visitor.",
        "exampleZh": ""
    },
    {
        "id": 31851,
        "en": "vocabulary",
        "kk": "",
        "zh": "n. 字彙",
        "unit": 18,
        "example": "Reading will enlarge your vocabulary.",
        "exampleZh": ""
    },
    {
        "id": 31852,
        "en": "voice",
        "kk": "/vɔɪs/",
        "zh": "n. 聲音",
        "unit": 18,
        "example": "Her voice was suddenly breathy.",
        "exampleZh": "她的聲音突然帶著呼吸聲。"
    },
    {
        "id": 31853,
        "en": "volleyball",
        "kk": "",
        "zh": "n. 排球",
        "unit": 18,
        "example": "They had a volleyball court in the middle of the courtyard.",
        "exampleZh": ""
    },
    {
        "id": 31854,
        "en": "vote",
        "kk": "/voʊt/",
        "zh": "v. 投票",
        "unit": 18,
        "example": "All affiliated members can vote.",
        "exampleZh": ""
    },
    {
        "id": 31855,
        "en": "waist",
        "kk": "",
        "zh": "n. 腰",
        "unit": 18,
        "example": "The grass had grown waist-high.",
        "exampleZh": ""
    },
    {
        "id": 31856,
        "en": "wait",
        "kk": "/weɪt/",
        "zh": "v. 等待",
        "unit": 18,
        "example": "I'll wait until they arrive.",
        "exampleZh": "我會等到他們到來。"
    },
    {
        "id": 31857,
        "en": "waiter",
        "kk": "",
        "zh": "n. 服務生",
        "unit": 18,
        "example": "He beckoned to the waiter.",
        "exampleZh": ""
    },
    {
        "id": 31858,
        "en": "waitress",
        "kk": "",
        "zh": "n. 女服務生",
        "unit": 18,
        "example": "She took a job as a waitress.",
        "exampleZh": ""
    },
    {
        "id": 31859,
        "en": "wake",
        "kk": "/weɪk/",
        "zh": "v. 醒",
        "unit": 18,
        "example": "She went upstairs to wake Milton.",
        "exampleZh": "她上樓去叫醒米爾頓。"
    },
    {
        "id": 31860,
        "en": "walk",
        "kk": "/wɔːk/",
        "zh": "v. 走",
        "unit": 18,
        "example": "They walk their dogs every day.",
        "exampleZh": "他們每天都會遛狗。"
    },
    {
        "id": 31861,
        "en": "wall",
        "kk": "/wɔːl/",
        "zh": "n. 牆壁",
        "unit": 18,
        "example": "She leaned against the wall.",
        "exampleZh": "她靠在牆上。"
    },
    {
        "id": 31862,
        "en": "wallet",
        "kk": "",
        "zh": "n. 皮夾",
        "unit": 18,
        "example": "This wallet feels like leather.",
        "exampleZh": ""
    },
    {
        "id": 31863,
        "en": "want",
        "kk": "/wɑːnt/",
        "zh": "v. 想要",
        "unit": 18,
        "example": "Do you want anything else?",
        "exampleZh": "你還想要什麼嗎？"
    },
    {
        "id": 31864,
        "en": "war",
        "kk": "/wɔːr/",
        "zh": "n. 戰爭",
        "unit": 18,
        "example": "Diplomacy is better than war.",
        "exampleZh": "外交比戰​​爭好。"
    },
    {
        "id": 31865,
        "en": "warm",
        "kk": "/wɔːrm/",
        "zh": "adj. 暖和的",
        "unit": 18,
        "example": "This sleeping bag is very warm.",
        "exampleZh": "這個睡袋很溫暖。"
    },
    {
        "id": 31866,
        "en": "wash",
        "kk": "",
        "zh": "v. 洗滌",
        "unit": 18,
        "example": "I must wash the car tomorrow.",
        "exampleZh": "我明天必須洗車。"
    },
    {
        "id": 31867,
        "en": "waste",
        "kk": "",
        "zh": "v. 浪費",
        "unit": 18,
        "example": "The waste was dumped in the sea.",
        "exampleZh": "廢物被傾倒在海裡。"
    },
    {
        "id": 31868,
        "en": "watch",
        "kk": "/wɑːtʃ/",
        "zh": "n. 手錶",
        "unit": 18,
        "example": "She glanced at her watch.",
        "exampleZh": "她看了一眼手錶。"
    },
    {
        "id": 31869,
        "en": "water",
        "kk": "/ˈwɔːtər/",
        "zh": "n. 水",
        "unit": 18,
        "example": "Glucose is soluble in water.",
        "exampleZh": "葡萄糖可溶於水。"
    },
    {
        "id": 31870,
        "en": "waterfall",
        "kk": "",
        "zh": "n. 瀑布",
        "unit": 18,
        "example": "As you descend, suddenly you see at last the hidden waterfall.",
        "exampleZh": ""
    },
    {
        "id": 31871,
        "en": "watermelon",
        "kk": "",
        "zh": "n. 西瓜",
        "unit": 18,
        "example": "Watermelon contains vitamins and also potassium.",
        "exampleZh": ""
    },
    {
        "id": 31872,
        "en": "wave",
        "kk": "/weɪv/",
        "zh": "n. 波浪",
        "unit": 18,
        "example": "He dismissed her with an airy wave.",
        "exampleZh": ""
    },
    {
        "id": 31873,
        "en": "way",
        "kk": "/weɪ/",
        "zh": "n. 方式",
        "unit": 18,
        "example": "The doctor's on his way.",
        "exampleZh": "醫生正在趕來的路上。"
    },
    {
        "id": 31874,
        "en": "weak",
        "kk": "/wiːk/",
        "zh": "adj. 虛弱的",
        "unit": 18,
        "example": "Geography was my weak subject.",
        "exampleZh": "地理是我的弱科。"
    },
    {
        "id": 31875,
        "en": "weapon",
        "kk": "",
        "zh": "n. 武器",
        "unit": 18,
        "example": "Discipline was the new coach's secret weapon.",
        "exampleZh": ""
    },
    {
        "id": 31876,
        "en": "wear",
        "kk": "/wer/",
        "zh": "v. 穿戴著",
        "unit": 18,
        "example": "She doesn't often wear heels.",
        "exampleZh": "她不常穿高跟鞋。"
    },
    {
        "id": 31877,
        "en": "weather",
        "kk": "/ˈweðər/",
        "zh": "n. 天氣",
        "unit": 18,
        "example": "Weather conditions were fair.",
        "exampleZh": "天氣狀況良好。"
    },
    {
        "id": 31878,
        "en": "wedding",
        "kk": "",
        "zh": "n. 結婚儀式",
        "unit": 18,
        "example": "The wedding day finally arrived.",
        "exampleZh": "結婚的日子終於到了。"
    },
    {
        "id": 31879,
        "en": "Wednesday",
        "kk": "",
        "zh": "n. 星期三",
        "unit": 18,
        "example": "Let's move the meeting to Wednesday.",
        "exampleZh": "我們把會議改到星期三吧。"
    },
    {
        "id": 31880,
        "en": "week",
        "kk": "/wiːk/",
        "zh": "n. 週",
        "unit": 18,
        "example": "We commence building next week.",
        "exampleZh": "我們下週開始建造。"
    },
    {
        "id": 31881,
        "en": "weekday",
        "kk": "",
        "zh": "n. 平日",
        "unit": 18,
        "example": "There are several free hours every weekday.",
        "exampleZh": ""
    },
    {
        "id": 31882,
        "en": "weekend",
        "kk": "",
        "zh": "n. 週末",
        "unit": 18,
        "example": "Let's go fishing this weekend.",
        "exampleZh": "這個週末我們去釣魚吧。"
    },
    {
        "id": 31883,
        "en": "weight",
        "kk": "/weɪt/",
        "zh": "n. 重量",
        "unit": 18,
        "example": "He's working at losing weight.",
        "exampleZh": "他正在努力減肥。"
    },
    {
        "id": 31884,
        "en": "welcome",
        "kk": "/ˈwelkəm/",
        "zh": "v. 歡迎",
        "unit": 18,
        "example": "I warmly welcome this decision.",
        "exampleZh": "我對這項決定表示熱烈歡迎。"
    },
    {
        "id": 31885,
        "en": "well",
        "kk": "/wel/",
        "zh": "adv. 很好地",
        "unit": 18,
        "example": "Well, well, well. How quickly things change.",
        "exampleZh": "好吧，好吧，好吧。事情變化得有多快。"
    },
    {
        "id": 31886,
        "en": "west",
        "kk": "/west/",
        "zh": "n. 西方",
        "unit": 18,
        "example": "The wind veered to the west.",
        "exampleZh": "風轉向西了。"
    },
    {
        "id": 31887,
        "en": "wet",
        "kk": "",
        "zh": "adj. 溼的",
        "unit": 18,
        "example": "Wet weather always depresses me.",
        "exampleZh": "潮濕的天氣總是讓我感到沮喪。"
    },
    {
        "id": 31888,
        "en": "whale",
        "kk": "",
        "zh": "n. 鯨魚",
        "unit": 18,
        "example": "The whale dived as the harpoon struck it.",
        "exampleZh": ""
    },
    {
        "id": 31889,
        "en": "what",
        "kk": "/wʌt/",
        "zh": "pron. 什麼",
        "unit": 18,
        "example": "'What?' she asked snappily.",
        "exampleZh": "'什麼？ '她沒好氣地問。"
    },
    {
        "id": 31890,
        "en": "wheel",
        "kk": "",
        "zh": "n. 車輪",
        "unit": 18,
        "example": "The wheel is pulling to the left.",
        "exampleZh": ""
    },
    {
        "id": 31891,
        "en": "when",
        "kk": "/wen/",
        "zh": "pron. 何時",
        "unit": 18,
        "example": "When were you there last?",
        "exampleZh": "你上次在那裡是什麼時候？"
    },
    {
        "id": 31892,
        "en": "where",
        "kk": "/wer/",
        "zh": "pron. 哪裡",
        "unit": 18,
        "example": "Where are you living now?",
        "exampleZh": "你現在住在哪裡？"
    },
    {
        "id": 31893,
        "en": "whether",
        "kk": "/ˈweðər/",
        "zh": "conj. 是否",
        "unit": 18,
        "example": "Check whether a fuse has blown.",
        "exampleZh": "檢查保險絲是否熔斷。"
    },
    {
        "id": 31894,
        "en": "which",
        "kk": "/wɪtʃ/",
        "zh": "pron. 哪個",
        "unit": 18,
        "example": "Which one's your favourite?",
        "exampleZh": "你最喜歡哪一個？"
    },
    {
        "id": 31895,
        "en": "while",
        "kk": "/waɪl/",
        "zh": "conj. 當...時候",
        "unit": 18,
        "example": "She fell while toddling around.",
        "exampleZh": "她在蹣跚學步時摔倒了。"
    },
    {
        "id": 31896,
        "en": "white",
        "kk": "/waɪt/",
        "zh": "adj. 白色的",
        "unit": 18,
        "example": "His face was ghastly white.",
        "exampleZh": "他的臉色慘白。"
    },
    {
        "id": 31897,
        "en": "who",
        "kk": "/huː/",
        "zh": "pron. 誰",
        "unit": 18,
        "example": "Who did the timekeeping?",
        "exampleZh": ""
    },
    {
        "id": 31898,
        "en": "whole",
        "kk": "/hoʊl/",
        "zh": "adj. 全體的",
        "unit": 18,
        "example": "The whole idea was preposterous.",
        "exampleZh": "整個想法是荒謬的。"
    },
    {
        "id": 31899,
        "en": "whose",
        "kk": "",
        "zh": "pron. 誰的",
        "unit": 18,
        "example": "Whose is that farm over yonder?",
        "exampleZh": ""
    },
    {
        "id": 31900,
        "en": "why",
        "kk": "/waɪ/",
        "zh": "adv. 為何",
        "unit": 18,
        "example": "'But why?' he interpolated.",
        "exampleZh": "'但為什麼？ '他插嘴道。"
    },
    {
        "id": 31901,
        "en": "wide",
        "kk": "/waɪd/",
        "zh": "adj. 廣大的",
        "unit": 18,
        "example": "It's about 2 metres wide.",
        "exampleZh": "寬約2米。"
    },
    {
        "id": 31902,
        "en": "wife",
        "kk": "/waɪf/",
        "zh": "n. 妻子",
        "unit": 18,
        "example": "His wife is very religious.",
        "exampleZh": "他的妻子非常虔誠。"
    },
    {
        "id": 31903,
        "en": "wild",
        "kk": "",
        "zh": "adj. 野生的",
        "unit": 18,
        "example": "They went camping in the wild.",
        "exampleZh": ""
    },
    {
        "id": 31904,
        "en": "will",
        "kk": "",
        "zh": "aux. 將要",
        "unit": 18,
        "example": "You will be remunerated and so will your staff.",
        "exampleZh": "您將獲得報酬，您的員工也將獲得報酬。"
    },
    {
        "id": 31905,
        "en": "win",
        "kk": "/wɪn/",
        "zh": "v. 獲勝",
        "unit": 18,
        "example": "Everyone has a chance to win.",
        "exampleZh": "每個人都有機會獲勝。"
    },
    {
        "id": 31906,
        "en": "wind",
        "kk": "/wɪnd/",
        "zh": "n. 風",
        "unit": 18,
        "example": "The wind will freshen tonight.",
        "exampleZh": "今晚風將變得清新。"
    },
    {
        "id": 31907,
        "en": "window",
        "kk": "/ˈwɪndoʊ/",
        "zh": "n. 窗戶",
        "unit": 18,
        "example": "I climbed through the window.",
        "exampleZh": "我爬進窗戶。"
    },
    {
        "id": 31908,
        "en": "windy",
        "kk": "",
        "zh": "adj. 風大的",
        "unit": 18,
        "example": "It was windy and Jake felt cold.",
        "exampleZh": "風很大，傑克感到很冷。"
    },
    {
        "id": 31909,
        "en": "wine",
        "kk": "",
        "zh": "n. 酒",
        "unit": 18,
        "example": "The wine had been doctored.",
        "exampleZh": "這酒已經被竄改了。"
    },
    {
        "id": 31910,
        "en": "wing",
        "kk": "",
        "zh": "n. 翅膀",
        "unit": 18,
        "example": "Who's playing on the wing?",
        "exampleZh": ""
    },
    {
        "id": 31911,
        "en": "winner",
        "kk": "",
        "zh": "n. 優勝者",
        "unit": 18,
        "example": "The winner scored 10 pts.",
        "exampleZh": ""
    },
    {
        "id": 31912,
        "en": "winter",
        "kk": "/ˈwɪntər/",
        "zh": "n. 冬天",
        "unit": 18,
        "example": "Swallows migrate south in winter.",
        "exampleZh": "冬季，燕子南遷。"
    },
    {
        "id": 31913,
        "en": "wire",
        "kk": "",
        "zh": "n. 電線",
        "unit": 18,
        "example": "The wire led to a speaker.",
        "exampleZh": ""
    },
    {
        "id": 31914,
        "en": "wise",
        "kk": "",
        "zh": "adj. 明智的",
        "unit": 18,
        "example": "It's never wise to withhold evidence.",
        "exampleZh": "隱瞞證據絕非明智之舉。"
    },
    {
        "id": 31915,
        "en": "wish",
        "kk": "/wɪʃ/",
        "zh": "v. 希望",
        "unit": 18,
        "example": "The prince's wish came true.",
        "exampleZh": "王子的願望實現了。"
    },
    {
        "id": 31916,
        "en": "with",
        "kk": "/wɪð/",
        "zh": "prep. 有;用",
        "unit": 18,
        "example": "He's more comfortable with computers than with people.",
        "exampleZh": "與人相處相比，他更喜歡與電腦相處。"
    },
    {
        "id": 31917,
        "en": "without",
        "kk": "/wɪˈðaʊt/",
        "zh": "prep. 沒有",
        "unit": 18,
        "example": "She's better off without him.",
        "exampleZh": "沒有他，她會過得更好。"
    },
    {
        "id": 31918,
        "en": "wolf",
        "kk": "",
        "zh": "n. 狼",
        "unit": 18,
        "example": "The wolf clawed at the tree and howled the whole night.",
        "exampleZh": ""
    },
    {
        "id": 31919,
        "en": "woman",
        "kk": "/ˈwʊmən/",
        "zh": "n. 女人",
        "unit": 18,
        "example": "She's a very attractive woman.",
        "exampleZh": "她是一個非常有魅力的女人。"
    },
    {
        "id": 31920,
        "en": "wonder",
        "kk": "/ˈwʌndər/",
        "zh": "v. 驚訝",
        "unit": 18,
        "example": "I wonder if you can help me.",
        "exampleZh": ""
    },
    {
        "id": 31921,
        "en": "wonderful",
        "kk": "",
        "zh": "adj. 極好的",
        "unit": 18,
        "example": "They've got a wonderful house.",
        "exampleZh": "他們有一棟很棒的房子。"
    },
    {
        "id": 31922,
        "en": "wood",
        "kk": "/wʊd/",
        "zh": "n. 木頭",
        "unit": 18,
        "example": "The impact splintered the wood.",
        "exampleZh": "撞擊使木頭碎裂。"
    },
    {
        "id": 31923,
        "en": "wool",
        "kk": "",
        "zh": "n. 羊毛",
        "unit": 18,
        "example": "This scarf is 100% wool.",
        "exampleZh": ""
    },
    {
        "id": 31924,
        "en": "word",
        "kk": "/wɜːrd/",
        "zh": "n. 字",
        "unit": 18,
        "example": "The appropriate word eluded him.",
        "exampleZh": "他想不出合適的字。"
    },
    {
        "id": 31925,
        "en": "work",
        "kk": "/wɜːrk/",
        "zh": "v. 工作",
        "unit": 18,
        "example": "He's still unfit for work.",
        "exampleZh": "他仍然不適合工作。"
    },
    {
        "id": 31926,
        "en": "worker",
        "kk": "/ˈwɜːrkər/",
        "zh": "n. 工人",
        "unit": 18,
        "example": "She was a zealous worker for charity.",
        "exampleZh": "她是一位熱心慈善事業的工作者。"
    },
    {
        "id": 31927,
        "en": "world",
        "kk": "/wɜːrld/",
        "zh": "n. 世界",
        "unit": 18,
        "example": "She has three world titles.",
        "exampleZh": "她擁有三個世界冠軍。"
    },
    {
        "id": 31928,
        "en": "worm",
        "kk": "",
        "zh": "n. 蟲",
        "unit": 18,
        "example": "The early bird catches the worm.",
        "exampleZh": "早起的鳥兒有蟲吃。"
    },
    {
        "id": 31929,
        "en": "worry",
        "kk": "/ˈwɜːri/",
        "zh": "v. 擔心",
        "unit": 18,
        "example": "I worry about her constantly.",
        "exampleZh": "我時常擔心她。"
    },
    {
        "id": 31930,
        "en": "worth",
        "kk": "",
        "zh": "n. 價值",
        "unit": 18,
        "example": "Was it worth the effort?",
        "exampleZh": ""
    },
    {
        "id": 31931,
        "en": "wound",
        "kk": "",
        "zh": "n. 受傷",
        "unit": 18,
        "example": "The nurse cleaned the wound.",
        "exampleZh": ""
    },
    {
        "id": 31932,
        "en": "wrist",
        "kk": "",
        "zh": "n. 手腕",
        "unit": 18,
        "example": "Kay grasped him by the wrist.",
        "exampleZh": ""
    },
    {
        "id": 31933,
        "en": "write",
        "kk": "/raɪt/",
        "zh": "v. 寫",
        "unit": 18,
        "example": "Write me while you're away.",
        "exampleZh": "你不在的時候寫信給我。"
    },
    {
        "id": 31934,
        "en": "writer",
        "kk": "",
        "zh": "n. 作者",
        "unit": 18,
        "example": "'You? A writer?' she sneered.",
        "exampleZh": "'你？作家？她冷笑道。"
    },
    {
        "id": 31935,
        "en": "wrong",
        "kk": "/rɔːŋ/",
        "zh": "adj. 不對的",
        "unit": 18,
        "example": "'That is wrong,' he asserted.",
        "exampleZh": "「這是錯誤的，」他斷言。"
    },
    {
        "id": 31936,
        "en": "yard",
        "kk": "/jɑːrd/",
        "zh": "n. 院子",
        "unit": 18,
        "example": "Which door leads to the yard?",
        "exampleZh": ""
    },
    {
        "id": 31937,
        "en": "year",
        "kk": "/jɪr/",
        "zh": "n. 年",
        "unit": 18,
        "example": "Spending has increased year on year.",
        "exampleZh": "支出逐年增加。"
    },
    {
        "id": 31938,
        "en": "yellow",
        "kk": "/ˈjeloʊ/",
        "zh": "adj. 黃色的",
        "unit": 18,
        "example": "The walls were painted yellow.",
        "exampleZh": "牆壁被漆成黃色。"
    },
    {
        "id": 31939,
        "en": "yes",
        "kk": "/jes/",
        "zh": "adv. 是的",
        "unit": 18,
        "example": "Yes, there's plenty of room.",
        "exampleZh": "是的，有足夠的空間。"
    },
    {
        "id": 31940,
        "en": "yesterday",
        "kk": "/ˈjestərdeɪ/",
        "zh": "n. 昨天",
        "unit": 18,
        "example": "He signed for United yesterday.",
        "exampleZh": "他昨天與曼聯簽約。"
    },
    {
        "id": 31941,
        "en": "yet",
        "kk": "/jet/",
        "zh": "adv. 尚未",
        "unit": 18,
        "example": "They haven't finished yet.",
        "exampleZh": "他們還沒有完成。"
    },
    {
        "id": 31942,
        "en": "young",
        "kk": "/jʌŋ/",
        "zh": "adj. 年輕的",
        "unit": 18,
        "example": "He's a brilliant young scientist.",
        "exampleZh": "他是一位才華洋溢的年輕科學家。"
    },
    {
        "id": 31943,
        "en": "youth",
        "kk": "",
        "zh": "n. 青春",
        "unit": 18,
        "example": "The poem contrasts youth and age.",
        "exampleZh": ""
    },
    {
        "id": 31944,
        "en": "yummy",
        "kk": "",
        "zh": "adj. 好吃的",
        "unit": 18,
        "example": "I'll bet they have yummy ice cream.",
        "exampleZh": "我敢打賭他們一定有美味的冰淇淋。"
    },
    {
        "id": 31945,
        "en": "zero",
        "kk": "",
        "zh": "n. 零",
        "unit": 18,
        "example": "You've left off a zero.",
        "exampleZh": "你漏掉了一個零。"
    },
    {
        "id": 31946,
        "en": "zoo",
        "kk": "",
        "zh": "n. 動物園",
        "unit": 18,
        "example": "He took his son Christopher to the zoo.",
        "exampleZh": "他帶著兒子克里斯托弗去了動物園。"
    }
];
