"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { brandInfo } from "@/data/company";
import { navigationData } from "@/data/navigation";

export default function Footer() {
  const [showToTop, setShowToTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="foot">
        <div className="container">
          <div className="foot-grid">
            {/* Column 1: Info & Newsletter */}
            <div>
              <Link href="/" className="logo" aria-label="Vision Technolabs home">
                <svg width="34" height="34" aria-hidden="true">
                  <use href="#i-logo" />
                </svg>
                <div>
                  Vision <span>Technolabs</span>
                </div>
              </Link>
              <p>{brandInfo.description}</p>
              <div className="soc">
                {brandInfo.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                  >
                    <svg className="i">
                      <use href={`#${soc.icon}`} />
                    </svg>
                  </a>
                ))}
              </div>
              <form className="newsletter" id="newsletterForm" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="nl-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button className="btn btn-primary btn-sm" type="submit">
                  Subscribe
                </button>
              </form>
              {newsletterSuccess && (
                <p className="nl-ok" id="nlOk" role="status">
                  Subscribed! Check your inbox to confirm.
                </p>
              )}
            </div>

            {/* Column 2: Services */}
            <div>
              <h4>Services</h4>
              <ul>
                {navigationData.footerLinks.services.map((item, idx) => (
                  <li key={idx}>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4>Company</h4>
              <ul>
                {navigationData.footerLinks.company.map((item, idx) => (
                  <li key={idx}>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4>Get in touch</h4>
              <ul className="addr">
                <li>
                  <svg className="i">
                    <use href="#i-pin" />
                  </svg>
                  {brandInfo.address}
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-mail" />
                  </svg>
                  <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
                </li>
                <li>
                  <svg className="i">
                    <use href="#i-phone" />
                  </svg>
                  {brandInfo.phone}
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>
              © <span id="yr" ref={(el) => { if (el) el.textContent = String(new Date().getFullYear()); }}>2025</span> Vision Technolabs. All rights reserved.
            </span>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
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
    </>
  );
}
