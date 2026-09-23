import { cn } from "@/lib/utils";
import type { Availability } from "@/data/products";
import type { LinkStatus } from "@/data/workflows";

const MAP: Record<Availability | LinkStatus, { label: string; cls: string; dot: string }> = {
  available: { label: "Available", cls: "bg-emerald-50 text-emerald-700 ring-emerald-600/15", dot: "bg-emerald-500" },
  "early-access": { label: "Early access", cls: "bg-brand-50 text-brand-700 ring-brand/15", dot: "bg-brand" },
  "rolling-out": { label: "Rolling out", cls: "bg-amber-50 text-amber-700 ring-amber-600/20", dot: "bg-amber-500" },
  planned: { label: "Planned", cls: "bg-slate-100 text-slate-600 ring-slate-400/20", dot: "bg-slate-400" },
};

export function StatusBadge({ status, className, label }: { status: Availability | LinkStatus; className?: string; label?: string }) {
  const s = MAP[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11.5px] font-medium ring-1 ring-inset", s.cls, className)}>
      <span className={cn("size-1.5 rounded-full", s.dot)} aria-hidden />
      {label ?? s.label}
    </span>
  );
}
