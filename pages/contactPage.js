"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { brandInfo } from "@/data/company";

/* =========================================================
   Contact page — full redesign (mobile-first)
   All styles are scoped under .ct and use their own tokens,
   so nothing depends on global CSS variables.
   ========================================================= */
const styles = `
.ct {
  --ct-ink: #0f172a;
  --ct-muted: #5b6477;
  --ct-line: #e6e8f0;
  --ct-bg: #ffffff;
  --ct-soft: #f6f7fb;
  --ct-primary: #4f46e5;
  --ct-primary-d: #4338ca;
  --ct-violet: #8b5cf6;
  --ct-orange: #fb923c;
  --ct-green: #10b981;
  --ct-radius: 18px;
  --ct-shadow: 0 1px 2px rgba(15,23,42,.04), 0 8px 24px -8px rgba(15,23,42,.08);
  --ct-shadow-lg: 0 2px 4px rgba(15,23,42,.04), 0 24px 48px -16px rgba(79,70,229,.22);
  --ct-grad: linear-gradient(120deg, #4f46e5 0%, #8b5cf6 55%, #fb923c 100%);
  color: var(--ct-ink);
  background: var(--ct-bg);
  overflow-x: clip;
  -webkit-font-smoothing: antialiased;
}
.ct *, .ct *::before, .ct *::after { box-sizing: border-box; }
.ct section[id] { scroll-margin-top: 96px; }
.ct .wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 1.1rem; }
@media (min-width: 640px) { .ct .wrap { padding: 0 1.75rem; } }

/* ---------- generic ---------- */
.ct h1, .ct h2, .ct h3, .ct h4, .ct p { margin: 0; }
.ct .eyebrow {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .38rem .85rem; border-radius: 999px;
  background: rgba(79,70,229,.08); color: var(--ct-primary);
  font-size: .78rem; font-weight: 700; letter-spacing: .02em;
}
.ct .eyebrow i {
  width: 7px; height: 7px; border-radius: 50%; background: var(--ct-orange);
  animation: ct-ping 2s infinite;
}
.ct .sec { padding: 3.5rem 0; }
@media (min-width: 768px) { .ct .sec { padding: 5.5rem 0; } }
.ct .sec.soft { background: var(--ct-soft); }
.ct .sec-head { text-align: center; max-width: 680px; margin: 0 auto 2.25rem; }
.ct .sec-head h2 {
  font-size: clamp(1.65rem, 4.5vw, 2.5rem); line-height: 1.15;
  font-weight: 800; letter-spacing: -.02em; margin: .9rem 0 .7rem;
}
.ct .sec-head p { color: var(--ct-muted); line-height: 1.7; font-size: 1rem; }

.ct .btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .6rem;
  min-height: 48px; padding: .8rem 1.6rem; border-radius: 999px; border: 0;
  font: inherit; font-weight: 700; font-size: .98rem; cursor: pointer;
  color: #fff; background: var(--ct-primary); text-decoration: none;
  box-shadow: 0 10px 24px -8px rgba(79,70,229,.55);
  transition: transform .2s ease, box-shadow .2s ease, background .2s;
}
.ct .btn:hover { transform: translateY(-2px); background: var(--ct-primary-d); }
.ct .btn:focus-visible, .ct a:focus-visible, .ct button:focus-visible,
.ct input:focus-visible, .ct textarea:focus-visible {
  outline: 3px solid rgba(79,70,229,.35); outline-offset: 2px;
}
.ct .btn:disabled { opacity: .75; cursor: progress; transform: none; }
.ct .btn-ghost {
  background: #fff; color: var(--ct-ink); border: 1.5px solid var(--ct-line); box-shadow: none;
}
.ct .btn-ghost:hover { background: var(--ct-soft); border-color: var(--ct-primary); }

/* ---------- hero ---------- */
.ct .hero { position: relative; overflow: hidden; padding: 1.25rem 0 2.25rem; }
.ct .hero::before, .ct .hero::after {
  content: ""; position: absolute; border-radius: 50%; filter: blur(70px);
  pointer-events: none; z-index: 0;
}
.ct .hero::before {
  width: 420px; height: 420px; top: -180px; left: -120px; background: rgba(79,70,229,.16);
}
.ct .hero::after {
  width: 380px; height: 380px; top: -120px; right: -120px; background: rgba(251,146,60,.18);
}
.ct .hero .wrap { position: relative; z-index: 1; text-align: center; }
.ct .crumbs {
  display: inline-flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem;
  padding: .35rem .9rem; border-radius: 999px; font-size: .82rem;
  background: rgba(255,255,255,.75); border: 1px solid var(--ct-line);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}
.ct .crumbs a { color: var(--ct-muted); text-decoration: none; display: inline-flex; align-items: center; gap: .35rem; font-weight: 500; }
.ct .crumbs a:hover { color: var(--ct-primary); }
.ct .crumbs svg { width: 14px; height: 14px; }
.ct .crumbs .sep { color: #a3acbd; }
.ct .crumbs .cur { font-weight: 700; }
.ct .hero h1 {
  font-size: clamp(2.1rem, 7vw, 3.9rem); line-height: 1.1; font-weight: 800;
  letter-spacing: -.03em; margin: 1rem auto .95rem; max-width: 18ch;
}
.ct .hero h1 em {
  font-style: italic; font-family: Georgia, "Times New Roman", serif; font-weight: 700;
  background: var(--ct-grad); background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: ct-grad 7s linear infinite;
}
.ct .hero .lead {
  color: var(--ct-muted); font-size: clamp(1rem, 2.4vw, 1.2rem); line-height: 1.7;
  max-width: 62ch; margin: 0 auto 1.75rem;
}
.ct .hero-cta { display: flex; flex-direction: column; gap: .75rem; max-width: 420px; margin: 0 auto 2rem; }
@media (min-width: 560px) { .ct .hero-cta { flex-direction: row; max-width: none; justify-content: center; } }

.ct .trust {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: .65rem; max-width: 820px; margin: 0 auto;
}
@media (min-width: 760px) { .ct .trust { grid-template-columns: repeat(4, 1fr); } }
.ct .trust div {
  display: flex; align-items: center; justify-content: center; gap: .5rem;
  padding: .75rem .6rem; border-radius: 14px; background: rgba(255,255,255,.85);
  border: 1px solid var(--ct-line); font-size: .8rem; font-weight: 700; text-align: left;
}
.ct .trust svg { width: 18px; height: 18px; color: var(--ct-primary); flex-shrink: 0; }

/* ---------- quick channels ---------- */
.ct .channels { display: grid; gap: .85rem; margin-top: 1.25rem; }
@media (min-width: 760px) { .ct .channels { grid-template-columns: repeat(3, 1fr); gap: 1.1rem; } }
.ct .channel {
  display: flex; align-items: center; gap: .95rem; padding: 1.05rem 1.15rem;
  border-radius: var(--ct-radius); background: var(--ct-bg); border: 1px solid var(--ct-line);
  box-shadow: var(--ct-shadow); text-decoration: none; color: inherit; min-width: 0;
  transition: transform .2s ease, border-color .2s, box-shadow .2s;
}
.ct .channel:hover { transform: translateY(-3px); border-color: var(--ct-primary); box-shadow: var(--ct-shadow-lg); }
.ct .channel .ico {
  width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; flex-shrink: 0;
  background: rgba(79,70,229,.1); color: var(--ct-primary);
}
.ct .channel .ico.wa { background: rgba(34,197,94,.13); color: #16a34a; }
.ct .channel .ico svg { width: 22px; height: 22px; }
.ct .channel .txt { min-width: 0; flex: 1; }
.ct .channel strong { display: block; font-size: .95rem; font-weight: 800; }
.ct .channel span { display: block; font-size: .82rem; color: var(--ct-muted); overflow-wrap: anywhere; }
.ct .channel .go { color: var(--ct-primary); font-weight: 800; transition: transform .2s; }
.ct .channel:hover .go { transform: translateX(3px); }

/* ---------- main grid ---------- */
.ct .hub { display: grid; gap: 1.75rem; padding-top: 2rem; }
@media (min-width: 1000px) { .ct .hub { grid-template-columns: 1.3fr 1fr; gap: 2.5rem; align-items: start; } }

.ct .card {
  background: var(--ct-bg); border: 1px solid var(--ct-line); border-radius: 22px;
  box-shadow: var(--ct-shadow);
}
.ct .form-card {
  padding: 1.35rem; box-shadow: var(--ct-shadow-lg); position: relative; overflow: hidden;
}
.ct .form-card::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: var(--ct-grad);
}
@media (min-width: 640px) { .ct .form-card { padding: 2.25rem; } }
.ct .form-head h2 { font-size: clamp(1.4rem, 3.5vw, 1.8rem); font-weight: 800; letter-spacing: -.02em; }
.ct .form-head p { color: var(--ct-muted); line-height: 1.6; font-size: .93rem; margin-top: .45rem; }

.ct .fgroup { margin-top: 1.5rem; }
.ct .flabel {
  display: flex; align-items: center; gap: .55rem; margin-bottom: .7rem;
  font-size: .78rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: var(--ct-muted);
}
.ct .flabel b {
  width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center;
  background: var(--ct-primary); color: #fff; font-size: .72rem; letter-spacing: 0;
}
.ct .pills { display: flex; flex-wrap: wrap; gap: .5rem; }
.ct .pill {
  min-height: 42px; padding: .5rem 1rem; border-radius: 999px; font: inherit;
  font-size: .85rem; font-weight: 600; cursor: pointer; color: var(--ct-ink);
  background: var(--ct-soft); border: 1.5px solid var(--ct-line);
  transition: all .18s ease;
}
.ct .pill:hover { border-color: var(--ct-primary); background: rgba(79,70,229,.05); }
.ct .pill[aria-pressed="true"] {
  background: var(--ct-primary); border-color: var(--ct-primary); color: #fff;
  box-shadow: 0 6px 16px -4px rgba(79,70,229,.45);
}

.ct .fields { display: grid; gap: 1rem; }
@media (min-width: 560px) { .ct .fields { grid-template-columns: 1fr 1fr; } .ct .fields .full { grid-column: 1 / -1; } }
.ct .field { display: flex; flex-direction: column; gap: .4rem; min-width: 0; }
.ct .field label { font-size: .84rem; font-weight: 700; }
.ct .field label small { color: var(--ct-muted); font-weight: 500; }
.ct .input {
  width: 100%; min-height: 48px; padding: .75rem 1rem; border-radius: 12px;
  font: inherit; font-size: 16px; /* 16px prevents iOS zoom */ color: var(--ct-ink);
  background: var(--ct-soft); border: 1.5px solid var(--ct-line);
  transition: border-color .2s, box-shadow .2s, background .2s;
}
.ct textarea.input { min-height: 130px; resize: vertical; line-height: 1.6; }
.ct .input::placeholder { color: #9aa3b5; }
.ct .input:focus { outline: none; background: #fff; border-color: var(--ct-primary); box-shadow: 0 0 0 4px rgba(79,70,229,.12); }
.ct .input.bad { border-color: #ef4444; background: #fff7f7; }
.ct .err { color: #dc2626; font-size: .78rem; font-weight: 600; }
.ct .counter { align-self: flex-end; color: var(--ct-muted); font-size: .74rem; }

.ct .nda {
  display: flex; gap: .8rem; align-items: flex-start; margin: 1.4rem 0;
  padding: .95rem 1rem; border-radius: 14px; cursor: pointer;
  background: rgba(79,70,229,.045); border: 1px dashed rgba(79,70,229,.3);
}
.ct .nda input { width: 20px; height: 20px; margin-top: .1rem; accent-color: var(--ct-primary); flex-shrink: 0; }
.ct .nda span { font-size: .86rem; line-height: 1.55; }
.ct .nda strong { color: var(--ct-primary); }
.ct .submit { width: 100%; min-height: 54px; font-size: 1.02rem; }
.ct .fine { text-align: center; color: var(--ct-muted); font-size: .78rem; margin-top: .9rem; }
.ct .spinner {
  width: 20px; height: 20px; border-radius: 50%;
  border: 2.5px solid rgba(255,255,255,.4); border-top-color: #fff;
  animation: ct-spin .8s linear infinite;
}

/* success */
.ct .success { text-align: center; padding: .5rem 0; animation: ct-in .5s ease; }
.ct .success .tick {
  width: 68px; height: 68px; border-radius: 50%; margin: 0 auto 1.1rem;
  display: grid; place-items: center; color: #fff; background: var(--ct-green);
  box-shadow: 0 12px 28px -6px rgba(16,185,129,.5);
}
.ct .success .tick svg { width: 32px; height: 32px; }
.ct .success h2 { font-size: 1.6rem; font-weight: 800; margin-bottom: .5rem; }
.ct .success .lead { color: var(--ct-muted); line-height: 1.6; margin-bottom: 1rem; }
.ct .ticket {
  display: inline-block; padding: .45rem 1.1rem; border-radius: 999px; margin-bottom: 1.5rem;
  background: rgba(79,70,229,.1); color: var(--ct-primary); font-weight: 800; font-size: .86rem;
}
.ct .steps {
  text-align: left; list-style: none; padding: 1.25rem; margin: 0 0 1.5rem;
  border-radius: 16px; background: var(--ct-soft); border: 1px solid var(--ct-line);
  display: grid; gap: .85rem;
}
.ct .steps li { display: flex; gap: .75rem; align-items: flex-start; font-size: .9rem; font-weight: 600; line-height: 1.5; }
.ct .steps b {
  width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
  background: var(--ct-primary); color: #fff; font-size: .74rem;
}

/* ---------- sidebar ---------- */
.ct .side { display: grid; gap: 1.25rem; }
.ct .status {
  display: flex; align-items: center; gap: .8rem; padding: 1rem 1.2rem; border-radius: 16px;
  background: rgba(16,185,129,.08); border: 1px solid rgba(16,185,129,.28);
  color: #065f46; font-size: .88rem; line-height: 1.5;
}
.ct .status i {
  width: 10px; height: 10px; border-radius: 50%; background: var(--ct-green); flex-shrink: 0;
  animation: ct-ping-g 2s infinite;
}
.ct .offices { padding: 1.35rem; }
@media (min-width: 640px) { .ct .offices { padding: 1.75rem; } }
.ct .offices h3 { font-size: 1.2rem; font-weight: 800; display: flex; align-items: center; gap: .55rem; }
.ct .offices h3 svg { width: 20px; height: 20px; color: var(--ct-primary); }
.ct .offices .intro { color: var(--ct-muted); font-size: .9rem; margin: .45rem 0 1.15rem; line-height: 1.6; }
.ct .office-list { display: grid; gap: .8rem; }
.ct .office {
  padding: 1rem 1.1rem; border-radius: 14px; background: var(--ct-soft); border: 1px solid var(--ct-line);
}
.ct .office-top { display: flex; align-items: center; justify-content: space-between; gap: .5rem; margin-bottom: .35rem; }
.ct .office-top strong { font-size: .95rem; }
.ct .badge {
  padding: .18rem .55rem; border-radius: 999px; font-size: .68rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .04em; background: rgba(79,70,229,.1); color: var(--ct-primary);
}
.ct .office .city { color: var(--ct-primary); font-weight: 700; font-size: .86rem; }
.ct .office .addr { color: var(--ct-muted); font-size: .82rem; line-height: 1.5; margin: .2rem 0 .35rem; }
.ct .office a { color: var(--ct-ink); font-weight: 700; font-size: .84rem; text-decoration: none; }
.ct .office a:hover { color: var(--ct-primary); }

.ct .hours { padding: 1.35rem; background: linear-gradient(135deg, #0b1020, #1e1b4b); color: #fff; border: 0; }
.ct .hours h3 { font-size: 1.05rem; font-weight: 800; margin-bottom: .4rem; }
.ct .hours p { color: #b4bdd3; font-size: .86rem; line-height: 1.6; }
.ct .zones { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: .9rem; }
.ct .zones span {
  padding: .3rem .7rem; border-radius: 999px; font-size: .74rem; font-weight: 700;
  background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.14);
}

/* ---------- roadmap ---------- */
.ct .road { display: grid; gap: 1rem; position: relative; }
@media (min-width: 640px) { .ct .road { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1000px) { .ct .road { grid-template-columns: repeat(4, 1fr); gap: 1.25rem; } }
.ct .step {
  padding: 1.5rem 1.35rem; border-radius: var(--ct-radius); background: var(--ct-bg);
  border: 1px solid var(--ct-line); box-shadow: var(--ct-shadow);
  transition: transform .2s ease, box-shadow .2s;
}
.ct .step:hover { transform: translateY(-4px); box-shadow: var(--ct-shadow-lg); }
.ct .step .num {
  width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center;
  background: var(--ct-grad); color: #fff; font-weight: 800; margin-bottom: 1rem;
}
.ct .step h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: .45rem; }
.ct .step p { color: var(--ct-muted); font-size: .9rem; line-height: 1.65; margin-bottom: 1rem; }
.ct .step .when { font-size: .8rem; font-weight: 800; color: var(--ct-primary); }

/* ---------- FAQ ---------- */
.ct .faq { max-width: 820px; margin: 0 auto; display: grid; gap: .8rem; }
.ct .faq-item { border-radius: 16px; background: var(--ct-bg); border: 1px solid var(--ct-line); overflow: hidden; transition: border-color .2s, box-shadow .2s; }
.ct .faq-item.open { border-color: var(--ct-primary); box-shadow: var(--ct-shadow); }
.ct .faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  min-height: 60px; padding: 1rem 1.15rem; background: transparent; border: 0; cursor: pointer;
  font: inherit; font-size: 1rem; font-weight: 700; text-align: left; color: var(--ct-ink);
}
.ct .faq-ico {
  width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
  background: var(--ct-soft); color: var(--ct-primary); font-size: 1.25rem; font-weight: 700;
  transition: transform .25s, background .25s, color .25s;
}
.ct .faq-item.open .faq-ico { transform: rotate(45deg); background: var(--ct-primary); color: #fff; }
.ct .faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .3s ease; }
.ct .faq-item.open .faq-a { grid-template-rows: 1fr; }
.ct .faq-a > div { overflow: hidden; }
.ct .faq-a p { padding: 0 1.15rem 1.2rem; color: var(--ct-muted); line-height: 1.75; font-size: .95rem; }

/* ---------- guarantees ---------- */
.ct .guar {
  margin-top: 3rem; padding: 1.75rem 1.4rem; border-radius: 24px; color: #fff;
  background: linear-gradient(135deg, #0b1020, #172554 70%, #312e81);
  display: grid; gap: 1.5rem; box-shadow: var(--ct-shadow-lg);
}
@media (min-width: 800px) { .ct .guar { grid-template-columns: repeat(3, 1fr); padding: 2.25rem 2.5rem; gap: 2rem; } }
.ct .guar div.g { display: flex; gap: 1rem; align-items: flex-start; }
.ct .guar .gi {
  width: 46px; height: 46px; border-radius: 13px; flex-shrink: 0; display: grid; place-items: center;
  background: rgba(255,255,255,.1); color: #fdba74;
}
.ct .guar .gi svg { width: 22px; height: 22px; }
.ct .guar h4 { font-size: 1rem; font-weight: 800; margin-bottom: .3rem; }
.ct .guar p { color: #a9b4cc; font-size: .86rem; line-height: 1.6; }

/* ---------- final CTA ---------- */
.ct .final { text-align: center; padding: 2.5rem 1.25rem; border-radius: 24px; background: var(--ct-soft); border: 1px solid var(--ct-line); margin-top: 3rem; }
.ct .final h3 { font-size: clamp(1.3rem, 3.5vw, 1.8rem); font-weight: 800; letter-spacing: -.02em; margin-bottom: .5rem; }
.ct .final p { color: var(--ct-muted); margin-bottom: 1.4rem; }

/* ---------- keyframes ---------- */
@keyframes ct-ping { 0% { box-shadow: 0 0 0 0 rgba(251,146,60,.6); } 70%,100% { box-shadow: 0 0 0 9px rgba(251,146,60,0); } }
@keyframes ct-ping-g { 0% { box-shadow: 0 0 0 0 rgba(16,185,129,.6); } 70%,100% { box-shadow: 0 0 0 9px rgba(16,185,129,0); } }
@keyframes ct-grad { to { background-position: -200% 0; } }
@keyframes ct-spin { to { transform: rotate(360deg); } }
@keyframes ct-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .ct *, .ct *::before, .ct *::after { animation: none !important; transition: none !important; }
}
`;

