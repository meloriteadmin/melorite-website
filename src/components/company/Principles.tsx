import { principles } from "@/data/company";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];
const TONES = ["pastel-card-blue", "pastel-card-peach", "pastel-card-violet", "pastel-card-green", "pastel-card-rose"];

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
                "group relative flex min-h-[220px] flex-col overflow-hidden rounded-xl p-7 ring-1 ring-black/[.06] transition-shadow duration-500 hover:shadow-[0_18px_36px_-26px_rgba(79,70,120,0.2)] md:p-8",
                i === 0 && "md:col-span-2",
                TONES[i],
                SPANS[i],
              )}
            >
              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-[14px] bg-brand-50 text-brand transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon name={p.icon} className="size-6" />
                </span>
                <span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="relative mt-10 max-w-[54ch]">
                <h3 className={cn("font-medium tracking-[-0.025em] text-navy", i === 0 ? "text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.1]" : "text-[21px]")}>{p.title}</h3>
                <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-muted">{p.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
