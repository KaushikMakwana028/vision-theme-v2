import Link from "next/link";
import { brandInfo } from "@/data/company";
import { processSteps, clientLogos, whyChooseUs } from "@/data/process";
import { caseStudiesData } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "About Us — Web, Mobile & AI Engineering",
  description:
    "Vision Technolabs is an Ahmedabad-based digital engineering company delivering enterprise web architectures, high-scale mobile apps, and autonomous AI solutions across India, the US, and the UK.",
  path: "/about",
});

export default function AboutPage() {
  const featuredProjects = caseStudiesData.slice(0, 3);

  return (
    <main id="main" className="about-page">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="about-hero" style={{ padding: "clamp(3rem, 6vw, 5.5rem) 0 3rem" }}>
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow">About Vision Technolabs</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--ink, #0f172a)",
                marginBottom: "1.25rem",
              }}
            >
              Engineering Digital Platforms for High-Growth Enterprises
            </h1>
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                lineHeight: 1.65,
                color: "var(--muted, #64748b)",
                marginBottom: "2rem",
              }}
            >
              {brandInfo.description}
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Schedule Technical Discovery
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Engineering Services
              </Link>
            </div>
          </div>

          {/* Key Verified Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            {brandInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "1.75rem 1.25rem",
                  textAlign: "center",
                  borderRadius: "var(--radius, 16px)",
                  background: "#ffffff",
                  border: "1px solid var(--line, #e2e8f0)",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif, serif)",
                    fontStyle: "italic",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "var(--primary, #4f46e5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.count}
                  {stat.suffix}
                </div>
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--ink, #0f172a)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Engineering Principles */}
      <section
        style={{
          padding: "clamp(3rem, 5vw, 4.5rem) 0",
          background: "var(--surface, #f8fafc)",
          borderTop: "1px solid var(--line, #e2e8f0)",
          borderBottom: "1px solid var(--line, #e2e8f0)",
        }}
      >
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Our Commitments
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--ink, #0f172a)",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Why High-Growth Companies Build With Us
            </h2>
            <p style={{ color: "var(--muted, #64748b)", fontSize: "1rem", lineHeight: 1.6 }}>
              We partner with founders and technical leaders across India, the US, and the UK
              to deliver resilient code with absolute transparency.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {whyChooseUs.map((item) => (
              <div
                key={item.num}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius, 16px)",
                  background: "#ffffff",
                  border: "1px solid var(--line, #e2e8f0)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "var(--primary, #4f46e5)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--muted, #64748b)",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Agile Delivery Process */}
      <section style={{ padding: "clamp(3.5rem, 6vw, 5rem) 0" }}>
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Methodology
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--ink, #0f172a)",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Our 4-Stage Agile Delivery Process
            </h2>
            <p style={{ color: "var(--muted, #64748b)", fontSize: "1rem", lineHeight: 1.6 }}>
              A disciplined, sprint-driven workflow designed to eliminate risk and deliver working
              software every two weeks.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius, 16px)",
                  background: "#ffffff",
                  border: "1px solid var(--line, #e2e8f0)",
                  position: "relative",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "1.75rem",
                    fontFamily: "var(--serif, serif)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "rgba(79, 70, 229, 0.25)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.6rem",
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

      {/* Proven Track Record / Case Studies Highlights */}
      <section
        style={{
          padding: "clamp(3.5rem, 6vw, 5rem) 0",
          background: "var(--surface, #f8fafc)",
          borderTop: "1px solid var(--line, #e2e8f0)",
          borderBottom: "1px solid var(--line, #e2e8f0)",
        }}
      >
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Verified Deployments
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--ink, #0f172a)",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Engineered for Scalability &amp; Business Impact
            </h2>
            <p style={{ color: "var(--muted, #64748b)", fontSize: "1rem", lineHeight: 1.6 }}>
              A selection of mission-critical production platforms built and maintained by our team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius, 16px)",
                  background: "#ffffff",
                  border: "1px solid var(--line, #e2e8f0)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--primary, #4f46e5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.category}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    color: "var(--muted, #64748b)",
                    marginBottom: "1.25rem",
                    flexGrow: 1,
                  }}
                >
                  {project.subtitle || project.description}
                </p>

                {project.metrics && project.metrics.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "0.75rem",
                      padding: "1rem",
                      borderRadius: "10px",
                      background: "var(--surface, #f8fafc)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div
                          style={{
                            fontWeight: 700,
                            color: "var(--ink, #0f172a)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--muted, #64748b)",
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={`/work/${project.slug || project.id}`}
                  aria-label={`Read Case Study: ${project.title}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "var(--primary, #4f46e5)",
                    textDecoration: "none",
                  }}
                >
                  Read Case Study →
                </Link>
              </div>
            ))}
          </div>

          {/* Client Logos Pills */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--muted, #64748b)",
                marginBottom: "1.25rem",
              }}
            >
              Trusted Across Production Applications
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              {clientLogos.map((client, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "999px",
                    background: "#ffffff",
                    border: "1px solid var(--line, #e2e8f0)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--ink, #0f172a)",
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/work" className="btn btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Headquarters, Address & Hours */}
      <section style={{ padding: "clamp(3.5rem, 6vw, 5rem) 0" }}>
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Development Center
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--ink, #0f172a)",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Ahmedabad Headquarters &amp; Operations
            </h2>
            <p style={{ color: "var(--muted, #64748b)", fontSize: "1rem", lineHeight: 1.6 }}>
              Direct access to our engineering leads and solutions architects.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Address Card */}
            <div
              className="card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius, 16px)",
                background: "#ffffff",
                border: "1px solid var(--line, #e2e8f0)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "1rem",
                }}
              >
                Physical Address
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--muted, #64748b)",
                  marginBottom: "1.5rem",
                }}
              >
                {brandInfo.address}
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={brandInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  View on Google Maps ↗
                </a>
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Visit Contact Page
                </Link>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div
              className="card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius, 16px)",
                background: "#ffffff",
                border: "1px solid var(--line, #e2e8f0)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "1rem",
                }}
              >
                Operating Hours &amp; Communications
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.92rem",
                  color: "var(--muted, #64748b)",
                }}
              >
                <li>
                  <strong style={{ color: "var(--ink, #0f172a)" }}>Working Hours:</strong>{" "}
                  {brandInfo.workingHours}
                </li>
                <li>
                  <strong style={{ color: "var(--ink, #0f172a)" }}>Timezone:</strong>{" "}
                  {brandInfo.timezone} (UTC+5:30)
                </li>
                <li>
                  <strong style={{ color: "var(--ink, #0f172a)" }}>Direct Inquiries:</strong>{" "}
                  <a
                    href={`mailto:${brandInfo.email}`}
                    style={{ color: "var(--primary, #4f46e5)", textDecoration: "none" }}
                  >
                    {brandInfo.email}
                  </a>
                </li>
                <li>
                  <strong style={{ color: "var(--ink, #0f172a)" }}>Phone Desk:</strong>{" "}
                  <a
                    href={`tel:${brandInfo.phone.replace(/[^0-9+]/g, "")}`}
                    style={{ color: "var(--primary, #4f46e5)", textDecoration: "none" }}
                  >
                    {brandInfo.phone}
                  </a>{" "}
                  {brandInfo.altPhone && `· ${brandInfo.altPhone}`}
                </li>
              </ul>
              {brandInfo.whatsappUrl && (
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  WhatsApp Project Desk ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          padding: "clamp(3.5rem, 6vw, 5rem) 0",
          background: "var(--surface, #f8fafc)",
          borderTop: "1px solid var(--line, #e2e8f0)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--ink, #0f172a)",
              marginBottom: "1rem",
            }}
          >
            Ready to Engineer Your Next Platform?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "var(--muted, #64748b)",
              marginBottom: "2rem",
            }}
          >
            Consult directly with our solution architects. We offer bilateral NDAs by default
            and guaranteed 24-hour technical proposal turnaround.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore All 12 Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
