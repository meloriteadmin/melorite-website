import { featuredProducts, type Product } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { ImageReveal } from "@/components/animation/ImageReveal";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";

/** One data-driven capability section — the same component renders every featured product. */
function CapabilitySection({ p, flip }: { p: Product; flip: boolean }) {
  return (
    <article id={`capabilities-${p.id}`} className="grid grid-cols-1 scroll-mt-24 gap-10 border-t border-line pt-16 lg:grid-cols-12 lg:gap-14 lg:pt-24">
      <div className={cn("lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        <Reveal y={10}>
          <span className="inline-flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-[10px]" style={{ background: tint(p.accent, 0.12), color: p.accent }}>
              <Icon name={p.icon} className="size-5" />
            </span>
            <Eyebrow>{p.shortName}</Eyebrow>
          </span>
        </Reveal>
        <TextReveal as="h3" lines={[p.tagline]} className="text-h3 mt-5 max-w-[20ch] text-navy" />
        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{p.description}</p>
        </Reveal>
        <RevealGroup className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          {p.capabilities.slice(0, 6).map((c) => (
            <RevealItem key={c.title}>
              <div className="mb-2 h-0.5 w-6 rounded-full" style={{ background: p.accent }} aria-hidden />
              <h4 className="text-[15px] font-semibold text-navy">{c.title}</h4>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{c.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
        <div className="lg:sticky lg:top-28">
          <ImageReveal direction={flip ? "right" : "left"}>
            <WorkspaceMock product={p} />
          </ImageReveal>
          <Reveal delay={0.15} className="mt-5 rounded-[16px] bg-white p-5 ring-1 ring-line">
            <div className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: p.accent }}>
              In practice · {p.useCase.title}
            </div>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.useCase.description}</p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function ProductCapabilities() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="max-w-[760px]">
          <Reveal y={10}>
            <Eyebrow>Product capabilities</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["A closer look at", "featured applications."]} className="text-h2 mt-5 text-navy" />
        </div>
        <div className="mt-16 space-y-16 lg:space-y-24">
          {featuredProducts.map((p, i) => (
            <CapabilitySection key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
