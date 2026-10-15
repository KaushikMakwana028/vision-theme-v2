import { ImageResponse } from "next/og";
import { getBlogBySlug } from "@/data/blogs";

export const alt = "Vision Technolabs Engineering Article";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = (await params) || {};
  const blog = slug ? getBlogBySlug(slug) : null;

  const title = blog?.title || "Engineering Blog & Technical Insights";
  const category = blog?.category || "Engineering Blog";
  const readTime = blog?.readTime ? `${blog.readTime} read` : "Technical Deep Dive";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0b1020",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(79, 70, 229, 0.28) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(6, 182, 212, 0.22) 0%, transparent 45%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header / Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(79, 70, 229, 0.4)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: "#06b6d4",
                marginRight: "12px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#e0e7ff",
              }}
            >
              {`VISION TECHNOLABS · ${category.toUpperCase()}`}
            </span>
          </div>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 55 ? "46px" : "56px",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              display: "flex",
              maxHeight: "240px",
              overflow: "hidden",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: 1.35,
              color: "#94a3b8",
            }}
          >
            {`${readTime} · Architecture & Production Engineering`}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#4f46e5",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#06b6d4",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#fb923c",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#64748b",
              letterSpacing: "0.02em",
            }}
          >
            visiontechnolabs.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