const services = [
  "Custom Web Application",
  "Mobile App (iOS/Android)",
  "AI & Autonomous Agents",
  "Headless Ecommerce / Shopify",
  "Cloud & DevOps Architecture",
  "Dedicated Engineering Team",
];
const budgets = [
  "Under $10,000",
  "$10k - $25,000",
  "$25k - $50,000",
  "$50,000+",
];
const timelines = [
  "Immediate (< 2 weeks)",
  "1 - 2 Months",
  "3 - 6 Months",
  "Exploring / Flexible",
];

const offices = [
  {
    country: "🇮🇳 India",
    badge: "Tech HQ",
    city: "Ahmedabad, Gujarat",
    addr: "S.G. Highway, Corporate Hub, Ahmedabad 380054",
    phone: "+91 00000 00000",
  },
  {
    country: "🇺🇸 United States",
    badge: "Accounts",
    city: "Delaware & New York",
    addr: "1201 N Orange St, Suite 700, Wilmington, DE 19801",
    phone: "+1 (302) 456-7890",
  },
  {
    country: "🇬🇧 United Kingdom",
    badge: "Partners",
    city: "London, UK",
    addr: "100 Bishopsgate, London EC2N 4AG",
    phone: "+44 20 7946 0912",
  },
  {
    country: "🇦🇪 Middle East",
    badge: "Operations",
    city: "Dubai, UAE",
    addr: "Dubai Silicon Oasis, DTEC Innovation Hub",
    phone: "+971 4 390 1900",
  },
];

