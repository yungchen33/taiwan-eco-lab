// 13 種台灣動植物元素資料庫
const elements = [
    { id: 'bamboo', name: '台灣刺竹', politicalName: '黨外人士｜野心政客｜滋事份子', era: '1986 年前', annotation: '韌性、扎根與社會風暴', img: 'bamboo.jpg', desc: '1987年解嚴及黨禁解除前，以及1986年民主進步黨創黨前，威權體制對黨外反對運動參與者的官方定調。', why: '刺竹叢生帶刺，常被種在聚落四周當作屏障，根系強韌、砍了還能再長。這份帶著鋒芒又牢牢扎根的性格，對應威權時期仍持續發聲、不被連根拔起的黨外人士。' },
    { id: 'firefly', name: '台灣窗螢', politicalName: '民主香火', era: '1979 年前後', annotation: '黑暗期中的微光與薪火相傳', img: 'firefly.jpg', desc: '美麗島事件發生前後至1980年底增額立委選舉，在戒嚴黑暗期苦心傳承的民主燈火。', why: '螢火蟲的光很微弱，卻能在漆黑的夜裡被看見。用它象徵戒嚴黑暗期中的小小火光，靠著一個傳一個，始終沒有熄滅。' },
    { id: 'lily', name: '台灣野百合', politicalName: '野百合世代', era: '1990 年 3 月', annotation: '自主、純潔與世代改革的力量', img: 'lily.jpg', desc: '中正紀念堂前的野百合學運，促成了萬年國會全面改選與民主轉型。', why: '野百合（台灣百合）是台灣特有種，不需要人照顧，在路邊、山坡、荒地也能自己長出來。1990 年的學運以它為象徵：沒有人栽培，也能自己綻放。' },
    { id: 'wild_boar', name: '台灣野豬', politicalName: '扁迷', era: '1994–2008 年', annotation: '強悍突圍與草根基層的衝勁', img: 'wild_boar.jpg', desc: '1994年台北市長選舉及陳水扁總統執政時期及支持者（阿扁們）的歷史政治記憶。', why: '台灣野豬是台灣原生亞種，體型壯碩、衝勁十足，在山林裡硬是闖出一條路。這份不怕碰撞、從基層一路衝出來的形象，對應陳水扁從地方選舉走向總統的歷程，以及支持者的熱情。' },
    { id: 'salmon', name: '櫻花鉤吻鮭', politicalName: '彭友會｜台獨份子', era: '1996 年', annotation: '冰河遺存、逆流而上的堅持', img: 'salmon.jpg', desc: '台灣第一次總統直接民選，彭明敏代表民主進步黨參選第9任總統，全台各地成立「彭明敏之友會」與後援組織。對手陣營攻擊與辯論其為台獨份子。', why: '櫻花鉤吻鮭是冰河時期遺留下來的台灣特有種，如今只分布在大甲溪上游的高山溪流，數量稀少卻代代延續。且因具有洄游的特性，用它象徵被列為「海外黑名單」終於返台，少數、孤立卻不放棄的堅持，後續於1996 年首次總統直選中，代表在野黨參選的彭明敏。' },
    { id: 'serow', name: '台灣長鬃山羊', politicalName: '2004228 牽手護台灣', era: '2004 年 2 月 28 日', annotation: '岩壁攀爬、守護台灣山脈的韌性', img: 'serow.jpg', desc: '民進黨發起的百萬人牽手護台灣運動，表達反對中國部署飛彈的立場。', why: '長鬃山羊是台灣特有種，生活在陡峭的岩壁與山稜，腳步穩健、擅長在險地站穩。它象徵守護山脈的韌性，也呼應 2004 年民眾手牽手連成一線的畫面。' },
    { id: 'monkey', name: '台灣獼猴', politicalName: '綠吱 (吱吱)', era: '2000 年代', annotation: '網路社群的靈活草根串聯', img: 'monkey.jpg', desc: '早年 PTT 等網路論壇上對特定政治傾向支持者的網路稱呼。另根據「鄉民大百科」則認為2006年大規模出現在各大論壇上。', why: '台灣獼猴是台灣唯一的原生獼猴，群居、靈活、彼此溝通頻繁，叫聲也帶有「吱吱」之聲。這與網路社群互動熱絡的樣貌，以及稱呼中的「吱吱」相互呼應。' },
    { id: 'strawberry', name: '台灣野草莓', politicalName: '野草莓', era: '2008 年 11 月', annotation: '荒野中萌發的年輕民主', img: 'strawberry.jpg', desc: '野草莓學運，起因於抗議中國海協會長陳雲林訪台期間的集會遊行爭議。', why: '「草莓族」是長輩對七年級以降年輕人的稱呼，意指外表光鮮、卻被認為不耐壓。野草莓則反過來：不是溫室裡栽培的草莓，而是在荒野與路旁自己蔓延生長的草莓，象徵年輕人用行動回應這個標籤，並呼應野百合學運的命名方式。' },
    { id: 'chrysanthemum', name: '小油菊', politicalName: '太陽花學運｜覺醒青年', era: '2014 年 3 月', annotation: '迎風綻放的公民覺醒', img: 'chrysanthemum.jpg', desc: '太陽花學運，推動臺灣當代公民意識與社會覺醒的重要歷史契機。', why: '菊科植物的花朵形似太陽，花瓣向外綻放。用它呼應「太陽花」的名稱，也象徵一群原本平凡的公民，在關鍵時刻一同綻放、被看見。' },
    { id: 'leopard_cat', name: '台灣石虎', politicalName: '英粉｜1450', era: '2019 年爭議', annotation: '低海拔棲地的守護與爭辯', img: 'leopard_cat.jpg', desc: '源自農委會網路宣傳預算遭質疑，隨後演變為支持者自嘲的代稱。', why: '石虎是台灣現存唯一的原生野生貓科動物，棲息在低海拔的淺山。選它，是因為蔡英文愛貓，飼養相當知名的貓「想想」、「阿才」，也因此被稱為「貓英大統領」；用台灣唯一的原生野貓，呼應這位愛貓的領導人與她的支持者。石虎也常是保育與開發之間爭論的焦點，與這個稱呼在輿論場上被反覆討論的處境相互呼應。' },
    { id: 'fire_tree', name: '台灣火刺木', politicalName: '817｜辣台妹', era: '2020 年大選', annotation: '烈火淬鍊、守護山林邊界的紅葉', img: 'fire_tree.jpg', desc: '中華民國第15任總統大選中，蔡英文獲得的 817 萬歷史最高得票數記錄。', why: '台灣火刺木是台灣特有種，枝條帶刺、結出橘紅色的果實，常被種成樹籬，又辣又帶刺的特質，呼應「辣台妹」這個稱呼。它所指的，是對「一國兩制台灣方案」明確表示不同意、立場又辣又嗆的形象，也連結 2020 年大選創下歷史最高 817 萬票的聲勢。' },
    { id: 'magpie', name: '台灣藍鵲', politicalName: '青鳥', era: '2024 年 5 月', annotation: '寶藍羽衣與全台式守護', img: 'magpie.jpg', desc: '台灣立法院審議國會職權修法時，群眾在台北市「青島東路」外集會抗議。示威者為避免在社群平台發文時遭到演算法干擾或阻擋，改用字音、字形相似的「青鳥」作為代稱。', why: '台灣藍鵲是台灣特有種，羽色寶藍、長尾醒目，常成群活動，也會集體驅趕靠近巢區的入侵者。藍色呼應「青鳥」的名稱，群體行動的習性，則對應 2024 年群眾自發聚集、表達訴求的場景。' },
    { id: 'black_tide', name: '台灣黑潮', politicalName: '後罷免時代｜洋流將起', era: '2025 年 7 月以降', annotation: '從山林走向海洋的壯闊洋流', img: 'black_tide.jpg', desc: '「大罷免」是 2025 年7月間在台灣舉行規模最大的民選公職人員罷免運動，最終結果全數遭到否決（不通過）。2026年民進黨台北市市長候選人沈伯洋興起一股「洋流」熱潮，是否會席捲全台尚待觀察。', why: '黑潮是流經台灣東部外海、由南往北的暖流，規模龐大，影響著台灣周邊的海洋生態與氣候。它不是單一物種，而是整片海洋的動力，呼應「洋流」這個說法，也代表從山林走向海洋、更大格局的想像。' }
];

