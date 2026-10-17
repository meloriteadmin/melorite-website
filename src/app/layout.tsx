import { Analytics } from "@/components/analytics/Analytics";
import { siteIdentity } from "@/components/site/SiteIdentity";
import { jsonLd } from "@/lib/seo";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { Providers } from "@/components/animation/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingDemo } from "@/components/layout/FloatingDemo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Melorite | Software That Fits Your Business",
    template: "%s | Melorite",
  },
  description: site.description,
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(siteIdentity) }} />
        <Analytics />
        <Providers>
          <Navbar />
          <div className="frame">
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
          </div>
          <Footer />
          <FloatingDemo />
        </Providers>
      </body>
    </html>
  );
}
