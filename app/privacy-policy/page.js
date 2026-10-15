/*
 * DRAFT FOR LEGAL REVIEW
 * This document is a practical draft privacy policy prepared for Vision Technolabs,
 * an India-based software engineering agency serving clients in India, the United States, and the United Kingdom.
 * This document must be reviewed and approved by qualified legal counsel prior to formal reliance.
 */

import Link from "next/link";
import { brandInfo } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Review Vision Technolabs' Privacy Policy. Practical disclosures on contact form data collection, analytics cookies, third-party processors, user rights, and international data standards.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 15, 2026";

  return (
    <main id="main" className="legal-page">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <article style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Header */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <span className="eyebrow">Trust &amp; Transparency</span>
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
              Privacy Policy
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
            <strong>Note for Legal Review:</strong> This practical privacy draft is prepared for{" "}
            {brandInfo.name}, an engineering consultancy based in Ahmedabad, India, serving clients
            across India, the United States, and the United Kingdom. It should be reviewed by legal
            counsel for continuous alignment with local and cross-border data protection statutes.
          </div>

          {/* Policy Body */}
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
                1. Data Controller &amp; Scope
              </h2>
              <p>
                Vision Technolabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a digital
                engineering company headquartered at {brandInfo.address}. We operate as the data
                controller for personal data collected through our website (
                <code>https://visiontechnolabs.com</code>), contact forms, technical discovery desks,
                and direct business inquiries.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                We design and engineer bespoke web architectures, mobile applications, and AI
                solutions for startups, scaleups, and enterprise clients primarily located in{" "}
                <strong>India, the United States, and the United Kingdom</strong>. This policy
                governs how we process, protect, and respect your data across all interactions.
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
                2. Information We Collect
              </h2>
              <p>
                We adhere to strict data minimization principles. We collect only information
                necessary to evaluate project scopes, respond to architectural inquiries, and provide
                software engineering services:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>
                  <strong>Contact &amp; Discovery Inquiries:</strong> When you submit our contact or
                  project evaluation forms, we collect your full name, business email address, phone
                  number, organization/company name, project summary or brief, target timeline, and
                  estimated budget.
                </li>
                <li>
                  <strong>Direct Communications:</strong> Information provided when emailing us at{" "}
                  <code>{brandInfo.email}</code> or messaging our WhatsApp project desk.
                </li>
                <li>
                  <strong>Technical &amp; Telemetry Data:</strong> Automatically gathered server logs
                  including anonymized IP addresses, browser user agent, operating system, device
                  characteristics, referring URLs, and page navigation patterns.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                We do <em>not</em> solicit or collect sensitive personal records, payment card
                numbers, government identification documents, or biometric data through our public
                website.
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
                3. Purpose and Legal Grounds for Processing
              </h2>
              <p>We process personal data under the following recognized legal bases:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>
                  <strong>Contractual Steps:</strong> Evaluating your project brief to prepare
                  technical architectures, cost estimates, and non-disclosure agreements (NDAs) at
                  your request prior to entering into a master services agreement.
                </li>
                <li>
                  <strong>Legitimate Business Interests:</strong> Monitoring website performance,
                  preventing spam or cyber abuse, and optimizing technical documentation.
                </li>
                <li>
                  <strong>Consent:</strong> When you voluntarily submit an inquiry or subscribe to
                  engineering publications. You may withdraw consent at any time.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                <strong>We never sell, rent, or trade your personal or business data.</strong> Your
                contact details are never provided to commercial data brokers or advertisers.
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
                4. Strict Zero AI Training Guarantee
              </h2>
              <p>
                As a matter of engineering policy, Vision Technolabs guarantees that proprietary
                source code, database schemas, API keys, intellectual property, or confidential
                business logic shared by clients or prospects is{" "}
                <strong>never used to train public or proprietary foundation AI models</strong>. Any
                AI tools utilized in our engineering workflows operate under strict enterprise
                tenancy agreements with zero-data-retention guarantees.
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
                5. Analytics and Cookies
              </h2>
              <p>
                Our website uses minimal, functional cookies and privacy-conscious analytics:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>
                  <strong>Essential Technical Cookies:</strong> Strictly necessary cookies to enable
                  secure page routing, asset delivery, and session management.
                </li>
                <li>
                  <strong>Performance &amp; Analytics:</strong> When configured, we utilize Google
                  Analytics 4 (loaded via <code>next/script</code>) to understand aggregate traffic
                  trends such as popular case studies and site speed metrics. We do not transmit
                  personally identifiable information (PII) to analytics providers.
                </li>
                <li>
                  <strong>Zero Third-Party Advertising Trackers:</strong> We do not deploy cross-site
                  behavioral tracking cookies, Meta pixel trackers, or retargeting beacons.
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
                6. Third-Party Service Providers (Subprocessors)
              </h2>
              <p>
                To provide high-availability digital services, we rely on trusted enterprise
                infrastructure partners bound by strict confidentiality and data protection terms:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>
                  <strong>Cloud Infrastructure &amp; CDN:</strong> Vercel and AWS for secure edge
                  hosting, static asset caching, and compute.
                </li>
                <li>
                  <strong>Communications:</strong> Google Workspace for encrypted business email and
                  WhatsApp Business API for direct lead correspondence.
                </li>
                <li>
                  <strong>Analytics:</strong> Google LLC (Google Analytics 4) for aggregated traffic
                  measurement.
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
                7. Cross-Border International Data Transfers
              </h2>
              <p>
                Because Vision Technolabs is located in India and provides software services to
                entities in the United States and the United Kingdom, data transmitted to us crosses
                international borders. We implement rigorous safeguards to ensure international
                transfers meet statutory requirements:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>Standard Contractual Clauses (SCCs) for cross-border data transfer.</li>
                <li>
                  UK International Data Transfer Agreements (IDTA) where required under UK GDPR.
                </li>
                <li>
                  Bilateral Non-Disclosure Agreements (NDAs) and enterprise data security protocols.
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
                8. Your Data Protection Rights
              </h2>
              <p>
                Depending on your jurisdiction, you possess specific statutory rights regarding your
                personal data:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
                <li>
                  <strong>India (DPDP Act, 2023):</strong> You have the right to access a summary of
                  personal data processed by us, request correction or erasure of outdated data, and
                  seek grievance redressal.
                </li>
                <li>
                  <strong>United Kingdom (UK GDPR &amp; DPA 2018):</strong> You have the right of
                  access, rectification, erasure (&quot;right to be forgotten&quot;), restriction of
                  processing, data portability, and the right to object to processing.
                </li>
                <li>
                  <strong>United States (State Laws including California CCPA/CPRA):</strong> You
                  have the right to know what personal information is collected, request deletion,
                  request correction, and experience non-discrimination. We do not sell personal
                  data.
                </li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                To exercise any of these rights, email us directly at{" "}
                <a
                  href={`mailto:${brandInfo.email}`}
                  style={{ color: "var(--primary, #4f46e5)", fontWeight: 600 }}
                >
                  {brandInfo.email}
                </a>
                . We respond to verified data subject requests within 30 days.
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
                9. Data Retention and Security
              </h2>
              <p>
                We store project inquiries only for as long as necessary to evaluate technical
                fit, negotiate agreements, or meet statutory accounting obligations. Inquiries that do
                not mature into active engineering contracts are purged periodically.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                All website communications are protected by TLS 1.3 encryption in transit. Internal
                project repositories and data vaults are encrypted at rest using industry-standard
                AES-256 protocols with role-based access restrictions.
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
                10. Contact Us &amp; Grievance Redressal
              </h2>
              <p>
                If you have questions, privacy requests, or grievances concerning this policy,
                please contact our privacy desk:
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
                  Vision Technolabs Privacy &amp; Data Operations
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