// 【完整 364 種品項專屬資料庫】完整對應 Excel H 欄新稱呼與 K 欄英文檔名
const recipeDatabase = {
    // ── 二選組合 78 種 ──
    "bamboo-firefly": { name: "幽谷竹螢微光", img: "bamboo_firefly.jpg" },
    "bamboo-lily": { name: "山嵐竹百合秘境", img: "bamboo_lily.jpg" },
    "bamboo-wild_boar": { name: "晨露竹野豬微光", img: "bamboo_wild_boar.jpg" },
    "bamboo-salmon": { name: "野徑竹鮭秘境", img: "bamboo_salmon.jpg" },
    "bamboo-serow": { name: "秘境竹山羊微光", img: "bamboo_serow.jpg" },
    "bamboo-monkey": { name: "蒼山竹獼猴秘境", img: "bamboo_monkey.jpg" },
    "bamboo-strawberry": { name: "溪畔竹野莓微光", img: "bamboo_strawberry.jpg" },
    "bamboo-chrysanthemum": { name: "林間竹小菊秘境", img: "bamboo_chrysanthemum.jpg" },
    "bamboo-leopard_cat": { name: "暮光竹石虎微光", img: "bamboo_leopard_cat.jpg" },
    "bamboo-fire_tree": { name: "遠岫竹火刺木秘境", img: "bamboo_fire_tree.jpg" },
    "bamboo-magpie": { name: "清泉竹藍鵲微光", img: "bamboo_magpie.jpg" },
    "bamboo-black_tide": { name: "滄海竹黑潮秘境", img: "bamboo_black_tide.jpg" },
    "firefly-lily": { name: "星芒百合微光", img: "firefly_lily.jpg" },
    "firefly-wild_boar": { name: "野火豚影微光", img: "firefly_wild_boar.jpg" },
    "firefly-salmon": { name: "溪澗螢鮭幽光", img: "firefly_salmon.jpg" },
    "firefly-serow": { name: "山徑螢羊微光", img: "firefly_serow.jpg" },
    "firefly-monkey": { name: "林間螢猴微光", img: "firefly_monkey.jpg" },
    "firefly-strawberry": { name: "草野螢莓微光", img: "firefly_strawberry.jpg" },
    "chrysanthemum-firefly": { name: "野徑小菊螢火微光", img: "firefly_chrysanthemum.jpg" },
    "firefly-chrysanthemum": { name: "野徑小菊螢火微光", img: "firefly_chrysanthemum.jpg" },
    "firefly-leopard_cat": { name: "夜色螢石虎微光", img: "firefly_leopard_cat.jpg" },
    "fire_tree-firefly": { name: "刺木螢火微光", img: "firefly_fire_tree.jpg" },
    "firefly-fire_tree": { name: "刺木螢火微光", img: "firefly_fire_tree.jpg" },
    "firefly-magpie": { name: "秘境螢藍鵲秘境", img: "firefly_magpie.jpg" },
    "black_tide-firefly": { name: "黑潮螢光微光", img: "black_tide_firefly.jpg" },
    "firefly-black_tide": { name: "黑潮螢光微光", img: "black_tide_firefly.jpg" },
    "lily-wild_boar": { name: "野百合野豬狂想", img: "lily_wild_boar.jpg" },
    "lily-salmon": { name: "冰河百合鮭鄉", img: "lily_salmon.jpg" },
    "lily-serow": { name: "高山百合山羊境", img: "lily_serow.jpg" },
    "lily-monkey": { name: "山林百合獼猴遊", img: "lily_monkey.jpg" },
    "lily-strawberry": { name: "野草莓百合香", img: "lily_strawberry.jpg" },
    "chrysanthemum-lily": { name: "百合小菊交鳴", img: "chrysanthemum_lily.jpg" },
    "lily-chrysanthemum": { name: "百合小菊交鳴", img: "chrysanthemum_lily.jpg" },
    "leopard_cat-lily": { name: "石虎百合祕境", img: "lily_leopard_cat.jpg" },
    "lily-leopard_cat": { name: "石虎百合祕境", img: "lily_leopard_cat.jpg" },
    "fire_tree-lily": { name: "綠野百合火刺木微光", img: "lily_fire_tree.jpg" },
    "lily-fire_tree": { name: "綠野百合火刺木微光", img: "lily_fire_tree.jpg" },
    "lily-magpie": { name: "繁花百合藍鵲秘境", img: "lily_magpie.jpg" },
    "black_tide-lily": { name: "黑潮百合交響", img: "lily_black_tide.jpg" },
    "lily-black_tide": { name: "黑潮百合交響", img: "lily_black_tide.jpg" },
    "salmon-wild_boar": { name: "野豬鮭魚奔騰", img: "wild_boar_salmon.jpg" },
    "wild_boar-salmon": { name: "野豬鮭魚奔騰", img: "wild_boar_salmon.jpg" },
    "serow-wild_boar": { name: "野豬山羊縱走", img: "wild_boar_serow.jpg" },
    "wild_boar-serow": { name: "野豬山羊縱走", img: "wild_boar_serow.jpg" },
    "monkey-wild_boar": { name: "野豬獼猴嬉春", img: "wild_boar_monkey.jpg" },
    "wild_boar-monkey": { name: "野豬獼猴嬉春", img: "wild_boar_monkey.jpg" },
    "strawberry-wild_boar": { name: "野豬野莓原野", img: "wild_boar_strawberry.jpg" },
    "wild_boar-strawberry": { name: "野豬野莓原野", img: "wild_boar_strawberry.jpg" },
    "chrysanthemum-wild_boar": { name: "野豬小菊秋色", img: "wild_boar_chrysanthemum.jpg" },
    "wild_boar-chrysanthemum": { name: "野豬小菊秋色", img: "wild_boar_chrysanthemum.jpg" },
    "leopard_cat-wild_boar": { name: "野豬石虎原徑", img: "wild_boar_leopard_cat.jpg" },
    "wild_boar-leopard_cat": { name: "野豬石虎原徑", img: "wild_boar_leopard_cat.jpg" },
    "fire_tree-wild_boar": { name: "野豬刺木林濤", img: "wild_boar_fire_tree.jpg" },
    "wild_boar-fire_tree": { name: "野豬刺木林濤", img: "wild_boar_fire_tree.jpg" },
    "magpie-wild_boar": { name: "野豬藍鵲聚落", img: "wild_boar_magpie.jpg" },
    "wild_boar-magpie": { name: "野豬藍鵲聚落", img: "wild_boar_magpie.jpg" },
    "black_tide-wild_boar": { name: "野豬黑潮原野", img: "wild_boar_black_tide.jpg" },
    "wild_boar-black_tide": { name: "野豬黑潮原野", img: "wild_boar_black_tide.jpg" },
    "salmon-serow": { name: "鮭魚山羊溯源", img: "salmon_serow.jpg" },
    "serow-salmon": { name: "鮭魚山羊溯源", img: "salmon_serow.jpg" },
    "monkey-salmon": { name: "鮭魚獼猴清溪", img: "salmon_monkey.jpg" },
    "salmon-monkey": { name: "鮭魚獼猴清溪", img: "salmon_monkey.jpg" },
    "salmon-strawberry": { name: "鮭魚野莓水鄉", img: "salmon_strawberry.jpg" },
    "strawberry-salmon": { name: "鮭魚野莓水鄉", img: "salmon_strawberry.jpg" },
    "chrysanthemum-salmon": { name: "鮭魚小菊清流", img: "salmon_chrysanthemum.jpg" },
    "salmon-chrysanthemum": { name: "鮭魚小菊清流", img: "salmon_chrysanthemum.jpg" },
    "leopard_cat-salmon": { name: "鮭魚石虎幽境", img: "salmon_leopard_cat.jpg" },
    "salmon-leopard_cat": { name: "鮭魚石虎幽境", img: "salmon_leopard_cat.jpg" },
    "fire_tree-salmon": { name: "鮭魚刺木溪楓", img: "salmon_fire_tree.jpg" },
    "salmon-fire_tree": { name: "鮭魚刺木溪楓", img: "salmon_fire_tree.jpg" },
    "magpie-salmon": { name: "鮭魚藍鵲清泉", img: "salmon_magpie.jpg" },
    "salmon-magpie": { name: "鮭魚藍鵲清泉", img: "salmon_magpie.jpg" },
    "black_tide-salmon": { name: "鮭魚黑潮溯流", img: "salmon_black_tide.jpg" },
    "salmon-black_tide": { name: "鮭魚黑潮溯流", img: "salmon_black_tide.jpg" },
    "monkey-serow": { name: "山羊獼猴峭壁", img: "serow_monkey.jpg" },
    "serow-monkey": { name: "山羊獼猴峭壁", img: "serow_monkey.jpg" },
    "serow-strawberry": { name: "山羊野莓高嶺", img: "serow_strawberry.jpg" },
    "strawberry-serow": { name: "山羊野莓高嶺", img: "serow_strawberry.jpg" },
    "chrysanthemum-serow": { name: "山羊小菊岩徑", img: "serow_chrysanthemum.jpg" },
    "serow-chrysanthemum": { name: "山羊小菊岩徑", img: "serow_chrysanthemum.jpg" },
    "leopard_cat-serow": { name: "山羊石虎峻嶺", img: "serow_leopard_cat.jpg" },
    "serow-leopard_cat": { name: "山羊石虎峻嶺", img: "serow_leopard_cat.jpg" },
    "fire_tree-serow": { name: "山羊刺木絕壁", img: "serow_fire_tree.jpg" },
    "serow-fire_tree": { name: "山羊刺木絕壁", img: "serow_fire_tree.jpg" },
    "magpie-serow": { name: "山羊藍鵲青崖", img: "serow_magpie.jpg" },
    "serow-magpie": { name: "山羊藍鵲青崖", img: "serow_magpie.jpg" },
    "black_tide-serow": { name: "山羊黑潮雲海", img: "serow_black_tide.jpg" },
    "serow-black_tide": { name: "山羊黑潮雲海", img: "serow_black_tide.jpg" },
    "monkey-strawberry": { name: "獼猴野莓果林", img: "monkey_strawberry.jpg" },
    "strawberry-monkey": { name: "獼猴野莓果林", img: "monkey_strawberry.jpg" },
    "chrysanthemum-monkey": { name: "獼猴小菊樹影", img: "monkey_chrysanthemum.jpg" },
    "monkey-chrysanthemum": { name: "獼猴小菊樹影", img: "monkey_chrysanthemum.jpg" },
    "leopard_cat-monkey": { name: "獼猴石虎林間", img: "monkey_leopard_cat.jpg" },
    "monkey-leopard_cat": { name: "獼猴石虎林間", img: "monkey_leopard_cat.jpg" },
    "fire_tree-monkey": { name: "獼猴刺木秋林", img: "monkey_fire_tree.jpg" },
    "monkey-fire_tree": { name: "獼猴刺木秋林", img: "monkey_fire_tree.jpg" },
    "magpie-monkey": { name: "獼猴藍鵲枝頭", img: "monkey_magpie.jpg" },
    "monkey-magpie": { name: "獼猴藍鵲枝頭", img: "monkey_magpie.jpg" },
    "black_tide-monkey": { name: "獼猴黑潮林浪", img: "monkey_black_tide.jpg" },
    "monkey-black_tide": { name: "獼猴黑潮林浪", img: "monkey_black_tide.jpg" },
    "chrysanthemum-strawberry": { name: "野莓小菊野徑", img: "strawberry_chrysanthemum.jpg" },
    "strawberry-chrysanthemum": { name: "野莓小菊野徑", img: "strawberry_chrysanthemum.jpg" },
    "leopard_cat-strawberry": { name: "野莓石虎荒徑", img: "strawberry_leopard_cat.jpg" },
    "strawberry-leopard_cat": { name: "野莓石虎荒徑", img: "strawberry_leopard_cat.jpg" },
    "fire_tree-strawberry": { name: "野莓刺木紅果", img: "strawberry_fire_tree.jpg" },
    "strawberry-fire_tree": { name: "野莓刺木紅果", img: "strawberry_fire_tree.jpg" },
    "magpie-strawberry": { name: "野莓藍鵲草坡", img: "strawberry_magpie.jpg" },
    "strawberry-magpie": { name: "野莓藍鵲草坡", img: "strawberry_magpie.jpg" },
    "black_tide-strawberry": { name: "野莓黑潮野望", img: "strawberry_black_tide.jpg" },
    "strawberry-black_tide": { name: "野莓黑潮野望", img: "strawberry_black_tide.jpg" },
    "chrysanthemum-leopard_cat": { name: "小菊石虎幽林", img: "chrysanthemum_leopard_cat.jpg" },
    "leopard_cat-chrysanthemum": { name: "小菊石虎幽林", img: "chrysanthemum_leopard_cat.jpg" },
    "chrysanthemum-fire_tree": { name: "小菊刺木金秋", img: "chrysanthemum_fire_tree.jpg" },
    "fire_tree-chrysanthemum": { name: "小菊刺木金秋", img: "chrysanthemum_fire_tree.jpg" },
    "chrysanthemum-magpie": { name: "小菊藍鵲金光", img: "chrysanthemum_magpie.jpg" },
    "magpie-chrysanthemum": { name: "小菊藍鵲金光", img: "chrysanthemum_magpie.jpg" },
    "black_tide-chrysanthemum": { name: "小菊黑潮金浪", img: "chrysanthemum_black_tide.jpg" },
    "chrysanthemum-black_tide": { name: "小菊黑潮金浪", img: "chrysanthemum_black_tide.jpg" },
    "fire_tree-leopard_cat": { name: "石虎刺木林影", img: "leopard_cat_fire_tree.jpg" },
    "leopard_cat-fire_tree": { name: "石虎刺木林影", img: "leopard_cat_fire_tree.jpg" },
    "leopard_cat-magpie": { name: "石虎藍鵲守護", img: "leopard_cat_magpie.jpg" },
    "magpie-leopard_cat": { name: "石虎藍鵲守護", img: "leopard_cat_magpie.jpg" },
    "black_tide-leopard_cat": { name: "石虎黑潮交會", img: "leopard_cat_black_tide.jpg" },
    "leopard_cat-black_tide": { name: "石虎黑潮交會", img: "leopard_cat_black_tide.jpg" },
    "fire_tree-magpie": { name: "林間火刺木藍鵲秘境", img: "fire_tree_magpie.jpg" },
    "magpie-fire_tree": { name: "林間火刺木藍鵲秘境", img: "fire_tree_magpie.jpg" },
    "black_tide-fire_tree": { name: "暮光火刺木黑潮微光", img: "fire_tree_black_tide.jpg" },
    "fire_tree-black_tide": { name: "暮光火刺木黑潮微光", img: "fire_tree_black_tide.jpg" },
    "black_tide-magpie": { name: "遠岫藍鵲黑潮秘境", img: "magpie_black_tide.jpg" },
    "magpie-black_tide": { name: "遠岫藍鵲黑潮秘境", img: "magpie_black_tide.jpg" },

    // ── 三選組合涵蓋範例與自動對應 ──
    "wild_boar-salmon-serow": { name: "綠野野豬鮭山羊微光", img: "wild_boar_salmon_serow.jpg" },
    "salmon-serow-wild_boar": { name: "綠野野豬鮭山羊微光", img: "wild_boar_salmon_serow.jpg" },
    "serow-salmon-wild_boar": { name: "綠野野豬鮭山羊微光", img: "wild_boar_salmon_serow.jpg" },
    "bamboo-firefly-lily": { name: "幽谷竹螢百合共鳴", img: "bamboo_firefly_lily.jpg" },
    "bamboo-salmon-monkey": { name: "秘境竹鮭獼猴微光", img: "bamboo_salmon_monkey.jpg" },
    "firefly-salmon-wild_boar": { name: "晨露螢野豬鮭映像", img: "firefly_wild_boar_salmon.jpg" }
};

