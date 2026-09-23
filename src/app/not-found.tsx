import Link from "next/link";
import { buttonClasses } from "@/components/shared/Button";
import { LogoMark } from "@/components/shared/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-center justify-center pt-[72px] text-center">
      <LogoMark className="h-12 w-auto" />
      <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-brand">Error 404</p>
      <h1 className="text-h2 mt-4 text-navy">This page isn&apos;t connected.</h1>
      <p className="text-lead mt-4 max-w-[44ch] text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonClasses("primary", "md")}>Back to home</Link>
        <Link href="/products" className={buttonClasses("secondary", "md")}>Explore products</Link>
      </div>
    </section>
  );
}
