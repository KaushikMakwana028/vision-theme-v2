"use client";

import { useState, useRef, useEffect } from "react";

export default function TestimonialsCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Auto-scroll for Testimonials
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const timer = setInterval(() => {
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 20) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Update testimonial pages calculation on resize
  useEffect(() => {
    const updatePagination = () => {
      if (!trackRef.current) return;
      const width = window.innerWidth;
      const perView = width >= 1100 ? 3 : width >= 768 ? 2 : 1;
      const pages = Math.max(1, Math.ceil(items.length / perView));
      setTotalPages(pages);
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, [items.length]);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const clientWidth = trackRef.current.clientWidth;
    const pageIndex = Math.round(scrollLeft / clientWidth) || 0;
    setCurrentPage(pageIndex);
  };

  const scrollToPage = (pageIndex) => {
    if (!trackRef.current) return;
    const target = pageIndex * trackRef.current.clientWidth;
    trackRef.current.scrollTo({ left: target, behavior: "smooth" });
    setCurrentPage(pageIndex);
  };

  return (
    <div className="test-wrap rv">
      <div
        className="test-track"
        id="testTrack"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {items.map((item, idx) => (
          <figure className="card quote t-item" key={idx}>
            <div className="stars" aria-label="5 out of 5 stars">
              {[...Array(item.rating)].map((_, sIdx) => (
                <svg className="i fill" key={sIdx}>
                  <use href="#i-star" />
                </svg>
              ))}
            </div>
            <p>{item.quote}</p>
            <figcaption className="who">
              <span className="av">{item.initials}</span>
              <div>
                <strong>{item.author}</strong>
                <small>
                  {item.role} · {item.country}
                </small>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="test-controls">
        <button
          className="test-btn prev"
          aria-label="Previous testimonials"
          onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
        >
          <svg className="i">
            <use href="#i-arrow" />
          </svg>
        </button>
        <div className="test-dots" id="testDots">
          {[...Array(totalPages)].map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={dotIdx === currentPage ? "active" : ""}
              aria-label={`Go to testimonial group ${dotIdx + 1}`}
              onClick={() => scrollToPage(dotIdx)}
            />
          ))}
        </div>
        <button
          className="test-btn next"
          aria-label="Next testimonials"
          onClick={() =>
            scrollToPage(Math.min(totalPages - 1, currentPage + 1))
          }
        >
          <svg className="i">
            <use href="#i-arrow" />
          </svg>
        </button>
      </div>
    </div>
  );
}
