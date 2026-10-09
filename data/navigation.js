export const navigationData = {
  headerNav: [
    {
      id: "ai",
      title: "AI & Innovation",
      leadIcon: "i-ai",
      type: "dropdown",
      items: [
        { label: "AI Lab", href: "#ai" },
        { label: "Generative AI", href: "#ai" },
        { label: "AI Consulting", href: "#ai" },
        { label: "AI Case Studies", href: "#work" }
      ]
    },
    {
      id: "services",
      title: "Services",
      type: "mega",
      columns: [
        {
          title: "Development",
          links: [
            { label: "Website Development", href: "#services" },
            { label: "Mobile App Development", href: "#services" },
            { label: "Custom Software Development", href: "#services" },
            { label: "API Development", href: "#services" }
          ]
        },
        {
          title: "AI & Automation",
          links: [
            { label: "AI Agent Development", href: "#ai" },
            { label: "Generative AI Solutions", href: "#ai" },
            { label: "Workflow Automation", href: "#ai" },
            { label: "AI Chatbots", href: "#ai" }
          ]
        },
        {
          title: "Ecommerce & Marketing",
          links: [
            { label: "Ecommerce Solutions", href: "#services" },
            { label: "Meta Ads", href: "#services" },
            { label: "Google Ads", href: "#services" },
            { label: "SEO & Content Marketing", href: "#services" }
          ]
        },
        {
          title: "Get Started",
          links: [
            { label: "Hire Developers", href: "#contact" },
            { label: "Dedicated Team", href: "#contact" },
            { label: "Fixed-Price Project", href: "#contact" }
          ]
        }
      ],
      megaStrip: {
        text: "Not sure what you need? Talk to a solution architect.",
        actionText: "Book a free call →",
        href: "#contact"
      }
    },
    {
      id: "industries",
      title: "Industries",
      type: "dropdown",
      items: [
        { label: "Healthcare", href: "#industries" },
        { label: "Real Estate", href: "#industries" },
        { label: "Fintech", href: "#industries" },
        { label: "Ecommerce", href: "#industries" },
        { label: "Manufacturing", href: "#industries" },
        { label: "Retail", href: "#industries" },
        { label: "Travel", href: "#industries" },
        { label: "SaaS", href: "#industries" }
      ]
    },
    {
      id: "products",
      title: "Products",
      type: "link",
      href: "#"
    },
    {
      id: "work",
      title: "Work",
      type: "dropdown",
      items: [
        { label: "Case Studies", href: "#work" },
        { label: "Portfolio", href: "#work" },
        { label: "Video Reviews", href: "#videos" },
        { label: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      id: "blogs",
      title: "Blogs",
      type: "link",
      href: "#blog"
    },
    {
      id: "company",
      title: "Company",
      type: "dropdown",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Our Guarantees", href: "#guarantees" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    }
  ],
  footerLinks: {
    services: [
      { label: "Website Development", href: "#services" },
      { label: "Ecommerce Solutions", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "AI & Automation", href: "#ai" },
      { label: "Meta & Google Ads", href: "#services" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#work" },
      { label: "Video Reviews", href: "#videos" },
      { label: "Blogs", href: "#blog" },
      { label: "Contact", href: "#contact" }
    ]
  }
};
