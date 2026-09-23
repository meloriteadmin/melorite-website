import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

const logoWhite = `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public/brand/melorite-wordmark-white.png")).toString("base64")}`;

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: brand mark, eyebrow, title, and the connected-grid motif. */
export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0A2540", color: "#fff", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.55), transparent 55%)" }} />
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoWhite} width={260} height={55} alt="Melorite" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#93C5FD" }}>{eyebrow}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>{title}</div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.68)", maxWidth: 900, lineHeight: 1.35 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
