"use client";

import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { ProductSymbol } from "@/components/brand/ProductSymbol";
import Link from "next/link";
import { productBySlug } from "@/data/products";
import styles from "./ProductJourney.module.css";

type Props = { slug: string; title: string; steps: string[]; descriptions: readonly string[] };
export function ProductJourney({slug,title,steps,descriptions}: Props) {
  const [active,setActive]=useState(0);
  const id=useId();
  const tabs=useRef<(HTMLButtonElement|null)[]>([]);
  function select(index:number,focus=false){setActive(index);if(focus){tabs.current[index]?.focus();tabs.current[index]?.scrollIntoView({block:"nearest",inline:"nearest"});}}
  return <section data-nav="light" className={styles.section} aria-labelledby={`${id}-heading`}>
    <div className="rail-inner">
      <header className={styles.heading}><div><p>Core workflow</p><h2 id={`${id}-heading`}>{title}</h2></div><span>One connected journey.<br/>Explore each step along the way.</span></header>
      <div className={styles.canvas}>
        <div className={styles.sidebar}><div className={styles.track} role="tablist" aria-orientation="vertical" aria-label="Core workflow stages">{steps.map((step,i)=><button type="button" key={step} ref={node=>{tabs.current[i]=node;}} id={`${id}-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`${id}-panel`} tabIndex={active===i?0:-1} onClick={()=>select(i)} onKeyDown={event=>{let next=active;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(active+1)%steps.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(active-1+steps.length)%steps.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=steps.length-1;else return;event.preventDefault();select(next,true);}}><span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong><ArrowUpRight size={15}/></button>)}</div><Link href={`/book-demo?product=${slug}`} className="pill pill-dark">Explore in a demo <ArrowUpRight size={15}/></Link></div>
        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className={styles.detail}>
          <div className={styles.stage}><span>Core workflow / {String(active+1).padStart(2,'0')}</span><h3>{steps[active]}</h3><p>{descriptions[active]}</p></div>
          <div className={styles.preview} data-tone={active%3}><svg viewBox="0 0 800 430" preserveAspectRatio="none" aria-hidden="true"><path d="M0 430V300Q80 210 160 300Q160 180 270 180Q390 180 400 100Q410 180 530 180Q640 180 640 300Q720 210 800 300V430Z" fill="currentColor"/></svg><div className={styles.record}><div className={styles.recordHeader}><ProductSymbol slug={slug}/><span>{productBySlug(slug)?.short}</span><small>Workflow preview</small></div><div className={styles.recordBody}><span className={styles.recordLabel}>{steps[active]}</span><h4>{active===0?'Start with the right context.':'Keep the work moving.'}</h4><p>{descriptions[active]}</p><div className={styles.recordRow}><Check size={15}/><span>{active?`Previous: ${steps[active-1]}`:'Capture the essential details'}</span></div><div className={styles.recordRow}><ArrowRight size={15}/><span>{active<steps.length-1?`Next: ${steps[active+1]}`:'Keep the history together'}</span></div></div></div></div>
          <div className={styles.bottom}><span>Illustrative workspace · workflow preview</span><div className={styles.controls}><button type="button" aria-label="Previous workflow stage" disabled={active===0} onClick={()=>select(active-1)}><ArrowLeft size={18}/></button><button type="button" aria-label="Next workflow stage" disabled={active===steps.length-1} onClick={()=>select(active+1)}><ArrowRight size={18}/></button></div></div>
        </div>
      </div>
    </div>
  </section>;
}
