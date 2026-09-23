"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { products, productById } from "@/data/products";
import { industriesUsingApp } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";
import { productSelection, useSelection } from "@/lib/selection-store";

export function ProductShowcase() {
  // Deep links such as /products#product-<id> preselect the showcase.
  useEffect(() => {
    const m = window.location.hash.match(/^#product-(.+)$/);
    if (m && productById(m[1])) productSelection.set(m[1]);
  }, []);
  const id = useSelection(productSelection);
  const p = productById(id)!;
  const usedBy = industriesUsingApp(p.id);

  return (
    <section id="showcase" className="section-y scroll-mt-16">
      <div className="container-x">
        <SectionHeading eyebrow="Interactive showcase" title={["See each application", "in the workspace."]} description="Select an application to see its dashboard, modules and the way it fits into the platform." />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Application list */}
          <div className="lg:col-span-3">
            <div
              role="tablist"
              aria-label="Applications"
              aria-orientation="vertical"
              data-lenis-prevent
              className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:sticky lg:top-28 lg:mx-0 lg:max-h-[calc(100vh-9rem)] lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:px-0"
            >
              {products.map((x) => {
                const on = x.id === id;
                return (
                  <button
                    key={x.id}
                    role="tab"
                    aria-selected={on}
                    aria-controls="showcase-panel"
                    onClick={() => productSelection.set(x.id)}
                    className={cn("relative flex shrink-0 items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors", on ? "text-navy" : "text-slate-500 hover:text-navy")}
                  >
                    {on && <motion.span layoutId="sc-active" className="absolute inset-0 rounded-[12px] bg-paper ring-1 ring-line" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                    <span className="relative grid size-8 place-items-center rounded-[8px]" style={{ background: tint(x.accent, on ? 0.14 : 0.07), color: x.accent }}>
                      <Icon name={x.icon} className="size-4" />
                    </span>
                    <span className="relative whitespace-nowrap text-[14.5px] font-medium">{x.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Screenshot + details */}
          <div id="showcase-panel" role="tabpanel" aria-live="polite" className="lg:col-span-9">
            <div className="relative grid">
              <AnimatePresence initial={false}>
                <motion.div
                  key={p.id}
                  className="[grid-area:1/1]"
                  initial={{ clipPath: "inset(0 100% 0 0 round 20px)" }}
                  animate={{ clipPath: "inset(0 0% 0 0 round 20px)" }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.3 } }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <WorkspaceMock product={p} />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-[12px]" style={{ background: tint(p.accent, 0.12), color: p.accent }}>
                      <Icon name={p.icon} className="size-[22px]" />
                    </span>
                    <div>
                      <h3 className="text-[24px] font-semibold tracking-[-0.025em] text-navy">{p.name}</h3>
                      <p className="text-[14px] text-muted">{p.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15.5px] leading-relaxed text-slate-600">{p.description}</p>
                  <div className="mt-6 rounded-[16px] bg-paper p-5 ring-1 ring-line">
                    <div className="text-[12px] font-semibold uppercase tracking-wide text-navy">Use case · {p.useCase.title}</div>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.useCase.description}</p>
                  </div>
                  <ButtonLink href={`/company?enquiry=demo&apps=${p.id}#contact`} className="mt-7" arrow>
                    Request a Demo
                  </ButtonLink>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Primary capabilities</div>
                  <ul className="mt-4 space-y-3.5">
                    {p.capabilities.map((c) => (
                      <li key={c.title} className="flex gap-3">
                        <Check className="mt-0.5 size-4 shrink-0" style={{ color: p.accent }} aria-hidden />
                        <span className="text-[14.5px] leading-relaxed text-slate-600">
                          <span className="font-medium text-navy">{c.title}.</span> {c.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Modules</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.modules.map((m) => (
                      <span key={m} className="rounded-[8px] bg-white px-2.5 py-1 text-[12.5px] text-slate-600 ring-1 ring-line">{m}</span>
                    ))}
                  </div>
                  {usedBy.length > 0 && (
                    <p className="mt-6 text-[13.5px] text-muted">
                      Also used by {usedBy.length} industry solutions, including {usedBy.slice(0, 3).map((i) => i.name).join(", ")}.
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
