"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs";

/* =========================================================
   Blog detail — full redesign (mobile-first, reading-focused)
   Styles are scoped under .bd and use their own tokens.
   ========================================================= */
const styles = `
.bd {
  --bd-ink: #0f172a;
  --bd-text: #2b3547;
  --bd-muted: #5f6a7e;
  --bd-line: #e6e8f0;
  --bd-bg: #ffffff;
  --bd-soft: #f6f7fb;
  --bd-primary: #4f46e5;
  --bd-primary-d: #4338ca;
  --bd-green: #10b981;
  --bd-grad: linear-gradient(120deg, #4f46e5 0%, #8b5cf6 55%, #fb923c 100%);
  --bd-hdr: var(--header-h, 76px);
  --bd-shadow: 0 1px 2px rgba(15,23,42,.04), 0 8px 24px -8px rgba(15,23,42,.08);
  --bd-shadow-lg: 0 2px 4px rgba(15,23,42,.04), 0 24px 48px -16px rgba(79,70,229,.22);
  color: var(--bd-ink);
  background: var(--bd-bg);
  overflow-x: clip;
  -webkit-font-smoothing: antialiased;
}
.bd *, .bd *::before, .bd *::after { box-sizing: border-box; }
.bd h1, .bd h2, .bd h3, .bd h4, .bd p, .bd ul, .bd ol { margin: 0; padding: 0; }
.bd ul, .bd ol { list-style: none; }
.bd img { max-width: 100%; display: block; }
.bd .wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 1.1rem; }
@media (min-width: 640px) { .bd .wrap { padding: 0 1.75rem; } }
.bd a:focus-visible, .bd button:focus-visible, .bd input:focus-visible, .bd summary:focus-visible {
  outline: 3px solid rgba(79,70,229,.4); outline-offset: 2px; border-radius: 8px;
}

/* ---------- progress ---------- */
.bd-progress { position: fixed; top: 0; left: 0; right: 0; height: 4px; z-index: 1000; pointer-events: none; }
.bd-progress span { display: block; height: 100%; background: var(--bd-grad); transform-origin: left; transform: scaleX(0); }

/* ---------- buttons ---------- */
.bd .btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .55rem;
  min-height: 46px; padding: .7rem 1.4rem; border-radius: 999px; border: 0; cursor: pointer;
  font: inherit; font-weight: 700; font-size: .95rem; text-decoration: none;
  color: #fff; background: var(--bd-primary); box-shadow: 0 10px 22px -8px rgba(79,70,229,.55);
  transition: transform .2s ease, background .2s, box-shadow .2s;
}
.bd .btn:hover { transform: translateY(-2px); background: var(--bd-primary-d); }
.bd .btn.light { background: #fff; color: #1e1b4b; box-shadow: 0 10px 24px -8px rgba(0,0,0,.3); }
.bd .btn.light:hover { background: #f1f2ff; }
.bd .btn.outline { background: transparent; color: var(--bd-ink); border: 1.5px solid var(--bd-line); box-shadow: none; }
.bd .btn.outline:hover { border-color: var(--bd-primary); background: var(--bd-soft); }
.bd .btn.ghost-w { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.4); box-shadow: none; }
.bd .btn.ghost-w:hover { background: rgba(255,255,255,.1); }
.bd .btn.sm { min-height: 40px; padding: .5rem 1.1rem; font-size: .86rem; }

/* ---------- header ---------- */
.bd-head { position: relative; padding: 1.25rem 0 1.5rem; overflow: hidden; }
.bd-head::before {
  content: ""; position: absolute; inset: -200px -100px auto auto; width: 460px; height: 460px;
  border-radius: 50%; background: rgba(79,70,229,.1); filter: blur(80px); pointer-events: none;
}
.bd-head .inner { position: relative; max-width: 820px; margin: 0 auto; }
.bd .crumbs {
  display: flex; align-items: center; gap: .45rem; margin-bottom: 1.25rem;
  font-size: .82rem; min-width: 0; flex-wrap: nowrap; overflow: hidden;
}
.bd .crumbs a { color: var(--bd-muted); text-decoration: none; font-weight: 500; white-space: nowrap; display: inline-flex; align-items: center; gap: .3rem; }
.bd .crumbs a:hover { color: var(--bd-primary); }
.bd .crumbs svg { width: 14px; height: 14px; }
.bd .crumbs .sep { color: #a3acbd; }
.bd .crumbs .cur { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }

.bd .meta { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem 1rem; margin-bottom: 1.1rem; }
.bd .cat {
  padding: .32rem .85rem; border-radius: 999px; background: rgba(79,70,229,.1); color: var(--bd-primary);
  font-size: .76rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase;
}
.bd .meta span.m { display: inline-flex; align-items: center; gap: .4rem; color: var(--bd-muted); font-size: .86rem; font-weight: 500; }
.bd .meta svg { width: 15px; height: 15px; }

.bd h1.title {
  font-size: clamp(1.95rem, 6.2vw, 3.2rem); line-height: 1.14; font-weight: 800;
  letter-spacing: -.028em; text-wrap: balance; margin-bottom: 1rem;
}
.bd .excerpt { font-size: clamp(1.02rem, 2.4vw, 1.22rem); line-height: 1.7; color: var(--bd-muted); margin-bottom: 1.6rem; }

.bd .byline {
  display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  padding-top: 1.2rem; border-top: 1px solid var(--bd-line);
}
.bd .who { display: flex; align-items: center; gap: .8rem; min-width: 0; }
.bd .avatar {
  width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
  background: var(--bd-soft); border: 2px solid #fff; box-shadow: 0 0 0 2px var(--bd-primary);
}
.bd .avatar.fallback { display: grid; place-items: center; color: #fff; background: var(--bd-primary); font-weight: 800; }
.bd .who strong { display: block; font-size: .96rem; }
.bd .who span { display: block; font-size: .82rem; color: var(--bd-muted); }

.bd .share { display: flex; align-items: center; gap: .5rem; }
.bd .ibtn {
  width: 42px; height: 42px; border-radius: 50%; display: inline-grid; place-items: center; flex-shrink: 0;
  background: var(--bd-bg); border: 1.5px solid var(--bd-line); color: var(--bd-ink); cursor: pointer;
  text-decoration: none; transition: all .2s ease;
}
.bd .ibtn:hover { background: var(--bd-primary); color: #fff; border-color: var(--bd-primary); transform: translateY(-2px); }
.bd .ibtn svg { width: 18px; height: 18px; }

/* ---------- cover ---------- */
.bd .cover {
  max-width: 1040px; margin: 0 auto 2rem; border-radius: 22px; overflow: hidden;
  border: 1px solid var(--bd-line); box-shadow: var(--bd-shadow-lg); background: var(--bd-soft);
}
.bd .cover img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
@media (max-width: 640px) { .bd .cover { border-radius: 16px; } .bd .cover img { aspect-ratio: 4 / 3; } }

/* ---------- layout ---------- */
.bd .layout { display: grid; gap: 1.5rem; margin: 0 auto; padding-bottom: 2.5rem; }
@media (min-width: 1080px) {
  .bd .layout { grid-template-columns: 250px minmax(0, 720px); justify-content: center; gap: 4rem; }
}
.bd .rail { display: none; }
@media (min-width: 1080px) {
  .bd .rail {
    display: block; position: sticky; top: calc(var(--bd-hdr) + 20px); align-self: start;
    max-height: calc(100vh - var(--bd-hdr) - 40px); overflow-y: auto; padding-right: .25rem;
    scrollbar-width: thin;
  }
  .bd .mobile-toc { display: none; }
}
.bd .rail-title, .bd .mobile-toc summary {
  font-size: .76rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--bd-muted);
}
.bd .rail-title { margin-bottom: .85rem; }
.bd .toc { display: grid; gap: .15rem; border-left: 2px solid var(--bd-line); }
.bd .toc a {
  display: block; margin-left: -2px; padding: .5rem .85rem; border-left: 2px solid transparent;
  font-size: .88rem; line-height: 1.4; color: var(--bd-muted); text-decoration: none; font-weight: 500;
  transition: color .2s, border-color .2s, background .2s;
}
.bd .toc a:hover { color: var(--bd-primary); }
.bd .toc a.active { color: var(--bd-primary); border-left-color: var(--bd-primary); font-weight: 700; background: linear-gradient(90deg, rgba(79,70,229,.07), transparent); }
.bd .rail-cta {
  margin-top: 1.75rem; padding: 1.2rem; border-radius: 18px; color: #fff;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
}
.bd .rail-cta h4 { font-size: .98rem; margin-bottom: .4rem; }
.bd .rail-cta p { font-size: .83rem; line-height: 1.55; color: #c7cdee; margin-bottom: .9rem; }
.bd .rail-cta .btn { width: 100%; }

.bd .mobile-toc { border: 1px solid var(--bd-line); border-radius: 14px; background: var(--bd-soft); }
.bd .mobile-toc summary {
  display: flex; align-items: center; justify-content: space-between; gap: 1rem; list-style: none;
  padding: .95rem 1.1rem; cursor: pointer; min-height: 52px;
}
.bd .mobile-toc summary::-webkit-details-marker { display: none; }
.bd .mobile-toc summary i { font-style: normal; font-size: 1.2rem; color: var(--bd-primary); transition: transform .25s; }
.bd .mobile-toc[open] summary i { transform: rotate(45deg); }
.bd .mobile-toc .toc { margin: 0 1.1rem 1rem; }

/* ---------- article ---------- */
.bd .article { min-width: 0; font-size: 1.06rem; line-height: 1.85; color: var(--bd-text); }
@media (min-width: 768px) { .bd .article { font-size: 1.12rem; } }
.bd .article section[id], .bd .article div[id] { scroll-margin-top: calc(var(--bd-hdr) + 24px); }
.bd .intro {
  font-size: clamp(1.15rem, 2.8vw, 1.35rem); line-height: 1.75; color: var(--bd-ink); font-weight: 500;
  margin-bottom: 2rem;
}
.bd .intro::first-letter {
  float: left; font-size: 3.6em; line-height: .85; padding: .08em .12em 0 0; font-weight: 800; color: var(--bd-primary);
}

.bd .takeaways {
  position: relative; margin-bottom: 2.75rem; padding: 1.5rem 1.25rem 1.5rem 1.5rem; border-radius: 20px;
  background: linear-gradient(135deg, rgba(79,70,229,.05), rgba(251,146,60,.07));
  border: 1px solid rgba(79,70,229,.2); overflow: hidden; line-height: 1.6;
}
@media (min-width: 640px) { .bd .takeaways { padding: 1.9rem 2rem 1.9rem 2.2rem; } }
.bd .takeaways::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 5px; background: var(--bd-grad); }
.bd .takeaways h3 { display: flex; align-items: center; gap: .6rem; font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; color: var(--bd-ink); }
.bd .takeaways h3 svg { width: 22px; height: 22px; color: #fb923c; }
.bd .takeaways li { display: flex; gap: .8rem; align-items: flex-start; font-size: .98rem; font-weight: 500; color: var(--bd-ink); }
.bd .takeaways li + li { margin-top: .85rem; }
.bd .takeaways li b {
  width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; margin-top: .22rem;
  display: grid; place-items: center; background: var(--bd-primary); color: #fff; font-size: .7rem;
}

.bd .sect { margin-bottom: 2.75rem; }
.bd .sect h2 {
  font-size: clamp(1.45rem, 4vw, 2rem); line-height: 1.25; font-weight: 800; letter-spacing: -.02em;
  color: var(--bd-ink); margin-bottom: 1rem; text-wrap: balance;
}
.bd .sect h2 a { color: inherit; text-decoration: none; }
.bd .sect h2 a span { color: rgba(79,70,229,.45); margin-left: .45rem; opacity: 0; transition: opacity .2s; font-weight: 600; }
.bd .sect h2 a:hover span { opacity: 1; }
.bd .sect p { margin-bottom: 1.25rem; overflow-wrap: anywhere; }

.bd .callout {
  position: relative; margin: 1.75rem 0; padding: 1.35rem 1.35rem 1.35rem 1.5rem; border-radius: 16px;
  background: var(--bd-soft); border-left: 4px solid var(--bd-primary);
  font-size: 1.1rem; line-height: 1.7; color: var(--bd-ink); font-style: italic; font-weight: 500;
}

.bd .code {
  margin: 1.75rem 0; border-radius: 16px; overflow: hidden; background: #0f172a;
  border: 1px solid #1e293b; box-shadow: 0 16px 36px -12px rgba(15,23,42,.45);
}
.bd .code-bar {
  display: flex; align-items: center; justify-content: space-between; gap: .75rem;
  padding: .6rem .6rem .6rem 1rem; background: #1e293b; border-bottom: 1px solid #334155;
}
.bd .code-bar .l { display: flex; align-items: center; gap: .6rem; min-width: 0; }
.bd .dots { display: flex; gap: .35rem; }
.bd .dots i { width: 10px; height: 10px; border-radius: 50%; display: block; }
.bd .dots i:nth-child(1) { background: #ef4444; } .bd .dots i:nth-child(2) { background: #f59e0b; } .bd .dots i:nth-child(3) { background: #10b981; }
.bd .code-bar span.lang { color: #94a3b8; font-size: .76rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; font-family: ui-monospace, Menlo, Consolas, monospace; }
.bd .copy {
  min-height: 36px; padding: .3rem .85rem; border-radius: 8px; cursor: pointer;
  background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.16); color: #e2e8f0;
  font: inherit; font-size: .78rem; font-weight: 700; transition: background .2s;
}
.bd .copy:hover { background: rgba(255,255,255,.2); }
.bd .code pre {
  margin: 0; padding: 1.1rem 1.1rem 1.25rem; overflow-x: auto; -webkit-overflow-scrolling: touch;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; line-height: 1.7; color: #e2e8f0; tab-size: 2;
}
.bd .code pre code { font: inherit; background: none; padding: 0; color: inherit; }

.bd .conclusion {
  margin-top: 1rem; padding: 1.6rem 1.35rem; border-radius: 20px;
  background: linear-gradient(135deg, rgba(79,70,229,.07), rgba(244,63,94,.06));
  border: 1px solid rgba(79,70,229,.2);
}
@media (min-width: 640px) { .bd .conclusion { padding: 2.1rem 2.25rem; } }
.bd .conclusion h3 { font-size: 1.3rem; font-weight: 800; color: var(--bd-ink); margin-bottom: .7rem; }
.bd .conclusion p { font-size: 1.04rem; line-height: 1.75; }

.bd .tags { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--bd-line); }
.bd .tags span.lbl { font-size: .84rem; font-weight: 700; color: var(--bd-muted); margin-right: .25rem; }
.bd .tag { padding: .35rem .85rem; border-radius: 999px; background: var(--bd-soft); border: 1px solid var(--bd-line); font-size: .82rem; font-weight: 600; color: var(--bd-ink); }

/* ---------- author card ---------- */
.bd .author-card {
  max-width: 820px; margin: 0 auto 4rem; padding: 1.5rem; border-radius: 22px;
  background: var(--bd-soft); border: 1px solid var(--bd-line);
  display: grid; gap: 1.1rem; justify-items: center; text-align: center;
}
@media (min-width: 640px) {
  .bd .author-card { grid-template-columns: 96px 1fr; justify-items: start; text-align: left; align-items: center; padding: 2rem; gap: 1.6rem; }
}
.bd .author-card .avatar { width: 88px; height: 88px; box-shadow: 0 0 0 3px var(--bd-primary); font-size: 1.8rem; }
.bd .author-card h3 { font-size: 1.25rem; font-weight: 800; }
.bd .author-card .role { color: var(--bd-primary); font-weight: 700; font-size: .9rem; margin: .2rem 0 .6rem; }
.bd .author-card .bio { color: var(--bd-muted); font-size: .94rem; line-height: 1.65; margin-bottom: 1rem; }
.bd .author-card .row { display: flex; flex-wrap: wrap; gap: .6rem; justify-content: inherit; }
@media (max-width: 639px) { .bd .author-card .row { justify-content: center; } }

/* ---------- related ---------- */
.bd .related { padding: 3.5rem 0 4rem; background: var(--bd-soft); border-top: 1px solid var(--bd-line); }
@media (min-width: 768px) { .bd .related { padding: 5rem 0; } }
.bd .sec-head { text-align: center; max-width: 640px; margin: 0 auto 2.25rem; }
.bd .eyebrow {
  display: inline-block; padding: .36rem .85rem; border-radius: 999px;
  background: rgba(79,70,229,.08); color: var(--bd-primary); font-size: .78rem; font-weight: 800; letter-spacing: .04em;
}
.bd .sec-head h2 { font-size: clamp(1.55rem, 4.5vw, 2.3rem); line-height: 1.18; font-weight: 800; letter-spacing: -.02em; margin: .85rem 0 .6rem; }
.bd .sec-head p { color: var(--bd-muted); line-height: 1.7; }
.bd .grid { display: grid; gap: 1.1rem; }
@media (min-width: 640px) { .bd .grid { grid-template-columns: repeat(2, 1fr); gap: 1.4rem; } }
@media (min-width: 1000px) { .bd .grid { grid-template-columns: repeat(3, 1fr); } }
.bd .card {
  position: relative; display: flex; flex-direction: column; overflow: hidden; border-radius: 20px;
  background: var(--bd-bg); border: 1px solid var(--bd-line); box-shadow: var(--bd-shadow);
  transition: transform .3s ease, box-shadow .3s ease;
}
.bd .card:hover { transform: translateY(-5px); box-shadow: var(--bd-shadow-lg); }
.bd .card .thumb { position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: var(--bd-soft); }
.bd .card .thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.bd .card:hover .thumb img { transform: scale(1.06); }
.bd .card .badge {
  position: absolute; top: .75rem; left: .75rem; padding: .25rem .7rem; border-radius: 999px;
  background: rgba(11,16,32,.85); color: #fff; font-size: .72rem; font-weight: 700;
}
.bd .card .body { display: flex; flex-direction: column; flex: 1; padding: 1.2rem 1.25rem 1.3rem; }
.bd .card .cm { display: flex; justify-content: space-between; gap: .5rem; color: var(--bd-muted); font-size: .78rem; margin-bottom: .6rem; }
.bd .card h3 { font-size: 1.1rem; line-height: 1.38; font-weight: 700; margin-bottom: .55rem; }
.bd .card h3 a { color: var(--bd-ink); text-decoration: none; }
.bd .card h3 a::after { content: ""; position: absolute; inset: 0; z-index: 1; } /* whole card clickable */
.bd .card:hover h3 a { color: var(--bd-primary); }
.bd .card p { color: var(--bd-muted); font-size: .9rem; line-height: 1.6; margin-bottom: 1rem;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.bd .card .foot { margin-top: auto; padding-top: .9rem; border-top: 1px dashed var(--bd-line);
  display: flex; align-items: center; justify-content: space-between; gap: .5rem; font-size: .82rem; }
.bd .card .au { display: flex; align-items: center; gap: .5rem; font-weight: 600; min-width: 0; }
.bd .card .au img { width: 26px; height: 26px; border-radius: 50%; object-fit: cover; }
.bd .card .au span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.bd .card .rd { color: var(--bd-primary); font-weight: 800; white-space: nowrap; }

/* ---------- newsletter + CTA ---------- */
.bd .closing { padding: 3.5rem 0 4.5rem; display: grid; gap: 1.5rem; }
@media (min-width: 900px) { .bd .closing { grid-template-columns: 1fr 1.15fr; gap: 1.75rem; padding: 5rem 0 5.5rem; } }
.bd .panel { border-radius: 24px; padding: clamp(1.6rem, 4vw, 2.5rem); color: #fff; position: relative; overflow: hidden; }
.bd .panel.nl { background: linear-gradient(135deg, #0b1020, #172554); }
.bd .panel.cta { background: linear-gradient(135deg, #1e1b4b, #312e81 60%, #4338ca); }
.bd .panel h2 { font-size: clamp(1.45rem, 4vw, 2rem); line-height: 1.2; font-weight: 800; letter-spacing: -.02em; margin-bottom: .75rem; }
.bd .panel p { color: #c3cbe6; line-height: 1.7; font-size: .98rem; margin-bottom: 1.5rem; }
.bd .nl-form { display: grid; gap: .65rem; }
@media (min-width: 520px) { .bd .nl-form { grid-template-columns: 1fr auto; } }
.bd .nl-form input {
  width: 100%; min-height: 48px; padding: .7rem 1.2rem; border-radius: 999px; font: inherit; font-size: 16px;
  color: #fff; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.22);
}
.bd .nl-form input::placeholder { color: #93a0bd; }
.bd .nl-form input:focus { outline: none; background: rgba(255,255,255,.14); border-color: #fdba74; }
.bd .nl-err { color: #fda4af; font-size: .82rem; margin-top: .6rem; font-weight: 600; }
.bd .nl-ok {
  display: inline-flex; align-items: center; gap: .6rem; padding: .75rem 1.3rem; border-radius: 999px;
  background: rgba(52,211,153,.18); border: 1px solid #34d399; color: #a7f3d0; font-weight: 700; font-size: .92rem;
}
.bd .poc { display: inline-block; margin-bottom: 1.1rem; padding: .9rem 1.2rem; border-radius: 16px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); }
.bd .poc b { display: block; font-size: 1.9rem; line-height: 1; font-weight: 900; background: linear-gradient(120deg, #fdba74, #f9a8d4); -webkit-background-clip: text; background-clip: text; color: transparent; }
.bd .poc span { font-size: .82rem; color: #c3cbe6; font-weight: 600; }
.bd .btn-row { display: flex; flex-direction: column; gap: .65rem; }
@media (min-width: 520px) { .bd .btn-row { flex-direction: row; flex-wrap: wrap; } }

/* ---------- toast ---------- */
.bd .toast {
  position: fixed; left: 50%; bottom: 1.25rem; z-index: 2000; transform: translateX(-50%);
  max-width: calc(100vw - 2rem); display: inline-flex; align-items: center; gap: .6rem;
  padding: .75rem 1.3rem; border-radius: 999px; background: #0f172a; color: #fff;
  font-size: .9rem; font-weight: 600; box-shadow: 0 14px 34px -6px rgba(0,0,0,.4);
  animation: bd-in .3s ease backwards;
}
@keyframes bd-in { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
@media (prefers-reduced-motion: reduce) { .bd *, .bd *::before, .bd *::after { animation: none !important; transition: none !important; } }
`;

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

