import { Check, CalendarDays, Phone, ShoppingBag, Sparkles } from "lucide-react";

const card = "rounded-xl bg-white text-[#111735] shadow-[0_30px_60px_-24px_rgba(0,0,0,.55)]";
const lab = "mono-label !text-[8.5px] text-black/40";

function Pill({ children, tone = "gray" }: { children: React.ReactNode; tone?: "gray" | "green" | "indigo" | "amber" | "red" }) {
  const t = { gray: "bg-black/[.06] text-black/60", green: "bg-emerald-50 text-emerald-700", indigo: "bg-[#eeeffe] text-[#4b4fe0]", amber: "bg-amber-50 text-amber-700", red: "bg-red-50 text-red-700" }[tone];
  return <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium ${t}`}>{children}</span>;
}

function Phone_({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[min(290px,66%)] self-end overflow-hidden rounded-t-[34px] border-[7px] border-b-0 border-[#0d0d0d] bg-[#f7f6f4] text-[#111735] shadow-[0_30px_60px_-20px_rgba(0,0,0,.55)]">
      <div className="mx-auto mt-2 h-5 w-[34%] rounded-full bg-black" />
      <div className="px-4 pb-6 pt-4">{children}</div>
    </div>
  );
}

function CrmVisual() {
  const rows: [string, string, string, string, "green" | "indigo" | "amber" | "gray"][] = [
    ["Aarav Sharma", "Website", "Negotiation", "Today, 4:30 pm", "green"],
    ["Meera Joshi", "WhatsApp", "Proposal", "Tomorrow", "indigo"],
    ["Kabir Nair", "Instagram ad", "New lead", "Call now", "amber"],
    ["Diya Patel", "Referral", "Qualified", "Fri, 11 am", "gray"],
    ["Rahul Verma", "Website", "Won", "Done", "green"],
  ];
  return (
    <div className={`${card} w-[min(560px,90%)] overflow-hidden`}>
      <div className="flex items-center justify-between border-b border-black/[.06] px-4 py-3"><span className="font-serif text-[16px] tracking-tight">Today’s follow-ups</span><Pill tone="indigo">5 leads</Pill></div>
      <div className="divide-y divide-black/[.05]">
        {rows.map(([n, s, st, f, t]) => (
          <div key={n} className="grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-4 py-2.5 text-[10.5px] sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div><p className="font-medium">{n}</p><p className="text-[9px] text-black/45">{s}</p></div>
            <Pill tone={t}>{st}</Pill>
            <span className="hidden text-black/50 sm:block">{f}</span>
            <span className="justify-self-end rounded-full border border-black/10 p-1.5"><Phone className="size-3 text-black/50" /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstateVisual() {
  const units = ["A", "B", "C"].flatMap((t) => [1, 2, 3, 4, 5, 6].map((n) => `${t}-${n}0${n % 3 + 1}`));
  const status = (i: number) => (i % 7 === 0 ? "sold" : i % 5 === 0 ? "held" : "open");
  return (
    <div className={`${card} w-[min(560px,90%)] p-4`}>
      <div className="flex items-center justify-between"><span className="font-serif text-[16px] tracking-tight">Skyline Residences</span><div className="flex gap-1.5"><Pill tone="green">Available</Pill><Pill tone="amber">On hold</Pill><Pill>Sold</Pill></div></div>
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {units.map((u, i) => <span key={u} className={`rounded-md px-1 py-2 text-center text-[9px] font-medium ${status(i) === "sold" ? "bg-black/[.06] text-black/40" : status(i) === "held" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{u}</span>)}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-lg border border-black/[.06] p-2.5"><p className={lab}>Site visits today</p><p className="mt-1 font-serif text-[18px]">6 booked</p></div>
        <div className="rounded-lg border border-black/[.06] p-2.5"><p className={lab}>Payments due</p><p className="mt-1 font-serif text-[18px]">₹42.5L</p></div>
      </div>
    </div>
  );
}

