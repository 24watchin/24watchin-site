// src/lib/info/aboutData.ts

// 1. jaフォルダに入れた日本語データを呼び出します（★ここを実際のファイル名に修正しました）
import { ja } from './ja/aboutData.ts';

// ▼ 今後、英語などのファイルを作ったら、先頭の「//」を消して追加していきます
// import { en } from './en/aboutData.ts';
// import { zhCn } from './zh-cn/aboutData.ts';

// 2. サイトに渡すための「まとめパッケージ」を作ります
export const aboutData = {
  ja: ja,
  // en: en,
  // 'zh-cn': zhCn,
} as const;

export type AboutDataKey = keyof typeof aboutData;
