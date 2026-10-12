import Link from "next/link";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { Logo } from "@/components/shared/Logo";

const columns = [
  { title: "Products", links: [...products.map((p) => [p.name, `/products/${p.slug}`]), ["All products", "/products"]] },
  { title: "Company", links: [["About us", "/company"], ["Why Melorite", "/company#why"], ["Custom solutions", "/custom-solutions"], ["Contact", "/contact"]] },
  { title: "Get started", links: [["Book a demo", site.demoHref], ["Talk to sales", site.salesHref]] },
  { title: "Connect", links: [...(site.contact.email ? [[site.contact.email, `mailto:${site.contact.email}`]] : []), ...(site.contact.phone ? [[site.contact.phone, `tel:${site.contact.phone.replace(/\s/g, "")}`]] : []), ...site.social.map((s) => [s.label, s.href])] },
] as { title: string; links: string[][] }[];

export function Footer() {
  const legal = [
    { label: "Privacy policy", href: process.env.NEXT_PUBLIC_PRIVACY_URL },
    { label: "Terms and conditions", href: process.env.NEXT_PUBLIC_TERMS_URL },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));
  const cols = [...columns, ...(legal.length ? [{ title: "Legal", links: legal.map((l) => [l.label, l.href]) }] : [])];

  return (
    <footer data-nav="light" className="bg-[#f6f7fe] text-[#111735]">
      <div className="px-5 pb-10 pt-[clamp(56px,7vw,100px)] md:px-[clamp(32px,7vw,108px)]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.4fr]">
          <div><Logo className="h-[26px]" /><p className="mt-5 max-w-[30ch] text-[13.5px] leading-relaxed text-black/50">{site.tagline}</p><p className="mt-6 text-[13px] text-black/40">© {new Date().getFullYear()} Melorite</p></div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-[13.5px] font-medium">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label + href}>
                      <Link href={href} className="text-[14px] text-black/55 transition-colors hover:text-black">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