function ClinicVisual() {
  const appts: [string, string, string][] = [["10:00", "Ananya Rao", "General check-up"], ["10:30", "Vikram Das", "Follow-up"], ["11:15", "Sana Khan", "Dental cleaning"], ["12:00", "Ishaan Gupta", "Skin consult"]];
  return (
    <Phone_>
      <p className="font-serif text-[22px] tracking-tight">Today</p>
      <p className="text-[10px] text-black/45">Dr. Mehta · 12 appointments</p>
      <div className="mt-3 divide-y divide-black/[.07]">
        {appts.map(([t, n, r]) => (
          <div key={n} className="flex items-center gap-3 py-2.5"><span className="w-9 text-[10px] font-medium text-black/50">{t}</span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-medium">{n}</p><p className="text-[9px] text-black/45">{r}</p></div><Check className="size-3.5 text-emerald-600" /></div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-[#111735] px-3 py-2.5 text-[10px] text-white"><span>Prescription ready · Ananya Rao</span><Sparkles className="size-3.5 text-[#a5a8ff]" /></div>
    </Phone_>
  );
}

function AgencyVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <div className={`${card} w-[min(560px,90%)] p-4`}>
      <div className="flex items-center justify-between"><span className="font-serif text-[16px] tracking-tight">Client portal · Bloom Cosmetics</span><Pill tone="indigo">Private</Pill></div>
      <div className="mt-3 grid grid-cols-5 gap-1.5 text-[9px]">
        {days.map((d, i) => (
          <div key={d} className="rounded-md border border-black/[.06] p-1.5"><p className="text-black/40">{d}</p><div className={`mt-1.5 rounded px-1.5 py-1 ${i % 2 ? "bg-[#eeeffe] text-[#4b4fe0]" : "bg-black/[.05]"}`}>{i % 2 ? "Reel" : "Post"}</div></div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-black/[.06] p-3 text-[10.5px]">
        <div><p className="font-medium">Summer launch reel · v2</p><p className="text-[9px] text-black/45">Waiting for your approval</p></div>
        <div className="flex gap-1.5"><span className="rounded-full border border-black/10 px-2.5 py-1">Revise</span><span className="rounded-full bg-[#111735] px-2.5 py-1 text-white">Approve</span></div>
      </div>
      <div className="mt-2 flex justify-between rounded-lg bg-black/[.04] px-3 py-2 text-[10px]"><span>Invoice #118</span><Pill tone="green">Paid</Pill></div>
    </div>
  );
}

function CommerceVisual() {
  const orders: [string, string, string, "green" | "amber" | "indigo"][] = [["#1042 · Linen shirt ×2", "UPI", "Delivered", "green"], ["#1043 · Cotton kurta", "COD", "Confirmed", "indigo"], ["#1044 · Denim jacket", "Card", "Shipped", "indigo"], ["#1045 · Silk scarf", "COD", "Awaiting confirmation", "amber"]];
  return (
    <div className={`${card} w-[min(540px,90%)] overflow-hidden`}>
      <div className="grid grid-cols-3 border-b border-black/[.06] text-[10px]">
        {[["Today’s sales", "₹84,200"], ["Orders", "37"], ["Repeat buyers", "42%"]].map(([k, v], i) => <div key={k} className={`p-3 ${i ? "border-l border-black/[.06]" : ""}`}><p className={lab}>{k}</p><p className="mt-1 font-serif text-[19px] leading-none">{v}</p></div>)}
      </div>
      <div className="divide-y divide-black/[.05]">
        {orders.map(([o, p, s, t]) => (
          <div key={o} className="flex items-center gap-3 px-4 py-2.5 text-[10.5px]"><ShoppingBag className="size-3.5 text-black/35" /><span className="min-w-0 flex-1 truncate font-medium">{o}</span><Pill>{p}</Pill><Pill tone={t}>{s}</Pill></div>
        ))}
      </div>
    </div>
  );
}

function CallingVisual() {
  return (
    <div className={`${card} w-[min(500px,90%)] p-4`}>
      <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] font-medium"><span className="grid size-6 place-items-center rounded-full bg-[#111735] text-white"><Phone className="size-3" /></span>Incoming call · 9:42 pm</span><Pill tone="green">Answered by AI</Pill></div>
      <div className="mt-3 space-y-2 text-[10.5px] leading-snug">
        <p className="max-w-[85%] rounded-xl rounded-tl-sm bg-black/[.05] p-2.5"><span className="mono-label !text-[8px] text-black/40">Caller</span><br />Hi, do you have any slots tomorrow morning?</p>
        <p className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-[#eeeffe] p-2.5 text-[#2c2c60]"><span className="mono-label !text-[8px] text-[#4b4fe0]">Melorite AI</span><br />Yes — 10:30 am is open with Dr. Mehta. Shall I book it for you?</p>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-black/[.06] p-2.5 text-[10px]"><span className="flex items-center gap-2"><CalendarDays className="size-3.5 text-[#5f63f2]" />Booked · Tomorrow, 10:30 am</span><Pill tone="green">Added to calendar</Pill></div>
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = { crm: CrmVisual, "real-estate": RealEstateVisual, clinic: ClinicVisual, agency: AgencyVisual, commerce: CommerceVisual, "ai-calling": CallingVisual };

export function ProductVisual({ slug }: { slug: string }) {
  const V = visuals[slug] ?? CrmVisual;
  return <V />;
}

export const tintFor: Record<string, string> = { crm: "#dcddfd", "real-estate": "#d6ebf8", clinic: "#d3f0e3", agency: "#fbe3d3", commerce: "#efdcfa", "ai-calling": "#d9dffd" };

export const panelFor: Record<string, string> = { crm: "mesh-crm grain", "real-estate": "mesh-estate grain", clinic: "mesh-clinic grain", agency: "mesh-agency grain", commerce: "mesh-commerce grain", "ai-calling": "mesh-calling grain" };


