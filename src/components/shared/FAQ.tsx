import type { Faq } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { TextLink } from "./Button";
import { site } from "@/data/site";

export function FAQ({ items, title = ["Questions,", "answered."], eyebrow = "FAQ", id }: { items: Faq[]; title?: string[]; eyebrow?: string; id?: string }) {
  return (
    <section id={id} className="section-y border-t border-line bg-paper">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={eyebrow} title={title} description="Can't find what you're looking for? Our team is happy to help." />
            <Reveal delay={0.2} className="mt-6">
              <TextLink href={site.salesHref}>Contact our team</TextLink>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6" y={16}>
          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-[16px] border border-line bg-white px-6 md:px-8">
            {items.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-line">
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
