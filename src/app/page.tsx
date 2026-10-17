import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { PageTransition } from "@/components/animation/PageTransition";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { Hero } from "@/components/home/Hero";
import { IndustryGallery } from "@/components/home/IndustryGallery";
import { ExploreCards } from "@/components/home/ExploreCards";
import { WhyList } from "@/components/home/WhyList";
import { BusinessProblem, CallingFeature, CustomSolutionsIntro, GettingStarted, PlatformIntro } from "@/components/home/HomeSections";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = pageMetadata("/", "Business Management Software for Growing Businesses", "Explore Melorite business software for CRM, real estate, clinics, agencies, ecommerce and AI calling. Find your product and book a demo.");

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <PlatformOverview />
      <IndustryGallery />
      <BusinessProblem />
      <PlatformIntro />
      <CallingFeature />
      <CustomSolutionsIntro />
      <WhyList />
      <ExploreCards />
      <GettingStarted />
      <FinalCTA title="See Melorite in action." text="Book a demo and see how the right Melorite product can work around your business." />
    </PageTransition>
  );
}
