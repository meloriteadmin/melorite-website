import Reveal from "@/components/Reveal";

export const metadata = { title: "Sana for sales enablement | Sana Learn" };

const BENEFITS = [
  { title: "A personal AI tutor for every rep", body: "Reps record a pitch, simulate an objection, or walk through a scenario and get instant, specific feedback from an AI tutor built into every course &mdash; no manager or scheduling required." },
  { title: "Training triggered by real-time sales performance", body: "A CRM integration monitors performance and automatically assigns the relevant course, refresher, or coaching exercise the moment a rep needs it." },
  { title: "Every product and deal question answered instantly", body: "The AI tutor surfaces answers from your entire knowledge base in seconds, so reps stay sharp in any conversation." },
  { title: "Content that keeps pace with your product and market", body: "Collaborative authoring means anyone can build and update a course &mdash; product teams can publish updates the day a feature ships." },
  { title: "New reps contributing from their first week", body: "Programs build a learning path tailored to each new rep's role and existing knowledge, assigning the right content automatically." },
];

const COMPARISON = [
  { label: "Coaching", before: "Top reps get coached. Everyone else figures it out.", after: "Every rep records pitches and simulates objections, getting instant feedback from an AI tutor that reaches the whole team." },
  { label: "Training relevance", before: "Sales training is scheduled, generic, and rarely tied to what each rep needs right now.", after: "A CRM integration automatically assigns the right training the moment a rep needs it." },
  { label: "Just-in-time knowledge", before: "A rep hits an objection they weren't prepared for and waits for a colleague to reply.", after: "An AI tutor answers any product or deal question instantly, in natural language." },
  { label: "Content creation", before: "Keeping sales content current means submitting requests to L&D and waiting weeks.", after: "Product experts and sales leaders create and update content themselves." },
  { label: "Ramp time", before: "New reps shadow colleagues and take months to reach full productivity.", after: "Personalized learning paths get new reps through product, process, and pitch training faster." },
];

export default function SalesEnablementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana Learn &nbsp;&rsaquo;&nbsp; Sales enablement</span>
            <h1>Knowledge is what<br />closes deals.</h1>
            <p className="lede">Great sales performance develops through knowledge &mdash; the product, the room, the objection that comes out of nowhere. Sana&rsquo;s AI-first learning platform makes sure every rep has what they need to perform at their best.</p>
            <div className="btn-row"><a href="#" className="btn">Book an intro</a></div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Key benefits</span>
            <h2>Every rep at their best</h2>
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
          <Reveal as="div" className="quote-grid">
            <div className="quote-card" style={{ background: "var(--white)" }}>
              <p>&ldquo;We have seen a correlation between the people who use Sana and the people who are winning the most deals on Salesforce.&rdquo;</p>
              <div className="byline"><strong>Judith Völz</strong>Product Education and Enablement Manager, Hootsuite</div>
            </div>
            <div className="quote-card" style={{ background: "var(--white)" }}>
              <p>&ldquo;We&rsquo;ve saved a tremendous amount of time and money, and now our reps get the most up-to-date training in time.&rdquo;</p>
              <div className="byline"><strong>Louise Henriksson</strong>Content and Planning Manager, Polestar</div>
            </div>
            <div className="quote-card" style={{ background: "var(--white)" }}>
              <p>&ldquo;Thanks to Sana, everyone in sales can access the foundational knowledge they need. The experience is much more engaging.&rdquo;</p>
              <div className="byline"><strong>John Thornberg</strong>Commercial Excellence, AddLife</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>This is what AI-first<br />sales enablement looks like</h2>
            <p className="lede">Every stage of the sales enablement experience, before and after Sana.</p>
          </Reveal>
          <div className="benefits-list">
            {COMPARISON.map((row) => (
              <Reveal as="div" className="benefit-row" key={row.label} style={{ gridTemplateColumns: "0.6fr 1fr 1fr" }}>
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
            <h2>This is what it adds up to</h2>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid" style={{ marginTop: "4rem" }}>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>Higher win rates</h3>
              <p style={{ color: "var(--grey)" }}>Reps get instant access to your company&rsquo;s entire knowledge base, so they stay sharp in every conversation.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>Faster ramp time</h3>
              <p style={{ color: "var(--grey)" }}>Personalized learning paths get reps through product, process, and pitch training at their own pace.</p>
            </div>
            <div className="feature-card" style={{ background: "rgba(255,255,255,.06)" }}>
              <h3 style={{ color: "var(--white)" }}>Coaching at scale</h3>
              <p style={{ color: "var(--grey)" }}>An AI tutor reaches every rep on the team with real scenario practice and real feedback.</p>
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
