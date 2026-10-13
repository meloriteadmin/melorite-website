import { Check } from "lucide-react";
import { showcase, type Showcase } from "@/data/showcase";

const CORAL = "#e8826a";
const TEAL = "#56c2b8";

function Chart({ chart }: { chart: Showcase["chart"] }) {
  const max = Math.max(...chart.bars.flat());
  const top = Math.ceil(max / 10) * 10;
  const ticks = [0, top / 3, (top / 3) * 2, top].map(Math.round).reverse();
  return (
    <div className="px-4 py-3.5">
      <div className="flex items-center justify-between text-[11.5px] text-ink">
        <span>{chart.title}</span>
        <span className="flex items-center gap-3 text-[10px] text-muted">
          <span className="flex items-center gap-1.5"><i className="size-2 rounded-[2px]" style={{ background: CORAL }} />{chart.legend[0]}</span>
          <span className="flex items-center gap-1.5"><i className="size-2 rounded-[2px]" style={{ background: TEAL }} />{chart.legend[1]}</span>
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <div className="flex h-[132px] flex-col justify-between pb-[18px] text-[9px] text-muted/80">
          {ticks.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="relative grid h-[132px] flex-1 grid-cols-4 items-end border-b border-line/90">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%-18px)] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_calc(33.3%-1px),var(--color-line)_calc(33.3%-1px),var(--color-line)_33.3%)] opacity-60" />
          {chart.bars.map(([a, b], i) => (
            <div key={i} className="relative flex h-full flex-col justify-end">
              <div className="flex flex-1 items-end justify-center gap-1.5 pb-[18px]">
                <span className="w-[26%] max-w-[26px] rounded-[2px]" style={{ height: `${(a / top) * 100}%`, background: CORAL }} />
                <span className="w-[26%] max-w-[26px] rounded-[2px]" style={{ height: `${(b / top) * 100}%`, background: TEAL }} />
              </div>
              <span className="absolute inset-x-0 bottom-0 text-center text-[9px] text-muted/80">{chart.labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The white "record" card shown beside the hero headline. */
export function RecordCard({ slug = "home", className = "" }: { slug?: string; className?: string }) {
  const d = showcase[slug] ?? showcase.home;
  return (
    <div className={className}>
      <p className="mono-label mb-3 flex items-center gap-2 !text-[10.5px] text-white/75">
        <span className="grid size-[15px] place-items-center rounded-full bg-coral text-white"><Check className="size-2.5" strokeWidth={3} /></span>
        {d.eyebrow === "Software for your industry" ? "Workspace overview" : "Workspace record"}
      </p>
      <div className="overflow-hidden rounded-[3px] border border-white/10 bg-white text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,.6)]">
        <div className="flex items-center justify-between border-b border-line/80 px-4 py-3">
          <span className="text-[15px] font-medium tracking-tight">{d.title}</span>
          <span className="mono-label flex items-center gap-1.5 !text-[9px] text-muted"><i className="size-1.5 rounded-full bg-teal" />{d.tag}</span>
        </div>
        <div className="grid grid-cols-2 border-b border-line/80 sm:grid-cols-4">
          {d.stats.map((s, i) => (
            <div key={s.label} className={`px-4 py-3 ${i ? "sm:border-l" : ""} ${i % 2 ? "border-l sm:border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} border-line/80`}>
              <p className="text-[11px] text-ink/80">{s.label}</p>
              <p className="mt-1 text-[22px] font-medium leading-none tracking-tight">{s.value}{s.unit && <span className="ml-1 text-[10px] font-normal text-muted">{s.unit}</span>}</p>
              {s.delta && <p className={`mt-1.5 text-[10.5px] ${s.up ? "text-emerald-700" : "text-red-600"}`}>{s.up ? "↑" : "↓"} {s.delta}</p>}
            </div>
          ))}
        </div>
        <div className="border-b border-line/80"><Chart chart={d.chart} /></div>
        <div className="grid grid-cols-2 border-b border-line/80">
          <div className="px-4 py-3">
            <p className="text-[11px] text-ink/80">{d.listTitle}</p>
            <ul className="mt-1.5 space-y-0.5 text-[12px] font-medium">{d.list.map((l) => <li key={l}>{l}</li>)}</ul>
            <p className="mt-0.5 text-[11px] text-muted">{d.more}</p>
          </div>
          <div className="border-l border-line/80 px-4 py-3">
            <p className="text-[11px] text-ink/80">{d.signalsTitle}</p>
            <div className="mt-2 flex flex-col items-start gap-1.5">
              {d.signals.map(([t, tone]) => (
                <span key={t} className="rounded-full border px-2.5 py-[3px] text-[11px]" style={tone === "teal" ? { color: "#2d8a80", borderColor: "#56c2b8" } : { color: "#c4503a", borderColor: "#e8826a" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          {[d.footLeft, d.footRight].map(([k, v], i) => (
            <div key={k} className={`px-4 py-3 ${i ? "border-l border-line/80" : ""}`}>
              <p className="text-[10.5px] text-muted">{k}</p>
              <p className="mt-0.5 text-[12.5px] font-medium">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