const roadmap = [
  {
    t: "Technical Triage",
    d: "Our principal architect audits your brief, tech stack requirements and potential integration bottlenecks.",
    w: "⚡ Within 24 hours",
  },
  {
    t: "Architectural Discovery",
    d: "A focused 30-minute call to dive into schema models, API topology, scale targets and team structure.",
    w: "📅 Day 2 – 3",
  },
  {
    t: "Proposal & Sprint Blueprint",
    d: "An itemized milestone breakdown, fixed or agile pricing, and clear deliverable timelines.",
    w: "📐 Within 48 hours",
  },
  {
    t: "Sprint Kickoff or 5-Day POC",
    d: "Repository initialized, Slack connected, and senior engineers start shipping production code.",
    w: "🚀 Week 1",
  },
];

const faqs = [
  {
    q: "How quickly will an engineering lead respond to our inquiry?",
    a: "We guarantee a direct response from a solution architect or senior engineering director within 24 business hours. If your inquiry includes a high-priority technical brief, we often respond within 4 hours.",
  },
  {
    q: "Will you sign a bilateral Non-Disclosure Agreement (NDA)?",
    a: "Yes, absolutely. We sign bilateral NDAs before reviewing proprietary repositories, technical architecture documents, or business strategies. Tick the NDA option on the form and we will send our mutual NDA.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Three flexible paths: (1) Fixed-scope milestone delivery for projects with a well-defined PRD; (2) Dedicated agile pods (frontend, backend, QA, PM) billed monthly; and (3) rapid 2–5 day proof-of-concepts to de-risk complex technical assumptions before a larger commitment.",
  },
  {
    q: "How is intellectual property (IP) and code ownership handled?",
    a: "Upon milestone completion and settlement, 100% of all source code, software artifacts, git repositories, architectural blueprints and associated IP belong entirely to you, with zero licensing encumbrances.",
  },
  {
    q: "Which time zones can your engineering teams overlap with?",
    a: "Our core engineering hub in Ahmedabad runs designated overlapping shifts covering US Eastern, US Pacific, UK/European and Australian business hours, so daily standups and live Slack communication stay smooth.",
  },
];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  requireNda: true,
  honeypot: "",
};

