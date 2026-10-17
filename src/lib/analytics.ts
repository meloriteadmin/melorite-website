export type AnalyticsEvent = "book_demo_click" | "contact_submit" | "demo_submit" | "product_view" | "product_cta_click" | "custom_solution_enquiry" | "phone_click" | "email_click";
declare global { interface Window { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[]; } }
/** Only controlled product identifiers and paths belong in analytics, never enquiry fields. */
export function trackEvent(name: AnalyticsEvent, data: { product?: string; page_path?: string } = {}) {
  if (typeof window !== "undefined") window.gtag?.("event", name, data);
}
