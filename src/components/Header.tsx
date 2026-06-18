"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/context/LocaleContext";
import LanguageSwitch from "./LanguageSwitch";

const linkKeys = [
  { href: "#about", key: "nav.about" },
  { href: "#resume", key: "nav.resume" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" },
  { href: "#cv-download", key: "cvPdf.buttonShort" },
  { href: "#contact", key: "nav.contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, t } = useLocaleContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg shadow-black/30 transition-[border-radius] duration-300 ${
            open ? "rounded-2xl" : "rounded-2xl sm:rounded-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3">
            <Link
              href={`/${locale}`}
              className="font-semibold text-white shrink min-w-0 text-sm sm:text-base hover:text-[var(--accent)] transition-colors truncate max-w-[52vw] sm:max-w-none"
            >
              {t("site.name")}
            </Link>
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {linkKeys.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className="px-2.5 xl:px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)] rounded-full hover:bg-[var(--bg)]/50 transition-colors whitespace-nowrap"
                >
                  {t(key)}
                </a>
              ))}
              <div className="ms-1 ps-1 border-s border-[var(--border)]">
                <LanguageSwitch />
              </div>
            </nav>
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <LanguageSwitch />
              <button
                type="button"
                className="p-2 rounded-full text-[var(--muted)] hover:text-white hover:bg-[var(--bg)]/50 transition-colors"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={t("nav.toggleMenu")}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {open && (
            <nav className="lg:hidden border-t border-[var(--border)] px-3 sm:px-4 py-3 max-h-[min(70vh,28rem)] overflow-y-auto flex flex-col gap-1">
              {linkKeys.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 py-2.5 text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--bg)]/40 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
