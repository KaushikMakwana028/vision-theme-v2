import Link from "next/link";
import Image from "next/image";
import ScrollProgress from "@/components/services/ScrollProgress";
import CountUp from "@/components/services/CountUp";
import ServiceHeroTilt from "@/components/services/ServiceHeroTilt";
import FaqAccordion from "@/components/services/FaqAccordion";
import { servicesData } from "@/data/services";
import { getProjectsByService, caseStudiesData } from "@/data/caseStudies";

/* =========================================================
   Page styles (scoped under .svp) — matches servicePage.js
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
.svp .sec-head { text-align: center; max-width: 760px; margin: 0 auto 2.75rem; }
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
.svp-card .svc-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: auto; padding-top: 1.1rem; }
.svp-card .svc-tags span {
  font-size: .76rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px;
  background: var(--surface); color: var(--primary); transition: background .3s, color .3s;
}
.svp-card:hover .svc-tags span { background: rgba(79, 70, 229, .1); }
.svp-card .more {
  margin-top: auto; display: inline-flex; align-items: center; gap: .45rem; font-weight: 700; color: var(--primary);
}
.svp-card .more .i { width: 18px; height: 18px; transition: transform .35s var(--ease); }
.svp-card .more:hover .i { transform: translateX(6px); }

/* ---------- Process ---------- */
.svp-step { position: relative; overflow: hidden; transition: transform .4s var(--ease), box-shadow .4s var(--ease); }
.svp-step:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.svp-step::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
  background: var(--grad-warm); transform: scaleX(0); transform-origin: left;
  transition: transform 1s var(--ease); transition-delay: calc(var(--rv-delay, 0ms) + .5s);
}
.svp-step::after, .svp-step.rv-in::after { transform: scaleX(1); }
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

