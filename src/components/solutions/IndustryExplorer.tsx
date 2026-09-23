"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { industries, industryGroups, type IndustryGroupId } from "@/data/industries";
import { EASE } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { industrySelection, scrollToId } from "@/lib/selection-store";

export function IndustryExplorer() {
  const [group, setGroup] = useState<IndustryGroupId | "all">("all");
  const list = group === "all" ? industries : industries.filter((i) => i.group === group);

  return (
    <section id="explorer" className="section-y scroll-mt-16 border-t border-line bg-paper">
      <div className="container-x">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Industry explorer" title={[`${industries.length} industry solutions.`, "One connected foundation."]} description="Each solution adds sector-specific records and workflows to the Business Apps it builds on." />
          <Tabs value={group} onValueChange={(v) => setGroup(v as IndustryGroupId | "all")}>
            <div className="no-scrollbar -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:px-0">
              <TabsList className="w-max" aria-label="Filter by sector">
                {[{ id: "all" as const, name: "All" }, ...industryGroups].map((g) => (
                  <TabsTrigger key={g.id} value={g.id}>
                    {g.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
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
