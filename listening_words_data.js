// 單元 19：聽力新單字庫 (隨聽力短文自動產出與維護)
const listeningWordsDB = [
  {
    "id": 31947,
    "en": "depreciation",
    "kk": "[dɪˌpriʃɪˈeʃən]",
    "uk": "/dɪˌpriːʃiˈeɪʃn/",
    "zh": "n. 折舊、資產貶值",
    "unit": 19,
    "example": "The company accounted for the depreciation of its machinery over a ten-year period.",
    "exampleZh": "該公司將其機械設備的折舊分攤在十年期間進行核算。"
  },
  {
    "id": 31948,
    "en": "turnaround",
    "kk": "[ˋtɝnə͵raʊnd]",
    "uk": "/ˈtɜːnəraʊnd/ ",
    "zh": "n. 轉虧為盈、週轉時間、周轉期",
    "unit": 19,
    "example": "The new executive led a remarkable financial turnaround in less than two years.",
    "exampleZh": "新任主管在不到兩年內帶領公司實現了顯著的扭虧為盈。"
  },
  {
    "id": 31949,
    "en": "subcontractor",
    "kk": "[sʌbˋkɑntræktɚ]",
    "uk": "/ˌsʌbkənˈtræktə(r)/",
    "zh": "n. 分包商、協力廠商、轉包商",
    "unit": 19,
    "example": "We hired a reliable subcontractor to complete the electrical wiring on time.",
    "exampleZh": "我們僱用了一家可靠的協力廠商以按時完成電氣配線。"
  },
  {
    "id": 31950,
    "en": "consignment",
    "kk": "[kənˋsaɪnmənt]",
    "uk": "/kənˈsaɪnmənt/",
    "zh": "n. 託運貨物、寄售品",
    "unit": 19,
    "example": "The warehouse received a large consignment of electronics yesterday morning.",
    "exampleZh": "倉庫昨天上午收到了一大批託運的電子產品。"
  },
  {
    "id": 31951,
    "en": "downtime",
    "kk": "[ˋdaʊn͵taɪm]",
    "uk": "/ˈdaʊntaɪm/",
    "zh": "n. 停機時間、暫停服務時間",
    "unit": 19,
    "example": "Regular server maintenance helps minimize costly unplanned system downtime.",
    "exampleZh": "定期的伺服器維護有助於將代價高昂的意外系統停機時間降至最低。"
  },
  {
    "id": 31952,
    "en": "troubleshooting",
    "kk": "[ˋtrʌb!͵ʃutɪŋ]",
    "uk": "/ˈtrʌblʃuːtɪŋ/",
    "zh": "n. 疑難排解、故障排除",
    "unit": 19,
    "example": "The user manual includes a detailed troubleshooting guide for network connection errors.",
    "exampleZh": "該使用者手冊包含針對網路連線錯誤的詳細疑難排解指南。"
  },
  {
    "id": 31953,
    "en": "underwriting",
    "kk": "[ˋʌndɚ͵raɪtɪŋ]",
    "uk": "/ˈʌndəraɪtɪŋ/",
    "zh": "n. 保險承保、核保業務、證券包銷",
    "unit": 19,
    "example": "Strict underwriting criteria ensure that the insurer manages policy risk effectively.",
    "exampleZh": "嚴格的核保標準確保保險公司有效控管保單風險。"
  },
  {
    "id": 31954,
    "en": "indemnify",
    "kk": "[ɪnˋdɛmnə͵faɪ]",
    "uk": "/ɪnˈdemnɪfaɪ/",
    "zh": "v. 賠償、補償、保障…免受損失",
    "unit": 19,
    "example": "The contract stipulated that the supplier must indemnify the client against patent infringement losses.",
    "exampleZh": "合約規定供應商必須賠償客戶因專利侵權所遭受的損失。"
  },
  {
    "id": 31955,
    "en": "restructuring",
    "kk": "[riˋstrʌktʃərɪŋ]",
    "uk": "/riːˈstrʌktʃərɪŋ/",
    "zh": "n. 組織重組、架構調整",
    "unit": 19,
    "example": "The corporate restructuring led to streamlined management layers and lower operational overhead.",
    "exampleZh": "企業組織重組帶來了精簡的管理層級與更低的營運日常開銷。"
  },
  {
    "id": 31956,
    "en": "influencer",
    "kk": "[ˋɪnflʊənsɚ]",
    "uk": "/ˈɪnfluənsə(r)/",
    "zh": "n. 網紅、社群意見領袖",
    "unit": 19,
    "example": "Partnering with a credible tech influencer helped increase our mobile app downloads.",
    "exampleZh": "與具有公信力的科技網紅合作幫助提升了我們行動應用程式的下載量。"
  },
  {
    "id": 31957,
    "en": "metrics",
    "kk": "[ˋmɛtrɪks]",
    "uk": "/ˈmetrɪks/",
    "zh": "n. 衡量指標、評估標準、度量數據",
    "unit": 19,
    "example": "Customer retention and conversion rate are key performance metrics for our marketing team.",
    "exampleZh": "客戶留存率與轉換率是我們行銷團隊的關鍵績效衡量指標。"
  },
  {
    "id": 31958,
    "en": "deliverable",
    "kk": "[dɪˋlɪvərəb!]",
    "uk": "/dɪˈlɪvərəbl/",
    "zh": "n. 交付成果、應交付項目",
    "unit": 19,
    "example": "All software deliverables must be thoroughly tested before final handover to the client.",
    "exampleZh": "所有軟體交付成果在最終移交給客戶前都必須經過徹底測試。"
  }
];
