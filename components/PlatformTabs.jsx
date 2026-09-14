"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  {
    key: "automate",
    label: "Automate",
    title: "Run complex,<br/>multi-step processes.",
    bg: "/assets/img/agents-features-bg.webp",
    card: "Meeting Context Review",
    steps: [
      "When a new meeting is created, review its details and participants. Find other meetings with the same title or overlapping attendees.",
      "Search for earlier meetings with the same title and/or participants in internal knowledge base.",
      "Search for messages on Slack from participants that could be related to the meeting topic.",
      "Search for issues on Linear and Jira from participants that are related to the meeting topic.",
      "Search for documents that could contain more context about the meeting.",
      "Compile a summary report with the event details and the gathered information.",
    ],
  },
  {
    key: "create",
    label: "Create",
    title: "Generate collaborative<br/>content in any format",
    bg: "/assets/img/agents-banner-01.webp",
    card: "Deck Builder",
    steps: [
      "Pull the latest quarterly numbers and key talking points from connected docs.",
      "Draft a slide-by-slide outline aligned to the brand template.",
      "Generate speaker notes for each section.",
      "Export a polished deck ready to share with stakeholders.",
    ],
  },
  {
    key: "analyze",
    label: "Analyze",
    title: "Turn data into live<br/>dashboards and reports",
    bg: "/assets/img/agents-model-agnostic.webp",
    card: "Revenue Analyzer",
    steps: [
      "Connect live data from Salesforce and the finance warehouse.",
      "Detect trends and flag anomalies automatically.",
      "Summarize findings into an executive-ready report.",
      "Refresh the dashboard on a recurring schedule.",
    ],
  },
  {
    key: "act",
    label: "Act",
    title: "Take instant actions<br/>across your tools",
    bg: "/assets/img/agents-partnerships.webp",
    card: "Deal Updater",
    steps: [
      "Update the CRM record with the latest call notes.",
      "Schedule a follow-up meeting with the prospect.",
      "Send a recap message to the deal Slack channel.",
      "Create follow-up tasks for the account team.",
    ],
  },
  {
    key: "find",
    label: "Find",
    title: "All the latest company<br/>docs and data",
    bg: "/assets/img/agents_carousel_search.webp",
    card: "Company Search",
    steps: [
      'Searching Confluence, Drive, and Notion for "Q3 pricing strategy"…',
      "Found 3 relevant documents and 2 related Slack threads.",
      "Surfacing the most recently updated source first.",
      "Answer compiled with citations back to every source.",
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
        <div className="mockup-frame" style={{ backgroundImage: `url('${tab.bg}')` }}>
          <div className="browser-window">
            <div className="browser-topbar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="browser-url">sana.ai</span>
            </div>
            <div className="browser-body">
              <div className="workflow-card">
                <div className="workflow-card-head">
                  <span className="wf-icon">&#9889;</span>
                  <span>{tab.card}</span>
                  <span className="wf-tag">Productivity</span>
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
