import { CalendarCheck, MessagesSquare, Route } from "lucide-react";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/shared/Button";
import { ConnectionField } from "@/components/animation/ConnectionField";
import { ContactForm } from "./ContactForm";

export function ContactIntro() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-navy text-white">
        <ConnectionField className="opacity-50" />
        <div className="container-x relative py-24 md:py-32">
          <Reveal y={10}>
            <Eyebrow dark>Let&apos;s connect</Eyebrow>
          </Reveal>
          <TextReveal as="h2" lines={["Your business has", "its own way of working.", "Let's talk about it."]} className="text-h1 mt-6 max-w-[22ch] text-white" />
          <Reveal delay={0.2}>
            <p className="text-lead mt-7 max-w-[52ch] text-white/65">Whether you&apos;re exploring a single application or a more connected business platform, tell us what you&apos;re looking for.</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="?enquiry=demo#contact" size="lg" arrow magnetic>
              Book a Demo
            </ButtonLink>
            <ButtonLink href="?enquiry=product#contact" size="lg" variant="outline-light">
              Contact Sales
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const NEXT = [
  { icon: MessagesSquare, title: "Tell us about your business", body: "Share how you work today and which applications interest you." },
  { icon: Route, title: "We review your requirements", body: "Our team looks at your processes and the combination of apps that fits." },
  { icon: CalendarCheck, title: "A tailored walkthrough", body: "We arrange a demonstration focused on your use cases and prepare a quotation." },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-y scroll-mt-20">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal y={10}>
              <Eyebrow>Contact &amp; demo request</Eyebrow>
            </Reveal>
            <TextReveal as="h2" lines={["Start the", "conversation."]} className="text-h2 mt-6 text-navy" />
            <Reveal delay={0.15}>
              <p className="text-lead mt-6 max-w-[42ch] text-muted">Tell us a little about your organization. Melorite is offered through a quotation tailored to the applications and scope you need.</p>
            </Reveal>
            <ol className="mt-10 space-y-6">
              {NEXT.map(({ icon: I, title, body }, i) => (
                <Reveal key={title} delay={0.1 * i} y={12}>
                  <li className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-brand-50 text-brand">
                      <I className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold text-navy">{title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            {(site.contact.email || site.contact.phone) && (
              <div className="mt-10 space-y-1.5 border-t border-line pt-6 text-[15px]">
                {site.contact.email && (
                  <a href={`mailto:${site.contact.email}`} className="block font-medium text-navy hover:text-brand">
                    {site.contact.email}
                  </a>
                )}
                {site.contact.phone && (
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="block text-muted hover:text-navy">
                    {site.contact.phone}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
