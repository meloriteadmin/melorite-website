import { ogSize, renderOg } from "@/lib/og";

export const alt = "Melorite business applications";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Melorite products", title: "Every tool you need. One place to find it.", subtitle: "Seven Business Applications working together in one workspace." });
}
