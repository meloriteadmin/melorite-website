"use client";

import { motion } from "motion/react";
import { Check, MessageSquareText, MoreHorizontal, Sparkles } from "lucide-react";
import type { Offering } from "@/data/catalog";
import type { CatalogueDetails } from "@/data/catalog-content";
import { EASE, tint } from "@/lib/utils";

type Props = { offering: Offering; details: CatalogueDetails };

function Header({ offering, details }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-line bg-surface-warm px-4 py-3 md:px-5">
      <div className="flex items-center gap-3">
        <span className="grid size-7 place-items-center rounded-lg text-xs font-semibold text-white" style={{ background: offering.accent }}>M</span>
        <div><p className="text-[13px] font-semibold text-navy">{details.workspaceTitle}</p><p className="text-[11px] text-muted">{details.workspaceLabel}</p></div>
      </div>
      <div className="flex items-center gap-2"><span className="hidden rounded-md border border-line bg-white px-2.5 py-1 text-[11px] text-muted sm:inline">Updated now</span><MoreHorizontal className="size-4 text-muted" aria-hidden /></div>
    </div>
  );
}

function Sidebar({ offering }: { offering: Offering }) {
  return (
    <aside className="hidden w-44 shrink-0 border-r border-line bg-[#fbfbfa] p-3 lg:block">
      {offering.modules.slice(0, 6).map((module, index) => (
        <div key={module} className="mb-1 rounded-lg px-3 py-2 text-[12px] font-medium" style={index === 0 ? { background: tint(offering.accent, .1), color: offering.accent } : { color: "#64748b" }}>{module}</div>
      ))}
    </aside>
  );
}

