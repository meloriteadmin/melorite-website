import Reveal from "@/components/Reveal";

export default function ModelAgnostic() {
  return (
    <section>
      <div className="container">
        <Reveal as="div" className="model-agnostic">
          <img className="bg" src="/assets/img/agents-model-agnostic.webp" alt="Model agnostic" />
          <div className="model-popover">
            <div className="model-row selected">
              <div><div className="name">Auto</div><div className="desc">The most suitable model for the job</div></div>
              <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="model-row"><div><div className="name">GPT-5</div><div className="desc">Flagship GPT model for complex tasks</div></div></div>
            <div className="model-row"><div><div className="name">Claude Sonnet 4.5</div><div className="desc">Anthropic&rsquo;s flagship model</div></div></div>
            <div className="model-row"><div><div className="name">Claude Haiku 4.5</div><div className="desc">Fast responses, near-frontier intelligence</div></div></div>
            <div className="model-row"><div><div className="name">GPT-5 mini</div><div className="desc">Balanced for speed and complexity</div></div></div>
          </div>
          <div className="copy">
            <div className="eyebrow-tag">Model agnostic</div>
            <h3>Only use the AI models that work best for you. With Sana, you can choose and switch between leading models as you need.</h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
