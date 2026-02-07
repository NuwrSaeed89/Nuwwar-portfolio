const skills = [
  { name: "WordPress", category: "CMS" },
  { name: "PHP", category: "Backend" },
  { name: "Custom Themes", category: "Development" },
  { name: "Plugins", category: "Development" },
  { name: "WooCommerce", category: "E‑commerce" },
  { name: "REST API", category: "API" },
  { name: "Block Editor", category: "Gutenberg" },
  { name: "HTML / CSS / JS", category: "Frontend" },
  { name: "MySQL", category: "Database" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--surface)]/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Skills & tools</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] card-hover"
            >
              <span
                className="w-2 h-2 rounded-full bg-[var(--wp)]"
                aria-hidden
              />
              <span className="text-[var(--text)]">{skill.name}</span>
              <span className="text-xs text-[var(--muted)] ml-auto">
                {skill.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
