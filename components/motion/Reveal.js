"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.01) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    // Safety fallback: ensure element is revealed even if observer never fires
    const timer = setTimeout(() => {
      setShown(true);
    }, 1000);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          clearTimeout(timer);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 100px 0px" },
    );
    io.observe(el);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [threshold]);

  return [ref, shown];
}

const onSpot = (e) => {
  const el = e.currentTarget;
  let r = el._cachedRect;
  if (!r) {
    r = el.getBoundingClientRect();
    el._cachedRect = r;
  }
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const onTilt = (e) => {
  if (!window.matchMedia("(hover: hover) and (min-width: 861px)").matches)
    return;
  const el = e.currentTarget;
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

const onTiltEnd = (e) => {
  e.currentTarget._cachedRect = null;
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  spot = false,
  tilt = false,
  reveal = true,
  style,
  ...rest
}) {
  const [ref, shown] = useInView();

  const handleMouseMove = (e) => {
    if (spot) onSpot(e);
    if (tilt) onTilt(e);
  };

  const handleMouseLeave = (e) => {
    if (tilt) onTiltEnd(e);
  };

  const finalClassName = reveal
    ? `rv ${shown ? "rv-in" : ""} ${className}`
    : className;

  const mergedStyle = reveal
    ? style
      ? { "--rv-delay": `${delay}ms`, ...style }
      : { "--rv-delay": `${delay}ms` }
    : style;

  return (
    <Tag
      ref={reveal ? ref : undefined}
      className={finalClassName}
      style={mergedStyle}
      onMouseMove={spot || tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
