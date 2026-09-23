import { ButtonLink } from "./Button";
import { TextReveal } from "@/components/animation/TextReveal";
import { Reveal } from "@/components/animation/Reveal";
import { ConnectionField } from "@/components/animation/ConnectionField";
import { Eyebrow } from "./SectionHeading";

type CTA = { label: string; href: string };

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
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-navy text-white">
        <ConnectionField className="opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_120%,rgba(37,99,235,0.45),transparent_70%)]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden />
        <div className="container-x relative flex flex-col items-center py-24 text-center md:py-36">
          {eyebrow && (
            <Reveal y={10} className="mb-6">
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <TextReveal as="h2" lines={title} className="text-h1 max-w-[16ch] text-balance text-white" />
          {description && (
            <Reveal delay={0.2} y={14}>
              <p className="text-lead mx-auto mt-6 max-w-[52ch] text-white/65">{description}</p>
            </Reveal>
          )}
          <Reveal delay={0.3} y={14} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={primary.href} size="lg" arrow magnetic>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} size="lg" variant="outline-light">
                {secondary.label}
              </ButtonLink>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
