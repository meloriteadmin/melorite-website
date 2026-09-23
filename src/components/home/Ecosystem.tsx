import { productCategories, productsByCategory, products } from "@/data/products";
import { productHref } from "@/data/navigation";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EcosystemDiagram, type DiagramNode } from "@/components/shared/EcosystemDiagram";
import { ButtonLink } from "@/components/shared/Button";
import { Reveal } from "@/components/animation/Reveal";

const ACCENTS: Record<string, string> = {
  customers: "#2563eb",
  "finance-supply": "#059669",
  people: "#db2777",
  delivery: "#ea580c",
  growth: "#9333ea",
  intelligence: "#0d9488",
};

export function Ecosystem() {
  const nodes: DiagramNode[] = productCategories.map((c) => ({
    id: c.id,
    label: c.name,
    icon: c.icon,
    accent: ACCENTS[c.id],
    description: c.description,
    items: productsByCategory(c.id).map((p) => ({ id: p.id, label: p.shortName, icon: p.icon, accent: p.accent, href: productHref(p.id) })),
  }));

  return (
    <section className="section-y relative overflow-hidden">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The Melorite ecosystem"
            title={["Everything works better", "when it works together."]}
            description={`${products.length} business applications across six areas of your organization — all running on one shared platform core.`}
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/platform" variant="secondary" arrow>
              Discover the Platform
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal y={30}>
          <EcosystemDiagram nodes={nodes} />
        </Reveal>
      </div>
    </section>
  );
}
