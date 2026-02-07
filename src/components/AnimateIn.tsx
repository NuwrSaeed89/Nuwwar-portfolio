"use client";

import { useInView } from "@/hooks/useInView";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimateIn({ children, className = "" }: AnimateInProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-once ${isInView ? "animate-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
