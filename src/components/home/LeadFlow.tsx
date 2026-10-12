import Link from "next/link";
import { Globe, MessageCircle, Megaphone, Phone, Footprints, Users } from "lucide-react";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

const sources = [
  { label: "Your website", icon: Globe },
  { label: "Ads", icon: Megaphone },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Phone calls", icon: Phone },
  { label: "Walk-ins", icon: Footprints },
  { label: "Referrals", icon: Users },
];
const ROW = 56, GAP = 8, H = sources.length * ROW + (sources.length - 1) * GAP, MID = H / 2;

const signals = [
  { tag: "New lead", tone: "text-[#4b4fe0] bg-[#eeeffe]", title: "A buyer asked about a 3 BHK flat. Assigned to Priya.", meta: "Real Estate · follow-up scheduled in 2 hours" },
  { tag: "AI Calling", tone: "text-emerald-700 bg-emerald-50", title: "Missed call answered at 9:42 pm. Appointment booked for 10:30 am.", meta: "Clinic · added to Dr. Mehta’s calendar" },
];

export function LeadFlow() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#f9f8f6] pb-6 pt-[clamp(88px,10vw,150px)] text-[#2c2c2b]">
      <div className="rail-inner">
        <Reveal><h2 className="h-section max-w-[17ch]">Software made for your kind of business</h2></Reveal>
        <Reveal delay={0.08}><p className="mt-5 max-w-[52ch] text-[17px] text-black/55">Pick the product made for your business. Each one is ready to use from day one, and simple enough for your whole team.</p></Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap gap-2">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-[4px] border border-black/10 bg-white px-3 py-1.5 text-[13px] transition-colors hover:border-[#5f63f2] hover:text-[#4b4fe0]">{p.name}</Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-[clamp(48px,6vw,88px)] rounded-[4px] border border-black/[.07] bg-[#fcfbfa] p-[clamp(20px,3.4vw,52px)]">
          <h3 className="h-card max-w-[24ch]">Every enquiry, call and follow-up, in one place</h3>
          <p className="mt-4 max-w-[50ch] text-[16px] leading-relaxed text-black/55">Melorite collects every lead and conversation, so you always know who to call next, what they asked for last time, and which deals are about to close.</p>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[250px_minmax(80px,1fr)_auto_minmax(0,1.5fr)] lg:gap-0">
            <ul className="flex flex-col" style={{ gap: GAP }}>
              {sources.map(({ label, icon: I }) => (
                <li key={label} style={{ height: ROW }} className="flex items-center gap-3 border border-black/[.08] bg-white px-4 text-[15px]">
                  <span className="grid size-7 place-items-center rounded-full bg-black/[.05]"><I className="size-3.5 text-black/60" /></span>{label}
                </li>
              ))}
            </ul>
            <svg viewBox={`0 0 400 ${H}`} preserveAspectRatio="none" className="hidden w-full lg:block" style={{ height: H }} aria-hidden>
              {sources.map((_, i) => {
                const y = i * (ROW + GAP) + ROW / 2;
                const d = `M0 ${y} C 200 ${y}, 220 ${MID}, 400 ${MID}`;
                return (
                  <g key={i}>
                    <path d={d} fill="none" stroke="rgba(0,0,0,.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <circle r="3" fill="#5f63f2"><animateMotion dur={`${3.2 + i * 0.35}s`} repeatCount="indefinite" path={d} begin={`${i * 0.4}s`} /></circle>
                  </g>
                );
              })}
            </svg>
            <div className="flex h-[52px] items-center gap-2.5 border border-black/[.08] bg-white px-5 text-[15px] shadow-sm lg:-ml-px">
              <span className="size-2 rounded-full bg-[#5f63f2]" />Your Melorite workspace
            </div>
            <div className="flex flex-col gap-3 lg:ml-12">
              {signals.map((s) => (
                <div key={s.title} className="rounded-xl border border-black/[.06] bg-white p-5 shadow-[0_6px_24px_-18px_rgba(0,0,0,.25)]">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[15.5px] font-medium leading-snug">{s.title}</p>
                    <span className={`mono-label shrink-0 rounded px-2 py-1 !text-[9.5px] ${s.tone}`}>{s.tag}</span>
                  </div>
                  <p className="mt-2 text-[13px] text-black/50">{s.meta}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href={site.demoHref} className="pill pill-dark mt-10 h-12">Book a demo</Link>
        </Reveal>
      </div>
    </section>
  );
}
