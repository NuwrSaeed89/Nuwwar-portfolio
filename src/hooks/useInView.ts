"use client";

import { useEffect, useRef, useState } from "react";

const defaultOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -40px 0px",
  threshold: 0.1,
};

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { rootMargin, threshold } = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { rootMargin, threshold });

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, isInView };
}