// ── 圖片路徑：縮圖(200px) 與 卡面圖(720px) 都是 WebP；原始大圖不再載入 ──
function thumbSrc(src) { return 'img/thumb/' + src.replace(/^.*\//, '').replace(/\.(jpe?g|png|webp)$/i, '.webp'); }
function cardSrc(src)  { return 'img/card/'  + src.replace(/^.*\//, '').replace(/\.(jpe?g|png|webp)$/i, '.webp'); }

// 槽位最多 5 個；累計收集 10 張開啟第 4 個、25 張開啟第 5 個
const MAX_SLOTS = 5;
const SLOT_THRESHOLDS = [0, 0, 0, 10, 25];
let selectedSlots = new Array(MAX_SLOTS).fill(null);
let lastSlotCount = 3;
let slotsReady = false;
let unlockedRecipes = new Map(); // key -> { name, img, meta, ids }
let codexFilter = 'unlocked'; // 預設只看已收集；可切換為「全部格子」

// ── 固定圖鑑：雙元素 78（NO.001–078）+ 三元素 286（NO.079–364）+ 單元素 13（NO.365–377），編號固定 ──
function combinations(arr, k) {
    if (k === 0) return [[]];
    return arr.flatMap((v, i) => combinations(arr.slice(i + 1), k - 1).map(c => [v, ...c]));
}
const elementOrder = elements.map(e => e.id);
const allCombos = [...combinations(elementOrder, 2), ...combinations(elementOrder, 3), ...combinations(elementOrder, 1)];
const comboNumber = new Map(allCombos.map((ids, i) => [ids.join('-'), i + 1]));
const TOTAL_COMBOS = allCombos.length;

function getSlotCount() {
    const n = unlockedRecipes.size;
    return SLOT_THRESHOLDS.filter(t => n >= t).length;
}

function canonicalKey(ids) {
    return [...ids].sort((a, b) => elementOrder.indexOf(a) - elementOrder.indexOf(b)).join('-');
}
function getElement(id) { return elements.find(e => e.id === id); }
function rarityInfo(count) {
    if (count >= 3) return { text: '三元素', cls: 'rarity-3' };
    if (count === 2) return { text: '雙元素', cls: 'rarity-2' };
    return { text: '單元素', cls: 'rarity-1' };
}
function cleanLabel(el) { return el.politicalName.replace(/<br>/g, ' '); }

// ══════════════════════════════════════════════
// 隱藏配方：4 個「拼合型」（把 4～5 個元素放進槽位）＋ 3 個「收集型」（用過的元素湊齊自動解鎖）
// ══════════════════════════════════════════════
const ANIMAL_IDS = ['firefly', 'wild_boar', 'salmon', 'serow', 'monkey', 'leopard_cat', 'magpie'];
const PLANT_IDS = ['bamboo', 'lily', 'strawberry', 'chrysanthemum', 'fire_tree', 'black_tide'];

const HIDDEN_RECIPES = [
    {
        id: 'democracy_road', code: 'H01', type: 'combo',
        ids: ['firefly', 'bamboo', 'lily', 'salmon'],
        name: '黑夜到直選', subtitle: '民主化之路｜1979–1996',
        img: 'hidden_democracy_road.jpg',
        tier: 'hidden',
        task: '台灣如何從戒嚴的黑夜，一步步走到第一次總統直選？依年代挑出 4 個元素，串起這條民主化之路。',
        story: '1979 年前後的戒嚴黑暗期，窗螢的微光是薪火相傳的象徵；1986 年前後，黨外人士集結成黨，刺竹在威權壓力下扎根；1990 年野百合學運推動國會全面改選；1996 年台灣第一次總統直接民選，逆流而上的鮭魚有了成果。這條路，是許多人一棒接一棒走完的。'
    },
    {
        id: 'ballot_island', code: 'H02', type: 'combo',
        ids: ['wild_boar', 'salmon', 'serow', 'fire_tree'],
        name: '選票上的島嶼', subtitle: '選舉與動員｜1994–2020',
        img: 'hidden_ballot_island.jpg',
        tier: 'hidden',
        task: '從 1994 到 2020 年，哪四個元素各自代表一次影響深遠的選舉或動員？',
        story: '1994 年台北市長選舉、1996 年首次總統直選、2004 年總統大選前夕的「牽手護台灣」、2020 年大選創下 817 萬票的紀錄。野豬的衝勁、鮭魚的堅持、山羊的穩健與火刺木的熱烈，各自對應一個選舉年代。選舉，是這段歷史中動員最集中的舞台。'
    },
    {
        id: 'civic_relay', code: 'H03', type: 'combo',
        ids: ['lily', 'strawberry', 'chrysanthemum', 'magpie', 'black_tide'],
        name: '公民行動接力', subtitle: '公民行動｜1990–2025',
        img: 'hidden_civic_relay.jpg',
        tier: 'hidden',
        task: '從 1990 年的學運到 2025 年的大罷免，挑出 5 個「公民行動」的代表，一棒接一棒。',
        story: '1990 年野百合、2008 年野草莓、2014 年太陽花、2024 年青鳥，以及 2025 年大罷免之後的「洋流」。各次行動的訴求與結果並不相同，有的促成改變，有的以挫折收場，但它們串成了同一條公民參與的時間軸。'
    },
    {
        id: 'decade_marks', code: 'H04', type: 'combo',
        ids: ['bamboo', 'lily', 'serow', 'chrysanthemum', 'black_tide'],
        name: '一個十年一個記號', subtitle: '跨四十年總覽｜1980s–2020s',
        img: 'hidden_decade_marks.jpg',
        tier: 'hidden',
        task: '四十年、五個十年（1980 年代到 2020 年代），每個十年挑出一個代表。',
        story: '一個十年留下一個記號：1980 年代黨外的刺竹、1990 年代的野百合、2000 年代的牽手護台灣與山羊、2010 年代向光綻放的太陽花，以及 2020 年代的洋流。四十年的演變，被放進同一條時間軸。'
    },
    {
        id: 'democracy_zoo', code: 'H05', type: 'collect', collectLabel: '動物',
        ids: ANIMAL_IDS,
        name: '台灣民主動物園', subtitle: '動物篇｜七種動物',
        img: 'taiwan_democracy_zoo.jpg',
        tier: 'grand',
        task: '集合所有「動物」元素：只要你解鎖過的卡牌（單元素或融合都算）裡，出現過這 7 種動物，就會自動解鎖。',
        story: '從黑夜中的微光到溪流裡的逆流而上，從成群的獼猴、藍鵲到守在淺山的石虎，七種動物各自連著一段稱呼與一次行動，如今聚在同一個投票箱旁。'
    },
    {
        id: 'botanical_garden', code: 'H06', type: 'collect', collectLabel: '植物',
        ids: PLANT_IDS,
        name: '台灣島形植物園', subtitle: '植物篇｜五種植物與黑潮',
        img: 'taiwan_democracy_botanical_garden.jpg',
        tier: 'grand',
        task: '集合所有「植物與洋流」元素：5 種植物加上黑潮，每一個都在你解鎖的卡牌裡出現過，就會自動解鎖。',
        story: '刺竹的鋒芒、野百合的野地、野草莓的自發、小油菊的向陽、火刺木的辣勁，被黑潮環抱，長成台灣島的形狀。'
    },
    {
        id: 'ecology_13', code: 'H07', type: 'collect', collectLabel: '元素',
        ids: ANIMAL_IDS.concat(PLANT_IDS),
        name: '向光綻放的民主生態園', subtitle: '總集篇｜十三個元素',
        img: 'taiwan_democracy_ecology_13.jpg',
        tier: 'final',
        task: '13 個元素全部都曾出現在你解鎖的卡牌裡，就能看見最後的畫面。',
        story: '動物與植物、山林與海洋、不同年代的稱呼與行動，十三個元素終於在同一個畫面裡，朝向同一道光。'
    }
];

let unlockedHidden = new Set();
let revealQueue = [];

// 外觀等級：hidden（H01–H04）→ grand（H05–H06 集大成）→ final（H07 終極圖鑑）
const TIER_INFO = {
    hidden: { stamp: '隱藏配方', cls: ['rarity-hidden'], label: '主題與年代', footer: 'HIDDEN ARCHIVE · TAIWAN', banner: '✦ 隱藏配方解鎖 ✦', bannerCls: '' },
    grand:  { stamp: '集大成', cls: ['rarity-hidden', 'rarity-grand'], label: '集大成篇章', footer: 'GRAND ARCHIVE · TAIWAN', banner: '✦ 集大成解鎖 ✦', bannerCls: 'grand' },
    final:  { stamp: '終極圖鑑', cls: ['rarity-hidden', 'rarity-grand', 'rarity-final'], label: '集大成篇章', footer: 'THE GRAND FINALE · TAIWAN', banner: '✦ 終極圖鑑解鎖 ✦', bannerCls: 'final' }
};

function hiddenCardInfo(r, reveal) {
    return { img: r.img, title: r.name, meta: r.subtitle, num: r.code, ids: r.ids, hidden: r, reveal: !!reveal };
}

// 玩家「用過」的元素：出現在任何已解鎖的卡牌（含隱藏拼合型）裡
function getUsedElementIds() {
    const used = new Set();
    unlockedRecipes.forEach(v => v.ids.forEach(id => used.add(id)));
    HIDDEN_RECIPES.filter(r => r.type === 'combo' && unlockedHidden.has(r.id)).forEach(r => r.ids.forEach(id => used.add(id)));
    return used;
}

function unlockHiddenRecipe(r) {
    if (unlockedHidden.has(r.id)) return false;
    unlockedHidden.add(r.id);
    saveProgress();
    initCodex();
    return true;
}

// 檢查「收集型」配方是否達成，回傳這次新解鎖的
function checkCollectHidden() {
    const used = getUsedElementIds();
    const newly = [];
    HIDDEN_RECIPES.filter(r => r.type === 'collect').forEach(r => {
        if (!unlockedHidden.has(r.id) && r.ids.every(id => used.has(id))) {
            unlockHiddenRecipe(r);
            newly.push(r);
        }
    });
    return newly;
}

let revealTimer = null;
function isBadgeModalOpen() {
    return document.getElementById('badge-modal')?.style.display === 'flex';
}
function queueHiddenReveal(r) {
    revealQueue.push(r);
    // 同時解鎖多張時只排一次，之後依序顯示（關閉一張再出現下一張）
    if (!revealTimer && !isBadgeModalOpen()) {
        revealTimer = setTimeout(() => { revealTimer = null; showNextReveal(); }, 800);
    }
}
function showNextReveal() {
    if (isBadgeModalOpen()) return;
    const r = revealQueue.shift();
    if (r) showBadgeModal(hiddenCardInfo(r, true));
}
function closeBadgeModal() {
    closeModal('badge-modal');
    if (revealQueue.length) setTimeout(showNextReveal, 400);
}

function hiddenRequirement(r) {
    if (r.type === 'collect') {
        const used = getUsedElementIds();
        const n = r.ids.filter(id => used.has(id)).length;
        return `進度：${r.collectLabel}已出現 ${n} / ${r.ids.length}（自動解鎖，不需要放進槽位）`;
    }
    const need = r.ids.length;
    const gate = SLOT_THRESHOLDS[need - 1];
    return getSlotCount() >= need
        ? `需要同時放入 ${need} 個元素`
        : `需要同時放入 ${need} 個元素（收集 ${gate} 張卡牌開啟第 ${need} 個槽位）`;
}

// ── 共用：彈窗開關（鎖住背景捲動）與提示訊息 ──
function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'none';
    const anyOpen = [...document.querySelectorAll('.modal-overlay')].some(x => x.style.display === 'flex');
    if (!anyOpen) document.body.style.overflow = '';
}
function showToast(msg, duration = 2200) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), duration);
}

function initGame() {
    const itemGrid = document.getElementById('item-grid');
    if (!itemGrid) return;
    itemGrid.innerHTML = '';

    elements.forEach(el => {
        const node = document.createElement('div');
        node.className = 'item-node';
        node.dataset.id = el.id;
        node.tabIndex = 0;
        node.setAttribute('role', 'button');
        node.setAttribute('aria-label', `${el.name}，查看詳細說明`);
        // 卡片只保留：圖、名稱、歷史稱呼、年代；其餘（意涵、註解）放在詳細視窗
        node.innerHTML = `
            <img src="${thumbSrc(el.img)}" class="item-img" decoding="async" alt="${el.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">
            <span class="species-name">${el.name}</span>
            <span class="historical-label">${cleanLabel(el)}</span>
            <div class="time-meta">◷ ${el.era}</div>
        `;
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'item-add-btn';
        addBtn.setAttribute('aria-label', `加入 ${el.name}`);
        addBtn.textContent = '＋';
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addElementToNextSlot(el);
        });
        node.appendChild(addBtn);
        node.addEventListener('click', () => showDetailModal(el));
        node.addEventListener('keydown', (e) => {
            if (e.target !== node) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showDetailModal(el);
            }
        });
        itemGrid.appendChild(node);
    });

    for (let i = 0; i < MAX_SLOTS; i++) {
        const slotEl = document.getElementById(`slot-${i}`);
        if (!slotEl) continue;
        slotEl.tabIndex = 0;
        slotEl.setAttribute('role', 'button');
        slotEl.addEventListener('click', () => clearSlot(i));
        slotEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                clearSlot(i);
            }
        });
    }

    updateSlotsUI();
    loadProgress();
    if (checkCollectHidden().length) saveProgress(); // 依已載入的進度靜默補上收集型配方
    lastSlotCount = getSlotCount();
    updateSlotsUI();
    slotsReady = true;
    initCodex();
}

