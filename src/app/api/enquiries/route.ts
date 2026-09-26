/**
 * Enquiry / demo-request endpoint.
 *
 * Integration point (see README → "Enquiry handling"):
 *  - ENQUIRY_WEBHOOK_URL     Required in production. Enquiries are POSTed here as JSON
 *                            (e.g. a CRM intake endpoint or an automation webhook).
 *  - ENQUIRY_WEBHOOK_SECRET  Optional. When set, the body is signed with HMAC-SHA256 and
 *                            sent in the `X-Melorite-Signature` header.
 *  - Without a webhook, the browser opens a pre-addressed email in the
 *    visitor's own mail client, so the enquiry is sent directly to Melorite.
 *
 * The endpoint never reports success unless the enquiry was accepted by the
 * configured destination. This route is public and must never call internal
 * platform administration APIs directly.
 */
import { createHmac, randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { enquirySchema } from "@/lib/enquiry-schema";

const MIN_FILL_MS = 2500;
const MAX_AGE_MS = 1000 * 60 * 60 * 6;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const ENQUIRY_RECIPIENT = process.env.CONTACT_EMAIL ?? "meloriteadmin@gmail.com";

// Best-effort, per-instance rate limit. Use a shared store (e.g. Redis) when running multiple instances.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function json(body: unknown, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function buildMailto(record: Record<string, unknown>) {
  const lines = [
    `Reference: ${record.reference}`,
    `Name: ${record.fullName}`,
    `Email: ${record.workEmail}`,
    `Phone: ${record.phone || "Not provided"}`,
    `Company: ${record.companyName}`,
    `Industry: ${record.industry}`,
    `Company size: ${record.companySize}`,
    `Enquiry type: ${record.enquiryType}`,
    `Applications: ${Array.isArray(record.applications) && record.applications.length ? record.applications.join(", ") : "None selected"}`,
    "",
    "Message:",
    String(record.message || "No message provided."),
  ];
  const subject = `Melorite enquiry from ${record.fullName} (${record.reference})`;
  return `mailto:${encodeURIComponent(ENQUIRY_RECIPIENT)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, 429);

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    return json({ ok: false, error: "Please check the highlighted fields.", fields: parsed.error.flatten().fieldErrors }, 422);
  }
  const { website, startedAt, ...enquiry } = parsed.data;

  // Spam prevention: filled honeypot or implausible fill time. Respond generically.
  const age = Date.now() - startedAt;
  if (website || age < MIN_FILL_MS || age > MAX_AGE_MS) {
    return json({ ok: false, error: "We couldn't verify this submission. Please refresh the page and try again." }, 400);
  }

  const reference = `ENQ-${randomUUID().slice(0, 8).toUpperCase()}`;
  const record = {
    reference,
    receivedAt: new Date().toISOString(),
    source: "melorite-website",
    ...enquiry,
    userAgent: request.headers.get("user-agent") ?? undefined,
  };
  const body = JSON.stringify(record);

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  try {
    if (webhook) {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      const secret = process.env.ENQUIRY_WEBHOOK_SECRET;
      if (secret) headers["X-Melorite-Signature"] = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
      const res = await fetch(webhook, { method: "POST", headers, body, signal: AbortSignal.timeout(10_000) });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else if (process.env.NODE_ENV !== "production") {
      const dir = path.join(process.cwd(), ".data");
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, "enquiries.jsonl"), body + "\n", "utf8");
    }
  } catch (err) {
    console.error("[enquiries] delivery failed:", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "We couldn't send your enquiry just now. Please try again in a moment." }, 502);
  }

  if (!webhook) {
    return json({ ok: true, reference, delivery: "email-client", mailtoUrl: buildMailto(record) }, 202);
  }

  return json({ ok: true, reference, delivery: "webhook" }, 201);
}
