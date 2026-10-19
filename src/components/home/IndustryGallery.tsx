"use client";

import * as motion from "motion/react-m";
import { AnimatePresence, useReducedMotion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const groups = [
  [{ slug: "real-estate", name: "Real estate", body: "From the first enquiry to the final booking.", tone: "real-estate" }, { slug: "clinic", name: "Clinics", body: "More time for patients. Less time on paperwork.", tone: "clinic" }, { slug: "commerce", name: "Commerce", body: "Your store, orders and stock. Together.", tone: "commerce" }],
  [{ slug: "crm", name: "Sales teams", body: "Keep every lead and follow-up in view.", tone: "crm" }, { slug: "ai-calling", name: "AI Calling", body: "An extra team member on the phone, all day.", tone: "ai-calling" }, { slug: "agency", name: "Agencies", body: "Client work, calendars and approvals. Connected.", tone: "agency" }],
];
export function IndustryGallery() {
 const [active,setActive] = useState(0);
 const reduced=useReducedMotion();
 return <section data-nav="light" className="industry-gallery"><div className="rail-inner"><div className="industry-intro"><h2 className="h-section">Built around your business.</h2><p>Explore purpose-built products for the people, conversations and work that keep your business moving.</p><div className="industry-toggle" role="group" aria-label="Choose product group">{["Business operations", "Sales & conversations"].map((label,i)=><button type="button" key={label} aria-pressed={active===i} onClick={()=>setActive(i)}>{label}</button>)}</div></div><AnimatePresence mode="wait" initial={false}><motion.div key={active} className="industry-mosaic" initial={{opacity:0,y:reduced ? 0 : 12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced ? 0 : -8}} transition={{duration:reduced ? 0 : .28,ease:"easeInOut"}}>{groups[active].map((item,i)=><Link key={item.slug} href={`/products/${item.slug}`} className={`story-card story-${item.tone} mosaic-item mosaic-item-${i}`}><svg aria-hidden viewBox="0 0 400 400" className="mosaic-contours"><g fill="none" stroke="white" opacity=".2">{[0,1,2,3,4].map(n=><rect key={n} x={40+n*15} y={40+n*15} width={320-n*30} height={320-n*30} rx={70-n*8} transform={`rotate(${n*12} 200 200)`}/>)}</g></svg><span className="story-arrow"><ArrowUpRight size={24}/></span><h3 className="story-wordmark"><span>melorite</span>{item.name}</h3><p className="story-description">{item.body}</p></Link>)}</motion.div></AnimatePresence><Link href="/products" className="pill pill-glass mt-9">Explore all products <ArrowUpRight size={16}/></Link></div></section>;
}
