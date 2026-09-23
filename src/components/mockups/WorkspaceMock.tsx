/**
 * Illustrative Melorite Client Workspace, modelled on the platform's real shell
 * (utility bar → global header → context bar, collapsible module sidebar,
 * metric strip, data tables and pipeline boards). Module names come from the
 * product catalogue; figures are illustrative sample data, never customer data.
 *
 * Scaling: the frame uses container-query units so 1em == 10 virtual px at a
 * 1280px design width. Everything inside is sized in em and scales crisply at
 * any rendered width, server-rendered with no layout shift.
 */
import {
  Bell, Building2, CalendarClock, ChartColumn, ChevronDown, CircleHelp, Contact, CreditCard, FileText,
  Folder, GitBranch, Grid2x2, LayoutDashboard, ListChecks, Package, Plus, Receipt, Search, Settings,
  Star, Target, TrendingUp, Users, Workflow, Warehouse, Upload, type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";

const MODULE_ICONS: [RegExp, LucideIcon][] = [
  [/dashboard|home|overview/i, LayoutDashboard],
  [/lead|target/i, Target],
  [/contact|customer|people|employee|member|guest|patient|student|candidate/i, Contact],
  [/account|vendor|dealer|site|propert|store|structure/i, Building2],
  [/opportunit|forecast/i, TrendingUp],
  [/pipeline|journey|workflow|routing/i, GitBranch],
  [/activit|calendar|appointment|schedule|timetable|shift|attendance/i, CalendarClock],
  [/report|analytic|metric|dashboards|explore/i, ChartColumn],
  [/setting/i, Settings],
  [/invoice|bill|receipt|quotation|order/i, Receipt],
  [/payment|payroll|fee|collection|donation|loan|reimburse/i, CreditCard],
  [/item|product|catalog|stock|inventory|part/i, Package],
  [/warehouse|transfer|count|replenish/i, Warehouse],
  [/file|document|template|contract|knowledge|signature|record/i, FileText],
  [/folder|shared/i, Folder],
  [/task|work|request|approval|ticket|queue|job/i, ListChecks],
  [/import|export/i, Upload],
  [/team|resource|recruit|faculty|volunteer|driver/i, Users],
];
const moduleIcon = (m: string) => MODULE_ICONS.find(([re]) => re.test(m))?.[1] ?? Workflow;

/* ------------------------------------------------------------------ */

export function MockFrame({
  children,
  className,
  designWidth = 1280,
  chrome = true,
  url,
  readable = false,
}: {
  children: React.ReactNode;
  className?: string;
  designWidth?: number;
  chrome?: boolean;
  url?: string;
  /** On phones, render at a legible scale inside a swipeable frame instead of shrinking. */
  readable?: boolean;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(readable && "no-scrollbar max-sm:-mx-[var(--gutter)] max-sm:overflow-x-auto max-sm:px-[var(--gutter)] max-sm:pb-1")}
        data-lenis-prevent={readable || undefined}
      >
        <div className={cn("@container", readable && "max-sm:w-[760px]")}>
          {/* Screenshot bezel: consistent across the site */}
          <div className="rounded-[20px] bg-gradient-to-b from-white to-paper p-[5px] shadow-ui ring-1 ring-line">
            <div
              className="overflow-hidden rounded-[15px] bg-white text-[#1d2433] ring-1 ring-line/80"
              style={{ fontSize: `calc(100cqw / ${designWidth / 10})` }}
            >
              {chrome && (
                <div className="flex h-[3.2em] items-center gap-[1.6em] border-b border-[#eef1f5] bg-[#fafbfd] px-[1.6em]">
                  <div className="flex gap-[0.55em]" aria-hidden>
                    <span className="size-[1em] rounded-full bg-[#e2e8f0]" />
                    <span className="size-[1em] rounded-full bg-[#e2e8f0]" />
                    <span className="size-[1em] rounded-full bg-[#e2e8f0]" />
                  </div>
                  <div className="mx-auto flex h-[2.1em] w-[38%] items-center justify-center rounded-[0.6em] bg-white text-[1.1em] text-[#94a3b8] ring-1 ring-[#eef1f5]">
                    <span className="text-[0.9em]">{url ?? "app.melorite.com"}</span>
                  </div>
                  <div className="w-[4em]" />
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
      {readable && <p className="mt-3 text-center text-[12px] text-muted sm:hidden">Swipe to explore the interface →</p>}
    </div>
  );
}

function BarsLogo() {
  return (
    <Image
      src="/brand/melorite-wordmark.png"
      alt="Melorite"
      width={240}
      height={51}
      className="h-[2.25em] w-auto"
    />
  );
}

function GlobalHeader({ appName }: { appName: string }) {
  return (
    <>
      <div className="flex h-[2.8em] items-center justify-between border-b border-[#eef1f5] px-[1.6em] text-[1.1em] text-[#64748b]">
        <span data-area="org" className="rounded-[0.4em] px-[0.6em] py-[0.15em] font-medium text-[#1d2433] ring-1 ring-[#e3e8ef]">Northwind Trading</span>
        <span>Sample workspace · illustrative data</span>
      </div>
      <div className="flex h-[5.6em] items-center gap-[2em] border-b border-[#e8edf3] px-[2em]">
        <BarsLogo />
        <span data-area="switcher" className="flex h-[3.2em] items-center gap-[0.7em] rounded-[0.7em] px-[1em] text-[1.3em] font-medium text-[#0a2540] ring-1 ring-[#e3e8ef]">
          <Grid2x2 className="size-[1.1em] text-[#2563eb]" aria-hidden />
          {appName}
          <ChevronDown className="size-[1em] text-[#94a3b8]" aria-hidden />
        </span>
        <span data-area="search" className="flex h-[3.4em] flex-1 items-center gap-[0.8em] rounded-[0.8em] bg-[#f8fafc] px-[1.2em] text-[1.3em] text-[#94a3b8] ring-1 ring-[#e3e8ef]">
          <Search className="size-[1.1em]" aria-hidden />
          Search across your workspace…
          <span className="ml-auto rounded-[0.3em] px-[0.4em] text-[0.8em] ring-1 ring-[#e3e8ef]">⌘K</span>
        </span>
        <span data-area="actions" className="flex items-center gap-[1.4em] text-[#475569]" aria-hidden>
          <Star className="size-[1.8em]" />
          <Plus className="size-[1.8em]" />
          <CircleHelp className="size-[1.8em]" />
          <span className="relative">
            <Bell className="size-[1.8em]" />
            <i className="absolute -right-[0.1em] -top-[0.1em] size-[0.8em] rounded-full bg-[#2563eb] ring-2 ring-white" />
          </span>
          <span className="grid size-[3.2em] place-items-center rounded-[0.6em] bg-[#eff6ff] text-[1em] font-semibold text-[#2563eb]">
            <span className="text-[1.2em]">NT</span>
          </span>
        </span>
      </div>
    </>
  );
}

function Sidebar({ title, items, active = 0, accent }: { title: string; items: string[]; active?: number; accent: string }) {
  return (
    <aside data-area="nav" className="w-[22em] shrink-0 border-r border-[#e8edf3] bg-white py-[1.6em]">
      <div className="px-[2em] pb-[1.2em] text-[1.4em] font-semibold text-[#0a2540]">{title}</div>
      <ul className="space-y-[0.3em] px-[1em]">
        {items.slice(0, 11).map((m, i) => {
          const I = moduleIcon(m);
          const on = i === active;
          return (
            <li
              key={m}
              className={cn("relative flex h-[3.6em] items-center gap-[1em] rounded-[0.6em] px-[1em] text-[1.35em]", on ? "font-medium" : "text-[#475569]")}
              style={on ? { background: tint(accent, 0.08), color: accent } : undefined}
            >
              {on && <i className="absolute -left-[0.75em] top-[0.6em] bottom-[0.6em] w-[0.22em] rounded-full" style={{ background: accent }} />}
              <I className="size-[1.15em] shrink-0" aria-hidden />
              <span className="truncate text-[0.95em]">{m}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function KpiStrip({ kpis }: { kpis: [string, string, string][] }) {
  return (
    <div data-area="overview" className="grid grid-cols-4 overflow-hidden rounded-[0.9em] ring-1 ring-[#e3e8ef]">
      {kpis.map(([label, value, delta], i) => {
        const down = delta.startsWith("-");
        return (
          <div key={label} className={cn("px-[1.8em] py-[1.5em]", i > 0 && "border-l border-[#e8edf3]", i === 0 && "bg-[#f8fafc]")}>
            <div className="text-[1.2em] text-[#64748b]">{label}</div>
            <div className="mt-[0.35em] flex items-baseline gap-[0.6em]">
              <span className="text-[2.5em] font-semibold tracking-[-0.02em] text-[#0a2540]">{value}</span>
              <span className={cn("text-[1.15em] font-medium", /^[+-]/.test(delta) ? (down ? "text-[#0f766e]" : "text-[#059669]") : "text-[#94a3b8]")}>{delta}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const STATUS_TONE: Record<string, string> = {
  paid: "#059669", accepted: "#059669", fulfilled: "#059669", received: "#059669", active: "#059669", approved: "#059669", met: "#059669", closed: "#64748b", "on track": "#059669",
  sent: "#2563eb", issued: "#2563eb", paid_: "#2563eb", "in review": "#2563eb", "in progress": "#2563eb", onboarding: "#2563eb", packing: "#2563eb",
  partial: "#d97706", "partially received": "#d97706", pending: "#d97706", "at risk": "#d97706", draft: "#64748b", "on leave": "#7c3aed",
  overdue: "#dc2626",
};

function StatusChip({ label }: { label: string }) {
  const c = STATUS_TONE[label.toLowerCase()];
  if (!c) return <span>{label}</span>;
  return (
    <span className="inline-flex items-center gap-[0.5em] rounded-[0.4em] px-[0.6em] py-[0.15em] text-[0.92em] font-medium" style={{ background: tint(c, 0.09), color: c }}>
      <i className="size-[0.45em] rounded-full" style={{ background: c }} />
      {label}
    </span>
  );
}

function TableBody({ product, files }: { product: Product; files?: boolean }) {
  const { columns, rows } = product.preview;
  return (
    <div className="overflow-hidden rounded-[0.9em] ring-1 ring-[#e3e8ef]">
      <div className="flex items-center justify-between border-b border-[#e8edf3] px-[1.8em] py-[1.2em] text-[1.2em]">
        <span className="font-semibold text-[#0a2540]">
          {rows.length * 6} records <span className="font-normal text-[#94a3b8]">· Saved view: All</span>
        </span>
        <span className="flex gap-[0.6em]">
          {["Filter", "Columns", "Export"].map((b) => (
            <span key={b} className="rounded-[0.5em] px-[0.8em] py-[0.25em] text-[0.92em] text-[#475569] ring-1 ring-[#e3e8ef]">{b}</span>
          ))}
        </span>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#e8edf3] bg-[#f8fafc]">
            <th className="w-[4em] px-[1.8em] py-[1em]"><span className="block size-[1.4em] rounded-[0.3em] ring-1 ring-[#cbd5e1]" /></th>
            {columns.map((c) => (
              <th key={c} className="px-[1.2em] py-[1em] text-[1.1em] font-medium uppercase tracking-[0.06em] text-[#64748b]">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={cn("border-b border-[#eef1f5] last:border-0", ri === 1 && "bg-[#f8fbff]")}>
              <td className="px-[1.8em] py-[1.25em]"><span className="block size-[1.4em] rounded-[0.3em] ring-1 ring-[#cbd5e1]" /></td>
              {r.map((cell, ci) => (
                <td key={ci} className={cn("px-[1.2em] py-[1.25em] text-[1.3em]", ci === 0 ? "font-medium text-[#2563eb]" : "text-[#334155]")}>
                  {ci === 0 && files ? (
                    <span className="inline-flex items-center gap-[0.6em]"><FileText className="size-[1.1em] text-[#64748b]" aria-hidden />{cell}</span>
                  ) : ci === r.length - 1 ? (
                    <StatusChip label={cell} />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PipelineBody({ product, board }: { product: Product; board?: boolean }) {
  const { columns, rows } = product.preview;
  return (
    <div className="grid grid-cols-4 gap-[1.2em]">
      {columns.map((col, ci) => {
        const cards = rows.filter((_, i) => i % columns.length === ci).concat(ci === 1 ? [rows[0]] : []);
        return (
          <div key={col} className="rounded-[0.9em] bg-[#f8fafc] p-[1em] ring-1 ring-[#e8edf3]">
            <div className="mb-[0.9em] flex items-center justify-between px-[0.3em] text-[1.2em]">
              <span className="font-semibold text-[#0a2540]">{col}</span>
              <span className="rounded-full bg-white px-[0.6em] text-[0.9em] text-[#64748b] ring-1 ring-[#e3e8ef]">{cards.length}</span>
            </div>
            <div className="space-y-[0.9em]">
              {cards.map(([title, meta], i) => (
                <div key={i} className={cn("rounded-[0.8em] bg-white p-[1.2em] ring-1 ring-[#e3e8ef]", ci === 1 && i === 0 && "shadow-[0_0.8em_2em_-0.8em_rgba(10,37,64,0.25)] ring-[#bfdbfe]")}>
                  <div className="text-[1.25em] font-medium text-[#0a2540]">{title}</div>
                  <div className="mt-[0.5em] flex items-center justify-between text-[1.1em] text-[#64748b]">
                    <span>{meta}</span>
                    {board ? (
                      <span className="flex -space-x-[0.4em]">
                        <i className="size-[1.6em] rounded-full bg-[#fde68a] ring-2 ring-white" />
                        <i className="size-[1.6em] rounded-full bg-[#bfdbfe] ring-2 ring-white" />
                      </span>
                    ) : (
                      <span className="rounded-[0.3em] px-[0.4em] text-[0.9em]" style={{ background: tint(product.accent, 0.08), color: product.accent }}>{30 + ci * 20}%</span>
                    )}
                  </div>
                  {board && (
                    <div className="mt-[0.8em] h-[0.4em] overflow-hidden rounded-full bg-[#eef2f7]">
                      <div className="h-full rounded-full" style={{ width: `${25 + ci * 25}%`, background: product.accent }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChartBody({ product }: { product: Product }) {
  const { columns, rows } = product.preview;
  const series = [
    [22, 30, 28, 40, 38, 52, 60],
    [14, 18, 24, 22, 30, 34, 41],
    [8, 12, 10, 16, 20, 18, 26],
  ];
  const colors = [product.accent, "#94a3b8", "#cbd5e1"];
  const W = 700, H = 200;
  const pts = (s: number[]) => s.map((v, i) => `${(i / (s.length - 1)) * W},${H - (v / 64) * H}`).join(" ");
  return (
    <div className="grid grid-cols-[1fr_28em] gap-[1.2em]">
      <div className="rounded-[0.9em] p-[1.8em] ring-1 ring-[#e3e8ef]">
        <div className="mb-[1.2em] flex items-center justify-between text-[1.25em]">
          <span className="font-semibold text-[#0a2540]">Trend</span>
          <span className="flex gap-[1em] text-[0.9em] text-[#64748b]">
            {rows.map(([n], i) => (
              <span key={n} className="inline-flex items-center gap-[0.4em]"><i className="size-[0.7em] rounded-[0.2em]" style={{ background: colors[i] }} />{n}</span>
            ))}
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H + 24}`} className="w-full" aria-hidden>
          {[0, 1, 2, 3].map((g) => (
            <line key={g} x1="0" x2={W} y1={(H / 3) * g} y2={(H / 3) * g} stroke="#eef1f5" />
          ))}
          <polygon points={`0,${H} ${pts(series[0])} ${W},${H}`} fill={tint(product.accent, 0.1)} />
          {series.map((s, i) => (
            <polyline key={i} points={pts(s)} fill="none" stroke={colors[i]} strokeWidth={i === 0 ? 3 : 2} strokeLinejoin="round" />
          ))}
          {columns.map((c, i) => (
            <text key={c} x={(i / (columns.length - 1)) * W} y={H + 20} fontSize="13" fill="#94a3b8" textAnchor={i === 0 ? "start" : i === columns.length - 1 ? "end" : "middle"}>{c}</text>
          ))}
        </svg>
      </div>
      <div className="rounded-[0.9em] p-[1.8em] ring-1 ring-[#e3e8ef]">
        <div className="mb-[1.4em] text-[1.25em] font-semibold text-[#0a2540]">Breakdown</div>
        <div className="space-y-[1.5em]">
          {rows.map(([n, v], i) => (
            <div key={n}>
              <div className="mb-[0.5em] flex justify-between text-[1.2em]"><span className="text-[#334155]">{n}</span><span className="font-medium text-[#0a2540]">{v}%</span></div>
              <div className="h-[0.7em] overflow-hidden rounded-full bg-[#eef2f7]">
                <div className="h-full rounded-full" style={{ width: `${v}%`, background: colors[i] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowBody({ product }: { product: Product }) {
  const steps = product.preview.columns;
  return (
    <div className="rounded-[0.9em] bg-[#f8fafc] p-[2.4em] ring-1 ring-[#e3e8ef] bg-[radial-gradient(#dbe3ee_1px,transparent_1px)] [background-size:1.8em_1.8em]">
      <div className="mb-[2em] flex items-center justify-between text-[1.25em]">
        <span className="font-semibold text-[#0a2540]">Published version · v3</span>
        <StatusChip label="Active" />
      </div>
      <div className="flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex-1 rounded-[0.9em] bg-white p-[1.4em] ring-1 ring-[#e3e8ef] shadow-[0_0.4em_1.4em_-0.6em_rgba(10,37,64,0.2)]">
              <div className="mb-[0.6em] grid size-[2.8em] place-items-center rounded-[0.6em]" style={{ background: tint(product.accent, 0.1), color: product.accent }}>
                <span className="text-[1.2em] font-semibold">{i + 1}</span>
              </div>
              <div className="text-[1.2em] font-medium leading-snug text-[#0a2540]">{s}</div>
            </div>
            {i < steps.length - 1 && <div className="h-[0.2em] w-[2.4em] shrink-0" style={{ background: tint(product.accent, 0.5) }} />}
          </div>
        ))}
      </div>
      <div className="mt-[2em] grid grid-cols-3 gap-[1em] text-[1.15em]">
        {["Runs today", "Succeeded", "Retried"].map((k, i) => (
          <div key={k} className="rounded-[0.7em] bg-white px-[1.2em] py-[0.9em] ring-1 ring-[#e3e8ef]">
            <span className="text-[#64748b]">{k}</span> <span className="float-right font-semibold text-[#0a2540]">{[412, 409, 3][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PreviewBody({ product }: { product: Product }) {
  switch (product.preview.kind) {
    case "pipeline":
      return <PipelineBody product={product} />;
    case "board":
      return <PipelineBody product={product} board />;
    case "chart":
      return <ChartBody product={product} />;
    case "flow":
      return <FlowBody product={product} />;
    case "files":
      return <TableBody product={product} files />;
    default:
      return <TableBody product={product} />;
  }
}

/** Full app view: header, module sidebar, context bar, KPIs and the app's preview body. */
export function WorkspaceMock({
  product,
  className,
  chrome = true,
  compact = false,
  readable = true,
}: {
  product: Product;
  className?: string;
  chrome?: boolean;
  compact?: boolean;
  readable?: boolean;
}) {
  return (
    <MockFrame className={className} chrome={chrome} readable={readable} url={`app.melorite.com/${product.slug}`}>
      <GlobalHeader appName={product.shortName} />
      <div className="flex">
        {!compact && <Sidebar title={product.shortName} items={product.modules} accent={product.accent} />}
        <div className="min-w-0 flex-1 bg-white">
          <div className="flex items-end justify-between border-b border-[#e8edf3] px-[2.4em] pb-[1.2em] pt-[1.8em]">
            <div>
              <div className="font-mono text-[1em] uppercase tracking-[0.14em] text-[#64748b]">{product.name}</div>
              <div className="mt-[0.3em] flex items-center gap-[0.8em]">
                <span className="grid size-[3em] place-items-center rounded-[0.7em]" style={{ background: tint(product.accent, 0.1), color: product.accent }}>
                  <Icon name={product.icon} className="size-[1.6em]" />
                </span>
                <span className="text-[2.4em] font-semibold tracking-[-0.02em] text-[#0a2540]">Dashboard</span>
              </div>
            </div>
            <div className="flex gap-[0.8em]">
              <span className="rounded-[0.6em] px-[1.1em] py-[0.55em] text-[1.25em] text-[#475569] ring-1 ring-[#e3e8ef]">This month</span>
              <span className="rounded-[0.6em] px-[1.1em] py-[0.55em] text-[1.25em] font-medium text-white" style={{ background: "#2563eb" }}>New</span>
            </div>
          </div>
          <div className="space-y-[1.8em] p-[2.4em]">
            <KpiStrip kpis={product.preview.kpis} />
            <div data-area="work">
              <PreviewBody product={product} />
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/** Workspace Home / app launcher — the landing view for multi-app organizations. */
export function LauncherMock({
  apps,
  className,
  highlight,
  chrome = true,
  title = "Good morning, Priya",
  readable = false,
}: {
  apps: Product[];
  className?: string;
  highlight?: string[];
  chrome?: boolean;
  title?: string;
  readable?: boolean;
}) {
  return (
    <MockFrame className={className} chrome={chrome} readable={readable} url="app.melorite.com/home">
      <GlobalHeader appName="Workspace" />
      <div className="grid grid-cols-[1fr_30em] gap-[2em] bg-[#fbfcfe] p-[2.4em]">
        <div>
          <div className="font-mono text-[1em] uppercase tracking-[0.14em] text-[#64748b]">Workspace home</div>
          <div className="mt-[0.3em] text-[2.6em] font-semibold tracking-[-0.02em] text-[#0a2540]">{title}</div>
          <div className="mt-[2em] grid grid-cols-3 gap-[1.2em]">
            {apps.map((a) => {
              const on = !highlight || highlight.includes(a.id);
              return (
                <div
                  key={a.id}
                  className={cn("rounded-[1em] bg-white p-[1.6em] ring-1 ring-[#e3e8ef] transition-opacity", !on && "opacity-35")}
                >
                  <span className="grid size-[3.6em] place-items-center rounded-[0.8em]" style={{ background: tint(a.accent, 0.1), color: a.accent }}>
                    <Icon name={a.icon} className="size-[1.8em]" />
                  </span>
                  <div className="mt-[1.2em] text-[1.45em] font-semibold text-[#0a2540]">{a.shortName}</div>
                  <div className="mt-[0.3em] line-clamp-2 text-[1.15em] leading-snug text-[#64748b]">{a.tagline}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-[1.2em]">
          <div className="rounded-[1em] bg-white p-[1.6em] ring-1 ring-[#e3e8ef]">
            <div className="text-[1.3em] font-semibold text-[#0a2540]">My Work</div>
            <ul className="mt-[1em] space-y-[0.9em] text-[1.2em]">
              {[["Approve quotation QT-1041", "Sales"], ["Follow up: Atlas Group", "CRM"], ["Review payroll exceptions", "Payroll"], ["Leave request · M. Tanaka", "HR"]].map(([t, app]) => (
                <li key={t} className="flex items-center justify-between gap-[1em]">
                  <span className="flex items-center gap-[0.7em] text-[#334155]"><i className="size-[1em] rounded-[0.25em] ring-1 ring-[#cbd5e1]" />{t}</span>
                  <span className="text-[0.9em] text-[#94a3b8]">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1em] bg-white p-[1.6em] ring-1 ring-[#e3e8ef]">
            <div className="text-[1.3em] font-semibold text-[#0a2540]">Recent activity</div>
            <ul className="mt-[1em] space-y-[1em] text-[1.15em] text-[#475569]">
              {["Invoice INV-3108 marked paid", "Opportunity moved to Negotiation", "Goods received on PO-5521"].map((t) => (
                <li key={t} className="flex gap-[0.7em]"><i className="mt-[0.35em] size-[0.7em] shrink-0 rounded-full bg-[#2563eb]" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/** Small floating application card used in hero and diagram compositions. */
export function AppChip({ product, className, rows = 3 }: { product: Product; className?: string; rows?: number }) {
  return (
    <div className={cn("@container", className)}>
      <div className="rounded-[1.4em] bg-white p-[1.6em] ring-1 ring-[#0a2540]/10 shadow-float" style={{ fontSize: "calc(100cqw / 26)" }}>
        <div className="flex items-center gap-[0.9em]">
          <span className="grid size-[3.4em] place-items-center rounded-[0.8em]" style={{ background: tint(product.accent, 0.1), color: product.accent }}>
            <Icon name={product.icon} className="size-[1.7em]" />
          </span>
          <div className="min-w-0">
            <div className="text-[1.5em] font-semibold leading-tight text-[#0a2540]">{product.shortName}</div>
            <div className="truncate text-[1.1em] text-[#64748b]">{product.preview.kpis[0][0]}</div>
          </div>
        </div>
        <div className="mt-[1.2em] text-[2.2em] font-semibold tracking-[-0.02em] text-[#0a2540]">
          {product.preview.kpis[0][1]} <span className="text-[0.5em] font-medium text-[#059669]">{product.preview.kpis[0][2]}</span>
        </div>
        <div className="mt-[1em] space-y-[0.6em]">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex items-center gap-[0.7em]">
              <i className="h-[0.7em] rounded-full" style={{ width: `${70 - i * 18}%`, background: i === 0 ? tint(product.accent, 0.7) : "#e2e8f0" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
