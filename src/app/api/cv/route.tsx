import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/cv/CvDocument";
import { registerCvFonts } from "@/cv/registerFonts";
import type { CvLang } from "@/cv/cvData";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const langParam = request.nextUrl.searchParams.get("lang") ?? "en";
  if (langParam !== "en" && langParam !== "ar") {
    return NextResponse.json({ error: "Invalid lang. Use en or ar." }, { status: 400 });
  }
  const lang = langParam as CvLang;

  try {
    registerCvFonts(lang);
    const buffer = await renderToBuffer(<CvDocument lang={lang} />);
    const filename =
      lang === "ar" ? "Nuwwar-Saeed-CV-ar.pdf" : "Nuwwar-Saeed-CV-en.pdf";

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
