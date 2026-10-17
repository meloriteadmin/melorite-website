import { Check, Headphones, Mail, MessageSquare, Phone, Shapes } from "lucide-react";
import { site } from "@/data/site";
import { startSteps } from "@/data/products";
import { PageTransition } from "@/components/animation/PageTransition";
import { Reveal } from "@/components/animation/Reveal";
import { InnerHero } from "@/components/site/InnerHero";
import { ContactForm } from "./ContactForm";
import Timeline from "@/components/ui/timeline";

export function ContactPage({ type = "demo" }: { type?: string }) {
  const isDemo = type === "demo";
  const enquiryPaths = [
    [Shapes, "Product enquiry", "Choose the Melorite product that best matches your business workflow."],
    [MessageSquare, "Custom solution", "Discuss a workflow, portal, integration or complete application."],
    [Headphones, "Support", "Existing customers can contact the Melorite team using their usual support channel."],
    [Mail, "General enquiry", "For partnerships, company questions and anything that does not fit elsewhere."],
  ] as const;
  return (
    <PageTransition>
      <InnerHero label={isDemo ? "Book a demo" : "Contact"} title={isDemo ? "See Melorite in your workflow." : "Let’s discuss your business."} body={isDemo ? "Tell us how the work runs today. We’ll focus the conversation on the product, process and questions relevant to your team." : "Talk to Melorite about a product, custom solution, support question or general enquiry."} mesh="calling">
        <div id="contact" className="scroll-mt-20">
          <div className="grid gap-6 text-left lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
          <div className="glass glass-sheen rounded-[14px] p-7 sm:p-9">
            <Reveal><p className="eyebrow-pill">{isDemo ? "A useful conversation" : "Talk to our team"}</p><h2 className="h-card mt-5 max-w-[14ch]">{isDemo ? "Bring the process that needs to work better." : "Start with the right kind of enquiry."}</h2><p className="mt-5 max-w-[38ch] text-[16px] leading-[1.6] text-black/58">{isDemo ? "We’ll understand the current workflow, show the most relevant parts of Melorite and explain a sensible next step." : "Share enough context for us to route your message. We’ll respond using the contact details you provide."}</p></Reveal>
            {isDemo && <div className="mt-8 space-y-4">{["See the product in the context of your business", "Ask about setup, workflow and fit", "Leave with a clear next step—without pressure"].map((benefit) => <p key={benefit} className="flex gap-3 text-[15.5px]"><Check className="size-4 shrink-0 text-[#5f63f2]" />{benefit}</p>)}</div>}
            <div className="mt-10 space-y-3 border-t border-black/10 pt-6 text-[15.5px]">
              {site.contact.phone && <a href={`tel:+91${site.contact.phone}`} className="flex items-center gap-3 hover:text-[#4b4fe0]"><Phone className="size-4 text-[#5f63f2]" />+91 {site.contact.phone}</a>}
              {site.contact.email && <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-[#4b4fe0]"><Mail className="size-4 text-[#5f63f2]" />{site.contact.email}</a>}
            </div>
          </div>
          <Reveal><ContactForm defaultType={type} /></Reveal>
        </div>
        </div>
      </InnerHero>
      {isDemo ? <Timeline eyebrow="What happens next" title="Three straightforward steps." periodLabel="Your request to a useful demo" items={startSteps.map(([, body], i) => ({ id: `demo-step-${i + 1}`, label: `Step ${String(i + 1).padStart(2, "0")}`, title: i === 0 ? "Tell us about your business" : i === 1 ? "We understand your workflow" : "We show the relevant product", content: body }))} /> : <section data-nav="light" className="rails rails-light bg-[#f4f5ff] py-[clamp(72px,9vw,112px)] text-[#111735]"><div className="rail-inner mx-auto max-w-[1400px]"><Reveal><p className="eyebrow-pill">How we can help</p><h2 className="h-section mt-5">Choose the closest starting point.</h2></Reveal><div className="mt-10 grid card-grid md:grid-cols-2 lg:grid-cols-4">{enquiryPaths.map(([Icon, title, body], i) => <Reveal key={title} delay={i * .04} className="min-h-56 card p-7"><Icon className="size-5 text-[#5f63f2]" /><h3 className="mt-9 text-[22px] font-semibold tracking-[-.03em]">{title}</h3><p className="mt-4 text-[14.5px] leading-[1.55] text-[#111735]/55">{body}</p></Reveal>)}</div></div></section>}
    </PageTransition>
  );
}
