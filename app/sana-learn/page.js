import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = { title: "The future of enterprise learning | AI-Powered LMS | Sana Learn" };

const FEATURES = [
  { icon: "🎓", title: "1:1 learning experience", body: "A personal tutor at every learner's fingertips.", id: "learning-management" },
  { icon: "🏫", title: "Virtual classroom", body: "Blended learning streamlined in one platform." },
  { icon: "⚡", title: "Just-in-time learning", body: "Instant search and answers to any question." },
  { icon: "✍️", title: "Collaborative authoring", body: "Beautiful interactive content created at lightning speed.", id: "content-creation" },
  { icon: "🗂️", title: "Learning management", body: "All your manual learning admin on autopilot." },
  { icon: "📊", title: "Learning analytics", body: "Shareable dashboards and insights in seconds." },
];

const TESTIMONIALS = [
  { quote: "Sana Learn has helped us go from manual, one-size-fits-all onboarding to a fully automated, yet still tailored experience.", by: "Olivia Winkvist", role: "Talent manager at Foodora" },
  { quote: "The first system I've seen that can truly be an end-to-end learning platform for companies.", by: "Josh Bersin", role: "The Josh Bersin Company" },
  { quote: "We're not only saving huge amounts of money, we're also saving a tremendous amount of time.", by: "Lina Thomassen Strömberg", role: "Head of L&D at Ahlsell" },
  { quote: "It used to take me 3 weeks to produce a course in our previous platform. In Sana Learn, I can now produce that same course in 3 hours.", by: "Fabian Sanchis", role: "L&D Manager at Ebury" },
  { quote: "We have gone from about 400 monthly users in our old LMS systems to 1,500 each month using Sana Learn.", by: "Louise Henriksson", role: "Content Manager at Polestar" },
  { quote: "Sana's learning platform is probably the most beautiful interface I've ever seen. And I've seen a lot.", by: "Ross Stevenson", role: "Chief Strategist at Steal These Thoughts" },
];

const INTEGRATIONS = ["Coursera", "Google Drive", "HiBob", "Cornerstone", "Degreed", "Okta", "SAP Litmos", "Salesforce", "Microsoft Teams", "Personio", "Workday", "Slack"];
const SECURITY = ["Custom user roles", "SCORM compliant", "Flexible groups", "User provisioning", "SOC 2 Type 2", "GDPR compliant", "ISO 27001", "SAML single sign-on", "Advanced permissions", "2FA with email codes", "Regional deploys", "Audit logging"];

export default function SanaLearnPage() {
  return (
    <>
      <section className="hero">
        <Reveal as="div">
          <span className="eyebrow">Sana Learn</span>
          <h1>The future of<br />enterprise learning</h1>
          <p className="lede">Sana Learn brings the best of an LMS, LXP, authoring tool, and virtual classroom into one AI-native learning platform.</p>
          <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
        </Reveal>
      </section>

      <Marquee logos={["asics", "polestar", "brex", "swile", "foodora"]} />

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Meet Sana Learn</h2>
            <p className="lede">Say goodbye to fragmented learning tools. Sana Learn is the only platform designed to move you beyond one-size-fits-all content to a truly dynamic, personalized learning experience at scale.</p>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title} id={f.id}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>The modern learning experience<br />everyone deserves</h2>
            <p className="lede">You don&rsquo;t have to choose between user-friendly and enterprise-ready.</p>
          </Reveal>
          <Reveal as="div" stagger className="quote-grid">
            {TESTIMONIALS.map((t) => (
              <div className="quote-card" key={t.by} style={{ background: "var(--white)" }}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="byline"><strong>{t.by}</strong>{t.role}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head left">
            <h2>Enterprise-grade<br />integrations and security</h2>
            <p className="lede">Connect your daily tools automatically and securely.</p>
          </Reveal>
          <div className="integrations-security">
            <Reveal as="div" className="panel">
              <h4>Connect your daily tools</h4>
              <div className="pill-row">
                {INTEGRATIONS.map((i) => <span className="pill" key={i}>{i}</span>)}
              </div>
              <a href="#" className="btn btn-small" style={{ marginTop: "3.2rem" }}>See full integrations list</a>
            </Reveal>
            <Reveal as="div" className="panel">
              <h4>Security you can stand by</h4>
              <div className="pill-row">
                {SECURITY.map((i) => <span className="pill" key={i}>{i}</span>)}
              </div>
              <a href="/security" className="btn btn-small" style={{ marginTop: "3.2rem" }}>Read more about privacy</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal as="div">
            <h2>Enterprise-Grade. Future-Ready.</h2>
            <p className="lede" style={{ margin: "2rem auto 3.2rem", color: "var(--grey)" }}>Custom pricing tailored to your organization&rsquo;s learning needs.</p>
            <div className="btn-row">
              <a href="/pricing" className="btn btn-light">See pricing</a>
              <a href="#" className="btn btn-outline" style={{ color: "var(--white)" }}>Book an intro</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
