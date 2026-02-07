"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/LocaleContext";
import type { Locale } from "@/i18n/config";

const options: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "ar", label: "العربية" },
];

export default function LanguageSwitch() {
  const { locale } = useLocaleContext();

  return (
    <div
      className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)]/80 p-0.5"
      role="group"
      aria-label="Language"
    >
      {options.map(({ locale: optLocale, label }) => {
        const isActive = locale === optLocale;
        return (
          <Link
            key={optLocale}
            href={`/${optLocale}`}
            className={`relative min-w-[2.75rem] py-1.5 px-2.5 text-center text-sm font-medium rounded-md transition-colors ${
              isActive
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--muted)] hover:text-[var(--text)]"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={optLocale === "ar" ? "العربية" : "English"}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
