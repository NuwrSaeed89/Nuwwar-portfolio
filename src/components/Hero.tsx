"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import Image from "next/image";

export default function Hero() {
  const { t, dir } = useLocaleContext();
  const textAnim = dir === "rtl" ? "animate-fade-in-right" : "animate-fade-in-left";
  const imageAnim = dir === "rtl" ? "animate-fade-in-left" : "animate-fade-in-right";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 lg:pt-24 lg:pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/80 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div
          className={`flex-1 text-center lg:text-start max-w-xl ${textAnim}`}
          style={{ animationDelay: "0ms" }}
          dir={dir}
        >
          <p className="font-mono text-sm text-[var(--muted)] uppercase tracking-widest mb-4">
            {t("hero.badge")}
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--muted)]">
              {t("hero.roleWeb")}
            </span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--muted)]">
              {t("hero.roleFlutter")}
            </span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--muted)]">
              {t("hero.roleWordPress")}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text inline-block">{t("site.name")}</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto lg:mx-0 mb-10">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t("hero.viewWork")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition-colors"
            >
              {t("hero.getInTouch")}
            </a>
            <a
              href="#cv-download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t("cvPdf.buttonShort")}
            </a>
          </div>
        </div>
        <div
          className={`flex-shrink-0 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] ${imageAnim}`}
          style={{ animationDelay: "120ms" }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-[var(--border)]">
            <Image
              src="/5.jpeg"
              alt="MacBook"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "400ms", animationFillMode: "both" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          aria-label={t("hero.scrollAria")}
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
