import {
  buildPersonJsonLd,
  buildProfessionalServiceJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export function JsonLd({ locale }: { locale: Locale }) {
  const graphs = [
    buildPersonJsonLd(locale),
    buildWebSiteJsonLd(locale),
    buildProfessionalServiceJsonLd(locale),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
