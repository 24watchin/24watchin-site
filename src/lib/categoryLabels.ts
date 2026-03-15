export const categoryLabelMap = {
  jp: {
    countryName: 'JAPAN',
    languageName: '日本語',
    searchPlaceholder: '検索',
    searchAriaLabel: '検索',
    categoryBarAriaLabel: 'カテゴリ',

    allCategories: [
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
      { slug: 'traffic', label: '交通' },
      { slug: 'weather', label: '天気' },
    ],

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
  },

  en: {
    countryName: 'JAPAN',
    languageName: 'English',
    searchPlaceholder: 'Search',
    searchAriaLabel: 'Search',
    categoryBarAriaLabel: 'Categories',

    allCategories: [
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
      { slug: 'traffic', label: 'Traffic' },
      { slug: 'weather', label: 'Weather' },
    ],

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
  },
} as const;

export type SiteLanguageKey = keyof typeof categoryLabelMap;
