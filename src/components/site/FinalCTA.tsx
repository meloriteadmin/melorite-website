"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA({ title = "See it for yourself.", text, href = site.demoHref, label = "Book a demo" }: { title?: string; text?: string; href?: string; label?: string }) {
  const pathname = usePathname();
  const palettes: Record<string, string> = {
    "/": "linear-gradient(120deg,#303b77,#8076b8 60%,#c88882)",
    "/products": "linear-gradient(120deg,#4f365b,#a46d83 60%,#cf9a79)",
    "/platform": "linear-gradient(120deg,#173d53,#397e99 60%,#89b6b6)",
    "/custom-solutions": "linear-gradient(120deg,#513827,#a56944 60%,#d2a66f)",
    "/company": "linear-gradient(120deg,#303e35,#6f896c 60%,#aab58b)",
    "/products/crm": "linear-gradient(120deg,#633b38,#b2685a 60%,#d8a38c)",
    "/products/real-estate": "linear-gradient(120deg,#314e46,#659387 60%,#a6c5ae)",
    "/products/clinic": "linear-gradient(120deg,#1c4757,#4b91a4 60%,#a3c4c4)",
    "/products/agency": "linear-gradient(120deg,#523d6f,#9373a6 60%,#cba0b8)",
    "/products/commerce": "linear-gradient(120deg,#67422a,#b78247 60%,#d4b877)",
    "/products/ai-calling": "linear-gradient(120deg,#293a70,#627cb6 60%,#b09ac4)",
  };
  return (
    <section data-nav="light" className="px-3 py-[clamp(40px,5vw,80px)] sm:px-5">
      <div className="mx-auto max-w-[1304px] rounded-[30px] border border-[#e4e3df] bg-white/70 p-1.5">
        <Reveal style={{ "--cta-page-background": `var(--story-noise), ${palettes[pathname] ?? palettes["/"]}` } as React.CSSProperties} className="cta-matte cta-page-tone relative overflow-hidden rounded-[24px] px-6 pb-[clamp(48px,5vw,72px)] pt-[clamp(48px,5vw,72px)] text-center text-white">
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
