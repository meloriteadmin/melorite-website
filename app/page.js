import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import PlatformTabs from "@/components/PlatformTabs";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ModelAgnostic from "@/components/ModelAgnostic";
import TeamTabs from "@/components/TeamTabs";
import SecurityIntegrationsPanels from "@/components/SecurityIntegrationsPanels";

const STATS = [
  { label: "Start with what you need", value: 1, suffix: " app", desc: "then add more as you grow" },
  { label: "One connected view", value: 1, suffix: " platform", desc: "for your business data and workflows" },
  { label: "Core business functions", value: 12, suffix: "+", desc: "covered by a growing suite of apps" },
  { label: "Flexible by design", value: 100, suffix: "%", desc: "configured around your operating model" },
  { label: "Shared workflows", value: 1, suffix: " ecosystem", desc: "across teams, apps, and processes" },
  { label: "Built to scale", value: 1, suffix: " foundation", desc: "from a single team to the whole organisation" },
];

const TESTIMONIALS = [
  { quote: "Melorite gives our teams a shared system of record without forcing every department into the same process.", by: "Operations leader", role: "Growing multi-location business", bg: "/assets/img/quote-bg-01.webp" },
  { quote: "We started with CRM and expanded at our own pace. Every new app feels like part of the same business.", by: "Commercial director", role: "Professional services firm", bg: "/assets/img/quote-bg-02.webp" },
  { quote: "Our sales, finance, and delivery teams can finally work from connected information instead of reconciling spreadsheets.", by: "Finance leader", role: "Scaling services company", bg: "/assets/img/quote-bg-03.webp" },
  { quote: "The platform adapts to how our manufacturing operation works, from inventory through to customer service.", by: "Operations director", role: "Manufacturing business", bg: "/assets/img/quote-bg-04.webp" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Melorite</span>
          <h1>One connected platform<br />for your business</h1>
          <p className="lede">Bring the apps, data, workflows, and teams that run your organisation into one modular business ecosystem.</p>
          <div className="btn-row"><a href="#" className="btn">Talk to us</a></div>
        </div>
        <div className="hero-media">
          <img src="/assets/img/hero.webp" alt="Melorite business platform" />
        </div>
      </section>

      <Marquee />

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Everything your business<br />needs to move as one</h2>
            <p className="lede">Choose the business apps you need today, connect them through shared data and workflows, and expand your setup as your operations grow.</p>
            <a href="#" className="btn" style={{ marginTop: "2.4rem" }}>Explore Melorite</a>
          </Reveal>

          <Reveal as="div">
            <PlatformTabs />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" stagger className="stats-grid">
            {STATS.map((s) => (
              <StatCounter key={s.label} label={s.label} value={s.value} suffix={s.suffix} desc={s.desc} />
            ))}
          </Reveal>

          <Reveal as="div">
            <TestimonialCarousel items={TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      <ModelAgnostic />

      <section>
        <div className="container">
          <TeamTabs />
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <div className="partnership">
            <Reveal as="div" className="partnership-media">
              <img src="/assets/img/agents-partnerships.webp" alt="Driving AI adoption together" />
            </Reveal>
            <Reveal as="div" className="partnership-copy">
              <span className="eyebrow">Implementation partnership</span>
              <h2>Make your operating model work better</h2>
              <p className="lede">Melorite is configured around your people, processes, and industry—so you can connect the work that matters without rebuilding how your business runs.</p>
              <ul className="checklist">
                <li><span className="check-icon">&#10003;</span> Discovery and solution design</li>
                <li><span className="check-icon">&#10003;</span> App and workflow configuration</li>
                <li><span className="check-icon">&#10003;</span> Connected-data planning</li>
                <li><span className="check-icon">&#10003;</span> Team onboarding and adoption</li>
                <li><span className="check-icon">&#10003;</span> Industry-specific setup</li>
                <li><span className="check-icon">&#10003;</span> Ongoing platform guidance</li>
              </ul>
              <a href="#" className="btn">Plan your rollout</a>
            </Reveal>
          </div>
        </div>
      </section>

      <SecurityIntegrationsPanels />

      <section>
        <div className="container">
          <Reveal as="div" className="ios-banner">
            <div className="copy">
              <div className="eyebrow-tag">Built for connected work</div>
              <h3>Your business, working together</h3>
              <p>From customer conversations and project delivery to payroll, inventory, reporting, and support, Melorite gives each team the right tools while keeping the entire organisation connected.</p>
            </div>
            <div className="ios-banner-media">
              <img src="/assets/img/agents-ios-app.webp" alt="Connected business apps" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <Reveal as="div">
            <h2>Built for organisations across<br />industries and stages of growth</h2>
            <div className="trusted-grid">
              {["strava", "polestar", "merck", "apollo.io", "robinhood", "amgen", "electrolux", "piab"].map((l) => (
                <img key={l} src={`/assets/img/partners/${l}.svg`} alt={l} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand" id="pricing">
        <div className="container">
          <Reveal as="div" className="pricing-head">
            <h2>Pricing</h2>
          </Reveal>
          <Reveal as="div" stagger className="pricing-grid">
            <div className="price-card">
              <h3>Enterprise</h3>
              <div className="price">Custom pricing</div>
              <a href="#" className="btn">Book an intro</a>
              <ul>
                <li>&#10003; Unlimited members per workspace and documents per integration</li>
                <li>&#10003; Enterprise integrations</li>
                <li>&#10003; Domain verification, SAML-based SSO, and SCIM</li>
                <li>&#10003; Configurable business apps and workflows</li>
                <li>&#10003; Cross-functional reporting and visibility</li>
                <li>&#10003; Dedicated success team, priority support, and SLA</li>
                <li>&#10003; MCP client for building your own integrations</li>
              </ul>
            </div>
            <div className="price-card featured">
              <h3>Team</h3>
              <div className="price">$30 <span>per user / month</span></div>
              <a href="#" className="btn btn-light">Sign up</a>
              <ul>
                <li>&#10003; Core apps for growing teams</li>
                <li>&#10003; Flexible member and role management</li>
                <li>&#10003; Connected CRM, finance, people, and operations workflows</li>
                <li>&#10003; Collaboration and document tools</li>
                <li>&#10003; Shared reports and dashboards</li>
                <li>&#10003; Standard implementation support</li>
              </ul>
            </div>
            <div className="price-card">
              <h3>Free</h3>
              <div className="price">$0</div>
              <a href="#" className="btn">Try it free</a>
              <ul>
                <li>&#10003; Explore the Melorite platform</li>
                <li>&#10003; Build your first app setup</li>
                <li>&#10003; See connected workflow examples</li>
                <li>&#10003; Access platform resources</li>
                <li>&#10003; Plan a future rollout</li>
                <li>&#10003; Help center support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
