import { redirect } from "next/navigation";
import { blogsData } from "@/data/blogs";

export const instant = false;

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug || blog.id,
  }));
}

export default async function BlogsSlugRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
