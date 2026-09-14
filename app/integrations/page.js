import Reveal from "@/components/Reveal";
import IntegrationsGrid from "./IntegrationsGrid";

export const metadata = { title: "Connect your business systems | Melorite" };

export default function IntegrationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Melorite &nbsp;&rsaquo;&nbsp; Connected data</span>
            <h1>Connect all your knowledge<br />sources instantly</h1>
            <p className="lede">Connect the systems your teams already depend on, so customer, people, finance, and operational information can move through shared workflows.</p>
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
