import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { CONTACT } from "@/cv/cvData";
import { SITE_URL } from "@/lib/site";

export { SITE_URL };

const titles: Record<Locale, string> = {
  en: "Nuwwar Saeed | Senior Full Stack Developer — Flutter, ASP.NET & WordPress",
  ar: "نوار سعيد | مطوّرة Full Stack أولى — Flutter وASP.NET وووردبريس",
};

const descriptions: Record<Locale, string> = {
  en: "Portfolio of Nuwwar Saeed, Senior Full Stack Developer with 10+ years in Flutter, ASP.NET Core, Laravel, and WordPress. Web, mobile, and enterprise solutions. Download CV and view projects.",
  ar: "معرض أعمال نوار سعيد، مطوّرة Full Stack أولى بخبرة 10+ سنوات في Flutter وASP.NET Core وLaravel وووردبريس. حلول ويب وموبايل ومؤسسات. سيرة ذاتية ومشاريع.",
};

const keywords: Record<Locale, string[]> = {
  en: [
    "Nuwwar Saeed",
    "Full Stack Developer",
    "Senior Flutter Developer",
    "WordPress Developer",
    "ASP.NET Core developer",
    "Laravel developer",
    "portfolio",
    "software engineer Syria",
    "remote developer",
    "BLoC",
    "GetX",
    "WooCommerce",
    "REST API",
  ],
  ar: [
    "نوار سعيد",
    "مطوّرة Full Stack",
    "مطوّرة Flutter",
    "مطوّرة ووردبريس",
    "ASP.NET Core",
    "معرض أعمال",
    "سيرة ذاتية",
    "مطوّرة برمجيات",
  ],
};

export function getSiteTitle(locale: Locale): string {
  return titles[locale];
}

export function getSiteDescription(locale: Locale): string {
  return descriptions[locale];
}

export function localePath(locale: Locale): string {
  return `${SITE_URL}/${locale}`;
}

export function buildPageMetadata(locale: Locale): Metadata {
  const title = getSiteTitle(locale);
  const description = getSiteDescription(locale);
  const url = localePath(locale);
  const ogLocale = locale === "ar" ? "ar_SY" : "en_US";
  const alternateLocale = locale === "ar" ? "en_US" : "ar_SY";

  const languageAlternates = Object.fromEntries(
    locales.map((loc) => [loc, localePath(loc)])
  ) as Record<string, string>;
  languageAlternates["x-default"] = localePath("en");

  return {
    title,
    description,
    keywords: keywords[locale],
    authors: [{ name: "Nuwwar Saeed", url: SITE_URL }],
    creator: "Nuwwar Saeed",
    publisher: "Nuwwar Saeed",
    category: "technology",
    alternates: {
      canonical: url,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url,
      siteName: "Nuwwar Saeed Portfolio",
      title,
      description,
      images: [
        {
          url: "/assets/3.png",
          width: 1200,
          height: 630,
          alt: "Nuwwar Saeed — Senior Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/3.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildPersonJsonLd(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isAr ? "نوار سعيد" : "Nuwwar Saeed",
    jobTitle: isAr ? "مطوّرة Full Stack أولى" : "Senior Full Stack Developer",
    url: localePath(locale),
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    image: `${SITE_URL}/assets/3.png`,
    sameAs: [CONTACT.behanceUrl, localePath("en"), localePath("ar")],
    knowsAbout: [
      "Flutter",
      "Dart",
      "BLoC",
      "GetX",
      "ASP.NET Core",
      "C#",
      "Laravel",
      "PHP",
      "WordPress",
      "WooCommerce",
      "REST API",
      "PostgreSQL",
      "MySQL",
    ],
    knowsLanguage: ["ar", "en", "fr"],
    worksFor: {
      "@type": "Organization",
      name: isAr ? "عمل حر / مستقلة" : "Freelance / Independent",
    },
  };
}

export function buildWebSiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "ar" ? "معرض أعمال نوار سعيد" : "Nuwwar Saeed Portfolio",
    url: SITE_URL,
    inLanguage: [locale, locale === "en" ? "ar" : "en"],
    author: {
      "@type": "Person",
      name: locale === "ar" ? "نوار سعيد" : "Nuwwar Saeed",
    },
  };
}

export function buildProfessionalServiceJsonLd(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: isAr ? "نوار سعيد — تطوير برمجيات" : "Nuwwar Saeed — Software Development",
    url: localePath(locale),
    image: `${SITE_URL}/assets/3.png`,
    description: getSiteDescription(locale),
    areaServed: "Worldwide",
    serviceType: [
      "Full Stack Development",
      "Flutter Mobile Development",
      "WordPress Development",
      "ASP.NET Core Development",
    ],
  };
}
