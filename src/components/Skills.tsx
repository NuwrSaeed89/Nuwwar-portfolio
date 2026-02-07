"use client";

import { useLocaleContext } from "@/context/LocaleContext";

const skillKeys: { nameKey: string; categoryKey: string }[] = [
  { nameKey: "WordPress", categoryKey: "CMS" },
  { nameKey: "PHP", categoryKey: "Backend" },
  { nameKey: "Custom Themes", categoryKey: "Development" },
  { nameKey: "Plugins", categoryKey: "Development" },
  { nameKey: "WooCommerce", categoryKey: "E‑commerce" },
  { nameKey: "REST API", categoryKey: "API" },
  { nameKey: "Block Editor", categoryKey: "Gutenberg" },
  { nameKey: "htmlCssJs", categoryKey: "Frontend" },
  { nameKey: "MySQL", categoryKey: "Database" },
];

export default function Skills() {
  const { t } = useLocaleContext();

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--surface)]/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">{t("skills.title")}</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skillKeys.map(({ nameKey, categoryKey }) => (
            <li
              key={nameKey}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] card-hover"
            >
              <span
                className="w-2 h-2 rounded-full bg-[var(--wp)]"
                aria-hidden
              />
              <span className="text-[var(--text)]">{t(`skills.items.${nameKey}`)}</span>
              <span className="text-xs text-[var(--muted)] ml-auto">
                {t(`skills.categories.${categoryKey}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
