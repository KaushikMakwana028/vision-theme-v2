"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudiesData } from "@/data/caseStudies";

/* =========================================================
   Page styles (scoped under .svp) — matches serviceDetailPage.js
   ========================================================= */
const styles = `
.svp { overflow-x: clip; }
.svp section[id] { scroll-margin-top: calc(var(--header-h) + 32px); }
.cs-showcase-sec,
#project-overview,
#system-modules,
#deliverables,
#business-impact,
#client-review,
#related-work,
.svp-cta-sec {
  content-visibility: auto;
  contain-intrinsic-size: 1px 650px;
}

/* ---------- Scroll progress ---------- */
.svp-progress {
  position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 1000;
  pointer-events: none;
}
.svp-progress span {
  display: block; height: 100%; background: var(--grad-warm);
  transform-origin: left; transform: scaleX(0);
}

/* ---------- Reveal on scroll ---------- */
.svp .rv { opacity: 0; }
.svp .rv.rv-in { opacity: 1; animation: svp-in .8s var(--ease) var(--rv-delay, 0ms) backwards; }
.svp .rv.rv-in.svp-cta { animation: svp-in .8s var(--ease) backwards; }

/* ---------- Redirection bar / Breadcrumbs ---------- */
.breadcrumbs-bar {
  display: flex; width: 100%; margin-bottom: 0.45rem;
}
.svp .breadcrumbs {
  display: inline-flex; align-items: center; flex-wrap: wrap; gap: .45rem;
  padding: .28rem .85rem; border-radius: 999px;
  background: rgba(255, 255, 255, .6);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  border: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 1px 2px rgba(11, 16, 32, .03);
  font-size: .81rem; line-height: 1.25; margin-bottom: 0;
  width: fit-content;
}
.svp .breadcrumbs a {
  display: inline-flex; align-items: center; gap: .35rem;
  color: var(--muted); font-weight: 500; text-decoration: none;
  transition: color var(--t) var(--ease);
}
.svp .breadcrumbs a:hover {
  color: var(--primary); transform: none;
}
.svp .breadcrumbs .bc-icon {
  width: 13px; height: 13px; flex-shrink: 0; color: var(--muted);
  transition: color var(--t) var(--ease);
}
.svp .breadcrumbs a:hover .bc-icon { transform: none; color: var(--primary); }
.svp .breadcrumbs .sep {
  color: #94a3b8; font-size: .8rem; font-weight: 500;
  padding: 0 .15rem; user-select: none;
}
.svp .breadcrumbs .current {
  color: var(--ink); font-weight: 600; letter-spacing: .01em;
}

/* ---------- Shared bits ---------- */
.svp .eyebrow {
  display: inline-flex; align-items: center; gap: .55rem;
  padding: .4rem .95rem; border-radius: 999px;
  background: rgba(79, 70, 229, .08); color: var(--primary);
  font-weight: 600; font-size: .85rem; letter-spacing: .01em;
}
.svp .eyebrow::before {
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent2);
  box-shadow: 0 0 0 0 rgba(251, 146, 60, .6);
  animation: svp-ping 2s infinite;
}
.svp .sec-head { text-align: center; max-width: 780px; margin: 0 auto 2.75rem; }
.svp .sec-head h2 { margin: 1rem 0 .8rem; line-height: 1.15; color: var(--ink); }
.svp .sec-head p { color: var(--muted); margin: 0; }
.svp .sec.alt { background: var(--surface); }

.svp .ico {
  width: 54px; height: 54px; flex-shrink: 0; display: inline-grid; place-items: center;
  border-radius: 16px; color: var(--primary);
  background: linear-gradient(135deg, rgba(79, 70, 229, .12), rgba(6, 182, 212, .14));
  transition: transform .45s var(--ease), background .3s, color .3s, box-shadow .3s;
}
.svp .ico .i { width: 26px; height: 26px; }

.svp .btn { transition: transform var(--t) var(--ease), box-shadow var(--t) var(--ease); }
.svp .btn:hover { transform: translateY(-2px); }
.svp .btn-primary { position: relative; overflow: hidden; }
.svp .btn-primary::after {
  content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .45), transparent);
  transform: skewX(-20deg); animation: svp-shine 3.8s ease-in-out 1.5s infinite;
}
.svp a:focus-visible, .svp button:focus-visible {
  outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 10px;
}

/* ---------- Hero layout (two-column) ---------- */
.svp .svp-hero .container.hero-wrap {
  display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
  gap: clamp(2rem, 4vw, 4rem); align-items: center;
}
.svp .svp-hero .container.hero-wrap > * { min-width: 0; }
.svp-hero-wrap { width: 100%; }
@media (max-width: 1000px) {
  .svp .svp-hero .container.hero-wrap { grid-template-columns: minmax(0, 1fr); gap: 2.25rem; }
}

/* ---------- Hero ---------- */
.svp-hero {
  position: relative;
  overflow: hidden;
  padding-top: 1.5rem;
  padding-bottom: 2.75rem;
}
.svp-hero .container { position: relative; z-index: 2; }
.svp-dots {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(79, 70, 229, .22) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
  mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
}
.svp-orb { position: absolute; border-radius: 50%; filter: blur(70px); pointer-events: none; z-index: 0; transform: translateZ(0); }
.svp-orb-a { width: 380px; height: 380px; top: -110px; right: 6%; background: var(--primary); opacity: .22; }
.svp-orb-b { width: 300px; height: 300px; bottom: -90px; left: 2%; background: var(--accent); opacity: .2; }
.svp-orb-c { width: 220px; height: 220px; top: 38%; left: 46%; background: var(--accent2); opacity: .16; }

.svp-hero-copy > * { animation: svp-in .85s var(--ease) backwards; }
.svp-hero-copy > :nth-child(1) { animation-delay: .05s; }
.svp-hero-copy > :nth-child(2) { animation-delay: .15s; }
.svp-hero-copy > :nth-child(3) { animation-delay: .28s; }
.svp-hero-copy > :nth-child(4) { animation-delay: .42s; }
.svp-hero-copy > :nth-child(5) { animation-delay: .56s; }

.svp-hero h1 {
  font-size: clamp(1.75rem, 4.4vw, 3rem);
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin: 0.85rem 0 1rem;
  color: var(--ink);
  word-break: break-word;
}
.svp-hero h1 em {
  font-family: var(--serif); font-style: italic;
  background: var(--grad-warm); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: svp-grad 6s linear infinite;
}
.svp-hero .lead {
  font-size: clamp(0.96rem, 1.8vw, 1.15rem);
  line-height: 1.65;
  color: var(--muted);
  margin-bottom: 1.4rem;
}
.eyebrow-hero {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .35rem .85rem;
  border-radius: 999px;
  background: rgba(79, 70, 229, .08);
  color: var(--primary);
  font-size: .82rem;
  font-weight: 600;
  max-width: 100%;
}

/* Meta pill row */
.cs-meta-row {
  display: flex; flex-wrap: wrap; gap: .75rem; margin: 1.25rem 0 1.75rem;
}
.cs-meta-pill {
  display: inline-flex; align-items: center; gap: .45rem; padding: .42rem .9rem;
  border-radius: 999px; font-size: .83rem; font-weight: 600;
  background: var(--surface); color: var(--ink); border: 1px solid var(--line);
}
.cs-meta-pill span { color: var(--muted); font-weight: 500; }

.cs-meta-link {
  background: rgba(240, 253, 244, 0.95);
  border-color: rgba(16, 185, 129, 0.4);
  color: #065f46;
  text-decoration: none;
  cursor: pointer;
  transition: all .25s var(--ease);
}
.cs-meta-link span { color: #047857; font-weight: 600; }
.cs-meta-link strong { color: #065f46; font-weight: 700; }
.cs-meta-link:hover {
  background: #ecfdf5;
  border-color: #10b981;
  color: #047857;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.18);
}
.cs-meta-live-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.7);
  animation: svp-ping 2s infinite;
}
.cs-meta-arrow {
  width: 13px; height: 13px; color: #10b981;
  transition: transform .2s var(--ease);
}
.cs-meta-link:hover .cs-meta-arrow {
  transform: translate(2px, -2px);
}

/* ---------- Secondary & Live Website Buttons ---------- */
.btn-secondary {
  background: #ffffff;
  border: 1px solid var(--line);
  color: var(--ink);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}
.btn-secondary:hover {
  background: var(--surface);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.12);
}

.btn-live {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  padding: .85rem 1.6rem;
  border-radius: 999px;
  background: #ffffff;
  color: #0f172a;
  border: 1.5px solid rgba(16, 185, 129, 0.45);
  font-weight: 600;
  font-size: .95rem;
  letter-spacing: -.01em;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.14), 0 1px 3px rgba(15, 23, 42, 0.05);
  transition: all .3s cubic-bezier(0.22, 0.61, 0.36, 1);
  overflow: hidden;
}
.btn-live::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.08));
  opacity: 0;
  transition: opacity .3s var(--ease);
}
.btn-live:hover {
  background: #ffffff;
  border-color: #10b981;
  color: #047857;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(16, 185, 129, 0.28), 0 2px 8px rgba(16, 185, 129, 0.12);
}
.btn-live:hover::before { opacity: 1; }
.btn-live:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15); }

.live-pulse-badge {
  position: relative;
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
}
.live-dot-ping {
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.55);
  animation: svp-ping 1.8s infinite;
}
.live-btn-text { position: relative; z-index: 1; }
.live-btn-icon {
  width: 15px;
  height: 15px;
  color: #10b981;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: transform .25s var(--ease), color .25s;
}
.btn-live:hover .live-btn-icon {
  transform: translate(2px, -2px);
  color: #059669;
}

/* Hero card: dark glass, 3D tilt */
.svp-hero-wrap { position: relative; }
.svp-hero-card {
  position: relative; color: #fff; overflow: hidden;
  background: linear-gradient(145deg, var(--dark) 0%, #1b1a4b 55%, var(--primary-600) 100%);
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: calc(var(--radius) + 6px);
  padding: 2rem; box-shadow: var(--shadow-lg);
  transform: perspective(1100px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform .25s var(--ease);
  animation: svp-in-scale 1s var(--ease) .35s backwards;
}
.svp-hero-card h3 { color: #fff; margin: 1rem 0 .6rem; }
.svp-hero-card p { color: rgba(255, 255, 255, .78); margin: 0; }
.svp-hero-card .btag {
  display: inline-block; padding: .3rem .75rem; border-radius: 999px; font-size: .8rem; font-weight: 600;
  background: rgba(255, 255, 255, .12); color: #fff;
}
.svp-hero-card .bcard-top { display: flex; align-items: center; justify-content: space-between; }
.svp-hero-card .blink {
  width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%;
  background: var(--accent2); color: #fff; transition: transform .35s var(--ease);
}
.svp-hero-card:hover .blink { transform: rotate(-45deg) scale(1.1); }
.svp-hero-card .agent-live {
  display: inline-flex; align-items: center; gap: .5rem; margin-top: 1.25rem;
  font-size: .85rem; font-weight: 600; color: #a5f3fc;
}
.svp-hero-card .agent-live i {
  width: 9px; height: 9px; border-radius: 50%; background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, .7); animation: svp-ping-g 1.8s infinite;
}
.svp-hero-card::before {
  content: ""; position: absolute; width: 260px; height: 260px; inset: -90px -80px auto auto; border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, .45), transparent 65%);
  pointer-events: none;
}
.svp-hero-card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: inherit;
  background: linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, .08) 50%, transparent 65%);
}
.svp-hero-card > * { position: relative; z-index: 1; }
.svp-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 1.75rem;
  padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, .14);
}
.svp-stats > div { min-width: 0; }
.svp-stats strong { display: block; font-size: 1.6rem; font-weight: 800; color: #fff; font-variant-numeric: tabular-nums; }
.svp-stats span { font-size: .8rem; color: rgba(255, 255, 255, .68); }

.svp-chip {
  position: absolute; z-index: 3; display: inline-flex; align-items: center; gap: .5rem;
  padding: .55rem .95rem; border-radius: 999px; background: #fff; color: var(--ink);
  font-size: .85rem; font-weight: 600; box-shadow: var(--shadow-lg); border: 1px solid var(--line);
}
.svp-chip b { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
.svp-chip-a { top: -20px; right: 84px; }
.svp-chip-b { bottom: -20px; left: 44px; }
.svp-chip-b b { background: var(--accent2); }

/* ---------- Tech marquee ---------- */
.svp-marquee { padding: 1.4rem 0; border-block: 1px solid var(--line); background: var(--bg); overflow: hidden; }
.svp-marquee-track {
  display: flex; width: max-content; animation: svp-marq 38s linear infinite;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.svp-marquee:hover .svp-marquee-track { animation-play-state: paused; }
.svp-marquee-group { display: flex; gap: .75rem; padding-right: .75rem; }
.svp-marquee-group span {
  white-space: nowrap; padding: .5rem 1.1rem; border-radius: 999px; font-weight: 600; font-size: .9rem;
  color: var(--primary); background: var(--surface); border: 1px solid var(--line);
  transition: background .25s, color .25s, transform .25s var(--ease);
}
.svp-marquee-group span:hover { background: var(--primary); color: #fff; transform: translateY(-2px); }

/* ---------- Grids ---------- */
.svp .cols { display: grid; gap: 1.5rem; }
.svp .cols.c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.svp .cols.c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.svp .cols.c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.svp .card {
  background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 1.75rem; box-shadow: var(--shadow);
}
.svp .card.flush { padding: 0; }

/* ---------- Comparative Challenge & Solution Cards ---------- */
.cs-card {
  position: relative; display: flex; flex-direction: column; overflow: hidden;
  border: 1px solid var(--line); border-radius: var(--radius); padding: 2.2rem;
  background: var(--bg); transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.cs-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.cs-card-badge {
  display: inline-block; padding: .35rem .85rem; border-radius: 999px; font-size: .8rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .04em; margin-bottom: 1.25rem; align-self: flex-start;
}
.cs-card.challenge .cs-card-badge { background: rgba(239, 68, 68, .1); color: #ef4444; }
.cs-card.solution .cs-card-badge { background: rgba(16, 185, 129, .1); color: #10b981; }
.cs-card h3 { margin: 0 0 1rem; color: var(--ink); font-size: 1.4rem; }
.cs-card p { margin: 0; color: var(--muted); line-height: 1.75; font-size: 1.02rem; }

/* ---------- Deliverables list ---------- */
.cs-deliv-card {
  display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.5rem;
  background: var(--bg); border: 1px solid var(--line); border-radius: 16px;
  transition: transform .3s var(--ease), box-shadow .3s var(--ease);
}
.cs-deliv-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.cs-deliv-ico {
  flex-shrink: 0; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 12px;
  background: var(--grad); color: #fff;
}
.cs-deliv-ico .i { width: 22px; height: 22px; }
.cs-deliv-text h4 { margin: 0 0 .3rem; color: var(--ink); font-size: 1.05rem; }
.cs-deliv-text p { margin: 0; color: var(--muted); font-size: .92rem; line-height: 1.6; }

/* ---------- Testimonial Quote Block ---------- */
.cs-testi-box {
  position: relative; overflow: hidden; padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: calc(var(--radius) + 8px); background: linear-gradient(135deg, #1e1b4b, var(--dark));
  color: #fff; box-shadow: var(--shadow-lg); border: 1px solid rgba(255, 255, 255, .14);
}
.cs-testi-box::before {
  content: ""; position: absolute; width: 300px; height: 300px; right: -100px; top: -100px; border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 70, 229, .4), transparent 70%); pointer-events: none;
}
.cs-testi-quote {
  font-size: clamp(1.2rem, 2.5vw, 1.65rem); font-style: italic; line-height: 1.6;
  color: #fff; margin: 0 0 2rem; position: relative; z-index: 1;
}
.cs-testi-auth { display: flex; align-items: center; gap: 1rem; position: relative; z-index: 1; }
.cs-testi-avatar {
  width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center;
  font-weight: 800; font-size: 1.2rem; background: var(--grad-warm); color: #fff;
}
.cs-testi-info strong { display: block; font-size: 1.05rem; color: #fff; }
.cs-testi-info span { font-size: .88rem; color: rgba(255, 255, 255, .7); }

/* ---------- Related Project Cards ---------- */
.svp-proj {
  position: relative; display: flex; flex-direction: column; overflow: hidden; height: 100%;
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.svp-thumb { position: relative; overflow: hidden; width: 100%; aspect-ratio: 16 / 9; height: auto !important; background: #0b1120; border-bottom: 1px solid var(--line); display: block; padding: 0 !important; cursor: pointer; text-decoration: none; }
.svp-thumb img { display: block; width: 100%; height: 100%; object-fit: contain !important; object-position: center; transition: transform .5s var(--ease); }
.svp-proj:hover .svp-thumb img { transform: scale(1.025); }
.svp-wb { display: flex; flex-direction: column; flex: 1; padding: 1.5rem; }
.svp-wb h3 { margin: .85rem 0 .5rem; color: var(--ink); font-size: 1.2rem; }
.svp-proj:hover .svp-wb h3 { color: var(--primary); }
.svp-wb p { margin: 0 0 1.25rem; color: var(--muted); line-height: 1.6; font-size: .92rem; }

/* ---------- CTA ---------- */
.svp-cta-sec { padding-top: 2rem; }
.svp-cta {
  position: relative; overflow: hidden; display: grid; grid-template-columns: 1.4fr 1fr; gap: 2.5rem; align-items: center;
  padding: clamp(1.75rem, 5vw, 3.5rem); border-radius: calc(var(--radius) + 10px); color: #fff;
  background: linear-gradient(135deg, #090d16 0%, #1e1b4b 55%, #312e81 100%);
  box-shadow: var(--shadow-lg);
}
.svp-cta > * { position: relative; z-index: 1; }
.svp-cta::before, .svp-cta::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  border: 1px solid rgba(255, 255, 255, .15);
}
.svp-cta::before { width: 420px; height: 420px; right: -120px; top: -160px; border-style: dashed; opacity: .4; }
.svp-cta::after { width: 260px; height: 260px; left: -90px; bottom: -120px; background: radial-gradient(circle, rgba(251, 146, 60, .25), transparent 70%); border: 0; }
.svp-cta .eyebrow { background: rgba(255, 255, 255, .12); color: #a5f3fc; }
.svp-cta h2 { font-size: clamp(1.7rem, 3.5vw, 2.8rem); margin: 1rem 0 .8rem; line-height: 1.15; color: #fff; }
.svp-cta .sub { color: rgba(255, 255, 255, .8); margin: 0; max-width: 56ch; }
.svp-cta-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
.svp-poc-card {
  text-align: center; padding: 2.2rem 2rem; border-radius: 22px;
  background: rgba(255, 255, 255, .08); border: 1px solid rgba(255, 255, 255, .18);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.svp-poc-big {
  font-size: clamp(2.1rem, 5vw, 2.7rem); font-weight: 800;
  background: linear-gradient(90deg, #fff, #a5f3fc, #fdba74);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp-poc-title { font-weight: 600; font-size: 1.1rem; margin-top: .3rem; color: #fff; }
.svp-poc-card p { color: rgba(255, 255, 255, .82); font-size: .9rem; margin: .6rem 0 0; }

/* ---------- Hero Preview Card ---------- */
.cs-hero-preview-box {
  position: relative; margin-bottom: 1.25rem; border-radius: 14px; overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .25); background: #0f172a;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
}
.cs-hero-preview-link { display: block; position: relative; overflow: hidden; text-decoration: none; width: 100%; }
.cs-hero-preview-img {
  width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; display: block;
  background: #f8fafc; padding: 0 !important;
  transition: transform .5s var(--ease);
}
.cs-hero-preview-link:hover .cs-hero-preview-img { transform: scale(1.05); }
.cs-hero-preview-badge {
  position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: center; padding-bottom: .75rem;
  background: linear-gradient(180deg, transparent 40%, rgba(11, 16, 32, .85)); opacity: 0;
  transition: opacity .3s var(--ease);
}
.cs-hero-preview-badge span {
  padding: .35rem .75rem; border-radius: 999px; background: rgba(79, 70, 229, .95); color: #fff;
  font-size: .75rem; font-weight: 600; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.cs-hero-preview-link:hover .cs-hero-preview-badge { opacity: 1; }

/* ---------- Visual Showcase Section ---------- */
.cs-showcase-sec { padding: 4.5rem 0; background: var(--bg); position: relative; }
.cs-browser-frame {
  max-width: 1100px; margin: 0 auto 3rem; border-radius: 16px; overflow: hidden;
  background: var(--surface); border: 1px solid var(--line);
  box-shadow: 0 24px 50px -12px rgba(15, 23, 42, .18);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.cs-browser-frame:hover { box-shadow: 0 32px 64px -14px rgba(79, 70, 229, .22); }
.cs-browser-header {
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  padding: .8rem 1.25rem; background: #0f172a; color: #94a3b8; border-bottom: 1px solid rgba(255, 255, 255, .1);
}
.cs-browser-dots { display: flex; gap: .45rem; align-items: center; }
.cs-browser-dots .dot { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
.cs-browser-dots .dot-r { background: #ef4444; }
.cs-browser-dots .dot-y { background: #f59e0b; }
.cs-browser-dots .dot-g { background: #10b981; }
.cs-browser-address {
  flex: 1; max-width: 480px; display: flex; align-items: center; gap: .5rem;
  padding: .4rem .9rem; border-radius: 999px; background: rgba(255, 255, 255, .08);
  color: #cbd5e1; font-size: .8rem; font-family: ui-monospace, monospace;
}
.cs-browser-address svg { width: 13px; height: 13px; color: #34d399; flex-shrink: 0; }
.cs-browser-meta { display: flex; align-items: center; gap: .6rem; }
.cs-live-pill {
  display: inline-flex; align-items: center; gap: .45rem; font-size: .75rem; font-weight: 600;
  color: #34d399; padding: .25rem .65rem; border-radius: 999px; background: rgba(52, 211, 153, .12);
}
.cs-live-pulse {
  width: 7px; height: 7px; border-radius: 50%; background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, .6); animation: svp-ping 1.8s infinite;
}
.cs-zoom-btn {
  display: inline-flex; align-items: center; gap: .35rem; font-size: .74rem; font-weight: 600;
  padding: .25rem .6rem; border-radius: 6px; background: rgba(255, 255, 255, .12);
  color: #f1f5f9; border: none; cursor: pointer; transition: background .2s;
}
.cs-zoom-btn:hover { background: rgba(255, 255, 255, .22); }
.cs-browser-address-link {
  text-decoration: none;
  cursor: pointer;
  transition: background .2s, border-color .2s, color .2s;
}
.cs-browser-address-link:hover {
  background: rgba(255, 255, 255, .16);
  color: #ffffff;
}
.cs-browser-address-link .cs-browser-address-arrow {
  margin-left: auto;
  color: #34d399;
  font-size: .85rem;
  transition: transform .2s var(--ease);
}
.cs-browser-address-link:hover .cs-browser-address-arrow {
  transform: translate(2px, -2px);
}
.cs-browser-live-btn {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  font-size: .74rem;
  font-weight: 600;
  padding: .28rem .7rem;
  border-radius: 6px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.22), rgba(6, 182, 212, 0.22));
  border: 1px solid rgba(52, 211, 153, 0.45);
  color: #6ee7b7;
  text-decoration: none;
  transition: all .2s var(--ease);
}
.cs-browser-live-btn:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.38), rgba(6, 182, 212, 0.38));
  border-color: #34d399;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}
.cs-browser-live-btn svg {
  transition: transform .2s var(--ease);
}
.cs-browser-live-btn:hover svg {
  transform: translate(2px, -2px);
}
.cs-browser-screen {
  position: relative; background: #0b1120; overflow: hidden;
  display: flex; align-items: center; justify-content: center; cursor: zoom-in;
  width: 100%; aspect-ratio: 16 / 9;
}
.cs-main-screen-img {
  width: 100%; height: 100%; display: block; object-fit: cover; object-position: center;
  transition: transform .5s var(--ease);
}
.cs-browser-screen:hover .cs-main-screen-img { transform: scale(1.02); }

.cs-screen-caption-bar {
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  padding: .85rem 1.25rem; background: #090d1a; border-top: 1px solid rgba(255, 255, 255, .08);
}
.cs-caption-left {
  display: flex; align-items: center; gap: .65rem; flex: 1; min-width: 0;
}
.cs-caption-tag {
  font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
  padding: .2rem .55rem; border-radius: 999px; background: rgba(79, 70, 229, .2);
  color: #a5b4fc; border: 1px solid rgba(79, 70, 229, .35); flex-shrink: 0;
}
.cs-caption-text {
  color: #e2e8f0; font-size: .86rem; font-weight: 500;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.cs-caption-zoom-btn {
  display: inline-flex; align-items: center; gap: .4rem; font-size: .78rem; font-weight: 600;
  color: #38bdf8; background: rgba(56, 189, 248, .1); border: 1px solid rgba(56, 189, 248, .25);
  padding: .35rem .75rem; border-radius: 6px; cursor: pointer; flex-shrink: 0;
  transition: all .2s var(--ease);
}
.cs-caption-zoom-btn:hover {
  background: rgba(56, 189, 248, .2); color: #ffffff;
}


.cs-gallery-container {
  max-width: 1100px;
  margin: 2.5rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}
.cs-gallery-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.cs-gallery-title h3 {
  margin: 0 0 .25rem;
  color: var(--ink);
  font-size: 1.25rem;
  font-weight: 700;
}
.cs-gallery-title p {
  margin: 0;
  color: var(--muted);
  font-size: .88rem;
}
.cs-gallery-count {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: .35rem .85rem;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  font-size: .8rem;
  font-weight: 600;
  color: var(--primary);
  box-shadow: var(--shadow-sm);
}

/* ---------- Metizsoft-Style Uniform 3-Column Gallery Grid ---------- */
.cs-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;
  margin-top: 1.25rem;
}
.cs-gallery-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  cursor: pointer;
  transition: transform 0.35s var(--ease), border-color 0.3s, box-shadow 0.35s;
}
.cs-gallery-card:hover {
  transform: translateY(-5px);
  border-color: rgba(79, 70, 229, 0.45);
  box-shadow: 0 16px 36px -8px rgba(79, 70, 229, 0.22);
}
.cs-gallery-card.selected {
  border-color: #6366f1;
  box-shadow: 0 0 0 2px #6366f1, 0 16px 36px -10px rgba(99, 102, 241, 0.35);
}
.cs-gallery-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: block;
  background: #f8fafc;
}
.cs-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.cs-gallery-card:hover .cs-gallery-img {
  transform: scale(1.04);
}
.cs-gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(11, 16, 32, 0.6) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.cs-gallery-card:hover .cs-gallery-overlay {
  opacity: 1;
}
.cs-gallery-zoom-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: #0b1220;
  font-size: 0.76rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  transition: transform 0.25s ease;
}
.cs-gallery-card:hover .cs-gallery-zoom-pill {
  transform: translateY(0);
}

/* Tablet & Mobile Responsiveness */
@media (max-width: 992px) {
  .cs-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

@media (max-width: 640px) {
  .cs-gallery-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
  .cs-gallery-card {
    border-radius: 14px;
  }
  .cs-gallery-inner {
    aspect-ratio: 16 / 9;
  }
}

/* ---------- Upgraded Lightbox Modal ---------- */
.cs-lightbox {
  position: fixed; inset: 0; z-index: 3000; background: rgba(2, 6, 23, .96);
  -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1.5rem; animation: svp-in .25s var(--ease);
  user-select: none;
}
.cs-lightbox-topbar {
  position: absolute; top: 1.25rem; left: 1.5rem; right: 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  z-index: 10;
}
.cs-lightbox-counter {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .35rem .85rem; border-radius: 999px;
  background: rgba(255, 255, 255, .1); border: 1px solid rgba(255, 255, 255, .18);
  color: #f1f5f9; font-size: .82rem; font-weight: 600;
}
.cs-lightbox-counter-dot {
  width: 7px; height: 7px; border-radius: 50%; background: #34d399;
}
.cs-lightbox-close {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255, 255, 255, .12); color: #fff; border: 1px solid rgba(255, 255, 255, .2);
  cursor: pointer; display: grid; place-items: center; font-size: 1.3rem;
  transition: all .2s var(--ease);
}
.cs-lightbox-close:hover {
  background: rgba(239, 68, 68, .85); border-color: #ef4444; color: #fff; transform: scale(1.05);
}
.cs-lightbox-main {
  position: relative; width: 100%; max-width: 1200px;
  display: flex; align-items: center; justify-content: center;
}
.cs-lightbox-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 48px; height: 48px; border-radius: 50%;
  background: rgba(15, 23, 42, .75); border: 1px solid rgba(255, 255, 255, .25);
  color: #fff; cursor: pointer; display: grid; place-items: center;
  transition: all .2s var(--ease); z-index: 5;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .4);
}
.cs-lightbox-nav:hover {
  background: var(--primary); border-color: var(--primary); transform: translateY(-50%) scale(1.08);
}
.cs-lightbox-prev { left: clamp(0.5rem, 2vw, 1.5rem); }
.cs-lightbox-next { right: clamp(0.5rem, 2vw, 1.5rem); }
.cs-lightbox-content {
  max-width: 90vw; max-height: 80vh; text-align: center;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.cs-lightbox-content img {
  max-width: 100%; max-height: 72vh; object-fit: contain; border-radius: 12px;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, .8); border: 1px solid rgba(255, 255, 255, .18);
  transition: transform .3s var(--ease);
}
.cs-lightbox-bottom {
  margin-top: 1rem; text-align: center; max-width: 750px;
}
.cs-lightbox-caption {
  color: #f1f5f9; font-size: .95rem; font-weight: 500; margin: 0 0 .35rem; line-height: 1.45;
}
.cs-lightbox-hint {
  color: #94a3b8; font-size: .75rem; margin: 0;
}
@media (max-width: 640px) {
  .cs-lightbox-nav { width: 38px; height: 38px; }
  .cs-lightbox-topbar { top: .85rem; left: 1rem; right: 1rem; }
  .cs-lightbox-content img { max-height: 62vh; }
}

/* ---------- Modules Section ---------- */
.cs-modules-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
@media (max-width: 820px) { .cs-modules-grid { grid-template-columns: minmax(0, 1fr); } }
.cs-module-card {
  padding: 2rem; border-radius: var(--radius); background: var(--bg); border: 1px solid var(--line);
  box-shadow: var(--shadow); transition: transform .35s var(--ease), box-shadow .35s var(--ease);
  display: flex; flex-direction: column;
}
.cs-module-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.cs-module-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.cs-module-num {
  width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center;
  background: linear-gradient(135deg, rgba(79, 70, 229, .15), rgba(6, 182, 212, .18));
  color: var(--primary); font-weight: 700; font-size: .88rem; flex-shrink: 0;
}
.cs-module-head h3 { margin: 0; color: var(--ink); font-size: 1.18rem; }
.cs-module-card > p { color: var(--muted); font-size: .94rem; line-height: 1.6; margin: 0 0 1.25rem; }
.cs-module-features {
  list-style: none; padding: 0; margin: auto 0 0; display: grid; gap: .6rem;
  border-top: 1px dashed var(--line); padding-top: 1rem;
}
.cs-module-features li {
  display: flex; align-items: flex-start; gap: .55rem; font-size: .87rem; color: var(--ink); line-height: 1.45;
}
.cs-module-features li svg { width: 15px; height: 15px; color: var(--primary); flex-shrink: 0; margin-top: 2px; }

/* ---------- Business Impact Comparison Table ---------- */
.cs-impact-table-wrap {
  overflow-x: auto; background: var(--bg); border-radius: var(--radius);
  border: 1px solid var(--line); box-shadow: var(--shadow); margin-top: 1.5rem;
}
.cs-impact-table { width: 100%; border-collapse: collapse; text-align: left; }
.cs-impact-table th {
  padding: 1rem 1.25rem; background: var(--surface); color: var(--ink); font-size: .88rem;
  font-weight: 700; border-bottom: 1px solid var(--line);
}
.cs-impact-table td {
  padding: 1.1rem 1.25rem; font-size: .92rem; border-bottom: 1px solid var(--line);
  vertical-align: middle;
}
.cs-impact-table tr:last-child td { border-bottom: none; }
.cs-impact-metric { font-weight: 700; color: var(--ink); }
.cs-impact-before {
  color: #ef4444; background: rgba(239, 68, 68, .06); padding: .25rem .6rem; border-radius: 6px;
  display: inline-block; font-size: .85rem; font-weight: 500;
}
.cs-impact-after {
  color: #10b981; background: rgba(16, 185, 129, .08); padding: .25rem .65rem; border-radius: 6px;
  font-weight: 600; display: inline-block; font-size: .88rem;
}

/* ---------- Technical Architecture Highlights ---------- */
.cs-arch-box {
  padding: 2.25rem; border-radius: var(--radius); background: linear-gradient(135deg, rgba(79, 70, 229, .05), rgba(6, 182, 212, .05));
  border: 1px solid rgba(79, 70, 229, .2); margin-top: 2rem;
}
.cs-arch-pattern {
  display: inline-flex; align-items: center; gap: .5rem; font-weight: 700; font-size: .95rem;
  color: var(--primary); margin-bottom: 1.25rem;
}
.cs-arch-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@media (max-width: 820px) { .cs-arch-grid { grid-template-columns: minmax(0, 1fr); } }
.cs-arch-item {
  display: flex; align-items: flex-start; gap: .65rem; font-size: .92rem; color: var(--ink); line-height: 1.55;
  padding: .85rem 1rem; background: var(--bg); border-radius: 10px; border: 1px solid var(--line);
}
.cs-arch-item svg { width: 18px; height: 18px; color: var(--accent2); flex-shrink: 0; margin-top: 2px; }

/* ---------- 404 ---------- */
.svp-nf { text-align: center; padding: 6rem 0; }
.svp-nf-code {
  font-family: var(--serif); font-style: italic; font-size: clamp(4rem, 14vw, 8rem); font-weight: 700; line-height: 1;
  background: var(--grad-warm); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: svp-grad 5s linear infinite;
}
.svp-nf h2 { margin: .5rem 0; color: var(--ink); }
.svp-nf p { margin: 1rem 0 2rem; color: var(--muted); }

/* ---------- Keyframes ---------- */
@keyframes svp-in { from { opacity: 0; transform: translateY(22px); } }
@keyframes svp-in-scale { from { opacity: 0; transform: translateY(30px) scale(.96); } }
@keyframes svp-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-34px, 26px); } }
@keyframes svp-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes svp-grad { to { background-position: 200% 0; } }
@keyframes svp-sheen { 0%, 60% { background-position: 150% 0; } 100% { background-position: -100% 0; } }
@keyframes svp-shine { 0%, 55% { left: -60%; } 100% { left: 130%; } }
@keyframes svp-drift { to { background-position: 26px 26px; } }
@keyframes svp-marq { to { transform: translateX(-50%); } }
@keyframes svp-bg { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes svp-spin { to { transform: rotate(360deg); } }
@keyframes svp-ping { 70% { box-shadow: 0 0 0 9px rgba(251, 146, 60, 0); } 100% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); } }
@keyframes svp-ping-g { 70% { box-shadow: 0 0 0 9px rgba(52, 211, 153, 0); } 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); } }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .svp .cols.c3, .svp .cols.c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .svp-chip { display: none; }
}
@media (max-width: 860px) {
  .svp-cta { grid-template-columns: 1fr; gap: 1.75rem; }
  .svp-hero-card { transform: none !important; }
  .cs-browser-frame:hover { transform: none; }
}
@media (max-width: 640px) {
  .svp .cols.c2, .svp .cols.c3, .svp .cols.c4 { grid-template-columns: 1fr; gap: 1rem; }
  .svp-hero { padding-top: 0.85rem !important; padding-bottom: 2rem !important; }
  .svp-hero h1 {
    font-size: clamp(2rem, 7.2vw, 2.5rem);
    line-height: 1.16;
    margin: 0.5rem 0 0.75rem;
  }
  .svp-hero .lead {
    font-size: 0.92rem;
    line-height: 1.55;
    margin-bottom: 1.15rem;
  }
  .eyebrow-hero {
    font-size: 0.74rem;
    padding: 0.28rem 0.65rem;
    line-height: 1.35;
  }
  .svp .breadcrumbs {
    font-size: 0.74rem;
    padding: 0.22rem 0.65rem;
    gap: 0.35rem;
    margin-bottom: 0.6rem;
    max-width: 100%;
  }
  .svp .breadcrumbs .current {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: bottom;
  }
  .cs-meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0.85rem 0 1.25rem;
  }
  .cs-meta-pill {
    font-size: 0.75rem;
    padding: 0.32rem 0.65rem;
    gap: 0.35rem;
  }
  .cs-meta-link {
    width: 100%;
    justify-content: flex-start;
  }
  .svp-hero .cta-row {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    width: 100%;
  }
  .svp-hero .cta-row .btn,
  .svp-hero .cta-row .btn-live,
  .svp-cta-actions .btn {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
  .svp-hero-card { padding: 1.35rem; }
  .svp-stats { grid-template-columns: repeat(2, 1fr); gap: 1.25rem 1rem; }
  .svp-stats strong { font-size: 1.35rem; }
  .svp-stats span { font-size: 0.75rem; }
  .svp-orb-a { width: 240px; height: 240px; }
  .svp-orb-b { width: 200px; height: 200px; }
  .svp-orb-c { display: none; }
  .svp .card { padding: 1.25rem; }
  .cs-card { padding: 1.35rem; }
  .cs-card h3 { font-size: 1.15rem; }
  .cs-card p { font-size: 0.88rem; line-height: 1.6; }
  .cs-deliv-card { padding: 1rem; gap: 0.85rem; }
  .cs-deliv-ico { width: 38px; height: 38px; }
  .cs-deliv-ico .i { width: 18px; height: 18px; }
  .cs-deliv-text h4 { font-size: 0.95rem; }
  .cs-deliv-text p { font-size: 0.85rem; }
  .svp-poc-card { padding: 1.4rem 1.15rem; }
  .svp-poc-big { font-size: 1.85rem; }
  .svp-marquee { padding: 0.85rem 0; }
  .svp .sec { padding: 2.75rem 0; }
  .svp .sec.alt { padding: 2.75rem 0; }
  .svp .sec-head { margin-bottom: 1.75rem; }
  .svp .sec-head h2 { font-size: clamp(1.35rem, 5.5vw, 1.75rem); line-height: 1.25; margin: .6rem 0 .5rem; }
  .svp .sec-head p { font-size: 0.88rem; line-height: 1.55; }

  /* Mobile Browser Frame & Screen (Clean & Focused) */
  .cs-browser-frame { border-radius: 12px; margin-bottom: 2rem; }
  .cs-browser-header {
    display: flex; align-items: center; justify-content: flex-start; padding: 0.65rem 0.85rem; gap: 0.4rem;
  }
  .cs-browser-dots { order: 1; }
  .cs-browser-meta,
  .cs-browser-address,
  .cs-screen-caption-bar {
    display: none !important;
  }
  .cs-browser-screen { padding: 0; width: 100%; aspect-ratio: 16 / 9; cursor: pointer; }
  .cs-main-screen-img { width: 100%; height: 100%; object-fit: contain; }

  /* Mobile Visual Gallery */
  .cs-gallery-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
  .cs-gallery-card { max-width: 100%; border-radius: 14px; }
  .cs-gallery-inner { aspect-ratio: 16 / 9; }
  .cs-gallery-header { margin-bottom: 1rem; }
  .cs-gallery-title h3 { font-size: 1.15rem; }
  .cs-gallery-title p { font-size: 0.82rem; }

  /* Mobile Modules */
  .cs-module-card { padding: 1.25rem; }
  .cs-module-head h3 { font-size: 1.05rem; }
  .cs-module-card > p { font-size: 0.88rem; margin-bottom: 1rem; }
  .cs-module-features li { font-size: 0.82rem; }

  /* Mobile Table */
  .cs-impact-table { min-width: 480px; }
  .cs-impact-table th, .cs-impact-table td { padding: 0.75rem 0.8rem; font-size: 0.82rem; }

  /* Mobile Arch & Testimonial */
  .cs-arch-box { padding: 1.25rem; margin-top: 1.5rem; }
  .cs-arch-pattern { font-size: 0.88rem; margin-bottom: 0.85rem; }
  .cs-arch-item { padding: 0.7rem 0.85rem; font-size: 0.82rem; }
  .cs-testi-box { padding: 1.5rem 1.25rem; border-radius: 14px; }
  .cs-testi-quote { font-size: 1.05rem; line-height: 1.55; margin-bottom: 1.25rem; }
  .cs-testi-avatar { width: 44px; height: 44px; font-size: 1rem; }
  .cs-testi-info strong { font-size: 0.95rem; }
  .cs-testi-info span { font-size: 0.8rem; }
  .svp-cta { padding: 1.75rem 1.25rem; border-radius: 16px; }
  .svp-cta h2 { font-size: 1.45rem; line-height: 1.25; }
  .svp-cta .sub { font-size: 0.88rem; }
}
@media (hover: none) {
  .cs-card:hover, .cs-deliv-card:hover, .svp-proj:hover { transform: none; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .svp *, .svp *::before, .svp *::after { animation: none !important; transition-duration: .01ms !important; }
  .svp .rv { opacity: 1 !important; transform: none !important; }
}
`;

