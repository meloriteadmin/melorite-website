"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check, Search, Sparkles } from "lucide-react";
import { EASE } from "@/lib/utils";

const steps = ["Searching CRM", "Reviewing 48 opportunities", "Comparing recent activity", "3 deals need attention"];

/** A quiet, product-led AI example. It explains Melorite AI through real workspace behaviour, not decoration. */
export function AIDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-ui">
      <div className="flex items-center justify-between border-b border-line bg-surface-warm px-5 py-3.5 text-[13px] text-muted">
        <span className="font-medium text-navy">Melorite AI</span>
        <span>Workspace assistant</span>
      </div>
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-line p-6 lg:border-b-0 lg:border-r lg:p-8">
          <p className="text-[13px] font-medium text-muted">Ask a question</p>
          <p className="mt-3 text-[20px] leading-snug tracking-[-0.02em] text-navy">
            Show me which deals are likely to miss their expected close date.
          </p>
          <div className="mt-8 space-y-3 border-t border-line pt-6">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: EASE, delay: index * 0.12 }}
                className="flex items-center gap-3 text-[14px] text-muted"
              >
                <span className="grid size-6 place-items-center rounded-md bg-pastel-lavender text-[#a0278c]">
                  {index < 3 ? <Search className="size-3.5" /> : <Check className="size-3.5" />}
                </span>
                {step}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, ease: EASE, delay: 0.2 }} className="p-6 lg:p-8">
          <div className="flex items-start gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-pastel-lavender text-[#a0278c]"><Sparkles className="size-4" /></span>
            <div>
              <p className="text-[15px] font-medium text-navy">Three opportunities need attention</p>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">Each has a close date within 14 days and no customer activity in the last week.</p>
            </div>
          </div>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {[
              ["Atlas Group rollout", "₹12.6L", "No activity for 9 days"],
              ["Lumen Health renewal", "₹9.2L", "Next step overdue"],
              ["Harbor & Co. pilot", "₹1.8L", "Decision-maker not engaged"],
            ].map(([deal, value, risk], index) => (
              <div key={deal} className="flex items-center justify-between gap-4 py-3.5">
                <div>
                  <p className="text-[14px] font-medium text-navy">{deal}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted">{risk}</p>
                </div>
                <span className={index === 0 ? "text-[13px] font-medium text-[#a0278c]" : "text-[13px] font-medium text-muted"}>{value}</span>
              </div>
            ))}
          </div>
          <button type="button" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand transition-colors hover:text-brand-700">
            Review opportunities <ArrowUpRight className="size-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
