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
  { q: "How secure is Sana Agents?", a: "Sana Agents is single tenant, SOC2 and ISO 27001 certified, and GDPR compliant. All data is encrypted at rest with AES 256 and in transit with TLS 1.2+. Enterprise users can be authenticated with Single-Sign-On (SSO), and integrated systems can mirror the underlying system permissions." },
  { q: "Which integrations does Sana Agents have?", a: "Enterprise customers can use a wide range of off-the-shelf connectors, with new connectors added continuously. Free tier users can currently add integrations to Google Drive, Sharepoint, Google Calendar, and Outlook Calendar. Enterprise customers can also build custom integrations." },
  { q: "Can Sana Agents browse the web?", a: "Sana Agents can combine your internal knowledge with anything from the public web. Users can control the scope for each question, and administrators can enable or disable web browsing for any assistant." },
  { q: "Which types of data can Sana Agents handle?", a: "Sana Agents excels at reading documents (PDF, PowerPoint, Word, Docs), structured files (Excel, Sheets, CSV), and videos (MP4), and connects to third-party systems such as CRMs for additional data types." },
  { q: "How does Sana Agents store my data?", a: "Data added through integrations or uploads is indexed and stored in a cloud instance with logical data isolation. Enterprise organizations can get their own single-tenant deployment, with data encrypted at rest (AES 256) and in transit (TLS 1.2+)." },
  { q: "How are data permissions handled?", a: "Documents can be added via direct upload, private integration, or shared integration, and accessibility depends on how each was added and the admin settings configured for it." },
  { q: "Which LLMs does Sana Agents use? Are third-party models trained on my data?", a: "Sana Agents is built agnostic to the underlying LLM. Enterprise users can select between a range of models and providers, none of which are trained on your Content Data, with a Zero-Day Retention policy used wherever possible." },
  { q: "Which languages does Sana Agents support?", a: "The assistant can speak more than 50 languages." },
];

export default function SolutionPage({ data }) {
  return (
    <>
      <section className="page-hero solution-hero">
        <div className="container solution-hero-grid">
          <Reveal as="div">
            <h1>{data.title}</h1>
            <div className="solution-hero-sub">Sana</div>
            <div className="btn-row">
              <a href="#" className="btn">Book an intro</a>
              <a href="#" className="btn btn-outline">Find your plan</a>
            </div>
          </Reveal>
          <Reveal as="p" className="lede solution-hero-lede">{data.lede}</Reveal>
        </div>
      </section>

      <section className="no-padding">
        <div className="container">
          <Reveal as="div" className="hero-media">
            <img src="/assets/img/agents-model-agnostic.webp" alt={data.title} />
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="tight">
        <div className="container solution-quote-grid">
          <Reveal as="div">
            <span className="eyebrow">Driving AI ROI<br />for {data.title.toLowerCase()} teams</span>
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
            <span className="eyebrow">Custom integrations</span>
            <h2>Connect your AI agents to<br />all your most-important tools</h2>
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
            <h2>No training on your {data.title.toLowerCase()} data.</h2>
            <p className="lede">Full enterprise-grade security and support.</p>
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
