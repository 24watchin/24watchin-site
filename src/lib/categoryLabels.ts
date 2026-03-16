// Header.astroが正常に動くよう、全ての翻訳データを1つの大きな地図（Map）にまとめました
export const categoryLabelMap = {
  jp: {
    countryName: 'JAPAN',
    languageName: '日本語',
    searchPlaceholder: '検索',
    searchAriaLabel: '検索',
    categoryBarAriaLabel: 'カテゴリ',
    // メインメニュー用の10件
    headerCategories: [
      { slug: 'politics', label: '政治' },
      { slug: 'society', label: '社会' },
      { slug: 'international', label: '国際' },
      { slug: 'economy', label: '経済' },
      { slug: 'environment-energy', label: '環境・エネルギー' },
      { slug: 'business', label: 'ビジネス' },
      { slug: 'technology-ai', label: 'テクノロジー・AI' },
      { slug: 'entertainment', label: '文化・エンタメ' },
      { slug: 'sports', label: 'スポーツ' },
      { slug: 'health-life', label: '健康・ライフ' },
    ],
    // 全てのカテゴリ
    allCategories: [
      { slug: 'politics', label: '政治' }, { slug: 'society', label: '社会' },
      { slug: 'international', label: '国際' }, { slug: 'economy', label: '経済' },
      { slug: 'environment-energy', label: '環境・エネルギー' }, { slug: 'business', label: 'ビジネス' },
      { slug: 'technology-ai', label: 'テクノロジー・AI' }, { slug: 'entertainment', label: '文化・エンタメ' },
      { slug: 'sports', label: 'スポーツ' }, { slug: 'health-life', label: '健康・ライフ' },
      { slug: 'traffic', label: '交通' }, { slug: 'weather', label: '天気' },
    ],
  },
  en: {
    countryName: 'JAPAN',
    languageName: 'English',
    searchPlaceholder: 'Search',
    searchAriaLabel: 'Search',
    categoryBarAriaLabel: 'Categories',
    headerCategories: [
      { slug: 'politics', label: 'Politics' },
      { slug: 'society', label: 'Society' },
      { slug: 'international', label: 'World' },
      { slug: 'economy', label: 'Economy' },
      { slug: 'environment-energy', label: 'Environment & Energy' },
      { slug: 'business', label: 'Business' },
      { slug: 'technology-ai', label: 'Technology & AI' },
      { slug: 'entertainment', label: 'Culture & Entertainment' },
      { slug: 'sports', label: 'Sports' },
      { slug: 'health-life', label: 'Health & Lifestyle' },
    ],
    allCategories: [
      { slug: 'politics', label: 'Politics' }, { slug: 'society', label: 'Society' },
      { slug: 'international', label: 'World' }, { slug: 'economy', label: 'Economy' },
      { slug: 'environment-energy', label: 'Environment & Energy' }, { slug: 'business', label: 'Business' },
      { slug: 'technology-ai', label: 'Technology & AI' }, { slug: 'entertainment', label: 'Culture & Entertainment' },
      { slug: 'sports', label: 'Sports' }, { slug: 'health-life', label: 'Health & Lifestyle' },
      { slug: 'traffic', label: 'Transportation' }, { slug: 'weather', label: 'Weather' },
    ],
  },
  // 以下、メモに基づき他言語も追加（zh-cn, zh-tw, es, de, fr, ru）
  'zh-cn': {
    countryName: 'JAPAN', languageName: '简体中文', searchPlaceholder: '搜索', searchAriaLabel: '搜索', categoryBarAriaLabel: '分类',
    headerCategories: [
      { slug: 'politics', label: '时政' }, { slug: 'society', label: '社会' }, { slug: 'international', label: '国际' }, { slug: 'economy', label: '财经' },
      { slug: 'environment-energy', label: '环境・能源' }, { slug: 'business', label: '商业' }, { slug: 'technology-ai', label: '科技・AI' },
      { slug: 'entertainment', label: '文娱' }, { slug: 'sports', label: '体育' }, { slug: 'health-life', label: '健康・生活' },
    ],
    allCategories: [
      { slug: 'politics', label: '时政' }, { slug: 'society', label: '社会' }, { slug: 'international', label: '国际' }, { slug: 'economy', label: '财经' },
      { slug: 'environment-energy', label: '环境・能源' }, { slug: 'business', label: '商业' }, { slug: 'technology-ai', label: '科技・AI' },
      { slug: 'entertainment', label: '文娱' }, { slug: 'sports', label: '体育' }, { slug: 'health-life', label: '健康・生活' },
      { slug: 'traffic', label: '交通' }, { slug: 'weather', label: '天气' },
    ],
  },
  // ※ ここに zh-tw, es, de, fr, ru も同様の形式で続きます
} as const;

export type SiteLanguageKey = keyof typeof categoryLabelMap;
