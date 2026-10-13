import { Bell, Search, Sparkles } from "lucide-react";
import { showcase } from "@/data/showcase";

const CORAL = "#e8826a";
const TEAL = "#56c2b8";

/** A product-window mock-up (dark rail, record panel, chart, side list), standing in for a product screenshot. */
export function AppShot({ slug = "home" }: { slug?: string }) {
  const d = showcase[slug] ?? showcase.home;
  const max = Math.max(...d.chart.bars.flat());
  return (
    <div className="overflow-hidden rounded-[4px] border border-[#2b2b2b] bg-[#2b2b2b] text-ink shadow-[0_40px_90px_-40px_rgba(0,0,0,.45)]">
      <div className="flex h-[34px] items-center gap-3 px-3 text-white/70">
        <span className="size-3.5 rounded-sm bg-coral" />
        <span className="flex h-6 max-w-[360px] flex-1 items-center gap-2 rounded bg-white/[.12] px-2 text-[10.5px]"><Search className="size-3" />Find or ask</span>
        <span className="ml-auto flex items-center gap-3 text-[10px]"><Sparkles className="size-3" /><Bell className="size-3" /><span className="hidden sm:inline">Melorite</span></span>
      </div>
      <div className="grid bg-[#f4f3f1] md:grid-cols-[42px_minmax(0,250px)_minmax(0,1fr)_minmax(0,220px)]">
        <div className="hidden bg-[#2b2b2b] md:block" />
        <div className="border-r border-line/70 p-3">
          <div className="rounded bg-white p-3.5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-ink text-[15px] font-medium text-white">{d.title[0]}</span>
              <div><p className="text-[14px] font-medium">{d.title}</p><p className="text-[10.5px] text-muted">{d.tag}</p></div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1 text-center text-[9.5px] text-muted">
              {["Note", "Email", "Call", "Task"].map((a) => <span key={a}><i className="mx-auto mb-1 block size-7 rounded-full border border-line" />{a}</span>)}
            </div>
          </div>
          <div className="mt-3 rounded bg-white p-3.5 text-[11px]">
            <p className="mb-2 text-[12px] font-medium">Key information</p>
            {d.stats.map((s) => (
              <div key={s.label} className="mb-2.5"><p className="text-[9.5px] text-muted">{s.label}</p><p className="font-medium">{s.value}{s.unit ? ` ${s.unit}` : ""}</p></div>
            ))}
          </div>
        </div>
        <div className="p-3">
          <div className="rounded bg-white p-4">
            <p className="mono-label !text-[9.5px] text-muted">{d.eyebrow}</p>
            <p className="mt-3 text-[12px] font-medium">{d.chart.title}</p>
            <div className="mt-3 flex h-[210px] items-end gap-6 border-b border-line px-2 sm:gap-10">
              {d.chart.bars.map(([a, b], i) => (
                <div key={i} className="flex h-full flex-1 flex-col justify-end">
                  <div className="flex flex-1 items-end justify-center gap-1.5">
                    <span className="w-6 rounded-[2px]" style={{ height: `${(a / max) * 100}%`, background: CORAL }} />
                    <span className="w-6 rounded-[2px]" style={{ height: `${(b / max) * 100}%`, background: TEAL }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-around text-[9.5px] text-muted">{d.chart.labels.map((l) => <span key={l}>{l}</span>)}</div>
            <div className="mt-5 border-t border-line pt-3 text-[11px]">
              <p className="mb-2 font-medium">{d.signalsTitle}</p>
              <div className="flex flex-wrap gap-2">
                {d.signals.map(([t, tone]) => <span key={t} className="rounded-full border px-2.5 py-[3px]" style={tone === "teal" ? { color: "#2d8a80", borderColor: TEAL } : { color: "#c4503a", borderColor: CORAL }}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden p-3 pl-0 md:block">
          <div className="h-full rounded bg-white p-3.5 text-[11px]">
            <p className="mb-3 text-[12px] font-medium">{d.listTitle}</p>
            {d.list.map((l) => <p key={l} className="mb-3 border-b border-line/70 pb-3 font-medium leading-snug">{l}</p>)}
            <p className="rounded border border-line py-1.5 text-center text-[10.5px] font-medium">{d.more}</p>
            <p className="mb-2 mt-6 text-[12px] font-medium">Intel</p>
            {d.sidebar.map((s) => <p key={s} className="mb-2 text-[10.5px] text-muted">{s}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
