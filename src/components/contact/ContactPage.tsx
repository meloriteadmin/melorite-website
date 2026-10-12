import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { startSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "./ContactForm";

export function ContactPage({ type = "demo" }: { type?: string }) {
  return (
    <PageTransition>
      <PageHero label="Contact" title={type === "demo" ? "Let’s build your Melorite workspace." : "Let’s discuss your business."} body="Book a free demo and we’ll walk you through the product made for your business, using your own way of working. No pressure. Just a friendly conversation." variant="glow" tint="#dcddfd" cta={false} />
      <section id="contact" data-nav="light" className="rails rails-light scroll-mt-16 bg-[#f6f7fe] py-[clamp(56px,7vw,110px)] text-[#111735]">
        <div className="rail-inner grid gap-12 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <Reveal><h2 className="h-card max-w-[14ch]">Getting started is easy.</h2></Reveal>
            <ol className="mt-8 space-y-6">
              {startSteps.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <li className="flex gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/20 text-[12px] font-medium">0{i + 1}</span><div><h3 className="font-serif text-[22px] tracking-tight">{t}</h3><p className="mt-1 text-[15px] leading-snug text-black/55">{d}</p></div></li>
                </Reveal>
              ))}
            </ol>
            <div className="mt-10 space-y-3 border-t border-black/10 pt-6 text-[15.5px]">
              {site.contact.phone && <a href={`tel:+91${site.contact.phone}`} className="flex items-center gap-3 hover:text-[#4b4fe0]"><Phone className="size-4 text-[#5f63f2]" />+91 {site.contact.phone}</a>}
              {site.contact.email && <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-[#4b4fe0]"><Mail className="size-4 text-[#5f63f2]" />{site.contact.email}</a>}
            </div>
          </div>
          <Reveal><ContactForm defaultType={type} /></Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
