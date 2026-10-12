import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown } from "lucide-react";
import { agencyPortal, callFlows, productBySlug, products } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { CellGrid, GoodFor } from "@/components/site/Cells";
import { ProductVisual, tintFor } from "@/components/site/ProductVisuals";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  const title = `${p.name} | ${p.headline.join(" ")}`;
  return { title: p.name, description: `${p.lead} ${p.summary}`, alternates: { canonical: `/products/${p.slug}` }, openGraph: { title, url: `/products/${p.slug}` } };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const others = products.filter((o) => o.slug !== p.slug);

  return (
    <PageTransition>
      <PageHero label={p.name} title={p.headline.join(" ")} lead={p.lead} body={p.body} variant="photo" tint={tintFor[p.slug]} visual={<ProductVisual slug={p.slug} />} />

      <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          {p.slug === "ai-calling" ? (
            <>
              <Reveal><h2 className="h-section max-w-[16ch]">Inbound and outbound, handled.</h2></Reveal>
              <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-black/10 bg-black/10 lg:grid-cols-2">
                {(["inbound", "outbound"] as const).map((k) => (
                  <Reveal key={k} className="bg-white p-[clamp(24px,3.4vw,48px)]">
                    <p className="mono-label text-[#5f63f2]">{callFlows[k].title}</p>
                    <p className="mt-2 text-[15px] text-black/50">{callFlows[k].subtitle}</p>
                    <ol className="mt-8">
                      {callFlows[k].steps.map((s, i) => (
                        <li key={s}>
                          <p className="font-serif text-[clamp(1.25rem,1.1rem+.5vw,1.55rem)] leading-snug tracking-tight">{s}</p>
                          {i < callFlows[k].steps.length - 1 && <ArrowDown className="my-3 size-4 text-black/30" />}
                        </li>
                      ))}
                    </ol>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <>
              <Reveal><h2 className="h-section max-w-[16ch]">{p.slug === "agency" ? "For your team" : "What it does"}</h2></Reveal>
              <div className="mt-10"><CellGrid items={p.does} /></div>
              {p.slug === "agency" && (
                <>
                  <Reveal className="mt-16"><h2 className="h-section max-w-[18ch]">For your clients: their own private portal</h2></Reveal>
                  <div className="mt-10"><CellGrid items={agencyPortal} /></div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <GoodFor>{p.goodFor}</GoodFor>

      <section data-nav="light" className="rails rails-light bg-[#f6f7fe] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><p className="mono-label text-black/45">More from Melorite</p><h2 className="h-section mt-3">Other products</h2></Reveal>
          <ul className="mt-10 border-t border-black/10">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-black/10">
                <Link href={`/products/${o.slug}`} className="group flex items-center justify-between gap-6 py-6 transition-[padding] duration-300 hover:pl-3">
                  <div><h3 className="font-serif text-[clamp(1.4rem,1.15rem+.9vw,1.9rem)] tracking-[-0.03em]">{o.name}</h3><p className="mt-1 max-w-[56ch] text-[15px] text-black/50">{o.summary}</p></div>
                  <span aria-hidden className="text-xl text-black/40 transition-transform group-hover:translate-x-1 group-hover:text-black">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