function showDetailModal(el) {
    const modal = document.getElementById('species-modal');
    const modalInner = document.getElementById('species-modal-inner');
    if (!modal || !modalInner) return;

    const already = selectedSlots.includes(el);
    modalInner.innerHTML = `
        <button id="modal-close" class="modal-close-btn" aria-label="關閉">✕</button>
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left;">
            <img src="${thumbSrc(el.img)}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" alt="${el.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">
            <div>
                <h3 style="color: #2c5e3b; font-size: 1.3rem; margin-bottom: 4px;">${el.name}</h3>
                <div class="historical-label" style="margin-bottom: 4px; display: inline-block;">${cleanLabel(el)}</div>
                <div style="font-size: 0.8rem; color: #666;">◷ ${el.era}</div>
                <div style="font-size: 0.8rem; color: #55705E; font-style: italic; margin-top: 2px;">${el.annotation}</div>
            </div>
        </div>
        ${explainBlocks(el)}
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="modal-add-btn" class="btn primary" style="font-size: 0.85rem;" ${already ? 'disabled' : ''}>${already ? '已在實驗台' : '加入實驗台融合'}</button>
        </div>
    `;

    openModal('species-modal');
    document.getElementById('modal-close').onclick = () => closeModal('species-modal');
    modal.onclick = (e) => { if (e.target === modal) closeModal('species-modal'); };
    document.getElementById('modal-add-btn').onclick = () => {
        addElementToNextSlot(el);
        closeModal('species-modal');
    };
}

function addElementToNextSlot(el) {
    if (selectedSlots.includes(el)) {
        showToast(`「${el.name}」已在實驗台`);
        return;
    }
    const count = getSlotCount();
    const emptyIndex = selectedSlots.slice(0, count).indexOf(null);
    if (emptyIndex === -1) {
        showToast(`槽位已滿（目前 ${count} 個），點選槽位可移除元素`);
        return;
    }
    selectedSlots[emptyIndex] = el;
    updateSlotsUI();
}

function clearSlot(index) {
    selectedSlots[index] = null;
    updateSlotsUI();
    hideResult();
}

function updateSlotsUI() {
    const count = getSlotCount();
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const container = document.querySelector('.slots-container');
    if (container) container.dataset.count = String(count);

    for (let i = 0; i < MAX_SLOTS; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if (!slot) continue;
        const open = i < count;
        slot.hidden = !open;
        const plus = document.getElementById(`plus-${i}`); // 第 4、5 個槽位前面的「＋」
        if (plus) plus.hidden = !open;
        if (!open) { selectedSlots[i] = null; continue; }

        const el = selectedSlots[i];
        if (el) {
            slot.className = 'slot filled';
            slot.setAttribute('aria-label', `${el.name}，點選移除`);
            slot.innerHTML = `<img src="${thumbSrc(el.img)}" class="slot-img-inner" alt="${el.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">`;
        } else {
            slot.className = 'slot';
            slot.setAttribute('aria-label', `空槽位 ${letters[i]}`);
            slot.innerHTML = `<span>元素 ${letters[i]}</span>`;
        }
    }

    // 新槽位開啟：動畫＋提示
    if (slotsReady && count > lastSlotCount) {
        const newSlot = document.getElementById(`slot-${count - 1}`);
        if (newSlot) newSlot.classList.add('slot-new');
        setTimeout(() => showToast(`🎉 第 ${count} 個槽位已開啟！圖鑑最下方有隱藏配方的線索`, 3600), 500);
    }
    lastSlotCount = count;

    document.querySelectorAll('.item-node').forEach(node => {
        node.classList.toggle('selected', selectedSlots.some(s => s && s.id === node.dataset.id));
    });

    // 1 個以上即可；只選 1 個時為「收錄單一元素」
    const activeCount = selectedSlots.filter(Boolean).length;
    const mixBtn = document.getElementById('mix-btn');
    if (mixBtn) {
        mixBtn.disabled = (activeCount < 1);
        mixBtn.textContent = activeCount === 1 ? '收錄單一元素' : '開始融合';
    }
}

// 產生所有排列，讓不同放置順序都能對到同一個組合
function permutations(arr) {
    if (arr.length <= 1) return [arr];
    return arr.flatMap((v, i) =>
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(p => [v, ...p])
    );
}

// 決定結果卡用哪個圖檔。
// 有 manifest.js（window.CARD_FILES）時完全不用發請求；沒有時同時探測所有候選（不再一個一個等 404）
function resolveCardImage(candidates) {
    if (window.CARD_FILES) {
        return Promise.resolve(candidates.find(c => window.CARD_FILES.has(c)) || 'bamboo.jpg');
    }
    return Promise.all(candidates.map(c => loadImage(cardSrc(c)).then(img => (img ? c : null))))
        .then(r => r.find(Boolean) || 'bamboo.jpg');
}

// 資料庫沒登記的組合（目前三選組合只登記了 4 種）→ 自動產生專屬風格名稱
// 同一組合永遠產生同一個名稱；之後補進 recipeDatabase 的正式名稱會優先使用
const shortNames = {
    bamboo: '竹', firefly: '螢', lily: '百合', wild_boar: '野豬', salmon: '鮭',
    serow: '山羊', monkey: '獼猴', strawberry: '野莓', chrysanthemum: '小菊',
    leopard_cat: '石虎', fire_tree: '刺木', magpie: '藍鵲', black_tide: '黑潮'
};
const namePrefixes = ['幽谷', '山嵐', '晨露', '野徑', '蒼山', '溪畔', '林間', '暮光', '遠岫', '清泉', '滄海', '星芒'];
const nameSuffixes = ['微光', '秘境', '共鳴', '交響'];

function generateFallbackName(activeElements) {
    const order = elements.map(e => e.id);
    const sorted = [...activeElements].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    const key = sorted.map(e => e.id).join('-');
    let h = 0;
    for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const body = sorted.map(e => shortNames[e.id] || e.name).join('');
    return namePrefixes[h % namePrefixes.length] + body + nameSuffixes[(h >>> 4) % nameSuffixes.length];
}

