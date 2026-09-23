"use client";
import { useCallback, useSyncExternalStore } from "react";

/** SSR-safe media query hook. Returns `fallback` on the server and during hydration. */
export function useMedia(query: string, fallback = false) {
  const subscribe = useCallback(
    (cb: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => fallback,
  );
}

export const useIsDesktop = () => useMedia("(min-width: 1024px)", true);
export const useFinePointer = () => useMedia("(hover: hover) and (pointer: fine)", false);
