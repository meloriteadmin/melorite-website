import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Hero } from "@/components/home/Hero";
import { LeadFlow } from "@/components/home/LeadFlow";
import { LeadsTable } from "@/components/home/LeadsTable";
import { CallsAndSetup } from "@/components/home/CallsAndSetup";
import { Stats } from "@/components/home/Stats";
import { Stories } from "@/components/home/Stories";
import { ProductCards } from "@/components/home/ProductCards";
import { WhyList } from "@/components/home/WhyList";
import { EditorialFeature } from "@/components/home/EditorialFeature";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = {
  title: "Software That Fits Your Business",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Melorite | Software That Fits Your Business", description: site.description, url: "/", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: `${site.url}${site.logo}`, description: site.tagline },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, publisher: { "@id": `${site.url}/#organization` } },
  ],
};

export default function HomePage() {
  return (
    <PageTransition>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <LeadFlow />
      <LeadsTable />
      <CallsAndSetup />
      <Stats />
      <EditorialFeature />
      <Stories />
      <ProductCards />
      <WhyList />
      <FinalCTA />
    </PageTransition>
  );
}
