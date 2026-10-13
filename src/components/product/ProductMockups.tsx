import { Check, ChevronRight, Search } from "lucide-react";

type Metric = [string, string, string];

const metrics: Record<string, Metric[]> = {
  crm: [["Open leads", "214", "↑ 12 this week"], ["Follow-ups", "18", "5 due today"], ["Pipeline", "₹48.2L", "↑ 8% this month"]],
  "real-estate": [["Available", "64", "3 newly released"], ["Visits today", "6", "All confirmed"], ["Payments due", "₹42.5L", "7 buyers"]],
  clinic: [["Appointments", "32", "6 remaining"], ["Waiting", "4", "About 8 min"], ["Prescriptions", "21", "3 ready to send"]],
  agency: [["In review", "7", "3 with clients"], ["Due this week", "12", "2 need attention"], ["Invoices paid", "₹3.4L", "↑ this month"]],
  commerce: [["Today’s sales", "₹1.86L", "↑ 14%"], ["Orders", "86", "12 to dispatch"], ["Repeat buyers", "38%", "↑ 3 points"]],
  "ai-calling": [["Calls answered", "126", "24 after hours"], ["Bookings", "31", "↑ this week"], ["Passed to team", "9", "With full notes"]],
};

const statuses: Record<string, string> = {
  crm: "Pipeline live",
  "real-estate": "Inventory live",
  clinic: "Clinic open",
  agency: "Client active",
  commerce: "Store live",
  "ai-calling": "Answering now",
};

