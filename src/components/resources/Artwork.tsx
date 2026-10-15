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

/** Illustrated card artwork: a pastel mesh gradient with a miniature product screen for the topic. */
export function ResourceArtwork({ kind: label, index = 0, compact = false }: { kind?: string; index?: number; compact?: boolean }) {
  const order: Kind[] = ["estate", "clinic", "calling", "agency", "ops", "crm", "commerce"];
  const t = themes[label ? kindOf(label) : order[index % order.length]];
  const Icon = t.icon;
  return (
    <div aria-hidden className={`relative overflow-hidden ${compact ? "aspect-[1.55]" : "aspect-[1.4]"}`} style={{ background: t.bg }}>
      <div className="absolute inset-0 opacity-[.35] mix-blend-soft-light [background-image:radial-gradient(rgba(0,0,0,.55)_1px,transparent_1.2px)] [background-size:4px_4px]" />
      <span className="absolute left-5 top-5 grid size-11 place-items-center rounded-2xl bg-white/80 text-[#4b4fe0] shadow-[0_10px_24px_-12px_rgba(17,23,53,.4)] backdrop-blur"><Icon className="size-5" /></span>
      <span className="absolute right-5 top-6 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#111735]/70 backdrop-blur">{t.chip}</span>
      <div className="absolute inset-x-[9%] bottom-0 top-[34%] overflow-hidden rounded-t-[18px] bg-white p-4 shadow-[0_-10px_50px_-20px_rgba(17,23,53,.35)]">
        <p className="text-[12.5px] font-semibold tracking-tight text-[#111735]">{t.title}</p>
        <ul className="mt-3 divide-y divide-[#111735]/[.06]">
          {t.rows.map(([a, b]) => <li key={a} className="flex items-center justify-between gap-3 py-2 text-[11.5px]"><span className="truncate text-[#111735]/75">{a}</span><span className="shrink-0 rounded-full bg-[#eeeffe] px-2 py-0.5 text-[10px] font-medium text-[#4b4fe0]">{b}</span></li>)}
        </ul>
      </div>
    </div>
  );
}
