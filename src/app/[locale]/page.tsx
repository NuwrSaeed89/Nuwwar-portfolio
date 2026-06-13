"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PageShell } from "@/components/PageShell";
import { CvTailoringProvider } from "@/context/CvTailoringContext";

export default function LocaleHome() {
  return (
    <CvTailoringProvider>
      <PageShell>
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
      </PageShell>
    </CvTailoringProvider>
  );
}

