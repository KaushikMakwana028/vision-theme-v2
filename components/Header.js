"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";

const headerCss = `
/* ==========================================================
   Header styles — Precision Metizsoft-Style Architecture
   ========================================================== */

.site-header {
  --hd-h: 86px;
  --hd-primary: #4f46e5;
  --hd-primary-soft: rgba(79, 70, 229, 0.08);
  --hd-text: #0f172a;
  --hd-muted: #64748b;
  --hd-border: rgba(15, 23, 42, 0.07);
  --hd-navy: #1e1b4b;
  --hd-navy-hover: #2b2575;

  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  isolation: isolate;
  transition: height 0.25s ease;
}

/* Glass backdrop */
.site-header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
  border-bottom: 1px solid var(--hd-border);
  transition: box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.site-header.scrolled {
  --hd-h: 76px;
}

.site-header.scrolled::before {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.07);
  border-bottom-color: rgba(15, 23, 42, 0.09);
}

.site-header .bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 1.5vw, 28px);
  height: var(--hd-h);
  transition: height 0.25s ease;
  flex-wrap: nowrap;
}

/* ---------- Logo ---------- */
.site-header .logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  flex: none;
  flex-shrink: 0;
}

.site-header .logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.site-header .logo:hover .logo-img {
  transform: scale(1.04);
}

.site-header .logo-brand-text {
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

/* ---------- Desktop Navigation ---------- */
.site-header .nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
}

.site-header .nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 1.8vw, 36px);
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: nowrap;
}

.site-header .nav-list > li {
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  height: var(--hd-h);
  flex-shrink: 0;
}

/* Nav Item Link (Increased font size & clean typography matching reference) */
.site-header .trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: var(--hd-h);
  padding: 0 4px;
  color: #111827 !important;
  font-family: var(--font);
  font-size: clamp(1rem, 0.22vw + 0.92rem, 1.12rem) !important;
  font-weight: 600 !important;   /* crisp, clean semi-bold matching Metizsoft reference */
  letter-spacing: -0.015em;
  line-height: 1;
  text-decoration: none !important;
  white-space: nowrap !important;
  background: transparent !important;
  cursor: pointer;
  transition: color 0.18s ease;
}

.site-header .trigger:hover,
.site-header .has-menu:hover > .trigger,
.site-header .has-menu.open > .trigger,
.site-header .trigger.active {
  color: #4f46e5 !important;
  background: transparent !important;
}

/* Underline completely removed on all states (active, hover, open) */
.site-header .trigger::after,
.site-header .trigger.active::after,
.site-header .trigger:hover::after,
.site-header .has-menu.open > .trigger::after {
  display: none !important;
  content: none !important;
}

.site-header .trigger-label {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}

.site-header .lead-ic {
  width: 16px;
  height: 16px;
  flex: none;
  color: var(--hd-primary);
}

/* Hide chevron on desktop navigation to match reference image cleanly */
.site-header .chev,
.site-header .trigger .chev {
  display: none !important;
}

.site-header .arrow-ic {
  width: 14px;
  height: 14px;
  flex: none;
}

/* ---------- Panels (Desktop Dropdowns) ---------- */
.site-header .panel {
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 20;
  padding-top: 10px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

.site-header .has-menu.open > .panel,
.site-header .has-menu:hover > .panel {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.site-header .panel .box {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 320px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid var(--hd-border);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.14);
}

.site-header .panel .box > a,
.site-header .panel .col a {
  display: block;
  padding: 10px 14px;
  border-radius: 10px;
  color: var(--hd-text);
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.35;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}

.site-header .panel .box > a:hover,
.site-header .panel .col a:hover,
.site-header .panel .box > a.is-active,
.site-header .panel .col a.is-active {
  background: var(--hd-primary-soft);
  color: var(--hd-primary);
}

.site-header .dropdown-bottom {
  margin-top: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--hd-border);
}

.site-header .dropdown-bottom-btn,
.site-header .mega-bottom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--hd-primary-soft);
  color: var(--hd-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.site-header .dropdown-bottom-btn {
  display: flex;
  width: 100%;
}

.site-header .dropdown-bottom-btn:hover,
.site-header .mega-bottom-btn:hover {
  background: rgba(79, 70, 229, 0.15);
}

/* ---------- Mega Panel (Desktop) ---------- */
.site-header .mega-li {
  position: static !important;
}

.site-header .panel.mega {
  top: 100%;
  left: 50%;
  width: min(1080px, calc(100vw - 48px));
  padding-top: 0;
}

.site-header .panel.mega::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -16px;
  height: 16px;
}

.site-header .panel.mega .box {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px 28px;
  padding: 26px 32px 22px;
  min-width: 0;
}

.site-header .panel.mega .col h3 {
  margin: 0 0 10px;
  padding: 0 14px;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--hd-muted);
  white-space: nowrap;
  min-height: 20px;
  display: flex;
  align-items: center;
}

.site-header .mega-bottom {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--hd-border);
}

.site-header .mega-bottom-note {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--hd-muted);
  font-size: 0.86rem;
}

.site-header .mega-pulse-dot {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);
}

/* ---------- Right-hand Actions & CTA ---------- */
.site-header .actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: none;
  position: relative;
  z-index: 3;
}

/* Brand Primary Color "Get in Touch" Button */
.site-header .hdr-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%) !important;
  color: #ffffff !important;
  font-size: 0.98rem !important;
  font-weight: 600 !important;
  height: 46px !important;
  padding: 0 clamp(18px, 1.4vw, 26px) !important;
  border-radius: 8px !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3) !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.22s ease !important;
}

.site-header .hdr-cta:hover {
  background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%) !important;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.45) !important;
  transform: translateY(-1.5px) !important;
  color: #ffffff !important;
}

.site-header .hdr-cta:active {
  transform: translateY(0) !important;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3) !important;
}

@media (min-width: 1024px) {
  .site-header .nav-list > li.nav-cta-m,
  .site-header .nav-cta-m,
  .site-header .burger,
  .site-header .overlay {
    display: none !important;
  }
}

/* ==========================================================
   Tablet Landscape (1024px - 1240px)
   Balanced spacing, proportional font, zero crowding
   ========================================================== */
@media (min-width: 1024px) and (max-width: 1240px) {
  .site-header {
    --hd-h: 76px;
  }

  .site-header .bar {
    gap: 12px;
  }

  .site-header .logo {
    gap: 8px;
  }

  .site-header .logo-img {
    width: 34px;
    height: 34px;
  }

  .site-header .logo-brand-text {
    font-size: 1.25rem;
  }

  .site-header .nav-list {
    justify-content: center;
    gap: clamp(10px, 1.4vw, 20px);
  }

  .site-header .trigger {
    font-size: 0.95rem !important;
    padding: 0 2px;
  }

  .site-header .hdr-cta {
    height: 42px !important;
    padding: 0 18px !important;
    font-size: 0.9rem !important;
  }
}

/* Clean reset for overrides */
.site-header .panel .col {
  background: none !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0;
}

.site-header .panel .col::before,
.site-header .panel .col::after,
.site-header .panel .col h3::before,
.site-header .panel .col h3::after,
.site-header .panel .col a::before,
.site-header .panel .col a::after,
.site-header .panel .box > a::before,
.site-header .panel .box > a::after {
  content: none !important;
  display: none !important;
}

.site-header .panel .col h3 {
  border: 0 !important;
  background: none !important;
}

/* ==========================================================
   Mobile / Tablet Drawer (< 1024px)
   ========================================================== */
@media (max-width: 1023px) {
  .site-header {
    --hd-h: 70px;
    background: #ffffff !important;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.06) !important;
  }

  .site-header::before {
    background: #ffffff !important;
  }

  .site-header .bar {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    height: var(--hd-h) !important;
    gap: 12px !important;
  }

  .site-header .logo {
    flex: 1 1 auto;
    min-width: 0;
  }

  .site-header .logo-brand-text {
    font-size: clamp(1.15rem, 4.2vw, 1.35rem) !important;
  }

  .site-header .logo-img {
    width: 36px !important;
    height: 36px !important;
  }

  .site-header .actions {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    flex: none !important;
    z-index: 100 !important;
  }

  /* Tablet portrait (640px-1023px) shows primary CTA + burger */
  @media (min-width: 640px) {
    .site-header .actions .hdr-cta {
      display: inline-flex !important;
      height: 42px !important;
      padding: 0 18px !important;
      font-size: 0.9rem !important;
    }
  }

  /* Mobile phones (<640px) hide top bar CTA */
  @media (max-width: 639px) {
    .site-header .actions .hdr-cta {
      display: none !important;
    }
  }

  /* Mobile Burger Button — prominent, stylish, always visible */
  .site-header .burger {
    display: inline-flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 5px !important;
    width: 44px !important;
    height: 44px !important;
    padding: 0 !important;
    border: 1px solid rgba(15, 23, 42, 0.12) !important;
    border-radius: 12px !important;
    background: #f8fafc !important;
    cursor: pointer !important;
    position: relative !important;
    z-index: 100 !important;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06) !important;
    transition: background 0.2s ease, border-color 0.2s ease !important;
  }

  .site-header .burger:hover,
  .site-header .burger:active {
    background: #f1f5f9 !important;
  }

  .site-header .burger span {
    display: block !important;
    width: 22px !important;
    height: 2.2px !important;
    border-radius: 2px !important;
    background: #0f172a !important;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease !important;
  }

  .site-header.menu-open .burger {
    background: #ffffff !important;
    border-color: rgba(79, 70, 229, 0.3) !important;
  }

  .site-header.menu-open .burger span:nth-child(1) {
    transform: translateY(7.2px) rotate(45deg) !important;
  }
  .site-header.menu-open .burger span:nth-child(2) {
    opacity: 0 !important;
    transform: scaleX(0) !important;
  }
  .site-header.menu-open .burger span:nth-child(3) {
    transform: translateY(-7.2px) rotate(-45deg) !important;
  }

  /* Frosted Backdrop Overlay */
  .site-header .overlay {
    display: block !important;
    position: fixed !important;
    inset: 0 !important;
    z-index: 90 !important;
    background: rgba(15, 23, 42, 0.5) !important;
    backdrop-filter: blur(4px) !important;
    -webkit-backdrop-filter: blur(4px) !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: opacity 0.25s ease, visibility 0.25s ease !important;
  }

  .site-header.menu-open .overlay {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  /* Slide-in Navigation Drawer */
  .site-header .nav {
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    z-index: 95 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;      /* fix: items were centered & shrunk */
    justify-content: flex-start !important;
    flex: none !important;
    width: min(86vw, 340px) !important;
    height: 100vh !important;
    height: 100dvh !important;
    padding: 84px 16px 28px !important;
    overflow-x: hidden !important;        /* fix: no horizontal scrollbar */
    overflow-y: auto !important;
    overscroll-behavior: contain !important;
    -webkit-overflow-scrolling: touch;
    background: #ffffff !important;
    border-radius: 24px 0 0 24px !important;
    box-shadow: -18px 0 50px rgba(15, 23, 42, 0.22) !important;
    transform: translateX(100%) !important;
    visibility: hidden !important;
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.32s ease !important;
    scrollbar-width: thin;
  }

  .site-header.menu-open .nav {
    transform: translateX(0) !important;
    visibility: visible !important;
  }

  .site-header .nav-list {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    gap: 4px !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }

  .site-header .nav-list > li {
    display: block !important;
    width: 100% !important;
    height: auto !important;
    border-bottom: 0 !important;
  }

  /* Top-level rows as soft rounded pills */
  .site-header .trigger {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    height: auto !important;
    padding: 14px 14px !important;
    border-radius: 12px !important;
    font-size: 1.02rem !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    color: #0f172a !important;
    background: transparent !important;
    transition: background 0.18s ease, color 0.18s ease !important;
  }

  .site-header .trigger:hover,
  .site-header .trigger:active,
  .site-header .has-menu:hover > .trigger {
    color: #4f46e5 !important;
    background: #f5f6ff !important;
  }

  /* Active page / opened accordion */
  .site-header .trigger.active,
  .site-header .has-menu.open > .trigger {
    color: #4f46e5 !important;
    background: rgba(79, 70, 229, 0.09) !important;
  }

  .site-header .chev,
  .site-header .trigger .chev {
    display: inline-block !important;
    flex: none !important;
    width: 18px !important;
    height: 18px !important;
    color: #94a3b8 !important;
    margin-left: auto !important;
    transition: transform 0.25s ease, color 0.2s ease !important;
  }

  .site-header .has-menu.open > .trigger .chev {
    transform: rotate(180deg) !important;
    color: #4f46e5 !important;
  }

  /* Accordion Submenus */
  .site-header .panel,
  .site-header .panel.mega {
    position: static !important;
    display: none !important;
    width: auto !important;
    padding: 0 !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: none !important;
    transition: none !important;
  }

  .site-header .panel.mega::before {
    display: none !important;
  }

  .site-header .has-menu.open > .panel {
    display: block !important;
  }

  .site-header .panel .box,
  .site-header .panel.mega .box {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
    min-width: 0 !important;
    background: #f8fafc !important;
    border-radius: 14px !important;
    box-shadow: none !important;
    margin: 6px 0 10px !important;
    padding: 8px !important;
    border: 1px solid rgba(15, 23, 42, 0.06) !important;
  }

  .site-header .panel .box > a,
  .site-header .panel .col a {
    display: block !important;
    padding: 10px 12px !important;
    font-size: 0.92rem !important;
    font-weight: 500 !important;
    line-height: 1.35 !important;
    color: #334155 !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    white-space: normal !important;       /* fix: long labels no longer overflow */
    word-break: break-word !important;
    transition: background 0.15s ease, color 0.15s ease !important;
  }

  .site-header .panel .box > a:hover,
  .site-header .panel .box > a:active,
  .site-header .panel .col a:hover,
  .site-header .panel .col a:active {
    background: #eef2ff !important;
    color: #4f46e5 !important;
  }

  .site-header .panel .box > a.is-active,
  .site-header .panel .col a.is-active {
    background: #e7eaff !important;
    color: #4f46e5 !important;
    font-weight: 600 !important;
  }

  .site-header .panel.mega .col h3 {
    margin: 14px 0 6px !important;
    padding: 0 12px !important;
    font-size: 0.7rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: #4f46e5 !important;
  }

  .site-header .panel.mega .col:first-child h3 {
    margin-top: 4px !important;
  }

  .site-header .mega-bottom {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    margin-top: 8px !important;
    padding-top: 10px !important;
    border-top: 1px solid rgba(15, 23, 42, 0.07) !important;
  }

  .site-header .mega-bottom-note {
    display: none !important;
  }

  .site-header .mega-bottom-btn,
  .site-header .dropdown-bottom-btn {
    display: flex !important;
    width: 100% !important;
    padding: 12px 14px !important;
    border-radius: 10px !important;
    font-size: 0.9rem !important;
  }

  /* Drawer CTA Button */
  .site-header .nav-list > li.nav-cta-m,
  .site-header .nav-cta-m {
    display: block !important;
    margin-top: 20px !important;
    padding-top: 20px !important;
    border-top: 1px solid rgba(15, 23, 42, 0.07) !important;
    border-bottom: 0 !important;
  }

  .site-header .nav-cta-m .hdr-cta {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: 52px !important;
    font-size: 1.02rem !important;
    border-radius: 12px !important;
  }
}
`;

