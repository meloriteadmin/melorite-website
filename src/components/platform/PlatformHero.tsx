"use client";

import { motion } from "motion/react";
import { productById } from "@/data/products";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { WorkspaceMock } from "@/components/mockups/WorkspaceMock";

const POINTS = [
  { k: "One workspace", v: "for every enabled application" },
  { k: "Shared records", v: "customers, products, employees, vendors" },
  { k: "Server-side access", v: "entitlements enforced per organization" },
];

/** Platform hero — left-aligned editorial type, one large, accurate workspace screenshot. */
export function PlatformHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-[120px] md:pb-24 md:pt-[144px]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_55%_50%_at_75%_10%,black,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-paper" />
      </div>
      <div className="container-x">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
              <Eyebrow>The Melorite platform</Eyebrow>
            </motion.div>
            <TextReveal as="h1" trigger="mount" delay={0.1} lines={["One connected foundation", "for your business."]} highlight={["foundation"]} className="text-h1 mt-6 text-navy" />
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.35 }} className="lg:col-span-5">
            <p className="text-lead max-w-[46ch] text-muted">
              Bring essential business applications together in one flexible system, designed to support different teams, operational requirements and stages of growth.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#workspace" size="lg" arrow magnetic>
                Explore the Platform
              </ButtonLink>
              <ButtonLink href={site.demoHref} size="lg" variant="secondary">
                Book a Demo
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.45 }} className="mt-14 md:mt-16">
          <WorkspaceMock product={productById("crm")!} />
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3"
        >
          {POINTS.map((p) => (
            <div key={p.k}>
              <dt className="text-[15px] font-semibold text-navy">{p.k}</dt>
              <dd className="mt-1 text-[14px] text-muted">{p.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
