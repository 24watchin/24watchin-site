export function getWeatherCondition(code: number, lang: string = 'ja'): string {
  const conditions: Record<number, Record<string, string>> = {
    1000: { ja: '晴れ',           en: 'Clear',                      'zh-cn': '晴',        'zh-tw': '晴',        es: 'Despejado',          fr: 'Ensoleillé',         de: 'Klar',               ru: 'Ясно'                },
    1003: { ja: '晴れ時々くもり', en: 'Partly cloudy',              'zh-cn': '局部多云',  'zh-tw': '局部多雲',  es: 'Parcialmente nublado', fr: 'Partiellement nuageux', de: 'Teilweise bewölkt',  ru: 'Переменная облачность' },
    1006: { ja: 'くもり',         en: 'Cloudy',                     'zh-cn': '多云',      'zh-tw': '多雲',      es: 'Nublado',            fr: 'Nuageux',            de: 'Bewölkt',            ru: 'Облачно'             },
    1009: { ja: 'くもり',         en: 'Overcast',                   'zh-cn': '阴天',      'zh-tw': '陰天',      es: 'Cubierto',           fr: 'Couvert',            de: 'Bedeckt',            ru: 'Пасмурно'            },
    1030: { ja: 'かすみ',         en: 'Mist',                       'zh-cn': '薄雾',      'zh-tw': '薄霧',      es: 'Neblina',            fr: 'Brume',              de: 'Dunst',              ru: 'Туман'               },
    1063: { ja: '所により雨',     en: 'Patchy rain',                'zh-cn': '局部有雨',  'zh-tw': '局部有雨',  es: 'Lluvia dispersa',    fr: 'Pluie éparse',       de: 'Vereinzelt Regen',   ru: 'Местами дождь'       },
    1066: { ja: '所により雪',     en: 'Patchy snow',                'zh-cn': '局部有雪',  'zh-tw': '局部有雪',  es: 'Nieve dispersa',     fr: 'Neige éparse',       de: 'Vereinzelt Schnee',  ru: 'Местами снег'        },
    1069: { ja: '所によりみぞれ', en: 'Patchy sleet',               'zh-cn': '局部有雨夹雪', 'zh-tw': '局部有雨夾雪', es: 'Aguanieve dispersa', fr: 'Grésil épars',    de: 'Vereinzelt Schneeregen', ru: 'Местами мокрый снег' },
    1072: { ja: '所により凍雨',   en: 'Patchy freezing drizzle',    'zh-cn': '局部冻毛毛雨', 'zh-tw': '局部凍毛毛雨', es: 'Llovizna helada dispersa', fr: 'Bruine verglaçante éparse', de: 'Vereinzelt gefrierender Nieselregen', ru: 'Местами ледяная морось' },
    1087: { ja: '雷雨の恐れ',     en: 'Thundery outbreaks',         'zh-cn': '雷暴',      'zh-tw': '雷暴',      es: 'Tormentas eléctricas', fr: 'Orages possibles',  de: 'Gewitter möglich',   ru: 'Местами грозы'       },
    1114: { ja: '地ふぶき',       en: 'Blowing snow',               'zh-cn': '吹雪',      'zh-tw': '吹雪',      es: 'Nieve soplada',      fr: 'Neige chassée',      de: 'Treibschnee',        ru: 'Метель'              },
    1117: { ja: '吹雪',           en: 'Blizzard',                   'zh-cn': '暴风雪',    'zh-tw': '暴風雪',    es: 'Ventisca',           fr: 'Blizzard',           de: 'Schneesturm',        ru: 'Буран'               },
    1135: { ja: '霧',             en: 'Fog',                        'zh-cn': '雾',        'zh-tw': '霧',        es: 'Niebla',             fr: 'Brouillard',         de: 'Nebel',              ru: 'Туман'               },
    1147: { ja: '氷霧',           en: 'Freezing fog',               'zh-cn': '冻雾',      'zh-tw': '凍霧',      es: 'Niebla helada',      fr: 'Brouillard givrant', de: 'Gefrierender Nebel', ru: 'Морозный туман'      },
    1150: { ja: '所により霧雨',   en: 'Patchy light drizzle',       'zh-cn': '局部小毛毛雨', 'zh-tw': '局部小毛毛雨', es: 'Llovizna ligera dispersa', fr: 'Bruine légère éparse', de: 'Vereinzelt leichter Nieselregen', ru: 'Местами морось'  },
    1153: { ja: '霧雨',           en: 'Light drizzle',              'zh-cn': '毛毛雨',    'zh-tw': '毛毛雨',    es: 'Llovizna ligera',    fr: 'Bruine légère',      de: 'Leichter Nieselregen', ru: 'Морось'             },
    1168: { ja: '凍るような霧雨', en: 'Freezing drizzle',           'zh-cn': '冻毛毛雨',  'zh-tw': '凍毛毛雨',  es: 'Llovizna helada',    fr: 'Bruine verglaçante', de: 'Gefrierender Nieselregen', ru: 'Ледяная морось'   },
    1171: { ja: '激しい凍雨',     en: 'Heavy freezing drizzle',     'zh-cn': '大冻毛毛雨', 'zh-tw': '大凍毛毛雨', es: 'Llovizna helada intensa', fr: 'Forte bruine verglaçante', de: 'Starker gefrierender Nieselregen', ru: 'Сильная ледяная морось' },
    1180: { ja: '所により小雨',   en: 'Patchy light rain',          'zh-cn': '局部小雨',  'zh-tw': '局部小雨',  es: 'Lluvia ligera dispersa', fr: 'Pluie légère éparse', de: 'Vereinzelt leichter Regen', ru: 'Местами небольшой дождь' },
    1183: { ja: '小雨',           en: 'Light rain',                 'zh-cn': '小雨',      'zh-tw': '小雨',      es: 'Lluvia ligera',      fr: 'Pluie légère',       de: 'Leichter Regen',     ru: 'Небольшой дождь'     },
    1186: { ja: '時々雨',         en: 'Moderate rain at times',     'zh-cn': '时有中雨',  'zh-tw': '時有中雨',  es: 'Lluvia moderada ocasional', fr: 'Pluie modérée par moments', de: 'Zeitweise mäßiger Regen', ru: 'Временами умеренный дождь' },
    1189: { ja: '雨',             en: 'Moderate rain',              'zh-cn': '中雨',      'zh-tw': '中雨',      es: 'Lluvia moderada',    fr: 'Pluie modérée',      de: 'Mäßiger Regen',      ru: 'Умеренный дождь'     },
    1192: { ja: '時々強い雨',     en: 'Heavy rain at times',        'zh-cn': '时有大雨',  'zh-tw': '時有大雨',  es: 'Lluvia intensa ocasional', fr: 'Pluie forte par moments', de: 'Zeitweise starker Regen', ru: 'Временами сильный дождь' },
    1195: { ja: '強い雨',         en: 'Heavy rain',                 'zh-cn': '大雨',      'zh-tw': '大雨',      es: 'Lluvia intensa',     fr: 'Pluie forte',        de: 'Starker Regen',      ru: 'Сильный дождь'       },
    1198: { ja: '軽い凍雨',       en: 'Light freezing rain',        'zh-cn': '小冻雨',    'zh-tw': '小凍雨',    es: 'Lluvia helada ligera', fr: 'Pluie verglaçante légère', de: 'Leichter gefrierender Regen', ru: 'Небольшой ледяной дождь' },
    1201: { ja: '激しい凍雨',     en: 'Heavy freezing rain',        'zh-cn': '大冻雨',    'zh-tw': '大凍雨',    es: 'Lluvia helada intensa', fr: 'Pluie verglaçante forte', de: 'Starker gefrierender Regen', ru: 'Сильный ледяной дождь' },
    1204: { ja: 'みぞれ',         en: 'Light sleet',                'zh-cn': '小雨夹雪',  'zh-tw': '小雨夾雪',  es: 'Aguanieve ligera',   fr: 'Grésil léger',       de: 'Leichter Schneeregen', ru: 'Небольшой мокрый снег' },
    1207: { ja: '激しいみぞれ',   en: 'Heavy sleet',                'zh-cn': '大雨夹雪',  'zh-tw': '大雨夾雪',  es: 'Aguanieve intensa',  fr: 'Grésil fort',        de: 'Starker Schneeregen', ru: 'Сильный мокрый снег'  },
    1210: { ja: '所により小雪',   en: 'Patchy light snow',          'zh-cn': '局部小雪',  'zh-tw': '局部小雪',  es: 'Nieve ligera dispersa', fr: 'Neige légère éparse', de: 'Vereinzelt leichter Schnee', ru: 'Местами небольшой снег' },
    1213: { ja: '小雪',           en: 'Light snow',                 'zh-cn': '小雪',      'zh-tw': '小雪',      es: 'Nieve ligera',       fr: 'Neige légère',       de: 'Leichter Schnee',    ru: 'Небольшой снег'      },
    1216: { ja: '所により雪',     en: 'Patchy moderate snow',       'zh-cn': '局部中雪',  'zh-tw': '局部中雪',  es: 'Nieve moderada dispersa', fr: 'Neige modérée éparse', de: 'Vereinzelt mäßiger Schnee', ru: 'Местами умеренный снег' },
    1219: { ja: '雪',             en: 'Moderate snow',              'zh-cn': '中雪',      'zh-tw': '中雪',      es: 'Nieve moderada',     fr: 'Neige modérée',      de: 'Mäßiger Schnee',     ru: 'Умеренный снег'      },
    1222: { ja: '所により大雪',   en: 'Patchy heavy snow',          'zh-cn': '局部大雪',  'zh-tw': '局部大雪',  es: 'Nieve intensa dispersa', fr: 'Neige forte éparse', de: 'Vereinzelt starker Schnee', ru: 'Местами сильный снег' },
    1225: { ja: '大雪',           en: 'Heavy snow',                 'zh-cn': '大雪',      'zh-tw': '大雪',      es: 'Nieve intensa',      fr: 'Neige forte',        de: 'Starker Schnee',     ru: 'Сильный снег'        },
    1237: { ja: 'あられ',         en: 'Ice pellets',                'zh-cn': '冰粒',      'zh-tw': '冰粒',      es: 'Granizo pequeño',    fr: 'Grêle fine',         de: 'Eiskörner',          ru: 'Ледяная крупа'       },
    1240: { ja: 'にわか雨',       en: 'Light rain shower',          'zh-cn': '阵雨',      'zh-tw': '陣雨',      es: 'Chubasco ligero',    fr: 'Averse légère',      de: 'Leichter Regenschauer', ru: 'Ливень небольшой'   },
    1243: { ja: '強いにわか雨',   en: 'Heavy rain shower',          'zh-cn': '强阵雨',    'zh-tw': '強陣雨',    es: 'Chubasco intenso',   fr: 'Averse forte',       de: 'Starker Regenschauer', ru: 'Сильный ливень'      },
    1246: { ja: '猛烈な雨',       en: 'Torrential rain shower',     'zh-cn': '暴雨',      'zh-tw': '暴雨',      es: 'Aguacero torrencial', fr: 'Pluie torrentielle', de: 'Starkregen',         ru: 'Проливной дождь'     },
    1249: { ja: 'みぞれのにわか雪', en: 'Light sleet showers',      'zh-cn': '小阵雨夹雪', 'zh-tw': '小陣雨夾雪', es: 'Chubasco de aguanieve ligero', fr: 'Averse de grésil légère', de: 'Leichte Schneeregenschauer', ru: 'Небольшие ливни с мокрым снегом' },
    1252: { ja: '激しいみぞれのにわか雪', en: 'Heavy sleet showers', 'zh-cn': '强阵雨夹雪', 'zh-tw': '強陣雨夾雪', es: 'Chubasco de aguanieve intenso', fr: 'Averse de grésil forte', de: 'Starke Schneeregenschauer', ru: 'Сильные ливни с мокрым снегом' },
    1255: { ja: '雪のにわか雪',   en: 'Light snow showers',        'zh-cn': '小阵雪',    'zh-tw': '小陣雪',    es: 'Chubasco de nieve ligero', fr: 'Averse de neige légère', de: 'Leichte Schneeschauer', ru: 'Небольшой снегопад'  },
    1258: { ja: '激しい雪のにわか雪', en: 'Heavy snow showers',     'zh-cn': '强阵雪',    'zh-tw': '強陣雪',    es: 'Chubasco de nieve intenso', fr: 'Averse de neige forte', de: 'Starke Schneeschauer', ru: 'Сильный снегопад'   },
    1261: { ja: '軽いあられ',     en: 'Light ice pellet showers',  'zh-cn': '小冰粒阵',  'zh-tw': '小冰粒陣',  es: 'Chubasco de granizo pequeño ligero', fr: 'Averse de grêle fine légère', de: 'Leichte Eiskörnerschauer', ru: 'Небольшой ледяной дождь' },
    1264: { ja: '激しいあられ',   en: 'Heavy ice pellet showers',  'zh-cn': '强冰粒阵',  'zh-tw': '強冰粒陣',  es: 'Chubasco de granizo pequeño intenso', fr: 'Averse de grêle fine forte', de: 'Starke Eiskörnerschauer', ru: 'Сильный ледяной дождь' },
    1273: { ja: '雷を伴う雨',     en: 'Rain with thunder',         'zh-cn': '雷阵雨',    'zh-tw': '雷陣雨',    es: 'Lluvia con truenos', fr: 'Pluie avec tonnerre', de: 'Regen mit Gewitter', ru: 'Дождь с грозой'      },
    1276: { ja: '激しい雷雨',     en: 'Heavy rain with thunder',   'zh-cn': '强雷阵雨',  'zh-tw': '強雷陣雨',  es: 'Lluvia intensa con truenos', fr: 'Forte pluie avec tonnerre', de: 'Starker Regen mit Gewitter', ru: 'Сильная гроза'  },
    1279: { ja: '雷を伴う雪',     en: 'Snow with thunder',         'zh-cn': '雷雪',      'zh-tw': '雷雪',      es: 'Nieve con truenos',  fr: 'Neige avec tonnerre', de: 'Schnee mit Gewitter', ru: 'Снег с грозой'      },
    1282: { ja: '激しい雷雪',     en: 'Heavy snow with thunder',   'zh-cn': '强雷雪',    'zh-tw': '強雷雪',    es: 'Nieve intensa con truenos', fr: 'Forte neige avec tonnerre', de: 'Starker Schnee mit Gewitter', ru: 'Сильный снег с грозой' },
  };

  const condition = conditions[code];
  if (!condition) {
    const unknownMap: Record<string, string> = {
      ja: '不明', en: 'Unknown', 'zh-cn': '未知', 'zh-tw': '未知',
      es: 'Desconocido', fr: 'Inconnu', de: 'Unbekannt', ru: 'Неизвестно',
    };
    return unknownMap[lang] || 'Unknown';
  }
  return condition[lang] || condition['en'] || 'Unknown';
}

// ▼ 言語ごとの単位設定
export function getUnitSystem(lang: string): { isImperial: boolean; tempUnit: string; windUnit: string } {
  const isImperial = lang === 'en';
  return {
    isImperial,
    tempUnit: isImperial ? '°F' : '°C',
    windUnit: isImperial ? 'mph' : 'km/h',
  };
}

// ▼ 気温変換
export function convertTemp(tempC: number, isImperial: boolean): number {
  return isImperial ? Math.round(tempC * 9 / 5 + 32) : Math.round(tempC);
}

// ▼ 風速変換
export function convertWind(windKph: number, isImperial: boolean): number {
  return isImperial ? Math.round(windKph * 0.621371) : Math.round(windKph);
}
