"use client";

import React, { useState, type MouseEvent } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LocaleHome() {
  const [coords, setCoords] = useState({ x: "50%", y: "20%" });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setCoords({
      x: `${x.toFixed(1)}%`,
      y: `${y.toFixed(1)}%`,
    });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden page-glow-wrapper"
      onMouseMove={handleMouseMove}
      style={{ "--mouse-x": coords.x, "--mouse-y": coords.y } as React.CSSProperties}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

