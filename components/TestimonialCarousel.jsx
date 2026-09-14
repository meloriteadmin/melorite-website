"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialCarousel({ items }) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    function updatePerView() {
      const w = window.innerWidth;
      setPerView(w <= 760 ? 1 : w <= 1100 ? 2 : 5);
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const pages = Math.max(1, Math.ceil(items.length / perView));

  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [pages, page]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.children[0]?.getBoundingClientRect().width || 0;
    track.style.transform = `translateX(-${page * perView * (cardWidth + 20)}px)`;
  }, [page, perView]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [pages]);

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() => {
        timerRef.current = setInterval(() => setPage((p) => (p + 1) % pages), 5000);
      }}
    >
      <div className="testimonial-track" ref={trackRef}>
        {items.map((t, i) => (
          <div
            key={i}
            className="testimonial-card"
            style={{
              backgroundImage: t.bg
                ? `linear-gradient(0deg, rgba(0,0,0,.55), rgba(0,0,0,.15)), url('${t.bg}')`
                : undefined,
            }}
          >
            <p>&ldquo;{t.quote}&rdquo;</p>
            <div className="byline">
              <strong>{t.by}</strong>
              {t.role}
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className={i === page ? "active" : undefined}
            onClick={() => setPage(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
