import { Bell, Download, LayoutGrid, ListFilter, Search, Sparkles, X } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

const rows: [string, string, string, string, string][] = [
  ["Aarav Sharma", "Website", "Negotiation", "Priya Sharma", "Today, 4:30 pm"],
  ["Meera Joshi", "WhatsApp", "Proposal sent", "Rohan Kulkarni", "Tomorrow, 11 am"],
  ["Kabir Nair", "Instagram ad", "New lead", "Priya Sharma", "Call now"],
  ["Diya Patel", "Referral", "Qualified", "Neha Iyer", "Fri, 3 pm"],
  ["Rahul Verma", "Website", "Won", "Rohan Kulkarni", "Done"],
  ["Sana Khan", "Phone call", "Site visit", "Neha Iyer", "Sat, 10 am"],
  ["Ishaan Gupta", "Walk-in", "Qualified", "Priya Sharma", "Mon, 2 pm"],
  ["Anaya Reddy", "WhatsApp", "Negotiation", "Rohan Kulkarni", "Today, 6 pm"],
  ["Vihaan Mehta", "Website", "New lead", "Neha Iyer", "Call now"],
  ["Tara Bose", "Referral", "Proposal sent", "Priya Sharma", "Tue, 12 pm"],
];
const nav: [typeof Search, string, boolean?][] = [[LayoutGrid, "Overview"], [ListFilter, "Leads & deals", true], [Sparkles, "Follow-ups"], [Bell, "Reminders"]];

export function LeadsTable() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#fbfbf8] pb-6 text-[#111735]">
      <div className="rail-inner">
        <Reveal className="rounded-[4px] border border-black/[.07] bg-[#fbfbff] p-[clamp(20px,3.4vw,52px)]">
          <h3 className="h-card max-w-[30ch]">Never lose a lead again, with every deal and its stage in view</h3>
          <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-black/55">Melorite CRM collects leads from your website, ads and WhatsApp, sends each one to the right person, and reminds your team when to follow up.</p>
          <div className="mt-9 overflow-hidden border border-black/10 border-t-2 border-t-[#111735] bg-white">
            <div className="flex items-center gap-3 border-b border-black/[.07] px-4 py-3 text-[11.5px]">
              <span className="hidden font-medium sm:inline"><span className="text-black/80">214</span> <span className="text-black/45">open leads</span></span>
              {["Stage: Active", "Source: All", "Owner: Sales team", "Follow-up: This week"].map((f) => (
                <span key={f} className="hidden items-center gap-2 rounded-md bg-black/[.04] px-2.5 py-1 md:inline-flex">{f}<X className="size-3 text-black/40" /></span>
              ))}
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-black/10 px-3 py-1.5 font-medium"><Download className="size-3.5" />Export report</span>
            </div>
            <div className="grid md:grid-cols-[210px_1fr]">
              <aside className="hidden border-r border-black/[.07] p-4 md:block">
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-[11px] text-black/45"><Search className="size-3.5" />Search customers…</div>
                {nav.map(([I, l, on]) => (
                  <div key={l} className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[12px] ${on ? "bg-[#eeeffe] font-medium text-[#3c3fc4]" : "text-black/65"}`}><I className="size-3.5" />{l}</div>
                ))}
                <p className="mono-label mt-6 mb-2 px-3 !text-[9px] text-black/35">Filters</p>
                {["Stage", "Owner", "Source", "Last contact", "Value"].map((f) => (
                  <div key={f} className="flex items-center justify-between px-3 py-2 text-[11.5px] text-black/60">{f}<span className="text-black/30">⌄</span></div>
                ))}
              </aside>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-[12.5px]">
                  <thead>
                    <tr className="border-b border-black/[.07] text-[12px] text-black/55">
                      {["Customer", "Source", "Stage", "Owner", "Next follow-up"].map((h) => <th key={h} className={`px-4 py-3 font-normal ${h === "Next follow-up" ? "font-semibold text-black" : ""}`}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([a, s, st, o, f]) => (
                      <tr key={a} className="border-b border-black/[.05] transition-colors hover:bg-black/[.02]">
                        <td className="px-4 py-3 font-medium">{a}</td>
                        <td className="px-4 py-3 text-black/60">{s}</td>
                        <td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-[11px] ${st === "Won" ? "bg-emerald-50 text-emerald-700" : st === "New lead" ? "bg-amber-50 text-amber-700" : "bg-[#eeeffe] text-[#4b4fe0]"}`}>{st}</span></td>
                        <td className="px-4 py-3 text-black/60">{o}</td>
                        <td className="px-4 py-3">{f}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
