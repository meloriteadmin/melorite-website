import { products } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

/** Strip of the real application catalogue (Magic UI Marquee). Pauses on hover; static under reduced motion. */
export function AppMarquee({ className }: { className?: string }) {
  return (
    <div className={cn("relative mask-fade-x", className)} aria-label="Melorite applications">
      <Marquee pauseOnHover repeat={2} className="[--duration:70s] [--gap:0.625rem] motion-reduce:[&>div]:animate-none">
        {products.map((p) => (
          <span key={p.id} className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-navy ring-1 ring-line">
            <span className="grid size-7 place-items-center rounded-full" style={{ background: tint(p.accent, 0.09), color: p.accent }}>
              <Icon name={p.icon} className="size-3.5" />
            </span>
            {p.shortName}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
