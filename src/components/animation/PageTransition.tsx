/**
 * Animate only the route content as it enters. A document-level View Transition
 * snapshots fixed UI as well, which can make the persistent navbar appear to
 * reload even though the shared layout never unmounts.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
