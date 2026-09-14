import Reveal from "@/components/Reveal";
import IntegrationsGrid from "./IntegrationsGrid";

export const metadata = { title: "Connect all your knowledge sources instantly | Sana Integrations" };

export default function IntegrationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Sana &nbsp;&rsaquo;&nbsp; Integrations</span>
            <h1>Connect all your knowledge<br />sources instantly</h1>
            <p className="lede">100+ apps automatically synced with Sana. With a comprehensive suite of integrations, Sana becomes your company&rsquo;s single source of knowledge.</p>
            <div className="btn-row">
              <a href="#" className="btn">Book an intro</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head left">
            <h2>Turnkey integrations</h2>
            <p className="lede">We&rsquo;re constantly adding new connectors. If you can&rsquo;t find what you need, let us know.</p>
          </Reveal>
          <Reveal as="div">
            <IntegrationsGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
