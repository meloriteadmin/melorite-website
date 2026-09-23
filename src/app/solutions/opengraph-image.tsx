import { ogSize, renderOg } from "@/lib/og";

export const alt = "Melorite industry solutions";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Industry solutions", title: "Different industries. One adaptable platform.", subtitle: "Industry workflows built on Melorite's connected Business Apps." });
}
