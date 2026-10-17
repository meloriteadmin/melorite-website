"use client";

import { motion } from "motion/react";
import { BarChart3, Blocks, Check, GitBranch, LockKeyhole, Plug, UsersRound, type LucideIcon } from "lucide-react";
import { ScaleBox } from "@/components/product/Scenes";

type N = { id: string; x: number; y: number; icon: LucideIcon; title: string; sub: string };
const W = 170, H = 64;
const nodes: N[] = [
  { id: "req", x: 24, y: 168, icon: UsersRound, title: "Request received", sub: "From your customer" },
  { id: "mgr", x: 250, y: 64, icon: GitBranch, title: "Manager review", sub: "Rules & thresholds" },
  { id: "fin", x: 250, y: 272, icon: LockKeyhole, title: "Finance approval", sub: "Role based access" },
  { id: "cus", x: 476, y: 168, icon: Check, title: "Customer update", sub: "Sent automatically" },
  { id: "por", x: 706, y: 64, icon: Blocks, title: "Partner portal", sub: "Shared records" },
  { id: "rep", x: 706, y: 168, icon: BarChart3, title: "Live reporting", sub: "Per team & region" },
  { id: "crm", x: 706, y: 272, icon: Plug, title: "Tool integration", sub: "Where supported" },
];
const edges: [string, string][] = [["req", "mgr"], ["req", "fin"], ["mgr", "cus"], ["fin", "cus"], ["cus", "por"], ["cus", "rep"], ["cus", "crm"]];
const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
const path = (a: N, b: N) => {
  const x1 = a.x + W, y1 = a.y + H / 2, x2 = b.x, y2 = b.y + H / 2, mx = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
};

/** A node-and-wire workflow canvas: unlike the product dashboards, this shows how custom work is *routed*. */
export function WorkflowGraph() {
  return (
    <div aria-label="Sample custom workflow: a request is reviewed, approved, sent to the customer and fed into portals, reports and integrations" className="glass glass-sheen rounded-[16px] p-2.5">
      <div className="relative overflow-hidden rounded-[16px] border border-white/70 bg-white/35">
        <ScaleBox w={900} h={400}>
          <svg viewBox="0 0 900 400" className="absolute inset-0 size-full">
            {edges.map(([a, b], i) => {
              const d = path(by[a], by[b]);
              return (
                <g key={a + b}>
                  <path d={d} fill="none" stroke="#5f63f2" strokeOpacity=".22" strokeWidth="2" />
                  <path d={d} fill="none" stroke="#5f63f2" strokeOpacity=".7" strokeWidth="2" strokeDasharray="5 9" className="animate-dash" />
                  <circle r="4.5" fill="#4b4fe0"><animateMotion dur={`${3 + (i % 3) * .5}s`} begin={`${i * .4}s`} repeatCount="indefinite" path={d} /></circle>
                </g>
              );
            })}
          </svg>
          {nodes.map((n, i) => (
            <motion.div key={n.id} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .08, duration: .5 }}
              className="pane absolute flex items-center gap-3 px-3.5" style={{ left: n.x, top: n.y, width: W, height: H }}>
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-white to-[#dfe0ff] text-[#4b4fe0] shadow-[inset_0_1px_0_#fff,0_6px_14px_-8px_rgba(95,99,242,.7)]"><n.icon className="size-4" strokeWidth={1.9} /></span>
              <div className="min-w-0"><p className="truncate text-[11.5px] font-semibold text-[#111735]">{n.title}</p><p className="truncate text-[9.5px] text-[#111735]/50">{n.sub}</p></div>
            </motion.div>
          ))}
        </ScaleBox>
      </div>
    </div>
  );
}
