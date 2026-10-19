"use client";
import { LegacyFinalCTA } from "./LegacyFinalCTA";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA({ title = "See it for yourself.", text, href = site.demoHref, label = "Book a demo" }: { title?: string; text?: string; href?: string; label?: string }) {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/products" || pathname.startsWith("/products/") || pathname === "/resources" || pathname.startsWith("/resources/") || pathname === "/contact" || pathname === "/book-demo") {
    return <LegacyFinalCTA title={title} text={text} href={href} label={label} />;
  }
  const palettes: Record<string, string> = {
    "/resources": "linear-gradient(120deg,#b2a5ff,#91c7ff 55%,#b4eee8)",
    "/resources/blog": "linear-gradient(120deg,#ffba91,#edb1e7 55%,#c5b3ff)",
    "/resources/guides": "linear-gradient(120deg,#93bcff,#b5acff 55%,#edbded)",
    "/resources/case-studies": "linear-gradient(120deg,#b8e998,#92e2cd 55%,#a0d6f6)",
    "/": "linear-gradient(120deg,#6676c4,#a18dd0 60%,#e1a099)",
    "/products": "linear-gradient(120deg,#b8a1ff,#efaee6 55%,#ffd1a4)",
    "/platform": "linear-gradient(120deg,#84d5eb,#a8dce9 55%,#c3b3ff)",
    "/custom-solutions": "linear-gradient(120deg,#ffc282,#ffd99f 55%,#f7b3ce)",
    "/company": "linear-gradient(120deg,#c5e99a,#b1e3bc 55%,#b7d6f9)",
    "/products/crm": "linear-gradient(120deg,#9ca9ff,#b9a5ff 55%,#acd5ff)",
    "/products/real-estate": "linear-gradient(120deg,#96dfc3,#9cd6d8 55%,#d0e89b)",
    "/products/clinic": "linear-gradient(120deg,#8fdfe8,#b0e8ed 55%,#b0c3ff)",
    "/products/agency": "linear-gradient(120deg,#cea1f4,#ecb1d8 55%,#bdadff)",
    "/products/commerce": "linear-gradient(120deg,#ffe28b,#ffc793 55%,#e5dea3)",
    "/products/ai-calling": "linear-gradient(120deg,#9ab8ff,#9fe0df 55%,#c5b2fa)",
  };
  const original = pathname === "/";
  const routeHue = [...pathname].reduce((total, char) => (total * 31 + char.charCodeAt(0)) % 360, 0);
  const gradient = palettes[pathname] ?? `linear-gradient(120deg,hsl(${routeHue} 80% 78%),hsl(${(routeHue + 42) % 360} 78% 82%) 55%,hsl(${(routeHue + 85) % 360} 75% 84%))`;
  return (
    <section data-nav="light" className="px-3 py-[clamp(40px,5vw,80px)] sm:px-5">
      <div className="mx-auto max-w-[1304px] rounded-[30px] border border-[#e4e3df] bg-white/70 p-1.5">
        <Reveal style={{ "--cta-page-background": `var(--story-noise), ${gradient}` } as React.CSSProperties} className={`cta-matte cta-page-tone ${original ? "" : "brand-cta"} relative overflow-hidden rounded-[24px] px-6 pb-[clamp(48px,5vw,72px)] pt-[clamp(48px,5vw,72px)] text-center text-white`}>
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
