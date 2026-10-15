"use client";

import { useEffect, useRef } from "react";

/* Brand gradient: sky → Melorite periwinkle → violet → magenta (top-left → bottom-right). */
const STOPS: [number, string][] = [
  [0, "#38b6ff"],
  [0.32, "#5f63f2"],
  [0.66, "#a24dff"],
  [1, "#f04dff"],
];
const DOT_COLORS = ["#5cc4ff", "#8a7dff", "#d65cff"];

const LAT = 66;
const LON = 88;
const DOTS = 620;

/** Seeded pseudo-random so the dot halo is stable between renders. */
function rand(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Lumpy radius for a unit direction — computed in 3D so there is no seam or pole pinching. */
function radius(x: number, y: number, z: number, t: number) {
  return (
    1 +
    0.035 * Math.sin(x * 3.1 + y * 1.7 + t * 0.9) * Math.cos(z * 2.6 - t * 0.7) +
    0.025 * Math.sin(y * 4.3 - z * 2.2 + t * 1.1) +
    0.03 * Math.cos(x * 6.2 + z * 4.4 - t * 0.8) +
    0.026 * Math.sin(y * 9 + x * 5 + t * 1.3) +
    0.03 * Math.sin((x + y + z) * 8 + t * 1.5)
  );
}

export function VoiceOrb({ transparent = false }: { transparent?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let running = false;
    let visible = true;
    let w = 0;
    let h = 0;
    let gradient: CanvasGradient;

    // Precomputed unit directions: grid vertices (pole faces the viewer) and halo dots.
    const grid = new Float32Array((LAT + 1) * (LON + 1) * 3);
    for (let i = 0; i <= LAT; i++) {
      const phi = 0.012 + (i / LAT) * (Math.PI - 0.024);
      for (let j = 0; j <= LON; j++) {
        const th = (j / LON) * Math.PI * 2;
        const k = (i * (LON + 1) + j) * 3;
        // Pole lies along the screen's x axis so it sits on the rim, not in the middle of the orb.
        grid[k] = Math.cos(phi);
        grid[k + 1] = Math.sin(phi) * Math.cos(th);
        grid[k + 2] = Math.sin(phi) * Math.sin(th);
      }
    }
    const dots = Array.from({ length: DOTS }, (_, i) => {
      const u = rand(i + 1), v = rand(i + 901);
      const th = u * Math.PI * 2;
      const ph = Math.acos(2 * v - 1);
      return { th, ph, r: 1.14 + rand(i + 33) ** 2 * 0.42, s: 0.6 + rand(i + 71) * 1.1, c: i % 3 };
    });

    const resize = () => {
      const b = canvas.getBoundingClientRect();
      w = b.width;
      h = b.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const R = Math.min(w, h) * 0.44;
      gradient = ctx.createLinearGradient(w / 2 - R, h / 2 - R, w / 2 + R, h / 2 + R);
      STOPS.forEach(([o, c]) => gradient.addColorStop(o, c));
      if (!running) draw(2.4);
    };

    // Scratch buffers for projected vertices of one ring at a time.
    const px = new Float32Array((LAT + 1) * (LON + 1));
    const py = new Float32Array((LAT + 1) * (LON + 1));
    const pz = new Float32Array((LAT + 1) * (LON + 1));

    const draw = (t: number) => {
      const R = Math.min(w, h) * 0.44;
      const cx = w / 2;
      const cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      // Spin around the viewing axis plus a gentle nod, so the surface slides and breathes.
      const spin = t * 0.12;
      const cs = Math.cos(spin), sn = Math.sin(spin);
      const nod = 0.22 * Math.sin(t * 0.35);
      const cn = Math.cos(nod), sd = Math.sin(nod);

      const n = (LAT + 1) * (LON + 1);
      for (let v = 0; v < n; v++) {
        const x0 = grid[v * 3], y0 = grid[v * 3 + 1], z0 = grid[v * 3 + 2];
        const r = radius(x0, y0, z0, t);
        const x = x0 * r, y = y0 * r, z = z0 * r;
        const rx = x * cs - y * sn;
        const ry = x * sn + y * cs;
        const y2 = ry * cn - z * sd;
        const z2 = ry * sd + z * cn;
        const f = 3.6 / (4.2 - z2);
        px[v] = cx + rx * R * f;
        py[v] = cy + y2 * R * f;
        pz[v] = z2;
      }

      ctx.lineJoin = "round";
      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.max(0.7, w / 640);

      // Back faces first (dim), then front faces (bright), in one path each.
      for (const front of [false, true]) {
        ctx.globalCompositeOperation = front ? "lighter" : "source-over";
        ctx.globalAlpha = front ? 0.85 : 0.3;
        ctx.beginPath();
        const seg = (a: number, b: number) => {
          if ((pz[a] + pz[b] > 0) !== front) return;
          ctx.moveTo(px[a], py[a]);
          ctx.lineTo(px[b], py[b]);
        };
        for (let i = 0; i <= LAT; i++) {
          if (i % 1 === 0) for (let j = 0; j < LON; j++) seg(i * (LON + 1) + j, i * (LON + 1) + j + 1);
        }
        for (let j = 0; j < LON; j++) {
          for (let i = 0; i < LAT; i++) seg(i * (LON + 1) + j, (i + 1) * (LON + 1) + j);
        }
        ctx.stroke();
      }

      // Floating dot halo.
      const buckets: [number, number, number][][] = [[], [], []];
      for (const d of dots) {
        const th = d.th + t * 0.03 * d.s;
        const x = Math.sin(d.ph) * Math.cos(th);
        const y = Math.sin(d.ph) * Math.sin(th);
        const z = Math.cos(d.ph);
        const r = d.r + 0.03 * Math.sin(t * d.s + d.th * 5);
        const rx = x * cs - y * sn;
        const ry = x * sn + y * cs;
        const y2 = ry * cn - z * sd;
        const z2 = ry * sd + z * cn;
        const f = 3.6 / (4.2 - z2 * r);
        buckets[d.c].push([cx + rx * r * R * f, cy + y2 * r * R * f, 0.4 + (z2 + 1) * 0.3]);
      }
      ctx.globalCompositeOperation = "source-over";
      buckets.forEach((list, c) => {
        ctx.fillStyle = DOT_COLORS[c];
        for (const [x, y, a] of list) {
          ctx.globalAlpha = a;
          ctx.fillRect(x, y, 1.6, 1.6);
        }
      });
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const tick = (ms: number) => {
      draw(ms / 1000);
      raf = requestAnimationFrame(tick);
    };
    const sync = () => {
      const should = visible && !document.hidden && !reduceMotion.matches;
      if (should && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
      if (!should && !running) draw(2.4);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      sync();
    });
    io.observe(canvas);
    resize();
    document.addEventListener("visibilitychange", sync);
    reduceMotion.addEventListener("change", sync);
    sync();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={`voice-mesh-stage media-frame relative isolate grid min-h-[430px] overflow-hidden ${transparent ? "voice-mesh-stage--transparent" : ""}`}>
      <div aria-hidden className="voice-mesh-glow" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full" role="img" aria-label="Animated Melorite voice orb" />
    </div>
  );
}