/* ---------- Projects / case studies ---------- */
.svp .card.flush { padding: 0; }
.svp-proj { height: 100%; }
.svp-thumb { position: relative; overflow: hidden; width: 100%; aspect-ratio: 16 / 9; background: #0b1120; border-bottom: 1px solid var(--line); display: block; padding: 0 !important; }
.svp-thumb img { display: block; width: 100%; height: 100%; object-fit: contain !important; object-position: center; transition: transform .5s var(--ease); }
.svp-thumb::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: -70%; width: 45%; z-index: 2; pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .35), transparent); transform: skewX(-20deg);
  transition: left .9s var(--ease);
}
.svp-proj:hover .svp-thumb img { transform: scale(1.025); }
.svp-proj:hover .svp-thumb::before { left: 130%; }
.svp-proj:hover .svp-thumb::after { opacity: 1; }
.svp-wb { display: flex; flex-direction: column; flex: 1; padding: 1.5rem; }
.svp-wb h3 { margin: .9rem 0 .5rem; color: var(--ink); transition: color .3s; }
.svp-proj:hover .svp-wb h3 { color: var(--primary); }
.svp-wb p { margin: 0 0 1.25rem; color: var(--muted); line-height: 1.65; }
.svp .svp-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
.svp .svp-tags span { font-size: .74rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px; background: var(--surface); color: var(--primary); }
.svp .svp-met {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: auto;
  padding-top: 1.15rem; border-top: 1px dashed var(--line); min-height: 56px;
}
.svp .svp-met > div { min-width: 0; }
.svp .svp-met strong {
  display: block; font-size: 1.35rem; font-weight: 800; font-variant-numeric: tabular-nums;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.svp .svp-met span {
  display: block; font-size: .76rem; color: var(--muted); margin-top: .2rem; line-height: 1.35;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
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
.svp-cta h2, .cta-box.svp-cta h2 { font-size: clamp(1.7rem, 3.5vw, 2.8rem); margin: 1rem 0 .8rem; line-height: 1.15; color: #ffffff !important; }
.svp-cta .sub { color: rgba(255, 255, 255, .8); margin: 0; max-width: 56ch; }
.svp-cta-actions .btn-light { background: #ffffff !important; color: #1e1b4b !important; font-weight: 700 !important; box-shadow: 0 10px 24px -8px rgba(0, 0, 0, .35) !important; }
.svp-cta-actions .btn-light:hover { background: #f1f2ff !important; color: #4338ca !important; transform: translateY(-2px); }
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
  .svp-wb { padding: 1.25rem; }
  .svp-thumb { aspect-ratio: 16 / 9; }
}
@media (hover: none) {
  .svp-card:hover, .svp-step:hover, .svp-why:hover, .svp-proj:hover .svp-thumb img { transform: none; }
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

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  return (
    <Tag
      className={`rv  ${className}`}
      style={{ "--rv-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function ProjectCard({ proj, delay = 0 }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="card flush svp-card svp-proj"
    >
      <Link
        href={`/work/${proj.slug || proj.id}`}
        className="thumb svp-thumb"
        style={{
          "--g": proj.gradient || "linear-gradient(135deg,#4f46e5,#7c3aed)",
        }}
        aria-label={`View ${proj.title} case study`}
      >
        <Image
          src={proj.image}
          alt={proj.title}
          width={800}
          height={520}
        />
      </Link>
      <div className="wb svp-wb">
        {proj.tags?.length > 0 && (
          <div className="tags svp-tags">
            {proj.tags.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>
        )}
        <h3>
          <Link href={`/work/${proj.slug || proj.id}`}>
            {proj.title}
          </Link>
        </h3>
        <p>{proj.description}</p>
      </div>
    </Reveal>
  );
}

const workflowIcons = ["i-web", "i-code", "i-db", "i-badge"];
const advantageIcons = ["i-shield", "i-speed", "i-lock", "i-headset"];

/* =========================================================
   Page Component
   ========================================================= */

export default function ServiceDetailPage({ service: propService }) {
  // Graceful fallback if rendered directly without props
  const service = propService || servicesData[0];

  if (!service) {
    return (
      <div className="svp">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="container svp-nf">
          <div className="svp-nf-code">404</div>
          <h2>Service Not Found</h2>
          <p>The requested service could not be located in our catalog.</p>
          <Link href="/services" className="btn btn-primary">
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  const direct = getProjectsByService(service.slug);
  const projects =
    direct && direct.length > 0 ? direct : caseStudiesData.slice(0, 3);

  const marqueeTags =
    service.techStack && service.techStack.length > 0
      ? service.techStack
      : ["Next.js", "React", "TypeScript", "Node.js", "Docker", "AWS"];

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="service-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />
        <span className="svp-orb svp-orb-c" aria-hidden="true" />

        <div className="container hero-wrap">
          <div className="copy svp-hero-copy">
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-hero">
                <strong>{service.category}</strong> {service.badge}
              </span>
            </div>

            <h1 id="service-title">
              {service.title} <em>Built for Scalable Growth</em>
            </h1>

            <p className="lead">
              {service.heroSubtitle || service.description}
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Schedule Technical Consultation{" "}
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#capabilities">
                Explore Capabilities ↓
              </a>
            </div>
          </div>

          <div className="svp-hero-wrap">
            <span className="svp-chip svp-chip-a" aria-hidden="true">
              <b /> {service.category}
            </span>
            <span className="svp-chip svp-chip-b" aria-hidden="true">
              <b /> 100% IP Ownership
            </span>

            <ServiceHeroTilt className="bcard big svp-hero-card">
              <div className="bcard-top">
                <span className="btag">Performance Benchmarks</span>
                <span className="blink" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span className="agent-live">
                <i />
                Live SLA &amp; Standards
              </span>
              <h3>Engineered for Measurable Outcomes</h3>
              <p>
                Every build is held to strict performance, security, and
                conversion benchmarks.
              </p>

              {service.metrics?.length > 0 && (
                <div className="svp-stats">
                  {service.metrics.map((m, idx) => (
                    <div key={idx}>
                      <CountUp value={m.value} />
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </ServiceHeroTilt>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      <div className="svp-marquee" aria-label="Technologies used for this service">
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

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="sec" id="capabilities">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Capabilities</span>
            <h2>Specialized Solutions We Ship into Production</h2>
            <p>
              From custom application architecture to automated workflows and
              system integrations — engineered to solve your specific
              operational bottlenecks.
            </p>
          </Reveal>

          <div className="cols c3">
            {service.capabilities?.map((cap, idx) => (
              <article
                key={idx}
                className="card svc-card svp-card"
                style={{ "--i": idx }}
              >
                <div className="svp-card-top">
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href={`#${cap.icon || service.icon || "i-code"}`} />
                    </svg>
                  </span>
                  <span className="svc-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>

                {cap.features?.length > 0 && (
                  <ul className="ticks">
                    {cap.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.tags?.length > 0 && (
                  <div className="svc-tags">
                    {service.tags.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx}>{t}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS / CASE STUDIES ================= */}
      {projects.length > 0 && (
        <section className="sec alt" id="projects">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Featured Work</span>
              <h2>Real-World Projects We&apos;ve Successfully Delivered</h2>
              <p>
                Explore recent projects and case studies showcasing how we
                design, build, and scale solutions with {service.title}.
              </p>
            </Reveal>

            <div className="cols c3">
              {projects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  proj={proj}
                  delay={(idx % 3) * 110}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= DELIVERY LIFECYCLE ================= */}
      {service.workflow?.length > 0 && (
        <section className="sec" id="workflow">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Our Methodology</span>
              <h2>How We Deliver {service.title} From End to End</h2>
              <p>
                A battle-tested 4-step delivery pipeline combining strategic
                scoping, rapid prototyping, bi-weekly agile demos, and
                zero-downtime release.
              </p>
            </Reveal>

            <div className="cols c4">
              {service.workflow.map((flow, idx) => (
                <Reveal key={idx} delay={idx * 120} className="card svp-step">
                  <span className="svp-step-num">{flow.step}</span>
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use
                        href={`#${workflowIcons[idx % workflowIcons.length]}`}
                      />
                    </svg>
                  </span>
                  <h3>{flow.title}</h3>
                  <p>{flow.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= BUSINESS ADVANTAGES ================= */}
      {service.advantages?.length > 0 && (
        <section className="sec alt" id="advantages">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Why Vision</span>
              <h2>
                Why Fast-Moving Companies Partner With Us for {service.title}
              </h2>
              <p>
                We operate as your high-velocity engineering partner, committed
                to code ownership, sub-second performance, and measurable
                business impact.
              </p>
            </Reveal>

            <div className="cols c2">
              {service.advantages.map((adv, idx) => (
                <Reveal
                  key={idx}
                  delay={(idx % 2) * 110}
                  className="card svp-why"
                >
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use
                        href={`#${advantageIcons[idx % advantageIcons.length]}`}
                      />
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

      {/* ================= FAQ ACCORDION ================= */}
      {service.faqs?.length > 0 && (
        <section className="sec" id="faqs">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2>Everything You Need to Know About {service.title}</h2>
              <p>
                Clear answers regarding project timelines, code ownership,
                technical security, and post-launch SLAs.
              </p>
            </Reveal>

            <FaqAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* ================= COMPLEMENTARY SERVICES ================= */}
      {otherServices.length > 0 && (
        <section className="sec alt">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Complementary Solutions</span>
              <h2>Explore Other Core Services</h2>
              <p>
                Integrate your technology stack with our complementary
                engineering and growth services.
              </p>
            </Reveal>

            <div className="cols c3">
              {otherServices.slice(0, 3).map((other, idx) => (
                <article
                  key={other.id}
                  className="card svc-card svp-card"
                  style={{ "--i": idx }}
                >
                  <div className="svp-card-top">
                    <span className="ico">
                      <svg className="i" aria-hidden="true">
                        <use href={`#${other.icon}`} />
                      </svg>
                    </span>
                    <span className="svc-num">{other.number}</span>
                  </div>
                  <h3>{other.title}</h3>
                  <p>{other.shortDescription}</p>

                  <div className="svc-tags">
                    {other.tags?.map((t, tidx) => (
                      <span key={tidx}>{t}</span>
                    ))}
                  </div>

                  <Link
                    className="more"
                    href={`/services/${other.slug}`}
                    aria-label={`View ${other.title} specifications`}
                  >
                    View Specifications{" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FINAL CONSULTATION CTA ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="cta-box svp-cta">
            <div>
              <span className="eyebrow">Ready to Build?</span>
              <h2>Let&apos;s Architect Your {service.title ? service.title.replace(/\s*solutions?$/i, "") : "Digital"} Solution</h2>
              <p className="sub">
                Connect directly with a lead solution architect. We&apos;ll
                evaluate your use case, provide an architectural feasibility
                blueprint, and scope realistic milestones.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/#contact">
                  Book a Discovery Call →
                </Link>
                <Link className="btn btn-ghost" href="/services">
                  Browse All Services
                </Link>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">100% IP</div>
                <div className="svp-poc-title">Full Code Ownership</div>
                <p>
                  All repositories, deployment scripts, and intellectual
                  property transfer to your organization upon delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
