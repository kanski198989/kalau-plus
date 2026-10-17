/* Тексты сайта на трёх языках и списки (направления, объекты, фото, награды).
   Чтобы что-то поправить — меняйте текст в кавычках. */

const T={
ru:{_title:'Kalau Plus — строительно-дорожная компания, Актобе',tag:'Строительно-дорожная компания',nav_about:'О компании',nav_dirs:'Направления',nav_projects:'Объекты',nav_gallery:'Фото',nav_contacts:'Контакты',
 hero_eyebrow:'ТОО «Kalau Plus» · с 2017 года',hero_title:'Строительно-дорожная компания',hero_lead:'Содержание и ремонт дорог, благоустройство, уличное освещение, электросети и ЛЭП, водоснабжение. Актюбинская область и другие регионы Казахстана.',hero_alt:'Отремонтированная дорога с разметкой',
 cta_call:'Позвонить',cta_wa:'WhatsApp',cta_wa2:'Написать в WhatsApp',
 k2:'исполненных государственных и коммерческих договоров',k3:'направлений деятельности',k4:'областей Казахстана',
 about_eyebrow:'О компании',about_title:'Дороги, благоустройство и инженерные сети под ключ',
 about_p1:'ТОО «Kalau Plus» работает с 2017 года. У нас собственная дорожно-строительная техника, грузовой транспорт, оборудование для летнего и зимнего содержания дорог и квалифицированный персонал.',
 about_p2:'Мы исполнили более 60 государственных и коммерческих договоров: от ямочного ремонта и уборки снега до реконструкции дорог, строительства уличного освещения и установки модулей очистки питьевой воды.',
 geo1:'Актюбинская область',geo2:'Костанайская область',geo3:'Кызылординская область',geo4:'и другие регионы РК',
 lic_title:'Государственная лицензия',lic_no:'Номер',lic_date:'Дата выдачи',lic_kind:'Вид деятельности',lic_kind_v:'Строительно-монтажные работы',lic_cat:'Категория',lic_cat_v:'II категория',lic_by:'Лицензиар',lic_by_v:'Управление государственного архитектурно-строительного контроля г. Астаны',
 lic_note:'Лицензия подтверждает право на строительно-монтажные работы, включая строительство и капитальный ремонт автомобильных дорог, инженерных сетей и объектов гражданского строительства.',
 dirs_eyebrow:'Направления',dirs_title:'Что мы делаем',adv_eyebrow:'Почему мы',adv_title:'Преимущества работы с компанией',
 pr_eyebrow:'Объекты',pr_title:'Выполненные проекты',pr_sub:'Часть договоров за 2020–2026 годы. Полный список предоставим по запросу.',grp_road:'Дорожное строительство и содержание',grp_eng:'Благоустройство и инженерные сети',
 g_eyebrow:'Фото',g_title:'Наши работы на объектах',all:'Все',c_road:'Дороги',c_blag:'Благоустройство',c_net:'Инженерные сети и свет',c_win:'Зимнее содержание',
 aw_eyebrow:'Признание',aw_title:'Благодарственные письма и сертификаты',
 proc_eyebrow:'Как работаем',proc_title:'От заявки до сдачи объекта',p1_t:'Заявка',p1_d:'Позвоните или напишите в WhatsApp и расскажите об объекте.',p2_t:'Выезд и смета',p2_d:'Осматриваем объект, считаем объёмы и готовим смету.',p3_t:'Договор',p3_d:'Фиксируем сроки, объём работ и стоимость.',p4_t:'Работы и сдача',p4_d:'Выполняем работы и сдаём объект с исполнительной документацией.',
 ct_eyebrow:'Контакты',ct_title:'Обсудим ваш объект',ct_phone:'Телефон',ct_email:'Электронная почта',ct_addr:'Адрес',addr:'030700, г. Актобе, ул. Маресьева, 105, офис 301',map_2gis:'Открыть в 2ГИС',map_google:'Google Карты',
 req_title:'Реквизиты',req_name:'Наименование',req_name_v:'ТОО «Kalau Plus»',req_bin:'БИН',req_dir:'Директор',req_dir_v:'Айбосынов Канат Болатбекович',req_lic:'Лицензия',req_lic_v:'ГСЛ №03831 от 16.10.2017, II категория',
 foot:'© ТОО «Kalau Plus». Актобе, Казахстан',subc:'субподряд',km:'км',upto:'до ',uptoAfter:'',close:'Закрыть',prev:'Назад',next:'Вперёд'},
kk:{_title:'Kalau Plus — құрылыс-жол компаниясы, Ақтөбе',tag:'Құрылыс-жол компаниясы',nav_about:'Компания туралы',nav_dirs:'Бағыттар',nav_projects:'Нысандар',nav_gallery:'Фото',nav_contacts:'Байланыс',
 hero_eyebrow:'«Kalau Plus» ЖШС · 2017 жылдан бері',hero_title:'Құрылыс-жол компаниясы',hero_lead:'Жолдарды күтіп ұстау және жөндеу, абаттандыру, көше жарығы, электр желілері мен ЭБЖ, сумен жабдықтау. Ақтөбе облысы және Қазақстанның басқа өңірлері.',hero_alt:'Таңбасы салынған жөнделген жол',
 cta_call:'Қоңырау шалу',cta_wa:'WhatsApp',cta_wa2:'WhatsApp-қа жазу',
 k2:'орындалған мемлекеттік және коммерциялық шарт',k3:'қызмет бағыты',k4:'Қазақстан облысы',
 about_eyebrow:'Компания туралы',about_title:'Жолдар, абаттандыру және инженерлік желілер толық циклмен',
 about_p1:'«Kalau Plus» ЖШС 2017 жылдан бері жұмыс істейді. Бізде жеке жол-құрылыс техникасы, жүк көлігі, жолдарды жазда және қыста күтіп ұстауға арналған жабдық және білікті мамандар бар.',
 about_p2:'Біз 60-тан астам мемлекеттік және коммерциялық шартты орындадық: шұңқырларды жөндеу мен қар тазалаудан бастап жолдарды реконструкциялауға, көше жарығын салуға және ауыз суды тазарту модульдерін орнатуға дейін.',
 geo1:'Ақтөбе облысы',geo2:'Қостанай облысы',geo3:'Қызылорда облысы',geo4:'және ҚР басқа өңірлері',
 lic_title:'Мемлекеттік лицензия',lic_no:'Нөмірі',lic_date:'Берілген күні',lic_kind:'Қызмет түрі',lic_kind_v:'Құрылыс-монтаж жұмыстары',lic_cat:'Санаты',lic_cat_v:'II санат',lic_by:'Лицензиар',lic_by_v:'Астана қаласының Мемлекеттік сәулет-құрылыс бақылауы басқармасы',
 lic_note:'Лицензия құрылыс-монтаж жұмыстарына, соның ішінде автомобиль жолдарын, инженерлік желілерді және азаматтық құрылыс нысандарын салу мен күрделі жөндеуге құқық береді.',
 dirs_eyebrow:'Бағыттар',dirs_title:'Біз не істейміз',adv_eyebrow:'Неге біз',adv_title:'Бізбен жұмыс істеудің артықшылықтары',
 pr_eyebrow:'Нысандар',pr_title:'Орындалған жобалар',pr_sub:'2020–2026 жылдардағы шарттардың бір бөлігі. Толық тізімді сұрау бойынша ұсынамыз.',grp_road:'Жол құрылысы және күтіп ұстау',grp_eng:'Абаттандыру және инженерлік желілер',
 g_eyebrow:'Фото',g_title:'Нысандардағы жұмыстарымыз',all:'Барлығы',c_road:'Жолдар',c_blag:'Абаттандыру',c_net:'Инженерлік желілер және жарық',c_win:'Қысқы күтіп ұстау',
 aw_eyebrow:'Мойындау',aw_title:'Алғыс хаттар мен сертификаттар',
 proc_eyebrow:'Жұмыс тәртібі',proc_title:'Өтінімнен нысанды тапсыруға дейін',p1_t:'Өтінім',p1_d:'Қоңырау шалыңыз немесе WhatsApp-қа жазып, нысан туралы айтыңыз.',p2_t:'Нысанды қарау және смета',p2_d:'Нысанды қарап, көлемін есептеп, смета дайындаймыз.',p3_t:'Шарт',p3_d:'Мерзімді, жұмыс көлемін және құнын бекітеміз.',p4_t:'Жұмыс және тапсыру',p4_d:'Жұмысты орындап, нысанды атқарушы құжаттамасымен тапсырамыз.',
 ct_eyebrow:'Байланыс',ct_title:'Нысаныңызды талқылайық',ct_phone:'Телефон',ct_email:'Электрондық пошта',ct_addr:'Мекенжай',addr:'030700, Ақтөбе қ., Маресьев к-сі, 105, 301-кеңсе',map_2gis:'2ГИС-те ашу',map_google:'Google Maps',
 req_title:'Деректемелер',req_name:'Атауы',req_name_v:'«Kalau Plus» ЖШС',req_bin:'БСН',req_dir:'Директор',req_dir_v:'Айбосынов Қанат Болатбекұлы',req_lic:'Лицензия',req_lic_v:'ГСЛ №03831, 16.10.2017 ж., II санат',
 foot:'© «Kalau Plus» ЖШС. Ақтөбе, Қазақстан',subc:'қосалқы мердігерлік',km:'км',upto:'',uptoAfter:' дейін',close:'Жабу',prev:'Артқа',next:'Алға'},
en:{_title:'Kalau Plus — road construction company, Aktobe',tag:'Road construction company',nav_about:'About',nav_dirs:'Services',nav_projects:'Projects',nav_gallery:'Photos',nav_contacts:'Contacts',
 hero_eyebrow:'Kalau Plus LLP · since 2017',hero_title:'Road construction company',hero_lead:'Road maintenance and repair, landscaping, street lighting, power grids and power lines, water supply. Aktobe region and other regions of Kazakhstan.',hero_alt:'Repaired road with fresh markings',
 cta_call:'Call us',cta_wa:'WhatsApp',cta_wa2:'Message on WhatsApp',
 k2:'government and commercial contracts completed',k3:'lines of business',k4:'regions of Kazakhstan',
 about_eyebrow:'About',about_title:'Roads, landscaping and utility networks, turnkey',
 about_p1:'Kalau Plus LLP has been operating since 2017. We have our own road construction machinery, trucks, equipment for summer and winter road maintenance, and qualified staff.',
 about_p2:'We have completed more than 60 government and commercial contracts, from pothole repair and snow clearing to road reconstruction, street lighting and drinking water treatment units.',
 geo1:'Aktobe region',geo2:'Kostanay region',geo3:'Kyzylorda region',geo4:'and other regions',
 lic_title:'State licence',lic_no:'Number',lic_date:'Issued',lic_kind:'Activity',lic_kind_v:'Construction and installation works',lic_cat:'Category',lic_cat_v:'Category II',lic_by:'Issued by',lic_by_v:'State Architectural and Construction Control Department of Astana',
 lic_note:'The licence covers construction and installation works, including construction and major repair of roads, utility networks and civil buildings.',
 dirs_eyebrow:'Services',dirs_title:'What we do',adv_eyebrow:'Why us',adv_title:'Why work with us',
 pr_eyebrow:'Projects',pr_title:'Completed projects',pr_sub:'Selected contracts from 2020–2026. Full list available on request.',grp_road:'Road construction and maintenance',grp_eng:'Landscaping and utility networks',
 g_eyebrow:'Photos',g_title:'Our work on site',all:'All',c_road:'Roads',c_blag:'Landscaping',c_net:'Utilities and lighting',c_win:'Winter maintenance',
 aw_eyebrow:'Recognition',aw_title:'Letters of appreciation and certificates',
 proc_eyebrow:'How we work',proc_title:'From request to handover',p1_t:'Request',p1_d:'Call or message us on WhatsApp and tell us about the site.',p2_t:'Site visit and estimate',p2_d:'We inspect the site, calculate volumes and prepare an estimate.',p3_t:'Contract',p3_d:'We agree on the schedule, scope and price.',p4_t:'Works and handover',p4_d:'We carry out the works and hand over the site with as-built documentation.',
 ct_eyebrow:'Contacts',ct_title:'Let’s discuss your project',ct_phone:'Phone',ct_email:'Email',ct_addr:'Address',addr:'105 Maresyev St., office 301, Aktobe 030700, Kazakhstan',map_2gis:'Open in 2GIS',map_google:'Google Maps',
 req_title:'Company details',req_name:'Name',req_name_v:'Kalau Plus LLP',req_bin:'BIN',req_dir:'Director',req_dir_v:'Kanat Aibossynov',req_lic:'Licence',req_lic_v:'GSL No. 03831 of 16.10.2017, Category II',
 foot:'© Kalau Plus LLP. Aktobe, Kazakhstan',subc:'subcontract',km:'km',upto:'up to ',uptoAfter:'',close:'Close',prev:'Previous',next:'Next'}
};

