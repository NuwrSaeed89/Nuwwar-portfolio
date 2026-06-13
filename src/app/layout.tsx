import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Tajawal } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nuwwar Saeed | Senior Full Stack Developer",
    template: "%s | Nuwwar Saeed",
  },
  description:
    "Portfolio of Nuwwar Saeed — Senior Full Stack developer with 10+ years building web, mobile, and WordPress solutions.",
  applicationName: "Nuwwar Saeed Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} ${tajawal.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
