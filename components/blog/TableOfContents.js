"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ toc = [], mobile = false }) {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [toc]);

  const links = (onClick) => (
    <nav className="toc" aria-label="Table of contents">
      {toc.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          onClick={onClick}
          className={active === t.id ? "active" : ""}
          aria-current={active === t.id ? "true" : undefined}
        >
          {t.label}
        </a>
      ))}
    </nav>
  );

  if (mobile) {
    return (
      <details className="mobile-toc">
        <summary>
          <span>On this page</span>
          <i aria-hidden="true">+</i>
        </summary>
        {links((e) => e.currentTarget.closest("details")?.removeAttribute("open"))}
      </details>
    );
  }

  return links();
}