function Status({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-[#b9dacb] bg-[#eff9f4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#236c4d]"><i className="size-1.5 rounded-full bg-[#2f8d66]" />{children}</span>;
}

function Chip({ tone, children }: { tone: "green" | "amber" | "red" | "indigo"; children: React.ReactNode }) {
  const styles = { green: "border-[#b9dacb] bg-[#eff9f4] text-[#236c4d]", amber: "border-[#e8d2a7] bg-[#fff9ec] text-[#775511]", red: "border-[#efc3bd] bg-[#fff3f1] text-[#9a3f35]", indigo: "border-[#c8c9ef] bg-[#f2f2ff] text-[#3d3fd1]" };
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${styles[tone]}`}>{children}</span>;
}

function MiniBars({ values = [38, 58, 47, 74, 63, 86] }: { values?: number[] }) {
  return (
    <div aria-label="Recent activity chart" className="flex h-20 items-end gap-2 border-b border-[#d9dcf0] px-1 pb-2">
      {values.map((v, i) => <span key={i} className="min-w-2 flex-1 rounded-t-[2px]" style={{ height: `${v}%`, background: i % 2 ? "#3d3fd1" : "#4ca89c" }} />)}
    </div>
  );
}

function CrmView() {
  const rows = [["Aditi Mehta", "Website", "Qualified", "Priya", "Today, 4:30 pm"], ["Rohan Iyer", "WhatsApp", "Proposal", "Kabir", "Tomorrow"], ["Neha Shah", "Referral", "New", "Priya", "16 Oct"], ["Vikram Rao", "Instagram", "Won", "Kabir", "Complete"]];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9dcf0] px-4 py-3"><div><p className="text-sm font-semibold">Lead pipeline</p><p className="text-[11px] text-[#626783]">214 open leads · All sources</p></div><Chip tone="indigo">Follow-ups first</Chip></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-[11px]"><thead className="bg-[#f7f7fc] text-[#646984]"><tr>{["Customer", "Source", "Stage", "Owner", "Next follow-up"].map((h) => <th key={h} className="border-b border-[#d9dcf0] px-4 py-2 font-medium">{h}</th>)}</tr></thead><tbody>{rows.map((r) => <tr key={r[0]} className="border-b border-[#e7e9f5] last:border-0">{r.map((c, i) => <td key={c} className="px-4 py-3 text-[#303553]">{i === 2 ? <Chip tone={c === "Won" ? "green" : c === "New" ? "amber" : "indigo"}>{c}</Chip> : c}</td>)}</tr>)}</tbody></table></div>
    </div>
  );
}

function RealEstateView() {
  const units = ["A-301", "A-302", "A-303", "A-304", "A-401", "A-402", "A-403", "A-404", "B-201", "B-202", "B-203", "B-204"];
  return <div className="p-4"><div className="flex flex-wrap justify-between gap-3"><div><p className="text-sm font-semibold">Lakeview Residences · Tower A</p><p className="mt-1 text-[11px] text-[#626783]">Site visits today: 6 booked</p></div><p className="text-[11px] font-medium text-[#9a3f35]">Payments due ₹42.5L</p></div><div className="mt-4 grid grid-cols-4 gap-2">{units.map((u, i) => <div key={u} className={`rounded-lg border p-2.5 ${i % 5 === 0 ? "border-[#efc3bd] bg-[#fff3f1]" : i % 3 === 0 ? "border-[#e8d2a7] bg-[#fff9ec]" : "border-[#b9dacb] bg-[#eff9f4]"}`}><p className="text-[11px] font-semibold">{u}</p><p className="mt-1 text-[9px] text-[#626783]">{i % 5 === 0 ? "Sold" : i % 3 === 0 ? "On hold" : "Available"}</p></div>)}</div><div className="mt-4 flex flex-wrap gap-4 text-[10px] text-[#626783]"><span>● Available</span><span>▲ On hold</span><span>■ Sold</span></div></div>;
}

function ClinicView() {
  const rows = [["10:00", "Ananya Kulkarni", "Follow-up", "In consultation"], ["10:30", "Dev Malhotra", "New patient", "Waiting"], ["11:00", "Isha Menon", "Review", "Prescription ready"], ["11:30", "Arjun Nair", "Consultation", "Confirmed"]];
  return <div className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Today · Dr A. Rao</p><p className="mt-1 text-[11px] text-[#626783]">Tuesday, 13 October</p></div><Chip tone="green">On schedule</Chip></div><ol className="mt-4 border-t border-[#d9dcf0]">{rows.map(([time, name, type, status], i) => <li key={time} className="grid grid-cols-[52px_1fr_auto] items-center gap-3 border-b border-[#d9dcf0] py-3"><span className="font-mono text-[10px] text-[#626783]">{time}</span><div><p className="text-[12px] font-semibold">{name}</p><p className="text-[10px] text-[#626783]">{type}</p></div><Chip tone={i === 2 ? "green" : i === 1 ? "amber" : "indigo"}>{status}</Chip></li>)}</ol></div>;
}

function AgencyView() {
  return <div className="p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-semibold">Brightside Studio · October</p><p className="mt-1 text-[11px] text-[#626783]">Client content calendar</p></div><Chip tone="green">Invoice paid</Chip></div><div className="mt-4 grid grid-cols-5 gap-1.5">{Array.from({ length: 15 }, (_, i) => <div key={i} className={`aspect-square rounded-md border p-1 text-[8px] ${[3, 7, 9, 12].includes(i) ? "border-[#c8c9ef] bg-[#f2f2ff]" : "border-[#e3e5f2] bg-[#fafaff]"}`}>{i + 1}{[3, 7, 9, 12].includes(i) && <span className="mt-1 block h-1 rounded bg-[#3d3fd1]" />}</div>)}</div><div className="mt-4 rounded-xl border border-[#d9dcf0] bg-[#f9f9fd] p-3"><div className="flex justify-between gap-3"><div><p className="text-[12px] font-semibold">Product launch carousel</p><p className="mt-1 text-[10px] text-[#9a3f35]">Waiting for your approval</p></div><div className="flex gap-2"><button className="rounded-full border border-[#d9dcf0] px-3 text-[10px]">Revise</button><button className="rounded-full bg-[#14172f] px-3 text-[10px] text-white">Approve</button></div></div></div></div>;
}

function CommerceView() {
  const orders = [["#MR-2041", "Aarav Shah", "UPI", "Delivered"], ["#MR-2042", "Sana Jain", "COD", "Confirm"], ["#MR-2043", "Rahul Bose", "Card", "Packed"], ["#MR-2044", "Mira Paul", "UPI", "Shipped"]];
  return <div className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Orders today</p><p className="mt-1 text-[11px] text-[#626783]">86 orders · ₹1.86L sales</p></div><Chip tone="green">38% repeat buyers</Chip></div><div className="mt-4 space-y-2">{orders.map(([id, name, pay, state]) => <div key={id} className="grid grid-cols-[70px_1fr_auto_auto] items-center gap-2 rounded-lg border border-[#d9dcf0] px-3 py-2.5 text-[10px]"><span className="font-mono text-[#626783]">{id}</span><span className="font-semibold">{name}</span><Chip tone={pay === "COD" ? "amber" : "indigo"}>{pay}</Chip><span className={state === "Confirm" ? "text-[#9a3f35]" : "text-[#236c4d]"}>{state}</span></div>)}</div></div>;
}

function CallingView() {
  return <div className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Incoming call · +91 98••• ••421</p><p className="mt-1 text-[11px] text-[#626783]">Sunrise Family Clinic · 02:14</p></div><Status>Completed</Status></div><div className="mt-4 flex h-9 items-end gap-1 rounded-lg bg-[#f3f3fb] px-3 py-2" aria-label="Call waveform">{[5, 14, 8, 20, 12, 6, 17, 24, 9, 15, 7, 19, 12, 5, 16, 9, 22, 11, 6, 18, 8, 13].map((h, i) => <i key={i} className="w-1 flex-1 rounded-full bg-[#3d3fd1]" style={{ height: h }} />)}</div><div className="mt-4 space-y-3"><div className="mr-10 rounded-xl rounded-tl-sm bg-[#eceef8] p-3 text-[11px] leading-relaxed"><b>Caller</b><br />Can I book a consultation for tomorrow morning?</div><div className="ml-10 rounded-xl rounded-tr-sm bg-[#e9f6f3] p-3 text-[11px] leading-relaxed"><b>Melorite AI</b><br />Dr Rao has 10:30 am available. Shall I book that for you?</div></div><div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#236c4d]"><Check className="size-4" />Booked · Tomorrow 10:30 am</div></div>;
}

function ProductView({ slug }: { slug: string }) {
  if (slug === "crm") return <CrmView />;
  if (slug === "real-estate") return <RealEstateView />;
  if (slug === "clinic") return <ClinicView />;
  if (slug === "agency") return <AgencyView />;
  if (slug === "commerce") return <CommerceView />;
  return <CallingView />;
}

export function ProductHeroMock({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <div className={`min-w-0 max-w-full overflow-hidden rounded-[14px] border border-white/20 bg-white text-[#14172f] ${className}`}>
      <div className="flex items-center justify-between gap-3 border-b border-[#d9dcf0] px-4 py-3"><p className="text-[13px] font-semibold">{slug === "ai-calling" ? "Latest call" : "Today’s workspace"}</p><Status>{statuses[slug]}</Status></div>
      <div className="grid grid-cols-3 border-b border-[#d9dcf0]">{metrics[slug].map(([label, value, delta], i) => <div key={label} className={`min-w-0 px-3 py-3 ${i ? "border-l border-[#d9dcf0]" : ""}`}><p className="truncate text-[9px] uppercase tracking-[.08em] text-[#696d87]">{label}</p><p className="mt-1 truncate text-[clamp(16px,2vw,22px)] font-semibold tracking-[-.03em]">{value}</p><p className="mt-1 truncate text-[9px] text-[#39775f]">{delta}</p></div>)}</div>
      <ProductView slug={slug} />
      <div className="flex items-center justify-between border-t border-[#d9dcf0] px-4 py-3 text-[10px] text-[#696d87]"><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-[#2f8d66]" />Powered by Melorite</span><span>Updated just now</span></div>
    </div>
  );
}

export function ProductWorkspace({ slug, compact = false }: { slug: string; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#262b54] bg-[#171b3f]">
      <div className="flex h-11 items-center gap-3 border-b border-white/10 px-4 text-white/70"><i className="size-2.5 rounded-full bg-[#ff9f7a]" /><div className="flex h-7 max-w-sm flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3 text-[10px]"><Search className="size-3" />Search this workspace</div><span className="ml-auto text-[10px]">Melorite</span></div>
      <div className={`grid bg-[#eef0f8] ${compact ? "md:grid-cols-[160px_1fr]" : "md:grid-cols-[190px_1fr_210px]"}`}>
        <aside className="hidden border-r border-[#d9dcf0] bg-[#f7f7fc] p-4 md:block"><p className="font-serif text-lg">Workspace</p><nav className="mt-6 space-y-1 text-[11px] text-[#626783]">{["Overview", "Today", "Records", "Follow-ups", "Reports"].map((x, i) => <p key={x} className={`rounded-lg px-3 py-2 ${i === 1 ? "bg-[#e9eafd] font-semibold text-[#3d3fd1]" : ""}`}>{x}</p>)}</nav></aside>
        <main className="min-w-0 p-3 sm:p-5"><div className="overflow-hidden rounded-xl border border-[#d9dcf0] bg-white"><ProductView slug={slug} /></div></main>
        {!compact && <aside className="hidden border-l border-[#d9dcf0] bg-[#f7f7fc] p-4 md:block"><p className="text-[11px] font-semibold">Activity</p><div className="mt-4"><MiniBars /></div><div className="mt-5 space-y-3 text-[10px] text-[#626783]">{["Record updated by Priya", "Reminder sent automatically", "Next action scheduled"].map((x) => <p key={x} className="flex gap-2 border-b border-[#d9dcf0] pb-3"><i className="mt-1 size-1.5 shrink-0 rounded-full bg-[#4ca89c]" />{x}</p>)}</div></aside>}
      </div>
    </div>
  );
}

export function SignalCard({ tone, label, children }: { tone: "green" | "red" | "amber"; label: string; children: React.ReactNode }) {
  return <div className="rounded-[12px] border border-white/20 bg-white/95 p-5 text-[#14172f]"><p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]"><i className={`size-2 rounded-full ${tone === "green" ? "bg-[#2f8d66]" : tone === "red" ? "bg-[#bc5549]" : "bg-[#bd8525]"}`} />{label}</p><p className="mt-4 text-sm leading-relaxed text-[#4a4e6d]">{children}</p><div className="mt-5 flex items-center text-[11px] font-semibold text-[#3d3fd1]">Open signal <ChevronRight className="ml-1 size-3" /></div></div>;
}

