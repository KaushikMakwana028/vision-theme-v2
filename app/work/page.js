import WorkPage from "@/pages/workPage";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Case Studies & Engineering Portfolio",
  description:
    "Client case studies and engineering portfolio. Discover how we build high-concurrency fintech platforms, AI agents, mobile apps, and headless Shopify stores.",
  path: "/work",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/work" },
        ]}
      />
      <WorkPage />
    </>
  );
}
