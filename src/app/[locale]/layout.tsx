import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { JsonLd } from "@/components/JsonLd";
import { isValidLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

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
  return buildPageMetadata(locale);
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
    <>
      <JsonLd locale={locale as Locale} />
      <LocaleProvider locale={locale as Locale}>
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          lang={locale}
          className={`min-h-screen ${locale === "ar" ? "font-arabic" : ""}`}
        >
          {children}
        </div>
      </LocaleProvider>
    </>
  );
}
