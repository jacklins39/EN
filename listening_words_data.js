const listeningWordsDB = [
  {
    "id": 31966,
    "en": "appetizer",
    "kk": "[ˋæpə͵taɪzɚ]",
    "uk": "/ˈæpɪtaɪzə(r)/",
    "zh": "n. 前菜、開胃菜、開胃飲料",
    "unit": 19,
    "example": "We ordered a platter of fresh spring rolls as an appetizer before the main course.",
    "exampleZh": "我們在主餐前點了一盤新鮮春捲作為開胃前菜。"
  },
  {
    "id": 31970,
    "en": "boarding",
    "kk": "[ˋbordɪŋ]",
    "uk": "/ˈbɔːdɪŋ/",
    "zh": "n. 登機、登船、檢查、木板",
    "unit": 19,
    "example": "Flight 842 to New York is now ready for boarding at gate 15.",
    "exampleZh": "前往紐約的第 842 號班機現在開始在 15 號登機門登機。"
  },
  {
    "id": 31972,
    "en": "campsite",
    "kk": "[ˋkæmp͵saɪt]",
    "uk": "/ˈkæmpsaɪt/",
    "zh": "n. 露營營地、露營地[為遊客所設]",
    "unit": 19,
    "example": "We pitched our tents at a designated campsite overlooking the scenic valley.",
    "exampleZh": "我們在俯瞰風景秀麗山谷的指定露營地搭建了帳篷。"
  },
  {
    "id": 31973,
    "en": "cardio",
    "kk": "[ˋkɑrdɪ͵o]",
    "uk": "/ˈkärdēō/",
    "zh": "n. 有氧運動、cardiovascular exercise.",
    "unit": 19,
    "example": "Her daily fitness routine includes thirty minutes of intensive cardio exercise.",
    "exampleZh": "她的日常健身計畫包括三十分鐘的高強度有氧運動。"
  },
  {
    "id": 31979,
    "en": "croissant",
    "kk": "[krwɑˋsɑ̃]",
    "uk": "/ˈkrwɑːsɒŋ/",
    "zh": "n. 可頌麵包、羊角麵包",
    "unit": 19,
    "example": "Hi, could I please get an iced oat latte and an almond croissant?",
    "exampleZh": "嗨，請給我一杯冰燕麥拿鐵和一個杏仁可頌好嗎？"
  },
  {
    "id": 31988,
    "en": "fries",
    "kk": "[fraɪz]",
    "uk": "/fraɪz/",
    "zh": "n. 薯條、炸薯條",
    "unit": 19,
    "example": "Hello! I would like to order a cheeseburger and a large fries.",
    "exampleZh": "你好！我想點一個起司漢堡和大份薯條。"
  },
  {
    "id": 31989,
    "en": "groceries",
    "kk": "[ˋgrosərɪz]",
    "uk": "/ˈgrəʊsərɪz/",
    "zh": "n. 食品雜貨",
    "unit": 19,
    "example": "She stopped at the local supermarket on her way home to pick up fresh groceries.",
    "exampleZh": "她在回家途中順道停在當地超市購買新鮮的食品雜貨。"
  },
  {
    "id": 31994,
    "en": "latte",
    "kk": "[ˋlɑte]",
    "uk": "/ˈlɑːteɪ/",
    "zh": "n. 拿鐵、拿鐵咖啡",
    "unit": 19,
    "example": "Hi, could I please get an iced oat latte and an almond croissant?",
    "exampleZh": "嗨，請給我一杯冰燕麥拿鐵和一個杏仁可頌好嗎？"
  },
  {
    "id": 32005,
    "en": "seated",
    "kk": "[ˋsitɪd]",
    "uk": "/ˈsiːtɪd/",
    "zh": "adj. 就座的",
    "unit": 19,
    "example": "All other passengers, please remain seated until your zone is called.",
    "exampleZh": "其他所有旅客請在座位上等候，直到您的登機分區被叫到為止。"
  },
  {
    "id": 32006,
    "en": "sleeping",
    "kk": "[ˋslipɪŋ]",
    "uk": "/ˈsliːpɪŋ/",
    "zh": "adj. 睡眠的、睡著的、供住宿的",
    "unit": 19,
    "example": "We need to ensure that everyone has packed thermal sleeping bags, waterproof tents, and portable water filtration systems.",
    "exampleZh": "我們必須確保每個人都帶上了保暖睡袋、防水帳篷和便攜式濾水系統。"
  },
  {
    "id": 32010,
    "en": "strawberries",
    "kk": "[ˋstrɔ͵bɛrɪz]",
    "uk": "/ˈstrɔːbəri/",
    "zh": "n. 草莓",
    "unit": 19,
    "example": "Also, do you have any fresh strawberries?",
    "exampleZh": "另外，請問你們有新鮮草莓嗎？"
  },
  {
    "id": 32018,
    "en": "bunny",
    "kk": "[ˈbʌni]",
    "uk": "/ˈbʌni/",
    "zh": "n. 小兔子",
    "unit": 19,
    "example": "The little girl holds a cute fluffy bunny.",
    "exampleZh": "小女孩抱著一隻可愛毛茸茸的小兔子。"
  },
  {
    "id": 32019,
    "en": "storybook",
    "kk": "[ˈstɔːribʊk]",
    "uk": "/ˈstɔːribʊk/",
    "zh": "n. 故事書",
    "unit": 19,
    "example": "Mom reads a bedtime storybook every single night.",
    "exampleZh": "媽媽每天晚上都會讀一本睡前故事書。"
  },
  {
    "id": 32020,
    "en": "sweetie",
    "kk": "[ˈswiːti]",
    "uk": "/ˈswiːti/",
    "zh": "n. 親愛的，寶貝；討人喜愛的人",
    "unit": 19,
    "example": "Time to wake up and brush your teeth, sweetie.",
    "exampleZh": "該起床刷牙囉，寶貝。"
  },
  {
    "id": 32021,
    "en": "goodnight",
    "kk": "[ˌɡʊdˈnaɪt]",
    "uk": "/ˌɡʊdˈnaɪt/",
    "zh": "int. 晚安；祝好夢",
    "unit": 19,
    "example": "She gives her daughter a warm goodnight kiss.",
    "exampleZh": "她給了女兒一個溫暖的晚安吻。"
  },
  {
    "id": 32022,
    "en": "sunhat",
    "kk": "[ˋsʌn͵hæt]",
    "uk": "/ˈsʌnhæt/",
    "zh": "n. 遮陽帽，草帽",
    "unit": 19,
    "example": "Don't forget to wear your cute sunhat on a sunny day.",
    "exampleZh": "大晴天出門別忘了戴上妳可愛的遮陽帽。"
  },
  {
    "id": 32023,
    "en": "breeze",
    "kk": "[briz]",
    "uk": "/briːz/",
    "zh": "n. 微風，和風",
    "unit": 19,
    "example": "A gentle breeze was blowing across the green park.",
    "exampleZh": "一陣溫和的微風吹拂過綠意盎然的公園。"
  },
  {
    "id": 32024,
    "en": "kite",
    "kk": "[kaɪt]",
    "uk": "/kaɪt/",
    "zh": "n. 風箏",
    "unit": 19,
    "example": "The colorful kite flew high up into the blue sky.",
    "exampleZh": "那隻五彩繽紛的風箏高高飛上了藍天。"
  },
  {
    "id": 32025,
    "en": "sneaker",
    "kk": "[ˋsnikɚ]",
    "uk": "/ˈsniːkə(r)/",
    "zh": "n. 運動鞋，膠底運動鞋",
    "unit": 19,
    "example": "Put on your comfortable sneakers before we go running.",
    "exampleZh": "在我們去跑步前，先穿上妳舒適的運動鞋。"
  },
  {
    "id": 32026,
    "en": "pilot",
    "kk": "[ˋpaɪlət]",
    "uk": "/ˈpaɪlət/",
    "zh": "n. 飛行員，舵手",
    "unit": 19,
    "example": "You are the best little kite pilot in the park today.",
    "exampleZh": "妳今天是公園裡最棒的風箏小飛行員。"
  },
  {
    "id": 32036,
    "en": "toothbrush",
    "kk": "[ˋtuθ͵brʌʃ]",
    "uk": "/ˈtuːθbrʌʃ/",
    "zh": "n. 牙刷",
    "unit": 19,
    "example": "Remember to pack your toothbrush and toothpaste before the trip.",
    "exampleZh": "旅行前記得把牙刷和牙膏打包好。"
  },
  {
    "id": 32037,
    "en": "teddy bear",
    "kk": "[ˋtɛdɪ͵bɛr]",
    "uk": "/ˈtedi beə(r)/",
    "zh": "n. 泰迪熊，絨毛玩具熊",
    "unit": 19,
    "example": "The little girl hugs her favorite teddy bear to fall asleep.",
    "exampleZh": "小女孩抱著她最喜歡的泰迪熊入睡。"
  }
];
