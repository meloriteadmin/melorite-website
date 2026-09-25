import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { businessApplications, industrySolutions } from "@/data/catalog";
import { site } from "@/data/site";
import { Logo } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/shared/Button";
import { Separator } from "@/components/ui/separator";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative inline-flex text-[14px] text-slate-500 transition-colors duration-200 hover:text-navy focus-visible:text-navy focus-visible:outline-none">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" aria-hidden />
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
    { title: "Business Applications", links: [...businessApplications.slice(0, 5).map((p) => ({ label: p.name, href: `/business-applications/${p.slug}` })), { label: "All applications", href: "/business-applications" }] },
    { title: "Industry Solutions", links: [...industrySolutions.slice(0, 5).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })), { label: "All solutions", href: "/industries" }] },
    footerNav[1],
  ];

  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="container-x pt-12 md:pt-16">
        <div className="flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Logo className="h-[26px]" />
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href={site.salesHref} variant="outline" size="sm">Contact Sales</ButtonLink>
            <ButtonLink href={site.demoHref} arrow size="sm">Book a Demo</ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,2.2fr)] lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold text-navy">Business software that works together.</p>
            <p className="mt-2 max-w-[27ch] text-[13px] leading-relaxed text-muted">Choose the applications you need today and add more as your business grows.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-semibold text-navy">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-full flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-muted">Have a question about your setup?</p>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {site.contact.email && (
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 text-[14px] text-slate-500 hover:text-navy">
                      <Mail className="size-3.5" aria-hidden /> {site.contact.email}
                    </a>
                  </li>
                )}
                {site.contact.phone && (
                  <li>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-[14px] text-slate-500 hover:text-navy">
                      <Phone className="size-3.5" aria-hidden /> {site.contact.phone}
                    </a>
                  </li>
                )}
                <li>
                  <FooterLink href="/contact">Send an enquiry</FooterLink>
                </li>
                <li>
                  <FooterLink href={site.demoHref}>Request a demo</FooterLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Separator className="bg-line" />
        <div className="flex flex-col gap-4 py-7 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Melorite. All rights reserved.</p>
          {(legal.length > 0 || site.social.length > 0) && (
            <ul className="flex flex-wrap gap-6">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-navy">
                    {l.label}
                  </a>
                </li>
              ))}
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-navy">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
