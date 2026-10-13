"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { industriesData, industryCategories } from "@/data/industries";
import { caseStudiesData } from "@/data/caseStudies";

/* =========================================================
   Page styles (scoped under .svp) — Modeled on Metizsoft
   ========================================================= */
const styles = `
.svp { overflow-x: clip; position: relative; }
.svp section[id] { scroll-margin-top: calc(var(--header-h, 72px) + 24px); }

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

/* ---------- Breadcrumbs ---------- */
.breadcrumbs-bar {
  display: flex; width: 100%; margin-bottom: 1rem;
}
.svp .breadcrumbs {
  display: inline-flex; align-items: center; flex-wrap: wrap; gap: .45rem;
  padding: .32rem .95rem; border-radius: 999px;
  background: rgba(255, 255, 255, .75);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  border: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 1px 3px rgba(11, 16, 32, .04);
  font-size: .82rem; line-height: 1.25; margin-bottom: .85rem;
  width: fit-content;
}
.svp .breadcrumbs a {
  display: inline-flex; align-items: center; gap: .35rem;
  color: var(--muted); font-weight: 500; text-decoration: none;
  transition: color var(--t) var(--ease);
}
.svp .breadcrumbs a:hover { color: var(--primary); transform: none; }
.svp .breadcrumbs .bc-icon {
  width: 14px; height: 14px; flex-shrink: 0; color: var(--muted);
}
.svp .breadcrumbs .sep {
  color: #94a3b8; font-size: .8rem; font-weight: 500;
  padding: 0 .15rem; user-select: none;
}
.svp .breadcrumbs .current {
  color: var(--ink); font-weight: 600; letter-spacing: .01em;
}

/* ---------- Eyebrows & Badges ---------- */
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
.svp .eyebrow-hero {
  display: inline-flex; align-items: center; gap: .55rem;
  padding: .42rem 1.1rem; border-radius: 999px;
  background: rgba(79, 70, 229, .08); color: var(--primary);
  font-weight: 600; font-size: .86rem; letter-spacing: .01em;
  border: 1px solid rgba(79, 70, 229, .15);
}
.svp .eyebrow-hero strong {
  color: var(--primary); font-weight: 700;
}

/* ---------- Typography & Section Headers ---------- */
.svp .sec-head { text-align: center; max-width: 820px; margin: 0 auto 3rem; }
.svp .sec-head h2 { margin: 1rem 0 .8rem; line-height: 1.18; color: var(--ink); font-size: clamp(1.8rem, 3.8vw, 2.6rem); }
.svp .sec-head p { color: var(--muted); margin: 0; font-size: clamp(.98rem, 1.8vw, 1.08rem); line-height: 1.7; }
.svp .hi {
  background: var(--grad-warm); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp .sec.alt { background: var(--surface); }

/* ---------- Hero (Metizsoft style + responsive stat bar) ---------- */
.svp-hero {
  position: relative; overflow: hidden; padding-top: clamp(2rem, 5vw, 4rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}
.svp-hero .container { position: relative; z-index: 2; }
.svp-dots {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(79, 70, 229, .2) 1.2px, transparent 1.2px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%);
}
.svp-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
.svp-orb-a { width: 440px; height: 440px; top: -140px; right: 8%; background: var(--primary); opacity: .22; animation: svp-float 14s ease-in-out infinite; }
.svp-orb-b { width: 360px; height: 360px; bottom: -100px; left: 4%; background: var(--accent); opacity: .2; animation: svp-float 16s ease-in-out -6s infinite reverse; }

.svp-hero-center {
  max-width: 900px; margin: 0 auto; text-align: center;
}
.svp-hero-center h1 {
  font-size: clamp(2.2rem, 5vw, 3.6rem); line-height: 1.15;
  margin: 1.2rem 0 1.2rem; color: var(--ink); font-weight: 800; letter-spacing: -.02em;
}
.svp-hero-center h1 em {
  font-family: var(--serif); font-style: italic; font-weight: 700;
  background: var(--grad-warm); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: svp-grad 6s linear infinite;
}
.svp-hero-center p.lead {
  font-size: clamp(1.02rem, 2vw, 1.18rem); line-height: 1.75;
  color: var(--muted); max-width: 760px; margin: 0 auto 2.2rem;
}
.svp-hero .cta-row {
  display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 1rem; margin-bottom: 3.5rem;
}
.svp-hero .cta-row .btn { padding: .85rem 1.85rem; font-size: .98rem; font-weight: 600; }

/* 4-Stat Bar (Metizsoft SubpageHero stats) */
.svp-hero-stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09);
  border-radius: 20px; box-shadow: var(--shadow-md);
  padding: 1.5rem 1rem; margin: 0 auto; max-width: 1040px;
  position: relative; z-index: 2;
}
.svp-stat-box {
  text-align: center; padding: .5rem 1.2rem; position: relative;
}
.svp-stat-box:not(:last-child)::after {
  content: ""; position: absolute; right: 0; top: 20%; bottom: 20%; width: 1px;
  background: rgba(15, 23, 42, .08);
}
.svp-stat-num {
  font-size: clamp(1.85rem, 3.6vw, 2.5rem); font-weight: 800; line-height: 1.1;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  font-variant-numeric: tabular-nums;
}
.svp-stat-label {
  font-size: .82rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: .04em; color: var(--muted); margin-top: .4rem;
}

/* ---------- Marquee ribbon ---------- */
.svp-marquee {
  padding: 1.25rem 0; border-block: 1px solid var(--line);
  background: var(--bg); overflow: hidden;
}
.svp-marquee-track {
  display: flex; width: max-content; animation: svp-marq 38s linear infinite;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.svp-marquee:hover .svp-marquee-track { animation-play-state: paused; }
.svp-marquee-group { display: flex; gap: .75rem; padding-right: .75rem; }
.svp-marquee-group span {
  white-space: nowrap; padding: .45rem 1.1rem; border-radius: 999px; font-weight: 600; font-size: .88rem;
  color: var(--primary); background: var(--surface); border: 1px solid var(--line);
  transition: background .25s, color .25s, transform .25s var(--ease);
}
.svp-marquee-group span:hover { background: var(--primary); color: #fff; transform: translateY(-2px); }

/* ---------- Filter Tabs ---------- */
.svp .filter-wrap { position: relative; margin: 0 auto 2.5rem; max-width: 960px; }
.svp .filter-tabs { display: flex; gap: .55rem; justify-content: center; flex-wrap: wrap; }
.svp .filter-tab {
  display: inline-flex; align-items: center; gap: .5rem; cursor: pointer; flex-shrink: 0;
  padding: .6rem 1.15rem; border-radius: 999px; font: inherit; font-weight: 600; font-size: .92rem;
  white-space: nowrap; color: var(--ink); background: #ffffff; border: 1px solid var(--line);
  box-shadow: 0 1px 2px rgba(11, 16, 32, .03);
  transition: transform .3s var(--ease), background .3s, color .3s, border-color .3s, box-shadow .3s;
}
.svp .filter-tab em {
  font-style: normal; font-size: .72rem; padding: .1rem .48rem; border-radius: 999px;
  background: var(--surface); color: var(--muted); transition: background .3s, color .3s;
}
.svp .filter-tab:hover { border-color: var(--primary); transform: translateY(-2px); }
.svp .filter-tab.active {
  color: #fff; border-color: transparent; background: var(--grad);
  box-shadow: 0 10px 24px -8px rgba(79, 70, 229, .65); transform: translateY(-2px);
}
.svp .filter-tab.active em { background: rgba(255, 255, 255, .24); color: #fff; }

/* ---------- Metizsoft-styled Unified Industry Cards (ind-ucard) ---------- */
.ind-cards-grid {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.65rem;
  align-items: stretch;
}
.ind-ucard {
  position: relative; display: flex; flex-direction: column;
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09);
  border-radius: 20px; padding: 2rem; text-decoration: none;
  box-shadow: 0 4px 20px -3px rgba(11, 16, 32, .04);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease), border-color .3s;
  overflow: hidden;
  height: 100%;
}
.ind-ucard > * { position: relative; z-index: 1; }
.ind-ucard::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0;
  background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(79, 70, 229, .09), transparent 50%);
  transition: opacity .35s;
}
.ind-ucard::after {
  content: ""; position: absolute; inset: 0; z-index: 2; pointer-events: none; border-radius: inherit;
  padding: 1.5px; background: var(--grad-warm); background-size: 200% 100%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0; transition: opacity .4s; animation: svp-grad 4s linear infinite;
}
.ind-ucard:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px rgba(79, 70, 229, .18);
  border-color: rgba(79, 70, 229, .25);
}
.ind-ucard:hover::before, .ind-ucard:hover::after { opacity: 1; }

.ind-ucard-top {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1.25rem;
}
.ind-ucard-ico {
  width: 52px; height: 52px; flex-shrink: 0; display: inline-grid; place-items: center;
  border-radius: 16px; color: var(--primary);
  background: linear-gradient(135deg, rgba(79, 70, 229, .12), rgba(6, 182, 212, .14));
  transition: transform .45s var(--ease), background .3s, color .3s, box-shadow .3s;
}
.ind-ucard-ico svg { width: 26px; height: 26px; }
.ind-ucard:hover .ind-ucard-ico {
  background: var(--grad); color: #fff; transform: rotate(-8deg) scale(1.08);
  box-shadow: 0 12px 24px -10px rgba(79, 70, 229, .7);
}
.ind-ucard-badge {
  font-family: var(--serif); font-style: italic; font-size: 1.8rem; font-weight: 700;
  line-height: 1; color: transparent; -webkit-text-stroke: 1px rgba(79, 70, 229, .32);
  transition: -webkit-text-stroke-color .3s, color .3s;
}
.ind-ucard:hover .ind-ucard-badge {
  color: rgba(79, 70, 229, .1); -webkit-text-stroke-color: var(--primary);
}

.ind-ucard h3 {
  font-size: 1.32rem; font-weight: 700; margin: 0 0 .6rem; color: var(--ink);
  transition: color .3s;
  min-height: 2.7em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ind-ucard:hover h3 { color: var(--primary); }
.ind-ucard p {
  color: var(--muted); font-size: .93rem; line-height: 1.68; margin: 0 0 1.2rem;
  min-height: 5em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ind-ucard-ticks {
  list-style: none; margin: 0 0 1.3rem; padding: 0; display: grid; gap: .55rem;
  min-height: 96px;
}
.ind-ucard-ticks li {
  display: flex; align-items: flex-start; gap: .5rem; font-size: .88rem; color: var(--ink); font-weight: 500;
  line-height: 1.4;
}
.ind-ucard-ticks li span {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ind-ucard-ticks svg {
  flex-shrink: 0; width: 17px; height: 17px; margin-top: .15rem; color: var(--accent);
}

.ind-ucard-tags {
  display: flex; flex-wrap: wrap; gap: .4rem; padding-top: 1rem;
  border-top: 1px dashed rgba(15, 23, 42, .09); margin-top: auto;
  min-height: 58px;
  align-content: flex-start;
}
.ind-ucard-tags span {
  font-size: .75rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px;
  background: #f1f5f9; color: var(--primary); transition: background .3s, color .3s;
}
.ind-ucard:hover .ind-ucard-tags span {
  background: rgba(79, 70, 229, .1); color: var(--primary);
}

.ind-ucard-link {
  display: inline-flex; align-items: center; gap: .45rem; margin-top: 1.15rem;
  font-weight: 700; font-size: .92rem; color: var(--primary);
}
.ind-ucard-link svg {
  width: 17px; height: 17px; transition: transform .35s var(--ease);
}
.ind-ucard:hover .ind-ucard-link svg {
  transform: translateX(6px);
}

/* ---------- Trust & Metrics Section (istats) ---------- */
.svp-istats {
  padding: 5rem 0; background: linear-gradient(180deg, #f8fafc, #ffffff);
  border-block: 1px solid var(--line);
}
.svp-istats-top {
  display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 2.5rem; align-items: center; margin-bottom: 3.5rem;
}
.svp-istats-top h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem); line-height: 1.2; color: var(--ink); margin: 0;
}
.svp-istats-top p {
  color: var(--muted); font-size: 1.05rem; line-height: 1.7; margin: 0;
}
.svp-istats-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;
}
.svp-istats-card {
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .08);
  border-radius: 18px; padding: 2rem 1.5rem; text-align: center;
  box-shadow: 0 4px 16px -2px rgba(11, 16, 32, .03);
  transition: transform .35s var(--ease), box-shadow .35s;
}
.svp-istats-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.svp-istats-n {
  font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800; line-height: 1.1; margin-bottom: .5rem;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  font-variant-numeric: tabular-nums;
}
.svp-istats-card p {
  color: var(--muted); font-size: .92rem; font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: .03em;
}

/* ---------- Standout Projects Grid ---------- */
.svp .cols { display: grid; gap: 1.65rem; }
.svp .cols.c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.svp .cols.c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; }
.svp .cols.c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.svp .card {
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09);
  border-radius: 20px; padding: 2rem; box-shadow: var(--shadow);
  height: 100%; display: flex; flex-direction: column;
}
.svp .card.flush { padding: 0; }
.svp-proj { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.svp-thumb {
  position: relative; overflow: hidden; height: 220px; background: #0b1220;
  display: block; padding: 0 !important; margin: 0;
}
.svp-thumb img {
  display: block; width: 100% !important; height: 100% !important;
  object-fit: cover !important; object-position: center top !important;
  transition: transform .8s var(--ease);
}
.svp-proj:hover .svp-thumb img { transform: scale(1.07); }
.svp-wb { display: flex; flex-direction: column; flex: 1; padding: 1.75rem; }
.svp-tags {
  display: flex; flex-wrap: wrap; gap: .4rem; min-height: 28px;
  align-content: flex-start; margin-bottom: .4rem;
}
.svp-tags span {
  font-size: .74rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px;
  background: var(--surface); color: var(--primary);
}
.svp-wb h3 {
  margin: .4rem 0 .5rem; color: var(--ink); font-size: 1.22rem; font-weight: 700; transition: color .3s;
  min-height: 2.7em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.svp-proj:hover .svp-wb h3 { color: var(--primary); }
.svp-wb p {
  margin: 0 0 1.25rem; color: var(--muted); line-height: 1.65; font-size: .92rem;
  min-height: 4.8em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.svp-met {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; margin-top: auto;
  padding-top: 1.15rem; border-top: 1px dashed var(--line);
  min-height: 56px;
}
.svp-met > div { min-width: 0; }
.svp-met strong {
  display: block; font-size: 1.25rem; font-weight: 800; font-variant-numeric: tabular-nums;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.svp-met span {
  display: block; font-size: .74rem; color: var(--muted); font-weight: 600; margin-top: .15rem;
  line-height: 1.35; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* ---------- Step / Process & Why Us ---------- */
.svp-step { position: relative; overflow: hidden; transition: transform .4s var(--ease), box-shadow .4s var(--ease); }
.svp-step:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.svp-step-num {
  display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 50%;
  font-weight: 700; font-size: .85rem; color: #fff; background: var(--grad); margin-bottom: 1.1rem;
}
.svp-step h3 { margin: 0 0 .5rem; color: var(--ink); font-size: 1.15rem; }
.svp-step p { margin: 0; color: var(--muted); line-height: 1.65; font-size: .92rem; }

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
.svp-why .ico {
  width: 52px; height: 52px; flex-shrink: 0; display: inline-grid; place-items: center;
  border-radius: 16px; color: var(--primary);
  background: linear-gradient(135deg, rgba(79, 70, 229, .12), rgba(6, 182, 212, .14));
  transition: transform .45s var(--ease), background .3s, color .3s;
}
.svp-why .ico svg { width: 25px; height: 25px; }
.svp-why:hover .ico { background: var(--grad); color: #fff; transform: rotate(-8deg) scale(1.08); }
.svp-why h3 { margin: 0 0 .4rem; color: var(--ink); font-size: 1.18rem; }
.svp-why p { margin: 0; color: var(--muted); line-height: 1.65; font-size: .93rem; }

/* ---------- FAQ ---------- */
.svp .faq-wrap { max-width: 860px; margin: 0 auto; display: grid; gap: 1rem; }
.svp .faq-card {
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09); border-radius: 16px; overflow: hidden;
  transition: border-color .3s, box-shadow .3s, transform .3s var(--ease);
}
.svp .faq-card:hover { transform: translateX(4px); }
.svp .faq-card.open { border-color: var(--primary); box-shadow: 0 16px 36px -20px var(--primary); }
.svp .faq-card-head {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; text-align: left;
  padding: 1.25rem 1.4rem; background: none; border: 0; cursor: pointer; font: inherit; font-weight: 600; color: var(--ink);
  font-size: 1.02rem;
}
.svp .faq-icon {
  flex-shrink: 0; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%;
  background: rgba(79, 70, 229, .1); color: var(--primary); font-size: 1.3rem; line-height: 1;
  transition: transform .4s var(--ease), background .3s, color .3s;
}
.svp .faq-card.open .faq-icon { transform: rotate(135deg); background: var(--grad); color: #fff; }
.svp .faq-card-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s var(--ease); }
.svp .faq-card.open .faq-card-body { grid-template-rows: 1fr; }
.svp .faq-inner { overflow: hidden; min-height: 0; }
.svp .faq-inner p {
  margin: 0; padding: 0 1.4rem 1.4rem; color: var(--muted); line-height: 1.75; font-size: .95rem;
  opacity: 0; transform: translateY(-6px); transition: opacity .35s .08s, transform .4s .08s var(--ease);
}
.svp .faq-card.open .faq-inner p { opacity: 1; transform: none; }

/* ---------- Final CTA Banner (Metizsoft final-cta style) ---------- */
.svp-cta-sec { padding: 4rem 0 2rem; }
.svp-final-box {
  position: relative; overflow: hidden; display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; align-items: center;
  padding: clamp(2rem, 5vw, 4rem); border-radius: 28px; color: #fff;
  background: linear-gradient(135deg, #0b1020 0%, #1b1a4b 55%, var(--primary-600) 100%);
  box-shadow: var(--shadow-lg);
}
.svp-final-box > * { position: relative; z-index: 1; }
.svp-final-box::before {
  content: ""; position: absolute; width: 500px; height: 500px; right: -140px; top: -180px; border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, .45), transparent 70%); pointer-events: none;
}
.svp-final-box::after {
  content: ""; position: absolute; width: 340px; height: 340px; left: -100px; bottom: -140px; border-radius: 50%;
  background: radial-gradient(circle, rgba(251, 146, 60, .35), transparent 70%); pointer-events: none;
}
.svp-final-box .marker {
  display: inline-block; padding: .35rem .95rem; border-radius: 999px; font-size: .84rem; font-weight: 600;
  background: rgba(255, 255, 255, .12); color: #a5f3fc; margin-bottom: 1rem;
}
.svp-final-box h2 {
  font-size: clamp(2rem, 4vw, 3rem); line-height: 1.18; color: #fff; margin: 0 0 1rem;
}
.svp-final-box h2 .accent {
  background: linear-gradient(90deg, #fdba74, #f472b6); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp-final-box p.sub {
  color: rgba(255, 255, 255, .82); font-size: 1.05rem; line-height: 1.7; margin: 0 0 2rem; max-width: 54ch;
}
.svp-final-actions { display: flex; flex-wrap: wrap; gap: 1rem; }
.svp-poc-card {
  text-align: center; padding: 2.2rem 2rem; border-radius: 22px;
  background: rgba(255, 255, 255, .08); border: 1px solid rgba(255, 255, 255, .18);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
}
.svp-poc-big {
  font-size: clamp(2.2rem, 5vw, 3rem); font-weight: 800; line-height: 1.1;
  background: linear-gradient(90deg, #fff, #a5f3fc, #fdba74); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp-poc-title { font-weight: 700; font-size: 1.15rem; margin-top: .4rem; color: #fff; }
.svp-poc-card p { color: rgba(255, 255, 255, .8); font-size: .92rem; margin: .75rem 0 0; line-height: 1.6; }

/* ---------- Keyframes ---------- */
@keyframes svp-in { from { opacity: 0; transform: translateY(22px); } }
@keyframes svp-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, 24px); } }
@keyframes svp-grad { to { background-position: 200% 0; } }
@keyframes svp-marq { to { transform: translateX(-50%); } }
@keyframes svp-ping { 70% { box-shadow: 0 0 0 9px rgba(251, 146, 60, 0); } 100% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); } }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .ind-cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .svp .cols.c3, .svp .cols.c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .svp-istats-top { grid-template-columns: 1fr; gap: 1rem; }
}
@media (max-width: 860px) {
  .svp-final-box { grid-template-columns: 1fr; gap: 2rem; }
  .svp-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 1.5rem 0; padding: 1.5rem 1rem; }
  .svp-stat-box:nth-child(2)::after { display: none; }
}
@media (max-width: 900px) {
  .svp .filter-wrap {
    margin-left: calc(var(--gutter, 1.25rem) * -1) !important;
    margin-right: calc(var(--gutter, 1.25rem) * -1) !important;
    padding: 0 !important;
    overflow: hidden;
  }
  .svp .filter-wrap::after {
    content: ""; position: absolute; top: 0; right: 0; bottom: 0; width: 36px; pointer-events: none;
    background: linear-gradient(90deg, transparent, #ffffff); z-index: 2;
  }
  .svp .filter-tabs {
    flex-wrap: nowrap !important;
    justify-content: flex-start !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    touch-action: pan-x !important;
    scroll-snap-type: none !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    padding: .35rem var(--gutter, 1.25rem) .75rem !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .svp .filter-tabs::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
  .svp .filter-tab {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
    scroll-snap-align: none !important;
  }
}
@media (max-width: 680px) {
  .ind-cards-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  .svp .cols.c2, .svp .cols.c3, .svp .cols.c4 { grid-template-columns: 1fr; gap: 1.25rem; }
  .svp-istats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .svp-hero .cta-row { flex-direction: column; width: 100%; }
  .svp-hero .cta-row .btn, .svp-final-actions .btn { width: 100%; text-align: center; justify-content: center; }
  .svp .card, .ind-ucard { padding: 1.5rem; }
  .svp-why { flex-direction: column; gap: 1rem; }
}
@media (max-width: 480px) {
  .svp-hero-stats { grid-template-columns: 1fr; gap: 1.2rem 0; }
  .svp-stat-box::after { display: none !important; }
  .svp-istats-grid { grid-template-columns: 1fr; }
}

@media (hover: none) {
  .ind-ucard:hover, .svp-step:hover, .svp-why:hover, .svp-proj:hover .svp-thumb img { transform: none; }
  .ind-ucard::before { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .svp *, .svp *::before, .svp *::after { animation: none !important; transition-duration: .01ms !important; }
  .svp .rv { opacity: 1 !important; transform: none !important; }
}
`;

