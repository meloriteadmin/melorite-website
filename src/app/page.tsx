import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Hero } from "@/components/home/Hero";
import { ConnectedSystems } from "@/components/home/ConnectedSystems";
import { CTASection } from "@/components/shared/CTASection";

// Below-the-fold sections are split into their own chunks.
const ConnectedBeams = dynamic(() => import("@/components/home/ConnectedBeams").then((m) => m.ConnectedBeams));
const FeaturedProducts = dynamic(() => import("@/components/home/FeaturedProducts").then((m) => m.FeaturedProducts));
const FeaturedSolutions = dynamic(() => import("@/components/home/FeaturedSolutions").then((m) => m.FeaturedSolutions));
const ConnectedWorkflows = dynamic(() => import("@/components/home/ConnectedWorkflows").then((m) => m.ConnectedWorkflows));
const Advantages = dynamic(() => import("@/components/home/Advantages").then((m) => m.Advantages));

export const metadata: Metadata = {
  title: "Melorite | One Connected Business Platform",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Melorite | One Connected Business Platform", description: site.description, url: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}${site.logo}`,
      description: site.tagline,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function HomePage() {
  return (
    <PageTransition>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ConnectedSystems />
      <FeaturedProducts />
      <ConnectedBeams />
      <ConnectedWorkflows />
      <FeaturedSolutions />
      <Advantages />
      <CTASection
        title={["Bring your business", "together with Melorite."]}
        description="Explore a more connected way to manage your operations, with applications and capabilities tailored to your business."
        primary={{ label: "Book a Demo", href: site.demoHref }}
        secondary={{ label: "Explore Products", href: "/products" }}
      />
    </PageTransition>
  );
}
