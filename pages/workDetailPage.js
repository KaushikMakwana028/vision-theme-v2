"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";

/* =========================================================
   Page styles (scoped under .svp) — matches serviceDetailPage.js
   ========================================================= */
const styles = `
.svp { overflow-x: clip; }
.svp section[id] { scroll-margin-top: calc(var(--header-h) + 32px); }

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
.svp .rv.rv-in.svp-cta { animation: svp-in .8s var(--ease) backwards, svp-bg 14s ease-in-out .8s infinite; }

/* ---------- Redirection bar / Breadcrumbs ---------- */
.breadcrumbs-bar {
  display: flex; width: 100%; margin-bottom: 0.85rem;
}
.svp .breadcrumbs {
  display: inline-flex; align-items: center; flex-wrap: wrap; gap: .45rem;
  padding: .28rem .85rem; border-radius: 999px;
  background: rgba(255, 255, 255, .6);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  border: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 1px 2px rgba(11, 16, 32, .03);
  font-size: .81rem; line-height: 1.25; margin-bottom: .85rem;
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
.svp-hero { position: relative; overflow: hidden; }
.svp-hero .container { position: relative; z-index: 2; }
.svp-dots {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(79, 70, 229, .22) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
  mask-image: radial-gradient(ellipse at 70% 40%, #000 10%, transparent 70%);
  animation: svp-drift 24s linear infinite;
}
.svp-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
.svp-orb-a { width: 380px; height: 380px; top: -110px; right: 6%; background: var(--primary); opacity: .28; animation: svp-float 12s ease-in-out infinite; }
.svp-orb-b { width: 300px; height: 300px; bottom: -90px; left: 2%; background: var(--accent); opacity: .26; animation: svp-float 15s ease-in-out -5s infinite reverse; }
.svp-orb-c { width: 220px; height: 220px; top: 38%; left: 46%; background: var(--accent2); opacity: .2; animation: svp-float 18s ease-in-out -9s infinite; }

.svp-hero-copy > * { animation: svp-in .85s var(--ease) backwards; }
.svp-hero-copy > :nth-child(1) { animation-delay: .05s; }
.svp-hero-copy > :nth-child(2) { animation-delay: .15s; }
.svp-hero-copy > :nth-child(3) { animation-delay: .28s; }
.svp-hero-copy > :nth-child(4) { animation-delay: .42s; }
.svp-hero-copy > :nth-child(5) { animation-delay: .56s; }

.svp-hero h1 em {
  font-family: var(--serif); font-style: italic;
  background: var(--grad-warm); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: svp-grad 6s linear infinite;
}

/* Meta pill row */
.cs-meta-row {
  display: flex; flex-wrap: wrap; gap: .75rem; margin: 1.25rem 0 1.75rem;
}
.cs-meta-pill {
  display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .85rem;
  border-radius: 8px; font-size: .83rem; font-weight: 600;
  background: var(--surface); color: var(--ink); border: 1px solid var(--line);
}
.cs-meta-pill span { color: var(--muted); font-weight: 500; }

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
  background: radial-gradient(circle, rgba(6, 182, 212, .55), transparent 65%);
  animation: svp-float 9s ease-in-out infinite; pointer-events: none;
}
.svp-hero-card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: inherit;
  background: linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, .12) 50%, transparent 65%);
  background-size: 250% 100%; animation: svp-sheen 6s ease-in-out 1.8s infinite;
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
.svp-chip-a { top: -20px; right: 84px; animation: svp-bob 6s ease-in-out infinite; }
.svp-chip-b { bottom: -20px; left: 44px; animation: svp-bob 7s ease-in-out -3s infinite; }
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
.svp-proj:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.svp-thumb { position: relative; overflow: hidden; aspect-ratio: 800 / 520; background: var(--g, #1e1b4b); }
.svp-thumb img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .9s var(--ease); }
.svp-proj:hover .svp-thumb img { transform: scale(1.08); }
.svp-wb { display: flex; flex-direction: column; flex: 1; padding: 1.5rem; }
.svp-wb h3 { margin: .85rem 0 .5rem; color: var(--ink); font-size: 1.2rem; }
.svp-proj:hover .svp-wb h3 { color: var(--primary); }
.svp-wb p { margin: 0 0 1.25rem; color: var(--muted); line-height: 1.6; font-size: .92rem; }

/* ---------- CTA ---------- */
.svp-cta-sec { padding-top: 2rem; }
.svp-cta {
  position: relative; overflow: hidden; display: grid; grid-template-columns: 1.4fr 1fr; gap: 2.5rem; align-items: center;
  padding: clamp(1.75rem, 5vw, 3.5rem); border-radius: calc(var(--radius) + 10px); color: #fff;
  background: linear-gradient(120deg, var(--dark), #1b1a4b, var(--primary), #6d4aff, var(--dark));
  background-size: 300% 300%; animation: svp-bg 14s ease-in-out infinite;
  box-shadow: var(--shadow-lg);
}
.svp-cta > * { position: relative; z-index: 1; }
.svp-cta::before, .svp-cta::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  border: 1px solid rgba(255, 255, 255, .18);
}
.svp-cta::before { width: 420px; height: 420px; right: -120px; top: -160px; animation: svp-spin 40s linear infinite; border-style: dashed; }
.svp-cta::after { width: 260px; height: 260px; left: -90px; bottom: -120px; background: radial-gradient(circle, rgba(251, 146, 60, .35), transparent 70%); border: 0; animation: svp-float 10s ease-in-out infinite; }
.svp-cta .eyebrow { background: rgba(255, 255, 255, .12); color: #a5f3fc; }
.svp-cta h2 { font-size: clamp(1.7rem, 3.5vw, 2.8rem); margin: 1rem 0 .8rem; line-height: 1.15; color: #fff; }
.svp-cta .sub { color: rgba(255, 255, 255, .8); margin: 0; max-width: 56ch; }
.svp-cta-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
.svp-poc-card {
  text-align: center; padding: 2.2rem 2rem; border-radius: 22px;
  background: rgba(255, 255, 255, .1); border: 1px solid rgba(255, 255, 255, .22);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  animation: svp-bob 6s ease-in-out infinite;
}
.svp-poc-big {
  font-size: clamp(2.1rem, 5vw, 2.7rem); font-weight: 800;
  background: linear-gradient(90deg, #fff, #a5f3fc, #fdba74, #fff); background-size: 250% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent; animation: svp-grad 5s linear infinite;
}
.svp-poc-title { font-weight: 600; font-size: 1.1rem; margin-top: .3rem; color: #fff; }
.svp-poc-card p { color: rgba(255, 255, 255, .82); font-size: .9rem; margin: .6rem 0 0; }

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
}
@media (max-width: 640px) {
  .svp .cols.c2, .svp .cols.c3, .svp .cols.c4 { grid-template-columns: 1fr; gap: 1rem; }
  .svp .sec-head { margin-bottom: 2rem; }
  .svp-hero .cta-row { display: flex; flex-direction: column; gap: .75rem; }
  .svp-hero .cta-row .btn, .svp-cta-actions .btn { width: 100%; justify-content: center; text-align: center; }
  .svp-hero-card { padding: 1.4rem; }
  .svp-stats { grid-template-columns: repeat(2, 1fr); gap: 1.25rem 1rem; }
  .svp-orb-a { width: 240px; height: 240px; }
  .svp-orb-b { width: 200px; height: 200px; }
  .svp-orb-c { display: none; }
  .svp .card { padding: 1.4rem; }
  .cs-card { padding: 1.5rem; }
  .cs-deliv-card { padding: 1.2rem; }
  .svp-poc-card { padding: 1.6rem 1.25rem; }
  .svp-marquee { padding: 1rem 0; }
  .cs-meta-row { gap: .5rem; }
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

const onSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const onTilt = (e) => {
  if (!window.matchMedia("(hover: hover) and (min-width: 861px)").matches)
    return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
};
const onTiltEnd = (e) => {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
};

/* =========================================================
   Detail Component
   ========================================================= */

export default function WorkDetailPage({ project }) {
  // Safe fallback if project is missing
  if (!project) {
    return (
      <main id="main" className="svp">
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
      </main>
    );
  }

  // Related projects (excluding the current one)
  const relatedProjects = useMemo(() => {
    return caseStudiesData
      .filter((p) => p.slug !== project.slug && p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  return (
    <main id="main" className="svp">
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
            <div className="breadcrumbs-bar">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">
                  <svg
                    className="i bc-icon"
                    aria-hidden="true"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </Link>
                <span className="sep">/</span>
                <Link href="/work">Work</Link>
                <span className="sep">/</span>
                <span className="current">{project.title}</span>
              </nav>
            </div>

            <div style={{ marginBottom: "1rem" }}>
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
            </div>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Discuss a Similar Build{" "}
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#project-overview">
                Read Architecture Details ↓
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
                  <div
                    className="thumb svp-thumb"
                    style={{
                      "--g": rel.gradient || "linear-gradient(135deg,#4f46e5,#7c3aed)",
                    }}
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      width={800}
                      height={520}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

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
    </main>
  );
}
