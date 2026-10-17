import Link from "next/link";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { Logo } from "@/components/shared/Logo";

const columns = [
  { title: "Products", links: products.map((p) => [p.short, `/products/${p.slug}`]) },
  { title: "Explore", links: [["Platform", "/platform"], ["Custom Solutions", "/custom-solutions"]] },
  { title: "Company", links: [["About", "/company"], ["Contact", "/contact"]] },
  { title: "Get started", links: [["Book a demo", site.demoHref], ["Contact sales", site.salesHref]] },
] as { title: string; links: string[][] }[];

export function Footer() {
  const legal = [
    { label: "Privacy policy", href: process.env.NEXT_PUBLIC_PRIVACY_URL },
    { label: "Terms and conditions", href: process.env.NEXT_PUBLIC_TERMS_URL },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));
  const cols = [...columns, ...(legal.length ? [{ title: "Legal", links: legal.map((l) => [l.label, l.href]) }] : [])];

  return (
    <footer data-nav="dark" className="relative mt-0 overflow-hidden  bg-[#0c1129] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_12%_0%,rgba(95,99,242,.45),transparent_65%),radial-gradient(600px_360px_at_95%_30%,rgba(193,79,160,.22),transparent_65%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-[clamp(48px,6vw,88px)] md:px-[clamp(32px,5vw,72px)]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.4fr]">
          <div><Logo white className="h-[26px]" /><p className="mt-5 max-w-[30ch] text-[14px] leading-relaxed text-white/55">{site.tagline}</p>
            <Link href={site.demoHref} className="pill pill-light mt-7">Book a demo</Link></div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[.14em] text-white/40">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label + href}>
                      <Link href={href} {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[14.5px] text-white/70 transition-colors hover:text-white">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45">
          <p>© {new Date().getFullYear()} Melorite. All rights reserved.</p>
          <a href="#main" className="transition-colors hover:text-white">Back to top ↑</a>
        </div>
      </div>
      <div aria-hidden className="footer-wordmark relative select-none overflow-hidden px-[2vw] pb-24 text-center">melorite</div>
    </footer>
  );
}
