"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { useReportWebVitals } from "next/web-vitals";
const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const validId = id && /^G-[A-Z0-9]+$/.test(id) ? id : undefined;
type WebVitalsCallback = Parameters<typeof useReportWebVitals>[0];
const reportWebVitals: WebVitalsCallback = (metric) => {
  if (!validId) return;
  window.gtag?.("event", metric.name, {
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    metric_rating: metric.rating,
    non_interaction: true,
  });
};
export function Analytics() {
  useReportWebVitals(reportWebVitals);
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!validId || !ready) return;
    // Explicit page views exclude query strings and form data.
    window.gtag?.("set", { page_location: `${site.url}${pathname}`, page_path: pathname, page_referrer: "" });
    window.gtag?.("event", "page_view", { page_location: `${site.url}${pathname}`, page_path: pathname });
    const product = products.find((item) => pathname === `/products/${item.slug}`)?.slug;
    if (product) trackEvent("product_view", { product, page_path: pathname });
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      const href = link?.getAttribute("href");
      if (!href) return;
      if (href.startsWith("tel:")) trackEvent("phone_click", { page_path: pathname });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { page_path: pathname });
      else if (href.startsWith("/book-demo")) {
        trackEvent("book_demo_click", { page_path: pathname });
        if (product) trackEvent("product_cta_click", { product, page_path: pathname });
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [pathname, ready]);
  if (!validId) return null;
  return <><Script id="melorite-analytics-init" strategy="afterInteractive" onReady={() => setReady(true)}>{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${validId}',{send_page_view:false,page_location:'${site.url}',ignore_referrer:true,allow_google_signals:false,allow_ad_personalization_signals:false});`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${validId}`} strategy="afterInteractive" /></>;
}
