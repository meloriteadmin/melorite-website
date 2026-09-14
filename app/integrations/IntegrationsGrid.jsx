"use client";

import { useMemo, useState } from "react";

const ICON_MAP = {
  "Google Drive": "google-drive",
  Slack: "slack",
  Confluence: "confluence",
  Jira: "jira",
  Teams: "teams",
  Salesforce: "salesforce",
  Workday: "workday",
  Dropbox: "dropbox",
  "Google meet": "google-meet",
  "Google Calendar": "google-calendar",
  "Service Now": "servicenow",
  Sharepoint: "sharepoint",
};

const APPS = [
  "Google Drive", "Github", "Slack", "Zendesk", "Confluence", "Sharepoint", "Jira", "Teams",
  "Salesforce", "Gmail", "Workday", "Outlook", "Notion", "Dropbox", "Google meet", "Zoom",
  "Google Calendar", "Azure Cloud Storage", "HubSpot Marketing Hub", "HubSpot Sales Hub",
  "Airtable", "Pitch", "Loom", "Mixpanel", "Service Now", "Monday", "Microsoft Dynamics",
  "Gitlab", "Amazon S3", "Google Cloud Storage", "Asana", "Box", "Snowflake", "Intercom",
  "Databricks", "Power BI", "SAP", "Trello", "Zoho", "Figma", "Google actions",
];

export default function IntegrationsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.filter((a) => a.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <div className="integrations-toolbar">
        <div className="integrations-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations…"
            style={{ border: "none", background: "transparent", outline: "none", font: "inherit", color: "inherit", width: "100%" }}
          />
        </div>
        <a href="#" className="btn">Book an intro</a>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: "var(--darkergrey)" }}>No integrations found.</p>
      ) : (
        <div className="integrations-full-grid">
          {filtered.map((app) => {
            const icon = ICON_MAP[app];
            return (
              <div className="integration-tile" key={app}>
                <span className="tile-icon">
                  {icon ? <img src={`/assets/img/integrations/${icon}.svg`} alt="" width={20} height={20} /> : app[0]}
                </span>
                <span className="tile-name">{app}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
