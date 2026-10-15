import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { products } from "@/data/products";
import { site } from "@/data/site";

const stats: [string, string][] = [
  [String(products.length), "focused products"],
  ["5", "business types"],
  ["Days", "to get started"],
  ["24/7", "AI availability"],
];

export function Stats() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(88px,11vw,160px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <Reveal>
            <p className="mono-label text-[#5f63f2]">One connected platform</p>
            <h2 className="h-section mt-5 max-w-[11ch]">Built around the work you already do.</h2>
            <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.55] text-[#111735]/60">Start with a product that understands your industry, then shape it around your team. No sprawling setup project. No software maze.</p>
            <Link href={site.demoHref} className="pill pill-dark mt-8 h-12 px-7">See Melorite in action <ArrowUpRight className="size-4" /></Link>
          </Reveal>
          <div className="grid grid-cols-2 border-l border-t border-[#111735]/12">
            {stats.map(([value, label], i) => (
              <Reveal key={label} delay={i * 0.06} className="min-h-44 border-b border-r border-[#111735]/12 p-6 sm:min-h-52 sm:p-8">
                <p className="text-[clamp(2.9rem,2rem+3vw,5rem)] font-bold leading-none tracking-[-.065em]">{value}</p>
                <p className="mt-5 max-w-[15ch] text-[13px] font-semibold uppercase tracking-[.12em] text-[#111735]/48">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
