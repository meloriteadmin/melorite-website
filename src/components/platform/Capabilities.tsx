"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Lightbulb } from "lucide-react";
import { platformCapabilities } from "@/data/platform";
import { Icon } from "@/lib/icons";
import { cn, EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MockFrame } from "@/components/mockups/WorkspaceMock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CapabilityPreview({ id }: { id: string }) {
  const c = platformCapabilities.find((x) => x.id === id)!;
  return (
    <MockFrame url={`app.melorite.com/settings/${c.id}`} designWidth={900}>
      <div className="flex items-center gap-[1.2em] border-b border-[#e8edf3] px-[2.4em] py-[2em]">
        <span className="grid size-[4.4em] place-items-center rounded-[1em] bg-[#eff6ff] text-[#2563eb]">
          <Icon name={c.icon} className="size-[2.2em]" />
        </span>
        <div>
          <div className="font-mono text-[1.1em] uppercase tracking-[0.14em] text-[#64748b]">Platform capability</div>
          <div className="text-[2.4em] font-semibold tracking-[-0.02em] text-[#0a2540]">{c.title}</div>
        </div>
      </div>
      <div className="space-y-[1em] p-[2.4em]">
        {c.points.map((pt, i) => (
          <motion.div
            key={pt}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08, ease: EASE }}
            className="flex items-center gap-[1.2em] rounded-[1em] bg-white px-[1.8em] py-[1.5em] ring-1 ring-[#e3e8ef]"
          >
            <span className="grid size-[2.6em] place-items-center rounded-full bg-[#ecfdf5] text-[#059669]">
              <Check className="size-[1.4em]" />
            </span>
            <span className="text-[1.6em] font-medium text-[#0a2540]">{pt}</span>
            <span className="ml-auto h-[0.8em] w-[18%] rounded-full bg-[#eef2f7]" />
          </motion.div>
        ))}
      </div>
    </MockFrame>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(platformCapabilities[0].id);
  const c = platformCapabilities.find((x) => x.id === active)!;

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading eyebrow="Platform capabilities" title={["Built once.", "Shared by every application."]} description="Platform-level capabilities that every Melorite application relies on." />

        <Tabs value={active} onValueChange={setActive} orientation="vertical" className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <TabsList variant="line" aria-label="Capabilities" className="h-auto w-full flex-col items-stretch gap-0 divide-y divide-line rounded-none border-y border-line p-0 lg:col-span-5">
            {platformCapabilities.map((cap) => {
              const on = cap.id === active;
              return (
                <div key={cap.id}>
                  <TabsTrigger
                    value={cap.id}
                    className="group h-auto w-full justify-start gap-4 rounded-none px-0 py-4 text-left after:hidden data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-[10px] transition-colors", on ? "bg-brand text-white" : "bg-white text-muted ring-1 ring-line group-hover:text-navy")}>
                      <Icon name={cap.icon} className="size-[18px]" />
                    </span>
                    <span className={cn("text-[16px] font-medium tracking-[-0.015em] transition-colors", on ? "text-navy" : "text-slate-500 group-hover:text-navy")}>{cap.title}</span>
                    {cap.status !== "available" && <StatusBadge status={cap.status} className="ml-auto" />}
                  </TabsTrigger>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-[52px] text-[15px] leading-relaxed text-muted">{cap.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </TabsList>

          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <TabsContent value={c.id} forceMount>
                <AnimatePresence mode="wait">
                  <motion.div key={c.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }}>
                    <CapabilityPreview id={c.id} />
                    <div className="mt-5 flex gap-4 rounded-[16px] border border-line bg-white p-5">
                      <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-brand-50 text-brand">
                        <Lightbulb className="size-[18px]" aria-hidden />
                      </span>
                      <div>
                        <div className="text-[13px] font-semibold text-navy">In practice</div>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted">{c.useCase}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
