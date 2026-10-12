import Link from "next/link";
import { site } from "@/data/site";

/** Dark rail hero shared by inner pages. */
export function PageHero({ label, title, lead, body, visual, panel = "panel-warm", cta = true }: { label: string; title: React.ReactNode; lead?: string; body?: string; visual?: React.ReactNode; panel?: string; cta?: boolean }) {
  return (
    <section data-nav="dark" className="rails bg-[#111735] pt-[64px] text-white">
      <div className="px-[clamp(8px,1.4vw,20px)] pb-5 pt-5">
        <div className="atmos-warm relative overflow-hidden rounded-[6px]">
          <div className={`rail-inner grid items-center gap-12 py-[clamp(56px,8vw,112px)] ${visual ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : ""}`}>
            <div>
              <p className="mono-label text-white/50">{label}</p>
              <h1 className="h-hero mt-6 max-w-[13ch]">{title}</h1>
              {lead && <p className="mt-6 max-w-[32ch] text-[clamp(1.1rem,1rem+.5vw,1.5rem)] font-light leading-snug text-white">{lead}</p>}
              {body && <p className="mt-4 max-w-[46ch] text-[17px] leading-snug text-white/55">{body}</p>}
              {cta && (
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href={site.demoHref} className="pill pill-light h-12 px-6">Book a demo</Link>
                  <Link href={site.salesHref} className="pill pill-ghost-dark h-12 px-6">Contact sales</Link>
                </div>
              )}
            </div>
            {visual && <div className={`${panel} relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[6px] py-10`}>{visual}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