function MetricRow({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="grid grid-cols-3 gap-2">{details.metrics.map(([label, value, note], index) => <div key={label} className="min-w-0 rounded-xl border border-line bg-white p-3 md:p-4"><p className="truncate text-[10px] text-muted md:text-[11px]">{label}</p><p className="mt-2 truncate text-[16px] font-semibold text-navy md:text-xl">{value}</p><p className="mt-1 truncate text-[10px] md:text-[11px]" style={{ color: index === 2 ? accent : "#64748b" }}>{note}</p></div>)}</div>;
}

function Pipeline({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 grid gap-2 md:grid-cols-3">{details.records.map((record, index) => <div key={record.primary} className="rounded-xl border border-line bg-white p-3"><div className="mb-3 h-1 rounded-full bg-slate-100"><motion.i initial={{ width: 0 }} whileInView={{ width: `${58 + index * 14}%` }} viewport={{ once: true }} transition={{ duration: .7, ease: EASE, delay: index * .08 }} className="block h-full rounded-full" style={{ background: accent }} /></div><p className="text-[12px] font-semibold text-navy">{record.primary}</p><p className="mt-1 text-[10px] text-muted">{record.secondary}</p><div className="mt-4 flex items-end justify-between"><span className="text-[12px] font-semibold text-navy">{record.value}</span><span className="text-[9px]" style={{ color: accent }}>{record.status}</span></div></div>)}</div>;
}

function Ledger({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <><div className="mt-4 flex h-24 items-end gap-2 rounded-xl border border-line bg-white px-4 pt-4">{[38,62,45,78,54,88,70,94,73,84,66,92].map((height,index) => <motion.i key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: .55, ease: EASE, delay: index * .035 }} className="flex-1 rounded-t-sm" style={{ background: index > 8 ? accent : tint(accent, .2) }}/>)}</div><RecordTable details={details} accent={accent}/></>;
}

function People({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 grid gap-2 sm:grid-cols-3">{details.records.map((record) => <div key={record.primary} className="rounded-xl border border-line bg-white p-4"><span className="grid size-9 place-items-center rounded-full text-xs font-semibold" style={{ background: tint(accent,.12), color: accent }}>{record.primary.split(" ").map(x => x[0]).join("").slice(0,2)}</span><p className="mt-4 text-[12px] font-semibold text-navy">{record.primary}</p><p className="mt-1 text-[10px] text-muted">{record.secondary}</p><div className="mt-4 border-t border-line pt-3"><p className="text-[10px] font-medium" style={{ color: accent }}>{record.value}</p><p className="mt-1 text-[10px] text-muted">{record.status}</p></div></div>)}</div>;
}

function Timeline({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 rounded-xl border border-line bg-white p-4"><div className="grid grid-cols-[90px_1fr] gap-y-4">{details.records.map((record,index) => <div key={record.primary} className="contents"><div><p className="text-[11px] font-semibold text-navy">{record.primary}</p><p className="text-[9px] text-muted">{record.status}</p></div><div className="pt-1"><div className="h-6 rounded-md bg-slate-100"><motion.div initial={{ width: 0 }} whileInView={{ width: `${36 + index * 24}%` }} viewport={{ once: true }} transition={{ duration: .75, ease: EASE, delay: index * .1 }} className="flex h-full items-center rounded-md px-2 text-[9px] font-medium text-white" style={{ background: accent }}>{record.value}</motion.div></div><p className="mt-1 text-[9px] text-muted">{record.secondary}</p></div></div>)}</div></div>;
}

function Conversation({ details, accent }: { details: CatalogueDetails; accent: string }) {
  const active = details.records[0];
  return <div className="mt-4 grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-[.85fr_1.15fr]"><div className="border-b border-line md:border-b-0 md:border-r">{details.records.map((record,index) => <div key={record.primary} className={`p-3 ${index ? "border-t border-line" : ""}`} style={index === 0 ? { background: tint(accent,.06) } : undefined}><div className="flex justify-between gap-2"><p className="text-[11px] font-semibold text-navy">{record.primary}</p><span className="text-[9px]" style={{ color: accent }}>{record.value}</span></div><p className="mt-1 text-[9px] text-muted">{record.secondary}</p><p className="mt-2 text-[9px] font-medium text-slate-600">{record.status}</p></div>)}</div><div className="p-4"><div className="flex items-center gap-2"><MessageSquareText className="size-4" style={{ color: accent }}/><p className="text-[12px] font-semibold text-navy">{active.primary}</p></div><div className="mt-5 space-y-3"><p className="max-w-[85%] rounded-lg bg-slate-100 px-3 py-2 text-[10px] leading-relaxed text-slate-600">I need an update and the next available action.</p><p className="ml-auto max-w-[85%] rounded-lg px-3 py-2 text-[10px] leading-relaxed" style={{ background: tint(accent,.1), color: "#334155" }}>I have the record open. I’ll confirm the status and keep the follow-up here.</p></div><div className="mt-5 rounded-lg border border-line px-3 py-2 text-[9px] text-muted">Reply with customer context…</div></div></div>;
}

function RecordTable({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 overflow-hidden rounded-xl border border-line bg-white"><div className="grid grid-cols-[1.3fr_.8fr_.7fr] bg-slate-50 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-muted"><span>Record</span><span>Value</span><span>Status</span></div>{details.records.map(record => <div key={record.primary} className="grid grid-cols-[1.3fr_.8fr_.7fr] items-center border-t border-line px-3 py-3"><div><p className="text-[11px] font-semibold text-navy">{record.primary}</p><p className="mt-0.5 truncate text-[9px] text-muted">{record.secondary}</p></div><span className="text-[10px] font-medium text-navy">{record.value}</span><span className="text-[9px] font-medium" style={{ color: accent }}>{record.status}</span></div>)}</div>;
}

function Flow({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <><div className="mt-4 grid grid-cols-3 gap-2">{details.records.map((record,index) => <div key={record.primary} className="relative rounded-xl border border-line bg-white p-3"><span className="text-[9px] font-semibold" style={{ color: accent }}>0{index+1}</span><p className="mt-3 text-[11px] font-semibold text-navy">{record.primary}</p><p className="mt-1 text-[9px] leading-relaxed text-muted">{record.secondary}</p><p className="mt-3 text-[9px] font-medium" style={{ color: accent }}>{record.status}</p>{index < 2 && <span className="absolute -right-2 top-1/2 z-10 size-4 -translate-y-1/2 rotate-45 border-r border-t border-line bg-white"/>}</div>)}</div><div className="mt-3 rounded-xl border border-line bg-white p-3"><div className="flex items-center gap-2"><Sparkles className="size-3.5" style={{ color: accent }}/><span className="text-[10px] font-semibold text-navy">Operational signal</span></div><p className="mt-2 text-[10px] leading-relaxed text-muted">The workspace keeps each stage, owner and exception attached to the same operational journey.</p></div></>;
}

function AgentView({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-[.9fr_1.1fr]"><div className="border-b border-line p-4 md:border-b-0 md:border-r"><p className="text-[10px] font-medium text-muted">You asked</p><p className="mt-2 text-[13px] font-medium leading-relaxed text-navy">Which parts of the business need attention this week?</p><div className="mt-5 space-y-2 border-t border-line pt-4">{["Searching CRM and Finance", "Reviewing delivery signals", "Preparing recommended actions"].map((item,index) => <motion.div key={item} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="flex items-center gap-2 text-[10px] text-muted"><span className="grid size-5 place-items-center rounded-md" style={{ background: tint(accent,.1), color: accent }}>{index === 2 ? <Check className="size-3"/> : <Sparkles className="size-3"/>}</span>{item}</motion.div>)}</div></div><div className="p-4"><div className="flex items-center gap-2"><Sparkles className="size-4" style={{ color: accent }}/><p className="text-[12px] font-semibold text-navy">Three items need review</p></div><div className="mt-3 divide-y divide-line">{details.records.map(record => <div key={record.primary} className="flex items-center justify-between gap-3 py-3"><div><p className="text-[10px] font-semibold text-navy">{record.primary}</p><p className="mt-0.5 text-[9px] text-muted">{record.secondary}</p></div><span className="shrink-0 text-[9px] font-medium" style={{ color: accent }}>{record.status}</span></div>)}</div><button type="button" className="mt-3 rounded-lg px-3 py-2 text-[10px] font-semibold text-white" style={{ background: accent }}>Review proposed actions</button></div></div>;
}

function CallView({ details, accent }: { details: CatalogueDetails; accent: string }) {
  return <div className="mt-4 grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-[1.1fr_.9fr]"><div className="border-b border-line p-4 md:border-b-0 md:border-r"><div className="flex items-center justify-between"><div><p className="text-[11px] font-semibold text-navy">Aditi Rao</p><p className="text-[9px] text-muted">Inbound enquiry · Live</p></div><span className="flex items-center gap-1 text-[9px] font-medium" style={{ color: accent }}><i className="size-1.5 animate-pulse rounded-full" style={{ background: accent }}/>02:14</span></div><div className="mt-4 space-y-3"><p className="max-w-[85%] rounded-lg px-3 py-2 text-[10px] leading-relaxed" style={{ background: tint(accent,.09) }}><strong className="block text-navy">AI</strong>Thanks for your enquiry. What would you like help with?</p><p className="ml-auto max-w-[85%] rounded-lg bg-slate-100 px-3 py-2 text-[10px] leading-relaxed"><strong className="block text-navy">Customer</strong>We need better finance visibility and would like a demo.</p></div><div className="mt-4 flex h-5 items-center gap-1">{[4,9,14,7,18,11,6,16,10,4,13,8,17,6,11,5].map((height,index)=><i key={index} className="w-1 rounded-full" style={{ height, background: tint(accent,index % 3 === 0 ? .75 : .3) }}/>)}</div></div><div className="p-4"><p className="text-[10px] font-semibold uppercase tracking-wide text-muted">Live outcome</p><div className="mt-3 space-y-3">{details.records.map(record => <div key={record.primary}><p className="text-[9px] text-muted">{record.primary}</p><p className="mt-0.5 text-[11px] font-medium text-navy">{record.secondary}</p></div>)}</div><div className="mt-4 rounded-lg border p-3" style={{ borderColor: tint(accent,.25), background: tint(accent,.05) }}><p className="text-[9px] font-semibold" style={{ color: accent }}>After the call</p><p className="mt-1 text-[9px] leading-relaxed text-muted">Summary ready · Lead qualified · Follow-up proposed</p></div></div></div>;
}

function Body({ offering, details }: Props) {
  if (offering.slug === "agent") return <AgentView details={details} accent={offering.accent}/>;
  if (offering.slug === "calling") return <CallView details={details} accent={offering.accent}/>;
  if (offering.slug === "crm-growth") return <Pipeline details={details} accent={offering.accent}/>;
  if (offering.slug === "finance") return <Ledger details={details} accent={offering.accent}/>;
  if (offering.slug === "hrms") return <People details={details} accent={offering.accent}/>;
  if (offering.slug === "projects") return <Timeline details={details} accent={offering.accent}/>;
  if (offering.slug === "service") return <Conversation details={details} accent={offering.accent}/>;
  if (["commerce", "procurement-inventory"].includes(offering.slug)) return <RecordTable details={details} accent={offering.accent}/>;
  return <Flow details={details} accent={offering.accent}/>;
}

export function CatalogueWorkspace({ offering, details }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease: EASE }} className="overflow-hidden rounded-2xl border border-line bg-white shadow-ui">
      <Header offering={offering} details={details}/>
      <div className="flex min-h-[410px]"><Sidebar offering={offering}/><div className="min-w-0 flex-1 bg-[#f8f9fb] p-4 md:p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-[11px] text-muted">Overview</p><h3 className="mt-1 text-lg font-semibold text-navy">{details.workspaceLabel}</h3></div><span className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1 text-[10px] text-muted"><Check className="size-3 text-emerald-600"/> Live context</span></div><div className="mt-5"><MetricRow details={details} accent={offering.accent}/></div><Body offering={offering} details={details}/></div></div>
    </motion.div>
  );
}
