"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Check, Phone, ShieldCheck, UserRound } from "lucide-react";
import { WorkflowGraph } from "./WorkflowGraph";
import { SceneStage } from "@/components/product/Scenes";

const panels = [
  { title: "Connected workflows", body: "Keep records, owners and next steps connected as work moves across your team." },
  { title: "Connections that fit", body: "Plan the tools and data your team needs to connect as part of your Melorite setup." },
  { title: "A clear view of progress", body: "See activity and outcomes together, so your team knows what needs attention." },
];

function ConversationFlow() {
 return <div className="conversation-flow" aria-label="Illustrative call to appointment workflow">
   <div className="flow-topline"><span className="flow-live">Example workflow</span><span>Enquiry → action</span></div>
   <div className="flow-stages">
    <div><span className="flow-stage-icon"><Phone size={21}/></span><div><strong>A new enquiry comes in</strong><p>The assistant understands what the caller needs.</p></div><span className="flow-step-number">01</span></div>
    <span className="flow-connector"/>
    <div><span className="flow-stage-icon"><CalendarCheck size={21}/></span><div><strong>The next step is arranged</strong><p>Capture a preferred appointment or follow-up.</p></div><span className="flow-step-number">02</span></div>
    <span className="flow-connector"/>
    <div><span className="flow-stage-icon"><UserRound size={21}/></span><div><strong>Your team has the context</strong><p>Keep the summary and next action together.</p></div><span className="flow-step-number">03</span></div>
   </div>
   <div className="flow-complete"><Check size={15}/>A clear handoff. Nothing lost between steps.</div>
 </div>;
}

function AnalyticsPreview() {
  return <div className="analytics-preview" aria-label="Illustrative call analytics with sample data">
    <div className="analytics-chart"><span>Call outcomes</span><strong>Follow-up activity</strong><svg viewBox="0 0 480 190" role="img" aria-label="Sample answered and follow-up call trends"><g stroke="#eeece8" strokeWidth="1">{[30,75,120,165].map(y=><path key={y} d={`M0 ${y} H480`}/>)}</g><path d="M0 130 C30 120 45 145 75 110 S120 120 155 90 S210 120 250 75 S310 100 350 60 S410 75 480 38 L480 190 L0 190Z" fill="#f3f5ff"/><path d="M0 130 C30 120 45 145 75 110 S120 120 155 90 S210 120 250 75 S310 100 350 60 S410 75 480 38" fill="none" stroke="#536aff" strokeWidth="2"/><path d="M0 95 C40 70 55 100 90 65 S145 80 190 45 S240 55 280 35 S340 60 380 25 S430 40 480 15" fill="none" stroke="#ec8058" strokeWidth="2"/></svg><div className="analytics-key"><span>● Answered</span><span>● Follow-up</span></div></div>
    <div className="analytics-summary"><span>Conversation history</span><strong>Context, kept together.</strong><p>Call notes</p><i/><p>Next steps</p><i/><p>Team handoffs</p><i/></div>
    <p className="preview-label">Illustrative dashboard · sample data</p>
  </div>;
}

export function WorkflowShowcase({ calling = false }: { calling?: boolean }) {
  const [active, setActive] = useState(0);
  return <section id="workflow-showcase" data-nav="light" className="workflow-showcase scroll-mt-32"><div className="rail-inner">
    <div className="workflow-heading"><h2 className="h-section">{calling ? "From first hello to the next step." : "One platform for the way your business works."}</h2><p>{calling ? "Connect conversations to the work that follows, with clear handoffs and a history your team can use." : "Bring people, records and everyday actions together in one consistent workspace."}</p></div>
    <div className="workflow-display" role="tabpanel" id={`workflow-panel-${calling}`} aria-labelledby={`workflow-tab-${calling}-${active}`} tabIndex={0}>
      {active === 0 ? <WorkflowGraph /> : active === 1 ? <div className="connection-preview"><aside className="connection-sidebar" aria-hidden="true"><strong>Workspace</strong>{["All connections", "Customers", "Scheduling", "Conversations", "Operations", "Reporting"].map((label,i)=><span key={label} className={i===0 ? "connection-current" : ""}>{label}</span>)}</aside><div className="connection-main"><div><p className="preview-label">Plan your connected workspace</p><h3>The right context, in the right place.</h3><p>Integration availability and scope are agreed during setup.</p></div><div className="connection-grid">{["Customer records", "Appointments", "Call history", "Tasks & follow-ups", "Orders & payments", "Reports"].map(label => <div key={label}><Check size={18} /><span>{label}</span></div>)}</div></div></div> : <div className="workflow-chart"><SceneStage slug={calling ? "ai-calling" : "crm"} variant="b" /><span className="preview-label">Illustrative workspace · sample data</span></div>}
    </div>
    <div className="workflow-tabs" role="tablist" aria-label="Explore platform capabilities">{panels.map((panel, index) => <button key={panel.title} type="button" role="tab" id={`workflow-tab-${calling}-${index}`} aria-selected={active === index} aria-controls={`workflow-panel-${calling}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => { const next = event.key === "ArrowRight" ? (index + 1) % 3 : event.key === "ArrowLeft" ? (index + 2) % 3 : event.key === "Home" ? 0 : event.key === "End" ? 2 : -1; if(next >= 0) { event.preventDefault(); setActive(next); document.getElementById(`workflow-tab-${calling}-${next}`)?.focus(); } }}><span className="workflow-tab-rule" /><strong>{panel.title}</strong><span>{panel.body}</span></button>)}</div>
    {calling && <div className="agent-bento">
      <div className="agent-feature agent-feature-wide"><div><h3>Conversations with a clear next step.</h3><p>Answer enquiries, arrange appointments and pass the right context to your team.</p></div><ConversationFlow /></div>
      <div className="agent-feature agent-call-card"><span className="preview-label">A conversation, connected</span><div className="agent-orb" aria-hidden /><h3>Melorite AI Calling</h3><p>Built around your business.</p><Link href="/book-demo?product=ai-calling" className="pill pill-dark"><Phone size={16} />Book a demo</Link><span className="preview-label">Discover it in a guided demo</span></div>
      <div className="agent-feature"><ShieldCheck size={24} strokeWidth={1.4} /><h3>Keep people in control.</h3><p>Agree the call flows, escalation points and information your assistant can use during setup.</p><div className="handoff-example"><span>“Can I speak with your team?”</span><span><Check size={15} /> Pass the conversation to a person</span></div></div>
      <div className="agent-feature agent-feature-wide"><h3>See what happened. Know what comes next.</h3><p>Review call history and outcomes with the context your team needs to follow up.</p><AnalyticsPreview /></div>
    </div>}
    <Link href={calling ? "/book-demo?product=ai-calling" : "/book-demo"} className="workflow-demo-link">See how it fits your team <ArrowUpRight size={16} /></Link>
  </div></section>;
}
