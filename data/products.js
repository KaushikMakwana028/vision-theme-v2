export const productCategories = [
  "All",
  "AI & SaaS Platforms",
  "Shopify & Commerce Apps"
];

export const productsData = [
  {
    id: "lumez-ai",
    slug: "lumez-ai",
    number: "01",
    title: "Lumez AI — Autonomous Visual & Copy Generator",
    shortTitle: "Lumez AI",
    badge: "AI SaaS Platform",
    tag: "Generative Commerce AI",
    category: "AI & SaaS Platforms",
    rating: "4.9★",
    reviewsCount: "140+ Reviews",
    icon: "i-ai",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    tagline: "Generate studio-grade product photoshoots and high-converting marketing copy in seconds.",
    shortDescription: "An AI-powered creative engine that turns raw smartphone product photos into studio-grade commercial scenes and generates high-converting SEO copy.",
    description: "Lumez AI revolutionizes digital catalog production for brands and agencies. Upload raw product shots, choose background environments or describe custom scenes in natural language, and generate ultra-high-resolution marketing assets instantly. Features built-in AI copy generation tuned for ecommerce conversions across Google, Meta, and Amazon.",
    heroSubtitle: "Autonomous product photography studio, visual enhancement engine, and multi-channel SEO copy generator engineered for ecommerce brands, D2C merchants, and creative agencies.",
    pricing: "Starts at $49/mo · White-Label Available",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "10x", label: "Faster Catalog Creation" },
      { value: "85%", label: "Photography Cost Reduction" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "2.4M+", label: "Images Generated" }
    ],
    features: [
      {
        title: "AI Studio Relighting & Background Swap",
        description: "Intelligent subject segmentation that isolates products with sub-pixel precision and generates realistic lighting reflections, contact shadows, and photorealistic 3D environments.",
        points: ["Sub-pixel edge matting", "Automated shadow and reflection physics", "1,000+ pre-built lifestyle studio presets"]
      },
      {
        title: "High-Resolution 4K Upscaling",
        description: "Deep learning super-resolution models that upscale product images up to 4x while restoring fine textures, sharp edges, and label typography without blur.",
        points: ["4K print-ready export resolution", "Lossless packaging label preservation", "Automated noise and artifact reduction"]
      },
      {
        title: "Multi-Channel Copy & Caption Generator",
        description: "Fine-tuned LLM agents generate persuasive product descriptions, feature bullets, Instagram captions, and Amazon A+ copy tailored to your brand voice.",
        points: ["Brand tone fine-tuning", "SEO keyword density balancing", "Instant multi-lingual translation in 30+ languages"]
      },
      {
        title: "Shopify & ERP One-Click Sync",
        description: "Direct bidirectional sync with Shopify, WooCommerce, and BigCommerce to publish generated visuals and copy directly to live product listings.",
        points: ["Batch catalog processing", "Automatic alt-text and SEO slug creation", "Variant-level image assignment"]
      }
    ],
    deploymentOptions: [
      {
        title: "Managed Cloud SaaS",
        description: "Hosted on high-availability GPU cloud infrastructure with automatic scaling, API access, and monthly subscription tiers.",
        badge: "Most Popular"
      },
      {
        title: "White-Label Reseller Edition",
        description: "Deploy under your own agency brand, custom domain, and customized pricing tiers to offer AI creative services directly to your clients.",
        badge: "Agency Favorite"
      },
      {
        title: "Dedicated Private Cloud / Source License",
        description: "Full containerized deployment within your AWS/GCP VPC with dedicated GPU clusters and full source code IP buyout.",
        badge: "Enterprise"
      }
    ],
    techStack: ["Next.js", "Python FastAPI", "PyTorch", "Stable Diffusion SDXL", "PostgreSQL", "Redis", "AWS EC2 GPU", "Docker"],
    workflow: [
      { step: "01", title: "Asset Ingestion & Masking", desc: "Upload batch product shots; automated neural segmentation isolates subjects and extracts product contours." },
      { step: "02", title: "Scene Prompting & Composition", desc: "Select curated templates or type natural-language scene prompts to place products into custom lighting environments." },
      { step: "03", title: "4K Neural Enhancement", desc: "Super-resolution models upscale textures, adjust perspective matching, and render ray-traced ambient reflections." },
      { step: "04", title: "Direct Catalog Export", desc: "Push final 4K imagery and generated SEO descriptions directly to Shopify or download print-ready assets." }
    ],
    advantages: [
      { title: "No Costly Photoshoots Required", desc: "Eliminate expensive studio rentals, physical staging props, and weeks of photographer scheduling." },
      { title: "Sub-5 Second Generation Times", desc: "Optimized TensorRT GPU inferencing pipelines deliver photorealistic images in under five seconds." },
      { title: "100% Brand Consistency", desc: "Save custom brand color palettes, lighting presets, and model aesthetics to maintain unified visuals across all SKUs." },
      { title: "Commercial Copyright Protection", desc: "All outputs are fully cleared for global commercial use with zero recurring artist royalties." }
    ],
    faqs: [
      { question: "How does Lumez AI handle reflective or transparent products?", answer: "Our models utilize specialized specular reflection masks that preserve transparent glass, shiny metals, and liquid bottles while seamlessly blending environmental lighting reflections." },
      { question: "Can we integrate Lumez AI into our existing ecommerce platform via API?", answer: "Yes. Lumez AI provides a comprehensive REST and Webhook API enabling automated image ingestion, batch processing, and live catalog publishing." },
      { question: "Is white-labeling supported for digital agencies?", answer: "Yes! Our agency license allows you to connect your custom domain, custom logo, and stripe billing to monetize Lumez AI under your brand." }
    ]
  },
  {
    id: "reach-o",
    slug: "reach-o",
    number: "02",
    title: "Reach O — Autonomous Omnichannel Outreach Agent",
    shortTitle: "Reach O",
    badge: "AI Marketing SaaS",
    tag: "Autonomous Lead Engagement",
    category: "AI & SaaS Platforms",
    rating: "4.8★",
    reviewsCount: "95+ Reviews",
    icon: "i-chat",
    gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
    tagline: "Autonomous multi-agent outreach across Email, WhatsApp, and LinkedIn that books qualified meetings.",
    shortDescription: "An AI-powered B2B prospecting and nurture engine that researches leads, writes personalized multi-touch sequences, and books calendar meetings autonomously.",
    description: "Reach O replaces manual sales outreach with intelligent autonomous agents. It enriches target accounts from LinkedIn, analyzes prospect tech stacks, writes hyper-relevant 1-to-1 conversation openers, and handles prospect objections over email and WhatsApp until a meeting is booked.",
    heroSubtitle: "Autonomous B2B prospecting engine, dynamic multi-channel sequencing platform, and calendar booking agent engineered for sales teams and growth agencies.",
    pricing: "Starts at $79/mo · White-Label Available",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "3.8x", label: "Reply Rate Increase" },
      { value: "40 hrs", label: "SDR Hours Saved / Wk" },
      { value: "99.2%", label: "Inbox Deliverability" },
      { value: "1.8M+", label: "Prospects Engaged" }
    ],
    features: [
      {
        title: "Autonomous Deep Lead Research",
        description: "Scrapes company news, recent funding rounds, job hiring boards, and executive podcast appearances to ground outreach in real relevance.",
        points: ["Live company hiring triggers", "Executive bio & interview ingestion", "Automated email verification & waterfall enrichment"]
      },
      {
        title: "Multi-Channel Sequencing (Email, WhatsApp, LinkedIn)",
        description: "Executes coordinated outreach across email inboxes, automated LinkedIn profile views & connection requests, and WhatsApp voice note follow-ups.",
        points: ["Smart inbox rotation & automated warm-up", "Native LinkedIn API safe automation", "WhatsApp Business Cloud API integration"]
      },
      {
        title: "Autonomous Objection Handling & Booking",
        description: "When prospects reply with pricing questions or timing objections, Reach O analyzes context and replies intelligently with meeting booking links.",
        points: ["Zero-hallucination RAG product answers", "Integrated Google & Outlook calendar booking", "Automated CRM deal pipeline status updates"]
      },
      {
        title: "Deliverability Shield & Warm-Up",
        description: "Automated DKIM, SPF, DMARC validation, custom tracking domains, and peer-to-peer AI inbox warm-up to ensure 99%+ primary inbox placement.",
        points: ["Automated DNS record health audits", "Spam word linting before dispatch", "Dynamic ESP IP pool rotation"]
      }
    ],
    deploymentOptions: [
      {
        title: "Cloud SaaS Subscription",
        description: "Connect your email domains and start launching AI prospecting campaigns in under 15 minutes.",
        badge: "Instant Setup"
      },
      {
        title: "Agency Multi-Tenant Edition",
        description: "Manage dozens of client workspaces from a unified agency console with segregated inboxes and consolidated billing.",
        badge: "For Agencies"
      },
      {
        title: "Full Source Code License",
        description: "Acquire the complete Next.js frontend, Python orchestrator, and Kafka event streaming backend for proprietary enterprise deployment.",
        badge: "IP Buyout"
      }
    ],
    techStack: ["Next.js", "Python FastAPI", "LangChain", "OpenAI / Claude API", "PostgreSQL", "Redis", "Kafka", "Docker"],
    workflow: [
      { step: "01", title: "Target Audience Definition", desc: "Upload a CSV list or connect Apollo/LinkedIn Sales Navigator to define your Ideal Customer Profile (ICP)." },
      { step: "02", title: "Agentic Account Research", desc: "Agents enrich leads with live company signals, identify pain points, and write custom tailored message drafts." },
      { step: "03", title: "Multi-Touch Dispatch", desc: "Coordinated sequences dispatch across rotated warm inboxes, LinkedIn, and WhatsApp based on engagement rules." },
      { step: "04", title: "Meeting Scheduled on Calendar", desc: "Replies are classified instantly; meetings are booked directly onto your sales reps' Calendly or Google Calendar." }
    ],
    advantages: [
      { title: "No Robotic Mass-Blast Spam", desc: "Every single email reads like a senior SDR spent 20 minutes researching the prospect individually." },
      { title: "Never Hits the Spam Folder", desc: "Peer-to-peer automated warmup and real-time deliverability safeguards keep domains healthy." },
      { title: "Handles Complex Objections", desc: "Trained on enterprise sales negotiation frameworks to steer 'not interested now' into future follow-ups." },
      { title: "Seamless CRM Sync", desc: "Two-way integration with HubSpot, Salesforce, Pipedrive, and Close with automatic contact creation." }
    ],
    faqs: [
      { question: "Will using Reach O risk our primary domain reputation?", answer: "No. Reach O enforces domain isolation: we set up secondary mirror domains (e.g. getcompany.com) with dedicated SPF/DKIM/DMARC records and gradual warmup ramps." },
      { question: "How does the AI ensure it doesn't give incorrect product information in replies?", answer: "Reach O uses strict Retrieval-Augmented Generation (RAG) grounded exclusively in your verified knowledge base. If unsure, it automatically flags the thread for human review." },
      { question: "Can we whitelabel Reach O for our lead generation agency?", answer: "Yes! The multi-tenant agency edition includes custom domain white-labeling, client sub-accounts, and Stripe billing integration." }
    ]
  },
  {
    id: "mspl-store-locator",
    slug: "mspl-store-locator",
    number: "03",
    title: "Store Locator & Dealer Map — Shopify App",
    shortTitle: "Store Locator Pro",
    badge: "Shopify Certified App",
    tag: "High-Performance Mapping",
    category: "Shopify & Commerce Apps",
    rating: "4.9★",
    reviewsCount: "350+ Reviews",
    icon: "i-pin",
    gradient: "linear-gradient(135deg,#059669,#10b981)",
    tagline: "Drive foot traffic from your Shopify store into physical retail stores and authorized dealers.",
    shortDescription: "A Google Maps & Mapbox powered store locator app with instant geo-detection, real-time dealer inventory, driving directions, and custom pin styling.",
    description: "Store Locator Pro bridges the gap between online commerce and brick-and-mortar retail. Merchants easily import thousands of store locations via CSV or Google Sheets sync, customize branded map themes, and offer shoppers instant GPS geo-location with driving directions and opening hours.",
    heroSubtitle: "Interactive Google Maps & Mapbox dealer locator, instant geolocation finder, and foot-traffic analytics engine engineered for Shopify & Shopify Plus merchants.",
    pricing: "Free Plan Available · Premium from $19/mo",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "450k+", label: "Locations Mapped" },
      { value: "Sub-100ms", label: "Pin Cluster Rendering" },
      { value: "4.9★", label: "Shopify App Store" },
      { value: "1,200+", label: "Active Stores" }
    ],
    features: [
      {
        title: "Instant GPS Geolocation & Radius Search",
        description: "Shoppers can find nearby stores with one click using browser GPS geolocation or by typing zip codes, cities, or street names.",
        points: ["Sub-second radius calculation (5km, 25km, 100km)", "Automatic country/city pre-selection", "Turn-by-turn Google Maps & Apple Maps routing"]
      },
      {
        title: "Bulk CSV & Live Google Sheets Sync",
        description: "Merchants can import 10,000+ store locations in seconds via CSV, or maintain locations live inside a synced Google Sheet without opening Shopify.",
        points: ["Live two-way Google Sheets sync", "Automated address geocoding into lat/long", "Custom metadata fields (e.g. Wheelchair access, Curbside)"]
      },
      {
        title: "Custom Brand Styling & Vector Pins",
        description: "Full visual customizer supporting dark mode maps, custom SVG brand pins, layout presets (sidebar, modal, full-width), and font matches.",
        points: ["Custom SVG marker upload", "Google Maps and Mapbox Vector GL support", "Snazzy Maps custom color palette importing"]
      },
      {
        title: "Foot Traffic Analytics & Search Heatmaps",
        description: "Discover where customers are searching for your products physically, uncovering underserved cities and retail expansion opportunities.",
        points: ["Search zip code frequency analytics", "Zero-results search query logging", "Exportable CSV foot traffic reports"]
      }
    ],
    deploymentOptions: [
      {
        title: "Shopify App Store Install",
        description: "Install directly from the Shopify App Store with one-click theme app extension embedding (compatible with Online Store 2.0).",
        badge: "1-Click Install"
      },
      {
        title: "Custom Standalone Web Embed",
        description: "Embed on custom WordPress, Webflow, Magento, or React headless storefronts using our lightweight JavaScript SDK.",
        badge: "Headless Ready"
      },
      {
        title: "Enterprise White-Label License",
        description: "Deploy as your own private dealer portal with custom ERP inventory sync and single sign-on for corporate franchisees.",
        badge: "Enterprise"
      }
    ],
    techStack: ["Shopify Polaris", "Next.js", "Mapbox GL", "PostgreSQL", "Google Maps Platform", "Node.js", "Docker"],
    workflow: [
      { step: "01", title: "Install Theme App Extension", desc: "Add the app block to your Shopify theme editor with zero code editing required." },
      { step: "02", title: "Import Store Locations", desc: "Upload your store addresses via CSV or connect a live Google Sheet for automated updates." },
      { step: "03", title: "Customize Visual Brand Style", desc: "Pick custom map color schemes, upload branded SVG map pins, and configure store card details." },
      { step: "04", title: "Track In-Store Conversions", desc: "Review real-time dashboard analytics tracking directions clicked, calls placed, and top search areas." }
    ],
    advantages: [
      { title: "Zero Shopify Theme Speed Impact", desc: "Loads asynchronously via modern Theme App Extensions with zero render-blocking JavaScript." },
      { title: "Handles 10,000+ Store Pins", desc: "High-performance vector tile clustering ensures silky smooth 60fps pan and zoom on all mobile devices." },
      { title: "Mobile-First Touch UX", desc: "Tested across iOS Safari and Android Chrome for effortless one-thumb search and instant call links." },
      { title: "Multi-Language & Global Ready", desc: "Full localization support for French, German, Spanish, Japanese, Arabic (RTL), and 15+ more." }
    ],
    faqs: [
      { question: "Does this app work with Shopify Online Store 2.0 themes?", answer: "Yes, 100%. Store Locator Pro is built as a native Shopify Theme App Extension, meaning zero dirty code injection into your theme files." },
      { question: "Can we link each store pin to specific product stock levels?", answer: "Yes! Our Plus tier supports displaying local product inventory availability badges directly on individual store cards." },
      { question: "What map providers are supported?", answer: "You can choose between Google Maps, Mapbox, or OpenStreetMap depending on your preferred styling and API budget." }
    ]
  },
  {
    id: "cookie-shield",
    slug: "cookie-shield",
    number: "04",
    title: "Cookie Shield — GDPR & CCPA Compliance Banner",
    shortTitle: "Cookie Shield",
    badge: "Privacy & Legal SaaS",
    tag: "GDPR, CCPA & ePrivacy",
    category: "Shopify & Commerce Apps",
    rating: "4.9★",
    reviewsCount: "210+ Reviews",
    icon: "i-lock",
    gradient: "linear-gradient(135deg,#0284c7,#0ea5e9)",
    tagline: "Automated cookie consent banner, script blocking & privacy policy generator.",
    shortDescription: "Automated GDPR, CCPA, and ePrivacy compliance banner with prior consent script blocking, customizable preferences center, and audit logging.",
    description: "Cookie Shield keeps ecommerce storefronts fully compliant with international privacy regulations including GDPR (EU), CCPA (California), LGPD (Brazil), and PIPEDA (Canada). Features automated cookie scanning, intelligent pre-consent script blocking (Google Analytics, Meta Pixel, TikTok Pixel), and tamper-evident consent logging.",
    heroSubtitle: "Zero-latency cookie consent management platform, automated tracking script blocker, and privacy audit logging engine engineered for global Shopify brands.",
    pricing: "Free Tier · Pro from $9/mo",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "100%", label: "GDPR & CCPA Compliant" },
      { value: "0ms", label: "Core Web Vitals Impact" },
      { value: "94%", label: "Average Consent Rate" },
      { value: "50M+", label: "Consent Events Logged" }
    ],
    features: [
      {
        title: "Intelligent Pre-Consent Script Blocker",
        description: "Automatically prevents marketing and analytics tracking pixels from firing until the visitor grants explicit opt-in consent as mandated by GDPR.",
        points: ["Zero-configuration Meta Pixel & GA4 blocking", "Custom script tag categorization", "Dynamic unblocking upon consent acceptance"]
      },
      {
        title: "Automated Storefront Cookie Scanner",
        description: "Crawls your store weekly to identify newly installed apps and third-party tracking cookies, categorizing them into Necessary, Analytics, and Marketing.",
        points: ["Weekly automated background crawl", "Comprehensive database of 100,000+ known cookies", "One-click cookie policy description generator"]
      },
      {
        title: "Interactive Visitor Preference Center",
        description: "Gives visitors granular control to toggle individual cookie categories on or off at any time, respecting legal privacy mandates.",
        points: ["Granular category consent toggles", "Persistent privacy badge widget", "Mobile-optimized bottom sheet layout"]
      },
      {
        title: "Tamper-Evident Consent Audit Trail",
        description: "Cryptographically logs every consent acceptance event with timestamp, anonymized IP, and policy version for legal audit readiness.",
        points: ["Immutable consent log export", "DSAR (Data Subject Access Request) portal", "Certified compliance documentation for legal inquiries"]
      }
    ],
    deploymentOptions: [
      {
        title: "Shopify 1-Click App",
        description: "Native app embed compatible with all Shopify themes, Google Consent Mode v2, and Shopify Customer Privacy API.",
        badge: "Recommended"
      },
      {
        title: "Universal JavaScript Snippet",
        description: "Deploy on any custom web app, WordPress, WooCommerce, or headless storefront with a single async script tag.",
        badge: "Universal"
      }
    ],
    techStack: ["Next.js", "TypeScript", "Google Consent Mode v2", "PostgreSQL", "Redis", "Cloudflare Workers"],
    workflow: [
      { step: "01", title: "Automated Store Scan", desc: "Cookie Shield crawls your storefront to detect all active tracking pixels, cookies, and local storage keys." },
      { step: "02", title: "Banner Customization", desc: "Select from modern floating bar, corner box, or modal layouts, matching your store colors and fonts." },
      { step: "03", title: "Google Consent Mode v2", desc: "Automatically synchronizes consent state with Google Analytics 4, Google Ads, and Meta Conversions API." },
      { step: "04", title: "Continuous Legal Protection", desc: "Every consent change is recorded in an encrypted audit trail for complete regulatory defense." }
    ],
    advantages: [
      { title: "Google Consent Mode v2 Native", desc: "Prevents loss of conversion tracking in Google Ads through compliant behavioral modeling." },
      { title: "Geo-Targeted Banner Display", desc: "Only show strict opt-in banners to visitors in the EU/UK while displaying notice banners in the US." },
      { title: "Ultra-Lightweight <12KB Payload", desc: "Zero performance penalties, zero Cumulative Layout Shift (CLS), and sub-20ms execution." },
      { title: "Multi-Language Translations", desc: "Pre-translated into 28 official EU languages with automatic visitor browser language detection." }
    ],
    faqs: [
      { question: "Does Cookie Shield support Google Consent Mode v2?", answer: "Yes, fully! Cookie Shield is certified to pass Google Consent Mode v2 signals (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`) to prevent Google Ads conversion loss." },
      { question: "Will this banner slow down my store's Google PageSpeed score?", answer: "Not at all. Cookie Shield's client script is under 12KB gzip and runs asynchronously from the edge, causing zero Core Web Vitals degradation." },
      { question: "Can we only show the banner in countries that legally require it?", answer: "Yes. Our geo-location engine automatically applies strict opt-in rules in the EU/UK, opt-out banners in California, and hides the banner elsewhere if desired." }
    ]
  },
  {
    id: "mmy-search",
    slug: "make-model-year-search",
    number: "05",
    title: "Make Model Year (MMY) Parts Finder — Shopify App",
    shortTitle: "MMY Parts Finder",
    badge: "Automotive Commerce SaaS",
    tag: "Fitment & Part Matching",
    category: "Shopify & Commerce Apps",
    rating: "4.8★",
    reviewsCount: "180+ Reviews",
    icon: "i-truck",
    gradient: "linear-gradient(135deg,#d97706,#f59e0b)",
    tagline: "High-performance Year/Make/Model automotive parts filter for Shopify stores.",
    shortDescription: "A specialized automotive fitment filter that lets customers find exact-matching auto parts and accessories by Year, Make, Model, and Trim.",
    description: "Built for automotive aftermarket retailers, motorcycle part distributors, and wheel/tire specialists. MMY Parts Finder provides dropdown search selectors, fitment compatibility badges on product detail pages ('✓ Fits your 2024 Ford F-150'), and ACES/PIES automotive industry data feed support.",
    heroSubtitle: "Year Make Model automotive parts fitment finder, compatibility checker, and ACES/PIES catalog database engine engineered for automotive Shopify retailers.",
    pricing: "Starts from $39/mo · Custom Enterprise Tiers",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "62%", label: "Return Rate Reduction" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "Sub-50ms", label: "Fitment Query Latency" },
      { value: "10M+", label: "Fitment Pairs Indexed" }
    ],
    features: [
      {
        title: "Dynamic YMM Dropdown Search Selector",
        description: "Cascading dropdown filters (Year -> Make -> Model -> Submodel / Engine) that update options dynamically without page reloads.",
        points: ["Cascading non-blocking AJAX dropdowns", "Universal part vs vehicle-specific part handling", "Persistent 'My Garage' vehicle switcher for returning buyers"]
      },
      {
        title: "Exact Fitment Verification Badges",
        description: "Displays dynamic green '✓ Confirmed Fit' or red '✗ Does Not Fit' warning banners directly on product pages based on the customer's selected vehicle.",
        points: ["Reduces costly wrong-part return shipping", "Variant-level vehicle fitment specificity", "One-click vehicle change directly on the product page"]
      },
      {
        title: "ACES & PIES Standard Data Ingestion",
        description: "Seamlessly import industry standard Auto Care Association ACES XML and PIES product fitment catalogs containing millions of vehicle combinations.",
        points: ["Bulk ACES XML file parser", "Custom CSV mapping wizard for non-standard catalogs", "Support for motorcycle, ATV, marine, and commercial truck databases"]
      },
      {
        title: "Saved Garage Profile for Shoppers",
        description: "Customers can save multiple vehicles to 'My Garage' in their account, effortlessly toggling between their truck, sedan, or motorcycle while shopping.",
        points: ["Local storage & customer account garage syncing", "Filtered collections displaying only garage-matched parts", "Cart fitment warning validation before checkout"]
      }
    ],
    deploymentOptions: [
      {
        title: "Shopify Theme App Extension",
        description: "Embed dropdown selectors anywhere in your header, hero banner, or collection page with zero theme code edits.",
        badge: "Shopify Plus Ready"
      },
      {
        title: "Custom Headless Automotive API",
        description: "High-speed GraphQL and REST endpoints designed for custom headless automotive stores handling 1,000,000+ SKUs.",
        badge: "Enterprise API"
      }
    ],
    techStack: ["Shopify Polaris", "Next.js", "Elasticsearch", "PostgreSQL", "Go / Golang", "Redis", "Docker"],
    workflow: [
      { step: "01", title: "Catalog Fitment Import", desc: "Upload vehicle fitment tables via CSV or connect ACES XML data feeds to index vehicle combinations." },
      { step: "02", title: "Theme Widget Placement", desc: "Drag and drop the MMY search selector into your header or home banner inside the Shopify theme customizer." },
      { step: "03", title: "Fitment Badge Activation", desc: "Enable the PDP fitment status widget that confirms exact compatibility for shoppers before they add to cart." },
      { step: "04", title: "Monitor Return Reductions", desc: "Track conversions, popular vehicle searches, and fitment queries in your real-time analytics dashboard." }
    ],
    advantages: [
      { title: "Drastically Cuts Return Shipping Costs", desc: "Prevents customers from ordering incorrect parts by validating vehicle compatibility before checkout." },
      { title: "Sub-50ms Query Performance", desc: "Engineered with Elasticsearch and Redis caching to query through millions of vehicle records in milliseconds." },
      { title: "ACES & PIES Standard Compliant", desc: "Full alignment with global Auto Care Association standards simplifies supplier data ingestion." },
      { title: "Conversion Rate Boost", desc: "Buyers shop with supreme confidence when they see a bright green 'Guaranteed to Fit' badge on the product." }
    ],
    faqs: [
      { question: "How large of a catalog can this app handle?", answer: "Our backend has been benchmarked with catalogs exceeding 500,000 SKUs and over 15 million fitment pairings with sub-50ms query response times." },
      { question: "Does it support custom fields like Engine Size, Transmission, or Bed Length?", answer: "Yes! You can configure up to 6 custom cascading filter levels (e.g. Year -> Make -> Model -> Submodel -> Engine -> Drive Type)." },
      { question: "Can shoppers save their vehicle for future visits?", answer: "Yes. The 'My Garage' feature stores selected vehicles in the customer's browser and account, persisting their vehicle selection across sessions." }
    ]
  }
];

export function getProductBySlug(slug) {
  if (!slug) return null;
  const normalized = String(slug).toLowerCase().trim();
  const directMatch = productsData.find(
    (prod) => prod.slug === normalized || prod.id === normalized
  );
  if (directMatch) return directMatch;

  // Legacy fallback alias mapping for deprecated demo URLs to ensure zero 404s
  const legacyAliases = {
    "hotel-management-system": "mspl-store-locator",
    "solar-epc-platform": "reach-o",
    "on-demand-taxi-suite": "reach-o",
    "telemedicine-suite": "lumez-ai"
  };
  if (legacyAliases[normalized]) {
    return (
      productsData.find((p) => p.slug === legacyAliases[normalized]) ||
      productsData[0]
    );
  }

  return null;
}
