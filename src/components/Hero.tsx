"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import Image from "next/image";

export default function Hero() {
  const { t, dir } = useLocaleContext();
  const textAnim = dir === "rtl" ? "animate-fade-in-right" : "animate-fade-in-left";
  const imageAnim = dir === "rtl" ? "animate-fade-in-left" : "animate-fade-in-right";

  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-grid pt-[5.5rem] pb-16 sm:pt-28 sm:pb-20 md:min-h-screen md:pt-32 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/80 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        <div
          className={`flex-1 w-full text-center lg:text-start max-w-xl order-2 lg:order-1 ${textAnim}`}
          style={{ animationDelay: "0ms" }}
          dir={dir}
        >
          <p className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] font-mono text-[10px] sm:text-xs text-[var(--accent)] uppercase tracking-wide sm:tracking-widest mb-4 sm:mb-5 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden />
            {t("hero.badge")}
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 sm:mb-6">
            <span className="chip-tag">{t("hero.roleWeb")}</span>
            <span className="chip-tag">{t("hero.roleFlutter")}</span>
            <span className="chip-tag">{t("hero.roleWordPress")}</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight break-words">
            <span className="gradient-text inline-block">{t("site.name")}</span>
          </h1>
          <p className="text-base sm:text-xl text-[var(--muted)] max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              {t("hero.viewWork")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition-colors w-full sm:w-auto"
            >
              {t("hero.getInTouch")}
            </a>
            <a
              href="#cv-download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors w-full sm:w-auto"
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
          className={`flex-shrink-0 w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] order-1 lg:order-2 ${imageAnim}`}
          style={{ animationDelay: "120ms" }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[var(--border-bright)] glass-card p-1">
            <Image
              src="/5.jpeg"
              alt="Nuwwar Saeed — Senior Full Stack Developer portfolio"
              width={900}
              height={600}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 420px"
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
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
