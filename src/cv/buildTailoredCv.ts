import type { CvLang } from "./cvData";
import { getCvMessages } from "./cvData";
import { applyCvTailoring, type CvTailoringResult } from "./cvTailoring";

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

export function buildTailoredCv(
  lang: CvLang,
  jobDescription: string
): CvTailoringResult | undefined {
  const jd = jobDescription.trim();
  if (!jd) return undefined;

  const messages = getCvMessages(lang);
  const resume = messages.resume;
  const skillLines = CV_SKILL_KEYS.map((key) => resume[key]);

  return applyCvTailoring({
    baseHeadline: messages.hero.badge,
    skillLines,
    jobDescription: jd,
  });
}
