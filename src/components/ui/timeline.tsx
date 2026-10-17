"use client";

import { useEffect, useRef, useState } from "react";

export type TimelineItem = {
  id: string;
  label: string;
  title: string;
  content: string;
};

export type TimelineProps = {
  eyebrow?: string;
  title?: string;
  periodLabel?: string;
  items: readonly TimelineItem[];
  className?: string;
  /** Kept for API compatibility with earlier callers. */
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
};

/**
 * Steps as a calm vertical ledger: a sticky heading on the left, numbered rows on the right
 * separated by hairlines. The row nearest the middle of the screen lights up. No pinning,
 * no scroll hijacking.
 */
export default function Timeline({ eyebrow = "The journey", title = "From first step to lasting progress.", periodLabel, items, className = "" }: TimelineProps) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;
  return (
    <section data-nav="light" aria-labelledby="timeline-heading" className={`lines-bg relative border-y border-[#111735]/8 py-[clamp(64px,8vw,120px)] text-[#111735] ${className}`}>
      <div className="rail-inner grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow-pill">{eyebrow}</p>
          <h2 id="timeline-heading" className="h-section mt-5 max-w-[14ch]">{title}</h2>
          {periodLabel && <p className="mt-5 text-[15px] font-medium text-[#111735]/55">{periodLabel}</p>}
        </header>
        <ol className="relative border-t border-[#111735]/12">
          {items.map((item, i) => {
            const on = i === active;
            return (
              <li key={item.id} data-i={i} ref={(el) => { refs.current[i] = el; }} className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-[#111735]/12 py-9 sm:gap-x-10 sm:py-12">
                <span className={`pt-1 text-[clamp(2.5rem,4vw,3.75rem)] font-semibold leading-none tracking-[-.05em] tabular-nums transition-colors duration-500 ${on ? "text-[#4b4fe0]" : "text-[#111735]/15"}`}>{String(i + 1).padStart(2, "0")}</span>
                <div className={`transition-opacity duration-500 ${on ? "opacity-100" : "opacity-55"}`}>
                  <p className="text-[12px] font-semibold uppercase tracking-[.16em] text-[#111735]/45">{item.label}</p>
                  <h3 className="mt-2 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.1] tracking-[-.035em]">{item.title}</h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.6] text-[#111735]/62">{item.content}</p>
                  <span aria-hidden className={`mt-6 block h-px origin-left bg-[#4b4fe0] transition-transform duration-700 ${on ? "scale-x-100" : "scale-x-0"}`} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
