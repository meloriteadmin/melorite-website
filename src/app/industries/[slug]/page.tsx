import { redirect } from "next/navigation";
import { industrySolutionBySlug } from "@/data/catalog";

export default async function LegacyIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(industrySolutionBySlug(slug) ? `/solutions/${slug}` : "/solutions");
}
