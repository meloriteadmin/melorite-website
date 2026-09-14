import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";

export const metadata = { title: "Connected CRM & sales | Melorite" };

export default function AiAgentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Melorite &nbsp;&rsaquo;&nbsp; Business apps</span>
            <h1>CRM and sales,<br />connected to your business</h1>
            <p className="lede">Give your teams one place to manage customers, opportunities, activities, and the workflows that move revenue forward.</p>
            <div className="btn-row">
              <a href="#" className="btn">Explore CRM</a>
              <a href="#" className="btn btn-outline">Talk to us</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <Reveal as="div" stagger className="stats-grid cols-3">
            <StatCounter label="Customer view" value={1} suffix="" desc="connected record for every account and contact" />
            <StatCounter label="Sales process" value={1} suffix="" desc="shared pipeline across teams and locations" />
            <StatCounter label="Business context" value={360} suffix="°" desc="visibility from first conversation to delivery" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/melorite/crm-sales.png" alt="Melorite CRM workspace" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Every customer detail,<br />in the right place</h2>
              <p className="lede">Connect conversations, tasks, proposals, documents, and delivery information to the relationships your team manages every day.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Melorite lets us see the full customer journey without asking teams to work in disconnected systems.&rdquo;</p>
              <div className="byline"><strong>Commercial leader</strong>Growing services business</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black">
        <div className="container">
          <Reveal as="div" className="section-head left" style={{ color: "var(--white)" }}>
            <h2>Visibility you<br />can act on</h2>
            <p className="lede" style={{ color: "var(--grey)" }}>Sales data stays connected to finance, projects, support, and operations—so decisions are made with the full business context.</p>
          </Reveal>
          <Reveal as="div" stagger className="stats-grid cols-3" style={{ borderBottom: "none", color: "var(--white)" }}>
            <StatCounter label="One" value={1} suffix="" desc="shared source of customer information" />
            <StatCounter label="Live" value={1} suffix="" desc="connected pipeline and delivery view" />
            <StatCounter label="Better" value={100} suffix="%" desc="context for every customer decision" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split reverse">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/melorite/hero-platform.png" alt="Connected business workflows" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Built into your<br />daily workflows</h2>
              <p className="lede">Move work forward with sales workflows that connect customer activity to the people, finance, project, and operations apps your organisation uses.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Our customer teams work faster because the information they need is already connected to the process they are in.&rdquo;</p>
              <div className="byline"><strong>Operations director</strong>Multi-team organisation</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">A connected revenue foundation</span>
            <h2>Built for every<br />stage of growth</h2>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Flexible sales workflows</h3>
              <p>Configure the stages, approvals, activities, and handoffs that reflect how your business sells—without separating sales from the rest of the organisation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📎</div>
              <h3>Connected customer data</h3>
              <p>Keep the relationships, documents, offers, service history, and project context behind every customer in a single connected ecosystem.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>Reporting that reaches further</h3>
              <p>Understand pipeline health, sales performance, and customer activity alongside the operational and financial information that explains what happens next.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Imagine having a system that not only holds all the know-how your team has ever accumulated but also connects the dots in ways we might not see on our own.&rdquo;</p>
              <div className="byline"><strong>Johannes Sundlo</strong>HR Director, Ex-Spotify</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>No disconnected growth</h2>
            <p className="lede">Start with CRM and sales, then add the apps and industry configurations that make Melorite your central business platform.</p>
          </Reveal>
        </div>
      </section>

      <EnterpriseGradeBlock />
    </>
  );
}
