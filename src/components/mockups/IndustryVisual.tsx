/**
 * Industry imagery: an editorial photograph (credited) with an optional product
 * overlay showing the solution's real first workflow. Falls back to a quiet
 * branded surface when no photograph is configured.
 */
import Image from "next/image";
import type { Industry } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";

export function industryImageSrc(src: string, w = 1400) {
  return src.startsWith("https://images.unsplash.com") ? `${src}?auto=format&fit=crop&w=${w}&q=80` : src;
}

export function IndustryVisual({
  industry,
  className,
  overlay = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  priority,
  credit = false,
}: {
  industry: Industry;
  className?: string;
  /** Show the workflow product chip over the photo. */
  overlay?: boolean;
  sizes?: string;
  priority?: boolean;
  /** Show the photographer credit in the corner. */
  credit?: boolean;
}) {
  const a = industry.accent;
  const flow = industry.workflows[0].steps.slice(0, 4);
  return (
    <div className={cn("@container relative isolate overflow-hidden bg-paper", className)}>
      {industry.image ? (
        <Image
          src={industryImageSrc(industry.image.src)}
          alt={industry.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="-z-10 object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 -z-10 bg-grid" style={{ background: tint(a, 0.08) }} aria-hidden />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" aria-hidden />

      {overlay && (
        <div className="absolute inset-x-[5cqw] bottom-[5cqw] rounded-[12px] bg-white/95 p-3 shadow-[0_18px_40px_-18px_rgba(10,37,64,0.55)] backdrop-blur" style={{ fontSize: "max(11px, 2.4cqw)" }}>
          <div className="mb-2 flex items-center gap-2 font-semibold text-navy">
            <span className="grid size-[1.9em] place-items-center rounded-[6px]" style={{ background: tint(a, 0.12), color: a }}>
              <Icon name={industry.icon} className="size-[1.1em]" />
            </span>
            {industry.workflows[0].name}
          </div>
          <div className="flex items-center">
            {flow.map((s, i) => (
              <div key={s} className="flex min-w-0 flex-1 items-center">
                <div className="flex min-w-0 flex-col items-center gap-1">
                  <span className="size-[0.7em] shrink-0 rounded-full" style={{ background: i <= 1 ? a : "#cbd5e1" }} />
                  <span className="w-full truncate text-center text-[0.8em] text-slate-600">{s}</span>
                </div>
                {i < flow.length - 1 && <span className="mb-[1.3em] h-px flex-1" style={{ background: i < 1 ? a : "#e2e8f0" }} />}
              </div>
            ))}
          </div>
        </div>
      )}

      {credit && industry.image && (
        <span className="absolute right-2 top-2 rounded-full bg-black/35 px-2 py-0.5 text-[10px] text-white/85 backdrop-blur">Photo: {industry.image.credit} / Unsplash</span>
      )}
    </div>
  );
}
