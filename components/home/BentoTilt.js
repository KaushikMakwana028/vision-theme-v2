"use client";

import { useRef, useEffect } from "react";

export default function BentoTilt({ children }) {
  const bentoRef = useRef(null);

  useEffect(() => {
    const bentoEl = bentoRef.current;
    if (!bentoEl) return;
    const heroEl = bentoEl.closest(".hero");
    const targetEl = heroEl || bentoEl;

    let rafId = null;
    let cachedRect = null;

    const handleMouseEnter = () => {
      cachedRect = bentoEl.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      if (!cachedRect) cachedRect = bentoEl.getBoundingClientRect();
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const x = ((e.clientX - cachedRect.left) / cachedRect.width - 0.5) * 6;
        const y = -((e.clientY - cachedRect.top) / cachedRect.height - 0.5) * 6;
        bentoEl.style.transform = `perspective(1100px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      cachedRect = null;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      bentoEl.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    };

    targetEl.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    targetEl.addEventListener("mousemove", handleMouseMove, { passive: true });
    targetEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      targetEl.removeEventListener("mouseenter", handleMouseEnter);
      targetEl.removeEventListener("mousemove", handleMouseMove);
      targetEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bento" ref={bentoRef} aria-hidden="true">
      {children}
    </div>
  );
}
