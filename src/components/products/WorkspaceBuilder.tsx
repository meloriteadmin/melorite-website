"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Check, Plus, RotateCcw } from "lucide-react";
import { productCategories, products, productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { MockFrame } from "@/components/mockups/WorkspaceMock";

/** Illustrative explorer only — no prices, no provisioning. */
export function WorkspaceBuilder() {
  const [selected, setSelected] = useState<string[]>(["crm", "finance"]);
  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const href = `/company?enquiry=product${selected.length ? `&apps=${selected.join(",")}` : ""}#contact`;
  const landing = selected.length === 0 ? "Select an application to begin" : selected.length === 1 ? `Opens directly in ${productById(selected[0])!.shortName}` : "Opens Workspace Home with your apps";

  return (
    <section id="builder" className="section-y relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]" aria-hidden />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading dark className="lg:col-span-7" eyebrow="Build your own workspace" title={["Your business.", "Your combination of tools."]} />
          <p className="text-lead text-white/60 lg:col-span-5">
            Choose applications to see how they come together in one Melorite workspace. This is an illustration to help you explore — our team will confirm the right setup with you.
          </p>
        </div>

        <LayoutGroup>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Picker */}
            <fieldset className="lg:col-span-5">
              <legend className="sr-only">Choose applications</legend>
              <div className="space-y-6">
                {productCategories.map((c) => (
                  <div key={c.id}>
                    <div className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/40">{c.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {products
                        .filter((p) => p.category === c.id)
                        .map((p) => {
                          const on = selected.includes(p.id);
                          return (
                            <label
                              key={p.id}
                              className={cn(
                                "relative inline-flex cursor-pointer select-none items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[14px] font-medium ring-1 transition-all duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-200",
                                on ? "bg-white text-navy ring-white" : "bg-white/[0.04] text-white/80 ring-white/15 hover:bg-white/10",
                              )}
                            >
                              <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(p.id)} />
                              <span className="grid size-7 place-items-center rounded-full transition-colors" style={on ? { background: tint(p.accent, 0.14), color: p.accent } : { background: "rgba(255,255,255,0.08)", color: "#fff" }}>
                                {on ? <Check className="size-3.5" aria-hidden /> : <Plus className="size-3.5" aria-hidden />}
                              </span>
                              {p.shortName}
                            </label>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Preview */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-28">
                <MockFrame url="app.melorite.com/home" designWidth={960}>
                  <div className="flex items-center justify-between border-b border-[#e8edf3] px-[2.4em] py-[1.8em]">
                    <div>
                      <div className="font-mono text-[1.1em] uppercase tracking-[0.14em] text-[#64748b]">Your organization</div>
                      <div className="text-[2.6em] font-semibold tracking-[-0.02em] text-[#0a2540]">Workspace</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[3.2em] font-semibold tabular-nums tracking-[-0.03em] text-[#2563eb]">{selected.length}</div>
                      <div className="text-[1.2em] text-[#64748b]">{selected.length === 1 ? "application" : "applications"}</div>
                    </div>
                  </div>
                  <motion.div layout className="grid min-h-[30em] auto-rows-min grid-cols-3 gap-[1.2em] bg-[#fbfcfe] p-[2.4em]">
                    <AnimatePresence mode="popLayout">
                      {selected.map((id) => {
                        const p = productById(id)!;
                        return (
                          <motion.div
                            key={id}
                            layout
                            initial={{ opacity: 0, scale: 0.7, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            className="rounded-[1em] bg-white p-[1.6em] ring-1 ring-[#e3e8ef] shadow-[0_0.6em_1.6em_-1em_rgba(10,37,64,0.3)]"
                          >
                            <span className="grid size-[3.6em] place-items-center rounded-[0.8em]" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
                              <Icon name={p.icon} className="size-[1.8em]" />
                            </span>
                            <div className="mt-[1em] text-[1.6em] font-semibold text-[#0a2540]">{p.shortName}</div>
                            <div className="mt-[0.2em] line-clamp-2 text-[1.2em] leading-snug text-[#64748b]">{p.tagline}</div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                    {selected.length === 0 && (
                      <div className="col-span-3 grid place-items-center rounded-[1em] border-[0.15em] border-dashed border-[#d6dde8] py-[6em] text-[1.5em] text-[#94a3b8]">Choose applications to add them here</div>
                    )}
                  </motion.div>
                  <div className="flex items-center justify-between border-t border-[#e8edf3] px-[2.4em] py-[1.4em] text-[1.3em] text-[#64748b]">
                    <span>{landing}</span>
                    <span>Illustration</span>
                  </div>
                </MockFrame>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <ButtonLink href={href} size="lg" arrow magnetic>
                    Discuss Your Requirements
                  </ButtonLink>
                  <button type="button" onClick={() => setSelected([])} className="inline-flex h-[52px] items-center gap-2 rounded-[12px] px-4 text-[15px] font-medium text-white/70 ring-1 ring-white/20 transition hover:bg-white/10 hover:text-white">
                    <RotateCcw className="size-4" aria-hidden /> Reset
                  </button>
                </div>
                <p className="mt-4 text-[13px] text-white/45">Your selection is passed to the enquiry form so our team can prepare for the conversation.</p>
              </div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
