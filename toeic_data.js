// 多益常考單字 (單元 11-16)
const toeicWordsDB = [
    {
        "id": 20001,
        "en": "accommodate",
        "kk": "/əˈkɑməˌdeɪt/",
        "zh": "v. 容納；提供住宿",
        "unit": 11,
        "example": "any language must accommodate new concepts",
        "exampleZh": "任何語言都必須容納新概念"
    },
    {
        "id": 20002,
        "en": "acquire",
        "kk": "/əˈkwaɪɝ/",
        "zh": "v. 取得；收購",
        "unit": 11,
        "example": "you must acquire the rudiments of Greek",
        "exampleZh": "你必須掌握希臘文的基礎知識"
    },
    {
        "id": 20003,
        "en": "adjacent",
        "kk": "",
        "zh": "adj. 鄰近的",
        "unit": 11,
        "example": "adjacent rooms",
        "exampleZh": "相鄰的房間"
    },
    {
        "id": 20004,
        "en": "administration",
        "kk": "/ædˌmɪnɪˈstɹeɪʃən/",
        "zh": "n. 管理；行政",
        "unit": 11,
        "example": "the inhabitants of the island voted to remain under French administration",
        "exampleZh": "該島居民投票決定繼續由法國管理"
    },
    {
        "id": 20005,
        "en": "advertisement",
        "kk": "/ˌædvɝˈtaɪzmənt/",
        "zh": "n. 廣告",
        "unit": 11,
        "example": "we received only two replies to our advertisement",
        "exampleZh": "我們只收到了兩份對廣告的回复"
    },
    {
        "id": 20006,
        "en": "agenda",
        "kk": "/əˈdʒɛndə/",
        "zh": "n. 議程",
        "unit": 11,
        "example": "he vowed to put jobs at the top of his agenda",
        "exampleZh": "他發誓要把就業放在第一位"
    },
    {
        "id": 20007,
        "en": "agreement",
        "kk": "/əˈɡɹimənt/",
        "zh": "n. 協議；合約",
        "unit": 11,
        "example": "the two officers nodded in agreement",
        "exampleZh": "兩位軍官點頭同意"
    },
    {
        "id": 20008,
        "en": "allocate",
        "kk": "/ˈæɫəˌkeɪt/",
        "zh": "v. 分配；撥出",
        "unit": 11
    },
    {
        "id": 20009,
        "en": "amendment",
        "kk": "",
        "zh": "n. 修正；修訂",
        "unit": 11,
        "example": "an amendment to existing bail laws",
        "exampleZh": "現行保釋法的修正案"
    },
    {
        "id": 20010,
        "en": "annual",
        "kk": "/ˈænjuəɫ/",
        "zh": "adj. 每年的",
        "unit": 11,
        "example": "the union's annual conference",
        "exampleZh": "工會年會"
    },
    {
        "id": 20011,
        "en": "applicant",
        "kk": "/ˈæpɫɪkənt/",
        "zh": "n. 申請人",
        "unit": 11,
        "example": "a job applicant",
        "exampleZh": "求職者"
    },
    {
        "id": 20012,
        "en": "appointment",
        "kk": "/əˈpɔɪntmənt/",
        "zh": "n. 約會；任命",
        "unit": 11,
        "example": "she took up an appointment as head of communications",
        "exampleZh": "她被任命為通訊主管"
    },
    {
        "id": 20013,
        "en": "appraisal",
        "kk": "",
        "zh": "n. 評估；考核",
        "unit": 11,
        "example": "treatment begins with a thorough appraisal of the patient's condition",
        "exampleZh": "治療始於對患者病情的徹底評估"
    },
    {
        "id": 20014,
        "en": "approval",
        "kk": "/əˈpɹuvəɫ/",
        "zh": "n. 批准",
        "unit": 11,
        "example": "the road plans have been given approval",
        "exampleZh": "道路計劃已獲得批准"
    },
    {
        "id": 20015,
        "en": "assemble",
        "kk": "/əˈsɛmbəɫ/",
        "zh": "v. 組裝；集合",
        "unit": 11,
        "example": "the males assemble and hang by their front legs within a yard or two of the female",
        "exampleZh": "雄性聚集在一起，用前腿懸掛在距離雌性一兩碼的地方"
    },
    {
        "id": 20016,
        "en": "assess",
        "kk": "/əˈsɛs/",
        "zh": "v. 評估",
        "unit": 11
    },
    {
        "id": 20017,
        "en": "asset",
        "kk": "/ˈæˌsɛt/",
        "zh": "n. 資產",
        "unit": 11,
        "example": "debiting the asset account",
        "exampleZh": "借記資產帳戶"
    },
    {
        "id": 20018,
        "en": "attach",
        "kk": "/əˈtætʃ/",
        "zh": "v. 附上；附加",
        "unit": 11,
        "example": "he doesn't attach too much importance to radical ideas",
        "exampleZh": "他不太重視激進的想法"
    },
    {
        "id": 20019,
        "en": "attendee",
        "kk": "",
        "zh": "n. 出席者",
        "unit": 11
    },
    {
        "id": 20020,
        "en": "audit",
        "kk": "",
        "zh": "n. 審計；v. 查帳",
        "unit": 11,
        "example": "a complete audit of flora and fauna at the site",
        "exampleZh": "對現場動植物進行全面審核"
    },
    {
        "id": 20021,
        "en": "authorize",
        "kk": "/ˈɔθɝˌaɪz/",
        "zh": "v. 授權；批准",
        "unit": 11
    },
    {
        "id": 20022,
        "en": "availability",
        "kk": "",
        "zh": "n. 可用性；空檔",
        "unit": 11
    },
    {
        "id": 20023,
        "en": "backlog",
        "kk": "",
        "zh": "n. 積壓的工作",
        "unit": 11,
        "example": "the company took on extra staff to clear the backlog of work",
        "exampleZh": "公司增聘員工清理積壓的工作"
    },
    {
        "id": 20024,
        "en": "balance",
        "kk": "/ˈbæɫəns/",
        "zh": "n. 餘額；平衡",
        "unit": 11,
        "example": "overseas investments can add balance to an investment portfolio",
        "exampleZh": "海外投資可以增加投資組合的平衡"
    },
    {
        "id": 20025,
        "en": "banquet",
        "kk": "/ˈbæŋkwət/",
        "zh": "n. 宴會",
        "unit": 11,
        "example": "a ten-course banquet",
        "exampleZh": "十道菜的宴會"
    },
    {
        "id": 20026,
        "en": "benefit",
        "kk": "/ˈbɛnəfɪt/",
        "zh": "n. 福利；利益",
        "unit": 11,
        "example": "tenants bought their houses with the benefit of a discount",
        "exampleZh": "租戶以折扣優惠購買房屋"
    },
    {
        "id": 20027,
        "en": "bid",
        "kk": "/ˈbɪd/",
        "zh": "n. 投標；v. 出價",
        "unit": 11
    },
    {
        "id": 20028,
        "en": "board",
        "kk": "/ˈbɔɹd/",
        "zh": "n. 董事會；v. 登機",
        "unit": 11
    },
    {
        "id": 20029,
        "en": "booth",
        "kk": "/ˈbuθ/",
        "zh": "n. 攤位；小隔間",
        "unit": 11,
        "example": "a ticket booth",
        "exampleZh": "售票亭"
    },
    {
        "id": 20030,
        "en": "brochure",
        "kk": "/bɹoʊˈʃʊɹ/",
        "zh": "n. 小冊子",
        "unit": 11,
        "example": "a holiday brochure",
        "exampleZh": "假期小冊子"
    },
    {
        "id": 20031,
        "en": "budget",
        "kk": "/ˈbədʒɪt/",
        "zh": "n. 預算",
        "unit": 11,
        "example": "Tom made a budget.",
        "exampleZh": "湯姆做了一個預算。"
    },
    {
        "id": 20032,
        "en": "bulletin",
        "kk": "/ˈbʊɫɪtən/",
        "zh": "n. 公告",
        "unit": 11,
        "example": "log-in details will be sent out to members via the monthly bulletin",
        "exampleZh": "登入詳細資訊將透過每月公告發送給會員"
    },
    {
        "id": 20033,
        "en": "candidate",
        "kk": "/ˈkændədeɪt/",
        "zh": "n. 候選人；應徵者",
        "unit": 11,
        "example": "Tom is a candidate.",
        "exampleZh": "湯姆是一名候選人。"
    },
    {
        "id": 20034,
        "en": "capacity",
        "kk": "/kəˈpæsəti/",
        "zh": "n. 容量；能力",
        "unit": 11,
        "example": "his capacity to inspire trust in others",
        "exampleZh": "他激發他人信任的能力"
    },
    {
        "id": 20035,
        "en": "cargo",
        "kk": "/ˈkɑɹˌɡoʊ/",
        "zh": "n. 貨物",
        "unit": 11,
        "example": "a cargo of oil",
        "exampleZh": "一批石油"
    },
    {
        "id": 20036,
        "en": "catalog",
        "kk": "/ˈkætəɫɔɡ/",
        "zh": "n. 目錄",
        "unit": 11,
        "example": "his life was a catalog of dismal failures",
        "exampleZh": "他的一生充滿了令人沮喪的失敗"
    },
    {
        "id": 20037,
        "en": "catering",
        "kk": "",
        "zh": "n. 外燴服務",
        "unit": 11,
        "example": "high standards of catering",
        "exampleZh": "高標準的餐飲"
    },
    {
        "id": 20038,
        "en": "certificate",
        "kk": "/sɝˈtɪfɪkət/",
        "zh": "n. 證書",
        "unit": 11,
        "example": "graduate certificate in information technology",
        "exampleZh": "資訊科技研究生證書"
    },
    {
        "id": 20039,
        "en": "clientele",
        "kk": "",
        "zh": "n. 客戶群",
        "unit": 11,
        "example": "the dancers don't mix with the clientele",
        "exampleZh": "舞者不與顧客混在一起"
    },
    {
        "id": 20040,
        "en": "colleague",
        "kk": "/ˈkɑɫiɡ/",
        "zh": "n. 同事",
        "unit": 11,
        "example": "Simon was also a very good colleague",
        "exampleZh": "西蒙也是一位非常好的同事"
    },
    {
        "id": 20041,
        "en": "commence",
        "kk": "/kəˈmɛns/",
        "zh": "v. 開始",
        "unit": 11,
        "example": "a public inquiry is due to commence on the 16th",
        "exampleZh": "公眾調查將於16日開始"
    },
    {
        "id": 20042,
        "en": "commission",
        "kk": "/kəˈmɪʃən/",
        "zh": "n. 佣金；委員會",
        "unit": 11,
        "example": "he has resigned his commission",
        "exampleZh": "他已辭去職務"
    },
    {
        "id": 20043,
        "en": "commute",
        "kk": "/kəmˈjut/",
        "zh": "v. 通勤",
        "unit": 11,
        "example": "the daily commute",
        "exampleZh": "日常通勤"
    },
    {
        "id": 20044,
        "en": "compensation",
        "kk": "/ˌkɑmpənˈseɪʃən/",
        "zh": "n. 補償；薪酬",
        "unit": 11,
        "example": "the gray streets of London were small compensation for the loss of her beloved Africa",
        "exampleZh": "倫敦的灰色街道只是對她失去心愛的非洲的小小的補償"
    },
    {
        "id": 20045,
        "en": "competitive",
        "kk": "/kəmˈpɛtətɪv/",
        "zh": "adj. 有競爭力的",
        "unit": 11,
        "example": "a car industry competitive with any in the world",
        "exampleZh": "與世界上任何一個汽車工業都具有競爭力的汽車工業"
    },
    {
        "id": 20046,
        "en": "complaint",
        "kk": "/kəmˈpɫeɪnt/",
        "zh": "n. 抱怨；投訴",
        "unit": 11,
        "example": "he hasn't any cause for complaint",
        "exampleZh": "他沒有任何理由抱怨"
    },
    {
        "id": 20047,
        "en": "compliance",
        "kk": "",
        "zh": "n. 遵守；合規",
        "unit": 11,
        "example": "they must secure each other's cooperation or compliance",
        "exampleZh": "他們必須確保彼此的合作或遵守"
    },
    {
        "id": 20048,
        "en": "comprehensive",
        "kk": "/ˌkɑmpɹiˈhɛnsɪv/",
        "zh": "adj. 全面的",
        "unit": 11,
        "example": "a comprehensive collection of photographs",
        "exampleZh": "全面的照片集"
    },
    {
        "id": 20049,
        "en": "confidential",
        "kk": "/ˌkɑnfəˈdɛnʃəɫ/",
        "zh": "adj. 機密的",
        "unit": 11,
        "example": "a confidential secretary",
        "exampleZh": "機要秘書"
    },
    {
        "id": 20050,
        "en": "confirm",
        "kk": "/kənˈfɝm/",
        "zh": "v. 確認",
        "unit": 11,
        "example": "Mr. Baker's assistant telephoned to confirm his appointment with the chairman",
        "exampleZh": "貝克先生的助理打電話確認他與董事長的任命"
    },
    {
        "id": 20051,
        "en": "conference",
        "kk": "/ˈkɑnfɝəns/",
        "zh": "n. 會議",
        "unit": 11,
        "example": "a conference call",
        "exampleZh": "電話會議"
    },
    {
        "id": 20052,
        "en": "consecutive",
        "kk": "",
        "zh": "adj. 連續的",
        "unit": 11,
        "example": "a consecutive clause",
        "exampleZh": "連續子句"
    },
    {
        "id": 20053,
        "en": "consultant",
        "kk": "/kənˈsəɫtənt/",
        "zh": "n. 顧問",
        "unit": 11,
        "example": "she is currently a self-employed business consultant",
        "exampleZh": "她目前是個人商業顧問"
    },
    {
        "id": 20054,
        "en": "consumer",
        "kk": "/kənˈsumɝ/",
        "zh": "n. 消費者",
        "unit": 11,
        "example": "consumer demand",
        "exampleZh": "消費者需求"
    },
    {
        "id": 20055,
        "en": "contract",
        "kk": "/ˈkɑnˌtɹækt/",
        "zh": "n. 合約",
        "unit": 11,
        "example": "South can make the contract with correct play",
        "exampleZh": "南方可以透過正確的表現來簽訂合約"
    },
    {
        "id": 20056,
        "en": "convenience",
        "kk": "/kənˈvinjəns/",
        "zh": "n. 便利",
        "unit": 11,
        "example": "the convenience of a portable phone",
        "exampleZh": "手機的便利性"
    },
    {
        "id": 20057,
        "en": "corporation",
        "kk": "/ˌkɔɹpɝˈeɪʃən/",
        "zh": "n. 公司；法人",
        "unit": 11
    },
    {
        "id": 20058,
        "en": "correspondence",
        "kk": "/ˌkɔɹəˈspɑndəns/",
        "zh": "n. 通信；信件",
        "unit": 11,
        "example": "his wife dealt with his private correspondence",
        "exampleZh": "他的妻子處理他的私人信件"
    },
    {
        "id": 20059,
        "en": "courier",
        "kk": "",
        "zh": "n. 快遞員",
        "unit": 11,
        "example": "the check was dispatched by courier",
        "exampleZh": "支票是透過快遞寄出的"
    },
    {
        "id": 20060,
        "en": "coverage",
        "kk": "/ˈkəvɝədʒ/",
        "zh": "n. 涵蓋範圍；保險範圍",
        "unit": 11,
        "example": "a network of eighty transmitters would give nationwide coverage",
        "exampleZh": "由八十個發射機組成的網路將覆蓋全國"
    },
    {
        "id": 20061,
        "en": "customer",
        "kk": "/ˈkəstəmɝ/",
        "zh": "n. 顧客",
        "unit": 11,
        "example": "Mr. Harrison was a regular customer at the Golden Lion",
        "exampleZh": "哈里森先生是金獅酒店的常客"
    },
    {
        "id": 20062,
        "en": "deadline",
        "kk": "/ˈdɛdˌɫaɪn/",
        "zh": "n. 截止日期",
        "unit": 11,
        "example": "the deadline for submissions is February 5th",
        "exampleZh": "提交截止日期為2月5日"
    },
    {
        "id": 20063,
        "en": "deduct",
        "kk": "",
        "zh": "v. 扣除",
        "unit": 11
    },
    {
        "id": 20064,
        "en": "deliver",
        "kk": "/dɪˈɫɪvɝ/",
        "zh": "v. 遞送；交付",
        "unit": 11,
        "example": "deliver us from misery",
        "exampleZh": "救我們脫離苦難"
    },
    {
        "id": 20065,
        "en": "demonstrate",
        "kk": "/ˈdɛmənˌstɹeɪt/",
        "zh": "v. 示範；證明",
        "unit": 11,
        "example": "she began to demonstrate a new-found confidence",
        "exampleZh": "她開始展現新的自信"
    },
    {
        "id": 20066,
        "en": "department",
        "kk": "/dɪˈpɑɹtmənt/",
        "zh": "n. 部門",
        "unit": 11,
        "example": "that's not my department",
        "exampleZh": "那不是我的部門"
    },
    {
        "id": 20067,
        "en": "deposit",
        "kk": "/dəˈpɑzɪt/",
        "zh": "n. 訂金；存款",
        "unit": 11,
        "example": "a vault in which guests may deposit valuable property",
        "exampleZh": "客人可以存放貴重財產的金庫"
    },
    {
        "id": 20068,
        "en": "designate",
        "kk": "/ˈdɛzəɡˌneɪt/",
        "zh": "v. 指定",
        "unit": 11,
        "example": "the Director designate",
        "exampleZh": "候任主任"
    },
    {
        "id": 20069,
        "en": "destination",
        "kk": "/ˌdɛstəˈneɪʃən/",
        "zh": "n. 目的地",
        "unit": 11,
        "example": "a popular destination for golfers",
        "exampleZh": "高爾夫球手的熱門目的地"
    },
    {
        "id": 20070,
        "en": "directory",
        "kk": "/daɪˈɹɛktɝi/",
        "zh": "n. 名錄；通訊錄",
        "unit": 11
    },
    {
        "id": 20071,
        "en": "discount",
        "kk": "/ˈdɪskaʊnt/",
        "zh": "n. 折扣",
        "unit": 11,
        "example": "many stores will offer a discount on bulk purchases",
        "exampleZh": "許多商店都會為大量購買提供折扣"
    },
    {
        "id": 20072,
        "en": "dispatch",
        "kk": "/dɪˈspætʃ/",
        "zh": "v. 派遣；發送",
        "unit": 11
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
        "zh": "n. 部門；分割",
        "unit": 11,
        "example": "the plant can also be easily increased by division in autumn",
        "exampleZh": "該植物還可以在秋季通過分株輕鬆增加"
    },
    {
        "id": 20075,
        "en": "document",
        "kk": "/ˈdɑkjəmɛnt/",
        "zh": "n. 文件",
        "unit": 11
    },
    {
        "id": 20076,
        "en": "domestic",
        "kk": "/dəˈmɛstɪk/",
        "zh": "adj. 國內的",
        "unit": 11,
        "example": "domestic chores",
        "exampleZh": "家務事"
    },
    {
        "id": 20077,
        "en": "downsize",
        "kk": "",
        "zh": "v. 縮編；裁員",
        "unit": 11,
        "example": "recession forced many companies to downsize",
        "exampleZh": "經濟衰退迫使許多公司縮小規模"
    },
    {
        "id": 20078,
        "en": "durable",
        "kk": "/ˈdʊɹəbəɫ/",
        "zh": "adj. 耐用的",
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
        "zh": "adj. 有資格的",
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
        "zh": "v. 隨函附上",
        "unit": 11,
        "example": "I enclose a copy of the job description",
        "exampleZh": "我附上一份職位說明的副本"
    },
    {
        "id": 20083,
        "en": "endorse",
        "kk": "",
        "zh": "v. 背書；認可",
        "unit": 11
    },
    {
        "id": 20084,
        "en": "enroll",
        "kk": "/ɛnˈɹoʊɫ/",
        "zh": "v. 註冊；登記",
        "unit": 11,
        "example": "a campaign to enroll more foster families",
        "exampleZh": "一項招募更多寄養家庭的運動"
    },
    {
        "id": 20085,
        "en": "ensure",
        "kk": "/ɛnˈʃʊɹ/",
        "zh": "v. 確保",
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
        "zh": "n. 設備",
        "unit": 11,
        "example": "they lacked the intellectual equipment to recognize the jokes",
        "exampleZh": "他們缺乏辨識笑話的智力設備"
    },
    {
        "id": 20088,
        "en": "estimate",
        "kk": "/ˈɛstəˌmeɪt/",
        "zh": "n. 估價；v. 估計",
        "unit": 11,
        "example": "the aim is to estimate the effects of macroeconomic policy on the economy",
        "exampleZh": "目的是估計宏觀經濟政策對經濟的影響"
    },
    {
        "id": 20089,
        "en": "evaluate",
        "kk": "/iˈvæɫjuˌeɪt/",
        "zh": "v. 評價",
        "unit": 11,
        "example": "when you evaluate any hammer, look for precision machining",
        "exampleZh": "當您評估任何錘子時，請尋找精密加工的產品"
    },
    {
        "id": 20090,
        "en": "exceed",
        "kk": "/ɪkˈsid/",
        "zh": "v. 超過",
        "unit": 11
    },
    {
        "id": 20091,
        "en": "exhibition",
        "kk": "/ˌɛksəˈbɪʃən/",
        "zh": "n. 展覽",
        "unit": 11,
        "example": "an exhibition game",
        "exampleZh": "一場表演賽"
    },
    {
        "id": 20092,
        "en": "expand",
        "kk": "/ɪkˈspænd/",
        "zh": "v. 擴張",
        "unit": 11,
        "example": "baby birds cannot expand and contract their lungs",
        "exampleZh": "幼鳥無法擴張和收縮肺部"
    },
    {
        "id": 20093,
        "en": "expenditure",
        "kk": "",
        "zh": "n. 開支",
        "unit": 11,
        "example": "cuts in public expenditure",
        "exampleZh": "削減公共開支"
    },
    {
        "id": 20094,
        "en": "expense",
        "kk": "/ɪkˈspɛns/",
        "zh": "n. 費用",
        "unit": 11,
        "example": "the committee does not expect members to be put to any expense",
        "exampleZh": "委員會不希望成員承擔任何費用"
    },
    {
        "id": 20095,
        "en": "expire",
        "kk": "/ɪkˈspaɪɹ/",
        "zh": "v. 到期",
        "unit": 11
    },
    {
        "id": 20096,
        "en": "facility",
        "kk": "/fəˈsɪɫɪti/",
        "zh": "n. 設施",
        "unit": 11,
        "example": "the pianist played with great facility",
        "exampleZh": "鋼琴家演奏得非常自如"
    },
    {
        "id": 20097,
        "en": "fiscal",
        "kk": "",
        "zh": "adj. 財政的",
        "unit": 11
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
        "zh": "n. 預測",
        "unit": 11,
        "example": "rain is forecast for eastern Ohio",
        "exampleZh": "預計俄亥俄州東部將有降雨"
    },
    {
        "id": 20100,
        "en": "franchise",
        "kk": "",
        "zh": "n. 特許經營；加盟",
        "unit": 11
    },
    {
        "id": 20101,
        "en": "freight",
        "kk": "/ˈfɹeɪt/",
        "zh": "n. 貨運",
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
        "zh": "v. 產生",
        "unit": 11,
        "example": "changes that are likely to generate controversy",
        "exampleZh": "可能引起爭議的變化"
    },
    {
        "id": 20104,
        "en": "guarantee",
        "kk": "/ˌɡɛɹənˈti/",
        "zh": "n. 保證；v. 保證",
        "unit": 11
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
        "zh": "n. 詢問",
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
        "zh": "n. 指示；說明",
        "unit": 11,
        "example": "the school offers personalized instruction in a variety of skills",
        "exampleZh": "學校提供各種技能的個人指導"
    },
    {
        "id": 20109,
        "en": "insurance",
        "kk": "/ˌɪnˈʃʊɹəns/",
        "zh": "n. 保險",
        "unit": 11
    },
    {
        "id": 20110,
        "en": "inventory",
        "kk": "/ˌɪnvənˈtɔɹi/",
        "zh": "n. 庫存；存貨",
        "unit": 11
    },
    {
        "id": 20111,
        "en": "invoice",
        "kk": "",
        "zh": "n. 發票；請款單",
        "unit": 11
    },
    {
        "id": 20112,
        "en": "itinerary",
        "kk": "",
        "zh": "n. 行程表",
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
        "zh": "v. 推出；發射",
        "unit": 11,
        "example": "she cruised the waterways on a luxury motor launch",
        "exampleZh": "她乘坐豪華汽車在水道上巡遊"
    },
    {
        "id": 20115,
        "en": "lease",
        "kk": "",
        "zh": "n. 租約；v. 出租",
        "unit": 11,
        "example": "a six-month lease on a shop",
        "exampleZh": "商店六個月的租約"
    },
    {
        "id": 20116,
        "en": "liability",
        "kk": "",
        "zh": "n. 責任；負債",
        "unit": 11,
        "example": "he has become a political liability",
        "exampleZh": "他已成為政治負擔"
    },
    {
        "id": 20117,
        "en": "logistics",
        "kk": "",
        "zh": "n. 物流",
        "unit": 11,
        "example": "Germany's largest beverage logistics organization",
        "exampleZh": "德國最大的飲料物流組織"
    },
    {
        "id": 20118,
        "en": "maintenance",
        "kk": "/ˈmeɪntənəns/",
        "zh": "n. 維護",
        "unit": 11
    },
    {
        "id": 20119,
        "en": "manufacture",
        "kk": "/ˌmænjəˈfæktʃɝ/",
        "zh": "v. 製造",
        "unit": 11
    },
    {
        "id": 20120,
        "en": "margin",
        "kk": "/ˈmɑɹdʒən/",
        "zh": "n. 利潤；邊緣",
        "unit": 11
    },
    {
        "id": 20121,
        "en": "merchandise",
        "kk": "/ˈmɝtʃənˌdaɪz/",
        "zh": "n. 商品",
        "unit": 11,
        "example": "it if be below great men to be kind of recompense, and merchandise their Power",
        "exampleZh": "如果低於偉人，可以作為一種補償，並利用他們的權力"
    },
    {
        "id": 20122,
        "en": "merge",
        "kk": "/ˈmɝdʒ/",
        "zh": "v. 合併",
        "unit": 11
    },
    {
        "id": 20123,
        "en": "minutes",
        "kk": "",
        "zh": "n. 會議記錄",
        "unit": 11
    },
    {
        "id": 20124,
        "en": "negotiate",
        "kk": "/nəˈɡoʊʃiˌeɪt/",
        "zh": "v. 協商；談判",
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
        "zh": "n. 義務",
        "unit": 11
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
        "zh": "v. 操作；營運",
        "unit": 11
    },
    {
        "id": 20129,
        "en": "order",
        "kk": "/ˈɔɹdɝ/",
        "zh": "n. 訂單；v. 訂購",
        "unit": 11,
        "example": "I asked the security guard to order me a taxi",
        "exampleZh": "我讓保安給我叫了一輛計程車"
    },
    {
        "id": 20130,
        "en": "outstanding",
        "kk": "/ˌaʊtˈstændɪŋ/",
        "zh": "adj. 傑出的；未付的",
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
        "zh": "n. 加班",
        "unit": 11,
        "example": "an overtime ban",
        "exampleZh": "加班禁令"
    },
    {
        "id": 20133,
        "en": "participate",
        "kk": "/pɑɹˈtɪsəˌpeɪt/",
        "zh": "v. 參加",
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
        "zh": "n. 薪資單",
        "unit": 11,
        "example": "small employers with a payroll of less than $45,000",
        "exampleZh": "工資低於 45,000 美元的小型雇主"
    },
    {
        "id": 20137,
        "en": "personnel",
        "kk": "/ˌpɝsəˈnɛɫ/",
        "zh": "n. 人員；人事部",
        "unit": 11
    },
    {
        "id": 20138,
        "en": "postpone",
        "kk": "/poʊˈspoʊn/",
        "zh": "v. 延期",
        "unit": 11,
        "example": "The trial was postponed.",
        "exampleZh": "審判被推遲。"
    },
    {
        "id": 20139,
        "en": "precaution",
        "kk": "/pɹiˈkɔʃən/",
        "zh": "n. 預防措施",
        "unit": 11
    },
    {
        "id": 20140,
        "en": "premises",
        "kk": "",
        "zh": "n. 營業場所",
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
        "zh": "n. 程序",
        "unit": 11,
        "example": "the standard procedure for informing new employees about conditions of work",
        "exampleZh": "告知新進員工工作條件的標準程序"
    },
    {
        "id": 20143,
        "en": "procurement",
        "kk": "",
        "zh": "n. 採購",
        "unit": 11
    },
    {
        "id": 20144,
        "en": "productivity",
        "kk": "/ˌpɹoʊdəkˈtɪvəti/",
        "zh": "n. 生產力",
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
        "zh": "v. 晉升；促銷",
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
        "zh": "n. 提案",
        "unit": 11,
        "example": "I approve your proposal.",
        "exampleZh": "我批准你的提議。"
    },
    {
        "id": 20149,
        "en": "purchase",
        "kk": "/ˈpɝtʃəs/",
        "zh": "v. 購買",
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
        "zh": "n. 報價",
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
        "zh": "n. 收件人",
        "unit": 11
    },
    {
        "id": 20154,
        "en": "recruit",
        "kk": "/ɹəˈkɹut/",
        "zh": "v. 招募",
        "unit": 11,
        "example": "they recruit their toughest soldiers from the desert tribes",
        "exampleZh": "他們從沙漠部落招募最強的士兵"
    },
    {
        "id": 20155,
        "en": "refund",
        "kk": "/ˈɹiˌfənd/",
        "zh": "n. 退款",
        "unit": 11,
        "example": "you'll get an immediate tax refund",
        "exampleZh": "您將立即獲得退稅"
    },
    {
        "id": 20156,
        "en": "regulation",
        "kk": "/ˌɹɛɡjəˈɫeɪʃən/",
        "zh": "n. 規定",
        "unit": 11,
        "example": "the regulation of financial markets",
        "exampleZh": "金融市場的監管"
    },
    {
        "id": 20157,
        "en": "reimburse",
        "kk": "",
        "zh": "v. 補償；報銷",
        "unit": 11
    },
    {
        "id": 20158,
        "en": "reliable",
        "kk": "/ɹiˈɫaɪəbəɫ/",
        "zh": "adj. 可靠的",
        "unit": 11,
        "example": "a reliable source of information",
        "exampleZh": "可靠的資訊來源"
    },
    {
        "id": 20159,
        "en": "relocate",
        "kk": "",
        "zh": "v. 搬遷",
        "unit": 11
    },
    {
        "id": 20160,
        "en": "renew",
        "kk": "/ɹɪˈnu/",
        "zh": "v. 更新；續約",
        "unit": 11,
        "example": "a change of scenery will recharge your batteries and renew your zest for life",
        "exampleZh": "換個環境會為你充電，重燃你對生活的熱情"
    },
    {
        "id": 20161,
        "en": "renovation",
        "kk": "",
        "zh": "n. 整修",
        "unit": 11,
        "example": "this property is in need of complete renovation",
        "exampleZh": "該房產需要徹底翻新"
    },
    {
        "id": 20162,
        "en": "reputation",
        "kk": "/ˌɹɛpjəˈteɪʃən/",
        "zh": "n. 名聲",
        "unit": 11,
        "example": "his reputation was tarnished by allegations that he had taken bribes",
        "exampleZh": "他的名譽因收賄指控而受損"
    },
    {
        "id": 20163,
        "en": "require",
        "kk": "/ˌɹiˈkwaɪɝ/",
        "zh": "v. 要求；需要",
        "unit": 11,
        "example": "please indicate how many tickets you require",
        "exampleZh": "請註明您需要多少張門票"
    },
    {
        "id": 20164,
        "en": "reservation",
        "kk": "/ˌɹɛzɝˈveɪʃən/",
        "zh": "n. 預約",
        "unit": 11,
        "example": "the reservation of positions for non-Americans",
        "exampleZh": "為非美國人保留職位"
    },
    {
        "id": 20165,
        "en": "resign",
        "kk": "/ɹiˈsaɪn/",
        "zh": "v. 辭職",
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
        "zh": "n. 零售",
        "unit": 11,
        "example": "it is not yet available retail",
        "exampleZh": "尚未零售"
    },
    {
        "id": 20168,
        "en": "revenue",
        "kk": "/ˈɹɛvəˌnu/",
        "zh": "n. 營收",
        "unit": 11
    },
    {
        "id": 20169,
        "en": "revise",
        "kk": "/ɹiˈvaɪz/",
        "zh": "v. 修訂",
        "unit": 11,
        "example": "he had cause to revise his opinion a moment after expressing it",
        "exampleZh": "他在表達後不久就有理由修改自己的觀點"
    },
    {
        "id": 20170,
        "en": "salary",
        "kk": "/ˈsæɫɝi/",
        "zh": "n. 薪水",
        "unit": 11,
        "example": "What is your salary?",
        "exampleZh": "你的薪水是多少？"
    },
    {
        "id": 20171,
        "en": "schedule",
        "kk": "/ˈskɛdʒuɫ/",
        "zh": "n. 時程表",
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
        "zh": "n. 出貨；貨物",
        "unit": 11,
        "example": "logs waiting for shipment",
        "exampleZh": "等待發貨的日誌"
    },
    {
        "id": 20174,
        "en": "shortage",
        "kk": "/ˈʃɔɹtədʒ/",
        "zh": "n. 短缺",
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
        "zh": "n. 贊助者",
        "unit": 11,
        "example": "a leading sponsor of the bill",
        "exampleZh": "該法案的主要發起人"
    },
    {
        "id": 20177,
        "en": "staff",
        "kk": "/ˈstæf/",
        "zh": "n. 員工",
        "unit": 11,
        "example": "hospital staff were not to blame",
        "exampleZh": "醫院工作人員不應該受到責備"
    },
    {
        "id": 20178,
        "en": "subscription",
        "kk": "/səbsˈkɹɪpʃən/",
        "zh": "n. 訂閱",
        "unit": 11,
        "example": "take out a one-year subscription",
        "exampleZh": "訂閱一年期"
    },
    {
        "id": 20179,
        "en": "subsidiary",
        "kk": "",
        "zh": "n. 子公司",
        "unit": 11,
        "example": "the firm's Spanish subsidiary",
        "exampleZh": "該公司的西班牙子公司"
    },
    {
        "id": 20180,
        "en": "supervisor",
        "kk": "/ˈsupɝˌvaɪzɝ/",
        "zh": "n. 主管",
        "unit": 11
    },
    {
        "id": 20181,
        "en": "supplier",
        "kk": "",
        "zh": "n. 供應商",
        "unit": 11,
        "example": "every major energy supplier upped their prices",
        "exampleZh": "每個主要能源供應商都提高了價格"
    },
    {
        "id": 20182,
        "en": "surplus",
        "kk": "/ˈsɝpɫəs/",
        "zh": "n. 過剩；盈餘",
        "unit": 11,
        "example": "a trade surplus of $1.4 billion",
        "exampleZh": "貿易順差14億美元"
    },
    {
        "id": 20183,
        "en": "tentative",
        "kk": "/ˈtɛnətɪv/",
        "zh": "adj. 暫定的",
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
        "zh": "n. 交易",
        "unit": 11,
        "example": "in an ordinary commercial transaction a delivery date is essential",
        "exampleZh": "在普通商業交易中，交貨日期至關重要"
    },
    {
        "id": 20186,
        "en": "transfer",
        "kk": "/ˈtɹænsfɝ/",
        "zh": "v. 轉移；調職",
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
        "zh": "n. 營業額；人員流動",
        "unit": 11,
        "example": "a turnover approaching $4 million",
        "exampleZh": "營業額接近 400 萬美元"
    },
    {
        "id": 20189,
        "en": "upgrade",
        "kk": "/ˈəpˈɡɹeɪd/",
        "zh": "v. 升級",
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
        "zh": "n. 職缺；空房",
        "unit": 11,
        "example": "a vacancy for a shorthand typist",
        "exampleZh": "速記打字員職缺"
    },
    {
        "id": 20192,
        "en": "vendor",
        "kk": "/ˈvɛndɝ/",
        "zh": "n. 供應商；小販",
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
        "zh": "v. 驗證",
        "unit": 11,
        "example": "“Can you verify that the guns are licensed?”",
        "exampleZh": "“你能證實這些槍有許可證嗎？”"
    },
    {
        "id": 20195,
        "en": "warehouse",
        "kk": "/ˈwɛɹˌhaʊs/",
        "zh": "n. 倉庫",
        "unit": 11,
        "example": "a discount warehouse",
        "exampleZh": "折扣倉庫"
    },
    {
        "id": 20196,
        "en": "warranty",
        "kk": "/ˈwɔɹənti/",
        "zh": "n. 保固",
        "unit": 11,
        "example": "as your machine is under warranty, I suggest getting it checked",
        "exampleZh": "由於您的機器在保固期內，我建議您檢查一下"
    },
    {
        "id": 20197,
        "en": "withdraw",
        "kk": "/wɪðˈdɹɔ/",
        "zh": "v. 提領；撤回",
        "unit": 11,
        "example": "Withdraw your remarks!",
        "exampleZh": "撤回你的言論！"
    },
    {
        "id": 20198,
        "en": "workshop",
        "kk": "/ˈwɝkˌʃɑp/",
        "zh": "n. 工作坊；研討會",
        "unit": 11,
        "example": "a writers' workshop was held on July 25–27",
        "exampleZh": "7月25日至27日舉辦了作家研討會"
    },
    {
        "id": 20200,
        "en": "abandon",
        "kk": "/əˈbændən/",
        "zh": "v. 放棄",
        "unit": 12,
        "example": "she sings and sways with total abandon",
        "exampleZh": "她完全放縱地唱歌、搖擺"
    },
    {
        "id": 20201,
        "en": "abide",
        "kk": "/əˈbaɪd/",
        "zh": "v. 遵守",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20202,
        "en": "abolish",
        "kk": "/əˈbɑɫɪʃ/",
        "zh": "v. 廢除",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20203,
        "en": "abroad",
        "kk": "/əˈbɹɔd/",
        "zh": "adv. 在國外",
        "unit": 12,
        "example": "servicemen returning from abroad",
        "exampleZh": "從國外回來的軍人"
    },
    {
        "id": 20204,
        "en": "abrupt",
        "kk": "/əˈbɹəpt/",
        "zh": "adj. 突然的",
        "unit": 12,
        "example": "our round of golf came to an abrupt end on the 13th hole",
        "exampleZh": "我們的一高爾夫球在第13洞戛然而止"
    },
    {
        "id": 20205,
        "en": "absence",
        "kk": "/ˈæbsəns/",
        "zh": "n. 缺席",
        "unit": 12
    },
    {
        "id": 20206,
        "en": "absolute",
        "kk": "/ˈæbsəˌɫut/",
        "zh": "adj. 絕對的",
        "unit": 12,
        "example": "I absolutely agree.",
        "exampleZh": "我絕對同意。"
    },
    {
        "id": 20207,
        "en": "absorb",
        "kk": "/əbˈzɔɹb/",
        "zh": "v. 吸收",
        "unit": 12,
        "example": "Rugs absorb sound.",
        "exampleZh": "地毯吸收聲音。"
    },
    {
        "id": 20208,
        "en": "abstract",
        "kk": "/ˈæbˌstɹækt/",
        "zh": "adj. 抽象的",
        "unit": 12,
        "example": "applications to abstract more water from streams",
        "exampleZh": "從溪流中提取更多水的應用程式"
    },
    {
        "id": 20209,
        "en": "abundant",
        "kk": "/əˈbəndənt/",
        "zh": "adj. 豐富的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20210,
        "en": "abuse",
        "kk": "/əbˈjus/",
        "zh": "v. 濫用",
        "unit": 12,
        "example": "an abuse of public funds",
        "exampleZh": "濫用公共資金"
    },
    {
        "id": 20211,
        "en": "accelerate",
        "kk": "/ækˈsɛɫɝˌeɪt/",
        "zh": "v. 加速",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20212,
        "en": "acceptable",
        "kk": "/ækˈsɛptəbəɫ/",
        "zh": "adj. 可接受的",
        "unit": 12,
        "example": "has tried to find a solution acceptable to everyone",
        "exampleZh": "試圖找到一個大家都能接受的解決方案"
    },
    {
        "id": 20213,
        "en": "acceptance",
        "kk": "/ækˈsɛptəns/",
        "zh": "n. 接受",
        "unit": 12,
        "example": "charges involving the acceptance of bribes",
        "exampleZh": "涉及受賄的指控"
    },
    {
        "id": 20214,
        "en": "accessible",
        "kk": "/ækˈsɛsəbəɫ/",
        "zh": "adj. 易接近的",
        "unit": 12,
        "example": "he is more accessible than most tycoons",
        "exampleZh": "他比大多數大亨更容易接近"
    },
    {
        "id": 20215,
        "en": "accidental",
        "kk": "/ˌæksəˈdɛnəɫ/",
        "zh": "adj. 意外的",
        "unit": 12,
        "example": "a verdict of accidental death",
        "exampleZh": "意外死亡的判決"
    },
    {
        "id": 20216,
        "en": "acclaim",
        "kk": "",
        "zh": "v. 稱讚",
        "unit": 12,
        "example": "she has won acclaim for her commitment to democracy",
        "exampleZh": "她因對民主的承諾而贏得讚譽"
    },
    {
        "id": 20217,
        "en": "accommodate",
        "kk": "/əˈkɑməˌdeɪt/",
        "zh": "v. 容納；提供住宿",
        "unit": 12,
        "example": "any language must accommodate new concepts",
        "exampleZh": "任何語言都必須容納新概念"
    },
    {
        "id": 20218,
        "en": "accomplish",
        "kk": "/əˈkɑmpɫɪʃ/",
        "zh": "v. 完成",
        "unit": 12,
        "example": "What was accomplished?",
        "exampleZh": "完成了什麼？"
    },
    {
        "id": 20219,
        "en": "accord",
        "kk": "/əˈkɔɹd/",
        "zh": "n. 協議",
        "unit": 12,
        "example": "the government and the rebels are in accord on one point",
        "exampleZh": "政府和叛亂分子在某一點上意見一致"
    },
    {
        "id": 20220,
        "en": "account",
        "kk": "/əˈkaʊnt/",
        "zh": "n. 帳戶",
        "unit": 12,
        "example": "another agency was awarded the account",
        "exampleZh": "另一個機構獲得了該帳戶"
    },
    {
        "id": 20221,
        "en": "accountant",
        "kk": "/əˈkaʊntənt/",
        "zh": "n. 會計師",
        "unit": 12,
        "example": "Accountants love spreadsheets.",
        "exampleZh": "會計師喜歡電子表格。"
    },
    {
        "id": 20222,
        "en": "accumulate",
        "kk": "/əkˈjumjəˌɫeɪt/",
        "zh": "v. 累積",
        "unit": 12,
        "example": "her goal was to accumulate a huge fortune",
        "exampleZh": "她的目標是累積巨額財富"
    },
    {
        "id": 20223,
        "en": "accuracy",
        "kk": "/ˈækjɝəsi/",
        "zh": "n. 準確性",
        "unit": 12,
        "example": "the accuracy of radiocarbon dating",
        "exampleZh": "放射性碳定年法的準確性"
    },
    {
        "id": 20224,
        "en": "accurate",
        "kk": "/ˈækjɝət/",
        "zh": "adj. 準確的",
        "unit": 12,
        "example": "He needs accurate data.",
        "exampleZh": "他需要準確的數據。"
    },
    {
        "id": 20225,
        "en": "accuse",
        "kk": "/əkˈjuz/",
        "zh": "v. 指控",
        "unit": 12,
        "example": "He falsely accused me.",
        "exampleZh": "他誣告我。"
    },
    {
        "id": 20226,
        "en": "accustom",
        "kk": "/əˈkəstəm/",
        "zh": "v. 使習慣",
        "unit": 12,
        "example": "they tried to accustom him to their lighthearted ways",
        "exampleZh": "他們試著讓他習慣他們輕鬆愉快的方式"
    },
    {
        "id": 20227,
        "en": "achieve",
        "kk": "/əˈtʃiv/",
        "zh": "v. 達成",
        "unit": 12,
        "example": "Achieve your dreams.",
        "exampleZh": "實現你的夢想。"
    },
    {
        "id": 20228,
        "en": "achievement",
        "kk": "/əˈtʃivmənt/",
        "zh": "n. 成就",
        "unit": 12,
        "example": "assessing ability in terms of academic achievement",
        "exampleZh": "根據學業成績評估能力"
    },
    {
        "id": 20229,
        "en": "acknowledge",
        "kk": "/ækˈnɑɫɪdʒ/",
        "zh": "v. 承認",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20230,
        "en": "acquire",
        "kk": "/əˈkwaɪɝ/",
        "zh": "v. 取得；收購",
        "unit": 12,
        "example": "you must acquire the rudiments of Greek",
        "exampleZh": "你必須掌握希臘文的基礎知識"
    },
    {
        "id": 20231,
        "en": "acquisition",
        "kk": "/ˌækwəˈzɪʃən/",
        "zh": "n. 收購",
        "unit": 12,
        "example": "the acquisition of management skills",
        "exampleZh": "管理技能的獲得"
    },
    {
        "id": 20232,
        "en": "activate",
        "kk": "",
        "zh": "v. 啟動",
        "unit": 12,
        "example": "fumes from cooking are enough to activate the alarm",
        "exampleZh": "烹飪產生的煙霧足以啟動警報"
    },
    {
        "id": 20233,
        "en": "active",
        "kk": "/ˈæktɪv/",
        "zh": "adj. 活躍的",
        "unit": 12,
        "example": "I needed to change my lifestyle and become more active",
        "exampleZh": "我需要改變生活方式並變得更加活躍"
    },
    {
        "id": 20234,
        "en": "actual",
        "kk": "/ˈækʃəɫ/",
        "zh": "adj. 實際的",
        "unit": 12,
        "example": "the book could be condensed into half the space, but what of the actual content?",
        "exampleZh": "書本來可以壓縮到一半的空間，但實際內容呢？"
    },
    {
        "id": 20235,
        "en": "adapt",
        "kk": "/əˈdæpt/",
        "zh": "v. 適應",
        "unit": 12,
        "example": "a large organization can be slow to adapt to change",
        "exampleZh": "大型組織適應變化的速度可能很慢"
    },
    {
        "id": 20236,
        "en": "addict",
        "kk": "/ˈæˌdɪkt/",
        "zh": "n. 上癮者",
        "unit": 12,
        "example": "a former heroin addict",
        "exampleZh": "前海洛因癮君子"
    },
    {
        "id": 20237,
        "en": "addition",
        "kk": "/əˈdɪʃən/",
        "zh": "n. 增加",
        "unit": 12,
        "example": "you will find the coat a useful addition to your wardrobe",
        "exampleZh": "你會發現這件外套對你的衣櫃來說是一個有用的補充"
    },
    {
        "id": 20238,
        "en": "additional",
        "kk": "/əˈdɪʃənəɫ/",
        "zh": "adj. 額外的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20239,
        "en": "address",
        "kk": "/ˈæˌdɹɛs/",
        "zh": "v. 處理；對...演說",
        "unit": 12,
        "example": "ensure that your weight is evenly spread when you address the ball",
        "exampleZh": "確保擊球時體重平均分佈"
    },
    {
        "id": 20240,
        "en": "adequate",
        "kk": "/ˈædəˌkweɪt/",
        "zh": "adj. 充足的",
        "unit": 12,
        "example": "this office is perfectly adequate for my needs",
        "exampleZh": "這個辦公室完全可以滿足我的需要"
    },
    {
        "id": 20241,
        "en": "adhere",
        "kk": "",
        "zh": "v. 堅持；黏著",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20242,
        "en": "adjacent",
        "kk": "",
        "zh": "adj. 鄰近的",
        "unit": 12,
        "example": "adjacent rooms",
        "exampleZh": "相鄰的房間"
    },
    {
        "id": 20243,
        "en": "adjust",
        "kk": "/əˈdʒəst/",
        "zh": "v. 調整",
        "unit": 12,
        "example": "she must be allowed to grieve and to adjust in her own way",
        "exampleZh": "必須允許她悲傷並以自己的方式進行調整"
    },
    {
        "id": 20244,
        "en": "administer",
        "kk": "/ədˈmɪnəstɝ/",
        "zh": "v. 管理",
        "unit": 12,
        "example": "the chief justice will administer the oath of office",
        "exampleZh": "首席大法官將宣誓就職"
    },
    {
        "id": 20245,
        "en": "administration",
        "kk": "/ædˌmɪnɪˈstɹeɪʃən/",
        "zh": "n. 管理；行政",
        "unit": 12,
        "example": "the inhabitants of the island voted to remain under French administration",
        "exampleZh": "該島居民投票決定繼續由法國管理"
    },
    {
        "id": 20246,
        "en": "administrative",
        "kk": "/ədˈmɪnəˌstɹeɪtɪv/",
        "zh": "adj. 行政的",
        "unit": 12,
        "example": "administrative staff",
        "exampleZh": "行政人員"
    },
    {
        "id": 20247,
        "en": "admire",
        "kk": "/ædˈmaɪɹ/",
        "zh": "v. 欽佩",
        "unit": 12,
        "example": "Yanni admires Skura.",
        "exampleZh": "雅尼欣賞斯庫拉。"
    },
    {
        "id": 20248,
        "en": "admission",
        "kk": "/ædˈmɪʃən/",
        "zh": "n. 入場費；承認",
        "unit": 12,
        "example": "the country's admission to the UN",
        "exampleZh": "該國加入聯合國"
    },
    {
        "id": 20249,
        "en": "admit",
        "kk": "/ədˈmɪt/",
        "zh": "v. 承認",
        "unit": 12,
        "example": "the need to inform him was too urgent to admit of further delay",
        "exampleZh": "通知他的必要性太緊急，不能再拖延了"
    },
    {
        "id": 20250,
        "en": "adopt",
        "kk": "/əˈdɑpt/",
        "zh": "v. 採納",
        "unit": 12,
        "example": "the committee voted 5–1 to adopt the proposal",
        "exampleZh": "委員會以 5 比 1 的投票結果通過了該提案"
    },
    {
        "id": 20251,
        "en": "advance",
        "kk": "/ədˈvæns/",
        "zh": "v. 前進",
        "unit": 12,
        "example": "the author was paid a $250,000 advance",
        "exampleZh": "作者預付了 25 萬美元"
    },
    {
        "id": 20252,
        "en": "advanced",
        "kk": "/ədˈvænst/",
        "zh": "adj. 先進的",
        "unit": 12,
        "example": "his advanced views made him unpopular",
        "exampleZh": "他的先進觀點使他不受歡迎"
    },
    {
        "id": 20253,
        "en": "advantage",
        "kk": "/ædˈvæntɪdʒ/",
        "zh": "n. 優勢",
        "unit": 12,
        "example": "Tom has the advantage.",
        "exampleZh": "湯姆有優勢。"
    },
    {
        "id": 20254,
        "en": "advantageous",
        "kk": "",
        "zh": "adj. 有利的",
        "unit": 12,
        "example": "the scheme is advantageous to your company",
        "exampleZh": "該計劃對您的公司有利"
    },
    {
        "id": 20255,
        "en": "advent",
        "kk": "",
        "zh": "n. 出現",
        "unit": 12,
        "example": "the advent of television",
        "exampleZh": "電視的出現"
    },
    {
        "id": 20256,
        "en": "adventure",
        "kk": "/ædˈvɛntʃɝ/",
        "zh": "n. 冒險",
        "unit": 12,
        "example": "she traveled the world in search of adventure",
        "exampleZh": "她環遊世界尋找冒險"
    },
    {
        "id": 20257,
        "en": "adverse",
        "kk": "",
        "zh": "adj. 不利的",
        "unit": 12,
        "example": "taxes are having an adverse effect on production",
        "exampleZh": "稅收對生產產生不利影響"
    },
    {
        "id": 20258,
        "en": "advertise",
        "kk": "/ˈædvɝˌtaɪz/",
        "zh": "v. 登廣告",
        "unit": 12,
        "example": "Meryl coughed briefly to advertise her presence",
        "exampleZh": "梅莉爾短暫地咳嗽了一下以表明她的存在"
    },
    {
        "id": 20259,
        "en": "advertisement",
        "kk": "/ˌædvɝˈtaɪzmənt/",
        "zh": "n. 廣告",
        "unit": 12,
        "example": "we received only two replies to our advertisement",
        "exampleZh": "我們只收到了兩份對廣告的回复"
    },
    {
        "id": 20260,
        "en": "advice",
        "kk": "/ædˈvaɪs/",
        "zh": "n. 建議",
        "unit": 12,
        "example": "Never give advice.",
        "exampleZh": "永遠不要給出建議。"
    },
    {
        "id": 20261,
        "en": "advise",
        "kk": "/ædˈvaɪz/",
        "zh": "v. 建議",
        "unit": 12,
        "example": "we advise against sending cash by mail",
        "exampleZh": "我們建議不要以郵寄方式寄送現金"
    },
    {
        "id": 20262,
        "en": "adviser",
        "kk": "/ædˈvaɪzɝ/",
        "zh": "n. 顧問",
        "unit": 12,
        "example": "he started as a legal adviser to the company",
        "exampleZh": "他最初擔任該公司的法律顧問"
    },
    {
        "id": 20263,
        "en": "advocate",
        "kk": "/ˈædvəˌkeɪt/",
        "zh": "v. 提倡",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20264,
        "en": "affair",
        "kk": "/əˈfɛɹ/",
        "zh": "n. 事務",
        "unit": 12,
        "example": "I wanted the funeral to be a family affair",
        "exampleZh": "我希望葬禮成為家庭事務"
    },
    {
        "id": 20265,
        "en": "affect",
        "kk": "/əˈfɛkt/",
        "zh": "v. 影響",
        "unit": 12,
        "example": "the dampness began to affect my health",
        "exampleZh": "濕氣開始影響我的健康"
    },
    {
        "id": 20266,
        "en": "affiliate",
        "kk": "",
        "zh": "v. 附屬",
        "unit": 12,
        "example": "the membership of the National Writers Union voted to affiliate with the United Auto Workers",
        "exampleZh": "全國作家聯盟的成員投票加入汽車工人聯合會"
    },
    {
        "id": 20267,
        "en": "affirm",
        "kk": "/əˈfɝm/",
        "zh": "v. 確認",
        "unit": 12,
        "example": "there are five common ways parents fail to affirm their children",
        "exampleZh": "父母未能肯定孩子的常見方式有五種"
    },
    {
        "id": 20268,
        "en": "afford",
        "kk": "/əˈfɔɹd/",
        "zh": "v. 負擔得起",
        "unit": 12,
        "example": "it was taking up more time than he could afford",
        "exampleZh": "這花費的時間超出了他的承受能力"
    },
    {
        "id": 20269,
        "en": "affordable",
        "kk": "",
        "zh": "adj. 負擔得起的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20270,
        "en": "agency",
        "kk": "/ˈeɪdʒənsi/",
        "zh": "n. 代理機構",
        "unit": 12,
        "example": "an advertising agency",
        "exampleZh": "一家廣告公司"
    },
    {
        "id": 20271,
        "en": "agenda",
        "kk": "/əˈdʒɛndə/",
        "zh": "n. 議程",
        "unit": 12,
        "example": "he vowed to put jobs at the top of his agenda",
        "exampleZh": "他發誓要把就業放在第一位"
    },
    {
        "id": 20272,
        "en": "agent",
        "kk": "/ˈeɪdʒənt/",
        "zh": "n. 代理人",
        "unit": 12,
        "example": "his agent was able to negotiate a long-term contract",
        "exampleZh": "他的經紀人能夠談判一份長期合約"
    },
    {
        "id": 20273,
        "en": "aggravate",
        "kk": "",
        "zh": "v. 惡化",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20274,
        "en": "aggressive",
        "kk": "/əˈɡɹɛsɪv/",
        "zh": "adj. 積極的",
        "unit": 12,
        "example": "we needed more growth to pursue our aggressive acquisition strategy",
        "exampleZh": "我們需要更多的成長來實施我們積極的收購策略"
    },
    {
        "id": 20275,
        "en": "agreement",
        "kk": "/əˈɡɹimənt/",
        "zh": "n. 協議；合約",
        "unit": 12,
        "example": "the two officers nodded in agreement",
        "exampleZh": "兩位軍官點頭同意"
    },
    {
        "id": 20276,
        "en": "agriculture",
        "kk": "/ˈæɡɹɪˌkəɫtʃɝ/",
        "zh": "n. 農業",
        "unit": 12,
        "example": "fungicide resistance is a serious problem facing modern agriculture",
        "exampleZh": "殺菌劑抗性是現代農業面臨的嚴重問題"
    },
    {
        "id": 20277,
        "en": "aid",
        "kk": "/ˈeɪd/",
        "zh": "n. 援助",
        "unit": 12,
        "example": "700,000 tons of food aid",
        "exampleZh": "70萬噸糧食援助"
    },
    {
        "id": 20278,
        "en": "airline",
        "kk": "/ˈɛɹˌɫaɪn/",
        "zh": "n. 航空公司",
        "unit": 12
    },
    {
        "id": 20279,
        "en": "aisle",
        "kk": "/ˈaɪəɫ/",
        "zh": "n. 走道",
        "unit": 12,
        "example": "the tiled roof over the south aisle",
        "exampleZh": "南過道上的瓦屋頂"
    },
    {
        "id": 20280,
        "en": "alert",
        "kk": "/əˈɫɝt/",
        "zh": "adj. 警覺的",
        "unit": 12,
        "example": "an alert sounded and all the fighters took off",
        "exampleZh": "警報響起，所有戰士起飛"
    },
    {
        "id": 20281,
        "en": "alienate",
        "kk": "/ˈeɪɫjəˌneɪt/",
        "zh": "v. 使疏遠",
        "unit": 12,
        "example": "the association does not wish to alienate its members",
        "exampleZh": "協會不希望疏遠其成員"
    },
    {
        "id": 20282,
        "en": "align",
        "kk": "",
        "zh": "v. 使結盟",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20283,
        "en": "alike",
        "kk": "/əˈɫaɪk/",
        "zh": "adj. 相似的",
        "unit": 12,
        "example": "the brothers were very much alike",
        "exampleZh": "兄弟倆非常相似"
    },
    {
        "id": 20284,
        "en": "allege",
        "kk": "",
        "zh": "v. 宣稱",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20285,
        "en": "alleviate",
        "kk": "",
        "zh": "v. 減輕",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20286,
        "en": "allocate",
        "kk": "/ˈæɫəˌkeɪt/",
        "zh": "v. 分配；撥出",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20287,
        "en": "allow",
        "kk": "/əˈɫaʊ/",
        "zh": "v. 允許",
        "unit": 12,
        "example": "a plan to allow Sunday shopping",
        "exampleZh": "允許週日購物的計劃"
    },
    {
        "id": 20288,
        "en": "allowance",
        "kk": "/əˈɫaʊəns/",
        "zh": "n. 津貼",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20289,
        "en": "allude",
        "kk": "",
        "zh": "v. 暗示",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20290,
        "en": "ally",
        "kk": "/ˈæɫaɪ/",
        "zh": "n. 盟友",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20291,
        "en": "alter",
        "kk": "/ˈɔɫtɝ/",
        "zh": "v. 改變",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20292,
        "en": "alternate",
        "kk": "/ˈɔɫtɝˌneɪt/",
        "zh": "v. 交替",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20293,
        "en": "alternative",
        "kk": "/ɔɫˈtɝnətɪv/",
        "zh": "n. 替代方案",
        "unit": 12
    },
    {
        "id": 20294,
        "en": "altitude",
        "kk": "/ˈæɫtəˌtud/",
        "zh": "n. 高度",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20295,
        "en": "amateur",
        "kk": "/ˈæməˌtɝ/",
        "zh": "n. 業餘愛好者",
        "unit": 12,
        "example": "Are you an amateur?",
        "exampleZh": "你是業餘愛好者嗎？"
    },
    {
        "id": 20296,
        "en": "amaze",
        "kk": "/əˈmeɪz/",
        "zh": "v. 使驚訝",
        "unit": 12,
        "example": "People are amazed.",
        "exampleZh": "人們很驚訝。"
    },
    {
        "id": 20297,
        "en": "ambassador",
        "kk": "/æmˈbæsədɝ/",
        "zh": "n. 大使",
        "unit": 12,
        "example": "Ziri is an ambassador.",
        "exampleZh": "齊裡是一名大使。"
    },
    {
        "id": 20298,
        "en": "ambiguity",
        "kk": "/ˌæmbɪɡˈjuəti/",
        "zh": "n. 模稜兩可",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20299,
        "en": "ambiguous",
        "kk": "/æmˈbɪɡjuəs/",
        "zh": "adj. 模糊不清的",
        "unit": 12
    },
    {
        "id": 20300,
        "en": "ambition",
        "kk": "/æmˈbɪʃən/",
        "zh": "n. 抱負",
        "unit": 12,
        "example": "Tom had no ambition.",
        "exampleZh": "湯姆沒有野心。"
    },
    {
        "id": 20301,
        "en": "ambitious",
        "kk": "/æmˈbɪʃəs/",
        "zh": "adj. 有野心的",
        "unit": 12,
        "example": "Are you ambitious?",
        "exampleZh": "你有野心嗎？"
    },
    {
        "id": 20302,
        "en": "amend",
        "kk": "",
        "zh": "v. 修改",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20303,
        "en": "amendment",
        "kk": "",
        "zh": "n. 修正；修訂",
        "unit": 12,
        "example": "an amendment to existing bail laws",
        "exampleZh": "現行保釋法的修正案"
    },
    {
        "id": 20304,
        "en": "amount",
        "kk": "/əˈmaʊnt/",
        "zh": "n. 數量",
        "unit": 12,
        "example": "they have spent a colossal amount rebuilding the stadium",
        "exampleZh": "他們花費巨資重建體育場"
    },
    {
        "id": 20305,
        "en": "ample",
        "kk": "/ˈæmpəɫ/",
        "zh": "adj. 充足的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20306,
        "en": "amplify",
        "kk": "/ˈæmpɫəˌfaɪ/",
        "zh": "v. 放大",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20307,
        "en": "amuse",
        "kk": "/əmˈjuz/",
        "zh": "v. 使歡樂",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20308,
        "en": "analogy",
        "kk": "/əˈnæɫədʒi/",
        "zh": "n. 類比",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20309,
        "en": "analysis",
        "kk": "/əˈnælɪsɪs/",
        "zh": "n. 分析",
        "unit": 12,
        "example": "We want your analysis.",
        "exampleZh": "我們需要您的分析。"
    },
    {
        "id": 20310,
        "en": "analyze",
        "kk": "/ˈænəˌɫaɪz/",
        "zh": "v. 分析",
        "unit": 12,
        "example": "Ziri analyzed the video.",
        "exampleZh": "齊里分析了影片。"
    },
    {
        "id": 20311,
        "en": "ancestor",
        "kk": "/ˈænˌsɛstɝ/",
        "zh": "n. 祖先",
        "unit": 12,
        "example": "My ancestor told it.",
        "exampleZh": "我的祖先告訴我。"
    },
    {
        "id": 20312,
        "en": "anchor",
        "kk": "/ˈæŋkɝ/",
        "zh": "n. 錨；主播",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20313,
        "en": "ancient",
        "kk": "/ˈeɪnʃənt/",
        "zh": "adj. 古代的",
        "unit": 12,
        "example": "ancient forests",
        "exampleZh": "古老的森林"
    },
    {
        "id": 20314,
        "en": "anecdote",
        "kk": "/ˈænəkˌdoʊt/",
        "zh": "n. 軼事",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20315,
        "en": "angle",
        "kk": "/ˈæŋɡəɫ/",
        "zh": "n. 角度",
        "unit": 12,
        "example": "A triangle has three angles.",
        "exampleZh": "三角形有三個角。"
    },
    {
        "id": 20316,
        "en": "angry",
        "kk": "/ˈæŋɡɹi/",
        "zh": "adj. 生氣的",
        "unit": 12,
        "example": "I'm angry that she didn't call me",
        "exampleZh": "我很生氣她沒有打電話給我"
    },
    {
        "id": 20317,
        "en": "anguish",
        "kk": "",
        "zh": "n. 極度痛苦",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20318,
        "en": "animate",
        "kk": "/ˈænəˌmeɪt/",
        "zh": "v. 賦予生命",
        "unit": 12
    },
    {
        "id": 20319,
        "en": "anniversary",
        "kk": "/ˌænəˈvɝsɝi/",
        "zh": "n. 週年紀念日",
        "unit": 12,
        "example": "It's their anniversary.",
        "exampleZh": "這是他們的周年紀念日。"
    },
    {
        "id": 20320,
        "en": "announce",
        "kk": "/əˈnaʊns/",
        "zh": "v. 宣佈",
        "unit": 12,
        "example": "Thomas is announced.",
        "exampleZh": "托馬斯宣布。"
    },
    {
        "id": 20321,
        "en": "announcement",
        "kk": "/əˈnaʊnsmənt/",
        "zh": "n. 公告",
        "unit": 12,
        "example": "Tom has an announcement.",
        "exampleZh": "湯姆有一個公告。"
    },
    {
        "id": 20322,
        "en": "annoy",
        "kk": "/əˈnɔɪ/",
        "zh": "v. 惹惱",
        "unit": 12,
        "example": "Politics annoys me.",
        "exampleZh": "政治讓我煩惱。"
    },
    {
        "id": 20323,
        "en": "annual",
        "kk": "/ˈænjuəɫ/",
        "zh": "adj. 每年的",
        "unit": 12,
        "example": "the union's annual conference",
        "exampleZh": "工會年會"
    },
    {
        "id": 20324,
        "en": "anomalous",
        "kk": "",
        "zh": "adj. 異常的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20325,
        "en": "anonymous",
        "kk": "/əˈnɑnəməs/",
        "zh": "adj. 匿名的",
        "unit": 12
    },
    {
        "id": 20326,
        "en": "answer",
        "kk": "/ˈænsɝ/",
        "zh": "v. 回答",
        "unit": 12,
        "example": "I didn't answer him",
        "exampleZh": "我沒有回答他"
    },
    {
        "id": 20327,
        "en": "antagonism",
        "kk": "",
        "zh": "n. 敵意",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20328,
        "en": "anticipate",
        "kk": "/ænˈtɪsəˌpeɪt/",
        "zh": "v. 預期",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20329,
        "en": "anticipation",
        "kk": "/ænˌtɪsəˈpeɪʃən/",
        "zh": "n. 預期",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20330,
        "en": "antique",
        "kk": "/ænˈtik/",
        "zh": "n. 古董",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20331,
        "en": "anxiety",
        "kk": "/æŋˈzaɪəti/",
        "zh": "n. 焦慮",
        "unit": 12,
        "example": "Ziri felt anxiety.",
        "exampleZh": "齊裡感到焦慮。"
    },
    {
        "id": 20332,
        "en": "anxious",
        "kk": "/ˈæŋkʃəs/",
        "zh": "adj. 焦慮的",
        "unit": 12,
        "example": "Tom anxiously waited.",
        "exampleZh": "湯姆焦急地等待著。"
    },
    {
        "id": 20333,
        "en": "apologize",
        "kk": "/əˈpɑɫəˌdʒaɪz/",
        "zh": "v. 道歉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20334,
        "en": "apology",
        "kk": "/əˈpɑɫəˌdʒi/",
        "zh": "n. 道歉",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20335,
        "en": "appalling",
        "kk": "",
        "zh": "adj. 令人震驚的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20336,
        "en": "apparatus",
        "kk": "",
        "zh": "n. 設備",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20337,
        "en": "apparent",
        "kk": "/əˈpɛɹənt/",
        "zh": "adj. 明顯的",
        "unit": 12,
        "example": "Nothing is apparent.",
        "exampleZh": "沒有什麼是顯而易見的。"
    },
    {
        "id": 20338,
        "en": "appeal",
        "kk": "/əˈpiɫ/",
        "zh": "v. 呼籲；吸引",
        "unit": 12,
        "example": "My lawyer appealed.",
        "exampleZh": "我的律師提出上訴。"
    },
    {
        "id": 20339,
        "en": "appealing",
        "kk": "",
        "zh": "adj. 吸引人的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20340,
        "en": "appear",
        "kk": "/əˈpɪɹ/",
        "zh": "v. 出現",
        "unit": 12,
        "example": "the paperback edition didn't appear for another two years",
        "exampleZh": "平裝本又兩年沒有出現"
    },
    {
        "id": 20341,
        "en": "appearance",
        "kk": "/əˈpɪɹəns/",
        "zh": "n. 外表",
        "unit": 12
    },
    {
        "id": 20342,
        "en": "appendix",
        "kk": "",
        "zh": "n. 附錄",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20343,
        "en": "appetite",
        "kk": "/ˈæpəˌtaɪt/",
        "zh": "n. 胃口",
        "unit": 12
    },
    {
        "id": 20344,
        "en": "applaud",
        "kk": "/əˈpɫɔd/",
        "zh": "v. 鼓掌",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20345,
        "en": "appliance",
        "kk": "/əˈpɫaɪəns/",
        "zh": "n. 家電",
        "unit": 12,
        "example": "I'm appliance shopping.",
        "exampleZh": "我是買電器的"
    },
    {
        "id": 20346,
        "en": "applicable",
        "kk": "/ˈæpɫəkəbəɫ/",
        "zh": "adj. 適用的",
        "unit": 12
    },
    {
        "id": 20347,
        "en": "applicant",
        "kk": "/ˈæpɫɪkənt/",
        "zh": "n. 申請人",
        "unit": 12,
        "example": "a job applicant",
        "exampleZh": "求職者"
    },
    {
        "id": 20348,
        "en": "application",
        "kk": "/ˌæpɫəˈkeɪʃən/",
        "zh": "n. 申請",
        "unit": 12,
        "example": "I like this application.",
        "exampleZh": "我喜歡這個應用程式。"
    },
    {
        "id": 20349,
        "en": "apply",
        "kk": "/əˈpɫaɪ/",
        "zh": "v. 申請",
        "unit": 12,
        "example": "the oil industry has failed to apply appropriate standards of care",
        "exampleZh": "石油工業未能採用適當的護理標準"
    },
    {
        "id": 20350,
        "en": "appoint",
        "kk": "/əˈpɔɪnt/",
        "zh": "v. 任命",
        "unit": 12,
        "example": "Who appointed him?",
        "exampleZh": "誰任命他的？"
    },
    {
        "id": 20351,
        "en": "appointment",
        "kk": "/əˈpɔɪntmənt/",
        "zh": "n. 約會；任命",
        "unit": 12,
        "example": "she took up an appointment as head of communications",
        "exampleZh": "她被任命為通訊主管"
    },
    {
        "id": 20352,
        "en": "appraisal",
        "kk": "",
        "zh": "n. 評估；考核",
        "unit": 12,
        "example": "treatment begins with a thorough appraisal of the patient's condition",
        "exampleZh": "治療始於對患者病情的徹底評估"
    },
    {
        "id": 20353,
        "en": "appraise",
        "kk": "",
        "zh": "v. 評估",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20354,
        "en": "appreciate",
        "kk": "/əˈpɹiʃiˌeɪt/",
        "zh": "v. 欣賞；感激",
        "unit": 12,
        "example": "We appreciate them.",
        "exampleZh": "我們很感激他們。"
    },
    {
        "id": 20355,
        "en": "appreciation",
        "kk": "/əˌpɹiʃiˈeɪʃən/",
        "zh": "n. 感謝",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20356,
        "en": "apprehend",
        "kk": "",
        "zh": "v. 逮捕",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20357,
        "en": "apprentice",
        "kk": "/əˈpɹɛntəs/",
        "zh": "n. 學徒",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20358,
        "en": "approach",
        "kk": "/əˈpɹoʊtʃ/",
        "zh": "v. 接近",
        "unit": 12,
        "example": "Winter approached.",
        "exampleZh": "冬天將近了。"
    },
    {
        "id": 20359,
        "en": "appropriate",
        "kk": "/əˈpɹoʊpɹiˌeɪt/",
        "zh": "adj. 適當的",
        "unit": 12,
        "example": "That is appropriate.",
        "exampleZh": "那是合適的。"
    },
    {
        "id": 20360,
        "en": "approval",
        "kk": "/əˈpɹuvəɫ/",
        "zh": "n. 批准",
        "unit": 12,
        "example": "the road plans have been given approval",
        "exampleZh": "道路計劃已獲得批准"
    },
    {
        "id": 20361,
        "en": "approve",
        "kk": "/əˈpɹuv/",
        "zh": "v. 批准",
        "unit": 12,
        "example": "I completely approve!",
        "exampleZh": "我完全贊同！"
    },
    {
        "id": 20362,
        "en": "approximate",
        "kk": "/əˈpɹɑksəˌmeɪt/",
        "zh": "adj. 大約的",
        "unit": 12
    },
    {
        "id": 20363,
        "en": "aptitude",
        "kk": "/ˈæptəˌtud/",
        "zh": "n. 天資",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20364,
        "en": "arbitrary",
        "kk": "",
        "zh": "adj. 任意的",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20365,
        "en": "architect",
        "kk": "/ˈɑɹkəˌtɛkt/",
        "zh": "n. 建築師",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20366,
        "en": "architecture",
        "kk": "/ˈɑɹkəˌtɛktʃɝ/",
        "zh": "n. 建築",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20367,
        "en": "archive",
        "kk": "",
        "zh": "n. 檔案",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20368,
        "en": "area",
        "kk": "/ˈɛɹiə/",
        "zh": "n. 區域",
        "unit": 12,
        "example": "people living in the area are at risk",
        "exampleZh": "居住在該地區的人們處於危險之中"
    },
    {
        "id": 20369,
        "en": "argue",
        "kk": "/ˈɑɹɡju/",
        "zh": "v. 爭論",
        "unit": 12,
        "example": "don't argue with me",
        "exampleZh": "別跟我爭論"
    },
    {
        "id": 20370,
        "en": "argument",
        "kk": "/ˈɑɹɡjəmənt/",
        "zh": "n. 爭論",
        "unit": 12
    },
    {
        "id": 20371,
        "en": "arise",
        "kk": "/ɝˈaɪz/",
        "zh": "v. 產生",
        "unit": 12,
        "example": "What problems can arise?",
        "exampleZh": "可能會出現什麼問題？"
    },
    {
        "id": 20372,
        "en": "arm",
        "kk": "/ˈɑɹm/",
        "zh": "n. 手臂；武器",
        "unit": 12,
        "example": "as they walked he offered her his arm",
        "exampleZh": "當他們走路時，他向她伸出了手臂"
    },
    {
        "id": 20373,
        "en": "arouse",
        "kk": "/ɝˈaʊz/",
        "zh": "v. 喚醒",
        "unit": 12,
        "example": "You arouse my jealousy.",
        "exampleZh": "你引起了我的嫉妒。"
    },
    {
        "id": 20374,
        "en": "arrange",
        "kk": "/ɝˈeɪndʒ/",
        "zh": "v. 安排",
        "unit": 12,
        "example": "they hoped to arrange a meeting",
        "exampleZh": "他們希望安排一次會面"
    },
    {
        "id": 20375,
        "en": "arrangement",
        "kk": "/ɝˈeɪndʒmənt/",
        "zh": "n. 安排",
        "unit": 12
    },
    {
        "id": 20376,
        "en": "array",
        "kk": "",
        "zh": "n. 一系列",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20377,
        "en": "arrest",
        "kk": "/ɝˈɛst/",
        "zh": "v. 逮捕",
        "unit": 12,
        "example": "they placed her under arrest",
        "exampleZh": "他們逮捕了她"
    },
    {
        "id": 20378,
        "en": "arrival",
        "kk": "/ɝˈaɪvəɫ/",
        "zh": "n. 到達",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20379,
        "en": "arrive",
        "kk": "/ɝˈaɪv/",
        "zh": "v. 到達",
        "unit": 12,
        "example": "Firefighters arrived.",
        "exampleZh": "消防隊員趕到了。"
    },
    {
        "id": 20380,
        "en": "arrogant",
        "kk": "/ˈɛɹəɡənt/",
        "zh": "adj. 傲慢的",
        "unit": 12
    },
    {
        "id": 20381,
        "en": "article",
        "kk": "/ˈɑɹtəkəɫ/",
        "zh": "n. 文章；物品",
        "unit": 12,
        "example": "Reread the article.",
        "exampleZh": "重讀這篇文章。"
    },
    {
        "id": 20382,
        "en": "artificial",
        "kk": "/ˌɑɹtəˈfɪʃəɫ/",
        "zh": "adj. 人造的",
        "unit": 12,
        "example": "Earth is artificial.",
        "exampleZh": "地球是人造的。"
    },
    {
        "id": 20383,
        "en": "artisan",
        "kk": "",
        "zh": "n. 工匠",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20384,
        "en": "artist",
        "kk": "/ˈɑɹtəst/",
        "zh": "n. 藝術家",
        "unit": 12
    },
    {
        "id": 20385,
        "en": "ascertain",
        "kk": "",
        "zh": "v. 查明",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20386,
        "en": "aspect",
        "kk": "/ˈæsˌpɛkt/",
        "zh": "n. 方面",
        "unit": 12,
        "example": "There are other aspects.",
        "exampleZh": "還有其他方面。"
    },
    {
        "id": 20387,
        "en": "aspire",
        "kk": "",
        "zh": "v. 渴望",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20388,
        "en": "assemble",
        "kk": "/əˈsɛmbəɫ/",
        "zh": "v. 組裝；集合",
        "unit": 12,
        "example": "the males assemble and hang by their front legs within a yard or two of the female",
        "exampleZh": "雄性聚集在一起，用前腿懸掛在距離雌性一兩碼的地方"
    },
    {
        "id": 20389,
        "en": "assembly",
        "kk": "/əˈsɛmbɫi/",
        "zh": "n. 集會；組裝",
        "unit": 12,
        "example": "Some assembly required.",
        "exampleZh": "需要一些組裝。"
    },
    {
        "id": 20390,
        "en": "assert",
        "kk": "/əˈsɝt/",
        "zh": "v. 斷言",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20391,
        "en": "assess",
        "kk": "/əˈsɛs/",
        "zh": "v. 評估",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20392,
        "en": "assessment",
        "kk": "/əˈsɛsmənt/",
        "zh": "n. 評估",
        "unit": 12,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20393,
        "en": "asset",
        "kk": "/ˈæˌsɛt/",
        "zh": "n. 資產",
        "unit": 12,
        "example": "debiting the asset account",
        "exampleZh": "借記資產帳戶"
    },
    {
        "id": 20394,
        "en": "assign",
        "kk": "/əˈsaɪn/",
        "zh": "v. 分配",
        "unit": 12,
        "example": "They assigned you a name.",
        "exampleZh": "他們給你取了一個名字。"
    },
    {
        "id": 20395,
        "en": "assignment",
        "kk": "/əˈsaɪnmənt/",
        "zh": "n. 任務",
        "unit": 13,
        "example": "Yanni had an assignment.",
        "exampleZh": "雅尼有一個任務。"
    },
    {
        "id": 20396,
        "en": "assimilate",
        "kk": "",
        "zh": "v. 吸收",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20397,
        "en": "assist",
        "kk": "/əˈsɪst/",
        "zh": "v. 協助",
        "unit": 13,
        "example": "Tom assisted Mary.",
        "exampleZh": "湯姆協助瑪莉。"
    },
    {
        "id": 20398,
        "en": "assistance",
        "kk": "/əˈsɪstəns/",
        "zh": "n. 協助",
        "unit": 13,
        "example": "We need assistance.",
        "exampleZh": "我們需要幫助。"
    },
    {
        "id": 20399,
        "en": "assistant",
        "kk": "/əˈsɪstənt/",
        "zh": "n. 助手",
        "unit": 13
    },
    {
        "id": 20400,
        "en": "associate",
        "kk": "/əˈsoʊsiˌeɪt/",
        "zh": "v. 關聯",
        "unit": 13,
        "example": "I associate it with this.",
        "exampleZh": "我把它與此連結起來。"
    },
    {
        "id": 20401,
        "en": "association",
        "kk": "/əˌsoʊsiˈeɪʃən/",
        "zh": "n. 協會",
        "unit": 13,
        "example": "Do you know that association?",
        "exampleZh": "你知道那個協會嗎？"
    },
    {
        "id": 20402,
        "en": "assortment",
        "kk": "",
        "zh": "n. 各式各樣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20403,
        "en": "assume",
        "kk": "/əˈsum/",
        "zh": "v. 假設",
        "unit": 13,
        "example": "He assumes everything.",
        "exampleZh": "他承擔了一切。"
    },
    {
        "id": 20404,
        "en": "assumption",
        "kk": "/əˈsəmpʃən/",
        "zh": "n. 假設",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20405,
        "en": "assure",
        "kk": "/əˈʃʊɹ/",
        "zh": "v. 保證",
        "unit": 13,
        "example": "You can rest assured.",
        "exampleZh": "您可以放心。"
    },
    {
        "id": 20406,
        "en": "astonish",
        "kk": "/əˈstɑnɪʃ/",
        "zh": "v. 使驚訝",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20407,
        "en": "astound",
        "kk": "",
        "zh": "v. 使震驚",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20408,
        "en": "attach",
        "kk": "/əˈtætʃ/",
        "zh": "v. 附上；附加",
        "unit": 13,
        "example": "he doesn't attach too much importance to radical ideas",
        "exampleZh": "他不太重視激進的想法"
    },
    {
        "id": 20409,
        "en": "attachment",
        "kk": "/əˈtætʃmənt/",
        "zh": "n. 附件",
        "unit": 13,
        "example": "We avoid attachment.",
        "exampleZh": "我們避免執著。"
    },
    {
        "id": 20410,
        "en": "attack",
        "kk": "/əˈtæk/",
        "zh": "v. 攻擊",
        "unit": 13,
        "example": "an attack on inflation",
        "exampleZh": "通貨膨脹的攻擊"
    },
    {
        "id": 20411,
        "en": "attain",
        "kk": "/əˈteɪn/",
        "zh": "v. 達到",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20412,
        "en": "attempt",
        "kk": "/əˈtɛmpt/",
        "zh": "v. 嘗試",
        "unit": 13,
        "example": "The attempt failed.",
        "exampleZh": "嘗試失敗了。"
    },
    {
        "id": 20413,
        "en": "attend",
        "kk": "/əˈtɛnd/",
        "zh": "v. 出席",
        "unit": 13,
        "example": "the severely wounded had two medics to attend to their wounds",
        "exampleZh": "重傷者有兩名醫護人員來處理他們的傷口"
    },
    {
        "id": 20414,
        "en": "attendance",
        "kk": "/əˈtɛndəns/",
        "zh": "n. 出席率",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20415,
        "en": "attendee",
        "kk": "",
        "zh": "n. 出席者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20416,
        "en": "attention",
        "kk": "/əˈtɛnʃən/",
        "zh": "n. 注意",
        "unit": 13
    },
    {
        "id": 20417,
        "en": "attentive",
        "kk": "",
        "zh": "adj. 專心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20418,
        "en": "attract",
        "kk": "/əˈtɹækt/",
        "zh": "v. 吸引",
        "unit": 13,
        "example": "Food attracts dogs.",
        "exampleZh": "食物會吸引狗。"
    },
    {
        "id": 20419,
        "en": "attraction",
        "kk": "/əˈtɹækʃən/",
        "zh": "n. 吸引力",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20420,
        "en": "attractive",
        "kk": "/əˈtɹæktɪv/",
        "zh": "adj. 吸引人的",
        "unit": 13,
        "example": "You are attractive.",
        "exampleZh": "你很有吸引力。"
    },
    {
        "id": 20421,
        "en": "attribute",
        "kk": "",
        "zh": "v. 歸因於",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20422,
        "en": "auction",
        "kk": "/ˈɑkʃən/",
        "zh": "n. 拍賣",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20423,
        "en": "audience",
        "kk": "/ˈɑdiəns/",
        "zh": "n. 觀眾",
        "unit": 13,
        "example": "The audience gasped.",
        "exampleZh": "觀眾倒吸一口冷氣。"
    },
    {
        "id": 20424,
        "en": "audit",
        "kk": "",
        "zh": "n. 審計；v. 查帳",
        "unit": 13,
        "example": "a complete audit of flora and fauna at the site",
        "exampleZh": "對現場動植物進行全面審核"
    },
    {
        "id": 20425,
        "en": "auditor",
        "kk": "",
        "zh": "n. 審計員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20426,
        "en": "authentic",
        "kk": "/əˈθɛnɪk/",
        "zh": "adj. 真實的",
        "unit": 13
    },
    {
        "id": 20427,
        "en": "author",
        "kk": "/ˈɔθɝ/",
        "zh": "n. 作者",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20428,
        "en": "authority",
        "kk": "/əˈθɔɹəti/",
        "zh": "n. 權威",
        "unit": 13,
        "example": "They respect authority.",
        "exampleZh": "他們尊重權威。"
    },
    {
        "id": 20429,
        "en": "authorization",
        "kk": "",
        "zh": "n. 授權",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20430,
        "en": "authorize",
        "kk": "/ˈɔθɝˌaɪz/",
        "zh": "v. 授權；批准",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20431,
        "en": "auto",
        "kk": "/ˈɔtoʊ/",
        "zh": "n. 汽車",
        "unit": 13,
        "example": "Tom used auto-tune.",
        "exampleZh": "湯姆使用了自動調諧。"
    },
    {
        "id": 20432,
        "en": "autograph",
        "kk": "/ˈɔtəˌɡɹæf/",
        "zh": "n. 簽名",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20433,
        "en": "automate",
        "kk": "",
        "zh": "v. 使自動化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20434,
        "en": "automatic",
        "kk": "/ˌɔtəˈmætɪk/",
        "zh": "adj. 自動的",
        "unit": 13,
        "example": "This process is automatic.",
        "exampleZh": "這個過程是自動的。"
    },
    {
        "id": 20435,
        "en": "automation",
        "kk": "",
        "zh": "n. 自動化",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20436,
        "en": "automobile",
        "kk": "/ˈɔtəmoʊˌbiɫ/",
        "zh": "n. 汽車",
        "unit": 13,
        "example": "Tom drives the automobile.",
        "exampleZh": "湯姆開汽車。"
    },
    {
        "id": 20437,
        "en": "autonomous",
        "kk": "",
        "zh": "adj. 自治的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20438,
        "en": "availability",
        "kk": "",
        "zh": "n. 可用性；空檔",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20439,
        "en": "available",
        "kk": "/əˈveɪɫəbəɫ/",
        "zh": "adj. 可用的",
        "unit": 13,
        "example": "Help is available.",
        "exampleZh": "可以提供幫助。"
    },
    {
        "id": 20440,
        "en": "avenue",
        "kk": "/ˈævəˌnu/",
        "zh": "n. 大道",
        "unit": 13,
        "example": "Turn left onto Fifth Avenue.",
        "exampleZh": "左轉進入第五大道。"
    },
    {
        "id": 20441,
        "en": "average",
        "kk": "/ˈævɝɪdʒ/",
        "zh": "adj. 平均的",
        "unit": 13,
        "example": "That's about average.",
        "exampleZh": "這大約是平均水平。"
    },
    {
        "id": 20442,
        "en": "avoid",
        "kk": "/əˈvɔɪd/",
        "zh": "v. 避免",
        "unit": 13,
        "example": "Sam tries to win Jess back while she tries to avoid him",
        "exampleZh": "山姆試圖贏回傑西，而傑西則試圖避開他"
    },
    {
        "id": 20443,
        "en": "await",
        "kk": "/əˈweɪt/",
        "zh": "v. 等候",
        "unit": 13,
        "example": "Are they awaiting us?",
        "exampleZh": "他們在等我們嗎？"
    },
    {
        "id": 20444,
        "en": "awake",
        "kk": "/əˈweɪk/",
        "zh": "adj. 醒著的",
        "unit": 13,
        "example": "Adriano jolted awake.",
        "exampleZh": "阿德里亞諾猛地驚醒。"
    },
    {
        "id": 20445,
        "en": "award",
        "kk": "/əˈwɔɹd/",
        "zh": "n. 獎",
        "unit": 13,
        "example": "Sami won many awards.",
        "exampleZh": "薩米贏得了許多獎項。"
    },
    {
        "id": 20446,
        "en": "aware",
        "kk": "/əˈwɛɹ/",
        "zh": "adj. 意識到的",
        "unit": 13,
        "example": "Yanni became aware.",
        "exampleZh": "雅尼意識到了。"
    },
    {
        "id": 20447,
        "en": "awareness",
        "kk": "",
        "zh": "n. 意識",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20448,
        "en": "awful",
        "kk": "/ˈɑfəɫ/",
        "zh": "adj. 糟糕的",
        "unit": 13,
        "example": "an awful speech",
        "exampleZh": "一次糟糕的演講"
    },
    {
        "id": 20449,
        "en": "awkward",
        "kk": "/ˈɑkwɝd/",
        "zh": "adj. 尷尬的",
        "unit": 13,
        "example": "He fell awkwardly.",
        "exampleZh": "他尷尬地摔倒了。"
    },
    {
        "id": 20450,
        "en": "backdrop",
        "kk": "",
        "zh": "n. 背景",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20451,
        "en": "background",
        "kk": "/ˈbækˌɡɹaʊnd/",
        "zh": "n. 背景",
        "unit": 13,
        "example": "Tom has a humble background.",
        "exampleZh": "湯姆出身卑微。"
    },
    {
        "id": 20452,
        "en": "backlog",
        "kk": "",
        "zh": "n. 積壓的工作",
        "unit": 13,
        "example": "the company took on extra staff to clear the backlog of work",
        "exampleZh": "公司增聘員工清理積壓的工作"
    },
    {
        "id": 20453,
        "en": "backup",
        "kk": "",
        "zh": "n. 備份",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20454,
        "en": "baggage",
        "kk": "/ˈbæɡədʒ/",
        "zh": "n. 行李",
        "unit": 13,
        "example": "Here is my baggage.",
        "exampleZh": "這是我的行李。"
    },
    {
        "id": 20455,
        "en": "balance",
        "kk": "/ˈbæɫəns/",
        "zh": "n. 餘額；平衡",
        "unit": 13,
        "example": "overseas investments can add balance to an investment portfolio",
        "exampleZh": "海外投資可以增加投資組合的平衡"
    },
    {
        "id": 20456,
        "en": "ballot",
        "kk": "/ˈbæɫət/",
        "zh": "n. 選票",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20457,
        "en": "ban",
        "kk": "/ˈbæn/",
        "zh": "v. 禁止",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20458,
        "en": "band",
        "kk": "/ˈbænd/",
        "zh": "n. 樂團",
        "unit": 13,
        "example": "a narrow band of gold was her only jewelry",
        "exampleZh": "一條窄金帶是她唯一的珠寶"
    },
    {
        "id": 20459,
        "en": "bankrupt",
        "kk": "/ˈbæŋkɹəpt/",
        "zh": "adj. 破產的",
        "unit": 13,
        "example": "I'll bankrupt you.",
        "exampleZh": "我會讓你破產。"
    },
    {
        "id": 20460,
        "en": "bankruptcy",
        "kk": "",
        "zh": "n. 破產",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20461,
        "en": "banner",
        "kk": "/ˈbænɝ/",
        "zh": "n. 橫幅",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20462,
        "en": "banquet",
        "kk": "/ˈbæŋkwət/",
        "zh": "n. 宴會",
        "unit": 13,
        "example": "a ten-course banquet",
        "exampleZh": "十道菜的宴會"
    },
    {
        "id": 20463,
        "en": "bare",
        "kk": "/ˈbɛɹ/",
        "zh": "adj. 裸露的",
        "unit": 13,
        "example": "bare floorboards",
        "exampleZh": "裸露的地板"
    },
    {
        "id": 20464,
        "en": "barely",
        "kk": "/ˈbɛɹɫi/",
        "zh": "adv. 幾乎不",
        "unit": 13,
        "example": "Mennad barely ate.",
        "exampleZh": "門納德幾乎沒吃東西。"
    },
    {
        "id": 20465,
        "en": "bargain",
        "kk": "/ˈbɑɹɡən/",
        "zh": "n. 交易；便宜貨",
        "unit": 13,
        "example": "I love to bargain.",
        "exampleZh": "我喜歡討價還價。"
    },
    {
        "id": 20466,
        "en": "barrier",
        "kk": "/ˈbæɹiɝ/",
        "zh": "n. 障礙",
        "unit": 13,
        "example": "We've hit a barrier.",
        "exampleZh": "我們遇到了障礙。"
    },
    {
        "id": 20467,
        "en": "base",
        "kk": "/ˈbeɪs/",
        "zh": "n. 基礎",
        "unit": 13,
        "example": "she and her boyfriend got to second base",
        "exampleZh": "她和她的男朋友到達二壘"
    },
    {
        "id": 20468,
        "en": "basic",
        "kk": "/ˈbeɪsɪk/",
        "zh": "adj. 基本的",
        "unit": 13,
        "example": "a coarse-grained, basic, plutonic rock",
        "exampleZh": "粗粒基性深成岩"
    },
    {
        "id": 20469,
        "en": "basis",
        "kk": "/ˈbeɪsəs/",
        "zh": "n. 基礎",
        "unit": 13
    },
    {
        "id": 20470,
        "en": "bear",
        "kk": "/ˈbɛɹ/",
        "zh": "v. 忍受；承擔",
        "unit": 13,
        "example": "no one likes to bear the responsibility for such decisions",
        "exampleZh": "沒有人願意為這樣的決定負責"
    },
    {
        "id": 20471,
        "en": "beat",
        "kk": "/ˈbit/",
        "zh": "v. 擊敗",
        "unit": 13,
        "example": "public clamor for more police officers on the beat",
        "exampleZh": "民眾呼籲增加警力"
    },
    {
        "id": 20472,
        "en": "behalf",
        "kk": "/bɪˈhæf/",
        "zh": "n. 代表",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20473,
        "en": "behave",
        "kk": "/bɪˈheɪv/",
        "zh": "v. 表現",
        "unit": 13,
        "example": "Behave yourselves!",
        "exampleZh": "好好表現吧！"
    },
    {
        "id": 20474,
        "en": "behavior",
        "kk": "/bɪˈheɪvjɝ/",
        "zh": "n. 行為",
        "unit": 13,
        "example": "Change your behavior.",
        "exampleZh": "改變你的行為。"
    },
    {
        "id": 20475,
        "en": "belongings",
        "kk": "/bɪˈɫɔŋɪŋz/",
        "zh": "n. 財產",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20476,
        "en": "below",
        "kk": "/biˈɫoʊ/",
        "zh": "prep. 在...之下",
        "unit": 13,
        "example": "the most common methods are shown below",
        "exampleZh": "最常見的方法如下圖所示"
    },
    {
        "id": 20477,
        "en": "benchmark",
        "kk": "",
        "zh": "n. 基準",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20478,
        "en": "beneficial",
        "kk": "/ˌbɛnəˈfɪʃəɫ/",
        "zh": "adj. 有益的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20479,
        "en": "benefit",
        "kk": "/ˈbɛnəfɪt/",
        "zh": "n. 福利；利益",
        "unit": 13,
        "example": "tenants bought their houses with the benefit of a discount",
        "exampleZh": "租戶以折扣優惠購買房屋"
    },
    {
        "id": 20480,
        "en": "beside",
        "kk": "/ˌbiˈsaɪd/",
        "zh": "prep. 在...旁邊",
        "unit": 13,
        "example": "on the table beside the bed",
        "exampleZh": "在床邊的桌子上"
    },
    {
        "id": 20481,
        "en": "besides",
        "kk": "/ˌbiˈsaɪdz/",
        "zh": "adv. 此外",
        "unit": 13
    },
    {
        "id": 20482,
        "en": "betray",
        "kk": "/bɪˈtɹeɪ/",
        "zh": "v. 背叛",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20483,
        "en": "beverage",
        "kk": "/ˈbɛvɝɪdʒ/",
        "zh": "n. 飲料",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20484,
        "en": "beyond",
        "kk": "/ˌbiˈɔnd/",
        "zh": "prep. 超過",
        "unit": 13
    },
    {
        "id": 20485,
        "en": "bias",
        "kk": "/ˈbaɪəs/",
        "zh": "n. 偏見",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20486,
        "en": "bid",
        "kk": "/ˈbɪd/",
        "zh": "n. 投標；v. 出價",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20487,
        "en": "bill",
        "kk": "/ˈbɪɫ/",
        "zh": "n. 帳單",
        "unit": 13,
        "example": "he was running up a bill of hundreds of dollars",
        "exampleZh": "他已經欠了幾百美元的帳單"
    },
    {
        "id": 20488,
        "en": "bind",
        "kk": "/ˈbaɪnd/",
        "zh": "v. 綁",
        "unit": 13,
        "example": "a protein in a form that can bind DNA",
        "exampleZh": "一種可以結合 DNA 的蛋白質"
    },
    {
        "id": 20489,
        "en": "biography",
        "kk": "/baɪˈɑɡɹəfi/",
        "zh": "n. 傳記",
        "unit": 13,
        "example": "Ziri wrote Rima's biography.",
        "exampleZh": "齊裡（Ziri）撰寫了裡瑪（Rima）的傳記。"
    },
    {
        "id": 20490,
        "en": "biology",
        "kk": "/baɪˈɑɫədʒi/",
        "zh": "n. 生物學",
        "unit": 13,
        "example": "Yuri loved biology.",
        "exampleZh": "尤里熱愛生物學。"
    },
    {
        "id": 20491,
        "en": "bitter",
        "kk": "/ˈbɪtɝ/",
        "zh": "adj. 苦的",
        "unit": 13,
        "example": "the raw berries have an intensely bitter flavor",
        "exampleZh": "生漿果有強烈的苦味"
    },
    {
        "id": 20492,
        "en": "blame",
        "kk": "/ˈbɫeɪm/",
        "zh": "v. 責備",
        "unit": 13,
        "example": "Lukas blamed himself.",
        "exampleZh": "盧卡斯責怪自己。"
    },
    {
        "id": 20493,
        "en": "blank",
        "kk": "/ˈbɫæŋk/",
        "zh": "adj. 空白的",
        "unit": 13,
        "example": "her mind went blank",
        "exampleZh": "她的大腦一片空白"
    },
    {
        "id": 20494,
        "en": "blanket",
        "kk": "/ˈbɫæŋkət/",
        "zh": "n. 毛毯",
        "unit": 13,
        "example": "I bought a blanket.",
        "exampleZh": "我買了一條毯子。"
    },
    {
        "id": 20495,
        "en": "blast",
        "kk": "/ˈbɫæst/",
        "zh": "n. 爆炸",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20496,
        "en": "blend",
        "kk": "/ˈbɫɛnd/",
        "zh": "v. 混合",
        "unit": 13,
        "example": "It's a special blend.",
        "exampleZh": "這是一種特殊的混合物。"
    },
    {
        "id": 20497,
        "en": "blind",
        "kk": "/ˈbɫaɪnd/",
        "zh": "adj. 瞎的",
        "unit": 13,
        "example": "he's absolutely blind where you're concerned, isn't he?",
        "exampleZh": "就你而言，他絕對是瞎子，不是嗎？"
    },
    {
        "id": 20498,
        "en": "block",
        "kk": "/ˈbɫɑk/",
        "zh": "n. 街區",
        "unit": 13,
        "example": "they tried to block the release of the film",
        "exampleZh": "他們試圖阻止這部電影的上映"
    },
    {
        "id": 20499,
        "en": "bloom",
        "kk": "/ˈbɫum/",
        "zh": "v. 開花",
        "unit": 13,
        "example": "Flowers are blooming.",
        "exampleZh": "花朵盛開。"
    },
    {
        "id": 20500,
        "en": "board",
        "kk": "/ˈbɔɹd/",
        "zh": "n. 董事會；v. 登機",
        "unit": 13,
        "example": "they would not be able to board without a ticket",
        "exampleZh": "沒有票他們將無法登機"
    },
    {
        "id": 20501,
        "en": "boast",
        "kk": "/ˈboʊst/",
        "zh": "v. 吹噓",
        "unit": 13,
        "example": "He boasts after winning.",
        "exampleZh": "獲勝後他誇耀。"
    },
    {
        "id": 20502,
        "en": "bold",
        "kk": "/ˈboʊɫd/",
        "zh": "adj. 大膽的",
        "unit": 13,
        "example": "she tossed him a bold look",
        "exampleZh": "她大膽地看了他一眼"
    },
    {
        "id": 20503,
        "en": "bond",
        "kk": "/ˈbɑnd/",
        "zh": "n. 債券",
        "unit": 13,
        "example": "Their bond was strong.",
        "exampleZh": "他們的聯繫很牢固。"
    },
    {
        "id": 20504,
        "en": "bonus",
        "kk": "/ˈboʊnəs/",
        "zh": "n. 獎金",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20505,
        "en": "booklet",
        "kk": "",
        "zh": "n. 小冊子",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20506,
        "en": "boom",
        "kk": "/ˈbum/",
        "zh": "n. 繁榮",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20507,
        "en": "boost",
        "kk": "/ˈbust/",
        "zh": "v. 促進",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20508,
        "en": "booth",
        "kk": "/ˈbuθ/",
        "zh": "n. 攤位；小隔間",
        "unit": 13,
        "example": "a ticket booth",
        "exampleZh": "售票亭"
    },
    {
        "id": 20509,
        "en": "border",
        "kk": "/ˈbɔɹdɝ/",
        "zh": "n. 邊界",
        "unit": 13,
        "example": "France borders Spain.",
        "exampleZh": "法國與西班牙接壤。"
    },
    {
        "id": 20510,
        "en": "bother",
        "kk": "/ˈbɑðɝ/",
        "zh": "v. 打擾",
        "unit": 13,
        "example": "I hope she hasn't been a bother",
        "exampleZh": "我希望她沒有打擾"
    },
    {
        "id": 20511,
        "en": "bottom",
        "kk": "/ˈbɑtəm/",
        "zh": "n. 底部",
        "unit": 13,
        "example": "the bottom of the page",
        "exampleZh": "頁面底部"
    },
    {
        "id": 20512,
        "en": "bounce",
        "kk": "/ˈbaʊns/",
        "zh": "v. 彈跳",
        "unit": 13,
        "example": "The cheque bounced.",
        "exampleZh": "支票被退回了。"
    },
    {
        "id": 20513,
        "en": "bound",
        "kk": "/ˈbaʊnd/",
        "zh": "adj. 綁住的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20514,
        "en": "boundary",
        "kk": "/ˈbaʊndɝi/",
        "zh": "n. 邊界",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20515,
        "en": "branch",
        "kk": "/ˈbɹæntʃ/",
        "zh": "n. 分支",
        "unit": 13,
        "example": "he went to work at our Boston branch",
        "exampleZh": "他到我們波士頓分公司工作"
    },
    {
        "id": 20516,
        "en": "brand",
        "kk": "/ˈbɹænd/",
        "zh": "n. 品牌",
        "unit": 13,
        "example": "a new brand of detergent",
        "exampleZh": "一種新品牌的洗滌劑"
    },
    {
        "id": 20517,
        "en": "brave",
        "kk": "/ˈbɹeɪv/",
        "zh": "adj. 勇敢的",
        "unit": 13,
        "example": "we had to brave the full heat of the sun",
        "exampleZh": "我們不得不勇敢地面對太陽的炎熱"
    },
    {
        "id": 20518,
        "en": "breach",
        "kk": "",
        "zh": "n. 違反",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20519,
        "en": "break",
        "kk": "/ˈbɹeɪk/",
        "zh": "n. 休息",
        "unit": 13,
        "example": "a break of 83 put him in front for the first time",
        "exampleZh": "83桿的單桿成績讓他首次領先"
    },
    {
        "id": 20520,
        "en": "breakdown",
        "kk": "/ˈbɹeɪkˌdaʊn/",
        "zh": "n. 故障",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20521,
        "en": "breakthrough",
        "kk": "/ˈbɹeɪkˌθɹu/",
        "zh": "n. 突破",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20522,
        "en": "breathe",
        "kk": "/ˈbɹið/",
        "zh": "v. 呼吸",
        "unit": 13,
        "example": "Breathe naturally.",
        "exampleZh": "自然呼吸。"
    },
    {
        "id": 20523,
        "en": "brief",
        "kk": "/ˈbɹif/",
        "zh": "adj. 簡短的",
        "unit": 13,
        "example": "introductions were brief and polite",
        "exampleZh": "介紹簡短而禮貌"
    },
    {
        "id": 20524,
        "en": "briefcase",
        "kk": "/ˈbɹifˌkeɪs/",
        "zh": "n. 公事包",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20525,
        "en": "briefing",
        "kk": "",
        "zh": "n. 簡報",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20526,
        "en": "brilliant",
        "kk": "/ˈbɹɪɫjənt/",
        "zh": "adj. 輝煌的",
        "unit": 13,
        "example": "brilliant sunshine illuminated the scene",
        "exampleZh": "燦爛的陽光照亮了現場"
    },
    {
        "id": 20527,
        "en": "bring",
        "kk": "/ˈbɹɪŋ/",
        "zh": "v. 帶來",
        "unit": 13,
        "example": "I'll give you an aspirin to bring down your temperature",
        "exampleZh": "我會給你一片阿斯匹靈來降低你的體溫"
    },
    {
        "id": 20528,
        "en": "broad",
        "kk": "/ˈbɹɔd/",
        "zh": "adj. 寬廣的",
        "unit": 13,
        "example": "three broad categories of mutual funds",
        "exampleZh": "共同基金三大類"
    },
    {
        "id": 20529,
        "en": "broadcast",
        "kk": "/ˈbɹɔdˌkæst/",
        "zh": "v. 廣播",
        "unit": 13,
        "example": "a broadcast journalist",
        "exampleZh": "一名廣播記者"
    },
    {
        "id": 20530,
        "en": "broaden",
        "kk": "/ˈbɹɔdən/",
        "zh": "v. 變寬",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20531,
        "en": "brochure",
        "kk": "/bɹoʊˈʃʊɹ/",
        "zh": "n. 小冊子",
        "unit": 13,
        "example": "a holiday brochure",
        "exampleZh": "假期小冊子"
    },
    {
        "id": 20532,
        "en": "broker",
        "kk": "",
        "zh": "n. 經紀人",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20533,
        "en": "browse",
        "kk": "/ˈbɹaʊz/",
        "zh": "v. 瀏覽",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20534,
        "en": "browser",
        "kk": "",
        "zh": "n. 瀏覽器",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20535,
        "en": "budget",
        "kk": "/ˈbədʒɪt/",
        "zh": "n. 預算",
        "unit": 13,
        "example": "Tom made a budget.",
        "exampleZh": "湯姆做了一個預算。"
    },
    {
        "id": 20536,
        "en": "build",
        "kk": "/ˈbɪɫd/",
        "zh": "v. 建築",
        "unit": 13,
        "example": "they need to build a strong relationship with journal users",
        "exampleZh": "他們需要與期刊使用者建立牢固的關係"
    },
    {
        "id": 20537,
        "en": "building",
        "kk": "/ˈbɪɫdɪŋ/",
        "zh": "n. 建築物",
        "unit": 13,
        "example": "the building of democracy in Guatemala",
        "exampleZh": "瓜地馬拉的民主建設"
    },
    {
        "id": 20538,
        "en": "bulk",
        "kk": "/ˈbəɫk/",
        "zh": "n. 體積；大量",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20539,
        "en": "bulletin",
        "kk": "/ˈbʊɫɪtən/",
        "zh": "n. 公告",
        "unit": 13,
        "example": "log-in details will be sent out to members via the monthly bulletin",
        "exampleZh": "登入詳細資訊將透過每月公告發送給會員"
    },
    {
        "id": 20540,
        "en": "bunch",
        "kk": "/ˈbəntʃ/",
        "zh": "n. 串",
        "unit": 13,
        "example": "A bunch of nonsense!",
        "exampleZh": "一堆廢話！"
    },
    {
        "id": 20541,
        "en": "bundle",
        "kk": "/ˈbəndəɫ/",
        "zh": "n. 束",
        "unit": 13
    },
    {
        "id": 20542,
        "en": "burden",
        "kk": "/ˈbɝdən/",
        "zh": "n. 負擔",
        "unit": 13,
        "example": "He lightened my burden.",
        "exampleZh": "他減輕了我的負擔。"
    },
    {
        "id": 20543,
        "en": "bureau",
        "kk": "/ˈbjʊɹoʊ/",
        "zh": "n. 局",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20544,
        "en": "burn",
        "kk": "/ˈbɝn/",
        "zh": "v. 燃燒",
        "unit": 13,
        "example": "exercise does help to burn calories",
        "exampleZh": "運動確實有助於燃燒卡路里"
    },
    {
        "id": 20545,
        "en": "burst",
        "kk": "/ˈbɝst/",
        "zh": "v. 爆裂",
        "unit": 13,
        "example": "he burst the balloon",
        "exampleZh": "他把氣球弄破了"
    },
    {
        "id": 20546,
        "en": "business",
        "kk": "/ˈbɪznəs/",
        "zh": "n. 商業",
        "unit": 13
    },
    {
        "id": 20547,
        "en": "button",
        "kk": "/ˈbətən/",
        "zh": "n. 按鈕",
        "unit": 13,
        "example": "just search for the app you want and click the 'buy' or 'install' button",
        "exampleZh": "只需搜尋您想要的應用程序，然後點擊“購買”或“安裝”按鈕"
    },
    {
        "id": 20548,
        "en": "bypass",
        "kk": "",
        "zh": "v. 繞過",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20549,
        "en": "cabinet",
        "kk": "/ˈkæbənət/",
        "zh": "n. 櫥櫃",
        "unit": 13,
        "example": "Here's the cabinet.",
        "exampleZh": "這是內閣。"
    },
    {
        "id": 20550,
        "en": "cable",
        "kk": "/ˈkeɪbəɫ/",
        "zh": "n. 電纜",
        "unit": 13,
        "example": "he caught a glimpse of the mast, a cable or two downwind",
        "exampleZh": "他瞥見了桅杆，順風的一兩條纜繩"
    },
    {
        "id": 20551,
        "en": "calculate",
        "kk": "/ˈkæɫkjəˌɫeɪt/",
        "zh": "v. 計算",
        "unit": 13,
        "example": "I calculated hastily.",
        "exampleZh": "我連忙算了算。"
    },
    {
        "id": 20552,
        "en": "calculation",
        "kk": "/ˌkæɫkjəˈɫeɪʃən/",
        "zh": "n. 計算",
        "unit": 13,
        "example": "This simplifies calculations.",
        "exampleZh": "這簡化了計算。"
    },
    {
        "id": 20553,
        "en": "calculator",
        "kk": "/ˈkæɫkjəˌɫeɪtɝ/",
        "zh": "n. 計算機",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20554,
        "en": "calendar",
        "kk": "/ˈkæɫəndɝ/",
        "zh": "n. 日曆",
        "unit": 13
    },
    {
        "id": 20555,
        "en": "campaign",
        "kk": "/kæmˈpeɪn/",
        "zh": "n. 活動",
        "unit": 13,
        "example": "Are you campaigning?",
        "exampleZh": "你在競選嗎？"
    },
    {
        "id": 20556,
        "en": "campus",
        "kk": "/ˈkæmpəs/",
        "zh": "n. 校園",
        "unit": 13,
        "example": "Are you on campus?",
        "exampleZh": "你在校園嗎？"
    },
    {
        "id": 20557,
        "en": "cancel",
        "kk": "/ˈkænsəɫ/",
        "zh": "v. 取消",
        "unit": 13,
        "example": "a stamp franked and with an adhesive cancel",
        "exampleZh": "蓋有加蓋郵戳和黏膠蓋銷的郵票"
    },
    {
        "id": 20558,
        "en": "cancellation",
        "kk": "",
        "zh": "n. 取消",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20559,
        "en": "candidate",
        "kk": "/ˈkændədeɪt/",
        "zh": "n. 候選人；應徵者",
        "unit": 13,
        "example": "Tom is a candidate.",
        "exampleZh": "湯姆是一名候選人。"
    },
    {
        "id": 20560,
        "en": "canvas",
        "kk": "/ˈkænvəs/",
        "zh": "n. 帆布",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20561,
        "en": "capable",
        "kk": "/ˈkeɪpəbəɫ/",
        "zh": "adj. 有能力的",
        "unit": 13,
        "example": "a highly capable man",
        "exampleZh": "一個很有能力的人"
    },
    {
        "id": 20562,
        "en": "capacity",
        "kk": "/kəˈpæsəti/",
        "zh": "n. 容量；能力",
        "unit": 13,
        "example": "his capacity to inspire trust in others",
        "exampleZh": "他激發他人信任的能力"
    },
    {
        "id": 20563,
        "en": "capital",
        "kk": "/ˈkæpətəɫ/",
        "zh": "n. 資本",
        "unit": 13,
        "example": "he's a really capital fellow",
        "exampleZh": "他真是個資本家"
    },
    {
        "id": 20564,
        "en": "capture",
        "kk": "/ˈkæptʃɝ/",
        "zh": "v. 捕捉",
        "unit": 13,
        "example": "Tom captured Mary.",
        "exampleZh": "湯姆抓住了瑪麗。"
    },
    {
        "id": 20565,
        "en": "carbon",
        "kk": "/ˈkɑɹbən/",
        "zh": "n. 碳",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20566,
        "en": "care",
        "kk": "/ˈkɛɹ/",
        "zh": "n. 照顧",
        "unit": 13,
        "example": "you care very deeply for him",
        "exampleZh": "你非常關心他"
    },
    {
        "id": 20567,
        "en": "career",
        "kk": "/kɝˈɪɹ/",
        "zh": "n. 職業",
        "unit": 13,
        "example": "Tom loves his career.",
        "exampleZh": "湯姆熱愛他的職業。"
    },
    {
        "id": 20568,
        "en": "careful",
        "kk": "/ˈkɛɹfəɫ/",
        "zh": "adj. 小心的",
        "unit": 13,
        "example": "be careful not to lose her address",
        "exampleZh": "小心不要遺失她的地址"
    },
    {
        "id": 20569,
        "en": "careless",
        "kk": "",
        "zh": "adj. 粗心的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20570,
        "en": "cargo",
        "kk": "/ˈkɑɹˌɡoʊ/",
        "zh": "n. 貨物",
        "unit": 13,
        "example": "a cargo of oil",
        "exampleZh": "一批石油"
    },
    {
        "id": 20571,
        "en": "carrier",
        "kk": "/ˈkæɹiɝ/",
        "zh": "n. 運輸工具",
        "unit": 13,
        "example": "Yanni is a mail carrier.",
        "exampleZh": "雅尼是郵差。"
    },
    {
        "id": 20572,
        "en": "carry",
        "kk": "/ˈkæɹi/",
        "zh": "v. 攜帶",
        "unit": 13,
        "example": "they relied on dialogue to carry the plot",
        "exampleZh": "他們依靠對話來推動情節"
    },
    {
        "id": 20573,
        "en": "cart",
        "kk": "/ˈkɑɹt/",
        "zh": "n. 手推車",
        "unit": 13,
        "example": "from the product page select the size and quantity you'd like and click ‘Buy’ to add it to your cart",
        "exampleZh": "從產品頁面選擇您想要的尺寸和數量，然後點擊「購買」將其新增至您的購物車"
    },
    {
        "id": 20574,
        "en": "case",
        "kk": "/ˈkeɪs/",
        "zh": "n. 情況",
        "unit": 13,
        "example": "a libel case",
        "exampleZh": "誹謗案"
    },
    {
        "id": 20575,
        "en": "cash",
        "kk": "/ˈkæʃ/",
        "zh": "n. 現金",
        "unit": 13,
        "example": "a discount for cash",
        "exampleZh": "現金折扣"
    },
    {
        "id": 20576,
        "en": "cashier",
        "kk": "/kæˈʃɪɹ/",
        "zh": "n. 收銀員",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20577,
        "en": "catalog",
        "kk": "/ˈkætəɫɔɡ/",
        "zh": "n. 目錄",
        "unit": 13,
        "example": "his life was a catalog of dismal failures",
        "exampleZh": "他的一生充滿了令人沮喪的失敗"
    },
    {
        "id": 20578,
        "en": "catch",
        "kk": "/ˈkætʃ/",
        "zh": "v. 抓",
        "unit": 13,
        "example": "there was a catch in Anne's voice",
        "exampleZh": "安妮的聲音有些哽咽"
    },
    {
        "id": 20579,
        "en": "category",
        "kk": "/ˈkætəˌɡɔɹi/",
        "zh": "n. 類別",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20580,
        "en": "cater",
        "kk": "/ˈkeɪtɝ/",
        "zh": "v. 迎合",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20581,
        "en": "catering",
        "kk": "",
        "zh": "n. 外燴服務",
        "unit": 13,
        "example": "high standards of catering",
        "exampleZh": "高標準的餐飲"
    },
    {
        "id": 20582,
        "en": "cause",
        "kk": "/ˈkɑz/",
        "zh": "n. 原因",
        "unit": 13,
        "example": "I'm raising money for a good cause",
        "exampleZh": "我正在為公益事業籌集資金"
    },
    {
        "id": 20583,
        "en": "caution",
        "kk": "/ˈkɑʃən/",
        "zh": "n. 警告",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20584,
        "en": "cautious",
        "kk": "/ˈkɔʃəs/",
        "zh": "adj. 謹慎的",
        "unit": 13,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20585,
        "en": "cease",
        "kk": "/ˈsis/",
        "zh": "v. 停止",
        "unit": 13,
        "example": "The giggles ceased.",
        "exampleZh": "咯咯笑聲停止了。"
    },
    {
        "id": 20586,
        "en": "ceiling",
        "kk": "/ˈsiɫɪŋ/",
        "zh": "n. 天花板",
        "unit": 13
    },
    {
        "id": 20587,
        "en": "celebrate",
        "kk": "/ˈsɛɫəˌbɹeɪt/",
        "zh": "v. 慶祝",
        "unit": 14,
        "example": "Everyone celebrated.",
        "exampleZh": "大家都慶祝了。"
    },
    {
        "id": 20588,
        "en": "celebration",
        "kk": "/ˌsɛɫəˈbɹeɪʃən/",
        "zh": "n. 慶典",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20589,
        "en": "celebrity",
        "kk": "/səˈɫɛbɹɪti/",
        "zh": "n. 名人",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20590,
        "en": "cell",
        "kk": "/ˈsɛɫ/",
        "zh": "n. 細胞",
        "unit": 14
    },
    {
        "id": 20591,
        "en": "censor",
        "kk": "",
        "zh": "v. 審查",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20592,
        "en": "census",
        "kk": "",
        "zh": "n. 人口普查",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20593,
        "en": "center",
        "kk": "/ˈsɛnɝ/",
        "zh": "n. 中心",
        "unit": 14,
        "example": "to center the needle, turn the knob",
        "exampleZh": "轉動旋鈕，使針居中"
    },
    {
        "id": 20594,
        "en": "central",
        "kk": "/ˈsɛntɹəɫ/",
        "zh": "adj. 中央的",
        "unit": 14,
        "example": "the station has a central courtyard",
        "exampleZh": "車站有一個中央庭院"
    },
    {
        "id": 20595,
        "en": "century",
        "kk": "/ˈsɛntʃɝi/",
        "zh": "n. 世紀",
        "unit": 14
    },
    {
        "id": 20596,
        "en": "ceremony",
        "kk": "/ˈsɛɹəˌmoʊni/",
        "zh": "n. 典禮",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20597,
        "en": "certain",
        "kk": "/ˈsɝtən/",
        "zh": "adj. 確定的",
        "unit": 14,
        "example": "true and certain knowledge of the essence of existence",
        "exampleZh": "關於存在本質的真實且確定的知識"
    },
    {
        "id": 20598,
        "en": "certainly",
        "kk": "",
        "zh": "adv. 確實地",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20599,
        "en": "certificate",
        "kk": "/sɝˈtɪfɪkət/",
        "zh": "n. 證書",
        "unit": 14,
        "example": "graduate certificate in information technology",
        "exampleZh": "資訊科技研究生證書"
    },
    {
        "id": 20600,
        "en": "certification",
        "kk": "",
        "zh": "n. 證明",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20601,
        "en": "certify",
        "kk": "/ˈsɝtəˌfaɪ/",
        "zh": "v. 證明",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20602,
        "en": "chain",
        "kk": "/ˈtʃeɪn/",
        "zh": "n. 鏈",
        "unit": 14,
        "example": "Don't yank my chain!",
        "exampleZh": "別拉我的鍊子！"
    },
    {
        "id": 20603,
        "en": "chair",
        "kk": "/ˈtʃɛɹ/",
        "zh": "n. 椅子",
        "unit": 14,
        "example": "the editorial chair",
        "exampleZh": "編輯主席"
    },
    {
        "id": 20604,
        "en": "chairman",
        "kk": "/ˈtʃɛɹmən/",
        "zh": "n. 主席",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20605,
        "en": "challenge",
        "kk": "/ˈtʃæɫəndʒ/",
        "zh": "n. 挑戰",
        "unit": 14,
        "example": "He challenged her.",
        "exampleZh": "他向她挑戰。"
    },
    {
        "id": 20606,
        "en": "chamber",
        "kk": "/ˈtʃeɪmbɝ/",
        "zh": "n. 房間",
        "unit": 14,
        "example": "The chamber door is open.",
        "exampleZh": "密室門開著。"
    },
    {
        "id": 20607,
        "en": "champion",
        "kk": "/ˈtʃæmpiən/",
        "zh": "n. 冠軍",
        "unit": 14,
        "example": "Ziri is a champion.",
        "exampleZh": "齊裡是冠軍。"
    },
    {
        "id": 20608,
        "en": "championship",
        "kk": "/ˈtʃæmpiənˌʃɪp/",
        "zh": "n. 錦標賽",
        "unit": 14,
        "example": "He won the championship.",
        "exampleZh": "他贏得了冠軍。"
    },
    {
        "id": 20609,
        "en": "chance",
        "kk": "/ˈtʃæns/",
        "zh": "n. 機會",
        "unit": 14,
        "example": "a chance meeting",
        "exampleZh": "一次偶然的相遇"
    },
    {
        "id": 20610,
        "en": "change",
        "kk": "/ˈtʃeɪndʒ/",
        "zh": "v. 改變",
        "unit": 14,
        "example": "I watched him pocket the change",
        "exampleZh": "我看著他把零錢放進口袋"
    },
    {
        "id": 20611,
        "en": "channel",
        "kk": "/ˈtʃænəɫ/",
        "zh": "n. 頻道",
        "unit": 14,
        "example": "Change the channel!",
        "exampleZh": "換個頻道吧！"
    },
    {
        "id": 20612,
        "en": "chaos",
        "kk": "/ˈkeɪɑs/",
        "zh": "n. 混亂",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20613,
        "en": "character",
        "kk": "/ˈkɛɹɪktɝ/",
        "zh": "n. 性格",
        "unit": 14
    },
    {
        "id": 20614,
        "en": "characteristic",
        "kk": "/ˌkɛɹəktɝˈɪstɪk/",
        "zh": "adj. 典型的",
        "unit": 14,
        "example": "It is characteristic of him.",
        "exampleZh": "這是他的特點。"
    },
    {
        "id": 20615,
        "en": "characterize",
        "kk": "/ˈkɛɹəktɝˌaɪz/",
        "zh": "v. 描繪",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20616,
        "en": "charge",
        "kk": "/ˈtʃɑɹdʒ/",
        "zh": "v. 收費",
        "unit": 14,
        "example": "he appeared in court on a charge of attempted murder",
        "exampleZh": "他因謀殺未遂罪名出庭"
    },
    {
        "id": 20617,
        "en": "charity",
        "kk": "/ˈtʃɛɹɪti/",
        "zh": "n. 慈善",
        "unit": 14,
        "example": "She runs a charity.",
        "exampleZh": "她經營一家慈善機構。"
    },
    {
        "id": 20618,
        "en": "chart",
        "kk": "/ˈtʃɑɹt/",
        "zh": "n. 圖表",
        "unit": 14,
        "example": "scribbled on a patient's chart",
        "exampleZh": "潦草地寫在病人的病歷上"
    },
    {
        "id": 20619,
        "en": "charter",
        "kk": "",
        "zh": "n. 憲章",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20620,
        "en": "chase",
        "kk": "/ˈtʃeɪs/",
        "zh": "v. 追逐",
        "unit": 14,
        "example": "a chase for limited supplies of hard currency",
        "exampleZh": "追逐有限的硬通貨供應"
    },
    {
        "id": 20621,
        "en": "chat",
        "kk": "/ˈtʃæt/",
        "zh": "v. 聊天",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20622,
        "en": "cheap",
        "kk": "/ˈtʃip/",
        "zh": "adj. 便宜的",
        "unit": 14,
        "example": "a cheap restaurant",
        "exampleZh": "一家便宜的餐館"
    },
    {
        "id": 20623,
        "en": "cheat",
        "kk": "/ˈtʃit/",
        "zh": "v. 欺騙",
        "unit": 14,
        "example": "a liar and a cheat",
        "exampleZh": "騙子和騙子"
    },
    {
        "id": 20624,
        "en": "check",
        "kk": "/ˈtʃɛk/",
        "zh": "v. 檢查",
        "unit": 14,
        "example": "on Wednesdays he wore the small check",
        "exampleZh": "星期三他戴著小支票"
    },
    {
        "id": 20625,
        "en": "checkout",
        "kk": "",
        "zh": "n. 結帳",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20626,
        "en": "cheer",
        "kk": "/ˈtʃɪɹ/",
        "zh": "v. 歡呼",
        "unit": 14,
        "example": "Everybody cheered.",
        "exampleZh": "大家歡呼起來。"
    },
    {
        "id": 20627,
        "en": "cheerful",
        "kk": "/ˈtʃɪɹfəɫ/",
        "zh": "adj. 開朗的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20628,
        "en": "chef",
        "kk": "/ˈʃɛf/",
        "zh": "n. 廚師",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20629,
        "en": "chemical",
        "kk": "/ˈkɛməkəɫ/",
        "zh": "adj. 化學的",
        "unit": 14,
        "example": "chemical treatments for killing fungi",
        "exampleZh": "殺死真菌的化學處理"
    },
    {
        "id": 20630,
        "en": "chemist",
        "kk": "/ˈkɛmɪst/",
        "zh": "n. 化學家",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20631,
        "en": "chemistry",
        "kk": "/ˈkɛməstɹi/",
        "zh": "n. 化學",
        "unit": 14,
        "example": "He likes chemistry.",
        "exampleZh": "他喜歡化學。"
    },
    {
        "id": 20632,
        "en": "cheque",
        "kk": "",
        "zh": "n. 支票",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20633,
        "en": "cherish",
        "kk": "/ˈtʃɛɹɪʃ/",
        "zh": "v. 珍惜",
        "unit": 14,
        "example": "Cherish the thought.",
        "exampleZh": "珍惜這個想法。"
    },
    {
        "id": 20634,
        "en": "chief",
        "kk": "/ˈtʃif/",
        "zh": "adj. 主要的",
        "unit": 14,
        "example": "the chief of police",
        "exampleZh": "警察局長"
    },
    {
        "id": 20635,
        "en": "childhood",
        "kk": "/ˈtʃaɪɫdˌhʊd/",
        "zh": "n. 童年",
        "unit": 14,
        "example": "My childhood was good.",
        "exampleZh": "我的童年是美好的。"
    },
    {
        "id": 20636,
        "en": "chill",
        "kk": "/ˈtʃɪɫ/",
        "zh": "n. 寒冷",
        "unit": 14,
        "example": "a long-term chill in relations could hurt commerce",
        "exampleZh": "關係長期冷淡可能會損害商業"
    },
    {
        "id": 20637,
        "en": "choice",
        "kk": "/ˈtʃɔɪs/",
        "zh": "n. 選擇",
        "unit": 14,
        "example": "this CD drive is the perfect choice for your computer",
        "exampleZh": "該 CD 驅動器是您電腦的完美選擇"
    },
    {
        "id": 20638,
        "en": "choir",
        "kk": "/ˈkwaɪɝ/",
        "zh": "n. 合唱團",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20639,
        "en": "choose",
        "kk": "/ˈtʃuz/",
        "zh": "v. 選擇",
        "unit": 14,
        "example": "I'll stay as long as I choose",
        "exampleZh": "只要我選擇，我就會留下來"
    },
    {
        "id": 20640,
        "en": "chore",
        "kk": "/ˈtʃɔɹ/",
        "zh": "n. 雜務",
        "unit": 14,
        "example": "She did her chores.",
        "exampleZh": "她做家事。"
    },
    {
        "id": 20641,
        "en": "chronic",
        "kk": "/ˈkɹɑnɪk/",
        "zh": "adj. 慢性的",
        "unit": 14
    },
    {
        "id": 20642,
        "en": "circle",
        "kk": "/ˈsɝkəɫ/",
        "zh": "n. 圓圈",
        "unit": 14,
        "example": "they all sat around in a circle",
        "exampleZh": "他們圍坐成一圈"
    },
    {
        "id": 20643,
        "en": "circuit",
        "kk": "/ˈsɝkət/",
        "zh": "n. 電路",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20644,
        "en": "circular",
        "kk": "/ˈsɝkjəɫɝ/",
        "zh": "adj. 圓形的",
        "unit": 14,
        "example": "Flavio was in a circular room.",
        "exampleZh": "弗拉維奧在一個圓形房間裡。"
    },
    {
        "id": 20645,
        "en": "circulate",
        "kk": "/ˈsɝkjəˌɫeɪt/",
        "zh": "v. 循環",
        "unit": 14,
        "example": "Blood circulates through blood vessels.",
        "exampleZh": "血液通過血管循環。"
    },
    {
        "id": 20646,
        "en": "circulation",
        "kk": "/ˈsɝkjəˌɫeɪʃən/",
        "zh": "n. 循環",
        "unit": 14,
        "example": "Blood circulation is very rapid.",
        "exampleZh": "血液循環非常快速。"
    },
    {
        "id": 20647,
        "en": "circumstance",
        "kk": "/ˈsɝkəmˌstæns/",
        "zh": "n. 情況",
        "unit": 14,
        "example": "What were the circumstances?",
        "exampleZh": "當時的情況如何？"
    },
    {
        "id": 20648,
        "en": "cite",
        "kk": "/ˈsaɪt/",
        "zh": "v. 引用",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20649,
        "en": "citizen",
        "kk": "/ˈsɪtəzən/",
        "zh": "n. 公民",
        "unit": 14
    },
    {
        "id": 20650,
        "en": "city",
        "kk": "/ˈsɪti/",
        "zh": "n. 城市",
        "unit": 14,
        "example": "the city council",
        "exampleZh": "市議會"
    },
    {
        "id": 20651,
        "en": "civic",
        "kk": "/ˈsɪvɪk/",
        "zh": "adj. 城市的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20652,
        "en": "civil",
        "kk": "/ˈsɪvəɫ/",
        "zh": "adj. 公民的",
        "unit": 14,
        "example": "a civil action",
        "exampleZh": "民事訴訟"
    },
    {
        "id": 20653,
        "en": "civilian",
        "kk": "/səˈvɪɫjən/",
        "zh": "n. 平民",
        "unit": 14,
        "example": "The IDF kills civilians.",
        "exampleZh": "以色列國防軍殺害平民。"
    },
    {
        "id": 20654,
        "en": "civilization",
        "kk": "/ˌsɪvəɫɪˈzeɪʃən/",
        "zh": "n. 文明",
        "unit": 14,
        "example": "They hate civilization.",
        "exampleZh": "他們討厭文明。"
    },
    {
        "id": 20655,
        "en": "claim",
        "kk": "/ˈkɫeɪm/",
        "zh": "v. 聲稱",
        "unit": 14,
        "example": "these sunblocks claim protection factors as high as 34",
        "exampleZh": "這些防曬霜聲稱防護係數高達 34"
    },
    {
        "id": 20656,
        "en": "clarify",
        "kk": "/ˈkɫɛɹəˌfaɪ/",
        "zh": "v. 澄清",
        "unit": 14,
        "example": "Can you clarify that?",
        "exampleZh": "你能澄清一下嗎？"
    },
    {
        "id": 20657,
        "en": "clarity",
        "kk": "/ˈkɫɛɹəti/",
        "zh": "n. 清楚",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20658,
        "en": "clash",
        "kk": "/ˈkɫæʃ/",
        "zh": "v. 衝突",
        "unit": 14,
        "example": "Those colors clash.",
        "exampleZh": "這些顏色發生衝突。"
    },
    {
        "id": 20659,
        "en": "classic",
        "kk": "/ˈkɫæsɪk/",
        "zh": "adj. 經典的",
        "unit": 14,
        "example": "I had all the classic symptoms of flu",
        "exampleZh": "我有流感的所有典型症狀"
    },
    {
        "id": 20660,
        "en": "classical",
        "kk": "/ˈkɫæsɪkəɫ/",
        "zh": "adj. 古典的",
        "unit": 14,
        "example": "I played classical music.",
        "exampleZh": "我演奏古典音樂。"
    },
    {
        "id": 20661,
        "en": "classification",
        "kk": "/ˌkɫæsəfəˈkeɪʃən/",
        "zh": "n. 分類",
        "unit": 14,
        "example": "Classification is not my specialty.",
        "exampleZh": "分類不是我的專長。"
    },
    {
        "id": 20662,
        "en": "classify",
        "kk": "/ˈkɫæsəˌfaɪ/",
        "zh": "v. 分類",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20663,
        "en": "clause",
        "kk": "/ˈkɫɔz/",
        "zh": "n. 條款",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20664,
        "en": "clean",
        "kk": "/ˈkɫin/",
        "zh": "adj. 乾淨的",
        "unit": 14,
        "example": "I searched him and his luggage, and he was clean",
        "exampleZh": "我搜了他和他的行李，他很乾淨"
    },
    {
        "id": 20665,
        "en": "clear",
        "kk": "/ˈkɫɪɹ/",
        "zh": "adj. 清楚的",
        "unit": 14,
        "example": "the plane rose high enough to clear the trees",
        "exampleZh": "飛機升得夠高，可以清理樹木"
    },
    {
        "id": 20666,
        "en": "clearance",
        "kk": "/ˈkɫɪɹəns/",
        "zh": "n. 清除",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20667,
        "en": "clerk",
        "kk": "/ˈkɫɝk/",
        "zh": "n. 職員",
        "unit": 14
    },
    {
        "id": 20668,
        "en": "clever",
        "kk": "/ˈkɫɛvɝ/",
        "zh": "adj. 聰明的",
        "unit": 14,
        "example": "how clever of him to think of this!",
        "exampleZh": "他想到這一點真是太聰明了！"
    },
    {
        "id": 20669,
        "en": "click",
        "kk": "/ˈkɫɪk/",
        "zh": "v. 點擊",
        "unit": 14,
        "example": "Please click here.",
        "exampleZh": "請點選這裡。"
    },
    {
        "id": 20670,
        "en": "client",
        "kk": "/ˈkɫaɪənt/",
        "zh": "n. 客戶",
        "unit": 14,
        "example": "I only have clients.",
        "exampleZh": "我只有客戶。"
    },
    {
        "id": 20671,
        "en": "clientele",
        "kk": "",
        "zh": "n. 客戶群",
        "unit": 14,
        "example": "the dancers don't mix with the clientele",
        "exampleZh": "舞者不與顧客混在一起"
    },
    {
        "id": 20672,
        "en": "climate",
        "kk": "/ˈkɫaɪmət/",
        "zh": "n. 氣候",
        "unit": 14
    },
    {
        "id": 20673,
        "en": "climax",
        "kk": "/ˈkɫaɪˌmæks/",
        "zh": "n. 頂點",
        "unit": 14,
        "example": "The game came to a climax.",
        "exampleZh": "比賽進入了高潮。"
    },
    {
        "id": 20674,
        "en": "climb",
        "kk": "/ˈkɫaɪm/",
        "zh": "v. 攀登",
        "unit": 14,
        "example": "his long climb from poverty",
        "exampleZh": "他擺脫貧窮的漫長歷程"
    },
    {
        "id": 20675,
        "en": "cling",
        "kk": "/ˈkɫɪŋ/",
        "zh": "v. 緊抓",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20676,
        "en": "clinic",
        "kk": "/ˈkɫɪnɪk/",
        "zh": "n. 診所",
        "unit": 14,
        "example": "The clinic is closed.",
        "exampleZh": "診所已關閉。"
    },
    {
        "id": 20677,
        "en": "clip",
        "kk": "/ˈkɫɪp/",
        "zh": "n. 夾子",
        "unit": 14,
        "example": "The clip was longer.",
        "exampleZh": "剪輯更長。"
    },
    {
        "id": 20678,
        "en": "clock",
        "kk": "/ˈkɫɑk/",
        "zh": "n. 時鐘",
        "unit": 14,
        "example": "they play against the clock",
        "exampleZh": "他們爭分奪秒"
    },
    {
        "id": 20679,
        "en": "close",
        "kk": "/ˈkɫoʊs/",
        "zh": "adj. 靠近的",
        "unit": 14,
        "example": "the months of living in close proximity to her were taking their toll",
        "exampleZh": "與她住得很近的幾個月讓她付出了代價"
    },
    {
        "id": 20680,
        "en": "closet",
        "kk": "/ˈkɫɑzət/",
        "zh": "n. 壁櫥",
        "unit": 14
    },
    {
        "id": 20681,
        "en": "closure",
        "kk": "/ˈkɫoʊʒɝ/",
        "zh": "n. 關閉",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20682,
        "en": "clothe",
        "kk": "/ˈkɫoʊð/",
        "zh": "v. 給...穿衣",
        "unit": 14,
        "example": "they already had eight children to feed and clothe",
        "exampleZh": "他們已經有八個孩子需要吃穿"
    },
    {
        "id": 20683,
        "en": "clothes",
        "kk": "/ˈkɫoʊðz/",
        "zh": "n. 衣服",
        "unit": 14
    },
    {
        "id": 20684,
        "en": "clothing",
        "kk": "/ˈkɫoʊðɪŋ/",
        "zh": "n. 衣物",
        "unit": 14
    },
    {
        "id": 20685,
        "en": "cloud",
        "kk": "/ˈkɫaʊd/",
        "zh": "n. 雲",
        "unit": 14,
        "example": "a cloud of dust",
        "exampleZh": "一團塵埃"
    },
    {
        "id": 20686,
        "en": "clue",
        "kk": "/ˈkɫu/",
        "zh": "n. 線索",
        "unit": 14,
        "example": "Mennad had no clue.",
        "exampleZh": "門納德毫無頭緒。"
    },
    {
        "id": 20687,
        "en": "clumsy",
        "kk": "/ˈkɫəmzi/",
        "zh": "adj. 笨拙的",
        "unit": 14,
        "example": "Flavio was clumsy.",
        "exampleZh": "弗拉維奧很笨拙。"
    },
    {
        "id": 20688,
        "en": "cluster",
        "kk": "/ˈkɫəstɝ/",
        "zh": "n. 簇",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20689,
        "en": "coach",
        "kk": "/ˈkoʊtʃ/",
        "zh": "n. 教練",
        "unit": 14,
        "example": "a football coach",
        "exampleZh": "足球教練"
    },
    {
        "id": 20690,
        "en": "coalition",
        "kk": "",
        "zh": "n. 聯盟",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20691,
        "en": "coarse",
        "kk": "/ˈkɔɹs/",
        "zh": "adj. 粗糙的",
        "unit": 14,
        "example": "He's coarse in manner.",
        "exampleZh": "他的態度很粗魯。"
    },
    {
        "id": 20692,
        "en": "coast",
        "kk": "/ˈkoʊst/",
        "zh": "n. 海岸",
        "unit": 14,
        "example": "the coast road",
        "exampleZh": "海岸路"
    },
    {
        "id": 20693,
        "en": "code",
        "kk": "/ˈkoʊd/",
        "zh": "n. 代碼",
        "unit": 14,
        "example": "He learned to code.",
        "exampleZh": "他學會了編碼。"
    },
    {
        "id": 20694,
        "en": "coffee",
        "kk": "/ˈkɑfi/",
        "zh": "n. 咖啡",
        "unit": 14,
        "example": "a cup of coffee",
        "exampleZh": "一杯咖啡"
    },
    {
        "id": 20695,
        "en": "cognitive",
        "kk": "",
        "zh": "adj. 認知的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20696,
        "en": "cohere",
        "kk": "",
        "zh": "v. 連貫",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20697,
        "en": "coherent",
        "kk": "/koʊˈhɪɹənt/",
        "zh": "adj. 連貫的",
        "unit": 14
    },
    {
        "id": 20698,
        "en": "cohesion",
        "kk": "",
        "zh": "n. 凝聚力",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20699,
        "en": "cohesive",
        "kk": "",
        "zh": "adj. 有凝聚力的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20700,
        "en": "coincide",
        "kk": "/ˌkoʊɪnˈsaɪd/",
        "zh": "v. 同時發生",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20701,
        "en": "coincidence",
        "kk": "/koʊˈɪnsɪdəns/",
        "zh": "n. 巧合",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20702,
        "en": "collaborate",
        "kk": "",
        "zh": "v. 合作",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20703,
        "en": "collaboration",
        "kk": "",
        "zh": "n. 合作",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20704,
        "en": "collapse",
        "kk": "/kəˈɫæps/",
        "zh": "v. 倒塌",
        "unit": 14,
        "example": "Our house collapsed.",
        "exampleZh": "我們的房子倒塌了。"
    },
    {
        "id": 20705,
        "en": "collar",
        "kk": "/ˈkɑɫɝ/",
        "zh": "n. 衣領",
        "unit": 14,
        "example": "Ziri likes this collar.",
        "exampleZh": "Ziri 喜歡這個項圈。"
    },
    {
        "id": 20706,
        "en": "colleague",
        "kk": "/ˈkɑɫiɡ/",
        "zh": "n. 同事",
        "unit": 14,
        "example": "Simon was also a very good colleague",
        "exampleZh": "西蒙也是一位非常好的同事"
    },
    {
        "id": 20707,
        "en": "collect",
        "kk": "/kəˈɫɛkt/",
        "zh": "v. 收集",
        "unit": 14,
        "example": "dust and dirt collect so quickly",
        "exampleZh": "灰塵和污垢積得如此之快"
    },
    {
        "id": 20708,
        "en": "collection",
        "kk": "/kəˈɫɛkʃən/",
        "zh": "n. 收藏品",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20709,
        "en": "collective",
        "kk": "/kəˈɫɛktɪv/",
        "zh": "adj. 集體的",
        "unit": 14
    },
    {
        "id": 20710,
        "en": "collector",
        "kk": "/kəˈɫɛktɝ/",
        "zh": "n. 收藏家",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20711,
        "en": "college",
        "kk": "/ˈkɑɫɪdʒ/",
        "zh": "n. 大學",
        "unit": 14,
        "example": "We attended college.",
        "exampleZh": "我們上大學了。"
    },
    {
        "id": 20712,
        "en": "collide",
        "kk": "/kəˈɫaɪd/",
        "zh": "v. 碰撞",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20713,
        "en": "collision",
        "kk": "/kəˈɫɪʒən/",
        "zh": "n. 碰撞",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20714,
        "en": "color",
        "kk": "/ˈkəɫɝ/",
        "zh": "n. 顏色",
        "unit": 14,
        "example": "color flooded her skin as she realized what he meant",
        "exampleZh": "當她意識到他的意思時，顏色淹沒了她的皮膚"
    },
    {
        "id": 20715,
        "en": "column",
        "kk": "/ˈkɑɫəm/",
        "zh": "n. 專欄",
        "unit": 14,
        "example": "The column is cylindrical.",
        "exampleZh": "柱子是圓柱形的。"
    },
    {
        "id": 20716,
        "en": "combat",
        "kk": "/ˈkɑmbæt/",
        "zh": "n. 戰鬥",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20717,
        "en": "combination",
        "kk": "/ˌkɑmbəˈneɪʃən/",
        "zh": "n. 結合",
        "unit": 14,
        "example": "I love that combination.",
        "exampleZh": "我喜歡這個組合。"
    },
    {
        "id": 20718,
        "en": "combine",
        "kk": "/ˈkɑmbaɪn/",
        "zh": "v. 結合",
        "unit": 14,
        "example": "Germany combines modern and medieval.",
        "exampleZh": "德國結合了現代和中世紀。"
    },
    {
        "id": 20719,
        "en": "come",
        "kk": "/ˈkəm/",
        "zh": "v. 來",
        "unit": 14,
        "example": "do you want to come fishing tomorrow?",
        "exampleZh": "你明天想來釣魚嗎？"
    },
    {
        "id": 20720,
        "en": "comedy",
        "kk": "/ˈkɑmədi/",
        "zh": "n. 喜劇",
        "unit": 14,
        "example": "Ziri's comedy contains vulgarity.",
        "exampleZh": "齊日的喜劇包含粗俗之處。"
    },
    {
        "id": 20721,
        "en": "comfort",
        "kk": "/ˈkəmfɝt/",
        "zh": "n. 舒適",
        "unit": 14,
        "example": "Cicadas are comforting.",
        "exampleZh": "蟬聲讓人心曠神怡。"
    },
    {
        "id": 20722,
        "en": "comfortable",
        "kk": "/ˈkəmfɝtəbəɫ/",
        "zh": "adj. 舒服的",
        "unit": 14,
        "example": "a comfortable victory",
        "exampleZh": "輕鬆的勝利"
    },
    {
        "id": 20723,
        "en": "comic",
        "kk": "/ˈkɑmɪk/",
        "zh": "adj. 滑稽的",
        "unit": 14,
        "example": "Tom collects comics.",
        "exampleZh": "湯姆收集漫畫。"
    },
    {
        "id": 20724,
        "en": "command",
        "kk": "/kəˈmænd/",
        "zh": "v. 命令",
        "unit": 14,
        "example": "Wait for my command.",
        "exampleZh": "等待我的命令。"
    },
    {
        "id": 20725,
        "en": "commander",
        "kk": "/kəˈmændɝ/",
        "zh": "n. 指揮官",
        "unit": 14,
        "example": "Dmitri is the commander.",
        "exampleZh": "德米特里是指揮官。"
    },
    {
        "id": 20726,
        "en": "commemorate",
        "kk": "/kəˈmɛmɝˌeɪt/",
        "zh": "v. 紀念",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20727,
        "en": "commence",
        "kk": "/kəˈmɛns/",
        "zh": "v. 開始",
        "unit": 14,
        "example": "a public inquiry is due to commence on the 16th",
        "exampleZh": "公眾調查將於16日開始"
    },
    {
        "id": 20728,
        "en": "commend",
        "kk": "",
        "zh": "v. 稱讚",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20729,
        "en": "comment",
        "kk": "/ˈkɑmɛnt/",
        "zh": "n. 評論",
        "unit": 14,
        "example": "They posted comments.",
        "exampleZh": "他們發表了評論。"
    },
    {
        "id": 20730,
        "en": "commerce",
        "kk": "/ˈkɑmɝs/",
        "zh": "n. 商業",
        "unit": 14,
        "example": "English is useful in commerce.",
        "exampleZh": "英語在商業上很有用。"
    },
    {
        "id": 20731,
        "en": "commercial",
        "kk": "/kəˈmɝʃəɫ/",
        "zh": "adj. 商業的",
        "unit": 14,
        "example": "We hate commercials.",
        "exampleZh": "我們討厭廣告。"
    },
    {
        "id": 20732,
        "en": "commission",
        "kk": "/kəˈmɪʃən/",
        "zh": "n. 佣金；委員會",
        "unit": 14,
        "example": "he has resigned his commission",
        "exampleZh": "他已辭去職務"
    },
    {
        "id": 20733,
        "en": "commit",
        "kk": "/kəˈmɪt/",
        "zh": "v. 犯",
        "unit": 14,
        "example": "Someone commited suicide.",
        "exampleZh": "有人自殺了。"
    },
    {
        "id": 20734,
        "en": "commitment",
        "kk": "/kəˈmɪtmənt/",
        "zh": "n. 承諾",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20735,
        "en": "committee",
        "kk": "/kəˈmɪti/",
        "zh": "n. 委員會",
        "unit": 14,
        "example": "Tom is on several committees.",
        "exampleZh": "湯姆是多個委員會的成員。"
    },
    {
        "id": 20736,
        "en": "commodity",
        "kk": "/kəˈmɑdəti/",
        "zh": "n. 商品",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20737,
        "en": "common",
        "kk": "/ˈkɑmən/",
        "zh": "adj. 常見的",
        "unit": 14,
        "example": "the common or vernacular name",
        "exampleZh": "俗名或俗名"
    },
    {
        "id": 20738,
        "en": "commonly",
        "kk": "",
        "zh": "adv. 通常",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20739,
        "en": "communicate",
        "kk": "/kəmˈjunəˌkeɪt/",
        "zh": "v. 溝通",
        "unit": 14,
        "example": "We communicate assertively.",
        "exampleZh": "我們自信地溝通。"
    },
    {
        "id": 20740,
        "en": "communication",
        "kk": "/kəmˌjunəˈkeɪʃən/",
        "zh": "n. 溝通",
        "unit": 14,
        "example": "Jonas lost communication.",
        "exampleZh": "喬納斯失去了聯繫。"
    },
    {
        "id": 20741,
        "en": "commute",
        "kk": "/kəmˈjut/",
        "zh": "v. 通勤",
        "unit": 14,
        "example": "the daily commute",
        "exampleZh": "日常通勤"
    },
    {
        "id": 20742,
        "en": "commuter",
        "kk": "/kəmˈjutɝ/",
        "zh": "n. 通勤者",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20743,
        "en": "compact",
        "kk": "/ˈkɑmpækt/",
        "zh": "adj. 緊湊的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20744,
        "en": "companion",
        "kk": "/kəmˈpænjən/",
        "zh": "n. 同伴",
        "unit": 14,
        "example": "You have many companions.",
        "exampleZh": "你有很多同伴。"
    },
    {
        "id": 20745,
        "en": "company",
        "kk": "/ˈkəmpəˌni/",
        "zh": "n. 公司",
        "unit": 14
    },
    {
        "id": 20746,
        "en": "comparable",
        "kk": "/ˈkɑmpɝəbəɫ/",
        "zh": "adj. 可比較的",
        "unit": 14
    },
    {
        "id": 20747,
        "en": "comparative",
        "kk": "/kəmˈpɛɹətɪv/",
        "zh": "adj. 比較的",
        "unit": 14
    },
    {
        "id": 20748,
        "en": "compare",
        "kk": "/kəmˈpɛɹ/",
        "zh": "v. 比較",
        "unit": 14,
        "example": "sales were modest and cannot compare with the glory days of 1989",
        "exampleZh": "銷量平平，無法與 1989 年的輝煌歲月相比"
    },
    {
        "id": 20749,
        "en": "comparison",
        "kk": "/kəmˈpɛɹəsən/",
        "zh": "n. 比較",
        "unit": 14,
        "example": "The comparison is apt.",
        "exampleZh": "這個對比是恰當的。"
    },
    {
        "id": 20750,
        "en": "compass",
        "kk": "/ˈkəmpəs/",
        "zh": "n. 指南針",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20751,
        "en": "compassion",
        "kk": "/kəmˈpæʃən/",
        "zh": "n. 同情",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20752,
        "en": "compatible",
        "kk": "/kəmˈpætəbəɫ/",
        "zh": "adj. 兼容的",
        "unit": 14
    },
    {
        "id": 20753,
        "en": "compel",
        "kk": "/kəmˈpɛɫ/",
        "zh": "v. 強迫",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20754,
        "en": "compelling",
        "kk": "",
        "zh": "adj. 引人注目的",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20755,
        "en": "compensate",
        "kk": "/ˈkɑmpənˌseɪt/",
        "zh": "v. 補償",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20756,
        "en": "compensation",
        "kk": "/ˌkɑmpənˈseɪʃən/",
        "zh": "n. 補償；薪酬",
        "unit": 14,
        "example": "the gray streets of London were small compensation for the loss of her beloved Africa",
        "exampleZh": "倫敦的灰色街道只是對她失去心愛的非洲的小小的補償"
    },
    {
        "id": 20757,
        "en": "compete",
        "kk": "/kəmˈpit/",
        "zh": "v. 競爭",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20758,
        "en": "competence",
        "kk": "/ˈkɑmpətɪns/",
        "zh": "n. 能力",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20759,
        "en": "competent",
        "kk": "/ˈkɑmpətɪnt/",
        "zh": "adj. 勝任的",
        "unit": 14
    },
    {
        "id": 20760,
        "en": "competition",
        "kk": "/ˌkɑmpəˈtɪʃən/",
        "zh": "n. 競爭",
        "unit": 14,
        "example": "You have competition.",
        "exampleZh": "你有競爭。"
    },
    {
        "id": 20761,
        "en": "competitive",
        "kk": "/kəmˈpɛtətɪv/",
        "zh": "adj. 有競爭力的",
        "unit": 14,
        "example": "a car industry competitive with any in the world",
        "exampleZh": "與世界上任何一個汽車工業都具有競爭力的汽車工業"
    },
    {
        "id": 20762,
        "en": "competitor",
        "kk": "/kəmˈpɛtətɝ/",
        "zh": "n. 競爭者",
        "unit": 14,
        "example": "You're a competitor.",
        "exampleZh": "你是一個競爭對手。"
    },
    {
        "id": 20763,
        "en": "compile",
        "kk": "/kəmˈpaɪɫ/",
        "zh": "v. 編譯",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20764,
        "en": "complain",
        "kk": "/kəmˈpɫeɪn/",
        "zh": "v. 抱怨",
        "unit": 14,
        "example": "her husband began to complain of headaches",
        "exampleZh": "她的丈夫開始抱怨頭痛"
    },
    {
        "id": 20765,
        "en": "complaint",
        "kk": "/kəmˈpɫeɪnt/",
        "zh": "n. 抱怨；投訴",
        "unit": 14,
        "example": "he hasn't any cause for complaint",
        "exampleZh": "他沒有任何理由抱怨"
    },
    {
        "id": 20766,
        "en": "complement",
        "kk": "/ˈkɑmpɫəmənt/",
        "zh": "n. 補充物",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20767,
        "en": "complete",
        "kk": "/kəmˈpɫit/",
        "zh": "adj. 完整的",
        "unit": 14,
        "example": "a complete ban on smoking",
        "exampleZh": "全面禁煙"
    },
    {
        "id": 20768,
        "en": "completion",
        "kk": "/kəmˈpɫiʃən/",
        "zh": "n. 完成",
        "unit": 14
    },
    {
        "id": 20769,
        "en": "complex",
        "kk": "/ˈkɑmpɫɛks/",
        "zh": "adj. 複雜的",
        "unit": 14,
        "example": "a complex of hotels",
        "exampleZh": "飯店綜合體"
    },
    {
        "id": 20770,
        "en": "complexity",
        "kk": "/kəmˈpɫɛksəti/",
        "zh": "n. 複雜性",
        "unit": 14,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20771,
        "en": "compliance",
        "kk": "",
        "zh": "n. 遵守；合規",
        "unit": 15,
        "example": "they must secure each other's cooperation or compliance",
        "exampleZh": "他們必須確保彼此的合作或遵守"
    },
    {
        "id": 20772,
        "en": "complicate",
        "kk": "/ˈkɑmpɫəˌkeɪt/",
        "zh": "v. 使複雜化",
        "unit": 15,
        "example": "War is complicated.",
        "exampleZh": "戰爭是複雜的。"
    },
    {
        "id": 20773,
        "en": "complicated",
        "kk": "",
        "zh": "adj. 複雜的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20774,
        "en": "complication",
        "kk": "/ˌkɑmpɫəˈkeɪʃən/",
        "zh": "n. 併發症",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20775,
        "en": "compliment",
        "kk": "/ˈkɑmpɫəmɛnt/",
        "zh": "n. 讚美",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20776,
        "en": "complimentary",
        "kk": "",
        "zh": "adj. 免費的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20777,
        "en": "comply",
        "kk": "",
        "zh": "v. 遵守",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20778,
        "en": "component",
        "kk": "/kəmˈpoʊnənt/",
        "zh": "n. 零件",
        "unit": 15
    },
    {
        "id": 20779,
        "en": "compose",
        "kk": "/kəmˈpoʊz/",
        "zh": "v. 組成",
        "unit": 15,
        "example": "He composed himself.",
        "exampleZh": "他鎮定下來。"
    },
    {
        "id": 20780,
        "en": "composer",
        "kk": "/kəmˈpoʊzɝ/",
        "zh": "n. 作曲家",
        "unit": 15,
        "example": "Composers create music.",
        "exampleZh": "作曲家創作音樂。"
    },
    {
        "id": 20781,
        "en": "composition",
        "kk": "/ˌkɑmpəˈzɪʃən/",
        "zh": "n. 作文",
        "unit": 15,
        "example": "It's an excellent composition.",
        "exampleZh": "這是一首優秀的作品。"
    },
    {
        "id": 20782,
        "en": "compound",
        "kk": "/ˈkɑmpaʊnd/",
        "zh": "n. 混合物",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20783,
        "en": "comprehend",
        "kk": "/ˌkɑmpɹiˈhɛnd/",
        "zh": "v. 理解",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20784,
        "en": "comprehension",
        "kk": "/ˌkɑmpɹiˈhɛnʃən/",
        "zh": "n. 理解",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20785,
        "en": "comprehensive",
        "kk": "/ˌkɑmpɹiˈhɛnsɪv/",
        "zh": "adj. 全面的",
        "unit": 15,
        "example": "a comprehensive collection of photographs",
        "exampleZh": "全面的照片集"
    },
    {
        "id": 20786,
        "en": "compress",
        "kk": "",
        "zh": "v. 壓縮",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20787,
        "en": "comprise",
        "kk": "/kəmˈpɹaɪz/",
        "zh": "v. 包含",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20788,
        "en": "compromise",
        "kk": "/ˈkɑmpɹəˌmaɪz/",
        "zh": "n. 妥協",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20789,
        "en": "compulsory",
        "kk": "",
        "zh": "adj. 義務的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20790,
        "en": "compute",
        "kk": "/kəmˈpjut/",
        "zh": "v. 計算",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20791,
        "en": "computer",
        "kk": "/kəmˈpjutɝ/",
        "zh": "n. 電腦",
        "unit": 15
    },
    {
        "id": 20792,
        "en": "conceal",
        "kk": "/kənˈsiɫ/",
        "zh": "v. 隱藏",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20793,
        "en": "concede",
        "kk": "/kənˈsid/",
        "zh": "v. 退讓",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20794,
        "en": "conceit",
        "kk": "/kənˈsit/",
        "zh": "n. 自負",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20795,
        "en": "conceive",
        "kk": "/kənˈsiv/",
        "zh": "v. 構思",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20796,
        "en": "concentrate",
        "kk": "/ˈkɑnsənˌtɹeɪt/",
        "zh": "v. 集中",
        "unit": 15,
        "example": "Tom really concentrated.",
        "exampleZh": "湯姆真的很專注。"
    },
    {
        "id": 20797,
        "en": "concentration",
        "kk": "/ˌkɑnsənˈtɹeɪʃən/",
        "zh": "n. 集中",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20798,
        "en": "concept",
        "kk": "/ˈkɑnsɛpt/",
        "zh": "n. 概念",
        "unit": 15,
        "example": "What a crazy concept!",
        "exampleZh": "多麼瘋狂的概念啊！"
    },
    {
        "id": 20799,
        "en": "conception",
        "kk": "/kənˈsɛpʃən/",
        "zh": "n. 觀念",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20800,
        "en": "concern",
        "kk": "/kənˈsɝn/",
        "zh": "v. 關心",
        "unit": 15,
        "example": "She was concerned.",
        "exampleZh": "她很擔心。"
    },
    {
        "id": 20801,
        "en": "concerning",
        "kk": "/kənˈsɝnɪŋ/",
        "zh": "prep. 關於",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20802,
        "en": "concert",
        "kk": "/ˈkɑnsɝt/",
        "zh": "n. 音樂會",
        "unit": 15,
        "example": "Enjoy the concert.",
        "exampleZh": "欣賞音樂會。"
    },
    {
        "id": 20803,
        "en": "concession",
        "kk": "/kənˈsɛʃən/",
        "zh": "n. 讓步",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20804,
        "en": "concise",
        "kk": "/kənˈsaɪs/",
        "zh": "adj. 簡潔的",
        "unit": 15
    },
    {
        "id": 20805,
        "en": "conclude",
        "kk": "/kənˈkɫud/",
        "zh": "v. 結束",
        "unit": 15,
        "example": "The session was concluded.",
        "exampleZh": "會議結束。"
    },
    {
        "id": 20806,
        "en": "conclusion",
        "kk": "/kənˈkɫuʒən/",
        "zh": "n. 結論",
        "unit": 15,
        "example": "What is the conclusion?",
        "exampleZh": "結論是什麼？"
    },
    {
        "id": 20807,
        "en": "conclusive",
        "kk": "",
        "zh": "adj. 決定性的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20808,
        "en": "concrete",
        "kk": "/ˈkɑnkɹit/",
        "zh": "adj. 具體的",
        "unit": 15,
        "example": "He's a concrete person.",
        "exampleZh": "他是一個具體的人。"
    },
    {
        "id": 20809,
        "en": "concur",
        "kk": "",
        "zh": "v. 同意",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20810,
        "en": "condemn",
        "kk": "/kənˈdɛm/",
        "zh": "v. 譴責",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20811,
        "en": "condense",
        "kk": "/kənˈdɛns/",
        "zh": "v. 壓縮",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20812,
        "en": "condition",
        "kk": "/kənˈdɪʃən/",
        "zh": "n. 情況",
        "unit": 15,
        "example": "Fuck your conditions.",
        "exampleZh": "操你的條件。"
    },
    {
        "id": 20813,
        "en": "conduct",
        "kk": "/ˈkɑndəkt/",
        "zh": "v. 進行",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20814,
        "en": "conductor",
        "kk": "/kənˈdəktɝ/",
        "zh": "n. 指揮",
        "unit": 15,
        "example": "Ziri is a conductor.",
        "exampleZh": "齊裡是一位指揮家。"
    },
    {
        "id": 20815,
        "en": "cone",
        "kk": "/ˈkoʊn/",
        "zh": "n. 圓錐體",
        "unit": 15,
        "example": "Tom licked the ice cream cone.",
        "exampleZh": "湯姆舔了舔蛋捲冰淇淋。"
    },
    {
        "id": 20816,
        "en": "confer",
        "kk": "/kənˈfɝ/",
        "zh": "v. 協商",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20817,
        "en": "conference",
        "kk": "/ˈkɑnfɝəns/",
        "zh": "n. 會議",
        "unit": 15,
        "example": "a conference call",
        "exampleZh": "電話會議"
    },
    {
        "id": 20818,
        "en": "confess",
        "kk": "/kənˈfɛs/",
        "zh": "v. 承認",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20819,
        "en": "confession",
        "kk": "/kənˈfɛʃən/",
        "zh": "n. 承認",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20820,
        "en": "confide",
        "kk": "",
        "zh": "v. 吐露",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20821,
        "en": "confidence",
        "kk": "/ˈkɑnfədəns/",
        "zh": "n. 信心",
        "unit": 15,
        "example": "We gained confidence.",
        "exampleZh": "我們獲得了信心。"
    },
    {
        "id": 20822,
        "en": "confident",
        "kk": "/ˈkɑnfədənt/",
        "zh": "adj. 自信的",
        "unit": 15,
        "example": "Write confidently.",
        "exampleZh": "自信地寫作。"
    },
    {
        "id": 20823,
        "en": "confidential",
        "kk": "/ˌkɑnfəˈdɛnʃəɫ/",
        "zh": "adj. 機密的",
        "unit": 15,
        "example": "a confidential secretary",
        "exampleZh": "機要秘書"
    },
    {
        "id": 20824,
        "en": "configure",
        "kk": "",
        "zh": "v. 配置",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20825,
        "en": "confine",
        "kk": "/kənˈfaɪn/",
        "zh": "v. 限制",
        "unit": 15,
        "example": "Where did you confine them?",
        "exampleZh": "你把他們關在哪裡了？"
    },
    {
        "id": 20826,
        "en": "confirm",
        "kk": "/kənˈfɝm/",
        "zh": "v. 確認",
        "unit": 15,
        "example": "Mr. Baker's assistant telephoned to confirm his appointment with the chairman",
        "exampleZh": "貝克先生的助理打電話確認他與董事長的任命"
    },
    {
        "id": 20827,
        "en": "confirmation",
        "kk": "",
        "zh": "n. 確認",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20828,
        "en": "conflict",
        "kk": "/ˈkɑnfɫɪkt/",
        "zh": "n. 衝突",
        "unit": 15,
        "example": "parents' and children's interests sometimes conflict",
        "exampleZh": "父母和孩子的利益有時會發生衝突"
    },
    {
        "id": 20829,
        "en": "conform",
        "kk": "/kənˈfɔɹm/",
        "zh": "v. 遵守",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20830,
        "en": "conformity",
        "kk": "",
        "zh": "n. 遵從",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20831,
        "en": "confront",
        "kk": "/kənˈfɹənt/",
        "zh": "v. 面對",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20832,
        "en": "confrontation",
        "kk": "/ˌkɑnfɹənˈteɪʃən/",
        "zh": "n. 對抗",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20833,
        "en": "confuse",
        "kk": "/kənˈfjuz/",
        "zh": "v. 使困惑",
        "unit": 15,
        "example": "Pietro was confused.",
        "exampleZh": "彼得羅很困惑。"
    },
    {
        "id": 20834,
        "en": "confusion",
        "kk": "/kənˈfjuʒən/",
        "zh": "n. 困惑",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20835,
        "en": "congratulate",
        "kk": "/kənˈɡɹætʃəˌɫeɪt/",
        "zh": "v. 祝賀",
        "unit": 15,
        "example": "They congratulated me.",
        "exampleZh": "他們向我表示祝賀。"
    },
    {
        "id": 20836,
        "en": "congratulation",
        "kk": "/kənˌɡɹætʃəˈɫeɪʃən/",
        "zh": "n. 祝賀",
        "unit": 15
    },
    {
        "id": 20837,
        "en": "congregation",
        "kk": "",
        "zh": "n. 集合",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20838,
        "en": "congress",
        "kk": "/ˈkɑŋɡɹəs/",
        "zh": "n. 國會",
        "unit": 15,
        "example": "Congress refused to act.",
        "exampleZh": "國會拒絕採取行動。"
    },
    {
        "id": 20839,
        "en": "connect",
        "kk": "/kəˈnɛkt/",
        "zh": "v. 連接",
        "unit": 15,
        "example": "Tom has connected.",
        "exampleZh": "湯姆已連線。"
    },
    {
        "id": 20840,
        "en": "connection",
        "kk": "/kəˈnɛkʃən/",
        "zh": "n. 連接",
        "unit": 15,
        "example": "People need connection.",
        "exampleZh": "人們需要聯繫。"
    },
    {
        "id": 20841,
        "en": "conquer",
        "kk": "/ˈkɑŋkɝ/",
        "zh": "v. 征服",
        "unit": 15,
        "example": "Who conquered Peru?",
        "exampleZh": "誰征服了秘魯？"
    },
    {
        "id": 20842,
        "en": "conquest",
        "kk": "/ˈkɑŋkwɛst/",
        "zh": "n. 征服",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20843,
        "en": "conscience",
        "kk": "/ˈkɑnʃəns/",
        "zh": "n. 良心",
        "unit": 15,
        "example": "He had no conscience.",
        "exampleZh": "他沒有良心。"
    },
    {
        "id": 20844,
        "en": "conscientious",
        "kk": "/ˌkɑnʃiˈɛnʃəs/",
        "zh": "adj. 認真的",
        "unit": 15
    },
    {
        "id": 20845,
        "en": "conscious",
        "kk": "/ˈkɑnʃəs/",
        "zh": "adj. 有意識的",
        "unit": 15,
        "example": "Tom was conscious.",
        "exampleZh": "湯姆還有意識。"
    },
    {
        "id": 20846,
        "en": "consciousness",
        "kk": "",
        "zh": "n. 意識",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20847,
        "en": "consecutive",
        "kk": "",
        "zh": "adj. 連續的",
        "unit": 15,
        "example": "a consecutive clause",
        "exampleZh": "連續子句"
    },
    {
        "id": 20848,
        "en": "consensus",
        "kk": "/kənˈsɛnsəs/",
        "zh": "n. 共識",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20849,
        "en": "consent",
        "kk": "/kənˈsɛnt/",
        "zh": "n. 同意",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20850,
        "en": "consequence",
        "kk": "/ˈkɑnsəkwəns/",
        "zh": "n. 結果",
        "unit": 15,
        "example": "There are consequences.",
        "exampleZh": "這是有後果的。"
    },
    {
        "id": 20851,
        "en": "consequent",
        "kk": "/ˈkɑnsəkwənt/",
        "zh": "adj. 隨之發生的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20852,
        "en": "consequently",
        "kk": "",
        "zh": "adv. 因此",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20853,
        "en": "conservation",
        "kk": "/ˌkɑnsɝˈveɪʃən/",
        "zh": "n. 保存",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20854,
        "en": "conservative",
        "kk": "/kənˈsɝvətɪv/",
        "zh": "adj. 保守的",
        "unit": 15,
        "example": "We're conservatives.",
        "exampleZh": "我們是保守派。"
    },
    {
        "id": 20855,
        "en": "conserve",
        "kk": "/kənˈsɝv/",
        "zh": "v. 保存",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20856,
        "en": "consider",
        "kk": "/kənˈsɪdɝ/",
        "zh": "v. 考慮",
        "unit": 15,
        "example": "I consider him irresponsible",
        "exampleZh": "我認為他不負責任"
    },
    {
        "id": 20857,
        "en": "considerable",
        "kk": "/kənˈsɪdɝəbəɫ/",
        "zh": "adj. 相當大的",
        "unit": 15,
        "example": "a position of considerable influence",
        "exampleZh": "有相當影響力的地位"
    },
    {
        "id": 20858,
        "en": "considerably",
        "kk": "",
        "zh": "adv. 相當地",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20859,
        "en": "considerate",
        "kk": "/kənˈsɪdɝət/",
        "zh": "adj. 體貼的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20860,
        "en": "consideration",
        "kk": "/kənˌsɪdɝˈeɪʃən/",
        "zh": "n. 考慮",
        "unit": 15,
        "example": "For your consideration.",
        "exampleZh": "供您考慮。"
    },
    {
        "id": 20861,
        "en": "consist",
        "kk": "/kənˈsɪst/",
        "zh": "v. 組成",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20862,
        "en": "consistency",
        "kk": "",
        "zh": "n. 一致性",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20863,
        "en": "consistent",
        "kk": "/kənˈsɪstənt/",
        "zh": "adj. 一致的",
        "unit": 15,
        "example": "I trained consistently.",
        "exampleZh": "我堅持不懈地訓練。"
    },
    {
        "id": 20864,
        "en": "console",
        "kk": "/ˈkɑnsoʊɫ/",
        "zh": "v. 安慰",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20865,
        "en": "consolidate",
        "kk": "",
        "zh": "v. 鞏固",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20866,
        "en": "conspicuous",
        "kk": "",
        "zh": "adj. 顯著的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20867,
        "en": "conspiracy",
        "kk": "/kənˈspɪɹəsi/",
        "zh": "n. 陰謀",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20868,
        "en": "constant",
        "kk": "/ˈkɑnstənt/",
        "zh": "adj. 不斷的",
        "unit": 15,
        "example": "He spoke constantly.",
        "exampleZh": "他不停地說話。"
    },
    {
        "id": 20869,
        "en": "constantly",
        "kk": "",
        "zh": "adv. 經常地",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20870,
        "en": "constitute",
        "kk": "/ˈkɑnstəˌtut/",
        "zh": "v. 構成",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20871,
        "en": "constitution",
        "kk": "/ˌkɑnstəˈtuʃən/",
        "zh": "n. 憲法",
        "unit": 15,
        "example": "Algeria has a constitution.",
        "exampleZh": "阿爾及利亞有憲法。"
    },
    {
        "id": 20872,
        "en": "constraint",
        "kk": "",
        "zh": "n. 限制",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20873,
        "en": "construct",
        "kk": "/ˈkɑnstɹəkt/",
        "zh": "v. 建造",
        "unit": 15,
        "example": "Ideas are mental constructs.",
        "exampleZh": "想法是心理構造。"
    },
    {
        "id": 20874,
        "en": "construction",
        "kk": "/kənˈstɹəkʃən/",
        "zh": "n. 建設",
        "unit": 15,
        "example": "I worked in construction.",
        "exampleZh": "我從事建築工作。"
    },
    {
        "id": 20875,
        "en": "constructive",
        "kk": "/kənˈstɹəktɪv/",
        "zh": "adj. 建設性的",
        "unit": 15,
        "example": "Fyodor got constructive criticism.",
        "exampleZh": "費奧多爾得到了建設性的批評。"
    },
    {
        "id": 20876,
        "en": "consult",
        "kk": "/kənˈsəɫt/",
        "zh": "v. 請教",
        "unit": 15,
        "example": "Tom was consulted.",
        "exampleZh": "有人諮詢了湯姆。"
    },
    {
        "id": 20877,
        "en": "consultant",
        "kk": "/kənˈsəɫtənt/",
        "zh": "n. 顧問",
        "unit": 15,
        "example": "she is currently a self-employed business consultant",
        "exampleZh": "她目前是個人商業顧問"
    },
    {
        "id": 20878,
        "en": "consultation",
        "kk": "/ˌkɑnsəɫˈteɪʃən/",
        "zh": "n. 諮詢",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20879,
        "en": "consume",
        "kk": "/kənˈsum/",
        "zh": "v. 消耗",
        "unit": 15,
        "example": "Time consumes all things.",
        "exampleZh": "時間會吞噬一切。"
    },
    {
        "id": 20880,
        "en": "consumer",
        "kk": "/kənˈsumɝ/",
        "zh": "n. 消費者",
        "unit": 15,
        "example": "consumer demand",
        "exampleZh": "消費者需求"
    },
    {
        "id": 20881,
        "en": "consumption",
        "kk": "/kənˈsəmpʃən/",
        "zh": "n. 消費",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20882,
        "en": "contact",
        "kk": "/ˈkɑnˌtækt/",
        "zh": "v. 接觸",
        "unit": 15,
        "example": "contact dermatitis",
        "exampleZh": "接觸性皮膚炎"
    },
    {
        "id": 20883,
        "en": "contain",
        "kk": "/kənˈteɪn/",
        "zh": "v. 包含",
        "unit": 15,
        "example": "she was scarcely able to contain herself as she waited to spill the beans",
        "exampleZh": "當她等待洩露秘密時，她幾乎無法控制自己"
    },
    {
        "id": 20884,
        "en": "container",
        "kk": "/kənˈteɪnɝ/",
        "zh": "n. 容器",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20885,
        "en": "contaminate",
        "kk": "/kənˈtæməˌneɪt/",
        "zh": "v. 汙染",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20886,
        "en": "contemplate",
        "kk": "/ˈkɑntəmˌpɫeɪt/",
        "zh": "v. 沉思",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20887,
        "en": "contemporary",
        "kk": "/kənˈtɛmpɝˌɛɹi/",
        "zh": "adj. 當代的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20888,
        "en": "contempt",
        "kk": "/kənˈtɛmpt/",
        "zh": "n. 輕視",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20889,
        "en": "contend",
        "kk": "/kənˈtɛnd/",
        "zh": "v. 競爭",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20890,
        "en": "content",
        "kk": "/ˈkɑntɛnt/",
        "zh": "n. 內容",
        "unit": 15,
        "example": "Dmitri was contented.",
        "exampleZh": "德米特里很滿意。"
    },
    {
        "id": 20891,
        "en": "contention",
        "kk": "",
        "zh": "n. 爭論",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20892,
        "en": "contest",
        "kk": "/ˈkɑntɛst/",
        "zh": "n. 比賽",
        "unit": 15,
        "example": "He won the contest.",
        "exampleZh": "他贏得了比賽。"
    },
    {
        "id": 20893,
        "en": "context",
        "kk": "/ˈkɑntɛkst/",
        "zh": "n. 背景",
        "unit": 15,
        "example": "What's the context?",
        "exampleZh": "背景是什麼？"
    },
    {
        "id": 20894,
        "en": "continent",
        "kk": "/ˈkɑntənənt/",
        "zh": "n. 大陸",
        "unit": 15,
        "example": "Europe is a continent.",
        "exampleZh": "歐洲是一個大陸。"
    },
    {
        "id": 20895,
        "en": "contingency",
        "kk": "",
        "zh": "n. 意外事故",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20896,
        "en": "continue",
        "kk": "/kənˈtɪnju/",
        "zh": "v. 繼續",
        "unit": 15,
        "example": "they have indicated their willingness to continue in office",
        "exampleZh": "他們已表示願意繼續任職"
    },
    {
        "id": 20897,
        "en": "continuous",
        "kk": "/kənˈtɪnjuəs/",
        "zh": "adj. 連續的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20898,
        "en": "contract",
        "kk": "/ˈkɑnˌtɹækt/",
        "zh": "n. 合約",
        "unit": 15,
        "example": "South can make the contract with correct play",
        "exampleZh": "南方可以透過正確的表現來簽訂合約"
    },
    {
        "id": 20899,
        "en": "contractor",
        "kk": "/ˈkɑnˌtɹæktɝ/",
        "zh": "n. 承包商",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20900,
        "en": "contradict",
        "kk": "/ˌkɑntɹəˈdɪkt/",
        "zh": "v. 反駁",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20901,
        "en": "contradiction",
        "kk": "/ˌkɑntɹəˈdɪkʃən/",
        "zh": "n. 矛盾",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20902,
        "en": "contrary",
        "kk": "/ˈkɑntɹɛɹi/",
        "zh": "adj. 相反的",
        "unit": 15,
        "example": "I know nothing to the contrary.",
        "exampleZh": "我不知道相反的情況。"
    },
    {
        "id": 20903,
        "en": "contrast",
        "kk": "/ˈkɑntɹæst/",
        "zh": "n. 對比",
        "unit": 15,
        "example": "Red contrasts well with blue.",
        "exampleZh": "紅色與藍色形成鮮明對比。"
    },
    {
        "id": 20904,
        "en": "contribute",
        "kk": "/kənˈtɹɪbjut/",
        "zh": "v. 貢獻",
        "unit": 15,
        "example": "Anyone may contribute.",
        "exampleZh": "任何人都可以做出貢獻。"
    },
    {
        "id": 20905,
        "en": "contribution",
        "kk": "/ˌkɑntɹəbˈjuʃən/",
        "zh": "n. 貢獻",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20906,
        "en": "contributor",
        "kk": "",
        "zh": "n. 貢獻者",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20907,
        "en": "contrive",
        "kk": "",
        "zh": "v. 發明",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20908,
        "en": "control",
        "kk": "/kənˈtɹoʊɫ/",
        "zh": "v. 控制",
        "unit": 15,
        "example": "passport control",
        "exampleZh": "護照檢查"
    },
    {
        "id": 20909,
        "en": "controversial",
        "kk": "/ˌkɑntɹəˈvɝʃəɫ/",
        "zh": "adj. 有爭議的",
        "unit": 15
    },
    {
        "id": 20910,
        "en": "controversy",
        "kk": "/ˈkɑntɹəˌvɝsi/",
        "zh": "n. 爭議",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20911,
        "en": "convene",
        "kk": "",
        "zh": "v. 召集",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20912,
        "en": "convenience",
        "kk": "/kənˈvinjəns/",
        "zh": "n. 便利",
        "unit": 15,
        "example": "the convenience of a portable phone",
        "exampleZh": "手機的便利性"
    },
    {
        "id": 20913,
        "en": "convenient",
        "kk": "/kənˈvinjənt/",
        "zh": "adj. 方便的",
        "unit": 15,
        "example": "the 34-story building is convenient to downtown",
        "exampleZh": "34層大樓，去市中心很方便"
    },
    {
        "id": 20914,
        "en": "convention",
        "kk": "/kənˈvɛnʃən/",
        "zh": "n. 慣例",
        "unit": 15,
        "example": "I shit on conventions.",
        "exampleZh": "我討厭慣例。"
    },
    {
        "id": 20915,
        "en": "conventional",
        "kk": "/kənˈvɛnʃənəɫ/",
        "zh": "adj. 傳統的",
        "unit": 15,
        "example": "Conventional oil is cheaper.",
        "exampleZh": "傳統石油較便宜。"
    },
    {
        "id": 20916,
        "en": "converge",
        "kk": "",
        "zh": "v. 匯聚",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20917,
        "en": "conversation",
        "kk": "/ˌkɑnvɝˈseɪʃən/",
        "zh": "n. 對話",
        "unit": 15
    },
    {
        "id": 20918,
        "en": "converse",
        "kk": "/ˈkɑnvɝs/",
        "zh": "v. 交談",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20919,
        "en": "conversion",
        "kk": "",
        "zh": "n. 轉換",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20920,
        "en": "convert",
        "kk": "/ˈkɑnvɝt/",
        "zh": "v. 轉換",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20921,
        "en": "convey",
        "kk": "/kənˈveɪ/",
        "zh": "v. 傳達",
        "unit": 15,
        "example": "I conveyed the message to him.",
        "exampleZh": "我把這個消息轉達給了他。"
    },
    {
        "id": 20922,
        "en": "convict",
        "kk": "/ˈkɑnvɪkt/",
        "zh": "v. 定罪",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20923,
        "en": "conviction",
        "kk": "/kənˈvɪkʃən/",
        "zh": "n. 確信",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20924,
        "en": "convince",
        "kk": "/kənˈvɪns/",
        "zh": "v. 使確信",
        "unit": 15,
        "example": "Tom was convinced.",
        "exampleZh": "湯姆被說服了。"
    },
    {
        "id": 20925,
        "en": "convincing",
        "kk": "",
        "zh": "adj. 令人信服的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20926,
        "en": "cook",
        "kk": "/ˈkʊk/",
        "zh": "v. 烹調",
        "unit": 15,
        "example": "a short order cook",
        "exampleZh": "速食廚師"
    },
    {
        "id": 20927,
        "en": "cool",
        "kk": "/ˈkuɫ/",
        "zh": "adj. 涼爽的",
        "unit": 15,
        "example": "he made no concessions to fashion, yet somehow he was hip and cool",
        "exampleZh": "他對時尚毫不讓步，但不知怎的，他又時髦又酷"
    },
    {
        "id": 20928,
        "en": "cooperate",
        "kk": "/ˈkwɑpɝˌeɪt/",
        "zh": "v. 合作",
        "unit": 15,
        "example": "Tom has cooperated.",
        "exampleZh": "湯姆已經合作了。"
    },
    {
        "id": 20929,
        "en": "cooperation",
        "kk": "/ˌkwɑpɝˈeɪʃən/",
        "zh": "n. 合作",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20930,
        "en": "cooperative",
        "kk": "/koʊˈɑpɝˌeɪtɪv/",
        "zh": "adj. 合作的",
        "unit": 15,
        "example": "Was Tom cooperative?",
        "exampleZh": "湯姆合作嗎？"
    },
    {
        "id": 20931,
        "en": "coordinate",
        "kk": "/koʊˈɔɹdəˌneɪt/",
        "zh": "v. 協調",
        "unit": 15
    },
    {
        "id": 20932,
        "en": "coordination",
        "kk": "",
        "zh": "n. 協調",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20933,
        "en": "cop",
        "kk": "/ˈkɑp/",
        "zh": "n. 警察",
        "unit": 15,
        "example": "Cops love doughnuts.",
        "exampleZh": "警察喜歡甜甜圈。"
    },
    {
        "id": 20934,
        "en": "cope",
        "kk": "/ˈkoʊp/",
        "zh": "v. 應付",
        "unit": 15,
        "example": "I cope with stress.",
        "exampleZh": "我應對壓力。"
    },
    {
        "id": 20935,
        "en": "copy",
        "kk": "/ˈkɑpi/",
        "zh": "n. 副本",
        "unit": 15,
        "example": "this is Edwards, do you copy, over",
        "exampleZh": "這是愛德華茲，聽到了嗎，結束"
    },
    {
        "id": 20936,
        "en": "copyright",
        "kk": "/ˈkɑpiˌɹaɪt/",
        "zh": "n. 版權",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20937,
        "en": "core",
        "kk": "/ˈkɔɹ/",
        "zh": "n. 核心",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20938,
        "en": "corner",
        "kk": "/ˈkɔɹnɝ/",
        "zh": "n. 角落",
        "unit": 15
    },
    {
        "id": 20939,
        "en": "corporate",
        "kk": "/ˈkɔɹpɝət/",
        "zh": "adj. 公司的",
        "unit": 15
    },
    {
        "id": 20940,
        "en": "corporation",
        "kk": "/ˌkɔɹpɝˈeɪʃən/",
        "zh": "n. 公司；法人",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20941,
        "en": "corps",
        "kk": "/ˈkɔɹ/",
        "zh": "n. 部隊",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20942,
        "en": "correct",
        "kk": "/kɝˈɛkt/",
        "zh": "adj. 正確的",
        "unit": 15,
        "example": "he was a polite man, invariably correct and pleasant with Mrs. Collins",
        "exampleZh": "他是一個有禮貌的人，對柯林斯夫人總是正確且令人愉快"
    },
    {
        "id": 20943,
        "en": "correction",
        "kk": "",
        "zh": "n. 訂正",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20944,
        "en": "correlate",
        "kk": "",
        "zh": "v. 使相關",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20945,
        "en": "correlation",
        "kk": "",
        "zh": "n. 相關性",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20946,
        "en": "correspond",
        "kk": "/ˌkɔɹəˈspɑnd/",
        "zh": "v. 符合",
        "unit": 15,
        "example": "Tom corresponded with Mary.",
        "exampleZh": "湯姆與瑪麗通信。"
    },
    {
        "id": 20947,
        "en": "correspondence",
        "kk": "/ˌkɔɹəˈspɑndəns/",
        "zh": "n. 通信；信件",
        "unit": 15,
        "example": "his wife dealt with his private correspondence",
        "exampleZh": "他的妻子處理他的私人信件"
    },
    {
        "id": 20948,
        "en": "correspondent",
        "kk": "/ˌkɔɹəˈspɑndənt/",
        "zh": "n. 通訊記者",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20949,
        "en": "corridor",
        "kk": "/ˈkɔɹədɝ/",
        "zh": "n. 走廊",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20950,
        "en": "corrupt",
        "kk": "/kɝˈəpt/",
        "zh": "adj. 腐敗的",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20951,
        "en": "corruption",
        "kk": "/kɝˈəpʃən/",
        "zh": "n. 腐敗",
        "unit": 15,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20952,
        "en": "cost",
        "kk": "/ˈkɑst/",
        "zh": "n. 成本",
        "unit": 15,
        "example": "if you want to own an island, it'll cost you",
        "exampleZh": "如果你想擁有一座島嶼，你就得付出代價"
    },
    {
        "id": 20953,
        "en": "costly",
        "kk": "/ˈkɑstɫi/",
        "zh": "adj. 昂貴的",
        "unit": 16,
        "example": "the government's biggest and most costly mistake",
        "exampleZh": "政府最大且代價最高的錯誤"
    },
    {
        "id": 20954,
        "en": "costume",
        "kk": "/ˈkɑstum/",
        "zh": "n. 服裝",
        "unit": 16,
        "example": "I know this costume.",
        "exampleZh": "我認識這套服裝。"
    },
    {
        "id": 20955,
        "en": "cottage",
        "kk": "/ˈkɑtədʒ/",
        "zh": "n. 小屋",
        "unit": 16,
        "example": "Tom built this cottage.",
        "exampleZh": "湯姆建造了這座小屋。"
    },
    {
        "id": 20956,
        "en": "cotton",
        "kk": "/ˈkɑtən/",
        "zh": "n. 棉花",
        "unit": 16
    },
    {
        "id": 20957,
        "en": "couch",
        "kk": "/ˈkaʊtʃ/",
        "zh": "n. 沙發",
        "unit": 16,
        "example": "This couch is comfy.",
        "exampleZh": "這個沙發很舒服。"
    },
    {
        "id": 20958,
        "en": "cough",
        "kk": "/ˈkɑf/",
        "zh": "v. 咳嗽",
        "unit": 16,
        "example": "she gave a discreet cough",
        "exampleZh": "她小心翼翼地咳嗽了一聲"
    },
    {
        "id": 20959,
        "en": "council",
        "kk": "/ˈkaʊnsəɫ/",
        "zh": "n. 議會",
        "unit": 16,
        "example": "He worked for the council.",
        "exampleZh": "他為議會工作。"
    },
    {
        "id": 20960,
        "en": "counsel",
        "kk": "/ˈkaʊnsəɫ/",
        "zh": "n. 建議",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20961,
        "en": "counseling",
        "kk": "",
        "zh": "n. 輔導",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20962,
        "en": "counselor",
        "kk": "/ˈkaʊnsəɫɝ/",
        "zh": "n. 顧問",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20963,
        "en": "count",
        "kk": "/ˈkaʊnt/",
        "zh": "v. 計算",
        "unit": 16,
        "example": "I count myself fortunate to have known him",
        "exampleZh": "我認為自己很幸運能夠認識他"
    },
    {
        "id": 20964,
        "en": "counter",
        "kk": "/ˈkaʊntɝ/",
        "zh": "n. 櫃台",
        "unit": 16,
        "example": "Pay at the counter.",
        "exampleZh": "在櫃檯付款。"
    },
    {
        "id": 20965,
        "en": "counterpart",
        "kk": "/ˈkaʊntɝˌpɑɹt/",
        "zh": "n. 對應的人或物",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20966,
        "en": "country",
        "kk": "/ˈkəntɹi/",
        "zh": "n. 國家",
        "unit": 16,
        "example": "Steinbeck country includes the Monterey Peninsula",
        "exampleZh": "斯坦貝克國家包括蒙特利半島"
    },
    {
        "id": 20967,
        "en": "countryside",
        "kk": "/ˈkəntɹiˌsaɪd/",
        "zh": "n. 鄉村",
        "unit": 16
    },
    {
        "id": 20968,
        "en": "county",
        "kk": "/ˈkaʊni/",
        "zh": "n. 縣",
        "unit": 16,
        "example": "I live in Yolo County.",
        "exampleZh": "我住在約洛縣。"
    },
    {
        "id": 20969,
        "en": "couple",
        "kk": "/ˈkəpəɫ/",
        "zh": "n. 夫婦",
        "unit": 16,
        "example": "a honeymoon couple",
        "exampleZh": "一對蜜月夫婦"
    },
    {
        "id": 20970,
        "en": "courage",
        "kk": "/ˈkɝədʒ/",
        "zh": "n. 勇氣",
        "unit": 16
    },
    {
        "id": 20971,
        "en": "courier",
        "kk": "",
        "zh": "n. 快遞員",
        "unit": 16,
        "example": "the check was dispatched by courier",
        "exampleZh": "支票是透過快遞寄出的"
    },
    {
        "id": 20972,
        "en": "course",
        "kk": "/ˈkɔɹs/",
        "zh": "n. 課程",
        "unit": 16,
        "example": "the doctor prescribed a course of antibiotics",
        "exampleZh": "醫生開了一個療程的抗生素"
    },
    {
        "id": 20973,
        "en": "court",
        "kk": "/ˈkɔɹt/",
        "zh": "n. 法庭",
        "unit": 16,
        "example": "I prefer an indoor court",
        "exampleZh": "我比較喜歡室內球場"
    },
    {
        "id": 20974,
        "en": "courtesy",
        "kk": "/ˈkɝtəsi/",
        "zh": "n. 禮貌",
        "unit": 16,
        "example": "Have some courtesy.",
        "exampleZh": "有點禮貌吧"
    },
    {
        "id": 20975,
        "en": "cover",
        "kk": "/ˈkəvɝ/",
        "zh": "v. 覆蓋",
        "unit": 16,
        "example": "I moved in front of Hawk to cover him as he reloaded",
        "exampleZh": "當霍克重新裝彈時，我走到他前面掩護他"
    },
    {
        "id": 20976,
        "en": "coverage",
        "kk": "/ˈkəvɝədʒ/",
        "zh": "n. 涵蓋範圍；保險範圍",
        "unit": 16,
        "example": "a network of eighty transmitters would give nationwide coverage",
        "exampleZh": "由八十個發射機組成的網路將覆蓋全國"
    },
    {
        "id": 20977,
        "en": "coward",
        "kk": "/ˈkaʊɝd/",
        "zh": "n. 懦夫",
        "unit": 16,
        "example": "Archers are cowards.",
        "exampleZh": "弓箭手都是膽小鬼。"
    },
    {
        "id": 20978,
        "en": "crack",
        "kk": "/ˈkɹæk/",
        "zh": "v. 破裂",
        "unit": 16,
        "example": "Ziri heard cracks.",
        "exampleZh": "茲瑞聽到了破裂聲。"
    },
    {
        "id": 20979,
        "en": "craft",
        "kk": "/ˈkɹæft/",
        "zh": "n. 工藝",
        "unit": 16,
        "example": "This is a nice craft.",
        "exampleZh": "這是一門不錯的工藝品。"
    },
    {
        "id": 20980,
        "en": "crash",
        "kk": "/ˈkɹæʃ/",
        "zh": "v. 碰撞",
        "unit": 16,
        "example": "Firefox has crashed.",
        "exampleZh": "火狐瀏覽器崩潰了。"
    },
    {
        "id": 20981,
        "en": "crawl",
        "kk": "/ˈkɹɔɫ/",
        "zh": "v. 爬行",
        "unit": 16,
        "example": "Leonid crawled away.",
        "exampleZh": "列昂尼德爬走了。"
    },
    {
        "id": 20982,
        "en": "crazy",
        "kk": "/ˈkɹeɪzi/",
        "zh": "adj. 瘋狂的",
        "unit": 16,
        "example": "I'm crazy about Cindy",
        "exampleZh": "我為辛迪瘋狂"
    },
    {
        "id": 20983,
        "en": "create",
        "kk": "/kɹiˈeɪt/",
        "zh": "v. 創造",
        "unit": 16,
        "example": "God created people.",
        "exampleZh": "神創造了人。"
    },
    {
        "id": 20984,
        "en": "creation",
        "kk": "/kɹiˈeɪʃən/",
        "zh": "n. 創造",
        "unit": 16,
        "example": "God is not his creation.",
        "exampleZh": "上帝不是祂的創造物。"
    },
    {
        "id": 20985,
        "en": "creative",
        "kk": "/kɹiˈeɪtɪv/",
        "zh": "adj. 有創造力的",
        "unit": 16,
        "example": "creative writing",
        "exampleZh": "創意寫作"
    },
    {
        "id": 20986,
        "en": "creativity",
        "kk": "/ˌkɹieɪˈtɪvəti/",
        "zh": "n. 創造力",
        "unit": 16,
        "example": "Unleash your creativity!",
        "exampleZh": "釋放你的創造力！"
    },
    {
        "id": 20987,
        "en": "creator",
        "kk": "/kɹiˈeɪtɝ/",
        "zh": "n. 創造者",
        "unit": 16,
        "example": "God is the creator.",
        "exampleZh": "神是創造者。"
    },
    {
        "id": 20988,
        "en": "creature",
        "kk": "/ˈkɹitʃɝ/",
        "zh": "n. 生物",
        "unit": 16,
        "example": "He saw the creature.",
        "exampleZh": "他看到了這個生物。"
    },
    {
        "id": 20989,
        "en": "credential",
        "kk": "",
        "zh": "n. 憑證",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20990,
        "en": "credit",
        "kk": "/ˈkɹɛdət/",
        "zh": "n. 信用",
        "unit": 16,
        "example": "I have bad credit.",
        "exampleZh": "我的信用不好。"
    },
    {
        "id": 20991,
        "en": "crew",
        "kk": "/ˈkɹu/",
        "zh": "n. 全體人員",
        "unit": 16,
        "example": "The crew is large.",
        "exampleZh": "船員規模很大。"
    },
    {
        "id": 20992,
        "en": "crime",
        "kk": "/ˈkɹaɪm/",
        "zh": "n. 犯罪",
        "unit": 16
    },
    {
        "id": 20993,
        "en": "criminal",
        "kk": "/ˈkɹɪmənəɫ/",
        "zh": "adj. 犯罪的",
        "unit": 16,
        "example": "They're criminals.",
        "exampleZh": "他們是罪犯。"
    },
    {
        "id": 20994,
        "en": "cripple",
        "kk": "/ˈkɹɪpəɫ/",
        "zh": "v. 使殘廢",
        "unit": 16,
        "example": "You crippled Mina.",
        "exampleZh": "你把米娜弄殘了。"
    },
    {
        "id": 20995,
        "en": "crisis",
        "kk": "/ˈkɹaɪsəs/",
        "zh": "n. 危機",
        "unit": 16
    },
    {
        "id": 20996,
        "en": "crisp",
        "kk": "/ˈkɹɪsp/",
        "zh": "adj. 脆的",
        "unit": 16,
        "example": "a crisp autumn day",
        "exampleZh": "秋高氣爽的一天"
    },
    {
        "id": 20997,
        "en": "criteria",
        "kk": "",
        "zh": "n. 標準",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20998,
        "en": "criterion",
        "kk": "/kɹaɪˈtɪɹiən/",
        "zh": "n. 標準",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 20999,
        "en": "critic",
        "kk": "/ˈkɹɪtɪk/",
        "zh": "n. 評論家",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21000,
        "en": "critical",
        "kk": "/ˈkɹɪtɪkəɫ/",
        "zh": "adj. 批評的",
        "unit": 16,
        "example": "Safety is critical.",
        "exampleZh": "安全至關重要。"
    },
    {
        "id": 21001,
        "en": "criticism",
        "kk": "/ˈkɹɪtɪˌsɪzəm/",
        "zh": "n. 批評",
        "unit": 16,
        "example": "Yanni accepts criticism.",
        "exampleZh": "雅尼接受批評。"
    },
    {
        "id": 21002,
        "en": "criticize",
        "kk": "/ˈkɹɪtɪˌsaɪz/",
        "zh": "v. 批評",
        "unit": 16,
        "example": "She criticized him.",
        "exampleZh": "她批評他。"
    },
    {
        "id": 21003,
        "en": "crop",
        "kk": "/ˈkɹɑp/",
        "zh": "n. 農作物",
        "unit": 16,
        "example": "she has her hair cut in a short crop",
        "exampleZh": "她把頭髮剪成了短髮"
    },
    {
        "id": 21004,
        "en": "cross",
        "kk": "/ˈkɹɔs/",
        "zh": "v. 交叉",
        "unit": 16,
        "example": "she wore a cross around her neck",
        "exampleZh": "她脖子上戴著一個十字架"
    },
    {
        "id": 21005,
        "en": "crowd",
        "kk": "/ˈkɹaʊd/",
        "zh": "n. 人群",
        "unit": 16,
        "example": "he'd become just another face in the crowd",
        "exampleZh": "他變成了人群中的另一張臉孔"
    },
    {
        "id": 21006,
        "en": "crowded",
        "kk": "",
        "zh": "adj. 擁擠的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21007,
        "en": "crucial",
        "kk": "/ˈkɹuʃəɫ/",
        "zh": "adj. 決定性的",
        "unit": 16
    },
    {
        "id": 21008,
        "en": "crude",
        "kk": "/ˈkɹud/",
        "zh": "adj. 粗糙的",
        "unit": 16
    },
    {
        "id": 21009,
        "en": "cruel",
        "kk": "/ˈkɹuəɫ/",
        "zh": "adj. 殘忍的",
        "unit": 16,
        "example": "people who are cruel to animals",
        "exampleZh": "虐待動物的人"
    },
    {
        "id": 21010,
        "en": "cruise",
        "kk": "/ˈkɹuz/",
        "zh": "v. 巡航",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21011,
        "en": "crush",
        "kk": "/ˈkɹəʃ/",
        "zh": "v. 壓碎",
        "unit": 16,
        "example": "Jeans crush your balls.",
        "exampleZh": "牛仔褲會壓垮你的睪丸。"
    },
    {
        "id": 21012,
        "en": "cry",
        "kk": "/ˈkɹaɪ/",
        "zh": "v. 哭泣",
        "unit": 16,
        "example": "a cry of despair",
        "exampleZh": "絕望的呼喊"
    },
    {
        "id": 21013,
        "en": "crystal",
        "kk": "/ˈkɹɪstəɫ/",
        "zh": "n. 水晶",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21014,
        "en": "cube",
        "kk": "/ˈkjub/",
        "zh": "n. 立方體",
        "unit": 16,
        "example": "Two cubed is eight.",
        "exampleZh": "二的立方是八。"
    },
    {
        "id": 21015,
        "en": "cue",
        "kk": "/ˈkju/",
        "zh": "n. 暗示",
        "unit": 16,
        "example": "The cue ball is white.",
        "exampleZh": "主球是白色的。"
    },
    {
        "id": 21016,
        "en": "cultivate",
        "kk": "/ˈkəɫtəˌveɪt/",
        "zh": "v. 培養",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21017,
        "en": "cultivation",
        "kk": "",
        "zh": "n. 培養",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21018,
        "en": "cultural",
        "kk": "/ˈkəɫtʃɝəɫ/",
        "zh": "adj. 文化的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21019,
        "en": "culture",
        "kk": "/ˈkəɫtʃɝ/",
        "zh": "n. 文化",
        "unit": 16
    },
    {
        "id": 21020,
        "en": "cupboard",
        "kk": "/ˈkəbɝd/",
        "zh": "n. 櫥櫃",
        "unit": 16,
        "example": "The cupboard is full.",
        "exampleZh": "櫃子滿了。"
    },
    {
        "id": 21021,
        "en": "cure",
        "kk": "/ˈkjʊɹ/",
        "zh": "v. 治療",
        "unit": 16,
        "example": "he was beyond cure",
        "exampleZh": "他已經無法治癒了"
    },
    {
        "id": 21022,
        "en": "curiosity",
        "kk": "/ˌkjʊɹiˈɑsəti/",
        "zh": "n. 好奇心",
        "unit": 16,
        "example": "Curiosity replaced shock.",
        "exampleZh": "好奇取代了震驚。"
    },
    {
        "id": 21023,
        "en": "curious",
        "kk": "/ˈkjʊɹiəs/",
        "zh": "adj. 好奇的",
        "unit": 16,
        "example": "I began to be curious about the whereabouts of the bride and groom",
        "exampleZh": "我開始好奇新郎新娘的行蹤"
    },
    {
        "id": 21024,
        "en": "curl",
        "kk": "/ˈkɝɫ/",
        "zh": "v. 捲曲",
        "unit": 16,
        "example": "Fyodor cut his curls.",
        "exampleZh": "費奧多爾剪掉了他的捲髮。"
    },
    {
        "id": 21025,
        "en": "currency",
        "kk": "/ˈkɝənsi/",
        "zh": "n. 貨幣",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21026,
        "en": "current",
        "kk": "/ˈkɑɹənt/",
        "zh": "adj. 目前的",
        "unit": 16,
        "example": "Current times are tough.",
        "exampleZh": "當前形勢嚴峻。"
    },
    {
        "id": 21027,
        "en": "currently",
        "kk": "",
        "zh": "adv. 目前",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21028,
        "en": "curriculum",
        "kk": "/kɝˈɪkjəɫəm/",
        "zh": "n. 課程",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21029,
        "en": "curve",
        "kk": "/ˈkɝv/",
        "zh": "n. 曲線",
        "unit": 16,
        "example": "Why are bananas curved?",
        "exampleZh": "香蕉為什麼是彎的？"
    },
    {
        "id": 21030,
        "en": "custom",
        "kk": "/ˈkəstəm/",
        "zh": "n. 習俗",
        "unit": 16
    },
    {
        "id": 21031,
        "en": "customer",
        "kk": "/ˈkəstəmɝ/",
        "zh": "n. 顧客",
        "unit": 16,
        "example": "Mr. Harrison was a regular customer at the Golden Lion",
        "exampleZh": "哈里森先生是金獅酒店的常客"
    },
    {
        "id": 21032,
        "en": "customs",
        "kk": "/ˈkəstəmz/",
        "zh": "n. 海關",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21033,
        "en": "cut",
        "kk": "/ˈkət/",
        "zh": "v. 切割",
        "unit": 16,
        "example": "the country was cut into three parts",
        "exampleZh": "這個國家被分成三個部分"
    },
    {
        "id": 21034,
        "en": "cute",
        "kk": "/ˈkjut/",
        "zh": "adj. 可愛的",
        "unit": 16,
        "example": "the baby was so cute",
        "exampleZh": "寶寶太可愛了"
    },
    {
        "id": 21035,
        "en": "cycle",
        "kk": "/ˈsaɪkəɫ/",
        "zh": "n. 循環",
        "unit": 16,
        "example": "Cars repressed cycles.",
        "exampleZh": "汽車抑制了循環。"
    },
    {
        "id": 21036,
        "en": "cylinder",
        "kk": "",
        "zh": "n. 圓柱體",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21037,
        "en": "daily",
        "kk": "/ˈdeɪɫi/",
        "zh": "adj. 每天的",
        "unit": 16,
        "example": "boats can be rented for a daily rate",
        "exampleZh": "可按日租用船隻"
    },
    {
        "id": 21038,
        "en": "damage",
        "kk": "/ˈdæmədʒ/",
        "zh": "n. 損害",
        "unit": 16,
        "example": "bombing caused extensive damage to the town",
        "exampleZh": "轟炸對該鎮造成了嚴重破壞"
    },
    {
        "id": 21039,
        "en": "danger",
        "kk": "/ˈdeɪndʒɝ/",
        "zh": "n. 危險",
        "unit": 16,
        "example": "there was no danger of the champagne running out",
        "exampleZh": "沒有香檳用完的危險"
    },
    {
        "id": 21040,
        "en": "dangerous",
        "kk": "/ˈdeɪndʒɝəs/",
        "zh": "adj. 危險的",
        "unit": 16,
        "example": "a dangerous animal",
        "exampleZh": "危險的動物"
    },
    {
        "id": 21041,
        "en": "dare",
        "kk": "/ˈdɛɹ/",
        "zh": "v. 敢",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21042,
        "en": "dark",
        "kk": "/ˈdɑɹk/",
        "zh": "adj. 黑暗的",
        "unit": 16,
        "example": "he is dark on certain points of scripture",
        "exampleZh": "他對聖經的某些觀點很黑暗"
    },
    {
        "id": 21043,
        "en": "dash",
        "kk": "/ˈdæʃ/",
        "zh": "v. 猛衝",
        "unit": 16,
        "example": "Our hopes were dashed.",
        "exampleZh": "我們的希望破滅了。"
    },
    {
        "id": 21044,
        "en": "data",
        "kk": "/ˈdætə/",
        "zh": "n. 數據",
        "unit": 16
    },
    {
        "id": 21045,
        "en": "database",
        "kk": "",
        "zh": "n. 資料庫",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21046,
        "en": "date",
        "kk": "/ˈdeɪt/",
        "zh": "n. 日期",
        "unit": 16,
        "example": "they date the paintings to 1460–70",
        "exampleZh": "他們將這些畫作的年代定為 1460-70 年"
    },
    {
        "id": 21047,
        "en": "dawn",
        "kk": "/ˈdɔn/",
        "zh": "n. 黎明",
        "unit": 16,
        "example": "the rose-pink light of dawn",
        "exampleZh": "黎明的玫瑰粉色光芒"
    },
    {
        "id": 21048,
        "en": "dead",
        "kk": "/ˈdɛd/",
        "zh": "adj. 死的",
        "unit": 16,
        "example": "he has been dead for many years",
        "exampleZh": "他已經死很多年了"
    },
    {
        "id": 21049,
        "en": "deadline",
        "kk": "/ˈdɛdˌɫaɪn/",
        "zh": "n. 截止日期",
        "unit": 16,
        "example": "the deadline for submissions is February 5th",
        "exampleZh": "提交截止日期為2月5日"
    },
    {
        "id": 21050,
        "en": "deadly",
        "kk": "/ˈdɛdɫi/",
        "zh": "adj. 致命的",
        "unit": 16
    },
    {
        "id": 21051,
        "en": "deaf",
        "kk": "/ˈdɛf/",
        "zh": "adj. 聾的",
        "unit": 16,
        "example": "I'm a bit deaf so you'll have to speak up",
        "exampleZh": "我有點聾所以你得大聲說話"
    },
    {
        "id": 21052,
        "en": "deal",
        "kk": "/ˈdiɫ/",
        "zh": "n. 交易",
        "unit": 16,
        "example": "he lost a great deal of blood",
        "exampleZh": "他失血過多"
    },
    {
        "id": 21053,
        "en": "dealer",
        "kk": "/ˈdiɫɝ/",
        "zh": "n. 經銷商",
        "unit": 16,
        "example": "She's a drug dealer.",
        "exampleZh": "她是一名毒販。"
    },
    {
        "id": 21054,
        "en": "debate",
        "kk": "/dəˈbeɪt/",
        "zh": "n. 辯論",
        "unit": 16,
        "example": "the national debate on education",
        "exampleZh": "全國教育辯論"
    },
    {
        "id": 21055,
        "en": "debris",
        "kk": "",
        "zh": "n. 碎片",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21056,
        "en": "debt",
        "kk": "/ˈdɛt/",
        "zh": "n. 債務",
        "unit": 16
    },
    {
        "id": 21057,
        "en": "debut",
        "kk": "",
        "zh": "n. 初次登台",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21058,
        "en": "decade",
        "kk": "/ˈdɛkeɪd/",
        "zh": "n. 十年",
        "unit": 16,
        "example": "That was decades ago.",
        "exampleZh": "那是幾十年前的事了。"
    },
    {
        "id": 21059,
        "en": "decay",
        "kk": "/dɪˈkeɪ/",
        "zh": "v. 腐爛",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21060,
        "en": "deceit",
        "kk": "",
        "zh": "n. 欺騙",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21061,
        "en": "deceive",
        "kk": "/dɪˈsiv/",
        "zh": "v. 欺騙",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21062,
        "en": "decent",
        "kk": "/ˈdisənt/",
        "zh": "adj. 體面的",
        "unit": 16
    },
    {
        "id": 21063,
        "en": "decide",
        "kk": "/ˌdɪˈsaɪd/",
        "zh": "v. 決定",
        "unit": 16,
        "example": "we must decide the fates of the people who headed the coup",
        "exampleZh": "我們必須決定領導政變的人的命運"
    },
    {
        "id": 21064,
        "en": "decision",
        "kk": "/dɪˈsɪʒən/",
        "zh": "n. 決定",
        "unit": 16
    },
    {
        "id": 21065,
        "en": "decisive",
        "kk": "/dɪˈsaɪsɪv/",
        "zh": "adj. 決定性的",
        "unit": 16
    },
    {
        "id": 21066,
        "en": "deck",
        "kk": "/ˈdɛk/",
        "zh": "n. 甲板",
        "unit": 16,
        "example": "All hands on deck!",
        "exampleZh": "所有的人都在甲板上！"
    },
    {
        "id": 21067,
        "en": "declaration",
        "kk": "/ˌdɛkɫɝˈeɪʃən/",
        "zh": "n. 宣佈",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21068,
        "en": "declare",
        "kk": "/dɪˈkɫɛɹ/",
        "zh": "v. 宣佈",
        "unit": 16,
        "example": "Tom declared bankruptcy.",
        "exampleZh": "湯姆宣布破產。"
    },
    {
        "id": 21069,
        "en": "decline",
        "kk": "/dɪˈkɫaɪn/",
        "zh": "v. 下降",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21070,
        "en": "decorate",
        "kk": "/ˈdɛkɝˌeɪt/",
        "zh": "v. 裝飾",
        "unit": 16,
        "example": "Mary decorated it.",
        "exampleZh": "瑪麗裝飾了它。"
    },
    {
        "id": 21071,
        "en": "decoration",
        "kk": "/ˌdɛkɝˈeɪʃən/",
        "zh": "n. 裝飾",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21072,
        "en": "decrease",
        "kk": "/ˈdiˌkɹis/",
        "zh": "v. 減少",
        "unit": 16,
        "example": "He decreased its value.",
        "exampleZh": "他降低了它的價值。"
    },
    {
        "id": 21073,
        "en": "dedicate",
        "kk": "/ˈdɛdəˌkeɪt/",
        "zh": "v. 奉獻",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21074,
        "en": "dedication",
        "kk": "/ˌdɛdəˈkeɪʃən/",
        "zh": "n. 奉獻",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21075,
        "en": "deduct",
        "kk": "",
        "zh": "v. 扣除",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21076,
        "en": "deduction",
        "kk": "",
        "zh": "n. 扣除",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21077,
        "en": "deed",
        "kk": "/ˈdid/",
        "zh": "n. 行為",
        "unit": 16,
        "example": "Your deeds are wanton.",
        "exampleZh": "你的行為很肆意。"
    },
    {
        "id": 21078,
        "en": "deem",
        "kk": "/ˈdim/",
        "zh": "v. 認為",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21079,
        "en": "deep",
        "kk": "/ˈdip/",
        "zh": "adj. 深的",
        "unit": 16,
        "example": "a deep sleep",
        "exampleZh": "沉睡"
    },
    {
        "id": 21080,
        "en": "deepen",
        "kk": "/ˈdipən/",
        "zh": "v. 加深",
        "unit": 16,
        "example": "You deepened the holes.",
        "exampleZh": "你加深了洞。"
    },
    {
        "id": 21081,
        "en": "deeply",
        "kk": "",
        "zh": "adv. 深深地",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21082,
        "en": "deer",
        "kk": "/ˈdɪɹ/",
        "zh": "n. 鹿",
        "unit": 16,
        "example": "Deer remember faces.",
        "exampleZh": "鹿記得面孔。"
    },
    {
        "id": 21083,
        "en": "default",
        "kk": "",
        "zh": "n. 違約",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21084,
        "en": "defeat",
        "kk": "/dɪˈfit/",
        "zh": "v. 擊敗",
        "unit": 16,
        "example": "Karl was defeated.",
        "exampleZh": "卡爾被打敗了。"
    },
    {
        "id": 21085,
        "en": "defect",
        "kk": "/ˈdifɛkt/",
        "zh": "n. 缺點",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21086,
        "en": "defective",
        "kk": "",
        "zh": "adj. 有缺陷的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21087,
        "en": "defend",
        "kk": "/dɪˈfɛnd/",
        "zh": "v. 防禦",
        "unit": 16,
        "example": "Defend yourselves.",
        "exampleZh": "保衛自己。"
    },
    {
        "id": 21088,
        "en": "defendant",
        "kk": "",
        "zh": "n. 被告",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21089,
        "en": "defense",
        "kk": "/dɪˈfɛns/",
        "zh": "n. 防禦",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21090,
        "en": "defensive",
        "kk": "/dɪˈfɛnsɪv/",
        "zh": "adj. 防禦的",
        "unit": 16,
        "example": "They got defensive.",
        "exampleZh": "他們採取了防禦措施。"
    },
    {
        "id": 21091,
        "en": "defer",
        "kk": "",
        "zh": "v. 推遲",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21092,
        "en": "deficiency",
        "kk": "/dɪˈfɪʃənsi/",
        "zh": "n. 缺乏",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21093,
        "en": "deficit",
        "kk": "",
        "zh": "n. 赤字",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21094,
        "en": "define",
        "kk": "/dɪˈfaɪn/",
        "zh": "v. 定義",
        "unit": 16,
        "example": "His chin is defined.",
        "exampleZh": "他的下巴輪廓分明。"
    },
    {
        "id": 21095,
        "en": "definite",
        "kk": "/ˈdɛfənət/",
        "zh": "adj. 明確的",
        "unit": 16,
        "example": "Definitely try this.",
        "exampleZh": "一定要試試這個。"
    },
    {
        "id": 21096,
        "en": "definitely",
        "kk": "",
        "zh": "adv. 肯定地",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21097,
        "en": "definition",
        "kk": "/ˌdɛfəˈnɪʃən/",
        "zh": "n. 定義",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21098,
        "en": "degree",
        "kk": "/dɪˈɡɹi/",
        "zh": "n. 程度",
        "unit": 16
    },
    {
        "id": 21099,
        "en": "delay",
        "kk": "/dɪˈɫeɪ/",
        "zh": "v. 延遲",
        "unit": 16,
        "example": "I set off without delay",
        "exampleZh": "我毫不拖延地出發了"
    },
    {
        "id": 21100,
        "en": "delegate",
        "kk": "/ˈdɛɫəˌɡeɪt/",
        "zh": "v. 委派",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21101,
        "en": "delegation",
        "kk": "/ˌdɛɫəˈɡeɪʃən/",
        "zh": "n. 代表團",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21102,
        "en": "delete",
        "kk": "",
        "zh": "v. 刪除",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21103,
        "en": "deliberate",
        "kk": "/dɪˈɫɪbɝˌeɪt/",
        "zh": "adj. 故意的",
        "unit": 16
    },
    {
        "id": 21104,
        "en": "deliberately",
        "kk": "",
        "zh": "adv. 故意地",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21105,
        "en": "delicate",
        "kk": "/ˈdɛɫəkət/",
        "zh": "adj. 精緻的",
        "unit": 16,
        "example": "He has delicate hands.",
        "exampleZh": "他有一雙纖細的手。"
    },
    {
        "id": 21106,
        "en": "delicious",
        "kk": "/dɪˈɫɪʃəs/",
        "zh": "adj. 美味的",
        "unit": 16,
        "example": "delicious home-baked brown bread",
        "exampleZh": "美味的自製黑麵包"
    },
    {
        "id": 21107,
        "en": "delight",
        "kk": "/dɪˈɫaɪt/",
        "zh": "n. 高興",
        "unit": 16,
        "example": "Boris was delighted.",
        "exampleZh": "鮑里斯很高興。"
    },
    {
        "id": 21108,
        "en": "delightful",
        "kk": "/dɪˈɫaɪtfəɫ/",
        "zh": "adj. 令人愉快的",
        "unit": 16,
        "example": "Cats are delightful.",
        "exampleZh": "貓是令人愉快的。"
    },
    {
        "id": 21109,
        "en": "deliver",
        "kk": "/dɪˈɫɪvɝ/",
        "zh": "v. 遞送；交付",
        "unit": 16,
        "example": "deliver us from misery",
        "exampleZh": "救我們脫離苦難"
    },
    {
        "id": 21110,
        "en": "delivery",
        "kk": "/dɪˈɫɪvɝi/",
        "zh": "n. 遞送",
        "unit": 16,
        "example": "You have a delivery.",
        "exampleZh": "你有送貨。"
    },
    {
        "id": 21111,
        "en": "demand",
        "kk": "/dɪˈmænd/",
        "zh": "v. 要求",
        "unit": 16,
        "example": "Are you demanding?",
        "exampleZh": "你要求高嗎？"
    },
    {
        "id": 21112,
        "en": "demanding",
        "kk": "",
        "zh": "adj. 苛求的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21113,
        "en": "democracy",
        "kk": "/dɪˈmɑkɹəsi/",
        "zh": "n. 民主",
        "unit": 16,
        "example": "Democracy is dead.",
        "exampleZh": "民主已死。"
    },
    {
        "id": 21114,
        "en": "democrat",
        "kk": "/ˈdɛməˌkɹæt/",
        "zh": "n. 民主黨員",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21115,
        "en": "democratic",
        "kk": "/ˌdɛməˈkɹætɪk/",
        "zh": "adj. 民主的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21116,
        "en": "demographic",
        "kk": "",
        "zh": "adj. 人口統計的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21117,
        "en": "demolish",
        "kk": "",
        "zh": "v. 拆除",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21118,
        "en": "demonstrate",
        "kk": "/ˈdɛmənˌstɹeɪt/",
        "zh": "v. 示範；證明",
        "unit": 16,
        "example": "she began to demonstrate a new-found confidence",
        "exampleZh": "她開始展現新的自信"
    },
    {
        "id": 21119,
        "en": "demonstration",
        "kk": "/ˌdɛmənˈstɹeɪʃən/",
        "zh": "n. 示範",
        "unit": 16,
        "example": "He requested a demonstration.",
        "exampleZh": "他要求進行示威。"
    },
    {
        "id": 21120,
        "en": "denial",
        "kk": "/dɪˈnaɪəɫ/",
        "zh": "n. 否認",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21121,
        "en": "denounce",
        "kk": "/dɪˈnaʊns/",
        "zh": "v. 譴責",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21122,
        "en": "dense",
        "kk": "/ˈdɛns/",
        "zh": "adj. 密集的",
        "unit": 16,
        "example": "Dense clouds formed.",
        "exampleZh": "形成了濃密的雲層。"
    },
    {
        "id": 21123,
        "en": "density",
        "kk": "/ˈdɛnsəti/",
        "zh": "n. 密度",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21124,
        "en": "dentist",
        "kk": "/ˈdɛnɪst/",
        "zh": "n. 牙醫",
        "unit": 16,
        "example": "Maria is a dentist.",
        "exampleZh": "瑪麗亞是一名牙醫。"
    },
    {
        "id": 21125,
        "en": "deny",
        "kk": "/dɪˈnaɪ/",
        "zh": "v. 否認",
        "unit": 16,
        "example": "they deny any responsibility for the tragedy",
        "exampleZh": "他們否認對這場悲劇負有任何責任"
    },
    {
        "id": 21126,
        "en": "depart",
        "kk": "/dɪˈpɑɹt/",
        "zh": "v. 離開",
        "unit": 16,
        "example": "Tom departed last Monday.",
        "exampleZh": "湯姆上週一離開了。"
    },
    {
        "id": 21127,
        "en": "department",
        "kk": "/dɪˈpɑɹtmənt/",
        "zh": "n. 部門",
        "unit": 16,
        "example": "that's not my department",
        "exampleZh": "那不是我的部門"
    },
    {
        "id": 21128,
        "en": "departure",
        "kk": "/dɪˈpɑɹtʃɝ/",
        "zh": "n. 離開",
        "unit": 16,
        "example": "When is your departure?",
        "exampleZh": "你什麼時候出發？"
    },
    {
        "id": 21129,
        "en": "depend",
        "kk": "/dɪˈpɛnd/",
        "zh": "v. 依賴",
        "unit": 16,
        "example": "the kind of person you could depend on",
        "exampleZh": "你可以依賴什麼樣的人"
    },
    {
        "id": 21130,
        "en": "dependable",
        "kk": "/dɪˈpɛndəbəɫ/",
        "zh": "adj. 可靠的",
        "unit": 16,
        "example": "Tom was dependable.",
        "exampleZh": "湯姆很可靠。"
    },
    {
        "id": 21131,
        "en": "dependence",
        "kk": "",
        "zh": "n. 依賴",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21132,
        "en": "dependent",
        "kk": "/dɪˈpɛndənt/",
        "zh": "adj. 依賴的",
        "unit": 16,
        "example": "Tom has dependents.",
        "exampleZh": "湯姆有家屬。"
    },
    {
        "id": 21133,
        "en": "depict",
        "kk": "/dɪˈpɪkt/",
        "zh": "v. 描繪",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21134,
        "en": "deplete",
        "kk": "",
        "zh": "v. 耗盡",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21135,
        "en": "deploy",
        "kk": "",
        "zh": "v. 部署",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21136,
        "en": "deployment",
        "kk": "",
        "zh": "n. 部署",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21137,
        "en": "deposit",
        "kk": "/dəˈpɑzɪt/",
        "zh": "n. 訂金；存款",
        "unit": 16,
        "example": "a vault in which guests may deposit valuable property",
        "exampleZh": "客人可以存放貴重財產的金庫"
    },
    {
        "id": 21138,
        "en": "depreciate",
        "kk": "",
        "zh": "v. 貶值",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21139,
        "en": "depress",
        "kk": "/dɪˈpɹɛs/",
        "zh": "v. 使沮喪",
        "unit": 16,
        "example": "Was Tom depressed?",
        "exampleZh": "湯姆情緒低落嗎？"
    },
    {
        "id": 21140,
        "en": "depression",
        "kk": "/dɪˈpɹɛʃən/",
        "zh": "n. 沮喪",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21141,
        "en": "deprive",
        "kk": "/dɪˈpɹaɪv/",
        "zh": "v. 剝奪",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21142,
        "en": "depth",
        "kk": "/ˈdɛpθ/",
        "zh": "n. 深度",
        "unit": 16
    },
    {
        "id": 21143,
        "en": "deputy",
        "kk": "/ˈdɛpjəti/",
        "zh": "n. 副手",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21144,
        "en": "derive",
        "kk": "/dɝˈaɪv/",
        "zh": "v. 衍生",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21145,
        "en": "descend",
        "kk": "/dɪˈsɛnd/",
        "zh": "v. 下降",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21146,
        "en": "describe",
        "kk": "/dɪsˈkɹaɪb/",
        "zh": "v. 描述",
        "unit": 16,
        "example": "Describe your day.",
        "exampleZh": "描述一下你的一天。"
    },
    {
        "id": 21147,
        "en": "description",
        "kk": "/dɪsˈkɹɪpʃən/",
        "zh": "n. 描述",
        "unit": 16,
        "example": "I like that description.",
        "exampleZh": "我喜歡這個描述。"
    },
    {
        "id": 21148,
        "en": "desert",
        "kk": "/ˈdɛzɝt/",
        "zh": "n. 沙漠",
        "unit": 16,
        "example": "desert wastes",
        "exampleZh": "沙漠廢棄物"
    },
    {
        "id": 21149,
        "en": "deserve",
        "kk": "/dɪˈzɝv/",
        "zh": "v. 值得",
        "unit": 16,
        "example": "You deserve respect.",
        "exampleZh": "你值得尊重。"
    },
    {
        "id": 21150,
        "en": "design",
        "kk": "/dɪˈzaɪn/",
        "zh": "v. 設計",
        "unit": 16,
        "example": "good design can help the reader understand complicated information",
        "exampleZh": "好的設計可以幫助讀者理解複雜的訊息"
    },
    {
        "id": 21151,
        "en": "designate",
        "kk": "/ˈdɛzəɡˌneɪt/",
        "zh": "v. 指定",
        "unit": 16,
        "example": "the Director designate",
        "exampleZh": "候任主任"
    },
    {
        "id": 21152,
        "en": "designer",
        "kk": "/dɪˈzaɪnɝ/",
        "zh": "n. 設計師",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21153,
        "en": "desirable",
        "kk": "/dɪˈzaɪɝəbəɫ/",
        "zh": "adj. 理想的",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21154,
        "en": "desire",
        "kk": "/dɪˈzaɪɝ/",
        "zh": "v. 渴望",
        "unit": 16,
        "example": "they were clinging together in fierce mutual desire",
        "exampleZh": "他們懷著強烈的共同慾望緊緊地抱在一起"
    },
    {
        "id": 21155,
        "en": "desk",
        "kk": "/ˈdɛsk/",
        "zh": "n. 書桌",
        "unit": 16,
        "example": "the reception desk",
        "exampleZh": "接待處"
    },
    {
        "id": 21156,
        "en": "despair",
        "kk": "/dɪˈspɛɹ/",
        "zh": "n. 絕望",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21157,
        "en": "desperate",
        "kk": "/ˈdɛspɝɪt/",
        "zh": "adj. 絕望的",
        "unit": 16,
        "example": "We were desperate.",
        "exampleZh": "我們很絕望。"
    },
    {
        "id": 21158,
        "en": "despite",
        "kk": "/dɪˈspaɪt/",
        "zh": "prep. 儘管",
        "unit": 16,
        "example": "Despite the odds, they succeeded.",
        "exampleZh": "儘管困難重重，他們還是成功了。"
    },
    {
        "id": 21159,
        "en": "destination",
        "kk": "/ˌdɛstəˈneɪʃən/",
        "zh": "n. 目的地",
        "unit": 16,
        "example": "a popular destination for golfers",
        "exampleZh": "高爾夫球手的熱門目的地"
    },
    {
        "id": 21160,
        "en": "destiny",
        "kk": "/ˈdɛstəni/",
        "zh": "n. 命運",
        "unit": 16,
        "example": "",
        "exampleZh": ""
    },
    {
        "id": 21161,
        "en": "destroy",
        "kk": "/dɪˈstɹɔɪ/",
        "zh": "v. 破壞",
        "unit": 16,
        "example": "They destroy nature.",
        "exampleZh": "他們破壞大自然。"
    },
    {
        "id": 21162,
        "en": "destruction",
        "kk": "/dɪˈstɹəkʃən/",
        "zh": "n. 破壞",
        "unit": 16,
        "example": "This is total destruction.",
        "exampleZh": "這是徹底的毀滅。"
    }
];
