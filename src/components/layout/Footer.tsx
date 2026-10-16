import Link from "next/link";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { Logo } from "@/components/shared/Logo";

const columns = [
  { title: "Products", links: products.map((p) => [p.short, `/products/${p.slug}`]) },
  { title: "Explore", links: [["Platform", "/platform"], ["Custom Solutions", "/custom-solutions"], ["Resources", "/resources"], ["Blog", "/resources/blog"], ["Guides", "/resources/guides"], ["Case Studies", "/resources/case-studies"]] },
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
    <footer data-nav="light" className="bg-[#f4f5ff] text-[#111735]">
      <div className="border-t border-[#111735]/10 px-5 pb-6 pt-[clamp(56px,7vw,100px)] md:px-[clamp(32px,7vw,108px)]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.4fr]">
          <div><Logo className="h-[26px]" /><p className="mt-5 max-w-[30ch] text-[13.5px] leading-relaxed text-black/50">{site.tagline}</p></div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-[13.5px] font-medium">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label + href}>
                      <Link href={href} {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[14px] text-black/55 transition-colors hover:text-black">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[#111735]/10 pt-6 text-[13px] text-black/45">
          <p>© {new Date().getFullYear()} Melorite. All rights reserved.</p>
          <a href="#main" className="transition-colors hover:text-black">Back to top ↑</a>
        </div>
      </div>
      <div aria-hidden className="footer-wordmark select-none overflow-hidden px-[2vw] text-center">melorite</div>
    </footer>
  );
}
