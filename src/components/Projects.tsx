const projects = [
  {
    title: "Custom WordPress theme",
    description:
      "Responsive theme with custom blocks, options panel, and optimized performance.",
    tags: ["PHP", "WordPress", "Gutenberg"],
  },
  {
    title: "WooCommerce store",
    description:
      "E‑commerce site with custom checkout, product filters, and payment integration.",
    tags: ["WooCommerce", "PHP", "REST API"],
  },
  {
    title: "Plugin development",
    description:
      "Custom plugin for content workflow, shortcodes, and admin tools.",
    tags: ["Plugin", "WordPress", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Selected work</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] card-hover"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                {project.description}
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
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-[var(--muted)] text-sm">
          More projects and case studies can be added here or linked from an
          external portfolio.
        </p>
      </div>
    </section>
  );
}