/* ---------- small icon helper ---------- */
const Ico = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

export default function ContactPage() {
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [ticket, setTicket] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = useMemo(() => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!emailOk(form.email.trim()))
      e.email = "Please enter a valid work email.";
    if (form.message.trim().length < 15)
      e.message = "Tell us a bit more (at least 15 characters).";
    return e;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return; // spam trap
    if (Object.keys(errors).length) {
      setTouched({ name: true, email: true, message: true });
      const first = ["name", "email", "message"].find((k) => errors[k]);
      document.getElementById(`ct-${first}`)?.focus();
      return;
    }
    setSubmitting(true);
    // TODO: replace with a real API call (fetch("/api/contact", { method: "POST", body: ... }))
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTicket(
        `VT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      );
      document
        .getElementById("brief")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1100);
  };

  const reset = () => {
    setDone(false);
    setForm(emptyForm);
    setTouched({});
  };

  const showErr = (k) => touched[k] && errors[k];

  const Pills = ({ label, num, options, value, onChange }) => (
    <div className="fgroup" role="group" aria-label={label}>
      <div className="flabel">
        <b>{num}</b>
        {label}
      </div>
      <div className="pills">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="pill"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main id="main" className="ct">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/" title="Home">
              <Ico>
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </Ico>
              Home
            </Link>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span className="cur" aria-current="page">
              Contact
            </span>
          </nav>

          <div>
            <span className="eyebrow">
              <i />
              Direct Engineering Consultation
            </span>
          </div>

          <h1>
            Let&apos;s start an <em>engineering conversation</em>
          </h1>

          <p className="lead">
            Talk directly with our solution architects and software leads.
            Whether you need to scale an enterprise web app, launch native
            mobile software, or deploy custom AI agents — expect realistic
            estimates and fast turnaround.
          </p>

          <div className="hero-cta">
            <a href="#brief" className="btn">
              Start Your Project{" "}
              <Ico width="18" height="18" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </Ico>
            </a>
            <a href={`mailto:${brandInfo.email}`} className="btn btn-ghost">
              Email Us
            </a>
          </div>

          <div className="trust">
            <div>
              <Ico>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </Ico>
              24-Hour SLA Response
            </div>
            <div>
              <Ico>
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </Ico>
              Bilateral NDA Included
            </div>
            <div>
              <Ico>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 14 14" />
              </Ico>
              Free Technical Audit
            </div>
            <div>
              <Ico>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </Ico>
              Zero-Pressure Call
            </div>
          </div>
        </div>
      </header>

      {/* ================= CHANNELS + FORM ================= */}
      <section aria-label="Contact options">
        <div className="wrap">
          <div className="channels">
            <a href={`mailto:${brandInfo.email}`} className="channel">
              <div className="ico">
                <Ico>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </Ico>
              </div>
              <div className="txt">
                <strong>Email Us</strong>
                <span>{brandInfo.email}</span>
              </div>
              <span className="go" aria-hidden="true">
                →
              </span>
            </a>
            <a href="tel:+919876543210" className="channel">
              <div className="ico">
                <Ico>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </Ico>
              </div>
              <div className="txt">
                <strong>Call Support</strong>
                <span>+91 (079) 4890-0000</span>
              </div>
              <span className="go" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20Vision%20Team,%20I'd%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="channel"
            >
              <div className="ico wa">
                <Ico>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </Ico>
              </div>
              <div className="txt">
                <strong>WhatsApp Desk</strong>
                <span>Chat with an architect</span>
              </div>
              <span className="go" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="hub">
            {/* ---------- FORM ---------- */}
            <section
              id="brief"
              className="card form-card"
              aria-labelledby="brief-title"
            >
              {done ? (
                <div className="success" role="status">
                  <div className="tick">
                    <Ico strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </Ico>
                  </div>
                  <h2>Technical brief received!</h2>
                  <p className="lead">
                    Thank you, <strong>{form.name}</strong>. A senior architect
                    has been assigned to evaluate your requirements.
                  </p>
                  <div className="ticket">Tracking ID: {ticket}</div>
                  <ol className="steps">
                    <li>
                      <b>1</b>
                      <span>
                        Architectural review of technical scope &amp; stack
                        feasibility.
                      </span>
                    </li>
                    <li>
                      <b>2</b>
                      <span>
                        {form.requireNda
                          ? "Mutual NDA generated and sent to your email."
                          : "NDA available on request."}
                      </span>
                    </li>
                    <li>
                      <b>3</b>
                      <span>
                        Invitation to a 30-minute discovery call with our tech
                        lead.
                      </span>
                    </li>
                    <li>
                      <b>4</b>
                      <span>
                        Itemized estimate, sprint plan and delivery milestones.
                      </span>
                    </li>
                  </ol>
                  <button type="button" className="btn" onClick={reset}>
                    Submit another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-head">
                    <h2 id="brief-title">Project Specification Brief</h2>
                    <p>
                      Fill out this quick form and our engineering leads will
                      reply within 24 hours with an initial feasibility
                      assessment.
                    </p>
                  </div>

                  {/* honeypot */}
                  <div
                    style={{ position: "absolute", left: "-9999px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.honeypot}
                      onChange={set("honeypot")}
                    />
                  </div>

                  <Pills
                    num="1"
                    label="Primary area of interest"
                    options={services}
                    value={service}
                    onChange={setService}
                  />
                  <Pills
                    num="2"
                    label="Estimated budget"
                    options={budgets}
                    value={budget}
                    onChange={setBudget}
                  />
                  <Pills
                    num="3"
                    label="Target delivery window"
                    options={timelines}
                    value={timeline}
                    onChange={setTimeline}
                  />

                  <div className="fgroup">
                    <div className="flabel">
                      <b>4</b>Contact &amp; organization details
                    </div>
                    <div className="fields">
                      <div className="field">
                        <label htmlFor="ct-name">Full name *</label>
                        <input
                          id="ct-name"
                          className={`input ${showErr("name") ? "bad" : ""}`}
                          type="text"
                          autoComplete="name"
                          placeholder="Alex Morgan"
                          value={form.name}
                          onChange={set("name")}
                          onBlur={blur("name")}
                          aria-invalid={!!showErr("name")}
                          aria-describedby={
                            showErr("name") ? "ct-name-e" : undefined
                          }
                        />
                        {showErr("name") && (
                          <span id="ct-name-e" className="err">
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div className="field">
                        <label htmlFor="ct-email">Work email *</label>
                        <input
                          id="ct-email"
                          className={`input ${showErr("email") ? "bad" : ""}`}
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="alex@organization.com"
                          value={form.email}
                          onChange={set("email")}
                          onBlur={blur("email")}
                          aria-invalid={!!showErr("email")}
                          aria-describedby={
                            showErr("email") ? "ct-email-e" : undefined
                          }
                        />
                        {showErr("email") && (
                          <span id="ct-email-e" className="err">
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="field">
                        <label htmlFor="ct-phone">
                          Phone / WhatsApp <small>(optional)</small>
                        </label>
                        <input
                          id="ct-phone"
                          className="input"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={set("phone")}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="ct-company">
                          Company / project <small>(optional)</small>
                        </label>
                        <input
                          id="ct-company"
                          className="input"
                          type="text"
                          autoComplete="organization"
                          placeholder="Acme Technologies"
                          value={form.company}
                          onChange={set("company")}
                        />
                      </div>
                      <div className="field full">
                        <label htmlFor="ct-message">
                          Project overview &amp; key goals *
                        </label>
                        <textarea
                          id="ct-message"
                          className={`input ${showErr("message") ? "bad" : ""}`}
                          maxLength={2000}
                          placeholder="What are you building? Include key requirements, your current tech stack (if any) and the outcome you want."
                          value={form.message}
                          onChange={set("message")}
                          onBlur={blur("message")}
                          aria-invalid={!!showErr("message")}
                          aria-describedby={
                            showErr("message") ? "ct-message-e" : undefined
                          }
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: ".5rem",
                          }}
                        >
                          {showErr("message") ? (
                            <span id="ct-message-e" className="err">
                              {errors.message}
                            </span>
                          ) : (
                            <span />
                          )}
                          <span className="counter">
                            {form.message.length}/2000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label className="nda" htmlFor="ct-nda">
                    <input
                      id="ct-nda"
                      type="checkbox"
                      checked={form.requireNda}
                      onChange={(e) =>
                        setForm({ ...form, requireNda: e.target.checked })
                      }
                    />
                    <span>
                      <strong>Request a mutual NDA.</strong> We&apos;ll send one
                      before the technical discovery call.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="btn submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="spinner" />
                        <span>Sending your brief…</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Ico width="18" height="18" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </Ico>
                      </>
                    )}
                  </button>
                  <p className="fine">
                    🔒 Your details stay private and are never shared or used to
                    train AI.
                  </p>
                </form>
              )}
            </section>

            {/* ---------- SIDEBAR ---------- */}
            <aside className="side" aria-label="Offices and availability">
              <div className="status" role="status">
                <i />
                <span>
                  <strong>Engineering labs: active &amp; online.</strong> Now
                  accepting client sprint bookings for Q1–Q2.
                </span>
              </div>

              <div className="card offices">
                <h3>
                  <Ico>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </Ico>
                  Global offices
                </h3>
                <p className="intro">
                  Headquartered in India, with client engagement presence in the
                  US, UK and UAE.
                </p>
                <div className="office-list">
                  {offices.map((o) => (
                    <div className="office" key={o.country}>
                      <div className="office-top">
                        <strong>{o.country}</strong>
                        <span className="badge">{o.badge}</span>
                      </div>
                      <div className="city">{o.city}</div>
                      <p className="addr">{o.addr}</p>
                      <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}>
                        {o.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card hours">
                <h3>Time-zone friendly</h3>
                <p>
                  Daily standups and live Slack communication, with overlapping
                  shifts for your working hours.
                </p>
                <div className="zones">
                  <span>US Eastern</span>
                  <span>US Pacific</span>
                  <span>UK / CET</span>
                  <span>Australia AEST</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section className="sec soft" style={{ marginTop: "3.5rem" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <i />
              Predictable Engineering
            </span>
            <h2>What happens after you reach out?</h2>
            <p>
              No generic sales pitches. Our process is led by software
              architects who respect your time and technical roadmap.
            </p>
          </div>
          <div className="road">
            {roadmap.map((s, i) => (
              <article className="step" key={s.t}>
                <div className="num">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="when">{s.w}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ + GUARANTEES ================= */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <i />
              Clear Answers
            </span>
            <h2>Frequently asked questions</h2>
            <p>
              Common questions from founders, CTOs and product managers before
              kicking off with Vision.
            </p>
          </div>

          <div className="faq">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`faq-item ${open ? "open" : ""}`}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      className="faq-q"
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      id={`faq-q-${i}`}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                    >
                      <span>{f.q}</span>
                      <span className="faq-ico" aria-hidden="true">
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq-a"
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                  >
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="guar">
            <div className="g">
              <div className="gi">
                <Ico>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </Ico>
              </div>
              <div>
                <h4>100% IP ownership</h4>
                <p>
                  All copyright, codebases and deployment infrastructure belong
                  entirely to you.
                </p>
              </div>
            </div>
            <div className="g">
              <div className="gi">
                <Ico>
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </Ico>
              </div>
              <div>
                <h4>Bank-grade data security</h4>
                <p>
                  Strict access controls, zero AI training on client data, and
                  encrypted secrets.
                </p>
              </div>
            </div>
            <div className="g">
              <div className="gi">
                <Ico>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </Ico>
              </div>
              <div>
                <h4>30-day post-launch warranty</h4>
                <p>
                  Complimentary bug fixes, stability monitoring and performance
                  tuning after go-live.
                </p>
              </div>
            </div>
          </div>

          <div className="final">
            <h3>Still have a question?</h3>
            <p>
              Our engineers are happy to talk it through — no pressure, no sales
              script.
            </p>
            <a href="#brief" className="btn">
              Send Your Brief ↑
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
