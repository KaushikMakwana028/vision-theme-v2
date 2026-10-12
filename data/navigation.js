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
          title: "Engineering",
          links: [
            { label: "Website Development", href: "/services/website-development" },
            { label: "Mobile App Development", href: "/services/mobile-app-development" },
            { label: "Custom Software & CRM", href: "/services/custom-software-crm" },
            { label: "All Engineering Services", href: "/services" }
          ]
        },
        {
          title: "AI & Automation",
          links: [
            { label: "AI & Autonomous Agents", href: "/services/ai-automation" },
            { label: "Multi-Agent Systems", href: "/services/ai-automation" },
            { label: "RAG Knowledge Bases", href: "/services/ai-automation" },
            { label: "Workflow Automation", href: "/services/ai-automation" }
          ]
        },
        {
          title: "Commerce & Growth",
          links: [
            { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
            { label: "Shopify Development", href: "/services/ecommerce-solutions" },
            { label: "Meta & Google Ads", href: "/services/meta-google-ads" },
            { label: "Conversion Rate CRO", href: "/services/meta-google-ads" }
          ]
        },
        {
          title: "Ways to Engage",
          links: [
            { label: "Dedicated Agile Team", href: "/#contact" },
            { label: "Fixed-Scope Delivery", href: "/#contact" },
            { label: "Staff Augmentation", href: "/#contact" },
            { label: "Rapid 5-Day POC", href: "/#contact" }
          ]
        }
      ],
      bottomAction: {
        label: "Explore All Services",
        href: "/services"
      }
    },
    {
      id: "industries",
      title: "Industries",
      href: "/industries",
      type: "dropdown",
      items: [
        { label: "Fintech & Banking", href: "/industries/fintech-banking" },
        { label: "Healthcare & MedTech", href: "/industries/healthcare-medtech" },
        { label: "Ecommerce & Retail", href: "/industries/ecommerce-retail" },
        { label: "Real Estate & PropTech", href: "/industries/real-estate-proptech" },
        { label: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
        { label: "Manufacturing & Industrial IoT", href: "/industries/manufacturing-iot" },
        { label: "SaaS & Cloud Platforms", href: "/industries/saas-cloud-platforms" },
        { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
        { label: "EdTech & E-Learning", href: "/industries/edtech-elearning" }
      ],
      bottomAction: {
        label: "Explore All Industries",
        href: "/industries"
      }
    },
    {
      id: "products",
      title: "Products",
      href: "/products",
      type: "mega",
      columns: [
        {
          title: "AI & SaaS Platforms",
          links: [
            { label: "Lumez AI — Visual & Copy", href: "/products/lumez-ai" },
            { label: "Reach O — Autonomous Outreach", href: "/products/reach-o" },
            { label: "Generative Commerce AI", href: "/products/lumez-ai" },
            { label: "All AI Platforms", href: "/products" }
          ]
        },
        {
          title: "Shopify & Commerce",
          links: [
            { label: "Store Locator Pro (Shopify)", href: "/products/mspl-store-locator" },
            { label: "Cookie Shield (GDPR / CCPA)", href: "/products/cookie-shield" },
            { label: "MMY Parts Finder (Auto)", href: "/products/make-model-year-search" },
            { label: "All Commerce Apps", href: "/products" }
          ]
        },
        {
          title: "Turnkey Solutions",
          links: [
            { label: "LodgeFlow — Hotel & Resort PMS", href: "/products/hotel-management-system" },
            { label: "HelioTrack — Solar EPC Platform", href: "/products/solar-epc-platform" },
            { label: "FleetRide — Taxi & Dispatch Suite", href: "/products/on-demand-taxi-suite" },
            { label: "CarePulse — Telehealth & Clinic", href: "/products/telemedicine-suite" }
          ]
        },
        {
          title: "Ways to Deploy",
          links: [
            { label: "Managed Cloud SaaS (AWS/GCP)", href: "/products#deployment-models" },
            { label: "White-Label Reseller Model", href: "/products#deployment-models" },
            { label: "100% Source Code Buyout", href: "/products#deployment-models" },
            { label: "Rapid 2–5 Day Sandbox Demo", href: "/#contact" }
          ]
        }
      ],
      bottomAction: {
        label: "Explore All Products",
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
      title: "Blogs",
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
      { label: "About Us", href: "/#services" },
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
