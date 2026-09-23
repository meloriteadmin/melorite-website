import { ogSize, renderOg } from "@/lib/og";

export const alt = "The Melorite platform";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "The Melorite platform", title: "One connected foundation for your business.", subtitle: "One workspace, modular applications and shared business records." });
}
