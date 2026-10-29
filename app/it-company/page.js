import Link from "next/link";
import { locationsData } from "@/data/locations";
import { brandInfo } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: {
    absolute: "IT Company Locations in Gujarat | Vision Technolabs",
  },
  description:
    "Explore Vision Technolabs IT and software development services across Ahmedabad, Naroda, Gandhinagar, Surat, Vadodara, Rajkot, and all Gujarat.",
  path: "/it-company",
});

export default function LocationsIndexPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "IT Company Locations", path: "/it-company" },
  ];

  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Breadcrumbs items={breadcrumbItems} />

      <section
        className="sec hero-subpage"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(2rem, 5vw, 3.5rem)",
          paddingBottom: "clamp(2.5rem, 6vw, 4rem)",
          background: "radial-gradient(ellipse 750px 340px at 50% 15%, rgba(79, 70, 229, 0.09), transparent 70%), radial-gradient(ellipse 550px 280px at 15% 85%, rgba(6, 182, 212, 0.07), transparent 60%)",
        }}
      >
        <span
          className="svp-dots"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(79, 70, 229, .2) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%)",
            maskImage: "radial-gradient(ellipse at 50% 30%, #000 20%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        <span
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            top: "-140px",
            right: "8%",
            borderRadius: "50%",
            background: "var(--primary, #4f46e5)",
            opacity: 0.16,
            filter: "blur(90px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
        <span
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            bottom: "-100px",
            left: "6%",
            borderRadius: "50%",
            background: "var(--accent2, #fb923c)",
            opacity: 0.14,
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "900px", textAlign: "center" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span className="eyebrow-hero">
              <span className="eyebrow-live-dot" aria-hidden="true" />
              Regional Engineering Network · Gujarat &amp; India
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--ink, #0f172a)",
              margin: "0 auto 1.25rem",
              maxWidth: "26ch",
            }}
          >
            IT Company Locations &amp;{" "}
            <em
              style={{
                fontFamily: "var(--serif, Georgia, serif)",
                fontStyle: "italic",
                background: "var(--grad-warm)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "var(--ink, #0f172a)",
              }}
            >
              Regional Engineering Across Gujarat
            </em>
          </h1>

          <p
            className="lead"
            style={{
              fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
              lineHeight: 1.7,
              color: "var(--muted, #64748b)",
              marginBottom: "2.25rem",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Vision Technolabs delivers high-performance website development, custom mobile applications,
            and enterprise software across Gujarat. Discover our dedicated regional engineering hubs,
            local technical expertise, and verified client implementations in your area.
          </p>

          {/* Quick Metrics Pill Bar */}
          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1.25rem",
              width: "100%",
              maxWidth: "760px",
              padding: "1.25rem 1.75rem",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary, #4f46e5)", lineHeight: 1.2 }}>
                Ahmedabad
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted, #64748b)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.25rem" }}>
                Global HQ &amp; Labs
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary, #4f46e5)", lineHeight: 1.2 }}>
                7+ Hubs
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted, #64748b)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.25rem" }}>
                Across Gujarat
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary, #4f46e5)", lineHeight: 1.2 }}>
                500+
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted, #64748b)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.25rem" }}>
                Production Releases
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary, #4f46e5)", lineHeight: 1.2 }}>
                On-Site
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted, #64748b)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.25rem" }}>
                Tech Consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS GRID ================= */}
      <section className="sec alt" id="locations-list">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Explore Locations</span>
            <h2>Dedicated Technology Services Across Key Industrial Hubs</h2>
            <p>
              Select your region to explore local domain case studies, commercial focus areas, and in-person meeting options.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {locationsData.map((loc) => (
              <article
                key={loc.slug}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2.25rem",
                  borderRadius: "18px",
                  background: "#fff",
                  border: "1px solid var(--line, #e2e8f0)",
                  boxShadow: "var(--shadow-sm, 0 2px 6px rgba(0,0,0,0.03))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "999px",
                      background: "rgba(79, 70, 229, 0.08)",
                      color: "var(--primary, #4f46e5)",
                    }}
                  >
                    {loc.type === "state" ? "State-Wide Engineering" : loc.type === "area" ? "Headquarters Area" : "City Hub"}
                  </span>

                  <span style={{ fontSize: "0.82rem", color: "var(--muted, #64748b)", fontWeight: 500 }}>
                    {loc.state}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "var(--ink, #0f172a)",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Link
                    href={`/it-company/${loc.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    IT Company in {loc.name}
                  </Link>
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
                  {loc.lead}
                </p>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "0.5rem" }}>
                    Key Strategic Advantages:
                  </div>
                  <ul style={{ paddingLeft: "1.2rem", margin: 0, fontSize: "0.88rem", color: "var(--muted, #64748b)", lineHeight: 1.6 }}>
                    {loc.whyPoints.slice(0, 2).map((w, wIdx) => (
                      <li key={wIdx}>
                        <strong style={{ color: "var(--ink, #0f172a)" }}>{w.title}:</strong> {w.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/it-company/${loc.slug}`}
                  className="btn btn-primary"
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Explore {loc.name} Services &amp; Case Studies →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NAP & HEADQUARTERS ================= */}
      <section className="sec" id="headquarters">
        <div className="container">
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "20px",
              background: "#fff",
              border: "1px solid var(--line, #e2e8f0)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <span className="eyebrow">Central Engineering Office</span>
            <h2 style={{ fontSize: "1.75rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Visit Our Engineering Headquarters
            </h2>
            <p style={{ color: "var(--muted, #64748b)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              All software engineering, architectural reviews, and quality assurance workflows are directed from our central Vitthal Plaza development facility in Naroda, Ahmedabad.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <strong>Office Address:</strong>
                <p style={{ margin: "0.25rem 0 0", color: "var(--muted, #64748b)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                  {brandInfo.address}
                </p>
              </div>
              <div>
                <strong>Direct Desk:</strong>
                <p style={{ margin: "0.25rem 0 0", color: "var(--muted, #64748b)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                  Phone: <a href={`tel:${brandInfo.whatsapp || "+918128966157"}`} style={{ color: "var(--primary, #4f46e5)" }}>{brandInfo.phone}</a><br />
                  Email: <a href={`mailto:${brandInfo.email}`} style={{ color: "var(--primary, #4f46e5)" }}>{brandInfo.email}</a>
                </p>
              </div>
            </div>

            <a
              href={brandInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
