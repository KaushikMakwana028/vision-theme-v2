"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navigationData } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  // Handle sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile drawer body lock & keyboard escape
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close menus on outside click for desktop
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header ${isScrolled ? "scrolled" : ""} ${
        mobileMenuOpen ? "menu-open" : ""
      }`}
      id="header"
    >
      <div className="container bar">
        <Link href="/" className="logo" aria-label="Vision Technolabs home" onClick={handleLinkClick}>
          <svg width="34" height="34" aria-hidden="true">
            <use href="#i-logo" />
          </svg>
          <div>
            Vision <span>Technolabs</span>
          </div>
        </Link>

        <nav className="nav" id="nav" aria-label="Primary">
          <ul className="nav-list">
            {navigationData.headerNav.map((item) => {
              if (item.type === "link") {
                const isInternal = item.href?.startsWith("/");
                return (
                  <li key={item.id}>
                    {isInternal ? (
                      <Link className="trigger" href={item.href} onClick={handleLinkClick}>
                        {item.title}
                      </Link>
                    ) : (
                      <a className="trigger" href={item.href} onClick={handleLinkClick}>
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              }

              if (item.type === "mega") {
                const isOpen = openDropdown === item.id;
                return (
                  <li
                    key={item.id}
                    className={`has-menu mega-li ${isOpen ? "open" : ""}`}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1100) setOpenDropdown(item.id);
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 1100) setOpenDropdown(null);
                    }}
                  >
                    <Link
                      className="trigger"
                      href={item.href || "/services"}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`m-${item.id}`}
                      onClick={(e) => {
                        if (typeof window !== "undefined" && window.innerWidth < 1100) {
                          if (!isOpen) {
                            e.preventDefault();
                            setOpenDropdown(item.id);
                          } else {
                            handleLinkClick();
                          }
                        } else {
                          handleLinkClick();
                        }
                      }}
                    >
                      {item.title}{" "}
                      <svg className="i chev" aria-hidden="true">
                        <use href="#i-chev" />
                      </svg>
                    </Link>
                    <div className="panel mega" id={`m-${item.id}`}>
                      <div className="box">
                        {item.columns.map((col, idx) => (
                          <div className="col" key={idx}>
                            <h3>{col.title}</h3>
                            {col.links.map((link, lIdx) => {
                              const isInternal = link.href.startsWith("/");
                              return isInternal ? (
                                <Link
                                  key={lIdx}
                                  href={link.href}
                                  onClick={handleLinkClick}
                                >
                                  {link.label}
                                </Link>
                              ) : (
                                <a
                                  key={lIdx}
                                  href={link.href}
                                  onClick={handleLinkClick}
                                >
                                  {link.label}
                                </a>
                              );
                            })}
                          </div>
                        ))}
                        {(item.bottomAction || item.megaStrip) && (
                          <div className="mega-bottom">
                            <div className="mega-bottom-note">
                              <span className="mega-pulse-dot" />
                              <span>{item.id === "services" ? "Production-ready engineering & fixed sprints" : "Battle-tested Shopify apps & autonomous AI platforms"}</span>
                            </div>
                            <Link
                              href={item.bottomAction?.href || item.megaStrip?.href || "/services"}
                              onClick={handleLinkClick}
                              className="mega-bottom-btn"
                            >
                              <span>{item.bottomAction?.label || "Explore All Services"}</span>
                              <svg className="i arrow-ic" aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              }

              // Standard dropdown
              const isOpen = openDropdown === item.id;
              return (
                <li
                  key={item.id}
                  className={`has-menu ${isOpen ? "open" : ""}`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1100) setOpenDropdown(item.id);
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1100) setOpenDropdown(null);
                  }}
                >
                  <Link
                    className="trigger"
                    href={item.href || "#"}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`m-${item.id}`}
                    onClick={(e) => {
                      if (typeof window !== "undefined" && window.innerWidth < 1100) {
                        if (!isOpen) {
                          e.preventDefault();
                          setOpenDropdown(item.id);
                        } else {
                          handleLinkClick();
                        }
                      } else {
                        handleLinkClick();
                      }
                    }}
                  >
                    {item.leadIcon && (
                      <svg className="i lead-ic" aria-hidden="true">
                        <use href={`#${item.leadIcon}`} />
                      </svg>
                    )}
                    {item.title}{" "}
                    <svg className="i chev" aria-hidden="true">
                      <use href="#i-chev" />
                    </svg>
                  </Link>
                  <div className="panel" id={`m-${item.id}`}>
                    <div className="box">
                      {item.items.map((sub, sIdx) => {
                        const isInternal = sub.href.startsWith("/");
                        return isInternal ? (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={handleLinkClick}
                          >
                            {sub.label}
                          </Link>
                        ) : (
                          <a
                            key={sIdx}
                            href={sub.href}
                            onClick={handleLinkClick}
                          >
                            {sub.label}
                          </a>
                        );
                      })}
                      {item.bottomAction && (
                        <div className="dropdown-bottom">
                          <Link
                            href={item.bottomAction.href}
                            onClick={handleLinkClick}
                            className="dropdown-bottom-btn"
                          >
                            <span>{item.bottomAction.label}</span>
                            <svg className="i arrow-ic" aria-hidden="true">
                              <use href="#i-arrow" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}

            <li className="nav-cta-m">
              <Link className="btn btn-primary" href="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <Link className="btn btn-primary btn-sm hdr-cta" href="/contact">
            Get in Touch
          </Link>
          <button
            className="burger"
            id="burger"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="nav"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className="overlay"
        id="overlay"
        onClick={() => {
          setMobileMenuOpen(false);
          setOpenDropdown(null);
        }}
      />
    </header>
  );
}
