"use client";

import * as motion from "motion/react-m";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SceneStage } from "@/components/product/Scenes";
const cards=[{title:"One clear customer view",body:"See people, conversations and follow-ups in context.",slug:"crm"},{title:"Client work, connected",body:"Bring projects, calendars and approvals together.",slug:"agency"},{title:"Conversations that move work forward",body:"Keep calls and their next steps close to your team.",slug:"ai-calling"},{title:"Your operations at a glance",body:"Keep orders, stock and customers in one workspace.",slug:"commerce"}];
export function LegacyCapabilityRail(){
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [travel,setTravel] = useState(0);
  const reduced = useReducedMotion();
  useEffect(()=>{
    const measure=()=>setTravel(window.innerWidth > 900 && !reduced && track.current && viewport.current ? Math.max(0,track.current.scrollWidth-viewport.current.clientWidth) : 0);
    measure(); const observer=new ResizeObserver(measure);
    if(viewport.current) observer.observe(viewport.current);
    if(track.current) observer.observe(track.current);
    return ()=>observer.disconnect();
  },[reduced]);
  const {scrollYProgress}=useScroll({target:section,offset:["start start","end end"]});
  const x=useTransform(scrollYProgress,[0,1],[0,-travel]);
  return <section id="capability-showcase" ref={section} data-nav="light" className={`capability-section ${travel ? "capability-pinned" : ""}`} style={travel ? {height:`calc(100vh + ${travel}px)`} : undefined}><div className="capability-sticky"><div className="rail-inner"><div className="capability-intro"><h2 className="h-section">Powering every part of your workflow.</h2><p>Purpose-built workspaces, connected by one simple idea: make the everyday work easier.</p></div><div ref={viewport} className="capability-viewport"><motion.div ref={track} className="capability-rail" style={{x:travel ? x : 0}}>{cards.map(card=><Link key={card.slug} href={`/products/${card.slug}`} className="capability-card"><div><h3>{card.title}<ArrowUpRight size={18}/></h3><p>{card.body}</p></div><SceneStage slug={card.slug} variant="b"/></Link>)}</motion.div></div></div></div></section>;
}
