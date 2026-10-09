"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { productsData } from "@/data/products";

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

/* ---------- Spotlight cards ---------- */
.svp-card {
  position: relative; display: flex; flex-direction: column; overflow: hidden;
  animation: svp-in .65s var(--ease) backwards; animation-delay: calc(var(--i, 0) * 80ms);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.svp-card > * { position: relative; z-index: 1; }
.svp-card::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0;
  background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(79, 70, 229, .12), transparent 45%);
  transition: opacity .35s;
}
.svp-card::after {
  content: ""; position: absolute; inset: 0; z-index: 2; pointer-events: none; border-radius: inherit;
  padding: 1.5px; background: var(--grad-warm); background-size: 200% 100%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0; transition: opacity .4s; animation: svp-grad 4s linear infinite;
}
.svp-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.svp-card:hover::before, .svp-card:hover::after { opacity: 1; }
.svp-card:hover .ico { background: var(--grad); color: #fff; transform: rotate(-8deg) scale(1.08); box-shadow: 0 12px 24px -10px rgba(79, 70, 229, .7); }
.svp-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.1rem; }
.svp-card .svc-num {
  position: static; font-family: var(--serif); font-style: italic; font-size: 1.9rem; font-weight: 700; line-height: 1;
  color: transparent; -webkit-text-stroke: 1px rgba(79, 70, 229, .35);
  transition: -webkit-text-stroke-color .3s, color .3s;
}
.svp-card:hover .svc-num { color: rgba(79, 70, 229, .12); -webkit-text-stroke-color: var(--primary); }
.svp-card h3 { margin: 0 0 .5rem; color: var(--ink); }
.svp-card p { margin: 0; color: var(--muted); line-height: 1.65; }
.svp-card .ticks { list-style: none; margin: 1.2rem 0; padding: 0; display: grid; gap: .6rem; }
.svp-card .ticks li { display: flex; align-items: flex-start; gap: .55rem; font-size: .94rem; color: var(--ink); }
.svp-card .ticks .i { flex-shrink: 0; width: 18px; height: 18px; margin-top: .15rem; color: var(--accent); }

