"use client";

import { motion } from "motion/react";
import { productById } from "@/data/products";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { ButtonLink } from "@/components/shared/Button";
import { AppChip, WorkspaceMock, LauncherMock } from "@/components/mockups/WorkspaceMock";

export function PlatformHero() {
  const crm = productById("crm")!;
  return (
    <section className="relative overflow-hidden pb-20 pt-[128px] md:pb-28 md:pt-[150px]">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_70%_at_80%_20%,black,transparent)]" />
        <div className="absolute right-[-10%] top-[5%] h-[700px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.13),transparent)]" />
      </div>
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
            <Eyebrow>The Melorite platform</Eyebrow>
          </motion.div>
          <TextReveal as="h1" trigger="mount" delay={0.15} lines={["One connected", "foundation", "for your business."]} highlight={["foundation"]} className="text-h1 mt-6 text-navy" />
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.55 }} className="text-lead mt-6 max-w-[46ch] text-muted">
            Bring essential business applications together in one flexible system, designed to support different teams, operational
            requirements and stages of growth.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.68 }} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#workspace" size="lg" arrow magnetic>
              Explore the Platform
            </ButtonLink>
            <ButtonLink href={site.demoHref} size="lg" variant="secondary">
              Book a Demo
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative pb-[14%] pr-[6%]">
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: EASE, delay: 0.3 }}>
              <WorkspaceMock product={crm} />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-[52%]"
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
            >
              <LauncherMock chrome={false} title="Workspace" apps={["crm", "finance", "projects"].map((id) => productById(id)!)} />
            </motion.div>
            <motion.div
              className="absolute -left-[6%] top-[38%] hidden w-[24%] md:block"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            >
              <AppChip product={productById("finance")!} />
            </motion.div>
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <motion.path d="M 12 52 C 20 70, 30 82, 48 86" fill="none" stroke="#2563eb" strokeOpacity="0.45" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1.1, ease: EASE }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
