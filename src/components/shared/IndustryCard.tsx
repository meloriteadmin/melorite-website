import Link from "next/link";
import type { Industry } from "@/data/industries";
import { solutionHref } from "@/data/navigation";
import { productById } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";
import { Arrow } from "./Button";
import { StatusBadge } from "./StatusBadge";

/**
 * Industry card: the visual scales subtly and content lifts on hover/focus,
 * revealing a capability summary. The summary is always visible on touch
 * screens so information is never hover-only.
 */
export function IndustryCard({
  industry,
  className,
  showAreas = false,
  href,
  onSelect,
}: {
  industry: Industry;
  className?: string;
  showAreas?: boolean;
  href?: string;
  onSelect?: () => void;
}) {
  return (
    <Link
      href={href ?? solutionHref(industry.id)}
      onClick={
        onSelect
          ? (e) => {
              e.preventDefault();
              onSelect();
            }
          : undefined
      }
      className={cn(
        "group/btn group relative flex flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(10,37,64,0.35)] focus-visible:shadow-[0_30px_60px_-30px_rgba(10,37,64,0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <IndustryVisual industry={industry} className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04]" />
      </div>
      <div className="relative flex flex-1 flex-col bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [@media(hover:hover)]:group-hover:-translate-y-2">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-[8px]" style={{ background: tint(industry.accent, 0.1), color: industry.accent }}>
            <Icon name={industry.icon} className="size-4" />
          </span>
          <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-navy">{industry.name}</h3>
          <StatusBadge status={industry.status} className="ml-auto shrink-0" />
        </div>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{industry.description}</p>
        {showAreas && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Operational areas">
            {industry.modules.slice(0, 4).map((m) => (
              <li key={m} className="rounded-full bg-paper px-2.5 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-line">
                {m}
              </li>
            ))}
          </ul>
        )}
        <div className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
          <p className="overflow-hidden text-[13.5px] leading-relaxed text-slate-600">
            <span className="block pt-3">
              Built on {industry.apps.length} Business Apps including {industry.apps.slice(0, 3).map((a) => productById(a)?.shortName).join(", ")}.
            </span>
          </p>
        </div>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14.5px] font-medium text-brand">
          Explore Solution <Arrow />
        </span>
      </div>
    </Link>
  );
}
