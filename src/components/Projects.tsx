"use client";

import Image from "next/image";
import { useLocaleContext } from "@/context/LocaleContext";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

type ProjectItem = {
  id:
    | "socialSpark"
    | "indoOud"
    | "ehtiraf"
    | "lamssa"
    | "doctorAssessment"
    | "rentCarsHouses"
    | "nobofa"
    | "northafrica"
    | "customTheme"
    | "wooStore"
    | "pluginDev";
  tags: string[];
  url?: string;
} & ({ image?: string; images?: never } | { image?: never; images: string[] });

const projectList: ProjectItem[] = [
  {
    id: "socialSpark",
    tags: ["ASP.NET Core", "C#", "REST API"],
    url: "https://socialsparkcompany.com/",
    images: ["/assets/3.png"],
  },
  {
    id: "indoOud",
    tags: ["ASP.NET Core", "PostgreSQL", "E‑commerce"],
    url: "https://www.indooud.com/",
    images: ["/assets/indo.png"],
  },
  {
    id: "ehtiraf",
    tags: ["WordPress", "PHP", "Photo Gallery"],
    url: "https://ehtiraf-print.com",
    images: ["/assets/4.png"],
  },
  {
    id: "lamssa",
    tags: ["WooCommerce", "WordPress", "Beauty"],
    url: "http://localhost:8888/lamssa/",
    images: ["/assets/8.png"],
  },
  {
    id: "doctorAssessment",
    tags: ["WordPress", "Elementor", "Assessment"],
    url: "https://moccasin-cheetah-487091.hostingersite.com/",
    images: ["/assets/7.png"],
  },
  {
    id: "rentCarsHouses",
    tags: ["WooCommerce", "WordPress", "PHP"],
    url: undefined,
    images: ["/assets/6.jpeg"],
  },
  {
    id: "nobofa",
    tags: ["WordPress", "WooCommerce", "PHP"],
    url: undefined,
    images: ["/assets/1.jpeg", "/assets/2.jpeg"],
  },
  {
    id: "northafrica",
    tags: ["WooCommerce", "WordPress", "PHP", "Blog"],
    url: undefined,
  },

 

];

export default function Projects() {
  const { t } = useLocaleContext();

  return (
    <section id="projects" className="section-block border-t border-[var(--border)]/60">
      <AnimateIn className="section-shell">
        <SectionHeading
          label={t("projects.sectionLabel")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project, index) => {
            const title = t(`projects.items.${project.id}.title`);
            const description = t(`projects.items.${project.id}.description`);
            const images = "images" in project && project.images ? project.images : "image" in project && project.image ? [project.image] : [];
            return (
              <article
                key={project.id}
                className="glass-card-hover overflow-hidden group"
              >
                {images.length > 0 ? (
                  <a
                    href={project.url ?? "#"}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                    className="block aspect-video bg-[var(--border)] relative overflow-hidden"
                  >
                    {images.length === 1 ? (
                      <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex absolute inset-0 w-full h-full">
                        {images.map((src) => (
                          <div key={src} className="relative flex-1 min-w-0 h-full">
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </a>
                ) : null}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex h-7 px-2 rounded-full border border-[var(--border)] text-xs font-mono text-[var(--muted)] bg-[var(--bg)]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  <h3 className="text-lg font-semibold text-white">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {title} →
                      </a>
                    ) : (
                      title
                    )}
                  </h3>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-[var(--bg)] text-[var(--muted)] font-mono"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[var(--muted)] text-sm">
          {t("projects.more")}
        </p>
      </AnimateIn>
    </section>
  );
}
