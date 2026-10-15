"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

/** Persistent bottom-right "Book a demo" pill. */
export function FloatingDemo() {
  const pathname = usePathname();
  if (pathname === "/book-demo" || pathname === "/contact") return null;
  return (
    <Link href={site.demoHref} className="pill pill-dark fixed bottom-5 right-5 z-40 h-[50px] border border-white/15 px-6 max-sm:bottom-3 max-sm:right-3 max-sm:h-11 max-sm:px-5">
      Book a demo
    </Link>
  );
}
