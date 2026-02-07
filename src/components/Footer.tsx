export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {year} Nuwwar Saeed. WordPress developer.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            Top
          </a>
          <a
            href="#contact"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
