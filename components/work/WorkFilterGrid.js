"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function WorkFilterGrid({ categories = [], counts = {}, projects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const normalizedCategories = useMemo(() => {
    return categories.map((cat) => {
      if (typeof cat === "string") {
        return { name: cat, count: counts[cat] !== undefined ? counts[cat] : 0 };
      }
      return { name: cat.name || cat.label, count: cat.count || 0 };
    });
  }, [categories, counts]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <>
      {/* Filter tabs */}
      <div className="filter-wrap">
        <div className="filter-tabs" role="tablist" aria-label="Work categories">
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

      {/* Case Studies Grid */}
      <div className="cols c3">
        {filteredProjects.map((proj, idx) => (
          <Reveal
            key={proj.id}
            as="article"
            delay={idx * 75}
            className="card flush svp-card svp-proj"
            spot
          >
            <Link
              href={`/work/${proj.slug || proj.id}`}
              className="svp-thumb"
              aria-label={`View ${proj.title} case study`}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={800}
                height={450}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </Link>

            <div className="wb svp-wb">
              {proj.tags?.length > 0 && (
                <div className="tags svp-tags">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx}>{t}</span>
                  ))}
                </div>
              )}

              <h3>
                <Link href={`/work/${proj.slug || proj.id}`}>
                  {proj.title}
                </Link>
              </h3>

              <p>{proj.description}</p>

              <Link
                href={`/work/${proj.slug || proj.id}`}
                className="more"
                aria-label={`Explore ${proj.title} case study`}
              >
                Explore Case Study
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
