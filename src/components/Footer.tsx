"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/LocaleContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale, t } = useLocaleContext();

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[var(--border)]/60 bg-[var(--surface)]/40">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <p className="text-sm text-[var(--muted)]">
          © {year} {t("footer.copyright")}
        </p>
        <div className="flex gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            {t("footer.top")}
          </Link>
          <a
            href="#contact"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            {t("footer.contact")}
          </a>
        </div>
      </div>
    </footer>
  );
}
