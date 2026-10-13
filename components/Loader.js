"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ROUTE_LABELS = {
  "/": "Home",
  "/services": "Services & Capabilities",
  "/services/website-development": "Website Development",
  "/services/mobile-app-development": "Mobile App Development",
  "/services/custom-software-crm": "Custom Software & CRM",
  "/services/ai-automation": "AI & Automation",
  "/services/ecommerce-solutions": "Ecommerce Solutions",
  "/services/meta-google-ads": "Meta & Google Ads",
  "/industries": "Industries",
  "/products": "Products & Platforms",
  "/work": "Case Studies",
  "/blog": "Engineering Blog",
  "/contact": "Contact Us",
};

const GENERIC_LINK_TEXTS = new Set([
  "learn more",
  "read more",
  "explore",
  "view details",
  "view case study",
  "get in touch",
  "contact us",
  "start a project",
  "read article",
  "explore all",
  "see all",
]);

function normalizePath(path = "/") {
  if (!path) return "/";
  let clean = path.split("#")[0].split("?")[0] || "/";
  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }
  if (clean === "/blogs") return "/blog";
  if (clean.startsWith("/blogs/")) return clean.replace("/blogs/", "/blog/");
  if (clean === "/product") return "/products";
  if (clean.startsWith("/product/")) return clean.replace("/product/", "/products/");
  if (clean === "/contact-us") return "/contact";
  return clean;
}

