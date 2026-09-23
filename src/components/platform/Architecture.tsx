"use client";

import { AnimatePresence, motion } from "motion/react";
import { products, productById } from "@/data/products";
import { industries } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StickyStory } from "@/components/shared/StickyStory";
import { LogoMark } from "@/components/shared/Logo";

const CORE = ["Organizations", "Sign-in & sessions", "Entitlements", "Shared records", "Search", "Notifications", "Files", "Audit"];

function Layer({ show, index, title, children, tone = "light" }: { show: boolean; index: number; title: string; children: React.ReactNode; tone?: "light" | "dark" | "brand" }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: EASE }}
          className={cn(
            "relative rounded-[20px] p-5 ring-1",
            tone === "dark" && "bg-navy text-white ring-navy",
            tone === "light" && "bg-white ring-line shadow-soft",
            tone === "brand" && "bg-brand-50 ring-brand/20",
          )}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className={cn("font-mono text-[11px] uppercase tracking-[0.14em]", tone === "dark" ? "text-white/50" : "text-muted")}>
              Layer {index} · {title}
            </span>
          </div>
          {children}
          {index > 1 && (
            <span className="absolute -bottom-4 left-1/2 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-brand/60 to-brand/0" aria-hidden />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ArchitectureVisual({ step }: { step: number }) {
  const crm = productById("crm")!;
  return (
    <div className="flex flex-col-reverse gap-4">
      <Layer show index={1} title="Melorite core" tone="dark">
        <div className="flex items-center gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-white/10">
            <LogoMark className="w-6" color="#fff" />
          </span>
          <div className="flex flex-wrap gap-1.5">
            {CORE.map((c) => (
              <span key={c} className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </Layer>
      <Layer show={step >= 1} index={2} title="Selected applications">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {products.map((p, i) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: ["crm", "sales", "finance", "projects"].includes(p.id) ? 1 : 0.35, scale: 1 }}
              transition={{ delay: i * 0.025, ease: EASE }}
              className="flex flex-col items-center gap-1 rounded-[10px] p-1.5"
              title={p.name}
            >
              <span className="grid size-8 place-items-center rounded-[8px]" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
                <Icon name={p.icon} className="size-4" />
              </span>
              <span className="text-[10.5px] font-medium text-navy">{p.shortName}</span>
            </motion.span>
          ))}
        </div>
      </Layer>
      <Layer show={step >= 2} index={3} title={`Application capabilities · ${crm.shortName}`}>
        <div className="flex flex-wrap gap-1.5">
          {crm.modules.filter((m) => m !== "Settings").map((m, i) => (
            <motion.span key={m} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="rounded-[8px] bg-paper px-2.5 py-1.5 text-[12.5px] font-medium text-navy ring-1 ring-line">
              {m}
            </motion.span>
          ))}
        </div>
      </Layer>
      <Layer show={step >= 3} index={4} title="Industry-specific extensions" tone="brand">
        <div className="flex flex-wrap gap-1.5">
          {industries.slice(0, 8).map((ind) => (
            <span key={ind.id} className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[12.5px] font-medium text-navy ring-1 ring-line">
              <Icon name={ind.icon} className="size-3.5" style={{ color: ind.accent }} />
              {ind.name}
            </span>
          ))}
          <span className="rounded-full px-2.5 py-1 text-[12.5px] text-muted">+{industries.length - 8} more</span>
        </div>
      </Layer>
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="section-y scroll-mt-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Modular architecture"
          title={["The capabilities you need.", "Without unnecessary complexity."]}
          description="Melorite is built in layers. Each layer builds on the one below it, so every application and industry solution shares the same foundation."
        />
        <StickyStory
          className="mt-6"
          visualSide="left"
          renderVisual={(i) => <ArchitectureVisual step={i} />}
          steps={[
            { id: "core", kicker: "Foundation", title: "Melorite core", body: "Organizations, sign-in, entitlements, shared records, search, notifications, files and audit are built once and used by everything above." },
            { id: "apps", kicker: "Applications", title: "Selected applications", body: "Business Apps are activated per organization. Each is a complete application — and each reuses the same core services and records." },
            { id: "capabilities", kicker: "Capabilities", title: "Application capabilities", body: "Inside every app are modules for the work itself — for CRM that means leads, contacts, accounts, opportunities, pipeline and activities." },
            { id: "industry", kicker: "Extensions", title: "Industry-specific extensions", body: "Industry solutions add sector records and workflows — patients, units, production orders — on top of the apps they depend on, never as separate copies." },
          ]}
        />
      </div>
    </section>
  );
}
