import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

type Mesh = "crm" | "estate" | "clinic" | "agency" | "commerce" | "calling";

/** Centered inner-page hero: eyebrow, headline, CTAs, then a pastel mesh stage that holds a product visual. */
export function InnerHero({ label, title, body, primary, secondary, mesh = "crm", children }: { label: string; title: string; body: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string }; mesh?: Mesh; children?: React.ReactNode }) {
  return (
    <section data-nav="light" className="hero-bg relative overflow-hidden pt-[72px] text-[#111735]">
      <div className="relative mx-auto flex max-w-[980px] flex-col items-center px-5 pt-[clamp(48px,7vw,96px)] text-center md:px-8">
        <Reveal><p className="eyebrow-pill">{label}</p></Reveal>
        <Reveal delay={.06}><h1 className="h-hero mt-6 max-w-[15ch] !text-[clamp(2.7rem,1.5rem+4.4vw,5.2rem)] mx-auto">{title}</h1></Reveal>
        <Reveal delay={.12}><p className="mx-auto mt-6 max-w-[56ch] text-[clamp(1.05rem,.95rem+.4vw,1.25rem)] leading-snug text-[#111735]/62">{body}</p></Reveal>
        {(primary || secondary) && (
          <Reveal delay={.18} className="mt-8 flex flex-wrap justify-center gap-3">
            {primary && <Link href={primary.href} className="pill pill-dark h-12 px-7">{primary.label}<ArrowRight className="size-4" /></Link>}
            {secondary && <Link href={secondary.href} className="pill pill-glass h-12 px-7">{secondary.label}</Link>}
          </Reveal>
        )}
      </div>
      {children && (
        <div className="relative mx-auto mt-[clamp(40px,6vw,80px)] max-w-[1400px] px-3 pb-[clamp(40px,6vw,80px)] sm:px-5">
          <Reveal delay={.22} className="glass glass-sheen rounded-[18px] p-2.5 sm:p-3"><div className={`mesh-${mesh} grain relative overflow-hidden rounded-[14px] border border-white/70 px-4 py-[clamp(28px,5vw,72px)] sm:px-[clamp(20px,5vw,72px)]`}><div className="relative z-10">{children}</div></div></Reveal>
        </div>
      )}
    </section>
  );
}
