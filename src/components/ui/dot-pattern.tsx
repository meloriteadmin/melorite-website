"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 *  DotPattern Component Props
 *
 * @param {number} [width=16] - The horizontal spacing between dots
 * @param {number} [height=16] - The vertical spacing between dots
 * @param {number} [x=0] - The x-offset of the entire pattern
 * @param {number} [y=0] - The y-offset of the entire pattern
 * @param {number} [cx=1] - The x-offset of individual dots
 * @param {number} [cy=1] - The y-offset of individual dots
 * @param {number} [cr=1] - The radius of each dot
 * @param {string} [className] - Additional CSS classes to apply to the SVG container
 * @param {boolean} [glow=false] - Whether dots should have a glowing animation effect
 */
interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}

/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container and can optionally display glowing dots.
 *
 * @component
 *
 * @see DotPatternProps for the props interface.
 *
 * @example
 * // Basic usage
 * <DotPattern />
 *
 * // With glowing effect and custom spacing
 * <DotPattern
 *   width={20}
 *   height={20}
 *   glow={true}
 *   className="opacity-50"
 * />
 *
 * @notes
 * - The component is client-side only ("use client")
 * - Automatically responds to container size changes
 * - When glow is enabled, dots will animate with random delays and durations
 * - Uses Motion for animations
 * - Dots color can be controlled via the text color utility classes
 */

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  // Melorite customisation: static dots render as a single SVG <pattern> (one
  // node instead of thousands). The animated `glow` mode is kept for small areas.
  if (!glow) {
    return (
      <svg aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80", className)} {...props}>
        <defs>
          <pattern id={`${id}-dots`} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
            <circle cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id}-dots)`} />
      </svg>
    )
  }
  return <GlowDots {...{ width, height, x, y, cx, cy, cr, className, id }} {...props} />
}

function GlowDots({
  width, height, x, y, cx, cy, cr, className, id, ...props
}: Required<Pick<DotPatternProps, "width" | "height" | "x" | "y" | "cx" | "cy" | "cr">> & { className?: string; id: string } & React.SVGProps<SVGSVGElement>) {
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect()
        setDimensions({ width: r.width, height: r.height })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const w = Number(width), h = Number(height)
  const cols = Math.ceil(dimensions.width / w)
  const dots = Array.from({ length: cols * Math.ceil(dimensions.height / h) }, (_, i) => ({
    x: (i % cols) * w + Number(cx) + Number(x),
    y: Math.floor(i / cols) * h + Number(cy) + Number(y),
    delay: (i % 7) * 0.7,
    duration: 2 + (i % 5) * 0.6,
  }))

  return (
    <svg ref={containerRef} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80", className)} {...props}>
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={`url(#${id}-gradient)`}
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: dot.duration, repeat: Infinity, repeatType: "reverse", delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}
