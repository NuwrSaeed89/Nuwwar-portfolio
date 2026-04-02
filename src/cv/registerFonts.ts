import path from "path";
import { Font } from "@react-pdf/renderer";
import type { CvLang } from "./cvData";

/** Full Cairo variable font (Latin + Arabic). OFL — see src/cv/fonts/README.md */
const cairoVariable = path.join(process.cwd(), "src/cv/fonts/Cairo-Variable.ttf");

let cairoRegistered = false;

/**
 * Register custom PDF fonts only when needed.
 * - English CV uses built-in Helvetica (no registration) — avoids fontkit/woff2 embed bugs.
 * - Arabic CV registers Cairo (TTF).
 */
export function registerCvFonts(lang: CvLang): void {
  if (lang !== "ar") return;
  if (cairoRegistered) return;

  Font.register({
    family: "Cairo",
    fonts: [
      { src: cairoVariable, fontWeight: 400 },
      { src: cairoVariable, fontWeight: 700 },
    ],
  });
  cairoRegistered = true;
}
