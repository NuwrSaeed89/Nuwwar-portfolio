"use client";

import { useEffect, useRef, useState } from "react";

const defaultOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -40px 0px",
  threshold: 0.1,
};

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, opts);

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.rootMargin, opts.threshold]);

  return { ref, isInView };
}
