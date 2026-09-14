import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";

export const metadata = { title: "Finance and accounting connected to your business | Melorite" };

export default function EnterpriseSearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Melorite &nbsp;&rsaquo;&nbsp; Business apps</span>
            <h1>Beyond search</h1>
            <p className="lede">Get instant, up-to-date answers to your most complex work questions without having to dig for information across your company&rsquo;s apps.</p>
            <div className="btn-row">
              <a href="#" className="btn">Try it free</a>
              <a href="#" className="btn btn-outline">Book an intro</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/melorite/hero-platform.png" alt="Connected finance and accounting workflows" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Search every app<br />and file in seconds</h2>
              <p className="lede">Knowledge exists in multiple forms. Sana can find whatever you&rsquo;re looking for, down to the details of your past calls.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;The workload on our People team has drastically reduced since HR policies became indexed and accessible in Sana.&rdquo;</p>
              <div className="byline"><strong>Anders Orsedal</strong>CTO and Co-founder, Juni</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black">
        <div className="container">
          <Reveal as="div" className="section-head left" style={{ color: "var(--white)" }}>
            <h2>Get answers.<br />Not just links.</h2>
            <p className="lede" style={{ color: "var(--grey)" }}>Sometimes you need a file. Most of the time, you&rsquo;re trying to solve a problem. Sana helps you do both.</p>
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
              <img src="/assets/img/melorite/crm-sales.png" alt="Business data connected in real time" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>The latest sources.<br />Personalized to you.</h2>
              <p className="lede">Real-time indexing gives you access to the latest and greatest company information. With results that keep improving over time.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="feature-split">
            <Reveal as="div" className="feature-split-media">
              <img src="/assets/img/browser.svg" alt="Deploy quickly" />
            </Reveal>
            <Reveal as="div" className="feature-split-copy">
              <h2>Deploy quickly.<br />And with full flexibility.</h2>
              <p className="lede">Whether you&rsquo;re using off-the-shelf connectors or Sana&rsquo;s API, you&rsquo;ll be up and running fast.</p>
            </Reveal>
          </div>
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
            <span className="eyebrow">Safe, secure, and supported at every step</span>
            <h2>ISO 27001 certified<br />and GDPR compliant</h2>
            <p className="lede">Data encrypted at rest with AES 256 and in transit with TLS 1.2+</p>
          </Reveal>
        </div>
      </section>

      <EnterpriseGradeBlock />
    </>
  );
}
