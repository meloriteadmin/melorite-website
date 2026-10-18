"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resourceHref, type Resource } from "@/data/resources";
import { productBySlug } from "@/data/products";
import { ProductSymbol } from "@/components/brand/ProductSymbol";
import caseStyle from "./CaseJourney.module.css";
import styles from "./ResourceDesign.module.css";
export function CaseJourney({items}:{items:Resource[]}){const[active,setActive]=useState(0);const item=items[active];const steps=item.sections.find(part=>part.steps.length)?.steps.slice(0,3)??[];return <section className={styles.journeySection}>
 <div className={styles.journeyHeading}><h2>A business challenge.<br/>A connected way forward.</h2><p>Follow a proposed workflow through the people, records and actions that make it work.</p></div>
 <div id="case-journey-panel" role="tabpanel" aria-labelledby={`case-journey-${active}`} className={caseStyle.panel} tabIndex={0}><div className={caseStyle.story}><span className={caseStyle.label}>FIELD EXAMPLE / 0{active+1}</span><ProductSymbol slug={item.product}/><h3>{item.title}</h3><p>{item.description}</p><Link href={resourceHref(item)}>Read the example<ArrowUpRight size={16}/></Link><small>Illustrative business scenario</small></div><div className={caseStyle.process}><div className={caseStyle.processHeader}><span>{productBySlug(item.product)?.short}</span><span>THE PROPOSED PROCESS</span></div>{steps.map((step,i)=><div key={step} className={caseStyle.step}><span>0{i+1}</span><div><h4>{step}</h4><p>{i===0?'Bring the details into one working record.':i===1?'Make the decision and ownership clear.':'Move forward with the context attached.'}</p></div></div>)}<div className={caseStyle.footer}>People. Information. The next useful action.</div></div></div>

 <div className={styles.journeyTabs} role="tablist" aria-label="Explore example workflows">{items.map((entry,i)=><button type="button" role="tab" id={`case-journey-${i}`} aria-controls="case-journey-panel" aria-selected={i===active} tabIndex={i===active?0:-1} key={entry.slug} onClick={()=>setActive(i)} onKeyDown={event=>{const next=event.key==='ArrowRight'?(i+1)%items.length:event.key==='ArrowLeft'?(i+items.length-1)%items.length:event.key==='Home'?0:event.key==='End'?items.length-1:-1;if(next>=0){event.preventDefault();setActive(next);document.getElementById(`case-journey-${next}`)?.focus();}}}><strong>{productBySlug(entry.product)?.short}</strong><span>{entry.title}</span></button>)}</div>
 </section>}
