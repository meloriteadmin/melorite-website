import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Talk to our team | Melorite" };

const TOPICS = [
  ["Business Apps", "Start with CRM, finance, HR, projects, service, documents, automation or analytics."],
  ["Industry Solutions", "Discuss a connected operating model for your sector without a separate software stack."],
  ["Implementation", "Plan service selection, client onboarding, data migration and go-live."],
];

export default function ContactPage() {
  return <><section className="page-hero"><div className="container"><Reveal as="div"><span className="eyebrow">Talk to our team</span><h1>Start with the business problem. Build the right platform around it.</h1><p className="lede">Tell us about the workflows, teams or industry operations you want to connect. We will help you identify a focused starting point and a practical route to grow.</p></Reveal></div></section><section className="no-padding"><div className="container"><Reveal as="div" className="contact-form-block"><div><h2>Let’s shape your Melorite workspace.</h2><p className="lede">Melorite is quotation-led and client-specific. We start with your requirements, then recommend the right services and implementation path.</p></div><ContactForm /></Reveal></div></section><section className="bg-sand"><div className="container"><Reveal as="div" className="section-head"><span className="eyebrow">What we can discuss</span><h2>A focused first conversation.</h2></Reveal><Reveal as="div" stagger className="feature-grid">{TOPICS.map(([title, body]) => <article className="feature-card" key={title}><div className="feature-icon">→</div><h3>{title}</h3><p>{body}</p></article>)}</Reveal></div></section></>;
}
