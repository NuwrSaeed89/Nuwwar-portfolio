"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";
import { AnimateIn } from "./AnimateIn";
import { CvDownloadButtons } from "./CvDownload";
import { SectionHeading } from "./SectionHeading";

const MESSAGES = { en, ar } as const;

const COURSE_KEYS = [
  "course1",
  "course2",
  "course3",
  "course4",
  "course5",
  "course6",
  "course7",
] as const;

const PROJECT_KEYS = ["proj1", "proj2", "proj3"] as const;

const LANGUAGE_KEYS = ["lang1", "lang2", "lang3"] as const;

const CV_SKILL_KEYS = [
  "cvSkill1",
  "cvSkill2",
  "cvSkill3",
  "cvSkill4",
  "cvSkill5",
  "cvSkill6",
  "cvSkill7",
  "cvSkill8",
  "cvSkill9",
  "cvSkill10",
  "cvSkill11",
  "cvSkill12",
] as const;

function splitSkillLine(text: string): { category: string; items: string } {
  const idx = text.indexOf(":");
  if (idx === -1) return { category: "Skills", items: text };
  return {
    category: text.slice(0, idx).trim(),
    items: text.slice(idx + 1).trim(),
  };
}

export default function Resume() {
  const { t, locale } = useLocaleContext();
  const experiences = MESSAGES[locale].resume.experiences;

  return (
    <section id="resume" className="section-block section-block-alt border-t border-[var(--border)]/60">
      <AnimateIn className="section-shell space-y-12 sm:space-y-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label={t("resume.sectionLabel")}
            title={t("resume.title")}
            subtitle={t("resume.subtitle")}
            className="mb-0"
          />
          <div className="glass-card p-4 sm:p-5 shrink-0 w-full lg:max-w-sm">
            <p className="text-sm text-[var(--muted)] mb-3">{t("cvPdf.downloadHint")}</p>
            <CvDownloadButtons compact className="justify-start" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent)]" aria-hidden />
            {t("resume.technicalSkillsTitle")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {CV_SKILL_KEYS.map((key) => {
              const line = t(`resume.${key}`);
              const { category, items } = splitSkillLine(line);
              return (
                <div key={key} className="skill-category-card">
                  <p className="text-sm font-semibold text-white mb-2">{category}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{items}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent)]" aria-hidden />
            {t("resume.experienceTitle")}
          </h3>
          <div className="experience-timeline">
            {experiences.map((entry) => (
              <article key={entry.role} className="experience-item">
                <div className="glass-card p-5 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white leading-snug mb-3">
                    {entry.role}
                  </h4>
                  <ul className="bullet-list space-y-2.5 text-sm sm:text-base">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-4">{t("resume.projectsTitle")}</h3>
            <ul className="bullet-list space-y-3 text-sm sm:text-base">
              {PROJECT_KEYS.map((key) => (
                <li key={key}>{t(`resume.${key}`)}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-4">{t("resume.educationTitle")}</h3>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {t("resume.educationText")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-4">{t("resume.coursesTitle")}</h3>
            <ul className="bullet-list space-y-2.5 text-sm sm:text-base">
              {COURSE_KEYS.map((key) => (
                <li key={key}>{t(`resume.${key}`)}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white mb-4">{t("resume.languagesTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGE_KEYS.map((key) => (
                <span key={key} className="chip-tag text-[var(--text)]">
                  {t(`resume.${key}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