// 顯示融合成果（一般卡牌與隱藏配方共用）
function renderResult({ img, title, statusText, statusClass, notesHtml, onPreview, hiddenStyle }) {
    const resultSection = document.getElementById('result-section');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');
    const resultImg = document.getElementById('result-img');
    const resultCard = document.querySelector('.result-card');
    const statusEl = document.getElementById('result-status');

    const oldMedia = document.getElementById('result-media');
    if (oldMedia) oldMedia.remove();
    const oldDownloadBtn = document.getElementById('download-badge-btn');
    if (oldDownloadBtn) oldDownloadBtn.remove();

    if (statusEl) {
        statusEl.textContent = statusText;
        statusEl.className = 'result-status ' + statusClass;
    }
    resultTitle.textContent = title;
    resultDesc.innerHTML = notesHtml;

    resultImg.style.display = 'block';
    resultImg.className = 'result-avatar';
    resultImg.onerror = function() { this.onerror = null; this.src = 'img/card/bamboo.webp'; };
    resultImg.src = cardSrc(img);

    const showBadgeBtn = document.createElement('button');
    showBadgeBtn.id = 'download-badge-btn';
    showBadgeBtn.className = 'btn primary';
    showBadgeBtn.style.margin = '4px 0 12px';
    showBadgeBtn.textContent = '🏷 收藏卡牌預覽';
    showBadgeBtn.addEventListener('click', onPreview);
    resultDesc.before(showBadgeBtn); // 放在標題正下方，不必捲過所有說明才找得到

    resultCard.classList.toggle('hidden-recipe', !!hiddenStyle);

    // 重新觸發出現動畫
    resultCard.classList.remove('pop');
    void resultCard.offsetWidth;
    resultCard.classList.add('pop');

    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 放入 4～5 個元素：只有完全符合隱藏配方才會產生卡牌
function handleHiddenAttempt(activeElements) {
    const ids = activeElements.map(el => el.id);
    const key = canonicalKey(ids);
    const recipe = HIDDEN_RECIPES.find(r => r.type === 'combo' && canonicalKey(r.ids) === key);

    if (!recipe) {
        // 差一個就提示「接近了」
        let best = 0, near = false;
        HIDDEN_RECIPES.filter(r => r.type === 'combo').forEach(r => {
            const overlap = r.ids.filter(id => ids.includes(id)).length;
            const diff = ids.length + r.ids.length - 2 * overlap;
            best = Math.max(best, overlap);
            if (diff <= 2 && overlap >= 3) near = true;
        });
        showToast(near
            ? `接近了！其中 ${best} 個元素屬於同一段故事，再換一個試試。`
            : '這些元素之間，還沒有共同的故事。', 3600);
        return;
    }

    const isNew = !unlockedHidden.has(recipe.id);
    const els = recipe.ids.map(getElement);
    renderResult({
        img: recipe.img,
        title: recipe.name,
        statusText: isNew ? '✦ 隱藏配方解鎖' : '已收集過',
        statusClass: isNew ? 'is-hidden' : 'is-old',
        notesHtml: `<div class="explain-block story"><h4>這段故事</h4><p>${recipe.story}</p></div>` + buildResultNotes(els),
        onPreview: () => showBadgeModal(hiddenCardInfo(recipe)),
        hiddenStyle: true
    });

    if (isNew) {
        unlockHiddenRecipe(recipe);
        queueHiddenReveal(recipe);
        checkCollectHidden().forEach(queueHiddenReveal);
    }
}

// 三個元素剛好是某個隱藏配方的子集合 → 暗示還有更大的故事
function hintBiggerStory(ids) {
    if (ids.length < 3) return;
    const rec = HIDDEN_RECIPES.find(r => r.type === 'combo' && r.ids.length === ids.length + 1 && ids.every(i => r.ids.includes(i)));
    if (!rec || unlockedHidden.has(rec.id)) return;
    setTimeout(() => showToast(
        getSlotCount() > ids.length
            ? '這組元素似乎屬於一段更大的故事…再加一個試試？'
            : '這組元素似乎屬於一段更大的故事…收集更多卡牌、開啟更多槽位後再回來看看。', 3800), 900);
}

// 智慧融合：先確認圖檔真的存在，再用同一個路徑顯示、存圖鑑、開卡牌
async function handleMixAction() {
    const activeElements = selectedSlots.filter(Boolean);
    if (activeElements.length < 1) return;

    if (activeElements.length >= 4) {
        handleHiddenAttempt(activeElements);
        return;
    }

    const mixBtn = document.getElementById('mix-btn');
    if (mixBtn) mixBtn.disabled = true; // 圖檔確認期間避免重複點擊

    const ids = activeElements.map(el => el.id);
    const perms = permutations(ids);

    const matchedPerm = perms.find(p => recipeDatabase[p.join('-')]);
    const recipe = matchedPerm ? recipeDatabase[matchedPerm.join('-')] : null;

    const candidates = [
        ...(recipe ? [recipe.img] : []),
        ...perms.map(p => p.join('_') + '.jpg'),
        activeElements[activeElements.length - 1].img
    ];
    const finalImg = await resolveCardImage(candidates);
    await loadImage(cardSrc(finalImg)); // 先放進快取，結果卡出現時圖片已就緒

    // 以固定順序作為圖鑑 key，A+B 與 B+A 視為同一張卡
    const dashKey = canonicalKey(ids);
    const orderedIds = dashKey.split('-');
    const orderedEls = orderedIds.map(getElement);

    const isSingle = orderedEls.length === 1;
    const displayName = isSingle
        ? orderedEls[0].name
        : (recipe ? recipe.name : generateFallbackName(activeElements));
    const metaText = orderedEls.map(cleanLabel).join(' + ');

    const isNew = !unlockedRecipes.has(dashKey);
    const cardNum = comboNumber.get(dashKey);

    renderResult({
        img: finalImg,
        title: displayName,
        statusText: isNew ? '✦ 新解鎖' : '已收集過',
        statusClass: isNew ? 'is-new' : 'is-old',
        notesHtml: buildResultNotes(orderedEls),
        onPreview: () => showBadgeModal({ img: finalImg, title: displayName, meta: metaText, num: cardNum, ids: orderedIds }),
        hiddenStyle: false
    });

    unlockRecipe(dashKey, { name: displayName, img: finalImg, meta: metaText, ids: orderedIds });
    updateSlotsUI();

    // 隱藏配方：收集型自動解鎖；拼合型給予線索
    checkCollectHidden().forEach(queueHiddenReveal);
    hintBiggerStory(orderedIds);
}

// 兩段說明：名稱歷史說明（稱呼的由來）＋ 選擇這個物種的意涵（為何是它？）
function explainBlocks(el) {
    return `
        <div class="explain-block">
            <h4>名稱歷史說明</h4>
            <p>${el.desc}</p>
        </div>
        <div class="explain-block why">
            <h4>選擇這個物種的意涵（為何是它？）</h4>
            <p>${el.why}</p>
        </div>`;
}

// 融合成果區：每個元素收合成一列（點開才看完整說明），手機上不會一次塞滿
function buildResultNotes(els) {
    return els.map(el => `
        <details class="element-note">
            <summary class="note-head">
                <img class="note-thumb" src="${thumbSrc(el.img)}" alt="${el.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">
                <span class="note-title">
                    <span class="note-name">${el.name}</span>
                    <span class="note-label">${cleanLabel(el)}</span>
                </span>
                <span class="note-chevron" aria-hidden="true">▾</span>
            </summary>
            <div class="note-body">
                <div class="note-line">◷ ${el.era}　${el.annotation}</div>
                ${explainBlocks(el)}
            </div>
        </details>
    `).join('');
}

// 「歷史稱呼」的來龍去脈（放在查看歷史說明的最上方）
const HISTORY_INTRO = '這些稱呼出現在不同年代的政治與社會運動中。有些原本是外界貼上的標籤，甚至用來攻擊，後來被支持者與參與者接過來，成為大方承認的身分與記憶。';

// 卡牌預覽視窗：畫面上的「查看歷史說明」區（不會出現在下載的圖片中）；多個元素時各自收合
function buildHistoryPanel(ids) {
    const single = ids.length === 1;
    const items = ids.map(getElement).map(el => `
        <details class="history-item" ${single ? 'open' : ''}>
            <summary class="history-head">
                <span class="history-name">${el.name}</span>
                <span class="history-era">◷ ${el.era}</span>
            </summary>
            <div class="history-label">${cleanLabel(el)}</div>
            ${explainBlocks(el)}
        </details>
    `).join('');
    return `<p class="history-intro">${HISTORY_INTRO}</p>${items}`;
}

// 隱藏配方的說明面板：這段故事 ＋ 包含的元素
function buildHiddenPanel(r) {
    const chips = r.ids.map(getElement).map(el =>
        `<span class="hidden-chip">${el.name}<small>${el.era}</small></span>`).join('');
    return `
        <div class="explain-block why history-story">
            <h4>這段故事</h4>
            <p>${r.story}</p>
        </div>
        <div class="hidden-chips-title">包含的元素</div>
        <div class="hidden-chips">${chips}</div>
    `;
}

function showBadgeModal(info) {
    const badgeImg = document.getElementById('modal-badge-img');
    const badgeTitle = document.getElementById('modal-badge-title');
    const cardMeta = document.getElementById('modal-card-meta');
    const cardNumEl = document.getElementById('modal-card-num');
    const stamp = document.getElementById('modal-card-stamp');
    const combo = document.getElementById('modal-card-combo');
    const label = document.getElementById('modal-card-label');
    const footer = document.getElementById('modal-card-footer');
    const banner = document.getElementById('modal-reveal-banner');
    const card = document.querySelector('.collectible-card');
    const isHidden = !!info.hidden;
    const tier = isHidden ? TIER_INFO[info.hidden.tier || 'hidden'] : null;
    const rarity = isHidden
        ? { text: tier.stamp, cls: tier.cls }
        : (r => ({ text: r.text, cls: [r.cls] }))(rarityInfo(info.ids.length));

    if (badgeImg) {
        badgeImg.onerror = function() { this.onerror = null; this.src = 'img/card/bamboo.webp'; };
        badgeImg.src = cardSrc(info.img);
    }
    if (badgeTitle) badgeTitle.textContent = info.title;
    if (cardMeta) {
        if (isHidden) {
            cardMeta.classList.remove('meta-rows');
            cardMeta.textContent = info.meta.replace(/｜/g, '｜\u2060'); // 避免在「｜」後面斷行，與下載圖片的換行一致
        } else {
            // 一般卡牌：每個元素的歷史稱呼各佔一列，並配上該元素的小圖，避免多個稱呼混在一起
            const multi = info.ids.length > 1;
            cardMeta.classList.add('meta-rows');
            cardMeta.innerHTML = '<div class="meta-list">' + info.ids.map(id => {
                const e = getElement(id);
                const thumb = multi
                    ? `<img src="${thumbSrc(e.img)}" alt="${e.name}" title="${e.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">`
                    : '';
                return `<div class="meta-row">${thumb}<span>${cleanLabel(e)}</span></div>`;
            }).join('') + '</div>';
        }
    }
    if (cardNumEl) cardNumEl.textContent = isHidden ? `NO. ${info.hidden.code}` : `NO. ${String(info.num).padStart(3, '0')}`;
    if (stamp) stamp.textContent = rarity.text;
    if (label) label.textContent = isHidden ? tier.label : '歷史稱呼';
    if (footer) footer.textContent = isHidden ? tier.footer : 'ECO ARCHIVE · TAIWAN';
    if (banner) {
        banner.hidden = !info.reveal;
        banner.className = 'reveal-banner' + (isHidden && tier.bannerCls ? ' ' + tier.bannerCls : '');
        if (isHidden) banner.textContent = tier.banner;
    }
    if (card) {
        card.classList.remove('rarity-2', 'rarity-3', 'rarity-hidden', 'rarity-grand', 'rarity-final');
        card.classList.add(...rarity.cls);
    }
    if (combo) {
        // 一般卡牌的小圖已移到各自的稱呼旁；這裡只有隱藏配方（拼合型）顯示組成小圖
        const showThumbs = isHidden && info.ids.length >= 2 && info.ids.length <= 5;
        combo.innerHTML = !showThumbs ? '' : info.ids.map(id => {
            const e = getElement(id);
            return `<img src="${thumbSrc(e.img)}" class="combo-thumb" alt="${e.name}" title="${e.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">`;
        }).join('<span class="combo-plus">＋</span>');
    }
    const history = document.getElementById('modal-history');
    if (history) history.innerHTML = isHidden ? buildHiddenPanel(info.hidden) : buildHistoryPanel(info.ids);
    const historyBox = document.getElementById('stage-history');
    if (historyBox) historyBox.open = false;

    openModal('badge-modal');

    // 記錄目前卡牌，並先在背景把圖片畫好（點下載時可立即使用，行動裝置的分享才不會逾時）
    currentCardInfo = info;
    setTimeout(() => { getCardBlobPromise(info).catch(() => {}); }, 200); // 彈窗先出現，再於背景畫圖
}

// ══════════════════════════════════════════════
// 卡牌下載：用 Canvas 直接畫出卡牌 PNG（不依賴截圖套件）
// ══════════════════════════════════════════════
let currentCardInfo = null;
const cardBlobCache = new Map(); // 同一張卡只畫一次（最多留 6 張，避免佔太多記憶體）
function getCardBlobPromise(info) {
    const key = info.hidden ? 'h:' + info.hidden.id : 'n:' + info.ids.join('-');
    if (!cardBlobCache.has(key)) {
        const p = renderCardBlob(info);
        p.catch(() => cardBlobCache.delete(key));
        cardBlobCache.set(key, p);
        if (cardBlobCache.size > 6) cardBlobCache.delete(cardBlobCache.keys().next().value);
    }
    return cardBlobCache.get(key);
}

const CARD_W = 300, CARD_H = 435, CARD_SCALE = 3; // 輸出 900 × 1305 px（要更大可改回 4）
const FONT_STACK = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif';

function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });
}
async function loadImageWithFallback(src) {
    return (await loadImage(src)) || (await loadImage('img/card/bamboo.webp'));
}

function drawRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

function drawCircleImage(ctx, img, cx, cy, r, fallbackColor) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    if (img) {
        const scale = Math.max((r * 2) / img.width, (r * 2) / img.height); // 等同 object-fit: cover
        const w = img.width * scale, h = img.height * scale;
        ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h);
    } else {
        ctx.fillStyle = fallbackColor || '#cfe0d3';
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
    ctx.restore();
}

// 逐字加上字距的文字（align: left / center / right）
function drawSpaced(ctx, text, x, y, spacing, align) {
    const chars = [...text];
    const widths = chars.map(ch => ctx.measureText(ch).width);
    const total = widths.reduce((a, b) => a + b, 0) + spacing * Math.max(chars.length - 1, 0);
    let cx = align === 'center' ? x - total / 2 : (align === 'right' ? x - total : x);
    ctx.textAlign = 'left';
    chars.forEach((ch, i) => {
        ctx.fillText(ch, cx, y);
        cx += widths[i] + spacing;
    });
    return total;
}

// 自動換行：優先在空格（「 + 」）處換行，避免把「台獨份子」這類詞拆開；超過行數以「…」截斷
function wrapLines(ctx, text, maxWidth, maxLines) {
    const lines = [];
    let cur = '';
    const pushLong = (word) => {
        // 單一詞比整行還寬時才逐字切開
        let part = '';
        for (const ch of word) {
            if (part && ctx.measureText(part + ch).width > maxWidth) {
                lines.push(part);
                part = ch;
            } else {
                part += ch;
            }
        }
        return part;
    };
    text.split(' ').forEach(word => {
        const test = cur ? `${cur} ${word}` : word;
        if (ctx.measureText(test).width <= maxWidth) {
            cur = test;
            return;
        }
        if (cur) lines.push(cur);
        cur = ctx.measureText(word).width > maxWidth ? pushLong(word) : word;
    });
    if (cur) lines.push(cur);
    if (lines.length > maxLines) {
        lines.length = maxLines;
        let last = lines[maxLines - 1];
        while (last && ctx.measureText(last + '…').width > maxWidth) last = last.slice(0, -1);
        lines[maxLines - 1] = last + '…';
    }
    return lines;
}

// ── 一般卡牌的三種等級：單元素（鼠尾草綠）→ 雙元素（水藍）→ 三元素（金色）──
const NORMAL_THEMES = {
    1: {
        bg: ['#FBFAF5'], border: ['#B8CEBE'], borderW: 1, inner: 'rgba(229,238,230,0.75)',
        header: '#718078', stamp: { bg: '#EEF5EF', border: '#9EBBA6', text: '#426B4D' },
        title: '#315F43', divider: '#9EBBA6', label: '#8C9E92', meta: '#55705E', thumb: '#9EBBA6', footer: '#8C9E92',
        rings: []
    },
    2: {
        bg: ['#F6FAFC'], border: ['#A9CAD6'], borderW: 1, inner: 'rgba(222,238,244,0.8)',
        header: '#6E8590', stamp: { bg: '#E8F3F7', border: '#8FB7C4', text: '#2F6178' },
        title: '#2B5F73', divider: '#8FB7C4', label: '#8FA3AB', meta: '#4B7686', thumb: '#8FB7C4', footer: '#8FA3AB',
        rings: [[1, 2, '#FFFFFF'], [2.75, 1.5, '#A9CAD6']]
    },
    3: {
        bg: ['#FFFDF5', '#FBF4DE'], border: ['#F3DC8A', '#C9A24B', '#8A6A1E', '#EBD07A'], borderW: 2, inner: 'rgba(246,236,205,0.85)',
        header: '#8A7A4A', stamp: { bg: '#FBF3DD', border: '#C9A24B', text: '#8A6A1E' },
        title: '#6B4E12', divider: '#C9A24B', label: '#A89868', meta: '#6F5F2E', thumb: '#C9A24B', footer: '#A89868',
        rings: [[1, 2, '#FFFFFF'], [3, 2, '#D9B45A'], [5.5, 2, 'rgba(246,236,205,0.9)']]
    }
};

