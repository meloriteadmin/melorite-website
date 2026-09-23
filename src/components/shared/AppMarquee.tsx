import { products } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";

/** Continuous strip of the real application catalogue. Pauses on hover; static under reduced motion. */
export function AppMarquee({ className }: { className?: string }) {
  const items = [...products, ...products];
  return (
    <div className={cn("group relative overflow-hidden mask-fade-x", className)} aria-label="Melorite applications">
      <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none" style={{ ["--marquee-duration" as string]: "60s" }}>
        {items.map((p, i) => (
          <li
            key={`${p.id}-${i}`}
            aria-hidden={i >= products.length}
            className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 text-[14px] font-medium text-navy ring-1 ring-line"
          >
            <span className="grid size-7 place-items-center rounded-full" style={{ background: `${p.accent}14`, color: p.accent }}>
              <Icon name={p.icon} className="size-3.5" />
            </span>
            {p.shortName === "CRM" || p.shortName === "HR" ? p.name : p.shortName}
          </li>
        ))}
      </ul>
    </div>
  );
}
