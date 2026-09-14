"use client";

import { useState } from "react";

const TEAMS = [
  { key: "sales", label: "Sales teams", copy: "Optimize every stage of the deal lifecycle with AI that helps you prep for calls, answers your RFPs, and updates your CRM.", href: "/solutions/teams/sales-gtm" },
  { key: "support", label: "Customer support", copy: "Resolve tickets faster with AI that surfaces the right answer from every knowledge base, past conversation, and product doc.", href: "/solutions/teams/customer-support" },
  { key: "ops", label: "In-house operations", copy: "Automate the busywork across HR, finance, and IT so your team can focus on higher-impact operational work.", href: "/solutions/teams/in-house-operations" },
  { key: "finance", label: "Financial services", copy: "Turn analyst-level research into minutes, not days, with AI that reads filings, models, and market data for you.", href: "/solutions/industries/financial-services" },
  { key: "industrial", label: "Industrial companies", copy: "Give engineers and field teams instant access to specs, manuals, and product knowledge, wherever they work.", href: "/solutions/industries/industrial-companies" },
  { key: "law", label: "Law firms", copy: "Draft, review, and summarize contracts and case files in a fraction of the time with AI trained on your matter history.", href: "/solutions/industries/law-firms" },
];

export default function TeamTabs() {
  const [active, setActive] = useState(0);
  const team = TEAMS[active];

  return (
    <div className="team-tabs">
      <div className="team-tabs-list">
        <div className="eyebrow">Every team gets smarter with Sana</div>
        <ul>
          {TEAMS.map((t, i) => (
            <li key={t.key} className={i === active ? "active" : undefined} onClick={() => setActive(i)}>
              <span className="arrow">&rarr;</span> {t.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="team-tabs-copy">
        <p className="lede">{team.copy}</p>
        <a href={team.href} className="btn">Book an intro</a>
      </div>
      <div className="team-tabs-media">
        <img src="/assets/img/agents-banner-01.webp" alt="Sana workspace" />
        <div className="prompt-bar">
          <div className="prompt-input">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
            <span>Create a proposal doc w/&hellip;</span>
          </div>
          <div className="prompt-tools">
            <span>Create &nbsp; + Sources</span>
            <span>Auto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