async function renderCardBlob(info) {
    if (info.hidden) return renderHiddenCardBlob(info);
    const rarity = rarityInfo(info.ids.length);
    const T = NORMAL_THEMES[Math.min(info.ids.length, 3)];
    const numText = `NO. ${String(info.num).padStart(3, '0')}`;

    // 等字型載入完成再畫，避免中文變成系統字型
    try {
        const sample = `${info.title}${info.meta}台灣政治生態圖鑑雙元素三元素單元素ECO ARCHIVE TAIWAN0123456789`;
        await Promise.all([
            document.fonts.load(`700 18px "Noto Sans TC"`, sample),
            document.fonts.load(`500 12px "Noto Sans TC"`, sample),
            document.fonts.load(`400 11px "Noto Sans TC"`, sample)
        ]);
    } catch (e) { /* 字型載入失敗時使用備用字型 */ }

    const [badgeImg, ...thumbImgs] = await Promise.all([
        loadImageWithFallback(cardSrc(info.img)),
        ...(info.ids.length > 1 ? info.ids.map(id => loadImageWithFallback(thumbSrc(getElement(id).img))) : [])
    ]);

    const canvas = document.createElement('canvas');
    canvas.width = CARD_W * CARD_SCALE;
    canvas.height = CARD_H * CARD_SCALE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.scale(CARD_SCALE, CARD_SCALE);
    ctx.textBaseline = 'middle';

    // 卡面底色與雙層邊框（依等級換色）
    drawRoundRect(ctx, 0.5, 0.5, CARD_W - 1, CARD_H - 1, 18);
    ctx.fillStyle = T.bg.length > 1 ? stopsGradient(ctx, 0, 0, CARD_W * 0.4, CARD_H, T.bg) : T.bg[0];
    ctx.fill();
    ctx.save();
    drawRoundRect(ctx, 0.5, 0.5, CARD_W - 1, CARD_H - 1, 18);
    ctx.clip();
    drawRoundRect(ctx, 2.5, 2.5, CARD_W - 5, CARD_H - 5, 16);
    ctx.lineWidth = 5;
    ctx.strokeStyle = T.inner;
    ctx.stroke();
    ctx.restore();
    const bw = T.borderW;
    drawRoundRect(ctx, bw / 2, bw / 2, CARD_W - bw, CARD_H - bw, 18 - bw / 2 + 0.5);
    ctx.lineWidth = bw;
    ctx.strokeStyle = T.border.length > 1 ? stopsGradient(ctx, 0, 0, CARD_W, CARD_H, T.border) : T.border[0];
    ctx.stroke();

    // 標頭：系列名稱、編號
    ctx.fillStyle = T.header;
    ctx.font = `400 11px ${FONT_STACK}`;
    drawSpaced(ctx, '台灣政治生態圖鑑', 18, 29, 1.5, 'left');
    drawSpaced(ctx, numText, 207, 29, 1.5, 'right');

    // 右上角稀有度標籤
    ctx.font = `700 9px ${FONT_STACK}`;
    const stampW = [...rarity.text].reduce((w, ch) => w + ctx.measureText(ch).width + 0.5, 0) + 16;
    const stampX = CARD_W - 16 - stampW, stampY = 17, stampH = 20;
    drawRoundRect(ctx, stampX, stampY, stampW, stampH, 10);
    ctx.fillStyle = T.stamp.bg;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = T.stamp.border;
    ctx.stroke();
    ctx.fillStyle = T.stamp.text;
    drawSpaced(ctx, rarity.text, stampX + stampW / 2, stampY + stampH / 2 + 0.5, 0.5, 'center');

    // 主角徽章（含陰影）
    const bx = CARD_W / 2, by = 135.5, br = 82.5;
    ctx.save();
    ctx.shadowColor = 'rgba(44,63,46,0.16)';
    ctx.shadowBlur = 9;
    ctx.shadowOffsetY = 7;
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
    drawCircleImage(ctx, badgeImg, bx, by, br);
    T.rings.forEach(([off, w, color]) => {
        ctx.beginPath();
        ctx.arc(bx, by, br + off, 0, Math.PI * 2);
        ctx.lineWidth = w;
        ctx.strokeStyle = color;
        ctx.stroke();
    });

    // 資訊區塊（在徽章與頁尾之間垂直置中）：標題 → 分隔 → 「歷史稱呼」→ 每個元素各一列（小圖＋稱呼）
    const multi = info.ids.length > 1;
    const titleH = 23.4, dividerH = 16, labelH = 15;
    const rowH = multi ? 24 : 18, thumbSize = 20, thumbGap = 7;
    ctx.font = `500 12px ${FONT_STACK}`;
    const maxTextW = CARD_W - 48 - (multi ? thumbSize + thumbGap : 0);
    const rows = info.ids.map(id => {
        let text = cleanLabel(getElement(id));
        if (ctx.measureText(text).width > maxTextW) {
            while (text && ctx.measureText(text + '…').width > maxTextW) text = text.slice(0, -1);
            text += '…';
        }
        return { text, w: ctx.measureText(text).width };
    });
    const blockH = titleH + 6 + dividerH + 6 + labelH + rows.length * rowH;
    let y = 230 + (171 - blockH) / 2;

    ctx.fillStyle = T.title;
    ctx.font = `700 18px ${FONT_STACK}`;
    drawSpaced(ctx, info.title, CARD_W / 2, y + titleH / 2, 1.1, 'center');
    y += titleH + 6;

    // 菱形分隔符號
    const dcx = CARD_W / 2, dcy = y + dividerH / 2;
    ctx.beginPath();
    ctx.moveTo(dcx, dcy - 4.5);
    ctx.lineTo(dcx + 4.5, dcy);
    ctx.lineTo(dcx, dcy + 4.5);
    ctx.lineTo(dcx - 4.5, dcy);
    ctx.closePath();
    ctx.fillStyle = T.divider;
    ctx.fill();
    y += dividerH + 6;

    // 「歷史稱呼」小標籤
    ctx.fillStyle = T.label;
    ctx.font = `400 9px ${FONT_STACK}`;
    drawSpaced(ctx, '歷史稱呼', CARD_W / 2, y + labelH / 2, 1.8, 'center');
    y += labelH;

    // 每個元素一列：小圖在左、稱呼在右；整塊在卡面上置中，小圖左對齊
    ctx.font = `500 12px ${FONT_STACK}`;
    const blockW = Math.max(...rows.map(r => r.w)) + (multi ? thumbSize + thumbGap : 0);
    const startX = CARD_W / 2 - blockW / 2;
    rows.forEach((row, i) => {
        const rowY = y + i * rowH;
        ctx.fillStyle = T.meta;
        if (multi) {
            const tcx = startX + thumbSize / 2, tcy = rowY + rowH / 2;
            drawCircleImage(ctx, thumbImgs[i], tcx, tcy, thumbSize / 2);
            ctx.beginPath();
            ctx.arc(tcx, tcy, thumbSize / 2 - 0.5, 0, Math.PI * 2);
            ctx.lineWidth = 1;
            ctx.strokeStyle = T.thumb;
            ctx.stroke();
            drawSpaced(ctx, row.text, startX + thumbSize + thumbGap, rowY + rowH / 2, 0.3, 'left');
        } else {
            drawSpaced(ctx, row.text, CARD_W / 2, rowY + rowH / 2, 0.3, 'center');
        }
    });

    // 頁尾
    ctx.fillStyle = T.footer;
    ctx.font = `400 9px ${FONT_STACK}`;
    drawSpaced(ctx, 'ECO ARCHIVE · TAIWAN', CARD_W / 2, 407, 1.8, 'center');

    // 若圖片不同源（例如直接用 file:// 開啟），toBlob 會丟出 SecurityError
    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png');
        } catch (err) {
            reject(err);
        }
    });
}

// ── 隱藏配方卡牌（三種等級）──
//   hidden：深綠底＋金色邊框（H01–H04）
//   grand ：午夜靛藍底＋白金邊框＋放射光芒＋全息光澤（H05–H06 集大成）
//   final ：再加上七彩稜鏡邊框與更多星芒（H07 終極圖鑑）
const SPARKLES_BASE = [[45, 62, 4.5, 0.85], [255, 66, 3.5, 0.7], [36, 128, 3, 0.6], [264, 122, 4, 0.8], [50, 178, 3, 0.6], [252, 176, 4.5, 0.85]];
const SPARKLES_GRAND = [[24, 96, 3, 0.7], [276, 92, 3.5, 0.8], [22, 150, 4, 0.8], [278, 152, 3, 0.6]];
const SPARKLES_FINAL = [[70, 205, 3, 0.7], [232, 208, 3.5, 0.8], [30, 300, 3, 0.6], [266, 296, 3.5, 0.7]];

const CARD_THEMES = {
    hidden: {
        bg: ['#1a3324', '#0f2018', '#1d3126'], glow: 'rgba(255,230,150,0.30)',
        border: ['#f6e3a1', '#d9b45a', '#a77f2b', '#f0d98a'], borderW: 3,
        frame: 'rgba(240,217,138,0.55)', frame2: 0,
        header: '#d9c47e', stamp: ['#f6e3a1', '#d9b45a'], stampText: '#3d2f08',
        title: ['#f6e3a1', '#e8c96a', '#f6e3a1'], titleGlow: null,
        accent: '#e8c96a', meta: '#eadfb2', label: '#a99a62', footer: '#a99a62',
        ring: ['#f6e3a1', '#d9b45a', '#a77f2b', '#f0d98a'], ring3: false, thumb: '#c9a24b',
        badgeGlow: 'rgba(246,220,130,0.6)', rays: 0, rayColor: '', sparkleColor: '#f6e3a1',
        sparkles: SPARKLES_BASE, corner: 3.2, shine: 'rgba(255,244,200,0.10)'
    },
    grand: {
        bg: ['#10173f', '#0a0f2c', '#1b1347'], glow: 'rgba(255,236,170,0.38)',
        border: ['#fff3c4', '#f2c75c', '#b8892b', '#fff0b5'], borderW: 4,
        frame: 'rgba(255,236,170,0.7)', frame2: 0.35,
        header: '#e9dfb8', stamp: ['#fffbe6', '#f6d878', '#e5b84a'], stampText: '#2a1f05',
        title: ['#fffaf0', '#f6dc92', '#fffaf0'], titleGlow: 'rgba(255,226,140,0.55)',
        accent: '#f6dc92', meta: '#f3ecd0', label: '#b9b3dc', footer: '#b9b3dc',
        ring: ['#fff3c4', '#f2c75c', '#b8892b', '#fff0b5'], ring3: true, thumb: '#f2c75c',
        badgeGlow: 'rgba(255,230,150,0.75)', rays: 24, rayColor: 'rgba(255,226,140,0.20)', sparkleColor: '#fff3c4',
        sparkles: SPARKLES_BASE.concat(SPARKLES_GRAND), corner: 4, shine: 'rgba(255,240,230,0.14)'
    },
    final: {
        bg: ['#1a0f3d', '#0a0f2c', '#0f2a4a'], glow: 'rgba(255,236,190,0.42)',
        border: ['#fff3c4', '#ffb3d1', '#9ad7ff', '#b6f0c5', '#fff3c4', '#f6c76a'], borderW: 4,
        frame: 'rgba(255,240,200,0.75)', frame2: 0.4,
        header: '#f0e6c4', stamp: ['#ffd1e4', '#fff3c4', '#bfe6ff', '#c9f5d3'], stampText: '#26204a',
        title: ['#ffffff', '#ffe9a8', '#ffffff'], titleGlow: 'rgba(200,230,255,0.6)',
        accent: '#ffe9a8', meta: '#f6f0dc', label: '#b9c4ee', footer: '#b9c4ee',
        ring: ['#fff3c4', '#ffb3d1', '#9ad7ff', '#b6f0c5', '#fff3c4'], ring3: true, thumb: '#f6dc92',
        badgeGlow: 'rgba(200,230,255,0.8)', rays: 24, rayColor: 'rgba(255,230,160,0.26)', sparkleColor: '#ffffff',
        sparkles: SPARKLES_BASE.concat(SPARKLES_GRAND, SPARKLES_FINAL), corner: 4.5, shine: 'rgba(255,230,245,0.18)'
    }
};

// 依序平均分佈的多色漸層
function stopsGradient(ctx, x0, y0, x1, y1, stops) {
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    stops.forEach((c, i) => g.addColorStop(stops.length === 1 ? 0 : i / (stops.length - 1), c));
    return g;
}

function drawSparkle(ctx, cx, cy, r, alpha, color) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.quadraticCurveTo(cx, cy, cx + r, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + r);
    ctx.quadraticCurveTo(cx, cy, cx - r, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - r);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

