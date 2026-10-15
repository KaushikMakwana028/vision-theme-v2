import { siteConfig, absoluteUrl, canonicalFor } from "@/lib/site";

export function truncate(text, max = 160) {
  if (!text || typeof text !== "string") return "";
  const cleaned = text.trim();
  if (cleaned.length <= max) return cleaned;
  if (cleaned[max] === " " || cleaned[max] === undefined) {
    return cleaned.slice(0, max).trim();
  }
  const cut = cleaned.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  noindex = false,
} = {}) {
  const resolvedDesc = truncate(description || siteConfig.description, 160);
  const resolvedTitleString =
    typeof title === "string" ? title : title?.absolute || title?.default || siteConfig.defaultTitle;
  const canonicalUrl = canonicalFor(path);
  const hasColocatedOgImage =
    path === "/" ||
    path.startsWith("/blog/") ||
    path.startsWith("/work/");

  const ogImageUrl = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : hasColocatedOgImage
    ? null
    : absoluteUrl("/opengraph-image");

  const openGraph = {
    title: resolvedTitleString,
    description: resolvedDesc,
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    ...(ogImageUrl ? { images: [{ url: ogImageUrl }] } : {}),
  };

  if (type === "article") {
    if (publishedTime) openGraph.publishedTime = publishedTime;
    if (modifiedTime) openGraph.modifiedTime = modifiedTime;
    if (authors) openGraph.authors = Array.isArray(authors) ? authors : [authors];
    if (tags) openGraph.tags = Array.isArray(tags) ? tags : [tags];
  }

  const twitter = {
    card: "summary_large_image",
    title: resolvedTitleString,
    description: resolvedDesc,
    ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  };

  const metadata = {
    title,
    description: resolvedDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph,
    twitter,
  };

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}
