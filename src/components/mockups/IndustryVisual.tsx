/**
 * Art-directed industry visual. Uses the solution's accent colour, icon and its
 * real module list — no generic stock imagery. If an approved photograph is set
 * on the industry (`image`), it is layered underneath.
 */
import Image from "next/image";
import type { Industry } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";

export function IndustryVisual({
  industry,
  className,
  variant = "card",
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  industry: Industry;
  className?: string;
  variant?: "card" | "wide";
  sizes?: string;
}) {
  const a = industry.accent;
  const mods = industry.modules.slice(0, variant === "wide" ? 6 : 4);
  const flow = industry.workflows[0].steps.slice(0, variant === "wide" ? 5 : 4);
  return (
    <div className={cn("@container relative isolate overflow-hidden", className)} style={{ background: `linear-gradient(145deg, ${tint(a, 0.95)}, ${tint(a, 0.72)} 55%, #0a2540)` }}>
      {industry.image && (
        <Image src={industry.image} alt="" fill sizes={sizes} className="-z-10 object-cover opacity-40 mix-blend-luminosity" />
      )}
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_75%)]" aria-hidden />
      <Icon
        name={industry.icon}
        className="absolute -right-[6%] -top-[8%] -z-10 size-[58%] text-white/[0.09]"
        strokeWidth={1}
      />
      <div className="flex h-full flex-col justify-between p-[5.5cqw]" style={{ fontSize: "max(10px, 2.6cqw)" }}>
        <div className="flex flex-wrap gap-[0.6em]">
          {mods.map((m) => (
            <span key={m} className="rounded-full bg-white/12 px-[0.9em] py-[0.35em] text-[0.95em] font-medium text-white ring-1 ring-white/20 backdrop-blur-sm">
              {m}
            </span>
          ))}
        </div>
        <div className="rounded-[1em] bg-white/95 p-[1.1em] shadow-[0_1.2em_2.4em_-1em_rgba(0,0,0,0.45)]">
          <div className="mb-[0.8em] flex items-center justify-between">
            <span className="flex items-center gap-[0.6em] text-[1.05em] font-semibold text-navy">
              <span className="grid size-[1.9em] place-items-center rounded-[0.5em]" style={{ background: tint(a, 0.12), color: a }}>
                <Icon name={industry.icon} className="size-[1.1em]" />
              </span>
              {industry.workflows[0].name}
            </span>
            <span className="text-[0.85em] text-muted">Workflow</span>
          </div>
          <div className="flex items-center">
            {flow.map((s, i) => (
              <div key={s} className="flex min-w-0 flex-1 items-center">
                <div className="flex min-w-0 flex-col items-center gap-[0.35em]">
                  <span className="size-[0.8em] shrink-0 rounded-full ring-[0.2em]" style={{ background: i <= 1 ? a : "#fff", boxShadow: `0 0 0 0.18em ${tint(a, i <= 1 ? 0.25 : 0.35)}` }} />
                  <span className="w-full truncate text-center text-[0.8em] text-slate-600">{s}</span>
                </div>
                {i < flow.length - 1 && <span className="mb-[1.3em] h-px flex-1" style={{ background: tint(a, i < 1 ? 0.8 : 0.25) }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
