import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { solutionFaqs } from "@/data/faqs";
import { PageTransition } from "@/components/animation/PageTransition";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { IndustryExplorer } from "@/components/solutions/IndustryExplorer";
import { CTASection } from "@/components/shared/CTASection";
import { FAQ } from "@/components/shared/FAQ";

const IndustryShowcase = dynamic(() => import("@/components/solutions/IndustryShowcase").then((m) => m.IndustryShowcase));
const SolutionConfigurator = dynamic(() => import("@/components/solutions/SolutionConfigurator").then((m) => m.SolutionConfigurator));
const UseCases = dynamic(() => import("@/components/solutions/UseCases").then((m) => m.UseCases));
const SolutionFinder = dynamic(() => import("@/components/solutions/SolutionFinder").then((m) => m.SolutionFinder));

const title = "Melorite Solutions | Industry-Specific Business Software";
const description =
  "Industry solutions for healthcare, real estate, construction, manufacturing, retail, logistics, hospitality, education and more — built on Melorite's connected Business Apps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title, description, url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <PageTransition>
      <SolutionsHero />
      <IndustryExplorer />
      <IndustryShowcase />
      <SolutionConfigurator />
      <UseCases />
      <SolutionFinder />
      <FAQ items={solutionFaqs} title={["Solutions", "questions."]} />
      <CTASection
        title={["Let's build around", "your business needs."]}
        description="Tell us about your industry, operations and requirements. Our team can help you explore the relevant Melorite capabilities."
        primary={{ label: "Talk to Our Team", href: "/company?enquiry=industry#contact" }}
      />
    </PageTransition>
  );
}
