import Link from "next/link";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { Logo } from "@/components/shared/Logo";

const icons: Record<string, React.ReactNode> = {
  Facebook: <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1Z" />,
  Instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.2" cy="6.8" r="1.1" /></>,
  LinkedIn: <path d="M5.2 8.8h3V19h-3V8.8Zm1.5-4.6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 8.8h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.1 0 3.7 2 3.7 4.7V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H10V8.8Z" />,
};

const columns = [
  { title: "Products", links: products.map((p) => [p.short, `/products/${p.slug}`]) },
  { title: "Resources", links: [["Blog", "/resources/blog"], ["Guides", "/resources/guides"], ["Case Studies", "/resources/case-studies"]] },
  { title: "Company", links: [["About Melorite", "/company"], ["Contact", "/contact"]] },
  { title: "Get started", links: [["Book a demo", site.demoHref], ["Contact sales", site.salesHref], ["Custom Solutions", "/custom-solutions"]] },
] as { title: string; links: string[][] }[];

export function Footer() {
  const legal = [
    { label: "Privacy policy", href: process.env.NEXT_PUBLIC_PRIVACY_URL },
    { label: "Terms and conditions", href: process.env.NEXT_PUBLIC_TERMS_URL },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));
  const cols = [...columns, ...(legal.length ? [{ title: "Legal", links: legal.map((l) => [l.label, l.href]) }] : [])];

  return (
    <footer data-nav="light" className="relative overflow-hidden border-t border-[#e4e3df] bg-[#fafaf8] text-[#111735]">
      <div className="mx-auto max-w-[1400px] px-5 pt-[clamp(48px,6vw,88px)] md:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="col-span-full lg:col-span-1">
            <Logo className="h-[28px]" />
            <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-[#111735]/55">Software that fits your business</p>
            <ul className="mt-6 flex items-center gap-1 -ml-2">
              {site.social.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-9 place-items-center rounded-lg text-[#111735]/60 transition-colors hover:text-[#4b4fe0]">
                    <svg viewBox="0 0 24 24" className="size-[20px]" fill="currentColor" aria-hidden>{icons[label]}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="text-[12px] font-medium uppercase tracking-[.08em] text-[#111735]/45">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label + href}>
                    <Link href={href} {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[15px] text-[#111735]/70 transition-colors hover:text-[#4b4fe0]">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[#e4e3df] pt-6 text-[13px] text-[#111735]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Melorite. All rights reserved.</p>
          {(site.contact.email || site.contact.phone) && <p className="flex flex-wrap items-center gap-x-3 gap-y-1">{site.contact.email && <a className="hover:text-[#111735]" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>}{site.contact.email && site.contact.phone && <span aria-hidden>·</span>}{site.contact.phone && <a className="hover:text-[#111735]" href={`tel:+91${site.contact.phone}`}>+91 {site.contact.phone}</a>}</p>}
        </div>
      </div>
      <div aria-hidden className="footer-wordmark relative mt-6 select-none overflow-hidden px-[2vw] pb-28 text-center">melorite</div>
    </footer>
  );
}
