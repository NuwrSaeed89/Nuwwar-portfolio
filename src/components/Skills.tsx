"use client";

import { useState } from "react";
import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";

type SkillItem = { nameKey: string; categoryKey: string };
type TabKey = "web" | "flutter" | "wordpress";

const tabSkillMap: Record<TabKey, SkillItem[]> = {
  web: [
    { nameKey: "htmlCssJs", categoryKey: "Frontend" },
    { nameKey: "Next.js", categoryKey: "Frontend" },
    { nameKey: "Tailwind CSS", categoryKey: "Frontend" },
    { nameKey: "Oracle ADF", categoryKey: "Development" },
    { nameKey: "PHP", categoryKey: "Backend" },
    { nameKey: "REST API", categoryKey: "API" },
    { nameKey: "MySQL", categoryKey: "Database" },
    { nameKey: "customCodes", categoryKey: "Development" },
    { nameKey: "seoFriendly", categoryKey: "SEO" },
  ],
  flutter: [
    { nameKey: "Flutter", categoryKey: "Mobile" },
    { nameKey: "Dart", categoryKey: "Mobile" },
    { nameKey: "Firebase", categoryKey: "Tools" },
    { nameKey: "State Management", categoryKey: "Development" },
    { nameKey: "Responsive UI", categoryKey: "Frontend" },
    { nameKey: "REST API", categoryKey: "API" },
  ],
  wordpress: [
    { nameKey: "WordPress", categoryKey: "CMS" },
    { nameKey: "Custom Themes", categoryKey: "Development" },
    { nameKey: "Plugins", categoryKey: "Development" },
    { nameKey: "WooCommerce", categoryKey: "E‑commerce" },
    { nameKey: "Block Editor", categoryKey: "Gutenberg" },
    { nameKey: "Elementor", categoryKey: "Page Builder" },
    { nameKey: "Elementor Pro", categoryKey: "Page Builder" },
  ],
};

export default function Skills() {
  const { t } = useLocaleContext();
  const [activeTab, setActiveTab] = useState<TabKey>("web");
  const skillKeys = tabSkillMap[activeTab];

  return (
    <section id="skills" className="py-16 px-4 sm:py-24 sm:px-6 bg-[var(--surface)]/50">
      <AnimateIn className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
          {t("skills.title")}
        </h2>
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {(["web", "flutter", "wordpress"] as TabKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                activeTab === tab
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)] hover:text-[var(--text)]"
              }`}
            >
              {t(`skills.tabs.${tab}`)}
            </button>
          ))}
        </div>
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