/* Направления: фото + [заголовок, описание] на каждом языке */
const DIRS=[
 {img:'s03_02.jpg',ru:['Дорожное строительство','Ямочный, текущий и средний ремонт, реконструкция автомобильных дорог.'],kk:['Жол құрылысы','Автомобиль жолдарын шұңқырлы, ағымдағы және орташа жөндеу, реконструкциялау.'],en:['Road construction','Pothole, routine and medium repair, road reconstruction.']},
 {img:'s03_06.jpg',ru:['Содержание дорог','Круглогодичное содержание дорог и уборка улиц в зимний период.'],kk:['Жолдарды күтіп ұстау','Жолдарды жыл бойы күтіп ұстау және қыста көшелерді тазалау.'],en:['Road maintenance','Year-round road maintenance and winter street cleaning.']},
 {img:'s03_14.jpg',hl:1,ru:['Электроснабжение и ЛЭП','Строительство и обслуживание уличного освещения, монтаж линий электропередачи, обслуживание электросетей, установка и программирование светофоров, декоративная подсветка.'],kk:['Электрмен жабдықтау және ЭБЖ','Көше жарығын салу және қызмет көрсету, электр беру желілерін монтаждау, электр желілеріне қызмет көрсету, бағдаршамдарды орнату және бағдарламалау, сәндік жарықтандыру.'],en:['Power supply and power lines','Street lighting construction and servicing, power line installation, grid maintenance, traffic light installation and programming, decorative lighting.']},
 {img:'s03_10.jpg',ru:['Благоустройство','Скверы, парки, дворовые территории, аллеи, детские площадки, малые архитектурные формы.'],kk:['Абаттандыру','Скверлер, саябақтар, аула аумақтары, аллеялар, балалар алаңдары, шағын сәулет нысандары.'],en:['Landscaping','Squares, parks, courtyards, alleys, playgrounds and small architectural forms.']},
 {img:'s03_18.jpg',ru:['Водоснабжение','Сети водоснабжения и водоотведения, установка модулей очистки и разбора питьевой воды.'],kk:['Сумен жабдықтау','Сумен жабдықтау және су бұру желілері, ауыз суды тазарту және тарату модульдерін орнату.'],en:['Water supply','Water supply and sewer networks, drinking water treatment and dispensing units.']},
 {img:'s03_22.jpg',ru:['Ремонт зданий','Текущий и капитальный ремонт административных зданий.'],kk:['Ғимараттарды жөндеу','Әкімшілік ғимараттарды ағымдағы және күрделі жөндеу.'],en:['Building repair','Routine and major repair of administrative buildings.']}
];

