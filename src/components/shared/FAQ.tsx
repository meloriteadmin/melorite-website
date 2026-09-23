"use client";

import { Accordion } from "radix-ui";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function FAQ({ items, title = ["Questions,", "answered."], eyebrow = "FAQ", id }: { items: Faq[]; title?: string[]; eyebrow?: string; id?: string }) {
  return (
    <section id={id} className="section-y bg-paper">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={eyebrow} title={title} description="Can't find what you're looking for? Our team is happy to help." />
          </div>
        </div>
        <RevealGroup className="lg:col-span-7 lg:col-start-6">
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="divide-y divide-line border-y border-line">
            {items.map((f, i) => (
              <RevealItem key={f.q}>
                <Accordion.Item value={`item-${i}`} className="group">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium tracking-[-0.015em] text-navy transition-colors hover:text-brand md:text-[19px]">
                      {f.q}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-line-strong transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-brand group-data-[state=open]:text-white group-data-[state=open]:ring-brand">
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[acc-up_300ms_cubic-bezier(0.16,1,0.3,1)] data-[state=open]:animate-[acc-down_400ms_cubic-bezier(0.16,1,0.3,1)]">
                    <p className="max-w-[62ch] pb-7 pr-12 text-[15.5px] leading-relaxed text-muted">{f.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </RevealItem>
            ))}
          </Accordion.Root>
        </RevealGroup>
      </div>
    </section>
  );
}
