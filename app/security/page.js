import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = { title: "Security, audit and operational controls | Melorite" };

const FEATURES = [
  { icon: "◫", title: "Tenant isolation", body: "Each client organisation is provisioned as an isolated tenant, while the platform keeps shared domain services consistent." },
  { icon: "◌", title: "Identity and sessions", body: "Authentication, session handling and client workspace access belong to the shared platform core." },
  { icon: "✓", title: "Audit-ready activity", body: "Melorite is designed to make important platform events, service changes and operational actions traceable." },
  { icon: "↔", title: "Controlled integrations", body: "Integrations, APIs, webhooks and communication providers are managed as deliberate connections - not hidden handoffs." },
  { icon: "↻", title: "Operational visibility", body: "Jobs, queues, delivery issues, imports, exports and system health are part of the Control Center operating model." },
  { icon: "▣", title: "Shared file controls", body: "Files, attachments and generated documents are handled through a shared platform service rather than scattered app storage." },
];

const FAQS = [
  { q: "How is Melorite structured for multiple client organisations?", a: "The blueprint uses a multi-tenant architecture: every client has one isolated organisation workspace, while shared platform services provide consistent data, workflow and operational foundations." },
  { q: "How are additional services activated?", a: "A client can activate additional Business Apps or Industry Solutions in the same organisation through an approved service amendment or add-on. A separate client record is not required." },
  { q: "What operational controls are included in the platform design?", a: "The Control Center design includes client lifecycle visibility, service activation, jobs and queues, integrations and webhooks, storage and transfers, system health, audit and security controls." },
  { q: "How does Melorite handle product configuration?", a: "Core Business Apps, modules, features and Industry Solutions are code-owned product metadata. Administrators inspect the released ecosystem rather than creating separate product definitions manually." },
];

export default function SecurityPage() {
  return <><section className="page-hero"><div className="container"><Reveal as="div"><span className="eyebrow">Melorite platform core</span><h1>Security, audit and operational control by design.</h1><p className="lede">Melorite is specified around isolated client workspaces, shared platform services, traceable operations and deliberate service activation - the foundations a connected business platform needs.</p><div className="btn-row"><a href="/contact" className="btn">Talk to us</a></div></Reveal></div></section><section className="no-padding"><div className="container"><div className="feature-split"><Reveal as="div" className="feature-split-media"><img src="/assets/img/melorite/product/client-control-center.png" alt="Melorite client control centre" /></Reveal><Reveal as="div" className="feature-split-copy"><span className="eyebrow">Control Center</span><h2>One operational view across the platform.</h2><p className="lede">The Control Center is designed for Owner and Super Admin teams to see client lifecycle, active services, onboarding, renewals, jobs, integrations, storage, security events and operational attention points.</p></Reveal></div></div></section><section><div className="container"><Reveal as="div" stagger className="feature-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>{FEATURES.map((f) => <div className="feature-card" key={f.title}><div className="feature-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.body}</p></div>)}</Reveal></div></section><section className="bg-sand"><div className="container"><Reveal as="div" className="section-head"><h2>Questions about platform controls</h2></Reveal><Reveal as="div"><FAQAccordion items={FAQS} /></Reveal></div></section></>;
}
