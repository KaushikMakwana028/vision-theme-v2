import Link from "next/link";
import { notFound } from "next/navigation";
import { locationsData, getLocationBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { brandInfo } from "@/data/company";
import { processSteps } from "@/data/process";
import { guaranteesData } from "@/data/guarantees";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/common/FaqAccordion";
import {
  faqSchema,
  breadcrumbSchema,
  professionalServiceSchema,
} from "@/lib/schema";

export const instant = false;
export const ensureStatic = "navigation";

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const title = location.metaTitle || truncate(`IT Company in ${location.name} | Vision Technolabs`, 60);

  return buildMetadata({
    title: {
      absolute: title,
    },
    description: location.metaDescription,
    path: `/it-company/${slug}`,
  });
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const featuredServices = (location.featuredServiceSlugs || [])
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  const featuredCaseStudies = (location.caseStudySlugs || [])
    .map((cSlug) => getCaseStudyBySlug(cSlug))
    .filter(Boolean);

  const otherLocations = locationsData.filter((l) => l.slug !== location.slug);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "IT Company Locations", path: "/it-company" },
    { name: location.name, path: `/it-company/${slug}` },
  ];

  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      {location.faqs?.length > 0 && <JsonLd data={faqSchema(location.faqs)} />}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* ================= HERO SECTION ================= */}
      <section className="sec hero-subpage" style={{ paddingTop: "2.5rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div style={{ maxWidth: "860px" }}>
            <span
              className="eyebrow"
              style={{
                display: "inline-block",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--primary, #4f46e5)",
                marginBottom: "0.85rem",
              }}
            >
              {location.heroEyebrow}
            </span>

            <h1
              id="location-title"
              style={{
                fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--ink, #0f172a)",
                margin: "0 0 1.25rem",
              }}
            >
              {location.h1}
            </h1>

            <p
              className="lead"
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                lineHeight: 1.65,
                color: "var(--muted, #64748b)",
                marginBottom: "2rem",
              }}
            >
              {location.lead}
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: "var(--soft, #f8fafc)",
                border: "1px solid var(--line, #e2e8f0)",
                marginBottom: "2.25rem",
              }}
            >
              {brandInfo.stats.map((st, sIdx) => (
                <div key={sIdx}>
                  <div
                    style={{
                      fontSize: "1.65rem",
                      fontWeight: 800,
                      color: "var(--primary, #4f46e5)",
                      lineHeight: 1.1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {st.count}
                    {st.suffix}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--muted, #64748b)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#contact-location">
                Request Free Technical Discovery
              </a>
              <Link className="btn btn-ghost" href="/work">
                View Real Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US IN LOCATION ================= */}
      <section className="sec alt" id="why-choose-us">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Local Strategic Advantage</span>
            <h2>Why Forward-Thinking Businesses in {location.name} Partner with Vision</h2>
            <p>
              We combine institutional engineering standards, clean modular architectures, and
              direct senior developer collaboration for businesses across {location.name}.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {location.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid var(--line, #e2e8f0)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(79, 70, 229, 0.08)",
                    color: "var(--primary, #4f46e5)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                  }}
                >
                  0{idx + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "var(--muted, #64748b)",
                    margin: 0,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED CORE SERVICES ================= */}
      {featuredServices.length > 0 && (
        <section className="sec" id="services">
          <div className="container">
            <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
              <span className="eyebrow">Core Engineering Capabilities</span>
              <h2>Specialized Software Engineering Services for {location.name}</h2>
              <p>
                From custom full-stack web platforms to high-concurrency ERP software and mobile apps,
                every solution is 100% custom-crafted with zero bloated templates.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {featuredServices.map((svc) => (
                <article
                  key={svc.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem",
                    borderRadius: "16px",
                    background: "#fff",
                    border: "1px solid var(--line, #e2e8f0)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--primary, #4f46e5)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {svc.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--ink, #0f172a)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {svc.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--muted, #64748b)",
                      marginBottom: "1.5rem",
                      flexGrow: 1,
                    }}
                  >
                    {svc.shortDescription || svc.description}
                  </p>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="more"
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "var(--primary, #4f46e5)",
                      textDecoration: "none",
                    }}
                  >
                    Explore {svc.title} Services in {location.name} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CASE STUDIES & VERIFIABLE OUTCOMES ================= */}
      {featuredCaseStudies.length > 0 && (
        <section className="sec alt" id="case-studies">
          <div className="container">
            <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
              <span className="eyebrow">Proven Production Deployments</span>
              <h2>Real-World Systems Delivered by Vision Technolabs</h2>
              <p>
                Explore verifiable case studies demonstrating our architectural precision, high-speed execution,
                and measurable client business metrics.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {featuredCaseStudies.map((cs) => (
                <article
                  key={cs.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem",
                    borderRadius: "16px",
                    background: "#fff",
                    border: "1px solid var(--line, #e2e8f0)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--primary, #4f46e5)",
                      }}
                    >
                      {cs.category}
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--muted, #64748b)",
                        fontWeight: 500,
                      }}
                    >
                      {cs.client}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--ink, #0f172a)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {cs.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--muted, #64748b)",
                      marginBottom: "1.25rem",
                      flexGrow: 1,
                    }}
                  >
                    {cs.shortPitch || cs.subtitle || cs.description}
                  </p>

                  <Link
                    href={`/work/${cs.slug || cs.id}`}
                    aria-label={`Read Case Study: ${cs.title}`}
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "var(--primary, #4f46e5)",
                      textDecoration: "none",
                    }}
                  >
                    <span>Read Case Study: {cs.title}</span> <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 4-STEP DELIVERY LIFECYCLE ================= */}
      <section className="sec" id="process">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Deterministic Engineering Framework</span>
            <h2>Our 4-Step Agile Delivery Lifecycle</h2>
            <p>
              We replace guesswork and scope creep with structured two-week sprints, clickable prototypes,
              continuous testing, and complete IP handover.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid var(--line, #e2e8f0)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    fontFamily: "var(--serif, serif)",
                    fontStyle: "italic",
                    color: "var(--primary, #4f46e5)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--muted, #64748b)",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY GUARANTEES ================= */}
      <section className="sec alt" id="guarantees">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Guaranteed Service Standards</span>
            <h2>Non-Negotiable Software Engineering Guarantees</h2>
            <p>
              Every client engagement with Vision Technolabs is governed by absolute intellectual property ownership,
              transparent milestone pricing, and bilateral confidentiality agreements.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {guaranteesData.slice(0, 4).map((g, gIdx) => (
              <div
                key={gIdx}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid var(--line, #e2e8f0)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {g.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--muted, #64748b)",
                    margin: 0,
                  }}
                >
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCAL PRESENCE & REAL NAP BLOCK ================= */}
      <section className="sec" id="contact-location">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Office &amp; Contact Desk</span>
            <h2>Our Engineering Office &amp; Service Presence for {location.name}</h2>
            <p>
              Reach out directly to schedule an in-person discovery workshop at our headquarters or arrange a virtual technical consultation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              background: "#fff",
              padding: "2.5rem",
              borderRadius: "20px",
              border: "1px solid var(--line, #e2e8f0)",
              boxShadow: "var(--shadow, 0 4px 12px rgba(0,0,0,0.05))",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "1rem" }}>
                Vision Technolabs Headquarters
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--ink, #0f172a)", marginBottom: "1.25rem" }}>
                <strong>Address:</strong><br />
                {brandInfo.address}
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--ink, #0f172a)", marginBottom: "0.75rem" }}>
                <strong>Phone Desk:</strong>{" "}
                <a href={`tel:${brandInfo.whatsapp || "+918128966157"}`} style={{ color: "var(--primary, #4f46e5)", textDecoration: "none", fontWeight: 600 }}>
                  {brandInfo.phone}
                </a>
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--ink, #0f172a)", marginBottom: "0.75rem" }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${brandInfo.email}`} style={{ color: "var(--primary, #4f46e5)", textDecoration: "none", fontWeight: 600 }}>
                  {brandInfo.email}
                </a>
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--muted, #64748b)", marginBottom: "1.5rem" }}>
                <strong>Working Hours:</strong> {brandInfo.workingHours}
              </p>

              <a
                href={brandInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "1rem" }}>
                Serving Key Districts &amp; Industrial Zones
              </h3>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--muted, #64748b)", marginBottom: "1.25rem" }}>
                We engineer scalable digital solutions for manufacturers, commercial firms, and service enterprises across {location.name} and surrounding commercial corridors:
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {location.nearbyAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    style={{
                      display: "inline-block",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "999px",
                      background: "var(--soft, #f8fafc)",
                      border: "1px solid var(--line, #e2e8f0)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--ink, #0f172a)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION FAQ ================= */}
      {location.faqs?.length > 0 && (
        <section className="sec alt" id="faqs">
          <div className="container">
            <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2>Frequently Asked Questions About IT Services in {location.name}</h2>
              <p>
                Direct answers regarding our local engagement models, code handover protocols, project timeframes, and technology standards.
              </p>
            </div>

            <FaqAccordion items={location.faqs} />
          </div>
        </section>
      )}

      {/* ================= RELATED LOCATIONS & SERVICES ================= */}
      <section className="sec" id="network">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2rem" }}>
            <span className="eyebrow">Gujarat Regional Engineering Network</span>
            <h2>Explore Our Other Regional Engineering Hubs</h2>
            <p>
              Vision Technolabs delivers high-performance digital engineering across all major manufacturing, trading, and institutional centers in Gujarat.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/it-company/${loc.slug}`}
                className="card"
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "#fff",
                  border: "1px solid var(--line, #e2e8f0)",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "0.3rem" }}>
                  IT Company in {loc.name}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted, #64748b)" }}>
                  Explore {loc.name} Services →
                </div>
              </Link>
            ))}
          </div>

          {/* Cross Links to Industries & Products */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "16px",
              background: "var(--soft, #f8fafc)",
              border: "1px solid var(--line, #e2e8f0)",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "0.75rem" }}>
              Enterprise Domains &amp; Ready-to-Deploy Products
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted, #64748b)", lineHeight: 1.6, marginBottom: "1rem" }}>
              In addition to custom software, we build domain-specialized platforms for{" "}
              <Link href="/industries/healthcare-medtech" style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}>Healthcare &amp; MedTech</Link>,{" "}
              <Link href="/industries/fintech-banking" style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}>Fintech &amp; Banking</Link>, and{" "}
              <Link href="/industries/ecommerce-retail" style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}>Ecommerce &amp; Retail</Link>. Explore our proprietary turnkey products including{" "}
              <Link href="/products/billsbook" style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}>BillsBook GST Billing</Link> and{" "}
              <Link href="/products/tripsbook" style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}>TripsBook ERP</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="sec alt" style={{ textAlign: "center", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2>Ready to Build Your Next Scalable Platform in {location.name}?</h2>
          <p style={{ fontSize: "1.05rem", color: "var(--muted, #64748b)", lineHeight: 1.65, margin: "1rem auto 2rem" }}>
            Connect directly with our senior software architects to review your technical requirements, architecture blueprints, and timeline estimates.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact">
              Talk to Our Engineering Team
            </Link>
            <Link className="btn btn-ghost" href="/services">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
