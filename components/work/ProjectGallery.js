"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function ProjectGallery({
  images = [],
  items,
  gallery,
  title: propTitle,
  website: propWebsite,
  domain: propDomain,
  slug: propSlug,
  defaultImage: propDefaultImage,
  project,
}) {
  const allImages = useMemo(() => {
    return images.length > 0 ? images : items || gallery || [];
  }, [images, items, gallery]);

  const title = propTitle || project?.title || "";
  const website = propWebsite !== undefined ? propWebsite : project?.website;
  const domain = propDomain || project?.domain || "";
  const slug = propSlug || project?.slug || "";
  const defaultImg = propDefaultImage || project?.image || "";

  const [activeImage, setActiveImage] = useState(
    allImages[0]?.url || defaultImg || "",
  );
  const [activeCaption, setActiveCaption] = useState(
    allImages[0]?.caption || "",
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [prevFirstUrl, setPrevFirstUrl] = useState(allImages[0]?.url);
  if (allImages[0]?.url !== prevFirstUrl) {
    setPrevFirstUrl(allImages[0]?.url);
    setActiveImage(allImages[0]?.url || defaultImg || "");
    setActiveCaption(allImages[0]?.caption || "");
  }

  const activeIndex = useMemo(() => {
    const idx = allImages.findIndex((item) => item.url === activeImage);
    return idx >= 0 ? idx : 0;
  }, [allImages, activeImage]);

  const selectImageByIndex = useCallback(
    (index) => {
      if (!allImages.length) return;
      const boundedIndex = (index + allImages.length) % allImages.length;
      const target = allImages[boundedIndex];
      if (target) {
        setActiveImage(target.url);
        setActiveCaption(target.caption || "");
      }
    },
    [allImages],
  );

  const showNextImage = () => selectImageByIndex(activeIndex + 1);
  const showPrevImage = () => selectImageByIndex(activeIndex - 1);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        selectImageByIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        selectImageByIndex(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeIndex, selectImageByIndex]);

  if (!defaultImg && allImages.length === 0) return null;

  return (
    <>
      {/* Main Browser Window Mockup */}
      <Reveal className="cs-browser-frame">
        <div className="cs-browser-header">
          <div className="cs-browser-dots" aria-hidden="true">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </div>
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-browser-address cs-browser-address-link"
              title="Open live website in a new tab"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{website}</span>
              <span className="cs-browser-address-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : (
            <div className="cs-browser-address">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{`https://${domain || (slug ? `${slug}.com` : "production-preview")}`}</span>
            </div>
          )}
          <div className="cs-browser-meta">
            <span className="cs-live-pill">
              <span className="cs-live-pulse" /> Live Deployment
            </span>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-browser-live-btn"
                title="Launch live website in a new tab"
              >
                <span>Visit Live Site</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
            <button
              type="button"
              className="cs-zoom-btn"
              onClick={() => setLightboxOpen(true)}
              title="View fullscreen preview"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              Fullscreen
            </button>
          </div>
        </div>

        <div
          className="cs-browser-screen"
          onClick={() => setLightboxOpen(true)}
          title="Click to expand fullscreen"
        >
          <Image
            src={activeImage || defaultImg}
            alt={title}
            width={1200}
            height={675}
            className="cs-main-screen-img"
          />
        </div>

        {activeCaption && (
          <div className="cs-screen-caption-bar">
            <div className="cs-caption-left">
              <span className="cs-caption-tag">Active Screen</span>
              <span className="cs-caption-text">{activeCaption}</span>
            </div>
            <button
              type="button"
              className="cs-caption-zoom-btn"
              onClick={() => setLightboxOpen(true)}
              title="Click to zoom in fullscreen"
            >
              <span>Click to Zoom In</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </div>
        )}
      </Reveal>

      {/* Visual Platform Screen Gallery */}
      <div className="cs-gallery-container">
        <div className="cs-gallery-header">
          <div className="cs-gallery-title">
            <h3>Visual Gallery &amp; Platform Screens</h3>
            <p>
              Click any screen to open the interactive high-resolution preview.
            </p>
          </div>
          <span className="cs-gallery-count">
            {allImages.length} Screens Available
          </span>
        </div>

        <div className="cs-gallery-grid">
          {allImages.slice(0, 6).map((imgItem, idx) => {
            const isSelected = (activeImage || defaultImg) === imgItem.url;
            return (
              <div
                key={idx}
                className={`cs-gallery-card ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  setActiveImage(imgItem.url);
                  setActiveCaption(imgItem.caption || "");
                  setLightboxOpen(true);
                }}
                title="Click to view full-resolution preview"
              >
                <div className="cs-gallery-inner">
                  <Image
                    src={imgItem.url}
                    alt={imgItem.caption || `Screen ${idx + 1}`}
                    width={600}
                    height={338}
                    className="cs-gallery-img"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                  <div className="cs-gallery-overlay">
                    <span className="cs-gallery-zoom-pill">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                      <span>Preview</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxOpen && (
        <div className="cs-lightbox" onClick={() => setLightboxOpen(false)}>
          <div
            className="cs-lightbox-topbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cs-lightbox-counter">
              <span className="cs-lightbox-counter-dot" />
              <span>
                Screen {activeIndex + 1} of {allImages.length}
                {allImages[activeIndex]?.tag
                  ? ` · ${allImages[activeIndex].tag}`
                  : ""}
              </span>
            </div>
            <button
              type="button"
              className="cs-lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close fullscreen view"
            >
              ✕
            </button>
          </div>

          <div
            className="cs-lightbox-main"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="cs-lightbox-nav cs-lightbox-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrevImage();
                  }}
                  aria-label="Previous screen"
                  title="Previous screen (Left Arrow)"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="cs-lightbox-nav cs-lightbox-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNextImage();
                  }}
                  aria-label="Next screen"
                  title="Next screen (Right Arrow)"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            <div className="cs-lightbox-content">
              <Image
                src={allImages[activeIndex]?.url || activeImage || defaultImg}
                alt={allImages[activeIndex]?.caption || title}
                width={1200}
                height={800}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="cs-lightbox-bottom">
                <p className="cs-lightbox-caption">
                  {allImages[activeIndex]?.caption || activeCaption || title}
                </p>
                <p className="cs-lightbox-hint">
                  Use ← / → arrow keys to navigate · Press Esc or click outside
                  to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
