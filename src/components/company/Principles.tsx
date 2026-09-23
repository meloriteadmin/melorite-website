import { principles } from "@/data/company";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const SPANS = ["lg:col-span-4 lg:row-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"];

export function Principles() {
  return (
    <section id="principles" className="section-y scroll-mt-16">
      <div className="container-x">
        <SectionHeading eyebrow="What we believe" title={["The principles", "behind Melorite."]} />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {principles.map((p, i) => (
            <RevealItem
              key={p.id}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-[24px] p-7 ring-1 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(10,37,64,0.35)] md:p-8",
                i === 0 ? "min-h-[320px] bg-navy text-white ring-navy md:col-span-2" : "min-h-[220px] bg-white ring-line",
                SPANS[i],
              )}
            >
              {i === 0 && <div className="absolute inset-0 bg-grid-dark opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden />}
              <div className="relative flex items-start justify-between">
                <span className={cn("grid size-12 place-items-center rounded-[14px] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105", i === 0 ? "bg-white/10 text-white" : "bg-brand-50 text-brand")}>
                  <Icon name={p.icon} className="size-6" />
                </span>
                <span className={cn("font-mono text-[12px]", i === 0 ? "text-white/40" : "text-muted")}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="relative mt-10">
                <h3 className={cn("font-semibold tracking-[-0.025em]", i === 0 ? "text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.1]" : "text-[21px] text-navy")}>{p.title}</h3>
                <p className={cn("mt-3 max-w-[44ch] text-[15px] leading-relaxed", i === 0 ? "text-white/65" : "text-muted")}>{p.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
