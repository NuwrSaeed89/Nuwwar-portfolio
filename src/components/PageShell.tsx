"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

/** Mouse-follow glow only on desktop pointers — skipped on touch for performance. */
export function PageShell({ children }: PageShellProps) {
  const [glowEnabled, setGlowEnabled] = useState(false);
  const [coords, setCoords] = useState({ x: "50%", y: "20%" });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const update = () => setGlowEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!glowEnabled) return;
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    setCoords({
      x: `${(((clientX - rect.left) / rect.width) * 100).toFixed(1)}%`,
      y: `${(((clientY - rect.top) / rect.height) * 100).toFixed(1)}%`,
    });
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${glowEnabled ? "page-glow-wrapper" : ""}`}
      onMouseMove={glowEnabled ? handleMouseMove : undefined}
      style={
        glowEnabled
          ? ({ "--mouse-x": coords.x, "--mouse-y": coords.y } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
