/**
 * Illustrated hero backdrops (a hazy dusk skyline and an alpenglow peak).
 * Pure SVG, so the site needs no stock photography. Generation is seeded,
 * which keeps server and client output identical.
 */
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function skyline(seed: number, base: number, minH: number, maxH: number, minW: number, maxW: number) {
  const r = rng(seed);
  const out: { x: number; y: number; w: number; h: number }[] = [];
  let x = -20;
  while (x < 1640) {
    const w = Math.round(minW + r() * (maxW - minW));
    const h = Math.round(minH + r() * (maxH - minH));
    out.push({ x, y: base - h, w, h });
    x += w + Math.round(r() * 6);
  }
  return out;
}

function windows(blds: ReturnType<typeof skyline>, seed: number) {
  const r = rng(seed);
  const dots: { x: number; y: number }[] = [];
  for (const b of blds) {
    for (let y = b.y + 14; y < b.y + b.h - 8; y += 14) {
      for (let x = b.x + 8; x < b.x + b.w - 8; x += 12) {
        if (r() > 0.86) dots.push({ x, y });
      }
    }
  }
  return dots;
}

const far = skyline(7, 760, 160, 380, 28, 70);
const mid = skyline(21, 800, 140, 330, 34, 84);
const near = skyline(42, 900, 120, 300, 46, 120);
const nearWindows = windows(near, 5);

export function CitySky({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" className={className}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#23262c" />
          <stop offset=".4" stopColor="#4b4c54" />
          <stop offset=".75" stopColor="#85766f" />
          <stop offset="1" stopColor="#a39086" />
        </linearGradient>
        <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8d7d76" stopOpacity="0" />
          <stop offset="1" stopColor="#8d7d76" stopOpacity=".35" />
        </linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="2.4" /></filter>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <g filter="url(#soft)" fill="#5a5a62" opacity=".7">
        {far.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} />)}
      </g>
      <rect y="480" width="1600" height="300" fill="url(#haze)" />
      <g fill="#383a42" opacity=".9">
        {mid.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} />)}
      </g>
      <g fill="#1a1d22">
        {near.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} />)}
      </g>
      <g fill="#ffd9a8" opacity=".32">
        {nearWindows.map((d, i) => <rect key={i} x={d.x} y={d.y} width="3.5" height="5" />)}
      </g>
      {/* a tall glass tower, angled like the reference photograph */}
      <polygon points="1230,900 1290,250 1385,222 1450,900" fill="#1b1e24" />
      <polygon points="1290,250 1385,222 1450,900 1380,900" fill="#2c313a" opacity=".7" />
    </svg>
  );
}

export function MountainSky({ className = "" }: { className?: string }) {
  const r = rng(11);
  const trees = Array.from({ length: 150 }, (_, i) => {
    const x = (i / 150) * 1640 - 20 + r() * 6;
    const h = 24 + r() * 46;
    return { x, h };
  });
  return (
    <svg aria-hidden viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" className={className}>
      <defs>
        <linearGradient id="msky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22394b" />
          <stop offset=".6" stopColor="#35516a" />
          <stop offset="1" stopColor="#4a6178" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2a590" />
          <stop offset=".55" stopColor="#d98676" />
          <stop offset="1" stopColor="#8a5f66" />
        </linearGradient>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2b3544" />
          <stop offset="1" stopColor="#10151d" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#msky)" />
      <g transform="translate(-40,70) scale(1.03)">
      {/* distant ridge */}
      <polygon points="0,780 180,690 330,730 520,640 700,700 860,640 1020,720 1600,760 1600,900 0,900" fill="#30465a" opacity=".6" />
      {/* lit left face */}
      <polygon points="0,880 230,790 430,700 640,660 790,690 980,600 1180,490 1260,470 1290,520 1170,640 1040,760 700,900 0,900" fill="url(#glow)" />
      <polygon points="430,700 640,660 700,720 560,780 380,800" fill="#f7b9a4" opacity=".18" />
      {/* shaded right face */}
      <polygon points="1260,470 1400,540 1600,700 1600,900 1000,900 1040,760 1170,640 1290,520" fill="url(#shade)" />
      <polygon points="1260,470 1290,520 1170,640 1120,610" fill="#f0e6ea" opacity=".3" />
      {/* snowfields */}
      <polygon points="700,720 860,640 980,690 880,760 780,780" fill="#e9d8dc" opacity=".22" />
      <polygon points="1090,560 1180,490 1230,520 1150,600" fill="#f4eef0" opacity=".32" />
      </g>
      {/* forest */}
      <polygon points="0,840 1600,830 1600,900 0,900" fill="#0b0f14" />
      <g fill="#0b0f14">
        {trees.map((t, i) => <polygon key={i} points={`${t.x},840 ${t.x + 9},${840 - t.h} ${t.x + 18},840`} />)}
      </g>
    </svg>
  );
}
