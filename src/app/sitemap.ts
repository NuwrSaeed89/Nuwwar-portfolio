import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}/${loc}`])
      ),
    },
  }));
}
