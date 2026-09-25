import type { Metadata } from "next";
import Link from "next/link";
import { aiProducts } from "@/data/ai";
import { site } from "@/data/site";
import { PageTransition } from "@/components/animation/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { Icon } from "@/lib/icons";
import { cardVariants } from "@/components/ui/card";
import { tint } from "@/lib/utils";

const title = "Melorite AI | AI Agent and AI Calling";
const description = "Melorite AI brings AI Agent and AI Calling into the connected Melorite workspace.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/ai" }, openGraph: { title, description, url: "/ai" } };

export default function AIPage() {
  return (
    <PageTransition>
      <section className="border-b border-line bg-paper pb-16 pt-[124px] md:pb-20 md:pt-[144px]">
        <div className="container-x">
          <SectionHeading eyebrow="Melorite AI" size="h1" title={["AI that works with", "your business context."]} description="Melorite AI adds intelligent assistance and calling workflows to the same connected workspace your teams already use." />
        </div>
      </section>
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="AI products" title={["Two focused ways", "to work smarter."]} description="AI Agent and AI Calling are Melorite products—not separate business applications—and work alongside the teams and records in your workspace." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aiProducts.map((product) => (
              <article key={product.id} id={product.id} className={`${cardVariants({ variant: "default", padding: "none" })} scroll-mt-24 p-7 md:p-8`}>
                <span className="grid size-12 place-items-center rounded-[6px]" style={{ background: tint(product.accent, 0.1), color: product.accent }}><Icon name={product.icon} className="size-6" /></span>
                <h2 className="mt-6 text-h3 text-navy">{product.name}</h2>
                <p className="mt-2 text-[16px] font-medium text-slate-600">{product.tagline}</p>
                <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-muted">{product.description}</p>
                <ul className="mt-6 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
                  {product.capabilities.map((capability) => <li key={capability} className="text-[14px] text-slate-700">{capability}</li>)}
                </ul>
                <Link href={`/ai/${product.id === "ai-agent" ? "agent" : "calling"}`} className="mt-6 text-[14px] font-semibold text-brand hover:text-brand-700">Explore {product.name} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={["See how Melorite AI", "fits your workspace."]} description="Talk to our team about the right AI capabilities for your organization." primary={{ label: "Book a Demo", href: site.demoHref }} secondary={{ label: "Explore the Platform", href: "/platform" }} />
    </PageTransition>
  );
}
