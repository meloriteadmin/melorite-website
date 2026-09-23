"use client";

import { motion } from "motion/react";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { EASE, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

function OneWorkspace() {
  const apps = ["crm", "finance", "hr", "projects"].map((id) => productById(id)!);
  return (
    <div className="relative mx-auto w-full max-w-[260px] rounded-[16px] bg-white p-3 shadow-soft ring-1 ring-line">
      <div className="mb-2 h-2 w-16 rounded-full bg-slate-200" aria-hidden />
      <div className="grid grid-cols-2 gap-2">
        {apps.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: i % 2 ? 30 : -30, y: i < 2 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            className="flex items-center gap-2 rounded-[10px] p-2.5 ring-1 ring-line"
          >
            <Icon name={a.icon} className="size-4" style={{ color: a.accent }} />
            <span className="text-[12.5px] font-medium text-navy">{a.shortName}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConnectedProcess() {
  const steps = [
    ["crm", "Opportunity"],
    ["sales", "Quotation"],
    ["finance", "Invoice"],
  ] as const;
  return (
    <div className="mx-auto flex w-full max-w-[300px] items-center">
      {steps.map(([id, label], i) => {
        const p = productById(id)!;
        return (
          <div key={id} className="flex flex-1 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.35, duration: 0.5, ease: EASE }}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="grid size-11 place-items-center rounded-[12px] bg-white shadow-soft ring-1 ring-line" style={{ color: p.accent }}>
                <Icon name={p.icon} className="size-5" />
              </span>
              <span className="text-[11.5px] font-medium text-navy">{label}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.span
                className="mb-5 h-0.5 flex-1 origin-left rounded-full bg-brand"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.35 + 0.25, duration: 0.4, ease: EASE }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FlexibleSelection() {
  const apps = ["crm", "sales", "hr", "inventory", "analytics", "documents"].map((id) => productById(id)!);
  const on = ["crm", "hr", "analytics"];
  return (
    <div className="mx-auto flex w-full max-w-[280px] flex-wrap justify-center gap-2">
      {apps.map((a, i) => (
        <motion.span
          key={a.id}
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: on.includes(a.id) ? 1 : 0.4, scale: on.includes(a.id) ? 1.04 : 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2 + i * 0.1, ease: EASE }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-medium ring-1"
          style={on.includes(a.id) ? { background: tint(a.accent, 0.1), color: a.accent, boxShadow: `inset 0 0 0 1px ${tint(a.accent, 0.3)}` } : { background: "#fff", color: "#64748b", boxShadow: "inset 0 0 0 1px #e5eaf1" }}
        >
          <Icon name={a.icon} className="size-3.5" />
          {a.shortName}
        </motion.span>
      ))}
    </div>
  );
}

const ITEMS = [
  { title: "One workspace", body: "Every enabled application opens in the same workspace, with one sign-in, one search and one set of notifications.", Visual: OneWorkspace },
  { title: "Connected business processes", body: "Available today: an opportunity in CRM becomes a quotation and order in Sales and an invoice in Finance — without re-entry.", Visual: ConnectedProcess },
  { title: "Flexible application selection", body: "Each organization chooses its own combination of applications, and can add more to the same workspace later.", Visual: FlexibleSelection },
];

export function WhyConnected() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading align="center" className="mx-auto max-w-[820px]" eyebrow="Why connected products matter" title={["Powerful individually.", "More useful together."]} />
        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ITEMS.map(({ title, body, Visual }) => (
            <RevealItem key={title} className="flex flex-col overflow-hidden rounded-[24px] bg-paper ring-1 ring-line">
              <div className="flex h-[220px] items-center justify-center p-6">
                <Visual />
              </div>
              <div className="border-t border-line bg-white p-6">
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