const ADV=[
 {ru:['Собственная техника','Парк дорожно-строительной и грузовой техники.'],kk:['Жеке техника','Жол-құрылыс және жүк техникасы паркі.'],en:['Own machinery','A fleet of road construction machines and trucks.']},
 {ru:['Соблюдение сроков','Выполняем работы точно в срок без потери качества.'],kk:['Мерзімді сақтау','Жұмысты сапасын жоғалтпай, дер кезінде орындаймыз.'],en:['On schedule','We deliver on time without compromising quality.']},
 {ru:['Гибкая ценовая политика','Условия, адаптированные под бюджет заказчика.'],kk:['Икемді баға саясаты','Тапсырыс берушінің бюджетіне бейімделген шарттар.'],en:['Flexible pricing','Terms adapted to the client’s budget.']},
 {ru:['География работ','Опыт работы в разных районах и областях Казахстана.'],kk:['Жұмыс географиясы','Қазақстанның әртүрлі аудандары мен облыстарында тәжірибе.'],en:['Wide geography','Experience across districts and regions of Kazakhstan.']},
 {ru:['Полный цикл работ','От ремонта и строительства до содержания объектов.'],kk:['Толық жұмыс циклі','Жөндеу мен құрылыстан бастап нысандарды күтіп ұстауға дейін.'],en:['Full cycle','From repair and construction to ongoing maintenance.']},
 {ru:['Ответственность','Соответствие казахстанским нормативам и стандартам.'],kk:['Жауапкершілік','Қазақстандық нормативтер мен стандарттарға сәйкестік.'],en:['Accountability','Compliance with Kazakhstan’s regulations and standards.']}
];

