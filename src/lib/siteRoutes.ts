// src/lib/siteRoutes.ts

// ▼ 作成する「言語」と「国」の組み合わせリスト
// active: true  -> 本番環境でも公開する
// active: false -> 本番環境では隠す（自分のパソコンでのみ見れる）
const rawLangCountryPairs = [
  // 日本（当初は日本語、英語、中国語のみ公開）
  { lang: 'ja', country: 'jp', active: true },
  { lang: 'en', country: 'jp', active: true },
  { lang: 'zh-cn', country: 'jp', active: true },
  { lang: 'zh-tw', country: 'jp', active: true },
  { lang: 'es', country: 'jp', active: false }, 
  { lang: 'fr', country: 'jp', active: false }, 
  { lang: 'de', country: 'jp', active: false }, 
  { lang: 'ru', country: 'jp', active: false },

  // UAE（日本語＋英語、中国語）
  { lang: 'ja', country: 'ae', active: false }, 
  { lang: 'en', country: 'ae', active: false }, 
  { lang: 'zh-cn', country: 'ae', active: false }, 
  { lang: 'zh-tw', country: 'ae', active: false },

  // アメリカ（日本語＋スペイン語、中国語）
  { lang: 'ja', country: 'us', active: false }, 
  { lang: 'es', country: 'us', active: false }, 
  { lang: 'zh-cn', country: 'us', active: false }, 
  { lang: 'zh-tw', country: 'us', active: false },

  // オーストラリア（日本語＋中国語、スペイン語）
  { lang: 'ja', country: 'au', active: false }, 
  { lang: 'zh-cn', country: 'au', active: false }, 
  { lang: 'zh-tw', country: 'au', active: false }, 
  { lang: 'es', country: 'au', active: false },

  // カナダ（日本語＋中国語、スペイン語）
  { lang: 'ja', country: 'ca', active: false }, 
  { lang: 'zh-cn', country: 'ca', active: false }, 
  { lang: 'zh-tw', country: 'ca', active: false }, 
  { lang: 'es', country: 'ca', active: false },

  // シンガポール（日本語＋フランス語、ドイツ語）
  { lang: 'ja', country: 'sg', active: false }, 
  { lang: 'fr', country: 'sg', active: false }, 
  { lang: 'de', country: 'sg', active: false },

  // ドイツ（日本語＋英語、ロシア語）
  { lang: 'ja', country: 'de', active: false }, 
  { lang: 'en', country: 'de', active: false }, 
  { lang: 'ru', country: 'de', active: false },

  // ベトナム（日本語＋英語、中国語）
  { lang: 'ja', country: 'vn', active: false }, 
  { lang: 'en', country: 'vn', active: false }, 
  { lang: 'zh-cn', country: 'vn', active: false }, 
  { lang: 'zh-tw', country: 'vn', active: false },

  // マレーシア（日本語＋英語、中国語）
  { lang: 'ja', country: 'my', active: false }, 
  { lang: 'en', country: 'my', active: false }, 
  { lang: 'zh-cn', country: 'my', active: false }, 
  { lang: 'zh-tw', country: 'my', active: false },

  // 台湾（日本語＋英語）
  { lang: 'ja', country: 'tw', active: false }, 
  { lang: 'en', country: 'tw', active: false },

  // メキシコ（日本語＋英語、中国語）
  { lang: 'ja', country: 'mx', active: false }, 
  { lang: 'en', country: 'mx', active: false }, 
  { lang: 'zh-cn', country: 'mx', active: false }, 
  { lang: 'zh-tw', country: 'mx', active: false },

  // アルゼンチン（日本語＋英語、ドイツ語）
  { lang: 'ja', country: 'ar', active: false }, 
  { lang: 'en', country: 'ar', active: false }, 
  { lang: 'de', country: 'ar', active: false },

  // イギリス（日本語＋スペイン語、中国語）
  { lang: 'ja', country: 'gb', active: false }, 
  { lang: 'es', country: 'gb', active: false }, 
  { lang: 'zh-cn', country: 'gb', active: false }, 
  { lang: 'zh-tw', country: 'gb', active: false },

  // イタリア（日本語＋英語、中国語）
  { lang: 'ja', country: 'it', active: false }, 
  { lang: 'en', country: 'it', active: false }, 
  { lang: 'zh-cn', country: 'it', active: false }, 
  { lang: 'zh-tw', country: 'it', active: false },

  // エジプト（日本語＋英語、ロシア語）
  { lang: 'ja', country: 'eg', active: false }, 
  { lang: 'en', country: 'eg', active: false }, 
  { lang: 'ru', country: 'eg', active: false },

  // オランダ（日本語＋英語、ドイツ語）
  { lang: 'ja', country: 'nl', active: false }, 
  { lang: 'en', country: 'nl', active: false }, 
  { lang: 'de', country: 'nl', active: false },

  // サウジアラビア（日本語＋英語、フランス語）
  { lang: 'ja', country: 'sa', active: false }, 
  { lang: 'en', country: 'sa', active: false }, 
  { lang: 'fr', country: 'sa', active: false },

  // スペイン（日本語＋英語、ドイツ語）
  { lang: 'ja', country: 'es', active: false }, 
  { lang: 'en', country: 'es', active: false }, 
  { lang: 'de', country: 'es', active: false },

  // ニュージーランド（日本語＋中国語、ドイツ語）
  { lang: 'ja', country: 'nz', active: false }, 
  { lang: 'zh-cn', country: 'nz', active: false }, 
  { lang: 'zh-tw', country: 'nz', active: false }, 
  { lang: 'de', country: 'nz', active: false },

  // 香港（日本語＋フランス語、ドイツ語）
  { lang: 'ja', country: 'hk', active: false }, 
  { lang: 'fr', country: 'hk', active: false }, 
  { lang: 'de', country: 'hk', active: false }
];

export const langCountryPairs = import.meta.env.DEV
  ? rawLangCountryPairs
  : rawLangCountryPairs.filter(pair => pair.active);

export const getBlogId = (lang: string) => {
  const blogIdMap: Record<string, string> = {
    ja:      import.meta.env.BLOG_ID_JA,
    en:      import.meta.env.BLOG_ID_EN,
    'zh-cn': import.meta.env.BLOG_ID_ZH_CN,
    'zh-tw': import.meta.env.BLOG_ID_ZH_TW,
    es:      import.meta.env.BLOG_ID_ES,
    fr:      import.meta.env.BLOG_ID_FR,
    de:      import.meta.env.BLOG_ID_DE,
    ru:      import.meta.env.BLOG_ID_RU,
  };
  return blogIdMap[lang] || import.meta.env.BLOG_ID_JA;
};
