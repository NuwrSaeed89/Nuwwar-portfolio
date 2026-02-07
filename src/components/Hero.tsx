export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/80 via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-[var(--muted)] uppercase tracking-widest mb-4">
          WordPress Developer
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Nuwwar Saeed</span>
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10">
          Building custom themes, plugins, and scalable WordPress solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
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
