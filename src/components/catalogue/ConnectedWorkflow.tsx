"use client";

import { useState } from "react";
import Link from "next/link";
import { businessApplications } from "@/data/catalog";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";

const stages = [
  { name: "Campaign", product: "crm-growth", detail: "Create demand and retain source context." },
  { name: "Lead", product: "crm-growth", detail: "Qualify the relationship and assign ownership." },
  { name: "Opportunity", product: "crm-growth", detail: "Move value through a visible sales process." },
  { name: "Order", product: "commerce", detail: "Create the commercial transaction." },
  { name: "Invoice", product: "finance", detail: "Issue billing and follow payment." },
  { name: "Delivery", product: "projects", detail: "Plan and complete the agreed work." },
  { name: "Support", product: "service", detail: "Keep the customer history through resolution." },
];

export function ConnectedWorkflow() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const product = businessApplications.find((item) => item.slug === stage.product)!;

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-ui">
      <div className="no-scrollbar flex overflow-x-auto border-b border-line p-2" role="tablist" aria-label="Connected customer workflow">
        {stages.map((item, index) => (
          <button key={item.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className="relative min-w-[112px] flex-1 rounded-lg px-3 py-3 text-left transition-colors" style={active === index ? { background: tint(product.accent, .08) } : undefined}>
            <span className="block text-[10px] font-medium text-muted">0{index + 1}</span>
            <span className="mt-1 block text-[12px] font-semibold" style={{ color: active === index ? product.accent : "#475569" }}>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.3fr] md:p-8">
        <div>
          <span className="grid size-10 place-items-center rounded-xl" style={{ background: tint(product.accent, .1), color: product.accent }}><Icon name={product.icon} className="size-5" /></span>
          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[.1em]" style={{ color: product.accent }}>{product.name}</p>
          <h3 className="mt-2 text-h3 text-navy">{stage.name}</h3>
          <p className="mt-3 max-w-[38ch] text-[14px] leading-relaxed text-muted">{stage.detail}</p>
          <Link href={`/products/${product.slug}`} className="mt-6 inline-flex text-[13px] font-semibold text-brand">Explore {product.name} →</Link>
        </div>
        <div className="rounded-xl border border-line bg-paper p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">Shared customer journey</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {stages.slice(Math.max(0, active - 1), Math.min(stages.length, active + 3)).map((item) => (
              <div key={item.name} className="rounded-lg border bg-white p-3" style={item.name === stage.name ? { borderColor: product.accent } : undefined}>
                <p className="text-[10px] font-semibold text-navy">{item.name}</p>
                <p className="mt-1 text-[9px] text-muted">{item.name === stage.name ? "Active stage" : "Context retained"}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-[#e8e3ff] p-3 text-[#43386f]">
            <p className="text-[10px] font-semibold">Melorite connection layer</p>
            <p className="mt-1 text-[9px] leading-relaxed text-[#6f6395]">Customer, ownership and activity context remains available as work moves between applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
