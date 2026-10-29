import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/data/blogs";
import ScrollProgress from "@/components/motion/ScrollProgress";
import BlogExplorer from "@/components/blog/BlogExplorer";

/* =========================================================
   Page styles (scoped under .svp) — Editorial Magazine Style
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

.svp .btn { transition: transform var(--t) var(--ease), box-shadow var(--t) var(--ease); }
.svp .btn:hover { transform: translateY(-2px); }
.svp .btn-primary { position: relative; overflow: hidden; }
.svp .btn-primary::after {
  content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .45), transparent);
  transform: skewX(-20deg); animation: svp-shine 3.8s ease-in-out 1.5s infinite;
}

/* ---------- Redirection bar / Breadcrumbs ---------- */
.breadcrumbs-bar {
  display: flex; width: 100%; justify-content: center; margin-bottom: 1.25rem;
}
.svp .breadcrumbs {
  display: inline-flex; align-items: center; flex-wrap: wrap; gap: .45rem;
  padding: .28rem .85rem; border-radius: 999px;
  background: rgba(255, 255, 255, .7);
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

/* ---------- Hero (Ultra-Smooth 60fps) ---------- */
.svp-hero {
  position: relative; overflow: hidden; padding-top: 1rem; padding-bottom: 2.75rem;
  background: radial-gradient(ellipse 750px 340px at 75% 12%, rgba(79, 70, 229, 0.12), transparent 70%),
              radial-gradient(ellipse 500px 280px at 15% 85%, rgba(6, 182, 212, 0.08), transparent 60%);
}
.svp-hero .container { position: relative; z-index: 2; }
.svp-dots {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(79, 70, 229, .2) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 75%);
}
.svp-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
.svp-orb-a { width: 400px; height: 400px; top: -140px; right: 10%; background: var(--primary); opacity: .2; }
.svp-orb-b { width: 340px; height: 340px; bottom: -120px; left: 8%; background: var(--accent); opacity: .18; }

.svp-hero-center { text-align: center; max-width: 860px; margin: 0 auto; }
.svp-hero-center h1 {
  font-size: clamp(2rem, 4.6vw, 3.4rem); line-height: 1.15; margin: .85rem 0 1.15rem; color: var(--ink);
  letter-spacing: -.025em; font-weight: 800;
}
.svp-hero-center h1 em {
  font-family: var(--serif); font-style: italic;
  background: var(--grad-warm);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--ink);
}
.svp-hero-center p.lead {
  font-size: clamp(1.02rem, 1.8vw, 1.18rem); color: var(--muted); line-height: 1.7; margin: 0 auto 2rem; max-width: 68ch;
}

.blog-hero-stats {
  display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem 1.75rem;
  padding: .75rem 1.5rem; border-radius: 999px;
  background: rgba(255, 255, 255, .8); border: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 4px 16px -4px rgba(15, 23, 42, .06);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}
.blog-hero-stat {
  display: inline-flex; align-items: center; gap: .45rem; font-size: .84rem; color: var(--muted);
}
.blog-hero-stat strong {
  color: var(--ink); font-weight: 700;
}
.blog-hero-stat svg {
  width: 15px; height: 15px; color: var(--primary);
}

/* ---------- Grids ---------- */
.svp .cols { display: grid; gap: 1.75rem; }
.svp .cols.c3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* ---------- Magazine Card ---------- */
.mag-card {
  position: relative; display: flex; flex-direction: column; overflow: hidden;
  background: var(--bg); border: 1px solid var(--line); border-radius: var(--radius);
  box-shadow: var(--shadow); transition: transform .4s var(--ease), box-shadow .4s var(--ease);
}
.mag-card:hover { transform: translateY(-7px); box-shadow: var(--shadow-lg); }

.mag-thumb {
  position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: var(--surface);
}
.mag-thumb img {
  display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .8s var(--ease);
}
.mag-card:hover .mag-thumb img { transform: scale(1.08); }
.mag-thumb::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .4s;
  background: linear-gradient(180deg, transparent 50%, rgba(11, 16, 32, .5));
}
.mag-card:hover .mag-thumb::after { opacity: 1; }

.mag-body { display: flex; flex-direction: column; flex: 1; padding: 1.6rem; }
.mag-meta {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: .85rem; font-size: .82rem;
}
.mag-cat {
  font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em;
  padding: .25rem .65rem; border-radius: 999px; background: rgba(79, 70, 229, .08); color: var(--primary);
}
.mag-read { color: var(--muted); }

.mag-body h2 {
  margin: 0 0 .75rem; font-size: 1.25rem; line-height: 1.35; color: var(--ink); transition: color .3s;
}
.mag-card:hover .mag-body h2 { color: var(--primary); }
.mag-body p { margin: 0 0 1.25rem; color: var(--muted); font-size: .94rem; line-height: 1.65; }

