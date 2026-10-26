// 每种语言一份完整词典，结构一样。改文案时九种语言一起改。
export type Item = { t: string; d: string };

export type Messages = {
  title: string;
  description: string;
  nav: { apps: string; webdav: string; language: string; followBrowser: string };
  hero: { badge: string; h1: string; lede: string; ctaApps: string; ctaWebdav: string };
  principles: { h2: string; items: [Item, Item, Item]; flip: Item };
  flow: { h2: string; lede: string; device: string; drive: string; webdav: string; or: string; server: string; serverNote: string };
  apps: {
    h2: string;
    lede: string;
    platforms: string;
    sync: string;
    soon: string;
    site: string;
    navill: { tagline: string; note: string };
    mimatory: { tagline: string; note: string };
    reicky: { tagline: string; note: string };
  };
  duties: { h2: string; lede: string; items: [Item, Item, Item, Item] };
  webdav: { h2: string; lede: string; r2: Item & { cta: string }; others: Item };
  footer: { meaning: string; license: string };
};
