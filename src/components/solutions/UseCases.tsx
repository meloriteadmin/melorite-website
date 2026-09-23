import { industryById } from "@/data/industries";
import { Icon } from "@/lib/icons";
import { cn, tint } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { ImageReveal } from "@/components/animation/ImageReveal";
import { IndustryWorkspaceMock } from "@/components/mockups/IndustryWorkspaceMock";

const USE_CASES = ["hospital", "real-estate", "manufacturing", "logistics-and-transport"];

export function UseCases() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading eyebrow="Business use cases" title={["Operational problems,", "connected workflows."]} description="How industry solutions apply to everyday work. Each use case is built from the solution's defined modules and workflows." />
        <div className="mt-16 space-y-6">
          {USE_CASES.map((id, n) => {
            const ind = industryById(id)!;
            const u = ind.useCase;
            const flip = n % 2 === 1;
            return (
              <Reveal key={id} y={30}>
                <article className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-white ring-1 ring-line lg:grid-cols-12">
                  <div className={cn("relative p-5 md:p-8 lg:col-span-7", flip && "lg:order-2")} style={{ background: `linear-gradient(160deg, ${tint(ind.accent, 0.1)}, ${tint(ind.accent, 0.02)})` }}>
                    <ImageReveal direction={flip ? "right" : "left"}>
                      <IndustryWorkspaceMock industry={ind} />
                    </ImageReveal>
                  </div>
                  <div className="flex flex-col p-7 md:p-10 lg:col-span-5">
                    <span className="inline-flex items-center gap-2 self-start rounded-full px-2.5 py-1 text-[12px] font-semibold" style={{ background: tint(ind.accent, 0.1), color: ind.accent }}>
                      <Icon name={ind.icon} className="size-3.5" />
                      {ind.name}
                    </span>
                    <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-[-0.03em] text-navy md:text-[30px]">{u.title}</h3>
                    <dl className="mt-6 space-y-5 text-[14.5px] leading-relaxed">
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">The challenge</dt>
                        <dd className="mt-1.5 text-slate-600">{u.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Relevant capabilities</dt>
                        <dd className="mt-2 flex flex-wrap gap-1.5">
                          {u.capabilities.map((c) => (
                            <span key={c} className="rounded-full bg-paper px-2.5 py-1 text-[12.5px] font-medium text-navy ring-1 ring-line">{c}</span>
                          ))}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">How it works</dt>
                        <dd className="mt-2">
                          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-[13px] text-slate-600">
                            {ind.workflows[0].steps.map((s, i) => (
                              <li key={s} className="inline-flex items-center gap-1.5">
                                {i > 0 && <span aria-hidden style={{ color: ind.accent }}>→</span>}
                                <span className="rounded-[6px] bg-white px-1.5 py-0.5 ring-1 ring-line">{s}</span>
                              </li>
                            ))}
                          </ol>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">The benefit</dt>
                        <dd className="mt-1.5 font-medium text-navy">{u.benefit}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
