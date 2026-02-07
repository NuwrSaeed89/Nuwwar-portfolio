import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // favicon, images, etc.
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];

  // Root: redirect to default locale (English)
  if (!segment || segment === "") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Invalid locale: redirect to default
  if (!isValidLocale(segment)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
