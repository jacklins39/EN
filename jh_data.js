const jhWordsDB = [
    {
        "id": 30001,
        "en": "able",
        "kk": "[ˋebəl]",
        "uk": "/ˈeɪb(ə)l/",
        "zh": "adj. 有能力的、能夠、聰明能幹的、精通（某事）的",
        "unit": 17,
        "example": "He is able to swim very fast.",
        "exampleZh": "他能夠游得非常快。"
    },
    {
        "id": 30002,
        "en": "about",
        "kk": "[əˋbaʊt]",
        "uk": "/əˈbaʊt/",
        "zh": "adv. 大約、幾乎、到處、各處；prep. 關於、對於、目的是、針對；adj. 現成的、能得到的、即將（做……）的、快要（發生……）的",
        "unit": 17,
        "example": "The book is about a brave dog.",
        "exampleZh": "這本書是關於一隻勇敢的狗。"
    },
    {
        "id": 30003,
        "en": "above",
        "kk": "[əˋbʌv]",
        "uk": "/əˈbʌv/",
        "zh": "prep. 在……以上、超過、在（或向）……上面、高於；adv. 高於、在（或向）上面、在（或向）較高處；adj. 前文述及的、上述的；n. 上文提及之事、前文所提之事",
        "unit": 17,
        "example": "The white plane flew above the clouds.",
        "exampleZh": "白色的飛機飛在雲層之上。"
    },
    {
        "id": 30004,
        "en": "abroad",
        "kk": "[əˋbrɔd]",
        "uk": "/əˈbrɔːd/",
        "zh": "adv. 在國外、到國外、在室外、到室外；n. 外國",
        "unit": 17,
        "example": "She worked abroad for a year.",
        "exampleZh": "她在國外工作了一年。"
    },
    {
        "id": 30005,
        "en": "absent",
        "kk": "[ˋæbsənt]",
        "uk": "/ˈæbsənt/",
        "zh": "adj. 缺勤的、缺席的、不存在的、缺乏的；prep. 缺乏、沒有；v. 缺席、離開",
        "unit": 17,
        "example": "Tom was absent from class this morning.",
        "exampleZh": "湯姆今天早上上課缺席了。"
    },
    {
        "id": 30006,
        "en": "accept",
        "kk": "[ækˋsɛpt]",
        "uk": "/əkˈsept/",
        "zh": "vt. 接受、收受、同意、贊成",
        "unit": 17,
        "example": "I am glad to accept your kind help.",
        "exampleZh": "我很高興接受你好心的幫忙。"
    },
    {
        "id": 30007,
        "en": "accident",
        "kk": "[ˋæksədənt]",
        "uk": "/ˈæksɪdənt/",
        "zh": "n. 意外、交通事故、車禍、意外遭遇",
        "unit": 17,
        "example": "He had a small car accident.",
        "exampleZh": "他發生了一起小車禍。"
    },
    {
        "id": 30008,
        "en": "across",
        "kk": "[əˋkrɔs]",
        "uk": "/əˈkrɒs/",
        "zh": "prep. 橫越、穿過、在……對面；adv. 橫過、從一邊到另一邊、在對面",
        "unit": 17,
        "example": "We walked across the small wooden bridge.",
        "exampleZh": "我們走過了那座小木橋。"
    },
    {
        "id": 30009,
        "en": "act",
        "kk": "[ækt]",
        "uk": "/ækt/",
        "zh": "v. 行動、舉動、表現、假裝；n. 行為、行動、法案、裝模作樣",
        "unit": 17,
        "example": "You must act now to help him.",
        "exampleZh": "你現在必須採取行動來幫助他。"
    },
    {
        "id": 30010,
        "en": "action",
        "kk": "[ˋækʃən]",
        "uk": "/ˈækʃ(ə)n/",
        "zh": "n. 活動、行動、行為、戰鬥；vt. 處理；adj. 動作（片）的、動作片中的",
        "unit": 17,
        "example": "We need to take fast action now.",
        "exampleZh": "我們現在需要立即採取行動。"
    },
    {
        "id": 30011,
        "en": "active",
        "kk": "[ˋæktɪv]",
        "uk": "/ˈæktɪv/",
        "zh": "adj. 積極的、好動的、積極主動的、定期進行的；n. 主動語態",
        "unit": 17,
        "example": "My brother is very active in sports.",
        "exampleZh": "我弟弟在體育運動方面非常活躍。"
    },
    {
        "id": 30012,
        "en": "activity",
        "kk": "[ækˋtɪvəti]",
        "uk": "/ækˈtɪvəti/",
        "zh": "n. 活動、活躍狀況、熱鬧、熱力活性",
        "unit": 17,
        "example": "We did a fun art activity.",
        "exampleZh": "我們做了一項有趣的藝術活動。"
    },
    {
        "id": 30013,
        "en": "actor",
        "kk": "[ˋæktɚ]",
        "uk": "/ˈæktə(r)/",
        "zh": "n. 男演員、演員、像在演戲的人、參與者",
        "unit": 17,
        "example": "Grodin is a fine comic actor.",
        "exampleZh": "格羅丁是一位優秀的喜劇演員。"
    },
    {
        "id": 30014,
        "en": "actress",
        "kk": "[ˋæktrəs]",
        "uk": "/ˈæktrəs/",
        "zh": "n. 女演員",
        "unit": 17,
        "example": "My aunt is a very famous actress.",
        "exampleZh": "我姑姑是一位非常著名的女演員。"
    },
    {
        "id": 30015,
        "en": "actually",
        "kk": "[ˋæk͵tʃuəli]",
        "uk": "/ˈæktʃuəli/",
        "zh": "adv. 確實、實際上、事實上、其實",
        "unit": 17,
        "example": "I actually like this green shirt.",
        "exampleZh": "我其實很喜歡這件綠襯衫。"
    },
    {
        "id": 30016,
        "en": "add",
        "kk": "[æd]",
        "uk": "/æd/",
        "zh": "v. 增加、新增、摻入、相加；abbr. 注意力缺陷障礙、多動症",
        "unit": 17,
        "example": "Add up all the money I owe you.",
        "exampleZh": "把我欠你的錢全部加起來。"
    },
    {
        "id": 30017,
        "en": "address",
        "kk": "[ˋæ͵drɛs]",
        "uk": "/əˈdres/",
        "zh": "n. 地址、住址、網址、電子郵箱地址；vt. 向…致詞、處理、演說、演講",
        "unit": 17,
        "example": "Please write your home address down here.",
        "exampleZh": "請把你的住家地址寫在這裡。"
    },
    {
        "id": 30018,
        "en": "admire",
        "kk": "[ædˋmaɪr]",
        "uk": "/ədˈmaɪə(r)/",
        "zh": "vt. 欽佩、仰慕、欣賞、觀賞",
        "unit": 17,
        "example": "Many people admire his hard work.",
        "exampleZh": "許多人欽佩他的辛勤努力。"
    },
    {
        "id": 30019,
        "en": "adult",
        "kk": "[əˋdʌlt]",
        "uk": "/ˈædʌlt; əˈdʌlt/",
        "zh": "n. 成人、成年人或動物；adj. 成年的、發育成熟的、成人的、理智的；v. 像成年人一樣表現、變成熟",
        "unit": 17,
        "example": "Each ticket admits one adult.",
        "exampleZh": "每張門票可容納一名成人。"
    },
    {
        "id": 30020,
        "en": "advertisement",
        "kk": "[ædˋvɝtəzmənt]",
        "uk": "/ədˈvɜːtɪsmənt/",
        "zh": "n. 廣告、活廣告、廣告活動、廣告宣傳",
        "unit": 17,
        "example": "I saw an advertisement for shoes.",
        "exampleZh": "我看見了一則鞋子廣告。"
    },
    {
        "id": 30021,
        "en": "advice",
        "kk": "[ædˋvaɪs]",
        "uk": "/ədˈvaɪs/",
        "zh": "n. 勸告、忠告、建議、正式通知",
        "unit": 17,
        "example": "She gave me some good advice.",
        "exampleZh": "她給了我一些好建議。"
    },
    {
        "id": 30022,
        "en": "advise",
        "kk": "[ædˋvaɪz]",
        "uk": "/ədˈvaɪz/",
        "zh": "vt. 勸告、通知、告知、建議",
        "unit": 17,
        "example": "I advise you to eat well.",
        "exampleZh": "我建議你要吃得好。"
    },
    {
        "id": 30023,
        "en": "affect",
        "kk": "[əˋfɛkt]",
        "uk": "/əˈfekt/",
        "zh": "vt. 影響、侵襲、感染、深深打動；n. 情感、感情",
        "unit": 17,
        "example": "Bad food will affect your body.",
        "exampleZh": "不好的食物會影響你的身體。"
    },
    {
        "id": 30024,
        "en": "afraid",
        "kk": "[əˋfred]",
        "uk": "/əˈfreɪd/",
        "zh": "adj. 害怕的、擔心的、不願意的、勉強的",
        "unit": 17,
        "example": "I'm afraid you guessed wrong.",
        "exampleZh": "恐怕你猜錯了。"
    },
    {
        "id": 30025,
        "en": "after",
        "kk": "[ˋæftɚ]",
        "uk": "/ˈɑːftə(r)/",
        "zh": "prep. 在……之後、緊接著、一次接著一次、持續不斷地；conj. 在……以後；adv. 後來、以後；adj. 後來的、以後的、靠近船尾的",
        "unit": 17,
        "example": "We went to sleep after the dinner.",
        "exampleZh": "晚餐結束後我們就去睡覺了。"
    },
    {
        "id": 30026,
        "en": "afternoon",
        "kk": "[͵æftɚˋnun]",
        "uk": "/ˌɑːftəˈnuːn/",
        "zh": "n. 下午、午後；int. 下午好",
        "unit": 17,
        "example": "We will play soccer this afternoon together.",
        "exampleZh": "我們今天下午要一起踢足球。"
    },
    {
        "id": 30027,
        "en": "again",
        "kk": "[əˋɡɛn]",
        "uk": "/əˈgeɪn/",
        "zh": "adv. 再度、再一次、復原、請再說一遍",
        "unit": 17,
        "example": "Please say that to me once again.",
        "exampleZh": "請把那句話再對我說一次。"
    },
    {
        "id": 30028,
        "en": "against",
        "kk": "[əˋɡɛnst]",
        "uk": "/əˈɡenst/",
        "zh": "prep. 靠著、反對、違背……、禁止",
        "unit": 17,
        "example": "Rain drove against the window.",
        "exampleZh": "雨打在窗戶上。"
    },
    {
        "id": 30029,
        "en": "age",
        "kk": "[edʒ]",
        "uk": "/eɪdʒ/",
        "zh": "n. 年齡、年紀、壽命、年代；vt. 變老、老化、顯老、蒼老",
        "unit": 17,
        "example": "What is the age of this tree?",
        "exampleZh": "這棵樹的樹齡是幾年？"
    },
    {
        "id": 30030,
        "en": "ago",
        "kk": "[əˋɡo]",
        "uk": "/əˈɡəʊ/",
        "zh": "adv. ……之前、以前、從前；adj. 以前的",
        "unit": 17,
        "example": "She was hired three years ago.",
        "exampleZh": "她三年前被錄用。"
    },
    {
        "id": 30031,
        "en": "agree",
        "kk": "[əˋɡri]",
        "uk": "/əˈɡriː/",
        "zh": "v. 同意、贊成、答應、接受",
        "unit": 17,
        "example": "I do not agree with your idea.",
        "exampleZh": "我不同意你的想法。"
    },
    {
        "id": 30032,
        "en": "ahead",
        "kk": "[əˋhɛd]",
        "uk": "/əˈhed/",
        "zh": "adv. 向前、在前面、朝前面、領先；adj. 在前的、提前的",
        "unit": 17,
        "example": "The school is straight ahead of you.",
        "exampleZh": "學校就在你的正前方。"
    },
    {
        "id": 30033,
        "en": "aim",
        "kk": "[em]",
        "uk": "/eɪm/",
        "zh": "n. 目標、目的、瞄準、對準；vt. 瞄準、對準、旨在、致力於",
        "unit": 17,
        "example": "His main aim is to pass tests.",
        "exampleZh": "他的主要目標是通過考試。"
    },
    {
        "id": 30034,
        "en": "air",
        "kk": "[ɛr]",
        "uk": "/eə(r)/",
        "zh": "n. 空氣、大氣、空中、天空；vt. 使公開、宣揚、通風、晾乾",
        "unit": 17,
        "example": "Open the window for some fresh air.",
        "exampleZh": "打開窗戶讓新鮮空氣進來。"
    },
    {
        "id": 30035,
        "en": "airplane",
        "kk": "[ˋɛrp͵len]",
        "uk": "/ˈeəpleɪn/",
        "zh": "n. 飛機",
        "unit": 17,
        "example": "The big airplane landed at the airport.",
        "exampleZh": "這架大飛機降落在機場。"
    },
    {
        "id": 30036,
        "en": "airport",
        "kk": "[ˋɛr͵pɔrt]",
        "uk": "/ˈeəpɔːt/",
        "zh": "n. 機場、航空站、空旅通俗讀物",
        "unit": 17,
        "example": "My father went to the airport early.",
        "exampleZh": "我爸爸很早就去了機場。"
    },
    {
        "id": 30037,
        "en": "alarm",
        "kk": "[əˋlɑrm]",
        "uk": "/əˈlɑːm/",
        "zh": "n. 警報、警報器、鬧鐘、驚恐；vt. 使驚慌、使不安、使恐慌、給（門等）安裝警報器",
        "unit": 17,
        "example": "An alarm bell went off.",
        "exampleZh": "警鐘響起。"
    },
    {
        "id": 30038,
        "en": "album",
        "kk": "[ˋælbəm]",
        "uk": "/ˈælbəm/",
        "zh": "n. 相簿、唱片、專輯、影集",
        "unit": 17,
        "example": "My mother showed me our family album.",
        "exampleZh": "我媽媽給我看了我們的家庭相簿。"
    },
    {
        "id": 30039,
        "en": "alike",
        "kk": "[əˋlaɪk]",
        "uk": "/əˈlaɪk/",
        "zh": "adj. 相似的、相像的；adv. 同樣地、相似地、相同地、兩者都",
        "unit": 17,
        "example": "My sister and I do not look alike.",
        "exampleZh": "我和我姐姐長得不太像。"
    },
    {
        "id": 30040,
        "en": "alive",
        "kk": "[əˋlaɪv]",
        "uk": "/əˈlaɪv/",
        "zh": "adj. 活的、活著的、仍然存在的、活躍的",
        "unit": 17,
        "example": "He's still alive, isn't he?",
        "exampleZh": "他還活著，不是嗎？"
    },
    {
        "id": 30041,
        "en": "all",
        "kk": "[ɔl]",
        "uk": "/ɔːl/",
        "zh": "det. 全部、每一個、極度、儘量；adj. 全部的、每一個的、任何的、儘可能多的；adv. 完全地、各方、各選手、非常；pron. 所有、全部、唯一；n. 全部、所有",
        "unit": 17,
        "example": "All the students are in the classroom.",
        "exampleZh": "所有的學生都在教室裡。"
    },
    {
        "id": 30042,
        "en": "allow",
        "kk": "[əˋlaʊ]",
        "uk": "/əˈlaʊ/",
        "zh": "vt. 允許、准許、使有可能、任憑",
        "unit": 17,
        "example": "We must allow for human error.",
        "exampleZh": "我們必須允許人為錯誤。"
    },
    {
        "id": 30043,
        "en": "almost",
        "kk": "[ˋɔl͵most]",
        "uk": "/ˈɔːlməʊst/",
        "zh": "adv. 幾乎、差不多",
        "unit": 17,
        "example": "The school bus is almost here now.",
        "exampleZh": "校車現在差不多快到了。"
    },
    {
        "id": 30044,
        "en": "alone",
        "kk": "[əˋlon]",
        "uk": "/əˈləʊn/",
        "zh": "adj. 單獨的、獨自的、孤獨的；adv. 獨自地、單獨地、只有",
        "unit": 17,
        "example": "He lives alone in the big city.",
        "exampleZh": "他獨自一人住在大城市裡。"
    },
    {
        "id": 30045,
        "en": "along",
        "kk": "[əˋlɔŋ]",
        "uk": "/əˈlɒŋ/",
        "zh": "prep. 沿著、順著、靠著……邊、在某處；adv. 一起、向前、一道、進行",
        "unit": 17,
        "example": "Things are going along nicely.",
        "exampleZh": "事情進展順利。"
    },
    {
        "id": 30046,
        "en": "aloud",
        "kk": "[əˋlaʊd]",
        "uk": "/əˈlaʊd/",
        "zh": "adv. 大聲地、出聲地",
        "unit": 17,
        "example": "Please read the short story aloud today.",
        "exampleZh": "今天請大聲朗讀這篇短篇故事。"
    },
    {
        "id": 30047,
        "en": "already",
        "kk": "[ɔlˋrɛdi]",
        "uk": "/ɔːlˈredi/",
        "zh": "adv. 已經、早已、馬上、夠了",
        "unit": 17,
        "example": "Eight o'clock had already chimed.",
        "exampleZh": "八點鐘的鐘聲已經敲響。"
    },
    {
        "id": 30048,
        "en": "also",
        "kk": "[ˋɔlso]",
        "uk": "/ˈɔːlsəʊ/",
        "zh": "adv. 也、同樣、此外、而且",
        "unit": 17,
        "example": "She also wants to join our team.",
        "exampleZh": "她也想加入我們的隊伍。"
    },
    {
        "id": 30049,
        "en": "altogether",
        "kk": "[͵ɔltəˋɡɛðɚ]",
        "uk": "/ˌɔːltəˈɡeðə(r)/",
        "zh": "adv. 總共、完全地、總之",
        "unit": 17,
        "example": "I don't altogether agree with you.",
        "exampleZh": "我不完全同意你的觀點。"
    },
    {
        "id": 30050,
        "en": "always",
        "kk": "[ˋɔl͵wez]",
        "uk": "/ˈɔːlweɪz/",
        "zh": "adv. 總是、每次都是、一直、長久以來",
        "unit": 17,
        "example": "My brother always gets up very early.",
        "exampleZh": "我弟弟總是很早起床。"
    },
    {
        "id": 30051,
        "en": "ambulance",
        "kk": "[ˋæmbjələns]",
        "uk": "/ˈæmbjələns/",
        "zh": "n. 救護車、急救車；v. 用救護車送",
        "unit": 17,
        "example": "Call an ambulance for him now.",
        "exampleZh": "現在替他叫救護車。"
    },
    {
        "id": 30052,
        "en": "among",
        "kk": "[əˋmʌŋ]",
        "uk": "/əˈmʌŋ/",
        "zh": "prep. 在……之間、在……當中、周圍是、與……在一起",
        "unit": 17,
        "example": "Bees buzzed lazily among the flowers.",
        "exampleZh": "蜜蜂在花叢中慵懶地嗡嗡作響。"
    },
    {
        "id": 30053,
        "en": "ancient",
        "kk": "[ˋentʃənt]",
        "uk": "/ˈeɪnʃənt/",
        "zh": "adj. 古代的、遠古的、古老的、年代久遠的；n. 古代人、老頭",
        "unit": 17,
        "example": "They found an ancient coin in the ground.",
        "exampleZh": "他們在泥土中發現了一枚古老的硬幣。"
    },
    {
        "id": 30054,
        "en": "angel",
        "kk": "[ˋendʒəl]",
        "uk": "/ˈeɪndʒl/",
        "zh": "n. 天使、仁慈的人、善人、寶貝",
        "unit": 17,
        "example": "She is kind like an angel.",
        "exampleZh": "她善良得像個天使。"
    },
    {
        "id": 30055,
        "en": "anger",
        "kk": "[ˋæŋɡɚ]",
        "uk": "/ˈæŋɡə(r)/",
        "zh": "n. 憤怒、怒火；vt. 使生氣、激怒",
        "unit": 17,
        "example": "His face was full of deep anger.",
        "exampleZh": "他的臉上充滿了憤怒。"
    },
    {
        "id": 30056,
        "en": "angry",
        "kk": "[ˋæŋɡri]",
        "uk": "/ˈæŋɡri/",
        "zh": "adj. 生氣的、憤怒的、狂風暴雨的、波濤洶湧的",
        "unit": 17,
        "example": "My father is very angry today.",
        "exampleZh": "我爸爸今天非常生氣。"
    },
    {
        "id": 30057,
        "en": "ankle",
        "kk": "[ˋæŋkəl]",
        "uk": "/ˈæŋk(ə)l/",
        "zh": "n. 腳踝、踝關節；v. 走、離開、踝關節曲起用力",
        "unit": 17,
        "example": "He hurt his left ankle while running.",
        "exampleZh": "他在跑步時弄傷了左腳踝。"
    },
    {
        "id": 30058,
        "en": "animal",
        "kk": "[ˋænəməl]",
        "uk": "/ˈænɪm(ə)l/",
        "zh": "n. 動物、獸類；adj. 動物的、肉體的",
        "unit": 17,
        "example": "The dog is a very friendly animal.",
        "exampleZh": "狗是一種非常友善的動物。"
    },
    {
        "id": 30059,
        "en": "another",
        "kk": "[əˋnʌðɚ]",
        "uk": "/əˈnʌðə(r)/",
        "zh": "det. 另一個、另一、又一、另外一個；pron. 又一個、再一個、另一個、另一種；adj. 再加一個的、另一的、不同的、另一類似的",
        "unit": 17,
        "example": "Can I have another cup of water?",
        "exampleZh": "我可以再來一杯水嗎？"
    },
    {
        "id": 30060,
        "en": "answer",
        "kk": "[ˋænsɚ]",
        "uk": "/ˈɑːnsə(r)/",
        "zh": "vt. 回答、答覆、回覆、接電話；n. 答案、回答、答覆、解決辦法",
        "unit": 17,
        "example": "Please write your answer on the paper.",
        "exampleZh": "請把你的答案寫在紙上。"
    },
    {
        "id": 30061,
        "en": "ant",
        "kk": "[ænt]",
        "uk": "/ænt/",
        "zh": "n. 螞蟻、Ant",
        "unit": 17,
        "example": "I saw an ant on the floor.",
        "exampleZh": "我看到地板上有一隻螞蟻。"
    },
    {
        "id": 30062,
        "en": "any",
        "kk": "[ˋɛni]",
        "uk": "/ˈeni/",
        "zh": "det. 任何的、任一的、一點、些許；pron. 一些、任何一個、任何數量、任一數額；adv. 一點、絲毫、壓根兒；adj. 任何的、任一的、一點、一些",
        "unit": 17,
        "example": "Do you have any questions for me?",
        "exampleZh": "你有任何問題要問我嗎？"
    },
    {
        "id": 30063,
        "en": "anyone",
        "kk": "[ˋɛni͵wʌn]",
        "uk": "/ˈeniwʌn/",
        "zh": "pron. 任何人、無論誰、任何一個人、某個人",
        "unit": 17,
        "example": "Does anyone want some cold water?",
        "exampleZh": "有人想要喝冰水嗎？"
    },
    {
        "id": 30064,
        "en": "anything",
        "kk": "[ˋɛni͵θɪŋ]",
        "uk": "/ˈeniθɪŋ/",
        "zh": "pron. 任何事物、某事物、任一事物、任何……的事物",
        "unit": 17,
        "example": "They'll eat almost anything.",
        "exampleZh": "他們幾乎什麼都吃。"
    },
    {
        "id": 30065,
        "en": "anywhere",
        "kk": "[ˋɛni͵wɛr]",
        "uk": "/ˈeniweə(r)/",
        "zh": "adv. 任何地方、在任何地方、無論何處；n. 任何地方",
        "unit": 17,
        "example": "I cannot find my car keys anywhere.",
        "exampleZh": "我到處都找不到我的車鑰匙。"
    },
    {
        "id": 30066,
        "en": "apartment",
        "kk": "[əˋpɑrtmənt]",
        "uk": "/əˈpɑːtmənt/",
        "zh": "n. 公寓、公寓套房、房間、套間",
        "unit": 17,
        "example": "They rent an apartment near the station.",
        "exampleZh": "他們在車站附近租了一間公寓。"
    },
    {
        "id": 30067,
        "en": "apologize",
        "kk": "[əˋpɑlə͵dʒaɪz]",
        "uk": "/əˈpɒlədʒaɪz/",
        "zh": "vi. 道歉、謝罪",
        "unit": 17,
        "example": "I'm damned if I'll apologize!",
        "exampleZh": "我決不道歉！"
    },
    {
        "id": 30068,
        "en": "appear",
        "kk": "[əˋpɪr]",
        "uk": "/əˈpɪə(r)/",
        "zh": "vi. 出現、呈現、首次使用、起源",
        "unit": 17,
        "example": "Dark clouds appear in the sky now.",
        "exampleZh": "烏雲現在出現在天空中。"
    },
    {
        "id": 30069,
        "en": "apple",
        "kk": "[ˋæpəl]",
        "uk": "/ˈæp(ə)l/",
        "zh": "n. 蘋果、蘋果樹、蘋果公司",
        "unit": 17,
        "example": "She ate a sweet red apple today.",
        "exampleZh": "她今天吃了一顆又甜又紅的蘋果。"
    },
    {
        "id": 30070,
        "en": "appreciate",
        "kk": "[əˋpriʃi͵et]",
        "uk": "/əˈpriːʃieɪt/",
        "zh": "v. 欣賞、鑑賞、理解、明白",
        "unit": 17,
        "example": "Anyone can appreciate our music.",
        "exampleZh": "任何人都能欣賞我們的音樂。"
    },
    {
        "id": 30071,
        "en": "April",
        "kk": "[ˋeprəl]",
        "uk": "/ˈeɪprəl/",
        "zh": "n. 四月",
        "unit": 17,
        "example": "We went to Japan last April.",
        "exampleZh": "去年四月我們去了日本。"
    },
    {
        "id": 30072,
        "en": "area",
        "kk": "[ˋɛriə]",
        "uk": "/ˈeəriə/",
        "zh": "n. 地區、區域、場地、地方",
        "unit": 17,
        "example": "This area has many tall green trees.",
        "exampleZh": "這個地區有許多高大的綠樹。"
    },
    {
        "id": 30073,
        "en": "argue",
        "kk": "[ˋɑrɡju]",
        "uk": "/ˈɑːɡjuː/",
        "zh": "v. 爭論、主張、認為、說服",
        "unit": 17,
        "example": "Do not argue with your parents about food.",
        "exampleZh": "不要為了食物和你的父母爭吵。"
    },
    {
        "id": 30074,
        "en": "arm",
        "kk": "[ɑrm]",
        "uk": "/ɑːm/",
        "zh": "n. 手臂、上肢、武器、軍備；vt. 武裝、備戰、提供、配備",
        "unit": 17,
        "example": "He broke his left arm during the game.",
        "exampleZh": "他在比賽中弄斷了左手臂。"
    },
    {
        "id": 30075,
        "en": "armchair",
        "kk": "[ˋɑrm͵tʃɛr]",
        "uk": "/ˈɑːmtʃeə(r)/",
        "zh": "n. 扶手椅、單人沙發；adj. 空想的、無實際經驗的、誇誇其談的",
        "unit": 17,
        "example": "Grandpa fell asleep in the soft armchair.",
        "exampleZh": "爺爺在那張柔軟的扶手椅上睡著了。"
    },
    {
        "id": 30076,
        "en": "army",
        "kk": "[ˋɑrmi]",
        "uk": "/ˈɑːmi/",
        "zh": "n. 軍隊、陸軍、大批、大群",
        "unit": 17,
        "example": "His brother joined the army last year.",
        "exampleZh": "他的哥哥去年參軍加入了陸軍。"
    },
    {
        "id": 30077,
        "en": "around",
        "kk": "[ɚˋaʊnd]",
        "uk": "/əˈraʊnd/",
        "zh": "adv. 大約、圍繞、環繞、周圍；prep. 在……周圍、圍繞、環繞、到處",
        "unit": 17,
        "example": "We walked around the lake this morning.",
        "exampleZh": "我們今天早上繞著湖邊散步。"
    },
    {
        "id": 30078,
        "en": "arrange",
        "kk": "[ɚˋendʒ]",
        "uk": "/əˈreɪndʒ/",
        "zh": "vt. 安排、籌備、整理、佈置",
        "unit": 17,
        "example": "Can you arrange a time to meet us?",
        "exampleZh": "你能安排一個時間與我們會面嗎？"
    },
    {
        "id": 30079,
        "en": "arrive",
        "kk": "[ɚˋaɪv]",
        "uk": "/əˈraɪv/",
        "zh": "vi. 到達、抵達、送達、寄到",
        "unit": 17,
        "example": "We should arrive before dark.",
        "exampleZh": "我們應該在天黑之前到達。"
    },
    {
        "id": 30080,
        "en": "art",
        "kk": "[ɑrt]",
        "uk": "/ɑːt/",
        "zh": "n. 藝術、美術、藝術品、技術；adj. 藝術性的；v. be的第二人稱單數現在式",
        "unit": 17,
        "example": "We have an art class every Friday.",
        "exampleZh": "我們每週五有一堂美術課。"
    },
    {
        "id": 30081,
        "en": "artist",
        "kk": "[ˋɑrtəst]",
        "uk": "/ˈɑːtɪst/",
        "zh": "n. 藝術家、美術家、表演藝術家、大師",
        "unit": 17,
        "example": "He is little known as an artist.",
        "exampleZh": "作為一名藝術家，他鮮為人知。"
    },
    {
        "id": 30082,
        "en": "as",
        "kk": "[æz]",
        "uk": "/æz; əz/",
        "zh": "prep. 作為、當作、如同；conj. 當……時、因為、像……一樣；adv. 同樣地、一樣",
        "unit": 17,
        "example": "She works as a teacher in Taipei.",
        "exampleZh": "她在台北當一名老師。"
    },
    {
        "id": 30083,
        "en": "ask",
        "kk": "[æsk]",
        "uk": "/ɑːsk/",
        "zh": "v. 問、詢問、要求、請求",
        "unit": 17,
        "example": "Did you ask the price?",
        "exampleZh": "你問過價格嗎？"
    },
    {
        "id": 30084,
        "en": "asleep",
        "kk": "[əˋslip]",
        "uk": "/əˈsliːp/",
        "zh": "adj. 睡著的、麻木的、發麻的、不專心的；adv. 處於睡眠狀態地、進入睡眠狀態地",
        "unit": 17,
        "example": "He had fallen asleep on the sofa.",
        "exampleZh": "他已經在沙發上睡著了。"
    },
    {
        "id": 30085,
        "en": "assistant",
        "kk": "[əˋsɪstənt]",
        "uk": "/əˈsɪstənt/",
        "zh": "n. 助手、助理、店員、售貨員；adj. 助理的、副的",
        "unit": 17,
        "example": "The assistant pursed her lips.",
        "exampleZh": "助理抿了抿唇。"
    },
    {
        "id": 30086,
        "en": "assume",
        "kk": "[əˋsum]",
        "uk": "/əˈsjuːm/",
        "zh": "v. 假設、假定、認為、裝出",
        "unit": 17,
        "example": "Assume A knows B is guilty.",
        "exampleZh": "假定甲知道乙應負罪責。"
    },
    {
        "id": 30087,
        "en": "attack",
        "kk": "[əˋtæk]",
        "uk": "/əˈtæk/",
        "zh": "vt. 攻擊、批評、抨擊、侵蝕；n. 襲擊、突然發作、一陣突發、進攻",
        "unit": 17,
        "example": "The dog will attack if you run.",
        "exampleZh": "如果你奔跑，這隻狗會發動攻擊。"
    },
    {
        "id": 30088,
        "en": "attention",
        "kk": "[əˋtɛnʃən]",
        "uk": "/əˈtenʃ(ə)n/",
        "zh": "n. 注意力、注意、照料、興趣",
        "unit": 17,
        "example": "My shoes caught his attention.",
        "exampleZh": "我的鞋子引起了他的注意。"
    },
    {
        "id": 30089,
        "en": "August",
        "kk": "[ˋɑɡəst]",
        "uk": "/ɔːˈɡʌst/",
        "zh": "n. 八月；adj. 威嚴的、令人敬畏的",
        "unit": 17,
        "example": "We go to summer camp in August.",
        "exampleZh": "我們在八月去參加夏令營。"
    },
    {
        "id": 30090,
        "en": "aunt",
        "kk": "[ænt]",
        "uk": "/ɑːnt/",
        "zh": "n. 姑媽、伯母、舅媽等",
        "unit": 17,
        "example": "Aunt Emilie darned old socks.",
        "exampleZh": "艾蜜莉阿姨補舊襪子。"
    },
    {
        "id": 30091,
        "en": "autumn",
        "kk": "[ˋɔtəm]",
        "uk": "/ˈɔːtəm/",
        "zh": "n. 秋天、秋季、晚年、漸衰期；adj. 秋天的、秋季的",
        "unit": 17,
        "example": "Leaves fall from trees in autumn.",
        "exampleZh": "樹葉在秋天從樹上落下。"
    },
    {
        "id": 30092,
        "en": "available",
        "kk": "[əˋveləbəl]",
        "uk": "/əˈveɪləb(ə)l/",
        "zh": "adj. 可獲得的、可用的、有空的、有閒暇的",
        "unit": 17,
        "example": "The doctor is available this morning.",
        "exampleZh": "醫生今天早上有空。"
    },
    {
        "id": 30093,
        "en": "avoid",
        "kk": "[əˋvɔɪd]",
        "uk": "/əˈvɔɪd/",
        "zh": "vt. 避免、防止、迴避、避開",
        "unit": 17,
        "example": "Try to avoid eating too much sugar.",
        "exampleZh": "盡量避免攝取過多的糖分。"
    },
    {
        "id": 30094,
        "en": "away",
        "kk": "[əˋwe]",
        "uk": "/əˈweɪ/",
        "zh": "adv. 離開、遠離、不在、距離……之遠；adj. 不在的、客場的",
        "unit": 17,
        "example": "The cat ran away from the dog.",
        "exampleZh": "貓咪從狗狗身邊跑開了。"
    },
    {
        "id": 30095,
        "en": "baby",
        "kk": "[ˋbebi]",
        "uk": "/ˈbeɪbi/",
        "zh": "n. 嬰兒、嬰孩、動物幼崽、最小的成員；v. 把……當嬰兒般對待、對……嬌生慣養、小心翼翼地操作、小心對待；adj. 幼嫩的、小的、小型的",
        "unit": 17,
        "example": "The little baby is sleeping right now.",
        "exampleZh": "小嬰兒現在正在睡覺。"
    },
    {
        "id": 30096,
        "en": "babysitter",
        "kk": "[ˋbebɪ͵sɪtɚ]",
        "uk": "/ˈbeɪbisɪtə(r)/",
        "zh": "n. 保母、臨時照顧幼兒者、臨時保姆",
        "unit": 17,
        "example": "The kind babysitter is at home.",
        "exampleZh": "那位親切的保母在家。"
    },
    {
        "id": 30097,
        "en": "back",
        "kk": "[bæk]",
        "uk": "/bæk/",
        "zh": "n. 背、背部、後面；adv. 向後、回原處、返回；adj. 後面的、背部的；v. 支持、後退",
        "unit": 17,
        "example": "Let's head back home.",
        "exampleZh": "我們回家吧。"
    },
    {
        "id": 30098,
        "en": "backward(s)",
        "kk": "[ˋbækwɚd(z)]",
        "uk": "/ˈbækwəd/",
        "zh": "adj. 向後的、朝後的、倒退的、落後的；adv. 向後地、向後、朝後、反向地；n. 後面（或過去）的部分",
        "unit": 17,
        "example": "You have put your hat backward(s).",
        "exampleZh": "你把帽子戴倒了。"
    },
    {
        "id": 30099,
        "en": "bad",
        "kk": "[bæd]",
        "uk": "/bæd/",
        "zh": "adj. 壞的、不好的、令人不悅的、難以接受的；n. 壞人、壞事；adv. 很、非常、厲害地",
        "unit": 17,
        "example": "Eating too much sugar is bad.",
        "exampleZh": "吃太多糖是不好的。"
    },
    {
        "id": 30100,
        "en": "badminton",
        "kk": "[ˋbæd͵mɪntən]",
        "uk": "/ˈbædmɪntən/",
        "zh": "n. 羽毛球",
        "unit": 17,
        "example": "We like to play badminton today.",
        "exampleZh": "我們今天想打羽毛球。"
    },
    {
        "id": 30101,
        "en": "bag",
        "kk": "[bæɡ]",
        "uk": "/bæɡ/",
        "zh": "n. 袋子、袋、包、一袋的量；v. 把……裝進袋子、搶佔、佔有、捕獲",
        "unit": 17,
        "example": "Put the books into your school bag.",
        "exampleZh": "把書本放進你的書包裡。"
    },
    {
        "id": 30102,
        "en": "bake",
        "kk": "[bek]",
        "uk": "/beɪk/",
        "zh": "vt. 烘烤、炎熱、灼熱、烤；n. 烤制食品、烤餐會",
        "unit": 17,
        "example": "Bake until the crust is golden.",
        "exampleZh": "烘烤至外皮呈金黃色。"
    },
    {
        "id": 30103,
        "en": "bakery",
        "kk": "[ˋbekɚi]",
        "uk": "/ˈbeɪkəri/",
        "zh": "n. 麵包店、烘焙食品",
        "unit": 17,
        "example": "Start her own bakery.",
        "exampleZh": "開辦自己的麵包店。"
    },
    {
        "id": 30104,
        "en": "balcony",
        "kk": "[ˋbælkəni]",
        "uk": "/ˈbælkəni/",
        "zh": "n. 陽臺、露臺、樓座、樓廳",
        "unit": 17,
        "example": "She drew me onto the balcony.",
        "exampleZh": "她把我拉到陽台。"
    },
    {
        "id": 30105,
        "en": "ball",
        "kk": "[bɔl]",
        "uk": "/bɔːl/",
        "zh": "n. 球、球狀物、球類運動、踢出（或擊出、投出）的一球；vt. 成球狀、和（女人）發生性關係",
        "unit": 17,
        "example": "The ball rolled into the net.",
        "exampleZh": "球滾入網內。"
    },
    {
        "id": 30106,
        "en": "balloon",
        "kk": "[bəˋlun]",
        "uk": "/bəˈluːn/",
        "zh": "n. 氣球、熱氣球、氣球狀對話方塊、球形大酒杯；vi. 激增、突然長胖、膨脹、鼓起來；adj. 像氣球般鼓起的",
        "unit": 17,
        "example": "The red balloon flew into the sky.",
        "exampleZh": "紅色氣球飛上了天空。"
    },
    {
        "id": 30107,
        "en": "banana",
        "kk": "[bəˋnænə]",
        "uk": "/bəˈnɑːnə/",
        "zh": "n. 香蕉、香蕉樹；adj. 愚蠢的、發狂的",
        "unit": 17,
        "example": "Monkeys like to eat sweet yellow bananas.",
        "exampleZh": "猴子喜歡吃香甜的黃香蕉。"
    },
    {
        "id": 30108,
        "en": "band",
        "kk": "[bænd]",
        "uk": "/bænd/",
        "zh": "n. 樂團、樂隊、一夥、一群；v. 給……分級、把……分段、用帶綁紮、加彩條",
        "unit": 17,
        "example": "The singer re-formed his band.",
        "exampleZh": "這位歌手重組了他的樂隊。"
    },
    {
        "id": 30109,
        "en": "bank",
        "kk": "[bæŋk]",
        "uk": "/bæŋk/",
        "zh": "n. 銀行、儲蓄罐、庫存、庫；v. 把（錢）存入銀行、把……儲存入庫、與銀行有業務往來、傾斜飛行",
        "unit": 17,
        "example": "The bank wired her the money.",
        "exampleZh": "銀行匯了錢給她。"
    },
    {
        "id": 30110,
        "en": "barbecue",
        "kk": "[ˋbɑrbɪ͵kju]",
        "uk": "/ˈbɑːbɪkjuː/",
        "zh": "n. 戶外燒烤、烤肉架、燒烤食物；vt. 燒烤",
        "unit": 17,
        "example": "Let's have a barbecue!",
        "exampleZh": "我們去吃燒烤吧！"
    },
    {
        "id": 30111,
        "en": "barber",
        "kk": "[ˋbɑrbɚ]",
        "uk": "/ˈbɑːbə(r)/",
        "zh": "n. 理髮師、理髮店；v. 給（男子）理髮",
        "unit": 17,
        "example": "I gave the barber a tip.",
        "exampleZh": "我給了理髮師小費。"
    },
    {
        "id": 30112,
        "en": "bark",
        "kk": "[bɑrk]",
        "uk": "/bɑːk/",
        "zh": "vi. 吠叫、大聲嚷、吼叫、吠；n. 樹皮、狗叫聲、吠聲、吼叫聲",
        "unit": 17,
        "example": "Dogs bark when strangers walk near home.",
        "exampleZh": "當陌生人走近家門時狗會吠叫。"
    },
    {
        "id": 30113,
        "en": "base",
        "kk": "[bes]",
        "uk": "/beɪs/",
        "zh": "n. 基礎、基地、底部、根據地；vt. 以……為基礎、把基地設在；adj. 卑鄙的、低劣的",
        "unit": 17,
        "example": "They sat at the base of the tree.",
        "exampleZh": "他們坐在樹根底部。"
    },
    {
        "id": 30114,
        "en": "baseball",
        "kk": "[ˋbeˋsbɔl]",
        "uk": "/ˈbeɪsbɔːl/",
        "zh": "n. 棒球、棒球運動",
        "unit": 17,
        "example": "He often wore a baseball cap.",
        "exampleZh": "他經常戴著棒球帽。"
    },
    {
        "id": 30115,
        "en": "basement",
        "kk": "[ˋbesmənt]",
        "uk": "/ˈbeɪsmənt/",
        "zh": "n. 地下室、地庫",
        "unit": 17,
        "example": "We keep old boxes in the basement.",
        "exampleZh": "我們把舊箱子存放在地下室。"
    },
    {
        "id": 30116,
        "en": "basic",
        "kk": "[ˋbesɪk]",
        "uk": "/ˈbeɪsɪk/",
        "zh": "adj. 基礎的、最重要的、基本的、最簡單的；n. 基本要素、基本原則",
        "unit": 17,
        "example": "This is a basic English book.",
        "exampleZh": "這是一本基礎英文書。"
    },
    {
        "id": 30117,
        "en": "basket",
        "kk": "[ˋbæskət]",
        "uk": "/ˈbɑːskɪt/",
        "zh": "n. 籃子、一籃的量、籃、投籃得分",
        "unit": 17,
        "example": "Put the apples into the wooden basket.",
        "exampleZh": "把蘋果放進木籃子裡。"
    },
    {
        "id": 30118,
        "en": "basketball",
        "kk": "[ˋbæskət͵bɔl]",
        "uk": "/ˈbɑːskɪtbɔːl/",
        "zh": "n. 籃球、籃球運動",
        "unit": 17,
        "example": "We play basketball in the school yard.",
        "exampleZh": "我們在校園球場上打籃球。"
    },
    {
        "id": 30119,
        "en": "bat",
        "kk": "[bæt]",
        "uk": "/bæt/",
        "zh": "n. 蝙蝠、球棒、球拍；vi. 用球板（棒）擊球、揮打、擊走",
        "unit": 17,
        "example": "He hits the ball with a bat.",
        "exampleZh": "他用球棒擊球。"
    },
    {
        "id": 30120,
        "en": "bath",
        "kk": "[bæθ]",
        "uk": "/bɑːθ/",
        "zh": "n. 沐浴、浴缸、浴盆、洗澡；v. 給……洗澡、洗澡、沐浴",
        "unit": 17,
        "example": "The baby loves bath time.",
        "exampleZh": "寶寶很喜歡洗澡。"
    },
    {
        "id": 30121,
        "en": "bathe",
        "kk": "[beð]",
        "uk": "/beɪð/",
        "zh": "v. 沐浴、洗澡、給（某人）洗澡、游泳；n. 游泳、洗浴",
        "unit": 17,
        "example": "I bathe my dog every Sunday afternoon.",
        "exampleZh": "我每個星期天下午幫我的狗洗澡。"
    },
    {
        "id": 30122,
        "en": "bathroom",
        "kk": "[ˋbæ͵θrum]",
        "uk": "/ˈbɑːθruːm; ˈbɑːθrʊm/",
        "zh": "n. 浴室、盥洗室、衛生間、廁所",
        "unit": 17,
        "example": "The bathroom floor was awash.",
        "exampleZh": "浴室地板被水淹沒了。"
    },
    {
        "id": 30123,
        "en": "beach",
        "kk": "[bitʃ]",
        "uk": "/biːtʃ/",
        "zh": "n. 沙灘、海灘、海濱；vt. 把（船）拖上岸、擱淺、釣（魚）上岸、讓（某人）受損",
        "unit": 17,
        "example": "The children played on the sandy beach.",
        "exampleZh": "孩子們在沙灘上玩耍。"
    },
    {
        "id": 30124,
        "en": "bean",
        "kk": "[bin]",
        "uk": "/biːn/",
        "zh": "n. 豆子、豆、菜豆、豆科植物；v. 擊中（某人）頭部",
        "unit": 17,
        "example": "Eat your green beans for healthy growth.",
        "exampleZh": "多吃四季豆有助於健康成長。"
    },
    {
        "id": 30125,
        "en": "bear",
        "kk": "[bɛr]",
        "uk": "/beə(r)/",
        "zh": "v. 承受、手持、攜帶、運輸；n. 熊、粗暴無禮的人、沒教養的人、體格笨重的男人",
        "unit": 17,
        "example": "I cannot bear this hot summer weather.",
        "exampleZh": "我受不了這個炎熱的夏天天氣。"
    },
    {
        "id": 30126,
        "en": "beard",
        "kk": "[bɪrd]",
        "uk": "/bɪəd/",
        "zh": "n. 鬍鬚、絡腮鬍子、頷毛、須；v. 對抗、頂撞、抓……的鬍鬚、提供鬍鬚",
        "unit": 17,
        "example": "My uncle has a long white beard.",
        "exampleZh": "我的叔叔留著一把長長的白鬍子。"
    },
    {
        "id": 30127,
        "en": "beat",
        "kk": "[bit]",
        "uk": "/biːt/",
        "zh": "v. 打敗、敲、擊、打；n. 節拍、敲、擊、強音拍；adj. 筋疲力盡、疲憊不堪、垮掉的一代的",
        "unit": 17,
        "example": "Our team can beat them this afternoon.",
        "exampleZh": "我們隊今天下午能打敗他們。"
    },
    {
        "id": 30128,
        "en": "beautiful",
        "kk": "[ˋbjutəfəl]",
        "uk": "/ˈbjuːtɪf(ə)l/",
        "zh": "adj. 美麗的、漂亮的、令人愉悅的、美妙的",
        "unit": 17,
        "example": "The flowers in the park are beautiful.",
        "exampleZh": "公園裡的花朵很美麗。"
    },
    {
        "id": 30129,
        "en": "beauty",
        "kk": "[ˋbjuti]",
        "uk": "/ˈbjuːti/",
        "zh": "n. 美貌、美麗、漂亮、美好的事物；adj. 美容的",
        "unit": 17,
        "example": "We can see the beauty of flowers.",
        "exampleZh": "我們能看見花朵的美麗。"
    },
    {
        "id": 30130,
        "en": "because",
        "kk": "[bɪˋkɔz]",
        "uk": "/bɪˈkɒz/",
        "zh": "conj. 因為、由於",
        "unit": 17,
        "example": "They are here because of us.",
        "exampleZh": "他們因為我們而來到這裡。"
    },
    {
        "id": 30131,
        "en": "become",
        "kk": "[bɪˋkʌm]",
        "uk": "/bɪˈkʌm/",
        "zh": "vt. 成為、變得、變成、適合",
        "unit": 17,
        "example": "She wants to become a good doctor.",
        "exampleZh": "她想成為一名好醫生。"
    },
    {
        "id": 30132,
        "en": "bed",
        "kk": "[bɛd]",
        "uk": "/bed/",
        "zh": "n. 床、床鋪、床位、底部；v. 把……固定、嵌入、與（某人）上床",
        "unit": 17,
        "example": "The tired boy went to bed early.",
        "exampleZh": "疲倦的男孩很早就上床睡覺了。"
    },
    {
        "id": 30133,
        "en": "bedroom",
        "kk": "[ˋbɛ͵drum]",
        "uk": "/ˈbedruːm/",
        "zh": "n. 臥室；adj. 兩性關係的、城郊住宅區的",
        "unit": 17,
        "example": "My bedroom has a big soft bed.",
        "exampleZh": "我的臥室有一張又大又軟的床。"
    },
    {
        "id": 30134,
        "en": "bee",
        "kk": "[bi]",
        "uk": "/biː/",
        "zh": "n. 蜜蜂、聚會、聯誼賽、工作忙碌的人",
        "unit": 17,
        "example": "The flower opens to reveal a bee.",
        "exampleZh": "花開了，露出一隻蜜蜂。"
    },
    {
        "id": 30135,
        "en": "beef",
        "kk": "[bif]",
        "uk": "/biːf/",
        "zh": "n. 牛肉、肌肉、力量、力氣；v. 抱怨、發牢騷",
        "unit": 17,
        "example": "We had fresh beef noodles for dinner.",
        "exampleZh": "我們晚餐吃了新鮮的牛肉麵。"
    },
    {
        "id": 30136,
        "en": "beer",
        "kk": "[bɪr]",
        "uk": "/bɪə(r)/",
        "zh": "n. 啤酒、一杯（或一瓶，一罐）啤酒、根汁啤酒",
        "unit": 17,
        "example": "My dad drank a cold beer yesterday.",
        "exampleZh": "我爸爸昨天喝了一杯冰啤酒。"
    },
    {
        "id": 30137,
        "en": "before",
        "kk": "[bɪˋfɔr]",
        "uk": "/bɪˈfɔː(r)/",
        "zh": "prep. 在……之前、早於、在（某個鐘點）之前、當面；conj. 在……以前、到……為止、以免、不然；adv. 以前、過去、在（某時間或某事）以前、在前面",
        "unit": 17,
        "example": "We should arrive before dark.",
        "exampleZh": "我們應該在天黑之前到達。"
    },
    {
        "id": 30138,
        "en": "begin",
        "kk": "[bɪˋɡɪn]",
        "uk": "/bɪˈɡɪn/",
        "zh": "v. 開始、著手、開始說、開始發生",
        "unit": 17,
        "example": "Classes begin at eight in the morning.",
        "exampleZh": "課程在早上八點開始。"
    },
    {
        "id": 30139,
        "en": "beginner",
        "kk": "[bɪˋɡɪnɚ]",
        "uk": "/bɪˈɡɪnə(r)/",
        "zh": "n. 初學者、新手、生手、初級的",
        "unit": 17,
        "example": "This book is written for each beginner.",
        "exampleZh": "這本書是為每位初學者撰寫的。"
    },
    {
        "id": 30140,
        "en": "beginning",
        "kk": "[bɪˋɡɪnɪŋ]",
        "uk": "/bɪˈɡɪnɪŋ/",
        "zh": "n. 開始、開端、序曲、開始部分；adj. 初級的、基本的；v. 開始、著手",
        "unit": 17,
        "example": "The snow was beginning to melt.",
        "exampleZh": "積雪開始融化了。"
    },
    {
        "id": 30141,
        "en": "behave",
        "kk": "[bɪˋhev]",
        "uk": "/bɪˈheɪv/",
        "zh": "v. 表現、行為、起反應、起作用",
        "unit": 17,
        "example": "Will you kids just behave!",
        "exampleZh": "孩子們，規矩點！"
    },
    {
        "id": 30142,
        "en": "behind",
        "kk": "[bɪˋhaɪnd]",
        "uk": "/bɪˈhaɪnd/",
        "zh": "prep. 在……後面、在（或向）……的後面、落後於、是……背後的原因；adv. 落後、在後面、留在原地、拖欠；n. 屁股、射門得分",
        "unit": 17,
        "example": "She heard footsteps behind her.",
        "exampleZh": "她聽到身後有腳步聲。"
    },
    {
        "id": 30143,
        "en": "believe",
        "kk": "[bɪˋliv]",
        "uk": "/bɪˈliːv/",
        "zh": "v. 相信、認為、猜想、信教",
        "unit": 17,
        "example": "I believe what you say to me.",
        "exampleZh": "我相信你對我說的話。"
    },
    {
        "id": 30144,
        "en": "bell",
        "kk": "[bɛl]",
        "uk": "/bel/",
        "zh": "n. 鈴、鍾、鐘聲、鈴聲；v. 系鈴、裝鍾、發出響鈴（或敲鐘）般的聲音、給……打電話",
        "unit": 17,
        "example": "The school bell rang at eight o'clock.",
        "exampleZh": "學校的鐘聲在八點鐘響起。"
    },
    {
        "id": 30145,
        "en": "belong",
        "kk": "[bɪˋlɔŋ]",
        "uk": "/bɪˈlɒŋ/",
        "zh": "vi. 屬於、歸……所有、適應、應在……地方",
        "unit": 17,
        "example": "These books belong to my older sister.",
        "exampleZh": "這些書是我姐姐的。"
    },
    {
        "id": 30146,
        "en": "below",
        "kk": "[bɪˋlo]",
        "uk": "/bɪˈləʊ/",
        "zh": "prep. 在……下面、在……以下、低於；adv. 以下、在下面、在……以下、在下文中",
        "unit": 17,
        "example": "Small fish swim below the blue water.",
        "exampleZh": "小魚在藍色的水面下游泳。"
    },
    {
        "id": 30147,
        "en": "belt",
        "kk": "[bɛlt]",
        "uk": "/belt/",
        "zh": "n. 皮帶、腰帶、傳送帶、地帶；v. 用腰帶繫緊、狠打、猛擊、抽打",
        "unit": 17,
        "example": "We live in the commuter belt.",
        "exampleZh": "我們生活在通勤帶。"
    },
    {
        "id": 30148,
        "en": "bench",
        "kk": "[bɛntʃ]",
        "uk": "/bentʃ/",
        "zh": "n. 長凳、長椅、長方形工作臺、法官席；v. 把（場上隊員）換下、展覽、仰臥推舉、給……以席位",
        "unit": 17,
        "example": "An old man sat on the bench.",
        "exampleZh": "一位老人坐在長凳上。"
    },
    {
        "id": 30149,
        "en": "besides",
        "kk": "[bɪˋsaɪdz]",
        "uk": "/bɪˈsaɪdz/",
        "zh": "prep. 除了、除……之外；adv. 此外、而且、再說、也",
        "unit": 17,
        "example": "No one was there besides my sister.",
        "exampleZh": "除了我妹妹之外，沒有人在那裡。"
    },
    {
        "id": 30150,
        "en": "between",
        "kk": "[bɪtˋwin]",
        "uk": "/bɪˈtwiːn/",
        "zh": "prep. 在……之間、在……中間、介於……之間、分隔著；adv. 介於……之間",
        "unit": 17,
        "example": "The park is between the two houses.",
        "exampleZh": "公園介於這兩棟房子之間。"
    },
    {
        "id": 30151,
        "en": "beyond",
        "kk": "[bɪˋɑnd]",
        "uk": "/bɪˈjɒnd/",
        "zh": "prep. 超過、在（或向）……較遠的一邊、晚於、遲於；adv. 在……之外、在另一邊、在（或向）更遠處、到……之後；n. 來生、再世、遠處的事物",
        "unit": 17,
        "example": "The hills lie far beyond that river.",
        "exampleZh": "山丘座落在遠遠超越那條河的地方。"
    },
    {
        "id": 30152,
        "en": "bicycle",
        "kk": "[ˋbaɪsɪkəl]",
        "uk": "/ˈbaɪsɪk(ə)l/",
        "zh": "n. 腳踏車、單車；v. 騎腳踏車",
        "unit": 17,
        "example": "Oscar had a new bicycle.",
        "exampleZh": "奧斯卡有一輛新自行車。"
    },
    {
        "id": 30153,
        "en": "big",
        "kk": "[bɪɡ]",
        "uk": "/bɪɡ/",
        "zh": "adj. 大的、重大的、嚴重的、有影響力的；adv. 大大、給人印象深地、誇口地、大量地；v. 招搖",
        "unit": 17,
        "example": "This shirt isn't big enough.",
        "exampleZh": "這件襯衫不夠大。"
    },
    {
        "id": 30154,
        "en": "bill",
        "kk": "[bɪl]",
        "uk": "/bɪl/",
        "zh": "n. 帳單、鈔票、賬單、議案；vt. 開賬單、把……宣傳為、宣佈（某人）將參加演出",
        "unit": 17,
        "example": "Ask the waiter for the dinner bill.",
        "exampleZh": "請服務生拿晚餐的帳單過來。"
    },
    {
        "id": 30155,
        "en": "biology",
        "kk": "[baɪˋɑlədʒi]",
        "uk": "/baɪˈɒlədʒi/",
        "zh": "n. 生物學、生命機理、作用方式、生理習性",
        "unit": 17,
        "example": "We learn biology in this room.",
        "exampleZh": "我們在這間教室研讀生物學。"
    },
    {
        "id": 30156,
        "en": "bird",
        "kk": "[bɝd]",
        "uk": "/bɜːd/",
        "zh": "n. 鳥、年輕女子、姑娘、人",
        "unit": 17,
        "example": "A little blue bird is singing outside.",
        "exampleZh": "一隻藍色小鳥正在外面唱歌。"
    },
    {
        "id": 30157,
        "en": "birthday",
        "kk": "[ˋbɝθ͵de]",
        "uk": "/ˈbɜːθdeɪ/",
        "zh": "n. 生日、誕辰、出生日期、誕生的日子",
        "unit": 17,
        "example": "We threw a huge birthday party.",
        "exampleZh": "我們舉辦了一次盛大的生日派對。"
    },
    {
        "id": 30158,
        "en": "bite",
        "kk": "[baɪt]",
        "uk": "/baɪt/",
        "zh": "v. 咬、咬傷、叮、蜇；n. 叮、咬、一口的量、咬傷",
        "unit": 17,
        "example": "Be careful, the dog might bite you.",
        "exampleZh": "小心點，那隻狗可能會咬你。"
    },
    {
        "id": 30159,
        "en": "bitter",
        "kk": "[ˋbɪtɚ]",
        "uk": "/ˈbɪtə(r)/",
        "zh": "adj. 痛苦的、味苦的、辛酸的、激烈的；n. 苦啤酒；adv. 嚴寒刺骨地；v. 使變苦",
        "unit": 17,
        "example": "The leaves taste rather bitter.",
        "exampleZh": "葉子的味道比較苦。"
    },
    {
        "id": 30160,
        "en": "black",
        "kk": "[blæk]",
        "uk": "/blæk/",
        "zh": "adj. 黑色的、黑的、黑色人種的、不加牛奶的；n. 黑色、黑、黑人、黑色衣服；v. 使變黑、弄黑、抵制、拒絕",
        "unit": 17,
        "example": "My father bought a black car yesterday.",
        "exampleZh": "我爸爸昨天買了一輛黑色的車。"
    },
    {
        "id": 30161,
        "en": "blackboard",
        "kk": "[ˋblæk͵bɔrd]",
        "uk": "/ˈblækbɔːd/",
        "zh": "n. 黑板",
        "unit": 17,
        "example": "The menu was on a blackboard.",
        "exampleZh": "菜單在黑板上。"
    },
    {
        "id": 30162,
        "en": "blame",
        "kk": "[blem]",
        "uk": "/bleɪm/",
        "zh": "vt. 責備、責怪、歸咎於、怨；n. 責備、過錯、罪責",
        "unit": 17,
        "example": "Do not blame him for that.",
        "exampleZh": "不要因為那件事責怪他。"
    },
    {
        "id": 30163,
        "en": "blank",
        "kk": "[blæŋk]",
        "uk": "/blæŋk/",
        "zh": "adj. 空白的、空的、茫然的、毫無表情的；n. 空格、空白處、一片空白、空彈；v. 成為空白、不記得、冷落、不理睬",
        "unit": 17,
        "example": "Do we have a blank video ?",
        "exampleZh": "我們有空白影片嗎？"
    },
    {
        "id": 30164,
        "en": "blanket",
        "kk": "[ˋblæŋkət]",
        "uk": "/ˈblæŋkɪt/",
        "zh": "n. 毯子、毛毯、厚層、覆蓋層；vt. 覆蓋、蓋住、籠罩、消除；adj. 總括的、全面的、通用的",
        "unit": 17,
        "example": "Keep warm with a thick blanket.",
        "exampleZh": "用一條厚毛毯保暖。"
    },
    {
        "id": 30165,
        "en": "blind",
        "kk": "[blaɪnd]",
        "uk": "/blaɪnd/",
        "zh": "adj. 盲的、失明的、未察覺的、視而不見的；vt. 使失明、使變瞎、使眼花、使目眩；n. 窗簾、捲簾、埋伏處、伏擊處；adv. 看不清地、失去理智地、盲目地、無準備地",
        "unit": 17,
        "example": "The bright light can blind your eyes.",
        "exampleZh": "強烈的光線會使你的雙眼眩目。"
    },
    {
        "id": 30166,
        "en": "block",
        "kk": "[blɑk]",
        "uk": "/blɒk/",
        "zh": "n. 街區、大塊、一塊、街段；vt. 阻塞、堵塞、遮住",
        "unit": 17,
        "example": "They walked around the city block together.",
        "exampleZh": "他們一起繞著市區街區散步。"
    },
    {
        "id": 30167,
        "en": "blood",
        "kk": "[blʌd]",
        "uk": "/blʌd/",
        "zh": "n. 血、血液、出身、血統；v. 使初次體驗、抽血",
        "unit": 17,
        "example": "Wash the red blood off your hand.",
        "exampleZh": "把你手上的鮮血洗掉。"
    },
    {
        "id": 30168,
        "en": "bloody",
        "kk": "[ˋblʌdi]",
        "uk": "/ˈblʌdi/",
        "zh": "adj. 血腥的、流血的、沾滿血的、殘酷的；adv. 非常、很、該死地、討厭地；vt. 使受傷、使流血、血染、使沾上鮮血",
        "unit": 17,
        "example": "He washed his bloody knee after the fall.",
        "exampleZh": "他跌倒後把流血的膝蓋清洗乾淨。"
    },
    {
        "id": 30169,
        "en": "blow",
        "kk": "[blo]",
        "uk": "/bləʊ/",
        "zh": "v. 吹、刮、吹氣、吹響；n. 打擊、大風、強風、吹氣",
        "unit": 17,
        "example": "Cold winds blow from the north today.",
        "exampleZh": "今天寒風從北方吹來。"
    },
    {
        "id": 30170,
        "en": "blue",
        "kk": "[blu]",
        "uk": "/bluː/",
        "zh": "adj. 藍色的、憂鬱的、沮喪的、保守的；n. 藍色、天藍色、天空、大海；v. 變成藍色、用藍色漂白劑洗、揮霍、亂花",
        "unit": 17,
        "example": "The clear sky is very blue today.",
        "exampleZh": "今天晴朗的天空非常蔚藍。"
    },
    {
        "id": 30171,
        "en": "boat",
        "kk": "[bot]",
        "uk": "/bəʊt/",
        "zh": "n. 船、小船、輪船；vi. 划船",
        "unit": 17,
        "example": "We took a small boat across the lake.",
        "exampleZh": "我們搭乘一艘小船穿過了湖泊。"
    },
    {
        "id": 30172,
        "en": "body",
        "kk": "[ˋbɑdi]",
        "uk": "/ˈbɒdi/",
        "zh": "n. 身體、軀體、軀幹、屍體；v. 賦予（抽象事物）以形體、使具體化、製造（汽車）的車身",
        "unit": 17,
        "example": "Exercise is good for your whole body.",
        "exampleZh": "運動對你的全身都有好處。"
    },
    {
        "id": 30173,
        "en": "boil",
        "kk": "[bɔɪl]",
        "uk": "/bɔɪl/",
        "zh": "v. 煮沸、沸騰、燒開、用開水煮；n. 沸騰、煮沸、癤、皮下膿腫",
        "unit": 17,
        "example": "Boil some clean water in the pot.",
        "exampleZh": "在鍋子裡煮沸一些乾淨的水。"
    },
    {
        "id": 30174,
        "en": "bomb",
        "kk": "[bɑm]",
        "uk": "/bɒm/",
        "zh": "n. 炸彈、爆炸裝置、失敗的東西、長傳；vt. 轟炸、炸燬、疾行、快速前進",
        "unit": 17,
        "example": "The loud bomb exploded during the war.",
        "exampleZh": "那枚巨大的炸彈在戰爭期間爆炸了。"
    },
    {
        "id": 30175,
        "en": "bone",
        "kk": "[bon]",
        "uk": "/bəʊn/",
        "zh": "n. 骨頭、骨、骨質、基本結構；vt. 挑刺、剔骨頭、施骨肥於、性交；adv. 非常、完全地",
        "unit": 17,
        "example": "The hungry dog chewed on a bone.",
        "exampleZh": "飢餓的狗啃咬著一根骨頭。"
    },
    {
        "id": 30176,
        "en": "book",
        "kk": "[bʊk]",
        "uk": "/bʊk/",
        "zh": "n. 書、書籍、本子、簿冊；vt. 預訂、預約、將……記錄在案、記名警告",
        "unit": 17,
        "example": "I like to read this story book.",
        "exampleZh": "我喜歡讀這本故事書。"
    },
    {
        "id": 30177,
        "en": "bookcase",
        "kk": "[ˋbʊk͵kes]",
        "uk": "/ˈbʊkkeɪs/",
        "zh": "n. 書櫥、書櫃、書架",
        "unit": 17,
        "example": "Put the storybooks back into the bookcase.",
        "exampleZh": "把故事書放回書櫃裡。"
    },
    {
        "id": 30178,
        "en": "bored",
        "kk": "[bɔrd]",
        "uk": "/bɔːd/",
        "zh": "adj. 厭倦的、無聊的、有特定口徑的；v. 使厭煩、鑽、盯著看",
        "unit": 17,
        "example": "He was bored with the film.",
        "exampleZh": "他對那部電影感到無聊。"
    },
    {
        "id": 30179,
        "en": "born",
        "kk": "[bɔrn]",
        "uk": "/bɔːn/",
        "zh": "adj. 天生的、出生的、生來就有的；v. 出生、誕生（bear的過去分詞）",
        "unit": 17,
        "example": "Some people are born brainy.",
        "exampleZh": "有些人天生聰明。"
    },
    {
        "id": 30180,
        "en": "borrow",
        "kk": "[ˋbɑr͵o]",
        "uk": "/ˈbɒrəʊ/",
        "zh": "vt. 借、借入、借貸、採用",
        "unit": 17,
        "example": "Can I borrow your calculator?",
        "exampleZh": "我可以藉你的計算機嗎？"
    },
    {
        "id": 30181,
        "en": "boss",
        "kk": "[bɑs]",
        "uk": "/bɒs/",
        "zh": "n. 老闆、上司、領導、領班；vt. 發號施令、對……頤指氣使、當首領；adj. 很好的、出色的",
        "unit": 17,
        "example": "His boss has a foul temper.",
        "exampleZh": "他的老闆脾氣暴躁。"
    },
    {
        "id": 30182,
        "en": "both",
        "kk": "[boθ]",
        "uk": "/bəʊθ/",
        "zh": "det. 雙方、兩者；pron. 雙方、兩者；conj. …和…都、……和……都；adj. 兩…、雙…",
        "unit": 17,
        "example": "Both of my brothers like football.",
        "exampleZh": "我的兩個哥哥都喜歡足球。"
    },
    {
        "id": 30183,
        "en": "bother",
        "kk": "[ˋbɑðɚ]",
        "uk": "/ˈbɒðə(r)/",
        "zh": "vt. 煩擾、費心、煩惱、擔心；n. 麻煩、不便、討厭的人",
        "unit": 17,
        "example": "I hope I haven't been a bother.",
        "exampleZh": "我希望我沒有成為麻煩。"
    },
    {
        "id": 30184,
        "en": "bottle",
        "kk": "[ˋbɑtəl]",
        "uk": "/ˈbɒt(ə)l/",
        "zh": "n. 瓶子、一瓶、酒、奶瓶；vt. 裝瓶、用玻璃瓶砸、喪失勇氣、洩氣",
        "unit": 17,
        "example": "Shall I open another bottle?",
        "exampleZh": "我要再開一瓶嗎？"
    },
    {
        "id": 30185,
        "en": "bottom",
        "kk": "[ˋbɑtəm]",
        "uk": "/ˈbɒtəm/",
        "zh": "n. 底部、底、盡頭、遠端；adj. 最低的、底部的、最後的、最不重要的；v. 到達海底、觸到海底、鑽探……直到礦物層、發現……範圍",
        "unit": 17,
        "example": "The marriage had reached rock bottom.",
        "exampleZh": "婚姻已經跌入谷底。"
    },
    {
        "id": 30186,
        "en": "bow",
        "kk": "[baʊ]",
        "uk": "/baʊ; bəʊ/",
        "zh": "v. 鞠躬、點頭、低下、停止對抗；n. 鞠躬、點頭、船頭、蝴蝶結",
        "unit": 17,
        "example": "Bow your head to show deep respect.",
        "exampleZh": "低頭鞠躬以表示深切的敬意。"
    },
    {
        "id": 30187,
        "en": "bowl",
        "kk": "[bol]",
        "uk": "/bəʊl/",
        "zh": "n. 碗、盆、一碗之量、碗狀物；v. 滾、投球、擊中三柱門使（擊球手）出局、迅速移動",
        "unit": 17,
        "example": "She served him a bowl of beef stew.",
        "exampleZh": "她給他端了一碗燉牛肉。"
    },
    {
        "id": 30188,
        "en": "bowling",
        "kk": "[ˋbolɪŋ]",
        "uk": "/ˈbəʊlɪŋ/",
        "zh": "n. 保齡球、保齡球運動、投球；v. 打保齡球",
        "unit": 17,
        "example": "They go in for tennis and bowling.",
        "exampleZh": "他們喜歡打網球和保齡球。"
    },
    {
        "id": 30189,
        "en": "box",
        "kk": "[bɑks]",
        "uk": "/bɒks/",
        "zh": "n. 盒子、盒、箱、匣；vi. 拳擊、把……裝箱、鬥拳、參加拳擊比賽",
        "unit": 17,
        "example": "He put the old toys in a box.",
        "exampleZh": "他把舊玩具放進一個盒子裡。"
    },
    {
        "id": 30190,
        "en": "boy",
        "kk": "[bɔɪ]",
        "uk": "/bɔɪ/",
        "zh": "n. 男孩、兒子、男青年、小夥子；int. 好傢伙、好樣的",
        "unit": 17,
        "example": "The tall boy is my best friend.",
        "exampleZh": "那個高個子男孩是我最好的朋友。"
    },
    {
        "id": 30191,
        "en": "brain",
        "kk": "[bren]",
        "uk": "/breɪn/",
        "zh": "n. 腦、智力、智慧、聰明的人；v. 猛擊……的頭部",
        "unit": 17,
        "example": "Your brain needs food to think well.",
        "exampleZh": "你的大腦需要營養才能良好思考。"
    },
    {
        "id": 30192,
        "en": "branch",
        "kk": "[bræntʃ]",
        "uk": "/brɑːntʃ/",
        "zh": "n. 分店、樹枝、分枝、分支機構；v. 分岔、岔開、出枝、發出新枝",
        "unit": 17,
        "example": "A bird sat on the tree branch.",
        "exampleZh": "一隻小鳥停在樹枝上。"
    },
    {
        "id": 30193,
        "en": "brand",
        "kk": "[brænd]",
        "uk": "/brænd/",
        "zh": "n. 品牌、商標、一種、一類；vt. 商標、打烙印於、給……冠以惡名、譴責",
        "unit": 17,
        "example": "What brand of shoes do you wear?",
        "exampleZh": "你平時穿什麼品牌的鞋子？"
    },
    {
        "id": 30194,
        "en": "brave",
        "kk": "[brev]",
        "uk": "/breɪv/",
        "zh": "adj. 勇敢的、無畏的、非常好的、華麗的；vt. 勇敢面對；n. 勇敢的人",
        "unit": 17,
        "example": "The boy was very brave today.",
        "exampleZh": "那個男孩今天非常勇敢。"
    },
    {
        "id": 30195,
        "en": "bread",
        "kk": "[brɛd]",
        "uk": "/bred/",
        "zh": "n. 麵包、錢財；v. 在……上撒麵包屑",
        "unit": 17,
        "example": "We eat fresh bread for breakfast everyday.",
        "exampleZh": "我們每天早餐都吃新鮮麵包。"
    },
    {
        "id": 30196,
        "en": "break",
        "kk": "[brek]",
        "uk": "/breɪk/",
        "zh": "v. 打破、折斷、破裂、撕開；n. 休息、間歇、小憩、課間休息",
        "unit": 17,
        "example": "Do not break the glass cup, please.",
        "exampleZh": "請不要打破那個玻璃杯。"
    },
    {
        "id": 30197,
        "en": "breakfast",
        "kk": "[ˋbrɛkfəst]",
        "uk": "/ˈbrekfəst/",
        "zh": "n. 早餐、早餐的、早餐時用的；vi. 吃早餐",
        "unit": 17,
        "example": "Your breakfast is coming soon.",
        "exampleZh": "你的早餐很快就來了。"
    },
    {
        "id": 30198,
        "en": "brick",
        "kk": "[brɪk]",
        "uk": "/brɪk/",
        "zh": "n. 磚塊、磚、熱心人、可靠的人；adj. 似磚的、用磚做的；v. 用磚牆圍起、用磚堵住",
        "unit": 17,
        "example": "The school is built of brick.",
        "exampleZh": "學校是磚砌的。"
    },
    {
        "id": 30199,
        "en": "bridge",
        "kk": "[brɪdʒ]",
        "uk": "/brɪdʒ/",
        "zh": "n. 橋梁、橋、橋樑、紐帶；vt. 連接、彌合、消除、兼具……的特點",
        "unit": 17,
        "example": "Cars drive over the big long bridge.",
        "exampleZh": "汽車開過那座又大又長的橋樑。"
    },
    {
        "id": 30200,
        "en": "brief",
        "kk": "[brif]",
        "uk": "/briːf/",
        "zh": "adj. 簡短的、短暫的、很短的；vt. 給……指示、向……介紹情況、向（辯護律師）提供案情摘要；n. 概要、指示、任務簡介、摘要",
        "unit": 17,
        "example": "He gave a brief talk about safety.",
        "exampleZh": "他針對安全問題發表了簡短的談話。"
    },
    {
        "id": 30201,
        "en": "bright",
        "kk": "[braɪt]",
        "uk": "/braɪt/",
        "zh": "adj. 明亮的、鮮豔的、聰明的、歡快的；n. 前大燈、頭燈、明亮醒目的顏色；adv. 光亮地、明亮地",
        "unit": 17,
        "example": "The sun is very bright this morning.",
        "exampleZh": "今天早上的太陽非常明亮。"
    },
    {
        "id": 30202,
        "en": "bring",
        "kk": "[brɪŋ]",
        "uk": "/brɪŋ/",
        "zh": "vt. 帶來、拿來、使……轉入、移動",
        "unit": 17,
        "example": "Please bring your homework to school tomorrow.",
        "exampleZh": "請明天把作業帶到學校。"
    },
    {
        "id": 30203,
        "en": "broad",
        "kk": "[brɔd]",
        "uk": "/brɔːd/",
        "zh": "adj. 寬闊的、寬廣的、……寬、咧開嘴的；n. 對女人的粗俗稱呼、寬闊部分；adv. 寬闊地",
        "unit": 17,
        "example": "The river has a very broad bridge.",
        "exampleZh": "這條河流上有一座非常寬闊的橋。"
    },
    {
        "id": 30204,
        "en": "broadcast",
        "kk": "[ˋbrɔd͵kæst]",
        "uk": "/ˈbrɔːdkɑːst/",
        "zh": "vt. 廣播、散佈、傳播、播撒；n. 電視節目、廣播節目、廣播；adj. 廣播（或電視）節目的；adv. 四散地、撒播地",
        "unit": 17,
        "example": "They will broadcast the game on TV.",
        "exampleZh": "他們將在電視上轉播這場比賽。"
    },
    {
        "id": 30205,
        "en": "brother",
        "kk": "[ˋbrʌðɚ]",
        "uk": "/ˈbrʌðə(r)/",
        "zh": "n. 兄弟、哥哥、弟弟、同類人；int. 老兄",
        "unit": 17,
        "example": "My brother plays with me every weekend.",
        "exampleZh": "我哥哥每個週末都和我一起玩。"
    },
    {
        "id": 30206,
        "en": "brown",
        "kk": "[braʊn]",
        "uk": "/braʊn/",
        "zh": "adj. 棕色的、褐色的、膚色深的、曬黑的；n. 褐色、棕色、褐色的東西、眼蝶；vt. 變成棕色、成褐色",
        "unit": 17,
        "example": "The dog has nice brown fur today.",
        "exampleZh": "這隻狗有好看的棕色毛皮。"
    },
    {
        "id": 30207,
        "en": "brunch",
        "kk": "[brʌntʃ]",
        "uk": "/brʌntʃ/",
        "zh": "n. 早午餐",
        "unit": 17,
        "example": "What time is brunch?",
        "exampleZh": "brunch是幾點？"
    },
    {
        "id": 30208,
        "en": "brush",
        "kk": "[brʌʃ]",
        "uk": "/brʌʃ/",
        "zh": "n. 刷子、畫筆、灌木叢、刷；vt. 刷、拂拭、刷掉、拂去",
        "unit": 17,
        "example": "Brush beaten egg over the pastry.",
        "exampleZh": "用刷子把打勻的雞蛋抹在油酥麵糰上。"
    },
    {
        "id": 30209,
        "en": "bucket",
        "kk": "[ˋbʌkət]",
        "uk": "/ˈbʌkɪt/",
        "zh": "n. 桶子、桶、一桶之量、挖鬥；v. 快速顛簸著行駛",
        "unit": 17,
        "example": "She ran hot water into the bucket.",
        "exampleZh": "她把熱水注入桶裡。"
    },
    {
        "id": 30210,
        "en": "buffet",
        "kk": "[ˋbʌfət]",
        "uk": "/ˈbʌfeɪ; ˈbʊfeɪ/",
        "zh": "n. 自助餐、快餐部、點心櫃、餐具架；vt. 連續猛擊、打擊、虐待、不公正地對待；adj. 自助的、自助餐的",
        "unit": 17,
        "example": "We had dinner at a buffet.",
        "exampleZh": "我們在自助餐廳吃了晚餐。"
    },
    {
        "id": 30211,
        "en": "bug",
        "kk": "[bʌɡ]",
        "uk": "/bʌɡ/",
        "zh": "n. 昆蟲、蟲子、小病、輕微的傳染病；vt. 煩擾、使惱怒、裝竊聽器、張大眼睛",
        "unit": 17,
        "example": "There is a small bug on the leaf.",
        "exampleZh": "葉子上有一隻小蟲子。"
    },
    {
        "id": 30212,
        "en": "build",
        "kk": "[bɪld]",
        "uk": "/bɪld/",
        "zh": "v. 建造、修建、發展、建立；n. 體形、體格、造型、構造",
        "unit": 17,
        "example": "They want to build a new house.",
        "exampleZh": "他們想建造一棟新房子。"
    },
    {
        "id": 30213,
        "en": "building",
        "kk": "[ˋbɪldɪŋ]",
        "uk": "/ˈbɪldɪŋ/",
        "zh": "n. 建築物、房屋、樓房、建築；v. 建造、發展、建立、逐漸增強",
        "unit": 17,
        "example": "The building soared above us.",
        "exampleZh": "這棟建築高聳在我們頭頂上。"
    },
    {
        "id": 30214,
        "en": "bun",
        "kk": "[bʌn]",
        "uk": "/bʌn/",
        "zh": "n. 圓麵包、小圓麵包、小長麵包、小圓甜蛋糕",
        "unit": 17,
        "example": "She wore her hair in a bun.",
        "exampleZh": "她把頭髮盤成髮髻。"
    },
    {
        "id": 30215,
        "en": "bundle",
        "kk": "[ˋbʌndəl]",
        "uk": "/ˈbʌnd(ə)l/",
        "zh": "n. 包、束、捆、非常；vt. 匆匆打發、亂塞、匆忙趕往、捆綁銷售",
        "unit": 17,
        "example": "He has a big bundle of wood.",
        "exampleZh": "他有一大捆木柴。"
    },
    {
        "id": 30216,
        "en": "burn",
        "kk": "[bɝn]",
        "uk": "/bɜːn/",
        "zh": "v. 燃燒、消耗、燒壞、燒燬；n. 燒傷、灼傷、燒痕、肌肉痠痛感",
        "unit": 17,
        "example": "Dry wood will burn very fast.",
        "exampleZh": "乾木柴會燃燒得非常快。"
    },
    {
        "id": 30217,
        "en": "burst",
        "kk": "[bɝst]",
        "uk": "/bɜːst/",
        "zh": "v. 爆炸、爆裂、脹開；n. 破裂、突發、迸發、爆裂",
        "unit": 17,
        "example": "The big box burst open at once.",
        "exampleZh": "那個大箱子突然爆開了。"
    },
    {
        "id": 30218,
        "en": "bus",
        "kk": "[bʌs]",
        "uk": "/bʌs/",
        "zh": "n. 公車、公共汽車、匯流排、母線；vt. 乘公共汽車、用公共汽車運送、收拾",
        "unit": 17,
        "example": "I take the yellow bus to school.",
        "exampleZh": "我搭乘黃色公車去上學。"
    },
    {
        "id": 30219,
        "en": "business",
        "kk": "[ˋbɪznəs]",
        "uk": "/ˈbɪznəs/",
        "zh": "n. 商業、買賣、生意、商務",
        "unit": 17,
        "example": "My uncle runs a small fruit business.",
        "exampleZh": "我叔叔做一門小水果生意。"
    },
    {
        "id": 30220,
        "en": "businessman",
        "kk": "[ˋbɪznə͵smæn]",
        "uk": "/ˈbɪznəsmæn/",
        "zh": "n. 商人、生意人",
        "unit": 17,
        "example": "My uncle is a rich businessman.",
        "exampleZh": "我叔叔是一位富有的商人。"
    },
    {
        "id": 30221,
        "en": "busy",
        "kk": "[ˋbɪzi]",
        "uk": "/ˈbɪzi/",
        "zh": "adj. 忙碌的、繁忙的、熱鬧的、佔線的；vt. 使忙於",
        "unit": 17,
        "example": "My mother is busy in the kitchen.",
        "exampleZh": "我媽媽在廚房裡忙碌著。"
    },
    {
        "id": 30222,
        "en": "but",
        "kk": "[bʌt]",
        "uk": "/bʌt; bət/",
        "zh": "conj. 但是、而、相反、可是；prep. 除了、除……外；adv. 僅僅、只是；n. 藉口、託詞",
        "unit": 17,
        "example": "He ran fast, but missed the train.",
        "exampleZh": "他跑得很快，但錯過了火車。"
    },
    {
        "id": 30223,
        "en": "butter",
        "kk": "[ˋbʌtɚ]",
        "uk": "/ˈbʌtə(r)/",
        "zh": "n. 奶油、黃油、牛油、水果醬；vt. 塗黃油於",
        "unit": 17,
        "example": "Please spread some butter on the bread.",
        "exampleZh": "請在麵包上塗抹一些奶油。"
    },
    {
        "id": 30224,
        "en": "butterfly",
        "kk": "[ˋbʌtɚf͵laɪ]",
        "uk": "/ˈbʌtəflaɪ/",
        "zh": "n. 蝴蝶、見異思遷的人、輕浮易變的人、蝶泳；v. 切成蝴蝶展翅狀、使成蝶形；adj. 蝴蝶狀",
        "unit": 17,
        "example": "A pretty butterfly is on the flower.",
        "exampleZh": "一隻美麗的蝴蝶停在花朵上。"
    },
    {
        "id": 30225,
        "en": "button",
        "kk": "[ˋbʌtən]",
        "uk": "/ˈbʌt(ə)n/",
        "zh": "n. 鈕扣、按鈕；v. 扣上鈕扣",
        "unit": 17,
        "example": "Press the blue button to start.",
        "exampleZh": "按下藍色按鈕即可開始。"
    },
    {
        "id": 30226,
        "en": "buy",
        "kk": "[baɪ]",
        "uk": "/baɪ/",
        "zh": "vt. 買、購買、能買、相信；n. 合算的東西、便宜貨、購買",
        "unit": 17,
        "example": "I want to buy some fresh apples.",
        "exampleZh": "我想買一些新鮮的蘋果。"
    },
    {
        "id": 30227,
        "en": "by",
        "kk": "[baɪ]",
        "uk": "/baɪ/",
        "zh": "prep. 由、被、透過、憑藉……；adv. 經過",
        "unit": 17,
        "example": "I go to school by bus everyday.",
        "exampleZh": "我每天搭乘公車去上學。"
    },
    {
        "id": 30228,
        "en": "cabbage",
        "kk": "[ˋkæbədʒ]",
        "uk": "/ˈkæbɪdʒ/",
        "zh": "n. 甘藍菜、捲心菜、洋白菜、捲心菜葉子",
        "unit": 17,
        "example": "I've always hated cabbage.",
        "exampleZh": "我從來都討厭吃捲心菜。"
    },
    {
        "id": 30229,
        "en": "cable",
        "kk": "[ˋkebəl]",
        "uk": "/ˈkeɪb(ə)l/",
        "zh": "n. 電纜、鋼纜、纜繩、電報；v. 給……安裝有線電視、給……發電報",
        "unit": 17,
        "example": "Rats had gnawed through the cable.",
        "exampleZh": "老鼠把電纜咬斷了。"
    },
    {
        "id": 30230,
        "en": "cafeteria",
        "kk": "[͵kæfəˋtɪriə]",
        "uk": "/ˌkæfəˈtɪəriə/",
        "zh": "n. 自助餐廳、自助食堂、自助餐館",
        "unit": 17,
        "example": "We eat lunch in the cafeteria.",
        "exampleZh": "我們在學生餐廳吃午餐。"
    },
    {
        "id": 30231,
        "en": "cage",
        "kk": "[kedʒ]",
        "uk": "/keɪdʒ/",
        "zh": "n. 籠子、鳥籠、監獄、電梯梯廂；v. 把…關進籠中、把……關進籠中、把……囚禁起來",
        "unit": 17,
        "example": "The yellow bird is in a cage.",
        "exampleZh": "那隻黃色的小鳥在籠子裡。"
    },
    {
        "id": 30232,
        "en": "cake",
        "kk": "[kek]",
        "uk": "/keɪk/",
        "zh": "n. 蛋糕、餅狀食物、餅、塊；v. 覆蓋、結成硬塊",
        "unit": 17,
        "example": "Mom baked a sweet birthday cake today.",
        "exampleZh": "媽媽今天烤了一個甜甜的生日蛋糕。"
    },
    {
        "id": 30233,
        "en": "calendar",
        "kk": "[ˋkæləndɚ]",
        "uk": "/ˈkælɪndə(r)/",
        "zh": "n. 日曆、日程表、記事錄、大事記；v. 把……排進日程表、把……記入記事錄",
        "unit": 17,
        "example": "Look at the calendar on the wall.",
        "exampleZh": "看一下牆上的日曆。"
    },
    {
        "id": 30234,
        "en": "call",
        "kk": "[kɔl]",
        "uk": "/kɔːl/",
        "zh": "v. 打電話、稱呼、叫喊、召集；n. 通話、電話、呼叫、號召",
        "unit": 17,
        "example": "Please call me after you get home.",
        "exampleZh": "你回到家後請打電話給我。"
    },
    {
        "id": 30235,
        "en": "calm",
        "kk": "[kɑm]",
        "uk": "/kɑːm/",
        "zh": "adj. 冷靜的、鎮靜的、沉著的、平靜的；n. 鎮靜、平和、寧靜、安靜；v. 平靜、使平靜、使鎮靜、冷靜下來",
        "unit": 17,
        "example": "Please stay calm and sit down.",
        "exampleZh": "請保持冷靜並坐下。"
    },
    {
        "id": 30236,
        "en": "camera",
        "kk": "[ˋkæmɚə]",
        "uk": "/ˈkæm(ə)rə/",
        "zh": "n. 照相機、攝影機",
        "unit": 17,
        "example": "He took photos with his new camera.",
        "exampleZh": "他用他的新相機拍照。"
    },
    {
        "id": 30237,
        "en": "camp",
        "kk": "[kæmp]",
        "uk": "/kæmp/",
        "zh": "n. 營地、兵營、軍營、度假營；vi. 露營、野營、據守、堅守；adj. 忸怩作態的、滑稽可笑的、做作的",
        "unit": 17,
        "example": "He spent two weeks at camp this summer.",
        "exampleZh": "今年夏天他在營地度過了兩週。"
    },
    {
        "id": 30238,
        "en": "campus",
        "kk": "[ˋkæmpəs]",
        "uk": "/ˈkæmpəs/",
        "zh": "n. 校園、大學生活、大學（學校、醫院等機構的）場地",
        "unit": 17,
        "example": "There are three dining halls on campus.",
        "exampleZh": "校園裡有三個餐廳。"
    },
    {
        "id": 30239,
        "en": "can",
        "kk": "[kæn]",
        "uk": "/kæn; kən/",
        "zh": "vt. 能、會、可以、應該；aux. 能夠；n. 罐、聽、金屬容器、塑膠容器",
        "unit": 17,
        "example": "He opened a cold can of juice.",
        "exampleZh": "他打開了一罐冰涼的果汁。"
    },
    {
        "id": 30240,
        "en": "cancel",
        "kk": "[ˋkænsəl]",
        "uk": "/ˈkæns(ə)l/",
        "zh": "vt. 取消、終止、廢除、蓋銷；n. 取消、撤銷、郵票登出章、戳記",
        "unit": 17,
        "example": "They had to cancel the outdoor party.",
        "exampleZh": "他們不得不取消那場戶外派對。"
    },
    {
        "id": 30241,
        "en": "cancer",
        "kk": "[ˋkænsɚ]",
        "uk": "/ˈkænsə(r)/",
        "zh": "n. 癌症、痼疾、社會惡習、巨蟹宮",
        "unit": 17,
        "example": "The doctor helped him treat cancer.",
        "exampleZh": "醫生幫助他治療癌症。"
    },
    {
        "id": 30242,
        "en": "candle",
        "kk": "[ˋkændəl]",
        "uk": "/ˈkænd(ə)l/",
        "zh": "n. 蠟燭、舊燭光、國際燭光；v. 對著光檢查",
        "unit": 17,
        "example": "I blew out the candle.",
        "exampleZh": "我吹滅了蠟燭。"
    },
    {
        "id": 30243,
        "en": "candy",
        "kk": "[ˋkændi]",
        "uk": "/ˈkændi/",
        "zh": "n. 糖果、巧克力、冰糖、中看不中用的東西；v. 把（水果）製成蜜餞、用糖煮、使結晶",
        "unit": 17,
        "example": "Who wants the last piece of candy?",
        "exampleZh": "誰想要最後一塊糖果？"
    },
    {
        "id": 30244,
        "en": "cap",
        "kk": "[kæp]",
        "uk": "/kæp/",
        "zh": "n. 便帽、蓋子、帽子、罩；vt. 覆蓋、戴帽、設上限、限額收取",
        "unit": 17,
        "example": "He wears a blue baseball cap today.",
        "exampleZh": "他今天戴著一頂藍色棒球帽。"
    },
    {
        "id": 30245,
        "en": "captain",
        "kk": "[ˋkæptən]",
        "uk": "/ˈkæptɪn/",
        "zh": "n. 隊長、首領、上尉、上校；vt. 率隊、指揮",
        "unit": 17,
        "example": "Tom is the captain of our team.",
        "exampleZh": "湯姆是我們隊上的隊長。"
    },
    {
        "id": 30246,
        "en": "car",
        "kk": "[kɑr]",
        "uk": "/kɑː(r)/",
        "zh": "n. 車子、汽車、轎車、車廂",
        "unit": 17,
        "example": "My dad drives a blue family car.",
        "exampleZh": "我爸爸開一輛藍色的家庭房車。"
    },
    {
        "id": 30247,
        "en": "card",
        "kk": "[kɑrd]",
        "uk": "/kɑːd/",
        "zh": "n. 卡片、紙牌、明信片、銀行卡",
        "unit": 17,
        "example": "Simon's a whiz at card games.",
        "exampleZh": "西蒙是紙牌遊戲高手。"
    },
    {
        "id": 30248,
        "en": "care",
        "kk": "[kɛr]",
        "uk": "/keə(r)/",
        "zh": "n. 照料、護理、小心；v. 關心、照顧、照料、在意",
        "unit": 17,
        "example": "Parents take good care of their children.",
        "exampleZh": "父母好好照顧他們的孩子。"
    },
    {
        "id": 30249,
        "en": "careful",
        "kk": "[ˋkɛrfəl]",
        "uk": "/ˈkeəf(ə)l/",
        "zh": "adj. 小心的、仔細的、謹慎的、周密的",
        "unit": 17,
        "example": "Please be careful with the hot water.",
        "exampleZh": "請小心熱水。"
    },
    {
        "id": 30250,
        "en": "careless",
        "kk": "[ˋkɛrləs]",
        "uk": "/ˈkeələs/",
        "zh": "adj. 粗心的、粗心大意的、疏忽的、自然的",
        "unit": 17,
        "example": "Do not be careless with fire.",
        "exampleZh": "用火時不要粗心大意。"
    },
    {
        "id": 30251,
        "en": "carpet",
        "kk": "[ˋkɑrpət]",
        "uk": "/ˈkɑːpɪt/",
        "zh": "n. 地毯、覆蓋地面的一層厚東西、人工球場、地毯衣蛾；vt. 給……鋪地毯、厚厚地鋪上、訓斥、斥責",
        "unit": 17,
        "example": "We rolled up the carpet.",
        "exampleZh": "我們把地毯捲了起來。"
    },
    {
        "id": 30252,
        "en": "carrot",
        "kk": "[ˋkærət]",
        "uk": "/ˈkærət/",
        "zh": "n. 胡蘿蔔、誘人的承諾、紅髮人",
        "unit": 17,
        "example": "Her carrot cake is divine.",
        "exampleZh": "她的胡蘿蔔餅好吃極了。"
    },
    {
        "id": 30253,
        "en": "carry",
        "kk": "[ˋkæri]",
        "uk": "/ˈkæri/",
        "zh": "v. 拿、運送、提、扛；n. 搬運、帶球跑、擲（擊）球距離、射程",
        "unit": 17,
        "example": "Can you carry this bag for me?",
        "exampleZh": "你能幫我提這個袋子嗎？"
    },
    {
        "id": 30254,
        "en": "cartoon",
        "kk": "[kɑrˋtun]",
        "uk": "/kɑːˈtuːn/",
        "zh": "n. 漫畫、諷刺畫、動畫片、卡通片；v. 給……畫漫畫、畫漫畫",
        "unit": 17,
        "example": "The children love to watch this cartoon.",
        "exampleZh": "小孩子喜歡看這部卡通。"
    },
    {
        "id": 30255,
        "en": "case",
        "kk": "[kes]",
        "uk": "/keɪs/",
        "zh": "n. 例子、具體情況、例項、病例；v. 圍繞、包蓋、探察、踩點兒",
        "unit": 17,
        "example": "He zipped his case shut.",
        "exampleZh": "他拉上箱子的拉鍊。"
    },
    {
        "id": 30256,
        "en": "cash",
        "kk": "[kæʃ]",
        "uk": "/kæʃ/",
        "zh": "n. 現金、現款、金錢、資金；vt. 兌現、支付現款",
        "unit": 17,
        "example": "You can pay with cash or card.",
        "exampleZh": "你可以用現金或卡片付款。"
    },
    {
        "id": 30257,
        "en": "cassette",
        "kk": "[kəˋsɛt]",
        "uk": "/kəˈset/",
        "zh": "n. 卡帶、磁帶盒、盒式磁帶、膠片盒",
        "unit": 17,
        "example": "My father kept an old music cassette.",
        "exampleZh": "我父親留著一卷老音樂卡帶。"
    },
    {
        "id": 30258,
        "en": "castle",
        "kk": "[ˋkæsəl]",
        "uk": "/ˈkɑːs(ə)l/",
        "zh": "n. 城堡、堡壘、車、豪宅；v. 王車易位、置……於城堡中",
        "unit": 17,
        "example": "The king lived in an old castle.",
        "exampleZh": "國王住在一座古老的城堡裡。"
    },
    {
        "id": 30259,
        "en": "cat",
        "kk": "[kæt]",
        "uk": "/kæt/",
        "zh": "n. 貓、貓科動物",
        "unit": 17,
        "example": "The cute cat sleeps on the sofa.",
        "exampleZh": "那隻可愛的貓睡在沙發上。"
    },
    {
        "id": 30260,
        "en": "catch",
        "kk": "[kætʃ]",
        "uk": "/kætʃ/",
        "zh": "v. 捕捉、接住、抓住、握住；n. 接、捕獲量、捕獲物",
        "unit": 17,
        "example": "Where did you catch the fish?",
        "exampleZh": "你在哪裡釣到的魚？"
    },
    {
        "id": 30261,
        "en": "cause",
        "kk": "[kɑz]",
        "uk": "/kɔːz/",
        "zh": "n. 原因、動機、事業、理由；vt. 引起、導致",
        "unit": 17,
        "example": "Bad food can cause a sick stomach.",
        "exampleZh": "不好的食物會引起胃部不適。"
    },
    {
        "id": 30262,
        "en": "ceiling",
        "kk": "[ˋsilɪŋ]",
        "uk": "/ˈsiːlɪŋ/",
        "zh": "n. 天花板、吊頂、上限、最高限度",
        "unit": 17,
        "example": "A bright lamp hangs from the ceiling.",
        "exampleZh": "一盞明亮的燈掛在天花板上。"
    },
    {
        "id": 30263,
        "en": "celebrate",
        "kk": "[ˋsɛlə͵bret]",
        "uk": "/ˈselɪbreɪt/",
        "zh": "vt. 慶祝、慶賀、讚揚、讚美",
        "unit": 17,
        "example": "I was in a mood to celebrate.",
        "exampleZh": "我很想慶祝一番。"
    },
    {
        "id": 30264,
        "en": "cell",
        "kk": "[sɛl]",
        "uk": "/sel/",
        "zh": "n. 細胞、小牢房、電解槽、電池",
        "unit": 17,
        "example": "Every living thing has many cells.",
        "exampleZh": "每個生物都有許多細胞。"
    },
    {
        "id": 30265,
        "en": "cent",
        "kk": "[sɛnt]",
        "uk": "/sent/",
        "zh": "n. 分、小錢、分毫、音分",
        "unit": 17,
        "example": "This sweet candy costs only fifty cents.",
        "exampleZh": "這顆甜糖果只要五十美分。"
    },
    {
        "id": 30266,
        "en": "center",
        "kk": "[ˋsɛntɚ]",
        "uk": "/ˈsentə(r)/",
        "zh": "n. 中心、中間、中心點、活動中心；v. 集中、把……放在中央、以……為中心、注意力集中於",
        "unit": 17,
        "example": "They live near the busy town center.",
        "exampleZh": "他們住在熱鬧的市中心附近。"
    },
    {
        "id": 30267,
        "en": "centimeter",
        "kk": "[ˋsɛntə͵mitɚ]",
        "uk": "/ˈsentɪmiːtə(r)/",
        "zh": "n. 公分、釐米",
        "unit": 17,
        "example": "The pencil is ten centimeters long.",
        "exampleZh": "這支鉛筆有十公分長。"
    },
    {
        "id": 30268,
        "en": "central",
        "kk": "[ˋsɛntrəl]",
        "uk": "/ˈsentrəl/",
        "zh": "adj. 中央的、中心的、起支配作用的、有控制力的；n. 活動中心",
        "unit": 17,
        "example": "The bank is in the central city area.",
        "exampleZh": "這家銀行位於中央市區。"
    },
    {
        "id": 30269,
        "en": "century",
        "kk": "[ˋsɛntʃɚi]",
        "uk": "/ˈsentʃəri/",
        "zh": "n. 世紀、一百年、一百分",
        "unit": 17,
        "example": "This bridge was built a century ago.",
        "exampleZh": "這座橋是一個世紀前建造的。"
    },
    {
        "id": 30270,
        "en": "cereal",
        "kk": "[ˋsɪriəl]",
        "uk": "/ˈsɪəriəl/",
        "zh": "n. 穀類食物、穀類植物、穀物；adj. 穀類的、穀類製成的",
        "unit": 17,
        "example": "I eat a bowl of cereal today.",
        "exampleZh": "我今天吃了一碗麥片。"
    },
    {
        "id": 30271,
        "en": "certain",
        "kk": "[ˋsɝtən]",
        "uk": "/ˈsɜːt(ə)n/",
        "zh": "adj. 確實的、必然的、必定的、確定的；pron. 某些、某幾個",
        "unit": 17,
        "example": "I am certain about this answer.",
        "exampleZh": "我對這個答案很確定。"
    },
    {
        "id": 30272,
        "en": "chair",
        "kk": "[tʃɛr]",
        "uk": "/tʃeə(r)/",
        "zh": "n. 椅子、主席、委員長、電椅；vt. 主席、主持、用椅子把某人高高抬起、使……入座",
        "unit": 17,
        "example": "Sit down on this wooden chair.",
        "exampleZh": "坐在這張木椅上。"
    },
    {
        "id": 30273,
        "en": "chalk",
        "kk": "[tʃɑk]",
        "uk": "/tʃɔːk/",
        "zh": "n. 白堊、粉筆、白堊地層、用粉筆劃的記號；vt. 用粉筆寫、用粉筆做記號、用白堊粉擦、把（酒錢）記於（某人）賬上",
        "unit": 17,
        "example": "You may chalk it on the wall.",
        "exampleZh": "你可以用粉筆把它記在牆上。"
    },
    {
        "id": 30274,
        "en": "chance",
        "kk": "[tʃæns]",
        "uk": "/tʃɑːns/",
        "zh": "n. 機會、時機、可能性、危險；vt. 偶然、碰巧、冒險做；adj. 偶然的、碰巧的",
        "unit": 17,
        "example": "Give him a chance to try again.",
        "exampleZh": "給他一個再試一次的機會。"
    },
    {
        "id": 30275,
        "en": "change",
        "kk": "[tʃendʒ]",
        "uk": "/tʃeɪndʒ/",
        "zh": "v. 改變、變化、更換、替換；n. 零錢、變化、變革、找回的錢",
        "unit": 17,
        "example": "You can change your shirt now.",
        "exampleZh": "你現在可以換襯衫了。"
    },
    {
        "id": 30276,
        "en": "channel",
        "kk": "[ˋtʃænəl]",
        "uk": "/ˈtʃæn(ə)l/",
        "zh": "n. 頻道、電影片道、管道、通道；vt. 引導、把……用於、輸送",
        "unit": 17,
        "example": "Change the TV channel right now.",
        "exampleZh": "現在立刻切換電視頻道。"
    },
    {
        "id": 30277,
        "en": "character",
        "kk": "[ˋkɛrɪktɚ]",
        "uk": "/ˈkærəktə(r)/",
        "zh": "n. 性格、品質、特色、特徵；v. 刻、寫、描述、使具有特徵",
        "unit": 17,
        "example": "She's a good judge of character.",
        "exampleZh": "她很善於鑑定別人的性格。"
    },
    {
        "id": 30278,
        "en": "charge",
        "kk": "[tʃɑrdʒ]",
        "uk": "/tʃɑːdʒ/",
        "zh": "v. 收費、索價、控告、充電；n. 費用、掌管、控告、電荷",
        "unit": 17,
        "example": "I must charge my phone now.",
        "exampleZh": "我現在必須給手機充電。"
    },
    {
        "id": 30279,
        "en": "chart",
        "kk": "[tʃɑrt]",
        "uk": "/tʃɑːt/",
        "zh": "n. 圖表、曲線圖、海圖、星點陣圖；vt. 繪製、記錄、跟蹤",
        "unit": 17,
        "example": "He copied the chart from a book.",
        "exampleZh": "他從一本書上複製了圖表。"
    },
    {
        "id": 30280,
        "en": "chase",
        "kk": "[tʃes]",
        "uk": "/tʃeɪs/",
        "zh": "v. 追逐、追趕、匆忙趕往、急奔；n. 追趕、追逐、爭取、努力獲得",
        "unit": 17,
        "example": "Dogs like to chase the little cats.",
        "exampleZh": "狗喜歡追逐小貓。"
    },
    {
        "id": 30281,
        "en": "cheap",
        "kk": "[tʃip]",
        "uk": "/tʃiːp/",
        "zh": "adj. 便宜的、廉價的、價低質劣的、小氣的；adv. 低價地、便宜地",
        "unit": 17,
        "example": "This blue shirt was very cheap today.",
        "exampleZh": "這件藍色襯衫今天非常便宜。"
    },
    {
        "id": 30282,
        "en": "cheat",
        "kk": "[tʃit]",
        "uk": "/tʃiːt/",
        "zh": "v. 欺騙、行騙、僥倖逃脫；n. 欺詐、欺騙、作弊、騙子",
        "unit": 17,
        "example": "He was a liar and a cheat.",
        "exampleZh": "他是一個說謊的人，一個騙子。"
    },
    {
        "id": 30283,
        "en": "check",
        "kk": "[tʃɛk]",
        "uk": "/tʃek/",
        "zh": "v. 檢查、核對、查看、克制；n. 檢查、支票、帳單",
        "unit": 17,
        "example": "Please check your answers before you leave.",
        "exampleZh": "離開前請先檢查你的答案。"
    },
    {
        "id": 30284,
        "en": "cheer",
        "kk": "[tʃɪr]",
        "uk": "/tʃɪə(r)/",
        "zh": "n. 歡呼聲、喝彩聲、加油口號；vt. 喝采、歡呼、喝彩、鼓勵",
        "unit": 17,
        "example": "A great cheer went up from the crowd.",
        "exampleZh": "觀眾爆發出一陣熱烈的歡呼聲。"
    },
    {
        "id": 30285,
        "en": "cheese",
        "kk": "[tʃiz]",
        "uk": "/tʃiːz/",
        "zh": "n. 起司、乾酪、乳酪、笑一笑；v. 激怒、使厭煩、停止",
        "unit": 17,
        "example": "There's mould on the cheese.",
        "exampleZh": "乾酪發黴了。"
    },
    {
        "id": 30286,
        "en": "chemical",
        "kk": "[ˋkɛməkəl]",
        "uk": "/ˈkemɪk(ə)l/",
        "zh": "adj. 化學的、與化學有關的；n. 化學品、化學制品、成癮的藥物",
        "unit": 17,
        "example": "Do not touch this bad chemical.",
        "exampleZh": "不要碰這種有害的化學品。"
    },
    {
        "id": 30287,
        "en": "chess",
        "kk": "[tʃɛs]",
        "uk": "/tʃes/",
        "zh": "n. 西洋棋、國際象棋",
        "unit": 17,
        "example": "Chess is not a game of chance.",
        "exampleZh": "國際象棋不是靠運氣取勝的。"
    },
    {
        "id": 30288,
        "en": "chicken",
        "kk": "[ˋtʃɪkən]",
        "uk": "/ˈtʃɪkɪn/",
        "zh": "n. 雞、雞肉、膽小鬼、懦夫；adj. 沒勇氣的、膽小的；v. 因害怕而放棄、膽怯",
        "unit": 17,
        "example": "We ate roast chicken for our dinner.",
        "exampleZh": "我們晚餐吃了烤雞肉。"
    },
    {
        "id": 30289,
        "en": "chief",
        "kk": "[tʃif]",
        "uk": "/tʃiːf/",
        "zh": "adj. 主要的、首要的、為首的、首席的；n. 首領、領袖、酋長、上段；adv. 主要地、首要地",
        "unit": 17,
        "example": "Who is the chief of the village?",
        "exampleZh": "誰是這個村莊的村長？"
    },
    {
        "id": 30290,
        "en": "child",
        "kk": "[tʃaɪld]",
        "uk": "/tʃaɪld/",
        "zh": "n. 小孩、兒童、子女、深受（某時期思想）影響的人",
        "unit": 17,
        "example": "Every child likes to play in parks.",
        "exampleZh": "每個小孩都喜歡在公園裡玩耍。"
    },
    {
        "id": 30291,
        "en": "childish",
        "kk": "[ˋtʃaɪldɪʃ]",
        "uk": "/ˈtʃaɪldɪʃ/",
        "zh": "adj. 幼稚的、孩子的、孩子般的、孩子氣的",
        "unit": 17,
        "example": "Stop crying and do not be so childish.",
        "exampleZh": "別哭了，不要這麼幼稚。"
    },
    {
        "id": 30292,
        "en": "childlike",
        "kk": "[ˋtʃaɪld͵laɪk]",
        "uk": "/ˈtʃaɪldlaɪk/",
        "zh": "adj. 天真的、天真爛漫的、孩子似的",
        "unit": 17,
        "example": "She smiled with pure and childlike joy.",
        "exampleZh": "她帶著純真且孩子般的喜悅微笑著。"
    },
    {
        "id": 30293,
        "en": "chin",
        "kk": "[tʃɪn]",
        "uk": "/tʃɪn/",
        "zh": "n. 下巴、頦；v. 擊打下巴、引體向上",
        "unit": 17,
        "example": "He put his hand on his chin.",
        "exampleZh": "他把手放在下巴上。"
    },
    {
        "id": 30294,
        "en": "chocolate",
        "kk": "[ˋtʃɔklət]",
        "uk": "/ˈtʃɒklət/",
        "zh": "n. 巧克力、朱古力、巧克力糖、夾心巧克力糖；adj. 巧克力的、巧克力味的",
        "unit": 17,
        "example": "She gave me a box of chocolate.",
        "exampleZh": "她給了我一盒巧克力。"
    },
    {
        "id": 30295,
        "en": "choice",
        "kk": "[tʃɔɪs]",
        "uk": "/tʃɔɪs/",
        "zh": "n. 選擇、抉擇、選擇的機會、選擇權；adj. 上等的、優質的、尖刻的、刻薄的",
        "unit": 17,
        "example": "You made a very good choice.",
        "exampleZh": "你做了一個很好的選擇。"
    },
    {
        "id": 30296,
        "en": "choose",
        "kk": "[tʃuz]",
        "uk": "/tʃuːz/",
        "zh": "vt. 選擇、挑選、情願、決定",
        "unit": 17,
        "example": "You can choose between red and blue.",
        "exampleZh": "你可以在紅色和藍色之間做選擇。"
    },
    {
        "id": 30297,
        "en": "chopstick",
        "kk": "[ˋtʃɑp͵stɪk]",
        "uk": "/ˈtʃɒpstɪk/",
        "zh": "n. 筷子",
        "unit": 17,
        "example": "He can use chopsticks.",
        "exampleZh": "傑位元會用筷子嗎？不，他不會。"
    },
    {
        "id": 30298,
        "en": "Christmas",
        "kk": "[ˋkrɪsməs]",
        "uk": "/ˈkrɪsməs/",
        "zh": "n. 耶誕節、聖誕節、聖誕節期間",
        "unit": 17,
        "example": "Christmas is still months away.",
        "exampleZh": "距離聖誕節還有幾個月。"
    },
    {
        "id": 30299,
        "en": "chubby",
        "kk": "[ˋtʃʌbi]",
        "uk": "/ˈtʃʌbi/",
        "zh": "adj. 豐滿的、圓胖的",
        "unit": 17,
        "example": "Do you think I'm too chubby?",
        "exampleZh": "你覺得我太胖了嗎？"
    },
    {
        "id": 30300,
        "en": "church",
        "kk": "[tʃɝtʃ]",
        "uk": "/tʃɜːtʃ/",
        "zh": "n. 教堂、禮拜儀式、教派、教會；v. 把（產婦等）帶到教堂做感恩禮拜、對……進行教會裁決；adj. 教會的、禮拜的",
        "unit": 17,
        "example": "She plays the organ in church.",
        "exampleZh": "她在教堂裡演奏風琴。"
    },
    {
        "id": 30301,
        "en": "claim",
        "kk": "[klem]",
        "uk": "/kleɪm/",
        "zh": "vt. 聲稱、斷言、索取、索要；n. 要求、聲稱、斷言、索要",
        "unit": 17,
        "example": "He claims that the bag is his.",
        "exampleZh": "他聲稱這個包包是他的。"
    },
    {
        "id": 30302,
        "en": "circle",
        "kk": "[ˋsɝkəl]",
        "uk": "/ˈsɜːk(ə)l/",
        "zh": "n. 圓圈、圓、圓形物、圈子；vt. 環繞、盤旋、環行、圍繞",
        "unit": 17,
        "example": "The children sat in a circle.",
        "exampleZh": "孩子們圍成一圈坐下。"
    },
    {
        "id": 30303,
        "en": "city",
        "kk": "[ˋsɪti]",
        "uk": "/ˈsɪti/",
        "zh": "n. 城市、都市、市民、全市居民",
        "unit": 17,
        "example": "Taipei is a very busy big city.",
        "exampleZh": "台北是一座非常繁忙的大城市。"
    },
    {
        "id": 30304,
        "en": "clap",
        "kk": "[klæp]",
        "uk": "/klæp/",
        "zh": "vt. 拍手、鼓掌、快速（或用力）放置、輕拍；n. 鼓掌、拍手、砰然巨響、霹靂聲",
        "unit": 17,
        "example": "We clap our hands to the song.",
        "exampleZh": "我們跟著這首歌拍手。"
    },
    {
        "id": 30305,
        "en": "class",
        "kk": "[klæs]",
        "uk": "/klɑːs/",
        "zh": "n. 班級、課、上課時間、課程；vt. 把……歸類、把……看作、把……編入某一班級、屬於……類；adj. 優秀的、出色的",
        "unit": 17,
        "example": "We have an English class this morning.",
        "exampleZh": "我們今天早上有一堂英文課。"
    },
    {
        "id": 30306,
        "en": "classic",
        "kk": "[ˋklæsɪk]",
        "uk": "/ˈklæsɪk/",
        "zh": "adj. 經典的、典型的、有代表性的、一流的；n. 古典作品、經典作品、傑作、傑出的事物",
        "unit": 17,
        "example": "This is a classic story for children.",
        "exampleZh": "這是一個給孩子看的經典故事。"
    },
    {
        "id": 30307,
        "en": "classmate",
        "kk": "[ˋklæ͵smet]",
        "uk": "/ˈklɑːsmeɪt/",
        "zh": "n. 同學、同班同學",
        "unit": 17,
        "example": "He is my good new classmate.",
        "exampleZh": "他是我的優秀新同學。"
    },
    {
        "id": 30308,
        "en": "classroom",
        "kk": "[ˋklæ͵srum]",
        "uk": "/ˈklɑːsruːm/",
        "zh": "n. 班級、教室、課堂",
        "unit": 17,
        "example": "We sit in our clean classroom.",
        "exampleZh": "我們坐在乾淨的教室裡。"
    },
    {
        "id": 30309,
        "en": "clay",
        "kk": "[kle]",
        "uk": "/kleɪ/",
        "zh": "n. 黏土、陶土、硬固泥地、紅土網球場；v. 用黏土處理",
        "unit": 17,
        "example": "The boy made a cup from clay.",
        "exampleZh": "那個男孩用黏土做了一個杯子。"
    },
    {
        "id": 30310,
        "en": "clean",
        "kk": "[klin]",
        "uk": "/kliːn/",
        "zh": "adj. 乾淨的、清潔的、清白的；vt. 打掃、清理、弄乾淨；adv. 完全地、徹底地",
        "unit": 17,
        "example": "Please clean your bedroom before you sleep.",
        "exampleZh": "睡覺前請把你的臥室打掃乾淨。"
    },
    {
        "id": 30311,
        "en": "clear",
        "kk": "[klɪr]",
        "uk": "/klɪə(r)/",
        "zh": "adj. 清楚的、清晰的、晴朗的、明顯的；v. 清除、清理、變清澈；adv. 完全地、清晰地",
        "unit": 17,
        "example": "The blue sky is clear today.",
        "exampleZh": "今天蔚藍的天空很晴朗。"
    },
    {
        "id": 30312,
        "en": "clerk",
        "kk": "[klɝk]",
        "uk": "/klɑːk/",
        "zh": "n. 店員、辦事員、職員、售貨員；vi. 當職員",
        "unit": 17,
        "example": "The clerk helped me find the book.",
        "exampleZh": "店員幫我找到了那本書。"
    },
    {
        "id": 30313,
        "en": "clever",
        "kk": "[ˋklɛvɚ]",
        "uk": "/ˈklevə(r)/",
        "zh": "adj. 聰明的、機靈的、機敏的、巧妙的",
        "unit": 17,
        "example": "'You are clever,' she gushed.",
        "exampleZh": "「你很聰明，」她滔滔不絕地說。"
    },
    {
        "id": 30314,
        "en": "climate",
        "kk": "[ˋklaɪmət]",
        "uk": "/ˈklaɪmət/",
        "zh": "n. 氣候、氣候區、氛圍、局勢",
        "unit": 17,
        "example": "The island has a warm climate.",
        "exampleZh": "這座島嶼氣候溫暖。"
    },
    {
        "id": 30315,
        "en": "climb",
        "kk": "[klaɪm]",
        "uk": "/klaɪm/",
        "zh": "v. 攀登、攀爬、爬升、升高；n. 攀登、爬升、攀登的地方、攀登物",
        "unit": 17,
        "example": "Nancy began to climb the stairs.",
        "exampleZh": "南希開始爬樓梯。"
    },
    {
        "id": 30316,
        "en": "clock",
        "kk": "[klɑk]",
        "uk": "/klɒk/",
        "zh": "n. 時鐘、時鐘的、考勤鍾、里程錶；vt. 達到、記錄下、記錄、打卡",
        "unit": 17,
        "example": "The clock struck the hour.",
        "exampleZh": "時鐘敲響了整點。"
    },
    {
        "id": 30317,
        "en": "close",
        "kk": "[klos]",
        "uk": "/kləʊz/",
        "zh": "vt. 關、關閉、結束；adj. 近的、接近的、親密的；adv. 接近地、緊密地",
        "unit": 17,
        "example": "Please close the front door right now.",
        "exampleZh": "請現在把前門關上。"
    },
    {
        "id": 30318,
        "en": "closet",
        "kk": "[ˋklɑzət]",
        "uk": "/ˈklɒzɪt/",
        "zh": "n. 櫥櫃、壁櫥、儲藏室、隱秘狀態；v. 把……關在房間、把……帶入房間密談；adj. 秘密的、不公開的",
        "unit": 17,
        "example": "It was in your closet.",
        "exampleZh": "在你的衣櫥裡。"
    },
    {
        "id": 30319,
        "en": "clothes",
        "kk": "[kloðz]",
        "uk": "/kləʊðz/",
        "zh": "n. 衣服、衣物、服裝、禮服",
        "unit": 17,
        "example": "She wears really funky clothes.",
        "exampleZh": "她穿的衣服真是時髦又獨特。"
    },
    {
        "id": 30320,
        "en": "cloud",
        "kk": "[klaʊd]",
        "uk": "/klaʊd/",
        "zh": "n. 雲、雲朵、雲狀物、一團；vt. 把……搞糊塗、使難以理解、破壞、給……蒙上陰影",
        "unit": 17,
        "example": "A dark cloud covered the bright sun.",
        "exampleZh": "一朵烏雲遮住了明亮的太陽。"
    },
    {
        "id": 30321,
        "en": "club",
        "kk": "[klʌb]",
        "uk": "/klʌb/",
        "zh": "n. 俱樂部、社團、活動室、俱樂部大樓；vt. 棒打、泡夜總會、組成俱樂部、募集",
        "unit": 17,
        "example": "She joined the art club at school.",
        "exampleZh": "她在學校加入了美術社。"
    },
    {
        "id": 30322,
        "en": "coach",
        "kk": "[kotʃ]",
        "uk": "/kəʊtʃ/",
        "zh": "n. 教練、私人教師、長途客車、長途汽車；vt. 訓練、指導、輔導、指示；adv. 乘（飛機、火車的）經濟艙地",
        "unit": 17,
        "example": "What you need is a drama coach.",
        "exampleZh": "你需要的是一位戲劇指導。"
    },
    {
        "id": 30323,
        "en": "coast",
        "kk": "[kost]",
        "uk": "/kəʊst/",
        "zh": "n. 海岸、海濱、滑行；vi. 滑行、毫不費力地做、輕鬆獲勝、不夠努力",
        "unit": 17,
        "example": "They live on the south coast.",
        "exampleZh": "他們住在南海岸。"
    },
    {
        "id": 30324,
        "en": "coat",
        "kk": "[kot]",
        "uk": "/kəʊt/",
        "zh": "n. 外套、大衣、短上衣、皮毛；vt. 給……塗上、用……覆蓋、給……穿外套",
        "unit": 17,
        "example": "Put on your warm coat in winter.",
        "exampleZh": "冬天時穿上你的保暖外套。"
    },
    {
        "id": 30325,
        "en": "cockroach",
        "kk": "[ˋkɑ͵krotʃ]",
        "uk": "/ˈkɒkrəʊtʃ/",
        "zh": "n. 蟑螂",
        "unit": 17,
        "example": "FIRST, catch your cockroach.",
        "exampleZh": "首先，你去抓住你的蟑螂。"
    },
    {
        "id": 30326,
        "en": "coffee",
        "kk": "[ˋkɑfi]",
        "uk": "/ˈkɒfi/",
        "zh": "n. 咖啡、一杯咖啡、咖啡豆或咖啡粉、咖啡色",
        "unit": 17,
        "example": "My parents drink hot coffee every morning.",
        "exampleZh": "我的父母每天早上喝熱咖啡。"
    },
    {
        "id": 30327,
        "en": "coin",
        "kk": "[kɔɪn]",
        "uk": "/kɔɪn/",
        "zh": "n. 硬幣、金屬貨幣、塔羅牌中的一種花色；vt. 創造新詞、首次使用、鑄幣、造幣",
        "unit": 17,
        "example": "I found a silver coin today.",
        "exampleZh": "我今天發現了一枚銀幣。"
    },
    {
        "id": 30328,
        "en": "coke",
        "kk": "[kok]",
        "uk": "/kəʊk/",
        "zh": "n. 可樂、可口可樂、一瓶（罐，杯）可口可樂、焦炭；v. 把（煤）煉成焦炭、使……麻醉、吸食可卡因",
        "unit": 17,
        "example": "My sister likes Coke.",
        "exampleZh": "我姐姐喜歡可樂。"
    },
    {
        "id": 30329,
        "en": "cold",
        "kk": "[kold]",
        "uk": "/kəʊld/",
        "zh": "adj. 冷的、寒冷的、涼的、冷淡的；n. 感冒、傷風、寒冷、低溫；adv. 突然地、完全地",
        "unit": 17,
        "example": "The winter water in the lake is cold.",
        "exampleZh": "冬天湖裡的水很冰冷。"
    },
    {
        "id": 30330,
        "en": "collect",
        "kk": "[kəˋlɛkt]",
        "uk": "/kəˈlekt/",
        "zh": "vt. 收集、聚集、聚積、採集；n. 短禱文、打贏的賭、贏錢的賭注；adj. 對方付通話費的；adv. 對方付通話費地",
        "unit": 17,
        "example": "I used to collect stamps.",
        "exampleZh": "我以前收集郵票。"
    },
    {
        "id": 30331,
        "en": "college",
        "kk": "[ˋkɑlɪdʒ]",
        "uk": "/ˈkɒlɪdʒ/",
        "zh": "n. 大學、專科學校、學院、分院",
        "unit": 17,
        "example": "His sister goes to art college.",
        "exampleZh": "他姐姐去讀藝術學院。"
    },
    {
        "id": 30332,
        "en": "color",
        "kk": "[ˋkʌlɚ]",
        "uk": "/ˈkʌlə(r)/",
        "zh": "n. 顏色、色彩、膚色、有色人種；vt. 給……著色、塗顏色、影響、左右；vi. 給……著色、塗顏色、變色、呈現顏色；v. 給……著色、塗顏色；adj. 彩色的、能產生彩色的",
        "unit": 17,
        "example": "What color is Paul's shirt?",
        "exampleZh": "保羅的球衣是什麼顏色的？"
    },
    {
        "id": 30333,
        "en": "colorful",
        "kk": "[ˋkʌlɚfəl]",
        "uk": "/ˈkʌləf(ə)l/",
        "zh": "adj. 多采多姿的、富有色彩的、色彩鮮豔的、華美的",
        "unit": 17,
        "example": "This is a more colorful scale.",
        "exampleZh": "這是一個更豐富多彩的音階。"
    },
    {
        "id": 30334,
        "en": "comb",
        "kk": "[kom]",
        "uk": "/kəʊm/",
        "zh": "n. 梳子、梳理、髮卡、梳狀物；v. 梳、梳理、認真搜尋、仔細搜查",
        "unit": 17,
        "example": "Your hair needs a good comb.",
        "exampleZh": "你的頭髮得好好梳理一下。"
    },
    {
        "id": 30335,
        "en": "come",
        "kk": "[kʌm]",
        "uk": "/kʌm/",
        "zh": "v. 來、來到、到達、來做；int. 好了、得啦；n. 精液、精子",
        "unit": 17,
        "example": "Please come to my house this evening.",
        "exampleZh": "請今天傍晚來我家。"
    },
    {
        "id": 30336,
        "en": "comfortable",
        "kk": "[ˋkʌmfɚtəbəl]",
        "uk": "/ˈkʌmftəb(ə)l/",
        "zh": "adj. 舒服的、令人舒適的、感到舒服的、安逸的；n. 溫暖的蓋被",
        "unit": 17,
        "example": "This soft bed is very comfortable.",
        "exampleZh": "這張柔軟的床非常舒適。"
    },
    {
        "id": 30337,
        "en": "command",
        "kk": "[kəˋmænd]",
        "uk": "/kəˈmɑːnd/",
        "zh": "vt. 命令、下令、統率、指揮；n. 命令、指示、指令、控制",
        "unit": 17,
        "example": "Begin when I give the command.",
        "exampleZh": "我發出命令時開始。"
    },
    {
        "id": 30338,
        "en": "comment",
        "kk": "[ˋkɑmɛnt]",
        "uk": "/ˈkɒment/",
        "zh": "n. 評論、意見、批評、指責；vt. 評論、發表意見、註解、把（部分程式）轉成註解",
        "unit": 17,
        "example": "He made a nice comment today.",
        "exampleZh": "他今天發表了很好的評論。"
    },
    {
        "id": 30339,
        "en": "common",
        "kk": "[ˋkɑmən]",
        "uk": "/ˈkɒmən/",
        "zh": "adj. 常見的、普通的、共同的、普遍的；n. 公共用地、公地、常識",
        "unit": 17,
        "example": "Dogs and cats are common family pets.",
        "exampleZh": "狗和貓是常見的家庭寵物。"
    },
    {
        "id": 30340,
        "en": "company",
        "kk": "[ˋkʌmpə͵ni]",
        "uk": "/ˈkʌmpəni/",
        "zh": "n. 公司、陪伴、同伴、賓客；v. 結交、交往、陪伴",
        "unit": 17,
        "example": "My father works for a big company.",
        "exampleZh": "我父親在一間大公司工作。"
    },
    {
        "id": 30341,
        "en": "compare",
        "kk": "[kəmˋpɛr]",
        "uk": "/kəmˈpeə(r)/",
        "zh": "v. 比較、對比、把……比作、相比；n. 比較",
        "unit": 17,
        "example": "Do not compare yourself to other people.",
        "exampleZh": "不要拿自己和別人做比較。"
    },
    {
        "id": 30342,
        "en": "complain",
        "kk": "[kəmˋplen]",
        "uk": "/kəmˈpleɪn/",
        "zh": "v. 抱怨、訴說、悲嘆、悲鳴",
        "unit": 17,
        "example": "Customers will complain if the food is bad.",
        "exampleZh": "如果食物不好吃，顧客會抱怨的。"
    },
    {
        "id": 30343,
        "en": "complaint",
        "kk": "[kəmˋplent]",
        "uk": "/kəmˈpleɪnt/",
        "zh": "n. 抱怨、投訴、不滿的緣由、抱怨的問題",
        "unit": 17,
        "example": "She made a complaint about noise.",
        "exampleZh": "她對噪音提出了抱怨。"
    },
    {
        "id": 30344,
        "en": "complete",
        "kk": "[kəmˋplit]",
        "uk": "/kəmˈpliːt/",
        "zh": "adj. 完全的、徹底的、全部的、完整的；vt. 使完整、使完美、填寫、完成",
        "unit": 17,
        "example": "Please complete your work before five o'clock.",
        "exampleZh": "請在五點以前完成你的工作。"
    },
    {
        "id": 30345,
        "en": "computer",
        "kk": "[kəmˋpjutɚ]",
        "uk": "/kəmˈpjuːtə(r)/",
        "zh": "n. 電腦、計算機、電子計算機",
        "unit": 17,
        "example": "My computer keeps going funny.",
        "exampleZh": "我的計算機老出故障。"
    },
    {
        "id": 30346,
        "en": "concern",
        "kk": "[kənˋsɝn]",
        "uk": "/kənˈsɜːn/",
        "zh": "n. 擔心、憂慮、使人擔憂的事物、關心；vt. 有關、關於、涉及、影響",
        "unit": 17,
        "example": "There is no cause for concern.",
        "exampleZh": "沒有理由擔憂。"
    },
    {
        "id": 30347,
        "en": "confident",
        "kk": "[ˋkɑnfədənt]",
        "uk": "/ˈkɒnfɪdənt/",
        "zh": "adj. 有自信的、自信的、充滿信心的、堅信的；n. 密友、知己",
        "unit": 17,
        "example": "Marina was a confident, happy child.",
        "exampleZh": "瑪麗娜是個自信、快樂的孩子。"
    },
    {
        "id": 30348,
        "en": "conflict",
        "kk": "[ˋkɑnflɪkt]",
        "uk": "/ˈkɒnflɪkt/",
        "zh": "n. 爭執、爭論、分歧、戰鬥；v. 衝突、牴觸",
        "unit": 17,
        "example": "They try to avoid conflict at school.",
        "exampleZh": "他們在學校儘量避免衝突。"
    },
    {
        "id": 30349,
        "en": "confuse",
        "kk": "[kənˋfjuz]",
        "uk": "/kənˈfjuːz/",
        "zh": "vt. 使迷惑、使糊塗、混淆、弄錯",
        "unit": 17,
        "example": "I always confuse my left with my right.",
        "exampleZh": "我總是混淆左右。"
    },
    {
        "id": 30350,
        "en": "congratulation",
        "kk": "[kən͵ætʃəˋleʃən]",
        "uk": "/kənˌɡrætʃəˈleɪʃ(ə)n/",
        "zh": "n. 道賀、恭喜、祝賀、恭賀",
        "unit": 17,
        "example": "I sent him a card of congratulation.",
        "exampleZh": "我寄了一張祝賀卡片給他。"
    },
    {
        "id": 30351,
        "en": "connect",
        "kk": "[kəˋnɛkt]",
        "uk": "/kəˈnekt/",
        "zh": "v. 連接、連線、相通、使接通",
        "unit": 17,
        "example": "Connect this blue wire to power.",
        "exampleZh": "把這條藍色電線接上電源。"
    },
    {
        "id": 30352,
        "en": "consider",
        "kk": "[kənˋsɪdɚ]",
        "uk": "/kənˈsɪdə(r)/",
        "zh": "vt. 考慮、斟酌、認為、視為",
        "unit": 17,
        "example": "Take your time to consider my offer.",
        "exampleZh": "慢慢考慮我的提議吧。"
    },
    {
        "id": 30353,
        "en": "considerate",
        "kk": "[kənˋsɪdɚət]",
        "uk": "/kənˈsɪdərət/",
        "zh": "adj. 體貼的、考慮周到的、小心的、謹慎的",
        "unit": 17,
        "example": "He is always kind and considerate.",
        "exampleZh": "他總是既親切又體貼。"
    },
    {
        "id": 30354,
        "en": "contact",
        "kk": "[ˋkɑn͵tækt]",
        "uk": "/ˈkɒntækt/",
        "zh": "n. 隱形眼鏡、聯絡、接觸、觸控；vt. 接觸、聯絡；adj. 供聯絡的、接觸性的、透過接觸而起作用的",
        "unit": 17,
        "example": "You can contact me by phone.",
        "exampleZh": "你可以透過電話聯絡我。"
    },
    {
        "id": 30355,
        "en": "continue",
        "kk": "[kənˋtɪnju]",
        "uk": "/kənˈtɪnjuː/",
        "zh": "v. 使繼續、繼續、延續、繼續說",
        "unit": 17,
        "example": "We will continue our lesson after lunch.",
        "exampleZh": "我們將在午餐後繼續上課。"
    },
    {
        "id": 30356,
        "en": "contract",
        "kk": "[ˋkɑn͵trækt]",
        "uk": "/ˈkɒntrækt; kənˈtrækt/",
        "zh": "n. 合同、契約、暗殺協議、定約墩數；v. 收縮、縮小、籤合同、訂立契約",
        "unit": 17,
        "example": "He mailed me the contract.",
        "exampleZh": "他把合同寄給了我。"
    },
    {
        "id": 30357,
        "en": "control",
        "kk": "[kənˋtrol]",
        "uk": "/kənˈtrəʊl/",
        "zh": "n. 控制權、支配權、控制能力、操縱裝置；vt. 控制、掌管、限制、限定",
        "unit": 17,
        "example": "He can control the toy car easily.",
        "exampleZh": "他能輕鬆控制這輛玩具車。"
    },
    {
        "id": 30358,
        "en": "convenient",
        "kk": "[kənˋvinjənt]",
        "uk": "/kənˈviːniənt/",
        "zh": "adj. 方便的、便利的、附近的、方便到達的",
        "unit": 17,
        "example": "Living near a train station is very convenient.",
        "exampleZh": "住在火車站附近非常便利。"
    },
    {
        "id": 30359,
        "en": "conversation",
        "kk": "[͵kɑnvɚˋseʃən]",
        "uk": "/ˌkɒnvəˈseɪʃ(ə)n/",
        "zh": "n. 對話、談話、交談、社交",
        "unit": 17,
        "example": "We had a long conversation last night.",
        "exampleZh": "我們昨晚進行了一次長談。"
    },
    {
        "id": 30360,
        "en": "cook",
        "kk": "[kʊk]",
        "uk": "/kʊk/",
        "zh": "n. 廚師、炊事員；vt. 煮、燒、烹飪、烹調",
        "unit": 17,
        "example": "My father likes to cook for us.",
        "exampleZh": "我爸爸喜歡為我們做飯。"
    },
    {
        "id": 30361,
        "en": "cookie",
        "kk": "[ˋkʊki]",
        "uk": "/ˈkʊki/",
        "zh": "n. 點心、曲奇餅、小甜餅、……樣的人",
        "unit": 17,
        "example": "She ate a sweet chocolate cookie today.",
        "exampleZh": "她今天吃了一塊香甜的巧克力餅乾。"
    },
    {
        "id": 30362,
        "en": "cool",
        "kk": "[kul]",
        "uk": "/kuːl/",
        "zh": "adj. 涼的、涼爽的、使人涼爽的、冷靜的；vt. 冷卻、變涼、冷靜下來、冷淡下來；adv. 冷靜地、鎮定地；n. 涼快、涼爽、平靜、鎮靜",
        "unit": 17,
        "example": "The weather is very cool in autumn.",
        "exampleZh": "秋天的天氣非常涼爽。"
    },
    {
        "id": 30363,
        "en": "copy",
        "kk": "[ˋkɑpi]",
        "uk": "/ˈkɒpi/",
        "zh": "vt. 拷貝、抄寫、謄寫、模仿；n. 副本、一本、一冊、一份",
        "unit": 17,
        "example": "Can you copy me in on your report?",
        "exampleZh": "你的報告給我抄送一份好嗎？"
    },
    {
        "id": 30364,
        "en": "corn",
        "kk": "[kɔrn]",
        "uk": "/kɔːn/",
        "zh": "n. 玉米、穀物、穀粒、雞眼；v. 醃、使成粒狀",
        "unit": 17,
        "example": "We bought sweet yellow corn for dinner.",
        "exampleZh": "我們買了香甜的黃玉米當晚餐。"
    },
    {
        "id": 30365,
        "en": "corner",
        "kk": "[ˋkɔrnɚ]",
        "uk": "/ˈkɔːnə(r)/",
        "zh": "n. 角落、角、嘴角、眼角；v. 將……逼入死角、使走投無路、硬要與某人說話、壟斷",
        "unit": 17,
        "example": "There is a chair in the corner.",
        "exampleZh": "角落裡有一張椅子。"
    },
    {
        "id": 30366,
        "en": "correct",
        "kk": "[kɚˋɛkt]",
        "uk": "/kəˈrekt/",
        "zh": "adj. 正確的、對的、無誤的、恰當的；vt. 改正、糾正、批改、矯正",
        "unit": 17,
        "example": "All of your answers are correct.",
        "exampleZh": "你所有的答案都是正確的。"
    },
    {
        "id": 30367,
        "en": "cost",
        "kk": "[kɑst]",
        "uk": "/kɒst/",
        "zh": "n. 費用、成本、價錢、代價；vt. 花費、價錢為、使喪失",
        "unit": 17,
        "example": "How much does this new book cost?",
        "exampleZh": "這本新書要花多少錢？"
    },
    {
        "id": 30368,
        "en": "cotton",
        "kk": "[ˋkɑtən]",
        "uk": "/ˈkɒtn/",
        "zh": "n. 棉花、棉、棉布、棉線；adj. 棉的、棉製的；v. 開始領會、開始明白、喜愛、喜歡",
        "unit": 17,
        "example": "The sheets are 100% pure cotton.",
        "exampleZh": "這些被單是100%的純棉。"
    },
    {
        "id": 30369,
        "en": "couch",
        "kk": "[kaʊtʃ]",
        "uk": "/kaʊtʃ/",
        "zh": "n. 長沙發、長榻、診察臺；v. 表達、措辭、躺下、躺臥",
        "unit": 17,
        "example": "The cat slept on the couch.",
        "exampleZh": "貓咪在沙發上睡著了。"
    },
    {
        "id": 30370,
        "en": "cough",
        "kk": "[kɑf]",
        "uk": "/kɒf/",
        "zh": "v. 咳嗽、發出咳嗽般的聲音、透露情報、供認；n. 咳嗽、咳、咳嗽聲",
        "unit": 17,
        "example": "He has a bad cough today.",
        "exampleZh": "他今天咳嗽得很厲害。"
    },
    {
        "id": 30371,
        "en": "count",
        "kk": "[kaʊnt]",
        "uk": "/kaʊnt/",
        "zh": "v. 計數、數數、點數目、把……算入；n. 計算、總數、數數、量的計數",
        "unit": 17,
        "example": "Her father was a Polish count.",
        "exampleZh": "她的父親是波蘭伯爵。"
    },
    {
        "id": 30372,
        "en": "country",
        "kk": "[ˋkʌntri]",
        "uk": "/ˈkʌntri/",
        "zh": "n. 國家、國、全國人民、全體國民；adj. 鄉下的、農村的、鄉村音樂的、祖國的",
        "unit": 17,
        "example": "I'm a simple country girl.",
        "exampleZh": "我是一個簡單的鄉村女孩。"
    },
    {
        "id": 30373,
        "en": "couple",
        "kk": "[ˋkʌpəl]",
        "uk": "/ˈkʌp(ə)l/",
        "zh": "n. 一對、夫妻、情侶、幾個；v. 連接、結合",
        "unit": 17,
        "example": "The young couple walked in the park.",
        "exampleZh": "那對年輕夫妻在公園散步。"
    },
    {
        "id": 30374,
        "en": "courage",
        "kk": "[ˋkɝədʒ]",
        "uk": "/ˈkʌrɪdʒ/",
        "zh": "n. 勇氣、膽量",
        "unit": 17,
        "example": "She had the courage to speak up.",
        "exampleZh": "她有勇氣把話說出來。"
    },
    {
        "id": 30375,
        "en": "course",
        "kk": "[kɔrs]",
        "uk": "/kɔːs/",
        "zh": "n. 課程、過程、道路、一道菜；v. 奔流、快速流動",
        "unit": 17,
        "example": "The course lasts five weeks.",
        "exampleZh": "課程為期五週。"
    },
    {
        "id": 30376,
        "en": "court",
        "kk": "[kɔrt]",
        "uk": "/kɔːt/",
        "zh": "n. 場地、法院、法庭、球場；vt. 奉承、討好、設法取得",
        "unit": 17,
        "example": "They play tennis on the court.",
        "exampleZh": "他們在球場打網球。"
    },
    {
        "id": 30377,
        "en": "cousin",
        "kk": "[ˋkʌzən]",
        "uk": "/ˈkʌzn/",
        "zh": "n. 表(堂)兄弟姊妹、堂（表）兄弟、堂（表）姐妹、遠房親戚",
        "unit": 17,
        "example": "My cousin will visit us next week.",
        "exampleZh": "我的表哥下週會來拜訪我們。"
    },
    {
        "id": 30378,
        "en": "cover",
        "kk": "[ˋkʌvɚ]",
        "uk": "/ˈkʌvə(r)/",
        "zh": "v. 覆蓋、遮蓋、包括、涉及；n. 覆蓋物、遮蓋物、封面、封底",
        "unit": 17,
        "example": "Snow will cover the ground in winter.",
        "exampleZh": "冬天積雪會覆蓋地面。"
    },
    {
        "id": 30379,
        "en": "cow",
        "kk": "[kaʊ]",
        "uk": "/kaʊ/",
        "zh": "n. 母牛、奶牛、雌性動物、討厭的人；vt. 恐嚇、威脅",
        "unit": 17,
        "example": "A mature cow has horns.",
        "exampleZh": "一頭成熟的牛有角。"
    },
    {
        "id": 30380,
        "en": "cowboy",
        "kk": "[ˋkaʊ͵bɔɪ]",
        "uk": "/ˈkaʊbɔɪ/",
        "zh": "n. 牛仔、牧牛工、奸商、不負責任的人；v. 當牛仔",
        "unit": 17,
        "example": "He shows up in jeans and cowboy boots.",
        "exampleZh": "他穿著牛仔褲和牛仔靴出現。"
    },
    {
        "id": 30381,
        "en": "crab",
        "kk": "[kræb]",
        "uk": "/kræb/",
        "zh": "n. 螃蟹、蟹肉、脾氣乖戾的人、易怒的人；v. 橫行、作蟹行、捕蟹、抓蟹",
        "unit": 17,
        "example": "We caught a small crab today.",
        "exampleZh": "我們今天抓到了一隻小螃蟹。"
    },
    {
        "id": 30382,
        "en": "crayon",
        "kk": "[ˋkre͵ɑn]",
        "uk": "/ˈkreɪən; ˈkreɪɒn/",
        "zh": "n. 蠟筆、彩色粉筆、彩色粉筆（或炭筆、蠟筆）畫；v. 用彩色蠟筆畫",
        "unit": 17,
        "example": "The child drew a fish with crayon.",
        "exampleZh": "那個孩子用蠟筆畫了一條魚。"
    },
    {
        "id": 30383,
        "en": "crazy",
        "kk": "[ˋkrezi]",
        "uk": "/ˈkreɪzi/",
        "zh": "adj. 瘋狂的、愚蠢的、古怪的、不理智的；n. 瘋子",
        "unit": 17,
        "example": "The fans went crazy after the win.",
        "exampleZh": "球隊獲勝後球迷們都瘋狂了。"
    },
    {
        "id": 30384,
        "en": "cream",
        "kk": "[krim]",
        "uk": "/kriːm/",
        "zh": "n. 奶油、乳脂、霜、膏；adj. 奶油色的、淡黃色的、米黃色的；v. 把……攪成奶油狀、輕易徹底打敗、狠撞、加奶油",
        "unit": 17,
        "example": "The sauce is mostly cream.",
        "exampleZh": "這沙司主要是奶油。"
    },
    {
        "id": 30385,
        "en": "create",
        "kk": "[kriˋet]",
        "uk": "/kriˈeɪt/",
        "zh": "vt. 創造、建立、設計、創作",
        "unit": 17,
        "example": "Artists create beautiful pictures with color.",
        "exampleZh": "藝術家用色彩創作出美麗的畫作。"
    },
    {
        "id": 30386,
        "en": "crime",
        "kk": "[kraɪm]",
        "uk": "/kraɪm/",
        "zh": "n. 罪、罪行、犯罪、犯罪活動；v. 指控……有罪、判……有罪",
        "unit": 17,
        "example": "It is a big crime to steal.",
        "exampleZh": "偷竊是一件嚴重的罪行。"
    },
    {
        "id": 30387,
        "en": "cross",
        "kk": "[krɔs]",
        "uk": "/krɒs/",
        "zh": "v. 穿越、橫越、越過、交叉；n. 十字形、十字架；adj. 生氣的、易怒的",
        "unit": 17,
        "example": "Look both ways before you cross.",
        "exampleZh": "過馬路前請看兩邊。"
    },
    {
        "id": 30388,
        "en": "crowd",
        "kk": "[kraʊd]",
        "uk": "/kraʊd/",
        "zh": "n. 人群、一夥人、百姓、凡夫俗子；v. 聚集、群集、靠近、盯著",
        "unit": 17,
        "example": "A large crowd waited for the train.",
        "exampleZh": "大批人群在等火車。"
    },
    {
        "id": 30389,
        "en": "cruel",
        "kk": "[ˋkruəl]",
        "uk": "/ˈkruːəl/",
        "zh": "adj. 殘忍的、殘酷的、引起痛苦的；v. 弄糟、使沒有成功可能",
        "unit": 17,
        "example": "Her eyes were cruel and hard.",
        "exampleZh": "她的目光殘忍而冷酷。"
    },
    {
        "id": 30390,
        "en": "cry",
        "kk": "[kraɪ]",
        "uk": "/kraɪ/",
        "zh": "v. 哭、哭泣、喊叫、呼喊；n. 叫喊、叫聲、哭聲、大喊",
        "unit": 17,
        "example": "The little baby began to cry loudly.",
        "exampleZh": "小嬰兒開始大聲哭泣。"
    },
    {
        "id": 30391,
        "en": "culture",
        "kk": "[ˋkʌltʃɚ]",
        "uk": "/ˈkʌltʃə(r)/",
        "zh": "n. 文化、文明、態度、習俗；v. 培育、養殖",
        "unit": 17,
        "example": "Food is part of our local culture.",
        "exampleZh": "食物是我們在地文化的一部分。"
    },
    {
        "id": 30392,
        "en": "cup",
        "kk": "[kʌp]",
        "uk": "/kʌp/",
        "zh": "n. 杯子、一杯、杯、量杯；vt. 做成杯狀、窩起手掌托住、為……拔火罐",
        "unit": 17,
        "example": "He drank a hot cup of tea.",
        "exampleZh": "他喝了一杯熱茶。"
    },
    {
        "id": 30393,
        "en": "cure",
        "kk": "[kjʊr]",
        "uk": "/kjʊə(r)/",
        "zh": "n. 藥物、療法、對策、措施；vt. 治癒、治好、解決、控制",
        "unit": 17,
        "example": "Good rest will cure your bad cold.",
        "exampleZh": "好好休息會治好你的重感冒。"
    },
    {
        "id": 30394,
        "en": "curious",
        "kk": "[ˋkjʊriəs]",
        "uk": "/ˈkjʊəriəs/",
        "zh": "adj. 好奇的、求知慾強的、稀奇的、不尋常的",
        "unit": 17,
        "example": "Children are always curious about new things.",
        "exampleZh": "小孩子總是對新事物感到好奇。"
    },
    {
        "id": 30395,
        "en": "current",
        "kk": "[ˋkɝənt]",
        "uk": "/ˈkʌrənt/",
        "zh": "adj. 現行的、當前的、通用的；n. 電流、水流、氣流、思潮",
        "unit": 17,
        "example": "This is our current school plan.",
        "exampleZh": "這是我們目前的學校計畫。"
    },
    {
        "id": 30396,
        "en": "curtain",
        "kk": "[ˋkɝtən]",
        "uk": "/ˈkɜːt(ə)n/",
        "zh": "n. 幕、窗簾、門簾、簾狀物；v. 給（窗戶或房間）裝上簾子、隔開、覆蓋",
        "unit": 17,
        "example": "She pulled the curtain aside.",
        "exampleZh": "她把窗簾拉向一邊。"
    },
    {
        "id": 30397,
        "en": "curve",
        "kk": "[kɝv]",
        "uk": "/kɜːv/",
        "zh": "n. 曲線、弧線、轉彎、彎道；v. 彎曲、呈曲線形；adj. 彎曲的、曲線形的",
        "unit": 17,
        "example": "Slow down at this sharp curve.",
        "exampleZh": "在這個急轉彎處減速。"
    },
    {
        "id": 30398,
        "en": "custom",
        "kk": "[ˋkʌstəm]",
        "uk": "/ˈkʌstəm/",
        "zh": "n. 習慣、風俗、習俗、光顧；adj. 定做的、量身設計的",
        "unit": 17,
        "example": "Giving gifts is a nice local custom.",
        "exampleZh": "送禮是當地的一項美好習俗。"
    },
    {
        "id": 30399,
        "en": "customer",
        "kk": "[ˋkʌstəmɚ]",
        "uk": "/ˈkʌstəmə(r)/",
        "zh": "n. 顧客、傢伙",
        "unit": 17,
        "example": "The customer called to cancel.",
        "exampleZh": "顧客打電話來取消了。"
    },
    {
        "id": 30400,
        "en": "cut",
        "kk": "[kʌt]",
        "uk": "/kʌt/",
        "zh": "v. 切、割、剪、削減；n. 切下的肉塊、份額、一份利潤、通道；adj. 縮減的、割下的、雕過的、閹割過的",
        "unit": 17,
        "example": "Use this knife to cut the apple.",
        "exampleZh": "用這把小刀來切蘋果。"
    },
    {
        "id": 30401,
        "en": "cute",
        "kk": "[kjut]",
        "uk": "/kjuːt/",
        "zh": "adj. 可愛的、漂亮的、性感迷人的、精明的",
        "unit": 17,
        "example": "Shame, she's so cute!",
        "exampleZh": "可惜了，她太可愛了！"
    },
    {
        "id": 30402,
        "en": "damage",
        "kk": "[ˋdæmədʒ]",
        "uk": "/ˈdæmɪdʒ/",
        "zh": "n. 損壞、損失、損害、傷害；vt. 損壞、損害、對……造成壞影響",
        "unit": 17,
        "example": "The strong storm caused much damage.",
        "exampleZh": "強烈的暴風雨造成了嚴重的損害。"
    },
    {
        "id": 30403,
        "en": "dance",
        "kk": "[dæns]",
        "uk": "/dɑːns/",
        "zh": "v. 跳舞、跳、跳躍、雀躍；n. 舞蹈、舞步、跳舞、舞會",
        "unit": 17,
        "example": "Come on Doreen, let's dance.",
        "exampleZh": "來吧，多琳，我們跳舞吧。"
    },
    {
        "id": 30404,
        "en": "danger",
        "kk": "[ˋdendʒɚ]",
        "uk": "/ˈdeɪndʒə(r)/",
        "zh": "n. 危險、風險、威脅、危險因素",
        "unit": 17,
        "example": "There is no danger in this park.",
        "exampleZh": "這座公園裡沒有危險。"
    },
    {
        "id": 30405,
        "en": "dangerous",
        "kk": "[ˋdendʒɚəs]",
        "uk": "/ˈdeɪndʒərəs/",
        "zh": "adj. 危險的、有威脅的",
        "unit": 17,
        "example": "The man is armed and dangerous.",
        "exampleZh": "該男子攜帶武器且危險。"
    },
    {
        "id": 30406,
        "en": "dark",
        "kk": "[dɑrk]",
        "uk": "/dɑːk/",
        "zh": "adj. 黑暗的、昏暗的、深色的、暗色的；n. 黑暗、暗處、暗色、陰影",
        "unit": 17,
        "example": "It gets very dark after seven o'clock.",
        "exampleZh": "七點過後天色就變得非常黑。"
    },
    {
        "id": 30407,
        "en": "data",
        "kk": "[ˋdetə]",
        "uk": "/ˈdeɪtə; ˈdɑːtə/",
        "zh": "n. 資料、資料資料",
        "unit": 17,
        "example": "He lost all of his test data.",
        "exampleZh": "他弄丟了他所有的測試資料。"
    },
    {
        "id": 30408,
        "en": "date",
        "kk": "[det]",
        "uk": "/deɪt/",
        "zh": "n. 日期、日子、約會、幽會；v. 註明日期、確定年代、談戀愛、約會",
        "unit": 17,
        "example": "What is the date of your birthday?",
        "exampleZh": "你的生日是哪一個日期？"
    },
    {
        "id": 30409,
        "en": "daughter",
        "kk": "[ˋdɔtɚ]",
        "uk": "/ˈdɔːtə(r)/",
        "zh": "n. 女兒、子代；adj. 女兒的、子代的",
        "unit": 17,
        "example": "Her daughter is eight years old now.",
        "exampleZh": "她的女兒現在八歲了。"
    },
    {
        "id": 30410,
        "en": "dawn",
        "kk": "[dɔn]",
        "uk": "/dɔːn/",
        "zh": "n. 黎明、拂曉、開端；vi. 破曉、開始明白",
        "unit": 17,
        "example": "The troops landed at dawn.",
        "exampleZh": "部隊已在黎明登陸。"
    },
    {
        "id": 30411,
        "en": "day",
        "kk": "[de]",
        "uk": "/deɪ/",
        "zh": "n. 一天、白晝、白天、工作日；adj. 白晝的、日間的、日間工作的、上白班的",
        "unit": 17,
        "example": "It was a sunny and warm day.",
        "exampleZh": "那是一個陽光明媚又溫暖的一天。"
    },
    {
        "id": 30412,
        "en": "dead",
        "kk": "[dɛd]",
        "uk": "/ded/",
        "zh": "adj. 死的、去世的、不再使用的、用盡的；adv. 恰好、精確地、完全地、全然地；n. 死人、死者、死、深夜",
        "unit": 17,
        "example": "The old tree in the park is dead.",
        "exampleZh": "公園裡的老樹已經枯死了。"
    },
    {
        "id": 30413,
        "en": "deaf",
        "kk": "[dɛf]",
        "uk": "/def/",
        "zh": "adj. 聾的、置若罔聞的",
        "unit": 17,
        "example": "He speaks with signs because he is deaf.",
        "exampleZh": "他因為耳聾所以用手語溝通。"
    },
    {
        "id": 30414,
        "en": "deal",
        "kk": "[dil]",
        "uk": "/diːl/",
        "zh": "n. 大量、交易、壞運氣、不公平的對待；v. 對付、應對（難纏的人，困難局面）、對待",
        "unit": 17,
        "example": "They shook on the deal.",
        "exampleZh": "他們對這筆交易感到震驚。"
    },
    {
        "id": 30415,
        "en": "dear",
        "kk": "[dɪr]",
        "uk": "/dɪə(r)/",
        "zh": "adj. 珍視的、親愛的、昂貴的；n. 親愛的；int. 啊、天吶",
        "unit": 17,
        "example": "My dear girl, you're wrong.",
        "exampleZh": "我親愛的女孩，你錯了。"
    },
    {
        "id": 30416,
        "en": "death",
        "kk": "[dɛθ]",
        "uk": "/deθ/",
        "zh": "n. 死亡、死、破滅、終止",
        "unit": 17,
        "example": "They were very sad at his death.",
        "exampleZh": "他們對他的去世感到非常難過。"
    },
    {
        "id": 30417,
        "en": "debate",
        "kk": "[dəˋbet]",
        "uk": "/dɪˈbeɪt/",
        "zh": "n. 討論、辯論；vt. 反覆思考、斟酌、討論、辯論",
        "unit": 17,
        "example": "They had a long debate in class.",
        "exampleZh": "他們在課堂上進行了長時間的辯論。"
    },
    {
        "id": 30418,
        "en": "December",
        "kk": "[dɪˋsɛmbɚ]",
        "uk": "/dɪˈsembə(r)/",
        "zh": "n. 十二月、公曆（西方曆法）中的第十二個月、也是一年的最後一個月",
        "unit": 17,
        "example": "Christmas comes in cold December every year.",
        "exampleZh": "聖誕節每年在寒冷的十二月到來。"
    },
    {
        "id": 30419,
        "en": "decide",
        "kk": "[͵dɪsˋaɪd]",
        "uk": "/dɪˈsaɪd/",
        "zh": "v. 決定、選定、下決心、斷定",
        "unit": 17,
        "example": "It's up to you to decide.",
        "exampleZh": "由您決定。"
    },
    {
        "id": 30420,
        "en": "decision",
        "kk": "[dɪˋsɪʒən]",
        "uk": "/dɪˈsɪʒ(ə)n/",
        "zh": "n. 決定、抉擇、判決、裁定",
        "unit": 17,
        "example": "You made a very wise decision.",
        "exampleZh": "你做了一個非常明智的決定。"
    },
    {
        "id": 30421,
        "en": "decorate",
        "kk": "[ˋdɛkɚ͵et]",
        "uk": "/ˈdekəreɪt/",
        "zh": "vt. 裝飾、裝點、粉刷、裝修",
        "unit": 17,
        "example": "We will decorate the house for Christmas.",
        "exampleZh": "我們將為聖誕節佈置屋子。"
    },
    {
        "id": 30422,
        "en": "decrease",
        "kk": "[dɪˋkris]",
        "uk": "/dɪˈkriːs/",
        "zh": "vt. 減少、減小、降低；n. 減少額、減小量、減少、降低",
        "unit": 17,
        "example": "People should decrease the amount of fat they eat.",
        "exampleZh": "人們應減少脂肪的攝入量。"
    },
    {
        "id": 30423,
        "en": "deep",
        "kk": "[dip]",
        "uk": "/diːp/",
        "zh": "adj. 深的、深厚的、低沉的；adv. 深深地、至深處；n. 深處、海洋",
        "unit": 17,
        "example": "The cold water in the river is deep.",
        "exampleZh": "河裡冰冷的水很深。"
    },
    {
        "id": 30424,
        "en": "deer",
        "kk": "[dɪr]",
        "uk": "/dɪə(r)/",
        "zh": "n. 鹿",
        "unit": 17,
        "example": "A wild deer ran through the forest.",
        "exampleZh": "一隻野生鹿奔跑穿過森林。"
    },
    {
        "id": 30425,
        "en": "degree",
        "kk": "[dɪˋɡri]",
        "uk": "/dɪˈɡriː/",
        "zh": "n. 程度、度、度數、學位課程",
        "unit": 17,
        "example": "He earned a new degree this year.",
        "exampleZh": "他今年獲得了一個新學位。"
    },
    {
        "id": 30426,
        "en": "delicious",
        "kk": "[dɪˋlɪʃəs]",
        "uk": "/dɪˈlɪʃəs/",
        "zh": "adj. 美味的、芬芳的、令人愉快的、宜人的",
        "unit": 17,
        "example": "He served up a delicious meal.",
        "exampleZh": "他為我們準備了一頓美味的飯菜。"
    },
    {
        "id": 30427,
        "en": "deliver",
        "kk": "[dɪˋlɪvɚ]",
        "uk": "/dɪˈlɪvə(r)/",
        "zh": "vt. 投遞、運送、履行、兌現",
        "unit": 17,
        "example": "They deliver fresh milk every morning.",
        "exampleZh": "他們每天早晨遞送新鮮牛奶。"
    },
    {
        "id": 30428,
        "en": "dentist",
        "kk": "[ˋdɛntəst]",
        "uk": "/ˈdentɪst/",
        "zh": "n. 牙醫、牙科醫生、牙醫診所",
        "unit": 17,
        "example": "I have to visit the dentist today.",
        "exampleZh": "我今天必須去看牙醫。"
    },
    {
        "id": 30429,
        "en": "deny",
        "kk": "[dɪˋnaɪ]",
        "uk": "/dɪˈnaɪ/",
        "zh": "vt. 否認、拒絕承認、拒絕給予",
        "unit": 17,
        "example": "He did not deny breaking the glass.",
        "exampleZh": "他沒有否認打破了玻璃杯。"
    },
    {
        "id": 30430,
        "en": "department",
        "kk": "[dɪˋpɑrtmənt]",
        "uk": "/dɪˈpɑːtmənt/",
        "zh": "n. 部門、部、司、系",
        "unit": 17,
        "example": "He moved to the sales department.",
        "exampleZh": "他調到了銷售部。"
    },
    {
        "id": 30431,
        "en": "depend",
        "kk": "[dɪˋpɛnd]",
        "uk": "/dɪˈpend/",
        "zh": "vi. 依賴、取決於、依靠、相信",
        "unit": 17,
        "example": "You can depend on me for help.",
        "exampleZh": "你可以依靠我來幫忙。"
    },
    {
        "id": 30432,
        "en": "describe",
        "kk": "[dɪˋskraɪb]",
        "uk": "/dɪˈskraɪb/",
        "zh": "vt. 描述、形容、做……運動、形成……形狀",
        "unit": 17,
        "example": "Can you describe him to me?",
        "exampleZh": "你能給我描述一下他嗎？"
    },
    {
        "id": 30433,
        "en": "desert",
        "kk": "[ˋdɛzɚt]",
        "uk": "/ˈdezət/",
        "zh": "n. 沙漠、荒漠、荒涼的地方、應得的賞罰；vt. 離棄、捨棄、拋棄、遺棄；adj. 無人居住的、荒涼的、像沙漠的",
        "unit": 17,
        "example": "Camels can walk in the hot desert.",
        "exampleZh": "駱駝可以在炎熱的沙漠中行走。"
    },
    {
        "id": 30434,
        "en": "design",
        "kk": "[dɪˋzaɪn]",
        "uk": "/dɪˈzaɪn/",
        "zh": "n. 設計、佈局、安排、設計藝術；vt. 設計、製圖、構思",
        "unit": 17,
        "example": "She's good at art and design.",
        "exampleZh": "她擅長美術和設計。"
    },
    {
        "id": 30435,
        "en": "desire",
        "kk": "[dɪˋzaɪɚ]",
        "uk": "/dɪˈzaɪə(r)/",
        "zh": "n. 願望、慾望、渴望、情慾；vt. 渴望、想望、要求、請求",
        "unit": 17,
        "example": "She has a strong desire to learn.",
        "exampleZh": "她有強烈的求知慾望。"
    },
    {
        "id": 30436,
        "en": "desk",
        "kk": "[dɛsk]",
        "uk": "/desk/",
        "zh": "n. 書桌、辦公桌、寫字檯、服務檯；adj. 書桌的、桌上適合用的",
        "unit": 17,
        "example": "Put your new books on the desk.",
        "exampleZh": "把你的新書放在書桌上。"
    },
    {
        "id": 30437,
        "en": "dessert",
        "kk": "[dɪˋzɝt]",
        "uk": "/dɪˈzɜːt/",
        "zh": "n. 甜點",
        "unit": 17,
        "example": "We ate sweet cake for dessert.",
        "exampleZh": "我們吃了甜蛋糕當點心。"
    },
    {
        "id": 30438,
        "en": "detect",
        "kk": "[dɪˋtɛkt]",
        "uk": "/dɪˈtekt/",
        "zh": "vt. 查出、查明、察覺、測出",
        "unit": 17,
        "example": "Dogs can detect smells from far away.",
        "exampleZh": "狗狗可以察覺到遠處的氣味。"
    },
    {
        "id": 30439,
        "en": "develop",
        "kk": "[dɪˋvɛləp]",
        "uk": "/dɪˈveləp/",
        "zh": "v. 發展、成長、發育、逐漸形成",
        "unit": 17,
        "example": "Kids develop new skills by reading books.",
        "exampleZh": "孩子們透過看書培養新技能。"
    },
    {
        "id": 30440,
        "en": "dial",
        "kk": "[ˋdaɪəl]",
        "uk": "/ˈdaɪəl/",
        "zh": "vt. 撥號；n. 鐘面、儀表盤、調節器、撥號盤",
        "unit": 17,
        "example": "Dial this number to call me.",
        "exampleZh": "撥打這個號碼就可以打給我。"
    },
    {
        "id": 30441,
        "en": "diamond",
        "kk": "[ˋdaɪmənd]",
        "uk": "/ˈdaɪmənd; ˈdaɪəmənd/",
        "zh": "n. 鑽石、菱形、方塊、內場",
        "unit": 17,
        "example": "She wore a shiny diamond ring.",
        "exampleZh": "她戴著一枚閃亮的鑽石戒指。"
    },
    {
        "id": 30442,
        "en": "diary",
        "kk": "[ˋdaɪɚi]",
        "uk": "/ˈdaɪəri/",
        "zh": "n. 日記、日程簿、專欄",
        "unit": 17,
        "example": "She writes in her diary every day.",
        "exampleZh": "她每天都在日記裡寫下生活點滴。"
    },
    {
        "id": 30443,
        "en": "dictionary",
        "kk": "[ˋdɪkʃə͵nɛri]",
        "uk": "/ˈdɪkʃən(ə)ri/",
        "zh": "n. 字典、詞典、專業詞典、術語大全",
        "unit": 17,
        "example": "Look up the word in the dictionary.",
        "exampleZh": "在字典裡查這個單字。"
    },
    {
        "id": 30444,
        "en": "die",
        "kk": "[daɪ]",
        "uk": "/daɪ/",
        "zh": "v. 死、死亡、消失、滅亡；n. 骰子、金屬模具、壓模",
        "unit": 17,
        "example": "Plants will die without any water.",
        "exampleZh": "植物沒有水就會死掉。"
    },
    {
        "id": 30445,
        "en": "diet",
        "kk": "[ˋdaɪət]",
        "uk": "/ˈdaɪət/",
        "zh": "n. 日常飲食、節食、規定飲食；vi. 節食",
        "unit": 17,
        "example": "A good diet has fresh fruit.",
        "exampleZh": "良好的飲食包含新鮮水果。"
    },
    {
        "id": 30446,
        "en": "difference",
        "kk": "[ˋdɪfɚəns]",
        "uk": "/ˈdɪfrəns/",
        "zh": "n. 差異、不同之處、差額、分歧；v. 區分",
        "unit": 17,
        "example": "Can you see the difference in them?",
        "exampleZh": "你能看出他們之間的差異嗎？"
    },
    {
        "id": 30447,
        "en": "different",
        "kk": "[ˋdɪfɚənt]",
        "uk": "/ˈdɪfrənt/",
        "zh": "adj. 不同的、分別的、各別的、與眾不同的",
        "unit": 17,
        "example": "The two brothers like different sports.",
        "exampleZh": "這兩兄弟喜歡不同的運動。"
    },
    {
        "id": 30448,
        "en": "difficult",
        "kk": "[ˋdɪfəkəlt]",
        "uk": "/ˈdɪfɪkəlt/",
        "zh": "adj. 困難的、費力的、不友好的、難對付的",
        "unit": 17,
        "example": "The exam was quite difficult.",
        "exampleZh": "考試相當難。"
    },
    {
        "id": 30449,
        "en": "difficulty",
        "kk": "[ˋdɪfəkəlti]",
        "uk": "/ˈdɪfɪkəlti/",
        "zh": "n. 困難、難題",
        "unit": 17,
        "example": "He had no difficulty with this job.",
        "exampleZh": "他做這份工作毫無困難。"
    },
    {
        "id": 30450,
        "en": "dig",
        "kk": "[dɪɡ]",
        "uk": "/dɪɡ/",
        "zh": "v. 挖、掘、挖掘、搜尋；n. 挖掘、輕碰、挖苦",
        "unit": 17,
        "example": "The dogs like to dig holes outside.",
        "exampleZh": "狗狗們喜歡在外面挖洞。"
    },
    {
        "id": 30451,
        "en": "diligent",
        "kk": "[ˋdɪlɪdʒənt]",
        "uk": "/ˈdɪlɪdʒənt/",
        "zh": "adj. 勤勉的、勤奮的、細緻的、潛心的",
        "unit": 17,
        "example": "The diligent boy read all day.",
        "exampleZh": "那個勤奮的男孩讀了一整天書。"
    },
    {
        "id": 30452,
        "en": "diplomat",
        "kk": "[ˋdɪplə͵mæt]",
        "uk": "/ˈdɪpləmæt/",
        "zh": "n. 外交官、外交家、有手腕的人、善交際的人",
        "unit": 17,
        "example": "Her father is an honest diplomat.",
        "exampleZh": "她的父親是一位正直的外交官。"
    },
    {
        "id": 30453,
        "en": "dinner",
        "kk": "[ˋdɪnɚ]",
        "uk": "/ˈdɪnə(r)/",
        "zh": "n. 晚餐、正餐、晚宴、宴會",
        "unit": 17,
        "example": "We eat hot dinner together every evening.",
        "exampleZh": "我們每天傍晚一起吃熱熱的晚餐。"
    },
    {
        "id": 30454,
        "en": "dinosaur",
        "kk": "[ˋdaɪnə͵sɔr]",
        "uk": "/ˈdaɪnəsɔː(r)/",
        "zh": "n. 恐龍、守舊落伍的人、過時落後的東西",
        "unit": 17,
        "example": "The boy loves to draw a dinosaur.",
        "exampleZh": "那個男孩很喜歡畫恐龍。"
    },
    {
        "id": 30455,
        "en": "direct",
        "kk": "[dɚˋɛkt]",
        "uk": "/dəˈrekt/",
        "zh": "adj. 直接的、徑直的、坦率的；vt. 指引、指導、管理、導演；adv. 直接地、徑直地、直達地",
        "unit": 17,
        "example": "Christopher will direct day-to-day operations.",
        "exampleZh": "克里斯托弗將指導日常運作。"
    },
    {
        "id": 30456,
        "en": "direction",
        "kk": "[dɚˋɛkʃən]",
        "uk": "/dəˈrekʃ(ə)n/",
        "zh": "n. 方向、方位、趨勢、動向",
        "unit": 17,
        "example": "Which direction are you facing?",
        "exampleZh": "你面朝哪個方向？"
    },
    {
        "id": 30457,
        "en": "dirty",
        "kk": "[ˋdɝti]",
        "uk": "/ˈdɜːti/",
        "zh": "adj. 骯髒的、髒的、下流的、卑鄙的；vt. 弄髒、使變髒",
        "unit": 17,
        "example": "Don't get your dress dirty!",
        "exampleZh": "別弄髒你的衣服！"
    },
    {
        "id": 30458,
        "en": "disagree",
        "kk": "[dɪsəˋɡri]",
        "uk": "/ˌdɪsəˈɡriː/",
        "zh": "vi. 不同意、有分歧、意見不合、不一致",
        "unit": 17,
        "example": "I disagree with what he said today.",
        "exampleZh": "我不同意他今天所說的話。"
    },
    {
        "id": 30459,
        "en": "disappear",
        "kk": "[͵dɪsəˋpɪr]",
        "uk": "/ˌdɪsəˈpɪə(r)/",
        "zh": "vi. 消失、不見、失蹤、丟失",
        "unit": 17,
        "example": "The stars disappear when the sun rises.",
        "exampleZh": "當太陽升起時星星便消失了。"
    },
    {
        "id": 30460,
        "en": "discover",
        "kk": "[dɪˋskʌvɚ]",
        "uk": "/dɪˈskʌvə(r)/",
        "zh": "vt. 發現、找到、瞭解到、發覺",
        "unit": 17,
        "example": "Children discover new things every day.",
        "exampleZh": "孩子們每天都會發現新事物。"
    },
    {
        "id": 30461,
        "en": "discuss",
        "kk": "[dɪˋskʌs]",
        "uk": "/dɪˈskʌs/",
        "zh": "vt. 討論、辯論、詳述、論述",
        "unit": 17,
        "example": "Let us discuss the plan after lunch.",
        "exampleZh": "我們午餐後再來討論這個計畫吧。"
    },
    {
        "id": 30462,
        "en": "discussion",
        "kk": "[dɪˋskʌʃən]",
        "uk": "/dɪˈskʌʃ(ə)n/",
        "zh": "n. 討論、論述、詳述、談話",
        "unit": 17,
        "example": "The time for discussion is past.",
        "exampleZh": "討論的時間已過。"
    },
    {
        "id": 30463,
        "en": "dish",
        "kk": "[dɪʃ]",
        "uk": "/dɪʃ/",
        "zh": "n. 盤子、碟、菜餚、一盤菜；vt. 把（食物）裝盤",
        "unit": 17,
        "example": "It lapped milk from a dish.",
        "exampleZh": "它從盤子裡舔牛奶。"
    },
    {
        "id": 30464,
        "en": "dishonest",
        "kk": "[dɪˋsɑnəst]",
        "uk": "/dɪsˈɒnɪst/",
        "zh": "adj. 不誠實的、不正直的、欺詐的、欺騙性的",
        "unit": 17,
        "example": "Telling lies shows that you are dishonest.",
        "exampleZh": "說謊表現出你是個不誠實的人。"
    },
    {
        "id": 30465,
        "en": "distance",
        "kk": "[ˋdɪstəns]",
        "uk": "/ˈdɪstəns/",
        "zh": "n. 遠處、疏遠、隔閡、差別；vt. 疏遠、遠離；adj. 遠距離的",
        "unit": 17,
        "example": "We saw a light in the distance.",
        "exampleZh": "我們看見遠處有一道光芒。"
    },
    {
        "id": 30466,
        "en": "distant",
        "kk": "[ˋdɪstənt]",
        "uk": "/ˈdɪstənt/",
        "zh": "adj. 遠的、遙遠的、久遠的、冷淡的",
        "unit": 17,
        "example": "He's a distant cousin of mine.",
        "exampleZh": "他是我的遠房表弟。"
    },
    {
        "id": 30467,
        "en": "divide",
        "kk": "[dɪˋvaɪd]",
        "uk": "/dɪˈvaɪd/",
        "zh": "vt. 分歧、不和、分開、分散；n. 分水嶺、差異、分歧、界限",
        "unit": 17,
        "example": "Please divide the cake into four parts.",
        "exampleZh": "請把蛋糕分成四等份。"
    },
    {
        "id": 30468,
        "en": "dizzy",
        "kk": "[ˋdɪzi]",
        "uk": "/ˈdɪzi/",
        "zh": "adj. 頭暈的、頭暈目眩的、使人眩暈的、使人感到變化太快的；v. 使眩暈、使暈頭轉向、使困惑、使思想混亂",
        "unit": 17,
        "example": "The fast ride made me feel dizzy.",
        "exampleZh": "快速的遊樂設施讓我感到頭暈目眩。"
    },
    {
        "id": 30469,
        "en": "doctor",
        "kk": "[ˋdɑktɚ]",
        "uk": "/ˈdɒktə(r)/",
        "zh": "n. 醫生、大夫、診所、博士；vt. 篡改、偽造、將有害物摻入（食物或飲料）中、閹割",
        "unit": 17,
        "example": "You should see a doctor soon.",
        "exampleZh": "你應該盡快去看醫生。"
    },
    {
        "id": 30470,
        "en": "dog",
        "kk": "[dɔɡ]",
        "uk": "/dɒɡ/",
        "zh": "n. 狗、犬、公狗、公狐；vt. 困擾、糾纏、跟蹤、尾隨",
        "unit": 17,
        "example": "My pet dog likes to run fast.",
        "exampleZh": "我的寵物狗喜歡跑得很快。"
    },
    {
        "id": 30471,
        "en": "doll",
        "kk": "[dɑl]",
        "uk": "/dɒl/",
        "zh": "n. 洋娃娃、玩偶、美人兒、大方的人；v. 把……打扮得花枝招展、在（需跳躍的地方或跑道上其他不需跑的部分）前放置障礙物",
        "unit": 17,
        "example": "The little girl hugged her new doll.",
        "exampleZh": "小女孩抱著她的新洋娃娃。"
    },
    {
        "id": 30472,
        "en": "dollar",
        "kk": "[ˋdɑlɚ]",
        "uk": "/ˈdɒlə(r)/",
        "zh": "n. 元、美元、一美元紙幣或硬幣、金錢",
        "unit": 17,
        "example": "This red pen costs only one dollar.",
        "exampleZh": "這支紅筆只要一美元。"
    },
    {
        "id": 30473,
        "en": "dolphin",
        "kk": "[ˋdɑlfən]",
        "uk": "/ˈdɒlfɪn/",
        "zh": "n. 海豚、鯕鰍、又稱鬼頭刀、系船柱",
        "unit": 17,
        "example": "A dolphin can swim very fast.",
        "exampleZh": "海豚可以游得非常快。"
    },
    {
        "id": 30474,
        "en": "donkey",
        "kk": "[ˋdɑŋki]",
        "uk": "/ˈdɒŋki/",
        "zh": "n. 驢、蠢人、傻瓜、發動機",
        "unit": 17,
        "example": "The donkey brayed and tried to bolt.",
        "exampleZh": "這頭驢嘶叫著，企圖掙脫韁繩。"
    },
    {
        "id": 30475,
        "en": "door",
        "kk": "[dɔr]",
        "uk": "/dɔː(r)/",
        "zh": "n. 門、門口、門道、建築；v. 車門撞擊",
        "unit": 17,
        "example": "Please do not lock the front door.",
        "exampleZh": "請不要把前門鎖上。"
    },
    {
        "id": 30476,
        "en": "dot",
        "kk": "[dɑt]",
        "uk": "/dɒt/",
        "zh": "n. 小圓點、點、點狀物、頓音記號；vt. 點、加點、散佈於、遍佈",
        "unit": 17,
        "example": "Draw a small black dot here.",
        "exampleZh": "在這裡畫一個黑色小圓點。"
    },
    {
        "id": 30477,
        "en": "double",
        "kk": "[ˋdʌbəl]",
        "uk": "/ˈdʌb(ə)l/",
        "zh": "adj. 兩倍的、雙的、供兩人用的、雙重的；adv. 兩倍地；v. 加倍、對摺、擊出二壘安打、兼任；n. 兩倍、兩倍量、酷似的人、替身演員；det. 是……兩倍；pron. 雙倍數",
        "unit": 17,
        "example": "He drank a double cup of milk.",
        "exampleZh": "他喝了一杯雙倍份量的牛奶。"
    },
    {
        "id": 30478,
        "en": "doubt",
        "kk": "[daʊt]",
        "uk": "/daʊt/",
        "zh": "vt. 懷疑、不確定、不信任；n. 懷疑、不確定",
        "unit": 17,
        "example": "I have no doubt about your skill.",
        "exampleZh": "我對你的技術毫無懷疑。"
    },
    {
        "id": 30479,
        "en": "doughnut",
        "kk": "[ˋdo͵nʌt]",
        "uk": "/ˈdəʊnʌt/",
        "zh": "n. 甜甜圈、炸麵包圈、環狀物、環形室",
        "unit": 17,
        "example": "Don't you like a doughnut?",
        "exampleZh": "你不喜歡甜甜圈嗎？"
    },
    {
        "id": 30480,
        "en": "dove",
        "kk": "[dʌv]",
        "uk": "/dʌv/",
        "zh": "n. 鴿子、鴿派人士、主和派人士、（基督教藝術作品和詩歌中的）聖靈；v. 跳水、潛水、突然大幅貶值、暴跌",
        "unit": 17,
        "example": "He wore a dove-grey suit.",
        "exampleZh": "他穿著一套鴿灰色的西裝。"
    },
    {
        "id": 30481,
        "en": "down",
        "kk": "[daʊn]",
        "uk": "/daʊn/",
        "zh": "adv. 朝下、向下、下、倒；adj. 在低處的、在下方的、向下的、便宜的；n. 羽絨、絨毛、軟毛、汗毛；prep. 向下、朝下、沿著、順；vt. 使掉落、喝下、吃下、擊敗",
        "unit": 17,
        "example": "Sit down on the green grass, please.",
        "exampleZh": "請在綠色的草地上坐下來。"
    },
    {
        "id": 30482,
        "en": "downstairs",
        "kk": "[ˋdaʊnˋstɛrz]",
        "uk": "/ˌdaʊnˈsteəz/",
        "zh": "adv. 順樓梯而下、往樓下、在樓下；adj. 在樓下的、在底樓的；n. 樓下、下面的幾層樓",
        "unit": 17,
        "example": "She ran downstairs to open the door.",
        "exampleZh": "她跑下樓去開門。"
    },
    {
        "id": 30483,
        "en": "downtown",
        "kk": "[ˋdaʊnˋtaʊn]",
        "uk": "/ˌdaʊnˈtaʊn/",
        "zh": "adj. 市中心的、商業區的；adv. 向（在）市中心、向（在）城鎮商業中心區；n. 城鎮的中心區、商業區、鬧市區",
        "unit": 17,
        "example": "We took a bus to go downtown.",
        "exampleZh": "我們搭公車去市中心。"
    },
    {
        "id": 30484,
        "en": "dozen",
        "kk": "[ˋdʌzən]",
        "uk": "/ˈdʌz(ə)n/",
        "zh": "n. 打、一打、十二個、大量",
        "unit": 17,
        "example": "We bought a dozen fresh eggs today.",
        "exampleZh": "我們今天買了一打新鮮雞蛋。"
    },
    {
        "id": 30485,
        "en": "drag",
        "kk": "[dræɡ]",
        "uk": "/dræɡ/",
        "zh": "v. 拖、拽、生拉硬拽、強迫；n. 乏味無聊的事、累贅、拖累、吸一口",
        "unit": 17,
        "example": "Do not drag your bag on the floor.",
        "exampleZh": "不要把你的包包拖在地板上。"
    },
    {
        "id": 30486,
        "en": "dragon",
        "kk": "[ˋdræɡən]",
        "uk": "/ˈdræɡən/",
        "zh": "n. 龍、西方的龍、惡龍、悍婦",
        "unit": 17,
        "example": "The dragon is a blue dragon.",
        "exampleZh": "這條龍是藍色的。"
    },
    {
        "id": 30487,
        "en": "drama",
        "kk": "[ˋdrɑmə]",
        "uk": "/ˈdrɑːmə/",
        "zh": "n. 戲劇、劇本、戲劇研究、戲劇藝術",
        "unit": 17,
        "example": "She likes to act in school drama.",
        "exampleZh": "她喜歡在學校話劇中演出。"
    },
    {
        "id": 30488,
        "en": "draw",
        "kk": "[drɔ]",
        "uk": "/drɔː/",
        "zh": "v. 平局、畫、繪畫、草擬；n. 平手、平局、抽彩、抽籤",
        "unit": 17,
        "example": "I like to draw trees and flowers.",
        "exampleZh": "我喜歡畫樹木和花朵。"
    },
    {
        "id": 30489,
        "en": "drawer",
        "kk": "[drɔr]",
        "uk": "/drɔː(r)/",
        "zh": "n. 抽屜、襯褲、內褲、製圖員",
        "unit": 17,
        "example": "She yanked open the drawer.",
        "exampleZh": "她猛地拉開了抽屜。"
    },
    {
        "id": 30490,
        "en": "dream",
        "kk": "[drim]",
        "uk": "/driːm/",
        "zh": "n. 夢、夢想、恍惚、出神；v. 做夢、夢見、夢想、想象；adj. 理想的、完美的",
        "unit": 17,
        "example": "I had a wonderful dream last night.",
        "exampleZh": "我昨晚做了一個美妙的夢。"
    },
    {
        "id": 30491,
        "en": "dress",
        "kk": "[drɛs]",
        "uk": "/dres/",
        "zh": "n. 連衣裙、套裙、服裝、衣服；v. 穿衣、給……穿衣服、穿正式服裝、清洗包紮",
        "unit": 17,
        "example": "She bought a pretty blue dress.",
        "exampleZh": "她買了一件漂亮的藍色洋裝。"
    },
    {
        "id": 30492,
        "en": "drink",
        "kk": "[drɪŋk]",
        "uk": "/drɪŋk/",
        "zh": "v. 喝、飲、喝酒、飽覽；n. 飲料、一杯、一口、一份",
        "unit": 17,
        "example": "This drink tastes like sherry.",
        "exampleZh": "這種飲料嘗起來像雪利酒。"
    },
    {
        "id": 30493,
        "en": "drive",
        "kk": "[draɪv]",
        "uk": "/draɪv/",
        "zh": "v. 駕車送、迫使、驅使、驅趕；n. 驅車出行、強烈慾望、本能需求、私人車道",
        "unit": 17,
        "example": "Can you drive me to the station?",
        "exampleZh": "你可以開車送我去車站嗎？"
    },
    {
        "id": 30494,
        "en": "driver",
        "kk": "[ˋdraɪvɚ]",
        "uk": "/ˈdraɪvə(r)/",
        "zh": "n. 駕駛人、司機、駕駛員、驅動程式",
        "unit": 17,
        "example": "The bus driver is very kind today.",
        "exampleZh": "這位公車司機今天非常親切。"
    },
    {
        "id": 30495,
        "en": "drop",
        "kk": "[drɑp]",
        "uk": "/drɒp/",
        "zh": "v. 投、丟、躺倒、剔除；n. 滴、少量、下降、落差",
        "unit": 17,
        "example": "Do not drop the glass on floor.",
        "exampleZh": "不要把玻璃杯掉在地板上。"
    },
    {
        "id": 30496,
        "en": "drug",
        "kk": "[drʌɡ]",
        "uk": "/drʌɡ/",
        "zh": "n. 藥物、藥品、毒品；vt. 下藥、使服麻醉藥",
        "unit": 17,
        "example": "The doctor gave me a safe drug.",
        "exampleZh": "醫生給了我一種安全的藥物。"
    },
    {
        "id": 30497,
        "en": "drum",
        "kk": "[drʌm]",
        "uk": "/drʌm/",
        "zh": "n. 鼓、大桶、敲擊聲、鼓狀物；vt. 不停地擊打、擊鼓、打鼓",
        "unit": 17,
        "example": "When you beat the drum, you feel good.",
        "exampleZh": "當你擊鼓時，你感覺良好。"
    },
    {
        "id": 30498,
        "en": "dry",
        "kk": "[draɪ]",
        "uk": "/draɪ/",
        "zh": "adj. 乾的、乾燥的、乾旱的、口渴的；v. 弄乾、變乾、擦乾",
        "unit": 17,
        "example": "Please dry your wet hands now.",
        "exampleZh": "請現在把濕的手擦乾。"
    },
    {
        "id": 30499,
        "en": "dryer",
        "kk": "[ˋdraɪɚ]",
        "uk": "/ˈdraɪə(r)/",
        "zh": "n. 烘乾機、乾燥劑、催幹劑",
        "unit": 17,
        "example": "Do you have a hair dryer?",
        "exampleZh": "你有n. 烘乾機嗎？"
    },
    {
        "id": 30500,
        "en": "duck",
        "kk": "[dʌk]",
        "uk": "/dʌk/",
        "zh": "n. 鴨子、鴨肉、母鴨、零分；v. 逃避、迴避、躲避、把（人）按入水中",
        "unit": 17,
        "example": "A yellow duck swam in the pond.",
        "exampleZh": "一隻黃色鴨子在池塘裡游泳。"
    },
    {
        "id": 30501,
        "en": "dumb",
        "kk": "[dʌm]",
        "uk": "/dʌm/",
        "zh": "adj. 笨的、啞的、不能說話的、一時說不出話的；v. 使通俗化、使變啞、使沉默",
        "unit": 17,
        "example": "That was a pretty dumb thing to do.",
        "exampleZh": "這是一件非常愚蠢的事。"
    },
    {
        "id": 30502,
        "en": "dumpling",
        "kk": "[ˋdʌmplɪŋ]",
        "uk": "/ˈdʌmplɪŋ/",
        "zh": "n. 餃子、湯糰、水果布丁、水果餡點心",
        "unit": 17,
        "example": "I ate a hot pork dumpling.",
        "exampleZh": "我吃了一個熱呼呼的豬肉水餃。"
    },
    {
        "id": 30503,
        "en": "during",
        "kk": "[ˋdʊrɪŋ]",
        "uk": "/ˈdjʊərɪŋ/",
        "zh": "prep. 在……期間、在……期間的某個時候",
        "unit": 17,
        "example": "We stayed at home during the rain.",
        "exampleZh": "下雨期間我們待在家裡。"
    },
    {
        "id": 30504,
        "en": "duty",
        "kk": "[ˋduti]",
        "uk": "/ˈdjuːti/",
        "zh": "n. 義務、責任、上班、值班",
        "unit": 17,
        "example": "It is my duty to help you.",
        "exampleZh": "幫助你是我的職責。"
    },
    {
        "id": 30505,
        "en": "each",
        "kk": "[itʃ]",
        "uk": "/iːtʃ/",
        "zh": "det. 每個、每、各、每一；pron. 各自、每個、各個；adj. 每個的、各自的；adv. 給每個、對各個",
        "unit": 17,
        "example": "Each student has a new English book.",
        "exampleZh": "每個學生都有一本新的英文書。"
    },
    {
        "id": 30506,
        "en": "eagle",
        "kk": "[ˋiɡəl]",
        "uk": "/ˈiːɡ(ə)l/",
        "zh": "n. 鷹、雕、鷹擊；v. 在（某洞）上打出老鷹球",
        "unit": 17,
        "example": "A large eagle flew high above us.",
        "exampleZh": "一隻大老鷹在我們上方高高飛翔。"
    },
    {
        "id": 30507,
        "en": "ear",
        "kk": "[ir]",
        "uk": "/ɪə(r)/",
        "zh": "n. 耳朵、靈敏的聽力、傾聽、穗",
        "unit": 17,
        "example": "The rabbit has two long soft ears.",
        "exampleZh": "這隻兔子有兩隻長長又柔軟的耳朵。"
    },
    {
        "id": 30508,
        "en": "early",
        "kk": "[ˋɝli]",
        "uk": "/ˈɜːli/",
        "zh": "adj. 早的、早期的、提早的；adv. 早、提早、在初期",
        "unit": 17,
        "example": "We didn't leave early enough.",
        "exampleZh": "我們離開得不夠早。"
    },
    {
        "id": 30509,
        "en": "earn",
        "kk": "[ɝn]",
        "uk": "/ɜːn/",
        "zh": "vt. 獲得、賺得、掙錢、贏得",
        "unit": 17,
        "example": "'How much (money) does she earn?",
        "exampleZh": "“她賺多少錢？”"
    },
    {
        "id": 30510,
        "en": "earring",
        "kk": "[ˋɪrɪŋ]",
        "uk": "/ˈɪərɪŋ/",
        "zh": "n. 耳環、耳飾",
        "unit": 17,
        "example": "She wore a shiny gold earring.",
        "exampleZh": "她戴著一隻閃亮的金耳環。"
    },
    {
        "id": 30511,
        "en": "earth",
        "kk": "[ɝθ]",
        "uk": "/ɜːθ/",
        "zh": "n. 地球、世界、陸地、地面；v. 把（電線）接地、用土掩蓋、追趕入洞穴",
        "unit": 17,
        "example": "The earth goes around the sun every year.",
        "exampleZh": "地球每年繞著太陽運轉。"
    },
    {
        "id": 30512,
        "en": "ease",
        "kk": "[iz]",
        "uk": "/iːz/",
        "zh": "n. 容易、舒適、自在；vt. 減輕、緩和、放鬆、緩緩移動",
        "unit": 17,
        "example": "This should help ease the pain.",
        "exampleZh": "這應該有助於減輕疼痛。"
    },
    {
        "id": 30513,
        "en": "east",
        "kk": "[ist]",
        "uk": "/iːst/",
        "zh": "n. 東、東部、東方（指亞洲南部和東部，包括印度、中國和日本）；adj. 東邊的、近東的、面朝東的、東部的；adv. 向東、在東方",
        "unit": 17,
        "example": "They live on the east coast.",
        "exampleZh": "他們住在東海岸。"
    },
    {
        "id": 30514,
        "en": "eastern",
        "kk": "[ˋistɚn]",
        "uk": "/ˈiːstən/",
        "zh": "adj. 東方的、向東的、朝東的",
        "unit": 17,
        "example": "The sun rose over the eastern hills.",
        "exampleZh": "太陽從東邊的山丘上升起。"
    },
    {
        "id": 30515,
        "en": "easy",
        "kk": "[ˋizi]",
        "uk": "/ˈiːzi/",
        "zh": "adj. 容易的、不費力的、舒適的、自如的；adv. 小心、容易地、悠閒地",
        "unit": 17,
        "example": "The problem is anything but easy.",
        "exampleZh": "問題絕非易事。"
    },
    {
        "id": 30516,
        "en": "eat",
        "kk": "[it]",
        "uk": "/iːt/",
        "zh": "v. 吃、吃飯、侵蝕、損耗；n. 少量食物、點心",
        "unit": 17,
        "example": "We eat fresh fruit every single day.",
        "exampleZh": "我們每一天都吃新鮮水果。"
    },
    {
        "id": 30517,
        "en": "edge",
        "kk": "[ɛdʒ]",
        "uk": "/edʒ/",
        "zh": "n. 邊緣、邊、鋒、刃；vi. 緩慢地移動、給……加邊、險勝、用球拍邊擊球",
        "unit": 17,
        "example": "Do not sit near the water edge.",
        "exampleZh": "不要坐在水邊緣附近。"
    },
    {
        "id": 30518,
        "en": "education",
        "kk": "[͵ɛdʒəˋkeʃən]",
        "uk": "/ˌedʒuˈkeɪʃ(ə)n/",
        "zh": "n. 教育、培養、訓練、教育機構",
        "unit": 17,
        "example": "Good education gives children a bright future.",
        "exampleZh": "良好的教育給予孩子光明的未來。"
    },
    {
        "id": 30519,
        "en": "effect",
        "kk": "[ɪˋfɛkt]",
        "uk": "/ɪˈfekt/",
        "zh": "n. 影響、作用、效果、印象；vt. 實現、引起",
        "unit": 17,
        "example": "The cold pill had a quick effect.",
        "exampleZh": "這顆感冒藥見效很快。"
    },
    {
        "id": 30520,
        "en": "effort",
        "kk": "[ˋɛfɚt]",
        "uk": "/ˈefət/",
        "zh": "n. 努力、艱難的嘗試、力氣、精力",
        "unit": 17,
        "example": "You should put more effort into your work.",
        "exampleZh": "你應該更加努力地工作。"
    },
    {
        "id": 30521,
        "en": "egg",
        "kk": "[ɛɡ]",
        "uk": "/eɡ/",
        "zh": "n. 蛋、卵、雞蛋、卵子；v. 煽動、慫恿",
        "unit": 17,
        "example": "I eat a boiled egg every morning.",
        "exampleZh": "我每天早上吃一顆水煮蛋。"
    },
    {
        "id": 30522,
        "en": "eight",
        "kk": "[et]",
        "uk": "/eɪt/",
        "zh": "num. 八、八個、第八、八歲；adj. 八的；n. 八、八人划船隊",
        "unit": 17,
        "example": "My younger sister is eight years old.",
        "exampleZh": "我的妹妹今年八歲。"
    },
    {
        "id": 30523,
        "en": "eighteen",
        "kk": "[eˋtin]",
        "uk": "/ˌeɪˈtiːn/",
        "zh": "n. 十八、十八個；adj. 十八個的、十八的；num. 十八",
        "unit": 17,
        "example": "His boat is an eighteen-footer.",
        "exampleZh": "他的小船長十八英尺。"
    },
    {
        "id": 30524,
        "en": "eighty",
        "kk": "[ˋeti]",
        "uk": "/ˈeɪti/",
        "zh": "n. 八十、八十歲、八十年代；adj. 八十的、八十個的、八十歲的；num. 八十",
        "unit": 17,
        "example": "My grandfather is eighty years old now.",
        "exampleZh": "我祖父現在已經八十歲了。"
    },
    {
        "id": 30525,
        "en": "either",
        "kk": "[ˋiðɚ]",
        "uk": "/ˈaɪðə(r)/",
        "zh": "conj. 或者、要麼、兩者都、既；pron. 任意一個、兩者都；adv. 也、亦、而且、還；det. 任一、每個、各方；adj. 每個的、各方的",
        "unit": 17,
        "example": "Pete can't go and I can't either.",
        "exampleZh": "皮特不能去，我也不能。"
    },
    {
        "id": 30526,
        "en": "elder",
        "kk": "[ˋɛldɚ]",
        "uk": "/ˈeldə(r)/",
        "zh": "adj. 年齡較大的、資格老的；n. 長者、長輩、元老、長老",
        "unit": 17,
        "example": "We should be polite to our elders.",
        "exampleZh": "我們應該對長輩有禮貌。"
    },
    {
        "id": 30527,
        "en": "elect",
        "kk": "[ɪˋlɛkt]",
        "uk": "/ɪˈlekt/",
        "zh": "vt. 選舉、選擇、挑選（某人）；adj. 候任的、選中的、卓越的、蒙上帝挑選（而得救）的；n. 上帝的選民、特權階層",
        "unit": 17,
        "example": "The people will elect a new leader.",
        "exampleZh": "人民將會選出一位新領袖。"
    },
    {
        "id": 30528,
        "en": "elephant",
        "kk": "[ˋɛləfənt]",
        "uk": "/ˈelɪfənt; ˈeləfənt/",
        "zh": "n. 大象、象、大號圖畫紙",
        "unit": 17,
        "example": "The wild elephant is a large animal.",
        "exampleZh": "野生大象是一種大型動物。"
    },
    {
        "id": 30529,
        "en": "eleven",
        "kk": "[ɪˋlɛvən]",
        "uk": "/ɪˈlev(ə)n/",
        "zh": "num. 十一、十一個；n. 十一、十一個、由十一人組成的運動隊；adj. 十一的、十一個的",
        "unit": 17,
        "example": "He has eleven books at home.",
        "exampleZh": "他在家裡有十一本書。"
    },
    {
        "id": 30530,
        "en": "electric",
        "kk": "[ɪˋlɛktrɪk]",
        "uk": "/ɪˈlektrɪk/",
        "zh": "adj. 電的、令人激動的、電子擴音的；n. 電路系統、電氣交通工具",
        "unit": 17,
        "example": "My dad drives an electric car.",
        "exampleZh": "我爸爸開電動車。"
    },
    {
        "id": 30531,
        "en": "else",
        "kk": "[ɛls]",
        "uk": "/els/",
        "zh": "adv. 其他、此外、否則、要不然；adj. 其他的、另外的",
        "unit": 17,
        "example": "What else do you want to buy?",
        "exampleZh": "你還想買什麼別的東西？"
    },
    {
        "id": 30532,
        "en": "embarrass",
        "kk": "[ɪmˋbɛrəs]",
        "uk": "/ɪmˈbærəs/",
        "zh": "vt. 使尷尬、尷尬、窘迫、使難堪",
        "unit": 17,
        "example": "When you embarrass me, I'll tell you.",
        "exampleZh": "你要是使我感到難堪，我就會跟你說的。"
    },
    {
        "id": 30533,
        "en": "emotion",
        "kk": "[ɪˋmoʃən]",
        "uk": "/ɪˈməʊʃ(ə)n/",
        "zh": "n. 情緒、情感、激情、強烈的情感",
        "unit": 17,
        "example": "Love is a very strong human emotion.",
        "exampleZh": "愛是一種非常強烈的人類情感。"
    },
    {
        "id": 30534,
        "en": "emphasize",
        "kk": "[ˋɛmfə͵saɪz]",
        "uk": "/ˈemfəsaɪz/",
        "zh": "vt. 強調、著重、重讀、使突出",
        "unit": 17,
        "example": "I emphasize this rule to you.",
        "exampleZh": "我向你強調這項規則。"
    },
    {
        "id": 30535,
        "en": "employ",
        "kk": "[ɛmˋplɔɪ]",
        "uk": "/ɪmˈplɔɪ/",
        "zh": "vt. 雇用、僱用、使用、利用；n. 受僱",
        "unit": 17,
        "example": "They employ five men to work.",
        "exampleZh": "他們僱用五名男子來工作。"
    },
    {
        "id": 30536,
        "en": "empty",
        "kk": "[ˋɛmpti]",
        "uk": "/ˈempti/",
        "zh": "adj. 空的、空洞的、無意義的、空虛的；v. 清空、變空、流入、使失去；n. 空容器",
        "unit": 17,
        "example": "The glass cup is now empty.",
        "exampleZh": "玻璃杯現在空了。"
    },
    {
        "id": 30537,
        "en": "end",
        "kk": "[ɛnd]",
        "uk": "/end/",
        "zh": "n. 結束、末端、終點、目的；v. 結束、終止",
        "unit": 17,
        "example": "The movie will end very soon.",
        "exampleZh": "這部電影很快就會結束。"
    },
    {
        "id": 30538,
        "en": "enemy",
        "kk": "[ˋɛnəmi]",
        "uk": "/ˈenəmi/",
        "zh": "n. 敵人、反對者、敵國、敵軍；adj. 敵人的、敵方的",
        "unit": 17,
        "example": "The brave dog chased away the enemy.",
        "exampleZh": "那隻勇敢的狗趕走了敵人。"
    },
    {
        "id": 30539,
        "en": "energetic",
        "kk": "[͵ɛnɚˋdʒɛtɪk]",
        "uk": "/ˌenəˈdʒetɪk/",
        "zh": "adj. 精力充沛的、充滿活力的、積極的、劇烈的",
        "unit": 17,
        "example": "The energetic boy plays all day.",
        "exampleZh": "那個精力充沛的男孩玩了一整天。"
    },
    {
        "id": 30540,
        "en": "energy",
        "kk": "[ˋɛnɚdʒi]",
        "uk": "/ˈenədʒi/",
        "zh": "n. 精力、能力、力氣、活力",
        "unit": 17,
        "example": "Children have a lot of energy today.",
        "exampleZh": "孩子們今天活力充沛。"
    },
    {
        "id": 30541,
        "en": "engine",
        "kk": "[ˋɛndʒən]",
        "uk": "/ˈendʒɪn/",
        "zh": "n. 引擎、發動機、機車、火車頭",
        "unit": 17,
        "example": "The car engine is very hot.",
        "exampleZh": "汽車引擎非常燙。"
    },
    {
        "id": 30542,
        "en": "engineer",
        "kk": "[ˋɛndʒəˋnɪr]",
        "uk": "/ˌendʒɪˈnɪə(r)/",
        "zh": "n. 工程師、設計師、機械師、輪機長；vt. 設計、建造、策劃、精心安排",
        "unit": 17,
        "example": "His father meant him to be an engineer.",
        "exampleZh": "他父親想讓他當工程師。"
    },
    {
        "id": 30543,
        "en": "enjoy",
        "kk": "[͵ɛnˋdʒɔɪ]",
        "uk": "/ɪnˈdʒɔɪ/",
        "zh": "vt. 享受、欣賞、喜愛、過得愉快",
        "unit": 17,
        "example": "You're going to enjoy this.",
        "exampleZh": "你會喜歡這個的。"
    },
    {
        "id": 30544,
        "en": "enough",
        "kk": "[ɪˋnʌf]",
        "uk": "/ɪˈnʌf/",
        "zh": "adj. 充足的、足夠的；det. 足夠的；pron. 足夠、充分；adv. 充分地、足夠地、相當、很；n. 足夠的、充分；int. 夠了、別再說了",
        "unit": 17,
        "example": "Six bottles should be enough.",
        "exampleZh": "六瓶應該夠了。"
    },
    {
        "id": 30545,
        "en": "enter",
        "kk": "[ˋɛntɚ]",
        "uk": "/ˈentə(r)/",
        "zh": "vt. 進入、開始從事、開始做、參加；n. 回車鍵",
        "unit": 17,
        "example": "Please knock before you enter the room.",
        "exampleZh": "進入房間前請先敲門。"
    },
    {
        "id": 30546,
        "en": "entrance",
        "kk": "[ˋɛntrəns]",
        "uk": "/ˈentrəns/",
        "zh": "n. 入口、進口、進入、進門；vt. 使入迷、使狂喜",
        "unit": 17,
        "example": "Wait for me at the front entrance.",
        "exampleZh": "在正門入口處等我。"
    },
    {
        "id": 30547,
        "en": "envelope",
        "kk": "[ˋɛnvə͵lop]",
        "uk": "/ˈenvələʊp/",
        "zh": "n. 信封、封皮、氣囊、包層",
        "unit": 17,
        "example": "Put the card inside a white envelope.",
        "exampleZh": "把卡片放進白色信封裡。"
    },
    {
        "id": 30548,
        "en": "environment",
        "kk": "[ɪnˋvaɪrənmənt]",
        "uk": "/ɪnˈvaɪrənmənt/",
        "zh": "n. 自然環境、生態環境、周圍狀況、條件",
        "unit": 17,
        "example": "We must keep our home environment clean.",
        "exampleZh": "我們必須保持居家環境乾淨。"
    },
    {
        "id": 30549,
        "en": "envy",
        "kk": "[ˋɛnvi]",
        "uk": "/ˈenvi/",
        "zh": "vt. 羨慕、忌妒、嚮往；n. 羨慕、妒忌、令人羨慕的人",
        "unit": 17,
        "example": "I don't envy her that job.",
        "exampleZh": "我慶幸不必幹她的那份工作。"
    },
    {
        "id": 30550,
        "en": "equal",
        "kk": "[ˋikwəl]",
        "uk": "/ˈiːkwəl/",
        "zh": "adj. 相等的、相同的、平等的、同等的；vt. 等於、比得上、達到、導致；n. 同等的人、相等物",
        "unit": 17,
        "example": "We are equal in every way.",
        "exampleZh": "我們在各方面都是平等的。"
    },
    {
        "id": 30551,
        "en": "eraser",
        "kk": "[ɪˋresɚ]",
        "uk": "/ɪˈreɪzə(r)/",
        "zh": "n. 橡皮擦、黑板擦",
        "unit": 17,
        "example": "I hide the eraser in her boot.",
        "exampleZh": "我把橡皮擦藏進了她的靴子裡。"
    },
    {
        "id": 30552,
        "en": "error",
        "kk": "[ˋɛrɚ]",
        "uk": "/ˈerə(r)/",
        "zh": "n. 錯誤、差錯、失誤",
        "unit": 17,
        "example": "I found an error on page five.",
        "exampleZh": "我在第五頁發現了一個錯誤。"
    },
    {
        "id": 30553,
        "en": "especially",
        "kk": "[əˋspɛʃli]",
        "uk": "/ɪˈspeʃəli/",
        "zh": "adv. 特別地、尤其、特別、專門",
        "unit": 17,
        "example": "I especially like sweet things.",
        "exampleZh": "我特別喜歡甜的東西。"
    },
    {
        "id": 30554,
        "en": "eve",
        "kk": "[iv]",
        "uk": "/iːv/",
        "zh": "n. 前夕、前一天、傍晚、黃昏",
        "unit": 17,
        "example": "They met on New Year Eve.",
        "exampleZh": "他們在除夕夜相聚。"
    },
    {
        "id": 30555,
        "en": "even",
        "kk": "[ˋivɪn]",
        "uk": "/ˈiːv(ə)n/",
        "zh": "adj. 平坦的、水平的、平靜的、平和的；adv. 甚至、即使、更加、愈加；v. 使相等、使平均、變平坦、使變平；n. 傍晚、晚上",
        "unit": 17,
        "example": "Even a small child can do this.",
        "exampleZh": "連小孩子都能做這件事。"
    },
    {
        "id": 30556,
        "en": "evening",
        "kk": "[ˋivnɪŋ]",
        "uk": "/ˈiːvnɪŋ/",
        "zh": "n. 傍晚、晚上、晚會、晚間活動；int. 晚上好；adj. 在晚上的、為晚上的",
        "unit": 17,
        "example": "They walk in the park this evening.",
        "exampleZh": "他們今晚在公園散步。"
    },
    {
        "id": 30557,
        "en": "event",
        "kk": "[ɪˋvɛnt]",
        "uk": "/ɪˈvent/",
        "zh": "n. 事件、大事、社交場合、既定活動",
        "unit": 17,
        "example": "The sports day was a big event.",
        "exampleZh": "運動會是一場大型活動。"
    },
    {
        "id": 30558,
        "en": "ever",
        "kk": "[ˋɛvɚ]",
        "uk": "/ˈevə(r)/",
        "zh": "adv. 從來、曾經、在任何時候、一直",
        "unit": 17,
        "example": "Have you ever seen a big elephant?",
        "exampleZh": "你曾經見過大象嗎？"
    },
    {
        "id": 30559,
        "en": "every",
        "kk": "[ˋɛvɚi]",
        "uk": "/ˈevri/",
        "zh": "det. 每個、每一、每……之中的、每隔；adj. 每個",
        "unit": 17,
        "example": "He walks to school every day.",
        "exampleZh": "他每天走路去上學。"
    },
    {
        "id": 30560,
        "en": "evil",
        "kk": "[ˋivəl]",
        "uk": "/ˈiːv(ə)l/",
        "zh": "adj. 惡毒的、邪惡的、有害的、易造成傷害的；n. 邪惡、有害（或不受歡迎）的事、罪惡",
        "unit": 17,
        "example": "Good and evil may co-exist within one family.",
        "exampleZh": "善與惡可能共存於同一個家庭。"
    },
    {
        "id": 30561,
        "en": "exact",
        "kk": "[ɪɡˋzækt]",
        "uk": "/ɪɡˈzækt/",
        "zh": "adj. 正確的、確切的、精確的、嚴謹的；vt. 強取、勒索、實施、造成重大苦難",
        "unit": 17,
        "example": "Tell me the exact time of the meeting.",
        "exampleZh": "請告訴我會議的確切時間。"
    },
    {
        "id": 30562,
        "en": "exam",
        "kk": "[ɪɡˋzæm]",
        "uk": "/ɪɡˈzæm/",
        "zh": "n. 考試、試卷、醫學檢查",
        "unit": 17,
        "example": "He passed the exam with ease.",
        "exampleZh": "他輕鬆地通過了考試。"
    },
    {
        "id": 30563,
        "en": "example",
        "kk": "[ɪɡˋzæmpəl]",
        "uk": "/ɪɡˈzɑːmp(ə)l/",
        "zh": "n. 例子、例證、榜樣、楷模；v. 得到說明、可加以舉例說明",
        "unit": 17,
        "example": "Let me give you an example.",
        "exampleZh": "讓我舉個例子。"
    },
    {
        "id": 30564,
        "en": "excellent",
        "kk": "[ˋɛksələnt]",
        "uk": "/ˈeksələnt/",
        "zh": "adj. 優秀的、極好的、卓越的；int. 太好了",
        "unit": 17,
        "example": "She did an excellent job on her test.",
        "exampleZh": "她在考試中表現得非常優秀。"
    },
    {
        "id": 30565,
        "en": "except",
        "kk": "[ɪkˋsɛpt]",
        "uk": "/ɪkˈsept/",
        "zh": "prep. 除了、除……外、不包括；conj. 除……之外、除了、只是、要不是；v. 不包括、把……排除在外",
        "unit": 17,
        "example": "They all came except Matt.",
        "exampleZh": "除了馬特之外，他們都來了。"
    },
    {
        "id": 30566,
        "en": "excite",
        "kk": "[ɪkˋsaɪt]",
        "uk": "/ɪkˈsaɪt/",
        "zh": "vt. 使……興奮、使興奮、使激動、引起",
        "unit": 17,
        "example": "Funny games always excite the little kids.",
        "exampleZh": "有趣的遊戲總是能使小孩感到興奮。"
    },
    {
        "id": 30567,
        "en": "excuse",
        "kk": "[ɪkˋskjus]",
        "uk": "/ɪkˈskjuːs/",
        "zh": "n. 藉口、託詞、正當理由、寬恕；vt. 原諒、寬恕、辯解、開脫",
        "unit": 17,
        "example": "She served up the usual excuse.",
        "exampleZh": "她給出的藉口還是老一套。"
    },
    {
        "id": 30568,
        "en": "exercise",
        "kk": "[ˋɛksɚ͵saɪz]",
        "uk": "/ˈeksəsaɪz/",
        "zh": "n. 運動、鍛鍊、動作、體操；v. 練習、運動、鍛鍊、運用",
        "unit": 17,
        "example": "Daily exercise is very good for health.",
        "exampleZh": "每天運動對健康非常有益。"
    },
    {
        "id": 30569,
        "en": "exist",
        "kk": "[ɪɡˋzɪst]",
        "uk": "/ɪɡˈzɪst/",
        "zh": "vi. 存在、實際上有、持續存在、生存",
        "unit": 17,
        "example": "Do you believe that ghosts really exist?",
        "exampleZh": "你相信鬼魂真的存在嗎？"
    },
    {
        "id": 30570,
        "en": "exit",
        "kk": "[ˋɛɡzɪt]",
        "uk": "/ˈeksɪt/",
        "zh": "n. 出口、通道、太平門、出路；vt. 離開、退出、退場、去世",
        "unit": 17,
        "example": "Please walk to the near exit.",
        "exampleZh": "請走向附近的出口。"
    },
    {
        "id": 30571,
        "en": "expect",
        "kk": "[ɪkˋspɛkt]",
        "uk": "/ɪkˈspekt/",
        "zh": "vt. 期望、期待、預計、要求",
        "unit": 17,
        "example": "We expect to see him tomorrow morning.",
        "exampleZh": "我們預計明天早晨會見到他。"
    },
    {
        "id": 30572,
        "en": "expensive",
        "kk": "[ɪkˋspɛnsɪv]",
        "uk": "/ɪkˈspensɪv/",
        "zh": "adj. 昂貴的、花錢多的、代價高的",
        "unit": 17,
        "example": "Food was scarce and expensive.",
        "exampleZh": "食物稀缺且昂貴。"
    },
    {
        "id": 30573,
        "en": "experience",
        "kk": "[ɪkˋspɪriəns]",
        "uk": "/ɪkˈspɪəriəns/",
        "zh": "n. 經驗、經歷、往事、閱歷；vt. 體驗、經歷、遭遇、體會到",
        "unit": 17,
        "example": "This trip was a great experience.",
        "exampleZh": "這次旅行是一次很棒的經歷。"
    },
    {
        "id": 30574,
        "en": "explain",
        "kk": "[ɪkˋsplen]",
        "uk": "/ɪkˈspleɪn/",
        "zh": "vt. 說明、解釋、說明（……的）原因、解釋（……的）理由",
        "unit": 17,
        "example": "It's pretty hard to explain.",
        "exampleZh": "這很難解釋。"
    },
    {
        "id": 30575,
        "en": "express",
        "kk": "[ɪkˋsprɛs]",
        "uk": "/ɪkˈspres/",
        "zh": "vt. 表達、表露、表現、體現；n. 快車、快遞、專使；adj. 快速的、快遞的、特快的、明確的；adv. 用快遞寄送",
        "unit": 17,
        "example": "Words cannot express how happy I feel.",
        "exampleZh": "言語無法表達我內心有多快樂。"
    },
    {
        "id": 30576,
        "en": "extra",
        "kk": "[ˋɛkstrə]",
        "uk": "/ˈekstrə/",
        "zh": "adj. 額外的、另外收費的；n. 另收費的事物、臨時演員、附加分；adv. 額外、特別、格外",
        "unit": 17,
        "example": "Can I have an extra cup today?",
        "exampleZh": "我今天可以多要一個杯子嗎？"
    },
    {
        "id": 30577,
        "en": "eye",
        "kk": "[aɪ]",
        "uk": "/aɪ/",
        "zh": "n. 眼睛、目光、所看之處、眼力；vt. 注視、仔細打量",
        "unit": 17,
        "example": "The film has a painterly eye.",
        "exampleZh": "這部電影有著繪畫般的眼光。"
    },
    {
        "id": 30578,
        "en": "eyebrow",
        "kk": "[ˋaɪ͵braʊ]",
        "uk": "/ˈaɪbraʊ/",
        "zh": "n. 眉毛、眉",
        "unit": 17,
        "example": "He raised his left eyebrow at me.",
        "exampleZh": "他朝我挑了挑左邊的眉毛。"
    },
    {
        "id": 30579,
        "en": "face",
        "kk": "[fes]",
        "uk": "/feɪs/",
        "zh": "n. 臉、面部、面部表情、臉色；vt. 面對、面臨、遭遇、正視",
        "unit": 17,
        "example": "He washed his face with cold water.",
        "exampleZh": "他用冷水洗了臉。"
    },
    {
        "id": 30580,
        "en": "fact",
        "kk": "[fækt]",
        "uk": "/fækt/",
        "zh": "n. 事實、真相、現實",
        "unit": 17,
        "example": "That is a simple, true fact.",
        "exampleZh": "這是一個簡單而真實的事實。"
    },
    {
        "id": 30581,
        "en": "factory",
        "kk": "[ˋfæktɚi]",
        "uk": "/ˈfæktri; ˈfæktəri/",
        "zh": "n. 工廠、製造廠、代理店",
        "unit": 17,
        "example": "My uncle works in a car factory.",
        "exampleZh": "我叔叔在一間汽車工廠上班。"
    },
    {
        "id": 30582,
        "en": "fail",
        "kk": "[fel]",
        "uk": "/feɪl/",
        "zh": "v. 失敗、未能做到、未能做、辜負；n. 不及格、過失、失敗",
        "unit": 17,
        "example": "Work hard so you will not fail.",
        "exampleZh": "努力用功，這樣你就不會不及格。"
    },
    {
        "id": 30583,
        "en": "fair",
        "kk": "[fɛr]",
        "uk": "/feə(r)/",
        "zh": "adj. 公平的、合理的、公正的、相當好的；adv. 公平地、公正地、非常、正面地；n. 集市、展覽會、露天遊樂場、廟會；v. 變得晴朗、使（車輛，船舶，飛機）具有流線型",
        "unit": 17,
        "example": "The punishment was very fair.",
        "exampleZh": "這個處罰很公正。"
    },
    {
        "id": 30584,
        "en": "fall",
        "kk": "[fɔl]",
        "uk": "/fɔːl/",
        "zh": "vi. 跌倒、降落、落下、倒塌；n. 秋天、落下、跌倒、下降",
        "unit": 17,
        "example": "Leaves fall down from the tree.",
        "exampleZh": "樹葉從樹上掉落下來。"
    },
    {
        "id": 30585,
        "en": "false",
        "kk": "[fɔls]",
        "uk": "/fɔːls/",
        "zh": "adj. 錯的、錯誤的、不真實的、偽造的；adv. 欺詐地",
        "unit": 17,
        "example": "Is this story true or false?",
        "exampleZh": "這個故事是真的還是假的？"
    },
    {
        "id": 30586,
        "en": "family",
        "kk": "[ˋfæməli]",
        "uk": "/ˈfæməli/",
        "zh": "n. 家、家庭、家屬、親屬；adj. 家庭的、一家所有的、老少咸宜的、全家用的",
        "unit": 17,
        "example": "I love my family very much.",
        "exampleZh": "我非常愛我的家人。"
    },
    {
        "id": 30587,
        "en": "famous",
        "kk": "[ˋfeməs]",
        "uk": "/ˈfeɪməs/",
        "zh": "adj. 著名的、出名的、極好的、了不起的",
        "unit": 17,
        "example": "Some day he'll be famous.",
        "exampleZh": "總有一天他會出名的。"
    },
    {
        "id": 30588,
        "en": "fan",
        "kk": "[fæn]",
        "uk": "/fæn/",
        "zh": "n. 風扇、扇子、粉絲、狂熱愛好者；vt. 扇、為……扇風、煽",
        "unit": 17,
        "example": "Turn on the fan for me.",
        "exampleZh": "替我打開風扇。"
    },
    {
        "id": 30589,
        "en": "fancy",
        "kk": "[ˋfænsi]",
        "uk": "/ˈfænsi/",
        "zh": "vt. 喜歡、想要、愛戀、愛慕；n. 喜歡、想要、想象、想象力；adj. 時髦的、奢華的、華麗的、花哨的",
        "unit": 17,
        "example": "Do you fancy a jar after work?",
        "exampleZh": "下班後去喝一杯怎麼樣？"
    },
    {
        "id": 30590,
        "en": "fantastic",
        "kk": "[fænˋtæstɪk]",
        "uk": "/fænˈtæstɪk/",
        "zh": "adj. 極好的、非常棒的、極大的、極高的",
        "unit": 17,
        "example": "You've got the job? Fantastic!",
        "exampleZh": "你得到那工作了？太好了！"
    },
    {
        "id": 30591,
        "en": "far",
        "kk": "[fɑr]",
        "uk": "/fɑː(r)/",
        "zh": "adv. 遠地、遠、遙遠地、久遠地；adj. 遠的、遙遠的、久遠的、另一邊的",
        "unit": 17,
        "example": "My home is not far from school.",
        "exampleZh": "我家離學校不遠。"
    },
    {
        "id": 30592,
        "en": "farm",
        "kk": "[fɑrm]",
        "uk": "/fɑːm/",
        "zh": "n. 農場、養殖場、農舍、生產企業；vt. 務農、耕種、養殖、將（稅收）包出",
        "unit": 17,
        "example": "Whose is that farm over yonder?",
        "exampleZh": "那邊的農場是誰的？"
    },
    {
        "id": 30593,
        "en": "farmer",
        "kk": "[ˋfɑrmɚ]",
        "uk": "/ˈfɑːmə(r)/",
        "zh": "n. 農夫、農民、農場主、法默",
        "unit": 17,
        "example": "The farmer works hard every day.",
        "exampleZh": "這位農夫每天努力工作。"
    },
    {
        "id": 30594,
        "en": "fashion",
        "kk": "[ˋfæʃən]",
        "uk": "/ˈfæʃ(ə)n/",
        "zh": "n. 流行、時髦打扮、流行裝扮、時尚；v. 製作、使成形、塑造",
        "unit": 17,
        "example": "Long red coats are in fashion.",
        "exampleZh": "紅色長大衣很流行。"
    },
    {
        "id": 30595,
        "en": "fast",
        "kk": "[fæst]",
        "uk": "/fɑːst/",
        "zh": "adj. 快的、迅速的；adv. 快地、迅速地、牢固地；vi. 禁食、齋戒；n. 禁食期、齋戒",
        "unit": 17,
        "example": "The yellow car runs very fast today.",
        "exampleZh": "那輛黃色汽車今天開得非常快。"
    },
    {
        "id": 30596,
        "en": "fat",
        "kk": "[fæt]",
        "uk": "/fæt/",
        "zh": "adj. 胖的、肥的、肥胖的、厚的；n. 脂肪、肥肉、食用油、烹呼叫油；v. 長肥",
        "unit": 17,
        "example": "This dress makes me look fat.",
        "exampleZh": "這衣服我穿著顯胖。"
    },
    {
        "id": 30597,
        "en": "father",
        "kk": "[ˋfɑðɚ]",
        "uk": "/ˈfɑːðə(r)/",
        "zh": "n. 父親、爸爸、祖先、發明者；vt. 是……的父親、創立、創造、發明",
        "unit": 17,
        "example": "His father hailed from Italy.",
        "exampleZh": "他父親出生於義大利。"
    },
    {
        "id": 30598,
        "en": "faucet",
        "kk": "[ˋfɔsət]",
        "uk": "/ˈfɔːsɪt/",
        "zh": "n. 水龍頭、旋塞",
        "unit": 17,
        "example": "Cold water came from the faucet.",
        "exampleZh": "冷水從水龍頭流了出來。"
    },
    {
        "id": 30599,
        "en": "fault",
        "kk": "[fɔlt]",
        "uk": "/fɔːlt/",
        "zh": "n. 缺點、錯誤、責任、過錯；vt. 挑剔、指責、發球失誤、產生斷層",
        "unit": 17,
        "example": "It was not your fault at all.",
        "exampleZh": "那完全不是你的過錯。"
    },
    {
        "id": 30600,
        "en": "favorite",
        "kk": "[ˋfevɚɪt]",
        "uk": "/ˈfeɪvərɪt/",
        "zh": "adj. 最喜愛的、最喜歡的、特別受喜愛的；n. 特別喜愛的人（或物）",
        "unit": 17,
        "example": "Apple is my favorite kind of fruit.",
        "exampleZh": "蘋果是我最喜歡的水果種類。"
    },
    {
        "id": 30601,
        "en": "fear",
        "kk": "[fɪr]",
        "uk": "/fɪə(r)/",
        "zh": "v. 害怕、畏懼、擔心、憂慮；n. 恐懼、擔心、可能性、敬畏",
        "unit": 17,
        "example": "She has a fear of the dark.",
        "exampleZh": "她對黑暗感到恐懼。"
    },
    {
        "id": 30602,
        "en": "February",
        "kk": "[ˋfɛbjə͵wɛri]",
        "uk": "/ˈfebruəri/",
        "zh": "n. 二月",
        "unit": 17,
        "example": "February is the second month of the year.",
        "exampleZh": "二月是一年中的第二個月。"
    },
    {
        "id": 30603,
        "en": "fee",
        "kk": "[fi]",
        "uk": "/fiː/",
        "zh": "n. 費用、酬金、會費、入場費；v. 付給（某人）費用",
        "unit": 17,
        "example": "You have to pay an entry fee.",
        "exampleZh": "你必須支付入場費用。"
    },
    {
        "id": 30604,
        "en": "feed",
        "kk": "[fid]",
        "uk": "/fiːd/",
        "zh": "v. 餵食、飼養、餵養、為……提供食物；n. 飼料、哺乳、餵養、動物的飼料",
        "unit": 17,
        "example": "Please feed the dog some food.",
        "exampleZh": "請餵狗狗吃一些食物。"
    },
    {
        "id": 30605,
        "en": "feel",
        "kk": "[fil]",
        "uk": "/fiːl/",
        "zh": "v. 感覺、覺得、感受到、觸摸；n. 感覺、觸覺",
        "unit": 17,
        "example": "I feel happy to see you today.",
        "exampleZh": "我今天見到你覺得很開心。"
    },
    {
        "id": 30606,
        "en": "feeling",
        "kk": "[ˋfilɪŋ]",
        "uk": "/ˈfiːlɪŋ/",
        "zh": "n. 感覺、感觸、預感、看法；adj. 多愁善感的、多情的；v. 感受到、體會到、覺得、相信",
        "unit": 17,
        "example": "I have a good feeling about this.",
        "exampleZh": "我對這件事有好的感覺。"
    },
    {
        "id": 30607,
        "en": "female",
        "kk": "[ˋfi͵mel]",
        "uk": "/ˈfiːmeɪl/",
        "zh": "adj. 女性的、婦女的、女性特有的、由女性組成的；n. 雌性動物、雌性植物、女子",
        "unit": 17,
        "example": "This small cat is a female.",
        "exampleZh": "這隻小貓是雌性的。"
    },
    {
        "id": 30608,
        "en": "fence",
        "kk": "[fɛns]",
        "uk": "/fens/",
        "zh": "n. 籬笆、柵欄、圍欄；v. 用柵欄圍住、擊劍",
        "unit": 17,
        "example": "The white cat jumped over the fence.",
        "exampleZh": "那隻白貓跳過了柵欄。"
    },
    {
        "id": 30609,
        "en": "festival",
        "kk": "[ˋfɛstəvəl]",
        "uk": "/ˈfestɪvl; ˈfestəvəl/",
        "zh": "n. 節慶、活動節期、紀念活動、節日；adj. 節日的、喜慶的",
        "unit": 17,
        "example": "They dance at the summer music festival.",
        "exampleZh": "他們在夏季音樂節上跳舞。"
    },
    {
        "id": 30610,
        "en": "fever",
        "kk": "[ˋfivɚ]",
        "uk": "/ˈfiːvə(r)/",
        "zh": "n. 發燒、發熱、狂熱、高度興奮；v. 使發燒、使激動不已",
        "unit": 17,
        "example": "The fever has passed its crisis.",
        "exampleZh": "發燒已過危險期。"
    },
    {
        "id": 30611,
        "en": "few",
        "kk": "[fju]",
        "uk": "/fjuː/",
        "zh": "det. 少數的、一些、幾個、很少；pron. 幾個、一些人、很少的人；adj. 少數的、很少、幾乎沒有；n. 少數派、少數、參加過不列顛之戰的少數幾個英國皇家空軍飛行員",
        "unit": 17,
        "example": "There are a few apples on the table.",
        "exampleZh": "桌上有幾顆蘋果。"
    },
    {
        "id": 30612,
        "en": "fifteen",
        "kk": "[fɪfˋtin]",
        "uk": "/ˌfɪfˈtiːn/",
        "zh": "num. 十五；n. 十五、十五個、十五人組成的橄欖球隊；adj. 十五的",
        "unit": 17,
        "example": "There are fifteen boys in the room.",
        "exampleZh": "房間裡有十五個男孩。"
    },
    {
        "id": 30613,
        "en": "fifty",
        "kk": "[ˋfɪfti]",
        "uk": "/ˈfɪfti/",
        "zh": "n. 五十、五十個、五十多歲（年齡）或五十多度、二十世紀五十年代；adj. 數量為五十的、眾多的",
        "unit": 17,
        "example": "Fifty is the new forty.",
        "exampleZh": "四十尚未老，五十正當年。"
    },
    {
        "id": 30614,
        "en": "fight",
        "kk": "[faɪt]",
        "uk": "/faɪt/",
        "zh": "v. 打架、戰鬥、對抗、作戰；n. 打架、戰鬥、爭吵、鬥志",
        "unit": 17,
        "example": "The two dogs fight for the food.",
        "exampleZh": "這兩隻狗為了食物打架。"
    },
    {
        "id": 30615,
        "en": "fill",
        "kk": "[fɪl]",
        "uk": "/fɪl/",
        "zh": "vt. 裝滿、充滿、佔滿、堵塞；n. 總量、需求總量、填充物、填方",
        "unit": 17,
        "example": "Please fill the cup with hot water.",
        "exampleZh": "請把杯子裝滿熱水。"
    },
    {
        "id": 30616,
        "en": "film",
        "kk": "[fɪlm]",
        "uk": "/fɪlm/",
        "zh": "n. 電影、影片、電影藝術、電影業；vt. 拍攝、錄製、拍攝電影、被覆蓋上一薄層東西",
        "unit": 17,
        "example": "We saw a funny film last night.",
        "exampleZh": "我們昨晚看了一部有趣的電影。"
    },
    {
        "id": 30617,
        "en": "final",
        "kk": "[ˋfaɪnəl]",
        "uk": "/ˈfaɪn(ə)l/",
        "zh": "adj. 最終的、結束的、最後的、末尾的；n. 期末考、決賽、期末考試、課程終結考試",
        "unit": 17,
        "example": "This is our final game of the year.",
        "exampleZh": "這是我們今年最後一場比賽。"
    },
    {
        "id": 30618,
        "en": "finally",
        "kk": "[ˋfaɪnəli]",
        "uk": "/ˈfaɪnəli/",
        "zh": "adv. 最後、終於、總之、決定性地",
        "unit": 17,
        "example": "The red bus finally came today.",
        "exampleZh": "紅色公車今天終於來了。"
    },
    {
        "id": 30619,
        "en": "find",
        "kk": "[faɪnd]",
        "uk": "/faɪnd/",
        "zh": "vt. 找到、找回、發現、發覺；n. 被發現的人、發現物、發現狐狸",
        "unit": 17,
        "example": "Can you help me find my keys?",
        "exampleZh": "你能幫我找到我的鑰匙嗎？"
    },
    {
        "id": 30620,
        "en": "fine",
        "kk": "[faɪn]",
        "uk": "/faɪn/",
        "zh": "adj. 好的、美好的、晴朗的、健康的；n. 罰款、罰金；vt. 處……以罰款",
        "unit": 17,
        "example": "The day is fine and warm today.",
        "exampleZh": "今天天氣晴朗又溫暖。"
    },
    {
        "id": 30621,
        "en": "finger",
        "kk": "[ˋfɪŋɡɚ]",
        "uk": "/ˈfɪŋɡə(r)/",
        "zh": "n. 指頭、手指、手指部分、一指寬；vt. 用手指觸控、告發、告密、撥弄",
        "unit": 17,
        "example": "He hurt his finger on the door.",
        "exampleZh": "他的手指在門上弄傷了。"
    },
    {
        "id": 30622,
        "en": "finish",
        "kk": "[ˋfɪnɪʃ]",
        "uk": "/ˈfɪnɪʃ/",
        "zh": "v. 完成、做好、結束、消耗盡；n. 結束、結尾、結局、終點",
        "unit": 17,
        "example": "I will finish my work before dinner.",
        "exampleZh": "我會在晚餐前完成我的工作。"
    },
    {
        "id": 30623,
        "en": "fire",
        "kk": "[ˋfaɪɚ]",
        "uk": "/ˈfaɪə(r)/",
        "zh": "n. 火、火災、爐火、熱情；v. 開火、射擊、解雇、激發",
        "unit": 17,
        "example": "The fire keeps the room very warm.",
        "exampleZh": "爐火讓房間非常溫暖。"
    },
    {
        "id": 30624,
        "en": "first",
        "kk": "[fɝst]",
        "uk": "/fɜːst/",
        "zh": "det. 第一位的、最先的、首（次）的、緊接著來到的；adj. 第一的；adv. 首先、第一、最初、起初；pron. 第一次；n. 第一個人、前所未有的事情、最低檔、最高成績",
        "unit": 17,
        "example": "He was the first boy in line.",
        "exampleZh": "他是隊伍中的第一個人。"
    },
    {
        "id": 30625,
        "en": "fish",
        "kk": "[fɪʃ]",
        "uk": "/fɪʃ/",
        "zh": "n. 魚、魚肉、雙魚座、接合板；vi. 釣魚、捕魚、搜尋、在……中捕魚",
        "unit": 17,
        "example": "Many small fish swim in the river.",
        "exampleZh": "許多小魚在河裡游泳。"
    },
    {
        "id": 30626,
        "en": "fisherman",
        "kk": "[ˋfɪʃɚ͵mæn]",
        "uk": "/ˈfɪʃəmən/",
        "zh": "n. 漁夫、漁人、漁民、垂釣者",
        "unit": 17,
        "example": "The fisherman rowed us back to the shore.",
        "exampleZh": "漁夫划船將我們送回到岸上。"
    },
    {
        "id": 30627,
        "en": "fit",
        "kk": "[fɪt]",
        "uk": "/fɪt/",
        "zh": "v. 適合、合身、適應、合得來；adj. 合適的、健康的、健壯的、適當的；n. 適合、合身、匹配、相配",
        "unit": 17,
        "example": "Where do I fit in?",
        "exampleZh": "哪裡有我適合的地方？"
    },
    {
        "id": 30628,
        "en": "five",
        "kk": "[faɪv]",
        "uk": "/faɪv/",
        "zh": "num. 五、五個；adj. 五的、五個的",
        "unit": 17,
        "example": "I have five red apples in my bag.",
        "exampleZh": "我的袋子裡有五顆紅蘋果。"
    },
    {
        "id": 30629,
        "en": "fix",
        "kk": "[fɪks]",
        "uk": "/fɪks/",
        "zh": "v. 修理、維修、確定、安排；n. 解決方案、窘境、困境",
        "unit": 17,
        "example": "Can you help me fix this chair?",
        "exampleZh": "你能幫我修理這張椅子嗎？"
    },
    {
        "id": 30630,
        "en": "flag",
        "kk": "[flæɡ]",
        "uk": "/flæɡ/",
        "zh": "n. 旗幟、國旗、訊號旗、標誌旗；vi. 標記、給……做標記、示意……停下來、揮手示停",
        "unit": 17,
        "example": "The red flag flew in the wind.",
        "exampleZh": "紅旗在風中飄揚。"
    },
    {
        "id": 30631,
        "en": "flash",
        "kk": "[flæʃ]",
        "uk": "/flæʃ/",
        "zh": "v. 閃光、閃亮、出示、顯示；n. 閃光、閃光燈、閃現、肩章；adj. 闊氣的、愛顯擺的、突然而短暫的、非常有才能的",
        "unit": 17,
        "example": "I'll need flash for this shot.",
        "exampleZh": "拍這個鏡頭我需要閃光燈。"
    },
    {
        "id": 30632,
        "en": "flashlight",
        "kk": "[ˋflæʃ͵laɪt]",
        "uk": "/ˈflæʃlaɪt/",
        "zh": "n. 手電筒、閃光燈",
        "unit": 17,
        "example": "Turn on the flashlight in the dark.",
        "exampleZh": "在黑暗中打開手電筒。"
    },
    {
        "id": 30633,
        "en": "flight",
        "kk": "[flaɪt]",
        "uk": "/flaɪt/",
        "zh": "n. 飛機航次、航班、班機、飛行；v. 將（球）準確吊傳、給（箭，鏢）裝羽毛、射擊",
        "unit": 17,
        "example": "The flight was heavily overbooked.",
        "exampleZh": "該班機售票大大超出機位數量。"
    },
    {
        "id": 30634,
        "en": "flood",
        "kk": "[flʌd]",
        "uk": "/flʌd/",
        "zh": "v. 淹沒、氾濫、大量湧來、大量湧去；n. 洪水、水災、大批、大量",
        "unit": 17,
        "example": "Heavy rain caused a big river flood.",
        "exampleZh": "大雨導致河水嚴重氾濫成災。"
    },
    {
        "id": 30635,
        "en": "floor",
        "kk": "[flɔr]",
        "uk": "/flɔː(r)/",
        "zh": "n. 地板、地面、樓層、同樓層所有房間；vt. 擊倒、打倒、使驚訝得不知所措、給…鋪設地板",
        "unit": 17,
        "example": "The baby plays on the clean floor.",
        "exampleZh": "小寶寶在乾淨的地板上玩耍。"
    },
    {
        "id": 30636,
        "en": "flour",
        "kk": "[ˋflaʊɚ]",
        "uk": "/ˈflaʊə(r)/",
        "zh": "n. 麵粉、粉；v. 在……上撒麵粉、把（穀物）磨成粉",
        "unit": 17,
        "example": "We need white flour to make bread.",
        "exampleZh": "我們需要白麵粉來做麵包。"
    },
    {
        "id": 30637,
        "en": "flower",
        "kk": "[ˋflaʊɚ]",
        "uk": "/ˈflaʊə(r)/",
        "zh": "n. 花、開花植物、精華、最好的部分；vi. 開花、繁榮、興旺",
        "unit": 17,
        "example": "This red flower smells very sweet.",
        "exampleZh": "這朵紅花聞起來很香甜。"
    },
    {
        "id": 30638,
        "en": "flu",
        "kk": "[flu]",
        "uk": "/fluː/",
        "zh": "n. 流行性感冒、流感",
        "unit": 17,
        "example": "The whole family has the flu.",
        "exampleZh": "全家都患流感。"
    },
    {
        "id": 30639,
        "en": "flute",
        "kk": "[flut]",
        "uk": "/fluːt/",
        "zh": "n. 長笛、細長酒杯、高腳玻璃酒杯、長笛音栓；v. 吹笛子、用長笛般優美的聲音說話、製作凹槽、給（衣服）加褶邊",
        "unit": 17,
        "example": "She plays the flute very well today.",
        "exampleZh": "她今天長笛吹得非常好。"
    },
    {
        "id": 30640,
        "en": "fly",
        "kk": "[flaɪ]",
        "uk": "/flaɪ/",
        "zh": "v. 飛、飛行、乘飛機、搭乘；n. 蒼蠅、假蠅、褲門襟、騰空球；adj. 時髦漂亮的、機靈的",
        "unit": 17,
        "example": "Birds can fly high in the sky.",
        "exampleZh": "鳥兒能在空中飛得很高。"
    },
    {
        "id": 30641,
        "en": "focus",
        "kk": "[ˋfokəs]",
        "uk": "/ˈfəʊkəs/",
        "zh": "n. 焦點、重點、中心點、關注；vt. 集中、關注、聚焦",
        "unit": 17,
        "example": "You must focus on your school work.",
        "exampleZh": "你必須專注於你的課業。"
    },
    {
        "id": 30642,
        "en": "fog",
        "kk": "[fɑɡ]",
        "uk": "/fɒɡ/",
        "zh": "n. 霧、煙霧、塵霧、困惑；v. 使令人困惑、使費解、底片產生灰霧、起霧",
        "unit": 17,
        "example": "The thick fog covers the whole city.",
        "exampleZh": "濃霧籠罩了整座城市。"
    },
    {
        "id": 30643,
        "en": "foggy",
        "kk": "[ˋfɑɡi]",
        "uk": "/ˈfɒɡi/",
        "zh": "adj. 濃霧的、有霧的、霧氣茫茫的、迷糊的",
        "unit": 17,
        "example": "Drive slowly on this cold, foggy morning.",
        "exampleZh": "在這個寒冷且起霧的早晨請慢速行駛。"
    },
    {
        "id": 30644,
        "en": "follow",
        "kk": "[ˋfɑlo]",
        "uk": "/ˈfɒləʊ/",
        "zh": "vt. 跟隨、跟著、跟蹤、在……後；n. 跟隨、追隨",
        "unit": 17,
        "example": "Please follow me to the front door.",
        "exampleZh": "請跟我走到前門。"
    },
    {
        "id": 30645,
        "en": "food",
        "kk": "[fud]",
        "uk": "/fuːd/",
        "zh": "n. 食物、養料、食品",
        "unit": 17,
        "example": "We need good food to live well.",
        "exampleZh": "我們需要好的食物來好好生活。"
    },
    {
        "id": 30646,
        "en": "fool",
        "kk": "[ful]",
        "uk": "/fuːl/",
        "zh": "n. 傻瓜、笨蛋、有癖好的人、……迷；v. 開玩笑、戲謔、愚弄、欺騙；adj. 愚蠢的、傻的",
        "unit": 17,
        "example": "The man's a deuced fool!",
        "exampleZh": "那個男人真是個傻瓜！"
    },
    {
        "id": 30647,
        "en": "foolish",
        "kk": "[ˋfulɪʃ]",
        "uk": "/ˈfuːlɪʃ/",
        "zh": "adj. 愚笨的、愚蠢的、傻的、困窘的",
        "unit": 17,
        "example": "It was foolish to go out in rain.",
        "exampleZh": "冒雨出門真是愚蠢的行為。"
    },
    {
        "id": 30648,
        "en": "foot",
        "kk": "[fʊt]",
        "uk": "/fʊt/",
        "zh": "n. 腳、足、英尺、基礎；comb. 有……只腳、用……腳（或足的）、……英尺高的人、……英尺長的東西；adj. 用腳操作的、腳踏的、步行的、步（兵）的；v. 支付",
        "unit": 17,
        "example": "He hurt his left foot on a rock.",
        "exampleZh": "他的左腳在石頭上弄傷了。"
    },
    {
        "id": 30649,
        "en": "football",
        "kk": "[ˋfʊt͵bɔl]",
        "uk": "/ˈfʊtbɔːl/",
        "zh": "n. 足球、足球運動、橄欖球運動、橄欖球",
        "unit": 17,
        "example": "Boys love to play football after school.",
        "exampleZh": "男孩子們喜歡放學後踢足球。"
    },
    {
        "id": 30650,
        "en": "for",
        "kk": "[fɔr]",
        "uk": "/fɔː(r); fə(r)/",
        "zh": "prep. 為了、給、對、以幫助；conj. 因為、由於；abbr. 外國、林業；adv. 支援地",
        "unit": 17,
        "example": "He was jailed for life for murder.",
        "exampleZh": "他因謀殺罪被判終身監禁。"
    },
    {
        "id": 30651,
        "en": "force",
        "kk": "[fɔrs]",
        "uk": "/fɔːs/",
        "zh": "n. 力量、暴力、武力、力；vt. 強迫、用力推、使發生、勉強做出",
        "unit": 17,
        "example": "Do not force him to eat it.",
        "exampleZh": "不要強迫他吃那個。"
    },
    {
        "id": 30652,
        "en": "foreign",
        "kk": "[ˋfɔrən]",
        "uk": "/ˈfɒrən/",
        "zh": "adj. 外國的、來自國外的、外交的、涉外的",
        "unit": 17,
        "example": "Foreign News is on page 16.",
        "exampleZh": "《外國新聞》在第 16 頁。"
    },
    {
        "id": 30653,
        "en": "foreigner",
        "kk": "[ˋfɔrənɚ]",
        "uk": "/ˈfɒrənə(r)/",
        "zh": "n. 外國人、外來人、外地人、私活",
        "unit": 17,
        "example": "The kind foreigner asked for my help.",
        "exampleZh": "那位熱心的外國人向我尋求協助。"
    },
    {
        "id": 30654,
        "en": "forest",
        "kk": "[ˋfɔrəst]",
        "uk": "/ˈfɒrɪst/",
        "zh": "n. 森林、林區、一叢、一片；v. 被森林覆蓋、植林於",
        "unit": 17,
        "example": "Wild birds live in the deep forest.",
        "exampleZh": "野鳥生活在茂密的森林裡。"
    },
    {
        "id": 30655,
        "en": "forget",
        "kk": "[fɚˋɡɛt]",
        "uk": "/fəˈɡet/",
        "zh": "vt. 忘記、遺忘、忘做、忽略",
        "unit": 17,
        "example": "Let's forget the whole thing.",
        "exampleZh": "讓我們忘記整件事。"
    },
    {
        "id": 30656,
        "en": "forgive",
        "kk": "[fɚˋɡɪv]",
        "uk": "/fəˈɡɪv/",
        "zh": "vt. 原諒、寬恕、免除、取消",
        "unit": 17,
        "example": "All right, I'll forgive you.",
        "exampleZh": "好吧，我就原諒你了。"
    },
    {
        "id": 30657,
        "en": "fork",
        "kk": "[fɔrk]",
        "uk": "/fɔːk/",
        "zh": "n. 餐叉、叉子、耙、叉；v. 分岔、岔開、叉起、耙地",
        "unit": 17,
        "example": "Eat your cake with a small fork.",
        "exampleZh": "用一把小叉子吃你的蛋糕。"
    },
    {
        "id": 30658,
        "en": "form",
        "kk": "[fɔrm]",
        "uk": "/fɔːm/",
        "zh": "vt. 出現、（關係、習慣或想法）形成、構成；n. 形式、表、表格、類別",
        "unit": 17,
        "example": "Please fill out this simple health form.",
        "exampleZh": "請填寫這份簡單的健康表格。"
    },
    {
        "id": 30659,
        "en": "formal",
        "kk": "[ˋfɔrməl]",
        "uk": "/ˈfɔːm(ə)l/",
        "zh": "adj. 正式的、莊重的、合乎禮儀的、規範的；n. 正式的社交聚會、正式禮服",
        "unit": 17,
        "example": "You must wear formal clothes to dinner.",
        "exampleZh": "你出席晚宴必須穿著正式服裝。"
    },
    {
        "id": 30660,
        "en": "former",
        "kk": "[ˋfɔrmɚ]",
        "uk": "/ˈfɔːmə(r)/",
        "zh": "adj. 前者的、舊時的、以前的、前……；n. 模子、模型、形成某事的人、線圈架；pron. 前者",
        "unit": 17,
        "example": "He met his former teacher at the store.",
        "exampleZh": "他在商店遇見了他以前的老師。"
    },
    {
        "id": 30661,
        "en": "forty",
        "kk": "[ˋfɔrti]",
        "uk": "/ˈfɔːti/",
        "zh": "n. 四十；adj. 四十的、四十個的",
        "unit": 17,
        "example": "Fifty is the new forty.",
        "exampleZh": "五十歲是新的四十歲。"
    },
    {
        "id": 30662,
        "en": "forward(s)",
        "kk": "[ˋfɔrwɚd(z)]",
        "uk": "/ˈfɔːwəd/",
        "zh": "adv. 向前、在船頭、朝飛機頭部、按順序地；adj. 向前的、前進的、在前部的、位於前面的；n. 前鋒、遠期協議、遠期交易；vt. 轉交、轉寄、寄、傳送",
        "unit": 17,
        "example": "Take two steps forward with me.",
        "exampleZh": "跟我一起向前邁出兩步。"
    },
    {
        "id": 30663,
        "en": "four",
        "kk": "[fɔr]",
        "uk": "/fɔː(r)/",
        "zh": "num. 四、四個；adj. 四的、四個的",
        "unit": 17,
        "example": "She has four cats in her house.",
        "exampleZh": "她的房子裡有四隻貓。"
    },
    {
        "id": 30664,
        "en": "fourteen",
        "kk": "[ˋfɔrˋtin]",
        "uk": "/ˌfɔːˈtiːn/",
        "zh": "num. 十四、十四個、十四歲；n. 十四、數字十四、十四的記號、十四歲；adj. 十四的、十四個的、十四歲的",
        "unit": 17,
        "example": "I'm fourteen years old.",
        "exampleZh": "我今年十四歲。"
    },
    {
        "id": 30665,
        "en": "fox",
        "kk": "[fɑks]",
        "uk": "/fɒks/",
        "zh": "n. 狐狸、狐裘、狡猾的人、妖精；v. 欺騙、耍弄、把……難住、使……猜不透",
        "unit": 17,
        "example": "He's a wily old fox.",
        "exampleZh": "他是個詭計多端的老狐狸。"
    },
    {
        "id": 30666,
        "en": "frank",
        "kk": "[fræŋk]",
        "uk": "/fræŋk/",
        "zh": "adj. 直率的、坦率的、直言不諱的、明白無誤的；v. 蓋郵資已付印記、蓋免付郵資印記、免費郵寄；n. 法蘭克福燻腸、免費郵寄權",
        "unit": 17,
        "example": "Be frank and tell me what you think.",
        "exampleZh": "坦白點，告訴我你的想法。"
    },
    {
        "id": 30667,
        "en": "free",
        "kk": "[fri]",
        "uk": "/friː/",
        "zh": "adj. 免費的、自由的、空閒的；vt. 釋放、使自由、使免於；adv. 免費地、自由地",
        "unit": 17,
        "example": "The sweet food at the party is free.",
        "exampleZh": "派對上的甜食是免費的。"
    },
    {
        "id": 30668,
        "en": "freedom",
        "kk": "[ˋfridəm]",
        "uk": "/ˈfriːdəm/",
        "zh": "n. 自由、自由權、自主權、自主",
        "unit": 17,
        "example": "Birds enjoy their freedom in the sky.",
        "exampleZh": "鳥兒在天空中享受牠們的自由。"
    },
    {
        "id": 30669,
        "en": "fresh",
        "kk": "[frɛʃ]",
        "uk": "/freʃ/",
        "zh": "adj. 新鮮的、新近的、剛經歷的、新的；adv. 剛剛、新近地",
        "unit": 17,
        "example": "We buy fresh milk every morning.",
        "exampleZh": "我們每天早上買新鮮牛奶。"
    },
    {
        "id": 30670,
        "en": "Friday",
        "kk": "[ˋfraɪdi]",
        "uk": "/ˈfraɪdeɪ/",
        "zh": "n. 星期五、忠僕",
        "unit": 17,
        "example": "We will meet him this Friday night.",
        "exampleZh": "我們這個星期五晚上會和他碰面。"
    },
    {
        "id": 30671,
        "en": "friend",
        "kk": "[frɛnd]",
        "uk": "/frend/",
        "zh": "n. 朋友、友人、好友、朋友關係；v. 把（某人）加為好友、與……為友、幫助",
        "unit": 17,
        "example": "He is my best friend at school.",
        "exampleZh": "他是我在學校最好的朋友。"
    },
    {
        "id": 30672,
        "en": "friendly",
        "kk": "[ˋfrɛndli]",
        "uk": "/ˈfrendli/",
        "zh": "adj. 友好的、親切的、友善的、朋友（般）的",
        "unit": 17,
        "example": "The locals are very friendly.",
        "exampleZh": "當地人非常友善。"
    },
    {
        "id": 30673,
        "en": "frighten",
        "kk": "[ˋfraɪtən]",
        "uk": "/ˈfraɪt(ə)n/",
        "zh": "vt. 使害怕、使驚嚇、使驚恐",
        "unit": 17,
        "example": "Sorry, I didn't mean to frighten you.",
        "exampleZh": "抱歉，我不是故意嚇唬你的。"
    },
    {
        "id": 30674,
        "en": "frog",
        "kk": "[frɑɡ]",
        "uk": "/frɒɡ/",
        "zh": "n. 青蛙、蛙、法國佬（對法國人的蔑稱）、裝飾盤花紐扣；v. 捕蛙",
        "unit": 17,
        "example": "The frog puffed itself up.",
        "exampleZh": "這隻青蛙脹得鼓鼓的。"
    },
    {
        "id": 30675,
        "en": "from",
        "kk": "[frʌm]",
        "uk": "/frɒm; frəm/",
        "zh": "prep. 從……、從、從……起、從……開始",
        "unit": 17,
        "example": "This letter is from my good friend.",
        "exampleZh": "這封信來自我的好朋友。"
    },
    {
        "id": 30676,
        "en": "front",
        "kk": "[frʌnt]",
        "uk": "/frʌnt/",
        "zh": "n. 前面、正面、前線、前方；adj. 前方的、前面的、正面的、踢前鋒的；v. 領導、主持、面向、用……覆蓋正面",
        "unit": 17,
        "example": "Charlene sat in the front pew.",
        "exampleZh": "夏琳坐在前排。"
    },
    {
        "id": 30677,
        "en": "fruit",
        "kk": "[frut]",
        "uk": "/fruːt/",
        "zh": "n. 水果、果實、成果、結果；vi. 結果實",
        "unit": 17,
        "example": "Eat fresh fruit every day for health.",
        "exampleZh": "每天吃新鮮水果保持健康。"
    },
    {
        "id": 30678,
        "en": "fry",
        "kk": "[fraɪ]",
        "uk": "/fraɪ/",
        "zh": "vt. 油煎、油炸、被曬傷、以電刑處死；n. 炸薯條、魚苗、魚秧、油煎食品",
        "unit": 17,
        "example": "We can fry some fresh fish.",
        "exampleZh": "我們可以煎一些新鮮的魚。"
    },
    {
        "id": 30679,
        "en": "full",
        "kk": "[fʊl]",
        "uk": "/fʊl/",
        "zh": "adj. 滿的、充滿的、飽的、完整的；adv. 完全地、充分地",
        "unit": 17,
        "example": "She's always full of energy.",
        "exampleZh": "她總是充滿活力。"
    },
    {
        "id": 30680,
        "en": "fun",
        "kk": "[fʌn]",
        "uk": "/fʌn/",
        "zh": "n. 樂趣、享受、嬉戲、玩笑；adj. 有趣的、令人愉快的；v. 開玩笑、取笑",
        "unit": 17,
        "example": "We had a lot of fun today.",
        "exampleZh": "我們今天玩得非常開心。"
    },
    {
        "id": 30681,
        "en": "function",
        "kk": "[ˋfʌŋkʃən]",
        "uk": "/ˈfʌŋkʃ(ə)n/",
        "zh": "n. 功能、職責、宴會、典禮；vi. 運作、工作、運轉、行使職責",
        "unit": 17,
        "example": "What is the main function of this?",
        "exampleZh": "這個東西的主要功能是什麼？"
    },
    {
        "id": 30682,
        "en": "funny",
        "kk": "[ˋfʌni]",
        "uk": "/ˈfʌni/",
        "zh": "adj. 好笑的、滑稽的、有趣的、古怪的；n. 滑稽連環漫畫、笑話；adv. 古怪地、奇怪地",
        "unit": 17,
        "example": "My friend told a very funny story.",
        "exampleZh": "我朋友講了一個非常有趣的故事。"
    },
    {
        "id": 30683,
        "en": "furniture",
        "kk": "[ˋfɝnɪtʃɚ]",
        "uk": "/ˈfɜːnɪtʃə(r)/",
        "zh": "n. 傢俱、裝置、慣常的見解、貯藏物",
        "unit": 17,
        "example": "They bought new wooden furniture today.",
        "exampleZh": "他們今天買了新的木製家具。"
    },
    {
        "id": 30684,
        "en": "future",
        "kk": "[ˋfjutʃɚ]",
        "uk": "/ˈfjuːtʃə(r)/",
        "zh": "n. 未來、將來、前途、前景；adj. 將來的、未來的、將來時態的",
        "unit": 17,
        "example": "He has bright plans for the future.",
        "exampleZh": "他對未來有美好的規劃。"
    },
    {
        "id": 30685,
        "en": "gain",
        "kk": "[ɡen]",
        "uk": "/ɡeɪn/",
        "zh": "vt. 獲得、贏得、受益、增加；n. 增加、好處、改進、收益",
        "unit": 17,
        "example": "You will gain much from this book.",
        "exampleZh": "你會從這本書中收穫很多。"
    },
    {
        "id": 30686,
        "en": "game",
        "kk": "[ɡem]",
        "uk": "/ɡeɪm/",
        "zh": "n. 遊戲、比賽、一局、一場；adj. 願意嘗試的、有冒險精神的、殘疾的、瘸的；v. 操縱、玩影片（或電視、電腦）遊戲、賭博",
        "unit": 17,
        "example": "Let us play a fun game now.",
        "exampleZh": "我們現在來玩個有趣的遊戲吧。"
    },
    {
        "id": 30687,
        "en": "garage",
        "kk": "[ɡɚˋɑʒ]",
        "uk": "/ˈɡærɑːʒ/",
        "zh": "n. 車庫、加油站、汽車修理廠、車庫音樂；v. 把……送入車庫",
        "unit": 17,
        "example": "Dad parked the car in the garage.",
        "exampleZh": "爸爸把車停在車庫裡。"
    },
    {
        "id": 30688,
        "en": "garden",
        "kk": "[ˋɡɑrdən]",
        "uk": "/ˈɡɑːd(ə)n/",
        "zh": "n. 花園、菜園、果園、庭園；vi. 做園藝工作、種植花木",
        "unit": 17,
        "example": "She grows red roses in her garden.",
        "exampleZh": "她在自己的花園裡種植紅玫瑰。"
    },
    {
        "id": 30689,
        "en": "garbage",
        "kk": "[ˋɡɑrbɪdʒ]",
        "uk": "/ˈɡɑːbɪdʒ/",
        "zh": "n. 垃圾、廢物、垃圾箱、廢話",
        "unit": 17,
        "example": "Please throw the garbage into the bin.",
        "exampleZh": "請把垃圾丟進垃圾桶裡。"
    },
    {
        "id": 30690,
        "en": "gas",
        "kk": "[ɡæs]",
        "uk": "/ɡæs/",
        "zh": "n. 瓦斯、氣體、氣體燃料、麻醉氣；vt. 用毒氣殺死、閒聊、空談",
        "unit": 17,
        "example": "Turn off the gas stove safely.",
        "exampleZh": "安全地關掉瓦斯爐。"
    },
    {
        "id": 30691,
        "en": "gate",
        "kk": "[ɡet]",
        "uk": "/ɡeɪt/",
        "zh": "n. 大門、登機口、閘門、閥門",
        "unit": 17,
        "example": "Please close the front gate after you.",
        "exampleZh": "進來後請隨手關上前門。"
    },
    {
        "id": 30692,
        "en": "gather",
        "kk": "[ˋɡæðɚ]",
        "uk": "/ˈɡæðə(r)/",
        "zh": "vt. 集合、聚集、召集、收集",
        "unit": 17,
        "example": "Students gather in the hall every morning.",
        "exampleZh": "學生們每天早晨在大廳集合。"
    },
    {
        "id": 30693,
        "en": "general",
        "kk": "[ˋdʒɛnɚəl]",
        "uk": "/ˈdʒen(ə)rəl/",
        "zh": "adj. 一般的、總體的、普遍的、常規的；n. 將軍、上將、半軍事化管理的宗教組織（如耶穌會修士、多明我會修士或救世軍）的領袖、大眾",
        "unit": 17,
        "example": "She had a general idea of the plan.",
        "exampleZh": "她對這個計畫有一個整體的概念。"
    },
    {
        "id": 30694,
        "en": "generous",
        "kk": "[ˋdʒɛnɚəs]",
        "uk": "/ˈdʒenərəs/",
        "zh": "adj. 慷慨的、大方的、大量的、豐富的",
        "unit": 17,
        "example": "She is generous to a fault.",
        "exampleZh": "她慷慨得過分了。"
    },
    {
        "id": 30695,
        "en": "genius",
        "kk": "[ˋdʒinjəs]",
        "uk": "/ˈdʒiːniəs/",
        "zh": "n. 天才、天賦、天資、智商很高的人；adj. 天才的",
        "unit": 17,
        "example": "My brother is a math genius.",
        "exampleZh": "我哥哥是個數學天才。"
    },
    {
        "id": 30696,
        "en": "gentle",
        "kk": "[ˋdʒɛntəl]",
        "uk": "/ˈdʒent(ə)l/",
        "zh": "adj. 溫和的、文靜的、溫柔的、輕柔的；v. 使（或變）溫柔、平靜、使馴服；n. 蛆、餌",
        "unit": 17,
        "example": "These poems reveal her gentle side.",
        "exampleZh": "這些詩揭示了她溫柔的一面。"
    },
    {
        "id": 30697,
        "en": "gentleman",
        "kk": "[ˋdʒɛntəlmən]",
        "uk": "/ˈdʒentlmən/",
        "zh": "n. 紳士、先生、彬彬有禮的人、有教養的人",
        "unit": 17,
        "example": "He is a very polite old gentleman.",
        "exampleZh": "他是一位非常有禮貌的老紳士。"
    },
    {
        "id": 30698,
        "en": "geography",
        "kk": "[dʒiˋɑɡrəfi]",
        "uk": "/dʒiˈɒɡrəfi/",
        "zh": "n. 地理、地理學、地形、地貌",
        "unit": 17,
        "example": "We study world geography in this class.",
        "exampleZh": "我們在這堂課學習世界地理。"
    },
    {
        "id": 30699,
        "en": "gesture",
        "kk": "[ˋdʒɛstʃɚ]",
        "uk": "/ˈdʒestʃə(r)/",
        "zh": "n. 表示、手勢、姿勢、姿態；vi. 打手勢、用動作示意",
        "unit": 17,
        "example": "He made a warm hand gesture.",
        "exampleZh": "他做了一個溫暖的手勢。"
    },
    {
        "id": 30700,
        "en": "get",
        "kk": "[ɡɛt]",
        "uk": "/ɡet/",
        "zh": "v. 得到、獲得、收到、變得",
        "unit": 17,
        "example": "Somebody get a doctor!",
        "exampleZh": "有人請醫生來嗎！"
    },
    {
        "id": 30701,
        "en": "ghost",
        "kk": "[ɡost]",
        "uk": "/ɡəʊst/",
        "zh": "n. 鬼、幽靈、記憶、回憶；v. 代人寫作、為人代筆、滑行、作祟於",
        "unit": 17,
        "example": "The little boy is afraid of ghosts.",
        "exampleZh": "那個小男孩很害怕鬼魂。"
    },
    {
        "id": 30702,
        "en": "giant",
        "kk": "[ˋdʒaɪənt]",
        "uk": "/ˈdʒaɪənt/",
        "zh": "n. 巨人、高大健壯的人、巨獸、巨型植物；adj. 巨大的、偉大的",
        "unit": 17,
        "example": "He's a giant of a man.",
        "exampleZh": "他是個巨人。"
    },
    {
        "id": 30703,
        "en": "gift",
        "kk": "[ɡɪft]",
        "uk": "/ɡɪft/",
        "zh": "n. 禮物、贈品、恩賜、授予；v. 贈送、讓（對手）獲得",
        "unit": 17,
        "example": "I got a nice gift from my mom.",
        "exampleZh": "我從媽媽那裡收到一份很棒的禮物。"
    },
    {
        "id": 30704,
        "en": "girl",
        "kk": "[ɡɝl]",
        "uk": "/ɡɜːl/",
        "zh": "n. 女孩、姑娘、年輕女子、未婚女子",
        "unit": 17,
        "example": "The little girl has a red bag.",
        "exampleZh": "那個小女孩有一個紅色的袋子。"
    },
    {
        "id": 30705,
        "en": "give",
        "kk": "[ɡɪv]",
        "uk": "/ɡɪv/",
        "zh": "v. 給予、給、交給、贈送；n. 伸展性、彈性、適應（或順應）能力、靈活性",
        "unit": 17,
        "example": "Please give this book to your father.",
        "exampleZh": "請把這本書交給你爸爸。"
    },
    {
        "id": 30706,
        "en": "glad",
        "kk": "[ɡlæd]",
        "uk": "/ɡlæd/",
        "zh": "adj. 高興的、感激的、樂意的、非常願意的；v. 取悅、使高興",
        "unit": 17,
        "example": "I'm glad you came along.",
        "exampleZh": "我很高興你能來。"
    },
    {
        "id": 30707,
        "en": "glass",
        "kk": "[ɡlæs]",
        "uk": "/ɡlɑːs/",
        "zh": "n. 玻璃、玻璃杯、一杯之量、玻璃器皿；v. 用玻璃覆蓋、給……裝玻璃、用望遠鏡觀察、用啤酒杯打",
        "unit": 17,
        "example": "He drank a glass of cold water.",
        "exampleZh": "他喝了一杯冷水。"
    },
    {
        "id": 30708,
        "en": "glasses",
        "kk": "[ˋɡlæsəz]",
        "uk": "/ˈɡlɑːsɪz/",
        "zh": "n. 眼鏡、玻璃杯、雙筒望遠鏡；v. 給……裝上玻璃、把……裝入玻璃容器內",
        "unit": 17,
        "example": "My father wears glasses to read books.",
        "exampleZh": "我父親戴眼鏡看書。"
    },
    {
        "id": 30709,
        "en": "glove",
        "kk": "[ɡlʌv]",
        "uk": "/ɡlʌv/",
        "zh": "n. 手套、加墊防護手套；v. 給……戴手套、接",
        "unit": 17,
        "example": "She bent down to pick up her glove.",
        "exampleZh": "她俯身去撿手套。"
    },
    {
        "id": 30710,
        "en": "glue",
        "kk": "[ɡlu]",
        "uk": "/ɡluː/",
        "zh": "n. 膠水、凝聚力；vt. 膠、膠合、貼上、專注於",
        "unit": 17,
        "example": "I made a model out of paper and glue.",
        "exampleZh": "我用紙和膠水做了一個模型。"
    },
    {
        "id": 30711,
        "en": "go",
        "kk": "[ɡo]",
        "uk": "/ɡəʊ/",
        "zh": "vi. 去、走、前往、進行；n. 輪到的機會、嘗試、精力",
        "unit": 17,
        "example": "We can go to the park now.",
        "exampleZh": "我們現在可以去公園了。"
    },
    {
        "id": 30712,
        "en": "goal",
        "kk": "[ɡol]",
        "uk": "/ɡəʊl/",
        "zh": "n. 目標、球門、進球得分、目的；v. 射門、射門得分",
        "unit": 17,
        "example": "He scored a great goal in soccer.",
        "exampleZh": "他在足球賽中踢進了精彩的一球。"
    },
    {
        "id": 30713,
        "en": "goat",
        "kk": "[ɡot]",
        "uk": "/ɡəʊt/",
        "zh": "n. 山羊、老色鬼、替罪羊、愚蠢的人",
        "unit": 17,
        "example": "I roped the goat to a post.",
        "exampleZh": "我把山羊拴在一根柱子上。"
    },
    {
        "id": 30714,
        "en": "god",
        "kk": "[ɡɑd]",
        "uk": "/ɡɒd/",
        "zh": "n. 上帝、神、天主、真主；v. 膜拜、崇拜；int. 天哪",
        "unit": 17,
        "example": "People pray to God for good luck.",
        "exampleZh": "人們向神祈求好運。"
    },
    {
        "id": 30715,
        "en": "gold",
        "kk": "[ɡold]",
        "uk": "/ɡəʊld/",
        "zh": "n. 黃金、金、金幣、黃金製品；adj. 金色的、金制的",
        "unit": 17,
        "example": "Gold rings adorned his fingers.",
        "exampleZh": "他的手指上戴著金戒指。"
    },
    {
        "id": 30716,
        "en": "golden",
        "kk": "[ˋɡoldən]",
        "uk": "/ˈɡəʊldən/",
        "zh": "adj. 金色的、金制的、極好的、成功的",
        "unit": 17,
        "example": "The golden light gilded the sea.",
        "exampleZh": "金色的光芒為大海鍍上了一層金色。"
    },
    {
        "id": 30717,
        "en": "golf",
        "kk": "[ɡɑlf]",
        "uk": "/ɡɒlf/",
        "zh": "n. 高爾夫球運動、字母G的程式碼；v. 打高爾夫球",
        "unit": 17,
        "example": "My father loves to play golf.",
        "exampleZh": "我父親很喜歡打高爾夫球。"
    },
    {
        "id": 30718,
        "en": "good",
        "kk": "[ɡʊd]",
        "uk": "/ɡʊd/",
        "zh": "adj. 好的、優良的、能幹的、擅長的；n. 善、正義、好事、商品；adv. 好地、徹底地、完全地",
        "unit": 17,
        "example": "This is a very good book.",
        "exampleZh": "這是一本非常好的書。"
    },
    {
        "id": 30719,
        "en": "goodness",
        "kk": "[ˋɡʊdnəs]",
        "uk": "/ˈɡʊdnəs/",
        "zh": "n. 善良、美德、營養、精華；int. 天哪、啊呀",
        "unit": 17,
        "example": "Goodness, I wonder if he knows.",
        "exampleZh": "天哪，我不清楚他知不知道。"
    },
    {
        "id": 30720,
        "en": "goose",
        "kk": "[ɡus]",
        "uk": "/ɡuːs/",
        "zh": "n. 鵝、鵝肉、雌鵝、傻瓜；v. 觸控（或捏）某人的臀部、推動、激勵、開大（汽車等）的油門",
        "unit": 17,
        "example": "The big white goose became a black goose.",
        "exampleZh": "大白鵝變成了黑鵝。"
    },
    {
        "id": 30721,
        "en": "government",
        "kk": "[ˋɡʌvɚmənt]",
        "uk": "/ˈɡʌvənmənt/",
        "zh": "n. 政府、內閣、政體、國家體制",
        "unit": 17,
        "example": "The government took swift action.",
        "exampleZh": "政府立即採取了行動。"
    },
    {
        "id": 30722,
        "en": "grade",
        "kk": "[ɡred]",
        "uk": "/ɡreɪd/",
        "zh": "n. 年級、等級、品級、級別；vt. 評分、按照級別安排或分配、分類、給……評分",
        "unit": 17,
        "example": "She got a good grade on math.",
        "exampleZh": "她在數學科拿到了好成績。"
    },
    {
        "id": 30723,
        "en": "gram",
        "kk": "[ɡræm]",
        "uk": "/ɡræm/",
        "zh": "n. 克、鷹嘴豆、奶奶、外婆",
        "unit": 17,
        "example": "Add fifty grams of white sugar.",
        "exampleZh": "加入五十公克的白糖。"
    },
    {
        "id": 30724,
        "en": "grandfather",
        "kk": "[ˋɡrænd͵fɑðɚ]",
        "uk": "/ˈɡrænfɑːðə(r)/",
        "zh": "n. 祖父、外祖父、始祖、鼻祖",
        "unit": 17,
        "example": "My grandfather goes for a walk daily.",
        "exampleZh": "我的祖父每天都會去散步。"
    },
    {
        "id": 30725,
        "en": "grandmother",
        "kk": "[ˋɡrænd͵mʌðɚ]",
        "uk": "/ˈɡrænmʌðə(r)/",
        "zh": "n. 祖母、奶奶、外婆、女祖先",
        "unit": 17,
        "example": "Her grandmother mumbled in her sleep.",
        "exampleZh": "奶奶在睡夢中呢喃著。"
    },
    {
        "id": 30726,
        "en": "grandson",
        "kk": "[ˋɡrænd͵sʌn]",
        "uk": "/ˈɡrænsʌn/",
        "zh": "n. 孫子、外孫",
        "unit": 17,
        "example": "He is my grandson.",
        "exampleZh": "他是我的孫子。"
    },
    {
        "id": 30727,
        "en": "grape",
        "kk": "[ɡrep]",
        "uk": "/ɡreɪp/",
        "zh": "n. 葡萄、葡萄酒、霰彈、葡萄彈",
        "unit": 17,
        "example": "Is it a grape or a plum?",
        "exampleZh": "這是葡萄還是李子？"
    },
    {
        "id": 30728,
        "en": "grass",
        "kk": "[ɡræs]",
        "uk": "/ɡrɑːs/",
        "zh": "n. 草、草地、草坪、大麻；v. 在……上種草、告發、捕（魚）並帶上河岸、將（某人）撞倒",
        "unit": 17,
        "example": "The grass had grown waist-high.",
        "exampleZh": "草已經長到及腰高了。"
    },
    {
        "id": 30729,
        "en": "gray",
        "kk": "[ɡre]",
        "uk": "/ɡreɪ/",
        "zh": "adj. 灰色的、蒼白的、灰白頭髮的、陰鬱的；vi. 成為灰色或灰白；vt. 成為灰色或灰白、使成灰色或灰白；v. 成為灰色或灰白；n. 灰色、暗淡的光線、戈瑞",
        "unit": 17,
        "example": "I want that gray coat.",
        "exampleZh": "我想要那件灰色外套。"
    },
    {
        "id": 30730,
        "en": "great",
        "kk": "[ɡret]",
        "uk": "/ɡreɪt/",
        "zh": "adj. 傑出的、偉大的、著名的、大型的；adv. 很好地、很棒地；n. 偉人、偉大的事物、金曲",
        "unit": 17,
        "example": "We had a great time at school.",
        "exampleZh": "我們在學校度過了一段美好的時光。"
    },
    {
        "id": 30731,
        "en": "greedy",
        "kk": "[ˋɡridi]",
        "uk": "/ˈɡriːdi/",
        "zh": "adj. 貪心的、貪婪的、貪吃的、嘴饞的",
        "unit": 17,
        "example": "Linda became an honest girl and was never greedy.",
        "exampleZh": "琳達變成了一個誠實的女孩，從不貪婪。"
    },
    {
        "id": 30732,
        "en": "green",
        "kk": "[ɡrin]",
        "uk": "/ɡriːn/",
        "zh": "adj. 綠色的、青春的；n. 綠色、青春；vt. 使……變綠色；vi. 變綠色",
        "unit": 17,
        "example": "She wore purple and green silk.",
        "exampleZh": "她穿著紫色和綠色的絲綢。"
    },
    {
        "id": 30733,
        "en": "greet",
        "kk": "[ɡrit]",
        "uk": "/ɡriːt/",
        "zh": "vt. 問候、歡迎、迎接、對……作出反應",
        "unit": 17,
        "example": "Always greet your guests with a smile.",
        "exampleZh": "接待客人時總是要帶著微笑致意。"
    },
    {
        "id": 30734,
        "en": "ground",
        "kk": "[ɡraʊnd]",
        "uk": "/ɡraʊnd/",
        "zh": "n. 土地、地、地面、土壤；vt. 以……為根據、給……以紮實的基礎教育、使停飛、禁足；adj. 切碎的、磨碎的、地面的、地勤的",
        "unit": 17,
        "example": "The ground was frozen solid.",
        "exampleZh": "地面凍得嚴嚴實實。"
    },
    {
        "id": 30735,
        "en": "group",
        "kk": "[ɡrup]",
        "uk": "/ɡruːp/",
        "zh": "n. 群體、集體、團體、組；vt. 分組、成組、聚集、將……分類",
        "unit": 17,
        "example": "A group of boys played in the park.",
        "exampleZh": "一群男孩在公園裡玩耍。"
    },
    {
        "id": 30736,
        "en": "grow",
        "kk": "[ɡro]",
        "uk": "/ɡrəʊ/",
        "zh": "v. 生長、長大、成長、成活",
        "unit": 17,
        "example": "Green trees grow fast in our garden.",
        "exampleZh": "綠樹在我們的花園裡長得很快。"
    },
    {
        "id": 30737,
        "en": "guard",
        "kk": "[ɡɑrd]",
        "uk": "/ɡɑːd/",
        "zh": "n. 守衛、衛兵、警衛、看守；vt. 保護、守衛、保衛、看守",
        "unit": 17,
        "example": "A guard stands at the school door.",
        "exampleZh": "一名警衛站在學校門口。"
    },
    {
        "id": 30738,
        "en": "guava",
        "kk": "[ˋɡwɑvə]",
        "uk": "/ˈɡwɑːvə/",
        "zh": "n. 番石榴、番石榴樹",
        "unit": 17,
        "example": "I want to eat guava.",
        "exampleZh": "我想吃n. 番石榴。"
    },
    {
        "id": 30739,
        "en": "guess",
        "kk": "[ɡɛs]",
        "uk": "/ɡes/",
        "zh": "vt. 猜測、估計、猜中、猜到；n. 推測、猜測",
        "unit": 17,
        "example": "Can you guess the right answer?",
        "exampleZh": "你能猜出正確答案嗎？"
    },
    {
        "id": 30740,
        "en": "guest",
        "kk": "[ɡɛst]",
        "uk": "/ɡest/",
        "zh": "n. 客人、特邀嘉賓、客串演員、顧客；v. 做特邀嘉賓、客串",
        "unit": 17,
        "example": "We have a guest in our home.",
        "exampleZh": "我們家裡來了一位客人。"
    },
    {
        "id": 30741,
        "en": "guide",
        "kk": "[ɡaɪd]",
        "uk": "/ɡaɪd/",
        "zh": "vt. 指導、帶領、引導、任嚮導；n. 指南、手冊、導遊、嚮導",
        "unit": 17,
        "example": "The guide showed us around the museum.",
        "exampleZh": "導遊帶我們參觀了博物館。"
    },
    {
        "id": 30742,
        "en": "guitar",
        "kk": "[ɡɪˋtɑr]",
        "uk": "/ɡɪˈtɑː(r)/",
        "zh": "n. 吉他、六絃琴",
        "unit": 17,
        "example": "He played some wah-wah guitar.",
        "exampleZh": "他彈了一會兒哇哇吉他。"
    },
    {
        "id": 30743,
        "en": "gun",
        "kk": "[ɡʌn]",
        "uk": "/ɡʌn/",
        "zh": "n. 槍、炮、起跑訊號、發令槍聲；vt. 加大……的油門、使加速、猛投、猛擲",
        "unit": 17,
        "example": "The police man had a small gun.",
        "exampleZh": "這名警察帶了一把小槍。"
    },
    {
        "id": 30744,
        "en": "guy",
        "kk": "[ɡaɪ]",
        "uk": "/ɡaɪ/",
        "zh": "n. 小伙子、男人、傢伙、夥計們；v. 嘲笑、戲弄、用支索穩定",
        "unit": 17,
        "example": "That guy over there is my brother.",
        "exampleZh": "那邊那個傢伙是我哥哥。"
    },
    {
        "id": 30745,
        "en": "gym",
        "kk": "[dʒɪm]",
        "uk": "/dʒɪm/",
        "zh": "n. 體育館、健身房、體育活動",
        "unit": 17,
        "example": "The boys run in the gym.",
        "exampleZh": "男孩們在體育館裡跑步。"
    },
    {
        "id": 30746,
        "en": "habit",
        "kk": "[ˋhæbət]",
        "uk": "/ˈhæbɪt/",
        "zh": "n. 習慣、癮、道袍、道服；v. 給……穿衣",
        "unit": 17,
        "example": "I only do it out of habit.",
        "exampleZh": "我這麼做只是出於習慣。"
    },
    {
        "id": 30747,
        "en": "hair",
        "kk": "[hɛr]",
        "uk": "/heə(r)/",
        "zh": "n. 頭髮、毛髮、些微、茸毛；comb. 有……毛髮（或頭髮）的",
        "unit": 17,
        "example": "Katy has long blackish hair.",
        "exampleZh": "凱蒂有一頭黑色的長髮。"
    },
    {
        "id": 30748,
        "en": "half",
        "kk": "[hæf]",
        "uk": "/hɑːf/",
        "zh": "n. 一半、二分之一、半場、半局；pron. 一半、……點半、大量、許多；det. 一半；adj. 半個、一半的、不完整的、部分的；adv. 一半地、接近一半地、部分地、不完全地",
        "unit": 17,
        "example": "He gave me half of his apple.",
        "exampleZh": "他把他的蘋果分了一半給我。"
    },
    {
        "id": 30749,
        "en": "hall",
        "kk": "[hɔl]",
        "uk": "/hɔːl/",
        "zh": "n. 大廳、禮堂、門廳、走廊",
        "unit": 17,
        "example": "We all met in the school hall.",
        "exampleZh": "我們都在學校大禮堂集合。"
    },
    {
        "id": 30750,
        "en": "Halloween",
        "kk": "[͵hæləˋwin]",
        "uk": "/ˌhæləʊˈiːn/",
        "zh": "n. 萬聖節、萬聖節前夕",
        "unit": 17,
        "example": "We eat sweet candy on Halloween.",
        "exampleZh": "我們在萬聖節吃甜糖果。"
    },
    {
        "id": 30751,
        "en": "ham",
        "kk": "[hæm]",
        "uk": "/hæm/",
        "zh": "n. 火腿、蹩腳演員、無線通訊愛好者、大腿後部；v. 過火地表演",
        "unit": 17,
        "example": "I was eating ham and Swiss cheese on rye.",
        "exampleZh": "我正在吃黑麥火腿和瑞士起司。"
    },
    {
        "id": 30752,
        "en": "hamburger",
        "kk": "[ˋhæmbɚɡɚ]",
        "uk": "/ˈhæmbɜːɡə(r)/",
        "zh": "n. 漢堡、漢堡包、碎牛肉",
        "unit": 17,
        "example": "I ate a big hamburger for lunch.",
        "exampleZh": "我午餐吃了一個大漢堡。"
    },
    {
        "id": 30753,
        "en": "hammer",
        "kk": "[ˋhæmɚ]",
        "uk": "/ˈhæmə(r)/",
        "zh": "n. 錘子、榔頭、木槌、鏈球；v. 敲擊、用力敲打、猛踢、強行灌輸",
        "unit": 17,
        "example": "He hit the nail with a hammer.",
        "exampleZh": "他用鐵鎚敲釘子。"
    },
    {
        "id": 30754,
        "en": "hand",
        "kk": "[hænd]",
        "uk": "/hænd/",
        "zh": "n. 手、指標、一局牌、一手牌；comb. 用……手的、手工；vt. 交、遞、支援、攙扶",
        "unit": 17,
        "example": "Please hold my hand when we cross.",
        "exampleZh": "過馬路時請牽著我的手。"
    },
    {
        "id": 30755,
        "en": "handkerchief",
        "kk": "[ˋhæŋkɚtʃɪf]",
        "uk": "/ˈhæŋkətʃɪf/",
        "zh": "n. 手帕、頭巾、圍巾",
        "unit": 17,
        "example": "The handkerchief is edged with lace.",
        "exampleZh": "這條手絹鑲著網眼花邊。"
    },
    {
        "id": 30756,
        "en": "handle",
        "kk": "[ˋhændəl]",
        "uk": "/ˈhænd(ə)l/",
        "zh": "vt. 處理、拿、應付、操縱；n. 把手、拉手、柄、提手；comb. 有……個柄的、有……柄的",
        "unit": 17,
        "example": "I pumped the handle like crazy.",
        "exampleZh": "我拼命地來回搖動手柄。"
    },
    {
        "id": 30757,
        "en": "handsome",
        "kk": "[ˋhænsəm]",
        "uk": "/ˈhænsəm/",
        "zh": "adj. 英俊的、帥氣的、端莊健美的、寬敞而美觀的",
        "unit": 17,
        "example": "He was tall, lean and handsome.",
        "exampleZh": "他長得瘦高而英俊。"
    },
    {
        "id": 30758,
        "en": "hang",
        "kk": "[hæŋ]",
        "uk": "/hæŋ/",
        "zh": "v. 掛、懸掛、吊、掛在牆上；n. 懸掛方式、下垂、低垂、陳列",
        "unit": 17,
        "example": "Hang your coat on the door hook.",
        "exampleZh": "把你的外套掛在門上的鉤子。"
    },
    {
        "id": 30759,
        "en": "hanger",
        "kk": "[ˋhæŋɚ]",
        "uk": "/ˈhæŋə(r)/",
        "zh": "n. 衣架、掛鉤、吊架、絞刑執行者",
        "unit": 17,
        "example": "I need some hangers.",
        "exampleZh": "我需要一些衣架掛衣服。"
    },
    {
        "id": 30760,
        "en": "happen",
        "kk": "[ˋhæpən]",
        "uk": "/ˈhæpən/",
        "zh": "v. 發生、使遭遇、碰巧；adv. 或許、大概",
        "unit": 17,
        "example": "That doesn't happen very often.",
        "exampleZh": "這種情況並不常發生。"
    },
    {
        "id": 30761,
        "en": "happy",
        "kk": "[ˋhæpi]",
        "uk": "/ˈhæpi/",
        "zh": "adj. 快樂的、幸福的、使人高興的、滿意的；comb. 濫用……的",
        "unit": 17,
        "example": "The children look very happy today.",
        "exampleZh": "孩子們今天看起來很高興。"
    },
    {
        "id": 30762,
        "en": "hard",
        "kk": "[hɑrd]",
        "uk": "/hɑːd/",
        "zh": "adj. 困難的、硬的、堅硬的、艱苦的；adv. 努力地、猛烈地、費力地",
        "unit": 17,
        "example": "He works very hard every single day.",
        "exampleZh": "他每一天都非常努力工作。"
    },
    {
        "id": 30763,
        "en": "hardly",
        "kk": "[ˋhɑrdli]",
        "uk": "/ˈhɑːdli/",
        "zh": "adv. 幾乎不、幾乎沒有、剛剛、才",
        "unit": 17,
        "example": "I've got hardly any money.",
        "exampleZh": "我幾乎沒有錢了。"
    },
    {
        "id": 30764,
        "en": "hat",
        "kk": "[hæt]",
        "uk": "/hæt/",
        "zh": "n. 帽子、職位、角色；v. 給……戴上帽子、供應帽子、製造帽子",
        "unit": 17,
        "example": "He wears a warm hat in winter.",
        "exampleZh": "他冬天戴著一頂保暖的帽子。"
    },
    {
        "id": 30765,
        "en": "hate",
        "kk": "[het]",
        "uk": "/heɪt/",
        "zh": "vt. 恨、厭惡、不喜歡、仇恨；n. 討厭、憎惡、憎恨、所憎惡的人",
        "unit": 17,
        "example": "I hate to get up so early.",
        "exampleZh": "我討厭這麼早起床。"
    },
    {
        "id": 30766,
        "en": "have",
        "kk": "[hæv]",
        "uk": "/hæv; həv/",
        "zh": "vt. 有、擁有、顯示出、帶有；n. 有錢人、詐騙",
        "unit": 17,
        "example": "We have a big test this morning.",
        "exampleZh": "我們今天早上有一場大考試。"
    },
    {
        "id": 30767,
        "en": "head",
        "kk": "[hɛd]",
        "uk": "/hed/",
        "zh": "n. 頭、頭腦、智力、頂部；vt. 領導、朝（某方向）行進、主管、居……之首；adj. 領頭的、負責的、頭的、在頂端的；adv. 有頭像的一面朝上",
        "unit": 17,
        "example": "He nodded his head with a smile.",
        "exampleZh": "他帶著微笑點了點頭。"
    },
    {
        "id": 30768,
        "en": "headache",
        "kk": "[ˋhɛd͵ek]",
        "uk": "/ˈhedeɪk/",
        "zh": "n. 頭痛、使人頭痛的事、難題",
        "unit": 17,
        "example": "I have a bad headache today.",
        "exampleZh": "我今天頭痛得很厲害。"
    },
    {
        "id": 30769,
        "en": "health",
        "kk": "[hɛlθ]",
        "uk": "/helθ/",
        "zh": "n. 健康、身體狀況、醫療、衛生",
        "unit": 17,
        "example": "Good food is very good for health.",
        "exampleZh": "好的食物對健康非常好。"
    },
    {
        "id": 30770,
        "en": "healthy",
        "kk": "[ˋhɛlθi]",
        "uk": "/ˈhelθi/",
        "zh": "adj. 健康的、健壯的、有益身心的、明智的",
        "unit": 17,
        "example": "Eating green food keeps your body healthy.",
        "exampleZh": "吃綠色蔬菜能保持身體健康。"
    },
    {
        "id": 30771,
        "en": "hear",
        "kk": "[hir]",
        "uk": "/hɪə(r)/",
        "zh": "v. 聽、聽到、聽見、聆聽",
        "unit": 17,
        "example": "Can you hear the loud music outside?",
        "exampleZh": "你能聽到外面大聲的音樂嗎？"
    },
    {
        "id": 30772,
        "en": "heart",
        "kk": "[hɑrt]",
        "uk": "/hɑːt/",
        "zh": "n. 心臟、心、內心、感情；v. 喜愛、深愛",
        "unit": 17,
        "example": "Her heart beats fast when she runs.",
        "exampleZh": "她跑步時心跳得很快。"
    },
    {
        "id": 30773,
        "en": "heat",
        "kk": "[hit]",
        "uk": "/hiːt/",
        "zh": "n. 熱、熱能、熱量、炎熱；vt. 加熱、激起、使激動、使變暖",
        "unit": 17,
        "example": "The summer heat makes me feel tired.",
        "exampleZh": "夏天的酷熱讓我感到疲累。"
    },
    {
        "id": 30774,
        "en": "heater",
        "kk": "[ˋhitɚ]",
        "uk": "/ˈhiːtə(r)/",
        "zh": "n. 熱水器、加熱器、取暖器、加熱工",
        "unit": 17,
        "example": "Turn on the heater to keep warm.",
        "exampleZh": "打開電暖器來保暖。"
    },
    {
        "id": 30775,
        "en": "heavy",
        "kk": "[ˋhɛvi]",
        "uk": "/ˈhevi/",
        "zh": "adj. 重的、沉的、大量的、嚴重的；n. 反派、重要人物；adv. 濃濃地、沉重地、使不安、使擔憂",
        "unit": 17,
        "example": "This big box is too heavy for me.",
        "exampleZh": "這個大箱子對我來說太重了。"
    },
    {
        "id": 30776,
        "en": "height",
        "kk": "[haɪt]",
        "uk": "/haɪt/",
        "zh": "n. 高度、身高、高、高處",
        "unit": 17,
        "example": "The aircraft was gaining height.",
        "exampleZh": "飛機在爬高。"
    },
    {
        "id": 30777,
        "en": "helicopter",
        "kk": "[ˋhɛlɪ͵kɑptɚ]",
        "uk": "/ˈhelɪkɒptə(r)/",
        "zh": "n. 直升機；v. 用直升機運送、乘直升機飛至",
        "unit": 17,
        "example": "The helicopter rose into the air.",
        "exampleZh": "直升機升上了天空。"
    },
    {
        "id": 30778,
        "en": "help",
        "kk": "[hɛlp]",
        "uk": "/help/",
        "zh": "vt. 幫助、援助、改善狀況、對……有益；n. 協助、幫助、有助益的東西、有用；int. 救命",
        "unit": 17,
        "example": "Can you help me with this box?",
        "exampleZh": "你能幫我拿這個箱子嗎？"
    },
    {
        "id": 30779,
        "en": "helpful",
        "kk": "[ˋhɛlpfəl]",
        "uk": "/ˈhelpf(ə)l/",
        "zh": "adj. 有助益的、有幫助的、有用的、願意幫忙的",
        "unit": 17,
        "example": "Sorry I can't be more helpful.",
        "exampleZh": "抱歉，我無法提供更多協助。"
    },
    {
        "id": 30780,
        "en": "hen",
        "kk": "[hɛn]",
        "uk": "/hen/",
        "zh": "n. 母雞、雌禽、姑娘、用於其他鳥的名稱",
        "unit": 17,
        "example": "The brown hen laid a fresh egg.",
        "exampleZh": "那隻棕色母雞下了一顆新鮮的蛋。"
    },
    {
        "id": 30781,
        "en": "here",
        "kk": "[hir]",
        "uk": "/hɪə(r)/",
        "zh": "adv. 在這裡、此處、到這裡、朝這裡；int. 嘿、喂！；n. 這裡、此處",
        "unit": 17,
        "example": "Put your school bag right here.",
        "exampleZh": "把你的書包放在這裡就好。"
    },
    {
        "id": 30782,
        "en": "hero",
        "kk": "[ˋhɪro]",
        "uk": "/ˈhɪərəʊ/",
        "zh": "n. 英雄、勇士、男主角、男主人公",
        "unit": 17,
        "example": "The brave dog became a local hero.",
        "exampleZh": "那隻勇敢的狗成了當地的英雄。"
    },
    {
        "id": 30783,
        "en": "hide",
        "kk": "[haɪd]",
        "uk": "/haɪd/",
        "zh": "vt. 藏、把……藏起來、隱藏、躲藏；n. 隱匿處、埋伏處、獸皮、生命",
        "unit": 17,
        "example": "The cat likes to hide under beds.",
        "exampleZh": "那隻貓喜歡躲在床底下。"
    },
    {
        "id": 30784,
        "en": "high",
        "kk": "[haɪ]",
        "uk": "/haɪ/",
        "zh": "adj. 高的、高度的、高級的；adv. 高、向高處、高度地；n. 高處、最高水平",
        "unit": 17,
        "example": "The bird flies high above the trees.",
        "exampleZh": "鳥兒在樹林上空高高飛翔。"
    },
    {
        "id": 30785,
        "en": "highway",
        "kk": "[ˋhaɪ͵we]",
        "uk": "/ˈhaɪweɪ/",
        "zh": "n. 公路、幹道、公用通道",
        "unit": 17,
        "example": "Cars drive very fast on the highway.",
        "exampleZh": "汽車在公路上開得非常快。"
    },
    {
        "id": 30786,
        "en": "hike",
        "kk": "[haɪk]",
        "uk": "/haɪk/",
        "zh": "n. 徒步旅行、遠足、大幅度提高、猛增；v. 遠足、徒步旅行、突然增加、突然提高",
        "unit": 17,
        "example": "We like to hike in hills.",
        "exampleZh": "我們喜歡在小山裡健行。"
    },
    {
        "id": 30787,
        "en": "hill",
        "kk": "[hɪl]",
        "uk": "/hɪl/",
        "zh": "n. 小山丘、山丘、小山、斜坡；v. 使成堆",
        "unit": 17,
        "example": "The ball rolled down the hill.",
        "exampleZh": "球滾下了山。"
    },
    {
        "id": 30788,
        "en": "hip",
        "kk": "[hɪp]",
        "uk": "/hɪp/",
        "zh": "n. 臀部、髖、屋脊、野薔薇果；adj. 時髦的；int. 加油！好哇！",
        "unit": 17,
        "example": "He fell and fractured his hip.",
        "exampleZh": "他跌了一跤將髖關節摔裂。"
    },
    {
        "id": 30789,
        "en": "hippo",
        "kk": "[ˋhɪpo]",
        "uk": "/ˈhɪpəʊ/",
        "zh": "n. 河馬",
        "unit": 17,
        "example": "The hippo lives in water.",
        "exampleZh": "河馬生活在水裡。"
    },
    {
        "id": 30790,
        "en": "hire",
        "kk": "[ˋhaɪɚ]",
        "uk": "/ˈhaɪə(r)/",
        "zh": "vt. 租用、租借、聘用、錄用；n. 租借、租金、被僱用的人",
        "unit": 17,
        "example": "Do you hire out bikes?",
        "exampleZh": "你們出租腳踏車嗎？"
    },
    {
        "id": 30791,
        "en": "history",
        "kk": "[ˋhɪstɚi]",
        "uk": "/ˈhɪstri; ˈhɪstəri/",
        "zh": "n. 歷史、沿革、發展過程、歷史課",
        "unit": 17,
        "example": "We learn about world history in class.",
        "exampleZh": "我們在課堂上學習世界歷史。"
    },
    {
        "id": 30792,
        "en": "hit",
        "kk": "[hɪt]",
        "uk": "/hɪt/",
        "zh": "vt. 打、擊、撞擊、碰撞；n. 打擊、命中、擊中、很受歡迎的人",
        "unit": 17,
        "example": "The boy can hit the ball far.",
        "exampleZh": "這個男孩可以把球打得很遠。"
    },
    {
        "id": 30793,
        "en": "hobby",
        "kk": "[ˋhɑbi]",
        "uk": "/ˈhɒbi/",
        "zh": "n. 嗜好、業餘愛好、小馬、馬駒",
        "unit": 17,
        "example": "To cook good food is my hobby.",
        "exampleZh": "做美味的食物是我的嗜好。"
    },
    {
        "id": 30794,
        "en": "hold",
        "kk": "[hold]",
        "uk": "/həʊld/",
        "zh": "v. 抓住、托住、按住、捂住；n. 握、抓、擒拿法、影響",
        "unit": 17,
        "example": "Does your offer still hold?",
        "exampleZh": "你的報價還有效嗎？"
    },
    {
        "id": 30795,
        "en": "hole",
        "kk": "[hol]",
        "uk": "/həʊl/",
        "zh": "n. 洞、坑、裂口、開口；v. 鑽洞、打洞、擊球入洞",
        "unit": 17,
        "example": "There's a hole in the crotch.",
        "exampleZh": "胯部有一個洞。"
    },
    {
        "id": 30796,
        "en": "holiday",
        "kk": "[ˋhɑlə͵de]",
        "uk": "/ˈhɒlədeɪ/",
        "zh": "n. 假日、度假期、法定節假日、節日；vi. 度假",
        "unit": 17,
        "example": "Today is a holiday in Wales.",
        "exampleZh": "今天是威爾斯的假期。"
    },
    {
        "id": 30797,
        "en": "home",
        "kk": "[hom]",
        "uk": "/həʊm/",
        "zh": "n. 家、住宅、房子、寓所；adj. 家庭的、家用的、在家裡做（或進行）的、本國的；adv. 回家、在家、到正確的位置、朝著球門；v. 歸巢、對準、把（思想、注意力）集中於、把（動物）養作寵物",
        "unit": 17,
        "example": "I want to go home right now.",
        "exampleZh": "我現在想要回家。"
    },
    {
        "id": 30798,
        "en": "homework",
        "kk": "[ˋhom͵wɝk]",
        "uk": "/ˈhəʊmwɜːk/",
        "zh": "n. 作業、家庭作業、準備工作、在家裡做的活計",
        "unit": 17,
        "example": "How much homework do you get?",
        "exampleZh": "你有多少作業？"
    },
    {
        "id": 30799,
        "en": "honest",
        "kk": "[ˋɑnəst]",
        "uk": "/ˈɒnɪst/",
        "zh": "adj. 誠實的、正直的、坦誠的、直率的；adv. 真的、確實",
        "unit": 17,
        "example": "An honest man will always tell the truth.",
        "exampleZh": "一個誠實的人總是會說實話。"
    },
    {
        "id": 30800,
        "en": "honesty",
        "kk": "[ˋɑnəsti]",
        "uk": "/ˈɒnəsti/",
        "zh": "n. 誠實、正直、銀扇草、金錢花",
        "unit": 17,
        "example": "His honesty won all our hearts.",
        "exampleZh": "他的誠實贏得了我們所有人的心。"
    },
    {
        "id": 30801,
        "en": "honey",
        "kk": "[ˋhʌni]",
        "uk": "/ˈhʌni/",
        "zh": "n. 蜂蜜、親愛的、寶貝兒、極好的事物；v. 對……說甜言蜜語、加蜜使甜、奉承；adj. 甘美的、蜂蜜似的",
        "unit": 17,
        "example": "Have you seen my keys, honey?",
        "exampleZh": "你見到我的鑰匙了嗎，寶貝？"
    },
    {
        "id": 30802,
        "en": "hop",
        "kk": "[hɑp]",
        "uk": "/hɒp/",
        "zh": "vi. 單腳跳行、齊足（或雙足）跳行、快速移動；n. 單腳跳、雙腳跳、短途旅行、忽布",
        "unit": 17,
        "example": "Hop in, I'll drive you home.",
        "exampleZh": "快上車吧，我開車送你回家。"
    },
    {
        "id": 30803,
        "en": "hope",
        "kk": "[hop]",
        "uk": "/həʊp/",
        "zh": "vt. 希望；n. 希望、期盼的東西、盼望的事、可能性",
        "unit": 17,
        "example": "I hope (that) you're okay.",
        "exampleZh": "我希望你沒事。"
    },
    {
        "id": 30804,
        "en": "horrible",
        "kk": "[ˋhɔrəbəl]",
        "uk": "/ˈhɒrəb(ə)l/",
        "zh": "adj. 恐怖的、可怕的、令人恐懼的、糟糕的",
        "unit": 17,
        "example": "Ugh – it was horrible.",
        "exampleZh": "啊 – 這真可怕。"
    },
    {
        "id": 30805,
        "en": "horse",
        "kk": "[hɔrs]",
        "uk": "/hɔːs/",
        "zh": "n. 馬、賽馬、跳馬、鞍馬；v. 給（人或車輛）提供馬、使騎馬",
        "unit": 17,
        "example": "The brown horse runs very fast.",
        "exampleZh": "那匹棕色的馬跑得非常快。"
    },
    {
        "id": 30806,
        "en": "hospital",
        "kk": "[ˋhɑ͵spɪtəl]",
        "uk": "/ˈhɒspɪt(ə)l/",
        "zh": "n. 醫院、青年教育慈善機構、慈善招待所",
        "unit": 17,
        "example": "The sick boy is in the hospital.",
        "exampleZh": "那個生病的男孩在醫院裡。"
    },
    {
        "id": 30807,
        "en": "host",
        "kk": "[host]",
        "uk": "/həʊst/",
        "zh": "n. 主辦、主持、主人、主持人；vt. 以主人身分招待、主辦、做……的東道主、做節目主持人",
        "unit": 17,
        "example": "Shall I take my host family a gift?",
        "exampleZh": "我要不要給主人家帶件禮物呢？"
    },
    {
        "id": 30808,
        "en": "hot",
        "kk": "[hɑt]",
        "uk": "/hɒt/",
        "zh": "adj. 熱的、高溫的、感到熱的、辣的；v. 使熱、變熱、變得激烈；adv. 熱、熱切地、緊迫地",
        "unit": 17,
        "example": "It's hot out – very hot, very humid.",
        "exampleZh": "外面很熱——非常熱、非常潮濕。"
    },
    {
        "id": 30809,
        "en": "hotel",
        "kk": "[hoˋtɛl]",
        "uk": "/həʊˈtel/",
        "zh": "n. 旅館、酒店、飯店、字母H的程式碼",
        "unit": 17,
        "example": "They bugged her hotel room.",
        "exampleZh": "他們在她的旅館房間裡裝了竊聽器。"
    },
    {
        "id": 30810,
        "en": "hour",
        "kk": "[ˋaʊɚ]",
        "uk": "/ˈaʊə(r)/",
        "zh": "n. 小時、一小時的路程、固定時間、某個時間",
        "unit": 17,
        "example": "That clock's an hour fast.",
        "exampleZh": "那個時鐘快了一個小時。"
    },
    {
        "id": 30811,
        "en": "house",
        "kk": "[haʊs]",
        "uk": "/haʊs/",
        "zh": "n. 房子、住宅、一家人、同住一幢房子的人們；vt. 讓……居住、給……提供住房、給……提供場地、收藏存放；adj. 家養的、常在室內的、公司的、機構的",
        "unit": 17,
        "example": "They live in a big white house.",
        "exampleZh": "他們住在一棟白色的大房子裡。"
    },
    {
        "id": 30812,
        "en": "housewife",
        "kk": "[ˋhaʊ͵swaɪf]",
        "uk": "/ˈhaʊswaɪf/",
        "zh": "n. 家庭主婦",
        "unit": 17,
        "example": "My mother is a busy housewife.",
        "exampleZh": "我的母親是一位忙碌的家庭主婦。"
    },
    {
        "id": 30813,
        "en": "housework",
        "kk": "[ˋhaʊ͵swɝk]",
        "uk": "/ˈhaʊswɜːk/",
        "zh": "n. 家事、家務勞動、家務事",
        "unit": 17,
        "example": "Housework is a never-ending task.",
        "exampleZh": "家務活做起來真是沒完沒了。"
    },
    {
        "id": 30814,
        "en": "how",
        "kk": "[haʊ]",
        "uk": "/haʊ/",
        "zh": "adv. 如何、怎樣、好否、怎麼樣；conj. 怎樣、如何、以任何方式、無論用什麼方法；n. 方式、方法",
        "unit": 17,
        "example": "How much is haulage?",
        "exampleZh": "運費是多少？"
    },
    {
        "id": 30815,
        "en": "however",
        "kk": "[͵haʊˋɛvɚ]",
        "uk": "/haʊˈevə(r)/",
        "zh": "adv. 然而、可是、不過、無論如何；conj. 不管怎樣、無論如何、然而、可是",
        "unit": 17,
        "example": "She ran fast, however she arrived late.",
        "exampleZh": "她跑得很快，然而她還是遲到了。"
    },
    {
        "id": 30816,
        "en": "huge",
        "kk": "[hjudʒ]",
        "uk": "/hjuːdʒ/",
        "zh": "adj. 巨大的、龐大的、極大的、很受歡迎的",
        "unit": 17,
        "example": "The huge, iron gate was locked.",
        "exampleZh": "巨大的鐵門緊鎖著。"
    },
    {
        "id": 30817,
        "en": "human",
        "kk": "[ˋhjumən]",
        "uk": "/ˈhjuːmən/",
        "zh": "adj. 人的、人類的、顯示人的本性的、有人情味的；n. 人、人類",
        "unit": 17,
        "example": "Dogs are a human's best friend.",
        "exampleZh": "狗狗是人類最好的朋友。"
    },
    {
        "id": 30818,
        "en": "humble",
        "kk": "[ˋhʌmbəl]",
        "uk": "/ˈhʌmb(ə)l/",
        "zh": "adj. 謙虛的、謙卑的、低下的；vt. 使謙卑、使感到自慚、擊敗",
        "unit": 17,
        "example": "He remained humble despite his great success.",
        "exampleZh": "儘管獲得巨大成功，他依然保持謙遜。"
    },
    {
        "id": 30819,
        "en": "humid",
        "kk": "[ˋhjuməd]",
        "uk": "/ˈhjuːmɪd/",
        "zh": "adj. 潮溼的、溼熱的",
        "unit": 17,
        "example": "Summer days here are very hot and humid.",
        "exampleZh": "這裡的夏天非常炎熱且潮濕。"
    },
    {
        "id": 30820,
        "en": "humor",
        "kk": "[ˋhjumɚ]",
        "uk": "/ˈhjuːmə(r)/",
        "zh": "n. 幽默、詼諧、幽默感、心情；vt. 迎合、遷就、順應",
        "unit": 17,
        "example": "My father has a great sense of humor.",
        "exampleZh": "我父親非常有幽默感。"
    },
    {
        "id": 30821,
        "en": "humorous",
        "kk": "[ˋhjumɚəs]",
        "uk": "/ˈhjuːmərəs/",
        "zh": "adj. 幽默的、詼諧的",
        "unit": 17,
        "example": "He told a humorous joke today.",
        "exampleZh": "他今天講了一個幽默的笑話。"
    },
    {
        "id": 30822,
        "en": "hundred",
        "kk": "[ˋhʌndrəd]",
        "uk": "/ˈhʌndrəd/",
        "zh": "n. 一百、許多、數量大、一百美元（英鎊）的紙幣；adj. 一百的、許多的",
        "unit": 17,
        "example": "He's on three hundred a week.",
        "exampleZh": "他每週收入三百。"
    },
    {
        "id": 30823,
        "en": "hunger",
        "kk": "[ˋhʌŋɡɚ]",
        "uk": "/ˈhʌŋɡə(r)/",
        "zh": "n. 飢餓、飢餓感、饑荒、渴求；vi. 渴求、渴望、捱餓",
        "unit": 17,
        "example": "Hunger drove her to steal.",
        "exampleZh": "飢餓迫使她去偷竊。"
    },
    {
        "id": 30824,
        "en": "hungry",
        "kk": "[ˋhʌŋɡri]",
        "uk": "/ˈhʌŋɡri/",
        "zh": "adj. 飢餓的、感到餓的、渴望的、熱望的",
        "unit": 17,
        "example": "You're not hungry, are you?",
        "exampleZh": "你不餓吧？"
    },
    {
        "id": 30825,
        "en": "hunt",
        "kk": "[hʌnt]",
        "uk": "/hʌnt/",
        "zh": "v. 打獵、獵取、搜尋、追蹤；n. 搜尋、尋找、打獵、狩獵",
        "unit": 17,
        "example": "Lions hunt for food in the grass.",
        "exampleZh": "獅子在草叢中尋找獵物。"
    },
    {
        "id": 30826,
        "en": "hunter",
        "kk": "[ˋhʌntɚ]",
        "uk": "/ˈhʌntə(r)/",
        "zh": "n. 獵人、捕獵者、搜尋者、尋找者",
        "unit": 17,
        "example": "The old hunter walked into the woods.",
        "exampleZh": "老獵人走進了樹林中。"
    },
    {
        "id": 30827,
        "en": "hurry",
        "kk": "[ˋhɝi]",
        "uk": "/ˈhʌri/",
        "zh": "v. 匆忙、急忙、催促、迅速移動；n. 急忙、緊急、趕緊的理由",
        "unit": 17,
        "example": "Take your time—there's no hurry.",
        "exampleZh": "悠著點—不用急。"
    },
    {
        "id": 30828,
        "en": "hurt",
        "kk": "[hɝt]",
        "uk": "/hɜːt/",
        "zh": "v. 使受傷、使疼痛、感到受傷、感到疼痛；adj. 受傷的、痛苦的；n. 心靈創傷、委屈、傷、痛",
        "unit": 17,
        "example": "Did you hurt your arm today?",
        "exampleZh": "你今天手臂受傷了嗎？"
    },
    {
        "id": 30829,
        "en": "husband",
        "kk": "[ˋhʌzbənd]",
        "uk": "/ˈhʌzbənd/",
        "zh": "n. 丈夫；v. 節約使用",
        "unit": 17,
        "example": "Her husband cooks dinner every night.",
        "exampleZh": "她的丈夫每晚都做晚餐。"
    },
    {
        "id": 30830,
        "en": "ice",
        "kk": "[aɪs]",
        "uk": "/aɪs/",
        "zh": "n. 冰、冰塊、冰凍甜食、刨冰；vt. 在（糕餅上）加糖霜、冷卻、冰鎮、確保；adj. 冰的",
        "unit": 17,
        "example": "Please put some ice in my drink.",
        "exampleZh": "請在我的飲料裡加一些冰塊。"
    },
    {
        "id": 30831,
        "en": "idea",
        "kk": "[aɪˋdiə]",
        "uk": "/aɪˈdɪə/",
        "zh": "n. 想法、主意、觀點、看法",
        "unit": 17,
        "example": "That sounds like a very good idea.",
        "exampleZh": "那聽起來是個很棒的主意。"
    },
    {
        "id": 30832,
        "en": "if",
        "kk": "[ɪf]",
        "uk": "/ɪf/",
        "zh": "conj. 假如、如果、要是、每當；n. 條件、設想、不確定的情況",
        "unit": 17,
        "example": "I'll be there if poss.",
        "exampleZh": "如果有的話我會去的。"
    },
    {
        "id": 30833,
        "en": "ignore",
        "kk": "[͵ɪɡˋnɔr]",
        "uk": "/ɪɡˈnɔː(r)/",
        "zh": "vt. 忽視、佯裝未見、不理睬、對……不予理會",
        "unit": 17,
        "example": "Do not ignore the warning sign ahead.",
        "exampleZh": "不要忽視前方的警告標誌。"
    },
    {
        "id": 30834,
        "en": "ill",
        "kk": "[ɪl]",
        "uk": "/ɪl/",
        "zh": "adj. 有病的、不舒服的、壞的、有害的；adv. 壞、惡劣地、艱難地、幾乎不；n. 問題、困難、傷害、厄運",
        "unit": 17,
        "example": "My brother is ill and stays home.",
        "exampleZh": "我哥哥生病了，留在家裡。"
    },
    {
        "id": 30835,
        "en": "imagine",
        "kk": "[͵ɪmˋædʒən]",
        "uk": "/ɪˈmædʒɪn/",
        "zh": "vt. 想像、想象、設想、料想",
        "unit": 17,
        "example": "Can you imagine life without cell phones?",
        "exampleZh": "你能想像沒有手機的生活嗎？"
    },
    {
        "id": 30836,
        "en": "impolite",
        "kk": "[͵ɪmpəˋlaɪt]",
        "uk": "/ˌɪmpəˈlaɪt/",
        "zh": "adj. 不禮貌的、粗魯的",
        "unit": 17,
        "example": "It is impolite to shout loudly.",
        "exampleZh": "大聲喊叫是不禮貌的。"
    },
    {
        "id": 30837,
        "en": "importance",
        "kk": "[͵ɪmˋpɔrtəns]",
        "uk": "/ɪmˈpɔːt(ə)ns/",
        "zh": "n. 重要性、重要、傲慢、名望",
        "unit": 17,
        "example": "She knows the importance of clean water.",
        "exampleZh": "她知道乾淨水源的重要性。"
    },
    {
        "id": 30838,
        "en": "important",
        "kk": "[͵ɪmˋpɔrtənt]",
        "uk": "/ɪmˈpɔːt(ə)nt/",
        "zh": "adj. 重要的、重大的、影響很大的、權威的",
        "unit": 17,
        "example": "He likes to feel important.",
        "exampleZh": "他喜歡感覺自己很重要。"
    },
    {
        "id": 30839,
        "en": "impossible",
        "kk": "[͵ɪmˋpɑsəbəl]",
        "uk": "/ɪmˈpɒsəb(ə)l/",
        "zh": "adj. 不可能的、辦不到的、極其艱難的、難以對付的；n. 不可能的事",
        "unit": 17,
        "example": "Thick mist made flying impossible.",
        "exampleZh": "濃霧使得無法飛行。"
    },
    {
        "id": 30840,
        "en": "improve",
        "kk": "[͵ɪmˋpruv]",
        "uk": "/ɪmˈpruːv/",
        "zh": "v. 改進、康復、健康好轉、超過",
        "unit": 17,
        "example": "Practice every day to improve your English.",
        "exampleZh": "每天練習以提升你的英文能力。"
    },
    {
        "id": 30841,
        "en": "in",
        "kk": "[ɪn]",
        "uk": "/ɪn/",
        "zh": "prep. 在……內、在……裡、在、進……裡；adv. 進入、朝裡、向中間、在裡頭；adj. 在裡面的、內部的、時髦的、流行的；n. 執政者、門路、關係、接近……的機會",
        "unit": 17,
        "example": "The keys are in my small bag.",
        "exampleZh": "鑰匙在我的小袋子裡。"
    },
    {
        "id": 30842,
        "en": "inch",
        "kk": "[ɪntʃ]",
        "uk": "/ɪntʃ/",
        "zh": "n. 英寸、少許、身高、腰圍；vt. 逐漸增加、緩慢移動",
        "unit": 17,
        "example": "The plant grew one inch this week.",
        "exampleZh": "這株植物這週長了一英吋。"
    },
    {
        "id": 30843,
        "en": "include",
        "kk": "[͵ɪnˋklud]",
        "uk": "/ɪnˈkluːd/",
        "zh": "vt. 包括、包含、把……列為一部分、把……算入",
        "unit": 17,
        "example": "Does the total price include cold drinks?",
        "exampleZh": "總價是否有包含冷飲？"
    },
    {
        "id": 30844,
        "en": "income",
        "kk": "[ˋɪn͵kʌm]",
        "uk": "/ˈɪnkʌm/",
        "zh": "n. 收入、收益",
        "unit": 17,
        "example": "He saved part of his small income.",
        "exampleZh": "他把微薄收入的一部分存了起來。"
    },
    {
        "id": 30845,
        "en": "increase",
        "kk": "[͵ɪnˋkris]",
        "uk": "/ɪnˈkriːs/",
        "zh": "vt. 增加、增長、增強、增大；n. 增長、增長量",
        "unit": 17,
        "example": "Prices will increase pro rata.",
        "exampleZh": "價格將相應提高。"
    },
    {
        "id": 30846,
        "en": "independent",
        "kk": "[͵ɪndɪˋpɛndənt]",
        "uk": "/ˌɪndɪˈpendənt/",
        "zh": "adj. 獨立的、自治的、自立的、自力更生的；n. 獨立自主者、獨立團體、無黨派政治家、公理會教友",
        "unit": 17,
        "example": "She is an independent girl who works hard.",
        "exampleZh": "她是個努力工作的獨立女孩。"
    },
    {
        "id": 30847,
        "en": "indicate",
        "kk": "[ˋɪndə͵ket]",
        "uk": "/ˈɪndɪkeɪt/",
        "zh": "vt. 指示、表明、標示、象徵",
        "unit": 17,
        "example": "Dark clouds indicate that rain is coming.",
        "exampleZh": "烏雲表示即將要下雨了。"
    },
    {
        "id": 30848,
        "en": "influence",
        "kk": "[ˋɪnfluəns]",
        "uk": "/ˈɪnfluəns/",
        "zh": "n. 影響、作用、勢力、影響力；vt. 影響、對……起作用",
        "unit": 17,
        "example": "Movies have a big influence on us.",
        "exampleZh": "電影對我們有很大的影響力。"
    },
    {
        "id": 30849,
        "en": "information",
        "kk": "[͵ɪnfɚˋmeʃən]",
        "uk": "/ˌɪnfəˈmeɪʃ(ə)n/",
        "zh": "n. 資訊、訊息、資料、情報",
        "unit": 17,
        "example": "We pooled ideas and information.",
        "exampleZh": "我們彙集了意見和資訊。"
    },
    {
        "id": 30850,
        "en": "ink",
        "kk": "[ɪŋk]",
        "uk": "/ɪŋk/",
        "zh": "n. 墨水、油墨、文字宣傳、紙媒宣傳；v. 簽訂、簽署、塗墨水於",
        "unit": 17,
        "example": "The pen ran out of black ink.",
        "exampleZh": "這支筆的黑墨水用完了。"
    },
    {
        "id": 30851,
        "en": "insect",
        "kk": "[ˋɪn͵sɛkt]",
        "uk": "/ˈɪnsekt/",
        "zh": "n. 昆蟲、類似昆蟲的小動物、卑鄙的人",
        "unit": 17,
        "example": "At rest the insect looks like a dead leaf.",
        "exampleZh": "這種昆蟲不動時看上去像一片枯葉。"
    },
    {
        "id": 30852,
        "en": "inside",
        "kk": "[͵ɪnˋsaɪd]",
        "uk": "/ˌɪnˈsaɪd/",
        "zh": "n. 內部、內側、內臟、胃；adv. 在監牢裡、在（或向）裡面；prep. 在（或向）……內、在（或向）……裡；adj. 裡面的、從內部瞭解到的、內線乾的、靠近路邊的",
        "unit": 17,
        "example": "The tree trunk was hollow inside.",
        "exampleZh": "樹幹內部是空心的。"
    },
    {
        "id": 30853,
        "en": "insist",
        "kk": "[͵ɪnˋsɪst]",
        "uk": "/ɪnˈsɪst/",
        "zh": "vt. 堅持、堅決要求、執意堅持、堅稱",
        "unit": 17,
        "example": "I insist on paying for the damage.",
        "exampleZh": "我堅持要求賠償損失。"
    },
    {
        "id": 30854,
        "en": "inspire",
        "kk": "[͵ɪnˋspaɪr]",
        "uk": "/ɪnˈspaɪə(r)/",
        "zh": "vt. 激勵、鼓舞、賦予靈感、激發",
        "unit": 17,
        "example": "Good words inspire us to try.",
        "exampleZh": "良言激勵我們勇於嘗試。"
    },
    {
        "id": 30855,
        "en": "instance",
        "kk": "[ˋɪnstəns]",
        "uk": "/ˈɪnstəns/",
        "zh": "n. 例子、例項；v. 舉……為例",
        "unit": 17,
        "example": "Can you give me an instance of that?",
        "exampleZh": "你能給我舉一個那樣的例子嗎？"
    },
    {
        "id": 30856,
        "en": "instant",
        "kk": "[ˋɪnstənt]",
        "uk": "/ˈɪnstənt/",
        "zh": "adj. 立刻的、馬上的、速食的、即食的；n. 瞬間、片刻、當時、那一刻",
        "unit": 17,
        "example": "She gave me an instant reply today.",
        "exampleZh": "她今天立刻給了我答覆。"
    },
    {
        "id": 30857,
        "en": "instrument",
        "kk": "[ˋɪnstrəmənt]",
        "uk": "/ˈɪnstrəmənt/",
        "zh": "n. 樂器、器械、儀器、促成某事的人；v. 給……裝備測量儀器",
        "unit": 17,
        "example": "Can you play any music instrument?",
        "exampleZh": "你會演奏任何樂器嗎？"
    },
    {
        "id": 30858,
        "en": "intelligent",
        "kk": "[͵ɪnˋtɛlədʒənt]",
        "uk": "/ɪnˈtelɪdʒənt/",
        "zh": "adj. 聰明的、有智力的、智慧的",
        "unit": 17,
        "example": "She is a very intelligent girl.",
        "exampleZh": "她是一個非常聰明的女孩。"
    },
    {
        "id": 30859,
        "en": "interest",
        "kk": "[ˋɪntrəst]",
        "uk": "/ˈɪntrəst/",
        "zh": "n. 興趣、關注、吸引力、趣味；vt. 使感興趣、引起……的關注、勸說（某人）做",
        "unit": 17,
        "example": "She has great interest in art.",
        "exampleZh": "她對藝術有很大的興趣。"
    },
    {
        "id": 30860,
        "en": "interested",
        "kk": "[ˋɪntrəstɪd]",
        "uk": "/ˈɪntrəstɪd/",
        "zh": "adj. 感興趣的、關心的、利益相關的、當事的；v. 使感興趣、引起……的關注、勸說（某人）做（或參與）",
        "unit": 17,
        "example": "I'm not interested in sport.",
        "exampleZh": "我對體育運動不感興趣。"
    },
    {
        "id": 30861,
        "en": "interesting",
        "kk": "[ˋɪntrəstɪŋ]",
        "uk": "/ˈɪntrəstɪŋ/",
        "zh": "adj. 有趣的、有吸引力的、怪異的；v. 使感興趣、引起……的關注、勸說（某人）做（或參與）",
        "unit": 17,
        "example": "I saw an interesting film today.",
        "exampleZh": "我今天看了一部有趣的電影。"
    },
    {
        "id": 30862,
        "en": "international",
        "kk": "[͵ɪntɚˋnæʃənəl]",
        "uk": "/ˌɪntəˈnæʃ(ə)nəl/",
        "zh": "adj. 國際的、國際上的；n. 國際比賽、國際比賽選手、外國人、共產國際",
        "unit": 17,
        "example": "This is an international school for many kids.",
        "exampleZh": "這是一所供許多孩子就讀的國際學校。"
    },
    {
        "id": 30863,
        "en": "Internet",
        "kk": "[ˋɪntɚ͵nɛt]",
        "uk": "/ˈɪntənet/",
        "zh": "n. 網路、網際網路、因特網",
        "unit": 17,
        "example": "We use the Internet every day.",
        "exampleZh": "我們每天都使用網際網路。"
    },
    {
        "id": 30864,
        "en": "Interrupt",
        "kk": "[͵ɪntɚˋʌpt]",
        "uk": "/ˌɪntəˈrʌpt/",
        "zh": "vt. 打擾、打斷、使暫停、使中斷",
        "unit": 17,
        "example": "Please do not interrupt my speech.",
        "exampleZh": "請不要打斷我的演講。"
    },
    {
        "id": 30865,
        "en": "interview",
        "kk": "[ˋɪntɚ͵vju]",
        "uk": "/ˈɪntəvjuː/",
        "zh": "vt. 面談、面試、採訪、訪問；n. 採訪、面試、面談、訪談",
        "unit": 17,
        "example": "He had a job interview today.",
        "exampleZh": "他今天參加了一場面試。"
    },
    {
        "id": 30866,
        "en": "into",
        "kk": "[ˋɪntu]",
        "uk": "/ˈɪntuː/",
        "zh": "prep. 進入……之內、到……裡面、觸及、碰撞",
        "unit": 17,
        "example": "Caterpillars change into butterflies.",
        "exampleZh": "毛毛蟲變蝴蝶。"
    },
    {
        "id": 30867,
        "en": "introduce",
        "kk": "[͵ɪntrəˋdus]",
        "uk": "/ˌɪntrəˈdjuːs/",
        "zh": "vt. 介紹、引見、使初次瞭解、使嘗試",
        "unit": 17,
        "example": "Can I introduce my wife?",
        "exampleZh": "我可以介紹一下我的妻子嗎？"
    },
    {
        "id": 30868,
        "en": "invent",
        "kk": "[͵ɪnˋvɛnt]",
        "uk": "/ɪnˈvent/",
        "zh": "vt. 發明、創造、編造、虛構",
        "unit": 17,
        "example": "Scientists try to invent new green tools.",
        "exampleZh": "科學家試圖發明新的環保工具。"
    },
    {
        "id": 30869,
        "en": "invitation",
        "kk": "[͵ɪnvɪˋteʃən]",
        "uk": "/ˌɪnvɪˈteɪʃ(ə)n/",
        "zh": "n. 邀請、引起、招致、徵求",
        "unit": 17,
        "example": "I got an invitation to his party.",
        "exampleZh": "我收到了去他派對的邀請函。"
    },
    {
        "id": 30870,
        "en": "invite",
        "kk": "[͵ɪnˋvaɪt]",
        "uk": "/ɪnˈvaɪt/",
        "zh": "vt. 邀請、約請、徵求、請求；n. 請柬、請帖",
        "unit": 17,
        "example": "Who did you invite to the party?",
        "exampleZh": "你邀請了誰來參加聚會？"
    },
    {
        "id": 30871,
        "en": "iron",
        "kk": "[ˋaɪɚn]",
        "uk": "/ˈaɪən/",
        "zh": "n. 鐵、熨斗、鐵器、鐵製工具；vt. 熨、燙；adj. 鐵的、鐵製的、剛強的、堅強的",
        "unit": 17,
        "example": "The huge, iron gate was locked.",
        "exampleZh": "巨大的鐵門緊鎖著。"
    },
    {
        "id": 30872,
        "en": "island",
        "kk": "[ˋaɪlənd]",
        "uk": "/ˈaɪlənd/",
        "zh": "n. 島、島嶼、島狀物、孤立體；v. 使成島、使孤立",
        "unit": 17,
        "example": "They took a boat to the island.",
        "exampleZh": "他們搭船前往那座島嶼。"
    },
    {
        "id": 30873,
        "en": "item",
        "kk": "[ˋaɪtəm]",
        "uk": "/ˈaɪtəm/",
        "zh": "n. 項目、專案、條款、一件商品；adv. 又、此外還有；v. 逐條列出、記下",
        "unit": 17,
        "example": "This item should be hand washed.",
        "exampleZh": "這件物品要用手洗。"
    },
    {
        "id": 30874,
        "en": "jacket",
        "kk": "[ˋdʒækət]",
        "uk": "/ˈdʒækɪt/",
        "zh": "n. 外套、夾克衫、短上衣、書皮；v. 給……裝護套、給……穿短上衣、打",
        "unit": 17,
        "example": "Put on your jacket before going out.",
        "exampleZh": "出門前穿上你的夾克。"
    },
    {
        "id": 30875,
        "en": "jam",
        "kk": "[dʒæm]",
        "uk": "/dʒæm/",
        "zh": "n. 擁塞、果醬、堵塞、擁擠；vt. 塞滿、擠滿、卡住",
        "unit": 17,
        "example": "I like sweet fruit jam on bread.",
        "exampleZh": "我喜歡在麵包上抹甜甜的水果果醬。"
    },
    {
        "id": 30876,
        "en": "January",
        "kk": "[ˋdʒænju͵ɛri]",
        "uk": "/ˈdʒænjuəri/",
        "zh": "n. 一月",
        "unit": 17,
        "example": "January is a very cold month here.",
        "exampleZh": "一月在這裡是一個非常寒冷的月份。"
    },
    {
        "id": 30877,
        "en": "jazz",
        "kk": "[dʒæz]",
        "uk": "/dʒæz/",
        "zh": "n. 爵士樂、爵士樂舞蹈、毫無意義的話、諸如此類的事情；adj. 爵士樂的；v. 演奏爵士樂、跳爵士舞、使活潑、遊蕩",
        "unit": 17,
        "example": "My dad loves to listen to jazz.",
        "exampleZh": "我爸爸很喜歡聽爵士樂。"
    },
    {
        "id": 30878,
        "en": "jealous",
        "kk": "[ˋdʒɛləs]",
        "uk": "/ˈdʒeləs/",
        "zh": "adj. 妒忌的、好嫉妒的、珍惜的、猜疑的",
        "unit": 17,
        "example": "She was jealous of his wealth.",
        "exampleZh": "她嫉妒他的富有。"
    },
    {
        "id": 30879,
        "en": "jeans",
        "kk": "[dʒinz]",
        "uk": "/dʒiːnz/",
        "zh": "n. 牛仔褲、工裝褲",
        "unit": 17,
        "example": "He wore blue jeans and white shoes.",
        "exampleZh": "他穿著藍色牛仔褲和白色鞋子。"
    },
    {
        "id": 30880,
        "en": "jeep",
        "kk": "[dʒip]",
        "uk": "/dʒiːp/",
        "zh": "n. 吉普車、吉普",
        "unit": 17,
        "example": "The jeep bumped along the dirt track.",
        "exampleZh": "吉普車在土路上顛簸著行駛。"
    },
    {
        "id": 30881,
        "en": "job",
        "kk": "[dʒɑb]",
        "uk": "/dʒɒb/",
        "zh": "n. 工作、職業、零工、任務；v. 刺、捅、買賣股票、欺騙",
        "unit": 17,
        "example": "He found a new job last week.",
        "exampleZh": "他上週找到了一份新工作。"
    },
    {
        "id": 30882,
        "en": "jog",
        "kk": "[dʒɑɡ]",
        "uk": "/dʒɒɡ/",
        "zh": "v. 慢跑、輕推、輕撞、顛簸著行進；n. 慢跑鍛鍊、輕推、平穩的慢速",
        "unit": 17,
        "example": "She likes to jog around the park.",
        "exampleZh": "她喜歡在公園周圍慢跑。"
    },
    {
        "id": 30883,
        "en": "join",
        "kk": "[dʒɔɪn]",
        "uk": "/dʒɔɪn/",
        "zh": "v. 參加、加入、連接、結合；n. 連接處、接合點",
        "unit": 17,
        "example": "How do these two pieces join?",
        "exampleZh": "這兩個部分如何連接？"
    },
    {
        "id": 30884,
        "en": "joke",
        "kk": "[dʒok]",
        "uk": "/dʒəʊk/",
        "zh": "n. 笑話、玩笑、荒唐可笑的人、笑料；vi. 說笑話、開玩笑、取笑、開……的玩笑",
        "unit": 17,
        "example": "My father told a funny joke today.",
        "exampleZh": "我父親今天講了一個好笑的笑話。"
    },
    {
        "id": 30885,
        "en": "journalist",
        "kk": "[ˋdʒɝnələst]",
        "uk": "/ˈdʒɜːnəlɪst/",
        "zh": "n. 新聞記者、新聞工作者、報人、報紙撰稿人",
        "unit": 17,
        "example": "The young journalist wrote good news.",
        "exampleZh": "那位年輕記者寫了很好的報導。"
    },
    {
        "id": 30886,
        "en": "joy",
        "kk": "[dʒɔɪ]",
        "uk": "/dʒɔɪ/",
        "zh": "n. 喜悅、歡欣、高興、使人高興的人；v. 感到高興、感到欣喜",
        "unit": 17,
        "example": "The sweet baby brings us great joy.",
        "exampleZh": "這個可愛的寶寶帶給我們極大的喜悅。"
    },
    {
        "id": 30887,
        "en": "judge",
        "kk": "[dʒʌdʒ]",
        "uk": "/dʒʌdʒ/",
        "zh": "n. 法官、審判官、裁判員、評判員；vt. 判斷、認為、裁判、評判",
        "unit": 17,
        "example": "The judge spoke to the young man.",
        "exampleZh": "法官對那位年輕人說話。"
    },
    {
        "id": 30888,
        "en": "juice",
        "kk": "[dʒus]",
        "uk": "/dʒuːs/",
        "zh": "n. 汁、水果（蔬菜）汁飲料、肉汁；v. 榨",
        "unit": 17,
        "example": "I like to drink orange juice daily.",
        "exampleZh": "我喜歡每天喝柳橙汁。"
    },
    {
        "id": 30889,
        "en": "July",
        "kk": "[͵dʒuˋlaɪ]",
        "uk": "/dʒʊˈlaɪ/",
        "zh": "n. 七月",
        "unit": 17,
        "example": "The car is taxed until July.",
        "exampleZh": "這輛車的稅期截止到七月。"
    },
    {
        "id": 30890,
        "en": "jump",
        "kk": "[dʒʌmp]",
        "uk": "/dʒʌmp/",
        "zh": "v. 跳躍、跳、躍、跨越；n. 暴漲、跳、躍、驚跳",
        "unit": 17,
        "example": "A loud bang made me jump.",
        "exampleZh": "一聲巨響讓我跳了起來。"
    },
    {
        "id": 30891,
        "en": "June",
        "kk": "[dʒun]",
        "uk": "/dʒuːn/",
        "zh": "n. 六月、瓊",
        "unit": 17,
        "example": "School will end in late June.",
        "exampleZh": "學校將在六月下旬結業。"
    },
    {
        "id": 30892,
        "en": "just",
        "kk": "[dʒʌst]",
        "uk": "/dʒʌst/",
        "zh": "adv. 剛才、正好、只是、僅僅；adj. 公正的、正義的、應得的",
        "unit": 17,
        "example": "I just finished my homework right now.",
        "exampleZh": "我剛好現在做完了功課。"
    },
    {
        "id": 30893,
        "en": "keep",
        "kk": "[kip]",
        "uk": "/kiːp/",
        "zh": "v. 保持、留在、繼續、重複；n. 生活必需品、生活費用、城堡主樓",
        "unit": 17,
        "example": "Please keep your room clean and tidy.",
        "exampleZh": "請保持你的房間乾淨整潔。"
    },
    {
        "id": 30894,
        "en": "ketchup",
        "kk": "[ˋkɛtʃəp]",
        "uk": "/ˈketʃəp/",
        "zh": "n. 番茄醬、番茄沙司",
        "unit": 17,
        "example": "Would you like ketchup with your fries?",
        "exampleZh": "你吃炸薯條要番茄醬嗎？"
    },
    {
        "id": 30895,
        "en": "key",
        "kk": "[ki]",
        "uk": "/kiː/",
        "zh": "n. 鑰匙、鍵、關鍵、要訣；v. 鍵入、成為（獲勝）的關鍵、用鑰匙劃壞、用別針（或楔子、栓）固定；adj. 關鍵的、主要的",
        "unit": 17,
        "example": "I lost the key to my room.",
        "exampleZh": "我把房間的鑰匙弄丟了。"
    },
    {
        "id": 30896,
        "en": "kick",
        "kk": "[kɪk]",
        "uk": "/kɪk/",
        "zh": "vt. 踢、踢腿、對（自己）生氣、戒除；n. 踢腿、踢、極度興奮、極大的樂趣",
        "unit": 17,
        "example": "This drink has quite a kick.",
        "exampleZh": "這飲料很有勁兒。"
    },
    {
        "id": 30897,
        "en": "kid",
        "kk": "[kɪd]",
        "uk": "/kɪd/",
        "zh": "n. 小孩、年輕人、小山羊、小山羊皮革；v. 戲弄、開玩笑、欺騙、哄騙；adj. 較年幼的、小山羊皮製的",
        "unit": 17,
        "example": "Every kid likes to eat sweet candy.",
        "exampleZh": "每個小孩都喜歡吃甜糖果。"
    },
    {
        "id": 30898,
        "en": "kill",
        "kk": "[kɪl]",
        "uk": "/kɪl/",
        "zh": "vt. 殺死、扼殺、終止、使痛苦；n. 殺死、捕殺、被捕殺的動物、獵物",
        "unit": 17,
        "example": "The bad cold can kill the small fish.",
        "exampleZh": "嚴寒會殺死這些小魚。"
    },
    {
        "id": 30899,
        "en": "kilogram",
        "kk": "[ˋkɪlə͵ɡræm]",
        "uk": "/ˈkɪləɡræm/",
        "zh": "n. 公斤、千克",
        "unit": 17,
        "example": "Flour is sold by the kilogram.",
        "exampleZh": "麵粉按公斤出售。"
    },
    {
        "id": 30900,
        "en": "kilometer",
        "kk": "[kəˋlɑmətɚ]",
        "uk": "/kɪˈlɒmɪtə(r)；ˈkɪləmiːtə(r)/",
        "zh": "n. 公里、千米",
        "unit": 17,
        "example": "What's the area of Canada in square kilometer?",
        "exampleZh": "加拿大的面積有多少平方公里？"
    },
    {
        "id": 30901,
        "en": "kind",
        "kk": "[kaɪnd]",
        "uk": "/kaɪnd/",
        "zh": "n. 種類、類別；adj. 親切的、仁慈的、善良的",
        "unit": 17,
        "example": "I've caught some kind of lurgy.",
        "exampleZh": "我得了某種胃病。"
    },
    {
        "id": 30902,
        "en": "kindergarten",
        "kk": "[ˋkɪndɚ͵ɡɑrtən]",
        "uk": "/ˈkɪndəɡɑːt(ə)n/",
        "zh": "n. 幼稚園、幼兒園",
        "unit": 17,
        "example": "She's in kindergarten now.",
        "exampleZh": "她現在在上幼兒園。"
    },
    {
        "id": 30903,
        "en": "king",
        "kk": "[kɪŋ]",
        "uk": "/kɪŋ/",
        "zh": "n. 國王、君主、某物之王、首屈一指者；v. 立……為王",
        "unit": 17,
        "example": "The king lived in a big castle.",
        "exampleZh": "國王住在一座巨大的城堡裡。"
    },
    {
        "id": 30904,
        "en": "kingdom",
        "kk": "[ˋkɪŋdəm]",
        "uk": "/ˈkɪŋdəm/",
        "zh": "n. 王國、自然三界之一、天國、管轄範圍",
        "unit": 17,
        "example": "The king ruled over a quiet kingdom.",
        "exampleZh": "國王統治著一個平靜的王國。"
    },
    {
        "id": 30905,
        "en": "kiss",
        "kk": "[kɪs]",
        "uk": "/kɪs/",
        "zh": "vt. 親吻、接吻、輕拂、輕觸；n. 吻、接吻、輕擦",
        "unit": 17,
        "example": "She gave her baby a sweet kiss.",
        "exampleZh": "她給了小寶寶一個甜蜜的吻。"
    },
    {
        "id": 30906,
        "en": "kitchen",
        "kk": "[ˋkɪtʃən]",
        "uk": "/ˈkɪtʃɪn/",
        "zh": "n. 廚房、一套廚具、管絃樂隊中的打擊樂器組、不標準的",
        "unit": 17,
        "example": "Mother is in the kitchen right now.",
        "exampleZh": "媽媽現在正在廚房裡。"
    },
    {
        "id": 30907,
        "en": "kite",
        "kk": "[kaɪt]",
        "uk": "/kaɪt/",
        "zh": "n. 風箏、鳶、空頭支票、非法支票；v. 增加、飛、飛奔、使用（非法支票）騙錢",
        "unit": 17,
        "example": "The kite has a span of 1.5 metres.",
        "exampleZh": "風箏的跨距為1.5米。"
    },
    {
        "id": 30908,
        "en": "kitten",
        "kk": "[ˋkɪtən]",
        "uk": "/ˈkɪt(ə)n/",
        "zh": "n. 小貓、幼崽、一種灰白色舟蛾；v. 產仔",
        "unit": 17,
        "example": "The little kitten drinks warm milk.",
        "exampleZh": "小貓咪喝著溫牛奶。"
    },
    {
        "id": 30909,
        "en": "knee",
        "kk": "[ni]",
        "uk": "/niː/",
        "zh": "n. 膝蓋、膝關節、膝部、大腿朝上的面；vt. 用膝蓋頂",
        "unit": 17,
        "example": "The water was only knee-deep.",
        "exampleZh": "水只有膝蓋深。"
    },
    {
        "id": 30910,
        "en": "knife",
        "kk": "[naɪf]",
        "uk": "/naɪf/",
        "zh": "n. 刀、餐刀、刀子、刀具；vt. 用刀傷害、如刀般劃過",
        "unit": 17,
        "example": "The knife sliced his jacket.",
        "exampleZh": "刀劃破了他的夾克。"
    },
    {
        "id": 30911,
        "en": "knock",
        "kk": "[nɑk]",
        "uk": "/nɒk/",
        "zh": "v. 敲、擊、碰撞、碰倒；n. 敲門、敲打聲、敲門聲、打擊",
        "unit": 17,
        "example": "You don't have to knock—just walk in.",
        "exampleZh": "不必敲門—進來就是了。"
    },
    {
        "id": 30912,
        "en": "know",
        "kk": "[no]",
        "uk": "/nəʊ/",
        "zh": "v. 知道、認識到、懂得、熟悉",
        "unit": 17,
        "example": "You wouldn't know him.",
        "exampleZh": "你不會認識他的。"
    },
    {
        "id": 30913,
        "en": "knowledge",
        "kk": "[ˋnɑlədʒ]",
        "uk": "/ˈnɒlɪdʒ/",
        "zh": "n. 知識、學問、知道、瞭解",
        "unit": 17,
        "example": "Good books give us useful knowledge.",
        "exampleZh": "好書帶給我們有用的知識。"
    },
    {
        "id": 30914,
        "en": "lack",
        "kk": "[læk]",
        "uk": "/læk/",
        "zh": "n. 不足、缺乏；vt. 缺乏、不足、需要",
        "unit": 17,
        "example": "Her eyes ached from lack of sleep.",
        "exampleZh": "她的眼睛因缺乏睡眠而疼痛。"
    },
    {
        "id": 30915,
        "en": "lady",
        "kk": "[ˋledi]",
        "uk": "/ˈleɪdi/",
        "zh": "n. 女士、淑女、女人、貴婦",
        "unit": 17,
        "example": "Her mother was a titled lady.",
        "exampleZh": "她的母親是一位有爵位的女士。"
    },
    {
        "id": 30916,
        "en": "lake",
        "kk": "[lek]",
        "uk": "/leɪk/",
        "zh": "n. 湖泊、湖、大量的液體、一灘；v. 血球溶解",
        "unit": 17,
        "example": "They walked around the lake.",
        "exampleZh": "他們繞著湖走了一圈。"
    },
    {
        "id": 30917,
        "en": "lamb",
        "kk": "[læm]",
        "uk": "/læm/",
        "zh": "n. 羔羊、小羊、羊羔肉、寶貝；v. 產羊羔、照看、慫恿（某人）大筆花錢",
        "unit": 17,
        "example": "The lamb gave a faint bleat.",
        "exampleZh": "小羊發出微弱的咩咩叫聲。"
    },
    {
        "id": 30918,
        "en": "lamp",
        "kk": "[læmp]",
        "uk": "/læmp/",
        "zh": "n. 燈、光源、發熱燈、照射器；v. 照明、照亮、發光、燈下捕獵",
        "unit": 17,
        "example": "He turned on the desk lamp.",
        "exampleZh": "他打開了桌上的檯燈。"
    },
    {
        "id": 30919,
        "en": "land",
        "kk": "[lænd]",
        "uk": "/lænd/",
        "zh": "n. 土地、陸地、地面、地產；v. 著陸、降落、使（飛機）平穩著陸、登陸",
        "unit": 17,
        "example": "The plane will land very soon.",
        "exampleZh": "飛機很快就會降落。"
    },
    {
        "id": 30920,
        "en": "language",
        "kk": "[ˋlæŋɡwədʒ]",
        "uk": "/ˈlæŋɡwɪdʒ/",
        "zh": "n. 語言、語言文字、言語、說話",
        "unit": 17,
        "example": "She can speak more than one language.",
        "exampleZh": "她會說不止一種語言。"
    },
    {
        "id": 30921,
        "en": "lantern",
        "kk": "[ˋlæntɚn]",
        "uk": "/ˈlæntən/",
        "zh": "n. 燈籠、提燈、燈室、天窗",
        "unit": 17,
        "example": "We hold a bright lantern at night.",
        "exampleZh": "我們在夜晚提著一盞明亮的燈籠。"
    },
    {
        "id": 30922,
        "en": "large",
        "kk": "[lɑrdʒ]",
        "uk": "/lɑːdʒ/",
        "zh": "adj. 大的、廣泛的、重要的、身材高大的；n. 大號、同類中最大者；v. 作樂、狂歡；adv. 誇大地、大大地",
        "unit": 17,
        "example": "They have a large family at home.",
        "exampleZh": "他們家裡有一個大家庭。"
    },
    {
        "id": 30923,
        "en": "last",
        "kk": "[læst]",
        "uk": "/lɑːst/",
        "zh": "adj. 最後的、最近的、上一個的、最後剩下的；vt. 持續、持久、維持、夠用；n. 鞋楦、僅剩下的部分、最後來的人（或發生的事）、殘餘；pron. 最近發生的事情、最後的人或事物、最後的人、最後一次；adv. 最近、上次、最後、最後一點",
        "unit": 17,
        "example": "This is the last piece of cake.",
        "exampleZh": "這是最後一塊蛋糕。"
    },
    {
        "id": 30924,
        "en": "late",
        "kk": "[let]",
        "uk": "/leɪt/",
        "zh": "adj. 晚的、遲的、遲到的、已故的；adv. 晚、遲、接近終了",
        "unit": 17,
        "example": "They're nearly always late.",
        "exampleZh": "他們幾乎總是遲到。"
    },
    {
        "id": 30925,
        "en": "later",
        "kk": "[ˋletɚ]",
        "uk": "/ˈleɪtə(r)/",
        "zh": "adv. 後來、隨後、再見、回頭見；adj. 稍晚的、較晚的、以後的、較新式的",
        "unit": 17,
        "example": "I will call you back later.",
        "exampleZh": "我待會兒再打電話給你。"
    },
    {
        "id": 30926,
        "en": "latest",
        "kk": "[ˋletəst]",
        "uk": "/ˈleɪtɪst/",
        "zh": "adj. 最新的、最近的、最遲的、最後的；n. 最新事物、最新訊息、最遲、最晚",
        "unit": 17,
        "example": "Have you heard the latest news today?",
        "exampleZh": "你今天聽到最新的消息了嗎？"
    },
    {
        "id": 30927,
        "en": "laugh",
        "kk": "[læf]",
        "uk": "/lɑːf/",
        "zh": "v. 笑、發笑、嘲笑、不以為然；n. 笑、笑聲、令人開心的時刻",
        "unit": 17,
        "example": "The funny clown made us laugh.",
        "exampleZh": "那個有趣的丑角逗得我們哈哈大笑。"
    },
    {
        "id": 30928,
        "en": "law",
        "kk": "[lɔ]",
        "uk": "/lɔː/",
        "zh": "n. 法律、法令、法規、規律；v. 起訴、控告",
        "unit": 17,
        "example": "We must all obey the law here.",
        "exampleZh": "我們在這裡都必須遵守法律。"
    },
    {
        "id": 30929,
        "en": "lawyer",
        "kk": "[ˋlɔjɚ]",
        "uk": "/ˈlɔɪə(r)/",
        "zh": "n. 律師；v. 從事法律工作、當律師、處理法律事務",
        "unit": 17,
        "example": "I should like to call my lawyer.",
        "exampleZh": "我希望給我的律師打個電話。"
    },
    {
        "id": 30930,
        "en": "lay",
        "kk": "[le]",
        "uk": "/leɪ/",
        "zh": "vt. 放置、安放、鋪放、鋪設；n. 詩、民歌、位置、方向；adj. 外行的、非專業的、平信徒的、在俗的",
        "unit": 17,
        "example": "Please lay the clean book on the desk.",
        "exampleZh": "請把乾淨的書放在書桌上。"
    },
    {
        "id": 30931,
        "en": "lazy",
        "kk": "[ˋlezi]",
        "uk": "/ˈleɪzi/",
        "zh": "adj. 懶惰的、不願工作的、悠閒的、懶洋洋的；vi. 懶散地移動或躺下",
        "unit": 17,
        "example": "Look how lazy we've become.",
        "exampleZh": "看看我們變得多麼懶惰。"
    },
    {
        "id": 30932,
        "en": "lead",
        "kk": "[lɛd]",
        "uk": "/liːd/",
        "zh": "v. 領導、引領、帶路、通向；n. 領先地位、超前量、領先的距離",
        "unit": 17,
        "example": "He has gone into the lead.",
        "exampleZh": "他已處於領先地位。"
    },
    {
        "id": 30933,
        "en": "leader",
        "kk": "[ˋlidɚ]",
        "uk": "/ˈliːdə(r)/",
        "zh": "n. 領袖、領導者、首領、領先者",
        "unit": 17,
        "example": "The party wants her as leader.",
        "exampleZh": "該黨希望她擔任領導人。"
    },
    {
        "id": 30934,
        "en": "leaf",
        "kk": "[lif]",
        "uk": "/liːf/",
        "zh": "n. 葉、葉子、紙頁、書頁；v. 長新葉",
        "unit": 17,
        "example": "The trees are coming into leaf.",
        "exampleZh": "樹木開始長葉了。"
    },
    {
        "id": 30935,
        "en": "learn",
        "kk": "[lɝn]",
        "uk": "/lɜːn/",
        "zh": "vt. 學習、學會、得知、獲悉",
        "unit": 17,
        "example": "Children learn new words at school.",
        "exampleZh": "孩子們在學校學習新單字。"
    },
    {
        "id": 30936,
        "en": "least",
        "kk": "[list]",
        "uk": "/liːst/",
        "zh": "adj. 最少的、一點兒、最微不足道的、用於極小動植物的名稱；adv. 最低程度地、最少、至少；n. 最不重要的事物、最微小的事物、至少、起碼；pron. 最少量、起碼；det. 最少的、最小的",
        "unit": 17,
        "example": "We need at least two more hours.",
        "exampleZh": "我們至少還需要兩個小時。"
    },
    {
        "id": 30937,
        "en": "leave",
        "kk": "[liv]",
        "uk": "/liːv/",
        "zh": "vt. 離開、離開居住地點、與……脫離關係、不立刻做；n. 假期、休假、准許、許可",
        "unit": 17,
        "example": "We didn't leave early enough.",
        "exampleZh": "我們離開得不夠早。"
    },
    {
        "id": 30938,
        "en": "left",
        "kk": "[lɛft]",
        "uk": "/left/",
        "zh": "adj. 左邊的、左側的、剩餘的；adv. 向左、在左邊；n. 左邊、左側；v. 離開（leave的過去式與過去分詞）",
        "unit": 17,
        "example": "Turn left at the next street.",
        "exampleZh": "在下一條街向左轉。"
    },
    {
        "id": 30939,
        "en": "leg",
        "kk": "[lɛɡ]",
        "uk": "/leɡ/",
        "zh": "n. 腿、動物腿、腿肉、褲腿；comb. 有……腿的；v. 用腿蹬洞頂或洞壁使（船）透過運河隧洞",
        "unit": 17,
        "example": "The poor dog hurt its leg.",
        "exampleZh": "這隻可憐的狗傷了腿。"
    },
    {
        "id": 30940,
        "en": "legal",
        "kk": "[ˋliɡəl]",
        "uk": "/ˈliːɡ(ə)l/",
        "zh": "adj. 合法的、法律允許的、與法律有關的、法律的",
        "unit": 17,
        "example": "Is it legal to park your car here?",
        "exampleZh": "在這裡停車是合法的嗎？"
    },
    {
        "id": 30941,
        "en": "lemon",
        "kk": "[ˋlɛmən]",
        "uk": "/ˈlemən/",
        "zh": "n. 檸檬、檸檬汁、檸檬色、檸檬樹；adj. 檸檬色的",
        "unit": 17,
        "example": "The yellow lemon has a sour taste.",
        "exampleZh": "這顆黃檸檬嚐起來味道很酸。"
    },
    {
        "id": 30942,
        "en": "lend",
        "kk": "[lɛnd]",
        "uk": "/lend/",
        "zh": "vt. 借、借給、借出、貸出",
        "unit": 17,
        "example": "Here, I'll lend you my pen.",
        "exampleZh": "在這裡，我把筆借給你。"
    },
    {
        "id": 30943,
        "en": "less",
        "kk": "[lɛs]",
        "uk": "/les/",
        "zh": "adv. 較少、更少地、程度較低地；det. 較少的、更少的；prep. 減去、扣除；pron. 更少、較小、更小（或更無關緊要）的事物；adj. 更少的、等級較低的、次要的",
        "unit": 17,
        "example": "He has less free time this week.",
        "exampleZh": "他這週的空閒時間比較少。"
    },
    {
        "id": 30944,
        "en": "lesson",
        "kk": "[ˋlɛsən]",
        "uk": "/ˈles(ə)n/",
        "zh": "n. 課程、課、一節課、教訓",
        "unit": 17,
        "example": "We have a music lesson today.",
        "exampleZh": "我們今天有一堂音樂課。"
    },
    {
        "id": 30945,
        "en": "let",
        "kk": "[lɛt]",
        "uk": "/let/",
        "zh": "vt. 讓、允許、准許、同意；n. 擦網球、觸網重發、出租、租借",
        "unit": 17,
        "example": "Please let the children go out now.",
        "exampleZh": "請讓孩子們現在出去。"
    },
    {
        "id": 30946,
        "en": "letter",
        "kk": "[ˋlɛtɚ]",
        "uk": "/ˈletə(r)/",
        "zh": "n. 信、信函、字母、校運動隊首字母標誌；vi. 用字母標註、把字母印刷（或縫製等）於、贏得學校運動隊的字母標誌",
        "unit": 17,
        "example": "She wrote a letter to her friend.",
        "exampleZh": "她寫了一封信給她的朋友。"
    },
    {
        "id": 30947,
        "en": "lettuce",
        "kk": "[ˋlɛtəs]",
        "uk": "/ˈletɪs/",
        "zh": "n. 生菜、萵苣、錢、紙幣",
        "unit": 17,
        "example": "Add some fresh green lettuce to salad.",
        "exampleZh": "在沙拉裡加一些新鮮的綠色萵苣。"
    },
    {
        "id": 30948,
        "en": "level",
        "kk": "[ˋlɛvəl]",
        "uk": "/ˈlev(ə)l/",
        "zh": "n. 水平、數量、程度、標準；adj. 平坦的、水平的、相同價值的；vt. 使平整、推倒、夷平、比分相同",
        "unit": 17,
        "example": "The water level is very high today.",
        "exampleZh": "今天的水位非常高。"
    },
    {
        "id": 30949,
        "en": "library",
        "kk": "[ˋlaɪbrɛ͵ri]",
        "uk": "/ˈlaɪbrəri/",
        "zh": "n. 圖書館、藏書樓、私人收藏、書房",
        "unit": 17,
        "example": "The library is all on one level.",
        "exampleZh": "圖書館全部在同一層樓上。"
    },
    {
        "id": 30950,
        "en": "lick",
        "kk": "[lɪk]",
        "uk": "/lɪk/",
        "zh": "vt. 舔、舐、舔吃、成功地處理；n. 少量、舔、一點、一擊",
        "unit": 17,
        "example": "The happy dog began to lick my hand.",
        "exampleZh": "那隻快樂的狗開始舔我的手。"
    },
    {
        "id": 30951,
        "en": "lid",
        "kk": "[lɪd]",
        "uk": "/lɪd/",
        "zh": "n. 蓋子、蓋、眼瞼、抑制；v. 給……蓋蓋子",
        "unit": 17,
        "example": "The lid should fit snugly.",
        "exampleZh": "蓋子要蓋緊。"
    },
    {
        "id": 30952,
        "en": "lie",
        "kk": "[laɪ]",
        "uk": "/laɪ/",
        "zh": "vi. 躺、平躺、位於、說謊；n. 謊言、謊話、位置",
        "unit": 17,
        "example": "We must nail this lie.",
        "exampleZh": "我們必須揭穿這個謊言。"
    },
    {
        "id": 30953,
        "en": "life",
        "kk": "[laɪf]",
        "uk": "/laɪf/",
        "zh": "n. 生命、人命、性命、生物；adj. 生命的、一生的、終身的",
        "unit": 17,
        "example": "He lives a happy, simple life.",
        "exampleZh": "他過著快樂而簡單的生活。"
    },
    {
        "id": 30954,
        "en": "lift",
        "kk": "[lɪft]",
        "uk": "/lɪft/",
        "zh": "vt. 舉起、提起、抬起、空運；n. 電梯、升降機、免費搭車、搭便車",
        "unit": 17,
        "example": "There is a lift to all floors.",
        "exampleZh": "所有樓層均設有電梯。"
    },
    {
        "id": 30955,
        "en": "light",
        "kk": "[laɪt]",
        "uk": "/laɪt/",
        "zh": "n. 光、光線、燈、電燈；adj. 輕的、淺色的、明亮的；v. 點燃、照亮",
        "unit": 17,
        "example": "Please turn off the room light.",
        "exampleZh": "請把房間的燈關掉。"
    },
    {
        "id": 30956,
        "en": "lightning",
        "kk": "[ˋlaɪtnɪŋ]",
        "uk": "/ˈlaɪtnɪŋ/",
        "zh": "n. 閃電、意外的幸運；adj. 閃電般的、很快的；v. 閃電",
        "unit": 17,
        "example": "Driving today demands lightning reflexes.",
        "exampleZh": "如今駕車需要飛快的反應。"
    },
    {
        "id": 30957,
        "en": "like",
        "kk": "[laɪk]",
        "uk": "/laɪk/",
        "zh": "vt. 喜歡、喜愛、想要；prep. 像、如同、像……一樣；conj. 像……一樣、如同；n. 愛好、相似的人或物",
        "unit": 17,
        "example": "I like to read books at home.",
        "exampleZh": "我喜歡在家裡看書。"
    },
    {
        "id": 30958,
        "en": "likely",
        "kk": "[ˋlaɪkli]",
        "uk": "/ˈlaɪkli/",
        "zh": "adj. 可能發生的、似乎合適的、彷彿恰當的、似乎真實的；adv. 大概、很可能",
        "unit": 17,
        "example": "We will likely see him later.",
        "exampleZh": "我們可能稍後會見到他。"
    },
    {
        "id": 30959,
        "en": "lily",
        "kk": "[ˋlɪli]",
        "uk": "/ˈlɪli/",
        "zh": "n. 百合花、百合、睡蓮、鳶尾花形的紋章；adj. 純潔的、潔白的",
        "unit": 17,
        "example": "The white lily is a symbol of purity.",
        "exampleZh": "白百合是純潔的象徵。"
    },
    {
        "id": 30960,
        "en": "limit",
        "kk": "[ˋlɪmət]",
        "uk": "/ˈlɪmɪt/",
        "zh": "n. 限度、限制、極限、限量；vt. 限制、限定、制約、減少",
        "unit": 17,
        "example": "The road has a 30 mph speed limit.",
        "exampleZh": "這條公路限定時速30英里。"
    },
    {
        "id": 30961,
        "en": "line",
        "kk": "[laɪn]",
        "uk": "/laɪn/",
        "zh": "n. 線、線條、場界、場地線；vt. 沿……形成行、給……安襯裡、鋪、墊",
        "unit": 17,
        "example": "Please wait behind this yellow line.",
        "exampleZh": "請在這條黃線後面等候。"
    },
    {
        "id": 30962,
        "en": "link",
        "kk": "[lɪŋk]",
        "uk": "/lɪŋk/",
        "zh": "vt. 聯繫、連線、與……有關聯、挽住；n. 連結、聯絡、關係、環",
        "unit": 17,
        "example": "Click on this link to see photos.",
        "exampleZh": "點擊這個連結來看照片。"
    },
    {
        "id": 30963,
        "en": "lion",
        "kk": "[ˋlaɪən]",
        "uk": "/ˈlaɪən/",
        "zh": "n. 獅子、名人、社交場合的名流、勇猛的人",
        "unit": 17,
        "example": "The lion is a strong wild animal.",
        "exampleZh": "獅子是一種強壯的野生動物。"
    },
    {
        "id": 30964,
        "en": "lip",
        "kk": "[lɪp]",
        "uk": "/lɪp/",
        "zh": "n. 嘴唇、邊緣、容器邊緣、開口；v. 拍打、擊球至（洞穴）的邊緣、用嘴唇觸及、吻；adj. 口頭上的",
        "unit": 17,
        "example": "The boy hurt his upper lip.",
        "exampleZh": "那個男孩弄傷了上唇。"
    },
    {
        "id": 30965,
        "en": "liquid",
        "kk": "[ˋlɪkwəd]",
        "uk": "/ˈlɪkwɪd/",
        "zh": "n. 液體、液態物、流音；adj. 液態的、液化的、流動的、易變為現金的",
        "unit": 17,
        "example": "Water is a clear and clean liquid.",
        "exampleZh": "水是一種透明又乾淨的液體。"
    },
    {
        "id": 30966,
        "en": "list",
        "kk": "[lɪst]",
        "uk": "/lɪst/",
        "zh": "n. 清單、列表、傾側、圍欄；vt. 列出、列清單、擬訂清單、把……列入名單",
        "unit": 17,
        "example": "Write down the names on this list.",
        "exampleZh": "把名字寫在這份清單上。"
    },
    {
        "id": 30967,
        "en": "listen",
        "kk": "[ˋlɪsən]",
        "uk": "/ˈlɪs(ə)n/",
        "zh": "vi. 聽、傾聽、聽從、聽信；n. 聽、傾聽",
        "unit": 17,
        "example": "Please listen carefully to your teacher.",
        "exampleZh": "請仔細聽你的老師說話。"
    },
    {
        "id": 30968,
        "en": "liter",
        "kk": "[ˋlitɚ]",
        "uk": "/ˈliːtə(r)/",
        "zh": "n. 升、公升",
        "unit": 17,
        "example": "Drink one liter of water daily.",
        "exampleZh": "每天喝一公升的水。"
    },
    {
        "id": 30969,
        "en": "little",
        "kk": "[ˋlɪtəl]",
        "uk": "/ˈlɪt(ə)l/",
        "zh": "adj. 小的、比較小的、用於強調對某人或某物的意見、年幼的；det. 一點兒、少得幾乎沒有、少量的、一些；adv. 極少、輕微、幾乎不；pron. 少許",
        "unit": 17,
        "example": "She has a little white dog.",
        "exampleZh": "她有一隻白色的小狗。"
    },
    {
        "id": 30970,
        "en": "live",
        "kk": "[laɪv]",
        "uk": "/lɪv; laɪv/",
        "zh": "v. 居住、生存、活著、生活在；adj. 活的、有生命的、含乳酸菌的、現場直播的；adv. 現場直播地、實況轉播地",
        "unit": 17,
        "example": "My grandparents live in a small town.",
        "exampleZh": "我的祖父母住在一個小鎮上。"
    },
    {
        "id": 30971,
        "en": "loaf",
        "kk": "[lof]",
        "uk": "/ləʊf/",
        "zh": "n. 一條、一塊、糕；vi. 遊蕩、閒逛",
        "unit": 17,
        "example": "He bought a fresh loaf of bread.",
        "exampleZh": "他買了一整條新鮮的麵包。"
    },
    {
        "id": 30972,
        "en": "local",
        "kk": "[ˋlokəl]",
        "uk": "/ˈləʊk(ə)l/",
        "zh": "adj. 本地的、當地的、地方的、區域性的；n. 當地人、本地人、住處附近的酒吧、地方分會",
        "unit": 17,
        "example": "We buy food at the local market.",
        "exampleZh": "我們在當地的市場買食物。"
    },
    {
        "id": 30973,
        "en": "lock",
        "kk": "[lɑk]",
        "uk": "/lɒk/",
        "zh": "vt. 鎖住、把……鎖起來、固定、卡住；n. 鎖、一縷頭髮、頭髮、船閘",
        "unit": 17,
        "example": "The key doesn't fit the lock.",
        "exampleZh": "這把鑰匙打不開這把鎖。"
    },
    {
        "id": 30974,
        "en": "locker",
        "kk": "[ˋlɑkɚ]",
        "uk": "/ˈlɒkə(r)/",
        "zh": "n. 寄物櫃、鎖櫃、冷藏間、鎖具",
        "unit": 17,
        "example": "Put your coat in the locker.",
        "exampleZh": "把你的外套放進置物櫃裡。"
    },
    {
        "id": 30975,
        "en": "lonely",
        "kk": "[ˋlonli]",
        "uk": "/ˈləʊnli/",
        "zh": "adj. 寂寞的、孤單的、在孤單中度過的、偏僻的",
        "unit": 17,
        "example": "I could see she was lonely.",
        "exampleZh": "我看得出來她很孤獨。"
    },
    {
        "id": 30976,
        "en": "long",
        "kk": "[lɔŋ]",
        "uk": "/lɒŋ/",
        "zh": "adj. 長的、長久的、長期的；adv. 長久地、長期地、很久；vi. 渴望、極想",
        "unit": 17,
        "example": "We walked down a long dirt road.",
        "exampleZh": "我們走在一條長長的泥土路上。"
    },
    {
        "id": 30977,
        "en": "look",
        "kk": "[lʊk]",
        "uk": "/lʊk/",
        "zh": "v. 看、尋找、與……外表相似、看似；n. 看、尋找、搜尋、表情",
        "unit": 17,
        "example": "Look at the bright moon up there.",
        "exampleZh": "看著上面明亮的月亮。"
    },
    {
        "id": 30978,
        "en": "lose",
        "kk": "[luz]",
        "uk": "/luːz/",
        "zh": "vt. 失去、遺失、丟失、被剝奪",
        "unit": 17,
        "example": "No one likes to lose.",
        "exampleZh": "沒有人喜歡失敗。"
    },
    {
        "id": 30979,
        "en": "loser",
        "kk": "[ˋluzɚ]",
        "uk": "/ˈluːzə(r)/",
        "zh": "n. 失敗者、輸家",
        "unit": 17,
        "example": "He was polite to the game loser.",
        "exampleZh": "他對比賽的輸家很有禮貌。"
    },
    {
        "id": 30980,
        "en": "lot",
        "kk": "[lɑt]",
        "uk": "/lɒt/",
        "zh": "n. 許多、大量、一群、籤；adv. 非常、很",
        "unit": 17,
        "example": "We have a lot of work today.",
        "exampleZh": "我們今天有很多工作要做。"
    },
    {
        "id": 30981,
        "en": "loud",
        "kk": "[laʊd]",
        "uk": "/laʊd/",
        "zh": "adj. 大聲的、響亮的、吵鬧的、聒噪的；adv. 大聲地、響亮地",
        "unit": 17,
        "example": "She gave a loud hiccup.",
        "exampleZh": "她大聲打了個嗝。"
    },
    {
        "id": 30982,
        "en": "love",
        "kk": "[lʌv]",
        "uk": "/lʌv/",
        "zh": "v. 愛、喜愛、熱愛；n. 愛、愛情、喜愛、關愛",
        "unit": 17,
        "example": "Young boys love to play in the park.",
        "exampleZh": "小男孩們喜歡在公園裡玩耍。"
    },
    {
        "id": 30983,
        "en": "lovely",
        "kk": "[ˋlʌvli]",
        "uk": "/ˈlʌvli/",
        "zh": "adj. 可愛的、迷人的、令人愉快的、美好的；n. 美女、佳人、可愛的東西",
        "unit": 17,
        "example": "You look lovely, Marcia.",
        "exampleZh": "你看起來很可愛，瑪西亞。"
    },
    {
        "id": 30984,
        "en": "lover",
        "kk": "[ˋlʌvɚ]",
        "uk": "/ˈlʌvə(r)/",
        "zh": "n. 情人、愛好者",
        "unit": 17,
        "example": "My brother is a great music lover.",
        "exampleZh": "我哥哥是個超級音樂愛好者。"
    },
    {
        "id": 30985,
        "en": "low",
        "kk": "[lo]",
        "uk": "/ləʊ/",
        "zh": "adj. 低的、矮的、在底部的、領口開得低的；adv. 在（或向）低位置、低於通常（或期望）的水平；n. 低點、低谷、低氣壓區；v. 哞哞叫",
        "unit": 17,
        "example": "The sun is low in the sky.",
        "exampleZh": "太陽在天空中很低的位置。"
    },
    {
        "id": 30986,
        "en": "luck",
        "kk": "[lʌk]",
        "uk": "/lʌk/",
        "zh": "n. 運氣、幸運、好運、機遇；v. 湊巧碰上、靠運氣成功",
        "unit": 17,
        "example": "I wish you the best of luck.",
        "exampleZh": "我祝你好運連連。"
    },
    {
        "id": 30987,
        "en": "lucky",
        "kk": "[ˋlʌki]",
        "uk": "/ˈlʌki/",
        "zh": "adj. 幸運的、走運的、吉祥的",
        "unit": 17,
        "example": "He felt very lucky to escape the storm without injury.",
        "exampleZh": "他感到非常幸運能在暴風雨中毫髮無傷。"
    },
    {
        "id": 30988,
        "en": "lunch",
        "kk": "[lʌntʃ]",
        "uk": "/lʌntʃ/",
        "zh": "n. 午餐、午飯；vi. 用午餐、請（人）吃午餐",
        "unit": 17,
        "example": "We eat our lunch at noon daily.",
        "exampleZh": "我們每天中午吃午餐。"
    },
    {
        "id": 30989,
        "en": "machine",
        "kk": "[məˋʃin]",
        "uk": "/məˈʃiːn/",
        "zh": "n. 機器、機械、計算機、電腦；vt. 用機器製造、機器縫製、用縫紉機縫",
        "unit": 17,
        "example": "This big machine makes paper boxes.",
        "exampleZh": "這台大機器製作紙箱。"
    },
    {
        "id": 30990,
        "en": "mad",
        "kk": "[mæd]",
        "uk": "/mæd/",
        "zh": "adj. 生氣的、氣憤的、極愚蠢的、很不明智的",
        "unit": 17,
        "example": "Mom was very mad at me yesterday.",
        "exampleZh": "媽媽昨天對我非常生氣。"
    },
    {
        "id": 30991,
        "en": "magazine",
        "kk": "[ˋmæɡə͵zin]",
        "uk": "/ˌmæɡəˈziːn/",
        "zh": "n. 雜誌、期刊、專題節目、彈匣",
        "unit": 17,
        "example": "She reads a news magazine every week.",
        "exampleZh": "她每週讀一本新聞雜誌。"
    },
    {
        "id": 30992,
        "en": "magic",
        "kk": "[ˋmædʒɪk]",
        "uk": "/ˈmædʒɪk/",
        "zh": "n. 魔法、法術、魔術、戲法；adj. 魔術的、戲法的、魔法的、魔力的；v. 用魔法變出",
        "unit": 17,
        "example": "The boy was amazed by the magic.",
        "exampleZh": "那個男孩為這個魔術感到驚奇。"
    },
    {
        "id": 30993,
        "en": "magician",
        "kk": "[məˋdʒɪʃən]",
        "uk": "/məˈdʒɪʃn/",
        "zh": "n. 魔術師、變戲法的人、巫師、術士",
        "unit": 17,
        "example": "The magician did a cool card trick.",
        "exampleZh": "魔術師表演了一個很酷的紙牌魔術。"
    },
    {
        "id": 30994,
        "en": "mail",
        "kk": "[mel]",
        "uk": "/meɪl/",
        "zh": "n. 郵政、郵遞系統、郵件、信件；vt. 郵寄、用電子郵件傳送、給……披上鎧甲",
        "unit": 17,
        "example": "There isn't much mail today.",
        "exampleZh": "今天郵件不多。"
    },
    {
        "id": 30995,
        "en": "main",
        "kk": "[men]",
        "uk": "/meɪn/",
        "zh": "adj. 主要的、最大的；n. 總管道、主線路、供應系統、電源插座",
        "unit": 17,
        "example": "This is the main street of town.",
        "exampleZh": "這是小鎮的主要街道。"
    },
    {
        "id": 30996,
        "en": "maintain",
        "kk": "[menˋten]",
        "uk": "/meɪnˈteɪn/",
        "zh": "vt. 維持、保持、維修、保養",
        "unit": 17,
        "example": "You should maintain a clean room daily.",
        "exampleZh": "你應該每天維持房間的整潔。"
    },
    {
        "id": 30997,
        "en": "major",
        "kk": "[ˋmedʒɚ]",
        "uk": "/ˈmeɪdʒə(r)/",
        "zh": "n. 主修科目、專業、陸軍少校、空軍少校；vi. 主修、專攻；adj. 重大的、主要的、嚴重的、大調的",
        "unit": 17,
        "example": "Water is a major city need.",
        "exampleZh": "水是這座城市的主要需求。"
    },
    {
        "id": 30998,
        "en": "make",
        "kk": "[mek]",
        "uk": "/meɪk/",
        "zh": "vt. 做、製造、制定、擬定；n. 品牌、型號、結構、構造",
        "unit": 17,
        "example": "Mom will make a sweet cake today.",
        "exampleZh": "媽媽今天會做一個甜甜的蛋糕。"
    },
    {
        "id": 30999,
        "en": "male",
        "kk": "[mel]",
        "uk": "/meɪl/",
        "zh": "adj. 男性的、公的、雄性的、只有雄蕊的；n. 男子、男孩、雄性動物、雄性植物",
        "unit": 17,
        "example": "The male bird can sing very well.",
        "exampleZh": "雄鳥可以唱得非常好聽。"
    },
    {
        "id": 31000,
        "en": "mall",
        "kk": "[mɔl]",
        "uk": "/mɔːl; mæl/",
        "zh": "n. 商場、購物中心、步行商業區、步行道",
        "unit": 17,
        "example": "Let's go to the mall.",
        "exampleZh": "我們去商場吧。"
    },
    {
        "id": 31001,
        "en": "man",
        "kk": "[mæn]",
        "uk": "/mæn/",
        "zh": "n. 男人、成年男子、人類、人；vt. 操作、配備人員",
        "unit": 18,
        "example": "That tall man is my old uncle.",
        "exampleZh": "那位高個子男人是我的老叔叔。"
    },
    {
        "id": 31002,
        "en": "manager",
        "kk": "[ˋmænədʒɚ]",
        "uk": "/ˈmænɪdʒə(r)/",
        "zh": "n. 經理、經紀人、管理人、主教練",
        "unit": 18,
        "example": "John is the London area manager.",
        "exampleZh": "約翰是倫敦地區經理。"
    },
    {
        "id": 31003,
        "en": "mango",
        "kk": "[ˋmæŋɡo]",
        "uk": "/ˈmæŋɡəʊ/",
        "zh": "n. 芒果、芒果樹、芒果蜂鳥",
        "unit": 18,
        "example": "This sweet mango is yellow and soft.",
        "exampleZh": "這顆甜芒果又黃又軟。"
    },
    {
        "id": 31004,
        "en": "manner",
        "kk": "[ˋmænɚ]",
        "uk": "/ˈmænə(r)/",
        "zh": "n. 態度、舉止、禮貌、方式",
        "unit": 18,
        "example": "He always speaks in a polite manner.",
        "exampleZh": "他講話總是非常有禮貌。"
    },
    {
        "id": 31005,
        "en": "many",
        "kk": "[ˋmɛni]",
        "uk": "/ˈmeni/",
        "zh": "det. 許多、大量；pron. 許多、許多人；adj. 許多的；n. 大多數人；adv. 多",
        "unit": 18,
        "example": "There are many books on the desk.",
        "exampleZh": "書桌上有許多書。"
    },
    {
        "id": 31006,
        "en": "map",
        "kk": "[mæp]",
        "uk": "/mæp/",
        "zh": "n. 地圖、分佈圖、圖譜、染色體圖；vt. 繪製……的地圖、瞭解資訊、詳細安排、對映",
        "unit": 18,
        "example": "I'm trying to read the map.",
        "exampleZh": "我正在嘗試閱讀地圖。"
    },
    {
        "id": 31007,
        "en": "March",
        "kk": "[mɑrtʃ]",
        "uk": "/mɑːtʃ/",
        "zh": "v. 齊步走、行軍、快步走、強迫（某人）一起走；n. 三月、示威遊行、行進、行軍",
        "unit": 18,
        "example": "School begins in early March here.",
        "exampleZh": "這裡的學校在三月初開學。"
    },
    {
        "id": 31008,
        "en": "mark",
        "kk": "[mɑrk]",
        "uk": "/mɑːk/",
        "zh": "n. 痕跡、汙點、標識、記號；vt. 做記號、做標記、留下痕跡、弄汙",
        "unit": 18,
        "example": "Make a small pencil mark right here.",
        "exampleZh": "就在這裡用鉛筆做個小記號。"
    },
    {
        "id": 31009,
        "en": "market",
        "kk": "[ˋmɑrkət]",
        "uk": "/ˈmɑːkɪt/",
        "zh": "n. 集市、市場、交易、交易量；vt. 推銷、促銷、出售、做買賣；adj. 市場的、由市場決定的",
        "unit": 18,
        "example": "She buys fresh fruit at the market.",
        "exampleZh": "她在市場購買新鮮水果。"
    },
    {
        "id": 31010,
        "en": "marriage",
        "kk": "[ˋmɛrɪdʒ]",
        "uk": "/ˈmærɪdʒ/",
        "zh": "n. 結婚、婚姻、婚禮、緊密結合",
        "unit": 18,
        "example": "You both have to work hard at marriage.",
        "exampleZh": "你們倆都必須在婚姻中努力工作。"
    },
    {
        "id": 31011,
        "en": "married",
        "kk": "[ˋmɛrid]",
        "uk": "/ˈmærid/",
        "zh": "adj. 已婚的、結婚的、婚姻的、夫婦的；n. 已婚者；v. 結婚、嫁、娶、為……主持婚禮",
        "unit": 18,
        "example": "They got married five years ago.",
        "exampleZh": "他們五年前結婚了。"
    },
    {
        "id": 31012,
        "en": "marry",
        "kk": "[ˋmɛri]",
        "uk": "/ˈmæri/",
        "zh": "vt. 結婚、嫁、娶、為……主持婚禮",
        "unit": 18,
        "example": "They'll forbid you to marry.",
        "exampleZh": "他們會禁止你結婚。"
    },
    {
        "id": 31013,
        "en": "marvelous",
        "kk": "[ˋmɑrvələs]",
        "uk": "/ˈmɑːvələs/",
        "zh": "adj. 非凡的、了不起的、極好的、令人驚異的",
        "unit": 18,
        "example": "We had a marvelous time today.",
        "exampleZh": "我們今天度過了極好的時光。"
    },
    {
        "id": 31014,
        "en": "mask",
        "kk": "[mæsk]",
        "uk": "/mɑːsk/",
        "zh": "n. 面罩、口罩、防毒面具、呼吸面罩；vt. 掩飾、偽裝、隱瞞、蓋住",
        "unit": 18,
        "example": "You should wear a mask on the bus.",
        "exampleZh": "你在公車上應該戴口罩。"
    },
    {
        "id": 31015,
        "en": "mass",
        "kk": "[mæs]",
        "uk": "/mæs/",
        "zh": "n. 塊、團、大量、許多；adj. 民眾的、大量的；vt. 聚集、集結",
        "unit": 18,
        "example": "A huge mass of snow fell down.",
        "exampleZh": "大塊積雪掉了下來。"
    },
    {
        "id": 31016,
        "en": "master",
        "kk": "[ˋmæstɚ]",
        "uk": "/ˈmɑːstə(r)/",
        "zh": "n. 主人、大師、碩士、僱主；vt. 精通、掌握、控制；adj. 主要的、精通的",
        "unit": 18,
        "example": "The dog ran to its master fast.",
        "exampleZh": "小狗快速地跑向它的主人。"
    },
    {
        "id": 31017,
        "en": "mat",
        "kk": "[mæt]",
        "uk": "/mæt/",
        "zh": "n. 墊子、地墊、團、簇",
        "unit": 18,
        "example": "Please wipe your shoes on the mat.",
        "exampleZh": "請在門墊上擦擦鞋子。"
    },
    {
        "id": 31018,
        "en": "match",
        "kk": "[mætʃ]",
        "uk": "/mætʃ/",
        "zh": "n. 比賽、競賽、火柴、敵手；vt. 比得上、敵得過、使成對、使相配",
        "unit": 18,
        "example": "We won the big tennis match today.",
        "exampleZh": "我們今天贏得了那場重要的網球比賽。"
    },
    {
        "id": 31019,
        "en": "mate",
        "kk": "[met]",
        "uk": "/meɪt/",
        "zh": "n. 朋友、夥伴、同伴、同事；vt. 交配、連線、配備、將死",
        "unit": 18,
        "example": "He had lunch with his good mate.",
        "exampleZh": "他和他的好夥伴一起吃午餐。"
    },
    {
        "id": 31020,
        "en": "material",
        "kk": "[məˋtɪriəl]",
        "uk": "/məˈtɪəriəl/",
        "zh": "n. 材料、衣料、布料、原料；adj. 物質的、非精神上的、重要的、需予以考慮的",
        "unit": 18,
        "example": "This material is 45% nylon.",
        "exampleZh": "這種材料含45%的尼龍。"
    },
    {
        "id": 31021,
        "en": "matter",
        "kk": "[ˋmætɚ]",
        "uk": "/ˈmætə(r)/",
        "zh": "n. 事情、問題、事態、情況；vt. 要緊、有關係、化膿、流膿",
        "unit": 18,
        "example": "What is the matter with your car?",
        "exampleZh": "你的車子出了什麼事？"
    },
    {
        "id": 31022,
        "en": "maximum",
        "kk": "[ˋmæksəməm]",
        "uk": "/ˈmæksɪməm/",
        "zh": "adj. 最大限度的、極大的、極多的；n. 最大量、最大限度；adv. 最多、充其量",
        "unit": 18,
        "example": "The maximum speed is fifty miles.",
        "exampleZh": "最高速度限制是五十英里。"
    },
    {
        "id": 31023,
        "en": "may",
        "kk": "[me]",
        "uk": "/meɪ/",
        "zh": "aux. 可以、可能、也許、祝；n. 五月、山楂花",
        "unit": 18,
        "example": "That may or may not be true.",
        "exampleZh": "這可能是真的，也可能不是。"
    },
    {
        "id": 31025,
        "en": "maybe",
        "kk": "[ˋmebi]",
        "uk": "/ˈmeɪbi/",
        "zh": "adv. 也許、大概、或許；n. 可能性、不確定性",
        "unit": 18,
        "example": "Maybe we can go to the beach.",
        "exampleZh": "也許我們可以去海灘。"
    },
    {
        "id": 31026,
        "en": "meal",
        "kk": "[mil]",
        "uk": "/miːl/",
        "zh": "n. 餐、一餐、進餐、一餐所吃的食物；v. 進餐",
        "unit": 18,
        "example": "Dinner is the main meal of the day.",
        "exampleZh": "晚餐是一天當中的主餐。"
    },
    {
        "id": 31027,
        "en": "mean",
        "kk": "[min]",
        "uk": "/miːn/",
        "zh": "vt. 意思是、意味著、打算；adj. 吝嗇的、小氣的、刻薄的；n. 平均數、中庸",
        "unit": 18,
        "example": "What does this new word mean?",
        "exampleZh": "這個新單字是什麼意思？"
    },
    {
        "id": 31028,
        "en": "meaning",
        "kk": "[ˋminɪŋ]",
        "uk": "/ˈmiːnɪŋ/",
        "zh": "n. 意思、意義、含義、真正重要性；adj. 意味深長的；v. 表示……的意思、作……的解釋、意味著、打算",
        "unit": 18,
        "example": "What's the meaning of this word?",
        "exampleZh": "這個單詞的意思是什麼？"
    },
    {
        "id": 31029,
        "en": "measure",
        "kk": "[ˋmɛʒɚ]",
        "uk": "/ˈmeʒə(r)/",
        "zh": "n. 措施、辦法、適量、適度；vt. 測量、量度為、估量、判定",
        "unit": 18,
        "example": "Use a ruler to measure length.",
        "exampleZh": "用尺來測量長度。"
    },
    {
        "id": 31030,
        "en": "meat",
        "kk": "[mit]",
        "uk": "/miːt/",
        "zh": "n. 肉類、食用肉、重要的部分、有趣的部分",
        "unit": 18,
        "example": "He does not eat any red meat.",
        "exampleZh": "他不吃任何紅肉。"
    },
    {
        "id": 31031,
        "en": "mechanic",
        "kk": "[məˋkænɪk]",
        "uk": "/məˈkænɪk; mɪˈkænɪk/",
        "zh": "n. 技工、機械工、機修工、勞工；adj. 手工的",
        "unit": 18,
        "example": "The mechanic can fix my car.",
        "exampleZh": "那位技工能修好我的車。"
    },
    {
        "id": 31032,
        "en": "media",
        "kk": "[ˋmidiə]",
        "uk": "/ˈmiːdiə/",
        "zh": "n. 大眾傳媒、新聞媒體、傳媒、媒體工作者",
        "unit": 18,
        "example": "Her car was mobbed by the media.",
        "exampleZh": "她的汽車被媒體團團圍住。"
    },
    {
        "id": 31033,
        "en": "medicine",
        "kk": "[ˋmɛdəsən]",
        "uk": "/ˈmedsn; ˈmedɪsn/",
        "zh": "n. 藥、藥物、藥劑、醫療；v. 用藥物治療、給……用藥",
        "unit": 18,
        "example": "Take your medicine on time every day.",
        "exampleZh": "每天準時吃藥。"
    },
    {
        "id": 31034,
        "en": "medium",
        "kk": "[ˋmidiəm]",
        "uk": "/ˈmiːdiəm/",
        "zh": "n. 媒介、媒體、方法、手段；adj. 中等的、中間的、適中的、五分熟的",
        "unit": 18,
        "example": "There are three sizes—small, medium and large.",
        "exampleZh": "有三種尺寸—小號、中號和大號。"
    },
    {
        "id": 31035,
        "en": "meet",
        "kk": "[mit]",
        "uk": "/miːt/",
        "zh": "v. 結識、被引見、會面；n. 競賽大會、運動會、賽事、約會；adj. 合適的、恰當的",
        "unit": 18,
        "example": "Let us meet at the school gate.",
        "exampleZh": "我們在校門口碰面吧。"
    },
    {
        "id": 31036,
        "en": "meeting",
        "kk": "[ˋmitɪŋ]",
        "uk": "/ˈmiːtɪŋ/",
        "zh": "n. 會議、集會、偶遇、會面；v. 會面、會合",
        "unit": 18,
        "example": "The meeting went off well.",
        "exampleZh": "會議進行得很好。"
    },
    {
        "id": 31037,
        "en": "member",
        "kk": "[ˋmɛmbɚ]",
        "uk": "/ˈmembə(r)/",
        "zh": "n. 會員、成員、一分子、議員",
        "unit": 18,
        "example": "He is a member of the swim team.",
        "exampleZh": "他是游泳隊的一名成員。"
    },
    {
        "id": 31038,
        "en": "memory",
        "kk": "[ˋmɛmɚi]",
        "uk": "/ˈmeməri/",
        "zh": "n. 記憶、記憶力、記性、回憶",
        "unit": 18,
        "example": "My father has a very good memory.",
        "exampleZh": "我父親的記性非常好。"
    },
    {
        "id": 31039,
        "en": "menu",
        "kk": "[ˋmɛnju]",
        "uk": "/ˈmenjuː/",
        "zh": "n. 菜單、選單、飯菜、菜餚",
        "unit": 18,
        "example": "May I look at the lunch menu?",
        "exampleZh": "我可以看一下午餐菜單嗎？"
    },
    {
        "id": 31040,
        "en": "message",
        "kk": "[ˋmɛsədʒ]",
        "uk": "/ˈmesɪdʒ/",
        "zh": "n. 信息、口信、訊息、要旨；vt. 傳送、通報",
        "unit": 18,
        "example": "Please leave a short message for me.",
        "exampleZh": "請幫我留一則簡短的訊息。"
    },
    {
        "id": 31041,
        "en": "metal",
        "kk": "[ˋmɛtəl]",
        "uk": "/ˈmet(ə)l/",
        "zh": "n. 金屬、重金屬音樂、金屬色、築路碎石；v. 用金屬做、用金屬包、用碎石築路、用碎石修路；adj. 金屬製的",
        "unit": 18,
        "example": "Rust had eaten into the metal.",
        "exampleZh": "這金屬已經鏽壞。"
    },
    {
        "id": 31042,
        "en": "meter",
        "kk": "[ˋmitɚ]",
        "uk": "/ˈmiːtə(r)/",
        "zh": "n. 公尺、計量器、儀、表；vt. 用儀表計量、透過計量器計",
        "unit": 18,
        "example": "The tall tree is ten meters high.",
        "exampleZh": "那棵大樹有十公尺高。"
    },
    {
        "id": 31043,
        "en": "method",
        "kk": "[ˋmɛθəd]",
        "uk": "/ˈmeθəd/",
        "zh": "n. 方法、辦法、條理、體驗派表演方法",
        "unit": 18,
        "example": "There is just one method that might work.",
        "exampleZh": "只有一個方法可能起作用。"
    },
    {
        "id": 31044,
        "en": "microwave",
        "kk": "[ˋmaɪkrə͵wev]",
        "uk": "/ˈmaɪkrəweɪv/",
        "zh": "n. 微波爐、微波；vt. 用微波爐烹調",
        "unit": 18,
        "example": "Heat your lunch in the microwave.",
        "exampleZh": "在微波爐裡加熱你的午餐。"
    },
    {
        "id": 31045,
        "en": "middle",
        "kk": "[ˋmɪdəl]",
        "uk": "/ˈmɪd(ə)l/",
        "zh": "adj. 中間的、中等的、折中的、中庸之道的；n. 中間、中部、中等、腰部；v. 用球棒（或拍）中部擊",
        "unit": 18,
        "example": "His middle name is Justin.",
        "exampleZh": "他的中間名是賈斯汀。"
    },
    {
        "id": 31046,
        "en": "midnight",
        "kk": "[ˋmɪd͵naɪt]",
        "uk": "/ˈmɪdnaɪt/",
        "zh": "n. 午夜、半夜；adj. 半夜的、午夜的",
        "unit": 18,
        "example": "They had to leave at midnight.",
        "exampleZh": "他們不得不半夜離開。"
    },
    {
        "id": 31047,
        "en": "mile",
        "kk": "[maɪl]",
        "uk": "/maɪl/",
        "zh": "n. 英里、一英里賽跑、很長的距離、很多",
        "unit": 18,
        "example": "We walked one mile down the road.",
        "exampleZh": "我們沿著這條路走了一英里。"
    },
    {
        "id": 31048,
        "en": "milk",
        "kk": "[mɪlk]",
        "uk": "/mɪlk/",
        "zh": "n. 奶、奶汁、母乳、乳液；vt. 擠奶、榨取、勒索、充分利用",
        "unit": 18,
        "example": "She's gone for some milk.",
        "exampleZh": "她去喝牛奶了。"
    },
    {
        "id": 31049,
        "en": "million",
        "kk": "[ˋmɪljən]",
        "uk": "/ˈmɪljən/",
        "zh": "num. 一百萬、一百萬個；n. 百萬、百萬個、許多、無數；adj. 許多的、無數的",
        "unit": 18,
        "example": "More than a million people live here.",
        "exampleZh": "有一百多萬人住在這座城市。"
    },
    {
        "id": 31050,
        "en": "mind",
        "kk": "[maɪnd]",
        "uk": "/maɪnd/",
        "zh": "n. 心智、頭腦、心思、想法；v. 介意、注意、當心",
        "unit": 18,
        "example": "Keep this good rule in your mind.",
        "exampleZh": "把這條好規則記在你的心中。"
    },
    {
        "id": 31051,
        "en": "mine",
        "kk": "[maɪn]",
        "uk": "/maɪn/",
        "zh": "pron. 我的、我的家；n. 礦、礦井、地雷、水雷；vt. 採、佈雷、用雷炸燬、尋找（某事物中）蘊含的價值",
        "unit": 18,
        "example": "They dig for gold in the mine.",
        "exampleZh": "他們在礦坑裡採金礦。"
    },
    {
        "id": 31052,
        "en": "minor",
        "kk": "[ˋmaɪnɚ]",
        "uk": "/ˈmaɪnə(r)/",
        "zh": "adj. 較小的、次要的、輕微的；n. 未成年人、輔修科目；vi. 輔修",
        "unit": 18,
        "example": "It was only a minor cut.",
        "exampleZh": "那只是一個輕微的小傷口。"
    },
    {
        "id": 31053,
        "en": "minus",
        "kk": "[ˋmaɪnəs]",
        "uk": "/ˈmaɪnəs/",
        "zh": "prep. 減、減去、沒有、缺少；n. 缺點、不利條件、減號、負號；adj. 小於零的、負的、不利的、負面的",
        "unit": 18,
        "example": "One minus one is zero.",
        "exampleZh": "一減一等於零。"
    },
    {
        "id": 31054,
        "en": "minute",
        "kk": "[ˋmɪnət]",
        "uk": "/ˈmɪnɪt/",
        "zh": "n. 分、分鐘、片刻、一會兒；adj. 極小的、微小的、詳細的、細緻入微的；vt. 將（某事）寫進會議記錄、傳送備忘錄",
        "unit": 18,
        "example": "Please wait for just one minute.",
        "exampleZh": "請等候短短一分鐘。"
    },
    {
        "id": 31055,
        "en": "mirror",
        "kk": "[ˋmɪrɚ]",
        "uk": "/ˈmɪrə(r)/",
        "zh": "n. 鏡子、寫照、真實反映、映象網點；vt. 反射、映照、反映、與……十分相似",
        "unit": 18,
        "example": "She looked at her face in the mirror.",
        "exampleZh": "她在鏡子裡看著自己的臉龐。"
    },
    {
        "id": 31057,
        "en": "miss",
        "kk": "[mɪs]",
        "uk": "/mɪs/",
        "zh": "n. 小姐、女士、年輕未婚女子；vt. 想念、錯過、缺",
        "unit": 18,
        "example": "Hurry up, or we will miss the bus.",
        "exampleZh": "快點，否則我們會錯過公車。"
    },
    {
        "id": 31058,
        "en": "mistake",
        "kk": "[mɪˋstek]",
        "uk": "/mɪˈsteɪk/",
        "zh": "n. 錯誤、過失、口誤、筆誤；vt. 誤解、誤會、錯誤判斷、把……誤認為",
        "unit": 18,
        "example": "I made a mistake on my test.",
        "exampleZh": "我在考試中犯了一個錯誤。"
    },
    {
        "id": 31059,
        "en": "mix",
        "kk": "[mɪks]",
        "uk": "/mɪks/",
        "zh": "vt. 混和、攪和、混合、調和；n. 混合體、混合原料、混合配料",
        "unit": 18,
        "example": "Mix the eggs and milk in a bowl.",
        "exampleZh": "把雞蛋和牛奶在碗裡攪拌均勻。"
    },
    {
        "id": 31060,
        "en": "model",
        "kk": "[ˋmɑdəl]",
        "uk": "/ˈmɒd(ə)l/",
        "zh": "n. 模特兒、模型、模式、型號；v. 模型、當模特兒、模特兒展示、做……的模型；adj. 模範的、榜樣的、模型的",
        "unit": 18,
        "example": "The boy built a small model plane.",
        "exampleZh": "那個男孩做了一架小飛機模型。"
    },
    {
        "id": 31061,
        "en": "modern",
        "kk": "[ˋmɑdɚn]",
        "uk": "/ˈmɒd(ə)n/",
        "zh": "adj. 現代的、近代的、當代風格的、現代派的；n. 現代人、現代派藝術家、主張現代風格的人、宣揚現代價值觀的人",
        "unit": 18,
        "example": "They live in a modern apartment building.",
        "exampleZh": "他們住在現代化的公寓大樓裡。"
    },
    {
        "id": 31062,
        "en": "moment",
        "kk": "[ˋmomənt]",
        "uk": "/ˈməʊmənt/",
        "zh": "n. 片刻、瞬間、某一時刻、現在",
        "unit": 18,
        "example": "It was a really scary moment.",
        "exampleZh": "這真是一個可怕的時刻。"
    },
    {
        "id": 31063,
        "en": "Monday",
        "kk": "[ˋmʌndi]",
        "uk": "/ˈmʌndeɪ; ˈmʌndi/",
        "zh": "n. 星期一、週一；adv. 在星期一、在週一",
        "unit": 18,
        "example": "She started work last Monday.",
        "exampleZh": "她上週一開始工作。"
    },
    {
        "id": 31064,
        "en": "money",
        "kk": "[ˋmʌni]",
        "uk": "/ˈmʌni/",
        "zh": "n. 錢、鈔票、貨幣、財產",
        "unit": 18,
        "example": "I do not have enough money today.",
        "exampleZh": "我今天沒有足夠的錢。"
    },
    {
        "id": 31065,
        "en": "monkey",
        "kk": "[ˋmʌŋki]",
        "uk": "/ˈmʌŋki/",
        "zh": "n. 猴子、頑皮兒童、淘氣鬼、受支配的人；v. 胡鬧、搗蛋、模仿、學……的樣子",
        "unit": 18,
        "example": "The brown monkey sat on the tree.",
        "exampleZh": "那隻棕色的猴子坐在樹上。"
    },
    {
        "id": 31066,
        "en": "monster",
        "kk": "[ˋmɑnstɚ]",
        "uk": "/ˈmɒnstə(r)/",
        "zh": "n. 妖怪、怪獸、怪物、殘忍的人；adj. 很受歡迎的、龐大的、巨大的；v. 嚴厲批評、斥責",
        "unit": 18,
        "example": "The scary monster hid in the dark.",
        "exampleZh": "可怕的怪獸躲在黑暗中。"
    },
    {
        "id": 31067,
        "en": "month",
        "kk": "[mʌnθ]",
        "uk": "/mʌnθ/",
        "zh": "n. 月份、月、一個月的時間、數月",
        "unit": 18,
        "example": "We're moving house next month.",
        "exampleZh": "我們下個月就要搬家了。"
    },
    {
        "id": 31068,
        "en": "moon",
        "kk": "[mun]",
        "uk": "/muːn/",
        "zh": "n. 月亮、月球、月光、衛星；v. 懶散度日、浪蕩、出神、呆視",
        "unit": 18,
        "example": "The moon shines bright in the night.",
        "exampleZh": "月亮在夜晚閃閃發光。"
    },
    {
        "id": 31069,
        "en": "more",
        "kk": "[mɔr]",
        "uk": "/mɔː(r)/",
        "zh": "det. 更多的、更大的、另外的、附加的；pron. 更多的、更大的、多了的部分；adv. 更、更強、更多、繼續；adj. 更多的、更大的、額外的",
        "unit": 18,
        "example": "Can I have some more water, please?",
        "exampleZh": "請問我可以再喝點水嗎？"
    },
    {
        "id": 31070,
        "en": "morning",
        "kk": "[ˋmɔrnɪŋ]",
        "uk": "/ˈmɔːnɪŋ/",
        "zh": "n. 早上、早晨、上午、黎明",
        "unit": 18,
        "example": "I drink warm milk every morning.",
        "exampleZh": "我每天早晨喝溫牛奶。"
    },
    {
        "id": 31071,
        "en": "mop",
        "kk": "[mɑp]",
        "uk": "/mɒp/",
        "zh": "n. 拖把、蓬亂濃密的頭髮、清掃、洗碗刷；vt. 用拖把拖、擦掉、抹掉、結束",
        "unit": 18,
        "example": "Use a clean mop on floor.",
        "exampleZh": "在地板上使用乾淨的拖把。"
    },
    {
        "id": 31072,
        "en": "mosquito",
        "kk": "[məˋskito]",
        "uk": "/məˈskiːtəʊ/",
        "zh": "n. 蚊子",
        "unit": 18,
        "example": "A hungry mosquito bit my left arm.",
        "exampleZh": "一隻飢餓的蚊子叮了我的左手臂。"
    },
    {
        "id": 31073,
        "en": "most",
        "kk": "[most]",
        "uk": "/məʊst/",
        "zh": "det. 最多、最大、大多數；pron. 最多、最大、大多數；adv. 最、最大、極其、非常；adj. 大多數的、最大程度的、最大數量的",
        "unit": 18,
        "example": "Most children like to eat sweet apples.",
        "exampleZh": "大多數小孩子喜歡吃甜蘋果。"
    },
    {
        "id": 31074,
        "en": "mother",
        "kk": "[ˋmʌðɚ]",
        "uk": "/ˈmʌðə(r)/",
        "zh": "n. 母親、大娘、女修道院院長；vt. 生下、養育、像母親般關懷或照管；adj. 母親的、出生地的",
        "unit": 18,
        "example": "My mother gives me a warm hug.",
        "exampleZh": "我母親給了我一個溫暖的擁抱。"
    },
    {
        "id": 31075,
        "en": "motion",
        "kk": "[ˋmoʃən]",
        "uk": "/ˈməʊʃn/",
        "zh": "n. 運動、移動、手勢、動作；vt. 打手勢、示意",
        "unit": 18,
        "example": "He made a quick hand motion to me.",
        "exampleZh": "他向我做了一個快速的手勢。"
    },
    {
        "id": 31076,
        "en": "motorcycle",
        "kk": "[ˋmotɚ͵saɪkəl]",
        "uk": "/ˈməʊtəsaɪk(ə)l/",
        "zh": "n. 摩托車；v. 騎摩托車",
        "unit": 18,
        "example": "My uncle rides a black motorcycle.",
        "exampleZh": "我叔叔騎一輛黑色機車。"
    },
    {
        "id": 31077,
        "en": "mountain",
        "kk": "[ˋmaʊntən]",
        "uk": "/ˈmaʊntən/",
        "zh": "n. 山、高山、許多、大量",
        "unit": 18,
        "example": "Snow fell on the high mountain top.",
        "exampleZh": "雪落在了高高的山頂上。"
    },
    {
        "id": 31078,
        "en": "mouse",
        "kk": "[maʊs]",
        "uk": "/maʊs/",
        "zh": "n. 老鼠、滑鼠、安靜害羞的人、淺棕灰色；v. 捕鼠、用滑鼠在計算機螢幕上移動游標",
        "unit": 18,
        "example": "He moves the cursor, clicks the mouse.",
        "exampleZh": "他移動遊標，點擊滑鼠。"
    },
    {
        "id": 31079,
        "en": "mouth",
        "kk": "[maʊθ]",
        "uk": "/maʊθ/",
        "zh": "n. 嘴、口腔、需要供養的人、食客；vt. 不出聲地說、用口型默示、言不由衷地說、信口開河；comb. 有……嘴的、……口的、言談……的、口齒……的",
        "unit": 18,
        "example": "Open your mouth and say ah.",
        "exampleZh": "張開嘴巴並說『啊』。"
    },
    {
        "id": 31080,
        "en": "move",
        "kk": "[muv]",
        "uk": "/muːv/",
        "zh": "v. 移動、改變位置、搬家、搬遷；n. 措施、行動、移動、活動",
        "unit": 18,
        "example": "We will move to a new town.",
        "exampleZh": "我們將搬到一個新城鎮。"
    },
    {
        "id": 31081,
        "en": "movement",
        "kk": "[ˋmuvmənt]",
        "uk": "/ˈmuːvmənt/",
        "zh": "n. 動作、移動、轉移、運動",
        "unit": 18,
        "example": "The quick movement caught my eye.",
        "exampleZh": "那個迅速的動作引起了我的注意。"
    },
    {
        "id": 31082,
        "en": "movie",
        "kk": "[ˋmuvi]",
        "uk": "/ˈmuːvi/",
        "zh": "n. 電影院、電影業、電影（總稱）",
        "unit": 18,
        "example": "That movie was really wack.",
        "exampleZh": "那部電影真的很古怪。"
    },
    {
        "id": 31083,
        "en": "Mr.",
        "kk": "[ˋmɪstɚ]",
        "uk": "/ˈmɪstə(r)/",
        "zh": "n. 先生",
        "unit": 18,
        "example": "Mr. Wang is a good man.",
        "exampleZh": "王先生是一位好人。"
    },
    {
        "id": 31084,
        "en": "MRT",
        "kk": "[ˋɛmˋɑrˋti]",
        "uk": "",
        "zh": "n. 捷運",
        "unit": 18,
        "example": "I got there by MRT.",
        "exampleZh": "我搭捷運去那兒。"
    },
    {
        "id": 31085,
        "en": "mud",
        "kk": "[mʌd]",
        "uk": "/mʌd/",
        "zh": "n. 泥濘、泥、淤泥、泥漿",
        "unit": 18,
        "example": "His old boots had some wet mud.",
        "exampleZh": "他的舊靴子沾了一些濕泥巴。"
    },
    {
        "id": 31086,
        "en": "mug",
        "kk": "[mʌɡ]",
        "uk": "/mʌɡ/",
        "zh": "n. 馬克杯、大杯、一大杯的容量、臉；vt. 行兇搶劫、打劫、扮鬼臉、扮怪相",
        "unit": 18,
        "example": "He filled the mug with hot coffee.",
        "exampleZh": "他把馬克杯裝滿了熱咖啡。"
    },
    {
        "id": 31087,
        "en": "museum",
        "kk": "[mjuˋziəm]",
        "uk": "/mjuˈziːəm/",
        "zh": "n. 博物館",
        "unit": 18,
        "example": "The museum is open Mon.-Sun.",
        "exampleZh": "這個博物館週一至週日開放。"
    },
    {
        "id": 31088,
        "en": "music",
        "kk": "[ˋmjuzɪk]",
        "uk": "/ˈmjuːzɪk/",
        "zh": "n. 音樂、樂曲、樂譜、悅耳的聲音",
        "unit": 18,
        "example": "They played some Cajun music.",
        "exampleZh": "他們演奏了一些卡真音樂。"
    },
    {
        "id": 31089,
        "en": "musician",
        "kk": "[mjuˋzɪʃən]",
        "uk": "/mjuˈzɪʃ(ə)n/",
        "zh": "n. 音樂家、樂師、作曲家",
        "unit": 18,
        "example": "The musician played the piano very well.",
        "exampleZh": "那位音樂家鋼琴彈得非常好。"
    },
    {
        "id": 31090,
        "en": "must",
        "kk": "[mʌst]",
        "uk": "/mʌst; məst/",
        "zh": "aux. 必須、一定、諒必、應該；v. 必須做的事；n. 不可少的事物、必不可少的事物、葡萄汁、潮氣",
        "unit": 18,
        "example": "You must finish your work on time.",
        "exampleZh": "你必須準時完成你的工作。"
    },
    {
        "id": 31091,
        "en": "nail",
        "kk": "[nel]",
        "uk": "/neɪl/",
        "zh": "n. 指甲、釘子、趾甲、上喙的硬甲殼；vt. 釘子、釘住、釘牢、抓住",
        "unit": 18,
        "example": "This nail won't come out.",
        "exampleZh": "這顆釘子拔不出來。"
    },
    {
        "id": 31092,
        "en": "name",
        "kk": "[nem]",
        "uk": "/neɪm/",
        "zh": "n. 名字、名稱、名聲、名譽；vt. 命名、給……取名、說出……的名稱、叫出……的名字；adj. 有名的、出名的、姓名的、據以取名的",
        "unit": 18,
        "example": "Please write your name on the paper.",
        "exampleZh": "請把你的名字寫在紙上。"
    },
    {
        "id": 31093,
        "en": "napkin",
        "kk": "[ˋnæpkɪn]",
        "uk": "/ˈnæpkɪn/",
        "zh": "n. 餐巾、餐巾紙、尿布、衛生巾",
        "unit": 18,
        "example": "Wipe your hands with a clean napkin.",
        "exampleZh": "用乾淨的餐巾紙擦擦手。"
    },
    {
        "id": 31094,
        "en": "narrow",
        "kk": "[ˋnɛro]",
        "uk": "/ˈnærəʊ/",
        "zh": "adj. 狹窄的、狹小的、狹隘的、勉強的；v. 眯起來、使縮小、壓縮、使變窄；n. 海峽、狹窄部分",
        "unit": 18,
        "example": "He turned into a narrow street.",
        "exampleZh": "他拐進一條狹窄的街道。"
    },
    {
        "id": 31095,
        "en": "nation",
        "kk": "[ˋneʃən]",
        "uk": "/ˈneɪʃ(ə)n/",
        "zh": "n. 國家、民族、國民、部落",
        "unit": 18,
        "example": "People of our nation love peace.",
        "exampleZh": "我們國家的國民熱愛和平。"
    },
    {
        "id": 31096,
        "en": "national",
        "kk": "[ˋnæʃənəl]",
        "uk": "/ˈnæʃ(ə)nəl/",
        "zh": "adj. 國家的、全國的、國家所有的、國立的；n. 國民、僑民、全國性比賽、全國性報紙",
        "unit": 18,
        "example": "Football is our most popular national sport.",
        "exampleZh": "足球是我們最受歡迎的全國性運動。"
    },
    {
        "id": 31097,
        "en": "natural",
        "kk": "[ˋnætʃɚəl]",
        "uk": "/ˈnætʃ(ə)rəl/",
        "zh": "adj. 自然的、天然的、非人為的、合理的；n. 有天賦的人、適合人選、本位音、白鍵",
        "unit": 18,
        "example": "This juice is made of natural fresh fruit.",
        "exampleZh": "這杯果汁是由天然新鮮水果製成的。"
    },
    {
        "id": 31098,
        "en": "nature",
        "kk": "[ˋnetʃɚ]",
        "uk": "/ˈneɪtʃə(r)/",
        "zh": "n. 自然、大自然、自然界、性格",
        "unit": 18,
        "example": "She loves to enjoy the beauty of nature.",
        "exampleZh": "她熱愛欣賞大自然的美麗。"
    },
    {
        "id": 31099,
        "en": "naughty",
        "kk": "[ˋnɔti]",
        "uk": "/ˈnɔːti/",
        "zh": "adj. 頑皮的、淘氣的、不妥當的、沒規矩的",
        "unit": 18,
        "example": "Girls, you're being very naughty.",
        "exampleZh": "姑娘們，你們太調皮了。"
    },
    {
        "id": 31100,
        "en": "near",
        "kk": "[nɪr]",
        "uk": "/nɪə(r)/",
        "zh": "adv. 距離不遠、在附近、不久、很快；prep. 靠近、在......附近、接近、與......相似；adj. 接近的、近、在附近、差不多的；v. 接近、靠近",
        "unit": 18,
        "example": "His stables are near Oxford.",
        "exampleZh": "他的馬厩在牛津附近。"
    },
    {
        "id": 31101,
        "en": "nearly",
        "kk": "[ˋnɪrli]",
        "uk": "/ˈnɪəli/",
        "zh": "adv. 幾乎、差不多、密切地、親密地",
        "unit": 18,
        "example": "The beach was nearly empty.",
        "exampleZh": "海灘幾乎空無一人。"
    },
    {
        "id": 31102,
        "en": "necessary",
        "kk": "[ˋnɛsə͵sɛri]",
        "uk": "/ˈnesəsəri/",
        "zh": "adj. 必要的、必需的、必然的、不可避免的；n. 必需品、必要的事、足夠的錢",
        "unit": 18,
        "example": "Water is necessary for all living things.",
        "exampleZh": "水對所有生物來說都是必需的。"
    },
    {
        "id": 31103,
        "en": "neck",
        "kk": "[nɛk]",
        "uk": "/nek/",
        "zh": "n. 脖子、頸項、衣領、領口；v. 摟著脖子親吻、相擁互吻、一口喝下、變狹",
        "unit": 18,
        "example": "Her arms crept around his neck.",
        "exampleZh": "她的手臂爬上他的脖子。"
    },
    {
        "id": 31104,
        "en": "necklace",
        "kk": "[ˋnɛkləs]",
        "uk": "/ˈnekləs/",
        "zh": "n. 項鍊、火項鍊；v. 用火項鍊處決",
        "unit": 18,
        "example": "When did you first miss the necklace?",
        "exampleZh": "你最早發覺項鍊不見了是什麼時候？"
    },
    {
        "id": 31105,
        "en": "need",
        "kk": "[nid]",
        "uk": "/niːd/",
        "zh": "vt. 需要、有必要；aux. 必要；n. 需求、需要、必須、特別需要",
        "unit": 18,
        "example": "I need a glass of cold water.",
        "exampleZh": "我需要一杯冷水。"
    },
    {
        "id": 31106,
        "en": "needle",
        "kk": "[ˋnidəl]",
        "uk": "/ˈniːd(ə)l/",
        "zh": "n. 縫衣針、編織針、注射針、刺針；v. 刺激、不斷地數落、用針穿刺、像針一樣地刺",
        "unit": 18,
        "example": "She lost a sharp needle on the floor.",
        "exampleZh": "她把一根鋒利的針掉在地板上了。"
    },
    {
        "id": 31107,
        "en": "negative",
        "kk": "[ˋnɛɡətɪv]",
        "uk": "/ˈneɡətɪv/",
        "zh": "adj. 有害的、負面的、悲觀的、消極的；n. 底片、負片、否定詞、否定句；v. 拒絕、否定、推翻、證偽",
        "unit": 18,
        "example": "Try to avoid such negative ideas.",
        "exampleZh": "盡量避免這種負面的想法。"
    },
    {
        "id": 31108,
        "en": "neighbor",
        "kk": "[ˋnebɚ]",
        "uk": "/ˈneɪbə(r)/",
        "zh": "adj. 鄰近的、相鄰的；v. 鄰接、住在附近、毗鄰而居、與……友好相處；n. 鄰居、鄰人、鄰舍、鄰國等鄰近的人或物",
        "unit": 18,
        "example": "My neighbor is a doctor.",
        "exampleZh": "我的鄰居是個醫生。"
    },
    {
        "id": 31109,
        "en": "neither",
        "kk": "[ˋniðɚ]",
        "uk": "/ˈnaɪðə(r)/",
        "zh": "det. 兩者都不；pron. 無一個；conj. 也不、既不……；adv. 也不、既不……也不……；adj. 兩者都不的",
        "unit": 18,
        "example": "Neither of my parents likes hot tea.",
        "exampleZh": "我的父母雙方都不喜歡熱茶。"
    },
    {
        "id": 31110,
        "en": "nephew",
        "kk": "[ˋnɛfju]",
        "uk": "/ˈnefjuː/",
        "zh": "n. 姪子、外甥、侄子",
        "unit": 18,
        "example": "My nephew likes to play with dogs.",
        "exampleZh": "我的姪子喜歡和狗狗玩耍。"
    },
    {
        "id": 31111,
        "en": "nervous",
        "kk": "[ˋnɝvəs]",
        "uk": "/ˈnɜːvəs/",
        "zh": "adj. 緊張的、神經緊張的、擔憂的、神經質的",
        "unit": 18,
        "example": "He's not the nervous type.",
        "exampleZh": "他不是那種好緊張的人。"
    },
    {
        "id": 31112,
        "en": "nest",
        "kk": "[nɛst]",
        "uk": "/nest/",
        "zh": "n. 窩、巢、穴、舒適的居所；vi. 築巢、做窩、逐個套疊、巢狀",
        "unit": 18,
        "example": "The bird built a nest in the tree.",
        "exampleZh": "鳥兒在樹上築了一個窩。"
    },
    {
        "id": 31113,
        "en": "never",
        "kk": "[ˋnɛvɚ]",
        "uk": "/ˈnevə(r)/",
        "zh": "adv. 從未、決不、永不、不會",
        "unit": 18,
        "example": "I never drink cold milk at night.",
        "exampleZh": "我晚上從不喝冰牛奶。"
    },
    {
        "id": 31114,
        "en": "new",
        "kk": "[nu]",
        "uk": "/njuː/",
        "zh": "adj. 新的、新出現的、新興的、新買的；adv. 新的、新近的；n. 新東西、新事物",
        "unit": 18,
        "example": "I got a new bike for my birthday.",
        "exampleZh": "我生日時得到了一輛新腳踏車。"
    },
    {
        "id": 31115,
        "en": "news",
        "kk": "[nuz]",
        "uk": "/njuːz/",
        "zh": "n. 新聞、消息、訊息、新情況",
        "unit": 18,
        "example": "We heard some good news today.",
        "exampleZh": "我們今天聽到了一些好消息。"
    },
    {
        "id": 31116,
        "en": "newspaper",
        "kk": "[ˋnuz͵pepɚ]",
        "uk": "/ˈnjuːzpeɪpə(r)/",
        "zh": "n. 報紙、報、報社、舊報紙",
        "unit": 18,
        "example": "May I borrow your newspaper?",
        "exampleZh": "可以藉你的報紙嗎？"
    },
    {
        "id": 31117,
        "en": "next",
        "kk": "[nɛkst]",
        "uk": "/nekst/",
        "zh": "adj. 下一個、下一個的、接下來的、緊接著來到的；adv. 緊接著、隨後、僅次於；n. 下一個人或事件；det. 下一；pron. 下一個",
        "unit": 18,
        "example": "Our next English class is on Monday.",
        "exampleZh": "我們的下一堂英文課在星期一。"
    },
    {
        "id": 31118,
        "en": "nice",
        "kk": "[naɪs]",
        "uk": "/naɪs/",
        "zh": "adj. 友善的、美好的、令人愉快的、好心的",
        "unit": 18,
        "example": "It's been nice meeting you.",
        "exampleZh": "很高興見到你。"
    },
    {
        "id": 31119,
        "en": "niece",
        "kk": "[nis]",
        "uk": "/niːs/",
        "zh": "n. 姪女、甥女、外甥女、侄女",
        "unit": 18,
        "example": "She bought a new doll for her niece.",
        "exampleZh": "她為她的姪女買了一個新洋娃娃。"
    },
    {
        "id": 31120,
        "en": "night",
        "kk": "[naɪt]",
        "uk": "/naɪt/",
        "zh": "n. 夜晚、夜間、晚上、傍晚；adj. 夜晚的、夜晚使用的、夜間進行的、夜晚活動的；int. 晚安",
        "unit": 18,
        "example": "I couldn't sleep last night.",
        "exampleZh": "我昨晚無法入睡。"
    },
    {
        "id": 31121,
        "en": "nine",
        "kk": "[naɪn]",
        "uk": "/naɪn/",
        "zh": "n. 九、九個；num. 九、九個；adj. 九的、九個的",
        "unit": 18,
        "example": "She goes to bed at nine o'clock.",
        "exampleZh": "她在九點上床睡覺。"
    },
    {
        "id": 31122,
        "en": "nineteen",
        "kk": "[ˋnaɪnˋtin]",
        "uk": "/ˌnaɪnˈtiːn/",
        "zh": "num. 十九；n. 十九、十九個、十九歲、十九號",
        "unit": 18,
        "example": "They have nineteen days to make up their minds.",
        "exampleZh": "他們有十九天的時間來做決定。"
    },
    {
        "id": 31123,
        "en": "ninety",
        "kk": "[ˋnaɪnti]",
        "uk": "/ˈnaɪnti/",
        "zh": "num. 九十；adj. 九十的、九十歲的；n. 九十、複數nineties：九十幾、thenineties：（二十世紀）九十年代",
        "unit": 18,
        "example": "Her weight was under ninety pounds.",
        "exampleZh": "她的體重不到九十磅。"
    },
    {
        "id": 31124,
        "en": "no",
        "kk": "[no]",
        "uk": "/nəʊ/",
        "zh": "adv. 不、完全不；int. 不、沒有、不行、不對；adj. 沒有、不是；det. 沒有、無、不準、禁止；n. （投票表決中的）反對、否決",
        "unit": 18,
        "example": "She had no money coming in and no funds.",
        "exampleZh": "她沒有錢進來，也沒有資金。"
    },
    {
        "id": 31125,
        "en": "nod",
        "kk": "[nɑd]",
        "uk": "/nɒd/",
        "zh": "v. 打盹、打瞌睡、上下晃動、頂；n. 點頭、點頭同意、被選中、得到許可",
        "unit": 18,
        "example": "Don't let yon dog nod off.",
        "exampleZh": "不要讓那條狗打盹。"
    },
    {
        "id": 31126,
        "en": "noise",
        "kk": "[nɔɪz]",
        "uk": "/nɔɪz/",
        "zh": "n. 噪音、嘈雜聲、聲音、響聲；v. 議論、傳開、喧鬧",
        "unit": 18,
        "example": "The loud noise woke the baby up.",
        "exampleZh": "巨大的噪音吵醒了小寶寶。"
    },
    {
        "id": 31127,
        "en": "noisy",
        "kk": "[ˋnɔɪzi]",
        "uk": "/ˈnɔɪzi/",
        "zh": "adj. 吵雜的、嗓門大的、聒噪的、嘈雜的",
        "unit": 18,
        "example": "The street is very noisy at night.",
        "exampleZh": "這條街晚上非常嘈雜。"
    },
    {
        "id": 31128,
        "en": "none",
        "kk": "[nʌn]",
        "uk": "/nʌn/",
        "zh": "pron. 沒有人、全無；adv. 毫無、絕不；n. 申初經",
        "unit": 18,
        "example": "None of them could sing in tune.",
        "exampleZh": "他們誰都唱不準。"
    },
    {
        "id": 31129,
        "en": "noodle",
        "kk": "[ˋnudəl]",
        "uk": "/ˈnuːd(ə)l/",
        "zh": "n. 麵條、笨蛋、蠢人、人頭；v. 撥弄樂器、思考、醞釀、搜尋",
        "unit": 18,
        "example": "I like to eat hot beef noodle soup.",
        "exampleZh": "我喜歡吃熱呼呼的牛肉麵湯。"
    },
    {
        "id": 31130,
        "en": "noon",
        "kk": "[nun]",
        "uk": "/nuːn/",
        "zh": "n. 中午、正午、全盛期",
        "unit": 18,
        "example": "The sun is hot at high noon.",
        "exampleZh": "正午時分的太陽很熱。"
    },
    {
        "id": 31131,
        "en": "nor",
        "kk": "[nɔr]",
        "uk": "/nɔː(r)/",
        "zh": "conj. 也不；adv. 也不；n. “或非”",
        "unit": 18,
        "example": "He eats neither fish nor meat.",
        "exampleZh": "他既不吃魚也不吃肉。"
    },
    {
        "id": 31132,
        "en": "north",
        "kk": "[nɔrθ]",
        "uk": "/nɔːθ/",
        "zh": "n. 北方、北、北部、北方發達國家；adj. 北部的、北方的、朝北的、北方吹來的；adv. 向北、朝北、大於",
        "unit": 18,
        "example": "Cold winds blow from the north.",
        "exampleZh": "寒風從北方吹來。"
    },
    {
        "id": 31133,
        "en": "nose",
        "kk": "[noz]",
        "uk": "/nəʊz/",
        "zh": "n. 鼻子、頭部、機首、嗅覺；vt. 緩慢地前行、拱、嗅、勉強領先",
        "unit": 18,
        "example": "She wiped her cold nose with paper.",
        "exampleZh": "她用紙巾擦了擦冰冷的鼻子。"
    },
    {
        "id": 31134,
        "en": "not",
        "kk": "[nɑt]",
        "uk": "/nɒt/",
        "zh": "adv. 不是、表示否定、不；n. “非”",
        "unit": 18,
        "example": "It's not over yet—not by a long chalk.",
        "exampleZh": "事情還沒結束——還遠遠沒有結束。"
    },
    {
        "id": 31135,
        "en": "note",
        "kk": "[not]",
        "uk": "/nəʊt/",
        "zh": "n. 筆記、便條、記錄、音符；vt. 注意、留意、記錄、指出",
        "unit": 18,
        "example": "He wrote a short note to me.",
        "exampleZh": "他寫了一張簡短的便條給我。"
    },
    {
        "id": 31136,
        "en": "notebook",
        "kk": "[ˋnot͵bʊk]",
        "uk": "/ˈnəʊtbʊk/",
        "zh": "n. 筆記本、膝上型電腦",
        "unit": 18,
        "example": "Write your name in the blue notebook.",
        "exampleZh": "把你的名字寫在藍色筆記本上。"
    },
    {
        "id": 31137,
        "en": "nothing",
        "kk": "[ˋnʌθɪŋ]",
        "uk": "/ˈnʌθɪŋ/",
        "zh": "pron. 沒有什麼、沒有一件東西、無關緊要的事、無足輕重的人；adv. 並不、毫不、用於強烈地表示相反看法根本不是；n. 無關緊要的事、無足輕重的人、空地、虛空；adj. 沒前途的、沒價值",
        "unit": 18,
        "example": "There is nothing in the black box.",
        "exampleZh": "黑色盒子裡什麼都沒有。"
    },
    {
        "id": 31138,
        "en": "notice",
        "kk": "[ˋnotəs]",
        "uk": "/ˈnəʊtɪs/",
        "zh": "n. 通知、注意、察覺、通告；vt. 注意到、意識、注意、留意",
        "unit": 18,
        "example": "Did you notice the new red car?",
        "exampleZh": "你有注意到那輛新的紅車嗎？"
    },
    {
        "id": 31139,
        "en": "novel",
        "kk": "[ˋnɑvəl]",
        "uk": "/ˈnɒv(ə)l/",
        "zh": "n. 小說；adj. 新穎的、珍奇的",
        "unit": 18,
        "example": "Have you read her new novel?",
        "exampleZh": "你看過她新出的小說了嗎？"
    },
    {
        "id": 31140,
        "en": "November",
        "kk": "[noˋvɛmbɚ]",
        "uk": "/nəʊˈvembə(r)/",
        "zh": "n. 十一月、代表字母N的程式碼詞",
        "unit": 18,
        "example": "She left back in November.",
        "exampleZh": "她十一月就離開了。"
    },
    {
        "id": 31141,
        "en": "now",
        "kk": "[naʊ]",
        "uk": "/naʊ/",
        "zh": "adv. 現在、此刻、馬上、立刻；adj. 現在的、流行的、時髦的；n. 現在、此刻；conj. 由於、既然",
        "unit": 18,
        "example": "We must leave for school right now.",
        "exampleZh": "我們現在必須出發去學校了。"
    },
    {
        "id": 31142,
        "en": "number",
        "kk": "[ˋnʌmbɚ]",
        "uk": "/ˈnʌmbə(r)/",
        "zh": "n. 數字、編號、序數、電話號碼；vt. 標號、編號、總計、包括",
        "unit": 18,
        "example": "My phone number is 266998.",
        "exampleZh": "我的電話號碼是266998。"
    },
    {
        "id": 31143,
        "en": "nurse",
        "kk": "[nɝs]",
        "uk": "/nɜːs/",
        "zh": "n. 護士、保姆、奶媽、保育蟲；vt. 看護、照料、細心打理、調養",
        "unit": 18,
        "example": "The kind nurse helped the sick boy.",
        "exampleZh": "親切的護士幫助了生病的男孩。"
    },
    {
        "id": 31144,
        "en": "nut",
        "kk": "[nʌt]",
        "uk": "/nʌt/",
        "zh": "n. 堅果、螺母、螺帽、瘋子；v. 用頭撞、採堅果、採乾果",
        "unit": 18,
        "example": "Plant fruit and nut trees.",
        "exampleZh": "種植水果和堅果樹木。"
    },
    {
        "id": 31145,
        "en": "obey",
        "kk": "[oˋbe]",
        "uk": "/əˈbeɪ/",
        "zh": "vt. 聽從、遵守、服從、順……的意",
        "unit": 18,
        "example": "It was his duty to obey.",
        "exampleZh": "服從是他的職責。"
    },
    {
        "id": 31146,
        "en": "object",
        "kk": "[ˋɑbdʒɛkt]",
        "uk": "/ˈɒbdʒɪkt; ˈɒbdʒekt; əbˈdʒekt/",
        "zh": "n. 物體、實物、目的、目標；vt. 反對、反對說、反對的理由是",
        "unit": 18,
        "example": "There is a small object on the desk.",
        "exampleZh": "書桌上有一個小物件。"
    },
    {
        "id": 31147,
        "en": "ocean",
        "kk": "[ˋoʃən]",
        "uk": "/ˈəʊʃ(ə)n/",
        "zh": "n. 海洋、大海、洋、許多",
        "unit": 18,
        "example": "Huge ships sail across the blue ocean.",
        "exampleZh": "巨大的輪船航行在蔚藍的海洋上。"
    },
    {
        "id": 31148,
        "en": "o'clock",
        "kk": "[əkˋlɑk]",
        "uk": "/əˈklɒk/",
        "zh": "adv. ……點鐘、整點、……點鐘方向",
        "unit": 18,
        "example": "The clock said three o'clock.",
        "exampleZh": "時鐘指向三點鐘。"
    },
    {
        "id": 31149,
        "en": "October",
        "kk": "[ɑkˋtobɚ]",
        "uk": "/ɒkˈtəʊbə(r)/",
        "zh": "n. 十月、[天]十月",
        "unit": 18,
        "example": "Leaves turn red and gold in October.",
        "exampleZh": "樹葉在十月變成紅色和金色。"
    },
    {
        "id": 31150,
        "en": "of",
        "kk": "[ʌv]",
        "uk": "/ɒv; əv/",
        "zh": "prep. ……的、屬於、……的一部分、表示計量",
        "unit": 18,
        "example": "This is a photo of my family.",
        "exampleZh": "這是一張我全家人的照片。"
    },
    {
        "id": 31151,
        "en": "off",
        "kk": "[ɔf]",
        "uk": "/ɒf/",
        "zh": "adv. 離開、關閉、中斷、休假；prep. 從……離開、脫離、下（車）；adj. 關閉的、不新鮮的、取消的",
        "unit": 18,
        "example": "Please turn off the light right now.",
        "exampleZh": "請現在立刻把燈關掉。"
    },
    {
        "id": 31152,
        "en": "offer",
        "kk": "[ˋɔfɚ]",
        "uk": "/ˈɒfə(r)/",
        "zh": "vt. 提供、給予、提議、表示願意；n. 提議、主動提議、提供、出價",
        "unit": 18,
        "example": "They offer free tea to all guests.",
        "exampleZh": "他們向所有客人提供免費茶水。"
    },
    {
        "id": 31153,
        "en": "office",
        "kk": "[ˋɔfɪs]",
        "uk": "/ˈɒfɪs/",
        "zh": "n. 辦公室、辦公樓、辦事處、室",
        "unit": 18,
        "example": "My father works in a busy office.",
        "exampleZh": "我父親在一間繁忙的辦公室上班。"
    },
    {
        "id": 31154,
        "en": "officer",
        "kk": "[ˋɔfəsɚ]",
        "uk": "/ˈɒfɪsə(r)/",
        "zh": "n. 警官、官員、軍官、高階職員；v. 配備軍官、指揮",
        "unit": 18,
        "example": "The police officer saw the red car.",
        "exampleZh": "警察看見了那輛紅色的車。"
    },
    {
        "id": 31155,
        "en": "often",
        "kk": "[ˋɔfən]",
        "uk": "/ˈɒf(ə)n/",
        "zh": "adv. 經常、常常、時常、在許多情況下",
        "unit": 18,
        "example": "We often play football after school together.",
        "exampleZh": "我們放學後經常一起踢足球。"
    },
    {
        "id": 31156,
        "en": "oil",
        "kk": "[ɔɪl]",
        "uk": "/ɔɪl/",
        "zh": "n. 石油、燃油、潤滑油、原油；vt. 加油於……、給……加潤滑油、給（皮膚）塗油、抹油",
        "unit": 18,
        "example": "Put a little oil into the pan.",
        "exampleZh": "往平底鍋裡倒入少許油。"
    },
    {
        "id": 31157,
        "en": "okay",
        "kk": "[͵oˋke]",
        "uk": "/əʊˈkeɪ/",
        "zh": "int. 好、行；adj. 可以、不錯的、對、安全的；adv. 可以、不錯、對、很好地；n. 同意、批准；vt. 批准、同意、認可",
        "unit": 18,
        "example": "Are you okay after the fall?",
        "exampleZh": "跌倒後你還好嗎？"
    },
    {
        "id": 31158,
        "en": "old",
        "kk": "[old]",
        "uk": "/əʊld/",
        "zh": "adj. 老的、舊的、……歲的、古老的",
        "unit": 18,
        "example": "My grandfather is eighty years old.",
        "exampleZh": "我的祖父八十歲了。"
    },
    {
        "id": 31159,
        "en": "omit",
        "kk": "[oˋmɪt]",
        "uk": "/əˈmɪt/",
        "zh": "vt. 省略、省去、遺漏、不做",
        "unit": 18,
        "example": "You may omit this step if needed.",
        "exampleZh": "如果有需要，你可以省略這個步驟。"
    },
    {
        "id": 31160,
        "en": "on",
        "kk": "[ɑn]",
        "uk": "/ɒn/",
        "zh": "prep. 在……上面、關於、在（某一天）；adv. 在上面、繼續、開著、穿著",
        "unit": 18,
        "example": "The book is on the study desk.",
        "exampleZh": "書本在書桌上面。"
    },
    {
        "id": 31161,
        "en": "once",
        "kk": "[wʌns]",
        "uk": "/wʌns/",
        "zh": "adv. 一次、一回、曾經、一度；conj. 一.....就、一旦；n. 一次",
        "unit": 18,
        "example": "I see my uncle once a week.",
        "exampleZh": "我每週見我叔叔一次。"
    },
    {
        "id": 31162,
        "en": "one",
        "kk": "[wʌn]",
        "uk": "/wʌn/",
        "zh": "num. 一、一個、一歲、一點鐘；pron. 一個、一個人、任何人、人們；det. 一個、某個；adj. 唯一的、一的；n. 一、一美元紙幣",
        "unit": 18,
        "example": "One minus one is zero.",
        "exampleZh": "一減一為零。"
    },
    {
        "id": 31163,
        "en": "onion",
        "kk": "[ˋʌnjən]",
        "uk": "/ˈʌnjən/",
        "zh": "n. 洋蔥、洋蔥頭",
        "unit": 18,
        "example": "I sliced up an onion.",
        "exampleZh": "我把洋蔥切成了片。"
    },
    {
        "id": 31164,
        "en": "only",
        "kk": "[ˋonli]",
        "uk": "/ˈəʊnli/",
        "zh": "adv. 只有、只、僅在……情況下、只是；adj. 唯一的、僅有的、最好的、最適合的；conj. 不過、但是、要不是、若非",
        "unit": 18,
        "example": "I only have five dollars with me.",
        "exampleZh": "我身上只有五塊錢。"
    },
    {
        "id": 31165,
        "en": "open",
        "kk": "[ˋopən]",
        "uk": "/ˈəʊpən/",
        "zh": "adj. 開著的、開放的、公開的；v. 打開、開啟、營業；n. 戶外、公開",
        "unit": 18,
        "example": "Please open the window for fresh air.",
        "exampleZh": "請打開窗戶通風換氣。"
    },
    {
        "id": 31166,
        "en": "operate",
        "kk": "[ˋɑpɚ͵et]",
        "uk": "/ˈɒpəreɪt/",
        "zh": "v. 操作、操縱、運轉、執行",
        "unit": 18,
        "example": "He learned how to operate the machine.",
        "exampleZh": "他學會了如何操作那台機器。"
    },
    {
        "id": 31167,
        "en": "opinion",
        "kk": "[əˋpɪnjən]",
        "uk": "/əˈpɪnjən/",
        "zh": "n. 意見、看法、觀點、信仰",
        "unit": 18,
        "example": "We'll need an expert opinion.",
        "exampleZh": "我們將需要專家的意見。"
    },
    {
        "id": 31168,
        "en": "or",
        "kk": "[ɔr]",
        "uk": "/ɔː(r)/",
        "zh": "conj. 或者、或、還是、也不；n. （邏輯電路的）或、金色、黃色；abbr. 俄勒岡州、手術室、運籌學、普通士兵",
        "unit": 18,
        "example": "Do you want hot tea or water?",
        "exampleZh": "你想要喝熱茶還是水？"
    },
    {
        "id": 31169,
        "en": "orange",
        "kk": "[ˋɔrəndʒ]",
        "uk": "/ˈɒrɪndʒ/",
        "zh": "n. 柳橙、橘子、橙色；adj. 橙色的、橘黃色的",
        "unit": 18,
        "example": "She peeled an orange for her son.",
        "exampleZh": "她為兒子剝了一顆柳橙。"
    },
    {
        "id": 31170,
        "en": "order",
        "kk": "[ˋɔrdɚ]",
        "uk": "/ˈɔːdə(r)/",
        "zh": "n. 順序、次序、條理、秩序；vt. 命令、指示、訂購、訂貨",
        "unit": 18,
        "example": "She barked out an order.",
        "exampleZh": "她大聲下達命令。"
    },
    {
        "id": 31171,
        "en": "ordinary",
        "kk": "[ˋɔrdə͵nɛri]",
        "uk": "/ˈɔːd(ə)n(ə)ri/",
        "zh": "adj. 普通的、平常的、平淡無奇的、平庸的；n. 常見的人（或事物）、常任法官、管區長、教區長",
        "unit": 18,
        "example": "The meal was very ordinary.",
        "exampleZh": "這頓飯很普通。"
    },
    {
        "id": 31172,
        "en": "organ",
        "kk": "[ˋɔrɡən]",
        "uk": "/ˈɔːɡən/",
        "zh": "n. 器官、陰莖、陽物、風琴",
        "unit": 18,
        "example": "The heart is a vital body organ.",
        "exampleZh": "心臟是維持生命的重要人體器官。"
    },
    {
        "id": 31173,
        "en": "organization",
        "kk": "[͵ɔrɡənəˋzeʃən]",
        "uk": "/ˌɔːɡənaɪˈzeɪʃn/",
        "zh": "n. 機構、組織、組織工作、籌備工作",
        "unit": 18,
        "example": "He set up a local youth organization.",
        "exampleZh": "他創立了一個當地的青年組織。"
    },
    {
        "id": 31174,
        "en": "other",
        "kk": "[ˋʌðɚ]",
        "uk": "/ˈʌðə(r)/",
        "zh": "adj. 其他的、別的、另外的、另一的；pron. 另一個、另外、其餘的人（或事物）、其他；v. 將……看作異類、以異類對待",
        "unit": 18,
        "example": "Do you have any other questions?",
        "exampleZh": "你還有其他問題嗎？"
    },
    {
        "id": 31175,
        "en": "out",
        "kk": "[aʊt]",
        "uk": "/aʊt/",
        "zh": "adv. 出現、向外、在室外；prep. 出去、從……裡面出去、離開；adj. 熄滅的、盛開的、面市的、出局的；vt. 擊倒、擊暈、揭露（某人）是同性戀、熄滅；n. 出路、脫身辦法、使球員出局的辦法、在野黨",
        "unit": 18,
        "example": "The young boy ran out of the room.",
        "exampleZh": "小男孩跑出了房間。"
    },
    {
        "id": 31176,
        "en": "outside",
        "kk": "[ˋaʊtˋsaɪd]",
        "uk": "/ˌaʊtˈsaɪd/",
        "zh": "n. 外表、外部、周圍、外圍；prep. 戶外、在……的外面、在戶外、超出……的範圍；adv. 外面、在外面、在戶外、在四周；adj. 外邊的、表面的、邊鋒的、外圍的",
        "unit": 18,
        "example": "It is very cold outside today.",
        "exampleZh": "今天外面非常冷。"
    },
    {
        "id": 31177,
        "en": "oven",
        "kk": "[ˋʌvən]",
        "uk": "/ˈʌv(ə)n/",
        "zh": "n. 烤箱、烤爐、小熔爐、小窯",
        "unit": 18,
        "example": "Bake the fresh bread in the hot oven.",
        "exampleZh": "把新鮮麵包放進熱烤箱裡烘烤。"
    },
    {
        "id": 31178,
        "en": "over",
        "kk": "[ˋovɚ]",
        "uk": "/ˈəʊvə(r)/",
        "zh": "adv. 結束、向下、倒下、翻過；prep. 在……上方、蓋在……上面、懸在……上面、從一邊到另一邊；n. 一輪投球；adj. 結束的、剩下的；v. 越過",
        "unit": 18,
        "example": "The brown dog jumped over the gate.",
        "exampleZh": "那隻棕色的狗跳過了柵門。"
    },
    {
        "id": 31179,
        "en": "overseas",
        "kk": "[ˋovɚˋsiz]",
        "uk": "/ˌəʊvəˈsiːz/",
        "zh": "adj. 外國的、海外的；adv. 在國外、在海外",
        "unit": 18,
        "example": "My brother went overseas to study art.",
        "exampleZh": "我哥哥去海外研讀藝術。"
    },
    {
        "id": 31180,
        "en": "own",
        "kk": "[on]",
        "uk": "/əʊn/",
        "zh": "adj. 自己的、屬於自己的；vt. 擁有、有、承認；pron. 自己的事物",
        "unit": 18,
        "example": "They own a small shop near school.",
        "exampleZh": "他們在學校附近擁有一家小店。"
    },
    {
        "id": 31181,
        "en": "owner",
        "kk": "[ˋonɚ]",
        "uk": "/ˈəʊnə(r)/",
        "zh": "n. 物主、所有人",
        "unit": 18,
        "example": "The dog ran to its owner at once.",
        "exampleZh": "那隻狗立刻跑向牠的主人。"
    },
    {
        "id": 31182,
        "en": "ox",
        "kk": "[ɑks]",
        "uk": "/ɒks/",
        "zh": "n. 公牛、去勢公牛、閹牛、牛",
        "unit": 18,
        "example": "Seven sheep and eight ox.",
        "exampleZh": "七隻羊，八頭牛。"
    },
    {
        "id": 31183,
        "en": "pack",
        "kk": "[pæk]",
        "uk": "/pæk/",
        "zh": "vt. 打包、收拾、包裝、裝箱；n. 包裝、包、包裹、捆",
        "unit": 18,
        "example": "Help me pack my bag for the trip.",
        "exampleZh": "幫我打包旅行要用的包包。"
    },
    {
        "id": 31184,
        "en": "package",
        "kk": "[ˋpækədʒ]",
        "uk": "/ˈpækɪdʒ/",
        "zh": "n. 包裹、盒、包、一套；vt. 把……打包、把……裝箱、包裝、配套銷售",
        "unit": 18,
        "example": "I tore the package open.",
        "exampleZh": "我把包裹撕開。"
    },
    {
        "id": 31185,
        "en": "page",
        "kk": "[pedʒ]",
        "uk": "/peɪdʒ/",
        "zh": "n. 頁、面、網頁、歷史重要事件；vt. 用擴音器呼叫、用尋呼機呼叫、隨意翻閱、瀏覽",
        "unit": 18,
        "example": "I ran my eyes over the page.",
        "exampleZh": "我的目光掃過這一頁。"
    },
    {
        "id": 31186,
        "en": "pain",
        "kk": "[pen]",
        "uk": "/peɪn/",
        "zh": "n. 痛苦、疼痛、傷痛、苦惱；vt. 使痛苦、使苦惱、使疼痛、感到疼痛",
        "unit": 18,
        "example": "He felt a sharp pain in his back.",
        "exampleZh": "他感到背部有一陣劇烈的疼痛。"
    },
    {
        "id": 31187,
        "en": "painful",
        "kk": "[ˋpenfəl]",
        "uk": "/ˈpeɪnf(ə)l/",
        "zh": "adj. 痛苦的、疼痛的、引起疼痛的、令人痛苦（難受）的",
        "unit": 18,
        "example": "Walking on my broken foot was painful.",
        "exampleZh": "用受傷的腳走路非常痛苦。"
    },
    {
        "id": 31188,
        "en": "paint",
        "kk": "[pent]",
        "uk": "/peɪnt/",
        "zh": "n. 油漆、塗料、繪畫顏料、油漆層；vt. 繪畫、上油漆、塗顏料、用油漆（或塗料）覆蓋",
        "unit": 18,
        "example": "We will paint the door white today.",
        "exampleZh": "我們今天要把門漆成白色。"
    },
    {
        "id": 31189,
        "en": "painter",
        "kk": "[ˋpentɚ]",
        "uk": "/ˈpeɪntə(r)/",
        "zh": "n. 畫家、油漆匠、系船索、纜索",
        "unit": 18,
        "example": "His father was a painter.",
        "exampleZh": "他父親是一位畫家。"
    },
    {
        "id": 31190,
        "en": "pair",
        "kk": "[pɛr]",
        "uk": "/peə(r)/",
        "zh": "n. 一對、一雙、一套、一副；vt. 配對、使成對、結成一對（戀人）、交配",
        "unit": 18,
        "example": "I bought a pair of new shoes.",
        "exampleZh": "我買了一雙新鞋。"
    },
    {
        "id": 31191,
        "en": "pajamas",
        "kk": "[pəˋdʒɑməz]",
        "uk": "/pəˈdʒɑːməz/",
        "zh": "n. 睡衣、睡衣褲、寬鬆長褲",
        "unit": 18,
        "example": "We also need some pajamas.",
        "exampleZh": "我們還需要幾件睡衣。"
    },
    {
        "id": 31192,
        "en": "pale",
        "kk": "[pel]",
        "uk": "/peɪl/",
        "zh": "adj. 蒼白的、淺的、淡的、暗淡的；vi. 變蒼白、變淡、變淺、使褪色；n. 板條、尖樁、界限、範圍",
        "unit": 18,
        "example": "Rachel looked pale and weary.",
        "exampleZh": "雷切爾看起來蒼白而疲憊。"
    },
    {
        "id": 31193,
        "en": "pan",
        "kk": "[pæn]",
        "uk": "/pæn/",
        "zh": "n. 平底鍋、一鍋的量、烤盤、盤狀器皿；vt. 移動拍攝、搖攝、用淘金盤淘洗、淘金",
        "unit": 18,
        "example": "Oh hell, I've burned the pan.",
        "exampleZh": "真該死，我把鍋燒煳了。"
    },
    {
        "id": 31194,
        "en": "panda",
        "kk": "[ˋpændə]",
        "uk": "/ˈpændə/",
        "zh": "n. 貓熊、熊貓、大熊貓、小熊貓",
        "unit": 18,
        "example": "The baby panda was eating green bamboo.",
        "exampleZh": "那隻貓熊寶寶正在吃綠竹子。"
    },
    {
        "id": 31195,
        "en": "pants",
        "kk": "[pænts]",
        "uk": "/pænts/",
        "zh": "n. 褲子、內褲、短褲、廢物；adj. 無價值的、低劣的、褲子的；v. 氣喘、喘息、喘著氣說、渴望",
        "unit": 18,
        "example": "Don't tell me you've split another pair of pants!",
        "exampleZh": "別告訴我你又裂開了一條褲子！"
    },
    {
        "id": 31196,
        "en": "papaya",
        "kk": "[pəˋpaɪə]",
        "uk": "/pəˈpaɪə/",
        "zh": "n. 木瓜、番木瓜、番木瓜樹",
        "unit": 18,
        "example": "Apply papaya pulp on the skin.",
        "exampleZh": "敷木瓜漿在皮膚上。"
    },
    {
        "id": 31197,
        "en": "paper",
        "kk": "[ˋpepɚ]",
        "uk": "/ˈpeɪpə(r)/",
        "zh": "n. 紙、報紙、資料、檔案；vt. 用牆紙裱糊、用牆紙覆蓋（洞，汙點）、掩蓋（尷尬問題）、發免費入場券使（劇院）滿座；adj. 紙做的、紙質的、書面的、印刷的",
        "unit": 18,
        "example": "Please give me a sheet of paper.",
        "exampleZh": "請給我一張紙。"
    },
    {
        "id": 31198,
        "en": "pardon",
        "kk": "[ˋpɑrdən]",
        "uk": "/ˈpɑːd(ə)n/",
        "zh": "n. 赦免、寬恕、原諒、贖罪券；vt. 原諒、饒恕、寬恕、赦免；int. 什麼、請再說一遍、對不起、不好意思",
        "unit": 18,
        "example": "I must crave your pardon.",
        "exampleZh": "我必須懇求您原諒。"
    },
    {
        "id": 31199,
        "en": "parent",
        "kk": "[ˋpɛrənt]",
        "uk": "/ˈpeərənt/",
        "zh": "n. 父親、親代、親本、母公司；v. 做……的父親、為人父母",
        "unit": 18,
        "example": "Every parent loves their own child.",
        "exampleZh": "每位父母都愛自己的孩子。"
    },
    {
        "id": 31200,
        "en": "park",
        "kk": "[pɑrk]",
        "uk": "/pɑːk/",
        "zh": "n. 公園、自然保護區、庭園、園林；vt. 停車、泊車、存放、寄存",
        "unit": 18,
        "example": "We played ball in the city park.",
        "exampleZh": "我們在城市公園裡打球。"
    },
    {
        "id": 31201,
        "en": "parrot",
        "kk": "[ˋpɛrət]",
        "uk": "/ˈpærət/",
        "zh": "n. 鸚鵡、學舌者、機械模仿別人的人；vt. 機械地模仿、鸚鵡學舌般重複",
        "unit": 18,
        "example": "The green parrot can repeat many words.",
        "exampleZh": "那隻綠色鸚鵡能重複說許多單字。"
    },
    {
        "id": 31202,
        "en": "part",
        "kk": "[pɑrt]",
        "uk": "/pɑːt/",
        "zh": "n. 部分、某物的部分、部、篇；vt. 分開、分離、分別、分手；adv. 既有……又有……、不完全地、部分地；adj. 部分的、不完全的",
        "unit": 18,
        "example": "This is the best part of today.",
        "exampleZh": "這是今天最棒的部分。"
    },
    {
        "id": 31203,
        "en": "particular",
        "kk": "[pɚˋtɪkjəlɚ]",
        "uk": "/pəˈtɪkjələ(r)/",
        "zh": "adj. 特別的、特定的、某一的、格外的；n. 一點、一個細節、詳細資料、詳情",
        "unit": 18,
        "example": "I have no particular plan for this weekend.",
        "exampleZh": "我這個週末沒有特別的計畫。"
    },
    {
        "id": 31204,
        "en": "partner",
        "kk": "[ˋpɑrtnɚ]",
        "uk": "/ˈpɑːtnə(r)/",
        "zh": "n. 夥伴、搭檔、同伴、合夥人；vt. 成為搭檔、合夥",
        "unit": 18,
        "example": "Tom is my dance partner today.",
        "exampleZh": "湯姆是我今天的舞伴。"
    },
    {
        "id": 31205,
        "en": "party",
        "kk": "[ˋpɑrti]",
        "uk": "/ˈpɑːti/",
        "zh": "n. 派對、聚會、政黨、黨派；vi. 盡情歡樂、歡宴；adj. 分割開的、分成不同顏色部分的",
        "unit": 18,
        "example": "We had a big dance party today.",
        "exampleZh": "我們今天辦了一個盛大的舞會派對。"
    },
    {
        "id": 31206,
        "en": "pass",
        "kk": "[pæs]",
        "uk": "/pɑːs/",
        "zh": "v. 通過、經過、穿過、傳遞；n. 及格、出入證、通行證、合格",
        "unit": 18,
        "example": "Please pass the salt to me.",
        "exampleZh": "請把鹽遞給我。"
    },
    {
        "id": 31207,
        "en": "passenger",
        "kk": "[ˋpæsəndʒɚ]",
        "uk": "/ˈpæsɪndʒə(r)/",
        "zh": "n. 乘客、旅客、不幹活的人、閒散人員；adj. 乘客的、旅客的",
        "unit": 18,
        "example": "I dinged my passenger door.",
        "exampleZh": "我把乘客門撞壞了一點。"
    },
    {
        "id": 31208,
        "en": "past",
        "kk": "[pæst]",
        "uk": "/pɑːst/",
        "zh": "adj. 過去的、昔日的、剛過去的、剛結束的；n. 過去、昔日、往事、經歷；prep. 晚於、在…...之後、在…...的更遠處、經過；adv. 從一側到另一側、經過、過去、逝去",
        "unit": 18,
        "example": "We walked past your house just now.",
        "exampleZh": "我們剛才走過了你家門前。"
    },
    {
        "id": 31209,
        "en": "paste",
        "kk": "[pest]",
        "uk": "/peɪst/",
        "zh": "n. 麵糊、糊狀物、糨糊、肉（或魚等）醬；vt. 黏、貼、貼上、狠狠地打",
        "unit": 18,
        "example": "Use some glue to paste the photo here.",
        "exampleZh": "用一些膠水把這張照片貼在這裡。"
    },
    {
        "id": 31210,
        "en": "path",
        "kk": "[pæθ]",
        "uk": "/pɑːθ/",
        "zh": "n. 小徑、小道、通道、路線",
        "unit": 18,
        "example": "Follow this stone path into the park.",
        "exampleZh": "沿著這條石徑走進公園。"
    },
    {
        "id": 31211,
        "en": "patient",
        "kk": "[ˋpeʃənt]",
        "uk": "/ˈpeɪʃ(ə)nt/",
        "zh": "adj. 耐心的、能忍耐的、有耐心的；n. 病人、患者、受動者、承受者",
        "unit": 18,
        "example": "The doctor talked to the young patient.",
        "exampleZh": "醫生與那位年輕病人交談。"
    },
    {
        "id": 31212,
        "en": "pattern",
        "kk": "[ˋpætɚn]",
        "uk": "/ˈpæt(ə)n/",
        "zh": "n. 模式、方式、圖案、花樣；v. 用圖案裝飾、給……加上花樣、仿照、模仿",
        "unit": 18,
        "example": "The dress has a pretty flower pattern.",
        "exampleZh": "這件洋裝上有著漂亮的花朵圖案。"
    },
    {
        "id": 31213,
        "en": "pause",
        "kk": "[pɔz]",
        "uk": "/pɔːz/",
        "zh": "n. 躊躇、猶豫、暫停、停頓；vi. 暫停、停頓、躊躇",
        "unit": 18,
        "example": "Let us pause for a minute.",
        "exampleZh": "讓我們暫停一分鐘。"
    },
    {
        "id": 31214,
        "en": "pay",
        "kk": "[pe]",
        "uk": "/peɪ/",
        "zh": "v. 支付、付、償還、繳納；n. 薪水、工資、付款、回報；adj. 付費的、收費的",
        "unit": 18,
        "example": "I will pay for your lunch.",
        "exampleZh": "我來替你付午餐費用。"
    },
    {
        "id": 31215,
        "en": "peace",
        "kk": "[pis]",
        "uk": "/piːs/",
        "zh": "n. 和平、太平、平靜、安寧；v. 安靜",
        "unit": 18,
        "example": "We all wish for peace in the world.",
        "exampleZh": "我們都期盼世界和平。"
    },
    {
        "id": 31216,
        "en": "peaceful",
        "kk": "[ˋpisfəl]",
        "uk": "/ˈpiːsf(ə)l/",
        "zh": "adj. 和平的、寧靜的、安靜的、非暴力的",
        "unit": 18,
        "example": "The small park is quiet and peaceful.",
        "exampleZh": "那座小公園安靜且祥和。"
    },
    {
        "id": 31217,
        "en": "peach",
        "kk": "[pitʃ]",
        "uk": "/piːtʃ/",
        "zh": "n. 桃子、桃樹、桃紅色、極好的人；adj. 桃紅色的、用桃子製成的；v. 告密、告發",
        "unit": 18,
        "example": "He picked out the ripest peach for me.",
        "exampleZh": "他給我挑了個熟透了的桃子。"
    },
    {
        "id": 31218,
        "en": "pear",
        "kk": "[pɛr]",
        "uk": "/peə(r)/",
        "zh": "n. 梨子、梨、梨樹",
        "unit": 18,
        "example": "She bit into a ripe juicy pear.",
        "exampleZh": "她咬了一口熟透了的多汁的梨。"
    },
    {
        "id": 31219,
        "en": "peanut",
        "kk": "[ˋpinət]",
        "uk": "/ˈpiːnʌt/",
        "zh": "n. 花生、花生米、很少的錢、小片聚苯乙烯泡沫塑膠",
        "unit": 18,
        "example": "I love to eat sweet peanut butter.",
        "exampleZh": "我喜歡吃甜甜的花生醬。"
    },
    {
        "id": 31220,
        "en": "pen",
        "kk": "[pɛn]",
        "uk": "/pen/",
        "zh": "n. 筆、鋼筆、圍欄、圈；vt. 寫、撰寫、關起來、圈起來",
        "unit": 18,
        "example": "Where's the top of this pen?",
        "exampleZh": "這支筆的頂部在哪裡？"
    },
    {
        "id": 31221,
        "en": "pencil",
        "kk": "[ˋpɛnsəl]",
        "uk": "/ˈpens(ə)l/",
        "zh": "n. 鉛筆、石墨芯、類似石墨芯的東西、化妝筆；v. 用鉛筆寫；adj. 用鉛筆寫（或畫、描、記）的",
        "unit": 18,
        "example": "I need a sharp pencil to write.",
        "exampleZh": "我需要一支削好的鉛筆來寫字。"
    },
    {
        "id": 31222,
        "en": "people",
        "kk": "[ˋpipəl]",
        "uk": "/ˈpiːp(ə)l/",
        "zh": "n. 人、人類、人們、大家；vt. 居住在、定居於、充滿、充斥著",
        "unit": 18,
        "example": "She tends to annoy people.",
        "exampleZh": "她很容易惹惱別人。"
    },
    {
        "id": 31223,
        "en": "pepper",
        "kk": "[ˋpɛpɚ]",
        "uk": "/ˈpepə(r)/",
        "zh": "n. 辣椒、胡椒粉、甜椒、燈籠椒；vt. 胡椒、撒胡椒粉、連續射擊、在……上撒",
        "unit": 18,
        "example": "Put a little black pepper in the soup.",
        "exampleZh": "在湯裡加一點黑胡椒粉。"
    },
    {
        "id": 31224,
        "en": "perfect",
        "kk": "[pɚˋfɛkt]",
        "uk": "/ˈpɜːfɪkt/",
        "zh": "adj. 完美的、無瑕的、完好的、完全正確的；vt. 完善、使完美、雙面印完、使（禮物、頭銜等）合法轉移；n. 完成時、完成體",
        "unit": 18,
        "example": "He always plays in perfect time.",
        "exampleZh": "他演奏的節奏總是準確無誤。"
    },
    {
        "id": 31225,
        "en": "perhaps",
        "kk": "[pɚˋhæps]",
        "uk": "/pəˈhæps/",
        "zh": "adv. 也許、可能、大概；n. 假定、猜想",
        "unit": 18,
        "example": "Perhaps we can visit our grandparents tomorrow.",
        "exampleZh": "也許我們明天可以去拜訪祖父母。"
    },
    {
        "id": 31226,
        "en": "period",
        "kk": "[ˋpɪriəd]",
        "uk": "/ˈpɪəriəd/",
        "zh": "n. 一段時間、時期、階段、時代；adj. 具有某個時代特徵的；adv. 到此為止、不再說了",
        "unit": 18,
        "example": "We rest for a short period after lunch.",
        "exampleZh": "午餐後我們會休息一小段時間。"
    },
    {
        "id": 31227,
        "en": "personal",
        "kk": "[ˋpɝsɪnəl]",
        "uk": "/ˈpɜːsən(ə)l/",
        "zh": "adj. 個人的、私人的、私密的、隱私的；n. 私人資訊釋出、私人廣告、個人啟事欄、私人廣告欄",
        "unit": 18,
        "example": "You should keep your personal information completely private.",
        "exampleZh": "你應該對你的個人資訊完全保密。"
    },
    {
        "id": 31228,
        "en": "pet",
        "kk": "[pɛt]",
        "uk": "/pet/",
        "zh": "n. 寵物、寵兒、得寵的人、寶貝；vt. 撫摸、親吻、愛撫、寵愛；adj. 很喜歡的、鍾愛的",
        "unit": 18,
        "example": "Do you have a pet at home?",
        "exampleZh": "你家裡有養寵物嗎？"
    },
    {
        "id": 31229,
        "en": "photo",
        "kk": "[ˋfo͵to]",
        "uk": "/ˈfəʊtəʊ/",
        "zh": "n. 照片、相片；v. 拍照、給……拍照",
        "unit": 18,
        "example": "The photo wasn't very clear.",
        "exampleZh": "這張照片不太清晰。"
    },
    {
        "id": 31230,
        "en": "physics",
        "kk": "[ˋfɪzɪks]",
        "uk": "/ˈfɪzɪks/",
        "zh": "n. 物理、物理學、物理特性、物理現象",
        "unit": 18,
        "example": "We will study physics this term.",
        "exampleZh": "我們這學期將研讀物理學。"
    },
    {
        "id": 31231,
        "en": "piano",
        "kk": "[piˋæno]",
        "uk": "/piˈænəʊ/",
        "zh": "n. 鋼琴；adj. 柔和的；adv. 輕柔地",
        "unit": 18,
        "example": "She plays the piano very well.",
        "exampleZh": "她的鋼琴彈得非常好。"
    },
    {
        "id": 31232,
        "en": "pick",
        "kk": "[pɪk]",
        "uk": "/pɪk/",
        "zh": "vt. 挑選、採、摘、弄掉；n. 選擇、精華、選擇權、被選中的人",
        "unit": 18,
        "example": "You can pick any red apple now.",
        "exampleZh": "你現在可以挑選任何一顆紅蘋果。"
    },
    {
        "id": 31233,
        "en": "picnic",
        "kk": "[ˋpɪk͵nɪk]",
        "uk": "/ˈpɪknɪk/",
        "zh": "n. 野餐、野餐活動、野餐食物、愉快事物；vi. 參加野餐活動",
        "unit": 18,
        "example": "We had a sunny picnic in the park.",
        "exampleZh": "我們在公園裡享受了一場陽光野餐。"
    },
    {
        "id": 31234,
        "en": "picture",
        "kk": "[ˋpɪktʃɚ]",
        "uk": "/ˈpɪktʃə(r)/",
        "zh": "n. 照片、圖片、繪畫、肖像；vt. 想象、繪畫、拍攝、描繪",
        "unit": 18,
        "example": "The girl drew a picture of a cat.",
        "exampleZh": "那個女孩畫了一張貓咪的圖畫。"
    },
    {
        "id": 31235,
        "en": "pie",
        "kk": "[paɪ]",
        "uk": "/paɪ/",
        "zh": "n. 派、餡餅、果餡餅、肉餡餅",
        "unit": 18,
        "example": "Mom baked a sweet apple pie today.",
        "exampleZh": "媽媽今天烤了一個香甜的蘋果派。"
    },
    {
        "id": 31236,
        "en": "piece",
        "kk": "[pis]",
        "uk": "/piːs/",
        "zh": "n. 一張、塊、張、片；v. 拼合、拼裝、慢慢理解",
        "unit": 18,
        "example": "I never found the missing piece.",
        "exampleZh": "我一直沒有找到缺少的部分。"
    },
    {
        "id": 31237,
        "en": "pig",
        "kk": "[pɪɡ]",
        "uk": "/pɪɡ/",
        "zh": "n. 豬、令人討厭的人、豬玀、警官；v. 狼吞虎嚥、像豬一樣擠在一起、生小豬、操作清管器",
        "unit": 18,
        "example": "The pink pig played in the mud.",
        "exampleZh": "粉紅色的豬在泥巴裡玩耍。"
    },
    {
        "id": 31238,
        "en": "pigeon",
        "kk": "[ˋpɪdʒən]",
        "uk": "/ˈpɪdʒɪn/",
        "zh": "n. 鴿子、上當受騙的人、責任、分內之事",
        "unit": 18,
        "example": "A large Pigeon flew far above him.",
        "exampleZh": "一隻大鴿子從他頭頂上飛過。"
    },
    {
        "id": 31239,
        "en": "pile",
        "kk": "[paɪl]",
        "uk": "/paɪl/",
        "zh": "n. 一堆、一疊、一大堆、大量；v. 堆放、堆滿、聚集、將（女子頭髮）高高盤起",
        "unit": 18,
        "example": "He swept the leaves up into a pile.",
        "exampleZh": "他把樹葉掃成一堆。"
    },
    {
        "id": 31240,
        "en": "pillow",
        "kk": "[ˋpɪlo]",
        "uk": "/ˈpɪləʊ/",
        "zh": "n. 枕頭、蕾絲枕頭、坐墊、靠墊；v. 枕著、將（頭）枕在……上、為……當枕頭",
        "unit": 18,
        "example": "This soft pillow helps me sleep well.",
        "exampleZh": "這顆柔軟的枕頭能幫我睡個好覺。"
    },
    {
        "id": 31241,
        "en": "pin",
        "kk": "[pɪn]",
        "uk": "/pɪn/",
        "zh": "n. 胸針、別針、大頭針、飾針；vt. 釘住、別住、按住",
        "unit": 18,
        "example": "They're trying to pin it on us.",
        "exampleZh": "他們正試圖把這件事歸罪於我們。"
    },
    {
        "id": 31242,
        "en": "pineapple",
        "kk": "[ˋpaɪ͵næpəl]",
        "uk": "/ˈpaɪnæp(ə)l/",
        "zh": "n. 鳳梨、[園藝]菠蘿、[園藝]鳳梨；adj. 鳳梨科的",
        "unit": 18,
        "example": "Mango and pineapple are yellow.",
        "exampleZh": "芒果和菠蘿是黃色的。"
    },
    {
        "id": 31243,
        "en": "pink",
        "kk": "[pɪŋk]",
        "uk": "/pɪŋk/",
        "zh": "adj. 粉紅色的、臉色發紅的、同性戀的、左傾的；n. 粉紅色、粉紅色衣服或衣料、粉紅色葡萄酒、石竹；v. 發響爆聲、爆震、變成粉紅色、剪",
        "unit": 18,
        "example": "She wore a cute pink dress today.",
        "exampleZh": "她今天穿了一件可愛的粉紅色洋裝。"
    },
    {
        "id": 31244,
        "en": "pipe",
        "kk": "[paɪp]",
        "uk": "/paɪp/",
        "zh": "n. 管子、管道、菸斗、管樂器；vt. 用管道運輸、傳送、播送、用管樂器吹奏",
        "unit": 18,
        "example": "Water leaked from the old metal pipe.",
        "exampleZh": "水從老舊的金屬水管中漏了出來。"
    },
    {
        "id": 31245,
        "en": "pizza",
        "kk": "[ˋpitsə]",
        "uk": "/ˈpiːtsə/",
        "zh": "n. 披薩、比薩餅、皮扎",
        "unit": 18,
        "example": "They pigged out on pizza.",
        "exampleZh": "他們猛搶著吃比薩餅。"
    },
    {
        "id": 31246,
        "en": "place",
        "kk": "[ples]",
        "uk": "/pleɪs/",
        "zh": "n. 地方、地點、場所、城鎮；vt. 放置、使處於某種境地、以某種態度對待、認出",
        "unit": 18,
        "example": "This is a nice place to live.",
        "exampleZh": "這是一個適合居住的好地方。"
    },
    {
        "id": 31247,
        "en": "plain",
        "kk": "[plen]",
        "uk": "/pleɪn/",
        "zh": "adj. 無裝飾的、樸素的、單色的、無花紋的；adv. 完全地、簡直、明白地、不含糊地；n. 平原、平針、樸實無華的東西",
        "unit": 18,
        "example": "She wore a plain white cotton shirt.",
        "exampleZh": "她穿了一件純白棉質襯衫。"
    },
    {
        "id": 31248,
        "en": "plan",
        "kk": "[plæn]",
        "uk": "/plæn/",
        "zh": "n. 計劃、規劃、方案、打算；vt. 計劃、籌劃、打算",
        "unit": 18,
        "example": "If Plan A fails, go to Plan B.",
        "exampleZh": "如果 A 計劃失敗，則轉向 B 計劃。"
    },
    {
        "id": 31249,
        "en": "planet",
        "kk": "[ˋplænət]",
        "uk": "/ˈplænɪt/",
        "zh": "n. 行星、地球、命運星辰",
        "unit": 18,
        "example": "The Earth is our green home planet.",
        "exampleZh": "地球是我們綠色的家園行星。"
    },
    {
        "id": 31250,
        "en": "plant",
        "kk": "[plænt]",
        "uk": "/plɑːnt/",
        "zh": "n. 植物、工廠、發電廠、房屋；vt. 種植、栽種、灌輸、栽贓",
        "unit": 18,
        "example": "Water the small green plant every day.",
        "exampleZh": "每天給這株綠色小植物澆水。"
    },
    {
        "id": 31251,
        "en": "plate",
        "kk": "[plet]",
        "uk": "/pleɪt/",
        "zh": "n. 碟、盤、一盤、一道主菜；v. 盤、給……鍍、給……加上裝甲、用鱗片覆蓋",
        "unit": 18,
        "example": "Don't touch that plate—it's hot!",
        "exampleZh": "別碰那個盤子，燙手！"
    },
    {
        "id": 31252,
        "en": "platform",
        "kk": "[ˋplæt͵fɔrm]",
        "uk": "/ˈplætfɔːm/",
        "zh": "n. 月臺、平臺、講臺、舞臺",
        "unit": 18,
        "example": "Wait for the train on platform two.",
        "exampleZh": "在第二月台等火車。"
    },
    {
        "id": 31253,
        "en": "play",
        "kk": "[ple]",
        "uk": "/pleɪ/",
        "zh": "v. 玩、玩耍、捉弄、戲弄；n. 戲劇、劇本、遊戲、玩樂",
        "unit": 18,
        "example": "I used to play basketball.",
        "exampleZh": "我以前打籃球。"
    },
    {
        "id": 31254,
        "en": "player",
        "kk": "[ˋpleɚ]",
        "uk": "/ˈpleɪə(r)/",
        "zh": "n. 運動員、選手、演奏者、演員",
        "unit": 18,
        "example": "She's a good all-round player.",
        "exampleZh": "她是一位出色的全能球員。"
    },
    {
        "id": 31255,
        "en": "playground",
        "kk": "[ˋple͵ɡraʊnd]",
        "uk": "/ˈpleɪɡraʊnd/",
        "zh": "n. 操場、遊樂場、遊憩勝地、度假場所",
        "unit": 18,
        "example": "Sam pushed me over in the playground.",
        "exampleZh": "山姆在操場上把我推倒了。"
    },
    {
        "id": 31256,
        "en": "pleasant",
        "kk": "[ˋplɛzənt]",
        "uk": "/ˈplez(ə)nt/",
        "zh": "adj. 舒適的、令人愉快的、愜意的、禮貌而友善的",
        "unit": 18,
        "example": "The woman had a pleasant face.",
        "exampleZh": "女人面容愉快。"
    },
    {
        "id": 31257,
        "en": "please",
        "kk": "[pliz]",
        "uk": "/pliːz/",
        "zh": "int. 請、拜託；vt. 使高興、使滿意、取悅；vi. 喜歡、願意",
        "unit": 18,
        "example": "Two pints of mild, please.",
        "exampleZh": "請來兩品脫淡啤酒。"
    },
    {
        "id": 31258,
        "en": "plus",
        "kk": "[plʌs]",
        "uk": "/plʌs/",
        "zh": "prep. 加上、加、外加、而且；adj. 多、餘、略高於標準的、零上的；n. 優勢、加號、正號、加法；conj. 而且、加上",
        "unit": 18,
        "example": "Two plus two is four.",
        "exampleZh": "二加二等於四。"
    },
    {
        "id": 31259,
        "en": "pocket",
        "kk": "[ˋpɑkət]",
        "uk": "/ˈpɒkɪt/",
        "zh": "n. 衣袋、口袋、錢財、財力；vt. 把……放入口袋、把……裝進腰包、將……據為己有、賺取；adj. 袖珍的、袋裝的",
        "unit": 18,
        "example": "I slid the wallet into his pocket.",
        "exampleZh": "我把錢包塞進他的口袋。"
    },
    {
        "id": 31260,
        "en": "poem",
        "kk": "[ˋpoəm]",
        "uk": "/ˈpəʊɪm/",
        "zh": "n. 詩、韻文",
        "unit": 18,
        "example": "He wrote a short poem today.",
        "exampleZh": "他今天寫了一首短詩。"
    },
    {
        "id": 31261,
        "en": "poet",
        "kk": "[ˋpoət]",
        "uk": "/ˈpəʊɪt/",
        "zh": "n. 詩人",
        "unit": 18,
        "example": "My uncle is a famous poet.",
        "exampleZh": "我的叔叔是一位著名的詩人。"
    },
    {
        "id": 31262,
        "en": "point",
        "kk": "[pɔɪnt]",
        "uk": "/pɔɪnt/",
        "zh": "n. 點、觀點、論點、要點；v. 指出、指、指向、對準",
        "unit": 18,
        "example": "He used a stick to point north.",
        "exampleZh": "他用木棍指向北方。"
    },
    {
        "id": 31263,
        "en": "poison",
        "kk": "[ˋpɔɪzən]",
        "uk": "/ˈpɔɪz(ə)n/",
        "zh": "n. 毒藥、有害的思想、惡毒的言辭、抑制劑；v. 毒殺、在……下毒、毒化、敗壞；adj. 有毒的",
        "unit": 18,
        "example": "That bottle has strong poison inside.",
        "exampleZh": "那個瓶子裡面有劇毒。"
    },
    {
        "id": 31264,
        "en": "police",
        "kk": "[pəˋlis]",
        "uk": "/pəˈliːs/",
        "zh": "n. 警察、警察部門；vt. 巡查、維護治安、監督、管制",
        "unit": 18,
        "example": "Call the police if you need help.",
        "exampleZh": "如果你需要協助就報警。"
    },
    {
        "id": 31265,
        "en": "polite",
        "kk": "[pəˋlaɪt]",
        "uk": "/pəˈlaɪt/",
        "zh": "adj. 有禮貌的、客氣的、禮節性的、客套的",
        "unit": 18,
        "example": "Always be polite when you talk to others.",
        "exampleZh": "與他人交談時總是要有禮貌。"
    },
    {
        "id": 31266,
        "en": "pollute",
        "kk": "[pəˋlut]",
        "uk": "/pəˈluːt/",
        "zh": "vt. 汙染、弄髒、玷汙、敗壞",
        "unit": 18,
        "example": "Mining would pollute the lake and denude the forest.",
        "exampleZh": "採礦將會汙染湖水並伐光森林。"
    },
    {
        "id": 31267,
        "en": "pollution",
        "kk": "[pəˋluʃən]",
        "uk": "/pəˈluːʃ(ə)n/",
        "zh": "n. 汙染、汙染物、噪音汙染、強烈燈光",
        "unit": 18,
        "example": "Pollution can harm marine life.",
        "exampleZh": "汙染會危及海洋生物。"
    },
    {
        "id": 31268,
        "en": "pond",
        "kk": "[pɑnd]",
        "uk": "/pɒnd/",
        "zh": "n. 池塘、大西洋；v. 攔截（或築壩堵塞）（流水或其他流動液體）以形成小湖、形成小湖",
        "unit": 18,
        "example": "Small frogs swim in the quiet pond.",
        "exampleZh": "小青蛙在安靜的池塘裡游泳。"
    },
    {
        "id": 31269,
        "en": "pool",
        "kk": "[pul]",
        "uk": "/puːl/",
        "zh": "n. 水池、游泳池、池塘、水坑；vt. 集中（資源等）共用、湊集",
        "unit": 18,
        "example": "The kids swim in the pool daily.",
        "exampleZh": "孩子們每天都在游泳池游泳。"
    },
    {
        "id": 31270,
        "en": "poor",
        "kk": "[pur]",
        "uk": "/pɔː(r); pʊə(r)/",
        "zh": "adj. 貧窮的、可憐的、不幸的、虛弱的",
        "unit": 18,
        "example": "The poor boy had no warm shoes.",
        "exampleZh": "那個可憐的男孩沒有保暖的鞋子。"
    },
    {
        "id": 31271,
        "en": "popcorn",
        "kk": "[ˋpɑp͵kɔrn]",
        "uk": "/ˈpɒpkɔːn/",
        "zh": "n. 爆米花、爆玉米花、爆裂玉米",
        "unit": 18,
        "example": "We ate sweet popcorn at the movies.",
        "exampleZh": "我們看電影時吃了甜爆米花。"
    },
    {
        "id": 31272,
        "en": "popular",
        "kk": "[ˋpɑpjəlɚ]",
        "uk": "/ˈpɒpjələ(r)/",
        "zh": "adj. 受歡迎的、受大眾喜愛的、普遍的、通俗的",
        "unit": 18,
        "example": "This song is very popular among young people.",
        "exampleZh": "這首歌在年輕人之間非常受歡迎。"
    },
    {
        "id": 31273,
        "en": "population",
        "kk": "[͵pɑpjəˋleʃən]",
        "uk": "/ˌpɒpjuˈleɪʃ(ə)n/",
        "zh": "n. 人口、人口數量、生物、族群",
        "unit": 18,
        "example": "The city has a large population.",
        "exampleZh": "這座城市人口眾多。"
    },
    {
        "id": 31274,
        "en": "pork",
        "kk": "[pɔrk]",
        "uk": "/pɔːk/",
        "zh": "n. 豬肉、政府恩惠；v. 暴食、跟……性交",
        "unit": 18,
        "example": "Here the cooks dish out sweet and sour pork.",
        "exampleZh": "在這兒廚師們把咕咾肉分份兒。"
    },
    {
        "id": 31275,
        "en": "port",
        "kk": "[pɔrt]",
        "uk": "/pɔːt/",
        "zh": "n. 港口、避風港、口岸、港口城市；v. 轉移、移植、使（船，舵）向左轉、斜持槍",
        "unit": 18,
        "example": "The big ship came to port.",
        "exampleZh": "大船開進了港口。"
    },
    {
        "id": 31276,
        "en": "pose",
        "kk": "[poz]",
        "uk": "/pəʊz/",
        "zh": "v. 姿勢、造成、引起、提出；n. 裝腔作勢、姿勢、故作姿態",
        "unit": 18,
        "example": "She held a pose for photos.",
        "exampleZh": "她擺了一個姿勢拍照。"
    },
    {
        "id": 31277,
        "en": "position",
        "kk": "[pəˋzɪʃən]",
        "uk": "/pəˈzɪʃ(ə)n/",
        "zh": "n. 位置、職位、立場、姿勢；vt. 安置、定位",
        "unit": 18,
        "example": "He took his position on the team.",
        "exampleZh": "他在隊伍中就定位了。"
    },
    {
        "id": 31278,
        "en": "positive",
        "kk": "[ˋpɑzətɪv]",
        "uk": "/ˈpɒzətɪv/",
        "zh": "adj. 肯定的、樂觀的、有信心的、積極的；n. 優勢、優點、陽性結果、正片",
        "unit": 18,
        "example": "He always keeps a positive mind.",
        "exampleZh": "他總是保持積極的心態。"
    },
    {
        "id": 31279,
        "en": "possible",
        "kk": "[ˋpɑsəbəl]",
        "uk": "/ˈpɒsəb(ə)l/",
        "zh": "adj. 有可能的、可能的、可能做到的、可能發生的；n. 可能適合的人、可能性、能完成的事、最高分",
        "unit": 18,
        "example": "Is it possible to come here today?",
        "exampleZh": "今天有可能來這裡嗎？"
    },
    {
        "id": 31280,
        "en": "post",
        "kk": "[post]",
        "uk": "/pəʊst/",
        "zh": "n. 郵件、郵政、郵遞、包裹；vt. 張貼、郵寄、把……放入、派駐；prep. 在……之後",
        "unit": 18,
        "example": "Have you opened your post yet?",
        "exampleZh": "你拆開郵件了沒有？"
    },
    {
        "id": 31281,
        "en": "pot",
        "kk": "[pɑt]",
        "uk": "/pɒt/",
        "zh": "n. 鍋、罐、瓶、壺；v. 罐、把（植物）栽入盆中、將（食物）用密封罐煮、射殺",
        "unit": 18,
        "example": "They drank a pot of coffee.",
        "exampleZh": "他們喝了一壺咖啡。"
    },
    {
        "id": 31282,
        "en": "potato",
        "kk": "[pəˋte͵to]",
        "uk": "/pəˈteɪtəʊ/",
        "zh": "n. 馬鈴薯、土豆、洋芋、馬鈴薯植株",
        "unit": 18,
        "example": "The boiled potato was mealy.",
        "exampleZh": "這個煮土豆乾巴巴的。"
    },
    {
        "id": 31283,
        "en": "pound",
        "kk": "[paʊnd]",
        "uk": "/paʊnd/",
        "zh": "n. 磅、英鎊、一英鎊紙幣、一鎊紙幣；v. 連續重擊、猛打、劇烈地跳動、劇痛",
        "unit": 18,
        "example": "I bought a pound of apples.",
        "exampleZh": "我買了一磅蘋果。"
    },
    {
        "id": 31284,
        "en": "powder",
        "kk": "[ˋpaʊdɚ]",
        "uk": "/ˈpaʊdə(r)/",
        "zh": "n. 粉、粉末、撲面粉、美容粉；vt. 往（臉或身體）上搽粉、撒粉（狀物）於",
        "unit": 18,
        "example": "The snow was like powder.",
        "exampleZh": "雪像粉末一樣。"
    },
    {
        "id": 31285,
        "en": "power",
        "kk": "[ˋpaʊɚ]",
        "uk": "/ˈpaʊə(r)/",
        "zh": "n. 力量、權力、電力、動力；vt. 驅動、推動；adj. 電力的、強大的",
        "unit": 18,
        "example": "The storm cut the power last night.",
        "exampleZh": "昨晚的暴風雨切斷了電力。"
    },
    {
        "id": 31286,
        "en": "practice",
        "kk": "[ˋpræktəs]",
        "uk": "/ˈpræktɪs/",
        "zh": "n. 練習、實踐、實際操作、通常的做法；v. 實踐、練習、經常做、養成……的習慣",
        "unit": 18,
        "example": "You must practice tennis every single day.",
        "exampleZh": "你必須每一天都練習網球。"
    },
    {
        "id": 31287,
        "en": "praise",
        "kk": "[prez]",
        "uk": "/preɪz/",
        "zh": "vt. 讚美、表揚；n. 表揚、讚美、感謝、崇拜",
        "unit": 18,
        "example": "Even his praise is double-edged.",
        "exampleZh": "即使他的讚揚也是可以有兩種解釋的。"
    },
    {
        "id": 31288,
        "en": "pray",
        "kk": "[pre]",
        "uk": "/preɪ/",
        "zh": "v. 禱告、祈禱、渴望、祈望；adv. 請問、請",
        "unit": 18,
        "example": "Will you pray to Our Lady for me?",
        "exampleZh": "你願意為我向聖母祈禱嗎？"
    },
    {
        "id": 31289,
        "en": "precious",
        "kk": "[ˋprɛʃəs]",
        "uk": "/ˈpreʃəs/",
        "zh": "adj. 珍貴的、寶貴的、珍視的、重要的；n. 寶貝、親愛的；adv. 非常、極其",
        "unit": 18,
        "example": "Water is precious to all life.",
        "exampleZh": "水對所有的生命都很寶貴。"
    },
    {
        "id": 31290,
        "en": "prefer",
        "kk": "[prəˋfɝ]",
        "uk": "/prɪˈfɜː(r)/",
        "zh": "vt. 較喜歡、更喜愛、寧可、舉報",
        "unit": 18,
        "example": "I prefer drinking green tea to coffee.",
        "exampleZh": "比起咖啡，我更喜歡喝綠茶。"
    },
    {
        "id": 31291,
        "en": "prepare",
        "kk": "[priˋpɛr]",
        "uk": "/prɪˈpeə(r)/",
        "zh": "vt. 準備、使做好準備、把……預備好、做好準備",
        "unit": 18,
        "example": "I had no time to prepare.",
        "exampleZh": "我沒有時間準備。"
    },
    {
        "id": 31292,
        "en": "presence",
        "kk": "[ˋprɛzəns]",
        "uk": "/ˈprez(ə)ns/",
        "zh": "n. 存在、出席、所在地方、感覺中的存在物",
        "unit": 18,
        "example": "We were glad of his presence.",
        "exampleZh": "我們很高興他在場。"
    },
    {
        "id": 31293,
        "en": "present",
        "kk": "[ˋprɛzənt]",
        "uk": "/ˈprez(ə)nt; prɪˈzent/",
        "zh": "adj. 現在的、在場的、出席的、存在的；n. 現在、目前、禮物、贈品；vt. 呈現、頒發、贈送、出示",
        "unit": 18,
        "example": "I bought a nice present today.",
        "exampleZh": "我今天買了一份很棒的禮物。"
    },
    {
        "id": 31294,
        "en": "president",
        "kk": "[ˋprɛzə͵dɛnt]",
        "uk": "/ˈprezɪdənt/",
        "zh": "n. 總統、校長、國家主席、負責人",
        "unit": 18,
        "example": "He wants to be the president.",
        "exampleZh": "他想成為總統。"
    },
    {
        "id": 31295,
        "en": "pressure",
        "kk": "[ˋprɛʃɚ]",
        "uk": "/ˈpreʃə(r)/",
        "zh": "n. 壓力、擠壓、壓強、心理壓力；vt. 對……施加壓力、強迫、使……增壓",
        "unit": 18,
        "example": "He can work well under pressure.",
        "exampleZh": "他在壓力下能把工作做好。"
    },
    {
        "id": 31296,
        "en": "pretty",
        "kk": "[ˋprɪti]",
        "uk": "/ˈprɪti/",
        "zh": "adj. 漂亮的、標緻的、悅目的、悅耳的；adv. 相當、頗、非常、很；n. 漂亮東西、漂亮的人、漂亮的孩子；v. 裝飾、使漂亮",
        "unit": 18,
        "example": "She wears a very pretty red dress.",
        "exampleZh": "她穿著一件非常漂亮的紅洋裝。"
    },
    {
        "id": 31297,
        "en": "price",
        "kk": "[praɪs]",
        "uk": "/praɪs/",
        "zh": "n. 價格、代價、開價、價碼；vt. 定價、為……定價、給（商店中的產品）標價、比較……的價格",
        "unit": 18,
        "example": "The price of food is very high.",
        "exampleZh": "食物的價格非常高。"
    },
    {
        "id": 31298,
        "en": "pride",
        "kk": "[praɪd]",
        "uk": "/praɪd/",
        "zh": "n. 自豪、自尊、傲慢、自負；vt. 以……自豪",
        "unit": 18,
        "example": "He took pride in his work.",
        "exampleZh": "他為自己的工作感到自豪。"
    },
    {
        "id": 31299,
        "en": "priest",
        "kk": "[prist]",
        "uk": "/priːst/",
        "zh": "n. 神父、牧師、神職人員、木漁槌；v. 任命……為司鐸",
        "unit": 18,
        "example": "The kind priest prayed for us.",
        "exampleZh": "那位善良的神父為我們祈禱。"
    },
    {
        "id": 31300,
        "en": "primary",
        "kk": "[ˋpraɪ͵mɛri]",
        "uk": "/ˈpraɪməri/",
        "zh": "adj. 主要的、首要的、小學教育的、初級教育的；n. 初選、原色、初級飛羽",
        "unit": 18,
        "example": "My girl goes to primary school.",
        "exampleZh": "我的女兒就讀小學。"
    },
    {
        "id": 31301,
        "en": "prince",
        "kk": "[prɪns]",
        "uk": "/prɪns/",
        "zh": "n. 王子、王孫、國君、親王",
        "unit": 18,
        "example": "The young prince lives in peace.",
        "exampleZh": "這位年輕的王子生活在和平中。"
    },
    {
        "id": 31302,
        "en": "princess",
        "kk": "[ˋprɪnsɛs]",
        "uk": "/ˌprɪnˈses/",
        "zh": "n. 公主、王室女成員、王妃、王公貴族夫人",
        "unit": 18,
        "example": "Princess Anne topped the guest list.",
        "exampleZh": "安妮公主的名字位於來賓名單之首。"
    },
    {
        "id": 31303,
        "en": "principal",
        "kk": "[ˋprɪnsəpəl]",
        "uk": "/ˈprɪnsəp(ə)l/",
        "zh": "adj. 最重要的、首要的、本金的、母金的；n. 校長、大學校長、學院院長、負責人",
        "unit": 18,
        "example": "The principal is a very busy woman.",
        "exampleZh": "校長是個大忙人。"
    },
    {
        "id": 31304,
        "en": "print",
        "kk": "[prɪnt]",
        "uk": "/prɪnt/",
        "zh": "vt. 印刷、列印、出版、刊登；n. 印刷、印刷字型、印刷出的文字",
        "unit": 18,
        "example": "Click on the icon when you want to print.",
        "exampleZh": "當您想要列印時，請按一下該圖示。"
    },
    {
        "id": 31305,
        "en": "prison",
        "kk": "[ˋprɪzən]",
        "uk": "/ˈprɪz(ə)n/",
        "zh": "n. 監獄、牢房、監禁、監獄制度；v. 禁錮、關押",
        "unit": 18,
        "example": "The bad man went to prison.",
        "exampleZh": "那個壞人進了監獄。"
    },
    {
        "id": 31306,
        "en": "private",
        "kk": "[ˋpraɪvət]",
        "uk": "/ˈpraɪvət/",
        "zh": "adj. 私人的、私有的、自用的、私營的；n. 二等兵、私處、陰部",
        "unit": 18,
        "example": "He has a private income.",
        "exampleZh": "他有私人收入。"
    },
    {
        "id": 31307,
        "en": "prize",
        "kk": "[praɪz]",
        "uk": "/praɪz/",
        "zh": "n. 獎品、獎項、非常珍貴的人、十分重要的人；adj. 可獲獎的、優等的、作為獎品的、獲獎的；vt. 珍視、高度重視、撬開、竭力打探",
        "unit": 18,
        "example": "She won first prize at school.",
        "exampleZh": "她在學校獲得了頭獎。"
    },
    {
        "id": 31308,
        "en": "probably",
        "kk": "[ˋprɑbəb͵li]",
        "uk": "/ˈprɒbəbli/",
        "zh": "adv. 或許、大概",
        "unit": 18,
        "example": "He will probably arrive here soon.",
        "exampleZh": "他大概很快就會到達這裡。"
    },
    {
        "id": 31309,
        "en": "problem",
        "kk": "[ˋprɑbləm]",
        "uk": "/ˈprɒbləm/",
        "zh": "n. 問題、難題、困難、疾病；adj. 難對付的、成問題的",
        "unit": 18,
        "example": "I can solve this math problem easily.",
        "exampleZh": "我可以輕易解出這道數學題。"
    },
    {
        "id": 31310,
        "en": "produce",
        "kk": "[prəˋdus]",
        "uk": "/prəˈdjuːs/",
        "zh": "vt. 製造、引起、造成、生產；n. 農產品、成果、結果",
        "unit": 18,
        "example": "These trees produce sweet red fruit.",
        "exampleZh": "這些樹結出甜甜的紅果實。"
    },
    {
        "id": 31311,
        "en": "production",
        "kk": "[prəˋdʌkʃən]",
        "uk": "/prəˈdʌkʃ(ə)n/",
        "zh": "n. 製造、生產、加工、採集",
        "unit": 18,
        "example": "Production costs began to spiral.",
        "exampleZh": "生產成本開始加速上漲。"
    },
    {
        "id": 31312,
        "en": "professor",
        "kk": "[prəˋfɛsɚ]",
        "uk": "/prəˈfesə(r)/",
        "zh": "n. 教授、講師、教員、信仰表示者",
        "unit": 18,
        "example": "The old professor gave a talk.",
        "exampleZh": "那位老教授發表演講。"
    },
    {
        "id": 31313,
        "en": "program",
        "kk": "[ˋpro͵ɡræm]",
        "uk": "/ˈprəʊɡræm/",
        "zh": "n. 節目、程式、計劃、規劃；vt. 編寫程式、設計程式、設定、預設",
        "unit": 18,
        "example": "The program aired last week.",
        "exampleZh": "該節目已於上週播出。"
    },
    {
        "id": 31314,
        "en": "progress",
        "kk": "[ˋprɑ͵ɡrɛs]",
        "uk": "/ˈprəʊɡres/",
        "zh": "n. 進步、進展、前進、行進；v. 進步、進展、使（任務，事業）取得持續進展、推移",
        "unit": 18,
        "example": "She made good progress this week.",
        "exampleZh": "她這週取得了很好的進步。"
    },
    {
        "id": 31315,
        "en": "project",
        "kk": "[ˋprɑdʒɛkt]",
        "uk": "/ˈprɒdʒekt; prəˈdʒekt/",
        "zh": "n. 項目、專案、計劃、課題；v. 投射、預計、推算、計劃",
        "unit": 18,
        "example": "We will work on this project.",
        "exampleZh": "我們將會進行這個專案。"
    },
    {
        "id": 31316,
        "en": "promise",
        "kk": "[ˋprɑməs]",
        "uk": "/ˈprɒmɪs/",
        "zh": "vt. 承諾、保證、使很可能、預示；n. 承諾、諾言、前途",
        "unit": 18,
        "example": "I promise to help you now.",
        "exampleZh": "我答應現在幫你。"
    },
    {
        "id": 31317,
        "en": "pronounce",
        "kk": "[prəˋnaʊns]",
        "uk": "/prəˈnaʊns/",
        "zh": "vt. 發音、發、讀、正式宣佈",
        "unit": 18,
        "example": "How do you pronounce this long word?",
        "exampleZh": "你怎麼發這個長單字的音？"
    },
    {
        "id": 31318,
        "en": "protect",
        "kk": "[prəˋtɛkt]",
        "uk": "/prəˈtekt/",
        "zh": "vt. 保護、防護、投保、為……買保險",
        "unit": 18,
        "example": "A warm hat will protect your head.",
        "exampleZh": "一頂保暖的帽子能保護你的頭部。"
    },
    {
        "id": 31319,
        "en": "proud",
        "kk": "[praʊd]",
        "uk": "/praʊd/",
        "zh": "adj. 驕傲的、自豪的、得意的、令人自豪的",
        "unit": 18,
        "example": "Her parents were proud of her good grades.",
        "exampleZh": "她的父母為她的好成績感到自豪。"
    },
    {
        "id": 31320,
        "en": "prove",
        "kk": "[pruv]",
        "uk": "/pruːv/",
        "zh": "vt. 證明、證實、證明是、結果是",
        "unit": 18,
        "example": "Can you prove that this is true?",
        "exampleZh": "你能證明這是真的嗎？"
    },
    {
        "id": 31321,
        "en": "provide",
        "kk": "[prəˋvaɪd]",
        "uk": "/prəˈvaɪd/",
        "zh": "vt. 提供、供給、配備、準備好",
        "unit": 18,
        "example": "They provide warm meals to poor people.",
        "exampleZh": "他們提供熱食給貧困的人們。"
    },
    {
        "id": 31322,
        "en": "public",
        "kk": "[ˋpʌblɪk]",
        "uk": "/ˈpʌblɪk/",
        "zh": "adj. 公共的、公眾的、大眾的、公用的；n. 公眾、大眾、志趣相投（或從事同一類活動、具有共同特徵）的群體、讀者",
        "unit": 18,
        "example": "Do not yell in public places, please.",
        "exampleZh": "在公共場所請不要大聲喊叫。"
    },
    {
        "id": 31323,
        "en": "pull",
        "kk": "[pʊl]",
        "uk": "/pʊl/",
        "zh": "v. 拉、拽、拖動、移走；n. 拖、拉、拽、力",
        "unit": 18,
        "example": "You push and I'll pull.",
        "exampleZh": "你推，我拉。"
    },
    {
        "id": 31324,
        "en": "pump",
        "kk": "[pʌmp]",
        "uk": "/pʌmp/",
        "zh": "n. 泵、抽水機、平底鞋、輕軟舞鞋；vt. 用泵（或泵樣器官等）輸送、快速上下（或內外）運動",
        "unit": 18,
        "example": "The pump sucks air out through the valve.",
        "exampleZh": "氣泵透過閥門把空氣抽出去。"
    },
    {
        "id": 31325,
        "en": "pumpkin",
        "kk": "[ˋpʌmpkɪn]",
        "uk": "/ˈpʌmpkɪn/",
        "zh": "n. 南瓜、倭瓜、南瓜藤、小南瓜",
        "unit": 18,
        "example": "We made soup with fresh pumpkin.",
        "exampleZh": "我們用新鮮的南瓜煮了湯。"
    },
    {
        "id": 31326,
        "en": "punish",
        "kk": "[ˋpʌnɪʃ]",
        "uk": "/ˈpʌnɪʃ/",
        "zh": "vt. 處罰、懲罰、懲處、利用",
        "unit": 18,
        "example": "Teachers should not punish students without reason.",
        "exampleZh": "老師不應該無故處罰學生。"
    },
    {
        "id": 31327,
        "en": "puppy",
        "kk": "[ˋpʌpi]",
        "uk": "/ˈpʌpi/",
        "zh": "n. 小狗、幼犬、自負（或傲慢）的年輕人、玩意兒",
        "unit": 18,
        "example": "The cute puppy ran to me.",
        "exampleZh": "那隻可愛的小狗向我跑來。"
    },
    {
        "id": 31328,
        "en": "purple",
        "kk": "[ˋpɝpəl]",
        "uk": "/ˈpɜːp(ə)l/",
        "zh": "adj. 紫色的、紫紅色的、詞藻華麗的、華而不實的；n. 紫色、紫紅色、紫色衣服、深紅色染料；v. 成紫色、發紫",
        "unit": 18,
        "example": "She wore a lovely purple dress today.",
        "exampleZh": "她今天穿了一件可愛的紫色洋裝。"
    },
    {
        "id": 31329,
        "en": "purpose",
        "kk": "[ˋpɝpəs]",
        "uk": "/ˈpɜːpəs/",
        "zh": "n. 目的、意圖、目標、計劃；v. 有意、打算",
        "unit": 18,
        "example": "What is the purpose of your visit?",
        "exampleZh": "你這次造訪的目的是什麼？"
    },
    {
        "id": 31330,
        "en": "purse",
        "kk": "[pɝs]",
        "uk": "/pɜːs/",
        "zh": "n. 錢包、皮夾子、手提包、手袋；vt. 噘嘴、撮起嘴唇",
        "unit": 18,
        "example": "She closed her purse with a snap.",
        "exampleZh": "她啪嗒一聲合上了錢包。"
    },
    {
        "id": 31331,
        "en": "push",
        "kk": "[pʊʃ]",
        "uk": "/pʊʃ/",
        "zh": "v. 推、移動、按、擠；n. 推動、推、按、努力",
        "unit": 18,
        "example": "You push and I'll pull.",
        "exampleZh": "你推，我拉。"
    },
    {
        "id": 31332,
        "en": "put",
        "kk": "[pʊt]",
        "uk": "/pʊt/",
        "zh": "vt. 放置、放、猛推、用力插入；n. 投擲、推、putoption的簡稱；adj. 固定不動的",
        "unit": 18,
        "example": "Danny put down his glass.",
        "exampleZh": "丹尼放下杯子。"
    },
    {
        "id": 31333,
        "en": "puzzle",
        "kk": "[ˋpʌzəl]",
        "uk": "/ˈpʌz(ə)l/",
        "zh": "v. 使困惑、使迷惑、苦思、冥思苦想；n. 拼圖遊戲、測驗智力（或知識）的遊戲、拼圖玩具",
        "unit": 18,
        "example": "This puzzle is fun to solve.",
        "exampleZh": "這個拼圖玩起來很有趣。"
    },
    {
        "id": 31334,
        "en": "quality",
        "kk": "[ˋkwɑləti]",
        "uk": "/ˈkwɒləti/",
        "zh": "n. 品質、質量、優質、上乘；adj. 優質的、高質量的、內容嚴肅的、高階的",
        "unit": 18,
        "example": "This shop sells good quality food.",
        "exampleZh": "這家店販售品質優良的食物。"
    },
    {
        "id": 31335,
        "en": "quantity",
        "kk": "[ˋkwɑntəti]",
        "uk": "/ˈkwɒntəti/",
        "zh": "n. 量、數目、大量、大批",
        "unit": 18,
        "example": "We buy food in large quantity.",
        "exampleZh": "我們大量購買食物。"
    },
    {
        "id": 31336,
        "en": "quarter",
        "kk": "[ˋkwɔrtɚ]",
        "uk": "/ˈkwɔːtə(r)/",
        "zh": "n. 四分之一、一刻鐘、十五分鐘、季度；vt. 將……四等分、把……降至原先的四分之一、提供食宿、在（某處）來回走動；adj. 四分之一的",
        "unit": 18,
        "example": "It is a quarter past five.",
        "exampleZh": "現在是五點十五分。"
    },
    {
        "id": 31337,
        "en": "queen",
        "kk": "[kwin]",
        "uk": "/kwiːn/",
        "zh": "n. 女王、女首領、王后、出眾的女子；v. 使（兵）變後、對……擺架子、對……專橫跋扈、使……成為女王或王后",
        "unit": 18,
        "example": "The queen wore a shiny gold crown.",
        "exampleZh": "女王戴著一頂閃亮的金王冠。"
    },
    {
        "id": 31338,
        "en": "question",
        "kk": "[ˋkwɛstʃən]",
        "uk": "/ˈkwestʃən/",
        "zh": "n. 問題、疑問、試題、題目；vt. 質疑、向……提出問題、盤問、對……提出質疑",
        "unit": 18,
        "example": "That's a very hard question.",
        "exampleZh": "這是一個非常難的問題。"
    },
    {
        "id": 31339,
        "en": "quick",
        "kk": "[kwɪk]",
        "uk": "/kwɪk/",
        "zh": "adj. 迅速的、快的、持續時間很短的、短暫的；adv. 以很快的速度、迅速發生地、很快發生地；n. 活肉、要害、核心、活著的人們；int. 快、快點",
        "unit": 18,
        "example": "He kept giving quick blinks.",
        "exampleZh": "他不停地快速眨眼。"
    },
    {
        "id": 31340,
        "en": "quiet",
        "kk": "[ˋkwaɪət]",
        "uk": "/ˈkwaɪət/",
        "zh": "adj. 安靜的、輕聲的、不出聲的、沉默寡言的；n. 寧靜、安靜、靜謐；v. 平靜、安靜、消除、減輕",
        "unit": 18,
        "example": "Please be quiet in the study room.",
        "exampleZh": "在書房裡請保持安靜。"
    },
    {
        "id": 31341,
        "en": "quit",
        "kk": "[kwɪt]",
        "uk": "/kwɪt/",
        "zh": "vt. 停止、戒掉、離開、離任；adj. 擺脫了……的、已經了結的；n. 辭職、離任",
        "unit": 18,
        "example": "He quit his job as an office boy.",
        "exampleZh": "他辭去了辦公室勤雜工的工作。"
    },
    {
        "id": 31342,
        "en": "quite",
        "kk": "[kwaɪt]",
        "uk": "/kwaɪt/",
        "zh": "adv. 相當地、相當、很、非常",
        "unit": 18,
        "example": "I worked quite irregular hours.",
        "exampleZh": "我的工作時間很不規律。"
    },
    {
        "id": 31343,
        "en": "quiz",
        "kk": "[kwɪz]",
        "uk": "/kwɪz/",
        "zh": "n. 問答比賽、智力競賽、小測驗、詢問；vt. 詢問、審問、測驗、好奇地（或仔細地）打量",
        "unit": 18,
        "example": "We took a short math quiz.",
        "exampleZh": "我們做了一次簡短的數學小考。"
    },
    {
        "id": 31344,
        "en": "rabbit",
        "kk": "[ˋræbət]",
        "uk": "/ˈræbɪt/",
        "zh": "n. 兔子、兔、兔肉、兔毛；v. 獵兔、喋喋不休、嘮叨、快速移動",
        "unit": 18,
        "example": "The white rabbit likes sweet grass.",
        "exampleZh": "那隻白兔喜歡甜甜的草。"
    },
    {
        "id": 31345,
        "en": "race",
        "kk": "[res]",
        "uk": "/reɪs/",
        "zh": "n. 種族、賽跑、速度競賽、競爭；v. 賽跑、比賽、參加比賽、使（動物或車輛）參賽參賽",
        "unit": 18,
        "example": "He won the ten mile race today.",
        "exampleZh": "他今天贏得了十英里的比賽。"
    },
    {
        "id": 31346,
        "en": "radio",
        "kk": "[ˋredi͵o]",
        "uk": "/ˈreɪdiəʊ/",
        "zh": "n. 收音機、無線電收發裝置、無線電通訊、無線電廣播節目；vt. 用無線電通訊",
        "unit": 18,
        "example": "My father likes to hear the radio.",
        "exampleZh": "我父親喜歡聽收音機廣播。"
    },
    {
        "id": 31347,
        "en": "railroad",
        "kk": "[ˋrel͵rod]",
        "uk": "/ˈreɪlrəʊd/",
        "zh": "n. 鐵路、鐵軌、鐵路公司、鐵路部門；vt. 迫使……倉促行事、強迫……做、迫使……草率透過、輕率判處",
        "unit": 18,
        "example": "Do not walk on the railroad tracks.",
        "exampleZh": "不要走在鐵軌上面。"
    },
    {
        "id": 31348,
        "en": "rain",
        "kk": "[ren]",
        "uk": "/reɪn/",
        "zh": "n. 雨、雨水、雨季、一陣；v. 下雨、大量降落、雨點般落下、如雨般地猛擊",
        "unit": 18,
        "example": "I like to walk in the rain.",
        "exampleZh": "我喜歡在雨中漫步。"
    },
    {
        "id": 31349,
        "en": "rainbow",
        "kk": "[ˋren͵bo]",
        "uk": "/ˈreɪnbəʊ/",
        "zh": "n. 彩虹、眾多花色品種、五顏六色的組合、五花八門的聚合；adj. 不同種族（或文化等）人群的",
        "unit": 18,
        "example": "A bright rainbow rose in the sky.",
        "exampleZh": "一道明亮的彩虹出現在天空中。"
    },
    {
        "id": 31350,
        "en": "rainy",
        "kk": "[ˋreni]",
        "uk": "/ˈreɪni/",
        "zh": "adj. 多雨的、下雨的",
        "unit": 18,
        "example": "Take an umbrella on a rainy day.",
        "exampleZh": "在下雨天要帶一把傘。"
    },
    {
        "id": 31351,
        "en": "raise",
        "kk": "[rez]",
        "uk": "/reɪz/",
        "zh": "vt. 提高、提起、舉起、直立；n. 加薪、賭注加碼、（持槓鈴時的）提",
        "unit": 18,
        "example": "Please raise your hand to speak up.",
        "exampleZh": "想要發言請先舉手。"
    },
    {
        "id": 31352,
        "en": "range",
        "kk": "[rendʒ]",
        "uk": "/reɪndʒ/",
        "zh": "n. 範圍、界限、視覺（或聽覺）範圍、射程；vi. 變化、變動、排列、排序；adj. 有秩序的、安定的",
        "unit": 18,
        "example": "The shop has a wide range.",
        "exampleZh": "這家商店的種類範圍很廣。"
    },
    {
        "id": 31353,
        "en": "rare",
        "kk": "[rɛr]",
        "uk": "/reə(r)/",
        "zh": "adj. 稀少的、少見的、不常發生的、稀罕的",
        "unit": 18,
        "example": "It is rare to see snow here.",
        "exampleZh": "在這裡看見下雪是很罕見的。"
    },
    {
        "id": 31354,
        "en": "rat",
        "kk": "[ræt]",
        "uk": "/ræt/",
        "zh": "n. 老鼠、卑鄙小人、常客、常待在某處的人；vi. 捕（捉）老鼠、滅鼠、告發、告密；int. 胡說、去你的",
        "unit": 18,
        "example": "A brown rat ran across the room.",
        "exampleZh": "一隻棕色的老鼠跑過了房間。"
    },
    {
        "id": 31355,
        "en": "rather",
        "kk": "[ˋræðɚ]",
        "uk": "/ˈrɑːðə(r)/",
        "zh": "adv. 稍微、頗、相當、寧願；int. 當然、的確",
        "unit": 18,
        "example": "I would rather stay home than go.",
        "exampleZh": "我寧願待在家裡也不想出門。"
    },
    {
        "id": 31356,
        "en": "reach",
        "kk": "[ritʃ]",
        "uk": "/riːtʃ/",
        "zh": "v. 到達、抵達、被看見、被聽到；n. 伸出、伸手可及的距離、可到達的距離、能及的範圍",
        "unit": 18,
        "example": "Can you reach that high book shelf?",
        "exampleZh": "你碰得到那麼高的書架嗎？"
    },
    {
        "id": 31357,
        "en": "read",
        "kk": "[rɛd]",
        "uk": "/riːd/",
        "zh": "v. 閱讀、讀懂、朗讀、讀到；n. 閱讀、閱讀時間、讀物、解釋；adj. 博學的、有學問的",
        "unit": 18,
        "example": "I like to read books before bed.",
        "exampleZh": "我喜歡在睡前看書。"
    },
    {
        "id": 31358,
        "en": "ready",
        "kk": "[ˋrɛdi]",
        "uk": "/ˈredi/",
        "zh": "adj. 準備好（做某事）的、預先備好的、可供使用的；n. 現款、預備好的狀態；adv. 已做完、已完成；vt. 做好……的準備",
        "unit": 18,
        "example": "Dinner is ready on the table now.",
        "exampleZh": "晚餐現在已經在桌上準備好了。"
    },
    {
        "id": 31359,
        "en": "real",
        "kk": "[ril]",
        "uk": "/ˈriːəl/",
        "zh": "adj. 真的、實際存在的、非想象的、名副其實的；adv. 很、非常地",
        "unit": 18,
        "example": "She's a real cosmopolitan.",
        "exampleZh": "她是一位真正的國際主義者。"
    },
    {
        "id": 31360,
        "en": "realize",
        "kk": "[ˋriə͵laɪz]",
        "uk": "/ˈriːəlaɪz/",
        "zh": "vt. 瞭解、意識到、發生、產生",
        "unit": 18,
        "example": "I did not realize you were here.",
        "exampleZh": "我剛剛沒有意識到你在這裡。"
    },
    {
        "id": 31361,
        "en": "really",
        "kk": "[ˋrɪli]",
        "uk": "/ˈriːəli/",
        "zh": "adv. 真實地、真正地、事實上、確實的；int. 真的、真是的！、是啊！",
        "unit": 18,
        "example": "I really love this sweet cake.",
        "exampleZh": "我真的很喜歡這個甜蛋糕。"
    },
    {
        "id": 31362,
        "en": "reason",
        "kk": "[ˋrizən]",
        "uk": "/ˈriːz(ə)n/",
        "zh": "n. 原因、理由、充分理由、正當理由；vt. 推理、邏輯思考、推論出、推斷出",
        "unit": 18,
        "example": "Give me one good reason to go.",
        "exampleZh": "給我一個去的充分理由。"
    },
    {
        "id": 31363,
        "en": "receive",
        "kk": "[rəˋsiv]",
        "uk": "/rɪˈsiːv/",
        "zh": "vt. 收到、得到、遭受、經受",
        "unit": 18,
        "example": "I receive a gift from my friend.",
        "exampleZh": "我收到朋友送的一件禮物。"
    },
    {
        "id": 31364,
        "en": "record",
        "kk": "[rəˋkɔrd]",
        "uk": "/ˈrekɔːd; rɪˈkɔːd/",
        "zh": "n. 記錄、記載、經歷、最佳紀錄；vt. 錄音、記錄、記載、錄製；adj. 創紀錄的",
        "unit": 18,
        "example": "He set a new world record.",
        "exampleZh": "他創下了新的世界紀錄。"
    },
    {
        "id": 31365,
        "en": "recover",
        "kk": "[rɪˋkʌvɚ]",
        "uk": "/rɪˈkʌvə(r)/",
        "zh": "v. 康復、恢復、復原、好轉；n. 槍還原、收槍",
        "unit": 18,
        "example": "She will recover from the cold.",
        "exampleZh": "她的感冒將會康復。"
    },
    {
        "id": 31366,
        "en": "rectangle",
        "kk": "[ˋrɛktæŋɡəl]",
        "uk": "/ˈrektæŋɡl/",
        "zh": "n. 長方形、矩形",
        "unit": 18,
        "example": "Draw a big rectangle on paper.",
        "exampleZh": "在紙上畫一個大長方形。"
    },
    {
        "id": 31367,
        "en": "recycle",
        "kk": "[riˋsaɪkəl]",
        "uk": "/ˌriːˈsaɪkl/",
        "zh": "vt. 回收、回收利用、再利用、送入回收加工廠；n. 回收利用、迴圈使用",
        "unit": 18,
        "example": "We recycle old paper each week.",
        "exampleZh": "我們每週都回收廢紙。"
    },
    {
        "id": 31368,
        "en": "red",
        "kk": "[rɛd]",
        "uk": "/red/",
        "zh": "adj. 紅色的、紅的、紅褐色的、漲紅的；v. 整理；n. 紅色、紅顏料、紅衣、紅葡萄酒",
        "unit": 18,
        "example": "She has a bright red school bag.",
        "exampleZh": "她有一個鮮紅色的書包。"
    },
    {
        "id": 31369,
        "en": "refrigerator",
        "kk": "[rəˋfrɪdʒɚ͵etɚ]",
        "uk": "/rɪˈfrɪdʒəreɪtə(r)/",
        "zh": "n. 冰箱、冷藏庫",
        "unit": 18,
        "example": "Put the milk into the refrigerator.",
        "exampleZh": "把牛奶放進冰箱裡。"
    },
    {
        "id": 31370,
        "en": "refuse",
        "kk": "[rəˋfjuz]",
        "uk": "/rɪˈfjuːz/",
        "zh": "vt. 拒絕、回絕、不接受、拒絕給；n. 垃圾、廢棄物；adj. 廢棄的",
        "unit": 18,
        "example": "I could hardly refuse, could I?",
        "exampleZh": "我很難拒絕，不是嗎？"
    },
    {
        "id": 31371,
        "en": "regard",
        "kk": "[rɪˋɡɑrd]",
        "uk": "/rɪˈɡɑːd/",
        "zh": "vt. 事項、認為、把……看作、注視；n. 問候、尊重、敬佩、關心",
        "unit": 18,
        "example": "I regard him as my brother.",
        "exampleZh": "我把他當作我的兄弟。"
    },
    {
        "id": 31372,
        "en": "regret",
        "kk": "[rəˋɡrɛt]",
        "uk": "/rɪˈɡret/",
        "zh": "vt. 懊悔、惋惜、對......感到抱歉、對......感到遺憾；n. 遺憾、惋惜、致歉語",
        "unit": 18,
        "example": "I deeply regret what I said.",
        "exampleZh": "我非常後悔說了那些話。"
    },
    {
        "id": 31373,
        "en": "regular",
        "kk": "[ˋrɛɡjəlɚ]",
        "uk": "/ˈreɡjələ(r)/",
        "zh": "adj. 定期的、規律的、經常的、頻繁的；n. 常客、老主顧、主演、主力隊員",
        "unit": 18,
        "example": "She has regular meals every day.",
        "exampleZh": "她每天定時用餐。"
    },
    {
        "id": 31374,
        "en": "reject",
        "kk": "[rɪˋdʒɛkt]",
        "uk": "/rɪˈdʒekt/",
        "zh": "vt. 拒絕、否決、擯棄、不接受；n. 次品、廢品、不合格者、被排斥者",
        "unit": 18,
        "example": "They had to reject his job request.",
        "exampleZh": "他們不得不拒絕他的求職申請。"
    },
    {
        "id": 31375,
        "en": "relation",
        "kk": "[riˋleʃən]",
        "uk": "/rɪˈleɪʃ(ə)n/",
        "zh": "n. 聯絡、（正式）關係、性關係",
        "unit": 18,
        "example": "They have a good work relation.",
        "exampleZh": "他們有良好的工作關係。"
    },
    {
        "id": 31376,
        "en": "relative",
        "kk": "[ˋrɛlətɪv]",
        "uk": "/ˈrelətɪv/",
        "zh": "n. 親戚、親屬、同類事物、親緣動物；adj. 相比較而言的、比較的、相對的、相關聯的",
        "unit": 18,
        "example": "My relative came to visit us.",
        "exampleZh": "我的親戚來拜訪我們了。"
    },
    {
        "id": 31377,
        "en": "remember",
        "kk": "[rɪˋmɛmbɚ]",
        "uk": "/rɪˈmembə(r)/",
        "zh": "vt. 記得、回想起、記起、憶起",
        "unit": 18,
        "example": "Please remember to close the front door.",
        "exampleZh": "請記得關上前門。"
    },
    {
        "id": 31378,
        "en": "remind",
        "kk": "[riˋmaɪnd]",
        "uk": "/rɪˈmaɪnd/",
        "zh": "vt. 提醒、使想起、使聯想起",
        "unit": 18,
        "example": "Remind me to phone Alan before I go out.",
        "exampleZh": "提醒我在出去之前給艾倫打電話。"
    },
    {
        "id": 31379,
        "en": "rent",
        "kk": "[rɛnt]",
        "uk": "/rent/",
        "zh": "n. 租金、租用費、破洞、裂口；vt. 租用、租借、出租、將……租給",
        "unit": 18,
        "example": "They rent a small house here.",
        "exampleZh": "他們在這裡租了一間小房子。"
    },
    {
        "id": 31380,
        "en": "repair",
        "kk": "[rɪˋpɛr]",
        "uk": "/rɪˈpeə(r)/",
        "zh": "vt. 修理、修補、補救、挽救；n. 修理、補救、修補過的地方、維修狀態",
        "unit": 18,
        "example": "I took my bike in for repair.",
        "exampleZh": "我把腳踏車送去修了。"
    },
    {
        "id": 31381,
        "en": "repeat",
        "kk": "[rɪˋpit]",
        "uk": "/rɪˈpiːt/",
        "zh": "vt. 重複、重說、複述、跟讀；n. 重演、重現、重播節目、再次運送",
        "unit": 18,
        "example": "Please repeat that after me now.",
        "exampleZh": "現在請跟我重複念一次。"
    },
    {
        "id": 31382,
        "en": "reply",
        "kk": "[rɪpˋlaɪ]",
        "uk": "/rɪˈplaɪ/",
        "zh": "v. 回答、答覆、作出回應、回擊；n. 回答、答覆、回應、作出反應",
        "unit": 18,
        "example": "He did not reply to me.",
        "exampleZh": "他沒有回答我。"
    },
    {
        "id": 31383,
        "en": "report",
        "kk": "[riˋpɔrt]",
        "uk": "/rɪˈpɔːt/",
        "zh": "n. 報告、彙報、新聞報道、官方檔案；v. 報導、報道、據說、傳聞",
        "unit": 18,
        "example": "He must write a book report today.",
        "exampleZh": "他今天必須寫一份讀書報告。"
    },
    {
        "id": 31384,
        "en": "reporter",
        "kk": "[rɪˋpɔrtɚ]",
        "uk": "/rɪˈpɔːtə(r)/",
        "zh": "n. 記者、通訊員",
        "unit": 18,
        "example": "The reporter asked for my name.",
        "exampleZh": "那名記者詢問了我的名字。"
    },
    {
        "id": 31385,
        "en": "require",
        "kk": "[͵rikˋwaɪɚ]",
        "uk": "/rɪˈkwaɪə(r)/",
        "zh": "vt. 需要、要求做、規定",
        "unit": 18,
        "example": "These plants require plenty of fresh water.",
        "exampleZh": "這些植物需要充足的新鮮水分。"
    },
    {
        "id": 31386,
        "en": "respect",
        "kk": "[rɪˋspɛkt]",
        "uk": "/rɪˈspekt/",
        "zh": "n. 尊敬、敬重、重視、尊重；vt. 尊敬、敬佩、慎重對待、尊重；int. 真了不起",
        "unit": 18,
        "example": "I respect him as a doctor.",
        "exampleZh": "我尊敬他這個醫生。"
    },
    {
        "id": 31387,
        "en": "responsible",
        "kk": "[riˋspɑnsəbəl]",
        "uk": "/rɪˈspɒnsəb(ə)l/",
        "zh": "adj. 有責任的、負責的、負有責任的、應承擔責任的",
        "unit": 18,
        "example": "He is a responsible boy who finishes tasks.",
        "exampleZh": "他是個會完成任務的負責任男孩。"
    },
    {
        "id": 31388,
        "en": "rest",
        "kk": "[rɛst]",
        "uk": "/rest/",
        "zh": "v. 休息、歇息、使（運動員）暫時離隊；n. 休息、剩餘部分、餘下的人（物）、靜止",
        "unit": 18,
        "example": "Let's rest under yonder tree.",
        "exampleZh": "我們在那棵樹下休息吧。"
    },
    {
        "id": 31389,
        "en": "restaurant",
        "kk": "[ˋrɛstɚ͵ɑnt]",
        "uk": "/ˈrestrɒnt/",
        "zh": "n. 餐廳、餐館、飯店",
        "unit": 18,
        "example": "We ate dinner at that restaurant.",
        "exampleZh": "我們在那家餐廳吃了晚餐。"
    },
    {
        "id": 31390,
        "en": "restroom",
        "kk": "[ˋrɛ͵strum]",
        "uk": "/ˈrestruːm; ˈrestrʊm/",
        "zh": "n. 洗手間、盥洗室、休息室",
        "unit": 18,
        "example": "The girl went into the restroom with a blush.",
        "exampleZh": "女孩紅著臉走入了洗手間。"
    },
    {
        "id": 31391,
        "en": "result",
        "kk": "[rɪˋzʌlt]",
        "uk": "/rɪˈzʌlt/",
        "zh": "n. 結果、後果、考試成績、成效；vi. 導致、發生、產生、造成；int. 成功了！",
        "unit": 18,
        "example": "They were elated at the result.",
        "exampleZh": "他們對這一結果感到歡欣鼓舞。"
    },
    {
        "id": 31392,
        "en": "return",
        "kk": "[rɪˋtɝn]",
        "uk": "/rɪˈtɜːn/",
        "zh": "v. 返回、回來、回去、歸還；n. 歸還、回來、返回、退回；adj. 雙程的、往返的、返回的、返程的",
        "unit": 18,
        "example": "I will return home before six o'clock.",
        "exampleZh": "我會在六點之前回到家。"
    },
    {
        "id": 31393,
        "en": "review",
        "kk": "[͵riˋvju]",
        "uk": "/rɪˈvjuː/",
        "zh": "n. 評論、審查、檢查、評論文章；vt. 複習、仔細研究、審視、給（書、戲劇、電影等）寫評論",
        "unit": 18,
        "example": "I will review the lesson today.",
        "exampleZh": "我今天會複習這堂課。"
    },
    {
        "id": 31394,
        "en": "revise",
        "kk": "[rɪˋvaɪz]",
        "uk": "/rɪˈvaɪz/",
        "zh": "v. 改變、修正、修改、修訂；n. 修訂、校訂、改樣",
        "unit": 18,
        "example": "Please revise your paper before class.",
        "exampleZh": "請在上課前修改你的作業。"
    },
    {
        "id": 31395,
        "en": "rice",
        "kk": "[raɪs]",
        "uk": "/raɪs/",
        "zh": "n. 米、稻、水稻、大米；vt. 把……搗成米糊狀、把（熟馬鈴薯等）壓（或擦）成米粒狀",
        "unit": 18,
        "example": "We eat rice every single day.",
        "exampleZh": "我們每天都吃米飯。"
    },
    {
        "id": 31396,
        "en": "rich",
        "kk": "[rɪtʃ]",
        "uk": "/rɪtʃ/",
        "zh": "adj. 有錢的、富有的、富含……的、豐富的",
        "unit": 18,
        "example": "They must be stinking rich.",
        "exampleZh": "他們一定很有錢。"
    },
    {
        "id": 31397,
        "en": "ride",
        "kk": "[raɪd]",
        "uk": "/raɪd/",
        "zh": "v. 騎、騎馬、騎車、乘坐；n. 乘坐、乘騎旅行、搭乘旅行、大型遊樂設施",
        "unit": 18,
        "example": "They hitched a ride in a truck.",
        "exampleZh": "他們搭乘了一輛路過的貨車。"
    },
    {
        "id": 31398,
        "en": "right",
        "kk": "[raɪt]",
        "uk": "/raɪt/",
        "zh": "adj. 正確的、對的、右邊的、適當的；adv. 正好、直接地、向右；n. 權利、右邊、正當",
        "unit": 18,
        "example": "Turn right at the next red light.",
        "exampleZh": "在下個紅綠燈向右轉。"
    },
    {
        "id": 31399,
        "en": "ring",
        "kk": "[rɪŋ]",
        "uk": "/rɪŋ/",
        "zh": "n. 戒指、指環、環狀物、圈形物；v. 響、包圍、繞……畫圓、把……圈起來",
        "unit": 18,
        "example": "I'll give you a ring tomorrow.",
        "exampleZh": "明天我會打電話給你。"
    },
    {
        "id": 31400,
        "en": "rise",
        "kk": "[raɪz]",
        "uk": "/raɪz/",
        "zh": "vi. 上升、增加、升高、起身；n. 增加、改善、加薪",
        "unit": 18,
        "example": "The sun will rise in the east.",
        "exampleZh": "太陽將從東方升起。"
    },
    {
        "id": 31401,
        "en": "river",
        "kk": "[ˋrɪvɚ]",
        "uk": "/ˈrɪvə(r)/",
        "zh": "n. 河流、河、江",
        "unit": 18,
        "example": "We sat by the quiet river bank.",
        "exampleZh": "我們坐在安靜的河岸邊。"
    },
    {
        "id": 31402,
        "en": "road",
        "kk": "[rod]",
        "uk": "/rəʊd/",
        "zh": "n. 道路、路、公路、馬路",
        "unit": 18,
        "example": "Look both ways before you cross the road.",
        "exampleZh": "過馬路前請看兩邊。"
    },
    {
        "id": 31403,
        "en": "rob",
        "kk": "[rɑb]",
        "uk": "/rɒb/",
        "zh": "vt. 搶劫、盜取、使喪失、剝奪",
        "unit": 18,
        "example": "They tried to rob the bank.",
        "exampleZh": "他們試圖搶劫那家銀行。"
    },
    {
        "id": 31404,
        "en": "robot",
        "kk": "[ˋro͵bɑt]",
        "uk": "/ˈrəʊbɒt/",
        "zh": "n. 機器人、自動操作裝置、機器般的人、自動交通訊號機",
        "unit": 18,
        "example": "The toy robot can walk and talk.",
        "exampleZh": "這個玩具機器人會走又會說話。"
    },
    {
        "id": 31405,
        "en": "rock",
        "kk": "[rɑk]",
        "uk": "/rɒk/",
        "zh": "n. 岩石、礁石、巖塊、大石塊；vt. 搖擺、輕輕搖晃、緩緩擺動、劇烈搖擺",
        "unit": 18,
        "example": "A big rock fell on the road.",
        "exampleZh": "一塊大石頭掉落在路上。"
    },
    {
        "id": 31406,
        "en": "role",
        "kk": "[rol]",
        "uk": "/rəʊl/",
        "zh": "n. 角色、作用、職責",
        "unit": 18,
        "example": "She played a big role here.",
        "exampleZh": "她在這裡扮演了重要的角色。"
    },
    {
        "id": 31407,
        "en": "roll",
        "kk": "[rol]",
        "uk": "/rəʊl/",
        "zh": "v. 翻滾、滾動、翻身、翻轉；n. 卷、卷軸、卷狀食品、贅肉",
        "unit": 18,
        "example": "Comedy is the new rock and roll.",
        "exampleZh": "說笑表演風頭直追搖滾樂。"
    },
    {
        "id": 31408,
        "en": "roof",
        "kk": "[ruf]",
        "uk": "/ruːf/",
        "zh": "n. 屋頂、車頂、頂部、口腔頂部；v. 給…………蓋上屋頂、覆遮、給......蓋上屋頂、遮蔽",
        "unit": 18,
        "example": "A white bird sat on the roof.",
        "exampleZh": "一隻白鳥停在屋頂上。"
    },
    {
        "id": 31409,
        "en": "room",
        "kk": "[rum]",
        "uk": "/ruːm/",
        "zh": "n. 房間、室、客房、住所；vi. 租房、合住、讓……同住",
        "unit": 18,
        "example": "This room faces west.",
        "exampleZh": "這個房間朝西。"
    },
    {
        "id": 31410,
        "en": "root",
        "kk": "[rut]",
        "uk": "/ruːt/",
        "zh": "n. 根、根莖、根部、底部；v. 生根、紮根於、在……中根深蒂固、根源在於；adj. 塊根的、根莖可食用的",
        "unit": 18,
        "example": "The deep root helps the tree stand.",
        "exampleZh": "深根幫助這棵樹屹立不倒。"
    },
    {
        "id": 31411,
        "en": "rope",
        "kk": "[rop]",
        "uk": "/rəʊp/",
        "zh": "n. 粗繩、繩索、（一）串、條；vt. 用繩子捆、用繩套捕捉、用繩（或帶子）圍起（或隔開）、借繩爬下/借繩登山",
        "unit": 18,
        "example": "He tied the box with strong rope.",
        "exampleZh": "他用結實的粗繩把箱子綁緊。"
    },
    {
        "id": 31412,
        "en": "rose",
        "kk": "[roz]",
        "uk": "/rəʊz/",
        "zh": "n. 玫瑰、薔薇、玫瑰形物、玫瑰花飾；v. 使成玫瑰色、使變紅、增加、提高",
        "unit": 18,
        "example": "The price of gas rose.",
        "exampleZh": "天然氣價格上漲。"
    },
    {
        "id": 31413,
        "en": "round",
        "kk": "[raʊnd]",
        "uk": "/raʊnd/",
        "zh": "adj. 圓形的、球形的、弧形的、微胖的；adv. 旋轉、環繞、周長、在周圍；prep. 環繞、圍繞、繞過、在另一側；n. 輪次、局、場、一系列常規活動；vt. 環繞、繞過、成圓形、變圓",
        "unit": 18,
        "example": "The earth is big and round.",
        "exampleZh": "地球又大又圓。"
    },
    {
        "id": 31414,
        "en": "row",
        "kk": "[ro]",
        "uk": "/rəʊ/",
        "zh": "n. 一排、一行、一排座位、街；vt. 劃、划船送、參加划船比賽、爭吵",
        "unit": 18,
        "example": "I took Daniel for a row.",
        "exampleZh": "我帶丹尼爾吵了一架。"
    },
    {
        "id": 31415,
        "en": "royal",
        "kk": "[ˋrɔɪəl]",
        "uk": "/ˈrɔɪəl/",
        "zh": "adj. 皇室的、國王的、女王的、王室的；n. 王室成員、敲奉十口鐘的變換響",
        "unit": 18,
        "example": "The royal family lives in a grand castle.",
        "exampleZh": "王室一家人住在一座宏偉的城堡裡。"
    },
    {
        "id": 31416,
        "en": "rub",
        "kk": "[rʌb]",
        "uk": "/rʌb/",
        "zh": "v. 擦、磨擦、揉擦、按摩；n. 擦、揉、按摩膏、面膜",
        "unit": 18,
        "example": "She gave her knee a quick rub.",
        "exampleZh": "她快速地揉了揉膝蓋。"
    },
    {
        "id": 31417,
        "en": "rubber",
        "kk": "[ˋrʌbɚ]",
        "uk": "/ˈrʌbə(r)/",
        "zh": "n. 橡膠、合成橡膠、橡皮擦、黑板擦；adj. 橡膠製成的；v. 扭轉脖子看、好奇地引頸而望",
        "unit": 18,
        "example": "These rain boots are made of rubber.",
        "exampleZh": "這些雨靴是由橡膠製成的。"
    },
    {
        "id": 31418,
        "en": "rude",
        "kk": "[rud]",
        "uk": "/ruːd/",
        "zh": "adj. 粗魯的、無禮的、粗俗的、下流的",
        "unit": 18,
        "example": "It is rude to yell at other people.",
        "exampleZh": "對別人大吼大叫是很無禮的。"
    },
    {
        "id": 31419,
        "en": "ruin",
        "kk": "[ˋruən]",
        "uk": "/ˈruːɪn/",
        "zh": "n. 毀壞、毀滅、破產、身敗名裂；v. 毀壞、破壞、使（建築物，地方）破敗、使成為廢墟",
        "unit": 18,
        "example": "Heavy rain will ruin our picnic.",
        "exampleZh": "大雨會毀了我們的野餐。"
    },
    {
        "id": 31420,
        "en": "rule",
        "kk": "[rul]",
        "uk": "/ruːl/",
        "zh": "n. 規則、規章、條例、法則；vt. 統治、管轄、支配、控制",
        "unit": 18,
        "example": "That's a good rule to go by.",
        "exampleZh": "這是一個值得遵守的好規則。"
    },
    {
        "id": 31421,
        "en": "ruler",
        "kk": "[ˋrulɚ]",
        "uk": "/ˈruːlə(r)/",
        "zh": "n. 統治者、尺、管理者、尺子",
        "unit": 18,
        "example": "Use a ruler to draw lines.",
        "exampleZh": "用尺來畫線。"
    },
    {
        "id": 31422,
        "en": "run",
        "kk": "[rʌn]",
        "uk": "/rʌn/",
        "zh": "v. 跑、奔跑、經營、運轉；n. 跑步、賽跑、旅程",
        "unit": 18,
        "example": "The dogs run fast in the park.",
        "exampleZh": "狗狗們在公園裡跑得很快。"
    },
    {
        "id": 31423,
        "en": "rush",
        "kk": "[rʌʃ]",
        "uk": "/rʌʃ/",
        "zh": "v. 衝、奔、把（某人或某物）迅速送往、趕緊做；n. 衝、奔、湍流、匆忙",
        "unit": 18,
        "example": "Do not rush to leave now.",
        "exampleZh": "現在不要急著離開。"
    },
    {
        "id": 31424,
        "en": "sad",
        "kk": "[sæd]",
        "uk": "/sæd/",
        "zh": "adj. 悲傷的、傷心的、難過的、令人傷心的",
        "unit": 18,
        "example": "She feels sad about the bad news.",
        "exampleZh": "她對這個壞消息感到難過。"
    },
    {
        "id": 31425,
        "en": "safe",
        "kk": "[sef]",
        "uk": "/seɪf/",
        "zh": "adj. 安全的、平安的、不損害（或危害）健康的、謹慎的；n. 保險箱、陰莖套、安全套、紗櫥；int. 嗨、喂；adv. 安全地、平安地",
        "unit": 18,
        "example": "It is safe to cross the street.",
        "exampleZh": "過這條馬路是很安全的。"
    },
    {
        "id": 31426,
        "en": "safety",
        "kk": "[ˋsefti]",
        "uk": "/ˈseɪfti/",
        "zh": "n. 安全、安全性、安全場所、安全的地方；adj. 保障安全的",
        "unit": 18,
        "example": "Think of your safety at home.",
        "exampleZh": "在家要注意你的安全。"
    },
    {
        "id": 31427,
        "en": "sail",
        "kk": "[sel]",
        "uk": "/seɪl/",
        "zh": "v. 航行、啟航、駕駛、飄過；n. 帆、乘船航行、帆船的使用、瞭望塔",
        "unit": 18,
        "example": "Boats sail across the wide blue sea.",
        "exampleZh": "小船航行在寬闊蔚藍的大海上。"
    },
    {
        "id": 31428,
        "en": "sailor",
        "kk": "[ˋselɚ]",
        "uk": "/ˈseɪlə(r)/",
        "zh": "n. 水手、船員、駕船人、帆船駕駛者",
        "unit": 18,
        "example": "The old sailor loves the sea.",
        "exampleZh": "那位老水手熱愛大海。"
    },
    {
        "id": 31429,
        "en": "salad",
        "kk": "[ˋsæləd]",
        "uk": "/ˈsæləd/",
        "zh": "n. 沙拉、色拉、沙律、生菜",
        "unit": 18,
        "example": "Mom made a fresh green salad.",
        "exampleZh": "媽媽做了一道新鮮的生菜沙拉。"
    },
    {
        "id": 31430,
        "en": "sale",
        "kk": "[sel]",
        "uk": "/seɪl/",
        "zh": "n. 出售、銷售、銷售額、銷售活動",
        "unit": 18,
        "example": "These winter coats are on sale today.",
        "exampleZh": "這些冬天大衣今天特價銷售中。"
    },
    {
        "id": 31431,
        "en": "salt",
        "kk": "[sɔlt]",
        "uk": "/sɔːlt; sɒlt/",
        "zh": "n. 鹽、食鹽、鹽狀物（用於某種特殊目的的物質或藥品）、風趣；vt. 給（食物）加鹽調味、用鹽醃製（食物）；adj. 含鹽的、鹹的、用鹽醃製的、海生的",
        "unit": 18,
        "example": "Add a little salt to the soup.",
        "exampleZh": "在湯裡加一點鹽巴。"
    },
    {
        "id": 31432,
        "en": "same",
        "kk": "[sem]",
        "uk": "/seɪm/",
        "zh": "adj. 相同的、同一的、一模一樣的、沒有變化的；pron. 同樣的、同樣的人、同樣的事物、相同；adv. 同樣",
        "unit": 18,
        "example": "Mario said the very same thing.",
        "exampleZh": "馬裡奧也說過同樣的話。"
    },
    {
        "id": 31433,
        "en": "sample",
        "kk": "[ˋsæmpəl]",
        "uk": "/ˈsɑːmp(ə)l/",
        "zh": "n. 樣本、樣品、試用產品、試樣；vt. 品嚐、嘗試、體驗、對……作抽樣調查；adj. 樣品的、例項的",
        "unit": 18,
        "example": "Can I taste this free sample?",
        "exampleZh": "我可以品嚐這個免費試吃品嗎？"
    },
    {
        "id": 31434,
        "en": "sand",
        "kk": "[sænd]",
        "uk": "/sænd/",
        "zh": "n. 沙、沙子、沙堆、沙地；vt. 磨光、撒沙於、鋪沙於、使撒沙似地佈滿",
        "unit": 18,
        "example": "She traced a line in the sand.",
        "exampleZh": "她在沙上畫了一條線。"
    },
    {
        "id": 31435,
        "en": "sandwich",
        "kk": "[ˋsændwɪtʃ]",
        "uk": "/ˈsænwɪtʃ/",
        "zh": "n. 三明治、夾心麵包片、果醬（或奶油）夾心鬆蛋糕、夾心餅乾；vt. 插入、夾入、粘合、把……做成三明治",
        "unit": 18,
        "example": "She was eating a sandwich.",
        "exampleZh": "她正在吃一個三明治。"
    },
    {
        "id": 31436,
        "en": "satisfy",
        "kk": "[ˋsætə͵sfaɪ]",
        "uk": "/ˈsætɪsfaɪ/",
        "zh": "vt. 滿意、使滿意、使滿足、滿足",
        "unit": 18,
        "example": "Good food will satisfy your hungry stomach.",
        "exampleZh": "美食會滿足你飢餓的肚子。"
    },
    {
        "id": 31437,
        "en": "Saturday",
        "kk": "[ˋsætɚdi]",
        "uk": "/ˈsætədeɪ/",
        "zh": "n. 星期六、週六",
        "unit": 18,
        "example": "We play tennis every single Saturday.",
        "exampleZh": "我們每個星期六都打網球。"
    },
    {
        "id": 31438,
        "en": "sauce",
        "kk": "[sɔs]",
        "uk": "/sɔːs/",
        "zh": "n. 醬、調味汁、烈酒、無禮的話；v. 加醬汁於、用醬汁調味、使增加趣味、對……粗暴無禮",
        "unit": 18,
        "example": "The sauce is mostly cream.",
        "exampleZh": "這沙司主要是奶油。"
    },
    {
        "id": 31439,
        "en": "save",
        "kk": "[sev]",
        "uk": "/seɪv/",
        "zh": "v. 拯救、挽救、節省、儲蓄",
        "unit": 18,
        "example": "We try to save money every week.",
        "exampleZh": "我們每週都努力存錢。"
    },
    {
        "id": 31440,
        "en": "say",
        "kk": "[se]",
        "uk": "/seɪ/",
        "zh": "vt. 說、講、宣稱、說明；n. 發言權、決定權；int. 哎呀、喂",
        "unit": 18,
        "example": "He didn't even say sorry.",
        "exampleZh": "他甚至沒有說對不起。"
    },
    {
        "id": 31441,
        "en": "scare",
        "kk": "[skɛr]",
        "uk": "/skeə(r)/",
        "zh": "vt. 驚恐、使驚恐、嚇唬、害怕；n. 驚嚇、驚恐、大恐慌",
        "unit": 18,
        "example": "Loud noises scare the little baby.",
        "exampleZh": "大聲的噪音會嚇到小寶寶。"
    },
    {
        "id": 31442,
        "en": "scarf",
        "kk": "[skɑrf]",
        "uk": "/skɑːf/",
        "zh": "n. 圍巾、披巾、頭巾、斜面；v. 狼吞虎嚥地吃、嵌接、斜接、切割（鯨）脂",
        "unit": 18,
        "example": "She wore a warm red scarf.",
        "exampleZh": "她圍了一條溫暖的紅圍巾。"
    },
    {
        "id": 31443,
        "en": "scene",
        "kk": "[sin]",
        "uk": "/siːn/",
        "zh": "n. 風景、事發地、現場、事件",
        "unit": 18,
        "example": "It was a very lovely night scene.",
        "exampleZh": "那是一幅非常動人的夜間景象。"
    },
    {
        "id": 31444,
        "en": "scenery",
        "kk": "[ˋsinɚi]",
        "uk": "/ˈsiːnəri/",
        "zh": "n. 景色、風景、舞臺佈景",
        "unit": 18,
        "example": "The sea scenery is so pretty.",
        "exampleZh": "這片海景非常漂亮。"
    },
    {
        "id": 31445,
        "en": "school",
        "kk": "[skul]",
        "uk": "/skuːl/",
        "zh": "n. 學校、全校師生、上學時間、上學期間；v. 教育、培養、訓練、馴馬；adj. 受過西化教育的、源自西方的",
        "unit": 18,
        "example": "Which school do they attend?",
        "exampleZh": "他們上的是哪一所學校？"
    },
    {
        "id": 31446,
        "en": "science",
        "kk": "[ˋsaɪəns]",
        "uk": "/ˈsaɪəns/",
        "zh": "n. 科學、科學知識、專門科學、學科",
        "unit": 18,
        "example": "We learn science at our school.",
        "exampleZh": "我們在學校學習科學。"
    },
    {
        "id": 31447,
        "en": "scientist",
        "kk": "[ˋsaɪəntɪst]",
        "uk": "/ˈsaɪəntɪst/",
        "zh": "n. 科學家",
        "unit": 18,
        "example": "The scientist found a new way.",
        "exampleZh": "那位科學家發現了一種新方法。"
    },
    {
        "id": 31448,
        "en": "scooter",
        "kk": "[ˋskutɚ]",
        "uk": "/ˈskuːtə(r)/",
        "zh": "n. 摩托車、滑板車、踏板車、小型摩托車；v. 騎小型摩托車、玩踏板車",
        "unit": 18,
        "example": "He rides his scooter to work.",
        "exampleZh": "他騎機車去上班。"
    },
    {
        "id": 31449,
        "en": "score",
        "kk": "[skɔr]",
        "uk": "/skɔː(r)/",
        "zh": "n. 分數、得分、比分、評分；vt. 得分、得、評分、打分數",
        "unit": 18,
        "example": "It's my best ever score.",
        "exampleZh": "這是我得到過的最好分數。"
    },
    {
        "id": 31450,
        "en": "screen",
        "kk": "[skrin]",
        "uk": "/skriːn/",
        "zh": "n. 銀幕、螢幕、熒光屏、電影；v. 隱藏、遮蔽、庇護",
        "unit": 18,
        "example": "Look at the big TV screen.",
        "exampleZh": "看那個大電視螢幕。"
    },
    {
        "id": 31451,
        "en": "sea",
        "kk": "[si]",
        "uk": "/siː/",
        "zh": "n. 海、海洋、內海、海面情況",
        "unit": 18,
        "example": "Many fish live in the deep sea.",
        "exampleZh": "許多魚類生活在深海裡。"
    },
    {
        "id": 31452,
        "en": "seafood",
        "kk": "[ˋsi͵fud]",
        "uk": "/ˈsiːfuːd/",
        "zh": "n. 海鮮、海味、海產食品",
        "unit": 18,
        "example": "We ate fresh seafood for dinner.",
        "exampleZh": "我們晚餐吃了新鮮的海鮮。"
    },
    {
        "id": 31453,
        "en": "search",
        "kk": "[sɝtʃ]",
        "uk": "/sɜːtʃ/",
        "zh": "v. 搜查、搜尋、搜……的身、思索；n. 搜尋、搜查、探索、尋求",
        "unit": 18,
        "example": "We will search for the cat.",
        "exampleZh": "我們會去尋找那隻貓。"
    },
    {
        "id": 31454,
        "en": "season",
        "kk": "[ˋsizən]",
        "uk": "/ˈsiːz(ə)n/",
        "zh": "n. 季節、季、時期、體育賽季；vt. 加調料、給……調味、給……增添趣味、使（木材）風乾",
        "unit": 18,
        "example": "Spring is the best season of all.",
        "exampleZh": "春天是所有當中最棒的季節。"
    },
    {
        "id": 31455,
        "en": "seat",
        "kk": "[sit]",
        "uk": "/siːt/",
        "zh": "n. 座位、座部、基座、席位；vt. 就座、使坐下、使就座、容納",
        "unit": 18,
        "example": "Please take a seat in this room.",
        "exampleZh": "請在這個房間就座。"
    },
    {
        "id": 31456,
        "en": "second",
        "kk": "[ˋsɛkənd]",
        "uk": "/ˈsekənd/",
        "zh": "num. 第二、第二個、居第二位的、另外的；n. 秒、片刻、瞬間、次品；vt. 支援、附議、臨時調派、短期調任；adv. 以第二位、第二、其次；adj. 秒",
        "unit": 18,
        "example": "Wait for just one second, please.",
        "exampleZh": "請等我一秒鐘。"
    },
    {
        "id": 31457,
        "en": "secret",
        "kk": "[ˋsikrət]",
        "uk": "/ˈsiːkrət/",
        "zh": "adj. 秘密的、保密的、不公開的、暗自的；n. 秘密、內情、神秘、奧秘",
        "unit": 18,
        "example": "Can you keep this secret safe?",
        "exampleZh": "你能守住這個秘密嗎？"
    },
    {
        "id": 31458,
        "en": "secretary",
        "kk": "[ˋsɛkrə͵tɛri]",
        "uk": "/ˈsekrət(ə)ri/",
        "zh": "n. 祕書、秘書、書記員、幹事",
        "unit": 18,
        "example": "We hired a new secretary.",
        "exampleZh": "我們僱了一名新秘書。"
    },
    {
        "id": 31459,
        "en": "section",
        "kk": "[ˋsɛkʃən]",
        "uk": "/ˈsekʃ(ə)n/",
        "zh": "n. 部分、散件、部件、節；vt. 強制（精神病人）入院、將……製成切片、切開、切斷",
        "unit": 18,
        "example": "Read this section of the book.",
        "exampleZh": "閱讀這本書的這個部分。"
    },
    {
        "id": 31460,
        "en": "see",
        "kk": "[si]",
        "uk": "/siː/",
        "zh": "vt. 看見、看到、有視力、看得見；n. 主教教區",
        "unit": 18,
        "example": "I can see birds in the sky.",
        "exampleZh": "我能看見天空中的鳥兒。"
    },
    {
        "id": 31461,
        "en": "seed",
        "kk": "[sid]",
        "uk": "/siːd/",
        "zh": "n. 種子、籽、果核、精液；vt. 給…………脫籽、給（蔬菜，水果）去籽、給......脫籽；adj. 用作種子的",
        "unit": 18,
        "example": "Plant the flower seed in the dirt.",
        "exampleZh": "把花朵種子種在泥土裡。"
    },
    {
        "id": 31462,
        "en": "seek",
        "kk": "[sik]",
        "uk": "/siːk/",
        "zh": "vt. 尋找、尋求、謀求、請求",
        "unit": 18,
        "example": "You can seek help from us.",
        "exampleZh": "你可以向我們尋求幫助。"
    },
    {
        "id": 31463,
        "en": "seem",
        "kk": "[sim]",
        "uk": "/siːm/",
        "zh": "v. 似乎、看來、好像、可能",
        "unit": 18,
        "example": "You seem very happy today at school.",
        "exampleZh": "你今天在學校看起來很高興。"
    },
    {
        "id": 31464,
        "en": "seesaw",
        "kk": "[ˋsi͵sɔ]",
        "uk": "/ˈsiːsɔː/",
        "zh": "n. 蹺蹺板、拉鋸局面、不斷起伏的狀態；adj. 來回往復的、拉鋸式的；v. 搖擺不定、時起時伏、上下或來回搖動、玩蹺蹺板",
        "unit": 18,
        "example": "Two kids can play on a seesaw.",
        "exampleZh": "兩個孩子可以玩蹺蹺板。"
    },
    {
        "id": 31465,
        "en": "seldom",
        "kk": "[ˋsɛldəm]",
        "uk": "/ˈseldəm/",
        "zh": "adv. 不常、很少",
        "unit": 18,
        "example": "I've seldom felt so happy.",
        "exampleZh": "我很少感到過這麼快樂了。"
    },
    {
        "id": 31466,
        "en": "select",
        "kk": "[səˋlɛkt]",
        "uk": "/sɪˈlekt/",
        "zh": "vt. 選擇、挑選、選定、決定（特徵，生物）是否繼續存在；adj. 精選的、優等的、高階的、奢華的",
        "unit": 18,
        "example": "You may select one gift from here.",
        "exampleZh": "你可以從這裡挑選一份禮物。"
    },
    {
        "id": 31467,
        "en": "self",
        "kk": "[sɛlf]",
        "uk": "/self/",
        "zh": "n. 自我、自己、本人、私心；adj. 與其他部分同質同色的；v. 使自花授粉、使自體受精、（動物、植物）同系繁衍、同系受精；pron. 自己、本人",
        "unit": 18,
        "example": "He looked at his true self today.",
        "exampleZh": "他今天認真審視了自己的內心自我。"
    },
    {
        "id": 31468,
        "en": "selfish",
        "kk": "[ˋsɛlfɪʃ]",
        "uk": "/ˈselfɪʃ/",
        "zh": "adj. 自私的、利己的",
        "unit": 18,
        "example": "She calls me lazy and selfish.",
        "exampleZh": "她說我又懶又自私。"
    },
    {
        "id": 31469,
        "en": "sell",
        "kk": "[sɛl]",
        "uk": "/sel/",
        "zh": "v. 賣、出售、銷售、出讓",
        "unit": 18,
        "example": "They sell all kinds of things.",
        "exampleZh": "他們賣各種各樣的東西。"
    },
    {
        "id": 31470,
        "en": "semester",
        "kk": "[səˋmɛstɚ]",
        "uk": "/sɪˈmestə(r)/",
        "zh": "n. 學期、半學年",
        "unit": 18,
        "example": "Do you think you'll pledge this semester?",
        "exampleZh": "這學期你想加入大學生聯誼會嗎？"
    },
    {
        "id": 31471,
        "en": "send",
        "kk": "[sɛnd]",
        "uk": "/send/",
        "zh": "vt. 寄、發送、郵寄、派遣",
        "unit": 18,
        "example": "Shall I send you the book?",
        "exampleZh": "我把書寄給你好嗎？"
    },
    {
        "id": 31472,
        "en": "sense",
        "kk": "[sɛns]",
        "uk": "/sens/",
        "zh": "n. 感覺、感覺官能、道理、合理性；vt. 感覺到、覺察到、檢測出；adj. 有意義的",
        "unit": 18,
        "example": "Dogs have a good sense of smell.",
        "exampleZh": "狗有很好的嗅覺感官。"
    },
    {
        "id": 31473,
        "en": "sentence",
        "kk": "[ˋsɛntəns]",
        "uk": "/ˈsentəns/",
        "zh": "n. 句子、句、判決、判刑；vt. 判決、宣判、判刑",
        "unit": 18,
        "example": "What does this sentence mean?",
        "exampleZh": "這句話是什麼意思呢？"
    },
    {
        "id": 31474,
        "en": "September",
        "kk": "[sɛpˋtɛmbɚ]",
        "uk": "/sepˈtembə(r)/",
        "zh": "n. 九月",
        "unit": 18,
        "example": "The rains come in September.",
        "exampleZh": "九月雨來了。"
    },
    {
        "id": 31475,
        "en": "serious",
        "kk": "[ˋsɪriəs]",
        "uk": "/ˈsɪəriəs/",
        "zh": "adj. 嚴重的、危急的、認真的、嚴肅的",
        "unit": 18,
        "example": "You're joking. Are you serious?",
        "exampleZh": "你在開玩笑。你是認真的？"
    },
    {
        "id": 31476,
        "en": "servant",
        "kk": "[ˋsɝvənt]",
        "uk": "/ˈsɜːvənt/",
        "zh": "n. 僕人、傭人、僱員、職員",
        "unit": 18,
        "example": "The rich family has a servant.",
        "exampleZh": "這個富裕的家庭有一名僕人。"
    },
    {
        "id": 31477,
        "en": "serve",
        "kk": "[sɝv]",
        "uk": "/sɜːv/",
        "zh": "v. 服務、為……工作、服役、端上；n. 發球、申斥",
        "unit": 18,
        "example": "They serve hot tea every morning.",
        "exampleZh": "他們每天早上供應熱茶。"
    },
    {
        "id": 31478,
        "en": "service",
        "kk": "[ˋsɝvəs]",
        "uk": "/ˈsɜːvɪs/",
        "zh": "n. 服務、公共服務系統、公共事業、接待；vt. 維修、檢修、支付（債務）利息、為……提供服務；adj. 員工專用的、部隊的、提供服務的",
        "unit": 18,
        "example": "The food and service were very good.",
        "exampleZh": "這裡的食物與服務都非常好。"
    },
    {
        "id": 31479,
        "en": "set",
        "kk": "[sɛt]",
        "uk": "/set/",
        "zh": "v. 設置、放、置、使開始；n. 一套、一組、一夥（或一幫、一群）人、電視機；adj. 位於（或處於）……的、安排好的、固定的、套",
        "unit": 18,
        "example": "She bought a new set of bowls.",
        "exampleZh": "她買了一套新的碗。"
    },
    {
        "id": 31480,
        "en": "settle",
        "kk": "[ˋsɛtəl]",
        "uk": "/ˈset(ə)l/",
        "zh": "v. 解決、結束、確定、決定；n. 高背扶手木長椅",
        "unit": 18,
        "example": "They decided to settle in the city.",
        "exampleZh": "他們決定在這座城市定居下來。"
    },
    {
        "id": 31481,
        "en": "seven",
        "kk": "[ˋsɛvən]",
        "uk": "/ˈsev(ə)n/",
        "zh": "num. 七、七個；adj. 七的、七個的",
        "unit": 18,
        "example": "There are seven days in a week.",
        "exampleZh": "一週有七天。"
    },
    {
        "id": 31482,
        "en": "seventeen",
        "kk": "[ˋsɛvənˋtin]",
        "uk": "/ˌsev(ə)nˈtiːn/",
        "zh": "num. 十七；n. 十七、十七個、美國青少女雜誌《十七歲》；adj. 十七的、十七個的、十七歲的",
        "unit": 18,
        "example": "Jenny is seventeen years old.",
        "exampleZh": "珍妮十七歲了。"
    },
    {
        "id": 31483,
        "en": "seventy",
        "kk": "[ˋsɛvənti]",
        "uk": "/ˈsev(ə)nti/",
        "zh": "num. 七十；n. 七十、七十個、七十歲、70到79之間的數字；adj. 七十的、七十個的、七十歲的",
        "unit": 18,
        "example": "How old is she—seventy odd?",
        "exampleZh": "她多大了──七十多歲了？"
    },
    {
        "id": 31484,
        "en": "several",
        "kk": "[ˋsɛvrəl]",
        "uk": "/ˈsevrəl/",
        "zh": "adj. 幾個的、數個的、各自的、不同的；det. 幾個、數個；pron. 幾個、數個",
        "unit": 18,
        "example": "She wrote him several poems.",
        "exampleZh": "她給他寫了幾首詩。"
    },
    {
        "id": 31485,
        "en": "shake",
        "kk": "[ʃek]",
        "uk": "/ʃeɪk/",
        "zh": "v. 搖動、抖動、削弱、動搖；n. 搖動、搖晃、奶昔",
        "unit": 18,
        "example": "Shake the milk bottle before you drink.",
        "exampleZh": "喝牛奶之前先搖一搖瓶子。"
    },
    {
        "id": 31486,
        "en": "shall",
        "kk": "[ʃæl]",
        "uk": "/ʃæl; ʃəl/",
        "zh": "aux. 將要、將會、……好嗎？要不要……？、必須",
        "unit": 18,
        "example": "Shall we go for a walk outside?",
        "exampleZh": "我們要去外面散散步嗎？"
    },
    {
        "id": 31487,
        "en": "shape",
        "kk": "[ʃep]",
        "uk": "/ʃeɪp/",
        "zh": "n. 形狀、外形、形態、特徵；vt. 形成、影響、使成形、塑造",
        "unit": 18,
        "example": "This cake has the shape of a heart.",
        "exampleZh": "這個蛋糕有著愛心的形狀。"
    },
    {
        "id": 31488,
        "en": "share",
        "kk": "[ʃɛr]",
        "uk": "/ʃeə(r)/",
        "zh": "vt. 分享、共享、合用、分配；n. 股份、股票、部分所有權、責任",
        "unit": 18,
        "example": "Share prices moved ahead today.",
        "exampleZh": "今天的股票價格上升了。"
    },
    {
        "id": 31489,
        "en": "shark",
        "kk": "[ʃɑrk]",
        "uk": "/ʃɑːk/",
        "zh": "n. 鯊魚、坑蒙拐騙的人、詐騙者、鯊尾魚；v. 努力追逐性伴侶",
        "unit": 18,
        "example": "A big shark swam in the deep sea.",
        "exampleZh": "一隻大鯊魚在深海裡游泳。"
    },
    {
        "id": 31490,
        "en": "sharp",
        "kk": "[ʃɑrp]",
        "uk": "/ʃɑːp/",
        "zh": "adj. 鋒利的、尖的、急轉彎的、急劇的；adv. 正點、準時、突然地、急劇地；n. 升半音、銳利之物",
        "unit": 18,
        "example": "He has a sharp tongue.",
        "exampleZh": "他的舌頭很尖。"
    },
    {
        "id": 31491,
        "en": "sheep",
        "kk": "[ʃip]",
        "uk": "/ʃiːp/",
        "zh": "n. 羊、綿羊、膽小鬼",
        "unit": 18,
        "example": "White sheep eat grass on the hill.",
        "exampleZh": "白色的綿羊在小山上吃草。"
    },
    {
        "id": 31492,
        "en": "sheet",
        "kk": "[ʃit]",
        "uk": "/ʃiːt/",
        "zh": "n. 床單、被單、布罩、蓋布；v. 蓋上、裹上、把（帆）扣緊、傾盆（或瓢潑）而下",
        "unit": 18,
        "example": "This sheet has a tear in it.",
        "exampleZh": "這張紙上有一處撕裂。"
    },
    {
        "id": 31493,
        "en": "shelf",
        "kk": "[ʃɛlf]",
        "uk": "/ʃelf/",
        "zh": "n. 架、擱板、架子、陸架；v. 告發",
        "unit": 18,
        "example": "I can't reach the top shelf.",
        "exampleZh": "我夠不著最上面的架子。"
    },
    {
        "id": 31494,
        "en": "shell",
        "kk": "[ʃɛl]",
        "uk": "/ʃel/",
        "zh": "n. 貝殼、殼、鞘翅、框架；vt. 殼、果殼、剝……殼、炮轟",
        "unit": 18,
        "example": "She found a pretty sea shell.",
        "exampleZh": "她發現了一個漂亮的貝殼。"
    },
    {
        "id": 31495,
        "en": "shine",
        "kk": "[ʃaɪn]",
        "uk": "/ʃaɪn/",
        "zh": "v. 發光、照耀、照射、發亮；n. 光亮、光澤、擦亮",
        "unit": 18,
        "example": "Bright stars shine in the night sky.",
        "exampleZh": "明亮的星星在夜空中閃爍。"
    },
    {
        "id": 31496,
        "en": "ship",
        "kk": "[ʃɪp]",
        "uk": "/ʃɪp/",
        "zh": "n. 船、艦、三（或多）桅帆船、艇；vt. 運送、運輸、遣送、推出",
        "unit": 18,
        "example": "A large ship came into the port.",
        "exampleZh": "一艘大船開進了港口。"
    },
    {
        "id": 31497,
        "en": "shirt",
        "kk": "[ʃɝt]",
        "uk": "/ʃɜːt/",
        "zh": "n. 襯衫、恤衫、球衣、運動隊隊員",
        "unit": 18,
        "example": "What's your shirt made of?",
        "exampleZh": "你的襯衫是什麼材質的？"
    },
    {
        "id": 31498,
        "en": "shock",
        "kk": "[ʃɑk]",
        "uk": "/ʃɒk/",
        "zh": "n. 令人震驚的事、吃驚、震驚、休克；vt. 使震驚、使難以置信、（使）憤慨、生氣；adj. 令人震驚的、令人大感意外的、濃密的、蓬亂的",
        "unit": 18,
        "example": "He's in for a shock!",
        "exampleZh": "他很快就會感到震驚的！"
    },
    {
        "id": 31499,
        "en": "shoe",
        "kk": "[ʃu]",
        "uk": "/ʃuː/",
        "zh": "n. 鞋子、鞋、馬蹄鐵、剎車蹄片；vt. 給（馬）釘蹄鐵、穿鞋（或靴）、用金屬片包覆、為（輪子）裝輪胎",
        "unit": 18,
        "example": "He tied his left shoe very fast.",
        "exampleZh": "他很快地繫好了左腳的鞋子。"
    },
    {
        "id": 31500,
        "en": "shop",
        "kk": "[ʃɑp]",
        "uk": "/ʃɒp/",
        "zh": "n. 商店、店鋪、作坊、工場；vi. 購物、舉報、告發、試圖說服",
        "unit": 18,
        "example": "I shop for food at noon daily.",
        "exampleZh": "我每天中午採買食物。"
    },
    {
        "id": 31501,
        "en": "shoot",
        "kk": "[ʃut]",
        "uk": "/ʃuːt/",
        "zh": "v. 射擊、開、射殺、射傷；n. 拍攝、嫩芽、新枝、狩獵；int. 說吧、請講、糟糕、哎呀",
        "unit": 18,
        "example": "He'd love to shoot his film in Cuba.",
        "exampleZh": "他很樂意在古巴拍攝他的電影。"
    },
    {
        "id": 31502,
        "en": "shore",
        "kk": "[ʃɔr]",
        "uk": "/ʃɔː(r)/",
        "zh": "n. 岸、濱、沿海國家（或地區）、漲潮線與落潮線之間的地帶；v. 用支撐物（或梁）支撐、支援、幫助",
        "unit": 18,
        "example": "Huge waves lashed the shore.",
        "exampleZh": "巨大的海浪拍打著海岸。"
    },
    {
        "id": 31503,
        "en": "short",
        "kk": "[ʃɔrt]",
        "uk": "/ʃɔːt/",
        "zh": "adj. 短的、短暫的、短期的、個子矮的；n. 少量烈酒、電影短片、短褲、男用短內褲；adv. 達不到標準（或預期）地、突然、短暫、使變短地；v. 短路、賣空",
        "unit": 18,
        "example": "He is too short to reach the shelf.",
        "exampleZh": "他太矮了，搆不到架子。"
    },
    {
        "id": 31504,
        "en": "shorts",
        "kk": "[ʃɔrts]",
        "uk": "/ʃɔːts/",
        "zh": "n. 短褲、男內褲、短片、細麩粉；v. 短路",
        "unit": 18,
        "example": "He wears blue shorts in summer.",
        "exampleZh": "他夏天穿著藍色短褲。"
    },
    {
        "id": 31505,
        "en": "should",
        "kk": "[ʃʊd]",
        "uk": "/ʃʊd; ʃəd/",
        "zh": "v. 應該、該、可以、應該會；aux. 應該",
        "unit": 18,
        "example": "You should go to bed early.",
        "exampleZh": "你應該早點去睡覺。"
    },
    {
        "id": 31506,
        "en": "shoulder",
        "kk": "[ˋʃoldɚ]",
        "uk": "/ˈʃəʊldə(r)/",
        "zh": "n. 肩、肩膀、雙肩、上背部；vt. 承擔、擔負、擠、闖",
        "unit": 18,
        "example": "He had a bag on his shoulder.",
        "exampleZh": "他肩膀上背著一個袋子。"
    },
    {
        "id": 31507,
        "en": "shout",
        "kk": "[ʃaʊt]",
        "uk": "/ʃaʊt/",
        "zh": "vi. 呼喊、叫嚷、大聲說、呼叫；vt. 呼喊；n. 喊叫聲、呼喊、請客的酒、輪到買酒請客",
        "unit": 18,
        "example": "It's wrong to swear and shout.",
        "exampleZh": "罵人、喊叫都是錯的。"
    },
    {
        "id": 31508,
        "en": "show",
        "kk": "[ʃo]",
        "uk": "/ʃəʊ/",
        "zh": "v. 顯示、表明、給……看、出示；n. 表演、演出、歌舞表演、節目",
        "unit": 18,
        "example": "Please show me your new family photo.",
        "exampleZh": "請給我看你的新全家福照片。"
    },
    {
        "id": 31509,
        "en": "shower",
        "kk": "[ˋʃaʊɚ]",
        "uk": "/ˈʃaʊə(r)/",
        "zh": "n. 淋浴、淋浴器、花灑、淋浴間；v. 陣雨、淋浴、洗澡、灑落",
        "unit": 18,
        "example": "She usually sings in the shower.",
        "exampleZh": "她常常邊沖澡邊唱歌。"
    },
    {
        "id": 31510,
        "en": "shrimp",
        "kk": "[ʃrɪmp]",
        "uk": "/ʃrɪmp/",
        "zh": "n. 蝦子、蝦、小蝦、矮子；v. 捕蝦；adj. 與蝦有關的、有蝦的、蝦制的",
        "unit": 18,
        "example": "We had sweet fried shrimp today.",
        "exampleZh": "我們今天吃了甜美的炸蝦。"
    },
    {
        "id": 31511,
        "en": "shut",
        "kk": "[ʃʌt]",
        "uk": "/ʃʌt/",
        "zh": "vt. 關閉、合上、把……關在、停止運作；adj. 關閉的、關上的、打烊的、停止營業的；n. 關閉",
        "unit": 18,
        "example": "Please shut the window before you leave.",
        "exampleZh": "離開前請把窗戶關上。"
    },
    {
        "id": 31512,
        "en": "shy",
        "kk": "[ʃaɪ]",
        "uk": "/ʃaɪ/",
        "zh": "adj. 害羞的、靦腆的、顯得靦腆的、看著羞怯的；v. 驚退、驚逸、迴避、避開；n. 驚退、驚逸、投擲、扔",
        "unit": 18,
        "example": "The little girl is shy with people.",
        "exampleZh": "這個小女孩見到人很害羞。"
    },
    {
        "id": 31513,
        "en": "sick",
        "kk": "[sɪk]",
        "uk": "/sɪk/",
        "zh": "adj. 生病的、患病的、病人的、噁心的；n. 病人、嘔吐物；v. 嘔吐",
        "unit": 18,
        "example": "My brother is sick in bed today.",
        "exampleZh": "我弟弟今天生病躺在床上。"
    },
    {
        "id": 31514,
        "en": "side",
        "kk": "[saɪd]",
        "uk": "/saɪd/",
        "zh": "n. 面、一旁、側邊、邊；adj. 旁邊的、側面的、次要的、附帶的；vi. 支援、站在……一邊、給......鋪外牆板、給......裝上側面",
        "unit": 18,
        "example": "The ship rolled from side to side.",
        "exampleZh": "船從一邊搖到另一邊。"
    },
    {
        "id": 31515,
        "en": "sidewalk",
        "kk": "[ˋsaɪd͵wɔk]",
        "uk": "/ˈsaɪdwɔːk/",
        "zh": "n. 人行道",
        "unit": 18,
        "example": "Walk on the sidewalk for safety.",
        "exampleZh": "為了安全請走在人行道上。"
    },
    {
        "id": 31516,
        "en": "sight",
        "kk": "[saɪt]",
        "uk": "/saɪt/",
        "zh": "n. 景象、視力、視覺、看見；vt. 看到、看見、把（槍）瞄準；adj. 見票即付的、即席的",
        "unit": 18,
        "example": "The snow was a very lovely sight.",
        "exampleZh": "那場雪是一幅非常美麗的景象。"
    },
    {
        "id": 31517,
        "en": "sign",
        "kk": "[saɪn]",
        "uk": "/saɪn/",
        "zh": "n. 標誌、指示牌、跡象、徵兆；vt. 簽名、署名、簽約、示意",
        "unit": 18,
        "example": "Please sign your name on paper.",
        "exampleZh": "請在紙上簽下你的名字。"
    },
    {
        "id": 31518,
        "en": "silence",
        "kk": "[ˋsaɪləns]",
        "uk": "/ˈsaɪləns/",
        "zh": "n. 寂靜、無聲、沉默、默不作聲；vt. 使安靜、使不說話、壓制、使不再發表；int. 安靜、靜下來",
        "unit": 18,
        "example": "They sat in deep silence here.",
        "exampleZh": "他們在這裡坐在深深的寂靜中。"
    },
    {
        "id": 31519,
        "en": "silent",
        "kk": "[ˋsaɪlənt]",
        "uk": "/ˈsaɪlənt/",
        "zh": "adj. 沉默的、安靜的、沉默寡言的、不愛說話的",
        "unit": 18,
        "example": "The three men remained silent.",
        "exampleZh": "三人保持沉默。"
    },
    {
        "id": 31520,
        "en": "silk",
        "kk": "[sɪlk]",
        "uk": "/sɪlk/",
        "zh": "n. 絲、絲綢、絲線、彩色絲綢賽馬服；adj. 絲的、絲制的；vi. 處於長鬚的階段中",
        "unit": 18,
        "example": "She wore purple and green silk.",
        "exampleZh": "她穿著紫色和綠色的絲綢。"
    },
    {
        "id": 31521,
        "en": "silly",
        "kk": "[ˋsɪli]",
        "uk": "/ˈsɪli/",
        "zh": "adj. 愚蠢的、傻的、可笑的；n. 傻瓜、笨蛋",
        "unit": 18,
        "example": "No, silly, those aren't your shoes!",
        "exampleZh": "不，傻瓜，那不是你的鞋！"
    },
    {
        "id": 31522,
        "en": "silver",
        "kk": "[ˋsɪlvɚ]",
        "uk": "/ˈsɪlvə(r)/",
        "zh": "n. 銀、銀器、銀幣、銀（白）色；adj. 銀製的、銀（白）色的、含銀的；v. 鍍（或包）銀於、使具有銀色光澤、使變成銀色、使（頭髮）變成銀灰色",
        "unit": 18,
        "example": "She wore a shiny silver ring today.",
        "exampleZh": "她今天戴了一枚閃亮的銀戒指。"
    },
    {
        "id": 31523,
        "en": "similar",
        "kk": "[ˋsɪməlɚ]",
        "uk": "/ˈsɪmələ(r)/",
        "zh": "adj. 相似的、相像的、類似的；n. 相似之人、順勢藥物",
        "unit": 18,
        "example": "The two sisters have very similar faces.",
        "exampleZh": "這對姊妹有著非常相似的面貌。"
    },
    {
        "id": 31524,
        "en": "simple",
        "kk": "[ˋsɪmpəl]",
        "uk": "/ˈsɪmp(ə)l/",
        "zh": "adj. 簡單的、簡明的、簡樸的、樸素的；n. 草藥、藥草、出身低微者、笨蛋",
        "unit": 18,
        "example": "This is a simple game for kids.",
        "exampleZh": "這對小孩子來說是個簡單的遊戲。"
    },
    {
        "id": 31525,
        "en": "simply",
        "kk": "[ˋsɪmpli]",
        "uk": "/ˈsɪmpli/",
        "zh": "adv. 簡單地、僅僅、只、不過",
        "unit": 18,
        "example": "This math problem is simply too easy.",
        "exampleZh": "這道數學題簡直是太容易了。"
    },
    {
        "id": 31526,
        "en": "since",
        "kk": "[sɪns]",
        "uk": "/sɪns/",
        "zh": "prep. 自從、自……以後、自……以來、何曾；conj. 因為、在……以後、自……以來、由於；adv. 自……以後、自……以來、此後、後來",
        "unit": 18,
        "example": "We've lived here since 1994.",
        "exampleZh": "我們從 1994 年起就住在這裡。"
    },
    {
        "id": 31527,
        "en": "sincere",
        "kk": "[sɪnˋsɪr]",
        "uk": "/sɪnˈsɪə(r)/",
        "zh": "adj. 真誠的、衷心的、誠摯的、誠懇的",
        "unit": 18,
        "example": "He gave us a sincere smile.",
        "exampleZh": "他給了我們一個真誠的微笑。"
    },
    {
        "id": 31528,
        "en": "sing",
        "kk": "[sɪŋ]",
        "uk": "/sɪŋ/",
        "zh": "vt. 唱歌、唱、演唱、鳴；n. 唱歌、演唱、業餘演唱會、鳴聲；abbr. 單數",
        "unit": 18,
        "example": "Can white girls sing the blues?",
        "exampleZh": "白人女孩可以唱布魯斯嗎？"
    },
    {
        "id": 31529,
        "en": "singer",
        "kk": "[ˋsɪŋɚ]",
        "uk": "/ˈsɪŋə(r)/",
        "zh": "n. 歌手、歌唱家、Singer",
        "unit": 18,
        "example": "The singer re-formed his band.",
        "exampleZh": "這位歌手重組了他的樂隊。"
    },
    {
        "id": 31530,
        "en": "single",
        "kk": "[ˋsɪŋɡəl]",
        "uk": "/ˈsɪŋɡ(ə)l/",
        "zh": "adj. 單一的、單個的、單身的、未婚的；n. 單曲唱片、一分打、一壘打；v. 挑選、選出、擊出一壘打、對（幼苗，幼樹）進行間苗",
        "unit": 18,
        "example": "How much is a single to York?",
        "exampleZh": "去約克的單程票多少錢？"
    },
    {
        "id": 31531,
        "en": "sink",
        "kk": "[sɪŋk]",
        "uk": "/sɪŋk/",
        "zh": "v. 下沉、沉沒、使失敗、受挫；adj. 貧困的、貧民窟的；n. 水槽、水池、窪地、滲坑",
        "unit": 18,
        "example": "Wash your hands in the sink.",
        "exampleZh": "在水槽裡洗手。"
    },
    {
        "id": 31532,
        "en": "sir",
        "kk": "[sɝ]",
        "uk": "/sɜː(r)/",
        "zh": "n. 先生、長官、老師、閣下",
        "unit": 18,
        "example": "May I help you with that, sir?",
        "exampleZh": "先生，需要我幫忙嗎？"
    },
    {
        "id": 31533,
        "en": "sister",
        "kk": "[ˋsɪstɚ]",
        "uk": "/ˈsɪstə(r)/",
        "zh": "n. 姊妹、姐姐、妹妹、姐妹；adj. 同類的、同質的、如同姐妹的",
        "unit": 18,
        "example": "My sister goes to school by bus.",
        "exampleZh": "我妹妹搭公車去上學。"
    },
    {
        "id": 31534,
        "en": "sit",
        "kk": "[sɪt]",
        "uk": "/sɪt/",
        "zh": "v. 坐、坐下、就座、能容納；n. 坐的一段時間、合身",
        "unit": 18,
        "example": "Please sit down and enjoy a warm cup of tea.",
        "exampleZh": "請坐下來，喝杯熱茶放鬆一下。"
    },
    {
        "id": 31535,
        "en": "six",
        "kk": "[sɪks]",
        "uk": "/sɪks/",
        "zh": "num. 六、數字6、六個、六個人（或物）一組",
        "unit": 18,
        "example": "We have six red apples on the table.",
        "exampleZh": "我們桌上有六顆紅蘋果。"
    },
    {
        "id": 31536,
        "en": "sixteen",
        "kk": "[sɪkˋstin]",
        "uk": "/ˌsɪksˈtiːn/",
        "zh": "num. 十六、十六個；adj. 十六的、十六個的",
        "unit": 18,
        "example": "He worked sixteen hours a day.",
        "exampleZh": "他每天工作十六個小時。"
    },
    {
        "id": 31537,
        "en": "sixty",
        "kk": "[ˋsɪksti]",
        "uk": "/ˈsɪksti/",
        "zh": "num. 六十、六十個、六十歲；n. 六十、六十幾、六十多歲、thesixties指二十世紀六十年代",
        "unit": 18,
        "example": "She is close on sixty.",
        "exampleZh": "她已經快六十歲了。"
    },
    {
        "id": 31538,
        "en": "size",
        "kk": "[saɪz]",
        "uk": "/saɪz/",
        "zh": "n. 尺碼、大小、尺寸、龐大；v. 依大小分類、按一定大小製作、改變......的大小、給（衣服、紙張等）上漿；adj. 一定大小（或尺碼）的",
        "unit": 18,
        "example": "The jacket was the wrong size.",
        "exampleZh": "這件夾克的尺寸不對。"
    },
    {
        "id": 31539,
        "en": "skate",
        "kk": "[sket]",
        "uk": "/skeɪt/",
        "zh": "n. 溜冰鞋、滑冰鞋、四輪溜冰鞋、旱冰鞋；vi. 滑冰、溜冰、在滑板上滑行、溜出",
        "unit": 18,
        "example": "Children love to skate on ice.",
        "exampleZh": "孩子們喜歡在冰上溜冰。"
    },
    {
        "id": 31540,
        "en": "ski",
        "kk": "[ski]",
        "uk": "/skiː/",
        "zh": "n. 滑橇、滑雪（水）板、水橇；vi. 滑雪、滑水；adj. 滑雪的、滑水的",
        "unit": 18,
        "example": "We like to ski in winter.",
        "exampleZh": "我們喜歡在冬天滑雪。"
    },
    {
        "id": 31541,
        "en": "skill",
        "kk": "[skɪl]",
        "uk": "/skɪl/",
        "zh": "n. 技巧、技藝、技術、技能；v. 培訓",
        "unit": 18,
        "example": "Art is a very useful life skill.",
        "exampleZh": "藝術是一項非常有用的生活技能。"
    },
    {
        "id": 31542,
        "en": "skillful",
        "kk": "[ˋskɪlfəl]",
        "uk": "/ˈskɪlf(ə)l/",
        "zh": "adj. 熟練的、有技巧的、靈巧的、巧妙的",
        "unit": 18,
        "example": "The skillful cook made dinner very quickly.",
        "exampleZh": "那位廚藝嫻熟的廚師很快做好了晚餐。"
    },
    {
        "id": 31543,
        "en": "skin",
        "kk": "[skɪn]",
        "uk": "/skɪn/",
        "zh": "n. 皮膚、皮、獸皮、皮毛；vt. 剝皮、削皮、擦破、長出新皮",
        "unit": 18,
        "example": "I can skin up.",
        "exampleZh": "我可以剝皮。"
    },
    {
        "id": 31544,
        "en": "skinny",
        "kk": "[ˋskɪni]",
        "uk": "/ˈskɪni/",
        "zh": "adj. 皮包骨的、極瘦的、緊身的、低脂肪的；n. 骨瘦如柴的人、瘦骨嶙峋的人、內部訊息、機密情報",
        "unit": 18,
        "example": "He was quite a skinny little boy.",
        "exampleZh": "他是個骨瘦如柴的小男孩。"
    },
    {
        "id": 31545,
        "en": "skirt",
        "kk": "[skɝt]",
        "uk": "/skɜːt/",
        "zh": "n. 女裙、半身裙、下襬、擋板；vt. 環繞……的四周、沿……的邊緣走、繞開、迴避",
        "unit": 18,
        "example": "There's a mark on your skirt.",
        "exampleZh": "你裙子上有一塊斑。"
    },
    {
        "id": 31546,
        "en": "sky",
        "kk": "[skaɪ]",
        "uk": "/skaɪ/",
        "zh": "n. 天空、天、天堂、天國之力；v. 把（球）擊向空中、把（畫）高掛在牆上、踢或擊高空球、把槳葉翹得過高",
        "unit": 18,
        "example": "The blue sky has no clouds today.",
        "exampleZh": "今天藍藍的天空萬里無雲。"
    },
    {
        "id": 31547,
        "en": "sleep",
        "kk": "[slip]",
        "uk": "/sliːp/",
        "zh": "v. 睡覺、睡、供……住宿、沉寂；n. 睡眠、睡覺、睡眠時間、眵",
        "unit": 18,
        "example": "Babies sleep for many hours each day.",
        "exampleZh": "小寶寶每天睡很多個小時。"
    },
    {
        "id": 31548,
        "en": "sleepy",
        "kk": "[ˋslipi]",
        "uk": "/ˈsliːpi/",
        "zh": "adj. 想睡的、睏倦的、寂靜的、冷清的",
        "unit": 18,
        "example": "He had begun to feel sleepy.",
        "exampleZh": "他開始感到困倦。"
    },
    {
        "id": 31549,
        "en": "slender",
        "kk": "[ˋslɛndɚ]",
        "uk": "/ˈslendə(r)/",
        "zh": "adj. 纖細的、苗條的、細長的、狹窄的",
        "unit": 18,
        "example": "She has slender arms and long legs.",
        "exampleZh": "她有著纖細的手臂和修長的雙腿。"
    },
    {
        "id": 31550,
        "en": "slide",
        "kk": "[slaɪd]",
        "uk": "/slaɪd/",
        "zh": "v. 滑動、滑行、悄悄移動；n. 滑梯、幻燈片、滑動、山崩",
        "unit": 18,
        "example": "The children played on the slide.",
        "exampleZh": "孩子們在溜滑梯上玩耍。"
    },
    {
        "id": 31551,
        "en": "slim",
        "kk": "[slɪm]",
        "uk": "/slɪm/",
        "zh": "adj. 苗條的、纖細的、單薄的；vt. 減少、縮減、變苗條、減肥；n. 艾滋病、瘦身課程",
        "unit": 18,
        "example": "She has a slim and healthy body.",
        "exampleZh": "她有著纖細而健康的體態。"
    },
    {
        "id": 31552,
        "en": "slippers",
        "kk": "[ˋslɪpɚz]",
        "uk": "/ˈslɪpə(r)z/",
        "zh": "n. 拖鞋",
        "unit": 18,
        "example": "Put on your soft slippers inside.",
        "exampleZh": "在室內穿上你的軟拖鞋。"
    },
    {
        "id": 31553,
        "en": "slow",
        "kk": "[slo]",
        "uk": "/sləʊ/",
        "zh": "adj. 慢的、緩慢的、遲鈍的；v. 放慢、減速；adv. 慢地、緩慢地",
        "unit": 18,
        "example": "The old yellow bus is very slow.",
        "exampleZh": "那輛老舊的黃色公車非常慢。"
    },
    {
        "id": 31554,
        "en": "small",
        "kk": "[smɔl]",
        "uk": "/smɔːl/",
        "zh": "adj. 小的、小型的、少的、小規模的；n. 小件衣服（尤指內衣）、後腰、小費、小額禮金；adv. 成小塊地、小小地",
        "unit": 18,
        "example": "She lives in a small, quiet town.",
        "exampleZh": "她住在一個安靜的小鎮裡。"
    },
    {
        "id": 31555,
        "en": "smart",
        "kk": "[smɑrt]",
        "uk": "/smɑːt/",
        "zh": "adj. 聰明的、明智的、衣著得體的、整潔而漂亮的；vi. 感到刺痛、難過、煩惱；n. 劇痛、刺痛、痛苦、苦惱；adv. 機敏地、整潔地、瀟灑地",
        "unit": 18,
        "example": "She mixes with the smart set.",
        "exampleZh": "她與聰明人混在一起。"
    },
    {
        "id": 31556,
        "en": "smell",
        "kk": "[smɛl]",
        "uk": "/smel/",
        "zh": "n. 氣味、臭味、嗅覺、嗅；v. 有……氣味、發出…………的氣味、發出......的氣味、聞出",
        "unit": 18,
        "example": "Where's that smell coming from?",
        "exampleZh": "那味道是從哪裡來的？"
    },
    {
        "id": 31557,
        "en": "smile",
        "kk": "[smaɪl]",
        "uk": "/smaɪl/",
        "zh": "vi. 微笑、微笑著說、以微笑表示、現出；n. 笑容、微笑、一臉笑意、喜滋滋的",
        "unit": 18,
        "example": "A big warm smile was on his face.",
        "exampleZh": "他的臉上帶著大大的溫暖微笑。"
    },
    {
        "id": 31558,
        "en": "smoke",
        "kk": "[smok]",
        "uk": "/sməʊk/",
        "zh": "n. 煙、煙霧、吸菸、抽菸；v. 吸菸、吸毒品、抽菸、冒煙",
        "unit": 18,
        "example": "Black smoke rose into the cold air.",
        "exampleZh": "黑煙升入了冰冷的空氣中。"
    },
    {
        "id": 31559,
        "en": "snack",
        "kk": "[snæk]",
        "uk": "/snæk/",
        "zh": "n. 零食、點心、小吃、快餐；vi. 吃點心、吃零食",
        "unit": 18,
        "example": "Lunch was a snack in the fields.",
        "exampleZh": "午飯是在野外吃的快餐。"
    },
    {
        "id": 31560,
        "en": "snail",
        "kk": "[snel]",
        "uk": "/sneɪl/",
        "zh": "n. 蝸牛、遲鈍的人；v. 緩慢移動",
        "unit": 18,
        "example": "A small snail moves very slowly.",
        "exampleZh": "一隻小蝸牛移動得非常慢。"
    },
    {
        "id": 31561,
        "en": "snake",
        "kk": "[snek]",
        "uk": "/sneɪk/",
        "zh": "n. 蛇、陰險狡詐的人、管道疏通器、蛇形浮動匯率制；vi. 蛇行、蜿蜒前進、拉",
        "unit": 18,
        "example": "A green snake hid under the rock.",
        "exampleZh": "一條青蛇躲在岩石下面。"
    },
    {
        "id": 31562,
        "en": "sneakers",
        "kk": "[ˋsnikɚz]",
        "uk": "/ˈsniːkəz/",
        "zh": "n. 運動鞋、膠底運動鞋",
        "unit": 18,
        "example": "He wore old jeans and a pair of sneakers.",
        "exampleZh": "他穿一條舊牛仔褲，腳蹬運動鞋。"
    },
    {
        "id": 31563,
        "en": "snow",
        "kk": "[sno]",
        "uk": "/snəʊ/",
        "zh": "n. 雪、積雪、降雪、一場雪；vi. 下雪、飄雪、矇騙、使相信",
        "unit": 18,
        "example": "Cold white snow falls from the sky.",
        "exampleZh": "冰冷的白雪從天空飄落。"
    },
    {
        "id": 31564,
        "en": "snowy",
        "kk": "[ˋsnoi]",
        "uk": "/ˈsnəʊi/",
        "zh": "adj. 下雪多的、多雪的、下雪的、雪白的",
        "unit": 18,
        "example": "We strode across the snowy fields.",
        "exampleZh": "我們大步穿過雪原。"
    },
    {
        "id": 31565,
        "en": "so",
        "kk": "[so]",
        "uk": "/səʊ/",
        "zh": "adv. 如此、這麼、也一樣、那麼；conj. 所以、因此、以便、為了；pron. 這樣、如此",
        "unit": 18,
        "example": "It was cold, so I wore a coat.",
        "exampleZh": "天氣很冷，所以我穿了一件外套。"
    },
    {
        "id": 31566,
        "en": "soap",
        "kk": "[sop]",
        "uk": "/səʊp/",
        "zh": "n. 肥皂、肥皂劇；v. 擦肥皂、對……拍馬屁",
        "unit": 18,
        "example": "He had soap suds in his ears.",
        "exampleZh": "他的耳朵裡進了肥皂水。"
    },
    {
        "id": 31567,
        "en": "soccer",
        "kk": "[ˋsɑkɚ]",
        "uk": "/ˈsɒkə(r)/",
        "zh": "n. 足球、英式足球",
        "unit": 18,
        "example": "We play soccer after school daily.",
        "exampleZh": "我們每天放學後都踢足球。"
    },
    {
        "id": 31568,
        "en": "social",
        "kk": "[ˋsoʃəl]",
        "uk": "/ˈsəʊʃ(ə)l/",
        "zh": "adj. 社會的、社會地位的、社會階層的、社交的；n. 社交聚會、聯歡會、社會保障",
        "unit": 18,
        "example": "School clubs help kids build social skills.",
        "exampleZh": "學校社團幫助孩子建立社交技巧。"
    },
    {
        "id": 31569,
        "en": "society",
        "kk": "[səˋsaɪəti]",
        "uk": "/səˈsaɪəti/",
        "zh": "n. 社會、社群、社團、協會",
        "unit": 18,
        "example": "Books play a role in society.",
        "exampleZh": "書籍在社會中扮演著角色。"
    },
    {
        "id": 31570,
        "en": "sock",
        "kk": "[sɑk]",
        "uk": "/sɒk/",
        "zh": "n. 襪子、短襪、猛擊、重擊；vt. 猛擊、使遭損失、損害、狠打",
        "unit": 18,
        "example": "I lost my left white sock.",
        "exampleZh": "我弄丟了我的左邊白襪子。"
    },
    {
        "id": 31571,
        "en": "soda",
        "kk": "[ˋsodə]",
        "uk": "/ˈsəʊdə/",
        "zh": "n. 汽水、蘇打、碳酸鈉、蘇打水",
        "unit": 18,
        "example": "He drank a cold can of soda.",
        "exampleZh": "他喝了一罐冰涼的汽水。"
    },
    {
        "id": 31572,
        "en": "sofa",
        "kk": "[ˋsofə]",
        "uk": "/ˈsəʊfə/",
        "zh": "n. 沙發、長椅",
        "unit": 18,
        "example": "My cat sleeps on the soft sofa.",
        "exampleZh": "我的貓咪睡在柔軟的沙發上。"
    },
    {
        "id": 31573,
        "en": "soft",
        "kk": "[sɑft]",
        "uk": "/sɒft/",
        "zh": "adj. 軟的、易彎曲的、柔軟的、柔滑的；adv. 溫柔地、輕輕地、無力地、愚蠢地；n. 柔性、柔軟的東西、柔軟部分",
        "unit": 18,
        "example": "The cat has very soft white fur.",
        "exampleZh": "這隻貓有非常柔軟的白毛。"
    },
    {
        "id": 31574,
        "en": "soldier",
        "kk": "[ˋsoldʒɚ]",
        "uk": "/ˈsəʊldʒə(r)/",
        "zh": "n. 士兵、軍人、兵蟻、垂直的磚；v. 當兵、堅持不懈、迎難而上、假稱害病",
        "unit": 18,
        "example": "The brave soldier won the war.",
        "exampleZh": "那位英勇的士兵贏得了戰爭。"
    },
    {
        "id": 31575,
        "en": "solve",
        "kk": "[sɑlv]",
        "uk": "/sɒlv/",
        "zh": "vt. 解決、處理、解釋、解答",
        "unit": 18,
        "example": "It isn't going to solve a single thing.",
        "exampleZh": "它不會解決任何一件事。"
    },
    {
        "id": 31576,
        "en": "some",
        "kk": "[sʌm]",
        "uk": "/sʌm; səm/",
        "zh": "det. 一些、若干、某個、某種；pron. 某些、有些、一部分；adv. 有些、稍微、大約",
        "unit": 18,
        "example": "Can I have some cold water, please?",
        "exampleZh": "請問我可以喝一些冷水嗎？"
    },
    {
        "id": 31577,
        "en": "someone",
        "kk": "[ˋsʌm͵wʌn]",
        "uk": "/ˈsʌmwʌn/",
        "zh": "pron. 某人、有人、重要人物",
        "unit": 18,
        "example": "Someone threw an apple core.",
        "exampleZh": "有人丟了一個蘋果核。"
    },
    {
        "id": 31578,
        "en": "something",
        "kk": "[ˋsʌmθɪŋ]",
        "uk": "/ˈsʌmθɪŋ/",
        "zh": "pron. 某事、某物、……或諸如此類的東西、……什麼的；adv. 稍微、有點、很、非常",
        "unit": 18,
        "example": "It tastes something like melon.",
        "exampleZh": "嘗起來有點像甜瓜。"
    },
    {
        "id": 31579,
        "en": "sometimes",
        "kk": "[səmˋtaɪmz]",
        "uk": "/ˈsʌmtaɪmz/",
        "zh": "adv. 有時候、有時、間或",
        "unit": 18,
        "example": "Life seems so unfair sometimes.",
        "exampleZh": "生活有時顯得如此不公平。"
    },
    {
        "id": 31580,
        "en": "somewhere",
        "kk": "[ˋsʌm͵wɛr]",
        "uk": "/ˈsʌmweə(r)/",
        "zh": "adv. 在某處、到某處；n. 某個地方",
        "unit": 18,
        "example": "Sarah's off in India somewhere.",
        "exampleZh": "莎拉去印度某處了。"
    },
    {
        "id": 31581,
        "en": "son",
        "kk": "[sʌn]",
        "uk": "/sʌn/",
        "zh": "n. 兒子、孩子、男性、子",
        "unit": 18,
        "example": "Her son plays soccer after school daily.",
        "exampleZh": "她的兒子每天放學後都踢足球。"
    },
    {
        "id": 31582,
        "en": "song",
        "kk": "[sɔŋ]",
        "uk": "/sɒŋ/",
        "zh": "n. 歌、歌曲、歌唱、聲樂",
        "unit": 18,
        "example": "She sang a sweet love song today.",
        "exampleZh": "她今天唱了一首甜美的戀歌。"
    },
    {
        "id": 31583,
        "en": "soon",
        "kk": "[sun]",
        "uk": "/suːn/",
        "zh": "adv. 不久、很快、馬上、早",
        "unit": 18,
        "example": "We will arrive at the station soon.",
        "exampleZh": "我們很快就會到達車站。"
    },
    {
        "id": 31584,
        "en": "sore",
        "kk": "[sɔr]",
        "uk": "/sɔː(r)/",
        "zh": "adj. 疼痛的、痠痛的、惱火的、惱怒的；n. 傷處、痛處、瘡、傷心事",
        "unit": 18,
        "example": "My red eyes are very sore.",
        "exampleZh": "我的紅眼睛非常痠痛。"
    },
    {
        "id": 31585,
        "en": "sorry",
        "kk": "[ˋsɑri]",
        "uk": "/ˈsɒri/",
        "zh": "adj. 感到抱歉的、抱歉的、慚愧的、歉疚的；int. 對不起、抱歉、沒聽清、請再講一遍",
        "unit": 18,
        "example": "I am very sorry for any inconvenience this may have caused.",
        "exampleZh": "對於可能由此造成的任何不便，我深感抱歉。"
    },
    {
        "id": 31586,
        "en": "soul",
        "kk": "[sol]",
        "uk": "/səʊl/",
        "zh": "n. 靈魂、心靈、某種人、一個人；adj. 激情黑人的、黑人文化的",
        "unit": 18,
        "example": "Music brings peace to my deep soul.",
        "exampleZh": "音樂為我內心深處的靈魂帶來平靜。"
    },
    {
        "id": 31587,
        "en": "sound",
        "kk": "[saʊnd]",
        "uk": "/saʊnd/",
        "zh": "n. 聲音、聲響、聽力範圍、聽距；vt. 聽起來、發聲、作響、發出；adj. 無損傷的、健康的、堅實的、合理的；adv. 酣暢地",
        "unit": 18,
        "example": "You don't sound very sure.",
        "exampleZh": "你聽起來不太確定。"
    },
    {
        "id": 31588,
        "en": "soup",
        "kk": "[sup]",
        "uk": "/suːp/",
        "zh": "n. 湯、羹、發動機等的馬力、動力；vt. 給（發動機、車輛等）加速、增加馬力",
        "unit": 18,
        "example": "The soup has very little taste.",
        "exampleZh": "湯的味道很少。"
    },
    {
        "id": 31589,
        "en": "sour",
        "kk": "[ˋsaʊɚ]",
        "uk": "/ˈsaʊə(r)/",
        "zh": "adj. 酸的、酸味的、餿（味）的、酸臭的；vt. 變壞、（關係、情況）變糟、變酸；n. 有酸味的酒精飲料、酸味、苦事",
        "unit": 18,
        "example": "The heat turned the milk sour.",
        "exampleZh": "熱量使牛奶變酸了。"
    },
    {
        "id": 31590,
        "en": "source",
        "kk": "[sɔrs]",
        "uk": "/sɔːs/",
        "zh": "n. 出處、來源、原因、根源；vt. 獲得、找出……的來源",
        "unit": 18,
        "example": "What is their main source of income?",
        "exampleZh": "他們的主要收入來源是什麼？"
    },
    {
        "id": 31591,
        "en": "south",
        "kk": "[saʊθ]",
        "uk": "/saʊθ/",
        "zh": "n. 南方、南、南部、美國南部各州；adj. 南部的、位於南方的、朝南的、來自南方的；adv. 向南、朝南、去南方、在南方；v. 向南方、朝南、穿過子午線",
        "unit": 18,
        "example": "The birds fly south for the winter.",
        "exampleZh": "鳥兒飛往南方過冬。"
    },
    {
        "id": 31592,
        "en": "soy",
        "kk": "[sɔɪ]",
        "uk": "/sɔɪ/",
        "zh": "n. 醬油、大豆、豆製品",
        "unit": 18,
        "example": "Add some soy sauce to rice.",
        "exampleZh": "在白飯裡加一些醬油。"
    },
    {
        "id": 31593,
        "en": "space",
        "kk": "[spes]",
        "uk": "/speɪs/",
        "zh": "n. 空間、空地、空位、處所；vt. 把（某物）隔開、在（詞語等）之間加空格、變得昏昏沉沉、瞪著眼發呆",
        "unit": 18,
        "example": "There is no space in this car.",
        "exampleZh": "這輛車裡已經沒有空間了。"
    },
    {
        "id": 31594,
        "en": "spaghetti",
        "kk": "[spəˋɡɛti]",
        "uk": "/spəˈɡeti/",
        "zh": "n. 義大利麵、義大利式細麵條",
        "unit": 18,
        "example": "We eat hot spaghetti for lunch.",
        "exampleZh": "我們午餐吃熱騰騰的義大利麵。"
    },
    {
        "id": 31595,
        "en": "speak",
        "kk": "[spik]",
        "uk": "/spiːk/",
        "zh": "v. 說、講、說話、談話",
        "unit": 18,
        "example": "She can speak English very well.",
        "exampleZh": "她英語說得很好。"
    },
    {
        "id": 31596,
        "en": "speaker",
        "kk": "[ˋspikɚ]",
        "uk": "/ˈspiːkə(r)/",
        "zh": "n. 演講者、發言者、說話者、講某種語言的人",
        "unit": 18,
        "example": "The guest speaker gave a speech.",
        "exampleZh": "特邀演講者發表了演講。"
    },
    {
        "id": 31597,
        "en": "special",
        "kk": "[ˋspɛʃəl]",
        "uk": "/ˈspeʃ(ə)l/",
        "zh": "adj. 特別的、特殊的、格外看重的、特別要好的；n. 特色菜、特別節目、特價商品、折扣商品",
        "unit": 18,
        "example": "Today is a very special day for us.",
        "exampleZh": "今天對我們來說是非常特別的一天。"
    },
    {
        "id": 31598,
        "en": "speech",
        "kk": "[spitʃ]",
        "uk": "/spiːtʃ/",
        "zh": "n. 演講、演說、發言、談話",
        "unit": 18,
        "example": "The leader gave a great short speech.",
        "exampleZh": "領袖發表了一段精彩的簡短演說。"
    },
    {
        "id": 31599,
        "en": "speed",
        "kk": "[spid]",
        "uk": "/spiːd/",
        "zh": "n. 速度、快、迅速、排擋；vi. 快速移動、快速運送、超速駕駛、加速",
        "unit": 18,
        "example": "The car moved at high speed.",
        "exampleZh": "那輛車高速行駛。"
    },
    {
        "id": 31600,
        "en": "spell",
        "kk": "[spɛl]",
        "uk": "/spel/",
        "zh": "vt. 拼寫、拼字、拼作；n. 一段時間、咒語、符咒",
        "unit": 18,
        "example": "I've never been able to spell.",
        "exampleZh": "我從來都不會拼字。"
    },
    {
        "id": 31601,
        "en": "spend",
        "kk": "[spɛnd]",
        "uk": "/spend/",
        "zh": "vt. 花費、度過、花、消耗；n. 花費、開銷、預算",
        "unit": 18,
        "example": "I spend one hour on my homework.",
        "exampleZh": "我花一個小時做作業。"
    },
    {
        "id": 31602,
        "en": "spider",
        "kk": "[ˋspaɪdɚ]",
        "uk": "/ˈspaɪdə(r)/",
        "zh": "n. 蜘蛛、蜘蛛程式、爬蟲程式、狀似蜘蛛的物體；v. 急促爬動、設網、設圈套、快速搜尋",
        "unit": 18,
        "example": "A big spider made a web.",
        "exampleZh": "一隻大蜘蛛結了一張網。"
    },
    {
        "id": 31603,
        "en": "spirit",
        "kk": "[ˋspɪrət]",
        "uk": "/ˈspɪrɪt/",
        "zh": "n. 精神、心靈、情緒、心境；v. 偷偷帶走、秘密弄走、鼓勵、鼓舞",
        "unit": 18,
        "example": "The team has great team spirit.",
        "exampleZh": "這支隊伍有很棒的團隊精神。"
    },
    {
        "id": 31604,
        "en": "spoon",
        "kk": "[spun]",
        "uk": "/spuːn/",
        "zh": "n. 匙、勺子、調羹對、一匙的量；vt. 用匙舀、使成匙狀、高挑球",
        "unit": 18,
        "example": "She licked the spoon clean.",
        "exampleZh": "她把湯匙舔乾淨了。"
    },
    {
        "id": 31605,
        "en": "sport",
        "kk": "[spɔrt]",
        "uk": "/spɔːt/",
        "zh": "n. 體育運動、運動會、野外運動、成就感；v. 穿戴、展示、嬉戲、玩耍；adj. 運動的",
        "unit": 18,
        "example": "Tennis is a very fun field sport.",
        "exampleZh": "網球是一項非常有趣的球場運動。"
    },
    {
        "id": 31606,
        "en": "spring",
        "kk": "[sprɪŋ]",
        "uk": "/sprɪŋ/",
        "zh": "n. 春天、春季、彈簧、泉水；v. 跳、躍、突然彈開；adj. 春天的",
        "unit": 18,
        "example": "Spring came late this year.",
        "exampleZh": "今年春天來得晚。"
    },
    {
        "id": 31607,
        "en": "square",
        "kk": "[skwɛr]",
        "uk": "/skweə(r)/",
        "zh": "n. 正方形、廣場、平方；adj. 正方形的、平方的、公正的",
        "unit": 18,
        "example": "Draw a square on the paper.",
        "exampleZh": "在紙上畫一個正方形。"
    },
    {
        "id": 31608,
        "en": "stage",
        "kk": "[stedʒ]",
        "uk": "/steɪdʒ/",
        "zh": "n. 舞臺、階段、時期、旅程（或賽跑中）的一段；vt. 上演、演出、主辦、舉行",
        "unit": 18,
        "example": "She sang a song on stage.",
        "exampleZh": "她在舞台上唱了一首歌。"
    },
    {
        "id": 31609,
        "en": "stair",
        "kk": "[stɛr]",
        "uk": "/steə(r)/",
        "zh": "n. 樓梯、階梯、梯級",
        "unit": 18,
        "example": "He sat on the bottom stair alone.",
        "exampleZh": "他獨自坐在最下方的階梯上。"
    },
    {
        "id": 31610,
        "en": "stamp",
        "kk": "[stæmp]",
        "uk": "/stæmp/",
        "zh": "n. 印章、郵票、印記、戳記；vt. 郵票、跺、重踩、重踏；v. 郵票",
        "unit": 18,
        "example": "Put a stamp on this letter.",
        "exampleZh": "在這封信上貼一張郵票。"
    },
    {
        "id": 31611,
        "en": "stand",
        "kk": "[stænd]",
        "uk": "/stænd/",
        "zh": "v. 站、站立、起立、站起來；n. 架、座、臺、立場",
        "unit": 18,
        "example": "Please stand up when your name is called.",
        "exampleZh": "叫到你的名字時請起立。"
    },
    {
        "id": 31612,
        "en": "star",
        "kk": "[stɑr]",
        "uk": "/stɑː(r)/",
        "zh": "n. 星星、星、恆星、演藝界明星；v. 主演、使主演、給……加上星號、表現傑出；adj. 最好的、最出色的",
        "unit": 18,
        "example": "She's a US soap star.",
        "exampleZh": "她是美國肥皂劇明星。"
    },
    {
        "id": 31613,
        "en": "start",
        "kk": "[stɑrt]",
        "uk": "/stɑːt/",
        "zh": "v. 開始、著手、發生、發動；n. 開始、開端、啟程",
        "unit": 18,
        "example": "The fun game will start very soon.",
        "exampleZh": "這場有趣的遊戲很快就要開始了。"
    },
    {
        "id": 31614,
        "en": "state",
        "kk": "[stet]",
        "uk": "/steɪt/",
        "zh": "n. 州、狀態、狀況、緊張；adj. 州的、國事的、國事禮儀的、國家提供（或控制）的；vt. 陳述、說明、規定、公佈",
        "unit": 18,
        "example": "They live in the state of Ohio.",
        "exampleZh": "他們住在俄亥俄州。"
    },
    {
        "id": 31615,
        "en": "station",
        "kk": "[ˋsteʃən]",
        "uk": "/ˈsteɪʃ(ə)n/",
        "zh": "n. 車站、電視臺、廣播電臺、站；vt. 駐紮、派駐、派往、安置在",
        "unit": 18,
        "example": "I will meet you at the train station.",
        "exampleZh": "我會在火車站與你會合。"
    },
    {
        "id": 31616,
        "en": "stationery",
        "kk": "[ˋsteʃə͵nɛri]",
        "uk": "/ˈsteɪʃənri/",
        "zh": "n. 文具、信紙、信箋",
        "unit": 18,
        "example": "I need new stationery for school.",
        "exampleZh": "我需要上學用的新文具。"
    },
    {
        "id": 31617,
        "en": "stay",
        "kk": "[ste]",
        "uk": "/steɪ/",
        "zh": "vi. 停留、逗留、保持原狀、維持；n. 暫住、逗留、推遲",
        "unit": 18,
        "example": "Will you stay for supper?",
        "exampleZh": "你會留下來吃晚餐嗎？"
    },
    {
        "id": 31618,
        "en": "steak",
        "kk": "[stek]",
        "uk": "/steɪk/",
        "zh": "n. 牛排、肉排、魚排、魚塊",
        "unit": 18,
        "example": "He dug his fork into the steak.",
        "exampleZh": "他把餐叉叉進牛排。"
    },
    {
        "id": 31619,
        "en": "steal",
        "kk": "[stil]",
        "uk": "/stiːl/",
        "zh": "vt. 偷竊、盜竊、剽竊、竊取；n. 極廉價的物品、低價、斷球、偷壘",
        "unit": 18,
        "example": "Hunger drove her to steal.",
        "exampleZh": "飢餓驅使她去偷竊。"
    },
    {
        "id": 31620,
        "en": "steam",
        "kk": "[stim]",
        "uk": "/stiːm/",
        "zh": "n. 蒸汽、水蒸氣、水汽、霧氣；v. 散發蒸汽、冒熱氣、蒸、行駛；adj. 蒸汽的",
        "unit": 18,
        "example": "Steam rose from the hot tea.",
        "exampleZh": "熱茶冒出了蒸氣。"
    },
    {
        "id": 31621,
        "en": "step",
        "kk": "[stɛp]",
        "uk": "/step/",
        "zh": "n. 步驟、邁步、腳步、臺階；vi. 踏步、跨步、邁步、踏",
        "unit": 18,
        "example": "She took a step nearer.",
        "exampleZh": "她又靠近了一步。"
    },
    {
        "id": 31622,
        "en": "still",
        "kk": "[stɪl]",
        "uk": "/stɪl/",
        "zh": "adv. 仍然、還、依舊、還是；adj. 靜止的、不動的、寧靜的、寂靜的；n. 定格畫面、劇照、蒸餾器、靜止；v. 靜止、平靜、安靜、使（感情）減輕",
        "unit": 18,
        "example": "He still misbehaves occasionally.",
        "exampleZh": "他還是時不時地表現不端正。"
    },
    {
        "id": 31623,
        "en": "stingy",
        "kk": "[ˋstɪndʒi]",
        "uk": "/ˈstɪndʒi/",
        "zh": "adj. 小氣的、吝嗇的、小的、少的",
        "unit": 18,
        "example": "Don't be so stingy!",
        "exampleZh": "不要那麼吝嗇！"
    },
    {
        "id": 31624,
        "en": "stomach",
        "kk": "[ˋstʌmək]",
        "uk": "/ˈstʌmək/",
        "zh": "n. 胃、腹部、類胃器官、四胃之一；vt. 忍受、承受、吃得下",
        "unit": 18,
        "example": "My stomach hurts after eating lunch.",
        "exampleZh": "吃過午餐後我的肚子好痛。"
    },
    {
        "id": 31625,
        "en": "stomachache",
        "kk": "[ˋstʌmək͵ek]",
        "uk": "/ˈstʌməkeɪk/",
        "zh": "n. 胃痛、肚子痛",
        "unit": 18,
        "example": "I can't stand this stomachache.",
        "exampleZh": "我受不了我的胃痛。"
    },
    {
        "id": 31626,
        "en": "stone",
        "kk": "[ston]",
        "uk": "/stəʊn/",
        "zh": "n. 石頭、石料、石塊、寶石；vt. 向……扔石頭、去核、用石頭建；adj. 石的、石制的；adv. 完全地、全部地",
        "unit": 18,
        "example": "She's trying to lose a stone.",
        "exampleZh": "她正試圖失去一塊石頭。"
    },
    {
        "id": 31627,
        "en": "stop",
        "kk": "[stɑp]",
        "uk": "/stɒp/",
        "zh": "v. 停止、結束、中斷、停止運轉；n. 車站、停止、終止、停車路口",
        "unit": 18,
        "example": "Please stop making that loud noise now.",
        "exampleZh": "請現在停止製造那種吵鬧的噪音。"
    },
    {
        "id": 31628,
        "en": "store",
        "kk": "[stɔr]",
        "uk": "/stɔː(r)/",
        "zh": "n. 商店、倉庫、儲存處、儲存；vt. 儲存、貯存、儲藏",
        "unit": 18,
        "example": "She went to the book store today.",
        "exampleZh": "她今天去了書店。"
    },
    {
        "id": 31629,
        "en": "storm",
        "kk": "[stɔrm]",
        "uk": "/stɔːm/",
        "zh": "n. 暴風雨、暴風雪、風暴、爆發；v. 猛烈攻擊、突然襲擊、氣沖沖地走、非常生氣地說",
        "unit": 18,
        "example": "A dark storm came this morning.",
        "exampleZh": "今天早上來了一場暴風雨。"
    },
    {
        "id": 31630,
        "en": "story",
        "kk": "[ˋstɔri]",
        "uk": "/ˈstɔːri/",
        "zh": "n. 故事、敘述、新聞報道、描述；v. 用歷史故事畫裝飾",
        "unit": 18,
        "example": "Mom told us a funny fairy story.",
        "exampleZh": "媽媽給我們講了一個有趣的童話故事。"
    },
    {
        "id": 31631,
        "en": "stove",
        "kk": "[stov]",
        "uk": "/stəʊv/",
        "zh": "n. 火爐、爐子、廚灶、爐頭；v. 在爐中對（物體）進行熱處理、煙燻、消毒、在溫室中加速（植物）生長",
        "unit": 18,
        "example": "I burned myself on the stove.",
        "exampleZh": "我被爐子燙了。"
    },
    {
        "id": 31632,
        "en": "straight",
        "kk": "[stret]",
        "uk": "/streɪt/",
        "zh": "adj. 直的、筆直的、端正的、豎直的；adv. 直線地、徑直地、豎直地、直立地；n. 異性戀者、直線跑道、順子、750毫升瓶裝酒；v. 使變直",
        "unit": 18,
        "example": "His teeth were perfectly straight.",
        "exampleZh": "他的牙齒非常整齊。"
    },
    {
        "id": 31633,
        "en": "strange",
        "kk": "[strendʒ]",
        "uk": "/streɪndʒ/",
        "zh": "adj. 奇怪的、不尋常的、陌生的、不熟悉的；adv. 奇怪地、不尋常地",
        "unit": 18,
        "example": "I heard a strange sound last night.",
        "exampleZh": "我昨晚聽到一個奇怪的聲音。"
    },
    {
        "id": 31634,
        "en": "stranger",
        "kk": "[ˋstrendʒɚ]",
        "uk": "/ˈstreɪndʒə(r)/",
        "zh": "n. 陌生人、新來者、異鄉人、從未經歷某事的人",
        "unit": 18,
        "example": "Never take candy from a stranger.",
        "exampleZh": "絕不要拿陌生人的糖果。"
    },
    {
        "id": 31635,
        "en": "straw",
        "kk": "[strɔ]",
        "uk": "/strɔː/",
        "zh": "n. 稻草、麥稈、吸管、稻草色；adj. 稻草的、無價值的",
        "unit": 18,
        "example": "Drink your milk with a straw.",
        "exampleZh": "用吸管喝你的牛奶。"
    },
    {
        "id": 31636,
        "en": "strawberry",
        "kk": "[ˋstrɔb͵ɛri]",
        "uk": "/ˈstrɔːbəri/",
        "zh": "n. 草莓、草莓色、紫紅色",
        "unit": 18,
        "example": "She ate a sweet red strawberry.",
        "exampleZh": "她吃了一顆香甜的紅草莓。"
    },
    {
        "id": 31637,
        "en": "stream",
        "kk": "[strim]",
        "uk": "/striːm/",
        "zh": "n. 小河、小溪、一連串、源源不斷；vi. 流動、湧動、不斷地流出、不斷地排出",
        "unit": 18,
        "example": "They jumped over the stream.",
        "exampleZh": "他們跳過了小溪。"
    },
    {
        "id": 31638,
        "en": "street",
        "kk": "[strit]",
        "uk": "/striːt/",
        "zh": "n. 街道、街、馬路、車行道",
        "unit": 18,
        "example": "He lives just down the street.",
        "exampleZh": "他就住在街上。"
    },
    {
        "id": 31639,
        "en": "strike",
        "kk": "[straɪk]",
        "uk": "/straɪk/",
        "zh": "v. 擊、撞、打；n. 罷工、罷市、罷課、襲擊",
        "unit": 18,
        "example": "The clock began to strike twelve.",
        "exampleZh": "鐘聲開始敲響十二點。"
    },
    {
        "id": 31640,
        "en": "strong",
        "kk": "[strɔŋ]",
        "uk": "/strɒŋ/",
        "zh": "adj. 強壯的、健壯的、堅固的、結實的；adv. 強勁地、猛烈地；n. 強勢群體",
        "unit": 18,
        "example": "He's the strong silent type.",
        "exampleZh": "他是那種沉默寡言的強者。"
    },
    {
        "id": 31641,
        "en": "student",
        "kk": "[ˋstudənt]",
        "uk": "/ˈstjuːd(ə)nt/",
        "zh": "n. 學生、學者",
        "unit": 18,
        "example": "Every student must read this good book.",
        "exampleZh": "每位學生都必須讀這本好書。"
    },
    {
        "id": 31642,
        "en": "study",
        "kk": "[ˋstʌdi]",
        "uk": "/ˈstʌdi/",
        "zh": "n. 研究、調查、學習、攻讀；vt. 學習、攻讀、認真閱讀、仔細看",
        "unit": 18,
        "example": "We study hard for the math test.",
        "exampleZh": "我們為了數學考試努力研讀。"
    },
    {
        "id": 31643,
        "en": "stupid",
        "kk": "[ˋstupəd]",
        "uk": "/ˈstjuːpɪd/",
        "zh": "adj. 笨的、傻的、腦子不好使的、欠考慮的；n. 傻瓜、笨蛋",
        "unit": 18,
        "example": "How could I have been so stupid?",
        "exampleZh": "我怎麼會這麼蠢呢？"
    },
    {
        "id": 31644,
        "en": "style",
        "kk": "[staɪl]",
        "uk": "/staɪl/",
        "zh": "n. 風格、方式、作風、款式；vt. 設計、給……造型、稱呼、命名",
        "unit": 18,
        "example": "I like this new hair style.",
        "exampleZh": "我喜歡這個新髮型。"
    },
    {
        "id": 31645,
        "en": "subject",
        "kk": "[səbˋdʒɛkt]",
        "uk": "/ˈsʌbdʒɪkt/",
        "zh": "n. 科目、主題、話題、學科；vt. 使臣服、征服、壓服、使經受；adj. 隸屬的、臣服的、可能受……影響的、易遭受……的",
        "unit": 18,
        "example": "Art is my best school subject.",
        "exampleZh": "美術是我最拿手的學校科目。"
    },
    {
        "id": 31646,
        "en": "subway",
        "kk": "[ˋsʌb͵we]",
        "uk": "/ˈsʌbweɪ/",
        "zh": "n. 地鐵、地下通道；v. 乘地鐵",
        "unit": 18,
        "example": "We take the subway to school.",
        "exampleZh": "我們搭捷運去上學。"
    },
    {
        "id": 31647,
        "en": "succeed",
        "kk": "[səkˋsid]",
        "uk": "/səkˈsiːd/",
        "zh": "v. 成功、達成、表現出色、有作為",
        "unit": 18,
        "example": "Work hard and you will surely succeed.",
        "exampleZh": "努力工作，你就一定會成功的。"
    },
    {
        "id": 31648,
        "en": "success",
        "kk": "[səkˋsɛs]",
        "uk": "/səkˈses/",
        "zh": "n. 成功、勝利、發財、成名",
        "unit": 18,
        "example": "Hard work will bring you success.",
        "exampleZh": "辛勤工作會為你帶來成功。"
    },
    {
        "id": 31649,
        "en": "successful",
        "kk": "[səkˋsɛsfəl]",
        "uk": "/səkˈsesf(ə)l/",
        "zh": "adj. 成功的、如願以償的、事業有成的、飛黃騰達的",
        "unit": 18,
        "example": "I think it's going to be successful.",
        "exampleZh": "我認為它會成功。"
    },
    {
        "id": 31650,
        "en": "such",
        "kk": "[sʌtʃ]",
        "uk": "/sʌtʃ/",
        "zh": "det. 這樣的、如此的、這等的、如此；pron. 這種人、這類的、那樣的情況、那件事；adv. 如此、這麼、如此程度",
        "unit": 18,
        "example": "I have never seen such a big dog.",
        "exampleZh": "我從沒見過這麼大的狗。"
    },
    {
        "id": 31651,
        "en": "sudden",
        "kk": "[ˋsʌdən]",
        "uk": "/ˈsʌd(ə)n/",
        "zh": "adj. 突然的、意外的；n. 突然發生的事；adv. 突然地",
        "unit": 18,
        "example": "There was a sudden loud noise.",
        "exampleZh": "突然傳來一陣巨大的聲響。"
    },
    {
        "id": 31652,
        "en": "sugar",
        "kk": "[ˋʃʊɡɚ]",
        "uk": "/ˈʃʊɡə(r)/",
        "zh": "n. 食糖、一匙糖、一塊方糖、糖；v. 給……加糖、美化、提取楓蜜、在樹幹上塗撒糖；int. 糟糕、哎呀",
        "unit": 18,
        "example": "Do you take sugar in your tea?",
        "exampleZh": "你的茶裡面有加糖嗎？"
    },
    {
        "id": 31653,
        "en": "suggest",
        "kk": "[səˋdʒɛst]",
        "uk": "/səˈdʒest/",
        "zh": "vt. 建議、提議、推薦、舉薦",
        "unit": 18,
        "example": "I suggest we let the matter drop.",
        "exampleZh": "我建議咱們別再提及此事。"
    },
    {
        "id": 31654,
        "en": "suit",
        "kk": "[sut]",
        "uk": "/suːt/",
        "zh": "n. 套裝、西裝、訴訟、成套服裝；vt. 適合、相配、使顯得漂亮、與……相配",
        "unit": 18,
        "example": "He wore a clean black suit.",
        "exampleZh": "他穿著一套乾淨的黑西裝。"
    },
    {
        "id": 31655,
        "en": "summer",
        "kk": "[ˋsʌmɚ]",
        "uk": "/ˈsʌmə(r)/",
        "zh": "n. 夏天、夏季、年、歲；v. 避暑、過夏、夏天放牧",
        "unit": 18,
        "example": "We swim in the river every summer.",
        "exampleZh": "我們每年夏天都在河裡游泳。"
    },
    {
        "id": 31656,
        "en": "sun",
        "kk": "[sʌn]",
        "uk": "/sʌn/",
        "zh": "n. 太陽、日光、陽光、恆星；v. 曬太陽、日光浴",
        "unit": 18,
        "example": "The warm sun shines all day long.",
        "exampleZh": "溫暖的太陽整天普照。"
    },
    {
        "id": 31657,
        "en": "Sunday",
        "kk": "[ˋsʌn͵de]",
        "uk": "/ˈsʌndeɪ/",
        "zh": "n. 星期天、星期日、禮拜日",
        "unit": 18,
        "example": "We work every day except Sunday.",
        "exampleZh": "除了星期日，我們每天都會工作。"
    },
    {
        "id": 31658,
        "en": "sunny",
        "kk": "[ˋsʌni]",
        "uk": "/ˈsʌni/",
        "zh": "adj. 陽光充足的、暖和的、開朗的、陽光的",
        "unit": 18,
        "example": "We went for a walk on sunny days.",
        "exampleZh": "我們在晴朗的日子裡去散步。"
    },
    {
        "id": 31659,
        "en": "super",
        "kk": "[ˋsupɚ]",
        "uk": "/ˈsuːpə(r)/",
        "zh": "adj. 很、極好的、極優秀的、超級的；adv. 極、極其、非常；n. 警官、警長、管理人、主管",
        "unit": 18,
        "example": "We had a super time.",
        "exampleZh": "我們度過了一段美好的時光。"
    },
    {
        "id": 31660,
        "en": "supermarket",
        "kk": "[ˋsupɚ͵mɑrkɪt]",
        "uk": "/ˈsuːpəmɑːkɪt/",
        "zh": "n. 超市、超級市場",
        "unit": 18,
        "example": "I do a weekly shop at the supermarket.",
        "exampleZh": "我一週上超市一次。"
    },
    {
        "id": 31661,
        "en": "supper",
        "kk": "[ˋsʌpɚ]",
        "uk": "/ˈsʌpə(r)/",
        "zh": "n. 晚餐、夜宵、宵夜、晚餐會；v. 給……供餐、吃晚飯",
        "unit": 18,
        "example": "Who's going to cook supper?",
        "exampleZh": "誰來煮飯？"
    },
    {
        "id": 31662,
        "en": "supply",
        "kk": "[səpˋlaɪ]",
        "uk": "/səˈplaɪ/",
        "zh": "n. 供應、補給品、存貨；v. 供應、提供、供給",
        "unit": 18,
        "example": "They supply fresh water to us.",
        "exampleZh": "他們向我們提供新鮮的水。"
    },
    {
        "id": 31663,
        "en": "support",
        "kk": "[səˋpɔrt]",
        "uk": "/səˈpɔːt/",
        "zh": "vt. 支持、支援、擁護、鼓勵；n. 支撐、支援、擁護、幫助",
        "unit": 18,
        "example": "My family will always support me.",
        "exampleZh": "我的家人會永遠支持我。"
    },
    {
        "id": 31664,
        "en": "sure",
        "kk": "[ʃʊr]",
        "uk": "/ʃʊə(r); ʃɔː(r)/",
        "zh": "adj. 確信的、有把握的、肯定的、一定的；adv. 當然、確實、的確、誠然",
        "unit": 18,
        "example": "Are you sure about your new plan?",
        "exampleZh": "你對你的新計畫確定嗎？"
    },
    {
        "id": 31665,
        "en": "surf",
        "kk": "[sɝf]",
        "uk": "/sɜːf/",
        "zh": "v. 上網、衝浪、坐在高速行駛的車輛（尤指火車）頂部（或外面）享受刺激感、頻繁調換電影片道；n. 拍岸浪花、一次衝浪",
        "unit": 18,
        "example": "Boys love to surf the waves.",
        "exampleZh": "男孩們喜歡在浪花中衝浪。"
    },
    {
        "id": 31666,
        "en": "surface",
        "kk": "[ˋsɝfəs]",
        "uk": "/ˈsɜːfɪs/",
        "zh": "n. 表面、水面、地面、桌面；vi. 浮出水面、顯露、暴露、公開；adj. 表面上的、外表上的、表面的、水陸運輸的",
        "unit": 18,
        "example": "The table has a smooth surface.",
        "exampleZh": "這張桌子表面很光滑。"
    },
    {
        "id": 31667,
        "en": "surprise",
        "kk": "[sɚˋpraɪz]",
        "uk": "/səˈpraɪz/",
        "zh": "n. 不尋常的事件、意外之事、驚奇、驚訝；vt. 意外發現、使（某人）吃驚、當場抓獲；int. 感到驚奇吧！；adj. 令人驚奇的、意外的",
        "unit": 18,
        "example": "Her gift was a very nice surprise.",
        "exampleZh": "她的禮物是一個很棒的驚喜。"
    },
    {
        "id": 31668,
        "en": "surprised",
        "kk": "[sɚˋpraɪzd]",
        "uk": "/səˈpraɪzd/",
        "zh": "adj. 感到驚訝的、意外的、驚訝的、詫異的；v. 使驚奇、使詫異、使感到意外",
        "unit": 18,
        "example": "I'm really not a bit surprised.",
        "exampleZh": "我確實毫不吃驚。"
    },
    {
        "id": 31669,
        "en": "survive",
        "kk": "[sɚˋvaɪv]",
        "uk": "/səˈvaɪv/",
        "zh": "v. 倖存、生還、活下來、比……活得長",
        "unit": 18,
        "example": "Animals need water to survive in winter.",
        "exampleZh": "動物需要水才能在冬天存活下來。"
    },
    {
        "id": 31670,
        "en": "swallow",
        "kk": "[ˋswɑlo]",
        "uk": "/ˈswɒləʊ/",
        "zh": "v. 吞嚥、吞下、嚥下、做吞嚥動作；n. 燕子、吞、一口",
        "unit": 18,
        "example": "Chew your food before you swallow.",
        "exampleZh": "吞下前要先把食物嚼碎。"
    },
    {
        "id": 31671,
        "en": "swan",
        "kk": "[swɑn]",
        "uk": "/swɒn/",
        "zh": "n. 天鵝、天鵝星座；v. 無目的地漫遊、閒逛",
        "unit": 18,
        "example": "A white swan swims in water.",
        "exampleZh": "一隻白天鵝在水裡游泳。"
    },
    {
        "id": 31672,
        "en": "sweater",
        "kk": "[ˋswɛtɚ]",
        "uk": "/ˈswetə(r)/",
        "zh": "n. 毛衣、針織套衫、毛線衫、大量出汗的人",
        "unit": 18,
        "example": "She wears a warm wool sweater.",
        "exampleZh": "她穿著一件溫暖的毛衣。"
    },
    {
        "id": 31673,
        "en": "sweep",
        "kk": "[swip]",
        "uk": "/swiːp/",
        "zh": "v. 打掃、清除、帶走、捲走；n. 打掃、清掃、揮動、巡行",
        "unit": 18,
        "example": "Please sweep the floor right now.",
        "exampleZh": "請現在打掃地板。"
    },
    {
        "id": 31674,
        "en": "sweet",
        "kk": "[swit]",
        "uk": "/swiːt/",
        "zh": "adj. 含糖的、甜的、未加鹽的；n. 親愛的、寶貝、糖果、甜食",
        "unit": 18,
        "example": "These red apples taste very sweet today.",
        "exampleZh": "這些紅蘋果今天嚐起來非常香甜。"
    },
    {
        "id": 31675,
        "en": "swim",
        "kk": "[swɪm]",
        "uk": "/swɪm/",
        "zh": "v. 游泳、橫渡、遊、遊過；n. 游泳、適合釣魚的靜止深水處、深潭、漂浮；adj. 游泳時穿戴的",
        "unit": 18,
        "example": "Kids love to swim in the pool.",
        "exampleZh": "孩子們喜歡在游泳池裡游泳。"
    },
    {
        "id": 31676,
        "en": "swing",
        "kk": "[swɪŋ]",
        "uk": "/swɪŋ/",
        "zh": "v. 搖擺、擺動、揮動、轉向；n. 鞦韆、搖擺、擺動",
        "unit": 18,
        "example": "The kids like to swing high.",
        "exampleZh": "孩子們喜歡盪得很高。"
    },
    {
        "id": 31677,
        "en": "symbol",
        "kk": "[ˋsɪmbəl]",
        "uk": "/ˈsɪmb(ə)l/",
        "zh": "n. 象徵、標誌、符號、代表性的人",
        "unit": 18,
        "example": "The red rose is a symbol.",
        "exampleZh": "紅玫瑰是一種象徵。"
    },
    {
        "id": 31678,
        "en": "system",
        "kk": "[ˋsɪstəm]",
        "uk": "/ˈsɪstəm/",
        "zh": "n. 系統、體制、制度、方式",
        "unit": 18,
        "example": "Our school has a good system.",
        "exampleZh": "我們學校有一套良好的制度。"
    },
    {
        "id": 31679,
        "en": "table",
        "kk": "[ˋtebəl]",
        "uk": "/ˈteɪb(ə)l/",
        "zh": "n. 桌子、臺子、一桌人、一桌酒席；vt. 正式提交討論、擱置、暫緩審議、用寬貼邊加固",
        "unit": 18,
        "example": "Put the book on the round table.",
        "exampleZh": "把書放在圓桌上面。"
    },
    {
        "id": 31680,
        "en": "tail",
        "kk": "[tel]",
        "uk": "/teɪl/",
        "zh": "n. 尾巴、尾部、狹翅須、尾狀物；vt. 尾隨、跟蹤、盯梢、曲線移動",
        "unit": 18,
        "example": "The big dog wagged its long tail.",
        "exampleZh": "大狗搖著牠長長的尾巴。"
    },
    {
        "id": 31681,
        "en": "take",
        "kk": "[tek]",
        "uk": "/teɪk/",
        "zh": "vt. 拿、攜帶、拿走、帶去；n. 鏡頭、場景、收入量、看法",
        "unit": 18,
        "example": "Take whatever action is needed.",
        "exampleZh": "採取任何需要的行動。"
    },
    {
        "id": 31682,
        "en": "tale",
        "kk": "[tel]",
        "uk": "/teɪl/",
        "zh": "n. 故事、傳說、描述、講述",
        "unit": 18,
        "example": "He told us an old fairy tale.",
        "exampleZh": "他給我們講了一個古老的童話故事。"
    },
    {
        "id": 31683,
        "en": "talent",
        "kk": "[ˋtælənt]",
        "uk": "/ˈtælənt/",
        "zh": "n. 才能、天賦、天才、人才",
        "unit": 18,
        "example": "He's got lots of talent.",
        "exampleZh": "他有許多天賦。"
    },
    {
        "id": 31684,
        "en": "talk",
        "kk": "[tɔk]",
        "uk": "/tɔːk/",
        "zh": "v. 談話、說話、交談、談判；n. 講話、交談、討論、正式會談",
        "unit": 18,
        "example": "Let us talk about your new school.",
        "exampleZh": "我們來聊聊你的新學校吧。"
    },
    {
        "id": 31685,
        "en": "talkative",
        "kk": "[ˋtɔkətɪv]",
        "uk": "/ˈtɔːkətɪv/",
        "zh": "adj. 多話的、愛說話的、健談的",
        "unit": 18,
        "example": "My little brother is very talkative at dinner.",
        "exampleZh": "我的小弟弟在吃晚餐時非常健談多話。"
    },
    {
        "id": 31686,
        "en": "tall",
        "kk": "[tɔl]",
        "uk": "/tɔːl/",
        "zh": "adj. 高的、高大的、有……高的、身高……的",
        "unit": 18,
        "example": "She was tall and slim.",
        "exampleZh": "她又高又苗條。"
    },
    {
        "id": 31687,
        "en": "tangerine",
        "kk": "[͵tændʒɚˋin]",
        "uk": "/ˌtændʒəˈriːn/",
        "zh": "n. 橘子、柑橘、柑橘樹、橘樹",
        "unit": 18,
        "example": "He ate a sweet orange tangerine.",
        "exampleZh": "他吃了一顆甘甜的橘子。"
    },
    {
        "id": 31688,
        "en": "tank",
        "kk": "[tæŋk]",
        "uk": "/tæŋk/",
        "zh": "n. 坦克、箱、罐、缸；vi. 徹底失敗、破產、故意輸掉比賽、給車輛加油",
        "unit": 18,
        "example": "The tank became bogged down in mud.",
        "exampleZh": "坦克陷入了爛泥中。"
    },
    {
        "id": 31689,
        "en": "tape",
        "kk": "[tep]",
        "uk": "/teɪp/",
        "zh": "n. 磁帶、錄音帶、錄了音的盒式磁帶、錄了像的盒式磁帶；vt. 錄音、錄影、用膠帶貼上、用帶子繫緊",
        "unit": 18,
        "example": "Fix the paper with clear tape.",
        "exampleZh": "用透明膠帶把紙黏好。"
    },
    {
        "id": 31690,
        "en": "task",
        "kk": "[tæsk]",
        "uk": "/tɑːsk/",
        "zh": "n. 任務、工作、活動；vt. 派給……任務、對（手段，能力）要求極高、考驗",
        "unit": 18,
        "example": "He did the hard task well.",
        "exampleZh": "他把那項艱鉅的任務做得很好。"
    },
    {
        "id": 31691,
        "en": "taste",
        "kk": "[test]",
        "uk": "/teɪst/",
        "zh": "n. 味道、滋味、味覺、愛好；v. 嚐起來、嚐出……的味道、嘗、品嚐",
        "unit": 18,
        "example": "This fresh soup has a sweet taste.",
        "exampleZh": "這碗新鮮的湯有著清甜的滋味。"
    },
    {
        "id": 31692,
        "en": "taxi",
        "kk": "[ˋtæksi]",
        "uk": "/ˈtæksi/",
        "zh": "n. 計程車、小型不定時公交車、出租汽船；vt. 緩慢滑行、駕駛（飛機）緩慢滑行、乘計程車",
        "unit": 18,
        "example": "We take a taxi to the station.",
        "exampleZh": "我們搭計程車去車站。"
    },
    {
        "id": 31693,
        "en": "tea",
        "kk": "[ti]",
        "uk": "/tiː/",
        "zh": "n. 茶、茶水、飲料、茶葉；vi. 喝茶、吃下午茶",
        "unit": 18,
        "example": "There's hardly any tea left.",
        "exampleZh": "茶已經所剩無幾了。"
    },
    {
        "id": 31694,
        "en": "teach",
        "kk": "[titʃ]",
        "uk": "/tiːtʃ/",
        "zh": "vt. 教導、教授、講授、教會；n. 教師",
        "unit": 18,
        "example": "My mother will teach me to cook.",
        "exampleZh": "我媽媽會教我做飯。"
    },
    {
        "id": 31695,
        "en": "teacher",
        "kk": "[ˋtitʃɚ]",
        "uk": "/ˈtiːtʃə(r)/",
        "zh": "n. 老師、教師、教員、給人教益的事物",
        "unit": 18,
        "example": "My teacher is kind to every student.",
        "exampleZh": "我的老師對每位學生都很好。"
    },
    {
        "id": 31696,
        "en": "team",
        "kk": "[tim]",
        "uk": "/tiːm/",
        "zh": "n. 隊伍、隊、小組、工作隊；v. 協作、合作、使（顏色、布料、衣服）相配、一組牲口",
        "unit": 18,
        "example": "Our ball team won the cup.",
        "exampleZh": "我們的球隊贏得了獎盃。"
    },
    {
        "id": 31697,
        "en": "teapot",
        "kk": "[ˋti͵pɑt]",
        "uk": "/ˈtiːpɒt/",
        "zh": "n. 茶壺、〈習語〉atempestinateapot",
        "unit": 18,
        "example": "Hot tea is in the teapot.",
        "exampleZh": "茶壺裡有熱茶。"
    },
    {
        "id": 31698,
        "en": "tear",
        "kk": "[tɛr]",
        "uk": "/teə(r); tɪə/",
        "zh": "v. 撕碎、撕裂、撕破、劃破；n. 淚水、哭泣、裂口、破洞",
        "unit": 18,
        "example": "Ann wiped a tear from her eye.",
        "exampleZh": "安擦去眼裡的淚水。"
    },
    {
        "id": 31699,
        "en": "teenager",
        "kk": "[ˋti͵nedʒɚ]",
        "uk": "/ˈtiːneɪdʒə(r)/",
        "zh": "n. 青少年、十幾歲的孩子",
        "unit": 18,
        "example": "The teenager plays with his dog.",
        "exampleZh": "那名青少年正在和他的狗玩耍。"
    },
    {
        "id": 31700,
        "en": "telephone",
        "kk": "[ˋtɛlə͵fon]",
        "uk": "/ˈtelɪfəʊn/",
        "zh": "n. 電話通訊系統、電話、話筒、受話器；vt. 打電話",
        "unit": 18,
        "example": "The telephone rang three times loudly.",
        "exampleZh": "電話大聲地響了三聲。"
    },
    {
        "id": 31701,
        "en": "television",
        "kk": "[ˋtɛlə͵vɪʒən]",
        "uk": "/ˈtelɪvɪʒ(ə)n/",
        "zh": "n. 電視、電視機、電視節目、電視業",
        "unit": 18,
        "example": "I'll turn the television on.",
        "exampleZh": "我來開啟電視機。"
    },
    {
        "id": 31702,
        "en": "tell",
        "kk": "[tɛl]",
        "uk": "/tel/",
        "zh": "v. 說、告訴、告知、講述；n. （洩露試圖作弊的）不經意動作、臺形（土墩）遺址",
        "unit": 18,
        "example": "Please tell me your new phone number.",
        "exampleZh": "請告訴我你的新電話號碼。"
    },
    {
        "id": 31703,
        "en": "temperature",
        "kk": "[ˋtɛmprətʃɚ]",
        "uk": "/ˈtemprətʃə(r)/",
        "zh": "n. 溫度、氣溫、體溫、發燒",
        "unit": 18,
        "example": "The room temperature is very warm.",
        "exampleZh": "室內溫度非常溫暖。"
    },
    {
        "id": 31704,
        "en": "temple",
        "kk": "[ˋtɛmpəl]",
        "uk": "/ˈtemp(ə)l/",
        "zh": "n. 廟宇、寺院、太陽穴、鬢角",
        "unit": 18,
        "example": "We saw an old stone temple.",
        "exampleZh": "我們看到了一座古老的石頭寺廟。"
    },
    {
        "id": 31705,
        "en": "ten",
        "kk": "[tɛn]",
        "uk": "/ten/",
        "zh": "num. 十個、十；adj. 十的；det. 十個",
        "unit": 18,
        "example": "I have ten books in my room.",
        "exampleZh": "我的房間裡有十本書。"
    },
    {
        "id": 31706,
        "en": "tennis",
        "kk": "[ˋtɛnəs]",
        "uk": "/ˈtenɪs/",
        "zh": "n. 網球、網球運動",
        "unit": 18,
        "example": "I'm not much good at tennis.",
        "exampleZh": "我不太擅長打網球。"
    },
    {
        "id": 31707,
        "en": "tent",
        "kk": "[tɛnt]",
        "uk": "/tent/",
        "zh": "n. 帳篷、西班牙紅葡萄酒、塞條、塞子；v. 由帳篷組成、用帳篷（或帳篷狀物）遮蓋、使成帳篷狀、住帳篷",
        "unit": 18,
        "example": "I heard the tent rip.",
        "exampleZh": "我聽到了帳篷撕裂的聲音。"
    },
    {
        "id": 31708,
        "en": "term",
        "kk": "[tɝm]",
        "uk": "/tɜːm/",
        "zh": "n. 任期、詞語、術語、措辭；vt. 把……稱為",
        "unit": 18,
        "example": "It's nearly the end of term.",
        "exampleZh": "學期快要結束了。"
    },
    {
        "id": 31709,
        "en": "terrible",
        "kk": "[ˋtɛrəbəl]",
        "uk": "/ˈterəb(ə)l/",
        "zh": "adj. 可怕的、糟糕的、令人極為不快的、極度的",
        "unit": 18,
        "example": "I had a terrible headache this morning.",
        "exampleZh": "我今天早上頭痛得非常厲害。"
    },
    {
        "id": 31710,
        "en": "terrific",
        "kk": "[tɚˋɪfɪk]",
        "uk": "/təˈrɪfɪk/",
        "zh": "adj. 很棒的、極好的、了不起的、極大的",
        "unit": 18,
        "example": "She's doing a terrific job.",
        "exampleZh": "她做得很好。"
    },
    {
        "id": 31711,
        "en": "test",
        "kk": "[tɛst]",
        "uk": "/test/",
        "zh": "n. 測試、測驗、考試、檢查；vt. 試驗、測試、測驗",
        "unit": 18,
        "example": "We have a math test today.",
        "exampleZh": "我們今天有一場數學測驗。"
    },
    {
        "id": 31712,
        "en": "textbook",
        "kk": "[ˋtɛk͵stbʊk]",
        "uk": "/ˈtekstbʊk/",
        "zh": "n. 教科書、課本；adj. 規範的、典型的",
        "unit": 18,
        "example": "I gave the textbook back to him.",
        "exampleZh": "我把課本還給他了。"
    },
    {
        "id": 31713,
        "en": "than",
        "kk": "[ðæn]",
        "uk": "/ðæn; ðən/",
        "zh": "prep. 比、多於、超過；conj. 比、多於",
        "unit": 18,
        "example": "My older brother is taller than me.",
        "exampleZh": "我哥哥比我還要高。"
    },
    {
        "id": 31714,
        "en": "thank",
        "kk": "[θæŋk]",
        "uk": "/θæŋk/",
        "zh": "vt. 感謝、向……表示謝意、要……負責、責怪；n. 感謝；int. 謝謝",
        "unit": 18,
        "example": "I'm better now, thank you.",
        "exampleZh": "我現在好多了，謝謝。"
    },
    {
        "id": 31715,
        "en": "Thanksgiving",
        "kk": "[͵θæŋˋksɡɪvɪŋ]",
        "uk": "/ˌθæŋksˈɡɪvɪŋ/",
        "zh": "n. 感恩節、感恩",
        "unit": 18,
        "example": "Are you going home for Thanksgiving?",
        "exampleZh": "你回家過感恩節嗎？"
    },
    {
        "id": 31716,
        "en": "that",
        "kk": "[ðæt]",
        "uk": "/ðæt/",
        "zh": "pron. 那、那個；det. 那、那個；conj. 引導名詞子句；adv. 那麼、那樣地",
        "unit": 18,
        "example": "Phew! That was close—that car nearly hit us.",
        "exampleZh": "唷！很接近——那輛車差點撞到我們。"
    },
    {
        "id": 31717,
        "en": "theater",
        "kk": "[ˋθiətɚ]",
        "uk": "/ˈθɪətə(r)/",
        "zh": "n. 電影院、戲院、劇場、戲劇",
        "unit": 18,
        "example": "We went to the movie theater.",
        "exampleZh": "我們去了電影院。"
    },
    {
        "id": 31718,
        "en": "then",
        "kk": "[ðɛn]",
        "uk": "/ðen/",
        "zh": "adv. 然後、當時、到那時、接下來；adj. 當時（任職等）的",
        "unit": 18,
        "example": "We ate dinner and then went home.",
        "exampleZh": "我們吃了晚餐，然後回家了。"
    },
    {
        "id": 31719,
        "en": "there",
        "kk": "[ðɛr]",
        "uk": "/ðeə(r)/",
        "zh": "adv. 那裡、在那裡、在那邊、在那點上；int. 你瞧；n. 那個地方",
        "unit": 18,
        "example": "Put your bag over there on the chair.",
        "exampleZh": "把你的袋子放在那邊的椅子上。"
    },
    {
        "id": 31720,
        "en": "therefore",
        "kk": "[ˋðɛr͵fɔr]",
        "uk": "/ˈðeəfɔː(r)/",
        "zh": "adv. 因此、所以",
        "unit": 18,
        "example": "He was sick, therefore he stayed home.",
        "exampleZh": "他生病了，因此他留在家中。"
    },
    {
        "id": 31721,
        "en": "these",
        "kk": "[ðiz]",
        "uk": "/ðiːz/",
        "zh": "pron. 這些；det. 這些；adj. 這些的",
        "unit": 18,
        "example": "Do you like these new red shoes?",
        "exampleZh": "你喜歡這些新的紅鞋嗎？"
    },
    {
        "id": 31722,
        "en": "thick",
        "kk": "[θɪk]",
        "uk": "/θɪk/",
        "zh": "adj. 厚的、粗的、有……厚的、厚重的；n. 在……最激烈時、在……最緊張的時刻；adv. 厚地、濃密地、大量地",
        "unit": 18,
        "example": "Put on a thick coat in winter.",
        "exampleZh": "冬天穿上一件厚外套吧。"
    },
    {
        "id": 31723,
        "en": "thief",
        "kk": "[θif]",
        "uk": "/θiːf/",
        "zh": "n. 小偷、賊、偷竊犯",
        "unit": 18,
        "example": "The police caught the bad thief.",
        "exampleZh": "警方抓住了那個壞小偷。"
    },
    {
        "id": 31724,
        "en": "thin",
        "kk": "[θɪn]",
        "uk": "/θɪn/",
        "zh": "adj. 薄的、細的、瘦的、稀疏的；vt. 使稀薄、使變淡、變稀疏、（擁擠的人群、植物、物品等）變稀少；adv. 薄薄地",
        "unit": 18,
        "example": "The book has a thin paper cover.",
        "exampleZh": "這本書有一個薄薄的紙封面。"
    },
    {
        "id": 31725,
        "en": "thing",
        "kk": "[θɪŋ]",
        "uk": "/θɪŋ/",
        "zh": "n. 事情、東西、物、物體",
        "unit": 18,
        "example": "This small thing is very useful to me.",
        "exampleZh": "這個小東西對我很有用。"
    },
    {
        "id": 31726,
        "en": "think",
        "kk": "[θɪŋk]",
        "uk": "/θɪŋk/",
        "zh": "v. 想、認為、以為、明白；n. 想、思索、思考；adj. 思想的",
        "unit": 18,
        "example": "I think their methods stink.",
        "exampleZh": "我認為他們的方法很糟糕。"
    },
    {
        "id": 31727,
        "en": "third",
        "kk": "[θɝd]",
        "uk": "/θɜːd/",
        "zh": "num. 第三；n. 三分之一、第三檔、三度音、三等學位；adj. 第三的、三分之一的；adv. 第三",
        "unit": 18,
        "example": "He won third place in the race.",
        "exampleZh": "他在比賽中獲得了第三名。"
    },
    {
        "id": 31728,
        "en": "thirsty",
        "kk": "[ˋθɝsti]",
        "uk": "/ˈθɜːsti/",
        "zh": "adj. 口渴的、渴的、渴望的、渴求的",
        "unit": 18,
        "example": "When a baby is thirsty, it feeds more often.",
        "exampleZh": "當寶寶口渴時，他會更頻繁地吃奶。"
    },
    {
        "id": 31729,
        "en": "thirteen",
        "kk": "[ˋθɝˋtin]",
        "uk": "/ˌθɜːˈtiːn/",
        "zh": "num. 十三；n. 十三、十三歲、十三個；adj. 十三的、十三個的",
        "unit": 18,
        "example": "My sister is thirteen years old now.",
        "exampleZh": "我妹妹現在十三歲了。"
    },
    {
        "id": 31730,
        "en": "thirty",
        "kk": "[ˋθɝ͵di]",
        "uk": "/ˈθɜːti/",
        "zh": "n. 二十世紀三十年代、三十、三十幾；num. 三十；adj. 三十個的、三十歲的",
        "unit": 18,
        "example": "There are thirty students in our class.",
        "exampleZh": "我們班上有三十位學生。"
    },
    {
        "id": 31731,
        "en": "this",
        "kk": "[ðɪs]",
        "uk": "/ðɪs/",
        "zh": "pron. 這、這個；det. 這、這個；adj. 這、這個；adv. 這麼、這樣地",
        "unit": 18,
        "example": "This carpet stains easily.",
        "exampleZh": "這塊地毯很容易弄髒。"
    },
    {
        "id": 31732,
        "en": "those",
        "kk": "[ðoz]",
        "uk": "/ðəʊz/",
        "zh": "pron. 那些；det. 那些；adj. 那些的",
        "unit": 18,
        "example": "Who put those books on my chair?",
        "exampleZh": "誰把那些書放在我的椅子上？"
    },
    {
        "id": 31733,
        "en": "though",
        "kk": "[ðo]",
        "uk": "/ðəʊ/",
        "zh": "conj. 雖然、儘管、可是、不過；adv. 不過、可是、然而",
        "unit": 18,
        "example": "Though it rained, we still went out.",
        "exampleZh": "雖然下雨了，我們還是出門了。"
    },
    {
        "id": 31734,
        "en": "thought",
        "kk": "[θɔt]",
        "uk": "/θɔːt/",
        "zh": "n. 想法、看法、主意、考慮；v. 認為、覺得、思考、考慮",
        "unit": 18,
        "example": "I thought of a great new idea.",
        "exampleZh": "我想出了一個很棒的新點子。"
    },
    {
        "id": 31735,
        "en": "thousand",
        "kk": "[ˋθaʊzənd]",
        "uk": "/ˈθaʊz(ə)nd/",
        "zh": "num. 一千、許許多多、數以千計、千位數；pron. 成千上萬；n. 數千",
        "unit": 18,
        "example": "A thousand people were there.",
        "exampleZh": "那裡有一千人。"
    },
    {
        "id": 31736,
        "en": "three",
        "kk": "[θri]",
        "uk": "/θriː/",
        "zh": "num. 三；n. 三、三個、由三個組成的一組；adj. 三的、三個的",
        "unit": 18,
        "example": "The clock said three o'clock.",
        "exampleZh": "時鐘指向三點鐘。"
    },
    {
        "id": 31737,
        "en": "throat",
        "kk": "[θrot]",
        "uk": "/θrəʊt/",
        "zh": "n. 喉嚨、咽喉、喉部、頸前部；v. 用喉音說",
        "unit": 18,
        "example": "I have a sore dry throat.",
        "exampleZh": "我喉嚨又痛又乾。"
    },
    {
        "id": 31738,
        "en": "through",
        "kk": "[θru]",
        "uk": "/θruː/",
        "zh": "prep. 穿過、從一端到另一端、透過、越過；adv. 從一端到另一端、完全地、徹底地、十足地；adj. 完成的、結束的、直達的、直通的",
        "unit": 18,
        "example": "The train ran through the dark tunnel.",
        "exampleZh": "火車穿過了昏暗的隧道。"
    },
    {
        "id": 31739,
        "en": "throw",
        "kk": "[θro]",
        "uk": "/θrəʊ/",
        "zh": "vt. 投、擲、拋、扔；n. 投、擲、投射距離、套",
        "unit": 18,
        "example": "Do not throw the ball inside the house.",
        "exampleZh": "不要在屋子裡丟球。"
    },
    {
        "id": 31740,
        "en": "thumb",
        "kk": "[θʌm]",
        "uk": "/θʌm/",
        "zh": "n. 拇指、拇指部分、第一指、豎起大拇指；vt. 豎起大拇指請求搭便車、用拇指摸、用拇指捋、用拇指示意",
        "unit": 18,
        "example": "There's a hole in the thumb.",
        "exampleZh": "手套的拇指上有個窟窿。"
    },
    {
        "id": 31741,
        "en": "thunder",
        "kk": "[ˋθʌndɚ]",
        "uk": "/ˈθʌndə(r)/",
        "zh": "n. 雷、雷聲、雷鳴般的響聲、轟隆聲；vi. 打雷、發出雷鳴般的響聲、轟隆地響、轟隆隆地快速移動",
        "unit": 18,
        "example": "We heard loud thunder last night.",
        "exampleZh": "我們昨晚聽到了巨大的雷聲。"
    },
    {
        "id": 31742,
        "en": "Thursday",
        "kk": "[ˋθɝz͵de]",
        "uk": "/ˈθɜːzdeɪ/",
        "zh": "n. 星期四",
        "unit": 18,
        "example": "We have an English test this Thursday.",
        "exampleZh": "我們這星期四有一場英文考試。"
    },
    {
        "id": 31743,
        "en": "ticket",
        "kk": "[ˋtɪkət]",
        "uk": "/ˈtɪkɪt/",
        "zh": "n. 票、入場券、通知單；v. 票、售票、給（違章停車、超速行駛的人）開罰單、貼標籤於",
        "unit": 18,
        "example": "You can have my ticket.",
        "exampleZh": "你可以拿走我的票。"
    },
    {
        "id": 31744,
        "en": "tidy",
        "kk": "[ˋtaɪdi]",
        "uk": "/ˈtaɪdi/",
        "zh": "adj. 整潔的、有條理的、愛整潔的、愛整齊的；vt. 使整潔、整理；n. 盛零碎物品的容器、整理、收拾、罩單",
        "unit": 18,
        "example": "Keep your small room very tidy.",
        "exampleZh": "保持你的小房間非常整潔。"
    },
    {
        "id": 31745,
        "en": "tie",
        "kk": "[taɪ]",
        "uk": "/taɪ/",
        "zh": "vt. 系、扎、捆、將……系在……上；n. 領帶、領結、帶子、繩子",
        "unit": 18,
        "example": "He wore a blue tie to the party.",
        "exampleZh": "他打了一條藍色領帶去參加派對。"
    },
    {
        "id": 31746,
        "en": "tiger",
        "kk": "[ˋtaɪɡɚ]",
        "uk": "/ˈtaɪɡə(r)/",
        "zh": "n. 老虎、兇暴的人",
        "unit": 18,
        "example": "The tiger is native to India.",
        "exampleZh": "老虎原產於印度。"
    },
    {
        "id": 31747,
        "en": "till",
        "kk": "[tɪl]",
        "uk": "/tɪl/",
        "zh": "prep. 直到、到……為止、向、朝；conj. 直到、到……為止；n. 現金出納機、收銀機、交款處、收銀臺；v. 耕作、犁地",
        "unit": 18,
        "example": "We played in the park till dark.",
        "exampleZh": "我們在公園裡玩到天黑。"
    },
    {
        "id": 31748,
        "en": "time",
        "kk": "[taɪm]",
        "uk": "/taɪm/",
        "zh": "n. 次數、時間、時刻、計時體系；vt. 時間、為……安排時間、把握（擊球、射門等）的時機、為……計時；conj. 乘以；adj. 定時的、定期的、分期的",
        "unit": 18,
        "example": "This time they've messed up big time!",
        "exampleZh": "這一次，他們闖大禍了！"
    },
    {
        "id": 31749,
        "en": "tiny",
        "kk": "[ˋtaɪni]",
        "uk": "/ˈtaɪni/",
        "zh": "adj. 極小的、微小的；n. 幼童",
        "unit": 18,
        "example": "An ant is a tiny little animal.",
        "exampleZh": "螞蟻是一種微小的小動物。"
    },
    {
        "id": 31750,
        "en": "tip",
        "kk": "[tɪp]",
        "uk": "/tɪp/",
        "zh": "vt. 尖端、傾斜、斜側、給小費；n. 小費、指點、訣竅、建議",
        "unit": 18,
        "example": "Did you give the waiter a tip?",
        "exampleZh": "你給服務員小費了嗎？"
    },
    {
        "id": 31751,
        "en": "tired",
        "kk": "[ˋtaɪɚd]",
        "uk": "/ˈtaɪəd/",
        "zh": "adj. 疲倦的、累的、枯燥乏味的、陳腐的；v. 感到累、感到疲勞、厭倦、使厭倦",
        "unit": 18,
        "example": "I feel very tired after work.",
        "exampleZh": "下班後我感到非常疲倦。"
    },
    {
        "id": 31752,
        "en": "title",
        "kk": "[ˋtaɪtəl]",
        "uk": "/ˈtaɪt(ə)l/",
        "zh": "n. 頭銜、名稱、標題、一種；vt. 標題、加標題、定題目、賦予頭銜；adj. 與（電影、戲劇等）同名的、冠軍的",
        "unit": 18,
        "example": "Write your title on this page.",
        "exampleZh": "把你的標題寫在這一頁上。"
    },
    {
        "id": 31753,
        "en": "to",
        "kk": "[tu]",
        "uk": "/tuː/",
        "zh": "prep. 向、朝、位於……、到某處；adv. 關上",
        "unit": 18,
        "example": "We walk to school every morning together.",
        "exampleZh": "我們每天早上一齊走路去學校。"
    },
    {
        "id": 31754,
        "en": "toast",
        "kk": "[tost]",
        "uk": "/təʊst/",
        "zh": "n. 烤麵包片、吐司、乾杯、祝酒；vt. 為……舉杯敬酒、為……乾杯、烤、烘",
        "unit": 18,
        "example": "I eat warm toast every morning.",
        "exampleZh": "我每天早上都吃溫熱的烤吐司。"
    },
    {
        "id": 31755,
        "en": "today",
        "kk": "[təˋde]",
        "uk": "/təˈdeɪ/",
        "zh": "n. 今天、今日、現今；adv. 在今天、在今日、現今",
        "unit": 18,
        "example": "The weather is very warm today.",
        "exampleZh": "今天的天氣非常溫暖。"
    },
    {
        "id": 31756,
        "en": "toe",
        "kk": "[to]",
        "uk": "/təʊ/",
        "zh": "n. 腳趾、趾、足尖部、端部；v. 用腳尖推、足尖朝內（或外）行走、前束",
        "unit": 18,
        "example": "Ouch! You trod on my toe!",
        "exampleZh": "哎喲！你踩著我的腳指頭了！"
    },
    {
        "id": 31757,
        "en": "tofu",
        "kk": "[ˋtofu]",
        "uk": "/ˈtəʊfuː/",
        "zh": "n. 豆腐",
        "unit": 18,
        "example": "We eat cold white tofu today.",
        "exampleZh": "我們今天吃冰涼的白豆腐。"
    },
    {
        "id": 31758,
        "en": "together",
        "kk": "[təˋɡɛðɚ]",
        "uk": "/təˈɡeðə(r)/",
        "zh": "adv. 一起、在一起、共同、以使接觸；adj. 自信而有條理的、沉穩的、結婚的、有性關係（或戀愛關係）的",
        "unit": 18,
        "example": "Fate had thrown them together.",
        "exampleZh": "命運讓他們走到了一起。"
    },
    {
        "id": 31759,
        "en": "toilet",
        "kk": "[ˋtɔɪlət]",
        "uk": "/ˈtɔɪlət/",
        "zh": "n. 馬桶、抽水馬桶、坐便器、廁所；v. 照料（人，尤其是嬰兒或傷病人士）上廁所、上廁所、梳妝、打扮",
        "unit": 18,
        "example": "Do you need the toilet ?",
        "exampleZh": "你需要用洗手間嗎？"
    },
    {
        "id": 31760,
        "en": "tomato",
        "kk": "[təˋme͵to]",
        "uk": "/təˈmɑːtəʊ/",
        "zh": "n. 番茄、西紅柿、番茄紅、鮮紅色",
        "unit": 18,
        "example": "She ate a sweet red tomato.",
        "exampleZh": "她吃了一顆甘甜的紅番茄。"
    },
    {
        "id": 31761,
        "en": "tomorrow",
        "kk": "[təˋmɑr͵o]",
        "uk": "/təˈmɒrəʊ/",
        "zh": "n. 明天、明日、未來；adv. 在明天、在明日",
        "unit": 18,
        "example": "I will visit my friend tomorrow morning.",
        "exampleZh": "我明天早上會去拜訪朋友。"
    },
    {
        "id": 31762,
        "en": "tongue",
        "kk": "[tʌŋ]",
        "uk": "/tʌŋ/",
        "zh": "n. 舌、舌頭、口條、語言；v. 用運舌法吹奏、用舌頭觸碰、舔、說話",
        "unit": 18,
        "example": "The dog stuck out its tongue.",
        "exampleZh": "那隻狗吐出了舌頭。"
    },
    {
        "id": 31763,
        "en": "tonight",
        "kk": "[təˋnaɪt]",
        "uk": "/təˈnaɪt/",
        "zh": "n. 今晚、今夜；adv. 在今晚、在今夜",
        "unit": 18,
        "example": "Let us watch a movie together tonight.",
        "exampleZh": "我們今晚一起看部電影吧。"
    },
    {
        "id": 31764,
        "en": "too",
        "kk": "[tu]",
        "uk": "/tuː/",
        "zh": "adv. 也、太、過於、過度",
        "unit": 18,
        "example": "This cup of tea is too hot.",
        "exampleZh": "這杯茶太燙了。"
    },
    {
        "id": 31765,
        "en": "tool",
        "kk": "[tul]",
        "uk": "/tuːl/",
        "zh": "n. 工具、手段、受人利用的人、陰莖；v. 驅車兜風、駕車到處跑、製作、在（皮革，尤指書籍的皮革封面）上壓印圖案",
        "unit": 18,
        "example": "What is this tool for?",
        "exampleZh": "這個工具有什麼用？"
    },
    {
        "id": 31766,
        "en": "tooth",
        "kk": "[tuθ]",
        "uk": "/tuːθ/",
        "zh": "n. 牙齒、牙、齒、齒狀物；v. 給……裝齒、齧合",
        "unit": 18,
        "example": "He lost a baby tooth today.",
        "exampleZh": "他今天掉了一顆乳牙。"
    },
    {
        "id": 31767,
        "en": "toothache",
        "kk": "[ˋtuθ͵ek]",
        "uk": "/ˈtuːθeɪk/",
        "zh": "n. 牙痛、牙疼",
        "unit": 18,
        "example": "I've got a toothache.",
        "exampleZh": "我牙疼。"
    },
    {
        "id": 31768,
        "en": "toothbrush",
        "kk": "[ˋtuθbrəʃ]",
        "uk": "/ˈtuːθbrʌʃ/",
        "zh": "n. 牙刷",
        "unit": 18,
        "example": "How do you choose your toothbrush?",
        "exampleZh": "你是如何選擇你的牙刷的？"
    },
    {
        "id": 31769,
        "en": "top",
        "kk": "[tɑp]",
        "uk": "/tɒp/",
        "zh": "n. 頂部、頂端、上端、上層表面；adj. 頂端的、頂部的、最上面的、最高的；vt. 高於、超過、高過、優於；adv. 最多、至多",
        "unit": 18,
        "example": "She got the top job.",
        "exampleZh": "她得到了最高職位。"
    },
    {
        "id": 31770,
        "en": "topic",
        "kk": "[ˋtɑpɪk]",
        "uk": "/ˈtɒpɪk/",
        "zh": "n. 主題、題目、一般規則、總論",
        "unit": 18,
        "example": "We pick a new topic today.",
        "exampleZh": "我們今天選定了一個新主題。"
    },
    {
        "id": 31771,
        "en": "total",
        "kk": "[ˋtotəl]",
        "uk": "/ˈtəʊt(ə)l/",
        "zh": "adj. 總的、全部的、完全的、絕對的；v. 總數達、總計、把……加起來、徹底毀壞；n. 總數、合計",
        "unit": 18,
        "example": "The total cost was ten dollars.",
        "exampleZh": "總金額是十塊錢。"
    },
    {
        "id": 31772,
        "en": "touch",
        "kk": "[tʌtʃ]",
        "uk": "/tʌtʃ/",
        "zh": "v. 觸控、碰、接觸、觸及；n. 觸覺、觸感、觸控、碰",
        "unit": 18,
        "example": "Do not touch the hot water cup.",
        "exampleZh": "不要碰那個熱水杯。"
    },
    {
        "id": 31773,
        "en": "toward",
        "kk": "[təˋwɔrd]",
        "uk": "/təˈwɔːd/",
        "zh": "prep. 朝、向、往、趨向；adj. 即將來到的、進行中的",
        "unit": 18,
        "example": "She turned back toward home.",
        "exampleZh": "她轉身朝家的方向走去。"
    },
    {
        "id": 31774,
        "en": "towel",
        "kk": "[ˋtaʊəl]",
        "uk": "/ˈtaʊəl/",
        "zh": "n. 毛巾、抹布、紙巾、衛生巾；vt. 用毛巾擦、用毛巾擦乾、鞭打",
        "unit": 18,
        "example": "Dry your hands with this towel.",
        "exampleZh": "用這條毛巾擦乾你的雙手。"
    },
    {
        "id": 31775,
        "en": "tower",
        "kk": "[ˋtaʊɚ]",
        "uk": "/ˈtaʊə(r)/",
        "zh": "n. 塔、塔樓、塔臺、塔狀堆積物；vi. 高出許多、屹立、勝過、超過",
        "unit": 18,
        "example": "They ran up to the tower.",
        "exampleZh": "他們跑上了塔樓。"
    },
    {
        "id": 31776,
        "en": "town",
        "kk": "[taʊn]",
        "uk": "/taʊn/",
        "zh": "n. 城鎮、市鎮、商業區、中心區",
        "unit": 18,
        "example": "My family lives in a small town.",
        "exampleZh": "我家住在一個小城鎮。"
    },
    {
        "id": 31777,
        "en": "toy",
        "kk": "[tɔɪ]",
        "uk": "/tɔɪ/",
        "zh": "n. 玩具、玩意兒、小擺設、受人控制（或利用）的人；adj. 玩具的、和玩具有關的、個頭很小的、小體型品種的；v. 漫不經心地考慮、調情、調戲、心不在焉地（或緊張地）擺弄",
        "unit": 18,
        "example": "The boy plays with his toy car.",
        "exampleZh": "那個男孩玩著他的玩具車。"
    },
    {
        "id": 31778,
        "en": "trace",
        "kk": "[tres]",
        "uk": "/treɪs/",
        "zh": "vt. 查出、發現、追蹤、追溯；n. 痕跡、遺蹟、蹤跡、微量",
        "unit": 18,
        "example": "The trace showed a normal heart rhythm.",
        "exampleZh": "描記圖表明心率正常。"
    },
    {
        "id": 31779,
        "en": "track",
        "kk": "[træk]",
        "uk": "/træk/",
        "zh": "n. 軌道、跑道、小徑、足跡；vt. 追蹤、跟蹤",
        "unit": 18,
        "example": "Run fast around the school track.",
        "exampleZh": "繞著學校跑道快跑。"
    },
    {
        "id": 31780,
        "en": "trade",
        "kk": "[tred]",
        "uk": "/treɪd/",
        "zh": "n. 貿易、買賣、行業、同行業者；vi. 做買賣、做生意、營運、營業",
        "unit": 18,
        "example": "Trade was very good last month.",
        "exampleZh": "上月的交易量很大。"
    },
    {
        "id": 31781,
        "en": "tradition",
        "kk": "[trəˋdɪʃən]",
        "uk": "/trəˈdɪʃ(ə)n/",
        "zh": "n. 傳統、慣例、傳統故事、傳說",
        "unit": 18,
        "example": "Eating fish is our family tradition.",
        "exampleZh": "吃魚是我們的家庭傳統。"
    },
    {
        "id": 31782,
        "en": "traditional",
        "kk": "[trəˋdɪʃənəl]",
        "uk": "/trəˈdɪʃən(ə)l/",
        "zh": "adj. 傳統的、根據傳統而製造（或使用）的、因襲的、守舊的",
        "unit": 18,
        "example": "We like to eat traditional food at home.",
        "exampleZh": "我們喜歡在家吃傳統食物。"
    },
    {
        "id": 31783,
        "en": "traffic",
        "kk": "[ˋtræfɪk]",
        "uk": "/ˈtræfɪk/",
        "zh": "n. 路上行駛的車輛、交通、航行、行駛；vi. 進行……交易、做……買賣、在……通行",
        "unit": 18,
        "example": "The traffic lights were on amber.",
        "exampleZh": "交通訊號黃燈亮了。"
    },
    {
        "id": 31784,
        "en": "train",
        "kk": "[tren]",
        "uk": "/treɪn/",
        "zh": "n. 火車、列車、行列、佇列；vt. 培訓、訓練、操練、鍛鍊",
        "unit": 18,
        "example": "The train was flying along.",
        "exampleZh": "火車一路飛馳著。"
    },
    {
        "id": 31785,
        "en": "trap",
        "kk": "[træp]",
        "uk": "/træp/",
        "zh": "n. 圈套、陷阱、網、夾子；vt. 陷阱、設陷阱（或夾子、捕捉器）捕捉、使陷入圈套、使中計",
        "unit": 18,
        "example": "A trap was laid, with fresh bait.",
        "exampleZh": "陷阱設定好，還投放了新誘餌。"
    },
    {
        "id": 31786,
        "en": "trash",
        "kk": "[træʃ]",
        "uk": "/træʃ/",
        "zh": "n. 垃圾、廢物、垃圾桶、劣質的東西；v. 損壞、毀壞、抨擊、譴責",
        "unit": 18,
        "example": "Would you take out the trash?",
        "exampleZh": "你可以把垃圾帶出去嗎？"
    },
    {
        "id": 31787,
        "en": "travel",
        "kk": "[ˋtrævəl]",
        "uk": "/ˈtræv(ə)l/",
        "zh": "v. 旅行、走動、移動、行進；n. 旅行、旅遊、運動範圍、運動速度",
        "unit": 18,
        "example": "They like to travel every summer.",
        "exampleZh": "他們喜歡每年夏天去旅行。"
    },
    {
        "id": 31788,
        "en": "treasure",
        "kk": "[ˋtrɛʒɚ]",
        "uk": "/ˈtreʒə(r)/",
        "zh": "n. 金銀財寶、珠寶、財富、珍品；vt. 珍愛、珍藏、珍惜、珍視",
        "unit": 18,
        "example": "They found hidden treasure in cave.",
        "exampleZh": "他們在洞穴裡找到了隱藏的寶藏。"
    },
    {
        "id": 31789,
        "en": "treat",
        "kk": "[trit]",
        "uk": "/triːt/",
        "zh": "vt. 對待、看待、治療、醫治；n. 樂事、享受、款待、招待",
        "unit": 18,
        "example": "Treat him with care and love.",
        "exampleZh": "帶著關懷與愛對待他。"
    },
    {
        "id": 31790,
        "en": "tree",
        "kk": "[tri]",
        "uk": "/triː/",
        "zh": "n. 樹、樹狀物、樹狀圖、樹形結構；vt. 把（動物）趕上樹、使陷入困境；vi. 爬上樹、逃上樹",
        "unit": 18,
        "example": "Let's rest under yonder tree.",
        "exampleZh": "我們在那棵樹下休息吧。"
    },
    {
        "id": 31791,
        "en": "triangle",
        "kk": "[ˋtraɪ͵æŋɡəl]",
        "uk": "/ˈtraɪæŋɡ(ə)l/",
        "zh": "n. 三角形、三角形物體、三角鐵、三角板",
        "unit": 18,
        "example": "Draw a yellow triangle on paper.",
        "exampleZh": "在紙上畫一個黃色三角形。"
    },
    {
        "id": 31792,
        "en": "trick",
        "kk": "[trɪk]",
        "uk": "/trɪk/",
        "zh": "n. 花招、詭計、騙局、竅門；vt. 欺騙、哄騙、（用由字母、符號標明的顏色）給（盾形徽章）勾勒輪廓；adj. 騙人的、使人產生錯覺的、虛弱的、有毛病的",
        "unit": 18,
        "example": "That was a nasty little trick.",
        "exampleZh": "這是個可惡的小騙局。"
    },
    {
        "id": 31793,
        "en": "trip",
        "kk": "[trɪp]",
        "uk": "/trɪp/",
        "zh": "n. 旅行、旅遊、出門、出行；v. 絆、絆倒、腳步輕快地走、觸動",
        "unit": 18,
        "example": "We had a nice trip last week.",
        "exampleZh": "我們上週有一趟美好的旅行。"
    },
    {
        "id": 31794,
        "en": "trouble",
        "kk": "[ˋtrʌbəl]",
        "uk": "/ˈtrʌb(ə)l/",
        "zh": "n. 困難、難題、苦惱、險境；vt. 使憂慮、苦惱、費神、費力",
        "unit": 18,
        "example": "He got into trouble with his teacher.",
        "exampleZh": "他給自己的老師惹上了麻煩。"
    },
    {
        "id": 31795,
        "en": "trousers",
        "kk": "[ˋtraʊzɚz]",
        "uk": "/ˈtraʊzəz/",
        "zh": "n. 褲子、長褲",
        "unit": 18,
        "example": "These trousers are a bit tight.",
        "exampleZh": "這條褲子有點緊。"
    },
    {
        "id": 31796,
        "en": "truck",
        "kk": "[trʌk]",
        "uk": "/trʌk/",
        "zh": "n. 卡車、載重汽車、運貨車皮、敞篷貨運火車；vt. 用卡車裝運、駕駛卡車、輕鬆前進、平穩前進",
        "unit": 18,
        "example": "I've just loaded my truck up.",
        "exampleZh": "我剛剛裝完我的卡車。"
    },
    {
        "id": 31797,
        "en": "true",
        "kk": "[tru]",
        "uk": "/truː/",
        "zh": "adj. 真實的、正確的；adv. 真實地、準確地；n. 真實、準確；vt. 裝準；v. 裝準",
        "unit": 18,
        "example": "The story in the book is true.",
        "exampleZh": "書裡的那個故事是真的。"
    },
    {
        "id": 31798,
        "en": "trumpet",
        "kk": "[ˋtrʌmpət]",
        "uk": "/ˈtrʌmpɪt/",
        "zh": "n. 小號、喇叭、喇叭形物、喇叭似的響聲；v. 鼓吹、大肆宣揚、吼叫、吹喇叭",
        "unit": 18,
        "example": "He can play the brass trumpet.",
        "exampleZh": "他會吹銅管小號。"
    },
    {
        "id": 31799,
        "en": "trust",
        "kk": "[trʌst]",
        "uk": "/trʌst/",
        "zh": "n. 託管、信託、信任、信賴；v. 信任、信賴、相信、對……有把握",
        "unit": 18,
        "example": "You can trust your best friend.",
        "exampleZh": "你可以信任你最好的朋友。"
    },
    {
        "id": 31800,
        "en": "truth",
        "kk": "[truθ]",
        "uk": "/truːθ/",
        "zh": "n. 事實、真相、真實性、真理",
        "unit": 18,
        "example": "Slowly the awful truth dawned.",
        "exampleZh": "可怕的事實慢慢地清晰起來。"
    },
    {
        "id": 31801,
        "en": "try",
        "kk": "[traɪ]",
        "uk": "/traɪ/",
        "zh": "v. 嘗試、試圖、努力、試用；n. 努力、試圖、試用、試驗",
        "unit": 18,
        "example": "You should try your best every day.",
        "exampleZh": "你應該每天全力以赴去嘗試。"
    },
    {
        "id": 31802,
        "en": "T-shirt",
        "kk": "[ti ʃɝt]",
        "uk": "/ˈtiː ʃɜːt/",
        "zh": "n. T恤、短袖汗衫",
        "unit": 18,
        "example": "She wore an olive-green T-shirt.",
        "exampleZh": "她穿著一件橄欖綠的T卹。"
    },
    {
        "id": 31803,
        "en": "tube",
        "kk": "[tub]",
        "uk": "/tjuːb/",
        "zh": "n. 管子、管、管狀物、軟管；v. 用管道運輸、乘地鐵、使成管狀、玩內胎漂流",
        "unit": 18,
        "example": "Get the red paint from tube.",
        "exampleZh": "從管子裡擠出紅色顏料。"
    },
    {
        "id": 31804,
        "en": "Tuesday",
        "kk": "[ˋtuzdi]",
        "uk": "/ˈtjuːzdeɪ/",
        "zh": "n. 星期二",
        "unit": 18,
        "example": "Tuesday is her half day.",
        "exampleZh": "星期二是她的半天。"
    },
    {
        "id": 31805,
        "en": "Tunnel",
        "kk": "[ˋtʌnəl]",
        "uk": "/ˈtʌn(ə)l/",
        "zh": "n. 隧道、地道、洞穴通道、運動場運動員通道；vi. 開鑿隧道、挖地道、（粒子）穿透勢壘、隧（道貫）穿",
        "unit": 18,
        "example": "He passed down the tunnel.",
        "exampleZh": "他穿過隧道。"
    },
    {
        "id": 31806,
        "en": "turkey",
        "kk": "[ˋtɝki]",
        "uk": "/ˈtɜːki/",
        "zh": "n. 火雞、火雞肉、失敗之作、笨蛋",
        "unit": 18,
        "example": "Who's going to carve the turkey?",
        "exampleZh": "誰來把火雞切成小塊？"
    },
    {
        "id": 31807,
        "en": "turn",
        "kk": "[tɝn]",
        "uk": "/tɜːn/",
        "zh": "v. 旋轉、轉動、轉身、扭轉；n. 轉動、旋轉、轉向、轉彎處",
        "unit": 18,
        "example": "He decided to turn professional.",
        "exampleZh": "他決定轉為職業。"
    },
    {
        "id": 31808,
        "en": "turtle",
        "kk": "[ˋtɝtəl]",
        "uk": "/ˈtɜːt(ə)l/",
        "zh": "n. 烏龜、海龜、海龜肉、龜；v. 翻到背面或頂部、捕捉海龜",
        "unit": 18,
        "example": "The Mock Turtle went on.",
        "exampleZh": "假海龜繼續講。"
    },
    {
        "id": 31809,
        "en": "twelve",
        "kk": "[twɛlv]",
        "uk": "/twelv/",
        "zh": "num. 十二、十二個；n. 十二、十二個、十二點；adj. 十二的、十二個的",
        "unit": 18,
        "example": "There are twelve months in one year.",
        "exampleZh": "一年之中有十二個月。"
    },
    {
        "id": 31810,
        "en": "twenty",
        "kk": "[ˋtwɛnti]",
        "uk": "/ˈtwenti/",
        "zh": "num. 二十；n. 二十、二十幾、二十年代、二十美元紙幣；adj. 二十的、二十個的",
        "unit": 18,
        "example": "She has twenty pens in her bag.",
        "exampleZh": "她的提袋裡有二十支筆。"
    },
    {
        "id": 31811,
        "en": "twice",
        "kk": "[twaɪs]",
        "uk": "/twaɪs/",
        "zh": "adv. 兩次、兩倍、強（或好、難）的多",
        "unit": 18,
        "example": "I brush my teeth twice a day.",
        "exampleZh": "我一天刷兩次牙。"
    },
    {
        "id": 31812,
        "en": "two",
        "kk": "[tu]",
        "uk": "/tuː/",
        "zh": "num. 二、兩個；adj. 兩個的；n. 兩個、數字二、兩個一組",
        "unit": 18,
        "example": "I bought two apples at the shop.",
        "exampleZh": "我在商店買了兩顆蘋果。"
    },
    {
        "id": 31813,
        "en": "type",
        "kk": "[taɪp]",
        "uk": "/taɪp/",
        "zh": "n. 型別、種類、具有某種特徵的人、典型；vt. 打字、測定……的型別、分型",
        "unit": 18,
        "example": "What blood type do you have?",
        "exampleZh": "你是什麼血型？"
    },
    {
        "id": 31814,
        "en": "typhoon",
        "kk": "[͵taɪˋfun]",
        "uk": "/taɪˈfuːn/",
        "zh": "n. 颱風",
        "unit": 18,
        "example": "A typhoon is coming.",
        "exampleZh": "颱風快到了。"
    },
    {
        "id": 31815,
        "en": "ugly",
        "kk": "[ˋʌɡli]",
        "uk": "/ˈʌɡli/",
        "zh": "adj. 醜陋的、難看的、令人厭惡的、邪惡的",
        "unit": 18,
        "example": "The old dirty wall looked very ugly.",
        "exampleZh": "那堵又舊又髒的牆看起來非常難看。"
    },
    {
        "id": 31816,
        "en": "umbrella",
        "kk": "[əˋmbrɛlə]",
        "uk": "/ʌmˈbrelə/",
        "zh": "n. 雨傘、傘、陽傘、綜合體；adj. 包括許多小團體的、總稱的、總括的",
        "unit": 18,
        "example": "Her umbrella blew inside out.",
        "exampleZh": "她的傘被吹得往外翻了。"
    },
    {
        "id": 31817,
        "en": "uncle",
        "kk": "[ˋʌŋkəl]",
        "uk": "/ˈʌŋk(ə)l/",
        "zh": "n. 叔伯、叔叔、伯父、伯伯",
        "unit": 18,
        "example": "My uncle taught me to juggle.",
        "exampleZh": "我叔叔教我雜耍。"
    },
    {
        "id": 31818,
        "en": "under",
        "kk": "[ˋʌndɚ]",
        "uk": "/ˈʌndə(r)/",
        "zh": "prep. 在……下面、低於、少於、在……統治下；adv. 在下面、在水下、少於",
        "unit": 18,
        "example": "They feel under permanent threat.",
        "exampleZh": "他們感到永遠受到威脅。"
    },
    {
        "id": 31819,
        "en": "underline",
        "kk": "[ˋʌndɚ͵laɪn]",
        "uk": "/ˌʌndəˈlaɪn/",
        "zh": "vt. 在……下面畫線、強調、突出；n. 下劃線、下體輪廓",
        "unit": 18,
        "example": "Underline the key words with pencil.",
        "exampleZh": "用鉛筆在關鍵字下面畫線。"
    },
    {
        "id": 31820,
        "en": "understand",
        "kk": "[͵ʌndɚˋstænd]",
        "uk": "/ˌʌndəˈstænd/",
        "zh": "vt. 了解、理解、懂得、瞭解",
        "unit": 18,
        "example": "I do not understand this math question.",
        "exampleZh": "我不理解這道數學題。"
    },
    {
        "id": 31821,
        "en": "underwear",
        "kk": "[ˋʌndɚ͵wɛr]",
        "uk": "/ˈʌndəweə(r)/",
        "zh": "n. 內衣褲、內衣、襯衣",
        "unit": 18,
        "example": "She packed one change of underwear.",
        "exampleZh": "她打行李時帶了一套換洗的內衣。"
    },
    {
        "id": 31822,
        "en": "unhappy",
        "kk": "[ənˋhæpi]",
        "uk": "/ʌnˈhæpi/",
        "zh": "adj. 不快樂的、不幸福的、對…不滿的、不高興的",
        "unit": 18,
        "example": "I hate to see you unhappy.",
        "exampleZh": "我不願見你不高興。"
    },
    {
        "id": 31823,
        "en": "uniform",
        "kk": "[ˋjunə͵fɔrm]",
        "uk": "/ˈjuːnɪfɔːm/",
        "zh": "n. 制服、校服、穿制服的警官、典型服裝；adj. 全部相同的、始終如一的、制服式的；v. 使一致、使穿制服",
        "unit": 18,
        "example": "They wear a dark blue uniform.",
        "exampleZh": "他們穿著深藍色制服。"
    },
    {
        "id": 31824,
        "en": "unique",
        "kk": "[juˋnik]",
        "uk": "/juˈniːk/",
        "zh": "adj. 獨一無二的、獨特的、非常特別的、極不尋常的；n. 獨一無二的人",
        "unit": 18,
        "example": "Each bird has a unique song.",
        "exampleZh": "每隻鳥都有獨特的鳴叫聲。"
    },
    {
        "id": 31825,
        "en": "universe",
        "kk": "[ˋjunə͵vɝs]",
        "uk": "/ˈjuːnɪvɜːs/",
        "zh": "n. 宇宙、天地萬物、領域、體系",
        "unit": 18,
        "example": "The vast universe has many stars.",
        "exampleZh": "廣大的宇宙有許多星星。"
    },
    {
        "id": 31826,
        "en": "university",
        "kk": "[͵junəˋvɝsəti]",
        "uk": "/ˌjuːnɪˈvɜːsəti/",
        "zh": "n. 大學、綜合性大學、大學校舍",
        "unit": 18,
        "example": "He works at a big university.",
        "exampleZh": "他在一所大型大學工作。"
    },
    {
        "id": 31827,
        "en": "until",
        "kk": "[ənˋtɪl]",
        "uk": "/ənˈtɪl/",
        "zh": "prep. 直到……為止、在……以前；conj. 直到……為止、在……以前",
        "unit": 18,
        "example": "Please wait here until I come back.",
        "exampleZh": "請在這裡等直到我回來。"
    },
    {
        "id": 31828,
        "en": "up",
        "kk": "[ʌp]",
        "uk": "/ʌp/",
        "zh": "adv. 向上、起來、完全地；prep. 向……上面、沿著；adj. 向上的、起床的",
        "unit": 18,
        "example": "The boy stood up from the floor.",
        "exampleZh": "那個男孩從地板上站了起來。"
    },
    {
        "id": 31829,
        "en": "upper",
        "kk": "[ˋʌpɚ]",
        "uk": "/ˈʌpə(r)/",
        "zh": "adj. 上面的、上層的、較高的、頂部的；n. 鞋面、鞋幫、興奮劑",
        "unit": 18,
        "example": "Her novels poke fun at the upper class.",
        "exampleZh": "她的小說取笑上流社會。"
    },
    {
        "id": 31830,
        "en": "upstairs",
        "kk": "[əpˋstɛrz]",
        "uk": "/ˌʌpˈsteəz/",
        "zh": "adv. 往樓上、在樓上、腦力上、精神上；n. 樓上；adj. 樓上的",
        "unit": 18,
        "example": "My sister is sleeping upstairs right now.",
        "exampleZh": "我妹妹現在正在樓上睡覺。"
    },
    {
        "id": 31831,
        "en": "use",
        "kk": "[jus]",
        "uk": "/juːz/",
        "zh": "vt. 使用、用、耗費、消費；n. 用途、使用、用法、詞義",
        "unit": 18,
        "example": "Can I use your pen for a minute?",
        "exampleZh": "我能借用你的筆一下嗎？"
    },
    {
        "id": 31832,
        "en": "user",
        "kk": "[ˋjuzɚ]",
        "uk": "/ˈjuːzə(r)/",
        "zh": "n. 使用者",
        "unit": 18,
        "example": "Each user gets a safe key.",
        "exampleZh": "每位使用者都獲得一把安全鑰匙。"
    },
    {
        "id": 31833,
        "en": "useful",
        "kk": "[ˋjusfəl]",
        "uk": "/ˈjuːsf(ə)l/",
        "zh": "adj. 有用的、有益的、好的、熟練的",
        "unit": 18,
        "example": "This small tool is very useful at home.",
        "exampleZh": "這件小工具在家裡非常實用。"
    },
    {
        "id": 31834,
        "en": "usual",
        "kk": "[ˋjuʒəwəl]",
        "uk": "/ˈjuːʒuəl/",
        "zh": "adj. 通常的、慣常的；n. 常事、常喝的飲料（尤指酒）",
        "unit": 18,
        "example": "He came home later than usual.",
        "exampleZh": "他比平常回家晚了。"
    },
    {
        "id": 31835,
        "en": "usually",
        "kk": "[ˋjuʒəwəli]",
        "uk": "/ˈjuːʒuəli; ˈjuːʒəli/",
        "zh": "adv. 通常、通常地、經常地",
        "unit": 18,
        "example": "I usually walk to school alone.",
        "exampleZh": "我通常獨自走路上學。"
    },
    {
        "id": 31836,
        "en": "vacation",
        "kk": "[veˋkeʃən]",
        "uk": "/veɪˈkeɪʃ(ə)n/",
        "zh": "n. 假期、休庭期、休假、騰出；vi. 度假",
        "unit": 18,
        "example": "We're going to the beach for vacation.",
        "exampleZh": "我們要去海濱度假。"
    },
    {
        "id": 31837,
        "en": "valley",
        "kk": "[ˋvæli]",
        "uk": "/ˈvæli/",
        "zh": "n. 山谷、溪谷、谷地、流域",
        "unit": 18,
        "example": "The river flows through the valley.",
        "exampleZh": "河流穿過了山谷。"
    },
    {
        "id": 31838,
        "en": "valuable",
        "kk": "[ˋvæljəbəl]",
        "uk": "/ˈvæljuəb(ə)l/",
        "zh": "adj. 有價值的、值錢的、貴重的、有益的；n. 貴重品",
        "unit": 18,
        "example": "This old ring is very valuable.",
        "exampleZh": "這枚舊戒指非常貴重。"
    },
    {
        "id": 31839,
        "en": "value",
        "kk": "[ˋvælju]",
        "uk": "/ˈvæljuː/",
        "zh": "n. 價值、等值、等價、物有所值；vt. 重視、尊重、給……估價、給……定價",
        "unit": 18,
        "example": "Let y have the value 33.",
        "exampleZh": "假設y的值為33。"
    },
    {
        "id": 31840,
        "en": "vegetable",
        "kk": "[ˋvɛdʒtəbəl]",
        "uk": "/ˈvedʒtəb(ə)l/",
        "zh": "n. 蔬菜、植物人、呆板懶散的人、植物；adj. 植物的",
        "unit": 18,
        "example": "Fresh vegetable soup is good for you.",
        "exampleZh": "新鮮的蔬菜湯對你有益健康。"
    },
    {
        "id": 31841,
        "en": "vendor",
        "kk": "[ˋvɛndɚ]",
        "uk": "/ˈvendə(r)/",
        "zh": "n. 攤販、小販、賣主、賣方",
        "unit": 18,
        "example": "I think the vendor is still there.",
        "exampleZh": "我想那個小販應該還在那裡。"
    },
    {
        "id": 31842,
        "en": "very",
        "kk": "[ˋvɛri]",
        "uk": "/ˈveri/",
        "zh": "adv. 非常、很、極其、完全地；adj. 同一的、恰好的、正是的",
        "unit": 18,
        "example": "The hot soup is very good.",
        "exampleZh": "熱湯非常好喝。"
    },
    {
        "id": 31843,
        "en": "vest",
        "kk": "[vɛst]",
        "uk": "/vest/",
        "zh": "n. 背心、汗衫、馬甲、西裝背心；v. 授予、賦予、給予、交給",
        "unit": 18,
        "example": "He wore a warm blue vest.",
        "exampleZh": "他穿著一件溫暖的藍背心。"
    },
    {
        "id": 31844,
        "en": "victory",
        "kk": "[ˋvɪktɚi]",
        "uk": "/ˈvɪktəri/",
        "zh": "n. 勝利、成功、獲勝",
        "unit": 18,
        "example": "The team hung on for victory.",
        "exampleZh": "這個隊為了勝利堅持不懈。"
    },
    {
        "id": 31845,
        "en": "video",
        "kk": "[ˋvɪdio]",
        "uk": "/ˈvɪdiəʊ/",
        "zh": "n. 錄影帶、錄影、音樂錄影、錄影機；adj. 電視的、影片的、影象的、畫面的；vt. 錄下、拍攝",
        "unit": 18,
        "example": "Do we have a blank video ?",
        "exampleZh": "我們有空白錄影帶嗎？"
    },
    {
        "id": 31846,
        "en": "village",
        "kk": "[ˋvɪlədʒ]",
        "uk": "/ˈvɪlɪdʒ/",
        "zh": "n. 村莊、鄉村、在鄉村的、鄉村的",
        "unit": 18,
        "example": "They live in a quiet village.",
        "exampleZh": "他們住在一個寧靜的村莊裡。"
    },
    {
        "id": 31847,
        "en": "vinegar",
        "kk": "[ˋvɪnəɡɚ]",
        "uk": "/ˈvɪnɪɡə(r)/",
        "zh": "n. 醋、尖酸、刻薄",
        "unit": 18,
        "example": "Add a little vinegar to salad.",
        "exampleZh": "在沙拉裡加一點醋。"
    },
    {
        "id": 31848,
        "en": "violin",
        "kk": "[vaɪəˋlɪn]",
        "uk": "/ˌvaɪəˈlɪn/",
        "zh": "n. 小提琴、小提琴手",
        "unit": 18,
        "example": "Lizzie used to play the violin.",
        "exampleZh": "莉齊過去常拉小提琴。"
    },
    {
        "id": 31849,
        "en": "visit",
        "kk": "[ˋvɪzɪt]",
        "uk": "/ˈvɪzɪt/",
        "zh": "vt. 訪問、參觀、遊覽、拜訪；n. 參觀、遊覽、拜訪、作客",
        "unit": 18,
        "example": "They visit their grandparents every Sunday.",
        "exampleZh": "他們每週日都去探望祖父母。"
    },
    {
        "id": 31850,
        "en": "visitor",
        "kk": "[ˋvɪzɪtɚ]",
        "uk": "/ˈvɪzɪtə(r)/",
        "zh": "n. 訪客、訪問者、參觀者、瀏覽者",
        "unit": 18,
        "example": "A new visitor came to us.",
        "exampleZh": "一位新訪客來找我們。"
    },
    {
        "id": 31851,
        "en": "vocabulary",
        "kk": "[voˋkæbjə͵lɛri]",
        "uk": "/vəˈkæbjələri; vəʊˈkæbjələri/",
        "zh": "n. 字彙、全部詞彙、詞彙、專業詞彙",
        "unit": 18,
        "example": "We learn new vocabulary every day.",
        "exampleZh": "我們每天學習新單字。"
    },
    {
        "id": 31852,
        "en": "voice",
        "kk": "[vɔɪs]",
        "uk": "/vɔɪs/",
        "zh": "n. 聲音、嗓音、說話聲、歌唱聲；vt. 表達、吐露、發濁音、給（管風琴）調音",
        "unit": 18,
        "example": "Her voice sounds very sweet and clear.",
        "exampleZh": "她的嗓音聽起來非常甜美清晰。"
    },
    {
        "id": 31853,
        "en": "volleyball",
        "kk": "[ˋvɑli͵bɔl]",
        "uk": "/ˈvɒlibɔːl/",
        "zh": "n. 排球、排球運動",
        "unit": 18,
        "example": "Girls play volleyball on the beach.",
        "exampleZh": "女孩們在沙灘上打排球。"
    },
    {
        "id": 31854,
        "en": "vote",
        "kk": "[vot]",
        "uk": "/vəʊt/",
        "zh": "vt. 投票、投票選舉、投票表決、投票評選；n. 選票、票、投票、表決",
        "unit": 18,
        "example": "We will vote for team leader.",
        "exampleZh": "我們將投票選出隊長。"
    },
    {
        "id": 31855,
        "en": "waist",
        "kk": "[west]",
        "uk": "/weɪst/",
        "zh": "n. 腰、腰圍、腰部、腰身",
        "unit": 18,
        "example": "The grass had grown waist-high.",
        "exampleZh": "草長得齊腰高了。"
    },
    {
        "id": 31856,
        "en": "wait",
        "kk": "[wet]",
        "uk": "/weɪt/",
        "zh": "v. 等候、盼望、期待；n. 等候、等待、等候的時間、官方樂隊",
        "unit": 18,
        "example": "Please wait here for a few minutes.",
        "exampleZh": "請在這裡等候幾分鐘。"
    },
    {
        "id": 31857,
        "en": "waiter",
        "kk": "[ˋwetɚ]",
        "uk": "/ˈweɪtə(r)/",
        "zh": "n. 服務生、服務員、侍者",
        "unit": 18,
        "example": "The polite waiter gave us water.",
        "exampleZh": "那位有禮貌的服務生給了我們水。"
    },
    {
        "id": 31858,
        "en": "waitress",
        "kk": "[ˋwetrəs]",
        "uk": "/ˈweɪtrəs/",
        "zh": "n. 女服務員、女侍者；vi. 做女服務生",
        "unit": 18,
        "example": "She took a job as a waitress.",
        "exampleZh": "她找了個工作，當服務員。"
    },
    {
        "id": 31859,
        "en": "wake",
        "kk": "[wek]",
        "uk": "/weɪk/",
        "zh": "vt. 醒來、喚醒、喚起、激起；n. 守夜、守靈、尾流",
        "unit": 18,
        "example": "She went upstairs to wake Milton.",
        "exampleZh": "她上樓去叫醒米爾頓。"
    },
    {
        "id": 31860,
        "en": "walk",
        "kk": "[wɔk]",
        "uk": "/wɔːk/",
        "zh": "vt. 走、步行、徒步旅行、散步；n. 散步、步行、徒步旅行、散步的小路",
        "unit": 18,
        "example": "Let us walk to the park together.",
        "exampleZh": "我們一起散步去公園吧。"
    },
    {
        "id": 31861,
        "en": "wall",
        "kk": "[wɔl]",
        "uk": "/wɔːl/",
        "zh": "n. 牆壁、城牆、圍牆、牆；v. 用牆圍住、砌牆封閉、砌牆堵住、把……關起來；adj. 牆壁的",
        "unit": 18,
        "example": "There is a big clock on the wall.",
        "exampleZh": "牆上掛著一個大時鐘。"
    },
    {
        "id": 31862,
        "en": "wallet",
        "kk": "[ˋwɔlət]",
        "uk": "/ˈwɒlɪt/",
        "zh": "n. 皮夾、錢包、塑膠夾、行囊",
        "unit": 18,
        "example": "I left my wallet at home.",
        "exampleZh": "我把皮夾落在家裡了。"
    },
    {
        "id": 31863,
        "en": "want",
        "kk": "[wɑnt]",
        "uk": "/wɒnt/",
        "zh": "vt. 想要、希望、需要、應該；n. 需要、缺乏、缺少、貧窮",
        "unit": 18,
        "example": "I want to drink a cup of tea.",
        "exampleZh": "我想要喝一杯茶。"
    },
    {
        "id": 31864,
        "en": "war",
        "kk": "[wɔr]",
        "uk": "/wɔː(r)/",
        "zh": "n. 戰爭、戰爭狀態、競爭、鬥爭；v. 進行戰爭、鬥爭",
        "unit": 18,
        "example": "The long war brought pain to people.",
        "exampleZh": "那場漫長的戰爭給人們帶來了痛苦。"
    },
    {
        "id": 31865,
        "en": "warm",
        "kk": "[wɔrm]",
        "uk": "/wɔːm/",
        "zh": "adj. 溫暖的、暖和的、保暖的、防寒的；v. 使溫暖、溫暖、變暖和、產生好感；n. 暖和的地方（或地區）、取暖、厚呢短大衣；adv. 溫暖地",
        "unit": 18,
        "example": "Drink some warm milk before you sleep.",
        "exampleZh": "睡覺前喝一些溫熱的牛奶吧。"
    },
    {
        "id": 31866,
        "en": "wash",
        "kk": "[wɑʃ]",
        "uk": "/wɒʃ/",
        "zh": "v. 洗、洗滌、清洗、洗澡；n. 要洗的(洗好的)衣服、洗滌、正在洗的衣物、將要洗的衣物",
        "unit": 18,
        "example": "Wash your hands before eating dinner.",
        "exampleZh": "吃晚餐前要先把手洗乾淨。"
    },
    {
        "id": 31867,
        "en": "waste",
        "kk": "[west]",
        "uk": "/weɪst/",
        "zh": "n. 浪費、濫用、廢物、廢棄物；vt. 浪費、濫用、未能充分利用、沒有物盡其用；adj. 荒蕪的、荒廢的、廢棄的、無用的",
        "unit": 18,
        "example": "Do not waste your time on silly games.",
        "exampleZh": "不要把時間浪費在無聊的遊戲上。"
    },
    {
        "id": 31868,
        "en": "watch",
        "kk": "[wɑtʃ]",
        "uk": "/wɒtʃ/",
        "zh": "vt. 觀看、看、注視、關注；n. 手錶、表、觀察、監視",
        "unit": 18,
        "example": "We like to watch the evening news.",
        "exampleZh": "我們喜歡看晚間新聞。"
    },
    {
        "id": 31869,
        "en": "water",
        "kk": "[ˋwɔtɚ]",
        "uk": "/ˈwɔːtə(r)/",
        "zh": "n. 水、雨水、水域、大片的水；v. 澆水、給……澆水、灌溉、給…...水喝",
        "unit": 18,
        "example": "Drink plenty of water every day.",
        "exampleZh": "每天都要喝充足的水分。"
    },
    {
        "id": 31870,
        "en": "waterfall",
        "kk": "[ˋwɔtɚ͵fɔl]",
        "uk": "/ˈwɔːtəfɔːl/",
        "zh": "n. 瀑布、瀑布似的東西；adj. 瀑布式的",
        "unit": 18,
        "example": "We saw a big, high waterfall.",
        "exampleZh": "我們看見了一座巨大又高的瀑布。"
    },
    {
        "id": 31871,
        "en": "watermelon",
        "kk": "[ˋwɔtɚ͵mɛlən]",
        "uk": "/ˈwɔːtəmelən/",
        "zh": "n. 西瓜、西瓜植株。",
        "unit": 18,
        "example": "We ate cold sweet watermelon today.",
        "exampleZh": "我們今天吃了冰涼甘甜的西瓜。"
    },
    {
        "id": 31872,
        "en": "wave",
        "kk": "[wev]",
        "uk": "/weɪv/",
        "zh": "n. 海浪、波浪、揮手、浪潮；v. 揮手、揮動、飄揚",
        "unit": 18,
        "example": "Big sea waves hit the beach.",
        "exampleZh": "巨大的海浪拍打著海灘。"
    },
    {
        "id": 31873,
        "en": "way",
        "kk": "[we]",
        "uk": "/weɪ/",
        "zh": "n. 方式、方法、手段、習俗；adv. 大大地、遠遠地、非常、很；adj. 途中的",
        "unit": 18,
        "example": "This is the fastest way to get there.",
        "exampleZh": "這是到達那裡最快的方法。"
    },
    {
        "id": 31874,
        "en": "weak",
        "kk": "[wik]",
        "uk": "/wiːk/",
        "zh": "adj. 虛弱的、無力的、不牢固的、懦弱的；n. 窮人、弱者、病人",
        "unit": 18,
        "example": "He feels weak after the long walk.",
        "exampleZh": "長途步行後他覺得很虛弱。"
    },
    {
        "id": 31875,
        "en": "weapon",
        "kk": "[ˋwɛpən]",
        "uk": "/ˈwepən/",
        "zh": "n. 武器、兵器、兇器、工具；v. 武裝、裝備",
        "unit": 18,
        "example": "The police took away his weapon.",
        "exampleZh": "警方沒收了他的武器。"
    },
    {
        "id": 31876,
        "en": "wear",
        "kk": "[wɛr]",
        "uk": "/weə(r)/",
        "zh": "v. 穿戴著、穿、戴、蓄；n. 服裝、穿、戴、磨損",
        "unit": 18,
        "example": "She doesn't often wear heels.",
        "exampleZh": "她不常穿高跟鞋。"
    },
    {
        "id": 31877,
        "en": "weather",
        "kk": "[ˋwɛðɚ]",
        "uk": "/ˈweðə(r)/",
        "zh": "n. 天氣、氣象、惡劣天氣、自然力；vt. （使）褪色、風化、平安度過、航行到（海角）的上風；adj. 露天的、迎風的",
        "unit": 18,
        "example": "The weather is fine and sunny today.",
        "exampleZh": "今天的天氣晴朗美好。"
    },
    {
        "id": 31878,
        "en": "wedding",
        "kk": "[ˋwɛdɪŋ]",
        "uk": "/ˈwedɪŋ/",
        "zh": "n. 結婚儀式、婚禮、結婚慶典、婚禮的；v. 結婚、娶、嫁、結合",
        "unit": 18,
        "example": "They had a simple wedding in church.",
        "exampleZh": "他們在教堂舉行了簡單的婚禮。"
    },
    {
        "id": 31879,
        "en": "Wednesday",
        "kk": "[ˋwɛnzdi]",
        "uk": "/ˈwenzdeɪ/",
        "zh": "n. 星期三",
        "unit": 18,
        "example": "We play basketball after school on Wednesday.",
        "exampleZh": "我們星期三放學後會打籃球。"
    },
    {
        "id": 31880,
        "en": "week",
        "kk": "[wik]",
        "uk": "/wiːk/",
        "zh": "n. 週、星期、周、一個星期的時間",
        "unit": 18,
        "example": "He works five days every week.",
        "exampleZh": "他每個星期工作五天。"
    },
    {
        "id": 31881,
        "en": "weekday",
        "kk": "[ˋwik͵de]",
        "uk": "/ˈwiːkdeɪ/",
        "zh": "n. 平日、普通日、工作日；adj. 平日的、工作日的",
        "unit": 18,
        "example": "I go to school every weekday.",
        "exampleZh": "我每個平日都去上學。"
    },
    {
        "id": 31882,
        "en": "weekend",
        "kk": "[ˋwi͵kɛnd]",
        "uk": "/ˌwiːkˈend; ˈwiːkend/",
        "zh": "n. 週末、週末旅行、週末度假；adj. 週末的；v. 度週末",
        "unit": 18,
        "example": "What will you do this weekend?",
        "exampleZh": "你這個週末打算做什麼？"
    },
    {
        "id": 31883,
        "en": "weight",
        "kk": "[wet]",
        "uk": "/weɪt/",
        "zh": "n. 重量、分量、體重、重；vt. 加重量於、使變重、使傾向於……、重視",
        "unit": 18,
        "example": "He wants to lose weight before summer.",
        "exampleZh": "他想在夏天來臨前減輕體重。"
    },
    {
        "id": 31884,
        "en": "welcome",
        "kk": "[ˋwɛlkəm]",
        "uk": "/ˈwelkəm/",
        "zh": "vt. 歡迎、迎接、迎新、樂意接納；adj. 受歡迎的、令人愉快的、可隨意、儘管……好了；n. 歡迎、迎接、接受；int. 歡迎",
        "unit": 18,
        "example": "We welcome all visitors to our school.",
        "exampleZh": "我們歡迎所有訪客來到我們學校。"
    },
    {
        "id": 31885,
        "en": "well",
        "kk": "[wɛl]",
        "uk": "/wel/",
        "zh": "adv. 好、很好地、充分地；adj. 健康的、身體好的、良好的；int. 嗯、好吧；n. 井、水井",
        "unit": 18,
        "example": "She can speak English very well.",
        "exampleZh": "她的英文說得非常好。"
    },
    {
        "id": 31886,
        "en": "west",
        "kk": "[wɛst]",
        "uk": "/west/",
        "zh": "adj. 西部的、西方的、向西的、來自西方的；adv. 向西方、朝西方、……以西；n. 西方、西、西部、西方國家(指美國、加拿大以及西歐、北歐和南歐諸國)",
        "unit": 18,
        "example": "The sun sets in the west each day.",
        "exampleZh": "太陽每天從西方落下。"
    },
    {
        "id": 31887,
        "en": "wet",
        "kk": "[wɛt]",
        "uk": "/wet/",
        "zh": "adj. 濕的、潮濕的、多雨的；vt. 弄濕、打濕",
        "unit": 18,
        "example": "My shoes got wet in the rain.",
        "exampleZh": "我的鞋子在雨中淋濕了。"
    },
    {
        "id": 31888,
        "en": "whale",
        "kk": "[wel]",
        "uk": "/weɪl/",
        "zh": "n. 鯨魚、鯨、巨大的東西；v. 毆打、猛擊、捕鯨、使慘敗",
        "unit": 18,
        "example": "The big blue whale swims away.",
        "exampleZh": "那隻巨大的藍鯨游走了。"
    },
    {
        "id": 31889,
        "en": "what",
        "kk": "[wʌt]",
        "uk": "/wɒt/",
        "zh": "det. 哪個、什麼、什麼樣的、所……的；pron. 什麼、多麼、無論什麼、……的事物；conj. 什麼、所……的事物、所……的、……那樣的；int. 什麼、真的嗎、什麼？；adv. 到什麼程度、在哪一方面、哦、呃",
        "unit": 18,
        "example": "What do you want to eat today?",
        "exampleZh": "你今天想吃什麼？"
    },
    {
        "id": 31890,
        "en": "wheel",
        "kk": "[wil]",
        "uk": "/wiːl/",
        "zh": "n. 輪子、車輪、汽車、機輪；vt. 推、拉、用有輪之物推動（或拉動、移動）……、盤旋",
        "unit": 18,
        "example": "The big wheel rolled away fast.",
        "exampleZh": "大輪子迅速滾走了。"
    },
    {
        "id": 31891,
        "en": "when",
        "kk": "[wɛn]",
        "uk": "/wen/",
        "zh": "adv. 什麼時候、什麼情況下、什麼場合下、在那時；pron. 什麼時候、何時；conj. 當、當……時、在……時候、在……之後；n. 時間、時候、日期、場合",
        "unit": 18,
        "example": "When were you there last?",
        "exampleZh": "你上次在那裡是什麼時候？"
    },
    {
        "id": 31892,
        "en": "where",
        "kk": "[wɛr]",
        "uk": "/weə(r)/",
        "zh": "adv. 哪裡、在哪裡、去哪兒、從哪裡；pron. 哪裡；conj. 在……的地方、哪裡、什麼地方；n. 地點、位置",
        "unit": 18,
        "example": "Where are you living now?",
        "exampleZh": "你現在住在哪裡？"
    },
    {
        "id": 31893,
        "en": "whether",
        "kk": "[ˋwɛðɚ]",
        "uk": "/ˈweðə(r)/",
        "zh": "conj. 是否、不管、無論；pron. 兩個中的哪一個",
        "unit": 18,
        "example": "Check whether a fuse has blown.",
        "exampleZh": "檢查保險絲是否熔斷。"
    },
    {
        "id": 31894,
        "en": "which",
        "kk": "[wɪtʃ]",
        "uk": "/wɪtʃ/",
        "zh": "pron. 哪些、哪一個、哪一些、……的那個；det. 哪個、哪一個、哪一些、……的那個；adj. 哪一個、哪一些、無論哪個、那個",
        "unit": 18,
        "example": "Which bus goes to the train station?",
        "exampleZh": "哪一班公車會到火車站？"
    },
    {
        "id": 31895,
        "en": "while",
        "kk": "[waɪl]",
        "uk": "/waɪl/",
        "zh": "conj. 當……時、當……的時候、與……同時、而；n. 一段時間、同時、在此期間；v. 消磨時間；prep. 直到；adv. 在……的時候",
        "unit": 18,
        "example": "Wait here for a little while, please.",
        "exampleZh": "請在這裡稍等一會兒。"
    },
    {
        "id": 31896,
        "en": "white",
        "kk": "[waɪt]",
        "uk": "/waɪt/",
        "zh": "adj. 白色的、白種人的、白膚色的、蒼白的；n. 白色、白顏料、白種人、白人；v. 把……漆成白色、使變白",
        "unit": 18,
        "example": "The small cat has soft white fur.",
        "exampleZh": "那隻小貓有著柔軟的白毛。"
    },
    {
        "id": 31897,
        "en": "who",
        "kk": "[hu]",
        "uk": "/huː/",
        "zh": "pron. 誰、什麼人、……的人",
        "unit": 18,
        "example": "Who is at the front door?",
        "exampleZh": "是誰在前門？"
    },
    {
        "id": 31898,
        "en": "whole",
        "kk": "[hol]",
        "uk": "/həʊl/",
        "zh": "n. 全部、整體；adv. 完全地、整個；adj. 整個的、全部的、完整的、完好無損的",
        "unit": 18,
        "example": "He ate the whole cake by himself.",
        "exampleZh": "他自己一個人吃掉了整個蛋糕。"
    },
    {
        "id": 31899,
        "en": "whose",
        "kk": "[huz]",
        "uk": "/huːz/",
        "zh": "pron. 誰的、其、……的；det. 誰的、其、……的",
        "unit": 18,
        "example": "Whose is that farm over yonder?",
        "exampleZh": "那邊的農場是誰的？"
    },
    {
        "id": 31900,
        "en": "why",
        "kk": "[waɪ]",
        "uk": "/waɪ/",
        "zh": "adv. 為何、為什麼、何必、……的原因；n. 理由、原因；int. 哎呀",
        "unit": 18,
        "example": "Tell me why you are late today.",
        "exampleZh": "告訴我你今天為什麼遲到了。"
    },
    {
        "id": 31901,
        "en": "wide",
        "kk": "[waɪd]",
        "uk": "/waɪd/",
        "zh": "adj. 寬的、寬闊的、廣闊的、…寬的；adv. 廣泛地、廣闊地、遠及各處；n. 大千世界、廣闊的世界、投偏的球、偏球",
        "unit": 18,
        "example": "It's about 2 metres wide.",
        "exampleZh": "寬約2米。"
    },
    {
        "id": 31902,
        "en": "wife",
        "kk": "[waɪf]",
        "uk": "/waɪf/",
        "zh": "n. 妻子、已婚婦女、夫人",
        "unit": 18,
        "example": "His wife is a doctor at the hospital.",
        "exampleZh": "他的妻子是那家醫院的醫生。"
    },
    {
        "id": 31903,
        "en": "wild",
        "kk": "[waɪld]",
        "uk": "/waɪld/",
        "zh": "adj. 自然生長的、野生的、無人煙的、未開墾的；adv. 自然地、不受控制地；n. 偏遠地區、人煙稀少的地區、自然環境、野生狀態；v. 野蠻對待、殘酷對待",
        "unit": 18,
        "example": "Many wild birds live in nature.",
        "exampleZh": "許多野鳥生活在大自然中。"
    },
    {
        "id": 31904,
        "en": "will",
        "kk": "[wɪl]",
        "uk": "/wɪl/",
        "zh": "vt. 將、將要、請、總是；n. 意志、決心、毅力、意願",
        "unit": 18,
        "example": "She will help you with your homework.",
        "exampleZh": "她會協助你完成家庭作業。"
    },
    {
        "id": 31905,
        "en": "win",
        "kk": "[wɪn]",
        "uk": "/wɪn/",
        "zh": "vt. 贏、獲勝、贏得、透過努力得到；n. 勝利",
        "unit": 18,
        "example": "Our team can win this big game.",
        "exampleZh": "我們隊伍能夠贏得這場大賽。"
    },
    {
        "id": 31906,
        "en": "wind",
        "kk": "[waɪnd]",
        "uk": "/wɪnd/",
        "zh": "n. 風、氣流、風向、逼近的形勢；vt. 纏繞、彎曲前進、蜿蜒而行、捲纏；adj. 管樂的",
        "unit": 18,
        "example": "A strong wind blew through the trees.",
        "exampleZh": "一陣強風吹過了樹林。"
    },
    {
        "id": 31907,
        "en": "window",
        "kk": "[ˋwɪndo]",
        "uk": "/ˈwɪndəʊ/",
        "zh": "n. 窗戶、窗、窗玻璃、視窗",
        "unit": 18,
        "example": "Please open the window to let air in.",
        "exampleZh": "請打開窗戶讓空氣進來。"
    },
    {
        "id": 31908,
        "en": "windy",
        "kk": "[ˋwɪndi]",
        "uk": "/ˈwɪndi/",
        "zh": "adj. 風大的、多風的、誇誇其談的、空話連篇的",
        "unit": 18,
        "example": "It was windy and Jake felt cold.",
        "exampleZh": "風很大，傑克感到很冷。"
    },
    {
        "id": 31909,
        "en": "wine",
        "kk": "[waɪn]",
        "uk": "/waɪn/",
        "zh": "n. 葡萄酒、果蔬酒、深紫紅色；v. 喝酒、設酒宴款待、跳擺臀舞",
        "unit": 18,
        "example": "My father drinks a glass of red wine.",
        "exampleZh": "我父親喝了一杯紅葡萄酒。"
    },
    {
        "id": 31910,
        "en": "wing",
        "kk": "[wɪŋ]",
        "uk": "/wɪŋ/",
        "zh": "n. 翅膀、翼、機翼、側翼；v. 飛、飛行、被迅速送往、擦傷",
        "unit": 18,
        "example": "The bird hurt its left wing.",
        "exampleZh": "那隻鳥傷到了它的左翅膀。"
    },
    {
        "id": 31911,
        "en": "winner",
        "kk": "[ˋwɪnɚ]",
        "uk": "/ˈwɪnə(r)/",
        "zh": "n. 優勝者、獲勝的人、致勝的一分、制勝的進球",
        "unit": 18,
        "example": "The winner scored 10 pts.",
        "exampleZh": "獲勝者得了10分。"
    },
    {
        "id": 31912,
        "en": "winter",
        "kk": "[ˋwɪntɚ]",
        "uk": "/ˈwɪntə(r)/",
        "zh": "n. 冬季、從冬至點到春分點的期間、年；adj. 冬天的、冬天出現的、用於冬天的、冬季才成熟的；v. 過冬、越冬、使度過冬季",
        "unit": 18,
        "example": "It snows a lot during the cold winter.",
        "exampleZh": "寒冷的冬天經常下很多雪。"
    },
    {
        "id": 31913,
        "en": "wire",
        "kk": "[ˋwaɪɚ]",
        "uk": "/ˈwaɪə(r)/",
        "zh": "n. 金屬絲、金屬線、電線、導線；vt. 給……接上電線、接通、連線、電匯",
        "unit": 18,
        "example": "Do not touch that broken wire.",
        "exampleZh": "不要碰那條斷掉的電線。"
    },
    {
        "id": 31914,
        "en": "wise",
        "kk": "[waɪz]",
        "uk": "/waɪz/",
        "zh": "adj. 明智的、高明的、有學問的、精通的；v. 瞭解、知道",
        "unit": 18,
        "example": "The old man gave us wise advice.",
        "exampleZh": "那位老人給了我們明智的建議。"
    },
    {
        "id": 31915,
        "en": "wish",
        "kk": "[wɪʃ]",
        "uk": "/wɪʃ/",
        "zh": "v. 希望、想要、祝、祝願；n. 願望、希望、心願、祝願",
        "unit": 18,
        "example": "I wish you a very happy birthday.",
        "exampleZh": "我祝你有個非常快樂的生日。"
    },
    {
        "id": 31916,
        "en": "with",
        "kk": "[wɪð]",
        "uk": "/wɪð/",
        "zh": "prep. 有、用、和……在一起、與……一同",
        "unit": 18,
        "example": "He's more comfortable with computers than with people.",
        "exampleZh": "與人相處相比，他更喜歡與電腦相處。"
    },
    {
        "id": 31917,
        "en": "without",
        "kk": "[wɪˋθaʊt]",
        "uk": "/wɪˈðaʊt/",
        "zh": "prep. 沒有、缺乏、不使用、不借助；adv. 缺乏、沒有、在外面；conj. 不那樣的話、除非、如果不；n. 外部、外面",
        "unit": 18,
        "example": "She's better off without him.",
        "exampleZh": "沒有他，她會過得更好。"
    },
    {
        "id": 31918,
        "en": "wolf",
        "kk": "[wʊlf]",
        "uk": "/wʊlf/",
        "zh": "n. 狼、色狼、色鬼、殘忍兇狠的人；vt. 狼吞虎嚥地吃",
        "unit": 18,
        "example": "A gray wolf ran into woods.",
        "exampleZh": "一隻灰狼跑進了樹林。"
    },
    {
        "id": 31919,
        "en": "woman",
        "kk": "[ˋwʊmən]",
        "uk": "/ˈwʊmən/",
        "zh": "n. 女人、成年女子、婦女、女性；v. 使女性化、配備女性員工、使（某人）與女性交往",
        "unit": 18,
        "example": "That kind woman helps poor children.",
        "exampleZh": "那位好心的女士幫助貧困的孩童。"
    },
    {
        "id": 31920,
        "en": "wonder",
        "kk": "[ˋwʌndɚ]",
        "uk": "/ˈwʌndə(r)/",
        "zh": "vt. 想知道、好奇、琢磨、不知是否；n. 奇蹟、驚訝、驚歎、奇觀；adj. 極好的、靈驗的",
        "unit": 18,
        "example": "I wonder if you can help me.",
        "exampleZh": "不知您是否能幫我的忙？"
    },
    {
        "id": 31921,
        "en": "wonderful",
        "kk": "[ˋwʌndɚfəl]",
        "uk": "/ˈwʌndəf(ə)l/",
        "zh": "adj. 極好的、絕妙的、令人驚歎的",
        "unit": 18,
        "example": "They've got a wonderful house.",
        "exampleZh": "他們有一棟很棒的房子。"
    },
    {
        "id": 31922,
        "en": "wood",
        "kk": "[wʊd]",
        "uk": "/wʊd/",
        "zh": "n. 木頭、木材、木料、樹林；adj. 木製的、用來切割或加工木材的、用木材做燃料的；v. 收集木材、植林於、給……新增木柴",
        "unit": 18,
        "example": "This small chair is made of wood.",
        "exampleZh": "這把小椅子是由木頭製成的。"
    },
    {
        "id": 31923,
        "en": "wool",
        "kk": "[wʊl]",
        "uk": "/wʊl/",
        "zh": "n. 羊毛、動物毛、毛線、絨線",
        "unit": 18,
        "example": "This scarf is 100% wool.",
        "exampleZh": "這條披肩是純毛的。"
    },
    {
        "id": 31924,
        "en": "word",
        "kk": "[wɝd]",
        "uk": "/wɜːd/",
        "zh": "n. 字、詞、單詞、話；v. 措辭、用詞；int. 就是、說得對",
        "unit": 18,
        "example": "I do not know this English word.",
        "exampleZh": "我不認得這個英文單字。"
    },
    {
        "id": 31925,
        "en": "work",
        "kk": "[wɝk]",
        "uk": "/wɜːk/",
        "zh": "n. 工作、職業、勞動；v. 工作、幹活兒、從事體力（或腦力）勞動、從事……工作；adj. 工作的、與工作有關的、適合工作時穿戴的、用於工作的",
        "unit": 18,
        "example": "He's still unfit for work.",
        "exampleZh": "他仍然不適合工作。"
    },
    {
        "id": 31926,
        "en": "worker",
        "kk": "[ˋwɝkɚ]",
        "uk": "/ˈwɜːkə(r)/",
        "zh": "n. 工人、工作者、工作人員、勞工",
        "unit": 18,
        "example": "She was a zealous worker for charity.",
        "exampleZh": "她是一位熱心慈善事業的工作者。"
    },
    {
        "id": 31927,
        "en": "world",
        "kk": "[wɝld]",
        "uk": "/wɜːld/",
        "zh": "n. 世界、地球、天下、星球；adj. 世界上最重要的、世界聞名的、世界（性）的、環球的",
        "unit": 18,
        "example": "She has three world titles.",
        "exampleZh": "她擁有三個世界冠軍。"
    },
    {
        "id": 31928,
        "en": "worm",
        "kk": "[wɝm]",
        "uk": "/wɜːm/",
        "zh": "n. 蠕蟲、幼蟲、寄生蟲、寄生蟲病；vt. 驅腸蟲、蠕動、曲折行進、逐漸取得；abbr. 一次寫入型光碟、單寫多讀型光碟",
        "unit": 18,
        "example": "The early bird catches the worm.",
        "exampleZh": "早起的鳥兒有蟲吃。"
    },
    {
        "id": 31929,
        "en": "worry",
        "kk": "[ˋwɝi]",
        "uk": "/ˈwʌri/",
        "zh": "vt. 擔心、發愁、使擔憂、使發愁；n. 憂慮、令人擔憂的事、令人發愁的問題、擔心",
        "unit": 18,
        "example": "Do not worry about the math test.",
        "exampleZh": "不要為那場數學考試擔心。"
    },
    {
        "id": 31930,
        "en": "worth",
        "kk": "[wɝθ]",
        "uk": "/wɜːθ/",
        "zh": "adj. 價值……的、值……錢的、值得的、具有……價值的；n. 價格、價值、重要性、作用；prep. 價值……、值得",
        "unit": 18,
        "example": "Was it worth the effort?",
        "exampleZh": "這值得花費力氣嗎？"
    },
    {
        "id": 31931,
        "en": "wound",
        "kk": "[waʊnd]",
        "uk": "/wuːnd/",
        "zh": "n. 創傷、傷口、損害、痛苦；vt. 傷害、使受傷、使受創傷、蜿蜒",
        "unit": 18,
        "example": "Wash the deep wound with water.",
        "exampleZh": "用水清洗這個深傷口。"
    },
    {
        "id": 31932,
        "en": "wrist",
        "kk": "[rɪst]",
        "uk": "/rɪst/",
        "zh": "n. 手腕、腕關節、膝關節、腕",
        "unit": 18,
        "example": "She wears a watch on her wrist.",
        "exampleZh": "她在手腕上戴了一只手錶。"
    },
    {
        "id": 31933,
        "en": "write",
        "kk": "[raɪt]",
        "uk": "/raɪt/",
        "zh": "v. 寫、寫作、編寫、寫道",
        "unit": 18,
        "example": "Write me while you're away.",
        "exampleZh": "你不在的時候寫信給我。"
    },
    {
        "id": 31934,
        "en": "writer",
        "kk": "[ˋraɪtɚ]",
        "uk": "/ˈraɪtə(r)/",
        "zh": "n. 作者、作家、執筆者、撰寫人",
        "unit": 18,
        "example": "The famous writer wrote many good books.",
        "exampleZh": "那位知名作家寫了許多好書。"
    },
    {
        "id": 31935,
        "en": "wrong",
        "kk": "[rɔŋ]",
        "uk": "/rɒŋ/",
        "zh": "adj. 錯誤的、不合乎事實的、有問題的、有毛病的；adv. 錯誤地、不符合事實地、不適當地、不適宜地；n. 壞事、不道德行為、錯誤的行為、冤枉；v. 不公正地對待、冤枉",
        "unit": 18,
        "example": "Your answer to this question is wrong.",
        "exampleZh": "你對這個問題的回答是錯誤的。"
    },
    {
        "id": 31936,
        "en": "yard",
        "kk": "[jɑrd]",
        "uk": "/jɑːd/",
        "zh": "n. 院子、碼、平方碼、立方碼；v. 把（木材）堆放（或運至）場內、把（家畜）驅入圈欄、冬令集居",
        "unit": 18,
        "example": "Which door leads to the yard?",
        "exampleZh": "哪扇門通向庭院？"
    },
    {
        "id": 31937,
        "en": "year",
        "kk": "[jɪr]",
        "uk": "/jɪə(r)/",
        "zh": "n. 年、日曆年、一年時間、與某事相關的一年",
        "unit": 18,
        "example": "We had a great trip this year.",
        "exampleZh": "我們今年去了一趟很棒的旅行。"
    },
    {
        "id": 31938,
        "en": "yellow",
        "kk": "[ˋjɛlo]",
        "uk": "/ˈjeləʊ/",
        "zh": "adj. 黃色的、黃的、黃色人種的、黃皮膚的；n. 黃色、黃顏料、黃色衣服、黃色衣料；v. 變黃",
        "unit": 18,
        "example": "The yellow bus stopped near our house.",
        "exampleZh": "那輛黃色公車停在我們家附近。"
    },
    {
        "id": 31939,
        "en": "yes",
        "kk": "[jɛs]",
        "uk": "/jes/",
        "zh": "adv. 是的、是、對、是嗎？；n. 是、肯定答覆、贊成票",
        "unit": 18,
        "example": "Yes, there's plenty of room.",
        "exampleZh": "是的，有足夠的空間。"
    },
    {
        "id": 31940,
        "en": "yesterday",
        "kk": "[ˋjɛstɚ͵de]",
        "uk": "/ˈjestədeɪ/",
        "zh": "n. 昨天、昨日、往昔；adv. 在昨天、在昨日",
        "unit": 18,
        "example": "He signed for United yesterday.",
        "exampleZh": "他昨天與曼聯簽約。"
    },
    {
        "id": 31941,
        "en": "yet",
        "kk": "[jɛt]",
        "uk": "/jet/",
        "zh": "adv. 還、仍然、現在、此刻；conj. 然而、但是",
        "unit": 18,
        "example": "The bus has not arrived here yet.",
        "exampleZh": "公車還沒有到達這裡。"
    },
    {
        "id": 31942,
        "en": "young",
        "kk": "[jʌŋ]",
        "uk": "/jʌŋ/",
        "zh": "adj. 年輕的、幼小的、存在不久的、新成立的；n. 年輕人、幼崽、雛鳥",
        "unit": 18,
        "example": "The young girl likes to draw pictures.",
        "exampleZh": "那個年輕女孩喜歡畫畫。"
    },
    {
        "id": 31943,
        "en": "youth",
        "kk": "[juθ]",
        "uk": "/juːθ/",
        "zh": "n. 青春、青少年時期、早期、初期",
        "unit": 18,
        "example": "He lost his youth too soon.",
        "exampleZh": "他太早失去了青春年華。"
    },
    {
        "id": 31944,
        "en": "yummy",
        "kk": "[ˋjʌmi]",
        "uk": "/ˈjʌmi/",
        "zh": "adj. 好吃的、美味的、可口的、性感的；n. 美味的食物",
        "unit": 18,
        "example": "I'll bet they have yummy ice cream.",
        "exampleZh": "我敢打賭他們一定有美味的冰淇淋。"
    },
    {
        "id": 31945,
        "en": "zero",
        "kk": "[ˋzɪro]",
        "uk": "/ˈzɪərəʊ/",
        "zh": "num. 零；n. 零點、零度",
        "unit": 18,
        "example": "You've left off a zero.",
        "exampleZh": "你漏掉了一個零。"
    },
    {
        "id": 31946,
        "en": "zoo",
        "kk": "[zu]",
        "uk": "/zuː/",
        "zh": "n. 動物園、混亂喧鬧的場所",
        "unit": 18,
        "example": "We saw lions and monkeys at the zoo.",
        "exampleZh": "我們在動物園看到了獅子和猴子。"
    }
];