/* =========================================================
   Helpers
   ========================================================= */

function useInView(threshold = 0.1) {
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
      { threshold, rootMargin: "0px 0px -40px 0px" },
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
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, countable]);

  return (
    <span ref={ref}>
      {countable ? `${prefix}${n.toFixed(decimals)}${suffix}` : text}
    </span>
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

// Mouse-follow spotlight
const onSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

function ProjectCard({ proj, delay = 0 }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="card flush svp-proj"
      onMouseMove={onSpot}
    >
      <div
        className="thumb svp-thumb"
        style={{
          "--g": proj.gradient || "linear-gradient(135deg,#4f46e5,#7c3aed)",
        }}
      >
        <img
          src={proj.image}
          alt={proj.title}
          width={800}
          height={520}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="wb svp-wb">
        {proj.tags?.length > 0 && (
          <div className="tags svp-tags">
            {proj.tags.slice(0, 2).map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>
        )}
        <h3>
          <Link href={`/work/${proj.slug || proj.id}`}>
            {proj.title}
          </Link>
        </h3>
        <p>{proj.description || proj.shortPitch}</p>
        {proj.metrics?.length > 0 && (
          <div className="met svp-met">
            {proj.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx}>
                <strong>
                  <CountUp value={m.value} />
                </strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* =========================================================
   Static Data
   ========================================================= */

const heroStats = [
  { value: "14+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "125+", label: "Engineering Specialists" },
  { value: "12+", label: "Industry Partnerships" },
];

const generalIndustryFaqs = [
  {
    q: "How do you handle industry-specific regulatory compliance (HIPAA, PCI-DSS, SOC-2)?",
    a: "We embed compliance directly into our DevOps delivery pipelines: automated static code analysis (SAST/DAST), zero-knowledge tokenization for sensitive PII/PAN fields, Business Associate Agreements (BAAs) for healthcare, and audit-ready logging compliant with SOC-2 Type II standards.",
  },
  {
    q: "Can your engineering team integrate with legacy enterprise mainframes and EHRs?",
    a: "Yes. We frequently build modern REST and GraphQL facade layers on top of legacy core banking engines (FIS, Fiserv, Jack Henry), hospital EHRs (Epic, Cerner via FHIR v4), and legacy industrial SCADA systems without requiring risky database refactoring.",
  },
  {
    q: "Do you build custom software or rely on off-the-shelf templates?",
    a: "We build bespoke, production-grade applications tailored to your proprietary business workflows. You receive 100% intellectual property ownership, zero ongoing licensing penalties, and clean, documented source code repositories.",
  },
  {
    q: "What engagement models are available for enterprise industry projects?",
    a: "We offer dedicated Agile Squads with senior domain architects, Fixed-Price Milestone Builds for clearly scoped projects, and 2–5 Day Proof-of-Concepts (POCs) to evaluate architectural feasibility before large-scale budget allocation.",
  },
];

const methodologySteps = [
  {
    n: "01",
    icon: "i-shield",
    title: "Regulatory & Threat Scoping",
    text: "We identify industry compliance frameworks (HIPAA, PCI-DSS, GDPR, ISA-95), data residency mandates, and threat vectors before writing code.",
  },
  {
    n: "02",
    icon: "i-cpu",
    title: "Domain Architecture & POC",
    text: "Database schemas with Row-Level Security, zero-trust token vaults, and rapid 2–5 day interactive prototypes to de-risk key workflows.",
  },
  {
    n: "03",
    icon: "i-code",
    title: "Agile Sprints & Audits",
    text: "Two-week agile sprints with bi-weekly live staging demos, automated penetration test checks, and continuous client review channels.",
  },
  {
    n: "04",
    icon: "i-badge",
    title: "Production Cutover & SLA",
    text: "Zero-downtime cutover, 24/7 telemetry monitoring, Core Web Vitals optimization, and SLA-backed ongoing maintenance.",
  },
];

const whyIndustryItems = [
  {
    icon: "i-shield",
    title: "Built-In Regulatory Rigor",
    text: "We design software from day one to pass rigorous third-party enterprise compliance audits, reducing regulatory risk and legal overhead.",
  },
  {
    icon: "i-speed",
    title: "Sub-Second Global Performance",
    text: "Edge caching, optimized database indexes, and event-driven microservices ensure snappy sub-250ms responses even at peak scale.",
  },
  {
    icon: "i-lock",
    title: "100% IP & Source Code Ownership",
    text: "All intellectual property, cloud infrastructure scripts, and repositories transfer directly to your company upon milestone delivery.",
  },
  {
    icon: "i-headset",
    title: "Senior Domain Engineers",
    text: "No junior bench or offshore runarounds. You work directly with veteran software engineers and architects who understand your domain.",
  },
];

/* =========================================================
   Page Component
   ========================================================= */

export default function IndustriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredIndustries =
    selectedCategory === "All"
      ? industriesData
      : industriesData.filter((ind) => ind.category === selectedCategory);

  const counts = useMemo(() => {
    const map = { All: industriesData.length };
    industriesData.forEach((ind) => {
      map[ind.category] = (map[ind.category] || 0) + 1;
    });
    return map;
  }, []);

  const marqueeTags = useMemo(
    () => [
      "PCI-DSS Level 1",
      "HIPAA Certified",
      "SOC-2 Type II",
      "RESO Web API",
      "FDA 21 CFR Part 11",
      "ISA-95 Industrial IoT",
      "GDPR & CCPA",
      "FERPA & COPPA",
      "Open Banking PSD2",
      "Core Web Vitals 95+",
    ],
    [],
  );

  const toggleFaq = (index) =>
    setOpenFaq((prev) => (prev === index ? null : index));

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO (Modeled on Metizsoft SubpageHero) ================= */}
      <section className="svp-hero" aria-labelledby="industries-hero-title">
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />

        <div className="container">
          <div className="svp-hero-center">
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-hero">
                <strong>Industry-Specific</strong> AI &amp; Software Engineering
              </span>
            </div>

            <h1 id="industries-hero-title">
              Industries We Serve:{" "}
              <em>AI-Powered Solutions Across Every Industry</em>
            </h1>

            <p className="lead">
              Vision Technolabs serves over 9 enterprise verticals including Fintech, Healthcare,
              eCommerce, Logistics, Manufacturing, and SaaS. We engineer domain-specific
              software architectures, automated workflows, and compliance-first platforms
              built to satisfy strict regulations and capture market share.
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Talk to an Industry Specialist{" "}
                <svg className="i" aria-hidden="true" width="18" height="18">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#industries-catalog">
                Explore Industry Sectors ↓
              </a>
            </div>
          </div>

          {/* 4-Stat Bar (Metizsoft style) */}
          <div className="svp-hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="svp-stat-box">
                <div className="svp-stat-num">
                  <CountUp value={stat.value} />
                </div>
                <div className="svp-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE & STANDARDS MARQUEE ================= */}
      <div className="svp-marquee" aria-label="Compliance and technical standards">
        <div className="svp-marquee-track">
          {[0, 1].map((g) => (
            <div className="svp-marquee-group" key={g} aria-hidden={g === 1}>
              {marqueeTags.map((t) => (
                <span key={`${g}-${t}`}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= INDUSTRIES CATALOG (ind-cards-grid) ================= */}
      <section className="sec" id="industries-catalog">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Industries We Serve</span>
            <h2>
              Industries We Serve: <span className="hi">Solutions</span> for Your Vertical
            </h2>
            <p>
              Every industry has unique challenges. We tailor our software systems &amp; AI agents to
              your domain, compliance needs, and day-to-day reality. Our team combines deep domain
              knowledge with production-grade engineering to deliver proven outcomes.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="filter-wrap">
            <div
              className="filter-tabs"
              role="tablist"
              aria-label="Industry Categories"
            >
              {industryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
                  onClick={(e) => {
                    setSelectedCategory(cat);
                    e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                  }}
                >
                  {cat}
                  {counts[cat] !== undefined && <em>{counts[cat]}</em>}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Cards (Modeled on Metizsoft ind-ucard) */}
          <div
            className="ind-cards-grid"
            key={selectedCategory}
            role="tabpanel"
          >
            {filteredIndustries.map((ind, i) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="ind-ucard"
                style={{ "--i": i }}
                onMouseMove={onSpot}
              >
                <div className="ind-ucard-top">
                  <div className="ind-ucard-ico">
                    <svg aria-hidden="true">
                      <use href={`#${ind.icon || "i-code"}`} />
                    </svg>
                  </div>
                  <span className="ind-ucard-badge">{ind.number}</span>
                </div>

                <h3>{ind.title}</h3>
                <p>{ind.shortDescription || ind.description}</p>

                {/* Key Solutions bullets */}
                {ind.solutions?.length > 0 && (
                  <ul className="ind-ucard-ticks">
                    {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                      <li key={sIdx}>
                        <svg aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>{sol.title}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Pill Tags at bottom (Metizsoft ind-ucard-tags) */}
                {ind.pillTags?.length > 0 && (
                  <div className="ind-ucard-tags">
                    {ind.pillTags.map((tag, tIdx) => (
                      <span key={tIdx}>{tag}</span>
                    ))}
                  </div>
                )}

                <div className="ind-ucard-link">
                  Explore Solutions{" "}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <p className="svp-empty" style={{ textAlign: "center", padding: "3rem 0", color: "var(--muted)" }}>
              No industries found in this category. Try another filter.
            </p>
          )}
        </div>
      </section>

      {/* ================= METRICS & TRUST BANNER (Metizsoft istats) ================= */}
      <section className="svp-istats">
        <div className="container">
          <div className="svp-istats-top">
            <div>
              <h2>
                Building Software &amp; AI Solutions That Scale with{" "}
                <span className="hi">Intelligent Engineering</span>
              </h2>
            </div>
            <div>
              <p>
                Vision Technolabs is a global engineering partner. We help enterprises and
                high-growth brands design, build, and modernize digital products. We embed domain-tested
                technologies where they bring real value—supporting smarter decisions, efficient workflows,
                and scalable growth.
              </p>
            </div>
          </div>

          <div className="svp-istats-grid">
            <div className="svp-istats-card">
              <div className="svp-istats-n">
                <CountUp value="14+" />
              </div>
              <p>Years of Experience</p>
            </div>
            <div className="svp-istats-card">
              <div className="svp-istats-n">
                <CountUp value="500+" />
              </div>
              <p>Projects Delivered</p>
            </div>
            <div className="svp-istats-card">
              <div className="svp-istats-n">
                <CountUp value="125+" />
              </div>
              <p>Engineering Specialists</p>
            </div>
            <div className="svp-istats-card">
              <div className="svp-istats-n">
                <CountUp value="100%" />
              </div>
              <p>Code &amp; IP Ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ENTERPRISE CASE STUDIES ================= */}
      <section className="sec alt" id="work">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Proven Results</span>
            <h2>Recent Enterprise Case Studies Delivered</h2>
            <p>
              A selection of recently completed projects across fintech,
              healthcare, ecommerce, and smart industrial automation.
            </p>
          </Reveal>

          <div className="cols c3">
            {caseStudiesData.slice(0, 6).map((proj, idx) => (
              <ProjectCard key={proj.id} proj={proj} delay={(idx % 3) * 110} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC METHODOLOGY ================= */}
      <section className="sec" id="how-we-work">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Methodology</span>
            <h2>The 4-Step Engineering Lifecycle for Regulated Sectors</h2>
            <p>
              We de-risk enterprise delivery with a deterministic framework
              combining threat modeling, rapid prototyping, and automated audits.
            </p>
          </Reveal>

          <div className="cols c4">
            {methodologySteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 120} className="card svp-step">
                <span className="svp-step-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY VISION FOR ENTERPRISES ================= */}
      <section className="sec alt">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Why Vision Technolabs</span>
            <h2>Engineered for Strict Compliance and Business Outcomes</h2>
            <p>
              Why fast-growing brands, healthcare networks, and regulated enterprises
              trust Vision with their most critical core systems.
            </p>
          </Reveal>

          <div className="cols c2">
            {whyIndustryItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 110}
                className="card svp-why"
              >
                <span className="ico">
                  <svg aria-hidden="true">
                    <use href={`#${item.icon}`} />
                  </svg>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQS ================= */}
      <section className="sec" id="faqs">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Everything You Need to Know About Our Domain Engagements</h2>
            <p>
              Have a question about compliance agreements, security audits, or
              system integrations? Find answers below.
            </p>
          </Reveal>

          <div className="faq-wrap">
            {generalIndustryFaqs.map((faq, idx) => {
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
                    <span>{faq.q}</span>
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
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION (Metizsoft final-cta style) ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="svp-final-box">
            <div>
              <span className="marker">Industry-Specific Expertise</span>
              <h2>
                Not Seeing Your <span className="accent">Industry</span>?
              </h2>
              <p className="sub">
                We work across every vertical. Book a free 30-minute discovery call to discuss
                your industry, use cases, compliance requirements, and how our engineering squads
                fit into your roadmap.
              </p>
              <div className="svp-final-actions">
                <Link className="btn btn-primary" href="/#contact">
                  Book a Strategy Call →
                </Link>
                <Link className="btn btn-ghost" href="/services">
                  Browse All Services
                </Link>
              </div>
            </div>

            <div>
              <div className="svp-poc-card">
                <div className="svp-poc-big">2–5 Days</div>
                <div className="svp-poc-title">Rapid Proof of Concept</div>
                <p>
                  De-risk your architecture before full budget allocation with a
                  working prototype delivered in under a week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
