"use client";

import { useMemo, useState } from "react";
import { useLocaleContext } from "@/context/LocaleContext";
import { useCvTailoring } from "@/context/CvTailoringContext";
import { buildTailoredCv } from "@/cv/buildTailoredCv";
import type { CvLang } from "@/cv/cvData";

const downloadIcon = (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

type CvDownloadButtonsProps = {
  className?: string;
  /** Slightly smaller padding for hero / nav-adjacent rows */
  compact?: boolean;
  jobDescription?: string;
};

async function downloadTailoredCv(lang: CvLang, jobDescription: string) {
  const response = await fetch("/api/cv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lang, jobDescription }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate tailored CV");
  }

  const blob = await response.blob();
  const disposition = response.headers.get("Content-Disposition") ?? "";
  const match = disposition.match(/filename="([^"]+)"/);
  const filename = match?.[1] ?? (lang === "ar" ? "Nuwwar-Saeed-CV-ar-tailored.pdf" : "Nuwwar-Saeed-CV-en-tailored.pdf");

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function CvDownloadButtons({
  className = "",
  compact,
  jobDescription: jobDescriptionProp,
}: CvDownloadButtonsProps) {
  const { t } = useLocaleContext();
  const { jobDescription: sharedJobDescription } = useCvTailoring();
  const jobDescription = jobDescriptionProp ?? sharedJobDescription;
  const [downloading, setDownloading] = useState<CvLang | null>(null);
  const [error, setError] = useState<string | null>(null);

  const btnClass = compact
    ? "inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-60 w-full sm:w-auto"
    : "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-60 w-full sm:w-auto";

  const trimmedJd = jobDescription.trim();
  const useTailoring = trimmedJd.length > 0;

  const handleDownload = async (lang: CvLang) => {
    setError(null);
    setDownloading(lang);
    try {
      if (useTailoring) {
        await downloadTailoredCv(lang, trimmedJd);
      } else {
        window.location.href = `/api/cv?lang=${lang}`;
      }
    } catch {
      setError(t("cvPdf.tailorError"));
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3 justify-center w-full">
        <button
          type="button"
          onClick={() => handleDownload("en")}
          disabled={downloading !== null}
          className={btnClass}
        >
          {downloadIcon}
          {downloading === "en" ? t("cvPdf.downloading") : t("cvPdf.downloadEnglish")}
        </button>
      </div>
      {error ? <p className="text-sm text-red-400 text-center">{error}</p> : null}
    </div>
  );
}

export default function CvDownload() {
  const { t, locale } = useLocaleContext();
  const { jobDescription, setJobDescription } = useCvTailoring();

  const preview = useMemo(() => {
    const jd = jobDescription.trim();
    if (!jd) return null;
    return buildTailoredCv(locale, jd);
  }, [jobDescription, locale]);

  return (
    <div id="cv-download" className="space-y-5">
      <h3 className="text-lg font-semibold text-white mb-2">{t("cvPdf.downloadTitle")}</h3>
      <p className="text-sm text-[var(--muted)] mb-5">{t("cvPdf.downloadHint")}</p>

      <div className="mb-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]/50 p-4 space-y-3">
        <div>
          <label htmlFor="job-description" className="block text-sm font-medium text-white mb-1.5">
            {t("cvPdf.tailorLabel")}
          </label>
          <p className="text-xs text-[var(--muted)] mb-2">{t("cvPdf.tailorHint")}</p>
          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            rows={6}
            placeholder={t("cvPdf.tailorPlaceholder")}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
          />
        </div>

        {preview ? (
          <div className="rounded-md border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-3 py-2 text-sm space-y-1">
            <p className="text-[var(--muted)]">{t("cvPdf.tailorPreviewTitle")}</p>
            <p className="text-white font-medium">{preview.headline}</p>
            {preview.skillLines[1] ? (
              <p className="text-[var(--muted)] text-xs break-words">{preview.skillLines[1]}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <CvDownloadButtons jobDescription={jobDescription} />
    </div>
  );
}
