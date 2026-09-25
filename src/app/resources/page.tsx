import type { Metadata } from "next";
import { PageTransition } from "@/components/animation/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";

const resources = [
  ["Blog", "Perspectives on connected business operations and the future of work."],
  ["Guides", "Practical guidance for evaluating, adopting and growing with Melorite."],
  ["Help Center", "Answers and support for getting the most from your workspace."],
  ["Documentation", "Product and platform reference for Melorite teams."],
  ["Product Updates", "A clear view of what is new across the Melorite platform."],
];

const title = "Resources | Melorite";
const description = "Guides, documentation, product updates and support resources from Melorite.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/resources" }, openGraph: { title, description, url: "/resources" } };

export default function ResourcesPage() {
  return (
    <PageTransition>
      <section className="border-b border-line bg-paper pb-16 pt-[124px] md:pb-20 md:pt-[144px]">
        <div className="container-x"><SectionHeading eyebrow="Resources" size="h1" title={["Useful context for", "every Melorite team."]} description="Explore product knowledge, practical guidance and the latest platform updates." /></div>
      </section>
      <section className="section-y bg-white"><div className="container-x max-w-5xl"><div className="divide-y divide-line border-y border-line">
        {resources.map(([title, description]) => <article key={title} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"><h2 className="text-[17px] font-semibold text-navy">{title}</h2><p className="text-[15px] leading-relaxed text-muted">{description}</p></article>)}
      </div></div></section>
    </PageTransition>
  );
}
