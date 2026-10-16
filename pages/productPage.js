import Link from "next/link";
import { productsData, productCategories } from "@/data/products";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import ProductFilterGrid from "@/components/products/ProductFilterGrid";
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

/* ---------- Product cards (spotlight + animated border) ---------- */
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
.svp-card .prod-badge {
  font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em;
  padding: .3rem .75rem; border-radius: 999px;
  background: rgba(79, 70, 229, .08); color: var(--primary);
}
.svp-card .svc-num {
  position: static; font-family: var(--serif); font-style: italic; font-size: 1.8rem; font-weight: 700; line-height: 1;
  color: transparent; -webkit-text-stroke: 1px rgba(79, 70, 229, .35);
  transition: -webkit-text-stroke-color .3s, color .3s;
}
.svp-card:hover .svc-num { color: rgba(79, 70, 229, .12); -webkit-text-stroke-color: var(--primary); }
.svp-card h3 { margin: .85rem 0 .4rem; color: var(--ink); font-size: 1.25rem; line-height: 1.3; }
.svp-card .prod-meta {
  display: flex; align-items: center; gap: .75rem; margin-bottom: .85rem; font-size: .84rem;
}
.svp-card .prod-rating {
  display: inline-flex; align-items: center; gap: .3rem; font-weight: 700; color: #f59e0b;
}
.svp-card .prod-reviews { color: var(--muted); font-size: .8rem; }
.svp-card p { margin: 0; color: var(--muted); line-height: 1.65; font-size: .95rem; }
.svp-card .ticks { list-style: none; margin: 1.2rem 0; padding: 0; display: grid; gap: .6rem; }
.svp-card .ticks li { display: flex; align-items: flex-start; gap: .55rem; font-size: .92rem; color: var(--ink); }
.svp-card .ticks .i { flex-shrink: 0; width: 18px; height: 18px; margin-top: .15rem; color: var(--accent); }
.svp-card .pricing-badge {
  display: inline-flex; align-items: center; gap: .45rem; margin-top: auto; margin-bottom: 1.1rem;
  padding: .45rem .85rem; border-radius: 8px; font-size: .8rem; font-weight: 600;
  background: var(--surface); color: var(--ink); border: 1px solid var(--line);
}
.svp-card .more {
  display: inline-flex; align-items: center; gap: .45rem; font-weight: 700; color: var(--primary);
}
.svp-card .more .i { width: 18px; height: 18px; transition: transform .35s var(--ease); }
.svp-card .more:hover .i { transform: translateX(6px); }
.svp-empty { text-align: center; color: var(--muted); padding: 3rem 0; }

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
}
@media (hover: none) {
  .svp-card:hover, .svp-step:hover, .svp-why:hover { transform: none; }
  .svp-card::before { display: none; }
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
  { value: "4", label: "Proprietary Products" },
  { value: "10x", label: "Faster Launch" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "100%", label: "Source Code IP" },
];

const generalProductFaqs = [
  {
    q: "What is the difference between Managed SaaS and Source Code Buyout?",
    a: "Managed Cloud SaaS includes hosting, automatic server infrastructure maintenance, security patches, and ongoing software updates on a monthly subscription. The Source Code Buyout gives you 100% intellectual property ownership, complete Git repositories, and deployment scripts to run on your own AWS/GCP/DigitalOcean infrastructure with zero recurring licensing fees."
  },
  {
    q: "Can we rebrand and white-label these products under our own company name?",
    a: "Yes. All 4 products support full white-labeling. You can configure custom domains, brand logos, primary color schemes, transactional email templates, and connect your own payment gateways to bill your clients directly."
  },
  {
    q: "Can Vision customize features or add bespoke integrations before deployment?",
    a: "Absolutely. Since all platforms are engineered in-house by our senior architects, our squad can rapidly tailor workflows, connect proprietary ERP/CRM systems, adjust database models, or integrate custom payment gateways within 5 to 14 days."
  },
  {
    q: "Are the mobile applications available on Google Play and Apple App Store?",
    a: "Yes. FilterBook, TripsBook, and SiteDesk are live on the Google Play Store and can be installed immediately or compiled for custom deployment under your own organization developer accounts."
  },
  {
    q: "How fast can we launch a sandbox proof-of-concept (POC)?",
    a: "We can provide live sandbox credentials or spin up a dedicated demo environment for your engineering team within 24 to 48 business hours."
  }
];

const turnkeySteps = [
  {
    n: "01",
    icon: "i-play",
    title: "Interactive Sandbox Demo",
    text: "Experience the product live with mock data, explore administrative consoles, and inspect API contracts with our solution engineers."
  },
  {
    n: "02",
    icon: "i-pen",
    title: "Branding & Domain Setup",
    text: "Configure your company logos, brand color palette, subdomains, SSL certificates, and custom transactional email providers."
  },
  {
    n: "03",
    icon: "i-code",
    title: "API & Data Integrations",
    text: "Connect your payment gateways (Stripe/PayPal), existing ERP databases, customer CRMs, and webhooks for real-time automation."
  },
  {
    n: "04",
    icon: "i-badge",
    title: "Production Cutover & SLAs",
    text: "Deploy to production with automated load balancing, automated backups, admin training, and SLA-backed ongoing cloud monitoring."
  }
];

const whyProductItems = [
  {
    icon: "i-speed",
    title: "Instant Time-to-Market",
    text: "Skip 6–12 months of boilerplate engineering and expensive discovery cycles. Deploy proven, production-tested software in days."
  },
  {
    icon: "i-shield",
    title: "100% IP & Code Ownership",
    text: "Available source-code buyout options guarantee that your enterprise retains complete intellectual property with zero vendor lock-in."
  },
  {
    icon: "i-layers",
    title: "White-Label Reseller Model",
    text: "Monetize software under your brand. Perfect for agencies looking to provide immediate recurring SaaS value to their clients."
  },
  {
    icon: "i-lock",
    title: "Enterprise Security & Scale",
    text: "Pre-hardened with OWASP Top 10 standards, encrypted database stores, role-based access control, and high-concurrency cloud architecture."
  }
];

