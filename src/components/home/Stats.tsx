import Link from "next/link";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function Stats() {
  const stats: [string, string][] = [
    [String(products.length), "Ready-to-use products"],
    ["5", "Kinds of business served"],
    ["Days", "to go live, not months"],
    ["24/7", "AI answering and calling"],
  ];
  return (
    <section data-nav="dark" className="rails atmos-earth relative overflow-hidden bg-[#050608] pb-[clamp(72px,9vw,128px)] pt-[clamp(120px,16vw,230px)] text-white">
      <div className="atmos-stars pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div className="rail-inner relative">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <h2 className="h-section mx-auto max-w-[15em] text-white">Ready for your industry. Simple to use. Easy to start.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-6 max-w-[620px] text-center text-[clamp(1rem,.95rem+.3vw,1.2rem)] text-white/65">
          Melorite builds simple software for specific kinds of business, so your team doesn’t have to change how it works to fit the software.
        </Reveal>
        <Reveal delay={0.18} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={site.demoHref} className="pill pill-light h-12 px-6">Book a demo</Link>
          <Link href="/products" className="pill pill-ghost-dark h-12 px-6">Explore products</Link>
        </Reveal>
        <div className="mt-[clamp(72px,9vw,120px)] grid grid-cols-2 gap-y-12 border-t border-white/10 pt-12 lg:grid-cols-4">
          {stats.map(([v, l], i) => (
            <Reveal key={l} delay={i * 0.07} className="lg:px-4">
              <p className="font-serif text-[clamp(3.6rem,2.4rem+5vw,6.8rem)] font-light leading-none tracking-[-0.045em]">{v}</p>
              <p className="mt-4 max-w-[22ch] text-[clamp(1rem,.95rem+.25vw,1.2rem)] leading-snug text-white/70">{l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
