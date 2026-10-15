import Link from "next/link";
import Image from "next/image";
import ScrollProgress from "@/components/industries/ScrollProgress";
import CountUp from "@/components/industries/CountUp";
import IndustryFaqAccordion from "@/components/industries/IndustryFaqAccordion";
import IndustryProjectsCarousel from "@/components/industries/IndustryProjectsCarousel";
import { industriesData } from "@/data/industries";
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
.svp .rv { opacity: 1; transform: none; }
.svp .rv.rv-in { opacity: 1; transform: none; }

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
.svp .eyebrow-hero strong { color: var(--primary); font-weight: 700; }

/* ---------- Typography & Section Headers ---------- */
.svp .sec-head { text-align: center; max-width: 820px; margin: 0 auto 3rem; }
.svp .sec-head h2 { margin: 1rem 0 .8rem; line-height: 1.18; color: var(--ink); font-size: clamp(1.8rem, 3.8vw, 2.6rem); }
.svp .sec-head p { color: var(--muted); margin: 0; font-size: clamp(.98rem, 1.8vw, 1.08rem); line-height: 1.7; }
.svp .hi {
  background: var(--grad-warm); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp .sec.alt { background: var(--surface); }

/* ---------- Hero (Metizsoft SubpageHero style) ---------- */
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
  color: var(--muted); max-width: 780px; margin: 0 auto 2.2rem;
}
.svp-hero .cta-row {
  display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 1rem; margin-bottom: 3.5rem;
}
.svp-hero .cta-row .btn { padding: .85rem 1.85rem; font-size: .98rem; font-weight: 600; }

/* 4-Stat Bar (Metizsoft style) */
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

/* ---------- Split Overview Section (Metizsoft isol-r2 style) ---------- */
.svp-isol-r2 {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: #ffffff; border-bottom: 1px solid var(--line);
}
.svp-isol-r2-grid {
  display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
  gap: clamp(2rem, 5vw, 4rem); align-items: flex-start;
}
.svp-isol-r2-left { display: flex; flex-direction: column; }
.svp-isol-r2-eyebrow {
  font-size: .9rem; font-weight: 600; color: var(--primary); text-transform: uppercase;
  letter-spacing: .06em; margin-bottom: .8rem;
}
.svp-isol-r2-left h2 {
  font-size: clamp(2rem, 4vw, 2.8rem); line-height: 1.18; color: var(--ink); margin: 0 0 1.25rem;
}
.svp-isol-r2-lead {
  font-size: 1.05rem; line-height: 1.75; color: var(--muted); margin: 0 0 1.5rem;
}
.svp-isol-r2-sub {
  background: var(--surface); border-radius: 16px; padding: 1.5rem; border: 1px solid var(--line);
  margin-bottom: 2rem;
}
.svp-isol-r2-sub h3 { font-size: 1.12rem; margin: 0 0 .5rem; color: var(--ink); }
.svp-isol-r2-sub p { font-size: .93rem; line-height: 1.65; color: var(--muted); margin: 0; }

.svp-isol-r2-right {
  display: flex; flex-direction: column; gap: .75rem;
}
.svp-isol-r2-row {
  display: flex; align-items: center; gap: 1.25rem; padding: 1.2rem 1.5rem;
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09); border-radius: 16px;
  box-shadow: 0 2px 10px -2px rgba(11, 16, 32, .03);
  text-decoration: none; color: inherit;
  transition: transform .3s var(--ease), border-color .3s, box-shadow .3s;
}
.svp-isol-r2-row:hover {
  transform: translateX(6px); border-color: var(--primary);
  box-shadow: 0 10px 24px -6px rgba(79, 70, 229, .14);
}
.svp-isol-r2-num {
  font-family: var(--serif); font-style: italic; font-size: 1.4rem; font-weight: 700;
  color: var(--primary); flex-shrink: 0; width: 32px;
}
.svp-isol-r2-content { flex: 1; }
.svp-isol-r2-content h4 {
  font-size: 1.02rem; font-weight: 600; margin: 0; color: var(--ink);
  transition: color .25s;
}
.svp-isol-r2-row:hover .svp-isol-r2-content h4 { color: var(--primary); }
.svp-isol-r2-arrow {
  color: var(--muted); transition: color .25s, transform .25s var(--ease);
}
.svp-isol-r2-row:hover .svp-isol-r2-arrow {
  color: var(--primary); transform: translate(3px, -3px);
}

