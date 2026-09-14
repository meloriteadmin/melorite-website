import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";

export const metadata = { title: "Your team. Superpowered by AI agents. | Sana" };

export default function AiAgentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana &nbsp;&rsaquo;&nbsp; Capabilities</span>
            <h1>AI agents in minutes<br />not months</h1>
            <p className="lede">Drive business value with custom AI agents grounded in all your company&rsquo;s knowledge. No code required.</p>
            <div className="btn-row">
              <a href="#" className="btn">Try it free</a>
              <a href="#" className="btn btn-outline">Book an intro</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <Reveal as="div" stagger className="stats-grid cols-3">
            <StatCounter label="Global law firm" value={62} suffix="%" desc="time savings automating compiling and analysis of legal docs" />
            <StatCounter label="European fintech scaleup" value={10} suffix="h" desc="time savings using an AI agent for new hire onboarding" />
            <StatCounter label="Leading manufacturer" value={95} suffix="%" desc="faster product answers using an AI agent" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/agents-banner-01.webp" alt="Sana meeting recall" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Remembers all<br />your meetings</h2>
              <p className="lede">More than a note-taker, Sana understands, summarizes, and stores your meetings to help you act smart and fast on next steps.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Sana gives us control over the AI, allowing us to choose the material it accesses and tailor its parameters to our specific needs.&rdquo;</p>
              <div className="byline"><strong>Peter Jidesjö</strong>Executive Vice President, Permobil</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black">
        <div className="container">
          <Reveal as="div" className="section-head left" style={{ color: "var(--white)" }}>
            <h2>Knowledge you<br />can trust</h2>
            <p className="lede" style={{ color: "var(--grey)" }}>Your agents will cite their sources across internal and public documentation, and deep link to relevant sources.</p>
          </Reveal>
          <Reveal as="div" stagger className="stats-grid cols-3" style={{ borderBottom: "none", color: "var(--white)" }}>
            <StatCounter label="Up to" value={50} suffix="%" desc="productivity increase" />
            <StatCounter label="Up to" value={3} suffix="x" desc="faster knowledge retrieval" />
            <StatCounter label="Up to" value={40} suffix="%" desc="cost savings" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split reverse">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/agents-model-agnostic.webp" alt="Integrated in your daily tools" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Integrated in your<br />daily tools</h2>
              <p className="lede">Let the support come to you. With Sana you can configure your assistants to act on tasks directly from tools like Slack and Salesforce.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Asking Sana in Slack for someone&rsquo;s actions from the last meeting, or our definition of retention&mdash;it&rsquo;s a game-changer.&rdquo;</p>
              <div className="byline"><strong>Anders Ivarsson</strong>CTO, Voi</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">State-of-the-art RAG and multi-step reasoning</span>
            <h2>Agents that plan,<br />reason, and learn</h2>
          </Reveal>
          <Reveal as="div" stagger className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Agents that plan, reason, and learn</h3>
              <p>To go beyond basic question answering, Sana understands the user&rsquo;s intent and acts accordingly&mdash;reasoning in multiple steps about what knowledge sources are relevant, how they should be combined, and what action to take.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📎</div>
              <h3>Multimodal understanding</h3>
              <p>Sana connects to all your company&rsquo;s knowledge and can understand everything from PDFs and spreadsheets to meeting recordings and CRM assets, across text, tables, images, and graphs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>Generative UI</h3>
              <p>Sana goes beyond the text in / text out chat interface with dynamically generated UI components&mdash;widgets for taking actions and workflows for batch multi-step document analysis.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;Imagine having a system that not only holds all the know-how your team has ever accumulated but also connects the dots in ways we might not see on our own.&rdquo;</p>
              <div className="byline"><strong>Johannes Sundlo</strong>HR Director, Ex-Spotify</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>No LLM lock-ins</h2>
            <p className="lede">Your assistants, your rules. Choose the best model for the task and optimize performance continuously.</p>
          </Reveal>
        </div>
      </section>

      <EnterpriseGradeBlock />
    </>
  );
}
