import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Availability } from "@/data/products";
import type { LinkStatus } from "@/data/workflows";

const MAP: Record<Availability | LinkStatus, { label: string; variant: "success" | "info" | "warning" | "neutral"; dot: string }> = {
  available: { label: "Available", variant: "success", dot: "bg-emerald-500" },
  "early-access": { label: "Early access", variant: "info", dot: "bg-brand" },
  "rolling-out": { label: "Rolling out", variant: "warning", dot: "bg-amber-500" },
  planned: { label: "Planned", variant: "neutral", dot: "bg-slate-400" },
};

export function StatusBadge({ status, className, label }: { status: Availability | LinkStatus; className?: string; label?: string }) {
  const s = MAP[status];
  return (
    <Badge variant={s.variant} className={className}>
      <span className={cn("size-1.5 rounded-full", s.dot)} aria-hidden />
      {label ?? s.label}
    </Badge>
  );
}
