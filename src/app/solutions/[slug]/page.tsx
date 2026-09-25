import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industrySolutions, industrySolutionBySlug } from "@/data/catalog";
import { OfferingStory } from "@/components/offering/OfferingStory";
import { PageTransition } from "@/components/animation/PageTransition";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return industrySolutions.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const item = industrySolutionBySlug((await params).slug); if (!item) return {}; const title = `${item.name} Software`; return { title, description: item.description, alternates: { canonical: `/solutions/${item.slug}` }, openGraph: { title, description: item.description, url: `/solutions/${item.slug}`, images: ["/opengraph-image"] }, twitter: { card: "summary_large_image" } }; }
export default async function SolutionPage({ params }: Props) { const item = industrySolutionBySlug((await params).slug); if (!item) notFound(); return <PageTransition><OfferingStory offering={item} kind="solution" /></PageTransition>; }
