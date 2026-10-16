"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogExplorer({ categories = [], articles = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    let list = articles;
    if (activeCategory && activeCategory !== "All") {
      list = list.filter((b) => b.category === activeCategory);
    }
    if (!searchQuery.trim()) return list;
    const query = searchQuery.toLowerCase().trim();
    return list.filter((article) => {
      const tags = article.tags || [];
      return (
        article.title?.toLowerCase().includes(query) ||
        article.excerpt?.toLowerCase().includes(query) ||
        tags.some((t) => t.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, activeCategory, articles]);

  return (
    <>
      {/* Search & Topic Tabs */}
      <div className="blog-filter-bar">
        <div className="blog-search-box">
          <svg
            className="blog-search-ico"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search articles by topic, keyword, or framework..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search articles"
          />
        </div>

        <div className="blog-tabs" role="tablist" aria-label="Article categories">
          {categories.map((cat) => {
            const name = typeof cat === "string" ? cat : cat.name;
            const count = typeof cat === "string" ? 0 : cat.count;
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`blog-tab ${isActive ? "active" : ""}`}
                onClick={() => setActiveCategory(name)}
              >
                <span>{name}</span>
                <em>{count}</em>
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--muted)" }}>
          <h3>No articles found</h3>
          <p>Try searching for a different keyword or category.</p>
        </div>
      ) : (
        <div className="cols c3">
          {filteredArticles.map((article) => (
            <article key={article.id} className="mag-card">
              <Link
                href={`/blog/${article.slug || article.id}`}
                className="mag-thumb"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={500}
                />
              </Link>

              <div className="mag-body">
                <div className="mag-meta">
                  <span className="mag-cat">{article.category}</span>
                  <span className="mag-read">{article.readTime}</span>
                </div>

                <h3>
                  <Link href={`/blog/${article.slug || article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                <p>{article.excerpt}</p>

                <div className="mag-foot">
                  <div className="mag-auth">
                    <Image
                      className="mag-auth-av"
                      src={article.author?.avatar}
                      alt={article.author?.name || "Author avatar"}
                      width={32}
                      height={32}
                    />
                    <div className="mag-auth-text">
                      <strong>{article.author?.name}</strong>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${article.slug || article.id}`}
                    className="mag-arrow"
                    aria-label={`Read ${article.title}`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
