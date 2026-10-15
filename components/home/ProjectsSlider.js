"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSlider({ items = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length === 0) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const diff = touchStart - touchEnd;
      if (diff > 40) {
        setActiveSlide((prev) => (prev + 1) % items.length);
      } else if (diff < -40) {
        setActiveSlide((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => setIsPaused(false), 2000);
  };

  if (items.length === 0) return null;
  const proj = items[activeSlide] || items[0];

  return (
    <div
      className="home-slider-mobile"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <article className="home-work-card" key={proj.id}>
        <Link
          href={`/work/${proj.slug || proj.id}`}
          className="home-work-thumb"
          style={{ "--g": proj.gradient }}
          aria-label={`View ${proj.title} case study`}
        >
          <Image
            src={proj.image}
            alt={proj.title}
            width={640}
            height={360}
          />
        </Link>
        <div className="home-work-body">
          <div className="home-work-tags">
            {proj.tags.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>
          <h3>
            <Link href={`/work/${proj.slug || proj.id}`}>
              {proj.title}
            </Link>
          </h3>
          <p>{proj.pitch}</p>
          <Link
            className="home-work-link"
            href={`/work/${proj.slug || proj.id}`}
            aria-label={`Read ${proj.title} case study`}
          >
            Read Case Study{" "}
            <svg className="i" width="14" height="14" style={{ width: 14, height: 14, flexShrink: 0 }}>
              <use href="#i-arrow" />
            </svg>
          </Link>
        </div>
      </article>

      <div className="home-slider-nav">
        <button
          type="button"
          className="home-slider-btn"
          aria-label="Previous project"
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + items.length) % items.length)
          }
        >
          <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="home-slider-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`home-slider-dot ${idx === activeSlide ? "active" : ""}`}
              aria-label={`Go to project ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
        <button
          type="button"
          className="home-slider-btn"
          aria-label="Next project"
          onClick={() =>
            setActiveSlide((prev) => (prev + 1) % items.length)
          }
        >
          <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
