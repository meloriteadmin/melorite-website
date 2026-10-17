import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA({ title = "See it for yourself.", text, href = site.demoHref, label = "Book a demo" }: { title?: string; text?: string; href?: string; label?: string }) {
  return (
    <section data-nav="light" className="px-3 py-[clamp(40px,5vw,80px)] sm:px-5">
      <div className="mx-auto max-w-[1304px] rounded-[30px] border border-[#e4e3df] bg-white/70 p-1.5">
        <Reveal className="cta-matte relative overflow-hidden rounded-[24px] px-6 pb-[clamp(48px,5vw,72px)] pt-[clamp(48px,5vw,72px)] text-center text-white">
          <svg aria-hidden viewBox="0 0 1300 420" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute inset-0 size-full">
            <g fill="#fff">
              <polygon points="150,420 330,170 510,420" opacity=".07" />
              <polygon points="330,420 510,150 690,420" opacity=".05" />
              <polygon points="610,420 800,130 990,420" opacity=".08" />
              <polygon points="860,420 1040,190 1220,420" opacity=".06" />
              <rect x="540" y="250" width="220" height="220" transform="rotate(45 650 360)" opacity=".05" />
            </g>
            <g fill="none" stroke="#fff" strokeWidth="1" opacity=".16">
              <polygon points="330,420 510,150 690,420" />
              <polygon points="610,420 800,130 990,420" />
            </g>
          </svg>
          <h2 className="relative mx-auto max-w-[20ch] text-[clamp(2rem,1.4rem+2.6vw,3.6rem)] font-light leading-[1.18] tracking-[-0.03em]">{title}</h2>
          {text && <p className="relative mx-auto mt-5 max-w-[56ch] text-[16px] leading-relaxed text-white/75">{text}</p>}
          <Link href={href} className="pill relative mt-10 h-12 bg-[#26283a] px-8 text-white hover:bg-[#33364d]">{label}</Link>
        </Reveal>
      </div>
    </section>
  );
}
