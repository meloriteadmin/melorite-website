"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  {
    key: "crm",
    pastel: "pastel-blue",
    label: "CRM & sales",
    title: "Turn every customer<br/>interaction into momentum.",
    bg: "/assets/img/melorite/crm-sales.png",
    card: "Opportunity Workspace",
    steps: [
      "Capture leads, accounts, contacts, and activity in one connected customer view.",
      "Guide teams through repeatable sales stages and follow-up tasks.",
      "Connect proposals, conversations, and deal context to every opportunity.",
      "Give leaders a live view of pipeline, performance, and forecasts.",
    ],
  },
  {
    key: "finance",
    pastel: "pastel-mint",
    label: "Finance",
    title: "Keep finance connected<br/>to the business.",
    bg: "/assets/img/melorite/hero-platform.png",
    card: "Finance Workspace",
    steps: [
      "Manage invoices, expenses, budgets, and financial activity from one place.",
      "Connect financial data to sales, projects, and operations in real time.",
      "Give finance teams the context behind every number.",
      "Create reports that are ready for action, not reconciliation.",
    ],
  },
  {
    key: "people",
    pastel: "pastel-lavender",
    label: "People",
    title: "Support every stage<br/>of the employee journey.",
    bg: "/assets/img/melorite/hero-platform.png",
    card: "People & Payroll",
    steps: [
      "Bring employee records, time, leave, and payroll processes together.",
      "Create clear workflows for onboarding, approvals, and development.",
      "Give people teams consistent, connected employee information.",
      "Help managers make informed decisions with shared visibility.",
    ],
  },
  {
    key: "operations",
    pastel: "pastel-peach",
    label: "Operations",
    title: "Plan, deliver, and<br/>improve daily work.",
    bg: "/assets/img/melorite/hero-platform.png",
    card: "Operations Hub",
    steps: [
      "Coordinate projects, tasks, and resources across departments.",
      "Connect operational work with customers, finance, and people data.",
      "Standardise approvals and repeatable business processes.",
      "Track progress and resolve work before it becomes a bottleneck.",
    ],
  },
  {
    key: "insights",
    pastel: "pastel-cyan",
    label: "Insights",
    title: "See what is happening<br/>across your business.",
    bg: "/assets/img/melorite/crm-sales.png",
    card: "Reporting & Analytics",
    steps: [
      "Bring data from your Melorite apps into meaningful reports.",
      "Monitor the metrics that matter to each team and leader.",
      "Move from disconnected updates to shared business visibility.",
      "Use connected information to make confident decisions.",
    ],
  },
];

export default function PlatformTabs() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (playing) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % TABS.length);
      }, 4500);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, index]);

  const tab = TABS[index];

  return (
    <>
      <div className="platform-tabs-nav">
        {TABS.map((t, i) => (
          <button
            key={t.key}
            className={i === index ? "active" : undefined}
            onClick={() => setIndex(i)}
          >
            {t.label}
          </button>
        ))}
        <button className="pause-toggle" aria-label="Pause" style={{ opacity: playing ? 1 : 0.5 }} onClick={() => setPlaying((p) => !p)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
        </button>
      </div>

      <div className="platform-stage">
        <h3 dangerouslySetInnerHTML={{ __html: tab.title }} />
        <div className={`mockup-frame ${tab.pastel}`} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16)), url('${tab.bg}')` }}>
          <div className="browser-window">
            <div className="browser-topbar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="browser-url">melorite.com</span>
            </div>
            <div className="browser-body">
              <div className="workflow-card">
                <div className="workflow-card-head">
                  <span className="wf-icon">&#9889;</span>
                  <span>{tab.card}</span>
                  <span className="wf-tag">Melorite app</span>
                </div>
                <ul className="workflow-steps">
                  {tab.steps.map((s, i) => (
                    <li key={i}><span className="wf-num">{i + 1}</span> {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
