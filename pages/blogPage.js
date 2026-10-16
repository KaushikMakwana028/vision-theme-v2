import Link from "next/link";
import Image from "next/image";
import { blogsData, blogCategories } from "@/data/blogs";
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

/* ---------- Hero (Ultra-Smooth 60fps) ---------- */
.svp-hero {
  position: relative; overflow: hidden; padding-bottom: 2rem;
  background: radial-gradient(ellipse 750px 340px at 75% 12%, rgba(79, 70, 229, 0.08), transparent 70%),
              radial-gradient(ellipse 500px 280px at 15% 85%, rgba(6, 182, 212, 0.06), transparent 60%);
}
.svp-hero .container { position: relative; z-index: 2; }
.svp-dots {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: radial-gradient(rgba(79, 70, 229, .15) 1px, transparent 1px);
  background-size: 26px 26px; opacity: 0.6;
}

.svp-hero-center { text-align: center; max-width: 860px; margin: 0 auto 2.5rem; }
.svp-hero-center h1 {
  font-size: clamp(1.85rem, 4.2vw, 3.2rem); line-height: 1.2; margin: .85rem 0 .75rem; color: var(--ink);
  letter-spacing: -.02em;
}
.svp-hero-center h1 em {
  font-family: var(--serif); font-style: italic;
  background: var(--grad-warm);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.svp-hero-center p.lead {
  font-size: clamp(1rem, 2vw, 1.18rem); color: var(--muted); line-height: 1.65; margin: 0 auto; max-width: 64ch;
}

/* ---------- Featured Story Showcase (High Performance) ---------- */
.featured-card {
  position: relative; display: grid; grid-template-columns: 1.15fr 1fr; gap: clamp(1.5rem, 3.5vw, 3rem);
  align-items: center; padding: clamp(1.5rem, 3vw, 2.5rem); background: var(--bg);
  border: 1.5px solid rgba(79, 70, 229, 0.14); border-radius: calc(var(--radius) + 8px); box-shadow: var(--shadow-lg);
  overflow: hidden; margin-bottom: 3.5rem;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  will-change: transform;
}
.featured-card:hover {
  transform: translateY(-3px);
  border-color: rgba(79, 70, 229, 0.38);
  box-shadow: 0 20px 40px -12px rgba(79, 70, 229, .15);
}

.featured-thumb {
  position: relative; border-radius: var(--radius); overflow: hidden; aspect-ratio: 16 / 10;
  box-shadow: var(--shadow);
}
.featured-thumb img {
  display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease;
}
.featured-card:hover .featured-thumb img { transform: scale(1.04); }
.featured-thumb-badge {
  position: absolute; top: 1rem; left: 1rem; z-index: 2; padding: .35rem .85rem; border-radius: 999px;
  background: rgba(11, 16, 32, .85); backdrop-filter: blur(8px); color: #fff; font-size: .8rem; font-weight: 700;
  letter-spacing: .02em; display: inline-flex; align-items: center; gap: .4rem;
}
.featured-thumb-badge i { width: 7px; height: 7px; border-radius: 50%; background: #34d399; }

.featured-content { display: flex; flex-direction: column; justify-content: center; }
.featured-tag-row { display: flex; align-items: center; gap: .75rem; margin-bottom: .9rem; font-size: .84rem; }
.featured-cat {
  padding: .3rem .8rem; border-radius: 999px; background: rgba(79, 70, 229, .08); color: var(--primary);
  font-weight: 700; text-transform: uppercase; font-size: .75rem; letter-spacing: .04em;
}
.featured-read { color: var(--muted); }
.featured-content h2 {
  font-size: clamp(1.4rem, 2.5vw, 2.1rem); line-height: 1.25; margin: 0 0 .9rem; color: var(--ink);
  transition: color .25s;
}
.featured-card:hover .featured-content h2 { color: var(--primary); }
.featured-content p { color: var(--muted); font-size: 1.02rem; line-height: 1.7; margin: 0 0 1.5rem; }

.featured-author-row {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
  padding-top: 1.25rem; border-top: 1px dashed var(--line); margin-top: auto;
}
.featured-author-info { display: flex; align-items: center; gap: .75rem; }
.featured-author-avatar {
  width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);
}
.featured-author-name strong { display: block; font-size: .92rem; color: var(--ink); }
.featured-author-name span { font-size: .8rem; color: var(--muted); }

/* ---------- Search and Filter Bar ---------- */
.blog-filter-bar {
  display: flex; flex-direction: column; gap: 1.5rem; max-width: 980px; margin: 0 auto 3rem;
}
.blog-search-box {
  position: relative; width: 100%; max-width: 580px; margin: 0 auto;
}
.blog-search-box input {
  width: 100%; padding: .85rem 1.25rem .85rem 3.2rem; border-radius: 999px;
  background: var(--bg); border: 1.5px solid var(--line); font: inherit; font-size: .96rem;
  color: var(--ink); box-shadow: var(--shadow); transition: border-color .3s, box-shadow .3s;
}
.blog-search-box input:focus {
  outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px rgba(79, 70, 229, .15);
}
.blog-search-ico {
  position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); width: 19px; height: 19px;
  color: var(--muted); pointer-events: none;
}

