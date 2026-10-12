"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";

const reveal = (delay: number) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } });

type Variant = "split" | "centered" | "grid" | "glow" | "editorial" | "photo" | "news" | "fan";

/** Faint blueprint grid that fades out toward the edges. */
export function GridBg({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_75%_at_50%_35%,black,transparent_88%)] ${className}`} />;
}

/** "Less paperwork. More time." -> first sentence dark, the rest dimmed. */
function twoTone(title: React.ReactNode) {
  if (typeof title !== "string") return title;
  const i = title.search(/[.?!]\s/);
  if (i < 0) return title;
  return <>{title.slice(0, i + 1)}<br /><span className="text-black/35">{title.slice(i + 2)}</span></>;
}

/**
 * Light, minimal inner-page banner with four layouts so pages don't all look alike:
 * split (text + tinted visual), centered (serif statement), grid (blueprint lines + floating chips), glow (compact).
 */
export function PageHero({ label, title, lead, body, visual, tint = "#dcddfd", variant = "glow", cta = true, extra }: { label: string; title: React.ReactNode; lead?: string; body?: string; visual?: React.ReactNode; tint?: string; variant?: Variant; cta?: boolean; extra?: React.ReactNode }) {
  const centered = variant === "centered";

  if (variant === "photo") {
    return (
      <section data-nav="light" className="rails rails-light relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[520px] rounded-full opacity-80 blur-[90px]" style={{ background: tint }} />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-40 size-[420px] rounded-full bg-[#e6e8ff] opacity-80 blur-[100px]" />
        <div className="rail-inner relative">
          <div className="grid items-center gap-10 py-[clamp(56px,8vw,112px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <motion.p {...reveal(0.05)} className="mono-label flex items-center gap-3 text-black/45"><span className="size-2 rounded-full bg-[#5f63f2]" />{label}</motion.p>
              <motion.h1 {...reveal(0.15)} className="h-hero mt-6 max-w-[14ch] !text-[clamp(2.6rem,1.6rem+3.8vw,4.6rem)]">{twoTone(title)}</motion.h1>
            </div>
            <div>
              {lead && <motion.p {...reveal(0.26)} className="max-w-[40ch] text-[clamp(1.1rem,1rem+.4vw,1.3rem)] leading-snug">{lead}</motion.p>}
              {body && <motion.p {...reveal(0.32)} className="mt-3 max-w-[44ch] text-[16px] leading-snug text-black/55">{body}</motion.p>}
              {cta && (
                <motion.div {...reveal(0.4)} className="mt-7 flex flex-wrap gap-3">
                  <Link href={site.demoHref} className="pill pill-dark h-12 px-6">Book a demo</Link>
                  <Link href={site.salesHref} className="pill h-12 border border-black/15 px-6 hover:bg-black/[.04]">Contact sales</Link>
                </motion.div>
              )}
            </div>
          </div>
          {visual && (
            <motion.div {...reveal(0.45)} className="relative mb-[clamp(40px,6vw,88px)] flex min-h-[clamp(380px,42vw,520px)] items-center justify-center overflow-hidden rounded-[6px] border border-black/[.06] py-12" style={{ background: `linear-gradient(160deg, ${tint}, #ffffff 115%)` }}>
              <div className="relative flex w-full justify-center">{visual}</div>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "fan") {
    return (
      <section data-nav="light" className="relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]" style={{ backgroundImage: "radial-gradient(800px 420px at 50% 0%, rgba(165,168,255,.35), transparent 70%)" }}>
        <div className="mx-auto flex max-w-[900px] flex-col items-center px-5 pt-[clamp(48px,7vw,104px)] text-center md:px-8">
          <motion.p {...reveal(0.05)} className="mono-label flex items-center gap-3 text-black/45"><span className="size-2 rounded-full bg-[#5f63f2]" />{label}</motion.p>
          <motion.h1 {...reveal(0.15)} className="h-hero mt-6 max-w-[15ch]">{title}</motion.h1>
          {body && <motion.p {...reveal(0.26)} className="mt-6 max-w-[44ch] text-[clamp(1.05rem,.95rem+.4vw,1.25rem)] leading-snug text-black/55">{body}</motion.p>}
          {cta && (
            <motion.div {...reveal(0.34)} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={site.demoHref} className="pill pill-dark h-12 px-6">Book a demo</Link>
              <Link href={site.salesHref} className="pill h-12 border border-black/15 px-6 hover:bg-black/[.04]">Contact sales</Link>
            </motion.div>
          )}
        </div>
        {extra && <motion.div {...reveal(0.5)} className="relative mt-[clamp(32px,5vw,64px)]">{extra}<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f6f7fe]" /></motion.div>}
      </section>
    );
  }

  if (variant === "news") {
    return (
      <section data-nav="light" className="rails rails-light relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]">
        <div className="rail-inner relative">
          <div className={`mx-auto max-w-[900px] py-[clamp(56px,8vw,120px)] text-center ${extra ? "" : "-mx-[clamp(32px,7vw,108px)] max-w-none border-b border-black/10"}`}>
            <motion.h1 {...reveal(0.1)} className="h-hero">{title}</motion.h1>
            {body && <motion.p {...reveal(0.22)} className="mx-auto mt-6 max-w-[40ch] text-[17px] leading-snug text-black/55">{body}</motion.p>}
          </div>
          {extra && <motion.div {...reveal(0.35)} className="border-t border-black/10 py-[clamp(32px,4vw,56px)]">{extra}</motion.div>}
        </div>
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section data-nav="light" className="rails rails-light relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]" style={{ backgroundImage: "radial-gradient(900px 300px at 50% 100%, rgba(95,99,242,.20), transparent 70%)" }}>
        <div className="rail-inner relative">
          <div className="grid items-end gap-10 border-b border-black/10 py-[clamp(72px,10vw,150px)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <motion.p {...reveal(0.05)} className="mono-label text-black/45">{label}</motion.p>
              <motion.h1 {...reveal(0.15)} className="h-hero mt-5 max-w-[15ch]">{title}</motion.h1>
            </div>
            <motion.div {...reveal(0.3)} className="lg:pb-3">
              {lead && <p className="max-w-[40ch] text-[clamp(1.1rem,1rem+.4vw,1.3rem)] leading-snug">{lead}</p>}
              {body && <p className="mt-3 max-w-[42ch] text-[16px] leading-snug text-black/55">{body}</p>}
              {cta && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={site.demoHref} className="pill pill-dark h-12 px-6">Book a demo</Link>
                  <Link href={site.salesHref} className="pill h-12 border border-black/15 px-6 hover:bg-black/[.04]">Contact sales<ArrowRight className="size-4" /></Link>
                </div>
              )}
            </motion.div>
          </div>
          {extra && <motion.div {...reveal(0.45)} className="py-8">{extra}</motion.div>}
        </div>
      </section>
    );
  }
  const bg = {
    split: `radial-gradient(700px 500px at 88% 30%, ${tint}, transparent 70%)`,
    centered: `radial-gradient(600px 380px at 12% 0%, ${tint}, transparent 70%), radial-gradient(600px 380px at 92% 10%, #fbe9df, transparent 70%)`,
    grid: `radial-gradient(800px 420px at 85% 100%, ${tint}, transparent 70%)`,
    glow: `radial-gradient(900px 420px at 10% 110%, ${tint}, transparent 70%)`,
  }[variant];

  return (
    <section data-nav="light" className="relative overflow-hidden bg-[#f6f7fe] pt-[64px] text-[#111735]" style={{ backgroundImage: bg }}>
      {variant === "grid" && <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_80%_at_80%_60%,black,transparent_75%)]" />}
      {centered && <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_30%,black,transparent_80%)]" />}

      <div className={`relative mx-auto max-w-[1240px] px-5 md:px-8 ${variant === "split" ? "grid items-center gap-12 py-[clamp(48px,6vw,96px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "py-[clamp(56px,8vw,120px)]"}`}>
        <div className={centered ? "mx-auto flex max-w-[860px] flex-col items-center text-center" : ""}>
          <motion.p {...reveal(0.05)} className="mono-label flex items-center gap-2 text-[#111735]/55"><span className="h-px w-6 bg-[#5f63f2]" />{label}</motion.p>
          <motion.h1 {...reveal(0.15)} className={centered ? "h-hero mt-6 max-w-[16ch]" : variant === "split" ? "mt-6 max-w-[14ch] font-sans text-[clamp(2.6rem,1.5rem+3.8vw,4.6rem)] font-medium leading-[1] tracking-[-0.05em]" : "mt-6 max-w-[16ch] font-sans text-[clamp(2.8rem,1.5rem+4.4vw,5rem)] font-medium leading-[.98] tracking-[-0.055em]"}>{title}</motion.h1>
          {lead && <motion.p {...reveal(0.26)} className="mt-6 max-w-[40ch] text-[clamp(1.15rem,1rem+.55vw,1.45rem)] leading-snug">{lead}</motion.p>}
          {body && <motion.p {...reveal(0.32)} className="mt-4 max-w-[52ch] text-[clamp(1rem,.95rem+.3vw,1.2rem)] leading-snug text-[#111735]/60">{body}</motion.p>}
          {cta && (
            <motion.div {...reveal(0.4)} className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
              <Link href={site.demoHref} className="pill pill-dark h-12 px-6">Book a demo<ArrowRight className="size-4" /></Link>
              <Link href={site.salesHref} className="pill h-12 bg-[#111735]/[.06] px-6 text-[#111735] hover:bg-[#111735]/10">Contact sales</Link>
            </motion.div>
          )}
        </div>

        {visual && (
          <motion.div {...reveal(0.35)} className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[24px] border border-[#111735]/[.06] py-10" style={{ background: `linear-gradient(160deg, ${tint}, #ffffff 120%)` }}>
            <div aria-hidden className="absolute -right-16 -top-16 size-64 rounded-full opacity-70 blur-3xl" style={{ background: tint }} />
            <div className="relative flex w-full justify-center">{visual}</div>
          </motion.div>
        )}
        {extra && <motion.div {...reveal(0.5)} className={variant === "split" ? "" : "mt-12"}>{extra}</motion.div>}
      </div>
    </section>
  );
}
