import Link from "next/link";
import { brandInfo } from "@/data/company";
import ContactForm from "@/components/contact/ContactForm";
import FaqAccordion from "@/components/common/FaqAccordion";

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

/* ---------- sidebar: Map & Location ---------- */
.ct .side { display: grid; gap: 1.25rem; align-content: start; }
.ct .map-card { padding: 1.35rem; display: flex; flex-direction: column; gap: 1.2rem; }
@media (min-width: 640px) { .ct .map-card { padding: 1.6rem; } }
.ct .map-card-head { display: flex; align-items: flex-start; gap: .85rem; }
.ct .map-badge-icon {
  width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center;
  background: rgba(79, 70, 229, 0.1); color: var(--ct-primary); flex-shrink: 0;
}
.ct .map-badge-icon svg { width: 22px; height: 22px; }
.ct .location-badge {
  display: inline-block; padding: .18rem .6rem; border-radius: 999px; font-size: .7rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: .04em; background: rgba(79, 70, 229, 0.1); color: var(--ct-primary);
  margin-bottom: .25rem;
}
.ct .location-title { font-size: 1.25rem; font-weight: 800; margin: 0 0 .2rem; color: var(--ct-ink); }
.ct .location-sub { color: var(--ct-muted); font-size: .88rem; margin: 0; }
.ct .map-wrapper {
  position: relative; width: 100%; border-radius: 14px; overflow: hidden;
  box-shadow: 0 4px 18px -4px rgba(15, 23, 42, 0.12); border: 1px solid var(--ct-line);
}
.ct .map-wrapper iframe { width: 100%; height: 360px; border: 0; display: block; }
.ct .map-card-footer { display: flex; flex-direction: column; gap: 1rem; }
.ct .map-card-meta { display: grid; gap: .5rem; font-size: .88rem; }
.ct .meta-row { display: flex; gap: .5rem; line-height: 1.5; }
.ct .meta-label { font-weight: 700; color: var(--ct-ink); min-width: 65px; }
.ct .meta-val { color: var(--ct-muted); }
.ct .meta-link { color: var(--ct-primary); font-weight: 600; text-decoration: none; }
.ct .meta-link:hover { text-decoration: underline; }
.ct .map-open-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
  padding: .75rem 1.25rem; border-radius: 12px; font-weight: 700; font-size: .9rem;
  text-decoration: none; color: var(--ct-primary); background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.2); transition: all .2s ease;
}
.ct .map-open-btn:hover { background: var(--ct-primary); color: #fff; transform: translateY(-1px); }

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
  return (
    <div className="ct">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="wrap">
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
              Send a Request{" "}
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
            <a
              href={`tel:${brandInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="channel"
            >
              <div className="ico">
                <Ico>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </Ico>
              </div>
              <div className="txt">
                <strong>Call Support</strong>
                <span>{brandInfo.phone}</span>
              </div>
              <span className="go" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href={brandInfo.whatsappUrl}
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
            <ContactForm />

            {/* ---------- SIDEBAR: OFFICE LOCATION & GOOGLE MAP ---------- */}
            <aside className="side" aria-label="Our office location">
              <div className="card map-card">
                <div className="map-card-head">
                  <div className="map-badge-icon">
                    <Ico>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </Ico>
                  </div>
                  <div>
                    <span className="location-badge">Headquarters</span>
                    <h3 className="location-title">Vision Technolabs</h3>
                    <p className="location-sub">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6643.213747688789!2d72.66355678439143!3d23.078965902005443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a61dfa5596be2b5%3A0xb0dc504e60aaf50a!2sVision%20Technolabs!5e1!3m2!1sen!2sin!4v1791888630555!5m2!1sen!2sin"
                    width="100%"
                    height="380"
                    style={{
                      border: 0,
                      borderRadius: "14px",
                      display: "block",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Vision Technolabs Location Map"
                  />
                </div>

                <div className="map-card-footer">
                  <div className="map-card-meta">
                    <div className="meta-row">
                      <span className="meta-label">Address:</span>
                      <span className="meta-val">{brandInfo.address}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Phone:</span>
                      <a
                        href={`tel:${brandInfo.phone.replace(/[^0-9+]/g, "")}`}
                        className="meta-link"
                      >
                        {brandInfo.phone}
                      </a>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Email:</span>
                      <a
                        href={`mailto:${brandInfo.email}`}
                        className="meta-link"
                      >
                        {brandInfo.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={brandInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-open-btn"
                  >
                    <span>View on Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
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

          <FaqAccordion items={faqs} variant="contact" />

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
    </div>
  );
}
