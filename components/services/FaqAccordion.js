"use client";

import { useState } from "react";

export default function FaqAccordion({ items = [] }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) =>
    setOpenFaq((prev) => (prev === index ? null : index));

  return (
    <div className="faq-wrap">
      {items.map((faq, idx) => {
        const isOpen = openFaq === idx;
        const q = faq.q || faq.question;
        const a = faq.a || faq.answer;

        return (
          <div
            key={idx}
            className={`rv  faq-card ${isOpen ? "open" : ""}`}
            style={{ "--rv-delay": `${idx * 70}ms` }}
          >
            <button
              type="button"
              id={`faq-btn-${idx}`}
              className="faq-card-head"
              onClick={() => toggleFaq(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
            >
              <span>{q}</span>
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              aria-labelledby={`faq-btn-${idx}`}
              className="faq-card-body"
            >
              <div className="faq-inner">
                <p>{a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
