import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = { title: "Enterprise-grade protection and security | Sana" };

const FEATURES = [
  { icon: "🛡️", title: "SOC-2", body: "Sana meets the AICPA SOC requirements for customer data management." },
  { icon: "🇪🇺", title: "GDPR", body: "We fully comply with GDPR and offer several data portability and management tools." },
  { icon: "🔏", title: "ISO:27001", body: "Sana meets the international standard for information management security." },
  { icon: "🔑", title: "SSO & SCIM", body: "Single Sign-On through trusted providers. Support for SCIM user provisioning to sync user roles and permissions." },
  { icon: "🔐", title: "Access & encryption", body: "Users can only access data they are authorized for. AES-256 encryption is used for data at rest, and TLS 1.2 is used for data in transit." },
  { icon: "🧯", title: "Operational security", body: "Safeguards against malicious code of the highest standard, as well as confidentiality agreements with staff, customers, and suppliers." },
  { icon: "☁️", title: "Flexible deployment options", body: "Sana is a SaaS solution with managed hosting by default and can be deployed on your cloud infrastructure." },
  { icon: "🖥️", title: "Server security and monitoring", body: "Sana complies with SOC 2, ISO 27001, and HITRUST. Data stored with 24/7 threat monitoring." },
  { icon: "🚫", title: "No foundation model training", body: "Contractual agreements with AI subprocessors prohibit use of customer data to train their models." },
];

const FAQS = [
  { q: "How do you uphold information security?", a: "We use an Information Security Management System (ISMS) certified under ISO/IEC 27001 as the basis for all information security measures. The standard provides guidelines and general principles for planning, implementing, maintaining, and improving information security in an organization." },
  { q: "How do you control access to our systems and processes?", a: "We prevent unauthorized persons from using systems and processes by adhering to the principle of least privilege and using role-based permissions when provisioning access, and utilizing multi-factor authentication for access to systems with highly confidential data. Our data center and cloud infra partners are ISO27001, ISO27017, ISO27018, SOC2 Type II, PCI DSS, and CSA STAR certified." },
  { q: "How do you manage risk?", a: "We adopt appropriate risk management and security risk management controls such as conducting periodic reviews and assessments of risks, monitoring compliance with our policies and procedures, and keeping an up-to-date risk mapping signed off by senior management." },
  { q: "How do you secure operations?", a: "We maintain different systems and methods to protect the IT infrastructure, use active monitoring to ensure antivirus scanners and spam filters are active and updated, install the latest security updates and patches, and ensure all employees take security training at least once a year." },
  { q: "How do you uphold security with our staff?", a: "We require that Sanians conduct themselves in a manner consistent with our guidelines regarding confidentiality, business ethics, and professional standards, enter into confidentiality agreements, and acknowledge compliance with Sana's confidentiality and privacy policies." },
  { q: "How does the search algorithm learn?", a: "We use a dedicated training set of internal data to manually and automatically train our ranking algorithm and query rewrite. No customer data is used outside of the isolated tenant unless specifically agreed upon, and no customer data is used to train third-party LLMs." },
  { q: "Will Sana index our data?", a: "Data added through integrations and/or through upload to Sana Agents is indexed and stored on our cloud instance." },
  { q: "How does Sana ensure the security of our data?", a: "Sana isolates all customer data using a single tenant architecture, meaning no databases are shared between customers. Data at rest is encrypted with AES 256 and data in transit is encrypted with TLS 1.2+." },
  { q: "Can every user see every document?", a: "There are three ways documents can be added to Sana Agents: direct upload, private integration, and shared integration. Accessibility depends on how the document was added and admin settings — each user can generally only see what they're authorized to see." },
  { q: "Will our data be used by third-parties to train their models?", a: "Sana Agents is built agnostic to the underlying large language models. Sana offers third-party LLM options which are not trained on Content Data, and utilizes a Zero-Day Retention (ZDR) policy with third parties whenever possible." },
  { q: "Can I, as an admin, enable integrations on behalf of my organization?", a: "You can control which integrations are available to the organization, and which ones feed into the natural language response from Sana Agents." },
  { q: "Will employees at Sana be able to see our content data and search queries?", a: "Sana employees do not have access to your workspace by default, and will only be able to access it if you grant them access by extending an invite. Developers have access to underlying databases only through stringent least-privilege processes and audit trails." },
];

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana &nbsp;&rsaquo;&nbsp; Capabilities</span>
            <h1>Enterprise-grade<br />protection and security</h1>
            <p className="lede">Sana is an industry pioneer and leading learning and knowledge platform provider. We design with data privacy, information security, and legal compliance at the very top of our priorities.</p>
            <div className="btn-row">
              <a href="#" className="btn">Book an intro</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" stagger className="feature-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Trusted by innovators and industry leaders</span>
          </Reveal>
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "72rem", margin: "0 auto" }}>
            <div className="quote-card">
              <p>&ldquo;Sana gives us control over the AI, allowing us to choose the material it accesses and tailor its parameters to our specific needs.&rdquo;</p>
              <div className="byline"><strong>Peter Jidesjö</strong>Executive Vice President, Permobil</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Frequently asked questions</h2>
          </Reveal>
          <Reveal as="div">
            <FAQAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
