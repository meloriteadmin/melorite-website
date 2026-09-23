"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { industries, industryById } from "@/data/industries";
import { productById } from "@/data/products";
import { productHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { ButtonLink } from "@/components/shared/Button";
import { IndustryWorkspaceMock } from "@/components/mockups/IndustryWorkspaceMock";
import { industrySelection, useSelection } from "@/lib/selection-store";
import Link from "next/link";

export function IndustryShowcase() {
  // Deep links such as /solutions#solution-<id> preselect the showcase.
  useEffect(() => {
    const m = window.location.hash.match(/^#solution-(.+)$/);
    if (m && industryById(m[1])) industrySelection.set(m[1]);
  }, []);
  const id = useSelection(industrySelection);
  const ind = industryById(id)!;

  return (
    <motion.section id="featured" className="section-y scroll-mt-16" animate={{ backgroundColor: tint(ind.accent, 0.045) }} transition={{ duration: 0.8, ease: EASE }}>
      <div className="container-x">
        <SectionHeading eyebrow="Featured industry solutions" title={["Built around the way", "each industry works."]} description="Select an industry to see its workspace, the Business Apps it builds on and its core workflows." />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <div role="tablist" aria-label="Industries" aria-orientation="vertical" data-lenis-prevent className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:sticky lg:top-28 lg:mx-0 lg:max-h-[calc(100vh-9rem)] lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:px-0">
              {industries.map((x) => {
                const on = x.id === id;
                return (
                  <button
                    key={x.id}
                    role="tab"
                    aria-selected={on}
                    aria-controls="industry-panel"
                    onClick={() => industrySelection.set(x.id)}
                    className={cn("relative flex shrink-0 items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors", on ? "text-navy" : "text-slate-500 hover:text-navy")}
                  >
                    {on && <motion.span layoutId="ind-active" className="absolute inset-0 rounded-[12px] bg-white shadow-soft ring-1 ring-line" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                    <span className="relative grid size-8 place-items-center rounded-[8px]" style={{ background: tint(x.accent, on ? 0.14 : 0.07), color: x.accent }}>
                      <Icon name={x.icon} className="size-4" />
                    </span>
                    <span className="relative whitespace-nowrap text-[14.5px] font-medium">{x.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div id="industry-panel" role="tabpanel" aria-live="polite" className="lg:col-span-9">
            <div className="grid grid-cols-1">
              <AnimatePresence initial={false}>
                <motion.div
                  key={ind.id}
                  className="min-w-0 [grid-area:1/1]"
                  initial={{ clipPath: "inset(0 0 100% 0 round 20px)" }}
                  animate={{ clipPath: "inset(0 0 0% 0 round 20px)" }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.35 } }}
                  transition={{ duration: 0.75, ease: EASE }}
                >
                  <IndustryWorkspaceMock industry={ind} />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={ind.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[28px] font-semibold tracking-[-0.03em] text-navy">{ind.fullName}</h3>
                    <StatusBadge status={ind.status} />
                  </div>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">{ind.longDescription}</p>
                  <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Relevant applications</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ind.apps.map((a) => {
                      const p = productById(a)!;
                      return (
                        <Link key={a} href={productHref(a)} className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[12.5px] font-medium text-navy ring-1 ring-line transition hover:ring-brand/40">
                          <Icon name={p.icon} className="size-3.5" style={{ color: p.accent }} />
                          {p.shortName}
                        </Link>
                      );
                    })}
                  </div>
                  <ButtonLink href={`/company?enquiry=industry&industry=${ind.id}#contact`} className="mt-8" arrow>
                    Request an industry demo
                  </ButtonLink>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Industry-specific capabilities</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ind.modules.map((m) => (
                      <span key={m} className="rounded-[8px] px-2.5 py-1 text-[12.5px] font-medium ring-1" style={{ background: tint(ind.accent, 0.06), color: ind.accent, boxShadow: `inset 0 0 0 1px ${tint(ind.accent, 0.18)}` }}>
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Operational workflows</div>
                  <ul className="mt-3 space-y-3">
                    {ind.workflows.map((w) => (
                      <li key={w.name} className="rounded-[14px] bg-white p-4 ring-1 ring-line">
                        <div className="text-[14px] font-semibold text-navy">{w.name}</div>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-muted">
                          {w.steps.map((s, i) => (
                            <span key={s} className="inline-flex items-center gap-1.5">
                              {i > 0 && <span style={{ color: ind.accent }} aria-hidden>→</span>}
                              {s}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
