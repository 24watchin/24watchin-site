export const categoryLabelMap = {
  jp: {
    countryName: 'JAPAN',
    languageName: '日本語',
    searchPlaceholder: '検索',
    searchAriaLabel: '検索',
    categoryBarAriaLabel: 'カテゴリ',

    // 全カテゴリ
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

    // ヘッダーに出すカテゴリだけ
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
} as const;

export type SiteLanguageKey = keyof typeof categoryLabelMap;