/* ---------- Core Solutions Grid (Metizsoft fsol style) ---------- */
.svp-fsol-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;
}
.svp-fsol-card {
  position: relative; display: flex; flex-direction: column;
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09);
  border-radius: 20px; padding: 2.25rem 2rem;
  box-shadow: 0 4px 20px -3px rgba(11, 16, 32, .04);
  transition: transform .4s var(--ease), box-shadow .4s var(--ease);
  overflow: hidden;
}
.svp-fsol-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -15px rgba(79, 70, 229, .16);
  border-color: rgba(79, 70, 229, .25);
}
.svp-fsol-card-top {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;
}
.svp-fsol-ico {
  width: 48px; height: 48px; display: inline-grid; place-items: center; border-radius: 14px;
  background: var(--grad, linear-gradient(135deg, #4f46e5, #7c3aed));
  color: #ffffff;
  box-shadow: 0 8px 18px -4px rgba(79, 70, 229, .45);
  transition: transform .35s var(--ease), box-shadow .35s;
}
.svp-fsol-ico svg,
.svp-fsol-ico .i {
  width: 24px; height: 24px;
  stroke: #ffffff;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  color: #ffffff;
}
.svp-fsol-card:hover .svp-fsol-ico {
  transform: rotate(-6deg) scale(1.08);
  box-shadow: 0 12px 24px -8px rgba(79, 70, 229, .65);
}
.svp-fsol-tag {
  font-size: .8rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
  color: var(--primary); background: rgba(79, 70, 229, .08); padding: .25rem .75rem; border-radius: 999px;
}
.svp-fsol-card h3 {
  font-size: 1.35rem; font-weight: 700; margin: 0 0 .75rem; color: var(--ink);
}
.svp-fsol-card p {
  color: var(--muted); font-size: .96rem; line-height: 1.7; margin: 0 0 1.25rem;
}
.svp-fsol-features {
  list-style: none; margin: 0 0 1.25rem; padding: 0; display: grid; gap: .6rem;
}
.svp-fsol-features li {
  display: flex; align-items: flex-start; gap: .55rem; font-size: .92rem; color: var(--ink); font-weight: 500;
}
.svp-fsol-features svg {
  flex-shrink: 0; width: 17px; height: 17px; margin-top: .15rem; color: var(--accent);
}

/* ---------- Standout Projects Section (Metizsoft iproj slider style) ---------- */
.svp-standout-sec {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-bottom: 1px solid var(--line);
}
.svp-standout-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.25rem;
}
.svp-standout-title-wrap {
  display: flex;
  flex-direction: column;
}
.svp-standout-title-wrap h2 {
  font-size: clamp(2rem, 3.8vw, 2.75rem);
  line-height: 1.18;
  color: var(--ink);
  margin: 0.5rem 0 0;
}
.svp-standout-arrows {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}
.svp-slide-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(15, 23, 42, 0.14);
  background: #ffffff;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s var(--ease);
  box-shadow: 0 2px 6px rgba(11, 16, 32, 0.04);
}
.svp-slide-btn:hover {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px -2px rgba(79, 70, 229, 0.35);
}
.svp-slide-btn:active {
  transform: scale(0.96);
}
.svp-slide-btn svg {
  width: 20px;
  height: 20px;
}

/* Standout Showcase Card */
.svp-standout-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  box-shadow: 0 10px 40px -10px rgba(15, 23, 42, 0.07), 0 1px 3px rgba(15, 23, 42, 0.03);
  padding: clamp(2rem, 4vw, 3.5rem);
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.svp-standout-content {
  display: flex;
  flex-direction: column;
}
.svp-standout-title {
  font-size: clamp(1.35rem, 2.2vw, 1.85rem);
  font-weight: 850;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: #0f172a;
  margin: 0 0 1rem;
}
.svp-standout-desc {
  font-size: 1.02rem;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 1.75rem;
}
.svp-standout-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.5rem, 3vw, 2.75rem);
  margin-bottom: 2.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}
