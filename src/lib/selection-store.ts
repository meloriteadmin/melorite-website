"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny cross-component store for "currently selected" ids (e.g. the product the
 * showcase displays), so separate sections can coordinate without a provider.
 */
export function createSelection(initial: string) {
  let value = initial;
  const listeners = new Set<() => void>();
  return {
    get: () => value,
    set: (v: string) => {
      value = v;
      listeners.forEach((l) => l());
    },
    subscribe: (l: () => void) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
}

export function useSelection(store: ReturnType<typeof createSelection>) {
  return useSyncExternalStore(store.subscribe, store.get, store.get);
}

export const productSelection = createSelection("crm");
export const industrySelection = createSelection("hospital");

/** Scroll to an element id, via Lenis when active. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -88 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}
