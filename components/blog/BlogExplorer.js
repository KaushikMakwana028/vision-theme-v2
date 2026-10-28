import Link from "next/link";
import Image from "next/image";

export default function BlogExplorer({ articles = [] }) {
  if (!articles || articles.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--muted)" }}>
        <h3>No articles found</h3>
        <p>Please check back soon for our latest engineering breakdowns.</p>
      </div>
    );
  }

  return (
    <div className="cols c3">
      {articles.map((article) => (
        <article key={article.id} className="mag-card">
          <Link
            href={`/blog/${article.slug || article.id}`}
            className="mag-thumb"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={500}
            />
          </Link>

          <div className="mag-body">
            <div className="mag-meta">
              <span className="mag-cat">{article.category}</span>
              <span className="mag-read">{article.readTime}</span>
            </div>

            <h3>
              <Link href={`/blog/${article.slug || article.id}`}>
                {article.title}
              </Link>
            </h3>

            <p>{article.excerpt}</p>

            <div className="mag-foot">
              <div className="mag-auth">
                <Image
                  className="mag-auth-av"
                  src={article.author?.avatar}
                  alt={article.author?.name || "Author avatar"}
                  width={32}
                  height={32}
                />
                <div className="mag-auth-text">
                  <strong>{article.author?.name}</strong>
                  <span>{article.date}</span>
                </div>
              </div>

              <Link
                href={`/blog/${article.slug || article.id}`}
                className="mag-arrow"
                aria-label={`Read ${article.title}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