const initials = (name = "V") =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Avatar({ author, className = "" }) {
  if (author?.avatar)
    return (
      <img
        src={author.avatar}
        alt={author.name || "Author"}
        className={`avatar ${className}`}
      />
    );
  return (
    <div className={`avatar fallback ${className}`} aria-hidden="true">
      {initials(author?.name || "Vision Team")}
    </div>
  );
}

export default function BlogDetailPage({ blog: propBlog }) {
  const blog = propBlog || blogsData[0];
  const sections = blog.content?.sections || [];

  const [toast, setToast] = useState("");
  const [copiedCode, setCopiedCode] = useState(null);
  const [active, setActive] = useState("intro");
  const [shareUrl, setShareUrl] = useState(
    `https://visiontechnolabs.com/blog/${blog.slug}`,
  );
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const progressRef = useRef(null);
  const tocRef = useRef(null);

  /* table of contents model */
  const toc = useMemo(() => {
    const items = [{ id: "intro", label: "Introduction" }];
    if (blog.keyTakeaways?.length)
      items.push({ id: "takeaways", label: "Key Takeaways" });
    sections.forEach((s, i) =>
      items.push({ id: `section-${i}`, label: s.heading }),
    );
    items.push({ id: "conclusion", label: "Conclusion" });
    return items;
  }, [blog, sections]);

  useEffect(() => setShareUrl(window.location.href), [blog]);

  /* reading progress */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? window.scrollY / total : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* active section tracking */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [toc]);

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2400);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: shareUrl,
        });
        return;
      } catch {
        /* cancelled — fall through to copy */
      }
    }
    flash(
      (await copyText(shareUrl))
        ? "Link copied to clipboard"
        : "Couldn't copy the link",
    );
  };

  const handleCopyCode = async (code, i) => {
    if (await copyText(code)) {
      setCopiedCode(i);
      setTimeout(() => setCopiedCode(null), 2200);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setEmailErr("Please enter a valid email address.");
      return;
    }
    setEmailErr("");
    // TODO: POST to your newsletter endpoint
    setSubscribed(true);
  };

  const related = useMemo(
    () =>
      blogsData
        .filter((b) => b.id !== blog.id && b.slug !== blog.slug)
        .slice(0, 3),
    [blog],
  );

  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const authorName = blog.author?.name || "Vision Engineering Team";
  const firstName = blog.author?.name ? blog.author.name.split(" ")[0] : "Our";

  const TocLinks = ({ onClick }) => (
    <nav className="toc" aria-label="Table of contents">
      {toc.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          onClick={onClick}
          className={active === t.id ? "active" : ""}
          aria-current={active === t.id ? "true" : undefined}
        >
          {t.label}
        </a>
      ))}
    </nav>
  );

  return (
    <main className="bd">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="bd-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      {toast && (
        <div className="toast" role="status">
          ✓ {toast}
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header className="bd-head">
        <div className="wrap">
          <div className="inner">
            <div className="meta">
              {blog.category && <span className="cat">{blog.category}</span>}
              {blog.readTime && (
                <span className="m">
                  <Ico>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </Ico>
                  {blog.readTime}
                </span>
              )}
              {blog.date && (
                <span className="m">
                  <Ico>
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </Ico>
                  {blog.date}
                </span>
              )}
            </div>

            <h1 className="title">{blog.title}</h1>
            <p className="excerpt">{blog.excerpt}</p>

            <div className="byline">
              <div className="who">
                <Avatar author={blog.author} />
                <div>
                  <strong>{authorName}</strong>
                  <span>{blog.author?.role || "Staff Software Engineer"}</span>
                </div>
              </div>
              <div className="share" aria-label="Share this article">
                <button
                  type="button"
                  className="ibtn"
                  onClick={handleShare}
                  title="Share or copy link"
                  aria-label="Share or copy link"
                >
                  <Ico>
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </Ico>
                </button>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ibtn"
                  title="Share on X"
                  aria-label="Share on X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ibtn"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap">
        {/* ================= COVER ================= */}
        {blog.image && (
          <figure className="cover" style={{ margin: "0 auto 2rem" }}>
            <img src={blog.image} alt={blog.title} fetchPriority="high" />
          </figure>
        )}

        {/* ================= BODY ================= */}
        <div className="layout">
          {/* Desktop sticky rail */}
          <aside className="rail" aria-label="Article navigation">
            <div className="rail-title">On this page</div>
            <TocLinks />
            <div className="rail-cta">
              <h4>Need an architecture audit?</h4>
              <p>
                Our principal engineers can review your system topology, latency
                bottlenecks and cloud costs.
              </p>
              <Link href="/contact" className="btn light sm">
                Book a consultation
              </Link>
            </div>
          </aside>

          <div style={{ minWidth: 0 }}>
            {/* Mobile TOC */}
            <details className="mobile-toc" ref={tocRef}>
              <summary>
                <span>On this page</span>
                <i aria-hidden="true">+</i>
              </summary>
              <TocLinks
                onClick={() => tocRef.current?.removeAttribute("open")}
              />
            </details>

            <article className="article" style={{ marginTop: "1.5rem" }}>
              {blog.content?.introduction && (
                <div id="intro" className="intro">
                  <p>{blog.content.introduction}</p>
                </div>
              )}
              {!blog.content?.introduction && <div id="intro" />}

              {blog.keyTakeaways?.length > 0 && (
                <div className="takeaways" id="takeaways">
                  <h3>
                    <Ico>
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </Ico>
                    Key takeaways
                  </h3>
                  <ul>
                    {blog.keyTakeaways.map((item, i) => (
                      <li key={i}>
                        <b aria-hidden="true">✓</b>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sections.map((sec, i) => (
                <section key={i} id={`section-${i}`} className="sect">
                  <h2>
                    <a href={`#section-${i}`}>
                      {sec.heading}
                      <span aria-hidden="true">#</span>
                    </a>
                  </h2>

                  {sec.paragraphs?.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}

                  {sec.callout && (
                    <blockquote
                      className="callout"
                      style={{ margin: "1.75rem 0" }}
                    >
                      {sec.callout}
                    </blockquote>
                  )}

                  {sec.codeSnippet && (
                    <div className="code">
                      <div className="code-bar">
                        <div className="l">
                          <div className="dots" aria-hidden="true">
                            <i />
                            <i />
                            <i />
                          </div>
                          <span className="lang">{sec.language || "Code"}</span>
                        </div>
                        <button
                          type="button"
                          className="copy"
                          onClick={() => handleCopyCode(sec.codeSnippet, i)}
                        >
                          {copiedCode === i ? "✓ Copied" : "Copy"}
                        </button>
                      </div>
                      <pre tabIndex={0}>
                        <code>{sec.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}

              {blog.content?.conclusion && (
                <div id="conclusion" className="conclusion">
                  <h3>Final takeaway</h3>
                  <p>{blog.content.conclusion}</p>
                </div>
              )}
              {!blog.content?.conclusion && <div id="conclusion" />}

              {blog.tags?.length > 0 && (
                <div className="tags">
                  <span className="lbl">Topics:</span>
                  {blog.tags.map((t) => (
                    <span key={t} className="tag">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </div>
        </div>

        {/* ================= AUTHOR ================= */}
        {blog.author && (
          <section className="author-card" aria-label="About the author">
            <Avatar author={blog.author} />
            <div>
              <h3>{authorName}</h3>
              <p className="role">
                {blog.author.role || "Senior Architect"} · Vision Technolabs
              </p>
              <p className="bio">
                {firstName} and the Vision engineering team build
                enterprise-grade cloud platforms, custom LLM workflows and
                modern web applications that handle millions of daily
                transactions.
              </p>
              <div className="row">
                <Link href="/blog" className="btn outline sm">
                  ← All articles
                </Link>
                <Link href="/contact" className="btn sm">
                  Talk to our engineers
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ================= RELATED ================= */}
      {related.length > 0 && (
        <section className="related" aria-labelledby="related-title">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Continue reading</span>
              <h2 id="related-title">Related engineering deep dives</h2>
              <p>
                More benchmarks, architecture patterns and case studies from our
                team.
              </p>
            </div>
            <div className="grid">
              {related.map((rel) => (
                <article key={rel.id} className="card">
                  <div className="thumb">
                    {rel.category && (
                      <span className="badge">{rel.category}</span>
                    )}
                    <img src={rel.image} alt="" loading="lazy" />
                  </div>
                  <div className="body">
                    <div className="cm">
                      <span>{rel.date}</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h3>
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p>{rel.excerpt}</p>
                    <div className="foot">
                      <div className="au">
                        {rel.author?.avatar && (
                          <img src={rel.author.avatar} alt="" />
                        )}
                        <span>{rel.author?.name || "Vision Team"}</span>
                      </div>
                      <span className="rd" aria-hidden="true">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= NEWSLETTER + CTA ================= */}
      <div className="wrap">
        <div className="closing">
          <section className="panel nl" aria-labelledby="nl-title">
            <h2 id="nl-title">The Engineering Dispatch</h2>
            <p>
              Zero marketing spam. Architecture write-ups, performance
              benchmarks and code, delivered fortnightly.
            </p>
            {subscribed ? (
              <div className="nl-ok" role="status">
                ✓ You&apos;re subscribed. Welcome aboard!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <div className="nl-form">
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!emailErr}
                  />
                  <button type="submit" className="btn">
                    Subscribe →
                  </button>
                </div>
                {emailErr && (
                  <div className="nl-err" role="alert">
                    {emailErr}
                  </div>
                )}
              </form>
            )}
          </section>

          <section className="panel cta" aria-labelledby="cta-title">
            <div className="poc">
              <b>2–5 days</b>
              <span>Architectural proof-of-concept</span>
            </div>
            <h2 id="cta-title">
              Ready to architect your next scalable platform?
            </h2>
            <p>
              Our senior engineers build production-grade web systems, mobile
              apps and autonomous AI agents. Validate performance and costs
              before you scale.
            </p>
            <div className="btn-row">
              <Link className="btn light" href="/contact">
                Schedule a discovery call →
              </Link>
              <Link className="btn ghost-w" href="/work">
                View case studies
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
