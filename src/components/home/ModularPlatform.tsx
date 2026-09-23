"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StickyStory } from "@/components/shared/StickyStory";
import { ButtonLink } from "@/components/shared/Button";
import { MockFrame } from "@/components/mockups/WorkspaceMock";

const ALL = ["crm", "sales", "finance", "inventory", "hr", "payroll", "projects", "documents", "analytics"];
const STATES = [["crm"], ["crm", "sales", "finance"], ALL];
const SHARED = ["Customers", "Products", "Employees", "Documents"];

function ModularVisual({ state }: { state: number }) {
  const enabled = STATES[state];
  return (
    <MockFrame url="app.melorite.com/home">
      <div className="flex items-center justify-between border-b border-[#e8edf3] px-[2.4em] py-[1.8em]">
        <div>
          <div className="font-mono text-[1.05em] uppercase tracking-[0.14em] text-[#64748b]">Northwind Trading · Workspace</div>
          <div className="mt-[0.3em] text-[2.6em] font-semibold tracking-[-0.02em] text-[#0a2540]">Applications</div>
        </div>
        <div className="flex items-center gap-[0.8em] rounded-full bg-[#eff6ff] px-[1.4em] py-[0.6em] text-[1.3em] font-medium text-[#2563eb]">
          <motion.span key={enabled.length} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="tabular-nums">
            {enabled.length}
          </motion.span>
          {enabled.length === 1 ? "app enabled" : "apps enabled"}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[1.4em] bg-[#fbfcfe] p-[2.4em]">
        {ALL.map((id, i) => {
          const p = productById(id)!;
          const on = enabled.includes(id);
          return (
            <motion.div
              key={id}
              layout
              animate={{ opacity: on ? 1 : 0.55 }}
              transition={{ duration: 0.5, ease: EASE, delay: on ? 0.04 * i : 0 }}
              className={cn(
                "relative flex items-center gap-[1.2em] rounded-[1em] p-[1.6em] transition-colors duration-500",
                on ? "bg-white ring-1 ring-[#e3e8ef] shadow-[0_0.8em_2em_-1.2em_rgba(10,37,64,0.25)]" : "border-[0.15em] border-dashed border-[#d6dde8] bg-transparent",
              )}
            >
              <span
                className="grid size-[4em] shrink-0 place-items-center rounded-[0.9em] transition-colors duration-500"
                style={on ? { background: tint(p.accent, 0.1), color: p.accent } : { background: "#f1f5f9", color: "#94a3b8" }}
              >
                <Icon name={p.icon} className="size-[2em]" />
              </span>
              <div className="min-w-0">
                <div className="text-[1.6em] font-semibold text-[#0a2540]">{p.shortName}</div>
                <div className="text-[1.2em] text-[#64748b]">{on ? "Enabled" : "Available to add"}</div>
              </div>
              <span
                className={cn(
                  "ml-auto grid size-[2.4em] place-items-center rounded-full transition-colors duration-500",
                  on ? "bg-[#059669] text-white" : "text-[#94a3b8] ring-1 ring-[#d6dde8]",
                )}
              >
                {on ? <Check className="size-[1.3em]" /> : <Plus className="size-[1.3em]" />}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center gap-[1.2em] border-t border-[#e8edf3] px-[2.4em] py-[1.6em]">
        <span className="text-[1.25em] font-medium text-[#64748b]">Shared across enabled apps</span>
        <AnimatePresence>
          {SHARED.slice(0, state === 0 ? 1 : state === 1 ? 2 : 4).map((s) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-full bg-[#0a2540] px-[1em] py-[0.35em] text-[1.2em] font-medium text-white"
            >
              {s}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </MockFrame>
  );
}

export function ModularPlatform() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="Modular by design"
          title={["Start with what you need.", "Build from there."]}
          description="Every organization gets one workspace. Applications are activated inside it as your needs grow — no new accounts, no data moved between systems."
        />
        <StickyStory
          className="mt-8"
          renderVisual={(i) => <ModularVisual state={i} />}
          steps={[
            {
              id: "one",
              kicker: "State 1",
              title: "One application",
              body: "Begin with the app that matters most today — for example CRM. An organization with one app lands straight in it, with nothing else in the way.",
            },
            {
              id: "connected",
              kicker: "State 2",
              title: "Connected applications",
              body: "Add Sales and Finance to the same workspace. They reuse the customers and products you already have, so a quotation becomes an order and an invoice without re-entry.",
            },
            {
              id: "platform",
              kicker: "State 3",
              title: "A connected business platform",
              body: "Bring people, stock, projects, documents and analytics into the same system. Every app shares one foundation for access, search, audit and data.",
              extra: (
                <ButtonLink href="/products" variant="dark" arrow>
                  Explore Our Products
                </ButtonLink>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
