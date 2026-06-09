import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/cv/CvDocument";
import { registerCvFonts } from "@/cv/registerFonts";
import type { CvLang } from "@/cv/cvData";
import { buildTailoredCv } from "@/cv/buildTailoredCv";

export const runtime = "nodejs";

function parseLang(value: string | null): CvLang | null {
  if (value === "en" || value === "ar") return value;
  return null;
}

async function renderCvPdf(lang: CvLang, jobDescription?: string) {
  const tailoring = jobDescription ? buildTailoredCv(lang, jobDescription) : undefined;
  registerCvFonts(lang);
  return renderToBuffer(<CvDocument lang={lang} tailoring={tailoring} />);
}

function pdfFilename(lang: CvLang, tailored: boolean) {
  if (lang === "ar") {
    return tailored ? "Nuwwar-Saeed-CV-ar-tailored.pdf" : "Nuwwar-Saeed-CV-ar.pdf";
  }
  return tailored ? "Nuwwar-Saeed-CV-en-tailored.pdf" : "Nuwwar-Saeed-CV-en.pdf";
}

export async function GET(request: NextRequest) {
  const lang = parseLang(request.nextUrl.searchParams.get("lang") ?? "en");
  if (!lang) {
    return NextResponse.json({ error: "Invalid lang. Use en or ar." }, { status: 400 });
  }

  const jobDescription = request.nextUrl.searchParams.get("jd") ?? undefined;

  try {
    const buffer = await renderCvPdf(lang, jobDescription);
    const filename = pdfFilename(lang, Boolean(jobDescription?.trim()));

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (e) {
    console.error("CV PDF render failed:", e);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  let body: { lang?: string; jobDescription?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const lang = parseLang(body.lang ?? "en");
  if (!lang) {
    return NextResponse.json({ error: "Invalid lang. Use en or ar." }, { status: 400 });
  }

  const jobDescription = typeof body.jobDescription === "string" ? body.jobDescription : "";

  try {
    const buffer = await renderCvPdf(lang, jobDescription);
    const filename = pdfFilename(lang, Boolean(jobDescription.trim()));

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (e) {
    console.error("CV PDF render failed:", e);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
