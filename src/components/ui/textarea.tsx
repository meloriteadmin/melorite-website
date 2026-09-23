import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-28 w-full rounded-[10px] border border-input bg-white px-3.5 py-3 text-[15px] leading-relaxed text-navy shadow-[0_1px_2px_rgb(10_37_64/0.04)] hover:border-line-strong transition-[color,box-shadow] outline-none placeholder:text-slate-400 focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/15 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
