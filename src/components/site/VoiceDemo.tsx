"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const scenarios = [
 {label:"Appointments",title:"A calmer front desk.",body:"Help a caller find an appointment and give your team a clear next step.",lines:["Hello, thank you for calling. How can I help you today?","I’d like to book an appointment for tomorrow.","Of course. What time would work best for you?"]},
 {label:"Real estate",title:"Every enquiry gets a response.",body:"Understand what a buyer is looking for and help arrange a site visit.",lines:["Hello! Are you looking for a home or an investment property?","A two-bedroom home. Can I arrange a site visit?","Certainly. Let me take your preferred day and share it with our team."]},
 {label:"Orders",title:"Keep customers in the loop.",body:"Confirm order details and capture changes for the people handling fulfilment.",lines:["Hello, I’m calling to confirm your order details.","Thank you. Can I update the delivery address?","I can take the updated address and pass it to our fulfilment team."]},
 {label:"Follow-ups",title:"Pick up where you left off.",body:"Continue the conversation with context and record the customer’s next step.",lines:["Hello! I’m following up on your recent enquiry. Is now a good time?","Yes, I’d like to know more before deciding.","Happy to help. What would you like our team to walk you through?"]},
];
function CitrusSlice() {
 const point = (radius: number, angle: number) => `${(150 + Math.cos(angle) * radius).toFixed(3)},${(150 + Math.sin(angle) * radius).toFixed(3)}`;
 return <svg viewBox="0 0 300 300" className="brand-citrus-art" aria-hidden="true">
  <defs>
   <radialGradient id="citrus-rind"><stop stopColor="#a8a8ff"/><stop offset=".84" stopColor="#7374eb"/><stop offset=".94" stopColor="#4547b9"/><stop offset="1" stopColor="#b3b3ff"/></radialGradient>
   <radialGradient id="citrus-flesh" cx="40%" cy="35%"><stop stopColor="#dedbff"/><stop offset=".45" stopColor="#a7a3fb"/><stop offset="1" stopColor="#6867df"/></radialGradient>
   <radialGradient id="citrus-light"><stop stopColor="#fff" stopOpacity=".48"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
  </defs>
  <circle cx="150" cy="150" r="149" fill="url(#citrus-rind)"/>
  <circle cx="150" cy="150" r="140" fill="#e4e0ff"/>
  {Array.from({length:12},(_,i)=>{
   const start=i*Math.PI/6+.023, end=(i+1)*Math.PI/6-.023;
   return <g key={i}><path d={`M${point(17,start)} L${point(134,start)} A134,134 0 0 1 ${point(134,end)} L${point(17,end)} A17,17 0 0 0 ${point(17,start)}Z`} fill="url(#citrus-flesh)"/>
    {Array.from({length:7},(_,j)=>{const a=start+(end-start)*(j+1)/8;return <path key={j} d={`M${point(30,a)} Q${point(80,a+.018)} ${point(127,a)}`} fill="none" stroke={j%2 ? "#efecff" : "#7371db"} strokeWidth={j%2 ? "1.2" : ".7"} opacity=".32"/>})}
   </g>;
  })}
  <circle cx="150" cy="150" r="19" fill="#efebff"/>
  <ellipse cx="105" cy="90" rx="95" ry="78" fill="url(#citrus-light)"/>
 </svg>;
}

export function VoiceDemo() {
 const [active,setActive]=useState(0);
 const current=scenarios[active];
 return <section id="voice-preview" data-nav="light" className="voice-demo-section scroll-mt-32"><div className="rail-inner"><h2 className="h-section voice-demo-heading">A conversation can change the whole day.</h2><div className="voice-scenario-tabs" role="group" aria-label="Choose a conversation example">{scenarios.map((s,i)=><button key={s.label} type="button" aria-pressed={active===i} onClick={()=>setActive(i)}>{s.label}</button>)}</div><div className="voice-demo-layout"><div className="brand-citrus brand-citrus-animating" aria-hidden="true"><CitrusSlice/></div><div className="voice-demo-copy"><h3>{current.title}</h3><p>{current.body}</p><div className="voice-wave" aria-hidden>{Array.from({length:70},(_,i)=><i key={i} style={{height:Math.round(12+(Math.sin(i*2.4)+1)*17),animationDelay:`${(i*.018).toFixed(3)}s`}} className="voice-wave-active"/>)}</div><div className="voice-transcript">{current.lines.map((line,i)=><p key={line}><span>{i%2 ? "Caller" : "Assistant"}</span>{line}</p>)}</div><div className="voice-demo-footer"><span>Illustrative conversation</span><Link href="/book-demo?product=ai-calling">Explore Melorite in a demo <ArrowUpRight size={15}/></Link></div></div></div></div></section>;
}
