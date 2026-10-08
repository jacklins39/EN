// 多益常考單字 (單元 11-16)
const toeicWordsDB = [

    {
        "id": 20001,
        "en": "accommodate",
        "kk": "",
        "zh": "v. 容納；提供住宿",
        "unit": 11
    },
    {
        "id": 20002,
        "en": "acquire",
        "kk": "",
        "zh": "v. 取得；收購",
        "unit": 11
    },
    {
        "id": 20003,
        "en": "adjacent",
        "kk": "",
        "zh": "adj. 鄰近的",
        "unit": 11
    },
    {
        "id": 20004,
        "en": "administration",
        "kk": "",
        "zh": "n. 管理；行政",
        "unit": 11
    },
    {
        "id": 20005,
        "en": "advertisement",
        "kk": "",
        "zh": "n. 廣告",
        "unit": 11
    },
    {
        "id": 20006,
        "en": "agenda",
        "kk": "",
        "zh": "n. 議程",
        "unit": 11
    },
    {
        "id": 20007,
        "en": "agreement",
        "kk": "",
        "zh": "n. 協議；合約",
        "unit": 11
    },
    {
        "id": 20008,
        "en": "allocate",
        "kk": "",
        "zh": "v. 分配；撥出",
        "unit": 11
    },
    {
        "id": 20009,
        "en": "amendment",
        "kk": "",
        "zh": "n. 修正；修訂",
        "unit": 11
    },
    {
        "id": 20010,
        "en": "annual",
        "kk": "",
        "zh": "adj. 每年的",
        "unit": 11
    },
    {
        "id": 20011,
        "en": "applicant",
        "kk": "",
        "zh": "n. 申請人",
        "unit": 11
    },
    {
        "id": 20012,
        "en": "appointment",
        "kk": "",
        "zh": "n. 約會；任命",
        "unit": 11
    },
    {
        "id": 20013,
        "en": "appraisal",
        "kk": "",
        "zh": "n. 評估；考核",
        "unit": 11
    },
    {
        "id": 20014,
        "en": "approval",
        "kk": "",
        "zh": "n. 批准",
        "unit": 11
    },
    {
        "id": 20015,
        "en": "assemble",
        "kk": "",
        "zh": "v. 組裝；集合",
        "unit": 11
    },
    {
        "id": 20016,
        "en": "assess",
        "kk": "",
        "zh": "v. 評估",
        "unit": 11
    },
    {
        "id": 20017,
        "en": "asset",
        "kk": "",
        "zh": "n. 資產",
        "unit": 11
    },
    {
        "id": 20018,
        "en": "attach",
        "kk": "",
        "zh": "v. 附上；附加",
        "unit": 11
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
        "unit": 11
    },
    {
        "id": 20021,
        "en": "authorize",
        "kk": "",
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
        "unit": 11
    },
    {
        "id": 20024,
        "en": "balance",
        "kk": "",
        "zh": "n. 餘額；平衡",
        "unit": 11
    },
    {
        "id": 20025,
        "en": "banquet",
        "kk": "",
        "zh": "n. 宴會",
        "unit": 11
    },
    {
        "id": 20026,
        "en": "benefit",
        "kk": "",
        "zh": "n. 福利；利益",
        "unit": 11
    },
    {
        "id": 20027,
        "en": "bid",
        "kk": "",
        "zh": "n. 投標；v. 出價",
        "unit": 11
    },
    {
        "id": 20028,
        "en": "board",
        "kk": "",
        "zh": "n. 董事會；v. 登機",
        "unit": 11
    },
    {
        "id": 20029,
        "en": "booth",
        "kk": "",
        "zh": "n. 攤位；小隔間",
        "unit": 11
    },
    {
        "id": 20030,
        "en": "brochure",
        "kk": "",
        "zh": "n. 小冊子",
        "unit": 11
    },
    {
        "id": 20031,
        "en": "budget",
        "kk": "",
        "zh": "n. 預算",
        "unit": 11
    },
    {
        "id": 20032,
        "en": "bulletin",
        "kk": "",
        "zh": "n. 公告",
        "unit": 11
    },
    {
        "id": 20033,
        "en": "candidate",
        "kk": "",
        "zh": "n. 候選人；應徵者",
        "unit": 11
    },
    {
        "id": 20034,
        "en": "capacity",
        "kk": "",
        "zh": "n. 容量；能力",
        "unit": 11
    },
    {
        "id": 20035,
        "en": "cargo",
        "kk": "",
        "zh": "n. 貨物",
        "unit": 11
    },
    {
        "id": 20036,
        "en": "catalog",
        "kk": "",
        "zh": "n. 目錄",
        "unit": 11
    },
    {
        "id": 20037,
        "en": "catering",
        "kk": "",
        "zh": "n. 外燴服務",
        "unit": 11
    },
    {
        "id": 20038,
        "en": "certificate",
        "kk": "",
        "zh": "n. 證書",
        "unit": 11
    },
    {
        "id": 20039,
        "en": "clientele",
        "kk": "",
        "zh": "n. 客戶群",
        "unit": 11
    },
    {
        "id": 20040,
        "en": "colleague",
        "kk": "",
        "zh": "n. 同事",
        "unit": 11
    },
    {
        "id": 20041,
        "en": "commence",
        "kk": "",
        "zh": "v. 開始",
        "unit": 11
    },
    {
        "id": 20042,
        "en": "commission",
        "kk": "",
        "zh": "n. 佣金；委員會",
        "unit": 11
    },
    {
        "id": 20043,
        "en": "commute",
        "kk": "",
        "zh": "v. 通勤",
        "unit": 11
    },
    {
        "id": 20044,
        "en": "compensation",
        "kk": "",
        "zh": "n. 補償；薪酬",
        "unit": 11
    },
    {
        "id": 20045,
        "en": "competitive",
        "kk": "",
        "zh": "adj. 有競爭力的",
        "unit": 11
    },
    {
        "id": 20046,
        "en": "complaint",
        "kk": "",
        "zh": "n. 抱怨；投訴",
        "unit": 11
    },
    {
        "id": 20047,
        "en": "compliance",
        "kk": "",
        "zh": "n. 遵守；合規",
        "unit": 11
    },
    {
        "id": 20048,
        "en": "comprehensive",
        "kk": "",
        "zh": "adj. 全面的",
        "unit": 11
    },
    {
        "id": 20049,
        "en": "confidential",
        "kk": "",
        "zh": "adj. 機密的",
        "unit": 11
    },
    {
        "id": 20050,
        "en": "confirm",
        "kk": "",
        "zh": "v. 確認",
        "unit": 11
    },
    {
        "id": 20051,
        "en": "conference",
        "kk": "",
        "zh": "n. 會議",
        "unit": 11
    },
    {
        "id": 20052,
        "en": "consecutive",
        "kk": "",
        "zh": "adj. 連續的",
        "unit": 11
    },
    {
        "id": 20053,
        "en": "consultant",
        "kk": "",
        "zh": "n. 顧問",
        "unit": 11
    },
    {
        "id": 20054,
        "en": "consumer",
        "kk": "",
        "zh": "n. 消費者",
        "unit": 11
    },
    {
        "id": 20055,
        "en": "contract",
        "kk": "",
        "zh": "n. 合約",
        "unit": 11
    },
    {
        "id": 20056,
        "en": "convenience",
        "kk": "",
        "zh": "n. 便利",
        "unit": 11
    },
    {
        "id": 20057,
        "en": "corporation",
        "kk": "",
        "zh": "n. 公司；法人",
        "unit": 11
    },
    {
        "id": 20058,
        "en": "correspondence",
        "kk": "",
        "zh": "n. 通信；信件",
        "unit": 11
    },
    {
        "id": 20059,
        "en": "courier",
        "kk": "",
        "zh": "n. 快遞員",
        "unit": 11
    },
    {
        "id": 20060,
        "en": "coverage",
        "kk": "",
        "zh": "n. 涵蓋範圍；保險範圍",
        "unit": 11
    },
    {
        "id": 20061,
        "en": "customer",
        "kk": "",
        "zh": "n. 顧客",
        "unit": 11
    },
    {
        "id": 20062,
        "en": "deadline",
        "kk": "",
        "zh": "n. 截止日期",
        "unit": 11
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
        "kk": "",
        "zh": "v. 遞送；交付",
        "unit": 11
    },
    {
        "id": 20065,
        "en": "demonstrate",
        "kk": "",
        "zh": "v. 示範；證明",
        "unit": 11
    },
    {
        "id": 20066,
        "en": "department",
        "kk": "",
        "zh": "n. 部門",
        "unit": 11
    },
    {
        "id": 20067,
        "en": "deposit",
        "kk": "",
        "zh": "n. 訂金；存款",
        "unit": 11
    },
    {
        "id": 20068,
        "en": "designate",
        "kk": "",
        "zh": "v. 指定",
        "unit": 11
    },
    {
        "id": 20069,
        "en": "destination",
        "kk": "",
        "zh": "n. 目的地",
        "unit": 11
    },
    {
        "id": 20070,
        "en": "directory",
        "kk": "",
        "zh": "n. 名錄；通訊錄",
        "unit": 11
    },
    {
        "id": 20071,
        "en": "discount",
        "kk": "",
        "zh": "n. 折扣",
        "unit": 11
    },
    {
        "id": 20072,
        "en": "dispatch",
        "kk": "",
        "zh": "v. 派遣；發送",
        "unit": 11
    },
    {
        "id": 20073,
        "en": "distribute",
        "kk": "",
        "zh": "v. 分發；分配",
        "unit": 11
    },
    {
        "id": 20074,
        "en": "division",
        "kk": "",
        "zh": "n. 部門；分割",
        "unit": 11
    },
    {
        "id": 20075,
        "en": "document",
        "kk": "",
        "zh": "n. 文件",
        "unit": 11
    },
    {
        "id": 20076,
        "en": "domestic",
        "kk": "",
        "zh": "adj. 國內的",
        "unit": 11
    },
    {
        "id": 20077,
        "en": "downsize",
        "kk": "",
        "zh": "v. 縮編；裁員",
        "unit": 11
    },
    {
        "id": 20078,
        "en": "durable",
        "kk": "",
        "zh": "adj. 耐用的",
        "unit": 11
    },
    {
        "id": 20079,
        "en": "efficient",
        "kk": "",
        "zh": "adj. 有效率的",
        "unit": 11
    },
    {
        "id": 20080,
        "en": "eligible",
        "kk": "",
        "zh": "adj. 有資格的",
        "unit": 11
    },
    {
        "id": 20081,
        "en": "employee",
        "kk": "",
        "zh": "n. 員工",
        "unit": 11
    },
    {
        "id": 20082,
        "en": "enclose",
        "kk": "",
        "zh": "v. 隨函附上",
        "unit": 11
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
        "kk": "",
        "zh": "v. 註冊；登記",
        "unit": 11
    },
    {
        "id": 20085,
        "en": "ensure",
        "kk": "",
        "zh": "v. 確保",
        "unit": 11
    },
    {
        "id": 20086,
        "en": "entrepreneur",
        "kk": "",
        "zh": "n. 企業家",
        "unit": 11
    },
    {
        "id": 20087,
        "en": "equipment",
        "kk": "",
        "zh": "n. 設備",
        "unit": 11
    },
    {
        "id": 20088,
        "en": "estimate",
        "kk": "",
        "zh": "n. 估價；v. 估計",
        "unit": 11
    },
    {
        "id": 20089,
        "en": "evaluate",
        "kk": "",
        "zh": "v. 評價",
        "unit": 11
    },
    {
        "id": 20090,
        "en": "exceed",
        "kk": "",
        "zh": "v. 超過",
        "unit": 11
    },
    {
        "id": 20091,
        "en": "exhibition",
        "kk": "",
        "zh": "n. 展覽",
        "unit": 11
    },
    {
        "id": 20092,
        "en": "expand",
        "kk": "",
        "zh": "v. 擴張",
        "unit": 11
    },
    {
        "id": 20093,
        "en": "expenditure",
        "kk": "",
        "zh": "n. 開支",
        "unit": 11
    },
    {
        "id": 20094,
        "en": "expense",
        "kk": "",
        "zh": "n. 費用",
        "unit": 11
    },
    {
        "id": 20095,
        "en": "expire",
        "kk": "",
        "zh": "v. 到期",
        "unit": 11
    },
    {
        "id": 20096,
        "en": "facility",
        "kk": "",
        "zh": "n. 設施",
        "unit": 11
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
        "kk": "",
        "zh": "adj. 彈性的",
        "unit": 11
    },
    {
        "id": 20099,
        "en": "forecast",
        "kk": "",
        "zh": "n. 預測",
        "unit": 11
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
        "kk": "",
        "zh": "n. 貨運",
        "unit": 11
    },
    {
        "id": 20102,
        "en": "furnish",
        "kk": "",
        "zh": "v. 配備家具；提供",
        "unit": 11
    },
    {
        "id": 20103,
        "en": "generate",
        "kk": "",
        "zh": "v. 產生",
        "unit": 11
    },
    {
        "id": 20104,
        "en": "guarantee",
        "kk": "",
        "zh": "n. 保證；v. 保證",
        "unit": 11
    },
    {
        "id": 20105,
        "en": "headquarters",
        "kk": "",
        "zh": "n. 總部",
        "unit": 11
    },
    {
        "id": 20106,
        "en": "inquiry",
        "kk": "",
        "zh": "n. 詢問",
        "unit": 11
    },
    {
        "id": 20107,
        "en": "installation",
        "kk": "",
        "zh": "n. 安裝",
        "unit": 11
    },
    {
        "id": 20108,
        "en": "instruction",
        "kk": "",
        "zh": "n. 指示；說明",
        "unit": 11
    },
    {
        "id": 20109,
        "en": "insurance",
        "kk": "",
        "zh": "n. 保險",
        "unit": 11
    },
    {
        "id": 20110,
        "en": "inventory",
        "kk": "",
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
        "unit": 11
    },
    {
        "id": 20113,
        "en": "jeopardize",
        "kk": "",
        "zh": "v. 危害",
        "unit": 11
    },
    {
        "id": 20114,
        "en": "launch",
        "kk": "",
        "zh": "v. 推出；發射",
        "unit": 11
    },
    {
        "id": 20115,
        "en": "lease",
        "kk": "",
        "zh": "n. 租約；v. 出租",
        "unit": 11
    },
    {
        "id": 20116,
        "en": "liability",
        "kk": "",
        "zh": "n. 責任；負債",
        "unit": 11
    },
    {
        "id": 20117,
        "en": "logistics",
        "kk": "",
        "zh": "n. 物流",
        "unit": 11
    },
    {
        "id": 20118,
        "en": "maintenance",
        "kk": "",
        "zh": "n. 維護",
        "unit": 11
    },
    {
        "id": 20119,
        "en": "manufacture",
        "kk": "",
        "zh": "v. 製造",
        "unit": 11
    },
    {
        "id": 20120,
        "en": "margin",
        "kk": "",
        "zh": "n. 利潤；邊緣",
        "unit": 11
    },
    {
        "id": 20121,
        "en": "merchandise",
        "kk": "",
        "zh": "n. 商品",
        "unit": 11
    },
    {
        "id": 20122,
        "en": "merge",
        "kk": "",
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
        "kk": "",
        "zh": "v. 協商；談判",
        "unit": 11
    },
    {
        "id": 20125,
        "en": "notify",
        "kk": "",
        "zh": "v. 通知",
        "unit": 11
    },
    {
        "id": 20126,
        "en": "obligation",
        "kk": "",
        "zh": "n. 義務",
        "unit": 11
    },
    {
        "id": 20127,
        "en": "occupy",
        "kk": "",
        "zh": "v. 佔用；佔據",
        "unit": 11
    },
    {
        "id": 20128,
        "en": "operate",
        "kk": "",
        "zh": "v. 操作；營運",
        "unit": 11
    },
    {
        "id": 20129,
        "en": "order",
        "kk": "",
        "zh": "n. 訂單；v. 訂購",
        "unit": 11
    },
    {
        "id": 20130,
        "en": "outstanding",
        "kk": "",
        "zh": "adj. 傑出的；未付的",
        "unit": 11
    },
    {
        "id": 20131,
        "en": "overdue",
        "kk": "",
        "zh": "adj. 逾期的",
        "unit": 11
    },
    {
        "id": 20132,
        "en": "overtime",
        "kk": "",
        "zh": "n. 加班",
        "unit": 11
    },
    {
        "id": 20133,
        "en": "participate",
        "kk": "",
        "zh": "v. 參加",
        "unit": 11
    },
    {
        "id": 20134,
        "en": "partnership",
        "kk": "",
        "zh": "n. 合夥關係",
        "unit": 11
    },
    {
        "id": 20135,
        "en": "patron",
        "kk": "",
        "zh": "n. 老主顧；贊助人",
        "unit": 11
    },
    {
        "id": 20136,
        "en": "payroll",
        "kk": "",
        "zh": "n. 薪資單",
        "unit": 11
    },
    {
        "id": 20137,
        "en": "personnel",
        "kk": "",
        "zh": "n. 人員；人事部",
        "unit": 11
    },
    {
        "id": 20138,
        "en": "postpone",
        "kk": "",
        "zh": "v. 延期",
        "unit": 11
    },
    {
        "id": 20139,
        "en": "precaution",
        "kk": "",
        "zh": "n. 預防措施",
        "unit": 11
    },
    {
        "id": 20140,
        "en": "premises",
        "kk": "",
        "zh": "n. 營業場所",
        "unit": 11
    },
    {
        "id": 20141,
        "en": "presentation",
        "kk": "",
        "zh": "n. 簡報",
        "unit": 11
    },
    {
        "id": 20142,
        "en": "procedure",
        "kk": "",
        "zh": "n. 程序",
        "unit": 11
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
        "kk": "",
        "zh": "n. 生產力",
        "unit": 11
    },
    {
        "id": 20145,
        "en": "profit",
        "kk": "",
        "zh": "n. 利潤",
        "unit": 11
    },
    {
        "id": 20146,
        "en": "promote",
        "kk": "",
        "zh": "v. 晉升；促銷",
        "unit": 11
    },
    {
        "id": 20147,
        "en": "promotion",
        "kk": "",
        "zh": "n. 升遷；促銷",
        "unit": 11
    },
    {
        "id": 20148,
        "en": "proposal",
        "kk": "",
        "zh": "n. 提案",
        "unit": 11
    },
    {
        "id": 20149,
        "en": "purchase",
        "kk": "",
        "zh": "v. 購買",
        "unit": 11
    },
    {
        "id": 20150,
        "en": "qualification",
        "kk": "",
        "zh": "n. 資格",
        "unit": 11
    },
    {
        "id": 20151,
        "en": "quotation",
        "kk": "",
        "zh": "n. 報價",
        "unit": 11
    },
    {
        "id": 20152,
        "en": "receipt",
        "kk": "",
        "zh": "n. 收據",
        "unit": 11
    },
    {
        "id": 20153,
        "en": "recipient",
        "kk": "",
        "zh": "n. 收件人",
        "unit": 11
    },
    {
        "id": 20154,
        "en": "recruit",
        "kk": "",
        "zh": "v. 招募",
        "unit": 11
    },
    {
        "id": 20155,
        "en": "refund",
        "kk": "",
        "zh": "n. 退款",
        "unit": 11
    },
    {
        "id": 20156,
        "en": "regulation",
        "kk": "",
        "zh": "n. 規定",
        "unit": 11
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
        "kk": "",
        "zh": "adj. 可靠的",
        "unit": 11
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
        "kk": "",
        "zh": "v. 更新；續約",
        "unit": 11
    },
    {
        "id": 20161,
        "en": "renovation",
        "kk": "",
        "zh": "n. 整修",
        "unit": 11
    },
    {
        "id": 20162,
        "en": "reputation",
        "kk": "",
        "zh": "n. 名聲",
        "unit": 11
    },
    {
        "id": 20163,
        "en": "require",
        "kk": "",
        "zh": "v. 要求；需要",
        "unit": 11
    },
    {
        "id": 20164,
        "en": "reservation",
        "kk": "",
        "zh": "n. 預約",
        "unit": 11
    },
    {
        "id": 20165,
        "en": "resign",
        "kk": "",
        "zh": "v. 辭職",
        "unit": 11
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
        "kk": "",
        "zh": "n. 零售",
        "unit": 11
    },
    {
        "id": 20168,
        "en": "revenue",
        "kk": "",
        "zh": "n. 營收",
        "unit": 11
    },
    {
        "id": 20169,
        "en": "revise",
        "kk": "",
        "zh": "v. 修訂",
        "unit": 11
    },
    {
        "id": 20170,
        "en": "salary",
        "kk": "",
        "zh": "n. 薪水",
        "unit": 11
    },
    {
        "id": 20171,
        "en": "schedule",
        "kk": "",
        "zh": "n. 時程表",
        "unit": 11
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
        "unit": 11
    },
    {
        "id": 20174,
        "en": "shortage",
        "kk": "",
        "zh": "n. 短缺",
        "unit": 11
    },
    {
        "id": 20175,
        "en": "specification",
        "kk": "",
        "zh": "n. 規格",
        "unit": 11
    },
    {
        "id": 20176,
        "en": "sponsor",
        "kk": "",
        "zh": "n. 贊助者",
        "unit": 11
    },
    {
        "id": 20177,
        "en": "staff",
        "kk": "",
        "zh": "n. 員工",
        "unit": 11
    },
    {
        "id": 20178,
        "en": "subscription",
        "kk": "",
        "zh": "n. 訂閱",
        "unit": 11
    },
    {
        "id": 20179,
        "en": "subsidiary",
        "kk": "",
        "zh": "n. 子公司",
        "unit": 11
    },
    {
        "id": 20180,
        "en": "supervisor",
        "kk": "",
        "zh": "n. 主管",
        "unit": 11
    },
    {
        "id": 20181,
        "en": "supplier",
        "kk": "",
        "zh": "n. 供應商",
        "unit": 11
    },
    {
        "id": 20182,
        "en": "surplus",
        "kk": "",
        "zh": "n. 過剩；盈餘",
        "unit": 11
    },
    {
        "id": 20183,
        "en": "tentative",
        "kk": "",
        "zh": "adj. 暫定的",
        "unit": 11
    },
    {
        "id": 20184,
        "en": "terminate",
        "kk": "",
        "zh": "v. 終止",
        "unit": 11
    },
    {
        "id": 20185,
        "en": "transaction",
        "kk": "",
        "zh": "n. 交易",
        "unit": 11
    },
    {
        "id": 20186,
        "en": "transfer",
        "kk": "",
        "zh": "v. 轉移；調職",
        "unit": 11
    },
    {
        "id": 20187,
        "en": "transit",
        "kk": "",
        "zh": "n. 運輸；過境",
        "unit": 11
    },
    {
        "id": 20188,
        "en": "turnover",
        "kk": "",
        "zh": "n. 營業額；人員流動",
        "unit": 11
    },
    {
        "id": 20189,
        "en": "upgrade",
        "kk": "",
        "zh": "v. 升級",
        "unit": 11
    },
    {
        "id": 20190,
        "en": "utility",
        "kk": "",
        "zh": "n. 公用事業",
        "unit": 11
    },
    {
        "id": 20191,
        "en": "vacancy",
        "kk": "",
        "zh": "n. 職缺；空房",
        "unit": 11
    },
    {
        "id": 20192,
        "en": "vendor",
        "kk": "",
        "zh": "n. 供應商；小販",
        "unit": 11
    },
    {
        "id": 20193,
        "en": "venue",
        "kk": "",
        "zh": "n. 場地",
        "unit": 11
    },
    {
        "id": 20194,
        "en": "verify",
        "kk": "",
        "zh": "v. 驗證",
        "unit": 11
    },
    {
        "id": 20195,
        "en": "warehouse",
        "kk": "",
        "zh": "n. 倉庫",
        "unit": 11
    },
    {
        "id": 20196,
        "en": "warranty",
        "kk": "",
        "zh": "n. 保固",
        "unit": 11
    },
    {
        "id": 20197,
        "en": "withdraw",
        "kk": "",
        "zh": "v. 提領；撤回",
        "unit": 11
    },
    {
        "id": 20198,
        "en": "workshop",
        "kk": "",
        "zh": "n. 工作坊；研討會",
        "unit": 11
    }
,
    { id: 20200, en: 'abandon', kk: '', zh: 'v. 放棄', unit: 12, example: '', exampleZh: '' },\n    { id: 20201, en: 'abide', kk: '', zh: 'v. 遵守', unit: 12, example: '', exampleZh: '' },\n    { id: 20202, en: 'abolish', kk: '', zh: 'v. 廢除', unit: 12, example: '', exampleZh: '' },\n    { id: 20203, en: 'abroad', kk: '', zh: 'adv. 在國外', unit: 12, example: '', exampleZh: '' },\n    { id: 20204, en: 'abrupt', kk: '', zh: 'adj. 突然的', unit: 12, example: '', exampleZh: '' },\n    { id: 20205, en: 'absence', kk: '', zh: 'n. 缺席', unit: 12, example: '', exampleZh: '' },\n    { id: 20206, en: 'absolute', kk: '', zh: 'adj. 絕對的', unit: 12, example: '', exampleZh: '' },\n    { id: 20207, en: 'absorb', kk: '', zh: 'v. 吸收', unit: 12, example: '', exampleZh: '' },\n    { id: 20208, en: 'abstract', kk: '', zh: 'adj. 抽象的', unit: 12, example: '', exampleZh: '' },\n    { id: 20209, en: 'abundant', kk: '', zh: 'adj. 豐富的', unit: 12, example: '', exampleZh: '' },\n    { id: 20210, en: 'abuse', kk: '', zh: 'v. 濫用', unit: 12, example: '', exampleZh: '' },\n    { id: 20211, en: 'accelerate', kk: '', zh: 'v. 加速', unit: 12, example: '', exampleZh: '' },\n    { id: 20212, en: 'acceptable', kk: '', zh: 'adj. 可接受的', unit: 12, example: '', exampleZh: '' },\n    { id: 20213, en: 'acceptance', kk: '', zh: 'n. 接受', unit: 12, example: '', exampleZh: '' },\n    { id: 20214, en: 'accessible', kk: '', zh: 'adj. 易接近的', unit: 12, example: '', exampleZh: '' },\n    { id: 20215, en: 'accidental', kk: '', zh: 'adj. 意外的', unit: 12, example: '', exampleZh: '' },\n    { id: 20216, en: 'acclaim', kk: '', zh: 'v. 稱讚', unit: 12, example: '', exampleZh: '' },\n    { id: 20217, en: 'accommodate', kk: '', zh: 'v. 容納；提供住宿', unit: 12, example: '', exampleZh: '' },\n    { id: 20218, en: 'accomplish', kk: '', zh: 'v. 完成', unit: 12, example: '', exampleZh: '' },\n    { id: 20219, en: 'accord', kk: '', zh: 'n. 協議', unit: 12, example: '', exampleZh: '' },\n    { id: 20220, en: 'account', kk: '', zh: 'n. 帳戶', unit: 12, example: '', exampleZh: '' },\n    { id: 20221, en: 'accountant', kk: '', zh: 'n. 會計師', unit: 12, example: '', exampleZh: '' },\n    { id: 20222, en: 'accumulate', kk: '', zh: 'v. 累積', unit: 12, example: '', exampleZh: '' },\n    { id: 20223, en: 'accuracy', kk: '', zh: 'n. 準確性', unit: 12, example: '', exampleZh: '' },\n    { id: 20224, en: 'accurate', kk: '', zh: 'adj. 準確的', unit: 12, example: '', exampleZh: '' },\n    { id: 20225, en: 'accuse', kk: '', zh: 'v. 指控', unit: 12, example: '', exampleZh: '' },\n    { id: 20226, en: 'accustom', kk: '', zh: 'v. 使習慣', unit: 12, example: '', exampleZh: '' },\n    { id: 20227, en: 'achieve', kk: '', zh: 'v. 達成', unit: 12, example: '', exampleZh: '' },\n    { id: 20228, en: 'achievement', kk: '', zh: 'n. 成就', unit: 12, example: '', exampleZh: '' },\n    { id: 20229, en: 'acknowledge', kk: '', zh: 'v. 承認', unit: 12, example: '', exampleZh: '' },\n    { id: 20230, en: 'acquire', kk: '', zh: 'v. 取得；收購', unit: 12, example: '', exampleZh: '' },\n    { id: 20231, en: 'acquisition', kk: '', zh: 'n. 收購', unit: 12, example: '', exampleZh: '' },\n    { id: 20232, en: 'activate', kk: '', zh: 'v. 啟動', unit: 12, example: '', exampleZh: '' },\n    { id: 20233, en: 'active', kk: '', zh: 'adj. 活躍的', unit: 12, example: 'I needed to change my lifestyle and become more active', exampleZh: '我需要改變生活方式並變得更加活躍' },\n    { id: 20234, en: 'actual', kk: '', zh: 'adj. 實際的', unit: 12, example: '', exampleZh: '' },\n    { id: 20235, en: 'adapt', kk: '', zh: 'v. 適應', unit: 12, example: '', exampleZh: '' },\n    { id: 20236, en: 'addict', kk: '', zh: 'n. 上癮者', unit: 12, example: '', exampleZh: '' },\n    { id: 20237, en: 'addition', kk: '', zh: 'n. 增加', unit: 12, example: '', exampleZh: '' },\n    { id: 20238, en: 'additional', kk: '', zh: 'adj. 額外的', unit: 12, example: '', exampleZh: '' },\n    { id: 20239, en: 'address', kk: '', zh: 'v. 處理；對...演說', unit: 12, example: 'ensure that your weight is evenly spread when you address the ball', exampleZh: '確保擊球時體重平均分佈' },\n    { id: 20240, en: 'adequate', kk: '', zh: 'adj. 充足的', unit: 12, example: '', exampleZh: '' },\n    { id: 20241, en: 'adhere', kk: '', zh: 'v. 堅持；黏著', unit: 12, example: '', exampleZh: '' },\n    { id: 20242, en: 'adjacent', kk: '', zh: 'adj. 鄰近的', unit: 12, example: '', exampleZh: '' },\n    { id: 20243, en: 'adjust', kk: '', zh: 'v. 調整', unit: 12, example: '', exampleZh: '' },\n    { id: 20244, en: 'administer', kk: '', zh: 'v. 管理', unit: 12, example: '', exampleZh: '' },\n    { id: 20245, en: 'administration', kk: '', zh: 'n. 管理；行政', unit: 12, example: '', exampleZh: '' },\n    { id: 20246, en: 'administrative', kk: '', zh: 'adj. 行政的', unit: 12, example: '', exampleZh: '' },\n    { id: 20247, en: 'admire', kk: '', zh: 'v. 欽佩', unit: 12, example: '', exampleZh: '' },\n    { id: 20248, en: 'admission', kk: '', zh: 'n. 入場費；承認', unit: 12, example: '', exampleZh: '' },\n    { id: 20249, en: 'admit', kk: '', zh: 'v. 承認', unit: 12, example: '', exampleZh: '' },\n    { id: 20250, en: 'adopt', kk: '', zh: 'v. 採納', unit: 12, example: '', exampleZh: '' },\n    { id: 20251, en: 'advance', kk: '', zh: 'v. 前進', unit: 12, example: 'the author was paid a $250,000 advance', exampleZh: '作者預付了 25 萬美元' },\n    { id: 20252, en: 'advanced', kk: '', zh: 'adj. 先進的', unit: 12, example: '', exampleZh: '' },\n    { id: 20253, en: 'advantage', kk: '', zh: 'n. 優勢', unit: 12, example: '', exampleZh: '' },\n    { id: 20254, en: 'advantageous', kk: '', zh: 'adj. 有利的', unit: 12, example: '', exampleZh: '' },\n    { id: 20255, en: 'advent', kk: '', zh: 'n. 出現', unit: 12, example: '', exampleZh: '' },\n    { id: 20256, en: 'adventure', kk: '', zh: 'n. 冒險', unit: 12, example: '', exampleZh: '' },\n    { id: 20257, en: 'adverse', kk: '', zh: 'adj. 不利的', unit: 12, example: '', exampleZh: '' },\n    { id: 20258, en: 'advertise', kk: '', zh: 'v. 登廣告', unit: 12, example: '', exampleZh: '' },\n    { id: 20259, en: 'advertisement', kk: '', zh: 'n. 廣告', unit: 12, example: '', exampleZh: '' },\n    { id: 20260, en: 'advice', kk: '', zh: 'n. 建議', unit: 12, example: '', exampleZh: '' },\n    { id: 20261, en: 'advise', kk: '', zh: 'v. 建議', unit: 12, example: '', exampleZh: '' },\n    { id: 20262, en: 'adviser', kk: '', zh: 'n. 顧問', unit: 12, example: '', exampleZh: '' },\n    { id: 20263, en: 'advocate', kk: '', zh: 'v. 提倡', unit: 12, example: '', exampleZh: '' },\n    { id: 20264, en: 'affair', kk: '', zh: 'n. 事務', unit: 12, example: '', exampleZh: '' },\n    { id: 20265, en: 'affect', kk: '', zh: 'v. 影響', unit: 12, example: '', exampleZh: '' },\n    { id: 20266, en: 'affiliate', kk: '', zh: 'v. 附屬', unit: 12, example: '', exampleZh: '' },\n    { id: 20267, en: 'affirm', kk: '', zh: 'v. 確認', unit: 12, example: '', exampleZh: '' },\n    { id: 20268, en: 'afford', kk: '', zh: 'v. 負擔得起', unit: 12, example: '', exampleZh: '' },\n    { id: 20269, en: 'affordable', kk: '', zh: 'adj. 負擔得起的', unit: 12, example: '', exampleZh: '' },\n    { id: 20270, en: 'agency', kk: '', zh: 'n. 代理機構', unit: 12, example: '', exampleZh: '' },\n    { id: 20271, en: 'agenda', kk: '', zh: 'n. 議程', unit: 12, example: '', exampleZh: '' },\n    { id: 20272, en: 'agent', kk: '', zh: 'n. 代理人', unit: 12, example: '', exampleZh: '' },\n    { id: 20273, en: 'aggravate', kk: '', zh: 'v. 惡化', unit: 12, example: '', exampleZh: '' },\n    { id: 20274, en: 'aggressive', kk: '', zh: 'adj. 積極的', unit: 12, example: '', exampleZh: '' },\n    { id: 20275, en: 'agreement', kk: '', zh: 'n. 協議；合約', unit: 12, example: 'the two officers nodded in agreement', exampleZh: '兩位軍官點頭同意' },\n    { id: 20276, en: 'agriculture', kk: '', zh: 'n. 農業', unit: 12, example: '', exampleZh: '' },\n    { id: 20277, en: 'aid', kk: '', zh: 'n. 援助', unit: 12, example: '700,000 tons of food aid', exampleZh: '70萬噸糧食援助' },\n    { id: 20278, en: 'airline', kk: '', zh: 'n. 航空公司', unit: 12, example: '', exampleZh: '' },\n    { id: 20279, en: 'aisle', kk: '', zh: 'n. 走道', unit: 12, example: '', exampleZh: '' },\n    { id: 20280, en: 'alert', kk: '', zh: 'adj. 警覺的', unit: 12, example: '', exampleZh: '' },\n    { id: 20281, en: 'alienate', kk: '', zh: 'v. 使疏遠', unit: 12, example: '', exampleZh: '' },\n    { id: 20282, en: 'align', kk: '', zh: 'v. 使結盟', unit: 12, example: '', exampleZh: '' },\n    { id: 20283, en: 'alike', kk: '', zh: 'adj. 相似的', unit: 12, example: 'the brothers were very much alike', exampleZh: '兄弟倆非常相似' },\n    { id: 20284, en: 'allege', kk: '', zh: 'v. 宣稱', unit: 12, example: '', exampleZh: '' },\n    { id: 20285, en: 'alleviate', kk: '', zh: 'v. 減輕', unit: 12, example: '', exampleZh: '' },\n    { id: 20286, en: 'allocate', kk: '', zh: 'v. 分配；撥出', unit: 12, example: '', exampleZh: '' },\n    { id: 20287, en: 'allow', kk: '', zh: 'v. 允許', unit: 12, example: 'a plan to allow Sunday shopping', exampleZh: '允許週日購物的計劃' },\n    { id: 20288, en: 'allowance', kk: '', zh: 'n. 津貼', unit: 12, example: '', exampleZh: '' },\n    { id: 20289, en: 'allude', kk: '', zh: 'v. 暗示', unit: 12, example: '', exampleZh: '' },\n    { id: 20290, en: 'ally', kk: '', zh: 'n. 盟友', unit: 12, example: '', exampleZh: '' },\n    { id: 20291, en: 'alter', kk: '', zh: 'v. 改變', unit: 12, example: '', exampleZh: '' },\n    { id: 20292, en: 'alternate', kk: '', zh: 'v. 交替', unit: 12, example: '', exampleZh: '' },\n    { id: 20293, en: 'alternative', kk: '', zh: 'n. 替代方案', unit: 12, example: '', exampleZh: '' },\n    { id: 20294, en: 'altitude', kk: '', zh: 'n. 高度', unit: 12, example: '', exampleZh: '' },\n    { id: 20295, en: 'amateur', kk: '', zh: 'n. 業餘愛好者', unit: 12, example: '', exampleZh: '' },\n    { id: 20296, en: 'amaze', kk: '', zh: 'v. 使驚訝', unit: 12, example: '', exampleZh: '' },\n    { id: 20297, en: 'ambassador', kk: '', zh: 'n. 大使', unit: 12, example: '', exampleZh: '' },\n    { id: 20298, en: 'ambiguity', kk: '', zh: 'n. 模稜兩可', unit: 12, example: '', exampleZh: '' },\n    { id: 20299, en: 'ambiguous', kk: '', zh: 'adj. 模糊不清的', unit: 12, example: '', exampleZh: '' },\n    { id: 20300, en: 'ambition', kk: '', zh: 'n. 抱負', unit: 12, example: '', exampleZh: '' },\n    { id: 20301, en: 'ambitious', kk: '', zh: 'adj. 有野心的', unit: 12, example: '', exampleZh: '' },\n    { id: 20302, en: 'amend', kk: '', zh: 'v. 修改', unit: 12, example: '', exampleZh: '' },\n    { id: 20303, en: 'amendment', kk: '', zh: 'n. 修正；修訂', unit: 12, example: '', exampleZh: '' },\n    { id: 20304, en: 'amount', kk: '', zh: 'n. 數量', unit: 12, example: 'they have spent a colossal amount rebuilding the stadium', exampleZh: '他們花費巨資重建體育場' },\n    { id: 20305, en: 'ample', kk: '', zh: 'adj. 充足的', unit: 12, example: '', exampleZh: '' },\n    { id: 20306, en: 'amplify', kk: '', zh: 'v. 放大', unit: 12, example: '', exampleZh: '' },\n    { id: 20307, en: 'amuse', kk: '', zh: 'v. 使歡樂', unit: 12, example: '', exampleZh: '' },\n    { id: 20308, en: 'analogy', kk: '', zh: 'n. 類比', unit: 12, example: '', exampleZh: '' },\n    { id: 20309, en: 'analysis', kk: '/əˈnælɪsɪs/', zh: 'n. 分析', unit: 12, example: '', exampleZh: '' },\n    { id: 20310, en: 'analyze', kk: '', zh: 'v. 分析', unit: 12, example: '', exampleZh: '' },\n    { id: 20311, en: 'ancestor', kk: '', zh: 'n. 祖先', unit: 12, example: '', exampleZh: '' },\n    { id: 20312, en: 'anchor', kk: '', zh: 'n. 錨；主播', unit: 12, example: '', exampleZh: '' },\n    { id: 20313, en: 'ancient', kk: '', zh: 'adj. 古代的', unit: 12, example: 'ancient forests', exampleZh: '古老的森林' },\n    { id: 20314, en: 'anecdote', kk: '', zh: 'n. 軼事', unit: 12, example: '', exampleZh: '' },\n    { id: 20315, en: 'angle', kk: '', zh: 'n. 角度', unit: 12, example: '', exampleZh: '' },\n    { id: 20316, en: 'angry', kk: '', zh: 'adj. 生氣的', unit: 12, example: 'I\'m angry that she didn\'t call me', exampleZh: '我很生氣她沒有打電話給我' },\n    { id: 20317, en: 'anguish', kk: '', zh: 'n. 極度痛苦', unit: 12, example: '', exampleZh: '' },\n    { id: 20318, en: 'animate', kk: '', zh: 'v. 賦予生命', unit: 12, example: '', exampleZh: '' },\n    { id: 20319, en: 'anniversary', kk: '', zh: 'n. 週年紀念日', unit: 12, example: '', exampleZh: '' },\n    { id: 20320, en: 'announce', kk: '', zh: 'v. 宣佈', unit: 12, example: '', exampleZh: '' },\n    { id: 20321, en: 'announcement', kk: '', zh: 'n. 公告', unit: 12, example: '', exampleZh: '' },\n    { id: 20322, en: 'annoy', kk: '', zh: 'v. 惹惱', unit: 12, example: '', exampleZh: '' },\n    { id: 20323, en: 'annual', kk: '', zh: 'adj. 每年的', unit: 12, example: '', exampleZh: '' },\n    { id: 20324, en: 'anomalous', kk: '', zh: 'adj. 異常的', unit: 12, example: '', exampleZh: '' },\n    { id: 20325, en: 'anonymous', kk: '', zh: 'adj. 匿名的', unit: 12, example: '', exampleZh: '' },\n    { id: 20326, en: 'answer', kk: '', zh: 'v. 回答', unit: 12, example: 'I didn\'t answer him', exampleZh: '我沒有回答他' },\n    { id: 20327, en: 'antagonism', kk: '', zh: 'n. 敵意', unit: 12, example: '', exampleZh: '' },\n    { id: 20328, en: 'anticipate', kk: '', zh: 'v. 預期', unit: 12, example: '', exampleZh: '' },\n    { id: 20329, en: 'anticipation', kk: '', zh: 'n. 預期', unit: 12, example: '', exampleZh: '' },\n    { id: 20330, en: 'antique', kk: '', zh: 'n. 古董', unit: 12, example: '', exampleZh: '' },\n    { id: 20331, en: 'anxiety', kk: '', zh: 'n. 焦慮', unit: 12, example: '', exampleZh: '' },\n    { id: 20332, en: 'anxious', kk: '', zh: 'adj. 焦慮的', unit: 12, example: '', exampleZh: '' },\n    { id: 20333, en: 'apologize', kk: '', zh: 'v. 道歉', unit: 12, example: '', exampleZh: '' },\n    { id: 20334, en: 'apology', kk: '', zh: 'n. 道歉', unit: 12, example: '', exampleZh: '' },\n    { id: 20335, en: 'appalling', kk: '', zh: 'adj. 令人震驚的', unit: 12, example: '', exampleZh: '' },\n    { id: 20336, en: 'apparatus', kk: '', zh: 'n. 設備', unit: 12, example: '', exampleZh: '' },\n    { id: 20337, en: 'apparent', kk: '', zh: 'adj. 明顯的', unit: 12, example: '', exampleZh: '' },\n    { id: 20338, en: 'appeal', kk: '', zh: 'v. 呼籲；吸引', unit: 12, example: '', exampleZh: '' },\n    { id: 20339, en: 'appealing', kk: '', zh: 'adj. 吸引人的', unit: 12, example: '', exampleZh: '' },\n    { id: 20340, en: 'appear', kk: '', zh: 'v. 出現', unit: 12, example: 'the paperback edition didn\'t appear for another two years', exampleZh: '平裝本又兩年沒有出現' },\n    { id: 20341, en: 'appearance', kk: '', zh: 'n. 外表', unit: 12, example: '', exampleZh: '' },\n    { id: 20342, en: 'appendix', kk: '', zh: 'n. 附錄', unit: 12, example: '', exampleZh: '' },\n    { id: 20343, en: 'appetite', kk: '', zh: 'n. 胃口', unit: 12, example: '', exampleZh: '' },\n    { id: 20344, en: 'applaud', kk: '', zh: 'v. 鼓掌', unit: 12, example: '', exampleZh: '' },\n    { id: 20345, en: 'appliance', kk: '', zh: 'n. 家電', unit: 12, example: '', exampleZh: '' },\n    { id: 20346, en: 'applicable', kk: '', zh: 'adj. 適用的', unit: 12, example: '', exampleZh: '' },\n    { id: 20347, en: 'applicant', kk: '', zh: 'n. 申請人', unit: 12, example: '', exampleZh: '' },\n    { id: 20348, en: 'application', kk: '', zh: 'n. 申請', unit: 12, example: '', exampleZh: '' },\n    { id: 20349, en: 'apply', kk: '', zh: 'v. 申請', unit: 12, example: 'the oil industry has failed to apply appropriate standards of care', exampleZh: '石油工業未能採用適當的護理標準' },\n    { id: 20350, en: 'appoint', kk: '', zh: 'v. 任命', unit: 12, example: '', exampleZh: '' },\n    { id: 20351, en: 'appointment', kk: '', zh: 'n. 約會；任命', unit: 12, example: '', exampleZh: '' },\n    { id: 20352, en: 'appraisal', kk: '', zh: 'n. 評估；考核', unit: 12, example: '', exampleZh: '' },\n    { id: 20353, en: 'appraise', kk: '', zh: 'v. 評估', unit: 12, example: '', exampleZh: '' },\n    { id: 20354, en: 'appreciate', kk: '', zh: 'v. 欣賞；感激', unit: 12, example: '', exampleZh: '' },\n    { id: 20355, en: 'appreciation', kk: '', zh: 'n. 感謝', unit: 12, example: '', exampleZh: '' },\n    { id: 20356, en: 'apprehend', kk: '', zh: 'v. 逮捕', unit: 12, example: '', exampleZh: '' },\n    { id: 20357, en: 'apprentice', kk: '', zh: 'n. 學徒', unit: 12, example: '', exampleZh: '' },\n    { id: 20358, en: 'approach', kk: '', zh: 'v. 接近', unit: 12, example: '', exampleZh: '' },\n    { id: 20359, en: 'appropriate', kk: '', zh: 'adj. 適當的', unit: 12, example: '', exampleZh: '' },\n    { id: 20360, en: 'approval', kk: '', zh: 'n. 批准', unit: 12, example: '', exampleZh: '' },\n    { id: 20361, en: 'approve', kk: '', zh: 'v. 批准', unit: 12, example: '', exampleZh: '' },\n    { id: 20362, en: 'approximate', kk: '', zh: 'adj. 大約的', unit: 12, example: '', exampleZh: '' },\n    { id: 20363, en: 'aptitude', kk: '', zh: 'n. 天資', unit: 12, example: '', exampleZh: '' },\n    { id: 20364, en: 'arbitrary', kk: '', zh: 'adj. 任意的', unit: 12, example: '', exampleZh: '' },\n    { id: 20365, en: 'architect', kk: '', zh: 'n. 建築師', unit: 12, example: '', exampleZh: '' },\n    { id: 20366, en: 'architecture', kk: '', zh: 'n. 建築', unit: 12, example: '', exampleZh: '' },\n    { id: 20367, en: 'archive', kk: '', zh: 'n. 檔案', unit: 12, example: '', exampleZh: '' },\n    { id: 20368, en: 'area', kk: '', zh: 'n. 區域', unit: 12, example: 'people living in the area are at risk', exampleZh: '居住在該地區的人們處於危險之中' },\n    { id: 20369, en: 'argue', kk: '', zh: 'v. 爭論', unit: 12, example: 'don\'t argue with me', exampleZh: '別跟我爭論' },\n    { id: 20370, en: 'argument', kk: '', zh: 'n. 爭論', unit: 12, example: '', exampleZh: '' },\n    { id: 20371, en: 'arise', kk: '', zh: 'v. 產生', unit: 12, example: '', exampleZh: '' },\n    { id: 20372, en: 'arm', kk: '', zh: 'n. 手臂；武器', unit: 12, example: 'as they walked he offered her his arm', exampleZh: '當他們走路時，他向她伸出了手臂' },\n    { id: 20373, en: 'arouse', kk: '', zh: 'v. 喚醒', unit: 12, example: '', exampleZh: '' },\n    { id: 20374, en: 'arrange', kk: '', zh: 'v. 安排', unit: 12, example: 'they hoped to arrange a meeting', exampleZh: '他們希望安排一次會面' },\n    { id: 20375, en: 'arrangement', kk: '', zh: 'n. 安排', unit: 12, example: '', exampleZh: '' },\n    { id: 20376, en: 'array', kk: '', zh: 'n. 一系列', unit: 12, example: '', exampleZh: '' },\n    { id: 20377, en: 'arrest', kk: '', zh: 'v. 逮捕', unit: 12, example: 'they placed her under arrest', exampleZh: '他們逮捕了她' },\n    { id: 20378, en: 'arrival', kk: '', zh: 'n. 到達', unit: 12, example: '', exampleZh: '' },\n    { id: 20379, en: 'arrive', kk: '', zh: 'v. 到達', unit: 12, example: '', exampleZh: '' },\n    { id: 20380, en: 'arrogant', kk: '', zh: 'adj. 傲慢的', unit: 12, example: '', exampleZh: '' },\n    { id: 20381, en: 'article', kk: '', zh: 'n. 文章；物品', unit: 12, example: '', exampleZh: '' },\n    { id: 20382, en: 'artificial', kk: '', zh: 'adj. 人造的', unit: 12, example: '', exampleZh: '' },\n    { id: 20383, en: 'artisan', kk: '', zh: 'n. 工匠', unit: 12, example: '', exampleZh: '' },\n    { id: 20384, en: 'artist', kk: '', zh: 'n. 藝術家', unit: 12, example: '', exampleZh: '' },\n    { id: 20385, en: 'ascertain', kk: '', zh: 'v. 查明', unit: 12, example: '', exampleZh: '' },\n    { id: 20386, en: 'aspect', kk: '', zh: 'n. 方面', unit: 12, example: '', exampleZh: '' },\n    { id: 20387, en: 'aspire', kk: '', zh: 'v. 渴望', unit: 12, example: '', exampleZh: '' },\n    { id: 20388, en: 'assemble', kk: '', zh: 'v. 組裝；集合', unit: 12, example: '', exampleZh: '' },\n    { id: 20389, en: 'assembly', kk: '', zh: 'n. 集會；組裝', unit: 12, example: '', exampleZh: '' },\n    { id: 20390, en: 'assert', kk: '', zh: 'v. 斷言', unit: 12, example: '', exampleZh: '' },\n    { id: 20391, en: 'assess', kk: '', zh: 'v. 評估', unit: 12, example: '', exampleZh: '' },\n    { id: 20392, en: 'assessment', kk: '', zh: 'n. 評估', unit: 12, example: '', exampleZh: '' },\n    { id: 20393, en: 'asset', kk: '', zh: 'n. 資產', unit: 12, example: '', exampleZh: '' },\n    { id: 20394, en: 'assign', kk: '', zh: 'v. 分配', unit: 12, example: '', exampleZh: '' },\n    { id: 20395, en: 'assignment', kk: '', zh: 'n. 任務', unit: 13, example: '', exampleZh: '' },\n    { id: 20396, en: 'assimilate', kk: '', zh: 'v. 吸收', unit: 13, example: '', exampleZh: '' },\n    { id: 20397, en: 'assist', kk: '', zh: 'v. 協助', unit: 13, example: '', exampleZh: '' },\n    { id: 20398, en: 'assistance', kk: '', zh: 'n. 協助', unit: 13, example: '', exampleZh: '' },\n    { id: 20399, en: 'assistant', kk: '', zh: 'n. 助手', unit: 13, example: '', exampleZh: '' },\n    { id: 20400, en: 'associate', kk: '', zh: 'v. 關聯', unit: 13, example: '', exampleZh: '' },\n    { id: 20401, en: 'association', kk: '', zh: 'n. 協會', unit: 13, example: '', exampleZh: '' },\n    { id: 20402, en: 'assortment', kk: '', zh: 'n. 各式各樣', unit: 13, example: '', exampleZh: '' },\n    { id: 20403, en: 'assume', kk: '', zh: 'v. 假設', unit: 13, example: '', exampleZh: '' },\n    { id: 20404, en: 'assumption', kk: '', zh: 'n. 假設', unit: 13, example: '', exampleZh: '' },\n    { id: 20405, en: 'assure', kk: '', zh: 'v. 保證', unit: 13, example: '', exampleZh: '' },\n    { id: 20406, en: 'astonish', kk: '', zh: 'v. 使驚訝', unit: 13, example: '', exampleZh: '' },\n    { id: 20407, en: 'astound', kk: '', zh: 'v. 使震驚', unit: 13, example: '', exampleZh: '' },\n    { id: 20408, en: 'attach', kk: '', zh: 'v. 附上；附加', unit: 13, example: '', exampleZh: '' },\n    { id: 20409, en: 'attachment', kk: '', zh: 'n. 附件', unit: 13, example: '', exampleZh: '' },\n    { id: 20410, en: 'attack', kk: '', zh: 'v. 攻擊', unit: 13, example: 'an attack on inflation', exampleZh: '通貨膨脹的攻擊' },\n    { id: 20411, en: 'attain', kk: '', zh: 'v. 達到', unit: 13, example: '', exampleZh: '' },\n    { id: 20412, en: 'attempt', kk: '', zh: 'v. 嘗試', unit: 13, example: '', exampleZh: '' },\n    { id: 20413, en: 'attend', kk: '', zh: 'v. 出席', unit: 13, example: 'the severely wounded had two medics to attend to their wounds', exampleZh: '重傷者有兩名醫護人員來處理他們的傷口' },\n    { id: 20414, en: 'attendance', kk: '', zh: 'n. 出席率', unit: 13, example: '', exampleZh: '' },\n    { id: 20415, en: 'attendee', kk: '', zh: 'n. 出席者', unit: 13, example: '', exampleZh: '' },\n    { id: 20416, en: 'attention', kk: '', zh: 'n. 注意', unit: 13, example: '', exampleZh: '' },\n    { id: 20417, en: 'attentive', kk: '', zh: 'adj. 專心的', unit: 13, example: '', exampleZh: '' },\n    { id: 20418, en: 'attract', kk: '', zh: 'v. 吸引', unit: 13, example: '', exampleZh: '' },\n    { id: 20419, en: 'attraction', kk: '', zh: 'n. 吸引力', unit: 13, example: '', exampleZh: '' },\n    { id: 20420, en: 'attractive', kk: '', zh: 'adj. 吸引人的', unit: 13, example: '', exampleZh: '' },\n    { id: 20421, en: 'attribute', kk: '', zh: 'v. 歸因於', unit: 13, example: '', exampleZh: '' },\n    { id: 20422, en: 'auction', kk: '', zh: 'n. 拍賣', unit: 13, example: '', exampleZh: '' },\n    { id: 20423, en: 'audience', kk: '', zh: 'n. 觀眾', unit: 13, example: '', exampleZh: '' },\n    { id: 20424, en: 'audit', kk: '', zh: 'n. 審計；v. 查帳', unit: 13, example: '', exampleZh: '' },\n    { id: 20425, en: 'auditor', kk: '', zh: 'n. 審計員', unit: 13, example: '', exampleZh: '' },\n    { id: 20426, en: 'authentic', kk: '', zh: 'adj. 真實的', unit: 13, example: '', exampleZh: '' },\n    { id: 20427, en: 'author', kk: '', zh: 'n. 作者', unit: 13, example: '', exampleZh: '' },\n    { id: 20428, en: 'authority', kk: '', zh: 'n. 權威', unit: 13, example: '', exampleZh: '' },\n    { id: 20429, en: 'authorization', kk: '', zh: 'n. 授權', unit: 13, example: '', exampleZh: '' },\n    { id: 20430, en: 'authorize', kk: '', zh: 'v. 授權；批准', unit: 13, example: '', exampleZh: '' },\n    { id: 20431, en: 'auto', kk: '', zh: 'n. 汽車', unit: 13, example: '', exampleZh: '' },\n    { id: 20432, en: 'autograph', kk: '', zh: 'n. 簽名', unit: 13, example: '', exampleZh: '' },\n    { id: 20433, en: 'automate', kk: '', zh: 'v. 使自動化', unit: 13, example: '', exampleZh: '' },\n    { id: 20434, en: 'automatic', kk: '', zh: 'adj. 自動的', unit: 13, example: '', exampleZh: '' },\n    { id: 20435, en: 'automation', kk: '', zh: 'n. 自動化', unit: 13, example: '', exampleZh: '' },\n    { id: 20436, en: 'automobile', kk: '', zh: 'n. 汽車', unit: 13, example: '', exampleZh: '' },\n    { id: 20437, en: 'autonomous', kk: '', zh: 'adj. 自治的', unit: 13, example: '', exampleZh: '' },\n    { id: 20438, en: 'availability', kk: '', zh: 'n. 可用性；空檔', unit: 13, example: '', exampleZh: '' },\n    { id: 20439, en: 'available', kk: '', zh: 'adj. 可用的', unit: 13, example: '', exampleZh: '' },\n    { id: 20440, en: 'avenue', kk: '', zh: 'n. 大道', unit: 13, example: '', exampleZh: '' },\n    { id: 20441, en: 'average', kk: '', zh: 'adj. 平均的', unit: 13, example: '', exampleZh: '' },\n    { id: 20442, en: 'avoid', kk: '', zh: 'v. 避免', unit: 13, example: 'Sam tries to win Jess back while she tries to avoid him', exampleZh: '山姆試圖贏回傑西，而傑西則試圖避開他' },\n    { id: 20443, en: 'await', kk: '', zh: 'v. 等候', unit: 13, example: '', exampleZh: '' },\n    { id: 20444, en: 'awake', kk: '', zh: 'adj. 醒著的', unit: 13, example: '', exampleZh: '' },\n    { id: 20445, en: 'award', kk: '', zh: 'n. 獎', unit: 13, example: '', exampleZh: '' },\n    { id: 20446, en: 'aware', kk: '', zh: 'adj. 意識到的', unit: 13, example: '', exampleZh: '' },\n    { id: 20447, en: 'awareness', kk: '', zh: 'n. 意識', unit: 13, example: '', exampleZh: '' },\n    { id: 20448, en: 'awful', kk: '', zh: 'adj. 糟糕的', unit: 13, example: 'an awful speech', exampleZh: '一次糟糕的演講' },\n    { id: 20449, en: 'awkward', kk: '', zh: 'adj. 尷尬的', unit: 13, example: '', exampleZh: '' },\n    { id: 20450, en: 'backdrop', kk: '', zh: 'n. 背景', unit: 13, example: '', exampleZh: '' },\n    { id: 20451, en: 'background', kk: '', zh: 'n. 背景', unit: 13, example: '', exampleZh: '' },\n    { id: 20452, en: 'backlog', kk: '', zh: 'n. 積壓的工作', unit: 13, example: '', exampleZh: '' },\n    { id: 20453, en: 'backup', kk: '', zh: 'n. 備份', unit: 13, example: '', exampleZh: '' },\n    { id: 20454, en: 'baggage', kk: '', zh: 'n. 行李', unit: 13, example: '', exampleZh: '' },\n    { id: 20455, en: 'balance', kk: '', zh: 'n. 餘額；平衡', unit: 13, example: '', exampleZh: '' },\n    { id: 20456, en: 'ballot', kk: '', zh: 'n. 選票', unit: 13, example: '', exampleZh: '' },\n    { id: 20457, en: 'ban', kk: '', zh: 'v. 禁止', unit: 13, example: '', exampleZh: '' },\n    { id: 20458, en: 'band', kk: '', zh: 'n. 樂團', unit: 13, example: 'a narrow band of gold was her only jewelry', exampleZh: '一條窄金帶是她唯一的珠寶' },\n    { id: 20459, en: 'bankrupt', kk: '', zh: 'adj. 破產的', unit: 13, example: '', exampleZh: '' },\n    { id: 20460, en: 'bankruptcy', kk: '', zh: 'n. 破產', unit: 13, example: '', exampleZh: '' },\n    { id: 20461, en: 'banner', kk: '', zh: 'n. 橫幅', unit: 13, example: '', exampleZh: '' },\n    { id: 20462, en: 'banquet', kk: '', zh: 'n. 宴會', unit: 13, example: '', exampleZh: '' },\n    { id: 20463, en: 'bare', kk: '', zh: 'adj. 裸露的', unit: 13, example: 'bare floorboards', exampleZh: '裸露的地板' },\n    { id: 20464, en: 'barely', kk: '', zh: 'adv. 幾乎不', unit: 13, example: '', exampleZh: '' },\n    { id: 20465, en: 'bargain', kk: '', zh: 'n. 交易；便宜貨', unit: 13, example: '', exampleZh: '' },\n    { id: 20466, en: 'barrier', kk: '', zh: 'n. 障礙', unit: 13, example: '', exampleZh: '' },\n    { id: 20467, en: 'base', kk: '', zh: 'n. 基礎', unit: 13, example: 'she and her boyfriend got to second base', exampleZh: '她和她的男朋友到達二壘' },\n    { id: 20468, en: 'basic', kk: '', zh: 'adj. 基本的', unit: 13, example: 'a coarse-grained, basic, plutonic rock', exampleZh: '粗粒基性深成岩' },\n    { id: 20469, en: 'basis', kk: '', zh: 'n. 基礎', unit: 13, example: '', exampleZh: '' },\n    { id: 20470, en: 'bear', kk: '', zh: 'v. 忍受；承擔', unit: 13, example: 'no one likes to bear the responsibility for such decisions', exampleZh: '沒有人願意為這樣的決定負責' },\n    { id: 20471, en: 'beat', kk: '', zh: 'v. 擊敗', unit: 13, example: 'public clamor for more police officers on the beat', exampleZh: '民眾呼籲增加警力' },\n    { id: 20472, en: 'behalf', kk: '', zh: 'n. 代表', unit: 13, example: '', exampleZh: '' },\n    { id: 20473, en: 'behave', kk: '', zh: 'v. 表現', unit: 13, example: '', exampleZh: '' },\n    { id: 20474, en: 'behavior', kk: '', zh: 'n. 行為', unit: 13, example: '', exampleZh: '' },\n    { id: 20475, en: 'belongings', kk: '', zh: 'n. 財產', unit: 13, example: '', exampleZh: '' },\n    { id: 20476, en: 'below', kk: '', zh: 'prep. 在...之下', unit: 13, example: 'the most common methods are shown below', exampleZh: '最常見的方法如下圖所示' },\n    { id: 20477, en: 'benchmark', kk: '', zh: 'n. 基準', unit: 13, example: '', exampleZh: '' },\n    { id: 20478, en: 'beneficial', kk: '', zh: 'adj. 有益的', unit: 13, example: '', exampleZh: '' },\n    { id: 20479, en: 'benefit', kk: '', zh: 'n. 福利；利益', unit: 13, example: '', exampleZh: '' },\n    { id: 20480, en: 'beside', kk: '', zh: 'prep. 在...旁邊', unit: 13, example: 'on the table beside the bed', exampleZh: '在床邊的桌子上' },\n    { id: 20481, en: 'besides', kk: '', zh: 'adv. 此外', unit: 13, example: '', exampleZh: '' },\n    { id: 20482, en: 'betray', kk: '', zh: 'v. 背叛', unit: 13, example: '', exampleZh: '' },\n    { id: 20483, en: 'beverage', kk: '', zh: 'n. 飲料', unit: 13, example: '', exampleZh: '' },\n    { id: 20484, en: 'beyond', kk: '', zh: 'prep. 超過', unit: 13, example: '', exampleZh: '' },\n    { id: 20485, en: 'bias', kk: '', zh: 'n. 偏見', unit: 13, example: '', exampleZh: '' },\n    { id: 20486, en: 'bid', kk: '', zh: 'n. 投標；v. 出價', unit: 13, example: '', exampleZh: '' },\n    { id: 20487, en: 'bill', kk: '', zh: 'n. 帳單', unit: 13, example: 'he was running up a bill of hundreds of dollars', exampleZh: '他已經欠了幾百美元的帳單' },\n    { id: 20488, en: 'bind', kk: '', zh: 'v. 綁', unit: 13, example: 'a protein in a form that can bind DNA', exampleZh: '一種可以結合 DNA 的蛋白質' },\n    { id: 20489, en: 'biography', kk: '', zh: 'n. 傳記', unit: 13, example: '', exampleZh: '' },\n    { id: 20490, en: 'biology', kk: '', zh: 'n. 生物學', unit: 13, example: '', exampleZh: '' },\n    { id: 20491, en: 'bitter', kk: '', zh: 'adj. 苦的', unit: 13, example: 'the raw berries have an intensely bitter flavor', exampleZh: '生漿果有強烈的苦味' },\n    { id: 20492, en: 'blame', kk: '', zh: 'v. 責備', unit: 13, example: '', exampleZh: '' },\n    { id: 20493, en: 'blank', kk: '', zh: 'adj. 空白的', unit: 13, example: 'her mind went blank', exampleZh: '她的大腦一片空白' },\n    { id: 20494, en: 'blanket', kk: '', zh: 'n. 毛毯', unit: 13, example: '', exampleZh: '' },\n    { id: 20495, en: 'blast', kk: '', zh: 'n. 爆炸', unit: 13, example: '', exampleZh: '' },\n    { id: 20496, en: 'blend', kk: '', zh: 'v. 混合', unit: 13, example: '', exampleZh: '' },\n    { id: 20497, en: 'blind', kk: '', zh: 'adj. 瞎的', unit: 13, example: 'he\'s absolutely blind where you\'re concerned, isn\'t he?', exampleZh: '就你而言，他絕對是瞎子，不是嗎？' },\n    { id: 20498, en: 'block', kk: '', zh: 'n. 街區', unit: 13, example: 'they tried to block the release of the film', exampleZh: '他們試圖阻止這部電影的上映' },\n    { id: 20499, en: 'bloom', kk: '', zh: 'v. 開花', unit: 13, example: '', exampleZh: '' },\n    { id: 20500, en: 'board', kk: '', zh: 'n. 董事會；v. 登機', unit: 13, example: 'they would not be able to board without a ticket', exampleZh: '沒有票他們將無法登機' },\n    { id: 20501, en: 'boast', kk: '', zh: 'v. 吹噓', unit: 13, example: '', exampleZh: '' },\n    { id: 20502, en: 'bold', kk: '', zh: 'adj. 大膽的', unit: 13, example: 'she tossed him a bold look', exampleZh: '她大膽地看了他一眼' },\n    { id: 20503, en: 'bond', kk: '', zh: 'n. 債券', unit: 13, example: '', exampleZh: '' },\n    { id: 20504, en: 'bonus', kk: '', zh: 'n. 獎金', unit: 13, example: '', exampleZh: '' },\n    { id: 20505, en: 'booklet', kk: '', zh: 'n. 小冊子', unit: 13, example: '', exampleZh: '' },\n    { id: 20506, en: 'boom', kk: '', zh: 'n. 繁榮', unit: 13, example: '', exampleZh: '' },\n    { id: 20507, en: 'boost', kk: '', zh: 'v. 促進', unit: 13, example: '', exampleZh: '' },\n    { id: 20508, en: 'booth', kk: '', zh: 'n. 攤位；小隔間', unit: 13, example: '', exampleZh: '' },\n    { id: 20509, en: 'border', kk: '', zh: 'n. 邊界', unit: 13, example: '', exampleZh: '' },\n    { id: 20510, en: 'bother', kk: '', zh: 'v. 打擾', unit: 13, example: 'I hope she hasn\'t been a bother', exampleZh: '我希望她沒有打擾' },\n    { id: 20511, en: 'bottom', kk: '', zh: 'n. 底部', unit: 13, example: 'the bottom of the page', exampleZh: '頁面底部' },\n    { id: 20512, en: 'bounce', kk: '', zh: 'v. 彈跳', unit: 13, example: '', exampleZh: '' },\n    { id: 20513, en: 'bound', kk: '', zh: 'adj. 綁住的', unit: 13, example: '', exampleZh: '' },\n    { id: 20514, en: 'boundary', kk: '', zh: 'n. 邊界', unit: 13, example: '', exampleZh: '' },\n    { id: 20515, en: 'branch', kk: '', zh: 'n. 分支', unit: 13, example: 'he went to work at our Boston branch', exampleZh: '他到我們波士頓分公司工作' },\n    { id: 20516, en: 'brand', kk: '', zh: 'n. 品牌', unit: 13, example: 'a new brand of detergent', exampleZh: '一種新品牌的洗滌劑' },\n    { id: 20517, en: 'brave', kk: '', zh: 'adj. 勇敢的', unit: 13, example: 'we had to brave the full heat of the sun', exampleZh: '我們不得不勇敢地面對太陽的炎熱' },\n    { id: 20518, en: 'breach', kk: '', zh: 'n. 違反', unit: 13, example: '', exampleZh: '' },\n    { id: 20519, en: 'break', kk: '', zh: 'n. 休息', unit: 13, example: 'a break of 83 put him in front for the first time', exampleZh: '83桿的單桿成績讓他首次領先' },\n    { id: 20520, en: 'breakdown', kk: '', zh: 'n. 故障', unit: 13, example: '', exampleZh: '' },\n    { id: 20521, en: 'breakthrough', kk: '', zh: 'n. 突破', unit: 13, example: '', exampleZh: '' },\n    { id: 20522, en: 'breathe', kk: '', zh: 'v. 呼吸', unit: 13, example: '', exampleZh: '' },\n    { id: 20523, en: 'brief', kk: '', zh: 'adj. 簡短的', unit: 13, example: 'introductions were brief and polite', exampleZh: '介紹簡短而禮貌' },\n    { id: 20524, en: 'briefcase', kk: '', zh: 'n. 公事包', unit: 13, example: '', exampleZh: '' },\n    { id: 20525, en: 'briefing', kk: '', zh: 'n. 簡報', unit: 13, example: '', exampleZh: '' },\n    { id: 20526, en: 'brilliant', kk: '', zh: 'adj. 輝煌的', unit: 13, example: 'brilliant sunshine illuminated the scene', exampleZh: '燦爛的陽光照亮了現場' },\n    { id: 20527, en: 'bring', kk: '', zh: 'v. 帶來', unit: 13, example: 'I\'ll give you an aspirin to bring down your temperature', exampleZh: '我會給你一片阿斯匹靈來降低你的體溫' },\n    { id: 20528, en: 'broad', kk: '', zh: 'adj. 寬廣的', unit: 13, example: 'three broad categories of mutual funds', exampleZh: '共同基金三大類' },\n    { id: 20529, en: 'broadcast', kk: '', zh: 'v. 廣播', unit: 13, example: 'a broadcast journalist', exampleZh: '一名廣播記者' },\n    { id: 20530, en: 'broaden', kk: '', zh: 'v. 變寬', unit: 13, example: '', exampleZh: '' },\n    { id: 20531, en: 'brochure', kk: '', zh: 'n. 小冊子', unit: 13, example: '', exampleZh: '' },\n    { id: 20532, en: 'broker', kk: '', zh: 'n. 經紀人', unit: 13, example: '', exampleZh: '' },\n    { id: 20533, en: 'browse', kk: '', zh: 'v. 瀏覽', unit: 13, example: '', exampleZh: '' },\n    { id: 20534, en: 'browser', kk: '', zh: 'n. 瀏覽器', unit: 13, example: '', exampleZh: '' },\n    { id: 20535, en: 'budget', kk: '', zh: 'n. 預算', unit: 13, example: '', exampleZh: '' },\n    { id: 20536, en: 'build', kk: '', zh: 'v. 建築', unit: 13, example: 'they need to build a strong relationship with journal users', exampleZh: '他們需要與期刊使用者建立牢固的關係' },\n    { id: 20537, en: 'building', kk: '', zh: 'n. 建築物', unit: 13, example: 'the building of democracy in Guatemala', exampleZh: '瓜地馬拉的民主建設' },\n    { id: 20538, en: 'bulk', kk: '', zh: 'n. 體積；大量', unit: 13, example: '', exampleZh: '' },\n    { id: 20539, en: 'bulletin', kk: '', zh: 'n. 公告', unit: 13, example: '', exampleZh: '' },\n    { id: 20540, en: 'bunch', kk: '', zh: 'n. 串', unit: 13, example: '', exampleZh: '' },\n    { id: 20541, en: 'bundle', kk: '', zh: 'n. 束', unit: 13, example: '', exampleZh: '' },\n    { id: 20542, en: 'burden', kk: '', zh: 'n. 負擔', unit: 13, example: '', exampleZh: '' },\n    { id: 20543, en: 'bureau', kk: '', zh: 'n. 局', unit: 13, example: '', exampleZh: '' },\n    { id: 20544, en: 'burn', kk: '', zh: 'v. 燃燒', unit: 13, example: 'exercise does help to burn calories', exampleZh: '運動確實有助於燃燒卡路里' },\n    { id: 20545, en: 'burst', kk: '', zh: 'v. 爆裂', unit: 13, example: 'he burst the balloon', exampleZh: '他把氣球弄破了' },\n    { id: 20546, en: 'business', kk: '', zh: 'n. 商業', unit: 13, example: '', exampleZh: '' },\n    { id: 20547, en: 'button', kk: '', zh: 'n. 按鈕', unit: 13, example: 'just search for the app you want and click the \'buy\' or \'install\' button', exampleZh: '只需搜尋您想要的應用程序，然後點擊“購買”或“安裝”按鈕' },\n    { id: 20548, en: 'bypass', kk: '', zh: 'v. 繞過', unit: 13, example: '', exampleZh: '' },\n    { id: 20549, en: 'cabinet', kk: '', zh: 'n. 櫥櫃', unit: 13, example: '', exampleZh: '' },\n    { id: 20550, en: 'cable', kk: '', zh: 'n. 電纜', unit: 13, example: 'he caught a glimpse of the mast, a cable or two downwind', exampleZh: '他瞥見了桅杆，順風的一兩條纜繩' },\n    { id: 20551, en: 'calculate', kk: '', zh: 'v. 計算', unit: 13, example: '', exampleZh: '' },\n    { id: 20552, en: 'calculation', kk: '', zh: 'n. 計算', unit: 13, example: '', exampleZh: '' },\n    { id: 20553, en: 'calculator', kk: '', zh: 'n. 計算機', unit: 13, example: '', exampleZh: '' },\n    { id: 20554, en: 'calendar', kk: '', zh: 'n. 日曆', unit: 13, example: '', exampleZh: '' },\n    { id: 20555, en: 'campaign', kk: '', zh: 'n. 活動', unit: 13, example: '', exampleZh: '' },\n    { id: 20556, en: 'campus', kk: '', zh: 'n. 校園', unit: 13, example: '', exampleZh: '' },\n    { id: 20557, en: 'cancel', kk: '', zh: 'v. 取消', unit: 13, example: 'a stamp franked and with an adhesive cancel', exampleZh: '蓋有加蓋郵戳和黏膠蓋銷的郵票' },\n    { id: 20558, en: 'cancellation', kk: '', zh: 'n. 取消', unit: 13, example: '', exampleZh: '' },\n    { id: 20559, en: 'candidate', kk: '', zh: 'n. 候選人；應徵者', unit: 13, example: '', exampleZh: '' },\n    { id: 20560, en: 'canvas', kk: '', zh: 'n. 帆布', unit: 13, example: '', exampleZh: '' },\n    { id: 20561, en: 'capable', kk: '', zh: 'adj. 有能力的', unit: 13, example: 'a highly capable man', exampleZh: '一個很有能力的人' },\n    { id: 20562, en: 'capacity', kk: '', zh: 'n. 容量；能力', unit: 13, example: '', exampleZh: '' },\n    { id: 20563, en: 'capital', kk: '', zh: 'n. 資本', unit: 13, example: 'he\'s a really capital fellow', exampleZh: '他真是個資本家' },\n    { id: 20564, en: 'capture', kk: '', zh: 'v. 捕捉', unit: 13, example: '', exampleZh: '' },\n    { id: 20565, en: 'carbon', kk: '', zh: 'n. 碳', unit: 13, example: '', exampleZh: '' },\n    { id: 20566, en: 'care', kk: '', zh: 'n. 照顧', unit: 13, example: 'you care very deeply for him', exampleZh: '你非常關心他' },\n    { id: 20567, en: 'career', kk: '', zh: 'n. 職業', unit: 13, example: '', exampleZh: '' },\n    { id: 20568, en: 'careful', kk: '', zh: 'adj. 小心的', unit: 13, example: 'be careful not to lose her address', exampleZh: '小心不要遺失她的地址' },\n    { id: 20569, en: 'careless', kk: '', zh: 'adj. 粗心的', unit: 13, example: '', exampleZh: '' },\n    { id: 20570, en: 'cargo', kk: '', zh: 'n. 貨物', unit: 13, example: '', exampleZh: '' },\n    { id: 20571, en: 'carrier', kk: '', zh: 'n. 運輸工具', unit: 13, example: '', exampleZh: '' },\n    { id: 20572, en: 'carry', kk: '', zh: 'v. 攜帶', unit: 13, example: 'they relied on dialogue to carry the plot', exampleZh: '他們依靠對話來推動情節' },\n    { id: 20573, en: 'cart', kk: '', zh: 'n. 手推車', unit: 13, example: 'from the product page select the size and quantity you\'d like and click ‘Buy’ to add it to your cart', exampleZh: '從產品頁面選擇您想要的尺寸和數量，然後點擊「購買」將其新增至您的購物車' },\n    { id: 20574, en: 'case', kk: '', zh: 'n. 情況', unit: 13, example: 'a libel case', exampleZh: '誹謗案' },\n    { id: 20575, en: 'cash', kk: '', zh: 'n. 現金', unit: 13, example: 'a discount for cash', exampleZh: '現金折扣' },\n    { id: 20576, en: 'cashier', kk: '', zh: 'n. 收銀員', unit: 13, example: '', exampleZh: '' },\n    { id: 20577, en: 'catalog', kk: '', zh: 'n. 目錄', unit: 13, example: '', exampleZh: '' },\n    { id: 20578, en: 'catch', kk: '', zh: 'v. 抓', unit: 13, example: 'there was a catch in Anne\'s voice', exampleZh: '安妮的聲音有些哽咽' },\n    { id: 20579, en: 'category', kk: '', zh: 'n. 類別', unit: 13, example: '', exampleZh: '' },\n    { id: 20580, en: 'cater', kk: '', zh: 'v. 迎合', unit: 13, example: '', exampleZh: '' },\n    { id: 20581, en: 'catering', kk: '', zh: 'n. 外燴服務', unit: 13, example: '', exampleZh: '' },\n    { id: 20582, en: 'cause', kk: '', zh: 'n. 原因', unit: 13, example: 'I\'m raising money for a good cause', exampleZh: '我正在為公益事業籌集資金' },\n    { id: 20583, en: 'caution', kk: '', zh: 'n. 警告', unit: 13, example: '', exampleZh: '' },\n    { id: 20584, en: 'cautious', kk: '', zh: 'adj. 謹慎的', unit: 13, example: '', exampleZh: '' },\n    { id: 20585, en: 'cease', kk: '', zh: 'v. 停止', unit: 13, example: '', exampleZh: '' },\n    { id: 20586, en: 'ceiling', kk: '', zh: 'n. 天花板', unit: 13, example: '', exampleZh: '' },\n    { id: 20587, en: 'celebrate', kk: '', zh: 'v. 慶祝', unit: 14, example: '', exampleZh: '' },\n    { id: 20588, en: 'celebration', kk: '', zh: 'n. 慶典', unit: 14, example: '', exampleZh: '' },\n    { id: 20589, en: 'celebrity', kk: '', zh: 'n. 名人', unit: 14, example: '', exampleZh: '' },\n    { id: 20590, en: 'cell', kk: '', zh: 'n. 細胞', unit: 14, example: '', exampleZh: '' },\n    { id: 20591, en: 'censor', kk: '', zh: 'v. 審查', unit: 14, example: '', exampleZh: '' },\n    { id: 20592, en: 'census', kk: '', zh: 'n. 人口普查', unit: 14, example: '', exampleZh: '' },\n    { id: 20593, en: 'center', kk: '', zh: 'n. 中心', unit: 14, example: 'to center the needle, turn the knob', exampleZh: '轉動旋鈕，使針居中' },\n    { id: 20594, en: 'central', kk: '', zh: 'adj. 中央的', unit: 14, example: 'the station has a central courtyard', exampleZh: '車站有一個中央庭院' },\n    { id: 20595, en: 'century', kk: '', zh: 'n. 世紀', unit: 14, example: '', exampleZh: '' },\n    { id: 20596, en: 'ceremony', kk: '', zh: 'n. 典禮', unit: 14, example: '', exampleZh: '' },\n    { id: 20597, en: 'certain', kk: '', zh: 'adj. 確定的', unit: 14, example: 'true and certain knowledge of the essence of existence', exampleZh: '關於存在本質的真實且確定的知識' },\n    { id: 20598, en: 'certainly', kk: '', zh: 'adv. 確實地', unit: 14, example: '', exampleZh: '' },\n    { id: 20599, en: 'certificate', kk: '', zh: 'n. 證書', unit: 14, example: '', exampleZh: '' },\n    { id: 20600, en: 'certification', kk: '', zh: 'n. 證明', unit: 14, example: '', exampleZh: '' },\n    { id: 20601, en: 'certify', kk: '', zh: 'v. 證明', unit: 14, example: '', exampleZh: '' },\n    { id: 20602, en: 'chain', kk: '', zh: 'n. 鏈', unit: 14, example: '', exampleZh: '' },\n    { id: 20603, en: 'chair', kk: '', zh: 'n. 椅子', unit: 14, example: 'the editorial chair', exampleZh: '編輯主席' },\n    { id: 20604, en: 'chairman', kk: '', zh: 'n. 主席', unit: 14, example: '', exampleZh: '' },\n    { id: 20605, en: 'challenge', kk: '', zh: 'n. 挑戰', unit: 14, example: '', exampleZh: '' },\n    { id: 20606, en: 'chamber', kk: '', zh: 'n. 房間', unit: 14, example: '', exampleZh: '' },\n    { id: 20607, en: 'champion', kk: '', zh: 'n. 冠軍', unit: 14, example: '', exampleZh: '' },\n    { id: 20608, en: 'championship', kk: '', zh: 'n. 錦標賽', unit: 14, example: '', exampleZh: '' },\n    { id: 20609, en: 'chance', kk: '', zh: 'n. 機會', unit: 14, example: 'a chance meeting', exampleZh: '一次偶然的相遇' },\n    { id: 20610, en: 'change', kk: '', zh: 'v. 改變', unit: 14, example: 'I watched him pocket the change', exampleZh: '我看著他把零錢放進口袋' },\n    { id: 20611, en: 'channel', kk: '', zh: 'n. 頻道', unit: 14, example: '', exampleZh: '' },\n    { id: 20612, en: 'chaos', kk: '', zh: 'n. 混亂', unit: 14, example: '', exampleZh: '' },\n    { id: 20613, en: 'character', kk: '', zh: 'n. 性格', unit: 14, example: '', exampleZh: '' },\n    { id: 20614, en: 'characteristic', kk: '', zh: 'adj. 典型的', unit: 14, example: '', exampleZh: '' },\n    { id: 20615, en: 'characterize', kk: '', zh: 'v. 描繪', unit: 14, example: '', exampleZh: '' },\n    { id: 20616, en: 'charge', kk: '', zh: 'v. 收費', unit: 14, example: 'he appeared in court on a charge of attempted murder', exampleZh: '他因謀殺未遂罪名出庭' },\n    { id: 20617, en: 'charity', kk: '', zh: 'n. 慈善', unit: 14, example: '', exampleZh: '' },\n    { id: 20618, en: 'chart', kk: '', zh: 'n. 圖表', unit: 14, example: 'scribbled on a patient\'s chart', exampleZh: '潦草地寫在病人的病歷上' },\n    { id: 20619, en: 'charter', kk: '', zh: 'n. 憲章', unit: 14, example: '', exampleZh: '' },\n    { id: 20620, en: 'chase', kk: '', zh: 'v. 追逐', unit: 14, example: 'a chase for limited supplies of hard currency', exampleZh: '追逐有限的硬通貨供應' },\n    { id: 20621, en: 'chat', kk: '', zh: 'v. 聊天', unit: 14, example: '', exampleZh: '' },\n    { id: 20622, en: 'cheap', kk: '', zh: 'adj. 便宜的', unit: 14, example: 'a cheap restaurant', exampleZh: '一家便宜的餐館' },\n    { id: 20623, en: 'cheat', kk: '', zh: 'v. 欺騙', unit: 14, example: 'a liar and a cheat', exampleZh: '騙子和騙子' },\n    { id: 20624, en: 'check', kk: '', zh: 'v. 檢查', unit: 14, example: 'on Wednesdays he wore the small check', exampleZh: '星期三他戴著小支票' },\n    { id: 20625, en: 'checkout', kk: '', zh: 'n. 結帳', unit: 14, example: '', exampleZh: '' },\n    { id: 20626, en: 'cheer', kk: '', zh: 'v. 歡呼', unit: 14, example: '', exampleZh: '' },\n    { id: 20627, en: 'cheerful', kk: '', zh: 'adj. 開朗的', unit: 14, example: '', exampleZh: '' },\n    { id: 20628, en: 'chef', kk: '', zh: 'n. 廚師', unit: 14, example: '', exampleZh: '' },\n    { id: 20629, en: 'chemical', kk: '', zh: 'adj. 化學的', unit: 14, example: 'chemical treatments for killing fungi', exampleZh: '殺死真菌的化學處理' },\n    { id: 20630, en: 'chemist', kk: '', zh: 'n. 化學家', unit: 14, example: '', exampleZh: '' },\n    { id: 20631, en: 'chemistry', kk: '', zh: 'n. 化學', unit: 14, example: '', exampleZh: '' },\n    { id: 20632, en: 'cheque', kk: '', zh: 'n. 支票', unit: 14, example: '', exampleZh: '' },\n    { id: 20633, en: 'cherish', kk: '', zh: 'v. 珍惜', unit: 14, example: '', exampleZh: '' },\n    { id: 20634, en: 'chief', kk: '', zh: 'adj. 主要的', unit: 14, example: 'the chief of police', exampleZh: '警察局長' },\n    { id: 20635, en: 'childhood', kk: '', zh: 'n. 童年', unit: 14, example: '', exampleZh: '' },\n    { id: 20636, en: 'chill', kk: '', zh: 'n. 寒冷', unit: 14, example: 'a long-term chill in relations could hurt commerce', exampleZh: '關係長期冷淡可能會損害商業' },\n    { id: 20637, en: 'choice', kk: '', zh: 'n. 選擇', unit: 14, example: 'this CD drive is the perfect choice for your computer', exampleZh: '該 CD 驅動器是您電腦的完美選擇' },\n    { id: 20638, en: 'choir', kk: '', zh: 'n. 合唱團', unit: 14, example: '', exampleZh: '' },\n    { id: 20639, en: 'choose', kk: '', zh: 'v. 選擇', unit: 14, example: 'I\'ll stay as long as I choose', exampleZh: '只要我選擇，我就會留下來' },\n    { id: 20640, en: 'chore', kk: '', zh: 'n. 雜務', unit: 14, example: '', exampleZh: '' },\n    { id: 20641, en: 'chronic', kk: '', zh: 'adj. 慢性的', unit: 14, example: '', exampleZh: '' },\n    { id: 20642, en: 'circle', kk: '', zh: 'n. 圓圈', unit: 14, example: 'they all sat around in a circle', exampleZh: '他們圍坐成一圈' },\n    { id: 20643, en: 'circuit', kk: '', zh: 'n. 電路', unit: 14, example: '', exampleZh: '' },\n    { id: 20644, en: 'circular', kk: '', zh: 'adj. 圓形的', unit: 14, example: '', exampleZh: '' },\n    { id: 20645, en: 'circulate', kk: '', zh: 'v. 循環', unit: 14, example: '', exampleZh: '' },\n    { id: 20646, en: 'circulation', kk: '', zh: 'n. 循環', unit: 14, example: '', exampleZh: '' },\n    { id: 20647, en: 'circumstance', kk: '', zh: 'n. 情況', unit: 14, example: '', exampleZh: '' },\n    { id: 20648, en: 'cite', kk: '', zh: 'v. 引用', unit: 14, example: '', exampleZh: '' },\n    { id: 20649, en: 'citizen', kk: '', zh: 'n. 公民', unit: 14, example: '', exampleZh: '' },\n    { id: 20650, en: 'city', kk: '', zh: 'n. 城市', unit: 14, example: 'the city council', exampleZh: '市議會' },\n    { id: 20651, en: 'civic', kk: '', zh: 'adj. 城市的', unit: 14, example: '', exampleZh: '' },\n    { id: 20652, en: 'civil', kk: '', zh: 'adj. 公民的', unit: 14, example: 'a civil action', exampleZh: '民事訴訟' },\n    { id: 20653, en: 'civilian', kk: '', zh: 'n. 平民', unit: 14, example: '', exampleZh: '' },\n    { id: 20654, en: 'civilization', kk: '', zh: 'n. 文明', unit: 14, example: '', exampleZh: '' },\n    { id: 20655, en: 'claim', kk: '', zh: 'v. 聲稱', unit: 14, example: 'these sunblocks claim protection factors as high as 34', exampleZh: '這些防曬霜聲稱防護係數高達 34' },\n    { id: 20656, en: 'clarify', kk: '', zh: 'v. 澄清', unit: 14, example: '', exampleZh: '' },\n    { id: 20657, en: 'clarity', kk: '', zh: 'n. 清楚', unit: 14, example: '', exampleZh: '' },\n    { id: 20658, en: 'clash', kk: '', zh: 'v. 衝突', unit: 14, example: '', exampleZh: '' },\n    { id: 20659, en: 'classic', kk: '', zh: 'adj. 經典的', unit: 14, example: 'I had all the classic symptoms of flu', exampleZh: '我有流感的所有典型症狀' },\n    { id: 20660, en: 'classical', kk: '', zh: 'adj. 古典的', unit: 14, example: '', exampleZh: '' },\n    { id: 20661, en: 'classification', kk: '', zh: 'n. 分類', unit: 14, example: '', exampleZh: '' },\n    { id: 20662, en: 'classify', kk: '', zh: 'v. 分類', unit: 14, example: '', exampleZh: '' },\n    { id: 20663, en: 'clause', kk: '', zh: 'n. 條款', unit: 14, example: '', exampleZh: '' },\n    { id: 20664, en: 'clean', kk: '', zh: 'adj. 乾淨的', unit: 14, example: 'I searched him and his luggage, and he was clean', exampleZh: '我搜了他和他的行李，他很乾淨' },\n    { id: 20665, en: 'clear', kk: '', zh: 'adj. 清楚的', unit: 14, example: 'the plane rose high enough to clear the trees', exampleZh: '飛機升得夠高，可以清理樹木' },\n    { id: 20666, en: 'clearance', kk: '', zh: 'n. 清除', unit: 14, example: '', exampleZh: '' },\n    { id: 20667, en: 'clerk', kk: '', zh: 'n. 職員', unit: 14, example: '', exampleZh: '' },\n    { id: 20668, en: 'clever', kk: '', zh: 'adj. 聰明的', unit: 14, example: 'how clever of him to think of this!', exampleZh: '他想到這一點真是太聰明了！' },\n    { id: 20669, en: 'click', kk: '', zh: 'v. 點擊', unit: 14, example: '', exampleZh: '' },\n    { id: 20670, en: 'client', kk: '', zh: 'n. 客戶', unit: 14, example: '', exampleZh: '' },\n    { id: 20671, en: 'clientele', kk: '', zh: 'n. 客戶群', unit: 14, example: '', exampleZh: '' },\n    { id: 20672, en: 'climate', kk: '', zh: 'n. 氣候', unit: 14, example: '', exampleZh: '' },\n    { id: 20673, en: 'climax', kk: '', zh: 'n. 頂點', unit: 14, example: '', exampleZh: '' },\n    { id: 20674, en: 'climb', kk: '', zh: 'v. 攀登', unit: 14, example: 'his long climb from poverty', exampleZh: '他擺脫貧窮的漫長歷程' },\n    { id: 20675, en: 'cling', kk: '', zh: 'v. 緊抓', unit: 14, example: '', exampleZh: '' },\n    { id: 20676, en: 'clinic', kk: '', zh: 'n. 診所', unit: 14, example: '', exampleZh: '' },\n    { id: 20677, en: 'clip', kk: '', zh: 'n. 夾子', unit: 14, example: '', exampleZh: '' },\n    { id: 20678, en: 'clock', kk: '', zh: 'n. 時鐘', unit: 14, example: 'they play against the clock', exampleZh: '他們爭分奪秒' },\n    { id: 20679, en: 'close', kk: '', zh: 'adj. 靠近的', unit: 14, example: 'the months of living in close proximity to her were taking their toll', exampleZh: '與她住得很近的幾個月讓她付出了代價' },\n    { id: 20680, en: 'closet', kk: '', zh: 'n. 壁櫥', unit: 14, example: '', exampleZh: '' },\n    { id: 20681, en: 'closure', kk: '', zh: 'n. 關閉', unit: 14, example: '', exampleZh: '' },\n    { id: 20682, en: 'clothe', kk: '', zh: 'v. 給...穿衣', unit: 14, example: 'they already had eight children to feed and clothe', exampleZh: '他們已經有八個孩子需要吃穿' },\n    { id: 20683, en: 'clothes', kk: '', zh: 'n. 衣服', unit: 14, example: '', exampleZh: '' },\n    { id: 20684, en: 'clothing', kk: '', zh: 'n. 衣物', unit: 14, example: '', exampleZh: '' },\n    { id: 20685, en: 'cloud', kk: '', zh: 'n. 雲', unit: 14, example: 'a cloud of dust', exampleZh: '一團塵埃' },\n    { id: 20686, en: 'clue', kk: '', zh: 'n. 線索', unit: 14, example: '', exampleZh: '' },\n    { id: 20687, en: 'clumsy', kk: '', zh: 'adj. 笨拙的', unit: 14, example: '', exampleZh: '' },\n    { id: 20688, en: 'cluster', kk: '', zh: 'n. 簇', unit: 14, example: '', exampleZh: '' },\n    { id: 20689, en: 'coach', kk: '', zh: 'n. 教練', unit: 14, example: 'a football coach', exampleZh: '足球教練' },\n    { id: 20690, en: 'coalition', kk: '', zh: 'n. 聯盟', unit: 14, example: '', exampleZh: '' },\n    { id: 20691, en: 'coarse', kk: '', zh: 'adj. 粗糙的', unit: 14, example: '', exampleZh: '' },\n    { id: 20692, en: 'coast', kk: '', zh: 'n. 海岸', unit: 14, example: 'the coast road', exampleZh: '海岸路' },\n    { id: 20693, en: 'code', kk: '', zh: 'n. 代碼', unit: 14, example: '', exampleZh: '' },\n    { id: 20694, en: 'coffee', kk: '', zh: 'n. 咖啡', unit: 14, example: 'a cup of coffee', exampleZh: '一杯咖啡' },\n    { id: 20695, en: 'cognitive', kk: '', zh: 'adj. 認知的', unit: 14, example: '', exampleZh: '' },\n    { id: 20696, en: 'cohere', kk: '', zh: 'v. 連貫', unit: 14, example: '', exampleZh: '' },\n    { id: 20697, en: 'coherent', kk: '', zh: 'adj. 連貫的', unit: 14, example: '', exampleZh: '' },\n    { id: 20698, en: 'cohesion', kk: '', zh: 'n. 凝聚力', unit: 14, example: '', exampleZh: '' },\n    { id: 20699, en: 'cohesive', kk: '', zh: 'adj. 有凝聚力的', unit: 14, example: '', exampleZh: '' },\n    { id: 20700, en: 'coincide', kk: '', zh: 'v. 同時發生', unit: 14, example: '', exampleZh: '' },\n    { id: 20701, en: 'coincidence', kk: '', zh: 'n. 巧合', unit: 14, example: '', exampleZh: '' },\n    { id: 20702, en: 'collaborate', kk: '', zh: 'v. 合作', unit: 14, example: '', exampleZh: '' },\n    { id: 20703, en: 'collaboration', kk: '', zh: 'n. 合作', unit: 14, example: '', exampleZh: '' },\n    { id: 20704, en: 'collapse', kk: '', zh: 'v. 倒塌', unit: 14, example: '', exampleZh: '' },\n    { id: 20705, en: 'collar', kk: '', zh: 'n. 衣領', unit: 14, example: '', exampleZh: '' },\n    { id: 20706, en: 'colleague', kk: '', zh: 'n. 同事', unit: 14, example: '', exampleZh: '' },\n    { id: 20707, en: 'collect', kk: '', zh: 'v. 收集', unit: 14, example: 'dust and dirt collect so quickly', exampleZh: '灰塵和污垢積得如此之快' },\n    { id: 20708, en: 'collection', kk: '', zh: 'n. 收藏品', unit: 14, example: '', exampleZh: '' },\n    { id: 20709, en: 'collective', kk: '', zh: 'adj. 集體的', unit: 14, example: '', exampleZh: '' },\n    { id: 20710, en: 'collector', kk: '', zh: 'n. 收藏家', unit: 14, example: '', exampleZh: '' },\n    { id: 20711, en: 'college', kk: '', zh: 'n. 大學', unit: 14, example: '', exampleZh: '' },\n    { id: 20712, en: 'collide', kk: '', zh: 'v. 碰撞', unit: 14, example: '', exampleZh: '' },\n    { id: 20713, en: 'collision', kk: '', zh: 'n. 碰撞', unit: 14, example: '', exampleZh: '' },\n    { id: 20714, en: 'color', kk: '', zh: 'n. 顏色', unit: 14, example: 'color flooded her skin as she realized what he meant', exampleZh: '當她意識到他的意思時，顏色淹沒了她的皮膚' },\n    { id: 20715, en: 'column', kk: '', zh: 'n. 專欄', unit: 14, example: '', exampleZh: '' },\n    { id: 20716, en: 'combat', kk: '', zh: 'n. 戰鬥', unit: 14, example: '', exampleZh: '' },\n    { id: 20717, en: 'combination', kk: '', zh: 'n. 結合', unit: 14, example: '', exampleZh: '' },\n    { id: 20718, en: 'combine', kk: '', zh: 'v. 結合', unit: 14, example: '', exampleZh: '' },\n    { id: 20719, en: 'come', kk: '', zh: 'v. 來', unit: 14, example: 'do you want to come fishing tomorrow?', exampleZh: '你明天想來釣魚嗎？' },\n    { id: 20720, en: 'comedy', kk: '', zh: 'n. 喜劇', unit: 14, example: '', exampleZh: '' },\n    { id: 20721, en: 'comfort', kk: '', zh: 'n. 舒適', unit: 14, example: '', exampleZh: '' },\n    { id: 20722, en: 'comfortable', kk: '', zh: 'adj. 舒服的', unit: 14, example: 'a comfortable victory', exampleZh: '輕鬆的勝利' },\n    { id: 20723, en: 'comic', kk: '', zh: 'adj. 滑稽的', unit: 14, example: '', exampleZh: '' },\n    { id: 20724, en: 'command', kk: '', zh: 'v. 命令', unit: 14, example: '', exampleZh: '' },\n    { id: 20725, en: 'commander', kk: '', zh: 'n. 指揮官', unit: 14, example: '', exampleZh: '' },\n    { id: 20726, en: 'commemorate', kk: '', zh: 'v. 紀念', unit: 14, example: '', exampleZh: '' },\n    { id: 20727, en: 'commence', kk: '', zh: 'v. 開始', unit: 14, example: '', exampleZh: '' },\n    { id: 20728, en: 'commend', kk: '', zh: 'v. 稱讚', unit: 14, example: '', exampleZh: '' },\n    { id: 20729, en: 'comment', kk: '', zh: 'n. 評論', unit: 14, example: '', exampleZh: '' },\n    { id: 20730, en: 'commerce', kk: '', zh: 'n. 商業', unit: 14, example: '', exampleZh: '' },\n    { id: 20731, en: 'commercial', kk: '', zh: 'adj. 商業的', unit: 14, example: '', exampleZh: '' },\n    { id: 20732, en: 'commission', kk: '', zh: 'n. 佣金；委員會', unit: 14, example: '', exampleZh: '' },\n    { id: 20733, en: 'commit', kk: '', zh: 'v. 犯', unit: 14, example: '', exampleZh: '' },\n    { id: 20734, en: 'commitment', kk: '', zh: 'n. 承諾', unit: 14, example: '', exampleZh: '' },\n    { id: 20735, en: 'committee', kk: '', zh: 'n. 委員會', unit: 14, example: '', exampleZh: '' },\n    { id: 20736, en: 'commodity', kk: '', zh: 'n. 商品', unit: 14, example: '', exampleZh: '' },\n    { id: 20737, en: 'common', kk: '', zh: 'adj. 常見的', unit: 14, example: 'the common or vernacular name', exampleZh: '俗名或俗名' },\n    { id: 20738, en: 'commonly', kk: '', zh: 'adv. 通常', unit: 14, example: '', exampleZh: '' },\n    { id: 20739, en: 'communicate', kk: '', zh: 'v. 溝通', unit: 14, example: '', exampleZh: '' },\n    { id: 20740, en: 'communication', kk: '', zh: 'n. 溝通', unit: 14, example: '', exampleZh: '' },\n    { id: 20741, en: 'commute', kk: '', zh: 'v. 通勤', unit: 14, example: '', exampleZh: '' },\n    { id: 20742, en: 'commuter', kk: '', zh: 'n. 通勤者', unit: 14, example: '', exampleZh: '' },\n    { id: 20743, en: 'compact', kk: '', zh: 'adj. 緊湊的', unit: 14, example: '', exampleZh: '' },\n    { id: 20744, en: 'companion', kk: '', zh: 'n. 同伴', unit: 14, example: '', exampleZh: '' },\n    { id: 20745, en: 'company', kk: '', zh: 'n. 公司', unit: 14, example: '', exampleZh: '' },\n    { id: 20746, en: 'comparable', kk: '', zh: 'adj. 可比較的', unit: 14, example: '', exampleZh: '' },\n    { id: 20747, en: 'comparative', kk: '', zh: 'adj. 比較的', unit: 14, example: '', exampleZh: '' },\n    { id: 20748, en: 'compare', kk: '', zh: 'v. 比較', unit: 14, example: 'sales were modest and cannot compare with the glory days of 1989', exampleZh: '銷量平平，無法與 1989 年的輝煌歲月相比' },\n    { id: 20749, en: 'comparison', kk: '', zh: 'n. 比較', unit: 14, example: '', exampleZh: '' },\n    { id: 20750, en: 'compass', kk: '', zh: 'n. 指南針', unit: 14, example: '', exampleZh: '' },\n    { id: 20751, en: 'compassion', kk: '', zh: 'n. 同情', unit: 14, example: '', exampleZh: '' },\n    { id: 20752, en: 'compatible', kk: '', zh: 'adj. 兼容的', unit: 14, example: '', exampleZh: '' },\n    { id: 20753, en: 'compel', kk: '', zh: 'v. 強迫', unit: 14, example: '', exampleZh: '' },\n    { id: 20754, en: 'compelling', kk: '', zh: 'adj. 引人注目的', unit: 14, example: '', exampleZh: '' },\n    { id: 20755, en: 'compensate', kk: '', zh: 'v. 補償', unit: 14, example: '', exampleZh: '' },\n    { id: 20756, en: 'compensation', kk: '', zh: 'n. 補償；薪酬', unit: 14, example: '', exampleZh: '' },\n    { id: 20757, en: 'compete', kk: '', zh: 'v. 競爭', unit: 14, example: '', exampleZh: '' },\n    { id: 20758, en: 'competence', kk: '', zh: 'n. 能力', unit: 14, example: '', exampleZh: '' },\n    { id: 20759, en: 'competent', kk: '', zh: 'adj. 勝任的', unit: 14, example: '', exampleZh: '' },\n    { id: 20760, en: 'competition', kk: '', zh: 'n. 競爭', unit: 14, example: '', exampleZh: '' },\n    { id: 20761, en: 'competitive', kk: '', zh: 'adj. 有競爭力的', unit: 14, example: '', exampleZh: '' },\n    { id: 20762, en: 'competitor', kk: '', zh: 'n. 競爭者', unit: 14, example: '', exampleZh: '' },\n    { id: 20763, en: 'compile', kk: '', zh: 'v. 編譯', unit: 14, example: '', exampleZh: '' },\n    { id: 20764, en: 'complain', kk: '', zh: 'v. 抱怨', unit: 14, example: 'her husband began to complain of headaches', exampleZh: '她的丈夫開始抱怨頭痛' },\n    { id: 20765, en: 'complaint', kk: '', zh: 'n. 抱怨；投訴', unit: 14, example: '', exampleZh: '' },\n    { id: 20766, en: 'complement', kk: '', zh: 'n. 補充物', unit: 14, example: '', exampleZh: '' },\n    { id: 20767, en: 'complete', kk: '', zh: 'adj. 完整的', unit: 14, example: 'a complete ban on smoking', exampleZh: '全面禁煙' },\n    { id: 20768, en: 'completion', kk: '', zh: 'n. 完成', unit: 14, example: '', exampleZh: '' },\n    { id: 20769, en: 'complex', kk: '', zh: 'adj. 複雜的', unit: 14, example: 'a complex of hotels', exampleZh: '飯店綜合體' },\n    { id: 20770, en: 'complexity', kk: '', zh: 'n. 複雜性', unit: 14, example: '', exampleZh: '' },\n    { id: 20771, en: 'compliance', kk: '', zh: 'n. 遵守；合規', unit: 15, example: '', exampleZh: '' },\n    { id: 20772, en: 'complicate', kk: '', zh: 'v. 使複雜化', unit: 15, example: '', exampleZh: '' },\n    { id: 20773, en: 'complicated', kk: '', zh: 'adj. 複雜的', unit: 15, example: '', exampleZh: '' },\n    { id: 20774, en: 'complication', kk: '', zh: 'n. 併發症', unit: 15, example: '', exampleZh: '' },\n    { id: 20775, en: 'compliment', kk: '', zh: 'n. 讚美', unit: 15, example: '', exampleZh: '' },\n    { id: 20776, en: 'complimentary', kk: '', zh: 'adj. 免費的', unit: 15, example: '', exampleZh: '' },\n    { id: 20777, en: 'comply', kk: '', zh: 'v. 遵守', unit: 15, example: '', exampleZh: '' },\n    { id: 20778, en: 'component', kk: '', zh: 'n. 零件', unit: 15, example: '', exampleZh: '' },\n    { id: 20779, en: 'compose', kk: '', zh: 'v. 組成', unit: 15, example: '', exampleZh: '' },\n    { id: 20780, en: 'composer', kk: '', zh: 'n. 作曲家', unit: 15, example: '', exampleZh: '' },\n    { id: 20781, en: 'composition', kk: '', zh: 'n. 作文', unit: 15, example: '', exampleZh: '' },\n    { id: 20782, en: 'compound', kk: '', zh: 'n. 混合物', unit: 15, example: '', exampleZh: '' },\n    { id: 20783, en: 'comprehend', kk: '', zh: 'v. 理解', unit: 15, example: '', exampleZh: '' },\n    { id: 20784, en: 'comprehension', kk: '', zh: 'n. 理解', unit: 15, example: '', exampleZh: '' },\n    { id: 20785, en: 'comprehensive', kk: '', zh: 'adj. 全面的', unit: 15, example: '', exampleZh: '' },\n    { id: 20786, en: 'compress', kk: '', zh: 'v. 壓縮', unit: 15, example: '', exampleZh: '' },\n    { id: 20787, en: 'comprise', kk: '', zh: 'v. 包含', unit: 15, example: '', exampleZh: '' },\n    { id: 20788, en: 'compromise', kk: '', zh: 'n. 妥協', unit: 15, example: '', exampleZh: '' },\n    { id: 20789, en: 'compulsory', kk: '', zh: 'adj. 義務的', unit: 15, example: '', exampleZh: '' },\n    { id: 20790, en: 'compute', kk: '', zh: 'v. 計算', unit: 15, example: '', exampleZh: '' },\n    { id: 20791, en: 'computer', kk: '', zh: 'n. 電腦', unit: 15, example: '', exampleZh: '' },\n    { id: 20792, en: 'conceal', kk: '', zh: 'v. 隱藏', unit: 15, example: '', exampleZh: '' },\n    { id: 20793, en: 'concede', kk: '', zh: 'v. 退讓', unit: 15, example: '', exampleZh: '' },\n    { id: 20794, en: 'conceit', kk: '', zh: 'n. 自負', unit: 15, example: '', exampleZh: '' },\n    { id: 20795, en: 'conceive', kk: '', zh: 'v. 構思', unit: 15, example: '', exampleZh: '' },\n    { id: 20796, en: 'concentrate', kk: '', zh: 'v. 集中', unit: 15, example: '', exampleZh: '' },\n    { id: 20797, en: 'concentration', kk: '', zh: 'n. 集中', unit: 15, example: '', exampleZh: '' },\n    { id: 20798, en: 'concept', kk: '', zh: 'n. 概念', unit: 15, example: '', exampleZh: '' },\n    { id: 20799, en: 'conception', kk: '', zh: 'n. 觀念', unit: 15, example: '', exampleZh: '' },\n    { id: 20800, en: 'concern', kk: '', zh: 'v. 關心', unit: 15, example: '', exampleZh: '' },\n    { id: 20801, en: 'concerning', kk: '', zh: 'prep. 關於', unit: 15, example: '', exampleZh: '' },\n    { id: 20802, en: 'concert', kk: '', zh: 'n. 音樂會', unit: 15, example: '', exampleZh: '' },\n    { id: 20803, en: 'concession', kk: '', zh: 'n. 讓步', unit: 15, example: '', exampleZh: '' },\n    { id: 20804, en: 'concise', kk: '', zh: 'adj. 簡潔的', unit: 15, example: '', exampleZh: '' },\n    { id: 20805, en: 'conclude', kk: '', zh: 'v. 結束', unit: 15, example: '', exampleZh: '' },\n    { id: 20806, en: 'conclusion', kk: '', zh: 'n. 結論', unit: 15, example: '', exampleZh: '' },\n    { id: 20807, en: 'conclusive', kk: '', zh: 'adj. 決定性的', unit: 15, example: '', exampleZh: '' },\n    { id: 20808, en: 'concrete', kk: '', zh: 'adj. 具體的', unit: 15, example: '', exampleZh: '' },\n    { id: 20809, en: 'concur', kk: '', zh: 'v. 同意', unit: 15, example: '', exampleZh: '' },\n    { id: 20810, en: 'condemn', kk: '', zh: 'v. 譴責', unit: 15, example: '', exampleZh: '' },\n    { id: 20811, en: 'condense', kk: '', zh: 'v. 壓縮', unit: 15, example: '', exampleZh: '' },\n    { id: 20812, en: 'condition', kk: '', zh: 'n. 情況', unit: 15, example: '', exampleZh: '' },\n    { id: 20813, en: 'conduct', kk: '', zh: 'v. 進行', unit: 15, example: '', exampleZh: '' },\n    { id: 20814, en: 'conductor', kk: '', zh: 'n. 指揮', unit: 15, example: '', exampleZh: '' },\n    { id: 20815, en: 'cone', kk: '', zh: 'n. 圓錐體', unit: 15, example: '', exampleZh: '' },\n    { id: 20816, en: 'confer', kk: '', zh: 'v. 協商', unit: 15, example: '', exampleZh: '' },\n    { id: 20817, en: 'conference', kk: '', zh: 'n. 會議', unit: 15, example: '', exampleZh: '' },\n    { id: 20818, en: 'confess', kk: '', zh: 'v. 承認', unit: 15, example: '', exampleZh: '' },\n    { id: 20819, en: 'confession', kk: '', zh: 'n. 承認', unit: 15, example: '', exampleZh: '' },\n    { id: 20820, en: 'confide', kk: '', zh: 'v. 吐露', unit: 15, example: '', exampleZh: '' },\n    { id: 20821, en: 'confidence', kk: '', zh: 'n. 信心', unit: 15, example: '', exampleZh: '' },\n    { id: 20822, en: 'confident', kk: '', zh: 'adj. 自信的', unit: 15, example: '', exampleZh: '' },\n    { id: 20823, en: 'confidential', kk: '', zh: 'adj. 機密的', unit: 15, example: '', exampleZh: '' },\n    { id: 20824, en: 'configure', kk: '', zh: 'v. 配置', unit: 15, example: '', exampleZh: '' },\n    { id: 20825, en: 'confine', kk: '', zh: 'v. 限制', unit: 15, example: '', exampleZh: '' },\n    { id: 20826, en: 'confirm', kk: '', zh: 'v. 確認', unit: 15, example: 'Mr. Baker\'s assistant telephoned to confirm his appointment with the chairman', exampleZh: '貝克先生的助理打電話確認他與董事長的任命' },\n    { id: 20827, en: 'confirmation', kk: '', zh: 'n. 確認', unit: 15, example: '', exampleZh: '' },\n    { id: 20828, en: 'conflict', kk: '', zh: 'n. 衝突', unit: 15, example: 'parents\' and children\'s interests sometimes conflict', exampleZh: '父母和孩子的利益有時會發生衝突' },\n    { id: 20829, en: 'conform', kk: '', zh: 'v. 遵守', unit: 15, example: '', exampleZh: '' },\n    { id: 20830, en: 'conformity', kk: '', zh: 'n. 遵從', unit: 15, example: '', exampleZh: '' },\n    { id: 20831, en: 'confront', kk: '', zh: 'v. 面對', unit: 15, example: '', exampleZh: '' },\n    { id: 20832, en: 'confrontation', kk: '', zh: 'n. 對抗', unit: 15, example: '', exampleZh: '' },\n    { id: 20833, en: 'confuse', kk: '', zh: 'v. 使困惑', unit: 15, example: '', exampleZh: '' },\n    { id: 20834, en: 'confusion', kk: '', zh: 'n. 困惑', unit: 15, example: '', exampleZh: '' },\n    { id: 20835, en: 'congratulate', kk: '', zh: 'v. 祝賀', unit: 15, example: '', exampleZh: '' },\n    { id: 20836, en: 'congratulation', kk: '', zh: 'n. 祝賀', unit: 15, example: '', exampleZh: '' },\n    { id: 20837, en: 'congregation', kk: '', zh: 'n. 集合', unit: 15, example: '', exampleZh: '' },\n    { id: 20838, en: 'congress', kk: '', zh: 'n. 國會', unit: 15, example: '', exampleZh: '' },\n    { id: 20839, en: 'connect', kk: '', zh: 'v. 連接', unit: 15, example: '', exampleZh: '' },\n    { id: 20840, en: 'connection', kk: '', zh: 'n. 連接', unit: 15, example: '', exampleZh: '' },\n    { id: 20841, en: 'conquer', kk: '', zh: 'v. 征服', unit: 15, example: '', exampleZh: '' },\n    { id: 20842, en: 'conquest', kk: '', zh: 'n. 征服', unit: 15, example: '', exampleZh: '' },\n    { id: 20843, en: 'conscience', kk: '', zh: 'n. 良心', unit: 15, example: '', exampleZh: '' },\n    { id: 20844, en: 'conscientious', kk: '', zh: 'adj. 認真的', unit: 15, example: '', exampleZh: '' },\n    { id: 20845, en: 'conscious', kk: '', zh: 'adj. 有意識的', unit: 15, example: '', exampleZh: '' },\n    { id: 20846, en: 'consciousness', kk: '', zh: 'n. 意識', unit: 15, example: '', exampleZh: '' },\n    { id: 20847, en: 'consecutive', kk: '', zh: 'adj. 連續的', unit: 15, example: '', exampleZh: '' },\n    { id: 20848, en: 'consensus', kk: '', zh: 'n. 共識', unit: 15, example: '', exampleZh: '' },\n    { id: 20849, en: 'consent', kk: '', zh: 'n. 同意', unit: 15, example: '', exampleZh: '' },\n    { id: 20850, en: 'consequence', kk: '', zh: 'n. 結果', unit: 15, example: '', exampleZh: '' },\n    { id: 20851, en: 'consequent', kk: '', zh: 'adj. 隨之發生的', unit: 15, example: '', exampleZh: '' },\n    { id: 20852, en: 'consequently', kk: '', zh: 'adv. 因此', unit: 15, example: '', exampleZh: '' },\n    { id: 20853, en: 'conservation', kk: '', zh: 'n. 保存', unit: 15, example: '', exampleZh: '' },\n    { id: 20854, en: 'conservative', kk: '', zh: 'adj. 保守的', unit: 15, example: '', exampleZh: '' },\n    { id: 20855, en: 'conserve', kk: '', zh: 'v. 保存', unit: 15, example: '', exampleZh: '' },\n    { id: 20856, en: 'consider', kk: '', zh: 'v. 考慮', unit: 15, example: 'I consider him irresponsible', exampleZh: '我認為他不負責任' },\n    { id: 20857, en: 'considerable', kk: '', zh: 'adj. 相當大的', unit: 15, example: 'a position of considerable influence', exampleZh: '有相當影響力的地位' },\n    { id: 20858, en: 'considerably', kk: '', zh: 'adv. 相當地', unit: 15, example: '', exampleZh: '' },\n    { id: 20859, en: 'considerate', kk: '', zh: 'adj. 體貼的', unit: 15, example: '', exampleZh: '' },\n    { id: 20860, en: 'consideration', kk: '', zh: 'n. 考慮', unit: 15, example: '', exampleZh: '' },\n    { id: 20861, en: 'consist', kk: '', zh: 'v. 組成', unit: 15, example: '', exampleZh: '' },\n    { id: 20862, en: 'consistency', kk: '', zh: 'n. 一致性', unit: 15, example: '', exampleZh: '' },\n    { id: 20863, en: 'consistent', kk: '', zh: 'adj. 一致的', unit: 15, example: '', exampleZh: '' },\n    { id: 20864, en: 'console', kk: '', zh: 'v. 安慰', unit: 15, example: '', exampleZh: '' },\n    { id: 20865, en: 'consolidate', kk: '', zh: 'v. 鞏固', unit: 15, example: '', exampleZh: '' },\n    { id: 20866, en: 'conspicuous', kk: '', zh: 'adj. 顯著的', unit: 15, example: '', exampleZh: '' },\n    { id: 20867, en: 'conspiracy', kk: '', zh: 'n. 陰謀', unit: 15, example: '', exampleZh: '' },\n    { id: 20868, en: 'constant', kk: '', zh: 'adj. 不斷的', unit: 15, example: '', exampleZh: '' },\n    { id: 20869, en: 'constantly', kk: '', zh: 'adv. 經常地', unit: 15, example: '', exampleZh: '' },\n    { id: 20870, en: 'constitute', kk: '', zh: 'v. 構成', unit: 15, example: '', exampleZh: '' },\n    { id: 20871, en: 'constitution', kk: '', zh: 'n. 憲法', unit: 15, example: '', exampleZh: '' },\n    { id: 20872, en: 'constraint', kk: '', zh: 'n. 限制', unit: 15, example: '', exampleZh: '' },\n    { id: 20873, en: 'construct', kk: '', zh: 'v. 建造', unit: 15, example: '', exampleZh: '' },\n    { id: 20874, en: 'construction', kk: '', zh: 'n. 建設', unit: 15, example: '', exampleZh: '' },\n    { id: 20875, en: 'constructive', kk: '', zh: 'adj. 建設性的', unit: 15, example: '', exampleZh: '' },\n    { id: 20876, en: 'consult', kk: '', zh: 'v. 請教', unit: 15, example: '', exampleZh: '' },\n    { id: 20877, en: 'consultant', kk: '', zh: 'n. 顧問', unit: 15, example: '', exampleZh: '' },\n    { id: 20878, en: 'consultation', kk: '', zh: 'n. 諮詢', unit: 15, example: '', exampleZh: '' },\n    { id: 20879, en: 'consume', kk: '', zh: 'v. 消耗', unit: 15, example: '', exampleZh: '' },\n    { id: 20880, en: 'consumer', kk: '', zh: 'n. 消費者', unit: 15, example: '', exampleZh: '' },\n    { id: 20881, en: 'consumption', kk: '', zh: 'n. 消費', unit: 15, example: '', exampleZh: '' },\n    { id: 20882, en: 'contact', kk: '', zh: 'v. 接觸', unit: 15, example: 'contact dermatitis', exampleZh: '接觸性皮膚炎' },\n    { id: 20883, en: 'contain', kk: '', zh: 'v. 包含', unit: 15, example: 'she was scarcely able to contain herself as she waited to spill the beans', exampleZh: '當她等待洩露秘密時，她幾乎無法控制自己' },\n    { id: 20884, en: 'container', kk: '', zh: 'n. 容器', unit: 15, example: '', exampleZh: '' },\n    { id: 20885, en: 'contaminate', kk: '', zh: 'v. 汙染', unit: 15, example: '', exampleZh: '' },\n    { id: 20886, en: 'contemplate', kk: '', zh: 'v. 沉思', unit: 15, example: '', exampleZh: '' },\n    { id: 20887, en: 'contemporary', kk: '', zh: 'adj. 當代的', unit: 15, example: '', exampleZh: '' },\n    { id: 20888, en: 'contempt', kk: '', zh: 'n. 輕視', unit: 15, example: '', exampleZh: '' },\n    { id: 20889, en: 'contend', kk: '', zh: 'v. 競爭', unit: 15, example: '', exampleZh: '' },\n    { id: 20890, en: 'content', kk: '', zh: 'n. 內容', unit: 15, example: '', exampleZh: '' },\n    { id: 20891, en: 'contention', kk: '', zh: 'n. 爭論', unit: 15, example: '', exampleZh: '' },\n    { id: 20892, en: 'contest', kk: '', zh: 'n. 比賽', unit: 15, example: '', exampleZh: '' },\n    { id: 20893, en: 'context', kk: '', zh: 'n. 背景', unit: 15, example: '', exampleZh: '' },\n    { id: 20894, en: 'continent', kk: '', zh: 'n. 大陸', unit: 15, example: '', exampleZh: '' },\n    { id: 20895, en: 'contingency', kk: '', zh: 'n. 意外事故', unit: 15, example: '', exampleZh: '' },\n    { id: 20896, en: 'continue', kk: '', zh: 'v. 繼續', unit: 15, example: 'they have indicated their willingness to continue in office', exampleZh: '他們已表示願意繼續任職' },\n    { id: 20897, en: 'continuous', kk: '', zh: 'adj. 連續的', unit: 15, example: '', exampleZh: '' },\n    { id: 20898, en: 'contract', kk: '', zh: 'n. 合約', unit: 15, example: '', exampleZh: '' },\n    { id: 20899, en: 'contractor', kk: '', zh: 'n. 承包商', unit: 15, example: '', exampleZh: '' },\n    { id: 20900, en: 'contradict', kk: '', zh: 'v. 反駁', unit: 15, example: '', exampleZh: '' },\n    { id: 20901, en: 'contradiction', kk: '', zh: 'n. 矛盾', unit: 15, example: '', exampleZh: '' },\n    { id: 20902, en: 'contrary', kk: '', zh: 'adj. 相反的', unit: 15, example: '', exampleZh: '' },\n    { id: 20903, en: 'contrast', kk: '', zh: 'n. 對比', unit: 15, example: '', exampleZh: '' },\n    { id: 20904, en: 'contribute', kk: '', zh: 'v. 貢獻', unit: 15, example: '', exampleZh: '' },\n    { id: 20905, en: 'contribution', kk: '', zh: 'n. 貢獻', unit: 15, example: '', exampleZh: '' },\n    { id: 20906, en: 'contributor', kk: '', zh: 'n. 貢獻者', unit: 15, example: '', exampleZh: '' },\n    { id: 20907, en: 'contrive', kk: '', zh: 'v. 發明', unit: 15, example: '', exampleZh: '' },\n    { id: 20908, en: 'control', kk: '', zh: 'v. 控制', unit: 15, example: 'passport control', exampleZh: '護照檢查' },\n    { id: 20909, en: 'controversial', kk: '', zh: 'adj. 有爭議的', unit: 15, example: '', exampleZh: '' },\n    { id: 20910, en: 'controversy', kk: '', zh: 'n. 爭議', unit: 15, example: '', exampleZh: '' },\n    { id: 20911, en: 'convene', kk: '', zh: 'v. 召集', unit: 15, example: '', exampleZh: '' },\n    { id: 20912, en: 'convenience', kk: '', zh: 'n. 便利', unit: 15, example: '', exampleZh: '' },\n    { id: 20913, en: 'convenient', kk: '', zh: 'adj. 方便的', unit: 15, example: 'the 34-story building is convenient to downtown', exampleZh: '34層大樓，去市中心很方便' },\n    { id: 20914, en: 'convention', kk: '', zh: 'n. 慣例', unit: 15, example: '', exampleZh: '' },\n    { id: 20915, en: 'conventional', kk: '', zh: 'adj. 傳統的', unit: 15, example: '', exampleZh: '' },\n    { id: 20916, en: 'converge', kk: '', zh: 'v. 匯聚', unit: 15, example: '', exampleZh: '' },\n    { id: 20917, en: 'conversation', kk: '', zh: 'n. 對話', unit: 15, example: '', exampleZh: '' },\n    { id: 20918, en: 'converse', kk: '', zh: 'v. 交談', unit: 15, example: '', exampleZh: '' },\n    { id: 20919, en: 'conversion', kk: '', zh: 'n. 轉換', unit: 15, example: '', exampleZh: '' },\n    { id: 20920, en: 'convert', kk: '', zh: 'v. 轉換', unit: 15, example: '', exampleZh: '' },\n    { id: 20921, en: 'convey', kk: '', zh: 'v. 傳達', unit: 15, example: '', exampleZh: '' },\n    { id: 20922, en: 'convict', kk: '', zh: 'v. 定罪', unit: 15, example: '', exampleZh: '' },\n    { id: 20923, en: 'conviction', kk: '', zh: 'n. 確信', unit: 15, example: '', exampleZh: '' },\n    { id: 20924, en: 'convince', kk: '', zh: 'v. 使確信', unit: 15, example: '', exampleZh: '' },\n    { id: 20925, en: 'convincing', kk: '', zh: 'adj. 令人信服的', unit: 15, example: '', exampleZh: '' },\n    { id: 20926, en: 'cook', kk: '', zh: 'v. 烹調', unit: 15, example: 'a short order cook', exampleZh: '速食廚師' },\n    { id: 20927, en: 'cool', kk: '', zh: 'adj. 涼爽的', unit: 15, example: 'he made no concessions to fashion, yet somehow he was hip and cool', exampleZh: '他對時尚毫不讓步，但不知怎的，他又時髦又酷' },\n    { id: 20928, en: 'cooperate', kk: '', zh: 'v. 合作', unit: 15, example: '', exampleZh: '' },\n    { id: 20929, en: 'cooperation', kk: '', zh: 'n. 合作', unit: 15, example: '', exampleZh: '' },\n    { id: 20930, en: 'cooperative', kk: '', zh: 'adj. 合作的', unit: 15, example: '', exampleZh: '' },\n    { id: 20931, en: 'coordinate', kk: '', zh: 'v. 協調', unit: 15, example: '', exampleZh: '' },\n    { id: 20932, en: 'coordination', kk: '', zh: 'n. 協調', unit: 15, example: '', exampleZh: '' },\n    { id: 20933, en: 'cop', kk: '', zh: 'n. 警察', unit: 15, example: '', exampleZh: '' },\n    { id: 20934, en: 'cope', kk: '', zh: 'v. 應付', unit: 15, example: '', exampleZh: '' },\n    { id: 20935, en: 'copy', kk: '', zh: 'n. 副本', unit: 15, example: 'this is Edwards, do you copy, over', exampleZh: '這是愛德華茲，聽到了嗎，結束' },\n    { id: 20936, en: 'copyright', kk: '', zh: 'n. 版權', unit: 15, example: '', exampleZh: '' },\n    { id: 20937, en: 'core', kk: '', zh: 'n. 核心', unit: 15, example: '', exampleZh: '' },\n    { id: 20938, en: 'corner', kk: '', zh: 'n. 角落', unit: 15, example: '', exampleZh: '' },\n    { id: 20939, en: 'corporate', kk: '', zh: 'adj. 公司的', unit: 15, example: '', exampleZh: '' },\n    { id: 20940, en: 'corporation', kk: '', zh: 'n. 公司；法人', unit: 15, example: '', exampleZh: '' },\n    { id: 20941, en: 'corps', kk: '', zh: 'n. 部隊', unit: 15, example: '', exampleZh: '' },\n    { id: 20942, en: 'correct', kk: '', zh: 'adj. 正確的', unit: 15, example: 'he was a polite man, invariably correct and pleasant with Mrs. Collins', exampleZh: '他是一個有禮貌的人，對柯林斯夫人總是正確且令人愉快' },\n    { id: 20943, en: 'correction', kk: '', zh: 'n. 訂正', unit: 15, example: '', exampleZh: '' },\n    { id: 20944, en: 'correlate', kk: '', zh: 'v. 使相關', unit: 15, example: '', exampleZh: '' },\n    { id: 20945, en: 'correlation', kk: '', zh: 'n. 相關性', unit: 15, example: '', exampleZh: '' },\n    { id: 20946, en: 'correspond', kk: '', zh: 'v. 符合', unit: 15, example: '', exampleZh: '' },\n    { id: 20947, en: 'correspondence', kk: '', zh: 'n. 通信；信件', unit: 15, example: '', exampleZh: '' },\n    { id: 20948, en: 'correspondent', kk: '', zh: 'n. 通訊記者', unit: 15, example: '', exampleZh: '' },\n    { id: 20949, en: 'corridor', kk: '', zh: 'n. 走廊', unit: 15, example: '', exampleZh: '' },\n    { id: 20950, en: 'corrupt', kk: '', zh: 'adj. 腐敗的', unit: 15, example: '', exampleZh: '' },\n    { id: 20951, en: 'corruption', kk: '', zh: 'n. 腐敗', unit: 15, example: '', exampleZh: '' },\n    { id: 20952, en: 'cost', kk: '', zh: 'n. 成本', unit: 15, example: 'if you want to own an island, it\'ll cost you', exampleZh: '如果你想擁有一座島嶼，你就得付出代價' },\n    { id: 20953, en: 'costly', kk: '', zh: 'adj. 昂貴的', unit: 16, example: 'the government\'s biggest and most costly mistake', exampleZh: '政府最大且代價最高的錯誤' },\n    { id: 20954, en: 'costume', kk: '', zh: 'n. 服裝', unit: 16, example: '', exampleZh: '' },\n    { id: 20955, en: 'cottage', kk: '', zh: 'n. 小屋', unit: 16, example: '', exampleZh: '' },\n    { id: 20956, en: 'cotton', kk: '', zh: 'n. 棉花', unit: 16, example: '', exampleZh: '' },\n    { id: 20957, en: 'couch', kk: '', zh: 'n. 沙發', unit: 16, example: '', exampleZh: '' },\n    { id: 20958, en: 'cough', kk: '', zh: 'v. 咳嗽', unit: 16, example: 'she gave a discreet cough', exampleZh: '她小心翼翼地咳嗽了一聲' },\n    { id: 20959, en: 'council', kk: '', zh: 'n. 議會', unit: 16, example: '', exampleZh: '' },\n    { id: 20960, en: 'counsel', kk: '', zh: 'n. 建議', unit: 16, example: '', exampleZh: '' },\n    { id: 20961, en: 'counseling', kk: '', zh: 'n. 輔導', unit: 16, example: '', exampleZh: '' },\n    { id: 20962, en: 'counselor', kk: '', zh: 'n. 顧問', unit: 16, example: '', exampleZh: '' },\n    { id: 20963, en: 'count', kk: '', zh: 'v. 計算', unit: 16, example: 'I count myself fortunate to have known him', exampleZh: '我認為自己很幸運能夠認識他' },\n    { id: 20964, en: 'counter', kk: '', zh: 'n. 櫃台', unit: 16, example: '', exampleZh: '' },\n    { id: 20965, en: 'counterpart', kk: '', zh: 'n. 對應的人或物', unit: 16, example: '', exampleZh: '' },\n    { id: 20966, en: 'country', kk: '', zh: 'n. 國家', unit: 16, example: 'Steinbeck country includes the Monterey Peninsula', exampleZh: '斯坦貝克國家包括蒙特利半島' },\n    { id: 20967, en: 'countryside', kk: '', zh: 'n. 鄉村', unit: 16, example: '', exampleZh: '' },\n    { id: 20968, en: 'county', kk: '', zh: 'n. 縣', unit: 16, example: '', exampleZh: '' },\n    { id: 20969, en: 'couple', kk: '', zh: 'n. 夫婦', unit: 16, example: 'a honeymoon couple', exampleZh: '一對蜜月夫婦' },\n    { id: 20970, en: 'courage', kk: '', zh: 'n. 勇氣', unit: 16, example: '', exampleZh: '' },\n    { id: 20971, en: 'courier', kk: '', zh: 'n. 快遞員', unit: 16, example: '', exampleZh: '' },\n    { id: 20972, en: 'course', kk: '', zh: 'n. 課程', unit: 16, example: 'the doctor prescribed a course of antibiotics', exampleZh: '醫生開了一個療程的抗生素' },\n    { id: 20973, en: 'court', kk: '', zh: 'n. 法庭', unit: 16, example: 'I prefer an indoor court', exampleZh: '我比較喜歡室內球場' },\n    { id: 20974, en: 'courtesy', kk: '', zh: 'n. 禮貌', unit: 16, example: '', exampleZh: '' },\n    { id: 20975, en: 'cover', kk: '', zh: 'v. 覆蓋', unit: 16, example: 'I moved in front of Hawk to cover him as he reloaded', exampleZh: '當霍克重新裝彈時，我走到他前面掩護他' },\n    { id: 20976, en: 'coverage', kk: '', zh: 'n. 涵蓋範圍；保險範圍', unit: 16, example: '', exampleZh: '' },\n    { id: 20977, en: 'coward', kk: '', zh: 'n. 懦夫', unit: 16, example: '', exampleZh: '' },\n    { id: 20978, en: 'crack', kk: '', zh: 'v. 破裂', unit: 16, example: '', exampleZh: '' },\n    { id: 20979, en: 'craft', kk: '', zh: 'n. 工藝', unit: 16, example: '', exampleZh: '' },\n    { id: 20980, en: 'crash', kk: '', zh: 'v. 碰撞', unit: 16, example: '', exampleZh: '' },\n    { id: 20981, en: 'crawl', kk: '', zh: 'v. 爬行', unit: 16, example: '', exampleZh: '' },\n    { id: 20982, en: 'crazy', kk: '', zh: 'adj. 瘋狂的', unit: 16, example: 'I\'m crazy about Cindy', exampleZh: '我為辛迪瘋狂' },\n    { id: 20983, en: 'create', kk: '', zh: 'v. 創造', unit: 16, example: '', exampleZh: '' },\n    { id: 20984, en: 'creation', kk: '', zh: 'n. 創造', unit: 16, example: '', exampleZh: '' },\n    { id: 20985, en: 'creative', kk: '', zh: 'adj. 有創造力的', unit: 16, example: 'creative writing', exampleZh: '創意寫作' },\n    { id: 20986, en: 'creativity', kk: '', zh: 'n. 創造力', unit: 16, example: '', exampleZh: '' },\n    { id: 20987, en: 'creator', kk: '', zh: 'n. 創造者', unit: 16, example: '', exampleZh: '' },\n    { id: 20988, en: 'creature', kk: '', zh: 'n. 生物', unit: 16, example: '', exampleZh: '' },\n    { id: 20989, en: 'credential', kk: '', zh: 'n. 憑證', unit: 16, example: '', exampleZh: '' },\n    { id: 20990, en: 'credit', kk: '', zh: 'n. 信用', unit: 16, example: '', exampleZh: '' },\n    { id: 20991, en: 'crew', kk: '', zh: 'n. 全體人員', unit: 16, example: '', exampleZh: '' },\n    { id: 20992, en: 'crime', kk: '', zh: 'n. 犯罪', unit: 16, example: '', exampleZh: '' },\n    { id: 20993, en: 'criminal', kk: '', zh: 'adj. 犯罪的', unit: 16, example: '', exampleZh: '' },\n    { id: 20994, en: 'cripple', kk: '', zh: 'v. 使殘廢', unit: 16, example: '', exampleZh: '' },\n    { id: 20995, en: 'crisis', kk: '', zh: 'n. 危機', unit: 16, example: '', exampleZh: '' },\n    { id: 20996, en: 'crisp', kk: '', zh: 'adj. 脆的', unit: 16, example: 'a crisp autumn day', exampleZh: '秋高氣爽的一天' },\n    { id: 20997, en: 'criteria', kk: '', zh: 'n. 標準', unit: 16, example: '', exampleZh: '' },\n    { id: 20998, en: 'criterion', kk: '', zh: 'n. 標準', unit: 16, example: '', exampleZh: '' },\n    { id: 20999, en: 'critic', kk: '', zh: 'n. 評論家', unit: 16, example: '', exampleZh: '' },\n    { id: 21000, en: 'critical', kk: '', zh: 'adj. 批評的', unit: 16, example: '', exampleZh: '' },\n    { id: 21001, en: 'criticism', kk: '', zh: 'n. 批評', unit: 16, example: '', exampleZh: '' },\n    { id: 21002, en: 'criticize', kk: '', zh: 'v. 批評', unit: 16, example: '', exampleZh: '' },\n    { id: 21003, en: 'crop', kk: '', zh: 'n. 農作物', unit: 16, example: 'she has her hair cut in a short crop', exampleZh: '她把頭髮剪成了短髮' },\n    { id: 21004, en: 'cross', kk: '', zh: 'v. 交叉', unit: 16, example: 'she wore a cross around her neck', exampleZh: '她脖子上戴著一個十字架' },\n    { id: 21005, en: 'crowd', kk: '', zh: 'n. 人群', unit: 16, example: 'he\'d become just another face in the crowd', exampleZh: '他變成了人群中的另一張臉孔' },\n    { id: 21006, en: 'crowded', kk: '', zh: 'adj. 擁擠的', unit: 16, example: '', exampleZh: '' },\n    { id: 21007, en: 'crucial', kk: '', zh: 'adj. 決定性的', unit: 16, example: '', exampleZh: '' },\n    { id: 21008, en: 'crude', kk: '', zh: 'adj. 粗糙的', unit: 16, example: '', exampleZh: '' },\n    { id: 21009, en: 'cruel', kk: '', zh: 'adj. 殘忍的', unit: 16, example: 'people who are cruel to animals', exampleZh: '虐待動物的人' },\n    { id: 21010, en: 'cruise', kk: '', zh: 'v. 巡航', unit: 16, example: '', exampleZh: '' },\n    { id: 21011, en: 'crush', kk: '', zh: 'v. 壓碎', unit: 16, example: '', exampleZh: '' },\n    { id: 21012, en: 'cry', kk: '', zh: 'v. 哭泣', unit: 16, example: 'a cry of despair', exampleZh: '絕望的呼喊' },\n    { id: 21013, en: 'crystal', kk: '', zh: 'n. 水晶', unit: 16, example: '', exampleZh: '' },\n    { id: 21014, en: 'cube', kk: '', zh: 'n. 立方體', unit: 16, example: '', exampleZh: '' },\n    { id: 21015, en: 'cue', kk: '', zh: 'n. 暗示', unit: 16, example: '', exampleZh: '' },\n    { id: 21016, en: 'cultivate', kk: '', zh: 'v. 培養', unit: 16, example: '', exampleZh: '' },\n    { id: 21017, en: 'cultivation', kk: '', zh: 'n. 培養', unit: 16, example: '', exampleZh: '' },\n    { id: 21018, en: 'cultural', kk: '', zh: 'adj. 文化的', unit: 16, example: '', exampleZh: '' },\n    { id: 21019, en: 'culture', kk: '', zh: 'n. 文化', unit: 16, example: '', exampleZh: '' },\n    { id: 21020, en: 'cupboard', kk: '', zh: 'n. 櫥櫃', unit: 16, example: '', exampleZh: '' },\n    { id: 21021, en: 'cure', kk: '', zh: 'v. 治療', unit: 16, example: 'he was beyond cure', exampleZh: '他已經無法治癒了' },\n    { id: 21022, en: 'curiosity', kk: '', zh: 'n. 好奇心', unit: 16, example: '', exampleZh: '' },\n    { id: 21023, en: 'curious', kk: '', zh: 'adj. 好奇的', unit: 16, example: 'I began to be curious about the whereabouts of the bride and groom', exampleZh: '我開始好奇新郎新娘的行蹤' },\n    { id: 21024, en: 'curl', kk: '', zh: 'v. 捲曲', unit: 16, example: '', exampleZh: '' },\n    { id: 21025, en: 'currency', kk: '', zh: 'n. 貨幣', unit: 16, example: '', exampleZh: '' },\n    { id: 21026, en: 'current', kk: '', zh: 'adj. 目前的', unit: 16, example: '', exampleZh: '' },\n    { id: 21027, en: 'currently', kk: '', zh: 'adv. 目前', unit: 16, example: '', exampleZh: '' },\n    { id: 21028, en: 'curriculum', kk: '', zh: 'n. 課程', unit: 16, example: '', exampleZh: '' },\n    { id: 21029, en: 'curve', kk: '', zh: 'n. 曲線', unit: 16, example: '', exampleZh: '' },\n    { id: 21030, en: 'custom', kk: '', zh: 'n. 習俗', unit: 16, example: '', exampleZh: '' },\n    { id: 21031, en: 'customer', kk: '', zh: 'n. 顧客', unit: 16, example: '', exampleZh: '' },\n    { id: 21032, en: 'customs', kk: '', zh: 'n. 海關', unit: 16, example: '', exampleZh: '' },\n    { id: 21033, en: 'cut', kk: '', zh: 'v. 切割', unit: 16, example: 'the country was cut into three parts', exampleZh: '這個國家被分成三個部分' },\n    { id: 21034, en: 'cute', kk: '', zh: 'adj. 可愛的', unit: 16, example: 'the baby was so cute', exampleZh: '寶寶太可愛了' },\n    { id: 21035, en: 'cycle', kk: '', zh: 'n. 循環', unit: 16, example: '', exampleZh: '' },\n    { id: 21036, en: 'cylinder', kk: '', zh: 'n. 圓柱體', unit: 16, example: '', exampleZh: '' },\n    { id: 21037, en: 'daily', kk: '', zh: 'adj. 每天的', unit: 16, example: 'boats can be rented for a daily rate', exampleZh: '可按日租用船隻' },\n    { id: 21038, en: 'damage', kk: '', zh: 'n. 損害', unit: 16, example: 'bombing caused extensive damage to the town', exampleZh: '轟炸對該鎮造成了嚴重破壞' },\n    { id: 21039, en: 'danger', kk: '', zh: 'n. 危險', unit: 16, example: 'there was no danger of the champagne running out', exampleZh: '沒有香檳用完的危險' },\n    { id: 21040, en: 'dangerous', kk: '', zh: 'adj. 危險的', unit: 16, example: 'a dangerous animal', exampleZh: '危險的動物' },\n    { id: 21041, en: 'dare', kk: '', zh: 'v. 敢', unit: 16, example: '', exampleZh: '' },\n    { id: 21042, en: 'dark', kk: '', zh: 'adj. 黑暗的', unit: 16, example: 'he is dark on certain points of scripture', exampleZh: '他對聖經的某些觀點很黑暗' },\n    { id: 21043, en: 'dash', kk: '', zh: 'v. 猛衝', unit: 16, example: '', exampleZh: '' },\n    { id: 21044, en: 'data', kk: '', zh: 'n. 數據', unit: 16, example: '', exampleZh: '' },\n    { id: 21045, en: 'database', kk: '', zh: 'n. 資料庫', unit: 16, example: '', exampleZh: '' },\n    { id: 21046, en: 'date', kk: '', zh: 'n. 日期', unit: 16, example: 'they date the paintings to 1460–70', exampleZh: '他們將這些畫作的年代定為 1460-70 年' },\n    { id: 21047, en: 'dawn', kk: '', zh: 'n. 黎明', unit: 16, example: 'the rose-pink light of dawn', exampleZh: '黎明的玫瑰粉色光芒' },\n    { id: 21048, en: 'dead', kk: '', zh: 'adj. 死的', unit: 16, example: 'he has been dead for many years', exampleZh: '他已經死很多年了' },\n    { id: 21049, en: 'deadline', kk: '', zh: 'n. 截止日期', unit: 16, example: '', exampleZh: '' },\n    { id: 21050, en: 'deadly', kk: '', zh: 'adj. 致命的', unit: 16, example: '', exampleZh: '' },\n    { id: 21051, en: 'deaf', kk: '', zh: 'adj. 聾的', unit: 16, example: 'I\'m a bit deaf so you\'ll have to speak up', exampleZh: '我有點聾所以你得大聲說話' },\n    { id: 21052, en: 'deal', kk: '', zh: 'n. 交易', unit: 16, example: 'he lost a great deal of blood', exampleZh: '他失血過多' },\n    { id: 21053, en: 'dealer', kk: '', zh: 'n. 經銷商', unit: 16, example: '', exampleZh: '' },\n    { id: 21054, en: 'debate', kk: '', zh: 'n. 辯論', unit: 16, example: 'the national debate on education', exampleZh: '全國教育辯論' },\n    { id: 21055, en: 'debris', kk: '', zh: 'n. 碎片', unit: 16, example: '', exampleZh: '' },\n    { id: 21056, en: 'debt', kk: '', zh: 'n. 債務', unit: 16, example: '', exampleZh: '' },\n    { id: 21057, en: 'debut', kk: '', zh: 'n. 初次登台', unit: 16, example: '', exampleZh: '' },\n    { id: 21058, en: 'decade', kk: '', zh: 'n. 十年', unit: 16, example: '', exampleZh: '' },\n    { id: 21059, en: 'decay', kk: '', zh: 'v. 腐爛', unit: 16, example: '', exampleZh: '' },\n    { id: 21060, en: 'deceit', kk: '', zh: 'n. 欺騙', unit: 16, example: '', exampleZh: '' },\n    { id: 21061, en: 'deceive', kk: '', zh: 'v. 欺騙', unit: 16, example: '', exampleZh: '' },\n    { id: 21062, en: 'decent', kk: '', zh: 'adj. 體面的', unit: 16, example: '', exampleZh: '' },\n    { id: 21063, en: 'decide', kk: '', zh: 'v. 決定', unit: 16, example: 'we must decide the fates of the people who headed the coup', exampleZh: '我們必須決定領導政變的人的命運' },\n    { id: 21064, en: 'decision', kk: '', zh: 'n. 決定', unit: 16, example: '', exampleZh: '' },\n    { id: 21065, en: 'decisive', kk: '', zh: 'adj. 決定性的', unit: 16, example: '', exampleZh: '' },\n    { id: 21066, en: 'deck', kk: '', zh: 'n. 甲板', unit: 16, example: '', exampleZh: '' },\n    { id: 21067, en: 'declaration', kk: '', zh: 'n. 宣佈', unit: 16, example: '', exampleZh: '' },\n    { id: 21068, en: 'declare', kk: '', zh: 'v. 宣佈', unit: 16, example: '', exampleZh: '' },\n    { id: 21069, en: 'decline', kk: '', zh: 'v. 下降', unit: 16, example: '', exampleZh: '' },\n    { id: 21070, en: 'decorate', kk: '', zh: 'v. 裝飾', unit: 16, example: '', exampleZh: '' },\n    { id: 21071, en: 'decoration', kk: '', zh: 'n. 裝飾', unit: 16, example: '', exampleZh: '' },\n    { id: 21072, en: 'decrease', kk: '', zh: 'v. 減少', unit: 16, example: '', exampleZh: '' },\n    { id: 21073, en: 'dedicate', kk: '', zh: 'v. 奉獻', unit: 16, example: '', exampleZh: '' },\n    { id: 21074, en: 'dedication', kk: '', zh: 'n. 奉獻', unit: 16, example: '', exampleZh: '' },\n    { id: 21075, en: 'deduct', kk: '', zh: 'v. 扣除', unit: 16, example: '', exampleZh: '' },\n    { id: 21076, en: 'deduction', kk: '', zh: 'n. 扣除', unit: 16, example: '', exampleZh: '' },\n    { id: 21077, en: 'deed', kk: '', zh: 'n. 行為', unit: 16, example: '', exampleZh: '' },\n    { id: 21078, en: 'deem', kk: '', zh: 'v. 認為', unit: 16, example: '', exampleZh: '' },\n    { id: 21079, en: 'deep', kk: '', zh: 'adj. 深的', unit: 16, example: 'a deep sleep', exampleZh: '沉睡' },\n    { id: 21080, en: 'deepen', kk: '', zh: 'v. 加深', unit: 16, example: '', exampleZh: '' },\n    { id: 21081, en: 'deeply', kk: '', zh: 'adv. 深深地', unit: 16, example: '', exampleZh: '' },\n    { id: 21082, en: 'deer', kk: '', zh: 'n. 鹿', unit: 16, example: '', exampleZh: '' },\n    { id: 21083, en: 'default', kk: '', zh: 'n. 違約', unit: 16, example: '', exampleZh: '' },\n    { id: 21084, en: 'defeat', kk: '', zh: 'v. 擊敗', unit: 16, example: '', exampleZh: '' },\n    { id: 21085, en: 'defect', kk: '', zh: 'n. 缺點', unit: 16, example: '', exampleZh: '' },\n    { id: 21086, en: 'defective', kk: '', zh: 'adj. 有缺陷的', unit: 16, example: '', exampleZh: '' },\n    { id: 21087, en: 'defend', kk: '', zh: 'v. 防禦', unit: 16, example: '', exampleZh: '' },\n    { id: 21088, en: 'defendant', kk: '', zh: 'n. 被告', unit: 16, example: '', exampleZh: '' },\n    { id: 21089, en: 'defense', kk: '', zh: 'n. 防禦', unit: 16, example: '', exampleZh: '' },\n    { id: 21090, en: 'defensive', kk: '', zh: 'adj. 防禦的', unit: 16, example: '', exampleZh: '' },\n    { id: 21091, en: 'defer', kk: '', zh: 'v. 推遲', unit: 16, example: '', exampleZh: '' },\n    { id: 21092, en: 'deficiency', kk: '', zh: 'n. 缺乏', unit: 16, example: '', exampleZh: '' },\n    { id: 21093, en: 'deficit', kk: '', zh: 'n. 赤字', unit: 16, example: '', exampleZh: '' },\n    { id: 21094, en: 'define', kk: '', zh: 'v. 定義', unit: 16, example: '', exampleZh: '' },\n    { id: 21095, en: 'definite', kk: '', zh: 'adj. 明確的', unit: 16, example: '', exampleZh: '' },\n    { id: 21096, en: 'definitely', kk: '', zh: 'adv. 肯定地', unit: 16, example: '', exampleZh: '' },\n    { id: 21097, en: 'definition', kk: '', zh: 'n. 定義', unit: 16, example: '', exampleZh: '' },\n    { id: 21098, en: 'degree', kk: '', zh: 'n. 程度', unit: 16, example: '', exampleZh: '' },\n    { id: 21099, en: 'delay', kk: '', zh: 'v. 延遲', unit: 16, example: 'I set off without delay', exampleZh: '我毫不拖延地出發了' },\n    { id: 21100, en: 'delegate', kk: '', zh: 'v. 委派', unit: 16, example: '', exampleZh: '' },\n    { id: 21101, en: 'delegation', kk: '', zh: 'n. 代表團', unit: 16, example: '', exampleZh: '' },\n    { id: 21102, en: 'delete', kk: '', zh: 'v. 刪除', unit: 16, example: '', exampleZh: '' },\n    { id: 21103, en: 'deliberate', kk: '', zh: 'adj. 故意的', unit: 16, example: '', exampleZh: '' },\n    { id: 21104, en: 'deliberately', kk: '', zh: 'adv. 故意地', unit: 16, example: '', exampleZh: '' },\n    { id: 21105, en: 'delicate', kk: '', zh: 'adj. 精緻的', unit: 16, example: '', exampleZh: '' },\n    { id: 21106, en: 'delicious', kk: '', zh: 'adj. 美味的', unit: 16, example: 'delicious home-baked brown bread', exampleZh: '美味的自製黑麵包' },\n    { id: 21107, en: 'delight', kk: '', zh: 'n. 高興', unit: 16, example: '', exampleZh: '' },\n    { id: 21108, en: 'delightful', kk: '', zh: 'adj. 令人愉快的', unit: 16, example: '', exampleZh: '' },\n    { id: 21109, en: 'deliver', kk: '', zh: 'v. 遞送；交付', unit: 16, example: 'deliver us from misery', exampleZh: '救我們脫離苦難' },\n    { id: 21110, en: 'delivery', kk: '', zh: 'n. 遞送', unit: 16, example: '', exampleZh: '' },\n    { id: 21111, en: 'demand', kk: '', zh: 'v. 要求', unit: 16, example: '', exampleZh: '' },\n    { id: 21112, en: 'demanding', kk: '', zh: 'adj. 苛求的', unit: 16, example: '', exampleZh: '' },\n    { id: 21113, en: 'democracy', kk: '', zh: 'n. 民主', unit: 16, example: '', exampleZh: '' },\n    { id: 21114, en: 'democrat', kk: '', zh: 'n. 民主黨員', unit: 16, example: '', exampleZh: '' },\n    { id: 21115, en: 'democratic', kk: '', zh: 'adj. 民主的', unit: 16, example: '', exampleZh: '' },\n    { id: 21116, en: 'demographic', kk: '', zh: 'adj. 人口統計的', unit: 16, example: '', exampleZh: '' },\n    { id: 21117, en: 'demolish', kk: '', zh: 'v. 拆除', unit: 16, example: '', exampleZh: '' },\n    { id: 21118, en: 'demonstrate', kk: '', zh: 'v. 示範；證明', unit: 16, example: '', exampleZh: '' },\n    { id: 21119, en: 'demonstration', kk: '', zh: 'n. 示範', unit: 16, example: '', exampleZh: '' },\n    { id: 21120, en: 'denial', kk: '', zh: 'n. 否認', unit: 16, example: '', exampleZh: '' },\n    { id: 21121, en: 'denounce', kk: '', zh: 'v. 譴責', unit: 16, example: '', exampleZh: '' },\n    { id: 21122, en: 'dense', kk: '', zh: 'adj. 密集的', unit: 16, example: '', exampleZh: '' },\n    { id: 21123, en: 'density', kk: '', zh: 'n. 密度', unit: 16, example: '', exampleZh: '' },\n    { id: 21124, en: 'dentist', kk: '', zh: 'n. 牙醫', unit: 16, example: '', exampleZh: '' },\n    { id: 21125, en: 'deny', kk: '', zh: 'v. 否認', unit: 16, example: 'they deny any responsibility for the tragedy', exampleZh: '他們否認對這場悲劇負有任何責任' },\n    { id: 21126, en: 'depart', kk: '', zh: 'v. 離開', unit: 16, example: '', exampleZh: '' },\n    { id: 21127, en: 'department', kk: '', zh: 'n. 部門', unit: 16, example: '', exampleZh: '' },\n    { id: 21128, en: 'departure', kk: '', zh: 'n. 離開', unit: 16, example: '', exampleZh: '' },\n    { id: 21129, en: 'depend', kk: '', zh: 'v. 依賴', unit: 16, example: 'the kind of person you could depend on', exampleZh: '你可以依賴什麼樣的人' },\n    { id: 21130, en: 'dependable', kk: '', zh: 'adj. 可靠的', unit: 16, example: '', exampleZh: '' },\n    { id: 21131, en: 'dependence', kk: '', zh: 'n. 依賴', unit: 16, example: '', exampleZh: '' },\n    { id: 21132, en: 'dependent', kk: '', zh: 'adj. 依賴的', unit: 16, example: '', exampleZh: '' },\n    { id: 21133, en: 'depict', kk: '', zh: 'v. 描繪', unit: 16, example: '', exampleZh: '' },\n    { id: 21134, en: 'deplete', kk: '', zh: 'v. 耗盡', unit: 16, example: '', exampleZh: '' },\n    { id: 21135, en: 'deploy', kk: '', zh: 'v. 部署', unit: 16, example: '', exampleZh: '' },\n    { id: 21136, en: 'deployment', kk: '', zh: 'n. 部署', unit: 16, example: '', exampleZh: '' },\n    { id: 21137, en: 'deposit', kk: '', zh: 'n. 訂金；存款', unit: 16, example: '', exampleZh: '' },\n    { id: 21138, en: 'depreciate', kk: '', zh: 'v. 貶值', unit: 16, example: '', exampleZh: '' },\n    { id: 21139, en: 'depress', kk: '', zh: 'v. 使沮喪', unit: 16, example: '', exampleZh: '' },\n    { id: 21140, en: 'depression', kk: '', zh: 'n. 沮喪', unit: 16, example: '', exampleZh: '' },\n    { id: 21141, en: 'deprive', kk: '', zh: 'v. 剝奪', unit: 16, example: '', exampleZh: '' },\n    { id: 21142, en: 'depth', kk: '', zh: 'n. 深度', unit: 16, example: '', exampleZh: '' },\n    { id: 21143, en: 'deputy', kk: '', zh: 'n. 副手', unit: 16, example: '', exampleZh: '' },\n    { id: 21144, en: 'derive', kk: '', zh: 'v. 衍生', unit: 16, example: '', exampleZh: '' },\n    { id: 21145, en: 'descend', kk: '', zh: 'v. 下降', unit: 16, example: '', exampleZh: '' },\n    { id: 21146, en: 'describe', kk: '', zh: 'v. 描述', unit: 16, example: '', exampleZh: '' },\n    { id: 21147, en: 'description', kk: '', zh: 'n. 描述', unit: 16, example: '', exampleZh: '' },\n    { id: 21148, en: 'desert', kk: '', zh: 'n. 沙漠', unit: 16, example: 'desert wastes', exampleZh: '沙漠廢棄物' },\n    { id: 21149, en: 'deserve', kk: '', zh: 'v. 值得', unit: 16, example: '', exampleZh: '' },\n    { id: 21150, en: 'design', kk: '', zh: 'v. 設計', unit: 16, example: 'good design can help the reader understand complicated information', exampleZh: '好的設計可以幫助讀者理解複雜的訊息' },\n    { id: 21151, en: 'designate', kk: '', zh: 'v. 指定', unit: 16, example: '', exampleZh: '' },\n    { id: 21152, en: 'designer', kk: '', zh: 'n. 設計師', unit: 16, example: '', exampleZh: '' },\n    { id: 21153, en: 'desirable', kk: '', zh: 'adj. 理想的', unit: 16, example: '', exampleZh: '' },\n    { id: 21154, en: 'desire', kk: '', zh: 'v. 渴望', unit: 16, example: 'they were clinging together in fierce mutual desire', exampleZh: '他們懷著強烈的共同慾望緊緊地抱在一起' },\n    { id: 21155, en: 'desk', kk: '', zh: 'n. 書桌', unit: 16, example: 'the reception desk', exampleZh: '接待處' },\n    { id: 21156, en: 'despair', kk: '', zh: 'n. 絕望', unit: 16, example: '', exampleZh: '' },\n    { id: 21157, en: 'desperate', kk: '', zh: 'adj. 絕望的', unit: 16, example: '', exampleZh: '' },\n    { id: 21158, en: 'despite', kk: '', zh: 'prep. 儘管', unit: 16, example: '', exampleZh: '' },\n    { id: 21159, en: 'destination', kk: '', zh: 'n. 目的地', unit: 16, example: '', exampleZh: '' },\n    { id: 21160, en: 'destiny', kk: '', zh: 'n. 命運', unit: 16, example: '', exampleZh: '' },\n    { id: 21161, en: 'destroy', kk: '', zh: 'v. 破壞', unit: 16, example: '', exampleZh: '' },\n    { id: 21162, en: 'destruction', kk: '', zh: 'n. 破壞', unit: 16, example: '', exampleZh: '' }
];
