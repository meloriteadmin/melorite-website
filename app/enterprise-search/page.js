import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";

export const metadata = { title: "Documents and connected knowledge | Melorite" };

export default function EnterpriseSearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Melorite &nbsp;&rsaquo;&nbsp; Business apps</span>
            <h1>Documents and knowledge, connected to the work they support.</h1>
            <p className="lede">Melorite Documents gives teams a shared home for files, folders, templates, contracts, approvals, knowledge and archives - all connected to your business records and workflows.</p>
            <div className="btn-row">
              <a href="/contact" className="btn">Talk to us</a>
              <a href="/apps/documents" className="btn btn-outline">Explore Documents</a>
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
              <h2>One trusted home<br />for business knowledge</h2>
              <p className="lede">Keep files and knowledge structured around the customers, projects, people and processes they support.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;The best business documents are not isolated files. They are part of the work, decision and relationship they support.&rdquo;</p>
              <div className="byline"><strong>Melorite Documents</strong>Shared platform service</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black">
        <div className="container">
          <Reveal as="div" className="section-head left" style={{ color: "var(--white)" }}>
            <h2>Knowledge with<br />business context.</h2>
            <p className="lede" style={{ color: "var(--grey)" }}>Documents, templates, approvals and archives become more useful when they are connected to the records and workflows around them.</p>
          </Reveal>
          <Reveal as="div" stagger className="stats-grid cols-3" style={{ borderBottom: "none", color: "var(--white)" }}>
            <StatCounter label="One" value="" suffix="" desc="shared document service" />
            <StatCounter label="Across" value="" suffix="" desc="apps and industry solutions" />
            <StatCounter label="With" value="" suffix="" desc="templates, approvals and archives" />
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
              <h2>Controlled documents.<br />Clearer handoffs.</h2>
              <p className="lede">Use reusable templates, approval paths and connected activity records to keep important business information current and usable.</p>
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
              <h2>Designed for the<br />whole platform.</h2>
              <p className="lede">The shared platform core supports files, activities, communications, integrations and APIs across every active Melorite service.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="quote-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="quote-card">
              <p>&ldquo;One source of truth is not only about storage. It is about giving every record a clear owner and making it available wherever the work needs it.&rdquo;</p>
              <div className="byline"><strong>Melorite platform design</strong>Shared data principle</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="reduced-padding">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Shared platform controls</span>
            <h2>Files, activities and audit<br />on one foundation</h2>
            <p className="lede">Read more about Melorite&rsquo;s tenant isolation, operational visibility and platform controls.</p>
          </Reveal>
        </div>
      </section>

      <EnterpriseGradeBlock />
    </>
  );
}