.svp-standout-metric {
  display: flex;
  flex-direction: column;
}
.svp-standout-metric-val {
  font-size: clamp(1.85rem, 3vw, 2.4rem);
  font-weight: 850;
  line-height: 1.1;
  color: #ea580c;
  letter-spacing: -0.02em;
}
.svp-standout-metric-lbl {
  font-size: 0.82rem;
  font-weight: 600;
  color: #64748b;
  margin-top: 0.35rem;
}
.svp-standout-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff !important;
  background: var(--primary);
  padding: 0.75rem 1.4rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);
  transition: all 0.25s var(--ease);
  width: fit-content;
}
.svp-standout-link:hover {
  background: var(--primary-600);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
}
.svp-standout-link svg {
  width: 18px;
  height: 18px;
  color: inherit;
  transition: transform 0.25s var(--ease);
}
.svp-standout-link:hover svg {
  transform: translate(3px, -3px);
}

/* Standout Visual */
.svp-standout-visual {
  position: relative;
  width: 100%;
}
.svp-standout-img-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: #f8fafc;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.12);
  aspect-ratio: 16 / 9;
  display: block;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
}
.svp-standout-img-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  object-position: center !important;
  transition: transform 0.6s var(--ease);
}
.svp-standout-card:hover .svp-standout-img-card img {
  transform: scale(1.03);
}

/* Slide indicators / dots */
.svp-standout-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 2rem;
}
.svp-standout-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.2);
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s var(--ease);
}
.svp-standout-dot.active {
  width: 28px;
  background: var(--primary);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.4);
}

@media (max-width: 900px) {
  .svp-standout-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
    border-radius: 22px;
  }
  .svp-standout-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .svp-standout-arrows {
    align-self: flex-end;
  }
}

/* ---------- Why Partner Section (Metizsoft wpart style) ---------- */
.svp-wpart {
  padding: clamp(3.5rem, 6vw, 5.5rem) 0; background: var(--surface);
  border-block: 1px solid var(--line);
}
.svp-wpart-grid {
  display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4rem); align-items: flex-start;
}
.svp-wpart-left h2 {
  font-size: clamp(2rem, 4vw, 2.8rem); line-height: 1.18; color: var(--ink); margin: .75rem 0 1.25rem;
}
.svp-wpart-left p.lead {
  font-size: 1.05rem; line-height: 1.75; color: var(--muted); margin: 0 0 2rem;
}
.svp-wpart-list {
  display: grid; gap: 1.1rem;
}
.svp-wpart-item {
  display: flex; gap: 1.15rem; align-items: flex-start;
  padding: 1.4rem; background: #ffffff; border: 1px solid rgba(15, 23, 42, .08);
  border-radius: 16px; box-shadow: 0 2px 10px -2px rgba(11, 16, 32, .03);
}
.svp-wpart-ck {
  flex-shrink: 0; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%;
  background: rgba(79, 70, 229, .1); color: var(--primary);
}
.svp-wpart-ck svg { width: 16px; height: 16px; }
.svp-wpart-item h4 { font-size: 1.08rem; font-weight: 700; margin: 0 0 .35rem; color: var(--ink); }
.svp-wpart-item p { font-size: .92rem; line-height: 1.65; color: var(--muted); margin: 0; }

/* ---------- Step / Process & Roadmap ---------- */
.svp .cols { display: grid; gap: 1.65rem; }
.svp .cols.c2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.svp .cols.c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.svp .cols.c4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.svp .card {
  background: #ffffff; border: 1px solid rgba(15, 23, 42, .09);
  border-radius: 20px; padding: 2rem; box-shadow: var(--shadow);
}
.svp-step { position: relative; overflow: hidden; transition: transform .4s var(--ease), box-shadow .4s var(--ease); }
.svp-step:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.svp-step-num {
  display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 50%;
  font-weight: 700; font-size: .85rem; color: #fff; background: var(--grad); margin-bottom: 1.1rem;
}
.svp-step h3 { margin: 0 0 .5rem; color: var(--ink); font-size: 1.15rem; }
.svp-step p { margin: 0; color: var(--muted); line-height: 1.65; font-size: .92rem; }

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

/* ---------- Final CTA Banner ---------- */
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

/* 404 */
.svp-nf { text-align: center; padding: 6rem 0; }
.svp-nf-code {
  font-family: var(--serif); font-style: italic; font-size: clamp(4rem, 14vw, 8rem); font-weight: 700; line-height: 1;
  background: var(--grad-warm); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;
}

/* Keyframes */
@keyframes svp-in { from { opacity: 0; transform: translateY(22px); } }
@keyframes svp-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, 24px); } }
@keyframes svp-grad { to { background-position: 200% 0; } }
@keyframes svp-marq { to { transform: translateX(-50%); } }
@keyframes svp-ping { 70% { box-shadow: 0 0 0 9px rgba(251, 146, 60, 0); } 100% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); } }

