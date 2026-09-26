"use client";

import { motion } from "motion/react";
import { productById } from "@/data/products";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";
import { TextReveal } from "@/components/animation/TextReveal";
import { TextEffect } from "@/components/ui/text-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { ButtonLink } from "@/components/shared/Button";
import { LauncherMock } from "@/components/mockups/WorkspaceMock";
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
      {/* A quiet neutral field lets the product interface lead. */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-paper" />
      </div>

      <div className="container-x marketing-grid items-start pt-10 md:pt-18">
        <TextReveal
          as="h1"
          by="word"
          trigger="mount"
          delay={0.15}
          lines={["One connected", "business platform."]}
          highlight={["connected"]}
          className="text-display col-span-full max-w-[12ch] text-balance text-navy lg:col-span-9"
        />

        <TextEffect as="p" per="word" preset="fade-in-blur" delay={0.55} speedReveal={2.4} className="text-lead col-span-full mt-8 max-w-[48ch] text-muted lg:col-span-5">
          Run the work that moves your business forward from one connected workspace.
        </TextEffect>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          className="col-span-full mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:col-span-5"
        >
          <ButtonLink href="/platform" size="lg" arrow magnetic>
            Explore Platform
          </ButtonLink>
          <ButtonLink href={site.demoHref} size="lg" variant="secondary">
            Book a Demo
          </ButtonLink>
        </motion.div>
      </div>

      {/* Product visual */}
      <div className="container-x mt-18 md:mt-28">
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.95 }}>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-ui">
              <LauncherMock apps={HOME_APPS} readable />
              <div className="pointer-events-none absolute inset-0 rounded-2xl max-sm:hidden">
                <BorderBeam size={180} duration={12} colorFrom="#2563eb" colorTo="#bfdbfe" borderWidth={1} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="relative pb-20 pt-16 md:pb-28 md:pt-20">
        <p className="container-x mb-7 text-[13px] text-muted">7 Business Applications. 2 AI Products. 6 Industry Solutions. One connected platform.</p>
        <AppMarquee />
      </div>
    </section>
  );
}
