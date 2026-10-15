import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

type Mesh = "crm" | "estate" | "clinic" | "agency" | "commerce" | "calling";

/** Centered inner-page hero: eyebrow, headline, CTAs, then a pastel mesh stage that holds a product visual. */
export function InnerHero({ label, title, body, primary, secondary, mesh = "crm", children }: { label: string; title: string; body: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string }; mesh?: Mesh; children?: React.ReactNode }) {
  return (
    <section data-nav="light" className="relative overflow-hidden bg-white pt-[64px] text-[#111735]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(700px_320px_at_20%_0%,rgba(255,190,150,.35),transparent_70%),radial-gradient(800px_360px_at_85%_0%,rgba(165,168,255,.45),transparent_70%)]" />
      <div className="relative mx-auto flex max-w-[980px] flex-col items-center px-5 pt-[clamp(48px,7vw,96px)] text-center md:px-8">
        <Reveal><p className="eyebrow-pill">{label}</p></Reveal>
        <Reveal delay={.06}><h1 className="h-hero mt-6 max-w-[15ch] !text-[clamp(2.7rem,1.5rem+4.4vw,5.2rem)] mx-auto">{title}</h1></Reveal>
        <Reveal delay={.12}><p className="mx-auto mt-6 max-w-[56ch] text-[clamp(1.05rem,.95rem+.4vw,1.25rem)] leading-snug text-[#111735]/62">{body}</p></Reveal>
        {(primary || secondary) && (
          <Reveal delay={.18} className="mt-8 flex flex-wrap justify-center gap-3">
            {primary && <Link href={primary.href} className="pill pill-dark h-12 px-7">{primary.label}<ArrowRight className="size-4" /></Link>}
            {secondary && <Link href={secondary.href} className="pill h-12 border border-[#111735]/12 bg-white px-7 shadow-sm hover:border-[#5f63f2]/40">{secondary.label}</Link>}
          </Reveal>
        )}
      </div>
      {children && (
        <div className="relative mx-auto mt-[clamp(40px,6vw,80px)] max-w-[1240px] px-3 pb-[clamp(40px,6vw,80px)] sm:px-5">
          <Reveal delay={.22} className={`mesh-${mesh} grain relative overflow-hidden rounded-[32px] px-4 py-[clamp(28px,5vw,72px)] sm:px-[clamp(20px,5vw,72px)]`}><div className="relative z-10">{children}</div></Reveal>
        </div>
      )}
    </section>
  );
}
