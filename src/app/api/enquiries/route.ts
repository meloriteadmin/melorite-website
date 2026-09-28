/**
 * Validates public enquiries and delivers them to the Melorite inbox through
 * server-side SMTP. A webhook remains available as an optional fallback.
 */
import { createHmac, randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { enquirySchema } from "@/lib/enquiry-schema";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { enquiryTypes } from "@/data/company";

export const runtime = "nodejs";

const MIN_FILL_MS = 2500;
const MAX_AGE_MS = 1000 * 60 * 60 * 6;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const ENQUIRY_RECIPIENT = process.env.CONTACT_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "meloriteadmin@gmail.com";

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

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cleanHeader(value: unknown) {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim();
}

function labelFor<T extends { value?: string; id?: string; label?: string; name?: string; fullName?: string }>(items: readonly T[], value: unknown) {
  const match = items.find((item) => (item.value ?? item.id) === value);
  return match?.label ?? match?.fullName ?? match?.name ?? String(value || "Not provided");
}

function emailFields(record: Record<string, unknown>) {
  const fields: [string, unknown][] = [
    ["Reference", record.reference],
    ["Enquiry type", labelFor(enquiryTypes, record.enquiryType)],
    ["Name", record.fullName],
    ["Email", record.workEmail],
    ["Phone", record.phone || "Not provided"],
    ["Company", record.companyName || "Not provided"],
  ];
  if (record.companySize) fields.push(["Company size", `${record.companySize} employees`]);
  if (record.industry) fields.push(["Industry", labelFor(industries, record.industry)]);
  if (Array.isArray(record.applications) && record.applications.length) {
    fields.push(["Applications", record.applications.map((id) => labelFor(products, id)).join(", ")]);
  }
  if (record.preferredDate) fields.push(["Preferred date", record.preferredDate]);
  if (record.preferredTime) fields.push(["Preferred time", record.preferredTime]);
  if (record.currentTools) fields.push(["Current tools", record.currentTools]);
  if (record.subject) fields.push(["Subject", record.subject]);
  return fields;
}

async function sendEnquiryEmail(record: Record<string, unknown>) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;

  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  const typeLabel = labelFor(enquiryTypes, record.enquiryType);
  const name = cleanHeader(record.fullName);
  const fields = emailFields(record);
  const text = [...fields.map(([label, value]) => `${label}: ${value}`), "", "Message:", String(record.message || "No message provided.")].join("\n");
  const rows = fields.map(([label, value]) => `<tr><td style="padding:8px 16px 8px 0;color:#64748b;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:8px 0;color:#111827;font-weight:600">${escapeHtml(value)}</td></tr>`).join("");
  const html = `<div style="background:#f8f7f4;padding:32px;font-family:Arial,sans-serif;color:#111827"><div style="max-width:680px;margin:auto;background:#fff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden"><div style="padding:28px 32px;background:linear-gradient(135deg,#eef4ff,#fff0e8)"><p style="margin:0 0 8px;color:#6d28d9;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">New ${escapeHtml(typeLabel)}</p><h1 style="margin:0;font-size:26px">${escapeHtml(name)} sent an enquiry</h1></div><div style="padding:24px 32px"><table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table><div style="margin-top:20px;padding:18px;border-radius:12px;background:#f8fafc"><p style="margin:0 0 8px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase">Message</p><p style="margin:0;line-height:1.65;white-space:pre-wrap">${escapeHtml(record.message || "No message provided.")}</p></div></div></div></div>`;

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? `Melorite Website <${user}>`,
    to: ENQUIRY_RECIPIENT,
    replyTo: { name, address: String(record.workEmail) },
    subject: `[${cleanHeader(typeLabel)}] ${name} · ${cleanHeader(record.reference)}`,
    text,
    html,
  });
  return true;
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
  const age = Date.now() - startedAt;
  if (website || age < MIN_FILL_MS || age > MAX_AGE_MS) {
    return json({ ok: false, error: "We couldn't verify this submission. Please refresh the page and try again." }, 400);
  }

  const reference = `ENQ-${randomUUID().slice(0, 8).toUpperCase()}`;
  const record = { reference, receivedAt: new Date().toISOString(), source: "melorite-website", ...enquiry };
  const body = JSON.stringify(record);

  try {
    if (await sendEnquiryEmail(record)) {
      return json({ ok: true, reference, delivery: "smtp" }, 201);
    }

    const webhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhook) {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      const secret = process.env.ENQUIRY_WEBHOOK_SECRET;
      if (secret) headers["X-Melorite-Signature"] = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
      const response = await fetch(webhook, { method: "POST", headers, body, signal: AbortSignal.timeout(10_000) });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
      return json({ ok: true, reference, delivery: "webhook" }, 201);
    }

    return json({ ok: false, error: "Email delivery is not configured yet. Please contact Melorite directly." }, 503);
  } catch (error) {
    console.error("[enquiries] delivery failed:", error instanceof Error ? error.message : error);
    return json({ ok: false, error: "We couldn't send your enquiry just now. Please try again in a moment." }, 502);
  }
}
