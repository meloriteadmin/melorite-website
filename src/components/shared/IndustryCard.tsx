import Link from "next/link";
import type { Industry } from "@/data/industries";
import { solutionHref } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { cardVariants } from "@/components/ui/card";
import { IndustryVisual } from "@/components/mockups/IndustryVisual";
import { Arrow } from "./Button";
import { StatusBadge } from "./StatusBadge";

/** Image-led industry card (consistent 16:10 photo, title, summary, explicit CTA). */
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
      className={cn(cardVariants({ variant: "interactive", padding: "none" }), "group group/btn gap-0 overflow-hidden outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35", className)}
    >
      <IndustryVisual industry={industry} className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-navy">{industry.name}</h3>
          <StatusBadge status={industry.status} className="shrink-0" />
        </div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{industry.description}</p>
        {showAreas && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Operational areas">
            {industry.modules.slice(0, 4).map((m) => (
              <li key={m} className="rounded-md bg-paper px-2 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-line">
                {m}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-medium text-brand">
          Explore solution <Arrow />
        </span>
      </div>
    </Link>
  );
}
