import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

const features = [
  { title: "A connected foundation for your business", artwork: <>One platform.<br />Every possibility.</>, category: "Platform", note: "People, records & workflows", href: "/platform", tone: "flows" },
  { title: "Software shaped around the way you work", artwork: <>Your business.<br />Your workflow.</>, category: "Custom solutions", note: "Built around your team", href: "/custom-solutions", tone: "solutions" },
  { title: "Meet your next team member on the phone", artwork: <>A more human<br />way to connect.</>, category: "AI Calling", note: "Conversations that move work forward", href: "/products/ai-calling", tone: "voice" },
];

export function ExploreCards() {
  return (
    <section data-nav="light" className="explore-section">
      <div className="rail-inner">
        <div className="explore-heading">
          <h2 className="h-section">More possibilities with Melorite</h2>
          <Link href="/products" className="pill pill-glass">Explore all <ArrowUpRight size={16} /></Link>
        </div>
        <div className="explore-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.href} delay={index * .05}>
              <Link href={feature.href} className="explore-card group">
                <div className={`explore-art explore-art-${feature.tone}`}>
                  {feature.tone === "solutions" && <svg aria-hidden viewBox="0 0 400 400" preserveAspectRatio="none" className="explore-contours"><g fill="none" stroke="white" strokeWidth=".7" opacity=".28">{Array.from({ length: 15 }, (_, i) => <rect key={i} x={200 - (i + 1) * 18} y={200 - (i + 1) * 18} width={(i + 1) * 36} height={(i + 1) * 36} rx={(i + 1) * 12} transform="rotate(45 200 200)" />)}</g></svg>}
                  <span>{feature.artwork}</span>
                </div>
                <div className="explore-caption">
                  <h3>{feature.title}<ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></h3>
                  <p><span>{feature.category}</span><span>{feature.note}</span></p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
