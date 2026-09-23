"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Grid2x2, Plus } from "lucide-react";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const CHOICES = ["crm", "sales", "finance", "hr", "payroll", "projects", "inventory", "analytics"];
const INITIAL: Record<string, string[]> = {
  a: ["crm", "finance"],
  b: ["crm"],
  c: ["crm", "sales", "finance", "projects", "hr", "analytics"],
};
const ORGS = [
  { id: "a", name: "Organization A", note: "CRM + Finance" },
  { id: "b", name: "Organization B", note: "CRM only" },
  { id: "c", name: "Organization C", note: "Multiple applications" },
];

export function OrgManagement() {
  const [ent, setEnt] = useState(INITIAL);
  const toggle = (org: string, app: string) =>
    setEnt((e) => ({ ...e, [org]: e[org].includes(app) ? e[org].filter((x) => x !== app) : [...e[org], app] }));

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Centralized organization management"
            title={["A connected experience", "across your organization."]}
          />
          <p className="text-lead text-muted lg:col-span-5">
            Each organization sees only the applications it has been enabled for. Toggle applications below to see how the workspace responds.
          </p>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {ORGS.map((org) => {
            const apps = ent[org.id];
            const landing = apps.length === 0 ? "No applications enabled" : apps.length === 1 ? `Lands directly in ${productById(apps[0])!.shortName}` : "Opens Workspace Home";
            return (
              <RevealItem key={org.id} className="flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-line">
                <div className="border-b border-line p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-[10px] bg-navy font-semibold text-white">{org.id.toUpperCase()}</span>
                      <div>
                        <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-navy">{org.name}</h3>
                        <p className="text-[13px] text-muted">{org.note}</p>
                      </div>
                    </div>
                  </div>
                  {/* App switcher preview */}
                  <div className="mt-5 rounded-[14px] bg-paper p-3 ring-1 ring-line">
                    <div className="mb-2.5 flex items-center gap-2 text-[12px] font-medium text-muted">
                      <Grid2x2 className="size-3.5 text-brand" aria-hidden /> App switcher
                      <span className="ml-auto tabular-nums">{apps.length}</span>
                    </div>
                    <motion.ul layout className="flex min-h-[40px] flex-wrap gap-1.5" aria-live="polite">
                      <AnimatePresence mode="popLayout">
                        {apps.map((id) => {
                          const p = productById(id)!;
                          return (
                            <motion.li
                              key={id}
                              layout
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.6 }}
                              transition={{ type: "spring", stiffness: 420, damping: 28 }}
                              className="flex items-center gap-1.5 rounded-[8px] bg-white px-2 py-1.5 text-[12.5px] font-medium text-navy shadow-soft ring-1 ring-line"
                            >
                              <Icon name={p.icon} className="size-3.5" style={{ color: p.accent }} />
                              {p.shortName}
                            </motion.li>
                          );
                        })}
                      </AnimatePresence>
                    </motion.ul>
                    <p className="mt-3 border-t border-line pt-2.5 text-[12px] text-muted">{landing}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Entitlements</div>
                  <div className="flex flex-wrap gap-1.5">
                    {CHOICES.map((id) => {
                      const p = productById(id)!;
                      const on = apps.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(org.id, id)}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12.5px] font-medium ring-1 transition-all duration-200",
                            on ? "text-white" : "bg-white text-slate-600 ring-line hover:ring-line-strong",
                          )}
                          style={on ? { background: p.accent, boxShadow: `0 0 0 1px ${p.accent}` } : undefined}
                        >
                          {on ? <Check className="size-3" aria-hidden /> : <Plus className="size-3" aria-hidden />}
                          {p.shortName}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-8 flex flex-col gap-3 text-[13.5px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-medium text-navy">Conceptual illustration.</span> Organizations A, B and C are examples, not actual customers.
          </p>
          <p>Application availability depends on each organization&apos;s enabled entitlements, activated by the Melorite team.</p>
        </div>
      </div>
    </section>
  );
}
