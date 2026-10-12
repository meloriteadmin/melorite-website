import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Providers } from "@/components/animation/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingDemo } from "@/components/layout/FloatingDemo";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const leagueSpartan = League_Spartan({ variable: "--font-league-spartan", subsets: ["latin"], display: "swap" });
const fraunces = Newsreader({ variable: "--font-fraunces", subsets: ["latin"], display: "swap", weight: ["300", "400", "500"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Melorite | Connected Business Platform",
    template: "%s | Melorite",
  },
  description: site.description,
  applicationName: "Melorite",
  authors: [{ name: "Melorite" }],
  creator: "Melorite",
  publisher: "Melorite",
  openGraph: {
    type: "website",
    siteName: "Melorite",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f7fe",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${leagueSpartan.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-dvh bg-[#f6f7fe]">
        <Providers>
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <FloatingDemo />
        </Providers>
      </body>
    </html>
  );
}
