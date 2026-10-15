import Link from "next/link";

/**
 * RelatedLinks - Server Component for structured internal linking.
 * Renders titled cards linking to related case studies, services, industries, or blogs.
 *
 * @param {Object} props
 * @param {string} [props.title="Related Resources"] - Heading for the section
 * @param {string} [props.subtitle] - Contextual description
 * @param {string} [props.eyebrow="Internal Directory"] - Small tag above heading
 * @param {Array<{title: string, items: Array}>} [props.sections] - Grouped sections of cards
 * @param {Array} [props.items] - Flat list of cards (used if sections not provided)
 */
export default function RelatedLinks({
  title = "Related Resources",
  subtitle,
  eyebrow = "Internal Directory",
  sections,
  items,
}) {
  const groups =
    sections && sections.length > 0
      ? sections
      : items && items.length > 0
      ? [{ title: null, items }]
      : [];

  if (groups.length === 0) return null;

  return (
    <section className="sec alt related-links-sec" aria-label={title}>
      <div className="container">
        <div className="sec-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        {groups.map((group, gIdx) => (
          <div
            key={gIdx}
            className="related-group"
            style={{ marginBottom: gIdx < groups.length - 1 ? "3rem" : 0 }}
          >
            {group.title && (
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                  }}
                  aria-hidden="true"
                />
                {group.title}
              </h3>
            )}

            <div className={`cols ${group.items.length === 2 ? "c2" : "c3"}`}>
              {group.items.map((item, idx) => (
                <Link
                  key={item.href || idx}
                  href={item.href}
                  className="card related-card"
                  aria-label={item.ariaLabel || `Read more about ${item.title}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    height: "100%",
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
                    {item.tag && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "999px",
                          background: "rgba(79, 70, 229, 0.08)",
                          color: "var(--primary)",
                          border: "1px solid rgba(79, 70, 229, 0.18)",
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                    {item.meta && (
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--muted)",
                          fontWeight: 500,
                          marginLeft: "auto",
                        }}
                      >
                        {item.meta}
                      </span>
                    )}
                  </div>

                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      marginBottom: "0.6rem",
                      color: "var(--ink)",
                    }}
                  >
                    {item.title}
                  </h4>

                  {item.description && (
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        marginBottom: "1.25rem",
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </p>
                  )}

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--primary)",
                      marginTop: "auto",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <span>{item.actionLabel || "Explore"}</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
