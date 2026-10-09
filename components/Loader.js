"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Quick brand intro fade-out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    // Scroll progress handler
    const updateProgress = () => {
      const el = document.documentElement;
      const max = (el.scrollHeight - el.clientHeight) || 1;
      const progress = (el.scrollTop / max) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Top scroll progress indicator bar */}
      <div
        className="progress"
        id="progress"
        aria-hidden="true"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Initial load transition screen */}
      <div
        className={`page-loader-overlay ${!loading ? "page-loader-hidden" : ""}`}
        aria-hidden={!loading}
      >
        <div className="page-loader-content">
          <div className="page-loader-logo">
            <svg width="46" height="46" aria-hidden="true">
              <use href="#i-logo" />
            </svg>
          </div>
          <div className="page-loader-spinner" />
          <span className="page-loader-text">Vision Technolabs</span>
        </div>
      </div>
    </>
  );
}
