"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { productById } from "@/data/products";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { TextReveal } from "@/components/animation/TextReveal";
import { TextEffect } from "@/components/ui/text-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { ButtonLink } from "@/components/shared/Button";
import { AppChip, LauncherMock } from "@/components/mockups/WorkspaceMock";
import { AppMarquee } from "@/components/shared/AppMarquee";

const HOME_APPS = ["crm", "sales", "finance", "hr", "projects", "analytics"].map((id) => productById(id)!);

/**
 * Homepage hero. One synchronized entrance (badge → headline → copy → CTAs →
 * product). Nothing here is tied to scroll position, so scrolling stays perfectly
 * stable (scroll-linked 3D transforms on the screenshot caused visible jitter).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[112px] md:pt-[136px]">
      {/* Controlled background: faint grid + one soft glow */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-full max-w-[1100px] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="container-x flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}>
          <Link
            href="/platform"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white py-1 pl-1 pr-3 text-[12.5px] font-medium text-navy shadow-[0_1px_2px_rgb(10_37_64/0.06)] ring-1 ring-line transition hover:ring-line-strong sm:text-[13px]"
          >
            <span className="hidden rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand ring-1 ring-brand/15 sm:inline">Platform</span>
            The connected business platform
            <ChevronRight className="size-3.5 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </motion.div>

        <TextReveal
          as="h1"
          by="word"
          trigger="mount"
          delay={0.15}
          lines={["One connected platform that adapts", "to the way your business works."]}
          highlight={["connected"]}
          className="text-display mt-7 max-w-[17ch] text-balance text-navy"
        />

        <TextEffect as="p" per="word" preset="fade-in-blur" delay={0.55} speedReveal={2.4} className="text-lead mt-6 max-w-[56ch] text-muted">
          Bring customers, finance, people, commerce, projects, service, operations, AI and industry workflows into one connected workspace.
        </TextEffect>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <ButtonLink href="/platform" size="lg" arrow magnetic>
            Explore Platform
          </ButtonLink>
          <ButtonLink href={site.demoHref} size="lg" variant="secondary">
            Book a Demo
          </ButtonLink>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[13px] text-muted"
        >
          {["Flexible applications", "Connected workflows", "Industry-specific solutions", "AI built across the platform"].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-brand" aria-hidden />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Product visual */}
      <div className="container-x mt-14 md:mt-20">
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.95 }}>
            <div className="relative rounded-[20px]">
              <LauncherMock apps={HOME_APPS} readable />
              <div className="pointer-events-none absolute inset-0 rounded-[20px] max-sm:hidden">
                <BorderBeam size={180} duration={12} colorFrom="#2563eb" colorTo="#93c5fd" borderWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Two restrained supporting previews (large desktop only) */}
          <motion.div className="absolute -left-12 bottom-[14%] hidden w-[230px] xl:block" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}>
            <AppChip product={productById("finance")!} />
          </motion.div>
          <motion.div className="absolute -right-12 top-[22%] hidden w-[230px] xl:block" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 1.4 }}>
            <AppChip product={productById("projects")!} />
          </motion.div>
        </div>
      </div>

      <div className="relative pb-16 pt-14 md:pb-20">
        <p className="mb-5 text-center text-[13px] text-muted">7 Business Applications. 2 AI Products. 6 Industry Solutions. One connected platform.</p>
        <AppMarquee />
      </div>
    </section>
  );
}
