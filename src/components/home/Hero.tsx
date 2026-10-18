import Link from "next/link";
import { ArrowUpRight, Building2, Headset, Megaphone, ShoppingBag, Stethoscope, Users } from "lucide-react";
import { site } from "@/data/site";
import { ProductShowcase } from "./ProductShowcase";

const teams = [[Users, "Sales teams"], [Building2, "Real estate"], [Stethoscope, "Clinics"], [Megaphone, "Agencies"], [ShoppingBag, "Online sellers"], [Headset, "AI calling"]] as const;

export function Hero() {
  return (
    <section data-nav="light" className="eleven-hero melorite-opening">
      <div className="opening-intro">
        <div className="rail-inner">
          <div className="opening-heading">
            <h1>Bring your business together.</h1>
            <p className="opening-description">Software that fits your business.<br />Built for your people. Connected to the way you work.</p>
            <div className="opening-actions">
              <Link href={site.demoHref} className="pill pill-dark">Book a demo</Link>
              <Link href="/products" className="pill pill-glass">Explore products <ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
          <div className="eleven-team-wall">
            <p>Built for the people moving business forward</p>
            <div>{teams.map(([Icon, name]) => <Link href="/products" key={name}><Icon size={23} strokeWidth={1.5} /><span>{name}</span></Link>)}</div>
          </div>
        </div>
      </div>
      <div className="opening-products">
        <div className="rail-inner">
          <div className="opening-products-heading">
            <h2 className="h-section">The software your<br />business builds on.</h2>
            <p className="opening-products-description">Find your workspace. Make it work for you.</p>
          </div>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}
