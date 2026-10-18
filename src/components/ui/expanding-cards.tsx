"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./expanding-cards.module.css";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc?: string;
  icon: React.ReactNode;
  linkHref: string;
  visual?: React.ReactNode;
}
interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}
/** Reference expanding-card interaction, adapted for Melorite workspace previews and keyboard access. */
export const ExpandingCards = React.forwardRef<HTMLUListElement, ExpandingCardsProps>(
  ({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(defaultActiveIndex);
    return <ul ref={ref} className={cn(styles.cards, className)} {...props}>
      {items.map((item, index) => <li key={item.id} data-active={activeIndex === index} className={styles.card} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)}>
        {item.imgSrc && <div className={styles.background} style={{ backgroundImage: `url("${item.imgSrc}")` }} />}
        <button type="button" className={styles.trigger} aria-expanded={activeIndex === index} aria-controls={`expanding-${item.id}`} onClick={() => setActiveIndex(index)} onKeyDown={event => {
          const next = event.key === "ArrowRight" || event.key === "ArrowDown" ? (index + 1) % items.length : event.key === "ArrowLeft" || event.key === "ArrowUp" ? (index + items.length - 1) % items.length : event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : -1;
          if (next >= 0) { event.preventDefault(); setActiveIndex(next); const buttons = event.currentTarget.closest('ul')?.querySelectorAll<HTMLButtonElement>('button'); buttons?.[next]?.focus(); }
        }}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><Plus size={18} /></button>
        <div id={`expanding-${item.id}`} className={styles.content} inert={activeIndex !== index} aria-hidden={activeIndex !== index}>
          <div className={styles.copy}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p><Link href={item.linkHref}>Explore {item.title}<ArrowUpRight size={16} /></Link></div>
          {item.visual && <div className={styles.visual}>{item.visual}</div>}
        </div>
      </li>)}
    </ul>;
  }
);
ExpandingCards.displayName = "ExpandingCards";
