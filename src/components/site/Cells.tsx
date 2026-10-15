import { Reveal } from "@/components/animation/Reveal";

/** Bordered 2-column grid of short capability statements (the “What it does” table). */
export function CellGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="media-frame grid overflow-hidden border-l border-t border-black/10 bg-white sm:grid-cols-2">
      {items.map((t, i) => (
        <Reveal key={t} delay={(i % 2) * 0.06} className="flex min-h-[96px] items-center gap-4 border-b border-r border-black/10 p-6 text-[16.5px] leading-snug">
          <span className="font-serif text-[13px] text-[#5f63f2]">0{i + 1}</span>{t}
        </Reveal>
      ))}
    </div>
  );
}

export function GoodFor({ children }: { children: React.ReactNode }) {
  return (
    <section data-nav="light" className="rails rails-light bg-[#eeeffe] py-[clamp(72px,8vw,116px)] text-[#111735]">
      <div className="rail-inner grid gap-6 lg:grid-cols-[minmax(0,.6fr)_minmax(0,1.4fr)] lg:gap-16">
        <p className="mono-label pt-3 text-[#5f63f2]">Good for</p>
        <p className="h-story max-w-[26ch]">{children}</p>
      </div>
    </section>
  );
}
