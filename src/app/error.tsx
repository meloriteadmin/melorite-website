"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="rail-inner min-h-[60vh] py-20"><h1 className="h-section">We couldn’t load this page.</h1><p className="mt-5 max-w-[50ch] leading-relaxed">Please try again. You can also explore our products or contact the Melorite team.</p><div className="mt-8 flex flex-wrap gap-4"><button className="pill pill-dark" onClick={reset}>Try again</button><Link className="pill pill-glass" href="/products">Explore products</Link><Link className="pill pill-glass" href="/contact">Contact us</Link></div></section>;
}
