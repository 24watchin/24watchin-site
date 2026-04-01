// src/lib/info/aboutData.ts

// 1. jaフォルダに移動した日本語データを呼び出します
import { ja } from './ja/about.ts';

// ▼ 今後、英語などのファイルを作ったら、先頭の「//」を消して追加していきます
// import { en } from './en/about.ts';
// import { zhCn } from './zh-cn/about.ts';

// 2. サイトに渡すための「まとめパッケージ」を作ります
export const aboutData = {
  ja: ja,
  // en: en,
  // 'zh-cn': zhCn,
} as const;

export type AboutDataKey = keyof typeof aboutData;
