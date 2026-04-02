"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";
import { CvDownloadButtons } from "./CvDownload";

const COURSE_KEYS = [
  "course1",
  "course2",
  "course3",
  "course4",
  "course5",
  "course6",
] as const;

const EXPERIENCE_KEYS = [
  "exp1",
  "exp2",
  "exp3",
  "exp4",
  "exp5",
  "exp6",
  "exp7",
  "exp8",
  "exp9",
  "exp10",
] as const;

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
] as const;

export default function Resume() {
  const { t } = useLocaleContext();

  return (
    <section id="resume" className="py-24 px-6 border-t border-[var(--border)]">
      <AnimateIn className="max-w-3xl mx-auto space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 border-b border-[var(--border)] pb-8">
          <h2 className="text-3xl font-bold text-white">{t("resume.title")}</h2>
          <div className="flex flex-col items-stretch sm:items-end gap-2">
            <p className="text-sm text-[var(--muted)] sm:text-end">{t("cvPdf.downloadHint")}</p>
            <CvDownloadButtons compact className="justify-start sm:justify-end" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t("resume.educationTitle")}</h3>
          <p className="text-lg text-[var(--muted)] leading-relaxed">{t("resume.educationText")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t("resume.coursesTitle")}</h3>
          <ul className="list-disc ps-6 space-y-2 text-[var(--muted)] text-lg leading-relaxed">
            {COURSE_KEYS.map((key) => (
              <li key={key}>{t(`resume.${key}`)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t("resume.experienceTitle")}</h3>
          <ul className="list-disc ps-6 space-y-2 text-[var(--muted)] text-lg leading-relaxed">
            {EXPERIENCE_KEYS.map((key) => (
              <li key={key}>{t(`resume.${key}`)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t("resume.languagesTitle")}</h3>
          <ul className="list-disc ps-6 space-y-2 text-[var(--muted)] text-lg leading-relaxed">
            {LANGUAGE_KEYS.map((key) => (
              <li key={key}>{t(`resume.${key}`)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t("resume.cvSkillsTitle")}</h3>
          <ul className="list-disc ps-6 space-y-2 text-[var(--muted)] text-lg leading-relaxed">
            {CV_SKILL_KEYS.map((key) => (
              <li key={key}>{t(`resume.${key}`)}</li>
            ))}
          </ul>
        </div>
      </AnimateIn>
    </section>
  );
}
