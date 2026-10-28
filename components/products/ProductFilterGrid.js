"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function ProductFilterGrid({ products = [] }) {
  if (!products || products.length === 0) {
    return (
      <div className="svp-empty">
        <p>No products available at this time.</p>
      </div>
    );
  }

  return (
    <div className="prod-catalog-grid">
      {products.map((prod, idx) => (
        <Reveal
          key={prod.id}
          as="article"
          delay={idx * 80}
          className="card svp-card prod-catalog-card"
          spot
        >
          {/* Top meta row */}
          <div className="svp-card-top">
            <span className="prod-badge">{prod.badge}</span>
            <span className="svc-num">{prod.number}</span>
          </div>

          {/* 16:9 Aspect Ratio Preview Image */}
          {prod.image && (
            <div className="prod-card-thumb-wrap">
              <Image
                src={prod.image}
                alt={prod.imageAlt || `${prod.title} SaaS software platform by Vision Technolabs in Ahmedabad`}
                width={800}
                height={450}
                sizes="(max-width: 900px) 100vw, 50vw"
                className="prod-card-img"
                priority={idx < 2}
              />
              <div className="prod-card-thumb-overlay" />
            </div>
          )}

          {/* Title & Icon Header */}
          <div className="prod-card-head">
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
            <div className="prod-title-wrap">
              <h3 className="prod-title">{prod.shortTitle}</h3>
              <div className="prod-meta">
                <span className="prod-rating">★ {prod.rating}</span>
                <span className="prod-reviews">({prod.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <p className="prod-desc">{prod.shortDescription}</p>

          {/* Key Feature Ticks */}
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

          {/* Pricing & CTA Footer */}
          <div className="prod-card-footer">
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
          </div>
        </Reveal>
      ))}
    </div>
  );
}
