import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { CompanyHero } from "@/components/company/CompanyHero";
import { Mission } from "@/components/company/Mission";
import { ContactIntro, ContactSection } from "@/components/company/ContactSection";
import { CTASection } from "@/components/shared/CTASection";

const Vision = dynamic(() => import("@/components/company/Vision").then((m) => m.Vision));
const Principles = dynamic(() => import("@/components/company/Principles").then((m) => m.Principles));
const Approach = dynamic(() => import("@/components/company/Approach").then((m) => m.Approach));

const title = "About Melorite | Building Connected Business Software";
const description =
  "Melorite is building one connected, modular business platform. Learn about our mission, principles and approach — and book a demo or contact our team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/company" },
  openGraph: { title, description, url: "/company" },
};

export default function CompanyPage() {
  return (
    <PageTransition>
      <CompanyHero />
      <Mission />
      <Vision />
      <Principles />
      <Approach />
      <div className="pt-16 md:pt-24" />
      <ContactIntro />
      <ContactSection />
      <CTASection
        title={["The next step", "starts with a conversation."]}
        primary={{ label: "Book a Demo", href: site.demoHref }}
        secondary={{ label: "Explore the Platform", href: "/platform" }}
      />
    </PageTransition>
  );
}
