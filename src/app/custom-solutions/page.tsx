import type { Metadata } from "next";
import { customBuilds, customSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { EditorialLandingHero } from "@/components/site/EditorialLandingHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { CellGrid, GoodFor } from "@/components/site/Cells";

export const metadata: Metadata = {
  title: "Custom Solutions",
  description: "Sometimes ready-made software isn’t quite enough. Melorite can add to its products or build something new around exactly how you work.",
  alternates: { canonical: "/custom-solutions" },
};

export default function CustomSolutionsPage() {
  return (
    <PageTransition>
      <EditorialLandingHero
        label="Custom solutions"
        title="Software built around"
        mutedTitle="exactly how you work."
        description="Some businesses have a way of working that’s all their own. We can add to Melorite or build something new around your process, with a clear scope before we begin."
        image="/images/editorial/melorite-custom-solutions.webp"
        imagePosition="center"
        imageLabel="A collaborative team building a custom workflow around the way a business works"
        showImageAction={false}
        secondaryLabel="See how it works"
        secondaryHref="#how-it-works"
      />
      <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(64px,8vw,120px)] text-[#111735]">
        <div className="rail-inner">
          <Reveal><h2 className="h-section max-w-[14ch]">What we can build for you</h2></Reveal>
          <div className="mt-10"><CellGrid items={customBuilds} /></div>
          <Reveal id="how-it-works" className="mt-20 scroll-mt-28"><h2 className="h-section">How it works</h2></Reveal>
          <ol className="mt-10 border-t border-black/10">
            {customSteps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-black/10 py-7 md:grid-cols-[3rem_minmax(0,.7fr)_minmax(0,1.3fr)]">
                  <span className="grid size-9 place-items-center rounded-full border border-black/20 text-[12px] font-medium">{i + 1}</span>
                  <h3 className="font-serif text-[clamp(1.5rem,1.2rem+1vw,2rem)] tracking-[-0.03em]">{t}</h3>
                  <p className="col-start-2 text-[16px] leading-snug text-black/55 md:col-start-auto md:pt-2">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <GoodFor>Businesses with a process of their own, teams that have outgrown spreadsheets, and anyone who needs Melorite to do a little more.</GoodFor>
      <FinalCTA title="Tell us how you work." text="Share what’s slowing you down and we’ll come back with a clear scope, timeline and cost before we begin." />
    </PageTransition>
  );
}
