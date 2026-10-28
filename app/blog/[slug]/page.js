import { notFound } from "next/navigation";
import { blogsData, getBlogBySlug } from "@/data/blogs";
import BlogDetailPage from "@/pages/blogDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const instant = false;
export const ensureStatic = "navigation";

// Generate static params for all blogs at build time
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug || blog.id,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const rawTitle = blog.title;
  const title = blog.seoTitle || truncate(rawTitle, 40);

  return buildMetadata({
    title,
    description: blog.shortDescription || blog.description || blog.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: blog.isoDate,
    authors: blog.author?.name ? [blog.author.name] : undefined,
    tags: blog.tags,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const sameCategory = blogsData.filter(
    (item) => item.category === blog.category && item.slug !== blog.slug && item.id !== blog.id
  );
  const otherBlogs = (
    sameCategory.length >= 2
      ? sameCategory
      : [...sameCategory, ...blogsData.filter((item) => item.slug !== blog.slug && item.id !== blog.id && !sameCategory.includes(item))]
  ).slice(0, 2);

  const blogItems = otherBlogs.map((item) => ({
    title: item.title,
    description: item.excerpt || item.shortDescription || item.description,
    href: `/blog/${item.slug || item.id}`,
    tag: item.category || "Engineering Insights",
    meta: item.readTime || item.date,
    actionLabel: "Read Article",
    ariaLabel: `Read article: ${item.title}`,
  }));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: blog.title, path: `/blog/${slug}` },
  ];

  return (
    <>
      <JsonLd data={articleSchema(blog)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <BlogDetailPage blog={blog} />
      <RelatedLinks
        title="Related Articles & Engineering Guides"
        subtitle={`Continue exploring architecture patterns and deep dives in ${blog.category || "software engineering"}.`}
        eyebrow="Further Reading"
        items={blogItems}
      />
    </>
  );
}
