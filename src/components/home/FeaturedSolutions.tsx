import { featuredIndustries, industries } from "@/data/industries";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { RevealGroup, RevealItem, Reveal } from "@/components/animation/Reveal";

export function FeaturedSolutions() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Industry solutions"
            title={["Built for business.", "Adapted to your industry."]}
            description={`Different industries run on different processes. ${industries.length} industry solutions add sector-specific records and workflows on top of the same connected apps.`}
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/solutions" variant="dark" arrow>
              Explore Industry Solutions
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="no-scrollbar -mx-[var(--gutter)] mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-5">
          {featuredIndustries.slice(0, 6).map((ind) => (
            <RevealItem key={ind.id} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
              <IndustryCard industry={ind} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
