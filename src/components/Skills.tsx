"use client";

import { useState } from "react";
import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

type SkillItem = { nameKey: string; categoryKey: string };
type TabKey = "web" | "flutter" | "wordpress";

const tabSkillMap: Record<TabKey, SkillItem[]> = {
  web: [
    { nameKey: "htmlCssJs", categoryKey: "Frontend" },
    { nameKey: "nextJs", categoryKey: "Frontend" },
    { nameKey: "Tailwind CSS", categoryKey: "Frontend" },
    { nameKey: "Oracle ADF", categoryKey: "Development" },
    { nameKey: "csharp", categoryKey: "Backend" },
    { nameKey: "aspNetCore", categoryKey: "Backend" },
    { nameKey: "PHP", categoryKey: "Backend" },
    { nameKey: "Laravel", categoryKey: "Backend" },
    { nameKey: "Java", categoryKey: "Backend" },
    { nameKey: "REST API", categoryKey: "API" },
    { nameKey: "PostgreSQL", categoryKey: "Database" },
    { nameKey: "MySQL", categoryKey: "Database" },
    { nameKey: "javascript", categoryKey: "Frontend" },
    { nameKey: "typescript", categoryKey: "Frontend" },
    { nameKey: "Docker", categoryKey: "Tools" },
    { nameKey: "Git", categoryKey: "Tools" },
    { nameKey: "GitHub", categoryKey: "Tools" },
    { nameKey: "cicd", categoryKey: "Tools" },
    { nameKey: "seoFriendly", categoryKey: "SEO" },
  ],
  flutter: [
    { nameKey: "Flutter", categoryKey: "Mobile" },
    { nameKey: "Dart", categoryKey: "Mobile" },
    { nameKey: "Firebase", categoryKey: "Tools" },
    { nameKey: "bloc", categoryKey: "Development" },
    { nameKey: "getx", categoryKey: "Development" },
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
    <section id="skills" className="section-block">
      <AnimateIn className="section-shell">
        <SectionHeading
          label={t("skills.sectionLabel")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 w-fit max-w-full">
          {(["web", "flutter", "wordpress"] as TabKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`tab-pill ${
                activeTab === tab ? "tab-pill-active" : "tab-pill-inactive"
              }`}
            >
              {t(`skills.tabs.${tab}`)}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skillKeys.map(({ nameKey, categoryKey }) => (
            <li
              key={nameKey}
              className="glass-card-hover flex items-center gap-3 px-4 py-4 min-w-0"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--violet))",
                  boxShadow: "0 0 10px var(--accent-glow)",
                }}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <span className="block text-sm sm:text-base text-[var(--text)] break-words">
                  {t(`skills.items.${nameKey}`)}
                </span>
                <span className="block text-xs text-[var(--muted)] mt-0.5">
                  {t(`skills.categories.${categoryKey}`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </AnimateIn>
    </section>
  );
}
