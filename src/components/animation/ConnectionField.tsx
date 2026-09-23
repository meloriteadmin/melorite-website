import { cn } from "@/lib/utils";

/**
 * Lightweight animated background of connected nodes (pure SVG + CSS). Used in a
 * limited number of dark sections. Pulses are CSS animations, so they stop
 * automatically under prefers-reduced-motion.
 */
const NODES: [number, number][] = [
  [80, 90], [260, 40], [420, 150], [610, 70], [790, 180], [980, 60], [1150, 150],
  [150, 300], [360, 330], [560, 270], [740, 360], [930, 290], [1100, 360],
  [60, 470], [280, 520], [480, 450], [690, 540], [880, 470], [1080, 540], [1190, 440],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7], [7, 8], [8, 2], [8, 9], [9, 3], [9, 10], [10, 4],
  [10, 11], [11, 5], [11, 12], [12, 6], [7, 13], [13, 14], [14, 8], [14, 15], [15, 9], [15, 16], [16, 10],
  [16, 17], [17, 11], [17, 18], [18, 12], [18, 19], [19, 12],
];

export function ConnectionField({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "rgba(255,255,255,0.09)" : "rgba(10,37,64,0.08)";
  const node = tone === "dark" ? "rgba(255,255,255,0.35)" : "rgba(37,99,235,0.35)";
  return (
    <svg viewBox="0 0 1240 600" preserveAspectRatio="xMidYMid slice" className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <linearGradient id="cf-pulse" x1="0" x2="1">
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
          <stop offset="0.5" stopColor="#93c5fd" stopOpacity="0.9" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {EDGES.map(([a, b], i) => (
        <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke={line} strokeWidth="1" />
      ))}
      {EDGES.filter((_, i) => i % 4 === 0).map(([a, b], i) => (
        <line
          key={`p${i}`}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          stroke="url(#cf-pulse)"
          strokeWidth="1.5"
          strokeDasharray="40 400"
          style={{ animation: `cf-travel ${5 + (i % 3)}s linear ${i * 0.7}s infinite` }}
        />
      ))}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 3 : 2} fill={node} />
      ))}
      <style>{`@keyframes cf-travel{from{stroke-dashoffset:440}to{stroke-dashoffset:0}}`}</style>
    </svg>
  );
}
