"use client";

import { useInView } from "@/hooks/useInView";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function AnimateIn({ children, className = "", as: Tag = "div" }: AnimateInProps) {
  const { ref, isInView } = useInView();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-once ${isInView ? "animate-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
