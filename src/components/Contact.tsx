"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";
import CvDownload from "./CvDownload";

const contactLinks = [
  {
    key: "contact.email",
    href: "mailto:Nuwar.m.saeed@gmail.com",
    accent: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    key: "contact.phone",
    href: "tel:+963982418701",
    accent: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    key: "contact.behance",
    href: "https://www.behance.net/nuwwarsaeed",
    accent: false,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    ),
  },
  {
    key: "contact.location",
    href: "https://maps.google.com/?q=Damascus,+Syria",
    accent: false,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
] as const;

export default function Contact() {
  const { t } = useLocaleContext();

  return (
    <section id="contact" className="section-block section-block-alt">
      <AnimateIn className="section-shell">
        <SectionHeading
          label={t("contact.sectionLabel")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          align="center"
          className="mx-auto"
        />

        <p className="text-center text-[var(--muted)] mb-10 max-w-xl mx-auto">{t("contact.intro")}</p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
          {contactLinks.map(({ key, href, accent, icon, ...rest }) => (
            <a
              key={key}
              href={href}
              target={"external" in rest && rest.external ? "_blank" : undefined}
              rel={"external" in rest && rest.external ? "noopener noreferrer" : undefined}
              className={
                accent
                  ? "contact-card border-[var(--accent)]/40 bg-gradient-to-b from-[var(--accent-soft)] to-[var(--surface)] hover:text-white"
                  : "contact-card"
              }
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                  accent ? "bg-[var(--accent)] text-white" : "bg-[var(--bg)] text-[var(--accent)]"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icon}
                </svg>
              </span>
              <span className="font-medium text-white">{t(key)}</span>
            </a>
          ))}
        </div>

        <div className="max-w-lg mx-auto glass-card p-6 sm:p-8">
          <CvDownload />
        </div>
      </AnimateIn>
    </section>
  );
}
