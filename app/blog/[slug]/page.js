import { notFound } from "next/navigation";
import { blogsData, getBlogBySlug } from "@/data/blogs";
import BlogDetailPage from "@/pages/blogDetailPage";

export const instant = false;

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
    return {
      title: "Article Not Found - Vision Technolabs",
    };
  }

  return {
    title: `${blog.title} — Engineering Blog - Vision Technolabs`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailPage blog={blog} />;
}
