"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA({ title = "See it for yourself.", text, href = site.demoHref, label = "Book a demo" }: { title?: string; text?: string; href?: string; label?: string }) {
  const pathname = usePathname();
  const palettes: Record<string, string> = {
    "/resources": "linear-gradient(120deg,#6982cd,#a58ac8 60%,#d99c9d)",
    "/resources/blog": "linear-gradient(120deg,#da8957,#cd888b 60%,#a38ec3)",
    "/resources/guides": "linear-gradient(120deg,#658bd1,#a890d3 60%,#dba6ba)",
    "/resources/case-studies": "linear-gradient(120deg,#81aa72,#8db39b 60%,#739fba)",
    "/": "linear-gradient(120deg,#6676c4,#a18dd0 60%,#e1a099)",
    "/products": "linear-gradient(120deg,#8568ae,#cb86a4 60%,#edb18a)",
    "/platform": "linear-gradient(120deg,#4d92aa,#80b5c5 60%,#89b6b6)",
    "/custom-solutions": "linear-gradient(120deg,#c08052,#e4a06a 60%,#f0c48e)",
    "/company": "linear-gradient(120deg,#72956e,#9fbb89 60%,#aab58b)",
    "/products/crm": "linear-gradient(120deg,#b77273,#d89488 60%,#d8a38c)",
    "/products/real-estate": "linear-gradient(120deg,#639e8d,#93bfac 60%,#a6c5ae)",
    "/products/clinic": "linear-gradient(120deg,#508fa7,#7eb9c4 60%,#a3c4c4)",
    "/products/agency": "linear-gradient(120deg,#8e75bc,#ba95cd 60%,#cba0b8)",
    "/products/commerce": "linear-gradient(120deg,#bd8752,#dcaf70 60%,#d4b877)",
    "/products/ai-calling": "linear-gradient(120deg,#667dc2,#94a6d9 60%,#b09ac4)",
  };
  return (
    <section data-nav="light" className="px-3 py-[clamp(40px,5vw,80px)] sm:px-5">
      <div className="mx-auto max-w-[1304px] rounded-[30px] border border-[#e4e3df] bg-white/70 p-1.5">
        <Reveal style={{ "--cta-page-background": `var(--story-noise), ${palettes[pathname] ?? (pathname.startsWith("/resources") ? palettes["/resources"] : palettes["/"])}` } as React.CSSProperties} className="cta-matte cta-page-tone relative overflow-hidden rounded-[24px] px-6 pb-[clamp(48px,5vw,72px)] pt-[clamp(48px,5vw,72px)] text-center text-white">
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
