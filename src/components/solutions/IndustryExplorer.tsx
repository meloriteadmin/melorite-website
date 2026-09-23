"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { industries, industryGroups, type IndustryGroupId } from "@/data/industries";
import { cn, EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { industrySelection, scrollToId } from "@/lib/selection-store";

export function IndustryExplorer() {
  const [group, setGroup] = useState<IndustryGroupId | "all">("all");
  const list = group === "all" ? industries : industries.filter((i) => i.group === group);

  return (
    <section id="explorer" className="section-y scroll-mt-16 bg-paper">
      <div className="container-x">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Industry explorer" title={[`${industries.length} industry solutions.`, "One connected foundation."]} />
          <div role="tablist" aria-label="Filter by sector" className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-wrap lg:px-0">
            {[{ id: "all" as const, name: "All" }, ...industryGroups].map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={group === g.id}
                onClick={() => setGroup(g.id)}
                className={cn("relative shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors", group === g.id ? "text-white" : "text-slate-600 ring-1 ring-line-strong hover:text-navy")}
              >
                {group === g.id && <motion.span layoutId="ind-filter" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span className="relative">{g.name}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((ind) => (
              <motion.div
                key={ind.id}
                id={`solution-${ind.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="scroll-mt-28"
              >
                <IndustryCard
                  industry={ind}
                  showAreas
                  className="h-full"
                  href={`#featured`}
                  onSelect={() => {
                    industrySelection.set(ind.id);
                    requestAnimationFrame(() => scrollToId("featured"));
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
