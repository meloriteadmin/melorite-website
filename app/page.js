import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import PlatformTabs from "@/components/PlatformTabs";
import StatCounter from "@/components/StatCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ModelAgnostic from "@/components/ModelAgnostic";
import TeamTabs from "@/components/TeamTabs";
import SecurityIntegrationsPanels from "@/components/SecurityIntegrationsPanels";

const STATS = [
  { label: "Fintech scale-up", value: 10, suffix: " hours", desc: "saved per week, per employee" },
  { label: "Global law firm", value: 62, suffix: "%", desc: "prep time saved" },
  { label: "Leading manufacturer", value: 95, suffix: "%", desc: "faster product answers" },
  { label: "Mining manufacturer", value: 50, suffix: "%", desc: "time saved in R&D" },
  { label: "Renewable energy company", value: 66, suffix: "%", desc: "time saved in R&D" },
  { label: "Industrial leader", value: 2, suffix: "×", desc: "more customer service issues resolved" },
];

const TESTIMONIALS = [
  { quote: "All of a sudden, a valuation memo that our CFO previously spent almost a week preparing was completed within three or four hours.", by: "Chief Sustainability Officer", role: "Leading renewable energy company", bg: "/assets/img/quote-bg-01.webp" },
  { quote: "If we removed Sana Agents, there would be a revolt.", by: "Managing Director", role: "Global private equity firm", bg: "/assets/img/quote-bg-02.webp" },
  { quote: "With Sana, our sales prep is now 10x quicker. Instead of spending hours gathering data manually, our team can instantly access the research insights they need.", by: "Product Operations Lead", role: "International research and analytics firm", bg: "/assets/img/quote-bg-03.webp" },
  { quote: "We’re leveraging our AI agents to find and compare product information, build sales arguments, support R&D, and much more.", by: "CEO", role: "Global industrial automation company", bg: "/assets/img/quote-bg-04.webp" },
  { quote: "Sana gives us control over the AI, allowing us to choose the material it accesses and tailor its parameters to our specific needs.", by: "Executive Vice President", role: "Global medical technology provider", bg: "/assets/img/quote-bg-05.webp" },
  { quote: "With Sana Agents, even colleagues who aren’t tech-savvy can leverage AI in their everyday work.", by: "Head of Digitalization", role: "Major real estate group", bg: "/assets/img/quote-bg-06.webp" },
  { quote: "With Sana, we’re creating assistants to accelerate everything from deal analysis to portfolio reviews.", by: "Chief Digital Officer", role: "Leading private equity firm", bg: "/assets/img/quote-bg-07.webp" },
  { quote: "Asking Sana in Slack for someone’s actions from the last meeting—it’s a game-changer.", by: "CTO", role: "Leading mobility startup", bg: "/assets/img/quote-bg-08.webp" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Sana</span>
          <h1>Business reviews<br />done with AI</h1>
          <p className="lede">Accelerate work with AI agents that collaborate, automate, and think alongside your teams.</p>
          <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
        </div>
        <div className="hero-media">
          <img src="/assets/img/hero.webp" alt="Sana hero" />
        </div>
      </section>

      <Marquee />

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Your all-in-one<br />AI platform for real work</h2>
            <p className="lede">A seamless, beautiful way to bring AI into your company&rsquo;s apps, knowledge, and culture.</p>
            <a href="#" className="btn" style={{ marginTop: "2.4rem" }}>Book an intro</a>
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
              <span className="eyebrow">Enterprise partnership services</span>
              <h2>Driving AI adoption together</h2>
              <p className="lede">AI is revolutionizing work in real time. Our partnership-led approach helps your organization become truly AI-first.</p>
              <ul className="checklist">
                <li><span className="check-icon">&#10003;</span> Dedicated deployment lead</li>
                <li><span className="check-icon">&#10003;</span> Complete implementation support</li>
                <li><span className="check-icon">&#10003;</span> Tailored onboarding</li>
                <li><span className="check-icon">&#10003;</span> Priority support</li>
                <li><span className="check-icon">&#10003;</span> AI strategy and consulting</li>
                <li><span className="check-icon">&#10003;</span> Change management model</li>
                <li><span className="check-icon">&#10003;</span> Community, events, and resources</li>
              </ul>
              <a href="#" className="btn">Book an intro</a>
            </Reveal>
          </div>
        </div>
      </section>

      <SecurityIntegrationsPanels />

      <section>
        <div className="container">
          <Reveal as="div" className="ios-banner">
            <div className="copy">
              <div className="eyebrow-tag">Agents iOS app</div>
              <h3>A polymath in your pocket</h3>
              <p>Connect all your work apps to get instant answers to anything and solve hours of complex tasks in seconds. Missed a meeting? The recap is just a tap away. Built on any LLM you want. Now available on iOS.</p>
            </div>
            <div className="ios-banner-media">
              <img src="/assets/img/agents-ios-app.webp" alt="Agents iOS app" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <Reveal as="div">
            <h2>Sana is trusted by leading<br />enterprises across industries</h2>
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
                <li>&#10003; Extended range of LLMs</li>
                <li>&#10003; Analytics dashboard to measure impact</li>
                <li>&#10003; Dedicated success team, priority support, and SLA</li>
                <li>&#10003; MCP client for building your own integrations</li>
              </ul>
            </div>
            <div className="price-card featured">
              <h3>Team</h3>
              <div className="price">$30 <span>per user / month</span></div>
              <a href="#" className="btn btn-light">Sign up</a>
              <ul>
                <li>&#10003; Unlimited queries and meeting recordings</li>
                <li>&#10003; Up to 50 members per workspace</li>
                <li>&#10003; Our most popular integrations incl. Asana, Gmail, Outlook email, Zendesk, and more.</li>
                <li>&#10003; OpenAI and Claude model selection</li>
                <li>&#10003; Enterprise data processing agreement</li>
                <li>&#10003; 10,000 documents per integration</li>
                <li>&#10003; Priority in email and chat support</li>
              </ul>
            </div>
            <div className="price-card">
              <h3>Free</h3>
              <div className="price">$0</div>
              <a href="#" className="btn">Try it free</a>
              <ul>
                <li>&#10003; 10 meetings per month &mdash; invite members for more</li>
                <li>&#10003; Up to 5 members per workspace</li>
                <li>&#10003; Unlimited assistants and prompt templates</li>
                <li>&#10003; Meeting integrations with Calendar, Drive, Meet, Teams, and Zoom</li>
                <li>&#10003; Data integrations with Confluence, Google Drive, OneDrive, Notion, and Sharepoint</li>
                <li>&#10003; 1,000 documents per integration</li>
                <li>&#10003; Help center support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
