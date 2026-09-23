import { ogSize, renderOg } from "@/lib/og";

export const alt = "Melorite — one connected business platform";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "One connected business platform", title: "One platform. Every part of your business.", subtitle: "Bring your people, processes and business applications together." });
}
