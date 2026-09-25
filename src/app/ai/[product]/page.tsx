import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiProducts } from "@/data/ai";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { ButtonLink } from "@/components/shared/Button";

const AI_PATHS = { agent: "ai-agent", calling: "ai-calling" } as const;
type Props = { params: Promise<{ product: keyof typeof AI_PATHS }> };

export function generateStaticParams() { return Object.keys(AI_PATHS).map((product) => ({ product })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: path } = await params;
  const product = aiProducts.find((item) => item.id === AI_PATHS[path]);
  if (!product) return {};
  const title = `${product.name} | Melorite AI`;
  return { title, description: product.description, alternates: { canonical: `/ai/${product.id === "ai-agent" ? "agent" : "calling"}` }, openGraph: { title, description: product.description } };
}

export default async function AIProductPage({ params }: Props) {
  const { product: path } = await params;
  const product = aiProducts.find((item) => item.id === AI_PATHS[path]);
  if (!product) notFound();
  return (
    <PageTransition>
      <section className="border-b border-line bg-paper pb-16 pt-[124px] md:pb-20 md:pt-[144px]"><div className="container-x max-w-5xl"><span className="grid size-11 place-items-center rounded-[6px]" style={{ background: tint(product.accent, 0.1), color: product.accent }}><Icon name={product.icon} className="size-5" /></span><p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Melorite AI</p><h1 className="mt-3 text-h1 text-navy">{product.name}</h1><p className="mt-5 max-w-[55ch] text-[20px] font-medium leading-relaxed text-navy">{product.tagline}</p><p className="text-lead mt-4 max-w-[55ch] text-muted">{product.description}</p><div className="mt-8"><ButtonLink href={site.demoHref} size="lg" arrow>Book a Demo</ButtonLink></div></div></section>
      <section className="section-y bg-white"><div className="container-x max-w-5xl"><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Capabilities</p><h2 className="mt-3 text-h2 text-navy">Intelligence across your operations.</h2><div className="mt-10 grid divide-y divide-line border-y border-line md:grid-cols-2 md:divide-x md:divide-y-0">{product.capabilities.map((capability) => <div key={capability} className="py-5 text-[16px] font-medium text-navy md:px-6 md:first:pl-0">{capability}</div>)}</div></div></section>
    </PageTransition>
  );
}
