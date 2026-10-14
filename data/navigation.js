export const navigationData = {
  headerNav: [
    {
      id: "ai",
      title: "AI & Innovation",
      href: "/services/ai-automation",
      leadIcon: "i-ai",
      type: "dropdown",
      items: [
        { label: "AI & Automation", href: "/services/ai-automation" },
        { label: "Custom AI Agents", href: "/services/ai-automation" },
        { label: "Enterprise RAG Systems", href: "/services/ai-automation" },
        { label: "Case Studies", href: "/#work" }
      ],
      bottomAction: {
        label: "Explore AI Solutions",
        href: "/services/ai-automation"
      }
    },
    {
      id: "services",
      title: "Services",
      href: "/services",
      type: "mega",
      columns: [
        {
          title: "Web & Mobile Engineering",
          links: [
            { label: "Website Development", href: "/services/website-development" },
            { label: "Full-Stack Web Apps & SaaS", href: "/services/custom-web-apps" },
            { label: "Mobile App Development", href: "/services/mobile-app-development" },
            { label: "Flutter Cross-Platform Apps", href: "/services/flutter-app-development" }
          ]
        },
        {
          title: "AI, Cloud & Enterprise",
          links: [
            { label: "AI & Autonomous Agents", href: "/services/ai-automation" },
            { label: "Enterprise RAG & Search Engines", href: "/services/rag-knowledge-bases" },
            { label: "Cloud & DevOps Engineering", href: "/services/cloud-devops-engineering" },
            { label: "Custom Software & CRM", href: "/services/custom-software-crm" }
          ]
        },
        {
          title: "Ecommerce & Growth",
          links: [
            { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
            { label: "Shopify Plus & App Engineering", href: "/services/shopify-plus-development" },
            { label: "Meta & Google Ads", href: "/services/meta-google-ads" },
            { label: "Conversion Rate CRO", href: "/services/cro-conversion-optimization" }
          ]
        }
      ],
      bottomAction: {
        label: "Explore All 12 Services",
        href: "/services"
      }
    },
    {
      id: "industries",
      title: "Industries",
      type: "link",
      href: "/industries"
    },
    {
      id: "products",
      title: "Product",
      href: "/products",
      type: "mega",
      columns: [
        {
          title: "Shopify Apps & Plugins",
          links: [
            { label: "Store Locator Pro (Shopify)", href: "/products/mspl-store-locator" },
            { label: "Cookie Shield (GDPR & CCPA)", href: "/products/cookie-shield" },
            { label: "MMY Parts Finder (Auto)", href: "/products/make-model-year-search" },
            { label: "Explore Shopify Solutions →", href: "/products" }
          ]
        },
        {
          title: "AI & Autonomous SaaS",
          links: [
            { label: "Lumez AI — Visual & Copy", href: "/products/lumez-ai" },
            { label: "Reach O — Autonomous Outreach", href: "/products/reach-o" },
            { label: "Generative Commerce Studio", href: "/products/lumez-ai" },
            { label: "Explore All AI Platforms →", href: "/products" }
          ]
        },
        {
          title: "Deployment & Licensing",
          links: [
            { label: "Managed Cloud SaaS (AWS/GCP)", href: "/products#deployment-models" },
            { label: "White-Label Reseller Licensing", href: "/products#deployment-models" },
            { label: "100% Source Code Buyout", href: "/products#deployment-models" },
            { label: "Schedule Live Sandbox Demo →", href: "/#contact" }
          ]
        }
      ],
      bottomAction: {
        label: "Explore Complete Products & Apps Catalog",
        href: "/products"
      }
    },
    {
      id: "work",
      title: "Work",
      type: "link",
      href: "/work"
    },
    {
      id: "blogs",
      title: "Blog",
      type: "link",
      href: "/blog"
    },
    {
      id: "contact",
      title: "Contact",
      type: "link",
      href: "/contact"
    }
  ],
  footerLinks: {
    services: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Custom Software & CRM", href: "/services/custom-software-crm" },
      { label: "Meta & Google Ads", href: "/services/meta-google-ads" }
    ],
    company: [
      { label: "About Us", href: "/#about" },
      { label: "All Services", href: "/services" },
      { label: "All Industries", href: "/industries" },
      { label: "Products", href: "/products" },
      { label: "Case Studies", href: "/work" },
      { label: "Engineering Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Delivery Guarantees", href: "/#guarantees" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Security & Compliance", href: "#security" }
    ]
  }
};
