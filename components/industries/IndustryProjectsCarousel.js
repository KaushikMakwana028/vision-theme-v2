"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function IndustryProjectsCarousel({
  projects = [],
  industryTitle = "",
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [projects.length, isPaused]);

  if (!projects || projects.length === 0) return null;

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 40) {
        nextSlide();
      } else if (distance < -40) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setTimeout(() => setIsPaused(false), 2500);
  };

  const currentProject = projects[activeSlide] || projects[0];
  if (!currentProject) return null;

  return (
    <section className="svp-standout-sec" id="work">
      <div className="container">
        <div className="svp-standout-head">
          <div className="svp-standout-title-wrap">
            <span className="eyebrow">Proven Case Studies</span>
            <h2>
              Our Standout <span className="hi">{industryTitle} Projects</span>
            </h2>
          </div>

          {projects.length > 1 && (
            <div className="svp-standout-arrows">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Standout Project"
                className="svp-slide-btn"
              >
                <svg
                  width="20"
                  height="20"
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    maxWidth: "20px",
                    flexShrink: 0,
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Standout Project"
                className="svp-slide-btn"
              >
                <svg
                  width="20"
                  height="20"
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    maxWidth: "20px",
                    flexShrink: 0,
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div
          className="svp-standout-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div key={currentProject.id} className="svp-standout-card">
            <div className="svp-standout-content">
              {currentProject.tags?.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}
                >
                  {currentProject.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        padding: "0.22rem 0.65rem",
                        borderRadius: "999px",
                        background: "rgba(79, 70, 229, 0.08)",
                        color: "var(--primary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="svp-standout-title">
                {currentProject.subtitle || currentProject.title}
              </h3>

              <p className="svp-standout-desc">
                {currentProject.description || currentProject.shortPitch}
              </p>

              <Link
                className="svp-standout-link"
                href={`/work/${currentProject.slug || currentProject.id}`}
                aria-label={`Read ${currentProject.title} case study`}
              >
                <span>Read the Case Study</span>
                <svg
                  width="18"
                  height="18"
                  style={{
                    width: "18px",
                    height: "18px",
                    minWidth: "18px",
                    maxWidth: "18px",
                    flexShrink: 0,
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>

            <div className="svp-standout-visual">
              <Link
                href={`/work/${currentProject.slug || currentProject.id}`}
                className="svp-standout-img-card"
                style={{
                  "--g":
                    currentProject.gradient ||
                    "linear-gradient(135deg,#0d9488,#059669)",
                }}
                aria-label={`View ${currentProject.title} case study`}
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  width={760}
                  height={500}
                />
              </Link>
            </div>
          </div>

          {projects.length > 1 && (
            <div className="svp-standout-dots">
              {projects.map((p, idx) => (
                <button
                  key={p.id || idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`svp-standout-dot ${idx === activeSlide ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
