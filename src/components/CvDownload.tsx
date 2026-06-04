"use client";

import { useLocaleContext } from "@/context/LocaleContext";

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
};

export function CvDownloadButtons({ className = "", compact }: CvDownloadButtonsProps) {
  const { t } = useLocaleContext();
  const btnClass = compact
    ? "inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
    : "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors";

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`.trim()}>
      <a href="/api/cv?lang=en" download className={btnClass}>
        {downloadIcon}
        {t("cvPdf.downloadEnglish")}
      </a>
      <a href="/api/cv?lang=ar" download className={btnClass}>
        {downloadIcon}
        {t("cvPdf.downloadArabic")}
      </a>
    </div>
  );
}

export default function CvDownload() {
  const { t } = useLocaleContext();

  return (
    <div
      id="cv-download"
      className="mt-10 pt-10 border-t border-[var(--border)]"
    >
      <h3 className="text-lg font-semibold text-white mb-2">{t("cvPdf.downloadTitle")}</h3>
      <p className="text-sm text-[var(--muted)] mb-5">{t("cvPdf.downloadHint")}</p>
      <CvDownloadButtons />
    </div>
  );
}
