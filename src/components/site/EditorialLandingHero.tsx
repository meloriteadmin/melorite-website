"use client";

import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-m";
import { Play } from "lucide-react";
import { site } from "@/data/site";
import { EASE } from "@/lib/utils";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

type EditorialLandingHeroProps = {
  label: string;
  title: string;
  mutedTitle: string;
  description: string;
  image: string;
  imagePosition?: string;
  secondaryLabel: string;
  secondaryHref: string;
  imageLabel: string;
  showImageAction?: boolean;
};

export function EditorialLandingHero({
  title,
  mutedTitle,
  description,
  image,
  imagePosition = "center",
  secondaryLabel,
  secondaryHref,
  imageLabel,
  showImageAction = true,
}: EditorialLandingHeroProps) {
  return (
    <section data-nav="light" className="rails rails-light overflow-hidden bg-[#ffffff] pt-[64px] text-[#111] ">
      <div className="rail-inner">
        <div className="grid gap-10 py-[clamp(64px,9vw,136px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:items-center lg:gap-[clamp(48px,6vw,110px)]">
          <motion.h1 {...reveal(0.05)} className="font-sans text-[clamp(2.6rem,1.5rem+2.9vw,4.6rem)] font-medium leading-[.98] tracking-[-.055em]">
            {title}<br /><span className="text-[#111]/45">{mutedTitle}</span>
          </motion.h1>

          <motion.div {...reveal(0.2)}>
            <p className="max-w-[40ch] text-[clamp(1.05rem,.98rem+.4vw,1.4rem)] leading-[1.45] text-[#111]/55">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.demoHref} className="pill pill-dark h-12 bg-black px-7 text-[16px]">Book a demo</Link>
              <Link href={secondaryHref} className="pill h-12 border border-black/15 px-6 text-[16px] hover:bg-black/[.03]">{secondaryLabel} <Play className="size-3 fill-current" /></Link>
            </div>
          </motion.div>
        </div>

        <motion.div {...reveal(0.36)} className="media-frame relative mb-[clamp(64px,8vw,120px)] aspect-[16/9] min-h-[380px] overflow-hidden border border-black/[.06] bg-[#d9d9d4] shadow-[0_30px_90px_-60px_rgba(17,23,53,.35)]">
          <Image src={image} alt={imageLabel} fill priority sizes="(max-width: 768px) 100vw, 90vw" className="object-cover" style={{ objectPosition: imagePosition }} />
          {showImageAction && (
            <span className="absolute bottom-[8%] left-1/2 inline-flex h-12 -translate-x-1/2 items-center gap-2 rounded-full border border-white/30 bg-black/45 px-6 text-[16px] text-white backdrop-blur-md">
              Play <Play className="size-3 fill-white" />
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
