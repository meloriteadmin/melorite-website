"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { LazyMotion, MotionConfig, MotionGlobalConfig } from "motion/react";

const loadMotionFeatures = () => import("./motion-features").then((module) => module.default);

declare global {
  interface Window {
    /** Active Lenis instance (absent for reduced-motion users). */
    __lenis?: Lenis;
  }
}

/** Dev-only QA flag (`?qa`): complete Motion animations instantly and use native scroll, for screenshots/tests. */
const QA = typeof window !== "undefined" && process.env.NODE_ENV !== "production" && /[?&]qa\b/.test(window.location.search);
if (QA) MotionGlobalConfig.skipAnimations = true;

/** Share motion preferences and load animation features after hydration. */
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  // Client-side navigations land at the top (or at the hash target). Skipped on first load.
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const hash = window.location.hash;
    const frame = requestAnimationFrame(() => {
      let el: HTMLElement | null = null;
      try {
        el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      } catch {
        // A malformed URL fragment should not interrupt navigation.
      }
      const lenis = window.__lenis;
      if (el && lenis) lenis.scrollTo(el as HTMLElement, { immediate: true, offset: -64 });
      else if (el) el.scrollIntoView({ block: "start" });
      else if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <LazyMotion features={loadMotionFeatures} strict><MotionConfig reducedMotion="user">{children}</MotionConfig></LazyMotion>;
}
