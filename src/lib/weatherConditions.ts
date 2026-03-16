export function getWeatherCondition(code: number, lang: string = 'jp') {
  const conditions: Record<number, { jp: string; en: string }> = {
    1000: { jp: '晴れ', en: 'Clear' },
    1003: { jp: '一部くもり', en: 'Partly cloudy' },
    1006: { jp: 'くもり', en: 'Cloudy' },
    1009: { jp: '本曇り', en: 'Overcast' },
    1030: { jp: 'かすみ', en: 'Mist' },
    1063: { jp: '所によりにわか雨', en: 'Patchy rain possible' },
    1183: { jp: '小雨', en: 'Light rain' },
    1189: { jp: '中程度の雨', en: 'Moderate rain' },
    1195: { jp: '激しい雨', en: 'Heavy rain' },
    1213: { jp: '軽い雪', en: 'Light snow' },
    1219: { jp: '中程度の雪', en: 'Moderate snow' },
    1225: { jp: '大雪', en: 'Heavy snow' },
  };

  const condition = conditions[code];
  if (!condition) return lang === 'en' ? 'Unknown' : '不明';

  return lang === 'en' ? condition.en : condition.jp;
}
