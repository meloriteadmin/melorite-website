import { ViewTransition } from "react";

/**
 * Subtle cross-fade between routes via React's ViewTransition (browser View
 * Transitions API). Browsers without support navigate normally. Placed in each
 * page — layouts persist and would never trigger enter/exit.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-fade" exit="page-fade" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
