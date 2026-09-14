import Reveal from "@/components/Reveal";

export const metadata = { title: "Plug-and-play | Sana Learn Integrations" };

const CATEGORIES = [
  {
    title: "HR systems",
    body: "Sync user data and attributes to auto-enroll learners, assign access rights, and create custom reports.",
    apps: ["SAP SuccessFactors", "Oracle Cloud HCM", "Rippling", "Workday HCM", "BambooHR", "Hibob", "Personio", "Factorial", "UKG", "Deel", "Gusto", "Namely"],
  },
  {
    title: "Identity providers",
    body: "Authenticate and provision users with SAML-based single sign-on (SSO) and SCIM.",
    apps: ["Microsoft Entra ID", "Okta", "Google Workspace", "OneLogin", "Auth0", "Ping Identity", "JumpCloud", "Keycloak"],
  },
  {
    title: "Content libraries",
    body: "Surface existing content libraries to assign and track all your learning in a single place.",
    apps: ["Udemy", "Coursera", "Skillsoft", "Go1", "LinkedIn Learning", "Degreed", "Pluralsight", "O'Reilly", "EdX", "Moodle"],
  },
  {
    title: "CRM systems",
    body: "Trigger learning initiatives based on live funnel data and connect to your content marketplace for automatic customer enrollment.",
    apps: ["Salesforce", "Hubspot", "Zendesk Sell", "Pipeliner", "Affinity", "Teamwork CRM"],
  },
  {
    title: "Productivity tools",
    body: "Meet learners in the flow of work with real-time notifications, reminders, and reporting inside the tools your teams already use.",
    apps: ["Microsoft Teams", "Slack", "Airtable", "Snowflake", "BigQuery", "PowerBI", "Databricks"],
  },
];

export default function SanaLearnIntegrationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana Learn &nbsp;&rsaquo;&nbsp; Integrations</span>
            <h1>Plug-and-play</h1>
            <p className="lede">Sana Learn is built to fit with your stack so learning shows up where work already happens.</p>
            <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
          </Reveal>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.title} className="reduced-padding">
          <div className="container">
            <Reveal as="div" className="section-head left">
              <h2>{cat.title}</h2>
              <p className="lede">{cat.body}</p>
            </Reveal>
            <Reveal as="div" className="pill-row">
              {cat.apps.map((a) => (
                <span className="pill" key={a}>{a}</span>
              ))}
              <span className="pill" style={{ color: "var(--darkergrey)" }}>+ more, some built custom</span>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-sand" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="div">
            <h2>Don&rsquo;t see what you need?</h2>
            <p className="lede" style={{ margin: "2rem auto 3.2rem" }}>Tools marked custom are built bespoke to your stack. Speak with our team to find out more.</p>
            <a href="#" className="btn">Book an intro</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
