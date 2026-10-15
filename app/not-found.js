import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Vision Technolabs",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Our Services",
      desc: "Explore full-stack engineering, AI automation, and cloud platforms.",
      href: "/services",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Case Studies",
      desc: "Proven architectures and mission-critical client success stories.",
      href: "/work",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Engineering Blog",
      desc: "Technical deep dives on modern web, AI agents, and scalability.",
      href: "/blog",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      title: "Contact Us",
      desc: "Connect directly with our solutions architects to discuss your project.",
      href: "/contact",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <main
      id="main"
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 8vw, 6rem) 1.25rem",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <span className="eyebrow">404 Error</span>
        </div>

        <div
          style={{
            fontFamily: "var(--serif, serif)",
            fontStyle: "italic",
            fontSize: "clamp(5rem, 16vw, 9rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            background:
              "linear-gradient(135deg, var(--primary, #4f46e5), #9333ea, var(--accent2, #fb923c))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "0.5rem",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--ink, #0f172a)",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--muted, #64748b)",
            maxWidth: "540px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          The page you requested could not be found or has been relocated. Use
          the navigation below to find what you need.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem",
            textAlign: "left",
            marginBottom: "2.5rem",
          }}
        >
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                padding: "1.35rem",
                borderRadius: "var(--radius, 16px)",
                background: "#fff",
                border: "1px solid var(--line, #e2e8f0)",
                transition: "all 0.25s var(--ease)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "rgba(79, 70, 229, 0.08)",
                  color: "var(--primary, #4f46e5)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </div>
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--ink, #0f172a)",
                  marginBottom: "0.35rem",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted, #64748b)",
                  lineHeight: 1.5,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {item.desc}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  color: "var(--primary, #4f46e5)",
                  marginTop: "1rem",
                }}
              >
                Visit page →
              </span>
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
