/*
 * DRAFT FOR LEGAL REVIEW
 * This document is a practical draft terms of service prepared for Vision Technolabs,
 * an India-based software engineering agency serving clients in India, the United States, and the United Kingdom.
 * This document must be reviewed and approved by qualified legal counsel prior to formal reliance.
 */

import Link from "next/link";
import { brandInfo } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Review Vision Technolabs' Terms of Service governing software engineering engagements, 100% intellectual property ownership transfer, bilateral NDAs, and delivery warranties.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  const lastUpdated = "October 15, 2026";

  return (
    <main id="main" className="legal-page">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />

      <article style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Header */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <span className="eyebrow">Engagement Standards</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--ink, #0f172a)",
                marginBottom: "0.75rem",
              }}
            >
              Terms of Service
            </h1>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                color: "var(--muted, #64748b)",
                background: "var(--surface, #f8fafc)",
                padding: "0.35rem 0.85rem",
                borderRadius: "999px",
                border: "1px solid var(--line, #e2e8f0)",
              }}
            >
              <span>Last updated:</span>
              <time dateTime="2026-10-15" style={{ fontWeight: 600, color: "var(--ink, #0f172a)" }}>
                {lastUpdated}
              </time>
            </div>
          </header>

          {/* Legal Notice Banner */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius, 16px)",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              color: "#1e40af",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            <strong>Note for Legal Review:</strong> This practical terms of service draft outlines the
            general commercial principles of {brandInfo.name} for software engineering engagements
            with clients across India, the United States, and the United Kingdom. Formal project
            contracts execute customized Master Services Agreements (MSAs) and Statements of Work
            (SOWs).
          </div>

          {/* Terms Content Body */}
          <div
            className="prose-content"
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#334155",
              display: "flex",
              flexDirection: "column",
              gap: "2.25rem",
            }}
          >
            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                1. Acceptance of Terms &amp; Contractual Hierarchy
              </h2>
              <p>
                By accessing this website or engaging Vision Technolabs (&quot;we&quot;, &quot;us&quot;,
                or &quot;our&quot;) for technical discovery and engineering services, you agree to be
                bound by these Terms of Service.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong>Contractual Hierarchy:</strong> Where you enter into a signed Master Services
                Agreement (MSA), Statement of Work (SOW), or Non-Disclosure Agreement (NDA) with
                Vision Technolabs, the terms of that signed bilateral agreement take legal precedence
                over these general website terms in the event of any conflict.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                2. Scope of Software Engineering Services
              </h2>
              <p>
                Vision Technolabs provides professional software engineering, system architecture,
                mobile application development, ecommerce builds, and custom AI/automation
                integrations.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Our agile delivery methodology adheres to a disciplined 4-stage lifecycle:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>
                  <strong>Discover:</strong> Architecture planning, user stories, technical scoping,
                  and milestone definitions.
                </li>
                <li>
                  <strong>Design:</strong> Responsive UI/UX wireframes, component design systems, and
                  clickable prototypes.
                </li>
                <li>
                  <strong>Develop:</strong> Bi-weekly agile development sprints with working software
                  demonstrations and continuous automated QA.
                </li>
                <li>
                  <strong>Deliver:</strong> Secure production deployment, knowledge transfer, code
                  handover, and post-launch stability monitoring.
                </li>
              </ul>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                3. 100% Intellectual Property (IP) Ownership
              </h2>
              <p>
                We believe in zero vendor lock-in. Upon settlement of all milestone fees stipulated in
                the applicable Statement of Work,{" "}
                <strong>
                  100% of all custom source code, repositories, databases, design assets, and
                  deliverables belong exclusively to the client
                </strong>
                .
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Vision Technolabs retains no ongoing licensing claims, royalties, or proprietary
                encumbrances on custom client code. Open-source libraries or third-party frameworks
                utilized within builds remain subject to their respective open-source licenses (e.g.,
                MIT, Apache 2.0).
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                4. Bilateral Non-Disclosure &amp; Confidentiality
              </h2>
              <p>
                We execute bilateral Non-Disclosure Agreements (NDAs) prior to receiving proprietary
                system blueprints, codebase access, or trade secrets. Both parties agree to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>
                  Protect all confidential technical, financial, and business data using the same
                  degree of care used for their own sensitive assets (not less than reasonable care).
                </li>
                <li>
                  Restrict confidential information access exclusively to team members with a direct
                  need to know for project execution.
                </li>
                <li>
                  Never use client trade secrets or proprietary algorithms for competitive purposes or
                  third-party AI training.
                </li>
              </ul>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                5. Invoicing, Milestone Billing &amp; Currencies
              </h2>
              <p>
                Unless otherwise specified in an SOW, projects are billed on an agile milestone
                basis:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>
                  <strong>International Multi-Currency Billing:</strong> Invoices can be issued in{" "}
                  <strong>US Dollars ($ USD), British Pounds (£ GBP), or Indian Rupees (₹ INR)</strong>{" "}
                  via international wire transfer (SWIFT) or secure payment gateways.
                </li>
                <li>
                  <strong>Payment Milestones:</strong> Sprint-based deliverables are released upon
                  completion of milestone demos and invoice settlement.
                </li>
                <li>
                  <strong>Payment Terms:</strong> Invoices are payable within 15 business days of
                  issuance unless otherwise stated in the agreement.
                </li>
              </ul>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                6. 30-Day Post-Launch Warranty
              </h2>
              <p>
                All custom web and mobile deliverables built under an active SOW include a{" "}
                <strong>complimentary 30-day post-launch warranty period</strong> commencing on the
                date of production release. During this window, Vision Technolabs will remediate any
                reproducible functional bugs or deviations from the agreed specifications at no
                additional cost.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Feature enhancements, scope additions, or issues caused by unauthorized third-party
                modifications to the codebase are excluded from warranty coverage and handled under
                separate change orders or ongoing retainer agreements.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                7. Client Cooperation &amp; Third-Party Services
              </h2>
              <p>
                Agile development relies on prompt collaboration. The client agrees to provide timely
                feedback during sprint reviews, appoint an authorized project point of contact, and
                supply required third-party API credentials, cloud hosting access, and domain DNS
                records.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Third-party subscriptions (such as AWS/GCP cloud hosting, payment gateway transaction
                fees, and third-party SaaS licenses) remain the direct financial responsibility of the
                client.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, neither party shall be liable for
                any indirect, incidental, special, consequential, or punitive damages (including loss
                of revenue, data, or anticipated profits), even if advised of the possibility of such
                damages.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                The total cumulative liability of Vision Technolabs arising out of or related to an
                engineering engagement shall be strictly limited to the actual aggregate fees paid by
                the client under the specific Statement of Work giving rise to the claim in the twelve
                (12) months preceding the event.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                9. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These terms and any non-contractual obligations arising out of them shall be governed
                by and construed in accordance with the laws of Gujarat, India.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                In the event of a dispute, both parties agree to first seek an amicable resolution
                through good-faith executive discussion within 30 days. If unresolved, the dispute
                shall be referred to and finally resolved by binding arbitration seated in Ahmedabad,
                Gujarat, India, conducted in the English language pursuant to the Arbitration and
                Conciliation Act, 1996.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.75rem",
                }}
              >
                10. Official Notices &amp; Contact Information
              </h2>
              <p>
                For contractual notices, SOW queries, or terms inquiries, please contact our
                operations desk:
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  padding: "1.5rem",
                  borderRadius: "var(--radius, 16px)",
                  background: "var(--surface, #f8fafc)",
                  border: "1px solid var(--line, #e2e8f0)",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--ink, #0f172a)", marginBottom: "0.5rem" }}>
                  Vision Technolabs Operations
                </div>
                <div>{brandInfo.address}</div>
                <div style={{ marginTop: "0.5rem" }}>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${brandInfo.email}`}
                    style={{ color: "var(--primary, #4f46e5)" }}
                  >
                    {brandInfo.email}
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong> {brandInfo.phone}
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