/* Responsive */
@media (max-width: 1024px) {
  .svp-isol-r2-grid, .svp-wpart-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .svp-fsol-grid { grid-template-columns: 1fr; }
  .svp-final-box { grid-template-columns: 1fr; gap: 2rem; }
  .svp .cols.c3, .svp .cols.c4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 860px) {
  .svp-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 1.5rem 0; }
  .svp-stat-box:nth-child(2)::after { display: none; }
}
@media (max-width: 680px) {
  .svp .cols.c2, .svp .cols.c3, .svp .cols.c4 { grid-template-columns: 1fr; gap: 1.25rem; }
  .svp-hero .cta-row { flex-direction: column; width: 100%; }
  .svp-hero .cta-row .btn, .svp-final-actions .btn { width: 100%; text-align: center; justify-content: center; }
  .svp-iproj-grid { grid-template-columns: 1fr; }
  .svp-fsol-card, .svp-wpart-item, .svp .card { padding: 1.5rem; }
  .svp-iproj-body { padding: 1.5rem; }
}
@media (max-width: 480px) {
  .svp-hero-stats { grid-template-columns: 1fr; gap: 1.2rem 0; }
  .svp-stat-box::after { display: none !important; }
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

/* =========================================================
   Page Component
   ========================================================= */

export default function IndustryDetailPage({ industry: propIndustry }) {
  const industry = propIndustry || industriesData[0];

  if (!industry) {
    return (
      <div className="svp">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="container svp-nf">
          <div className="svp-nf-code">404</div>
          <h2>Industry Not Found</h2>
          <p>
            The requested industry profile could not be located in our catalog.
          </p>
          <Link href="/industries" className="btn btn-primary">
            Back to All Industries
          </Link>
        </div>
      </div>
    );
  }

  const combined = [
    ...(industry.compliance || []),
    ...(industry.pillTags || []),
    ...(industry.techStack || []),
  ];
  const marqueeTags =
    combined.length > 0
      ? combined
      : ["Next.js", "SOC-2", "HIPAA", "AWS", "Docker"];

  let projects = [];
  if (industry.caseStudySlugs && industry.caseStudySlugs.length > 0) {
    const matched = caseStudiesData.filter(
      (cs) =>
        industry.caseStudySlugs.includes(cs.slug) ||
        industry.caseStudySlugs.includes(cs.id),
    );
    if (matched.length > 0) projects = matched;
  }
  if (projects.length === 0) {
    const indKeywords = [
      industry.id,
      industry.slug,
      ...(industry.title || "").toLowerCase().split(/[\s&,-]+/),
    ].filter(Boolean);

    const scored = caseStudiesData.map((cs) => {
      let score = 0;
      const csText =
        `${cs.title} ${cs.industry} ${cs.category} ${cs.tags?.join(" ")}`.toLowerCase();
      indKeywords.forEach((kw) => {
        if (kw.length > 2 && csText.includes(kw)) score += 1;
      });
      return { cs, score };
    });

    const relevant = scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.cs);
    projects =
      relevant.length > 0 ? relevant.slice(0, 3) : caseStudiesData.slice(0, 3);
  }

  const otherIndustries = industriesData.filter((i) => i.slug !== industry.slug);

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO (Metizsoft SubpageHero style) ================= */}
      <section className="svp-hero" aria-labelledby="industry-title">
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />

        <div className="container">
          <div className="svp-hero-center">
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-hero">
                <strong>{industry.category}</strong> Technology &amp; Engineering
              </span>
            </div>

            <h1 id="industry-title">
              Top <em>{industry.title} Software Development</em> &amp; Engineering
            </h1>

            <p className="lead">
              {industry.heroSubtitle || industry.description}
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/#contact">
                Consult With an Architect{" "}
                <svg className="i" aria-hidden="true" width="18" height="18">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#solutions">
                Explore Solutions ↓
              </a>
            </div>
          </div>

          {/* Industry Metrics 4-Stat Bar (Metizsoft style) */}
          {industry.metrics?.length > 0 && (
            <div className="svp-hero-stats">
              {industry.metrics.map((stat, idx) => (
                <div key={idx} className="svp-stat-box">
                  <div className="svp-stat-num">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="svp-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= COMPLIANCE & TECH MARQUEE ================= */}
      <div className="svp-marquee" aria-label="Technologies and compliance frameworks">
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

      {/* ================= SPLIT OVERVIEW (Metizsoft isol-r2 style) ================= */}
      <section className="svp-isol-r2">
        <div className="container">
          <div className="svp-isol-r2-grid">
            <div className="svp-isol-r2-left">
              <div className="svp-isol-r2-eyebrow">— Domain Services</div>
              <h2>
                <span className="hi">{industry.title} Solutions</span> We Build
              </h2>
              <p className="svp-isol-r2-lead">
                We engineer intelligent {industry.title.toLowerCase()} platforms built from the ground up
                for clinical accuracy, data security, and regulatory compliance. Our team brings real domain
                depth to every engagement—not just generic development skills.
              </p>
              <div className="svp-isol-r2-sub">
                <h3>Building and Integrating Advanced {industry.title} Platforms</h3>
                <p>
                  We don&apos;t just build platforms; we engineer for scale, sub-second latency, and
                  strict external audits. Every release includes comprehensive telemetry, zero-trust tokenization,
                  and automated compliance reports.
                </p>
              </div>
              <div>
                <Link className="btn btn-primary" href="/#contact">
                  Share Your Requirements →
                </Link>
              </div>
            </div>

            <div className="svp-isol-r2-right">
              {(industry.capabilitiesList || industry.solutions?.map((s) => s.title))?.map((cap, idx) => (
                <a
                  key={idx}
                  href="#solutions"
                  className="svp-isol-r2-row"
                  aria-label={cap}
                >
                  <div className="svp-isol-r2-num">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="svp-isol-r2-content">
                    <h4>{cap}</h4>
                  </div>
                  <div className="svp-isol-r2-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SOLUTIONS (Metizsoft fsol style) ================= */}
      <section className="sec" id="solutions">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">What We Build</span>
            <h2>
              Enterprise-Grade <span className="hi">{industry.title} Software Platforms</span>
            </h2>
            <p>
              Engineered specifically to solve complex domain workflows, regulatory
              hurdles, and operational bottlenecks across {industry.title}.
            </p>
          </Reveal>

          <div className="svp-fsol-grid">
            {industry.solutions?.map((sol, idx) => (
              <Reveal
                key={idx}
                delay={idx * 90}
                className="svp-fsol-card"
              >
                <div className="svp-fsol-card-top">
                  <div className="svp-fsol-ico">
                    <svg className="i" aria-hidden="true">
                      <use href={`#${industry.icon || "i-code"}`} />
                    </svg>
                  </div>
                  <span className="svp-fsol-tag">
                    {String(idx + 1).padStart(2, "0")} — Domain
                  </span>
                </div>

                <h3>{sol.title}</h3>
                <p>{sol.description}</p>

                {sol.features?.length > 0 && (
                  <ul className="svp-fsol-features">
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <svg aria-hidden="true">
                          <use href="#i-check" />
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

      {/* ================= REGULATORY COMPLIANCE ================= */}
      {industry.compliance?.length > 0 && (
        <section className="sec alt" id="compliance">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Enterprise Security</span>
              <h2>Bank-Grade Compliance &amp; Regulatory Frameworks</h2>
              <p>
                We build zero-trust architectures that satisfy external third-party
                auditors and protect mission-critical customer data.
              </p>
            </Reveal>

            <div className="cols c3">
              {industry.compliance.map((item, idx) => (
                <Reveal
                  key={idx}
                  delay={(idx % 3) * 100}
                  className="card"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <span className="svp-step-num" style={{ margin: 0 }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 style={{ margin: 0, fontSize: "1.2rem", color: "var(--ink)" }}>{item}</h3>
                  </div>
                  <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65, fontSize: ".92rem" }}>
                    Full engineering compliance including encrypted data stores,
                    automated audit trails, continuous vulnerability scanning, and
                    least-privilege IAM controls.
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= STANDOUT PROJECTS SLIDER & SHOWCASE (Metizsoft iproj slider style) ================= */}
      {projects.length > 0 && (
        <IndustryProjectsCarousel
          projects={projects}
          industryTitle={industry.title}
        />
      )}

      {/* ================= WHY PARTNER (Metizsoft wpart style) ================= */}
      {industry.advantages?.length > 0 && (
        <section className="svp-wpart" id="advantages">
          <div className="container">
            <div className="svp-wpart-grid">
              <div className="svp-wpart-left">
                <span className="eyebrow">Why Partner with Vision</span>
                <h2>
                  Why Partner with Us for{" "}
                  <span className="hi">{industry.title}</span> Development?
                </h2>
                <p className="lead">
                  We combine deep {industry.title.toLowerCase()} domain knowledge with
                  proven full-lifecycle engineering. We understand clinical and financial workflows,
                  regulatory frameworks, and the high stakes of enterprise deployments.
                </p>
                <Link className="btn btn-primary" href="/#contact">
                  Book a Strategy Call →
                </Link>
              </div>

              <div className="svp-wpart-list">
                {industry.advantages.map((adv, idx) => (
                  <div key={idx} className="svp-wpart-item">
                    <div className="svp-wpart-ck">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4>{adv.title}</h4>
                      <p>{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= STRATEGIC ROADMAP / WORKFLOW ================= */}
      {industry.workflow?.length > 0 && (
        <section className="sec" id="workflow">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Our Methodology</span>
              <h2>Strategic Implementation Roadmap</h2>
              <p>
                A deterministic 4-step delivery pipeline engineered to de-risk
                complex domain builds from initial threat modeling to global cutover.
              </p>
            </Reveal>

            <div className="cols c4">
              {industry.workflow.map((flow, idx) => (
                <Reveal key={idx} delay={idx * 120} className="card svp-step">
                  <span className="svp-step-num">{flow.step}</span>
                  <h3>{flow.title}</h3>
                  <p>{flow.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQS ================= */}
      {industry.faqs?.length > 0 && (
        <section className="sec alt" id="faqs">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Domain FAQs</span>
              <h2>Frequently Asked Questions About {industry.title}</h2>
              <p>
                Clear answers regarding compliance guarantees, system integration,
                timelines, and post-launch SLAs.
              </p>
            </Reveal>

            <IndustryFaqAccordion items={industry.faqs} />
          </div>
        </section>
      )}

      {/* ================= COMPLEMENTARY INDUSTRIES ================= */}
      {otherIndustries.length > 0 && (
        <section className="sec">
          <div className="container">
            <Reveal className="sec-head">
              <span className="eyebrow">Explore Other Sectors</span>
              <h2>Complementary Industry Solutions</h2>
              <p>
                Discover our specialized capabilities across other enterprise verticals.
              </p>
            </Reveal>

            <div className="cols c3">
              {otherIndustries.slice(0, 3).map((other, idx) => (
                <Link
                  key={other.id}
                  href={`/industries/${other.slug}`}
                  className="card svp-step"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--grad, linear-gradient(135deg, #4f46e5, #7c3aed))", display: "grid", placeItems: "center", color: "#ffffff", boxShadow: "0 6px 16px -4px rgba(79,70,229,.4)" }}>
                      <svg className="i" width="22" height="22" style={{ stroke: "#ffffff", fill: "none", color: "#ffffff" }} aria-hidden="true">
                        <use href={`#${other.icon || "i-code"}`} />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "rgba(79,70,229,.4)" }}>
                      {other.number}
                    </span>
                  </div>
                  <h3 style={{ margin: "0 0 .5rem", fontSize: "1.2rem", color: "var(--ink)" }}>{other.title}</h3>
                  <p style={{ margin: "0 0 1rem", color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.65 }}>
                    {other.shortDescription}
                  </p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", fontWeight: 700, fontSize: ".9rem", color: "var(--primary)" }}>
                    View Solutions →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <Reveal className="svp-final-box">
            <div>
              <span className="marker">Ready to Engineer?</span>
              <h2>
                Let&apos;s Build Your <span className="accent">{industry.title}</span> Platform
              </h2>
              <p className="sub">
                Connect directly with a lead solution architect. We&apos;ll evaluate
                your compliance requirements, provide a feasibility blueprint, and
                scope realistic delivery milestones.
              </p>
              <div className="svp-final-actions">
                <Link className="btn btn-primary" href="/#contact">
                  Schedule Free Discovery Call →
                </Link>
                <Link className="btn btn-ghost" href="/industries">
                  Browse All Industries
                </Link>
              </div>
            </div>

            <div>
              <div className="svp-poc-card">
                <div className="svp-poc-big">100% IP</div>
                <div className="svp-poc-title">Full Code Ownership</div>
                <p>
                  All repositories, deployment scripts, and intellectual property
                  transfer directly to your company upon milestone delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
