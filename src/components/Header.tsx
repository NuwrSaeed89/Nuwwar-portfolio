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
  { href: "#contact", key: "nav.contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, t } = useLocaleContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold text-white">
          Nuwwar Saeed
        </Link>
        <nav className="hidden sm:flex items-center gap-8">
          {linkKeys.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <LanguageSwitch />
        </nav>
        <button
          type="button"
          className="sm:hidden p-2 text-[var(--muted)] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={t("nav.toggleMenu")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="sm:hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {linkKeys.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </a>
          ))}
          <div className="pt-2">
            <LanguageSwitch />
          </div>
        </nav>
      )}
    </header>
  );
}
