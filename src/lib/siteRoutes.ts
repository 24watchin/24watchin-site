// src/lib/siteRoutes.ts

// ▼ 作成する「言語」と「国」の組み合わせリスト
// 全て active: true に設定しました。これで全URLが生成されます。
const rawLangCountryPairs = [
  // 日本
  { lang: 'ja', country: 'jp', active: true },
  { lang: 'en', country: 'jp', active: true },
  { lang: 'zh-cn', country: 'jp', active: true },
  { lang: 'zh-tw', country: 'jp', active: true },
  { lang: 'es', country: 'jp', active: true },
  { lang: 'fr', country: 'jp', active: true },
  { lang: 'de', country: 'jp', active: true },
  { lang: 'ru', country: 'jp', active: true },

  // UAE
  { lang: 'ja', country: 'ae', active: true }, 
  { lang: 'en', country: 'ae', active: true }, 
  { lang: 'zh-cn', country: 'ae', active: true }, 
  { lang: 'zh-tw', country: 'ae', active: true },

  // アメリカ
  { lang: 'ja', country: 'us', active: true }, 
  { lang: 'es', country: 'us', active: true }, 
  { lang: 'zh-cn', country: 'us', active: true }, 
  { lang: 'zh-tw', country: 'us', active: true },

  // オーストラリア
  { lang: 'ja', country: 'au', active: true }, 
  { lang: 'zh-cn', country: 'au', active: true }, 
  { lang: 'zh-tw', country: 'au', active: true }, 
  { lang: 'es', country: 'au', active: true },

  // カナダ
  { lang: 'ja', country: 'ca', active: true }, 
  { lang: 'zh-cn', country: 'ca', active: true }, 
  { lang: 'zh-tw', country: 'ca', active: true }, 
  { lang: 'es', country: 'ca', active: true },

  // シンガポール
  { lang: 'ja', country: 'sg', active: true }, 
  { lang: 'fr', country: 'sg', active: true }, 
  { lang: 'de', country: 'sg', active: true },

  // ドイツ
  { lang: 'ja', country: 'de', active: true }, 
  { lang: 'en', country: 'de', active: true }, 
  { lang: 'ru', country: 'de', active: true },

  // ベトナム
  { lang: 'ja', country: 'vn', active: true }, 
  { lang: 'en', country: 'vn', active: true }, 
  { lang: 'zh-cn', country: 'vn', active: true }, 
  { lang: 'zh-tw', country: 'vn', active: true },

  // マレーシア
  { lang: 'ja', country: 'my', active: true }, 
  { lang: 'en', country: 'my', active: true }, 
  { lang: 'zh-cn', country: 'my', active: true }, 
  { lang: 'zh-tw', country: 'my', active: true },

  // 台湾
  { lang: 'ja', country: 'tw', active: true }, 
  { lang: 'en', country: 'tw', active: true },

  // メキシコ
  { lang: 'ja', country: 'mx', active: true }, 
  { lang: 'en', country: 'mx', active: true }, 
  { lang: 'zh-cn', country: 'mx', active: true }, 
  { lang: 'zh-tw', country: 'mx', active: true },

  // アルゼンチン
  { lang: 'ja', country: 'ar', active: true }, 
  { lang: 'en', country: 'ar', active: true }, 
  { lang: 'de', country: 'ar', active: true },

  // イギリス
  { lang: 'ja', country: 'gb', active: true }, 
  { lang: 'es', country: 'gb', active: true }, 
  { lang: 'zh-cn', country: 'gb', active: true }, 
  { lang: 'zh-tw', country: 'gb', active: true },

  // イタリア
  { lang: 'ja', country: 'it', active: true }, 
  { lang: 'en', country: 'it', active: true }, 
  { lang: 'zh-cn', country: 'it', active: true }, 
  { lang: 'zh-tw', country: 'it', active: true },

  // エジプト
  { lang: 'ja', country: 'eg', active: true }, 
  { lang: 'en', country: 'eg', active: true }, 
  { lang: 'ru', country: 'eg', active: true },

  // オランダ
  { lang: 'ja', country: 'nl', active: true }, 
  { lang: 'en', country: 'nl', active: true }, 
  { lang: 'de', country: 'nl', active: true },

  // サウジアラビア
  { lang: 'ja', country: 'sa', active: true }, 
  { lang: 'en', country: 'sa', active: true }, 
  { lang: 'fr', country: 'sa', active: true },

  // スペイン
  { lang: 'ja', country: 'es', active: true }, 
  { lang: 'en', country: 'es', active: true }, 
  { lang: 'de', country: 'es', active: true },

  // ニュージーランド
  { lang: 'ja', country: 'nz', active: true }, 
  { lang: 'zh-cn', country: 'nz', active: true }, 
  { lang: 'zh-tw', country: 'nz', active: true }, 
  { lang: 'de', country: 'nz', active: true },

  // 香港
  { lang: 'ja', country: 'hk', active: true }, 
  { lang: 'fr', country: 'hk', active: true }, 
  { lang: 'de', country: 'hk', active: true }
];

// ▼ 全て公開設定にしたため、本番環境でも全てのページが生成されます
export const langCountryPairs = rawLangCountryPairs;

// ▼ 各言語がどのBloggerを見るべきかを決める設定
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
