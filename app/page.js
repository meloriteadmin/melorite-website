import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import PlatformTabs from "@/components/PlatformTabs";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ModelAgnostic from "@/components/ModelAgnostic";
import TeamTabs from "@/components/TeamTabs";
import SecurityIntegrationsPanels from "@/components/SecurityIntegrationsPanels";

const STATS = [
  { label: "One platform", value: "", desc: "Shared foundation across business functions." },
  { label: "Modular by design", value: "", desc: "Start with what you need." },
  { label: "Connected data", value: "", desc: "Keep business context consistent." },
  { label: "Flexible workflows", value: "", desc: "Adapt Melorite to the way your teams operate." },
  { label: "Role-based control", value: "", desc: "Give the right access to the right people." },
  { label: "Built to scale", value: "", desc: "Expand teams, apps and workflows over time." },
];

const TESTIMONIALS = [
  { quote: "Customer information should not stop at sales. Projects, finance and support should understand the same customer.", by: "Connected by default", role: "", bg: "/assets/img/quote-bg-01.webp" },
  { quote: "Adopt the applications your business needs today without limiting what it can become tomorrow.", by: "Start small. Expand naturally.", role: "", bg: "/assets/img/quote-bg-02.webp" },
  { quote: "Your software should adapt to your processes instead of forcing every organisation into the same workflow.", by: "Built around your business", role: "", bg: "/assets/img/quote-bg-03.webp" },
  { quote: "Connect operational work with the information leadership needs to make better decisions.", by: "From activity to visibility", role: "", bg: "/assets/img/quote-bg-04.webp" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">The connected business platform</span>
          <h1>One platform. Every part of your business, connected.</h1>
          <p className="lede">Melorite brings your sales, finance, people, projects, operations, support, marketing, documents, analytics and automation into one connected business platform. Start with the applications you need today and expand as your business grows.</p>
          <div className="btn-row"><a href="/platform" className="btn">Explore Melorite</a><a href="/contact" className="btn btn-outline">Talk to us</a></div>
        </div>
        <div className="hero-media">
          <img src="/assets/img/melorite/hero-platform.png" alt="Melorite business platform" />
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
              <img src="/assets/img/melorite/hero-platform.png" alt="Melorite implementation planning session" />
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
              <img src="/assets/img/melorite/crm-sales.png" alt="Connected business applications in use" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <Reveal as="div">
            <h2>Flexible enough for different<br />ways of doing business</h2>
            <div className="trusted-grid">
              {["Financial services", "Professional services", "Healthcare", "Education", "Real estate", "Manufacturing", "Technology", "Retail"].map((industry) => <span key={industry}>{industry}</span>)}
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
              <h3>Starter</h3>
              <div className="price">Custom pricing</div>
              <a href="/contact" className="btn">Talk to us</a>
              <ul>
                <li>&#10003; Core business workspace</li><li>&#10003; Selected Melorite applications</li><li>&#10003; Standard roles & permissions</li><li>&#10003; Core reporting</li><li>&#10003; Standard support</li>
              </ul>
            </div>
            <div className="price-card featured">
              <h3>Growth</h3>
              <div className="price">Custom pricing</div>
              <a href="/contact" className="btn btn-light">Talk to us</a>
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
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <a href="/contact" className="btn">Contact sales</a>
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
