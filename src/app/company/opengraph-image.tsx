import { ogSize, renderOg } from "@/lib/og";

export const alt = "About Melorite";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "About Melorite", title: "Building a more connected way to do business.", subtitle: "Our mission, principles and approach — and how to reach our team." });
}
