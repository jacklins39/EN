/**
 * 聽力專屬核心單字庫 (隨聽力情境短文自動產出與維護)
 * 全庫 12 筆已於 2026/11/07 完成 100% 逐筆比對審查與品質校正
 */
const listeningWordsDB = [
  {
    "id": 32006,
    "en": "sleeping",
    "kk": "[ˋslipɪŋ]",
    "uk": "/ˈsliːpɪŋ/",
    "zh": "adj. 睡眠的、睡著的；n. 睡眠",
    "unit": 19,
    "example": "[adj.] We need to ensure that everyone has packed thermal sleeping bags, waterproof tents, and portable water filtration systems.",
    "exampleZh": "我們必須確保每個人都帶上了保暖睡袋、防水帳篷與便攜濾水系統。"
  },
  {
    "id": 32010,
    "en": "strawberries",
    "kk": "[ˋstrɔ͵bɛrɪz]",
    "uk": "/ˈstrɔːbəri/",
    "zh": "n. 草莓",
    "unit": 19,
    "example": "[n.] Also, do you have any fresh strawberries?",
    "exampleZh": "另外，請問你們有新鮮草莓嗎？"
  },
  {
    "id": 32018,
    "en": "bunny",
    "kk": "[ˈbʌni]",
    "uk": "/ˈbʌni/",
    "zh": "n. 小兔子",
    "unit": 19,
    "example": "[n.] The little girl holds a cute fluffy bunny.",
    "exampleZh": "小女孩抱著一隻可愛毛茸茸的小兔子。"
  },
  {
    "id": 32019,
    "en": "storybook",
    "kk": "[ˈstɔːribʊk]",
    "uk": "/ˈstɔːribʊk/",
    "zh": "n. 故事書",
    "unit": 19,
    "example": "[n.] Mom reads a bedtime storybook every single night.",
    "exampleZh": "媽媽每天晚上都會讀一本睡前故事書。"
  },
  {
    "id": 32020,
    "en": "sweetie",
    "kk": "[ˈswiːti]",
    "uk": "/ˈswiːti/",
    "zh": "n. 親愛的，寶貝；討人喜愛的人",
    "unit": 19,
    "example": "[n.] Time to wake up and brush your teeth, sweetie.",
    "exampleZh": "該起床刷牙囉，寶貝。"
  },
  {
    "id": 32021,
    "en": "goodnight",
    "kk": "[ˌɡʊdˈnaɪt]",
    "uk": "/ˌɡʊdˈnaɪt/",
    "zh": "int. 晚安；祝好夢",
    "unit": 19,
    "example": "[int.] She gives her daughter a warm goodnight kiss.",
    "exampleZh": "她給了女兒一個溫暖的晚安吻。"
  },
  {
    "id": 32022,
    "en": "sunhat",
    "kk": "[ˋsʌn͵hæt]",
    "uk": "/ˈsʌnhæt/",
    "zh": "n. 遮陽帽，草帽",
    "unit": 19,
    "example": "[n.] Don't forget to wear your cute sunhat on a sunny day.",
    "exampleZh": "大晴天出門別忘了戴上妳可愛的遮陽帽。"
  },
  {
    "id": 32023,
    "en": "breeze",
    "kk": "[briz]",
    "uk": "/briːz/",
    "zh": "n. 微風、和風；輕而易舉的事；v. 輕盈自信地走、輕鬆過關",
    "unit": 19,
    "example": "[n.] A gentle breeze was blowing across the green park.",
    "exampleZh": "一陣溫和的微風吹拂過綠意盎然的公園。"
  },
  {
    "id": 32024,
    "en": "kite",
    "kk": "[kaɪt]",
    "uk": "/kaɪt/",
    "zh": "n. 風箏；鳶（猛禽）；v. 像風箏般飛翔、使迅速上升",
    "unit": 19,
    "example": "[n.] The colorful kite flew high up into the blue sky.",
    "exampleZh": "那隻五彩繽紛的風箏高高飛上了藍天。"
  },
  {
    "id": 32025,
    "en": "sneaker",
    "kk": "[ˋsnikɚ]",
    "uk": "/ˈsniːkə(r)/",
    "zh": "n. 運動鞋、球鞋、休閒鞋",
    "unit": 19,
    "example": "[n.] Put on your comfortable sneakers before we go running.",
    "exampleZh": "在我們去跑步前，先穿上妳舒適的運動鞋。"
  },
  {
    "id": 32036,
    "en": "toothbrush",
    "kk": "[ˋtuθ͵brʌʃ]",
    "uk": "/ˈtuːθbrʌʃ/",
    "zh": "n. 牙刷",
    "unit": 19,
    "example": "[n.] Remember to pack your toothbrush and toothpaste before the trip.",
    "exampleZh": "旅行前記得把牙刷和牙膏打包好。"
  },
  {
    "id": 32037,
    "en": "teddy bear",
    "kk": "[ˋtɛdɪ͵bɛr]",
    "uk": "/ˈtedi beə(r)/",
    "zh": "n. 泰迪熊，絨毛玩具熊",
    "unit": 19,
    "example": "[n.] The little girl hugs her favorite teddy bear to fall asleep.",
    "exampleZh": "小女孩抱著她最喜歡的泰迪熊入睡。"
  },
  {
    "en": "acorn",
    "kk": "[ˋekɔrn]",
    "uk": "/ˈeɪkɔːn/",
    "zh": "n. 橡實、橡樹果",
    "unit": 19,
    "example": "[n.] The little brown squirrel carried a shiny acorn up the oak tree.",
    "exampleZh": "那隻棕色的小松鼠抱著一顆閃亮的橡實爬上橡樹。",
    "id": 32038
  },
  {
    "en": "hedgehog",
    "kk": "[ˋhɛdʒ͵hɑɡ]",
    "uk": "/ˈhedʒhɒɡ/",
    "zh": "n. 刺蝟",
    "unit": 19,
    "example": "[n.] A sleepy hedgehog curled up under the warm leaves at night.",
    "exampleZh": "一隻愛睏的小刺蝟夜晚在溫暖的樹葉下捲成一團睡覺。",
    "id": 32039
  },
  {
    "id": 32040,
    "en": "hare",
    "kk": "[hɛr]",
    "uk": "/heə(r)/",
    "zh": "n. 野兔、山兔（跑得極快的長耳野兔）",
    "unit": 19,
    "example": "[n.] The quick brown hare dashed across the sunny meadow before taking a nap.",
    "exampleZh": "那隻敏捷的棕色野兔在小睡之前飛快地衝過陽光普照的草地。"
  }
];
