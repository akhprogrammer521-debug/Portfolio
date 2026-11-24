import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import { siteConfig } from "@/data/config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: "Ahmad Ibrahim — Front-end developer / builder",
  description:
    "The portfolio of Ahmad Ibrahim, a junior front-end and full-stack developer building clear, responsive digital products.",
  metadataBase: new URL("https://ahmad-ibrahim.dev")
};

export default function RootLayout({ children }) {
  const locale = siteConfig.activeLocale;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
