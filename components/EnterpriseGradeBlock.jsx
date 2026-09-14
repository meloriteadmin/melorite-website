import Reveal from "@/components/Reveal";

const SECURITY = [
  "No training on your data",
  "Domain verification, SAML, SSO, & SCIM",
  "SOC 2 Type 1 compliance",
  "ISO 27001 certified",
  "GDPR compliant",
  "Data encrypted at rest with AES 256 and in transit with TLS 1.2+",
  "Advanced admin controls",
];

const EXPERTISE = [
  "Azure, Anthropic, Cohere, OpenAI, and self-hosted models",
  "Knowledge verification settings",
  "User-generated feedback on responses",
  "Analytics dashboard for monitoring usage and responses",
  "API access for building your own integrations",
  "Dedicated success team, priority support, and SLA",
  "AI strategy consulting and integration guidance",
  "Tailored onboarding and change management support",
];

export default function EnterpriseGradeBlock() {
  return (
    <section>
      <div className="container">
        <Reveal as="div" className="section-head">
          <h2>Enterprise-grade security,<br />privacy, and support</h2>
        </Reveal>
        <div className="integrations-security">
          <Reveal as="div" className="panel">
            <h4>Security and data privacy</h4>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {SECURITY.map((s) => (
                <li key={s}><span className="check-icon">&#10003;</span> {s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="div" className="panel">
            <h4>AI expertise</h4>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {EXPERTISE.map((s) => (
                <li key={s}><span className="check-icon">&#10003;</span> {s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal as="div" style={{ textAlign: "center", marginTop: "4.8rem" }}>
          <a href="#" className="btn">Book an intro</a>
        </Reveal>
      </div>
    </section>
  );
}
