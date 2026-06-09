import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export type CvLang = "en" | "ar";

export const CONTACT = {
  email: "Nuwar.m.saeed@gmail.com",
  phone: "+963 982 418 701",
  phoneTel: "+963982418701",
  behanceUrl: "https://www.behance.net/nuwwarsaeed",
} as const;

import { SITE_URL } from "@/lib/site";

/** Public portfolio URL matching the CV language. */
export function getPortfolioUrl(lang: CvLang): string {
  return `${SITE_URL}/${lang}`;
}

export function getCvMessages(lang: CvLang) {
  return lang === "en" ? en : ar;
}
