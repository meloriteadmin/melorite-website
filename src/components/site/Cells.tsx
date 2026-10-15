import { Blocks, Check, GitBranch, LayoutDashboard, Plug, Puzzle, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

const cellIcons: LucideIcon[] = [Puzzle, GitBranch, Plug, LayoutDashboard, Blocks, Check];

/** Grid of short capability statements, each on an icon card. */
export function CellGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => {
        const Icon = cellIcons[i % cellIcons.length];
        return (
          <Reveal key={t} delay={(i % 3) * 0.06} className="card flex flex-col gap-8 p-6">
            <span className={`${["mesh-crm", "mesh-estate", "mesh-agency", "mesh-calling", "mesh-clinic", "mesh-commerce"][i % 6]} grain relative grid size-12 place-items-center overflow-hidden rounded-2xl text-[#2f33b8]`}><Icon className="relative z-10 size-5" strokeWidth={1.9} /></span>
            <p className="text-[17px] font-semibold leading-snug tracking-[-.02em]">{t}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

export function GoodFor({ children }: { children: React.ReactNode }) {
  return (
    <section data-nav="light" className="bg-[#f4f5ff] py-[clamp(56px,6.5vw,96px)] text-[#111735]">
      <div className="rail-inner">
        <Reveal className="mesh-calling grain relative overflow-hidden rounded-[32px] px-6 py-[clamp(40px,6vw,80px)] text-center sm:px-12">
          <div className="relative z-10 mx-auto max-w-[820px]"><p className="eyebrow-pill">Good for</p><p className="h-story mx-auto mt-5">{children}</p></div>
        </Reveal>
      </div>
    </section>
  );
}
