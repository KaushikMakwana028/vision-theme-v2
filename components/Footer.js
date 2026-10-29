"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { brandInfo } from "@/data/company";
import { navigationData } from "@/data/navigation";

export default function Footer() {
  const [showToTop, setShowToTop] = useState(false);
  const currentYear = 2026;
  const [activeModal, setActiveModal] = useState(null); // "privacy" | "terms" | null

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 600;
          setShowToTop((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="foot" role="contentinfo">
        {/* Subtle ambient lighting */}
        <div className="foot-ambient" aria-hidden="true" />

        <div className="container">
          <div className="foot-grid">
            {/* Column 1: Info, Live Status & Socials */}
            <div className="foot-col foot-brand-col">
              <Link prefetch={false} href="/" className="logo">
                <Image
                  src="/logo/vision-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="logo-img"
                />
                <div className="logo-brand-text">
                  <span className="logo-brand-vision">Vision</span>
                  <span className="logo-brand-tech">Technolabs</span>
                </div>
              </Link>
              <p className="foot-desc">{brandInfo.footerBio || brandInfo.description}</p>

              {/* Social Channels */}
              <div className="soc" aria-label="Social media profiles">
                {brandInfo.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vision Technolabs on ${soc.name}`}
                    title={soc.name}
                  >
                    <svg className="i">
                      <use href={`#${soc.icon}`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Engineering Services */}
            <div className="foot-col">
              <h3 className="foot-title">Engineering Services</h3>
              <ul className="foot-links">
                {navigationData.footerLinks.services.map((item, idx) => (
                  <li key={idx}>
                    {item.href.startsWith("/") ? (
                      <Link prefetch={false} href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company Navigation */}
            <div className="foot-col">
              <h3 className="foot-title">Company</h3>
              <ul className="foot-links">
                {navigationData.footerLinks.company.map((item, idx) => (
                  <li key={idx}>
                    {item.href.startsWith("/") ? (
                      <Link prefetch={false} href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Real Contact Data & Newsletter */}
            <div className="foot-col foot-contact-col">
              <h3 className="foot-title">Get In Touch</h3>
              <ul className="addr">
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                  <a
                    href={brandInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="addr-link"
                    title="View office location on Google Maps"
                  >
                    <span>{brandInfo.shortAddress || brandInfo.address}</span>
                    <span className="addr-open-icon">↗</span>
                  </a>
                </li>
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
                </li>
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  <div className="phone-group">
                    <a href={`tel:${brandInfo.phone.replace(/[^0-9+]/g, "")}`}>{brandInfo.phone}</a>
                  </div>
                </li>
              </ul>

              {/* WhatsApp Quick Desk Button */}
              {brandInfo.whatsappUrl && (
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-wa-btn"
                >
                  <svg className="i" width="16" height="16" aria-hidden="true">
                    <use href="#i-wa" />
                  </svg>
                  <span>WhatsApp Project Desk</span>
                  <span className="wa-dot" />
                </a>
              )}
            </div>
          </div>

          {/* Regional IT Company Locations Bar (Temporarily commented out) */}
          {/*
          <div
            className="foot-locations"
            style={{
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              fontSize: "0.85rem",
              color: "#94a3b8",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.4rem 0.6rem",
            }}
          >
            <span style={{ fontWeight: 600, color: "#fff" }}>IT Company Locations:</span>
            <Link prefetch={false} href="/it-company/naroda" style={{ color: "#94a3b8", textDecoration: "none" }}>IT Company in Naroda</Link>
            <span>·</span>
            <Link prefetch={false} href="/it-company/ahmedabad" style={{ color: "#94a3b8", textDecoration: "none" }}>IT Company in Ahmedabad</Link>
            <span>·</span>
            <Link prefetch={false} href="/it-company/gujarat" style={{ color: "#94a3b8", textDecoration: "none" }}>IT Company in Gujarat</Link>
            <span>·</span>
            <Link prefetch={false} href="/it-company" style={{ color: "var(--primary, #4f46e5)", textDecoration: "none", fontWeight: 600 }}>All Gujarat Locations →</Link>
          </div>
          */}

          {/* Bottom Bar with Real Legal Modals & Safe Padding */}
          <div className="foot-bottom">
            <div className="foot-bottom-left">
              <span>
                © {currentYear} Vision Technolabs. All rights reserved.
              </span>
              <span className="foot-loc-tag">
                Crafted with pride in Ahmedabad, India 🇮🇳
              </span>
            </div>
            <div className="foot-bottom-right">
              <Link prefetch={false}
                href="/privacy-policy"
                className="foot-legal-btn"
              >
                Privacy Policy
              </Link>
              <span className="foot-legal-sep">·</span>
              <Link prefetch={false}
                href="/terms"
                className="foot-legal-btn"
              >
                Terms of Service
              </Link>
              <span className="foot-legal-sep">·</span>
              <button
                type="button"
                className="foot-legal-btn"
                onClick={() => setActiveModal("security")}
              >
                Security &amp; NDA
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <a
        className={`totop ${showToTop ? "show" : ""}`}
        id="totop"
        href="#main"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg className="i">
          <use href="#i-up" />
        </svg>
      </a>

      {/* Interactive Legal Modals for Real Transparency */}
      {activeModal && (
        <div
          className="legal-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="legal-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-head">
              <h3>
                {activeModal === "privacy" && "Privacy Policy — Vision Technolabs"}
                {activeModal === "terms" && "Terms of Service — Vision Technolabs"}
                {activeModal === "security" && "Security & Bilateral NDA Guarantee"}
              </h3>
              <button
                type="button"
                className="legal-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="legal-modal-content">
              {activeModal === "privacy" && (
                <>
                  <p><strong>Effective Date:</strong> Updated for 2026</p>
                  <p>
                    Vision Technolabs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respect the privacy of every client, partner, and website visitor. We maintain strict non-disclosure practices and enterprise data security protocols.
                  </p>
                  <h4>1. Zero AI Training on Client Data</h4>
                  <p>
                    We never use client proprietary source code, business logic, customer records, or architectural blueprints to train public or private third-party AI models.
                  </p>
                  <h4>2. Data Collection &amp; Use</h4>
                  <p>
                    Information submitted via our contact forms (including name, email address, phone number, and project briefs) is exclusively used to respond to your technical inquiry and prepare architectural proposals.
                  </p>
                  <h4>3. Data Confidentiality &amp; Storage</h4>
                  <p>
                    All project briefs, NDA requests, and architectural documents are encrypted in transit via TLS 1.3 and at rest with AES-256 encryption. We never sell, rent, or trade your data to third parties.
                  </p>
                </>
              )}

              {activeModal === "terms" && (
                <>
                  <p><strong>Effective Date:</strong> Updated for 2026</p>
                  <h4>1. 100% Intellectual Property (IP) Ownership</h4>
                  <p>
                    Upon completion of project milestones and invoice settlement, 100% of all intellectual property, source code, git repositories, databases, design artifacts, and deployment pipelines belong exclusively to the client with zero vendor lock-in.
                  </p>
                  <h4>2. Engineering Deliverables &amp; Warranty</h4>
                  <p>
                    All custom web applications, mobile apps, and AI software built by Vision Technolabs include a complimentary 30-day post-launch warranty covering bug fixes, performance monitoring, and stability audits.
                  </p>
                  <h4>3. Bilateral Non-Disclosure Agreement (NDA)</h4>
                  <p>
                    Before initiating any technical discovery calls or reviewing internal client systems, we execute a legally binding bilateral NDA to protect trade secrets and proprietary algorithms.
                  </p>
                </>
              )}

              {activeModal === "security" && (
                <>
                  <p><strong>Enterprise Security Posture:</strong> 2026 Standards</p>
                  <h4>1. Security-First Engineering</h4>
                  <p>
                    Our software development lifecycle implements automated SAST/DAST static analysis, dependency vulnerability scanning, and strict OWASP Top 10 compliance.
                  </p>
                  <h4>2. SOC-2 &amp; HIPAA-Aware Architecture</h4>
                  <p>
                    For fintech and healthcare clients, we design isolated VPCs, encrypted database vaults, Row-Level Security (RLS) partition schemas, and audit logs conforming to HIPAA and SOC-2 Type II standards.
                  </p>
                  <h4>3. Direct Lead Consultation</h4>
                  <p>
                    Inquiries sent to <code>hello@visiontechnolabs.com</code> or via our WhatsApp desk are reviewed directly by principal engineers and solution leads with a guaranteed 24-hour SLA.
                  </p>
                </>
              )}
            </div>
            <div className="legal-modal-foot">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setActiveModal(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
