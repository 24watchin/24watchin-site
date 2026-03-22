export type CityEntry = {
  key: string;
  display: Record<string, string>;
};

export const countryCityMap: Record<string, CityEntry[]> = {

  // ▼ 日本
  jp: [
    { key: 'Tokyo',    display: { ja: '東京',   en: 'Tokyo',    'zh-cn': '东京',  'zh-tw': '東京',  es: 'Tokio',   fr: 'Tokyo',   de: 'Tokio',   ru: 'Токио'   } },
    { key: 'Osaka',    display: { ja: '大阪',   en: 'Osaka',    'zh-cn': '大阪',  'zh-tw': '大阪',  es: 'Osaka',   fr: 'Osaka',   de: 'Osaka',   ru: 'Осака'   } },
    { key: 'Sapporo',  display: { ja: '札幌',   en: 'Sapporo',  'zh-cn': '札幌',  'zh-tw': '札幌',  es: 'Sapporo', fr: 'Sapporo', de: 'Sapporo', ru: 'Саппоро' } },
    { key: 'Fukuoka',  display: { ja: '福岡',   en: 'Fukuoka',  'zh-cn': '福冈',  'zh-tw': '福岡',  es: 'Fukuoka', fr: 'Fukuoka', de: 'Fukuoka', ru: 'Фукуока' } },
    { key: 'Nagoya',   display: { ja: '名古屋', en: 'Nagoya',   'zh-cn': '名古屋','zh-tw': '名古屋',es: 'Nagoya',  fr: 'Nagoya',  de: 'Nagoya',  ru: 'Нагоя'   } },
    { key: 'Naha',     display: { ja: '那覇',   en: 'Naha',     'zh-cn': '那霸',  'zh-tw': '那霸',  es: 'Naha',    fr: 'Naha',    de: 'Naha',    ru: 'Наха'    } },
  ],

  // ▼ アジア
  tw: [
    { key: 'Taipei',    display: { ja: '台北', en: 'Taipei',    'zh-cn': '台北', 'zh-tw': '台北', es: 'Taipéi',    fr: 'Taipei',    de: 'Taipeh',    ru: 'Тайбэй'  } },
    { key: 'Kaohsiung', display: { ja: '高雄', en: 'Kaohsiung', 'zh-cn': '高雄', 'zh-tw': '高雄', es: 'Kaohsiung', fr: 'Kaohsiung', de: 'Kaohsiung', ru: 'Гаосюн'  } },
  ],
  kr: [
    { key: 'Seoul', display: { ja: 'ソウル', en: 'Seoul', 'zh-cn': '首尔', 'zh-tw': '首爾', es: 'Seúl', fr: 'Séoul', de: 'Seoul', ru: 'Сеул' } },
    { key: 'Busan', display: { ja: '釜山',   en: 'Busan', 'zh-cn': '釜山', 'zh-tw': '釜山', es: 'Busan', fr: 'Busan', de: 'Busan', ru: 'Пусан' } },
  ],
  hk: [
    { key: 'Hong_Kong', display: { ja: '香港', en: 'Hong Kong', 'zh-cn': '香港', 'zh-tw': '香港', es: 'Hong Kong', fr: 'Hong Kong', de: 'Hongkong', ru: 'Гонконг' } },
  ],
  sg: [
    { key: 'Singapore', display: { ja: 'シンガポール', en: 'Singapore', 'zh-cn': '新加坡', 'zh-tw': '新加坡', es: 'Singapur', fr: 'Singapour', de: 'Singapur', ru: 'Сингапур' } },
  ],
  th: [
    { key: 'Bangkok', display: { ja: 'バンコク', en: 'Bangkok', 'zh-cn': '曼谷', 'zh-tw': '曼谷', es: 'Bangkok', fr: 'Bangkok', de: 'Bangkok', ru: 'Бангкок' } },
    { key: 'Phuket',  display: { ja: 'プーケット', en: 'Phuket', 'zh-cn': '普吉岛', 'zh-tw': '普吉島', es: 'Phuket', fr: 'Phuket', de: 'Phuket', ru: 'Пхукет' } },
  ],
  vn: [
    { key: 'Ho_Chi_Minh_City', display: { ja: 'ホーチミン',   en: 'Ho Chi Minh City', 'zh-cn': '胡志明市', 'zh-tw': '胡志明市', es: 'Ciudad Ho Chi Minh', fr: 'Hô Chi Minh-Ville', de: 'Ho-Chi-Minh-Stadt', ru: 'Хошимин'   } },
    { key: 'Hanoi',            display: { ja: 'ハノイ',       en: 'Hanoi',            'zh-cn': '河内',     'zh-tw': '河內',     es: 'Hanói',             fr: 'Hanoï',            de: 'Hanoi',            ru: 'Ханой'       } },
  ],
  my: [
    { key: 'Kuala_Lumpur', display: { ja: 'クアラルンプール', en: 'Kuala Lumpur', 'zh-cn': '吉隆坡', 'zh-tw': '吉隆坡', es: 'Kuala Lumpur', fr: 'Kuala Lumpur', de: 'Kuala Lumpur', ru: 'Куала-Лумпур' } },
  ],
  ph: [
    { key: 'Manila', display: { ja: 'マニラ', en: 'Manila', 'zh-cn': '马尼拉', 'zh-tw': '馬尼拉', es: 'Manila', fr: 'Manille', de: 'Manila', ru: 'Манила' } },
  ],
  id: [
    { key: 'Jakarta', display: { ja: 'ジャカルタ', en: 'Jakarta', 'zh-cn': '雅加达', 'zh-tw': '雅加達', es: 'Yakarta', fr: 'Jakarta', de: 'Jakarta', ru: 'Джакарта' } },
    { key: 'Bali',    display: { ja: 'バリ',       en: 'Bali',    'zh-cn': '巴厘岛', 'zh-tw': '峇里島', es: 'Bali',    fr: 'Bali',    de: 'Bali',    ru: 'Бали'     } },
  ],
  in: [
    { key: 'Delhi',     display: { ja: 'デリー',       en: 'Delhi',     'zh-cn': '德里',   'zh-tw': '德里',   es: 'Delhi',     fr: 'Delhi',     de: 'Delhi',     ru: 'Дели'      } },
    { key: 'Mumbai',    display: { ja: 'ムンバイ',     en: 'Mumbai',    'zh-cn': '孟买',   'zh-tw': '孟買',   es: 'Bombay',    fr: 'Mumbai',    de: 'Mumbai',    ru: 'Мумбаи'    } },
    { key: 'Bangalore', display: { ja: 'バンガロール', en: 'Bangalore', 'zh-cn': '班加罗尔','zh-tw': '班加羅爾', es: 'Bangalore', fr: 'Bangalore', de: 'Bangalore', ru: 'Бангалор'  } },
  ],
  np: [
    { key: 'Kathmandu', display: { ja: 'カトマンズ', en: 'Kathmandu', 'zh-cn': '加德满都', 'zh-tw': '加德滿都', es: 'Katmandú', fr: 'Katmandou', de: 'Kathmandu', ru: 'Катманду' } },
  ],
  bd: [
    { key: 'Dhaka', display: { ja: 'ダッカ', en: 'Dhaka', 'zh-cn': '达卡', 'zh-tw': '達卡', es: 'Daca', fr: 'Dacca', de: 'Dhaka', ru: 'Дакка' } },
  ],
  cn: [
    { key: 'Beijing',   display: { ja: '北京', en: 'Beijing',   'zh-cn': '北京', 'zh-tw': '北京', es: 'Pekín',    fr: 'Pékin',    de: 'Peking',    ru: 'Пекин'    } },
    { key: 'Shanghai',  display: { ja: '上海', en: 'Shanghai',  'zh-cn': '上海', 'zh-tw': '上海', es: 'Shanghái', fr: 'Shanghai', de: 'Shanghai',  ru: 'Шанхай'   } },
    { key: 'Guangzhou', display: { ja: '広州', en: 'Guangzhou', 'zh-cn': '广州', 'zh-tw': '廣州', es: 'Cantón',   fr: 'Canton',   de: 'Guangzhou', ru: 'Гуанчжоу' } },
  ],

  // ▼ ヨーロッパ
  de: [
    { key: 'Berlin',      display: { ja: 'ベルリン',       en: 'Berlin',      'zh-cn': '柏林',     'zh-tw': '柏林',     es: 'Berlín',    fr: 'Berlin',    de: 'Berlin',      ru: 'Берлин'     } },
    { key: 'Dusseldorf',  display: { ja: 'デュッセルドルフ', en: 'Düsseldorf', 'zh-cn': '杜塞尔多夫','zh-tw': '杜塞道夫', es: 'Düsseldorf', fr: 'Düsseldorf', de: 'Düsseldorf', ru: 'Дюссельдорф' } },
    { key: 'Munich',      display: { ja: 'ミュンヘン',     en: 'Munich',      'zh-cn': '慕尼黑',   'zh-tw': '慕尼黑',   es: 'Múnich',    fr: 'Munich',    de: 'München',     ru: 'Мюнхен'     } },
    { key: 'Frankfurt',   display: { ja: 'フランクフルト', en: 'Frankfurt',   'zh-cn': '法兰克福', 'zh-tw': '法蘭克福', es: 'Fráncfort', fr: 'Francfort', de: 'Frankfurt',   ru: 'Франкфурт'  } },
    { key: 'Hamburg',     display: { ja: 'ハンブルク',     en: 'Hamburg',     'zh-cn': '汉堡',     'zh-tw': '漢堡',     es: 'Hamburgo',  fr: 'Hambourg',  de: 'Hamburg',     ru: 'Гамбург'    } },
  ],
  fr: [
    { key: 'Paris',     display: { ja: 'パリ',       en: 'Paris',     'zh-cn': '巴黎', 'zh-tw': '巴黎', es: 'París',    fr: 'Paris',     de: 'Paris',     ru: 'Париж'   } },
    { key: 'Lyon',      display: { ja: 'リヨン',     en: 'Lyon',      'zh-cn': '里昂', 'zh-tw': '里昂', es: 'Lyon',     fr: 'Lyon',      de: 'Lyon',      ru: 'Лион'    } },
    { key: 'Marseille', display: { ja: 'マルセイユ', en: 'Marseille', 'zh-cn': '马赛', 'zh-tw': '馬賽', es: 'Marsella', fr: 'Marseille', de: 'Marseille', ru: 'Марсель' } },
    { key: 'Nice',      display: { ja: 'ニース',     en: 'Nice',      'zh-cn': '尼斯', 'zh-tw': '尼斯', es: 'Niza',     fr: 'Nice',      de: 'Nizza',     ru: 'Ницца'   } },
  ],
  gb: [
    { key: 'London',      display: { ja: 'ロンドン',       en: 'London',     'zh-cn': '伦敦',     'zh-tw': '倫敦',     es: 'Londres',    fr: 'Londres',    de: 'London',     ru: 'Лондон'    } },
    { key: 'Manchester',  display: { ja: 'マンチェスター', en: 'Manchester', 'zh-cn': '曼彻斯特', 'zh-tw': '曼徹斯特', es: 'Mánchester', fr: 'Manchester', de: 'Manchester', ru: 'Манчестер' } },
    { key: 'Edinburgh',   display: { ja: 'エジンバラ',     en: 'Edinburgh',  'zh-cn': '爱丁堡',   'zh-tw': '愛丁堡',   es: 'Edimburgo',  fr: 'Édimbourg',  de: 'Edinburgh',  ru: 'Эдинбург'  } },
  ],
  it: [
    { key: 'Milan',   display: { ja: 'ミラノ',   en: 'Milan',  'zh-cn': '米兰',  'zh-tw': '米蘭',  es: 'Milán',   fr: 'Milan',  de: 'Mailand', ru: 'Милан'   } },
    { key: 'Rome',    display: { ja: 'ローマ',   en: 'Rome',   'zh-cn': '罗马',  'zh-tw': '羅馬',  es: 'Roma',    fr: 'Rome',   de: 'Rom',     ru: 'Рим'     } },
    { key: 'Venice',  display: { ja: 'ベネチア', en: 'Venice', 'zh-cn': '威尼斯','zh-tw': '威尼斯', es: 'Venecia', fr: 'Venise', de: 'Venedig', ru: 'Венеция' } },
  ],
  es: [
    { key: 'Madrid',    display: { ja: 'マドリード', en: 'Madrid',    'zh-cn': '马德里',  'zh-tw': '馬德里',  es: 'Madrid',    fr: 'Madrid',    de: 'Madrid',    ru: 'Мадрид'    } },
    { key: 'Barcelona', display: { ja: 'バルセロナ', en: 'Barcelona', 'zh-cn': '巴塞罗那','zh-tw': '巴塞隆納', es: 'Barcelona', fr: 'Barcelone', de: 'Barcelona', ru: 'Барселона' } },
  ],
  nl: [
    { key: 'Amsterdam', display: { ja: 'アムステルダム', en: 'Amsterdam', 'zh-cn': '阿姆斯特丹', 'zh-tw': '阿姆斯特丹', es: 'Ámsterdam', fr: 'Amsterdam', de: 'Amsterdam', ru: 'Амстердам' } },
  ],
  ch: [
    { key: 'Zurich',  display: { ja: 'チューリッヒ', en: 'Zurich',  'zh-cn': '苏黎世', 'zh-tw': '蘇黎世', es: 'Zúrich',  fr: 'Zurich',  de: 'Zürich',  ru: 'Цюрих'   } },
    { key: 'Geneva',  display: { ja: 'ジュネーブ',   en: 'Geneva',  'zh-cn': '日内瓦', 'zh-tw': '日內瓦', es: 'Ginebra', fr: 'Genève',  de: 'Genf',    ru: 'Женева'  } },
  ],
  se: [
    { key: 'Stockholm', display: { ja: 'ストックホルム', en: 'Stockholm', 'zh-cn': '斯德哥尔摩', 'zh-tw': '斯德哥爾摩', es: 'Estocolmo', fr: 'Stockholm', de: 'Stockholm', ru: 'Стокгольм' } },
  ],
  no: [
    { key: 'Oslo', display: { ja: 'オスロ', en: 'Oslo', 'zh-cn': '奥斯陆', 'zh-tw': '奧斯陸', es: 'Oslo', fr: 'Oslo', de: 'Oslo', ru: 'Осло' } },
  ],
  dk: [
    { key: 'Copenhagen', display: { ja: 'コペンハーゲン', en: 'Copenhagen', 'zh-cn': '哥本哈根', 'zh-tw': '哥本哈根', es: 'Copenhague', fr: 'Copenhague', de: 'Kopenhagen', ru: 'Копенгаген' } },
  ],
  pt: [
    { key: 'Lisbon', display: { ja: 'リスボン', en: 'Lisbon', 'zh-cn': '里斯本', 'zh-tw': '里斯本', es: 'Lisboa', fr: 'Lisbonne', de: 'Lissabon', ru: 'Лиссабон' } },
    { key: 'Porto',  display: { ja: 'ポルト',   en: 'Porto',  'zh-cn': '波尔图', 'zh-tw': '波爾圖', es: 'Oporto', fr: 'Porto',    de: 'Porto',    ru: 'Порту'    } },
  ],
  gr: [
    { key: 'Athens', display: { ja: 'アテネ', en: 'Athens', 'zh-cn': '雅典', 'zh-tw': '雅典', es: 'Atenas', fr: 'Athènes', de: 'Athen', ru: 'Афины' } },
  ],

  // ▼ 北米
  us: [
    { key: 'New_York',       display: { ja: 'ニューヨーク',   en: 'New York',       'zh-cn': '纽约',      'zh-tw': '紐約',      es: 'Nueva York',    fr: 'New York',       de: 'New York',      ru: 'Нью-Йорк'       } },
    { key: 'Los_Angeles',    display: { ja: 'ロサンゼルス',   en: 'Los Angeles',    'zh-cn': '洛杉矶',    'zh-tw': '洛杉磯',    es: 'Los Ángeles',   fr: 'Los Angeles',    de: 'Los Angeles',   ru: 'Лос-Анджелес'   } },
    { key: 'Chicago',        display: { ja: 'シカゴ',         en: 'Chicago',        'zh-cn': '芝加哥',    'zh-tw': '芝加哥',    es: 'Chicago',       fr: 'Chicago',        de: 'Chicago',       ru: 'Чикаго'         } },
    { key: 'Houston',        display: { ja: 'ヒューストン',   en: 'Houston',        'zh-cn': '休斯顿',    'zh-tw': '休斯頓',    es: 'Houston',       fr: 'Houston',        de: 'Houston',       ru: 'Хьюстон'        } },
    { key: 'Washington',     display: { ja: 'ワシントンD.C.', en: 'Washington D.C.','zh-cn': '华盛顿特区','zh-tw': '華盛頓特區', es: 'Washington D.C.', fr: 'Washington D.C.', de: 'Washington D.C.', ru: 'Вашингтон'    } },
    { key: 'Atlanta',        display: { ja: 'アトランタ',     en: 'Atlanta',        'zh-cn': '亚特兰大',  'zh-tw': '亞特蘭大',  es: 'Atlanta',       fr: 'Atlanta',        de: 'Atlanta',       ru: 'Атланта'        } },
    { key: 'Seattle',        display: { ja: 'シアトル',       en: 'Seattle',        'zh-cn': '西雅图',    'zh-tw': '西雅圖',    es: 'Seattle',       fr: 'Seattle',        de: 'Seattle',       ru: 'Сиэтл'          } },
    { key: 'San_Francisco',  display: { ja: 'サンフランシスコ', en: 'San Francisco', 'zh-cn': '旧金山',    'zh-tw': '舊金山',    es: 'San Francisco', fr: 'San Francisco',  de: 'San Francisco', ru: 'Сан-Франциско'  } },
    { key: 'San_Diego',      display: { ja: 'サンディエゴ',   en: 'San Diego',      'zh-cn': '圣地亚哥',  'zh-tw': '聖地牙哥',  es: 'San Diego',     fr: 'San Diego',      de: 'San Diego',     ru: 'Сан-Диего'      } },
    { key: 'Detroit',        display: { ja: 'デトロイト',     en: 'Detroit',        'zh-cn': '底特律',    'zh-tw': '底特律',    es: 'Detroit',       fr: 'Détroit',        de: 'Detroit',       ru: 'Детройт'        } },
    { key: 'Honolulu',       display: { ja: 'ホノルル',       en: 'Honolulu',       'zh-cn': '檀香山',    'zh-tw': '檀香山',    es: 'Honolulu',      fr: 'Honolulu',       de: 'Honolulu',      ru: 'Гонолулу'       } },
  ],
  ca: [
    { key: 'Toronto',   display: { ja: 'トロント',     en: 'Toronto',   'zh-cn': '多伦多', 'zh-tw': '多倫多', es: 'Toronto',   fr: 'Toronto',   de: 'Toronto',   ru: 'Торонто'   } },
    { key: 'Vancouver', display: { ja: 'バンクーバー', en: 'Vancouver', 'zh-cn': '温哥华', 'zh-tw': '溫哥華', es: 'Vancouver', fr: 'Vancouver', de: 'Vancouver', ru: 'Ванкувер'  } },
    { key: 'Calgary',   display: { ja: 'カルガリー',   en: 'Calgary',   'zh-cn': '卡尔加里','zh-tw': '卡加利', es: 'Calgary',   fr: 'Calgary',   de: 'Calgary',   ru: 'Калгари'   } },
    { key: 'Montreal',  display: { ja: 'モントリオール', en: 'Montreal', 'zh-cn': '蒙特利尔','zh-tw': '蒙特婁', es: 'Montreal',  fr: 'Montréal',  de: 'Montreal',  ru: 'Монреаль'  } },
  ],
  mx: [
    { key: 'Mexico_City', display: { ja: 'メキシコシティ', en: 'Mexico City', 'zh-cn': '墨西哥城', 'zh-tw': '墨西哥城', es: 'Ciudad de México', fr: 'Mexico', de: 'Mexiko-Stadt', ru: 'Мехико' } },
  ],

  // ▼ 南米
  br: [
    { key: 'Sao_Paulo',      display: { ja: 'サンパウロ',      en: 'São Paulo',      'zh-cn': '圣保罗',    'zh-tw': '聖保羅',    es: 'São Paulo',      fr: 'São Paulo',      de: 'São Paulo',      ru: 'Сан-Паулу'      } },
    { key: 'Rio_de_Janeiro', display: { ja: 'リオデジャネイロ', en: 'Rio de Janeiro', 'zh-cn': '里约热内卢','zh-tw': '里約熱內盧', es: 'Río de Janeiro', fr: 'Rio de Janeiro', de: 'Rio de Janeiro', ru: 'Рио-де-Жанейро' } },
  ],
  ar: [
    { key: 'Buenos_Aires', display: { ja: 'ブエノスアイレス', en: 'Buenos Aires', 'zh-cn': '布宜诺斯艾利斯', 'zh-tw': '布宜諾斯艾利斯', es: 'Buenos Aires', fr: 'Buenos Aires', de: 'Buenos Aires', ru: 'Буэнос-Айрес' } },
  ],
  co: [
    { key: 'Bogota', display: { ja: 'ボゴタ', en: 'Bogota', 'zh-cn': '波哥大', 'zh-tw': '波哥大', es: 'Bogotá', fr: 'Bogota', de: 'Bogotá', ru: 'Богота' } },
  ],

  // ▼ 中東・アフリカ
  ae: [
    { key: 'Dubai',     display: { ja: 'ドバイ',   en: 'Dubai',     'zh-cn': '迪拜',     'zh-tw': '杜拜',     es: 'Dubái',    fr: 'Dubaï',      de: 'Dubai',     ru: 'Дубай'    } },
    { key: 'Abu_Dhabi', display: { ja: 'アブダビ', en: 'Abu Dhabi', 'zh-cn': '阿布扎比', 'zh-tw': '阿布達比', es: 'Abu Dabi', fr: 'Abou Dhabi', de: 'Abu Dhabi', ru: 'Абу-Даби' } },
  ],
  sa: [
    { key: 'Riyadh', display: { ja: 'リヤド',  en: 'Riyadh', 'zh-cn': '利雅得', 'zh-tw': '利雅德', es: 'Riad',   fr: 'Riyad',   de: 'Riad',     ru: 'Эр-Рияд' } },
    { key: 'Jeddah', display: { ja: 'ジッダ',  en: 'Jeddah', 'zh-cn': '吉达',   'zh-tw': '吉達',   es: 'Yeda',   fr: 'Djeddah', de: 'Dschidda', ru: 'Джидда'  } },
  ],
  qa: [
    { key: 'Doha', display: { ja: 'ドーハ', en: 'Doha', 'zh-cn': '多哈', 'zh-tw': '多哈', es: 'Doha', fr: 'Doha', de: 'Doha', ru: 'Доха' } },
  ],
  om: [
    { key: 'Muscat', display: { ja: 'マスカット', en: 'Muscat', 'zh-cn': '马斯喀特', 'zh-tw': '馬斯喀特', es: 'Mascate', fr: 'Mascate', de: 'Maskat', ru: 'Маскат' } },
  ],
  tr: [
    { key: 'Istanbul', display: { ja: 'イスタンブール', en: 'Istanbul', 'zh-cn': '伊斯坦布尔', 'zh-tw': '伊斯坦堡', es: 'Estambul', fr: 'Istanbul', de: 'Istanbul', ru: 'Стамбул' } },
    { key: 'Ankara',   display: { ja: 'アンカラ',       en: 'Ankara',   'zh-cn': '安卡拉',     'zh-tw': '安卡拉',   es: 'Ankara',   fr: 'Ankara',   de: 'Ankara',   ru: 'Анкара'  } },
  ],
  eg: [
    { key: 'Cairo', display: { ja: 'カイロ', en: 'Cairo', 'zh-cn': '开罗', 'zh-tw': '開羅', es: 'El Cairo', fr: 'Le Caire', de: 'Kairo', ru: 'Каир' } },
  ],
  za: [
    { key: 'Johannesburg', display: { ja: 'ヨハネスブルク', en: 'Johannesburg', 'zh-cn': '约翰内斯堡', 'zh-tw': '約翰尼斯堡', es: 'Johannesburgo', fr: 'Johannesburg', de: 'Johannesburg', ru: 'Йоханнесбург' } },
    { key: 'Cape_Town',    display: { ja: 'ケープタウン',   en: 'Cape Town',    'zh-cn': '开普敦',     'zh-tw': '開普敦',     es: 'Ciudad del Cabo', fr: 'Le Cap',      de: 'Kapstadt',     ru: 'Кейптаун'    } },
  ],

  // ▼ オセアニア
  au: [
    { key: 'Sydney',    display: { ja: 'シドニー',   en: 'Sydney',    'zh-cn': '悉尼',   'zh-tw': '雪梨',   es: 'Sídney',    fr: 'Sydney',    de: 'Sydney',    ru: 'Сидней'   } },
    { key: 'Melbourne', display: { ja: 'メルボルン', en: 'Melbourne', 'zh-cn': '墨尔本', 'zh-tw': '墨爾本', es: 'Melbourne', fr: 'Melbourne', de: 'Melbourne', ru: 'Мельбурн' } },
    { key: 'Brisbane',  display: { ja: 'ブリスベン', en: 'Brisbane',  'zh-cn': '布里斯班','zh-tw': '布里斯本', es: 'Brisbane',  fr: 'Brisbane',  de: 'Brisbane',  ru: 'Брисбен'  } },
    { key: 'Perth',     display: { ja: 'パース',     en: 'Perth',     'zh-cn': '珀斯',   'zh-tw': '伯斯',   es: 'Perth',     fr: 'Perth',     de: 'Perth',     ru: 'Перт'     } },
  ],
  nz: [
    { key: 'Auckland',   display: { ja: 'オークランド',   en: 'Auckland',   'zh-cn': '奥克兰', 'zh-tw': '奧克蘭', es: 'Auckland',   fr: 'Auckland',   de: 'Auckland',   ru: 'Окленд'    } },
    { key: 'Wellington', display: { ja: 'ウェリントン',   en: 'Wellington', 'zh-cn': '惠灵顿', 'zh-tw': '惠靈頓', es: 'Wellington', fr: 'Wellington', de: 'Wellington', ru: 'Веллингтон' } },
  ],
};
