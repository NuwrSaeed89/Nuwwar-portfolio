export type CvTailoringResult = {
  headline: string;
  skillLines: string[];
};

export type CvTailoringInput = {
  baseHeadline: string;
  skillLines: string[];
  jobDescription: string;
};

/** Longest-first so "ASP.NET Core" matches before "ASP.NET". */
const KNOWN_SKILLS = [
  "ASP.NET Core",
  "ASP.NET Web API",
  "ASP.NET",
  "Oracle Database",
  "Oracle ADF",
  "PostgreSQL",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "REST API",
  "Web API",
  "WooCommerce",
  "WordPress",
  "Firebase",
  "Flutter",
  "BLoC",
  "GetX",
  "Laravel",
  "MySQL",
  "PL/SQL",
  "DevOps",
  "GitHub",
  "CI/CD",
  "React",
  "Docker",
  "Agile",
  "Scrum",
  "Java",
  "HTML5",
  "CSS3",
  "HTML",
  "CSS",
  "AWS",
  "PHP",
  "SQL",
  "Git",
  "C#",
  "Dart",
].sort((a, b) => b.length - a.length);

const JOB_TITLE_PATTERNS = [
  /(?:job\s+title|position|role)\s*[:\-–]\s*(.+?)(?:\n|$)/i,
  /(?:we\s+are\s+(?:looking|seeking|hiring)(?:\s+for)?\s+(?:a|an)\s+)([^.\n]+)/i,
  /^([A-Z][A-Za-z0-9\s/&.-]+(?:Engineer|Developer|Architect|Programmer|Lead|Manager|Specialist|Consultant))\s*(?:\n|$|[,.])/m,
];

const TITLE_LIKE =
  /^(?:Senior|Sr\.?|Lead|Principal|Staff)?\s*.+\b(?:Engineer|Developer|Architect|Programmer|Lead|Manager)\b/i;

function normalizeWhitespace(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

/** Pull a job title from free-text job description. */
export function extractJobTitle(jobDescription: string): string | null {
  const text = jobDescription.trim();
  if (!text) return null;

  for (const pattern of JOB_TITLE_PATTERNS) {
    const match = text.match(pattern);
    if (match?.[1]) {
      const title = normalizeWhitespace(match[1]);
      if (title.length >= 5 && title.length <= 80) return title;
    }
  }

  const firstLine = text.split("\n")[0]?.trim() ?? "";
  if (TITLE_LIKE.test(firstLine) && firstLine.length <= 80) {
    return firstLine;
  }

  return null;
}

/**
 * Append a job-title variant to the base headline for strict ATS title matching.
 * e.g. "Senior Full Stack Developer" + "Senior Backend Engineer"
 *   → "Senior Full Stack Developer / Backend Engineer"
 */
export function buildTailoredHeadline(baseHeadline: string, jobTitle: string | null): string {
  if (!jobTitle) return baseHeadline;

  const base = normalizeWhitespace(baseHeadline);
  const job = normalizeWhitespace(jobTitle);

  if (base.toLowerCase() === job.toLowerCase()) return base;

  const stripSeniority = (value: string) =>
    value.replace(/^(senior|sr\.?|lead|principal|staff)\s+/i, "").trim();

  const jobCore = stripSeniority(job);
  const baseCore = stripSeniority(base);

  if (!jobCore || baseCore.toLowerCase() === jobCore.toLowerCase()) return base;
  if (base.toLowerCase().includes(jobCore.toLowerCase())) return base;

  return `${base} / ${jobCore}`;
}

function findSegmentJdIndex(segment: string, jdLower: string): number {
  let best = Infinity;
  const segmentLower = segment.toLowerCase();

  for (const skill of KNOWN_SKILLS) {
    if (segmentLower.includes(skill.toLowerCase())) {
      const pos = jdLower.indexOf(skill.toLowerCase());
      if (pos !== -1 && pos < best) best = pos;
    }
  }

  const directPos = jdLower.indexOf(segmentLower.trim());
  if (directPos !== -1 && directPos < best) best = directPos;

  return best;
}

/** Reorder comma-separated items to mirror their first appearance in the job description. */
export function reorderCommaSeparatedList(items: string[], jobDescription: string): string[] {
  const jdLower = jobDescription.toLowerCase();

  const ranked = items.map((item, originalIndex) => ({
    item,
    originalIndex,
    jdIndex: findSegmentJdIndex(item, jdLower),
  }));

  ranked.sort((a, b) => {
    if (a.jdIndex !== b.jdIndex) return a.jdIndex - b.jdIndex;
    return a.originalIndex - b.originalIndex;
  });

  return ranked.map((entry) => entry.item);
}

/** Reorder skills after a category label, e.g. "Databases: PostgreSQL, MySQL, ...". */
export function reorderSkillLine(line: string, jobDescription: string): string {
  const colonIdx = line.indexOf(":");
  if (colonIdx === -1) {
    const items = line
      .split(/,\s*/)
      .map((part) => part.trim())
      .filter(Boolean);
    return reorderCommaSeparatedList(items, jobDescription).join(", ");
  }

  const label = line.slice(0, colonIdx + 1);
  const skillsPart = line.slice(colonIdx + 1).trim();
  const items = skillsPart
    .split(/,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  return `${label} ${reorderCommaSeparatedList(items, jobDescription).join(", ")}`;
}

export function applyCvTailoring(input: CvTailoringInput): CvTailoringResult {
  const { baseHeadline, skillLines, jobDescription } = input;
  const jd = jobDescription.trim();

  if (!jd) {
    return { headline: baseHeadline, skillLines };
  }

  const jobTitle = extractJobTitle(jd);
  const headline = buildTailoredHeadline(baseHeadline, jobTitle);
  const tailoredLines = skillLines.map((line) => reorderSkillLine(line, jd));

  return { headline, skillLines: tailoredLines };
}
