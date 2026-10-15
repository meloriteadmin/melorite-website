import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

export function EditorialFeature() {
  return (
    <section data-nav="light" className="rails rails-light bg-[#fbfbf8] py-[clamp(92px,12vw,170px)] text-[#111735]">
      <div className="rail-inner mx-auto max-w-[1440px]">
        <Reveal className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <h2 className="h-section max-w-[13ch]">Real work, clearer decisions. <span className="text-[#111735]/28">Stories from growing teams.</span></h2>
          <div className="lg:justify-self-end"><p className="max-w-[42ch] text-[18px] leading-[1.55] text-[#111735]/58">A field journal about the systems, decisions and small operational changes that make a business easier to run.</p><Link href="/company" className="pill pill-dark mt-7 h-12 px-7">Our approach <ArrowRight className="size-4" /></Link></div>
        </Reveal>
        <Reveal className="media-frame relative mt-16 min-h-[clamp(480px,62vw,790px)] overflow-hidden bg-[url('/images/editorial/melorite-about-illustration.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,25,.66),transparent_52%)]" />
          <div className="absolute inset-x-0 bottom-0 grid gap-8 p-[clamp(28px,5vw,72px)] text-white lg:grid-cols-[.55fr_1.45fr] lg:items-end">
            <div><p className="mono-label text-white/60">Field note · October 2026</p><h3 className="mt-5 max-w-[12ch] font-serif text-[clamp(2.1rem,1.5rem+2vw,3.8rem)] leading-[1.02] tracking-[-.035em]">Why the best software starts with listening.</h3></div>
            <span className="ml-auto grid size-14 place-items-center rounded-full border border-white/35 bg-black/20 backdrop-blur-sm"><Play className="ml-0.5 size-5 fill-white" /></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
