"use client";

import { useEffect } from "react";

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="modal"
      id="vModal"
      role="dialog"
      aria-modal="true"
      aria-label="Video testimonial"
    >
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-box">
        <button
          className="modal-close"
          id="vClose"
          aria-label="Close video"
          onClick={onClose}
        >
          <svg className="i">
            <use href="#i-close" />
          </svg>
        </button>
        <div className="modal-frame" id="vFrame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.ytId}?autoplay=1&rel=0`}
            title={video.title || "Client video testimonial"}
            allow="accelerate; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="modal-title" id="vTitle">
          {video.title}
        </p>
      </div>
    </div>
  );
}
