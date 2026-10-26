// 语言：localStorage（语言菜单选的）> 浏览器语言（按主语言匹配）> 中文。
import type { Messages } from "./types.ts";
import { zh } from "./zh.ts";
import { en } from "./en.ts";
import { es } from "./es.ts";
import { pt } from "./pt.ts";
import { ru } from "./ru.ts";
import { ja } from "./ja.ts";
import { de } from "./de.ts";
import { fr } from "./fr.ts";
import { id } from "./id.ts";

export type Lang = "zh" | "en" | "es" | "pt" | "ru" | "ja" | "de" | "fr" | "id";

export const LANGS: Record<Lang, { name: string; locale: string; messages: Messages }> = {
  zh: { name: "简体中文", locale: "zh-CN", messages: zh },
  en: { name: "English", locale: "en", messages: en },
  es: { name: "Español", locale: "es", messages: es },
  pt: { name: "Português", locale: "pt", messages: pt },
  ru: { name: "Русский", locale: "ru", messages: ru },
  ja: { name: "日本語", locale: "ja", messages: ja },
  de: { name: "Deutsch", locale: "de", messages: de },
  fr: { name: "Français", locale: "fr", messages: fr },
  id: { name: "Bahasa Indonesia", locale: "id", messages: id },
};

const KEY = "ydiyr-lang";
const isLang = (v: unknown): v is Lang => typeof v === "string" && v in LANGS;

export function storedLang(): Lang | null {
  try {
    const v = localStorage.getItem(KEY);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
}

export function detectLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  const stored = storedLang();
  if (stored) return stored;
  const list = navigator.languages?.length ? navigator.languages : [navigator.language ?? ""];
  for (const tag of list) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }
  return "zh";
}

/** null = 跟随浏览器 */
export function storeLang(l: Lang | null) {
  try {
    if (l) localStorage.setItem(KEY, l);
    else localStorage.removeItem(KEY);
  } catch {
    /* 没有 localStorage */
  }
}

export function applyLang(l: Lang) {
  const m = LANGS[l].messages;
  document.documentElement.lang = LANGS[l].locale;
  document.title = m.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", m.description);
}
