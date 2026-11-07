# 單字庫拆分清單與 AI 校正專用指南
生成時間：2026/11/7 上午10:48:29
總計拆分檔案數量：17 個檔案（每檔上限 1,000 個單字）
存放路徑：F:\EN\split_txt

============================================================
【檔案清單一覽表】
============================================================
* words_data_part1.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 1 ~ 1000          (able ~ window)
* words_data_part2.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 1001 ~ 2000       (wine ~ talent)
* words_data_part3.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 2001 ~ 3000       (tangerine ~ roar)
* words_data_part4.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 3001 ~ 4000       (roast ~ launch)
* words_data_part5.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 4001 ~ 5000       (lead ~ mortal)
* words_data_part6.txt           | 高中 7000 單            | 筆數: 1000 | 範圍: ID 5001 ~ 6000       (moss ~ elite)
* words_data_part7.txt           | 高中 7000 單            | 筆數:  570 | 範圍: ID 6001 ~ 6581       (eloquence ~ results)
* jh_data_part1.txt              | 國中 2000 單            | 筆數: 1000 | 範圍: ID 30001 ~ 31000     (able ~ mall)
* jh_data_part2.txt              | 國中 2000 單            | 筆數:  944 | 範圍: ID 31001 ~ 31946     (man ~ zoo)
* toeic_data_part1.txt           | 多益單字庫                | 筆數: 1000 | 範圍: ID 20001 ~ 21000     (abandon ~ division)
* toeic_data_part2.txt           | 多益單字庫                | 筆數: 1000 | 範圍: ID 21001 ~ 22000     (doctor ~ modest)
* toeic_data_part3.txt           | 多益單字庫                | 筆數: 1000 | 範圍: ID 22001 ~ 23000     (modification ~ widespread)
* toeic_data_part4.txt           | 多益單字庫                | 筆數:  153 | 範圍: ID 23001 ~ 32026     (width ~ pilot)
* synonyms_unit8_data_part1.txt  | 同義字專題 (Unit 8)       | 筆數: 1000 | 範圍: ID 7001 ~ 8000       (irate ~ unattractiveness)
* synonyms_unit8_data_part2.txt  | 同義字專題 (Unit 8)       | 筆數:   93 | 範圍: ID 8001 ~ 8093       (unconcern ~ inquiring)
* examples_unit9_data_part1.txt  | 情境例句專題 (Unit 9)      | 筆數:  963 | 範圍: ID 8101 ~ 9063       (foodstuffs ~ got)
* listening_words_data_part1.txt | 聽力單字庫                | 筆數:   12 | 範圍: ID 32006 ~ 32037     (sleeping ~ teddy bear)

============================================================
【丟給其他 AI (ChatGPT / Claude / Gemini) 的建議提示詞 (Prompt)】
============================================================
你只需將檔案上傳或貼上內容，並附帶以下 Prompt：

「我上傳了一份英文單字庫 JSON 資料（每筆資料包含 id, en, kk, uk, zh, example, exampleZh）。
請扮演專業的英語教學與詞典編輯專家，針對這份資料庫進行全面檢核，並回傳錯漏診斷報告：

1. 【中文釋義 (zh)】：
   - 檢查核心釋義是否精準、自然、符合台灣繁體中文用語。
   - 抓出並剔除：荒謬的機器翻譯錯字、極端冷僻的動植物學名或冷門學科術語（如紋章學、古老宗教口令等）、成人限制級或粗俗俚語黑話。
2. 【例句與翻譯 (example / exampleZh)】：
   - 檢查英文例句文法是否正確，有無拼字錯誤或語病。
   - 檢查中文例句翻譯是否流暢通順，有無生硬機翻。
3. 【音標 (kk / uk)】：
   - 檢查音標是否有亂碼、缺漏或明顯錯誤。

【輸出格式】：
請依下列條列格式清晰輸出需要修正的單字：
* [ID] [單字 (中文)]：
   * 問題說明：(指出是 zh 錯字、不當字義、或例句翻譯生硬)
   * 建議修正：
     - zh: "..."
     - example: "..."
     - exampleZh: "..."」
