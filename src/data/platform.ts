import type { Availability } from "./products";

/** Platform-level capabilities, verified against the platform implementation. */
export type PlatformCapability = {
  id: string;
  title: string;
  icon: string;
  description: string;
  points: string[];
  useCase: string;
  status: Availability;
};

export const platformCapabilities: PlatformCapability[] = [
  {
    id: "organization",
    title: "Organization management",
    icon: "Building2",
    description:
      "Every client is one organization with its own isolated workspace. Additional services are added to the same organization rather than creating a new account.",
    points: ["One organization per client", "Company and branch basics", "Timezone, locale and shared defaults"],
    useCase: "A business that starts with CRM adds Finance later — same workspace, same users, same data.",
    status: "available",
  },
  {
    id: "access",
    title: "Application access",
    icon: "SlidersHorizontal",
    description:
      "Which apps and industry solutions an organization can use is defined by its entitlements. Navigation, routes and data access follow those entitlements, enforced on the server.",
    points: ["Entitlement-driven navigation", "Server-side enforcement", "Effective-dated service changes"],
    useCase: "When a new app is activated for an organization, it appears in the app switcher for its users — no new credentials needed.",
    status: "available",
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: "KeyRound",
    description:
      "Database-backed sessions with idle and absolute expiry, adaptive password hashing, account lockout, and TOTP multi-factor authentication with recovery codes.",
    points: ["Forced change of temporary passwords", "Session expiry and revocation", "Multi-factor authentication"],
    useCase: "A new client user signs in with a temporary credential and is required to set their own password before continuing.",
    status: "available",
  },
  {
    id: "search",
    title: "Search & notifications",
    icon: "Search",
    description:
      "Global search across the apps an organization has enabled, plus a persistent notification centre and a cross-app My Work view.",
    points: ["Entitlement-aware global search", "Notification centre", "My Work across apps"],
    useCase: "A manager sees approvals, tasks and follow-ups from several apps in one place.",
    status: "available",
  },
  {
    id: "audit",
    title: "Auditability",
    icon: "History",
    description:
      "Important changes are written to an append-only audit trail in the same transaction as the business change, so history cannot silently diverge.",
    points: ["Append-only audit events", "Transactional with business writes", "Record-level activity timelines"],
    useCase: "Finance can see who changed an invoice status and when.",
    status: "available",
  },
  {
    id: "data",
    title: "Shared business data",
    icon: "Database",
    description:
      "Customers, products, employees, vendors and documents are canonical records reused across apps instead of being copied into each one.",
    points: ["One customer record across apps", "One product and stock master", "One employee master"],
    useCase: "A customer created in CRM is the same customer invoiced in Finance and supported in Service.",
    status: "available",
  },
  {
    id: "automation",
    title: "Automation",
    icon: "Zap",
    description:
      "Versioned workflows with triggers, conditions and actions, explicit retries and signed outbound webhooks.",
    points: ["Immutable workflow versions", "Run history and retries", "Signed webhooks"],
    useCase: "An overdue invoice automatically creates a follow-up task for the account owner.",
    status: "available",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "ChartLine",
    description: "Governed metrics, dashboards and reports across enabled apps, with scheduled report delivery.",
    points: ["Governed metric definitions", "Cross-app dashboards", "Scheduled reports"],
    useCase: "Leadership receives a weekly report built from Sales, Finance and Projects data.",
    status: "available",
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: "Plug",
    description:
      "Organization-connected integrations for calendar, e-signature and accounting systems, and a shared communication layer for email, SMS and WhatsApp.",
    points: ["Calendar, e-signature and accounting connectors", "Shared email, SMS and WhatsApp delivery", "Observable sync runs"],
    useCase: "Contracts in Documents are sent for signature through a connected e-signature provider.",
    status: "early-access",
  },
];

/** Security measures — only what is implemented. No certification claims. */
export const securityMeasures = [
  {
    id: "isolation",
    title: "Organization data isolation",
    icon: "Layers",
    description:
      "Every tenant record carries its organization. Reads and writes are scoped in the application layer and PostgreSQL row-level security adds a second, database-enforced boundary.",
  },
  {
    id: "auth",
    title: "Authentication",
    icon: "Fingerprint",
    description:
      "Adaptive password hashing, lockout and throttling on sign-in, session expiry and revocation, and TOTP multi-factor authentication.",
  },
  {
    id: "access",
    title: "Application access controls",
    icon: "Lock",
    description: "Entitlements are checked on the server for every route and operation — hidden navigation is never the only control.",
  },
  {
    id: "audit",
    title: "Audit logging",
    icon: "FileClock",
    description: "Privileged and business changes are recorded in an append-only audit trail within the same transaction.",
  },
  {
    id: "hardening",
    title: "Application hardening",
    icon: "ShieldCheck",
    description: "Content Security Policy and browser security headers, same-origin checks on changes, rate limiting and redacted structured logs.",
  },
  {
    id: "reliability",
    title: "Reliability",
    icon: "Server",
    description:
      "A transactional outbox with retries and dead-letter handling for background work, health checks, checksummed backups and restore verification.",
  },
];