async function renderHiddenCardBlob(info) {
    const r = info.hidden;
    const tierKey = r.tier || 'hidden';
    const T = CARD_THEMES[tierKey];
    const TI = TIER_INFO[tierKey];
    const showThumbs = info.ids.length >= 2 && info.ids.length <= 5;

    try {
        const sample = `${info.title}${info.meta}台灣政治生態圖鑑隱藏配方集大成終極圖鑑主題與年代篇章HIDDEN GRAND ARCHIVE THE FINALE TAIWAN NO.H0123456789`;
        await Promise.all([
            document.fonts.load(`700 18px "Noto Sans TC"`, sample),
            document.fonts.load(`500 12px "Noto Sans TC"`, sample),
            document.fonts.load(`400 11px "Noto Sans TC"`, sample)
        ]);
    } catch (e) { /* 字型載入失敗時使用備用字型 */ }

    const [badgeImg, ...thumbImgs] = await Promise.all([
        loadImageWithFallback(cardSrc(info.img)),
        ...(showThumbs ? info.ids.map(id => loadImageWithFallback(thumbSrc(getElement(id).img))) : [])
    ]);

    const canvas = document.createElement('canvas');
    canvas.width = CARD_W * CARD_SCALE;
    canvas.height = CARD_H * CARD_SCALE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.scale(CARD_SCALE, CARD_SCALE);
    ctx.textBaseline = 'middle';

    // 底色
    drawRoundRect(ctx, 0.5, 0.5, CARD_W - 1, CARD_H - 1, 18);
    const bg = ctx.createLinearGradient(0, 0, CARD_W * 0.4, CARD_H);
    bg.addColorStop(0, T.bg[0]);
    bg.addColorStop(0.55, T.bg[1]);
    bg.addColorStop(1, T.bg[2]);
    ctx.fillStyle = bg;
    ctx.fill();

    ctx.save();
    drawRoundRect(ctx, 0.5, 0.5, CARD_W - 1, CARD_H - 1, 18);
    ctx.clip();

    // 徽章後方的光暈
    const glow = ctx.createRadialGradient(150, 135, 10, 150, 135, 150);
    glow.addColorStop(0, T.glow);
    glow.addColorStop(1, 'rgba(255,230,150,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // 放射光芒（集大成）
    if (T.rays) {
        const cx = 150, cy = 135, R = 235;
        const rg = ctx.createRadialGradient(cx, cy, 70, cx, cy, R);
        rg.addColorStop(0, T.rayColor);
        rg.addColorStop(1, 'rgba(255,226,140,0)');
        ctx.fillStyle = rg;
        const step = (Math.PI * 2) / T.rays;
        for (let i = 0; i < T.rays; i++) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, R, i * step, i * step + step / 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // 斜向光澤帶
    const shine = ctx.createLinearGradient(0, 0, CARD_W, CARD_H);
    shine.addColorStop(0.36, 'rgba(255,244,200,0)');
    shine.addColorStop(0.5, T.shine);
    shine.addColorStop(0.64, 'rgba(255,244,200,0)');
    ctx.fillStyle = shine;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // 星芒
    T.sparkles.forEach(([x, y, rr, a]) => drawSparkle(ctx, x, y, rr, a, T.sparkleColor));
    ctx.restore();

    // 邊框、內側細框、四角菱形
    const bw = T.borderW;
    drawRoundRect(ctx, bw / 2, bw / 2, CARD_W - bw, CARD_H - bw, 18 - bw / 2);
    ctx.lineWidth = bw;
    ctx.strokeStyle = stopsGradient(ctx, 0, 0, CARD_W, CARD_H, T.border);
    ctx.stroke();

    const fi = bw + 5;
    drawRoundRect(ctx, fi, fi, CARD_W - fi * 2, CARD_H - fi * 2, 12);
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = T.frame;
    ctx.stroke();
    if (T.frame2) {
        const f2 = fi + 4;
        drawRoundRect(ctx, f2, f2, CARD_W - f2 * 2, CARD_H - f2 * 2, 9);
        ctx.lineWidth = 0.6;
        ctx.globalAlpha = T.frame2;
        ctx.strokeStyle = T.frame;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    const cs = T.corner, co = fi + 3.5;
    [[co, co], [CARD_W - co, co], [co, CARD_H - co], [CARD_W - co, CARD_H - co]].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x, y - cs); ctx.lineTo(x + cs, y); ctx.lineTo(x, y + cs); ctx.lineTo(x - cs, y);
        ctx.closePath();
        ctx.fillStyle = T.accent;
        ctx.fill();
    });

    // 標頭
    ctx.fillStyle = T.header;
    ctx.font = `400 11px ${FONT_STACK}`;
    drawSpaced(ctx, '台灣政治生態圖鑑', 18, 29, 1.5, 'left');
    drawSpaced(ctx, `NO. ${r.code}`, 200, 29, 1.5, 'right');

    // 右上角標籤
    ctx.font = `700 9px ${FONT_STACK}`;
    const stampW = [...TI.stamp].reduce((w, ch) => w + ctx.measureText(ch).width + 0.5, 0) + 16;
    const stampX = CARD_W - 16 - stampW, stampY = 17, stampH = 20;
    drawRoundRect(ctx, stampX, stampY, stampW, stampH, 10);
    ctx.fillStyle = stopsGradient(ctx, stampX, stampY, stampX + stampW, stampY + stampH, T.stamp);
    ctx.fill();
    ctx.fillStyle = T.stampText;
    drawSpaced(ctx, TI.stamp, stampX + stampW / 2, stampY + stampH / 2 + 0.5, 0.5, 'center');

    // 主角徽章：光暈與金環
    const bx = CARD_W / 2, by = 135.5, br = 82.5;
    ctx.save();
    ctx.shadowColor = T.badgeGlow;
    ctx.shadowBlur = T.ring3 ? 30 : 22;
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
    drawCircleImage(ctx, badgeImg, bx, by, br);
    ctx.beginPath();
    ctx.arc(bx, by, br + 1.5, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = stopsGradient(ctx, bx - br, by - br, bx + br, by + br, T.ring);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bx, by, br + 5, 0, Math.PI * 2);
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = T.frame;
    ctx.stroke();
    if (T.ring3) {
        ctx.beginPath();
        ctx.arc(bx, by, br + 9, 0, Math.PI * 2);
        ctx.lineWidth = 0.6;
        ctx.globalAlpha = 0.5;
        ctx.strokeStyle = stopsGradient(ctx, bx - br, by - br, bx + br, by + br, T.ring);
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    // 資訊區塊（在徽章與頁尾之間垂直置中）
    ctx.font = `500 12px ${FONT_STACK}`;
    const metaLines = wrapLines(ctx, info.meta, CARD_W - 48, 2);
    const titleH = 23.4, dividerH = 16, comboH = showThumbs ? 36 : 0, lineH = 18, labelH = 15;
    const blockH = titleH + 6 + dividerH + 6 + comboH + labelH + metaLines.length * lineH;
    let y = 230 + (171 - blockH) / 2;

    // 標題：漸層（集大成再加上微光）
    ctx.font = `700 18px ${FONT_STACK}`;
    const spacing = 1.1;
    const titleW = [...info.title].reduce((w, ch) => w + ctx.measureText(ch).width + spacing, -spacing);
    ctx.fillStyle = stopsGradient(ctx, CARD_W / 2 - titleW / 2, 0, CARD_W / 2 + titleW / 2, 0, T.title);
    if (T.titleGlow) {
        ctx.save();
        ctx.shadowColor = T.titleGlow;
        ctx.shadowBlur = 8;
        drawSpaced(ctx, info.title, CARD_W / 2, y + titleH / 2, spacing, 'center');
        ctx.restore();
    } else {
        drawSpaced(ctx, info.title, CARD_W / 2, y + titleH / 2, spacing, 'center');
    }
    y += titleH + 6;

    // 分隔線與菱形
    const dcx = CARD_W / 2, dcy = y + dividerH / 2;
    const lineGrad = (x0, x1) => {
        const g = ctx.createLinearGradient(x0, 0, x1, 0);
        g.addColorStop(0, 'rgba(255,230,150,0)');
        g.addColorStop(1, T.accent);
        return g;
    };
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = lineGrad(dcx - 60, dcx - 9);
    ctx.beginPath(); ctx.moveTo(dcx - 60, dcy); ctx.lineTo(dcx - 9, dcy); ctx.stroke();
    ctx.strokeStyle = lineGrad(dcx + 60, dcx + 9);
    ctx.beginPath(); ctx.moveTo(dcx + 60, dcy); ctx.lineTo(dcx + 9, dcy); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(dcx, dcy - 4.5); ctx.lineTo(dcx + 4.5, dcy); ctx.lineTo(dcx, dcy + 4.5); ctx.lineTo(dcx - 4.5, dcy);
    ctx.closePath();
    ctx.fillStyle = T.accent;
    ctx.fill();
    y += dividerH + 6;

    // 組成元素小圖（拼合型）
    if (showThumbs) {
        const n = info.ids.length, size = 28, gap = 14;
        const total = n * size + (n - 1) * gap;
        let tx = CARD_W / 2 - total / 2;
        const tcy = y + size / 2;
        thumbImgs.forEach((img, i) => {
            drawCircleImage(ctx, img, tx + size / 2, tcy, size / 2);
            ctx.beginPath();
            ctx.arc(tx + size / 2, tcy, size / 2 - 0.5, 0, Math.PI * 2);
            ctx.lineWidth = 1;
            ctx.strokeStyle = T.thumb;
            ctx.stroke();
            if (i < n - 1) {
                const px = tx + size + gap / 2;
                ctx.beginPath();
                ctx.moveTo(px - 2.5, tcy); ctx.lineTo(px + 2.5, tcy);
                ctx.moveTo(px, tcy - 2.5); ctx.lineTo(px, tcy + 2.5);
                ctx.lineWidth = 1;
                ctx.strokeStyle = T.thumb;
                ctx.stroke();
            }
            tx += size + gap;
        });
        y += comboH;
    }

    // 小標籤與主題／年代
    ctx.fillStyle = T.label;
    ctx.font = `400 9px ${FONT_STACK}`;
    drawSpaced(ctx, TI.label, CARD_W / 2, y + labelH / 2, 1.8, 'center');
    y += labelH;

    ctx.fillStyle = T.meta;
    ctx.font = `500 12px ${FONT_STACK}`;
    metaLines.forEach((line, i) => {
        drawSpaced(ctx, line, CARD_W / 2, y + i * lineH + lineH / 2, 0.5, 'center');
    });

    // 頁尾
    ctx.fillStyle = T.footer;
    ctx.font = `400 9px ${FONT_STACK}`;
    drawSpaced(ctx, TI.footer, CARD_W / 2, 407, 1.8, 'center');

    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png');
        } catch (err) {
            reject(err);
        }
    });
}

function isInAppBrowser() {
    const ua = navigator.userAgent;
    // Threads 的 UA 代號是 "Barcelona"，不含 "Threads"；Android WebView 帶有 "; wv)"
    if (/Line\/|FBAN|FBAV|FB_IAB|Instagram|Barcelona|Threads|MicroMessenger|Messenger|KAKAOTALK|Snapchat|TikTok|musical_ly|; wv\)/i.test(ua)) return true;
    // iOS 的 WebView（非 Safari/Chrome）UA 沒有 "Safari/"
    return /iPhone|iPad|iPod/i.test(ua) && !/Safari\//i.test(ua);
}
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (navigator.maxTouchPoints > 1 && /Mac/i.test(navigator.platform));
}

