"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export default function About() {
  const { t } = useLocaleContext();

  return (
    <section id="about" className="section-block">
      <AnimateIn className="section-shell">
        <SectionHeading
          label={t("about.sectionLabel")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="bento-grid">
          <div className="bento-main glass-card p-6 sm:p-8 lg:p-10 space-y-5">
            <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">{t("about.p1")}</p>
            <p className="text-base text-[var(--muted)] leading-relaxed">{t("about.p2")}</p>
            <p className="text-base text-[var(--muted)] leading-relaxed">{t("about.p3")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5">
            <div className="stat-pill">
              <span className="stat-value">{t("about.stats.years")}</span>
              <span className="stat-label">{t("about.stats.yearsLabel")}</span>
            </div>
            <div className="stat-pill">
              <span className="stat-value gradient-text">{t("about.stats.level")}</span>
              <span className="stat-label">{t("about.stats.levelLabel")}</span>
            </div>
            <div className="stat-pill sm:col-span-3 lg:col-span-1">
              <span className="stat-value">{t("about.stats.focus")}</span>
              <span className="stat-label">{t("about.stats.focusLabel")}</span>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                {t("about.primaryLanguagesTitle")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t("about.primaryLanguages")
                  .split(/[,،]\s*/)
                  .map((lang) => (
                    <span key={lang} className="chip-tag text-[var(--text)]">
                      {lang}
                    </span>
                  ))}
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                {t("about.educationTitle")}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{t("about.education")}</p>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