/* Объекты: группа, название, год, сумма (рус/каз), сумма (англ), км, пометка */
const PROJ=[
 {g:'road',n:{ru:'Реконструкция и содержание дорог Алга – Карабулак – Амангелди – Кумсай',kk:'Алға – Қарабұлақ – Амангелді – Құмсай жолдарын реконструкциялау және күтіп ұстау',en:'Reconstruction and maintenance of the Alga – Karabulak – Amangeldi – Kumsai roads'},y:'2026',s:'109,8 млн ₸',se:'₸109.8 mln',km:'67,2'},
 {g:'road',n:{ru:'Строительство автодороги, с/к «Саздинское лесничество», г. Актобе',kk:'Автожол салу, «Сазды орман шаруашылығы», Ақтөбе қ.',en:'Road construction, Sazdinskoye Forestry area, Aktobe'},y:'2025',s:'1,5 млрд ₸',se:'₸1.5 bln',sub:1},
 {g:'road',n:{ru:'Уборка улиц в осенне-зимний период, участок №7, Юго-Запад, г. Актобе',kk:'Күзгі-қысқы кезеңде көшелерді тазалау, №7 учаске, Оңтүстік-Батыс, Ақтөбе қ.',en:'Autumn and winter street cleaning, section 7, South-West district, Aktobe'},y:'2026',s:'117,2 млн ₸',se:'₸117.2 mln'},
 {g:'road',n:{ru:'Содержание и обслуживание дорог, г. Кандыагаш, мкр. «Болашак», «Жанаконыс»',kk:'Жолдарды күтіп ұстау және қызмет көрсету, Қандыағаш қ., «Болашақ», «Жаңақоныс» ш/а',en:'Road maintenance and servicing, Kandyagash, Bolashak and Zhanakonys districts'},y:'2023–2026',s:'75,3 млн ₸',se:'₸75.3 mln',upto:1},
 {g:'road',n:{ru:'Реконструкция автодороги, мкр. «Жастык», г. Кандыагаш',kk:'Автожолды реконструкциялау, «Жастық» ш/а, Қандыағаш қ.',en:'Road reconstruction, Zhastyk district, Kandyagash'},y:'2024',s:'49,4 млн ₸',se:'₸49.4 mln'},
 {g:'road',n:{ru:'Средний ремонт автодорог, с. Сагашили, Мугалжарский район',kk:'Автожолдарды орташа жөндеу, Сағашили а., Мұғалжар ауданы',en:'Medium road repair, Sagashili village, Mugalzhar district'},y:'2020',s:'45,7 млн ₸',se:'₸45.7 mln',upto:1},
 {g:'eng',n:{ru:'Текущий ремонт здания акимата, Алгинский район',kk:'Әкімдік ғимаратын ағымдағы жөндеу, Алға ауданы',en:'Routine repair of the akimat building, Alga district'},y:'2025',s:'32,0 млн ₸',se:'₸32.0 mln'},
 {g:'eng',n:{ru:'Благоустройство дворов, мкр. «Молодежный», г. Кандыагаш',kk:'Аулаларды абаттандыру, «Молодежный» ш/а, Қандыағаш қ.',en:'Courtyard landscaping, Molodezhny district, Kandyagash'},y:'2020',s:'29,9 млн ₸',se:'₸29.9 mln'},
 {g:'eng',n:{ru:'Благоустройство парка им. Жолболдина, с. Курык',kk:'Жолболдин атындағы саябақты абаттандыру, Құрық а.',en:'Zholboldin Park landscaping, Kuryk village'},y:'2025',s:'19,0 млн ₸',se:'₸19.0 mln'},
 {g:'eng',n:{ru:'Установка блочных модулей очистки питьевой воды, с. Темир, с. Енбек',kk:'Ауыз суды тазартатын блокты модульдер орнату, Темір а., Еңбек а.',en:'Drinking water treatment units, Temir and Enbek villages'},y:'2022',s:'16,2–16,6 млн ₸',se:'₸16.2–16.6 mln'},
 {g:'eng',n:{ru:'Строительство уличного освещения, с. Кызылжар, с. Раим',kk:'Көше жарығын салу, Қызылжар а., Райым а.',en:'Street lighting construction, Kyzylzhar and Raiym villages'},y:'2025',s:'11,9 млн ₸',se:'₸11.9 mln'},
 {g:'eng',n:{ru:'Техническое обслуживание электролиний, г. Алга',kk:'Электр желілеріне техникалық қызмет көрсету, Алға қ.',en:'Power line maintenance, Alga'},y:'2023',s:'10,0 млн ₸',se:'₸10.0 mln'}
];

