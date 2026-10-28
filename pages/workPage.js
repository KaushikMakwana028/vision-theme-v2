import Link from "next/link";
import { caseStudiesData, workCategories } from "@/data/caseStudies";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import WorkFilterGrid from "@/components/work/WorkFilterGrid";
import FaqAccordion from "@/components/common/FaqAccordion";

/* =========================================================
   Page styles (scoped under .svp) — matches servicePage.js & theme
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
.svp .rv { opacity: 1; transform: none; }
.svp .rv.rv-in { opacity: 1; transform: none; }
.svp .rv.svp-cta { animation: svp-bg 14s ease-in-out infinite; }

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
  color: #64748b; font-size: .8rem; font-weight: 500;
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
.svp-hero-card h2, .svp-hero-card h3 { color: #fff; margin: 1rem 0 .6rem; }
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

/* ---------- Filter tabs ---------- */
.svp .filter-wrap { position: relative; margin: 0 auto 2.25rem; width: 100%; }
.svp .filter-tabs { display: flex; gap: .55rem; justify-content: center; flex-wrap: wrap; }
.svp .filter-tab {
  display: inline-flex; align-items: center; gap: .5rem; cursor: pointer; flex-shrink: 0;
  padding: .6rem 1.15rem; border-radius: 999px; font: inherit; font-weight: 600; font-size: .92rem;
  white-space: nowrap; color: var(--ink); background: var(--bg); border: 1px solid var(--line);
  transition: transform .3s var(--ease), background .3s, color .3s, border-color .3s, box-shadow .3s;
}
.svp .filter-tab em {
  font-style: normal; font-size: .72rem; padding: .1rem .5rem; border-radius: 999px;
  background: var(--surface); color: var(--muted); transition: background .3s, color .3s;
}
.svp .filter-tab:hover { border-color: var(--primary); transform: translateY(-2px); }
.svp .filter-tab.active {
  color: #fff; border-color: transparent; background: var(--grad);
  box-shadow: 0 10px 24px -8px rgba(79, 70, 229, .65); transform: translateY(-2px);
}
.svp .filter-tab.active em { background: rgba(255, 255, 255, .22); color: #fff; }

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

/* ---------- Project cards (uniform height, spotlight + animated border) ---------- */
.svp-proj {
  position: relative; display: flex; flex-direction: column; overflow: hidden; height: 100%;
  animation: svp-in .65s var(--ease) backwards; animation-delay: calc(var(--i, 0) * 80ms);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
  background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius);
}
.svp-proj > * { position: relative; z-index: 1; }
.svp-proj::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0;
  background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(79, 70, 229, .12), transparent 45%);
  transition: opacity .35s;
}
.svp-proj::after {
  content: ""; position: absolute; inset: 0; z-index: 2; pointer-events: none; border-radius: inherit;
  padding: 1.5px; background: var(--grad-warm); background-size: 200% 100%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0; transition: opacity .4s; animation: svp-grad 4s linear infinite;
}
.svp-proj:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.svp-proj:hover::before, .svp-proj:hover::after { opacity: 1; }

/* Image container - FULL image display, edge-to-edge, flush border */
.svp-thumb {
  position: relative; overflow: hidden; width: 100%; aspect-ratio: 16 / 9;
  background: #0b1120; border-bottom: 1px solid var(--line);
  display: block; padding: 0 !important; cursor: pointer; text-decoration: none;
}
.svp-thumb img {
  display: block; width: 100%; height: 100%;
  object-fit: contain !important; object-position: center;
  transition: transform .5s var(--ease);
}
.svp-thumb::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: -70%; width: 45%; z-index: 2; pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .35), transparent); transform: skewX(-20deg);
  transition: left .9s var(--ease);
}
.svp-proj:hover .svp-thumb img { transform: scale(1.025); }
.svp-proj:hover .svp-thumb::before { left: 130%; }

/* Card body - unified flex column */
.svp-wb { display: flex; flex-direction: column; flex: 1 1 auto; padding: 1.5rem; }

/* Tags - fixed height container so titles align perfectly */
.svp .svp-tags {
  display: flex; flex-wrap: wrap; gap: .4rem;
  min-height: 54px; align-content: flex-start; margin-bottom: .6rem;
}
.svp .svp-tags span {
  font-size: .74rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px;
  background: var(--surface); color: var(--primary); border: 1px solid var(--line);
  line-height: 1.25;
}

