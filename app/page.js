import HomePage from "@/pages/homePage";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: {
    absolute: "Best IT Company in Ahmedabad, Naroda | Vision Technolabs",
  },
  description:
    "Vision Technolabs is a software development company in Naroda, Ahmedabad: website, mobile app, AI automation and cloud solutions for businesses across Gujarat, India and abroad.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <HomePage />
    </>
  );
}
