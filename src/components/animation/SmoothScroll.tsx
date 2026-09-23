"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { MotionConfig, MotionGlobalConfig } from "motion/react";

declare global {
  interface Window {
    /** Reserved for legacy in-page links; native scrolling is used site-wide. */
    __lenis?: Lenis;
  }
}

/** Dev-only QA flag (`?qa`): complete Motion animations instantly and use native scroll, for screenshots/tests. */
const QA = typeof window !== "undefined" && process.env.NODE_ENV !== "production" && /[?&]qa\b/.test(window.location.search);
if (QA) MotionGlobalConfig.skipAnimations = true;

/**
 * Global motion provider. Native browser scrolling is deliberately used here:
 * JavaScript scroll interpolation can fight trackpad momentum and rubber-band
 * scrolling, producing a visible up/down vibration on rapid input.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  // Keep client-side navigation predictable without altering wheel/trackpad input.
  // Skipped on first load so the browser's own scroll restoration and hash handling apply.
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const hash = window.location.hash;
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
