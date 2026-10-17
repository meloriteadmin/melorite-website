import Link from "next/link";
import { ArrowUpRight, Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users } from "lucide-react";
import { site } from "@/data/site";
import { ProductShowcase } from "./ProductShowcase";

const teams = [[Users, "Sales teams"], [Building2, "Real estate"], [Stethoscope, "Clinics"], [Megaphone, "Agencies"], [ShoppingBag, "Online sellers"], [Headset, "AI calling"]] as const;

export function Hero() {
  return (
    <section data-nav="light" className="eleven-hero">
      <div className="rail-inner">
        <div className="eleven-hero-heading">
          <div>
            <h1>Bring your business<br className="hidden sm:block" /> together.</h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={site.demoHref} className="pill pill-dark">Book a demo</Link>
              <Link href="/products" className="pill pill-glass">Explore products <ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
          <p>One connected platform for your customers, your team, and everything in between. Discover purpose-built software for sales, real estate, clinics, agencies, commerce, and AI calling.</p>
        </div>
        <ProductShowcase />
        <div className="eleven-team-wall">
          <p>Built for the people moving business forward</p>
          <div>{teams.map(([Icon, name]) => <Link href="/products" key={name}><Icon size={23} strokeWidth={1.5} /><span>{name}</span></Link>)}</div>
        </div>
      </div>
    </section>
  );
}