.blog-tabs { display: flex; gap: .55rem; justify-content: center; flex-wrap: wrap; }
.blog-tab {
  display: inline-flex; align-items: center; gap: .5rem; cursor: pointer;
  padding: .55rem 1.1rem; border-radius: 999px; font: inherit; font-weight: 600; font-size: .9rem;
  white-space: nowrap; color: var(--ink); background: var(--bg); border: 1px solid var(--line);
  transition: transform .3s var(--ease), background .3s, color .3s, border-color .3s, box-shadow .3s;
}
.blog-tab em {
  font-style: normal; font-size: .72rem; padding: .1rem .5rem; border-radius: 999px;
  background: var(--surface); color: var(--muted); transition: background .3s, color .3s;
}
.blog-tab:hover { border-color: var(--primary); transform: translateY(-2px); }
.blog-tab.active {
  color: #fff; border-color: transparent; background: var(--grad);
  box-shadow: 0 10px 24px -8px rgba(79, 70, 229, .65); transform: translateY(-2px);
}
.blog-tab.active em { background: rgba(255, 255, 255, .22); color: #fff; }

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

.mag-body h3 {
  margin: 0 0 .75rem; font-size: 1.25rem; line-height: 1.35; color: var(--ink); transition: color .3s;
}
.mag-card:hover .mag-body h3 { color: var(--primary); }
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
  .featured-card { grid-template-columns: 1fr; }
}
@media (max-width: 860px) {
  .svp-cta { grid-template-columns: 1fr; gap: 1.75rem; }
}
@media (max-width: 640px) {
  .svp-hero-center { margin-bottom: 1.5rem; }
  .svp-hero-center h1 { font-size: clamp(1.45rem, 5.5vw, 1.95rem); line-height: 1.24; margin: .5rem 0 .55rem; }
  .svp-hero-center p.lead { font-size: .92rem; line-height: 1.55; }
  .featured-card { padding: 1.15rem !important; gap: 1.15rem; border-radius: 16px !important; margin-bottom: 2rem !important; }
  .featured-content h2 { font-size: 1.25rem !important; line-height: 1.3 !important; margin-bottom: .5rem !important; }
  .featured-content p { font-size: .88rem !important; line-height: 1.5 !important; margin-bottom: .9rem !important; }
  .featured-author-row { padding-top: .85rem; }
  .featured-author-row .btn { width: 100%; justify-content: center; }
  .blog-filter-bar { gap: .9rem; margin-bottom: 1.75rem; }
  .blog-tabs {
    flex-wrap: nowrap; justify-content: flex-start; overflow-x: auto; padding: .35rem var(--gutter) .7rem;
    scroll-snap-type: x proximity; scrollbar-width: none; -webkit-overflow-scrolling: touch;
    margin-inline: calc(var(--gutter) * -1);
  }
  .blog-tabs::-webkit-scrollbar { display: none; }
  .blog-tab { scroll-snap-align: start; }
  .svp .cols.c3 { grid-template-columns: 1fr; gap: 1.15rem; }
  .mag-body { padding: 1.15rem; }
  .mag-body h3 { font-size: 1.15rem; line-height: 1.32; }
  .mag-body p { font-size: .88rem; line-height: 1.55; margin-bottom: 1rem; }
  .svp-cta-actions .btn { width: 100%; justify-content: center; text-align: center; }
}
`;

export default function BlogPage() {
  const featuredArticle = blogsData.find((b) => b.featured) || blogsData[0];

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

  const categories = blogCategories.map((cat) => ({
    name: cat,
    count:
      cat === "All"
        ? blogsData.length
        : blogsData.filter((b) => b.category === cat).length,
  }));

  return (
    <div className="svp">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <section className="hero svp-hero" aria-labelledby="blog-hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <span className="svp-dots" aria-hidden="true" />

        <div className="container">
          <div className="svp-hero-center">
            <div style={{ marginBottom: ".75rem" }}>
              <span className="eyebrow">
                Engineering &amp; Architecture Insights
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
          </div>

          {/* ================= FEATURED STORY SHOWCASE ================= */}
          {featuredArticle && (
            <article className="featured-card">
              <Link
                href={`/blog/${featuredArticle.slug || featuredArticle.id}`}
                className="featured-thumb"
                aria-label={`Read ${featuredArticle.title}`}
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={1000}
                  height={600}
                  priority
                />
                <span className="featured-thumb-badge">
                  <i /> Editor&apos;s Pick
                </span>
              </Link>

              <div className="featured-content">
                <div className="featured-tag-row">
                  <span className="featured-cat">{featuredArticle.category}</span>
                  <span className="featured-read">{featuredArticle.readTime}</span>
                </div>

                <h2>
                  <Link href={`/blog/${featuredArticle.slug || featuredArticle.id}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p>{featuredArticle.excerpt}</p>

                <div className="featured-author-row">
                  <div className="featured-author-info">
                    <Image
                      className="featured-author-avatar"
                      src={featuredArticle.author?.avatar}
                      alt={featuredArticle.author?.name || "Author avatar"}
                      width={44}
                      height={44}
                    />
                    <div className="featured-author-name">
                      <strong>{featuredArticle.author?.name}</strong>
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug || featuredArticle.id}`}
                    className="btn btn-primary"
                  >
                    Read Full Essay →
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* ================= ARTICLES FEED ================= */}
      <section className="sec alt" id="articles-catalog">
        <div className="container">
          <BlogExplorer categories={categories} articles={trimmedArticles} />
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
                <Link className="btn btn-light" href="/#contact">
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
