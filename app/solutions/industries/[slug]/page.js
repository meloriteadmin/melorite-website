import { notFound } from "next/navigation";
import { INDUSTRIES, INDUSTRY_SLUGS } from "@/data/industries";
import SolutionPage from "@/components/SolutionPage";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = INDUSTRIES[slug];
  if (!data) return {};
  return { title: `${data.metaTitle} | Sana` };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const data = INDUSTRIES[slug];
  if (!data) notFound();
  return <SolutionPage data={data} />;
}
