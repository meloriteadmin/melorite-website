import Reveal from "@/components/Reveal";

export default function ModelAgnostic() {
  return (
    <section>
      <div className="container">
        <Reveal as="div" className="model-agnostic">
          <img className="bg" src="/assets/img/agents-model-agnostic.webp" alt="Model agnostic" />
          <div className="model-popover">
            <div className="model-row selected">
              <div><div className="name">Connected by default</div><div className="desc">Shared business data across apps</div></div>
              <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="model-row"><div><div className="name">Modular apps</div><div className="desc">Choose the functions you need</div></div></div>
            <div className="model-row"><div><div className="name">Shared workflows</div><div className="desc">Coordinate work between teams</div></div></div>
            <div className="model-row"><div><div className="name">Industry fit</div><div className="desc">Adapted to sector-specific operations</div></div></div>
            <div className="model-row"><div><div className="name">Clear visibility</div><div className="desc">A connected view of your organisation</div></div></div>
          </div>
          <div className="copy">
            <div className="eyebrow-tag">Designed to adapt</div>
            <h3>Start with one app or build a complete connected suite. Melorite grows with your organisation and the industry it operates in.</h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
