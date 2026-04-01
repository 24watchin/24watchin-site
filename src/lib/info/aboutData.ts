// src/lib/info/aboutData.ts

// 1. jaフォルダに入れた日本語データを呼び出します
import { ja } from './ja/about.ts';

// ▼ 他の言語ファイルを作ったら、先頭の「//」を消して有効にします
// import { en } from './en/about.ts';
// import { zhCn } from './zh-cn/about.ts';

// 2. サイトに渡すための「まとめパッケージ」を作ります
export const aboutData = {
  ja: ja,
  // en: en,
  // 'zh-cn': zhCn,
} as const;

export type AboutDataKey = keyof typeof aboutData;