/* Фотогалерея: файл, раздел (road, blag, net, win), подпись */
const GAL=[
 ['s07_04.jpg','road',{ru:'Уплотнение основания грунтовой дороги',kk:'Топырақ жолдың негізін тығыздау',en:'Compacting a dirt road base'}],
 ['s07_19.jpg','road',{ru:'Отсыпка грунтовой дороги',kk:'Топырақ жолды үйінділеу',en:'Filling a dirt road'}],
 ['s07_22.jpg','road',{ru:'Грейдирование грунтовой дороги',kk:'Топырақ жолды грейдерлеу',en:'Grading a dirt road'}],
 ['s07_10.jpg','road',{ru:'Земляные работы при ремонте автодороги',kk:'Автожолды жөндеудегі жер жұмыстары',en:'Earthworks during road repair'}],
 ['s07_07.jpg','road',{ru:'Монтаж водопропускных труб на автодороге',kk:'Автожолға су өткізу құбырларын монтаждау',en:'Installing culvert pipes'}],
 ['s11_10.jpg','road',{ru:'Ямочный ремонт автомобильной дороги',kk:'Автожолды шұңқырлы жөндеу',en:'Pothole repair'}],
 ['s10_13.jpg','road',{ru:'Нанесение дорожной разметки',kk:'Жол таңбасын салу',en:'Road marking'}],
 ['s10_07.jpg','road',{ru:'Уплотнение асфальтового основания во дворе',kk:'Аулада асфальт негізін тығыздау',en:'Compacting an asphalt base in a courtyard'}],
 ['s10_10.jpg','blag',{ru:'Укладка асфальта на тротуаре',kk:'Тротуарға асфальт төсеу',en:'Paving a sidewalk'}],
 ['s10_16.jpg','blag',{ru:'Установка беседки и мощение плиткой',kk:'Шатыр орнату және плитка төсеу',en:'Gazebo installation and tiling'}],
 ['s10_19.jpg','blag',{ru:'Устройство детской площадки',kk:'Балалар алаңын жайғастыру',en:'Building a playground'}],
 ['s10_22.jpg','blag',{ru:'Установка малых архитектурных форм',kk:'Шағын сәулет нысандарын орнату',en:'Installing small architectural forms'}],
 ['s10_25.jpg','blag',{ru:'Благоустройство парковой аллеи',kk:'Саябақ аллеясын абаттандыру',en:'Park alley landscaping'}],
 ['s07_13.jpg','blag',{ru:'Благоустройство прогулочной аллеи, с. Курык',kk:'Серуендеу аллеясын абаттандыру, Құрық а.',en:'Walking alley landscaping, Kuryk'}],
 ['s11_04.jpg','blag',{ru:'Лабиринт из искусственного газона',kk:'Жасанды көгалдан жасалған лабиринт',en:'Artificial turf maze'}],
 ['s10_04.jpg','net',{ru:'Монтаж опор уличного освещения',kk:'Көше жарығы тіректерін монтаждау',en:'Installing street lighting poles'}],
 ['s11_07.jpg','net',{ru:'Архитектурная подсветка здания',kk:'Ғимараттың сәулеттік жарықтандыруы',en:'Architectural building lighting'}],
 ['s07_16.jpg','net',{ru:'Устройство траншеи для инженерных сетей',kk:'Инженерлік желілерге траншея қазу',en:'Trenching for utility networks'}],
 ['s09_19.jpg','net',{ru:'Прокладка труб в траншее',kk:'Траншеяға құбыр төсеу',en:'Laying pipes in a trench'}],
 ['s09_13.jpg','net',{ru:'Сварка и соединение полиэтиленовых труб',kk:'Полиэтилен құбырларын дәнекерлеу және қосу',en:'Welding polyethylene pipes'}],
 ['s09_04.jpg','net',{ru:'Монтаж канализационных колодцев',kk:'Кәріз құдықтарын монтаждау',en:'Installing sewer manholes'}],
 ['s09_10.jpg','net',{ru:'Устройство железобетонных колодцев',kk:'Темірбетон құдықтарын орнату',en:'Building reinforced concrete wells'}],
 ['s09_16.jpg','net',{ru:'Монтаж запорной арматуры',kk:'Бекіту арматурасын монтаждау',en:'Installing shut-off valves'}],
 ['s09_07.jpg','net',{ru:'Опрессовка сетей водоснабжения',kk:'Сумен жабдықтау желілерін қысыммен сынау',en:'Pressure testing water mains'}],
 ['s11_13.jpg','win',{ru:'Расчистка дороги от снега',kk:'Жолды қардан тазарту',en:'Clearing snow from a road'}],
 ['s11_16.jpg','win',{ru:'Работа техники в зимний период',kk:'Қысқы кезеңдегі техника жұмысы',en:'Machinery at work in winter'}],
 ['s11_19.jpg','win',{ru:'Уборка снежных заносов',kk:'Қар үйінділерін тазалау',en:'Removing snowdrifts'}]
];

