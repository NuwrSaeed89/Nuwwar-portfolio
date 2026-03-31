"use client";

import { useLocaleContext } from "@/context/LocaleContext";
import Image from "next/image";

const staggerDelay = (i: number) => ({ animationDelay: `${i * 80}ms` });

export default function Hero() {
  const { t } = useLocaleContext();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/80 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p
            className="font-mono text-sm text-[var(--muted)] uppercase tracking-widest mb-4 animate-fade-in-up"
            style={staggerDelay(0)}
          >
            {t("hero.badge")}
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up"
            style={staggerDelay(1)}
          >
            <span className="gradient-text">Nuwwar Saeed</span>
          </h1>
          <p
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up"
            style={staggerDelay(2)}
          >
            {t("hero.tagline")}
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up"
            style={staggerDelay(3)}
          >
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
          </div>
        </div>
        <div
          className="flex-shrink-0 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] animate-fade-in-up"
          style={staggerDelay(2)}
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
