import { notFound } from "next/navigation";
import { TEAMS, TEAM_SLUGS } from "@/data/teams";
import SolutionPage from "@/components/SolutionPage";

export function generateStaticParams() {
  return TEAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = TEAMS[slug];
  if (!data) return {};
  return { title: `${data.metaTitle} | Sana` };
}

export default async function TeamPage({ params }) {
  const { slug } = await params;
  const data = TEAMS[slug];
  if (!data) notFound();
  return <SolutionPage data={data} />;
}