/* Благодарности: файл, год, подпись */
const AW=[
 ['s12_03.jpg','2024',{ru:'Аким Мугалжарского района — за помощь в ликвидации последствий бурана',kk:'Мұғалжар ауданының әкімі — боранның салдарын жоюға көмектескені үшін',en:'Akim of Mugalzhar district — for help after a blizzard'}],
 ['s12_07.jpg','2021',{ru:'Аким Мугалжарского района — к 30-летию Независимости РК',kk:'Мұғалжар ауданының әкімі — ҚР Тәуелсіздігінің 30 жылдығына',en:'Akim of Mugalzhar district — 30th anniversary of Independence'}],
 ['s12_11.jpg','2019',{ru:'Секретарь Актюбинского областного маслихата',kk:'Ақтөбе облыстық мәслихатының хатшысы',en:'Secretary of the Aktobe Regional Maslikhat'}],
 ['s12_29.jpg','2023',{ru:'Жители с. Басшили — за спонсорскую поддержку',kk:'Басшили ауылының тұрғындары — демеушілік көмегі үшін',en:'Residents of Basshili — for sponsorship'}],
 ['s12_25.jpg','2022',{ru:'За поддержку турнира Saunet Boxing',kk:'Saunet Boxing турнирін қолдағаны үшін',en:'For supporting the Saunet Boxing tournament'}],
 ['s12_22.jpg','',{ru:'За поддержку турнира по дзюдо, с. Сагашили',kk:'Сағашили ауылындағы дзюдо турнирін қолдағаны үшін',en:'For supporting a judo tournament, Sagashili'}],
 ['s12_15.jpg','',{ru:'Движение КВН «Жайдарман» — за поддержку молодёжи',kk:'«Жайдарман» қозғалысы — жастарды қолдағаны үшін',en:'Zhaidarman comedy league — for supporting youth'}],
 ['s12_18.jpg','2018',{ru:'Сертификат — курс «Охрана труда на предприятиях»',kk:'Сертификат — «Кәсіпорындардағы еңбекті қорғау» курсы',en:'Certificate — occupational safety course'}]
];

