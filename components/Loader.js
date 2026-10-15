"use client";

import { Suspense, useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

/* ==========================================================================
   Self-Contained Loader Styles (Zero dependency on global.css)
   ========================================================================== */
export const loaderStyles = `
/* Fullscreen Fixed Loader Overlay */
.page-loader-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  opacity: 1;
  visibility: visible;
  transition: opacity 0.26s cubic-bezier(0.16, 1, 0.3, 1),
              visibility 0.26s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: auto;
}

.page-loader-overlay.page-loader-hidden {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

/* Ambient SaaS Gradient Mesh Backdrop */
.page-loader-backdrop-mesh {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 25%, rgba(79, 70, 229, 0.16), transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.15), transparent 45%),
    radial-gradient(circle at 50% 80%, rgba(147, 51, 234, 0.13), transparent 50%);
}

.page-loader-backdrop-mesh::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at center, #000 30%, transparent 75%);
}

/* Central Frosted Glass Card */
.page-loader-card {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 2.85rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(79, 70, 229, 0.16);
  box-shadow:
    0 25px 60px -12px rgba(15, 23, 42, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
    0 10px 24px -6px rgba(79, 70, 229, 0.1);
  transform: translateY(0) scale(1);
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.26s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-loader-hidden .page-loader-card {
  transform: translateY(10px) scale(0.96);
}

/* Emblem Container */
.page-loader-emblem {
  position: relative;
  width: 126px;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.15rem;
}

/* Pulsing Radiant Aura */
.page-loader-halo {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(79, 70, 229, 0.32) 0%,
    rgba(147, 51, 234, 0.2) 45%,
    rgba(6, 182, 212, 0.12) 65%,
    transparent 76%
  );
  animation: vLoaderHalo 2.2s ease-in-out infinite;
}

/* Radar Pulse Waves */
.page-loader-ripple {
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  border: 1.5px solid rgba(79, 70, 229, 0.32);
  animation: vLoaderRipple 2.2s cubic-bezier(0.1, 0.6, 0.2, 1) infinite;
  pointer-events: none;
}
.page-loader-ripple.delay {
  animation-delay: 1.1s;
}

/* Outer Spinning Orbital Ring */
.page-loader-orbit-outer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: vLoaderSpin 1.45s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  transform-origin: center center;
}

/* Inner Counter-Rotating Precision Tech Ring */
.page-loader-orbit-inner {
  position: absolute;
  width: 96px;
  height: 96px;
  animation: vLoaderSpinReverse 2.8s linear infinite;
  transform-origin: center center;
}

/* Floating Logo Core */
.page-loader-logo-core {
  position: relative;
  z-index: 3;
  width: 62px;
  height: 62px;
  border-radius: 18px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 12px 28px -5px rgba(79, 70, 229, 0.32),
    0 0 0 1px rgba(79, 70, 229, 0.14);
  animation: vLoaderCoreFloat 2.4s ease-in-out infinite;
}

.page-loader-logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;
}

/* Brand Wordmark */
.page-loader-brand {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #0f172a;
  margin-bottom: 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.page-loader-brand-accent {
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #9333ea, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Status Pill */
.page-loader-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
  border: 1px solid rgba(79, 70, 229, 0.18);
  margin-bottom: 1.15rem;
  max-width: 320px;
}

.page-loader-status-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.25);
  flex-shrink: 0;
  animation: vLoaderDotPulse 1.2s ease-in-out infinite;
}

.page-loader-status-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.page-loader-dots {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
}

.page-loader-dots i {
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  background: #4f46e5;
  display: inline-block;
  animation: vLoaderDotBounce 1.2s infinite ease-in-out;
}

.page-loader-dots i:nth-child(2) {
  animation-delay: 0.18s;
}
.page-loader-dots i:nth-child(3) {
  animation-delay: 0.36s;
}

/* Progress Bar Track */
.page-loader-track {
  width: 190px;
  height: 4.5px;
  border-radius: 999px;
  background: rgba(79, 70, 229, 0.12);
  overflow: hidden;
  position: relative;
}

.page-loader-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #4f46e5, #9333ea, #06b6d4, #4f46e5);
  background-size: 200% 100%;
  transition: width 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  animation: vLoaderShimmer 1.8s linear infinite;
}

/* Top Route Progress Bar */
.route-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5px;
  width: 0%;
  background: linear-gradient(90deg, #4f46e5, #8b5cf6, #06b6d4, #fb923c);
  background-size: 200% 100%;
  z-index: 10000000;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 0 14px rgba(79, 70, 229, 0.65), 0 0 6px rgba(6, 182, 212, 0.5);
  transition: width 0.22s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
  animation: vLoaderShimmer 2s linear infinite;
}

.route-progress-bar.is-active {
  opacity: 1;
}

.route-progress-glow {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 72px;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.9), #ffffff);
  filter: blur(1.5px);
}

/* Clicked Link / Button Inline Redirection Indicator */
a[data-nav-loading="true"] {
  position: relative;
  pointer-events: none;
  opacity: 0.88;
}

/* Animations */
@keyframes vLoaderSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes vLoaderSpinReverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes vLoaderHalo {
  0%, 100% {
    transform: scale(0.92);
    opacity: 0.58;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}

@keyframes vLoaderRipple {
  0% {
    transform: scale(0.85);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

@keyframes vLoaderCoreFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.025);
  }
}

@keyframes vLoaderDotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.65;
  }
}

@keyframes vLoaderDotBounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.35;
  }
  40% {
    transform: translateY(-3.5px);
    opacity: 1;
  }
}

@keyframes vLoaderShimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
`;

/* ==========================================================================
   Helper: Resolve human-friendly destination label
   ========================================================================== */
function resolveDestinationLabel(pathname, anchor) {
  if (anchor) {
    const customLabel = anchor.getAttribute("data-page-label");
    if (customLabel) return customLabel;

    // Check heading inside anchor (e.g. card h2/h3)
    const cardHeading = anchor.querySelector("h2, h3, h4, .title, strong");
    if (cardHeading && cardHeading.textContent?.trim()) {
      const text = cardHeading.textContent.trim();
      if (text.length <= 32) return text;
    }

    const anchorText = anchor.textContent?.trim();
    if (anchorText && anchorText.length <= 26 && !anchorText.includes("\n")) {
      return anchorText;
    }
  }

  const cleanPath = (pathname || "").replace(/\/$/, "");
  if (!cleanPath) return "Home";

  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length === 0) return "Home";

  const lastSegment = segments[segments.length - 1];

  const pathMap = {
    blog: "Blog",
    blogs: "Blog",
    services: "Services",
    products: "Products",
    industries: "Industries",
    work: "Case Studies",
    contact: "Contact Us",
    "contact-us": "Contact Us",
  };

  if (pathMap[lastSegment]) return pathMap[lastSegment];

  const formatted = lastSegment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (formatted.length > 28) {
    return formatted.slice(0, 26) + "...";
  }
  return formatted;
}

