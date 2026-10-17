import { Building2, CalendarCheck, Headset, Megaphone, ShoppingBag, Users, Workflow, type LucideIcon } from "lucide-react";

type Kind = "crm" | "estate" | "clinic" | "calling" | "agency" | "commerce" | "ops";

const themes: Record<Kind, { bg: string; icon: LucideIcon; title: string; rows: [string, string][]; chip: string }> = {
  crm: { bg: "radial-gradient(circle at 15% 10%, #ffd5e5 0, transparent 50%), radial-gradient(circle at 90% 90%, #ffb98a 0, transparent 55%), linear-gradient(135deg,#e9e8ff,#f6d9ff)", icon: Users, title: "Today’s follow-ups", rows: [["Aarav Sharma", "4:30 pm"], ["Meera Joshi", "Tomorrow"], ["Kabir Nair", "Call now"]], chip: "5 leads" },
  estate: { bg: "radial-gradient(circle at 85% 10%, #c3d6ff 0, transparent 50%), radial-gradient(circle at 10% 95%, #b7c4ff 0, transparent 55%), linear-gradient(135deg,#e6f1ff,#e1e9ff)", icon: Building2, title: "Skyline Residences", rows: [["A-203 · 2 BHK", "Available"], ["B-402 · 3 BHK", "On hold"], ["C-101 · 2 BHK", "Booked"]], chip: "6 visits" },
  clinic: { bg: "radial-gradient(circle at 10% 10%, #cfd9ff 0, transparent 50%), radial-gradient(circle at 90% 90%, #c2d9ff 0, transparent 55%), linear-gradient(135deg,#e3f8ee,#e5f0ff)", icon: CalendarCheck, title: "Today · 12 appointments", rows: [["Ananya Rao", "10:00"], ["Vikram Das", "10:30"], ["Sana Khan", "11:15"]], chip: "On time" },
  calling: { bg: "radial-gradient(circle at 20% 15%, #a7b3ff 0, transparent 50%), radial-gradient(circle at 85% 85%, #ff9fd0 0, transparent 55%), linear-gradient(135deg,#d9dcff,#f2d3ff)", icon: Headset, title: "Incoming call · 9:42 pm", rows: [["Caller", "Do you have any slots tomorrow?"], ["Melorite AI", "Yes, 11 am is open."]], chip: "Answered by AI" },
  agency: { bg: "radial-gradient(circle at 85% 10%, #ffd0a8 0, transparent 50%), radial-gradient(circle at 10% 90%, #ffb7c8 0, transparent 55%), linear-gradient(135deg,#fff0e0,#ffe3ec)", icon: Megaphone, title: "Client portal", rows: [["Launch reel v2", "In review"], ["Festive banner", "Approved"], ["Blog calendar", "Changes"]], chip: "3 due" },
  commerce: { bg: "radial-gradient(circle at 15% 15%, #f2c7ff 0, transparent 50%), radial-gradient(circle at 90% 85%, #ffd9a6 0, transparent 55%), linear-gradient(135deg,#f4e3ff,#ffe9d2)", icon: ShoppingBag, title: "Today’s orders", rows: [["#1042 · UPI", "Packed"], ["#1043 · COD", "Confirmed"], ["#1044 · Card", "Shipped"]], chip: "37 orders" },
  ops: { bg: "radial-gradient(circle at 80% 15%, #c5c9ff 0, transparent 50%), radial-gradient(circle at 10% 90%, #ffd3b3 0, transparent 55%), linear-gradient(135deg,#eceeff,#fff0e3)", icon: Workflow, title: "Workflow", rows: [["Request received", "Done"], ["Manager review", "Done"], ["Customer update", "Next"]], chip: "4 steps" },
};

function kindOf(label = ""): Kind {
  const l = label.toLowerCase();
  if (/real estate|buyer/.test(l)) return "estate";
  if (/clinic|appointment|front desk/.test(l)) return "clinic";
  if (/call/.test(l)) return "calling";
  if (/agency|approval/.test(l)) return "agency";
  if (/commerce|order/.test(l)) return "commerce";
  if (/crm|sales/.test(l)) return "crm";
  return "ops";
}

/** Illustrated card artwork: a pastel mesh with a floating glass tile for the topic — no screenshots, nothing cropped. */
export function ResourceArtwork({ kind: label, index = 0, compact = false }: { kind?: string; index?: number; compact?: boolean }) {
  const order: Kind[] = ["estate", "clinic", "calling", "agency", "ops", "crm", "commerce"];
  const t = themes[label ? kindOf(label) : order[index % order.length]];
  const Icon = t.icon;
  return (
    <div aria-hidden className={`relative isolate overflow-hidden ${compact ? "aspect-[1.55]" : "aspect-[1.4]"}`} style={{ background: t.bg }}>
      <div className="absolute inset-0 opacity-[.3] mix-blend-soft-light [background-image:radial-gradient(rgba(0,0,0,.55)_1px,transparent_1.2px)] [background-size:4px_4px]" />
      <i className="absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60" />
      <i className="absolute left-1/2 top-1/2 size-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
      <span className="float-y glass absolute left-1/2 top-1/2 grid size-[26%] min-w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[26px]" style={{ animationDelay: `${-index * 0.9}s` }}><Icon className="size-[42%] text-[#4b4fe0]" strokeWidth={1.6} /></span>
      <span className="glass-soft absolute left-[7%] top-[16%] rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#111735]/75">{t.rows[0][0]}</span>
      <span className="glass-soft absolute bottom-[16%] right-[7%] rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#111735]/75">{t.rows[1]?.[0] ?? t.chip}</span>
      <span className="absolute right-[9%] top-[14%] rounded-full bg-[#5f63f2] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(95,99,242,.8)]">{t.chip}</span>
    </div>
  );
}
