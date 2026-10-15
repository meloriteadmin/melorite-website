"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function EditorialAboutHero() {
  return (
    <section data-nav="light" className="rails rails-light overflow-hidden bg-[#ffffff] pt-[64px] text-[#111]">
      <div className="rail-inner">
        <div className="grid gap-10 py-[clamp(56px,8vw,110px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:items-center lg:gap-[clamp(48px,6vw,110px)]">
          <motion.h1 {...reveal(0.05)} className="font-sans text-[clamp(2.6rem,1.5rem+2.9vw,4.6rem)] font-medium leading-[.98] tracking-[-.055em]">
            Software built around<br /><span className="text-[#111]/45">the people who use it</span>
          </motion.h1>
          <motion.div {...reveal(0.2)}>
            <p className="max-w-[40ch] text-[clamp(1.05rem,.98rem+.4vw,1.3rem)] leading-[1.45] text-[#111]/55">Ready-to-use products, thoughtful setup and a team that stays after you go live.</p>
            <Link href="/products" className="pill mt-8 h-12 border border-black/15 px-6 text-[16px] hover:bg-black/[.03]">Explore products</Link>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="rail-inner py-[clamp(32px,4vw,60px)]">
          <motion.div {...reveal(0.3)} className="grid gap-8 lg:grid-cols-[minmax(0,.4fr)_minmax(0,1fr)] lg:gap-0">
            <div className="flex flex-col justify-between gap-16 border-t border-black/10 pt-8 lg:pr-12">
              <div>
                <p className="text-[16px] uppercase text-[#111]/70">About Melorite</p>
                <p className="mt-2 text-[14px] text-[#111]/50">Our approach</p>
              </div>
              <div>
                <h2 className="font-sans text-[clamp(1.9rem,1.4rem+1.5vw,2.8rem)] font-medium leading-[1.02] tracking-[-.04em] [text-wrap:balance]">Software that fits. People who stay.</h2>
                <p className="mt-5 max-w-[34ch] text-[18px] leading-[1.45] text-[#111]/55">Each product is made for a particular kind of business, so your team doesn’t have to redesign its day around the software.</p>
                <Link href={site.demoHref} className="pill pill-dark mt-8 h-12 bg-black px-6 text-[16px]">Book a demo</Link>
              </div>
            </div>
            <div aria-label="Melorite approach: understand the work, shape the workspace and support the team" className="media-frame relative min-h-0 overflow-hidden border border-black/[.06] bg-[#111735] p-5 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(165,168,255,.44),transparent_42%)]" />
              <div className="relative flex h-full flex-col rounded-[14px] border border-white/15 bg-white/[.06] p-4 backdrop-blur-sm sm:p-6">
                <div className="flex items-center gap-2 border-b border-white/12 pb-4"><i className="size-2 rounded-full bg-[#a5a8ff]" /><span className="text-[11px] font-semibold text-white/78">How Melorite works with you</span><span className="ml-auto rounded-full border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-[.12em] text-white/48">A clear path</span></div>
                <div className="my-12 grid gap-4 sm:grid-cols-3">{[["01", "Understand", "The records, decisions and hand-offs behind the work."], ["02", "Shape", "A focused workspace around the agreed process."], ["03", "Support", "Help through launch and the changes that follow."]].map(([number, title, body]) => <div key={title} className="rounded-2xl border border-white/14 bg-[#111735]/45 p-4 sm:p-6"><p className="mono-label text-[#a5a8ff]">{number}</p><h3 className="mt-6 text-[20px] font-semibold text-white">{title}</h3><p className="mt-3 text-[12px] leading-[1.55] text-white/55">{body}</p></div>)}</div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-white/12 pt-4"><div className="h-1.5 overflow-hidden rounded-full bg-white/10"><i className="block h-full w-[72%] rounded-full bg-[#8e92ff]" /></div><span className="text-[9px] uppercase tracking-[.12em] text-white/45">Built together</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
