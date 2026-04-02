import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { isValidLocale, type Locale } from "@/i18n/config";

const titles: Record<Locale, string> = {
  en: "Nuwwar Saeed | WordPress Developer",
  ar: "نوار سعيد | مطوّر ووردبريس",
};
const descriptions: Record<Locale, string> = {
  en: "Portfolio of Nuwwar Saeed — WordPress developer specializing in themes, plugins, and custom solutions.",
  ar: "معرض أعمال نوار سعيد — مطوّر ووردبريس متخصص في القوالب والإضافات والحلول المخصصة.",
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
  return {
    title: titles[locale],
    description: descriptions[locale],
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
