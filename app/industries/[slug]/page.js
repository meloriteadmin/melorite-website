import { notFound } from "next/navigation";
import SolutionPage from "@/components/SolutionPage";
import { INDUSTRY_PAGES } from "@/data/catalog";

export function generateStaticParams() {
  return Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = INDUSTRY_PAGES[slug];
  return { title: industry ? `${industry.title} | Melorite` : "Melorite" };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRY_PAGES[slug];
  if (!industry) notFound();
  return <SolutionPage data={industry} />;
}
