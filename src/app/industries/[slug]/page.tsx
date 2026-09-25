import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industrySolutions, industrySolutionBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { ButtonLink } from "@/components/shared/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return industrySolutions.map((industry) => ({ slug: industry.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industrySolutionBySlug((await params).slug);
  if (!industry) return {};
  const title = `${industry.name} | Melorite Industry Solutions`;
  return { title, description: industry.description, alternates: { canonical: `/industries/${industry.slug}` }, openGraph: { title, description: industry.description, url: `/industries/${industry.slug}` } };
}

export default async function IndustryDetailPage({ params }: Props) {
  const industry = industrySolutionBySlug((await params).slug);
  if (!industry) notFound();
  return (
    <PageTransition>
      <section className="border-b border-line bg-paper pb-16 pt-[124px] md:pb-20 md:pt-[144px]" style={{ borderTopColor: tint(industry.accent, 0.45) }}><div className="container-x max-w-5xl"><span className="grid size-11 place-items-center rounded-[6px]" style={{ background: tint(industry.accent, 0.1), color: industry.accent }}><Icon name={industry.icon} className="size-5" /></span><p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">{industry.eyebrow}</p><h1 className="mt-3 text-h1 text-navy">{industry.name}</h1><p className="text-lead mt-5 max-w-[55ch] text-muted">{industry.description}</p><div className="mt-8"><ButtonLink href={site.demoHref} size="lg" arrow>Book a Demo</ButtonLink></div></div></section>
      <section className="section-y bg-white"><div className="container-x max-w-5xl"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]"><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Core workflow</p><h2 className="mt-3 text-h2 text-navy">Designed around how your team works.</h2></div><ol className="grid gap-3 sm:grid-cols-2">{industry.workflow.map((step, index) => <li key={step} className="border-l-2 pl-4 text-[16px] font-medium text-navy" style={{ borderColor: industry.accent }}><span className="mr-2 text-[13px] text-muted">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div><div className="mt-16 grid gap-12 border-t border-line pt-10 lg:grid-cols-2"><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Solution capabilities</p><ul className="mt-7 space-y-3">{industry.modules.map((module) => <li key={module} className="border-b border-line pb-3 text-[15px] font-medium text-navy">{module}</li>)}</ul></div><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Built on Melorite</p><p className="mt-3 text-[16px] leading-relaxed text-muted">This solution brings industry-specific workflows to the shared Melorite platform—connecting the applications, data and teams your organization needs.</p><ul className="mt-7 space-y-3">{industry.capabilities.map(x => <li key={x} className="border-b border-line pb-3 text-[15px] font-medium text-navy">{x}</li>)}</ul></div></div></div></section>
    </PageTransition>
  );
}
