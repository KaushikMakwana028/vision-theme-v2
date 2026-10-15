import ServicePage from "@/pages/servicePage";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Software & AI Development Services",
  description:
    "Software engineering and AI services for high-growth brands. We build custom web apps, mobile solutions, headless ecommerce, and autonomous agent systems.",
  path: "/services",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicePage />
    </>
  );
}
