// src/lib/countryData.ts

export const countryNameDict: Record<string, Record<string, string>> = {
  jp: { ja: 'JAPAN', en: 'JAPAN', 'zh-cn': '日本', 'zh-tw': '日本', es: 'JAPÓN', fr: 'JAPON', de: 'JAPAN', ru: 'ЯПОНИЯ' },
  us: { ja: 'アメリカ', en: 'USA', 'zh-cn': '美国', 'zh-tw': '美國', es: 'EE.UU.', fr: 'USA', de: 'USA', ru: 'США' },
  ae: { ja: 'UAE（アラブ首長国連邦）', en: 'UAE', 'zh-cn': '阿联酋', 'zh-tw': '阿聯酋', es: 'EAU', fr: 'EAU', de: 'VAE', ru: 'ОАЭ' },
  au: { ja: 'オーストラリア', en: 'AUSTRALIA', 'zh-cn': '澳大利亚', 'zh-tw': '澳洲', es: 'AUSTRALIA', fr: 'AUSTRALIE', de: 'AUSTRALIEN', ru: 'АВСТРАЛИЯ' },
  ca: { ja: 'カナダ', en: 'CANADA', 'zh-cn': '加拿大', 'zh-tw': 'カナダ', es: 'CANADÁ', fr: 'CANADA', de: 'KANADA', ru: 'КАНАДА' },
  sg: { ja: 'シンガポール', en: 'SINGAPORE', 'zh-cn': '新加坡', 'zh-tw': '新加坡', es: 'SINGAPUR', fr: 'SINGAPOUR', de: 'SINGAPUR', ru: 'СИНГАПУР' },
  de: { ja: 'ドイツ', en: 'GERMANY', 'zh-cn': '德国', 'zh-tw': '德國', es: 'ALEMANIA', fr: 'ALLEMAGNE', de: 'DEUTSCHLAND', ru: 'ГЕРМАНИЯ' },
  vn: { ja: 'ベトナム', en: 'VIETNAM', 'zh-cn': '越南', 'zh-tw': '越南', es: 'VIETNAM', fr: 'VIETNAM', de: 'VIETNAM', ru: 'ВЬЕТНАМ' },
  my: { ja: 'マレーシア', en: 'MALAYSIA', 'zh-cn': '马来西亚', 'zh-tw': '馬來西亞', es: 'MALASIA', fr: 'MALAISIE', de: 'MALAYSIA', ru: 'МАЛАЙЗИЯ' },
  tw: { ja: '台湾', en: 'TAIWAN', 'zh-cn': '台湾', 'zh-tw': '台灣', es: 'TAIWÁN', fr: 'TAÏWAN', de: 'TAIWAN', ru: 'ТАЙВАНЬ' },
  mx: { ja: 'メキシコ', en: 'MEXICO', 'zh-cn': '墨西哥', 'zh-tw': '墨西哥', es: 'MÉXICO', fr: 'MEXIQUE', de: 'MEXIKO', ru: 'МЕКСИКА' },
  ar: { ja: 'アルゼンチン', en: 'ARGENTINA', 'zh-cn': '阿根廷', 'zh-tw': '阿根廷', es: 'ARGENTINA', fr: 'ARGENTINE', de: 'ARGENTINIEN', ru: 'АРГЕНТИНА' },
  gb: { ja: 'イギリス', en: 'UK', 'zh-cn': '英国', 'zh-tw': '英國', es: 'REINO UNIDO', fr: 'ROYAUME-UNI', de: 'UK', ru: 'ВЕЛИКОブリタニア' },
  it: { ja: 'イタリア', en: 'ITALY', 'zh-cn': 'イタリア', 'zh-tw': '義大利', es: 'ITALIA', fr: 'ITALIE', de: 'ITALIEN', ru: 'ИТАЛИЯ' },
  eg: { ja: 'エジプト', en: 'EGYPT', 'zh-cn': '埃及', 'zh-tw': '埃及', es: 'EGIPTO', fr: 'ÉGYPTE', de: 'ÄGYPTEN', ru: 'ЕГИПЕТ' },
  nl: { ja: 'オランダ', en: 'NETHERLANDS', 'zh-cn': '荷兰', 'zh-tw': '荷兰', es: 'PAÍSES BAJOS', fr: 'PAYS-BAS', de: 'NIEDERLANDE', ru: 'НИДЕРЛАНДЫ' },
  sa: { ja: 'サウジアラビア', en: 'SAUDI ARABIA', 'zh-cn': '沙特阿拉伯', 'zh-tw': '沙烏地阿拉伯', es: 'ARABIA SAUDITA', fr: 'ARABIE SAOUDITE', de: 'SAUDI-ARABIEN', ru: 'САУДОВСКАЯ АРАВИЯ' },
  es: { ja: 'スペイン', en: 'SPAIN', 'zh-cn': '西班牙', 'zh-tw': '西班牙', es: 'ESPAÑA', fr: 'ESPAGNE', de: 'SPANIEN', ru: 'ИСПАНИЯ' },
  nz: { ja: 'ニュージーランド', en: 'NEW ZEALAND', 'zh-cn': '新西兰', 'zh-tw': '紐西蘭', es: 'NUEVA ZELANDA', fr: 'NOUVELLE-ZÉLANDE', de: 'NEUSEELAND', ru: 'НОВАЯ ЗЕЛАНДИЯ' },
  hk: { ja: '香港', en: 'HONG KONG', 'zh-cn': '香港', 'zh-tw': '香港', es: 'HONG KONG', fr: 'HONG KONG', de: 'HONGKONG', ru: 'ГОНКОНГ' },
  kr: { ja: '韓国', en: 'SOUTH KOREA', 'zh-cn': '韩国', 'zh-tw': '韓國', es: 'COREA DEL SUR', fr: 'CORÉE DU SUD', de: 'SÜDKOREA', ru: 'ЮЖНАЯ КОРЕЯ' },
  cn: { ja: '中国', en: 'CHINA', 'zh-cn': '中国', 'zh-tw': '中國', es: 'CHINA', fr: 'CHINE', de: 'CHINA', ru: 'КИТАЙ' },
  th: { ja: 'タイ', en: 'THAILAND', 'zh-cn': '泰国', 'zh-tw': '泰國', es: 'TAILANDIA', fr: 'THAÏLANDE', de: 'THAILAND', ru: 'ТАИЛАНД' },
};

/**
 * 国コードと言語に応じたラベルを返す関数
 */
export const getCountryLabel = (country: string, lang: string) => {
  return countryNameDict[country]?.[lang] || countryNameDict[country]?.['en'] || country.toUpperCase();
};
