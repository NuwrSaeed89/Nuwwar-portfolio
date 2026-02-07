"use client";

import { useLocaleContext } from "@/context/LocaleContext";

export default function About() {
  const { t } = useLocaleContext();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">{t("about.title")}</h2>
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
          {t("about.p1")}
        </p>
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
          {t("about.p2")}
        </p>
        <p className="text-lg text-[var(--muted)] leading-relaxed flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--wp)] shrink-0" aria-hidden />
          {t("about.education")}
        </p>
      </div>
    </section>
  );
}
