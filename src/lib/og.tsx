import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: brand mark, eyebrow, title, and the connected-grid motif. */
export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0A2540", color: "#fff", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.55), transparent 55%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="62" height="46" viewBox="0 0 351 256" fill="#ffffff">
            <rect x="0" y="133" width="105" height="123" rx="2" />
            <path d="M0 0h135l107 131-78 65z" />
            <path d="M248 86 351 1v255H248z" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Melorite</div>
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
