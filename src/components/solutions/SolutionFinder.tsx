"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { industries } from "@/data/industries";
import { productCategories, products } from "@/data/products";
import { Icon } from "@/lib/icons";
import { cn, EASE } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buttonClasses, Arrow } from "@/components/shared/Button";

const CHALLENGES = ["Too many disconnected tools", "Manual re-entry between teams", "Limited visibility across operations", "Industry processes not supported", "Planning for growth"];

export function SolutionFinder() {
  const router = useRouter();
  const [industry, setIndustry] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);
  const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const ind = industries.find((i) => i.id === industry);
  const apps = products.filter((p) => cats.includes(p.category)).map((p) => p.id);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ enquiry: industry ? "industry" : "product" });
    if (industry) params.set("industry", industry);
    if (apps.length) params.set("apps", apps.join(","));
    if (challenges.length) params.set("challenges", challenges.join("|"));
    router.push(`/company?${params.toString()}#contact`);
  };

  return (
    <section id="finder" className="section-y relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_30%,black,transparent)]" aria-hidden />
      <div className="container-x relative grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading dark eyebrow="Find the right solution" title={["Tell us how", "your business works."]} description="Answer three quick questions. We'll carry your answers into the enquiry form so our team can prepare." />
          <AnimatePresence>
            {(ind || cats.length > 0) && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="mt-10 rounded-[20px] bg-white/[0.06] p-6 ring-1 ring-white/12">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">A possible starting point</div>
                {ind && (
                  <p className="mt-3 flex items-center gap-2 text-[15px] font-medium">
                    <Icon name={ind.icon} className="size-4 text-brand-200" /> {ind.fullName}
                  </p>
                )}
                {apps.length > 0 && <p className="mt-2 text-[14px] text-white/70">With {apps.length} related Business Apps from your selected areas.</p>}
                <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">This is a suggestion to guide the conversation, not a confirmed recommendation or offer.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <form onSubmit={submit} className="space-y-8 rounded-[20px] bg-white p-6 text-navy md:p-9 lg:col-span-7">
          <div>
            <label htmlFor="finder-industry" className="text-[15px] font-semibold">
              1. Your industry
            </label>
            <select
              id="finder-industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-3 h-12 w-full rounded-[12px] bg-paper px-4 text-[15px] ring-1 ring-line-strong focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">Select your industry (optional)</option>
              {industries.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.fullName}
                </option>
              ))}
              <option value="other">Other / not listed</option>
            </select>
          </div>

          <fieldset>
            <legend className="text-[15px] font-semibold">2. Business functions you need</legend>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {productCategories.map((c) => {
                const on = cats.includes(c.id);
                return (
                  <label key={c.id} className={cn("flex cursor-pointer items-center gap-3 rounded-[12px] px-3.5 py-3 ring-1 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand", on ? "bg-brand-50 ring-brand/40" : "ring-line hover:ring-line-strong")}>
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(cats, setCats, c.id)} />
                    <span className={cn("grid size-5 shrink-0 place-items-center rounded-[6px] ring-1 transition-colors", on ? "bg-brand text-white ring-brand" : "ring-line-strong")}>{on && <Check className="size-3.5" aria-hidden />}</span>
                    <Icon name={c.icon} className="size-4 text-muted" />
                    <span className="text-[14.5px] font-medium">{c.name}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[15px] font-semibold">3. Current business challenges</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {CHALLENGES.map((c) => {
                const on = challenges.includes(c);
                return (
                  <label key={c} className={cn("cursor-pointer rounded-full px-3.5 py-2 text-[14px] font-medium ring-1 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand", on ? "bg-navy text-white ring-navy" : "text-slate-600 ring-line-strong hover:text-navy")}>
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(challenges, setChallenges, c)} />
                    {c}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button type="submit" className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
            Find Your Solution <Arrow />
          </button>
        </form>
      </div>
    </section>
  );
}