/* ---------- работа страницы ---------- */
const FOUNDED=2017;
let L='ru', filt='all', lbCur=[], lbIdx=0;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function yearsLabel(n){
  if(L==='kk') return 'жыл жұмыс ('+FOUNDED+' жылдан)';
  if(L==='en') return 'years in business (since '+FOUNDED+')';
  const m=n%10,h=n%100, w=(m===1&&h!==11)?'год':(m>=2&&m<=4&&(h<12||h>14))?'года':'лет';
  return w+' работы (с '+FOUNDED+')';
}
function draw(){
  const t=T[L];
  $('dirsGrid').innerHTML=DIRS.map(d=>`<article class="dir${d.hl?' hl':''}"><div class="ph"><img src="img/${d.img}" alt="${esc(d[L][0])}" loading="lazy"></div><div class="tx"><h3>${esc(d[L][0])}</h3><p>${esc(d[L][1])}</p></div></article>`).join('');
  $('advGrid').innerHTML=ADV.map(a=>`<div class="adv"><h3>${esc(a[L][0])}</h3><p>${esc(a[L][1])}</p></div>`).join('');
  $('projGroups').innerHTML=[['road','grp_road'],['eng','grp_eng']].map(([g,k])=>`<div class="pgroup"><h3>${esc(t[k])}</h3><div class="plist">${
    PROJ.filter(p=>p.g===g).map(p=>{
      const sum=(p.upto?t.upto:'')+(L==='en'?p.se:p.s)+(p.upto?t.uptoAfter:'');
      const sub=[p.km?p.km+' '+t.km:'',p.sub?t.subc:''].filter(Boolean).join(' · ');
      return `<div class="prow"><div><b>${esc(p.n[L])}</b>${sub?`<small>${esc(sub)}</small>`:''}</div><span class="yr">${esc(p.y)}</span><span class="sum">${esc(sum)}</span></div>`;}).join('')}</div></div>`).join('');
  const cats=[['all','all'],['road','c_road'],['blag','c_blag'],['net','c_net'],['win','c_win']];
  $('chips').innerHTML=cats.map(([c,k])=>`<button data-c="${c}" aria-pressed="${filt===c}">${esc(t[k])}</button>`).join('');
  const items=GAL.filter(g=>filt==='all'||g[1]===filt);
  const gl=items.map(g=>({src:'img/'+g[0],cap:g[2][L]}));
  $('gal').innerHTML=items.map((g,i)=>`<figure data-n="${i}" tabindex="0"><div class="ph"><img src="img/${g[0]}" alt="${esc(g[2][L])}" loading="lazy"></div><figcaption>${esc(g[2][L])}</figcaption></figure>`).join('');
  $('gal').querySelectorAll('figure').forEach(f=>{f.onclick=()=>openLb(gl,+f.dataset.n);f.onkeydown=e=>{if(e.key==='Enter')openLb(gl,+f.dataset.n)}});
  const al=AW.map(a=>({src:'img/'+a[0],cap:a[2][L]+(a[1]?' · '+a[1]:'')}));
  $('awGrid').innerHTML=AW.map((a,i)=>`<div class="award" data-n="${i}" tabindex="0"><div class="ph"><img src="img/${a[0]}" alt="${esc(a[2][L])}" loading="lazy"></div><div class="t">${esc(a[2][L])}${a[1]?`<span class="y">${a[1]}</span>`:''}</div></div>`).join('');
  $('awGrid').querySelectorAll('.award').forEach(f=>{f.onclick=()=>openLb(al,+f.dataset.n);f.onkeydown=e=>{if(e.key==='Enter')openLb(al,+f.dataset.n)}});
}
function setLang(l){
  if(!T[l]) l='ru'; L=l; const t=T[l];
  document.documentElement.lang=l;
  document.querySelectorAll('[data-i]').forEach(el=>{const v=t[el.dataset.i]; if(v!=null) el.textContent=v;});
  document.querySelectorAll('[data-ialt]').forEach(el=>el.alt=t[el.dataset.ialt]||'');
  document.title=t._title;
  $('lbClose').setAttribute('aria-label',t.close); $('lbPrev').setAttribute('aria-label',t.prev); $('lbNext').setAttribute('aria-label',t.next);
  const y=new Date().getFullYear()-FOUNDED; $('years').textContent=y; $('yearsLbl').textContent=yearsLabel(y);
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  draw();
  try{localStorage.setItem('lang',l)}catch(e){}
}
function openLb(list,i){lbCur=list;lbIdx=i;showLb();$('lb').hidden=false;$('lbClose').focus();}
function showLb(){const it=lbCur[lbIdx];$('lbImg').src=it.src;$('lbImg').alt=it.cap;$('lbCap').textContent=it.cap;}
function step(d){lbIdx=(lbIdx+d+lbCur.length)%lbCur.length;showLb();}

$('chips').onclick=e=>{const b=e.target.closest('button'); if(b){filt=b.dataset.c; draw();}};
document.querySelectorAll('.langs button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$('lbClose').onclick=()=>{$('lb').hidden=true}; $('lbPrev').onclick=()=>step(-1); $('lbNext').onclick=()=>step(1);
$('lb').onclick=e=>{if(e.target===$('lb'))$('lb').hidden=true};
document.addEventListener('keydown',e=>{if($('lb').hidden)return; if(e.key==='Escape')$('lb').hidden=true; if(e.key==='ArrowLeft')step(-1); if(e.key==='ArrowRight')step(1);});
let tx0=null;
$('lb').addEventListener('touchstart',e=>{tx0=e.touches[0].clientX},{passive:true});
$('lb').addEventListener('touchend',e=>{if(tx0==null)return;const dx=e.changedTouches[0].clientX-tx0;if(Math.abs(dx)>50)step(dx<0?1:-1);tx0=null});

let start='ru'; try{start=localStorage.getItem('lang')||'ru'}catch(e){}
setLang(start);
