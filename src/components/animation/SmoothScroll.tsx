"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Global providers: Lenis smooth scrolling (disabled for reduced motion and
 * coarse pointers, where native scrolling feels better) and Motion's
 * reduced-motion handling. GSAP components hook into `window.__lenis`.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -88 },
      lerp: 0.11,
      wheelMultiplier: 1,
      prevent: (node) => node.closest("[data-lenis-prevent], dialog, [role=dialog]") !== null,
    });
    window.__lenis = lenis;
    return () => {
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Keep Lenis in sync with client-side navigations (scroll to top or to the hash target).
  // Skipped on first load so the browser's own scroll restoration and hash handling apply.
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const lenis = window.__lenis;
    if (!lenis) return;
    const hash = window.location.hash;
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) lenis.scrollTo(el as HTMLElement, { offset: -88, immediate: true, force: true });
      } else {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
      lenis.resize();
    });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
