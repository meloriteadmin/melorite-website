"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { productById } from "@/data/products";
import { sharedRecords } from "@/data/workflows";
import { productHref } from "@/data/navigation";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LogoMark } from "@/components/shared/Logo";
import { TextLink } from "@/components/shared/Button";
import { Reveal } from "@/components/animation/Reveal";

const LEFT = ["crm", "sales", "finance"];
const RIGHT = ["hr", "inventory", "projects"];

/** What each app contributes to / reads from the shared record layer (platform data model). */
function sharedFor(appId: string) {
  return sharedRecords.filter((r) => r.apps.includes(appId));
}

function BeamNode({ id, on, onSelect, ref }: { id: string; on: boolean; onSelect: () => void; ref: React.Ref<HTMLButtonElement> }) {
  const p = productById(id)!;
  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      aria-pressed={on}
      className={cn(
        "relative z-10 flex items-center gap-2.5 rounded-[14px] bg-white py-2.5 pl-2.5 pr-4 text-left ring-1 transition-[box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 max-sm:pr-2.5",
        on ? "ring-line-strong" : "ring-line hover:-translate-y-0.5 hover:ring-line-strong",
      )}
      style={on ? { boxShadow: `0 0 0 2px ${tint(p.accent, 0.5)}, 0 12px 32px -14px rgb(10 37 64 / 0.35)` } : undefined}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-[10px]" style={{ background: tint(p.accent, 0.1), color: p.accent }}>
        <Icon name={p.icon} className="size-[18px]" />
      </span>
      <span className="text-[14px] font-medium text-navy max-sm:sr-only">{p.shortName}</span>
    </button>
  );
}

/**
 * Connected workspace diagram (Magic UI AnimatedBeam). Six real applications
 * connect through the Melorite core; selecting one highlights its connection and
 * lists the shared records it uses.
 */
export function ConnectedBeams() {
  const container = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const refs = {
    crm: useRef<HTMLButtonElement>(null),
    sales: useRef<HTMLButtonElement>(null),
    finance: useRef<HTMLButtonElement>(null),
    hr: useRef<HTMLButtonElement>(null),
    inventory: useRef<HTMLButtonElement>(null),
    projects: useRef<HTMLButtonElement>(null),
  } as const;
  const [active, setActive] = useState("crm");
  const app = productById(active)!;
  const records = sharedFor(active);

  return (
    <section className="section-y bg-paper">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Connected workspace"
            title={["Everything works better", "when it works together."]}
            description="Applications share one core: one organization, one sign-in and one set of customer, product, employee and vendor records. Select an application to see what it shares."
          />
          <Reveal delay={0.15} className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="rounded-[16px] border border-line bg-white p-5"
                aria-live="polite"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-[8px]" style={{ background: tint(app.accent, 0.1), color: app.accent }}>
                    <Icon name={app.icon} className="size-4" />
                  </span>
                  <span className="text-[15px] font-semibold text-navy">{app.name}</span>
                </div>
                <p className="mt-3 text-[14px] text-muted">Shared records used by {app.shortName}:</p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {records.map((r) => (
                    <li key={r.id} className="rounded-md bg-paper px-2.5 py-1 text-[13px] font-medium text-navy ring-1 ring-line">
                      {r.label}
                    </li>
                  ))}
                </ul>
                <TextLink href={productHref(app.id)} className="mt-4">
                  Explore {app.shortName}
                </TextLink>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" y={24}>
          <div ref={container} className="relative mx-auto flex max-w-[640px] items-center justify-between gap-6 rounded-[20px] border border-line bg-white px-5 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 rounded-[20px] bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
            <div className="flex flex-col gap-6 sm:gap-8">
              {LEFT.map((id) => (
                <BeamNode key={id} id={id} on={active === id} onSelect={() => setActive(id)} ref={refs[id as keyof typeof refs]} />
              ))}
            </div>
            <div ref={hub} className="relative z-10 grid size-20 shrink-0 place-items-center rounded-[22px] bg-navy shadow-[0_20px_40px_-16px_rgb(10_37_64/0.6)] sm:size-24">
              <LogoMark className="w-10 sm:w-12" color="#ffffff" />
              <span className="absolute -bottom-7 whitespace-nowrap text-[12px] font-medium text-muted">Melorite core</span>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              {RIGHT.map((id) => (
                <BeamNode key={id} id={id} on={active === id} onSelect={() => setActive(id)} ref={refs[id as keyof typeof refs]} />
              ))}
            </div>

            {[...LEFT, ...RIGHT].map((id, i) => {
              const on = id === active;
              const p = productById(id)!;
              return (
                <AnimatedBeam
                  key={id}
                  containerRef={container}
                  fromRef={refs[id as keyof typeof refs]}
                  toRef={hub}
                  curvature={i % 3 === 0 ? -40 : i % 3 === 2 ? 40 : 0}
                  reverse={RIGHT.includes(id)}
                  duration={on ? 3 : 6}
                  delay={i * 0.3}
                  pathColor={on ? p.accent : "#94a3b8"}
                  pathOpacity={on ? 0.35 : 0.18}
                  pathWidth={on ? 2.5 : 1.5}
                  gradientStartColor={on ? p.accent : "#93c5fd"}
                  gradientStopColor={on ? "#2563eb" : "#bfdbfe"}
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
