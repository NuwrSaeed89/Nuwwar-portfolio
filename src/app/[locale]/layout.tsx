import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { isValidLocale, type Locale } from "@/i18n/config";

const titles: Record<Locale, string> = {
  en: "Nuwwar Saeed | Full Stack Developer",
  ar: "نوار سعيد | مطوّر Full Stack",
};
const descriptions: Record<Locale, string> = {
  en: "Portfolio of Nuwwar Saeed — Full Stack developer building web, mobile, and WordPress solutions.",
  ar: "معرض أعمال نوار سعيد — مطوّر Full Stack للويب وFlutter وووردبريس والحلول المخصصة.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!isValidLocale(locale)) return {};
  const title = titles[locale];
  const description = descriptions[locale];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://nuwwar-portfolio.vercel.app/${locale}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isValidLocale(locale)) notFound();

  return (
    <LocaleProvider locale={locale as Locale}>
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        lang={locale}
        className={`min-h-screen ${locale === "ar" ? "font-arabic" : ""}`}
      >
        {children}
      </div>
    </LocaleProvider>
  );
}
