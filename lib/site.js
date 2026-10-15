import { brandInfo } from "@/data/company";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visiontechnolabs.com";
const normalizedSiteUrl = rawSiteUrl.replace(/\/+$/, "");

function getTrimmedDescription(desc, maxLength = 160) {
  if (!desc || desc.length <= maxLength) return desc || "";
  if (desc[maxLength] === " " || desc[maxLength] === undefined) {
    return desc.slice(0, maxLength).trim();
  }
  const cut = desc.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
}

function deriveTwitterHandle(socials = []) {
  const xEntry = socials.find(
    (s) =>
      s.name?.toLowerCase().includes("twitter") ||
      s.name?.toLowerCase().includes("x") ||
      s.icon === "i-x" ||
      s.href?.includes("x.com") ||
      s.href?.includes("twitter.com")
  );
  if (!xEntry?.href) return "";
  try {
    const url = new URL(xEntry.href);
    const handle = url.pathname.replace(/^\/+|\/+$/g, "");
    return handle ? `@${handle}` : "";
  } catch {
    const parts = xEntry.href.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    return last ? `@${last.replace(/^@/, "")}` : "";
  }
}

const sameAs = (brandInfo.socials || [])
  .filter(
    (s) =>
      s.href &&
      !s.name?.toLowerCase().includes("whatsapp") &&
      s.icon !== "i-wa" &&
      !s.href.includes("wa.me")
  )
  .map((s) => s.href);

export const siteConfig = {
  name: "Vision Technolabs",
  url: normalizedSiteUrl,
  defaultTitle: "Vision Technolabs | Web, Mobile App & AI Development Company",
  description: getTrimmedDescription(brandInfo.description, 160),
  locale: "en_US",
  twitterHandle: deriveTwitterHandle(brandInfo.socials),
  sameAs,
  email: brandInfo.email,
  phone: brandInfo.phone,
  address: brandInfo.address,
  brand: brandInfo,
};

export function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  if (/^https?:\/\//i.test(path)) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return siteConfig.url;
  return `${siteConfig.url}${cleanPath}`;
}

export function canonicalFor(path = "/") {
  if (!path || path === "/") return siteConfig.url;
  let targetPath = path;
  if (/^https?:\/\//i.test(path)) {
    try {
      const u = new URL(path);
      targetPath = u.pathname;
    } catch {
      targetPath = path;
    }
  }
  const withoutQueryOrHash = targetPath.split("?")[0].split("#")[0];
  const normalized = withoutQueryOrHash.replace(/\/+$/, "").replace(/^\/*/, "/");
  if (!normalized || normalized === "/") return siteConfig.url;
  return `${siteConfig.url}${normalized}`;
}
