"use client";

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "start",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <div className={`flex flex-col gap-3 mb-10 sm:mb-12 ${alignClass} ${className}`}>
      {label ? (
        <span className="section-label">{label}</span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
