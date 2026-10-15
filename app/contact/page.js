import ContactPage from "@/pages/contactPage";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Contact Us & Technical Discovery",
  description:
    "Contact our software engineering team in Ahmedabad to discuss your next project. Request technical audits, NDAs, and project estimates within 24 hours.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactPage />
    </>
  );
}
