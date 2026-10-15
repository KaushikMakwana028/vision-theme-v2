import IndustriesPage from "@/pages/industriesPage";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Industry-Specific Software Solutions",
  description:
    "Industry software solutions engineered for fintech, healthcare, ecommerce, logistics, and SaaS. Scalable architectures tailored to strict domain standards.",
  path: "/industries",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <IndustriesPage />
    </>
  );
}
