"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix = "", label, desc }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = parseFloat(value);
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            done = true;
            const duration = 1400;
            const start = performance.now();
            function tick(now) {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(numeric * eased).toString());
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat-card" ref={ref}>
      {label && <div className="stat-label">{label}</div>}
      <div className="stat-value">{display}{suffix}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
}
