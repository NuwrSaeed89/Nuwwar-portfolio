export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--surface)]/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Get in touch</h2>
        <p className="text-[var(--muted)] mb-10">
          Interested in working together or have a WordPress project in mind?
          Reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:hello@nuwwar.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email me
          </a>
          <a
            href="https://linkedin.com/in/nuwwar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-8 text-sm text-[var(--muted)]">
          Replace the email and LinkedIn URL above with your real contact details.
        </p>
      </div>
    </section>
  );
}
