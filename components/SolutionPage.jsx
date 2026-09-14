import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const HAS_ICON = new Set([
  "teams", "sharepoint", "outlook", "slack", "google-drive", "box", "dropbox", "salesforce",
  "notion", "confluence", "zoom", "github", "jira", "zendesk", "linear", "google-calendar",
  "sap", "servicenow", "workday", "gmail", "google-meet", "hubspot", "figma", "airtable",
  "mixpanel", "intercom",
]);

const FAQS = [
  { q: "What is Melorite?", a: "Melorite is a unified, modular business platform. It brings together connected apps for core functions such as sales, finance, people, operations, support, documents, automation, analytics, and collaboration." },
  { q: "Can we start with a single app?", a: "Yes. Organisations can begin with the app that solves their immediate need, then add more Melorite apps as their teams, processes, and reporting requirements grow." },
  { q: "How do Melorite apps work together?", a: "Melorite apps are designed to share data and workflows, helping teams work from connected information instead of moving between disconnected tools and manual handoffs." },
  { q: "Does Melorite support industry-specific workflows?", a: "Yes. Melorite can be configured around the terminology, processes, controls, and operational needs of sectors such as real estate, healthcare, education, professional services, retail, manufacturing, hospitality, recruitment, and logistics." },
  { q: "Can Melorite connect to our existing tools?", a: "Melorite supports connected workflows with the systems your organisation already relies on, helping you bring business information into a more unified operating environment." },
  { q: "How are permissions handled?", a: "Role-based access and administrative controls can be configured to reflect how your organisation works, so people see the business information and workflows relevant to their responsibilities." },
  { q: "Can Melorite scale with our organisation?", a: "Melorite is designed to scale from focused team use to a complete suite of connected business applications used across an entire organisation." },
];

export default function SolutionPage({ data }) {
  return (
    <>
      <section className="page-hero solution-hero">
        <div className="container solution-hero-grid">
          <Reveal as="div">
            <h1>{data.title}</h1>
            <div className="solution-hero-sub">Melorite</div>
            <div className="btn-row">
              <a href="#" className="btn">Talk to us</a>
              <a href="#" className="btn btn-outline">Explore apps</a>
            </div>
          </Reveal>
          <Reveal as="p" className="lede solution-hero-lede">{data.lede}</Reveal>
        </div>
      </section>

      <section className="no-padding">
        <div className="container">
          <Reveal as="div" className="hero-media">
            <img src="/assets/img/melorite/hero-platform.png" alt={`${data.title} teams using Melorite`} />
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="tight">
        <div className="container solution-quote-grid">
          <Reveal as="div">
            <span className="eyebrow">Connected workflows<br />for {data.title.toLowerCase()} teams</span>
          </Reveal>
          <Reveal as="div" className="quote-with-avatar">
            <blockquote>&ldquo;{data.quote}&rdquo;</blockquote>
            <div className="quote-avatar-row">
              <div className="avatar-circle">{data.quoteBy[0]}</div>
              <div className="byline"><strong>{data.quoteBy}</strong>{data.quoteRole}</div>
            </div>
          </Reveal>
          {data.stat && (
            <Reveal as="div" className="stat-card-block">
              <div className="stat-card-label">{data.stat.label}</div>
              <div className="stat-card-value">{data.stat.value}</div>
              <div className="stat-card-desc">{data.stat.desc}</div>
            </Reveal>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Key benefits</span>
            <h2>{data.benefitsHead}</h2>
          </Reveal>
          <div className="benefits-list">
            {data.benefits.map((b, i) => (
              <Reveal as="div" className="benefit-row" key={b.title}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head left">
            <span className="eyebrow">Connected ecosystem</span>
            <h2>Connect your business apps to<br />the tools your teams rely on</h2>
            <a href="/integrations" className="btn" style={{ marginTop: "1.6rem" }}>See all integrations</a>
          </Reveal>
          <Reveal as="div" stagger className="integration-cards-grid">
            {data.integrations.map(([icon, name]) => (
              <div className="integration-card" key={name}>
                {HAS_ICON.has(icon) ? (
                  <img src={`/assets/img/integrations/${icon}.svg`} alt="" />
                ) : (
                  <span className="integration-card-fallback">{name[0]}</span>
                )}
                <span>{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Built around your {data.title.toLowerCase()} workflows.</h2>
            <p className="lede">A flexible platform foundation with the controls and support your organisation needs.</p>
          </Reveal>
        </div>
      </section>

      <EnterpriseGradeBlock />

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>FAQ</h2>
          </Reveal>
          <Reveal as="div">
            <FAQAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="contact-form-block">
            <div>
              <h2>Get in touch</h2>
              <p className="lede">We&rsquo;d love to see how we can help.</p>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