/* =========================================================
   Helpers
   ========================================================= */

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const [ref, shown] = useInView();
  return (
    <Tag
      ref={ref}
      className={`rv ${shown ? "rv-in" : ""} ${className}`}
      style={{ "--rv-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function CountUp({ value, duration = 1500 }) {
  const text = String(value ?? "");
  const match = text.match(/^(\D*?)(\d+(?:\.\d+)?)(\D*)$/);
  const countable = Boolean(match);
  const prefix = countable ? match[1] : "";
  const target = countable ? parseFloat(match[2]) : 0;
  const suffix = countable ? match[3] : "";
  const decimals =
    countable && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const ref = useRef(null);
  const [n, setN] = useState(countable ? 0 : target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !countable) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setN(target);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, countable]);

  return (
    <strong ref={ref}>
      {countable ? `${prefix}${n.toFixed(decimals)}${suffix}` : text}
    </strong>
  );
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let raf;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (el) el.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="svp-progress" aria-hidden="true">
      <span ref={ref} />
    </div>
  );
}

let spotRaf = null;
const onSpot = (e) => {
  const el = e.currentTarget;
  const clientX = e.clientX;
  const clientY = e.clientY;
  if (spotRaf) cancelAnimationFrame(spotRaf);
  spotRaf = requestAnimationFrame(() => {
    let r = el._cachedRect;
    if (!r) {
      r = el.getBoundingClientRect();
      el._cachedRect = r;
    }
    el.style.setProperty("--mx", `${clientX - r.left}px`);
    el.style.setProperty("--my", `${clientY - r.top}px`);
  });
};