/* =========================================================
   Page Component
   ========================================================= */

export default function ProductPage() {
  const counts = { All: productsData.length };
  productsData.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  const trimmedProducts = productsData.map((prod) => ({
    id: prod.id,
    slug: prod.slug,
    category: prod.category,
    badge: prod.badge,
    number: prod.number,
    gradient: prod.gradient,
    icon: prod.icon,
    shortTitle: prod.shortTitle,
    rating: prod.rating,
    reviewsCount: prod.reviewsCount,
    image: prod.image,
    title: prod.title,
    shortDescription: prod.shortDescription,
    features: prod.features?.slice(0, 3).map((f) => ({ title: f.title })),
    pricing: prod.pricing,
  }));

  const marqueeKeywords = [
    "BillsBook Invoicing & POS",
    "FilterBook RO Service CRM",
    "TripsBook Fleet Management",
    "SiteDesk Real Estate ERP",
    "Sub-30s Counter POS Billing",
    "Automated WhatsApp PDF Invoices",
    "Live GPS Fleet Telemetry",
    "Plot EMI & Dastavej Records",
    "White-Label SaaS Platforms",
    "100% Source Code Ownership"
  ];

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="products-hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />
        <span className="svp-orb svp-orb-c" aria-hidden="true" />

        <div className="container hero-wrap">
          <div className="copy svp-hero-copy">
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-hero">
                <strong>Vision</strong> Proprietary SaaS &amp; Mobile Platforms
              </span>
            </div>

            <h1 id="products-hero-title">
              Market-Ready SaaS Platforms &amp;{" "}
              <em>Turnkey Mobile Software Engineered for Scale</em>
            </h1>

            <p className="lead">
              Launch enterprise-grade counter POS billing, water purifier CRM, fleet tracking,
              and real estate plotting ERP platforms in days. Battle-tested, white-label ready,
              and engineered for rapid business growth.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#products-catalog">
                Explore Product Catalog ↓
              </a>
              <Link className="btn btn-ghost" href="/#contact">
                Schedule Sandbox Demo →
              </Link>
            </div>
          </div>

          <div className="svp-hero-wrap">
            <span className="svp-chip svp-chip-a" aria-hidden="true">
              <b /> Business SaaS
            </span>
            <span className="svp-chip svp-chip-b" aria-hidden="true">
              <b /> Mobile Apps
            </span>

            <Reveal
              className="bcard big svp-hero-card"
              tilt
              reveal={false}
            >
              <div className="bcard-top">
                <span className="btag">01 · Production Ready</span>
                <span className="blink" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>

              <h3>Instant Time-to-Market Advantage</h3>
              <p>
                Bypass 9+ months of boilerplate development. Deploy battle-hardened SaaS solutions
                with managed cloud hosting or full source code buyout.
              </p>

              <div className="agent-live">
                <i /> 4 Active Proprietary Products
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

      {/* ================= CATALOG SECTION ================= */}
      <section className="sec alt" id="products-catalog">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Product Catalog</span>
            <h2>Proven Platforms Engineered to Accelerate Your Operations</h2>
            <p>
              Choose from our lineup of proprietary SaaS tools, field service mobility suites,
              and industry-specific ERP applications.
            </p>
          </Reveal>

          <ProductFilterGrid
            categories={productCategories}
            counts={counts}
            products={trimmedProducts}
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE VISION PRODUCTS ================= */}
      <section className="sec" id="why-products">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Enterprise Delivery</span>
            <h2>Why Organizations Launch with Vision Products</h2>
            <p>
              We deliver mature, scalable software architectures with zero vendor lock-in,
              allowing you to scale faster while protecting your balance sheet.
            </p>
          </Reveal>

          <div className="cols c4">
            {whyProductItems.map((item, idx) => (
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

      {/* ================= 4-STEP TURNKEY WORKFLOW ================= */}
      <section className="sec alt" id="workflow">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">How We Deliver</span>
            <h2>From Discovery to Production Go-Live in 4 Simple Steps</h2>
            <p>
              Our battle-tested onboarding framework guarantees frictionless deployment,
              customization, and data integration with complete SLA coverage.
            </p>
          </Reveal>

          <div className="cols c4">
            {turnkeySteps.map((step, idx) => (
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

      {/* ================= FAQS ================= */}
      <section className="sec" id="faqs">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions About Our Products</h2>
            <p>
              Have questions regarding licensing, source code ownership, white-labeling, or
              custom integrations? Find our direct answers below.
            </p>
          </Reveal>

          <FaqAccordion items={generalProductFaqs} />
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="cta-box svp-cta">
            <div>
              <span className="eyebrow">Instant Time-to-Market</span>
              <h2>Ready to Deploy a Turnkey Solution for Your Enterprise?</h2>
              <p className="sub">
                Book a 30-minute interactive sandbox demo with our principal product engineers.
                We&apos;ll walk you through administrative controls, database models, and deployment
                options tailored to your technical requirements.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/#contact">
                  Schedule Sandbox Demo →
                </Link>
                <a className="btn btn-ghost" href="#products-catalog">
                  Explore Catalog
                </a>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">24–48 Hrs</div>
                <div className="svp-poc-title">Private Sandbox Access</div>
                <p>
                  Receive dedicated staging credentials to test full admin dashboards, customer
                  apps, and API endpoints before making a decision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
