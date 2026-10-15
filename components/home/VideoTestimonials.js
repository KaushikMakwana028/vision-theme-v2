"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/VideoModal";

export default function VideoTestimonials({ items = [] }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <div className="cols c3">
        {items.map((vid) => (
          <div
            className="card flush video-card rv"
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            style={{ cursor: "pointer" }}
          >
            <div className="vthumb" style={{ "--g": vid.gradient }}>
              <Image
                src={vid.thumbnail}
                alt={vid.title}
                width={480}
                height={360}
              />
              <button
                className="play-btn"
                aria-label={`Play video testimonial: ${vid.title}`}
              >
                <svg className="i fill">
                  <use href="#i-play" />
                </svg>
              </button>
              <span className="vclient">{vid.client}</span>
            </div>
            <div className="wb">
              <h3>{vid.title}</h3>
              <p>{vid.description}</p>
            </div>
          </div>
        ))}
      </div>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