/* Title - clamped to 2 lines with consistent min-height */
.svp-wb h3 {
  margin: 0 0 .55rem; color: var(--ink); font-size: 1.22rem; font-weight: 700; line-height: 1.35;
  min-height: 3.3rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; transition: color .3s;
}
.svp-proj:hover .svp-wb h3 { color: var(--primary); }
.svp-wb h3 a { color: inherit; text-decoration: none; }

/* Description - clamped to 3 lines with consistent min-height */
.svp-wb p {
  margin: 0 0 1.25rem; color: var(--muted); line-height: 1.6; font-size: .92rem;
  min-height: 4.45rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Metrics - pinned to bottom baseline */
.svp .svp-met {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: auto;
  padding-top: 1.15rem; border-top: 1px dashed var(--line); min-height: 64px;
}
.svp .svp-met > div { min-width: 0; }
.svp .svp-met strong {
  display: block; font-size: 1.45rem; font-weight: 800; font-variant-numeric: tabular-nums;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  line-height: 1.2;
}
.svp .svp-met span { display: block; font-size: .78rem; color: var(--muted); line-height: 1.35; margin-top: .2rem; }

/* Explore Link - pinned bottom */
.svp-proj .more {
  margin-top: auto; padding-top: 1.15rem; display: inline-flex; align-items: center; gap: .45rem; font-weight: 700; color: var(--primary);
  font-size: .92rem; text-decoration: none;
}
.svp-proj .more .i { width: 17px; height: 17px; transition: transform .35s var(--ease); }
.svp-proj:hover .more .i { transform: translateX(6px); }

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

/* ---------- Testimonials grid ---------- */
.t-card {
  position: relative; display: flex; flex-direction: column; padding: 2rem;
  background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.t-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.t-stars { color: #f59e0b; margin-bottom: 1rem; font-size: 1rem; letter-spacing: .1em; }
.t-quote { font-style: italic; color: var(--ink); line-height: 1.7; margin: 0 0 1.5rem; flex: 1; }
.t-author strong { display: block; color: var(--ink); font-size: .95rem; }
.t-author span { font-size: .82rem; color: var(--muted); }

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
.svp-cta h2, .cta-box.svp-cta h2 { font-size: clamp(1.7rem, 3.5vw, 2.8rem); margin: 1rem 0 .8rem; line-height: 1.15; color: #ffffff !important; }
.svp-cta .sub { color: rgba(255, 255, 255, .8); margin: 0; max-width: 56ch; }
.svp-cta-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
.svp-cta-actions .btn-ghost { background: transparent !important; color: #ffffff !important; border: 1px solid rgba(255, 255, 255, .4) !important; }
.svp-cta-actions .btn-ghost:hover { background: rgba(255, 255, 255, .15) !important; color: #ffffff !important; border-color: rgba(255, 255, 255, .7) !important; }
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
@media (max-width: 900px) {
  .svp .filter-wrap {
    margin-left: calc(var(--gutter, 1.25rem) * -1) !important;
    margin-right: calc(var(--gutter, 1.25rem) * -1) !important;
    padding: 0 !important;
    overflow: hidden;
  }
  .svp .filter-wrap::after {
    content: ""; position: absolute; top: 0; right: 0; bottom: 0; width: 36px; pointer-events: none;
    background: linear-gradient(90deg, transparent, var(--bg)); z-index: 2;
  }
  .svp .sec.alt .filter-wrap::after { background: linear-gradient(90deg, transparent, var(--surface)); }
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
  .svp-wb { padding: 1.25rem; }
  .svp-thumb { aspect-ratio: 16 / 9 !important; padding: 0 !important; background: #0b1120 !important; }
  .svp-thumb img { object-fit: contain !important; width: 100% !important; height: 100% !important; object-position: center !important; }
  .svp .svp-tags { min-height: auto; }
  .svp-wb h3 { min-height: auto; -webkit-line-clamp: 3; font-size: 1.15rem; }
  .svp-wb p { min-height: auto; -webkit-line-clamp: 4; font-size: .9rem; }
  .svp-hero h1 { font-size: clamp(2rem, 7.2vw, 2.5rem); line-height: 1.16; }
  .svp-hero .lead { font-size: 0.95rem; line-height: 1.55; }
}
@media (hover: none) {
  .svp-proj:hover, .svp-step:hover, .t-card:hover { transform: none; }
  .svp-proj::before { display: none; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .svp *, .svp *::before, .svp *::after { animation: none !important; transition-duration: .01ms !important; }
  .svp .rv { opacity: 1 !important; transform: none !important; }
}
`;



/* =========================================================
   Static Data
   ========================================================= */

const heroStats = [
  { value: "500+", label: "Delivered Builds" },
  { value: "99.4%", label: "On-Time Sprints" },
  { value: "4.9★", label: "Client Rating" },
  { value: "25+", label: "Countries" }
];

const workFaqs = [
  {
    q: "What types of client projects and industries are showcased in Vision's work portfolio?",
    a: "Our featured portfolio spans custom enterprise platforms, high-concurrency e-commerce portals, cross-platform mobile apps, and SaaS systems across diverse industries. Notable case studies include Surya Deep Car Rent (fleet ERP and online booking portal), SRL Pixel & Ghanshyam Murti (high-volume e-commerce platforms), ReComm (hyperlocal marketplace), StayFlow CRM (multi-branch PG and hostel ERP), Medicheck (clinical drug-drug interaction checker), and native React Native mobile applications like Divy Shakti, Fitcket, and Kreditmitraa."
  },
  {
    q: "How does Vision verify and measure the business outcomes reported in these case studies?",
    a: "Every case study metric—such as sub-200ms page load speeds, 99.9% uptime, 4x increases in mobile conversions, or 78% reductions in paperwork—is benchmarked directly using production telemetry, Google Core Web Vitals audits, database query profilers, and real client business analytics dashboards before and after deployment."
  },
  {
    q: "Can prospective clients inspect live production platforms or request a live architecture walkthrough?",
    a: "Yes. Most client projects in our portfolio include direct links to their live websites or Google Play Store application listings. During our discovery call, our senior solution architects can walk you through staging environments, backend admin consoles, database entity-relationship diagrams (ERDs), and API contracts under appropriate mutual non-disclosure agreements (NDAs)."
  },
  {
    q: "Do clients own 100% of the custom source code, Git repositories, and architecture upon completion?",
    a: "Yes, unequivocally. All custom software, mobile app codebases, database schemas, CI/CD deployment scripts, and architectural documentation are 100% owned by your company upon milestone sign-off. We transfer full Git repository ownership with zero recurring developer royalties, licensing fees, or vendor lock-in."
  },
  {
    q: "Can Vision take over, audit, or refactor an existing or unfinished codebase from another vendor?",
    a: "Yes. Approximately 35% of our portfolio engagements involve modernizing legacy software or taking over stalled projects. Our senior architects conduct a thorough 360-degree audit evaluating code quality, security vulnerabilities, database normalization, and third-party API dependencies before outlining an agile remediation roadmap."
  },
  {
    q: "How do your 2-week agile sprints work and how closely can our team collaborate?",
    a: "We operate in disciplined 2-week agile sprints. You receive private access to staging environments with continuous CI/CD deployments, direct collaboration with senior developers in dedicated Slack or Microsoft Teams channels, task boards in Jira or Linear, and weekly live sprint review demonstrations."
  },
  {
    q: "What warranty, SLA guarantees, and ongoing support are provided after go-live?",
    a: "Every completed deployment includes a complimentary 30-day post-launch warranty covering functional bug fixes, regression testing, and server performance tuning. For long-term peace of mind, we provide ongoing SLA-backed maintenance retainers covering 24/7 uptime monitoring, security patching, database optimization, and cloud infrastructure management."
  },
  {
    q: "How does Vision ensure enterprise security and regulatory compliance across client applications?",
    a: "Our engineering squads follow OWASP Top 10 security standards by default. We implement strict input sanitization, JWT blacklist token invalidation, role-based access control (RBAC), end-to-end TLS encryption, secure database parameterization, and assist with compliance readiness including PCI-DSS, HIPAA, and GDPR standards."
  }
];

const workGuarantees = [
  {
    icon: "i-clock",
    title: "100% On-Time Delivery",
    text: "We tie our agile delivery to strict sprint milestones with measurable KPIs and transparent weekly demonstrations."
  },
  {
    icon: "i-shield",
    title: "100% IP & Code Ownership",
    text: "Complete commercial rights, Git repositories, and cloud automation scripts transferred upon milestone completion."
  },
  {
    icon: "i-headset",
    title: "Senior Architect Direct Access",
    text: "No layers of account managers. You collaborate directly with principal engineers inside your dedicated Slack channel."
  },
  {
    icon: "i-badge",
    title: "30-Day Post-Launch Warranty",
    text: "Every production deployment includes full warranty coverage for functional bugs, regression testing, and performance tuning."
  }
];

const collaborationSteps = [
  {
    n: "01",
    icon: "i-target",
    title: "Discovery & Feasibility",
    text: "Deep-dive analysis into user journeys, database schemas, API integrations, and cloud hosting architecture."
  },
  {
    n: "02",
    icon: "i-pen",
    title: "Figma UI/UX & Prototypes",
    text: "Interactive high-fidelity prototypes and design systems to validate user experience and workflows before engineering."
  },
  {
    n: "03",
    icon: "i-code",
    title: "Agile 2-Week Sprints",
    text: "Continuous Git integration, automated testing, staging environment builds, and live sprint demonstrations."
  },
  {
    n: "04",
    icon: "i-badge",
    title: "Zero-Downtime Launch",
    text: "Production deployment, Core Web Vitals audit, 24/7 uptime monitoring, and SLA-backed ongoing support."
  }
];

/* =========================================================
   Page Component
   ========================================================= */

export default function WorkPage() {
  const counts = { All: caseStudiesData.length };
  caseStudiesData.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  const trimmedProjects = caseStudiesData.map((proj) => ({
    id: proj.id,
    slug: proj.slug,
    title: proj.title,
    subtitle: proj.subtitle,
    category: proj.category,
    image: proj.image,
    description: proj.description,
    tags: proj.tags,
  }));

  const marqueeKeywords = [
    "Car Rental ERP & Booking Engines",
    "Addressable LED Neon E-Commerce",
    "Hyperlocal On-Demand Marketplaces",
    "Paying Guest & PG Hostel CRMs",
    "B2B Enterprise Distribution Portals",
    "Clinical Drug Interaction Checkers",
    "Multi-Business Billing & Invoicing SaaS",
    "Dompdf Vector Invoices & WhatsApp POS",
    "CodeIgniter MVC Architecture",
    "Real-Time Bed-Level Occupancy Sync",
    "Sub-Second Geodesic Road Routing",
    "Razorpay & Dynamic UPI Integrations"
  ];

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="work-hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />
        <span className="svp-orb svp-orb-c" aria-hidden="true" />

        <div className="container hero-wrap">
          <div className="copy svp-hero-copy">
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="eyebrow-hero">
                <strong>Vision</strong> Proven Engineering Outcomes
              </span>
            </div>

            <h1 id="work-hero-title">
              Case Studies, Engineered Outcomes &amp;{" "}
              <em>Proven Client Success Stories</em>
            </h1>

            <p className="lead">
              Explore how Vision partners with high-growth ventures, mid-market disruptors, and
              enterprises to engineer high-concurrency web platforms, mobile apps, and autonomous AI
              architectures that generate measurable business ROI.
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Schedule Technical Call{" "}
                <svg className="i" aria-hidden="true" width="18" height="18">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="svp-hero-wrap">
            <span className="svp-chip svp-chip-a" aria-hidden="true">
              <b /> Full IP Ownership
            </span>
            <span className="svp-chip svp-chip-b" aria-hidden="true">
              <b /> 2-Week Sprints
            </span>

            <Reveal
              className="bcard big svp-hero-card"
              tilt
              reveal={false}
            >
              <div className="bcard-top">
                <span className="btag">01 · Production Deployed</span>
                <span className="blink" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>

              <h2>Deterministic Delivery Track Record</h2>
              <p>
                Zero missed milestones. Bank-grade architectural rigor. Every build backed by
                measurable latency reductions and revenue lift.
              </p>

              <div className="agent-live">
                <i /> 500+ Production Deployments
              </div>

              <div className="svp-stats">
                {heroStats.map((st, i) => (
                  <div key={i}>
                    <CountUp value={st.value} />
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE TICKER ================= */}
      <div className="svp-marquee" aria-hidden="true">
        <div className="svp-marquee-track">
          <div className="svp-marquee-group">
            {marqueeKeywords.map((tag, idx) => (
              <span key={`mq1-${idx}`}>{tag}</span>
            ))}
          </div>
          <div className="svp-marquee-group">
            {marqueeKeywords.map((tag, idx) => (
              <span key={`mq2-${idx}`}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PORTFOLIO CATALOG ================= */}
      <section className="sec alt" id="portfolio-catalog">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Client Work</span>
            <h2>Proven Software Built for Scale, Performance &amp; Revenue</h2>
            <p>
              Browse our portfolio of recently delivered client builds across fintech, commerce,
              healthcare, logistics, and autonomous AI automation.
            </p>
          </Reveal>

          <WorkFilterGrid
            categories={workCategories}
            counts={counts}
            projects={trimmedProjects}
          />
        </div>
      </section>

      {/* ================= DELIVERY GUARANTEES ================= */}
      <section className="sec" id="guarantees">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Enterprise Confidence</span>
            <h2>Our Non-Negotiable Engineering Delivery Guarantees</h2>
            <p>
              We don&apos;t just deliver code. We provide absolute transparency, deterministic
              timelines, and complete intellectual property protection.
            </p>
          </Reveal>

          <div className="cols c4">
            {workGuarantees.map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 80}
                className="card svp-step"
                spot
              >
                <span className="ico">
                  <svg className="i" aria-hidden="true">
                    <use href={`#${item.icon}`} />
                  </svg>
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4-STEP COLLABORATION PROCESS ================= */}
      <section className="sec alt" id="collaboration-process">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">How We Collaborate</span>
            <h2>A Proven 4-Step Framework Engineered for Velocity</h2>
            <p>
              From architectural discovery to zero-downtime production cutovers and SLA-backed
              observability.
            </p>
          </Reveal>

          <div className="cols c4">
            {collaborationSteps.map((step, idx) => (
              <Reveal
                key={step.n}
                delay={idx * 90}
                className="card svp-step"
                spot
              >
                <span className="svp-step-num">{step.n}</span>
                <span className="ico">
                  <svg className="i" aria-hidden="true">
                    <use href={`#${step.icon}`} />
                  </svg>
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIALS ================= */}
      <section className="sec" id="testimonials">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Client Feedback</span>
            <h2>What Leaders Say About Engineering With Vision</h2>
            <p>
              Real feedback from CTOs, founders, and heads of product who trust Vision with their
              mission-critical systems.
            </p>
          </Reveal>

          <div className="cols c3">
            {caseStudiesData.slice(0, 3).map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 85}
                className="t-card"
              >
                <div className="t-stars">★★★★★</div>
                <p className="t-quote">&ldquo;{item.testimonial?.quote || item.description}&rdquo;</p>
                <div className="t-author">
                  <strong>{item.testimonial?.author || item.client}</strong>
                  <span>{item.testimonial?.role || "Leadership"}, {item.testimonial?.company || item.client}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQS ================= */}
      <section className="sec alt" id="faqs">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Frequently Asked</span>
            <h2>Everything You Need to Know About Engaging With Us</h2>
            <p>
              Common questions regarding our agile sprints, IP transfer, team structures, and SLAs.
            </p>
          </Reveal>

          <FaqAccordion items={workFaqs} />
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="cta-box svp-cta">
            <div>
              <span className="eyebrow">Start Your Project</span>
              <h2>Ready to Build Your Next Scalable Platform?</h2>
              <p className="sub">
                Book a 30-minute discovery consultation with our senior architects. We&apos;ll evaluate
                your technical requirements, review architecture feasibility, and deliver an honest
                roadmap within 48 hours.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/contact">
                  Schedule Discovery Call →
                </Link>
                <a className="btn btn-ghost" href="#portfolio-catalog">
                  Explore Case Studies
                </a>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">2–5 Days</div>
                <div className="svp-poc-title">Rapid Proof of Concept</div>
                <p>
                  Have an ambitious AI or web concept? We validate key feasibility milestones with
                  working prototypes in under a week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