function cardFileName(info) {
    const safeTitle = info.title.replace(/[\\/:*?"<>|\s]/g, '');
    if (info.hidden) return `${info.hidden.code}_${safeTitle}.png`;
    return `NO${String(info.num).padStart(3, '0')}_${safeTitle}.png`;
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function openSaveModal(blob) {
    const img = document.getElementById('save-img');
    if (!img) return;
    const reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result; // 用 data URL，內建瀏覽器的長按儲存較穩定
        openModal('save-modal');
        showToast('長按圖片即可儲存到相簿', 3200);
    };
    reader.readAsDataURL(blob);
}

async function getCurrentCardBlob() {
    if (!currentCardInfo) throw new Error('no card');
    return getCardBlobPromise(currentCardInfo);
}

function notifyExportError(err) {
    console.warn('卡牌匯出失敗：', err);
    if (location.protocol === 'file:') {
        showToast('請透過網址開啟網頁（例如 GitHub Pages）才能下載卡牌');
    } else {
        showToast('下載失敗，請重新整理後再試一次');
    }
}

async function handleDownloadCard() {
    const btn = document.getElementById('modal-download-btn');
    if (!currentCardInfo || !btn) return;
    const info = currentCardInfo;
    btn.disabled = true;
    btn.textContent = '製作中…';
    try {
        const blob = await getCurrentCardBlob();
        const filename = cardFileName(info);
        const file = new File([blob], filename, { type: 'image/png' });

        if (isInAppBrowser()) {
            // LINE / Facebook / Instagram 內建瀏覽器多半不允許下載
            openSaveModal(blob);
        } else if (isMobileDevice() && navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({ files: [file], title: info.title });
            } catch (err) {
                if (err.name !== 'AbortError') openSaveModal(blob);
            }
        } else {
            triggerDownload(blob, filename);
            showToast('已下載卡牌圖片');
        }
    } catch (err) {
        notifyExportError(err);
    } finally {
        btn.disabled = false;
        btn.textContent = '⬇ 下載卡牌';
    }
}

async function handleSaveFallback() {
    try {
        openSaveModal(await getCurrentCardBlob());
    } catch (err) {
        notifyExportError(err);
    }
}

// 圖鑑顯示順序（編號不變；單元素只有 13 張，最容易先集滿，帶來階段性成就感）
const GROUPS = [
    { size: 1, title: '單元素' },
    { size: 2, title: '雙元素融合' },
    { size: 3, title: '三元素融合' }
];

function makeCodexCell(ids) {
    const key = ids.join('-');
    const data = unlockedRecipes.get(key);
    const num = comboNumber.get(key);
    const numStr = String(num).padStart(3, '0');
    const div = document.createElement('div');

    if (data) {
        div.className = 'codex-item unlocked';
        div.tabIndex = 0;
        div.setAttribute('role', 'button');
        div.innerHTML = `
            <img src="${thumbSrc(data.img)}" class="codex-thumb" loading="lazy" decoding="async" alt="${data.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">
            <span class="codex-name">${data.name}</span>
            <span class="codex-no">NO. ${numStr}</span>
        `;
        const open = () => showBadgeModal({ img: data.img, title: data.name, meta: data.meta, num, ids: data.ids });
        div.addEventListener('click', open);
        div.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
    } else {
        div.className = 'codex-item locked';
        div.setAttribute('aria-label', `尚未解鎖 NO. ${numStr}`);
        div.innerHTML = `
            <span class="codex-locked-mark">？</span>
            <span class="codex-no">NO. ${numStr}</span>
        `;
    }
    return div;
}

// 圖鑑最下方的「隱藏配方」：已解鎖的顯示卡片；未解鎖的只顯示題目與條件（名稱與答案保密）
function renderHiddenCodex(grid) {
    const got = unlockedHidden.size;
    const total = HIDDEN_RECIPES.length;
    const heading = document.createElement('div');
    heading.className = 'codex-group-title hidden-group' + (got === total ? ' done' : '');
    heading.innerHTML = `
        <div class="codex-group-row">
            <span>✦ 隱藏配方</span>
            <span class="codex-group-count">${got === total ? '✓ 全數發現 ' : ''}${got} / ${total}</span>
        </div>
        <div class="codex-group-bar"><i style="width:${(got / total) * 100}%"></i></div>
    `;
    grid.appendChild(heading);

    HIDDEN_RECIPES.filter(r => unlockedHidden.has(r.id)).forEach(r => {
        const div = document.createElement('div');
        div.className = `codex-item unlocked hidden-tile tier-${r.tier}`;
        div.tabIndex = 0;
        div.setAttribute('role', 'button');
        div.innerHTML = `
            <img src="${thumbSrc(r.img)}" class="codex-thumb" loading="lazy" decoding="async" alt="${r.name}" onerror="this.onerror=null;this.src='img/thumb/bamboo.webp';">
            <span class="codex-name">${r.name}</span>
            <span class="codex-no">${r.code}</span>
        `;
        const open = () => showBadgeModal(hiddenCardInfo(r));
        div.addEventListener('click', open);
        div.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
        grid.appendChild(div);
    });

    HIDDEN_RECIPES.filter(r => !unlockedHidden.has(r.id)).forEach(r => {
        const isCollect = r.type === 'collect';
        const tag = isCollect ? '集大成・收集型' : `拼合型・${r.ids.length} 個元素`;

        const row = document.createElement('div');
        row.className = `codex-hidden-locked tier-${r.tier}`;
        row.innerHTML = `
            <span class="hl-mark">🔒</span>
            <div class="hl-body">
                <div class="hl-code">${r.code} ・ ？？？ <span class="hl-tag">${tag}</span></div>
                <div class="hl-task">${r.task}</div>
                <div class="hl-req">${hiddenRequirement(r)}</div>
            </div>
        `;
        grid.appendChild(row);
    });
}

function initCodex() {
    const codexGrid = document.getElementById('codex-grid');
    if (!codexGrid) return;

    const unlockedSize = unlockedRecipes.size;
    const currentNumStr = unlockedSize < 10 ? `0${unlockedSize}` : `${unlockedSize}`;
    const currentNumEl = document.getElementById('unlocked-current-num');
    if (currentNumEl) currentNumEl.textContent = currentNumStr;

    const totalEl = document.getElementById('codex-total-num');
    if (totalEl) totalEl.textContent = `/ ${TOTAL_COMBOS}`;

    const statusTextEl = document.getElementById('codex-status-text');
    if (statusTextEl) statusTextEl.textContent = `已解鎖 ${unlockedSize} 種台灣生物組合・隱藏配方 ${unlockedHidden.size} / ${HIDDEN_RECIPES.length}`;

    const percentage = ((unlockedSize / TOTAL_COMBOS) * 100).toFixed(1);
    const progressFillEl = document.getElementById('codex-progress-fill');
    if (progressFillEl) progressFillEl.style.width = `${Math.max(percentage, unlockedSize > 0 ? 1 : 0)}%`;

    const percentageTextEl = document.getElementById('codex-percentage-text');
    if (percentageTextEl) percentageTextEl.textContent = `${percentage}%`;

    document.querySelectorAll('.codex-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === codexFilter);
    });
    const resetBtn = document.getElementById('codex-reset-btn');
    if (resetBtn) resetBtn.hidden = (unlockedSize === 0);

    codexGrid.innerHTML = '';

    if (unlockedSize === 0 && codexFilter === 'unlocked') {
        const hint = document.createElement('div');
        hint.className = 'codex-empty';
        hint.textContent = '還沒有收藏。從單一元素開始，先集滿 13 張基礎卡牌吧！';
        codexGrid.appendChild(hint);
    }

    GROUPS.forEach(g => {
        const combos = allCombos.filter(ids => ids.length === g.size);
        const got = combos.filter(ids => unlockedRecipes.has(ids.join('-'))).length;
        const done = got === combos.length;

        const heading = document.createElement('div');
        heading.className = 'codex-group-title' + (done ? ' done' : '');
        heading.innerHTML = `
            <div class="codex-group-row">
                <span>${g.title}</span>
                <span class="codex-group-count">${done ? '✓ 全數收集 ' : ''}${got} / ${combos.length}</span>
            </div>
            <div class="codex-group-bar"><i style="width:${(got / combos.length) * 100}%"></i></div>
        `;
        codexGrid.appendChild(heading);

        combos.forEach(ids => {
            const unlocked = unlockedRecipes.has(ids.join('-'));
            if (unlocked || codexFilter === 'all') codexGrid.appendChild(makeCodexCell(ids));
        });

        // 「已收集」檢視：尚未發現的合併成一格，避免滿版空格
        if (codexFilter === 'unlocked' && !done) {
            const more = document.createElement('div');
            more.className = 'codex-item locked codex-more';
            more.innerHTML = `<span class="codex-locked-mark">？</span><span class="codex-no">還有 ${combos.length - got} 個<br>待發現</span>`;
            codexGrid.appendChild(more);
        }
    });

    renderHiddenCodex(codexGrid);
}

// ── 收藏進度存在這台裝置的瀏覽器（localStorage），重新整理後不會消失 ──
const STORAGE_KEY = 'taiwan-eco-codex-v1';
const HIDDEN_STORAGE_KEY = 'taiwan-eco-hidden-v1';
let storageWarned = false;

function saveProgress() {
    try {
        const obj = {};
        unlockedRecipes.forEach((v, k) => { obj[k] = { name: v.name, img: v.img }; });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        localStorage.setItem(HIDDEN_STORAGE_KEY, JSON.stringify([...unlockedHidden]));
    } catch (e) {
        if (!storageWarned) {
            storageWarned = true;
            showToast('此瀏覽器無法儲存收藏進度，重新整理後會清空');
        }
    }
}

function loadProgress() {
    try {
        const hiddenRaw = localStorage.getItem(HIDDEN_STORAGE_KEY);
        if (hiddenRaw) {
            JSON.parse(hiddenRaw).forEach(id => {
                if (HIDDEN_RECIPES.some(r => r.id === id)) unlockedHidden.add(id);
            });
        }
    } catch (e) { /* 忽略 */ }
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const obj = JSON.parse(raw);
        Object.entries(obj).forEach(([key, v]) => {
            if (!comboNumber.has(key) || !v || !v.name) return;
            const ids = key.split('-');
            const els = ids.map(getElement);
            if (els.some(e => !e)) return;
            unlockedRecipes.set(key, {
                name: v.name,
                img: v.img || els[els.length - 1].img,
                meta: els.map(cleanLabel).join(' + '),
                ids
            });
        });
    } catch (e) { /* 無法讀取時從空白開始 */ }
}

function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(HIDDEN_STORAGE_KEY);
    } catch (e) { /* 忽略 */ }
    unlockedRecipes.clear();
    unlockedHidden.clear();
    revealQueue = [];
    selectedSlots = new Array(MAX_SLOTS).fill(null);
    lastSlotCount = 3;
    updateSlotsUI();
    initCodex();
}

function unlockRecipe(key, data) {
    if (!unlockedRecipes.has(key)) {
        unlockedRecipes.set(key, data);
        saveProgress();
        initCodex();

        // 某一類全數集滿時給予提示
        const size = key.split('-').length;
        const group = GROUPS.find(g => g.size === size);
        const combos = allCombos.filter(ids => ids.length === size);
        if (combos.every(ids => unlockedRecipes.has(ids.join('-')))) {
            showToast(`🎉 「${group.title}」圖鑑全數收集完成！`);
        }
    }
}

function hideResult() {
    const resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.classList.add('hidden');
    const oldMedia = document.getElementById('result-media');
    if (oldMedia) oldMedia.remove();
    const oldDownloadBtn = document.getElementById('download-badge-btn');
    if (oldDownloadBtn) oldDownloadBtn.remove();
    const rc = document.querySelector('.result-card');
    if (rc) rc.classList.remove('hidden-recipe');
}

document.addEventListener('DOMContentLoaded', () => {
    initGame();

    const mixBtn = document.getElementById('mix-btn');
    if (mixBtn) mixBtn.addEventListener('click', handleMixAction);

    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            selectedSlots = new Array(MAX_SLOTS).fill(null);
            updateSlotsUI();
            hideResult();
        });
    }

    const badgeModal = document.getElementById('badge-modal');
    const closeBadge = () => closeBadgeModal();
    const closeBadgeBtn = document.getElementById('close-badge-modal');
    const okBadgeBtn = document.getElementById('modal-ok-btn');
    const downloadBtn = document.getElementById('modal-download-btn');
    if (downloadBtn) downloadBtn.addEventListener('click', handleDownloadCard);
    const fallbackBtn = document.getElementById('modal-save-fallback');
    if (fallbackBtn) fallbackBtn.addEventListener('click', handleSaveFallback);

    const saveModal = document.getElementById('save-modal');
    const closeSave = () => closeModal('save-modal');
    const closeSaveBtn = document.getElementById('close-save-modal');
    if (closeSaveBtn) closeSaveBtn.onclick = closeSave;
    if (saveModal) saveModal.onclick = (e) => { if (e.target === saveModal) closeSave(); };

    if (closeBadgeBtn) closeBadgeBtn.onclick = closeBadge;
    if (okBadgeBtn) okBadgeBtn.onclick = closeBadge;
    if (badgeModal) {
        badgeModal.onclick = (e) => { if (e.target === badgeModal) closeBadge(); };
    }

    const codexResetBtn = document.getElementById('codex-reset-btn');
    if (codexResetBtn) {
        codexResetBtn.addEventListener('click', () => {
            if (confirm('確定要清除所有已收集的卡牌嗎？此動作無法復原。')) {
                clearProgress();
                hideResult();
            }
        });
    }

    document.querySelectorAll('.codex-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            codexFilter = btn.dataset.filter;
            initCodex();
        });
    });

    // Esc 關閉目前開啟的彈窗
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        // 一次只關閉最上層的彈窗
        const top = ['save-modal', 'badge-modal', 'species-modal']
            .find(id => document.getElementById(id)?.style.display === 'flex');
        if (top === 'badge-modal') closeBadgeModal();
        else if (top) closeModal(top);
    });
});
