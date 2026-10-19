"use client";
import Link from "next/link";
import { useState } from "react";
export function ProductBrief({slug}:{slug:string}) {
 const [value,setValue]=useState("");const [ready,setReady]=useState(false);
 return <div className="brand-brief-stage"><div className="brand-brief-heading"><span>YOUR BUSINESS. CONNECTED.</span><span className="brand-brief-mark" aria-hidden>m.</span><h2>A clearer way<br/>to work.</h2><p>Start with the process you want to improve.</p></div><form className="reference-brief" onSubmit={e=>{e.preventDefault();setReady(true);}}><textarea aria-label="Describe the workflow you want to improve" placeholder="What would a better working day look like?" value={value} onChange={e=>{setValue(e.target.value);setReady(false);}} required/><div><span>＋ &nbsp; Your workflow</span><button aria-label="Prepare your demo brief">↑</button></div>{ready&&<p role="status">Your brief: {value}<br/><Link href={`/book-demo?product=${slug}`}>Explore this workflow in a demo →</Link></p>}</form><div className="brand-brief-foot"><span>01 &nbsp; People</span><span>02 &nbsp; Process</span><span>03 &nbsp; Progress</span></div></div>;
}