// "AI & Innovation" is commented out of the menu as requested.
// To show it again, remove it from this list.
const HIDDEN_NAV = ["AI & Innovation"];

const HOME_ITEM = { id: "home", type: "link", title: "Home", href: "/" };

const navItems = [
  HOME_ITEM,
  ...navigationData.headerNav.filter(
    (item) => item.id !== "home" && !HIDDEN_NAV.includes(item.title),
  ),
];

const DESKTOP_MIN = 1024;
const isDesktop = () =>
  typeof window !== "undefined" && window.innerWidth >= DESKTOP_MIN;

/* Internal links use next/link, everything else a plain anchor */
function SmartLink({ href, children, ...props }) {
  return href?.startsWith("/") ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

function TriggerLabel({ icon, title }) {
  return (
    <span className="trigger-label">
      {icon && (
        <svg className="i lead-ic" aria-hidden="true">
          <use href={`#${icon}`} />
        </svg>
      )}
      <span>{title}</span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="i arrow-ic"
      aria-hidden="true"
      width="13"
      height="13"
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
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Is this href the page we are on? ("/" only matches the home page exactly)
  const isPathActive = (href) => {
    if (!href || !href.startsWith("/")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // A menu item is active if its own link or any of its sub-links match
  const isItemActive = (item) =>
    isPathActive(item.href) ||
    (item.columns || []).some((c) =>
      c.links.some((l) => isPathActive(l.href)),
    ) ||
    (item.items || []).some((l) => isPathActive(l.href));

  // Sticky header shadow (RAF throttled)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 8;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock + Escape key
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Reset state when resizing across the desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (isDesktop()) setMobileMenuOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  // Desktop: navigate. Mobile: tap toggles the accordion.
  const handleTriggerClick = (e, id) => {
    if (!isDesktop()) {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === id ? null : id));
    } else {
      closeAll();
    }
  };

  const hoverProps = (id) => ({
    onMouseEnter: () => isDesktop() && setOpenDropdown(id),
    onMouseLeave: () => isDesktop() && setOpenDropdown(null),
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: headerCss }} />
      <header
        ref={headerRef}
        className={`site-header ${isScrolled ? "scrolled" : ""} ${
          mobileMenuOpen ? "menu-open" : ""
        }`}
        id="header"
      >
        <div className="container bar">
          {/* Logo (Vision Technolabs Logo + Brand Text Preserved) */}
          <Link
            href="/"
            className="logo"
            aria-label="Vision Technolabs home"
            onClick={closeAll}
          >
            <Image
              src="/logo/vision-logo.png"
              alt="Vision Technolabs Logo"
              width={40}
              height={40}
              className="logo-img"
              priority
            />
            <div className="logo-brand-text">
              <span className="logo-brand-vision">Vision</span>
              <span className="logo-brand-tech">Technolabs</span>
            </div>
          </Link>

          {/* Center Navigation Bar */}
          <nav className="nav" id="nav" aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => {
                /* ---------- Plain link ---------- */
                if (item.type === "link") {
                  return (
                    <li key={item.id}>
                      <SmartLink
                        className={`trigger ${isItemActive(item) ? "active" : ""}`}
                        aria-current={isItemActive(item) ? "page" : undefined}
                        href={item.href}
                        onClick={closeAll}
                      >
                        <TriggerLabel icon={item.leadIcon} title={item.title} />
                      </SmartLink>
                    </li>
                  );
                }

                /* ---------- Mega menu / standard dropdown ---------- */
                const isMega = item.type === "mega";
                const isOpen = openDropdown === item.id;
                const bottomHref =
                  item.bottomAction?.href ||
                  item.megaStrip?.href ||
                  "/services";

                return (
                  <li
                    key={item.id}
                    className={`has-menu ${isMega ? "mega-li" : ""} ${
                      isOpen ? "open" : ""
                    } ${isItemActive(item) ? "active" : ""}`}
                    {...hoverProps(item.id)}
                  >
                    <Link
                      className={`trigger ${isItemActive(item) ? "active" : ""}`}
                      href={item.href || (isMega ? "/services" : "#")}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`m-${item.id}`}
                      onClick={(e) => handleTriggerClick(e, item.id)}
                    >
                      <TriggerLabel icon={item.leadIcon} title={item.title} />
                      <svg
                        className="i chev"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>

                    <div
                      className={`panel ${isMega ? "mega" : ""}`}
                      id={`m-${item.id}`}
                    >
                      <div className="box">
                        {isMega ? (
                          <>
                            {item.columns.map((col, idx) => (
                              <div className="col" key={idx}>
                                <h3>{col.title}</h3>
                                {col.links.map((link, lIdx) => (
                                  <SmartLink
                                    key={lIdx}
                                    href={link.href}
                                    className={
                                      isPathActive(link.href)
                                        ? "is-active"
                                        : undefined
                                    }
                                    onClick={closeAll}
                                  >
                                    {link.label}
                                  </SmartLink>
                                ))}
                              </div>
                            ))}

                            {(item.bottomAction || item.megaStrip) && (
                              <div className="mega-bottom">
                                <div className="mega-bottom-note">
                                  <span className="mega-pulse-dot" />
                                  <span>
                                    {item.id === "services"
                                      ? "Production-ready engineering & fixed sprints"
                                      : "Proprietary SaaS & mobile field platforms built by Vision Technolabs"}
                                  </span>
                                </div>
                                <Link
                                  href={bottomHref}
                                  onClick={closeAll}
                                  className="mega-bottom-btn"
                                >
                                  <span>
                                    {item.bottomAction?.label ||
                                      "Explore All Services"}
                                  </span>
                                  <ArrowIcon />
                                </Link>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            {item.items.map((sub, sIdx) => (
                              <SmartLink
                                key={sIdx}
                                href={sub.href}
                                className={
                                  isPathActive(sub.href)
                                    ? "is-active"
                                    : undefined
                                }
                                onClick={closeAll}
                              >
                                {sub.label}
                              </SmartLink>
                            ))}

                            {item.bottomAction && (
                              <div className="dropdown-bottom">
                                <Link
                                  href={item.bottomAction.href}
                                  onClick={closeAll}
                                  className="dropdown-bottom-btn"
                                >
                                  <span>{item.bottomAction.label}</span>
                                  <ArrowIcon />
                                </Link>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}

              {/* Mobile Drawer "Get in Touch" Button */}
              <li className="nav-cta-m">
                <Link className="hdr-cta" href="/contact" onClick={closeAll}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Action: Metizsoft-Style "Get in Touch" Button + Mobile Burger */}
          <div className="actions">
            <Link className="hdr-cta" href="/contact">
              Get in Touch
            </Link>
            <button
              className="burger"
              id="burger"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="nav"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className="overlay" id="overlay" onClick={closeAll} />
      </header>
    </>
  );
}
