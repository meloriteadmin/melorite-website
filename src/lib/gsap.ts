"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers ScrollTrigger once and keeps it in sync with Lenis. Import this only
 * from components that run scroll-driven GSAP sequences so GSAP stays out of
 * pages that don't need it.
 */
export function getGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = window.__lenis;
    if (lenis) lenis.on("scroll", ScrollTrigger.update);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
