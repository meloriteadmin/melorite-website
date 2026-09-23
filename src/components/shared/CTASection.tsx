import { ButtonLink } from "./Button";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";
import { Eyebrow } from "./SectionHeading";

type CTA = { label: string; href: string };

/** Clear, compact closing call to action. */
export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string[];
  description?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="border-t border-line bg-white">
      <div className="container-x flex flex-col gap-8 py-14 md:py-18 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[700px]">
            {eyebrow && (
              <Reveal y={8} className="mb-4">
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
            )}
            <TextReveal as="h2" lines={title} className="text-h2 max-w-[24ch] text-balance text-navy" />
            {description && (
              <Reveal delay={0.15} y={12}>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted">{description}</p>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.2} y={12} className="flex shrink-0 flex-wrap items-center gap-3">
              <ButtonLink href={primary.href} size="lg" arrow magnetic>
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} size="lg" variant="outline">
                  {secondary.label}
                </ButtonLink>
              )}
          </Reveal>
      </div>
    </section>
  );
}
