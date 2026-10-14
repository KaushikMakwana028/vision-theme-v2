"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import VideoModal from "@/components/VideoModal";
import { brandInfo } from "@/data/company";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/caseStudies";
import { productsData } from "@/data/products";
import { techStackData } from "@/data/techStack";
import { guaranteesData } from "@/data/guarantees";
import { testimonialsData } from "@/data/testimonials";
import { videosData } from "@/data/videos";
import { blogsData } from "@/data/blogs";
import { processSteps, clientLogos, whyChooseUs } from "@/data/process";

export default function HomePage() {
  // Mobile Slider States
  const [activeProjectSlide, setActiveProjectSlide] = useState(0);
  const [activeProductSlide, setActiveProductSlide] = useState(0);

  // Top 4 Standout Case Studies
  const featuredProjects = [
    caseStudiesData.find((c) => c.slug === "medicheck") || caseStudiesData[0],
    caseStudiesData.find((c) => c.slug === "kreditmitraa") || caseStudiesData[1],
    caseStudiesData.find((c) => c.slug === "stayflow-crm") || caseStudiesData[2],
    caseStudiesData.find((c) => c.slug === "srlpixel") || caseStudiesData[3]
  ];

  // Top 4 Authentic Proprietary Products
  const featuredProducts = productsData.slice(0, 4);

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState(null);

  // Testimonials Carousel State
  const trackRef = useRef(null);
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Touch gesture & Auto-scroll states for mobile sliders
  const [projectTouchStart, setProjectTouchStart] = useState(null);
  const [projectTouchEnd, setProjectTouchEnd] = useState(null);
  const [isProjectsPaused, setIsProjectsPaused] = useState(false);

  const [productTouchStart, setProductTouchStart] = useState(null);
  const [productTouchEnd, setProductTouchEnd] = useState(null);
  const [isProductsPaused, setIsProductsPaused] = useState(false);

  // Auto-scroll for Projects Slider
  useEffect(() => {
    if (isProjectsPaused) return;
    const timer = setInterval(() => {
      setActiveProjectSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isProjectsPaused, featuredProjects.length]);

  // Auto-scroll for Products Slider
  useEffect(() => {
    if (isProductsPaused) return;
    const timer = setInterval(() => {
      setActiveProductSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isProductsPaused, featuredProducts.length]);

  // Auto-scroll for Testimonials
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const timer = setInterval(() => {
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 20) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleProjectTouchStart = (e) => {
    setProjectTouchStart(e.targetTouches[0].clientX);
    setIsProjectsPaused(true);
  };
  const handleProjectTouchMove = (e) => {
    setProjectTouchEnd(e.targetTouches[0].clientX);
  };
  const handleProjectTouchEnd = () => {
    if (projectTouchStart !== null && projectTouchEnd !== null) {
      const diff = projectTouchStart - projectTouchEnd;
      if (diff > 40) {
        setActiveProjectSlide((prev) => (prev + 1) % featuredProjects.length);
      } else if (diff < -40) {
        setActiveProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
      }
    }
    setProjectTouchStart(null);
    setProjectTouchEnd(null);
    setTimeout(() => setIsProjectsPaused(false), 2000);
  };

  const handleProductTouchStart = (e) => {
    setProductTouchStart(e.targetTouches[0].clientX);
    setIsProductsPaused(true);
  };
  const handleProductTouchMove = (e) => {
    setProductTouchEnd(e.targetTouches[0].clientX);
  };
  const handleProductTouchEnd = () => {
    if (productTouchStart !== null && productTouchEnd !== null) {
      const diff = productTouchStart - productTouchEnd;
      if (diff > 40) {
        setActiveProductSlide((prev) => (prev + 1) % featuredProducts.length);
      } else if (diff < -40) {
        setActiveProductSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
      }
    }
    setProductTouchStart(null);
    setProductTouchEnd(null);
    setTimeout(() => setIsProductsPaused(false), 2000);
  };

  // Contact Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
    company: "" // honeypot
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Bento 3D Tilt Ref
  const bentoRef = useRef(null);
  const heroRef = useRef(null);

  // 3D tilt effect for hero bento on desktop (throttled with RAF & cached rect to eliminate lag)
  useEffect(() => {
    const heroEl = heroRef.current;
    const bentoEl = bentoRef.current;
    if (!heroEl || !bentoEl) return;

    let rafId = null;
    let cachedRect = null;

    const handleMouseEnter = () => {
      cachedRect = bentoEl.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      if (!cachedRect) cachedRect = bentoEl.getBoundingClientRect();
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const x = ((e.clientX - cachedRect.left) / cachedRect.width - 0.5) * 6;
        const y = -((e.clientY - cachedRect.top) / cachedRect.height - 0.5) * 6;
        bentoEl.style.transform = `perspective(1100px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      cachedRect = null;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      bentoEl.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    };

    heroEl.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
    heroEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      heroEl.removeEventListener("mouseenter", handleMouseEnter);
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update testimonial pages calculation
  useEffect(() => {
    const updatePagination = () => {
      if (!trackRef.current) return;
      const width = window.innerWidth;
      const perView = width >= 1100 ? 3 : width >= 768 ? 2 : 1;
      const pages = Math.max(1, Math.ceil(testimonialsData.length / perView));
      setTotalPages(pages);
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  const handleTestimonialScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const clientWidth = trackRef.current.clientWidth;
    const pageIndex = Math.round(scrollLeft / clientWidth) || 0;
    setCurrentTestimonialPage(pageIndex);
  };

  const scrollTestimonialTo = (pageIndex) => {
    if (!trackRef.current) return;
    const target = pageIndex * trackRef.current.clientWidth;
    trackRef.current.scrollTo({ left: target, behavior: "smooth" });
    setCurrentTestimonialPage(pageIndex);
  };

  // Contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Honeypot check
    if (formState.company) {
      setFormState({
        name: "",
        email: "",
        service: "Website Development",
        message: "",
        company: ""
      });
      return;
    }

    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormState({
        name: "",
        email: "",
        service: "Website Development",
        message: "",
        company: ""
      });
    }, 850);
  };

  return (
    <>
      {/* ================= HERO (bento) ================= */}
      <section className="hero" id="hero" aria-labelledby="hero-title" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-wrap">
          <div className="copy">
            <span className="eyebrow-hero">
              <strong>{brandInfo.experienceYears}</strong> Years of Building Digital Products
            </span>
            <h1 id="hero-title">
              Websites, Apps &amp; AI Solutions{" "}
              <em>Engineered to Grow Your Business</em>
            </h1>
            <p className="lead">{brandInfo.description}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Talk to Our Experts{" "}
                <svg className="i">
                  <use href="#i-arrow" />
                </svg>
              </a>
              <Link className="btn btn-ghost" href="/services">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="bento" ref={bentoRef} aria-hidden="true">
            {/* Bento Card 1: AI (Big Card) */}
            <div className="bcard big">
              <div className="bcard-top">
                <span className="btag">01 · Featured</span>
                <span className="blink">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span className="agent-live">
                <i />
                AI agent running
              </span>
              <h3>AI Agents &amp; Automation</h3>
              <p>
                Production-ready AI agents and workflows, from RAG search to end-to-end automation that delivers real outcomes, not demos.
              </p>
              <div className="bstats">
                <div>
                  <strong>{brandInfo.experienceYears}</strong>
                  <span>Years</span>
                </div>
                <div>
                  <strong>{brandInfo.projectsDelivered}</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>{brandInfo.engineersCount}</strong>
                  <span>Engineers</span>
                </div>
              </div>
              <div className="orb-wrap">
                <div className="orb-ring" />
                <div className="orbit">
                  <div className="orb-dot" />
                </div>
                <div className="orbit o2">
                  <div className="orb-dot" />
                </div>
                <div className="orb-pulse" />
                <div className="orb-pulse p2" />
                <div className="orb">AI</div>
              </div>
            </div>

            {/* Bento Card 2: Ecommerce */}
            <div className="bcard">
              <div className="bcard-top">
                <span className="btag">02 · Commerce</span>
                <span className="blink">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span
                className="bicon b-shop"
                style={{ background: "linear-gradient(135deg,#16a34a,#4ade80)" }}
              >
                <svg className="i">
                  <use href="#i-cart" />
                </svg>
              </span>
              <div className="scene sc-shop">
                <span className="pk p1" />
                <span className="pk p2" />
                <span className="pk p3" />
                <svg className="i cart">
                  <use href="#i-cart" />
                </svg>
                <span className="badge">+1</span>
              </div>
              <h3>Ecommerce Solutions</h3>
              <p className="bdesc">
                High-converting storefronts &amp; marketplaces that scale with you.
              </p>
              <div className="chips sm">
                <span>Shopify</span>
                <span>WordPress</span>
                <span>WooCommerce</span>
              </div>
            </div>

            {/* Bento Card 3: Mobile */}
            <div className="bcard">
              <div className="bcard-top">
                <span className="btag">03 · Apps</span>
                <span className="blink">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span
                className="bicon b-app"
                style={{ background: "linear-gradient(135deg,#0891b2,#22d3ee)" }}
              >
                <svg className="i">
                  <use href="#i-mobile" />
                </svg>
              </span>
              <div className="scene sc-phone">
                <span className="ph">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ping" />
              </div>
              <h3>Mobile Applications</h3>
              <p className="bdesc">
                Native-quality iOS &amp; Android apps from a single codebase.
              </p>
              <div className="chips sm">
                <span>iOS</span>
                <span>Android</span>
                <span>React Native</span>
              </div>
            </div>

            {/* Bento Card 4: CRM */}
            <div className="bcard">
              <div className="bcard-top">
                <span className="btag">04 · Operations</span>
                <span className="blink">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span
                className="bicon b-crm"
                style={{ background: "linear-gradient(135deg,#d946ef,#f472b6)" }}
              >
                <svg className="i">
                  <use href="#i-db" />
                </svg>
              </span>
              <div className="scene sc-crm">
                <b />
                <b />
                <b />
                <b />
              </div>
              <h3>Custom CRM Software</h3>
              <p className="bdesc">
                Tailor-made CRMs built around your sales &amp; support flows.
              </p>
              <div className="chips sm">
                <span>Automation</span>
                <span>Analytics</span>
              </div>
            </div>

            {/* Bento Card 5: Website */}
            <div className="bcard">
              <div className="bcard-top">
                <span className="btag">05 · Platforms</span>
                <span className="blink">
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </div>
              <span
                className="bicon b-web"
                style={{ background: "linear-gradient(135deg,#f59e0b,#fb923c)" }}
              >
                <svg className="i">
                  <use href="#i-code" />
                </svg>
              </span>
              <div className="scene sc-web">
                <div className="win">
                  <em />
                  <em />
                  <em />
                </div>
              </div>
              <h3>Website Development</h3>
              <p className="bdesc">
                Fast, SEO-ready websites engineered to convert visitors.
              </p>
              <div className="chips sm">
                <span>Next.js</span>
                <span>React</span>
                <span>Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="logos" aria-label="Our clients">
        <div className="container">
          <p className="rv">
            Trusted by growing startups and enterprises across the India
          </p>
        </div>
        <div className="marquee rv">
          <div className="track" id="track">
            {clientLogos.map((client, idx) => (
              <span key={idx}>
                <i />
                {client}
              </span>
            ))}
            {/* Duplicate for infinite marquee scroll */}
            {clientLogos.map((client, idx) => (
              <span key={`dup-${idx}`} aria-hidden="true">
                <i />
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" aria-labelledby="svc-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">What We Do</span>
            <h2 id="svc-t" className="rv">
              End-to-end digital product engineering
            </h2>
            <p className="rv">
              From the first wireframe to production scale, one team that designs, builds and runs your product.
            </p>
          </div>
          <div className="cols c3">
            {servicesData.map((svc) => (
              <Link key={svc.id} className="card svc-card rv" href={`/services/${svc.slug}`}>
                <span className="svc-num">{svc.number}</span>
                <span className="ico">
                  <svg className="i">
                    <use href={`#${svc.icon}`} />
                  </svg>
                </span>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-tags">
                  {svc.tags.map((t, tidx) => (
                    <span key={tidx}>{t}</span>
                  ))}
                </div>
                <span className="more">
                  Learn more{" "}
                  <svg className="i">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="center rv">
            <Link className="btn btn-primary" href="/services">
              View All Services &amp; Capabilities{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= AI & INNOVATION ================= */}
      <section className="ai" id="ai" aria-labelledby="ai-t">
        <div className="ai-glow" aria-hidden="true" />
        <div className="container ai-grid">
          <div>
            <span className="eyebrow rv">AI &amp; Innovation</span>
            <h2 id="ai-t" className="rv">
              Put AI to work inside your business
            </h2>
            <p className="sub rv">
              We design and ship practical AI: agents that take action, assistants that answer customers, and models trained on your own data.
            </p>
            <div className="ai-caps rv">
              <div className="cap">
                <span className="cap-ico">
                  <svg className="i">
                    <use href="#i-db" />
                  </svg>
                </span>
                <div>
                  <h4>RAG Systems</h4>
                  <p>Ground LLMs in your private data for accurate, cited answers.</p>
                </div>
              </div>
              <div className="cap">
                <span className="cap-ico">
                  <svg className="i">
                    <use href="#i-chat" />
                  </svg>
                </span>
                <div>
                  <h4>LLM Integration</h4>
                  <p>GPT, Claude &amp; open-source models wired into your product.</p>
                </div>
              </div>
              <div className="cap">
                <span className="cap-ico">
                  <svg className="i">
                    <use href="#i-ai" />
                  </svg>
                </span>
                <div>
                  <h4>AI Agents</h4>
                  <p>Autonomous agents that plan, decide and take real action.</p>
                </div>
              </div>
              <div className="cap">
                <span className="cap-ico">
                  <svg className="i">
                    <use href="#i-code" />
                  </svg>
                </span>
                <div>
                  <h4>Workflow Automation</h4>
                  <p>Connects CRM, ERP &amp; tools so work happens without manual steps.</p>
                </div>
              </div>
            </div>
            <div className="chips rv">
              <span>Computer Vision</span>
              <span>Predictive Analytics</span>
              <span>MLOps</span>
              <span>Vector Databases</span>
            </div>
            <Link className="btn btn-primary rv" href="/services/ai-automation">
              Explore AI Solutions{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>

          <div className="ai-visual rv" aria-hidden="true">
            <div className="chip-row">
              <span className="float-chip fc1">
                <svg className="i">
                  <use href="#i-ai" />
                </svg>
                Agentic AI
              </span>
              <span className="float-chip fc2">
                <svg className="i">
                  <use href="#i-db" />
                </svg>
                RAG Pipeline
              </span>
              <span className="float-chip fc3">
                <svg className="i">
                  <use href="#i-chat" />
                </svg>
                GPT-4 · Claude · Gemini
              </span>
            </div>
            <div className="chat">
              <div className="chat-h">
                <span className="av">AI</span>
                <div>
                  <strong>Vision AI Agent</strong>
                  <small>● Online · connected to CRM</small>
                </div>
              </div>
              <div className="bub u">Can you automate our invoice follow-ups?</div>
              <div className="bub a">
                Done. I synced your CRM, drafted reminders and scheduled them. Manual effort is down <b>87%</b>.
              </div>
              <div className="bub s">
                <span>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  CRM synced
                </span>
                <span>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  Emails scheduled
                </span>
                <span>
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                  RAG grounded
                </span>
              </div>
              <div className="bub a typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="alt ind-section" id="industries" aria-labelledby="ind-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Industries We Empower</span>
            <h2 id="ind-t" className="rv">
              Deep domain expertise where it matters
            </h2>
            <p className="rv">
              We understand your market, compliance frameworks, and user psychology — so we architect and ship production-grade software faster.
            </p>
          </div>
          <div className="ind-grid">
            {industriesData.map((ind, idx) => (
              <Link
                key={ind.id}
                className="ind-card rv"
                href={ind.href}
                style={{
                  "--ind-accent": ind.blobColor,
                  "--ind-grad": ind.icoGradient,
                }}
              >
                {/* Subtle radiant ambient glow in top corner */}
                <div className="ind-glow" aria-hidden="true" />

                {/* Card Top: Icon & Category/Number Badge */}
                <div className="ind-card-top">
                  <div className="ind-ico-box">
                    <svg className="i">
                      <use href={`#${ind.icon}`} />
                    </svg>
                  </div>
                  <div className="ind-badges">
                    <span className="ind-num-tag">{ind.number || `0${idx + 1}`}</span>
                    <span className="ind-category-tag">{ind.category?.split(" ")[0]}</span>
                  </div>
                </div>

                {/* Card Body: Title, Short Description, & Capability Pills */}
                <div className="ind-card-body">
                  <h3 className="ind-card-title">{ind.title}</h3>
                  <p className="ind-card-desc">
                    {ind.shortDescription || ind.description}
                  </p>

                  {ind.pillTags && ind.pillTags.length > 0 && (
                    <div className="ind-pill-list">
                      {ind.pillTags.slice(0, 3).map((pill, pIdx) => (
                        <span key={pIdx} className="ind-pill-chip">
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Project Count / Metric Tag + Explore CTA */}
                <div className="ind-card-footer">
                  <span className="ind-proof-tag">
                    <span className="ind-dot" />
                    {ind.tag}
                  </span>
                  <span className="ind-link-cta">
                    <span>Explore Solutions</span>
                    <svg className="i">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="center rv ind-cta-wrap">
            <Link className="btn btn-primary" href="/industries">
              Explore All 9 Industry Verticals{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / WHY US ================= */}
      <section id="about" aria-labelledby="ab-t">
        <div className="container about-grid">
          <div>
            <span className="eyebrow rv">Why Vision Technolabs</span>
            <h2 id="ab-t" className="rv">
              Engineering partners who care about outcomes, not just output
            </h2>
            <p className="sub rv">
              We combine deep product engineering experience with an AI-first mindset — helping teams ship faster, scale smarter and stay ahead of the curve. No fluff, no hand-offs to junior benches, just a senior team that delivers.
            </p>
            <a className="btn btn-ghost rv" href="#contact">
              See how we work{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
          <div className="why-panel rv">
            {whyChooseUs.map((w, idx) => (
              <div className="why-item" key={idx}>
                <span className="why-num">{w.num}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-stats rv">
            {brandInfo.stats.map((st, sidx) => (
              <div key={sidx}>
                <strong>
                  {st.count}
                  {st.suffix}
                </strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="alt" id="process" aria-labelledby="pr-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">How We Work</span>
            <h2 id="pr-t" className="rv">
              A simple, predictable delivery process
            </h2>
            <p className="rv">
              Four clear stages with visibility at every step, from idea to launch and beyond.
            </p>
          </div>
          <div className="cols c4 steps">
            <span className="line" aria-hidden="true" />
            {processSteps.map((step, idx) => (
              <div className="step rv" key={idx}>
                <span className="num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK (4 Standout Projects + Mobile Slider) ================= */}
      <section id="work" aria-labelledby="wk-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Our Work</span>
            <h2 id="wk-t" className="rv">
              Recent projects we&apos;ve successfully delivered
            </h2>
            <p className="rv">
              A selection of our top enterprise deliveries across healthcare, fintech, proptech, and industrial IoT.
            </p>
          </div>

          {/* Desktop & Tablet Grid (4 items) */}
          <div className="home-work-grid rv">
            {featuredProjects.map((project) => (
              <article className="home-work-card" key={project.id}>
                <Link
                  href={`/work/${project.slug || project.id}`}
                  className="home-work-thumb"
                  style={{ "--g": project.gradient }}
                  aria-label={`View ${project.title} case study`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </Link>
                <div className="home-work-body">
                  <div className="home-work-tags">
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                  <h3>
                    <Link href={`/work/${project.slug || project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.shortPitch || project.description}</p>
                  <Link className="home-work-link" href={`/work/${project.slug || project.id}`}>
                    Read Case Study{" "}
                    <svg className="i" width="14" height="14" style={{ width: 14, height: 14, flexShrink: 0 }}>
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Slider (Shows 1 project at a time with other 3 in slider) */}
          <div
            className="home-slider-mobile"
            onTouchStart={handleProjectTouchStart}
            onTouchMove={handleProjectTouchMove}
            onTouchEnd={handleProjectTouchEnd}
            onMouseEnter={() => setIsProjectsPaused(true)}
            onMouseLeave={() => setIsProjectsPaused(false)}
          >
            {featuredProjects[activeProjectSlide] && (() => {
              const proj = featuredProjects[activeProjectSlide];
              return (
                <article className="home-work-card" key={proj.id}>
                  <Link
                    href={`/work/${proj.slug || proj.id}`}
                    className="home-work-thumb"
                    style={{ "--g": proj.gradient }}
                    aria-label={`View ${proj.title} case study`}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </Link>
                  <div className="home-work-body">
                    <div className="home-work-tags">
                      {proj.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx}>{t}</span>
                      ))}
                    </div>
                    <h3>
                      <Link href={`/work/${proj.slug || proj.id}`}>
                        {proj.title}
                      </Link>
                    </h3>
                    <p>{proj.shortPitch || proj.description}</p>
                    <Link className="home-work-link" href={`/work/${proj.slug || proj.id}`}>
                      Read Case Study{" "}
                      <svg className="i" width="14" height="14" style={{ width: 14, height: 14, flexShrink: 0 }}>
                        <use href="#i-arrow" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })()}

            <div className="home-slider-nav">
              <button
                type="button"
                className="home-slider-btn"
                aria-label="Previous project"
                onClick={() =>
                  setActiveProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
                }
              >
                <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="home-slider-dots">
                {featuredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`home-slider-dot ${idx === activeProjectSlide ? "active" : ""}`}
                    aria-label={`Go to project ${idx + 1}`}
                    onClick={() => setActiveProjectSlide(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="home-slider-btn"
                aria-label="Next project"
                onClick={() =>
                  setActiveProjectSlide((prev) => (prev + 1) % featuredProjects.length)
                }
              >
                <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="center rv">
            <Link className="btn btn-primary" href="/work">
              View All Case Studies &amp; Projects{" "}
              <svg className="i" width="15" height="15" style={{ width: 15, height: 15, flexShrink: 0 }}>
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (4 Turnkey & Proprietary Platforms + Mobile Slider) ================= */}
      <section className="alt" id="products" aria-labelledby="prod-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Our Products</span>
            <h2 id="prod-t" className="rv">
              Market-Ready SaaS Platforms &amp; Apps
            </h2>
            <p className="rv">
              Turnkey AI platforms and high-converting Shopify apps built and battle-tested by Vision Technolabs.
            </p>
          </div>

          {/* Desktop & Tablet Grid (4 Products) */}
          <div className="home-prod-grid rv">
            {featuredProducts.map((prod) => (
              <div className="home-prod-card" key={prod.id}>
                <span className="home-prod-badge">{prod.badge}</span>
                <h3>
                  <Link href={`/products/${prod.slug || prod.id}`}>
                    {prod.shortTitle}
                  </Link>
                </h3>
                <p className="home-prod-desc">{prod.shortDescription || prod.description}</p>
                {prod.metrics && prod.metrics[0] && (
                  <div className="home-prod-stat">
                    <strong>{prod.metrics[0].value}</strong>
                    <span>{prod.metrics[0].label}</span>
                  </div>
                )}
                <Link className="home-work-link" href={`/products/${prod.slug || prod.id}`}>
                  Explore Product{" "}
                  <svg className="i" width="14" height="14" style={{ width: 14, height: 14, flexShrink: 0 }}>
                    <use href="#i-arrow" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Slider (Shows 1 product at a time with other 3 in slider) */}
          <div
            className="home-slider-mobile"
            onTouchStart={handleProductTouchStart}
            onTouchMove={handleProductTouchMove}
            onTouchEnd={handleProductTouchEnd}
            onMouseEnter={() => setIsProductsPaused(true)}
            onMouseLeave={() => setIsProductsPaused(false)}
          >
            {featuredProducts[activeProductSlide] && (() => {
              const p = featuredProducts[activeProductSlide];
              return (
                <div className="home-prod-card" key={p.id}>
                  <span className="home-prod-badge">{p.badge}</span>
                  <h3>
                    <Link href={`/products/${p.slug || p.id}`}>
                      {p.shortTitle}
                    </Link>
                  </h3>
                  <p className="home-prod-desc">{p.shortDescription || p.description}</p>
                  {p.metrics && p.metrics[0] && (
                    <div className="home-prod-stat">
                      <strong>{p.metrics[0].value}</strong>
                      <span>{p.metrics[0].label}</span>
                    </div>
                  )}
                  <Link className="home-work-link" href={`/products/${p.slug || p.id}`}>
                    Explore Product{" "}
                    <svg className="i" width="14" height="14" style={{ width: 14, height: 14, flexShrink: 0 }}>
                      <use href="#i-arrow" />
                    </svg>
                  </Link>
                </div>
              );
            })()}

            <div className="home-slider-nav">
              <button
                type="button"
                className="home-slider-btn"
                aria-label="Previous product"
                onClick={() =>
                  setActiveProductSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
                }
              >
                <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="home-slider-dots">
                {featuredProducts.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`home-slider-dot ${idx === activeProductSlide ? "active" : ""}`}
                    aria-label={`Go to product ${idx + 1}`}
                    onClick={() => setActiveProductSlide(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="home-slider-btn"
                aria-label="Next product"
                onClick={() =>
                  setActiveProductSlide((prev) => (prev + 1) % featuredProducts.length)
                }
              >
                <svg width="18" height="18" style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="center rv">
            <Link className="btn btn-ghost" href="/products">
              View All Products &amp; SaaS Platforms{" "}
              <svg className="i" width="15" height="15" style={{ width: 15, height: 15, flexShrink: 0 }}>
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="alt" id="stack" aria-labelledby="st-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Technology</span>
            <h2 id="st-t" className="rv">
              Our complete technology stack
            </h2>
            <p className="rv">
              A broad, battle-tested stack across frontend, backend, mobile, AI, data, cloud, commerce and QA.
            </p>
          </div>
          <div className="cols c4">
            {techStackData.map((tech, idx) => (
              <div
                className="tech-card rv"
                key={idx}
                style={{ "--tc1": tech.tc1, "--tc2": tech.tc2 }}
              >
                <div className="tech-head">
                  <span className="tech-ico">
                    <svg className="i">
                      <use href={`#${tech.icon}`} />
                    </svg>
                  </span>
                  <div>
                    <h3>{tech.category}</h3>
                    <small>{tech.subtitle}</small>
                  </div>
                </div>
                <div className="chips">
                  {tech.items.map((item, iIdx) => (
                    <span key={iIdx}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GUARANTEES ================= */}
      <section id="guarantees" aria-labelledby="gt-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Our Commitment</span>
            <h2 id="gt-t" className="rv">
              What you get with every project
            </h2>
            <p className="rv">
              Beyond code — a set of guarantees baked into every engagement, no matter the size.
            </p>
          </div>
          <div className="cols c4">
            {guaranteesData.map((gt, idx) => (
              <div className="card guarantee-card rv" key={idx}>
                <span className="ico">
                  <svg className="i">
                    <use href={`#${gt.icon}`} />
                  </svg>
                </span>
                <h3>{gt.title}</h3>
                <p>{gt.description}</p>
              </div>
            ))}
          </div>
          <div className="center rv">
            <a className="btn btn-primary" href="#contact">
              Start Your Project{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="alt" id="testimonials" aria-labelledby="ts-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Testimonials</span>
            <h2 id="ts-t" className="rv">
              What our clients say
            </h2>
            <p className="rv">Real feedback from clients we&apos;ve partnered with.</p>
          </div>
          <div className="test-wrap rv">
            <div
              className="test-track"
              id="testTrack"
              ref={trackRef}
              onScroll={handleTestimonialScroll}
            >
              {testimonialsData.map((item, idx) => (
                <figure className="card quote t-item" key={idx}>
                  <div className="stars" aria-label="5 out of 5 stars">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <svg className="i fill" key={sIdx}>
                        <use href="#i-star" />
                      </svg>
                    ))}
                  </div>
                  <p>{item.quote}</p>
                  <figcaption className="who">
                    <span className="av">{item.initials}</span>
                    <div>
                      <strong>{item.author}</strong>
                      <small>
                        {item.role} · {item.country}
                      </small>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="test-controls">
              <button
                className="test-btn prev"
                aria-label="Previous testimonials"
                onClick={() =>
                  scrollTestimonialTo(Math.max(0, currentTestimonialPage - 1))
                }
              >
                <svg className="i">
                  <use href="#i-arrow" />
                </svg>
              </button>
              <div className="test-dots" id="testDots">
                {[...Array(totalPages)].map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    className={dotIdx === currentTestimonialPage ? "active" : ""}
                    aria-label={`Go to testimonial group ${dotIdx + 1}`}
                    onClick={() => scrollTestimonialTo(dotIdx)}
                  />
                ))}
              </div>
              <button
                className="test-btn next"
                aria-label="Next testimonials"
                onClick={() =>
                  scrollTestimonialTo(
                    Math.min(totalPages - 1, currentTestimonialPage + 1)
                  )
                }
              >
                <svg className="i">
                  <use href="#i-arrow" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO TESTIMONIALS ================= */}
      <section id="videos" aria-labelledby="vid-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Client Success Stories</span>
            <h2 id="vid-t" className="rv">
              Hear it straight from our clients
            </h2>
            <p className="rv">
              Real project reviews from founders and teams we&apos;ve partnered with, on camera.
            </p>
          </div>
          <div className="cols c3">
            {videosData.map((vid) => (
              <div
                className="card flush video-card rv"
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                style={{ cursor: "pointer" }}
              >
                <div className="vthumb" style={{ "--g": vid.gradient }}>
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    width={480}
                    height={360}
                    loading="lazy"
                  />
                  <button
                    className="play-btn"
                    aria-label={`Play video testimonial: ${vid.title}`}
                  >
                    <svg className="i fill">
                      <use href="#i-play" />
                    </svg>
                  </button>
                  <span className="vclient">{vid.client}</span>
                </div>
                <div className="wb">
                  <h3>{vid.title}</h3>
                  <p>{vid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="alt" id="blog" aria-labelledby="bl-t">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow rv">Insights</span>
            <h2 id="bl-t" className="rv">
              Latest from our engineering blog
            </h2>
            <p className="rv">
              Practical guides on web, mobile and AI from the team building them.
            </p>
          </div>
          <div className="cols c3">
            {blogsData.slice(0, 3).map((blog) => (
              <Link className="card flush rv" href={`/blog/${blog.slug || blog.id}`} key={blog.id}>
                <div className="bthumb" style={{ "--g": blog.gradient }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                  <svg className="i">
                    <use href={`#${blog.icon}`} />
                  </svg>
                </div>
                <div className="wb">
                  <div className="tags">
                    <span>{blog.category}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <div className="meta">
                    <time dateTime={blog.isoDate}>{blog.date}</time>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="center rv" style={{ marginTop: "2.5rem" }}>
            <Link className="btn btn-ghost" href="/blog">
              Explore All Engineering Articles{" "}
              <svg className="i">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" aria-labelledby="ct-t">
        <div className="container">
          <div className="cta-box rv">
            <div>
              <h2 id="ct-t">Let&apos;s build something great together</h2>
              <p className="sub">
                Tell us about your project and a solution architect will get back to you within 24 hours, with a free estimate.
              </p>
              <ul className="info">
                <li>
                  <span className="ico">
                    <svg className="i">
                      <use href="#i-mail" />
                    </svg>
                  </span>
                  <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
                </li>
                <li>
                  <span className="ico">
                    <svg className="i">
                      <use href="#i-phone" />
                    </svg>
                  </span>
                  <a href={`tel:${brandInfo.phone.replace(/[^0-9+]/g, "")}`}>{brandInfo.phone}</a>
                </li>
                <li>
                  <span className="ico">
                    <svg className="i">
                      <use href="#i-pin" />
                    </svg>
                  </span>
                  <a href={brandInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">{brandInfo.address}</a>
                </li>
              </ul>
            </div>

            <form className="form" id="form" onSubmit={handleContactSubmit}>
              {/* Anti-spam honeypot */}
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="f-company">Company</label>
                <input
                  id="f-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="f-name">Full name</label>
                <input
                  id="f-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="f-mail">Work email</label>
                <input
                  id="f-mail"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>

              <div className="full">
                <label htmlFor="f-svc">I&apos;m interested in</label>
                <select
                  id="f-svc"
                  name="service"
                  value={formState.service}
                  onChange={(e) =>
                    setFormState({ ...formState, service: e.target.value })
                  }
                >
                  <option>Website Development</option>
                  <option>Ecommerce Solutions</option>
                  <option>Mobile App Development</option>
                  <option>AI &amp; Automation</option>
                  <option>Custom Software / CRM</option>
                  <option>Meta &amp; Google Ads</option>
                  <option>Hire Developers</option>
                </select>
              </div>

              <div className="full">
                <label htmlFor="f-msg">Project details</label>
                <textarea
                  id="f-msg"
                  name="message"
                  placeholder="Tell us a little about your idea…"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <button
                className={`btn btn-primary full ${
                  formLoading ? "loading" : ""
                }`}
                type="submit"
                id="submitBtn"
                disabled={formLoading}
              >
                <span className="btn-label">Send Message</span>
                <svg className="i arrow-ic">
                  <use href="#i-arrow" />
                </svg>
                <span className="spinner" aria-hidden="true" />
              </button>

              {formSuccess && (
                <p className="ok" id="ok" role="status" aria-live="polite">
                  Thanks! We&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
