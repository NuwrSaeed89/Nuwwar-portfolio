"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/LocaleContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale, t } = useLocaleContext();

  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
