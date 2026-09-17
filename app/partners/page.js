import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Partner with Melorite" };

const TYPES = [
  ["Implementation partners", "Design, configure and support the right Melorite workspace for each client organisation."],
  ["Referral partners", "Introduce businesses with connected-platform needs and stay close to the customer journey."],
  ["Technology partners", "Create practical integrations with the services customers already rely on."],
];

const FOUNDATION = [
  ["Discover", "Understand a client’s operating model, current systems and priorities."],
  ["Select", "Shape the right combination of Business Apps and Industry Solutions."],
  ["Activate", "Provision one organisation and activate services through a focused implementation plan."],
  ["Grow", "Add capabilities through service amendments as the client’s needs evolve."],
];

export default function PartnersPage() {
  return <><section className="page-hero"><div className="container"><Reveal as="div"><span className="eyebrow">Melorite Partner Program</span><h1>Build connected business operations together.</h1><p className="lede">Melorite partners help organisations bring their Business Apps and Industry Solutions onto one shared platform foundation - without forcing a new system for every operational need.</p><div className="btn-row"><Link href="/contact" className="btn">Become a partner</Link><a href="#program" className="btn btn-outline">Explore the program</a></div></Reveal></div></section><section className="no-padding"><div className="container"><Reveal as="div" className="hero-media"><img src="/assets/img/melorite/product/platform-operations.png" alt="Melorite platform operations workspace" /></Reveal></div></section><section id="program"><div className="container"><Reveal as="div" className="section-head"><span className="eyebrow">Choose your path</span><h2>Partner in the way that fits your expertise.</h2><p className="lede">A simple, practical partnership model for teams committed to better client outcomes.</p></Reveal><Reveal as="div" stagger className="feature-grid">{TYPES.map(([title, body]) => <article className="feature-card" key={title}><div className="feature-icon">→</div><h3>{title}</h3><p>{body}</p></article>)}</Reveal></div></section><section className="bg-sand"><div className="container"><Reveal as="div" className="section-head left"><span className="eyebrow">How we work together</span><h2>A connected route from discovery to long-term value.</h2><p className="lede">The partner approach reflects Melorite’s client lifecycle: one organisation, a focused initial service selection, clear activation, and room to expand.</p></Reveal><div className="benefits-list">{FOUNDATION.map(([title, body], index) => <Reveal as="div" className="benefit-row" key={title}><div className="num">{String(index + 1).padStart(2, "0")}</div><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div></div></section><section><div className="container"><Reveal as="div" className="section-head"><span className="eyebrow">Made for capable teams</span><h2>Bring strategy, systems and execution into one conversation.</h2><p className="lede">We work with consultancies, implementation specialists, managed-service teams and technology providers who want to deliver useful systems - not another disconnected subscription.</p><Link href="/contact" className="btn" style={{ marginTop: "2.4rem" }}>Talk to the partnerships team</Link></Reveal></div></section></>;
}
