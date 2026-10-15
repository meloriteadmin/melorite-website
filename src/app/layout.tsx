import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Providers } from "@/components/animation/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingDemo } from "@/components/layout/FloatingDemo";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
});

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
  themeColor: "#fbfbf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${leagueSpartan.variable} antialiased`}>
      <body className="min-h-dvh bg-[#fbfbf8]">
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
