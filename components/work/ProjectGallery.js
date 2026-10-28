"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function ProjectGallery({
  gallery,
  images,
  items,
  title: propTitle,
  website: propWebsite,
  domain: propDomain,
  slug: propSlug,
  defaultImage: propDefaultImage,
  project,
}) {
  // If app project, render nothing and do not fail
  const isAppProject =
    project?.category === "Mobile App Development" ||
    project?.serviceSlug === "mobile-app-development" ||
    project?.image?.includes("/app_images/");

  const galleryImages = useMemo(() => {
    if (isAppProject) return [];
    const list =
      (gallery && gallery.length > 0 ? gallery : null) ||
      (project?.gallery && project.gallery.length > 0 ? project.gallery : null) ||
      (items && items.length > 0 ? items : null) ||
      (images && images.length > 0 ? images : null) ||
      [];

    return list.slice(0, 4).map((item, idx) => ({
      src: item.src || item.url || "",
      url: item.src || item.url || "",
      alt: item.alt || item.caption || `Screen 0${idx + 1}`,
      caption: item.caption || item.alt || `Screen 0${idx + 1}`,
      width: item.width || 1536,
      height: item.height || 1024,
      tag: item.tag || "Platform Screen",
    }));
  }, [gallery, project, items, images, isAppProject]);

  const title = propTitle || project?.title || "";
  const website = propWebsite !== undefined ? propWebsite : project?.website;
  const domain = propDomain || project?.domain || "";
  const slug = propSlug || project?.slug || "";
  const defaultImg = propDefaultImage || project?.image || "";

  const [activeImage, setActiveImage] = useState(
    galleryImages[0]?.src || defaultImg || "",
  );
  const [activeCaption, setActiveCaption] = useState(
    galleryImages[0]?.caption || "",
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [prevFirstSrc, setPrevFirstSrc] = useState(galleryImages[0]?.src);
  if (galleryImages[0]?.src !== prevFirstSrc) {
    setPrevFirstSrc(galleryImages[0]?.src);
    setActiveImage(galleryImages[0]?.src || defaultImg || "");
    setActiveCaption(galleryImages[0]?.caption || "");
  }

  const activeIndex = useMemo(() => {
    const idx = galleryImages.findIndex((item) => item.src === activeImage);
    return idx >= 0 ? idx : 0;
  }, [galleryImages, activeImage]);

  const activeItem = galleryImages[activeIndex] || galleryImages[0] || null;

  const selectImageByIndex = useCallback(
    (index) => {
      if (!galleryImages.length) return;
      const boundedIndex = (index + galleryImages.length) % galleryImages.length;
      const target = galleryImages[boundedIndex];
      if (target) {
        setActiveImage(target.src);
        setActiveCaption(target.caption || target.alt || "");
      }
    },
    [galleryImages],
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

  // If no gallery images or is an app project, render nothing and do not fail
  if (isAppProject || galleryImages.length === 0) {
    return null;
  }

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

        <figure className="cs-browser-figure m-0">
          <div
            className="cs-browser-screen"
            onClick={() => setLightboxOpen(true)}
            title="Click to expand fullscreen"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
          >
            <Image
              src={activeImage || defaultImg}
              alt={activeItem?.alt || title}
              width={activeItem?.width || 1536}
              height={activeItem?.height || 1024}
              loading="lazy"
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="cs-main-screen-img"
            />
          </div>

          {activeCaption && (
            <figcaption className="cs-screen-caption-bar">
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
            </figcaption>
          )}
        </figure>
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
            {galleryImages.length} Screens Available
          </span>
        </div>

        <div className="cs-gallery-grid">
          {galleryImages.map((imgItem, idx) => {
            const isSelected = (activeImage || defaultImg) === imgItem.src;
            return (
              <figure
                key={idx}
                className={`cs-gallery-card m-0 ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  setActiveImage(imgItem.src);
                  setActiveCaption(imgItem.caption || imgItem.alt || "");
                  setLightboxOpen(true);
                }}
                title="Click to view full-resolution preview"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveImage(imgItem.src);
                    setActiveCaption(imgItem.caption || imgItem.alt || "");
                    setLightboxOpen(true);
                  }
                }}
              >
                <div className="cs-gallery-inner">
                  <Image
                    src={imgItem.src}
                    alt={imgItem.alt}
                    width={imgItem.width}
                    height={imgItem.height}
                    className="cs-gallery-img"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 50vw"
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
                <figcaption className="sr-only">
                  {imgItem.caption}
                </figcaption>
              </figure>
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
                Screen {activeIndex + 1} of {galleryImages.length}
                {galleryImages[activeIndex]?.tag
                  ? ` · ${galleryImages[activeIndex].tag}`
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
            {galleryImages.length > 1 && (
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

            <figure className="cs-lightbox-content m-0">
              <Image
                src={galleryImages[activeIndex]?.src || activeImage || defaultImg}
                alt={galleryImages[activeIndex]?.alt || title}
                width={galleryImages[activeIndex]?.width || 1536}
                height={galleryImages[activeIndex]?.height || 1024}
                loading="lazy"
                sizes="(max-width: 1400px) 100vw, 1400px"
                style={{ width: "auto", height: "auto", maxHeight: "80vh" }}
              />
              <figcaption className="cs-lightbox-bottom">
                <p className="cs-lightbox-caption">
                  {galleryImages[activeIndex]?.caption || activeCaption || title}
                </p>
                <p className="cs-lightbox-hint">
                  Use ← / → arrow keys to navigate · Press Esc or click outside
                  to close
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  );
}
