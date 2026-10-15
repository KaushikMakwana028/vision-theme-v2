"use client";

import { useRef } from "react";

export default function ServiceHeroTilt({ children, className = "bcard big svp-hero-card" }) {
  const cardRef = useRef(null);

  const onTilt = (e) => {
    if (!window.matchMedia("(hover: hover) and (min-width: 861px)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    let r = el._cachedRect;
    if (!r) {
      r = el.getBoundingClientRect();
      el._cachedRect = r;
    }
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
  };

  const onTiltEnd = () => {
    const el = cardRef.current;
    if (!el) return;
    el._cachedRect = null;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onTilt}
      onMouseLeave={onTiltEnd}
    >
      {children}
    </div>
  );
}
