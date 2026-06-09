"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type CvTailoringContextValue = {
  jobDescription: string;
  setJobDescription: (value: string) => void;
};

const CvTailoringContext = createContext<CvTailoringContextValue | null>(null);

export function CvTailoringProvider({ children }: { children: ReactNode }) {
  const [jobDescription, setJobDescription] = useState("");

  const value = useMemo(
    () => ({ jobDescription, setJobDescription }),
    [jobDescription]
  );

  return <CvTailoringContext.Provider value={value}>{children}</CvTailoringContext.Provider>;
}

export function useCvTailoring() {
  const context = useContext(CvTailoringContext);
  if (!context) {
    throw new Error("useCvTailoring must be used within CvTailoringProvider");
  }
  return context;
}