.mag-foot {
  display: flex; align-items: center; justify-content: space-between; margin-top: auto;
  padding-top: 1.15rem; border-top: 1px dashed var(--line); font-size: .84rem;
}
.mag-auth { display: flex; align-items: center; gap: .6rem; }
.mag-auth-av { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.mag-auth-text strong { display: block; font-size: .85rem; color: var(--ink); }
.mag-auth-text span { font-size: .76rem; color: var(--muted); }
.mag-arrow { color: var(--primary); display: grid; place-items: center; transition: transform .3s var(--ease); }
.mag-card:hover .mag-arrow { transform: translateX(5px); }

/* ---------- CTA ---------- */
.svp-cta-sec { padding-top: 3rem; }
.svp-cta {
  position: relative; overflow: hidden; display: grid; grid-template-columns: 1.4fr 1fr; gap: 2.5rem; align-items: center;
  padding: clamp(1.75rem, 5vw, 3.5rem); border-radius: calc(var(--radius) + 10px); color: #fff;
  background: linear-gradient(120deg, var(--dark), #1b1a4b, var(--primary), #6d4aff, var(--dark));
  background-size: 300% 300%; animation: svp-bg 14s ease-in-out infinite;
  box-shadow: var(--shadow-lg);
}
.svp-cta > * { position: relative; z-index: 1; }
.svp-cta::before { width: 420px; height: 420px; right: -120px; top: -160px; animation: svp-spin 40s linear infinite; border-style: dashed; border: 1px solid rgba(255, 255, 255, .18); position: absolute; border-radius: 50%; pointer-events: none; }
.svp-cta::after { width: 260px; height: 260px; left: -90px; bottom: -120px; background: radial-gradient(circle, rgba(251, 146, 60, .35), transparent 70%); border: 0; animation: svp-float 10s ease-in-out infinite; position: absolute; border-radius: 50%; pointer-events: none; }
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

/* ---------- Keyframes ---------- */
@keyframes svp-in { from { opacity: 0; transform: translateY(22px); } }
@keyframes svp-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-34px, 26px); } }
@keyframes svp-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes svp-grad { to { background-position: 200% 0; } }
@keyframes svp-shine { 0%, 55% { left: -60%; } 100% { left: 130%; } }
@keyframes svp-drift { to { background-position: 26px 26px; } }
@keyframes svp-bg { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes svp-spin { to { transform: rotate(360deg); } }
@keyframes svp-ping { 70% { box-shadow: 0 0 0 9px rgba(251, 146, 60, 0); } 100% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); } }

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .svp .cols.c3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 860px) {
  .svp-cta { grid-template-columns: 1fr; gap: 1.75rem; }
}
@media (max-width: 640px) {
  .svp-hero-center { margin-bottom: 1.5rem; }
  .svp-hero-center h1 { font-size: clamp(1.45rem, 5.5vw, 1.95rem); line-height: 1.24; margin: .5rem 0 .55rem; }
  .svp-hero-center p.lead { font-size: .92rem; line-height: 1.55; }
  .svp .cols.c3 { grid-template-columns: 1fr; gap: 1.15rem; }
  .mag-body { padding: 1.15rem; }
  .mag-body h2 { font-size: 1.15rem; line-height: 1.32; }
  .mag-body p { font-size: .88rem; line-height: 1.55; margin-bottom: 1rem; }
  .svp-cta-actions .btn { width: 100%; justify-content: center; text-align: center; }
}
`;

export default function BlogPage() {
  const trimmedArticles = blogsData.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    image: article.image,
    date: article.date,
    readTime: article.readTime,
    author: article.author
      ? { name: article.author.name, avatar: article.author.avatar }
      : null,
    tags: article.tags || [],
  }));

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="blog-hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />
        <span className="svp-orb svp-orb-a" aria-hidden="true" />
        <span className="svp-orb svp-orb-b" aria-hidden="true" />

        <div className="container">
          <div className="svp-hero-center">
            <div className="breadcrumbs-bar">
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link href="/">
                  <svg className="bc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </Link>
                <span className="sep">/</span>
                <span className="current">Blog</span>
              </nav>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow">
                Engineering &amp; Architecture Insights · Production Case Studies
              </span>
            </div>

            <h1 id="blog-hero-title">
              Software Architecture &amp;{" "}
              <em>Engineering Insights</em>
            </h1>

            <p className="lead">
              Practical architectural breakdowns, performance benchmarks, and production lessons
              from the senior engineering team at Vision Technolabs.
            </p>

            <div className="blog-hero-stats" aria-label="Blog Engineering Credentials">
              <div className="blog-hero-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span><strong>{trimmedArticles.length}+</strong> Deep Technical Guides</span>
              </div>
              <div className="blog-hero-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>100%</strong> Production Tested</span>
              </div>
              <div className="blog-hero-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Updated <strong>Weekly</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES FEED ================= */}
      <section className="sec alt" id="articles-catalog">
        <div className="container">
          <BlogExplorer articles={trimmedArticles} />
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="sec svp-cta-sec">
        <div className="container">
          <div className="cta-box svp-cta">
            <div>
              <span className="eyebrow">Work With Vision</span>
              <h2>Have an Ambitious Engineering Project in Mind?</h2>
              <p className="sub">
                Collaborate with the senior engineers behind these technical essays. Book a
                30-minute discovery call to evaluate architecture feasibility and roadmap scoping.
              </p>
              <div className="svp-cta-actions">
                <Link className="btn btn-light" href="/contact">
                  Schedule Engineering Call →
                </Link>
                <Link className="btn btn-ghost" href="/work">
                  Explore Case Studies
                </Link>
              </div>
            </div>

            <div className="svp-poc">
              <div className="svp-poc-card">
                <div className="svp-poc-big">2–5 Days</div>
                <div className="svp-poc-title">Rapid Proof of Concept</div>
                <p>
                  Validate complex assumptions with working code before committing to a full
                  production build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
