// 多益常考單字 (單元 11-13)
const toeicWordsDB = [
    {
        "id": 20070,
        "en": "directory",
        "kk": "/daɪˈɹɛktɝi/",
        "zh": "n. 工商名錄；號碼簿  a 指導的；諮詢的",
        "unit": 11,
        "example": "May I see the telephone directory?",
        "exampleZh": "我可以看一下電話簿嗎？"
    },
    {
        "id": 20071,
        "en": "discount",
        "kk": "/ˈdɪskaʊnt/",
        "zh": "n. 折扣 v 打折扣",
        "unit": 11,
        "example": "many stores will offer a discount on bulk purchases",
        "exampleZh": "許多商店都會為大量購買提供折扣"
    },
    {
        "id": 20072,
        "en": "dispatch",
        "kk": "/dɪˈspætʃ/",
        "zh": "v. 派遣；發送",
        "unit": 11,
        "example": "the legendary dispatch of villains by a hero",
        "exampleZh": "英雄除惡的傳奇"
    },
    {
        "id": 20073,
        "en": "distribute",
        "kk": "/dɪˈstɹɪbjut/",
        "zh": "v. 分發；分配",
        "unit": 11,
        "example": "you can distribute the system's output over your home network",
        "exampleZh": "您可以透過家庭網路分發系統的輸出"
    },
    {
        "id": 20074,
        "en": "division",
        "kk": "/dɪˈvɪʒən/",
        "zh": "n. 分開；分割",
        "unit": 11,
        "example": "the plant can also be easily increased by division in autumn",
        "exampleZh": "該植物還可以在秋季通過分株輕鬆增加"
    },
    {
        "id": 20075,
        "en": "document",
        "kk": "/ˈdɑkjəmɛnt/",
        "zh": "n. 公文；文件",
        "unit": 11,
        "example": "Hide these documents.",
        "exampleZh": "隱藏這些文件。"
    },
    {
        "id": 20076,
        "en": "domestic",
        "kk": "/dəˈmɛstɪk/",
        "zh": "a. 家庭的；國內的",
        "unit": 11,
        "example": "domestic chores",
        "exampleZh": "家務事"
    },
    {
        "id": 20077,
        "en": "downsize",
        "kk": "",
        "zh": "v. 裁減",
        "unit": 11,
        "example": "recession forced many companies to downsize",
        "exampleZh": "經濟衰退迫使許多公司縮小規模"
    },
    {
        "id": 20078,
        "en": "durable",
        "kk": "/ˈdʊɹəbəɫ/",
        "zh": "a. 經久的，耐用的；持久的",
        "unit": 11,
        "example": "a durable peace can be achieved",
        "exampleZh": "持久和平是可以實現的"
    },
    {
        "id": 20079,
        "en": "efficient",
        "kk": "/ɪˈfɪʃənt/",
        "zh": "adj. 有效率的",
        "unit": 11,
        "example": "an efficient administrator",
        "exampleZh": "高效率的管理者"
    },
    {
        "id": 20080,
        "en": "eligible",
        "kk": "/ˈɛɫədʒəbəɫ/",
        "zh": "a. 有資格當選的；法律上合格的",
        "unit": 11,
        "example": "a foreign student is eligible to attend the school",
        "exampleZh": "外國學生有資格就讀該學校"
    },
    {
        "id": 20081,
        "en": "employee",
        "kk": "/ɛmˈpɫɔɪi/",
        "zh": "n. 員工",
        "unit": 11,
        "example": "Watch the employees.",
        "exampleZh": "觀察員工。"
    },
    {
        "id": 20082,
        "en": "enclose",
        "kk": "/ɪnˈkɫoʊz/",
        "zh": "v. 圍住；圈起",
        "unit": 11,
        "example": "I enclose a copy of the job description",
        "exampleZh": "我附上一份職位說明的副本"
    },
    {
        "id": 20083,
        "en": "endorse",
        "kk": "",
        "zh": "v. 背書；認可",
        "unit": 11,
        "example": "Endorse this check.",
        "exampleZh": "簽署此支票。"
    },
    {
        "id": 20084,
        "en": "enroll",
        "kk": "/ɛnˈɹoʊɫ/",
        "zh": "v. 記入名冊；被登記",
        "unit": 11,
        "example": "a campaign to enroll more foster families",
        "exampleZh": "一項招募更多寄養家庭的運動"
    },
    {
        "id": 20085,
        "en": "ensure",
        "kk": "/ɛnˈʃʊɹ/",
        "zh": "v. 保證；擔保",
        "unit": 11,
        "example": "the client must ensure that accurate records be kept",
        "exampleZh": "客戶必須確保保存準確的記錄"
    },
    {
        "id": 20086,
        "en": "entrepreneur",
        "kk": "",
        "zh": "n. 企業家",
        "unit": 11,
        "example": "the music entrepreneur pulled back from financing a screenplay Hopper had written",
        "exampleZh": "音樂企業家撤回霍珀撰寫的劇本的融資"
    },
    {
        "id": 20087,
        "en": "equipment",
        "kk": "/ɪˈkwɪpmənt/",
        "zh": "n. 裝備；配備",
        "unit": 11,
        "example": "they lacked the intellectual equipment to recognize the jokes",
        "exampleZh": "他們缺乏辨識笑話的智力設備"
    },
    {
        "id": 20088,
        "en": "estimate",
        "kk": "/ˈɛstəˌmeɪt/",
        "zh": "v. 估算；估量",
        "unit": 11,
        "example": "the aim is to estimate the effects of macroeconomic policy on the economy",
        "exampleZh": "目的是估計宏觀經濟政策對經濟的影響"
    },
    {
        "id": 20089,
        "en": "evaluate",
        "kk": "/iˈvæɫjuˌeɪt/",
        "zh": "v. 估價；評價",
        "unit": 11,
        "example": "when you evaluate any hammer, look for precision machining",
        "exampleZh": "當您評估任何錘子時，請尋找精密加工的產品"
    },
    {
        "id": 20090,
        "en": "exceed",
        "kk": "/ɪkˈsid/",
        "zh": "v. 超過；勝過",
        "unit": 11,
        "example": "Supply exceeds demand.",
        "exampleZh": "供應超過需求。"
    },
    {
        "id": 20091,
        "en": "exhibition",
        "kk": "/ˌɛksəˈbɪʃən/",
        "zh": "n. 展覽；展示",
        "unit": 11,
        "example": "an exhibition game",
        "exampleZh": "一場表演賽"
    },
    {
        "id": 20092,
        "en": "expand",
        "kk": "/ɪkˈspænd/",
        "zh": "v. 展開；張開",
        "unit": 11,
        "example": "baby birds cannot expand and contract their lungs",
        "exampleZh": "幼鳥無法擴張和收縮肺部"
    },
    {
        "id": 20093,
        "en": "expenditure",
        "kk": "",
        "zh": "n. 消費；支出",
        "unit": 11,
        "example": "cuts in public expenditure",
        "exampleZh": "削減公共開支"
    },
    {
        "id": 20094,
        "en": "expense",
        "kk": "/ɪkˈspɛns/",
        "zh": "n. 費用；價錢",
        "unit": 11,
        "example": "the committee does not expect members to be put to any expense",
        "exampleZh": "委員會不希望成員承擔任何費用"
    },
    {
        "id": 20095,
        "en": "expire",
        "kk": "/ɪkˈspaɪɹ/",
        "zh": "v. 屆期；終止",
        "unit": 11,
        "example": "It expires tomorrow.",
        "exampleZh": "明天就到期了。"
    },
    {
        "id": 20096,
        "en": "facility",
        "kk": "/fəˈsɪɫɪti/",
        "zh": "n. 設施；配備",
        "unit": 11,
        "example": "the pianist played with great facility",
        "exampleZh": "鋼琴家演奏得非常自如"
    },
    {
        "id": 20097,
        "en": "fiscal",
        "kk": "",
        "zh": "adj. 財政的",
        "unit": 11,
        "example": "monetary and fiscal policy",
        "exampleZh": "貨幣和財政政策"
    },
    {
        "id": 20098,
        "en": "flexible",
        "kk": "/ˈfɫɛksəbəɫ/",
        "zh": "adj. 彈性的",
        "unit": 11,
        "example": "you can save money if you're flexible about where your room is located",
        "exampleZh": "如果您靈活選擇房間的位置，您可以省錢"
    },
    {
        "id": 20099,
        "en": "forecast",
        "kk": "/ˈfɔɹˌkæst/",
        "zh": "n. 預報；預測 v預報；預測",
        "unit": 11,
        "example": "rain is forecast for eastern Ohio",
        "exampleZh": "預計俄亥俄州東部將有降雨"
    },
    {
        "id": 20100,
        "en": "franchise",
        "kk": "",
        "zh": "n. 特許經銷權；公民權",
        "unit": 11,
        "example": "Toyota granted the group a franchise",
        "exampleZh": "豐田授予該集團特許經營權"
    },
    {
        "id": 20101,
        "en": "freight",
        "kk": "/ˈfɹeɪt/",
        "zh": "n. 貨物 v 裝貨於；運輸",
        "unit": 11,
        "example": "a bill indicating that the freight has been paid",
        "exampleZh": "表示運費已付的帳單"
    },
    {
        "id": 20102,
        "en": "furnish",
        "kk": "/ˈfɝnɪʃ/",
        "zh": "v. 配備家具；提供",
        "unit": 11,
        "example": "she was able to furnish me with details of the incident",
        "exampleZh": "她能夠向我提供事件的詳細信息"
    },
    {
        "id": 20103,
        "en": "generate",
        "kk": "/ˈdʒɛnɝˌeɪt/",
        "zh": "v. 產生；發生",
        "unit": 11,
        "example": "changes that are likely to generate controversy",
        "exampleZh": "可能引起爭議的變化"
    },
    {
        "id": 20104,
        "en": "guarantee",
        "kk": "/ˌɡɛɹənˈti/",
        "zh": "n. 保證；保固 v 保證；保固",
        "unit": 11,
        "example": "no one can guarantee a profit on stocks",
        "exampleZh": "沒有人能保證股票獲利"
    },
    {
        "id": 20105,
        "en": "headquarters",
        "kk": "/ˈhɛdˌkɔɹtɝz/",
        "zh": "n. 總部",
        "unit": 11,
        "example": "its national headquarters are in Florida",
        "exampleZh": "其國家總部位於佛羅裡達州"
    },
    {
        "id": 20106,
        "en": "inquiry",
        "kk": "/ˌɪnˈkwaɪˌɹi/",
        "zh": "n. 詢問；打聽",
        "unit": 11,
        "example": "all lines of inquiry are open",
        "exampleZh": "所有諮詢專線均已開放"
    },
    {
        "id": 20107,
        "en": "installation",
        "kk": "/ˌɪnstəˈɫeɪʃən/",
        "zh": "n. 安裝",
        "unit": 11,
        "example": "a video installation",
        "exampleZh": "視訊裝置"
    },
    {
        "id": 20108,
        "en": "instruction",
        "kk": "/ˌɪnˈstɹəkʃən/",
        "zh": "n. 命令；指示",
        "unit": 11,
        "example": "the school offers personalized instruction in a variety of skills",
        "exampleZh": "學校提供各種技能的個人指導"
    },
    {
        "id": 20109,
        "en": "insurance",
        "kk": "/ˌɪnˈʃʊɹəns/",
        "zh": "n. 保險；保險契約",
        "unit": 11,
        "example": "Howard is in insurance",
        "exampleZh": "霍華德是保險人"
    },
    {
        "id": 20110,
        "en": "inventory",
        "kk": "/ˌɪnvənˈtɔɹi/",
        "zh": "n. 存貨清單；目錄",
        "unit": 11,
        "example": "The inventory is full.",
        "exampleZh": "庫存已滿。"
    },
    {
        "id": 20111,
        "en": "invoice",
        "kk": "",
        "zh": "n. 發票；發貨單",
        "unit": 11,
        "example": "I have the invoice.",
        "exampleZh": "我有發票。"
    },
    {
        "id": 20112,
        "en": "itinerary",
        "kk": "",
        "zh": "n. 旅程；路線 a旅行的；旅程的J",
        "unit": 11,
        "example": "his itinerary included an official visit to Canada",
        "exampleZh": "他的行程包括對加拿大進行正式訪問"
    },
    {
        "id": 20113,
        "en": "jeopardize",
        "kk": "",
        "zh": "v. 危害",
        "unit": 11,
        "example": "a devaluation of the dollar would jeopardize New York's position as a financial center",
        "exampleZh": "美元貶值將危及紐約的金融中心地位"
    },
    {
        "id": 20114,
        "en": "launch",
        "kk": "/ˈɫɔntʃ/",
        "zh": "v. 發射；發動 n發射；發行",
        "unit": 11,
        "example": "she cruised the waterways on a luxury motor launch",
        "exampleZh": "她乘坐豪華汽車在水道上巡遊"
    },
    {
        "id": 20115,
        "en": "lease",
        "kk": "",
        "zh": "n. 租約；租契 v 出租",
        "unit": 11,
        "example": "a six-month lease on a shop",
        "exampleZh": "商店六個月的租約"
    },
    {
        "id": 20116,
        "en": "liability",
        "kk": "",
        "zh": "n. 傾向責任",
        "unit": 11,
        "example": "he has become a political liability",
        "exampleZh": "他已成為政治負擔"
    },
    {
        "id": 20117,
        "en": "logistics",
        "kk": "",
        "zh": "n. 物流；運籌",
        "unit": 11,
        "example": "Germany's largest beverage logistics organization",
        "exampleZh": "德國最大的飲料物流組織"
    },
    {
        "id": 20118,
        "en": "maintenance",
        "kk": "/ˈmeɪntənəns/",
        "zh": "n. 維持；保持",
        "unit": 11,
        "example": "essential maintenance work",
        "exampleZh": "必要的維護工作"
    },
    {
        "id": 20119,
        "en": "manufacture",
        "kk": "/ˌmænjəˈfæktʃɝ/",
        "zh": "v. 製造，加工  n 製造業；製品",
        "unit": 11,
        "example": "the manufacture of armored vehicles",
        "exampleZh": "裝甲車的製造"
    },
    {
        "id": 20120,
        "en": "margin",
        "kk": "/ˈmɑɹdʒən/",
        "zh": "n. 邊；邊沿",
        "unit": 11,
        "example": "they won by a convincing 17-point margin",
        "exampleZh": "他們以令人信服的 17 分優勢獲勝"
    },
    {
        "id": 20121,
        "en": "merchandise",
        "kk": "/ˈmɝtʃənˌdaɪz/",
        "zh": "n. 商品；貨物 v 買賣；經營",
        "unit": 11,
        "example": "it if be below great men to be kind of recompense, and merchandise their Power",
        "exampleZh": "如果低於偉人，可以作為一種補償，並利用他們的權力"
    },
    {
        "id": 20122,
        "en": "merge",
        "kk": "/ˈmɝdʒ/",
        "zh": "v. 合併；融合",
        "unit": 11,
        "example": "the turn is more like a merge than a standard right turn",
        "exampleZh": "該轉彎更像是並道而不是標準的右轉"
    },
    {
        "id": 20123,
        "en": "minutes",
        "kk": "",
        "zh": "n. 會議記錄",
        "unit": 11,
        "example": "Wait thirty minutes.",
        "exampleZh": "等三十分鐘。"
    },
    {
        "id": 20124,
        "en": "negotiate",
        "kk": "/nəˈɡoʊʃiˌeɪt/",
        "zh": "v. 協商；交涉",
        "unit": 11,
        "example": "his government's willingness to negotiate",
        "exampleZh": "他的政府願意進行談判"
    },
    {
        "id": 20125,
        "en": "notify",
        "kk": "/ˈnoʊtəˌfaɪ/",
        "zh": "v. 通知",
        "unit": 11,
        "example": "if he does not notify the occurrences, he may be guilty of nondisclosure",
        "exampleZh": "如果他不通知所發生的情況，他可能犯下隱瞞罪"
    },
    {
        "id": 20126,
        "en": "obligation",
        "kk": "/ˌɑbɫəˈɡeɪʃən/",
        "zh": "n. 義務；責任",
        "unit": 11,
        "example": "she didn't want to be under an obligation to him",
        "exampleZh": "她不想對他負有義務"
    },
    {
        "id": 20127,
        "en": "occupy",
        "kk": "/ˈɑkjəˌpaɪ/",
        "zh": "v. 佔用；佔據",
        "unit": 11,
        "example": "on the corporate ladder, they occupy the lowest rungs",
        "exampleZh": "在公司的階梯上，他們佔據最低的梯級"
    },
    {
        "id": 20128,
        "en": "operate",
        "kk": "/ˈɑpɝˌeɪt/",
        "zh": "v. 營業；運轉",
        "unit": 11,
        "example": "a shortage of workers to operate new machines",
        "exampleZh": "缺乏操作新機器的工人"
    },
    {
        "id": 20129,
        "en": "order",
        "kk": "/ˈɔɹdɝ/",
        "zh": "n. 順序；狀況；命令 v 命令；指揮",
        "unit": 11,
        "example": "I asked the security guard to order me a taxi",
        "exampleZh": "我讓保安給我叫了一輛計程車"
    },
    {
        "id": 20130,
        "en": "outstanding",
        "kk": "/ˌaʊtˈstændɪŋ/",
        "zh": "a. 顯著的；傑出的",
        "unit": 11,
        "example": "works of outstanding banality",
        "exampleZh": "傑出的平庸作品"
    },
    {
        "id": 20131,
        "en": "overdue",
        "kk": "",
        "zh": "adj. 逾期的",
        "unit": 11,
        "example": "she was overdue for some leave",
        "exampleZh": "她遲到了請假"
    },
    {
        "id": 20132,
        "en": "overtime",
        "kk": "",
        "zh": "n. 加班 a 超過時間的 ad 超過地",
        "unit": 11,
        "example": "an overtime ban",
        "exampleZh": "加班禁令"
    },
    {
        "id": 20133,
        "en": "participate",
        "kk": "/pɑɹˈtɪsəˌpeɪt/",
        "zh": "v. 參加；參與",
        "unit": 11,
        "example": "both members participate of harmony",
        "exampleZh": "雙方成員和諧參與"
    },
    {
        "id": 20134,
        "en": "partnership",
        "kk": "/ˈpɑɹtnɝˌʃɪp/",
        "zh": "n. 合夥關係",
        "unit": 11,
        "example": "we should go on working together in partnership",
        "exampleZh": "我們應該繼續合作"
    },
    {
        "id": 20135,
        "en": "patron",
        "kk": "/ˈpeɪtɹən/",
        "zh": "n. 老主顧；贊助人",
        "unit": 11,
        "example": "Charles became a patron of Rubens and van Dyck",
        "exampleZh": "查爾斯成為魯本斯和凡戴克的贊助人"
    },
    {
        "id": 20136,
        "en": "payroll",
        "kk": "",
        "zh": "n. 薪金總額；發薪名單",
        "unit": 11,
        "example": "small employers with a payroll of less than $45,000",
        "exampleZh": "工資低於 45,000 美元的小型雇主"
    },
    {
        "id": 20137,
        "en": "personnel",
        "kk": "/ˌpɝsəˈnɛɫ/",
        "zh": "n. 人員；員工",
        "unit": 11,
        "example": "many of the personnel involved require training",
        "exampleZh": "許多相關人員需要培訓"
    },
    {
        "id": 20138,
        "en": "postpone",
        "kk": "/poʊˈspoʊn/",
        "zh": "v. 延遲",
        "unit": 11,
        "example": "The trial was postponed.",
        "exampleZh": "審判被推遲。"
    },
    {
        "id": 20139,
        "en": "precaution",
        "kk": "/pɹiˈkɔʃən/",
        "zh": "n. 預防措施",
        "unit": 11,
        "example": "he had taken the precaution of seeking legal advice",
        "exampleZh": "他已採取預防措施尋求法律建議"
    },
    {
        "id": 20140,
        "en": "premises",
        "kk": "",
        "zh": "n. 生產場所；經營場址",
        "unit": 11,
        "example": "business premises",
        "exampleZh": "營業場所"
    },
    {
        "id": 20141,
        "en": "presentation",
        "kk": "/ˌpɹɛzənˈteɪʃən/",
        "zh": "n. 簡報",
        "unit": 11,
        "example": "all patients in this group were symptomatic at initial presentation",
        "exampleZh": "該組中的所有患者在初次就診時均出現症狀"
    },
    {
        "id": 20142,
        "en": "procedure",
        "kk": "/pɹəˈsidʒɝ/",
        "zh": "n. 程序；手續",
        "unit": 11,
        "example": "the standard procedure for informing new employees about conditions of work",
        "exampleZh": "告知新進員工工作條件的標準程序"
    },
    {
        "id": 20143,
        "en": "procurement",
        "kk": "",
        "zh": "n. 取得；採購",
        "unit": 11,
        "example": "defense procurement",
        "exampleZh": "國防採購"
    },
    {
        "id": 20144,
        "en": "productivity",
        "kk": "/ˌpɹoʊdəkˈtɪvəti/",
        "zh": "n. 生產力；生產率",
        "unit": 11,
        "example": "agricultural productivity",
        "exampleZh": "農業生產力"
    },
    {
        "id": 20145,
        "en": "profit",
        "kk": "/ˈpɹɑfət/",
        "zh": "n. 利潤",
        "unit": 11,
        "example": "his eyes brightened at the prospect of profit",
        "exampleZh": "他的眼睛因利潤的前景而閃閃發亮"
    },
    {
        "id": 20146,
        "en": "promote",
        "kk": "/pɹəˈmoʊt/",
        "zh": "v. 晉升；促進",
        "unit": 11,
        "example": "some regulation is still required to promote competition",
        "exampleZh": "仍需要一些監管來促進競爭"
    },
    {
        "id": 20147,
        "en": "promotion",
        "kk": "/pɝˈmoʊʃən/",
        "zh": "n. 升遷；促銷",
        "unit": 11,
        "example": "a boxing promotion",
        "exampleZh": "拳擊促銷活動"
    },
    {
        "id": 20148,
        "en": "proposal",
        "kk": "/pɹəˈpoʊzəɫ/",
        "zh": "n. 計畫；提案；求婚",
        "unit": 11,
        "example": "I approve your proposal.",
        "exampleZh": "我批准你的提議。"
    },
    {
        "id": 20149,
        "en": "purchase",
        "kk": "/ˈpɝtʃəs/",
        "zh": "v. 購買；獲得",
        "unit": 11,
        "example": "a lease valued at seven year's purchase",
        "exampleZh": "價值七年購買的租約"
    },
    {
        "id": 20150,
        "en": "qualification",
        "kk": "/ˌkwɑɫəfəˈkeɪʃən/",
        "zh": "n. 資格",
        "unit": 11,
        "example": "only one qualification required—a fabulous sense of humor",
        "exampleZh": "只需要一項資格－極佳的幽默感"
    },
    {
        "id": 20151,
        "en": "quotation",
        "kk": "/kwoʊˈteɪʃən/",
        "zh": "n. 引用；引證",
        "unit": 11,
        "example": "Can you give me a quotation?",
        "exampleZh": "你能給我報價嗎？"
    },
    {
        "id": 20152,
        "en": "receipt",
        "kk": "/ɹiˈsit/",
        "zh": "n. 收據",
        "unit": 11,
        "example": "this office is already in receipt of your midterm grades",
        "exampleZh": "該辦公室已收到您的期中成績"
    },
    {
        "id": 20153,
        "en": "recipient",
        "kk": "/ɹəˈsɪpiənt/",
        "zh": "n. 接受者；受領者  a 接受的；受領的",
        "unit": 11,
        "example": "the recipient of the Nobel Peace Prize",
        "exampleZh": "諾貝爾和平獎得主"
    },
    {
        "id": 20154,
        "en": "recruit",
        "kk": "/ɹəˈkɹut/",
        "zh": "v. 徵募；僱用",
        "unit": 11,
        "example": "they recruit their toughest soldiers from the desert tribes",
        "exampleZh": "他們從沙漠部落招募最強的士兵"
    },
    {
        "id": 20155,
        "en": "refund",
        "kk": "/ˈɹiˌfənd/",
        "zh": "n. 退還；償還",
        "unit": 11,
        "example": "you'll get an immediate tax refund",
        "exampleZh": "您將立即獲得退稅"
    },
    {
        "id": 20156,
        "en": "regulation",
        "kk": "/ˌɹɛɡjəˈɫeɪʃən/",
        "zh": "n. 規章；規則a 標準的；正規的",
        "unit": 11,
        "example": "the regulation of financial markets",
        "exampleZh": "金融市場的監管"
    },
    {
        "id": 20157,
        "en": "reimburse",
        "kk": "",
        "zh": "v. 償還；歸還",
        "unit": 11,
        "example": "How do I get reimbursed?",
        "exampleZh": "我如何獲得報銷？"
    },
    {
        "id": 20158,
        "en": "reliable",
        "kk": "/ɹiˈɫaɪəbəɫ/",
        "zh": "a. 可信賴的；可靠的",
        "unit": 11,
        "example": "a reliable source of information",
        "exampleZh": "可靠的資訊來源"
    },
    {
        "id": 20159,
        "en": "relocate",
        "kk": "",
        "zh": "v. 重新安置",
        "unit": 11,
        "example": "Tom wishes to relocate.",
        "exampleZh": "湯姆希望搬家。"
    },
    {
        "id": 20160,
        "en": "renew",
        "kk": "/ɹɪˈnu/",
        "zh": "v. 使更新；使復原",
        "unit": 11,
        "example": "a change of scenery will recharge your batteries and renew your zest for life",
        "exampleZh": "換個環境會為你充電，重燃你對生活的熱情"
    },
    {
        "id": 20161,
        "en": "renovation",
        "kk": "",
        "zh": "n. 更新；修理",
        "unit": 11,
        "example": "this property is in need of complete renovation",
        "exampleZh": "該房產需要徹底翻新"
    },
    {
        "id": 20162,
        "en": "reputation",
        "kk": "/ˌɹɛpjəˈteɪʃən/",
        "zh": "n. 名譽；名聲",
        "unit": 11,
        "example": "his reputation was tarnished by allegations that he had taken bribes",
        "exampleZh": "他的名譽因收賄指控而受損"
    },
    {
        "id": 20163,
        "en": "require",
        "kk": "/ˌɹiˈkwaɪɝ/",
        "zh": "v. 需要；要求",
        "unit": 11,
        "example": "please indicate how many tickets you require",
        "exampleZh": "請註明您需要多少張門票"
    },
    {
        "id": 20164,
        "en": "reservation",
        "kk": "/ˌɹɛzɝˈveɪʃən/",
        "zh": "n. 預定；保留",
        "unit": 11,
        "example": "the reservation of positions for non-Americans",
        "exampleZh": "為非美國人保留職位"
    },
    {
        "id": 20165,
        "en": "resign",
        "kk": "/ɹiˈsaɪn/",
        "zh": "v. 放棄；辭去",
        "unit": 11,
        "example": "he vows to resign himself to her direction",
        "exampleZh": "他發誓要聽從她的指示"
    },
    {
        "id": 20166,
        "en": "résumé",
        "kk": "",
        "zh": "n. 履歷表",
        "unit": 11
    },
    {
        "id": 20167,
        "en": "retail",
        "kk": "/ˈɹiˌteɪɫ/",
        "zh": "n. 零售 v 零售 a零售的",
        "unit": 11,
        "example": "it is not yet available retail",
        "exampleZh": "尚未零售"
    },
    {
        "id": 20168,
        "en": "revenue",
        "kk": "/ˈɹɛvəˌnu/",
        "zh": "n. 收入；稅收",
        "unit": 11,
        "example": "traders have lost $10,000 in revenue since the traffic scheme was implemented",
        "exampleZh": "自流量計劃實施以來，交易者已經損失了 10,000 美元的收入"
    },
    {
        "id": 20169,
        "en": "revise",
        "kk": "/ɹiˈvaɪz/",
        "zh": "v. 修訂；校訂",
        "unit": 11,
        "example": "he had cause to revise his opinion a moment after expressing it",
        "exampleZh": "他在表達後不久就有理由修改自己的觀點"
    },
    {
        "id": 20170,
        "en": "salary",
        "kk": "/ˈsæɫɝi/",
        "zh": "n. 薪資；薪水",
        "unit": 11,
        "example": "What is your salary?",
        "exampleZh": "你的薪水是多少？"
    },
    {
        "id": 20171,
        "en": "schedule",
        "kk": "/ˈskɛdʒuɫ/",
        "zh": "n. 時間表 v 安排；預定",
        "unit": 11,
        "example": "they need a clear schedule of fixtures and fittings",
        "exampleZh": "他們需要一個明確的固定裝置和配件時間表"
    },
    {
        "id": 20172,
        "en": "securities",
        "kk": "",
        "zh": "n. 證券",
        "unit": 11
    },
    {
        "id": 20173,
        "en": "shipment",
        "kk": "",
        "zh": "n. 運輸；運送",
        "unit": 11,
        "example": "logs waiting for shipment",
        "exampleZh": "等待發貨的日誌"
    },
    {
        "id": 20174,
        "en": "shortage",
        "kk": "/ˈʃɔɹtədʒ/",
        "zh": "n. 缺少；不足",
        "unit": 11,
        "example": "a shortage of hard cash",
        "exampleZh": "缺乏現金"
    },
    {
        "id": 20175,
        "en": "specification",
        "kk": "",
        "zh": "n. 規格",
        "unit": 11,
        "example": "there was no clear specification of objectives",
        "exampleZh": "沒有明確的目標"
    },
    {
        "id": 20176,
        "en": "sponsor",
        "kk": "/ˈspɑnsɝ/",
        "zh": "n. 贊助商",
        "unit": 11,
        "example": "a leading sponsor of the bill",
        "exampleZh": "該法案的主要發起人"
    },
    {
        "id": 20177,
        "en": "staff",
        "kk": "/ˈstæf/",
        "zh": "n. 職員；工作人員",
        "unit": 11,
        "example": "hospital staff were not to blame",
        "exampleZh": "醫院工作人員不應該受到責備"
    },
    {
        "id": 20178,
        "en": "subscription",
        "kk": "/səbsˈkɹɪpʃən/",
        "zh": "n. 訂閱；同意",
        "unit": 11,
        "example": "take out a one-year subscription",
        "exampleZh": "訂閱一年期"
    },
    {
        "id": 20179,
        "en": "subsidiary",
        "kk": "",
        "zh": "a. 輔助的；附帶的",
        "unit": 11,
        "example": "the firm's Spanish subsidiary",
        "exampleZh": "該公司的西班牙子公司"
    },
    {
        "id": 20180,
        "en": "supervisor",
        "kk": "/ˈsupɝˌvaɪzɝ/",
        "zh": "n. 管理人；指導者",
        "unit": 11,
        "example": "Tom is a supervisor.",
        "exampleZh": "湯姆是一名主管。"
    },
    {
        "id": 20181,
        "en": "supplier",
        "kk": "",
        "zh": "n. 供應者",
        "unit": 11,
        "example": "every major energy supplier upped their prices",
        "exampleZh": "每個主要能源供應商都提高了價格"
    },
    {
        "id": 20182,
        "en": "surplus",
        "kk": "/ˈsɝpɫəs/",
        "zh": "n. 剩餘物；順差a 過剩的；剩餘的",
        "unit": 11,
        "example": "a trade surplus of $1.4 billion",
        "exampleZh": "貿易順差14億美元"
    },
    {
        "id": 20183,
        "en": "tentative",
        "kk": "/ˈtɛnətɪv/",
        "zh": "a. 試驗性的；嘗試的",
        "unit": 11,
        "example": "he eventually tried a few tentative steps round his hospital room",
        "exampleZh": "他最終在病房周圍試探性地走了幾步"
    },
    {
        "id": 20184,
        "en": "terminate",
        "kk": "/ˈtɝməˌneɪt/",
        "zh": "v. 終止",
        "unit": 11,
        "example": "he was advised to terminate the contract",
        "exampleZh": "他被建議終止合約"
    },
    {
        "id": 20185,
        "en": "transaction",
        "kk": "/tɹænˈzækʃən/",
        "zh": "n. 交易；執行",
        "unit": 11,
        "example": "in an ordinary commercial transaction a delivery date is essential",
        "exampleZh": "在普通商業交易中，交貨日期至關重要"
    },
    {
        "id": 20186,
        "en": "transfer",
        "kk": "/ˈtɹænsfɝ/",
        "zh": "v. 轉換；調動",
        "unit": 11,
        "example": "the transfer of assets from wealthy individuals to family members",
        "exampleZh": "將資產從富人轉移到家庭成員"
    },
    {
        "id": 20187,
        "en": "transit",
        "kk": "/ˈtɹænzɪt/",
        "zh": "n. 運輸；過境",
        "unit": 11,
        "example": "a painting was damaged in transit",
        "exampleZh": "一幅畫在運輸途中損壞"
    },
    {
        "id": 20188,
        "en": "turnover",
        "kk": "",
        "zh": "n. 翻倒；翻轉",
        "unit": 11,
        "example": "a turnover approaching $4 million",
        "exampleZh": "營業額接近 400 萬美元"
    },
    {
        "id": 20189,
        "en": "upgrade",
        "kk": "/ˈəpˈɡɹeɪd/",
        "zh": "v. 提高；提升n 升級；上坡",
        "unit": 11,
        "example": "check that the upgrade is installed and performing correctly",
        "exampleZh": "檢查升級是否已安裝並正常運作"
    },
    {
        "id": 20190,
        "en": "utility",
        "kk": "/juˈtɪɫəti/",
        "zh": "n. 公用事業",
        "unit": 11,
        "example": "a handy utility for converting one graphics file type to another",
        "exampleZh": "用於將一種圖形檔案類型轉換為另一種圖形檔案類型的便捷實用程式"
    },
    {
        "id": 20191,
        "en": "vacancy",
        "kk": "/ˈveɪkənsi/",
        "zh": "n. 空白；空缺",
        "unit": 11,
        "example": "a vacancy for a shorthand typist",
        "exampleZh": "速記打字員職缺"
    },
    {
        "id": 20192,
        "en": "vendor",
        "kk": "/ˈvɛndɝ/",
        "zh": "n. 小販；攤販",
        "unit": 11,
        "example": "an Italian ice cream vendor",
        "exampleZh": "義大利冰淇淋攤販"
    },
    {
        "id": 20193,
        "en": "venue",
        "kk": "",
        "zh": "n. 場地",
        "unit": 11,
        "example": "the river could soon be the venue for a powerboat world championship event",
        "exampleZh": "這條河很快就會成為摩托艇世界錦標賽的舉辦地"
    },
    {
        "id": 20194,
        "en": "verify",
        "kk": "",
        "zh": "v. 證明；證實",
        "unit": 11,
        "example": "“Can you verify that the guns are licensed?”",
        "exampleZh": "“你能證實這些槍有許可證嗎？”"
    },
    {
        "id": 20195,
        "en": "warehouse",
        "kk": "/ˈwɛɹˌhaʊs/",
        "zh": "n. 倉庫 庫房",
        "unit": 11,
        "example": "a discount warehouse",
        "exampleZh": "折扣倉庫"
    },
    {
        "id": 20196,
        "en": "warranty",
        "kk": "/ˈwɔɹənti/",
        "zh": "n. 保證；擔保",
        "unit": 11,
        "example": "as your machine is under warranty, I suggest getting it checked",
        "exampleZh": "由於您的機器在保固期內，我建議您檢查一下"
    },
    {
        "id": 20197,
        "en": "withdraw",
        "kk": "/wɪðˈdɹɔ/",
        "zh": "v. 抽回；拉開；移開",
        "unit": 11,
        "example": "Withdraw your remarks!",
        "exampleZh": "撤回你的言論！"
    },
    {
        "id": 20198,
        "en": "workshop",
        "kk": "/ˈwɝkˌʃɑp/",
        "zh": "n. 工作坊",
        "unit": 11,
        "example": "a writers' workshop was held on July 25–27",
        "exampleZh": "7月25日至27日舉辦了作家研討會"
    },
    {
        "id": 20200,
        "en": "abandon",
        "kk": "/əˈbændən/",
        "zh": "v. 拋棄；遺棄",
        "unit": 11,
        "example": "she sings and sways with total abandon",
        "exampleZh": "她完全放縱地唱歌、搖擺"
    },
    {
        "id": 20201,
        "en": "abide",
        "kk": "/əˈbaɪd/",
        "zh": "v. 忍受；容忍",
        "unit": 11,
        "example": "many unskillful Men do abide in our City of London",
        "exampleZh": "許多不熟練的人確實居住在我們的倫敦金融城"
    },
    {
        "id": 20202,
        "en": "abolish",
        "kk": "/əˈbɑɫɪʃ/",
        "zh": "v. 廢除；廢止",
        "unit": 11,
        "example": "Abolish restaurants.",
        "exampleZh": "廢除餐廳。"
    },
    {
        "id": 20203,
        "en": "abroad",
        "kk": "/əˈbɹɔd/",
        "zh": "ad. 在國外；到國外",
        "unit": 11,
        "example": "servicemen returning from abroad",
        "exampleZh": "從國外回來的軍人"
    },
    {
        "id": 20204,
        "en": "abrupt",
        "kk": "/əˈbɹəpt/",
        "zh": "a. 突然的；唐突的",
        "unit": 11,
        "example": "our round of golf came to an abrupt end on the 13th hole",
        "exampleZh": "我們的一高爾夫球在第13洞戛然而止"
    },
    {
        "id": 20205,
        "en": "absence",
        "kk": "/ˈæbsəns/",
        "zh": "n. 不在，缺席",
        "unit": 11,
        "example": "she found his total absence of facial expression disconcerting",
        "exampleZh": "她發現他完全沒有臉部表情，這令人不安"
    },
    {
        "id": 20206,
        "en": "absolute",
        "kk": "/ˈæbsəˌɫut/",
        "zh": "a. 純粹的；完全的",
        "unit": 11,
        "example": "I absolutely agree.",
        "exampleZh": "我絕對同意。"
    },
    {
        "id": 20207,
        "en": "absorb",
        "kk": "/əbˈzɔɹb/",
        "zh": "v. 吸收；理解",
        "unit": 11,
        "example": "Rugs absorb sound.",
        "exampleZh": "地毯吸收聲音。"
    },
    {
        "id": 20208,
        "en": "abstract",
        "kk": "/ˈæbˌstɹækt/",
        "zh": "a. 抽象的；深奧的 n 摘要，抽象派藝術作品",
        "unit": 11,
        "example": "applications to abstract more water from streams",
        "exampleZh": "從溪流中提取更多水的應用程式"
    },
    {
        "id": 20209,
        "en": "abundant",
        "kk": "/əˈbəndənt/",
        "zh": "n. 大量的；充足的",
        "unit": 11,
        "example": "the riverbanks were abundant in wild plants",
        "exampleZh": "河岸上有豐富的野生植物"
    },
    {
        "id": 20210,
        "en": "abuse",
        "kk": "/əbˈjus/",
        "zh": "n. 濫用；虐待",
        "unit": 11,
        "example": "an abuse of public funds",
        "exampleZh": "濫用公共資金"
    },
    {
        "id": 20211,
        "en": "accelerate",
        "kk": "/ækˈsɛɫɝˌeɪt/",
        "zh": "v. 加快；增長",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20212,
        "en": "acceptable",
        "kk": "/ækˈsɛptəbəɫ/",
        "zh": "a. 可以接受的；令人滿意的",
        "unit": 11,
        "example": "has tried to find a solution acceptable to everyone",
        "exampleZh": "試圖找到一個大家都能接受的解決方案"
    },
    {
        "id": 20213,
        "en": "acceptance",
        "kk": "/ækˈsɛptəns/",
        "zh": "n. 接受；贊同",
        "unit": 11,
        "example": "charges involving the acceptance of bribes",
        "exampleZh": "涉及受賄的指控"
    },
    {
        "id": 20214,
        "en": "accessible",
        "kk": "/ækˈsɛsəbəɫ/",
        "zh": "a. 可接近的；可進入的",
        "unit": 11,
        "example": "he is more accessible than most tycoons",
        "exampleZh": "他比大多數大亨更容易接近"
    },
    {
        "id": 20215,
        "en": "accidental",
        "kk": "/ˌæksəˈdɛnəɫ/",
        "zh": "a. 偶然的；意外的",
        "unit": 11,
        "example": "a verdict of accidental death",
        "exampleZh": "意外死亡的判決"
    },
    {
        "id": 20216,
        "en": "acclaim",
        "kk": "",
        "zh": "v. 歡呼；喝采",
        "unit": 11,
        "example": "she has won acclaim for her commitment to democracy",
        "exampleZh": "她因對民主的承諾而贏得讚譽"
    },
    {
        "id": 20217,
        "en": "accommodate",
        "kk": "/əˈkɑməˌdeɪt/",
        "zh": "v. 使適應；使相符",
        "unit": 11,
        "example": "any language must accommodate new concepts",
        "exampleZh": "任何語言都必須容納新概念"
    },
    {
        "id": 20218,
        "en": "accomplish",
        "kk": "/əˈkɑmpɫɪʃ/",
        "zh": "v. 完成，實現，達到",
        "unit": 11,
        "example": "What was accomplished?",
        "exampleZh": "完成了什麼？"
    },
    {
        "id": 20219,
        "en": "accord",
        "kk": "/əˈkɔɹd/",
        "zh": "v. 使一致，調解",
        "unit": 11,
        "example": "the government and the rebels are in accord on one point",
        "exampleZh": "政府和叛亂分子在某一點上意見一致"
    },
    {
        "id": 20220,
        "en": "account",
        "kk": "/əˈkaʊnt/",
        "zh": "n. 帳目，帳單 v把⋯⋯視為",
        "unit": 11,
        "example": "another agency was awarded the account",
        "exampleZh": "另一個機構獲得了該帳戶"
    },
    {
        "id": 20221,
        "en": "accountant",
        "kk": "/əˈkaʊntənt/",
        "zh": "n. 會計師；會計人員",
        "unit": 11,
        "example": "Accountants love spreadsheets.",
        "exampleZh": "會計師喜歡電子表格。"
    },
    {
        "id": 20222,
        "en": "accumulate",
        "kk": "/əkˈjumjəˌɫeɪt/",
        "zh": "v. 累積；積聚",
        "unit": 11,
        "example": "her goal was to accumulate a huge fortune",
        "exampleZh": "她的目標是累積巨額財富"
    },
    {
        "id": 20223,
        "en": "accuracy",
        "kk": "/ˈækjɝəsi/",
        "zh": "n. 正確；準確",
        "unit": 11,
        "example": "the accuracy of radiocarbon dating",
        "exampleZh": "放射性碳定年法的準確性"
    },
    {
        "id": 20224,
        "en": "accurate",
        "kk": "/ˈækjɝət/",
        "zh": "a. 準確的；精確的",
        "unit": 11,
        "example": "He needs accurate data.",
        "exampleZh": "他需要準確的數據。"
    },
    {
        "id": 20225,
        "en": "accuse",
        "kk": "/əkˈjuz/",
        "zh": "v. 控告；譴責",
        "unit": 11,
        "example": "He falsely accused me.",
        "exampleZh": "他誣告我。"
    },
    {
        "id": 20226,
        "en": "accustom",
        "kk": "/əˈkəstəm/",
        "zh": "v. 習慣（於）",
        "unit": 11,
        "example": "they tried to accustom him to their lighthearted ways",
        "exampleZh": "他們試著讓他習慣他們輕鬆愉快的方式"
    },
    {
        "id": 20227,
        "en": "achieve",
        "kk": "/əˈtʃiv/",
        "zh": "v. 完成，實現",
        "unit": 11,
        "example": "Achieve your dreams.",
        "exampleZh": "實現你的夢想。"
    },
    {
        "id": 20228,
        "en": "achievement",
        "kk": "/əˈtʃivmənt/",
        "zh": "n. 達成；完成",
        "unit": 11,
        "example": "assessing ability in terms of academic achievement",
        "exampleZh": "根據學業成績評估能力"
    },
    {
        "id": 20229,
        "en": "acknowledge",
        "kk": "/ækˈnɑɫɪdʒ/",
        "zh": "v. 承認",
        "unit": 11,
        "example": "the art world has begun to acknowledge his genius",
        "exampleZh": "藝術界開始承認他的天才"
    },
    {
        "id": 20230,
        "en": "acquire",
        "kk": "/əˈkwaɪɝ/",
        "zh": "v. 取得；獲得",
        "unit": 11,
        "example": "you must acquire the rudiments of Greek",
        "exampleZh": "你必須掌握希臘文的基礎知識"
    },
    {
        "id": 20231,
        "en": "acquisition",
        "kk": "/ˌækwəˈzɪʃən/",
        "zh": "n. 獲得，取得",
        "unit": 11,
        "example": "the acquisition of management skills",
        "exampleZh": "管理技能的獲得"
    },
    {
        "id": 20232,
        "en": "activate",
        "kk": "",
        "zh": "v. 使活化；使活潑",
        "unit": 11,
        "example": "fumes from cooking are enough to activate the alarm",
        "exampleZh": "烹飪產生的煙霧足以啟動警報"
    },
    {
        "id": 20233,
        "en": "active",
        "kk": "/ˈæktɪv/",
        "zh": "a. 活躍的；活潑的；積極的",
        "unit": 11,
        "example": "I needed to change my lifestyle and become more active",
        "exampleZh": "我需要改變生活方式並變得更加活躍"
    },
    {
        "id": 20234,
        "en": "actual",
        "kk": "/ˈækʃəɫ/",
        "zh": "a. 實際的；事實上的",
        "unit": 11,
        "example": "the book could be condensed into half the space, but what of the actual content?",
        "exampleZh": "書本來可以壓縮到一半的空間，但實際內容呢？"
    },
    {
        "id": 20235,
        "en": "adapt",
        "kk": "/əˈdæpt/",
        "zh": "v. 使適應，使適合",
        "unit": 11,
        "example": "a large organization can be slow to adapt to change",
        "exampleZh": "大型組織適應變化的速度可能很慢"
    },
    {
        "id": 20236,
        "en": "addict",
        "kk": "/ˈæˌdɪkt/",
        "zh": "v. 使沉溺；使醉心",
        "unit": 11,
        "example": "a former heroin addict",
        "exampleZh": "前海洛因癮君子"
    },
    {
        "id": 20237,
        "en": "addition",
        "kk": "/əˈdɪʃən/",
        "zh": "n. 加；附加",
        "unit": 11,
        "example": "you will find the coat a useful addition to your wardrobe",
        "exampleZh": "你會發現這件外套對你的衣櫃來說是一個有用的補充"
    },
    {
        "id": 20238,
        "en": "additional",
        "kk": "/əˈdɪʃənəɫ/",
        "zh": "adj. 額外的",
        "unit": 11,
        "example": "we require additional information",
        "exampleZh": "我們需要更多信息"
    },
    {
        "id": 20239,
        "en": "address",
        "kk": "/ˈæˌdɹɛs/",
        "zh": "n. 住址；地址 v向⋯⋯致詞；向⋯⋯發表演說",
        "unit": 11,
        "example": "ensure that your weight is evenly spread when you address the ball",
        "exampleZh": "確保擊球時體重平均分佈"
    },
    {
        "id": 20240,
        "en": "adequate",
        "kk": "/ˈædəˌkweɪt/",
        "zh": "a. 足夠的；適當的",
        "unit": 11,
        "example": "this office is perfectly adequate for my needs",
        "exampleZh": "這個辦公室完全可以滿足我的需要"
    },
    {
        "id": 20241,
        "en": "adhere",
        "kk": "",
        "zh": "v. 黏附；遵守；堅持",
        "unit": 11,
        "example": "the people adhere to the Muslim religion",
        "exampleZh": "人民信奉穆斯林宗教"
    },
    {
        "id": 20242,
        "en": "adjacent",
        "kk": "",
        "zh": "adj. 鄰近的",
        "unit": 11,
        "example": "adjacent rooms",
        "exampleZh": "相鄰的房間"
    },
    {
        "id": 20243,
        "en": "adjust",
        "kk": "/əˈdʒəst/",
        "zh": "v. 調整；校正",
        "unit": 11,
        "example": "she must be allowed to grieve and to adjust in her own way",
        "exampleZh": "必須允許她悲傷並以自己的方式進行調整"
    },
    {
        "id": 20244,
        "en": "administer",
        "kk": "/ədˈmɪnəstɝ/",
        "zh": "v. 管理",
        "unit": 11,
        "example": "the chief justice will administer the oath of office",
        "exampleZh": "首席大法官將宣誓就職"
    },
    {
        "id": 20245,
        "en": "administration",
        "kk": "/ædˌmɪnɪˈstɹeɪʃən/",
        "zh": "v. 管理；經營；行政",
        "unit": 11,
        "example": "the inhabitants of the island voted to remain under French administration",
        "exampleZh": "該島居民投票決定繼續由法國管理"
    },
    {
        "id": 20246,
        "en": "administrative",
        "kk": "/ədˈmɪnəˌstɹeɪtɪv/",
        "zh": "adj. 行政的",
        "unit": 11,
        "example": "administrative staff",
        "exampleZh": "行政人員"
    },
    {
        "id": 20247,
        "en": "admire",
        "kk": "/ædˈmaɪɹ/",
        "zh": "v. 欽佩；欣賞",
        "unit": 11,
        "example": "Yanni admires Skura.",
        "exampleZh": "雅尼欣賞斯庫拉。"
    },
    {
        "id": 20248,
        "en": "admission",
        "kk": "/ædˈmɪʃən/",
        "zh": "n. 入場費；承認",
        "unit": 11,
        "example": "the country's admission to the UN",
        "exampleZh": "該國加入聯合國"
    },
    {
        "id": 20249,
        "en": "admit",
        "kk": "/ədˈmɪt/",
        "zh": "v. 承認；准許進入",
        "unit": 11,
        "example": "the need to inform him was too urgent to admit of further delay",
        "exampleZh": "通知他的必要性太緊急，不能再拖延了"
    },
    {
        "id": 20250,
        "en": "adopt",
        "kk": "/əˈdɑpt/",
        "zh": "v. 採取；採納",
        "unit": 11,
        "example": "the committee voted 5–1 to adopt the proposal",
        "exampleZh": "委員會以 5 比 1 的投票結果通過了該提案"
    },
    {
        "id": 20251,
        "en": "advance",
        "kk": "/ədˈvæns/",
        "zh": "v. 前進；進展 n前進；發展 a 先行的；預先的",
        "unit": 11,
        "example": "the author was paid a $250,000 advance",
        "exampleZh": "作者預付了 25 萬美元"
    },
    {
        "id": 20252,
        "en": "advanced",
        "kk": "/ədˈvænst/",
        "zh": "a. 在前面的；先進的；開明的",
        "unit": 11,
        "example": "his advanced views made him unpopular",
        "exampleZh": "他的先進觀點使他不受歡迎"
    },
    {
        "id": 20253,
        "en": "advantage",
        "kk": "/ædˈvæntɪdʒ/",
        "zh": "n. 優點；利益v 有利於；使處於優勢",
        "unit": 11,
        "example": "Tom has the advantage.",
        "exampleZh": "湯姆有優勢。"
    },
    {
        "id": 20254,
        "en": "advantageous",
        "kk": "",
        "zh": "adj. 有利的",
        "unit": 11,
        "example": "the scheme is advantageous to your company",
        "exampleZh": "該計劃對您的公司有利"
    },
    {
        "id": 20255,
        "en": "advent",
        "kk": "",
        "zh": "n. 出現",
        "unit": 11,
        "example": "the advent of television",
        "exampleZh": "電視的出現"
    },
    {
        "id": 20256,
        "en": "adventure",
        "kk": "/ædˈvɛntʃɝ/",
        "zh": "n. 冒險; 冒險精神",
        "unit": 11,
        "example": "she traveled the world in search of adventure",
        "exampleZh": "她環遊世界尋找冒險"
    },
    {
        "id": 20257,
        "en": "adverse",
        "kk": "",
        "zh": "a. 反面的；不利的",
        "unit": 11,
        "example": "taxes are having an adverse effect on production",
        "exampleZh": "稅收對生產產生不利影響"
    },
    {
        "id": 20258,
        "en": "advertise",
        "kk": "/ˈædvɝˌtaɪz/",
        "zh": "v. 廣告；公布",
        "unit": 11,
        "example": "Meryl coughed briefly to advertise her presence",
        "exampleZh": "梅莉爾短暫地咳嗽了一下以表明她的存在"
    },
    {
        "id": 20259,
        "en": "advertisement",
        "kk": "/ˌædvɝˈtaɪzmənt/",
        "zh": "n. 廣告；宣傳",
        "unit": 11,
        "example": "we received only two replies to our advertisement",
        "exampleZh": "我們只收到了兩份對廣告的回复"
    },
    {
        "id": 20260,
        "en": "advice",
        "kk": "/ædˈvaɪs/",
        "zh": "n. 勸告；忠告",
        "unit": 11,
        "example": "Never give advice.",
        "exampleZh": "永遠不要給出建議。"
    },
    {
        "id": 20261,
        "en": "advise",
        "kk": "/ædˈvaɪz/",
        "zh": "v. 勸告；忠告",
        "unit": 11,
        "example": "we advise against sending cash by mail",
        "exampleZh": "我們建議不要以郵寄方式寄送現金"
    },
    {
        "id": 20262,
        "en": "adviser",
        "kk": "/ædˈvaɪzɝ/",
        "zh": "n. 顧問；勸告者",
        "unit": 11,
        "example": "he started as a legal adviser to the company",
        "exampleZh": "他最初擔任該公司的法律顧問"
    },
    {
        "id": 20263,
        "en": "advocate",
        "kk": "/ˈædvəˌkeɪt/",
        "zh": "n. 提倡者；辯護者；律師",
        "unit": 11,
        "example": "Mennad advocates for that.",
        "exampleZh": "門納德主張這一點。"
    },
    {
        "id": 20264,
        "en": "affair",
        "kk": "/əˈfɛɹ/",
        "zh": "n. 事件；事務",
        "unit": 11,
        "example": "I wanted the funeral to be a family affair",
        "exampleZh": "我希望葬禮成為家庭事務"
    },
    {
        "id": 20265,
        "en": "affect",
        "kk": "/əˈfɛkt/",
        "zh": "v. 影響；對⋯⋯發生作用",
        "unit": 11,
        "example": "the dampness began to affect my health",
        "exampleZh": "濕氣開始影響我的健康"
    },
    {
        "id": 20266,
        "en": "affiliate",
        "kk": "",
        "zh": "v. 附屬",
        "unit": 11,
        "example": "the membership of the National Writers Union voted to affiliate with the United Auto Workers",
        "exampleZh": "全國作家聯盟的成員投票加入汽車工人聯合會"
    },
    {
        "id": 20267,
        "en": "affirm",
        "kk": "/əˈfɝm/",
        "zh": "v. 確認",
        "unit": 11,
        "example": "there are five common ways parents fail to affirm their children",
        "exampleZh": "父母未能肯定孩子的常見方式有五種"
    },
    {
        "id": 20268,
        "en": "afford",
        "kk": "/əˈfɔɹd/",
        "zh": "v. 負擔得起",
        "unit": 11,
        "example": "it was taking up more time than he could afford",
        "exampleZh": "這花費的時間超出了他的承受能力"
    },
    {
        "id": 20269,
        "en": "affordable",
        "kk": "",
        "zh": "adj. 負擔得起的",
        "unit": 11,
        "example": "affordable housing",
        "exampleZh": "經濟適用房"
    },
    {
        "id": 20270,
        "en": "agency",
        "kk": "/ˈeɪdʒənsi/",
        "zh": "n. 經銷處；代理機構",
        "unit": 11,
        "example": "an advertising agency",
        "exampleZh": "一家廣告公司"
    },
    {
        "id": 20271,
        "en": "agenda",
        "kk": "/əˈdʒɛndə/",
        "zh": "n. 待議諸事項；議程",
        "unit": 11,
        "example": "he vowed to put jobs at the top of his agenda",
        "exampleZh": "他發誓要把就業放在第一位"
    },
    {
        "id": 20272,
        "en": "agent",
        "kk": "/ˈeɪdʒənt/",
        "zh": "n. 代理商；仲介人",
        "unit": 11,
        "example": "his agent was able to negotiate a long-term contract",
        "exampleZh": "他的經紀人能夠談判一份長期合約"
    },
    {
        "id": 20273,
        "en": "aggravate",
        "kk": "",
        "zh": "v. 惡化",
        "unit": 11,
        "example": "military action would only aggravate the situation",
        "exampleZh": "軍事行動只會加劇局勢"
    },
    {
        "id": 20274,
        "en": "aggressive",
        "kk": "/əˈɡɹɛsɪv/",
        "zh": "a. 侵略的；好鬥的",
        "unit": 11,
        "example": "we needed more growth to pursue our aggressive acquisition strategy",
        "exampleZh": "我們需要更多的成長來實施我們積極的收購策略"
    },
    {
        "id": 20275,
        "en": "agreement",
        "kk": "/əˈɡɹimənt/",
        "zh": "n. 同意；協定",
        "unit": 11,
        "example": "the two officers nodded in agreement",
        "exampleZh": "兩位軍官點頭同意"
    },
    {
        "id": 20276,
        "en": "agriculture",
        "kk": "/ˈæɡɹɪˌkəɫtʃɝ/",
        "zh": "n. 農業",
        "unit": 11,
        "example": "fungicide resistance is a serious problem facing modern agriculture",
        "exampleZh": "殺菌劑抗性是現代農業面臨的嚴重問題"
    },
    {
        "id": 20277,
        "en": "aid",
        "kk": "/ˈeɪd/",
        "zh": "v. 幫助；救助 n 幫助；救助",
        "unit": 11,
        "example": "700,000 tons of food aid",
        "exampleZh": "70萬噸糧食援助"
    },
    {
        "id": 20278,
        "en": "airline",
        "kk": "/ˈɛɹˌɫaɪn/",
        "zh": "n. 航線；航空公司",
        "unit": 11,
        "example": "an international airline",
        "exampleZh": "一家國際航空公司"
    },
    {
        "id": 20279,
        "en": "aisle",
        "kk": "/ˈaɪəɫ/",
        "zh": "n. 通道；走道",
        "unit": 11,
        "example": "the tiled roof over the south aisle",
        "exampleZh": "南過道上的瓦屋頂"
    },
    {
        "id": 20280,
        "en": "alert",
        "kk": "/əˈɫɝt/",
        "zh": "v. 使警覺；使注意 n警戒；警報 a 警覺的；警惕的",
        "unit": 11,
        "example": "an alert sounded and all the fighters took off",
        "exampleZh": "警報響起，所有戰士起飛"
    },
    {
        "id": 20281,
        "en": "alienate",
        "kk": "/ˈeɪɫjəˌneɪt/",
        "zh": "v. 使疏遠",
        "unit": 11,
        "example": "the association does not wish to alienate its members",
        "exampleZh": "協會不希望疏遠其成員"
    },
    {
        "id": 20282,
        "en": "align",
        "kk": "",
        "zh": "v. 排成直線；使結盟",
        "unit": 11,
        "example": "the pattern of the border at the seam should align perfectly",
        "exampleZh": "接縫處的邊框圖案應完美對齊"
    },
    {
        "id": 20283,
        "en": "alike",
        "kk": "/əˈɫaɪk/",
        "zh": "a. 相同的；相像的ad 一樣地；相似地",
        "unit": 11,
        "example": "the brothers were very much alike",
        "exampleZh": "兄弟倆非常相似"
    },
    {
        "id": 20284,
        "en": "allege",
        "kk": "",
        "zh": "v. 斷言；宣稱",
        "unit": 11,
        "example": "What did Tom allege?",
        "exampleZh": "湯姆指控了什麼？"
    },
    {
        "id": 20285,
        "en": "alleviate",
        "kk": "",
        "zh": "v. 減輕",
        "unit": 11,
        "example": "measures to alleviate unemployment",
        "exampleZh": "緩解失業的措施"
    },
    {
        "id": 20286,
        "en": "allocate",
        "kk": "/ˈæɫəˌkeɪt/",
        "zh": "v. 分派；分配",
        "unit": 11,
        "example": "We cannot allocate money for it.",
        "exampleZh": "我們無法為此分配資金。"
    },
    {
        "id": 20287,
        "en": "allow",
        "kk": "/əˈɫaʊ/",
        "zh": "v. 允許；准許",
        "unit": 11,
        "example": "a plan to allow Sunday shopping",
        "exampleZh": "允許週日購物的計劃"
    },
    {
        "id": 20288,
        "en": "allowance",
        "kk": "/əˈɫaʊəns/",
        "zh": "n. 津貼；補貼",
        "unit": 11,
        "example": "a seventy-five-pound baggage allowance",
        "exampleZh": "七十五磅的行李限額"
    },
    {
        "id": 20289,
        "en": "allude",
        "kk": "",
        "zh": "v. 暗示",
        "unit": 11,
        "example": "we will allude briefly to the main points",
        "exampleZh": "我們將簡要提及重點"
    },
    {
        "id": 20290,
        "en": "ally",
        "kk": "/ˈæɫaɪ/",
        "zh": "n. 盟友",
        "unit": 11,
        "example": "he was forced to dismiss his closest political ally",
        "exampleZh": "他被迫解雇了他最親密的政治盟友"
    },
    {
        "id": 20291,
        "en": "alter",
        "kk": "/ˈɔɫtɝ/",
        "zh": "v. 改變；修改",
        "unit": 11,
        "example": "Eliot was persuaded to alter the passage",
        "exampleZh": "艾略特被說服修改了這段話"
    },
    {
        "id": 20292,
        "en": "alternate",
        "kk": "/ˈɔɫtɝˌneɪt/",
        "zh": "a. 交替的；輪流的 n 代理人；代替者",
        "unit": 11,
        "example": "bouts of depression alternate with periods of elation",
        "exampleZh": "一陣陣抑鬱與一陣興高采烈交替出現"
    },
    {
        "id": 20293,
        "en": "alternative",
        "kk": "/ɔɫˈtɝnətɪv/",
        "zh": "a. 替代的；供選擇的 n 選擇；二擇一",
        "unit": 11,
        "example": "she had no alternative but to break the law",
        "exampleZh": "她別無選擇，只能違法"
    },
    {
        "id": 20294,
        "en": "altitude",
        "kk": "/ˈæɫtəˌtud/",
        "zh": "n. 高度",
        "unit": 11,
        "example": "the mechanism can freeze at altitude",
        "exampleZh": "該機構可能會在高空凍結"
    },
    {
        "id": 20295,
        "en": "amateur",
        "kk": "/ˈæməˌtɝ/",
        "zh": "a. 業餘的；外行的 n 業餘；外行",
        "unit": 11,
        "example": "Are you an amateur?",
        "exampleZh": "你是業餘愛好者嗎？"
    },
    {
        "id": 20296,
        "en": "amaze",
        "kk": "/əˈmeɪz/",
        "zh": "v. 使驚奇；使驚愕",
        "unit": 11,
        "example": "People are amazed.",
        "exampleZh": "人們很驚訝。"
    },
    {
        "id": 20297,
        "en": "ambassador",
        "kk": "/æmˈbæsədɝ/",
        "zh": "n. 大使",
        "unit": 11,
        "example": "Ziri is an ambassador.",
        "exampleZh": "齊裡是一名大使。"
    },
    {
        "id": 20298,
        "en": "ambiguity",
        "kk": "/ˌæmbɪɡˈjuəti/",
        "zh": "n. 模稜兩可",
        "unit": 11,
        "example": "we can detect no ambiguity in this section of the Act",
        "exampleZh": "我們在該法案的這一部分中沒有發現任何含糊之處"
    },
    {
        "id": 20299,
        "en": "ambiguous",
        "kk": "/æmˈbɪɡjuəs/",
        "zh": "a. 含糊不清的；引起歧義的",
        "unit": 11,
        "example": "ambiguous phrases",
        "exampleZh": "歧義短語"
    },
    {
        "id": 20300,
        "en": "ambition",
        "kk": "/æmˈbɪʃən/",
        "zh": "n. 雄心；抱負",
        "unit": 11,
        "example": "Tom had no ambition.",
        "exampleZh": "湯姆沒有野心。"
    },
    {
        "id": 20301,
        "en": "ambitious",
        "kk": "/æmˈbɪʃəs/",
        "zh": "adj. 有野心的",
        "unit": 11,
        "example": "Are you ambitious?",
        "exampleZh": "你有野心嗎？"
    },
    {
        "id": 20302,
        "en": "amend",
        "kk": "",
        "zh": "v. 修訂；修改",
        "unit": 11,
        "example": "did she amend her original will later on?",
        "exampleZh": "她後來有修改原來的遺囑嗎？"
    },
    {
        "id": 20303,
        "en": "amendment",
        "kk": "",
        "zh": "n. 改正；修正；修正案",
        "unit": 11,
        "example": "an amendment to existing bail laws",
        "exampleZh": "現行保釋法的修正案"
    },
    {
        "id": 20304,
        "en": "amount",
        "kk": "/əˈmaʊnt/",
        "zh": "n. 總數；總額 v共計；相當於",
        "unit": 11,
        "example": "they have spent a colossal amount rebuilding the stadium",
        "exampleZh": "他們花費巨資重建體育場"
    },
    {
        "id": 20305,
        "en": "ample",
        "kk": "/ˈæmpəɫ/",
        "zh": "adj. 充足的",
        "unit": 11,
        "example": "an ample supply of consumer goods",
        "exampleZh": "消費品供應充足"
    },
    {
        "id": 20306,
        "en": "amplify",
        "kk": "/ˈæmpɫəˌfaɪ/",
        "zh": "v. 增強；擴大",
        "unit": 11,
        "example": "Try to amplify your opportunity.",
        "exampleZh": "試著擴大你的機會。"
    },
    {
        "id": 20307,
        "en": "amuse",
        "kk": "/əmˈjuz/",
        "zh": "v. 使歡樂；使發笑",
        "unit": 11,
        "example": "the hotel has planned many activities to amuse its guests",
        "exampleZh": "酒店策劃了許多活動來招待客人"
    },
    {
        "id": 20308,
        "en": "analogy",
        "kk": "/əˈnæɫədʒi/",
        "zh": "n. 類比",
        "unit": 11,
        "example": "argument from analogy",
        "exampleZh": "類比論證"
    },
    {
        "id": 20309,
        "en": "analysis",
        "kk": "/əˈnælɪsɪs/",
        "zh": "n. 分析",
        "unit": 11,
        "example": "We want your analysis.",
        "exampleZh": "我們需要您的分析。"
    },
    {
        "id": 20310,
        "en": "analyze",
        "kk": "/ˈænəˌɫaɪz/",
        "zh": "v. 分析",
        "unit": 11,
        "example": "Ziri analyzed the video.",
        "exampleZh": "齊里分析了影片。"
    },
    {
        "id": 20311,
        "en": "ancestor",
        "kk": "/ˈænˌsɛstɝ/",
        "zh": "n. 祖先",
        "unit": 11,
        "example": "My ancestor told it.",
        "exampleZh": "我的祖先告訴我。"
    },
    {
        "id": 20312,
        "en": "anchor",
        "kk": "/ˈæŋkɝ/",
        "zh": "n. 錨；主播",
        "unit": 11,
        "example": "the European Community is the economic anchor of the New Europe",
        "exampleZh": "歐洲共同體是新歐洲的經濟支柱"
    },
    {
        "id": 20313,
        "en": "ancient",
        "kk": "/ˈeɪnʃənt/",
        "zh": "adj. 古代的",
        "unit": 11,
        "example": "ancient forests",
        "exampleZh": "古老的森林"
    },
    {
        "id": 20314,
        "en": "anecdote",
        "kk": "/ˈænəkˌdoʊt/",
        "zh": "n. 軼事",
        "unit": 11,
        "example": "his wife's death has long been the subject of rumor and anecdote",
        "exampleZh": "他妻子的死長期以來一直是謠言和軼事的主題"
    },
    {
        "id": 20315,
        "en": "angle",
        "kk": "/ˈæŋɡəɫ/",
        "zh": "n. 角；角度",
        "unit": 11,
        "example": "A triangle has three angles.",
        "exampleZh": "三角形有三個角。"
    },
    {
        "id": 20316,
        "en": "angry",
        "kk": "/ˈæŋɡɹi/",
        "zh": "adj. 生氣的",
        "unit": 11,
        "example": "I'm angry that she didn't call me",
        "exampleZh": "我很生氣她沒有打電話給我"
    },
    {
        "id": 20317,
        "en": "anguish",
        "kk": "",
        "zh": "n. 極度痛苦",
        "unit": 11,
        "example": "she shut her eyes in anguish",
        "exampleZh": "她痛苦地閉上眼睛"
    },
    {
        "id": 20318,
        "en": "animate",
        "kk": "/ˈænəˌmeɪt/",
        "zh": "v. 賦予生命；使有生命",
        "unit": 11,
        "example": "party photos of animate socialites",
        "exampleZh": "社交名流的聚會照片"
    },
    {
        "id": 20319,
        "en": "anniversary",
        "kk": "/ˌænəˈvɝsɝi/",
        "zh": "n. 週年紀念a 週年的",
        "unit": 11,
        "example": "It's their anniversary.",
        "exampleZh": "這是他們的周年紀念日。"
    },
    {
        "id": 20320,
        "en": "announce",
        "kk": "/əˈnaʊns/",
        "zh": "v. 宣布；發布",
        "unit": 11,
        "example": "Thomas is announced.",
        "exampleZh": "托馬斯宣布。"
    },
    {
        "id": 20321,
        "en": "announcement",
        "kk": "/əˈnaʊnsmənt/",
        "zh": "n. 通告；布告",
        "unit": 11,
        "example": "Tom has an announcement.",
        "exampleZh": "湯姆有一個公告。"
    },
    {
        "id": 20322,
        "en": "annoy",
        "kk": "/əˈnɔɪ/",
        "zh": "v. 惹惱",
        "unit": 11,
        "example": "Politics annoys me.",
        "exampleZh": "政治讓我煩惱。"
    },
    {
        "id": 20323,
        "en": "annual",
        "kk": "/ˈænjuəɫ/",
        "zh": "a. 一年一次的；每年的",
        "unit": 11,
        "example": "the union's annual conference",
        "exampleZh": "工會年會"
    },
    {
        "id": 20324,
        "en": "anomalous",
        "kk": "",
        "zh": "adj. 異常的",
        "unit": 11,
        "example": "an anomalous situation",
        "exampleZh": "異常狀況"
    },
    {
        "id": 20325,
        "en": "anonymous",
        "kk": "/əˈnɑnəməs/",
        "zh": "a. 匿名的；姓氏不明的",
        "unit": 11,
        "example": "an anonymous phone call",
        "exampleZh": "一個匿名電話"
    },
    {
        "id": 20326,
        "en": "answer",
        "kk": "/ˈænsɝ/",
        "zh": "v. 回答；答覆 n回答；答覆",
        "unit": 11,
        "example": "I didn't answer him",
        "exampleZh": "我沒有回答他"
    },
    {
        "id": 20327,
        "en": "antagonism",
        "kk": "",
        "zh": "n. 敵意",
        "unit": 11,
        "example": "his antagonism toward the local people",
        "exampleZh": "他對當地人的敵意"
    },
    {
        "id": 20328,
        "en": "anticipate",
        "kk": "/ænˈtɪsəˌpeɪt/",
        "zh": "v. 預期",
        "unit": 11,
        "example": "I anticipated this.",
        "exampleZh": "我預料到了這一點。"
    },
    {
        "id": 20329,
        "en": "anticipation",
        "kk": "/ænˌtɪsəˈpeɪʃən/",
        "zh": "n. 預期",
        "unit": 11,
        "example": "her eyes sparkled with anticipation",
        "exampleZh": "她的眼睛閃爍著期待的光芒"
    },
    {
        "id": 20330,
        "en": "antique",
        "kk": "/ænˈtik/",
        "zh": "n. 古董",
        "unit": 11,
        "example": "bookshelves with an antique finish",
        "exampleZh": "仿古飾面的書架"
    },
    {
        "id": 20331,
        "en": "anxiety",
        "kk": "/æŋˈzaɪəti/",
        "zh": "n. 焦慮；掛念",
        "unit": 11,
        "example": "Ziri felt anxiety.",
        "exampleZh": "齊裡感到焦慮。"
    },
    {
        "id": 20332,
        "en": "anxious",
        "kk": "/ˈæŋkʃəs/",
        "zh": "a. 焦慮的；掛念的",
        "unit": 11,
        "example": "Tom anxiously waited.",
        "exampleZh": "湯姆焦急地等待著。"
    },
    {
        "id": 20333,
        "en": "apologize",
        "kk": "/əˈpɑɫəˌdʒaɪz/",
        "zh": "v. 道歉",
        "unit": 11,
        "example": "we apologize to him for our error",
        "exampleZh": "我們為我們的錯誤向他道歉"
    },
    {
        "id": 20334,
        "en": "apology",
        "kk": "/əˈpɑɫəˌdʒi/",
        "zh": "n. 道歉；陪罪",
        "unit": 11,
        "example": "we were shown into an apology for a bedroom",
        "exampleZh": "我們被要求為一間臥室道歉"
    },
    {
        "id": 20335,
        "en": "appalling",
        "kk": "",
        "zh": "adj. 令人震驚的",
        "unit": 11,
        "example": "his conduct was appalling",
        "exampleZh": "他的行為令人震驚"
    },
    {
        "id": 20336,
        "en": "apparatus",
        "kk": "",
        "zh": "n. 設備",
        "unit": 11,
        "example": "one thing about the book's apparatus does irritate: the absence of an index of titles",
        "exampleZh": "這本書的結構有一件事確實令人惱火：沒有標題索引"
    },
    {
        "id": 20337,
        "en": "apparent",
        "kk": "/əˈpɛɹənt/",
        "zh": "a. 表面的；外觀的",
        "unit": 11,
        "example": "Nothing is apparent.",
        "exampleZh": "沒有什麼是顯而易見的。"
    },
    {
        "id": 20338,
        "en": "appeal",
        "kk": "/əˈpiɫ/",
        "zh": "v. 呼籲；懇求",
        "unit": 11,
        "example": "My lawyer appealed.",
        "exampleZh": "我的律師提出上訴。"
    },
    {
        "id": 20339,
        "en": "appealing",
        "kk": "",
        "zh": "adj. 吸引人的",
        "unit": 11,
        "example": "the rural life is somehow more appealing",
        "exampleZh": "鄉村生活在某種程度上更有吸引力"
    },
    {
        "id": 20340,
        "en": "appear",
        "kk": "/əˈpɪɹ/",
        "zh": "v. 出現；顯露",
        "unit": 11,
        "example": "the paperback edition didn't appear for another two years",
        "exampleZh": "平裝本又兩年沒有出現"
    },
    {
        "id": 20341,
        "en": "appearance",
        "kk": "/əˈpɪɹəns/",
        "zh": "n. 出現；顯露",
        "unit": 11,
        "example": "I like the appearance of stripped antique pine",
        "exampleZh": "我喜歡剝皮仿古松木的外觀"
    },
    {
        "id": 20342,
        "en": "appendix",
        "kk": "",
        "zh": "n. 附錄",
        "unit": 11,
        "example": "The appendix is of no use.",
        "exampleZh": "附錄沒啥用。"
    },
    {
        "id": 20343,
        "en": "appetite",
        "kk": "/ˈæpəˌtaɪt/",
        "zh": "n. 食慾；胃口",
        "unit": 11,
        "example": "he has a healthy appetite",
        "exampleZh": "他有健康的食慾"
    },
    {
        "id": 20344,
        "en": "applaud",
        "kk": "/əˈpɫɔd/",
        "zh": "v. 鼓掌歡迎；喝采",
        "unit": 11,
        "example": "Everyone applauded.",
        "exampleZh": "大家紛紛鼓掌。"
    },
    {
        "id": 20345,
        "en": "appliance",
        "kk": "/əˈpɫaɪəns/",
        "zh": "n. 用具；裝置",
        "unit": 11,
        "example": "I'm appliance shopping.",
        "exampleZh": "我是買電器的"
    },
    {
        "id": 20346,
        "en": "applicable",
        "kk": "/ˈæpɫəkəbəɫ/",
        "zh": "adj. 適用的",
        "unit": 11,
        "example": "the same considerations are equally applicable to accident claims",
        "exampleZh": "同樣的考慮也適用於事故索賠"
    },
    {
        "id": 20347,
        "en": "applicant",
        "kk": "/ˈæpɫɪkənt/",
        "zh": "n. 申請人",
        "unit": 11,
        "example": "a job applicant",
        "exampleZh": "求職者"
    },
    {
        "id": 20348,
        "en": "application",
        "kk": "/ˌæpɫəˈkeɪʃən/",
        "zh": "n. 申請",
        "unit": 11,
        "example": "I like this application.",
        "exampleZh": "我喜歡這個應用程式。"
    },
    {
        "id": 20349,
        "en": "apply",
        "kk": "/əˈpɫaɪ/",
        "zh": "v. 申請；請求",
        "unit": 11,
        "example": "the oil industry has failed to apply appropriate standards of care",
        "exampleZh": "石油工業未能採用適當的護理標準"
    },
    {
        "id": 20350,
        "en": "appoint",
        "kk": "/əˈpɔɪnt/",
        "zh": "v. 任命；指派",
        "unit": 11,
        "example": "Who appointed him?",
        "exampleZh": "誰任命他的？"
    },
    {
        "id": 20351,
        "en": "appointment",
        "kk": "/əˈpɔɪntmənt/",
        "zh": "n. 約會；任命",
        "unit": 11,
        "example": "she took up an appointment as head of communications",
        "exampleZh": "她被任命為通訊主管"
    },
    {
        "id": 20352,
        "en": "appraisal",
        "kk": "",
        "zh": "n. 評估；考核",
        "unit": 11,
        "example": "treatment begins with a thorough appraisal of the patient's condition",
        "exampleZh": "治療始於對患者病情的徹底評估"
    },
    {
        "id": 20353,
        "en": "appraise",
        "kk": "",
        "zh": "v. 估計；估量",
        "unit": 11,
        "example": "Have you had the ring appraised?",
        "exampleZh": "戒指估價了嗎？"
    },
    {
        "id": 20354,
        "en": "appreciate",
        "kk": "/əˈpɹiʃiˌeɪt/",
        "zh": "v. 欣賞；感激",
        "unit": 11,
        "example": "We appreciate them.",
        "exampleZh": "我們很感激他們。"
    },
    {
        "id": 20355,
        "en": "appreciation",
        "kk": "/əˌpɹiʃiˈeɪʃən/",
        "zh": "n. 感謝",
        "unit": 11,
        "example": "they would be the first to show their appreciation",
        "exampleZh": "他們將是第一個表達感激之情的人"
    },
    {
        "id": 20356,
        "en": "apprehend",
        "kk": "",
        "zh": "v. 逮捕；對⋯⋯擔慮",
        "unit": 11,
        "example": "Gabriel was apprehended.",
        "exampleZh": "加布里埃爾被捕。"
    },
    {
        "id": 20357,
        "en": "apprentice",
        "kk": "/əˈpɹɛntəs/",
        "zh": "n. 徒弟；見習生",
        "unit": 11,
        "example": "I'm an apprentice.",
        "exampleZh": "我是一個學徒。"
    },
    {
        "id": 20358,
        "en": "approach",
        "kk": "/əˈpɹoʊtʃ/",
        "zh": "v. 接近；靠近",
        "unit": 11,
        "example": "Winter approached.",
        "exampleZh": "冬天將近了。"
    },
    {
        "id": 20359,
        "en": "appropriate",
        "kk": "/əˈpɹoʊpɹiˌeɪt/",
        "zh": "a. 適當的；恰當的",
        "unit": 11,
        "example": "That is appropriate.",
        "exampleZh": "那是合適的。"
    },
    {
        "id": 20360,
        "en": "approval",
        "kk": "/əˈpɹuvəɫ/",
        "zh": "n. 批准；認可",
        "unit": 11,
        "example": "the road plans have been given approval",
        "exampleZh": "道路計劃已獲得批准"
    },
    {
        "id": 20361,
        "en": "approve",
        "kk": "/əˈpɹuv/",
        "zh": "v. 同意；贊許",
        "unit": 11,
        "example": "I completely approve!",
        "exampleZh": "我完全贊同！"
    },
    {
        "id": 20362,
        "en": "approximate",
        "kk": "/əˈpɹɑksəˌmeɪt/",
        "zh": "a. 接近的；大約的 v 接近；近似",
        "unit": 11,
        "example": "the calculations are very approximate",
        "exampleZh": "計算結果非常近似"
    },
    {
        "id": 20363,
        "en": "aptitude",
        "kk": "/ˈæptəˌtud/",
        "zh": "n. 天資",
        "unit": 11,
        "example": "children with an aptitude for painting and drawing",
        "exampleZh": "有繪畫天份的孩子"
    },
    {
        "id": 20364,
        "en": "arbitrary",
        "kk": "",
        "zh": "adj. 任意的",
        "unit": 11,
        "example": "We can't tolerate such an arbitrary act.",
        "exampleZh": "我們不能容忍這種任意的行為。"
    },
    {
        "id": 20365,
        "en": "architect",
        "kk": "/ˈɑɹkəˌtɛkt/",
        "zh": "n. 建築師；設計師",
        "unit": 11,
        "example": "the great Norman architect of Durham Cathedral",
        "exampleZh": "達勒姆大教堂的偉大諾曼建築師"
    },
    {
        "id": 20366,
        "en": "architecture",
        "kk": "/ˈɑɹkəˌtɛktʃɝ/",
        "zh": "n. 建築物；建築學；結構",
        "unit": 11,
        "example": "Tom loves architecture.",
        "exampleZh": "湯姆熱愛建築。"
    },
    {
        "id": 20367,
        "en": "archive",
        "kk": "",
        "zh": "v. 把⋯存檔；把⋯收集歸檔 n 檔案保管處；文件；記錄",
        "unit": 11,
        "example": "She was in the archive.",
        "exampleZh": "她在檔案館裡。"
    },
    {
        "id": 20368,
        "en": "area",
        "kk": "/ˈɛɹiə/",
        "zh": "n. 地區；區域",
        "unit": 11,
        "example": "people living in the area are at risk",
        "exampleZh": "居住在該地區的人們處於危險之中"
    },
    {
        "id": 20369,
        "en": "argue",
        "kk": "/ˈɑɹɡju/",
        "zh": "v. 爭論；辯論；主張",
        "unit": 11,
        "example": "don't argue with me",
        "exampleZh": "別跟我爭論"
    },
    {
        "id": 20370,
        "en": "argument",
        "kk": "/ˈɑɹɡjəmənt/",
        "zh": "n. 爭執；爭吵",
        "unit": 11,
        "example": "there was some argument about the decision",
        "exampleZh": "對於這個決定有一些爭議"
    },
    {
        "id": 20371,
        "en": "arise",
        "kk": "/ɝˈaɪz/",
        "zh": "v. 升起；上升；產生",
        "unit": 11,
        "example": "What problems can arise?",
        "exampleZh": "可能會出現什麼問題？"
    },
    {
        "id": 20372,
        "en": "arm",
        "kk": "/ˈɑɹm/",
        "zh": "n. 手臂；武器",
        "unit": 11,
        "example": "as they walked he offered her his arm",
        "exampleZh": "當他們走路時，他向她伸出了手臂"
    },
    {
        "id": 20373,
        "en": "arouse",
        "kk": "/ɝˈaʊz/",
        "zh": "v. 喚起；激動；使奮發",
        "unit": 11,
        "example": "You arouse my jealousy.",
        "exampleZh": "你引起了我的嫉妒。"
    },
    {
        "id": 20374,
        "en": "arrange",
        "kk": "/ɝˈeɪndʒ/",
        "zh": "v. 整理；安排；籌備",
        "unit": 11,
        "example": "they hoped to arrange a meeting",
        "exampleZh": "他們希望安排一次會面"
    },
    {
        "id": 20375,
        "en": "arrangement",
        "kk": "/ɝˈeɪndʒmənt/",
        "zh": "n. 安排",
        "unit": 11,
        "example": "the arrangement of the furniture in the room",
        "exampleZh": "房間內家具的佈置"
    },
    {
        "id": 20376,
        "en": "array",
        "kk": "",
        "zh": "n. 一系列",
        "unit": 11,
        "example": "She dated an endless array of bad boys.",
        "exampleZh": "她和無數壞男孩約會過。"
    },
    {
        "id": 20377,
        "en": "arrest",
        "kk": "/ɝˈɛst/",
        "zh": "v. 逮捕；拘留",
        "unit": 11,
        "example": "they placed her under arrest",
        "exampleZh": "他們逮捕了她"
    },
    {
        "id": 20378,
        "en": "arrival",
        "kk": "/ɝˈaɪvəɫ/",
        "zh": "v. 到達；到來",
        "unit": 11,
        "example": "he was dead on arrival at the hospital",
        "exampleZh": "他在抵達醫院時已經死亡"
    },
    {
        "id": 20379,
        "en": "arrive",
        "kk": "/ɝˈaɪv/",
        "zh": "v. 到達；到來",
        "unit": 11,
        "example": "Firefighters arrived.",
        "exampleZh": "消防隊員趕到了。"
    },
    {
        "id": 20380,
        "en": "arrogant",
        "kk": "/ˈɛɹəɡənt/",
        "zh": "adj. 傲慢的",
        "unit": 11,
        "example": "a typically arrogant assumption",
        "exampleZh": "典型的傲慢假設"
    },
    {
        "id": 20381,
        "en": "article",
        "kk": "/ˈɑɹtəkəɫ/",
        "zh": "n. 文章；物品",
        "unit": 11,
        "example": "Reread the article.",
        "exampleZh": "重讀這篇文章。"
    },
    {
        "id": 20382,
        "en": "artificial",
        "kk": "/ˌɑɹtəˈfɪʃəɫ/",
        "zh": "adj. 人造的",
        "unit": 11,
        "example": "Earth is artificial.",
        "exampleZh": "地球是人造的。"
    },
    {
        "id": 20383,
        "en": "artisan",
        "kk": "",
        "zh": "n. 工匠",
        "unit": 11,
        "example": "Artisans made flambeaux and chandeliers.",
        "exampleZh": "工匠們製作火炬和枝形吊燈。"
    },
    {
        "id": 20384,
        "en": "artist",
        "kk": "/ˈɑɹtəst/",
        "zh": "n. 藝術家",
        "unit": 11,
        "example": "a con artist",
        "exampleZh": "騙子"
    },
    {
        "id": 20385,
        "en": "ascertain",
        "kk": "",
        "zh": "v. 查明",
        "unit": 11,
        "example": "I've ascertained the identity of the victim.",
        "exampleZh": "我已經確定了受害者的身分。"
    },
    {
        "id": 20386,
        "en": "aspect",
        "kk": "/ˈæsˌpɛkt/",
        "zh": "n. 方面",
        "unit": 11,
        "example": "There are other aspects.",
        "exampleZh": "還有其他方面。"
    },
    {
        "id": 20387,
        "en": "aspire",
        "kk": "",
        "zh": "v. 渴望",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20388,
        "en": "assemble",
        "kk": "/əˈsɛmbəɫ/",
        "zh": "v. 集合；召集",
        "unit": 11,
        "example": "the males assemble and hang by their front legs within a yard or two of the female",
        "exampleZh": "雄性聚集在一起，用前腿懸掛在距離雌性一兩碼的地方"
    },
    {
        "id": 20389,
        "en": "assembly",
        "kk": "/əˈsɛmbɫi/",
        "zh": "n. 集會；組裝",
        "unit": 11,
        "example": "Some assembly required.",
        "exampleZh": "需要一些組裝。"
    },
    {
        "id": 20390,
        "en": "assert",
        "kk": "/əˈsɝt/",
        "zh": "v. 斷言；聲稱",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20391,
        "en": "assess",
        "kk": "/əˈsɛs/",
        "zh": "v. 對⋯⋯進行估價；評價",
        "unit": 11,
        "example": "He assessed the distance.",
        "exampleZh": "他評估了距離。"
    },
    {
        "id": 20392,
        "en": "assessment",
        "kk": "/əˈsɛsmənt/",
        "zh": "n. 評估",
        "unit": 11,
        "example": "the assessment of educational needs",
        "exampleZh": "教育需求評估"
    },
    {
        "id": 20393,
        "en": "asset",
        "kk": "/ˈæˌsɛt/",
        "zh": "n. 資產",
        "unit": 11,
        "example": "debiting the asset account",
        "exampleZh": "借記資產帳戶"
    },
    {
        "id": 20394,
        "en": "assign",
        "kk": "/əˈsaɪn/",
        "zh": "v. 分配；分派",
        "unit": 11,
        "example": "They assigned you a name.",
        "exampleZh": "他們給你取了一個名字。"
    },
    {
        "id": 20395,
        "en": "assignment",
        "kk": "/əˈsaɪnmənt/",
        "zh": "n. 任務；工作",
        "unit": 11,
        "example": "Yanni had an assignment.",
        "exampleZh": "雅尼有一個任務。"
    },
    {
        "id": 20396,
        "en": "assimilate",
        "kk": "",
        "zh": "v. 被吸收；被消化",
        "unit": 11,
        "example": "You will be assimilated.",
        "exampleZh": "你會被同化。"
    },
    {
        "id": 20397,
        "en": "assist",
        "kk": "/əˈsɪst/",
        "zh": "v. 幫助；協助",
        "unit": 11,
        "example": "Tom assisted Mary.",
        "exampleZh": "湯姆協助瑪莉。"
    },
    {
        "id": 20398,
        "en": "assistance",
        "kk": "/əˈsɪstəns/",
        "zh": "n. 援助；幫助",
        "unit": 11,
        "example": "We need assistance.",
        "exampleZh": "我們需要幫助。"
    },
    {
        "id": 20399,
        "en": "assistant",
        "kk": "/əˈsɪstənt/",
        "zh": "n. 助手",
        "unit": 11,
        "example": "an assistant manager",
        "exampleZh": "助理經理"
    },
    {
        "id": 20400,
        "en": "associate",
        "kk": "/əˈsoʊsiˌeɪt/",
        "zh": "n. 夥伴；同事a 夥伴的；共事的",
        "unit": 11,
        "example": "I associate it with this.",
        "exampleZh": "我把它與此連結起來。"
    },
    {
        "id": 20401,
        "en": "association",
        "kk": "/əˌsoʊsiˈeɪʃən/",
        "zh": "n. 協會；公會；聯盟",
        "unit": 11,
        "example": "Do you know that association?",
        "exampleZh": "你知道那個協會嗎？"
    },
    {
        "id": 20402,
        "en": "assortment",
        "kk": "",
        "zh": "n. 各式各樣",
        "unit": 11,
        "example": "We also have lentils in our assortment.",
        "exampleZh": "我們的品種中還有扁豆。"
    },
    {
        "id": 20403,
        "en": "assume",
        "kk": "/əˈsum/",
        "zh": "v. 以為；假定為",
        "unit": 11,
        "example": "He assumes everything.",
        "exampleZh": "他承擔了一切。"
    },
    {
        "id": 20404,
        "en": "assumption",
        "kk": "/əˈsəmpʃən/",
        "zh": "n. 假設",
        "unit": 11,
        "example": "the assumption of an active role in regional settlements",
        "exampleZh": "在區域解決中發揮積極作用"
    },
    {
        "id": 20405,
        "en": "assure",
        "kk": "/əˈʃʊɹ/",
        "zh": "v. 向⋯⋯保證；擔保",
        "unit": 11,
        "example": "You can rest assured.",
        "exampleZh": "您可以放心。"
    },
    {
        "id": 20406,
        "en": "astonish",
        "kk": "/əˈstɑnɪʃ/",
        "zh": "v. 使吃驚；使驚訝",
        "unit": 11,
        "example": "you never fail to astonish me",
        "exampleZh": "你總是讓我驚訝"
    },
    {
        "id": 20407,
        "en": "astound",
        "kk": "",
        "zh": "v. 使震驚",
        "unit": 11,
        "example": "We were astounded.",
        "exampleZh": "我們很驚訝。"
    },
    {
        "id": 20408,
        "en": "attach",
        "kk": "/əˈtætʃ/",
        "zh": "v. 附屬；附加",
        "unit": 11,
        "example": "he doesn't attach too much importance to radical ideas",
        "exampleZh": "他不太重視激進的想法"
    },
    {
        "id": 20409,
        "en": "attachment",
        "kk": "/əˈtætʃmənt/",
        "zh": "n. 附屬物；附件",
        "unit": 11,
        "example": "We avoid attachment.",
        "exampleZh": "我們避免執著。"
    },
    {
        "id": 20410,
        "en": "attack",
        "kk": "/əˈtæk/",
        "zh": "v. 攻擊",
        "unit": 11,
        "example": "an attack on inflation",
        "exampleZh": "通貨膨脹的攻擊"
    },
    {
        "id": 20411,
        "en": "attain",
        "kk": "/əˈteɪn/",
        "zh": "v. 達到；獲得 n 成就，造詣",
        "unit": 11,
        "example": "Tom attained his goal.",
        "exampleZh": "湯姆達到了他的目的。"
    },
    {
        "id": 20412,
        "en": "attempt",
        "kk": "/əˈtɛmpt/",
        "zh": "n. 企圖；嘗試 v試圖；企圖",
        "unit": 11,
        "example": "The attempt failed.",
        "exampleZh": "嘗試失敗了。"
    },
    {
        "id": 20413,
        "en": "attend",
        "kk": "/əˈtɛnd/",
        "zh": "v. 出席；參加",
        "unit": 11,
        "example": "the severely wounded had two medics to attend to their wounds",
        "exampleZh": "重傷者有兩名醫護人員來處理他們的傷口"
    },
    {
        "id": 20414,
        "en": "attendance",
        "kk": "/əˈtɛndəns/",
        "zh": "n. 到場；出席",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20415,
        "en": "attendee",
        "kk": "",
        "zh": "n. 出席者",
        "unit": 11,
        "example": "Her petulant humor upset the attendees.",
        "exampleZh": "她任性的幽默讓與會者感到不安。"
    },
    {
        "id": 20416,
        "en": "attention",
        "kk": "/əˈtɛnʃən/",
        "zh": "n. 注意力；專心",
        "unit": 11,
        "example": "midshipmen standing at attention",
        "exampleZh": "見習官立正"
    },
    {
        "id": 20417,
        "en": "attentive",
        "kk": "",
        "zh": "adj. 專心的",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20418,
        "en": "attract",
        "kk": "/əˈtɹækt/",
        "zh": "v. 吸引；引起",
        "unit": 11,
        "example": "Food attracts dogs.",
        "exampleZh": "食物會吸引狗。"
    },
    {
        "id": 20419,
        "en": "attraction",
        "kk": "/əˈtɹækʃən/",
        "zh": "n. 吸引力",
        "unit": 11,
        "example": "the church is the town's main tourist attraction",
        "exampleZh": "教堂是鎮上主要的旅遊景點"
    },
    {
        "id": 20420,
        "en": "attractive",
        "kk": "/əˈtɹæktɪv/",
        "zh": "adj. 吸引人的",
        "unit": 11,
        "example": "You are attractive.",
        "exampleZh": "你很有吸引力。"
    },
    {
        "id": 20421,
        "en": "attribute",
        "kk": "",
        "zh": "v. 把⋯歸因於；把⋯歸咎於",
        "unit": 11,
        "example": "Ziri attributed the sound to bears.",
        "exampleZh": "齊裡將這種聲音歸因於熊。"
    },
    {
        "id": 20422,
        "en": "auction",
        "kk": "/ˈɑkʃən/",
        "zh": "n. 拍賣 v 拍賣",
        "unit": 11,
        "example": "The auction is over.",
        "exampleZh": "拍賣結束了。"
    },
    {
        "id": 20423,
        "en": "audience",
        "kk": "/ˈɑdiəns/",
        "zh": "n. 聽眾；觀眾",
        "unit": 11,
        "example": "The audience gasped.",
        "exampleZh": "觀眾倒吸一口冷氣。"
    },
    {
        "id": 20424,
        "en": "audit",
        "kk": "",
        "zh": "v. 審計；查帳 n 審計；查帳",
        "unit": 11,
        "example": "a complete audit of flora and fauna at the site",
        "exampleZh": "對現場動植物進行全面審核"
    },
    {
        "id": 20425,
        "en": "auditor",
        "kk": "",
        "zh": "n. 審計員",
        "unit": 11,
        "example": "Ziri is an auditor.",
        "exampleZh": "Ziri 是一名審計員。"
    },
    {
        "id": 20426,
        "en": "authentic",
        "kk": "/əˈθɛnɪk/",
        "zh": "adj. 真實的",
        "unit": 11,
        "example": "authentic 14th-century furniture",
        "exampleZh": "正宗的 14 世紀家具"
    },
    {
        "id": 20427,
        "en": "author",
        "kk": "/ˈɔθɝ/",
        "zh": "n. 作者；作家",
        "unit": 11,
        "example": "he is the author of several books on the subject",
        "exampleZh": "他是多本有關該主題的書籍的作者"
    },
    {
        "id": 20428,
        "en": "authority",
        "kk": "/əˈθɔɹəti/",
        "zh": "n. 權威",
        "unit": 11,
        "example": "They respect authority.",
        "exampleZh": "他們尊重權威。"
    },
    {
        "id": 20429,
        "en": "authorization",
        "kk": "",
        "zh": "n. 授權",
        "unit": 11,
        "example": "We need authorization.",
        "exampleZh": "我們需要授權。"
    },
    {
        "id": 20430,
        "en": "authorize",
        "kk": "/ˈɔθɝˌaɪz/",
        "zh": "v. 授權；批准",
        "unit": 11,
        "example": "Who authorized this?",
        "exampleZh": "誰授權這樣做的？"
    },
    {
        "id": 20431,
        "en": "auto",
        "kk": "/ˈɔtoʊ/",
        "zh": "n. 汽車",
        "unit": 11,
        "example": "Tom used auto-tune.",
        "exampleZh": "湯姆使用了自動調諧。"
    },
    {
        "id": 20432,
        "en": "autograph",
        "kk": "/ˈɔtəˌɡɹæf/",
        "zh": "n. 簽名",
        "unit": 11,
        "example": "Ziri signed autographs.",
        "exampleZh": "齊裡簽名。"
    },
    {
        "id": 20433,
        "en": "automate",
        "kk": "",
        "zh": "v. 使自動化",
        "unit": 11,
        "example": "Jobs should be automated.",
        "exampleZh": "工作應該自動化。"
    },
    {
        "id": 20434,
        "en": "automatic",
        "kk": "/ˌɔtəˈmætɪk/",
        "zh": "a. 自動的；習慣性的",
        "unit": 11,
        "example": "This process is automatic.",
        "exampleZh": "這個過程是自動的。"
    },
    {
        "id": 20435,
        "en": "automation",
        "kk": "",
        "zh": "n. 自動化",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20436,
        "en": "automobile",
        "kk": "/ˈɔtəmoʊˌbiɫ/",
        "zh": "n. 汽車",
        "unit": 11,
        "example": "Tom drives the automobile.",
        "exampleZh": "湯姆開汽車。"
    },
    {
        "id": 20437,
        "en": "autonomous",
        "kk": "",
        "zh": "adj. 自治的",
        "unit": 11,
        "example": "This is an autonomous machine.",
        "exampleZh": "這是一台自主機器。"
    },
    {
        "id": 20438,
        "en": "availability",
        "kk": "",
        "zh": "n. 可用性；空檔",
        "unit": 11,
        "example": "when a male bird bursts into melodious song, he is warning off other males and advertising his availability to females",
        "exampleZh": "當一隻雄鳥突然發出悠揚的歌聲時，它是在警告其他雄鳥，並向雌鳥宣傳它的可用性"
    },
    {
        "id": 20439,
        "en": "available",
        "kk": "/əˈveɪɫəbəɫ/",
        "zh": "a. 可用的；可利用的",
        "unit": 11,
        "example": "Help is available.",
        "exampleZh": "可以提供幫助。"
    },
    {
        "id": 20440,
        "en": "avenue",
        "kk": "/ˈævəˌnu/",
        "zh": "n. 大街；大道",
        "unit": 11,
        "example": "Turn left onto Fifth Avenue.",
        "exampleZh": "左轉進入第五大道。"
    },
    {
        "id": 20441,
        "en": "average",
        "kk": "/ˈævɝɪdʒ/",
        "zh": "n. 平均；中等 a普通的；中等的 v 平均分配；平均達到",
        "unit": 11,
        "example": "That's about average.",
        "exampleZh": "這大約是平均水平。"
    },
    {
        "id": 20442,
        "en": "avoid",
        "kk": "/əˈvɔɪd/",
        "zh": "v. 避開；躲開",
        "unit": 11,
        "example": "Sam tries to win Jess back while she tries to avoid him",
        "exampleZh": "山姆試圖贏回傑西，而傑西則試圖避開他"
    },
    {
        "id": 20443,
        "en": "await",
        "kk": "/əˈweɪt/",
        "zh": "v. 等候；期待",
        "unit": 11,
        "example": "Are they awaiting us?",
        "exampleZh": "他們在等我們嗎？"
    },
    {
        "id": 20444,
        "en": "awake",
        "kk": "/əˈweɪk/",
        "zh": "adj. 醒著的",
        "unit": 11,
        "example": "Adriano jolted awake.",
        "exampleZh": "阿德里亞諾猛地驚醒。"
    },
    {
        "id": 20445,
        "en": "award",
        "kk": "/əˈwɔɹd/",
        "zh": "n. 獎",
        "unit": 11,
        "example": "Sami won many awards.",
        "exampleZh": "薩米贏得了許多獎項。"
    },
    {
        "id": 20446,
        "en": "aware",
        "kk": "/əˈwɛɹ/",
        "zh": "adj. 意識到的",
        "unit": 11,
        "example": "Yanni became aware.",
        "exampleZh": "雅尼意識到了。"
    },
    {
        "id": 20447,
        "en": "awareness",
        "kk": "",
        "zh": "n. 察覺；覺悟B",
        "unit": 11,
        "example": "Yanni regained awareness.",
        "exampleZh": "雅尼恢復了知覺。"
    },
    {
        "id": 20448,
        "en": "awful",
        "kk": "/ˈɑfəɫ/",
        "zh": "adj. 糟糕的",
        "unit": 11,
        "example": "an awful speech",
        "exampleZh": "一次糟糕的演講"
    },
    {
        "id": 20449,
        "en": "awkward",
        "kk": "/ˈɑkwɝd/",
        "zh": "adj. 尷尬的",
        "unit": 11,
        "example": "He fell awkwardly.",
        "exampleZh": "他尷尬地摔倒了。"
    },
    {
        "id": 20450,
        "en": "backdrop",
        "kk": "",
        "zh": "n. 背景",
        "unit": 11,
        "example": "This waterfall is an amazing backdrop for pictures.",
        "exampleZh": "這座瀑布是拍照的絕佳背景。"
    },
    {
        "id": 20451,
        "en": "background",
        "kk": "/ˈbækˌɡɹaʊnd/",
        "zh": "n. 背景；遠因",
        "unit": 11,
        "example": "Tom has a humble background.",
        "exampleZh": "湯姆出身卑微。"
    },
    {
        "id": 20452,
        "en": "backlog",
        "kk": "",
        "zh": "n. 存貨；儲備金",
        "unit": 11,
        "example": "the company took on extra staff to clear the backlog of work",
        "exampleZh": "公司增聘員工清理積壓的工作"
    },
    {
        "id": 20453,
        "en": "backup",
        "kk": "",
        "zh": "n. 備用；備用物a 備用的 v 備份",
        "unit": 11,
        "example": "Tom called for backup.",
        "exampleZh": "湯姆請求支援。"
    },
    {
        "id": 20454,
        "en": "baggage",
        "kk": "/ˈbæɡədʒ/",
        "zh": "n. 行李",
        "unit": 11,
        "example": "Here is my baggage.",
        "exampleZh": "這是我的行李。"
    },
    {
        "id": 20455,
        "en": "balance",
        "kk": "/ˈbæɫəns/",
        "zh": "n. 平衡；均衡 v使平衡",
        "unit": 11,
        "example": "overseas investments can add balance to an investment portfolio",
        "exampleZh": "海外投資可以增加投資組合的平衡"
    },
    {
        "id": 20456,
        "en": "ballot",
        "kk": "/ˈbæɫət/",
        "zh": "n. 選票",
        "unit": 11,
        "example": "the commissioners were elected by ballot",
        "exampleZh": "委員是透過投票選出的"
    },
    {
        "id": 20457,
        "en": "ban",
        "kk": "/ˈbæn/",
        "zh": "n. 禁止；禁令 v 禁止；取締",
        "unit": 11,
        "example": "a proposed ban on foreign correspondents was condemned by international leaders",
        "exampleZh": "禁止外國記者的提議遭到國際領袖的譴責"
    },
    {
        "id": 20458,
        "en": "band",
        "kk": "/ˈbænd/",
        "zh": "n. 帶；細繩；樂團",
        "unit": 11,
        "example": "a narrow band of gold was her only jewelry",
        "exampleZh": "一條窄金帶是她唯一的珠寶"
    },
    {
        "id": 20459,
        "en": "bankrupt",
        "kk": "/ˈbæŋkɹəpt/",
        "zh": "a. 破產的 v 使破產 n 破產者",
        "unit": 11,
        "example": "I'll bankrupt you.",
        "exampleZh": "我會讓你破產。"
    },
    {
        "id": 20460,
        "en": "bankruptcy",
        "kk": "",
        "zh": "n. 破產；倒閉",
        "unit": 11,
        "example": "Sami declared bankruptcy.",
        "exampleZh": "薩米宣布破產。"
    },
    {
        "id": 20461,
        "en": "banner",
        "kk": "/ˈbænɝ/",
        "zh": "n. 旗幟；橫幅",
        "unit": 11,
        "example": "The Amazigh banner is magnificent.",
        "exampleZh": "阿馬齊格旗雄偉壯觀。"
    },
    {
        "id": 20462,
        "en": "banquet",
        "kk": "/ˈbæŋkwət/",
        "zh": "n. 宴會；盛宴 v宴請",
        "unit": 11,
        "example": "a ten-course banquet",
        "exampleZh": "十道菜的宴會"
    },
    {
        "id": 20463,
        "en": "bare",
        "kk": "/ˈbɛɹ/",
        "zh": "a. 裸的；光禿禿的 v使赤裸；露出",
        "unit": 11,
        "example": "bare floorboards",
        "exampleZh": "裸露的地板"
    },
    {
        "id": 20464,
        "en": "barely",
        "kk": "/ˈbɛɹɫi/",
        "zh": "ad. 僅僅；勉強",
        "unit": 11,
        "example": "Mennad barely ate.",
        "exampleZh": "門納德幾乎沒吃東西。"
    },
    {
        "id": 20465,
        "en": "bargain",
        "kk": "/ˈbɑɹɡən/",
        "zh": "n. 協議；買賣 v討價還價",
        "unit": 11,
        "example": "I love to bargain.",
        "exampleZh": "我喜歡討價還價。"
    },
    {
        "id": 20466,
        "en": "barrier",
        "kk": "/ˈbæɹiɝ/",
        "zh": "n. 障礙物；路障",
        "unit": 11,
        "example": "We've hit a barrier.",
        "exampleZh": "我們遇到了障礙。"
    },
    {
        "id": 20467,
        "en": "base",
        "kk": "/ˈbeɪs/",
        "zh": "n. 基礎",
        "unit": 11,
        "example": "she and her boyfriend got to second base",
        "exampleZh": "她和她的男朋友到達二壘"
    },
    {
        "id": 20468,
        "en": "basic",
        "kk": "/ˈbeɪsɪk/",
        "zh": "n. 基礎的；基本的n 基礎；基本原理",
        "unit": 11,
        "example": "a coarse-grained, basic, plutonic rock",
        "exampleZh": "粗粒基性深成岩"
    },
    {
        "id": 20469,
        "en": "basis",
        "kk": "/ˈbeɪsəs/",
        "zh": "n. 基礎；根據",
        "unit": 11,
        "example": "trust is the only basis for a good working relationship",
        "exampleZh": "信任是良好工作關係的唯一基礎"
    },
    {
        "id": 20470,
        "en": "bear",
        "kk": "/ˈbɛɹ/",
        "zh": "v. 忍受；承擔",
        "unit": 11,
        "example": "no one likes to bear the responsibility for such decisions",
        "exampleZh": "沒有人願意為這樣的決定負責"
    },
    {
        "id": 20471,
        "en": "beat",
        "kk": "/ˈbit/",
        "zh": "v. 打；擊；敲 n 敲打；敲擊聲 a 筋疲力盡的；垂頭喪氣的",
        "unit": 11,
        "example": "public clamor for more police officers on the beat",
        "exampleZh": "民眾呼籲增加警力"
    },
    {
        "id": 20472,
        "en": "behalf",
        "kk": "/bɪˈhæf/",
        "zh": "n. 代表；利益",
        "unit": 11,
        "example": "Speak on my behalf!",
        "exampleZh": "代表我說話吧！"
    },
    {
        "id": 20473,
        "en": "behave",
        "kk": "/bɪˈheɪv/",
        "zh": "v. 表現；行為舉止",
        "unit": 11,
        "example": "Behave yourselves!",
        "exampleZh": "好好表現吧！"
    },
    {
        "id": 20474,
        "en": "behavior",
        "kk": "/bɪˈheɪvjɝ/",
        "zh": "n. 行為；舉止",
        "unit": 11,
        "example": "Change your behavior.",
        "exampleZh": "改變你的行為。"
    },
    {
        "id": 20475,
        "en": "belongings",
        "kk": "/bɪˈɫɔŋɪŋz/",
        "zh": "n. 財產；攜帶物品",
        "unit": 11,
        "example": "Pack your belongings.",
        "exampleZh": "收拾好你的物品。"
    },
    {
        "id": 20476,
        "en": "below",
        "kk": "/biˈɫoʊ/",
        "zh": "ad. 在下面；到下面prep 在⋯下面",
        "unit": 11,
        "example": "the most common methods are shown below",
        "exampleZh": "最常見的方法如下圖所示"
    },
    {
        "id": 20477,
        "en": "benchmark",
        "kk": "",
        "zh": "n. 水準點；基準",
        "unit": 11,
        "example": "She thinks that happiness and health should be the benchmarks for success.",
        "exampleZh": "她認為幸福和健康應該是成功的標準。"
    },
    {
        "id": 20478,
        "en": "beneficial",
        "kk": "/ˌbɛnəˈfɪʃəɫ/",
        "zh": "adj. 有益的",
        "unit": 11,
        "example": "the beneficial effect on the economy",
        "exampleZh": "對經濟的有利影響"
    },
    {
        "id": 20479,
        "en": "benefit",
        "kk": "/ˈbɛnəfɪt/",
        "zh": "n. 福利；利益",
        "unit": 11,
        "example": "tenants bought their houses with the benefit of a discount",
        "exampleZh": "租戶以折扣優惠購買房屋"
    },
    {
        "id": 20480,
        "en": "beside",
        "kk": "/ˌbiˈsaɪd/",
        "zh": "prep. 在⋯旁；在旁邊",
        "unit": 11,
        "example": "on the table beside the bed",
        "exampleZh": "在床邊的桌子上"
    },
    {
        "id": 20481,
        "en": "besides",
        "kk": "/ˌbiˈsaɪdz/",
        "zh": "ad. 此外；而且prep 在⋯之外",
        "unit": 11,
        "example": "I have no other family besides my parents",
        "exampleZh": "除了父母我沒有其他家人"
    },
    {
        "id": 20482,
        "en": "betray",
        "kk": "/bɪˈtɹeɪ/",
        "zh": "v. 背叛；出賣",
        "unit": 11,
        "example": "They felt betrayed.",
        "exampleZh": "他們感到被背叛了。"
    },
    {
        "id": 20483,
        "en": "beverage",
        "kk": "/ˈbɛvɝɪdʒ/",
        "zh": "n. 飲料",
        "unit": 11,
        "example": "Milk is a common beverage.",
        "exampleZh": "牛奶是一種常見的飲料。"
    },
    {
        "id": 20484,
        "en": "beyond",
        "kk": "/ˌbiˈɔnd/",
        "zh": "adv. 在更遠處；往更遠處 prep 向⋯的那一邊；越過",
        "unit": 11,
        "example": "she blurs the boundaries between reality and what lies beyond",
        "exampleZh": "她模糊了現實與超越之間的界限"
    },
    {
        "id": 20485,
        "en": "bias",
        "kk": "/ˈbaɪəs/",
        "zh": "n. 成見；偏心",
        "unit": 11,
        "example": "Tom seemed biased.",
        "exampleZh": "湯姆似乎有偏見。"
    },
    {
        "id": 20486,
        "en": "bid",
        "kk": "/ˈbɪd/",
        "zh": "v. 命令；吩咐；出價",
        "unit": 11,
        "example": "guests will bid for pieces of fine jewelry",
        "exampleZh": "客人將競標精美珠寶"
    },
    {
        "id": 20487,
        "en": "bill",
        "kk": "/ˈbɪɫ/",
        "zh": "n. 帳單；票據；議案",
        "unit": 11,
        "example": "he was running up a bill of hundreds of dollars",
        "exampleZh": "他已經欠了幾百美元的帳單"
    },
    {
        "id": 20488,
        "en": "bind",
        "kk": "/ˈbaɪnd/",
        "zh": "v. 捆；綁",
        "unit": 11,
        "example": "a protein in a form that can bind DNA",
        "exampleZh": "一種可以結合 DNA 的蛋白質"
    },
    {
        "id": 20489,
        "en": "biography",
        "kk": "/baɪˈɑɡɹəfi/",
        "zh": "n. 傳記",
        "unit": 11,
        "example": "Ziri wrote Rima's biography.",
        "exampleZh": "齊裡（Ziri）撰寫了裡瑪（Rima）的傳記。"
    },
    {
        "id": 20490,
        "en": "biology",
        "kk": "/baɪˈɑɫədʒi/",
        "zh": "n. 生物學",
        "unit": 11,
        "example": "Yuri loved biology.",
        "exampleZh": "尤里熱愛生物學。"
    },
    {
        "id": 20491,
        "en": "bitter",
        "kk": "/ˈbɪtɝ/",
        "zh": "a. 苦的；痛苦的",
        "unit": 11,
        "example": "the raw berries have an intensely bitter flavor",
        "exampleZh": "生漿果有強烈的苦味"
    },
    {
        "id": 20492,
        "en": "blame",
        "kk": "/ˈbɫeɪm/",
        "zh": "v. 責備；指責",
        "unit": 11,
        "example": "Lukas blamed himself.",
        "exampleZh": "盧卡斯責怪自己。"
    },
    {
        "id": 20493,
        "en": "blank",
        "kk": "/ˈbɫæŋk/",
        "zh": "a. 空的；無內容的n 空白；空白處 v 使模糊；刪去",
        "unit": 11,
        "example": "her mind went blank",
        "exampleZh": "她的大腦一片空白"
    },
    {
        "id": 20494,
        "en": "blanket",
        "kk": "/ˈbɫæŋkət/",
        "zh": "n. 毛毯；毯子",
        "unit": 11,
        "example": "I bought a blanket.",
        "exampleZh": "我買了一條毯子。"
    },
    {
        "id": 20495,
        "en": "blast",
        "kk": "/ˈbɫæst/",
        "zh": "n. 爆炸",
        "unit": 11,
        "example": "damn and blast this awful place!",
        "exampleZh": "該死的，炸毀這個可怕的地方！"
    },
    {
        "id": 20496,
        "en": "blend",
        "kk": "/ˈbɫɛnd/",
        "zh": "v. 使混雜；使交融n 混雜；交融",
        "unit": 11,
        "example": "It's a special blend.",
        "exampleZh": "這是一種特殊的混合物。"
    },
    {
        "id": 20497,
        "en": "blind",
        "kk": "/ˈbɫaɪnd/",
        "zh": "a. 盲的；視而不見的；不願承認的",
        "unit": 11,
        "example": "he's absolutely blind where you're concerned, isn't he?",
        "exampleZh": "就你而言，他絕對是瞎子，不是嗎？"
    },
    {
        "id": 20498,
        "en": "block",
        "kk": "/ˈbɫɑk/",
        "zh": "n. 街區；障礙 v 阻塞；堵住；封鎖",
        "unit": 11,
        "example": "they tried to block the release of the film",
        "exampleZh": "他們試圖阻止這部電影的上映"
    },
    {
        "id": 20499,
        "en": "bloom",
        "kk": "/ˈbɫum/",
        "zh": "n. 開花；開花期 v繁榮；興盛",
        "unit": 11,
        "example": "Flowers are blooming.",
        "exampleZh": "花朵盛開。"
    },
    {
        "id": 20500,
        "en": "board",
        "kk": "/ˈbɔɹd/",
        "zh": "n. 木板；委員會；理事會",
        "unit": 11,
        "example": "they would not be able to board without a ticket",
        "exampleZh": "沒有票他們將無法登機"
    },
    {
        "id": 20501,
        "en": "boast",
        "kk": "/ˈboʊst/",
        "zh": "v. 自吹自擂；誇耀",
        "unit": 11,
        "example": "He boasts after winning.",
        "exampleZh": "獲勝後他誇耀。"
    },
    {
        "id": 20502,
        "en": "bold",
        "kk": "/ˈboʊɫd/",
        "zh": "a. 無畏的；大膽的",
        "unit": 11,
        "example": "she tossed him a bold look",
        "exampleZh": "她大膽地看了他一眼"
    },
    {
        "id": 20503,
        "en": "bond",
        "kk": "/ˈbɑnd/",
        "zh": "n. 聯結；聯繫",
        "unit": 11,
        "example": "Their bond was strong.",
        "exampleZh": "他們的聯繫很牢固。"
    },
    {
        "id": 20504,
        "en": "bonus",
        "kk": "/ˈboʊnəs/",
        "zh": "n. 紅利；獎金",
        "unit": 11,
        "example": "Did you get a bonus?",
        "exampleZh": "你得到獎金了嗎？"
    },
    {
        "id": 20505,
        "en": "booklet",
        "kk": "",
        "zh": "n. 小冊子",
        "unit": 11,
        "example": "This booklet is free of charge.",
        "exampleZh": "這本小冊子是免費的。"
    },
    {
        "id": 20506,
        "en": "boom",
        "kk": "/ˈbum/",
        "zh": "n. 激增；繁榮 v 迅速發展；興旺",
        "unit": 11,
        "example": "if you get caught, boom, you're a felon",
        "exampleZh": "如果你被抓住了，繁榮，你就是個重罪犯"
    },
    {
        "id": 20507,
        "en": "boost",
        "kk": "/ˈbust/",
        "zh": "v. 推動；幫助 n 推動；促進",
        "unit": 11,
        "example": "Boost your productivity.",
        "exampleZh": "提高您的生產力。"
    },
    {
        "id": 20508,
        "en": "booth",
        "kk": "/ˈbuθ/",
        "zh": "n. 攤販；小隔間",
        "unit": 11,
        "example": "a ticket booth",
        "exampleZh": "售票亭"
    },
    {
        "id": 20509,
        "en": "border",
        "kk": "/ˈbɔɹdɝ/",
        "zh": "n. 邊緣；邊境 v毗鄰，接界",
        "unit": 11,
        "example": "France borders Spain.",
        "exampleZh": "法國與西班牙接壤。"
    },
    {
        "id": 20510,
        "en": "bother",
        "kk": "/ˈbɑðɝ/",
        "zh": "v. 煩擾；打攪",
        "unit": 11,
        "example": "I hope she hasn't been a bother",
        "exampleZh": "我希望她沒有打擾"
    },
    {
        "id": 20511,
        "en": "bottom",
        "kk": "/ˈbɑtəm/",
        "zh": "n. 底部；下端",
        "unit": 11,
        "example": "the bottom of the page",
        "exampleZh": "頁面底部"
    },
    {
        "id": 20512,
        "en": "bounce",
        "kk": "/ˈbaʊns/",
        "zh": "v. 彈起；彈回",
        "unit": 11,
        "example": "The cheque bounced.",
        "exampleZh": "支票被退回了。"
    },
    {
        "id": 20513,
        "en": "bound",
        "kk": "/ˈbaʊnd/",
        "zh": "v. 跳躍；跳起",
        "unit": 11,
        "example": "an upper bound on each modulus",
        "exampleZh": "每個模數的上限"
    },
    {
        "id": 20514,
        "en": "boundary",
        "kk": "/ˈbaʊndɝi/",
        "zh": "n. 邊界；分界線",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20515,
        "en": "branch",
        "kk": "/ˈbɹæntʃ/",
        "zh": "n. 樹枝；支流；分部；部門",
        "unit": 11,
        "example": "he went to work at our Boston branch",
        "exampleZh": "他到我們波士頓分公司工作"
    },
    {
        "id": 20516,
        "en": "brand",
        "kk": "/ˈbɹænd/",
        "zh": "n. 品牌；商標",
        "unit": 11,
        "example": "a new brand of detergent",
        "exampleZh": "一種新品牌的洗滌劑"
    },
    {
        "id": 20517,
        "en": "brave",
        "kk": "/ˈbɹeɪv/",
        "zh": "a. 勇敢的：英勇的",
        "unit": 11,
        "example": "we had to brave the full heat of the sun",
        "exampleZh": "我們不得不勇敢地面對太陽的炎熱"
    },
    {
        "id": 20518,
        "en": "breach",
        "kk": "",
        "zh": "n. 破壞，違反 v破壞，違反",
        "unit": 11,
        "example": "We have a security breach.",
        "exampleZh": "我們有安全漏洞。"
    },
    {
        "id": 20519,
        "en": "break",
        "kk": "/ˈbɹeɪk/",
        "zh": "v. 打破；折斷 n 破損；休息；機會",
        "unit": 11,
        "example": "a break of 83 put him in front for the first time",
        "exampleZh": "83桿的單桿成績讓他首次領先"
    },
    {
        "id": 20520,
        "en": "breakdown",
        "kk": "/ˈbɹeɪkˌdaʊn/",
        "zh": "n. 故障；損壞",
        "unit": 11,
        "example": "Heather had a breakdown following the death of her sister",
        "exampleZh": "希瑟在姊姊過世後精神崩潰"
    },
    {
        "id": 20521,
        "en": "breakthrough",
        "kk": "/ˈbɹeɪkˌθɹu/",
        "zh": "n. 突破性進展；突破",
        "unit": 11,
        "example": "we're seeing more and more of these breakthrough infections",
        "exampleZh": "我們看到越來越多的突破性感染"
    },
    {
        "id": 20522,
        "en": "breathe",
        "kk": "/ˈbɹið/",
        "zh": "v. 呼吸；呼氣",
        "unit": 11,
        "example": "Breathe naturally.",
        "exampleZh": "自然呼吸。"
    },
    {
        "id": 20523,
        "en": "brief",
        "kk": "/ˈbɹif/",
        "zh": "a. 簡短的；短暫的",
        "unit": 11,
        "example": "introductions were brief and polite",
        "exampleZh": "介紹簡短而禮貌"
    },
    {
        "id": 20524,
        "en": "briefcase",
        "kk": "/ˈbɹifˌkeɪs/",
        "zh": "n. 公事包514. brieﬂy a 簡短地；短暫地",
        "unit": 11,
        "example": "Take this briefcase.",
        "exampleZh": "拿著這個公事包。"
    },
    {
        "id": 20525,
        "en": "briefing",
        "kk": "",
        "zh": "n. 簡報",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20526,
        "en": "brilliant",
        "kk": "/ˈbɹɪɫjənt/",
        "zh": "a. 光輝的；明亮的",
        "unit": 11,
        "example": "brilliant sunshine illuminated the scene",
        "exampleZh": "燦爛的陽光照亮了現場"
    },
    {
        "id": 20527,
        "en": "bring",
        "kk": "/ˈbɹɪŋ/",
        "zh": "v. 帶來",
        "unit": 11,
        "example": "I'll give you an aspirin to bring down your temperature",
        "exampleZh": "我會給你一片阿斯匹靈來降低你的體溫"
    },
    {
        "id": 20528,
        "en": "broad",
        "kk": "/ˈbɹɔd/",
        "zh": "adj. 寬廣的",
        "unit": 11,
        "example": "three broad categories of mutual funds",
        "exampleZh": "共同基金三大類"
    },
    {
        "id": 20529,
        "en": "broadcast",
        "kk": "/ˈbɹɔdˌkæst/",
        "zh": "v. 廣播；播送",
        "unit": 11,
        "example": "a broadcast journalist",
        "exampleZh": "一名廣播記者"
    },
    {
        "id": 20530,
        "en": "broaden",
        "kk": "/ˈbɹɔdən/",
        "zh": "v. 變寬",
        "unit": 11,
        "example": "efforts to broaden classical music's appeal",
        "exampleZh": "努力擴大古典音樂的吸引力"
    },
    {
        "id": 20531,
        "en": "brochure",
        "kk": "/bɹoʊˈʃʊɹ/",
        "zh": "n. 小冊子",
        "unit": 11,
        "example": "a holiday brochure",
        "exampleZh": "假期小冊子"
    },
    {
        "id": 20532,
        "en": "broker",
        "kk": "",
        "zh": "n. 代理人，中間人",
        "unit": 11,
        "example": "Tom is a stock broker.",
        "exampleZh": "湯姆是一名股票經紀人。"
    },
    {
        "id": 20533,
        "en": "browse",
        "kk": "/ˈbɹaʊz/",
        "zh": "v. 瀏覽；觀看",
        "unit": 11,
        "example": "the animals browse the high foliage of trees",
        "exampleZh": "動物們在高高的樹葉上覓食"
    },
    {
        "id": 20534,
        "en": "browser",
        "kk": "",
        "zh": "n. 瀏覽器",
        "unit": 11,
        "example": "Browsers are very useful.",
        "exampleZh": "瀏覽器非常有用。"
    },
    {
        "id": 20535,
        "en": "budget",
        "kk": "/ˈbədʒɪt/",
        "zh": "n. 預算；經費",
        "unit": 11,
        "example": "Tom made a budget.",
        "exampleZh": "湯姆做了一個預算。"
    },
    {
        "id": 20536,
        "en": "build",
        "kk": "/ˈbɪɫd/",
        "zh": "v. 建造；建立 n 體格；體型",
        "unit": 11,
        "example": "they need to build a strong relationship with journal users",
        "exampleZh": "他們需要與期刊使用者建立牢固的關係"
    },
    {
        "id": 20537,
        "en": "building",
        "kk": "/ˈbɪɫdɪŋ/",
        "zh": "n. 建築物；大樓",
        "unit": 11,
        "example": "the building of democracy in Guatemala",
        "exampleZh": "瓜地馬拉的民主建設"
    },
    {
        "id": 20538,
        "en": "bulk",
        "kk": "/ˈbəɫk/",
        "zh": "n. 體積；容積 a 大量的；大批的",
        "unit": 11,
        "example": "I always buy in bulk.",
        "exampleZh": "我總是批量購買。"
    },
    {
        "id": 20539,
        "en": "bulletin",
        "kk": "/ˈbʊɫɪtən/",
        "zh": "n. 公告",
        "unit": 11,
        "example": "log-in details will be sent out to members via the monthly bulletin",
        "exampleZh": "登入詳細資訊將透過每月公告發送給會員"
    },
    {
        "id": 20540,
        "en": "bunch",
        "kk": "/ˈbəntʃ/",
        "zh": "n. 串",
        "unit": 11,
        "example": "A bunch of nonsense!",
        "exampleZh": "一堆廢話！"
    },
    {
        "id": 20541,
        "en": "bundle",
        "kk": "/ˈbəndəɫ/",
        "zh": "n. 束",
        "unit": 11,
        "example": "he stopped occasionally in the villages to dance at country frolics, and bundle with the lasses",
        "exampleZh": "他偶爾會在鄉村停下來，在鄉村嬉戲中跳舞，並與女孩們在一起"
    },
    {
        "id": 20542,
        "en": "burden",
        "kk": "/ˈbɝdən/",
        "zh": "n. 負擔",
        "unit": 11,
        "example": "He lightened my burden.",
        "exampleZh": "他減輕了我的負擔。"
    },
    {
        "id": 20543,
        "en": "bureau",
        "kk": "/ˈbjʊɹoʊ/",
        "zh": "n. 局",
        "unit": 11,
        "example": "Flavio is the director of the bureau.",
        "exampleZh": "弗拉維奧是該局局長。"
    },
    {
        "id": 20544,
        "en": "burn",
        "kk": "/ˈbɝn/",
        "zh": "v. 燃燒",
        "unit": 11,
        "example": "exercise does help to burn calories",
        "exampleZh": "運動確實有助於燃燒卡路里"
    },
    {
        "id": 20545,
        "en": "burst",
        "kk": "/ˈbɝst/",
        "zh": "v. 爆裂",
        "unit": 11,
        "example": "he burst the balloon",
        "exampleZh": "他把氣球弄破了"
    },
    {
        "id": 20546,
        "en": "business",
        "kk": "/ˈbɪznəs/",
        "zh": "n. 商業；職業",
        "unit": 11,
        "example": "they must be told about this blackmailing business",
        "exampleZh": "必須告訴他們有關敲詐勒索的事情"
    },
    {
        "id": 20547,
        "en": "button",
        "kk": "/ˈbətən/",
        "zh": "n. 鈕扣；按鈕",
        "unit": 11,
        "example": "just search for the app you want and click the 'buy' or 'install' button",
        "exampleZh": "只需搜尋您想要的應用程序，然後點擊“購買”或“安裝”按鈕"
    },
    {
        "id": 20548,
        "en": "bypass",
        "kk": "",
        "zh": "v. 繞過",
        "unit": 11,
        "example": "We'll bypass the city centre.",
        "exampleZh": "我們將繞過市中心。"
    },
    {
        "id": 20549,
        "en": "cabinet",
        "kk": "/ˈkæbənət/",
        "zh": "n. 櫥櫃",
        "unit": 11,
        "example": "Here's the cabinet.",
        "exampleZh": "這是內閣。"
    },
    {
        "id": 20550,
        "en": "cable",
        "kk": "/ˈkeɪbəɫ/",
        "zh": "n. 纜；索549. café n 咖啡廳",
        "unit": 11,
        "example": "he caught a glimpse of the mast, a cable or two downwind",
        "exampleZh": "他瞥見了桅杆，順風的一兩條纜繩"
    },
    {
        "id": 20551,
        "en": "calculate",
        "kk": "/ˈkæɫkjəˌɫeɪt/",
        "zh": "v. 計算；算",
        "unit": 11,
        "example": "I calculated hastily.",
        "exampleZh": "我連忙算了算。"
    },
    {
        "id": 20552,
        "en": "calculation",
        "kk": "/ˌkæɫkjəˈɫeɪʃən/",
        "zh": "n. 計算；估計",
        "unit": 11,
        "example": "This simplifies calculations.",
        "exampleZh": "這簡化了計算。"
    },
    {
        "id": 20553,
        "en": "calculator",
        "kk": "/ˈkæɫkjəˌɫeɪtɝ/",
        "zh": "n. 計算機",
        "unit": 11,
        "example": "a pocket calculator",
        "exampleZh": "袖珍計算器"
    },
    {
        "id": 20554,
        "en": "calendar",
        "kk": "/ˈkæɫəndɝ/",
        "zh": "n. 日曆",
        "unit": 11,
        "example": "it was at their discretion whether to index or calendar the records",
        "exampleZh": "他們可以自行決定是否對記錄進行索引或日曆"
    },
    {
        "id": 20555,
        "en": "campaign",
        "kk": "/kæmˈpeɪn/",
        "zh": "n. 競選；活動",
        "unit": 11,
        "example": "Are you campaigning?",
        "exampleZh": "你在競選嗎？"
    },
    {
        "id": 20556,
        "en": "campus",
        "kk": "/ˈkæmpəs/",
        "zh": "n. 校園；校區",
        "unit": 11,
        "example": "Are you on campus?",
        "exampleZh": "你在校園嗎？"
    },
    {
        "id": 20557,
        "en": "cancel",
        "kk": "/ˈkænsəɫ/",
        "zh": "v. 取消；廢除；中止",
        "unit": 11,
        "example": "a stamp franked and with an adhesive cancel",
        "exampleZh": "蓋有加蓋郵戳和黏膠蓋銷的郵票"
    },
    {
        "id": 20558,
        "en": "cancellation",
        "kk": "",
        "zh": "n. 取消",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20559,
        "en": "candidate",
        "kk": "/ˈkændədeɪt/",
        "zh": "n. 候選人；候補者",
        "unit": 11,
        "example": "Tom is a candidate.",
        "exampleZh": "湯姆是一名候選人。"
    },
    {
        "id": 20560,
        "en": "canvas",
        "kk": "/ˈkænvəs/",
        "zh": "n. 帆布",
        "unit": 11,
        "example": "This is a very famous canvas.",
        "exampleZh": "這是一幅非常著名的畫布。"
    },
    {
        "id": 20561,
        "en": "capable",
        "kk": "/ˈkeɪpəbəɫ/",
        "zh": "a. 有能力的；能幹的",
        "unit": 11,
        "example": "a highly capable man",
        "exampleZh": "一個很有能力的人"
    },
    {
        "id": 20562,
        "en": "capacity",
        "kk": "/kəˈpæsəti/",
        "zh": "n. 容量；容積",
        "unit": 11,
        "example": "his capacity to inspire trust in others",
        "exampleZh": "他激發他人信任的能力"
    },
    {
        "id": 20563,
        "en": "capital",
        "kk": "/ˈkæpətəɫ/",
        "zh": "n. 首都；資本",
        "unit": 11,
        "example": "he's a really capital fellow",
        "exampleZh": "他真是個資本家"
    },
    {
        "id": 20564,
        "en": "capture",
        "kk": "/ˈkæptʃɝ/",
        "zh": "v. 捕獲；俘虜 n捕獲；俘虜",
        "unit": 11,
        "example": "Tom captured Mary.",
        "exampleZh": "湯姆抓住了瑪麗。"
    },
    {
        "id": 20565,
        "en": "carbon",
        "kk": "/ˈkɑɹbən/",
        "zh": "n. 碳",
        "unit": 11,
        "example": "What about the carbon tax?",
        "exampleZh": "那麼碳稅呢？"
    },
    {
        "id": 20566,
        "en": "care",
        "kk": "/ˈkɛɹ/",
        "zh": "v. 在乎：關心",
        "unit": 11,
        "example": "you care very deeply for him",
        "exampleZh": "你非常關心他"
    },
    {
        "id": 20567,
        "en": "career",
        "kk": "/kɝˈɪɹ/",
        "zh": "n. 職業；工作",
        "unit": 11,
        "example": "Tom loves his career.",
        "exampleZh": "湯姆熱愛他的職業。"
    },
    {
        "id": 20568,
        "en": "careful",
        "kk": "/ˈkɛɹfəɫ/",
        "zh": "a. 小心翼翼的；仔細的",
        "unit": 11,
        "example": "be careful not to lose her address",
        "exampleZh": "小心不要遺失她的地址"
    },
    {
        "id": 20569,
        "en": "careless",
        "kk": "",
        "zh": "adj. 粗心的",
        "unit": 11,
        "example": "What a careless girl!",
        "exampleZh": "真是個不小心的女孩！"
    },
    {
        "id": 20570,
        "en": "cargo",
        "kk": "/ˈkɑɹˌɡoʊ/",
        "zh": "n. 貨物",
        "unit": 11,
        "example": "a cargo of oil",
        "exampleZh": "一批石油"
    },
    {
        "id": 20571,
        "en": "carrier",
        "kk": "/ˈkæɹiɝ/",
        "zh": "n. 運送人；搬運人",
        "unit": 11,
        "example": "Yanni is a mail carrier.",
        "exampleZh": "雅尼是郵差。"
    },
    {
        "id": 20572,
        "en": "carry",
        "kk": "/ˈkæɹi/",
        "zh": "out. Ph 實行；執行",
        "unit": 11,
        "example": "they relied on dialogue to carry the plot",
        "exampleZh": "他們依靠對話來推動情節"
    },
    {
        "id": 20573,
        "en": "cart",
        "kk": "/ˈkɑɹt/",
        "zh": "n. 小車，手推車",
        "unit": 11,
        "example": "from the product page select the size and quantity you'd like and click ‘Buy’ to add it to your cart",
        "exampleZh": "從產品頁面選擇您想要的尺寸和數量，然後點擊「購買」將其新增至您的購物車"
    },
    {
        "id": 20574,
        "en": "case",
        "kk": "/ˈkeɪs/",
        "zh": "n. 盒；套",
        "unit": 11,
        "example": "a libel case",
        "exampleZh": "誹謗案"
    },
    {
        "id": 20575,
        "en": "cash",
        "kk": "/ˈkæʃ/",
        "zh": "n. 現金；現款 v把⋯⋯兌現",
        "unit": 11,
        "example": "a discount for cash",
        "exampleZh": "現金折扣"
    },
    {
        "id": 20576,
        "en": "cashier",
        "kk": "/kæˈʃɪɹ/",
        "zh": "n. 收銀員",
        "unit": 11,
        "example": "Yanni is a cashier.",
        "exampleZh": "雅尼是一名出納員。"
    },
    {
        "id": 20577,
        "en": "catalog",
        "kk": "/ˈkætəɫɔɡ/",
        "zh": "n. 目錄；目錄冊",
        "unit": 11,
        "example": "his life was a catalog of dismal failures",
        "exampleZh": "他的一生充滿了令人沮喪的失敗"
    },
    {
        "id": 20578,
        "en": "catch",
        "kk": "/ˈkætʃ/",
        "zh": "v. 抓",
        "unit": 11,
        "example": "there was a catch in Anne's voice",
        "exampleZh": "安妮的聲音有些哽咽"
    },
    {
        "id": 20579,
        "en": "category",
        "kk": "/ˈkætəˌɡɔɹi/",
        "zh": "n. 種類；部屬；類目",
        "unit": 11,
        "example": "They announced our category.",
        "exampleZh": "他們宣布了我們的類別。"
    },
    {
        "id": 20580,
        "en": "cater",
        "kk": "/ˈkeɪtɝ/",
        "zh": "v. 提供飲食；承辦宴席",
        "unit": 11,
        "example": "I am self-catering.",
        "exampleZh": "我自己做飯。"
    },
    {
        "id": 20581,
        "en": "catering",
        "kk": "",
        "zh": "n. 承辦酒席；提供飲食及服務",
        "unit": 11,
        "example": "high standards of catering",
        "exampleZh": "高標準的餐飲"
    },
    {
        "id": 20582,
        "en": "cause",
        "kk": "/ˈkɑz/",
        "zh": "n. 原因；起因 v 導致；使發生",
        "unit": 11,
        "example": "I'm raising money for a good cause",
        "exampleZh": "我正在為公益事業籌集資金"
    },
    {
        "id": 20583,
        "en": "caution",
        "kk": "/ˈkɑʃən/",
        "zh": "n. 小心；謹慎",
        "unit": 11,
        "example": "anyone receiving a suspect package should exercise extreme caution",
        "exampleZh": "任何收到可疑包裹的人都應格外小心"
    },
    {
        "id": 20584,
        "en": "cautious",
        "kk": "/ˈkɔʃəs/",
        "zh": "a. 十分小心的；謹慎的",
        "unit": 11,
        "example": "the plan received a cautious welcome",
        "exampleZh": "該計劃受到謹慎歡迎"
    },
    {
        "id": 20585,
        "en": "cease",
        "kk": "/ˈsis/",
        "zh": "v. 停止",
        "unit": 11,
        "example": "The giggles ceased.",
        "exampleZh": "咯咯笑聲停止了。"
    },
    {
        "id": 20586,
        "en": "ceiling",
        "kk": "/ˈsiɫɪŋ/",
        "zh": "n. 天花板",
        "unit": 11,
        "example": "the aircraft's quoted ceiling of 24,000 feet",
        "exampleZh": "該飛機的報價上限為 24,000 英尺"
    },
    {
        "id": 20587,
        "en": "celebrate",
        "kk": "/ˈsɛɫəˌbɹeɪt/",
        "zh": "v. 慶祝",
        "unit": 11,
        "example": "Everyone celebrated.",
        "exampleZh": "大家都慶祝了。"
    },
    {
        "id": 20588,
        "en": "celebration",
        "kk": "/ˌsɛɫəˈbɹeɪʃən/",
        "zh": "n. 慶典",
        "unit": 11,
        "example": "the birth of his son was a cause for celebration",
        "exampleZh": "他兒子的出生值得慶祝"
    },
    {
        "id": 20589,
        "en": "celebrity",
        "kk": "/səˈɫɛbɹɪti/",
        "zh": "n. 名人",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20590,
        "en": "cell",
        "kk": "/ˈsɛɫ/",
        "zh": "n. 細胞",
        "unit": 11,
        "example": "a button cell for a quartz watch",
        "exampleZh": "用於石英錶的紐帶電池"
    },
    {
        "id": 20591,
        "en": "censor",
        "kk": "",
        "zh": "v. 審查",
        "unit": 11,
        "example": "Her work was censored.",
        "exampleZh": "她的作品受到審查。"
    },
    {
        "id": 20592,
        "en": "census",
        "kk": "",
        "zh": "n. 人口普查",
        "unit": 11,
        "example": "A census was performed in 2005.",
        "exampleZh": "2005年進行了一次人口普查。"
    },
    {
        "id": 20593,
        "en": "center",
        "kk": "/ˈsɛnɝ/",
        "zh": "n. 中心",
        "unit": 11,
        "example": "to center the needle, turn the knob",
        "exampleZh": "轉動旋鈕，使針居中"
    },
    {
        "id": 20594,
        "en": "central",
        "kk": "/ˈsɛntɹəɫ/",
        "zh": "a. 中心的；中央的",
        "unit": 11,
        "example": "the station has a central courtyard",
        "exampleZh": "車站有一個中央庭院"
    },
    {
        "id": 20595,
        "en": "century",
        "kk": "/ˈsɛntʃɝi/",
        "zh": "n. 世紀；一百年",
        "unit": 11,
        "example": "the fifteenth century",
        "exampleZh": "十五世紀"
    },
    {
        "id": 20596,
        "en": "ceremony",
        "kk": "/ˈsɛɹəˌmoʊni/",
        "zh": "n. 儀式；典禮",
        "unit": 11,
        "example": "The ceremony stopped.",
        "exampleZh": "儀式停止了。"
    },
    {
        "id": 20597,
        "en": "certain",
        "kk": "/ˈsɝtən/",
        "zh": "a. 確鑿的；無疑的",
        "unit": 11,
        "example": "true and certain knowledge of the essence of existence",
        "exampleZh": "關於存在本質的真實且確定的知識"
    },
    {
        "id": 20598,
        "en": "certainly",
        "kk": "",
        "zh": "ad. 無疑地；必定604.  certiﬁcate n 證明書；執照",
        "unit": 11,
        "example": "I certainly agree.",
        "exampleZh": "我當然同意。"
    },
    {
        "id": 20599,
        "en": "certificate",
        "kk": "/sɝˈtɪfɪkət/",
        "zh": "n. 證書",
        "unit": 11,
        "example": "graduate certificate in information technology",
        "exampleZh": "資訊科技研究生證書"
    },
    {
        "id": 20600,
        "en": "certification",
        "kk": "",
        "zh": "n. 證明",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20601,
        "en": "certify",
        "kk": "/ˈsɝtəˌfaɪ/",
        "zh": "v. 證明，證實",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20602,
        "en": "chain",
        "kk": "/ˈtʃeɪn/",
        "zh": "n. 鏈條；連鎖；連續",
        "unit": 11,
        "example": "Don't yank my chain!",
        "exampleZh": "別拉我的鍊子！"
    },
    {
        "id": 20603,
        "en": "chair",
        "kk": "/ˈtʃɛɹ/",
        "zh": "n. 椅子",
        "unit": 11,
        "example": "the editorial chair",
        "exampleZh": "編輯主席"
    },
    {
        "id": 20604,
        "en": "chairman",
        "kk": "/ˈtʃɛɹmən/",
        "zh": "n. 主席",
        "unit": 11,
        "example": "Include the chairman.",
        "exampleZh": "包括主席。"
    },
    {
        "id": 20605,
        "en": "challenge",
        "kk": "/ˈtʃæɫəndʒ/",
        "zh": "v. 挑戰；提出異議",
        "unit": 11,
        "example": "He challenged her.",
        "exampleZh": "他向她挑戰。"
    },
    {
        "id": 20606,
        "en": "chamber",
        "kk": "/ˈtʃeɪmbɝ/",
        "zh": "n. 房間",
        "unit": 11,
        "example": "The chamber door is open.",
        "exampleZh": "密室門開著。"
    },
    {
        "id": 20607,
        "en": "champion",
        "kk": "/ˈtʃæmpiən/",
        "zh": "n. 冠軍",
        "unit": 11,
        "example": "Ziri is a champion.",
        "exampleZh": "齊裡是冠軍。"
    },
    {
        "id": 20608,
        "en": "championship",
        "kk": "/ˈtʃæmpiənˌʃɪp/",
        "zh": "n. 錦標賽",
        "unit": 11,
        "example": "He won the championship.",
        "exampleZh": "他贏得了冠軍。"
    },
    {
        "id": 20609,
        "en": "chance",
        "kk": "/ˈtʃæns/",
        "zh": "n. 機會",
        "unit": 11,
        "example": "a chance meeting",
        "exampleZh": "一次偶然的相遇"
    },
    {
        "id": 20610,
        "en": "change",
        "kk": "/ˈtʃeɪndʒ/",
        "zh": "v. 改變；更改 n變化；變更；零錢",
        "unit": 11,
        "example": "I watched him pocket the change",
        "exampleZh": "我看著他把零錢放進口袋"
    },
    {
        "id": 20611,
        "en": "channel",
        "kk": "/ˈtʃænəɫ/",
        "zh": "n. 頻道",
        "unit": 11,
        "example": "Change the channel!",
        "exampleZh": "換個頻道吧！"
    },
    {
        "id": 20612,
        "en": "chaos",
        "kk": "/ˈkeɪɑs/",
        "zh": "n. 混亂",
        "unit": 11,
        "example": "snow caused chaos in the region",
        "exampleZh": "大雪導致該地區混亂"
    },
    {
        "id": 20613,
        "en": "character",
        "kk": "/ˈkɛɹɪktɝ/",
        "zh": "n. 角色；性格；特性",
        "unit": 11,
        "example": "gas lamps give the area its character",
        "exampleZh": "煤氣燈賦予該地區特色"
    },
    {
        "id": 20614,
        "en": "characteristic",
        "kk": "/ˌkɛɹəktɝˈɪstɪk/",
        "zh": "a. 特有的；獨特的",
        "unit": 11,
        "example": "It is characteristic of him.",
        "exampleZh": "這是他的特點。"
    },
    {
        "id": 20615,
        "en": "characterize",
        "kk": "/ˈkɛɹəktɝˌaɪz/",
        "zh": "v. 具有⋯⋯的特徵；以⋯⋯為特徵",
        "unit": 11,
        "example": "How would you characterize fast food?",
        "exampleZh": "您如何評價快餐？"
    },
    {
        "id": 20616,
        "en": "charge",
        "kk": "/ˈtʃɑɹdʒ/",
        "zh": "v. 控告；索價",
        "unit": 11,
        "example": "he appeared in court on a charge of attempted murder",
        "exampleZh": "他因謀殺未遂罪名出庭"
    },
    {
        "id": 20617,
        "en": "charity",
        "kk": "/ˈtʃɛɹɪti/",
        "zh": "n. 慈善",
        "unit": 11,
        "example": "She runs a charity.",
        "exampleZh": "她經營一家慈善機構。"
    },
    {
        "id": 20618,
        "en": "chart",
        "kk": "/ˈtʃɑɹt/",
        "zh": "n. 圖表；曲線圖",
        "unit": 11,
        "example": "scribbled on a patient's chart",
        "exampleZh": "潦草地寫在病人的病歷上"
    },
    {
        "id": 20619,
        "en": "charter",
        "kk": "",
        "zh": "n. 憲章",
        "unit": 11,
        "example": "We chartered a bus.",
        "exampleZh": "我們包了一輛巴士。"
    },
    {
        "id": 20620,
        "en": "chase",
        "kk": "/ˈtʃeɪs/",
        "zh": "v. 追逐",
        "unit": 11,
        "example": "a chase for limited supplies of hard currency",
        "exampleZh": "追逐有限的硬通貨供應"
    },
    {
        "id": 20621,
        "en": "chat",
        "kk": "/ˈtʃæt/",
        "zh": "v. 聊天",
        "unit": 11,
        "example": "he dropped in for a chat",
        "exampleZh": "他過來聊天"
    },
    {
        "id": 20622,
        "en": "cheap",
        "kk": "/ˈtʃip/",
        "zh": "adj. 便宜的",
        "unit": 11,
        "example": "a cheap restaurant",
        "exampleZh": "一家便宜的餐館"
    },
    {
        "id": 20623,
        "en": "cheat",
        "kk": "/ˈtʃit/",
        "zh": "v. 欺騙",
        "unit": 11,
        "example": "a liar and a cheat",
        "exampleZh": "騙子和騙子"
    },
    {
        "id": 20624,
        "en": "check",
        "kk": "/ˈtʃɛk/",
        "zh": "n. （美）檢查；支票；帳單",
        "unit": 11,
        "example": "on Wednesdays he wore the small check",
        "exampleZh": "星期三他戴著小支票"
    },
    {
        "id": 20625,
        "en": "checkout",
        "kk": "",
        "zh": "n. 結帳",
        "unit": 11,
        "example": "When is checkout time?",
        "exampleZh": "退房時間是什麼時候？"
    },
    {
        "id": 20626,
        "en": "cheer",
        "kk": "/ˈtʃɪɹ/",
        "zh": "v. 歡呼",
        "unit": 11,
        "example": "Everybody cheered.",
        "exampleZh": "大家歡呼起來。"
    },
    {
        "id": 20627,
        "en": "cheerful",
        "kk": "/ˈtʃɪɹfəɫ/",
        "zh": "adj. 開朗的",
        "unit": 11,
        "example": "the room was painted in cheerful colors",
        "exampleZh": "房間漆成歡快的顏色"
    },
    {
        "id": 20628,
        "en": "chef",
        "kk": "/ˈʃɛf/",
        "zh": "n. 廚師",
        "unit": 11,
        "example": "Ziri became a chef.",
        "exampleZh": "齊裡成為了一名廚師。"
    },
    {
        "id": 20629,
        "en": "chemical",
        "kk": "/ˈkɛməkəɫ/",
        "zh": "adj. 化學的",
        "unit": 11,
        "example": "chemical treatments for killing fungi",
        "exampleZh": "殺死真菌的化學處理"
    },
    {
        "id": 20630,
        "en": "chemist",
        "kk": "/ˈkɛmɪst/",
        "zh": "n. 化學家",
        "unit": 11,
        "example": "Ziri became a chemist.",
        "exampleZh": "齊裡成為化學家。"
    },
    {
        "id": 20631,
        "en": "chemistry",
        "kk": "/ˈkɛməstɹi/",
        "zh": "n. 化學",
        "unit": 11,
        "example": "He likes chemistry.",
        "exampleZh": "他喜歡化學。"
    },
    {
        "id": 20632,
        "en": "cheque",
        "kk": "",
        "zh": "n. （英）支票",
        "unit": 11,
        "example": "They pay by cheque.",
        "exampleZh": "他們用支票付款。"
    },
    {
        "id": 20633,
        "en": "cherish",
        "kk": "/ˈtʃɛɹɪʃ/",
        "zh": "v. 珍惜",
        "unit": 11,
        "example": "Cherish the thought.",
        "exampleZh": "珍惜這個想法。"
    },
    {
        "id": 20634,
        "en": "chief",
        "kk": "/ˈtʃif/",
        "zh": "adj. 主要的",
        "unit": 11,
        "example": "the chief of police",
        "exampleZh": "警察局長"
    },
    {
        "id": 20635,
        "en": "childhood",
        "kk": "/ˈtʃaɪɫdˌhʊd/",
        "zh": "n. 童年",
        "unit": 11,
        "example": "My childhood was good.",
        "exampleZh": "我的童年是美好的。"
    },
    {
        "id": 20636,
        "en": "chill",
        "kk": "/ˈtʃɪɫ/",
        "zh": "n. 寒冷",
        "unit": 11,
        "example": "a long-term chill in relations could hurt commerce",
        "exampleZh": "關係長期冷淡可能會損害商業"
    },
    {
        "id": 20637,
        "en": "choice",
        "kk": "/ˈtʃɔɪs/",
        "zh": "n. 選擇；挑選",
        "unit": 11,
        "example": "this CD drive is the perfect choice for your computer",
        "exampleZh": "該 CD 驅動器是您電腦的完美選擇"
    },
    {
        "id": 20638,
        "en": "choir",
        "kk": "/ˈkwaɪɝ/",
        "zh": "n. 合唱團",
        "unit": 11,
        "example": "Welcome to the choir.",
        "exampleZh": "歡迎來到合唱團。"
    },
    {
        "id": 20639,
        "en": "choose",
        "kk": "/ˈtʃuz/",
        "zh": "v. 選擇；挑選",
        "unit": 11,
        "example": "I'll stay as long as I choose",
        "exampleZh": "只要我選擇，我就會留下來"
    },
    {
        "id": 20640,
        "en": "chore",
        "kk": "/ˈtʃɔɹ/",
        "zh": "n. 例行工作；家務活",
        "unit": 11,
        "example": "She did her chores.",
        "exampleZh": "她做家事。"
    },
    {
        "id": 20641,
        "en": "chronic",
        "kk": "/ˈkɹɑnɪk/",
        "zh": "adj. 慢性的",
        "unit": 11,
        "example": "a chronic liar",
        "exampleZh": "一個長期說謊的人"
    },
    {
        "id": 20642,
        "en": "circle",
        "kk": "/ˈsɝkəɫ/",
        "zh": "n. 圓形的東西；圈v 畫圓圈；圈出；圍著",
        "unit": 11,
        "example": "they all sat around in a circle",
        "exampleZh": "他們圍坐成一圈"
    },
    {
        "id": 20643,
        "en": "circuit",
        "kk": "/ˈsɝkət/",
        "zh": "n. 電路",
        "unit": 11,
        "example": "Where's the circuit breaker?",
        "exampleZh": "斷路器在哪裡？"
    },
    {
        "id": 20644,
        "en": "circular",
        "kk": "/ˈsɝkjəɫɝ/",
        "zh": "adj. 圓形的",
        "unit": 11,
        "example": "Flavio was in a circular room.",
        "exampleZh": "弗拉維奧在一個圓形房間裡。"
    },
    {
        "id": 20645,
        "en": "circulate",
        "kk": "/ˈsɝkjəˌɫeɪt/",
        "zh": "v. 循環",
        "unit": 11,
        "example": "Blood circulates through blood vessels.",
        "exampleZh": "血液通過血管循環。"
    },
    {
        "id": 20646,
        "en": "circulation",
        "kk": "/ˈsɝkjəˌɫeɪʃən/",
        "zh": "n. 循環",
        "unit": 11,
        "example": "Blood circulation is very rapid.",
        "exampleZh": "血液循環非常快速。"
    },
    {
        "id": 20647,
        "en": "circumstance",
        "kk": "/ˈsɝkəmˌstæns/",
        "zh": "n. 情況；環境；情勢",
        "unit": 11,
        "example": "What were the circumstances?",
        "exampleZh": "當時的情況如何？"
    },
    {
        "id": 20648,
        "en": "cite",
        "kk": "/ˈsaɪt/",
        "zh": "v. 引用",
        "unit": 11,
        "example": "he does not cite any source for this assertion",
        "exampleZh": "他沒有引用這說法的任何來源"
    },
    {
        "id": 20649,
        "en": "citizen",
        "kk": "/ˈsɪtəzən/",
        "zh": "n. 市民；居民",
        "unit": 11,
        "example": "a Polish citizen",
        "exampleZh": "波蘭公民"
    },
    {
        "id": 20650,
        "en": "city",
        "kk": "/ˈsɪti/",
        "zh": "n. 城市；都市",
        "unit": 11,
        "example": "the city council",
        "exampleZh": "市議會"
    },
    {
        "id": 20651,
        "en": "civic",
        "kk": "/ˈsɪvɪk/",
        "zh": "a. 城市的；市民的",
        "unit": 11,
        "example": "they could not be denied access to education, the vote, and other civic rights",
        "exampleZh": "不能剝奪他們接受教育、投票和其他公民權利的權利"
    },
    {
        "id": 20652,
        "en": "civil",
        "kk": "/ˈsɪvəɫ/",
        "zh": "adj. 公民的",
        "unit": 11,
        "example": "a civil action",
        "exampleZh": "民事訴訟"
    },
    {
        "id": 20653,
        "en": "civilian",
        "kk": "/səˈvɪɫjən/",
        "zh": "n. 平民",
        "unit": 11,
        "example": "The IDF kills civilians.",
        "exampleZh": "以色列國防軍殺害平民。"
    },
    {
        "id": 20654,
        "en": "civilization",
        "kk": "/ˌsɪvəɫɪˈzeɪʃən/",
        "zh": "n. 文明",
        "unit": 11,
        "example": "They hate civilization.",
        "exampleZh": "他們討厭文明。"
    },
    {
        "id": 20655,
        "en": "claim",
        "kk": "/ˈkɫeɪm/",
        "zh": "v. 主張；斷言；聲稱",
        "unit": 11,
        "example": "these sunblocks claim protection factors as high as 34",
        "exampleZh": "這些防曬霜聲稱防護係數高達 34"
    },
    {
        "id": 20656,
        "en": "clarify",
        "kk": "/ˈkɫɛɹəˌfaɪ/",
        "zh": "v. 澄清；闡明",
        "unit": 11,
        "example": "Can you clarify that?",
        "exampleZh": "你能澄清一下嗎？"
    },
    {
        "id": 20657,
        "en": "clarity",
        "kk": "/ˈkɫɛɹəti/",
        "zh": "n. 清楚",
        "unit": 11,
        "example": "for the sake of clarity, each of these strategies is dealt with separately",
        "exampleZh": "為了清楚起見，這些策略中的每一個都是單獨處理的"
    },
    {
        "id": 20658,
        "en": "clash",
        "kk": "/ˈkɫæʃ/",
        "zh": "v. 衝突",
        "unit": 11,
        "example": "Those colors clash.",
        "exampleZh": "這些顏色發生衝突。"
    },
    {
        "id": 20659,
        "en": "classic",
        "kk": "/ˈkɫæsɪk/",
        "zh": "adj. 經典的",
        "unit": 11,
        "example": "I had all the classic symptoms of flu",
        "exampleZh": "我有流感的所有典型症狀"
    },
    {
        "id": 20660,
        "en": "classical",
        "kk": "/ˈkɫæsɪkəɫ/",
        "zh": "adj. 古典的",
        "unit": 11,
        "example": "I played classical music.",
        "exampleZh": "我演奏古典音樂。"
    },
    {
        "id": 20661,
        "en": "classification",
        "kk": "/ˌkɫæsəfəˈkeɪʃən/",
        "zh": "n. 分類",
        "unit": 11,
        "example": "Classification is not my specialty.",
        "exampleZh": "分類不是我的專長。"
    },
    {
        "id": 20662,
        "en": "classify",
        "kk": "/ˈkɫæsəˌfaɪ/",
        "zh": "v. 分類",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20663,
        "en": "clause",
        "kk": "/ˈkɫɔz/",
        "zh": "n. 條款；款",
        "unit": 11,
        "example": "I have a nudity clause.",
        "exampleZh": "我有一個裸體條款。"
    },
    {
        "id": 20664,
        "en": "clean",
        "kk": "/ˈkɫin/",
        "zh": "adj. 乾淨的",
        "unit": 11,
        "example": "I searched him and his luggage, and he was clean",
        "exampleZh": "我搜了他和他的行李，他很乾淨"
    },
    {
        "id": 20665,
        "en": "clear",
        "kk": "/ˈkɫɪɹ/",
        "zh": "a. 明亮的；顯然的v 清除；收拾",
        "unit": 11,
        "example": "the plane rose high enough to clear the trees",
        "exampleZh": "飛機升得夠高，可以清理樹木"
    },
    {
        "id": 20666,
        "en": "clearance",
        "kk": "/ˈkɫɪɹəns/",
        "zh": "n. 清除；清掃",
        "unit": 11,
        "example": "cleaning of the machine should include clearance of blockages",
        "exampleZh": "機器的清潔應包括清除堵塞物"
    },
    {
        "id": 20667,
        "en": "clerk",
        "kk": "/ˈkɫɝk/",
        "zh": "n. 辦事員；職員",
        "unit": 11,
        "example": "a chapter clerk",
        "exampleZh": "分會文員"
    },
    {
        "id": 20668,
        "en": "clever",
        "kk": "/ˈkɫɛvɝ/",
        "zh": "adj. 聰明的",
        "unit": 11,
        "example": "how clever of him to think of this!",
        "exampleZh": "他想到這一點真是太聰明了！"
    },
    {
        "id": 20669,
        "en": "click",
        "kk": "/ˈkɫɪk/",
        "zh": "v. 點擊",
        "unit": 11,
        "example": "Please click here.",
        "exampleZh": "請點選這裡。"
    },
    {
        "id": 20670,
        "en": "client",
        "kk": "/ˈkɫaɪənt/",
        "zh": "n. 委託人；客戶",
        "unit": 11,
        "example": "I only have clients.",
        "exampleZh": "我只有客戶。"
    },
    {
        "id": 20671,
        "en": "clientele",
        "kk": "",
        "zh": "n. 客戶群",
        "unit": 11,
        "example": "the dancers don't mix with the clientele",
        "exampleZh": "舞者不與顧客混在一起"
    },
    {
        "id": 20672,
        "en": "climate",
        "kk": "/ˈkɫaɪmət/",
        "zh": "n. 氣候",
        "unit": 11,
        "example": "vacationing in a warm climate",
        "exampleZh": "在溫暖的氣候中度假"
    },
    {
        "id": 20673,
        "en": "climax",
        "kk": "/ˈkɫaɪˌmæks/",
        "zh": "n. 頂點",
        "unit": 11,
        "example": "The game came to a climax.",
        "exampleZh": "比賽進入了高潮。"
    },
    {
        "id": 20674,
        "en": "climb",
        "kk": "/ˈkɫaɪm/",
        "zh": "v. 爬；攀爬",
        "unit": 11,
        "example": "his long climb from poverty",
        "exampleZh": "他擺脫貧窮的漫長歷程"
    },
    {
        "id": 20675,
        "en": "cling",
        "kk": "/ˈkɫɪŋ/",
        "zh": "v. 緊抓",
        "unit": 11,
        "example": "the fish cling to the line of the weed",
        "exampleZh": "魚依附在水草線上"
    },
    {
        "id": 20676,
        "en": "clinic",
        "kk": "/ˈkɫɪnɪk/",
        "zh": "n. 診所",
        "unit": 11,
        "example": "The clinic is closed.",
        "exampleZh": "診所已關閉。"
    },
    {
        "id": 20677,
        "en": "clip",
        "kk": "/ˈkɫɪp/",
        "zh": "v. 剪；修剪 n 剪；修剪",
        "unit": 11,
        "example": "The clip was longer.",
        "exampleZh": "剪輯更長。"
    },
    {
        "id": 20678,
        "en": "clock",
        "kk": "/ˈkɫɑk/",
        "zh": "n. 時鐘",
        "unit": 11,
        "example": "they play against the clock",
        "exampleZh": "他們爭分奪秒"
    },
    {
        "id": 20679,
        "en": "close",
        "kk": "/ˈkɫoʊs/",
        "zh": "adj. 靠近的",
        "unit": 11,
        "example": "the months of living in close proximity to her were taking their toll",
        "exampleZh": "與她住得很近的幾個月讓她付出了代價"
    },
    {
        "id": 20680,
        "en": "closet",
        "kk": "/ˈkɫɑzət/",
        "zh": "n. 壁櫥",
        "unit": 11,
        "example": "a closet alcoholic",
        "exampleZh": "一個櫃子裡的酒鬼"
    },
    {
        "id": 20681,
        "en": "closure",
        "kk": "/ˈkɫoʊʒɝ/",
        "zh": "n. 關閉",
        "unit": 11,
        "example": "a closure motion",
        "exampleZh": "關閉動議"
    },
    {
        "id": 20682,
        "en": "clothe",
        "kk": "/ˈkɫoʊð/",
        "zh": "v. 給...穿衣",
        "unit": 11,
        "example": "they already had eight children to feed and clothe",
        "exampleZh": "他們已經有八個孩子需要吃穿"
    },
    {
        "id": 20683,
        "en": "clothes",
        "kk": "/ˈkɫoʊðz/",
        "zh": "n. 衣服",
        "unit": 11,
        "example": "he stripped off his clothes",
        "exampleZh": "他脫掉了衣服"
    },
    {
        "id": 20684,
        "en": "clothing",
        "kk": "/ˈkɫoʊðɪŋ/",
        "zh": "n. 衣物",
        "unit": 11,
        "example": "an item of clothing",
        "exampleZh": "一件衣服"
    },
    {
        "id": 20685,
        "en": "cloud",
        "kk": "/ˈkɫaʊd/",
        "zh": "n. 雲",
        "unit": 11,
        "example": "a cloud of dust",
        "exampleZh": "一團塵埃"
    },
    {
        "id": 20686,
        "en": "clue",
        "kk": "/ˈkɫu/",
        "zh": "n. 線索",
        "unit": 11,
        "example": "Mennad had no clue.",
        "exampleZh": "門納德毫無頭緒。"
    },
    {
        "id": 20687,
        "en": "clumsy",
        "kk": "/ˈkɫəmzi/",
        "zh": "adj. 笨拙的",
        "unit": 11,
        "example": "Flavio was clumsy.",
        "exampleZh": "弗拉維奧很笨拙。"
    },
    {
        "id": 20688,
        "en": "cluster",
        "kk": "/ˈkɫəstɝ/",
        "zh": "n. 簇",
        "unit": 11,
        "example": "a cluster of antique shops",
        "exampleZh": "古董店聚集地"
    },
    {
        "id": 20689,
        "en": "coach",
        "kk": "/ˈkoʊtʃ/",
        "zh": "n. 教練 v 訓練；指導",
        "unit": 11,
        "example": "a football coach",
        "exampleZh": "足球教練"
    },
    {
        "id": 20690,
        "en": "coalition",
        "kk": "",
        "zh": "n. 聯盟",
        "unit": 11,
        "example": "The coalition of the willing.",
        "exampleZh": "自願聯盟。"
    },
    {
        "id": 20691,
        "en": "coarse",
        "kk": "/ˈkɔɹs/",
        "zh": "adj. 粗糙的",
        "unit": 11,
        "example": "He's coarse in manner.",
        "exampleZh": "他的態度很粗魯。"
    },
    {
        "id": 20692,
        "en": "coast",
        "kk": "/ˈkoʊst/",
        "zh": "n. 海岸",
        "unit": 11,
        "example": "the coast road",
        "exampleZh": "海岸路"
    },
    {
        "id": 20693,
        "en": "code",
        "kk": "/ˈkoʊd/",
        "zh": "n. 代碼",
        "unit": 11,
        "example": "He learned to code.",
        "exampleZh": "他學會了編碼。"
    },
    {
        "id": 20694,
        "en": "coffee",
        "kk": "/ˈkɑfi/",
        "zh": "n. 咖啡",
        "unit": 11,
        "example": "a cup of coffee",
        "exampleZh": "一杯咖啡"
    },
    {
        "id": 20695,
        "en": "cognitive",
        "kk": "",
        "zh": "adj. 認知的",
        "unit": 11,
        "example": "Antonio began the cognitive test.",
        "exampleZh": "安東尼奧開始了認知測驗。"
    },
    {
        "id": 20696,
        "en": "cohere",
        "kk": "",
        "zh": "v. 連貫",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20697,
        "en": "coherent",
        "kk": "/koʊˈhɪɹənt/",
        "zh": "a. 一致的；協調的",
        "unit": 11,
        "example": "she was lucid and coherent and did not appear to be injured",
        "exampleZh": "她神智清醒、思路清晰，看起來沒有受傷"
    },
    {
        "id": 20698,
        "en": "cohesion",
        "kk": "",
        "zh": "n. 凝聚力",
        "unit": 11,
        "example": "Academic writing needs to show cohesion and coherence.",
        "exampleZh": "學術寫作需要表現出銜接性和連貫性。"
    },
    {
        "id": 20699,
        "en": "cohesive",
        "kk": "",
        "zh": "a. 凝聚性的；有結合力的",
        "unit": 11,
        "example": "Academic writing should be cohesive.",
        "exampleZh": "學術寫作應該具有凝聚力。"
    },
    {
        "id": 20700,
        "en": "coincide",
        "kk": "/ˌkoʊɪnˈsaɪd/",
        "zh": "v. 同時發生",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20701,
        "en": "coincidence",
        "kk": "/koʊˈɪnsɪdəns/",
        "zh": "n. 巧合；符合",
        "unit": 11,
        "example": "they met by coincidence",
        "exampleZh": "他們偶然相遇"
    },
    {
        "id": 20702,
        "en": "collaborate",
        "kk": "",
        "zh": "v. 合作；勾結",
        "unit": 11,
        "example": "Let's collaborate.",
        "exampleZh": "讓我們合作吧。"
    },
    {
        "id": 20703,
        "en": "collaboration",
        "kk": "",
        "zh": "v. 合作；勾結",
        "unit": 11,
        "example": "Recognition fosters collaboration.",
        "exampleZh": "認可促進合作。"
    },
    {
        "id": 20704,
        "en": "collapse",
        "kk": "/kəˈɫæps/",
        "zh": "v. 倒塌",
        "unit": 11,
        "example": "Our house collapsed.",
        "exampleZh": "我們的房子倒塌了。"
    },
    {
        "id": 20705,
        "en": "collar",
        "kk": "/ˈkɑɫɝ/",
        "zh": "n. 衣領",
        "unit": 11,
        "example": "Ziri likes this collar.",
        "exampleZh": "Ziri 喜歡這個項圈。"
    },
    {
        "id": 20706,
        "en": "colleague",
        "kk": "/ˈkɑɫiɡ/",
        "zh": "n. 同事；同僚",
        "unit": 11,
        "example": "Simon was also a very good colleague",
        "exampleZh": "西蒙也是一位非常好的同事"
    },
    {
        "id": 20707,
        "en": "collect",
        "kk": "/kəˈɫɛkt/",
        "zh": "v. 收集；採集",
        "unit": 11,
        "example": "dust and dirt collect so quickly",
        "exampleZh": "灰塵和污垢積得如此之快"
    },
    {
        "id": 20708,
        "en": "collection",
        "kk": "/kəˈɫɛkʃən/",
        "zh": "n. 採集；收取",
        "unit": 11,
        "example": "a record collection",
        "exampleZh": "記錄集"
    },
    {
        "id": 20709,
        "en": "collective",
        "kk": "/kəˈɫɛktɪv/",
        "zh": "adj. 集體的",
        "unit": 11,
        "example": "ministers who share collective responsibility",
        "exampleZh": "分擔集體責任的部長"
    },
    {
        "id": 20710,
        "en": "collector",
        "kk": "/kəˈɫɛktɝ/",
        "zh": "n. 收藏家",
        "unit": 11,
        "example": "an art collector",
        "exampleZh": "藝術收藏家"
    },
    {
        "id": 20711,
        "en": "college",
        "kk": "/ˈkɑɫɪdʒ/",
        "zh": "n. 大學；學院",
        "unit": 11,
        "example": "We attended college.",
        "exampleZh": "我們上大學了。"
    },
    {
        "id": 20712,
        "en": "collide",
        "kk": "/kəˈɫaɪd/",
        "zh": "v. 碰撞；相撞",
        "unit": 11,
        "example": "Two cars collided.",
        "exampleZh": "兩輛車相撞了。"
    },
    {
        "id": 20713,
        "en": "collision",
        "kk": "/kəˈɫɪʒən/",
        "zh": "n. 碰撞",
        "unit": 11,
        "example": "a midair collision between two aircraft",
        "exampleZh": "兩架飛機在空中相撞"
    },
    {
        "id": 20714,
        "en": "color",
        "kk": "/ˈkəɫɝ/",
        "zh": "n. 顏色",
        "unit": 11,
        "example": "color flooded her skin as she realized what he meant",
        "exampleZh": "當她意識到他的意思時，顏色淹沒了她的皮膚"
    },
    {
        "id": 20715,
        "en": "column",
        "kk": "/ˈkɑɫəm/",
        "zh": "n. 專欄",
        "unit": 11,
        "example": "The column is cylindrical.",
        "exampleZh": "柱子是圓柱形的。"
    },
    {
        "id": 20716,
        "en": "combat",
        "kk": "/ˈkɑmbæt/",
        "zh": "n. 戰鬥",
        "unit": 11,
        "example": "a combat zone",
        "exampleZh": "一個戰區"
    },
    {
        "id": 20717,
        "en": "combination",
        "kk": "/ˌkɑmbəˈneɪʃən/",
        "zh": "n. 結合；聯合",
        "unit": 11,
        "example": "I love that combination.",
        "exampleZh": "我喜歡這個組合。"
    },
    {
        "id": 20718,
        "en": "combine",
        "kk": "/ˈkɑmbaɪn/",
        "zh": "v. 結合；聯合",
        "unit": 11,
        "example": "Germany combines modern and medieval.",
        "exampleZh": "德國結合了現代和中世紀。"
    },
    {
        "id": 20719,
        "en": "come",
        "kk": "/ˈkəm/",
        "zh": "across. Ph 碰見；被理解",
        "unit": 11,
        "example": "do you want to come fishing tomorrow?",
        "exampleZh": "你明天想來釣魚嗎？"
    },
    {
        "id": 20720,
        "en": "comedy",
        "kk": "/ˈkɑmədi/",
        "zh": "n. 喜劇",
        "unit": 11,
        "example": "Ziri's comedy contains vulgarity.",
        "exampleZh": "齊日的喜劇包含粗俗之處。"
    },
    {
        "id": 20721,
        "en": "comfort",
        "kk": "/ˈkəmfɝt/",
        "zh": "v. 安慰；慰問 n安逸；舒適",
        "unit": 11,
        "example": "Cicadas are comforting.",
        "exampleZh": "蟬聲讓人心曠神怡。"
    },
    {
        "id": 20722,
        "en": "comfortable",
        "kk": "/ˈkəmfɝtəbəɫ/",
        "zh": "a. 舒適的；舒服的",
        "unit": 11,
        "example": "a comfortable victory",
        "exampleZh": "輕鬆的勝利"
    },
    {
        "id": 20723,
        "en": "comic",
        "kk": "/ˈkɑmɪk/",
        "zh": "adj. 滑稽的",
        "unit": 11,
        "example": "Tom collects comics.",
        "exampleZh": "湯姆收集漫畫。"
    },
    {
        "id": 20724,
        "en": "command",
        "kk": "/kəˈmænd/",
        "zh": "v. 指揮；控制",
        "unit": 11,
        "example": "Wait for my command.",
        "exampleZh": "等待我的命令。"
    },
    {
        "id": 20725,
        "en": "commander",
        "kk": "/kəˈmændɝ/",
        "zh": "n. 指揮官",
        "unit": 11,
        "example": "Dmitri is the commander.",
        "exampleZh": "德米特里是指揮官。"
    },
    {
        "id": 20726,
        "en": "commemorate",
        "kk": "/kəˈmɛmɝˌeɪt/",
        "zh": "v. 紀念",
        "unit": 11,
        "example": "Who will commemorate me when I'm dead?",
        "exampleZh": "當我死後誰來紀念我？"
    },
    {
        "id": 20727,
        "en": "commence",
        "kk": "/kəˈmɛns/",
        "zh": "v. 開始",
        "unit": 11,
        "example": "a public inquiry is due to commence on the 16th",
        "exampleZh": "公眾調查將於16日開始"
    },
    {
        "id": 20728,
        "en": "commend",
        "kk": "",
        "zh": "v. 稱讚",
        "unit": 11,
        "example": "You are to be commended for that.",
        "exampleZh": "你應該因此受到讚揚。"
    },
    {
        "id": 20729,
        "en": "comment",
        "kk": "/ˈkɑmɛnt/",
        "zh": "n. 註釋；評論v 下評論",
        "unit": 11,
        "example": "They posted comments.",
        "exampleZh": "他們發表了評論。"
    },
    {
        "id": 20730,
        "en": "commerce",
        "kk": "/ˈkɑmɝs/",
        "zh": "n. 商業；貿易",
        "unit": 11,
        "example": "English is useful in commerce.",
        "exampleZh": "英語在商業上很有用。"
    },
    {
        "id": 20731,
        "en": "commercial",
        "kk": "/kəˈmɝʃəɫ/",
        "zh": "a. 商業的；商務的 n 廣告",
        "unit": 11,
        "example": "We hate commercials.",
        "exampleZh": "我們討厭廣告。"
    },
    {
        "id": 20732,
        "en": "commission",
        "kk": "/kəˈmɪʃən/",
        "zh": "n. 佣金；委任 v 委任；委託",
        "unit": 11,
        "example": "he has resigned his commission",
        "exampleZh": "他已辭去職務"
    },
    {
        "id": 20733,
        "en": "commit",
        "kk": "/kəˈmɪt/",
        "zh": "v. 犯（罪）；做（錯事等）",
        "unit": 11,
        "example": "Someone commited suicide.",
        "exampleZh": "有人自殺了。"
    },
    {
        "id": 20734,
        "en": "commitment",
        "kk": "/kəˈmɪtmənt/",
        "zh": "n. 託付；交託",
        "unit": 11,
        "example": "the company's commitment to quality",
        "exampleZh": "公司對品質的承諾"
    },
    {
        "id": 20735,
        "en": "committee",
        "kk": "/kəˈmɪti/",
        "zh": "n. 委員會",
        "unit": 11,
        "example": "Tom is on several committees.",
        "exampleZh": "湯姆是多個委員會的成員。"
    },
    {
        "id": 20736,
        "en": "commodity",
        "kk": "/kəˈmɑdəti/",
        "zh": "n. 商品；日用品",
        "unit": 11,
        "example": "Commodity prices were rising.",
        "exampleZh": "大宗商品價格不斷上漲。"
    },
    {
        "id": 20737,
        "en": "common",
        "kk": "/ˈkɑmən/",
        "zh": "a. 普通的；常見的",
        "unit": 11,
        "example": "the common or vernacular name",
        "exampleZh": "俗名或俗名"
    },
    {
        "id": 20738,
        "en": "commonly",
        "kk": "",
        "zh": "adv. 通常",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20739,
        "en": "communicate",
        "kk": "/kəmˈjunəˌkeɪt/",
        "zh": "v. 溝通",
        "unit": 11,
        "example": "We communicate assertively.",
        "exampleZh": "我們自信地溝通。"
    },
    {
        "id": 20740,
        "en": "communication",
        "kk": "/kəmˌjunəˈkeɪʃən/",
        "zh": "n. 溝通；交流",
        "unit": 11,
        "example": "Jonas lost communication.",
        "exampleZh": "喬納斯失去了聯繫。"
    },
    {
        "id": 20741,
        "en": "commute",
        "kk": "/kəmˈjut/",
        "zh": "v. 通勤；替代；代償",
        "unit": 11,
        "example": "the daily commute",
        "exampleZh": "日常通勤"
    },
    {
        "id": 20742,
        "en": "commuter",
        "kk": "/kəmˈjutɝ/",
        "zh": "n. 通勤者",
        "unit": 11,
        "example": "Commuters should anticipate traffic delays.",
        "exampleZh": "通勤者應預見交通延誤。"
    },
    {
        "id": 20743,
        "en": "compact",
        "kk": "/ˈkɑmpækt/",
        "zh": "adj. 緊湊的",
        "unit": 11,
        "example": "strength is then introduced by infiltrating glass into the compact",
        "exampleZh": "然後透過將玻璃滲透到緊湊體中來引入強度"
    },
    {
        "id": 20744,
        "en": "companion",
        "kk": "/kəmˈpænjən/",
        "zh": "n. 同伴",
        "unit": 11,
        "example": "You have many companions.",
        "exampleZh": "你有很多同伴。"
    },
    {
        "id": 20745,
        "en": "company",
        "kk": "/ˈkəmpəˌni/",
        "zh": "n. 陪伴；公司",
        "unit": 11,
        "example": "a shipping company",
        "exampleZh": "一家船運公司"
    },
    {
        "id": 20746,
        "en": "comparable",
        "kk": "/ˈkɑmpɝəbəɫ/",
        "zh": "adj. 可比較的",
        "unit": 11,
        "example": "flaked stone and bone tools comparable to Neanderthal man's tools",
        "exampleZh": "片狀石器和骨器可與尼安德塔人的工具相媲美"
    },
    {
        "id": 20747,
        "en": "comparative",
        "kk": "/kəmˈpɛɹətɪv/",
        "zh": "adj. 比較的",
        "unit": 11,
        "example": "he returned to the comparative comfort of his own home",
        "exampleZh": "他回到了自己相對舒適的家"
    },
    {
        "id": 20748,
        "en": "compare",
        "kk": "/kəmˈpɛɹ/",
        "zh": "v. 比較；對照",
        "unit": 11,
        "example": "sales were modest and cannot compare with the glory days of 1989",
        "exampleZh": "銷量平平，無法與 1989 年的輝煌歲月相比"
    },
    {
        "id": 20749,
        "en": "comparison",
        "kk": "/kəmˈpɛɹəsən/",
        "zh": "n. 比較；對照",
        "unit": 11,
        "example": "The comparison is apt.",
        "exampleZh": "這個對比是恰當的。"
    },
    {
        "id": 20750,
        "en": "compass",
        "kk": "/ˈkəmpəs/",
        "zh": "n. 指南針",
        "unit": 11,
        "example": "this region had within its compass many types of agriculture",
        "exampleZh": "該地區擁有多種農業類型"
    },
    {
        "id": 20751,
        "en": "compassion",
        "kk": "/kəmˈpæʃən/",
        "zh": "n. 同情",
        "unit": 11,
        "example": "Sami showed compassion.",
        "exampleZh": "薩米表現出了同情心。"
    },
    {
        "id": 20752,
        "en": "compatible",
        "kk": "/kəmˈpætəbəɫ/",
        "zh": "a. 能共處的；可並立的",
        "unit": 11,
        "example": "the printer is fully compatible with all leading software",
        "exampleZh": "印表機與所有領先軟體完全相容"
    },
    {
        "id": 20753,
        "en": "compel",
        "kk": "/kəmˈpɛɫ/",
        "zh": "v. 強迫；強求",
        "unit": 11,
        "example": "they may compel a witness's attendance at court by issue of a summons",
        "exampleZh": "他們可以透過發出傳票迫使證人出庭"
    },
    {
        "id": 20754,
        "en": "compelling",
        "kk": "",
        "zh": "adj. 引人注目的",
        "unit": 11,
        "example": "No one has compellingly argued otherwise.",
        "exampleZh": "沒有人提出相反的令人信服的論點。"
    },
    {
        "id": 20755,
        "en": "compensate",
        "kk": "/ˈkɑmpənˌseɪt/",
        "zh": "v. 補償；賠償",
        "unit": 11,
        "example": "You'll be compensated.",
        "exampleZh": "你會得到補償的。"
    },
    {
        "id": 20756,
        "en": "compensation",
        "kk": "/ˌkɑmpənˈseɪʃən/",
        "zh": "n. 補償；賠償",
        "unit": 11,
        "example": "the gray streets of London were small compensation for the loss of her beloved Africa",
        "exampleZh": "倫敦的灰色街道只是對她失去心愛的非洲的小小的補償"
    },
    {
        "id": 20757,
        "en": "compete",
        "kk": "/kəmˈpit/",
        "zh": "v. 對抗；競爭",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20758,
        "en": "competence",
        "kk": "/ˈkɑmpətɪns/",
        "zh": "n. 能力",
        "unit": 11,
        "example": "the players displayed varying degrees of competence",
        "exampleZh": "選手們展現了不同程度的能力"
    },
    {
        "id": 20759,
        "en": "competent",
        "kk": "/ˈkɑmpətɪnt/",
        "zh": "a. 有能力的；能勝任的",
        "unit": 11,
        "example": "make sure the firm is competent to carry out the work",
        "exampleZh": "確保公司有能力進行這項工作"
    },
    {
        "id": 20760,
        "en": "competition",
        "kk": "/ˌkɑmpəˈtɪʃən/",
        "zh": "n. 比賽；競賽",
        "unit": 11,
        "example": "You have competition.",
        "exampleZh": "你有競爭。"
    },
    {
        "id": 20761,
        "en": "competitive",
        "kk": "/kəmˈpɛtətɪv/",
        "zh": "a. 競爭性的；好競爭的",
        "unit": 11,
        "example": "a car industry competitive with any in the world",
        "exampleZh": "與世界上任何一個汽車工業都具有競爭力的汽車工業"
    },
    {
        "id": 20762,
        "en": "competitor",
        "kk": "/kəmˈpɛtətɝ/",
        "zh": "n. 競爭者；對手",
        "unit": 11,
        "example": "You're a competitor.",
        "exampleZh": "你是一個競爭對手。"
    },
    {
        "id": 20763,
        "en": "compile",
        "kk": "/kəmˈpaɪɫ/",
        "zh": "v. 編譯",
        "unit": 11,
        "example": "Who compiled this list?",
        "exampleZh": "誰編製了這份清單？"
    },
    {
        "id": 20764,
        "en": "complain",
        "kk": "/kəmˈpɫeɪn/",
        "zh": "v. 抱怨",
        "unit": 11,
        "example": "her husband began to complain of headaches",
        "exampleZh": "她的丈夫開始抱怨頭痛"
    },
    {
        "id": 20765,
        "en": "complaint",
        "kk": "/kəmˈpɫeɪnt/",
        "zh": "n. 抱怨",
        "unit": 11,
        "example": "he hasn't any cause for complaint",
        "exampleZh": "他沒有任何理由抱怨"
    },
    {
        "id": 20766,
        "en": "complement",
        "kk": "/ˈkɑmpɫəmənt/",
        "zh": "n. 補充物",
        "unit": 11,
        "example": "Can I complement you?",
        "exampleZh": "我可以補充你嗎？"
    },
    {
        "id": 20767,
        "en": "complete",
        "kk": "/kəmˈpɫit/",
        "zh": "v. 競爭；比賽",
        "unit": 11,
        "example": "a complete ban on smoking",
        "exampleZh": "全面禁煙"
    },
    {
        "id": 20768,
        "en": "completion",
        "kk": "/kəmˈpɫiʃən/",
        "zh": "n. 完成；結束",
        "unit": 11,
        "example": "the completion date is early next year",
        "exampleZh": "竣工日期為明年初"
    },
    {
        "id": 20769,
        "en": "complex",
        "kk": "/ˈkɑmpɫɛks/",
        "zh": "a. 複雜的；錯綜複雜的 n 複合物；綜合體",
        "unit": 11,
        "example": "a complex of hotels",
        "exampleZh": "飯店綜合體"
    },
    {
        "id": 20770,
        "en": "complexity",
        "kk": "/kəmˈpɫɛksəti/",
        "zh": "n. 複雜性",
        "unit": 11,
        "example": "an issue of great complexity",
        "exampleZh": "一個非常複雜的問題"
    },
    {
        "id": 20771,
        "en": "compliance",
        "kk": "",
        "zh": "n. 遵守；合規",
        "unit": 11,
        "example": "they must secure each other's cooperation or compliance",
        "exampleZh": "他們必須確保彼此的合作或遵守"
    },
    {
        "id": 20772,
        "en": "complicate",
        "kk": "/ˈkɑmpɫəˌkeɪt/",
        "zh": "v. 使複雜化；使費解",
        "unit": 11,
        "example": "War is complicated.",
        "exampleZh": "戰爭是複雜的。"
    },
    {
        "id": 20773,
        "en": "complicated",
        "kk": "",
        "zh": "a. 複雜的；難懂的",
        "unit": 11,
        "example": "War is complicated.",
        "exampleZh": "戰爭是複雜的。"
    },
    {
        "id": 20774,
        "en": "complication",
        "kk": "/ˌkɑmpɫəˈkeɪʃən/",
        "zh": "n. 併發症",
        "unit": 11,
        "example": "there is a complication concerning ownership of the site",
        "exampleZh": "該網站的所有權存在複雜性"
    },
    {
        "id": 20775,
        "en": "compliment",
        "kk": "/ˈkɑmpɫəmɛnt/",
        "zh": "n. 稱讚：讚美 v 稱讚：讚美",
        "unit": 11,
        "example": "she paid me an enormous compliment",
        "exampleZh": "她給了我極大的讚美"
    },
    {
        "id": 20776,
        "en": "complimentary",
        "kk": "",
        "zh": "adj. 免費的",
        "unit": 11,
        "example": "The drinks are complimentary.",
        "exampleZh": "飲料是免費的。"
    },
    {
        "id": 20777,
        "en": "comply",
        "kk": "",
        "zh": "v. 依從；順從",
        "unit": 11,
        "example": "Tom refused to comply.",
        "exampleZh": "湯姆拒絕遵守。"
    },
    {
        "id": 20778,
        "en": "component",
        "kk": "/kəmˈpoʊnənt/",
        "zh": "n. 構成要素；零件 a 組成的；構成的",
        "unit": 11,
        "example": "light passed through a prism breaks up into its component colors",
        "exampleZh": "光透過棱鏡分解成其組成顏色"
    },
    {
        "id": 20779,
        "en": "compose",
        "kk": "/kəmˈpoʊz/",
        "zh": "v. 作（詩，曲等）；使安定",
        "unit": 11,
        "example": "He composed himself.",
        "exampleZh": "他鎮定下來。"
    },
    {
        "id": 20780,
        "en": "composer",
        "kk": "/kəmˈpoʊzɝ/",
        "zh": "n. 作曲家",
        "unit": 11,
        "example": "Composers create music.",
        "exampleZh": "作曲家創作音樂。"
    },
    {
        "id": 20781,
        "en": "composition",
        "kk": "/ˌkɑmpəˈzɪʃən/",
        "zh": "n. 寫作；作曲",
        "unit": 11,
        "example": "It's an excellent composition.",
        "exampleZh": "這是一首優秀的作品。"
    },
    {
        "id": 20782,
        "en": "compound",
        "kk": "/ˈkɑmpaʊnd/",
        "zh": "n. 混合物",
        "unit": 11,
        "example": "a compound of hydrogen and oxygen",
        "exampleZh": "氫和氧的化合物"
    },
    {
        "id": 20783,
        "en": "comprehend",
        "kk": "/ˌkɑmpɹiˈhɛnd/",
        "zh": "v. 理解；了解",
        "unit": 11,
        "example": "I simply couldn't comprehend what had happened",
        "exampleZh": "我簡直無法理解發生了什麼"
    },
    {
        "id": 20784,
        "en": "comprehension",
        "kk": "/ˌkɑmpɹiˈhɛnʃən/",
        "zh": "n. 理解",
        "unit": 11,
        "example": "That was beyond my comprehension.",
        "exampleZh": "這超出了我的理解範圍。"
    },
    {
        "id": 20785,
        "en": "comprehensive",
        "kk": "/ˌkɑmpɹiˈhɛnsɪv/",
        "zh": "a. 廣泛的；無所不包的",
        "unit": 11,
        "example": "a comprehensive collection of photographs",
        "exampleZh": "全面的照片集"
    },
    {
        "id": 20786,
        "en": "compress",
        "kk": "",
        "zh": "v. 壓縮",
        "unit": 11,
        "example": "How can I compress a PDF file?",
        "exampleZh": "如何壓縮 PDF 檔案？"
    },
    {
        "id": 20787,
        "en": "comprise",
        "kk": "/kəmˈpɹaɪz/",
        "zh": "v. 包含；包括",
        "unit": 11,
        "example": "One minute comprises sixty seconds.",
        "exampleZh": "一分鐘包括六十秒。"
    },
    {
        "id": 20788,
        "en": "compromise",
        "kk": "/ˈkɑmpɹəˌmaɪz/",
        "zh": "v. 妥協；和解 n 妥協；和解",
        "unit": 11,
        "example": "I should compromise the matter with my father",
        "exampleZh": "我應該和父親妥協"
    },
    {
        "id": 20789,
        "en": "compulsory",
        "kk": "/kəmˈpʌlsəri/",
        "zh": "adj. 義務的",
        "unit": 11,
        "example": "It's not compulsory.",
        "exampleZh": "這不是強制性的。"
    },
    {
        "id": 20790,
        "en": "compute",
        "kk": "/kəmˈpjut/",
        "zh": "v. 計算；估算",
        "unit": 11,
        "example": "modern circuitry can compute faster than any chess player",
        "exampleZh": "現代電路的計算速度比任何國際象棋棋手都快"
    },
    {
        "id": 20791,
        "en": "computer",
        "kk": "/kəmˈpjutɝ/",
        "zh": "n. 電腦",
        "unit": 11,
        "example": "my computer is frozen",
        "exampleZh": "我的電腦當機了"
    },
    {
        "id": 20792,
        "en": "conceal",
        "kk": "/kənˈsiɫ/",
        "zh": "v. 隱藏；隱瞞",
        "unit": 11,
        "example": "love that they had to conceal from others",
        "exampleZh": "他們不得不向別人隱瞞的愛"
    },
    {
        "id": 20793,
        "en": "concede",
        "kk": "/kənˈsid/",
        "zh": "v. 退讓",
        "unit": 11,
        "example": "Tom conceded the point.",
        "exampleZh": "湯姆承認了這一點。"
    },
    {
        "id": 20794,
        "en": "conceit",
        "kk": "/kənˈsit/",
        "zh": "n. 自負",
        "unit": 11,
        "example": "the idea of the wind's singing is a prime romantic conceit",
        "exampleZh": "風的歌唱的想法是一個主要的浪漫幻想"
    },
    {
        "id": 20795,
        "en": "conceive",
        "kk": "/kənˈsiv/",
        "zh": "v. 想像；設想",
        "unit": 11,
        "example": "we could not conceive of such things happening to us",
        "exampleZh": "我們無法想像這樣的事情會發生在我們身上"
    },
    {
        "id": 20796,
        "en": "concentrate",
        "kk": "/ˈkɑnsənˌtɹeɪt/",
        "zh": "v. 集中；聚集；全神貫注",
        "unit": 11,
        "example": "Tom really concentrated.",
        "exampleZh": "湯姆真的很專注。"
    },
    {
        "id": 20797,
        "en": "concentration",
        "kk": "/ˌkɑnsənˈtɹeɪʃən/",
        "zh": "n. 集中",
        "unit": 11,
        "example": "the largest concentration of Canada geese on earth",
        "exampleZh": "地球上最大的加拿大鵝集中地"
    },
    {
        "id": 20798,
        "en": "concept",
        "kk": "/ˈkɑnsɛpt/",
        "zh": "n. 概念；觀念",
        "unit": 11,
        "example": "What a crazy concept!",
        "exampleZh": "多麼瘋狂的概念啊！"
    },
    {
        "id": 20799,
        "en": "conception",
        "kk": "/kənˈsɛpʃən/",
        "zh": "n. 觀念",
        "unit": 11,
        "example": "the time between a product's conception and its launch",
        "exampleZh": "產品的構思與發布之間的時間"
    },
    {
        "id": 20800,
        "en": "concern",
        "kk": "/kənˈsɝn/",
        "zh": "v. 關於；涉及 n關心的事；關係",
        "unit": 11,
        "example": "She was concerned.",
        "exampleZh": "她很擔心。"
    },
    {
        "id": 20801,
        "en": "concerning",
        "kk": "/kənˈsɝnɪŋ/",
        "zh": "prep. 關於",
        "unit": 11,
        "example": "dreadful stories concerning a horrible beast",
        "exampleZh": "關於可怕野獸的可怕故事"
    },
    {
        "id": 20802,
        "en": "concert",
        "kk": "/ˈkɑnsɝt/",
        "zh": "n. 音樂會",
        "unit": 11,
        "example": "Enjoy the concert.",
        "exampleZh": "欣賞音樂會。"
    },
    {
        "id": 20803,
        "en": "concession",
        "kk": "/kənˈsɛʃən/",
        "zh": "n. 讓步",
        "unit": 11,
        "example": "this strict rule was relaxed by concession",
        "exampleZh": "這項嚴格的規定因讓步而放鬆"
    },
    {
        "id": 20804,
        "en": "concise",
        "kk": "/kənˈsaɪs/",
        "zh": "adj. 簡潔的",
        "unit": 11,
        "example": "a concise account of the country's history",
        "exampleZh": "該國歷史的簡述"
    },
    {
        "id": 20805,
        "en": "conclude",
        "kk": "/kənˈkɫud/",
        "zh": "v. 結束；推斷出",
        "unit": 11,
        "example": "The session was concluded.",
        "exampleZh": "會議結束。"
    },
    {
        "id": 20806,
        "en": "conclusion",
        "kk": "/kənˈkɫuʒən/",
        "zh": "n. 結論",
        "unit": 11,
        "example": "What is the conclusion?",
        "exampleZh": "結論是什麼？"
    },
    {
        "id": 20807,
        "en": "conclusive",
        "kk": "",
        "zh": "adj. 決定性的",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20808,
        "en": "concrete",
        "kk": "/ˈkɑnkɹit/",
        "zh": "a. 有形的；實在的 n 混凝土 v 凝結；固結",
        "unit": 11,
        "example": "He's a concrete person.",
        "exampleZh": "他是一個具體的人。"
    },
    {
        "id": 20809,
        "en": "concur",
        "kk": "",
        "zh": "v. 同意；一致",
        "unit": 11,
        "example": "I'm going to concur.",
        "exampleZh": "我會同意。"
    },
    {
        "id": 20810,
        "en": "condemn",
        "kk": "/kənˈdɛm/",
        "zh": "v. 譴責",
        "unit": 11,
        "example": "fair-minded people declined to condemn her on mere suspicion",
        "exampleZh": "公正的人拒絕僅僅因為懷疑而譴責她"
    },
    {
        "id": 20811,
        "en": "condense",
        "kk": "/kənˈdɛns/",
        "zh": "v. 壓縮",
        "unit": 11,
        "example": "Don't forget to buy condensed milk.",
        "exampleZh": "別忘了買煉乳。"
    },
    {
        "id": 20812,
        "en": "condition",
        "kk": "/kənˈdɪʃən/",
        "zh": "n. 情況；狀況",
        "unit": 11,
        "example": "Fuck your conditions.",
        "exampleZh": "操你的條件。"
    },
    {
        "id": 20813,
        "en": "conduct",
        "kk": "/ˈkɑndəkt/",
        "zh": "v. 帶領；實施",
        "unit": 11,
        "example": "members are bound by a code of conduct",
        "exampleZh": "成員受行為準則的約束"
    },
    {
        "id": 20814,
        "en": "conductor",
        "kk": "/kənˈdəktɝ/",
        "zh": "n. 指揮",
        "unit": 11,
        "example": "Ziri is a conductor.",
        "exampleZh": "齊裡是一位指揮家。"
    },
    {
        "id": 20815,
        "en": "cone",
        "kk": "/ˈkoʊn/",
        "zh": "n. 圓錐體",
        "unit": 11,
        "example": "Tom licked the ice cream cone.",
        "exampleZh": "湯姆舔了舔蛋捲冰淇淋。"
    },
    {
        "id": 20816,
        "en": "confer",
        "kk": "/kənˈfɝ/",
        "zh": "v. 協商",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20817,
        "en": "conference",
        "kk": "/ˈkɑnfɝəns/",
        "zh": "n. 會議724.  conﬁdent a 有自信的；確信的725.  conﬁdential a 祕密的；機密的726. conﬁrm v 證實；確定727.  conﬁrmation n 確定；確證",
        "unit": 11,
        "example": "a conference call",
        "exampleZh": "電話會議"
    },
    {
        "id": 20818,
        "en": "confess",
        "kk": "/kənˈfɛs/",
        "zh": "v. 承認",
        "unit": 11,
        "example": "once apprehended, they would confess their guilt",
        "exampleZh": "一旦被捕，他們就會認罪"
    },
    {
        "id": 20819,
        "en": "confession",
        "kk": "/kənˈfɛʃən/",
        "zh": "n. 承認",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20820,
        "en": "confide",
        "kk": "",
        "zh": "v. 吐露",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20821,
        "en": "confidence",
        "kk": "/ˈkɑnfədəns/",
        "zh": "n. 信心",
        "unit": 11,
        "example": "We gained confidence.",
        "exampleZh": "我們獲得了信心。"
    },
    {
        "id": 20822,
        "en": "confident",
        "kk": "/ˈkɑnfədənt/",
        "zh": "adj. 自信的",
        "unit": 11,
        "example": "Write confidently.",
        "exampleZh": "自信地寫作。"
    },
    {
        "id": 20823,
        "en": "confidential",
        "kk": "/ˌkɑnfəˈdɛnʃəɫ/",
        "zh": "adj. 機密的",
        "unit": 11,
        "example": "a confidential secretary",
        "exampleZh": "機要秘書"
    },
    {
        "id": 20824,
        "en": "configure",
        "kk": "",
        "zh": "v. 配置",
        "unit": 11,
        "example": "These links can be configured by site administrators.",
        "exampleZh": "這些連結可以由網站管理員配置。"
    },
    {
        "id": 20825,
        "en": "confine",
        "kk": "/kənˈfaɪn/",
        "zh": "v. 限制",
        "unit": 11,
        "example": "Where did you confine them?",
        "exampleZh": "你把他們關在哪裡了？"
    },
    {
        "id": 20826,
        "en": "confirm",
        "kk": "/kənˈfɝm/",
        "zh": "v. 確認",
        "unit": 11,
        "example": "Mr. Baker's assistant telephoned to confirm his appointment with the chairman",
        "exampleZh": "貝克先生的助理打電話確認他與董事長的任命"
    },
    {
        "id": 20827,
        "en": "confirmation",
        "kk": "",
        "zh": "n. 確認",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20828,
        "en": "conflict",
        "kk": "/ˈkɑnfɫɪkt/",
        "zh": "n. 衝突",
        "unit": 11,
        "example": "parents' and children's interests sometimes conflict",
        "exampleZh": "父母和孩子的利益有時會發生衝突"
    },
    {
        "id": 20829,
        "en": "conform",
        "kk": "/kənˈfɔɹm/",
        "zh": "v. 遵守",
        "unit": 11,
        "example": "Tom will never conform.",
        "exampleZh": "湯姆永遠不會順從。"
    },
    {
        "id": 20830,
        "en": "conformity",
        "kk": "",
        "zh": "n. 遵從",
        "unit": 11,
        "example": "We're dying from conformity.",
        "exampleZh": "我們正在死於順從。"
    },
    {
        "id": 20831,
        "en": "confront",
        "kk": "/kənˈfɹənt/",
        "zh": "v. 面對",
        "unit": 11,
        "example": "usually the best thing you can do in an embarrassing situation is to confront it head on",
        "exampleZh": "通常，在尷尬的情況下你能做的最好的事情就是直面它"
    },
    {
        "id": 20832,
        "en": "confrontation",
        "kk": "/ˌkɑnfɹənˈteɪʃən/",
        "zh": "n. 對抗",
        "unit": 11,
        "example": "a confrontation with the legislature",
        "exampleZh": "與立法機關的對抗"
    },
    {
        "id": 20833,
        "en": "confuse",
        "kk": "/kənˈfjuz/",
        "zh": "v. 使困惑；混淆",
        "unit": 11,
        "example": "Pietro was confused.",
        "exampleZh": "彼得羅很困惑。"
    },
    {
        "id": 20834,
        "en": "confusion",
        "kk": "/kənˈfjuʒən/",
        "zh": "n. 混亂；騷動",
        "unit": 11,
        "example": "there seems to be some confusion about which system does what",
        "exampleZh": "對於哪個系統做什麼似乎有些混亂"
    },
    {
        "id": 20835,
        "en": "congratulate",
        "kk": "/kənˈɡɹætʃəˌɫeɪt/",
        "zh": "v. 祝賀",
        "unit": 11,
        "example": "They congratulated me.",
        "exampleZh": "他們向我表示祝賀。"
    },
    {
        "id": 20836,
        "en": "congratulation",
        "kk": "/kənˌɡɹætʃəˈɫeɪʃən/",
        "zh": "n. 祝賀",
        "unit": 11,
        "example": "he began pumping the hand of his son in congratulation",
        "exampleZh": "他開始握著兒子的手錶示祝賀"
    },
    {
        "id": 20837,
        "en": "congregation",
        "kk": "",
        "zh": "n. 集合",
        "unit": 11,
        "example": "Donald is a congregation member.",
        "exampleZh": "唐納德是一名會眾。"
    },
    {
        "id": 20838,
        "en": "congress",
        "kk": "/ˈkɑŋɡɹəs/",
        "zh": "n. 國會",
        "unit": 11,
        "example": "Congress refused to act.",
        "exampleZh": "國會拒絕採取行動。"
    },
    {
        "id": 20839,
        "en": "connect",
        "kk": "/kəˈnɛkt/",
        "zh": "v. 連接",
        "unit": 11,
        "example": "Tom has connected.",
        "exampleZh": "湯姆已連線。"
    },
    {
        "id": 20840,
        "en": "connection",
        "kk": "/kəˈnɛkʃən/",
        "zh": "n. 連接",
        "unit": 11,
        "example": "People need connection.",
        "exampleZh": "人們需要聯繫。"
    },
    {
        "id": 20841,
        "en": "conquer",
        "kk": "/ˈkɑŋkɝ/",
        "zh": "v. 征服",
        "unit": 11,
        "example": "Who conquered Peru?",
        "exampleZh": "誰征服了秘魯？"
    },
    {
        "id": 20842,
        "en": "conquest",
        "kk": "/ˈkɑŋkwɛst/",
        "zh": "n. 征服",
        "unit": 11,
        "example": "the conquest of inflation",
        "exampleZh": "征服通貨膨脹"
    },
    {
        "id": 20843,
        "en": "conscience",
        "kk": "/ˈkɑnʃəns/",
        "zh": "n. 良心",
        "unit": 11,
        "example": "He had no conscience.",
        "exampleZh": "他沒有良心。"
    },
    {
        "id": 20844,
        "en": "conscientious",
        "kk": "/ˌkɑnʃiˈɛnʃəs/",
        "zh": "adj. 認真的",
        "unit": 11,
        "example": "a conscientious and hardworking clerk",
        "exampleZh": "認真勤奮的職員"
    },
    {
        "id": 20845,
        "en": "conscious",
        "kk": "/ˈkɑnʃəs/",
        "zh": "a. 神志清醒的；有知覺的",
        "unit": 11,
        "example": "Tom was conscious.",
        "exampleZh": "湯姆還有意識。"
    },
    {
        "id": 20846,
        "en": "consciousness",
        "kk": "",
        "zh": "n. 意念；意識",
        "unit": 11,
        "example": "Ivan lost consciousness.",
        "exampleZh": "伊万失去了知覺。"
    },
    {
        "id": 20847,
        "en": "consecutive",
        "kk": "",
        "zh": "a. 連續不斷的；連貫的",
        "unit": 11,
        "example": "a consecutive clause",
        "exampleZh": "連續子句"
    },
    {
        "id": 20848,
        "en": "consensus",
        "kk": "/kənˈsɛnsəs/",
        "zh": "n. 共識",
        "unit": 11,
        "example": "a consensus of opinion among judges",
        "exampleZh": "法官意見一致"
    },
    {
        "id": 20849,
        "en": "consent",
        "kk": "/kənˈsɛnt/",
        "zh": "n. 同意",
        "unit": 11,
        "example": "no change may be made without the consent of all the partners",
        "exampleZh": "未經全體合夥人同意不得變更"
    },
    {
        "id": 20850,
        "en": "consequence",
        "kk": "/ˈkɑnsəkwəns/",
        "zh": "n. 結果",
        "unit": 11,
        "example": "There are consequences.",
        "exampleZh": "這是有後果的。"
    },
    {
        "id": 20851,
        "en": "consequent",
        "kk": "/ˈkɑnsəkwənt/",
        "zh": "adj. 隨之發生的",
        "unit": 11,
        "example": "labor shortages would be created with a consequent increase in wages",
        "exampleZh": "勞動力短缺將導致工資上漲"
    },
    {
        "id": 20852,
        "en": "consequently",
        "kk": "",
        "zh": "ad. 結果；因此；必然地",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20853,
        "en": "conservation",
        "kk": "/ˌkɑnsɝˈveɪʃən/",
        "zh": "n. 保存",
        "unit": 11,
        "example": "they launched a week-long campaign to promote energy conservation",
        "exampleZh": "他們發起了為期一週的節能宣傳活動"
    },
    {
        "id": 20854,
        "en": "conservative",
        "kk": "/kənˈsɝvətɪv/",
        "zh": "a. 保守的；守舊的 n 保守者；守舊者",
        "unit": 11,
        "example": "We're conservatives.",
        "exampleZh": "我們是保守派。"
    },
    {
        "id": 20855,
        "en": "conserve",
        "kk": "/kənˈsɝv/",
        "zh": "v. 保存；保護",
        "unit": 11,
        "example": "the funds raised will help conserve endangered meadowlands",
        "exampleZh": "籌集的資金將有助於保護瀕危草甸"
    },
    {
        "id": 20856,
        "en": "consider",
        "kk": "/kənˈsɪdɝ/",
        "zh": "v. 考慮；細想",
        "unit": 11,
        "example": "I consider him irresponsible",
        "exampleZh": "我認為他不負責任"
    },
    {
        "id": 20857,
        "en": "considerable",
        "kk": "/kənˈsɪdɝəbəɫ/",
        "zh": "adj. 相當大的",
        "unit": 11,
        "example": "a position of considerable influence",
        "exampleZh": "有相當影響力的地位"
    },
    {
        "id": 20858,
        "en": "considerably",
        "kk": "",
        "zh": "adv. 相當地",
        "unit": 11,
        "example": "She was considerably naive.",
        "exampleZh": "她實在是太天真了。"
    },
    {
        "id": 20859,
        "en": "considerate",
        "kk": "/kənˈsɪdɝət/",
        "zh": "adj. 體貼的",
        "unit": 11,
        "example": "be considerate over your handwriting",
        "exampleZh": "體貼你的筆跡"
    },
    {
        "id": 20860,
        "en": "consideration",
        "kk": "/kənˌsɪdɝˈeɪʃən/",
        "zh": "n. 體貼；動機；原因",
        "unit": 11,
        "example": "For your consideration.",
        "exampleZh": "供您考慮。"
    },
    {
        "id": 20861,
        "en": "consist",
        "kk": "/kənˈsɪst/",
        "zh": "v. 組成；構成",
        "unit": 11,
        "example": "to turn an entire consist requires a wye",
        "exampleZh": "轉動整個組需要一個 Y 形"
    },
    {
        "id": 20862,
        "en": "consistency",
        "kk": "",
        "zh": "n. 一致；一貫",
        "unit": 11,
        "example": "Consistency is key.",
        "exampleZh": "一致性是關鍵。"
    },
    {
        "id": 20863,
        "en": "consistent",
        "kk": "/kənˈsɪstənt/",
        "zh": "a. 始終如一的；前後一致的",
        "unit": 11,
        "example": "I trained consistently.",
        "exampleZh": "我堅持不懈地訓練。"
    },
    {
        "id": 20864,
        "en": "console",
        "kk": "/ˈkɑnsoʊɫ/",
        "zh": "v. 安慰",
        "unit": 11,
        "example": "you can console yourself with the thought that you did your best",
        "exampleZh": "你可以安慰自己，你已經盡力了"
    },
    {
        "id": 20865,
        "en": "consolidate",
        "kk": "",
        "zh": "v. 鞏固",
        "unit": 11,
        "example": "We can consolidate your savings accounts.",
        "exampleZh": "我們可以整合您的儲蓄帳戶。"
    },
    {
        "id": 20866,
        "en": "conspicuous",
        "kk": "",
        "zh": "adj. 顯著的",
        "unit": 11,
        "example": "Don't be too conspicuous.",
        "exampleZh": "不要太顯眼。"
    },
    {
        "id": 20867,
        "en": "conspiracy",
        "kk": "/kənˈspɪɹəsi/",
        "zh": "n. 陰謀",
        "unit": 11,
        "example": "they were cleared of conspiracy to pervert the course of justice",
        "exampleZh": "他們被證明沒有陰謀妨礙司法公正"
    },
    {
        "id": 20868,
        "en": "constant",
        "kk": "/ˈkɑnstənt/",
        "zh": "a. 固定的；不變的",
        "unit": 11,
        "example": "He spoke constantly.",
        "exampleZh": "他不停地說話。"
    },
    {
        "id": 20869,
        "en": "constantly",
        "kk": "",
        "zh": "adv. 經常地",
        "unit": 11,
        "example": "He spoke constantly.",
        "exampleZh": "他不停地說話。"
    },
    {
        "id": 20870,
        "en": "constitute",
        "kk": "/ˈkɑnstəˌtut/",
        "zh": "v. 構成",
        "unit": 11,
        "example": "single parents constitute a great proportion of the poor",
        "exampleZh": "單親父母佔貧困人口的很大一部分"
    },
    {
        "id": 20871,
        "en": "constitution",
        "kk": "/ˌkɑnstəˈtuʃən/",
        "zh": "n. 憲法",
        "unit": 11,
        "example": "Algeria has a constitution.",
        "exampleZh": "阿爾及利亞有憲法。"
    },
    {
        "id": 20872,
        "en": "constraint",
        "kk": "",
        "zh": "n. 約束；限制",
        "unit": 11,
        "example": "Tom is into constraint and logic programming.",
        "exampleZh": "Tom 熱衷於約束和邏輯程式設計。"
    },
    {
        "id": 20873,
        "en": "construct",
        "kk": "/ˈkɑnstɹəkt/",
        "zh": "v. 建造",
        "unit": 11,
        "example": "Ideas are mental constructs.",
        "exampleZh": "想法是心理構造。"
    },
    {
        "id": 20874,
        "en": "construction",
        "kk": "/kənˈstɹəkʃən/",
        "zh": "n. 建造；建設",
        "unit": 11,
        "example": "I worked in construction.",
        "exampleZh": "我從事建築工作。"
    },
    {
        "id": 20875,
        "en": "constructive",
        "kk": "/kənˈstɹəktɪv/",
        "zh": "adj. 建設性的",
        "unit": 11,
        "example": "Fyodor got constructive criticism.",
        "exampleZh": "費奧多爾得到了建設性的批評。"
    },
    {
        "id": 20876,
        "en": "consult",
        "kk": "/kənˈsəɫt/",
        "zh": "v. 請教",
        "unit": 11,
        "example": "Tom was consulted.",
        "exampleZh": "有人諮詢了湯姆。"
    },
    {
        "id": 20877,
        "en": "consultant",
        "kk": "/kənˈsəɫtənt/",
        "zh": "n. 顧問；諮詢者",
        "unit": 11,
        "example": "she is currently a self-employed business consultant",
        "exampleZh": "她目前是個人商業顧問"
    },
    {
        "id": 20878,
        "en": "consultation",
        "kk": "/ˌkɑnsəɫˈteɪʃən/",
        "zh": "n. 諮詢",
        "unit": 11,
        "example": "it's always a good idea to have a consultation with a specialist who can give you more details and more insights",
        "exampleZh": "諮詢專家總是一個好主意，他可以為您提供更多細節和更多見解"
    },
    {
        "id": 20879,
        "en": "consume",
        "kk": "/kənˈsum/",
        "zh": "v. 消耗；花費",
        "unit": 11,
        "example": "Time consumes all things.",
        "exampleZh": "時間會吞噬一切。"
    },
    {
        "id": 20880,
        "en": "consumer",
        "kk": "/kənˈsumɝ/",
        "zh": "n. 消費者",
        "unit": 11,
        "example": "consumer demand",
        "exampleZh": "消費者需求"
    },
    {
        "id": 20881,
        "en": "consumption",
        "kk": "/kənˈsəmpʃən/",
        "zh": "n. 消費",
        "unit": 11,
        "example": "his mother had died of consumption",
        "exampleZh": "他的母親死於肺病"
    },
    {
        "id": 20882,
        "en": "contact",
        "kk": "/ˈkɑnˌtækt/",
        "zh": "n. 接觸；交往；聯繫 a 接觸的；接觸傳染的",
        "unit": 11,
        "example": "contact dermatitis",
        "exampleZh": "接觸性皮膚炎"
    },
    {
        "id": 20883,
        "en": "contain",
        "kk": "/kənˈteɪn/",
        "zh": "v. 包含；容納",
        "unit": 11,
        "example": "she was scarcely able to contain herself as she waited to spill the beans",
        "exampleZh": "當她等待洩露秘密時，她幾乎無法控制自己"
    },
    {
        "id": 20884,
        "en": "container",
        "kk": "/kənˈteɪnɝ/",
        "zh": "n. 容器",
        "unit": 11,
        "example": "a container ship",
        "exampleZh": "一艘貨櫃船"
    },
    {
        "id": 20885,
        "en": "contaminate",
        "kk": "/kənˈtæməˌneɪt/",
        "zh": "v. 汙染",
        "unit": 11,
        "example": "This water is contaminated.",
        "exampleZh": "這些水被污染了。"
    },
    {
        "id": 20886,
        "en": "contemplate",
        "kk": "/ˈkɑntəmˌpɫeɪt/",
        "zh": "v. 沉思",
        "unit": 11,
        "example": "the results of a trade war are too horrifying to contemplate",
        "exampleZh": "貿易戰的結果慘不忍睹"
    },
    {
        "id": 20887,
        "en": "contemporary",
        "kk": "/kənˈtɛmpɝˌɛɹi/",
        "zh": "a. 當代的；同時代的",
        "unit": 11,
        "example": "contemporary art",
        "exampleZh": "當代藝術"
    },
    {
        "id": 20888,
        "en": "contempt",
        "kk": "/kənˈtɛmpt/",
        "zh": "n. 輕視",
        "unit": 11,
        "example": "Money breeds contempt.",
        "exampleZh": "金錢會滋生輕視。"
    },
    {
        "id": 20889,
        "en": "contend",
        "kk": "/kənˈtɛnd/",
        "zh": "v. 競爭",
        "unit": 11,
        "example": "she had to contend with his uncertain temper",
        "exampleZh": "她必須應付他反覆無常的脾氣"
    },
    {
        "id": 20890,
        "en": "content",
        "kk": "/ˈkɑntɛnt/",
        "zh": "n. 滿足 a 滿足的；滿意的 v 滿足",
        "unit": 11,
        "example": "Dmitri was contented.",
        "exampleZh": "德米特里很滿意。"
    },
    {
        "id": 20891,
        "en": "contention",
        "kk": "",
        "zh": "n. 爭論",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20892,
        "en": "contest",
        "kk": "/ˈkɑntɛst/",
        "zh": "v. 競爭；角逐 n比賽",
        "unit": 11,
        "example": "He won the contest.",
        "exampleZh": "他贏得了比賽。"
    },
    {
        "id": 20893,
        "en": "context",
        "kk": "/ˈkɑntɛkst/",
        "zh": "n. 來龍去脈；背景",
        "unit": 11,
        "example": "What's the context?",
        "exampleZh": "背景是什麼？"
    },
    {
        "id": 20894,
        "en": "continent",
        "kk": "/ˈkɑntənənt/",
        "zh": "n. 大陸",
        "unit": 11,
        "example": "Europe is a continent.",
        "exampleZh": "歐洲是一個大陸。"
    },
    {
        "id": 20895,
        "en": "contingency",
        "kk": "",
        "zh": "n. 意外事故",
        "unit": 11,
        "example": "Do we have a contingency plan?",
        "exampleZh": "我們有應急計劃嗎？"
    },
    {
        "id": 20896,
        "en": "continue",
        "kk": "/kənˈtɪnju/",
        "zh": "v. 繼續；持續",
        "unit": 11,
        "example": "they have indicated their willingness to continue in office",
        "exampleZh": "他們已表示願意繼續任職"
    },
    {
        "id": 20897,
        "en": "continuous",
        "kk": "/kənˈtɪnjuəs/",
        "zh": "a. 連續的；不斷的",
        "unit": 11,
        "example": "there are continuous advances in design and production",
        "exampleZh": "設計和生產不斷進步"
    },
    {
        "id": 20898,
        "en": "contract",
        "kk": "/ˈkɑnˌtɹækt/",
        "zh": "n. 合約 v 締結；承包",
        "unit": 11,
        "example": "South can make the contract with correct play",
        "exampleZh": "南方可以透過正確的表現來簽訂合約"
    },
    {
        "id": 20899,
        "en": "contractor",
        "kk": "/ˈkɑnˌtɹæktɝ/",
        "zh": "n. 立契約者；承包人",
        "unit": 11,
        "example": "Ziri is a contractor.",
        "exampleZh": "Ziri 是一名承包商。"
    },
    {
        "id": 20900,
        "en": "contradict",
        "kk": "/ˌkɑntɹəˈdɪkt/",
        "zh": "v. 反駁",
        "unit": 11,
        "example": "She contradicts herself.",
        "exampleZh": "她自相矛盾。"
    },
    {
        "id": 20901,
        "en": "contradiction",
        "kk": "/ˌkɑntɹəˈdɪkʃən/",
        "zh": "n. 矛盾",
        "unit": 11,
        "example": "the experiment provides a contradiction of the hypothesis",
        "exampleZh": "實驗提供了與假設相矛盾的結果"
    },
    {
        "id": 20902,
        "en": "contrary",
        "kk": "/ˈkɑntɹɛɹi/",
        "zh": "a. 相反的；對立的 ad 相反地；反對地",
        "unit": 11,
        "example": "I know nothing to the contrary.",
        "exampleZh": "我不知道相反的情況。"
    },
    {
        "id": 20903,
        "en": "contrast",
        "kk": "/ˈkɑntɹæst/",
        "zh": "n. 對比",
        "unit": 11,
        "example": "Red contrasts well with blue.",
        "exampleZh": "紅色與藍色形成鮮明對比。"
    },
    {
        "id": 20904,
        "en": "contribute",
        "kk": "/kənˈtɹɪbjut/",
        "zh": "v. 貢獻",
        "unit": 11,
        "example": "Anyone may contribute.",
        "exampleZh": "任何人都可以做出貢獻。"
    },
    {
        "id": 20905,
        "en": "contribution",
        "kk": "/ˌkɑntɹəbˈjuʃən/",
        "zh": "n. 貢獻",
        "unit": 11,
        "example": "he made a lasting contribution by designing the modern radio telescope",
        "exampleZh": "他透過設計現代電波望遠鏡做出了持久的貢獻"
    },
    {
        "id": 20906,
        "en": "contributor",
        "kk": "",
        "zh": "n. 貢獻者",
        "unit": 11,
        "example": "We're Wikipedia contributors.",
        "exampleZh": "我們是維基百科的貢獻者。"
    },
    {
        "id": 20907,
        "en": "contrive",
        "kk": "",
        "zh": "v. 發明",
        "unit": 11,
        "example": "This is a chaotic and contrived attempt.",
        "exampleZh": "這是一種混亂且人為的嘗試。"
    },
    {
        "id": 20908,
        "en": "control",
        "kk": "/kənˈtɹoʊɫ/",
        "zh": "v. 控制；支配 n支配；控制",
        "unit": 11,
        "example": "passport control",
        "exampleZh": "護照檢查"
    },
    {
        "id": 20909,
        "en": "controversial",
        "kk": "/ˌkɑntɹəˈvɝʃəɫ/",
        "zh": "adj. 有爭議的",
        "unit": 11,
        "example": "years of wrangling over a controversial bypass",
        "exampleZh": "多年來圍繞著有爭議的繞行爭論"
    },
    {
        "id": 20910,
        "en": "controversy",
        "kk": "/ˈkɑntɹəˌvɝsi/",
        "zh": "n. 爭議",
        "unit": 11,
        "example": "the announcement ended a protracted controversy",
        "exampleZh": "這項公告結束了曠日持久的爭議"
    },
    {
        "id": 20911,
        "en": "convene",
        "kk": "",
        "zh": "v. 召集",
        "unit": 11,
        "example": "The assembly will convene tomorrow.",
        "exampleZh": "大會將於明天召開。"
    },
    {
        "id": 20912,
        "en": "convenience",
        "kk": "/kənˈvinjəns/",
        "zh": "n. 便利；方便",
        "unit": 11,
        "example": "the convenience of a portable phone",
        "exampleZh": "手機的便利性"
    },
    {
        "id": 20913,
        "en": "convenient",
        "kk": "/kənˈvinjənt/",
        "zh": "a. 便利的：方便的",
        "unit": 11,
        "example": "the 34-story building is convenient to downtown",
        "exampleZh": "34層大樓，去市中心很方便"
    },
    {
        "id": 20914,
        "en": "convention",
        "kk": "/kənˈvɛnʃən/",
        "zh": "n. 會議；大會；集合",
        "unit": 11,
        "example": "I shit on conventions.",
        "exampleZh": "我討厭慣例。"
    },
    {
        "id": 20915,
        "en": "conventional",
        "kk": "/kənˈvɛnʃənəɫ/",
        "zh": "a. 習慣的；慣例的",
        "unit": 11,
        "example": "Conventional oil is cheaper.",
        "exampleZh": "傳統石油較便宜。"
    },
    {
        "id": 20916,
        "en": "converge",
        "kk": "",
        "zh": "v. 匯聚",
        "unit": 11,
        "example": "This algorithm doesn't converge.",
        "exampleZh": "該演算法不收斂。"
    },
    {
        "id": 20917,
        "en": "conversation",
        "kk": "/ˌkɑnvɝˈseɪʃən/",
        "zh": "n. 會話；對話",
        "unit": 11,
        "example": "the two men were deep in conversation",
        "exampleZh": "兩人正在深入交談"
    },
    {
        "id": 20918,
        "en": "converse",
        "kk": "/ˈkɑnvɝs/",
        "zh": "v. 交談",
        "unit": 11,
        "example": "his converse at such seasons was always elevating",
        "exampleZh": "他在這樣的季節裡的對話總是令人振奮"
    },
    {
        "id": 20919,
        "en": "conversion",
        "kk": "",
        "zh": "n. 轉換",
        "unit": 11,
        "example": "Conversion therapy kills.",
        "exampleZh": "轉化療法會致命。"
    },
    {
        "id": 20920,
        "en": "convert",
        "kk": "/ˈkɑnvɝt/",
        "zh": "v. 轉換",
        "unit": 11,
        "example": "he is a recent convert to the Church",
        "exampleZh": "他是最近才皈依教會的"
    },
    {
        "id": 20921,
        "en": "convey",
        "kk": "/kənˈveɪ/",
        "zh": "v. 告知；傳達",
        "unit": 11,
        "example": "I conveyed the message to him.",
        "exampleZh": "我把這個消息轉達給了他。"
    },
    {
        "id": 20922,
        "en": "convict",
        "kk": "/ˈkɑnvɪkt/",
        "zh": "v. 定罪",
        "unit": 11,
        "example": "She was convicted.",
        "exampleZh": "她被定罪了。"
    },
    {
        "id": 20923,
        "en": "conviction",
        "kk": "/kənˈvɪkʃən/",
        "zh": "n. 定罪；確信",
        "unit": 11,
        "example": "his voice lacked conviction",
        "exampleZh": "他的聲音缺乏說服力"
    },
    {
        "id": 20924,
        "en": "convince",
        "kk": "/kənˈvɪns/",
        "zh": "v. 說服",
        "unit": 11,
        "example": "Tom was convinced.",
        "exampleZh": "湯姆被說服了。"
    },
    {
        "id": 20925,
        "en": "convincing",
        "kk": "",
        "zh": "adj. 令人信服的",
        "unit": 11,
        "example": "It was convincing.",
        "exampleZh": "這是有說服力的。"
    },
    {
        "id": 20926,
        "en": "cook",
        "kk": "/ˈkʊk/",
        "zh": "v. 烹調",
        "unit": 11,
        "example": "a short order cook",
        "exampleZh": "速食廚師"
    },
    {
        "id": 20927,
        "en": "cool",
        "kk": "/ˈkuɫ/",
        "zh": "adj. 涼爽的",
        "unit": 11,
        "example": "he made no concessions to fashion, yet somehow he was hip and cool",
        "exampleZh": "他對時尚毫不讓步，但不知怎的，他又時髦又酷"
    },
    {
        "id": 20928,
        "en": "cooperate",
        "kk": "/ˈkwɑpɝˌeɪt/",
        "zh": "v. 合作",
        "unit": 11,
        "example": "Tom has cooperated.",
        "exampleZh": "湯姆已經合作了。"
    },
    {
        "id": 20929,
        "en": "cooperation",
        "kk": "/ˌkwɑpɝˈeɪʃən/",
        "zh": "n. 合作；協力",
        "unit": 11,
        "example": "they worked in close cooperation with the AAA",
        "exampleZh": "他們與 AAA 密切合作"
    },
    {
        "id": 20930,
        "en": "cooperative",
        "kk": "/koʊˈɑpɝˌeɪtɪv/",
        "zh": "adj. 合作的",
        "unit": 11,
        "example": "Was Tom cooperative?",
        "exampleZh": "湯姆合作嗎？"
    },
    {
        "id": 20931,
        "en": "coordinate",
        "kk": "/koʊˈɔɹdəˌneɪt/",
        "zh": "v. 協調；調節",
        "unit": 11,
        "example": "you will coordinate with consultants and other departments on a variety of projects",
        "exampleZh": "您將與顧問和其他部門協調各種項目"
    },
    {
        "id": 20932,
        "en": "coordination",
        "kk": "",
        "zh": "n. 協調",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20933,
        "en": "cop",
        "kk": "/ˈkɑp/",
        "zh": "n. 警察",
        "unit": 11,
        "example": "Cops love doughnuts.",
        "exampleZh": "警察喜歡甜甜圈。"
    },
    {
        "id": 20934,
        "en": "cope",
        "kk": "/ˈkoʊp/",
        "zh": "v. 應付；處理",
        "unit": 11,
        "example": "I cope with stress.",
        "exampleZh": "我應對壓力。"
    },
    {
        "id": 20935,
        "en": "copy",
        "kk": "/ˈkɑpi/",
        "zh": "v. 抄寫；複製 n 抄寫；副本",
        "unit": 11,
        "example": "this is Edwards, do you copy, over",
        "exampleZh": "這是愛德華茲，聽到了嗎，結束"
    },
    {
        "id": 20936,
        "en": "copyright",
        "kk": "/ˈkɑpiˌɹaɪt/",
        "zh": "n. 版權",
        "unit": 11,
        "example": "permission to reproduce photographs and other copyright material",
        "exampleZh": "複製照片和其他版權資料的許可"
    },
    {
        "id": 20937,
        "en": "core",
        "kk": "/ˈkɔɹ/",
        "zh": "n. 核心",
        "unit": 11,
        "example": "Don't eat apple cores.",
        "exampleZh": "不要吃蘋果核。"
    },
    {
        "id": 20938,
        "en": "corner",
        "kk": "/ˈkɔɹnɝ/",
        "zh": "n. 角落",
        "unit": 11,
        "example": "whether they will corner the market in graphics software remains to be seen",
        "exampleZh": "他們是否會壟斷圖形軟體市場還有待觀察"
    },
    {
        "id": 20939,
        "en": "corporate",
        "kk": "/ˈkɔɹpɝət/",
        "zh": "a. 全體的；共同的 n 企業；集團",
        "unit": 11,
        "example": "local authorities, like other corporate bodies, may reduce capital spending",
        "exampleZh": "地方當局與其他法人機構一樣，可能會減少資本支出"
    },
    {
        "id": 20940,
        "en": "corporation",
        "kk": "/ˌkɔɹpɝˈeɪʃən/",
        "zh": "n. 公司；法人",
        "unit": 11,
        "example": "Corporations are not people.",
        "exampleZh": "公司不是人。"
    },
    {
        "id": 20941,
        "en": "corps",
        "kk": "/ˈkɔɹ/",
        "zh": "n. 部隊",
        "unit": 11,
        "example": "the press corps",
        "exampleZh": "記者團"
    },
    {
        "id": 20942,
        "en": "correct",
        "kk": "/kɝˈɛkt/",
        "zh": "a. 正確的；對的v 改正；糾正",
        "unit": 11,
        "example": "he was a polite man, invariably correct and pleasant with Mrs. Collins",
        "exampleZh": "他是一個有禮貌的人，對柯林斯夫人總是正確且令人愉快"
    },
    {
        "id": 20943,
        "en": "correction",
        "kk": "",
        "zh": "n. 訂正",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20944,
        "en": "correlate",
        "kk": "",
        "zh": "v. 使相關",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20945,
        "en": "correlation",
        "kk": "",
        "zh": "n. 相關性",
        "unit": 11,
        "example": "Correlation is not causation.",
        "exampleZh": "相關性不是因果關係。"
    },
    {
        "id": 20946,
        "en": "correspond",
        "kk": "/ˌkɔɹəˈspɑnd/",
        "zh": "v. 符合",
        "unit": 11,
        "example": "Tom corresponded with Mary.",
        "exampleZh": "湯姆與瑪麗通信。"
    },
    {
        "id": 20947,
        "en": "correspondence",
        "kk": "/ˌkɔɹəˈspɑndəns/",
        "zh": "n. 通信；信件",
        "unit": 11,
        "example": "his wife dealt with his private correspondence",
        "exampleZh": "他的妻子處理他的私人信件"
    },
    {
        "id": 20948,
        "en": "correspondent",
        "kk": "/ˌkɔɹəˈspɑndənt/",
        "zh": "n. 通訊記者",
        "unit": 11,
        "example": "she wasn't much of a correspondent",
        "exampleZh": "她不是什麼記者"
    },
    {
        "id": 20949,
        "en": "corridor",
        "kk": "/ˈkɔɹədɝ/",
        "zh": "n. 走廊",
        "unit": 11,
        "example": "Tom ran down the corridor.",
        "exampleZh": "湯姆跑過走廊。"
    },
    {
        "id": 20950,
        "en": "corrupt",
        "kk": "/kɝˈəpt/",
        "zh": "a. 腐敗的，貪汙的 v 墮落；腐化",
        "unit": 11,
        "example": "the play can do no harm since its audience is already corrupt",
        "exampleZh": "這齣戲不會造成任何傷害，因為它的觀眾已經腐敗了"
    },
    {
        "id": 20951,
        "en": "corruption",
        "kk": "/kɝˈəpʃən/",
        "zh": "n. 墮落；腐化",
        "unit": 11,
        "example": "a record of a word's corruption",
        "exampleZh": "單字損壞的記錄"
    },
    {
        "id": 20952,
        "en": "cost",
        "kk": "/ˈkɑst/",
        "zh": "v. 花費；付出 n 費用；成本",
        "unit": 11,
        "example": "if you want to own an island, it'll cost you",
        "exampleZh": "如果你想擁有一座島嶼，你就得付出代價"
    },
    {
        "id": 20953,
        "en": "costly",
        "kk": "/ˈkɑstɫi/",
        "zh": "adj. 昂貴的",
        "unit": 11,
        "example": "the government's biggest and most costly mistake",
        "exampleZh": "政府最大且代價最高的錯誤"
    },
    {
        "id": 20954,
        "en": "costume",
        "kk": "/ˈkɑstum/",
        "zh": "n. 服裝",
        "unit": 11,
        "example": "I know this costume.",
        "exampleZh": "我認識這套服裝。"
    },
    {
        "id": 20955,
        "en": "cottage",
        "kk": "/ˈkɑtədʒ/",
        "zh": "n. 小屋",
        "unit": 11,
        "example": "Tom built this cottage.",
        "exampleZh": "湯姆建造了這座小屋。"
    },
    {
        "id": 20956,
        "en": "cotton",
        "kk": "/ˈkɑtən/",
        "zh": "n. 棉花",
        "unit": 11,
        "example": "a cotton reel",
        "exampleZh": "棉捲軸"
    },
    {
        "id": 20957,
        "en": "couch",
        "kk": "/ˈkaʊtʃ/",
        "zh": "n. 沙發",
        "unit": 11,
        "example": "This couch is comfy.",
        "exampleZh": "這個沙發很舒服。"
    },
    {
        "id": 20958,
        "en": "cough",
        "kk": "/ˈkɑf/",
        "zh": "v. 咳嗽",
        "unit": 11,
        "example": "she gave a discreet cough",
        "exampleZh": "她小心翼翼地咳嗽了一聲"
    },
    {
        "id": 20959,
        "en": "council",
        "kk": "/ˈkaʊnsəɫ/",
        "zh": "n. 會議；議事",
        "unit": 11,
        "example": "He worked for the council.",
        "exampleZh": "他為議會工作。"
    },
    {
        "id": 20960,
        "en": "counsel",
        "kk": "/ˈkaʊnsəɫ/",
        "zh": "n. 商議；審議 v勸告；忠告",
        "unit": 11,
        "example": "the counsel for the defense",
        "exampleZh": "辯護律師"
    },
    {
        "id": 20961,
        "en": "counseling",
        "kk": "",
        "zh": "n. 輔導",
        "unit": 11,
        "example": "Tom may need counseling.",
        "exampleZh": "湯姆可能需要諮詢。"
    },
    {
        "id": 20962,
        "en": "counselor",
        "kk": "/ˈkaʊnsəɫɝ/",
        "zh": "n. 顧問",
        "unit": 11,
        "example": "Call your counselor.",
        "exampleZh": "打電話給你的輔導員。"
    },
    {
        "id": 20963,
        "en": "count",
        "kk": "/ˈkaʊnt/",
        "zh": "v. 計算",
        "unit": 11,
        "example": "I count myself fortunate to have known him",
        "exampleZh": "我認為自己很幸運能夠認識他"
    },
    {
        "id": 20964,
        "en": "counter",
        "kk": "/ˈkaʊntɝ/",
        "zh": "ad. 反方向地，相反地 a 相反的 v 反對；反擊",
        "unit": 11,
        "example": "Pay at the counter.",
        "exampleZh": "在櫃檯付款。"
    },
    {
        "id": 20965,
        "en": "counterpart",
        "kk": "/ˈkaʊntɝˌpɑɹt/",
        "zh": "n. 對應的人或物",
        "unit": 11,
        "example": "the minister held talks with his French counterpart",
        "exampleZh": "部長與法國外交部長舉行會談"
    },
    {
        "id": 20966,
        "en": "country",
        "kk": "/ˈkəntɹi/",
        "zh": "n. 國家",
        "unit": 11,
        "example": "Steinbeck country includes the Monterey Peninsula",
        "exampleZh": "斯坦貝克國家包括蒙特利半島"
    },
    {
        "id": 20967,
        "en": "countryside",
        "kk": "/ˈkəntɹiˌsaɪd/",
        "zh": "n. 鄉村",
        "unit": 11,
        "example": "they explored the surrounding countryside",
        "exampleZh": "他們探索了周圍的鄉村"
    },
    {
        "id": 20968,
        "en": "county",
        "kk": "/ˈkaʊni/",
        "zh": "n. 縣",
        "unit": 11,
        "example": "I live in Yolo County.",
        "exampleZh": "我住在約洛縣。"
    },
    {
        "id": 20969,
        "en": "couple",
        "kk": "/ˈkəpəɫ/",
        "zh": "n. 情侶；夫妻",
        "unit": 11,
        "example": "a honeymoon couple",
        "exampleZh": "一對蜜月夫婦"
    },
    {
        "id": 20970,
        "en": "courage",
        "kk": "/ˈkɝədʒ/",
        "zh": "n. 勇氣",
        "unit": 11,
        "example": "she called on all her courage to face the ordeal",
        "exampleZh": "她鼓起全部勇氣去面對磨難"
    },
    {
        "id": 20971,
        "en": "courier",
        "kk": "",
        "zh": "n. 信差；導遊；情報員",
        "unit": 11,
        "example": "the check was dispatched by courier",
        "exampleZh": "支票是透過快遞寄出的"
    },
    {
        "id": 20972,
        "en": "course",
        "kk": "/ˈkɔɹs/",
        "zh": "n. 路線；方向；課程；系列",
        "unit": 11,
        "example": "the doctor prescribed a course of antibiotics",
        "exampleZh": "醫生開了一個療程的抗生素"
    },
    {
        "id": 20973,
        "en": "court",
        "kk": "/ˈkɔɹt/",
        "zh": "n. 法庭；法院",
        "unit": 11,
        "example": "I prefer an indoor court",
        "exampleZh": "我比較喜歡室內球場"
    },
    {
        "id": 20974,
        "en": "courtesy",
        "kk": "/ˈkɝtəsi/",
        "zh": "n. 禮貌；殷勤",
        "unit": 11,
        "example": "Have some courtesy.",
        "exampleZh": "有點禮貌吧"
    },
    {
        "id": 20975,
        "en": "cover",
        "kk": "/ˈkəvɝ/",
        "zh": "v. 遮蓋；覆蓋 n 遮蓋物；封面",
        "unit": 11,
        "example": "I moved in front of Hawk to cover him as he reloaded",
        "exampleZh": "當霍克重新裝彈時，我走到他前面掩護他"
    },
    {
        "id": 20976,
        "en": "coverage",
        "kk": "/ˈkəvɝədʒ/",
        "zh": "n. 覆蓋；覆蓋範圍",
        "unit": 11,
        "example": "a network of eighty transmitters would give nationwide coverage",
        "exampleZh": "由八十個發射機組成的網路將覆蓋全國"
    },
    {
        "id": 20977,
        "en": "coward",
        "kk": "/ˈkaʊɝd/",
        "zh": "n. 懦夫",
        "unit": 11,
        "example": "Archers are cowards.",
        "exampleZh": "弓箭手都是膽小鬼。"
    },
    {
        "id": 20978,
        "en": "crack",
        "kk": "/ˈkɹæk/",
        "zh": "n. 裂縫；裂痕 v 裂開；爆裂",
        "unit": 11,
        "example": "Ziri heard cracks.",
        "exampleZh": "茲瑞聽到了破裂聲。"
    },
    {
        "id": 20979,
        "en": "craft",
        "kk": "/ˈkɹæft/",
        "zh": "n. 工藝，手藝 v 精巧地製作",
        "unit": 11,
        "example": "This is a nice craft.",
        "exampleZh": "這是一門不錯的工藝品。"
    },
    {
        "id": 20980,
        "en": "crash",
        "kk": "/ˈkɹæʃ/",
        "zh": "v. 碰撞；倒下 n 墜毀，迫降",
        "unit": 11,
        "example": "Firefox has crashed.",
        "exampleZh": "火狐瀏覽器崩潰了。"
    },
    {
        "id": 20981,
        "en": "crawl",
        "kk": "/ˈkɹɔɫ/",
        "zh": "v. 爬行",
        "unit": 11,
        "example": "Leonid crawled away.",
        "exampleZh": "列昂尼德爬走了。"
    },
    {
        "id": 20982,
        "en": "crazy",
        "kk": "/ˈkɹeɪzi/",
        "zh": "adj. 瘋狂的",
        "unit": 11,
        "example": "I'm crazy about Cindy",
        "exampleZh": "我為辛迪瘋狂"
    },
    {
        "id": 20983,
        "en": "create",
        "kk": "/kɹiˈeɪt/",
        "zh": "v. 創造；製作",
        "unit": 11,
        "example": "God created people.",
        "exampleZh": "神創造了人。"
    },
    {
        "id": 20984,
        "en": "creation",
        "kk": "/kɹiˈeɪʃən/",
        "zh": "n. 作品；製作物",
        "unit": 11,
        "example": "God is not his creation.",
        "exampleZh": "上帝不是祂的創造物。"
    },
    {
        "id": 20985,
        "en": "creative",
        "kk": "/kɹiˈeɪtɪv/",
        "zh": "a. 有創意的：創新的",
        "unit": 11,
        "example": "creative writing",
        "exampleZh": "創意寫作"
    },
    {
        "id": 20986,
        "en": "creativity",
        "kk": "/ˌkɹieɪˈtɪvəti/",
        "zh": "n. 創意；創造力",
        "unit": 11,
        "example": "Unleash your creativity!",
        "exampleZh": "釋放你的創造力！"
    },
    {
        "id": 20987,
        "en": "creator",
        "kk": "/kɹiˈeɪtɝ/",
        "zh": "n. 創造者",
        "unit": 11,
        "example": "God is the creator.",
        "exampleZh": "神是創造者。"
    },
    {
        "id": 20988,
        "en": "creature",
        "kk": "/ˈkɹitʃɝ/",
        "zh": "n. 生物；動物",
        "unit": 11,
        "example": "He saw the creature.",
        "exampleZh": "他看到了這個生物。"
    },
    {
        "id": 20989,
        "en": "credential",
        "kk": "",
        "zh": "n. 憑據；證書",
        "unit": 11,
        "example": "Enter your credentials.",
        "exampleZh": "輸入您的憑證。"
    },
    {
        "id": 20990,
        "en": "credit",
        "kk": "/ˈkɹɛdət/",
        "zh": "n. 賒帳；信譽；功勞 v 相信；把⋯⋯歸於",
        "unit": 11,
        "example": "I have bad credit.",
        "exampleZh": "我的信用不好。"
    },
    {
        "id": 20991,
        "en": "crew",
        "kk": "/ˈkɹu/",
        "zh": "n. 工作人員；船員",
        "unit": 11,
        "example": "The crew is large.",
        "exampleZh": "船員規模很大。"
    },
    {
        "id": 20992,
        "en": "crime",
        "kk": "/ˈkɹaɪm/",
        "zh": "n. 犯罪；罪刑",
        "unit": 11,
        "example": "the victims of crime",
        "exampleZh": "犯罪受害者"
    },
    {
        "id": 20993,
        "en": "criminal",
        "kk": "/ˈkɹɪmənəɫ/",
        "zh": "n. 罪犯 a 犯罪的；犯法的",
        "unit": 11,
        "example": "They're criminals.",
        "exampleZh": "他們是罪犯。"
    },
    {
        "id": 20994,
        "en": "cripple",
        "kk": "/ˈkɹɪpəɫ/",
        "zh": "v. 使殘廢",
        "unit": 11,
        "example": "You crippled Mina.",
        "exampleZh": "你把米娜弄殘了。"
    },
    {
        "id": 20995,
        "en": "crisis",
        "kk": "/ˈkɹaɪsəs/",
        "zh": "n. 困難；危及",
        "unit": 11,
        "example": "a crisis point of history",
        "exampleZh": "歷史的危機點"
    },
    {
        "id": 20996,
        "en": "crisp",
        "kk": "/ˈkɹɪsp/",
        "zh": "adj. 脆的",
        "unit": 11,
        "example": "a crisp autumn day",
        "exampleZh": "秋高氣爽的一天"
    },
    {
        "id": 20997,
        "en": "criteria",
        "kk": "",
        "zh": "n. 標準",
        "unit": 11,
        "example": "He judges me based on superficial criteria.",
        "exampleZh": "他根據膚淺的標準來評判我。"
    },
    {
        "id": 20998,
        "en": "criterion",
        "kk": "/kɹaɪˈtɪɹiən/",
        "zh": "n. 標準；準則",
        "unit": 11,
        "example": "This is a secondary criterion.",
        "exampleZh": "這是次要標準。"
    },
    {
        "id": 20999,
        "en": "critic",
        "kk": "/ˈkɹɪtɪk/",
        "zh": "n. 評論家",
        "unit": 11,
        "example": "a film critic",
        "exampleZh": "影評人"
    },
    {
        "id": 21000,
        "en": "critical",
        "kk": "/ˈkɹɪtɪkəɫ/",
        "zh": "a. 批判的；評論的",
        "unit": 11,
        "example": "Safety is critical.",
        "exampleZh": "安全至關重要。"
    },
    {
        "id": 21001,
        "en": "criticism",
        "kk": "/ˈkɹɪtɪˌsɪzəm/",
        "zh": "n. 批評",
        "unit": 11,
        "example": "Yanni accepts criticism.",
        "exampleZh": "雅尼接受批評。"
    },
    {
        "id": 21002,
        "en": "criticize",
        "kk": "/ˈkɹɪtɪˌsaɪz/",
        "zh": "v. 批判；評論",
        "unit": 11,
        "example": "She criticized him.",
        "exampleZh": "她批評他。"
    },
    {
        "id": 21003,
        "en": "crop",
        "kk": "/ˈkɹɑp/",
        "zh": "n. 作物：莊稼 v 播種",
        "unit": 11,
        "example": "she has her hair cut in a short crop",
        "exampleZh": "她把頭髮剪成了短髮"
    },
    {
        "id": 21004,
        "en": "cross",
        "kk": "/ˈkɹɔs/",
        "zh": "v. 橫穿；渡過 n 十字形；十字架",
        "unit": 11,
        "example": "she wore a cross around her neck",
        "exampleZh": "她脖子上戴著一個十字架"
    },
    {
        "id": 21005,
        "en": "crowd",
        "kk": "/ˈkɹaʊd/",
        "zh": "n. 群眾；觀眾",
        "unit": 11,
        "example": "he'd become just another face in the crowd",
        "exampleZh": "他變成了人群中的另一張臉孔"
    },
    {
        "id": 21006,
        "en": "crowded",
        "kk": "",
        "zh": "a. 擁擠的；滿的",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21007,
        "en": "crucial",
        "kk": "/ˈkɹuʃəɫ/",
        "zh": "a. 重要的；嚴酷的",
        "unit": 11,
        "example": "negotiations were at a crucial stage",
        "exampleZh": "談判正處於關鍵階段"
    },
    {
        "id": 21008,
        "en": "crude",
        "kk": "/ˈkɹud/",
        "zh": "adj. 粗糙的",
        "unit": 11,
        "example": "a crude joke",
        "exampleZh": "一個粗俗的笑話"
    },
    {
        "id": 21009,
        "en": "cruel",
        "kk": "/ˈkɹuəɫ/",
        "zh": "adj. 殘忍的",
        "unit": 11,
        "example": "people who are cruel to animals",
        "exampleZh": "虐待動物的人"
    },
    {
        "id": 21010,
        "en": "cruise",
        "kk": "/ˈkɹuz/",
        "zh": "v. 巡航；航遊 n 巡航；航遊",
        "unit": 11,
        "example": "We went on a cruise.",
        "exampleZh": "我們去搭乘遊輪旅行。"
    },
    {
        "id": 21011,
        "en": "crush",
        "kk": "/ˈkɹəʃ/",
        "zh": "v. 壓碎",
        "unit": 11,
        "example": "Jeans crush your balls.",
        "exampleZh": "牛仔褲會壓垮你的睪丸。"
    },
    {
        "id": 21012,
        "en": "cry",
        "kk": "/ˈkɹaɪ/",
        "zh": "v. 哭泣",
        "unit": 11,
        "example": "a cry of despair",
        "exampleZh": "絕望的呼喊"
    },
    {
        "id": 21013,
        "en": "crystal",
        "kk": "/ˈkɹɪstəɫ/",
        "zh": "n. 水晶",
        "unit": 11,
        "example": "a quartz crystal",
        "exampleZh": "石英晶體"
    },
    {
        "id": 21014,
        "en": "cube",
        "kk": "/ˈkjub/",
        "zh": "n. 立方體",
        "unit": 11,
        "example": "Two cubed is eight.",
        "exampleZh": "二的立方是八。"
    },
    {
        "id": 21015,
        "en": "cue",
        "kk": "/ˈkju/",
        "zh": "n. 暗示",
        "unit": 11,
        "example": "The cue ball is white.",
        "exampleZh": "主球是白色的。"
    },
    {
        "id": 21016,
        "en": "cultivate",
        "kk": "/ˈkəɫtəˌveɪt/",
        "zh": "v. 培養",
        "unit": 11,
        "example": "Cultivate your will!",
        "exampleZh": "培養你的意志！"
    },
    {
        "id": 21017,
        "en": "cultivation",
        "kk": "",
        "zh": "n. 培養",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21018,
        "en": "cultural",
        "kk": "/ˈkəɫtʃɝəɫ/",
        "zh": "adj. 文化的",
        "unit": 11,
        "example": "a cultural festival",
        "exampleZh": "文化節"
    },
    {
        "id": 21019,
        "en": "culture",
        "kk": "/ˈkəɫtʃɝ/",
        "zh": "n. 文化",
        "unit": 11,
        "example": "men of culture",
        "exampleZh": "文化人"
    },
    {
        "id": 21020,
        "en": "cupboard",
        "kk": "/ˈkəbɝd/",
        "zh": "n. 食櫥；碗櫃",
        "unit": 11,
        "example": "The cupboard is full.",
        "exampleZh": "櫃子滿了。"
    },
    {
        "id": 21021,
        "en": "cure",
        "kk": "/ˈkjʊɹ/",
        "zh": "n. 治療；痊癒 v 治癒",
        "unit": 11,
        "example": "he was beyond cure",
        "exampleZh": "他已經無法治癒了"
    },
    {
        "id": 21022,
        "en": "curiosity",
        "kk": "/ˌkjʊɹiˈɑsəti/",
        "zh": "n. 好奇心",
        "unit": 11,
        "example": "Curiosity replaced shock.",
        "exampleZh": "好奇取代了震驚。"
    },
    {
        "id": 21023,
        "en": "curious",
        "kk": "/ˈkjʊɹiəs/",
        "zh": "a. 好奇的",
        "unit": 11,
        "example": "I began to be curious about the whereabouts of the bride and groom",
        "exampleZh": "我開始好奇新郎新娘的行蹤"
    },
    {
        "id": 21024,
        "en": "curl",
        "kk": "/ˈkɝɫ/",
        "zh": "v. 捲曲",
        "unit": 11,
        "example": "Fyodor cut his curls.",
        "exampleZh": "費奧多爾剪掉了他的捲髮。"
    },
    {
        "id": 21025,
        "en": "currency",
        "kk": "/ˈkɝənsi/",
        "zh": "n. 通貨；貨幣",
        "unit": 11,
        "example": "That's the local currency.",
        "exampleZh": "那是當地貨幣。"
    },
    {
        "id": 21026,
        "en": "current",
        "kk": "/ˈkɑɹənt/",
        "zh": "a. 現時的；當前的 n 流動；水流",
        "unit": 11,
        "example": "Current times are tough.",
        "exampleZh": "當前形勢嚴峻。"
    },
    {
        "id": 21027,
        "en": "currently",
        "kk": "",
        "zh": "adv. 目前",
        "unit": 11,
        "example": "Elias is currently busy.",
        "exampleZh": "埃利亞斯目前很忙。"
    },
    {
        "id": 21028,
        "en": "curriculum",
        "kk": "/kɝˈɪkjəɫəm/",
        "zh": "n. 課程",
        "unit": 11,
        "example": "The curriculum is attached.",
        "exampleZh": "課程表附後。"
    },
    {
        "id": 21029,
        "en": "curve",
        "kk": "/ˈkɝv/",
        "zh": "n. 曲線",
        "unit": 11,
        "example": "Why are bananas curved?",
        "exampleZh": "香蕉為什麼是彎的？"
    },
    {
        "id": 21030,
        "en": "custom",
        "kk": "/ˈkəstəm/",
        "zh": "n. 習俗；慣例 a訂做的；訂製的",
        "unit": 11,
        "example": "it was my custom to nap for an hour every day",
        "exampleZh": "我的習慣是每天小睡一小時"
    },
    {
        "id": 21031,
        "en": "customer",
        "kk": "/ˈkəstəmɝ/",
        "zh": "n. 顧客；買主",
        "unit": 11,
        "example": "Mr. Harrison was a regular customer at the Golden Lion",
        "exampleZh": "哈里森先生是金獅酒店的常客"
    },
    {
        "id": 21032,
        "en": "customs",
        "kk": "/ˈkəstəmz/",
        "zh": "n. 關稅；海關",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21033,
        "en": "cut",
        "kk": "/ˈkət/",
        "zh": "v. 切割",
        "unit": 11,
        "example": "the country was cut into three parts",
        "exampleZh": "這個國家被分成三個部分"
    },
    {
        "id": 21034,
        "en": "cute",
        "kk": "/ˈkjut/",
        "zh": "adj. 可愛的",
        "unit": 11,
        "example": "the baby was so cute",
        "exampleZh": "寶寶太可愛了"
    },
    {
        "id": 21035,
        "en": "cycle",
        "kk": "/ˈsaɪkəɫ/",
        "zh": "n. 週期；循環 v 循環；輪轉D",
        "unit": 11,
        "example": "Cars repressed cycles.",
        "exampleZh": "汽車抑制了循環。"
    },
    {
        "id": 21036,
        "en": "cylinder",
        "kk": "/ˈsɪlɪndə(ɹ)/",
        "zh": "n. 圓柱體",
        "unit": 11,
        "example": "This engine has 6 cylinders.",
        "exampleZh": "這台引擎有 6 個汽缸。"
    },
    {
        "id": 21037,
        "en": "daily",
        "kk": "/ˈdeɪɫi/",
        "zh": "a. 每日的；日常的",
        "unit": 11,
        "example": "boats can be rented for a daily rate",
        "exampleZh": "可按日租用船隻"
    },
    {
        "id": 21038,
        "en": "damage",
        "kk": "/ˈdæmədʒ/",
        "zh": "n. 損害；損失 v損害；毀壞",
        "unit": 11,
        "example": "bombing caused extensive damage to the town",
        "exampleZh": "轟炸對該鎮造成了嚴重破壞"
    },
    {
        "id": 21039,
        "en": "danger",
        "kk": "/ˈdeɪndʒɝ/",
        "zh": "n. 危急；危險",
        "unit": 11,
        "example": "there was no danger of the champagne running out",
        "exampleZh": "沒有香檳用完的危險"
    },
    {
        "id": 21040,
        "en": "dangerous",
        "kk": "/ˈdeɪndʒɝəs/",
        "zh": "a. 危險的",
        "unit": 11,
        "example": "a dangerous animal",
        "exampleZh": "危險的動物"
    },
    {
        "id": 21041,
        "en": "dare",
        "kk": "/ˈdɛɹ/",
        "zh": "aux. 敢；竟敢 v 敢；膽敢 n 果敢行為；挑戰",
        "unit": 11,
        "example": "swap with me, I dare you",
        "exampleZh": "與我交換，我敢你"
    },
    {
        "id": 21042,
        "en": "dark",
        "kk": "/ˈdɑɹk/",
        "zh": "adj. 黑暗的",
        "unit": 11,
        "example": "he is dark on certain points of scripture",
        "exampleZh": "他對聖經的某些觀點很黑暗"
    },
    {
        "id": 21043,
        "en": "dash",
        "kk": "/ˈdæʃ/",
        "zh": "v. 猛衝",
        "unit": 11,
        "example": "Our hopes were dashed.",
        "exampleZh": "我們的希望破滅了。"
    },
    {
        "id": 21044,
        "en": "data",
        "kk": "/ˈdætə/",
        "zh": "n. 資料；數據",
        "unit": 11,
        "example": "there is very little data available",
        "exampleZh": "可用數據很少"
    },
    {
        "id": 21045,
        "en": "database",
        "kk": "",
        "zh": "n. 資料庫",
        "unit": 11,
        "example": "The database is down.",
        "exampleZh": "資料庫已關閉。"
    },
    {
        "id": 21046,
        "en": "date",
        "kk": "/ˈdeɪt/",
        "zh": "n. 日期；日子 v 註有日期",
        "unit": 11,
        "example": "they date the paintings to 1460–70",
        "exampleZh": "他們將這些畫作的年代定為 1460-70 年"
    },
    {
        "id": 21047,
        "en": "dawn",
        "kk": "/ˈdɔn/",
        "zh": "n. 黎明，拂曉 v 破曉；（天）剛亮",
        "unit": 11,
        "example": "the rose-pink light of dawn",
        "exampleZh": "黎明的玫瑰粉色光芒"
    },
    {
        "id": 21048,
        "en": "dead",
        "kk": "/ˈdɛd/",
        "zh": "adj. 死的",
        "unit": 11,
        "example": "he has been dead for many years",
        "exampleZh": "他已經死很多年了"
    },
    {
        "id": 21049,
        "en": "deadline",
        "kk": "/ˈdɛdˌɫaɪn/",
        "zh": "n. 截止期限；最後限期",
        "unit": 11,
        "example": "the deadline for submissions is February 5th",
        "exampleZh": "提交截止日期為2月5日"
    },
    {
        "id": 21050,
        "en": "deadly",
        "kk": "/ˈdɛdɫi/",
        "zh": "adj. 致命的",
        "unit": 11,
        "example": "we are deadly enemies",
        "exampleZh": "我們是死敵"
    },
    {
        "id": 21051,
        "en": "deaf",
        "kk": "/ˈdɛf/",
        "zh": "adj. 聾的",
        "unit": 11,
        "example": "I'm a bit deaf so you'll have to speak up",
        "exampleZh": "我有點聾所以你得大聲說話"
    },
    {
        "id": 21052,
        "en": "deal",
        "kk": "/ˈdiɫ/",
        "zh": "v. 經營；交易 n 交易",
        "unit": 11,
        "example": "he lost a great deal of blood",
        "exampleZh": "他失血過多"
    },
    {
        "id": 21053,
        "en": "dealer",
        "kk": "/ˈdiɫɝ/",
        "zh": "n. 業者；商人",
        "unit": 11,
        "example": "She's a drug dealer.",
        "exampleZh": "她是一名毒販。"
    },
    {
        "id": 21054,
        "en": "debate",
        "kk": "/dəˈbeɪt/",
        "zh": "v. 辯論；爭論 n辯論",
        "unit": 11,
        "example": "the national debate on education",
        "exampleZh": "全國教育辯論"
    },
    {
        "id": 21055,
        "en": "debris",
        "kk": "",
        "zh": "n. 碎片",
        "unit": 11,
        "example": "Debris flew everywhere.",
        "exampleZh": "碎片飛得到處都是。"
    },
    {
        "id": 21056,
        "en": "debt",
        "kk": "/ˈdɛt/",
        "zh": "n. 債務；借款",
        "unit": 11,
        "example": "a way to reduce Third World debt",
        "exampleZh": "減少第三世界債務的一種方法"
    },
    {
        "id": 21057,
        "en": "debut",
        "kk": "",
        "zh": "n. 首次露面；初次登臺",
        "unit": 11,
        "example": "Mary's band self-financed their debut single.",
        "exampleZh": "瑪麗的樂團自籌資金製作了他們的首張單曲。"
    },
    {
        "id": 21058,
        "en": "decade",
        "kk": "/ˈdɛkeɪd/",
        "zh": "n. 十；十年",
        "unit": 11,
        "example": "That was decades ago.",
        "exampleZh": "那是幾十年前的事了。"
    },
    {
        "id": 21059,
        "en": "decay",
        "kk": "/dɪˈkeɪ/",
        "zh": "v. 腐爛",
        "unit": 11,
        "example": "the decay of electrical fields in the electromagnets",
        "exampleZh": "電磁體中電場的衰減"
    },
    {
        "id": 21060,
        "en": "deceit",
        "kk": "",
        "zh": "n. 欺騙；欺詐",
        "unit": 11,
        "example": "Sami covered his deceit perfectly.",
        "exampleZh": "薩米完美地掩蓋了他的欺騙。"
    },
    {
        "id": 21061,
        "en": "deceive",
        "kk": "/dɪˈsiv/",
        "zh": "v. 欺騙；蒙蔽",
        "unit": 11,
        "example": "enabling the rulers to deceive themselves about the nature of their own rule",
        "exampleZh": "使統治者能夠在自己統治的本質上欺騙自己"
    },
    {
        "id": 21062,
        "en": "decent",
        "kk": "/ˈdisənt/",
        "zh": "a. 正派的；合乎禮儀的",
        "unit": 11,
        "example": "people need decent homes",
        "exampleZh": "人們需要體面的住房"
    },
    {
        "id": 21063,
        "en": "decide",
        "kk": "/ˌdɪˈsaɪd/",
        "zh": "v. 決定；決意",
        "unit": 11,
        "example": "we must decide the fates of the people who headed the coup",
        "exampleZh": "我們必須決定領導政變的人的命運"
    },
    {
        "id": 21064,
        "en": "decision",
        "kk": "/dɪˈsɪʒən/",
        "zh": "n. 決心；判斷",
        "unit": 11,
        "example": "I'll make the decision on my own",
        "exampleZh": "我會自己做決定"
    },
    {
        "id": 21065,
        "en": "decisive",
        "kk": "/dɪˈsaɪsɪv/",
        "zh": "a. 決定性的；決定的",
        "unit": 11,
        "example": "the Supreme Court voided the statute by a decisive 7–2 vote",
        "exampleZh": "最高法院以 7 比 2 的決定性投票結果宣布該法規無效"
    },
    {
        "id": 21066,
        "en": "deck",
        "kk": "/ˈdɛk/",
        "zh": "n. 艙面；甲板",
        "unit": 11,
        "example": "All hands on deck!",
        "exampleZh": "所有的人都在甲板上！"
    },
    {
        "id": 21067,
        "en": "declaration",
        "kk": "/ˌdɛkɫɝˈeɪʃən/",
        "zh": "n. 宣告；宣言",
        "unit": 11,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21068,
        "en": "declare",
        "kk": "/dɪˈkɫɛɹ/",
        "zh": "v. 宣告；聲明",
        "unit": 11,
        "example": "Tom declared bankruptcy.",
        "exampleZh": "湯姆宣布破產。"
    },
    {
        "id": 21069,
        "en": "decline",
        "kk": "/dɪˈkɫaɪn/",
        "zh": "v. 下降；下跌 n下降；減少",
        "unit": 11,
        "example": "He politely declined.",
        "exampleZh": "他禮貌地拒絕了。"
    },
    {
        "id": 21070,
        "en": "decorate",
        "kk": "/ˈdɛkɝˌeɪt/",
        "zh": "v. 裝飾",
        "unit": 11,
        "example": "Mary decorated it.",
        "exampleZh": "瑪麗裝飾了它。"
    },
    {
        "id": 21071,
        "en": "decoration",
        "kk": "/ˌdɛkɝˈeɪʃən/",
        "zh": "n. 裝飾",
        "unit": 12,
        "example": "pearwood inlaid with floral decoration of stained woods",
        "exampleZh": "梨木鑲嵌染色木材花卉裝飾"
    },
    {
        "id": 21072,
        "en": "decrease",
        "kk": "/ˈdiˌkɹis/",
        "zh": "v. 減；減少",
        "unit": 12,
        "example": "He decreased its value.",
        "exampleZh": "他降低了它的價值。"
    },
    {
        "id": 21073,
        "en": "dedicate",
        "kk": "/ˈdɛdəˌkeɪt/",
        "zh": "v. 奉獻；獻身",
        "unit": 12,
        "example": "you should dedicate a telephone line to each modem you plan to install",
        "exampleZh": "您應該為計劃安裝的每個數據機專用一條電話線"
    },
    {
        "id": 21074,
        "en": "dedication",
        "kk": "/ˌdɛdəˈkeɪʃən/",
        "zh": "n. 奉獻；供奉",
        "unit": 12,
        "example": "his dedication to his duties",
        "exampleZh": "他對職責的奉獻"
    },
    {
        "id": 21075,
        "en": "deduct",
        "kk": "",
        "zh": "v. 扣除；減除",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21076,
        "en": "deduction",
        "kk": "",
        "zh": "n. 扣除；減除",
        "unit": 12,
        "example": "Luxury spending is ineligible for tax deductions.",
        "exampleZh": "奢侈消費不符合稅收減免的資格。"
    },
    {
        "id": 21077,
        "en": "deed",
        "kk": "/ˈdid/",
        "zh": "n. 行為",
        "unit": 12,
        "example": "Your deeds are wanton.",
        "exampleZh": "你的行為很肆意。"
    },
    {
        "id": 21078,
        "en": "deem",
        "kk": "/ˈdim/",
        "zh": "v. 認為；以為",
        "unit": 12,
        "example": "Ziri was deemed mentally unwell.",
        "exampleZh": "齊裡被認為精神不正常。"
    },
    {
        "id": 21079,
        "en": "deep",
        "kk": "/ˈdip/",
        "zh": "a. 深的 ad 深深地n 深處",
        "unit": 12,
        "example": "a deep sleep",
        "exampleZh": "沉睡"
    },
    {
        "id": 21080,
        "en": "deepen",
        "kk": "/ˈdipən/",
        "zh": "v. 使變深；使加深；使強烈",
        "unit": 12,
        "example": "You deepened the holes.",
        "exampleZh": "你加深了洞。"
    },
    {
        "id": 21081,
        "en": "deeply",
        "kk": "",
        "zh": "adv. 深深地",
        "unit": 12,
        "example": "We breathed deeply.",
        "exampleZh": "我們深呼吸。"
    },
    {
        "id": 21082,
        "en": "deer",
        "kk": "/ˈdɪɹ/",
        "zh": "n. 鹿",
        "unit": 12,
        "example": "Deer remember faces.",
        "exampleZh": "鹿記得面孔。"
    },
    {
        "id": 21083,
        "en": "default",
        "kk": "",
        "zh": "n. 違約；拖欠；預設 v 不履行；拖欠",
        "unit": 12,
        "example": "It’s a default configuration.",
        "exampleZh": "這是預設配置。"
    },
    {
        "id": 21084,
        "en": "defeat",
        "kk": "/dɪˈfit/",
        "zh": "v. 戰勝；擊敗 n戰敗；挫折",
        "unit": 12,
        "example": "Karl was defeated.",
        "exampleZh": "卡爾被打敗了。"
    },
    {
        "id": 21085,
        "en": "defect",
        "kk": "/ˈdifɛkt/",
        "zh": "n. 缺點；缺陷 v 逃跑；脫離",
        "unit": 12,
        "example": "the property is free from defect",
        "exampleZh": "該財產沒有缺陷"
    },
    {
        "id": 21086,
        "en": "defective",
        "kk": "",
        "zh": "adj. 有缺陷的",
        "unit": 12,
        "example": "You're not defective.",
        "exampleZh": "你沒有缺陷。"
    },
    {
        "id": 21087,
        "en": "defend",
        "kk": "/dɪˈfɛnd/",
        "zh": "v. 防衛；保護",
        "unit": 12,
        "example": "Defend yourselves.",
        "exampleZh": "保衛自己。"
    },
    {
        "id": 21088,
        "en": "defendant",
        "kk": "",
        "zh": "n. 被告",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21089,
        "en": "defense",
        "kk": "/dɪˈfɛns/",
        "zh": "n. 防衛；保護",
        "unit": 12,
        "example": "defense policy",
        "exampleZh": "國防政策"
    },
    {
        "id": 21090,
        "en": "defensive",
        "kk": "/dɪˈfɛnsɪv/",
        "zh": "a. 防衛的；保衛的896. deﬁciency n 不足；缺乏897.  deﬁnite a 明確的；確切的898.  deﬂate v 抽出⋯⋯中的氣899. deﬂect v 使偏斜；使轉向",
        "unit": 12,
        "example": "They got defensive.",
        "exampleZh": "他們採取了防禦措施。"
    },
    {
        "id": 21091,
        "en": "defer",
        "kk": "",
        "zh": "v. 推遲",
        "unit": 12,
        "example": "I'll defer to your expertise.",
        "exampleZh": "我會尊重你的專業知識。"
    },
    {
        "id": 21092,
        "en": "deficiency",
        "kk": "/dɪˈfɪʃənsi/",
        "zh": "n. 缺乏",
        "unit": 12,
        "example": "vitamin A deficiency in children",
        "exampleZh": "兒童維生素A缺乏症"
    },
    {
        "id": 21093,
        "en": "deficit",
        "kk": "",
        "zh": "n. 赤字",
        "unit": 12,
        "example": "There's a trade deficit.",
        "exampleZh": "存在貿易逆差。"
    },
    {
        "id": 21094,
        "en": "define",
        "kk": "/dɪˈfaɪn/",
        "zh": "v. 定義",
        "unit": 12,
        "example": "His chin is defined.",
        "exampleZh": "他的下巴輪廓分明。"
    },
    {
        "id": 21095,
        "en": "definite",
        "kk": "/ˈdɛfənət/",
        "zh": "adj. 明確的",
        "unit": 12,
        "example": "Definitely try this.",
        "exampleZh": "一定要試試這個。"
    },
    {
        "id": 21096,
        "en": "definitely",
        "kk": "",
        "zh": "adv. 肯定地",
        "unit": 12,
        "example": "Definitely try this.",
        "exampleZh": "一定要試試這個。"
    },
    {
        "id": 21097,
        "en": "definition",
        "kk": "/ˌdɛfəˈnɪʃən/",
        "zh": "n. 定義",
        "unit": 12,
        "example": "a dictionary definition of the verb",
        "exampleZh": "動詞的字典定義"
    },
    {
        "id": 21098,
        "en": "degree",
        "kk": "/dɪˈɡɹi/",
        "zh": "n. 度，度數；程度",
        "unit": 12,
        "example": "a question of degree",
        "exampleZh": "程度問題"
    },
    {
        "id": 21099,
        "en": "delay",
        "kk": "/dɪˈɫeɪ/",
        "zh": "v. 拖延；耽擱 n 延遲；耽擱",
        "unit": 12,
        "example": "I set off without delay",
        "exampleZh": "我毫不拖延地出發了"
    },
    {
        "id": 21100,
        "en": "delegate",
        "kk": "/ˈdɛɫəˌɡeɪt/",
        "zh": "v. 委派⋯⋯為代表；委派（某人）做",
        "unit": 12,
        "example": "Who will be the delegate?",
        "exampleZh": "誰將成為代表？"
    },
    {
        "id": 21101,
        "en": "delegation",
        "kk": "/ˌdɛɫəˈɡeɪʃən/",
        "zh": "n. 代表團",
        "unit": 12,
        "example": "One delegation followed another.",
        "exampleZh": "一個代表團接著一個代表團。"
    },
    {
        "id": 21102,
        "en": "delete",
        "kk": "",
        "zh": "v. 刪除",
        "unit": 12,
        "example": "Delete this, please.",
        "exampleZh": "請刪除這個。"
    },
    {
        "id": 21103,
        "en": "deliberate",
        "kk": "/dɪˈɫɪbɝˌeɪt/",
        "zh": "a. 深思熟慮的；慎重的 v 仔細考慮；思考",
        "unit": 12,
        "example": "a careful and deliberate worker",
        "exampleZh": "細心而深思熟慮的工人"
    },
    {
        "id": 21104,
        "en": "deliberately",
        "kk": "",
        "zh": "ad. 慎重地；謹慎地",
        "unit": 12,
        "example": "Tom spoke deliberately.",
        "exampleZh": "湯姆故意說話。"
    },
    {
        "id": 21105,
        "en": "delicate",
        "kk": "/ˈdɛɫəkət/",
        "zh": "a. 易碎的；嬌貴的；纖弱的",
        "unit": 12,
        "example": "He has delicate hands.",
        "exampleZh": "他有一雙纖細的手。"
    },
    {
        "id": 21106,
        "en": "delicious",
        "kk": "/dɪˈɫɪʃəs/",
        "zh": "a. 美味的；香噴噴的",
        "unit": 12,
        "example": "delicious home-baked brown bread",
        "exampleZh": "美味的自製黑麵包"
    },
    {
        "id": 21107,
        "en": "delight",
        "kk": "/dɪˈɫaɪt/",
        "zh": "n. 欣喜；愉快 v高興；喜愛",
        "unit": 12,
        "example": "Boris was delighted.",
        "exampleZh": "鮑里斯很高興。"
    },
    {
        "id": 21108,
        "en": "delightful",
        "kk": "/dɪˈɫaɪtfəɫ/",
        "zh": "adj. 令人愉快的",
        "unit": 12,
        "example": "Cats are delightful.",
        "exampleZh": "貓是令人愉快的。"
    },
    {
        "id": 21109,
        "en": "deliver",
        "kk": "/dɪˈɫɪvɝ/",
        "zh": "v. 投遞；傳送",
        "unit": 12,
        "example": "deliver us from misery",
        "exampleZh": "救我們脫離苦難"
    },
    {
        "id": 21110,
        "en": "delivery",
        "kk": "/dɪˈɫɪvɝi/",
        "zh": "n. 投遞；傳送",
        "unit": 12,
        "example": "You have a delivery.",
        "exampleZh": "你有送貨。"
    },
    {
        "id": 21111,
        "en": "demand",
        "kk": "/dɪˈmænd/",
        "zh": "v. 要求，請求  n要求；請求",
        "unit": 12,
        "example": "Are you demanding?",
        "exampleZh": "你要求高嗎？"
    },
    {
        "id": 21112,
        "en": "demanding",
        "kk": "/dɪˈmɑːndɪŋ/",
        "zh": "adj. 苛求的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21113,
        "en": "democracy",
        "kk": "/dɪˈmɑkɹəsi/",
        "zh": "n. 民主",
        "unit": 12,
        "example": "Democracy is dead.",
        "exampleZh": "民主已死。"
    },
    {
        "id": 21114,
        "en": "democrat",
        "kk": "/ˈdɛməˌkɹæt/",
        "zh": "n. 民主黨員",
        "unit": 12,
        "example": "Democrats should be upset.",
        "exampleZh": "民主黨人應該感到不安。"
    },
    {
        "id": 21115,
        "en": "democratic",
        "kk": "/ˌdɛməˈkɹætɪk/",
        "zh": "adj. 民主的",
        "unit": 12,
        "example": "cycling is a democratic activity that can be enjoyed by anyone",
        "exampleZh": "騎自行車是一項民主活動，任何人都可以享受"
    },
    {
        "id": 21116,
        "en": "demographic",
        "kk": "",
        "zh": "adj. 人口統計的",
        "unit": 12,
        "example": "The country's demographics are changing.",
        "exampleZh": "該國的人口結構正在改變。"
    },
    {
        "id": 21117,
        "en": "demolish",
        "kk": "",
        "zh": "v. 毀壞；破壞",
        "unit": 12,
        "example": "He demolished the house.",
        "exampleZh": "他拆毀了房子。"
    },
    {
        "id": 21118,
        "en": "demonstrate",
        "kk": "/ˈdɛmənˌstɹeɪt/",
        "zh": "v. 論證；證明；示威",
        "unit": 12,
        "example": "she began to demonstrate a new-found confidence",
        "exampleZh": "她開始展現新的自信"
    },
    {
        "id": 21119,
        "en": "demonstration",
        "kk": "/ˌdɛmənˈstɹeɪʃən/",
        "zh": "n. 論證；證明",
        "unit": 12,
        "example": "He requested a demonstration.",
        "exampleZh": "他要求進行示威。"
    },
    {
        "id": 21120,
        "en": "denial",
        "kk": "/dɪˈnaɪəɫ/",
        "zh": "n. 否認；否定",
        "unit": 12,
        "example": "Lukas was in denial.",
        "exampleZh": "盧卡斯否認。"
    },
    {
        "id": 21121,
        "en": "denounce",
        "kk": "/dɪˈnaʊns/",
        "zh": "v. 譴責",
        "unit": 12,
        "example": "They denounced Tom.",
        "exampleZh": "他們譴責湯姆。"
    },
    {
        "id": 21122,
        "en": "dense",
        "kk": "/ˈdɛns/",
        "zh": "a. 密集的，稠密的",
        "unit": 12,
        "example": "Dense clouds formed.",
        "exampleZh": "形成了濃密的雲層。"
    },
    {
        "id": 21123,
        "en": "density",
        "kk": "/ˈdɛnsəti/",
        "zh": "n. 密集度；稠密度",
        "unit": 12,
        "example": "chip density doubles every eighteen months",
        "exampleZh": "晶片密度每十八個月翻一番"
    },
    {
        "id": 21124,
        "en": "dentist",
        "kk": "/ˈdɛnɪst/",
        "zh": "n. 牙醫",
        "unit": 12,
        "example": "Maria is a dentist.",
        "exampleZh": "瑪麗亞是一名牙醫。"
    },
    {
        "id": 21125,
        "en": "deny",
        "kk": "/dɪˈnaɪ/",
        "zh": "v. 否定，否認",
        "unit": 12,
        "example": "they deny any responsibility for the tragedy",
        "exampleZh": "他們否認對這場悲劇負有任何責任"
    },
    {
        "id": 21126,
        "en": "depart",
        "kk": "/dɪˈpɑɹt/",
        "zh": "v. 起程，出發",
        "unit": 12,
        "example": "Tom departed last Monday.",
        "exampleZh": "湯姆上週一離開了。"
    },
    {
        "id": 21127,
        "en": "department",
        "kk": "/dɪˈpɑɹtmənt/",
        "zh": "n. 部；司；局；處；科",
        "unit": 12,
        "example": "that's not my department",
        "exampleZh": "那不是我的部門"
    },
    {
        "id": 21128,
        "en": "departure",
        "kk": "/dɪˈpɑɹtʃɝ/",
        "zh": "n. 離開；出發",
        "unit": 12,
        "example": "When is your departure?",
        "exampleZh": "你什麼時候出發？"
    },
    {
        "id": 21129,
        "en": "depend",
        "kk": "/dɪˈpɛnd/",
        "zh": "v. 相信；信賴",
        "unit": 12,
        "example": "the kind of person you could depend on",
        "exampleZh": "你可以依賴什麼樣的人"
    },
    {
        "id": 21130,
        "en": "dependable",
        "kk": "/dɪˈpɛndəbəɫ/",
        "zh": "adj. 可靠的",
        "unit": 12,
        "example": "Tom was dependable.",
        "exampleZh": "湯姆很可靠。"
    },
    {
        "id": 21131,
        "en": "dependence",
        "kk": "",
        "zh": "n. 依賴",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21132,
        "en": "dependent",
        "kk": "/dɪˈpɛndənt/",
        "zh": "a. 依靠的；依賴的",
        "unit": 12,
        "example": "Tom has dependents.",
        "exampleZh": "湯姆有家屬。"
    },
    {
        "id": 21133,
        "en": "depict",
        "kk": "/dɪˈpɪkt/",
        "zh": "v. 描述；描寫",
        "unit": 12,
        "example": "The mosaic depicts a butterfly.",
        "exampleZh": "馬賽克描繪了一隻蝴蝶。"
    },
    {
        "id": 21134,
        "en": "deplete",
        "kk": "",
        "zh": "v. 耗盡",
        "unit": 12,
        "example": "Our finances are depleted.",
        "exampleZh": "我們的財政已經耗盡。"
    },
    {
        "id": 21135,
        "en": "deploy",
        "kk": "",
        "zh": "v. 部署",
        "unit": 12,
        "example": "The K9 unit was deployed.",
        "exampleZh": "K9部隊部署完畢。"
    },
    {
        "id": 21136,
        "en": "deployment",
        "kk": "",
        "zh": "n. 部署",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21137,
        "en": "deposit",
        "kk": "/dəˈpɑzɪt/",
        "zh": "v. 放置；寄存 n存款",
        "unit": 12,
        "example": "a vault in which guests may deposit valuable property",
        "exampleZh": "客人可以存放貴重財產的金庫"
    },
    {
        "id": 21138,
        "en": "depreciate",
        "kk": "",
        "zh": "v. 貶值",
        "unit": 12,
        "example": "Should the Algerian dinar be depreciated again?",
        "exampleZh": "阿爾及利亞第納爾是否應該再次貶值？"
    },
    {
        "id": 21139,
        "en": "depress",
        "kk": "/dɪˈpɹɛs/",
        "zh": "v. 使沮喪",
        "unit": 12,
        "example": "Was Tom depressed?",
        "exampleZh": "湯姆情緒低落嗎？"
    },
    {
        "id": 21140,
        "en": "depression",
        "kk": "/dɪˈpɹɛʃən/",
        "zh": "n. 沮喪；意氣消沉",
        "unit": 12,
        "example": "she was referred by a psychiatrist treating her for depression",
        "exampleZh": "她被一位治療憂鬱症的精神科醫生轉介給她"
    },
    {
        "id": 21141,
        "en": "deprive",
        "kk": "/dɪˈpɹaɪv/",
        "zh": "v. 剝奪",
        "unit": 12,
        "example": "I'm sleep-deprived.",
        "exampleZh": "我睡眠不足。"
    },
    {
        "id": 21142,
        "en": "depth",
        "kk": "/ˈdɛpθ/",
        "zh": "n. 深度",
        "unit": 12,
        "example": "the wine shows good depth of color",
        "exampleZh": "該酒呈現出良好的色彩深度"
    },
    {
        "id": 21143,
        "en": "deputy",
        "kk": "/ˈdɛpjəti/",
        "zh": "n. 副手",
        "unit": 12,
        "example": "his deputy has been largely running the business for the past year",
        "exampleZh": "過去一年裡，他的副手主要負責管理公司業務"
    },
    {
        "id": 21144,
        "en": "derive",
        "kk": "/dɝˈaɪv/",
        "zh": "v. 衍生",
        "unit": 12,
        "example": "I derived no benefit from them.",
        "exampleZh": "我沒有從他們那裡得到任何好處。"
    },
    {
        "id": 21145,
        "en": "descend",
        "kk": "/dɪˈsɛnd/",
        "zh": "v. 下降",
        "unit": 12,
        "example": "the aircraft began to descend",
        "exampleZh": "飛機開始下降"
    },
    {
        "id": 21146,
        "en": "describe",
        "kk": "/dɪsˈkɹaɪb/",
        "zh": "v. 描繪；敘述",
        "unit": 12,
        "example": "Describe your day.",
        "exampleZh": "描述一下你的一天。"
    },
    {
        "id": 21147,
        "en": "description",
        "kk": "/dɪsˈkɹɪpʃən/",
        "zh": "n. 敘述；形容",
        "unit": 12,
        "example": "I like that description.",
        "exampleZh": "我喜歡這個描述。"
    },
    {
        "id": 21148,
        "en": "desert",
        "kk": "/ˈdɛzɝt/",
        "zh": "n. 沙漠",
        "unit": 12,
        "example": "desert wastes",
        "exampleZh": "沙漠廢棄物"
    },
    {
        "id": 21149,
        "en": "deserve",
        "kk": "/dɪˈzɝv/",
        "zh": "v. 應受；該得",
        "unit": 12,
        "example": "You deserve respect.",
        "exampleZh": "你值得尊重。"
    },
    {
        "id": 21150,
        "en": "design",
        "kk": "/dɪˈzaɪn/",
        "zh": "v. 設計構思；繪製n 圖樣；圖紙",
        "unit": 12,
        "example": "good design can help the reader understand complicated information",
        "exampleZh": "好的設計可以幫助讀者理解複雜的訊息"
    },
    {
        "id": 21151,
        "en": "designate",
        "kk": "/ˈdɛzəɡˌneɪt/",
        "zh": "v. 指定",
        "unit": 12,
        "example": "the Director designate",
        "exampleZh": "候任主任"
    },
    {
        "id": 21152,
        "en": "designer",
        "kk": "/dɪˈzaɪnɝ/",
        "zh": "n. 設計師",
        "unit": 12,
        "example": "designer drugs",
        "exampleZh": "設計藥物"
    },
    {
        "id": 21153,
        "en": "desirable",
        "kk": "/dɪˈzaɪɝəbəɫ/",
        "zh": "adj. 理想的",
        "unit": 12,
        "example": "it is desirable to exercise some social control over technology",
        "exampleZh": "對技術實行一定的社會控制是可取的"
    },
    {
        "id": 21154,
        "en": "desire",
        "kk": "/dɪˈzaɪɝ/",
        "zh": "v. 渴望",
        "unit": 12,
        "example": "they were clinging together in fierce mutual desire",
        "exampleZh": "他們懷著強烈的共同慾望緊緊地抱在一起"
    },
    {
        "id": 21155,
        "en": "desk",
        "kk": "/ˈdɛsk/",
        "zh": "n. 書桌",
        "unit": 12,
        "example": "the reception desk",
        "exampleZh": "接待處"
    },
    {
        "id": 21156,
        "en": "despair",
        "kk": "/dɪˈspɛɹ/",
        "zh": "n. 絕望",
        "unit": 12,
        "example": "driven to despair, he throws himself under a train",
        "exampleZh": "絕望之下，他投身火車底下"
    },
    {
        "id": 21157,
        "en": "desperate",
        "kk": "/ˈdɛspɝɪt/",
        "zh": "adj. 絕望的",
        "unit": 12,
        "example": "We were desperate.",
        "exampleZh": "我們很絕望。"
    },
    {
        "id": 21158,
        "en": "despite",
        "kk": "/dɪˈspaɪt/",
        "zh": "prep. 不管；儘管n 惡意；怨恨",
        "unit": 12,
        "example": "Despite the odds, they succeeded.",
        "exampleZh": "儘管困難重重，他們還是成功了。"
    },
    {
        "id": 21159,
        "en": "destination",
        "kk": "/ˌdɛstəˈneɪʃən/",
        "zh": "n. 目的地；終點",
        "unit": 12,
        "example": "a popular destination for golfers",
        "exampleZh": "高爾夫球手的熱門目的地"
    },
    {
        "id": 21160,
        "en": "destiny",
        "kk": "/ˈdɛstəni/",
        "zh": "n. 命運",
        "unit": 12,
        "example": "It is his destiny!",
        "exampleZh": "這是他的命運！"
    },
    {
        "id": 21161,
        "en": "destroy",
        "kk": "/dɪˈstɹɔɪ/",
        "zh": "v. 毀壞；破壞",
        "unit": 12,
        "example": "They destroy nature.",
        "exampleZh": "他們破壞大自然。"
    },
    {
        "id": 21162,
        "en": "destruction",
        "kk": "/dɪˈstɹəkʃən/",
        "zh": "v. 毀壞；破壞",
        "unit": 12,
        "example": "This is total destruction.",
        "exampleZh": "這是徹底的毀滅。"
    },
    {
        "id": 21163,
        "en": "ability",
        "kk": "",
        "zh": "n. 能力；才能",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21164,
        "en": "able",
        "kk": "",
        "zh": "a. 能；可；會",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21165,
        "en": "abnormal",
        "kk": "",
        "zh": "a. 不正常的；反常的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21166,
        "en": "aboard",
        "kk": "",
        "zh": "ad. 在（交通工具）上；上（交通工具）prep 在（交通工具）上",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21167,
        "en": "aborigine",
        "kk": "",
        "zh": "n. 土著；原住民",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21168,
        "en": "abort",
        "kk": "",
        "zh": "v. 流產；夭折；（計畫等）失敗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21169,
        "en": "abound",
        "kk": "",
        "zh": "v. 富足；充滿",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21170,
        "en": "about",
        "kk": "",
        "zh": "ad. 在四周；到處prep 關於；對於；在⋯⋯的周圍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21171,
        "en": "above",
        "kk": "",
        "zh": "ad. 在上面；向上面prep 在⋯⋯上面；優於；勝過",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21172,
        "en": "above-average",
        "kk": "",
        "zh": "a. 在平均水平以上；超過平均水平",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21173,
        "en": "abruptly",
        "kk": "",
        "zh": "ad. 突然地；唐突地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21174,
        "en": "absent",
        "kk": "",
        "zh": "a. 缺席的，不在場的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21175,
        "en": "absolutely",
        "kk": "",
        "zh": "ad. 絕對地，完全地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21176,
        "en": "absurd",
        "kk": "",
        "zh": "a. 不合理的，荒謬的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21177,
        "en": "abundance",
        "kk": "",
        "zh": "n. 豐富；充足",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21178,
        "en": "abusive",
        "kk": "",
        "zh": "n. 辱罵的；濫用的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21179,
        "en": "academic",
        "kk": "",
        "zh": "a. 學校的；學術的 n 學者；學究",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21180,
        "en": "academy",
        "kk": "",
        "zh": "n. 學院；大學",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21181,
        "en": "accent",
        "kk": "",
        "zh": "n. 口音，腔調 v 強調，著重",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21182,
        "en": "accept",
        "kk": "",
        "zh": "v. 接受；答應",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21183,
        "en": "access",
        "kk": "",
        "zh": "n. 進入；入口 v使用；接近",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21184,
        "en": "accessibility",
        "kk": "",
        "zh": "n. 易接近；易受影響",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21185,
        "en": "accessory",
        "kk": "",
        "zh": "n. 附件；配件a 附屬的；輔助的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21186,
        "en": "accident",
        "kk": "",
        "zh": "n. 事故；災禍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21187,
        "en": "accident-prone",
        "kk": "",
        "zh": "a. 容易受傷的；容易出意外的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21188,
        "en": "acclimatize",
        "kk": "",
        "zh": "v. 使適應新環境",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21189,
        "en": "accommodation",
        "kk": "",
        "zh": "n. 適應；調節",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21190,
        "en": "accompany",
        "kk": "",
        "zh": "v. 陪同，伴隨",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21191,
        "en": "accomplishment",
        "kk": "",
        "zh": "n. 成就；成績",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21192,
        "en": "according",
        "kk": "",
        "zh": "a. 相符的；和諧的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21193,
        "en": "accountable",
        "kk": "",
        "zh": "a. 應負責任的；可說明的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21194,
        "en": "accounting",
        "kk": "",
        "zh": "n. 會計學；結帳",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21195,
        "en": "accrue",
        "kk": "",
        "zh": "v. 積累；獲得",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21196,
        "en": "accumulation",
        "kk": "",
        "zh": "n. 積累；積聚",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21197,
        "en": "ache",
        "kk": "",
        "zh": "n. 疼痛 v 疼痛；感到痛苦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21198,
        "en": "acknowledgement",
        "kk": "",
        "zh": "n. 承認；確認；認可",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21199,
        "en": "acquisitive",
        "kk": "",
        "zh": "a. 想獲得的；貪得無厭的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21200,
        "en": "acre",
        "kk": "",
        "zh": "n. 英畝；地產",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21201,
        "en": "across",
        "kk": "",
        "zh": "prep. 橫越，穿過；在⋯⋯那邊 ad 橫過",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21202,
        "en": "act",
        "kk": "",
        "zh": "v. 扮演；做事；見效 n行為；行動",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21203,
        "en": "action",
        "kk": "",
        "zh": "n. 行動；行為",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21204,
        "en": "activity",
        "kk": "",
        "zh": "n. 活動；行動",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21205,
        "en": "actor",
        "kk": "",
        "zh": "n. 演員；行動者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21206,
        "en": "actress",
        "kk": "",
        "zh": "n. 女演員",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21207,
        "en": "actually",
        "kk": "",
        "zh": "ad. 實際上；真的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21208,
        "en": "acute",
        "kk": "",
        "zh": "a. 嚴重的；敏銳的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21209,
        "en": "adapter",
        "kk": "",
        "zh": "n. 改編者；轉接器",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21210,
        "en": "add",
        "kk": "",
        "zh": "v. 添加；增加",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21211,
        "en": "addiction",
        "kk": "",
        "zh": "n. 沉溺；成癮",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21212,
        "en": "addictive",
        "kk": "",
        "zh": "a. 成癮的；上癮的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21213,
        "en": "additionally",
        "kk": "",
        "zh": "ad. 附加地；同時；此外",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21214,
        "en": "adept",
        "kk": "",
        "zh": "n. 能手；內行",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21215,
        "en": "adjustment",
        "kk": "",
        "zh": "n. 調整；校正",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21216,
        "en": "administrate",
        "kk": "",
        "zh": "v. 管理；支配",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21217,
        "en": "administrator",
        "kk": "",
        "zh": "n. 管理人；行政官員",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21218,
        "en": "admirable",
        "kk": "",
        "zh": "a. 值得讚揚的；令人欽佩的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21219,
        "en": "admiration",
        "kk": "",
        "zh": "n. 欽佩；欣賞",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21220,
        "en": "admittance",
        "kk": "",
        "zh": "n. 進入；入場許可",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21221,
        "en": "adolescence",
        "kk": "",
        "zh": "n. 青春期；青少年時期",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21222,
        "en": "adolescent",
        "kk": "",
        "zh": "a. 青少年的；幼稚的 n 青少年",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21223,
        "en": "adoption",
        "kk": "",
        "zh": "n. 採納；採用",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21224,
        "en": "adorn",
        "kk": "",
        "zh": "v. 裝飾；使生色",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21225,
        "en": "adult",
        "kk": "",
        "zh": "n. 成年人 a 成年的；成熟的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21226,
        "en": "adversary",
        "kk": "",
        "zh": "n. 敵手；敵人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21227,
        "en": "advisable",
        "kk": "",
        "zh": "a. 可取的；適當的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21228,
        "en": "affection",
        "kk": "",
        "zh": "n. 愛；情愛126.  afﬁrm v 申明；堅稱；證實127.  afﬁrmative a 肯定的；表示贊成的128. afﬁx v 貼上；添上；附上",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21229,
        "en": "afraid",
        "kk": "",
        "zh": "a. 害怕的；恐怕；遺憾",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21230,
        "en": "after",
        "kk": "",
        "zh": "prep. 在⋯之後 conj在⋯之後 ad 以後；之後a 以後的；後部的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21231,
        "en": "afternoon",
        "kk": "",
        "zh": "n. 下午；午後",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21232,
        "en": "after-tax",
        "kk": "",
        "zh": "a. 稅後；淨收的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21233,
        "en": "afterward",
        "kk": "",
        "zh": "ad. 之後；以後",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21234,
        "en": "again",
        "kk": "",
        "zh": "ad. 再；再一次",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21235,
        "en": "against",
        "kk": "",
        "zh": "prep. 反對；違反",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21236,
        "en": "age",
        "kk": "",
        "zh": "n. 年齡 v 變老；成熟",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21237,
        "en": "aggression",
        "kk": "",
        "zh": "n. 侵略",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21238,
        "en": "agility",
        "kk": "",
        "zh": "n. 敏捷；靈活",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21239,
        "en": "ago",
        "kk": "",
        "zh": "ad. 在⋯⋯以前",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21240,
        "en": "agree",
        "kk": "",
        "zh": "v. 同意；贊同",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21241,
        "en": "agricultural",
        "kk": "",
        "zh": "a. 農業的；務農的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21242,
        "en": "ahead",
        "kk": "",
        "zh": "ad. 在前；向前；預先",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21243,
        "en": "aim",
        "kk": "",
        "zh": "v. 瞄準；目的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21244,
        "en": "air-conditioner",
        "kk": "",
        "zh": "n. 冷氣機",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21245,
        "en": "aircraft",
        "kk": "",
        "zh": "n. 飛機；飛艇",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21246,
        "en": "airport",
        "kk": "",
        "zh": "n. 機場",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21247,
        "en": "alarm",
        "kk": "",
        "zh": "n. 警報；鬧鐘 v 使驚慌不安；使恐懼",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21248,
        "en": "allegedly",
        "kk": "",
        "zh": "ad. 據傳說；據宣稱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21249,
        "en": "allergy",
        "kk": "",
        "zh": "n. 過敏症",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21250,
        "en": "alley",
        "kk": "",
        "zh": "n. 小巷；小徑",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21251,
        "en": "alliance",
        "kk": "",
        "zh": "n. 結盟；聯盟",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21252,
        "en": "allure",
        "kk": "",
        "zh": "v. 引誘；誘惑 n 誘惑力，魅力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21253,
        "en": "almost",
        "kk": "",
        "zh": "ad. 幾乎；差不多",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21254,
        "en": "along",
        "kk": "",
        "zh": "prep. 沿著；順著 ad向前；一起",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21255,
        "en": "already",
        "kk": "",
        "zh": "ad. 已經；先前",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21256,
        "en": "altogether",
        "kk": "",
        "zh": "ad. 完全；全然",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21257,
        "en": "amid",
        "kk": "",
        "zh": "prep. 在⋯之間；被⋯包圍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21258,
        "en": "among",
        "kk": "",
        "zh": "prep. 在⋯之中；在⋯中間",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21259,
        "en": "annually",
        "kk": "",
        "zh": "ad. 每年；每年一次",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21260,
        "en": "another",
        "kk": "",
        "zh": "a. 又一；再一",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21261,
        "en": "antibiotic",
        "kk": "",
        "zh": "a. 抗生的；抗菌的 n 抗生素；抗菌素",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21262,
        "en": "any",
        "kk": "",
        "zh": "a. 任一；每一 prep 任何一個；任何人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21263,
        "en": "apart",
        "kk": "",
        "zh": "ad. 分開地；有距離地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21264,
        "en": "apologetic",
        "kk": "",
        "zh": "a. 道歉的；認錯的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21265,
        "en": "apparently",
        "kk": "",
        "zh": "ad. 顯然地；表面上",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21266,
        "en": "apt",
        "kk": "",
        "zh": "a. 易於⋯的；有⋯傾向的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21267,
        "en": "arena",
        "kk": "",
        "zh": "n. 圓形運動場；比賽場",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21268,
        "en": "around",
        "kk": "",
        "zh": "ad. 到處；周圍prep 圍繞；在⋯⋯附近",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21269,
        "en": "articulate",
        "kk": "",
        "zh": "v. 清楚地講話；清晰地發音；明確有力地表達239.  artiﬁcial a 人工的；人造的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21270,
        "en": "ascend",
        "kk": "",
        "zh": "v. 登高；上升",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21271,
        "en": "assurance",
        "kk": "",
        "zh": "n. 保證",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21272,
        "en": "at",
        "kk": "",
        "zh": "prep. 在⋯地點；在⋯時刻",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21273,
        "en": "ATM",
        "kk": "",
        "zh": "n. 自動存提款機(= Automatic TellerMachine)",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21274,
        "en": "attest",
        "kk": "",
        "zh": "v. 證實；證明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21275,
        "en": "attorney",
        "kk": "",
        "zh": "n. 律師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21276,
        "en": "auditory",
        "kk": "",
        "zh": "a. 耳朵的；聽覺的 n 聽眾；禮堂",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21277,
        "en": "avert",
        "kk": "",
        "zh": "v. 避開；移開",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21278,
        "en": "avoidance",
        "kk": "",
        "zh": "n. 逃避；迴避",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21279,
        "en": "bachelor",
        "kk": "",
        "zh": "n. 單身漢；學士",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21280,
        "en": "back",
        "kk": "",
        "zh": "n. 背部；後部 v 倒退；後退 ad 向後；後退地 a 後面的；後部的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21281,
        "en": "backache",
        "kk": "",
        "zh": "n. 背痛；腰痛",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21282,
        "en": "backbone",
        "kk": "",
        "zh": "n. 脊骨；脊柱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21283,
        "en": "backbreaking",
        "kk": "",
        "zh": "a. 非常辛勞的287.  backﬁre n 引擎的逆火 v事與願違",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21284,
        "en": "backlash",
        "kk": "",
        "zh": "n. 反衝；強烈反對；後座力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21285,
        "en": "backpack",
        "kk": "",
        "zh": "n. 登山、遠足用的背包292. back-to-back Ph 背靠背",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21286,
        "en": "backward",
        "kk": "",
        "zh": "a. 向後的；反向的 ad 向後；倒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21287,
        "en": "backyard",
        "kk": "",
        "zh": "n. 後院",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21288,
        "en": "bacteria",
        "kk": "",
        "zh": "n. 細菌",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21289,
        "en": "bad",
        "kk": "",
        "zh": "a. 壞的；不好的 ad很；非常",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21290,
        "en": "badge",
        "kk": "",
        "zh": "n. 徽章；紀念章",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21291,
        "en": "badly",
        "kk": "",
        "zh": "ad. 壞地；拙劣地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21292,
        "en": "bad-tempered",
        "kk": "",
        "zh": "a. 情緒惡劣的；易怒的301.  bafﬂe v 使受挫折；阻撓n 困惑；障礙302.  bafﬂing a  令人困惑的；難對付的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21293,
        "en": "bag",
        "kk": "",
        "zh": "n. 袋；提袋",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21294,
        "en": "bail",
        "kk": "",
        "zh": "v. 保釋 n 保釋；保釋金",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21295,
        "en": "bailout",
        "kk": "",
        "zh": "n. 跳傘；緊急（財政）援助",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21296,
        "en": "bait",
        "kk": "",
        "zh": "n. 餌；引誘物 v 引誘；誘惑",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21297,
        "en": "bake",
        "kk": "",
        "zh": "v. 烘；烤；烘培",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21298,
        "en": "baker",
        "kk": "",
        "zh": "n. 麵包師：糕點師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21299,
        "en": "bakery",
        "kk": "",
        "zh": "n. 麵包店；糕點店",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21300,
        "en": "balcony",
        "kk": "",
        "zh": "n. 陽臺；露臺",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21301,
        "en": "bald",
        "kk": "",
        "zh": "a. 禿頭的；赤裸裸的314. ball (party) n 舞會",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21302,
        "en": "ballroom",
        "kk": "",
        "zh": "n. 跳舞的大廳",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21303,
        "en": "banish",
        "kk": "",
        "zh": "v. 流放；放逐",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21304,
        "en": "bank",
        "kk": "",
        "zh": "n. 銀行；堤；岸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21305,
        "en": "bankbook",
        "kk": "",
        "zh": "n. 銀行存摺",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21306,
        "en": "bankcard",
        "kk": "",
        "zh": "n. 銀行信用卡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21307,
        "en": "banker",
        "kk": "",
        "zh": "n. 銀行家",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21308,
        "en": "banking",
        "kk": "",
        "zh": "n. 銀行業務；銀行業",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21309,
        "en": "bar",
        "kk": "",
        "zh": "code. n 條碼",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21310,
        "en": "barbecue",
        "kk": "",
        "zh": "n. 烤肉；燒烤v 烤肉；燒烤",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21311,
        "en": "bareness",
        "kk": "",
        "zh": "n. 赤裸；無遮蓋",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21312,
        "en": "barren",
        "kk": "",
        "zh": "a. 不生育的；貧脊的  n 瘠地；荒漠",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21313,
        "en": "bas",
        "kk": "",
        "zh": "n. 基；底；基部 n 基本的；基礎的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21314,
        "en": "baseline",
        "kk": "",
        "zh": "n. 基線；底線",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21315,
        "en": "basement",
        "kk": "",
        "zh": "n. 地下室；地下層",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21316,
        "en": "basically",
        "kk": "",
        "zh": "ad. 在根本上",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21317,
        "en": "basket",
        "kk": "",
        "zh": "n. 籃；簍；筐",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21318,
        "en": "bat",
        "kk": "",
        "zh": "n. 球棒；球拍 v 打；揮打",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21319,
        "en": "batch",
        "kk": "",
        "zh": "n. 一批生產量；一批",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21320,
        "en": "bath",
        "kk": "",
        "zh": "n. 浴缸；洗澡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21321,
        "en": "bathe",
        "kk": "",
        "zh": "v. 浸入；浸洗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21322,
        "en": "bathroom",
        "kk": "",
        "zh": "n. 浴室；化妝室",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21323,
        "en": "battery",
        "kk": "",
        "zh": "n. 電池；蓄電池",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21324,
        "en": "battle",
        "kk": "",
        "zh": "v. 搏鬥；奮爭 n 戰鬥；戰役",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21325,
        "en": "bay",
        "kk": "",
        "zh": "n. 灣",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21326,
        "en": "be",
        "kk": "",
        "zh": "v. 是；等於 aux 正在⋯；在⋯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21327,
        "en": "beach",
        "kk": "",
        "zh": "n. 海灘；海濱度假地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21328,
        "en": "bearable",
        "kk": "",
        "zh": "a. 能耐的；忍得住的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21329,
        "en": "bearer",
        "kk": "",
        "zh": "n. 持有人；挑夫；搬運工",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21330,
        "en": "bearing",
        "kk": "",
        "zh": "n. 舉止；體態；忍耐；忍受",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21331,
        "en": "beaten",
        "kk": "",
        "zh": "a. 挨打的；被打敗的；筋疲力盡的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21332,
        "en": "beautiful",
        "kk": "",
        "zh": "a. 漂亮的；出色的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21333,
        "en": "beautify",
        "kk": "",
        "zh": "v. 使更加美麗；美化",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21334,
        "en": "beauty",
        "kk": "",
        "zh": "n. 美麗；美的事物",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21335,
        "en": "because",
        "kk": "",
        "zh": "conj. 因為",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21336,
        "en": "become",
        "kk": "",
        "zh": "v. 變成；成為",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21337,
        "en": "becoming",
        "kk": "",
        "zh": "a. 合適的；適宜的 n 形成；發生",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21338,
        "en": "bed",
        "kk": "",
        "zh": "and. breakfast ph夜宿兼次日早餐（縮寫為B&B）",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21339,
        "en": "bedside",
        "kk": "",
        "zh": "n. 床邊；床側 a床旁的；臨床的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21340,
        "en": "bedtime",
        "kk": "",
        "zh": "n. 就寢時間 a 適於睡前的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21341,
        "en": "begin",
        "kk": "",
        "zh": "v. 開始；著手",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21342,
        "en": "beginner",
        "kk": "",
        "zh": "n. 初學者；新手",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21343,
        "en": "beginning",
        "kk": "",
        "zh": "n. 開始；起始",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21344,
        "en": "behavioral",
        "kk": "",
        "zh": "a. 行為的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21345,
        "en": "behind",
        "kk": "",
        "zh": "ad. 在背後 prep在⋯⋯的後面 n 背後",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21346,
        "en": "beholder",
        "kk": "",
        "zh": "n. 觀看者；旁觀者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21347,
        "en": "beige",
        "kk": "",
        "zh": "a. 米色的 n 米黃色",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21348,
        "en": "being",
        "kk": "",
        "zh": "n. 存在；生存",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21349,
        "en": "belated",
        "kk": "",
        "zh": "a. 誤期的；過時的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21350,
        "en": "belief",
        "kk": "",
        "zh": "n. 相信；信任",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21351,
        "en": "believe",
        "kk": "",
        "zh": "v. 相信；信任",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21352,
        "en": "believer",
        "kk": "",
        "zh": "n. 信徒；信教者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21353,
        "en": "bell",
        "kk": "",
        "zh": "n. 鐘；鈴 v 鳴鐘",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21354,
        "en": "belly",
        "kk": "",
        "zh": "n. 腹；腹部 v 鼓起；脹滿",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21355,
        "en": "belong",
        "kk": "",
        "zh": "v. 屬於；合適",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21356,
        "en": "beloved",
        "kk": "",
        "zh": "a. 心愛的；親愛的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21357,
        "en": "belt",
        "kk": "",
        "zh": "n. 腰帶；皮帶 v 用皮帶抽打；用帶捆住",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21358,
        "en": "bench",
        "kk": "",
        "zh": "n. 長凳；長椅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21359,
        "en": "bend",
        "kk": "",
        "zh": "v. 彎曲；轉彎 n 彎曲；轉彎處",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21360,
        "en": "beneath",
        "kk": "",
        "zh": "ad. 在下；向下prep 在⋯之下；向⋯下面",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21361,
        "en": "benefactor",
        "kk": "",
        "zh": "n. 捐助人；施主396.  beneﬁcial a 有益的；有利的397.  beneﬁt v 得益；受惠 n利益；好處",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21362,
        "en": "benignl",
        "kk": "",
        "zh": "a. 仁慈的；親切的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21363,
        "en": "bent",
        "kk": "",
        "zh": "a. 彎曲的；決心的n 愛好；傾向",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21364,
        "en": "bet",
        "kk": "",
        "zh": "n. 打賭 v 打賭",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21365,
        "en": "betrayal",
        "kk": "",
        "zh": "n. 背叛；密告",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21366,
        "en": "better",
        "kk": "",
        "zh": "a. 較佳的；更好的v 改善；改進",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21367,
        "en": "between",
        "kk": "",
        "zh": "ad. 在中間；兩者之間 prep 在⋯之間",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21368,
        "en": "beware",
        "kk": "",
        "zh": "v. 注意；提防",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21369,
        "en": "bicycle",
        "kk": "",
        "zh": "n. 腳踏車；自行車",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21370,
        "en": "bidder",
        "kk": "",
        "zh": "n. 出價人；投標人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21371,
        "en": "bilingual",
        "kk": "",
        "zh": "a. 雙語的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21372,
        "en": "billboard",
        "kk": "",
        "zh": "n. 廣告牌",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21373,
        "en": "billion",
        "kk": "",
        "zh": "n. 十億",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21374,
        "en": "bin",
        "kk": "",
        "zh": "n. 箱子；容器",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21375,
        "en": "binding",
        "kk": "",
        "zh": "n. 裝訂；封皮 a黏合的；有約束力的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21376,
        "en": "biological",
        "kk": "",
        "zh": "a. 生物的；生物學的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21377,
        "en": "birth",
        "kk": "",
        "zh": "n. 出生；誕生",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21378,
        "en": "birthday",
        "kk": "",
        "zh": "n. 生日",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21379,
        "en": "bit",
        "kk": "",
        "zh": "n. 小片；小塊；位元",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21380,
        "en": "bite",
        "kk": "",
        "zh": "v. 咬；啃",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21381,
        "en": "bizarre",
        "kk": "",
        "zh": "a. 奇異的；不尋常的；奇怪的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21382,
        "en": "bland",
        "kk": "",
        "zh": "a. 溫和的；淡而無味的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21383,
        "en": "bleak",
        "kk": "",
        "zh": "a. 荒涼的；無遮蔽的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21384,
        "en": "bleed",
        "kk": "",
        "zh": "v. 出血；流血",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21385,
        "en": "blender",
        "kk": "",
        "zh": "n. 攪拌機；混合器",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21386,
        "en": "blockage",
        "kk": "",
        "zh": "n. 封鎖；妨礙",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21387,
        "en": "blood",
        "kk": "",
        "zh": "n. 血；血液",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21388,
        "en": "blossom",
        "kk": "",
        "zh": "n. 開花；開花期v 開花；生長茂盛",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21389,
        "en": "blow",
        "kk": "",
        "zh": "v. 吹；吹奏",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21390,
        "en": "blunder",
        "kk": "",
        "zh": "v. 犯大錯；出漏子 n 大錯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21391,
        "en": "blur",
        "kk": "",
        "zh": "v. 使模糊不清；使朦朧 n 模糊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21392,
        "en": "boardroom",
        "kk": "",
        "zh": "n. 會議室",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21393,
        "en": "boat",
        "kk": "",
        "zh": "n. 小船",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21394,
        "en": "body",
        "kk": "",
        "zh": "n. 身體；肉體",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21395,
        "en": "boil",
        "kk": "",
        "zh": "v. 沸騰；烹煮",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21396,
        "en": "bomb",
        "kk": "",
        "zh": "n. 炸彈；失敗 v 轟炸；轟擊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21397,
        "en": "bombard",
        "kk": "",
        "zh": "v. 砲擊；轟炸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21398,
        "en": "bone",
        "kk": "",
        "zh": "n. 骨；骨頭",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21399,
        "en": "book",
        "kk": "",
        "zh": "n. 書；書籍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21400,
        "en": "bookshelf",
        "kk": "",
        "zh": "n. 書架；書櫃",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21401,
        "en": "bookstore",
        "kk": "",
        "zh": "n. 書店",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21402,
        "en": "boot",
        "kk": "",
        "zh": "n. 靴子",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21403,
        "en": "borderline",
        "kk": "",
        "zh": "n. 邊界；界線",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21404,
        "en": "boring",
        "kk": "",
        "zh": "a. 令人生厭的；乏味的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21405,
        "en": "borrow",
        "kk": "",
        "zh": "v. 借用；借",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21406,
        "en": "boss",
        "kk": "",
        "zh": "n. 老闆；上司",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21407,
        "en": "bothersome",
        "kk": "",
        "zh": "a. 令人討厭的；麻煩的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21408,
        "en": "bottle",
        "kk": "",
        "zh": "n. 瓶子",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21409,
        "en": "boulevard",
        "kk": "",
        "zh": "n. 大道",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21410,
        "en": "bow",
        "kk": "",
        "zh": "n. 弓",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21411,
        "en": "bowl",
        "kk": "",
        "zh": "n. 保齡球 v 投：滾",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21412,
        "en": "box",
        "kk": "",
        "zh": "n. 箱；盒；匣482.  box ofﬁce n 售票處；票房",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21413,
        "en": "boycott",
        "kk": "",
        "zh": "v. 杯葛；聯合抵制 n 杯葛；聯合抵制",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21414,
        "en": "brace",
        "kk": "",
        "zh": "n. 支柱；支撐物  v支撐；加固",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21415,
        "en": "bracket",
        "kk": "",
        "zh": "n. 托架；撐架",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21416,
        "en": "brain",
        "kk": "",
        "zh": "n. 智力，頭腦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21417,
        "en": "brainstorm",
        "kk": "",
        "zh": "v. 集體研討；集思廣益",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21418,
        "en": "brake",
        "kk": "",
        "zh": "v. 煞車 n 煞車",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21419,
        "en": "brand-new",
        "kk": "",
        "zh": "a. 全新的；嶄新的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21420,
        "en": "bravely",
        "kk": "",
        "zh": "ad. 勇敢地：英勇地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21421,
        "en": "bravo",
        "kk": "",
        "zh": "n. 喝采聲",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21422,
        "en": "bread",
        "kk": "",
        "zh": "n. 麵包",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21423,
        "en": "breadth",
        "kk": "",
        "zh": "n. 寬度；幅度",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21424,
        "en": "breakable",
        "kk": "",
        "zh": "a. 會破的；脆的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21425,
        "en": "breakfast",
        "kk": "",
        "zh": "n. 早餐",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21426,
        "en": "breakout",
        "kk": "",
        "zh": "n. 包圍突破",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21427,
        "en": "breakup",
        "kk": "",
        "zh": "n. 中斷；中止",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21428,
        "en": "breathless",
        "kk": "",
        "zh": "a. 呼吸困難的；扣人心弦的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21429,
        "en": "breathtaking",
        "kk": "",
        "zh": "a. 驚人的；令人屏息的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21430,
        "en": "breeze",
        "kk": "",
        "zh": "n. 微風；和風",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21431,
        "en": "brick",
        "kk": "",
        "zh": "n. 磚；磚塊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21432,
        "en": "bride",
        "kk": "",
        "zh": "n. 新娘",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21433,
        "en": "bridge",
        "kk": "",
        "zh": "n. 橋：橋墩",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21434,
        "en": "bright",
        "kk": "",
        "zh": "a. 發亮的；晴朗的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21435,
        "en": "brighten",
        "kk": "",
        "zh": "v. 使明亮；使閃亮",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21436,
        "en": "brisk",
        "kk": "",
        "zh": "a. 活潑的；生氣勃勃的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21437,
        "en": "brittle",
        "kk": "",
        "zh": "a. 易碎的；敏感的；難相處的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21438,
        "en": "brokered",
        "kk": "",
        "zh": "v. 以中間人等身分安排⋯⋯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21439,
        "en": "bruise",
        "kk": "",
        "zh": "n. 傷痕；青腫 v 使受瘀傷，使青腫",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21440,
        "en": "brush",
        "kk": "",
        "zh": "v. 刷；刷洗 n 刷子",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21441,
        "en": "brush-off",
        "kk": "",
        "zh": "n. 拒絕；不理睬",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21442,
        "en": "bruta",
        "kk": "",
        "zh": "a. 冷酷的；野蠻的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21443,
        "en": "brutally",
        "kk": "",
        "zh": "ad. 冷酷地；野蠻地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21444,
        "en": "bubble",
        "kk": "",
        "zh": "n. 泡泡 v 沸騰；冒泡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21445,
        "en": "bucket",
        "kk": "",
        "zh": "n. 水桶；提桶",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21446,
        "en": "buckle",
        "kk": "",
        "zh": "n. 釦子；搭鉤 v扣住；扣緊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21447,
        "en": "budge",
        "kk": "",
        "zh": "v. 微微移動；讓步",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21448,
        "en": "businessman",
        "kk": "",
        "zh": "n. 商人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21449,
        "en": "busy",
        "kk": "",
        "zh": "a. 忙碌的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21450,
        "en": "buy",
        "kk": "",
        "zh": "v. 買；購買",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21451,
        "en": "buyer",
        "kk": "",
        "zh": "n. 買主；買家",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21452,
        "en": "cab",
        "kk": "",
        "zh": "n. 計程車",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21453,
        "en": "cabin",
        "kk": "",
        "zh": "n. 客艙；駕駛艙",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21454,
        "en": "cabine",
        "kk": "",
        "zh": "n. 櫥；櫃",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21455,
        "en": "cafeteria",
        "kk": "",
        "zh": "n. 自助餐廳",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21456,
        "en": "caffeine",
        "kk": "",
        "zh": "n. 咖啡因",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21457,
        "en": "calcium",
        "kk": "",
        "zh": "n. 鈣",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21458,
        "en": "caliber",
        "kk": "",
        "zh": "n. 口徑；水準，程度",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21459,
        "en": "call",
        "kk": "",
        "zh": "v. 叫喊；呼叫 n 呼叫；通話",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21460,
        "en": "caller",
        "kk": "",
        "zh": "n. 訪問者；探望者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21461,
        "en": "calling",
        "kk": "",
        "zh": "n. 呼喊；召喚",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21462,
        "en": "calm",
        "kk": "",
        "zh": "a. 鎮靜的；沉著的 v使鎮定；使平靜",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21463,
        "en": "camera",
        "kk": "",
        "zh": "n. 照相機",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21464,
        "en": "camp",
        "kk": "",
        "zh": "n. 營地；帳篷 v 紮營；宿營",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21465,
        "en": "candid",
        "kk": "",
        "zh": "a. 公正的，公平的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21466,
        "en": "capability",
        "kk": "",
        "zh": "n. 能力；才能",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21467,
        "en": "capitalization",
        "kk": "",
        "zh": "n. 資本化；資本額",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21468,
        "en": "capitalize",
        "kk": "",
        "zh": "v. 利用；供給（資本）",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21469,
        "en": "carefully",
        "kk": "",
        "zh": "ad. 小心翼翼地；仔細地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21470,
        "en": "carpet",
        "kk": "",
        "zh": "n. 地毯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21471,
        "en": "carton",
        "kk": "",
        "zh": "n. 紙盒；紙板箱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21472,
        "en": "cast",
        "kk": "",
        "zh": "v. 投；擲；拋 n 投；班底；演員",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21473,
        "en": "categorize",
        "kk": "",
        "zh": "v. 將⋯分類",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21474,
        "en": "changeable",
        "kk": "",
        "zh": "a. 易變的；不定的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21475,
        "en": "chapter",
        "kk": "",
        "zh": "n. 篇章；篇",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21476,
        "en": "circumspect",
        "kk": "",
        "zh": "a. 慎重的；謹慎小心的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21477,
        "en": "circumvent",
        "kk": "",
        "zh": "v. 規避；防止⋯⋯發生",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21478,
        "en": "citation",
        "kk": "",
        "zh": "n. 引用；引證",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21479,
        "en": "citizenship",
        "kk": "",
        "zh": "n. 公民權；公民身分",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21480,
        "en": "clearly",
        "kk": "",
        "zh": "ad. 顯然地；無疑地；明亮地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21481,
        "en": "cognition",
        "kk": "",
        "zh": "n. 認知；知識",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21482,
        "en": "coin",
        "kk": "",
        "zh": "n. 硬幣",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21483,
        "en": "collateral",
        "kk": "",
        "zh": "a. 並行的；附屬的 n 擔保品；抵押品",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21484,
        "en": "collectible",
        "kk": "",
        "zh": "a. 可收集的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21485,
        "en": "comforting",
        "kk": "",
        "zh": "a. 令人欣慰的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21486,
        "en": "commentary",
        "kk": "",
        "zh": "n. 評論",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21487,
        "en": "committed",
        "kk": "",
        "zh": "a. 忠誠的，堅定的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21488,
        "en": "comparatively",
        "kk": "",
        "zh": "ad. 對比地；比較地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21489,
        "en": "compliant",
        "kk": "",
        "zh": "a. 順從的；應允的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21490,
        "en": "composure",
        "kk": "",
        "zh": "n. 平靜；鎮靜",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21491,
        "en": "consciously",
        "kk": "",
        "zh": "ad. 有意識地；自覺地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21492,
        "en": "considering",
        "kk": "",
        "zh": "prep. 就⋯⋯而論；考慮到 ad 各方面考慮起來",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21493,
        "en": "consistently",
        "kk": "",
        "zh": "ad. 一貫地；固守地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21494,
        "en": "constrain",
        "kk": "",
        "zh": "v. 強迫；迫使",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21495,
        "en": "consultancy",
        "kk": "",
        "zh": "n. 諮詢公司；顧問公司",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21496,
        "en": "continuity",
        "kk": "",
        "zh": "n. 連續性；持續性",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21497,
        "en": "controlling",
        "kk": "",
        "zh": "a. 管理的；控制的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21498,
        "en": "cordially",
        "kk": "",
        "zh": "ad. 熱誠地；誠摯地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21499,
        "en": "coupon",
        "kk": "",
        "zh": "n. 贈券；減價優待券",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21500,
        "en": "courteously",
        "kk": "",
        "zh": "ad. 有禮貌地；親切地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21501,
        "en": "crafted",
        "kk": "",
        "zh": "a. 製作的；工藝的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21502,
        "en": "crane",
        "kk": "",
        "zh": "n. 鶴 v 伸著脖子看",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21503,
        "en": "credible",
        "kk": "",
        "zh": "a. 可信的；可靠的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21504,
        "en": "creditor",
        "kk": "",
        "zh": "n. 債權人；貸方",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21505,
        "en": "cuisine",
        "kk": "",
        "zh": "n. 烹飪；烹調法；菜餚",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21506,
        "en": "cushion",
        "kk": "",
        "zh": "n. 墊子；坐墊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21507,
        "en": "customize",
        "kk": "",
        "zh": "v. 訂做；客製化",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21508,
        "en": "cutback",
        "kk": "",
        "zh": "n. 減少；剪修新芽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21509,
        "en": "daring",
        "kk": "",
        "zh": "a. 大膽的；勇敢的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21510,
        "en": "day",
        "kk": "",
        "zh": "n. 一天；日；白天",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21511,
        "en": "daylight",
        "kk": "",
        "zh": "n. 日光；白晝",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21512,
        "en": "daytime",
        "kk": "",
        "zh": "n. 白天；白晝",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21513,
        "en": "dazzle",
        "kk": "",
        "zh": "v. 使目眩；使眼花n 耀眼；燦爛",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21514,
        "en": "dealing",
        "kk": "",
        "zh": "n. 行為；商業往來",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21515,
        "en": "dean",
        "kk": "",
        "zh": "n. 教務長；學院院長",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21516,
        "en": "dear",
        "kk": "",
        "zh": "a. 親愛的；摯愛的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21517,
        "en": "debatable",
        "kk": "",
        "zh": "a. 可爭辯的；可爭論的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21518,
        "en": "debit",
        "kk": "",
        "zh": "v. 借方 n 把⋯⋯記入借方",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21519,
        "en": "decease",
        "kk": "",
        "zh": "v. 亡故 n 死亡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21520,
        "en": "deceitful",
        "kk": "",
        "zh": "a. 騙人的；欺詐的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21521,
        "en": "decelerate",
        "kk": "",
        "zh": "v. 減緩；降低速度",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21522,
        "en": "deceleration",
        "kk": "",
        "zh": "n. 減速",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21523,
        "en": "decipher",
        "kk": "",
        "zh": "v. 破解（密碼等）；解釋（古代文字等）",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21524,
        "en": "decode",
        "kk": "",
        "zh": "v. 譯解（密碼）",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21525,
        "en": "deduce",
        "kk": "",
        "zh": "v. 演繹；推論",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21526,
        "en": "defy",
        "kk": "",
        "zh": "v. 公然反抗；蔑視",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21527,
        "en": "delicacy",
        "kk": "",
        "zh": "n. 精美；佳餚",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21528,
        "en": "delusion",
        "kk": "",
        "zh": "n. 迷惑；欺騙",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21529,
        "en": "demise",
        "kk": "",
        "zh": "n. 死亡；終止 v轉讓；遺贈",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21530,
        "en": "demographics",
        "kk": "",
        "zh": "n. 人口統計資料",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21531,
        "en": "departmental",
        "kk": "",
        "zh": "a. 部門的；分部的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21532,
        "en": "dependency",
        "kk": "",
        "zh": "n. 依靠；信賴",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21533,
        "en": "detail",
        "kk": "",
        "zh": "n. 細節；詳情 v 詳述；詳細說明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21534,
        "en": "detailed",
        "kk": "",
        "zh": "a. 詳細的；精細的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21535,
        "en": "detect",
        "kk": "",
        "zh": "v. 探測；察覺",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21536,
        "en": "determine",
        "kk": "",
        "zh": "v. 決定；下決心",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21537,
        "en": "develop",
        "kk": "",
        "zh": "v. 開發：發展",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21538,
        "en": "developer",
        "kk": "",
        "zh": "n. 開發者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21539,
        "en": "development",
        "kk": "",
        "zh": "n. 進化；發展",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21540,
        "en": "device",
        "kk": "",
        "zh": "n. 設備；機器",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21541,
        "en": "devise",
        "kk": "",
        "zh": "n. v 設計；發明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21542,
        "en": "dial",
        "kk": "",
        "zh": "v. 撥打；撥",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21543,
        "en": "diary",
        "kk": "",
        "zh": "n. 日記；日誌",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21544,
        "en": "dictate",
        "kk": "",
        "zh": "v. 口授；口述",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21545,
        "en": "diet",
        "kk": "",
        "zh": "n. 飲食；食物 v 節食",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21546,
        "en": "dietician",
        "kk": "",
        "zh": "n. 營養學家",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21547,
        "en": "difference",
        "kk": "",
        "zh": "n. 差別；差異",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21548,
        "en": "different",
        "kk": "",
        "zh": "a. 不同的；有差異的957.  difﬁcult a 困難的；艱難的958. difﬁculty n 困難；困境",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21549,
        "en": "digital",
        "kk": "",
        "zh": "a. 數位的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21550,
        "en": "dignity",
        "kk": "",
        "zh": "n. 尊嚴；自尊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21551,
        "en": "diligent",
        "kk": "",
        "zh": "a. 勤勉的，勤奮的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21552,
        "en": "direct",
        "kk": "",
        "zh": "v. 指向；針對 a 徑直的；筆直的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21553,
        "en": "directly",
        "kk": "",
        "zh": "ad. 直接地；筆直地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21554,
        "en": "director",
        "kk": "",
        "zh": "n. 導演；主管；署長",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21555,
        "en": "disagree",
        "kk": "",
        "zh": "v. 不一致；不符",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21556,
        "en": "disappear",
        "kk": "",
        "zh": "v. 消失；離開",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21557,
        "en": "discard",
        "kk": "",
        "zh": "v. 拋棄；摒棄",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21558,
        "en": "discern",
        "kk": "",
        "zh": "v. 分辨；識別",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21559,
        "en": "discipline",
        "kk": "",
        "zh": "n. 紀律；風紀",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21560,
        "en": "disclaimer",
        "kk": "",
        "zh": "v. 放棄；拒絕",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21561,
        "en": "discourage",
        "kk": "",
        "zh": "v. 使洩氣；使沮喪",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21562,
        "en": "discouraged",
        "kk": "",
        "zh": "a. 灰心的；沮喪的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21563,
        "en": "discouragement",
        "kk": "",
        "zh": "n. 沮喪；氣餒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21564,
        "en": "discover",
        "kk": "",
        "zh": "v. 發現；探索",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21565,
        "en": "discuss",
        "kk": "",
        "zh": "v. 討論；交流",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21566,
        "en": "discussion",
        "kk": "",
        "zh": "n. 討論；交流",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21567,
        "en": "disease",
        "kk": "",
        "zh": "n. 病，疾病 v 使生病；使不健全",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21568,
        "en": "disembark",
        "kk": "",
        "zh": "v. 登陸；上岸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21569,
        "en": "dismal",
        "kk": "",
        "zh": "a. 憂鬱的；沉悶的n 沮喪；抑鬱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21570,
        "en": "dismiss",
        "kk": "",
        "zh": "v. 讓⋯離開；把⋯打發走",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21571,
        "en": "dispense",
        "kk": "",
        "zh": "v. 分配，分發v 免除；省掉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21572,
        "en": "display",
        "kk": "",
        "zh": "v. 陳列；展出 n展覽；陳列",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21573,
        "en": "disposal",
        "kk": "",
        "zh": "n. 處理；處置",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21574,
        "en": "dispose",
        "kk": "",
        "zh": "n. 配置，布置",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21575,
        "en": "dispute",
        "kk": "",
        "zh": "v. 爭論；爭執 n爭論；爭執",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21576,
        "en": "disrupt",
        "kk": "",
        "zh": "v. 使分裂；使瓦解a 破裂的；中斷的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21577,
        "en": "dissipate",
        "kk": "",
        "zh": "v. 使消散；消除",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21578,
        "en": "distinctive",
        "kk": "",
        "zh": "a. 有特色的；特殊的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21579,
        "en": "distinguish",
        "kk": "",
        "zh": "v. 區別；識別",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21580,
        "en": "distract",
        "kk": "",
        "zh": "v. 轉移；分散",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21581,
        "en": "distributor",
        "kk": "",
        "zh": "n. 分配者；批發商",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21582,
        "en": "disturb",
        "kk": "",
        "zh": "v. 打擾",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21583,
        "en": "diverse",
        "kk": "",
        "zh": "a. 不同的；多元的996. diversiﬁcation n 多樣化",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21584,
        "en": "diversity",
        "kk": "",
        "zh": "n. 差異；不同點",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21585,
        "en": "divert",
        "kk": "",
        "zh": "v. 轉向；轉移",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21586,
        "en": "divide",
        "kk": "",
        "zh": "v. 分；劃分 n 分歧；不和",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21587,
        "en": "doctor",
        "kk": "",
        "zh": "n. 醫生",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21588,
        "en": "documentation",
        "kk": "",
        "zh": "n. 文件；憑證",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21589,
        "en": "dominate",
        "kk": "",
        "zh": "v. 支配；統治",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21590,
        "en": "donate",
        "kk": "",
        "zh": "v. 捐獻；捐款",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21591,
        "en": "donation",
        "kk": "",
        "zh": "n. 捐獻；捐款",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21592,
        "en": "dot",
        "kk": "",
        "zh": "n. 點，小圓點 v 打點；加點",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21593,
        "en": "dotted",
        "kk": "",
        "zh": "a. 有點子的；星羅棋布的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21594,
        "en": "doubt",
        "kk": "",
        "zh": "v. 懷疑；揣測",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21595,
        "en": "download",
        "kk": "",
        "zh": "v. 下載",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21596,
        "en": "downsizing",
        "kk": "",
        "zh": "n. 縮減開支",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21597,
        "en": "downtown",
        "kk": "",
        "zh": "n. 商業區，鬧區",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21598,
        "en": "downward",
        "kk": "",
        "zh": "a. 向下的；下降的 ad 向下；日趨沒落地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21599,
        "en": "draft",
        "kk": "",
        "zh": "n. 草稿；手稿",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21600,
        "en": "drama",
        "kk": "",
        "zh": "n. 戲劇；劇本",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21601,
        "en": "drastic",
        "kk": "",
        "zh": "a. 激烈的；猛烈的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21602,
        "en": "drastically",
        "kk": "",
        "zh": "ad. 大大地；徹底地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21603,
        "en": "draw",
        "kk": "",
        "zh": "v. 繪製；描寫；拉n 平局；抽籤",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21604,
        "en": "drawer",
        "kk": "",
        "zh": "n. 抽屜",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21605,
        "en": "dress",
        "kk": "",
        "zh": "code. n 穿衣法則；著裝標準",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21606,
        "en": "drift",
        "kk": "",
        "zh": "v. 漂流；漂",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21607,
        "en": "drive",
        "kk": "",
        "zh": "v. 駕駛；開車",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21608,
        "en": "drug",
        "kk": "",
        "zh": "n. 藥物；藥",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21609,
        "en": "due",
        "kk": "",
        "zh": "a. 應支付的；到期的n 應付款；稅金",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21610,
        "en": "duplicate",
        "kk": "",
        "zh": "n. 複製品；副本 a 完全一樣的；複製的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21611,
        "en": "duration",
        "kk": "",
        "zh": "n. 持久；持續期間",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21612,
        "en": "during",
        "kk": "",
        "zh": "prep. 在⋯的整個期間",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21613,
        "en": "duty",
        "kk": "",
        "zh": "n. 職務；勤務",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21614,
        "en": "dynamic",
        "kk": "",
        "zh": "a. 動力的；充滿活力的E",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21615,
        "en": "each",
        "kk": "",
        "zh": "pron. 各個；每個 a各；每",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21616,
        "en": "eager",
        "kk": "",
        "zh": "a. 熱心的；熱切的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21617,
        "en": "earn",
        "kk": "",
        "zh": "v. 掙得；博得",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21618,
        "en": "earnings",
        "kk": "",
        "zh": "n. 收入；薪資",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21619,
        "en": "ease",
        "kk": "",
        "zh": "v. 減輕，緩和 n 舒適；悠閒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21620,
        "en": "east",
        "kk": "",
        "zh": "n. 東方；東",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21621,
        "en": "easy",
        "kk": "",
        "zh": "a. 簡單的；輕易的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21622,
        "en": "eco-friendly",
        "kk": "",
        "zh": "a. 對環境友善的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21623,
        "en": "economical",
        "kk": "",
        "zh": "a. 經濟的；節儉的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21624,
        "en": "economize",
        "kk": "",
        "zh": "v. 節約；節省",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21625,
        "en": "economy",
        "kk": "",
        "zh": "n. 節約；經濟a 廉價的；經濟的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21626,
        "en": "edge",
        "kk": "",
        "zh": "n. 稜；邊緣 v 使漸進；徐徐地移動",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21627,
        "en": "edit",
        "kk": "",
        "zh": "v. 編輯；校訂",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21628,
        "en": "editor",
        "kk": "",
        "zh": "n. 編輯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21629,
        "en": "editorial",
        "kk": "",
        "zh": "n. 社論 a 編輯的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21630,
        "en": "education",
        "kk": "",
        "zh": "n. 教育",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21631,
        "en": "effect",
        "kk": "",
        "zh": "v. 造成；產生 n 效果；效力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21632,
        "en": "effective",
        "kk": "",
        "zh": "a. 有效的；生效的1051.  efﬁciencyn n 效率；效能；功效1052.  efﬁcient a 效率高的；有能力的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21633,
        "en": "effort",
        "kk": "",
        "zh": "n. 努力；盡力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21634,
        "en": "either",
        "kk": "",
        "zh": "a. 任一的 pron（兩者之中）任何一個",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21635,
        "en": "eject",
        "kk": "",
        "zh": "v. 逐出；轟出",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21636,
        "en": "elaborate",
        "kk": "",
        "zh": "v. 精心製作；詳盡闡述",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21637,
        "en": "elder",
        "kk": "",
        "zh": "a. 年長的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21638,
        "en": "elect",
        "kk": "",
        "zh": "v. 選舉；推選",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21639,
        "en": "election",
        "kk": "",
        "zh": "n. 選舉；推選",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21640,
        "en": "electric",
        "kk": "",
        "zh": "a. 電的；導電的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21641,
        "en": "electrician",
        "kk": "",
        "zh": "n. 電工；電氣技師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21642,
        "en": "electricity",
        "kk": "",
        "zh": "n. 電力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21643,
        "en": "electronic",
        "kk": "",
        "zh": "a. 電子的；電子操縱的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21644,
        "en": "elegance",
        "kk": "",
        "zh": "n. 優雅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21645,
        "en": "elegant",
        "kk": "",
        "zh": "a. 優雅的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21646,
        "en": "element",
        "kk": "",
        "zh": "n. 元素；構成",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21647,
        "en": "elemental",
        "kk": "",
        "zh": "a. 基本的；原始的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21648,
        "en": "elementary",
        "kk": "",
        "zh": "a. 基本的；初級的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21649,
        "en": "elevate",
        "kk": "",
        "zh": "v. 舉起；抬起",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21650,
        "en": "elevation",
        "kk": "",
        "zh": "n. 提高；提升",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21651,
        "en": "elevator",
        "kk": "",
        "zh": "n. 電梯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21652,
        "en": "eliminate",
        "kk": "",
        "zh": "v. 排除；消滅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21653,
        "en": "elimination",
        "kk": "",
        "zh": "n. 排除；消滅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21654,
        "en": "elite",
        "kk": "",
        "zh": "n. 精華；菁英",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21655,
        "en": "else",
        "kk": "",
        "zh": "ad. 其他；另外",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21656,
        "en": "elsewhere",
        "kk": "",
        "zh": "ad. 在別處；往別處",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21657,
        "en": "embark",
        "kk": "",
        "zh": "v. 從事；著手",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21658,
        "en": "embrace",
        "kk": "",
        "zh": "v. 擁抱；包括",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21659,
        "en": "emerge",
        "kk": "",
        "zh": "v. 浮現；出現",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21660,
        "en": "emergency",
        "kk": "",
        "zh": "n. 緊急情況；突然事件",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21661,
        "en": "emit",
        "kk": "",
        "zh": "v. 散發；放射",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21662,
        "en": "emotion",
        "kk": "",
        "zh": "n. 情感；情緒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21663,
        "en": "empathy",
        "kk": "",
        "zh": "n. 同感",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21664,
        "en": "emphasis",
        "kk": "",
        "zh": "v. 強調；重視",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21665,
        "en": "emphasize",
        "kk": "",
        "zh": "v. 強調；重視",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21666,
        "en": "employ",
        "kk": "",
        "zh": "v. 僱用；使用",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21667,
        "en": "employer",
        "kk": "",
        "zh": "n. 雇主",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21668,
        "en": "employment",
        "kk": "",
        "zh": "n. 僱用；受僱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21669,
        "en": "emulate",
        "kk": "",
        "zh": "v. 同⋯競爭；盡力趕上",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21670,
        "en": "enable",
        "kk": "",
        "zh": "v. 使能夠；賦予⋯能力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21671,
        "en": "enclosure",
        "kk": "",
        "zh": "n. 圍住；封入",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21672,
        "en": "encounter",
        "kk": "",
        "zh": "n. 遭遇；衝突v 遭遇；遇到",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21673,
        "en": "encourage",
        "kk": "",
        "zh": "v. 鼓勵；鼓舞",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21674,
        "en": "encouragement",
        "kk": "",
        "zh": "n. 鼓勵；鼓舞",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21675,
        "en": "endanger",
        "kk": "",
        "zh": "v. 危及；使遭到危險",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21676,
        "en": "endeavor",
        "kk": "",
        "zh": "v. 努力；力圖n 努力；盡力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21677,
        "en": "endorsement",
        "kk": "",
        "zh": "n. 背書；贊同",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21678,
        "en": "endure",
        "kk": "",
        "zh": "v. 忍耐；忍受",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21679,
        "en": "energetic",
        "kk": "",
        "zh": "a. 精力旺盛的；- 精神飽滿的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21680,
        "en": "energy",
        "kk": "",
        "zh": "n. 活力；幹勁",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21681,
        "en": "enforce",
        "kk": "",
        "zh": "v. 實施；執行",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21682,
        "en": "engage",
        "kk": "",
        "zh": "v. 吸引；佔用",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21683,
        "en": "engagement",
        "kk": "",
        "zh": "n. 訂婚；婚約",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21684,
        "en": "engine",
        "kk": "",
        "zh": "n. 引擎",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21685,
        "en": "engineer",
        "kk": "",
        "zh": "n. 工程師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21686,
        "en": "enhance",
        "kk": "",
        "zh": "v. 提高；升高",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21687,
        "en": "enlarge",
        "kk": "",
        "zh": "v. 擴大；擴展",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21688,
        "en": "enlargement",
        "kk": "",
        "zh": "n. 擴大；擴展",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21689,
        "en": "enlist",
        "kk": "",
        "zh": "v. 從軍；入伍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21690,
        "en": "enrich",
        "kk": "",
        "zh": "v. 使富裕；使豐富",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21691,
        "en": "enrichment",
        "kk": "",
        "zh": "n. 致富；豐富",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21692,
        "en": "enterprise",
        "kk": "",
        "zh": "n. 企業；公司",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21693,
        "en": "entertain",
        "kk": "",
        "zh": "v. 娛樂；款待",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21694,
        "en": "entertainer",
        "kk": "",
        "zh": "n. 請客者；表演者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21695,
        "en": "entertainment",
        "kk": "",
        "zh": "n. 演藝；餘興",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21696,
        "en": "enthusiasm",
        "kk": "",
        "zh": "n. 熱忱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21697,
        "en": "enthusiastic",
        "kk": "",
        "zh": "a. 熱忱的；熱血的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21698,
        "en": "entire",
        "kk": "",
        "zh": "a. 全部的；整個的n 全部；整體",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21699,
        "en": "entirel",
        "kk": "",
        "zh": "ad. 全部地；整個地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21700,
        "en": "entitle",
        "kk": "",
        "zh": "v. 給⋯權力（或資格）",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21701,
        "en": "entitled",
        "kk": "",
        "zh": "a. 給予權利；使有資格",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21702,
        "en": "entrance",
        "kk": "",
        "zh": "n. 入口；門口",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21703,
        "en": "entrust",
        "kk": "",
        "zh": "v. 信託；委託",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21704,
        "en": "entry",
        "kk": "",
        "zh": "n. 入場；參加",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21705,
        "en": "environment",
        "kk": "",
        "zh": "n. 環境",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21706,
        "en": "environmental",
        "kk": "",
        "zh": "n. 環境的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21707,
        "en": "envision",
        "kk": "",
        "zh": "v. 想像；展望",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21708,
        "en": "equal",
        "kk": "",
        "zh": "v. 平等的；均等的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21709,
        "en": "equality",
        "kk": "",
        "zh": "n. 平等；相等",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21710,
        "en": "equip",
        "kk": "",
        "zh": "v. 裝備；配備",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21711,
        "en": "equity",
        "kk": "",
        "zh": "n. 公平；公正",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21712,
        "en": "equivalent",
        "kk": "",
        "zh": "a. 相等的；相同的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21713,
        "en": "error",
        "kk": "",
        "zh": "n. 錯誤；失誤",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21714,
        "en": "escort",
        "kk": "",
        "zh": "v. 護送；陪同 n護衛隊；護航隊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21715,
        "en": "especially",
        "kk": "",
        "zh": "ad. 特別；尤其",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21716,
        "en": "essay",
        "kk": "",
        "zh": "n. 論文；散文",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21717,
        "en": "essence",
        "kk": "",
        "zh": "n. 本質；實質",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21718,
        "en": "essential",
        "kk": "",
        "zh": "a. 必要的；不可缺的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21719,
        "en": "establish",
        "kk": "",
        "zh": "v. 建立；設立",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21720,
        "en": "establishment",
        "kk": "",
        "zh": "n. 建立；設立",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21721,
        "en": "estate",
        "kk": "",
        "zh": "n. 財產；資產",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21722,
        "en": "esteem",
        "kk": "",
        "zh": "n. 尊重；尊敬 v尊重；尊敬",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21723,
        "en": "eternal",
        "kk": "",
        "zh": "a. 永恆的；永久的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21724,
        "en": "ethic",
        "kk": "",
        "zh": "n. 倫理；道德",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21725,
        "en": "ethical",
        "kk": "",
        "zh": "a. 倫理的；道德的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21726,
        "en": "ethics",
        "kk": "",
        "zh": "n. 倫理學；道德學",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21727,
        "en": "evade",
        "kk": "",
        "zh": "v. 躲避；逃避",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21728,
        "en": "evaluation",
        "kk": "",
        "zh": "n. 估價；評價",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21729,
        "en": "evasive",
        "kk": "",
        "zh": "a. 逃避的；託辭的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21730,
        "en": "even",
        "kk": "",
        "zh": "a. 平的；平坦的ad 甚至；連 v 使平坦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21731,
        "en": "event",
        "kk": "",
        "zh": "n. 事件；大事",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21732,
        "en": "eventual",
        "kk": "",
        "zh": "a. 最終的；最後的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21733,
        "en": "evidence",
        "kk": "",
        "zh": "n. 證據；證詞",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21734,
        "en": "evident",
        "kk": "",
        "zh": "a. 明顯的；明白的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21735,
        "en": "evoke",
        "kk": "",
        "zh": "v. 喚起；引起",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21736,
        "en": "evolve",
        "kk": "",
        "zh": "v. 逐步形成；發展",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21737,
        "en": "exact",
        "kk": "",
        "zh": "a. 正確的；精準的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21738,
        "en": "exaggerate",
        "kk": "",
        "zh": "v. 誇大；誇張",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21739,
        "en": "exaggeration",
        "kk": "",
        "zh": "n. 誇大：誇張",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21740,
        "en": "exam",
        "kk": "",
        "zh": "n. 考試；測驗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21741,
        "en": "examination",
        "kk": "",
        "zh": "n. 考試；測驗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21742,
        "en": "examine",
        "kk": "",
        "zh": "v. 檢驗；測試",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21743,
        "en": "examiner",
        "kk": "",
        "zh": "n. 主考人；檢查人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21744,
        "en": "example",
        "kk": "",
        "zh": "n. 範例；示範",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21745,
        "en": "excel",
        "kk": "",
        "zh": "v. 勝過；優於",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21746,
        "en": "excellent",
        "kk": "",
        "zh": "a. 出色的；傑出的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21747,
        "en": "except",
        "kk": "",
        "zh": "prep. 除⋯⋯之外conj 除了 v 把⋯⋯除外",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21748,
        "en": "exception",
        "kk": "",
        "zh": "n. 例外；例外的人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21749,
        "en": "excess",
        "kk": "",
        "zh": "n. 超越，超過 a過量的；額外的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21750,
        "en": "exchange",
        "kk": "",
        "zh": "v. 交換；調換n 交換；調換",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21751,
        "en": "excite",
        "kk": "",
        "zh": "v. 刺激；使興奮",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21752,
        "en": "exclude",
        "kk": "",
        "zh": "v. 排除在外；不包括",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21753,
        "en": "exclusion",
        "kk": "",
        "zh": "n. 排斥；排除在外",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21754,
        "en": "exclusive",
        "kk": "",
        "zh": "a. 排外的；除外的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21755,
        "en": "exclusively",
        "kk": "",
        "zh": "ad. 專門地；專有地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21756,
        "en": "execute",
        "kk": "",
        "zh": "v. 實施；處死",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21757,
        "en": "executive",
        "kk": "",
        "zh": "a. 執行的；實施的 n 執行者；行政官",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21758,
        "en": "exert",
        "kk": "",
        "zh": "v. 運用；行使",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21759,
        "en": "exhibit",
        "kk": "",
        "zh": "v. 展示，陳列 n展示品；陳列品",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21760,
        "en": "exist",
        "kk": "",
        "zh": "v. 存在；生存",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21761,
        "en": "existence",
        "kk": "",
        "zh": "n. 存在；實在",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21762,
        "en": "exit",
        "kk": "",
        "zh": "v. 出口；通道 v 出去；離去",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21763,
        "en": "expansion",
        "kk": "",
        "zh": "n. 擴展；擴張",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21764,
        "en": "expect",
        "kk": "",
        "zh": "v. 期待；預期",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21765,
        "en": "expectation",
        "kk": "",
        "zh": "n. 期待；預期",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21766,
        "en": "expedite",
        "kk": "",
        "zh": "v. 迅速執行；促進",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21767,
        "en": "expel",
        "kk": "",
        "zh": "v. 驅逐；趕走",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21768,
        "en": "expensive",
        "kk": "",
        "zh": "a. 高價的；昂貴的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21769,
        "en": "experience",
        "kk": "",
        "zh": "n. 經驗；經歷",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21770,
        "en": "experiment",
        "kk": "",
        "zh": "n. 實驗；試驗 v 進行實驗；試驗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21771,
        "en": "expert",
        "kk": "",
        "zh": "n. 專家；能手 a熟練的；老練的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21772,
        "en": "expertise",
        "kk": "",
        "zh": "n. 專門知識；專長",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21773,
        "en": "expiration",
        "kk": "",
        "zh": "n. 終結；期滿",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21774,
        "en": "explain",
        "kk": "",
        "zh": "v. 解釋；說明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21775,
        "en": "explanation",
        "kk": "",
        "zh": "n. 解釋；說明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21776,
        "en": "explode",
        "kk": "",
        "zh": "v. 爆發；爆炸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21777,
        "en": "explore",
        "kk": "",
        "zh": "v. 探險；挖掘",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21778,
        "en": "explorer",
        "kk": "",
        "zh": "n. 探險者",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21779,
        "en": "explosion",
        "kk": "",
        "zh": "n. 爆發；爆炸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21780,
        "en": "export",
        "kk": "",
        "zh": "v. 輸出；出品",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21781,
        "en": "expose",
        "kk": "",
        "zh": "v. 使暴露於；使接觸到",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21782,
        "en": "exposure",
        "kk": "",
        "zh": "n. 暴露；揭露",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21783,
        "en": "express",
        "kk": "",
        "zh": "v. 表達，陳述 a快遞的 n 快遞；快運",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21784,
        "en": "expression",
        "kk": "",
        "zh": "n. 表達；表示",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21785,
        "en": "extend",
        "kk": "",
        "zh": "v. 延長，延伸",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21786,
        "en": "extension",
        "kk": "",
        "zh": "n. 伸展；伸長",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21787,
        "en": "extensive",
        "kk": "",
        "zh": "a. 廣大的；廣闊的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21788,
        "en": "extent",
        "kk": "",
        "zh": "n. 廣度；程度",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21789,
        "en": "extra",
        "kk": "",
        "zh": "a. 額外的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21790,
        "en": "extract",
        "kk": "",
        "zh": "n. 抽出（物）；採掘",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21791,
        "en": "extraordinary",
        "kk": "",
        "zh": "a. 異常的；特別的F",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21792,
        "en": "fabric",
        "kk": "",
        "zh": "n. 布料；織布",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21793,
        "en": "fabricate",
        "kk": "",
        "zh": "v. 製造；偽造",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21794,
        "en": "face",
        "kk": "",
        "zh": "n. 臉；面孔 v 面向；正對",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21795,
        "en": "facial",
        "kk": "",
        "zh": "a. 臉的；面部的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21796,
        "en": "facilitate",
        "kk": "",
        "zh": "v. 促進；幫助",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21797,
        "en": "facilitator",
        "kk": "",
        "zh": "n. 促進者；便利措施",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21798,
        "en": "facto",
        "kk": "",
        "zh": "n. 因素；成因",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21799,
        "en": "factory",
        "kk": "",
        "zh": "n. 工廠",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21800,
        "en": "fail",
        "kk": "",
        "zh": "v. 失敗；不及格 n 失敗；不及格",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21801,
        "en": "failure",
        "kk": "",
        "zh": "n. 失敗；挫敗",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21802,
        "en": "fair",
        "kk": "",
        "zh": "a. 公平的 ad 公平地；公正地 n 集市",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21803,
        "en": "fairly",
        "kk": "",
        "zh": "ad. 公平地；公正地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21804,
        "en": "faith",
        "kk": "",
        "zh": "n. 信念；信任",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21805,
        "en": "faithful",
        "kk": "",
        "zh": "a. 忠實的；忠誠的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21806,
        "en": "falter",
        "kk": "",
        "zh": "v. 蹣跚；踉蹌 n 動搖；猶豫",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21807,
        "en": "familiar",
        "kk": "",
        "zh": "a. 眾所周知的；熟悉的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21808,
        "en": "familiarity",
        "kk": "",
        "zh": "n. 熟悉；通曉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21809,
        "en": "familiarize",
        "kk": "",
        "zh": "v. 使熟悉；使親近",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21810,
        "en": "fare",
        "kk": "",
        "zh": "n. 票價 v 過活；遭遇",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21811,
        "en": "farewell",
        "kk": "",
        "zh": "n. 告別；告別辭",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21812,
        "en": "farm",
        "kk": "",
        "zh": "n. 農場",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21813,
        "en": "fascinate",
        "kk": "",
        "zh": "v. 迷住；使神魂顛倒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21814,
        "en": "fascination",
        "kk": "",
        "zh": "n. 魅力；陶醉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21815,
        "en": "fashion",
        "kk": "",
        "zh": "n. 時尚",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21816,
        "en": "fashionable",
        "kk": "",
        "zh": "a. 流行的；時尚的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21817,
        "en": "fast",
        "kk": "",
        "zh": "a. 快速的；迅速的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21818,
        "en": "fasten",
        "kk": "",
        "zh": "v. 紮牢；繫緊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21819,
        "en": "fatal",
        "kk": "",
        "zh": "a. 命運的；決定命運的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21820,
        "en": "fate",
        "kk": "",
        "zh": "n. 命運；天命 v 命定；注定",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21821,
        "en": "father-in-law",
        "kk": "",
        "zh": "n. 岳父",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21822,
        "en": "fatigue",
        "kk": "",
        "zh": "n. 疲勞；勞累 v疲勞",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21823,
        "en": "fault",
        "kk": "",
        "zh": "n. 錯誤；失誤",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21824,
        "en": "faulty",
        "kk": "",
        "zh": "a. 有缺點的；不完美的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21825,
        "en": "favor",
        "kk": "",
        "zh": "n. 幫助；善意的行為 v 支持；擁護",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21826,
        "en": "favorable",
        "kk": "",
        "zh": "a. 贊同的；稱讚的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21827,
        "en": "favorite",
        "kk": "",
        "zh": "a. 喜愛的；喜歡的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21828,
        "en": "fax",
        "kk": "",
        "zh": "n. 傳真",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21829,
        "en": "fear",
        "kk": "",
        "zh": "n. 恐懼；害怕 v 害怕；畏懼",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21830,
        "en": "feasibility",
        "kk": "",
        "zh": "n. 可行性；可能性",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21831,
        "en": "feasible",
        "kk": "",
        "zh": "a. 可行的；可實行的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21832,
        "en": "feast",
        "kk": "",
        "zh": "n. 盛宴；筵席",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21833,
        "en": "feat",
        "kk": "",
        "zh": "n. 功績；業績",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21834,
        "en": "feature",
        "kk": "",
        "zh": "n. 特徵；特色 v以⋯⋯為特色；是⋯⋯的特色",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21835,
        "en": "federal",
        "kk": "",
        "zh": "a. 國家的；聯邦的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21836,
        "en": "fee",
        "kk": "",
        "zh": "n. 酬金；服務費 v 付費",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21837,
        "en": "feed",
        "kk": "",
        "zh": "n. 飼料；牧草 v 餵；飼養",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21838,
        "en": "feedback",
        "kk": "",
        "zh": "n. 回饋",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21839,
        "en": "fellow",
        "kk": "",
        "zh": "a. 同伴的；同事的n 傢伙；人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21840,
        "en": "fellowship",
        "kk": "",
        "zh": "n. 夥伴關係；交情",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21841,
        "en": "female",
        "kk": "",
        "zh": "n. 女性 a 女性的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21842,
        "en": "feminine",
        "kk": "",
        "zh": "a. 女性的；婦女的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21843,
        "en": "ferry",
        "kk": "",
        "zh": "v. 渡過；運送 n 擺渡；渡輪",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21844,
        "en": "fertility",
        "kk": "",
        "zh": "n. 肥沃；豐富",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21845,
        "en": "fertilize",
        "kk": "",
        "zh": "v. 使肥沃；施肥",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21846,
        "en": "fertilizer",
        "kk": "",
        "zh": "n. 肥料",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21847,
        "en": "festival",
        "kk": "",
        "zh": "n. 節日 a 節日的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21848,
        "en": "fetch",
        "kk": "",
        "zh": "v. 拿來；拿給",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21849,
        "en": "fever",
        "kk": "",
        "zh": "n. 發燒，發熱 v 發燒；高度興奮1285. ﬁber n 纖維；纖維製品1286. ﬁction n 小說；虛構1287. ﬁeld n 原野；田地1288.  ﬁerce a 兇猛的；殘酷的；好鬥的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21850,
        "en": "focus",
        "kk": "",
        "zh": "n. 焦點；焦距 v 聚焦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21851,
        "en": "fold",
        "kk": "",
        "zh": "v. 折；折疊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21852,
        "en": "folder",
        "kk": "",
        "zh": "n. 資料夾",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21853,
        "en": "foreign",
        "kk": "",
        "zh": "a. 外國的；陌生的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21854,
        "en": "foremost",
        "kk": "",
        "zh": "a. 最前的；最先的 ad 首先",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21855,
        "en": "foresee",
        "kk": "",
        "zh": "v. 預見；預知",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21856,
        "en": "form",
        "kk": "",
        "zh": "n. 形狀；外形 v 形成；構成",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21857,
        "en": "formal",
        "kk": "",
        "zh": "a. 正式的；禮節上的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21858,
        "en": "format",
        "kk": "",
        "zh": "n. 格式",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21859,
        "en": "formatted",
        "kk": "",
        "zh": "a. 格式化了的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21860,
        "en": "formula",
        "kk": "",
        "zh": "n. 公式",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21861,
        "en": "formulate",
        "kk": "",
        "zh": "v. 使公式化；用公式表示",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21862,
        "en": "fortunate",
        "kk": "",
        "zh": "a. 幸運的；僥倖的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21863,
        "en": "fortunately",
        "kk": "",
        "zh": "ad. 幸運地；僥倖地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21864,
        "en": "fortune",
        "kk": "",
        "zh": "n. 財產；好運",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21865,
        "en": "forum",
        "kk": "",
        "zh": "n. 討論會；論壇",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21866,
        "en": "forward",
        "kk": "",
        "zh": "ad. 向前 a 前面的 v 轉交；發送",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21867,
        "en": "foundation",
        "kk": "",
        "zh": "n. 建立；創辦；基金會",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21868,
        "en": "founder",
        "kk": "",
        "zh": "n. 創辦人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21869,
        "en": "fraction",
        "kk": "",
        "zh": "n. 片段；碎片",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21870,
        "en": "frame",
        "kk": "",
        "zh": "n. 架構；骨架 v建造；塑造",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21871,
        "en": "framework",
        "kk": "",
        "zh": "n. 構造；機構",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21872,
        "en": "franchisor",
        "kk": "",
        "zh": "n. 特許授予人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21873,
        "en": "frank",
        "kk": "",
        "zh": "a. 坦白的；直率的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21874,
        "en": "frankly",
        "kk": "",
        "zh": "ad. 率直地；坦白地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21875,
        "en": "fraud",
        "kk": "",
        "zh": "n. 欺騙；詭計",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21876,
        "en": "fraudulent",
        "kk": "",
        "zh": "a. 欺詐的；欺騙的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21877,
        "en": "free",
        "kk": "",
        "zh": "a. 自由的；免費的ad 免費地；無約束地 v使自由；解放",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21878,
        "en": "freedom",
        "kk": "",
        "zh": "n. 自由",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21879,
        "en": "frequency",
        "kk": "",
        "zh": "n. 頻率",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21880,
        "en": "frequent",
        "kk": "",
        "zh": "a. 頻繁的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21881,
        "en": "frequently",
        "kk": "",
        "zh": "ad. 頻繁地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21882,
        "en": "frighten",
        "kk": "",
        "zh": "v. 驚恐；害怕",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21883,
        "en": "fuel",
        "kk": "",
        "zh": "n. 燃料 v 加燃料；加油",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21884,
        "en": "fueled",
        "kk": "",
        "zh": "a. 加燃料的1356. fulﬁll v 執行；履行1357. fulﬁllment n 履行；實現",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21885,
        "en": "function",
        "kk": "",
        "zh": "n. 功能；作用 v工作；運行",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21886,
        "en": "functioning",
        "kk": "",
        "zh": "a. 運作的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21887,
        "en": "fund",
        "kk": "",
        "zh": "n. 資金",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21888,
        "en": "fundamental",
        "kk": "",
        "zh": "a. 基礎的；根本的 n 基本原則",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21889,
        "en": "funding",
        "kk": "",
        "zh": "n. 資金；基金",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21890,
        "en": "fundraiser",
        "kk": "",
        "zh": "n. 資金籌集人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21891,
        "en": "furniture",
        "kk": "",
        "zh": "n. 傢俱；設備",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21892,
        "en": "further",
        "kk": "",
        "zh": "a. 更遠的 ad 更遠地 v 促進；助長G",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21893,
        "en": "gamble",
        "kk": "",
        "zh": "n. 賭博；打賭 v賭博；打賭",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21894,
        "en": "gap",
        "kk": "",
        "zh": "v. 裂開 n 缺口；隔閡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21895,
        "en": "garbage",
        "kk": "",
        "zh": "n. 垃圾",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21896,
        "en": "garment",
        "kk": "",
        "zh": "n. 服裝；衣著",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21897,
        "en": "gasoline",
        "kk": "",
        "zh": "n. 汽油",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21898,
        "en": "gas",
        "kk": "",
        "zh": "n. 氣體；瓦斯",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21899,
        "en": "gate",
        "kk": "",
        "zh": "n. 大門；柵欄門",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21900,
        "en": "gatekeeper",
        "kk": "",
        "zh": "n. 看門人；守門員",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21901,
        "en": "gather",
        "kk": "",
        "zh": "v. 收集；召集 n聚集；收穫量",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21902,
        "en": "gathering",
        "kk": "",
        "zh": "n. 集會；聚集",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21903,
        "en": "gear",
        "kk": "",
        "zh": "n. 工具；設備 v 使適應；使適合",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21904,
        "en": "gender",
        "kk": "",
        "zh": "n. 性別",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21905,
        "en": "general",
        "kk": "",
        "zh": "a. 普通的；一般的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21906,
        "en": "generally",
        "kk": "",
        "zh": "ad. 通常；一般地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21907,
        "en": "generation",
        "kk": "",
        "zh": "n. 世代；一代",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21908,
        "en": "generosity",
        "kk": "",
        "zh": "n. 慷慨；大方",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21909,
        "en": "generous",
        "kk": "",
        "zh": "a. 慷慨的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21910,
        "en": "genius",
        "kk": "",
        "zh": "n. 天才；天資",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21911,
        "en": "gentle",
        "kk": "",
        "zh": "a. 紳士的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21912,
        "en": "gentleman",
        "kk": "",
        "zh": "n. 紳士",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21913,
        "en": "genuine",
        "kk": "",
        "zh": "a. 真誠的；不造作的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21914,
        "en": "geographic",
        "kk": "",
        "zh": "a. 地理學的；地理的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21915,
        "en": "geography",
        "kk": "",
        "zh": "n. 地理；地理學",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21916,
        "en": "germ",
        "kk": "",
        "zh": "n. 微生物；細菌",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21917,
        "en": "gesture",
        "kk": "",
        "zh": "n. 姿勢；手勢",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21918,
        "en": "getaway",
        "kk": "",
        "zh": "v. 逃走；起步",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21919,
        "en": "giant",
        "kk": "",
        "zh": "n. 巨人 a 巨人般的；巨大的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21920,
        "en": "gift",
        "kk": "",
        "zh": "n. 禮物；天賦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21921,
        "en": "gifted",
        "kk": "",
        "zh": "a. 有天資的；有天賦的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21922,
        "en": "gift-wrap",
        "kk": "",
        "zh": "v. 用包裝紙包裝",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21923,
        "en": "glamor",
        "kk": "",
        "zh": "n. 魅力；魔力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21924,
        "en": "glance",
        "kk": "",
        "zh": "v. 掃視；瞥見",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21925,
        "en": "glitch",
        "kk": "",
        "zh": "n. 小故障；失靈",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21926,
        "en": "global",
        "kk": "",
        "zh": "a. 球狀的；全世界的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21927,
        "en": "globe",
        "kk": "",
        "zh": "n. 球狀物；地球",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21928,
        "en": "gloom",
        "kk": "",
        "zh": "n. 黑暗；陰暗 v使暗；使陰沉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21929,
        "en": "glorify",
        "kk": "",
        "zh": "v. 讚美；美化",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21930,
        "en": "glory",
        "kk": "",
        "zh": "n. 光榮；榮譽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21931,
        "en": "glossary",
        "kk": "",
        "zh": "n. 詞彙表；術語",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21932,
        "en": "glove",
        "kk": "",
        "zh": "n. 手套",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21933,
        "en": "glow",
        "kk": "",
        "zh": "v. 發光；發熱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21934,
        "en": "goodwill",
        "kk": "",
        "zh": "n. 善意；好心",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21935,
        "en": "gorgeous",
        "kk": "",
        "zh": "a. 燦爛的；華麗的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21936,
        "en": "gossip",
        "kk": "",
        "zh": "n. 閒話；聊天 v閒聊",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21937,
        "en": "govern",
        "kk": "",
        "zh": "v. 統治；管理",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21938,
        "en": "government",
        "kk": "",
        "zh": "n. 政府",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21939,
        "en": "grab",
        "kk": "",
        "zh": "v. 抓取；拾取",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21940,
        "en": "grace",
        "kk": "",
        "zh": "n. 優雅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21941,
        "en": "graceful",
        "kk": "",
        "zh": "a. 優雅的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21942,
        "en": "grade",
        "kk": "",
        "zh": "n. 成績；等級",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21943,
        "en": "gradual",
        "kk": "",
        "zh": "a. 逐漸的；逐步的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21944,
        "en": "gradually",
        "kk": "",
        "zh": "ad. 逐漸地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21945,
        "en": "graduate",
        "kk": "",
        "zh": "v. 准予畢業；授與學位",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21946,
        "en": "grand",
        "kk": "",
        "zh": "a. 雄偉的；堂皇的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21947,
        "en": "grant",
        "kk": "",
        "zh": "v. 同意；允許",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21948,
        "en": "graph",
        "kk": "",
        "zh": "n. 圖表；圖解",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21949,
        "en": "grasp",
        "kk": "",
        "zh": "v. 抓牢；握緊 n抓；握",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21950,
        "en": "grateful",
        "kk": "",
        "zh": "a. 感激的；感謝的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21951,
        "en": "gratitude",
        "kk": "",
        "zh": "n. 感恩；感謝",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21952,
        "en": "gratuity",
        "kk": "",
        "zh": "n. 賞錢；小費",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21953,
        "en": "gravity",
        "kk": "",
        "zh": "n. 重力；引力",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21954,
        "en": "greed",
        "kk": "",
        "zh": "n. 貪心",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21955,
        "en": "greenhouse",
        "kk": "",
        "zh": "n. 溫室；暖房",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21956,
        "en": "grin",
        "kk": "",
        "zh": "v. 露齒而笑；齜牙咧嘴",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21957,
        "en": "grip",
        "kk": "",
        "zh": "n. 緊握；夾住",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21958,
        "en": "grocer",
        "kk": "",
        "zh": "n. 食品雜貨商",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21959,
        "en": "grocery",
        "kk": "",
        "zh": "n. 食品雜貨店",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21960,
        "en": "groom",
        "kk": "",
        "zh": "n. 新郎 v 打扮；穿戴",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21961,
        "en": "gross",
        "kk": "",
        "zh": "a. 總的；顯著的 n總額；總量",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21962,
        "en": "ground",
        "kk": "",
        "zh": "n. 地面；土地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21963,
        "en": "groundbreaking",
        "kk": "",
        "zh": "a. 開創性的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21964,
        "en": "grow",
        "kk": "",
        "zh": "v. 成長；生長",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21965,
        "en": "growth",
        "kk": "",
        "zh": "n. 成長；發育",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21966,
        "en": "guard",
        "kk": "",
        "zh": "n. 哨兵；衛兵 v防範；警惕",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21967,
        "en": "guardian",
        "kk": "",
        "zh": "n. 守護者；管理員",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21968,
        "en": "guess",
        "kk": "",
        "zh": "v. 猜測；臆測",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21969,
        "en": "guest",
        "kk": "",
        "zh": "n. 賓客；客人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21970,
        "en": "guidance",
        "kk": "",
        "zh": "n. 引領；帶領",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21971,
        "en": "guide",
        "kk": "",
        "zh": "n. 引領；帶領 v響導；指導",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21972,
        "en": "guidebook",
        "kk": "",
        "zh": "n. 旅行指南",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21973,
        "en": "guideline",
        "kk": "",
        "zh": "n. 指導方針",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21974,
        "en": "guilt",
        "kk": "",
        "zh": "n. 罪惡；過失",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21975,
        "en": "guilty",
        "kk": "",
        "zh": "n. 有罪的；罪惡的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21976,
        "en": "gym",
        "kk": "",
        "zh": "n. 體育館：體操",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21977,
        "en": "gymnasium",
        "kk": "",
        "zh": "n. 體育館；體操G",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21978,
        "en": "habit",
        "kk": "",
        "zh": "n. 嗜好；興趣",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21979,
        "en": "habitat",
        "kk": "",
        "zh": "n. 棲息地；產地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21980,
        "en": "habitual",
        "kk": "",
        "zh": "a. 習慣的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21981,
        "en": "hack",
        "kk": "",
        "zh": "v. 劈；砍",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21982,
        "en": "haircut",
        "kk": "",
        "zh": "n. 髮型；理髮",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21983,
        "en": "hairdresser",
        "kk": "",
        "zh": "n. 美髮師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21984,
        "en": "half",
        "kk": "",
        "zh": "n. 一半 a 一半的 ad一半地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21985,
        "en": "halfway",
        "kk": "",
        "zh": "a. 中途的 ad 中途地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21986,
        "en": "hall",
        "kk": "",
        "zh": "n. 會堂；大廳",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21987,
        "en": "hallmark",
        "kk": "",
        "zh": "n. 品質證明；戳記",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21988,
        "en": "hallway",
        "kk": "",
        "zh": "n. 玄關；門廳",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21989,
        "en": "halt",
        "kk": "",
        "zh": "n. 暫停；停止 v 停止；終止",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21990,
        "en": "handbag",
        "kk": "",
        "zh": "n. 手提包",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21991,
        "en": "handbook",
        "kk": "",
        "zh": "n. 手冊；旅行指南",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21992,
        "en": "handful",
        "kk": "",
        "zh": "n. 一把；一握",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21993,
        "en": "handicap",
        "kk": "",
        "zh": "n. 障礙，殘障",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21994,
        "en": "handle",
        "kk": "",
        "zh": "v. 操作；操縱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21995,
        "en": "handling",
        "kk": "",
        "zh": "n. 操作；管理",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21996,
        "en": "handout",
        "kk": "",
        "zh": "n. 施捨物；傳單；印刷品",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21997,
        "en": "handshake",
        "kk": "",
        "zh": "n. 握手",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21998,
        "en": "harbor",
        "kk": "",
        "zh": "n. 港灣；海港 v庇護；藏匿",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21999,
        "en": "hardly",
        "kk": "",
        "zh": "ad. 幾乎不；簡直不",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22000,
        "en": "hardware",
        "kk": "",
        "zh": "n. 器件；器具",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22001,
        "en": "harm",
        "kk": "",
        "zh": "n. 傷害；危害 v 傷害；危害",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22002,
        "en": "harmful",
        "kk": "",
        "zh": "a. 有害的；不良的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22003,
        "en": "harmony",
        "kk": "",
        "zh": "n. 和睦；融洽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22004,
        "en": "harvest",
        "kk": "",
        "zh": "n. 收成；產量 v收成；產量",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22005,
        "en": "hasty",
        "kk": "",
        "zh": "a. 匆忙的；急忙的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22006,
        "en": "hazard",
        "kk": "",
        "zh": "n. 危險；危害物v 冒險作出；嘗試",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22007,
        "en": "hazardous",
        "kk": "",
        "zh": "a. 有危險的；冒險的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22008,
        "en": "headline",
        "kk": "",
        "zh": "n. 標題；大標題",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22009,
        "en": "headquarter",
        "kk": "",
        "zh": "n. 總部",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22010,
        "en": "heal",
        "kk": "",
        "zh": "v. 癒合；痊癒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22011,
        "en": "health",
        "kk": "",
        "zh": "v. 健康",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22012,
        "en": "healthy",
        "kk": "",
        "zh": "a. 健康的；健全的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22013,
        "en": "hear",
        "kk": "",
        "zh": "v. 聽見；聽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22014,
        "en": "heat",
        "kk": "",
        "zh": "n. 熱度；熱烈 v 變熱；發熱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22015,
        "en": "heater",
        "kk": "",
        "zh": "n. 加熱器；暖氣機",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22016,
        "en": "heel",
        "kk": "",
        "zh": "n. 腳後跟",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22017,
        "en": "height",
        "kk": "",
        "zh": "n. 高度；海拔",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22018,
        "en": "helmet",
        "kk": "",
        "zh": "n. 帽盔；安全帽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22019,
        "en": "help",
        "kk": "",
        "zh": "n. 幫助 v 補救；治療",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22020,
        "en": "helpful",
        "kk": "",
        "zh": "a. 有幫助的；有益的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22021,
        "en": "hemisphere",
        "kk": "",
        "zh": "n. 半球；半球體",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22022,
        "en": "hence",
        "kk": "",
        "zh": "ad. 因此；由此",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22023,
        "en": "herd",
        "kk": "",
        "zh": "n. 畜群；牧群 v 放牧",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22024,
        "en": "heritage",
        "kk": "",
        "zh": "n. 遺產；命運",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22025,
        "en": "hesitate",
        "kk": "",
        "zh": "v. 躊躇；猶豫",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22026,
        "en": "hesitation",
        "kk": "",
        "zh": "n. 躊躇；猶豫",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22027,
        "en": "hidden",
        "kk": "",
        "zh": "a. 隱藏的；隱祕的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22028,
        "en": "hide",
        "kk": "",
        "zh": "v. 隱藏",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22029,
        "en": "high",
        "kk": "",
        "zh": "a. 高的；高級的 ad高聲地，在高處",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22030,
        "en": "highway",
        "kk": "",
        "zh": "n. 公路；幹道",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22031,
        "en": "hike",
        "kk": "",
        "zh": "v. 健行；遠足",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22032,
        "en": "hilarious",
        "kk": "",
        "zh": "a. 可笑的；荒謬的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22033,
        "en": "hinder",
        "kk": "",
        "zh": "v. 妨礙；阻礙",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22034,
        "en": "hint",
        "kk": "",
        "zh": "n. 暗示 v 暗示；示意",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22035,
        "en": "hire",
        "kk": "",
        "zh": "v. 僱用 n 租用；僱用",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22036,
        "en": "hobby",
        "kk": "",
        "zh": "n. 興趣；癖好",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22037,
        "en": "hold",
        "kk": "",
        "zh": "v. 握著；抓住 n 掌握；支配",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22038,
        "en": "hole",
        "kk": "",
        "zh": "n. 洞；破洞 v 鑿洞於；穿孔於",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22039,
        "en": "holiday",
        "kk": "",
        "zh": "n. 節日；假日",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22040,
        "en": "home",
        "kk": "",
        "zh": "n. 家庭；家庭生活ad 在家；回家 a 家庭的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22041,
        "en": "homesick",
        "kk": "",
        "zh": "n. 思家的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22042,
        "en": "hometown",
        "kk": "",
        "zh": "n. 故鄉；家鄉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22043,
        "en": "honest",
        "kk": "",
        "zh": "a. 誠實的；正直的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22044,
        "en": "honesty",
        "kk": "",
        "zh": "n. 誠實；正直",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22045,
        "en": "honor",
        "kk": "",
        "zh": "n. 榮譽；名譽",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22046,
        "en": "honorary",
        "kk": "",
        "zh": "a. 榮譽的; 名譽的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22047,
        "en": "hopeful",
        "kk": "",
        "zh": "a. 有希望的；有前途的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22048,
        "en": "hopeless",
        "kk": "",
        "zh": "a. 無望的；沒有辦法的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22049,
        "en": "horizon",
        "kk": "",
        "zh": "n. 地平線；眼界；視野",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22050,
        "en": "horizontal",
        "kk": "",
        "zh": "a. 水平的；橫的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22051,
        "en": "horrible",
        "kk": "",
        "zh": "a. 可怕的；令人毛骨悚然的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22052,
        "en": "horrify",
        "kk": "",
        "zh": "v. 使恐懼；使驚懼",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22053,
        "en": "hospital",
        "kk": "",
        "zh": "n. 醫院",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22054,
        "en": "hospitality",
        "kk": "",
        "zh": "n. 好客；殷勤招待",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22055,
        "en": "host",
        "kk": "",
        "zh": "n. 主人；主辦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22056,
        "en": "hostile",
        "kk": "",
        "zh": "a. 敵人的；敵方的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22057,
        "en": "hotel",
        "kk": "",
        "zh": "n. 旅館；飯店",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22058,
        "en": "hour",
        "kk": "",
        "zh": "n. 小時；時刻",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22059,
        "en": "hourly",
        "kk": "",
        "zh": "a. 每小時的 ad 每小時地；頻繁地",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22060,
        "en": "house",
        "kk": "",
        "zh": "n. 房子；住宅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22061,
        "en": "household",
        "kk": "",
        "zh": "n. 家庭，戶a 家的；家庭的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22062,
        "en": "housekeeper",
        "kk": "",
        "zh": "n. 管家；佣人",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22063,
        "en": "housing",
        "kk": "",
        "zh": "n. 房屋，住宅",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22064,
        "en": "hub",
        "kk": "",
        "zh": "n. 集線器",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22065,
        "en": "huge",
        "kk": "",
        "zh": "a. 龐大的；巨大的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22066,
        "en": "humane",
        "kk": "",
        "zh": "a. 人道的；仁慈的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22067,
        "en": "humankind",
        "kk": "",
        "zh": "n. 人類",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22068,
        "en": "human",
        "kk": "",
        "zh": "resource. n 人力資源",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22069,
        "en": "humble",
        "kk": "",
        "zh": "a. 謙遜的；謙恭的 v 使謙卑",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22070,
        "en": "humid",
        "kk": "",
        "zh": "a. 潮濕的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22071,
        "en": "humidity",
        "kk": "",
        "zh": "n. 濕氣；濕度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22072,
        "en": "humor",
        "kk": "",
        "zh": "n. 幽默感；幽默",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22073,
        "en": "hurry",
        "kk": "",
        "zh": "v. 使趕緊；催促 n急忙；倉促",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22074,
        "en": "hurt",
        "kk": "",
        "zh": "n. 受傷；疼痛 a 受傷的 v 損害；危害",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22075,
        "en": "hush",
        "kk": "",
        "zh": "n. 靜寂，沉默 v 使沉默，使安靜I",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22076,
        "en": "ice",
        "kk": "",
        "zh": "n. 冰 v 結冰",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22077,
        "en": "ice-cold",
        "kk": "",
        "zh": "a. 冰冷的；毫無感情的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22078,
        "en": "icon",
        "kk": "",
        "zh": "n. 畫像；偶像",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22079,
        "en": "icy",
        "kk": "",
        "zh": "a. 多冰的；冷冰冰的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22080,
        "en": "idea",
        "kk": "",
        "zh": "n. 打算；計畫",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22081,
        "en": "ideal",
        "kk": "",
        "zh": "a. 理想的；完美的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22082,
        "en": "idealize",
        "kk": "",
        "zh": "v. 形成理想；理想化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22083,
        "en": "identical",
        "kk": "",
        "zh": "a. 相同的；完全相似的1559.  identiﬁcation v 認出；識別",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22084,
        "en": "identify",
        "kk": "",
        "zh": "v. 認出；識別",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22085,
        "en": "idle",
        "kk": "",
        "zh": "v. 閒置的；空閒的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22086,
        "en": "idol",
        "kk": "",
        "zh": "n. 偶像",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22087,
        "en": "idolize",
        "kk": "",
        "zh": "v. 崇拜偶像",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22088,
        "en": "ignite",
        "kk": "",
        "zh": "v. 點燃；使燃燒",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22089,
        "en": "ignition",
        "kk": "",
        "zh": "n. 著火；燃燒",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22090,
        "en": "ignorance",
        "kk": "",
        "zh": "n. 無知；不學無術",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22091,
        "en": "ignorant",
        "kk": "",
        "zh": "a. 無知的；不學無術的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22092,
        "en": "ignore",
        "kk": "",
        "zh": "v. 不理會；忽視",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22093,
        "en": "ill",
        "kk": "",
        "zh": "a. 生病的；壞的 n 不幸；禍害",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22094,
        "en": "ill-advised",
        "kk": "",
        "zh": "a. 欠考慮的；輕率的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22095,
        "en": "illegal",
        "kk": "",
        "zh": "a. 違法的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22096,
        "en": "illicit",
        "kk": "",
        "zh": "a. 不法的，違禁的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22097,
        "en": "illiteracy",
        "kk": "",
        "zh": "n. 不識字；文盲",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22098,
        "en": "illness",
        "kk": "",
        "zh": "n. 患病；身體不適",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22099,
        "en": "illogical",
        "kk": "",
        "zh": "a. 不合邏輯的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22100,
        "en": "illuminate",
        "kk": "",
        "zh": "v. 照亮；照射",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22101,
        "en": "illusion",
        "kk": "",
        "zh": "n. 錯覺；幻覺",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22102,
        "en": "illustrate",
        "kk": "",
        "zh": "v. 說明；闡明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22103,
        "en": "illustration",
        "kk": "",
        "zh": "n. 描繪；插畫",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22104,
        "en": "image",
        "kk": "",
        "zh": "n. 圖像；圖案",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22105,
        "en": "imaginary",
        "kk": "",
        "zh": "a. 想像的；幻想的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22106,
        "en": "imagination",
        "kk": "",
        "zh": "n. 想像力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22107,
        "en": "imagine",
        "kk": "",
        "zh": "v. 想像",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22108,
        "en": "imitate",
        "kk": "",
        "zh": "v. 模仿",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22109,
        "en": "immature",
        "kk": "",
        "zh": "a. 不成熟的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22110,
        "en": "immediate",
        "kk": "",
        "zh": "a. 立刻的；立即的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22111,
        "en": "immediately",
        "kk": "",
        "zh": "ad. 馬上；直接地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22112,
        "en": "immense",
        "kk": "",
        "zh": "a. 巨大的；廣大的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22113,
        "en": "immigrant",
        "kk": "",
        "zh": "n. 移民；僑民a 移民的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22114,
        "en": "immobile",
        "kk": "",
        "zh": "a. 不能動的；固定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22115,
        "en": "immune",
        "kk": "",
        "zh": "a. 免疫的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22116,
        "en": "impact",
        "kk": "",
        "zh": "v. 產生影響",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22117,
        "en": "impair",
        "kk": "",
        "zh": "v. 損害；損傷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22118,
        "en": "impartial",
        "kk": "",
        "zh": "a. 公正的；無偏見的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22119,
        "en": "impatient",
        "kk": "",
        "zh": "a. 不耐煩的，沒耐心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22120,
        "en": "impeccable",
        "kk": "",
        "zh": "a. 無懈可擊的；無缺點的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22121,
        "en": "impede",
        "kk": "",
        "zh": "v. 妨礙；阻礙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22122,
        "en": "imperative",
        "kk": "",
        "zh": "a. 必要的；緊急的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22123,
        "en": "implement",
        "kk": "",
        "zh": "n. 工具；器具 v 履行；實施",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22124,
        "en": "implementation",
        "kk": "",
        "zh": "n. 履行；完成",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22125,
        "en": "implication",
        "kk": "",
        "zh": "n. 牽連；涉及",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22126,
        "en": "imply",
        "kk": "",
        "zh": "v. 暗指；暗示",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22127,
        "en": "impolite",
        "kk": "",
        "zh": "a. 失禮的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22128,
        "en": "import",
        "kk": "",
        "zh": "n. 進口；輸入",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22129,
        "en": "importance",
        "kk": "",
        "zh": "n. 重要性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22130,
        "en": "important",
        "kk": "",
        "zh": "a. 重要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22131,
        "en": "impose",
        "kk": "",
        "zh": "v. 強加於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22132,
        "en": "impossible",
        "kk": "",
        "zh": "a. 不可能的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22133,
        "en": "impractical",
        "kk": "",
        "zh": "a. 不實際的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22134,
        "en": "impress",
        "kk": "",
        "zh": "v. 使感動；使銘記",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22135,
        "en": "impression",
        "kk": "",
        "zh": "n. 印象",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22136,
        "en": "impressive",
        "kk": "",
        "zh": "a. 印象深刻的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22137,
        "en": "improper",
        "kk": "",
        "zh": "a. 不合適的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22138,
        "en": "improve",
        "kk": "",
        "zh": "v. 增強；改善",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22139,
        "en": "improvement",
        "kk": "",
        "zh": "n. 增強；改善",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22140,
        "en": "impulse",
        "kk": "",
        "zh": "n. 衝動；刺激",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22141,
        "en": "inability",
        "kk": "",
        "zh": "n. 無能；無力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22142,
        "en": "inaccurate",
        "kk": "",
        "zh": "a. 不正確的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22143,
        "en": "inactive",
        "kk": "",
        "zh": "a. 不活躍的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22144,
        "en": "inadequate",
        "kk": "",
        "zh": "n. 不適切的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22145,
        "en": "inbound",
        "kk": "",
        "zh": "a. 回內地的；歸本國的1622.  Inc. n 法人組織；公司 (=incorporation)",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22146,
        "en": "incentive",
        "kk": "",
        "zh": "n. 鼓勵；動機a 刺激的；鼓勵的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22147,
        "en": "inch",
        "kk": "",
        "zh": "n. 英吋；少許 v 緩慢地移動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22148,
        "en": "incident",
        "kk": "",
        "zh": "n. 事件；事變",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22149,
        "en": "incidental",
        "kk": "",
        "zh": "n. 附帶的；伴隨的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22150,
        "en": "incinerate",
        "kk": "",
        "zh": "v. 焚化；灰化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22151,
        "en": "incinerator",
        "kk": "",
        "zh": "n. 焚化爐",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22152,
        "en": "inclination",
        "kk": "",
        "zh": "n. 傾向；意向",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22153,
        "en": "incline",
        "kk": "",
        "zh": "v. 傾斜；屈身",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22154,
        "en": "include",
        "kk": "",
        "zh": "v. 包括；包含",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22155,
        "en": "including",
        "kk": "",
        "zh": "prep. 包括；包含",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22156,
        "en": "inclusive",
        "kk": "",
        "zh": "a. 包含的，包括的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22157,
        "en": "incoherent",
        "kk": "",
        "zh": "a. 無條理的；不一貫的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22158,
        "en": "income",
        "kk": "",
        "zh": "n. 收入；收益",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22159,
        "en": "incoming",
        "kk": "",
        "zh": "a. 進來的 n 進來；收入",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22160,
        "en": "incompetent",
        "kk": "",
        "zh": "a. 無能力的；不能勝任的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22161,
        "en": "incomplete",
        "kk": "",
        "zh": "a. 不完全的；不完整的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22162,
        "en": "inconsistent",
        "kk": "",
        "zh": "a. 不一致的；不協調的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22163,
        "en": "inconvenience",
        "kk": "",
        "zh": "n. 不方便",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22164,
        "en": "inconvenient",
        "kk": "",
        "zh": "a. 不方便的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22165,
        "en": "incorporate",
        "kk": "",
        "zh": "v. 合併；混合；組成公司",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22166,
        "en": "incorporation",
        "kk": "",
        "zh": "n. 公司；團結",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22167,
        "en": "incorrect",
        "kk": "",
        "zh": "a. 不正確的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22168,
        "en": "increase",
        "kk": "",
        "zh": "v. 增加；增多n 增加",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22169,
        "en": "incredibility",
        "kk": "",
        "zh": "n. 不可信",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22170,
        "en": "incredible",
        "kk": "",
        "zh": "a. 難以置信的；驚人的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22171,
        "en": "incur",
        "kk": "",
        "zh": "v. 招致；惹起",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22172,
        "en": "indebt",
        "kk": "",
        "zh": "v. 使負債",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22173,
        "en": "indecisive",
        "kk": "",
        "zh": "a. 優柔寡斷的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22174,
        "en": "indeed",
        "kk": "",
        "zh": "ad. 真正地；確實1652.  indeﬁnite a 不確定的；未定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22175,
        "en": "independent",
        "kk": "",
        "zh": "a. 獨立的；自主的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22176,
        "en": "in-depth",
        "kk": "",
        "zh": "a. 深入的；徹底的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22177,
        "en": "index",
        "kk": "",
        "zh": "n. 索引 v 表明；指示",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22178,
        "en": "indicate",
        "kk": "",
        "zh": "v. 指示；指出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22179,
        "en": "indication",
        "kk": "",
        "zh": "n. 徵兆；跡象",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22180,
        "en": "indicator",
        "kk": "",
        "zh": "n. 指示者；指示物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22181,
        "en": "indifference",
        "kk": "",
        "zh": "n. 漠不關心；冷淡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22182,
        "en": "indifferent",
        "kk": "",
        "zh": "a. 冷淡的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22183,
        "en": "indispensable",
        "kk": "",
        "zh": "a. 必需的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22184,
        "en": "individual",
        "kk": "",
        "zh": "a. 個體的；個人的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22185,
        "en": "indoor",
        "kk": "",
        "zh": "a. 室內的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22186,
        "en": "indoors",
        "kk": "",
        "zh": "ad. 在室內；在屋裡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22187,
        "en": "industrial",
        "kk": "",
        "zh": "a. 工業的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22188,
        "en": "industrialize",
        "kk": "",
        "zh": "v. 工業化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22189,
        "en": "industry",
        "kk": "",
        "zh": "n. 工業；企業",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22190,
        "en": "inevitable",
        "kk": "",
        "zh": "a. 無法避免的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22191,
        "en": "inevitably",
        "kk": "",
        "zh": "ad. 無法避免地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22192,
        "en": "infamous",
        "kk": "",
        "zh": "a. 聲名狼藉的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22193,
        "en": "infancy",
        "kk": "",
        "zh": "n. 嬰兒期；幼年",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22194,
        "en": "infant",
        "kk": "",
        "zh": "n. 嬰兒 a 嬰兒的；初期的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22195,
        "en": "infect",
        "kk": "",
        "zh": "v. 使受影響；感染",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22196,
        "en": "infection",
        "kk": "",
        "zh": "n. 傳染；侵染",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22197,
        "en": "infer",
        "kk": "",
        "zh": "v. 推論；推斷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22198,
        "en": "inference",
        "kk": "",
        "zh": "n. 推論；推斷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22199,
        "en": "inferior",
        "kk": "",
        "zh": "a. 低等的；下級的1678. inﬁnite a 無限的1679. inﬁnity n 無限1680. inﬂation n 通貨膨脹1681.  inﬂict v 給予（打擊）；使遭受1682. inﬂuence n 影響；作用1683. inﬂux n 湧進；匯集",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22200,
        "en": "info",
        "kk": "",
        "zh": "n. 通知；報告",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22201,
        "en": "inform",
        "kk": "",
        "zh": "v. 通知；告知",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22202,
        "en": "informal",
        "kk": "",
        "zh": "a. 不正式的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22203,
        "en": "information",
        "kk": "",
        "zh": "n. 資訊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22204,
        "en": "informative",
        "kk": "",
        "zh": "a. 見聞廣博的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22205,
        "en": "infrastructure",
        "kk": "",
        "zh": "n. 公共建設",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22206,
        "en": "ingredient",
        "kk": "",
        "zh": "n. 組成；原料",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22207,
        "en": "inhabit",
        "kk": "",
        "zh": "v. 居住於；棲息於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22208,
        "en": "inhabitant",
        "kk": "",
        "zh": "n. 居民；居住者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22209,
        "en": "inherent",
        "kk": "",
        "zh": "a. 內在的；固有的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22210,
        "en": "initial",
        "kk": "",
        "zh": "a. 開始的；最初的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22211,
        "en": "initially",
        "kk": "",
        "zh": "ad. 開始的；最初的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22212,
        "en": "initiate",
        "kk": "",
        "zh": "a. 新加入的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22213,
        "en": "initiation",
        "kk": "",
        "zh": "n. 開始；創始",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22214,
        "en": "initiative",
        "kk": "",
        "zh": "a. 創始的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22215,
        "en": "inject",
        "kk": "",
        "zh": "v. 注射",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22216,
        "en": "injection",
        "kk": "",
        "zh": "n. 注射",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22217,
        "en": "injure",
        "kk": "",
        "zh": "v. 傷害；損害",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22218,
        "en": "injured",
        "kk": "",
        "zh": "a. 受傷的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22219,
        "en": "injury",
        "kk": "",
        "zh": "n. 受傷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22220,
        "en": "inner",
        "kk": "",
        "zh": "a. 內部的；核心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22221,
        "en": "innocent",
        "kk": "",
        "zh": "a. 無辜的；單純的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22222,
        "en": "innovate",
        "kk": "",
        "zh": "v. 創立；革新",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22223,
        "en": "innovation",
        "kk": "",
        "zh": "n. 創新",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22224,
        "en": "innovator",
        "kk": "",
        "zh": "n. 創新者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22225,
        "en": "inquire",
        "kk": "",
        "zh": "v. 詢問；打聽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22226,
        "en": "insane",
        "kk": "",
        "zh": "a. 精神錯亂的；瘋狂的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22227,
        "en": "insanity",
        "kk": "",
        "zh": "n. 瘋狂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22228,
        "en": "insecure",
        "kk": "",
        "zh": "a. 不安全的；有危險的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22229,
        "en": "insecurity",
        "kk": "",
        "zh": "n. 不安全；危險",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22230,
        "en": "insert",
        "kk": "",
        "zh": "v. 插入；嵌入",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22231,
        "en": "inside",
        "kk": "",
        "zh": "n. 內部；裡面 a在裡面 prep 在⋯⋯的裡面",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22232,
        "en": "insider",
        "kk": "",
        "zh": "n. 內部的人；會員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22233,
        "en": "insight",
        "kk": "",
        "zh": "n. 見解；看法1719. insigniﬁcant a 不重要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22234,
        "en": "insist",
        "kk": "",
        "zh": "v. 堅持",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22235,
        "en": "inspect",
        "kk": "",
        "zh": "v. 檢查；審查",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22236,
        "en": "inspection",
        "kk": "",
        "zh": "n. 檢查；審查",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22237,
        "en": "inspector",
        "kk": "",
        "zh": "n. 檢查員；視察員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22238,
        "en": "inspiration",
        "kk": "",
        "zh": "n. 靈感；鼓舞",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22239,
        "en": "inspire",
        "kk": "",
        "zh": "v. 鼓舞；激勵",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22240,
        "en": "inspiring",
        "kk": "",
        "zh": "a. 激勵人心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22241,
        "en": "install",
        "kk": "",
        "zh": "v. 安裝；設置",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22242,
        "en": "installment",
        "kk": "",
        "zh": "n. 安裝；設置",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22243,
        "en": "instance",
        "kk": "",
        "zh": "n. 例子；實例v 引證",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22244,
        "en": "instant",
        "kk": "",
        "zh": "a. 立即的；即刻的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22245,
        "en": "instantaneously",
        "kk": "",
        "zh": "ad. 即刻；突如其來地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22246,
        "en": "instead",
        "kk": "",
        "zh": "ad. 反而，卻",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22247,
        "en": "institute",
        "kk": "",
        "zh": "n. 協會；學院 v創立；設立",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22248,
        "en": "institution",
        "kk": "",
        "zh": "n. 制度；機構",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22249,
        "en": "instruct",
        "kk": "",
        "zh": "n. 命令；指示",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22250,
        "en": "instructor",
        "kk": "",
        "zh": "n. 教練；指導者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22251,
        "en": "instrument",
        "kk": "",
        "zh": "n. 樂器；儀器；器具",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22252,
        "en": "instrumental",
        "kk": "",
        "zh": "a. 用樂器演奏的；有幫助的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22253,
        "en": "insult",
        "kk": "",
        "zh": "v. 侮辱；羞辱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22254,
        "en": "insure",
        "kk": "",
        "zh": "v. 保證；確保",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22255,
        "en": "integrity",
        "kk": "",
        "zh": "n. 正直",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22256,
        "en": "intelligence",
        "kk": "",
        "zh": "n. 聰明才智",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22257,
        "en": "intend",
        "kk": "",
        "zh": "v. 想要；打算",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22258,
        "en": "intense",
        "kk": "",
        "zh": "a. 強烈的；劇烈的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22259,
        "en": "intensify",
        "kk": "",
        "zh": "v. 加強；增強",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22260,
        "en": "intensive",
        "kk": "",
        "zh": "a. 加強的；密集的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22261,
        "en": "intent",
        "kk": "",
        "zh": "v. 意圖；目的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22262,
        "en": "intention",
        "kk": "",
        "zh": "n. 意圖；目的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22263,
        "en": "interchangeable",
        "kk": "",
        "zh": "a. 可交換的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22264,
        "en": "interest",
        "kk": "",
        "zh": "n. 興趣；喜好；利息",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22265,
        "en": "interfere",
        "kk": "",
        "zh": "v. 妨礙；衝突",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22266,
        "en": "interior",
        "kk": "",
        "zh": "a. 內部的；內側的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22267,
        "en": "intermittent",
        "kk": "",
        "zh": "a. 間歇的；週期性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22268,
        "en": "internal",
        "kk": "",
        "zh": "a. 內部的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22269,
        "en": "international",
        "kk": "",
        "zh": "a. 國際的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22270,
        "en": "internationalize",
        "kk": "",
        "zh": "v. 使國際化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22271,
        "en": "interpret",
        "kk": "",
        "zh": "v. 解釋；說明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22272,
        "en": "interpreter",
        "kk": "",
        "zh": "n. 口譯者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22273,
        "en": "interrupt",
        "kk": "",
        "zh": "v. 打擾；干擾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22274,
        "en": "interruption",
        "kk": "",
        "zh": "n. 打擾；干擾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22275,
        "en": "interview",
        "kk": "",
        "zh": "n. 訪談；面試",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22276,
        "en": "interviewee",
        "kk": "",
        "zh": "n. 被面試的人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22277,
        "en": "interviewer",
        "kk": "",
        "zh": "n. 採訪者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22278,
        "en": "intricate",
        "kk": "",
        "zh": "a. 錯綜複雜的；複雜精細的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22279,
        "en": "introduce",
        "kk": "",
        "zh": "v. 介紹；引見",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22280,
        "en": "introduction",
        "kk": "",
        "zh": "n. 介紹；引見",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22281,
        "en": "introductory",
        "kk": "",
        "zh": "a. 介紹的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22282,
        "en": "invent",
        "kk": "",
        "zh": "v. 發明；創造",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22283,
        "en": "invention",
        "kk": "",
        "zh": "n. 發明；創造",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22284,
        "en": "inventive",
        "kk": "",
        "zh": "a. 發明的；創造的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22285,
        "en": "inventor",
        "kk": "",
        "zh": "n. 發明家；創作者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22286,
        "en": "invest",
        "kk": "",
        "zh": "v. 投資",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22287,
        "en": "investment",
        "kk": "",
        "zh": "n. 投資",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22288,
        "en": "investor",
        "kk": "",
        "zh": "n. 投資者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22289,
        "en": "invisible",
        "kk": "",
        "zh": "a. 看不見的；無形的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22290,
        "en": "invitation",
        "kk": "",
        "zh": "n. 邀請；邀請函",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22291,
        "en": "invite",
        "kk": "",
        "zh": "v. 邀請",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22292,
        "en": "involve",
        "kk": "",
        "zh": "v. 涉入；參與",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22293,
        "en": "involvement",
        "kk": "",
        "zh": "n. 參與",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22294,
        "en": "irrelevant",
        "kk": "",
        "zh": "a. 不相干的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22295,
        "en": "issue",
        "kk": "",
        "zh": "v. 發行；配給 n 問題；爭論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22296,
        "en": "item",
        "kk": "",
        "zh": "n. 項目；條款",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22297,
        "en": "itemize",
        "kk": "",
        "zh": "v. 分條列述；詳細列舉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22298,
        "en": "janitor",
        "kk": "",
        "zh": "n. 看門人的工友",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22299,
        "en": "job",
        "kk": "",
        "zh": "n. 工作；職業",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22300,
        "en": "jobless",
        "kk": "",
        "zh": "a. 失業的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22301,
        "en": "jog",
        "kk": "",
        "zh": "n. 慢跑；緩行 v 慢跑；輕搖",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22302,
        "en": "join",
        "kk": "",
        "zh": "v. 參與；參加",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22303,
        "en": "joint",
        "kk": "",
        "zh": "n. 關節；接合點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22304,
        "en": "journal",
        "kk": "",
        "zh": "n. 日報；雜誌",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22305,
        "en": "journalist",
        "kk": "",
        "zh": "n. 新聞工作者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22306,
        "en": "journey",
        "kk": "",
        "zh": "n. 旅行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22307,
        "en": "judge",
        "kk": "",
        "zh": "v. 審判；判決 n法官；評判",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22308,
        "en": "judgmental",
        "kk": "",
        "zh": "a. 判定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22309,
        "en": "junction",
        "kk": "",
        "zh": "n. 連接；接合；交叉點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22310,
        "en": "justice",
        "kk": "",
        "zh": "n. 正義；公平",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22311,
        "en": "justify",
        "kk": "",
        "zh": "v. 證明無罪；開釋K",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22312,
        "en": "keen",
        "kk": "",
        "zh": "a. 熱心的；敏銳的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22313,
        "en": "keenly",
        "kk": "",
        "zh": "ad. 敏銳地；銳利地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22314,
        "en": "keep",
        "kk": "",
        "zh": "v. 持有；保有",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22315,
        "en": "keeper",
        "kk": "",
        "zh": "n. 飼養者；保管人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22316,
        "en": "key",
        "kk": "",
        "zh": "n. 鑰匙；關鍵",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22317,
        "en": "keyboard",
        "kk": "",
        "zh": "n. 鍵盤",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22318,
        "en": "kick",
        "kk": "",
        "zh": "v. 踢；剔除",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22319,
        "en": "kickoff",
        "kk": "",
        "zh": "n. 開球；開始",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22320,
        "en": "kid",
        "kk": "",
        "zh": "n. 小孩；兒童",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22321,
        "en": "kidna",
        "kk": "",
        "zh": "v. 綁架",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22322,
        "en": "kidnapper",
        "kk": "",
        "zh": "n. 綁票者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22323,
        "en": "kidney",
        "kk": "",
        "zh": "n. 腎臟",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22324,
        "en": "kilogram",
        "kk": "",
        "zh": "n. 公斤",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22325,
        "en": "kilometer",
        "kk": "",
        "zh": "n. 公里",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22326,
        "en": "kin",
        "kk": "",
        "zh": "a. 同類的；類似的 n家族；親戚",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22327,
        "en": "kind",
        "kk": "",
        "zh": "a. 親切的；和藹的n 種類",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22328,
        "en": "kindly",
        "kk": "",
        "zh": "a. 親切的；和藹的ad 親切地；勞駕，請",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22329,
        "en": "kindness",
        "kk": "",
        "zh": "n. 親切；寬大",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22330,
        "en": "kit",
        "kk": "",
        "zh": "n. 成套工具",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22331,
        "en": "know",
        "kk": "",
        "zh": "v. 知道；了解",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22332,
        "en": "knowingly",
        "kk": "",
        "zh": "ad. 熟悉地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22333,
        "en": "knowledge",
        "kk": "",
        "zh": "n. 知識",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22334,
        "en": "knowledgeable",
        "kk": "",
        "zh": "a. 博學的；有見識的L",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22335,
        "en": "lab",
        "kk": "",
        "zh": "n. 實驗室",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22336,
        "en": "label",
        "kk": "",
        "zh": "n. 貼紙；標籤 v 貼標籤於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22337,
        "en": "labor",
        "kk": "",
        "zh": "n. 勞工；勞動 v 勞動；艱苦地幹活",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22338,
        "en": "laboratory",
        "kk": "",
        "zh": "n. 實驗室",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22339,
        "en": "lack",
        "kk": "",
        "zh": "v. 缺少；缺乏 n 欠缺；不足",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22340,
        "en": "lacking",
        "kk": "",
        "zh": "a. 缺乏的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22341,
        "en": "lag",
        "kk": "",
        "zh": "v. 落後；延遲 n 落後；延遲",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22342,
        "en": "laid-back",
        "kk": "",
        "zh": "a. 懶散的；閒散的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22343,
        "en": "lamentl",
        "kk": "",
        "zh": "n. 哀悼；悲痛；v 哀悼，悲痛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22344,
        "en": "lamp",
        "kk": "",
        "zh": "n. 燈；油燈 v 照；照亮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22345,
        "en": "land",
        "kk": "",
        "zh": "n. 陸地；田地；地產 v 登陸；降落",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22346,
        "en": "landing",
        "kk": "",
        "zh": "n. 降落，著落",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22347,
        "en": "landlady",
        "kk": "",
        "zh": "n. 女房東；女地主",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22348,
        "en": "landlord",
        "kk": "",
        "zh": "n. 地主；房東",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22349,
        "en": "landmark",
        "kk": "",
        "zh": "n. 地標；里程碑",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22350,
        "en": "landscape",
        "kk": "",
        "zh": "n. 風景；景色",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22351,
        "en": "landscaper",
        "kk": "",
        "zh": "n. 庭園設計家",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22352,
        "en": "languish",
        "kk": "",
        "zh": "v. 變得無生氣；衰弱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22353,
        "en": "lapse",
        "kk": "",
        "zh": "v. 時間流逝；跌落v 流逝；背離",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22354,
        "en": "large",
        "kk": "",
        "zh": "a. 大的；巨大的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22355,
        "en": "large-scale",
        "kk": "",
        "zh": "a. 大規模的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22356,
        "en": "lash",
        "kk": "",
        "zh": "n. 鞭打；抽打 v 鞭打；抽打",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22357,
        "en": "last",
        "kk": "",
        "zh": "v. 持續；維持1849. lasting 持久的；持續的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22358,
        "en": "last-minute",
        "kk": "",
        "zh": "a. 最後的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22359,
        "en": "late",
        "kk": "",
        "zh": "a. 遲的；已故的；晚期的  ad 遲到；來不及",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22360,
        "en": "lately",
        "kk": "",
        "zh": "a. 近來；最近",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22361,
        "en": "later",
        "kk": "",
        "zh": "a. 較晚的；更晚的ad 後來；以後",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22362,
        "en": "latter",
        "kk": "",
        "zh": "a. 後者的；後面的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22363,
        "en": "laundry",
        "kk": "",
        "zh": "n. 洗衣店；送洗的衣服",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22364,
        "en": "lavatory",
        "kk": "",
        "zh": "n. 盥洗室；洗手間",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22365,
        "en": "law",
        "kk": "",
        "zh": "n. 法律；規則",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22366,
        "en": "lawful",
        "kk": "",
        "zh": "a. 合法的；法定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22367,
        "en": "lawsuit",
        "kk": "",
        "zh": "n. 訴訟",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22368,
        "en": "lawyer",
        "kk": "",
        "zh": "n. 律師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22369,
        "en": "lay",
        "kk": "",
        "zh": "v. 放；擱；下蛋",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22370,
        "en": "layer",
        "kk": "",
        "zh": "n. 層；階層",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22371,
        "en": "layoff",
        "kk": "",
        "zh": "n. 解雇",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22372,
        "en": "layout",
        "kk": "",
        "zh": "n. 安排；設計陳列",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22373,
        "en": "lead",
        "kk": "",
        "zh": "v. 領導；帶領",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22374,
        "en": "leader",
        "kk": "",
        "zh": "n. 領導",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22375,
        "en": "leading",
        "kk": "",
        "zh": "a. 領路的；帶領的1869.  leaﬂet n 傳單；單張印刷品",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22376,
        "en": "league",
        "kk": "",
        "zh": "n. 同盟；聯盟 v同盟；聯盟",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22377,
        "en": "leak",
        "kk": "",
        "zh": "n. 漏洞；裂縫 v 洩漏",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22378,
        "en": "leakage",
        "kk": "",
        "zh": "n. 漏；洩漏",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22379,
        "en": "lean",
        "kk": "",
        "zh": "v. 傾身；屈身",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22380,
        "en": "leap",
        "kk": "",
        "zh": "v. 跳過；越過 n 跳；跳躍",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22381,
        "en": "learn",
        "kk": "",
        "zh": "v. 學習；學會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22382,
        "en": "least",
        "kk": "",
        "zh": "a. 最小的；最少的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22383,
        "en": "leathe",
        "kk": "",
        "zh": "n. 皮革 a 皮的；皮革製的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22384,
        "en": "leave",
        "kk": "",
        "zh": "v. 離開；脫離",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22385,
        "en": "lecture",
        "kk": "",
        "zh": "n. 授課；演講",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22386,
        "en": "legal",
        "kk": "",
        "zh": "a. 合法的；正當的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22387,
        "en": "legalize",
        "kk": "",
        "zh": "v. 使合法化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22388,
        "en": "legitimate",
        "kk": "",
        "zh": "a. 合法的；正統的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22389,
        "en": "leisure",
        "kk": "",
        "zh": "n. 閒暇；空暇時間 a 空閒的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22390,
        "en": "lend",
        "kk": "",
        "zh": "v. 借；提供",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22391,
        "en": "lesson",
        "kk": "",
        "zh": "n. 課程；學習",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22392,
        "en": "letter",
        "kk": "",
        "zh": "n. 信；書信",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22393,
        "en": "letterhead",
        "kk": "",
        "zh": "n. 印在信紙的信頭",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22394,
        "en": "level",
        "kk": "",
        "zh": "n. 水平面；程度 a同水平的；同程度的 v使平等",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22395,
        "en": "leverage",
        "kk": "",
        "zh": "n. 手段；力量；影響力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22396,
        "en": "liable",
        "kk": "",
        "zh": "a. 易⋯⋯的；可能的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22397,
        "en": "liberal",
        "kk": "",
        "zh": "a. 開明的；不守舊的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22398,
        "en": "library",
        "kk": "",
        "zh": "n. 圖書館",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22399,
        "en": "license",
        "kk": "",
        "zh": "n. 證照；許可 v發許可證給",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22400,
        "en": "lifestyle",
        "kk": "",
        "zh": "n. 生活方式",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22401,
        "en": "likelihood",
        "kk": "",
        "zh": "n. 可能；可能性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22402,
        "en": "likely",
        "kk": "",
        "zh": "a. 適當的；可能的ad 很可能",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22403,
        "en": "limit",
        "kk": "",
        "zh": "v. 界線；界限 v 限制；限定",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22404,
        "en": "limited",
        "kk": "",
        "zh": "a. 有限的；不多的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22405,
        "en": "link",
        "kk": "",
        "zh": "n. 連結；聯繫 v 連接；結合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22406,
        "en": "list",
        "kk": "",
        "zh": "n. 表；名冊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22407,
        "en": "litter",
        "kk": "",
        "zh": "n. 廢棄物；雜亂 v弄得亂七八糟；使充滿",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22408,
        "en": "load",
        "kk": "",
        "zh": "n. 負擔；重任 v 裝；裝載",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22409,
        "en": "loan",
        "kk": "",
        "zh": "n. 貸款 v 借出；貸與",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22410,
        "en": "local",
        "kk": "",
        "zh": "a. 當地的；本地的n 本地人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22411,
        "en": "locate",
        "kk": "",
        "zh": "v. 設置在；座落於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22412,
        "en": "located",
        "kk": "",
        "zh": "a. 坐落的；位於的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22413,
        "en": "location",
        "kk": "",
        "zh": "n. 地點；定位",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22414,
        "en": "lock",
        "kk": "",
        "zh": "n. 鎖 v 鎖上",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22415,
        "en": "locksmith",
        "kk": "",
        "zh": "n. 鎖匠",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22416,
        "en": "logo",
        "kk": "",
        "zh": "n. 標識",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22417,
        "en": "loom",
        "kk": "",
        "zh": "n. 織布機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22418,
        "en": "lose",
        "kk": "",
        "zh": "v. 丟失；輸去；賠錢",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22419,
        "en": "loss",
        "kk": "",
        "zh": "n. 喪失；遺失",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22420,
        "en": "lounge",
        "kk": "",
        "zh": "n. 閒蕩；躺椅 v閒蕩；閒逛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22421,
        "en": "loyal",
        "kk": "",
        "zh": "a. 忠誠的；忠心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22422,
        "en": "loyalty",
        "kk": "",
        "zh": "n. 忠誠；忠心",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22423,
        "en": "lucrative",
        "kk": "",
        "zh": "a. 賺錢的；有利可圖的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22424,
        "en": "luggage",
        "kk": "",
        "zh": "n. 行李",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22425,
        "en": "lumber",
        "kk": "",
        "zh": "n. 木材；木料 n採伐M",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22426,
        "en": "mad",
        "kk": "",
        "zh": "a. 發瘋的；發狂的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22427,
        "en": "madness",
        "kk": "",
        "zh": "n. 瘋狂；神經錯亂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22428,
        "en": "magazine",
        "kk": "",
        "zh": "n. 雜誌1926.  magniﬁcent a 壯麗的；宏偉的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22429,
        "en": "mail",
        "kk": "",
        "zh": "n. 信件：郵件 v 郵寄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22430,
        "en": "mailing",
        "kk": "",
        "zh": "n. 郵寄；郵件",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22431,
        "en": "main",
        "kk": "",
        "zh": "a. 主要的；最重要的 n 主要部分；要點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22432,
        "en": "mainframe",
        "kk": "",
        "zh": "n. 主機；中央處理器",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22433,
        "en": "maintain",
        "kk": "",
        "zh": "v. 維持；保持",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22434,
        "en": "major",
        "kk": "",
        "zh": "a. 主要的；一流的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22435,
        "en": "majority",
        "kk": "",
        "zh": "n. 多數派；大多數",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22436,
        "en": "mall",
        "kk": "",
        "zh": "n. 購物中心",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22437,
        "en": "manage",
        "kk": "",
        "zh": "v. 管理；經營",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22438,
        "en": "management",
        "kk": "",
        "zh": "n. 管理；經營",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22439,
        "en": "manager",
        "kk": "",
        "zh": "n. 經理；主任",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22440,
        "en": "managerial",
        "kk": "",
        "zh": "a. 管理人的；經理的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22441,
        "en": "mandate",
        "kk": "",
        "zh": "n. 命令；指令",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22442,
        "en": "manner",
        "kk": "",
        "zh": "n. 方式；態度；禮貌",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22443,
        "en": "manual",
        "kk": "",
        "zh": "a. 手的；手工的n 手冊；便覽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22444,
        "en": "manually",
        "kk": "",
        "zh": "ad. 手工地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22445,
        "en": "manufacturer",
        "kk": "",
        "zh": "n. 製造業者；廠商",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22446,
        "en": "mark",
        "kk": "",
        "zh": "n. 痕跡；汙點；記號 v 記下；標明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22447,
        "en": "market",
        "kk": "",
        "zh": "n. 市場；銷路",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22448,
        "en": "match",
        "kk": "",
        "zh": "n. 比賽；競賽 v相配；相適合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22449,
        "en": "maternal",
        "kk": "",
        "zh": "a. 母親的；母性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22450,
        "en": "matter",
        "kk": "",
        "zh": "n. 事情；問題；事件 v 有關係；要緊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22451,
        "en": "maximum",
        "kk": "",
        "zh": "n. 最大量；最大數 a 最大的；最多的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22452,
        "en": "mayor",
        "kk": "",
        "zh": "n. 市長",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22453,
        "en": "mean",
        "kk": "",
        "zh": "a. 吝嗇的；小氣的v 表示⋯的意思",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22454,
        "en": "meaning",
        "kk": "",
        "zh": "n. 意思；含義a 意味深長的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22455,
        "en": "measurable",
        "kk": "",
        "zh": "a. 可測量的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22456,
        "en": "measure",
        "kk": "",
        "zh": "v. 測量；計量n 措施；手段",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22457,
        "en": "measurement",
        "kk": "",
        "zh": "n. 測量；測定",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22458,
        "en": "medicine",
        "kk": "",
        "zh": "n. 藥；良藥",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22459,
        "en": "mediocre",
        "kk": "",
        "zh": "a. 中等的；平凡的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22460,
        "en": "medium",
        "kk": "",
        "zh": "n. 媒介物；手段",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22461,
        "en": "member",
        "kk": "",
        "zh": "n. 會員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22462,
        "en": "membership",
        "kk": "",
        "zh": "n. 會員身分；全體會員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22463,
        "en": "memo",
        "kk": "",
        "zh": "n. 備忘錄 (=memorandum) v 記入備忘錄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22464,
        "en": "mend",
        "kk": "",
        "zh": "v. 修補；改善 n好轉；痊癒",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22465,
        "en": "mental",
        "kk": "",
        "zh": "a. 精神的；心理的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22466,
        "en": "mention",
        "kk": "",
        "zh": "v. 提到；說起 n提到；說起",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22467,
        "en": "mentor",
        "kk": "",
        "zh": "n. 導師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22468,
        "en": "menu",
        "kk": "",
        "zh": "n. 菜單；功能選單",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22469,
        "en": "merger",
        "kk": "",
        "zh": "n. （公司等的）合併",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22470,
        "en": "message",
        "kk": "",
        "zh": "n. 信息；消息v 通知；聯繫",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22471,
        "en": "messenger",
        "kk": "",
        "zh": "n. 送信人；使者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22472,
        "en": "method",
        "kk": "",
        "zh": "n. 方法；手段",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22473,
        "en": "meticulous",
        "kk": "",
        "zh": "a. 過分精細的；小心翼翼的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22474,
        "en": "metropolitan",
        "kk": "",
        "zh": "a. 大都市的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22475,
        "en": "midday",
        "kk": "",
        "zh": "n. 正午；中午",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22476,
        "en": "midmorning",
        "kk": "",
        "zh": "n. 上午之中段時間",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22477,
        "en": "mid-range",
        "kk": "",
        "zh": "a. 中等的；平均的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22478,
        "en": "mild",
        "kk": "",
        "zh": "a. 溫和的；溫柔的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22479,
        "en": "mildly",
        "kk": "",
        "zh": "ad. 溫和地；溫柔地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22480,
        "en": "millennium",
        "kk": "",
        "zh": "n. 千年期",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22481,
        "en": "minimum",
        "kk": "",
        "zh": "n. 最小量；最小數 a 最小的；最少的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22482,
        "en": "minority",
        "kk": "",
        "zh": "n. 少數；少數派",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22483,
        "en": "minute",
        "kk": "",
        "zh": "n. 分鐘；一會兒v 記錄下來",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22484,
        "en": "minutely",
        "kk": "",
        "zh": "a. 每分鐘的；持續的  ad 仔細地；持續地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22485,
        "en": "miserable",
        "kk": "",
        "zh": "a. 痛苦的；不幸的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22486,
        "en": "miserably",
        "kk": "",
        "zh": "ad. 痛苦地；艱苦地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22487,
        "en": "mission",
        "kk": "",
        "zh": "n. 使命；任務；傳教團 v 派遣；傳教",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22488,
        "en": "mistake",
        "kk": "",
        "zh": "v. 弄錯；誤解 n錯誤；過失",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22489,
        "en": "mistaken",
        "kk": "",
        "zh": "a. 弄錯的；誤解的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22490,
        "en": "mistreat",
        "kk": "",
        "zh": "v. 虐待",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22491,
        "en": "mistreatment",
        "kk": "",
        "zh": "n. 虐待",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22492,
        "en": "misunderstand",
        "kk": "",
        "zh": "v. 誤會；曲解",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22493,
        "en": "misunderstanding",
        "kk": "",
        "zh": "n. 誤會；曲解",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22494,
        "en": "mitigate",
        "kk": "",
        "zh": "v. 使緩和；減輕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22495,
        "en": "mobilize",
        "kk": "",
        "zh": "v. 動員；調動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22496,
        "en": "moderately",
        "kk": "",
        "zh": "ad. 適度地；有節制地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22497,
        "en": "modest",
        "kk": "",
        "zh": "a. 謙虛的；審慎的2001.  modiﬁcation n 修改；改變",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22498,
        "en": "momentum",
        "kk": "",
        "zh": "n. 氣勢；衝力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22499,
        "en": "monetize",
        "kk": "",
        "zh": "v. 定為貨幣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22500,
        "en": "money",
        "kk": "",
        "zh": "n. 錢；貨幣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22501,
        "en": "monitor",
        "kk": "",
        "zh": "n. 顯示器；螢幕v 監控；監聽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22502,
        "en": "mood",
        "kk": "",
        "zh": "n. 心境；情緒；氣氛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22503,
        "en": "moral",
        "kk": "",
        "zh": "a. 道德的 n 道德；品行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22504,
        "en": "mortgag",
        "kk": "",
        "zh": "n. 抵押 v 抵押",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22505,
        "en": "motivate",
        "kk": "",
        "zh": "v. 刺激；激發",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22506,
        "en": "motivation",
        "kk": "",
        "zh": "n. 刺激；推動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22507,
        "en": "motive",
        "kk": "",
        "zh": "n. 動機；主旨 a起動的；推動的 v 激起",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22508,
        "en": "move",
        "kk": "",
        "zh": "v. 移動；推動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22509,
        "en": "movement",
        "kk": "",
        "zh": "n. 運動；活動；行動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22510,
        "en": "mul",
        "kk": "",
        "zh": "v. 深思熟慮 n 亂糟糟；混亂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22511,
        "en": "myriad",
        "kk": "",
        "zh": "n. 無數；大量 a無數的；大量的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22512,
        "en": "nag",
        "kk": "",
        "zh": "v. 嘮叨；責罵不休 n好嘮叨的人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22513,
        "en": "nail",
        "kk": "",
        "zh": "n. 釘子；指甲 v 釘牢；使固定",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22514,
        "en": "naive",
        "kk": "",
        "zh": "a. 天真的；幼稚的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22515,
        "en": "name",
        "kk": "",
        "zh": "n. 名字；姓名 v提名；任命",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22516,
        "en": "namely",
        "kk": "",
        "zh": "ad. 即；那就是",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22517,
        "en": "narrate",
        "kk": "",
        "zh": "v. 敘述；作旁白",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22518,
        "en": "narration",
        "kk": "",
        "zh": "n. 敘述；講述",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22519,
        "en": "narrator",
        "kk": "",
        "zh": "n. 敘述者；講述者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22520,
        "en": "narrow",
        "kk": "",
        "zh": "a. 狹的；狹窄的v 變窄；收縮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22521,
        "en": "narrowly",
        "kk": "",
        "zh": "ad. 狹窄地；勉強地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22522,
        "en": "nation",
        "kk": "",
        "zh": "n. 國民；國家",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22523,
        "en": "national",
        "kk": "",
        "zh": "a. 全國性的；國家的  n 國民；國人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22524,
        "en": "nationality",
        "kk": "",
        "zh": "n. 國籍",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22525,
        "en": "nationwide",
        "kk": "",
        "zh": "a. 全國性的ad 在全國",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22526,
        "en": "native",
        "kk": "",
        "zh": "a. 天生的；本國的n 本地人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22527,
        "en": "natural",
        "kk": "",
        "zh": "a. 自然的；不做作",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22528,
        "en": "naturally",
        "kk": "",
        "zh": "ad. 自然地；天然地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22529,
        "en": "nearby",
        "kk": "",
        "zh": "a. 附近的 ad 附近的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22530,
        "en": "necessarily",
        "kk": "",
        "zh": "ad. 必定；必然地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22531,
        "en": "necessary",
        "kk": "",
        "zh": "a. 必要的，必需的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22532,
        "en": "necessity",
        "kk": "",
        "zh": "n. 需要；必要性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22533,
        "en": "need",
        "kk": "",
        "zh": "n. 需要；必要 v 需要",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22534,
        "en": "neglect",
        "kk": "",
        "zh": "n. 忽視；忽略 v忽視；忽略",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22535,
        "en": "neglectful",
        "kk": "",
        "zh": "a. 疏忽的；不注意的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22536,
        "en": "negligence",
        "kk": "",
        "zh": "n. 疏忽；粗心",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22537,
        "en": "negotiable",
        "kk": "",
        "zh": "a. 可協商的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22538,
        "en": "negotiator",
        "kk": "",
        "zh": "n. 磋商者；交涉者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22539,
        "en": "nevertheless",
        "kk": "",
        "zh": "ad. 仍然；不過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22540,
        "en": "news",
        "kk": "",
        "zh": "n. 新聞；消息",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22541,
        "en": "newsletter",
        "kk": "",
        "zh": "n. 報紙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22542,
        "en": "nexus",
        "kk": "",
        "zh": "n. 連結；連鎖",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22543,
        "en": "nominate",
        "kk": "",
        "zh": "v. 提名；任命",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22544,
        "en": "nomination",
        "kk": "",
        "zh": "n. 提名；任命",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22545,
        "en": "nominee",
        "kk": "",
        "zh": "n. 被提名人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22546,
        "en": "note",
        "kk": "",
        "zh": "n. 筆記；記錄 v 注意；記下",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22547,
        "en": "notebook",
        "kk": "",
        "zh": "n. 筆記本",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22548,
        "en": "notice",
        "kk": "",
        "zh": "v. 注意；留意",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22549,
        "en": "novel",
        "kk": "",
        "zh": "n. 小說",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22550,
        "en": "novelty",
        "kk": "",
        "zh": "n. 新穎；新奇",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22551,
        "en": "null",
        "kk": "",
        "zh": "a. 無效的；無價值的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22552,
        "en": "nurse",
        "kk": "",
        "zh": "n. 護士",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22553,
        "en": "nursing",
        "kk": "",
        "zh": "n. 看護；護理",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22554,
        "en": "nurture",
        "kk": "",
        "zh": "n. 養育；教養 v養育；培育",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22555,
        "en": "nutrient",
        "kk": "",
        "zh": "a. 營養的；滋養的 n 營養物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22556,
        "en": "nutrition",
        "kk": "",
        "zh": "n. 營養；滋養O",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22557,
        "en": "object",
        "kk": "",
        "zh": "n. 對象；目標 v反對",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22558,
        "en": "objection",
        "kk": "",
        "zh": "n. 反對；異議",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22559,
        "en": "objective",
        "kk": "",
        "zh": "a. 客觀的；如實的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22560,
        "en": "obligatory",
        "kk": "",
        "zh": "n. 義不容辭的；有義務的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22561,
        "en": "observe",
        "kk": "",
        "zh": "v. 觀察；注意",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22562,
        "en": "obsolete",
        "kk": "",
        "zh": "a. 廢棄的；淘汰的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22563,
        "en": "obtain",
        "kk": "",
        "zh": "v. 得到；獲得",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22564,
        "en": "obvious",
        "kk": "",
        "zh": "a. 明顯的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22565,
        "en": "obviously",
        "kk": "",
        "zh": "ad. 明顯地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22566,
        "en": "occasion",
        "kk": "",
        "zh": "n. 場合；狀況",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22567,
        "en": "occupancy",
        "kk": "",
        "zh": "n. 佔有；入住",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22568,
        "en": "occupation",
        "kk": "",
        "zh": "n. 工作，職業",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22569,
        "en": "occupied",
        "kk": "",
        "zh": "a. 佔用的；在使用的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22570,
        "en": "occur",
        "kk": "",
        "zh": "v. 發生；出現",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22571,
        "en": "occurrence",
        "kk": "",
        "zh": "n. 發生；出現",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22572,
        "en": "offence",
        "kk": "",
        "zh": "n. 罪過；犯法 (=offense)",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22573,
        "en": "offender",
        "kk": "",
        "zh": "n. 違法者；犯規的人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22574,
        "en": "offense",
        "kk": "",
        "zh": "n. 罪過；犯法",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22575,
        "en": "offensive",
        "kk": "",
        "zh": "a. 冒犯的；唐突的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22576,
        "en": "offer",
        "kk": "",
        "zh": "v. 提供2083. ofﬁce n 辦公室；職務2084.  ofﬁcial a 官方的；公務上的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22577,
        "en": "offset",
        "kk": "",
        "zh": "v. 補償；抵銷 n 補償；抵銷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22578,
        "en": "omission",
        "kk": "",
        "zh": "n. 遺漏；省略",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22579,
        "en": "omit",
        "kk": "",
        "zh": "v. 遺漏；省略",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22580,
        "en": "operation",
        "kk": "",
        "zh": "a. 營業；運轉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22581,
        "en": "operational",
        "kk": "",
        "zh": "a. 操作上的；經營上的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22582,
        "en": "operator",
        "kk": "",
        "zh": "n. 操作者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22583,
        "en": "opinion",
        "kk": "",
        "zh": "n. 意見；評論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22584,
        "en": "opportune",
        "kk": "",
        "zh": "a. 恰好的；適宜的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22585,
        "en": "opportunity",
        "kk": "",
        "zh": "n. 機會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22586,
        "en": "opposite",
        "kk": "",
        "zh": "a. 相反的；對立的 ad 在對面 prep在⋯⋯對面",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22587,
        "en": "option",
        "kk": "",
        "zh": "n. 選項；選擇",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22588,
        "en": "ordinarily",
        "kk": "",
        "zh": "a. 通常地；慣常地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22589,
        "en": "ordinary",
        "kk": "",
        "zh": "a. 平凡的；通常的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22590,
        "en": "organize",
        "kk": "",
        "zh": "v. 組織；安排",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22591,
        "en": "origin",
        "kk": "",
        "zh": "n. 起源；由來",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22592,
        "en": "original",
        "kk": "",
        "zh": "a. 本來的；最初的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22593,
        "en": "originality",
        "kk": "",
        "zh": "n. 創造力；獨創性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22594,
        "en": "originally",
        "kk": "",
        "zh": "ad. 本來的；最初的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22595,
        "en": "originate",
        "kk": "",
        "zh": "v. 發源；來自",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22596,
        "en": "outbound",
        "kk": "",
        "zh": "a. ad 向外去的；駛向外國的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22597,
        "en": "outdo",
        "kk": "",
        "zh": "v. 勝過；超越",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22598,
        "en": "outdoor",
        "kk": "",
        "zh": "a. 戶外的，露天的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22599,
        "en": "outer",
        "kk": "",
        "zh": "a. 外面的；外表的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22600,
        "en": "outgoing",
        "kk": "",
        "zh": "a. 友好的; 外向的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22601,
        "en": "outgun",
        "kk": "",
        "zh": "v. 火力壓過；武器多於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22602,
        "en": "outlaw",
        "kk": "",
        "zh": "n. 歹徒；罪犯  v法律上失效",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22603,
        "en": "outlet",
        "kk": "",
        "zh": "n. 銷路；商店",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22604,
        "en": "outline",
        "kk": "",
        "zh": "n. 外形；輪廓 v概述；略述",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22605,
        "en": "outlook",
        "kk": "",
        "zh": "n. 觀點；看法",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22606,
        "en": "outmaneuver",
        "kk": "",
        "zh": "v. 以計謀勝過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22607,
        "en": "out-of-date",
        "kk": "",
        "zh": "a. 不流行的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22608,
        "en": "output",
        "kk": "",
        "zh": "v. 出產；生產 n出產；生產",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22609,
        "en": "outrage",
        "kk": "",
        "zh": "n. 惡行；暴行 v傷害；違反",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22610,
        "en": "outrageous",
        "kk": "",
        "zh": "a. 可憎的；可恥的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22611,
        "en": "outrun",
        "kk": "",
        "zh": "v. 超過；超出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22612,
        "en": "outskirt",
        "kk": "",
        "zh": "n. 市郊；郊區",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22613,
        "en": "outsmart",
        "kk": "",
        "zh": "v. 用計謀打敗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22614,
        "en": "outward",
        "kk": "",
        "zh": "a. 向外的；往外去的  ad 向外的；往外去的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22615,
        "en": "outweigh",
        "kk": "",
        "zh": "v. 比⋯⋯重；超過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22616,
        "en": "overall",
        "kk": "",
        "zh": "a. 總的，全部的n 工作褲",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22617,
        "en": "overcome",
        "kk": "",
        "zh": "v. 戰勝；克服",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22618,
        "en": "overhead",
        "kk": "",
        "zh": "a. 在頭頂上的；在上頭的 ad 在上頭；高高地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22619,
        "en": "overlap",
        "kk": "",
        "zh": "v. 部分重疊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22620,
        "en": "overlook",
        "kk": "",
        "zh": "v. 看漏；忽略",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22621,
        "en": "overseas",
        "kk": "",
        "zh": "a. 在海外；在國外",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22622,
        "en": "oversee",
        "kk": "",
        "zh": "v. 監視；監督",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22623,
        "en": "overview",
        "kk": "",
        "zh": "n. 概觀；概要",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22624,
        "en": "overwhelm",
        "kk": "",
        "zh": "v. 戰勝；征服",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22625,
        "en": "ow",
        "kk": "",
        "zh": "v. 欠；歸功於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22626,
        "en": "own",
        "kk": "",
        "zh": "a. 自己的 v 有；擁有",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22627,
        "en": "owner",
        "kk": "",
        "zh": "n. 物主；所有人P",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22628,
        "en": "package",
        "kk": "",
        "zh": "n. 包裹；包",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22629,
        "en": "panel",
        "kk": "",
        "zh": "a. 控制板；陪審員名單",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22630,
        "en": "paragraph",
        "kk": "",
        "zh": "n. （文章的）段；節",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22631,
        "en": "part",
        "kk": "",
        "zh": "n. 部分；本分 v 分開；使分離 a 部分 ad 部分地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22632,
        "en": "partial",
        "kk": "",
        "zh": "a. 部分的；局部的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22633,
        "en": "participant",
        "kk": "",
        "zh": "n. 參與者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22634,
        "en": "particular",
        "kk": "",
        "zh": "a. 特有的，獨特的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22635,
        "en": "particularly",
        "kk": "",
        "zh": "ad. 特別；尤其",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22636,
        "en": "partner",
        "kk": "",
        "zh": "n. 夥伴；同伴",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22637,
        "en": "part-time",
        "kk": "",
        "zh": "a. 兼職的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22638,
        "en": "party",
        "kk": "",
        "zh": "n. 聚會；派對；黨派",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22639,
        "en": "pass",
        "kk": "",
        "zh": "v. 穿過；通過 n 通行證；護照；入場證",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22640,
        "en": "passage",
        "kk": "",
        "zh": "n. 通行；走廊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22641,
        "en": "passenger",
        "kk": "",
        "zh": "n. 乘客",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22642,
        "en": "passport",
        "kk": "",
        "zh": "n. 護照",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22643,
        "en": "patch",
        "kk": "",
        "zh": "n. 補釘；補片 v補綴；修補",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22644,
        "en": "path",
        "kk": "",
        "zh": "n. 小徑",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22645,
        "en": "patience",
        "kk": "",
        "zh": "n. 耐心",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22646,
        "en": "patient",
        "kk": "",
        "zh": "a. 有耐心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22647,
        "en": "pattern",
        "kk": "",
        "zh": "n. 花樣；圖案",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22648,
        "en": "pay",
        "kk": "",
        "zh": "v. 付；支付 n 薪俸；報酬",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22649,
        "en": "payable",
        "kk": "",
        "zh": "a. 應支付的；到期的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22650,
        "en": "payment",
        "kk": "",
        "zh": "n. 支付；付款",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22651,
        "en": "peace",
        "kk": "",
        "zh": "n. 和平；平靜",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22652,
        "en": "peaceful",
        "kk": "",
        "zh": "a. 和平的；安詳的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22653,
        "en": "peculiar",
        "kk": "",
        "zh": "a. 奇怪的；乖癖的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22654,
        "en": "penalize",
        "kk": "",
        "zh": "v. 處罰；處刑",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22655,
        "en": "penalty",
        "kk": "",
        "zh": "n. 處罰；刑罰",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22656,
        "en": "perceive",
        "kk": "",
        "zh": "v. 察覺；感知",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22657,
        "en": "percent",
        "kk": "",
        "zh": "n. 百分比；百分率",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22658,
        "en": "percentage",
        "kk": "",
        "zh": "n. 百分率；百分比",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22659,
        "en": "perception",
        "kk": "",
        "zh": "n. 感知；感受",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22660,
        "en": "perfect",
        "kk": "",
        "zh": "a. 完美的；理想的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22661,
        "en": "perform",
        "kk": "",
        "zh": "n. 表演；實施 v使完美；做完",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22662,
        "en": "performance",
        "kk": "",
        "zh": "n. 表演；成效",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22663,
        "en": "perhaps",
        "kk": "",
        "zh": "ad. 也許；大概",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22664,
        "en": "period",
        "kk": "",
        "zh": "n. 時期；期間；生理期",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22665,
        "en": "periodical",
        "kk": "",
        "zh": "a. 週期的；定期的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22666,
        "en": "permanent",
        "kk": "",
        "zh": "a. 永恆的；永遠的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22667,
        "en": "permit",
        "kk": "",
        "zh": "v. 允許；許可",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22668,
        "en": "persistence",
        "kk": "",
        "zh": "n. 持續的；持久的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22669,
        "en": "persistent",
        "kk": "",
        "zh": "a. 持續的；持久的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22670,
        "en": "perspective",
        "kk": "",
        "zh": "a. 透視的 n看法；觀點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22671,
        "en": "persuade",
        "kk": "",
        "zh": "v. 說服；勸服",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22672,
        "en": "persuasion",
        "kk": "",
        "zh": "n. 說服；勸服",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22673,
        "en": "pertain",
        "kk": "",
        "zh": "v. 從屬；附屬",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22674,
        "en": "pertinent",
        "kk": "",
        "zh": "a. 恰當的；貼切的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22675,
        "en": "petrol",
        "kk": "",
        "zh": "n. 汽油2192.  Ph.D. n 博士學位 (=Doctor of Philosophy)",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22676,
        "en": "pharmacy",
        "kk": "",
        "zh": "n. 藥房",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22677,
        "en": "photo",
        "kk": "",
        "zh": "n. 照片",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22678,
        "en": "photograph",
        "kk": "",
        "zh": "n. 攝影照",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22679,
        "en": "photographer",
        "kk": "",
        "zh": "n. 攝影師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22680,
        "en": "pile",
        "kk": "",
        "zh": "n. 堆；一堆 v 堆積；疊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22681,
        "en": "pin",
        "kk": "",
        "zh": "n. 大頭針；別針 v 別住；釘住",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22682,
        "en": "pioneer",
        "kk": "",
        "zh": "n. 拓荒者；開拓者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22683,
        "en": "pipeline",
        "kk": "",
        "zh": "n. 渠道；路線",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22684,
        "en": "pitch",
        "kk": "",
        "zh": "v. 投；擲；定在 n音高；程度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22685,
        "en": "place",
        "kk": "",
        "zh": "n. 地點；地區；身分 v 放置；安置",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22686,
        "en": "placement",
        "kk": "",
        "zh": "n. 布置",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22687,
        "en": "placid",
        "kk": "",
        "zh": "a. 平靜的；寧靜的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22688,
        "en": "plain",
        "kk": "",
        "zh": "a. 簡樸的；坦白的n 平原；曠野",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22689,
        "en": "plan",
        "kk": "",
        "zh": "n. 計畫；方案 v 計畫；打算",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22690,
        "en": "plane",
        "kk": "",
        "zh": "n. 飛機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22691,
        "en": "planet",
        "kk": "",
        "zh": "n. 行星",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22692,
        "en": "plant",
        "kk": "",
        "zh": "n. 植物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22693,
        "en": "please",
        "kk": "",
        "zh": "v. 請；討人喜歡；討好",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22694,
        "en": "pleased",
        "kk": "",
        "zh": "a. 喜歡的；滿意的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22695,
        "en": "pleasure",
        "kk": "",
        "zh": "n. 愉悅；滿足",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22696,
        "en": "plug",
        "kk": "",
        "zh": "n. 塞子，栓； v 塞住；接通電源",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22697,
        "en": "plumber",
        "kk": "",
        "zh": "n. 水管工",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22698,
        "en": "pocket",
        "kk": "",
        "zh": "n. 口袋；財力 a袖珍的；小型的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22699,
        "en": "policy",
        "kk": "",
        "zh": "n. 政策；方針",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22700,
        "en": "polite",
        "kk": "",
        "zh": "a. 有禮貌的；客氣的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22701,
        "en": "poll",
        "kk": "",
        "zh": "n. 投票；選舉 v 投票",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22702,
        "en": "pollute",
        "kk": "",
        "zh": "v. 汙染",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22703,
        "en": "pollution",
        "kk": "",
        "zh": "n. 汙染",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22704,
        "en": "ponder",
        "kk": "",
        "zh": "v. 仔細考慮；衡量",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22705,
        "en": "population",
        "kk": "",
        "zh": "n. 人口",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22706,
        "en": "portable",
        "kk": "",
        "zh": "a. 手提式的；輕便的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22707,
        "en": "portfolio",
        "kk": "",
        "zh": "n. 文件夾；個人作品",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22708,
        "en": "pose",
        "kk": "",
        "zh": "n. 姿勢 v 擺姿勢；裝腔作勢",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22709,
        "en": "position",
        "kk": "",
        "zh": "n. 位置；姿態",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22710,
        "en": "possess",
        "kk": "",
        "zh": "v. 擁有；佔有",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22711,
        "en": "possession",
        "kk": "",
        "zh": "n. 擁有；所有物；財產",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22712,
        "en": "possibility",
        "kk": "",
        "zh": "n. 可能性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22713,
        "en": "possible",
        "kk": "",
        "zh": "a. 可能的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22714,
        "en": "post",
        "kk": "",
        "zh": "n. 崗位；哨所",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22715,
        "en": "postage",
        "kk": "",
        "zh": "n. 郵資；郵費",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22716,
        "en": "posting",
        "kk": "",
        "zh": "n. 任命；委任職位",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22717,
        "en": "postmaster",
        "kk": "",
        "zh": "n. 郵政局長",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22718,
        "en": "posture",
        "kk": "",
        "zh": "n. 姿勢；姿態",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22719,
        "en": "potency",
        "kk": "",
        "zh": "n. 權力；效力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22720,
        "en": "potential",
        "kk": "",
        "zh": "a. 有潛力的；可能的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22721,
        "en": "power",
        "kk": "",
        "zh": "n. 力量；權力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22722,
        "en": "powerful",
        "kk": "",
        "zh": "a. 強大的；權力大的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22723,
        "en": "PR",
        "kk": "",
        "zh": "n. 公共關係 (= publicrelations)",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22724,
        "en": "practical",
        "kk": "",
        "zh": "a. 有用的；實際的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22725,
        "en": "practice",
        "kk": "",
        "zh": "v. 練習",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22726,
        "en": "precise",
        "kk": "",
        "zh": "a. 精準的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22727,
        "en": "precisely",
        "kk": "",
        "zh": "ad. 精準地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22728,
        "en": "precondition",
        "kk": "",
        "zh": "n. 先決條件 v 使⋯預先適應",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22729,
        "en": "predict",
        "kk": "",
        "zh": "v. 預言；預知",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22730,
        "en": "predictable",
        "kk": "",
        "zh": "a. 可預言的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22731,
        "en": "prediction",
        "kk": "",
        "zh": "n. 預言；預報",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22732,
        "en": "predisposition",
        "kk": "",
        "zh": "n. 傾向；素質",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22733,
        "en": "predominate",
        "kk": "",
        "zh": "v. 主宰；支配",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22734,
        "en": "preface",
        "kk": "",
        "zh": "n. 序言；引語 v作為⋯⋯的開端",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22735,
        "en": "prefer",
        "kk": "",
        "zh": "v. 偏好",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22736,
        "en": "preference",
        "kk": "",
        "zh": "n. 偏好；喜愛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22737,
        "en": "prejudice",
        "kk": "",
        "zh": "n. 偏見；歧視v 損害；偏見",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22738,
        "en": "premium",
        "kk": "",
        "zh": "a. 高價的；優質的  n 獎品；獎金",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22739,
        "en": "prepaid",
        "kk": "",
        "zh": "a. 預先付的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22740,
        "en": "prepare",
        "kk": "",
        "zh": "v. 準備",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22741,
        "en": "prescription",
        "kk": "",
        "zh": "n. 命令；指示；處方",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22742,
        "en": "present",
        "kk": "",
        "zh": "a. 現在的；當前的；出席的 n 現在；目前",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22743,
        "en": "preserve",
        "kk": "",
        "zh": "v. 保存；保藏",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22744,
        "en": "president",
        "kk": "",
        "zh": "n. 總統；會長；主席",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22745,
        "en": "press",
        "kk": "",
        "zh": "v. 按；壓；迫使 n報刊；新聞界",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22746,
        "en": "pressure",
        "kk": "",
        "zh": "n. 壓力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22747,
        "en": "presume",
        "kk": "",
        "zh": "v. 設想；相假設",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22748,
        "en": "pretend",
        "kk": "",
        "zh": "v. 假裝；佯裝",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22749,
        "en": "pretense",
        "kk": "",
        "zh": "n. 假裝；矯飾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22750,
        "en": "pretentious",
        "kk": "",
        "zh": "a. 矯飾的；做作的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22751,
        "en": "prevail",
        "kk": "",
        "zh": "v. 勝過；戰勝",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22752,
        "en": "prevalent",
        "kk": "",
        "zh": "a. 流行的；盛行的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22753,
        "en": "prevent",
        "kk": "",
        "zh": "v. 防止；預防",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22754,
        "en": "preventive",
        "kk": "",
        "zh": "a. 預防的；防止的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22755,
        "en": "previous",
        "kk": "",
        "zh": "a. 以前的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22756,
        "en": "previously",
        "kk": "",
        "zh": "ad. 事先；以前",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22757,
        "en": "price",
        "kk": "",
        "zh": "n. 費用；價錢",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22758,
        "en": "priceless",
        "kk": "",
        "zh": "a. 貴重的；無價的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22759,
        "en": "primarily",
        "kk": "",
        "zh": "ad. 首先；起初；主要地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22760,
        "en": "prime",
        "kk": "",
        "zh": "a. 最初的；原始的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22761,
        "en": "principal",
        "kk": "",
        "zh": "a. 主要的；首要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22762,
        "en": "principle",
        "kk": "",
        "zh": "n. 原則；原理",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22763,
        "en": "prior",
        "kk": "",
        "zh": "a. 在前的；居先的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22764,
        "en": "prioritize",
        "kk": "",
        "zh": "v. 按優先順序處理",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22765,
        "en": "priority",
        "kk": "",
        "zh": "n. 優先；重點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22766,
        "en": "privacy",
        "kk": "",
        "zh": "n. 隱私",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22767,
        "en": "private",
        "kk": "",
        "zh": "a. 隱私的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22768,
        "en": "privatize",
        "kk": "",
        "zh": "v. 使私有（民營）化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22769,
        "en": "privilege",
        "kk": "",
        "zh": "n. 特權；優特",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22770,
        "en": "prize",
        "kk": "",
        "zh": "n. 獎品；獎賞",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22771,
        "en": "probably",
        "kk": "",
        "zh": "ad. 大概；或許",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22772,
        "en": "proceed",
        "kk": "",
        "zh": "v. 開始；著手；出發",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22773,
        "en": "process",
        "kk": "",
        "zh": "n. 過程；進程 v處理；辦理",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22774,
        "en": "procure",
        "kk": "",
        "zh": "n. 引起；導致",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22775,
        "en": "product",
        "kk": "",
        "zh": "n. 產品；成品",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22776,
        "en": "production",
        "kk": "",
        "zh": "n. 生產；製作",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22777,
        "en": "profession",
        "kk": "",
        "zh": "n. 職業；同業",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22778,
        "en": "professional",
        "kk": "",
        "zh": "a. 專業的2301.  proﬁciency n 精通；熟練2302.  proﬁt v 得益；獲益 n 利潤；盈利2303.  proﬁtable a 有利的；贏利的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22779,
        "en": "profound",
        "kk": "",
        "zh": "a. 深刻的；深切的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22780,
        "en": "program",
        "kk": "",
        "zh": "n. 計畫；方案；節目",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22781,
        "en": "programmer",
        "kk": "",
        "zh": "n. 程式設計師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22782,
        "en": "progress",
        "kk": "",
        "zh": "v. 前進；進行n 前進；進行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22783,
        "en": "progression",
        "kk": "",
        "zh": "n. 前進",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22784,
        "en": "prohibit",
        "kk": "",
        "zh": "v. 禁止；妨礙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22785,
        "en": "project",
        "kk": "",
        "zh": "v. 計畫；投射",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22786,
        "en": "projection",
        "kk": "",
        "zh": "n. 投擲；發射；投影2312.  proliﬁc a  多產的；豐富的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22787,
        "en": "prolong",
        "kk": "",
        "zh": "v. 延長；拖延",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22788,
        "en": "promise",
        "kk": "",
        "zh": "v. 承諾；允諾 n承諾；允諾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22789,
        "en": "promotional",
        "kk": "",
        "zh": "a. 增進的；獎勵的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22790,
        "en": "proof",
        "kk": "",
        "zh": "n. 證據；物證 a 能抵擋的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22791,
        "en": "proper",
        "kk": "",
        "zh": "a. 適合的；適當的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22792,
        "en": "property",
        "kk": "",
        "zh": "n. 資產；所有物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22793,
        "en": "propose",
        "kk": "",
        "zh": "v. 計畫；建議；求婚",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22794,
        "en": "prospect",
        "kk": "",
        "zh": "n. 指望；預期v 勘探",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22795,
        "en": "protect",
        "kk": "",
        "zh": "v. 保護；防護",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22796,
        "en": "protection",
        "kk": "",
        "zh": "n. 保護；防護",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22797,
        "en": "proud",
        "kk": "",
        "zh": "a. 驕傲的；有自尊心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22798,
        "en": "prove",
        "kk": "",
        "zh": "v. 證明；證實",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22799,
        "en": "provide",
        "kk": "",
        "zh": "v. 提供",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22800,
        "en": "proximity",
        "kk": "",
        "zh": "n. 接近；鄰近",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22801,
        "en": "public",
        "kk": "",
        "zh": "a. 公眾的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22802,
        "en": "publication",
        "kk": "",
        "zh": "n. 出版物；公布",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22803,
        "en": "publicize",
        "kk": "",
        "zh": "v. 宣傳；公布",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22804,
        "en": "publish",
        "kk": "",
        "zh": "v. 出版；發行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22805,
        "en": "publisher",
        "kk": "",
        "zh": "n. 出版社",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22806,
        "en": "punish",
        "kk": "",
        "zh": "v. 處罰",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22807,
        "en": "punishment",
        "kk": "",
        "zh": "n. 處罰",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22808,
        "en": "pure",
        "kk": "",
        "zh": "a. 純潔的；完全的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22809,
        "en": "purely",
        "kk": "",
        "zh": "a. 純粹地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22810,
        "en": "purify",
        "kk": "",
        "zh": "v. 使純淨；淨化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22811,
        "en": "purpose",
        "kk": "",
        "zh": "n. 目的；意圖",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22812,
        "en": "pursue",
        "kk": "",
        "zh": "v. 追求；求愛；追趕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22813,
        "en": "pursuit",
        "kk": "",
        "zh": "n. 追求；尋求Q2343.  qualiﬁcation n 資格；能力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22814,
        "en": "qualify",
        "kk": "",
        "zh": "v. 使具有資格；使合格",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22815,
        "en": "quality",
        "kk": "",
        "zh": "n. 品質；特性 a優良的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22816,
        "en": "quantity",
        "kk": "",
        "zh": "n. 數量；分量",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22817,
        "en": "quarrel",
        "kk": "",
        "zh": "n. 爭吵；不和 v爭吵；不和",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22818,
        "en": "quarter",
        "kk": "",
        "zh": "n. 四分之一；季度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22819,
        "en": "quarterly",
        "kk": "",
        "zh": "a. 季度的 ad 一季一次地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22820,
        "en": "question",
        "kk": "",
        "zh": "n. 問題；詢問v 訊問；審問",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22821,
        "en": "questionable",
        "kk": "",
        "zh": "a. 可疑的；成問題的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22822,
        "en": "queue",
        "kk": "",
        "zh": "n. 行列；長隊 v排隊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22823,
        "en": "quick",
        "kk": "",
        "zh": "a. 快速的；迅速的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22824,
        "en": "quickly",
        "kk": "",
        "zh": "ad. 快速地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22825,
        "en": "quiet",
        "kk": "",
        "zh": "a. 寧靜的；安定的n 安靜；靜謐 v 平靜下來",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22826,
        "en": "quit",
        "kk": "",
        "zh": "v. 解除；退出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22827,
        "en": "quite",
        "kk": "",
        "zh": "ad. 完全；徹底",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22828,
        "en": "quote",
        "kk": "",
        "zh": "v. 引用；引述 n引號；引語R",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22829,
        "en": "race",
        "kk": "",
        "zh": "n. 賽跑；比 v 比速度；參加競賽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22830,
        "en": "racial",
        "kk": "",
        "zh": "a. 人種的；種族的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22831,
        "en": "radical",
        "kk": "",
        "zh": "a. 根本的；基本的 n 根部；基礎",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22832,
        "en": "radio",
        "kk": "",
        "zh": "n. 無線電；收音機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22833,
        "en": "radioactive",
        "kk": "",
        "zh": "a. 放射性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22834,
        "en": "radius",
        "kk": "",
        "zh": "n. 半徑；半徑距離",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22835,
        "en": "railroad",
        "kk": "",
        "zh": "n. 鐵路",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22836,
        "en": "raise",
        "kk": "",
        "zh": "v. 舉起；抬起 n 加薪；提高",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22837,
        "en": "random",
        "kk": "",
        "zh": "a. 胡亂的；隨便的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22838,
        "en": "randomly",
        "kk": "",
        "zh": "ad. 任意地；隨便地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22839,
        "en": "range",
        "kk": "",
        "zh": "n. 排，行；一系列",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22840,
        "en": "rank",
        "kk": "",
        "zh": "n. 等級；地位",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22841,
        "en": "rapid",
        "kk": "",
        "zh": "a. 快的；迅速的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22842,
        "en": "rapidly",
        "kk": "",
        "zh": "ad. 很快地；立即",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22843,
        "en": "rare",
        "kk": "",
        "zh": "a. 稀有的；罕見的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22844,
        "en": "rarely",
        "kk": "",
        "zh": "ad. 很少；難得",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22845,
        "en": "rate",
        "kk": "",
        "zh": "v. 比例；率",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22846,
        "en": "rather",
        "kk": "",
        "zh": "ad. 相當；頗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22847,
        "en": "rational",
        "kk": "",
        "zh": "a. 理性的；有理性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22848,
        "en": "reac",
        "kk": "",
        "zh": "v. 抵達；達到 n 可及之範圍",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22849,
        "en": "read",
        "kk": "",
        "zh": "v. 閱讀；攻讀 n 讀物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22850,
        "en": "reader",
        "kk": "",
        "zh": "n. 讀者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22851,
        "en": "readership",
        "kk": "",
        "zh": "n. 讀者們",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22852,
        "en": "readiness",
        "kk": "",
        "zh": "n. 準備就緒",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22853,
        "en": "ready",
        "kk": "",
        "zh": "a. 準備好的；願意的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22854,
        "en": "realization",
        "kk": "",
        "zh": "n. 領悟；認識",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22855,
        "en": "realize",
        "kk": "",
        "zh": "v. 領悟；實現",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22856,
        "en": "reason",
        "kk": "",
        "zh": "n. 理由",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22857,
        "en": "reasonable",
        "kk": "",
        "zh": "a. 合理的；正當的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22858,
        "en": "rebel",
        "kk": "",
        "zh": "n. 反抗者 a 反叛的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22859,
        "en": "rebellion",
        "kk": "",
        "zh": "n. 反叛；造反；叛亂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22860,
        "en": "rebound",
        "kk": "",
        "zh": "v. 彈回；跳回",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22861,
        "en": "rebuild",
        "kk": "",
        "zh": "v. 重建；改建",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22862,
        "en": "recall",
        "kk": "",
        "zh": "v. 回想；回憶",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22863,
        "en": "receive",
        "kk": "",
        "zh": "v. 收到；接到",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22864,
        "en": "recent",
        "kk": "",
        "zh": "a. 新近的；最近的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22865,
        "en": "recently",
        "kk": "",
        "zh": "ad. 最近",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22866,
        "en": "reception",
        "kk": "",
        "zh": "n. 接待；歡迎",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22867,
        "en": "receptionist",
        "kk": "",
        "zh": "n. 接待員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22868,
        "en": "recharge",
        "kk": "",
        "zh": "v. 再充電於；再裝填彈藥於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22869,
        "en": "reclaim",
        "kk": "",
        "zh": "v. 使改過；使悔改",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22870,
        "en": "recognition",
        "kk": "",
        "zh": "n. 認出；識別",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22871,
        "en": "recognizable",
        "kk": "",
        "zh": "a. 可辨認的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22872,
        "en": "recognize",
        "kk": "",
        "zh": "v. 認出；識別",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22873,
        "en": "recommend",
        "kk": "",
        "zh": "v. 推薦",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22874,
        "en": "recommendation",
        "kk": "",
        "zh": "n. 推薦",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22875,
        "en": "reconsider",
        "kk": "",
        "zh": "v. 重新考慮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22876,
        "en": "record",
        "kk": "",
        "zh": "v. 記載；記錄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22877,
        "en": "recover",
        "kk": "",
        "zh": "v. 復原；恢復",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22878,
        "en": "recovery",
        "kk": "",
        "zh": "n. 復原 恢復",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22879,
        "en": "recruitment",
        "kk": "",
        "zh": "n. 徵募；僱用",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22880,
        "en": "rectangle",
        "kk": "",
        "zh": "n. 矩形；長方形",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22881,
        "en": "rectify",
        "kk": "",
        "zh": "v. 矯正；改正",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22882,
        "en": "reduce",
        "kk": "",
        "zh": "v. 減少；縮小",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22883,
        "en": "refer",
        "kk": "",
        "zh": "v. 提到; 談論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22884,
        "en": "reference",
        "kk": "",
        "zh": "n. 提及；參考文獻2419. reﬂect v 反射；照出2420. reﬂection n 倒影；反省",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22885,
        "en": "refurbish",
        "kk": "",
        "zh": "v. 再磨光；刷新",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22886,
        "en": "refusal",
        "kk": "",
        "zh": "n. 拒絕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22887,
        "en": "refuse",
        "kk": "",
        "zh": "v. 拒絕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22888,
        "en": "regard",
        "kk": "",
        "zh": "n. 注重；問候 v把⋯認為",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22889,
        "en": "regarding",
        "kk": "",
        "zh": "prep. 關於；就⋯⋯而論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22890,
        "en": "regardless",
        "kk": "",
        "zh": "ad. 不顧一切地  a 不注意的；不留心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22891,
        "en": "region",
        "kk": "",
        "zh": "n. 地區；地帶",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22892,
        "en": "registering",
        "kk": "",
        "zh": "a. 登記的；註冊的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22893,
        "en": "regular",
        "kk": "",
        "zh": "a. 規則的；有規律的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22894,
        "en": "regularly",
        "kk": "",
        "zh": "ad. 定期地；有規律地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22895,
        "en": "regulate",
        "kk": "",
        "zh": "v. 管理；控制；校準",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22896,
        "en": "rehearsal",
        "kk": "",
        "zh": "n. 排練；試演",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22897,
        "en": "rehearse",
        "kk": "",
        "zh": "v. 排練；排演",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22898,
        "en": "reimbursement",
        "kk": "",
        "zh": "n. 償還；退款",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22899,
        "en": "reinforce",
        "kk": "",
        "zh": "v. 增援；加強",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22900,
        "en": "reinforcement",
        "kk": "",
        "zh": "n. 增援；加強",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22901,
        "en": "reiterate",
        "kk": "",
        "zh": "v. 重做；重申",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22902,
        "en": "reject",
        "kk": "",
        "zh": "v. 拒絕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22903,
        "en": "rejection",
        "kk": "",
        "zh": "n. 拒絕；反對",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22904,
        "en": "relate",
        "kk": "",
        "zh": "v. 使有聯繫；有關；涉及",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22905,
        "en": "relation",
        "kk": "",
        "zh": "n. 關係；關聯",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22906,
        "en": "relationship",
        "kk": "",
        "zh": "n. 人際關係；戀愛關係",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22907,
        "en": "release",
        "kk": "",
        "zh": "v. 釋放；發行 n釋放；解放",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22908,
        "en": "relevant",
        "kk": "",
        "zh": "a. 有關的；切題的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22909,
        "en": "relief",
        "kk": "",
        "zh": "n. 緩和；減輕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22910,
        "en": "rely",
        "kk": "",
        "zh": "v. 倚靠；依靠",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22911,
        "en": "remain",
        "kk": "",
        "zh": "v. 剩下；餘留",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22912,
        "en": "remake",
        "kk": "",
        "zh": "v. 再製；改造",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22913,
        "en": "remark",
        "kk": "",
        "zh": "v. 談到；評論 n言辭；談論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22914,
        "en": "remarkable",
        "kk": "",
        "zh": "a. 非凡的；卓越的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22915,
        "en": "remember",
        "kk": "",
        "zh": "v. 記得；記住",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22916,
        "en": "remind",
        "kk": "",
        "zh": "v. 提醒",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22917,
        "en": "remote",
        "kk": "",
        "zh": "a. 遙遠的；偏僻的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22918,
        "en": "remotely",
        "kk": "",
        "zh": "a. 遙遠地；間接地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22919,
        "en": "removal",
        "kk": "",
        "zh": "n. 移動；調動；免職",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22920,
        "en": "remove",
        "kk": "",
        "zh": "v. 移動；調動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22921,
        "en": "render",
        "kk": "",
        "zh": "v. 使得；提出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22922,
        "en": "renewal",
        "kk": "",
        "zh": "n. 更新；復原",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22923,
        "en": "renowned",
        "kk": "",
        "zh": "a. 有名的；有聲譽的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22924,
        "en": "rent",
        "kk": "",
        "zh": "n. 租金；租費 v 出租",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22925,
        "en": "rental",
        "kk": "",
        "zh": "a. 租賃的 n 租金；出租",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22926,
        "en": "repair",
        "kk": "",
        "zh": "v. 修理；修補 n修理；修補",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22927,
        "en": "repeat",
        "kk": "",
        "zh": "v. 重複；重做 n重複；複寫",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22928,
        "en": "repetition",
        "kk": "",
        "zh": "n. 反覆背誦",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22929,
        "en": "repetitive",
        "kk": "",
        "zh": "a. 重複的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22930,
        "en": "replace",
        "kk": "",
        "zh": "v. 放置；替代",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22931,
        "en": "replacement",
        "kk": "",
        "zh": "n. 取代；更換",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22932,
        "en": "replay",
        "kk": "",
        "zh": "v. 重演；重播 n重演；重播",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22933,
        "en": "reply",
        "kk": "",
        "zh": "v. 回答；答覆",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22934,
        "en": "report",
        "kk": "",
        "zh": "v. 報導；記述；告發 n 報告；報導",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22935,
        "en": "represent",
        "kk": "",
        "zh": "v. 描繪；代表",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22936,
        "en": "representative",
        "kk": "",
        "zh": "a. 代表性的  n 典型；代表物；代表",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22937,
        "en": "request",
        "kk": "",
        "zh": "v. 要求；請求 n要求；請求",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22938,
        "en": "requirement",
        "kk": "",
        "zh": "n. 需要；必需品",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22939,
        "en": "reschedule",
        "kk": "",
        "zh": "v. 改期；重新編排",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22940,
        "en": "research",
        "kk": "",
        "zh": "v. 研究；調查n 研究",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22941,
        "en": "resemblance",
        "kk": "",
        "zh": "n. 相似；相貌相似",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22942,
        "en": "resemble",
        "kk": "",
        "zh": "v. 像；類似",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22943,
        "en": "reserve",
        "kk": "",
        "zh": "v. 儲備；保存",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22944,
        "en": "residence",
        "kk": "",
        "zh": "n. 住所；住宅",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22945,
        "en": "resident",
        "kk": "",
        "zh": "n. 居民 a 居住的；定居的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22946,
        "en": "residential",
        "kk": "",
        "zh": "a. 居住的；住宅的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22947,
        "en": "residual",
        "kk": "",
        "zh": "a. 殘留的；剩餘的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22948,
        "en": "residue",
        "kk": "",
        "zh": "n. 殘餘；剩餘",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22949,
        "en": "resignation",
        "kk": "",
        "zh": "n. 辭職；放棄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22950,
        "en": "resist",
        "kk": "",
        "zh": "v. 抵抗；反抗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22951,
        "en": "resistance",
        "kk": "",
        "zh": "n. 抵抗；反抗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22952,
        "en": "resolute",
        "kk": "",
        "zh": "a. 堅決的；堅定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22953,
        "en": "resolve",
        "kk": "",
        "zh": "v. 解決；決心 n決心；決意",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22954,
        "en": "resource",
        "kk": "",
        "zh": "n. 資源；物力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22955,
        "en": "respect",
        "kk": "",
        "zh": "n. 敬重，尊敬",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22956,
        "en": "respond",
        "kk": "",
        "zh": "n. 回答；答覆",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22957,
        "en": "response",
        "kk": "",
        "zh": "n. 回答；答覆",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22958,
        "en": "responsible",
        "kk": "",
        "zh": "a. 需負責任的；承擔責任的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22959,
        "en": "responsive",
        "kk": "",
        "zh": "a. 回答的；應答的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22960,
        "en": "restriction",
        "kk": "",
        "zh": "n. 限制；約束",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22961,
        "en": "resume",
        "kk": "",
        "zh": "v. 恢復；重返 n梗概；履歷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22962,
        "en": "retailer",
        "kk": "",
        "zh": "n. 零售商；零售店",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22963,
        "en": "retai",
        "kk": "",
        "zh": "v. 保留；保持",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22964,
        "en": "retainable",
        "kk": "",
        "zh": "a. 能保持的；可保留的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22965,
        "en": "retainer",
        "kk": "",
        "zh": "n. 保留者；家臣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22966,
        "en": "retire",
        "kk": "",
        "zh": "v. 使退卻；使退休",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22967,
        "en": "retirement",
        "kk": "",
        "zh": "n. 退休；退職",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22968,
        "en": "retrieve",
        "kk": "",
        "zh": "v. 重新得到；收回",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22969,
        "en": "return",
        "kk": "",
        "zh": "v. 返回；歸",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22970,
        "en": "reveal",
        "kk": "",
        "zh": "v. 展現，顯露出n 揭示；揭露",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22971,
        "en": "reverse",
        "kk": "",
        "zh": "a. 相反的；反向的 v 顛倒；翻轉 n 相反",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22972,
        "en": "review",
        "kk": "",
        "zh": "v. 批評，評論；檢閱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22973,
        "en": "revision",
        "kk": "",
        "zh": "n. 修訂；校訂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22974,
        "en": "revive",
        "kk": "",
        "zh": "v. 甦醒；復甦",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22975,
        "en": "revolve",
        "kk": "",
        "zh": "v. 旋轉；自轉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22976,
        "en": "reward",
        "kk": "",
        "zh": "n. 報答；報償 v報答；報償",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22977,
        "en": "rigorous",
        "kk": "",
        "zh": "a. 嚴格的；嚴厲的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22978,
        "en": "rise",
        "kk": "",
        "zh": "v. 上升；升起 n 上升；興盛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22979,
        "en": "rival",
        "kk": "",
        "zh": "n. 競爭者；對手 v競爭  a 競爭的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22980,
        "en": "rivalry",
        "kk": "",
        "zh": "n. 競爭；對抗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22981,
        "en": "robust",
        "kk": "",
        "zh": "v. 強健的；茁壯的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22982,
        "en": "route",
        "kk": "",
        "zh": "n. 路線；路程",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22983,
        "en": "routine",
        "kk": "",
        "zh": "n. 例行公事 a 例行的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22984,
        "en": "royal",
        "kk": "",
        "zh": "a. 皇家的；盛大的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22985,
        "en": "royalty",
        "kk": "",
        "zh": "n. 皇族；王位；王權",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22986,
        "en": "rule",
        "kk": "",
        "zh": "n. 規則；規定 v 統治；管轄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22987,
        "en": "run",
        "kk": "",
        "zh": "v. 跑；競選 n 跑；路程；暢銷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22988,
        "en": "rush",
        "kk": "",
        "zh": "v. 衝，奔；催促 n匆忙；緊急S2539.  sacriﬁce n 牲禮，祭品v 犧牲；獻出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22989,
        "en": "sadden",
        "kk": "",
        "zh": "v. 使悲傷；使難過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22990,
        "en": "sadly",
        "kk": "",
        "zh": "ad. 悲哀地；傷心地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22991,
        "en": "sadness",
        "kk": "",
        "zh": "n. 悲哀；悲傷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22992,
        "en": "safe",
        "kk": "",
        "zh": "n. 平安的；無損的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22993,
        "en": "safeguard",
        "kk": "",
        "zh": "v. 保護；防衛n 保護；防衛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22994,
        "en": "safety",
        "kk": "",
        "zh": "n. 安全；平安",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22995,
        "en": "sale",
        "kk": "",
        "zh": "n. 賣；出售；拍賣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22996,
        "en": "salvage",
        "kk": "",
        "zh": "n. 搶救；挽救 v救助；營救",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22997,
        "en": "sample",
        "kk": "",
        "zh": "n. 樣品，樣本 v品嚐；體驗 a 樣品的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22998,
        "en": "sanitary",
        "kk": "",
        "zh": "n. 公共廁所 a衛生的；清潔的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 22999,
        "en": "satisfaction",
        "kk": "",
        "zh": "n. 滿意；滿足",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23000,
        "en": "satisfy",
        "kk": "",
        "zh": "v. 使滿意；使高興",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23001,
        "en": "savvy",
        "kk": "",
        "zh": "v. 懂；知曉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23002,
        "en": "scale",
        "kk": "",
        "zh": "n. 大小；規模 v 攀登；增加",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23003,
        "en": "scan",
        "kk": "",
        "zh": "v. 細看；審視 n 掃描；細看",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23004,
        "en": "scanner",
        "kk": "",
        "zh": "n. 掃描機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23005,
        "en": "scene",
        "kk": "",
        "zh": "n. 布景；景色；背景",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23006,
        "en": "scenery",
        "kk": "",
        "zh": "n. 景色；風景",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23007,
        "en": "scope",
        "kk": "",
        "zh": "n. 顯微鏡；望遠鏡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23008,
        "en": "scratch",
        "kk": "",
        "zh": "v. 抓；搔劃出 n刮痕；抓痕 a 湊合的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23009,
        "en": "screen",
        "kk": "",
        "zh": "n. 螢幕；掩蔽物",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23010,
        "en": "scrutinize",
        "kk": "",
        "zh": "v. 詳細檢查；細看",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23011,
        "en": "seam",
        "kk": "",
        "zh": "n. 縫；縫合處 v縫合；接合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23012,
        "en": "seamlessly",
        "kk": "",
        "zh": "ad. 無縫地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23013,
        "en": "search",
        "kk": "",
        "zh": "v. 搜查；探究 n搜查；搜尋",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23014,
        "en": "season",
        "kk": "",
        "zh": "n. 季節",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23015,
        "en": "secret",
        "kk": "",
        "zh": "n. 秘密",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23016,
        "en": "section",
        "kk": "",
        "zh": "n. 部分；區域",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23017,
        "en": "secure",
        "kk": "",
        "zh": "a. 安全的，無危險的  v 使安全；掩護",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23018,
        "en": "security",
        "kk": "",
        "zh": "n. 安全感；防備；保安",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23019,
        "en": "seek",
        "kk": "",
        "zh": "v. 尋找；探索",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23020,
        "en": "segment",
        "kk": "",
        "zh": "n. 部分；部門v 分割；切割",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23021,
        "en": "seldom",
        "kk": "",
        "zh": "ad. 不常；很少 a很少的；難得的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23022,
        "en": "select",
        "kk": "",
        "zh": "v. 選擇；挑選 a上等的；優等的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23023,
        "en": "selection",
        "kk": "",
        "zh": "n. 選擇；選拔",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23024,
        "en": "selective",
        "kk": "",
        "zh": "a. 有選擇性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23025,
        "en": "self",
        "kk": "",
        "zh": "n. 自身；自己",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23026,
        "en": "self-employed",
        "kk": "",
        "zh": "a. 自由業的；自僱的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23027,
        "en": "semester",
        "kk": "",
        "zh": "n. 半學年；一學期",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23028,
        "en": "seminar",
        "kk": "",
        "zh": "n. 專題討論會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23029,
        "en": "senior",
        "kk": "",
        "zh": "a. 年長的；前輩的 n 前輩；上司；學長",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23030,
        "en": "sense",
        "kk": "",
        "zh": "n. 感官；官能；見識 v 了解；領會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23031,
        "en": "sensible",
        "kk": "",
        "zh": "a. 明智的；合情理的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23032,
        "en": "sensitive",
        "kk": "",
        "zh": "a. 敏感的；靈敏的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23033,
        "en": "separate",
        "kk": "",
        "zh": "v. 分隔；分割",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23034,
        "en": "separation",
        "kk": "",
        "zh": "n. 分開；分居",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23035,
        "en": "sequence",
        "kk": "",
        "zh": "n. 連續；接續",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23036,
        "en": "series",
        "kk": "",
        "zh": "n. 連續；系列",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23037,
        "en": "serious",
        "kk": "",
        "zh": "a. 嚴重的；危急的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23038,
        "en": "serve",
        "kk": "",
        "zh": "v. 服務",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23039,
        "en": "service",
        "kk": "",
        "zh": "n. 服務；效勞 v服務；效勞",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23040,
        "en": "session",
        "kk": "",
        "zh": "n. 會議；集會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23041,
        "en": "set",
        "kk": "",
        "zh": "v. 放；置；開始 a 固定的；不變的 n 一套；一部",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23042,
        "en": "setback",
        "kk": "",
        "zh": "n. 挫折；失敗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23043,
        "en": "setup",
        "kk": "",
        "zh": "n. 組織；機構",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23044,
        "en": "several",
        "kk": "",
        "zh": "a. 幾個的；數個的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23045,
        "en": "severe",
        "kk": "",
        "zh": "a. 嚴重的；劇烈的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23046,
        "en": "severely",
        "kk": "",
        "zh": "ad. 嚴重地；劇烈地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23047,
        "en": "shape",
        "kk": "",
        "zh": "n. 形狀；樣子 v使成形；塑造",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23048,
        "en": "share",
        "kk": "",
        "zh": "v. 分享",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23049,
        "en": "shareholder",
        "kk": "",
        "zh": "n. 股東",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23050,
        "en": "sharp",
        "kk": "",
        "zh": "a. 尖銳的；苛刻的ad 幾點整",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23051,
        "en": "shelf",
        "kk": "",
        "zh": "n. 架子",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23052,
        "en": "ship",
        "kk": "",
        "zh": "n. 船；艦 v 運送；裝運",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23053,
        "en": "shipping",
        "kk": "",
        "zh": "n. 運輸；運輸業",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23054,
        "en": "should",
        "kk": "",
        "zh": "aux. 可能；該",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23055,
        "en": "shredder",
        "kk": "",
        "zh": "n. 碎紙機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23056,
        "en": "sight",
        "kk": "",
        "zh": "n. 視覺；景象；觀光地 v 看見；發現",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23057,
        "en": "sign",
        "kk": "",
        "zh": "n. 徵象；前兆 v 簽名於；簽署2613.  signiﬁcance n 重要性；重要2614.  signiﬁcant a 有意義的；重要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23058,
        "en": "signify",
        "kk": "",
        "zh": "v. 表示；預示",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23059,
        "en": "similar",
        "kk": "",
        "zh": "a. 相像的；相仿",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23060,
        "en": "simulate",
        "kk": "",
        "zh": "v. 假裝；冒充",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23061,
        "en": "simulation",
        "kk": "",
        "zh": "n. 偽裝；模仿",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23062,
        "en": "sincere",
        "kk": "",
        "zh": "a. 衷心的；真誠的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23063,
        "en": "sincerely",
        "kk": "",
        "zh": "ad. 真誠地；誠懇地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23064,
        "en": "sinful",
        "kk": "",
        "zh": "a. 罪孽深重的；有罪的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23065,
        "en": "sink",
        "kk": "",
        "zh": "v. 下沉；下陷 n 水槽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23066,
        "en": "site",
        "kk": "",
        "zh": "n. 地點；場所",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23067,
        "en": "situation",
        "kk": "",
        "zh": "n. 狀況；處境",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23068,
        "en": "size",
        "kk": "",
        "zh": "n. 尺寸",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23069,
        "en": "skill",
        "kk": "",
        "zh": "n. 技巧；技術",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23070,
        "en": "skillful",
        "kk": "",
        "zh": "a. 有技巧的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23071,
        "en": "skim",
        "kk": "",
        "zh": "v. 撇去；瀏覽；略讀 n 脫脂牛奶",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23072,
        "en": "slash",
        "kk": "",
        "zh": "v. 減低；砍傷；抨擊 n 砍傷；砍痕",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23073,
        "en": "slice",
        "kk": "",
        "zh": "n. 薄片；切片 v 切下；割去",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23074,
        "en": "slip",
        "kk": "",
        "zh": "v. 滑動；滑跤 n 失足；疏忽；錯誤",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23075,
        "en": "slippery",
        "kk": "",
        "zh": "a. 滑的；油滑的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23076,
        "en": "slogan",
        "kk": "",
        "zh": "n. 口號；標語",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23077,
        "en": "slope",
        "kk": "",
        "zh": "n. 傾斜；坡度 v 傾斜",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23078,
        "en": "sloppy",
        "kk": "",
        "zh": "a. 稀薄的；邋遢的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23079,
        "en": "slot",
        "kk": "",
        "zh": "n. 投幣口；自動販賣機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23080,
        "en": "slump",
        "kk": "",
        "zh": "v. 倒下；陷落 n下降；不景氣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23081,
        "en": "smoothl",
        "kk": "",
        "zh": "ad. 平滑地；流暢地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23082,
        "en": "soar",
        "kk": "",
        "zh": "v. 往上飛舞，升 n高飛；高聳",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23083,
        "en": "society",
        "kk": "",
        "zh": "n. 社會；交際",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23084,
        "en": "software",
        "kk": "",
        "zh": "n. 軟體",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23085,
        "en": "solace",
        "kk": "",
        "zh": "n. 安慰；慰藉 v安慰",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23086,
        "en": "sola",
        "kk": "",
        "zh": "a. 太陽的；日光的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23087,
        "en": "solely",
        "kk": "",
        "zh": "ad. 單獨地；唯一地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23088,
        "en": "solicit",
        "kk": "",
        "zh": "v. 請求；懇求",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23089,
        "en": "solve",
        "kk": "",
        "zh": "v. 解決；解答",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23090,
        "en": "sophisticated",
        "kk": "",
        "zh": "a. 世故的；精緻的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23091,
        "en": "sort",
        "kk": "",
        "zh": "v. 挑選；區分 n 種類；品種",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23092,
        "en": "sound",
        "kk": "",
        "zh": "n. 聲音；響聲 v聽起來",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23093,
        "en": "source",
        "kk": "",
        "zh": "n. 根源；來源 v隔開",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23094,
        "en": "space",
        "kk": "",
        "zh": "n. 空間；宇宙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23095,
        "en": "span",
        "kk": "",
        "zh": "n. 礅距；跨度 v 橫跨；跨越",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23096,
        "en": "special",
        "kk": "",
        "zh": "a. 特別的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23097,
        "en": "specialize",
        "kk": "",
        "zh": "v. 專精於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23098,
        "en": "specialty",
        "kk": "",
        "zh": "n. 專業；專長2656.  speciﬁcation n 載明；詳述",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23099,
        "en": "specify",
        "kk": "",
        "zh": "v. 具體指定；詳細指明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23100,
        "en": "speech",
        "kk": "",
        "zh": "n. 演說；言論",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23101,
        "en": "speed",
        "kk": "",
        "zh": "n. 快速；迅速 v促進；加快",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23102,
        "en": "spend",
        "kk": "",
        "zh": "v. 花費；浪費",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23103,
        "en": "splendid",
        "kk": "",
        "zh": "a. 壯麗的；輝煌的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23104,
        "en": "sponsorship",
        "kk": "",
        "zh": "n. 資助；支持",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23105,
        "en": "spot",
        "kk": "",
        "zh": "n. 斑點；場所 a 立即 v 玷汙；汙辱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23106,
        "en": "spray",
        "kk": "",
        "zh": "n. 噴霧；浪花 v噴灑",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23107,
        "en": "spread",
        "kk": "",
        "zh": "v. 伸展；傳播 n蔓延；流行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23108,
        "en": "spring",
        "kk": "",
        "zh": "n. 春天；活力 v跳躍；提出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23109,
        "en": "sprinkle",
        "kk": "",
        "zh": "v. 灑；噴；淋 n稀疏小雨；少量",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23110,
        "en": "spy",
        "kk": "",
        "zh": "n. 間諜；密探 v 監視；偵察",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23111,
        "en": "square",
        "kk": "",
        "zh": "n. 正方形；廣場a 正直的公正的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23112,
        "en": "stability",
        "kk": "",
        "zh": "n. 穩定；穩定性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23113,
        "en": "stable",
        "kk": "",
        "zh": "n. 馬；馬棚；畜舍",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23114,
        "en": "stack",
        "kk": "",
        "zh": "n. 一堆，一疊；乾草堆 v 堆放",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23115,
        "en": "stage",
        "kk": "",
        "zh": "n. 舞臺；階段 v籌劃；舉行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23116,
        "en": "stake",
        "kk": "",
        "zh": "n. 危險；股本 v 資助；押下",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23117,
        "en": "stance",
        "kk": "",
        "zh": "n. 立場；態度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23118,
        "en": "stand",
        "kk": "",
        "zh": "v. 站立；站著 n立場；態度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23119,
        "en": "standard",
        "kk": "",
        "zh": "n. 標準；水準a 標準的；一流的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23120,
        "en": "standpoint",
        "kk": "",
        "zh": "n. 立場；觀點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23121,
        "en": "staple",
        "kk": "",
        "zh": "n. 主要產品 a 主要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23122,
        "en": "state",
        "kk": "",
        "zh": "n. 狀況，形態；國家；州   v 陳述；聲明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23123,
        "en": "statement",
        "kk": "",
        "zh": "n. 陳述；說明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23124,
        "en": "station",
        "kk": "",
        "zh": "n. 車站；駐地；身分",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23125,
        "en": "stationary",
        "kk": "",
        "zh": "a. 固定的；停滯的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23126,
        "en": "stationery",
        "kk": "",
        "zh": "n. 文具；信",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23127,
        "en": "statistics",
        "kk": "",
        "zh": "n. 統計；統計資料",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23128,
        "en": "status",
        "kk": "",
        "zh": "n. 地位；身分",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23129,
        "en": "steadfast",
        "kk": "",
        "zh": "a. 堅定的；不動搖的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23130,
        "en": "steady",
        "kk": "",
        "zh": "a. 穩固的；平穩的 v 使穩固；使穩定",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23131,
        "en": "steam",
        "kk": "",
        "zh": "n. 蒸汽；水蒸汽v 蒸發；冒熱氣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23132,
        "en": "stem",
        "kk": "",
        "zh": "v. 起源於；攔住；阻擋 n 莖，樹幹",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23133,
        "en": "stick",
        "kk": "",
        "zh": "n. 枝條；棒狀物 v黏貼；堅持；固守",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23134,
        "en": "stock",
        "kk": "",
        "zh": "n. 進貨；庫存品；股票  v 庫存；貯存 a 庫存的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23135,
        "en": "storage",
        "kk": "",
        "zh": "n. 貯藏；保管",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23136,
        "en": "store",
        "kk": "",
        "zh": "n. 店舖；貯存 v 貯存",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23137,
        "en": "storm",
        "kk": "",
        "zh": "n. 暴風雨；爆發；激動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23138,
        "en": "stormy",
        "kk": "",
        "zh": "a. 暴風雨的；暴躁的  v 橫衝直撞；猛衝；起風暴",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23139,
        "en": "storyline",
        "kk": "",
        "zh": "n. 故事；情節",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23140,
        "en": "stout",
        "kk": "",
        "zh": "a. 頑強的；牢固的；粗壯的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23141,
        "en": "straight",
        "kk": "",
        "zh": "a. 筆直的；正直的 ad 立刻；馬上",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23142,
        "en": "straightforward",
        "kk": "",
        "zh": "a. 徑直的；簡單的 ad 坦率地；直截了當地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23143,
        "en": "strategy",
        "kk": "",
        "zh": "n. 策略；計謀",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23144,
        "en": "stream",
        "kk": "",
        "zh": "n. 小河；溪流 v流；流動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23145,
        "en": "streamline",
        "kk": "",
        "zh": "a. 流線型的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23146,
        "en": "strength",
        "kk": "",
        "zh": "n. 力氣；實力強度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23147,
        "en": "strengthen",
        "kk": "",
        "zh": "v. 增強；鞏固",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23148,
        "en": "stress",
        "kk": "",
        "zh": "n. 壓力；緊張；著重 v 強調；著重",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23149,
        "en": "stretch",
        "kk": "",
        "zh": "n. 伸直；展開，曲解  v 伸縮；延續；吹牛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23150,
        "en": "strike",
        "kk": "",
        "zh": "v. 打擊；攻擊 n 罷工；打擊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23151,
        "en": "strive",
        "kk": "",
        "zh": "v. 力爭；苦幹",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23152,
        "en": "structure",
        "kk": "",
        "zh": "n. 結構 v 構造",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23153,
        "en": "study",
        "kk": "",
        "zh": "n. 學習；研究 v 學習；研究",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23154,
        "en": "style",
        "kk": "",
        "zh": "n. 風格；作風",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23155,
        "en": "subject",
        "kk": "",
        "zh": "n. 主題；題目 v易受⋯；易患⋯",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23156,
        "en": "subjectively",
        "kk": "",
        "zh": "ad. 主觀地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23157,
        "en": "submit",
        "kk": "",
        "zh": "v. 屈從；忍受；提交；呈遞；主張",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23158,
        "en": "subordinate",
        "kk": "",
        "zh": "a. 次要的；隸屬的 n 部下；部屬",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23159,
        "en": "subscribe",
        "kk": "",
        "zh": "v. 訂閱；同意",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23160,
        "en": "subside",
        "kk": "",
        "zh": "v. 消退；平息；減弱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23161,
        "en": "subsidize",
        "kk": "",
        "zh": "v. 補助；資助",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23162,
        "en": "subsidy",
        "kk": "",
        "zh": "n. 津貼；補貼",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23163,
        "en": "substantial",
        "kk": "",
        "zh": "a. 真實的；堅固的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23164,
        "en": "substantiate",
        "kk": "",
        "zh": "v. 證實；證明",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23165,
        "en": "substitute",
        "kk": "",
        "zh": "n. 代替人；代替物  v 代替 a 代替的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23166,
        "en": "subtract",
        "kk": "",
        "zh": "v. 減去；去掉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23167,
        "en": "subway",
        "kk": "",
        "zh": "n. 地下鐵",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23168,
        "en": "succeed",
        "kk": "",
        "zh": "v. 成功；繼任",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23169,
        "en": "success",
        "kk": "",
        "zh": "n. 成功；成就2732.  sufﬁcient a 足夠的；充分的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23170,
        "en": "suggest",
        "kk": "",
        "zh": "v. 建議",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23171,
        "en": "suggestion",
        "kk": "",
        "zh": "n. 建議",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23172,
        "en": "suit",
        "kk": "",
        "zh": "n. 西裝；套；副 v相稱；彼此協調",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23173,
        "en": "suitable",
        "kk": "",
        "zh": "a. 適當的；合適的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23174,
        "en": "suitcase",
        "kk": "",
        "zh": "n. 小型旅行箱；手提箱",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23175,
        "en": "suite",
        "kk": "",
        "zh": "n. 套房；隨從",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23176,
        "en": "sum",
        "kk": "",
        "zh": "n. 總數；總和 v 總結",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23177,
        "en": "summarize",
        "kk": "",
        "zh": "v. 作總結；作概括",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23178,
        "en": "superb",
        "kk": "",
        "zh": "a. 堂皇的；宏偉的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23179,
        "en": "superior",
        "kk": "",
        "zh": "a. 較高的；上級的；高傲的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23180,
        "en": "supervise",
        "kk": "",
        "zh": "v. 監督；管理",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23181,
        "en": "supervisory",
        "kk": "",
        "zh": "a. 管理（員）的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23182,
        "en": "supplement",
        "kk": "",
        "zh": "n. 增補，補充；副刊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23183,
        "en": "supplementary",
        "kk": "",
        "zh": "a. 增補的；補充的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23184,
        "en": "supply",
        "kk": "",
        "zh": "n. 供給；供應  v供給；供應",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23185,
        "en": "support",
        "kk": "",
        "zh": "v. 支持；擁護 n支持；擁護",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23186,
        "en": "supportive",
        "kk": "",
        "zh": "a. 支援的；贊助的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23187,
        "en": "suppose",
        "kk": "",
        "zh": "v. 猜想；以為",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23188,
        "en": "surely",
        "kk": "",
        "zh": "ad. 確實；無疑",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23189,
        "en": "surface",
        "kk": "",
        "zh": "n. 面；表面 a 表面的；外觀的 v 顯露；呈現",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23190,
        "en": "surmise",
        "kk": "",
        "zh": "v. 推測；猜測 n推測；猜測",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23191,
        "en": "surprise",
        "kk": "",
        "zh": "v. 驚喜；驚訝 n驚喜；意外",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23192,
        "en": "survey",
        "kk": "",
        "zh": "n. 問卷 v 調查；做問卷",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23193,
        "en": "survive",
        "kk": "",
        "zh": "v. 生存；生還",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23194,
        "en": "susceptible",
        "kk": "",
        "zh": "a. 易被感動的；敏感的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23195,
        "en": "suspect",
        "kk": "",
        "zh": "v. 懷疑；不信任",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23196,
        "en": "suspend",
        "kk": "",
        "zh": "v. 懸掛；使飄浮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23197,
        "en": "sustain",
        "kk": "",
        "zh": "v. 支撐；承受",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23198,
        "en": "sweater",
        "kk": "",
        "zh": "n. 毛線衣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23199,
        "en": "swift",
        "kk": "",
        "zh": "a. 快速的；快捷的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23200,
        "en": "switch",
        "kk": "",
        "zh": "n. 開關；轉換 v改變；轉移",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23201,
        "en": "sympathetic",
        "kk": "",
        "zh": "a. 同情的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23202,
        "en": "sympathize",
        "kk": "",
        "zh": "v. 同情；憐憫",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23203,
        "en": "sympathy",
        "kk": "",
        "zh": "n. 同情；同情心",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23204,
        "en": "symposium",
        "kk": "",
        "zh": "n. 討論會；座談會",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23205,
        "en": "synthesis",
        "kk": "",
        "zh": "n. 綜合體；綜合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23206,
        "en": "system",
        "kk": "",
        "zh": "n. 制度；體制",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23207,
        "en": "systematically",
        "kk": "",
        "zh": "ad. 有系統地；有組織地T",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23208,
        "en": "tackle",
        "kk": "",
        "zh": "v. 著手；交涉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23209,
        "en": "tactful",
        "kk": "",
        "zh": "a. 機智的；圓滑的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23210,
        "en": "tactic",
        "kk": "",
        "zh": "n. 戰術；策略",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23211,
        "en": "tag",
        "kk": "",
        "zh": "n. 牌子；標籤 v 添加；附加",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23212,
        "en": "tailor",
        "kk": "",
        "zh": "n. 裁縫師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23213,
        "en": "take",
        "kk": "",
        "zh": "v. 拿；取；獲得",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23214,
        "en": "takeout",
        "kk": "",
        "zh": "n. 外賣；外賣的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23215,
        "en": "takeover",
        "kk": "",
        "zh": "n. 接管",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23216,
        "en": "talk",
        "kk": "",
        "zh": "v. 講話；談話 n 講話；談話",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23217,
        "en": "talkative",
        "kk": "",
        "zh": "a. 多嘴的；健談的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23218,
        "en": "tangible",
        "kk": "",
        "zh": "a. 明確的；確鑿的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23219,
        "en": "tank",
        "kk": "",
        "zh": "n. 貯水池；坦克",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23220,
        "en": "tap",
        "kk": "",
        "zh": "n. 閥門；塞子 v 接通；裝上",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23221,
        "en": "tape",
        "kk": "",
        "zh": "n. 膠布；錄音帶 v錄音",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23222,
        "en": "target",
        "kk": "",
        "zh": "n. 靶子；目標 v對準",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23223,
        "en": "task",
        "kk": "",
        "zh": "n. 任務；工作",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23224,
        "en": "taste",
        "kk": "",
        "zh": "n. 味覺；味道 v 吃起來；嚐起來",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23225,
        "en": "tax",
        "kk": "",
        "zh": "n. 稅金 v 課稅",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23226,
        "en": "tear",
        "kk": "",
        "zh": "v. 撕開；撕裂 n 眼淚；淚珠",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23227,
        "en": "tease",
        "kk": "",
        "zh": "v. 戲弄；逗弄 n戲弄；逗弄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23228,
        "en": "technicality",
        "kk": "",
        "zh": "n. 專門性；學術性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23229,
        "en": "technician",
        "kk": "",
        "zh": "n. 技術人員；技師",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23230,
        "en": "technique",
        "kk": "",
        "zh": "n. 技巧；技術；技法",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23231,
        "en": "technological",
        "kk": "",
        "zh": "a. 技術（學）的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23232,
        "en": "technology",
        "kk": "",
        "zh": "n. 技術；科技",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23233,
        "en": "temper",
        "kk": "",
        "zh": "n. 情緒；性情；脾氣 v 調和；緩和",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23234,
        "en": "temporary",
        "kk": "",
        "zh": "a. 臨時的；暫時的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23235,
        "en": "tenant",
        "kk": "",
        "zh": "n. 房客；承租人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23236,
        "en": "tender",
        "kk": "",
        "zh": "a. 嫩的；柔軟的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23237,
        "en": "tense",
        "kk": "",
        "zh": "a. 緊張的；拉緊的v 使繃緊；使緊張",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23238,
        "en": "tension",
        "kk": "",
        "zh": "n. 拉緊；繃緊 v拉緊；繃緊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23239,
        "en": "tenure",
        "kk": "",
        "zh": "n. 佔有；佔有權",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23240,
        "en": "term",
        "kk": "",
        "zh": "n. 期；期限；任期",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23241,
        "en": "terminal",
        "kk": "",
        "zh": "a. 末端的；終點的 n 終點；末站；航廈",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23242,
        "en": "terminology",
        "kk": "",
        "zh": "n. 術語，專門用語",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23243,
        "en": "terrible",
        "kk": "",
        "zh": "a. 可怕的；嚇人的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23244,
        "en": "territory",
        "kk": "",
        "zh": "n. 領土；版圖；領地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23245,
        "en": "testify",
        "kk": "",
        "zh": "v. 作證；證實",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23246,
        "en": "testimonial",
        "kk": "",
        "zh": "n. 證明書；推薦書",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23247,
        "en": "thorough",
        "kk": "",
        "zh": "a. 徹底的；完全的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23248,
        "en": "thoroughness",
        "kk": "",
        "zh": "n. 徹底；完全",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23249,
        "en": "though",
        "kk": "",
        "zh": "conj. 雖然；儘管ad 然而；還是",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23250,
        "en": "thought",
        "kk": "",
        "zh": "n. 思維；思考",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23251,
        "en": "thread",
        "kk": "",
        "zh": "n. 線狀物；頭緒v 通過；穿過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23252,
        "en": "threat",
        "kk": "",
        "zh": "n. 威脅；恐嚇",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23253,
        "en": "thrive",
        "kk": "",
        "zh": "v. 興旺；繁榮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23254,
        "en": "throughout",
        "kk": "",
        "zh": "prep. 遍及；遍布  ad 處處；始終",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23255,
        "en": "thus",
        "kk": "",
        "zh": "ad. 如此；這樣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23256,
        "en": "ticket",
        "kk": "",
        "zh": "n. 票；券",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23257,
        "en": "tie",
        "kk": "",
        "zh": "v. 束縛；約束；平手",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23258,
        "en": "tight",
        "kk": "",
        "zh": "a. 牢固的；緊身的ad 緊緊地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23259,
        "en": "time",
        "kk": "",
        "zh": "n. 時間；時光 v 測定；記錄",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23260,
        "en": "timeliness",
        "kk": "",
        "zh": "n. 及時；適時",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23261,
        "en": "titl",
        "kk": "",
        "zh": "n. 標題；題目 v 加標題於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23262,
        "en": "token",
        "kk": "",
        "zh": "n. 標記；標誌；象徵 a 象徵性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23263,
        "en": "toll",
        "kk": "",
        "zh": "n. 使用費；通行費",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23264,
        "en": "tool",
        "kk": "",
        "zh": "n. 工具；器具",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23265,
        "en": "top",
        "kk": "",
        "zh": "n. 頂部；山頂；最高程度  a 最高的；最優良的 v 加蓋；勝過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23266,
        "en": "topic",
        "kk": "",
        "zh": "n. 主題；要旨",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23267,
        "en": "total",
        "kk": "",
        "zh": "a. 總計的；總括的n 總數  v 合計為",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23268,
        "en": "tour",
        "kk": "",
        "zh": "n. 旅遊；遊覽 v 旅遊；遊覽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23269,
        "en": "tow",
        "kk": "",
        "zh": "v. 拖；拉；牽引 n 拖；拉；牽引",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23270,
        "en": "town",
        "kk": "",
        "zh": "n. 鎮；市鎮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23271,
        "en": "track",
        "kk": "",
        "zh": "n. 行蹤；軌道 v 跟蹤；追蹤",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23272,
        "en": "trade",
        "kk": "",
        "zh": "n. 貿易；交易 v 交換",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23273,
        "en": "tradition",
        "kk": "",
        "zh": "n. 傳統 習俗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23274,
        "en": "traditional",
        "kk": "",
        "zh": "a. 傳統的2842. trafﬁc n 交通",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23275,
        "en": "trail",
        "kk": "",
        "zh": "v. 拖；曳；跟蹤 n小道；痕跡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23276,
        "en": "transact",
        "kk": "",
        "zh": "v. 處置；執行",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23277,
        "en": "trash",
        "kk": "",
        "zh": "n. 廢物；垃圾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23278,
        "en": "travel",
        "kk": "",
        "zh": "v. 旅遊；移動",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23279,
        "en": "traveler",
        "kk": "",
        "zh": "n. 旅行者；旅客",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23280,
        "en": "treasure",
        "kk": "",
        "zh": "n. 金銀財寶；財富  v 珍愛；珍視",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23281,
        "en": "treat",
        "kk": "",
        "zh": "v. 對待；處理 n 請客",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23282,
        "en": "treatment",
        "kk": "",
        "zh": "n. 對待；治療",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23283,
        "en": "treaty",
        "kk": "",
        "zh": "n. 條約；協定",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23284,
        "en": "tremendous",
        "kk": "",
        "zh": "a. 巨大的；極大的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23285,
        "en": "trial",
        "kk": "",
        "zh": "n. 試驗；審問 a 試驗的；審訊的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23286,
        "en": "triangle",
        "kk": "",
        "zh": "n. 三角形",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23287,
        "en": "tribal",
        "kk": "",
        "zh": "a. 部落的；種族的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23288,
        "en": "tribe",
        "kk": "",
        "zh": "n. 部落；種族",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23289,
        "en": "trivial",
        "kk": "",
        "zh": "a. 瑣細的；不重要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23290,
        "en": "truly",
        "kk": "",
        "zh": "ad. 真誠地；忠實地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23291,
        "en": "trust",
        "kk": "",
        "zh": "n. 信任；信賴 v 信任；信賴",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23292,
        "en": "trustee",
        "kk": "",
        "zh": "n. 受託管理人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23293,
        "en": "twice",
        "kk": "",
        "zh": "ad. 兩次；兩回；兩倍",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23294,
        "en": "two-sided",
        "kk": "",
        "zh": "a. 兩邊的；兩面的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23295,
        "en": "type",
        "kk": "",
        "zh": "n. 類型；型式 v 作為⋯的典型；打字",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23296,
        "en": "typical",
        "kk": "",
        "zh": "a. 典型的；有代表性的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23297,
        "en": "typo",
        "kk": "",
        "zh": "n. 筆誤U",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23298,
        "en": "ultimate",
        "kk": "",
        "zh": "a. 最後的；最終的 n 終極；結局",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23299,
        "en": "ultimately",
        "kk": "",
        "zh": "ad. 終極地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23300,
        "en": "ultra",
        "kk": "",
        "zh": "a. 偏激的；過分的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23301,
        "en": "unable",
        "kk": "",
        "zh": "a. 不能的；不會的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23302,
        "en": "unacceptable",
        "kk": "",
        "zh": "a. 無法接受的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23303,
        "en": "unaccountable",
        "kk": "",
        "zh": "a. 無法解釋的；無責任的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23304,
        "en": "unaccustomed",
        "kk": "",
        "zh": "a. 不習慣的；不熟悉的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23305,
        "en": "unauthorized",
        "kk": "",
        "zh": "a. 未被授權的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23306,
        "en": "unaware",
        "kk": "",
        "zh": "a. 未察覺到的ad 意外地；突然地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23307,
        "en": "unbalance",
        "kk": "",
        "zh": "v. 使失去平衡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23308,
        "en": "unbeatable",
        "kk": "",
        "zh": "a. 打不垮的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23309,
        "en": "unbiased",
        "kk": "",
        "zh": "a. 無偏見的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23310,
        "en": "uncertain",
        "kk": "",
        "zh": "a. 不確定的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23311,
        "en": "uncertainty",
        "kk": "",
        "zh": "n. 不確定性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23312,
        "en": "unconventional",
        "kk": "",
        "zh": "a. 非傳統的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23313,
        "en": "underestimate",
        "kk": "",
        "zh": "v. 低估",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23314,
        "en": "underground",
        "kk": "",
        "zh": "a. 地下的；不公開的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23315,
        "en": "underline",
        "kk": "",
        "zh": "v. 強調；使突出",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23316,
        "en": "understand",
        "kk": "",
        "zh": "v. 了解；理解",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23317,
        "en": "understatement",
        "kk": "",
        "zh": "n. 不充分的陳述；保守的陳述",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23318,
        "en": "underway",
        "kk": "",
        "zh": "a. 在進行中的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23319,
        "en": "unfair",
        "kk": "",
        "zh": "a. 不公平的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23320,
        "en": "unforeseen",
        "kk": "",
        "zh": "ad. 預料之外的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23321,
        "en": "unfortunately",
        "kk": "",
        "zh": "ad. 不幸地2893.  unidentiﬁed a 未辨別出的；身分不明的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23322,
        "en": "uniform",
        "kk": "",
        "zh": "n. 制服 a 相同的；一致的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23323,
        "en": "unify",
        "kk": "",
        "zh": "v. 統一；聯合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23324,
        "en": "unimaginable",
        "kk": "",
        "zh": "a. 難以想像的；想不到的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23325,
        "en": "union",
        "kk": "",
        "zh": "n. 結合；合併",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23326,
        "en": "unique",
        "kk": "",
        "zh": "a. 獨特的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23327,
        "en": "uniquely",
        "kk": "",
        "zh": "ad. 獨特地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23328,
        "en": "uniqueness",
        "kk": "",
        "zh": "n. 獨特",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23329,
        "en": "unit",
        "kk": "",
        "zh": "n. 單位；單元",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23330,
        "en": "unite",
        "kk": "",
        "zh": "v. 使聯合；統一",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23331,
        "en": "university",
        "kk": "",
        "zh": "n. 大學",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23332,
        "en": "unless",
        "kk": "",
        "zh": "prep. 除⋯⋯外conj 如果不；除非",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23333,
        "en": "unlimited",
        "kk": "",
        "zh": "a. 無限制的；無約束的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23334,
        "en": "unlock",
        "kk": "",
        "zh": "v. 開啟；揭開",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23335,
        "en": "unnecessary",
        "kk": "",
        "zh": "a. 不必要的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23336,
        "en": "unsanitary",
        "kk": "",
        "zh": "a. 不衛生的；有礙健康的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23337,
        "en": "unsatisfactory",
        "kk": "",
        "zh": "a. 不滿意的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23338,
        "en": "upcoming",
        "kk": "",
        "zh": "a. 即將來臨的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23339,
        "en": "update",
        "kk": "",
        "zh": "v. 使現代化；更新",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23340,
        "en": "upon",
        "kk": "",
        "zh": "prep. 在⋯之上；在⋯上面",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23341,
        "en": "upwards",
        "kk": "",
        "zh": "ad. 向上地；朝上",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23342,
        "en": "urban",
        "kk": "",
        "zh": "a. 城市的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23343,
        "en": "urbanize",
        "kk": "",
        "zh": "v. 使都市化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23344,
        "en": "urgent",
        "kk": "",
        "zh": "a. 急促的；急的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23345,
        "en": "use",
        "kk": "",
        "zh": "v. 使用",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23346,
        "en": "useful",
        "kk": "",
        "zh": "a. 有用的；有價值的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23347,
        "en": "useless",
        "kk": "",
        "zh": "a. 無用的；無價值的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23348,
        "en": "usual",
        "kk": "",
        "zh": "a. 通常的；平常的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23349,
        "en": "usually",
        "kk": "",
        "zh": "ad. 通常地；慣常地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23350,
        "en": "utilization",
        "kk": "",
        "zh": "n. 利用",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23351,
        "en": "utilize",
        "kk": "",
        "zh": "v. 利用V",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23352,
        "en": "vacant",
        "kk": "",
        "zh": "a. 空的；空著的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23353,
        "en": "vacation",
        "kk": "",
        "zh": "n. 假期；休假",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23354,
        "en": "vaccinate",
        "kk": "",
        "zh": "v. 注射疫苗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23355,
        "en": "vaccination",
        "kk": "",
        "zh": "n. 疫苗接種",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23356,
        "en": "vain",
        "kk": "",
        "zh": "a. 愛虛榮的；自負的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23357,
        "en": "valid",
        "kk": "",
        "zh": "a. 有根據的；確鑿的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23358,
        "en": "validat",
        "kk": "",
        "zh": "v. 使有效；使生效",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23359,
        "en": "valuable",
        "kk": "",
        "zh": "a. 有價值的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23360,
        "en": "value",
        "kk": "",
        "zh": "n. 價值",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23361,
        "en": "van",
        "kk": "",
        "zh": "n. 廂型車；小貨車",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23362,
        "en": "vandalize",
        "kk": "",
        "zh": "v. 任意破壞",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23363,
        "en": "variable",
        "kk": "",
        "zh": "a. 易變的；多變的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23364,
        "en": "variation",
        "kk": "",
        "zh": "n. 變動；差異",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23365,
        "en": "variety",
        "kk": "",
        "zh": "n. 多樣化；變化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23366,
        "en": "various",
        "kk": "",
        "zh": "a. 不同的；各種各樣的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23367,
        "en": "vary",
        "kk": "",
        "zh": "v. 使不同；變更",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23368,
        "en": "vas",
        "kk": "",
        "zh": "a. 廣闊的；浩瀚的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23369,
        "en": "vegetable",
        "kk": "",
        "zh": "n. 蔬菜",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23370,
        "en": "vegetarian",
        "kk": "",
        "zh": "n. 素食主義者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23371,
        "en": "vehicle",
        "kk": "",
        "zh": "a. 運載工具；手段",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23372,
        "en": "veil",
        "kk": "",
        "zh": "n. 面紗；面罩 v 掩飾；遮蓋",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23373,
        "en": "vend",
        "kk": "",
        "zh": "v. 出售；販賣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23374,
        "en": "venture",
        "kk": "",
        "zh": "n. 冒險事業；投機活動 v 冒險",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23375,
        "en": "versatile",
        "kk": "",
        "zh": "a. 多才多藝的；多功能的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23376,
        "en": "version",
        "kk": "",
        "zh": "n. 版本；說法",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23377,
        "en": "vessel",
        "kk": "",
        "zh": "n. 船；艦；血管",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23378,
        "en": "via",
        "kk": "",
        "zh": "prep. 透過；憑藉",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23379,
        "en": "viable",
        "kk": "",
        "zh": "a. 有望成功的；切實可行的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23380,
        "en": "vice",
        "kk": "",
        "zh": "versa. ad 反之亦然",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23381,
        "en": "victim",
        "kk": "",
        "zh": "n. 受害者；犧牲者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23382,
        "en": "viewpoint",
        "kk": "",
        "zh": "n. 觀點；視角",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23383,
        "en": "violation",
        "kk": "",
        "zh": "n. 違反；違背",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23384,
        "en": "virtual",
        "kk": "",
        "zh": "a. 虛擬的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23385,
        "en": "visibility",
        "kk": "",
        "zh": "n. 能見度；明顯性",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23386,
        "en": "visible",
        "kk": "",
        "zh": "a. 可看見的；清晰的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23387,
        "en": "visit",
        "kk": "",
        "zh": "v. 參觀；訪視",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23388,
        "en": "visitor",
        "kk": "",
        "zh": "n. 參觀者；訪視者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23389,
        "en": "visual",
        "kk": "",
        "zh": "a. 可被看見的；視覺的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23390,
        "en": "vita",
        "kk": "",
        "zh": "a. 生命的；充滿活力的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23391,
        "en": "vivid",
        "kk": "",
        "zh": "a. 生動的；活潑的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23392,
        "en": "vocabulary",
        "kk": "",
        "zh": "n. 單字；字彙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23393,
        "en": "voice",
        "kk": "",
        "zh": "n. 聲音",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23394,
        "en": "volatile",
        "kk": "",
        "zh": "a. 易揮發的；易變的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23395,
        "en": "volunteer",
        "kk": "",
        "zh": "n. 志願者，義工 v 自願",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23396,
        "en": "voucher",
        "kk": "",
        "zh": "n. 票券；證人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23397,
        "en": "voyage",
        "kk": "",
        "zh": "n. 航海；航行 v航海；航行W",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23398,
        "en": "wage",
        "kk": "",
        "zh": "v. 進行；從事",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23399,
        "en": "wagon",
        "kk": "",
        "zh": "n. 運貨馬車",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23400,
        "en": "waist",
        "kk": "",
        "zh": "n. 腰；腰部",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23401,
        "en": "wait",
        "kk": "",
        "zh": "v. 等；等待 n 等待",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23402,
        "en": "waiter",
        "kk": "",
        "zh": "n. 服務生",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23403,
        "en": "waitress",
        "kk": "",
        "zh": "n. 女服務生",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23404,
        "en": "waive",
        "kk": "",
        "zh": "v. 放棄；撤回",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23405,
        "en": "wallet",
        "kk": "",
        "zh": "n. 皮夾",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23406,
        "en": "wallpaper",
        "kk": "",
        "zh": "n. 壁紙",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23407,
        "en": "warm",
        "kk": "",
        "zh": "a. 溫暖的；暖和的v 變暖和",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23408,
        "en": "warn",
        "kk": "",
        "zh": "v. 警告；告誡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23409,
        "en": "warning",
        "kk": "",
        "zh": "n. 警告；告誡",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23410,
        "en": "waste",
        "kk": "",
        "zh": "v. 浪費；濫用 n浪費；荒原",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23411,
        "en": "watch",
        "kk": "",
        "zh": "n. 看守，監視；手錶 v 觀看；注視",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23412,
        "en": "wave",
        "kk": "",
        "zh": "n. 海浪；浪潮 v 揮手；飄揚",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23413,
        "en": "waver",
        "kk": "",
        "zh": "v. 搖擺；搖晃動搖",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23414,
        "en": "weak",
        "kk": "",
        "zh": "a. 弱的；虛弱的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23415,
        "en": "weakness",
        "kk": "",
        "zh": "n. 虛弱；弱點",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23416,
        "en": "wealth",
        "kk": "",
        "zh": "n. 財產；資源",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23417,
        "en": "weight",
        "kk": "",
        "zh": "n. 重量；體重",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23418,
        "en": "whereas",
        "kk": "",
        "zh": "conj. 然而；反之",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23419,
        "en": "whether",
        "kk": "",
        "zh": "conj. 是否；不管是⋯⋯（或是）",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23420,
        "en": "whole",
        "kk": "",
        "zh": "a. 整體的；全部的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23421,
        "en": "widespread",
        "kk": "",
        "zh": "a. 普遍的；廣泛的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23422,
        "en": "width",
        "kk": "",
        "zh": "n. 寬度；闊度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23423,
        "en": "will",
        "kk": "",
        "zh": "aux. 將；將要 n 意志；心願；目的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23424,
        "en": "willingness",
        "kk": "",
        "zh": "n. 自願；樂意",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23425,
        "en": "wire",
        "kk": "",
        "zh": "n. 電纜；電線 v 發電報；裝電線",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23426,
        "en": "withdrawal",
        "kk": "",
        "zh": "n. 收回；撤回 提款",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23427,
        "en": "within",
        "kk": "",
        "zh": "prep. 在⋯⋯範圍內；不超過 ad 在裡面；在內部",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23428,
        "en": "withstand",
        "kk": "",
        "zh": "v. 抵擋；反抗",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23429,
        "en": "witness",
        "kk": "",
        "zh": "n. 目擊者；見證人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23430,
        "en": "woeful",
        "kk": "",
        "zh": "a. 悲哀的，悲傷的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23431,
        "en": "wonder",
        "kk": "",
        "zh": "v. 納悶；想知道n 驚奇；驚異",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23432,
        "en": "wo",
        "kk": "",
        "zh": "v. 向⋯⋯求愛；招致；引起",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23433,
        "en": "work",
        "kk": "",
        "zh": "v. 工作；勞動 n 成果；產品",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23434,
        "en": "workaholic",
        "kk": "",
        "zh": "n. 工作狂；專心工作的人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23435,
        "en": "world",
        "kk": "",
        "zh": "n. 世界；地球",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23436,
        "en": "worldwide",
        "kk": "",
        "zh": "a. 世界範圍的；遍及全球的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23437,
        "en": "worry",
        "kk": "",
        "zh": "v. 擔心；擔憂",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23438,
        "en": "would",
        "kk": "",
        "zh": "aux. 將；要",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23439,
        "en": "wrist",
        "kk": "",
        "zh": "n. 腕；腕關節X",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23440,
        "en": "X-ray",
        "kk": "",
        "zh": "n. X 光檢查 v 用X光線檢查Y",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23441,
        "en": "yacht",
        "kk": "",
        "zh": "n. 快艇；遊艇",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23442,
        "en": "yard",
        "kk": "",
        "zh": "n. 庭院；後院",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23443,
        "en": "yawn",
        "kk": "",
        "zh": "n. 呵欠 v 打呵欠",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23444,
        "en": "year-end",
        "kk": "",
        "zh": "n. 年終 a 年終的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23445,
        "en": "yearly",
        "kk": "",
        "zh": "a. 每年的；一年一次的 ad 每年；一年一度",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23446,
        "en": "yearn",
        "kk": "",
        "zh": "v. 思念；渴望",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23447,
        "en": "yearningly",
        "kk": "",
        "zh": "ad. 思念地；渴望地",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23448,
        "en": "yield",
        "kk": "",
        "zh": "v. 出產；產生 n 產量；收穫量",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23449,
        "en": "youngster",
        "kk": "",
        "zh": "n. 小孩；年輕人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23450,
        "en": "youth",
        "kk": "",
        "zh": "n. 青少年時期；青年；小伙子",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23451,
        "en": "youthful",
        "kk": "",
        "zh": "a. 年輕的；青年的Z",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23452,
        "en": "zip",
        "kk": "",
        "zh": "v. 給以速度（或力量）；使增加興趣 n 拉鍊",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23453,
        "en": "zone",
        "kk": "",
        "zh": "n. 地帶；地區",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23454,
        "en": "zoom",
        "kk": "",
        "zh": "v. 發出嗡嗡聲；使急遽上升",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23455,
        "en": "zoom-in",
        "kk": "",
        "zh": "v. 用變焦距鏡頭使景物放大",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 23456,
        "en": "oom-out",
        "kk": "",
        "zh": "v. 用變焦距鏡頭使景物縮小",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    }
];
