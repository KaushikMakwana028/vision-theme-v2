export const productCategories = [
  "All",
  "AI & SaaS Platforms",
  "Shopify & Commerce Apps",
  "Turnkey Solutions",
  "Enterprise Tools"
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
  },
  {
    id: "hotel-management-system",
    slug: "hotel-management-system",
    number: "06",
    title: "LodgeFlow — Hotel & Resort PMS Platform",
    shortTitle: "LodgeFlow PMS",
    badge: "Turnkey Hospitality Platform",
    tag: "PMS, Booking & Channel Manager",
    category: "Turnkey Solutions",
    rating: "4.9★",
    reviewsCount: "80+ Properties",
    icon: "i-home",
    gradient: "linear-gradient(135deg,#7c3aed,#9333ea)",
    tagline: "All-in-one Property Management System, direct booking engine, and OTA channel manager.",
    shortDescription: "A modern cloud PMS for hotels, boutique resorts, and vacation rentals with real-time reservation grids, digital check-in, housekeeping dispatch, and multi-channel OTA sync.",
    description: "LodgeFlow is a turnkey cloud property management solution built to streamline operations for independent hotels, boutique resorts, and multi-property hospitality groups. Features an intuitive visual front-desk tape chart, automated direct booking engine, contactless guest mobile keys, automated housekeeping dispatch, and two-way sync with Booking.com, Airbnb, and Expedia.",
    heroSubtitle: "Modern cloud Property Management System (PMS), two-way OTA channel synchronization engine, and mobile guest experience portal engineered for independent hotels and resorts.",
    pricing: "Turnkey License & SaaS Hosting Options",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "42%", label: "Direct Bookings Lift" },
      { value: "Zero", label: "Overbooking Incidents" },
      { value: "15 min", label: "Daily Housekeeping Audit" },
      { value: "99.99%", label: "Uptime Availability" }
    ],
    features: [
      {
        title: "Visual Tape Chart & Front Desk Grid",
        description: "Interactive drag-and-drop calendar matrix showing real-time room occupancies, maintenance holds, and guest check-ins with one-click reservation editing.",
        points: ["Drag-and-drop room assignments", "Instant split-bill and folio generation", "Color-coded VIP and early check-in flags"]
      },
      {
        title: "Two-Way Channel Manager (Booking, Airbnb, Expedia)",
        description: "Synchronize room availability, rates, and minimum night restrictions automatically across 50+ global Online Travel Agencies in real time.",
        points: ["Instant two-way rate & calendar sync", "Distributed lock overbooking prevention", "Dynamic rate multipliers across channels"]
      },
      {
        title: "Contactless Mobile Guest Portal & Web Check-In",
        description: "Guests can complete pre-arrival registration, upload ID verification, request upgrades, and receive digital room key codes on their smartphone.",
        points: ["Paperless digital registration card with signature", "In-stay room service & amenities ordering", "Contactless checkout and automated folio delivery"]
      },
      {
        title: "Real-Time Housekeeping & Maintenance App",
        description: "Housekeeping mobile dashboard tracks clean, dirty, inspected, and out-of-order room states with instant push alerts to front desk staff.",
        points: ["Room cleaning timer & priority queue", "Photo-enabled maintenance repair ticketing", "Automated minibar consumption billing"]
      }
    ],
    deploymentOptions: [
      {
        title: "Turnkey Cloud SaaS Setup",
        description: "We deploy and configure your property within 48 hours, fully trained on your room types and seasonal rate matrices.",
        badge: "Rapid Setup"
      },
      {
        title: "Full Source Code Buyout",
        description: "Acquire the complete Next.js web application, React Native mobile apps, and Node.js backend for unrestricted enterprise customization.",
        badge: "Full IP Ownership"
      }
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Stripe Terminal", "AWS"],
    workflow: [
      { step: "01", title: "Property Configuration", desc: "Configure room types, rate plans, taxes, and add-on amenities into the system database." },
      { step: "02", title: "OTA Channel Connection", desc: "Link your Booking.com, Airbnb, and Expedia accounts to activate bidirectional availability sync." },
      { step: "03", title: "Direct Booking Engine Launch", desc: "Embed the responsive booking engine onto your hotel's website to start taking commission-free reservations." },
      { step: "04", title: "Staff Training & Cutover", desc: "Staff onboarded via interactive training videos with dedicated 24/7 go-live support." }
    ],
    advantages: [
      { title: "Keep 100% of Direct Booking Revenue", desc: "Stop paying 18% to 25% commissions to OTAs with our conversion-optimized direct hotel booking widget." },
      { title: "Eliminate Costly Overbookings", desc: "Distributed Redis mutex locks ensure dates are locked simultaneously across all channels in milliseconds." },
      { title: "Accessible From Any Device", desc: "Responsive cloud design allows managers to monitor check-ins, rates, and revenue from tablets or phones anywhere in the world." },
      { title: "Zero Proprietary Hardware Lock-In", desc: "Runs on standard modern browsers and consumer tablets with no expensive proprietary terminal hardware." }
    ],
    faqs: [
      { question: "Can we migrate our existing guest reservation data from another PMS?", answer: "Yes! We provide automated CSV and Excel data migration scripts that import historical guests, upcoming bookings, and rate plans with zero downtime." },
      { question: "How does the channel manager prevent double bookings?", answer: "Whenever a room is booked on your website or an OTA, our sync engine instantly broadcasts a rate block across all other 50+ channels within 3 seconds." },
      { question: "Does it support card-present terminal payments at the front desk?", answer: "Yes. LodgeFlow integrates with Stripe Terminal, Square, and Pax POS terminals for tap-to-pay, chip, and Apple Pay check-in payments." }
    ]
  },
  {
    id: "solar-epc-platform",
    slug: "solar-epc-platform",
    number: "07",
    title: "HelioTrack — Solar EPC & Field Project Suite",
    shortTitle: "HelioTrack EPC",
    badge: "Industrial Field Operations",
    tag: "Solar EPC & Renewable Energy",
    category: "Turnkey Solutions",
    icon: "i-cpu",
    gradient: "linear-gradient(135deg,#f59e0b,#ea580c)",
    tagline: "End-to-end project management, site surveying, and commissioning software for solar developers.",
    shortDescription: "A specialized project management platform for commercial and utility-scale solar EPC contractors with mobile site survey checklists, CAD doc management, and milestone tracking.",
    description: "HelioTrack digitizes the complete lifecycle of solar engineering, procurement, and construction (EPC) projects. From initial site feasibility audits and interconnection permitting workflows to bill-of-materials procurement and on-site string commissioning testing.",
    heroSubtitle: "Turnkey Solar EPC project management suite, offline mobile site surveying tool, and grid commissioning tracker engineered for renewable energy contractors.",
    pricing: "Custom Enterprise Deployment & Source License",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "35%", label: "Faster Project Turnaround" },
      { value: "1.4 GW", label: "Solar Assets Managed" },
      { value: "100%", label: "Offline Field Surveying" },
      { value: "Zero", label: "Compliance Paperwork Loss" }
    ],
    features: [
      {
        title: "Offline Mobile Site Survey & Shading Audits",
        description: "Field engineers capture roof measurements, electrical panel specs, GPS coordinates, and photos even in remote zero-cellular locations.",
        points: ["Offline SQLite and local photo caching", "Geotagged high-resolution photo uploads", "Roof pitch & azimuth calculation helpers"]
      },
      {
        title: "BOM Procurement & Supplier Tracking",
        description: "Track module quantities, inverters, racking systems, and balance-of-system (BOS) shipments from purchase order to warehouse arrival.",
        points: ["Real-time supply chain milestone tracking", "Vendor quotation comparison matrices", "Warehouse delivery verification"]
      },
      {
        title: "Milestone Gantt & Permitting Workflows",
        description: "Interactive project timeline scheduling with automated document tracking for AHJ building permits, utility interconnection, and PTO signoffs.",
        points: ["Interactive Gantt scheduling with dependency locks", "Automated AHJ permit renewal alerts", "Utility Permission to Operate (PTO) tracking"]
      },
      {
        title: "Commissioning & QA String Testing",
        description: "Digital commissioning punchlists, string open-circuit voltage (Voc) logging, and thermal imaging inspection reports exportable as PDF.",
        points: ["Digital IV curve & string test logging", "Automated client acceptance handover PDF generation", "Punch list task assignment with photo proof"]
      }
    ],
    deploymentOptions: [
      {
        title: "Turnkey Cloud Dedicated Setup",
        description: "Fully configured for your EPC engineering and field teams with single sign-on (SSO) and role-based permissions.",
        badge: "Enterprise Ready"
      },
      {
        title: "Source Code Buyout & Customization",
        description: "Own the complete web, mobile, and backend IP to customize workflows and connect to your internal ERP.",
        badge: "Full IP Ownership"
      }
    ],
    techStack: ["Next.js", "React Native", "PostgreSQL", "Node.js", "AWS S3", "Docker"],
    workflow: [
      { step: "01", title: "Site Assessment & Feasibility", desc: "Field engineers audit roof integrity, utility panels, and solar irradiance using the offline mobile app." },
      { step: "02", title: "Engineering & Permitting", desc: "Upload single-line diagrams (SLD) and track municipal permit approvals with milestone dependencies." },
      { step: "03", title: "Procurement & Construction", desc: "Track inverter and module deliveries, assign sub-contractor daily work orders, and review daily progress logs." },
      { step: "04", title: "Commissioning & Handover", desc: "Execute electrical string tests, generate utility PTO documentation, and deliver branded client warranty packages." }
    ],
    advantages: [
      { title: "Works Flawlessly in Remote Areas", desc: "Field technicians can complete audits and take hundreds of photos with zero cellular connectivity." },
      { title: "Eliminates Costly Installation Delays", desc: "Automated permit and equipment delivery alerts prevent crew idle time on the job site." },
      { title: "Standardized Handover Documentation", desc: "Generate comprehensive 50-page client commissioning and warranty handover dossiers with one click." },
      { title: "Customizable for Any Renewable Tech", desc: "Easily adapted for Battery Energy Storage Systems (BESS), EV charging hubs, and wind farms." }
    ],
    faqs: [
      { question: "Can our field engineers use the mobile app without internet connectivity?", answer: "Yes. The mobile app is built offline-first: all photos, checklist answers, and site notes are stored locally and automatically sync upon WiFi/cellular reconnect." },
      { question: "Does HelioTrack integrate with accounting software like QuickBooks or NetSuite?", answer: "Yes. We provide automated webhooks and REST endpoints to sync project milestones, vendor purchase orders, and client invoicing with your ERP." },
      { question: "Is full source code transfer available for our enterprise?", answer: "Yes. We offer an unrestricted enterprise source code license allowing your internal IT team to customize and host the software indefinitely." }
    ]
  },
  {
    id: "on-demand-taxi-suite",
    slug: "on-demand-taxi-suite",
    number: "08",
    title: "FleetRide — Turnkey Ride-Hailing & Taxi Dispatch Suite",
    shortTitle: "FleetRide Suite",
    badge: "Turnkey Mobility Platform",
    tag: "Passenger App, Driver App & Dispatch",
    category: "Turnkey Solutions",
    icon: "i-truck",
    gradient: "linear-gradient(135deg,#0284c7,#2563eb)",
    tagline: "Complete white-label Uber-like passenger app, driver app, and cloud dispatch panel.",
    shortDescription: "A turnkey on-demand mobility platform featuring native iOS & Android passenger apps, driver apps with turn-by-turn navigation, and a real-time web dispatch dashboard.",
    description: "FleetRide delivers everything needed to launch a private taxi fleet, corporate shuttle service, or on-demand delivery operation in under two weeks. Includes live GPS tracking, automated dynamic fare calculations (surge, distance, duration), digital wallet payments, driver payout splits, and admin dispatch consoles.",
    heroSubtitle: "Complete white-label passenger app, driver app, and automated cloud dispatch management platform engineered for fleet operators and mobility startups.",
    pricing: "Turnkey White-Label Package & Source Code License",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "Sub-2s", label: "Driver Match Latency" },
      { value: "4.9★", label: "App Store Quality" },
      { value: "100k+", label: "Rides Handled / Day" },
      { value: "2 Weeks", label: "Launch Time" }
    ],
    features: [
      {
        title: "Native Passenger Mobile Apps (iOS & Android)",
        description: "Smooth ride booking with live driver tracking, fare estimates, multi-stop routing, digital card/wallet payments, and driver ratings.",
        points: ["Live car movement on map via WebSockets", "Apple Pay, Google Pay, and Cash payment options", "Saved favorite home/work locations"]
      },
      {
        title: "Native Driver Mobile Apps (iOS & Android)",
        description: "Drivers receive instant trip requests with pickup distance, accept/decline timers, turn-by-turn navigation, and daily earnings dashboards.",
        points: ["Built-in Google Maps & Waze navigation", "Daily and weekly earnings breakdown with instant cashout", "Document upload for driver license & vehicle registration"]
      },
      {
        title: "Intelligent Auto-Dispatch & Matching",
        description: "Algorithmic dispatch engine matches trip requests to the closest available driver, minimizing customer wait times and empty backhauls.",
        points: ["Radius proximity & driver rating matching heuristics", "Manual dispatcher override capability", "Automated surge pricing based on real-time supply & demand"]
      },
      {
        title: "Admin Web Control Panel & Analytics",
        description: "Fleet managers monitor active rides on a real-time map, manage driver commission splits, resolve customer complaints, and review revenue.",
        points: ["Live god-view fleet map", "Customizable commission fee percentage (e.g. 15%-25%)", "Geofence operating zone configurations with airport surcharges"]
      }
    ],
    deploymentOptions: [
      {
        title: "White-Label Setup & Store Publishing",
        description: "We rebrand apps with your logo, color scheme, and app store accounts, handling Apple App Store and Google Play Store approvals.",
        badge: "Turnkey Launch"
      },
      {
        title: "Full Source Code Ownership",
        description: "Receive the complete React Native codebase, Next.js admin portal, and scalable Go/Node backend for complete in-house ownership.",
        badge: "Full IP Ownership"
      }
    ],
    techStack: ["React Native", "Next.js", "Go / Golang", "Redis", "PostgreSQL", "Google Maps Platform", "Stripe Connect", "Docker"],
    workflow: [
      { step: "01", title: "Brand Customization", desc: "We customize logos, brand splash screens, app color schemes, and fare calculation algorithms." },
      { step: "02", title: "Cloud Backend Deployment", desc: "Deploy your high-availability auto-scaling infrastructure on AWS with Redis caching and PostgreSQL." },
      { step: "03", title: "App Store Publishing", desc: "We compile native iOS and Android binaries and submit them under your own Apple & Google developer accounts." },
      { step: "04", title: "Fleet Go-Live", desc: "Onboard your first drivers, test real-time booking flows, and activate your on-demand dispatch operations." }
    ],
    advantages: [
      { title: "Launch in Under 14 Days", desc: "Skip 12+ months and $200,000+ of custom development with our battle-tested, production-ready codebase." },
      { title: "Zero Per-Ride Royalties", desc: "You keep 100% of your business profits with zero mandatory per-trip platform fees or vendor lock-in." },
      { title: "Silky Smooth 60fps Real-Time Tracking", desc: "High-performance WebSocket servers deliver seamless vehicle animation on map screens without stutter." },
      { title: "Fully Scalable Architecture", desc: "Backend architected on Go microservices and Redis capable of easily scaling from 10 to 10,000 active vehicles." }
    ],
    faqs: [
      { question: "Are both passenger and driver mobile apps included for iOS and Android?", answer: "Yes! The package includes two full cross-platform mobile apps (Passenger App + Driver App) built with React Native for iOS and Android." },
      { question: "Can we set custom fare formulas and surge pricing rules?", answer: "Yes. From the admin portal, you can set base fares, per-kilometer rates, per-minute wait time fees, and automated surge pricing multipliers based on weather or demand." },
      { question: "Do you assist with publishing to the Apple App Store and Google Play?", answer: "Yes, 100%. Our deployment engineering team handles app bundling, testflight verification, and full store approval submissions." }
    ]
  },
  {
    id: "telemedicine-suite",
    slug: "telemedicine-suite",
    number: "09",
    title: "CarePulse — Telehealth & Virtual Clinic Platform",
    shortTitle: "CarePulse Telehealth",
    badge: "HIPAA Compliant Platform",
    tag: "Telemedicine & Digital Health",
    category: "Turnkey Solutions",
    icon: "i-heart",
    gradient: "linear-gradient(135deg,#ec4899,#f43f5e)",
    tagline: "Turnkey HIPAA-compliant telehealth, virtual consultations, and digital prescription portal.",
    shortDescription: "A secure, HIPAA-compliant telehealth platform with encrypted HD video calls, digital patient intake, electronic prescriptions, and clinic scheduling.",
    description: "CarePulse enables medical practices, digital health startups, and hospital networks to provide modern virtual care in days. Built with peer-to-peer WebRTC video encryption, automated insurance and card copay processing, patient intake forms, electronic health record (EHR) sync, and e-prescriptions.",
    heroSubtitle: "HIPAA-compliant telemedicine consultation platform, WebRTC clinical video suite, and digital patient portal engineered for modern healthcare providers.",
    pricing: "Turnkey Clinical Deployment & Source License",
    liveDemoUrl: "/#contact",
    metrics: [
      { value: "100%", label: "HIPAA & HITECH Compliant" },
      { value: "Sub-200ms", label: "Video Call Latency" },
      { value: "4.9★", label: "Patient Satisfaction" },
      { value: "350k+", label: "Virtual Consults Logged" }
    ],
    features: [
      {
        title: "Encrypted HD Clinical Video & Audio",
        description: "Browser-based WebRTC video consultations with zero downloads required for patients. Features in-call doctor screen sharing and vitals chat.",
        points: ["End-to-end DTLS-SRTP encryption", "Works on mobile browsers with zero app installation", "Adaptive bandwidth for rural low-connectivity patients"]
      },
      {
        title: "Digital Patient Intake & Medical History",
        description: "Secure pre-visit questionnaires, consent e-signatures, insurance card photo capture, and past medical history logging.",
        points: ["Customizable clinical symptom intake forms", "Digital HIPAA consent e-signature capture", "Insurance card front/back verification"]
      },
      {
        title: "Doctor Schedule Management & Copay Processing",
        description: "Doctor availability booking calendars, automated SMS/email appointment reminders, and automated copay credit card processing via Stripe.",
        points: ["Automated SMS appointment reminders to reduce no-shows", "Pre-authorization copay hold before consultation", "Multi-doctor clinic schedule view"]
      },
      {
        title: "EHR Sync & E-Prescription Routing",
        description: "Standardized HL7 and FHIR v4 APIs to sync consultation clinical notes directly into hospital EHRs like Epic, Cerner, and AthenaHealth.",
        points: ["SMART on FHIR interoperability ready", "Digital e-prescription pharmacy dispatching", "Audit-ready clinical consultation timestamps"]
      }
    ],
    deploymentOptions: [
      {
        title: "HIPAA-Compliant Managed Cloud",
        description: "We host and manage the infrastructure on HIPAA-compliant AWS GovCloud with a signed Business Associate Agreement (BAA).",
        badge: "BAA Included"
      },
      {
        title: "Full Source Code IP Transfer",
        description: "Acquire the complete frontend and backend codebase to integrate with proprietary hospital networks and internal medical records.",
        badge: "Enterprise Buyout"
      }
    ],
    techStack: ["Next.js", "React Native", "WebRTC", "PostgreSQL", "FastAPI / Python", "AWS HealthLake", "Docker"],
    workflow: [
      { step: "01", title: "BAA Execution & Scoping", desc: "Execute Business Associate Agreement (BAA) and configure your clinic branding and consultation fees." },
      { step: "02", title: "Doctor Profile & Schedule Setup", desc: "Onboard clinic physicians, set consultation hours, and configure appointment specialties." },
      { step: "03", title: "Patient Booking Activation", desc: "Launch the responsive patient portal for one-click appointment scheduling and digital intake." },
      { step: "04", title: "HIPAA-Verified Clinical Go-Live", desc: "Conduct end-to-end test consultations with encrypted audit trails and launch virtual care." }
    ],
    advantages: [
      { title: "Zero App Download for Patients", desc: "Patients join virtual video appointments directly in their smartphone browser with one tap from an SMS link." },
      { title: "Ironclad BAA & Compliance Defense", desc: "Full adherence to HIPAA, HITECH, and GDPR security standards with end-to-end encrypted pipelines." },
      { title: "Reduces Clinic No-Show Rates by 70%", desc: "Automated SMS reminders and credit card copay holds ensure patients attend scheduled appointments." },
      { title: "Standardized Hospital Interoperability", desc: "FHIR v4 integration allows immediate compatibility with hospital electronic health record systems." }
    ],
    faqs: [
      { question: "Is this platform legally HIPAA compliant?", answer: "Yes. All video and data streams are encrypted at rest and in transit. We sign a formal Business Associate Agreement (BAA) with all healthcare clients." },
      { question: "Do patients need to download an app from the App Store?", answer: "No! Patients can join their video consultation directly from a secure web link sent via SMS or email on any smartphone, tablet, or laptop." },
      { question: "Can we integrate this with our existing clinic EHR system?", answer: "Yes. CarePulse provides FHIR v4 and HL7 REST APIs designed to sync clinical encounter notes and patient files into Epic, Cerner, and AthenaHealth." }
    ]
  }
];

export function getProductBySlug(slug) {
  if (!slug) return null;
  const normalized = String(slug).toLowerCase().trim();
  return (
    productsData.find(
      (prod) => prod.slug === normalized || prod.id === normalized
    ) || null
  );
}
