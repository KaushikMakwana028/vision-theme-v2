import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const styles = `
.breadcrumbs-bar {
  width: 100%;
  padding: 0.9rem 0 0.4rem;
  background: transparent;
  position: relative;
  z-index: 20;
}
.breadcrumbs-pill {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding: 0.35rem 0.95rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 1px 3px rgba(11, 16, 32, 0.04), 0 4px 12px -2px rgba(11, 16, 32, 0.03);
  font-family: var(--font, "Poppins", system-ui, -apple-system, sans-serif);
  font-size: 0.8125rem;
  line-height: 1.35;
  list-style: none;
  margin: 0;
  width: fit-content;
  max-width: 100%;
}
.breadcrumbs-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
}
.breadcrumbs-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--muted, #64748b);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}
.breadcrumbs-link:hover {
  color: var(--primary, #4f46e5);
}
.breadcrumbs-home-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-top: -1px;
}
.breadcrumbs-sep {
  display: inline-flex;
  align-items: center;
  color: #94a3b8;
  opacity: 0.8;
  user-select: none;
  flex-shrink: 0;
}
.breadcrumbs-sep-icon {
  width: 10px;
  height: 10px;
  stroke: currentColor;
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.breadcrumbs-current {
  color: var(--ink, #0f172a);
  font-weight: 600;
  letter-spacing: 0.01em;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 380px;
  vertical-align: bottom;
}
@media (max-width: 640px) {
  .breadcrumbs-bar {
    padding: 0.65rem 0 0.25rem;
  }
  .breadcrumbs-pill {
    font-size: 0.75rem;
    padding: 0.28rem 0.75rem;
    gap: 0.35rem;
  }
  .breadcrumbs-current {
    max-width: 170px;
  }
}
`;

export default function Breadcrumbs({ items }) {
  // Breadcrumbs currently commented out upon request. Re-enable when asked.
  return null;

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="breadcrumbs-bar">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="container">
          <ol className="breadcrumbs-pill">
            {items.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === items.length - 1;

              return (
                <li key={item.path || index} className="breadcrumbs-item">
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="breadcrumbs-current"
                      title={item.name}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <Link href={item.path} className="breadcrumbs-link">
                        {isFirst && (
                          <svg
                            className="breadcrumbs-home-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        )}
                        <span>{item.name}</span>
                      </Link>
                      <span className="breadcrumbs-sep" aria-hidden="true">
                        <svg
                          className="breadcrumbs-sep-icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
