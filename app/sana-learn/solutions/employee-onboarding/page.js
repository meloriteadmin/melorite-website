import Reveal from "@/components/Reveal";

export const metadata = { title: "Sana for employee onboarding | Sana Learn" };

const BENEFITS = [
  { title: "Automate every onboarding program, from pre-boarding to ramped", body: "The right program triggers the moment a new hire is added to your HRIS, delivering the right content to the right person from day one." },
  { title: "Personalize journeys by role, team, and pace", body: "Blend interactive self-paced courses, live sessions, and external content at intervals matched to each hire's role and pace." },
  { title: "Empower your experts to capture what matters", body: "Collaborative, AI-powered authoring makes it easy for anyone to capture and share what they know." },
  { title: "Host live sessions that bring culture to life", body: "Create, host, and manage in-person and hybrid sessions in one place so new joiners connect with the people and ideas that matter." },
  { title: "Welcome new hires before their first day", body: "Automated pre-boarding lets new hires know what to expect, what to read, and who to meet before they walk through the door." },
];

const COMPARISON = [
  { label: "Enrollment", before: "Admins manually assign programs while new hires wait.", after: "The right program triggers and enrolls new hires automatically based on role and start date." },
  { label: "Personalization", before: "Every new hire gets the same experience, regardless of role or team.", after: "AI designs a tailored journey blending courses and live sessions at the right pace." },
  { label: "Content creation", before: "L&D builds onboarding content from scratch for every new role.", after: "Subject matter experts create and update content with AI-powered tools." },
  { label: "Pre-boarding", before: "New hires arrive on day one without context or clarity on what to expect.", after: "Automated pre-boarding starts before day one with welcome materials and first-week prep." },
  { label: "Just-in-time learning", before: "New hires ask a colleague, search a wiki, or wait for a reply.", after: "New hires ask the Sana AI Tutor and get an instant answer cited from company knowledge." },
];

export default function EmployeeOnboardingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana Learn &nbsp;&rsaquo;&nbsp; Employee onboarding</span>
            <h1>Day one shapes<br />year one.</h1>
            <p className="lede">Faster ramp time. Higher performance. A culture that takes hold. Sana&rsquo;s AI-first learning platform helps new hires get to their best work faster.</p>
            <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Key benefits</span>
            <h2>Belonging starts with knowing</h2>
          </Reveal>
          <div className="benefits-list">
            {BENEFITS.map((b, i) => (
              <Reveal as="div" className="benefit-row" key={b.title}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div><h3>{b.title}</h3><p>{b.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>AI behind every step<br />of onboarding</h2>
            <p className="lede">AI-first onboarding builds high-performing teams, from day one.</p>
          </Reveal>
          <div className="benefits-list">
            {COMPARISON.map((row) => (
              <Reveal as="div" className="benefit-row" key={row.label} style={{ gridTemplateColumns: "0.6fr 1fr 1fr", background: "var(--white)" }}>
                <h3 style={{ fontSize: "1.8rem" }}>{row.label}</h3>
                <p style={{ color: "var(--darkgrey)" }}>{row.before}</p>
                <p>{row.after}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="div">
            <h2>What great onboarding adds up to</h2>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid" style={{ marginTop: "4rem" }}>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>Faster ramp time</h3>
              <p style={{ color: "var(--grey)" }}>An AI tutor trained on your company&rsquo;s knowledge cuts down repeated questions so new joiners contribute sooner.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>Higher performance</h3>
              <p style={{ color: "var(--grey)" }}>A path built around each hire's role and experience closes knowledge gaps quickly.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>A culture that takes hold</h3>
              <p style={{ color: "var(--grey)" }}>Live sessions and expert content help new hires see your values in action from day one.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal as="div">
            <h2>Get in touch</h2>
            <a href="#" className="btn" style={{ marginTop: "2.4rem" }}>Book an intro</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
