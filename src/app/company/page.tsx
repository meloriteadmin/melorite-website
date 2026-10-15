import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { EditorialAboutHero } from "@/components/site/EditorialAboutHero";
import { FinalCTA } from "@/components/site/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Why Melorite builds simple, ready-to-use software for specific kinds of business, and stays after go-live.",
  alternates: { canonical: "/company" },
};

const principles = [
  ["It already fits", "Each product is made for a particular kind of business. The starting point is familiar, so your team does not have to redesign its day around the software."],
  ["Simple for everyone", "The person using Melorite once a week should feel as comfortable as the person using it all day. Clear language and calm screens matter."],
  ["Safe by default", "Access is deliberate, information stays organised and your team decides who can see what."],
  ["We stay with you", "Go-live is the beginning of the relationship. Real people help your team settle in, answer questions and improve the setup as you grow."],
];

const news = [
  ["COMPANY", "[DATE]", "[NEWS ITEM 01]", "[ONE-LINE NEWS EXCERPT]"],
  ["PRODUCT", "[DATE]", "[NEWS ITEM 02]", "[ONE-LINE NEWS EXCERPT]"],
  ["FIELD NOTES", "[DATE]", "[NEWS ITEM 03]", "[ONE-LINE NEWS EXCERPT]"],
];

export default function CompanyPage() {
  return <PageTransition>
    <EditorialAboutHero />

    <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(88px,11vw,144px)] text-[#14172f]"><div className="rail-inner"><article className="mx-auto max-w-[780px]"><Reveal><p className="font-serif text-[21px]">About Melorite</p><h2 className="mt-8 font-serif text-[clamp(2.7rem,2rem+2.6vw,4.5rem)] leading-[1.03] tracking-[-.04em]">A note from the person building it.</h2></Reveal><Reveal className="mt-10 space-y-6 text-[17px] leading-[1.75] text-[#4a4e6d]"><p>Businesses rarely struggle because people are not working hard enough. More often, the day is held together by memory, messages, notebooks and spreadsheets that were never meant to carry so much.</p><p>We started Melorite to make that day feel lighter. Not with one enormous system that expects every business to work the same way, but with focused products that understand the work from the beginning.</p><p>That means a clinic starts with appointments and patient history. A real estate team starts with projects, units and site visits. An agency starts with clients, calendars and approvals.</p><p>We also believe buying software should not mean being left alone with it. We help set Melorite up, help the team go live and stay close enough to make it useful long afterwards.</p><p>There is still plenty to build. We are doing it carefully, one real business problem at a time.</p><p className="pt-3 font-semibold text-[#14172f]">— [Founder name], Founder &amp; CEO</p></Reveal></article></div></section>

    <section data-nav="light" className="rails rails-light bg-[#f2f1eb] py-[clamp(88px,11vw,144px)] text-[#14172f]"><div className="rail-inner"><article className="mx-auto max-w-[780px]"><Reveal><p className="font-serif text-[21px]">Why we built Melorite</p><h2 className="mt-8 font-serif text-[clamp(2.7rem,2rem+2.6vw,4.5rem)] leading-[1.03] tracking-[-.04em]">The difficult moments are usually very ordinary.</h2></Reveal><Reveal className="mt-10 space-y-6 text-[17px] leading-[1.75] text-[#4a4e6d]"><p>A patient calls after hours, hears voicemail and books with another clinic.</p><p>A buyer waits two days for a call about a flat that is still available. By the time someone replies, their interest has cooled.</p><p>A client asks for status five times because the plan, work and approvals live in different places.</p><p>A cash-on-delivery order is packed before anyone confirms it. It comes back days later, after shipping cost and time have already been spent.</p><p>None of these problems need more noise. They need a clear system that already understands the work, and people who help it fit. That is the job Melorite is here to do.</p></Reveal></article></div></section>

    <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(88px,11vw,144px)] text-[#14172f]"><div className="rail-inner"><div className="mx-auto max-w-[780px]"><Reveal><p className="font-serif text-[21px]">Who it’s for</p><h2 className="mt-8 font-serif text-[clamp(2.7rem,2rem+2.6vw,4.5rem)] leading-[1.03] tracking-[-.04em]">For teams doing real work, every day.</h2><p className="mt-8 text-[17px] leading-[1.75] text-[#4a4e6d]">Melorite is built for real estate firms, clinics, marketing agencies, online sellers and sales teams. Different days, different details, one shared need: software that is simple to start and dependable enough to keep.</p></Reveal><div className="mt-24"><Reveal><h2 className="font-serif text-[clamp(2.7rem,2rem+2.6vw,4.5rem)] leading-[1.03] tracking-[-.04em]">Our principles</h2></Reveal><div className="mt-10 border-t border-[#d9dcf0]">{principles.map(([title, body], i) => <Reveal key={title} delay={i * .04}><div className="grid gap-3 border-b border-[#d9dcf0] py-7 sm:grid-cols-[190px_1fr]"><h3 className="font-semibold">{title}</h3><p className="leading-relaxed text-[#4a4e6d]">{body}</p></div></Reveal>)}</div></div></div></div></section>

    <section data-nav="light" className="rails rails-light bg-[#f2f1eb] py-[clamp(88px,11vw,132px)] text-[#14172f]"><div className="rail-inner mx-auto max-w-[1440px]"><div className="flex items-end justify-between gap-6"><Reveal><p className="mono-label text-[#3d3fd1]">News</p><h2 className="mt-4 font-serif text-[clamp(2.5rem,1.9rem+2vw,4rem)] tracking-[-.035em]">The latest news from Melorite</h2></Reveal><Link href="#news" className="hidden border-b border-[#14172f] pb-1 text-sm font-semibold sm:inline">All news <span aria-hidden>→</span></Link></div><div id="news" className="mt-12 grid gap-8 md:grid-cols-3">{news.map(([category, date, title, excerpt], i) => <Reveal key={title} delay={i * .05}><article><div className={`relative aspect-[16/10] overflow-hidden rounded-[14px] border border-[#d9dcf0] ${i === 0 ? "bg-[#dfe1f8]" : i === 1 ? "bg-[#dcece8]" : "bg-[#f4dfd7]"}`}><span className="absolute inset-x-[12%] bottom-0 h-[72%] rounded-t-[50%] border border-[#14172f]/10 bg-white/30" /><span className="absolute left-[22%] top-[18%] size-20 rounded-full border border-[#14172f]/10 bg-white/35" /></div><p className="mt-5 font-mono text-[9px] uppercase tracking-[.14em] text-[#696d87]">{category} · {date}</p><h3 className="mt-3 font-serif text-[28px] leading-tight tracking-[-.025em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#4a4e6d]">{excerpt}</p><Link href="#news" className="mt-5 inline-flex border-b border-[#14172f] pb-1 text-sm font-semibold">Read more <span aria-hidden className="ml-1">→</span></Link></article></Reveal>)}</div></div></section>
    <FinalCTA />
  </PageTransition>;
}
