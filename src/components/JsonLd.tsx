import {
  buildPersonJsonLd,
  buildProfessionalServiceJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";

function toGraphNode<T extends Record<string, unknown>>(schema: T) {
  const { "@context": _context, ...node } = schema;
  return node;
}

export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      toGraphNode(buildPersonJsonLd(locale)),
      toGraphNode(buildWebSiteJsonLd(locale)),
      toGraphNode(buildProfessionalServiceJsonLd(locale)),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