/* ==========================================================================
   LoaderOverlay Component (Self-contained presentation)
   Used by both client route listener and Next.js loading.js
   ========================================================================== */
export function LoaderOverlay({
  destination = "",
  progress = 65,
  isFadingOut = false,
}) {
  const statusHeading = destination
    ? `Redirecting to ${destination}`
    : "Redirecting Page";

  return (
    <div
      className={`page-loader-overlay ${isFadingOut ? "page-loader-hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />
      <div className="page-loader-backdrop-mesh" aria-hidden="true" />

      <div className="page-loader-card">
        {/* Emblem with High-Tech Orbital Rings Around the Logo */}
        <div className="page-loader-emblem" aria-hidden="true">
          <div className="page-loader-halo" />
          <div className="page-loader-ripple" />
          <div className="page-loader-ripple delay" />

          {/* Outer glowing orbital spinning ring with satellite */}
          <svg
            className="page-loader-orbit-outer"
            viewBox="0 0 120 120"
            fill="none"
          >
            <defs>
              <linearGradient
                id="vLoaderOuterGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter
                id="vLoaderGlow"
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
              >
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="rgba(79, 70, 229, 0.14)"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="url(#vLoaderOuterGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="115 210"
            />
            <circle
              cx="60"
              cy="8"
              r="4.5"
              fill="#06b6d4"
              filter="url(#vLoaderGlow)"
            />
          </svg>

          {/* Inner counter-rotating precision tech ring */}
          <svg
            className="page-loader-orbit-inner"
            viewBox="0 0 96 96"
            fill="none"
          >
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="1.8"
              strokeDasharray="6 8"
            />
            <circle cx="48" cy="8" r="3" fill="#a855f7" />
          </svg>

          {/* Centered Floating Logo Core */}
          <div className="page-loader-logo-core">
            <Image
              src="/logo/vision-logo.png"
              alt="Vision Technolabs"
              width={40}
              height={40}
              className="page-loader-logo-img"
              priority
            />
          </div>
        </div>

        {/* Brand Title */}
        <div className="page-loader-brand">
          <span>Vision</span>
          <span className="page-loader-brand-accent">Technolabs</span>
        </div>

        {/* Dynamic Status Pill */}
        <div className="page-loader-status-pill">
          <span className="page-loader-status-dot" aria-hidden="true" />
          <span className="page-loader-status-text">{statusHeading}</span>
          <span className="page-loader-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>

        {/* Shimmer Progress Track */}
        <div className="page-loader-track" aria-hidden="true">
          <div
            className="page-loader-fill"
            style={{ width: `${Math.max(22, Math.min(100, progress))}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Route Change Watcher (Inside Suspense)
   ========================================================================== */
function RouteChangeWatcher({ onRouteSettled }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchStr = searchParams ? searchParams.toString() : "";

  useEffect(() => {
    onRouteSettled(pathname, searchStr);
  }, [pathname, searchStr, onRouteSettled]);

  return null;
}

/* ==========================================================================
   Main Loader Component (Handles global redirection & page loads)
   ========================================================================== */
export default function Loader() {
  const [navigating, setNavigating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [destination, setDestination] = useState("");
  const [progress, setProgress] = useState(0);

  const pendingTimerRef = useRef(null);
  const timerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);
  const navStartTimeRef = useRef(0);
  const currentPathRef = useRef("");
  const isNavigatingRef = useRef(false);

  const clearClickedLoadingIndicators = () => {
    if (typeof document === "undefined") return;
    document.querySelectorAll('a[data-nav-loading="true"]').forEach((el) => {
      el.removeAttribute("data-nav-loading");
    });
  };

  const handleRouteSettled = useCallback(() => {
    // If navigation completed before 300ms, cancel the pending overlay timer immediately
    if (pendingTimerRef.current) {
      clearTimeout(pendingTimerRef.current);
      pendingTimerRef.current = null;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

    if (typeof window !== "undefined") {
      currentPathRef.current = window.location.pathname;
    }

    clearClickedLoadingIndicators();

    // If navigation finished before the 300ms threshold, the overlay was never shown
    if (!isNavigatingRef.current) {
      setProgress(0);
      setDestination("");
      return;
    }

    // Otherwise complete progress bar and fade out cleanly
    setProgress(100);

    const elapsed = Date.now() - navStartTimeRef.current;
    const minDisplayTime = 250;
    const remainingTime = Math.max(0, minDisplayTime - elapsed);

    hideTimerRef.current = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        isNavigatingRef.current = false;
        setNavigating(false);
        setIsFadingOut(false);
        setProgress(0);
        setDestination("");
      }, 260);
    }, remainingTime);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      currentPathRef.current = window.location.pathname;
    }

    // High-performance direct scroll progress bar
    let rafId = null;
    const progressBar = document.getElementById("progress");

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
        if (progressBar) {
          progressBar.style.width = `${pct}%`;
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Global Link Click Interceptor: ignore modified clicks, new tabs, downloads, protocols, hashes, external URLs
    const handleDocumentClick = (e) => {
      if (e.defaultPrevented) return;
      // Ignore middle-click (button 1), right-click (button 2), and modifier keys (Cmd/Ctrl/Shift/Alt)
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest?.("a[href]");
      if (!anchor) return;

      // Ignore target="_blank" or any target other than _self
      const target = anchor.getAttribute("target");
      if (target && target.toLowerCase() !== "_self") return;

      // Ignore downloads
      if (anchor.hasAttribute("download") || anchor.download) return;

      // Ignore non-navigation protocols and internal hash anchors
      const rawHref = (anchor.getAttribute("href") || "").trim();
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:") ||
        rawHref.startsWith("sms:") ||
        anchor.hasAttribute("data-no-loader")
      ) {
        return;
      }

      let targetUrl;
      try {
        targetUrl = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      // Ignore external links and non-http(s) links
      if (targetUrl.origin !== window.location.origin) return;
      if (targetUrl.protocol !== "http:" && targetUrl.protocol !== "https:") return;

      // Ignore same-page hash links or same-location clicks
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = targetUrl.pathname.replace(/\/$/, "");

      if (targetPath === currentPath && targetUrl.search === window.location.search) {
        return;
      }

      // Clear any pending timers
      if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

      clearClickedLoadingIndicators();
      anchor.setAttribute("data-nav-loading", "true");

      const label = resolveDestinationLabel(targetUrl.pathname, anchor);
      setDestination(label);

      // Only show overlay if client-side navigation is still pending after ~300ms
      pendingTimerRef.current = setTimeout(() => {
        navStartTimeRef.current = Date.now();
        isNavigatingRef.current = true;
        setIsFadingOut(false);
        setNavigating(true);
        setProgress(32);

        timerRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 85) return prev;
            return prev + (prev < 60 ? 14 : 4);
          });
        }, 110);

        // Safety fallback timeout
        safetyTimerRef.current = setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            isNavigatingRef.current = false;
            setNavigating(false);
            setIsFadingOut(false);
            setProgress(0);
            clearClickedLoadingIndicators();
          }, 260);
        }, 6000);
      }, 300);
    };

    // Popstate (Browser Back/Forward navigation)
    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/\/$/, "");
      if (currentPath !== currentPathRef.current.replace(/\/$/, "")) {
        if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
        if (timerRef.current) clearInterval(timerRef.current);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

        const label = resolveDestinationLabel(window.location.pathname, null);
        setDestination(label);

        // Only show overlay if navigation is still pending after 300ms
        pendingTimerRef.current = setTimeout(() => {
          navStartTimeRef.current = Date.now();
          isNavigatingRef.current = true;
          setIsFadingOut(false);
          setNavigating(true);
          setProgress(35);
        }, 300);
      }
    };

    document.addEventListener("click", handleDocumentClick, { passive: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <RouteChangeWatcher onRouteSettled={handleRouteSettled} />
      </Suspense>

      {/* Top scroll progress indicator bar */}
      <div
        className="progress"
        id="progress"
        aria-hidden="true"
        style={{ width: "0%" }}
      />

      {/* Top route progress bar */}
      <div
        className={`route-progress-bar ${navigating ? "is-active" : ""}`}
        aria-hidden="true"
        style={{
          width: `${progress}%`,
          opacity: navigating ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <span className="route-progress-glow" />
      </div>

      {/* Fullscreen Branded Redirection Loader Overlay */}
      {navigating && (
        <LoaderOverlay
          destination={destination}
          progress={progress}
          isFadingOut={isFadingOut}
        />
      )}
    </>
  );
}
