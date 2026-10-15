"use client";

import { Children, cloneElement, useState } from "react";

export default function ServicesFilter({ categories = [], counts = {}, children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  let visibleCount = 0;
  const filteredChildren = Children.map(children, (child) => {
    if (!child) return null;
    const cat = child.props["data-category"];
    const matches = selectedCategory === "All" || cat === selectedCategory;
    if (matches) visibleCount++;

    return cloneElement(child, {
      style: {
        ...child.props.style,
        display: matches ? undefined : "none",
      },
      onMouseMove: onSpot,
    });
  });

  return (
    <>
      <div className="filter-wrap">
        <div
          className="filter-tabs"
          role="tablist"
          aria-label="Service Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={(e) => {
                setSelectedCategory(cat);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
            >
              {cat}
              {counts[cat] !== undefined && <em>{counts[cat]}</em>}
            </button>
          ))}
        </div>
      </div>

      <div className="cols c3 svp-grid" role="tabpanel">
        {filteredChildren}
      </div>

      {visibleCount === 0 && (
        <p className="svp-empty">
          No services in this category yet. Try another filter.
        </p>
      )}
    </>
  );
}
