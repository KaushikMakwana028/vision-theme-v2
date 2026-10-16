"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

export default function FaqAccordion({ items = [], variant = "default" }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? -1 : idx));
  };

  if (variant === "contact") {
    return (
      <div className="faq">
        {items.map((f, i) => {
          const open = openFaq === i;
          const q = f.q || f.question;
          const a = f.a || f.answer;
          return (
            <div key={q} className={`faq-item ${open ? "open" : ""}`}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{q}</span>
                  <span className="faq-ico" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <div
                className="faq-a"
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
              >
                <div>
                  <p>{a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="faq-wrap">
      {items.map((faq, idx) => {
        const isOpen = openFaq === idx;
        const q = faq.q || faq.question;
        const a = faq.a || faq.answer;

        return (
          <Reveal
            key={idx}
            delay={idx * 70}
            className={`faq-card ${isOpen ? "open" : ""}`}
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
          </Reveal>
        );
      })}
    </div>
  );
}
