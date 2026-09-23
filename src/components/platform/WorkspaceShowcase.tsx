"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { productById } from "@/data/products";
import { EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StickyStory } from "@/components/shared/StickyStory";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";

/** Areas that exist in the real Client Workspace shell. */
const AREAS = [
  { area: "org", title: "Organization workspace", body: "Every client works inside its own organization. The organization context is always visible, and all data is scoped to it." },
  { area: "switcher", title: "Application switcher", body: "Move between the applications your organization has enabled. A single-app organization lands directly in its app; more apps appear here as they are added." },
  { area: "search", title: "Global search", body: "Search across every enabled application from one place. Results only include what your organization has access to." },
  { area: "actions", title: "Quick create & notifications", body: "Create records from anywhere and keep up with approvals, tasks and system notifications in one notification centre." },
  { area: "nav", title: "Application navigation", body: "Each application has consistent module navigation — Dashboard, records, reports and settings — generated from the application's own modules." },
  { area: "overview", title: "Workspace overview", body: "Dashboards open with a metric strip and work queues, followed by lists, boards and record pages that follow one shared design." },
];

type Box = { x: number; y: number; w: number; h: number };

function Annotated({ active }: { active: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Record<string, Box>>({});

  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      const next: Record<string, Box> = {};
      AREAS.forEach(({ area }) => {
        const t = el.querySelector<HTMLElement>(`[data-area="${area}"]`);
        if (!t) return;
        const b = t.getBoundingClientRect();
        next[area] = { x: b.left - r.left, y: b.top - r.top, w: b.width, h: b.height };
      });
      setBoxes(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const current = boxes[AREAS[active].area];
  const pad = 6;

  return (
    <div ref={wrap} className="relative overflow-hidden rounded-[16px] shadow-ui">
      <WorkspaceMock product={productById("crm")!} />
      {current && (
        <motion.div
          className="pointer-events-none absolute rounded-[10px] ring-2 ring-brand"
          initial={false}
          animate={{ left: current.x - pad, top: current.y - pad, width: current.w + pad * 2, height: current.h + pad * 2 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ boxShadow: "0 0 0 9999px rgba(10,37,64,0.28)" }}
        />
      )}
      {AREAS.map(({ area }, i) => {
        const b = boxes[area];
        if (!b) return null;
        const on = i === active;
        return (
          <motion.span
            key={area}
            className="absolute grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-mono text-[11px] font-semibold shadow-float"
            style={{ left: b.x + Math.min(b.w, 40), top: b.y }}
            animate={{ scale: on ? 1.15 : 1, backgroundColor: on ? "#2563eb" : "#ffffff", color: on ? "#ffffff" : "#0a2540" }}
            transition={{ duration: 0.3 }}
            aria-hidden
          >
            {i + 1}
          </motion.span>
        );
      })}
    </div>
  );
}

export function WorkspaceShowcase() {
  return (
    <section id="workspace" className="section-y scroll-mt-20 bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="One connected workspace"
          title={["One workspace.", "A clearer way to work."]}
          description="The Client Workspace is the same for every organization and every application. Scroll to explore its main areas."
        />
        <StickyStory
          className="mt-6"
          visualSide="right"
          steps={AREAS.map((a) => ({ id: a.area, title: a.title, body: a.body }))}
          renderVisual={(i) => <Annotated active={i} />}
        />
      </div>
    </section>
  );
}
