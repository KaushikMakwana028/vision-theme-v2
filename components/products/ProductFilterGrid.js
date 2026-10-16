"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function ProductFilterGrid({
  categories = [],
  counts = {},
  products = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const normalizedCategories = useMemo(() => {
    return categories.map((cat) => {
      if (typeof cat === "string") {
        return { name: cat, count: counts[cat] !== undefined ? counts[cat] : 0 };
      }
      return { name: cat.name || cat.label, count: cat.count || 0 };
    });
  }, [categories, counts]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <>
      {/* Filter tabs */}
      <div className="filter-wrap">
        <div className="filter-tabs" role="tablist" aria-label="Product categories">
          {normalizedCategories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  setSelectedCategory(cat.name);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
              >
                <span>{cat.name}</span>
                <em>{cat.count}</em>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="svp-empty">
          <p>No products found under this category.</p>
        </div>
      ) : (
        <div className="cols c3">
          {filteredProducts.map((prod, idx) => (
            <Reveal
              key={prod.id}
              as="article"
              delay={idx * 75}
              className="card svp-card"
              spot
            >
              <div className="svp-card-top">
                <span className="prod-badge">{prod.badge}</span>
                <span className="svc-num">{prod.number}</span>
              </div>

              <span
                className="ico"
                style={{
                  background: prod.gradient
                    ? `${prod.gradient.replace("linear-gradient", "radial-gradient")}`
                    : undefined,
                }}
              >
                <svg className="i" aria-hidden="true">
                  <use href={`#${prod.icon || "i-box"}`} />
                </svg>
              </span>

              <h3>{prod.shortTitle}</h3>

              <div className="prod-meta">
                <span className="prod-rating">★ {prod.rating}</span>
                <span className="prod-reviews">({prod.reviewsCount})</span>
              </div>

              {prod.image && (
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#0b1120",
                    margin: "0.85rem 0 1.1rem",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              )}

              <p>{prod.shortDescription}</p>

              <ul className="ticks">
                {prod.features?.slice(0, 3).map((f, fIdx) => (
                  <li key={fIdx}>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <span>{f.title}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-badge">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{prod.pricing}</span>
              </div>

              <Link href={`/products/${prod.slug}`} className="more">
                View Platform &amp; Architecture
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
