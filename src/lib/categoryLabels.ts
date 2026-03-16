export const categoryLabelMap = {
  jp: {
    // (共通項目は維持)
    allCategories: [
      { slug: 'politics', label: '政治', keywords: ['政治'] },
      { slug: 'society', label: '社会', keywords: ['社会'] },
      { slug: 'international', label: '国際', keywords: ['国際'] },
      { slug: 'economy', label: '経済', keywords: ['経済', '財経'] },
      { slug: 'environment-energy', label: '環境・エネルギー', keywords: ['環境', 'エネルギー'] },
      { slug: 'business', label: 'ビジネス', keywords: ['ビジネス', '商業'] },
      { slug: 'technology-ai', label: 'テクノロジー・AI', keywords: ['テクノロジー', 'AI', '科技'] },
      { slug: 'entertainment', label: '文化・エンタメ', keywords: ['文化', 'エンタメ', '娯楽'] },
      { slug: 'sports', label: 'スポーツ', keywords: ['スポーツ', '体育'] },
      { slug: 'health-life', label: '健康・ライフ', keywords: ['健康', 'ライフ', '生活'] },
      { slug: 'traffic', label: '交通', keywords: ['交通'] },
      { slug: 'weather', label: '天気', keywords: ['天気', '気象'] },
    ],
  },
  // 他言語も同様に keywords を設定...
} as const;
