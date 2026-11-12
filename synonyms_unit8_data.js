/**
 * 高中 7000 單字擴充單元 - 同反義詞擴充庫
 * 分配至高中單元 7 (433 字) 與單元 8 (658 字)，符合一單元 1000 字原則
 * (全庫 1,093 筆已於 2026/11/07 完成 100% 逐筆比對審查與品質校正)
 */
const synUnit8WordsDB = [
  {
    "id": 7001,
    "en": "irate",
    "kk": "[aɪˋreɪt]",
    "zh": "adj. 生氣的，發怒的，憤怒的",
    "unit": 7,
    "example": "[adj.] The owner was so irate he almost threw me out of the place.",
    "exampleZh": "主人那麼生氣，他差點兒把我從那個地方趕出去。"
  },
  {
    "id": 7002,
    "en": "annoyed",
    "kk": "[əˋnɔɪd]",
    "zh": "adj. 惱怒的，煩惱的；v. 使惱怒，使煩惱；打擾，騷擾（annoy 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] He was plainly annoyed.",
    "exampleZh": "他明顯是生氣了。"
  },
  {
    "id": 7003,
    "en": "vexed",
    "kk": "[vekst]",
    "zh": "adj. 生氣的，煩惱的，惱怒的；為難的；焦急的；（問題、議題等）棘手的，爭論不休的；v. vex 的過去式和過去分詞",
    "unit": 7,
    "example": "[adj.] \"He wasn't vexed,\" said Mary.",
    "exampleZh": "「他沒生氣。」瑪麗說。"
  },
  {
    "id": 7004,
    "en": "irritated",
    "kk": "[ˋɪrɪteɪtɪd]",
    "zh": "adj. 惱火的，急躁的；疼痛的，發炎的；v. 激怒；使……無效；使……興奮（irritate 的過去式和過去分詞）",
    "unit": 7,
    "example": "[v.] He irritated me beyond measure.",
    "exampleZh": "他使我非常生氣。"
  },
  {
    "id": 7005,
    "en": "exasperated",
    "kk": "[ɪɡˋzæspəreɪtɪd]",
    "zh": "adj. 惱怒的，煩惱的，憤怒的；v. 使惱怒，激怒；惡化（exasperate 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] 'Why won't you answer me?' he asked in an exasperated voice.",
    "exampleZh": "「你為什麼不願意回答我？」他憤怒地問道。"
  },
  {
    "id": 7006,
    "en": "frightened",
    "kk": "[ˋfraɪt(ə)nd]",
    "zh": "adj. 受驚的，害怕的；v. 使驚嚇，使驚恐（frighten 的過去分詞形式）",
    "unit": 7,
    "example": "[adj.] I was frightened by the noise.",
    "exampleZh": "我被那響聲嚇壞了。"
  },
  {
    "id": 7007,
    "en": "scared",
    "kk": "[skerd]",
    "zh": "adj. 驚恐的，恐懼的；擔心的，焦慮的；v. 使驚恐，嚇唬；受驚嚇，害怕（scare 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] I'm certainly not scared of him.",
    "exampleZh": "我當然不怕他。"
  },
  {
    "id": 7008,
    "en": "terrified",
    "kk": "[ˋterəfaɪd]",
    "zh": "adj. 非常害怕的，極度驚恐的；v. 使害怕，使恐懼（terrify 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] Admit it! You were terrified!",
    "exampleZh": "承認了吧！你嚇壞了！"
  },
  {
    "id": 7009,
    "en": "petrified",
    "kk": "[ˋpetrɪfaɪd]",
    "zh": "adj. 驚呆的，目瞪口呆的，非常害怕的；（地質/古生物）石化的，變成石頭的；v. petrify 的過去式和過去分詞：使石化；使驚呆，嚇得發呆；變僵硬",
    "unit": 7,
    "example": "[adj.] I'm petrified of snakes.",
    "exampleZh": "我特別怕蛇。"
  },
  {
    "id": 7010,
    "en": "substandard",
    "kk": "[͵sʌbˋstændərd]",
    "zh": "adj. 不合規格的，標準以下的，低於標準的；（金融）次級的（用於貸款或資產分類，指風險較高、低於正常標準）",
    "unit": 7,
    "example": "[adj.] Your attachment to substandard lodgings and scant tuition in Dover is clearly irrational.",
    "exampleZh": "你執意要留在多佛住不合標準的住所、接受微薄的學費待遇，這顯然是不理性的。"
  },
  {
    "id": 7011,
    "en": "unsatisfactory",
    "kk": "[͵ʌnsətɪˋsfæktɚi]",
    "zh": "adj. 不滿意的",
    "unit": 7,
    "example": "[adj.] The film's ending is an unsatisfactory cop-out.",
    "exampleZh": "那部電影的結尾是個不令人滿意的迴避。"
  },
  {
    "id": 7012,
    "en": "rudimentary",
    "kk": "[͵rudəˋmɛntəri]",
    "zh": "adj. 基本的，初步的；不成熟的，未充分發展的",
    "unit": 7,
    "example": "[adj.] Early efforts to use rudimentary headsets for computer games were not exactly riveting.",
    "exampleZh": "早期人們嘗試用簡易頭戴設備玩電腦遊戲，體驗並不怎麼引人入勝。"
  },
  {
    "id": 7013,
    "en": "cardinal",
    "kk": "[ˋkɑrdnəl]",
    "zh": "n. 紅衣主教；基數，純數；紅衣鳳頭鳥；猩紅，鮮紅；adj. 最主要的，基本的",
    "unit": 7,
    "example": "[n.] In 1448, Nicholas was appointed a cardinal.",
    "exampleZh": "1448年，尼古拉斯被任命為紅衣主教。"
  },
  {
    "id": 7014,
    "en": "sizeable",
    "kk": "[ˋsaɪzəb(ə)l]",
    "zh": "adj. 大的，相當大的，頗大的",
    "unit": 7,
    "example": "[adj.] The screenplay, by Oscar-winner Dustin Lance Black, hopscotches across the decades, requiring a sizeable cast.",
    "exampleZh": "奧斯卡得主達斯汀·蘭斯·布萊克創作的劇本輾轉跨越數十年，它需要一個規模可觀的演員陣容。"
  },
  {
    "id": 7015,
    "en": "plucky",
    "kk": "[ˋplʌki]",
    "zh": "adj. 有勇氣的，大膽的",
    "unit": 7,
    "example": "[adj.] The real Tom and Jerry: Plucky mouse shows prowling cat that he's no pip-squeak.",
    "exampleZh": "勇敢的老鼠用行動向潛行而來的貓表示自己絕不是無足輕重的懦夫。"
  },
  {
    "id": 7016,
    "en": "fearless",
    "kk": "[ˋfɪrləs]",
    "zh": "adj. 無畏的，大膽的",
    "unit": 7,
    "example": "[adj.] Fearlessness stems from selflessness.; Only the selfless can be fearless.",
    "exampleZh": "無私故能無畏。"
  },
  {
    "id": 7017,
    "en": "valorous",
    "kk": "[ˋvælərəs]",
    "zh": "adj. 勇敢的，勇武的，英勇的",
    "unit": 7,
    "example": "[adj.] Valorous as a Hector, he knows no danger.",
    "exampleZh": "勇武如赫克託，他從不知危險是何物。"
  },
  {
    "id": 7018,
    "en": "intrepid",
    "kk": "[ɪnˋtrepɪd]",
    "zh": "adj. （書面）無畏的，勇敢的，勇猛的",
    "unit": 7,
    "example": "[adj.] Some intrepid individuals were still prepared to make the journey.",
    "exampleZh": "某些無畏的人仍然準備作此旅行。"
  },
  {
    "id": 7019,
    "en": "heedful",
    "kk": "[ˋhidfəl]",
    "zh": "adj. 注意的，留心的，謹慎小心的（常與 of 連用，表示對……留意或小心）",
    "unit": 7,
    "example": "[adj.] The heedful do not die; the heedless are like unto the dead.",
    "exampleZh": "不放逸的人不死，放逸的人與死人同樣。"
  },
  {
    "id": 7020,
    "en": "attentive",
    "kk": "[əˋtentɪv]",
    "zh": "adj. 注意的，專心的；貼心的",
    "unit": 7,
    "example": "[adj.] The hotel staff are friendly and attentive.",
    "exampleZh": "旅館人員友好而且照顧周到。"
  },
  {
    "id": 7021,
    "en": "watchful",
    "kk": "[ˋwɑtʃfəl]",
    "zh": "adj. 注意的，警惕的",
    "unit": 7,
    "example": "[adj.] The best thing is to be watchful and see the family doctor for any change in your normal health.",
    "exampleZh": "最好的做法就是保持警惕，身體一有變化就去看家庭醫生。"
  },
  {
    "id": 7022,
    "en": "deceased",
    "kk": "[dɪˋsist]",
    "zh": "adj. 已故的，死亡的；n. 死者，已故者；（法律）被繼承人；v. 死亡（decease 的過去式和過去分詞）",
    "unit": 7,
    "example": "[n.] The navy is notifying next of kin now that the identities of the deceased have been determined.",
    "exampleZh": "死者的身份已得到確認，海軍正在通知其最近的家屬。"
  },
  {
    "id": 7023,
    "en": "expired",
    "kk": "[ɪkˋspaɪɚd]",
    "zh": "adj. 過期的；失效的；v. 期滿；失效；（人）死亡；呼（氣）（expire 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] His visitor's visa expired.",
    "exampleZh": "他的訪問簽證過期了。"
  },
  {
    "id": 7024,
    "en": "departed",
    "kk": "[dɪˋpɑrtɪd]",
    "zh": "v. 啟程，出發；背離，違背（depart 的過去式和過去分詞）；adj. 已故的，去世的；已離開的，離去的；以往的，過去的；n. 死者，亡者（the departed）",
    "unit": 7,
    "example": "[n.] We held services for the departed.",
    "exampleZh": "我們為死者舉行了葬禮。"
  },
  {
    "id": 7025,
    "en": "gone",
    "kk": "[ɡɔn]",
    "zh": "adj. 用完的，用光的；死了的，滅絕的；離去的，不在某處的；不復存在的；<非正式>懷孕的；<非正式>神志不清的；（球越過外野圍欄）成為本壘打；<美，非正式>很棒的，有靈感的；<非正式>入迷的；prep. <英>晚於，已過；v. 走，去；離開；進展 （go 的過去分詞形式）",
    "unit": 7,
    "example": "[adj.] Alex has already gone.",
    "exampleZh": "亞歷克斯已經走了。"
  },
  {
    "id": 7026,
    "en": "dissimilar",
    "kk": "[dɪˋsɪmɪlər]",
    "zh": "adj. 不同的，不相似的，相異的（常與 to 或 from 連用）",
    "unit": 7,
    "example": "[adj.] His methods were not dissimilar to those used by Freud.",
    "exampleZh": "他用的方法和弗洛伊德用的沒有什麼不同。"
  },
  {
    "id": 7027,
    "en": "uncomplicated",
    "kk": "[ʌnˋkɑmplə͵ketɪd]",
    "zh": "adj. 簡單的，不復雜的",
    "unit": 7,
    "example": "[adj.] She is a beautiful, uncomplicated girl.",
    "exampleZh": "她是個漂亮、單純的女孩。"
  },
  {
    "id": 7028,
    "en": "undemanding",
    "kk": "[͵ʌndɪˋmændɪŋ]",
    "zh": "adj. （任務、工作等）要求不高的，容易的，不費力的；（人）不苛求的，容易相處的，不嚴格的",
    "unit": 7,
    "example": "[adj.] After the first pair of tasks was completed, one group of participants was assigned an undemanding activity intended to cause their minds to wander.",
    "exampleZh": "在第一對任務完成後，一組參與者被分配了一個要求不高的活動，目的是讓他們走神。"
  },
  {
    "id": 7029,
    "en": "unexacting",
    "kk": "",
    "zh": "adj. 不苛求的，寬容的：對別人或事物要求不嚴格的，容易滿足的。",
    "unit": 7,
    "example": "[adj.] He tried to learn how to use the word unexacting correctly.",
    "exampleZh": "他試著學習如何正確使用「unexacting」這個單字。"
  },
  {
    "id": 7030,
    "en": "unchallenging",
    "kk": "",
    "zh": "adj. 沒有挑戰性的",
    "unit": 7,
    "example": "[adj.] Most fared poorly in school not because they lacked ability but because they found school unchallenging and consequently lost interest.",
    "exampleZh": "大多數人在學校表現不佳不是因為他們缺乏能力，而是因為他們覺得學校沒有挑戰性，因此失去了興趣。"
  },
  {
    "id": 7031,
    "en": "effortless",
    "kk": "[ˋefərtləs]",
    "zh": "adj. 不需費力的，容易的；（品質）自然的，天生具有的 ",
    "unit": 7,
    "example": "[adj.] She liked him above all for his effortless charm.",
    "exampleZh": "她尤其喜歡他天生的魅力。"
  },
  {
    "id": 7032,
    "en": "strenuous",
    "kk": "[ˋstrenjuəs]",
    "zh": "adj. 費力的，艱苦的；積極的，堅決的",
    "unit": 7,
    "example": "[adj.] Strenuous efforts had been made to improve conditions in the jail.",
    "exampleZh": "為改善那家監獄裡的條件已做了艱苦的努力。"
  },
  {
    "id": 7033,
    "en": "arduous",
    "kk": "[ˋɑrdʒuəs]",
    "zh": "adj. 艱辛的，困難的",
    "unit": 7,
    "example": "[adj.] The work was arduous.",
    "exampleZh": "這項工作很艱鉅。"
  },
  {
    "id": 7034,
    "en": "laborious",
    "kk": "[ləˋbɔrɪəs]",
    "zh": "adj. 耗時費力的，辛苦的；（尤指講話，寫作風格）造作的，不流暢的",
    "unit": 7,
    "example": "[adj.] Keeping the garden tidy all year round can be a laborious task.",
    "exampleZh": "保持院子全年整潔會是一項費時費力的任務。"
  },
  {
    "id": 7035,
    "en": "incorrect",
    "kk": "[͵ɪnkɚˋɛkt]",
    "zh": "adj. 不正確的",
    "unit": 7,
    "example": "[adj.] The firm says it unknowingly published incorrect statistics.",
    "exampleZh": "這家公司說它不知情地出版了錯誤的資料。"
  },
  {
    "id": 7036,
    "en": "untrue",
    "kk": "[ʌnˋtru]",
    "zh": "adj. 不真實的；不忠實的；不精確的（或不合標準的）；不正當的",
    "unit": 7,
    "example": "[adj.] He picked on two of her statements which he said were untrue.",
    "exampleZh": "他從她的話中挑出了兩處他認為不真實的地方。"
  },
  {
    "id": 7037,
    "en": "erroneous",
    "kk": "[ɪˋroʊniəs]",
    "zh": "adj. 錯誤的，不正確的",
    "unit": 7,
    "example": "[adj.] Some people have the erroneous notion that one can contract AIDS by giving blood.",
    "exampleZh": "有些人有這樣一種錯誤的觀念：認為獻血會染上艾滋病。"
  },
  {
    "id": 7038,
    "en": "fallacious",
    "kk": "[fəˋleɪʃəs]",
    "zh": "adj. 謬誤的，不合理的；騙人的，欺騙性的；靠不住的，渺茫的",
    "unit": 7,
    "example": "[adj.] I say this is fallacious, not because no man ever acts from a sense of duty, but because duty has no hold on him unless he desires to be dutiful.",
    "exampleZh": "我認為這一說法是謬誤的，不是因為從來沒有人出於責任感行事，而是因為除非一個人願意盡到責任，否則責任對他毫無約束力。"
  },
  {
    "id": 7039,
    "en": "faulty",
    "kk": "[ˋfɔlti]",
    "zh": "adj. 有缺點的；不完美的",
    "unit": 7,
    "example": "[adj.] This line of reasoning is faulty.",
    "exampleZh": "這樣的思路有問題。"
  },
  {
    "id": 7040,
    "en": "amusing",
    "kk": "[əˋmjuzɪŋ]",
    "zh": "adj. 逗人發笑的，有趣的；v. 逗樂，逗笑；（提供）消遣（amuse 的現在分詞形式）",
    "unit": 7,
    "example": "[adj.] It's a very amusing game to play.",
    "exampleZh": "這種遊戲玩起來非常有趣。"
  },
  {
    "id": 7041,
    "en": "comical",
    "kk": "[ˋkɑmɪkəl]",
    "zh": "adj. 滑稽的，好笑的，令人發笑的",
    "unit": 7,
    "example": "[adj.] Her expression is almost comical.",
    "exampleZh": "她的表情幾乎有點兒滑稽。"
  },
  {
    "id": 7042,
    "en": "droll",
    "kk": "[droʊl]",
    "zh": "adj. 滑稽的；好笑的；逗趣的；n. 小丑，滑稽可笑的人；vi. 開玩笑；n. （Droll）人名；（英、德、羅）德羅爾",
    "unit": 7,
    "example": "[adj.] Evelyn is entertaining company, with droll and sardonic observations on nearly everything.",
    "exampleZh": "伊芙琳以其對幾乎每件事情都冷嘲式的方式和離奇可笑的見解娛樂夥伴。"
  },
  {
    "id": 7043,
    "en": "laughable",
    "kk": "[ˋlæfəbl]",
    "zh": "adj. 可笑的，荒唐可笑的；令人發笑的，有趣的",
    "unit": 7,
    "example": "[adj.] The idea that TV shows like \"Dallas\" or \"Dynasty\" represent typical American life is laughable.",
    "exampleZh": "認為像《豪門恩怨》或《鷹冠莊園》那樣的電視劇代表典型美國生活的想法是可笑的。"
  },
  {
    "id": 7044,
    "en": "filled",
    "kk": "[fɪld]",
    "zh": "adj. 充滿的；v. （使）充滿；堵塞，填補（洞、孔）；（聲音、氣味或光）遍及，瀰漫（fill 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] The boy's eyes filled with tears.",
    "exampleZh": "那男孩的眼裡充滿了淚水。"
  },
  {
    "id": 7045,
    "en": "packed",
    "kk": "[pækt]",
    "zh": "adj. 擠滿人的，非常擁擠的；充滿的，裝滿的；收拾妥當的，收拾好了的；（雪、糖或土壤）壓成硬塊的；v. 把……打包；包裝，包裹；擠滿，塞滿；（pack 的過去式和過去分詞）",
    "unit": 7,
    "example": "[v.] We packed away the summer clothes.",
    "exampleZh": "我們把夏裝收藏起來了。"
  },
  {
    "id": 7046,
    "en": "pleased",
    "kk": "[plizd]",
    "zh": "adj. 喜歡的；滿意的",
    "unit": 7,
    "example": "[adj.] You're coming? I'm so pleased.",
    "exampleZh": "你要來呀？我太高興了。"
  },
  {
    "id": 7047,
    "en": "delighted",
    "kk": "[dɪˋlaɪtɪd]",
    "zh": "adj. 高興的；v. 使高興；以……為樂（delight 的過去式及過去分詞）",
    "unit": 7,
    "example": "[adj.] I'm delighted at your news.",
    "exampleZh": "聽到你的消息我非常高興。"
  },
  {
    "id": 7048,
    "en": "thrilled",
    "kk": "[θrɪld]",
    "zh": "adj. 非常興奮，極為激動；v. 使（某人）非常興奮，非常激動；（情感，感覺）顫抖，振動；<文>顫動，跳動（thrill 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] I was thrilled by your news.",
    "exampleZh": "你的消息使我興奮極了。"
  },
  {
    "id": 7049,
    "en": "contented",
    "kk": "[kənˋtentɪd]",
    "zh": "adj. 滿足的，滿意的；v. 使滿意，使滿足（content 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] He was a contented man.",
    "exampleZh": "他是個心滿意足的人。"
  },
  {
    "id": 7050,
    "en": "cheery",
    "kk": "[ˋtʃɪri]",
    "zh": "adj. 愉快的，活潑的；明亮的，令人愉悅的",
    "unit": 7,
    "example": "[adj.] Campaigners for global public health are rarely cheery.",
    "exampleZh": "全球公共衛生領域的活動家們很少有心情愉快的時候。"
  },
  {
    "id": 7051,
    "en": "weighty",
    "kk": "[ˋweɪti]",
    "zh": "adj. 重的，沉重的；<正式>重大的，重要的，嚴肅的；有力的，有說服力的",
    "unit": 7,
    "example": "[adj.] The very presence in a theatrical piece of a long and weighty philosophical debate could easily be seen as having a pretty tedious effect.",
    "exampleZh": "一場漫長而沉重的哲學辯論在戲劇作品中的存在很容易被視為具有相當乏味的效果。"
  },
  {
    "id": 7052,
    "en": "hefty",
    "kk": "[ˋhefti]",
    "zh": "adj. 高大健壯的，笨重的；（數目，數量）相當大的；有力的，用力的；【名】 （Hefty）（英）赫夫蒂，（法）埃夫蒂（人名）",
    "unit": 7,
    "example": "[adj.] The other temptation is to couple assistance for bankers with a hefty dose of punishment to sate the public's hunger for justice.",
    "exampleZh": "另一種誘惑是將對銀行家的援助與重罰相結合，以滿足公眾對正義的渴望。"
  },
  {
    "id": 7053,
    "en": "balmy",
    "kk": "[ˋbɑmi]",
    "zh": "adj. （天氣、氣候等）溫和的，宜人的，溫暖舒適的；（文學或較正式）芳香的，有香氣的；（非正式，尤用於英國）瘋瘋癲癲的，頭腦不正常的（亦作 barmy）；（文學或舊式）有安撫作用的（舊譯“止痛的”）",
    "unit": 7,
    "example": "[adj.] Eventually passion was distilled into the natural beauty of a balmy night.",
    "exampleZh": "激情最終融入了芬芳夜晚的自然美之中。"
  },
  {
    "id": 7054,
    "en": "summery",
    "kk": "[ˋsʌməri]",
    "zh": "adj. 夏天的；如夏季的；適合夏季的",
    "unit": 7,
    "example": "[adj.] For a summery look, you should swap your black mascara for either a blackish-brown or simply plain brown.",
    "exampleZh": "為了一副夏天的外觀，你應該把你的黑色睫毛膏換成黑棕色或純棕色睫毛膏。"
  },
  {
    "id": 7055,
    "en": "boiling",
    "kk": "[ˋbɔɪlɪŋ]",
    "zh": "adj. 沸騰的，滾燙的；激昂的，狂怒的，翻騰的；n. 沸騰，煮沸；起泡；煮，煮沸烹飪法；adv. （用於 boiling hot、boiling mad 等）極，非常，沸騰地",
    "unit": 7,
    "example": "[adj.] The water was bubbling and boiling away.",
    "exampleZh": "水在咕嘟咕嘟地沸騰著。"
  },
  {
    "id": 7056,
    "en": "salient",
    "kk": "[ˋseɪliənt]",
    "zh": "adj. 突出的，顯著的；（角）凸出的；（紋章，動物）後腿站立前爪舉起的；n. （防禦工事的）凸出部分；【名】 （Salient）（西）薩連特（人名）",
    "unit": 7,
    "example": "[adj.] Both pain and pleasure are salient.",
    "exampleZh": "痛苦和快樂都是突出的。"
  },
  {
    "id": 7057,
    "en": "ravenous",
    "kk": "[ˋrævənəs]",
    "zh": "adj. 極度飢餓的，餓極的；狼吞虎嚥的，貪食的；貪婪的，渴望的",
    "unit": 7,
    "example": "[adj.] Gormandizer usually means a ravenous eater of food.",
    "exampleZh": "「大胃王」通常指的是貪食的饕餮之徒。"
  },
  {
    "id": 7058,
    "en": "starving",
    "kk": "[ˋstɑrvɪŋ]",
    "zh": "adj. 飢餓的，捱餓的（字面義，因缺乏食物而受苦或瀕臨餓死的）；<非正式>（多作表語）非常飢餓的；v. （不及物）捱餓；餓死；（及物）使捱餓；使餓死（均為 starve 的現在分詞）",
    "unit": 7,
    "example": "[adj.] When's food? I'm starving!",
    "exampleZh": "飯什麼時候好？我快餓死了！"
  },
  {
    "id": 7059,
    "en": "starved",
    "kk": "[stɑrvd]",
    "zh": "adj. 飢餓的，極度飢餓的，飢腸轆轆的（常作表語，口語中表示“餓極了”）；缺乏……的，急需……的（常構成 be starved of/for，或用於複合詞）；v. starve 的過去式和過去分詞：捱餓；餓死；使捱餓；使匱乏",
    "unit": 7,
    "example": "[adj.] I'm starved. Who's up for pizza?",
    "exampleZh": "我快餓死了。誰想吃比薩餅？"
  },
  {
    "id": 7060,
    "en": "blessed",
    "kk": "[ˋblesɪd; blest]",
    "zh": "adj. 受祝福的，受上帝保佑的；神聖的，尊敬的；有福的，幸運的；帶來幸福的，帶來好運的；令人愉快安寧的；有幸具有的，賦有…的（常用於 be blessed with）；<非正式>該死的，表示惱怒的；v. 祝福，保佑，求神賜福；祝聖，使神聖化；稱頌上帝（bless 的過去式和過去分詞）",
    "unit": 7,
    "example": "[v.] The priest blessed the bread and wine.",
    "exampleZh": "神父祝聖了麵餅和葡萄酒。"
  },
  {
    "id": 7061,
    "en": "favoured",
    "kk": "[ˋfeɪvərd]",
    "zh": "v. favour 的過去式和過去分詞（美式拼寫 favored）；adj. 受喜愛的，受青睞的；受優待的，受優惠的，有特權的；有利的，愜意的（指地點、位置）",
    "unit": 7,
    "example": "[v.] Since he was colour blind, he favoured large, showy flowers.",
    "exampleZh": "因為他是色盲，所以他喜愛大而豔麗的花。"
  },
  {
    "id": 7062,
    "en": "insane",
    "kk": "[͵ɪnˋsen]",
    "zh": "adj. 精神錯亂的；瘋狂的",
    "unit": 7,
    "example": "[adj.] Doctors certified him as insane.",
    "exampleZh": "醫生證明他精神失常。"
  },
  {
    "id": 7063,
    "en": "certifiable",
    "kk": "[͵sɝtəˋfaɪəbəl]",
    "zh": "adj. 可證明的；可確認的；可保證的",
    "unit": 7,
    "example": "[adj.] You know she's certifiable, right?",
    "exampleZh": "你知道她精神不正常吧？"
  },
  {
    "id": 7064,
    "en": "deranged",
    "kk": "[dɪˋreɪndʒd]",
    "zh": "adj. 精神錯亂的；瘋狂的；v. 使（精神）錯亂（derange 的過去分詞和過去式）；擾亂",
    "unit": 7,
    "example": "[adj.] It's guaranteed that my colleagues think I'm deranged.",
    "exampleZh": "我的同事們肯定會認為我瘋了。"
  },
  {
    "id": 7065,
    "en": "demented",
    "kk": "[dɪˋmentɪd]",
    "zh": "adj. 精神錯亂的，瘋癲的；（舊式）患痴呆症的；（非正式）發狂的，瘋狂的，狂亂失控的；v. dement 的過去式和過去分詞：使精神錯亂，使發狂；變得痴呆",
    "unit": 7,
    "example": "[adj.] Nursing a demented person is an all-consuming task.",
    "exampleZh": "護理一個精神錯亂的人是一項非常耗力的任務。"
  },
  {
    "id": 7066,
    "en": "pleasurable",
    "kk": "[ˋpleʒərəbl]",
    "zh": "adj. 令人愉快的，使人心情舒暢的，快樂的",
    "unit": 7,
    "example": "[adj.] The most pleasurable experience of the evening was the wonderful fireworks display.",
    "exampleZh": "那天晚上最令人愉悅的經歷是精彩的焰火表演。"
  },
  {
    "id": 7067,
    "en": "satisfying",
    "kk": "[ˋsætɪsfaɪɪŋ]",
    "zh": "adj. 令人滿意的；令人滿足的；v. satisfy 的現在分詞或動名詞（滿足，使滿意）",
    "unit": 7,
    "example": "[adj.] I found wood carving satisfying, and painting fun.",
    "exampleZh": "我從木雕中感到了滿足，從繪畫中體會到了樂趣。"
  },
  {
    "id": 7068,
    "en": "rowdy",
    "kk": "[ˋraʊdi]",
    "zh": "adj. 吵鬧的，粗暴的；n. 粗暴的人，好吵鬧的人；（Rowdy）人名（音譯：羅迪）",
    "unit": 7,
    "example": "[adj.] He has complained to the police about rowdy neighbours.",
    "exampleZh": "他已向警察投訴了吵鬧的鄰居。"
  },
  {
    "id": 7069,
    "en": "rackety",
    "kk": "[ˋrækəti]",
    "zh": "adj. 喧擾的，喧鬧的；不牢固的，搖晃的",
    "unit": 7,
    "example": "[adj.] Raised in a rackety household with a sick mother and alcoholic father, the young Ms Harris sought comfort in animals; snakes, bugs, stray dogs, cats.",
    "exampleZh": "Sylvia Harris在母親多病和父親酗酒這樣一個混亂的家庭中長大，所以Harris女士小時候便從一些動物身上尋找安慰，如蛇、臭蟲、流浪狗、貓。"
  },
  {
    "id": 7070,
    "en": "clamorous",
    "kk": "[ˋklæmərəs]",
    "zh": "adj. 吵鬧的，喧嚷的；大聲要求的（常與 for 連用）",
    "unit": 7,
    "example": "[adj.] They are clamorous for better pay.",
    "exampleZh": "他們吵吵嚷嚷要求增加工資。"
  },
  {
    "id": 7071,
    "en": "boisterous",
    "kk": "[ˋbɔɪstərəs]",
    "zh": "adj. 喧鬧的，歡鬧的；（指風、海浪、天氣等）狂暴的，猛烈的，洶湧的",
    "unit": 7,
    "example": "[adj.] Our cheerful, boisterous attitude infected the people around us.",
    "exampleZh": "我們樂觀、熱情的態度感染了周圍的人。"
  },
  {
    "id": 7072,
    "en": "roisterous",
    "kk": "[ˋrɔɪstərəs]",
    "zh": "adj. 飲酒取樂的；作威作福的",
    "unit": 7,
    "example": "[adj.] He tried to learn how to use the word roisterous correctly.",
    "exampleZh": "他試著學習如何正確使用「roisterous」這個單字。"
  },
  {
    "id": 7073,
    "en": "obstreperous",
    "kk": "[əbˋstrepərəs]",
    "zh": "adj. 吵鬧的，喧囂的；難駕馭的，不服管束的",
    "unit": 7,
    "example": "[adj.] You know I have no intention of being awkward and obstreperous.",
    "exampleZh": "你知道我無意存心作對。"
  },
  {
    "id": 7074,
    "en": "aged",
    "kk": "[eɪdʒd]",
    "zh": "adj. ……歲的；年老的，年邁的；老化的；（馬，農畜）超過成熟年齡的；n. 老年人（the aged）；v. 變老，老化；（使）顯老；（使）變陳（age 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] The camp is for youngsters aged 8 to 14.",
    "exampleZh": "這次夏令營是為8至14歲的少年兒童安排的。"
  },
  {
    "id": 7075,
    "en": "older",
    "kk": "[ˋoʊldər]",
    "zh": "adj. old 的比較級；年長的；較舊的；較有經驗的，資歷較深的；n. （Older）人名，多作英語姓氏，通譯奧爾德",
    "unit": 7,
    "example": "[adj.] An older girl befriended me.",
    "exampleZh": "一個年紀大些的女孩對我很友善。"
  },
  {
    "id": 7076,
    "en": "disparate",
    "kk": "[ˋdɪspərət]",
    "zh": "adj.  迥然不同的，無法比較的；多元的；n. 全異的東西，無法相比較的東西",
    "unit": 7,
    "example": "[adj.] Nuclear polyhedrosis viral infection is one factor these disparate species share.",
    "exampleZh": "核多角體病毒感染是這些不同物種共有的一個因素。"
  },
  {
    "id": 7077,
    "en": "impoverished",
    "kk": "[ɪmˋpɑvərɪʃt]",
    "zh": "adj. 貧困的，赤貧的；（品質）惡化的；v. 使貧窮，使枯竭（impoverish 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] The goal is to lure businesses into impoverished areas by offering them tax breaks.",
    "exampleZh": "目的是通過提供減稅優惠把企業吸引到貧困地區。"
  },
  {
    "id": 7078,
    "en": "necessitous",
    "kk": "[nəˋsesɪtəs]",
    "zh": "adj. 貧困的，貧窮的；緊急的，迫切的",
    "unit": 7,
    "example": "[adj.] Necessitous men are not free men.",
    "exampleZh": "『貧窮的人就是沒有自由的人。』"
  },
  {
    "id": 7079,
    "en": "beggarly",
    "kk": "[ˋbeɡərli]",
    "zh": "adj. 赤貧的；像乞丐的",
    "unit": 7,
    "example": "[adj.] What will the euro beggarly for customers?",
    "exampleZh": "歐元對消費者意味著什麼？"
  },
  {
    "id": 7080,
    "en": "penurious",
    "kk": "[pəˋnʊriəs]",
    "zh": "adj. 吝嗇的；缺乏的；貧困的",
    "unit": 7,
    "example": "[adj.] One penurious year my parents used a Swiss cheese plant.",
    "exampleZh": "在經濟拮据的一年，我父母曾用繩狀藤來代替聖誕樹。"
  },
  {
    "id": 7081,
    "en": "existent",
    "kk": "[ɪɡˋzɪstənt]",
    "zh": "adj. 現存的，現有的；生存的；n. 存在（或實有）的事物",
    "unit": 7,
    "example": "[n.] The self is the only knowable existent.",
    "exampleZh": "自我是唯一可知的存在物。"
  },
  {
    "id": 7082,
    "en": "factual",
    "kk": "[ˋfæktʃuəl]",
    "zh": "adj. 真實的；事實的",
    "unit": 7,
    "example": "[adj.] The editorial contained several factual errors.",
    "exampleZh": "這篇社論有幾處事實性錯誤。"
  },
  {
    "id": 7083,
    "en": "affluent",
    "kk": "[ˋæfluənt]",
    "zh": "adj. 富裕的，富足的；<古>（水）暢流，滔滔流動；豐富的；n. 富人；<古>支流",
    "unit": 7,
    "example": "[n.] The diet of the affluent has not changed much over the decades.",
    "exampleZh": "富人的飲食數十年來沒怎麼變。"
  },
  {
    "id": 7084,
    "en": "moneyed",
    "kk": "[ˋmʌnid]",
    "zh": "adj. 有錢的；金錢上的",
    "unit": 7,
    "example": "[adj.] Fear of crime among Japan's new moneyed classes is rising rapidly.",
    "exampleZh": "日本新生的富有階層對犯罪的恐懼在迅速加劇。"
  },
  {
    "id": 7085,
    "en": "unhappy",
    "kk": "[ənˋhæpi]",
    "zh": "adj. 不快樂的",
    "unit": 7,
    "example": "[adj.] I hate to see you unhappy.",
    "exampleZh": "醫生證明他精神失常。"
  },
  {
    "id": 7086,
    "en": "dejected",
    "kk": "[dɪˋdʒektɪd]",
    "zh": "adj. 沮喪的，灰心的，情緒低落的（尤指因失望或受挫）",
    "unit": 7,
    "example": "[adj.] After some three-quarters of an hour, the door opened, and the Badger reappeared, solemnly leading by the paw a very limp and dejected Toad.",
    "exampleZh": "大約過了三刻鐘，門開了，獾走了出來，神情莊重地牽著渾身發軟、垂頭喪氣的蟾蜍的爪子。"
  },
  {
    "id": 7087,
    "en": "regretful",
    "kk": "[rɪˋɡretfl]",
    "zh": "adj. 後悔的，遺憾的",
    "unit": 7,
    "example": "[adj.] Mr. Griffin gave a regretful smile.",
    "exampleZh": "格里芬先生遺憾地笑了笑。"
  },
  {
    "id": 7088,
    "en": "depressed",
    "kk": "[dɪˋprest]",
    "zh": "adj. 抑鬱的，沮喪的；蕭條的，不景氣的；降低了的，削弱了的；凹陷的，低陷的；v. 使抑鬱，使沮喪；抑制；使蕭條（depress 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] People eat when they're depressed.",
    "exampleZh": "人們會在沮喪時吃東西。"
  },
  {
    "id": 7089,
    "en": "downcast",
    "kk": "[ˋdaʊnkæst]",
    "zh": "adj. 目光低垂的、沮喪的、氣餒的；n. 俯視的目光",
    "unit": 7,
    "example": "[adj.] Feeling disappointed after failing the interview, he walked out of the office with a downcast expression.",
    "exampleZh": "面試未通過感到失望的他，帶著沮喪低垂的神情走出了辦公室。"
  },
  {
    "id": 7090,
    "en": "unwell",
    "kk": "[ʌnˋwel]",
    "zh": "adj. （通常作表語）不舒服的，生病的",
    "unit": 7,
    "example": "[adj.] She said she was feeling unwell and went home.",
    "exampleZh": "她說她感覺不舒服回家了。"
  },
  {
    "id": 7091,
    "en": "poorly",
    "kk": "[ˋpʊrli͵ˋpɔrli]",
    "zh": "adv. 不好地，不充分地，貧窮地；adj. （英國英語，非正式）身體不舒服的，有病的",
    "unit": 7,
    "example": "[adv.] Cheetahs breed very poorly in captivity.",
    "exampleZh": "獵豹在圈養的情況下繁殖力很差。"
  },
  {
    "id": 7092,
    "en": "ailing",
    "kk": "[ˋeɪlɪŋ]",
    "zh": "adj. 有病的，體弱的；處境困難的，每況愈下的；v.  （使）生病， （使）不適；困擾，干擾（ail 的現在分詞）",
    "unit": 7,
    "example": "[v.] They discussed the problems ailing the steel industry.",
    "exampleZh": "他們討論了困擾鋼鐵工業的問題。"
  },
  {
    "id": 7093,
    "en": "indisposed",
    "kk": "[͵ɪndɪˋspoʊzd]",
    "zh": "adj. （正式，常作表語）身體不適的，不舒服的；不願意的，不情願的（後接 to do sth）；v. 使厭惡；使不適合；使不能（indispose 的過去式/過去分詞）",
    "unit": 7,
    "example": "[adj.] The speaker was regrettably indisposed.",
    "exampleZh": "很遺憾，演講人身體不適。"
  },
  {
    "id": 7094,
    "en": "unintelligent",
    "kk": "[͵ʌnɪnˋtelɪdʒənt]",
    "zh": "adj. 愚蠢的，不聰明的，無知的",
    "unit": 7,
    "example": "[adj.] He was not unintelligent, but he was lazy.",
    "exampleZh": "他並非不聰明，不過就是懶。"
  },
  {
    "id": 7095,
    "en": "idiotic",
    "kk": "[͵ɪdiˋɑtɪk]",
    "zh": "adj. 十分愚蠢的，白痴般的",
    "unit": 7,
    "example": "[adj.] I am chary of making too many idiotic mistakes.",
    "exampleZh": "我小心謹慎以免犯太多的愚蠢錯誤。"
  },
  {
    "id": 7096,
    "en": "brainless",
    "kk": "[ˋbreɪnləs]",
    "zh": "adj. <貶>愚蠢的，無頭腦的",
    "unit": 7,
    "example": "[adj.] I got treated as if I was a bit brainless.",
    "exampleZh": "我被當成傻瓜一樣對待。"
  },
  {
    "id": 7097,
    "en": "mindless",
    "kk": "[ˋmaɪndləs]",
    "zh": "adj. 盲目的、不動腦筋的、機械式的、無意識的",
    "unit": 7,
    "example": "[adj.] Spending hours scrolling on social media is often a mindless habit that wastes valuable time.",
    "exampleZh": "花好幾個小時滑社群媒體往往是一種不動腦筋的習慣，浪費寶貴的時間。"
  },
  {
    "id": 7098,
    "en": "uninvolved",
    "kk": "[͵ʌnɪnˋvɑlvd]",
    "zh": "adj. 不參與的，未介入的，未被捲入或包括的；感情上不投入的，冷淡的，疏離的",
    "unit": 7,
    "example": "[adj.] I don't want to spend a lot of energy suppressing all my feelings so I appear uninvolved.",
    "exampleZh": "我不想花費大量的精力來壓抑我的感情來表現的不相關。"
  },
  {
    "id": 7099,
    "en": "painless",
    "kk": "[ˋpeɪnləs]",
    "zh": "adj. 無痛的，不痛的；不費勁的，輕鬆的",
    "unit": 7,
    "example": "[adj.] The operation itself is a brief, painless procedure.",
    "exampleZh": "手術本身是一個短暫、無痛的過程。"
  },
  {
    "id": 7100,
    "en": "mushy",
    "kk": "[ˋmʌʃi]",
    "zh": "adj. （食物等）糊狀的，軟爛的；（常含貶義）感傷的，多愁善感的",
    "unit": 7,
    "example": "[adj.] After a dinner of \"mushy\" or \"delicious\" fish, we repaired to our rooms.",
    "exampleZh": "吃完一頓口感「軟爛」或是「鮮美可口」的魚宴後，我們返回了各自的房間。"
  },
  {
    "id": 7101,
    "en": "squashy",
    "kk": "[ˋskwɑʃi]",
    "zh": "adj. 柔軟的，容易壓壞的；熟透的，軟爛的；（土地等）又溼又軟的，泥濘的",
    "unit": 7,
    "example": "[adj.] The fruit is rather squashy.",
    "exampleZh": "這水果很軟。"
  },
  {
    "id": 7102,
    "en": "pulpy",
    "kk": "[ˋpʌlpi]",
    "zh": "adj. 柔軟溼潤而呈果肉狀、泥狀或紙漿狀的；（指小說、電影等通俗作品，常含貶義）聳人聽聞的，低俗刺激的",
    "unit": 7,
    "example": "[adj.] Her body felt bruised, her lips pulpy and tender.",
    "exampleZh": "她的身體感覺碰傷了，她的嘴唇柔軟嬌嫩。"
  },
  {
    "id": 7103,
    "en": "pappy",
    "kk": "[ˋpæpi]",
    "zh": "n. （非正式，主要用於美國）爸爸，父親；adj. 糊狀的，半流質的，漿狀的",
    "unit": 7,
    "example": "[n.] \"Where do you get this stuff?\" asks Leroy. \"From your pappy?\"",
    "exampleZh": "「你從哪裡得到這個東西？」勒羅伊問道。「從你父親那裡？」"
  },
  {
    "id": 7104,
    "en": "slushy",
    "kk": "[ˋslʌʃi]",
    "zh": "adj. （因冰雪融化而）溼軟泥濘的，被泥雪覆蓋的；（貶義）（故事、話語等）過於浪漫傷感的，矯情的；n. （口語）冰沙，碎冰飲料（亦拼作 slushie）；船上的廚子；（澳）廚子的助手",
    "unit": 7,
    "example": "[adj.] Here and there a drift across the road was wet and slushy.",
    "exampleZh": "路上有零零散散的積雪，滿是泥濘。"
  },
  {
    "id": 7105,
    "en": "chic",
    "kk": "[ʃik]",
    "zh": "adj. 時髦的，雅緻的；n. 時髦，時尚",
    "unit": 7,
    "example": "[adj.] She is always so chic, so elegant.",
    "exampleZh": "她總是那麼時髦，那麼優雅。"
  },
  {
    "id": 7106,
    "en": "practicable",
    "kk": "[ˋpræktɪkəbl]",
    "zh": "adj. 可行的，行得通的； 適用的，有用的",
    "unit": 7,
    "example": "[adj.] It offers practicable advice to businessmen.",
    "exampleZh": "它為商人提供切實可行的建議。"
  },
  {
    "id": 7107,
    "en": "viable",
    "kk": "[ˋvaɪəbəl]",
    "zh": "adj. 有望成功的；切實可行的",
    "unit": 7,
    "example": "[adj.] The plane will be commercially viable if 400 can be sold.",
    "exampleZh": "這飛機若能售出400架從商業上看就可行。"
  },
  {
    "id": 7108,
    "en": "attainable",
    "kk": "[əˋteɪnəb(ə)l]",
    "zh": "adj. 可以達到的，可以獲得的",
    "unit": 7,
    "example": "[adj.] This standard is easily attainable by most students.",
    "exampleZh": "這個標準大多數學生都容易達到。"
  },
  {
    "id": 7109,
    "en": "distressed",
    "kk": "[dɪˋstrest]",
    "zh": "adj. 苦惱的，憂慮的；十分疼痛的；（傢俱或衣服）刻意做舊的；<舊>貧困的，窮困的；〈非正式，美〉（房地產）（因喪失抵押房產贖回權或因該房產系其價值不足以償付債務的地產的一個部分而）賤賣的；v.   使苦惱，使悲傷，使憂慮；使（傢俱，皮革）有仿磨損的痕跡（distress 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] He was too distressed and confused to answer their questions.",
    "exampleZh": "他非常苦惱而困惑，無法回答他們的問題。"
  },
  {
    "id": 7110,
    "en": "unusual",
    "kk": "[ʌnˋjuʒuəl]",
    "zh": "adj. 不尋常的，罕見的；與眾不同的，獨特的",
    "unit": 7,
    "example": "[adj.] He has an unusual cast of mind.",
    "exampleZh": "他的思想與眾不同。"
  },
  {
    "id": 7111,
    "en": "marked",
    "kk": "[mɑrkt]",
    "zh": "adj. 明顯的，顯著的（比較級 more marked，最高級 most marked）；打上標記的，有記號的；（語言學）有標記的；（牌戲作弊）背面有標記的；成為攻擊對象的，處境危險的；v. 做標記於；打分數；使有汙點（mark 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] The door is marked \"Private.\"",
    "exampleZh": "門上寫著「閒人免進」。"
  },
  {
    "id": 7112,
    "en": "towering",
    "kk": "[ˋtaʊərɪŋ]",
    "zh": "adj. 高聳的，參天的，巍峨的；卓越的，傑出的；強烈的，激烈的；v. 高聳，聳立（tower 的現在分詞）",
    "unit": 7,
    "example": "[adj.] The canyon is hemmed in by towering walls of rock.",
    "exampleZh": "峽谷四周環繞著高聳的巖壁。"
  },
  {
    "id": 7113,
    "en": "colossal",
    "kk": "[kəˋlɑs(ə)l]",
    "zh": "adj. 巨大的，龐大的；異常的，非常的；（建築）（柱型）不止一層柱的，多層柱的；（雕像）至少有真人兩倍大的",
    "unit": 7,
    "example": "[adj.] It was a colossal crocodilian.",
    "exampleZh": "它是一種巨大的鱷魚。"
  },
  {
    "id": 7114,
    "en": "brawny",
    "kk": "[ˋbrɔni]",
    "zh": "adj. 強壯的，肌肉結實的，肌肉發達的",
    "unit": 7,
    "example": "[adj.] His five tall brothers gave him good-by with admiring but slightly patronizing smiles, for Gerald was the baby and the little one of a brawny family.",
    "exampleZh": "他的五個高個子兄弟向他道了個再見，帶著羨慕而略帶關注的微笑，因為傑拉爾德在強壯的一家人中是最小和最矮的一個。"
  },
  {
    "id": 7115,
    "en": "strapping",
    "kk": "[ˋstræpɪŋ]",
    "zh": "adj. 魁梧的，高大健壯的；n. 橡皮膏，綁紮繃帶；皮帶，捆紮帶，打包帶；v. （用帶子）捆紮（strap 的現在分詞）",
    "unit": 7,
    "example": "[adj.] King Tut, it seems, was hardly a robust and strapping prince.",
    "exampleZh": "看上去，圖坦卡蒙幾乎不是一位健壯魁梧的王子。"
  },
  {
    "id": 7116,
    "en": "utilitarian",
    "kk": "[͵jutɪlɪˋteriən]",
    "zh": "adj. 功利主義的，實利主義的；功利的，實用的；n. 功利主義者",
    "unit": 7,
    "example": "[adj.] It was James Mill who was the best publicist for utilitarian ideas on government.",
    "exampleZh": "詹姆斯·米爾才是政府功利主義思想的最佳宣傳家。"
  },
  {
    "id": 7117,
    "en": "puny",
    "kk": "[ˋpjuni]",
    "zh": "adj. 弱小的，瘦小孱弱的；微不足道的，微小的",
    "unit": 7,
    "example": "[adj.] They laughed at my puny efforts.",
    "exampleZh": "他們嘲笑我微不足道的努力。"
  },
  {
    "id": 7118,
    "en": "weakly",
    "kk": "[ˋwikli]",
    "zh": "adv. 虛弱地，無力地，軟弱地；微弱地，輕微地；adj. 虛弱的，軟弱的，有病的；n. （Weakly）人名，威克利（英語姓氏）",
    "unit": 7,
    "example": "[adv.] She started to sit up, grimaced, and sank back weakly against the pillow.",
    "exampleZh": "她開始坐起來，痛苦地皺著臉，又虛弱地靠回到枕頭上。"
  },
  {
    "id": 7119,
    "en": "interrogate",
    "kk": "[ɪnˋterəɡeɪt]",
    "zh": "v. 審問，訊問，質問；（在計算機或其他機器上）查詢",
    "unit": 7,
    "example": "[v.] The only caveat here is the need to interrogate the returned data to switch on the different data and tracer types.",
    "exampleZh": "這裡唯一需要注意的是，要檢查返回的數據，以啟用不同的數據和跟蹤程序類型。"
  },
  {
    "id": 7120,
    "en": "append",
    "kk": "[əˋpend]",
    "zh": "v. <正式>附加，增補",
    "unit": 7,
    "example": "[v.] If it's not, append it to the root element.",
    "exampleZh": "如果不是，就將其附加到根元素。"
  },
  {
    "id": 7121,
    "en": "rinse",
    "kk": "[rɪns]",
    "zh": "v. （用清水）沖洗；（用其他液體）洗；把（肥皂、汙垢等）洗掉（rinse sth. off/out）；漱（口）；染髮；n. 沖洗；頭髮定型劑，染髮劑；（清洗用的）液體",
    "unit": 7,
    "example": "[n.] I gave the glass a rinse.",
    "exampleZh": "我把杯子沖洗了一下。"
  },
  {
    "id": 7122,
    "en": "moisten",
    "kk": "[ˋmɔɪs(ə)n]",
    "zh": "vt. 弄溼，使……溼潤；vi. 變潮溼，變得溼潤",
    "unit": 7,
    "example": "[vt.] According to Chinese traditional medicine, start of summer is a key time to moisten the heart.",
    "exampleZh": "中醫認為，立夏是滋潤心臟的關鍵時刻。"
  },
  {
    "id": 7123,
    "en": "blacken",
    "kk": "[ˋblækən]",
    "zh": "vt. 使變黑；誹謗，詆譭，敗壞（名譽）；（烹飪）把（食物）烤至表面焦黑；vi. 變黑，發黑；n. <英>布萊肯（姓氏）",
    "unit": 7,
    "example": "[vt.] You can blacken a lamp bulb with paint.",
    "exampleZh": "你可以用顏料把一盞燈的燈泡塗黑。"
  },
  {
    "id": 7124,
    "en": "adjudicate",
    "kk": "[əˋdʒudɪkeɪt]",
    "zh": "v. <正式>裁定，裁決，宣判；（法律）審判，審理（案件）",
    "unit": 7,
    "example": "[v.] The international court of justice might be a suitable place to adjudicate claims.",
    "exampleZh": "國際法庭也許是裁定索賠案的合適之地。"
  },
  {
    "id": 7125,
    "en": "arbitrate",
    "kk": "[ˋɑrbɪtreɪt]",
    "zh": "v. 仲裁，公斷",
    "unit": 7,
    "example": "[v.] In many cases, I am employed to arbitrate between two clashing parties.",
    "exampleZh": "在許多情況下，我受僱於衝突雙方進行仲裁。"
  },
  {
    "id": 7126,
    "en": "adjudge",
    "kk": "[əˋdʒʌdʒ]",
    "zh": "vt. 宣判，判決；認為",
    "unit": 7,
    "example": "[vt.] I adjudge him unworthy of esteem.",
    "exampleZh": "我認為他不值得我尊敬。"
  },
  {
    "id": 7127,
    "en": "soiled",
    "kk": "[sɔɪld]",
    "zh": "adj. 髒的，被弄髒的；v. 弄髒；玷汙，敗壞；喂（牛）青飼料（soil 的過去式和過去分詞）",
    "unit": 7,
    "example": "[v.] She soiled her dress with ink.",
    "exampleZh": "她的衣服被墨水弄髒了。"
  },
  {
    "id": 7128,
    "en": "grimy",
    "kk": "[ˋɡraɪmi]",
    "zh": "adj. 骯髒的，汙穢的，積滿汙垢的",
    "unit": 7,
    "example": "[adj.] \"They must scurry back through the grimy crevices from where they had crept,\" says the New Times.",
    "exampleZh": "《新時代》雜誌說：「它們必須從它們曾經爬過的地方，從骯髒的縫隙裡迅速跑回來。」"
  },
  {
    "id": 7129,
    "en": "grubby",
    "kk": "[ˋɡrʌbi]",
    "zh": "adj. 骯髒的，汙穢的；生蛆的，多蛆的；（指行為等）<貶>卑鄙的，不正當的；矮小的",
    "unit": 7,
    "example": "[adj.] He hoped she wouldn't notice his grubby shirt cuffs.",
    "exampleZh": "他希望她不會注意到他骯髒的襯衫袖口。"
  },
  {
    "id": 7130,
    "en": "filthy",
    "kk": "[ˋfɪlθi]",
    "zh": "adj. 十分骯髒的，汙穢的；淫穢的，下流的；<非正式>氣憤的，惱怒的；<英，非正式>（天氣）惡劣的，多雨雪的；卑鄙的，不道德的；adv. <非正式>非常",
    "unit": 7,
    "example": "[adv.] His hair was unkempt and filthy.",
    "exampleZh": "他的頭髮沒梳洗，十分髒膩。"
  },
  {
    "id": 7131,
    "en": "mucky",
    "kk": "[ˋmʌki]",
    "zh": "adj. <非正式>沾滿汙泥（或糞便、汙垢）的，骯髒的；<非正式>令人討厭的，不光彩的；<非正式，尤英式>（指笑話、故事等）下流的，猥褻的；（指土壤或低窪地）溼軟泥濘的，似沼澤的",
    "unit": 7,
    "example": "[adj.] A mucky business but a profitable one.",
    "exampleZh": "一樁令人討厭但是賺錢的生意。"
  },
  {
    "id": 7132,
    "en": "stained",
    "kk": "[steɪnd]",
    "zh": "adj. 沾了汙漬的，有汙漬的；著色的，染色的（如木材、玻璃、標本）；玷汙的，蒙上汙點的（尤指名聲）；stained glass（固定搭配）：彩色玻璃，花窗玻璃（常用於教堂等建築的裝飾窗戶）；v. （stain 的過去式和過去分詞）弄髒，留下汙漬；給……染色，使佈滿更亮（或更暗的）色彩；玷汙，敗壞（名聲）",
    "unit": 7,
    "example": "[adj.] His clothing was stained with mud.",
    "exampleZh": "他的衣服沾了泥。"
  },
  {
    "id": 7133,
    "en": "verify",
    "kk": "[ˋvɛrə͵faɪ]",
    "zh": "v. 證明；證實",
    "unit": 7,
    "example": "[v.] An external auditor will verify the accounts.",
    "exampleZh": "外部審計員將核實這些賬目。"
  },
  {
    "id": 7134,
    "en": "prepared",
    "kk": "[prɪˋperd]",
    "zh": "adj. 有準備的，準備好的；打算做，樂意做；提前準備好的；v. 準備，預備；策劃，籌備；（使）（自己或他人）作好準備（應對未來）（prepare 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[v.] We'll be better prepared next time.",
    "exampleZh": "下次我們會準備得更充分。"
  },
  {
    "id": 7135,
    "en": "organized",
    "kk": "[ˋɔrɡənaɪzd]",
    "zh": "adj. 有組織的，系統的；參加工會的；有條理的，有安排的；（人）有條理的，高效的；v. 組織，籌備；安排，處理；規劃，管理（organize 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] The conference was very well organized.",
    "exampleZh": "這次會議組織得很好。"
  },
  {
    "id": 7136,
    "en": "equipped",
    "kk": "[ɪˋkwɪpt]",
    "zh": "adj. 裝備齊全的；使有準備，使有能力；v. 裝備，配備；使有所準備，使能夠勝任（equip 的過去式和過去分詞形式）",
    "unit": 7,
    "example": "[adj.] The kitchen was compact but well equipped.",
    "exampleZh": "這間廚房雖然空間小但設備齊全。"
  },
  {
    "id": 7137,
    "en": "seemingly",
    "kk": "[ˋsimɪŋli]",
    "zh": "adv. 貌似，看似（但可能並非如此）；似乎，好像（是事實）",
    "unit": 7,
    "example": "[adv.] She was rich, beautiful and seemingly ageless.",
    "exampleZh": "她富有漂亮，而且看起來永不顯老。"
  },
  {
    "id": 7138,
    "en": "intone",
    "kk": "[ɪnˋtoʊn]",
    "zh": "vt. 吟誦，吟詠（以莊重緩慢的語調說出）；vi. 吟誦，吟詠（以有樂感的語調說話或吟唱）",
    "unit": 7,
    "example": "[vi.] \"My vessel has only slight damage on forecastle and bulb,\" I intone.",
    "exampleZh": "「我的船有前部水手艙和燈泡有輕微損毀，」我徐徐道來。"
  },
  {
    "id": 7139,
    "en": "croon",
    "kk": "[krun]",
    "zh": "v. 低聲歌唱，輕聲哼唱；柔情地唱；對……低聲唱；柔聲說；n. 低吟，低吟聲；輕哼，輕哼聲；輕柔的歌聲；（Croon）（美、荷、瑞、德、比）克龍（人名）",
    "unit": 7,
    "example": "[v.] I croon this poem in delight.",
    "exampleZh": "本人輕哼這喜悅的詩。"
  },
  {
    "id": 7140,
    "en": "warble",
    "kk": "[ˋwɔrbl]",
    "zh": "n. 鳥的婉轉囀鳴聲；顫聲；（獸醫）牛皮下腫塊（由牛皮蠅幼蟲寄生引起）；牛皮蠅幼蟲；v. （鳥）囀鳴，婉轉鳴叫；（人）用柔和顫聲唱",
    "unit": 7,
    "example": "[v.] The bird continued to warble.",
    "exampleZh": "鳥兒繼續啁啾。"
  },
  {
    "id": 7141,
    "en": "afresh",
    "kk": "[əˋfreʃ]",
    "zh": "adv. 重新，再度",
    "unit": 7,
    "example": "[adv.] It was a chance to start afresh.",
    "exampleZh": "這是個重新開始的機會。"
  },
  {
    "id": 7142,
    "en": "anew",
    "kk": "[əˋnu]",
    "zh": "adv. 重新，再",
    "unit": 7,
    "example": "[adv.] Now, as you graduate to begin anew, I wish that for you.",
    "exampleZh": "現在，你們即將畢業，重新起航，我也這樣祝願你們。"
  },
  {
    "id": 7143,
    "en": "perpetrate",
    "kk": "[ˋpɝpə͵tret]",
    "zh": "vt. 犯（罪），做（惡），幹（壞事）",
    "unit": 7,
    "example": "[vt.] People who perpetrate, condone or facilitate it must be brought to justice.",
    "exampleZh": "必須將參與、寬恕或協助這種行為的人繩之以法。"
  },
  {
    "id": 7144,
    "en": "hitherto",
    "kk": "[͵hɪðərˋtu]",
    "zh": "adv. 迄今，至今",
    "unit": 7,
    "example": "[adv.] How does the author view the hitherto high click-through rates?",
    "exampleZh": "作者如何看待迄今為止的高點擊率？"
  },
  {
    "id": 7145,
    "en": "frontwards",
    "kk": "",
    "zh": "adv. 向前地",
    "unit": 7,
    "example": "[adv.] He tried to learn how to use the word frontwards correctly.",
    "exampleZh": "他試著學習如何正確使用「frontwards」這個單字。"
  },
  {
    "id": 7146,
    "en": "onwards",
    "kk": "[ˋɑnwərdz]",
    "zh": "adv. 向前，在前面，前進地；從…起，…以後（常與 from 連用）",
    "unit": 7,
    "example": "[adv.] The pool is open from 7 a.m. onwards.",
    "exampleZh": "游泳池從早上7點起開放。"
  },
  {
    "id": 7147,
    "en": "shining",
    "kk": "[ˋʃaɪnɪŋ]",
    "zh": "adj. 發光的，反光的；（成就）輝煌的，（品質）出色的；v. （太陽或其他光源）發光，照耀；（用電筒等）照射；（表面）發亮（shine 的現在分詞）",
    "unit": 7,
    "example": "[adj.] The stars were shining bright.",
    "exampleZh": "星光閃爍。"
  },
  {
    "id": 7148,
    "en": "blazing",
    "kk": "[ˋbleɪzɪŋ]",
    "zh": "adj. 燃燒的，猛烈燃燒的，著火的；耀眼的，熾熱的，灼熱的（常與 sun、heat、hot 等表示高溫或強光的詞語搭配）；（力量、速度等）強烈的；極快的；（爭論）激烈的；極其憤怒的，情感強烈的；adv. 與火或熱量相關地；n. 猛烈燃燒的火焰；v. blaze 的現在分詞：燃燒；閃耀；怒視；（憤怒等情緒）突然爆發；（槍或射擊者）連續射擊；（非正式）奪取，摘取；大力擊（球）；（報紙）聳人聽聞地報道，大肆宣揚",
    "unit": 7,
    "example": "[adj.] He rushed back into the blazing house.",
    "exampleZh": "他又返回，衝進了燃燒著的房子。"
  },
  {
    "id": 7149,
    "en": "dazzling",
    "kk": "[ˋdæzlɪŋ]",
    "zh": "adj. 令人讚歎的，給人深刻印象的；耀眼的，眩目的；v. 使目眩，使眼花；使讚歎不已，使驚奇（dazzle的現在分詞）",
    "unit": 7,
    "example": "[adj.] He shielded his eyes against the dazzling declining sun.",
    "exampleZh": "他遮著眼睛以擋住刺眼的夕陽。"
  },
  {
    "id": 7150,
    "en": "abort",
    "kk": "[əˋbɔrt]",
    "zh": "v. 流產；夭折；(計畫等)失敗",
    "unit": 7,
    "example": "[v.] The virus can cause pregnant animals to abort.",
    "exampleZh": "這種病毒可能導致懷孕動物流產。"
  },
  {
    "id": 7151,
    "en": "revoke",
    "kk": "[rɪˋvoʊk]",
    "zh": "v. 撤回，撤銷；（橋牌、惠斯特等牌戲中）有牌不跟；n. 有牌不跟",
    "unit": 7,
    "example": "[v.] Some Saab models, including its flagship 9-5 saloon car, are based on GM technology and GM has retained the right to revoke the licenses.",
    "exampleZh": "薩博的一些車型，包括旗艦車型9-5轎車，是基於通用汽車的技術，通用汽車保留了吊銷許可證的權利。"
  },
  {
    "id": 7152,
    "en": "attire",
    "kk": "[əˋtaɪər]",
    "zh": "n. <正式>服裝，衣服；v. 著裝",
    "unit": 7,
    "example": "[n.] People wear slacks, sweaters, flat shoes, and all manner of casual attire for travel.",
    "exampleZh": "人們旅行時穿寬鬆長褲、運動衫、平底鞋和各式休閒服裝。"
  },
  {
    "id": 7153,
    "en": "array",
    "kk": "[əˋreɪ]",
    "zh": "n. 一系列，大量；數組，陣列；盛裝；v. 佈置，排列；配置（兵力）；穿戴，打扮",
    "unit": 7,
    "example": "[n.] I was constantly ill, with a baffling array of symptoms.",
    "exampleZh": "我不斷地生病，還伴有一大堆莫名其妙的症狀。"
  },
  {
    "id": 7154,
    "en": "validate",
    "kk": "[ˋvælədet]",
    "zh": "v. 使有效；使生效",
    "unit": 7,
    "example": "[v.] Travelers must present valid passports to validate their international flight bookings.",
    "exampleZh": "旅客必須出示有效護照以核驗確認其國際航班預訂。"
  },
  {
    "id": 7155,
    "en": "squawk",
    "kk": "[skwɔk]",
    "zh": "vi. 大聲抱怨、抗議；（鳥類）發出刺耳叫聲；n. 粗厲叫聲、怨言",
    "unit": 7,
    "example": "[vi.] Several disgruntled passengers began to squawk loudly when the airline announced a three-hour delay.",
    "exampleZh": "當航空公司宣布航班延誤三小時後，幾位不滿的乘客開始大聲抱怨抗議。"
  },
  {
    "id": 7156,
    "en": "screech",
    "kk": "[skritʃ]",
    "zh": "v. 尖叫；發出尖銳刺耳的聲音；尖著聲音地說，尖聲喊出（話語）；（車輛或輪胎）發出刺耳的嘎吱聲，呼嘯而過或嘎吱一聲停下（常作 screech to a halt/stop）；n. 刺耳的尖叫聲；尖利刺耳的聲音",
    "unit": 7,
    "example": "[n.] The figure gave a screech.",
    "exampleZh": "那個人影發出了一聲尖叫。"
  },
  {
    "id": 7157,
    "en": "hoot",
    "kk": "[hut]",
    "zh": "n. 貓頭鷹的叫聲；鳴響（尤指汽笛或喇叭的響聲）；表示嘲弄、反對或起鬨的喊叫聲或噓聲；（非正式）滑稽有趣的人或事物；（非正式）絲毫（用於 not care/give a hoot）；（Hoot）（芬蘭）霍特（人名）；vi. （貓頭鷹）鳴叫；（喇叭、汽笛）鳴響；（英國英語）按喇叭；（人）高聲大笑、尖叫或起鬨（以示反對或嘲弄）；vt. 使（喇叭、汽笛）鳴響；用噓聲轟趕（某人）；呵斥（某人）",
    "unit": 7,
    "example": "[n.] You ought to meet her—she's a hoot!",
    "exampleZh": "你應該見見她—她笑料十足！"
  },
  {
    "id": 7158,
    "en": "caw",
    "kk": "[kɔ]",
    "zh": "n. 鴉叫聲，呱呱叫；v. 發出鴉叫聲，呱呱地叫，聒噪",
    "unit": 7,
    "example": "[v.] What could have caused the crows to caw?",
    "exampleZh": "什麼能讓烏鴉叫的？"
  },
  {
    "id": 7159,
    "en": "croak",
    "kk": "[kroʊk]",
    "zh": "v. （蛙、鳥等）呱呱地叫，發出低沉沙啞的叫聲；用嘶啞的聲音說，啞著嗓子說話；<非正式>死，斷氣；<非正式>發牢騷，抱怨；n. 呱呱叫聲，（蛙、鳥等的）低沉沙啞的叫聲；（人的）低沉沙啞的說話聲，沙啞嗓音",
    "unit": 7,
    "example": "[n.] We move between ceiling and floor, between striplight and the croak of linoleum.",
    "exampleZh": "我們在天花板與地板之間穿梭，在條形燈和油氈的摩擦聲響之間往來。"
  },
  {
    "id": 7160,
    "en": "recount",
    "kk": "[rɪˋkaʊnt]",
    "zh": "v. 敘述，說明；重數，重新清點（選票）；n. 重新計算，重點選票；敘述，說明",
    "unit": 7,
    "example": "[v.] It would take more energy to recount the votes.",
    "exampleZh": "重新計票需要耗費更多的精力。"
  },
  {
    "id": 7161,
    "en": "discern",
    "kk": "[dɪˋsɝn]",
    "zh": "v. 分辨；識別",
    "unit": 7,
    "example": "[v.] This man discerns well.",
    "exampleZh": "這個人的辨別能力很好。"
  },
  {
    "id": 7162,
    "en": "adorn",
    "kk": "[əˋdɔrn]",
    "zh": "v. 裝飾；使生色",
    "unit": 7,
    "example": "[v.] Several magnificent oil paintings adorn the walls.",
    "exampleZh": "幾張華麗的油畫使牆壁熠熠生輝。"
  },
  {
    "id": 7163,
    "en": "embellish",
    "kk": "[ɪmˋbelɪʃ]",
    "zh": "vt. 裝飾，修飾，美化；潤色，渲染，添油加醋；vi. 裝飾起來；加以潤色",
    "unit": 7,
    "example": "[vt.] Ivy leaves embellish the front of the dresser.",
    "exampleZh": "長春藤樹葉裝飾著梳妝檯的正面。"
  },
  {
    "id": 7164,
    "en": "garnish",
    "kk": "[ˋɡɑrnɪʃ]",
    "zh": "v. 裝飾（尤指食物），給（食物）加配菜，點綴（食物）；（法律）為合法扣押屬於債務人或被告的錢財而傳訊（第三方），或依法扣押（債務人的工資、財產）；n. （為增加色香味而添加的）配菜，裝飾菜；裝飾品；（Garnish）（美、英）加尼什（人名）",
    "unit": 7,
    "example": "[v.] Can you help me to garnish a fish with slices of lemon?",
    "exampleZh": "你能幫我在魚上裝飾上檸檬片嗎？"
  },
  {
    "id": 7165,
    "en": "uninteresting",
    "kk": "[ʌnˋɪntrəstɪŋ]",
    "zh": "adj. 無趣味的，乏味的，令人厭倦的",
    "unit": 7,
    "example": "[adj.] His lecture was so pedantic and uninteresting.",
    "exampleZh": "他的講座學究氣十足且沒趣。"
  },
  {
    "id": 7166,
    "en": "boring",
    "kk": "[ˋbɔrɪŋ]",
    "zh": "adj. 令人生厭的；乏味的",
    "unit": 7,
    "example": "[adj.] Exercising alone can be boring.",
    "exampleZh": "獨自一個人鍛鍊可能會很無聊。"
  },
  {
    "id": 7167,
    "en": "wearisome",
    "kk": "[ˋwɪrisəm]",
    "zh": "adj. 使疲倦的；使厭倦的；乏味的",
    "unit": 7,
    "example": "[adj.] Day after wearisome day the routine continued.",
    "exampleZh": "勞累的一天之後工作照舊。"
  },
  {
    "id": 7168,
    "en": "repudiate",
    "kk": "[rɪˋpjudieɪt]",
    "zh": "vt. 拒絕；否定；批判；與……斷絕關係；拒付",
    "unit": 7,
    "example": "[vt.] He would repudiate all debts incurred by his son.",
    "exampleZh": "他拒絕償還他兒子的一切債務。"
  },
  {
    "id": 7169,
    "en": "gainsay",
    "kk": "[͵ɡeɪnˋseɪ]",
    "zh": "vt. <正式，書面>反駁，否定，否認；n. <罕見，書面>否認；反對",
    "unit": 7,
    "example": "[vt.] Nobody can gainsay his claims.",
    "exampleZh": "沒人能夠反駁他的說法。"
  },
  {
    "id": 7170,
    "en": "hearten",
    "kk": "[ˋhɑrt(ə)n]",
    "zh": "vt. 激勵，鼓勵，使振作；vi. 振作起來，打起精神",
    "unit": 7,
    "example": "[vt.] This reminder did not hearten the servants much; they still held back.",
    "exampleZh": "這個提示並沒有使僕人們振作起來；他們仍然躊躇不前。"
  },
  {
    "id": 7171,
    "en": "uplift",
    "kk": "[ˋʌplɪft]",
    "zh": "v. 抬起，舉起；使振奮，鼓舞，提升（精神或社會地位）；撿起；n. 提高，增長，增值；振奮，鼓舞，精神動力；（地殼的）隆起；舉起，抬起；（尤指文胸的）上託，上託式胸罩（胸襯）",
    "unit": 7,
    "example": "[n.] The news gave them a much needed uplift.",
    "exampleZh": "這消息給他們帶來了及時的鼓舞。"
  },
  {
    "id": 7172,
    "en": "exhilarate",
    "kk": "[ɪɡˋzɪləreɪt]",
    "zh": "vt. 使高興，使振奮，使愉快",
    "unit": 7,
    "example": "[vt.] This dangerous task did not defeat but exhilarate him.",
    "exampleZh": "這件危險的任務不但沒有擊垮他反而使他振奮。"
  },
  {
    "id": 7173,
    "en": "enliven",
    "kk": "[ɪnˋlaɪvn]",
    "zh": "vt. 使活潑，使生動，使有生氣",
    "unit": 7,
    "example": "[vt.] He sidetracked to enliven the atmosphere.",
    "exampleZh": "他換了個話題來活躍一下氣氛。"
  },
  {
    "id": 7174,
    "en": "rouse",
    "kk": "[raʊz]",
    "zh": "v. <正式>喚醒，（使）醒來；激勵，（使）振奮；激起（某種情感）；激怒，使激動；使（某事物）發生，引起；攪動（液體，尤指釀製中的啤酒）；n. 覺醒，奮起；【名】 （Rouse）（英）勞斯（人名）",
    "unit": 7,
    "example": "[v.] Signs of danger abound, but like the proverbial slow-boiling frog, we seem unable to rouse ourselves.",
    "exampleZh": "危險的跡象比比皆是，但就像諺語中說的「溫水煮青蛙」，我們似乎無法喚醒自己。"
  },
  {
    "id": 7175,
    "en": "congregate",
    "kk": "[ˋkɑŋɡrɪɡeɪt]",
    "zh": "v. 集合，聚集；adj. 集合在一起的",
    "unit": 7,
    "example": "[adj.] Young people often congregate in the main square in the evenings.",
    "exampleZh": "年輕人傍晚時經常聚集在大廣場上。"
  },
  {
    "id": 7176,
    "en": "convene",
    "kk": "[kənˋvin]",
    "zh": "v. 召集，召開（會議）",
    "unit": 7,
    "example": "[v.] The UN had the foresight to convene a \"world assembly on ageing\" back in 1982, but that came and went.",
    "exampleZh": "聯合國早在1982年就有遠見地召開了「老齡化問題世界大會」，但那次大會開完就過去了。"
  },
  {
    "id": 7177,
    "en": "dangle",
    "kk": "[ˋdæŋɡ(ə)l]",
    "zh": "v. （使）懸垂，（使）懸蕩；用（誘惑物）來誘惑（或激勵）某人；【名】  （Dangle）（美、印、法）當格勒（人名）",
    "unit": 7,
    "example": "[v.] The blind fury here is the mythological figure Atropos; this is the Fate that cuts the slender thread by which our lives dangle.",
    "exampleZh": "這裡的盲目暴怒是指神話人物阿特洛波斯；這是命運剪斷了生命懸線的細線。"
  },
  {
    "id": 7178,
    "en": "unassuming",
    "kk": "[͵ʌnəˋsumɪŋ]",
    "zh": "adj. （人或行為）謙遜的，不裝腔作勢的，不出風頭的；（事物、地點或外觀）不顯眼的，樸實無華的，普通的",
    "unit": 7,
    "example": "[adj.] What really matters to me is that she grew up to be warm and kind, with an easygoing, unassuming demeanor.",
    "exampleZh": "對我來說真正重要的是，她長成一個溫暖善良、為人隨和、舉止謙遜的人。"
  },
  {
    "id": 7179,
    "en": "meek",
    "kk": "[mik]",
    "zh": "adj. 溫順的；謙恭的；馴服的；n. the meek 溫順的人們；（Meek）人名，（英）米克",
    "unit": 7,
    "example": "[adj.] On the surface she seemed meek, rather insipid.",
    "exampleZh": "她表面上看似溫順，其實乏味無趣。"
  },
  {
    "id": 7180,
    "en": "exonerate",
    "kk": "[ɪɡˋzɑnəreɪt]",
    "zh": "vt. <正式>證明（某人）無罪，使免罪，為（某人）開脫",
    "unit": 7,
    "example": "[vt.] CFTC study last year appeared to exonerate them.",
    "exampleZh": "CFTC去年的一個研究報告赦免了他們。"
  },
  {
    "id": 7181,
    "en": "absolve",
    "kk": "[əbˋzɑlv]",
    "zh": "vt. <正式>免除（責任、罪責）；宣告……無罪；（宗教）赦免（罪過）",
    "unit": 7,
    "example": "[vt.] The elements of weakness that mark every person cannot absolve me from the burdens and blessings of responsibility for myself and to others.",
    "exampleZh": "人人都有弱點，但這並不能免除我對自己和他人所負有的責任，這份責任既有重擔也有饋贈。"
  },
  {
    "id": 7182,
    "en": "acquit",
    "kk": "[əˋkwɪt]",
    "zh": "vt. （法律）宣判……無罪，無罪釋放（常用於 acquit sb of/on a charge）；（acquit oneself）表現，行事；（正式或舊用法）使……解除義務或責任；（正式或舊用法）清償（債務）",
    "unit": 7,
    "example": "[vt.] Will the court acquit him of the crime?",
    "exampleZh": "法庭會宣判他無罪釋放嗎？"
  },
  {
    "id": 7183,
    "en": "envisage",
    "kk": "[ɪnˋvɪzɪdʒ]",
    "zh": "v. 設想，展望；<古>正視，面對",
    "unit": 7,
    "example": "[v.] I can't envisage her coping with this job.",
    "exampleZh": "我無法設想她如何應付這個工作。"
  },
  {
    "id": 7184,
    "en": "envision",
    "kk": "[ɛnˋvɪʒən]",
    "zh": "v. 想像；展望",
    "unit": 7,
    "example": "[v.] I don't envision working with him again.",
    "exampleZh": "我想象不出再與他一起工作的可能。"
  },
  {
    "id": 7185,
    "en": "halloo",
    "kk": "[hæˋlu]",
    "zh": "int. （用以引起注意）嘿，喂；（打獵時令狗出發追逐獵物）嘿，上；n. “嘿”（或“哎”）的喊叫聲；v. 發出“嘿”（或“嗨”）聲；向……大聲叫喊",
    "unit": 7,
    "example": "[int.] \"Halloo!\" he shouted to his hounds.",
    "exampleZh": "「嗨！」他對獵狗喊到。"
  },
  {
    "id": 7186,
    "en": "innovate",
    "kk": "[ˋɪnə͵vet]",
    "zh": "v. 創立；革新",
    "unit": 7,
    "example": "[v.] They collaborate and innovate.",
    "exampleZh": "他們合作並創新。"
  },
  {
    "id": 7187,
    "en": "contrive",
    "kk": "[kənˋtraɪv]",
    "zh": "v. 謀劃，策劃；設計，發明；設法做到",
    "unit": 7,
    "example": "[v.] I decided to contrive a meeting between the two of them.",
    "exampleZh": "我決定設法讓他們雙方見上一面。"
  },
  {
    "id": 7188,
    "en": "pinpoint",
    "kk": "[ˋpɪnpɔɪnt]",
    "zh": "vt. 精確查明、準確指出、精準定位；adj. 精確的、極微小的；n. 針尖、微小光點",
    "unit": 7,
    "example": "[vt.] The mechanic ran a diagnostic scan to pinpoint the exact location of the engine problem.",
    "exampleZh": "技師進行了診斷掃描，以精確查明引擎故障的具體位置。"
  },
  {
    "id": 7189,
    "en": "forfeit",
    "kk": "[ˋfɔrfɪt]",
    "zh": "v. 喪失，被沒收；（尤指為獲得他物）主動放棄；n. 罰金，沒收物；adj. 被沒收的，喪失的",
    "unit": 7,
    "example": "[n.] That is the forfeit he must pay.",
    "exampleZh": "那是他必須付的罰金。"
  },
  {
    "id": 7190,
    "en": "tapered",
    "kk": "[ˋteɪpərd]",
    "zh": "adj. 錐形的；逐漸變細的；v. 逐漸變細、變少（taper 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] \"Obelisks\" (tall four-sided tapered monuments) were carefully constructed and even purposefully geographically located around 3500 BC.",
    "exampleZh": "「方尖碑」（高大的四邊錐形紀念碑）是在公元前3500年精心建造的，甚至在地理位置上也是有目的的。"
  },
  {
    "id": 7191,
    "en": "tapering",
    "kk": "[ˋteɪpərɪŋ]",
    "zh": "v. taper 的現在分詞：使逐漸變窄（或尖細）；逐漸減少（常與 off 連用）；adj. 逐漸變細（或變尖）的，錐形的；漸漸減少的；n. （尺寸、數量等的）逐漸減少或縮減（如央行逐步縮減資產購買）",
    "unit": 7,
    "example": "[adj.] They are gradually tapering off production of the older models.",
    "exampleZh": "他們在逐步減少生產舊型號的產品。"
  },
  {
    "id": 7192,
    "en": "narrowing",
    "kk": "[ˋnæroʊɪŋ]",
    "zh": "n. 縮小，收縮；變窄；adj. 逐漸變窄的，收窄的；v. 變窄（narrow 的現在分詞/動名詞）",
    "unit": 7,
    "example": "[n.] There is no narrowing of the gap in sight.",
    "exampleZh": "差距在短期內不會縮小。"
  },
  {
    "id": 7193,
    "en": "proliferate",
    "kk": "[prəˋlɪfəreɪt]",
    "zh": "vi. 激增、迅猛擴散、迅速繁殖；vt. 使激增",
    "unit": 7,
    "example": "[vi.] Smart mobile applications have continued to proliferate across global digital marketplaces.",
    "exampleZh": "智慧行動應用程式在全球數位市場上持續激增與普及。"
  },
  {
    "id": 7194,
    "en": "sub",
    "kk": "[sʌb]",
    "zh": "n. <非正式>潛艇；<非正式>替補者，代替者；<非正式>捐贈款，會費；<英，非正式>預支，借支；<美，非正式>代課教師；<美，非正式>潛艇（大型）三明治；<英，非正式>助理編輯，審校人；地鐵（sub.）；v. 代替，替補；<英，非正式>預支，借支；<非正式>審校（文稿），對（稿件）作文字加工；分包，轉包",
    "unit": 7,
    "example": "[n.] These independent sub-models can also be shared by multiple models.",
    "exampleZh": "這些獨立的子模型還可以由多個模型所共享。"
  },
  {
    "id": 7195,
    "en": "penalize",
    "kk": "[ˋpɛnə͵laɪz]",
    "zh": "v. 處罰；處刑",
    "unit": 7,
    "example": "[v.] The new law appears to penalize the poorest members of society.",
    "exampleZh": "新法規似乎不利於社會中的最貧困者。"
  },
  {
    "id": 7196,
    "en": "vacate",
    "kk": "[ˋveɪkeɪt]",
    "zh": "vt. 騰出，空出，搬出；辭去，放棄（職務、職位等）；（法律）取消，撤銷，廢止（判決、命令等）；vi. 空出，騰出；辭職；休假",
    "unit": 7,
    "example": "[vt.] Guests should vacate their rooms by 10.30 a.m.",
    "exampleZh": "旅客應在上午10:30以前騰出房間。"
  },
  {
    "id": 7197,
    "en": "invoke",
    "kk": "[ɪnˋvoʊk]",
    "zh": "vt. 援引、援用（法律、條款）；祈求、喚起",
    "unit": 7,
    "example": "[vt.] The shipping company had to invoke the emergency clause in the contract due to severe storms.",
    "exampleZh": "由於遭遇強烈風暴，該貨運公司不得不援引合約中的緊急免責條款。"
  },
  {
    "id": 7198,
    "en": "spurn",
    "kk": "[spɝn]",
    "zh": "vt. 輕蔑地拒絕，唾棄，冷落，一腳踢開；vi. <罕，舊>摒棄，藐視；n. <罕>藐視，摒棄；踢開",
    "unit": 7,
    "example": "[vt.] They spurn all our offers of help.",
    "exampleZh": "他們拒絕接受我們提出的一切援助。"
  },
  {
    "id": 7199,
    "en": "necessitate",
    "kk": "[nəˋsesɪteɪt]",
    "zh": "v. 使成為必需，需要；迫使",
    "unit": 7,
    "example": "[v.] Does it necessitate a more convoluted build process?",
    "exampleZh": "是否需要更加複雜的構建過程呢？"
  },
  {
    "id": 7200,
    "en": "willowy",
    "kk": "[ˋwɪloʊi]",
    "zh": "adj. （人或身材）苗條優雅的，高挑纖細的；柔軟的，柔韌的；柳樹環繞的，多柳樹的",
    "unit": 7,
    "example": "[adj.] A willowy brook that turns a mill.",
    "exampleZh": "楊柳環繞的小溪轉動著磨房。"
  },
  {
    "id": 7201,
    "en": "sylphlike",
    "kk": "[ˋsɪlflaɪk]",
    "zh": "adj. 窈窕的；精靈一般的",
    "unit": 7,
    "example": "[adj.] Her iconography of sylphlike girls and gentle animals in an Arcadian landscape is a personal lyric invention-suggestive rather than literal.",
    "exampleZh": "她那在田園牧歌般景色中的窈窕少女和溫馴動物的畫像是一種個人的抒情創作——富於聯想的而非缺乏想象力的。"
  },
  {
    "id": 7202,
    "en": "svelte",
    "kk": "[svelt]",
    "zh": "adj. 苗條的，纖細優雅的；外形簡潔纖薄的，線條清晰的；優雅練達的，溫文爾雅的",
    "unit": 7,
    "example": "[adj.] The parts his team is making are more svelte, even elegant.",
    "exampleZh": "他的團隊正在製作的零部件更加精細、輕盈。"
  },
  {
    "id": 7203,
    "en": "lissom",
    "kk": "[ˋlɪsəm]",
    "zh": "adj. 柔軟的；敏捷的；輕快的；瘦的；優美的（等於 lissome）",
    "unit": 7,
    "example": "[adj.] There are a good banquet scene, a lissom Lady Macbeth and a clever solution to the Birnam-comes-to-Dunsinane problem.",
    "exampleZh": "有不錯的宴會場面，嬌小的麥克白夫人，以及對解決柏南樹林向杜西寧山移動問題的更加聰明的辦法。"
  },
  {
    "id": 7204,
    "en": "purloin",
    "kk": "[pərˋlɔɪn]",
    "zh": "vt. （正式或書面）偷竊，竊取",
    "unit": 7,
    "example": "[vt.] Struts are fixed to each side of the posts to provide further support to the ridge purloin.",
    "exampleZh": "立柱兩側安有對角撐，作為對脊檁的進一步支承。"
  },
  {
    "id": 7205,
    "en": "thieve",
    "kk": "[θiv]",
    "zh": "v. 偷竊，做賊，偷（某人財物）",
    "unit": 7,
    "example": "[v.] The thieve is always afraid of being caught.",
    "exampleZh": "這個小偷總是害怕被抓住。"
  },
  {
    "id": 7206,
    "en": "loot",
    "kk": "[lut]",
    "zh": "v. （尤指在戰爭或暴亂中）搶劫，掠奪；n. 戰利品，掠奪物；贓物，被盜物；<非正式>錢；<美，非正式>大量贈送（或購買）之物",
    "unit": 7,
    "example": "[n.] But others can and do attempt to cash in on the loot.",
    "exampleZh": "但是其他人可以也嘗試利用這些戰利品來趁機撈一把。"
  },
  {
    "id": 7207,
    "en": "fulfil",
    "kk": "[fʊlˋfɪl]",
    "zh": "v. 實現；達到，完成；履行，執行；使滿足，使有成就感；<舊>結束（一段時間），完成（一件工作）",
    "unit": 7,
    "example": "[v.] Without them you will not be able to fulfil the tasks you have before you.",
    "exampleZh": "沒有他們你將不能完成你面前的任務。"
  },
  {
    "id": 7208,
    "en": "gratify",
    "kk": "[ˋɡrætɪfaɪ]",
    "zh": "vt. 使高興，使滿意；滿足（願望、需要等）",
    "unit": 7,
    "example": "[vt.] He only gave his consent in order to gratify her wishes.",
    "exampleZh": "他只是為滿足她的願望才同意的。"
  },
  {
    "id": 7209,
    "en": "backwash",
    "kk": "[ˋbækwɔʃ]",
    "zh": "n. 迴流，逆流；回浪，尾浪（船隻駛過後激起的水浪）；後果，反響，餘波；<非正式>喝飲料時從口中迴流到杯或瓶中的液體；（航空）螺旋槳向後推動的氣流；v. 反衝洗（濾水器、過濾器等）",
    "unit": 7,
    "example": "[n.] The skipper pushed the boat hard, creating a broad white backwash at our stern.",
    "exampleZh": "船長加快船速，使得船尾產生一片寬大的白色逆流。"
  },
  {
    "id": 7210,
    "en": "slipstream",
    "kk": "[ˋslɪpstrim]",
    "zh": "n. 高速運動物體（如汽車、飛機、船）或螺旋槳後方產生的氣流，也稱尾流、沖流；比喻緊隨某事物之後，借其勢頭或影響；v. （多用於賽車、自行車等運動）緊隨前車或前騎手行駛，利用尾流減小空氣阻力",
    "unit": 7,
    "example": "[n.] He left a host of other riders trailing in his slipstream.",
    "exampleZh": "他把其他摩托車手都甩到後面去了。"
  },
  {
    "id": 7211,
    "en": "turbulence",
    "kk": "[ˋtɝbjələns]",
    "zh": "n. 騷亂，動盪；（空氣或水的）湍流，紊流",
    "unit": 7,
    "example": "[n.] The 1960s and early 1970s were a time of change and turbulence.",
    "exampleZh": "20世紀60年代和70年代初期是個變革和動盪的年代。"
  },
  {
    "id": 7212,
    "en": "dampened",
    "kk": "[ˋdæmpənd]",
    "zh": "v. dampen 的過去式和過去分詞：使潮溼，弄溼；抑制，減弱；adj. 潮溼的，微溼的；受抑制的，減弱的，低落的",
    "unit": 7,
    "example": "[v.] Perspiration dampened her face and neck.",
    "exampleZh": "她的臉和脖子都汗津津的。"
  },
  {
    "id": 7213,
    "en": "moistened",
    "kk": "[ˋmɔɪsnd]",
    "zh": "adj. 弄溼的，溼潤的；v. moisten 的過去式和過去分詞，意為“弄溼，使溼潤”",
    "unit": 7,
    "example": "[v.] He moistened his lips before he spoke.",
    "exampleZh": "他潤了潤嘴唇，接著就開始講話。"
  },
  {
    "id": 7214,
    "en": "soaked",
    "kk": "[soʊkt]",
    "zh": "adj. 溼透的，浸透的；<非正式>喝醉的；v. 浸溼（soak 的過去式和過去分詞）",
    "unit": 7,
    "example": "[adj.] They were soaked to the skin.",
    "exampleZh": "他們渾身溼透。"
  },
  {
    "id": 7215,
    "en": "drenched",
    "kk": "[drentʃt]",
    "zh": "adj. 溼透的，浸透的；充滿的；被大量覆蓋（或籠罩）的；v. drench 的過去式和過去分詞：浸溼，使溼透；大量覆蓋；給（動物）灌藥。",
    "unit": 7,
    "example": "[adj.] We were caught in the storm and came home drenched to the skin.",
    "exampleZh": "我們遇上了暴雨，回到家時渾身溼透了。"
  },
  {
    "id": 7216,
    "en": "haphazardly",
    "kk": "[hæpˋhæzərdli]",
    "zh": "adv. 偶然地，隨意地，無計劃地；雜亂地，草率地",
    "unit": 7,
    "example": "[adv.] In contrast, the nonenzymatic process adds glucose haphazardly to any of several sites along any available peptide chain within a protein molecule.",
    "exampleZh": "相反，非酶法過程中，葡萄糖被隨意地添加到蛋白質分子中任意肽鏈的隨意幾個位置。"
  },
  {
    "id": 7217,
    "en": "carelessly",
    "kk": "[ˋkerləsli]",
    "zh": "adv. 粗心地，不注意地，疏忽地；漫不經心地，滿不在乎地，無憂無慮地",
    "unit": 7,
    "example": "[adv.] The prosecution alleges (that) she was driving carelessly.",
    "exampleZh": "控方指控她粗心駕駛。"
  },
  {
    "id": 7218,
    "en": "heedlessly",
    "kk": "[ˋhidləsli]",
    "zh": "adv. 掉以輕心地；不加註意地",
    "unit": 7,
    "example": "[adv.] If you heedlessly damage your virtue, you bring shame and disgrace to your parents.",
    "exampleZh": "品德如有缺失，會帶給父母親羞辱。"
  },
  {
    "id": 7219,
    "en": "negligently",
    "kk": "[ˋneɡlɪdʒəntli]",
    "zh": "adv. 疏忽地，粗心大意地",
    "unit": 7,
    "example": "[adv.] She was leaning negligently against the wall.",
    "exampleZh": "她很隨便地斜倚著牆。"
  },
  {
    "id": 7220,
    "en": "rearward",
    "kk": "[ˋrɪrwərd]",
    "zh": "adj. 在後面的；向後面的；adv. 在後面；向後面；n. （詩、文）後部",
    "unit": 7,
    "example": "[adj.] The centre of pressure moves rearward and the aeroplane becomes unbalanced.",
    "exampleZh": "氣壓中心後移，這架飛機失去了平衡。"
  },
  {
    "id": 7221,
    "en": "retrograde",
    "kk": "[ˋretrəɡreɪd]",
    "zh": "adj. 向後的，倒退的；退化的，退步的；次序顛倒的；（天文學、占星術）逆行的；（醫學）逆行性的；vi. （天文學、占星術）逆行；倒退；退步；vt. 使倒退；adv. 向後地，倒退地",
    "unit": 7,
    "example": "[adj.] The closure of the factory is a retrograde step.",
    "exampleZh": "工廠的關閉是一大退步。"
  },
  {
    "id": 7222,
    "en": "mainly",
    "kk": "[ˋmeɪnli]",
    "zh": "adv. 主要地，首要地；大部分，大多",
    "unit": 7,
    "example": "[adv.] Police work is mainly routine.",
    "exampleZh": "警察的工作主要都是按常規的。"
  },
  {
    "id": 7223,
    "en": "chiefly",
    "kk": "[ˋtʃifli]",
    "zh": "adv. 主要地，多半地，首要地",
    "unit": 7,
    "example": "[adv.] He's travelled widely, chiefly in Africa and Asia.",
    "exampleZh": "他遊歷了許多地方，主要在非洲和亞洲。"
  },
  {
    "id": 7224,
    "en": "principally",
    "kk": "[ˋprɪnsəpli]",
    "zh": "adv. 主要地，大部分",
    "unit": 7,
    "example": "[adv.] No new power stations have been built, principally because of the cost.",
    "exampleZh": "沒有新建的發電站，主要是因為經費問題。"
  },
  {
    "id": 7225,
    "en": "straightforwardly",
    "kk": "[͵streɪtˋfɔrwərdli]",
    "zh": "adv. 直截了當地，坦率地；正直地，誠實地",
    "unit": 7,
    "example": "[adv.] Let me put it more straightforwardly.",
    "exampleZh": "我來把它說得更直截了當一些。"
  },
  {
    "id": 7226,
    "en": "directly",
    "kk": "[dɚˋɛktli]",
    "zh": "adv. 直接地；筆直地",
    "unit": 7,
    "example": "[adv.] She left directly after the show.",
    "exampleZh": "演出一結束，她馬上就走了。"
  },
  {
    "id": 7227,
    "en": "clearly",
    "kk": "[ˋklɪrli]",
    "zh": "adv. 顯然地；無疑地；明亮地",
    "unit": 7,
    "example": "[adv.] Reforms are clearly in order.",
    "exampleZh": "改革顯然是順理成章的。"
  },
  {
    "id": 7228,
    "en": "plainly",
    "kk": "[ˋpleɪnli]",
    "zh": "adv. 顯然地，清楚地，明白地；坦率地，直截了當地；樸素地，簡樸地；平坦地",
    "unit": 7,
    "example": "[adv.] He was very tall and plainly dressed.",
    "exampleZh": "他個子很高，穿著樸素。"
  },
  {
    "id": 7229,
    "en": "intelligibly",
    "kk": "[ɪnˋtelɪdʒəbli]",
    "zh": "adv. 易理解地",
    "unit": 7,
    "example": "[adv.] The foreigner spoke to us quite intelligibly.",
    "exampleZh": "外國人對我們講的話理解很好。"
  },
  {
    "id": 7230,
    "en": "lucidly",
    "kk": "[ˋlusɪdli]",
    "zh": "adv. 清晰地，清楚明瞭地；透明地，清透地",
    "unit": 7,
    "example": "[adv.] Both of them had the ability to present complex matters lucidly.",
    "exampleZh": "他們兩個人都曾具備把複雜的事情清晰明瞭地表達出來的能力。"
  },
  {
    "id": 7231,
    "en": "preferably",
    "kk": "[ˋprefrəbli]",
    "zh": "adv. 更合意地，最好是",
    "unit": 7,
    "example": "[adv.] We're looking for a new house, preferably one near the school.",
    "exampleZh": "我們正在找新房子，最好是靠近學校的。"
  },
  {
    "id": 7232,
    "en": "lacking",
    "kk": "[ˋlækɪŋ]",
    "zh": "adj. 缺乏的",
    "unit": 7,
    "example": "[adj.] She was not lacking in courage.",
    "exampleZh": "她並不缺乏勇氣。"
  },
  {
    "id": 7233,
    "en": "happening",
    "kk": "[ˋhæpənɪŋ]",
    "zh": "n. 事件，意外發生的事；偶發藝術，即興藝術表演；adj. （非正式）熱鬧的，時髦的；v. happen 的現在分詞：發生；（作為結果）出現；碰巧，偶然發生；偶然遇到或發現；使遭遇",
    "unit": 7,
    "example": "[adj.] I had a mistaken view of what was happening.",
    "exampleZh": "我對於所發生事情的看法是錯誤的。"
  },
  {
    "id": 7234,
    "en": "eventuality",
    "kk": "[ɪ͵ventʃuˋæləti]",
    "zh": "n. 可能出現的情況，不測事件",
    "unit": 7,
    "example": "[n.] We were prepared for every eventuality.",
    "exampleZh": "我們準備應付任何可能出現的情況。"
  },
  {
    "id": 7235,
    "en": "backing",
    "kk": "[ˋbækɪŋ]",
    "zh": "n. 支持；資助；後盾；背襯；襯背；襯墊（背面的加固或保護材料）；（音樂）伴奏；和聲；伴唱（常作定語）；後退；倒退；v. back 的現在分詞或動名詞；表示支持、後退、背書、下賭注等動作",
    "unit": 7,
    "example": "[n.] The police gave the proposals their full backing.",
    "exampleZh": "警方對這些提案給予全力支持。"
  },
  {
    "id": 7236,
    "en": "abettance",
    "kk": "",
    "zh": "n. 教唆，唆使：指引導、協助或支持他人進行犯罪行為。",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word abettance correctly.",
    "exampleZh": "他試著學習如何正確使用「abettance」這個單字。"
  },
  {
    "id": 7237,
    "en": "potentiality",
    "kk": "[pə͵tenʃiˋæləti]",
    "zh": "n. <正式>潛力，潛能；<正式>潛在性，可能性",
    "unit": 7,
    "example": "[n.] All of these are useful breeds whose potentiality has not been realized.",
    "exampleZh": "所有這些都是有益的品種，其潛力尚未被認識到。"
  },
  {
    "id": 7238,
    "en": "penthouse",
    "kk": "[ˋpenthaʊs]",
    "zh": "n. 頂層豪華公寓，頂樓套房；屋頂房間，閣樓",
    "unit": 7,
    "example": "[n.] Lily lives in a penthouse just off Park Avenue.",
    "exampleZh": "莉莉住在離公園大街不遠的一處頂層公寓裡。"
  },
  {
    "id": 7239,
    "en": "ravenousness",
    "kk": "",
    "zh": "n. 極其飢餓，如飢似渴",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word ravenousness correctly.",
    "exampleZh": "他試著學習如何正確使用「ravenousness」這個單字。"
  },
  {
    "id": 7240,
    "en": "hungriness",
    "kk": "[ˋhʌŋɡrinɪs]",
    "zh": "n. 荒漠；飢餓；渴望",
    "unit": 7,
    "example": "[n.] The paper studied water requirement and deficit patterns of watermelon under RDI in arid-hungriness oasis area, Gansu province.",
    "exampleZh": "本文就甘肅民勤荒漠綠洲區覆膜西瓜在調虧灌溉條件下的耗水規律與調虧模式進行了研究。"
  },
  {
    "id": 7241,
    "en": "palate",
    "kk": "[ˋpælət]",
    "zh": "n. 顎，上顎；味覺，品嚐力；（葡萄酒、啤酒的）口味，香味；興趣，趣味",
    "unit": 7,
    "example": "[n.] These nuts have been market tested and found to be most suited to the Australian palate.",
    "exampleZh": "這些乾果已經過了市場試驗，結果發現它們最適合澳大利亞人的口味。"
  },
  {
    "id": 7242,
    "en": "positioning",
    "kk": "[pəˋzɪʃənɪŋ]",
    "zh": "n. [計] 定位；配置，佈置；站位，走位（遊戲術語）；v. [計] 定位（position的現在分詞）；放置",
    "unit": 7,
    "example": "[n.] This has nothing to do with class or etiquette, but concerns the simple issue of positioning.",
    "exampleZh": "這與階級或禮儀無關，只是涉及到簡單的定位問題。"
  },
  {
    "id": 7243,
    "en": "disposition",
    "kk": "[͵dɪspəˋzɪʃ(ə)n]",
    "zh": "n. 性情，性格；傾向，癖性；易患某病的傾向；贈與，轉讓；排列，佈置；支配權，處置權；<古>（尤指天意的）決定",
    "unit": 7,
    "example": "[n.] The rides are unsuitable for people of a nervous disposition.",
    "exampleZh": "這種騎乘不適合緊張型性格的人。"
  },
  {
    "id": 7244,
    "en": "marshalling",
    "kk": "[ˋmɑrʃəlɪŋ]",
    "zh": "vt. 調集、集結、整頓（人員、資源）；引導（飛機）",
    "unit": 7,
    "example": "[vt.] The project leader spent the afternoon marshalling resources for the upcoming launch.",
    "exampleZh": "專案負責人整個下午都在為即將到來的產品發表會調集相關資源。"
  },
  {
    "id": 7245,
    "en": "ranging",
    "kk": "[ˋreɪndʒɪŋ]",
    "zh": "v. （在一定的範圍內）變化，變動（常與 from...to... 連用）；排列，排序；徘徊，漫步；使（自己/某人）與…對立，使作對（range against）；綿延，延伸；用雷達、激光等測距（亦指射擊後校準）（range 的現在分詞）；n. 測距（range 的動名詞，常用於 laser ranging、echo ranging 等術語）；adj. 徘徊的，自由遊移的；廣泛的，涉及面廣的（用於 wide-ranging）",
    "unit": 7,
    "example": "[v.] The national park has a large collection of wildlife, ranging from butterflies to elephants.",
    "exampleZh": "國家公園有大量的野生動物，從蝴蝶到大象應有盡有。"
  },
  {
    "id": 7246,
    "en": "ordering",
    "kk": "[ˋɔrdərɪŋ]",
    "zh": "v. 命令；指示；訂購，訂貨；點（酒菜等），點餐；整理，安排（order 的現在分詞）；n. 組合，排列；順序，排序；（數學、邏輯學）序關係，定序",
    "unit": 7,
    "example": "[v.] In July he issued a decree ordering all unofficial armed groups in the country to disband.",
    "exampleZh": "7月份，他頒佈了一項法令，命令解散該國所有非官方武裝團體。"
  },
  {
    "id": 7247,
    "en": "apprehend",
    "kk": "[͵æprɪˋhɛnd]",
    "zh": "v. 逮捕；對……擔慮",
    "unit": 7,
    "example": "[v.] Local people demanded that the police apprehend the miscreants.",
    "exampleZh": "當地人要求警方逮捕那些惡棍。"
  },
  {
    "id": 7248,
    "en": "shaft",
    "kk": "[ʃæft]",
    "zh": "n. 豎井，通風井；（工具或武器的）杆，柄；（機器的）軸；（馬車的）轅；箭，矛；柱（尤指柱頭和柱基間的主要部分）；（光、閃電等的）一道，一束；機智的話，（尤指）攻擊性的話；侮辱，責難（the shaft）；（品質或情感的）突然閃現；<俚>陰莖；v. <非正式>苛待，欺騙；（光成束地）照射；<俚>性交",
    "unit": 7,
    "example": "[n.] Tap valves on the general market fall into three types: stainless steel ball valves, ceramic valve cores, and valve shaft rolling types.",
    "exampleZh": "市面上的水龍頭閥門有三種：不鏽鋼球閥、陶瓷閥芯和閥軸滾動式閥芯。"
  },
  {
    "id": 7249,
    "en": "reed",
    "kk": "[rid]",
    "zh": "n. 蘆葦（稈）；<英>（蓋屋頂用）茅草；<文>蘆笛；與蘆葦相似的人或物；<文>箭，矢；小凸嵌線腳（reeds）；（吹奏樂器的）簧片，簧舌；簧樂器；（磁性繼電器或磁力開關）接觸器；筘，鋼箍；v. 用蘆葦蓋，用蘆葦裝飾；【名】 （Reed）（西、意、瑞典）雷德，（英）裡德（人名）",
    "unit": 7,
    "example": "[n.] They inhabit reed huts built on stilts above the water.",
    "exampleZh": "他們居住在建在水中木樁上的蘆葦草屋裡。"
  },
  {
    "id": 7250,
    "en": "pointer",
    "kk": "[ˋpɔɪntər]",
    "zh": "n. 建議、提示、實用指引；（儀表等的）指針、指針指示物",
    "unit": 7,
    "example": "[n.] The senior consultant gave us several useful pointers on how to prepare for the job interview.",
    "exampleZh": "資深顧問給了我們幾項關於如何準備求職面試的實用建議與提示。"
  },
  {
    "id": 7251,
    "en": "pounce",
    "kk": "[paʊns]",
    "zh": "vi. 突襲，猛撲；pounce on/upon 抓住（錯誤、機會等）不放；vt. 撲過去抓住；n. 猛撲，突然撲擊；（猛禽等的）利爪",
    "unit": 7,
    "example": "[vi.] The lion crouched ready to pounce.",
    "exampleZh": "獅子蹲下身，準備猛撲。"
  },
  {
    "id": 7252,
    "en": "originator",
    "kk": "[əˋrɪdʒɪneɪtər]",
    "zh": "n. （思想、理論、計劃等的）創始人，發明者，提出者；（金融）貸款發起人，原始權益人。",
    "unit": 7,
    "example": "[n.] Johnson is a great early jazz pianist, originator of the 1920s Harlem \"stride\" style, and an important blues and jazz composer.",
    "exampleZh": "約翰遜是一位偉大的早期爵士鋼琴家，20世紀20年代哈萊姆「跨步」風格的鼻祖，也是一位重要的藍調和爵士作曲家。"
  },
  {
    "id": 7253,
    "en": "awareness",
    "kk": "[əˋwɛrnəs]",
    "zh": "n. 察覺；覺悟",
    "unit": 7,
    "example": "[n.] The 1980s brought an awareness of green issues.",
    "exampleZh": "20世紀80年代有了環保意識。"
  },
  {
    "id": 7254,
    "en": "consciousness",
    "kk": "[ˋkɑnʃəsnəs]",
    "zh": "n. 意念；意識",
    "unit": 7,
    "example": "[n.] She banged her head and lost consciousness.",
    "exampleZh": "她撞了頭，失去了知覺。"
  },
  {
    "id": 7255,
    "en": "cookout",
    "kk": "[ˋkʊkaʊt]",
    "zh": "n. （美，非正式）戶外野餐聚會（尤指燒烤野餐），野炊；野餐聚會上烹製的食物",
    "unit": 7,
    "example": "[n.] I've been invited to a cookout this weekend.",
    "exampleZh": "我這週末已經被邀去參加野炊。"
  },
  {
    "id": 7256,
    "en": "braaivleis",
    "kk": "",
    "zh": "n. 烤肉野餐會",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word braaivleis correctly.",
    "exampleZh": "他試著學習如何正確使用「braaivleis」這個單字。"
  },
  {
    "id": 7257,
    "en": "hangi",
    "kk": "",
    "zh": "n. （新西蘭毛利文化）毛利傳統地灶及烹飪法，通稱“杭吉”，亦譯“石頭火鍋”：在地面挖坑放置燒熱石頭，包裹食物後覆土蒸熟；用這種地灶烹製的食物或毛利傳統宴席。",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word hangi correctly.",
    "exampleZh": "他試著學習如何正確使用「hangi」這個單字。"
  },
  {
    "id": 7258,
    "en": "premise",
    "kk": "[ˋpremɪs]",
    "zh": "n. 前提，假設；（企業或機構使用的）房屋及土地（premises）；上述各項；v. 以……為基礎，以……為前提；預先提出，事先提到；<古>聲明，說明",
    "unit": 7,
    "example": "[n.] The premise is that schools will work harder to improve if they must compete.",
    "exampleZh": "前提是各學校如必須競爭就會更加努力改進。"
  },
  {
    "id": 7259,
    "en": "muscularity",
    "kk": "[͵mʌskjəˋlærəti]",
    "zh": "n. 力大；肌肉發達；強壯",
    "unit": 7,
    "example": "[n.] This may explain why men have such a range of muscularity.",
    "exampleZh": "這或許可以解釋為什麼為何有一部分男性肌肉發達。"
  },
  {
    "id": 7260,
    "en": "brawn",
    "kk": "[brɔn]",
    "zh": "n. 發達的肌肉；膂力；醃製好的野豬肉",
    "unit": 7,
    "example": "[n.] He's got plenty of brains as well as brawn.",
    "exampleZh": "他四肢發達，頭腦也不簡單。"
  },
  {
    "id": 7261,
    "en": "heftiness",
    "kk": "",
    "zh": "n.龐大；沉重",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word heftiness correctly.",
    "exampleZh": "他試著學習如何正確使用「heftiness」這個單字。"
  },
  {
    "id": 7262,
    "en": "burliness",
    "kk": "",
    "zh": "n. 結實；強壯",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word burliness correctly.",
    "exampleZh": "他試著學習如何正確使用「burliness」這個單字。"
  },
  {
    "id": 7263,
    "en": "neb",
    "kk": "[neb]",
    "zh": "n. （蘇格蘭及英格蘭北部方言）鳥喙；動物的口鼻部或鼻子；人的鼻子；帽舌，帽尖；突起的尖端；abbr. 噪聲等效帶寬（noise equivalent bandwidth）",
    "unit": 7,
    "example": "[n.] Neb and Pencroft had taken away the fat from the dugong and placed it in large earthen pots.",
    "exampleZh": "尼布和潘克洛夫把儒艮上的脂肪取出來，放在大瓦罐裡。"
  },
  {
    "id": 7264,
    "en": "mandibles",
    "kk": "",
    "zh": "n. （人或動物的）下頜骨，下顎骨；（鳥的）上喙或下喙；（昆蟲等節肢動物的）顎（mandible 的複數）",
    "unit": 7,
    "example": "[n.] At least they didn't give me a butterfly's proboscis, or crab mandibles.",
    "exampleZh": "至少他們沒有給我一隻蝴蝶的喙，或者螃蟹的下顎。"
  },
  {
    "id": 7265,
    "en": "promontory",
    "kk": "[ˋprɑməntɔri]",
    "zh": "n. 岬，海角；（解剖學）隆起，隆突（尤指骶岬）",
    "unit": 7,
    "example": "[n.] NASA's Space Shuttle Program conducted the final test firing of a reusable solid rocket motor Feb. 25 in Promontory, Utah.",
    "exampleZh": "2月25日，美國航天局航天飛機組在猶他州海角對可回收的液態火箭引擎進行了最後的測試。"
  },
  {
    "id": 7266,
    "en": "headland",
    "kk": "[ˋhedlənd͵ˋhedlænd]",
    "zh": "n. 岬，岬角，海角；（農業）田邊未耕地；Headland（英語姓氏，音譯黑德蘭）",
    "unit": 7,
    "example": "[n.] A rocky headland jutted into the sea.",
    "exampleZh": "嶙峋的岬角突入海中。"
  },
  {
    "id": 7267,
    "en": "void",
    "kk": "[vɔɪd]",
    "zh": "adj. 無效的、不合法的、空的；n. 空虛、空白；vt. 使無效",
    "unit": 7,
    "example": "[adj.] The employment contract was declared null and void after legal irregularities were uncovered.",
    "exampleZh": "在發現法律違規之處後，這份聘僱合約被正式宣告無效。"
  },
  {
    "id": 7268,
    "en": "plank",
    "kk": "[plæŋk]",
    "zh": "n. 木板，板條；（政黨等的）政策準則，（政策或綱領的）要點；（成敗的）關鍵；平板支撐；<英，非正式>蠢人，笨蛋；v. 提供木板，鋪上木板；<非正式>重重地放下；<蘇格蘭>藏（物）；立即付款；【名】 （Plank）（英、俄、芬、德）普蘭克（人名）",
    "unit": 7,
    "example": "[n.] She sawed the plank in half.",
    "exampleZh": "她把木板鋸成兩截。"
  },
  {
    "id": 7269,
    "en": "incendiary",
    "kk": "[ɪnˋsendieri]",
    "zh": "adj. 縱火的，引火的；煽動性的，激起憤怒的；能引起燃燒的；<非正式>非常辣的；n. 燃燒彈（燃燒裝置）；縱火者，縱火犯；煽動者；易燃物，引火物，燃燒劑",
    "unit": 7,
    "example": "[n.] Ms Chung is one of them, though she knows this could be incendiary.",
    "exampleZh": "鄭女士就是他們中的一員，儘管她也知道，這樣做無異於火上澆油。"
  },
  {
    "id": 7270,
    "en": "projectile",
    "kk": "[prəˋdʒekt(ə)l]",
    "zh": "n. 炮彈，拋射體，射彈；（軍事／航天）自動推進武器，火箭推進的射彈；adj. 可拋射物體的，供拋射用的，推進的；（生物）（觸角、舌等）能伸出的，可前伸的",
    "unit": 7,
    "example": "[adj.] This method is convenient and effective for the primary design of projectile shapes.",
    "exampleZh": "這一方法方便有效，可用於彈丸形狀的初步設計。"
  },
  {
    "id": 7271,
    "en": "cerebrum",
    "kk": "[səˋribrəm͵ˋserəbrəm]",
    "zh": "n. （解剖）大腦，端腦",
    "unit": 7,
    "example": "[n.] The nervous system and cerebrum require nutrition.",
    "exampleZh": "神經系統和大腦需要營養。"
  },
  {
    "id": 7272,
    "en": "encephalon",
    "kk": "[enˋsefə͵lɑn]",
    "zh": "n. 腦，腦髓",
    "unit": 7,
    "example": "[n.] Cerebral, is the encephalon and diencephalon.",
    "exampleZh": "大腦，是腦與間腦。"
  },
  {
    "id": 7273,
    "en": "profess",
    "kk": "[prəˋfes]",
    "zh": "vt. 自稱，（尤指）偽稱；公開承認（某種感受或信仰）；信仰，信奉（宗教）；正式准予加入（be professed）；<舊>以教授身份教（某科目），傳授",
    "unit": 7,
    "example": "[vt.] Why do organizations profess that they care?",
    "exampleZh": "為什麼一些組織聲稱他們關心呢？"
  },
  {
    "id": 7274,
    "en": "dissimulate",
    "kk": "[dɪˋsɪmjuleɪt]",
    "zh": "v. <正式>掩飾，假裝，裝糊塗",
    "unit": 7,
    "example": "[v.] He didn't attempt to dissimulate or conceal his true feelings.",
    "exampleZh": "他沒有嘗試著掩飾或隱瞞自己的感受。"
  },
  {
    "id": 7275,
    "en": "dissemble",
    "kk": "[dɪˋsemb(ə)l]",
    "zh": "vt. 掩飾，掩蓋；假裝；vi. （文學）隱藏，掩飾（思想、感情等）；裝模作樣，不說實話",
    "unit": 7,
    "example": "[vt.] Henry was not slow to dissemble when it served his purposes.",
    "exampleZh": "形勢一對他有利，亨利就馬上開始隱瞞。"
  },
  {
    "id": 7276,
    "en": "hinder",
    "kk": "[ˋhɪndɚ]",
    "zh": "v. 妨礙；阻礙",
    "unit": 7,
    "example": "[v.] It will only slow you down and hinder your career goals.",
    "exampleZh": "這隻會拖慢你的速度，阻礙你實現職業目標。"
  },
  {
    "id": 7277,
    "en": "recuperate",
    "kk": "[rɪˋkupəreɪt]",
    "zh": "vi. 恢復，復原；挽回損失；vt. 恢復，使恢復健康",
    "unit": 7,
    "example": "[vi.] I went away to the country to recuperate.",
    "exampleZh": "我離開到鄉下去養病。"
  },
  {
    "id": 7278,
    "en": "convalesce",
    "kk": "[͵kɑnvəˋles]",
    "zh": "vi. <正式>（病後或術後）經休養逐漸恢復健康（漸愈，漸漸康復）",
    "unit": 7,
    "example": "[vi.] Forever could not convalesce.",
    "exampleZh": "永遠痊癒不了。"
  },
  {
    "id": 7279,
    "en": "unwind",
    "kk": "[͵ʌnˋwaɪnd]",
    "zh": "v. 放鬆，鬆弛；解開，展開",
    "unit": 7,
    "example": "[v.] Shake the rope and let the coils unwind.",
    "exampleZh": "抖動繩索把繩圈展開。"
  },
  {
    "id": 7280,
    "en": "unfasten",
    "kk": "[ʌnˋfæs(ə)n]",
    "zh": "vt. 解開，鬆開，放鬆；vi. 解開，鬆開，放鬆",
    "unit": 7,
    "example": "[vt.] When Ted was six we decided that he needed to know how to fasten and unfasten his seat belt.",
    "exampleZh": "泰德六歲時，我們決定讓他知道怎樣系和解他的安全帶。"
  },
  {
    "id": 7281,
    "en": "reopen",
    "kk": "[͵riˋoʊpən]",
    "zh": "vt. 使重新開放，使重新營業；重新審理，重新調查（案件）；恢復（談判、關係等），重新開始；重新提出（問題）或重新引起（討論）；重新打開（文件、程序等）；vi. 重開，重新開放，重新營業；重新開始，恢復",
    "unit": 7,
    "example": "[vt.] That is why this weekend's conference and attempts to reopen the stalled world trade talks are so important.",
    "exampleZh": "這就是為什麼本週末的會議和對重啟陷入僵局的世界貿易談判的嘗試是如此的重要。"
  },
  {
    "id": 7282,
    "en": "abridge",
    "kk": "[əˋbrɪdʒ]",
    "zh": "vt. 刪節，節略；縮短，削減",
    "unit": 7,
    "example": "[vt.] I have to abridge my stay here.",
    "exampleZh": "我只得縮短在這裡的逗留時間。"
  },
  {
    "id": 7283,
    "en": "precis",
    "kk": "[preɪˋsi]",
    "zh": "n. （文章、講話等的）摘要，概要，大綱；vt. 概括（文章、講話等的）大意，為……寫摘要或概要",
    "unit": 7,
    "example": "[n.] According to the precis, agility applies anywhere there is a complex endeavor to deal with.",
    "exampleZh": "按照這份概要的說法，任何有複雜問題需要解決的地方，都有敏捷的用武之地。"
  },
  {
    "id": 7284,
    "en": "synopsize",
    "kk": "[sɪˋnɑpsaɪz]",
    "zh": "vt. 寫……的梗概；作……的提要",
    "unit": 7,
    "example": "[vt.] He tried to learn how to use the word synopsize correctly.",
    "exampleZh": "他試著學習如何正確使用「synopsize」這個單字。"
  },
  {
    "id": 7285,
    "en": "impair",
    "kk": "[͵ɪmˋpɛr]",
    "zh": "v. 損害；損傷",
    "unit": 7,
    "example": "[v.] Even one drink can impair driving performance.",
    "exampleZh": "即使一杯酒也可能影響駕駛操作。"
  },
  {
    "id": 7286,
    "en": "blemish",
    "kk": "[ˋblemɪʃ]",
    "zh": "n. 瑕疵，汙點；缺點；vt. 玷汙，損害，弄髒",
    "unit": 7,
    "example": "[n.] This is the one blemish on an otherwise resounding success.",
    "exampleZh": "這就是惟一那點小缺陷，否則將是圓滿的成功。"
  },
  {
    "id": 7287,
    "en": "disfigure",
    "kk": "[dɪsˋfɪɡjər]",
    "zh": "vt. 使變醜，損毀……的外形；使大為減色",
    "unit": 7,
    "example": "[vt.] To disfigure the mouth—this is how I would interpret it—to disfigure the mouth has a primary effect in rendering one at least temporarily speechless.",
    "exampleZh": "把嘴巴醜化——這就是我所理解的——醜化自己的嘴巴使自己暫時不能說話，它是有十分重要影響的。"
  },
  {
    "id": 7288,
    "en": "blight",
    "kk": "[blaɪt]",
    "zh": "n. （植物）枯萎病，疫病；禍因；荒蕪，衰敗；人名（Blight），（英）布萊特；vt. 破壞，毀壞；使（植物）枯萎；vi. （植物）枯萎",
    "unit": 7,
    "example": "[n.] All you can do to prevent potato blight is keep an eye on your crops.",
    "exampleZh": "為預防馬鈴薯枯萎病你惟一能做的就是留意你的莊稼。"
  },
  {
    "id": 7289,
    "en": "domesticated",
    "kk": "[dəˋmestɪkeɪtɪd]",
    "zh": "adj. （動植物）家養的，馴養的，馴服的；（人）喜歡家庭生活的，喜歡做家務的；v. 馴養，馴化（domesticate 的過去式和過去分詞）；使習慣於家庭生活",
    "unit": 7,
    "example": "[v.] We domesticated the dog to help us with hunting.",
    "exampleZh": "我們馴養狗來幫助我們打獵。"
  },
  {
    "id": 7290,
    "en": "docile",
    "kk": "[ˋdɑs(ə)l]",
    "zh": "adj. 馴服的，容易控制的，溫順的",
    "unit": 7,
    "example": "[adj.] I suppose we could have concluded that she was just blindly loyal and docile.",
    "exampleZh": "我想我們可以得出這樣的結論，她只是盲目地忠誠和溫順。"
  },
  {
    "id": 7291,
    "en": "tamed",
    "kk": "",
    "zh": "v. 馴化，馴服；制服，控制，使緩和；開墾，開闢（tame 的過去式和過去分詞）；adj. 被馴化的；馴服的",
    "unit": 7,
    "example": "[v.] Scientists used to believe that people tamed cats to catch mice and protect the grain.",
    "exampleZh": "過去科學家們認為人們馴服貓是為了捉老鼠和保護穀物。"
  },
  {
    "id": 7292,
    "en": "disciplined",
    "kk": "[ˋdɪsəplɪnd]",
    "zh": "adj. 紀律嚴明的、有條不紊的、自律的",
    "unit": 7,
    "example": "[adj.] Athletes need to maintain a disciplined daily training schedule to compete at the international level.",
    "exampleZh": "運動員需要維持高度自律的每日訓練時程，才能在國際賽事中競爭。"
  },
  {
    "id": 7293,
    "en": "evaporate",
    "kk": "[ɪˋvæpəreɪt]",
    "zh": "v. （使）蒸發，揮發；消失，消散",
    "unit": 7,
    "example": "[v.] It is more difficult for gases to \"evaporate\" from them.",
    "exampleZh": "氣體更難從中「蒸發」出來。"
  },
  {
    "id": 7294,
    "en": "dissipate",
    "kk": "[ˋdɪsə͵pet]",
    "zh": "v. 使消散；消除",
    "unit": 7,
    "example": "[v.] Don't dissipate your efforts.",
    "exampleZh": "不要浪費你的精力。"
  },
  {
    "id": 7295,
    "en": "fluctuate",
    "kk": "[ˋflʌktʃə͵wet]",
    "zh": "v. 波動；變動",
    "unit": 7,
    "example": "[v.] Body temperature can fluctuate if you are ill.",
    "exampleZh": "如果你病了，體溫會波動。"
  },
  {
    "id": 7296,
    "en": "apprise",
    "kk": "[əˋpraɪz]",
    "zh": "vt. 通知，告知，報告（常用於 apprise somebody of something 或 apprise somebody that ...）",
    "unit": 7,
    "example": "[vt.] We must apprise them of the dangers that may be involved.",
    "exampleZh": "我們必須把各種潛在危險告訴他們。"
  },
  {
    "id": 7297,
    "en": "enfeeble",
    "kk": "[ɪnˋfib(ə)l]",
    "zh": "vt. 使衰弱，使無力",
    "unit": 7,
    "example": "[vt.] It serves alwaystodistract the public councils and enfeeble the public administration.",
    "exampleZh": "它總是干擾公眾會議並削弱公眾的行政管理能力。"
  },
  {
    "id": 7298,
    "en": "debilitate",
    "kk": "[dɪˋbɪlɪteɪt]",
    "zh": "vt. 使衰弱，使虛弱",
    "unit": 7,
    "example": "[vt.] The key is to not let it debilitate you.",
    "exampleZh": "關鍵在於不要讓恐懼影響到你。"
  },
  {
    "id": 7299,
    "en": "incapacitate",
    "kk": "[͵ɪnkəˋpæsɪteɪt]",
    "zh": "vt. 使無能力，使不能，使不適於；使傷殘，使喪失行動能力",
    "unit": 7,
    "example": "[vt.] Poor eyesight will incapacitate you for a job in the library.",
    "exampleZh": "視力差將使你不適合於在圖書館工作。"
  },
  {
    "id": 7300,
    "en": "enervate",
    "kk": "[ˋenərveɪt]",
    "zh": "vt. 使衰弱，使失去活力（多用於正式或書面語）；adj. 衰弱的，無力的（多用於書面語）",
    "unit": 7,
    "example": "[vt.] To SAP the strength or energy of; enervate.",
    "exampleZh": "使衰弱削弱…的力量或精力；使衰弱收藏。"
  },
  {
    "id": 7301,
    "en": "separately",
    "kk": "[ˋseprətli]",
    "zh": "adv. 單獨地，分別地",
    "unit": 7,
    "example": "[adv.] Each order is coded separately.",
    "exampleZh": "每份訂單都單獨編號。"
  },
  {
    "id": 7302,
    "en": "independently",
    "kk": "[͵ɪndɪˋpendəntli]",
    "zh": "adv. 獨立地，自主地，自立地；各自地，單獨地，分別地；independently of（獨立於…之外，與…無關）",
    "unit": 7,
    "example": "[adv.] Ceiling and wall lights can operate independently.",
    "exampleZh": "天花板和牆上的燈能夠獨立操控。"
  },
  {
    "id": 7303,
    "en": "incompetently",
    "kk": "[ɪnˋkɑmpɪtəntli]",
    "zh": "adv. 不稱職地、無能地、笨拙地",
    "unit": 7,
    "example": "[adv.] The project collapsed because financial accounts were managed incompetently by the former director.",
    "exampleZh": "這項專案之所以失敗，是因為前任主管不稱職地管理財務帳目所致。"
  },
  {
    "id": 7304,
    "en": "ineptly",
    "kk": "[ɪˋneptli]",
    "zh": "adv. 不適當地；無能地",
    "unit": 7,
    "example": "[adv.] Unless the tests are ineptly designed, removing tests will just remove power.",
    "exampleZh": "除非測試用例是不熟練的設計，否則去掉測試用例就是去除作用力。"
  },
  {
    "id": 7305,
    "en": "inexpertly",
    "kk": "[ɪnˋɛkspɝtli]",
    "zh": "adv. 外行地；不熟練地",
    "unit": 7,
    "example": "[adv.] He tried to learn how to use the word inexpertly correctly.",
    "exampleZh": "他試著學習如何正確使用「inexpertly」這個單字。"
  },
  {
    "id": 7306,
    "en": "inefficiently",
    "kk": "[͵ɪnɪˋfɪʃntli]",
    "zh": "adv. 無效率地，低效地",
    "unit": 7,
    "example": "[adv.] More effort is wasted doing things that don't matter than is wasted doing things inefficiently.",
    "exampleZh": "做不重要的事情浪費的精力比低效地做事浪費的精力更多。"
  },
  {
    "id": 7307,
    "en": "imperfectly",
    "kk": "[ɪmˋpɝfɪktli]",
    "zh": "adv. 有缺點地，不完美地；不完全地，未完成地",
    "unit": 7,
    "example": "[adv.] But sometimes, however imperfectly, you can make progress.",
    "exampleZh": "但是有時，你可以進步，雖然不盡完美。"
  },
  {
    "id": 7308,
    "en": "truly",
    "kk": "[ˋtruli]",
    "zh": "adv. 真誠地；忠實地",
    "unit": 7,
    "example": "[adv.] She was a truly remarkable woman.",
    "exampleZh": "她是一位真正非同凡響的女人。"
  },
  {
    "id": 7309,
    "en": "alternatively",
    "kk": "[ɔlˋtɝnətɪvli]",
    "zh": "adv. （引出第二種選擇或可能的建議）要不，或者",
    "unit": 7,
    "example": "[adv.] You could, alternatively, hang onto it in the hope that it will be worth millions in 10 years time.",
    "exampleZh": "或者，你也可以把它留著，指望它10年後值好幾百萬。"
  },
  {
    "id": 7310,
    "en": "mishap",
    "kk": "[ˋmɪshæp]",
    "zh": "n. 不幸事故，小事故，災禍；晦氣，厄運",
    "unit": 7,
    "example": "[n.] This inept chauffeur faced no legal sanction for the mishap.",
    "exampleZh": "這個無能的司機在這次事故中沒有受到法律的制裁。"
  },
  {
    "id": 7311,
    "en": "misadventure",
    "kk": "[͵mɪsədˋventʃər]",
    "zh": "n. 災難；不幸遭遇",
    "unit": 7,
    "example": "[n.] The coroner's verdict was 'death by misadventure'.",
    "exampleZh": "驗屍官判定是「意外致死」。"
  },
  {
    "id": 7312,
    "en": "mischance",
    "kk": "[͵mɪsˋtʃæns]",
    "zh": "n. 不幸，厄運；不幸的事，災禍，災難",
    "unit": 7,
    "example": "[n.] I lost your file by pure mischance.",
    "exampleZh": "我把你的文件丟了，純粹是碰上倒黴事了。"
  },
  {
    "id": 7313,
    "en": "reaching",
    "kk": "[ˋritʃɪŋ]",
    "zh": "v. 到達（reach 的現在分詞）；伸出（手、臂等）去拿或夠；達到，達成",
    "unit": 7,
    "example": "[v.] She dreamed of reaching the dizzy heights of stardom.",
    "exampleZh": "她夢想達到超級巨星的地位。"
  },
  {
    "id": 7314,
    "en": "gaining",
    "kk": "[ˋɡeɪnɪŋ]",
    "zh": "v. （gain 的現在分詞）獲得，逐漸獲得；增加，增長（數量、比率、速度、體重等）；從……中受益；增值，上漲（價格、股市等）；（gain ground/gain on）逼近，追上；取得進展，越來越流行；（鍾、表）走得太快；（經過努力）到達；使……轉而支持自己的利益，贏得（支持者）",
    "unit": 7,
    "example": "[v.] This idea is gaining adherents.",
    "exampleZh": "這個想法正得到擁護者的支持。"
  },
  {
    "id": 7315,
    "en": "winning",
    "kk": "[ˋwɪnɪŋ]",
    "zh": "adj. （常作定語）獲勝的，勝利的；（票券、獎項等）中獎的，獲獎的；制勝的；迷人的，吸引人的，討人喜歡的；v. （win 的現在分詞/動名詞）在戰鬥、比賽、遊戲等中贏，獲勝；贏得（獎品等）；通過努力得到（某物）；n. （常用複數 winnings）贏得的錢（尤指賭博等贏來的錢）；（Winning）（美、英）溫寧（人名）",
    "unit": 7,
    "example": "[adj.] He is focused on nothing but winning.",
    "exampleZh": "他只關注勝利。"
  },
  {
    "id": 7316,
    "en": "acquirement",
    "kk": "[əˋkwaɪrmənt]",
    "zh": "n. 取得、獲得、學得；學識、造詣、才藝",
    "unit": 7,
    "example": "[n.] The steady acquirement of language skills requires consistent daily practice and patience.",
    "exampleZh": "持續穩健地獲取語言技能需要每天堅持不懈的練習與耐心。"
  },
  {
    "id": 7317,
    "en": "procurement",
    "kk": "[proˋkjʊrmənt]",
    "zh": "n. 取得；採購",
    "unit": 7,
    "example": "[n.] You can postpone your procurement to the next generation.",
    "exampleZh": "你可以將採購計劃推遲到下一代產品推出時再進行。"
  },
  {
    "id": 7318,
    "en": "pang",
    "kk": "[pæŋ]",
    "zh": "n. （肉體上）一陣突然的劇痛；苦悶；（精神上）一陣極度的痛苦；（Pang）人名；（德、瑞典）龐；vt. 使劇痛；折磨",
    "unit": 7,
    "example": "[n.] A bad man named Pang Meng heard about the magic medicine and wanted to steal it.",
    "exampleZh": "龐蒙是個壞人，他聽說了這種神藥，想要偷走它。"
  },
  {
    "id": 7319,
    "en": "twinge",
    "kk": "[twɪndʒ]",
    "zh": "n. 一陣突然的（輕微）刺痛；（通常指不快的）一陣情感波動（如內疚、悔恨）；vt. 使感到一陣刺痛（或隱痛）；vi. 感到一陣刺痛（或隱痛）",
    "unit": 7,
    "example": "[n.] He felt a slight twinge in his damaged hamstring.",
    "exampleZh": "他感受到受傷的膕繩肌處有一陣輕微的劇痛。"
  },
  {
    "id": 7320,
    "en": "gnawing",
    "kk": "[ˋnɔɪŋ]",
    "zh": "v. gnaw 的現在分詞；反覆咬、啃（常與 at、on 連用）；咬成……；侵蝕，磨損（常與 at 連用）；煩擾，折磨（常與 at 連用）；adj. 折磨人的，令人痛苦的；n. 咬；不斷的苦痛",
    "unit": 7,
    "example": "[v.] There is this legend that he used to grab these huge chunks of meat and started gnawing on them.",
    "exampleZh": "據說他習慣用手抓著一大塊肉然後狼吞虎嚥地吃著。"
  },
  {
    "id": 7321,
    "en": "escapade",
    "kk": "[ˋeskəpeɪd; ͵eskəˋpeɪd]",
    "zh": "n. 越軌行為；惡作劇；大膽冒險之舉",
    "unit": 7,
    "example": "[n.] And it took that little escapade to bring it back.",
    "exampleZh": "而且它拿小異常出軌的行為把它帶回來。"
  },
  {
    "id": 7322,
    "en": "feat",
    "kk": "[fit]",
    "zh": "n. 功績；業績",
    "unit": 7,
    "example": "[n.] That isn't an easy feat.",
    "exampleZh": "這不是一件容易的事。"
  },
  {
    "id": 7323,
    "en": "blurb",
    "kk": "[blɝb]",
    "zh": "n. <非正式>（書、影片、產品等的）簡介；宣傳語；v. <非正式>寫內容簡介；大肆宣揚",
    "unit": 7,
    "example": "[n.] Then look through the author blurb.",
    "exampleZh": "然後瀏覽一下作者簡介。"
  },
  {
    "id": 7324,
    "en": "envoy",
    "kk": "[ˋenvɔɪ]",
    "zh": "n. 使者，使節，（談判等的）代表；公使（級別在大使之下）",
    "unit": 7,
    "example": "[n.] The U. S. envoy was recalled to Washington.",
    "exampleZh": "該美國特使被召回了華盛頓。"
  },
  {
    "id": 7325,
    "en": "plenipotentiary",
    "kk": "[͵plenɪpəˋtenʃəri; ͵plenɪpəˋtenʃieri]",
    "zh": "adj. <正式>有全權的，全權代表的；n. <正式>全權代表，全權大使",
    "unit": 7,
    "example": "[adj.] An ambassador extraordinary and plenipotentiary shall be the head of an embassy.",
    "exampleZh": "特命全權大使為大使館的館長。"
  },
  {
    "id": 7326,
    "en": "consul",
    "kk": "[ˋkɑns(ə)l]",
    "zh": "n. 領事；（古羅馬的）兩執政官之一；【名】 （Consul）（法）孔敘爾（人名）",
    "unit": 7,
    "example": "[n.] He'll hold the post of consul general for the United States in Shanghai.",
    "exampleZh": "他將就任美國駐上海總領事。"
  },
  {
    "id": 7327,
    "en": "proclamation",
    "kk": "[͵prɑkləˋmeɪʃ(ə)n]",
    "zh": "n. 正式的公告，宣言；宣佈，公佈",
    "unit": 7,
    "example": "[n.] President Abraham Lincoln, during the Civil War, issued a proclamation setting aside the last Thursday in November for the holiday.",
    "exampleZh": "內戰期間，亞伯拉罕·林肯總統發佈了一項公告，將11月的最後一個星期四定為節假日。"
  },
  {
    "id": 7328,
    "en": "pronouncement",
    "kk": "[prəˋnaʊnsmənt]",
    "zh": "n. 聲明，宣告，公告；（法律）宣判，判決",
    "unit": 7,
    "example": "[n.] I waited, expecting a pronouncement of my new title.",
    "exampleZh": "我等待著，期待著他宣佈我的新頭銜。"
  },
  {
    "id": 7329,
    "en": "petition",
    "kk": "[pəˋtɪʃ(ə)n]",
    "zh": "n. 請願書； 申訴書，申請書；請願，祈求，祈禱；v. （向政府或組織）請願，請求；起訴，遞交訴狀；（向上帝或國王等）祈求，祈願",
    "unit": 7,
    "example": "[n.] Jill volunteered to organize a petition.",
    "exampleZh": "吉爾自告奮勇組織請願。"
  },
  {
    "id": 7330,
    "en": "aspiration",
    "kk": "[͵æspəˋreɪʃ(ə)n]",
    "zh": "n. 渴望，抱負，志向；送氣音；吸引術，抽吸",
    "unit": 7,
    "example": "[n.] He nurses an aspiration to be a poet.",
    "exampleZh": "他心懷當詩人的願望。"
  },
  {
    "id": 7331,
    "en": "coming",
    "kk": "[ˋkʌmɪŋ]",
    "zh": "adj. 即將發生的，下一個的；有希望成功的，有前途的；n. 到來，來臨；v. 來；到達；延伸到（come的現在分詞形式）",
    "unit": 7,
    "example": "[adj.] You're coming? I'm so pleased.",
    "exampleZh": "你要來呀？我太高興了。"
  },
  {
    "id": 7332,
    "en": "advent",
    "kk": "[ˋædvent]",
    "zh": "n. 出現，到來，問世；基督降臨節（Advent）；基督降臨，基督復臨（Advent）",
    "unit": 7,
    "example": "[n.] The advent of the computer has brought this sort of task within the bounds of possibility.",
    "exampleZh": "電腦的出現使這種任務的完成成為可能。"
  },
  {
    "id": 7333,
    "en": "materialization",
    "kk": "[mə͵tɪriələˋzeɪʃn]",
    "zh": "n. 物質化，實體化，具體化；（夢想、計劃等的）實現，成為現實；（鬼魂等的）顯形，現身；具體體現，產物",
    "unit": 7,
    "example": "[n.] There are many ways of materialization of the work.",
    "exampleZh": "就像之前所說，我的這個作品可以有很多種實施方式。"
  },
  {
    "id": 7334,
    "en": "viewpoint",
    "kk": "[ˋvju͵pɔɪnt]",
    "zh": "n. 觀點；視角",
    "unit": 7,
    "example": "[n.] She will have her own viewpoint on the matter.",
    "exampleZh": "她對這個問題會有她自己的看法。"
  },
  {
    "id": 7335,
    "en": "thoroughfare",
    "kk": "[ˋθɝoʊfer]",
    "zh": "n. （較正式）大道，大街，通衢；通路，通道（No thoroughfare 意為“禁止通行”）",
    "unit": 7,
    "example": "[n.] Road under repair. No thoroughfare.",
    "exampleZh": "翻修路面，禁止車輛來往。"
  },
  {
    "id": 7336,
    "en": "broadway",
    "kk": "[ˋbrɔdweɪ]",
    "zh": "n. 百老匯（美國紐約市曼哈頓的一條南北向大街，穿過時報廣場，以劇院集中而聞名）；百老匯戲劇界（以紐約百老匯劇院區為中心的美國商業戲劇行業及演出體系）",
    "unit": 7,
    "example": "[n.] The play opened on Broadway in 2004.",
    "exampleZh": "這個劇在2004年於百老匯首演。"
  },
  {
    "id": 7337,
    "en": "clang",
    "kk": "[klæŋ]",
    "zh": "n. 鏗鏘聲、叮噹聲；vi. 發出叮噹聲；vt. 使發出鏗鏘聲",
    "unit": 7,
    "example": "[vt.] The heavy metal gate slammed shut with a loud clang that echoed through the courtyard.",
    "exampleZh": "厚重的鐵門轟然關上，發出一聲響亮的鏗鏘聲，在庭院中迴盪。"
  },
  {
    "id": 7338,
    "en": "peal",
    "kk": "[pil]",
    "zh": "n. 洪亮的鐘聲，鐘樂；響亮而持久的聲音（如笑聲、雷聲等）；編鐘；<方>幼鮭；（Peal）皮爾（人名）；v. 鳴響，大聲作響；使（鍾等）鳴響；轟然大笑",
    "unit": 7,
    "example": "[n.] Suddenly, high above the jubilant roar and thunder of the revel, broke the clear peal of a bugle-note.",
    "exampleZh": "突然，在狂歡人群興高采烈的喧鬧轟鳴之上，響起了清亮的號角聲。"
  },
  {
    "id": 7339,
    "en": "paunch",
    "kk": "[pɔntʃ]",
    "zh": "n. 腹，腹部；大肚子，肚腩；胃；vt. 剖腹；取出內臟",
    "unit": 7,
    "example": "[n.] He finished his dessert and patted his paunch.",
    "exampleZh": "他吃完甜點，拍了拍自己的大肚子。"
  },
  {
    "id": 7340,
    "en": "midriff",
    "kk": "[ˋmɪdrɪf]",
    "zh": "n. 上腹部（胸與腰之間的身體正面部分）；（解剖學）膈，膈肌",
    "unit": 7,
    "example": "[n.] He was struck by a stabbing pain in his midriff.",
    "exampleZh": "他突然感到腹部一陣劇痛。"
  },
  {
    "id": 7341,
    "en": "girth",
    "kk": "[ɡɝθ]",
    "zh": "n. 周長，圍長，腰圍；（馬具）肚帶；（數學、編碼理論）圍長（圖中最短環的長度）；（Girth）人名：格思（英），吉爾特（法、德）；vt. 圍繞，包圍；給（馬等）系肚帶；vi. 圍長為",
    "unit": 7,
    "example": "[n.] A girl he knew had upset him by commenting on his increasing girth.",
    "exampleZh": "他認識的一個女孩對他不斷增大的腰圍說長道短，這讓他很不高興。"
  },
  {
    "id": 7342,
    "en": "critter",
    "kk": "[ˋkrɪtər]",
    "zh": "n. （非正式，美國英語）生物，動物（尤指小動物或家畜）；……樣的人，傢伙",
    "unit": 7,
    "example": "[n.] Add a dollar if the critter comes in a graceful wooden cage.",
    "exampleZh": "如果這動物裝在一個漂亮的木製籠子裡，就再加一美元。"
  },
  {
    "id": 7343,
    "en": "bust",
    "kk": "[bʌst]",
    "zh": "n. 半身像；女子胸部，胸圍；突擊搜查；沒價值的事物；經濟蕭條時期；v. 弄壞，打碎；逮捕；降級；阻止，破壞；突襲，搜查；猛烈打擊；打破，炸破；adj. 壞掉的；破產的；【名】 （Bust）（英、美、德）布斯特（人名）",
    "unit": 7,
    "example": "[n.] My watch is bust.",
    "exampleZh": "我的表壞了。"
  },
  {
    "id": 7344,
    "en": "boobs",
    "kk": "[bubz]",
    "zh": "n. 乳房；（美）笨蛋；愚蠢的錯誤（boob 的複數）；vi. 犯可笑的錯誤（boob 的第三人稱單數形式）",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word boobs correctly.",
    "exampleZh": "他試著學習如何正確使用「boobs」這個單字。"
  },
  {
    "id": 7345,
    "en": "inhalation",
    "kk": "[͵ɪnhəˋleɪʃn]",
    "zh": "n. 吸入，吸入法；吸入劑，吸入物",
    "unit": 7,
    "example": "[n.] Hundreds of children were treated for smoke inhalation.",
    "exampleZh": "數以百計的兒童因吸入濃煙而接受了治療。"
  },
  {
    "id": 7346,
    "en": "exhalation",
    "kk": "[͵ekshəˋleɪʃn]",
    "zh": "n. 呼氣，呼出（將空氣從肺部排出的動作）；呼出的氣，一口氣（常指一次呼出的空氣）；（正式或科技用語）散發物，蒸汽，噴氣；（舊義）蒸發",
    "unit": 7,
    "example": "[n.] Utter the word \"calm\" in your mind with every exhalation.",
    "exampleZh": "在你的內心浮想「平靜」這個詞。"
  },
  {
    "id": 7347,
    "en": "jolt",
    "kk": "[dʒoʊlt]",
    "zh": "v. （使）震動，（使）顛簸；使受到震驚（而採取行動），使覺醒；使突然活躍（或有效）；n. 顛簸，搖晃；震驚，驚訝；一點，少量（提神的東西）；（能源的）猛增",
    "unit": 7,
    "example": "[n.] \"I lamented that they had not been blessed as I had, with this jolt to life,\" he writes.",
    "exampleZh": "「我感到遺憾的是，他們沒有像我一樣受到祝福，經歷這人生的突變。」他寫道。"
  },
  {
    "id": 7348,
    "en": "bouquet",
    "kk": "[buˋkeɪ]",
    "zh": "n. 花束；（尤指酒的）香味，芬芳；讚揚，恭維；【名】 （Bouquet）（英、法）布凱（人名)",
    "unit": 7,
    "example": "[n.] The woman carried a bouquet of dried violets.",
    "exampleZh": "那個女子拿著一束幹紫羅蘭花。"
  },
  {
    "id": 7349,
    "en": "posy",
    "kk": "[ˋpoʊzi]",
    "zh": "n. 花束，小束花（亦指單枝花）；<舊>刻在戒指裡圈上的詩句或銘文（亦作 posey）",
    "unit": 7,
    "example": "[n.] There was a very small posy of flowers at my aunt's flat.",
    "exampleZh": "我姑姑的公寓裡有很小一束花。"
  },
  {
    "id": 7350,
    "en": "nosegay",
    "kk": "[ˋnoʊzɡeɪ]",
    "zh": "n. 花束",
    "unit": 7,
    "example": "[n.] The young man presented a nosegay of red, white, and yellow roses to his sweetheart.",
    "exampleZh": "年輕人包裝了紅，白，黃三種顏色的玫瑰給他心愛的人。"
  },
  {
    "id": 7351,
    "en": "corsage",
    "kk": "[kɔrˋsɑʒ]",
    "zh": "n. 胸花，胸前花飾（常指女性佩戴在胸前或手腕的小束裝飾花，用於婚禮、舞會等正式場合）；<舊>女裝胸衣（bodice）",
    "unit": 7,
    "example": "[n.] My wife waved her corsage in time to the music.",
    "exampleZh": "我的妻子也隨著音樂的節奏揮動著那束鮮花。"
  },
  {
    "id": 7352,
    "en": "humming",
    "kk": "[ˋhʌmɪŋ]",
    "zh": "v. 發出嗡嗡聲，嗡嗡作響；哼唱（hum 的現在分詞和動名詞）；adj. 發嗡嗡聲的，嗡嗡作響的；繁忙活躍的，精力旺盛的；n. 哼唱；嗡嗡聲",
    "unit": 7,
    "example": "[n.] What's that tune you're humming?",
    "exampleZh": "你哼的是什麼曲子？"
  },
  {
    "id": 7353,
    "en": "buzzing",
    "kk": "[ˋbʌzɪŋ]",
    "zh": "v. buzz 的現在分詞；發出嗡嗡聲；（耳朵）充滿嗡嗡聲；用蜂鳴器發信號；<非正式>給……打電話；迅速（或匆忙）地移動；低空掠過；（地方）喧鬧；（頭腦）興奮（或混亂）；<非正式>猛擲；n. 嗡嗡聲；嘈雜聲；adj. 嗡嗡響的；熱鬧的，充滿活力的，繁忙的",
    "unit": 7,
    "example": "[adj.] Bees were buzzing in the clover.",
    "exampleZh": "蜜蜂在三葉草叢中嗡嗡作響。"
  },
  {
    "id": 7354,
    "en": "drone",
    "kk": "[droʊn]",
    "zh": "n. 嗡嗡叫，嗡嗡響；雄蜂，公蜂；（遙控的）無人駕駛飛機（或導彈）；<非正式>單調乏味的講話；（不勞動，依賴他人為生的）寄生蟲；伴音（如風笛等發出的持續音），伴音管（或弦等）；幹單調工作的人；v. 嗡嗡叫，嗡嗡響；（人）絮絮叨叨地說，喋喋不休地說；混日子；【名】  （Drone）（法）德羅納（人名）",
    "unit": 7,
    "example": "[n.] It helps the drone to give coffee.",
    "exampleZh": "它幫助無人機送咖啡。"
  },
  {
    "id": 7355,
    "en": "whir",
    "kk": "[wɝ]",
    "zh": "v. 發出連續的呼呼聲或嗡嗡聲；呼呼作聲地快速轉動或飛行（亦作 whirr）；n. （機器等發出的）連續的呼呼聲、嗡嗡聲或颼颼聲（亦作 whirr）",
    "unit": 7,
    "example": "[n.] One set of double doors away from Berry's office is the whir, clank, cha-ching and other industrial music put out by the eight Slinky machines.",
    "exampleZh": "離貝里辦公室隔一道雙開門的地方，8臺機靈彈簧機器正發出呼呼、哐啷、咔鏘以及其他工業聲響。"
  },
  {
    "id": 7356,
    "en": "alpenstock",
    "kk": "[ˋælpən͵stɑk]",
    "zh": "n. 鐵頭登山杖（舊時登山者使用、裝有鐵尖的粗壯手杖）",
    "unit": 7,
    "example": "[n.] We have to have some basic things such as wind-preferably a down jacket climbing boots alpenstock piton hammer and mylon climbing rope.",
    "exampleZh": "我們得備上一些基本的東西，如防風服，最好是羽絨服，登山靴，鐵頭登山杖，登山鋼錐和尼龍登山繩。"
  },
  {
    "id": 7357,
    "en": "malacca",
    "kk": "[məˋlækə]",
    "zh": "n. 馬六甲（馬來西亞州名，馬來文作 Melaka）；馬六甲市（馬來西亞馬六甲州首府，常作 Malacca City）；馬六甲海峽（位於亞洲東南部，介於馬來半島與印度尼西亞蘇門答臘島之間）；省藤屬植物的莖（馬六甲白藤，用於製作手杖、傘柄等）；用省藤莖製成的手杖（亦作 malacca cane）",
    "unit": 7,
    "example": "[n.] Devil Pork Curry, Malacca, Malaysia.",
    "exampleZh": "魔鬼咖喱豬肉，馬六甲，馬來西亞。"
  },
  {
    "id": 7358,
    "en": "blackthorn",
    "kk": "[ˋblækθɔrn]",
    "zh": "n. 黑刺李（李樹的一種）；李木手杖",
    "unit": 7,
    "example": "[n.] Therefore I made you the wicker lady from blackthorn.",
    "exampleZh": "所以這次我用黑刺李做了柳條女子。"
  },
  {
    "id": 7359,
    "en": "undergrowth",
    "kk": "[ˋʌndərɡroʊθ]",
    "zh": "n. 林下灌叢，林下植物，矮樹叢；（醫學、生物學）發育不全；（動物）身上長在長毛下面的濃密絨毛，即底絨",
    "unit": 7,
    "example": "[n.] We had to bushwhack through undergrowth.",
    "exampleZh": "我們只好在灌木叢中劈開一條路。"
  },
  {
    "id": 7360,
    "en": "shrubbery",
    "kk": "[ˋʃrʌbəri]",
    "zh": "n. 灌木叢，灌木（總稱）；（林業）灌木林，灌木種植區",
    "unit": 7,
    "example": "[n.] After she was gone Mary turned down the walk which led to the door in the shrubbery.",
    "exampleZh": "她走後，瑪麗走上了通往灌木叢裡那扇門的小路。"
  },
  {
    "id": 7361,
    "en": "thicket",
    "kk": "[ˋθɪkɪt]",
    "zh": "n. 灌木叢，小樹叢，叢林；<喻>錯綜複雜的事物，密集難解之物",
    "unit": 7,
    "example": "[n.] A thicket makes good cover for animals to hide in.",
    "exampleZh": "叢林是動物的良好隱蔽處。"
  },
  {
    "id": 7362,
    "en": "metropolis",
    "kk": "[məˋtrɑpəlɪs]",
    "zh": "n. （國或地區的）首都，首府；大都會，大城市；教會省份的首領；殖民地的起源城市或國家；【名】 （Metropolis）（英）梅特羅波利斯（人名）",
    "unit": 7,
    "example": "[n.] The desert is encroaching on this metropolis.",
    "exampleZh": "沙漠正侵蝕著這個大都市。"
  },
  {
    "id": 7363,
    "en": "funds",
    "kk": "[fʌndz]",
    "zh": "n. 資金，款項，現金；基金（fund 的複數形式）；v. 資助，提供資金（fund 的第三人稱單數形式）",
    "unit": 7,
    "example": "[n.] He absconded with the company funds.",
    "exampleZh": "他捲走公司的資金潛逃了。"
  },
  {
    "id": 7364,
    "en": "fetters",
    "kk": "[ˋfetərz]",
    "zh": "n. 束縛；枷鎖（fetter 的複數）；n. （Fetters）人名；（英）費特斯",
    "unit": 7,
    "example": "[n.] They were at last freed from the fetters of ignorance.",
    "exampleZh": "他們終於從愚昧無知的束縛中解脫出來。"
  },
  {
    "id": 7365,
    "en": "shackles",
    "kk": "[ˋʃæklz]",
    "zh": "n. （常用複數）鐐銬（手銬、腳鐐）；<喻>束縛，桎梏，枷鎖；（技術）卸扣，U形環；v. （shackle 的第三人稱單數）給…上鐐銬；束縛，制約",
    "unit": 7,
    "example": "[n.] He unbolted the shackles on Billy's hands.",
    "exampleZh": "他打開比利的手銬。"
  },
  {
    "id": 7366,
    "en": "bonds",
    "kk": "[bɑndz]",
    "zh": "n. 債券（bond 的複數）；鐐銬；監禁；紐帶，聯繫；盟約；化學鍵；（Bonds）邦茲（人名）；v. （bond 的第三人稱單數）使黏合，使凝固；建立親密關係，團結一致；充當……的保證人",
    "unit": 7,
    "example": "[n.] The bonds are convertible into ordinary shares.",
    "exampleZh": "債券可兌換為普通股。"
  },
  {
    "id": 7367,
    "en": "irons",
    "kk": "[ˋaɪərnz]",
    "zh": "n. （服裝）熨斗（iron 的複數）；鐐銬（常作 in/into irons）；鐵器；（Irons）英文姓氏，艾恩斯；v. （iron 的第三人稱單數形式）熨燙；給……上腳鐐手銬；用鐵鑄成",
    "unit": 7,
    "example": "[n.] The all-star cast includes Jeremy Irons.",
    "exampleZh": "全明星演員陣容包括傑瑞米·艾恩斯在內。"
  },
  {
    "id": 7368,
    "en": "manacles",
    "kk": "[ˋmænəklz]",
    "zh": "n. 鐐銬；手銬（manacle 的複數）；v. 束縛（manacle 的三單形式）；給……帶上手銬",
    "unit": 7,
    "example": "[n.] A third time he freed himself of his manacles.",
    "exampleZh": "他第三次掙脫了手銬。"
  },
  {
    "id": 7369,
    "en": "prizewinner",
    "kk": "[ˋpraɪzwɪnər]",
    "zh": "n. 得獎人，獲獎人",
    "unit": 7,
    "example": "[n.] That night she had a poem that might not be a prizewinner but sounded good enough.",
    "exampleZh": "那晚她寫了一首詩，這首詩可能並不會獲獎，但聽起來不錯。"
  },
  {
    "id": 7370,
    "en": "attractiveness",
    "kk": "[əˋtræktɪvnəs]",
    "zh": "n. 吸引力，魅力，迷惑力；外表吸引力，動人的特質",
    "unit": 7,
    "example": "[n.] Psychologist and behavioral scientist Nicholas Epley oversaw a key study into self-enhancement and attractiveness.",
    "exampleZh": "心理學家和行為科學家尼古拉斯·埃普利監督了一項關於自我提升和吸引力的重要研究。"
  },
  {
    "id": 7371,
    "en": "prettiness",
    "kk": "[ˋprɪtinəs]",
    "zh": "n. 可愛，漂亮",
    "unit": 7,
    "example": "[n.] What does prettiness have to do with this?",
    "exampleZh": "這跟漂亮有什麼關係？"
  },
  {
    "id": 7372,
    "en": "loveliness",
    "kk": "[ˋlʌvlinəs]",
    "zh": "n. 可愛，漂亮，魅力",
    "unit": 7,
    "example": "[n.] She is a rose of loveliness.",
    "exampleZh": "她是位可愛的美人。"
  },
  {
    "id": 7373,
    "en": "torso",
    "kk": "[ˋtɔrsoʊ]",
    "zh": "n. 軀幹；裸體軀幹雕像；未完成的作品；殘缺不全的東西",
    "unit": 7,
    "example": "[n.] The erector spinae muscles lift the torso and the rhomboid draw the scapulae towards the midline.",
    "exampleZh": "骶棘肌上提軀幹，同時菱形肌將肩胛骨向中線拉。"
  },
  {
    "id": 7374,
    "en": "thorax",
    "kk": "[ˋθɔræks]",
    "zh": "n. （解剖）胸，胸膛；胸腔；（動物學）節肢動物的胸部，胸節",
    "unit": 7,
    "example": "[n.] They had rummaged around his thorax, trying to get close to the arrowhead and the tissue around it.",
    "exampleZh": "他們對他的胸腔周圍進行了仔細的檢查，試圖靠近箭頭及其周圍的組織。"
  },
  {
    "id": 7375,
    "en": "dishes",
    "kk": "[ˋdɪʃɪz]",
    "zh": "n. 菜餚；盤碟；餐具（dish 的複數）",
    "unit": 7,
    "example": "[n.] Their dishes were made of wood.",
    "exampleZh": "他們的盤子是用木頭製成的。"
  },
  {
    "id": 7376,
    "en": "plates",
    "kk": "[pleɪts]",
    "zh": "n. 盤子，碟子（plate 的複數）；板材，金屬板；（建）平板；牌照，車牌；（地質）板塊；整頁插圖，圖版；v. 鍍，電鍍（plate 的第三人稱單數形式）",
    "unit": 7,
    "example": "[n.] Be careful—the plates are hot.",
    "exampleZh": "當心—盤子燙手。"
  },
  {
    "id": 7377,
    "en": "crockery",
    "kk": "[ˋkrɑkəri]",
    "zh": "n. 陶器，瓦器，土器（總稱杯盤碗碟等陶製餐具）",
    "unit": 7,
    "example": "[n.] Very rarely do I hear even a clink of crockery; never the sound of closing a door or window.",
    "exampleZh": "我幾乎連陶器的叮噹聲都聽不到，更別說關門或是關窗的聲響了。"
  },
  {
    "id": 7378,
    "en": "protestation",
    "kk": "[͵prɑtəˋsteɪʃn; ͵proʊtəˋsteɪʃn]",
    "zh": "n. <正式>鄭重聲明，斷言；抗議，異議",
    "unit": 7,
    "example": "[n.] She repeated her protestation of innocence.",
    "exampleZh": "她再度強調自己是清白的。"
  },
  {
    "id": 7379,
    "en": "remonstrance",
    "kk": "[rɪˋmɑnstrəns]",
    "zh": "n. 抗議，反對；規勸，告誡；諫書，正式抗議書",
    "unit": 7,
    "example": "[n.] A little before the progress was ended, the Duke was obliged to ride forward, and make remonstrance.",
    "exampleZh": "出巡將近結束的時候，公爵不得不騎馬上前，作出提醒。"
  },
  {
    "id": 7380,
    "en": "grievance",
    "kk": "[ˋɡrivəns]",
    "zh": "n. 不滿，不平；委屈，冤情；投訴",
    "unit": 7,
    "example": "[n.] The main grievance of the drivers is the imposition of higher fees for driving licences.",
    "exampleZh": "司機們的主要不滿是加諸在駕駛執照上的更高的費用。"
  },
  {
    "id": 7381,
    "en": "recital",
    "kk": "[rɪˋsaɪt(ə)l]",
    "zh": "n. 獨奏會，獨唱會，演奏會（通常指由一人表演的公開演出）；朗誦，吟誦，背誦；詳述，敘述（對事實或事件的詳細陳述）",
    "unit": 7,
    "example": "[n.] She learned to play the instrument when she was a small child and gave her first public recital at age 9.",
    "exampleZh": "當她還是個小孩子的時候，就學會了演奏樂器，並在9歲時舉行了她的第一次公開獨奏會。"
  },
  {
    "id": 7382,
    "en": "unlawful",
    "kk": "[ʌnˋlɔfl]",
    "zh": "adj. 非法的，違法的；（舊）私生的，非婚生的",
    "unit": 7,
    "example": "[adj.] The two police officers were accused of unlawful killing.",
    "exampleZh": "這兩名警員被控非法殺人。"
  },
  {
    "id": 7383,
    "en": "illegal",
    "kk": "[͵ɪlˋiɡəl]",
    "zh": "adj. 違法的",
    "unit": 7,
    "example": "[adj.] It's illegal to deface property.",
    "exampleZh": "在房子上亂塗亂畫是非法的。"
  },
  {
    "id": 7384,
    "en": "illicit",
    "kk": "[͵ɪlˋɪsət]",
    "zh": "adj. 不法的、違禁的",
    "unit": 7,
    "example": "[adj.] Dante clearly condemns illicit love.",
    "exampleZh": "但丁明確地譴責不正當的戀情。"
  },
  {
    "id": 7385,
    "en": "illegitimate",
    "kk": "[͵ɪləˋdʒɪtəmət]",
    "zh": "adj. 私生的，非婚生的；非法的，不合法的；不合理的，無正當理由的；n. 非婚生子女，私生子，庶子；vt. （罕用）認做私生子；認為違法",
    "unit": 7,
    "example": "[adj.] They discovered he had an illegitimate child.",
    "exampleZh": "他們發現他有一個私生子。"
  },
  {
    "id": 7386,
    "en": "lawbreaking",
    "kk": "[ˋlɔbreɪkɪŋ]",
    "zh": "n. 違反法律；adj. 違反法律的",
    "unit": 7,
    "example": "[n.] In September alone, some 1, 500 lawbreaking public-transport drivers were arrested.",
    "exampleZh": "單是九月，就拘留了1,500名交通肇事司機。"
  },
  {
    "id": 7387,
    "en": "interchange",
    "kk": "[ˋɪntərtʃeɪndʒ]",
    "zh": "n. 交流、互換；（高速公路）交流道；v. 交換、互換",
    "unit": 7,
    "example": "[n.] The annual youth forum promoted an inspiring interchange of cultural perspectives.",
    "exampleZh": "這場年度青年論壇促進了跨文化觀點的熱烈啟發與交流。"
  },
  {
    "id": 7388,
    "en": "discourse",
    "kk": "[ˋdɪskɔrs]",
    "zh": "n. 演講，論述；談話，交流；話語，語篇；v. 高談闊論，論述；交談；<古>說出；<古>演奏出",
    "unit": 7,
    "example": "[n.] This is the reason one hears so much about discourse.",
    "exampleZh": "這就是為什麼人們會聽到這麼多關於話語的討論。"
  },
  {
    "id": 7389,
    "en": "grime",
    "kk": "[ɡraɪm]",
    "zh": "n. 塵垢；汙點；煤塵；vt. 使汙穢；使……弄髒；n. （Grime）人名；（法）格里姆",
    "unit": 7,
    "example": "[n.] Huge chimneys belched forth smoke and grime.",
    "exampleZh": "巨大的煙囪冒出煙和灰塵。"
  },
  {
    "id": 7390,
    "en": "soot",
    "kk": "[sʊt]",
    "zh": "n. 煤煙，菸灰，煙炱；vt. 用煤煙燻黑；以煤煙弄髒",
    "unit": 7,
    "example": "[n.] Their faces were blackened with soot.",
    "exampleZh": "他們滿臉煤灰。"
  },
  {
    "id": 7391,
    "en": "smut",
    "kk": "[smʌt]",
    "zh": "n. [植保]黑穗病；煤塵；汙跡；vi. 弄髒；患黑穗病；vt. 弄髒；使害上黑穗病；n. （Smut）人名；（泰）沙穆",
    "unit": 7,
    "example": "[n.] It was discussed how to objectively evaluate the smut resistance in sugarcane.",
    "exampleZh": "文中還對如何客觀評價甘蔗抗黑穗病性進行了探討。"
  },
  {
    "id": 7392,
    "en": "muck",
    "kk": "[mʌk]",
    "zh": "n. 淤泥，汙物；糞肥，肥料；<非正式>垃圾，品質低劣的東西；vt. 弄髒；施肥，施糞肥於；清除……的汙物（尤指礦井等處）；vi. <非正式，尤英>閒逛；鬼混，胡鬧，混日子（常與 about/around 連用）",
    "unit": 7,
    "example": "[vt.] The miners muck the waste rock every other day.",
    "exampleZh": "礦工們每隔一天清除一次矸石。"
  },
  {
    "id": 7393,
    "en": "sadness",
    "kk": "[ˋsædnəs]",
    "zh": "n. 悲哀；悲傷",
    "unit": 7,
    "example": "[n.] Levin sat there, an expression of sadness on his face.",
    "exampleZh": "萊文坐在那裡，神情憂傷。"
  },
  {
    "id": 7394,
    "en": "dispiritedness",
    "kk": "",
    "zh": "n.沮喪，心灰意冷",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word dispiritedness correctly.",
    "exampleZh": "他試著學習如何正確使用「dispiritedness」這個單字。"
  },
  {
    "id": 7395,
    "en": "despondency",
    "kk": "[dɪˋspɑndənsi]",
    "zh": "n. 沮喪，意志消沉，洩氣",
    "unit": 7,
    "example": "[n.] I entreat you, give no place to despondency.",
    "exampleZh": "我懇求你，不要為沮喪留地步。"
  },
  {
    "id": 7396,
    "en": "segregate",
    "kk": "[ˋseɡrɪɡeɪt]",
    "zh": "v. （尤指因種族、性別、宗教不同而）使隔離，使分開；實行種族隔離；（使）分開，分離；（成對的等位基因）分離；n. （遺傳）分離子；（植物學）集合物種中的一種",
    "unit": 7,
    "example": "[v.] Is it ever good to segregate on the basis of race, income or age?",
    "exampleZh": "根據種族、收入或年齡來劃分是否有益？"
  },
  {
    "id": 7397,
    "en": "affront",
    "kk": "[əˋfrʌnt]",
    "zh": "n. （當眾）侮辱，（故意）冒犯；v. 冒犯，侮辱；（古義）面對；（古義）相遇",
    "unit": 7,
    "example": "[v.] This will result in a waste of resources and could even affront the very individuals we are working to support.",
    "exampleZh": "這將帶來資源的浪費，甚至可能會冒犯我們正努力援助的那些人。"
  },
  {
    "id": 7398,
    "en": "overhaul",
    "kk": "[͵oʊvərˋhɔl]",
    "zh": "v. 徹底檢修，全面改造；全面改革（制度或方法）；（尤指在體育競賽中）趕上，超過；n. 大修，徹底檢修；（制度或方法的）全面改革",
    "unit": 7,
    "example": "[n.] This engine needs an overhaul.",
    "exampleZh": "這臺發動機需要翻修。"
  },
  {
    "id": 7399,
    "en": "bridle",
    "kk": "[ˋbraɪd(ə)l]",
    "zh": "n. 馬勒，韁繩（套在馬頭上、由繫帶等組成的馬具）；約束物，限制；（英）布賴德爾（人名）；vt. 控制，約束，抑制（情緒、慾望等）；給（馬等）套上馬勒；vi. （因受冒犯等）生氣，發怒（常表現為昂首表示輕蔑，常接 at）",
    "unit": 7,
    "example": "[n.] You cannot reach up to the horse's bridle.",
    "exampleZh": "你夠不著馬的韁繩。"
  },
  {
    "id": 7400,
    "en": "declaim",
    "kk": "[dɪˋkleɪm]",
    "zh": "vi. 慷慨陳詞，激昂地演講，高談闊論；演講；朗誦，朗讀；（declaim against）強烈抨擊，譴責；vt. 演講；慷慨激昂地發表",
    "unit": 7,
    "example": "[vi.] He used to declaim French verse to us.",
    "exampleZh": "他過去經常給我們朗誦法語詩文。"
  },
  {
    "id": 7401,
    "en": "synchronize",
    "kk": "[ˋsɪŋkrənaɪz]",
    "zh": "vt. （使）同步；對準（鍾，表）；相符；（電腦）同步化",
    "unit": 7,
    "example": "[vt.] The sound track did not synchronize with the action.",
    "exampleZh": "聲跡與動作不同步。"
  },
  {
    "id": 7402,
    "en": "amend",
    "kk": "[əˋmɛnd]",
    "zh": "v. 修訂；修改",
    "unit": 7,
    "example": "[v.] Actually, I need to amend this.",
    "exampleZh": "實際上，我需要稍做修改。"
  },
  {
    "id": 7403,
    "en": "contravene",
    "kk": "[͵kɑntrəˋvin]",
    "zh": "vt. 違反（法律、規則等），牴觸；反駁，否認（說法、結論等）",
    "unit": 7,
    "example": "[vt.] Opponents said this would contravene international treaties.",
    "exampleZh": "反對者表示，這將違反國際條約。"
  },
  {
    "id": 7404,
    "en": "breach",
    "kk": "[britʃ]",
    "zh": "n. 破壞、違反；v. 破壞、違反",
    "unit": 7,
    "example": "[n.] They escaped through a breach in the wire fence.",
    "exampleZh": "他們從鐵絲網上的一個缺口逃走了。"
  },
  {
    "id": 7405,
    "en": "infringe",
    "kk": "[ɪnˋfrɪndʒ]",
    "zh": "v. 違反，違背（法律、規則等）；侵犯，侵害（權益）",
    "unit": 7,
    "example": "[v.] People fear that security cameras could infringe personal liberties.",
    "exampleZh": "人們擔心保安攝像機會侵犯人身自由。"
  },
  {
    "id": 7406,
    "en": "infract",
    "kk": "[ɪnˋfrækt]",
    "zh": "vt. 違反，破壞（法律、規則、協定等）；侵害（權利等）",
    "unit": 7,
    "example": "[vt.] Then, how to make the news public opinion supervision work efficiently and not to infract other rights?",
    "exampleZh": "那麼，如何既發揮好新聞輿論監督的作用，又不至於侵害到其他合法權益呢？"
  },
  {
    "id": 7407,
    "en": "gloss",
    "kk": "[ɡlɑs]",
    "zh": "n. 光澤，光彩；註釋，註解，訓詁；假象，表面光，虛飾；上光物質，光澤塗料，唇彩；v. 給…作註釋，註解；掩蓋，掩飾，粉飾（常作 gloss over）；使有光澤，上光，擦亮；<古>曲解",
    "unit": 7,
    "example": "[n.] The gel gives your hair a gloss.",
    "exampleZh": "髮膠使你的頭髮有了光澤。"
  },
  {
    "id": 7408,
    "en": "retract",
    "kk": "[rɪˋtrækt]",
    "zh": "v. <正式>收回，撤回，撤銷（已說的話、聲明、承諾等；不及物時指收回自己說過的話）；縮回，縮進（身體部位、機器部件等向內移動或收攏）；（外科）牽開，拉開（傷口或器官邊緣）；n. （數學）收縮核",
    "unit": 7,
    "example": "[v.] They tried to persuade me to retract my words.",
    "exampleZh": "他們試圖說服我收回我的話。"
  },
  {
    "id": 7409,
    "en": "thoroughly",
    "kk": "[ˋθɝəli]",
    "zh": "adv. 徹底地、完全地、仔細地",
    "unit": 7,
    "example": "[adv.] Please review the financial contract thoroughly before affixing your legal signature.",
    "exampleZh": "在簽署具法律效力的簽名前，請務必徹底且仔細地審閱該財務合約。"
  },
  {
    "id": 7410,
    "en": "extremely",
    "kk": "[ɪkˋstrimli]",
    "zh": "adv. 極度，非常",
    "unit": 7,
    "example": "[adv.] This species is extremely rare.",
    "exampleZh": "這一物種極為罕見。"
  },
  {
    "id": 7411,
    "en": "exceedingly",
    "kk": "[ɪkˋsidɪŋli]",
    "zh": "adv. 非常，極其；<古>在很大程度上",
    "unit": 7,
    "example": "[adv.] We had an exceedingly good lunch.",
    "exampleZh": "我們吃了一頓極其豐盛的午餐。"
  },
  {
    "id": 7412,
    "en": "rarely",
    "kk": "[ˋrɛrli]",
    "zh": "adv. 很少；難得",
    "unit": 7,
    "example": "[adv.] We rarely agree on what to do.",
    "exampleZh": "我們很少在要做的事情上看法一致。"
  },
  {
    "id": 7413,
    "en": "receiving",
    "kk": "[rɪˋsivɪŋ]",
    "zh": "v. 收到、接到、接待（receive之現在分詞）；n. 接收、接待",
    "unit": 7,
    "example": "[n.] Upon receiving your official confirmation, our warehouse team will ship the order immediately.",
    "exampleZh": "在收到您的正式確認函後，我們的倉儲團隊將立即發貨出貨。"
  },
  {
    "id": 7414,
    "en": "taking",
    "kk": "[ˋteɪkɪŋ]",
    "zh": "n. 取得；捕獲；營業收入，進款（通常用複數 takings）；adj. 可愛的，迷人的，吸引人的；會傳染的（用於疾病等）；v. 拿；捕捉；奪取（take 的現在分詞和動名詞形式）",
    "unit": 7,
    "example": "[n.] She's been taking sleeping pills.",
    "exampleZh": "她一直在服用安眠藥。"
  },
  {
    "id": 7415,
    "en": "obtaining",
    "kk": "[əbˋteɪnɪŋ]",
    "zh": "v. （尤指經努力）獲得；<正式>通用，繼續存在（obtain 的現在分詞）",
    "unit": 7,
    "example": "[v.] She denies obtaining a pecuniary advantage by deception.",
    "exampleZh": "她否認通過欺騙獲得了金錢方面的好處。"
  },
  {
    "id": 7416,
    "en": "acquiring",
    "kk": "[əˋkwaɪərɪŋ]",
    "zh": "v. 獲得，取得，購買；習得，養成，學到（acquire 的現在分詞）；n. 獲得，取得（的行為）",
    "unit": 7,
    "example": "[v.] Children naturally have a blurred approach to acquiring knowledge.",
    "exampleZh": "孩子們在獲取知識時，天生沒有清晰明確的方法邊界。"
  },
  {
    "id": 7417,
    "en": "undertaking",
    "kk": "[͵ʌndərˋteɪkɪŋ]",
    "zh": "n. 任務，企業；許諾，保證；喪葬業，殯儀業；v. 承擔，從事；承諾，答應；<英>在內側行駛時趕上並超越（另一輛車）（undertake 的現在分詞形式）",
    "unit": 7,
    "example": "[v.] The landlord gave a written undertaking that the repairs would be carried out.",
    "exampleZh": "房東書面保證將進行維修。"
  },
  {
    "id": 7418,
    "en": "conversance",
    "kk": "[kənˋvɝsəns]",
    "zh": "n. 精通；熟悉",
    "unit": 7,
    "example": "[n.] In analyzing the legal relationship related to a medical damage, the conversance of person having and person owing liability should be paid special attentions to.",
    "exampleZh": "在確定醫療損害賠償責任的法律關係時，應注意賠償權利人和義務人的變化。"
  },
  {
    "id": 7419,
    "en": "conversancy",
    "kk": "",
    "zh": "n. 精通；熟練；親近",
    "unit": 7,
    "example": "[n.] He tried to learn how to use the word conversancy correctly.",
    "exampleZh": "他試著學習如何正確使用「conversancy」這個單字。"
  },
  {
    "id": 7420,
    "en": "acquaintanceship",
    "kk": "[əˋkweɪntənsʃɪp]",
    "zh": "n. 認識，相識；交往關係",
    "unit": 7,
    "example": "[n.] It was unfair to judge her on such a brief acquaintanceship.",
    "exampleZh": "你剛認識她就對她作出評價，這是不公平的。"
  },
  {
    "id": 7421,
    "en": "acidic",
    "kk": "[əˋsɪdɪk]",
    "zh": "adj. 酸的，酸性的；產生酸的；（地質學）（火成岩）富含二氧化硅的，酸性的",
    "unit": 7,
    "example": "[adj.] Some fruit juices are very acidic.",
    "exampleZh": "有些果汁酸得很。"
  },
  {
    "id": 7422,
    "en": "unsweetened",
    "kk": "[͵ʌnˋswitnd]",
    "zh": "adj. 未加糖的，不加糖的",
    "unit": 7,
    "example": "[adj.] There is also a slight hint of effervescence in the unsweetened yogurt.",
    "exampleZh": "在未加糖的酸奶中也有輕微的起泡跡象。"
  },
  {
    "id": 7423,
    "en": "commendation",
    "kk": "[͵kɑmenˋdeɪʃn]",
    "zh": "n. 讚揚，稱讚，表揚；正式嘉獎，表彰，獎狀；（較少用）推薦",
    "unit": 7,
    "example": "[n.] Clare won a commendation for bravery in 1998 after risking his life at the scene of a gas blast.",
    "exampleZh": "1998年克萊爾因在一次瓦斯爆炸現場甘冒生命危險的勇敢行為而榮獲嘉獎。"
  },
  {
    "id": 7424,
    "en": "acclaim",
    "kk": "[əkˋlem]",
    "zh": "v. 歡呼；喝采",
    "unit": 7,
    "example": "[v.] He received acclaim as a champion of the oppressed.",
    "exampleZh": "他作為被壓迫者的捍衛者而受到了讚譽。"
  },
  {
    "id": 7425,
    "en": "approbation",
    "kk": "[͵æprəˋbeɪʃ(ə)n]",
    "zh": "n. <正式>認可，讚許，批准",
    "unit": 7,
    "example": "[n.] It has my complete approbation.",
    "exampleZh": "我完全同意。"
  },
  {
    "id": 7426,
    "en": "allocation",
    "kk": "[͵æləˋkeɪʃ(ə)n]",
    "zh": "n. 配給量，劃撥款，份額；分配，分派",
    "unit": 7,
    "example": "[n.] Town planning and land allocation had to be coordinated.",
    "exampleZh": "城鎮規劃和土地分配決定必須要協調。"
  },
  {
    "id": 7427,
    "en": "allotment",
    "kk": "[əˋlɑtmənt]",
    "zh": "n. 配額，份額，配給物；分配，指定；<英>（可租用的）小塊菜園地；<美>（政府撥給美洲印第安人的）留地",
    "unit": 7,
    "example": "[n.] The gooseberry bushes in my preserving garden allotment are still in their infancy and I'm not expecting much fruit from them until next year.",
    "exampleZh": "我那塊用來製作果醬的園藝分配地裡的醋栗樹叢還處在幼年期，我要到明年才指望能從它們身上收穫不少果實。"
  },
  {
    "id": 7428,
    "en": "quota",
    "kk": "[ˋkwoʊtə]",
    "zh": "n. 定額，限額；（人對事情、品質或屬性擁有的）份額；定量，指標；（候選人當選所需的）規定票數，最低票數；（英國國教會牧區貢獻給主教教區的）資金份額；<非正式>預計量",
    "unit": 7,
    "example": "[n.] I'm going home now—I've done my quota of work for the day.",
    "exampleZh": "我現在要回家了—我已完成了今天的工作指標。"
  },
  {
    "id": 7429,
    "en": "ration",
    "kk": "[ˋræʃ(ə)n]",
    "zh": "n. 配給量，定量；（尤指發給作戰士兵的）口糧配給，口糧定量；合理（正常）的量；糧食供應，食物儲備；應得之量；v. 對（供應品）定量供應，實行配給；對（某人）實行定量供給，配給",
    "unit": 7,
    "example": "[n.] The meat ration was down to one pound per person per week.",
    "exampleZh": "肉類的配給量降到了每人每週一磅。"
  },
  {
    "id": 7430,
    "en": "layperson",
    "kk": "[ˋleɪpɝsn]",
    "zh": "n. 外行，門外漢；（宗教）平信徒，非神職人員",
    "unit": 7,
    "example": "[n.] The layperson cannot really understand mental illness.",
    "exampleZh": "外行不完全瞭解精神病。"
  },
  {
    "id": 7431,
    "en": "dilettante",
    "kk": "[͵dɪləˋtænti]",
    "zh": "n. 業餘愛好者；一知半解者；adj. 淺薄的；業餘藝術愛好的；vi. （在藝術、科學等方面）淺嘗輒止",
    "unit": 7,
    "example": "[n.] He is a master of that area even if he is a dilettante.",
    "exampleZh": "雖然他只是個業餘愛好者，但卻是一流的高手。"
  },
  {
    "id": 7432,
    "en": "dabbler",
    "kk": "[ˋdæblər]",
    "zh": "n. 涉獵者，淺嘗輒止的人，業餘愛好者；戲水者，玩水的人；（鳥類）浮水鴨，鑽水鴨",
    "unit": 7,
    "example": "[n.] The half-filled bottle sloshes; the full bottle remains still.; The dabbler in knowledge chatters away; the wise man stays silent.",
    "exampleZh": "一瓶子不響， 半瓶子晃盪。"
  },
  {
    "id": 7433,
    "en": "mirth",
    "kk": "[mɝθ]",
    "zh": "n. （文學）歡笑，歡樂，高興",
    "unit": 7,
    "example": "[n.] There was a ripple of mirth, which the court checked.",
    "exampleZh": "一陣竊笑傳開，隨即被法庭制止了。"
  },
  {
    "id": 7434,
    "en": "merriment",
    "kk": "[ˋmerimənt]",
    "zh": "n. 歡笑，歡樂",
    "unit": 8,
    "example": "[n.] His literary diction would give food for merriment to our elders behind his back.",
    "exampleZh": "他的文學辭令成了大人們背後的笑料。"
  },
  {
    "id": 7435,
    "en": "hilarity",
    "kk": "[hɪˋlærəti]",
    "zh": "n. 歡喜，高興，歡鬧",
    "unit": 8,
    "example": "[n.] There was no hilarity in the little town that same tranquil Saturday afternoon.",
    "exampleZh": "就是在那個星期六的下午，那個寧靜的小鎮上沒有一點歡樂的氣氛。"
  },
  {
    "id": 7436,
    "en": "forebear",
    "kk": "[ˋfɔrber]",
    "zh": "n. 祖先，祖宗，先輩；<喻>前身，早期版本",
    "unit": 8,
    "example": "[n.] He was a good man, but always forebear his wrath and complaint.",
    "exampleZh": "他是一個老好人，善於剋制自我、隱忍無奈。"
  },
  {
    "id": 7437,
    "en": "forefather",
    "kk": "[ˋfɔrfɑðər]",
    "zh": "n. 祖先（尤指男性祖先，常用複數）；前輩，先驅",
    "unit": 8,
    "example": "[n.] The technical term for an evolutionary throwback is an \"atavism\", from the Latin atavus, meaning forefather.",
    "exampleZh": "「進化返祖」的專業術語是「atavism」，源自拉丁語的「atavus」，意為祖先。"
  },
  {
    "id": 7438,
    "en": "progenitor",
    "kk": "[proʊˋdʒenɪtər]",
    "zh": "n. 祖先，直系祖先；先驅，創始人；起源，前身；（生物學）祖細胞；（天文學）前身星",
    "unit": 8,
    "example": "[n.] He was the progenitor of a family of distinguished actors.",
    "exampleZh": "他是一個著名演藝世家的先輩。"
  },
  {
    "id": 7439,
    "en": "antecedent",
    "kk": "[͵æntɪˋsid(ə)nt]",
    "zh": "n. 先例，前身；祖先，社會與家庭背景（antecedents）；先行詞，前述詞；（邏輯）前件；adj. 先時的，先前的；（語法）先行的",
    "unit": 8,
    "example": "[n.] In 'He grabbed the ball and threw it in the air', 'ball' is the antecedent of 'it'.",
    "exampleZh": "在He grabbed the ball and threw it in the air一句中，ball是it的先行詞。"
  },
  {
    "id": 7440,
    "en": "primogenitor",
    "kk": "[͵praɪməˋdʒenətər]",
    "zh": "n. 始祖；祖先",
    "unit": 8,
    "example": "[n.] Duchamp's \"ready object\" - \"Spring\", is a product of Dada and primogenitor of Installation, is a wonder in the art history of the world.",
    "exampleZh": "杜尚的「現成品」作品《泉》，是世界藝術史上的一個奇蹟，它是達達的產物，也是裝置的始祖。"
  },
  {
    "id": 7441,
    "en": "apols",
    "kk": "[əˋpɑlz]",
    "zh": "n. 道歉，抱歉（apology 之口語簡稱）",
    "unit": 8,
    "example": "[n.] Sending my sincere apols for missing the morning meeting.",
    "exampleZh": "因未能參加早會，謹致上誠摯的歉意。"
  },
  {
    "id": 7442,
    "en": "facet",
    "kk": "[ˋfæsɪt]",
    "zh": "n. 部分，方面；（寶石的）琢面，刻面；（構成昆蟲或甲殼動物複眼的）小眼面；v. 在……上琢面",
    "unit": 8,
    "example": "[n.] Now let's look at another facet of the problem.",
    "exampleZh": "現在咱們看問題的另一面。"
  },
  {
    "id": 7443,
    "en": "artefact",
    "kk": "[ˋɑrtɪfækt]",
    "zh": "n. 人工製品，手工製品，人造物（尤指有歷史或文化價值的器物）；（醫學/技術）假象，人為現象，偽影；（計算機）構建產物，生成物",
    "unit": 8,
    "example": "[n.] The Rosetta Stone is arguably the most famous archaeological artefact ever discovered.",
    "exampleZh": "羅塞塔石碑可以說是迄今為止發現的最著名的考古文物。"
  },
  {
    "id": 7444,
    "en": "consortium",
    "kk": "[kənˋsɔrʃiəm; kənˋsɔrtiəm]",
    "zh": "n. 聯合企業，財團；<法律>配偶的相互權利；聯合",
    "unit": 8,
    "example": "[n.] The consortium is a nonprofit group affiliated with the University of Chicago.",
    "exampleZh": "這個聯合會是一個附屬於芝加哥大學的非盈利性團體。"
  },
  {
    "id": 7445,
    "en": "coalition",
    "kk": "[͵koʊəˋlɪʃ(ə)n]",
    "zh": "n. 聯合政府；聯合體，聯盟；聯合，結合",
    "unit": 8,
    "example": "[n.] His policy risks fracturing the coalition.",
    "exampleZh": "他的政策有分裂聯盟的危險。"
  },
  {
    "id": 7446,
    "en": "guild",
    "kk": "[ɡɪld]",
    "zh": "n. （由工作、目標或興趣相同的人組成的）協會；（中世紀的）行會，同業公會；（生態）共位群，功能群；【名】 （Guild）（英）吉爾德（人名）",
    "unit": 8,
    "example": "[n.] Guild membership held very different meanings for tailors and seamstresses.",
    "exampleZh": "行會會員對裁縫師和女裁縫師的意義截然不同。"
  },
  {
    "id": 7447,
    "en": "fitting",
    "kk": "[ˋfɪtɪŋ]",
    "zh": "n. 配件，附件；試穿，試衣；可移動的定位安裝傢俱；安裝，裝配；adj. 合適的，恰當的；v. 可容納，裝進；和……相稱，符合；（疾病）發作（fit 的現在分詞）；【名】  （Fitting）（美）菲廷（人名）",
    "unit": 8,
    "example": "[n.] He wore an ill-fitting green corduroy suit.",
    "exampleZh": "他穿了一件很不合身的綠色燈芯絨西裝。"
  },
  {
    "id": 7448,
    "en": "fitment",
    "kk": "[ˋfɪtmənt]",
    "zh": "n. （英式，常作 fitments）固定傢俱；設備；（機械）配件，附件（等於 fittings）",
    "unit": 8,
    "example": "[n.] Figure 2 shows the hierarchy structure for a technical fitment evaluation.",
    "exampleZh": "圖2展示了一種技術適配性評估的層次結構。"
  },
  {
    "id": 7449,
    "en": "ambience",
    "kk": "[ˋæmbiəns]",
    "zh": "n. 氣氛，氛圍；周圍環境",
    "unit": 8,
    "example": "[n.] The overall ambience of the room is cosy.",
    "exampleZh": "這個房間的整體氛圍是舒適的。"
  },
  {
    "id": 7450,
    "en": "understanding",
    "kk": "[͵ʌndərˋstændɪŋ]",
    "zh": "n. （對某學科、過程或情況的）瞭解，認識；（非正式的）協議，諒解；理解，諒解，體諒；理解，看法，解釋，意見；思維能力，理解力；adj. 能諒解的，寬容的；有洞察力的，判斷力強的；v. 懂，理解，領會；瞭解，認識到，明瞭；瞭解，諒解，體諒（understand 的現在分詞）",
    "unit": 8,
    "example": "[n.] She shows a lamentable lack of understanding.",
    "exampleZh": "她顯得缺乏理解能力，實在令人遺憾。"
  },
  {
    "id": 7451,
    "en": "nib",
    "kk": "[nɪb]",
    "zh": "n. 鋼筆尖，筆尖（亦指鵝管筆的尖端）；（鳥的）嘴，喙；（計算機）半字節；vt. （罕用）給（筆等）裝尖頭；把…削尖",
    "unit": 8,
    "example": "[n.] When you created the NIB file, you also created the controller class for each view.",
    "exampleZh": "在您創建 NIB 文件之後，您還需要為每個視圖創建控制器類。"
  },
  {
    "id": 7452,
    "en": "mandible",
    "kk": "[ˋmændɪbl]",
    "zh": "n. （人或動物的）下頜骨，下顎骨；（鳥的）上喙，下喙；（昆蟲的）顎，上顎",
    "unit": 8,
    "example": "[n.] In the cases with hypogenetic mandible, there was no significant difference between the normal and abnormal side in both groups.",
    "exampleZh": "在下頜骨發育不良的情況下，兩組的正常側和異常側之間均無顯著差異。"
  },
  {
    "id": 7453,
    "en": "burgeon",
    "kk": "[ˋbɝdʒən]",
    "zh": "vi. 迅速增長，迅速發展，興旺；（植物）發芽，萌芽；n. （書面）芽，嫩枝",
    "unit": 8,
    "example": "[vi.] Plants burgeon from every available space.",
    "exampleZh": "植物能從任何可獲得的空間中迅速生長。"
  },
  {
    "id": 7454,
    "en": "brag",
    "kk": "[bræɡ]",
    "zh": "v. 吹牛，自誇；n. 大話，誇耀之詞；勃萊格牌戲（簡化的撲克牌戲）；adj. <美，非正式>卓越的，一流的；【名】 （Brag）（美、烏、瑞、丹、德）布拉格（人名）",
    "unit": 8,
    "example": "[v.] Do you need help or want to brag?",
    "exampleZh": "你是需要幫忙，還是想來顯擺一下？"
  },
  {
    "id": 7455,
    "en": "swagger",
    "kk": "[ˋswæɡər]",
    "zh": "v. 大搖大擺地走，趾高氣揚地行走或行事；嚇唬，虛張聲勢嚇人；吹牛，自吹自擂；n. 神氣十足，大搖大擺；趾高氣揚；吹牛；虛張聲勢；（Swagger）（美）史華傑爾（人名）；adj. （英式，非正式）漂亮的，時髦的；（外衣）下襬寬鬆的",
    "unit": 8,
    "example": "[n.] He walked with something of a swagger.",
    "exampleZh": "他有點大搖大擺地走著。"
  },
  {
    "id": 7456,
    "en": "swank",
    "kk": "[swæŋk]",
    "zh": "v. 炫耀；出風頭；賣弄；擺闊；n. 出風頭；虛張聲勢；吹牛；炫耀的人；adj. 愛打扮的；華麗的，時髦的；愛出風頭的",
    "unit": 8,
    "example": "[adj.] Other swank suburbs made our list.",
    "exampleZh": "其它高級郊區住宅區也在我們的名單中。"
  },
  {
    "id": 7457,
    "en": "gloat",
    "kk": "[ɡloʊt]",
    "zh": "vi. 幸災樂禍；洋洋得意；心滿意足地注視（或回想）；n. 幸災樂禍；洋洋得意；貪婪的盯視",
    "unit": 8,
    "example": "[vi.] It is easy for people to gloat when the cool jock with the hot girlfriend wrecks his sweet car, especially if he seems kind of smug.",
    "exampleZh": "當酷酷的運動員和火辣的女友撞壞了他的愛車時，人們很容易幸災樂禍，尤其是當他看起來有點沾沾自喜的時候。"
  },
  {
    "id": 7458,
    "en": "nictitate",
    "kk": "",
    "zh": "vi. 眨眼睛",
    "unit": 8,
    "example": "[vi.] He tried to learn how to use the word nictitate correctly.",
    "exampleZh": "他試著學習如何正確使用「nictitate」這個單字。"
  },
  {
    "id": 7459,
    "en": "cabinetry",
    "kk": "[ˋkæbɪnətri]",
    "zh": "n. 櫥櫃（總稱）；制櫃工藝，細木傢俱製作工藝",
    "unit": 8,
    "example": "[n.] Linen storage cabinetry upstairs.",
    "exampleZh": "存儲櫥櫃在樓上。"
  },
  {
    "id": 7460,
    "en": "commemoration",
    "kk": "[kə͵meməˋreɪʃn]",
    "zh": "n. 紀念、紀念典禮、紀念活動",
    "unit": 8,
    "example": "[n.] A bronze statue was unveiled in commemoration of the brave firefighters who protected the city.",
    "exampleZh": "為紀念保護這座城市的英勇消防員，當局揭幕了一座青銅紀念雕像。"
  },
  {
    "id": 7461,
    "en": "observance",
    "kk": "[əbˋzɝvəns]",
    "zh": "n. 遵守，奉行；儀式，紀念活動，慶祝；慣例，習俗",
    "unit": 8,
    "example": "[n.] Observance of the law is a matter of principle for us.",
    "exampleZh": "遵守法律對於我們是一個原則問題。"
  },
  {
    "id": 7462,
    "en": "honouring",
    "kk": "[ˋɑnər]",
    "zh": "n. 尊敬；榮幸；高尚品德，氣節；榮譽；獎勵，榮譽稱號；大學榮譽學位課程；優異成績；法官大人，（美國）市長閣下；<舊>貞操；最大點數的牌；v. 尊敬；表彰；信守，執行（承諾）；兌現（支票）；【名】 （Honour）（英）昂納（人名）",
    "unit": 8,
    "example": "[n.] I have every intention of honouring our contract.",
    "exampleZh": "我完全願意執行我們的合約。"
  },
  {
    "id": 7463,
    "en": "marking",
    "kk": "[ˋmɑrkɪŋ]",
    "zh": "v. 做記號；留下痕跡；（使）有汙點；標明方位；慶賀；表明；打分；記錄；賦予特徵；留意；在（羔羊）耳朵上做記號；分隔；標誌；（鐘錶）指示；接球（mark 的現在分詞）；n. 作標記，標出位置，劃線；物體表面的斑紋、標識、標線（如獸類、鳥類或樹木的斑紋，道路或車輛上的標線）；批改（作業），評分；盯人防守，釘人防守；樂譜說明符、記號及演奏說明；Marking <美>馬金（人名）",
    "unit": 8,
    "example": "[n.] She does her marking in the evenings.",
    "exampleZh": "她晚上批改作業。"
  },
  {
    "id": 7464,
    "en": "keeping",
    "kk": "[ˋkipɪŋ]",
    "zh": "n. 保管，監護，照管，保存；擁有；維持；保護；一致，協調；v. （keep 的現在分詞／動名詞）保持，維持，保存；擁有，佔有；遵守；撫養；兌現；記（日記）",
    "unit": 8,
    "example": "[v.] She had trouble keeping her balance.",
    "exampleZh": "她保持平衡有困難。"
  },
  {
    "id": 7465,
    "en": "cineplex",
    "kk": "[ˋsɪnə͵pleks]",
    "zh": "n. 多放映廳電影院，多觀眾廳電影院",
    "unit": 8,
    "example": "[n.] Plaza Singapura houses a mix of lifestyle stores, food and beverage outlets and a huge Cineplex.",
    "exampleZh": "獅城大廈集時尚店鋪、美食和飲品店於一身，並擁有一個大型影院。"
  },
  {
    "id": 7466,
    "en": "fleapit",
    "kk": "[ˋflipɪt]",
    "zh": "n. 蚤窩（被認為有跳蚤等蟲害的骯髒公共場所）",
    "unit": 8,
    "example": "[n.] A budget place to stay doesn't have to mean a fleapit in a grotty part of town. Here, two leading hostel websites choose their most amazing pads.",
    "exampleZh": "便宜價廉的旅店並不意味著坐落在城市城市邊緣的髒亂之地。這次，兩個領先的旅宿網站。"
  },
  {
    "id": 7467,
    "en": "refrain",
    "kk": "[rɪˋfreɪn]",
    "zh": "v. 剋制，避免；n. （詩歌的）疊句，（歌曲的）副歌；疊歌部分的音樂伴奏；經常重複的評價（或抱怨）",
    "unit": 8,
    "example": "[v.] When breaking in an engine, you should refrain from high speeds for the first thousand miles.",
    "exampleZh": "磨合發動機時,你應當避免在最初的1千英里高速行駛。"
  },
  {
    "id": 7468,
    "en": "ensemble",
    "kk": "[ɑnˋsɑmb(ə)l]",
    "zh": "n. （經常在一起演出的小型）樂團，劇團，舞劇團；全體，整體；全套服裝；合奏（曲），合唱（曲）；成套的東西；演出者之間的配合；（主物理）系綜；adj. 合奏的，合演的",
    "unit": 8,
    "example": "[adj.] The ensemble action extravaganza includes James McAvoy (Wanted) as Professor Xavier (previously portrayed by Patrick Stewart).",
    "exampleZh": "這部動作大片包括詹姆斯·麥卡沃伊（《通緝犯》）飾演的澤維爾教授（之前由帕特里克·斯圖爾特飾演）。"
  },
  {
    "id": 7469,
    "en": "dissemination",
    "kk": "[dɪ͵semɪˋneɪʃ(ə)n]",
    "zh": "n.  宣傳，散播；宣傳，散播",
    "unit": 8,
    "example": "[n.] Both the public and the scientific community have often been misled by widespread dissemination of sensational but weakly founded hypotheses.",
    "exampleZh": "公眾和科學界經常被廣泛傳播的聳人聽聞假設所誤導，但這些假設毫無根據。"
  },
  {
    "id": 7470,
    "en": "categorization",
    "kk": "[͵kætəɡərəˋzeɪʃn]",
    "zh": "n. 分類，歸類，分門別類；（可數）分類結果，類別體系；（認知科學、語言學）範疇化",
    "unit": 8,
    "example": "[n.] Her first novel defies easy categorization.",
    "exampleZh": "她的處女作小說不容易歸類。"
  },
  {
    "id": 7471,
    "en": "categorizing",
    "kk": "[ˋkætəɡəraɪzɪŋ]",
    "zh": "v. 把…分類，將…歸入類別（categorize 的現在分詞）；n. 分類，歸類（categorize 的動名詞）",
    "unit": 8,
    "example": "[n.] Categorizing is another means of organization.",
    "exampleZh": "分類編組是另一種方法。"
  },
  {
    "id": 7472,
    "en": "classifying",
    "kk": "[ˋklæsɪfaɪɪŋ]",
    "zh": "v. 把……分類；把……分等級；將……定為機密（classify 的現在分詞，常與 as 連用）；adj. 分類的，用於分類的；（語法）表示中心名詞屬性的",
    "unit": 8,
    "example": "[adj.] What separates colubrids from other snakes we have been classifying as venomous, is not the lack of venom, but the lack of an effective way to deliver the venom into its prey.",
    "exampleZh": "將黃頜蛇與其他被我們歸類為毒蛇的蛇區別開來的，並不是它們沒有毒液，而是缺乏一種將毒液輸送到獵物體內的有效方法。"
  },
  {
    "id": 7473,
    "en": "classing",
    "kk": "",
    "zh": "n. 分級；v. 把……分類（class 的 ing 形式）",
    "unit": 8,
    "example": "[n.] There are three base implementations provided for sub-classing.",
    "exampleZh": "所提供的用於生成子類的基本實現有三種。"
  },
  {
    "id": 7474,
    "en": "grouping",
    "kk": "[ˋɡrupɪŋ]",
    "zh": "n. 分組，分類；群體，組，類別；v. 把…分組，歸類；聚集（group 的現在分詞）",
    "unit": 8,
    "example": "[n.] Grouping is now supported.",
    "exampleZh": "現在是支持分組的。"
  },
  {
    "id": 7475,
    "en": "grading",
    "kk": "[ˋɡreɪdɪŋ]",
    "zh": "n. 評分，批改，成績評定；分級，定等級，分等；土地平整，坡度修整，坡度緩和；v. grade 的現在分詞/動名詞：評分；定等級；平整（地面），減緩坡度",
    "unit": 8,
    "example": "[n.] Your teacher's grading system may be unwise, but it is not unethical.",
    "exampleZh": "你老師的評分系統或許是不明智的，但它不是不道德的。"
  },
  {
    "id": 7476,
    "en": "cipher",
    "kk": "[ˋsaɪfər]",
    "zh": "n. 密碼，暗號（=cypher）；以密碼書寫的東西；解碼；<舊>零，數字0；<正式>無足輕重的人，不重要的東西；（姓名首字母的）拼合字，花押；（管風琴音管因機械故障發出的）連響；v. 把（消息）寫成密碼；<古>做算術；（管風琴音管）連響",
    "unit": 8,
    "example": "[n.] All important plans were sent to the police in cipher.",
    "exampleZh": "所有重要計劃均以密碼送往警方。"
  },
  {
    "id": 7477,
    "en": "hieroglyphics",
    "kk": "[͵haɪərəˋɡlɪfɪks]",
    "zh": "n. （hieroglyphic 的複數形式）象形文字，象形符號（尤指古埃及的聖書字）；難以辨認或理解的文字，天書",
    "unit": 8,
    "example": "[n.] In an article some Chinese scholars are described as being \"tantalized by the mysterious dragon bone hieroglyphics\".",
    "exampleZh": "在一篇文章中，一些中國學者被描述為「被神秘的龍骨象形文字吊胃口的人」。"
  },
  {
    "id": 7478,
    "en": "amalgamation",
    "kk": "[ə͵mælɡəˋmeɪʃ(ə)n]",
    "zh": "n. 融合，混合；混合體，結合體；（公司、組織等的）合併，聯合；（冶金）混汞法，汞齊化法",
    "unit": 8,
    "example": "[n.] The amalgamation of universities is widely acclaimed.",
    "exampleZh": "大學的合併受到了廣泛的歡迎。"
  },
  {
    "id": 7479,
    "en": "amalgam",
    "kk": "[əˋmælɡəm]",
    "zh": "n. [材] 汞合金，[化工] 汞齊；混合物，融合體",
    "unit": 8,
    "example": "[n.] The civilisation of the Amalgam wrapped the galaxy, and a committed traveller could spend two hundred thousand years circling back home.",
    "exampleZh": "阿瑪珈姆文明環繞著銀河系，一個堅定的旅行者可能要花上二十萬年才能環遊完銀河系回家。"
  },
  {
    "id": 7480,
    "en": "merger",
    "kk": "[ˋmɝdʒɚ]",
    "zh": "n. (公司等的)合併",
    "unit": 8,
    "example": "[n.] Plans for a merger have been scotched.",
    "exampleZh": "合併計劃停止實行。"
  },
  {
    "id": 7481,
    "en": "consort",
    "kk": "[ˋkɑnsɔrt]",
    "zh": "n. （統治者的）配偶；一組（古樂器或樂師）；隨航船隻；（舊用）夥伴，同伴；（Consort）（美、英、法）孔索爾特（人名）；v. （常含貶義）與…交往，結交，廝混；陪伴；符合，一致",
    "unit": 8,
    "example": "[n.] The queen consort has come together with the king.",
    "exampleZh": "王后和國王一起來了。"
  },
  {
    "id": 7482,
    "en": "workmate",
    "kk": "[ˋwɝkmeɪt]",
    "zh": "n. <英，非正式>同事，工友",
    "unit": 8,
    "example": "[n.] Do you tangle with your new workmate?",
    "exampleZh": "你和你的新同事有糾葛嗎？"
  },
  {
    "id": 7483,
    "en": "imparting",
    "kk": "[ɪmˋpɑrtɪŋ]",
    "zh": "v. 傳授、給予、告知（impart之現在分詞）",
    "unit": 8,
    "example": "[v.] Experienced professors take great pride in imparting practical skills and ethics to their students.",
    "exampleZh": "資深的教授們以向學生傳授實用技能與職業倫理為傲。"
  },
  {
    "id": 7484,
    "en": "conveying",
    "kk": "[kənˋveɪɪŋ]",
    "zh": "v. 傳達、表達、運送（convey之現在分詞）",
    "unit": 8,
    "example": "[v.] The graphic designer excelled at conveying complex marketing data through intuitive visuals.",
    "exampleZh": "該平面設計師擅長透過直覺的視覺圖像來清楚傳達複雜的行銷資訊。"
  },
  {
    "id": 7485,
    "en": "reporting",
    "kk": "[rɪˋpɔrtɪŋ]",
    "zh": "n. 報告，彙報，申報；新聞報道，新聞採寫；adj. 報告的，彙報的，報道的；v. report 的現在分詞/動名詞：報告；報道；報到",
    "unit": 8,
    "example": "[n.] The reporting of the story was fair, if sometimes overblown.",
    "exampleZh": "這個故事的報道是公正的，如果有時誇張了的話。"
  },
  {
    "id": 7486,
    "en": "presenting",
    "kk": "[prɪˋzentɪŋ]",
    "zh": "v. 贈送，呈現（present 的現在分詞/動名詞）",
    "unit": 8,
    "example": "[v.] I told him by presenting a play or mime about trees in the history of Australia.",
    "exampleZh": "我通過呈現一個關於澳大利亞歷史上的樹木的戲劇或啞劇來告訴他。"
  },
  {
    "id": 7487,
    "en": "colloquium",
    "kk": "[kəˋloʊkwiəm]",
    "zh": "n. 學術討論會，專題座談會",
    "unit": 8,
    "example": "[n.] He is ready to propose his views in the coming colloquium.",
    "exampleZh": "他準備在將要到來的學術交流會上提出他的觀點。"
  },
  {
    "id": 7488,
    "en": "symposium",
    "kk": "[sɪmˋpoziəm]",
    "zh": "n. 討論會；座談會",
    "unit": 8,
    "example": "[n.] I'm at a musicians' symposium.",
    "exampleZh": "我正在參加音樂家研討會。"
  },
  {
    "id": 7489,
    "en": "charter",
    "kk": "[ˋtʃɑrtər]",
    "zh": "n. 憲章，章程；特許狀，許可證；不完善，漏洞；包租，租賃；v. 包租，租用；特許成立，給予……特權；adj. （臨時）租用的；【名】 （Charter）（英、美）查特（人名）",
    "unit": 8,
    "example": "[adj.] The charter proclaimed that all states would have their own government.",
    "exampleZh": "憲章規定，各州皆允建立各自的政府。"
  },
  {
    "id": 7490,
    "en": "canon",
    "kk": "[ˋkænən]",
    "zh": "n. <正式>準則，標準；教規，宗教法規；作品集，精品集；經典；真經，正經；卡農（一種復調音樂）；大教堂教士，（主教座堂的）詠禮司鐸；（羅馬天主教）律修會修士；（作為羅馬天主教彌撒一部分的）祭獻經文",
    "unit": 8,
    "example": "[n.] The word canon means a list.",
    "exampleZh": "canon 一詞的意思是目錄。"
  },
  {
    "id": 7491,
    "en": "counsellor",
    "kk": "[ˋkaʊnsələr]",
    "zh": "n. 顧問，輔導顧問；律師；<美>夏令營負責人；（使館的）參贊",
    "unit": 8,
    "example": "[n.] Hicks worked with children as a camp counsellor.",
    "exampleZh": "希克斯是一名和孩子打交道的夏令營輔導員。"
  },
  {
    "id": 7492,
    "en": "disparity",
    "kk": "[dɪˋspærəti]",
    "zh": "n. 差距、明顯差異、不均等",
    "unit": 8,
    "example": "[n.] Government policies aim to reduce the widening economic disparity between urban and rural districts.",
    "exampleZh": "政府各項政策旨在縮小城鄉區域之間日益擴大的經濟差距。"
  },
  {
    "id": 7493,
    "en": "detractor",
    "kk": "[dɪˋtræktər]",
    "zh": "n. （常作複數，常帶物主限定語）貶低者，誹謗者，惡意批評者；（投資、財務或業績分析中）拖累業績或價值的事物，減分項",
    "unit": 8,
    "example": "[n.] But the pipe has one major detractor: It's something of a black box.",
    "exampleZh": "但是，管道有個大缺點：它像是黑箱子。"
  },
  {
    "id": 7494,
    "en": "censurer",
    "kk": "",
    "zh": "n. 指責別人的人（censure 的變體）；譴責別人的人（censure 的變體）",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word censurer correctly.",
    "exampleZh": "他試著學習如何正確使用「censurer」這個單字。"
  },
  {
    "id": 7495,
    "en": "attacker",
    "kk": "[əˋtækər]",
    "zh": "n. 攻擊者，襲擊者，進攻者；（體育）攻擊手，進攻球員",
    "unit": 8,
    "example": "[n.] The attacker was beaten off.",
    "exampleZh": "進攻者被擊退了。"
  },
  {
    "id": 7496,
    "en": "carper",
    "kk": "[ˋkɑrpɚ]",
    "zh": "n. 苛評的人，吹毛求疵的人；（Carper）人名：（英）卡珀",
    "unit": 8,
    "example": "[n.] A carper will cavil at anything.",
    "exampleZh": "愛挑剔的人對什麼都挑剔。"
  },
  {
    "id": 7497,
    "en": "backbiter",
    "kk": "[ˋbæk͵baɪtər]",
    "zh": "n. 背後誹謗者",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word backbiter correctly.",
    "exampleZh": "他試著學習如何正確使用「backbiter」這個單字。"
  },
  {
    "id": 7498,
    "en": "censure",
    "kk": "[ˋsenʃər]",
    "zh": "n. <正式>嚴厲批評，譴責；v. <正式>嚴厲批評，正式譴責",
    "unit": 8,
    "example": "[n.] It used the right to escape all censure.",
    "exampleZh": "它利用這個權利來逃避一切責難。"
  },
  {
    "id": 7499,
    "en": "deplore",
    "kk": "[dɪˋplɔr]",
    "zh": "vt. 強烈反對，譴責；vt. 悲悼，哀嘆；對……深感遺憾",
    "unit": 8,
    "example": "[vt.] I deplore the boy's actions, and he will pay the price for what he has done.",
    "exampleZh": "我譴責這個男孩的所作所為，他將為自己的行為付出代價。"
  },
  {
    "id": 7500,
    "en": "unhappiness",
    "kk": "[ʌnˋhæpinəs]",
    "zh": "n. 不快樂，不幸福，苦惱，憂愁",
    "unit": 8,
    "example": "[n.] Failure will lead to unhappiness in life.",
    "exampleZh": "失敗會導致生活中的不幸。"
  },
  {
    "id": 7501,
    "en": "resoluteness",
    "kk": "[ˋrezəlutnəs]",
    "zh": "n. 堅定，堅決，果斷",
    "unit": 8,
    "example": "[n.] We will require wisdom and resoluteness to ensure that migrating species can continue their journeying a while longer.",
    "exampleZh": "我們需要智慧和決心，以確保遷徙的物種能夠在更長時間裡繼續它們的旅程。"
  },
  {
    "id": 7502,
    "en": "assimilate",
    "kk": "[əˋsɪmə͵let]",
    "zh": "v. 被吸收；被消化",
    "unit": 8,
    "example": "[v.] New arrivals find it hard to assimilate.",
    "exampleZh": "新來者感到難以融入當地社會。"
  },
  {
    "id": 7503,
    "en": "gadget",
    "kk": "[ˋɡædʒɪt]",
    "zh": "n. 小器具，小玩意兒",
    "unit": 8,
    "example": "[n.] This gadget isn't much good.",
    "exampleZh": "這小玩意兒沒多大用處。"
  },
  {
    "id": 7504,
    "en": "calamity",
    "kk": "[kəˋlæməti]",
    "zh": "n. 災難，災禍；【名】 （Calamity）（英）卡拉米蒂（人名）",
    "unit": 8,
    "example": "[n.] He described drugs as the greatest calamity of the age.",
    "exampleZh": "他形容毒品是這個時代最大的災難。"
  },
  {
    "id": 7505,
    "en": "cataclysm",
    "kk": "[ˋkætəklɪzəm]",
    "zh": "n. <正式>突然發生的劇烈災難，災變；大洪水、地震等自然災變；（社會、政治等的）大變動，劇變",
    "unit": 8,
    "example": "[n.] Cataclysm is likely to be the biggest release of next year.",
    "exampleZh": "「魔獸世界·大災難」很可能是明年發佈的最暢銷遊戲。"
  },
  {
    "id": 7506,
    "en": "holocaust",
    "kk": "[ˋhoʊləkɔst͵ˋhɑləkɔst]",
    "zh": "n. 毀滅，浩劫，大屠殺（指戰爭、火災或核災難等造成的大規模毀滅和大量死亡）；納粹大屠殺（第二次世界大戰期間納粹對猶太人等的系統性屠殺）",
    "unit": 8,
    "example": "[n.] A nuclear holocaust seemed a very real possibility in the '50s.",
    "exampleZh": "在50年代，核災難似乎是件很有可能發生的事。"
  },
  {
    "id": 7507,
    "en": "revulsion",
    "kk": "[rɪˋvʌlʃ(ə)n]",
    "zh": "n. 強烈厭惡，極度反感；劇變，驟然轉變；（金融）資金抽回，資本抽回",
    "unit": 8,
    "example": "[n.] Trypophobia is a revulsion and fear of objects with clusters of small holes.",
    "exampleZh": "密集恐懼症是指對有密集小孔的物體感到噁心和恐懼。"
  },
  {
    "id": 7508,
    "en": "repugnance",
    "kk": "[rɪˋpʌɡnəns]",
    "zh": "n. 反感，厭惡；不一致，牴觸",
    "unit": 8,
    "example": "[n.] She felt a deep sense of shame and repugnance.",
    "exampleZh": "她深感羞恥和厭惡。"
  },
  {
    "id": 7509,
    "en": "aversion",
    "kk": "[əˋvɝʒn]",
    "zh": "n. 厭惡，憎惡；討厭的人（或東西）",
    "unit": 8,
    "example": "[n.] The blink reflex of the aversion response will prevent eye damage.",
    "exampleZh": "厭惡反應的眨眼反射將防止眼睛受到傷害。"
  },
  {
    "id": 7510,
    "en": "distaste",
    "kk": "[dɪsˋteɪst]",
    "zh": "n. 反感，不喜歡；v. <古>厭惡，不喜歡",
    "unit": 8,
    "example": "[n.] He professed a violent distaste for everything related to commerce, production, and money.",
    "exampleZh": "他對一切與商業、生產和金錢相關的東西表示了強烈的厭惡。"
  },
  {
    "id": 7511,
    "en": "abhorrence",
    "kk": "[əbˋhɔrəns]",
    "zh": "n. （正式）強烈的痛恨，厭惡",
    "unit": 8,
    "example": "[n.] They are anxious to show their abhorrence of racism.",
    "exampleZh": "他們急於表現對種族主義的憎惡。"
  },
  {
    "id": 7512,
    "en": "loathing",
    "kk": "[ˋloʊðɪŋ]",
    "zh": "n. 強烈的厭惡，憎惡，嫌惡；v. 討厭，厭惡（loathe 的現在分詞）；adj. 厭惡的，憎惡的",
    "unit": 8,
    "example": "[n.] Many soldiers returned with a deep loathing of war.",
    "exampleZh": "許多士兵回來時對戰爭都深惡痛絕。"
  },
  {
    "id": 7513,
    "en": "camouflage",
    "kk": "[ˋkæməflɑʒ]",
    "zh": "n. （軍事上的）偽裝，隱蔽；（士兵作偽裝用的）迷彩服，偽裝色；（動物的）保護色，保護形狀；掩飾，欺瞞；v. 掩飾；偽裝；掩蓋（真相）；（用聲音）蓋過",
    "unit": 8,
    "example": "[n.] They were dressed in camouflage and carried automatic rifles.",
    "exampleZh": "他們身著迷彩服，手持自動步槍。"
  },
  {
    "id": 7514,
    "en": "concealment",
    "kk": "[kənˋsilmənt]",
    "zh": "n. 隱藏，隱瞞；隱匿處",
    "unit": 8,
    "example": "[n.] Concealment of evidence is against the law.",
    "exampleZh": "隱藏證據是違法的。"
  },
  {
    "id": 7515,
    "en": "orderliness",
    "kk": "[ˋɔrdərlinəs]",
    "zh": "n. 整潔，整齊；秩序井然，有條不紊",
    "unit": 8,
    "example": "[n.] A balance is achieved in the painting between orderliness and unpredictability.",
    "exampleZh": "這幅畫在整齊和變幻間取得了平衡。"
  },
  {
    "id": 7516,
    "en": "planning",
    "kk": "[ˋplænɪŋ]",
    "zh": "n. 計劃，規劃；城鎮規劃管理，市政規劃；v. 計劃，籌劃；打算；設計；期望，預料（plan 的現在分詞）",
    "unit": 8,
    "example": "[n.] The trip needs careful planning.",
    "exampleZh": "這次旅行需要認真計劃。"
  },
  {
    "id": 7517,
    "en": "logicality",
    "kk": "[͵lɑdʒɪˋkæləti]",
    "zh": "n. 邏輯性，合理性；推理的正確性與有效性",
    "unit": 8,
    "example": "[n.] The logicality of models on evaluation.",
    "exampleZh": "評價模型的邏輯性。"
  },
  {
    "id": 7518,
    "en": "domain",
    "kk": "[doʊˋmeɪn]",
    "zh": "n. 領域，範圍；領土，勢力範圍；（因特網上的）域；（函數的）定義域；地產；【名】 （Domain）（英、法）多曼（人名）",
    "unit": 8,
    "example": "[n.] Physics used to be very much a male domain.",
    "exampleZh": "物理學曾在很大程度上是男人的領域。"
  },
  {
    "id": 7519,
    "en": "commonwealth",
    "kk": "[ˋkɑmənwelθ]",
    "zh": "n. 國家，獨立的政治共同體（尤指民主共和國）；英聯邦（the Commonwealth）；界，組織；（自願加入美國的）自治政區，自治政體（如波多黎各）；（美國的）州（尤指肯塔基、馬薩諸塞、賓夕法尼亞和弗吉尼亞）；（澳大利亞）聯邦；<古>公益",
    "unit": 8,
    "example": "[n.] The prime minister of Fiji has said Fiji is in no hurry to rejoin the Commonwealth.",
    "exampleZh": "斐濟總理稱斐濟並不急於重返英聯邦。"
  },
  {
    "id": 7520,
    "en": "imposition",
    "kk": "[͵ɪmpəˋzɪʃ(ə)n]",
    "zh": "n. （規章 、懲罰、稅種等的）實施；無理要求；（活字頁）拼版",
    "unit": 8,
    "example": "[n.] The natural world is the world before the imposition of the will of humanity.",
    "exampleZh": "所謂自然世界，指人類意志尚未介入之前的世界。"
  },
  {
    "id": 7521,
    "en": "implementation",
    "kk": "[͵ɪmpləmɛnˋteʃən]",
    "zh": "n. 履行；完成",
    "unit": 8,
    "example": "[n.] Have you done your implementation section yet?",
    "exampleZh": "你完成了你的實施部分了嗎？"
  },
  {
    "id": 7522,
    "en": "administering",
    "kk": "[ədˋmɪnɪstərɪŋ]",
    "zh": "n. 管理；實施，執行；v. （administer 的現在分詞/動名詞形式）管理，經營；實施，執行；給予，施用（藥物、治療等）；adj. 管理的；執行的",
    "unit": 8,
    "example": "[adj.] What if you could take just a pump that's capable of continuously administering insulin?",
    "exampleZh": "要是你只需使用一臺能夠持續輸注胰島素的泵，會怎麼樣呢？"
  },
  {
    "id": 7523,
    "en": "dissertation",
    "kk": "[͵dɪsərˋteɪʃ(ə)n]",
    "zh": "n. 專題論文，學位論文；學術演講",
    "unit": 8,
    "example": "[n.] I'm working my notes up into a dissertation.",
    "exampleZh": "我正在把我的筆記整理成一篇論文。"
  },
  {
    "id": 7524,
    "en": "volatile",
    "kk": "[ˋvɑlətəl]",
    "zh": "adj. 易揮發的；易變的",
    "unit": 8,
    "example": "[adj.] Petrol is a volatile substance.",
    "exampleZh": "汽油是揮發性物質。"
  },
  {
    "id": 7525,
    "en": "inflammable",
    "kk": "[ɪnˋflæməb(ə)l]",
    "zh": "adj. 易燃的；易怒的，易激動的；n. 易燃物（常作複數）",
    "unit": 8,
    "example": "[adj.] A highly inflammable liquid escaped into the drilling equipment.",
    "exampleZh": "一種高度易燃的液體漏進了鑽孔設備。"
  },
  {
    "id": 7526,
    "en": "flammable",
    "kk": "[ˋflæməb(ə)l]",
    "zh": "adj. 易燃的，可燃的，可燃性的；n. 易燃物（常用複數 flammables）",
    "unit": 8,
    "example": "[adj.] Aspen isn't very flammable, making for a slow-burning, non-fingertip-singeing matchstick.",
    "exampleZh": "山楊並不易燃，適合製作燃燒緩慢、不會燎到指尖的火柴。"
  },
  {
    "id": 7527,
    "en": "combustible",
    "kk": "[kəmˋbʌstəb(ə)l]",
    "zh": "adj. 易燃的，可燃的，燃燒性的；<喻>易激動的，一觸即發的；n. 可燃物，易燃物",
    "unit": 8,
    "example": "[adj.] When a petrol station burns down, you don't just want to know who dropped the cigarette; you want to know why all the combustible fumes escaped.",
    "exampleZh": "當一座加油站被燒燬，你不僅想知道是誰扔下了菸頭，你還想了解所有易燃氣體的洩露原因。"
  },
  {
    "id": 7528,
    "en": "eruptive",
    "kk": "[ɪˋrʌptɪv]",
    "zh": "adj. 噴發的，爆發的，火山噴發的；（醫學）發疹性的，出疹的",
    "unit": 8,
    "example": "[adj.] A pustule caused by smallpox or a similar eruptive disease.",
    "exampleZh": "痘皰由天花或類似的發疹性疾病導致的膿皰。"
  },
  {
    "id": 7529,
    "en": "culpability",
    "kk": "[͵kʌlpəˋbɪləti]",
    "zh": "n. 罪責，應受責備，有罪（性）",
    "unit": 8,
    "example": "[n.] He added there was clear culpability on the part of the government.",
    "exampleZh": "他補充說政府方面明顯負有責任。"
  },
  {
    "id": 7530,
    "en": "guiltiness",
    "kk": "[ˋɡɪltinɪs]",
    "zh": "n. 有罪；自覺有罪；愧疚",
    "unit": 8,
    "example": "[n.] He confessed to relieve the heavy guiltiness weighing on his conscience.",
    "exampleZh": "他坦白承認以減輕良心上沉重的內疚感。"
  },
  {
    "id": 7531,
    "en": "blameworthiness",
    "kk": "",
    "zh": "n. 可責備性；應受責備性",
    "unit": 8,
    "example": "[n.] The foundation of bearing joint and several liability by possible tortfeasors is no longer joint-negligence but the blameworthiness of subjective danger.",
    "exampleZh": "共同危險行為人承擔連帶責任的基礎不再是共同過失，而是客觀危險的可責難性。"
  },
  {
    "id": 7532,
    "en": "wrongdoing",
    "kk": "[ˋrɔŋduɪŋ]",
    "zh": "n. 壞事，不道德的行為，違法行為",
    "unit": 8,
    "example": "[n.] The bank hotly denies any wrongdoing.",
    "exampleZh": "該銀行強烈否認任何違規行為。"
  },
  {
    "id": 7533,
    "en": "wrongfulness",
    "kk": "",
    "zh": "n. 不法性",
    "unit": 8,
    "example": "[n.] The function of debate in the field of substantive wrongfulness is providing the base of explaining justification of action that keeps with constitutive elements of crime.",
    "exampleZh": "在實質違法性領域內爭論的功能是為符合構成要件行為的正當化提供解釋依據。"
  },
  {
    "id": 7534,
    "en": "pausing",
    "kk": "[ˋpɔzɪŋ]",
    "zh": "v. 暫停，停頓；躊躇（pause 的 ing 形式）；n. 暫停；中止（pause 的動名詞形式）",
    "unit": 8,
    "example": "[v.] These individual actions lead to collective costs. It's worth pausing for a moment to consider the consequences that inaction will bring.",
    "exampleZh": "個人行為將導致集體成本的產生。我們需要停下來思考不作為會帶來的後果。"
  },
  {
    "id": 7535,
    "en": "waiting",
    "kk": "[ˋweɪtɪŋ]",
    "zh": "n. 等，等待；服侍，侍候，當服務員；宮廷侍候；v. 等候；盼望，期待；推遲，延緩（wait 的現在分詞）；【名】 （waiting）（英、印、美）韋廷（人名）",
    "unit": 8,
    "example": "[n.] How long have you been waiting?",
    "exampleZh": "你等了多久了？"
  },
  {
    "id": 7536,
    "en": "dithering",
    "kk": "[ˋdɪðərɪŋ]",
    "zh": "n. 猶豫不決，遲疑不決；（計算機圖形學）抖動，抖色，混色；（數字音頻）抖動處理（通過加入低電平噪聲以降低量化誤差）；v. dither 的現在分詞：猶豫不決；對（數字音頻）進行抖動處理；混色，抖色",
    "unit": 8,
    "example": "[n.] She was dithering over what to wear.",
    "exampleZh": "她拿不定主意穿什麼好。"
  },
  {
    "id": 7537,
    "en": "fastener",
    "kk": "[ˋfæsnər]",
    "zh": "n. 扣件，緊固件，使繫牢之物（如鈕釦、拉鍊、鉤扣、夾子等）；繫緊者，扣牢東西的人",
    "unit": 8,
    "example": "[n.] This cool towel does not employ the use of any fastener.",
    "exampleZh": "這條涼感毛巾沒有使用任何緊固件。"
  },
  {
    "id": 7538,
    "en": "fastening",
    "kk": "[ˋfæsnɪŋ]",
    "zh": "n. 扣緊，緊固；緊固件，繫結物（如紐扣、拉鍊、搭扣、螺栓等）；v. fasten 的現在分詞",
    "unit": 8,
    "example": "[v.] Being solvent-free and non-hazardous, this adhesive makes fastening a wooden floor onto a damp sub-floor never smoother.",
    "exampleZh": "這款膠粘劑不含溶劑、無毒無害，能讓在潮溼基底上鋪設木地板的過程變得前所未有地輕鬆順暢。"
  },
  {
    "id": 7539,
    "en": "convener",
    "kk": "[kənˋvinər]",
    "zh": "n. （會議、委員會等的）召集人",
    "unit": 8,
    "example": "[n.] Control models on LD convener have been optimized and developed, to make control model suitable to new steel - making technics.",
    "exampleZh": "寶鋼持續優化改進、研發轉爐控制模型，使控制模型適合不斷變化了的鍊鋼生產工藝。"
  },
  {
    "id": 7540,
    "en": "comedienne",
    "kk": "[kə͵midiˋen]",
    "zh": "n. 喜劇女演員",
    "unit": 8,
    "example": "[n.] Comedienne Joan Rivers is a friend who was invited to the official Buckingham Palace birthday party on Wednesday.",
    "exampleZh": "喜劇演員瓊·裡夫斯也被邀請參加了上週三在白金漢宮舉行的官方生日宴會。"
  },
  {
    "id": 7541,
    "en": "humorist",
    "kk": "[ˋhjumərɪst]",
    "zh": "n. 幽默作家；富於幽默感的人",
    "unit": 8,
    "example": "[n.] Madge smiled at him. The man was evidently a humorist.",
    "exampleZh": "馬奇對他笑了笑，心想這個人實在是太幽默了。"
  },
  {
    "id": 7542,
    "en": "terms",
    "kk": "[tɝmz]",
    "zh": "n. 地位，關係；[法]條款；術語；措辭；價錢（term 的複數形式）；v. 把……稱為（term 的三單形式）",
    "unit": 8,
    "example": "[n.] I'm not doing it on your terms.",
    "exampleZh": "我不會按你的條件辦的。"
  },
  {
    "id": 7543,
    "en": "correlation",
    "kk": "[͵kɔrəˋleɪʃ(ə)n]",
    "zh": "n. 相互關係，關聯；相關量",
    "unit": 8,
    "example": "[n.] There is a direct correlation between exposure to sun and skin cancer.",
    "exampleZh": "皮膚暴露在太陽下與皮膚癌直接相關。"
  },
  {
    "id": 7544,
    "en": "comparability",
    "kk": "[͵kɑmpərəˋbɪləti]",
    "zh": "n. 可比性，可比較性，相似性；（會計）可比性原則",
    "unit": 8,
    "example": "[n.] Each group will have the same set of questions, in order to ensure comparability.",
    "exampleZh": "為確保可比性，每一組將得到一套同樣的問題。"
  },
  {
    "id": 7545,
    "en": "compatibility",
    "kk": "[kəm͵pætəˋbɪləti]",
    "zh": "n. 共存；和睦相處；（計算機設備的）兼容性",
    "unit": 8,
    "example": "[n.] You have compatibility across the board.",
    "exampleZh": "你擁有跨平臺的兼容性。"
  },
  {
    "id": 7546,
    "en": "voucher",
    "kk": "[ˋvaʊtʃɚ]",
    "zh": "n. 票券；證人",
    "unit": 8,
    "example": "[n.] This voucher can be redeemed at any of our branches.",
    "exampleZh": "這抵用券在我們的任一分支機構都可以使用。"
  },
  {
    "id": 7547,
    "en": "carnet",
    "kk": "[ˋkɑrne]",
    "zh": "n. 車票簿，票券簿；通關卡，通關單證冊（海關臨時進口或過境用，常作 ATA carnet）",
    "unit": 8,
    "example": "[n.] In addition, the new A4 format will enable the electronic transmission of the carnet in the future.",
    "exampleZh": "此外，採用新的A4版式，將來更可透過電子方式傳送單證冊。"
  },
  {
    "id": 7548,
    "en": "banknotes",
    "kk": "['bæŋknəuts]",
    "zh": "n. 鈔票，紙幣（banknote 的複數）",
    "unit": 8,
    "example": "[n.] The remaining partners in the law firm were still together, attached unwillingly at the hip by the bondage of mortgages and the banknotes.",
    "exampleZh": "律師事務所的其餘合夥人仍然在一起，被抵押貸款和鈔票的束縛不情願地綁在一起。"
  },
  {
    "id": 7549,
    "en": "notes",
    "kk": "[noʊts]",
    "zh": "n. （note 的複數）筆記；註釋，說明，備註；便條，短箋；紙幣，鈔票；（金融）票據，期票；音符；（Notes）（意）諾泰斯（人名）；v. （note 的第三人稱單數）指出，提到；注意到，察覺；記下",
    "unit": 8,
    "example": "[n.] She wasn't taking notes on the lecture.",
    "exampleZh": "她沒記講座筆記。"
  },
  {
    "id": 7550,
    "en": "flechette",
    "kk": "",
    "zh": "n. 鏢彈；[軍] 箭彈",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word flechette correctly.",
    "exampleZh": "他試著學習如何正確使用「flechette」這個單字。"
  },
  {
    "id": 7551,
    "en": "overpower",
    "kk": "[͵oʊvərˋpaʊər]",
    "zh": "vt. 以更強的力量、人數等制服、壓倒、克服；使無法忍受、難以承受；輕鬆擊敗、大勝；（味道、色彩、聲音等）壓過、蓋過",
    "unit": 8,
    "example": "[vt.] Sharks try to overpower opponents by forcing them to accept their solution to the conflict.",
    "exampleZh": "鯊魚試圖通過強迫對手接受自己的解決方案來壓倒對手。"
  },
  {
    "id": 7552,
    "en": "memorandum",
    "kk": "[͵meməˋrændəm]",
    "zh": "n. 備忘錄、公務便條、協議書",
    "unit": 8,
    "example": "[n.] Both corporate entities signed a formal memorandum of understanding to pursue joint research.",
    "exampleZh": "兩家企業實體簽署了正式的合作備忘錄，以共同開展聯合研究。"
  },
  {
    "id": 7553,
    "en": "decompose",
    "kk": "[͵dikəmˋpoʊz]",
    "zh": "v. （使）腐爛，腐敗；（使）分解；（數）分解",
    "unit": 8,
    "example": "[v.] As the waste materials decompose, they produce methane gas.",
    "exampleZh": "廢物腐爛時會產生沼氣。"
  },
  {
    "id": 7554,
    "en": "putrefy",
    "kk": "[ˋpjutrɪfaɪ]",
    "zh": "vi. 化膿，腐爛；墮落；vt. 腐爛，化膿；墮落",
    "unit": 8,
    "example": "[vi.] Undigested protein begins to rot and putrefy in your tummy.",
    "exampleZh": "沒有被消化的蛋白質會在你的胃裡開始腐爛變質。"
  },
  {
    "id": 7555,
    "en": "deputation",
    "kk": "[͵depjuˋteɪʃn]",
    "zh": "n. 代表團，代表；委任代理",
    "unit": 8,
    "example": "[n.] A deputation of elders from the village arrived headed by its chief.",
    "exampleZh": "村子裡的年老者代表團在村長的帶領下到了。"
  },
  {
    "id": 7556,
    "en": "delegacy",
    "kk": "[ˋdelɪɡəsɪ]",
    "zh": "n. 代表團；代表的地位；代表制度；代表的派遣",
    "unit": 8,
    "example": "[n.] On opening ceremony of the 10th Olympic Games, chinese delegacy enters.",
    "exampleZh": "第10屆奧運會開幕式上，中國代表團入場。"
  },
  {
    "id": 7557,
    "en": "legation",
    "kk": "[lɪˋɡeɪʃn]",
    "zh": "n. 公使館（由公使率領、級別低於大使館的外交使團）；公使館館舍；（舊義）使者的派遣",
    "unit": 8,
    "example": "[n.] The embassy was downgraded to a legation.",
    "exampleZh": "大使館降為公使館。"
  },
  {
    "id": 7558,
    "en": "delegates",
    "kk": "[ˋdelɪɡeɪts; ˋdelɪɡəts]",
    "zh": "n. 代表（delegate 的複數）；（計算機）委託（一種封裝方法引用的類型）；v. 選舉……為代表；委託（職責、權力等），授權，委派（delegate 的第三人稱單數）",
    "unit": 8,
    "example": "[n.] All delegates must wear a badge.",
    "exampleZh": "所有代表都要佩戴徽章。"
  },
  {
    "id": 7559,
    "en": "apostle",
    "kk": "[əˋpɑsl]",
    "zh": "n. 使徒（耶穌最初選立的十二門徒之一）；最初的傳道者；（某思想、事業等的）信徒，倡導者；（Apostle）人名；<英>阿波斯爾",
    "unit": 8,
    "example": "[n.] Her mother was a dedicated apostle of healthy eating.",
    "exampleZh": "她媽媽是健康飲食的忠實信徒。"
  },
  {
    "id": 7560,
    "en": "adherent",
    "kk": "[ədˋhɪrənt]",
    "zh": "n. 擁護者，追隨者，信徒；adj. 粘著的，附著的；遵守的，堅持的，忠實的（常與 to 連用）；（植物）聯生的，貼生的",
    "unit": 8,
    "example": "[adj.] The berries are bright red with adherent skins and a mild flavor.",
    "exampleZh": "漿果是明亮的紅色與粘附皮膚和中性的味道。"
  },
  {
    "id": 7561,
    "en": "believer",
    "kk": "[bəˋlivɚ]",
    "zh": "n. 信徒；信教者",
    "unit": 8,
    "example": "[n.] Our CEO is a firm believer in promoting transparent communication among teams.",
    "exampleZh": "我們的執行長堅信應該促進團隊之間坦誠透明的溝通。"
  },
  {
    "id": 7562,
    "en": "admirer",
    "kk": "[ədˋmaɪərər]",
    "zh": "n. 讚賞者，欽佩者，仰慕者；愛慕者，暗戀者；支持者，擁護者",
    "unit": 8,
    "example": "[n.] He was an admirer of her grandfather's paintings.",
    "exampleZh": "他是她祖父畫作的一個仰慕者。"
  },
  {
    "id": 7563,
    "en": "devotee",
    "kk": "[͵devəˋti]",
    "zh": "n. （常與 of 連用）信徒；愛好者，熱衷者",
    "unit": 8,
    "example": "[n.] Mr. Carpenter is obviously a devotee of Britten's music.",
    "exampleZh": "卡彭特先生顯然是布里頓音樂的熱衷者。"
  },
  {
    "id": 7564,
    "en": "anguish",
    "kk": "[ˋæŋɡwɪʃ]",
    "zh": "n. 劇痛，極度痛苦；v. 感到痛苦",
    "unit": 8,
    "example": "[n.] He groaned in anguish.",
    "exampleZh": "他痛苦地呻吟。"
  },
  {
    "id": 7565,
    "en": "suffering",
    "kk": "[ˋsʌfərɪŋ]",
    "zh": "n. （內心或肉體的）痛苦，問題；痛苦的感覺；v.  遭受；經歷；（因疾病、痛苦、悲傷等）受痛苦，受損害（suffer 的現在分詞形式）",
    "unit": 8,
    "example": "[n.] I hate to see animals suffering.",
    "exampleZh": "我不忍心看動物受苦。"
  },
  {
    "id": 7566,
    "en": "affliction",
    "kk": "[əˋflɪkʃ(ə)n]",
    "zh": "n. 苦難，苦惱，折磨；折磨人的事物，苦難的根源；病痛，疾病",
    "unit": 8,
    "example": "[n.] Remember my affliction and my wanderings, the wormwood, and the gall!",
    "exampleZh": "求你記念我的困苦和流浪，那苦艾與苦膽！"
  },
  {
    "id": 7567,
    "en": "condiment",
    "kk": "[ˋkɑndɪmənt]",
    "zh": "n. 調味品，佐料，調料",
    "unit": 8,
    "example": "[n.] Maybe we can treat it as condiment of our life.",
    "exampleZh": "也許我們可以把它當作我們生活的調味劑。"
  },
  {
    "id": 7568,
    "en": "flavouring",
    "kk": "[ˋfleɪvərɪŋ]",
    "zh": "n. 香料，調味料；v. 給……調味，加味（flavour 的 ing 形式）",
    "unit": 8,
    "example": "[n.] There is too much flavouring in the dish.",
    "exampleZh": "這個菜裡調味品加得太多了。"
  },
  {
    "id": 7569,
    "en": "gnome",
    "kk": "[noʊm]",
    "zh": "n. 童話或傳說中的土地神、地精、小矮人，常為蓄鬚戴尖帽、守護地下寶藏的想象生物；花園小矮人塑像；格言、箴言；GNOME",
    "unit": 8,
    "example": "[n.] GNOME has a new set of features for text controls.",
    "exampleZh": "GNOME 擁有一組新的用於文本控件的特性。"
  },
  {
    "id": 7570,
    "en": "goblin",
    "kk": "[ˋɡɑblɪn]",
    "zh": "n. （童話、民間傳說中的）小妖精；頑皮的醜小鬼",
    "unit": 8,
    "example": "[n.] It is believed that the 459 described species of goblin spiders are only about 20 percent of the total species.",
    "exampleZh": "人們認為，所描述的459種地精蜘蛛僅佔總種類的20%。"
  },
  {
    "id": 7571,
    "en": "hobgoblin",
    "kk": "[ˋhɑbɡɑblɪn]",
    "zh": "n. （民間傳說）妖怪，小妖精，搗蛋鬼；<喻>令人恐懼或煩惱的事物",
    "unit": 8,
    "example": "[n.] \"What will you give me,\" said the hobgoblin, \"to do it for you?\"",
    "exampleZh": "「如果我為你做這件事，你會給我什麼？」小矬子說。"
  },
  {
    "id": 7572,
    "en": "troll",
    "kk": "[troʊl]",
    "zh": "n. 巨怪，侏儒怪物；惡意挑釁的帖子，發挑釁帖子的人；曳繩釣魚法中用的曳繩或魚餌；用曳繩法釣魚；輪唱；v. 拖撈，拖釣；搜尋，尋找；隨便瀏覽，隨便翻翻；<英>閒逛，遊蕩；（無緣由地在網際網路上某處）留下侮辱性的訊息；快樂地唱",
    "unit": 8,
    "example": "[n.] I lock my office door and put up a Post-It note that says, \"Writing Troll – Get Back!\" which has a picture of a troll on it.",
    "exampleZh": "我鎖上辦公室的門，貼上一張便利貼，上面寫著「寫作巨魔——請回！」，便利貼上還印著一張巨魔的圖案。"
  },
  {
    "id": 7573,
    "en": "imp",
    "kk": "[ɪmp]",
    "zh": "n. 頑童，小淘氣；小孩；vt. 給……裝上翅膀；加強",
    "unit": 8,
    "example": "[n.] Import (imp) and export (exp) can be used to perform logical import and export.",
    "exampleZh": "Import (imp) 和 export (exp) 可用於執行邏輯導入和導出。"
  },
  {
    "id": 7574,
    "en": "elf",
    "kk": "[elf]",
    "zh": "n. （神話故事中的）小精靈，小妖精；【名】 （Elf）（芬、瑞典）埃爾夫（人名）",
    "unit": 8,
    "example": "[n.] In the film Elf, Buddy is a naive person who grows up with elves.",
    "exampleZh": "在電影《精靈》中，巴迪是一個和精靈們一同長大的天真角色。"
  },
  {
    "id": 7575,
    "en": "cuddle",
    "kk": "[ˋkʌdl]",
    "zh": "v. 摟抱，擁抱；緊靠…而坐(或躺)，依偎；<非正式>取悅，討好（cuddle up to）；n. 摟抱，擁抱",
    "unit": 8,
    "example": "[n.] It would have been nice to give him a cuddle and a kiss but there wasn't time.",
    "exampleZh": "當時要是擁抱他並吻他一下就好了，可惜時間來不及。"
  },
  {
    "id": 7576,
    "en": "grounds",
    "kk": "[ɡraʊndz]",
    "zh": "n. （常用複數）根據，理由，基礎；（建築物周圍的）庭園，場地；（特定用途）的場地（如運動場地、漁場）；渣滓，沉澱物（如咖啡渣、茶渣）；v. （ground 的第三人稱單數）把…放在地上；使（飛機等）停飛；把…建立在牢固的基礎上；給…上底色；使接地",
    "unit": 8,
    "example": "[n.] Searchlights raked the grounds.",
    "exampleZh": "探照燈從場地上掠過。"
  },
  {
    "id": 7577,
    "en": "parkland",
    "kk": "[ˋpɑrklænd]",
    "zh": "n. （不可數，亦可用複數）有樹叢的開闊草地，公園綠地，邸園；（生態、地理）稀樹草原",
    "unit": 8,
    "example": "[n.] The castle looks over private parkland.",
    "exampleZh": "這座城堡面朝私家綠地。"
  },
  {
    "id": 7578,
    "en": "endeavour",
    "kk": "[ɪnˋdevər]",
    "zh": "v. 努力，盡力；n. 努力，嘗試；事業，活動",
    "unit": 8,
    "example": "[n.] It was to some extent a collective endeavour, to which you all contributed.",
    "exampleZh": "某種程度上，這是一種集體性的努力，你們都對此做出了貢獻。"
  },
  {
    "id": 7579,
    "en": "banishment",
    "kk": "[ˋbænɪʃmənt]",
    "zh": "n. 流放，充軍；放逐",
    "unit": 8,
    "example": "[n.] It is banishment of the sorrow.",
    "exampleZh": "它是悲傷的放逐。"
  },
  {
    "id": 7580,
    "en": "expulsion",
    "kk": "[ɪkˋspʌlʃn]",
    "zh": "n. 驅逐，逐出；開除，除名；（醫學、物理）排出，擠出",
    "unit": 8,
    "example": "[n.] The penalty for these captured aid workers could range from expulsion to a jail term and death sentence.",
    "exampleZh": "這些被抓獲的援助人員的刑罰範圍包括從驅逐監禁到死刑不等。"
  },
  {
    "id": 7581,
    "en": "expatriation",
    "kk": "[eks͵peɪtrɪˋeɪʃən]",
    "zh": "n. 移居國外；流放國外；放棄國籍",
    "unit": 8,
    "example": "[n.] The graph below shows the top 10 countries with highest expatriation rates for doctors.",
    "exampleZh": "以下圖表顯示了移居國外醫生比率最高的10個國家。"
  },
  {
    "id": 7582,
    "en": "deportation",
    "kk": "[͵dipɔrˋteɪʃn]",
    "zh": "n. 驅逐出境",
    "unit": 8,
    "example": "[n.] Several of the asylum seekers now face deportation.",
    "exampleZh": "尋求避難的人中有幾個將遭遞解出境。"
  },
  {
    "id": 7583,
    "en": "eviction",
    "kk": "[ɪˋvɪkʃn]",
    "zh": "n. 驅逐，逐出，趕出，收回",
    "unit": 8,
    "example": "[n.] He was facing eviction, along with his wife and family.",
    "exampleZh": "他及其妻兒正面臨著被驅逐。"
  },
  {
    "id": 7584,
    "en": "uprooting",
    "kk": "[͵ʌpˋrutɪŋ]",
    "zh": "v. 根除，連根拔起；（使……）離開出生地（或定居處）（uproot 的現在分詞）",
    "unit": 8,
    "example": "[v.] If I accept the job, it will mean uprooting my family and moving to Italy.",
    "exampleZh": "如果我接受了這份工作，那將意味著我得舉家搬遷到意大利去。"
  },
  {
    "id": 7585,
    "en": "surfeit",
    "kk": "[ˋsɝfɪt]",
    "zh": "n. （正式）過量，過度，過剩（多與 of 連用）；飲食過度，暴飲暴食；（因飲食過度引起的）噁心，不適；vt. （正式，常與 with 連用）使飲食過度；使厭膩；使過度沉溺於；vi. （正式）飲食過度；過分放縱",
    "unit": 8,
    "example": "[n.] Rationing had put an end to a surfeit of biscuits long ago.",
    "exampleZh": "定量供應很久以前就結束了餅乾過剩的情況。"
  },
  {
    "id": 7586,
    "en": "overabundance",
    "kk": "[͵oʊvərəˋbʌndəns]",
    "zh": "n. 過多，過剩，過於豐富（常與 of 連用）",
    "unit": 8,
    "example": "[n.] While mineral deficiencies can limit the growth of plants, an overabundance of certain minerals can be toxic and can also limit growth.",
    "exampleZh": "雖然缺乏礦物質會限制植物的生長，但某些過量的礦物質會使植物中毒，同樣會限制植物的生長。"
  },
  {
    "id": 7587,
    "en": "superabundance",
    "kk": "[͵supərəˋbʌndəns]",
    "zh": "n. 過多；極多；多餘",
    "unit": 8,
    "example": "[n.] Our committee doesn't need any more help. We have superabundance of helpers.",
    "exampleZh": "我們委員會不需要任何其他幫助。給我們幫忙的人太多了。"
  },
  {
    "id": 7588,
    "en": "superfluity",
    "kk": "[͵supərˋfluəti]",
    "zh": "n. <正式> 過多，過剩；多餘之物，奢侈品",
    "unit": 8,
    "example": "[n.] The city has a superfluity of five-star hotels.",
    "exampleZh": "這個城市的五星級賓館太多了。"
  },
  {
    "id": 7589,
    "en": "oversufficiency",
    "kk": "[͵oʊvər səˋfɪʃənsi]",
    "zh": "n. 過多，過剩，極其充裕",
    "unit": 8,
    "example": "[n.] An oversufficiency of supply led to a sharp drop in market prices.",
    "exampleZh": "供過於求導致市場價格急劇下跌。"
  },
  {
    "id": 7590,
    "en": "womanly",
    "kk": "[ˋwʊmənli]",
    "zh": "adj. 有女人味兒的；女性特有的；適合女人的",
    "unit": 8,
    "example": "[adj.] These are strong trends—particularly in the powerful return of outerwear and a new focus on a more womanly and rounded figure.",
    "exampleZh": "這是強勁的潮流——尤其是外套的強勢迴歸，以及對更女性化、更豐滿身材的新關注。"
  },
  {
    "id": 7591,
    "en": "womanlike",
    "kk": "[ˋwʊmən͵laɪk]",
    "zh": "adj. 像女人的，女子似的；adv. 女人般地",
    "unit": 8,
    "example": "[adj.] He tried to learn how to use the word womanlike correctly.",
    "exampleZh": "他試著學習如何正確使用「womanlike」這個單字。"
  },
  {
    "id": 7592,
    "en": "ladylike",
    "kk": "[ˋleɪdilaɪk]",
    "zh": "adj. 如淑女的，嫻淑高貴的",
    "unit": 8,
    "example": "[adj.] Her language was not very ladylike.",
    "exampleZh": "她的語言不怎麼文雅。"
  },
  {
    "id": 7593,
    "en": "girlish",
    "kk": "[ˋɡɝlɪʃ]",
    "zh": "adj. 少女的；適於女子的；少女似的",
    "unit": 8,
    "example": "[adj.] She gave a little girlish giggle.",
    "exampleZh": "她發出一個少女似的咯咯笑聲。"
  },
  {
    "id": 7594,
    "en": "disgusting",
    "kk": "[dɪsˋɡʌstɪŋ]",
    "zh": "adj. 令人反感的，令人噁心的；令人吃驚的，讓人無法接受的；v. 使反感，使憎惡；使感到噁心（作嘔）（disgust 的現在分詞形式）",
    "unit": 8,
    "example": "[v.] My darling, it is delicious! Why do you find it disgusting?",
    "exampleZh": "親愛的，味道好極了！你為什麼覺得它噁心?"
  },
  {
    "id": 7595,
    "en": "revolting",
    "kk": "[rɪˋvoʊltɪŋ]",
    "zh": "adj. 令人討厭的，使人厭惡的；叛亂的，背叛的；v. 反叛，造反；使反感（revolt 的現在分詞）",
    "unit": 8,
    "example": "[adj.] Sire, the peasants are revolting.",
    "exampleZh": "陛下，農民們造反了。"
  },
  {
    "id": 7596,
    "en": "repellent",
    "kk": "[rɪˋpelənt]",
    "zh": "adj. 令人討厭的，令人厭惡的；排斥的，驅走的；防……的；n. 驅蟲劑，驅避劑；防水劑（或布）；排斥力，驅避力量",
    "unit": 8,
    "example": "[adj.] Customers can get washing powder or a mosquito repellent gift set.",
    "exampleZh": "顧客們可以得到洗衣粉或一個驅蚊禮品套裝。"
  },
  {
    "id": 7597,
    "en": "repulsive",
    "kk": "[rɪˋpʌlsɪv]",
    "zh": "adj. 令人厭惡的，使人反感的；（物理學）排斥的，推斥的；（較舊）冷淡的，拒人於千里之外的；（較舊）擊退的，驅退的",
    "unit": 8,
    "example": "[adj.] A statue which is aesthetically pleasing to one person, however, may be repulsive to another.",
    "exampleZh": "從審美角度令一個人滿意的一尊雕像可能令另一個人反感。"
  },
  {
    "id": 7598,
    "en": "repugnant",
    "kk": "[rɪˋpʌɡnənt]",
    "zh": "adj. 使人極度反感的，難以接受的；與……矛盾，與……不相一致",
    "unit": 8,
    "example": "[adj.] Disbelief in free will is not only repugnant, but it's also dangerous for society.",
    "exampleZh": "對自由意志的懷疑不僅僅讓人反感，對社會也很危險。"
  },
  {
    "id": 7599,
    "en": "abhorrent",
    "kk": "[əbˋhɔrənt]",
    "zh": "adj. <正式>令人憎惡的，可惡的，令人厭惡的；與…相悖的，與…格格不入的，與…不相容的（常後接 to）",
    "unit": 8,
    "example": "[adj.] Racism is abhorrent to a civilized society.",
    "exampleZh": "文明社會憎惡種族主義。"
  },
  {
    "id": 7600,
    "en": "amalgamate",
    "kk": "[əˋmælɡəmeɪt]",
    "zh": "vi. 合併，聯合；汞齊化（調製汞合金）；vt. 合併，聯合，混合；使（金屬）汞齊化",
    "unit": 8,
    "example": "[vt.] They decided to amalgamate the two schools.",
    "exampleZh": "他們決定將兩所學校合併。"
  },
  {
    "id": 7601,
    "en": "meld",
    "kk": "[meld]",
    "zh": "v. （使）合併，（使）混合，融合；（紙牌遊戲）攤出（計分牌），宣告（牌組）得分；n. 結合，融合，混合；（紙牌遊戲）攤出並計分的組合牌",
    "unit": 8,
    "example": "[v.] The key is to meld the old with the new.",
    "exampleZh": "關鍵是要講舊的和新的數據融合在一起。"
  },
  {
    "id": 7602,
    "en": "turnout",
    "kk": "[ˋtɝnaʊt]",
    "zh": "n. 到場人數，參加人數；（選舉的）投票人數，投票率；<美>公路避車道，臨時停車道；<美>岔道口；（鐵道）會讓點，道岔；裝束，穿著；全套車馬；（芭蕾）外開性",
    "unit": 8,
    "example": "[n.] Election officials predict they'll set a new turnout record for an off-year election in Washington state.",
    "exampleZh": "選舉官員預測，他們將在華盛頓州創下非大選年參加投票人數的新紀錄。"
  },
  {
    "id": 7603,
    "en": "glimmer",
    "kk": "[ˋɡlɪmər]",
    "zh": "n. 微光，閃光；少許，一絲（跡象，常作 a glimmer of something）；vi. 閃爍，發微光",
    "unit": 8,
    "example": "[n.] In the east there is the slightest glimmer of light.",
    "exampleZh": "東方有一絲閃爍的微光。"
  },
  {
    "id": 7604,
    "en": "glint",
    "kk": "[ɡlɪnt]",
    "zh": "v. 閃爍，閃閃發光；（光線）反射出閃光；使發光；（眼睛）發亮（流露出某種情緒）；n. 閃光，微光，閃爍；（眼神中的）光亮，神情；（雷達）角閃爍",
    "unit": 8,
    "example": "[n.] She saw a glint of silver in the grass.",
    "exampleZh": "她看到草地上銀光閃亮。"
  },
  {
    "id": 7605,
    "en": "shimmer",
    "kk": "[ˋʃɪmər]",
    "zh": "v. （使）閃爍；發閃爍的微光；n. 閃光，閃爍，微光；（化妝品）珠光，閃粉",
    "unit": 8,
    "example": "[n.] Some of the magnolia leaves have a bit of shimmer.",
    "exampleZh": "一些木蘭樹葉略帶光澤。"
  },
  {
    "id": 7606,
    "en": "whimper",
    "kk": "[ˋwɪmpər]",
    "zh": "v. 嗚咽，啜泣；啜泣著說；低聲抱怨；n. 嗚咽聲，啜泣聲；牢騷，怨聲；微弱的聲音；<喻>無力的收場，虎頭蛇尾",
    "unit": 8,
    "example": "[v.] If he starts to whimper, I'll just harmonize with him.",
    "exampleZh": "如果他開始嗚咽，我就給他配和聲。"
  },
  {
    "id": 7607,
    "en": "mewl",
    "kk": "[mjul]",
    "zh": "v. （尤指嬰兒）低聲哭泣，嗚咽，啜泣；（貓、鳥等）喵喵叫，咪咪叫；n. 嗚咽聲，低泣聲",
    "unit": 8,
    "example": "[n.] Nah, can ' t be. shiki ' s legs tremble. straining his ears, he hears the mewl of a distant cat.",
    "exampleZh": "不是，不可能的。 志貴的腿在發抖。 伸長了耳朵，他聽見了遙遠的貓的啜泣聲。"
  },
  {
    "id": 7608,
    "en": "bleat",
    "kk": "[blit]",
    "zh": "v. （羊、山羊等）咩咩叫，亦指（牛）哞哞叫；（人）低聲說話；低聲抱怨，發牢騷；n. （羊、山羊等的）咩咩聲，亦指（小牛的）哞聲；（人）微弱的叫聲，哀鳴；<非正式>抱怨",
    "unit": 8,
    "example": "[v.] All they can do is to bleat.",
    "exampleZh": "他們只會沒完沒了地瞎抱怨。"
  },
  {
    "id": 7609,
    "en": "obese",
    "kk": "[oʊˋbis]",
    "zh": "adj. 肥胖的，臃腫的",
    "unit": 8,
    "example": "[adj.] A BMI greater than 30 is considered obese.",
    "exampleZh": "體重指數超過30則被認為是肥胖。"
  },
  {
    "id": 7610,
    "en": "corpulent",
    "kk": "[ˋkɔrpjələnt]",
    "zh": "adj. <正式>肥胖的，臃腫的",
    "unit": 8,
    "example": "[adj.] This was a corpulent farmer.",
    "exampleZh": "這是個大塊頭的農夫。"
  },
  {
    "id": 7611,
    "en": "overweight",
    "kk": "[͵oʊvərˋweɪt]",
    "zh": "adj. 肥胖的；（物）超重的；v. 使負擔過重，使超載；n. 超重，過重",
    "unit": 8,
    "example": "[n.] She was only a few pounds overweight.",
    "exampleZh": "她只是超重幾磅而已。"
  },
  {
    "id": 7612,
    "en": "yoke",
    "kk": "[joʊk]",
    "zh": "n. 軛，牛軛；羈絆，枷鎖；（女服的）上衣抵肩，裙腰；（挑東西用的）軛狀扁擔；軛門；同軛的一對動物；<美>（飛機的）操縱桿；磁軛，軛鐵；<愛爾蘭，非正式>想不起名字的事物；v. （強行）使結合，使聯合；給……套上軛；【名】 （Yoke）（日）與家（姓氏）",
    "unit": 8,
    "example": "[n.] Can we harness them to the yoke?",
    "exampleZh": "我們能駕馭並管控它們嗎？"
  },
  {
    "id": 7613,
    "en": "impediment",
    "kk": "[ɪmˋpedɪmənt]",
    "zh": "n. 妨礙，障礙；口吃，結巴",
    "unit": 8,
    "example": "[n.] John's slight speech impediment made it difficult for his mother to understand him.",
    "exampleZh": "約翰輕微的口吃使他母親難以聽懂他。"
  },
  {
    "id": 7614,
    "en": "hindrance",
    "kk": "[ˋhɪndrəns]",
    "zh": "n. 造成妨礙的人（或事物）；阻礙，妨礙",
    "unit": 8,
    "example": "[n.] The higher rates have been a hindrance to economic recovery.",
    "exampleZh": "居高不下的稅率已經成為經濟復甦的阻礙物。"
  },
  {
    "id": 7615,
    "en": "encumbrance",
    "kk": "[ɪnˋkʌmbrəns]",
    "zh": "n. 累贅，負擔；妨害物；（法律）產權負擔，財產負擔（如抵押權、留置權等）",
    "unit": 8,
    "example": "[n.] I felt I was being an encumbrance to them.",
    "exampleZh": "我感到自己成了他們的累贅。"
  },
  {
    "id": 7616,
    "en": "heave",
    "kk": "[hiv]",
    "zh": "v. 用力舉起，使勁拖；（用力）扔，拋；起伏；發出（嘆息）；噁心，嘔吐；人頭攢動，擠滿（人）；用繩將（船）拉動（或往高處拖動）；n. （用力）舉，拉；（用力）扔；（劇烈的）起伏；（地質）平錯，隆起",
    "unit": 8,
    "example": "[n.] The greasy food made her stomach heave.",
    "exampleZh": "油膩膩的食物讓她胃裡噁心。"
  },
  {
    "id": 7617,
    "en": "hump",
    "kk": "[hʌmp]",
    "zh": "n. 小圓丘，崗，隆起；駝峰；（人的）駝背；惱怒，煩惱；v. <英>（費力地）扛，背；<冒犯>與（某人）性交；成隆起；<愛爾蘭，非正式>走開（hump off）",
    "unit": 8,
    "example": "[n.] Camels rebuild fat stores in their hump.",
    "exampleZh": "駱駝在自己的駝峰內重新貯備脂肪。"
  },
  {
    "id": 7618,
    "en": "codification",
    "kk": "[͵kɑdɪfɪˋkeɪʃn]",
    "zh": "n. 編纂，整理；法典編纂；法律彙編；法典",
    "unit": 8,
    "example": "[n.] The codification of the laws began in the 1840s.",
    "exampleZh": "這些法律的編纂始於19世紀40年代。"
  },
  {
    "id": 7619,
    "en": "ratification",
    "kk": "[͵rætɪfɪˋkeɪʃ(ə)n]",
    "zh": "n. 批准，認可",
    "unit": 8,
    "example": "[n.] We welcome this development and we look forward to early ratification of the treaty by China.",
    "exampleZh": "我們歡迎這一進展並期望中國早日批准本條約。"
  },
  {
    "id": 7620,
    "en": "jumble",
    "kk": "[ˋdʒʌmb(ə)l]",
    "zh": "n. 混亂；雜亂的一堆東西；（英）jumble sale：舊貨義賣，慈善義賣；vi. 混雜，攙雜；vt. 使混亂，搞亂",
    "unit": 8,
    "example": "[n.] The essay was a meaningless jumble of ideas.",
    "exampleZh": "這篇散文思想混亂，使人不知所云。"
  },
  {
    "id": 7621,
    "en": "clutter",
    "kk": "[ˋklʌtər]",
    "zh": "n. 雜亂的東西；雜亂；v. 亂堆，塞滿；使（腦子裡）塞滿（亂七八糟的事）；【名】 （Clutter）（英）克拉特（人名）",
    "unit": 8,
    "example": "[n.] There was a clutter of bottles and tubes on the shelf.",
    "exampleZh": "架子上胡亂堆滿了瓶子和管子。"
  },
  {
    "id": 7622,
    "en": "rummage",
    "kk": "[ˋrʌmɪdʒ]",
    "zh": "v. 翻找，亂翻；（海關人員）徹底檢查（船隻）；n. 翻尋；捐贈品，舊雜貨；（海關人員對船隻的）徹底檢查",
    "unit": 8,
    "example": "[v.] They rummage through piles of secondhand clothes for something that fits.",
    "exampleZh": "他們在成堆的二手衣服中翻找合身的衣服。"
  },
  {
    "id": 7623,
    "en": "unmarried",
    "kk": "[͵ʌnˋmærid]",
    "zh": "adj. 未婚的，單身的，獨身的；v. 離婚，解除婚姻（unmarry 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] He is forty two years old, unmarried, and he lives in a big wooden house on Moonlight Road.",
    "exampleZh": "他42歲，未婚，住在月光路上的一所大木屋裡。"
  },
  {
    "id": 7624,
    "en": "spinster",
    "kk": "[ˋspɪnstər]",
    "zh": "n. （舊時用語，常含貶義）未婚女人，老姑娘（尤指中老年女性）；（舊義）紡紗女",
    "unit": 8,
    "example": "[n.] In 1700, a spinster with a pedal-driven spinning wheel might take 200 hours to produce a pound of yarn.",
    "exampleZh": "在1700年，一位擁有踏板紡車的未婚女性可能需要200小時才能紡出一磅紗線。"
  },
  {
    "id": 7625,
    "en": "unwed",
    "kk": "[͵ʌnˋwed]",
    "zh": "adj. 未婚的，沒有結婚的",
    "unit": 8,
    "example": "[adj.] Census data show that the number of unwed couples living together rose sharply last year.",
    "exampleZh": "統計數據顯示，去年未婚同居的人的數量急劇上升。"
  },
  {
    "id": 7626,
    "en": "unwedded",
    "kk": "",
    "zh": "adj. 未婚的，未結婚的：尚未結婚或沒有結婚的。",
    "unit": 8,
    "example": "[adj.] He tried to learn how to use the word unwedded correctly.",
    "exampleZh": "他試著學習如何正確使用「unwedded」這個單字。"
  },
  {
    "id": 7627,
    "en": "husbandless",
    "kk": "",
    "zh": "n. 無丈夫的（husband 的變體）",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word husbandless correctly.",
    "exampleZh": "他試著學習如何正確使用「husbandless」這個單字。"
  },
  {
    "id": 7628,
    "en": "muster",
    "kk": "[ˋmʌstər]",
    "zh": "v. 尋求，聚集（支持、勇氣等）；召集，（尤指士兵）集合；<澳新>趕攏（牛、羊）；n. （尤指視察、檢閱或演習時部隊的）集合，集結；點名冊（muster roll 的簡稱）；<澳新>趕攏（家畜）；<澳新，非正式>（參加集會的）人數；【名】 （Muster）（德、羅）穆斯特爾，（英）馬斯特（人名）",
    "unit": 8,
    "example": "[v.] Shall I muster the crew on the deck?",
    "exampleZh": "我必須召集船員在甲板集合嗎？"
  },
  {
    "id": 7629,
    "en": "jeopardy",
    "kk": "[ˋdʒepərdi]",
    "zh": "n. 危險，風險；（刑事案件中被告的）危險處境",
    "unit": 8,
    "example": "[n.] The study warns that it is teenagers who engage in all three of these practices in the extreme who are truly in jeopardy.",
    "exampleZh": "該項研究警告稱，真正處於危險境地的是那些採取這三種極端行動的青少年。"
  },
  {
    "id": 7630,
    "en": "jetty",
    "kk": "[ˋdʒeti]",
    "zh": "n. 碼頭，突堤碼頭；防波堤；adj. 烏黑髮亮的，煤玉似的；vi. 伸出，突出",
    "unit": 8,
    "example": "[n.] Kyla drove us down the river a few miles until we saw a hut and a wooden jetty.",
    "exampleZh": "凱拉開車送我們沿河走了幾英里，直到我們看到一幢小屋和一個木碼頭。"
  },
  {
    "id": 7631,
    "en": "quay",
    "kk": "[ki]",
    "zh": "n. 碼頭；（Quay）人名（英、德、葡、荷）誇伊",
    "unit": 8,
    "example": "[n.] A crowd was waiting on the quay.",
    "exampleZh": "有一群人在碼頭上等著。"
  },
  {
    "id": 7632,
    "en": "landing",
    "kk": "[ˋlændɪŋ]",
    "zh": "n. 降落、著落",
    "unit": 8,
    "example": "[n.] The landing was skilfully executed.",
    "exampleZh": "著陸熟練地完成了。"
  },
  {
    "id": 7633,
    "en": "nip",
    "kk": "[nɪp]",
    "zh": "v. 啃咬，掐；（寒氣、風等）傷害；掐去，夾走（nip sth. off）；<英，非正式>快走；<美，非正式>悄悄地拿；一小口一小口地抿酒；（以微弱優勢）小勝；n. 輕咬，掐；寒冷；<非正式>一小口，一抿（烈酒）；一小瓶酒；<非正式>日本佬；【名】 （Nip）（中）聶（廣東話·威妥瑪）（人名）",
    "unit": 8,
    "example": "[n.] There was a real nip in the air.",
    "exampleZh": "空中有一股刺骨的寒氣。"
  },
  {
    "id": 7634,
    "en": "tweak",
    "kk": "[twik]",
    "zh": "v. 扭，擰；稍稍調整（機器、系統等）；輕微拉傷，輕微扭傷；<美>批評，取笑；<非正式>激動，興奮（尤指在安非他命等興奮劑作用下）；n. 扭，擰；微調，稍微調整；輕微的拉傷（或扭傷）",
    "unit": 8,
    "example": "[n.] She gave his ear a tweak.",
    "exampleZh": "她擰了一下他的耳朵。"
  },
  {
    "id": 7635,
    "en": "compress",
    "kk": "[kəmˋpres]",
    "zh": "v. （使）壓緊，壓縮；精簡，濃縮；壓縮（文件）；縮短（時間）；n. （止血、減痛等的）敷布，壓布",
    "unit": 8,
    "example": "[v.] This system uses powerful microchips to compress huge amounts of data onto a CD-ROM.",
    "exampleZh": "這一系統使用功能強大的微芯片來把大量數據壓縮到CD-ROM上。"
  },
  {
    "id": 7636,
    "en": "quarry",
    "kk": "[ˋkwɑri]",
    "zh": "n. 採石場，礦場；獵物，被迫捕的目標；來源，源泉；（Quarry）誇裡（人名，英國姓氏）；vi. 費力地找，翻找；vt. 開採（石料或礦物），挖出；努力挖掘",
    "unit": 8,
    "example": "[n.] The hunters lost sight of their quarry in the forest.",
    "exampleZh": "獵人在森林裡跟丟了獵物。"
  },
  {
    "id": 7637,
    "en": "dupe",
    "kk": "[dup]",
    "zh": "n. 上當者，易受騙的人；vt. 欺騙，愚弄；重複，複製（等於 duplicate）",
    "unit": 8,
    "example": "[vt.] How to dupe the error.",
    "exampleZh": "怎樣處理錯誤。"
  },
  {
    "id": 7638,
    "en": "silhouette",
    "kk": "[͵sɪluˋet]",
    "zh": "n. （淺色背景襯托出的）暗色輪廓；剪影，（尤指人臉的）側影；（人的）體形，（事物的）形狀；v. 把……畫成黑色輪廓像，使現出影像（或輪廓）；【名】 （Silhouette）（法）西盧埃特（人名）",
    "unit": 8,
    "example": "[n.] The mountains stood out in silhouette.",
    "exampleZh": "群山的輪廓襯托了出來。"
  },
  {
    "id": 7639,
    "en": "contour",
    "kk": "[ˋkɑntʊr]",
    "zh": "n. 輪廓，外形，周線；等高線，恆值線（contour line）；（音調或聲調的）升降曲線，變化方式；概要；v. 使與某輪廓吻合；在（地圖，圖表上）標等高線；（公路，鐵路）循地形輪廓（尤指循等高線）而行；【名】 （Contour）（法）孔圖爾（人名）",
    "unit": 8,
    "example": "[n.] The contour plot looks like that.",
    "exampleZh": "等高線圖看起來是這樣的。"
  },
  {
    "id": 7640,
    "en": "chances",
    "kk": "[ˋtʃænsɪz]",
    "zh": "n. 機會；[數]機遇（chance 的複數形式）；可能性；vi. 偶然發生，碰巧（chance 的三單形式）；vt. 冒……的險（chance 的三單形式）",
    "unit": 8,
    "example": "[n.] I rated my chances as zero.",
    "exampleZh": "我覺得我根本沒有機會。"
  },
  {
    "id": 7641,
    "en": "heartbeat",
    "kk": "[ˋhɑrtbit]",
    "zh": "n. 心跳、心搏；瞬間、核心",
    "unit": 8,
    "example": "[n.] The smartwatch accurately monitors your heartbeat during high-intensity cardiovascular exercise.",
    "exampleZh": "這款智慧手錶能在高強度心肺運動期間精準監測您的心跳。"
  },
  {
    "id": 7642,
    "en": "pulsation",
    "kk": "[pʌlˋseɪʃn]",
    "zh": "n. （醫學）搏動，悸動，跳動；（物理、工程）脈動，脈衝，波動；震動，顫動",
    "unit": 8,
    "example": "[n.] Usually, at this point, a pulsation may be felt at the end of the spine.",
    "exampleZh": "這時通常會在脊椎尾部感到一種搏動。"
  },
  {
    "id": 7643,
    "en": "pulsing",
    "kk": "[ˋpʌlsɪŋ]",
    "zh": "v. 搏動，有節奏地跳動；使跳動；發出脈衝（pulse 的現在分詞）；adj. 脈動的，搏動的；脈衝的；n. 脈動；脈衝發生（pulse 的動名詞）",
    "unit": 8,
    "example": "[n.] It almost feels like the text is pulsing.",
    "exampleZh": "幾乎能感覺到文本的脈動。"
  },
  {
    "id": 7644,
    "en": "throbbing",
    "kk": "[θrɑbɪŋ]",
    "zh": "adj. 悸動的，跳動的，搏動的；n. 悸動，跳動，搏動，抽痛；一陣激動（或情感）；機器、引擎等發出的有節奏的震動（聲）；v. 跳動，悸動；有規律地震動（throb 的 ing 形式，即現在分詞/動名詞）",
    "unit": 8,
    "example": "[n.] The blood was throbbing in my veins.",
    "exampleZh": "血液在我的靜脈中有節律地湧動著。"
  },
  {
    "id": 7645,
    "en": "err",
    "kk": "[er]",
    "zh": "v. 犯錯，出錯；作惡，犯罪",
    "unit": 8,
    "example": "[v.] You should try and err.",
    "exampleZh": "你應當勇於嘗試，在試錯中學習。"
  },
  {
    "id": 7646,
    "en": "misjudge",
    "kk": "[͵mɪsˋdʒʌdʒ]",
    "zh": "vi. 判斷錯，判斷錯誤；vt. 對（人或事物）判斷錯誤，誤判",
    "unit": 8,
    "example": "[vt.] It was now his turn to misjudge his opponent.",
    "exampleZh": "現在輪到他低估自己的對手了。"
  },
  {
    "id": 7647,
    "en": "miscalculate",
    "kk": "[͵mɪsˋkælkjuleɪt]",
    "zh": "vt. 算錯；估計錯誤；vi. 算錯；判斷錯誤",
    "unit": 8,
    "example": "[vi.] The second is that the Germans miscalculate.",
    "exampleZh": "其二就是德國人判斷錯誤。"
  },
  {
    "id": 7648,
    "en": "directorate",
    "kk": "[dəˋrektərət͵daɪˋrektərət]",
    "zh": "n. 董事會，理事會；（政府或大型機構的）專門部門，多譯作司/局/署/處，機構名稱中也常譯作指揮部",
    "unit": 8,
    "example": "[n.] The bank will be managed by a directorate of around five professional bankers.",
    "exampleZh": "該銀行將由五名左右的職業銀行家組成的董事會管理。"
  },
  {
    "id": 7649,
    "en": "lozenge",
    "kk": "[ˋlɑzɪndʒ]",
    "zh": "n. 菱形；錠劑；潤喉糖，潤喉含片；菱形窗玻璃",
    "unit": 8,
    "example": "[n.] As a preventive, take 2 teaspoons daily or 1 lozenge twice a day.",
    "exampleZh": "作為預防，每次服用1茶匙糖漿或1粒錠劑，每天2次。"
  },
  {
    "id": 7650,
    "en": "pastille",
    "kk": "[pæˋstil]",
    "zh": "n. 錠劑，含片，糖錠；薰香錠，香錠；粉筆；粉筆畫（等於 pastil）",
    "unit": 8,
    "example": "[n.] A small, circular medicinal lozenge; a pastille.",
    "exampleZh": "片劑，錠劑圓型的小藥錠，錠劑。"
  },
  {
    "id": 7651,
    "en": "pilule",
    "kk": "[ˋpɪljʊl]",
    "zh": "n. 小丸藥，小藥丸",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word pilule correctly.",
    "exampleZh": "他試著學習如何正確使用「pilule」這個單字。"
  },
  {
    "id": 7652,
    "en": "lucidity",
    "kk": "[luˋsɪdəti]",
    "zh": "n. 明朗，明晰，清晰（指表達或思路清楚易懂）；神志清醒，清醒度；清澈，透明",
    "unit": 8,
    "example": "[n.] The pain had lessened in the night, but so had his lucidity.",
    "exampleZh": "晚上他疼痛減輕，但神志不那麼清醒了。"
  },
  {
    "id": 7653,
    "en": "lucidness",
    "kk": "[ˋlʊsɪdnɪs]",
    "zh": "n. 透明；清澄；易懂；肉眼可見",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word lucidness correctly.",
    "exampleZh": "他試著學習如何正確使用「lucidness」這個單字。"
  },
  {
    "id": 7654,
    "en": "clearness",
    "kk": "[ˋklɪrnəs]",
    "zh": "n. 明白，清楚，清晰；清澈；晴朗；明亮",
    "unit": 8,
    "example": "[n.] Careful wording AIDS clearness.",
    "exampleZh": "措辭謹慎可使意義清楚。"
  },
  {
    "id": 7655,
    "en": "perspicuity",
    "kk": "[͵pɝspɪˋkjuəti]",
    "zh": "n. （語言、文章、表達等的）明晰；簡明",
    "unit": 8,
    "example": "[n.] Perspicuity (Clarity) of General Revelation.",
    "exampleZh": "普遍啟示的清晰性。"
  },
  {
    "id": 7656,
    "en": "intelligibility",
    "kk": "[ɪn͵telɪdʒəˋbɪləti]",
    "zh": "n. 可理解性，明白易懂；（通信、聲學、語言學）可懂度，清晰度；（罕見用法）可理解的事物",
    "unit": 8,
    "example": "[n.] It may include minor lapses, or minor difficulties with pronunciation or intonation patterns, which do not affect overall intelligibility.",
    "exampleZh": "它可能包括髮音或語調模式上的小錯誤或小困難，這些小錯誤並不影響整體的可理解性。"
  },
  {
    "id": 7657,
    "en": "comprehensibility",
    "kk": "[͵kɑmprɪ͵hensəˋbɪləti]",
    "zh": "n. 可瞭解性；能理解",
    "unit": 8,
    "example": "[n.] The eternal mystery of the world is its comprehensibility.",
    "exampleZh": "這世界永恆的謎題，是它的可解。"
  },
  {
    "id": 7658,
    "en": "clearing",
    "kk": "[ˋklɪrɪŋ]",
    "zh": "n. 清除，清理；林中空地；（英國）大學預科；結算；v. 澄清，放晴（clear 的現在分詞形式）",
    "unit": 8,
    "example": "[n.] Let's get busy with the clearing up.",
    "exampleZh": "我們開始清理吧。"
  },
  {
    "id": 7659,
    "en": "demolition",
    "kk": "[͵deməˋlɪʃ(ə)n]",
    "zh": "n. （故意的）拆毀，毀壞；<非正式>大敗",
    "unit": 8,
    "example": "[n.] The house was rescued from demolition.",
    "exampleZh": "這所房子保住了，可以不拆。"
  },
  {
    "id": 7660,
    "en": "evacuation",
    "kk": "[ɪ͵vækjuˋeɪʃ(ə)n]",
    "zh": "n. 撤離，疏散；（糞便等的）排洩；排空，清除",
    "unit": 8,
    "example": "[n.] Each house had a helipad for a fast evacuation.",
    "exampleZh": "每所房子都有一個供快速撤離用的直升機升降坪。"
  },
  {
    "id": 7661,
    "en": "serendipity",
    "kk": "[͵serənˋdɪpəti]",
    "zh": "n. 意外發現美好事物的運氣，機緣巧合",
    "unit": 8,
    "example": "[n.] Some of the best effects in my garden have been the result of serendipity.",
    "exampleZh": "我花園裡最珍貴的幾件物品是機緣巧合之下意外所得。"
  },
  {
    "id": 7662,
    "en": "narration",
    "kk": "[nɛˋreʃən]",
    "zh": "n. 敘述；講述",
    "unit": 8,
    "example": "[n.] Its story-within-a-story method of narration is confusing.",
    "exampleZh": "它那故事裡套故事的敘述方法令人迷惑。"
  },
  {
    "id": 7663,
    "en": "accompaniment",
    "kk": "[əˋkʌmpənimənt]",
    "zh": "n. 伴奏；伴隨物（尤指佐餐食品）；伴隨發生的事（常用 to the accompaniment of 表示“在…的伴隨下；在…的伴奏下”）",
    "unit": 8,
    "example": "[n.] They performed to the accompaniment of guitars.",
    "exampleZh": "他們在吉他的伴奏下表演。"
  },
  {
    "id": 7664,
    "en": "adjunct",
    "kk": "[ˋædʒʌŋkt]",
    "zh": "n. 附屬物；附加語，修飾語；幫手，助手；（某些系統語法用語）副詞狀語；adj. 附屬的，附加的；（大學教師職位）臨時的，副的",
    "unit": 8,
    "example": "[n.] I'm a senior fellow adjunct lecturer in Public Policy at the Kennedy School of Government, Harvard University.",
    "exampleZh": "我是哈佛大學肯尼迪政府學院公共政策方向的高級研究員兼兼職講師。"
  },
  {
    "id": 7665,
    "en": "narcissism",
    "kk": "[ˋnɑrsɪsɪzəm]",
    "zh": "n. 自戀，自我陶醉；（心理學）以自我為中心、渴望被崇拜且常缺乏共情的人格特質或心理現象",
    "unit": 8,
    "example": "[n.] Those who suffer from narcissism become self-absorbed or chronic show-offs.",
    "exampleZh": "被自戀症折磨的人會變得只專注於自己的事情，或者不斷地自我炫耀。"
  },
  {
    "id": 7666,
    "en": "conceitedness",
    "kk": "[kən'sitidnis]",
    "zh": "n. 自負",
    "unit": 8,
    "example": "[n.] Arrogance is followed by destruction, and unbridled conceitedness by depravity.",
    "exampleZh": "自負使人毀滅，狂妄讓人墮落。"
  },
  {
    "id": 7667,
    "en": "viewing",
    "kk": "[ˋvjuɪŋ]",
    "zh": "n. 察看，觀看；收看（電視）；親眼目睹的機會（尤指觀看藝術作品）；（電影等的）放映，展映；（葬禮中的）瞻仰遺容；v. 觀察，查看；考慮，估量（view 的現在分詞）",
    "unit": 8,
    "example": "[n.] The programme made compulsive viewing.",
    "exampleZh": "這節目引人入勝，收看起來欲罷不能。"
  },
  {
    "id": 7668,
    "en": "refutation",
    "kk": "[͵refjuˋteɪʃ(ə)n]",
    "zh": "n. （對觀點、指責或理論的）駁斥，反駁",
    "unit": 8,
    "example": "[n.] He prepared a complete refutation of the Republicans' most serious charges.",
    "exampleZh": "他準備全面反駁共和黨人對他最嚴重的指控。"
  },
  {
    "id": 7669,
    "en": "rebuttal",
    "kk": "[rɪˋbʌt(ə)l]",
    "zh": "n. （較正式）反駁，辯駁；（法律）反證",
    "unit": 8,
    "example": "[n.] The accusations met with a firm rebuttal.",
    "exampleZh": "這些指控受到了堅決的駁斥。"
  },
  {
    "id": 7670,
    "en": "countering",
    "kk": "[ˋkaʊntərɪŋ]",
    "zh": "n. counter 的動名詞：反擊，打擊，應對；v. counter 的現在分詞：反擊，應對，抵制",
    "unit": 8,
    "example": "[n.] In Ireland, Guidelines on Countering Bullying Behaviour in Post-Primary Schools was published in 1993.",
    "exampleZh": "在愛爾蘭，1993年發表了《關於中學制止欺凌行為準則》。"
  },
  {
    "id": 7671,
    "en": "counterstatement",
    "kk": "",
    "zh": "n. 抗辯書；反駁聲明",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word counterstatement correctly.",
    "exampleZh": "他試著學習如何正確使用「counterstatement」這個單字。"
  },
  {
    "id": 7672,
    "en": "align",
    "kk": "[əˋlaɪn]",
    "zh": "v. 排成直線；使結盟",
    "unit": 8,
    "example": "[v.] A tripod will be useful to align and steady the camera.",
    "exampleZh": "三腳架會有助於對齊穩住照相機。"
  },
  {
    "id": 7673,
    "en": "dishonesty",
    "kk": "[dɪsˋɑnɪsti]",
    "zh": "n. 不誠實，欺詐，不正直；不誠實行為，欺詐行為",
    "unit": 8,
    "example": "[n.] We had to fire him for dishonesty.",
    "exampleZh": "他不誠實，我們不得不開除他。"
  },
  {
    "id": 7674,
    "en": "unscrupulousness",
    "kk": "[ʌnˋskrupjələsnəs]",
    "zh": "n. 狂妄；不擇手段",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word unscrupulousness correctly.",
    "exampleZh": "他試著學習如何正確使用「unscrupulousness」這個單字。"
  },
  {
    "id": 7675,
    "en": "deceit",
    "kk": "[dəˋsit]",
    "zh": "n. 欺騙；欺詐",
    "unit": 8,
    "example": "[n.] He was accused of lies and deceit.",
    "exampleZh": "他被指控撒謊和欺詐。"
  },
  {
    "id": 7676,
    "en": "deception",
    "kk": "[dɪˋsepʃ(ə)n]",
    "zh": "n. 欺騙，矇騙；騙術，騙局",
    "unit": 8,
    "example": "[n.] This is deception writ large.",
    "exampleZh": "這是明目張膽的欺騙。"
  },
  {
    "id": 7677,
    "en": "duplicity",
    "kk": "[duˋplɪsəti]",
    "zh": "n. （正式，通常不可數）口是心非，表裡不一，不誠實",
    "unit": 8,
    "example": "[n.] Malcolm believed he was guilty of duplicity in his private dealings.",
    "exampleZh": "馬爾科姆相信他在為其私底下行為的奸詐內疚著。"
  },
  {
    "id": 7678,
    "en": "penfriend",
    "kk": "[ˋpenfrend]",
    "zh": "n. 筆友",
    "unit": 8,
    "example": "[n.] Looking for a Japanese penfriend for my language classes.",
    "exampleZh": "為我的語言班尋找一位日本的筆友。"
  },
  {
    "id": 7679,
    "en": "communicator",
    "kk": "[kəˋmjunɪkeɪtər]",
    "zh": "n. 溝通者，交流者，善於溝通的人；通信器，通信設備，發報機；通信員，傳令員",
    "unit": 8,
    "example": "[n.] The ideal candidate will be an effective communicator.",
    "exampleZh": "理想的候選人定要是善於溝通的人。"
  },
  {
    "id": 7680,
    "en": "trustworthiness",
    "kk": "[ˋtrʌstwɝðinəs]",
    "zh": "n. 可信賴；確實性",
    "unit": 8,
    "example": "[n.] If something is probable, you mean that you can trust it, so probability means trustworthiness.",
    "exampleZh": "如果有什麼是很可能的，你的意思是你可以信賴它，所以可能性意味著可信賴度。"
  },
  {
    "id": 7681,
    "en": "reliability",
    "kk": "[rɪ͵laɪəˋbɪləti]",
    "zh": "n. 可靠性；可信度",
    "unit": 8,
    "example": "[n.] The incident cast doubt on her motives and reliability.",
    "exampleZh": "這件事使人懷疑她有何動機，以及她是否可靠。"
  },
  {
    "id": 7682,
    "en": "dependability",
    "kk": "[dɪ͵pendəˋbɪləti]",
    "zh": "n. 可靠性，可信任；（計算機科學技術）可信性，可恃性",
    "unit": 8,
    "example": "[n.] Blue can also symbolize trust and dependability.",
    "exampleZh": "藍色還可以象徵信任和可靠性。"
  },
  {
    "id": 7683,
    "en": "disintegrate",
    "kk": "[dɪsˋɪntɪɡreɪt]",
    "zh": "v. 崩潰，瓦解；破裂，粉碎；蛻變，衰變",
    "unit": 8,
    "example": "[v.] During October 1918 the Austro-Hungarian Empire began to disintegrate.",
    "exampleZh": "1918年10月期間奧匈帝國開始瓦解。"
  },
  {
    "id": 7684,
    "en": "remnant",
    "kk": "[ˋremnənt]",
    "zh": "n. 殘餘部分，殘跡；布頭，零頭布料；（基督教神學）餘剩民；adj. 殘餘的，剩餘的；【名】 （Remnant）（英）雷姆南特（人名）",
    "unit": 8,
    "example": "[n.] It's not a remnant of some huge population that is dwindled in the last few hundred years for some reason.",
    "exampleZh": "它並不是由於某種原因而在過去幾百年裡減少的龐大人口的殘餘。"
  },
  {
    "id": 7685,
    "en": "wholeheartedness",
    "kk": "",
    "zh": "n. 全神貫注；全心全意",
    "unit": 8,
    "example": "[n.] On one way of developing the integrated-self view of integrity, wholeheartedness is equated with integrity.",
    "exampleZh": "從一種培養整合的自我觀下的正直心觀的方法來說，全心全意等同於正直心。"
  },
  {
    "id": 7686,
    "en": "insufficiency",
    "kk": "[͵ɪnsəˋfɪʃənsi]",
    "zh": "n. 不足，不充分，缺乏；（醫學）機能不全，功能不全；不適當",
    "unit": 8,
    "example": "[n.] Fear arises out of this inner insufficiency, poverty and emptiness.",
    "exampleZh": "恐懼來源於這種內在的不足，貧乏和空虛。"
  },
  {
    "id": 7687,
    "en": "dearth",
    "kk": "[dɝθ]",
    "zh": "n. 缺乏；<古>食物短缺，饑荒；【名】 （Dearth）（英）迪爾思（人名）",
    "unit": 8,
    "example": "[n.] There was a dearth of reliable information on the subject.",
    "exampleZh": "關於這個課題缺乏可靠資料。"
  },
  {
    "id": 7688,
    "en": "inadequacy",
    "kk": "[ɪnˋædɪkwəsi]",
    "zh": "n. 不充分，不足；不勝任，缺乏信心；弱點，某事物的缺乏",
    "unit": 8,
    "example": "[n.] Losing gives them a sense of weakness, inadequacy and failure.",
    "exampleZh": "失敗則給他們帶來一種軟弱、不足和失敗的感覺。"
  },
  {
    "id": 7689,
    "en": "sinking",
    "kk": "[ˋsɪŋkɪŋ]",
    "zh": "adj. （情緒突然）頹喪的，抑鬱的；下沉的；n. 沉沒；v. 使下沉，下沉；下去，下降；減少（sink 的現在分詞）",
    "unit": 8,
    "example": "[adj.] She watched him go with a sinking heart.",
    "exampleZh": "她心情沉重地看著他走了。"
  },
  {
    "id": 7690,
    "en": "subsiding",
    "kk": "[səbˋsaɪdɪŋ]",
    "zh": "n. 下沉、沉降；v. 下沉、下陷；減弱、平息、回落；沉澱（subside 的現在分詞）",
    "unit": 8,
    "example": "[n.] Does that mean the whole house is subsiding?",
    "exampleZh": "那意味著整棟房子正在下陷嗎？"
  },
  {
    "id": 7691,
    "en": "statesmanship",
    "kk": "[ˋsteɪtsmənʃɪp]",
    "zh": "n. 政治才能；政治家的風度",
    "unit": 8,
    "example": "[n.] He praised the two leaders warmly for their statesmanship.",
    "exampleZh": "他熱情地讚揚了兩位領導人的政治家風範。"
  },
  {
    "id": 7692,
    "en": "statecraft",
    "kk": "[ˋsteɪtkræft]",
    "zh": "n. （通常不可數）治國才能，管理國家的本領，治國方略",
    "unit": 8,
    "example": "[n.] In history lies all the secrets of statecraft.",
    "exampleZh": "歷史中有一切治國之道。"
  },
  {
    "id": 7693,
    "en": "talks",
    "kk": "[tɔks]",
    "zh": "n. （talk 的複數）會談，談判；談話，交談；講話，講座；語言；謠言；v. （talk 的第三人稱單數）說話，講話；交談；談論，討論；協商",
    "unit": 8,
    "example": "[n.] The talks are to begin tomorrow.",
    "exampleZh": "會談將於明天開始。"
  },
  {
    "id": 7694,
    "en": "eject",
    "kk": "[ɪˋdʒɛkt]",
    "zh": "v. 逐出；轟出",
    "unit": 8,
    "example": "[v.] Officials used guard dogs to eject the protesters.",
    "exampleZh": "官員們用護衛犬驅走抗議者。"
  },
  {
    "id": 7695,
    "en": "soreness",
    "kk": "[ˋsɔrnəs]",
    "zh": "n. 疼痛，痠痛，壓痛（尤指肌肉或身體部位因運動、勞累或受傷等引起的不適）；痛苦，不快，惱怒（指精神或情感上的）",
    "unit": 8,
    "example": "[n.] That's why there's most often a delay associated with muscle soreness.",
    "exampleZh": "這就是為什麼肌肉痠痛往往會伴隨出現延遲發作的情況。"
  },
  {
    "id": 7696,
    "en": "tenderness",
    "kk": "[ˋtendərnəs]",
    "zh": "n. 溫柔，柔情，親切；柔軟，柔和，柔嫩（尤指肉質鮮嫩）；（醫學）壓痛，觸痛，敏感",
    "unit": 8,
    "example": "[n.] My heart overflowed with tenderness.",
    "exampleZh": "我的心裡充滿了柔情。"
  },
  {
    "id": 7697,
    "en": "stiffness",
    "kk": "[ˋstɪfnəs]",
    "zh": "n. 僵硬；堅硬，硬度；不自然，拘謹；頑固；（力學）剛度",
    "unit": 8,
    "example": "[n.] The object of these movements is to prevent stiffness or deformity of joints.",
    "exampleZh": "這些活動的目的是防止關節僵硬或變形。"
  },
  {
    "id": 7698,
    "en": "dishonour",
    "kk": "[dɪsˋɑnər]",
    "zh": "n. 恥辱，丟臉；拒付；v. <正式>使蒙受恥辱，使丟臉；違背，違反（協議或諾言）；拒付，拒絕承兌（支票，匯票）；<古>玷汙（女子）的貞潔，強姦",
    "unit": 8,
    "example": "[v.] I will not dishonour my teacher.",
    "exampleZh": "我不會侮辱我的老師。"
  },
  {
    "id": 7699,
    "en": "ignominy",
    "kk": "[ˋɪɡnəmɪni]",
    "zh": "n. <正式>恥辱，公開羞辱，不體面；醜行",
    "unit": 8,
    "example": "[n.] They suffered the ignominy of defeat.",
    "exampleZh": "他們蒙受了失敗的恥辱。"
  },
  {
    "id": 7700,
    "en": "discredit",
    "kk": "[dɪsˋkredɪt]",
    "zh": "vt. 破壞…的名聲，使…丟臉，使…喪失信譽；使（說法、理論等）顯得不可信，使人懷疑；不信，拒絕相信；n. 懷疑；無信用，名聲的敗壞，恥辱",
    "unit": 8,
    "example": "[vt.] Such a perspective can be hard to discredit, can't it?",
    "exampleZh": "這種觀點很難被否定，不是嗎？"
  },
  {
    "id": 7701,
    "en": "degradation",
    "kk": "[͵deɡrəˋdeɪʃ(ə)n]",
    "zh": "n. 丟臉，落魄，侮辱；損害，惡化，衰退；降解；陵夷，剝蝕",
    "unit": 8,
    "example": "[n.] Plastic is incredibly resistant to degradation, said McGeehan.",
    "exampleZh": "塑料極其耐降解，麥吉漢說。"
  },
  {
    "id": 7702,
    "en": "disrepute",
    "kk": "[͵dɪsrɪˋpjut]",
    "zh": "n. 壞名聲，不光彩",
    "unit": 8,
    "example": "[n.] Such people bring our profession into disrepute.",
    "exampleZh": "這種人令我們這一行業蒙羞。"
  },
  {
    "id": 7703,
    "en": "bigotry",
    "kk": "[ˋbɪɡətri]",
    "zh": "n. 偏執，頑固；（對他人不同信仰、種族、觀點等的）強烈不容忍與偏見",
    "unit": 8,
    "example": "[n.] He deplored religious bigotry.",
    "exampleZh": "他譴責了宗教偏執的行為。"
  },
  {
    "id": 7704,
    "en": "intolerance",
    "kk": "[ɪnˋtɑlərəns]",
    "zh": "n. （尤指對別人的意見）不寬容，偏狹；（醫學）不耐受（對食物、藥物等無法正常耐受）；（對煩擾等的）無法忍受，不能容忍",
    "unit": 8,
    "example": "[n.] Intolerance does not stem from disagreement.",
    "exampleZh": "不寬容並非源於分歧。"
  },
  {
    "id": 7705,
    "en": "unfairness",
    "kk": "[͵ʌnˋfernəs]",
    "zh": "n. （通常不可數）不公平，不公正，不正當；不公正的行為，不義之舉",
    "unit": 8,
    "example": "[n.] We tried to meet both children's needs without the appearance of favouritism or unfairness.",
    "exampleZh": "我們試圖在沒有偏愛或不公平的表象下滿足兩個孩子的需要。"
  },
  {
    "id": 7706,
    "en": "throwaway",
    "kk": "[ˋθroʊəweɪ]",
    "zh": "n. 廢品，用完即棄之物；廣告傳單，宣傳單；脫口而出的話，隨口說出的話；adj. 拋棄型的，一次性的，用完即棄的；脫口而出的，漫不經心的",
    "unit": 8,
    "example": "[adj.] We can turn the most luxuriant forests into throwaway paper products.",
    "exampleZh": "我們可以把最茂密的森林變成一次性的紙製品。"
  },
  {
    "id": 7707,
    "en": "expendable",
    "kk": "[ɪkˋspendəbl]",
    "zh": "adj. 可消耗的，可花費的，用後即棄的；可犧牲的，可捨棄的，可有可無的；n. 消耗品，用後即棄的物品",
    "unit": 8,
    "example": "[adj.] During the recession, training budgets were seen as an expendable luxury.",
    "exampleZh": "在衰退時期，培訓預算被看成是消耗的奢侈品。"
  },
  {
    "id": 7708,
    "en": "replaceable",
    "kk": "[rɪˋpleɪsəbl]",
    "zh": "adj. 可替換的，可更換的，可置換的；（人）可被取代的，可替代的；可放在原處的",
    "unit": 8,
    "example": "[adj.] He would see I was not so easily replaceable.",
    "exampleZh": "他會看到我不是那麼容易被取代的。"
  },
  {
    "id": 7709,
    "en": "intrusion",
    "kk": "[ɪnˋtruʒ(ə)n]",
    "zh": "n. 擾亂，侵犯；闖入，侵入；（對周圍岩層的）火成岩侵入",
    "unit": 8,
    "example": "[n.] Unlawful search of, or intrusion into, a citizen's home is prohibited.",
    "exampleZh": "禁止非法搜查或者非法侵入公民的住宅。"
  },
  {
    "id": 7710,
    "en": "obstruction",
    "kk": "[əbˋstrʌkʃ(ə)n]",
    "zh": "n. 阻礙、障礙物、妨礙；堵塞",
    "unit": 8,
    "example": "[n.] The fallen tree created a hazardous obstruction on the highway during the storm.",
    "exampleZh": "暴風雨中倒塌的樹木在高速公路上形成了危險的障礙物。"
  },
  {
    "id": 7711,
    "en": "disruption",
    "kk": "[dɪsˋrʌpʃn]",
    "zh": "n. 擾亂，中斷",
    "unit": 8,
    "example": "[n.] The disruption of European trade during the war had thrown the economy into a tailspin.",
    "exampleZh": "戰爭期間歐洲貿易的中斷使經濟陷入一片困境。"
  },
  {
    "id": 7712,
    "en": "inconvenience",
    "kk": "[͵ɪnkənˋvinjəns]",
    "zh": "n. 不方便",
    "unit": 8,
    "example": "[n.] The airline regrets any inconvenience.",
    "exampleZh": "航空公司對所造成的任何不便表示歉意。"
  },
  {
    "id": 7713,
    "en": "recorded",
    "kk": "[rɪˋkɔrdɪd]",
    "zh": "v. record 的過去式和過去分詞：記錄，記載；錄製；（儀器）顯示，標示；（尤指體育等）獲得（成績）；adj. 記錄下來的；已登記的；（音樂、影像等）已錄製的",
    "unit": 8,
    "example": "[adj.] It was recorded on a wax cylinder.",
    "exampleZh": "它被刻錄在了蠟柱上。"
  },
  {
    "id": 7714,
    "en": "documented",
    "kk": "[ˋdɑkjumentɪd]",
    "zh": "adj. 有文件證明的；有據可查的；v. document 的過去式和過去分詞：記錄，記載",
    "unit": 8,
    "example": "[adj.] The main attractions of the Big Apple are well documented.",
    "exampleZh": "紐約城主要景點被很好地記錄在案。"
  },
  {
    "id": 7715,
    "en": "registered",
    "kk": "[ˋredʒɪstərd]",
    "zh": "adj. 已登記的，已註冊的；（信或包裹）掛號的；（家畜等）附有血統證明的；v. 登記，註冊；（儀器上）顯出，顯示；表示，表達（意見或情感）（register 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[adj.] The ship was registered in Panama.",
    "exampleZh": "這艘船是在巴拿馬註冊的。"
  },
  {
    "id": 7716,
    "en": "written",
    "kk": "[ˋrɪt(ə)n]",
    "zh": "adj. 書面的，（協議、規定、法律等）成文的，（測驗、工作等）書面的；v. 書寫；寫作；寫信（write 的過去分詞形式）",
    "unit": 8,
    "example": "[adj.] Her written English is impeccable.",
    "exampleZh": "她寫的英語無可挑剔。"
  },
  {
    "id": 7717,
    "en": "chronicled",
    "kk": "",
    "zh": "vt. 把……載入編年史，按事件發生順序記載（chronicle 的過去式和過去分詞）",
    "unit": 8,
    "example": "[vt.] When a graphic element was changed by law or decree it was chronicled in this document.",
    "exampleZh": "當一個圖形元素被法律或法令改變時，它被記錄在這個文件中。"
  },
  {
    "id": 7718,
    "en": "archived",
    "kk": "['ɑrkaivd]",
    "zh": "v. 把……存檔，把……歸檔（archive 的過去式和過去分詞）；adj. 存檔的，已歸檔的",
    "unit": 8,
    "example": "[v.] Every change is documented and archived.",
    "exampleZh": "每項修改都會記錄並存檔。"
  },
  {
    "id": 7719,
    "en": "downfall",
    "kk": "[ˋdaʊnfɔl]",
    "zh": "n. 垮臺，衰敗，敗落；導致失敗或垮臺的原因（常用於 be someone's downfall）；（較不常用）雨、雪等的落下（尤指大雨）",
    "unit": 8,
    "example": "[n.] His pride may still be his downfall.",
    "exampleZh": "他的傲慢仍可能是他垮臺的原因。"
  },
  {
    "id": 7720,
    "en": "ruination",
    "kk": "[͵ruɪˋneɪʃn]",
    "zh": "n. 毀滅；禍根",
    "unit": 8,
    "example": "[n.] Money was the ruination of him.",
    "exampleZh": "金錢把他給毀了。"
  },
  {
    "id": 7721,
    "en": "recede",
    "kk": "[rɪˋsid]",
    "zh": "vi. 逐漸遠離、後退、退去；減弱、萎縮",
    "unit": 8,
    "example": "[vi.] Floodwaters began to recede slowly as sunny weather returned to the coastal town.",
    "exampleZh": "隨著陽光晴朗的天氣重返這座沿海城鎮，洪水開始逐漸消退。"
  },
  {
    "id": 7722,
    "en": "toleration",
    "kk": "[͵tɑləˋreɪʃn]",
    "zh": "n. 寬容、容忍、容許、耐受性",
    "unit": 8,
    "example": "[n.] Creating an inclusive corporate culture requires mutual toleration and appreciation of diverse backgrounds.",
    "exampleZh": "營造包容的企業文化需要對多元背景抱持相互寬容與賞識的態度。"
  },
  {
    "id": 7723,
    "en": "bearing",
    "kk": "[ˋbɛrɪŋ]",
    "zh": "n. 舉止；體態；忍耐；忍受",
    "unit": 8,
    "example": "[n.] Her whole bearing was alert.",
    "exampleZh": "她整個人保持著戒備狀態。"
  },
  {
    "id": 7724,
    "en": "sufferance",
    "kk": "[ˋsʌfrəns]",
    "zh": "n. 容許，容忍，默許；忍耐，忍受；（常用於短語 on sufferance）出於寬容，經人勉強同意地",
    "unit": 8,
    "example": "[n.] He's only staying here on sufferance.",
    "exampleZh": "他是經人勉強同意待在這兒的。"
  },
  {
    "id": 7725,
    "en": "fortitude",
    "kk": "[ˋfɔrtɪtud]",
    "zh": "n. （在痛苦、困難面前的）剛毅，不屈不撓，勇氣",
    "unit": 8,
    "example": "[n.] They bore their plight with stoicism and fortitude.",
    "exampleZh": "他們以堅忍剛毅的精神面對困境。"
  },
  {
    "id": 7726,
    "en": "forbearance",
    "kk": "[fɔrˋberəns]",
    "zh": "n. （正式，多作不可數名詞）自制，忍耐；寬容；（法律、金融）暫緩行使權利，尤指准許債務人延期償還的寬限安排",
    "unit": 8,
    "example": "[n.] All the Greenpeace people behaved with impressive forbearance and dignity.",
    "exampleZh": "所有綠色和平組織人員表現出的寬容及尊嚴令人印象深刻。"
  },
  {
    "id": 7727,
    "en": "equating",
    "kk": "[ɪˋkweɪtɪŋ]",
    "zh": "v. （使）等同；使（兩個或兩個以上事物）相等，使平衡（equate 的現在分詞）",
    "unit": 8,
    "example": "[v.] The evidence for equating Seneca with the author of the tragedies seems circumstantial.",
    "exampleZh": "把塞內加等同於悲劇作者的證據似乎是間接的。"
  },
  {
    "id": 7728,
    "en": "scourge",
    "kk": "[skɝdʒ]",
    "zh": "n. 災禍，禍患，苦難的根源；鞭子，鞭笞刑具；v. 折磨，使遭殃，蹂躪；鞭打，鞭笞",
    "unit": 8,
    "example": "[v.] They tried to change the topic, but his fears were aroused, and he pursued it, \"Will they scourge thee?\"",
    "exampleZh": "她們試圖改變話題，但他的恐懼被激起了，他繼續說：「他們會折磨你們嗎？」"
  },
  {
    "id": 7729,
    "en": "infestation",
    "kk": "[͵ɪnfeˋsteɪʃn]",
    "zh": "n. 侵擾，侵染，感染；(害蟲、寄生蟲、鼠類等的)大批滋生或蔓延的狀態；一次具體的滋生蔓延或侵擾事件",
    "unit": 8,
    "example": "[n.] The great Australian rabbit infestation was ecologically devastating.",
    "exampleZh": "澳大利亞兔子的「橫行霸道」從生態學上來看簡直就是毀滅性的。"
  },
  {
    "id": 7730,
    "en": "pandemic",
    "kk": "[pænˋdemɪk]",
    "zh": "adj. （疾病）大規模流行的；n. <正式>大流行病",
    "unit": 8,
    "example": "[n.] They feared a new cholera pandemic.",
    "exampleZh": "他們擔心一種新的霍亂流行病。"
  },
  {
    "id": 7731,
    "en": "imported",
    "kk": "[ɪmˋpɔrtɪd]",
    "zh": "adj. 進口的，輸入的；（計算機）導入的；v. 進口（import 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] Cheap imported goods are flooding the market.",
    "exampleZh": "廉價進口商品充斥著市場。"
  },
  {
    "id": 7732,
    "en": "introduced",
    "kk": "[͵ɪntrəˋdust]",
    "zh": "v. 介紹，使認識；引進，出臺，推出；使初次接觸，使初次體驗（introduce 的過去式和過去分詞）；adj. 引種的，外來的，非本地的",
    "unit": 8,
    "example": "[adj.] We've already been introduced.",
    "exampleZh": "我們已經介紹認識了。"
  },
  {
    "id": 7733,
    "en": "odyssey",
    "kk": "[ˋɑdəsi]",
    "zh": "n. 漫長而驚險的旅程；成長過程，探索過程；《奧德賽》（Odyssey）",
    "unit": 8,
    "example": "[n.] In terms of both structure and theme, the Odyssey and Liked were also oddly formulaic, to the point of predictability.",
    "exampleZh": "無論在結構還是主題上看，《奧德賽》和《寵兒》都是非常公式化的，甚至到了可以預見的程度。"
  },
  {
    "id": 7734,
    "en": "deprivation",
    "kk": "[͵deprəˋveɪʃən; ͵dɪpraɪˋveɪʃən]",
    "zh": "n. 貧困，匱乏，剝奪；免職（尤指聖職）",
    "unit": 8,
    "example": "[n.] The guilt-prone ones shared more, even though they hadn't magically become more sympathetic to the other child's deprivation.",
    "exampleZh": "容易內疚的人分享得更多，儘管他們並沒有憑空變得更同情另一個孩子的缺失遭遇。"
  },
  {
    "id": 7735,
    "en": "scarcity",
    "kk": "[ˋskersəti]",
    "zh": "n. 不足，缺乏",
    "unit": 8,
    "example": "[n.] This scarcity is inevitable in less developed countries.",
    "exampleZh": "在欠發達國家這種匱乏是不可避免的。"
  },
  {
    "id": 7736,
    "en": "flowing",
    "kk": "[ˋfloʊɪŋ]",
    "zh": "adj. 流動的；平滑的，流暢的；上漲的，漲潮的；v. flow 的現在分詞/動名詞：流動；起源；上漲",
    "unit": 8,
    "example": "[adj.] This can prevent air from flowing freely to the lungs.",
    "exampleZh": "這可以防止空氣任意流入肺部。"
  },
  {
    "id": 7737,
    "en": "liquefied",
    "kk": "[ˋlɪkwɪfaɪd]",
    "zh": "v. （使）液化（liquefy 的過去式及過去分詞）；adj. 液化的，液態的（常用於 liquefied natural gas（液化天然氣）、liquefied petroleum gas（液化石油氣）、liquefied gas（液化氣體）等搭配）",
    "unit": 8,
    "example": "[v.] Explosive impacts heated and liquefied the ice, resulting in the fluid appearance of the ejecta.",
    "exampleZh": "爆炸性的撞擊使冰加熱並液化，導致噴出物呈流體狀。"
  },
  {
    "id": 7738,
    "en": "melted",
    "kk": "[ˋmeltɪd]",
    "zh": "adj. 融化的；熔化的；溶解的；v. 融化；溶解（melt 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] I smelled tarry melted asphalt.",
    "exampleZh": "我聞到了柏油熔化了的味道。"
  },
  {
    "id": 7739,
    "en": "molten",
    "kk": "[ˋmoʊltən]",
    "zh": "adj. 熔化的，熔融的；<書面，舊>鑄造的，由熔化澆鑄成形的；（文學/修辭）熾熱的，灼熱的；n. Molten（莫爾滕，人名）",
    "unit": 8,
    "example": "[adj.] An immense volume of rocks and molten lava was erupted.",
    "exampleZh": "大量岩石和熔岩噴發出來。"
  },
  {
    "id": 7740,
    "en": "speck",
    "kk": "[spek]",
    "zh": "n. 小點，斑點，汙點；灰塵，微粒，小顆粒；微量，一點點；（Speck）人名，英語姓氏常譯作斯佩克，德語姓氏常譯作施佩克；vt. 使有斑點",
    "unit": 8,
    "example": "[n.] The ship was now just a speck in the distance.",
    "exampleZh": "此時，那艘船不過是遠處的一個小點。"
  },
  {
    "id": 7741,
    "en": "shard",
    "kk": "[ʃɑrd]",
    "zh": "n. 碎片，碎屑（尤指玻璃、陶瓷或金屬等脆性材料的碎片）；（數據庫、分佈式系統）分片；（昆蟲學）甲蟲的鞘翅；（Shard，常作 The Shard）倫敦碎片大廈；（Shard）人名（印度，音譯沙爾德）",
    "unit": 8,
    "example": "[n.] This time, suppose you define one replica shard.",
    "exampleZh": "這一次，假設您定義一個複製碎片。"
  },
  {
    "id": 7742,
    "en": "fluke",
    "kk": "[fluk]",
    "zh": "n. （非正式）僥倖，偶然的幸運；（航海）錨爪；（動物學）吸蟲，寄生性扁蟲（如肝吸蟲、肺吸蟲、血吸蟲）；（動物學）鯨目動物的尾片（尾葉）；（Fluke，首字母大寫）人名：弗盧克（英語姓氏）；v. （非正式）僥倖成功，靠運氣取得（或達到）",
    "unit": 8,
    "example": "[n.] The discovery was something of a fluke.",
    "exampleZh": "這項發現多少有點僥倖。"
  },
  {
    "id": 7743,
    "en": "anomaly",
    "kk": "[əˋnɑməli]",
    "zh": "n. 異常事物，反常現象；近點角，近點距離",
    "unit": 8,
    "example": "[n.] The space shuttle had stopped transmitting data, a very serious anomaly for the mission.",
    "exampleZh": "這架航天飛機已經停止了傳輸數據，這是這次任務中一個十分嚴重的反常現象。"
  },
  {
    "id": 7744,
    "en": "aberration",
    "kk": "[͵æbəˋreɪʃ(ə)n]",
    "zh": "n. 反常現象，異常行為，偏離常規；行為異常的人；精神失常，心理異常；畸變；（光學）像差；（天文）光行差",
    "unit": 8,
    "example": "[n.] It's clear that Macy's believes its troubles run deeper than a temporary aberration off the thermometer.",
    "exampleZh": "顯然，梅西百貨認為自身的問題絕非暫時的小波動那麼簡單。"
  },
  {
    "id": 7745,
    "en": "rogue",
    "kk": "[roʊɡ]",
    "zh": "n. 淘氣鬼，調皮鬼，搗蛋鬼；無賴，流氓；（尤指植物的）劣種；adj. 行為失常的，暴戾的；（野獸）離群而危險的；v. 除去（劣種，雜種），為（田地）的作物去劣（或去雜）；欺詐；遊手好閒，流浪；【名】 （Rogue）（法）羅格（人名）",
    "unit": 8,
    "example": "[n.] Tell me, impudent little rogue, does your story end here?",
    "exampleZh": "告訴我，無禮的小淘氣，你的故事說完了嗎？"
  },
  {
    "id": 7746,
    "en": "rarity",
    "kk": "[ˋrerəti]",
    "zh": "n. 罕見的人（或物），珍品；稀有，罕見；稀薄",
    "unit": 8,
    "example": "[n.] It was a real prize due to its rarity and good condition.",
    "exampleZh": "它是一件真正的稀世珍品，因為它不但稀有而且保存完好。"
  },
  {
    "id": 7747,
    "en": "quirk",
    "kk": "[kwɝk]",
    "zh": "n. 怪癖， 怪異的性格（或行為）；（偶然發生的）怪事，奇事；急轉，急彎；（建築）狹凹槽，深槽；<美>藉口；v. （人的嘴巴或眉毛）突然翹起，扭曲；【名】 （Quirk）（英）夸克（人名）",
    "unit": 8,
    "example": "[n.] By the end of my story, I hope you will view this quirk of my character with a forgiving eye.",
    "exampleZh": "在我的故事結束前，我希望你能寬容地看待我這個奇怪的性格。"
  },
  {
    "id": 7748,
    "en": "agitation",
    "kk": "[͵ædʒɪˋteɪʃ(ə)n]",
    "zh": "n. 焦慮不安；煽動，鼓動；（液體的）攪動",
    "unit": 8,
    "example": "[n.] Dot arrived in a state of great agitation.",
    "exampleZh": "多特到達時十分焦慮不安。"
  },
  {
    "id": 7749,
    "en": "beating",
    "kk": "[ˋbitɪŋ]",
    "zh": "n. 打，毆打，毒打，敲打，捶打；（常作 take a beating）失敗，慘敗；（常指心臟等的）跳動，搏動；（造紙）打漿；v. 打，敲打；打敗；跳動（beat 的現在分詞/動名詞）；adj. （僅用於名詞前）跳動的；搏動的",
    "unit": 8,
    "example": "[n.] Her heart is beating normally.",
    "exampleZh": "她心跳正常。"
  },
  {
    "id": 7750,
    "en": "flapping",
    "kk": "[ˋflæpɪŋ]",
    "zh": "n. 拍動，上下或來回擺動，搖擺運動；adj. 拍動的，搖擺運動的，揮動的；v. 拍打，輕拍，擺動（flap 的現在分詞）",
    "unit": 8,
    "example": "[n.] The gulls flew off, wings flapping.",
    "exampleZh": "海鷗撲打著雙翅飛走了。"
  },
  {
    "id": 7751,
    "en": "quivering",
    "kk": "[ˋkwɪvərɪŋ]",
    "zh": "v. 顫抖（quiver 的現在分詞）；adj. 顫抖的，發抖的；n. 顫抖，顫動",
    "unit": 8,
    "example": "[v.] Cooper arrived, quivering with rage.",
    "exampleZh": "庫珀到了，氣得渾身發抖。"
  },
  {
    "id": 7752,
    "en": "vibrating",
    "kk": "[ˋvaɪbret]",
    "zh": "v. 振動，（使）震動；顫抖；擺動；共鳴；縈繞（vibrate 的現在分詞）；adj. 振動的，震動的（常作定語）",
    "unit": 8,
    "example": "[adj.] In himself, too, he knew that it was vibrating at last, that chord hitherto dormant and unsuspected.",
    "exampleZh": "在他自己心裡，他也知道那根弦終於在顫動了，那根弦一直蟄伏著，不曾被察覺。"
  },
  {
    "id": 7753,
    "en": "twitching",
    "kk": "[ˋtwɪtʃɪŋ]",
    "zh": "n. 抽動，顫搐，抽搐；v. （使）抽動，顫動，抽搐；猛拉；奪走（twitch 的現在分詞/動名詞形式）；adj. 抽動的，顫搐的",
    "unit": 8,
    "example": "[n.] He saw the dog's twitching nose poke out of the basket.",
    "exampleZh": "他看見那條狗顫搐的鼻子從籃子裡露出來。"
  },
  {
    "id": 7754,
    "en": "pictorial",
    "kk": "[pɪkˋtɔriəl]",
    "zh": "adj. 繪畫的，圖示的，圖畫的；形象化的，生動的；n. 畫報，畫刊",
    "unit": 8,
    "example": "[adj.] The booklet also contains pictorial guides for the novice bicycle rider.",
    "exampleZh": "這本小冊子還包含了對自行車初學者的圖片指導。"
  },
  {
    "id": 7755,
    "en": "depictive",
    "kk": "[dɪˋpɪktɪv]",
    "zh": "adj. 描寫的；描述的",
    "unit": 8,
    "example": "[adj.] A depictive adjunct predicate may be hosted by either the subject or the object.",
    "exampleZh": "描述性附加謂語的主項可以是句子的主語，也可以是賓語。"
  },
  {
    "id": 7756,
    "en": "illustrative",
    "kk": "[ɪˋlʌstrətɪv]",
    "zh": "adj. 作例證用的，解釋性的；圖解的，插圖的",
    "unit": 8,
    "example": "[adj.] The charts in this article are for illustrative purposes only.",
    "exampleZh": "該文中的圖表只用於說明的目的。"
  },
  {
    "id": 7757,
    "en": "diagrammatic",
    "kk": "[͵daɪəɡrəˋmætɪk]",
    "zh": "adj. 圖解的，圖表的；概略的，圖式的",
    "unit": 8,
    "example": "[adj.] This is the virus in very crude simple diagrammatic form.",
    "exampleZh": "這是非常粗略簡單的圖式病毒形態。"
  },
  {
    "id": 7758,
    "en": "fumble",
    "kk": "[ˋfʌmb(ə)l]",
    "zh": "v. 笨手笨腳地做，胡亂摸找；笨嘴拙舌地說，支支吾吾地說；接球失誤，漏球，掉球；n. 笨拙的手部動作，亂摸；失球，漏接球；笨拙的處理；<非正式>（為達到性快樂而進行的）撫弄",
    "unit": 8,
    "example": "[n.] We all know that people fumble along the way.",
    "exampleZh": "我們都知道人們會摸索著前進。"
  },
  {
    "id": 7759,
    "en": "scrabble",
    "kk": "[ˋskræbl]",
    "zh": "v. （忙亂地）扒尋，摸索；（為了找到或抓牢）抓，摸；（動物）用爪子亂抓，掙扎；快爬，攀爬；在……上亂扒；亂塗，潦草書寫；努力，盡力，苦求；n. 抓，扒；摸索；努力，盡力；掙扎；爭奪；塗鴉，亂畫；（Scrabble）（商標）拼字遊戲",
    "unit": 8,
    "example": "[v.] The one-way interaction between TV and the couch potato is far different than an absorbing Scrabble play-off with a friend on a mobile phone.",
    "exampleZh": "電視與電視迷之間的單向互動，和在手機上跟朋友玩的那場引人入勝的拼字遊戲對決截然不同。"
  },
  {
    "id": 7760,
    "en": "parlour",
    "kk": "[ˋpɑrlər]",
    "zh": "n. 客廳，會客室（英式拼寫，美式拼作 parlor）；（提供服務的）店堂，營業場所（如 beauty parlour 美容院、funeral parlour 殯儀館）；（旅館、俱樂部、餐廳等公共場所的）接待室，休息室，雅座；（大寫 Parlour）英語姓氏，可譯作帕勒",
    "unit": 8,
    "example": "[n.] This is the parlour?",
    "exampleZh": "這就是客廳？"
  },
  {
    "id": 7761,
    "en": "immensity",
    "kk": "[ɪˋmensəti]",
    "zh": "n. 巨大，廣大",
    "unit": 8,
    "example": "[n.] We were overwhelmed by the sheer immensity of the task.",
    "exampleZh": "任務太重，把我們都嚇倒了。"
  },
  {
    "id": 7762,
    "en": "vastness",
    "kk": "[ˋvæstnəs]",
    "zh": "n. （通常作不可數名詞）巨大，廣大，廣漠",
    "unit": 8,
    "example": "[n.] The vastness of space really boggles the mind.",
    "exampleZh": "太空之遼闊的確使人難以想象。"
  },
  {
    "id": 7763,
    "en": "hugeness",
    "kk": "",
    "zh": "n. 巨大；龐大；廣大",
    "unit": 8,
    "example": "[n.] This scheme decomposes the difficulty of CORBA criterion hugeness and complexity.",
    "exampleZh": "該方案化解了CORBA技術規範龐大、複雜而帶來的困難。"
  },
  {
    "id": 7764,
    "en": "enormity",
    "kk": "[ɪˋnɔrməti]",
    "zh": "n. （處境、問題、事件等的）艱鉅性，嚴重性；龐大，巨大；暴行，滔天罪行；兇暴，窮兇極惡；重要性",
    "unit": 8,
    "example": "[n.] I was numbed by the enormity of the responsibility.",
    "exampleZh": "我對責任的艱鉅性感到不知所措。"
  },
  {
    "id": 7765,
    "en": "enormousness",
    "kk": "",
    "zh": "n. 龐大，巨大",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word enormousness correctly.",
    "exampleZh": "他試著學習如何正確使用「enormousness」這個單字。"
  },
  {
    "id": 7766,
    "en": "expanse",
    "kk": "[ɪkˋspæns]",
    "zh": "n. 寬闊，廣闊的區域（常指海洋、天空、土地等的一大片）；廣度，範圍，面積；（文學）蒼天，天空",
    "unit": 8,
    "example": "[n.] The expanse of the white sands, the palm trees and the turquoise water make for an almost mystical experience.",
    "exampleZh": "廣闊的白色沙灘，棕櫚樹和藍綠色的海水，組成了一次近乎神秘的經歷。"
  },
  {
    "id": 7767,
    "en": "continuing",
    "kk": "[kənˋtɪnjuɪŋ]",
    "zh": "adj. 繼續的；持續的；連續的；v. continue 的現在分詞和動名詞形式",
    "unit": 8,
    "example": "[adj.] I am continuing to apply for jobs.",
    "exampleZh": "我在繼續申請工作。"
  },
  {
    "id": 7768,
    "en": "increasing",
    "kk": "[ɪnˋkrisɪŋ]",
    "zh": "v. 增長，增強，增大（increase 的現在分詞）",
    "unit": 8,
    "example": "[v.] Juvenile crime is increasing at a terrifying rate.",
    "exampleZh": "青少年犯罪在以驚人的速度增加。"
  },
  {
    "id": 7769,
    "en": "growing",
    "kk": "[ˋɡroʊɪŋ]",
    "zh": "adj. 增長的，增加的；v. 長大，成長；成活，生長；栽種，種植（grow 的現在分詞形式）",
    "unit": 8,
    "example": "[adj.] We stop growing at maturity.",
    "exampleZh": "我們在成熟後就停止成長了。"
  },
  {
    "id": 7770,
    "en": "developing",
    "kk": "[dɪˋveləpɪŋ]",
    "zh": "adj. 發展中的、正在成長的；v. 發展、研製（develop之現在分詞）",
    "unit": 8,
    "example": "[adj.] Our tech firm is presently developing several innovative mobile applications for international clients.",
    "exampleZh": "我們的科技公司目前正在為國際客戶開發多項創新的行動應用程式專案。"
  },
  {
    "id": 7771,
    "en": "ongoing",
    "kk": "[ˋɑnɡoʊɪŋ]",
    "zh": "adj. 持續存在的，仍在進行的，不斷發展的",
    "unit": 8,
    "example": "[adj.] When Pemberton created his drink, it represented an ongoing trend.",
    "exampleZh": "當彭伯頓發明他的飲料時，它代表了一種持續的趨勢。"
  },
  {
    "id": 7772,
    "en": "enquiry",
    "kk": "[ˋɪnkwəri]",
    "zh": "n. 詢問，查問；官方調查；問訊處",
    "unit": 8,
    "example": "[n.] It is the largest enquiry ever of its kind.",
    "exampleZh": "這是同類詢問調查中規模最大的一次。"
  },
  {
    "id": 7773,
    "en": "interrogation",
    "kk": "[ɪn͵terəˋɡeɪʃ(ə)n]",
    "zh": "n. 審問，盤問；查詢；疑問句",
    "unit": 8,
    "example": "[n.] He confessed after four days under interrogation.",
    "exampleZh": "他在受訊問四天之後招認了。"
  },
  {
    "id": 7774,
    "en": "quizzing",
    "kk": "[ˋkwɪzɪŋ]",
    "zh": "n. 挖苦（考問）",
    "unit": 8,
    "example": "[n.] Han Jia, are you quizzing me?",
    "exampleZh": "韓佳，你是不是想考考我呀？"
  },
  {
    "id": 7775,
    "en": "pragmatism",
    "kk": "[ˋpræɡmətɪzəm]",
    "zh": "n. 務實，講求實效；實用主義（哲學），一種主張以實際後果作為意義、真理和價值判斷標準的學說",
    "unit": 8,
    "example": "[n.] She had a reputation for clear thinking and pragmatism.",
    "exampleZh": "她因思維清晰和實用主義而聞名。"
  },
  {
    "id": 7776,
    "en": "practicality",
    "kk": "[͵præktɪˋkæləti]",
    "zh": "n. 實用性，可行性；務實，實事求是；實例，實際情況（practicalities）",
    "unit": 8,
    "example": "[n.] The furniture managed to combine practicality with elegance.",
    "exampleZh": "這傢俱結合了實用與優雅。"
  },
  {
    "id": 7777,
    "en": "sustenance",
    "kk": "[ˋsʌstənəns]",
    "zh": "n. 食物、營養、生計、維持",
    "unit": 8,
    "example": "[n.] Hikers carried nutrient-rich dried fruit and nuts for essential sustenance during the trek.",
    "exampleZh": "健行者攜帶了富含營養的果乾與堅果，作為長途跋涉期間不可或缺的能量補充。"
  },
  {
    "id": 7778,
    "en": "snacks",
    "kk": "[snæks]",
    "zh": "n. 零食，小吃，零嘴（snack 的複數）；快餐；v. 吃零食，吃小吃（snack 的第三人稱單數形式）",
    "unit": 8,
    "example": "[n.] The kids filled themselves with snacks.",
    "exampleZh": "孩子們吃零食吃飽了。"
  },
  {
    "id": 7779,
    "en": "titbits",
    "kk": "",
    "zh": "n. 花絮",
    "unit": 8,
    "example": "[n.] She had saved a few titbits for her cat.",
    "exampleZh": "她給貓留了點好吃的東西。"
  },
  {
    "id": 7780,
    "en": "dependence",
    "kk": "[dɪˋpendəns]",
    "zh": "n. 依賴，依靠；（對毒品或酒精的）癮，癖",
    "unit": 8,
    "example": "[n.] It liberated industry from dependence on running water.",
    "exampleZh": "它使工業擺脫了對自來水的依賴。"
  },
  {
    "id": 7781,
    "en": "dependency",
    "kk": "[dɪˋpɛndənsi]",
    "zh": "n. 依靠；信賴",
    "unit": 8,
    "example": "[n.] Their aim is to reduce people's dependency on the welfare state.",
    "exampleZh": "他們旨在減少人們對福利制度的依賴。"
  },
  {
    "id": 7782,
    "en": "waterbody",
    "kk": "",
    "zh": "n. 水體",
    "unit": 8,
    "example": "[n.] The change of ammonia nitrogen concn . in the waterbody had no significant difference from that of the control group.",
    "exampleZh": "對於水體中氨氮的濃度，羅非魚的影響則不明顯。"
  },
  {
    "id": 7783,
    "en": "loch",
    "kk": "[lɑk]",
    "zh": "n. （蘇格蘭）湖；（狹長的）海灣；（Loch）人名，法語譯作“洛克”，英、德、西、匈、捷語譯作“洛赫”",
    "unit": 8,
    "example": "[n.] They went till Inverness via Loch Ness.",
    "exampleZh": "他們從尼斯湖走到因弗內斯。"
  },
  {
    "id": 7784,
    "en": "lifeline",
    "kk": "[ˋlaɪflaɪn]",
    "zh": "n. 生命線，命脈，賴以生存的關鍵事物；救生索，救生繩；生命線（手相）",
    "unit": 8,
    "example": "[n.] The extra payments are a lifeline for most single mothers.",
    "exampleZh": "額外補助對大多數單身母親來說都是賴以生存的生命線。"
  },
  {
    "id": 7785,
    "en": "redemption",
    "kk": "[rɪˋdempʃ(ə)n]",
    "zh": "n. （基督教指耶穌的）救贖，贖罪；（從過失或罪惡中）拯救人的事物；兌換；彌補",
    "unit": 8,
    "example": "[n.] He craves redemption for his sins.",
    "exampleZh": "他渴望對其罪孽的救贖。"
  },
  {
    "id": 7786,
    "en": "deliverance",
    "kk": "[dɪˋlɪvərəns]",
    "zh": "n. 釋放，解救，救助；（宗教）救恩，拯救；（法律）判決",
    "unit": 8,
    "example": "[n.] The opening scene shows them celebrating their sudden deliverance from war.",
    "exampleZh": "開始的場景展示他們正在慶祝從戰爭中突然獲救。"
  },
  {
    "id": 7787,
    "en": "concatenation",
    "kk": "[kən͵kætəˋneɪʃn]",
    "zh": "n. 一連串關聯事物、連鎖事件、串聯",
    "unit": 8,
    "example": "[n.] An unfortunate concatenation of mechanical failures led to the sudden electrical blackout.",
    "exampleZh": "一連串不幸的機件故障導致了突如其來的全面大停電。"
  },
  {
    "id": 7788,
    "en": "plainness",
    "kk": "[ˋpleɪnnəs]",
    "zh": "n. 簡單，樸素；清楚，明白；坦率，直率；正直；相貌平常，不好看；平坦，平坦度",
    "unit": 8,
    "example": "[n.] He is a man of plainness.",
    "exampleZh": "他是一個直率的人。"
  },
  {
    "id": 7789,
    "en": "simpleness",
    "kk": "['simplnis]",
    "zh": "n. 純樸、簡單、質樸",
    "unit": 8,
    "example": "[n.] She appreciated the peaceful simpleness of rural life away from bustling city traffic.",
    "exampleZh": "她欣賞遠離繁囂都市交通的鄉村生活所帶來的寧靜與純樸。"
  },
  {
    "id": 7790,
    "en": "gash",
    "kk": "[ɡæʃ]",
    "zh": "n. 很深的傷口；很深的裂縫或溝槽；（Gash）人名，譯作“加什”；v. 劃開，深深切開，使負深傷；adj. （英國俚語）多餘的，額外的",
    "unit": 8,
    "example": "[n.] He was bleeding from a gash on his head.",
    "exampleZh": "他頭上的傷口在出血。"
  },
  {
    "id": 7791,
    "en": "slit",
    "kk": "[slɪt]",
    "zh": "n. 狹長的切口，狹縫；v. 劃開，割開；撕開（某物），使成長條；使（眼睛）眯成一道縫，眯起眼睛",
    "unit": 8,
    "example": "[n.] She watched them through a slit in the curtains.",
    "exampleZh": "她透過窗簾的縫隙注視著他們。"
  },
  {
    "id": 7792,
    "en": "lacerate",
    "kk": "[ˋlæsəreɪt]",
    "zh": "vt. 割裂，撕碎，劃破；<喻>傷害，使……痛心；adj. 撕碎的，撕裂狀的；受折磨的",
    "unit": 8,
    "example": "[vt.] He kept drifting about to find Becky and lacerate her with the performance.",
    "exampleZh": "他不停地走來走去，想找到貝基，用表演讓她感到痛心。"
  },
  {
    "id": 7793,
    "en": "stifle",
    "kk": "[ˋstaɪf(ə)l]",
    "zh": "v. 扼殺，抑制；強忍住，壓抑（感情）；（使）窒息，（使）喘不上氣；n. （馬、狗等動物的）後膝關節，後膝髕",
    "unit": 8,
    "example": "[v.] She managed to stifle a yawn.",
    "exampleZh": "她忍住了呵欠。"
  },
  {
    "id": 7794,
    "en": "asphyxiate",
    "kk": "[əsˋfɪksieɪt]",
    "zh": "vt. 使窒息，使（人或動物）因無法呼吸而失去知覺或死亡；vi. 窒息，因無法呼吸或缺氧而失去知覺或死亡",
    "unit": 8,
    "example": "[vt.] Carbon dioxide in pure form can asphyxiate because it is heavier than air.",
    "exampleZh": "因為二氧化碳比空氣要重，純淨的二氧化碳可以使人窒息。"
  },
  {
    "id": 7795,
    "en": "throttle",
    "kk": "[ˋθrɑtl]",
    "zh": "n. 節流閥，油門；功率，馬力；<古>喉嚨，氣管；v. 掐（喉嚨），使窒息；阻擋， 壓制，扼殺；調節油門，減/加速；<美，非正式>輕鬆擊敗",
    "unit": 8,
    "example": "[v.] Drivers use a joystick of sorts to steer and throttle the vehicle, which can spin in place and accelerates rather quickly.",
    "exampleZh": "司機可以利用操縱桿之類的來控制方向和速度，這樣車輛可以原地旋轉並加速得相當快。"
  },
  {
    "id": 7796,
    "en": "loll",
    "kk": "[lɑl]",
    "zh": "vi. 懶洋洋地倚靠；vt. 懶洋洋地倚靠；n. （Loll）人名；（德）洛爾",
    "unit": 8,
    "example": "[vi.] Next time don't loll out your tongue out.",
    "exampleZh": "下次可別伸出舌頭來嘲笑人了。"
  },
  {
    "id": 7797,
    "en": "shares",
    "kk": "[ʃer]",
    "zh": "n. （金融）股份，股票；一份，份額（share 的複數形式）；v. 分享，共享，共有；分擔，分配（share 的第三人稱單數形式）",
    "unit": 8,
    "example": "[n.] The shares gained 14p to 262p.",
    "exampleZh": "股價上升了14便士，到262便士。"
  },
  {
    "id": 7798,
    "en": "lesser",
    "kk": "[ˋlesər]",
    "zh": "adj. 較少的；次要的；更小的；adv. 較少地；更小地；不及；n. （Lesser）人名；（英、德）萊塞",
    "unit": 8,
    "example": "[n.] People voted for him as the lesser of two evils.",
    "exampleZh": "人們投票選他只是出於兩害相權取其輕罷了。"
  },
  {
    "id": 7799,
    "en": "lowly",
    "kk": "[ˋloʊli]",
    "zh": "adj. 地位低的；卑賤的；謙遜的；adv. 謙卑地；低聲地；位置低下地",
    "unit": 8,
    "example": "[adj.] First to colonize the barren land are the lowly lichens, surviving on bare rock.",
    "exampleZh": "貧瘠的土地上首先長滿了地衣這種低等植物，它們在裸露的岩石上生存。"
  },
  {
    "id": 7800,
    "en": "adjournment",
    "kk": "[əˋdʒɝnmənt]",
    "zh": "n. 休會，休庭，延期；休會期間，休庭期間",
    "unit": 8,
    "example": "[n.] Somebody needs to move for an adjournment.",
    "exampleZh": "需要有人提議休會。"
  },
  {
    "id": 7801,
    "en": "deferral",
    "kk": "[dɪˋfɝəl]",
    "zh": "n. 延期，推遲，遲延；（會計、稅務）遞延；（兵役）緩役",
    "unit": 8,
    "example": "[n.] Those who favour deferral point to Uruguay.",
    "exampleZh": "那些支持延期支付的人指向了烏拉圭。"
  },
  {
    "id": 7802,
    "en": "deferment",
    "kk": "[dɪˋfɝmənt]",
    "zh": "n. <正式>延期，推遲，緩期",
    "unit": 8,
    "example": "[n.] Further deferment will not be allowed.",
    "exampleZh": "不允許再往後延期。"
  },
  {
    "id": 7803,
    "en": "manifestation",
    "kk": "[͵mænɪfəˋsteɪʃ(ə)n]",
    "zh": "n. 表現，顯現；表現形式；（鬼魂或神靈）出現，顯靈；示威運動",
    "unit": 8,
    "example": "[n.] What Watson did was to observe muscular habits, because he viewed them as a manifestation of thinking.",
    "exampleZh": "沃森所做的就是觀察肌肉習慣，因為他認為肌肉習慣是思考的表現形式。"
  },
  {
    "id": 7804,
    "en": "indicator",
    "kk": "[ˋɪndə͵ketɚ]",
    "zh": "n. 指示者；指示物",
    "unit": 8,
    "example": "[n.] Put your indicator on.",
    "exampleZh": "把你的指示器開啟。"
  },
  {
    "id": 7805,
    "en": "stratagem",
    "kk": "[ˋstrætədʒəm]",
    "zh": "n. <正式>計謀，詭計；策略，招數",
    "unit": 8,
    "example": "[n.] Trade discounts may be used as a competitive stratagem to secure customer loyalty.",
    "exampleZh": "商業折扣可以用作保持顧客忠誠度的一種競爭策略。"
  },
  {
    "id": 7806,
    "en": "manoeuvre",
    "kk": "[məˋnuvər]",
    "zh": "n. 熟練（謹慎）的動作；軍事演習；策略，花招；欺詐性操作；v. （使謹慎或熟練地）移動；操縱，控制",
    "unit": 8,
    "example": "[v.] There was very little room to manoeuvre.",
    "exampleZh": "幾乎沒有什麼活動空間。"
  },
  {
    "id": 7807,
    "en": "activate",
    "kk": "[ˋæktə͵vet]",
    "zh": "v. 使活化；使活潑",
    "unit": 8,
    "example": "[v.] How can I activate this account?",
    "exampleZh": "我怎麼啟用這個賬號呢？"
  },
  {
    "id": 7808,
    "en": "precipitate",
    "kk": "[prɪˋsɪpɪteɪt]",
    "zh": "v. <正式>使……突然降臨，加速（壞事的發生）；使突然陷入（某種狀態）（precipitate sb./sth. into）；（使）沉澱，（使）澱析；<正式>使急落直下，使陡然下落；降水（如雨、雪、冰雹）；adj. <正式>魯莽的，倉促的（=precipitous）；（事件，情況）突如其來的，突然的；猛地落下的；n. 沉澱物，析出物",
    "unit": 8,
    "example": "[v.] I don't think we should make precipitate decisions.",
    "exampleZh": "我認為我們不應該做出倉促的決定。"
  },
  {
    "id": 7809,
    "en": "softening",
    "kk": "[ˋsɔfnɪŋ]",
    "zh": "n. 軟化，變軟；（態度、立場、語氣等）緩和，減弱；v. soften 的現在分詞/動名詞：使變軟，使柔和，使緩和；變軟，變柔和，變緩和；adj. 起軟化作用的；使（皮膚）柔潤的",
    "unit": 8,
    "example": "[n.] She felt herself softening towards him.",
    "exampleZh": "她感覺自己對他逐漸溫和起來。"
  },
  {
    "id": 7810,
    "en": "moderation",
    "kk": "[͵mɑdəˋreɪʃ(ə)n]",
    "zh": "n. 適度，有節制；（尤指政治觀點或行為的）溫和，不偏激；緩和，減輕；<英>評分審核制；牛津大學文學士學位第一次考試（Moderations）；（中子）減速",
    "unit": 8,
    "example": "[n.] The same boring old advice that applies to everything in parenting: moderation.",
    "exampleZh": "還是那句老生常談的話，適用於所有的育兒問題：適度。"
  },
  {
    "id": 7811,
    "en": "tempering",
    "kk": "[ˋtempərɪŋ]",
    "zh": "n. （機械）回火；（玻璃）鋼化；v. 調和，緩和（temper 的現在分詞或動名詞）",
    "unit": 8,
    "example": "[n.] But tempering alone is usually not enough.",
    "exampleZh": "但是單純的退火是不夠的。"
  },
  {
    "id": 7812,
    "en": "lessening",
    "kk": "[ˋlesnɪŋ]",
    "zh": "n. 減輕，減少，變小；v. 減輕，減少，變小（lessen 的現在分詞或動名詞）",
    "unit": 8,
    "example": "[n.] Most people, in fact, favor the lessening of prejudice.",
    "exampleZh": "事實上，大多數人都贊成減少偏見。"
  },
  {
    "id": 7813,
    "en": "discussable",
    "kk": "",
    "zh": "adj. 可討論的",
    "unit": 8,
    "example": "[adj.] He tried to learn how to use the word discussable correctly.",
    "exampleZh": "他試著學習如何正確使用「discussable」這個單字。"
  },
  {
    "id": 7814,
    "en": "unsettled",
    "kk": "[ʌnˋsetld]",
    "zh": "adj. 不平穩的，易變的，動盪不定的；不安的，心神不寧的，不舒服的；未處理的，未解決的，未決定的；未付的，未結清的，未結算的；無人定居的，無居民的",
    "unit": 8,
    "example": "[adj.] The presence of the two policemen unsettled her.",
    "exampleZh": "兩名警察的出現令她不安。"
  },
  {
    "id": 7815,
    "en": "invalid",
    "kk": "[ɪnˋvælɪd; ˋɪnvəlɪd]",
    "zh": "adj. （法律上）無效的，作廢的；（論據、理由等）站不住腳的，錯誤的；（計算機）不能識別的；殘疾的；n.  病弱者，傷殘者；vt. 使（因傷或病）退役；使傷殘，使病弱",
    "unit": 8,
    "example": "[n.] The trial was stopped and the results declared invalid.",
    "exampleZh": "審判被終止了，其結果被宣佈無效。"
  },
  {
    "id": 7816,
    "en": "annulled",
    "kk": "[əˋnʌld]",
    "zh": "vt. 取消，廢除，宣告無效（annul 的過去式和過去分詞）；adj. 已宣告無效的，已廢止的",
    "unit": 8,
    "example": "[adj.] Their marriage was annulled after just six months.",
    "exampleZh": "他們的婚姻僅過半年就宣告取消。"
  },
  {
    "id": 7817,
    "en": "nullified",
    "kk": "[ˋnʌlɪfaɪd]",
    "zh": "adj. 取消的；無效的",
    "unit": 8,
    "example": "[adj.] The rise in prices nullified the rise in wages.",
    "exampleZh": "上漲的物價使增加的工資化為烏有。"
  },
  {
    "id": 7818,
    "en": "cancelled",
    "kk": "[ˋkænsld]",
    "zh": "v. 取消；作廢；解約；抵消（cancel 的過去式和過去分詞）；adj. 取消的，已取消的，被取消的",
    "unit": 8,
    "example": "[v.] The game was cancelled owing to torrential rain.",
    "exampleZh": "比賽因大雨取消了。"
  },
  {
    "id": 7819,
    "en": "deletion",
    "kk": "[dɪˋliʃn]",
    "zh": "n. 刪除，刪去的部分；（核酸分子或染色體的）缺失",
    "unit": 8,
    "example": "[n.] Information must be stored so that it is secure from accidental deletion.",
    "exampleZh": "必須把資料保存起來，這樣才不至於無意中刪除。"
  },
  {
    "id": 7820,
    "en": "exclusion",
    "kk": "[ɪkˋskluʒən]",
    "zh": "n. 排斥；排除在外",
    "unit": 8,
    "example": "[n.] Exclusion of air creates a vacuum in the bottle.",
    "exampleZh": "瓶子裡的空氣排除後就產生真空。"
  },
  {
    "id": 7821,
    "en": "lacuna",
    "kk": "[ləˋkjunə; ləˋkunə]",
    "zh": "n. <正式>空白，空隙，缺漏（多指文本、文件、論述或知識中的缺失部分）；（生物學、組織學）腔隙，陷窩；（法學）法律空白，法律漏洞；（建築）天花板或穹頂上的凹格，藻井；（Lacuna）拉庫納（西語姓氏）",
    "unit": 8,
    "example": "[n.] His long reticence temporarily distracted attention from a bigger lacuna.",
    "exampleZh": "他始終保持沉默，分散了人們對一個更大缺漏的注意力。"
  },
  {
    "id": 7822,
    "en": "equable",
    "kk": "[ˋekwəb(ə)l]",
    "zh": "adj. 平靜溫和的，不易煩躁的；穩定少變的，變動小的",
    "unit": 8,
    "example": "[adj.] How it rebukes by its tough and equable serenity all weathers, this gusty-temper'd little whiffet.",
    "exampleZh": "這株在狂風中飄搖的小植物，以它堅韌平和的沉靜姿態，反襯出所有惡劣天氣的浮躁。"
  },
  {
    "id": 7823,
    "en": "imperturbable",
    "kk": "[͵ɪmpərˋtɝbəb(ə)l]",
    "zh": "adj. 冷靜的，泰然自若的，沉著的",
    "unit": 8,
    "example": "[adj.] Wu sun-fu listened attentively while his eyes scanned Tu weiyueh's imperturbable face.",
    "exampleZh": "吳蓀甫很注意地聽著，眼光在屠維嶽那冷靜的臉上打圈子。"
  },
  {
    "id": 7824,
    "en": "unexcitable",
    "kk": "",
    "zh": "adj. 不易激動的",
    "unit": 8,
    "example": "[adj.] The football match is the longest and most unexcitable of matches.",
    "exampleZh": "這場足球賽是時間最長，最難以使人激動的球賽。"
  },
  {
    "id": 7825,
    "en": "exactly",
    "kk": "[ɪɡˋzæktli]",
    "zh": "adv. 精確地、確切地、恰好、正是如此",
    "unit": 8,
    "example": "[adv.] The accounting audit confirmed that the financial figures matched our records exactly.",
    "exampleZh": "會計稽核確認該財務數字與我們的記錄完全精確相符。"
  },
  {
    "id": 7826,
    "en": "promptly",
    "kk": "[ˋprɑmptli]",
    "zh": "adv. 迅速地；立即，馬上；準時地",
    "unit": 8,
    "example": "[adv.] He deals with emergencies promptly.",
    "exampleZh": "他迅速地應對突發事件。"
  },
  {
    "id": 7827,
    "en": "powerfulness",
    "kk": "[ˋpaʊɚfəlnɪs]",
    "zh": "n. 有力；強烈",
    "unit": 8,
    "example": "[n.] Both fortune and powerfulness originated from a harmonious family.",
    "exampleZh": "一個美好的家庭，是一切幸福和力量的根源。"
  },
  {
    "id": 7828,
    "en": "vigour",
    "kk": "[ˋvɪɡər]",
    "zh": "n. 活力，精力；氣勢；【名】 （Vigour）（法）維古爾（人名）",
    "unit": 8,
    "example": "[n.] He has approached his job with renewed vigour.",
    "exampleZh": "他已帶著重新煥發的活力投入了工作。"
  },
  {
    "id": 7829,
    "en": "mightiness",
    "kk": "[ˋmaɪtɪnɪs]",
    "zh": "n. 強烈；強大",
    "unit": 8,
    "example": "[n.] There is no denying the mightiness of the sea.",
    "exampleZh": "誰能否認海的偉大呢？"
  },
  {
    "id": 7830,
    "en": "instalment",
    "kk": "[ɪnˋstɔlmənt]",
    "zh": "n. （分期付款的）一期付款；（連載故事的）一節，（電視連續劇的）一集；安裝，安置；就任，就職",
    "unit": 8,
    "example": "[n.] I bought the house by instalment.",
    "exampleZh": "我用分期付款的方式購買了這所房子。"
  },
  {
    "id": 7831,
    "en": "surcharge",
    "kk": "[ˋsɝtʃɑrdʒ]",
    "zh": "n. 附加費，額外費用，附加稅；超載，過載，（土木工程）堆載；vt. 對……加收附加費，額外收費，追加罰款；使裝載過多，使負擔過重，使過分充滿",
    "unit": 8,
    "example": "[n.] The government introduced a 15% surcharge on imports.",
    "exampleZh": "政府推出了15%的進口附加費。"
  },
  {
    "id": 7832,
    "en": "ricochet",
    "kk": "[ˋrɪkəʃeɪ]",
    "zh": "n. 跳彈，跳飛（子彈、炮彈等擊中堅硬表面後彈起）；vi. 跳飛，反彈（子彈、炮彈或球等擊中表面後彈回或改變方向飛開）；vt. 使（子彈等）跳飛",
    "unit": 8,
    "example": "[n.] He was wounded in the shoulder by a ricochet.",
    "exampleZh": "他被一顆彈起的子彈打傷了肩膀。"
  },
  {
    "id": 7833,
    "en": "boomerang",
    "kk": "[ˋbuməræŋ]",
    "zh": "n. 迴旋鏢，飛去來器；<喻>自食其果的言行；（職場）離職後又返回原公司工作的員工，即“回頭客”；vi. （指計劃、行動）產生反效果，害人反害己，自食其果",
    "unit": 8,
    "example": "[vi.] He risks defeat in the referendum that he called, but which threatens to boomerang against him.",
    "exampleZh": "他冒著失敗的風險呼籲全民投票，但這很可能會使他面臨自作自受的危險。"
  },
  {
    "id": 7834,
    "en": "preparedness",
    "kk": "[prɪˋperdnəs]",
    "zh": "n. 有準備；已準備；做好準備（尤指為戰爭或災難等所作的準備）；（正式）願意，打算（做某事）",
    "unit": 8,
    "example": "[n.] They may try hard to show their preparedness.",
    "exampleZh": "他們可能會努力展示自己的準備情況。"
  },
  {
    "id": 7835,
    "en": "fitness",
    "kk": "[ˋfɪtnəs]",
    "zh": "n. 健康；適當",
    "unit": 8,
    "example": "[n.] The corporate wellness program encourages physical fitness and healthy nutrition.",
    "exampleZh": "企業健康計畫鼓勵規律運動保持健康以及良好的營養飲食。"
  },
  {
    "id": 7836,
    "en": "willingness",
    "kk": "[ˋwɪlɪŋnəs]",
    "zh": "n. 自願；樂意",
    "unit": 8,
    "example": "[n.] He indicated his willingness to cooperate.",
    "exampleZh": "他暗示願意合作。"
  },
  {
    "id": 7837,
    "en": "inclination",
    "kk": "[͵ɪnkləˋneʃən]",
    "zh": "n. 傾向；意向",
    "unit": 8,
    "example": "[n.] She showed no inclination to go.",
    "exampleZh": "她沒有表現出要走的意向。"
  },
  {
    "id": 7838,
    "en": "regain",
    "kk": "[rɪˋɡeɪn]",
    "zh": "v. 重新獲得，恢復；重回，回到（某處）；n. 取回",
    "unit": 8,
    "example": "[v.] I struggled to regain some dignity.",
    "exampleZh": "我努力恢復自己的一點兒尊嚴。"
  },
  {
    "id": 7839,
    "en": "recompense",
    "kk": "[ˋrekəmpens]",
    "zh": "v. <正式>賠償，補償；<正式>酬謝，回報；n. <正式>（常作不可數名詞）賠償，補償；報酬，酬金",
    "unit": 8,
    "example": "[n.] He demands no financial recompense for his troubles.",
    "exampleZh": "他對遭受到的麻煩沒有要求經濟補償。"
  },
  {
    "id": 7840,
    "en": "augmentation",
    "kk": "[͵ɔɡmenˋteɪʃ(ə)n]",
    "zh": "n. 增大，增多；增加物；（主旋律的）延長；（作為殊榮而對紋章進行的）擴充",
    "unit": 8,
    "example": "[n.] If not, then some augmentation of testing practices may be required.",
    "exampleZh": "如果不是，就需要一些增加的測試實踐。"
  },
  {
    "id": 7841,
    "en": "supplementing",
    "kk": "[ˋsʌplɪmentɪŋ]",
    "zh": "v. 補充，增補（supplement 的現在分詞/動名詞）",
    "unit": 8,
    "example": "[v.] If we end up supplementing income taxation with a modest VAT, I won't complain.",
    "exampleZh": "如果我們最終能夠通過適度的增值稅來補充所得稅收，我不會反對。"
  },
  {
    "id": 7842,
    "en": "boosting",
    "kk": "[ˋbustɪŋ]",
    "zh": "v. 促進，提高，增強；推進（boost 的現在分詞／動名詞）；n. 助推，促進，增強；（工程）升壓，加力；（機器學習）提升方法（集成學習方法）；（礦井、隧道通風）局部通風，輔助通風",
    "unit": 8,
    "example": "[v.] Breast milk is believed to have immunity-boosting properties that formula lacks.",
    "exampleZh": "母乳被認為擁有提高免疫力的性能，這是配方奶所沒有的。"
  },
  {
    "id": 7843,
    "en": "swelling",
    "kk": "[ˋswelɪŋ]",
    "zh": "n. 腫塊，腫脹處；膨脹，腫脹；自然突出部分；v. （身體部位）腫脹，膨脹， 使（某物）膨脹，使腫脹；（使）鼓起，（使）隆起；（使）增長，增加，擴大（swell 的現在分詞）",
    "unit": 8,
    "example": "[n.] You may notice redness and swelling after the injection.",
    "exampleZh": "注射後會出現紅腫。"
  },
  {
    "id": 7844,
    "en": "resumption",
    "kk": "[rɪˋzʌmpʃ(ə)n]",
    "zh": "n. <正式>重新開始，恢復；<法律>（土地、權利等的）重獲",
    "unit": 8,
    "example": "[n.] We are hoping for an early resumption of peace talks.",
    "exampleZh": "我們企盼著早日恢復和談。"
  },
  {
    "id": 7845,
    "en": "recommencement",
    "kk": "",
    "zh": "n. 重新開始，重頭再來",
    "unit": 8,
    "example": "[n.] Any intentions of return should be sent at least 14 days prior to recommencement.",
    "exampleZh": "任何復工的意圖應該至少在復工前14天發給管理人員。"
  },
  {
    "id": 7846,
    "en": "continuation",
    "kk": "[kən͵tɪnjuˋeɪʃ(ə)n]",
    "zh": "n. 連續，持續；延續物，附加物；（停頓後的）繼續，再開始",
    "unit": 8,
    "example": "[n.] This chapter is a continuation of Chapter 8.",
    "exampleZh": "本章是第8章的延續。"
  },
  {
    "id": 7847,
    "en": "renovation",
    "kk": "[͵rɛnəˋveʃən]",
    "zh": "n. 更新；修理",
    "unit": 8,
    "example": "[n.] She wants him to share his renovation experience with her.",
    "exampleZh": "她希望他能分享一下裝修的經驗。"
  },
  {
    "id": 7848,
    "en": "reclaim",
    "kk": "[rikˋlem]",
    "zh": "v. 使改過；使悔改",
    "unit": 8,
    "example": "[v.] Pietro reclaimed his innocence.",
    "exampleZh": "彼得羅恢復了清白。"
  },
  {
    "id": 7849,
    "en": "replicate",
    "kk": "[ˋreplɪkeɪt]",
    "zh": "v. 重複，複製；（遺傳物質或生物）自我繁殖，自我複製；復證（實驗或試驗以得出一致的結果）；adj. 複製的；（實驗或試驗）復現的；n. 複製品；（樂）高（或低）八度反覆音",
    "unit": 8,
    "example": "[v.] He invited her to his laboratory to see if she could replicate the experiment.",
    "exampleZh": "他邀請她到他的實驗室看她能否複製該實驗。"
  },
  {
    "id": 7850,
    "en": "duplicate",
    "kk": "[ˋdupləkət]",
    "zh": "n. 複製品；副本；adj. 完全一樣的；複製的",
    "unit": 8,
    "example": "[adj.] Is this a duplicate or the original?",
    "exampleZh": "這是副本還是正本？"
  },
  {
    "id": 7851,
    "en": "evenly",
    "kk": "[ˋivnli]",
    "zh": "adv. 平均地，均等地；平穩地，有規律地；鎮定地，平和地；獲勝機會相當地，勢均力敵地",
    "unit": 8,
    "example": "[adv.] He stood there breathing deeply and evenly.",
    "exampleZh": "他站在那裡深深地、均勻地呼吸。"
  },
  {
    "id": 7852,
    "en": "horizontally",
    "kk": "[͵hɔrɪˋzɑntəli]",
    "zh": "adv. 橫向地、水平地",
    "unit": 8,
    "example": "[adv.] Please arrange the product images horizontally across the middle of the web page.",
    "exampleZh": "請將產品圖片橫向平放排列於網頁中央。"
  },
  {
    "id": 7853,
    "en": "stating",
    "kk": "[ˋsteɪtɪŋ]",
    "zh": "v. 說明、陳述、敘述（state 的現在分詞/動名詞，常後接 that 從句或名詞短語）；n. 說明、敘述（state 的動名詞用法）",
    "unit": 8,
    "example": "[v.] They end up embracing a different error: stating the obvious.",
    "exampleZh": "他們最終陷入了另一個不同的錯誤：去陳述那些顯而易見的事實。"
  },
  {
    "id": 7854,
    "en": "naming",
    "kk": "[ˋneɪmɪŋ]",
    "zh": "n. 命名，取名；任命，提名；v. 給……取名字（name 的 ing 形式）",
    "unit": 8,
    "example": "[n.] Paying a naming expert is expensive.",
    "exampleZh": "聘請命名專家的費用很高。"
  },
  {
    "id": 7855,
    "en": "defining",
    "kk": "[dɪˋfaɪnɪŋ]",
    "zh": "adj. 最典型的，界定性的；起決定性作用的，關鍵性的；v. 規定；給……下定義；表明特徵（define 的現在分詞或動名詞）",
    "unit": 8,
    "example": "[adj.] It is the defining aspect of our identity.",
    "exampleZh": "它是對我們身份具有決定作用的一個方面。"
  },
  {
    "id": 7856,
    "en": "committed",
    "kk": "[kəˋmɪtɪd]",
    "zh": "adj. 忠誠的、堅定的",
    "unit": 8,
    "example": "[adj.] I have never committed any crime.",
    "exampleZh": "我從沒有犯過任何罪。"
  },
  {
    "id": 7857,
    "en": "devoted",
    "kk": "[dɪˋvoʊtɪd]",
    "zh": "adj. 摯愛的，忠誠的；熱衷的；專用於……的；v. 獻身，致力；用於（devote 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[v.] He devoted his energies to the reformation of science.",
    "exampleZh": "他把他的全部精力投入到了科學的革新中。"
  },
  {
    "id": 7858,
    "en": "dedicated",
    "kk": "[ˋdedɪkeɪtɪd]",
    "zh": "adj. 專心致志的，獻身的；專用的，專門用途的；vt. 致力於，獻身於；（在書、音樂或作品的前部）題獻詞；為（大樓，紀念碑）揭幕（dedicate 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] He's quite dedicated to his students.",
    "exampleZh": "他奉獻很多給他的學生們。"
  },
  {
    "id": 7859,
    "en": "abate",
    "kk": "[əˋbeɪt]",
    "zh": "v. <正式>（使）減輕，減少；<法律>廢除；消除（妨礙行為）；（指令狀、法律訴訟等）無效；【名】 （Abate）（英、意、法、埃塞）阿巴特（人名）",
    "unit": 8,
    "example": "[v.] Steps are to be taken to abate pollution.",
    "exampleZh": "應該採取措施減少汙染。"
  },
  {
    "id": 7860,
    "en": "lull",
    "kk": "[lʌl]",
    "zh": "v. 使安靜，使昏昏欲睡；使（人）放鬆警惕，哄騙；（使）減弱，平息，停止；n. 間歇，暫時平靜；低谷期；【名】 （Lull）（美、西、德、加、英、法）勒爾（人名）",
    "unit": 8,
    "example": "[v.] You try not to let the gentle sound of the waterfall lull you into missing your birdie putt.",
    "exampleZh": "你試著不要讓瀑布輕柔的聲音誘使你打偏你的小鳥球。"
  },
  {
    "id": 7861,
    "en": "encouraging",
    "kk": "[ɪnˋkɝɪdʒɪŋ]",
    "zh": "adj. 鼓舞人心的，鼓勵的；v. 鼓勵，激勵；鼓動，慫恿，支持；刺激，促進（encourage 的現在分詞形式）",
    "unit": 8,
    "example": "[adj.] The results have been encouraging.",
    "exampleZh": "這些結果是鼓舞人心的。"
  },
  {
    "id": 7862,
    "en": "caring",
    "kk": "[ˋkerɪŋ]",
    "zh": "adj. 關心他人的，體貼的；護理的，看管的；n. 看護工作；v. 照顧，照料；在意，擔憂；喜歡，想要（care 的現在分詞形式）",
    "unit": 8,
    "example": "[adj.] He's a very caring person.",
    "exampleZh": "他是個非常體貼人的人。"
  },
  {
    "id": 7863,
    "en": "reassuring",
    "kk": "[͵riəˋʃʊrɪŋ]",
    "zh": "adj. 使人安心的，使人放心的；v. 使放心，使消除疑慮（reassure 的現在分詞）",
    "unit": 8,
    "example": "[adj.] It was reassuring to hear John's familiar voice.",
    "exampleZh": "聽到約翰熟悉的聲音令人感到安慰。"
  },
  {
    "id": 7864,
    "en": "concerned",
    "kk": "[kənˋsɝnd]",
    "zh": "adj. 相關的， 關於（某個主題）的；擔心的，焦急的；關注的，感興趣的；關心的，掛念的；v. 有關，關於；涉及，影響；使憂慮，使擔心（concern 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[adj.] We are concerned about the child's welfare.",
    "exampleZh": "我們關注那個孩子的福祉。"
  },
  {
    "id": 7865,
    "en": "assuredly",
    "kk": "[əˋʃʊrədli]",
    "zh": "adv. 確實地，確信地，無疑地；自信地，從容地",
    "unit": 8,
    "example": "[adv.] \"I did not say that.\"—\"You most assuredly did.\"",
    "exampleZh": "\"我沒有那麼說。\"—\"你肯定說了。\""
  },
  {
    "id": 7866,
    "en": "sales",
    "kk": "[ˋseɪlz]",
    "zh": "adj. （多用作定語）銷售的，售貨的，有關銷售的；n. 銷售（sale 的複數）；銷售量；銷售額；（常不帶冠詞）銷售部門，銷售工作；促銷，減價出售（常作 the sales）；（Sales）人名：薩萊斯（意、西、葡），薩勒（法），塞爾斯（英）",
    "unit": 8,
    "example": "[n.] Sales have slumped this year.",
    "exampleZh": "今年銷售量銳減。"
  },
  {
    "id": 7867,
    "en": "truthfully",
    "kk": "[ˋtruθfəli]",
    "zh": "adv. 誠實地，如實地，真實地；（作句首狀語或插入語）說實話，說真的，坦率地說",
    "unit": 8,
    "example": "[adv.] I answered all their questions truthfully.",
    "exampleZh": "我如實地回答了他們的所有問題。"
  },
  {
    "id": 7868,
    "en": "honestly",
    "kk": "[ˋɑnɪstli]",
    "zh": "adv. 誠實地，真誠地，公正地；說實話，老實說，真的；<口語> 真是的，天哪",
    "unit": 8,
    "example": "[adv.] Honestly, you might have told me!",
    "exampleZh": "說實話，你事先應該告訴我呀！"
  },
  {
    "id": 7869,
    "en": "frankly",
    "kk": "[ˋfræŋkli]",
    "zh": "adv. 率直地；坦白地",
    "unit": 8,
    "example": "[adv.] They frankly admitted their responsibility.",
    "exampleZh": "他們坦率地承認了責任。"
  },
  {
    "id": 7870,
    "en": "candidly",
    "kk": "[ˋkændɪdli]",
    "zh": "adv. 坦白地，率直地，直率而誠懇地；坦率地說，說實話",
    "unit": 8,
    "example": "[adv.] You attempt to address the situation openly and candidly.",
    "exampleZh": "你試著公開的坦率的瞭解情況。"
  },
  {
    "id": 7871,
    "en": "openly",
    "kk": "[ˋoʊpənli]",
    "zh": "adv. 公開地，公然地，坦率地",
    "unit": 8,
    "example": "[adv.] She openly criticized other athletes.",
    "exampleZh": "她公開批評過其他運動員。"
  },
  {
    "id": 7872,
    "en": "inexplicable",
    "kk": "[͵ɪnɪkˋsplɪkəb(ə)l]",
    "zh": "adj. 費解的，無法說明的，不能解釋的",
    "unit": 8,
    "example": "[adj.] For some inexplicable reason he gave up a fantastic job.",
    "exampleZh": "由於某種莫名其妙的原因，他放棄了一份很不錯的工作。"
  },
  {
    "id": 7873,
    "en": "unexplainable",
    "kk": "",
    "zh": "adj. 費解的；無法說明的",
    "unit": 8,
    "example": "[adj.] Life is unexplainable. So, don't try to explain it. Just live it.",
    "exampleZh": "生活無從解釋，所以別再試著去解釋它，就這樣活下去吧。"
  },
  {
    "id": 7874,
    "en": "insoluble",
    "kk": "[ɪnˋsɑljəb(ə)l]",
    "zh": "adj. 不能解決的，無法解決的；（化學）不能溶解的；難以解釋的，無法解釋的",
    "unit": 8,
    "example": "[adj.] He added, once those insoluble particles arrive in the brain, we do not see much clearance.",
    "exampleZh": "他還補充說，一旦那些不溶性粒子到達腦部，清除率會變得很低。"
  },
  {
    "id": 7875,
    "en": "unsolvable",
    "kk": "[ʌnˋsɑlvəbl]",
    "zh": "adj. 不能解決的；不能溶解的",
    "unit": 8,
    "example": "[adj.] None of these problems are unsolvable.",
    "exampleZh": "這些問題沒有不能解決的。"
  },
  {
    "id": 7876,
    "en": "incomprehensible",
    "kk": "[ɪn͵kɑmprɪˋhensəb(ə)l]",
    "zh": "adj. 無法理解的，費解的，不可思議的；（古義）無限的，無邊無際的",
    "unit": 8,
    "example": "[adj.] Even articles freely available are usually written in academic language incomprehensible to the average reader.",
    "exampleZh": "即便是可以免費獲得的文章也通常是用普通讀者難以理解的學術語言撰寫的。"
  },
  {
    "id": 7877,
    "en": "unfamiliar",
    "kk": "[͵ʌnfəˋmɪliər]",
    "zh": "adj. 不熟悉的，陌生的；不常見的，生疏的；對……不熟悉的，不熟知的，沒有經驗的",
    "unit": 8,
    "example": "[adj.] My horse shied at the unfamiliar noise.",
    "exampleZh": "這陌生的聲音把我的馬驚了。"
  },
  {
    "id": 7878,
    "en": "uncommon",
    "kk": "[ʌnˋkɑmən]",
    "zh": "adj. 不尋常的，罕有的，不常見的；非凡的，程度深的，特別大的；adv. 異乎尋常地，非常",
    "unit": 8,
    "example": "[adv.] A 15-year lifespan is not uncommon for a dog.",
    "exampleZh": "15年的壽命對狗來說並非罕見。"
  },
  {
    "id": 7879,
    "en": "unwonted",
    "kk": "[ʌnˋwoʊntɪd]",
    "zh": "adj. 不尋常的，少有的，非慣常的；（舊）不習慣的",
    "unit": 8,
    "example": "[adj.] Mrs. Darling had put the children to bed in unwonted silence and lit their night-lights.",
    "exampleZh": "達琳太太在少有的沉默中讓孩子們上床睡覺，並點亮了他們的夜燈。"
  },
  {
    "id": 7880,
    "en": "unknown",
    "kk": "[͵ʌnˋnoʊn]",
    "zh": "adj. 未知的，未被確認的；不出名的，無名的；從未發生的，從不存在的；n. 無名者，不出名的人；不明情況，未知因素；不為人知的地方，未知的事物（the unknown）；（數）未知數，未知量",
    "unit": 8,
    "example": "[n.] The motive for the killing is unknown.",
    "exampleZh": "殺人的動機不明。"
  },
  {
    "id": 7881,
    "en": "undetermined",
    "kk": "[͵ʌndɪˋtɝmɪnd]",
    "zh": "adj. 未確定的，待定的，未解決的；（指人）缺乏決斷力的，優柔寡斷的；（數學）用於 undetermined coefficient 等搭配，指係數尚未確定（待定係數，未定係數）",
    "unit": 8,
    "example": "[adj.] The cause of his illness and death remain undetermined.",
    "exampleZh": "他的疾病和死亡原因仍未確定。"
  },
  {
    "id": 7882,
    "en": "unresolved",
    "kk": "[͵ʌnrɪˋzɑlvd]",
    "zh": "adj. 未解決的，懸而未決的；（人）無決斷力的，不果斷的；（音樂）未解決的（和聲）",
    "unit": 8,
    "example": "[adj.] Unresolved or unacknowledged fears can trigger sleepwalking.",
    "exampleZh": "未解決或未被注意的恐懼感會引發夢遊。"
  },
  {
    "id": 7883,
    "en": "unsure",
    "kk": "[͵ʌnˋʃʊr]",
    "zh": "adj. 不確定的，不肯定的，無把握的；缺乏信心的，沒有自信的",
    "unit": 8,
    "example": "[adj.] \"I was very unsure of myself after the divorce,\" she says, unconsciously sweeping back the curls from her forehead.",
    "exampleZh": "「離婚後我對自己很沒有信心，」她邊說邊無意識地把前額上的幾綹鬈髮往後捋。"
  },
  {
    "id": 7884,
    "en": "pending",
    "kk": "[ˋpendɪŋ]",
    "zh": "adj. 待決的，待定的，待處理的；即將發生的，迫近的；prep. 直到……為止，在……之前，在等待……之際；v. 等候判定或決定（pend的現在分詞）；【名】 （Pending）（瑞典）彭丁（人名）",
    "unit": 8,
    "example": "[adj.] Nine cases are still pending.",
    "exampleZh": "尚有九宗案件待決。"
  },
  {
    "id": 7885,
    "en": "futile",
    "kk": "[ˋfjut(ə)l]",
    "zh": "adj. 徒勞的，無用的；不重要的；沒有出息的",
    "unit": 8,
    "example": "[adj.] It would be futile to protest.",
    "exampleZh": "抗議也無用。"
  },
  {
    "id": 7886,
    "en": "pointless",
    "kk": "[ˋpɔɪntləs]",
    "zh": "adj. 毫無意義的，毫無目標的；浪費時間",
    "unit": 8,
    "example": "[adj.] Violence is always pointless.",
    "exampleZh": "暴力總是毫無意義的。"
  },
  {
    "id": 7887,
    "en": "purposeless",
    "kk": "[ˋpɝpəsləs]",
    "zh": "adj. 無目的的，沒有意義的；無益的",
    "unit": 8,
    "example": "[adj.] Time may also be wasted in purposeless meetings.",
    "exampleZh": "時間也可能被浪費在無目的的會議中。"
  },
  {
    "id": 7888,
    "en": "impractical",
    "kk": "[͵ɪmˋpræktəkəl]",
    "zh": "adj. 不實際的",
    "unit": 8,
    "example": "[adj.] They prove impractical for city councils.",
    "exampleZh": "事實證明，它們對市議會來說是不切實際的。"
  },
  {
    "id": 7889,
    "en": "evaporative",
    "kk": "[ɪˋvæpə͵reɪtɪv]",
    "zh": "adj. 蒸發的，成為蒸氣的，與蒸發有關的",
    "unit": 8,
    "example": "[adj.] But another way to keep food fresh is to use an evaporative cooler.",
    "exampleZh": "另一種保持食物新鮮的方法是使用蒸發冷卻器。"
  },
  {
    "id": 7890,
    "en": "vaporous",
    "kk": "[ˋveɪpərəs]",
    "zh": "adj. 空想的；多蒸氣的；霧狀的",
    "unit": 8,
    "example": "[adj.] He is a vaporous and shifting mirage.",
    "exampleZh": "他像是一團霧，漂移不定，變幻莫測。"
  },
  {
    "id": 7891,
    "en": "vaporescent",
    "kk": "",
    "zh": "adj. 汽化（或蒸發）過程的",
    "unit": 8,
    "example": "[adj.] He tried to learn how to use the word vaporescent correctly.",
    "exampleZh": "他試著學習如何正確使用「vaporescent」這個單字。"
  },
  {
    "id": 7892,
    "en": "unafraid",
    "kk": "[͵ʌnəˋfreɪd]",
    "zh": "adj. 不怕的，無畏的",
    "unit": 8,
    "example": "[adj.] She was unafraid of conflict.",
    "exampleZh": "她不怕發生衝突。"
  },
  {
    "id": 7893,
    "en": "unimportant",
    "kk": "[͵ʌnɪmˋpɔrt(ə)nt]",
    "zh": "adj. 不重要的，無關緊要的，瑣碎的",
    "unit": 8,
    "example": "[adj.] This consideration was not unimportant.",
    "exampleZh": "這項考慮並非無關緊要。"
  },
  {
    "id": 7894,
    "en": "uncertain",
    "kk": "[ənˋsɝtən]",
    "zh": "adj. 不確定的",
    "unit": 8,
    "example": "[adj.] The economic climate remains uncertain.",
    "exampleZh": "經濟氣候依然是不確定。"
  },
  {
    "id": 7895,
    "en": "careless",
    "kk": "[ˋkɛrləs]",
    "zh": "adj. 粗心的",
    "unit": 8,
    "example": "[adj.] She had been inexcusably careless.",
    "exampleZh": "她曾粗心大意得不可原諒。"
  },
  {
    "id": 7896,
    "en": "extravagant",
    "kk": "[ɪkˋstrævəɡənt]",
    "zh": "adj. 奢侈的，揮霍的；不切實際的，放肆的；豪華的，精美的",
    "unit": 8,
    "example": "[adj.] She's got very extravagant tastes.",
    "exampleZh": "她有很奢侈的嗜好。"
  },
  {
    "id": 7897,
    "en": "inattentive",
    "kk": "[͵ɪnəˋtentɪv]",
    "zh": "adj. 疏忽的，怠慢的，不注意的",
    "unit": 8,
    "example": "[adj.] Boredom has been linked to behavior issues including inattentive driving, mindless snacking, excessive drinking, and addictive gambling.",
    "exampleZh": "無聊感與諸多行為問題相關，包括分心駕駛、無意識進食、過度飲酒以及賭博成癮。"
  },
  {
    "id": 7898,
    "en": "living",
    "kk": "[ˋlɪvɪŋ]",
    "zh": "adj. 活著的，活的；在使用的，在實施的；居住的，起居的；<文>（水）流淌不息的；活躍的；逼真的；n. 生計，收入；生活方式；活著的人（the living）；教區牧師的聖職（聖俸）；v. 居住；生活；生長；繼續存在（live 的現在分詞形式）；【名】 （Living）（英）利文（人名）",
    "unit": 8,
    "example": "[v.] Whereabouts are you living?",
    "exampleZh": "你居住的確切地點是哪裡？"
  },
  {
    "id": 7899,
    "en": "uneasy",
    "kk": "[ʌnˋizi]",
    "zh": "adj. 擔憂的，不安的；令人不舒服的，不安穩的；（情況）不穩定的；（書或音樂）難懂的，晦澀的；不和諧的，矛盾的",
    "unit": 8,
    "example": "[adj.] Mollie gave an uneasy little titter.",
    "exampleZh": "莫莉不自在地微微竊笑了一下。"
  },
  {
    "id": 7900,
    "en": "streetwise",
    "kk": "[ˋstritwaɪz]",
    "zh": "adj. 適應都市生活的，在城市街頭混得開的，有街頭生存智慧的",
    "unit": 8,
    "example": "[adj.] They are two streetwise and sassy girls from Queens.",
    "exampleZh": "她們是兩個來自皇后區的精明潑辣的女孩。"
  },
  {
    "id": 7901,
    "en": "chaste",
    "kk": "[tʃeɪst]",
    "zh": "adj. 純潔的；貞潔的；有道德的；樸素的；n. （Chaste）人名；（法）沙斯特",
    "unit": 8,
    "example": "[n.] Patriarchal culture and institutions constructed them as chaste, silent, obedient, and subordinate.",
    "exampleZh": "父權文化和制度把她們塑造成貞潔、沉默、順從和低下的人。"
  },
  {
    "id": 7902,
    "en": "accommodating",
    "kk": "[əˋkɑmədeɪtɪŋ]",
    "zh": "adj. 樂於助人的；肯通融的；隨和的，溫順的；v. 容納；為……提供住宿；使適應；調節（accommodate 的現在分詞）",
    "unit": 8,
    "example": "[adj.] Eddie was among the most approachable athletes on the team, always very accommodating to me.",
    "exampleZh": "艾迪是隊裡最容易接近的運動員之一，總是很樂於幫助我。"
  },
  {
    "id": 7903,
    "en": "trustworthy",
    "kk": "[ˋtrʌstwɝði]",
    "zh": "adj. 值得信賴的，可信的",
    "unit": 8,
    "example": "[adj.] He is a trustworthy and level-headed leader.",
    "exampleZh": "他是個可信賴的、頭腦冷靜的領導。"
  },
  {
    "id": 7904,
    "en": "experienced",
    "kk": "[ɪkˋspɪriənst]",
    "zh": "adj. 熟練的，有經驗的；v. 經歷，遭遇；體會到，感受到（experience 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[adj.] She's an experienced rider.",
    "exampleZh": "她是位有經驗的騎手。"
  },
  {
    "id": 7905,
    "en": "processed",
    "kk": "[ˋprɑsest]",
    "zh": "adj. 經過加工的、精製的；v. 處理、辦理（process之過去式）",
    "unit": 8,
    "example": "[adj.] All monthly sales data is securely processed by our cloud computing platform.",
    "exampleZh": "所有每月銷售資料均由我們的雲端運算平台進行安全處理。"
  },
  {
    "id": 7906,
    "en": "tired",
    "kk": "[ˋtaɪɚd]",
    "zh": "adj. 疲倦的",
    "unit": 8,
    "example": "[adj.] He looked tired and dishevelled.",
    "exampleZh": "他衣冠不整，顯得很疲倦。"
  },
  {
    "id": 7907,
    "en": "dismayed",
    "kk": "[dɪsˋmeɪd]",
    "zh": "adj. 擔心的，失望沮喪的，驚愕的；v. 使灰心沮喪，使驚慌害怕（dismay 的過去式及過去分詞）",
    "unit": 8,
    "example": "[adj.] They were dismayed to find that the ferry had already left.",
    "exampleZh": "他們發現渡船已經離開，感到很失望。"
  },
  {
    "id": 7908,
    "en": "unwilling",
    "kk": "[ʌnˋwɪlɪŋ]",
    "zh": "adj. 不願意的，不情願的（不想做某事，常作表語後接不定式 to do）；勉強的（並非出於自願，多作定語）",
    "unit": 8,
    "example": "[adj.] She is tough, unwilling to take no for an answer.",
    "exampleZh": "她很難對付，不答應不肯罷休。"
  },
  {
    "id": 7909,
    "en": "unwelcome",
    "kk": "[ʌnˋwelkəm]",
    "zh": "adj. 不受歡迎的，討厭的，不被接受的",
    "unit": 8,
    "example": "[adj.] A most unwelcome event claimed his attention.",
    "exampleZh": "一件最討厭的事情需要他去考慮。"
  },
  {
    "id": 7910,
    "en": "distressing",
    "kk": "[dɪˋstresɪŋ]",
    "zh": "adj. 令人痛苦的，使人悲傷的，令人煩惱的；v. distress 的現在分詞（動名詞）：使痛苦，使憂慮，使困苦",
    "unit": 8,
    "example": "[adj.] She witnessed some very distressing scenes.",
    "exampleZh": "她目睹過一些令人非常痛苦的場面。"
  },
  {
    "id": 7911,
    "en": "unfortunate",
    "kk": "[ʌnˋfɔrtʃənət]",
    "zh": "adj. 不幸的，倒黴的；令人遺憾的，不適當的，尷尬的；不成功的，不利的；<委婉>（指人）生活窮困的，境遇艱難的；n. 不幸的人，苦命人（常用複數）",
    "unit": 8,
    "example": "[adj.] It was an unfortunate accident.",
    "exampleZh": "那是一次不幸的事故。"
  },
  {
    "id": 7912,
    "en": "wispy",
    "kk": "[ˋwɪspi]",
    "zh": "adj. 纖細的，稀疏的，一縷縷的；瘦弱的，脆弱的；模糊的，隱約的",
    "unit": 8,
    "example": "[adj.] NASA says that white wispy cirrus clouds on Earth are made of ice crystals.",
    "exampleZh": "美國航天局說，在地球上稀薄的白色捲雲是由冰晶所組成的。"
  },
  {
    "id": 7913,
    "en": "friable",
    "kk": "[ˋfraɪəbl]",
    "zh": "adj. 易碎的，脆弱的；（土壤）疏鬆的，鬆散易碎的",
    "unit": 8,
    "example": "[adj.] You friable shore with trails of debris.",
    "exampleZh": "易脆的岸散殘跡。"
  },
  {
    "id": 7914,
    "en": "dispassionate",
    "kk": "[dɪsˋpæʃənət]",
    "zh": "adj. 不帶感情的，平心靜氣的，冷靜客觀的；公平的，不偏不倚的，不帶偏見的",
    "unit": 8,
    "example": "[adj.] We, as prosecutors, try to be dispassionate about the cases we bring.",
    "exampleZh": "我們作為公訴人儘量在經手的案件上不帶偏見。"
  },
  {
    "id": 7915,
    "en": "inessential",
    "kk": "[͵ɪnɪˋsenʃl]",
    "zh": "adj. 非必要的，無關緊要的；n. 非必要之物，無關緊要的東西（常用複數）",
    "unit": 8,
    "example": "[adj.] We have omitted footnotes which we judged inessential to the text.",
    "exampleZh": "我們省去了我們認為和正文無關緊要的腳註。"
  },
  {
    "id": 7916,
    "en": "irrelevant",
    "kk": "[͵ɪrˋɛləvənt]",
    "zh": "adj. 不相干的",
    "unit": 8,
    "example": "[adj.] A lot of nit-picking was going on about irrelevant things.",
    "exampleZh": "對不相干的事情一直大肆吹毛求疵。"
  },
  {
    "id": 7917,
    "en": "insignificant",
    "kk": "[͵ɪnsɪˋɡnjɪfɪkənt]",
    "zh": "adj. 不重要的",
    "unit": 8,
    "example": "[adj.] In 1949 Bonn was a small, insignificant city.",
    "exampleZh": "1949年，波恩還是個不足稱道的小城市。"
  },
  {
    "id": 7918,
    "en": "unlucky",
    "kk": "[ʌnˋlʌki]",
    "zh": "adj. 不幸的，不走運的，倒黴的；不吉利的，招致厄運的",
    "unit": 8,
    "example": "[adj.] He was very unlucky not to win.",
    "exampleZh": "他不幸輸了。"
  },
  {
    "id": 7919,
    "en": "unfavourable",
    "kk": "[ʌnˋfeɪvərəbl]",
    "zh": "adj. 不利的，不適宜的；反對的，不贊同的",
    "unit": 8,
    "example": "[adj.] The conditions were unfavourable for agriculture.",
    "exampleZh": "這些條件不利於農業。"
  },
  {
    "id": 7920,
    "en": "meagre",
    "kk": "[ˋmiɡər]",
    "zh": "adj. 微薄的，不足的，貧乏的；瘦的，瘦削的",
    "unit": 8,
    "example": "[adj.] She has moved to a small house and is living off her meagre savings.",
    "exampleZh": "她搬進了一幢小房子，靠自己微薄的積蓄過日子。"
  },
  {
    "id": 7921,
    "en": "scanty",
    "kk": "[ˋskænti]",
    "zh": "adj. 少量的，不足的；（衣服）暴露的，緊（身）的；n. <非正式>女式小短褲（或襯褲）（scanties）",
    "unit": 8,
    "example": "[adj.] The boy followed the old man, who commanded him to open the bag in which he carried his scanty dinner.",
    "exampleZh": "男孩跟著老人，老人命令他打開袋子，袋子裡裝著他僅有的晚餐。"
  },
  {
    "id": 7922,
    "en": "unruffled",
    "kk": "[ʌnˋrʌfld]",
    "zh": "adj. 鎮定的，平靜的，不騷動的；（水面）無波紋的；平整的，未弄亂的，不起皺的；v. 使平整；變得平靜（unruffle 的過去分詞）",
    "unit": 8,
    "example": "[adj.] He remained unruffled by their accusations.",
    "exampleZh": "對於他們的指控他處之泰然。"
  },
  {
    "id": 7923,
    "en": "aristocracy",
    "kk": "[͵ærɪˋstɑkrəsi]",
    "zh": "n. 貴族，貴族階級；貴族統治",
    "unit": 8,
    "example": "[n.] An \"aristocracy of virtue and talent\" thus could be recruited from all classes.",
    "exampleZh": "因此，「德才兼備的貴族」可以從各個階層中招募。"
  },
  {
    "id": 7924,
    "en": "existing",
    "kk": "[ɪɡˋzɪstɪŋ]",
    "zh": "adj. 現存的，現行的；v. 存在，實有；生活，生活方式（exist 的現在分詞形式）",
    "unit": 8,
    "example": "[adj.] Existing timbers are replaced or renewed.",
    "exampleZh": "現有的木材在被替換或更新。"
  },
  {
    "id": 7925,
    "en": "hackneyed",
    "kk": "[ˋhæknid]",
    "zh": "adj. 〈貶〉（言語、說法、題材等）因過度使用而陳腐的，老套的，平庸的；v. 〈舊〉出租（馬匹、馬車等）；役使（hackney 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] This article is rather hackneyed.",
    "exampleZh": "這篇文章寫得太呆板。"
  },
  {
    "id": 7926,
    "en": "unpleasant",
    "kk": "[ʌnˋplez(ə)nt]",
    "zh": "adj. 令人不快的，不舒服的； 不友善的，不客氣的；使人生氣的，引發暴力的",
    "unit": 8,
    "example": "[adj.] She thought he was an unpleasant man.",
    "exampleZh": "她曾認為他是個令人不愉快的人。"
  },
  {
    "id": 7927,
    "en": "unreal",
    "kk": "[͵ʌnˋriəl]",
    "zh": "adj. 不真實的，假的，虛構的；（指情況或經歷）離奇的，難以置信的；<非正式>極好的，絕妙的",
    "unit": 8,
    "example": "[adj.] Almost all fictional detectives are unreal.",
    "exampleZh": "幾乎所有小說裡的偵探都是虛構的。"
  },
  {
    "id": 7928,
    "en": "austere",
    "kk": "[ɔˋstɪr]",
    "zh": "adj. 樸實的，質樸的；（人）嚴肅的，嚴厲的；（生活）簡樸的，苦行的；（開支）緊縮的，節制的",
    "unit": 8,
    "example": "[adj.] The life of the troops was still comparatively austere.",
    "exampleZh": "部隊生活相對而言仍然簡樸。"
  },
  {
    "id": 7929,
    "en": "demanding",
    "kk": "[dɪˋmændɪŋ]",
    "zh": "adj. 費時費力的；苛刻的，難以滿足的；v. 強烈要求；需要，需求（demand 的現在分詞形式）",
    "unit": 8,
    "example": "[adj.] Ricky was a very demanding child.",
    "exampleZh": "裡基是個非常苛求的孩子。"
  },
  {
    "id": 7930,
    "en": "complicated",
    "kk": "[ˋkɑmplə͵ketəd]",
    "zh": "adj. 複雜的；難懂的",
    "unit": 8,
    "example": "[adj.] The instructions look very complicated.",
    "exampleZh": "這說明書看起來很難懂。"
  },
  {
    "id": 7931,
    "en": "lurid",
    "kk": "[ˋlʊrɪd]",
    "zh": "adj. 可怕的，聳人聽聞的，駭人聽聞的；（顏色）刺眼的，俗豔的，華麗而庸俗的；（火光、天空等）火紅的，血紅的，火燒似的；（文語）慘白的，蒼白的",
    "unit": 8,
    "example": "[adj.] She took care to paint her toe nails a lurid red or orange.",
    "exampleZh": "她小心翼翼地把腳趾甲塗成豔麗的紅色或桔色。"
  },
  {
    "id": 7932,
    "en": "scruffy",
    "kk": "[ˋskrʌfi]",
    "zh": "adj. 邋遢的，破舊骯髒的，不整齊的",
    "unit": 8,
    "example": "[adj.] For months, workers have been feverishly sprucing up Dili, Timor-Leste's scruffy capital.",
    "exampleZh": "數月來，東帝汶的工人們忙著打扮其破舊的首都帝力。"
  },
  {
    "id": 7933,
    "en": "unfashionable",
    "kk": "[ʌnˋfæʃnəbl]",
    "zh": "adj. 過時的，不時髦的",
    "unit": 8,
    "example": "[adj.] As an academic, it's my job to tell the truth, to explain the scientific evidence before us, irrespective of how unfashionable my conclusions are.",
    "exampleZh": "作為一名學者，講真話、解釋擺在我們面前的科學證據是我的職責，無論我的結論多麼不受歡迎。"
  },
  {
    "id": 7934,
    "en": "downmarket",
    "kk": "[͵daʊnˋmɑrkɪt]",
    "zh": "adj. 面向低收入人消費者的，低檔的，價廉質次的；adv. 面向低收入消費者地，低檔品市場地",
    "unit": 8,
    "example": "[adj.] The company wants to break away from its downmarket image.",
    "exampleZh": "這個公司想擺脫它面向低消費階層的形象。"
  },
  {
    "id": 7935,
    "en": "impossible",
    "kk": "[͵ɪmˋpɑsəbəl]",
    "zh": "adj. 不可能的",
    "unit": 8,
    "example": "[adj.] Thick mist made flying impossible.",
    "exampleZh": "濃霧使得無法飛行。"
  },
  {
    "id": 7936,
    "en": "unlikely",
    "kk": "[ʌnˋlaɪkli]",
    "zh": "adj. 不大可能發生的；未必真實的，難以相信的； 非心目中的，不大恰當的；不典型的；（兩個人或物）不般配的；adv. 未必",
    "unit": 8,
    "example": "[adj.] A military coup seems unlikely.",
    "exampleZh": "一場兵變似乎不太可能。"
  },
  {
    "id": 7937,
    "en": "unsympathetic",
    "kk": "[͵ʌn͵sɪmpəˋθetɪk]",
    "zh": "adj. 不表同情的，不同情的，無動於衷的；對…不支持的，不贊同的；（尤指文學或戲劇中的人物）不討人喜歡的，令人生厭的",
    "unit": 8,
    "example": "[adj.] I hate to admit it, but he is unkind and unsympathetic to people.",
    "exampleZh": "我討厭承認它，可是他對人真是不友好且沒有同情心。"
  },
  {
    "id": 7938,
    "en": "unrepentant",
    "kk": "[͵ʌnrɪˋpentənt]",
    "zh": "adj. 不後悔的，不感到羞愧的；頑固不化的，執迷不悟的",
    "unit": 8,
    "example": "[adj.] Pamela was unrepentant about her strong language and abrasive remarks.",
    "exampleZh": "帕梅拉對自己激烈粗暴的言論不感到羞愧。"
  },
  {
    "id": 7939,
    "en": "relaxed",
    "kk": "[rɪˋlækst]",
    "zh": "adj. 放鬆的，輕鬆的；舒適的，自在的；不加以拘束的，隨便的；（肌肉或其他身體部位）放鬆的；（頭髮）拉直的；（衣服）寬鬆的，肥大的；v. 休息，（使）放鬆；放心，鎮定；鬆開，（使）鬆弛（relax 的過去式和過去分詞）",
    "unit": 8,
    "example": "[v.] The alcohol warmed and relaxed him.",
    "exampleZh": "這酒使他渾身發暖輕鬆起來。"
  },
  {
    "id": 7940,
    "en": "astute",
    "kk": "[əˋstut]",
    "zh": "adj. 精明的，機敏的，敏銳的；<貶>狡猾的，詭計多端的",
    "unit": 8,
    "example": "[adj.] She was politically astute.",
    "exampleZh": "她政治上很精明。"
  },
  {
    "id": 7941,
    "en": "prudent",
    "kk": "[ˋprud(ə)nt]",
    "zh": "adj. 謹慎的，慎重的；節儉的；【名】 （Prudent）（法）普呂當（人名）",
    "unit": 8,
    "example": "[adj.] It is clearly prudent to take all precautions.",
    "exampleZh": "採取一切防範措施顯然是慎重的。"
  },
  {
    "id": 7942,
    "en": "unconvincing",
    "kk": "[͵ʌnkənˋvɪnsɪŋ]",
    "zh": "adj. 令人難以信服的，令人懷疑的，沒有說服力的；不真實的",
    "unit": 8,
    "example": "[adj.] I find the characters in the book very unconvincing.",
    "exampleZh": "我覺得書中的人物很不真實。"
  },
  {
    "id": 7943,
    "en": "useless",
    "kk": "[ˋjusləs]",
    "zh": "adj. 無用的；無價值的",
    "unit": 8,
    "example": "[adj.] It's useless worrying about it.",
    "exampleZh": "為這事擔心無濟於事。"
  },
  {
    "id": 7944,
    "en": "disadvantageous",
    "kk": "[͵dɪsædvənˋteɪdʒəs]",
    "zh": "adj. 不利的，有害的，不便的（常與 to 或 for 連用）",
    "unit": 8,
    "example": "[adj.] The deal will not be disadvantageous to your company.",
    "exampleZh": "這項交易不會對你公司不利。"
  },
  {
    "id": 7945,
    "en": "incompetent",
    "kk": "[͵ɪnˋkɑmpətənt]",
    "zh": "adj. 無能力的；不能勝任的",
    "unit": 8,
    "example": "[adj.] He wants the power to fire incompetent employees.",
    "exampleZh": "他希望有權解僱不稱職的僱員。"
  },
  {
    "id": 7946,
    "en": "convincing",
    "kk": "[kənˋvɪnsɪŋ]",
    "zh": "adj. 令人信服的，有說服力的；（勝利）輕鬆的，確定無疑的；v. 使確信，使信服；說服，勸服（convince 的現在分詞形式）",
    "unit": 8,
    "example": "[v.] Our greatest problem is convincing them.",
    "exampleZh": "我們最重要的問題是說服他們。"
  },
  {
    "id": 7947,
    "en": "disallow",
    "kk": "[͵dɪsəˋlaʊ]",
    "zh": "vt. 不准許，不允許，禁止；駁回，不接受，判為無效",
    "unit": 8,
    "example": "[vt.] The referee had to disallow the goal after reviewing the video replay.",
    "exampleZh": "觀看重播影像後，裁判不得不判定該進球無效。"
  },
  {
    "id": 7948,
    "en": "demolish",
    "kk": "[dɪˋmɑlɪʃ]",
    "zh": "v. 毀壞；破壞",
    "unit": 8,
    "example": "[v.] He demolished the house.",
    "exampleZh": "他拆毀了房子。"
  },
  {
    "id": 7949,
    "en": "restrained",
    "kk": "[rɪˋstreɪnd]",
    "zh": "adj. 剋制的，自制的；拘謹的，矜持的，內斂的；素淨的，不花哨的；受限制的，被約束的，被制止的；v. 抑制，控制；約束，制止（restrain 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] Under the circumstances, he felt he'd been very restrained.",
    "exampleZh": "在這種環境下，他覺得他一直很剋制。"
  },
  {
    "id": 7950,
    "en": "withhold",
    "kk": "[wɪðˋhoʊld]",
    "zh": "v. 保留，隱瞞，扣留；剋制，抑制（情感或反應等）",
    "unit": 8,
    "example": "[v.] It's never wise to withhold evidence.",
    "exampleZh": "隱瞞證據絕不明智。"
  },
  {
    "id": 7951,
    "en": "disprove",
    "kk": "[͵dɪsˋpruv]",
    "zh": "vt. 反駁，證明……是虛假的",
    "unit": 8,
    "example": "[vt.] This is almost impossible for the \"offender\" to disprove.",
    "exampleZh": "這對於「違規者」來說幾乎是無法反駁的。"
  },
  {
    "id": 7952,
    "en": "unprepared",
    "kk": "[͵ʌnprɪˋperd]",
    "zh": "adj. 無準備的，尚未準備好的；即席的；不願意的",
    "unit": 8,
    "example": "[adj.] These people are usually unable or unprepared to endure the long haul.",
    "exampleZh": "這些人通常無法或沒有準備好忍受長期的艱難歷程。"
  },
  {
    "id": 7953,
    "en": "incomplete",
    "kk": "[͵ɪnkəmˋplit]",
    "zh": "adj. 不完全的；不完整的",
    "unit": 8,
    "example": "[adj.] Spoken language contains many incomplete sentences.",
    "exampleZh": "口語中有很多不完整的句子。"
  },
  {
    "id": 7954,
    "en": "disbelieve",
    "kk": "[͵dɪsbɪˋliv]",
    "zh": "v. 不相信，懷疑",
    "unit": 8,
    "example": "[v.] Why should I disbelieve her story?",
    "exampleZh": "我為什麼要懷疑她的說法呢？"
  },
  {
    "id": 7955,
    "en": "accompanied",
    "kk": "[əˋkʌmpənid]",
    "zh": "v. 陪伴，伴隨；伴奏（accompany 的過去分詞）；adj. 伴隨的；相伴的",
    "unit": 8,
    "example": "[v.] His wife accompanied him on the trip.",
    "exampleZh": "那次旅行他由妻子陪同。"
  },
  {
    "id": 7956,
    "en": "loved",
    "kk": "[lʌvd]",
    "zh": "v. 愛，熱愛（love 的過去式和過去分詞）；adj. 受珍愛的，被愛的，心愛的（常作定語，如 loved ones 親人）",
    "unit": 8,
    "example": "[adj.] Pat has always loved gardening.",
    "exampleZh": "帕特一直喜愛園藝。"
  },
  {
    "id": 7957,
    "en": "wanted",
    "kk": "[ˋwɑntɪd]",
    "zh": "adj. 被警方追捕的，被通緝的；為人渴望和喜愛的，受人照料的；v. 需要；想要，希望；（用於提出建議）應該（want 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[v.] He wanted more hard evidence.",
    "exampleZh": "他想要更多確鑿的證據。"
  },
  {
    "id": 7958,
    "en": "losing",
    "kk": "[ˋluzɪŋ]",
    "zh": "n. 失敗，失利；損失，喪失；adj. 輸的，失敗的；虧損的；導致失敗的；v. 失去；損失（lose 的 ing 形式）；錯過；輸掉",
    "unit": 8,
    "example": "[n.] I'm terrified of losing you.",
    "exampleZh": "我真害怕失去你。"
  },
  {
    "id": 7959,
    "en": "undress",
    "kk": "[ʌnˋdres]",
    "zh": "v. 使脫衣服；使卸去裝飾；把（傷口上的）敷料拿開；n. 裸體；（別於禮服）軍便服；adj. 便服的",
    "unit": 8,
    "example": "[adj.] We stagger from our rooms in various states of undress to the sound of fire engines screaming round the corner, guaranteeing we are all wide awake.",
    "exampleZh": "我們衣衫不整地從各自房間裡搖搖晃晃走出來，消防車在拐角處呼嘯而過的聲響，把我們全都徹底弄醒了。"
  },
  {
    "id": 7960,
    "en": "reappear",
    "kk": "[͵riəˋpɪr]",
    "zh": "vi. 再次出現，重新出現，再現",
    "unit": 8,
    "example": "[vi.] If these silent genes are somehow switched back on, they argued, long-lost traits could reappear.",
    "exampleZh": "他們認為，如果這些沉默的基因以某種方式被重新激活，長期丟失的性狀可能會重新出現。"
  },
  {
    "id": 7961,
    "en": "interesting",
    "kk": "[ˋɪntrəstɪŋ]",
    "zh": "adj. 有趣的",
    "unit": 8,
    "example": "[adj.] Did you go anywhere interesting?",
    "exampleZh": "你去過任何有趣的地方嗎？"
  },
  {
    "id": 7962,
    "en": "resonant",
    "kk": "[ˋrezənənt]",
    "zh": "adj. （聲音）洪亮的，渾厚迴響的；共振的，諧振的（用於物理學、電子學、聲學等技術語境）；引起共鳴的，意味深長的（比喻用法）",
    "unit": 8,
    "example": "[adj.] His voice sounded oddly resonant in the empty room.",
    "exampleZh": "他的聲音在空房間裡聽起來奇特地洪亮。"
  },
  {
    "id": 7963,
    "en": "conceited",
    "kk": "[kənˋsitɪd]",
    "zh": "adj. 自負的，驕傲自大的",
    "unit": 8,
    "example": "[adj.] Slightly is the most conceited of the boys.",
    "exampleZh": "斯萊特利是這些男孩中最自負的。"
  },
  {
    "id": 7964,
    "en": "worsen",
    "kk": "[ˋwɝs(ə)n]",
    "zh": "v. （使）惡化，（使）更糟",
    "unit": 8,
    "example": "[v.] We were worried that one tiny jolt could worsen her injuries.",
    "exampleZh": "我們擔心一次輕微的顛簸都可能加劇她的傷情。"
  },
  {
    "id": 7965,
    "en": "disobey",
    "kk": "[͵dɪsəˋbeɪ]",
    "zh": "v. 不服從，違抗，違反",
    "unit": 8,
    "example": "[v.] To question or disobey the law is tantamount to destroying the authority of the law.",
    "exampleZh": "質疑或違抗法律就等同於摧毀法律的權威。"
  },
  {
    "id": 7966,
    "en": "defy",
    "kk": "[dɪˋfaɪ]",
    "zh": "v. 公然反抗；蔑視",
    "unit": 8,
    "example": "[v.] We had to defy them whatever the cost.",
    "exampleZh": "我們必須不惜一切代價反抗他們。"
  },
  {
    "id": 7967,
    "en": "disorganize",
    "kk": "[dɪsˋɔrɡə͵naɪz]",
    "zh": "vt. 擾亂、使混亂、破壞秩序",
    "unit": 8,
    "example": "[vt.] The severe blizzard threatened to disorganize the entire nationwide rail transit system.",
    "exampleZh": "這場暴風雪可能會擾亂整個全國鐵路運輸系統的正常運作。"
  },
  {
    "id": 7968,
    "en": "detract",
    "kk": "[dɪˋtrækt]",
    "zh": "vi. 減損，降低，使遜色（常與 from 連用）；貶低；vt. 轉移，使分心（罕用，現代英語通常用 distract）",
    "unit": 8,
    "example": "[vi.] There is a view that using celebrities can detract people from the problems at hand.",
    "exampleZh": "有觀點認為，利用名人可以轉移人們對當前問題的注意力。"
  },
  {
    "id": 7969,
    "en": "mediocre",
    "kk": "[͵midiˋokɚ]",
    "zh": "adj. 中等的；平凡的",
    "unit": 8,
    "example": "[adj.] I thought the play was only mediocre.",
    "exampleZh": "我認為這部戲劇只是平庸之作。"
  },
  {
    "id": 7970,
    "en": "plump",
    "kk": "[plʌmp]",
    "zh": "adj. 胖乎乎的，豐滿的；圓鼓鼓的，又大又圓的；v. 使更軟，使更圓（plump up）；（隨意地）放置；（隨意地）坐下，躺下；專意於，特意選定（plump for）；重重（或不拘禮節）地放下，丟下；adv. 突然地，重重地；直接地；n. <古>突然前衝，重重墜落；一群；【名】 （Plump）（美、英）普倫普（人名）",
    "unit": 8,
    "example": "[n.] He pushed a plump little hand toward me.",
    "exampleZh": "他向我伸出一隻胖乎乎的小手。"
  },
  {
    "id": 7971,
    "en": "dissatisfy",
    "kk": "[ˋdɪssætɪs͵faɪ]",
    "zh": "v. 使不滿，使失望",
    "unit": 8,
    "example": "[v.] You have the ability to either satisfy or dissatisfy them when you contact them.",
    "exampleZh": "在和他們接觸時，你既可以讓他們感到滿意，也可能讓他們感到不滿。"
  },
  {
    "id": 7972,
    "en": "flop",
    "kk": "[flɑp]",
    "zh": "v. （尤指疲勞時）撲通坐下，猛然倒下；（沉重、笨拙或不自主地）落下，懸掛；<非正式>（書、戲劇、電影等）砸鍋，完全失敗；<非正式>（在指定地點）休息，睡覺；<非正式>（籃球運動中）假摔；n. <非正式>（書、戲劇、電影等）失敗；撲通聲，重墜聲；<非正式，美>廉價旅館，便宜棲身處；adv. 正好地，恰巧地",
    "unit": 8,
    "example": "[n.] Lisa Kudrow has seen her career flop since Friends.",
    "exampleZh": "在《老友記》播出後，麗莎·庫卓的演藝事業曾遭遇滑鐵盧。"
  },
  {
    "id": 7973,
    "en": "renounce",
    "kk": "[rɪˋnaʊns]",
    "zh": "v. 聲明放棄，拋棄；<法律>（尤指繼承人或受託人）放棄（權利或地位）；拒絕承認，拒絕遵守；宣佈與……斷絕關係，宣佈摒棄",
    "unit": 8,
    "example": "[v.] Not everyone who seeks to renounce their citizenship does so for tax reasons.",
    "exampleZh": "並不是所有放棄國籍的人都是因為稅收的原因。"
  },
  {
    "id": 7974,
    "en": "abdicate",
    "kk": "[ˋæbdɪkeɪt]",
    "zh": "v. 退位；放棄（責任），失（職）；放棄",
    "unit": 8,
    "example": "[v.] King Juan Carlos of Spain once insisted \"kings don't abdicate, they die in their sleep\".",
    "exampleZh": "西班牙國王胡安卡洛斯曾堅稱：「國王們沒有退位，他們在睡夢中去世了。」"
  },
  {
    "id": 7975,
    "en": "retard",
    "kk": "[rɪˋtɑrd]",
    "zh": "v. <正式>阻礙，減緩；減慢，受到阻滯；n. <非正式>弱智，笨蛋；延遲，阻止",
    "unit": 8,
    "example": "[v.] Others are spraying trees with a chemical to retard growth.",
    "exampleZh": "另一些人則往樹上噴灑化學藥劑以延緩其生長。"
  },
  {
    "id": 7976,
    "en": "inability",
    "kk": "[͵ɪnəˋbɪlɪti]",
    "zh": "n. 無能；無力",
    "unit": 8,
    "example": "[n.] Her inability to concentrate could cause an accident.",
    "exampleZh": "她無法集中注意力可能會導致意外。"
  },
  {
    "id": 7977,
    "en": "incapacity",
    "kk": "[͵ɪnkəˋpæsəti]",
    "zh": "n. <正式>無能力，無能，無力；（法律）無行為能力，無法律資格",
    "unit": 8,
    "example": "[n.] She returned to work after a long period of incapacity.",
    "exampleZh": "她病了很長一段時間之後回去工作了。"
  },
  {
    "id": 7978,
    "en": "defence",
    "kk": "[dɪˋfens]",
    "zh": "n. 防禦，防禦物；國防；辯護，答辯；辯方，辯護律師；防守隊員，後衛；衛冕；v. 防禦，防守",
    "unit": 8,
    "example": "[n.] Defence of the realm is crucial.",
    "exampleZh": "王國的防禦是至關重要的。"
  },
  {
    "id": 7979,
    "en": "occupied",
    "kk": "[ˋɑkjə͵paɪd]",
    "zh": "adj. 佔用的；在使用的",
    "unit": 8,
    "example": "[adj.] He occupied himself with packing the car.",
    "exampleZh": "他忙於裝那輛車。"
  },
  {
    "id": 7980,
    "en": "disembark",
    "kk": "[dɪsɛmˋbɑrk]",
    "zh": "v. 登陸；上岸",
    "unit": 8,
    "example": "[v.] Seven second-class passengers prepared to disembark.",
    "exampleZh": "7名二等艙的旅客準備下船了。"
  },
  {
    "id": 7981,
    "en": "dunce",
    "kk": "[dʌns]",
    "zh": "n. 傻瓜，笨人，劣學生",
    "unit": 8,
    "example": "[n.] Michael may have been a dunce at mathematics, but he was gifted at languages.",
    "exampleZh": "邁克爾在數學方面可能是個笨學生，但他在語言方面是有天賦的。"
  },
  {
    "id": 7982,
    "en": "misrepresent",
    "kk": "[͵mɪs͵reprɪˋzent]",
    "zh": "vt. 歪曲，誤傳；篡改，偽造（數據、文件等）；不恰當地代表（某人或某群體）；vi. 作失實陳述；歪曲報道",
    "unit": 8,
    "example": "[vt.] It's a shame the way the media can twist your words and misrepresent you.",
    "exampleZh": "媒體歪曲人們的話語及誤傳人們的本意的作風是可恥的。"
  },
  {
    "id": 7983,
    "en": "elongate",
    "kk": "[ɪˋlɔŋɡeɪt]",
    "zh": "vt. 拉長，使延長，使伸長；vi. 拉長，延長，伸長；adj. 細長的，伸長的，延長的",
    "unit": 8,
    "example": "[vt.] Uvala is a large elongate sinkhole resulting from enlargement.",
    "exampleZh": "灰巖幹谷是由於擴大而形成的一個大的拉長的天坑。"
  },
  {
    "id": 7984,
    "en": "relinquish",
    "kk": "[rɪˋlɪŋkwɪʃ]",
    "zh": "v. <正式>（尤指不情願地）放棄，交出（權力、職位等）；<正式>（不情願地）鬆開",
    "unit": 8,
    "example": "[v.] He does not intend to relinquish power.",
    "exampleZh": "他不打算放棄權力。"
  },
  {
    "id": 7985,
    "en": "uncooperative",
    "kk": "[͵ʌnkoʊˋɑpərətɪv]",
    "zh": "adj. 不合作的，不配合的；（指天氣、環境等）不作美的，不利的",
    "unit": 8,
    "example": "[adj.] She became uncooperative: unwilling to do her homework or help with any household chores.",
    "exampleZh": "她變得不合作起來：不願做作業或是幫助分擔家務。"
  },
  {
    "id": 7986,
    "en": "adventurous",
    "kk": "[ædˋventʃərəs]",
    "zh": "adj. 勇於冒險的，敢於創新的；愛冒險的；刺激不斷的，充滿驚險的；新奇的，令人興奮的",
    "unit": 8,
    "example": "[adj.] Warren was an adventurous businessman.",
    "exampleZh": "沃倫是一位有冒險精神的商人。"
  },
  {
    "id": 7987,
    "en": "materialize",
    "kk": "[məˋtɪriəlaɪz]",
    "zh": "v. 實現，成為現實；突然顯現，奇怪地出現",
    "unit": 8,
    "example": "[v.] Their much vaunted reforms did not materialize.",
    "exampleZh": "他們大肆吹噓的改革並沒有實現。"
  },
  {
    "id": 7988,
    "en": "untidy",
    "kk": "[ʌnˋtaɪdi]",
    "zh": "adj. 不整潔的，凌亂的，不整齊的；（指人）邋遢的，不修邊幅的，懶散的；不乾淨利落的，不簡練的；v. 使不整潔，弄亂，使雜亂無章",
    "unit": 8,
    "example": "[adj.] My room looks very untidy.",
    "exampleZh": "我的房間看起來很不整潔。"
  },
  {
    "id": 7989,
    "en": "disorganized",
    "kk": "[dɪsˋɔrɡənaɪzd]",
    "zh": "adj. 雜亂無章的，無計劃的；（人）無條理的",
    "unit": 8,
    "example": "[adj.] His study folder is badly disorganized.",
    "exampleZh": "他的學習文件夾非常雜亂。"
  },
  {
    "id": 7990,
    "en": "slacken",
    "kk": "[ˋslækən]",
    "zh": "vi. 鬆勁，懈怠；變緩慢，減弱，減輕；（繩、抓握等）變鬆，變鬆弛；vt. 使緩慢；使減弱；使鬆弛",
    "unit": 8,
    "example": "[vt.] Inflationary pressures continued to slacken last month.",
    "exampleZh": "通貨膨脹的壓力上個月持續減輕。"
  },
  {
    "id": 7991,
    "en": "bolster",
    "kk": "[ˋboʊlstər]",
    "zh": "v. 增強，激勵；鞏固（地位），加強；改善，改進；給（座位）加軟墊；n. 長枕，墊枕；承梁（用於支撐或減少摩擦）；託木；（削磚用的）鑿刀；【名】 （Bolster）（美、印、荷）博爾斯特（人名）",
    "unit": 8,
    "example": "[v.] The country is free to adopt policies to bolster its economy.",
    "exampleZh": "這個國家可自由採取措施來鞏固經濟。"
  },
  {
    "id": 7992,
    "en": "slightly",
    "kk": "[ˋslaɪtli]",
    "zh": "adv. 稍微，輕微地；（指某人身材）纖弱地，瘦小地",
    "unit": 8,
    "example": "[adv.] He slackened the ropes slightly.",
    "exampleZh": "他把繩子稍稍放鬆一些。"
  },
  {
    "id": 7993,
    "en": "massively",
    "kk": "[ˋmæsɪvli]",
    "zh": "adv. 大量地，大規模地，極大地；沉重地，厚實地",
    "unit": 8,
    "example": "[adv.] Where are Chinese gooseberries most massively planted?",
    "exampleZh": "哪裡是種植獼猴桃最多的地方？"
  },
  {
    "id": 7994,
    "en": "hugely",
    "kk": "[ˋhjudʒli]",
    "zh": "adv. 極度，非常，巨大地",
    "unit": 8,
    "example": "[adv.] His debut album was hugely successful Stateside.",
    "exampleZh": "他的首張專輯在美國獲得了巨大成功。"
  },
  {
    "id": 7995,
    "en": "slack",
    "kk": "[slæk]",
    "zh": "adj. 不緊的，鬆弛的；（生意）蕭條的，清淡的；懈怠的，敷衍了事的；（潮水）遲緩的，平緩的；<西印度>淫蕩的，下流的；n. （繩索的）鬆弛部分；富餘部分，閒置部分；褲子（slacks）；煤屑；<非正式>懈怠，懶散；v. 懈怠，偷懶；使（繩索等）鬆弛；減緩，放慢；熟化（石灰）；<英，非正式>緩慢（或懶散地）工作；【名】 （Slack）（美）斯萊克（人名）",
    "unit": 8,
    "example": "[adj.] Discipline in the classroom is very slack.",
    "exampleZh": "班裡紀律十分鬆懈。"
  },
  {
    "id": 7996,
    "en": "disinclination",
    "kk": "[͵dɪs͵ɪnklɪˋneɪʃn]",
    "zh": "n. 不感興趣；厭惡；不起勁",
    "unit": 8,
    "example": "[n.] They are showing a marked disinclination to pursue these opportunities.",
    "exampleZh": "他們對爭取這類機會明顯表現出不情願的態度。"
  },
  {
    "id": 7997,
    "en": "repel",
    "kk": "[rɪˋpel]",
    "zh": "v. 擊退，驅逐；抵禦，驅除；使厭惡，使反感；抵制，不願接受；排斥，相斥",
    "unit": 8,
    "example": "[v.] They have fifty thousand troops along the border ready to repel any attack.",
    "exampleZh": "他們沿邊界有5萬軍隊，隨時準備擊退任何進攻。"
  },
  {
    "id": 7998,
    "en": "demise",
    "kk": "[dɪˋmaɪz]",
    "zh": "n. 死亡；終止；v. 轉讓；遺贈",
    "unit": 8,
    "example": "[n.] Rodrigo met his demise.",
    "exampleZh": "羅德里戈去世了。"
  },
  {
    "id": 7999,
    "en": "lowercase",
    "kk": "[͵loʊərˋkeɪs]",
    "zh": "adj. 小寫的；n. 小寫字母；vt. 將…列印為小寫字母",
    "unit": 8,
    "example": "[adj.] The system requires you to include at least one lowercase letter when creating your account password.",
    "exampleZh": "建立帳戶密碼時，系統要求您必須至少包含一個小寫英文字母。"
  },
  {
    "id": 8000,
    "en": "unattractiveness",
    "kk": "",
    "zh": "n.無趣，缺乏吸引力",
    "unit": 8,
    "example": "[n.] The strawberry is red, has a liking for the unusual unattractiveness.",
    "exampleZh": "草莓是紅色的，看上去非常的漂亮。"
  },
  {
    "id": 8001,
    "en": "unconcern",
    "kk": "[͵ʌnkənˋsɝn]",
    "zh": "n. 不關心，不感興趣，冷淡；不擔憂，若無其事，漫不經心",
    "unit": 8,
    "example": "[n.] She'd mentioned it casually once, surprising him by her unconcern.",
    "exampleZh": "她隨意地提過一次這個事，她的漠不關心讓他吃驚。"
  },
  {
    "id": 8002,
    "en": "debit",
    "kk": "[ˋdɛbɪt]",
    "zh": "v. 借方；n. 把……記入借方",
    "unit": 8,
    "example": "[v.] We pay all our bills by direct debit.",
    "exampleZh": "我們以直接借記方式支付所有賬單。"
  },
  {
    "id": 8003,
    "en": "commendable",
    "kk": "[kəˋmendəbl]",
    "zh": "adj. 值得讚揚的，值得稱讚的",
    "unit": 8,
    "example": "[adj.] I'm really glad to see you all here. It is indeed commendable that you got up so early in class.",
    "exampleZh": "我真的很高興在這見到大家。你們起這麼早來上課的確值得表揚。"
  },
  {
    "id": 8004,
    "en": "happiness",
    "kk": "[ˋhæpinəs]",
    "zh": "n. 快樂，幸福",
    "unit": 8,
    "example": "[n.] Money can't buy you happiness.",
    "exampleZh": "金錢不能為你買到幸福。"
  },
  {
    "id": 8005,
    "en": "disinfect",
    "kk": "[͵dɪsɪnˋfekt]",
    "zh": "v. 給……殺菌，為……消毒；給（計算機）殺毒",
    "unit": 8,
    "example": "[v.] Chlorine is used to disinfect water.",
    "exampleZh": "氯用來給水消毒。"
  },
  {
    "id": 8006,
    "en": "misinterpret",
    "kk": "[͵mɪsɪnˋtɝprət]",
    "zh": "v. 曲解，誤解",
    "unit": 8,
    "example": "[v.] My biggest problem is that people always misinterpret me as being aggressive.",
    "exampleZh": "我最大的問題是人們總是把我誤解成一個好鬥的人。"
  },
  {
    "id": 8007,
    "en": "sap",
    "kk": "[sæp]",
    "zh": "n. （植物的）汁，液；<非正式>傻瓜，容易上當的人；元氣，活力；<史>（用以偷襲設防場所的）坑道，地道；大頭短棒，棍棒；v. 使削弱，使虛弱；<史>挖坑道；用大頭短棒擊，用棍棒打；（地理）（水或冰川作用）逐漸侵蝕；<古>破壞……的基礎，侵蝕……的基礎；【名】 （Sap）（印、美、法、荷）薩（人名）",
    "unit": 8,
    "example": "[n.] The sap of this plant blisters the skin.",
    "exampleZh": "這種植物的汁液會使皮膚起水皰。"
  },
  {
    "id": 8008,
    "en": "unfavourably",
    "kk": "[ʌnˋfeɪvərəbli]",
    "zh": "adv. 不利地；不適宜地",
    "unit": 8,
    "example": "[adv.] His reluctance to return to the cabin impressed them all unfavourably, and the mutinous sounds again broke forth.",
    "exampleZh": "他不願回到船艙裡，給所有人留下了不好的印象，不滿的抗議聲又再次響了起來。"
  },
  {
    "id": 8009,
    "en": "disparagingly",
    "kk": "[dɪˋspærɪdʒɪŋli]",
    "zh": "adv. 以輕視的態度，蔑視地，以貶抑的口吻",
    "unit": 8,
    "example": "[adv.] He spoke disparagingly of his colleagues.",
    "exampleZh": "他言辭之中很是看不起同事。"
  },
  {
    "id": 8010,
    "en": "complimentary",
    "kk": "[͵kɑmplɪˋmentri]",
    "zh": "adj. 讚美的，表示欽佩的；免費贈送的",
    "unit": 8,
    "example": "[adj.] There was a complimentary basket of fruit in our room.",
    "exampleZh": "我們房間裡有一籃免費贈送的水果。"
  },
  {
    "id": 8011,
    "en": "synthesis",
    "kk": "[ˋsɪnθəsəs]",
    "zh": "n. 綜合體；綜合",
    "unit": 8,
    "example": "[n.] Instead, he advocates a synthesis of these two views.",
    "exampleZh": "相反，他主張綜合這兩種觀點。"
  },
  {
    "id": 8012,
    "en": "nervousness",
    "kk": "[ˋnɝvəsnəs]",
    "zh": "n. 緊張不安，焦慮，惶恐；神經質，神經過敏",
    "unit": 8,
    "example": "[n.] He tried to hide his nervousness.",
    "exampleZh": "他試圖掩飾他的惶恐不安。"
  },
  {
    "id": 8013,
    "en": "uncertainty",
    "kk": "[ənˋsɝtənti]",
    "zh": "n. 不確定性",
    "unit": 8,
    "example": "[n.] It was a time of terrible uncertainty.",
    "exampleZh": "那是一段非常不確定的時期。"
  },
  {
    "id": 8014,
    "en": "subordination",
    "kk": "[sə͵bɔrdɪˋneɪʃn]",
    "zh": "n. 從屬，隸屬，下級地位，次要；主從關係",
    "unit": 8,
    "example": "[n.] What is the nature of this subordination and what is its dynamic?",
    "exampleZh": "是什麼性質的從屬關係，什麼是動態？"
  },
  {
    "id": 8015,
    "en": "weakness",
    "kk": "[ˋwiknəs]",
    "zh": "n. 虛弱；弱點",
    "unit": 8,
    "example": "[n.] His only weakness is his temperament.",
    "exampleZh": "他惟一的弱點是他的脾氣。"
  },
  {
    "id": 8016,
    "en": "deprecate",
    "kk": "[ˋdeprəkeɪt]",
    "zh": "vt. <正式>反對，抨擊，聲明不贊成；貶低，輕視；（計算機）將功能、接口等標記為過時，不再推薦使用",
    "unit": 8,
    "example": "[vt.] You should not deprecate your own worth.",
    "exampleZh": "你不應該貶低你自己的價值。"
  },
  {
    "id": 8017,
    "en": "belittle",
    "kk": "[bɪˋlɪt(ə)l]",
    "zh": "vt. 輕視，貶低，小看；使相形見小，使顯得不重要",
    "unit": 8,
    "example": "[vt.] We mustn't belittle her outstanding achievement.",
    "exampleZh": "我們不應該輕視她的傑出成就。"
  },
  {
    "id": 8018,
    "en": "uncharacteristic",
    "kk": "[͵ʌn͵kærəktəˋrɪstɪk]",
    "zh": "adj. 不典型的，無典型特徵的",
    "unit": 8,
    "example": "[adj.] The remark was quite uncharacteristic of her.",
    "exampleZh": "這話很不像是她說的。"
  },
  {
    "id": 8019,
    "en": "likeness",
    "kk": "[ˋlaɪknəs]",
    "zh": "n. 相似，相像，相似之處；肖像，畫像（含照片、雕像等）；樣子；相似物",
    "unit": 8,
    "example": "[n.] These myths have a startling likeness to one another.",
    "exampleZh": "這些神話彼此有驚人的相似之處。"
  },
  {
    "id": 8020,
    "en": "cheerfulness",
    "kk": "[ˋtʃɪrflnəs]",
    "zh": "n. 高興，快活，愉快；開朗，樂觀，歡快",
    "unit": 8,
    "example": "[n.] Their eyes were the same color as the sea, full of cheerfulness and undefeated spirit.",
    "exampleZh": "他們的眼睛和大海同色，滿是愉悅與不屈的神采。"
  },
  {
    "id": 8021,
    "en": "protuberance",
    "kk": "[proʊˋtubərəns]",
    "zh": "n. 突起，突出；結節，瘤；隆起、突出的狀態",
    "unit": 8,
    "example": "[n.] There is a big protuberance on the trunk.",
    "exampleZh": "樹幹上有個大包。"
  },
  {
    "id": 8022,
    "en": "pusillanimity",
    "kk": "[͵pjʊsləˋnɪməti]",
    "zh": "n. 膽怯；無氣力；優柔寡斷",
    "unit": 8,
    "example": "[n.] Polls, however, suggest the Japanese are crying out for leadership on the issue, not pusillanimity.",
    "exampleZh": "但民意調查表明，在這個問題上，日本國民迫切需要的是領導責任而不是優柔寡斷。"
  },
  {
    "id": 8023,
    "en": "inefficiency",
    "kk": "[͵ɪnɪˋfɪʃnsi]",
    "zh": "n. 低效率，無效率；無能；低效之處，效率低下的做法（常用複數）",
    "unit": 8,
    "example": "[n.] The inefficiency of the distribution system has led to the loss of millions of tons of food.",
    "exampleZh": "分送系統的低效已經造成了數百萬噸食物的損失。"
  },
  {
    "id": 8024,
    "en": "incompetence",
    "kk": "[ɪnˋkɑmpɪtəns]",
    "zh": "n. 無能力，不勝任，不稱職；（醫學）器官或瓣膜功能不全（尤指瓣膜關閉不全）",
    "unit": 8,
    "example": "[n.] She felt she had been made a scapegoat for her boss's incompetence.",
    "exampleZh": "她覺得，本是老闆無能，但她卻成了替罪羊。"
  },
  {
    "id": 8025,
    "en": "shamelessness",
    "kk": "[ˋʃeɪmləsnəs]",
    "zh": "n. 無恥",
    "unit": 8,
    "example": "[n.] Of course, not all rich man has a trait of shamelessness.",
    "exampleZh": "當然，也不是每一個有錢的人都具備無恥的性格。"
  },
  {
    "id": 8026,
    "en": "unhitch",
    "kk": "[ʌnˋhɪtʃ]",
    "zh": "vt. 解開……的套具；解開繩子；放鬆",
    "unit": 8,
    "example": "[vt.] The trailer was wonderful on the smoother roads near Beijing, and it was a big advantage to be able to unhitch the car and use it separately, leaving the horses tied safely to the trailer.",
    "exampleZh": "拖車在北京周邊的較為平坦的道路上使用效果很棒，能夠將車分開來用也是一個很大的優勢，而馬也能夠安全地系在拖車上。"
  },
  {
    "id": 8027,
    "en": "intransigence",
    "kk": "[ɪnˋtrænzɪdʒəns]",
    "zh": "n. （正式，不可數，常含貶義）不妥協，不讓步，不調和",
    "unit": 8,
    "example": "[n.] He often appeared angry and frustrated by the intransigence of both sides.",
    "exampleZh": "他好像總是為雙方的強硬態度而憤怒和沮喪。"
  },
  {
    "id": 8028,
    "en": "misconduct",
    "kk": "[͵mɪsˋkɑndʌkt]",
    "zh": "n. <正式>不端行為；（冰球）對違反規則的處罰；管理不善，翫忽職守；v. 處理不當；行為不檢（misconduct oneself）",
    "unit": 8,
    "example": "[n.] I will not tolerate harassment or any other form of misconduct.",
    "exampleZh": "我不能容忍騷擾或任何其它形式的不正當行為。"
  },
  {
    "id": 8029,
    "en": "disparage",
    "kk": "[dɪˋspærɪdʒ]",
    "zh": "v. <正式>貶低，詆譭",
    "unit": 8,
    "example": "[v.] I don't mean to disparage your achievements.",
    "exampleZh": "我並不想貶低你的成就。"
  },
  {
    "id": 8030,
    "en": "unimaginativeness",
    "kk": "",
    "zh": "n. 缺乏想象力，無創意：指一個人或事物缺乏創造力、想象力或新穎性。",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word unimaginativeness correctly.",
    "exampleZh": "他試著學習如何正確使用「unimaginativeness」這個單字。"
  },
  {
    "id": 8031,
    "en": "fecklessness",
    "kk": "[ˋfekləsnəs]",
    "zh": "n. 徒勞；低效率；無能；不負責任",
    "unit": 8,
    "example": "[n.] The Fed's fecklessness is, to be sure, not unique.",
    "exampleZh": "美聯儲的不負責任無疑不是獨有的。"
  },
  {
    "id": 8032,
    "en": "refined",
    "kk": "[rɪˋfaɪnd]",
    "zh": "adj. 精煉的；有教養的，文雅的；精確的，靈活巧妙的；v. 精煉，提純；改進，改善；使……文雅（refine 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] El Salvador produces 100,000 tons of refined copper annually.",
    "exampleZh": "薩爾瓦多一年生產10萬噸精煉銅。"
  },
  {
    "id": 8033,
    "en": "underuse",
    "kk": "[͵ʌndərˋjus]",
    "zh": "v. 未充分利用；n. 使用不足，未充分利用",
    "unit": 8,
    "example": "[v.] I'm sure you underuse Betty's intelligence on a daily basis.",
    "exampleZh": "我確信你只讓她做些日常基礎工作真是浪費她的才能。"
  },
  {
    "id": 8034,
    "en": "predator",
    "kk": "[ˋpredətər]",
    "zh": "n. 捕食性動物； 掠奪者，掠奪成性的人（或組織）",
    "unit": 8,
    "example": "[n.] Now if you are a bird and there is a predator around.",
    "exampleZh": "假設你是一隻鳥，且現在周圍有捕食者。"
  },
  {
    "id": 8035,
    "en": "obscurity",
    "kk": "[əbˋskjʊrəti]",
    "zh": "n. 無名，默默無聞；費解，晦澀；<文>昏暗，黑暗",
    "unit": 8,
    "example": "[n.] He spent most of his life working in obscurity.",
    "exampleZh": "他在默默無聞的工作中度過了大半生。"
  },
  {
    "id": 8036,
    "en": "vagueness",
    "kk": "[ˋveɪɡnəs]",
    "zh": "n. 模糊，含糊，曖昧；朦朧（指形狀或輪廓不清）；茫然",
    "unit": 8,
    "example": "[n.] I - I am not just concerned with the vagueness.",
    "exampleZh": "我不僅關注其含糊不清。"
  },
  {
    "id": 8037,
    "en": "blurriness",
    "kk": "",
    "zh": "n. 模糊，模糊不清，模糊強度",
    "unit": 8,
    "example": "[n.] It is a good idea to blur the environment map to simulate the blurriness of a reflection.",
    "exampleZh": "它採用模糊環境的方式來模擬反射模糊。"
  },
  {
    "id": 8038,
    "en": "opacity",
    "kk": "[oʊˋpæsəti]",
    "zh": "n. 不透明（性），不透光（性），（塗料、紙張等的）遮蓋力；<正式>晦澀難懂，不透明（指含義、信息、政策等）；（計算機、圖形軟件）不透明度；（醫學）混濁，不透明病變（可數，複數 opacities；尤指晶狀體、角膜）",
    "unit": 8,
    "example": "[n.] This brings us back to the excessive cleverness and opacity that we hope to avoid.",
    "exampleZh": "這就又回到了我們希望避免的那種過度賣弄小聰明、信息不透明的問題上。"
  },
  {
    "id": 8039,
    "en": "murkiness",
    "kk": "[ˋmɝkɪnɪs]",
    "zh": "n. 陰沉；黑暗",
    "unit": 8,
    "example": "[n.] Ms Munro comes from southern Ontario, an area of considerable psychic murkiness and oddity.",
    "exampleZh": "芒羅女士（Ms Munro）來自南安大略，一個奇特古怪的地方。"
  },
  {
    "id": 8040,
    "en": "coalescence",
    "kk": "[͵koʊəˋles(ə)ns]",
    "zh": "n. 合併，聯合，接合；（物理、化學、氣象等）聚結，併合",
    "unit": 8,
    "example": "[n.] This shows continuous coalescence and redispersion.",
    "exampleZh": "這表明聚集和再分散在不斷地進行。"
  },
  {
    "id": 8041,
    "en": "disinterest",
    "kk": "[dɪsˋɪntrəst]",
    "zh": "n. 不關心，無興趣；（較正式）公正，不偏不倚，中立；vt. （罕用）使不關心，使失去興趣",
    "unit": 8,
    "example": "[n.] His total disinterest in money puzzled his family.",
    "exampleZh": "他對金錢毫無興趣使他的家人感到迷惑不解。"
  },
  {
    "id": 8042,
    "en": "humility",
    "kk": "[hjuˋmɪləti]",
    "zh": "n. 謙遜，謙恭",
    "unit": 8,
    "example": "[n.] Her first defeat was an early lesson in humility.",
    "exampleZh": "她的第一次失敗使她很早便懂得了謙遜。"
  },
  {
    "id": 8043,
    "en": "confirmation",
    "kk": "[͵kɑnfɚˋmeʃən]",
    "zh": "n. 確定；確證",
    "unit": 8,
    "example": "[n.] She glanced over at James for confirmation.",
    "exampleZh": "她瞟了詹姆斯一眼尋求確認。"
  },
  {
    "id": 8044,
    "en": "reaffirmation",
    "kk": "[͵ri͵æfərˋmeɪʃ(ə)n]",
    "zh": "n. 重申；再斷言；再確認",
    "unit": 8,
    "example": "[n.] It's like a reaffirmation of the world of intelligence.",
    "exampleZh": "這就像是對世界情報的又一次肯定。"
  },
  {
    "id": 8045,
    "en": "acquittal",
    "kk": "[əˋkwɪt(ə)l]",
    "zh": "n. （法律）無罪判決，宣告無罪，無罪開釋；（舊義，法律用語）債務等的清償，職責的履行，盡職",
    "unit": 8,
    "example": "[n.] The jury voted 8-to-4 in favour of acquittal.",
    "exampleZh": "該陪審團以8票比4票投票贊成無罪判決。"
  },
  {
    "id": 8046,
    "en": "implausibility",
    "kk": "[ɪm͵plɔzəˋbɪləti]",
    "zh": "n. 難以相信，不像真實",
    "unit": 8,
    "example": "[n.] Kafka's novels opened up a yawning \"frontier to implausibility\".",
    "exampleZh": "卡夫卡的小說則打開了一個無限擴張的非理性世界。"
  },
  {
    "id": 8047,
    "en": "apathy",
    "kk": "[ˋæpəθi]",
    "zh": "n. 冷淡，無興趣",
    "unit": 8,
    "example": "[n.] They told me about isolation and public apathy.",
    "exampleZh": "他們向我講述了孤立感與公眾的冷漠。"
  },
  {
    "id": 8048,
    "en": "laziness",
    "kk": "[ˋleɪzinəs]",
    "zh": "n. 怠惰，無精打采",
    "unit": 8,
    "example": "[n.] It's laziness, pure and simple.",
    "exampleZh": "這全然是懶惰。"
  },
  {
    "id": 8049,
    "en": "deconsecration",
    "kk": "",
    "zh": "n. （宗教建築物的）還俗",
    "unit": 8,
    "example": "[n.] He tried to learn how to use the word deconsecration correctly.",
    "exampleZh": "他試著學習如何正確使用「deconsecration」這個單字。"
  },
  {
    "id": 8050,
    "en": "ascent",
    "kk": "[əˋsent]",
    "zh": "n. 攀登、上升；（職位、地位的）提升、晉升",
    "unit": 8,
    "example": "[n.] The mountain climbers completed their final ascent to the summit just before sunrise.",
    "exampleZh": "登山者趕在日出前完成了通往峰頂的最後一段攀登行程。"
  },
  {
    "id": 8051,
    "en": "tactlessness",
    "kk": "[ˋtæktləsnəs]",
    "zh": "n. 不圓滑；不乖巧",
    "unit": 8,
    "example": "[n.] Mrs. Hardie hurried to make up for her tactlessness by asking her guest about his holiday.",
    "exampleZh": "哈迪太太趕緊問她的客人假期過得如何，以彌補此前不得體的言行。"
  },
  {
    "id": 8052,
    "en": "recruitment",
    "kk": "[rəˋkrutmənt]",
    "zh": "n. 徵募；僱用",
    "unit": 8,
    "example": "[n.] Recruitment advertisements routinely call for 'team players'.",
    "exampleZh": "招聘廣告經常會招聘「有團隊精神的人」。"
  },
  {
    "id": 8053,
    "en": "honour",
    "kk": "[ˋɑnər]",
    "zh": "n. 尊敬；榮幸；高尚品德，氣節；榮譽；獎勵，榮譽稱號；大學榮譽學位課程；優異成績；法官大人，（美國）市長閣下；<舊>貞操；最大點數的牌；v. 尊敬；表彰；信守，執行（承諾）；兌現（支票）；【名】 （Honour）（英）昂納（人名）",
    "unit": 8,
    "example": "[v.] The bank had no mandate to honour the cheque.",
    "exampleZh": "銀行沒有得到指令來承兌這張支票。"
  },
  {
    "id": 8054,
    "en": "impartiality",
    "kk": "[͵ɪm͵pɑrʃiˋæləti]",
    "zh": "n. （不可數）公正，公平，不偏不倚",
    "unit": 8,
    "example": "[n.] To take sides at a later point would be to suggest that the earlier presumptive impartiality was a sham.",
    "exampleZh": "在以後的某一時刻偏袒某一方，就意味著先前假定的公正只是一種假象。"
  },
  {
    "id": 8055,
    "en": "fictional",
    "kk": "[ˋfɪkʃən(ə)l]",
    "zh": "adj. 虛構的，小說（中）的",
    "unit": 8,
    "example": "[adj.] Almost all fictional detectives are unreal.",
    "exampleZh": "幾乎所有小說裡的偵探都是虛構的。"
  },
  {
    "id": 8056,
    "en": "intensification",
    "kk": "[ɪn͵tensɪfɪˋkeɪʃ(ə)n]",
    "zh": "n. 強化，加劇，激烈化；（農業、經濟）集約化，生產強化；（攝影）增強明暗度，影像增強",
    "unit": 8,
    "example": "[n.] This decline reflects an intensification-and globalisation-of competition.",
    "exampleZh": "這個費用的減少反映出了競爭的激烈化和全球化。"
  },
  {
    "id": 8057,
    "en": "unremarkable",
    "kk": "[͵ʌnrɪˋmɑrkəbl]",
    "zh": "adj. 平凡的，不顯著的，不值得注意的；（醫學）正常的，未見異常的",
    "unit": 8,
    "example": "[adj.] Nebula DG 129 looks pretty unremarkable in the visible spectrum.",
    "exampleZh": "DG 129 星雲在這個可見光譜中看起來相當不起眼。"
  },
  {
    "id": 8058,
    "en": "jerky",
    "kk": "[ˋdʒɝki]",
    "zh": "adj. （動作、節奏等）不平穩的，急促而不流暢的；（非正式）愚蠢的，傻的；n. 乾肉條，燻肉條，肉乾（通常不可數，尤指牛肉乾）",
    "unit": 8,
    "example": "[adj.] More and more frustration boiled over at how herky-jerky the allocation process had become.",
    "exampleZh": "對於這套分配流程變得如此反覆無常，越來越多人的不滿情緒徹底爆發了。"
  },
  {
    "id": 8059,
    "en": "static",
    "kk": "[ˋstætɪk]",
    "zh": "adj. 靜止的，停滯的；靜電的；靜力的；（計算機）（儲存器，儲存）靜態的；（計算機）（程序，變量）靜態的；（物理）（物體）靜止的，不動的；n. 靜電；（廣播、電視裡的）靜電噪聲，靜電干擾；<美，非正式>不停的抱怨，指責；靜力學",
    "unit": 8,
    "example": "[adj.] My hair gets full of static when I brush it.",
    "exampleZh": "我梳頭時頭髮就有好多靜電。"
  },
  {
    "id": 8060,
    "en": "softened",
    "kk": "['sɔfənd]",
    "zh": "adj. 軟化的，變軟的；緩和的，溫和的，柔和的；退火的；v. soften 的過去式和過去分詞（使變軟、變溫和、變柔和）",
    "unit": 8,
    "example": "[adj.] Is your heart not yet softened?",
    "exampleZh": "你的心還沒有軟下來嗎？"
  },
  {
    "id": 8061,
    "en": "smallness",
    "kk": "[ˋsmɔlnəs]",
    "zh": "n. 小；貧乏；小氣",
    "unit": 8,
    "example": "[n.] The next really important thing is the smallness of Judea.",
    "exampleZh": "還有一點很重要，就是朱迪亞的渺小性。"
  },
  {
    "id": 8062,
    "en": "triviality",
    "kk": "[͵trɪviˋæləti]",
    "zh": "n. 瑣碎，無足輕重，平凡，淺薄，輕浮；瑣事，小事，雞毛蒜皮；（數學、邏輯學）平凡性",
    "unit": 8,
    "example": "[n.] His speech was one of great triviality.",
    "exampleZh": "他的講話根本無足輕重。"
  },
  {
    "id": 8063,
    "en": "reactionary",
    "kk": "[riˋækʃəneri]",
    "zh": "adj. 反動的，保守的；n. 反動派，保守人士",
    "unit": 8,
    "example": "[n.] Critics viewed him as a reactionary, even a monarchist.",
    "exampleZh": "批評者們把他看成是反動分子，甚至是君主主義者。"
  },
  {
    "id": 8064,
    "en": "damnation",
    "kk": "[dæmˋneɪʃn]",
    "zh": "n. （宗教）被罰下地獄，永罰；詛咒，譴責，非難；int. 該死，糟了",
    "unit": 8,
    "example": "[n.] Words can be your salvation. Words can also be your damnation.",
    "exampleZh": "你的話會拯救你，也會成為你的詛咒。"
  },
  {
    "id": 8065,
    "en": "intricacy",
    "kk": "[ˋɪntrɪkəsi]",
    "zh": "n. 錯綜複雜的事物（或細節）；盤根錯節，複雜精細",
    "unit": 8,
    "example": "[n.] The price depends on the intricacy of the work.",
    "exampleZh": "價格取決於工藝的精細程度。"
  },
  {
    "id": 8066,
    "en": "ornateness",
    "kk": "",
    "zh": "n. 華麗",
    "unit": 8,
    "example": "[n.] I love luxury. And luxury lies not in richness and ornateness but in the absence of vulgarity.",
    "exampleZh": "我愛奢侈。奢侈並不意味著貴重與裝飾華麗，奢侈就是屏除粗俗。"
  },
  {
    "id": 8067,
    "en": "fanciness",
    "kk": "",
    "zh": "n. 花俏；空想",
    "unit": 8,
    "example": "[n.] Snails with the shells that you put on the table, fanciness.",
    "exampleZh": "還有放在桌上的帶殼蝸牛，真有趣。"
  },
  {
    "id": 8068,
    "en": "pretentiousness",
    "kk": "[prɪˋtenʃəsnəs]",
    "zh": "n. 自負，自命不凡，裝腔作勢",
    "unit": 8,
    "example": "[n.] His moral confusion and pretentiousness are reflected in his over-elaborate speech and style of writing.",
    "exampleZh": "他過於修飾的寫作風格及學說，反映出他混淆道德又自命不凡。"
  },
  {
    "id": 8069,
    "en": "affectation",
    "kk": "[͵æfekˋteɪʃ(ə)n]",
    "zh": "n. 做作，矯揉造作；假裝，裝模作樣，故作姿態",
    "unit": 8,
    "example": "[n.] Kay has no affectation at all.",
    "exampleZh": "凱一點也不做作。"
  },
  {
    "id": 8070,
    "en": "placidity",
    "kk": "[pləˋsɪdəti]",
    "zh": "n. 平靜，平穩，安靜；平和，溫和，沉靜",
    "unit": 8,
    "example": "[n.] The swift and indifferent placidity of that look troubled me.",
    "exampleZh": "那一掃而過的冷漠沉靜的目光使我深感不安。"
  },
  {
    "id": 8071,
    "en": "phlegm",
    "kk": "[flem]",
    "zh": "n. 痰，呼吸道粘液（感冒或呼吸道感染時產生的稠厚分泌物）；粘液（古代生理學四體液之一）；粘液質（氣質類型）",
    "unit": 8,
    "example": "[n.] Are you coughing up phlegm?",
    "exampleZh": "你咳嗽有痰嗎？"
  },
  {
    "id": 8072,
    "en": "colourful",
    "kk": "[ˋkʌlərf(ə)l]",
    "zh": "adj. 顏色鮮豔的，五彩繽紛的；有趣的，生動的；（語言）粗俗的",
    "unit": 8,
    "example": "[adj.] The seas around Bermuda are full of colourful corals and fantastic fish.",
    "exampleZh": "百慕大周圍的海域中到處都是五彩的珊瑚蟲和奇異的魚類。"
  },
  {
    "id": 8073,
    "en": "inclusion",
    "kk": "[ɪnˋkluʒ(ə)n]",
    "zh": "n. 包含，包括；包含物，包括的人；認同感，歸屬感",
    "unit": 8,
    "example": "[n.] This will cost money, but if social inclusion is to succeed, it must be spent.",
    "exampleZh": "這將花費金錢，但是要想社會包容取得成功，這筆錢就必須得花。"
  },
  {
    "id": 8074,
    "en": "conscientiousness",
    "kk": "[͵kɑnʃiˋenʃəsnəs]",
    "zh": "n. 盡責，認真勤勉；憑良心辦事，本著良心；（心理學）盡責性人格",
    "unit": 8,
    "example": "[n.] Environmental conscientiousness isn't always enough to make customers recycle old goods.",
    "exampleZh": "環保意識並不足以讓顧客回收舊商品。"
  },
  {
    "id": 8075,
    "en": "legalize",
    "kk": "[ˋliɡə͵laɪz]",
    "zh": "v. 使合法化",
    "unit": 8,
    "example": "[v.] To legalize private space explorations.",
    "exampleZh": "使私人空間探索合法化。"
  },
  {
    "id": 8076,
    "en": "favour",
    "kk": "[ˋfeɪvər]",
    "zh": "n. 支持，喜愛；幫忙，恩惠；偏愛；小禮物；同意性交；v. 偏袒，偏愛；支持，更喜歡；有利於；長得像；悉心照料",
    "unit": 8,
    "example": "[n.] The court found in her favour.",
    "exampleZh": "法庭判決對她有利。"
  },
  {
    "id": 8077,
    "en": "excitable",
    "kk": "[ɪkˋsaɪtəbl]",
    "zh": "adj. （多用於人或動物）易激動的，易興奮的（有時也譯作“易怒的”）；（生理學、生物學）可興奮的，能對刺激作出反應的",
    "unit": 8,
    "example": "[adj.] Mary sat beside Elaine, who today seemed excitable.",
    "exampleZh": "瑪麗坐在了伊萊恩旁邊，伊萊恩今天似乎容易激動。"
  },
  {
    "id": 8078,
    "en": "temperamental",
    "kk": "[͵temprəˋmentl]",
    "zh": "adj. 喜怒無常的，性情多變的；氣質的，性情的；（機器、汽車等）性能不穩定的，易壞的",
    "unit": 8,
    "example": "[adj.] He is very temperamental and critical.",
    "exampleZh": "他喜怒無常，而且吹毛求疵。"
  },
  {
    "id": 8079,
    "en": "jerkily",
    "kk": "[ˋdʒɝkɪli]",
    "zh": "adv. 痙攣性地；顛簸地",
    "unit": 8,
    "example": "[adv.] The car moved off jerkily.",
    "exampleZh": "汽車顛簸著開走了。"
  },
  {
    "id": 8080,
    "en": "disastrously",
    "kk": "[dɪˋzæstrəsli]",
    "zh": "adv. 災難性地，極其糟糕地，悲慘地",
    "unit": 8,
    "example": "[adv.] How could everything go so disastrously wrong?",
    "exampleZh": "怎麼會事事都出這麼大的錯呢？"
  },
  {
    "id": 8081,
    "en": "abrasively",
    "kk": "[əˋbreɪsɪvli]",
    "zh": "adv. 研磨地；磨蝕地；粗暴地",
    "unit": 8,
    "example": "[adv.] His family, she now knew, included an abrasively vigorous mother of eighty-seven.",
    "exampleZh": "她現在知道，他家裡有一位八十七歲，精神矍鑠而惹人生氣的母親。"
  },
  {
    "id": 8082,
    "en": "disloyal",
    "kk": "[dɪsˋlɔɪəl]",
    "zh": "adj. 不忠的，不忠誠的，背叛的",
    "unit": 8,
    "example": "[adj.] Accusing us of being disloyal to cover his own sorry behaviour is truly execrable.",
    "exampleZh": "用指控我們的不忠來掩蓋他個人的不當行為真是很惡劣。"
  },
  {
    "id": 8083,
    "en": "irresolute",
    "kk": "[ɪˋrezəlut]",
    "zh": "adj. <正式>優柔寡斷的，躊躇不定的，無決斷的",
    "unit": 8,
    "example": "[adj.] The worst reason to launch an attack would be a fear of seeming irresolute.",
    "exampleZh": "發起攻擊最壞的理由就是因為害怕看起來猶豫不決。"
  },
  {
    "id": 8084,
    "en": "discouraging",
    "kk": "[dɪsˋkɝɪdʒɪŋ]",
    "zh": "adj. 使人沮喪的，令人氣餒的；v. discourage 的現在分詞或動名詞：使氣餒，使沮喪，使失去勇氣；勸阻，阻止",
    "unit": 8,
    "example": "[adj.] Her criticisms had the effect of discouraging him completely.",
    "exampleZh": "她的批評使他完全喪失了信心。"
  },
  {
    "id": 8085,
    "en": "accustomed",
    "kk": "[əˋkʌstəmd]",
    "zh": "adj. 習慣的，適應的；慣常的，通常的；（眼睛對光線變化）習慣了的，適應了的；v. 使習慣於，使適應（accustom 的過去式和過去分詞）",
    "unit": 8,
    "example": "[adj.] Some are so accustomed to pigging out, they can't cut back.",
    "exampleZh": "有些人習慣暴飲暴食了，他們不可能縮減食量。"
  },
  {
    "id": 8086,
    "en": "settled",
    "kk": "[ˋsetld]",
    "zh": "adj. 定居的，穩定的；習慣的，舒適自在的；有人居住的；決定的，定下的；v. 解決，結束（糾紛）；確定，決定；移居，定居（settle 的過去式和過去分詞形式）",
    "unit": 8,
    "example": "[adj.] His gaze settled on her face.",
    "exampleZh": "他的目光落在她臉上。"
  },
  {
    "id": 8087,
    "en": "predictable",
    "kk": "[prɪˋdɪktəbəl]",
    "zh": "adj. 可預言的",
    "unit": 8,
    "example": "[adj.] The ending of the book was entirely predictable.",
    "exampleZh": "那本書的結局完全是可以想見的。"
  },
  {
    "id": 8088,
    "en": "enquire",
    "kk": "[ɪnˋkwaɪər]",
    "zh": "v. 詢問，打聽；問好，問候；求見（某人），要求與某人談話；調查，查究",
    "unit": 8,
    "example": "[v.] I called the station to enquire about train times.",
    "exampleZh": "我打電話到車站詢問了火車時刻。"
  },
  {
    "id": 8089,
    "en": "rig",
    "kk": "[rɪɡ]",
    "zh": "v. 操縱（選舉、比賽）；（給船隻）裝帆，提供索具；（秘密地）安裝，裝配；臨時搭建，臨時架起；（給某人或某物）裝束，打扮；n. 鑽井架，鑽塔；<美>大型卡車；（成套的）裝置，裝備；帆桅的裝配（方式）；服裝，制服；<古>詭計，騙局",
    "unit": 8,
    "example": "[v.] It took a team of engineers to rig it up.",
    "exampleZh": "需要一組工程師團隊來把它臨時組裝搭建好。"
  },
  {
    "id": 8090,
    "en": "correlate",
    "kk": "[ˋkɔrəleɪt; ˋkɔrələt]",
    "zh": "v. 相互關聯；顯示緊密聯繫；n. 相關的事物",
    "unit": 8,
    "example": "[v.] This would cause problems if you tried to correlate sent and received messages.",
    "exampleZh": "這將導致您在試圖關聯發送與接收消息時產生問題。"
  },
  {
    "id": 8091,
    "en": "ferret",
    "kk": "[ˋferɪt]",
    "zh": "n. 雪貂；白鼬；（尤指在封閉或狹小空間中的）搜尋，查找；搜尋者；v. （翻箱倒櫃地）搜尋，尋找；搜出，查獲某物；用雪貂獵鼠（獵兔）；不斷地煩擾、糾纏；擔心",
    "unit": 8,
    "example": "[v.] The team is trying to ferret out missing details.",
    "exampleZh": "該團隊正試圖搜尋遺失的細節。"
  },
  {
    "id": 8092,
    "en": "inquisitive",
    "kk": "[ɪnˋkwɪzətɪv]",
    "uk": "/ɪnˈkwɪzətɪv/",
    "zh": "adj. 好奇的、好問的、愛探究的",
    "unit": 8,
    "example": "[adj.] She has an inquisitive mind and always asks great questions.",
    "exampleZh": "她有一顆好問的心，總是提出很棒的問題。"
  },
  {
    "id": 8093,
    "en": "inquiring",
    "kk": "[ɪnˋkwaɪrɪŋ]",
    "uk": "/ɪnˈkwaɪərɪŋ/",
    "zh": "adj. 好問的、愛打聽的、探究的",
    "unit": 8,
    "example": "[adj.] The child looked at the strange insect with an inquiring expression.",
    "exampleZh": "那個孩子用充滿好奇探究的表情看著那隻奇特的昆蟲。"
  }
];
