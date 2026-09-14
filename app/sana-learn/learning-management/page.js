import Reveal from "@/components/Reveal";

export const metadata = { title: "Automated learning management system powered by AI | Sana Learn" };

const OVERVIEW = [
  { label: "Create", body: "Beautiful content, 10x faster" },
  { label: "Learn", body: "A tutor at everyone's fingertips" },
  { label: "Manage", body: "All your admin on autopilot" },
  { label: "Analyze", body: "Granular insights in seconds" },
];

export default function LearningManagementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana Learn &nbsp;&rsaquo;&nbsp; Learning management</span>
            <h1>Scale L&amp;D with AI</h1>
            <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <Reveal as="div" stagger className="feature-grid">
            {OVERVIEW.map((o) => (
              <div className="feature-card" key={o.label}>
                <h3>{o.label}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/agents-banner-01.webp" alt="All your programs on autopilot" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>All your programs<br />on autopilot</h2>
              <p className="lede">From enrollment to reminders, automation frees up your L&amp;D team's calendar so admin runs itself.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Polygon saves at least 28 working days a year in admin time through Sana&rsquo;s extensive learning management automations.&rdquo;</p>
              <div className="byline"><strong>Carrie-anne Lindsay</strong>Group L&amp;D Business Partner, Polygon Group</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Gorgeous user experience</h2>
            <p className="lede">The modern experience learners deserve, without the administrative overhead.</p>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid">
            <div className="feature-card"><h3>Engaging content</h3><p>Bring every training to life with polls, quizzes, and reflection cards.</p></div>
            <div className="feature-card"><h3>Personalized experience</h3><p>Let AI determine the right path based on individual skill level.</p></div>
            <div className="feature-card"><h3>Automatic reminders</h3><p>Ensure timely completions through messaging notifications and emails.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;With Sana, we&rsquo;ve had a 77% increase in monthly active users, and a 30% course completion increase in 2 months.&rdquo;</p>
              <div className="byline"><strong>Bárbara Núñez</strong>Group Learning &amp; Development Manager, mci group</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split reverse">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/agents-model-agnostic.webp" alt="Real-time data and instant insights" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Real-time data and<br />instant insights</h2>
              <p className="lede">No more manual reporting &mdash; Sana answers performance questions and generates shareable dashboards on demand, so accountability is easy to share with partners and managers.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head left">
            <h2>Live and self-paced<br />learning, built in</h2>
            <p className="lede">Combine courses, virtual workshops, and instructor-led sessions however you like, and translate any course into 100+ languages at the touch of a button.</p>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid">
            <div className="quote-card">
              <p>&ldquo;We&rsquo;re not just saving a huge amount of money, we&rsquo;re also saving a tremendous amount of time.&rdquo;</p>
              <div className="byline"><strong>Lina Thomassen Strömberg</strong>Head of Learning &amp; Development, Ahlsell</div>
            </div>
            <div className="quote-card">
              <p>&ldquo;Our sales reps can chat with Sana about our latest products because it can read and understand our product trainings.&rdquo;</p>
              <div className="byline"><strong>Anna Klingborg</strong>Global Head of Learning &amp; Development, Svea Solar</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Skills automatically tagged</h2>
            <p className="lede">Upskilling doesn&rsquo;t have to be complicated when powerful AI meets a delightful user experience.</p>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid">
            <div className="feature-card"><h3>Auto-tagging</h3><p>Let AI tag content with the right skill category and level automatically.</p></div>
            <div className="feature-card"><h3>Gamification</h3><p>Drive engagement with customizable badges and skill leaderboards.</p></div>
            <div className="feature-card"><h3>Flexibility</h3><p>Build from scratch, use our template, or integrate with your existing ontology.</p></div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Always on brand</h2>
            <p className="lede">From custom fonts and colors to a dedicated media library, Sana mirrors your brand experience.</p>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid">
            <div className="feature-card"><h3>Custom branding</h3><p>Your fonts, colors, and logo in the content and the UI.</p></div>
            <div className="feature-card"><h3>Media library</h3><p>Easy on-brand asset access directly in the editor.</p></div>
            <div className="feature-card"><h3>Customizable templates</h3><p>Pre-formatted as you like for creative consistency.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;The Sana team has been outstanding. They listen to our feedback and ideas, and we&rsquo;ve built a great partnership.&rdquo;</p>
              <div className="byline"><strong>Mark Dearlove</strong>Founder, The Learning Stack</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
