"use client";

import { useRef, useState } from "react";

function FAQItem({ q, a, open, onToggle }) {
  const innerRef = useRef(null);
  const answerRef = useRef(null);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={onToggle}>
        <span>{q}</span>
        <span className="faq-plus" />
      </button>
      <div
        className="faq-answer"
        ref={answerRef}
        style={{ maxHeight: open ? `${innerRef.current?.scrollHeight || 500}px` : "0px" }}
      >
        <div className="faq-answer-inner" ref={innerRef}>{a}</div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FAQItem
          key={i}
          q={item.q}
          a={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