function formatSlug(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => {
      const upper = word.toUpperCase();
      if (["AI", "CRM", "ERP", "IOT", "SAAS", "SEO", "CRO", "PMS", "EPC", "MMY"].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function resolveDestinationLabel(pathname, anchorEl) {
  const normalized = normalizePath(pathname);

  if (ROUTE_LABELS[normalized]) {
    return ROUTE_LABELS[normalized];
  }

  if (anchorEl) {
    const heading = anchorEl.querySelector("h3, h4");
    if (heading && heading.textContent) {
      const hText = heading.textContent.trim();
      if (hText.length > 1 && hText.length <= 44) {
        return hText;
      }
    }

    const rawText = anchorEl.textContent?.replace(/\s+/g, " ").trim() || "";
    if (
      rawText.length > 1 &&
      rawText.length <= 32 &&
      !GENERIC_LINK_TEXTS.has(rawText.toLowerCase()) &&
      !rawText.toLowerCase().includes("vision technolabs")
    ) {
      return rawText;
    }
  }

  const segments = normalized.split("/").filter(Boolean);
  if (segments.length >= 2) {
    return formatSlug(segments[segments.length - 1]);
  }
  if (segments.length === 1) {
    return formatSlug(segments[0]);
  }

  return "Page";
}

function clearClickedLoadingIndicators() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("[data-nav-loading='true']").forEach((el) => {
    el.removeAttribute("data-nav-loading");
  });
}

function RouteChangeWatcher({ onRouteSettled }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchStr = searchParams ? searchParams.toString() : "";

  useEffect(() => {
    onRouteSettled(pathname, searchStr);
  }, [pathname, searchStr, onRouteSettled]);

  return null;
}

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("initial"); // "initial" | "redirect"
  const [destination, setDestination] = useState("");
  const [routeProgress, setRouteProgress] = useState(32);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isFirstMountRef = useRef(true);
  const currentRouteRef = useRef("");
  const redirectStartRef = useRef(0);
  const progressIntervalRef = useRef(null);
  const hideTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const finishLoading = useCallback(
    (delay = 360) => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
        safetyTimerRef.current = null;
      }
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      setRouteProgress(100);

      hideTimerRef.current = setTimeout(() => {
        setLoading(false);
        clearClickedLoadingIndicators();
        setTimeout(() => {
          setRouteProgress(0);
        }, 350);
      }, delay);
    },
    []
  );

  const startRedirectLoader = useCallback(
    (targetPath, label) => {
      clearTimers();
      redirectStartRef.current = Date.now();
      setMode("redirect");
      setDestination(label || "Page");
      setRouteProgress(26);
      setLoading(true);

      progressIntervalRef.current = setInterval(() => {
        setRouteProgress((prev) => {
          if (prev >= 88) return prev;
          const step = prev < 55 ? 11 : prev < 75 ? 5 : 2;
          return Math.min(88, prev + step);
        });
      }, 120);

      // Safety fallback so loader never stays stuck if navigation is cancelled
      safetyTimerRef.current = setTimeout(() => {
        finishLoading(180);
      }, 3600);
    },
    [clearTimers, finishLoading]
  );

  const handleRouteSettled = useCallback(
    (pathname, searchStr) => {
      const normalized = `${normalizePath(pathname)}${searchStr ? `?${searchStr}` : ""}`;

      if (isFirstMountRef.current) {
        isFirstMountRef.current = false;
        currentRouteRef.current = normalized;
        finishLoading(420);
        return;
      }

      if (normalized !== currentRouteRef.current || loading) {
        currentRouteRef.current = normalized;
        const elapsed = Date.now() - (redirectStartRef.current || Date.now());
        const minDisplayMs = 480;
        const remaining = Math.max(150, minDisplayMs - elapsed);
        finishLoading(remaining);
      }
    },
    [finishLoading, loading]
  );

  // Scroll progress bar & Global internal link click interceptor
  useEffect(() => {
    const updateScrollProgress = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight || 1;
      const progress = (el.scrollTop / max) * 100;
      setScrollProgress(progress);
    };

    const handleDocumentClick = (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest?.("a[href]");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      // Ignore mobile header accordion toggle clicks when dropdown is closed
      if (
        typeof window !== "undefined" &&
        window.innerWidth < 1100 &&
        anchor.getAttribute("aria-haspopup") === "true" &&
        anchor.getAttribute("aria-expanded") === "false"
      ) {
        return;
      }

      let targetUrl;
      try {
        targetUrl = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;

      const currentNormalized = normalizePath(window.location.pathname);
      const targetNormalized = normalizePath(targetUrl.pathname);

      // Ignore same-page anchor scrolls or clicking current active route
      if (
        targetNormalized === currentNormalized &&
        targetUrl.search === window.location.search
      ) {
        return;
      }

      clearClickedLoadingIndicators();
      anchor.setAttribute("data-nav-loading", "true");

      const label = resolveDestinationLabel(targetUrl.pathname, anchor);
      startRedirectLoader(targetNormalized, label);
    };

    const handlePopState = () => {
      const targetNormalized = normalizePath(window.location.pathname);
      if (targetNormalized !== currentRouteRef.current.split("?")[0]) {
        const label = resolveDestinationLabel(window.location.pathname, null);
        startRedirectLoader(targetNormalized, label);
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("popstate", handlePopState);
    updateScrollProgress();

    return () => {
      clearTimers();
      window.removeEventListener("scroll", updateScrollProgress);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [clearTimers, startRedirectLoader]);

  const statusHeading =
    mode === "redirect"
      ? `Redirecting to ${destination || "Page"}`
      : "Initializing Experience";

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
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top route redirection progress bar */}
      <div
        className={`route-progress-bar ${loading ? "is-active" : ""}`}
        aria-hidden="true"
        style={{ width: `${routeProgress}%` }}
      >
        <span className="route-progress-glow" />
      </div>

      {/* Brand & Page Redirection Loader Overlay */}
      <div
        className={`page-loader-overlay ${
          mode === "redirect" ? "page-loader-redirect" : ""
        } ${!loading ? "page-loader-hidden" : ""}`}
        role="status"
        aria-live="polite"
        aria-busy={loading}
        aria-hidden={!loading}
      >
        <div className="page-loader-backdrop-mesh" aria-hidden="true" />

        <div className="page-loader-card">
          {/* Multi-layered orbital emblem */}
          <div className="page-loader-emblem" aria-hidden="true">
            <span className="page-loader-halo" />

            <svg
              className="page-loader-orbit-outer"
              viewBox="0 0 120 120"
              fill="none"
            >
              <defs>
                <linearGradient id="loaderOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="55%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="var(--accent)" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="rgba(79, 70, 229, 0.1)"
                strokeWidth="2"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="url(#loaderOrbitGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="110 220"
              />
              <circle cx="60" cy="8" r="4" fill="var(--accent)" />
            </svg>

            <svg
              className="page-loader-orbit-inner"
              viewBox="0 0 96 96"
              fill="none"
            >
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="rgba(6, 182, 212, 0.28)"
                strokeWidth="1.75"
                strokeDasharray="6 8"
              />
            </svg>

            <div className="page-loader-logo-core">
              <svg width="40" height="40" aria-hidden="true">
                <use href="#i-logo" />
              </svg>
            </div>
          </div>

          {/* Brand Wordmark */}
          <div className="page-loader-brand">
            Vision <span>Technolabs</span>
          </div>

          {/* Dynamic Redirection / Loading Status Pill */}
          <div className="page-loader-status-pill">
            <span className="page-loader-status-dot" aria-hidden="true" />
            <span className="page-loader-status-text">{statusHeading}</span>
            <span className="page-loader-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>

          {/* Smooth Progress Bar Track */}
          <div className="page-loader-track" aria-hidden="true">
            <div
              className="page-loader-fill"
              style={{ width: `${Math.max(18, routeProgress)}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
