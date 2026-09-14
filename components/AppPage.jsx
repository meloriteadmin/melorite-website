import Reveal from "@/components/Reveal";
import EnterpriseGradeBlock from "@/components/EnterpriseGradeBlock";

export default function AppPage({ app }) {
  return <>
    <section className="page-hero">
      <div className="container">
        <Reveal as="div">
          <span className="eyebrow">Melorite &nbsp;&rsaquo;&nbsp; {app.eyebrow}</span>
          <h1>{app.title}</h1>
          <p className="lede">{app.lede}</p>
          <div className="btn-row"><a href="/contact" className="btn">Talk to us</a><a href="/platform" className="btn btn-outline">Explore the Platform</a></div>
        </Reveal>
      </div>
    </section>
    <section className="no-padding"><div className="container"><Reveal as="div" className="hero-media"><img src={app.image} alt={`${app.name} in Melorite`} /></Reveal></div></section>
    <section><div className="container">
      <Reveal as="div" className="section-head"><span className="eyebrow">{app.name}</span><h2>{app.featuresHead}</h2><p className="lede">{app.featuresCopy}</p></Reveal>
      <div className="benefits-list">{app.features.map((feature, index) => <Reveal as="div" className="benefit-row" key={feature.title}><div className="num">{String(index + 1).padStart(2, "0")}</div><div><h3>{feature.title}</h3><p>{feature.body}</p></div></Reveal>)}</div>
    </div></section>
    <section className="bg-sand"><div className="container"><Reveal as="div" className="section-head"><h2>Connected by design</h2><p className="lede">{app.connected}</p><a href="/contact" className="btn" style={{ marginTop: "2.4rem" }}>Plan your rollout</a></Reveal></div></section>
    <EnterpriseGradeBlock />
  </>;
}
