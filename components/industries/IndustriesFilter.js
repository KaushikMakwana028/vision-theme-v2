"use client";

import { Children, cloneElement, useState } from "react";

export default function IndustriesFilter({ categories = [], counts = {}, children }) {
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

  const filteredChildren = Children.map(children, (child) => {
    if (!child) return null;
    const cat = child.props["data-category"];
    const matches = selectedCategory === "All" || cat === selectedCategory;

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
          aria-label="Industry Categories"
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

      <div className="ind-cards-grid" role="tabpanel">
        {filteredChildren}
      </div>
    </>
  );
}
