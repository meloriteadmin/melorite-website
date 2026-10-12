import Link from "next/link";
import { ArrowDown, Check } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";
import { callFlows, customSteps, startSteps } from "@/data/products";
import { site } from "@/data/site";

export function CallsAndSetup() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f9f8f6] pb-6 text-[#2c2c2b]">
      <div className="rail-inner">
        <Reveal className="grid overflow-hidden rounded-[4px] border border-black/[.07] bg-[#fcfbfa] lg:grid-cols-2">
          <div className="p-[clamp(20px,3.4vw,48px)] lg:border-r lg:border-black/[.07]">
            <p className="mono-label flex items-center gap-2 text-black/45"><span className="size-1.5 rounded-full bg-[#5f63f2]" />Melorite AI Calling<span className="text-black/20">|</span>Phone</p>
            <h3 className="h-card mt-5 max-w-[20ch]">An extra team member on the phone, all day.</h3>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2" style={{ background: "#0a0d1f" }}>
              {(["inbound", "outbound"] as const).map((k) => (
                <div key={k} className="p-5 text-white">
                  <p className="mono-label !text-[10px] text-[#a5a8ff]">{callFlows[k].title}</p>
                  <p className="mt-1 text-[11px] text-white/45">{callFlows[k].subtitle}</p>
                  <ul className="mt-4 space-y-2.5 text-[12.5px] leading-snug text-white/75">
                    {callFlows[k].steps.slice(0, 4).map((s, i) => (
                      <li key={s} className="flex gap-2.5"><span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#5f63f2]/25 text-[9px] text-[#c9cbff]">{i + 1}</span>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/products/ai-calling" className="pill pill-dark mt-8 h-12">See AI Calling</Link>
          </div>
          <div className="p-[clamp(20px,3.4vw,48px)]">
            <p className="mono-label flex items-center gap-2 text-black/45"><span className="size-1.5 rounded-full bg-violet-500" />Custom solutions<span className="text-black/20">|</span>Built for you</p>
            <h3 className="h-card mt-5 max-w-[20ch]">Software built around exactly how you work.</h3>
            <p className="mt-4 max-w-[44ch] text-[15.5px] leading-snug text-black/55">Sometimes ready-made software isn’t quite enough. We can add to Melorite or build something new for your process.</p>
            <ol className="mt-8 space-y-3">
              {customSteps.map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-xl border border-black/[.06] bg-white p-4 shadow-[0_6px_24px_-18px_rgba(0,0,0,.25)]">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-black/15 text-[12px] font-medium">{i + 1}</span>
                  <p className="text-[14.5px] leading-snug"><b className="font-medium">{t}</b> <span className="text-black/55">{d}</span></p>
                </li>
              ))}
            </ol>
            <Link href="/custom-solutions" className="pill pill-dark mt-8 h-12">Talk about a custom build</Link>
          </div>
        </Reveal>

        <Reveal className="mt-6 grid gap-10 rounded-[4px] border border-black/[.07] bg-white p-[clamp(20px,3.4vw,52px)] lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="mono-label text-[#5f63f2]">Getting started</p>
            <h3 className="h-card mt-4 max-w-[14ch]">Getting started is easy.</h3>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-black/55">You don’t set it up alone. We help you get started and stay with you long after you go live.</p>
            <p className="mono-label mt-8 !text-[10.5px] text-black/40">Pricing</p>
            <p className="mt-1 font-serif text-[clamp(1.8rem,1.3rem+1.8vw,2.7rem)] leading-none tracking-tight">Simple monthly plans.</p>
            <p className="mt-2 text-[13px] text-black/45">No hidden costs.</p>
            <Link href={site.demoHref} className="pill pill-dark mt-8 h-12">Book a demo</Link>
          </div>
          <div>
            <p className="mono-label text-black/45">How it works</p>
            <ol className="mt-5 border-t border-black/10">
              {startSteps.map(([t, d], i) => (
                <li key={t} className="flex gap-4 border-b border-black/10 py-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-[12px] font-medium">0{i + 1}</span>
                  <div><p className="font-serif text-[22px] tracking-tight">{t}</p><p className="mt-1 max-w-[44ch] text-[14.5px] leading-snug text-black/55">{d}</p></div>
                  {i < 2 && <ArrowDown className="hidden" />}
                </li>
              ))}
            </ol>
            <ul className="mt-6 space-y-2.5">
              {["Ready to use from day one", "Real people to help you set up", "You decide who sees what"].map((t) => <li key={t} className="flex items-center gap-3 text-[14.5px]"><Check className="size-4 text-[#5f63f2]" />{t}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
