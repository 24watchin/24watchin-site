export function getWeatherCondition(code: number, lang: string = 'ja') {
  // 約50種類のすべての天気コードを網羅した完全版辞書です
  const conditions: Record<number, { jp: string; en: string }> = {
    1000: { jp: '晴れ', en: 'Clear' },
    1003: { jp: '一部くもり', en: 'Partly cloudy' },
    1006: { jp: 'くもり', en: 'Cloudy' },
    1009: { jp: '本曇り', en: 'Overcast' },
    1030: { jp: 'かすみ', en: 'Mist' },
    1063: { jp: '所によりにわか雨', en: 'Patchy rain possible' },
    1066: { jp: '所により雪', en: 'Patchy snow possible' },
    1069: { jp: '所によりみぞれ', en: 'Patchy sleet possible' },
    1072: { jp: '所により凍雨', en: 'Patchy freezing drizzle possible' },
    1087: { jp: '雷雨の可能性', en: 'Thundery outbreaks possible' },
    1114: { jp: '地ふぶき', en: 'Blowing snow' },
    1117: { jp: '吹雪', en: 'Blizzard' },
    1135: { jp: '霧', en: 'Fog' },
    1148: { jp: '氷霧', en: 'Freezing fog' },
    1150: { jp: '所により軽い霧雨', en: 'Patchy light drizzle' },
    1153: { jp: '軽い霧雨', en: 'Light drizzle' },
    1168: { jp: '凍るような霧雨', en: 'Freezing drizzle' },
    1171: { jp: '激しい凍雨', en: 'Heavy freezing drizzle' },
    1180: { jp: '所により小雨', en: 'Patchy light rain' },
    1183: { jp: '小雨', en: 'Light rain' },
    1186: { jp: '時折中程度の雨', en: 'Moderate rain at times' },
    1189: { jp: '中程度の雨', en: 'Moderate rain' },
    1192: { jp: '時折激しい雨', en: 'Heavy rain at times' },
    1195: { jp: '激しい雨', en: 'Heavy rain' },
    1198: { jp: '軽い凍雨', en: 'Light freezing rain' },
    1201: { jp: '中程度または激しい凍雨', en: 'Moderate or heavy freezing rain' },
    1204: { jp: '軽いみぞれ', en: 'Light sleet' },
    1207: { jp: '中程度または激しいみぞれ', en: 'Moderate or heavy sleet' },
    1210: { jp: '所により軽い雪', en: 'Patchy light snow' },
    1213: { jp: '軽い雪', en: 'Light snow' },
    1216: { jp: '所により中程度の雪', en: 'Patchy moderate snow' },
    1219: { jp: '中程度の雪', en: 'Moderate snow' },
    1222: { jp: '所により大雪', en: 'Patchy heavy snow' },
    1225: { jp: '大雪', en: 'Heavy snow' },
    1237: { jp: 'アイスペレット', en: 'Ice pellets' },
    1240: { jp: 'にわか雨', en: 'Light rain shower' },
    1243: { jp: '中程度または激しいにわか雨', en: 'Moderate or heavy rain shower' },
    1246: { jp: '猛烈な雨', en: 'Torrential rain shower' },
    1249: { jp: '軽いみぞれのにわか雪', en: 'Light sleet showers' },
    1252: { jp: '激しいみぞれのにわか雪', en: 'Moderate or heavy sleet showers' },
    1255: { jp: '軽い雪のにわか雪', en: 'Light snow showers' },
    1258: { jp: '激しい雪のにわか雪', en: 'Moderate or heavy snow showers' },
    1261: { jp: '軽い氷のにわか雨', en: 'Light showers of ice pellets' },
    1264: { jp: '激しい氷のにわか雨', en: 'Moderate or heavy showers of ice pellets' },
    1273: { jp: '所により雷雨', en: 'Patchy light rain with thunder' },
    1276: { jp: '中程度または激しい雷雨', en: 'Moderate or heavy rain with thunder' },
    1279: { jp: '所により雷雪', en: 'Patchy light snow with thunder' },
    1282: { jp: '中程度または激しい雷雪', en: 'Moderate or heavy snow with thunder' }
  };

  const condition = conditions[code];
  if (!condition) return lang === 'en' ? 'Unknown' : '不明';

  return lang === 'en' ? condition.en : condition.jp;
}
