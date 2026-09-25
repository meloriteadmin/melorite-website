import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiProducts } from "@/data/ai";
import { PageTransition } from "@/components/animation/PageTransition";
import { OfferingStory } from "@/components/offering/OfferingStory";

const AI_PATHS = { agent: "ai-agent", calling: "ai-calling" } as const;
type Props = { params: Promise<{ product: keyof typeof AI_PATHS }> };

export function generateStaticParams() { return Object.keys(AI_PATHS).map((product) => ({ product })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: path } = await params;
  const product = aiProducts.find((item) => item.id === AI_PATHS[path]);
  if (!product) return {};
  const title = path === "agent" ? "Business AI Agent for Connected Operations" : "AI Calling for Business Conversations";
  const url = `/ai/${product.id === "ai-agent" ? "agent" : "calling"}`;
  return { title, description: product.description, alternates: { canonical: url }, openGraph: { title, description: product.description, url, images: ["/opengraph-image"] }, twitter: { card: "summary_large_image" } };
}

export default async function AIProductPage({ params }: Props) {
  const { product: path } = await params;
  const product = aiProducts.find((item) => item.id === AI_PATHS[path]);
  if (!product) notFound();
  const offering = { slug: path, name: product.name, eyebrow: "Melorite AI", description: product.description, accent: product.accent, icon: product.icon, modules: product.capabilities, capabilities: product.capabilities, workflow: path === "agent" ? ["Ask in natural language", "Understand business context", "Review recommendations", "Execute permitted actions", "Keep work connected"] : ["Receive or place a call", "Understand the request", "Qualify or route", "Synchronize business context", "Hand off when needed"] };
  return <PageTransition><OfferingStory offering={offering} kind="ai" hero={product.tagline} aiCalling={path === "calling"} /></PageTransition>;
}
