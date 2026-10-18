"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { productDetails } from "@/data/product-details";
import { SceneStage } from "./Scenes";
import styles from "@/components/editorial/Editorial.module.css";
export function ProductWorkspace({ slug, name }: { slug: string; name: string }) {
 const [active,setActive]=useState(0);
 const labels=slug==='ai-calling'?['Conversations','Call outcomes','Connected work']:slug==='clinic'?['Appointments','Patient records','Daily overview']:slug==='agency'?['Plan','Review','Deliver']:slug==='commerce'?['Store','Orders','Customers']:slug==='real-estate'?['Inventory','Buyer journey','Project overview']:['Capture','Manage','Grow'];
 return <div className={styles.tabPreview}>
  <div className={styles.tabs} role="tablist" aria-label={`${name} workspace views`}>{labels.map((label,i)=><button key={label} type="button" id={`${slug}-view-${i}`} role="tab" aria-selected={active===i} aria-controls={`${slug}-workspace`} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={event=>{const next=event.key==='ArrowRight'?(i+1)%3:event.key==='ArrowLeft'?(i+2)%3:event.key==='Home'?0:event.key==='End'?2:-1;if(next>=0){event.preventDefault();setActive(next);document.getElementById(`${slug}-view-${next}`)?.focus();}}}>{label}</button>)}</div>
  <div id={`${slug}-workspace`} role="tabpanel" aria-labelledby={`${slug}-view-${active}`} className={styles.preview} tabIndex={0}><div className={styles.previewInner}><div className={styles.previewBar}><strong>melorite · {name}</strong><span>{labels[active]} · Illustrative workspace</span></div>{active===2?<div className={styles.workSummary}><div><p className={styles.eyebrow}>Connected work</p><h3>{productDetails[slug].workflowTitle}</h3><p>Clear stages, shared context and a next action for the people moving the work forward.</p></div><ol>{productDetails[slug].workflow.map((stage,i)=><li key={stage}><span>{String(i+1).padStart(2,'0')}</span>{stage}<Check size={14}/></li>)}</ol></div>:<SceneStage key={`${slug}-${active}`} slug={slug} variant={active===0?'a':'b'}/>}</div></div>
 </div>;
}
