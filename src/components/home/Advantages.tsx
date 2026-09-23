"use client";

import { motion } from "motion/react";
import { Check, Lock } from "lucide-react";
import { productById, products } from "@/data/products";
import { industryById } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cardVariants } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

function Tile({ title, body, children, className }: { title: string; body: string; children: React.ReactNode; className?: string }) {
  return (
    <RevealItem className={cn(cardVariants({ variant: "default", padding: "none" }), "group relative gap-0 overflow-hidden", className)}>
      <div className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,var(--color-paper),#fff)] p-6">
        <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
        <div className="relative flex w-full justify-center">{children}</div>
      </div>
      <div className="border-t border-line p-6">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
        <p className="mt-1.5 max-w-[48ch] text-[14.5px] leading-relaxed text-muted">{body}</p>
      </div>
    </RevealItem>
  );
}

const loop = (delay = 0) => ({ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: EASE, delay });

function UnifiedVisual() {
  const apps = ["crm", "sales", "finance", "hr", "projects", "inventory", "service", "documents"].map((id) => productById(id)!);
  return (
    <div className="w-full max-w-[520px] rounded-[18px] bg-white p-4 shadow-soft ring-1 ring-line">
      <div className="mb-3 flex items-center gap-2 rounded-[10px] bg-paper px-3 py-2 text-[12.5px] text-muted ring-1 ring-line">
        <span className="size-2 rounded-full bg-brand" /> One workspace · one sign-in
      </div>
      <div className="grid grid-cols-4 gap-2">
        {apps.map((a, i) => (
          <motion.div
            key={a.id}
            className="flex flex-col items-center gap-1.5 rounded-[12px] p-2.5 ring-1 ring-line"
            whileInView={{ backgroundColor: ["#ffffff", tint(a.accent, 0.08), "#ffffff"] }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ ...loop(i * 0.35), duration: 1.6, repeatDelay: 8 * 0.35 + 1 }}
          >
            <span className="grid size-8 place-items-center rounded-[8px]" style={{ background: tint(a.accent, 0.1), color: a.accent }}>
              <Icon name={a.icon} className="size-4" />
            </span>
            <span className="text-[11.5px] font-medium text-navy">{a.shortName}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ModularVisual() {
  const apps = ["crm", "finance", "hr", "analytics"].map((id) => productById(id)!);
  return (
    <ul className="w-full max-w-[280px] space-y-2">
      {apps.map((a, i) => (
        <li key={a.id} className="flex items-center gap-3 rounded-[12px] bg-white px-3 py-2.5 shadow-soft ring-1 ring-line">
          <Icon name={a.icon} className="size-4" style={{ color: a.accent }} />
          <span className="text-[13.5px] font-medium text-navy">{a.shortName}</span>
          <motion.span
            className="ml-auto flex h-5 w-9 items-center rounded-full p-0.5"
            initial={{ backgroundColor: "#e2e8f0" }}
            whileInView={{ backgroundColor: i === 3 ? ["#e2e8f0", "#e2e8f0", "#2563eb", "#2563eb", "#e2e8f0"] : "#2563eb" }}
            viewport={{ once: false }}
            transition={i === 3 ? { duration: 4, repeat: Infinity, ease: EASE } : { delay: 0.2 + i * 0.15, ease: EASE }}
          >
            <motion.span
              className="size-4 rounded-full bg-white shadow"
              initial={{ x: 0 }}
              whileInView={{ x: i === 3 ? [0, 0, 16, 16, 0] : 16 }}
              viewport={{ once: false }}
              transition={i === 3 ? { duration: 4, repeat: Infinity, ease: EASE } : { delay: 0.2 + i * 0.15, ease: EASE }}
            />
          </motion.span>
        </li>
      ))}
    </ul>
  );
}

function IndustryVisualMini() {
  const hosp = industryById("hospital")!;
  return (
    <div className="relative w-full max-w-[280px]">
      {[
        { label: "Hospital: Patients · OPD · Beds", color: hosp.accent, y: 0 },
        { label: "CRM · Finance · Inventory · HR", color: "#2563eb", y: 1 },
        { label: "Platform core", color: "#0a2540", y: 2 },
      ].map((l, i) => (
        <motion.div
          key={l.label}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (2 - i) * 0.18, duration: 0.6, ease: EASE }}
          className="mb-2 rounded-[12px] px-4 py-3 text-[12.5px] font-medium text-white shadow-soft"
          style={{ background: l.color, marginInline: `${i * 0}px`, opacity: 1 - i * 0.05 }}
        >
          {l.label}
        </motion.div>
      ))}
    </div>
  );
}

function AccessVisual() {
  return (
    <div className="w-full max-w-[280px] rounded-[16px] bg-white p-4 shadow-soft ring-1 ring-line">
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="grid size-9 place-items-center rounded-full bg-brand-50 text-[13px] font-semibold text-brand">NT</span>
        <div>
          <div className="text-[13.5px] font-semibold text-navy">Northwind Trading</div>
          <div className="text-[12px] text-muted">Entitlements</div>
        </div>
      </div>
      <ul className="mt-3 space-y-2 text-[13px]">
        {[["CRM", true], ["Finance", true], ["Projects", true], ["Payroll", false]].map(([n, on], i) => (
          <motion.li
            key={n as string}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, ease: EASE }}
            className="flex items-center justify-between"
          >
            <span className={on ? "text-navy" : "text-muted"}>{n as string}</span>
            {on ? <Check className="size-4 text-emerald-600" aria-label="Enabled" /> : <Lock className="size-3.5 text-slate-400" aria-label="Not enabled" />}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function DataVisual() {
  const apps = ["crm", "sales", "finance", "service"].map((id) => productById(id)!);
  const pos = [[12, 18], [88, 18], [12, 82], [88, 82]];
  return (
    <div className="relative aspect-[4/3] w-full max-w-[300px]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {pos.map(([x, y], i) => (
          <g key={i}>
            <line x1="50" y1="50" x2={x} y2={y} stroke="#d6dde8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1="50" y1="50" x2={x} y2={y} stroke="#2563eb" strokeWidth="2" strokeDasharray="4 60" vectorEffect="non-scaling-stroke" className="animate-[dv-flow_2s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s` }} />
          </g>
        ))}
        <style>{`@keyframes dv-flow{from{stroke-dashoffset:64}to{stroke-dashoffset:0}}`}</style>
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-navy px-3 py-2 text-center text-[12px] font-medium text-white shadow-float">
        Customer
        <div className="text-[10.5px] text-white/60">one record</div>
      </div>
      {apps.map((a, i) => (
        <span key={a.id} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 py-1 text-[12px] font-medium text-navy shadow-soft ring-1 ring-line" style={{ left: `${pos[i][0]}%`, top: `${pos[i][1]}%` }}>
          {a.shortName}
        </span>
      ))}
    </div>
  );
}

function GrowVisual() {
  const steps = [1, 3, 6, 9, products.length];
  return (
    <div className="flex w-full max-w-[640px] items-end gap-3">
      {steps.map((n, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${(n / products.length) * 150 + 12}px` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            className="w-full rounded-[10px] bg-gradient-to-t from-brand to-brand-200"
            style={{ opacity: 0.5 + i * 0.12 }}
          />
          <span className="text-[12px] font-medium text-muted">{n === products.length ? "All apps" : `${n} app${n > 1 ? "s" : ""}`}</span>
        </div>
      ))}
    </div>
  );
}

export function Advantages() {
  return (
    <section className="section-y bg-paper border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Core capabilities" title={["Designed around", "the way businesses operate."]} description="The platform capabilities every Melorite application is built on." />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          <Tile className="lg:col-span-4" title="Unified workspace" body="Every enabled application lives in one workspace with one sign-in, one search and one place for notifications and approvals.">
            <UnifiedVisual />
          </Tile>
          <Tile className="lg:col-span-2" title="Modular applications" body="Enable the applications you need. Add or remove them as requirements change.">
            <ModularVisual />
          </Tile>
          <Tile className="lg:col-span-2" title="Industry-specific capabilities" body="Industry solutions layer sector workflows over the same Business Apps, not separate copies.">
            <IndustryVisualMini />
          </Tile>
          <Tile className="lg:col-span-2" title="Centralized access" body="What each organization can use is defined by its entitlements and enforced on the server.">
            <AccessVisual />
          </Tile>
          <Tile className="lg:col-span-2" title="Connected business data" body="Customers, products, employees and vendors are shared records, reused by every app that needs them.">
            <DataVisual />
          </Tile>
          <Tile className="md:col-span-2 lg:col-span-6" title="Built to grow" body="Start with one application and expand to the full platform inside the same organization — without switching systems.">
            <GrowVisual />
          </Tile>
        </RevealGroup>
      </div>
    </section>
  );
}