/* Licensing cards */
.lic-card {
  position: relative; display: flex; flex-direction: column; overflow: hidden;
  border: 1px solid var(--line); border-radius: var(--radius); padding: 2rem;
  background: var(--bg); transition: transform .4s var(--ease), box-shadow .4s var(--ease), border-color .3s;
}
.lic-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--primary); }
.lic-badge {
  display: inline-block; padding: .3rem .8rem; border-radius: 999px; font-size: .78rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .03em; margin-bottom: 1.1rem;
  background: rgba(79, 70, 229, .08); color: var(--primary); align-self: flex-start;
}
.lic-badge.featured { background: var(--grad); color: #fff; box-shadow: 0 4px 12px rgba(79, 70, 229, .3); }
.lic-card h3 { margin: 0 0 .7rem; color: var(--ink); font-size: 1.3rem; }
.lic-card p { margin: 0 0 1.5rem; color: var(--muted); line-height: 1.65; }
.lic-card .btn { margin-top: auto; }

/* ---------- Process ---------- */
.svp-step { position: relative; overflow: hidden; transition: transform .4s var(--ease), box-shadow .4s var(--ease); }
.svp-step:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.svp-step::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
  background: var(--grad-warm); transform: scaleX(0); transform-origin: left;
  transition: transform 1s var(--ease); transition-delay: calc(var(--rv-delay, 0ms) + .5s);
}
.svp-step.rv-in::after { transform: scaleX(1); }
.svp-step-num {
  display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 50%;
  font-weight: 700; font-size: .85rem; color: #fff; background: var(--grad); margin-bottom: 1rem;
}
.svp-step .ico { display: grid; margin-bottom: 1rem; }
.svp-step:hover .ico { background: var(--grad); color: #fff; transform: translateY(-3px) scale(1.06); }
.svp-step h3 { margin: 0 0 .5rem; color: var(--ink); }
.svp-step p { margin: 0; color: var(--muted); line-height: 1.65; }

/* ---------- Why ---------- */
.svp-why {
  position: relative; display: flex; gap: 1.25rem; align-items: flex-start; overflow: hidden;
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.svp-why::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--grad);
  transform: scaleY(0); transform-origin: top; transition: transform .5s var(--ease);
}
.svp-why:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.svp-why:hover::before { transform: scaleY(1); }
.svp-why:hover .ico { background: var(--grad); color: #fff; transform: rotate(-8deg) scale(1.08); }
.svp-why h3 { margin: 0 0 .4rem; color: var(--ink); }
.svp-why p { margin: 0; color: var(--muted); line-height: 1.65; }

/* ---------- Related Products ---------- */
.svp .prod-rel-thumb {
  display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px;
  border-radius: 14px; color: #fff; margin-bottom: 1rem;
}

/* ---------- FAQ ---------- */
.svp .faq-wrap { max-width: 820px; margin: 0 auto; display: grid; gap: .9rem; }
.svp .faq-card {
  background: var(--bg); border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
  transition: border-color .3s, box-shadow .3s, transform .3s var(--ease);
}
.svp .faq-card:hover { transform: translateX(4px); }
.svp .faq-card.open { border-color: var(--primary); box-shadow: 0 18px 40px -26px var(--primary); }
.svp .faq-card-head {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; text-align: left;
  padding: 1.15rem 1.3rem; background: none; border: 0; cursor: pointer; font: inherit; font-weight: 600; color: var(--ink);
}
.svp .faq-icon {
  flex-shrink: 0; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%;
  background: rgba(79, 70, 229, .1); color: var(--primary); font-size: 1.25rem; line-height: 1;
  transition: transform .4s var(--ease), background .3s, color .3s;
}
.svp .faq-card.open .faq-icon { transform: rotate(135deg); background: var(--grad); color: #fff; }
.svp .faq-card-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s var(--ease); }
.svp .faq-card.open .faq-card-body { grid-template-rows: 1fr; }
.svp .faq-inner { overflow: hidden; min-height: 0; }
.svp .faq-inner p {
  margin: 0; padding: 0 1.3rem 1.3rem; color: var(--muted); line-height: 1.75;
  opacity: 0; transform: translateY(-6px); transition: opacity .35s .08s, transform .4s .08s var(--ease);
}
.svp .faq-card.open .faq-inner p { opacity: 1; transform: none; }

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
  .svp-why { flex-direction: column; gap: .9rem; }
  .svp .faq-card:hover { transform: none; }
  .svp .faq-card-head { padding: 1rem; font-size: .96rem; }
  .svp .faq-inner p { padding: 0 1rem 1rem; }
  .svp-poc-card { padding: 1.6rem 1.25rem; }
  .svp-marquee { padding: 1rem 0; }
  .lic-card { padding: 1.4rem; }
}
@media (hover: none) {
  .svp-card:hover, .svp-step:hover, .svp-why:hover, .lic-card:hover { transform: none; }
  .svp-card::before { display: none; }
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

export default function ProductDetailPage({ product }) {
  const [openFaq, setOpenFaq] = useState(0);

  // Safe fallback if product is missing
  if (!product) {
    return (
      <main id="main" className="svp">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="sec svp-nf">
          <div className="container">
            <span className="svp-nf-code">404</span>
            <h2>Product Not Found</h2>
            <p>The product you are looking for does not exist or has been relocated.</p>
            <Link href="/products" className="btn btn-primary">
              Browse All Products →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Related products (excluding the current one)
  const relatedProducts = useMemo(() => {
    return productsData
      .filter((p) => p.slug !== product.slug)
      .slice(0, 3);
  }, [product.slug]);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <main id="main" className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="product-detail-hero-title">
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
                  <svg className="i bc-icon" aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </Link>
                <span className="sep">/</span>
                <Link href="/products">Products</Link>
                <span className="sep">/</span>
                <span className="current">{product.shortTitle}</span>
              </nav>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-hero">
                <strong>{product.badge}</strong> · Turnkey Deployment
              </span>
            </div>

            <h1 id="product-detail-hero-title">
              {product.title.split("—")[0]}
              {product.title.includes("—") && (
                <em>— {product.title.split("—").slice(1).join("—")}</em>
              )}
            </h1>

            <p className="lead">{product.heroSubtitle || product.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", margin: "1rem 0 1.5rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: ".35rem", fontWeight: 700, color: "#f59e0b" }}>
                ★ {product.rating} <span style={{ color: "var(--muted)", fontWeight: 500 }}>({product.reviewsCount})</span>
              </span>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--muted)" }} />
              <span style={{ fontSize: ".9rem", fontWeight: 600, color: "var(--primary)" }}>
                {product.pricing}
              </span>
            </div>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Request Sandbox Demo{" "}
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#product-features">
                Explore Architecture ↓
              </a>
            </div>
          </div>

          <div className="svp-hero-wrap">
            <span className="svp-chip svp-chip-a" aria-hidden="true">
              <b /> Enterprise Ready
            </span>
            <span className="svp-chip svp-chip-b" aria-hidden="true">
              <b /> Turnkey Stack
            </span>

            <div
              className="bcard big svp-hero-card"
              onMouseMove={onTilt}
              onMouseLeave={onTiltEnd}
            >
              <div className="bcard-top">
                <span className="btag">{product.tag || product.category}</span>
                <span className="blink" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>

              <h3>{product.shortTitle} Engine</h3>
              <p>{product.tagline}</p>

              <div className="agent-live">
                <i /> Live Demo Sandbox Available
              </div>

              <div className="svp-stats">
                {product.metrics?.map((m, i) => (
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
      {product.techStack?.length > 0 && (
        <div className="svp-marquee" aria-hidden="true">
          <div className="svp-marquee-track">
            <div className="svp-marquee-group">
              {product.techStack.map((tech, idx) => (
                <span key={`tech1-${idx}`}>{tech}</span>
              ))}
            </div>
            <div className="svp-marquee-group">
              {product.techStack.map((tech, idx) => (
                <span key={`tech2-${idx}`}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= CORE MODULES & FEATURES ================= */}
      <section className="sec alt" id="product-features">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Platform Capabilities</span>
            <h2>Architected for Enterprise Performance &amp; Seamless Scale</h2>
            <p>{product.shortDescription}</p>
          </Reveal>

          <div className="cols c2">
            {product.features?.map((feat, idx) => (
              <Reveal
                key={idx}
                delay={idx * 80}
                className="card svp-card"
                onMouseMove={onSpot}
              >
                <div className="svp-card-top">
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href={`#${product.icon || "i-box"}`} />
                    </svg>
                  </span>
                  <span className="svc-num">{`0${idx + 1}`}</span>
                </div>

                <h3>{feat.title}</h3>
                <p>{feat.description}</p>

                {feat.points?.length > 0 && (
                  <ul className="ticks">
                    {feat.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LICENSING & DEPLOYMENT OPTIONS ================= */}
      {product.deploymentOptions?.length > 0 && (
        <section className="sec" id="deployment-models">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Deployment &amp; Licensing</span>
              <h2>Flexible Engagement Models to Match Your Technical Vision</h2>
              <p>
                Whether you need a fully managed cloud subscription, a white-label reseller engine,
                or 100% intellectual property source code ownership.
              </p>
            </Reveal>

            <div className="cols c3">
              {product.deploymentOptions.map((opt, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 90}
                  className="lic-card"
                >
                  <span className={`lic-badge ${idx === 0 ? "featured" : ""}`}>
                    {opt.badge}
                  </span>
                  <h3>{opt.title}</h3>
                  <p>{opt.description}</p>
                  <Link
                    href="/#contact"
                    className={`btn ${idx === 0 ? "btn-primary" : "btn-ghost"}`}
                  >
                    Inquire About This Model →
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= IMPLEMENTATION WORKFLOW ================= */}
      {product.workflow?.length > 0 && (
        <section className="sec alt" id="workflow">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Deployment Roadmap</span>
              <h2>How We Roll Out {product.shortTitle} for Your Organization</h2>
              <p>
                From initial sandbox evaluation to production DNS cutover and SLA onboarding.
              </p>
            </Reveal>

            <div className="cols c4">
              {product.workflow.map((st, idx) => (
                <Reveal
                  key={st.step}
                  delay={idx * 90}
                  className="card svp-step"
                  onMouseMove={onSpot}
                >
                  <span className="svp-step-num">{st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= STRATEGIC ADVANTAGES ================= */}
      {product.advantages?.length > 0 && (
        <section className="sec" id="advantages">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Business Impact</span>
              <h2>Key Advantages &amp; Quantifiable Return on Investment</h2>
              <p>
                Engineered to maximize operational velocity, reduce cloud overhead, and delight your users.
              </p>
            </Reveal>

            <div className="cols c2">
              {product.advantages.map((adv, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 80}
                  className="card svp-why"
                  onMouseMove={onSpot}
                >
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-zap" />
                    </svg>
                  </span>
                  <div>
                    <h3>{adv.title}</h3>
                    <p>{adv.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQS ================= */}
      {product.faqs?.length > 0 && (
        <section className="sec alt" id="faqs">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Product Questions</span>
              <h2>Frequently Asked Questions About {product.shortTitle}</h2>
              <p>
                Get answers to technical specifications, licensing boundaries, and integration support.
              </p>
            </Reveal>

            <div className="faq-wrap">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal
                    key={idx}
                    delay={idx * 70}
                    className={`faq-card ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${idx}`}
                      className="faq-card-head"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      className="faq-card-body"
                    >
                      <div className="faq-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= RELATED / COMPLEMENTARY PRODUCTS ================= */}
      {relatedProducts.length > 0 && (
        <section className="sec" id="related-products">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">More Solutions</span>
              <h2>Complementary Products in the Vision Portfolio</h2>
              <p>Explore other battle-tested software platforms designed to supercharge your stack.</p>
            </Reveal>

            <div className="cols c3">
              {relatedProducts.map((rel, idx) => (
                <Reveal
                  key={rel.id}
                  delay={idx * 80}
                  className="card svp-card"
                  onMouseMove={onSpot}
                >
                  <div className="svp-card-top">
                    <span className="prod-badge">{rel.badge}</span>
                    <span className="svc-num">{rel.number}</span>
                  </div>

                  <span
                    className="ico"
                    style={{
                      background: rel.gradient
                        ? `${rel.gradient.replace("linear-gradient", "radial-gradient")}`
                        : undefined
                    }}
                  >
                    <svg className="i" aria-hidden="true">
                      <use href={`#${rel.icon || "i-box"}`} />
                    </svg>
                  </span>

                  <h3>{rel.shortTitle}</h3>
                  <p>{rel.shortDescription}</p>

                  <div style={{ marginTop: "auto", paddingTop: "1.2rem" }}>
                    <Link href={`/products/${rel.slug}`} className="more">
                      Explore Platform
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
              <span className="eyebrow">Immediate Deployment</span>
              <h2>Ready to Experience {product.shortTitle} in Action?</h2>
              <p className="sub">
                Connect with our solutions engineering team today. We&apos;ll configure a private
                staging environment with your sample data and walk through architecture options.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/#contact">
                  Request Sandbox Demo →
                </Link>
                <Link className="btn btn-ghost" href="/products">
                  View All Products
                </Link>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">24–48 Hrs</div>
                <div className="svp-poc-title">Private Sandbox Access</div>
                <p>
                  Zero commitment. Full administrative access to test real-world scenarios
                  and inspect API documentation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
