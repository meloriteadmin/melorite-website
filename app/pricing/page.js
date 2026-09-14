import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import PricingCalculator from "./PricingCalculator";

export const metadata = { title: "Flexible plans that grow with your learning needs | Sana Learn" };

const FAQS = [
  { q: "How is pricing calculated?", a: "Sana Learn is priced per user per month. The figure shown above is indicative; book an intro call so our team can understand your organisation's needs, and we will follow up with tailored pricing." },
  { q: "What counts as a user?", a: "A user is anyone you give access to your Sana Learn instance. This includes internal employees and/or any external learners like customers or partners you choose to include. You pay for the users you provision." },
  { q: "Do I need to be a Workday customer to purchase Sana Learn?", a: "No. Sana Learn works alongside any HR system and requires no migration to Workday's systems. You can purchase, deploy, and run it independently." },
  { q: "What's included in the price?", a: "Everything. Your subscription covers the full platform — LMS, LXP, authoring, and virtual classroom — along with the ready-to-use content library, SSO and integrations, and 24/7 support. No capabilities locked behind add-ons, no surprise fees." },
  { q: "Are implementation and onboarding an added cost?", a: "No. A dedicated deployment team handles configuration, integrations, and content migration as part of getting you live, and stays with you well past go-live." },
  { q: "Does Sana Learn integrate with our existing tools and SSO?", a: "Yes. Sana Learn connects to your HR system, HCM, and business tools for user provisioning, data sync, and automated workflows. We support SSO so users can sign in securely with their existing company credentials." },
  { q: "Can we migrate our existing content and courses?", a: "Yes. You can import via SCORM, or use Sana Learn's course converter to turn SCORM files, documents, and PDFs into native, interactive courses." },
  { q: "How secure is my data?", a: "Sana Learn is built with enterprise-grade security. We're ISO 27001 certified, SOC 2 Type I and Type II certified, and GDPR compliant." },
  { q: "Can we scale up or down as our headcount changes?", a: "Yes. Your plan flexes as your organisation scales." },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana Learn &nbsp;&rsaquo;&nbsp; Pricing</span>
            <h1>Flexible plans that grow<br />with your learning needs</h1>
            <p className="lede">Built to scale, with per-user pricing tailored to your organization&rsquo;s size and needs.</p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <Reveal as="div">
            <PricingCalculator />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="pricing-grid" style={{ gridTemplateColumns: "1fr 1fr", maxWidth: "96rem", margin: "0 auto" }}>
            <div className="price-card">
              <h3>Free</h3>
              <div className="price">$0</div>
              <a href="#" className="btn">Try it free</a>
              <ul>
                <li>&#10003; Tailored pricing available for non-desk users</li>
                <li>&#10003; Talk to our team to see how we can best fit your needs</li>
              </ul>
            </div>
            <div className="price-card featured">
              <h3>Enterprise-Grade. Future-Ready.</h3>
              <div className="price">Custom pricing</div>
              <a href="#" className="btn btn-light">Book an intro</a>
              <ul>
                <li>&#10003; Price based on a 3-year contract, not including a one-off implementation fee</li>
                <li>&#10003; Discuss tailored pricing options with our team</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>FAQs</h2>
          </Reveal>
          <Reveal as="div">
            <FAQAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