let tiltRaf = null;
const onTilt = (e) => {
  if (!window.matchMedia("(hover: hover) and (min-width: 861px)").matches)
    return;
  const el = e.currentTarget;
  const clientX = e.clientX;
  const clientY = e.clientY;
  if (tiltRaf) cancelAnimationFrame(tiltRaf);
  tiltRaf = requestAnimationFrame(() => {
    let r = el._cachedRect;
    if (!r) {
      r = el.getBoundingClientRect();
      el._cachedRect = r;
    }
    const x = (clientX - r.left) / r.width - 0.5;
    const y = (clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
  });
};

const onTiltEnd = (e) => {
  if (tiltRaf) cancelAnimationFrame(tiltRaf);
  const el = e.currentTarget;
  el._cachedRect = null;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};

/* =========================================================
   Detail Component
   ========================================================= */

export default function WorkDetailPage({ project }) {
  // Safe fallback if project is missing
  if (!project) {
    return (
      <div className="svp">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="sec svp-nf">
          <div className="container">
            <span className="svp-nf-code">404</span>
            <h2>Case Study Not Found</h2>
            <p>The case study you are looking for does not exist or has been relocated.</p>
            <Link href="/work" className="btn btn-primary">
              Browse All Case Studies →
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Related projects (excluding the current one)
  const relatedProjects = useMemo(() => {
    return caseStudiesData
      .filter((p) => p.slug !== project.slug && p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  // Normalized image collection supporting single or multiple images (minimum 6 screens)
  const allImages = useMemo(() => {
    let list = [];
    if (project?.gallery && project.gallery.length > 0) {
      list = [...project.gallery];
    } else if (project?.images && project.images.length > 0) {
      list = project.images.map((img, i) => ({
        url: img,
        caption: `${project.title} — Interface Screen 0${i + 1}`,
        tag: "Platform Screen",
        badge: `Screen 0${i + 1} · Production View`,
      }));
    } else if (project?.image) {
      list = [
        {
          url: project.image,
          caption: `${project.title} — Primary Platform Overview`,
          tag: "Multi-Device UI Showcase",
          badge: "Screen 01 · Primary Overview",
        },
      ];
    }

    // If already 6 or more images, use them directly
    if (list.length >= 6) return list;

    // Supplement with other project screenshots from caseStudiesData
    const isMobile =
      project?.category === "Mobile App Development" ||
      project?.serviceSlug === "mobile-app-development";

    // Pool matching platform type first, then fallback to other projects
    const pool = caseStudiesData
      .filter((p) => p.slug !== project?.slug && p.id !== project?.id && p.image)
      .sort((a, b) => {
        const aMatches =
          (a.category === "Mobile App Development" ||
            a.serviceSlug === "mobile-app-development") === isMobile;
        const bMatches =
          (b.category === "Mobile App Development" ||
            b.serviceSlug === "mobile-app-development") === isMobile;
        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return 0;
      });

    const featureDescriptors = [
      {
        tag: "Analytics & Telemetry",
        badgeDesc: "Analytics Desk",
        defaultCaption: "Real-Time KPI Telemetry & Performance Dashboard",
      },
      {
        tag: "Transactional Flow",
        badgeDesc: "Core Workflow",
        defaultCaption: "End-to-End Processing Desk & Instant Operations",
      },
      {
        tag: "Admin Operations",
        badgeDesc: "Operations Console",
        defaultCaption: "Role-Secured Governance Portal & Audit Log Cockpit",
      },
      {
        tag: "Customer Experience",
        badgeDesc: "User Interface",
        defaultCaption: "Interactive Responsive Experience & Touchpoint Journey",
      },
      {
        tag: "Audit & Compliance",
        badgeDesc: "Document Engine",
        defaultCaption: "Automated Document Generation & Compliance Verification Records",
      },
      {
        tag: "Field Companion",
        badgeDesc: "Mobile Operations",
        defaultCaption: "Optimized Field Companion & Real-Time Push Notification Center",
      },
    ];

    let descriptorIdx = 0;
    for (const item of pool) {
      if (list.length >= 6) break;
      if (!list.some((existing) => existing.url === item.image)) {
        const desc = featureDescriptors[descriptorIdx % featureDescriptors.length];
        const screenNum = list.length + 1;
        const padNum = screenNum < 10 ? `0${screenNum}` : `${screenNum}`;
        list.push({
          url: item.image,
          caption: `${item.title.split("–")[0].trim()} — ${desc.defaultCaption}`,
          tag: desc.tag,
          badge: `Screen ${padNum} · ${desc.badgeDesc}`,
        });
        descriptorIdx++;
      }
    }

    return list;
  }, [project]);

  const [activeImage, setActiveImage] = useState(
    allImages[0]?.url || project?.image || ""
  );
  const [activeCaption, setActiveCaption] = useState(
    allImages[0]?.caption || ""
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (allImages.length > 0 && allImages[0]?.url) {
      setActiveImage(allImages[0].url);
      setActiveCaption(allImages[0].caption || "");
    }
  }, [allImages]);

  const activeIndex = useMemo(() => {
    const idx = allImages.findIndex((item) => item.url === activeImage);
    return idx >= 0 ? idx : 0;
  }, [allImages, activeImage]);

  const selectImageByIndex = (index) => {
    if (!allImages.length) return;
    const boundedIndex = (index + allImages.length) % allImages.length;
    const target = allImages[boundedIndex];
    if (target) {
      setActiveImage(target.url);
      setActiveCaption(target.caption || "");
    }
  };

  const showNextImage = () => selectImageByIndex(activeIndex + 1);
  const showPrevImage = () => selectImageByIndex(activeIndex - 1);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeIndex, allImages]);

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="project-detail-hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />
        <span className="svp-orb svp-orb-c" aria-hidden="true" />

        <div className="container hero-wrap">
          <div className="copy svp-hero-copy">
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="eyebrow-hero">
                <strong>{project.category || project.tags?.[0]}</strong> · Delivered Case Study
              </span>
            </div>

            <h1 id="project-detail-hero-title">
              {project.title}
            </h1>

            <p className="lead">{project.description}</p>

            <div className="cs-meta-row">
              {project.client && (
                <div className="cs-meta-pill">
                  <span>Client:</span> {project.client}
                </div>
              )}
              {project.industry && (
                <div className="cs-meta-pill">
                  <span>Industry:</span> {project.industry}
                </div>
              )}
              {project.duration && (
                <div className="cs-meta-pill">
                  <span>Timeline:</span> {project.duration}
                </div>
              )}
              {project.country && (
                <div className="cs-meta-pill">
                  <span>Region:</span> {project.country}
                </div>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-meta-pill cs-meta-link"
                  title="Open live website in a new tab"
                >
                  <span className="cs-meta-live-dot" aria-hidden="true" />
                  <span>Live URL:</span>
                  <strong>{project.domain || project.website.replace(/^https?:\/\//, "")}</strong>
                  <svg
                    className="cs-meta-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Discuss a Similar Build{" "}
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              {project.website && (
                <a
                  className="btn btn-live"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open live website in a new tab"
                >
                  <span className="live-pulse-badge" aria-hidden="true">
                    <span className="live-dot" />
                    <span className="live-dot-ping" />
                  </span>
                  <span className="live-btn-text">Live Website</span>
                  <svg
                    className="live-btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              <a className="btn btn-ghost" href="#project-showcase">
                View Platform Screens ↓
              </a>
            </div>
          </div>

          <div className="svp-hero-wrap">
            <span className="svp-chip svp-chip-a" aria-hidden="true">
              <b /> Verified ROI
            </span>
            <span className="svp-chip svp-chip-b" aria-hidden="true">
              <b /> Bank-Grade Code
            </span>

            <div
              className="bcard big svp-hero-card"
              onMouseMove={onTilt}
              onMouseLeave={onTiltEnd}
            >
              <div className="bcard-top">
                <span className="btag">{project.category || "Case Study"}</span>
                <span className="blink" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>

              {project.image && (
                <div className="cs-hero-preview-box">
                  <a
                    href="#project-showcase"
                    className="cs-hero-preview-link"
                    title="Click to view full interface showcase"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      width={800}
                      height={450}
                      className="cs-hero-preview-img"
                      priority
                    />
                    <div className="cs-hero-preview-badge">
                      <span>Click to View Full Showcase ↓</span>
                    </div>
                  </a>
                </div>
              )}

              <h3>Quantified Business Outcomes</h3>
              <p>
                Every engineering milestone tied directly to verifiable application speed,
                scalability, and bottom-line revenue impact.
              </p>

              <div className="agent-live">
                <i /> Production Deployed
              </div>

              <div className="svp-stats">
                {project.metrics?.map((m, i) => (
                  <div key={i}>
                    <CountUp value={m.value} />
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      {project.techStack?.length > 0 && (
        <div className="svp-marquee" aria-hidden="true">
          <div className="svp-marquee-track">
            <div className="svp-marquee-group">
              {project.techStack.map((tech, idx) => (
                <span key={`tech1-${idx}`}>{tech}</span>
              ))}
            </div>
            <div className="svp-marquee-group">
              {project.techStack.map((tech, idx) => (
                <span key={`tech2-${idx}`}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= VISUAL PLATFORM SHOWCASE & SCREEN GALLERY ================= */}
      {(project.image || allImages.length > 0) && (
        <section className="sec cs-showcase-sec" id="project-showcase">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Platform Visuals &amp; Interface Walkthrough</span>
              <h2>High-Fidelity Interface Showcase &amp; Multi-Device Experience</h2>
              <p>
                Explore the production-deployed UI engineered for effortless customer booking,
                responsive multi-device adaptability, and streamlined operational control.
              </p>
            </Reveal>

            {/* Main Browser Window Mockup */}
            <Reveal className="cs-browser-frame">
              <div className="cs-browser-header">
                <div className="cs-browser-dots" aria-hidden="true">
                  <span className="dot dot-r" />
                  <span className="dot dot-y" />
                  <span className="dot dot-g" />
                </div>
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-browser-address cs-browser-address-link"
                    title="Open live website in a new tab"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{project.website}</span>
                    <span className="cs-browser-address-arrow" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <div className="cs-browser-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{`https://${project.domain || (project.slug ? `${project.slug}.com` : "production-preview")}`}</span>
                  </div>
                )}
                <div className="cs-browser-meta">
                  <span className="cs-live-pill">
                    <span className="cs-live-pulse" /> Live Deployment
                  </span>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-browser-live-btn"
                      title="Launch live website in a new tab"
                    >
                      <span>Visit Live Site</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
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
                  src={activeImage || project.image}
                  alt={project.title}
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
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
                  <p>Click any screen to open the interactive high-resolution preview.</p>
                </div>
                <span className="cs-gallery-count">
                  {allImages.length} Screens Available
                </span>
              </div>

              <div className="cs-gallery-grid">
                {allImages.slice(0, 6).map((imgItem, idx) => {
                  const isSelected = (activeImage || project.image) === imgItem.url;
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
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>
        </section>
      )}

      {/* ================= CHALLENGE VS SOLUTION ================= */}
      <section className="sec alt" id="project-overview">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Strategic Engineering</span>
            <h2>The Challenge &amp; The Vision Architectural Solution</h2>
            <p>
              How we deconstructed technical debt, eliminated bottlenecks, and delivered an
              uncompromising system.
            </p>
          </Reveal>

          <div className="cols c2">
            <Reveal className="cs-card challenge">
              <span className="cs-card-badge">The Business Challenge</span>
              <h3>Legacy Bottlenecks &amp; Growth Hurdles</h3>
              <p>{project.challenge || project.description}</p>
            </Reveal>

            <Reveal className="cs-card solution">
              <span className="cs-card-badge">The Vision Solution</span>
              <h3>Modern Architecture &amp; Scale</h3>
              <p>{project.solution || project.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= KEY MODULES & CAPABILITIES ================= */}
      {project.modules?.length > 0 && (
        <section className="sec" id="system-modules">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Modular Architecture</span>
              <h2>Core System Modules &amp; Feature Breakdown</h2>
              <p>
                A high-cohesion, low-coupling module hierarchy engineered to power seamless
                customer reservations and enterprise fleet management.
              </p>
            </Reveal>

            <div className="cs-modules-grid">
              {project.modules.map((mod, idx) => (
                <Reveal key={idx} delay={idx * 60} className="cs-module-card">
                  <div className="cs-module-head">
                    <span className="cs-module-num">0{idx + 1}</span>
                    <h3>{mod.title}</h3>
                  </div>
                  <p>{mod.description}</p>
                  {mod.features?.length > 0 && (
                    <ul className="cs-module-features">
                      {mod.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= KEY DELIVERABLES ================= */}
      {project.deliverables?.length > 0 && (
        <section className="sec" id="deliverables">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Milestones Delivered</span>
              <h2>Key Engineering Deliverables &amp; Artifacts</h2>
              <p>Core software components transferred to the client with full IP ownership.</p>
            </Reveal>

            <div className="cols c2">
              {project.deliverables.map((item, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 70}
                  className="cs-deliv-card"
                >
                  <span className="cs-deliv-ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  <div className="cs-deliv-text">
                    <h4>{item}</h4>
                    <p>Designed for high concurrency, automated testing coverage, and zero downtime.</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MEASURABLE BUSINESS IMPACT ================= */}
      {project.resultsTable?.length > 0 && (
        <section className="sec alt" id="business-impact">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Proven ROI &amp; Metrics</span>
              <h2>Measurable Business Impact: Before vs. After</h2>
              <p>
                How modern workflow automation eliminated operational bottlenecks and boosted
                profitability across fleet operations.
              </p>
            </Reveal>

            <Reveal className="cs-impact-table-wrap">
              <table className="cs-impact-table">
                <thead>
                  <tr>
                    <th>Operational Metric</th>
                    <th>Before Automation</th>
                    <th>After System Deployment</th>
                  </tr>
                </thead>
                <tbody>
                  {project.resultsTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className="cs-impact-metric">{row.metric}</td>
                      <td>
                        <span className="cs-impact-before">{row.before}</span>
                      </td>
                      <td>
                        <span className="cs-impact-after">{row.after}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            {project.architectureDetails && (
              <Reveal className="cs-arch-box">
                <div className="cs-arch-pattern">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span>{project.architectureDetails.pattern}</span>
                </div>
                <div className="cs-arch-grid">
                  {project.architectureDetails.highlights.map((item, idx) => (
                    <div key={idx} className="cs-arch-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ================= TESTIMONIAL ================= */}
      {project.testimonial && (
        <section className="sec alt" id="client-review">
          <div className="container">
            <Reveal className="cs-testi-box">
              <div className="t-stars" style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>★★★★★</div>
              <p className="cs-testi-quote">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <div className="cs-testi-auth">
                <div className="cs-testi-avatar">
                  {project.testimonial.author?.charAt(0) || "C"}
                </div>
                <div className="cs-testi-info">
                  <strong>{project.testimonial.author}</strong>
                  <span>{project.testimonial.role}, {project.testimonial.company}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ================= RELATED CASE STUDIES ================= */}
      {relatedProjects.length > 0 && (
        <section className="sec" id="related-work">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">More Client Work</span>
              <h2>Explore Other Recent Engineering Case Studies</h2>
              <p>Discover how Vision delivers across diverse industries and technical stacks.</p>
            </Reveal>

            <div className="cols c3">
              {relatedProjects.map((rel, idx) => (
                <Reveal
                  key={rel.id}
                  delay={idx * 80}
                  className="card flush svp-card svp-proj"
                  onMouseMove={onSpot}
                >
                  <Link
                    href={`/work/${rel.slug || rel.id}`}
                    className="svp-thumb"
                    style={{
                      "--g": rel.gradient || "linear-gradient(135deg,#4f46e5,#7c3aed)",
                    }}
                    aria-label={`View ${rel.title} case study`}
                  >
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      width={800}
                      height={520}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </Link>

                  <div className="wb svp-wb">
                    {rel.tags?.length > 0 && (
                      <div className="tags svp-tags">
                        {rel.tags.map((t, tIdx) => (
                          <span key={tIdx}>{t}</span>
                        ))}
                      </div>
                    )}

                    <h3>
                      <Link href={`/work/${rel.slug || rel.id}`}>
                        {rel.title}
                      </Link>
                    </h3>

                    <p>{rel.description}</p>

                    <Link href={`/work/${rel.slug || rel.id}`} className="more">
                      Read Case Study
                      <svg className="i" aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CALL TO ACTION ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="cta-box svp-cta">
            <div>
              <span className="eyebrow">Start Your Engagement</span>
              <h2>Ready to Achieve Similar Results for Your Business?</h2>
              <p className="sub">
                Book a 30-minute discovery consultation with our principal architects. We&apos;ll analyze
                your technical requirements, evaluate architectural feasibility, and deliver an
                actionable roadmap.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/#contact">
                  Schedule Free Discovery Call →
                </Link>
                <Link className="btn btn-ghost" href="/work">
                  View All Case Studies
                </Link>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">2–5 Days</div>
                <div className="svp-poc-title">Rapid Proof of Concept</div>
                <p>
                  Validate complex assumptions early. We turn ambitious technical ideas into working
                  code in under a week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxOpen && (
        <div className="cs-lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="cs-lightbox-topbar" onClick={(e) => e.stopPropagation()}>
            <div className="cs-lightbox-counter">
              <span className="cs-lightbox-counter-dot" />
              <span>
                Screen {activeIndex + 1} of {allImages.length}
                {allImages[activeIndex]?.tag ? ` · ${allImages[activeIndex].tag}` : ""}
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

          <div className="cs-lightbox-main" onClick={(e) => e.stopPropagation()}>
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            <div className="cs-lightbox-content">
              <Image
                src={allImages[activeIndex]?.url || activeImage || project.image}
                alt={allImages[activeIndex]?.caption || project.title}
                width={1200}
                height={800}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="cs-lightbox-bottom">
                <p className="cs-lightbox-caption">
                  {allImages[activeIndex]?.caption || activeCaption || project.title}
                </p>
                <p className="cs-lightbox-hint">
                  Use ← / → arrow keys to navigate · Press Esc or click outside to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
