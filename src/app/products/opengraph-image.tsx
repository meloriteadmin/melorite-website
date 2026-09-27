import { ogSize, renderOg } from "@/lib/og";

export const alt = "Melorite business applications";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Melorite products", title: "Everything your business needs. Connected by design.", subtitle: "Business applications, Melorite AI and industry solutions in one platform." });
}
