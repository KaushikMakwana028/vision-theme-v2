"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, duration = 1500 }) {
  const text = String(value ?? "");
  const match = text.match(/^(\D*?)(\d+(?:\.\d+)?)(\D*)$/);
  const countable = Boolean(match);
  const prefix = countable ? match[1] : "";
  const target = countable ? parseFloat(match[2]) : 0;
  const suffix = countable ? match[3] : "";
  const decimals =
    countable && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const ref = useRef(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !countable) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      requestAnimationFrame(() => setN(target));
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, countable]);

  return (
    <span ref={ref}>
      {countable ? `${prefix}${n.toFixed(decimals)}${suffix}` : text}
    </span>
  );
}
