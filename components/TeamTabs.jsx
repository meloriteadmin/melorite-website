"use client";

import { useState } from "react";

const TEAMS = [
  { key: "sales", label: "Sales", copy: "Manage leads, accounts, opportunities, and customer activity in a CRM that connects directly to the rest of your business.", href: "/solutions/teams/sales-gtm" },
  { key: "support", label: "Customer support", copy: "Give service teams the customer history, workflows, documents, and operational context they need to resolve every request.", href: "/solutions/teams/customer-support" },
  { key: "ops", label: "Operations", copy: "Coordinate projects, processes, resources, and approvals with connected workflows that keep work moving across departments.", href: "/solutions/teams/in-house-operations" },
  { key: "finance", label: "Finance", copy: "Connect accounting, expenses, invoices, budgets, and business performance so finance can work from the full picture.", href: "/enterprise-search" },
  { key: "people", label: "People & payroll", copy: "Bring employee information, payroll processes, time, leave, and onboarding together in one people operations hub.", href: "/sana-learn" },
  { key: "industrial", label: "Industry solutions", copy: "Configure Melorite around the workflows, terminology, controls, and operating requirements of your specific sector.", href: "/solutions/industries/industrial-companies" },
];

export default function TeamTabs() {
  const [active, setActive] = useState(0);
  const team = TEAMS[active];

  return (
    <div className="team-tabs">
      <div className="team-tabs-list">
        <div className="eyebrow">One platform, every team connected</div>
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
        <a href={team.href} className="btn">Explore solution</a>
      </div>
      <div className="team-tabs-media">
        <img src="/assets/img/melorite/crm-sales.png" alt="Melorite sales workspace" />
        <div className="prompt-bar">
          <div className="prompt-input">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
            <span>Open connected workflow&hellip;</span>
          </div>
          <div className="prompt-tools">
            <span>Apps &nbsp; + data</span>
            <span>Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
