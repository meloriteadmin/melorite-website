import { ogSize, renderOg } from "@/lib/og";

export const alt = "Melorite — software that fits your business";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Ready for your industry. Simple to use. Easy to start.", title: "Software that fits your business.", subtitle: "Ready-to-use software for real estate, clinics, agencies, online sellers and sales teams, plus AI calling." });
}
