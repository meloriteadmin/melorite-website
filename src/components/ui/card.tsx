import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Melorite card surfaces. `default` for static content, `interactive` for
 * clickable cards (lift + stronger border on hover/focus), `muted` for inset
 * panels, `dark` for navy sections.
 */
const cardVariants = cva("flex flex-col gap-6 rounded-[14px] text-card-foreground", {
  variants: {
    variant: {
      default: "border border-border bg-card shadow-[0_1px_2px_rgb(10_37_64/0.03)]",
      interactive:
        "border border-border bg-card shadow-[0_1px_2px_rgb(10_37_64/0.03)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-line-strong hover:shadow-[0_12px_28px_-18px_rgb(10_37_64/0.28)] focus-within:border-line-strong",
      muted: "border border-border bg-paper",
      dark: "border border-white/10 bg-white/[0.04] text-white",
    },
    padding: { none: "", default: "py-6", lg: "py-8" },
  },
  defaultVariants: { variant: "default", padding: "default" },
})

function Card({ className, variant, padding, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return <div data-slot="card" className={cn(cardVariants({ variant, padding }), className)} {...props} />
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export { cardVariants,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
