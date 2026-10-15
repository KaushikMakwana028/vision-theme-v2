import BlogPage from "@/pages/blogPage";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Engineering Blog & Architecture Guides",
  description:
    "Engineering blog with technical deep dives on Next.js, production AI agents, scalable cloud architectures, and full-stack development best practices.",
  path: "/blog",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <BlogPage />
    </>
  );
}
