"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { MotionConfig, MotionGlobalConfig } from "motion/react";

declare global {
  interface Window {
    /** Active Lenis instance (absent for reduced-motion users). */
    __lenis?: Lenis;
  }
}

/** Dev-only QA flag (`?qa`): complete Motion animations instantly and use native scroll, for screenshots/tests. */
const QA = typeof window !== "undefined" && process.env.NODE_ENV !== "production" && /[?&]qa\b/.test(window.location.search);
if (QA) MotionGlobalConfig.skipAnimations = true;

/**
 * Global motion provider. Lenis gives eased, momentum-style page scrolling; it is
 * disabled for reduced-motion users and in `?qa` mode. Dropdowns and the mobile
 * drawer opt out with `data-lenis-prevent` so they keep native scrolling.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  // Client-side navigations land at the top (or at the hash target). Skipped on first load.
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const hash = window.location.hash;
    requestAnimationFrame(() => {
      const el = hash ? document.querySelector(hash) : null;
      const lenis = window.__lenis;
      if (el && lenis) lenis.scrollTo(el as HTMLElement, { immediate: true, offset: -64 });
      else if (el) el.scrollIntoView({ block: "start" });
      else if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
