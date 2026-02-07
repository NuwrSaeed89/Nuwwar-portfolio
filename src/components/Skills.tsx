"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";

const skillKeys: { nameKey: string; categoryKey: string }[] = [
  { nameKey: "WordPress", categoryKey: "CMS" },
  { nameKey: "PHP", categoryKey: "Backend" },
  { nameKey: "Custom Themes", categoryKey: "Development" },
  { nameKey: "Plugins", categoryKey: "Development" },
  { nameKey: "customCodes", categoryKey: "Development" },
  { nameKey: "WooCommerce", categoryKey: "E‑commerce" },
  { nameKey: "REST API", categoryKey: "API" },
  { nameKey: "Block Editor", categoryKey: "Gutenberg" },
  { nameKey: "Elementor", categoryKey: "Page Builder" },
  { nameKey: "Elementor Pro", categoryKey: "Page Builder" },
  { nameKey: "seoFriendly", categoryKey: "SEO" },
  { nameKey: "htmlCssJs", categoryKey: "Frontend" },
  { nameKey: "MySQL", categoryKey: "Database" },
];

export default function Skills() {
  const { t } = useLocaleContext();

  return (
    <section id="skills" className="py-16 px-4 sm:py-24 sm:px-6 bg-[var(--surface)]/50">
      <AnimateIn className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
          {t("skills.title")}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {skillKeys.map(({ nameKey, categoryKey }) => (
            <li
              key={nameKey}
              className="flex flex-wrap items-center gap-2 sm:gap-3 px-4 py-3.5 sm:py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] card-hover min-w-0"
            >
              <span
                className="w-2 h-2 rounded-full bg-[var(--wp)] shrink-0"
                aria-hidden
              />
              <span className="text-sm sm:text-base text-[var(--text)] min-w-0 break-words">
                {t(`skills.items.${nameKey}`)}
              </span>
              <span className="text-xs text-[var(--muted)] ml-auto shrink-0">
                {t(`skills.categories.${categoryKey}`)}
              </span>
            </li>
          ))}
        </ul>
      </AnimateIn>
    </section>
  );
}
