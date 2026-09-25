import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businessApplications, businessApplicationBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { ButtonLink } from "@/components/shared/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return businessApplications.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = businessApplicationBySlug((await params).slug);
  if (!product) return {};
  const title = `${product.name} | Melorite Business Applications`;
  return { title, description: product.description, alternates: { canonical: `/business-applications/${product.slug}` }, openGraph: { title, description: product.description, url: `/business-applications/${product.slug}` } };
}

export default async function BusinessApplicationDetailPage({ params }: Props) {
  const product = businessApplicationBySlug((await params).slug);
  if (!product) notFound();
  return (
    <PageTransition>
      <section className="border-b border-line bg-paper pb-16 pt-[124px] md:pb-20 md:pt-[144px]" style={{ borderTopColor: tint(product.accent, 0.45) }}>
        <div className="container-x max-w-5xl"><span className="grid size-11 place-items-center rounded-[6px]" style={{ background: tint(product.accent, 0.1), color: product.accent }}><Icon name={product.icon} className="size-5" /></span><p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">{product.eyebrow}</p><h1 className="mt-3 text-h1 text-navy">{product.name}</h1><p className="text-lead mt-5 max-w-[55ch] text-muted">{product.description}</p><div className="mt-8"><ButtonLink href={site.demoHref} size="lg" arrow>Book a Demo</ButtonLink></div></div>
      </section>
      <section className="section-y bg-white"><div className="container-x max-w-5xl"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]"><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Included capabilities</p><h2 className="mt-3 text-h2 text-navy">One connected application.</h2></div><ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{product.modules.map((module) => <li key={module} className="border-b border-line pb-3 text-[16px] font-medium text-navy">{module}</li>)}</ul></div><div className="mt-16 grid gap-12 border-t border-line pt-10 lg:grid-cols-2"><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">What teams can do</p><div className="mt-6 grid gap-4">{product.capabilities.map((capability) => <p key={capability} className="border-l-2 pl-5 text-[16px] font-medium text-navy" style={{ borderColor: product.accent }}>{capability}</p>)}</div></div><div><p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-brand">Connected workflow</p><ol className="mt-6 space-y-3">{product.workflow.map((step, index) => <li key={step} className="border-b border-line pb-3 text-[16px] font-medium text-navy"><span className="mr-3 text-[13px] text-muted">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></div></div></section>
    </PageTransition>
  );
}
