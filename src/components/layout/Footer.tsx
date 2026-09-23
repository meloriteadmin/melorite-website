import Link from "next/link";
import { footerNav, productHref, solutionHref } from "@/data/navigation";
import { featuredProducts } from "@/data/products";
import { featuredIndustries } from "@/data/industries";
import { site } from "@/data/site";
import { Logo, LogoMark } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/shared/Button";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative inline-flex text-[14.5px] text-white/60 transition-colors duration-200 hover:text-white">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white/60 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" aria-hidden />
    </Link>
  );
}

export function Footer() {
  const legal = [
    { label: "Privacy Policy", href: process.env.NEXT_PUBLIC_PRIVACY_URL },
    { label: "Terms of Service", href: process.env.NEXT_PUBLIC_TERMS_URL },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  const columns = [
    footerNav[0],
    { title: "Products", links: [...featuredProducts.map((p) => ({ label: p.shortName, href: productHref(p.id) })), { label: "All products", href: "/products" }] },
    { title: "Solutions", links: [...featuredIndustries.slice(0, 5).map((i) => ({ label: i.name, href: solutionHref(i.id) })), { label: "All solutions", href: "/solutions" }] },
    footerNav[1],
  ];

  return (
    <footer className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[28px] bg-navy-900 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden />
        <div className="container-x relative pt-20 md:pt-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo white className="h-[30px]" />
              <p className="mt-6 max-w-[34ch] text-[17px] leading-relaxed tracking-[-0.01em] text-white/70">{site.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.demoHref} arrow>
                  Book a Demo
                </ButtonLink>
                <ButtonLink href={site.salesHref} variant="outline-light">
                  Contact Sales
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <FooterLink href={l.href}>{l.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {(site.contact.email || site.contact.phone) && (
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-8 text-[14.5px] text-white/60">
              {site.contact.email && (
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              )}
              {site.contact.phone && (
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.contact.phone}
                </a>
              )}
            </div>
          )}

          <div className="relative mt-16 select-none md:mt-24" aria-hidden>
            <div className="flex items-end gap-[3vw] opacity-[0.07]">
              <LogoMark className="h-[14vw] max-h-[190px] w-auto" color="#ffffff" />
              <span className="text-[17vw] font-semibold leading-[0.75] tracking-[-0.06em] lg:text-[min(17vw,240px)]">elorite</span>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 border-t border-white/10 py-7 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Melorite. All rights reserved.</p>
            <ul className="flex flex-wrap gap-6">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
