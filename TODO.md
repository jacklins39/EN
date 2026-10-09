# TODO (明天做)

## Firebase / Google Cloud 後台 (專案 githuben-e26eb)
- [x] 1. Firestore 規則：Firebase Console → Firestore Database → 規則 → 貼上 `firestore.rules` → 發布 (最重要)
- [x] 2. 限制 API key：https://console.cloud.google.com/apis/credentials
  - 點 Browser key (`AIzaSyDwt...Ph4rg`)
  - Application restrictions → Websites → `https://jacklins39.github.io/*` (+ `http://localhost/*`)
  - API restrictions → Identity Toolkit API / Cloud Firestore API / Token Service API
- [x] 3. Authentication → Settings → Authorized domains 只留 `jacklins39.github.io`、`localhost`
- [x] 做完後重新登入測試：進度、自訂單字能否正常存取

## 其他
- [x] 說「幫我繼續跑爬蟲」→ `node crawl_examples.js` (進度在 example_cache.json)
- [x] 爬完後 commit + push `words_data.js`、`example_cache.json`
- [ ] (可選) 擴充單元 11 多益單字 (toeic_data.js 的 toeicRaw)
