"use client";

import Link from "next/link";
import { site } from "@/data/site";

/** Persistent bottom-right "Book a demo" pill. */
export function FloatingDemo() {
  return (
    <Link href={site.demoHref} className="pill pill-dark fixed bottom-5 right-5 z-40 h-[50px] px-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)] max-sm:bottom-4 max-sm:right-4">
      Book a demo
    </Link>
  );
}
