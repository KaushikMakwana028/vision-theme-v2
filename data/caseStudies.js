export const workCategories = [
  "All",
  "Website Development",
  "Ecommerce Solutions",
  "Custom Software & CRM",
  "Mobile App Development"
];

export const caseStudiesData = [
  {
    id: "suryadeepcarrent",
    slug: "suryadeepcarrent",
    serviceSlug: "website-development",
    category: "Website Development",
    title: "Surya Deep Car Rent",
    subtitle: "Car Rental ERP & Online Fleet Booking Platform",
    client: "Surya Deep Car Rent (Cab Booking Fast)",
    industry: "Car Rental, Fleet Management & Urban Mobility",
    duration: "10 Weeks",
    country: "India",
    website: "https://suryadeepcarrent.com",
    domain: "suryadeepcarrent.com",
    description: "An intelligent, full-lifecycle car rental ERP and booking portal featuring real-time fleet conflict scheduling, digital KYC verification, and automated multi-channel payment reconciliation.",
    shortPitch: "Surya Deep Car Rent is an end-to-end vehicle rental management system that transforms car hire operations. It provides customers with a seamless 3-step online booking and paperless KYC workflow, while equipping fleet owners with live vehicle scheduling, pre/post inspection photo logs, Razorpay payments, and per-vehicle profit-and-loss analytics.",
    tags: ["Fleet ERP", "PHP / CodeIgniter", "Razorpay", "Live Platform"],
    gradient: "linear-gradient(135deg,#0369a1,#1e3a8a)",
    image: "/images/suryadeepcarrent/01_suryadeepcarrent.webp",
    images: [
      "/images/suryadeepcarrent/01_suryadeepcarrent.webp"
      // Add extra images here when added in public/images/suryadeepcarrent/
    ],
    gallery: [
      {
        url: "/images/suryadeepcarrent/01_suryadeepcarrent.webp",
        caption: "Responsive Multi-Device Platform — Laptop, Tablet & Mobile Booking Interface",
        tag: "Multi-Device UI Showcase",
        badge: "Screen 01 · Primary Overview"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "<2 min", label: "Booking Turnaround" },
      { value: "0%", label: "Scheduling Conflicts" },
      { value: "100%", label: "Paperless Digital KYC" },
      { value: "100%", label: "Payment Reconciliation" }
    ],
    challenge: "Traditional car rental and cab hire operators struggle with manual, disjointed processes: double-booking errors caused by phone and spreadsheet reservations frequently caused vehicle scheduling collisions; collecting physical copies of Driving Licenses and Aadhaar cards was slow, disorganized, and created compliance vulnerabilities; tracking cash advances, UPI screenshots, and outstanding balances resulted in missed collections and revenue leakage; and lack of formal condition records prior to handover and upon return led to frequent conflicts over preexisting dents or damages. Fleet owners also had no clean way to offset car fuel, maintenance, servicing, and driver costs against vehicle revenues to see actual net profit.",
    solution: "Vision engineered an end-to-end mobile-first web platform and management ERP consisting of a frictionless 3-step customer booking flow (car & package selection → document upload → advance payment), a microsecond-level date and time overlap conflict detection algorithm, paperless digital KYC validating Driving License & Aadhaar uploads, automated Razorpay payment integration combined with custom dynamic UPI QR generation, pre/post trip high-resolution inspection photo logging, and real-time fleet financials delivering per-vehicle net profit-and-loss visibility.",
    deliverables: [
      "Customer Online Booking Portal with 3-Step Transparent Checkout",
      "Admin Fleet & Operations ERP with Live Asset Status Tracking",
      "Digital Document & KYC Verification Module (Driving License & Aadhaar)",
      "Automated Razorpay Gateway & Dynamic UPI QR Payment Reconciliation",
      "Pre & Post Trip Vehicle Condition & Inspection Photo Logger",
      "Headless RESTful API Suite for Direct Mobile App Integration"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter MVC",
      "MySQL Relational DB",
      "RESTful API",
      "JavaScript (ES6+)",
      "jQuery",
      "Razorpay API",
      "Dynamic UPI QR Generator",
      "Flatpickr",
      "Select2",
      "SweetAlert2",
      "Tabler Icons",
      "Modern CSS3 Tokens"
    ],
    modules: [
      {
        title: "Customer Portal & 3-Step Booking Engine",
        icon: "i-car",
        description: "Dynamic catalog with vehicle filtering by type (Sedan, SUV, Hatchback), fuel, seating, and flexible hourly or per-KM packages with instant conflict detection.",
        features: [
          "Hourly Packages (6-Hour, 12-Hour, 24-Hour) & Outstation Per-KM Pricing",
          "Microsecond-level date/time overlap conflict prevention algorithm",
          "Unique alpha-numeric tracking code generation (e.g., BK-XXXXXX)",
          "Customer self-service dashboard with status tracking & invoice download"
        ]
      },
      {
        title: "Digital KYC & Document Compliance",
        icon: "i-shield",
        description: "Paperless verification pipeline validating Driving Licenses and Aadhaar cards prior to vehicle handover.",
        features: [
          "Mandatory Driving License and Aadhaar document upload before handover",
          "Interactive document status matrix (Pending, Uploaded, Verified)",
          "Dedicated administrative verification console with review notes & approval",
          "Secure file upload verification with MIME validation & size limits"
        ]
      },
      {
        title: "Multi-Mode Payment & Reconciliation Engine",
        icon: "i-credit-card",
        description: "Hybrid payment gateway supporting direct online checkout, dynamic UPI QR generation, and cash collection.",
        features: [
          "Razorpay API integration (UPI, Credit/Debit cards, Net Banking)",
          "Dynamic Admin UPI QR generator with screenshot upload & approval console",
          "Cash collection logging for pickup and return settlement",
          "Automated booking status synchronization upon payment verification"
        ]
      },
      {
        title: "Vehicle Pre & Post Inspection Audit Photos",
        icon: "i-camera",
        description: "High-resolution timestamped photo logging system capturing vehicle condition, odometer readings, and fuel levels.",
        features: [
          "Timestamped vehicle photo capture during pickup and return handovers",
          "Eliminates disputes regarding preexisting scratches, dents, or cleanliness",
          "Unalterable visual record with odometer & condition logs",
          "Secure asset storage protecting fleet capital investments"
        ]
      },
      {
        title: "Fleet & Asset Management (ERP)",
        icon: "i-layers",
        description: "Complete vehicle lifecycle control categorizing fleet status into Available, Booked, and Under Maintenance / Service.",
        features: [
          "Real-time fleet state tracking across all branches",
          "Vehicle configuration (rates, fuel types, seating, advance requirements)",
          "Asset deletion safeguards preventing accidental removal of active cars",
          "Automated maintenance & service scheduling alerts"
        ]
      },
      {
        title: "Fleet Financials & Vehicle Expense Tracker",
        icon: "i-chart",
        description: "Vehicle-level profit-and-loss calculation subtracting fuel, maintenance, driver allowances, and tolls from trip collections.",
        features: [
          "Per-vehicle monthly and annual P&L reporting",
          "Operating expense logging (fuel, periodic servicing, emergency repairs, driver fees)",
          "Net profitability calculation offsetting running costs against trip revenue",
          "Granular monthly collection summaries and financial exports"
        ]
      },
      {
        title: "Customer Relationship Management (CRM)",
        icon: "i-users",
        description: "Consolidated customer records tracking lifetime reservations, total expenditure, pending balances, and verified KYC.",
        features: [
          "Unified customer profiles with complete rental history",
          "Walk-in & telephone booking engine for offline reservations",
          "Automatic customer profile creation and cross-channel sync",
          "Repeat commuter and corporate client preference tracking"
        ]
      },
      {
        title: "Headless RESTful API Suite",
        icon: "i-cpu",
        description: "Enterprise JSON API endpoints engineered for direct integration with native Android/iOS apps or third-party travel aggregators.",
        features: [
          "Endpoints for vehicle catalog, availability checking, and booking creation",
          "Customer authentication, document management, and status feeds",
          "Strict input sanitization, token validation, and rate limiting",
          "High-concurrency microsecond response times"
        ]
      }
    ],
    resultsTable: [
      { metric: "Booking Turnaround Time", before: "20–30 mins (manual phone calls & messaging)", after: "Under 2 minutes (instant online booking)" },
      { metric: "Double-Booking Incident Rate", before: "5%–8% monthly scheduling overlaps", after: "0% (guaranteed by real-time conflict engine)" },
      { metric: "Document KYC Verification", before: "Physical photocopies / WhatsApp images", after: "100% paperless digital verification" },
      { metric: "Damage Dispute Resolution", before: "Subjective customer-driver arguments", after: "Instant resolution via pre/post photo audit" },
      { metric: "Revenue Leakage", before: "Frequent unrecorded cash advances", after: "100% reconciled via multi-channel payment logs" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Architecture with Strict RBAC",
      highlights: [
        "Role-Based Access Control (RBAC): Strict isolation between authenticated Admin accounts (role = 1) and verified Customer accounts (role = 0)",
        "Self-Healing Schema Architecture: Automated model-level schema checks (ensure_* methods) maintaining DB consistency without downtime",
        "Enterprise Security: Input sanitization, XSS filtering, parameterized Query Builder protecting against SQL Injection, secure MIME verification",
        "Performance & Design: Native CSS token system delivering sub-second render times without heavy framework bloat; mobile-optimized flex/grid layouts"
      ]
    },
    testimonial: {
      quote: "Surya Deep Car Rent has scaled our rental operations to an entirely new level. Double bookings are completely gone, customer bookings take under two minutes with instant KYC, and we can monitor real net profit per car in real time. Vision delivered an exceptional platform.",
      author: "Surya Deep Fleet Management",
      role: "Managing Director",
      company: "Surya Deep Car Rent"
    }
  },
  {
    id: "srlpixel",
    slug: "srlpixel",
    serviceSlug: "ecommerce-solutions",
    category: "Ecommerce Solutions",
    title: "SRL Pixel LED’s Glowing Hub",
    subtitle: "Omnichannel E-Commerce & Retail POS Platform for Addressable LED Lighting",
    client: "SRL Pixel LED Lighting Inc.",
    industry: "Smart LED Lighting, Architectural Illumination & Hardware",
    duration: "8 Weeks",
    country: "India",
    website: "https://srlpixel.com",
    domain: "srlpixel.com",
    description: "An Omnichannel E-Commerce & Retail POS Platform for Next-Generation Addressable LED Lighting and Controllers.",
    shortPitch: "SRL Pixel LED’s Glowing Hub is a specialized LED hardware commerce platform uniting an online shopping experience with in-store walk-in POS billing, OTP verification, live inventory sync, and automated GST tax invoicing.",
    tags: ["E-Commerce & POS", "PHP / CodeIgniter", "Neon Glow UI", "Live Platform"],
    gradient: "linear-gradient(135deg,#db2777,#be185d,#1e1b4b)",
    image: "/images/srlpixel/01_srlpixel.webp",
    images: [
      "/images/srlpixel/01_srlpixel.webp"
      // Add extra screenshots here when placed in public/images/srlpixel/
    ],
    gallery: [
      {
        url: "/images/srlpixel/01_srlpixel.webp",
        caption: "Responsive Multi-Device Storefront — MacBook, iPad & iPhone Shopping Experience",
        tag: "Multi-Device Storefront UI",
        badge: "Screen 01 · Storefront Overview"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "0%", label: "Stock Discrepancy" },
      { value: "<60s", label: "Mobile OTP Checkout" },
      { value: "100%", label: "Real-Time POS Sync" },
      { value: "100%", label: "GST Tax Invoiced" }
    ],
    challenge: "Specialized commercial lighting businesses (addressable WS2811/WS2812B pixel LEDs, neon flex ropes, programmable DMX/SD controllers, and industrial power supplies) face unique operational hurdles: complex catalogs requiring technical differentiation, channel disconnect between nationwide online sales and physical walk-in retail counter sales leading to inventory mismatch and double-selling, and checkout friction causing cart abandonment while walk-in counters demanded rapid item lookup and instant GST-compliant tax invoicing.",
    solution: "We engineered a unified Omnichannel E-Commerce & Point-of-Sale (POS) Ecosystem that unites digital storefronts and physical counter operations under one centralized real-time database. The platform combines a cyber-aesthetic customer shopping experience with an admin back-office, live inventory synchronization, dynamic promo coupon engine, passwordless mobile OTP checkout, and automated thermal/A4 GST tax invoicing.",
    deliverables: [
      "Omnichannel Customer E-Commerce Storefront with Neon Dark Mode Theme",
      "In-Store Point of Sale (POS) Counter Billing Terminal with Live SKU Lookup",
      "Centralized Inventory Synchronization Engine preventing double-selling",
      "Mobile-First Passwordless OTP Verification & Account Management Module",
      "Dynamic Promotions, Coupon Engine & Homepage Banner CMS",
      "Automated GST-Compliant Commercial Invoicing with Rupee-Word Conversion"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter MVC",
      "MySQL / MariaDB",
      "Bootstrap 5.3",
      "JavaScript (ES6+)",
      "Razorpay API",
      "Mobile OTP Service",
      "SweetAlert2",
      "Bootstrap Icons",
      "Custom Neon Token System",
      "Automated GST Invoicing"
    ],
    modules: [
      {
        title: "Customer Storefront Experience",
        icon: "i-shop",
        description: "Cyber-luminescent dark theme with vibrant pink neon accents, responsive multi-device view, and app-style bottom navigation on mobile.",
        features: [
          "Categorized catalog: Pixel Strips, Neon Flex, Controllers & Power Supplies",
          "High-resolution zoomable product gallery with fullscreen lightbox preview",
          "AJAX interactive cart with sticky summary & live subtotal calculations",
          "Automated free delivery threshold tracker (Free shipping above ₹10,000)"
        ]
      },
      {
        title: "In-Store Point of Sale (Counter POS)",
        icon: "i-device",
        description: "Dedicated walk-in retail sales terminal built into the admin back-office with instant customer autocomplete and live barcode/SKU lookup.",
        features: [
          "Instant product search by Name or SKU with live stock counters",
          "Dynamic item billing grid with custom pricing and quick total computation",
          "Real-time stock deduction upon billing to prevent online double-selling",
          "Flexible split payments: Cash, UPI, and Cards with Paid/Partial tracking"
        ]
      },
      {
        title: "Mobile-First OTP Authentication",
        icon: "i-shield",
        description: "Frictionless password-free customer onboarding and login using a 6-digit SMS OTP verification engine.",
        features: [
          "Quick mobile number sign-in with automated 6-digit OTP delivery",
          "Countdown resend timer and brute-force attempt limit protections",
          "Self-service account dashboard with multi-address management",
          "Live order milestone tracking: Placed → Confirmed → Packed → Delivered"
        ]
      },
      {
        title: "Commercial GST Tax Invoicing Engine",
        icon: "i-file",
        description: "Automated generation of print-ready commercial tax invoices formatted for thermal counter receipt printers or A4 PDF records.",
        features: [
          "Programmatic Rupee words conversion (numberToWordsINR including Paise)",
          "Standardized audit order naming schema (SRL-YYYYMMDD-XXXXX)",
          "Itemized SKU breakdowns, customer billing/shipping details & tax totals",
          "One-click browser print and PDF download for retail counter handover"
        ]
      },
      {
        title: "Admin Management Suite & Analytics",
        icon: "i-chart",
        description: "Comprehensive operational cockpit tracking gross online sales, counter revenue, order volume, and catalog health.",
        features: [
          "Live revenue breakdown: Gross Online, Collected, and Counter POS Revenue",
          "Inventory health tracking with automated alerts for low stock (≤ 5 units)",
          "Product catalog manager with multi-image gallery uploads & SKU controls",
          "Customer directory (CRM) tracking lifetime purchase histories & profiles"
        ]
      },
      {
        title: "Promotions & Dynamic Coupon Engine",
        icon: "i-ticket",
        description: "Flexible promotional marketing system supporting percentage discounts and flat rupee reductions with strict validation rules.",
        features: [
          "Configurable conditions: min cart value, max discount caps, date windows",
          "Usage limits per promo code and per individual customer account",
          "Real-time AJAX coupon verification and discount application at checkout",
          "Full audit trail log tracking redemption history (coupon_usages)"
        ]
      },
      {
        title: "Hybrid Payment & Checkout Gateway",
        icon: "i-credit-card",
        description: "Multi-channel checkout engine integrating automated Razorpay API payments alongside Cash on Delivery options.",
        features: [
          "Seamless Razorpay modal checkout (UPI, Credit/Debit Cards, Net Banking)",
          "Secure Cash on Delivery (COD) processing with address validation",
          "Instant payment status callbacks and automated order confirmation emails",
          "Real-time payment reconciliation across digital and physical orders"
        ]
      },
      {
        title: "Dynamic Homepage Hero Banner CMS",
        icon: "i-layers",
        description: "Admin-managed promotional banner and slider control center to feature seasonal lighting showcases and newly arrived inventory.",
        features: [
          "Manage hero sliders with custom badge text, headings, and CTAs",
          "Scheduled publication dates and direct catalog destination linking",
          "High-speed edge caching with WebP optimized image compression",
          "Seamless responsive scaling across desktop, tablet, and mobile displays"
        ]
      }
    ],
    resultsTable: [
      { metric: "Inventory Synchronization", before: "Manual phone updates & spreadsheet tracking", after: "0% discrepancy (real-time automated deduction)" },
      { metric: "Checkout Completion Speed", before: "4–6 minutes with complex form registrations", after: "Under 60 seconds with passwordless mobile OTP" },
      { metric: "Counter POS Billing Time", before: "Slow manual billing causing walk-in queues", after: "Instant SKU search, dynamic cart & thermal print" },
      { metric: "Invoicing & Tax Compliance", before: "Handwritten receipts & manual tax math", after: "100% automated GST invoice with Rupee word conversion" },
      { metric: "Cart Abandonment", before: "High drop-offs due to unexpected shipping costs", after: "Live free delivery threshold indicator (₹10,000+)" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) with Real-Time Inventory & POS Synchronization",
      highlights: [
        "Role-Based Access Control (RBAC): Strict isolation between customer sessions (role = 0) and administrator counter privileges (role = 1)",
        "Database Optimization: Indexed relational schema, foreign key constraints, and active record parameterized query abstraction preventing SQL injection",
        "Security & Input Sanitization: Automated CSRF token protection, CodeIgniter input sanitization, and HTML entity escaping",
        "Fast Server-Side Pagination: Optimized AJAX pagination algorithm rendering only current slice records for sub-second page performance"
      ]
    },
    testimonial: {
      quote: "The unified inventory system completely transformed our business. Before, we had to constantly check shelves when online orders came in. Now, our walk-in counter sales and digital storefront are in total sync, walk-in customers get instant invoices, and our online sales have grown dramatically.",
      author: "SRL Pixel Lighting Team",
      role: "Operations & Retail Head",
      company: "SRL Pixel LED's Glowing Hub"
    }
  },
  {
    id: "recomm",
    slug: "recomm",
    seoTitle: "ReComm: Marketplace Engine Case Study",
    serviceSlug: "ecommerce-solutions",
    category: "Ecommerce Solutions",
    title: "ReComm — Hyperlocal Marketplace Engine",
    subtitle: "Next-Gen Hyperlocal On-Demand Commerce & Multi-Vendor Marketplace Platform",
    client: "ReComm Marketplace Technologies",
    industry: "Hyperlocal E-Commerce, Quick Commerce & FMCG",
    duration: "12 Weeks",
    country: "India",
    website: "https://recomm.in",
    domain: "recomm.in",
    description: "An enterprise hyperlocal multi-vendor marketplace platform connecting neighborhood merchants with digital consumers through real-time proximity discovery, dynamic road routing, and multi-slot delivery.",
    shortPitch: "ReComm is a scalable on-demand hyperlocal marketplace ecosystem connecting local vendors, supermarkets, and specialty merchants with neighborhood consumers. Features sub-second GPS store discovery, hybrid geodesic road-routing, flexible multi-slot delivery, instant mobile OTP authentication, and automated GST tax invoicing.",
    tags: ["Hyperlocal Quick-Commerce", "PHP / CodeIgniter", "Multi-Vendor", "Live Platform"],
    gradient: "linear-gradient(135deg,#059669,#10b981,#022c22)",
    image: "/images/recomm/01_recomm.webp",
    images: [
      "/images/recomm/01_recomm.webp"
      // Add extra screenshots here when placed in public/images/recomm/
    ],
    gallery: [
      {
        url: "/images/recomm/01_recomm.webp",
        caption: "Responsive Multi-Device Platform — MacBook Pro, iPad & iPhone Hyperlocal Shopping Experience",
        tag: "Multi-Device Marketplace UI",
        badge: "Screen 01 · Primary Marketplace View"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "<100ms", label: "Store GPS Discovery" },
      { value: "60+", label: "RESTful JSON APIs" },
      { value: "2-Tier", label: "Geodesic + OSRM Routing" },
      { value: "100%", label: "Automated GST Invoiced" }
    ],
    challenge: "Traditional local brick-and-mortar retailers, supermarkets, and specialty merchants struggle to compete with quick-commerce giants: finding nearby open stores with accurate road distances without overwhelming mapping API costs; requiring 50 grocers to photograph and duplicate standard FMCG goods causes data clutter and high onboarding friction; standard e-commerce models fail for fresh groceries needing intraday delivery windows; and managing multi-vendor GST tax invoicing, payouts, and customer disputes creates heavy operational overhead.",
    solution: "Vision engineered ReComm as a scalable, 3-tier multi-tenant hyperlocal ecosystem: sub-millisecond Haversine geodesic filtering for instant store browsing paired with Open Source Routing Machine (OSRM) road distance engine for checkout delivery fee calculations; a decoupled Master Catalogue Architecture allowing merchants to link store inventory in one click with localized pricing; flexible multi-slot delivery supporting express dispatch, lunch/dinner windows, and custom pre-order timestamps; automated GST tax invoicing generating DomPDF invoices with Rupee amount in words; and a centralized Super-Admin governance cockpit with zero-friction vendor impersonation.",
    deliverables: [
      "Hyperlocal Consumer Web & PWA Shopping Application",
      "Vendor & Merchant Store Management Operations Portal",
      "Centralized Super-Admin Operations Cockpit & Governance CMS",
      "Dual-Layer Geolocation & OSRM Road Distance Logistics Engine",
      "Master Product Catalogue & Multi-Vendor Inventory Decoupling Engine",
      "Automated GST Tax Invoicing & Courier AWB Tracking System"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter MVC",
      "MySQL Relational DB",
      "RESTful API (60+ Endpoints)",
      "Firebase JWT v7.1",
      "OSRM Road Routing",
      "Haversine Geolocation",
      "Razorpay API",
      "DomPDF v3.1",
      "Bootstrap",
      "Chart.js"
    ],
    modules: [
      {
        title: "Consumer Mobile & Web App (Customer Experience)",
        icon: "i-shop",
        description: "Fast hyperlocal discovery detecting customer GPS coordinates, filtering stores in serviceable radius, and checking live store schedule status.",
        features: [
          "Smart Geolocation & Proximity Discovery with live Open/Closed/Holiday indicators",
          "Universal search & fast autocomplete across products, brands, and categories",
          "Unified shopping cart with custom named shopping lists transferable in one click",
          "Flexible multi-slot delivery: Express dispatch, Lunch slot, Dinner slot & Custom times"
        ]
      },
      {
        title: "Vendor & Merchant Operations Portal",
        icon: "i-device",
        description: "Decoupled store management portal with mobile OTP login, operating schedule controls, and 1-click Master SKU inventory linking.",
        features: [
          "Passwordless mobile OTP onboarding and store operational hours management",
          "Decoupled Master SKU catalog linking with localized pricing and stock counts",
          "Temporary outage switches to instantly prevent out-of-stock order placement",
          "Live order fulfillment alerts, delivery partner dispatch, and cancellation logging"
        ]
      },
      {
        title: "Central Super-Admin Console (Governance Cockpit)",
        icon: "i-chart",
        description: "Bird's-eye marketplace dashboard tracking real-time GMV, 7-day sales trends, vendor performance, and customer support tickets.",
        features: [
          "Operations dashboard with real-time Gross Merchandise Value (GMV) metrics",
          "Master catalog & taxonomy repository ensuring high data quality across vendors",
          "Zero-friction vendor impersonation (Login as Vendor) for swift phone support",
          "Integrated helpdesk ticket tracking desk tied directly to order IDs"
        ]
      },
      {
        title: "Hybrid Precision Geolocation & Routing Engine",
        icon: "i-location",
        description: "Two-tier distance resolution avoiding expensive mapping API costs while providing accurate road routing for delivery riders.",
        features: [
          "Sub-millisecond Haversine geodesic math for instantaneous store filtering",
          "OSRM road routing fallback on checkout with strict 2.0s timeout safeguards",
          "Dynamic delivery fee engine computing base rates plus per-km shipping charges",
          "Configurable global and per-store delivery radius caps (e.g. 20 km)"
        ]
      },
      {
        title: "Commercial GST Tax Invoicing System",
        icon: "i-file",
        description: "Automated DomPDF invoice engine formatting clean commercial tax invoices for thermal counter printers or A4 PDF download.",
        features: [
          "Programmatic Rupee words conversion (numberToWordsINR including Paise)",
          "Standardized audit order naming schema (e.g. REC-YYYYMMDD-XXXXX)",
          "Line-item GST tax rate breakdown, vendor GSTIN, and customer addresses",
          "Automatic PDF attachment generation upon order completion"
        ]
      },
      {
        title: "Payment, Settlement & Banking KYC",
        icon: "i-credit-card",
        description: "Secure multi-mode transaction processing powered by Razorpay API integration alongside Cash on Delivery options.",
        features: [
          "Razorpay modal checkout with server-side signature hash verification",
          "Cash on Delivery (COD) processing with address validation checks",
          "Merchant banking profile management (Current, Savings, Cash Credit, Overdraft)",
          "Automated financial reconciliation and commission fee calculations"
        ]
      },
      {
        title: "Multi-Tier Security & Headless API Suite",
        icon: "i-shield",
        description: "High-concurrency RESTful JSON API layer equipped with JWT session management, token blacklist tables, and strict RBAC isolation.",
        features: [
          "60+ RESTful JSON endpoints powering customer, vendor, and admin clients",
          "JSON Web Tokens (Firebase/JWT v7.1) with HMAC-SHA256 and blacklisting",
          "Role-based access control isolating Customer, Vendor, and Super-Admin scopes",
          "Active Record parameterized queries protecting against SQL injection"
        ]
      },
      {
        title: "Legal Policy CMS & Compliance Engine",
        icon: "i-layers",
        description: "In-house policy management suite featuring draft saving, previewing, and version publishing with coded fallback safeguards.",
        features: [
          "Web editor for Terms & Conditions, Privacy Policy, and Refund Policies",
          "Draft saving, instant live previewing, and version history publishing",
          "Infallible hardcoded fallback defaults ensuring zero compliance downtime",
          "Customer consent auditing across customer and merchant onboarding flows"
        ]
      }
    ],
    resultsTable: [
      { metric: "Store Discovery & Filtering", before: "3–5 seconds (slow external mapping API calls)", after: "Under 100ms (sub-millisecond geodesic Haversine math)" },
      { metric: "Merchant Catalog Onboarding", before: "4–7 days (manual photo/data entry per store)", after: "Under 10 minutes (1-click master catalog SKU linking)" },
      { metric: "Delivery Scheduling", before: "Rigid next-day or 2-day delivery windows", after: "Multi-slot flexible delivery (Express, Lunch, Dinner, Custom)" },
      { metric: "Distance Calculation", before: "Inaccurate straight-line distance estimates", after: "Precision OSRM road routing with 2.0s fallback" },
      { metric: "Tax Invoicing & Compliance", before: "Disorganized vendor paper receipts", after: "100% automated GST PDF tax invoices with Rupee word conversion" }
    ],
    architectureDetails: {
      pattern: "3-Tier Multi-Tenant Hyperlocal Ecosystem with Hybrid Geodesic/OSRM Routing",
      highlights: [
        "Hybrid Routing: Sub-millisecond geodesic Haversine proximity filtering combined with live OSRM road routing on checkout",
        "Master Product Catalog: Decoupled master FMCG repository enabling 1-click vendor inventory linking without duplicate data entry",
        "Enterprise Security: Firebase JWT v7.1 with token blacklist session invalidation and strict RBAC across Customer, Vendor, and Super-Admin",
        "Automated Compliance: DomPDF v3.1 tax invoice generation with programmatic number-to-words Rupee conversion and AWB courier tracking"
      ]
    },
    testimonial: {
      quote: "ReComm enabled our regional merchant network to launch quick-commerce delivery in weeks instead of months. The master catalog made onboarding local supermarkets effortless, the delivery time slots fit our customers' exact daily routines, and the dual-layer routing keeps our mapping costs near zero while guaranteeing accurate road distances.",
      author: "ReComm Operations Management",
      role: "Platform Operations Director",
      company: "ReComm Marketplace Technologies"
    }
  },
  {
    id: "stayflow-crm",
    slug: "stayflow-crm",
    seoTitle: "StayFlow CRM: PG & Hostel Case Study",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "StayFlow CRM — PG & Hostel ERP",
    subtitle: "Enterprise PG, Hostel & Co-Living Property Management System",
    client: "StayFlow Living Spaces & Property Management",
    industry: "PropTech, Co-Living Spaces & Real Estate",
    duration: "10 Weeks",
    country: "India",
    website: "https://pg.visiontechnolabs.com/",
    domain: "pg.visiontechnolabs.com",
    description: "An all-in-one cloud property management CRM designed for PG and co-living operators to automate tenant onboarding, room allocation, recurring rent billing, and financial analytics.",
    shortPitch: "StayFlow CRM is a modern, high-performance property management software tailored for Paying Guest (PG) and student hostel businesses. Built with a scalable MVC architecture and an intuitive modern UI, it centralizes multi-branch property operations—from automated recurring rent invoices and digital KYC identity verification to dynamic bed-level occupancy tracking and real-time income-expense bookkeeping.",
    tags: ["PropTech / CRM", "PHP / CodeIgniter", "Multi-Property ERP", "Live Platform"],
    gradient: "linear-gradient(135deg,#4f46e5,#2563eb,#0f172a)",
    image: "/images/pg/01_pg.webp",
    images: [
      "/images/pg/01_pg.webp"
      // Add extra screenshots here when placed in public/images/pg/
    ],
    gallery: [
      {
        url: "/images/pg/01_pg.webp",
        caption: "Responsive Multi-Device Platform — MacBook Pro, iPad & iPhone Property Operations Dashboard",
        tag: "Multi-Device CRM Interface",
        badge: "Screen 01 · Executive Dashboard & Operations"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "80%", label: "Admin Reduction" },
      { value: "0%", label: "Rent Leakage" },
      { value: "100%", label: "KYC Compliance" },
      { value: "100%", label: "Financial Visibility" }
    ],
    challenge: "PG and hostel operators often manage operations using fragmented paper registers, messaging apps, and manual spreadsheets. This leads to missed rent collections and inaccurate arrears tracking, overbooking & confusion regarding bed availability across shared rooms, scattered tenant documents with missing identity proofs (Aadhar/PAN) and police verification risks, and no real-time financial clarity on monthly operational expenses, net profit, or security deposit liabilities.",
    solution: "StayFlow CRM eliminates manual administration with an integrated digital operating system: automated recurring billing generating sequential invoices from check-in to checkout; a real-time bed inventory engine auto-updating room capacity as tenants check in or vacate; centralized digital KYC storage with document uploads and printable digital ID badges; and an integrated financial ledger pairing rent collections directly with cash flow and visual Chart.js P&L analytics.",
    deliverables: [
      "Executive Dashboard & Real-Time KPI Analytics with Month/Year AJAX Filters",
      "Multi-Branch & Multi-Property Centralized Management Architecture",
      "Smart Room & Bed Inventory Engine with Live Anti-Overbooking Rules",
      "Tenant Lifecycle Management & Secure Digital KYC Document Vault",
      "Automated Recurring Rent Billing & Multi-Channel Invoice Receipt Engine",
      "Security Deposit Lifecycle Tracker, Exit Settlements & Chart.js P&L Bookkeeping"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter MVC",
      "MySQL Relational DB",
      "Bootstrap 5.3",
      "JavaScript (ES6+ AJAX)",
      "Chart.js",
      "SweetAlert2",
      "Tom-Select",
      "Google Fonts (Poppins)",
      "Bcrypt & RBAC Security",
      "JSON Backup Engine"
    ],
    modules: [
      {
        title: "Executive Dashboard & Real-Time Analytics",
        icon: "i-chart",
        description: "Instant operational visibility with live counters for properties, rooms, active tenants, and bed occupancy percentage paired with dynamic monthly financial snapshots.",
        features: [
          "Live KPI counter cards tracking Total Properties, Rooms, Active Tenants, and Bed Occupancy %",
          "Monthly Financial Snapshot: Expected Revenue, Pending Rent Bills, Income, Expenses, and Net P&L",
          "Dual Month & Year AJAX interactive date selector enabling instant historical analysis without page reloads",
          "Recent admissions feed displaying latest check-ins with tenant photos, room numbers, and property names"
        ]
      },
      {
        title: "Multi-Property & Branch Management",
        icon: "i-code",
        description: "Manage multiple PG buildings, hostels, or rental properties under a unified master administrative account with independent operational metrics.",
        features: [
          "Multi-branch property profiles capturing property name, code, physical address, and contact details",
          "Live branch aggregations calculating active rooms, occupied beds, and tenant headcount per branch",
          "Centralized operational oversight with per-property occupancy and cash flow segregation",
          "Scalable branch expansion supporting rapid onboarding of new properties and room configurations"
        ]
      },
      {
        title: "Smart Room & Bed Inventory Engine",
        icon: "i-box",
        description: "Flexible room inventory management across floors and sharing types with automatic bed occupancy synchronization and anti-overbooking enforcement.",
        features: [
          "Flexible configuration for Single, Double, Triple, and Multi-sharing room types with custom base pricing",
          "Automatic occupancy synchronization: counts occupied vs. available beds and auto-flips status to Available/Occupied",
          "Strict anti-overbooking engine enforcing room capacities and preventing assignments to full rooms",
          "Room 360° detail view: inspect all current roommates, payment statuses, and execute direct bed assignments"
        ]
      },
      {
        title: "Tenant Lifecycle Management & Digital KYC",
        icon: "i-users",
        description: "End-to-end tenant onboarding with verified identity documents, emergency contact archives, internal room transfers, and printable digital ID badges.",
        features: [
          "Comprehensive tenant profiles capturing DOB, occupation, college/employer, and permanent address",
          "Paperless identity vault storing avatar, Aadhar Card, PAN Card, and Police Verification documents (2MB validation)",
          "Printable digital ID cards generating branded tenant identity badges with photo and room info",
          "Seamless internal room transfers between rooms or properties with automated bed occupancy rebalancing"
        ]
      },
      {
        title: "Automated Recurring Rent Billing & Invoicing",
        icon: "i-credit",
        description: "Automated sequential monthly billing cycles aligning all active tenants, multi-channel payment logging, and printable rent receipts.",
        features: [
          "Automatic billing synchronization generating sequential monthly rent bills from check-in through checkout",
          "Configurable global rent due day policy (1st, 5th, 10th, 15th) automatically aligning all tenant invoices",
          "Multi-channel payment recording (Cash, UPI, Bank Transfer, Cheque) with transaction UTR and slip upload",
          "Printable rent receipts modal and automated ledger posting to the financial Income stream"
        ]
      },
      {
        title: "Security Deposit Lifecycle & Exit Settlements",
        icon: "i-shield",
        description: "Track security deposit payment status, advance collections, and tenant checkout exit settlements with damage/arrear deductions.",
        features: [
          "Advance collection tracking (Pending, Paid, Refunded) with payment dates and UTR references",
          "Automated deposit booking posting directly into financial cash flow streams upon receipt",
          "Exit settlement processing during tenant checkout with room inspection deductions and refund recording",
          "Real-time refund expense logging ensuring accurate cash flow and deposit liability records"
        ]
      },
      {
        title: "Vacated Tenants Historical Archive",
        icon: "i-search",
        description: "Permanent audit archive maintaining past tenant stays, settlement summaries, and historical billing statements for regulatory compliance.",
        features: [
          "Permanent audit trail retaining check-in/checkout dates, assigned rooms, and settlement records",
          "Historical billing statements and payment logs accessible at any time for verification",
          "Instant AJAX search across archived records by tenant name, mobile number, or email address",
          "Regulatory compliance support for local administrative and police verification audits"
        ]
      },
      {
        title: "Income, Expense & P&L Bookkeeping",
        icon: "i-pie",
        description: "Dual cash flow logging for operational costs and rent revenues with interactive 6-month visual trajectory charts powered by Chart.js.",
        features: [
          "Categorize income sources and daily property expenses (maintenance, electricity, groceries, Wi-Fi, repairs)",
          "Visual trajectory charting with interactive 6-month revenue vs. expense lines powered by Chart.js",
          "Flexible financial statement filtering by Property, Month, or custom date ranges (From - To)",
          "Built-in CSV data export for offline accounting and clean printable financial summaries"
        ]
      },
      {
        title: "System Settings, Security & Data Portability",
        icon: "i-cpu",
        description: "Custom property branding, dark/light theme toggle, 10-year persistent encrypted authentication, and one-click JSON backup/restore.",
        features: [
          "Branding & localization: custom CRM name, property logo, and currency symbols (₹, $, €)",
          "Modern Dark Mode & Light Mode support with saved user preference tokens",
          "10-year persistent encrypted 'Remember Me' authentication token for seamless workflow",
          "One-click complete JSON system backup and restore (Properties, Rooms, Tenants, Invoices, Settings)"
        ]
      }
    ],
    resultsTable: [
      { metric: "Administrative Overhead", before: "Manual paper registers & Excel ledgers", after: "80% reduction via automated recurring billing & workflows" },
      { metric: "Rent Collection Leakage", before: "Frequent missed billing cycles & unrecorded cash", after: "0% leakage (automated bill generation & UTR reconciliation)" },
      { metric: "KYC & Identity Verification", before: "Physical paper copies & scattered WhatsApp photos", after: "100% paperless vault with printable digital ID cards" },
      { metric: "Room & Bed Occupancy Tracking", before: "Spreadsheet desync causing overbooking", after: "Real-time bed-level synchronization with zero double-booking" },
      { metric: "Financial P&L Clarity", before: "End-of-month guesswork on expenses & deposits", after: "100% real-time net profit calculation with Chart.js trends" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) with Bed-Level Inventory & Ledger Sync",
      highlights: [
        "Role-Based Access Control: Strict isolation between Administrator roles and branch manager permissions",
        "Relational Schema Integrity: Normalized MySQL schema with foreign keys maintaining room, bed, and tenant consistency",
        "Enterprise Security: Bcrypt password hashing, session invalidation, SQL injection prevention via CI Active Record, and strict 2MB MIME upload verification",
        "Financial Ledger Automation: Transactional hooks ensuring every rent bill payment or security deposit automatically posts to the Income/Expense ledger",
        "One-Click Data Portability: Complete system backup and restoration engine exporting clean JSON snapshots across all tables"
      ]
    },
    testimonial: {
      quote: "StayFlow CRM transformed how we manage our 4 PG properties across 180+ beds. Rent billing used to take days of manual tracking, but now invoices generate automatically on the 1st of every month. Tenant KYC is completely paperless, and our net profit is crystal clear in real time.",
      author: "StayFlow Property Management",
      role: "Managing Partner & Operations Head",
      company: "StayFlow Living Spaces"
    }
  },
  {
    id: "nandani",
    slug: "nandani",
    seoTitle: "Nandani: Appliance Portal Case Study",
    serviceSlug: "website-development",
    category: "Website Development",
    title: "Nandani — Kitchen Appliance Portal",
    subtitle: "B2B Kitchen Appliance Distribution Portal & Enterprise CMS",
    client: "Nandani Kitchen Appliances Pvt. Ltd.",
    industry: "Manufacturing & B2B Distribution / Kitchen Appliances",
    duration: "8 Weeks",
    country: "India",
    website: "https://nandaniindia.co.in/",
    domain: "nandaniindia.co.in",
    description: "An enterprise-grade corporate portal and digital distribution platform featuring an interactive multi-brand product catalog, dealer onboarding funnel, and custom role-secured Admin CMS.",
    shortPitch: "Nandani Kitchen Appliances is an enterprise-grade corporate portal and digital distribution platform developed for a leading kitchenware distributor with a 35+ year manufacturing legacy. The solution features an interactive, filterable multi-brand product catalog, a structured dealer onboarding and distributor application engine, a multimedia corporate facility showcase, and a role-secured Admin CMS with real-time lead tracking and inventory controls.",
    tags: ["B2B Distribution", "PHP / CodeIgniter", "Bootstrap 5", "Enterprise CMS"],
    gradient: "linear-gradient(135deg,#dc2626,#991b1b,#1e1b4b)",
    image: "/images/nandani/01_nandani.webp",
    images: [
      "/images/nandani/01_nandani.webp"
      // Add extra screenshots here when placed in public/images/nandani/
    ],
    gallery: [
      {
        url: "/images/nandani/01_nandani.webp",
        caption: "Responsive Multi-Device Platform — MacBook Pro, iPad & iPhone B2B Distribution Portal",
        tag: "Multi-Device Showcase",
        badge: "Screen 01 · Corporate Portal Overview"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "100%", label: "Digital Catalog Access" },
      { value: "35+ Yrs", label: "Legacy Communicated" },
      { value: "2x", label: "Dealer Inquiries" },
      { value: "<1 min", label: "CMS Content Updates" }
    ],
    challenge: "Nandani Kitchen Appliances transitioned from an established manufacturer with an 8,000 sq. meter facility in Khatwad, Nashik into a major authorized distribution powerhouse across Maharashtra and Western India distributing Greenchef, Kanchan, Marlex, and Nandani. They faced critical operational hurdles: a dispersed catalog making it difficult to showcase hundreds of SKUs (gas stoves, cookers, non-stick, triply cookware) without online checkout; the absence of a structured qualification workflow for new retail and wholesale distributor applications; the need to communicate a 35+ year manufacturing background (since 1988) alongside modern distribution capabilities; and content management bottlenecks requiring an intuitive, no-code backend so non-technical staff could update slides, brands, and products without developer assistance.",
    solution: "We designed and engineered a custom, high-performance web platform utilizing CodeIgniter MVC and Bootstrap 5: an interactive multi-brand product catalog with live category/brand filtering, quick-view modals, and one-click WhatsApp/Call quotation triggers; a multi-step distributor onboarding portal capturing warehouse square footage and regional interest; an interactive corporate legacy timeline tracing their evolution from 1988 with an 8,000 sq. meter virtual facility tour; and a custom role-secured Admin CMS with live KPI counters, dual-pipeline lead CRM (Contact Leads vs. Distributor Applications), and instant slider/catalog management.",
    deliverables: [
      "B2B Multi-Brand Product Catalog with Live Instant Filtering & Quick-Views",
      "Distributor Onboarding Funnel Capturing Storage Space & Location Data",
      "Interactive 35+ Year Corporate Milestone Timeline & 8,000 sq. m Facility Showcase",
      "Role-Secured Custom CodeIgniter Admin CMS with Operational KPI Dashboard",
      "Dual-Pipeline Lead Management CRM (Contact Leads vs. Dealer Applications)",
      "Direct Sales Enablement Suite with One-Click WhatsApp & Call RFQ Triggers"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter 3 MVC",
      "MySQL / MariaDB",
      "Bootstrap 5.3",
      "JavaScript (ES6)",
      "Swiper 11",
      "AOS Animations",
      "Font Awesome 6",
      "Google Fonts (Poppins, Playfair)",
      "CSRF & XSS Security",
      "Apache / Linux LAMP"
    ],
    modules: [
      {
        title: "Smart Product Catalog & Live Filtering",
        icon: "i-shop",
        description: "Dynamic multi-brand catalog supporting Gas Stoves, Mixer Grinders, Cookers, Cooktops, and Air Fryers with instant category/brand filtering and product quick-views.",
        features: [
          "Dynamic category & brand filtering with instant AJAX search and quick-view modals",
          "Promotional product badges (New Arrival, Bestseller) to highlight featured hardware",
          "Direct one-click WhatsApp and call-to-order RFQ triggers for rapid wholesale pricing",
          "Rich technical specifications, multi-image galleries, and authorized brand credentials"
        ]
      },
      {
        title: "Distributor & Dealership Onboarding Portal",
        icon: "i-users",
        description: "Structured B2B onboarding funnel qualifying retail and wholesale partners with eligibility criteria, margin breakdowns, and multi-step applications.",
        features: [
          "Interactive eligibility criteria and dealer advantage breakdown (margins, genuine stock guarantee)",
          "Structured application form capturing warehouse storage capacity (sq. ft.) and regional location",
          "Targeted product category interest selection aligning dealers with optimal inventory mixes",
          "Automated application receipt and routing directly into the administrative CRM pipeline"
        ]
      },
      {
        title: "Interactive Multi-Brand Showcase",
        icon: "i-shield",
        description: "Dedicated authorized distribution showcases for leading national brands including Greenchef, Kanchan, Marlex, and Nandani.",
        features: [
          "Verified authorized distributor badges and establishment credential displays",
          "Dedicated brand profile landing pages with filtered brand-specific SKU listings",
          "Brand partner CMS allowing dynamic logo uploads, establishment years, and category links",
          "High-definition product imagery emphasizing premium craftsmanship and durability"
        ]
      },
      {
        title: "Corporate Legacy & 8,000 sq. m Facility Walkthrough",
        icon: "i-code",
        description: "Interactive corporate timeline and virtual facility showcase communicating a 35+ year manufacturing background from 1988 to modern distribution.",
        features: [
          "Milestone timeline tracing evolution from 1988 Ratnadeep Metal Industries to modern powerhouse",
          "Virtual tour of 8,000 sq. meter Khatwad (Nashik) facility with video walkthrough integration",
          "Filterable multi-category media gallery displaying corporate infrastructure, launches, and events",
          "Interactive leadership and executive suite presentations establishing enterprise credibility"
        ]
      },
      {
        title: "Enterprise Control Panel (Custom Admin CMS)",
        icon: "i-chart",
        description: "Role-secured administrative cockpit providing live operational counters, slider CRUD controls, and catalog management without developer intervention.",
        features: [
          "Operational KPI dashboard tracking active products, brands, categories, and media assets",
          "Hero Slider CMS with drag-and-drop order prioritization, custom banners, and CTA links",
          "Multi-type category manager supporting Products, Galleries, and Brands with Font Awesome icons",
          "Product suite with relational tagging, availability toggles, and promotional badge controls"
        ]
      },
      {
        title: "B2B Lead Pipeline & Dealer CRM",
        icon: "i-credit",
        description: "Dual inquiry pipeline separating general website contact inquiries from high-value wholesale distributor applications with status tracking.",
        features: [
          "Split inquiry pipelines isolating general inquiries from commercial dealership applications",
          "Real-time lead lifecycle workflow tracking inquiries through New ➔ Contacted ➔ Closed",
          "Granular dealer inspection revealing warehouse storage capacity and location data",
          "AJAX search and tabular filtering enabling fast lead qualification and sales team dispatch"
        ]
      },
      {
        title: "Omnichannel Contact & Geo-Routing Engine",
        icon: "i-location",
        description: "Unified communication hub integrating live Google Maps embeds, multi-department telephone routing, and direct WhatsApp click-to-chat.",
        features: [
          "Dynamic multi-department phone and email routing for Sales, Support, and Dealerships",
          "Interactive Google Maps warehouse embed with live operational working hours",
          "Direct WhatsApp click-to-chat integration for immediate sales representative engagement",
          "Centralized configuration CMS allowing instant updates to phone, address, and social links"
        ]
      },
      {
        title: "Security Guard & System Reliability",
        icon: "i-cpu",
        description: "Enterprise application security featuring CodeIgniter Admin_Controller protection, CSRF token validation, and SQL injection prevention.",
        features: [
          "Protected Admin_Controller authentication guard with session timeout invalidation",
          "Bcrypt password hashing and secure administrative profile credential management",
          "Form validation with automated CSRF token security and XSS input sanitization",
          "Parameterized Active Record Query Builder preventing SQL injection across all queries"
        ]
      }
    ],
    resultsTable: [
      { metric: "Product Catalog Access", before: "Printed paper brochures & slow PDFs", after: "100% digital, filterable catalog accessible 24/7 on all devices" },
      { metric: "Distributor Onboarding", before: "Unstructured phone calls & scattered emails", after: "Structured digital funnel capturing storage space & location" },
      { metric: "Brand Legacy Communication", before: "Word-of-mouth & unverified reputation", after: "Interactive 35+ yr timeline & 8,000 sq. m facility virtual tour" },
      { metric: "Content Update Turnaround", before: "Days waiting for web developers", after: "Instant updates via custom no-code CodeIgniter Admin CMS" },
      { metric: "Quotation Response Speed", before: "24–48 hours manual quote generation", after: "Instant WhatsApp & Call-to-Order direct RFQ triggers" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Corporate Distribution Platform & Custom CMS",
      highlights: [
        "Role-Secured Admin Guard: Isolated Admin_Controller authentication guard protecting CMS endpoints from unauthorized access",
        "Relational Catalog Schema: Normalized MySQL database linking products, brands, and multi-level categories with indexed query optimization",
        "Lightweight High-Speed Frontend: Native Bootstrap 5.3 and custom CSS token system delivering sub-second load times without framework bloat",
        "Dual-Pipeline Lead Architecture: Decoupled database schemas separating general inquiries from distributor applications with lifecycle state auditing",
        "Enterprise Security Standards: Automated CSRF token verification, XSS input escaping, and Active Record parameterized query abstraction"
      ]
    },
    testimonial: {
      quote: "The new platform has modernized our entire distribution network. Prospective dealers can easily inspect our 35-year legacy and 8,000 sq. meter Khatwad facility, browse authorized brands like Greenchef and Marlex, and submit qualified distributor applications. Our admin team updates seasonal banners and products in minutes.",
      author: "Nandani Executive Management",
      role: "Managing Director",
      company: "Nandani Kitchen Appliances Pvt. Ltd."
    }
  },
  {
    id: "medicheck",
    slug: "medicheck",
    seoTitle: "Medicheck: Clinical DDI Case Study",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "Medicheck — Clinical DDI Checker",
    subtitle: "Drug-Drug Interaction Checker & Digital Prescription Platform",
    client: "Medicheck Healthcare Solutions",
    industry: "Healthcare, Health-Tech & Clinical Decision Support",
    duration: "10 Weeks",
    country: "India",
    website: "https://medicheck.recomm.in/",
    domain: "medicheck.recomm.in",
    description: "A clinical decision-support platform enabling doctors to build prescriptions with real-time drug-drug interaction alerts graded by clinical severity.",
    shortPitch: "Medicheck is a clinical decision-support web platform that helps doctors prescribe more safely. Doctors register patients, build prescriptions from a searchable drug formulary, and get drug-drug interaction alerts graded by severity before an invoice is generated. A separate admin console manages doctors, the drug registry, the interaction-rule database (with bulk Excel/CSV import), and patient records.",
    tags: ["Health-Tech", "PHP / CodeIgniter", "Clinical DDI Engine", "Live Platform"],
    gradient: "linear-gradient(135deg,#0d9488,#059669,#042f2e)",
    image: "/images/medicheck/01_medicheck.webp",
    images: [
      "/images/medicheck/01_medicheck.webp"
      // Add extra screenshots here when placed in public/images/medicheck/
    ],
    gallery: [
      {
        url: "/images/medicheck/01_medicheck.webp",
        caption: "Responsive Multi-Device Platform — MacBook Pro, iPad & iPhone Clinical DDI Admin & Doctor Console",
        tag: "Clinical Decision Support UI",
        badge: "Screen 01 · Admin Management Console"
      }
      // Additional gallery screens can be added here
    ],
    metrics: [
      { value: "1,800+", label: "Formulary Drugs" },
      { value: "1,100+", label: "Interaction Rules" },
      { value: "100%", label: "Pre-Rx Safety Checks" },
      { value: "<2s", label: "DDI Detection" }
    ],
    challenge: "Medical practitioners face severe clinical risks during consultations: prescribing multiple medications without an instant mechanism to detect adverse drug-drug interactions and their clinical severity; scattered drug registries with unstandardized brand synonyms; slow, manual paper prescription workflows causing high consultation friction; lack of role-segregated access between clinical doctors and regulatory administrators; and the administrative burden of manually maintaining hundreds of interaction rules without bulk import capabilities.",
    solution: "We architected Medicheck on CodeIgniter MVC and Bootstrap 5 as an end-to-end clinical decision-support ecosystem: an automated Drug-Drug Interaction (DDI) checker running normalized pair-matching across 1,100+ clinical rules before finalizing prescriptions, complete with color-coded severity alerts (Mild, Moderate, Severe, Major) and cited medical sources; a multi-tabbed Doctor Prescription Desk with phone auto-fill and live brand autocomplete; automatic formatted prescription invoices with sequential numbering (RX+date+seq) and digital signature stamps; and an enterprise Admin Console featuring bulk Excel/CSV drug and interaction import, duplicate pair rejection, and doctor credential management.",
    deliverables: [
      "Automated Drug-Drug Interaction (DDI) Rule Engine with Severity Alerts",
      "Multi-Tab Doctor Prescription Desk with Phone Lookup & Live Autocomplete",
      "Printable Prescription & Invoice Generator with Unique RX Numbering",
      "Centralized Clinical Admin Console Managing Drug & Interaction Registries",
      "Bulk Excel (.xlsx) and CSV Data Importer with Error & Duplicate Validation",
      "Role-Based Access Control (RBAC) with Strict Per-Doctor Patient Isolation"
    ],
    techStack: [
      "PHP 8",
      "CodeIgniter 3.1 MVC",
      "MySQL / MariaDB",
      "Bootstrap 5.3",
      "JavaScript (ES6 AJAX)",
      "PhpSpreadsheet",
      "SimpleXLSXReader",
      "SweetAlert2",
      "Bcrypt & CSRF Guard",
      "Apache / Linux LAMP"
    ],
    modules: [
      {
        title: "Real-Time Drug-Drug Interaction (DDI) Engine",
        icon: "i-shield",
        description: "Automated clinical safety validator matching proposed drug regimens against a normalized pairwise interaction database before finalizing prescriptions.",
        features: [
          "Pre-finalization interaction verification highlighting Mild, Moderate, Severe, and Major risks",
          "Color-coded clinical alert banners displaying medical contraindications and physiological remarks",
          "Source citations linking interactions directly to verified medical literature (e.g. DrugBank)",
          "Normalized pairwise order algorithm preventing duplicate rule evaluations and false negatives"
        ]
      },
      {
        title: "Doctor Prescription Desk & Multi-Consultation Tabs",
        icon: "i-code",
        description: "High-speed clinical workspace enabling doctors to handle multiple patient consultations concurrently with instant phone-number autofill.",
        features: [
          "Returning patient lookup by mobile number auto-filling demographic profile and medical history",
          "Multi-tabbed consultation interface allowing simultaneous patient intake without losing draft data",
          "Debounced live drug formulary search matching by generic compound, category, or brand synonym",
          "Comprehensive dosage, frequency, duration, special instructions, and duplicate drug alerts"
        ]
      },
      {
        title: "Automatic Prescription & Invoice Generator",
        icon: "i-credit",
        description: "Automated document generation producing official printable prescriptions with unique sequential RX numbering and embedded doctor credentials.",
        features: [
          "Sequential format numbering (RX + date + sequence) guaranteeing tamper-proof prescription tracking",
          "Print-ready clinical layout with clinic letterhead, doctor council number, and digital signature",
          "Comprehensive prescription locking ensuring finalized invoices cannot be modified retroactively",
          "Database transaction architecture ensuring atomic saves across patient, prescription, and items"
        ]
      },
      {
        title: "Clinical History & Excel (.xlsx) Analytics",
        icon: "i-chart",
        description: "Searchable chronological archive of past consultations with date-range filters, invoice re-rendering, and one-click spreadsheet exports.",
        features: [
          "Chronological consultation audit trail with real-time doctor-specific ownership isolation",
          "Interactive date-range filtering and patient search with fast server-side pagination",
          "One-click Excel (.xlsx) export powered by PhpSpreadsheet for clinical reporting and audit compliance",
          "Instant reprint and view capability for past prescription records and interaction history"
        ]
      },
      {
        title: "Enterprise Drug & Formulary Registry CMS",
        icon: "i-box",
        description: "Admin-level drug catalog management with brand synonyms, therapeutic categories, stock tracking, and duplicate prevention.",
        features: [
          "Full CRUD lifecycle for active and formulary drugs with unit, category, and inventory metrics",
          "Brand synonym mapping linking commercially marketed trade names to active pharmacological agents",
          "Case-insensitive duplicate name detection preventing redundant formulary entries",
          "Instant drug activation/deactivation toggles dynamically updating the doctor prescription search"
        ]
      },
      {
        title: "Interaction Rule Library & Bulk Excel Importer",
        icon: "i-cpu",
        description: "Scalable clinical knowledge repository with bulk spreadsheet ingestion, near-miss severity normalization, and conflict resolution.",
        features: [
          "Bulk Excel (.xlsx) and CSV import powered by SimpleXLSXReader with downloadable sample templates",
          "Automated row validation correcting near-miss severity labels and skipping duplicate pairs",
          "Import summary reports detailing successfully ingested rules, skipped conflicts, and errors",
          "Full CSV export capability enabling offline clinical reviews and backup distribution"
        ]
      },
      {
        title: "Doctor & Patient Clinical Governance Console",
        icon: "i-users",
        description: "Administrative oversight desk managing practitioner credentials, medical council verifications, and cross-clinic patient records.",
        features: [
          "Doctor credential verification tracking Medical Council registration numbers and clinic details",
          "Account lifecycle management with password reset, credential modification, and account status toggles",
          "Cross-facility patient master search enabling administrators to inspect patient history",
          "Strict doctor profile management including digital signature uploads (2MB strict validation)"
        ]
      },
      {
        title: "Healthcare Security & Data Integrity Shield",
        icon: "i-shield",
        description: "Rigorous healthcare security architecture featuring bcrypt hashing, CSRF guards, and strict practitioner data isolation.",
        features: [
          "Independent session guards strictly separating Admin_Controller and Doctor_Controller access",
          "Bcrypt password hashing with unique medical registration number and email constraints",
          "Strict doctor data ownership guards: practitioners can only access their own patients and prescriptions",
          "CSRF protection enabled across all forms, disabled browser caching on clinical endpoints, and XSS filtering"
        ]
      }
    ],
    resultsTable: [
      { metric: "Pre-Prescription Safety Check", before: "Manual memory & physical reference books", after: "Automated instant DDI check with 4-level color-coded severity" },
      { metric: "Patient Intake Turnaround", before: "3–5 mins re-typing history and records", after: "Sub-10s auto-fill via phone number lookup" },
      { metric: "Prescription Slip Generation", before: "Handwritten slips prone to legibility issues", after: "100% digital, sequentially numbered (RX) printable invoices" },
      { metric: "Rule Ingestion Speed", before: "Hours manually entering drug interactions", after: "Instant bulk Excel (.xlsx/CSV) import with duplicate rejection" },
      { metric: "Data Privacy & RBAC", before: "Shared unencrypted records", after: "100% doctor-isolated data ownership with bcrypt & CSRF guards" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Clinical Decision Support with Dual-Portal RBAC",
      highlights: [
        "Dual-Portal Controller Isolation: Independent Admin_Controller and Doctor_Controller base classes enforcing strict role authentication",
        "Normalized Interaction Matrix: Unordered pair-matching algorithm ensuring drug pair (A, B) matches identical interaction as (B, A)",
        "Database Transaction Integrity: Multi-table atomic saves (Patient, Prescription, Prescription_Items) wrapped in roll-back transactions",
        "Bulk Excel Data Pipeline: Memory-efficient spreadsheet streaming via PhpSpreadsheet and SimpleXLSXReader with row-by-row validation",
        "Strict Healthcare RBAC: Doctor ownership enforcement preventing unauthorized cross-practitioner access to patient medical histories"
      ]
    },
    testimonial: {
      quote: "Medicheck has transformed how our practitioners prescribe. The automatic drug interaction alert caught a severe interaction between warfarin and an anti-inflammatory on day one. Having returning patient data auto-fill in seconds and printing clean RX slips has cut our consultation overhead by over 60%.",
      author: "Clinical Review Board",
      role: "Chief Medical Officer",
      company: "Medicheck Clinical Portal"
    }
  },
  {
    id: "billbook",
    slug: "billbook",
    seoTitle: "BillsBook: Billing & ERP Case Study",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "BillsBook – Multi-Business Billing, Invoicing & Inventory SaaS",
    client: "BillsBook Accounting Technologies",
    industry: "Retail & Small Business / Accounting & Billing SaaS",
    duration: "10 Weeks",
    country: "India",
    website: "https://billbook.visiontechnolabs.com/",
    domain: "billbook.visiontechnolabs.com",
    description: "High-performance web billing and inventory application for shopkeepers and retail businesses featuring 30-second counter invoicing, instant WhatsApp PDF delivery, and live stock tracking.",
    tags: ["Billing & Invoicing", "Inventory ERP", "WhatsApp Invoicing", "PHP / CodeIgniter", "Dompdf"],
    gradient: "linear-gradient(135deg,#2563eb,#1d4ed8,#0f172a)",
    image: "/images/billbook/01_billbook.webp",
    metrics: [
      { value: "<30s", label: "Counter Billing Speed" },
      { value: "<1%", label: "Stock Discrepancy" },
      { value: "-78%", label: "Paper & Print Overhead" },
      { value: "Instant", label: "WhatsApp Delivery" }
    ],
    challenge: "Small-to-medium retail shopkeepers, wholesalers, and service businesses were handcuffed between cumbersome, overpriced enterprise ERPs (like Tally or SAP) and error-prone handwritten paper bill books. Writing manual receipts led to 18–25% inventory shrinkage, customer disputes over illegible bills, lost customer phone records, and over 45 minutes wasted every evening manually tallying cash drawers and GST records.",
    solution: "Vision engineered BillsBook—a lightweight, lightning-fast counter-billing and multi-tenant inventory SaaS powered by CodeIgniter MVC. The web app empowers shopkeepers to look up items in milliseconds, auto-calculate GST line items, dispatch branded PDF invoices directly to customer WhatsApp numbers, and automatically reconcile stock levels with full financial analytics.",
    deliverables: [
      "Sub-30-Second Counter POS Invoicing Desk with Select2 instant lookup and barcode support",
      "Real-time bidirectional inventory synchronization with low-stock alerts and safety thresholds",
      "4 Branded Vector PDF Invoice Templates (Modern, Classic, Minimalist, Thermal POS) via Dompdf",
      "Automated one-click WhatsApp invoice delivery integration with PDF download links",
      "Multi-tenant data isolation schema allowing seamless multi-business and multi-branch management",
      "Executive visual sales, revenue, profit margin, and payment mode analytics with ApexCharts & Chart.js",
      "Customer ledger management tracking lifetime purchase histories, balances, and aging statements",
      "Complete GST/tax computation engine with automated HSN/SAC code tracking and Excel export"
    ],
    techStack: [
      "PHP 7.4+ / 8.x",
      "CodeIgniter 3.1 MVC",
      "MySQL / MariaDB",
      "Bootstrap 5",
      "JavaScript (ES6+)",
      "jQuery",
      "Select2",
      "SweetAlert2",
      "Dompdf",
      "WhatsApp REST API",
      "Chart.js & ApexCharts",
      "Apache / Linux LAMP"
    ],
    keyModules: [
      {
        title: "Smart Counter Invoicing Desk",
        desc: "High-speed billing interface enabling operators to search items via name or barcode, apply item-level discounts, compute GST/non-GST taxes, and finalize sales in under 30 seconds across Cash, UPI, Card, and Bank Transfer modes.",
        icon: "i-credit"
      },
      {
        title: "Automated Stock & Inventory Engine",
        desc: "Bidirectional inventory management that decrements product stock in real time upon invoice generation and safely replenishes stock upon invoice edit or cancellation, complete with color-coded low-stock threshold alerts.",
        icon: "i-box"
      },
      {
        title: "4 Branded Invoice Templates & WhatsApp Delivery",
        desc: "Pixel-perfect vector PDF generation supporting Modern, Classic, Minimalist, and 58/80mm Thermal POS slip layouts with company branding, dynamic UPI QR codes, and instant 1-click WhatsApp customer delivery.",
        icon: "i-code"
      },
      {
        title: "Sales & Gross Profit Analytics Dashboard",
        desc: "Comprehensive executive visual reporting powered by ApexCharts and Chart.js revealing daily revenue trends, best-selling product rankings, payment mode breakdowns, customer aging balances, and net profit margins.",
        icon: "i-chart"
      },
      {
        title: "Multi-Tenant Architecture & Data Isolation",
        desc: "Secure multi-business database partitioning ensuring every store owner retains 100% segregated catalog, client, and billing data with role-based access control, bcrypt encryption, and CSRF token security.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Counter Invoicing Speed", before: "3–5 mins manual handwritten bills", after: "<30 seconds with auto-fill & tax calculation" },
      { metric: "Stock Discrepancy Rate", before: "18–25% untracked inventory shrinkage", after: "<1% real-time automated stock sync" },
      { metric: "Paper & Stationery Cost", before: "₹12,000+ monthly pre-printed stationery", after: "78% cost drop via direct WhatsApp PDF delivery" },
      { metric: "Daily Sales Settlement", before: "45+ mins manual register reconciliation", after: "Instant 1-click end-of-day revenue audit" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Multi-Tenant Billing Engine with Automated Stock Transactions",
      highlights: [
        "Multi-Tenant Partitioning: Strict business_id scoping across all queries guaranteeing 100% data isolation across independent shopkeeper accounts",
        "Atomic Stock Transactions: Database transaction locks wrapping invoice creation and stock quantity decrements to eliminate race conditions",
        "Vector PDF Rendering Engine: Optimized Dompdf rendering pipeline producing crisp, lightweight printable bills and thermal POS receipts",
        "Direct WhatsApp Gateway Integration: URL-encoded mobile dispatch mechanism delivering bills directly to customer phones with zero paper waste",
        "Asynchronous Counter Search: Select2 AJAX-driven product indexing returning matching catalog items in under 50ms without page reloads"
      ]
    },
    testimonial: {
      quote: "BillsBook has completely eliminated billing chaos in our store. Our staff generates GST invoices in seconds, stock updates automatically without stockouts, and customers love receiving beautiful PDF bills directly on their WhatsApp.",
      author: "Retail Operations Director",
      role: "Store Owner & Distributor",
      company: "BillsBook Client Store"
    }
  },
  {
    id: "ghanshyammurtibhandar",
    slug: "ghanshyammurtibhandar",
    seoTitle: "Ghanshyam Murti: E-Commerce Case Study",
    serviceSlug: "ecommerce-solutions",
    category: "Ecommerce Solutions",
    title: "Ghanshyam Murti Bhandar – Marble Murti E-Commerce Platform",
    subtitle: "Handcrafted Devotional Marble Idols E-Commerce, 50+ REST APIs & Multi-Panel Admin",
    client: "Ghanshyam Murti Bhandar, Rajkot, Gujarat, India",
    industry: "Devotional Articles, Marble Idols & Sculptures / Retail & E-Commerce",
    duration: "12 Weeks",
    country: "India",
    website: "https://ghanshyammurtibhandar.com",
    domain: "ghanshyammurtibhandar.com",
    description: "A full-stack devotional e-commerce ecosystem built for Rajkot marble artisans, featuring a customer web storefront, 50+ mobile app REST APIs, automated Shiprocket courier logistics, Razorpay/COD payments, and role-separated Admin and Retailer suites.",
    shortPitch: "Ghanshyam Murti Bhandar is an enterprise-grade devotional e-commerce platform engineered for a premier Rajkot-based artisan of handcrafted white marble idols and temple sculptures. It unifies a responsive customer storefront, a 50+ endpoint mobile REST API, Shiprocket shipping automation with live tracking webhooks, mobile OTP authentication, and multi-panel Admin and Retailer consoles for managing orders, low stock, distributors, and transit damage resolutions.",
    tags: ["Marble Murti E-Commerce", "CodeIgniter 3", "REST API", "Shiprocket", "Razorpay", "Live Platform"],
    gradient: "linear-gradient(135deg, #b45309, #78350f)",
    image: "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.webp",
    images: [
      "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.webp"
    ],
    gallery: [
      {
        url: "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.webp",
        caption: "Responsive Devotional E-Commerce Ecosystem — Storefront, Multi-Panel Admin & Mobile REST API",
        tag: "Devotional Storefront & API",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "50+", label: "Mobile REST Endpoints" },
      { value: "100%", label: "Shiprocket Automated Sync" },
      { value: "250+", label: "Application Routes" },
      { value: "0", label: "Manual Courier Booking" }
    ],
    challenge: "Selling fragile, heavy, handcrafted marble idols online presents severe operational hurdles: marble idols and temple sculptures carved from fine white Rajkot marble require exact weight- and size-based logistics rates, heavy-duty wooden crating workflows, and a fair, structured claims pipeline for rare transit damage; the business needed both the website and a companion mobile app to share a synchronized product, cart, order, and customer database; customers required trust in high-value spiritual purchases through both Cash on Delivery (COD) and Razorpay online payments with instant GST invoices; manual courier booking and AWB updates were completely unscalable; and the enterprise needed to onboard nationwide distributors, manufacturers, and partners while empowering non-technical staff to control banners, offers, and inventory without developers.",
    solution: "Vision engineered an end-to-end CodeIgniter 3 MVC ecosystem divided into four interconnected pillars: a responsive, high-converting customer web storefront with OTP-based passwordless login and cart drawer; a comprehensive JSON REST API suite comprising 50+ JWT-secured endpoints powering the mobile app; direct Shiprocket logistics integration automating pincode serviceability checks, automated courier assignment, pickup scheduling, AWB label generation, and live webhook tracking; and role-separated Admin and Retailer management portals managing products, inventory, coupons, low-stock alerts, distributor/manufacturer onboarding, and damage evidence reviews.",
    deliverables: [
      "Customer E-Commerce Web Storefront with Mobile OTP Authentication & Cart Drawer",
      "Headless Mobile App REST API Suite (50+ JWT-secured endpoints with guest browsing)",
      "Automated Shiprocket Logistics & Courier Webhook Live Tracking Engine",
      "Razorpay Online Payment Gateway Integration & Cash on Delivery (COD) Support",
      "Role-Based Admin Console with Low-Stock Alerts & Chart.js Financial Analytics",
      "Dedicated Retailer Portal with Isolated Product Catalogs & Order Management",
      "Transit Damage Claims Review Pipeline with Customer Photo & Video Evidence Logging",
      "Automated TCPDF Vector GST Tax Invoice & Courier Shipping Label Generator"
    ],
    techStack: [
      "PHP 7.4 / 8.x",
      "CodeIgniter 3.1.13 MVC",
      "MySQL / MariaDB",
      "Bootstrap 5.3",
      "RESTful API & JSON",
      "JWT (firebase/php-jwt)",
      "Shiprocket API & Webhooks",
      "Razorpay Gateway API",
      "SMS OTP Authentication",
      "TCPDF Engine",
      "Chart.js 4.4",
      "SweetAlert2",
      "Summernote Editor"
    ],
    modules: [
      {
        title: "Customer Web Storefront & Devotional Catalog",
        icon: "i-shopping-bag",
        description: "Artisan-crafted showcase highlighting fine white Rajkot marble idols, temple murti dimensions, Vastu guidance, and secure checkout.",
        features: [
          "Category-wise product catalog with dimensions, weight, marble grade, and Vastu orientation",
          "Dynamic cart drawer with instant pincode delivery charge lookup and coupon code application",
          "Dual payment checkout supporting verified Razorpay gateway transactions and Cash on Delivery",
          "Passwordless customer authentication using mobile number SMS OTP verification"
        ]
      },
      {
        title: "Mobile App REST API Suite (50+ Endpoints)",
        icon: "i-code",
        description: "High-performance backend API serving the companion mobile application with shared real-time database state.",
        features: [
          "50+ secure JSON endpoints covering catalog, carts, orders, user profiles, and address books",
          "Guest browsing support allowing prospective devotees to explore and add to cart before logging in",
          "JWT bearer token authentication with server-side token blacklisting and device tracking",
          "Shiprocket webhook receiver automatically ingesting courier status milestones without polling"
        ]
      },
      {
        title: "Shiprocket Logistics Automation & Live AWB Tracking",
        icon: "i-truck",
        description: "Zero-touch shipping workflow handling heavy and fragile devotional marble crating and courier dispatch.",
        features: [
          "Instant pincode serviceability and automated weight-based courier rate calculation",
          "1-click courier assignment, pickup request scheduling, and automated AWB number generation",
          "Real-time webhook sync pushing tracking milestones directly to customer accounts and SMS",
          "Automated TCPDF shipping label and tax invoice generation ready for crate attachment"
        ]
      },
      {
        title: "Role-Based Admin Command Center & Analytics",
        icon: "i-layout",
        description: "Centralized operations hub giving management instant visibility across inventory, sales, and supply chain partners.",
        features: [
          "Executive analytics dashboard with sales summaries, order stage counts, and low-stock alerts",
          "Comprehensive product CRUD with multiple image uploads, GST rates, HSN codes, and specifications",
          "Promotions engine managing coupon discount rules, percentage vouchers, and banner carousels",
          "Customer 360° console logging past orders, cancellation requests, and lifetime expenditure"
        ]
      },
      {
        title: "Damage & Refund Claims Audit Pipeline",
        icon: "i-shield",
        description: "Transparent, fair damage resolution workflow specifically designed for fragile high-value marble transit.",
        features: [
          "Customer portal allowing photo and unboxing video evidence uploads for transit claims",
          "Admin investigation console with side-by-side evidence inspection and carrier dispute logging",
          "Structured resolution workflow: approve replacement, approve refund, or add audit remarks",
          "Comprehensive resolution history log preventing fraudulent claims while protecting loyal buyers"
        ]
      },
      {
        title: "Distributor, Manufacturer & Retailer Network Portal",
        icon: "i-users",
        description: "Enterprise B2B onboarding engine expanding regional distribution and wholesale partnerships.",
        features: [
          "Distributor application portal capturing GSTIN, PAN, business registrations, and territory scope",
          "Manufacturer portal reviewing production capacity, MOQ, dispatch lead time, and factory photos",
          "Independent Retailer Portal providing isolated product catalogs, orders, and branded slips",
          "Partner and investor management module tracking agreements, capital, and profit disbursements"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "One Platform, Dual Sales Channels",
        desc: "Web storefront and native mobile app communicate with a synchronized CodeIgniter backend, ensuring real-time stock deductions and unified order tracking.",
        icon: "i-layers"
      },
      {
        title: "Automated Shiprocket Logistics & Webhooks",
        desc: "Courier assignment, weight calculation, pickup requests, and live delivery status updates run autonomously without manual phone calls or spreadsheet tracking.",
        icon: "i-truck"
      },
      {
        title: "Passwordless SMS OTP Verification",
        desc: "Frictionless mobile number OTP login across customer accounts, retailer portals, and delivery verifications eliminates password resets and checkout abandonments.",
        icon: "i-smartphone"
      },
      {
        title: "Structured Marble Damage Evidence Console",
        desc: "Customers upload unboxing videos and transit photos directly in-app, allowing the operations team to verify claims, replace murtis, and recover courier insurance.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Courier Booking Time", before: "15–20 mins per crate manual courier booking", after: "Instant 1-click Shiprocket AWB & label generation" },
      { metric: "Mobile API Response Time", before: "No mobile capability (isolated web-only)", after: "<120ms average JSON response across 50+ endpoints" },
      { metric: "Damage Claim Resolution", before: "5–7 days phone disputes & uncoordinated claims", after: "Same-day photo/video evidence audit & replacement" },
      { metric: "Catalog & Content Updates", before: "Required developer code edits for banners & offers", after: "100% self-service admin control in real time" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Omnichannel Architecture with Role-Separated Controllers & JWT REST API",
      highlights: [
        "Shared Data Model: Single relational MySQL schema powering both MVC blade views and headless JSON endpoints",
        "JWT Stateless API: firebase/php-jwt tokens with Redis/DB token blacklist for instant mobile revocation",
        "Event-Driven Webhook Processing: Asynchronous Shiprocket status updates updating order milestones in real time",
        "TCPDF Vector Rendering: Print-ready vector shipping labels and GST compliant tax invoices with barcode sync",
        "CSRF & Sanitization Shield: Rigorous form validation, PDO parameterization, and secure MIME type verification"
      ]
    },
    testimonial: {
      quote: "Shipping delicate, heavy marble murtis across India used to be our biggest worry. Vision delivered a rock-solid platform: our customers order effortlessly on web and mobile, shipments book automatically through Shiprocket, and our admin team controls everything smoothly.",
      author: "Proprietor & Master Artisan",
      role: "Managing Director",
      company: "Ghanshyam Murti Bhandar"
    }
  },
  {
    id: "automobile",
    slug: "automobile",
    seoTitle: "Venus Automotive: Fleet ERP Case Study",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "Venus Automotive – Fleet Service & Parts ERP Portal",
    subtitle: "Automotive Dealership, Service Center CRM & Spare Parts Inventory Platform",
    client: "Venus Motors & Auto Spares Pvt. Ltd.",
    industry: "Automotive, Vehicle Telematics & Fleet Aftermarket",
    duration: "10 Weeks",
    country: "India",
    website: "https://venusautomobile.com",
    domain: "venusautomobile.com",
    description: "An end-to-end automotive dealership and workshop ERP featuring digital job cards, real-time bay allocation, spare parts barcode inventory, and WhatsApp service update dispatch.",
    shortPitch: "Venus Automotive ERP streamlines multi-bay garage operations and auto spare parts warehousing. It equips mechanics with digital tablet job cards, parts managers with barcode inventory tracking, and vehicle owners with automated WhatsApp service milestones, itemized estimates, and online UPI payment reconciliation.",
    tags: ["Automotive ERP", "Job Card CRM", "Parts Inventory", "WhatsApp Updates", "Live Platform"],
    gradient: "linear-gradient(135deg, #0284c7, #0f172a)",
    image: "/images/automobile/01_automobile.webp",
    images: [
      "/images/automobile/01_automobile.webp"
    ],
    gallery: [
      {
        url: "/images/automobile/01_automobile.webp",
        caption: "Multi-Device Showcase — Workshop Job Card Console, Inventory Suite & Customer Portal",
        tag: "Workshop & Inventory Suite",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "3x", label: "Faster Bay Turnaround" },
      { value: "100%", label: "Barcode Inventory Sync" },
      { value: "<30s", label: "Job Card Creation" },
      { value: "98%", label: "Customer Estimate Approval" }
    ],
    challenge: "Automotive service centres and spare parts distributors grapple with chaotic garage floors: handwritten paper job cards lead to lost customer complaint notes, missing diagnostic records, and delayed mechanic assignments; spare parts stock shrinkage goes undetected without barcode bin-tracking; vehicle owners repeatedly call for status updates; and reconciling labour charges, lubricants, OEM parts, and GST across cash, cards, and UPI delays checkout handovers.",
    solution: "Vision engineered an integrated automotive workshop and dealership ERP that digitizes vehicle intake via license plate lookup, creates digital job cards with pre-service inspection photos, tracks repair bay capacity in real-time, synchronizes spare parts inventory through barcode scanners, and dispatches automated WhatsApp updates with digital payment links directly to vehicle owners.",
    deliverables: [
      "Digital Vehicle Intake & License Plate History Lookup Engine",
      "Interactive Workshop Bay Allocation & Mechanic Job Card System",
      "Spare Parts Warehouse Module with Barcode & Bin Location Tracking",
      "Automated Customer WhatsApp Status Milestone & Estimate Approvals",
      "Integrated Invoicing with Labour, Parts GST & Dynamic UPI QR Codes",
      "Fleet Maintenance Contract & Periodic Service Reminder Scheduler"
    ],
    techStack: [
      "PHP 8.2",
      "CodeIgniter MVC",
      "MySQL Relational DB",
      "Bootstrap 5.3",
      "JavaScript (ES6+)",
      "WhatsApp Business API",
      "JsBarcode & QuaggaJS",
      "Razorpay Gateway",
      "Dompdf Vector Invoices",
      "Chart.js 4.4"
    ],
    modules: [
      {
        title: "Digital Vehicle Intake & Job Card Engine",
        icon: "i-car",
        description: "Fast customer check-in with license plate auto-fill, odometer capture, fuel level gauge, and scratch/dent inspection diagram.",
        features: [
          "Vehicle registration number lookup with complete historical service records",
          "Visual interactive dent/scratch checklist logged before vehicle moves to service bay",
          "Customer complaint tagger with priority flags and technician assignment",
          "Instant digital estimate generation sent to customer phone for one-tap approval"
        ]
      },
      {
        title: "Workshop Bay Capacity & Mechanic Dispatch",
        icon: "i-tool",
        description: "Real-time visual workshop board displaying available service bays, ramp occupancy, and mechanic work timers.",
        features: [
          "Drag-and-drop bay management board (Inspection, Mechanical, Electrical, Washing)",
          "Technician clock-in/clock-out tracking actual repair time versus estimated labour hours",
          "Live stage monitoring: Intake → Diagnosis → Parts Requisition → Repair → QC → Wash → Ready",
          "Quality check (QC) supervisor sign-off checklist prior to gate pass generation"
        ]
      },
      {
        title: "Spare Parts Inventory & Barcode Bin Tracking",
        icon: "i-layers",
        description: "Warehouse stock management with OEM part number cross-referencing, reorder alerts, and bin locations.",
        features: [
          "Barcode and QR code scanner integration for rapid part check-in and job card requisition",
          "Multi-bin warehouse topology with aisle, rack, shelf, and bin location tracking",
          "Automated low-stock notifications and supplier purchase order generation",
          "Batch, expiry, and warranty tracking for lubricants, batteries, and critical assemblies"
        ]
      },
      {
        title: "Automated WhatsApp Milestones & Payment Gateway",
        icon: "i-smartphone",
        description: "Direct customer communication pipeline keeping vehicle owners informed at every step.",
        features: [
          "Automated WhatsApp messages sent on job card created, estimate ready, repair done, and vehicle ready",
          "Interactive PDF estimate link where customers can approve or decline individual repair items",
          "Razorpay online payment and dynamic UPI QR code printed directly on invoice",
          "Digital gate pass verification code generated upon payment receipt for vehicle release"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Digital Tablet Job Cards",
        desc: "Service advisors complete vehicle intake in under 60 seconds with photographic inspection proof and customer digital sign-off.",
        icon: "i-tablet"
      },
      {
        title: "Barcode-Driven Parts Requisition",
        desc: "Eliminates parts leakage by requiring technician barcode scan before spare parts can be checked out from the store.",
        icon: "i-barcode"
      },
      {
        title: "Proactive WhatsApp Customer Notifications",
        desc: "Reduces inbound customer phone inquiries by 85% by broadcasting automatic photo and status updates throughout the repair cycle.",
        icon: "i-message-square"
      },
      {
        title: "Fleet Service Contract Management",
        desc: "Automates scheduled periodic maintenance intervals, oil changes, and fleet billing accounts for commercial vehicle operators.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Job Card Creation Time", before: "10–15 mins manual paperwork per car", after: "<60 seconds via tablet digital intake" },
      { metric: "Spare Parts Shrinkage", before: "12–15% untracked parts variance", after: "<0.5% with mandatory barcode requisition" },
      { metric: "Inbound Status Phone Calls", before: "40+ calls daily from inquiring customers", after: "85% reduction via automated WhatsApp alerts" },
      { metric: "Billing & Gate Pass Turnaround", before: "15 mins cashier calculation per delivery", after: "Instant 1-click invoice and digital gate pass" }
    ],
    architectureDetails: {
      pattern: "Model-View-Controller (MVC) Automotive ERP with Real-Time Workshop State Sync & WhatsApp Webhooks",
      highlights: [
        "Relational Schema: Normalized database linking vehicle VINs, owners, job cards, parts requisitions, and payments",
        "Barcode Scanner Engine: High-speed barcode scanning supporting standard USB barcode guns and mobile cameras",
        "WhatsApp Cloud API: RESTful notification engine dispatching media templates and interactive estimate approval buttons",
        "Dompdf Vector Engine: Print-ready job sheets, parts requisition slips, and GST tax invoices",
        "Role-Based Access: Dedicated portals for Service Advisors, Mechanics, Parts Managers, Cashiers, and Workshop Admins"
      ]
    },
    testimonial: {
      quote: "Venus Automotive ERP transformed our busy service center. Our workshop bays run at peak efficiency, spare parts are tracked down to the exact bin, and our customers love getting real-time WhatsApp updates with photos of their vehicle service.",
      author: "Service Operations Head",
      role: "General Manager",
      company: "Venus Motors Pvt. Ltd."
    }
  },
  {
    id: "ananyahomeservice",
    slug: "ananyahomeservice",
    seoTitle: "Anaya Home Service Case Study",
    serviceSlug: "website-development",
    category: "Website Development",
    title: "Anaya Home Service – Interior Design & Home Finishing Website",
    subtitle: "Corporate Interior Design Showcase, 10-Service Catalog & Multi-Channel Lead Engine",
    client: "Anaya Home Service, New Ranip, Ahmedabad, Gujarat",
    industry: "Interior Design, Home Improvement & Home Services",
    duration: "4 Weeks",
    country: "India",
    website: "https://ananyahomeservice.com",
    domain: "ananyahomeservice.com",
    description: "A responsive corporate business and lead generation website for an Ahmedabad-based interior design and home-finishing company, showcasing 10 specialized residential services, project galleries, video testimonials, and instant WhatsApp & click-to-call booking workflows.",
    shortPitch: "Anaya Home Service is a responsive business website built for an interior design and home-finishing company in New Ranip, Ahmedabad. Engineered with WordPress and Elementor for effortless no-code content management, it presents ten service categories, a project gallery, a YouTube video testimonial section, an FAQ, and a blog—complete with a 'Book Appointment' funnel, contact forms, one-tap WhatsApp chat, click-to-call, and Google Maps location routing to turn local visitors into qualified enquiries.",
    tags: ["WordPress & Elementor", "Interior Design", "Lead Generation", "WhatsApp Integration", "Live Platform"],
    gradient: "linear-gradient(135deg, #d97706, #78350f)",
    image: "/images/ananyahomeservice/01_ananyahomeservice.webp",
    images: [
      "/images/ananyahomeservice/01_ananyahomeservice.webp"
    ],
    gallery: [
      {
        url: "/images/ananyahomeservice/01_ananyahomeservice.webp",
        caption: "Responsive Multi-Device Showcase — Hero Slider, 10-Service Catalogue & Instant Quote Booking",
        tag: "Corporate & Lead Gen Website",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "10+", label: "Interior Service Verticals" },
      { value: "1–3 BHK", label: "Turnkey Home Coverage" },
      { value: "1-Tap", label: "WhatsApp & Call Leads" },
      { value: "100%", label: "No-Code Self-Managed" }
    ],
    challenge: "Anaya Home Service offers full-spectrum residential interior design and home-finishing work—spanning kitchens, bedrooms, living rooms, wardrobes, pooja rooms, dining rooms, home offices, bathrooms, balconies, and complete 1–3 BHK homes in Ahmedabad. However, the company lacked a digital presence: local homeowners searching online for interior contractors had no website to discover, trust, or contact them; explaining ten distinct trades (Colour, Lighting, Texture, Design, Stencil, Tiles, Waterproofing, POP, PVC Furniture, and Plumbing) required structured, dedicated pages; prospective clients needed fast, frictionless ways to request quotes via web form, phone call, or WhatsApp; and the business owner needed to update text, portfolio photos, and blog articles without developer assistance.",
    solution: "Vision built a modern, mobile-responsive corporate and lead-generation website powered by WordPress and Elementor. The platform combines a high-converting hero slider with dual CTAs, dedicated pages for all 10 interior and finishing services, an interactive project portfolio gallery, embedded YouTube video testimonials, a homeowner FAQ section, and multi-channel conversion touchpoints—including 'Book Appointment' buttons across every page, one-tap prefilled WhatsApp chat, mobile click-to-call links, and an embedded Google Maps location guide.",
    deliverables: [
      "Responsive WordPress & Elementor Corporate Website with No-Code Editing",
      "10 Dedicated Interior & Home-Finishing Service Pages (Colour, Light, Texture, POP, PVC & More)",
      "Interactive Project Portfolio Gallery with Detailed Showcase Pages",
      "Multi-Channel Lead Capture Engine (Book Appointment CTAs & Enquiry Forms)",
      "One-Tap Prefilled WhatsApp Chat & Mobile Click-to-Call Integration",
      "Embedded YouTube Video Testimonial Showcase, Homeowner FAQ & SEO Blog",
      "Next-Gen WebP & AVIF Image Optimization & Interactive Google Maps Embed"
    ],
    techStack: [
      "WordPress CMS",
      "Elementor Page Builder",
      "PHP & MySQL",
      "HTML5 & CSS3",
      "JavaScript (ES6)",
      "WebP & AVIF Image Optimization",
      "WhatsApp Click-to-Chat API",
      "Click-to-Call Telephony",
      "Google Maps Embed API",
      "YouTube Video Embed",
      "Google Fonts"
    ],
    modules: [
      {
        title: "Public Website & 10-Service Catalogue",
        icon: "i-layers",
        description: "Comprehensive showcase of residential interior design and finishing trades structured for easy homeowner navigation.",
        features: [
          "High-impact hero slider with strong value proposition and dual CTAs (View Services & Contact Us)",
          "Dedicated pages for 10 core services: Colour, Light, Texture, Design, Stencil, Tiles, Waterproofing, POP, PVC Furniture & Plumbing",
          "Coverage for kitchens, bedrooms, living rooms, wardrobes, pooja rooms, home offices & 1–3 BHK turnkey homes",
          "About Us & 'Why Choose Us' sections highlighting quality materials, skilled craftsmanship, and team expertise"
        ]
      },
      {
        title: "Project Portfolio, Video Testimonials & Trust Hub",
        icon: "i-camera",
        description: "Visual proof of finishing quality designed to build immediate homeowner confidence and credibility.",
        features: [
          "Filterable project gallery cards linking to dedicated residential interior showcase pages",
          "Customer testimonial section featuring embedded YouTube video stories and client reviews",
          "Interactive FAQ accordion answering common homeowner questions on interior timelines and materials",
          "Design tips blog, team member showcase with social profiles, and footer newsletter signup"
        ]
      },
      {
        title: "Multi-Channel Lead Generation & Instant Contact",
        icon: "i-smartphone",
        description: "Frictionless conversion pathways enabling homeowners to request estimates via their preferred communication channel.",
        features: [
          "Prominent 'Book Appointment' CTA in the sticky header and conversion banners across all pages",
          "Structured enquiry forms on Home and Contact pages capturing name, email, phone, address, subject & message",
          "One-tap WhatsApp chat integration with prefilled enquiry text for instant mobile conversations",
          "Direct click-to-call phone triggers, emergency call banners, and embedded Google Maps showroom pin"
        ]
      },
      {
        title: "No-Code Elementor CMS & Media Optimization",
        icon: "i-layout",
        description: "Self-service content administration paired with modern image compression for fast mobile loading.",
        features: [
          "Intuitive WordPress Admin + Elementor visual builder allowing staff to edit text and swap photos without code",
          "Effortless publishing workflow for adding new completed home projects, service categories, and SEO blog posts",
          "Next-gen WebP and AVIF media delivery ensuring rapid page loads across mobile networks",
          "Fully responsive layout adapting seamlessly across smartphones, tablets, and desktop monitors"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "10-Service Interior & Finishing Showcase",
        desc: "Dedicated, clearly organized pages for Colour, Lighting, Texture, Design, Stencil, Tiles, Waterproofing, POP, PVC Furniture, and Plumbing.",
        icon: "i-layers"
      },
      {
        title: "One-Tap WhatsApp & Click-to-Call Leads",
        desc: "Turns mobile visitors into immediate enquiries with prefilled WhatsApp messages, direct phone calling, and Book Appointment forms.",
        icon: "i-smartphone"
      },
      {
        title: "Project Gallery & Video Testimonials",
        desc: "Showcases completed 1–3 BHK residential interiors alongside embedded YouTube video reviews and homeowner FAQs.",
        icon: "i-camera"
      },
      {
        title: "100% No-Code Owner Management",
        desc: "Built on WordPress and Elementor so the business owner can update portfolios, pricing banners, and blog posts without developer help.",
        icon: "i-code"
      }
    ],
    resultsComparison: [
      { metric: "Digital Presence & Trust", before: "No website for local homeowners to verify work", after: "Professional 24/7 showcase across 10 interior trades" },
      { metric: "Customer Enquiry Channels", before: "Offline word-of-mouth & manual phone calls", after: "Web forms, 1-tap WhatsApp, click-to-call & map routing" },
      { metric: "Service Clarity", before: "Customers unaware of full 10-service finishing scope", after: "Dedicated landing pages for every interior & finishing trade" },
      { metric: "Content & Gallery Updates", before: "Dependent on technical help for every change", after: "100% self-managed via Elementor visual drag-and-drop" }
    ],
    architectureDetails: {
      pattern: "Component-Driven WordPress & Elementor CMS Architecture with Multi-Channel Conversion Hooks",
      highlights: [
        "Visual Page Builder Architecture: Modular Elementor templates enabling zero-code updates across all 10 service pages",
        "Next-Gen Media Pipeline: Automated WebP and AVIF image serving alongside lazy-loaded YouTube video embeds",
        "Omnichannel Lead Routing: Unified conversion hooks connecting web forms, WhatsApp API links, and tel: handlers",
        "Local SEO Structure: Semantic HTML5 headings, FAQ schema readiness, and embedded Google Maps location indexing",
        "Mobile-First Responsive Grid: Fluid CSS3 flexbox/grid layouts optimized for homeowners browsing on smartphones"
      ]
    },
    testimonial: {
      quote: "Our new website gives homeowners in Ahmedabad a clear view of all ten interior and home-finishing services we offer. Customers can see our past work and reach us immediately on WhatsApp or phone to book an appointment, and we can update photos ourselves anytime.",
      author: "Founder & Principal Contractor",
      role: "Proprietor",
      company: "Anaya Home Service, Ahmedabad"
    }
  },
  {
    id: "filterbook",
    slug: "filterbook",
    seoTitle: "FilterBook: RO Purifier CRM Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "FilterBook – CRM, Billing & Service Management Platform for RO Water Purifier Businesses",
    subtitle: "Manage Customers, Service Schedules, AMC Contracts, QR Complaints & WhatsApp Billing — All in One Place",
    client: "FilterBook by Vision Technolabs",
    industry: "B2B SaaS / CRM / Field Service Management / Retail & After-Sales Service",
    duration: "12 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.filterbook",
    domain: "com.visiontechnolabs.filterbook",
    description: "FilterBook is a CRM and service management platform built for RO water purifier sales and service businesses. It replaces paper registers and spreadsheets with automatic service scheduling, WhatsApp PDF invoices, QR-code complaint registration, AMC contract tracking with audit logs, and a shareable digital product catalogue across Android, iOS, and Web.",
    shortPitch: "Water purifier businesses depend on long-term relationships after the sale: filter changes, scheduled maintenance visits, Annual Maintenance Contract (AMC) renewals, and quick complaint handling. FilterBook brings all of this into one connected ecosystem—featuring a React Native (Expo) mobile app for daily field and counter operations, a Vendor Web Admin Panel, a Multi-Tenant Super Admin Console, and zero-login Public QR pages for customer complaints and product catalogue browsing.",
    tags: ["React Native (Expo)", "Field Service CRM", "WhatsApp PDF Billing", "QR Complaints", "Android & iOS"],
    gradient: "linear-gradient(135deg, #0284c7, #1d4ed8)",
    image: "/app_images/Filterbook/01_app_FB.webp",
    images: [
      "/app_images/Filterbook/01_app_FB.webp"
    ],
    gallery: [
      {
        url: "/app_images/Filterbook/01_app_FB.webp",
        caption: "Omnichannel RO Service SaaS — Android & iOS Mobile App, Vendor Web Panel & Public QR Portals",
        tag: "Mobile App & SaaS Suite",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "4-in-1", label: "App, Web, Admin & QR" },
      { value: "100%", label: "Auto Service Schedules" },
      { value: "<1 min", label: "QR Complaint Logging" },
      { value: "Instant", label: "WhatsApp PDF Invoices" }
    ],
    challenge: "Water purifier businesses depend on long relationships after the sale—filter replacements, periodic maintenance visits, Annual Maintenance Contract (AMC) renewals, and rapid complaint resolution. Most shop owners managed hundreds of customers in paper diaries or disconnected Excel sheets, leading to missed recurring service dates, lost AMC renewal revenue once contracts expired, slow phone-based complaint handling, tedious manual invoice writing, and no simple way to share a digital product catalogue with prospective buyers or view orders, services, and complaints in one unified dashboard.",
    solution: "Vision engineered FilterBook, a 4-tier multi-tenant SaaS ecosystem comprising a React Native (Expo) mobile app for Android and iOS, a Vendor Web Admin Panel, a Super Admin Console, and zero-login Public QR Web Pages. When an order is saved, FilterBook automatically generates the customer's full recurring maintenance schedule, renders an itemized A4 PDF invoice with upcoming service dates via TCPDF, and delivers it directly to the customer's WhatsApp via the Meta WhatsApp Cloud API. Customers register complaints in under a minute by scanning a QR code on their purifier, triggering instant push notifications to the shop owner's phone.",
    deliverables: [
      "Cross-Platform Mobile Application for Android & iOS (React Native / Expo)",
      "Vendor Web Admin Panel for Store, Order, Service & AMC Operations",
      "Multi-Tenant Super Admin Console for Platform-Wide Business Governance",
      "Public QR Complaint Registration Portal (Zero App or Login Required)",
      "Shareable Public QR Digital Product Catalogue with Direct WhatsApp Enquiry",
      "Automated TCPDF A4 Invoice Generator & Meta WhatsApp Cloud API Delivery",
      "AMC Contract Lifecycle Engine with Duplicate Protection & Full Audit Logs",
      "Automated Daily Cron Reminders via Expo Push & Firebase Cloud Messaging (FCM)"
    ],
    techStack: [
      "React Native (Expo)",
      "PHP 7.4+ / 8.x",
      "CodeIgniter 3 MVC",
      "MySQL / MariaDB",
      "REST API & Stateless JWT (HS256)",
      "Meta WhatsApp Cloud API",
      "TCPDF (A4 PDF Invoices)",
      "Expo Push & Firebase FCM",
      "Bootstrap 5.3 & DataTables",
      "DLT SMS OTP Gateway",
      "Zoho SMTP"
    ],
    modules: [
      {
        title: "Real-Time Business Dashboard & Smart Alerts",
        icon: "i-chart",
        description: "Live operational command center tracking monthly and lifetime business KPIs alongside automated daily push reminders.",
        features: [
          "Live counters for total customers, orders, active vs. expired AMCs, open vs. solved complaints, and pending vs. completed services",
          "At-a-glance priority lists for upcoming service visits, expiring AMC contracts, and newly submitted customer complaints",
          "Scheduled background jobs identifying services due today and tomorrow with automated push alerts to the owner's phones",
          "Multi-device session synchronization ensuring push notifications reach every signed-in device"
        ]
      },
      {
        title: "Orders, Auto-Scheduling & WhatsApp PDF Invoices",
        icon: "i-file-text",
        description: "One-step order entry that simultaneously builds the maintenance calendar and dispatches a branded invoice on WhatsApp.",
        features: [
          "Smart 10-digit mobile number lookup that retrieves existing customer profiles or creates new accounts automatically",
          "Automated recurring service calendar generation based on purchase date, interval (e.g., every 3 or 6 months), and service count",
          "Dynamic TCPDF generation producing branded A4 invoices with itemized pricing and the complete upcoming service schedule",
          "Zero-click Meta WhatsApp Cloud API integration uploading and sending the PDF invoice directly to the customer's WhatsApp"
        ]
      },
      {
        title: "Service Tracker & AMC Contract Management",
        icon: "i-shield",
        description: "End-to-end lifecycle tracking for routine filter maintenance visits and Annual Maintenance Contracts with full audit history.",
        features: [
          "Interactive service tracker filtering scheduled visits by Pending or Done across any month and year",
          "Custom standalone service plans for customers who purchased purifiers elsewhere but enroll for recurring maintenance",
          "AMC contract engine tracking start/end dates, contract value, remaining days, Active/Expired badges, and duplicate protection",
          "Immutable audit log recording every AMC creation, modification, and deletion with before-and-after field snapshots"
        ]
      },
      {
        title: "Zero-Login QR Complaint System",
        icon: "i-smartphone",
        description: "Frictionless QR-based support workflow allowing customers to report purifier issues in seconds without installing an app.",
        features: [
          "Customer scans the shop's QR code sticker on their purifier, selects their product and issue type, and submits a ticket",
          "Instant real-time push notification dispatched via Expo Push / FCM to the shop owner's mobile app",
          "Centralized complaint queue allowing technicians and owners to transition tickets from Pending to Solved",
          "Complete complaint history tied to the customer's profile for informed field technician visits"
        ]
      },
      {
        title: "Inventory & Shareable QR Digital Catalogue",
        icon: "i-shopping-bag",
        description: "Integrated stock control paired with a public-facing digital storefront shareable via a single QR code.",
        features: [
          "Catalog and inventory management covering categories, purifier models, brands, units, stock quantities, and purchase/selling prices",
          "Public digital product catalogue showcasing featured RO models with high-res photos, specifications, and pricing",
          "Single shareable QR code and link for showroom counters, visiting cards, and social media marketing",
          "Built-in 'Enquire on WhatsApp' button on every product card to turn catalogue browsers into direct sales leads"
        ]
      },
      {
        title: "Multi-Tenant Super Admin & Security Architecture",
        icon: "i-lock",
        description: "Platform-level governance console with stateless JWT security, SMS OTP authentication, and remote session control.",
        features: [
          "Super Admin Console overseeing all registered RO businesses, platform-wide orders, complaints, and tenant customer bases",
          "Instant tenant lifecycle controls to activate, suspend, or inspect any registered vendor account",
          "DLT-compliant SMS OTP registration/login, stateless HS256 JWT authentication, and server-side remote token invalidation",
          "Zoho SMTP password recovery, self-service account deletion compliance, and built-in Privacy, Terms & Refund policy pages"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Automatic Service Calendar Generation",
        desc: "Entering an order's service interval and count automatically builds the entire multi-month maintenance schedule and triggers daily due-date push alerts.",
        icon: "i-calendar"
      },
      {
        title: "Instant WhatsApp Cloud PDF Invoicing",
        desc: "Generates an itemized A4 PDF invoice containing the customer's upcoming service schedule and sends it directly to their WhatsApp number upon saving an order.",
        icon: "i-file-text"
      },
      {
        title: "Scan-to-Log QR Complaint Portal",
        desc: "Customers scan a QR code on their water purifier to log service issues in under 60 seconds with zero app download or login, alerting the owner immediately.",
        icon: "i-smartphone"
      },
      {
        title: "AMC Tracking with Immutable Audit Logs",
        desc: "Protects recurring AMC revenue with expiry dashboard alerts, duplicate contract prevention, and a complete before/after audit trail of every contract change.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Recurring Service Tracking", before: "Paper diaries & forgotten maintenance dates", after: "100% automated schedule & daily push reminders" },
      { metric: "Customer Billing & Delivery", before: "Manual handwritten bills & separate sharing", after: "Instant A4 PDF invoice sent via WhatsApp Cloud API" },
      { metric: "Complaint Registration", before: "Phone calls easily missed or forgotten", after: "<1 min customer QR scan with instant owner push alert" },
      { metric: "AMC Renewal Visibility", before: "Expired contracts noticed only when customer calls", after: "Proactive dashboard expiry lists & full audit history" }
    ],
    architectureDetails: {
      pattern: "Multi-Tenant SaaS MVC Backend with Stateless JWT REST API, React Native (Expo) Mobile App & Public QR Micro-Frontends",
      highlights: [
        "Omnichannel 4-Tier Sync: Unified MySQL relational schema serving the React Native app, Vendor Web Panel, Super Admin Console, and Public QR pages",
        "Stateless JWT + Remote Revocation: HS256 token authentication paired with server-side session invalidation for instant multi-device security",
        "Automated Document & Messaging Pipeline: Server-side TCPDF rendering piped directly into Meta WhatsApp Cloud API media endpoints",
        "Dual Push Notification Engine: Coordinated Expo Push Service and Firebase Cloud Messaging (FCM) with cron-driven daily service reminders",
        "Relational Audit Logging: Dedicated change-tracking tables capturing old and new state payloads across AMC contract lifecycles"
      ]
    },
    testimonial: {
      quote: "FilterBook replaced all our paper registers. Now whenever we sell an RO purifier, the customer immediately gets a PDF bill with their service dates on WhatsApp, our team gets daily reminders for filter changes, and customers just scan our QR code to log a complaint.",
      author: "Product & Operations Team",
      role: "SaaS Platform Division",
      company: "FilterBook by Vision Technolabs"
    }
  },
  {
    id: "divyshakti",
    slug: "divyshakti",
    seoTitle: "Divy Shakti: Wellness App Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Divy Shakti – Wellness E-Commerce & Referral Network Mobile App",
    subtitle: "Divine Wellness & Prosperity — Ayurvedic E-Commerce, 2D Genealogy Tree, 15-Field KYC & Digital Wallet App",
    client: "Divy Shakti",
    industry: "Direct Selling / Ayurvedic Wellness & Lifestyle Products / Social E-Commerce",
    duration: "10 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.divyshakti",
    domain: "com.visiontechnolabs.divyshakti",
    description: "Divy Shakti is a cross-platform mobile app that combines Ayurvedic and lifestyle shopping with a multi-level referral network and a built-in digital wallet. Members register with mobile OTP, complete a 15-field KYC and bank verification, explore their team in an interactive 2D genealogy tree, top up their wallet through UPI, shop products, and request withdrawals to their verified bank account.",
    shortPitch: "Divy Shakti brings community-driven direct selling of wellness, herbal, and lifestyle products onto one unified cross-platform mobile application. Built with React Native 0.81, Expo SDK 54, and React 19 (New Architecture), it combines sponsor-validated member onboarding, a 15-field Aadhaar/PAN/Bank KYC workflow with live admin polling, a custom interactive 2D SVG genealogy tree, a UPI-integrated digital wallet with protected on-hold withdrawal accounting, and a full e-commerce order lifecycle.",
    tags: ["React Native 0.81 & Expo 54", "2D SVG Genealogy Tree", "Digital Wallet & UPI", "15-Field KYC Verification", "Android & iOS"],
    gradient: "linear-gradient(135deg, #E64A78, #C89738)",
    image: "/app_images/Divy_Shakti/01_app_DS.webp",
    images: [
      "/app_images/Divy_Shakti/01_app_DS.webp"
    ],
    gallery: [
      {
        url: "/app_images/Divy_Shakti/01_app_DS.webp",
        caption: "Divy Shakti Mobile App — Wellness Storefront, Interactive 2D Genealogy Network, KYC & Digital Wallet",
        tag: "Cross-Platform Mobile App",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "23", label: "Native App Screens" },
      { value: "15-Field", label: "KYC & Bank Verification" },
      { value: "2D SVG", label: "Interactive Genealogy" },
      { value: "4-Layer", label: "Self-Healing Storage" }
    ],
    challenge: "Direct-selling wellness networks frequently struggle with fake or unverified sign-ups, opaque downline structures where members cannot easily see who sits at each level or how active their team is, and manual deposit/withdrawal processes that lead to payout delays and double-spending disputes. Furthermore, shopping, digital wallet balances, team genealogy, and KYC verification were fragmented across disconnected tools, while Play Store and App Store policies required strict identity verification and in-app account compliance.",
    solution: "Vision engineered Divy Shakti on React Native 0.81 and Expo SDK 54 (React 19 New Architecture)—delivering a 23-screen Android and iOS application styled in a custom 'Royal Warm Blush, Rose & Gold' theme. Every member joins via a validated sponsor code, completes a 3-section, 15-field Aadhaar, PAN, and Bank KYC workflow with 7-second live admin approval polling, visualizes their entire referral downline in a pinch-to-zoom 2D SVG genealogy tree, tops up their wallet via UPI deep links, shops Ayurvedic products with instant wallet checkout, and requests bank withdrawals protected by on-hold balance accounting.",
    deliverables: [
      "Cross-Platform Android & iOS Mobile Application (React Native 0.81, Expo SDK 54, React 19)",
      "Passwordless SMS OTP Onboarding with Real-Time Sponsor Code Validation",
      "3-Section, 15-Field KYC & Bank Verification Engine with 7-Second Live Approval Polling",
      "Custom Recursive 2D SVG Genealogy Tree with Pinch-to-Zoom, Pan & Level Color-Coding",
      "Digital Wallet with UPI Deep-Link Top-Ups, UTR/Receipt Upload & On-Hold Withdrawal Protection",
      "Ayurvedic E-Commerce Catalogue, Smart Cart, Wallet Checkout & 4-Stage Order Tracking",
      "Self-Healing 4-Layer Encrypted Session Storage (Memory, SecureStore & Dual AsyncStorage)",
      "Play Store & App Store Compliance Suite (Account Deletion & Dynamic Legal CMS Pages)"
    ],
    techStack: [
      "React Native 0.81 (New Architecture)",
      "Expo SDK 54 & React 19",
      "React Navigation (23 Screens)",
      "react-native-svg (2D Tree Engine)",
      "Expo SecureStore & AsyncStorage",
      "RESTful APIs (30s Timeout & Auto-Token)",
      "UPI Deep Links & QR Payments",
      "Poppins Design System (#E64A78 / #C89738)"
    ],
    modules: [
      {
        title: "Sponsor-Validated Onboarding & 15-Field KYC",
        icon: "i-shield",
        description: "Strict identity and sponsor verification pipeline ensuring every member in the referral network is genuine and bank-verified.",
        features: [
          "Passwordless 10-digit Indian mobile login with 6-digit SMS OTP, auto-advancing inputs, and a 30-second resend timer",
          "Real-time sponsor code validation at registration that blocks sign-ups under inactive or unapproved sponsors",
          "Structured 3-section, 15-field KYC covering Personal Details (5), Aadhaar & PAN numbers with photo uploads (4), and Bank Details (6)",
          "0% to 100% completion tracker with 7-second live status polling that automatically unlocks shopping and referrals upon admin approval"
        ]
      },
      {
        title: "Interactive 2D SVG Genealogy & Team Network",
        icon: "i-users",
        description: "Custom visual downline explorer and level-by-level directory giving members complete clarity across their referral organization.",
        features: [
          "Custom recursive 2D genealogy chart built with react-native-svg featuring parent-child connectors, pinch-to-zoom, and pan gestures",
          "Level color-coding and instant search across the network by member name, phone number, or referral code",
          "Filterable list view (All, Level 1, Level 2, etc.) displaying active/inactive badges, join dates, and direct team sizes",
          "Deep member drill-down allowing users to inspect any downline profile, depth, and sponsor, and traverse further down their referrals"
        ]
      },
      {
        title: "Digital Wallet, UPI Top-Ups & Protected Payouts",
        icon: "i-credit-card",
        description: "End-to-end financial ledger combining seamless UPI deposits, revenue analytics, and double-spend-proof bank withdrawals.",
        features: [
          "Comprehensive financial dashboard displaying available balance, held balance, daily/monthly/total revenue, and commission summaries",
          "UPI wallet top-up flow with admin QR code, bank details, one-tap 'Pay via UPI App' (GPay, PhonePe, Paytm, BHIM), quick-amount chips, UTR entry, and receipt upload",
          "Protected withdrawal engine that immediately places requested payout amounts 'On Hold' across the app to prevent double spending",
          "Instant wallet checkout for product orders with automatic wallet refunds whenever a pending order is cancelled"
        ]
      },
      {
        title: "Ayurvedic & Lifestyle E-Commerce Storefront",
        icon: "i-shopping-bag",
        description: "Purpose-built wellness shopping experience with herbal ingredient tagging, server-synced cart, and 4-stage order tracking.",
        features: [
          "Rich product catalogue with category filters, live search, multi-image galleries, MRP discount badges, herbal ingredient tags, key benefits, and size variants (S, M, L)",
          "Smart cart with instant optimistic UI updates backed by server synchronization, supporting both multi-item checkout and single-item 'Buy Now'",
          "4-stage visual order progress tracker (Order Placed, Confirmed, Shipped, Delivered) with full address book management",
          "One-tap cancellation on pending orders that immediately credits the full order amount back to the member's digital wallet"
        ]
      },
      {
        title: "Self-Healing Storage & Royal Blush Design System",
        icon: "i-layers",
        description: "Resilient client architecture paired with a culturally tailored 'Royal Warm Blush, Rose & Gold' visual identity.",
        features: [
          "4-layer session persistence (in-memory cache, Expo SecureStore, and dual AsyncStorage backups) that automatically self-repairs if any layer resets",
          "REST API client with 30-second timeout protection, automatic bearer token injection, and cross-platform multipart image upload handling",
          "Bespoke 'Royal Warm Blush, Rose & Gold' UI (#FAF7F8 background, #E64A78 rose primary, #C89738 royal gold, #2A1E24 deep plum hero cards) with Poppins typography",
          "Play Store and App Store compliance screens including self-service Account Deletion, dynamic CMS Privacy/Terms pages, and live IST support status"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Interactive 2D SVG Genealogy Tree",
        desc: "Custom-rendered pinch-to-zoom and panable 2D downline tree with level color-coding, deep member drill-down, and instant search by name, phone, or code.",
        icon: "i-users"
      },
      {
        title: "15-Field KYC with Live 7s Approval Polling",
        desc: "Captures personal details, Aadhaar/PAN card photos, and verified bank accounts while polling every 7 seconds to unlock shopping the moment an admin approves.",
        icon: "i-shield"
      },
      {
        title: "UPI Deep-Link Wallet & On-Hold Withdrawals",
        desc: "Supports one-tap GPay/PhonePe/Paytm/BHIM top-ups with UTR receipt capture and locks requested withdrawal funds 'On Hold' to eliminate double spending.",
        icon: "i-credit-card"
      },
      {
        title: "4-Layer Self-Healing Session Storage",
        desc: "Combines memory cache, Expo SecureStore, and dual AsyncStorage copies so authenticated member sessions automatically recover if any single storage layer clears.",
        icon: "i-lock"
      }
    ],
    resultsComparison: [
      { metric: "Member Verification", before: "Unverified or fake direct-selling sign-ups", after: "100% sponsor-validated & 15-field KYC approved base" },
      { metric: "Team Network Visibility", before: "Hard-to-follow spreadsheets & manual lists", after: "Interactive 2D pinch-to-zoom SVG genealogy tree" },
      { metric: "Wallet & Withdrawal Safety", before: "Manual deposit tracking & payout disputes", after: "UPI deep-link top-ups & on-hold withdrawal protection" },
      { metric: "Shopping & Refund Flow", before: "Disconnected catalogue & slow refund handling", after: "Integrated wallet checkout & instant cancellation refunds" }
    ],
    architectureDetails: {
      pattern: "React Native 0.81 & Expo SDK 54 (React 19 New Architecture) Client with 4-Layer Self-Healing Storage & Recursive SVG Engine",
      highlights: [
        "React 19 & New Architecture: Built on React Native 0.81 and Expo SDK 54 with a 23-screen native stack and persistent bottom tab navigation",
        "Recursive SVG Genealogy Engine: Custom react-native-svg tree renderer with gesture-driven pan/zoom, node connectors, and multi-level traversal",
        "Self-Healing 4-Layer Persistence: Synchronizes auth state across RAM cache, Expo SecureStore, and redundant AsyncStorage keys for zero unexpected logouts",
        "Atomic Wallet & Order State: Optimistic cart updates, on-hold balance locking during payout requests, and instant wallet re-crediting on order cancellation",
        "India-First Localization & Store Compliance: Native en-IN Rupee formatting, IST live support hours, CMS legal pages, and store-compliant account deletion"
      ]
    },
    testimonial: {
      quote: "Divy Shakti brought our entire wellness catalogue, sponsor onboarding, Aadhaar/PAN KYC verification, 2D team genealogy tree, and UPI digital wallet into one smooth mobile app. Members can see their downline clearly and shop with complete confidence.",
      author: "Management Team",
      role: "Operations & Network Division",
      company: "Divy Shakti"
    }
  },
  {
    id: "tripsbook",
    slug: "tripsbook",
    seoTitle: "TripsBook: Fleet Management Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "TripsBook – Fleet, Driver Trip & Fuel Management Mobile App",
    subtitle: "Track Your Journeys — Drive Safe, Track Smart with Live GPS Trip Logging, Fuel Auditing & Instant PDF Duty Slips",
    client: "TripsBook by Vision Technolabs",
    industry: "Fleet Management / Logistics / Commercial Cab & Corporate Transport",
    duration: "10 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.tripsbook",
    domain: "com.visiontechnolabs.tripsbook",
    description: "TripsBook is a fleet and driver trip management mobile app for commercial cab operators and corporate transport fleets. Drivers log Fix Cab and On Call trips in seconds, with pickup and drop areas detected automatically from GPS, live location sent to dispatch during active trips, fuel and odometer tracking, and one-tap PDF Duty Slips and Monthly Vehicle Log Sheets.",
    shortPitch: "Fleet operators have traditionally relied on paper duty slips, handwritten odometer logs, and loose fuel receipts—leading to billing delays, calculation mistakes, and zero real-time visibility for dispatchers. Vision Technolabs built TripsBook on React Native 0.81, Expo SDK 54, and React 19 (New Architecture) to replace that paperwork with a mobile-first digital workflow where drivers record Fix Cab and On Call duties, share live GPS coordinates, track multi-fuel expenses, and produce print-ready A4 Duty Slips and Monthly Vehicle Log Sheets straight from their phone.",
    tags: ["React Native 0.81 & Expo 54", "Live GPS Fleet Tracking", "PDF Duty Slips & Log Sheets", "Multi-Fuel Expense Audit", "Android & iOS"],
    gradient: "linear-gradient(135deg, #0f172a, #2563eb)",
    image: "/app_images/Tripsbook/01_app_TB.webp",
    images: [
      "/app_images/Tripsbook/01_app_TB.webp"
    ],
    gallery: [
      {
        url: "/app_images/Tripsbook/01_app_TB.webp",
        caption: "TripsBook Mobile App — Live Driver Dashboard, Fix Cab & On Call Trip Modes, GPS Tracking & A4 Duty Slip PDF",
        tag: "Fleet & Driver Mobile App",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "2 Modes", label: "Fix Cab & On Call Trips" },
      { value: "10 sec", label: "Live GPS Dispatch Pings" },
      { value: "5 Fuels", label: "Multi-Fuel Mileage Audit" },
      { value: "Instant", label: "A4 Duty Slip & Log PDFs" }
    ],
    challenge: "Commercial cab operators and corporate transport fleets traditionally relied on handwritten paper duty slips, manual odometer logbooks, and loose fuel receipts. Paper slips were easily lost or misread, manual distance and overnight duration calculations caused frequent corporate billing disputes, dispatchers had to phone drivers to know where an active trip stood, fuel receipts across petrol, diesel, CNG, electric, and LPG vehicles were disconnected from odometer readings, and preparing monthly corporate vehicle log sheets took days of clerical effort.",
    solution: "Vision Technolabs engineered TripsBook, a cross-platform Android and iOS mobile app built with React Native 0.81, Expo SDK 54, and React 19 (New Architecture). Drivers log Fix Cab and On Call duties with automatic GPS reverse-geocoded pickup detection, strict odometer validation, and 10-second live location pings during active trips. Upon trip completion, TripsBook calculates total distance and overnight duration automatically, generates branded A4 Duty Slip PDFs and Monthly Vehicle Log Sheet PDFs via expo-print, and tracks fuel expenses across five fuel types linked directly to odometer readings.",
    deliverables: [
      "Cross-Platform Android & iOS Mobile App (React Native 0.81, Expo SDK 54, React 19)",
      "Live Driver Dashboard with Daily & Monthly Trips, Kilometres & Driving Hours",
      "Dual Trip Logging Engine (Fix Cab Point-to-Point & On Call Charter Duties)",
      "Automatic Pickup Detection via expo-location & Google Maps Reverse Geocoding API",
      "Active Trip GPS Telemetry (10-Second Coordinate Pings & Foreground Location Guard)",
      "On-Device HTML-to-PDF Engine for A4 Duty Slips & Monthly Vehicle Log Sheets",
      "5-Type Fuel & Expense Auditor (Petrol, Diesel, CNG, Electric, LPG) with Odometer Linking",
      "Fleet Admin-Code Driver Onboarding, JWT Auth Interceptors & Store Compliance Suite"
    ],
    techStack: [
      "React Native 0.81 (New Architecture)",
      "Expo SDK 54 & React 19",
      "React Navigation 7",
      "expo-location & Google Maps Geocoding API",
      "expo-print & expo-sharing (A4 PDFs)",
      "Axios + JWT Bearer Interceptors",
      "AsyncStorage",
      "RESTful Fleet Backend API"
    ],
    modules: [
      {
        title: "Live Driver Dashboard & Dual Trip Modes",
        icon: "i-truck",
        description: "Real-time daily operational summary paired with specialized workflows for scheduled Fix Cab routes and on-demand On Call duties.",
        features: [
          "Four live summary cards tracking Today's Trips, This Month's Trips, Kilometres Driven Today, and Hours Driven Today",
          "Today's trip feed with color-coded Running and Completed badges, customer details, route summary, duration, and distance",
          "Fix Cab mode for scheduled point-to-point routes with automatic pickup area detection from phone GPS via Google Maps reverse geocoding",
          "On Call mode for charter duties capturing customer name, mobile number, start date/time, and validated starting odometer readings"
        ]
      },
      {
        title: "Live GPS Telemetry & Odometer Guardrails",
        icon: "i-compass",
        description: "Automated location reporting during active trips combined with strict odometer validation to prevent entry mistakes.",
        features: [
          "Sends live GPS coordinates to the dispatch backend every 10 seconds while a trip is running, plus an immediate ping on app foregrounding",
          "Persistent Location Guard banner and alert verifying device GPS and app permissions with one-tap deep linking to phone settings",
          "Strict odometer validation blocking invalid characters, enforcing decimal precision, and ensuring closing km exceeds starting km",
          "Automatic distance and duration calculation in hours and minutes, accurately handling trips that cross midnight"
        ]
      },
      {
        title: "Instant A4 Duty Slips & Monthly Log Sheet PDFs",
        icon: "i-file-text",
        description: "On-device PDF generation producing corporate-ready duty slips and monthly audit tables ready for printing or WhatsApp sharing.",
        features: [
          "Branded A4 Duty Slip PDF with company header, customer details, route, vehicle number, start/closing timestamps, start/closing/total km, and signature block",
          "One-tap text receipt and PDF sharing through WhatsApp, SMS, or email via expo-sharing and React Native Share",
          "Six-month trip archive filterable by month and organized into dedicated Fix Cab and On Call tabs",
          "Monthly Vehicle Log Sheet PDF generating a chronological corporate billing table with business header, vehicle details, and audit signature columns"
        ]
      },
      {
        title: "Multi-Fuel & Mileage Expense Tracker",
        icon: "i-chart",
        description: "Comprehensive fuel ledger supporting conventional, gas, and electric fleet vehicles tied directly to odometer readings.",
        features: [
          "Supports five fuel types—Petrol, Diesel, CNG, Electric, and LPG—automatically selecting the right unit (Litres, Kilograms, or kWh)",
          "Records fuel quantity, total cost in ₹, automatic price-per-unit calculation, current odometer reading, and driver notes",
          "Month-by-month fuel history filter enabling fleet managers and drivers to audit fuel spend against kilometres driven",
          "Eliminates loose paper fuel slips by keeping every refill chronologically linked to vehicle mileage"
        ]
      },
      {
        title: "Fleet-Linked Onboarding & Store Compliance",
        icon: "i-shield",
        description: "Verified driver registration tied to fleet Admin Codes with JWT session security and store-compliant account governance.",
        features: [
          "Fleet-linked registration capturing driver mobile, email, vehicle name, registration plate, driving licence number, and fleet Admin Code",
          "Driver profile management with photo upload, company selection, and secure password update flows",
          "Axios networking layer with automatic JWT bearer-token injection and graceful expired-session handling",
          "Built-in Terms & Conditions, Privacy Policy, and confirmed self-service Delete Account flow for Play Store and App Store compliance"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Auto-Geocoded Fix Cab & On Call Logging",
        desc: "Detects pickup areas automatically from GPS via Google Maps reverse geocoding and enforces strict odometer validation on every trip.",
        icon: "i-compass"
      },
      {
        title: "10-Second Active Trip GPS Pings",
        desc: "Streams live driver coordinates to dispatch every 10 seconds during running trips, backed by an always-on permission and GPS status guard.",
        icon: "i-truck"
      },
      {
        title: "One-Tap A4 Duty Slip & Monthly Log PDFs",
        desc: "Generates print-ready A4 Duty Slips and full Monthly Vehicle Log Sheet PDFs on the phone for instant WhatsApp sharing and corporate billing.",
        icon: "i-file-text"
      },
      {
        title: "5-Fuel Odometer-Linked Expense Tracker",
        desc: "Tracks Petrol, Diesel, CNG, Electric, and LPG refills with automatic unit selection (L, kg, kWh), per-unit cost math, and odometer auditing.",
        icon: "i-chart"
      }
    ],
    resultsComparison: [
      { metric: "Duty Slip & Log Preparation", before: "Handwritten paper slips & manual monthly tables", after: "Instant on-device A4 Duty Slip & Monthly Log PDFs" },
      { metric: "Distance & Duration Math", before: "Manual odometer subtraction & billing disputes", after: "Validated odometer checks & auto overnight math" },
      { metric: "Dispatch Trip Visibility", before: "Repeated phone calls to check driver location", after: "Live 10-second GPS pings & auto-geocoded pickups" },
      { metric: "Fuel & Mileage Auditing", before: "Loose paper fuel receipts across vehicle types", after: "5-fuel digital ledger tied to odometer readings" }
    ],
    architectureDetails: {
      pattern: "React Native 0.81 & Expo SDK 54 (React 19 New Architecture) Mobile Client with GPS Telemetry & On-Device HTML-to-PDF Engine",
      highlights: [
        "React 19 & New Architecture: Engineered on React Native 0.81, Expo SDK 54, and React Navigation 7 combining native stack and bottom-tab workflows",
        "Geolocation & Reverse Geocoding Pipeline: Integrates expo-location with Google Maps Reverse Geocoding API for automatic pickup area detection and 10s telemetry",
        "On-Device PDF Rendering: Uses expo-print and expo-sharing to compile dynamic HTML templates into branded A4 Duty Slips and Monthly Vehicle Log Sheets",
        "Interceptor-Backed JWT Networking: Axios client with automated bearer token attachment, session expiry recovery, and AsyncStorage persistence",
        "Multi-Fuel Unit & Odometer Validation Engine: Deterministic client-side guardrails enforcing monotonic odometer progression and automatic fuel unit mapping"
      ]
    },
    testimonial: {
      quote: "TripsBook eliminated our paper duty slips and manual monthly logbooks. Drivers log Fix Cab and On Call trips with automatic GPS pickup detection, our dispatch team sees live location updates during active trips, and corporate billing PDFs are ready in one tap.",
      author: "Product & Fleet Operations Team",
      role: "Mobility SaaS Division",
      company: "TripsBook by Vision Technolabs"
    }
  },
  {
    id: "thakarmart",
    slug: "thakarmart",
    seoTitle: "Thakar Mart: Grocery App Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Thakar Mart – Grocery & Dairy Shopping Mobile App",
    subtitle: "Your Local Kirana & Dairy Store at Your Fingertips — Fast, Easy, Reliable Doorstep Ordering",
    client: "Thakar Mart (JP Thakar Mart)",
    industry: "Retail / Grocery / Dairy / Local Kirana Store (Online Ordering)",
    duration: "8 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.thakarmart.app",
    domain: "com.thakarmart.app",
    description: "Thakar Mart brings a neighbourhood kirana and dairy store onto the customer's phone. Shoppers sign in with their mobile number, browse groceries, dairy, snacks, fresh produce, and cold drinks by category, search products, see discounted prices at a glance, and order for doorstep delivery with live order tracking.",
    shortPitch: "Thakar Mart is a dedicated single-store grocery and dairy mobile shopping application engineered by Vision Technolabs to extend a neighbourhood retail store beyond walk-in counter sales. Built with a clean violet-accented mobile UI and connected admin backend, the app puts the store's complete everyday range—from fresh milk and curd to biscuits, snacks, cold drinks, and daily staples—into the customer's pocket with category tiles, strike-through discount pricing, cart checkout, and real-time doorstep delivery tracking.",
    tags: ["Grocery & Dairy App", "Single-Store E-Commerce", "Category & Offer Discovery", "Doorstep Order Tracking", "Android Mobile App"],
    gradient: "linear-gradient(135deg, #6d28d9, #4f46e5)",
    image: "/app_images/Thakar_Mart/01_app_TM.webp",
    images: [
      "/app_images/Thakar_Mart/01_app_TM.webp"
    ],
    gallery: [
      {
        url: "/app_images/Thakar_Mart/01_app_TM.webp",
        caption: "Thakar Mart Mobile App — Kirana & Dairy Category Storefront, Discount Product Cards & Doorstep Order Tracking",
        tag: "Grocery & Dairy Mobile App",
        badge: "Screen 01 · Google Play Live"
      }
    ],
    metrics: [
      { value: "5+ Depts", label: "Grocery, Dairy & Produce" },
      { value: "5-Tab", label: "Bottom App Navigation" },
      { value: "Live", label: "Order Status Tracking" },
      { value: "24/7", label: "Digital Kirana Storefront" }
    ],
    challenge: "As a neighbourhood kirana and dairy store, Thakar Mart was previously limited to serving walk-in counter shoppers or handling slow, error-prone orders over phone calls and WhatsApp messages. Customers at home had no way to browse the store's full product range, compare MRP vs. discounted selling prices, see promotional offers, or track when their daily milk, curd, and grocery order would arrive at their doorstep.",
    solution: "Vision Technolabs designed and developed the Thakar Mart Android mobile application (com.thakarmart.app) paired with a store management backend. Customers sign in with their mobile number, explore promotional banners, jump into visual departments (Biscuits & Snacks, Fresh Fruits & Vegetables, Daily Grocery Essentials, Cold Drinks & Beverages, and Dairy & Milk Products), search items instantaneously, inspect clear percentage-off badges and strike-through MRP savings, and place doorstep delivery orders with live status tracking.",
    deliverables: [
      "Native Android Grocery & Dairy Shopping Application (Live on Google Play: com.thakarmart.app)",
      "Mobile Number & Password Authentication with Customer Profile Management",
      "Promotional Banner Showcase & Curated Featured Products Carousel",
      "Department-Wise 'Shop by Category' Grid (Dairy, Produce, Staples, Snacks & Beverages)",
      "Instant Product Search & Discount Card Engine (MRP Strike-Through & % OFF Badges)",
      "Streamlined Shopping Cart, Checkout & Doorstep Delivery Workflow",
      "Real-Time Order Tracking & 5-Tab Bottom Navigation Architecture",
      "Store Admin Backend for Catalogue, Pricing, Offer & Order Fulfilment Management"
    ],
    techStack: [
      "Cross-Platform Mobile App (Android)",
      "RESTful E-Commerce Backend API",
      "Relational Product & Order Database",
      "Store Admin Management Panel",
      "Violet Light-Mode Retail UI System",
      "Real-Time Order Status Sync",
      "Google Play Store Production Release"
    ],
    modules: [
      {
        title: "Mobile Sign-In & Customer Account Flow",
        icon: "i-smartphone",
        description: "Fast, familiar authentication built around the customer's mobile number for quick repeat grocery ordering.",
        features: [
          "Mobile number and password sign-in with an accessible show/hide password toggle",
          "Quick new-customer registration flow capturing essential delivery details",
          "Dedicated Profile tab for managing customer account information and viewing past orders",
          "Persistent session handling so daily dairy and grocery shoppers stay signed in"
        ]
      },
      {
        title: "Promotional Home Screen & Category Discovery",
        icon: "i-shopping-bag",
        description: "Visual storefront highlighting seasonal store offers, featured essentials, and one-tap department tiles.",
        features: [
          "Top promotional banner area showcasing store announcements, festive deals, and combo offers",
          "Shop by Category tiles for Biscuits & Snacks, Fresh Fruits & Vegetables, Daily Grocery Essentials, Cold Drinks & Beverages, and Dairy & Milk Products",
          "Handpicked 'Featured Products' row on the home screen with quick 'See All' expansion",
          "Intuitive 5-tab bottom navigation bar covering Home, Shop, Category, Cart, and Profile"
        ]
      },
      {
        title: "Product Search & Transparent Discount Cards",
        icon: "i-search",
        description: "High-clarity product grid designed to surface savings and simplify daily basket building.",
        features: [
          "Responsive 2-column product grid paired with a fast keyword search bar for finding items immediately",
          "Rich product cards displaying product photography, category label, item title, and net selling price",
          "Clear strike-through original MRP alongside vibrant percentage discount badges (e.g., '17% OFF', '50% OFF')",
          "Category-filtered browsing views allowing shoppers to compare items within a single department"
        ]
      },
      {
        title: "Cart, Checkout & Live Doorstep Delivery Tracking",
        icon: "i-truck",
        description: "End-to-end ordering pipeline replacing phone calls with structured cart checkout and delivery visibility.",
        features: [
          "Interactive shopping cart summarizing selected grocery and dairy items with instant quantity adjustments",
          "Streamlined doorstep delivery checkout tailored for local neighbourhood fulfilment",
          "Real-time order tracking allowing customers to follow their order status directly from the app",
          "Eliminates miscommunicated phone orders by giving the store an exact itemized digital order ticket"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Neighbourhood Kirana & Dairy in One App",
        desc: "Purpose-built for a single local store's catalogue—covering fresh milk, curd, fruits, vegetables, staples, snacks, and cold drinks.",
        icon: "i-shopping-bag"
      },
      {
        title: "Instant Discount & Savings Visibility",
        desc: "Every product card highlights the exact selling price, strike-through MRP, and coloured percentage-off badge at a glance.",
        icon: "i-tag"
      },
      {
        title: "5-Department Category Navigation",
        desc: "Shoppers jump straight into Dairy & Milk, Fresh Produce, Daily Grocery, Snacks, or Beverages via dedicated category tiles and bottom tabs.",
        icon: "i-layers"
      },
      {
        title: "Doorstep Delivery with Order Tracking",
        desc: "Replaces manual phone and WhatsApp ordering with structured cart checkout and live order progress updates.",
        icon: "i-truck"
      }
    ],
    resultsComparison: [
      { metric: "Customer Reach", before: "Limited to walk-in counter shoppers", after: "24/7 ordering from customers at home" },
      { metric: "Catalogue & Offer Visibility", before: "Prices & discounts visible only in-store", after: "Live digital catalogue with % OFF badges" },
      { metric: "Order Accuracy", before: "Slow phone/message orders prone to mistakes", after: "Structured cart & itemized digital checkout" },
      { metric: "Delivery Transparency", before: "No way for shoppers to check order status", after: "Real-time in-app doorstep order tracking" }
    ],
    architectureDetails: {
      pattern: "Single-Store Retail Mobile Application (Android) with RESTful Catalogue, Cart & Order Tracking Backend",
      highlights: [
        "Single-Vendor Kirana Architecture: Tailored specifically around Thakar Mart's inventory, pricing, and local delivery operations rather than a generic multi-seller marketplace",
        "5-Tab Retail Navigation: Persistent bottom navigation (Home, Shop, Category, Cart, Profile) optimized for high-frequency daily dairy and grocery repeat orders",
        "Dynamic Pricing & Discount Presentation: Automated calculation and badge rendering for MRP vs. selling price markdowns across all category grids",
        "Real-Time Order Lifecycle Sync: Synchronizes customer cart checkouts with store fulfilment status updates for transparent doorstep delivery"
      ]
    },
    testimonial: {
      quote: "Vision Technolabs helped us bring Thakar Mart onto our customers' phones. Our regulars can now browse daily groceries, dairy products, and store offers from home and place doorstep delivery orders without having to call the shop.",
      author: "Store Management",
      role: "Retail Operations",
      company: "Thakar Mart (JP Thakar Mart)"
    }
  },
  {
    id: "fitcket",
    slug: "fitcket",
    seoTitle: "Fitcket: Fitness Platform Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Fitcket – Fitness Booking, Live Sessions, FitTV & Cricket Pools Platform",
    subtitle: "Location-Based Gym & Trainer Marketplace, Agora Live Workouts, FitTV Video Courses & Cricket Prediction Pools",
    client: "Fitcket",
    industry: "Fitness & Wellness / Marketplace / Live Streaming / Sports Engagement",
    duration: "14 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.fitcket.app",
    domain: "com.fitcket.app",
    description: "Fitcket is a mobile-first fitness marketplace that connects users with gyms and personal trainers. Users discover nearby providers through location-based search, book day, week, month or year passes through a cart with Razorpay checkout, join live fitness sessions over Agora video, watch paid FitTV video courses, and take part in cricket prediction pools.",
    shortPitch: "Fitcket brings gyms, personal trainers, live classes, on-demand FitTV courses, and interactive cricket prediction pools into a single Android and iOS mobile platform. Powered by a 55+ endpoint CodeIgniter 3 MVC REST API (~7,500 lines of controller architecture) and 40+ relational MySQL tables, the platform orchestrates Haversine geo-distance discovery, flexible duration-based pass bookings with Buy-X-Get-Y offers, server-verified Razorpay checkouts, Agora live video token streaming with 15-minute cron reminders, and JWT + SMS OTP security.",
    tags: ["Expo Mobile App", "Agora Live Streaming", "Razorpay Checkout", "Haversine Geo-Search", "55+ REST API Endpoints"],
    gradient: "linear-gradient(135deg, #10b981, #047857)",
    image: "/app_images/Fitcket/01_app_FK.webp",
    images: [
      "/app_images/Fitcket/01_app_FK.webp"
    ],
    gallery: [
      {
        url: "/app_images/Fitcket/01_app_FK.webp",
        caption: "Fitcket Mobile Marketplace — Nearby Gym & Trainer Booking, Agora Live Sessions, FitTV Courses & Cricket Pools",
        tag: "Fitness Marketplace & Live App",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "55+", label: "REST API Endpoints" },
      { value: "40+", label: "Relational DB Tables" },
      { value: "4-in-1", label: "Gyms, Live, FitTV & Pools" },
      { value: "15 min", label: "Auto Live Class Reminders" }
    ],
    challenge: "Finding, comparing, and booking local gyms and personal trainers was fragmented across offline enquiries with inconsistent pricing and no verified reviews. Providers needed flexible membership passes (day, week, month, or year) alongside Buy-X-Get-Y-Free promotional logic. Beyond physical gym visits, the platform needed to monetize real-time live workout classes with participant caps and secure video access, gender-segmented FitTV video courses, and interactive cricket prediction pools to drive daily app engagement—all backed by strict OTP identity verification and server-verified payment callbacks.",
    solution: "Vision engineered the complete Fitcket mobile ecosystem and its 55+ endpoint CodeIgniter 3 REST API across 40+ MySQL tables. Users sign in via passwordless SMS OTP with JWT blacklist protection, discover nearby gyms and trainers ranked by Haversine GPS distance and Google Maps reverse geocoding, book flexible passes with automated Buy-X-Get-Y-Free and platform-wide offers via server-verified Razorpay checkout, stream live fitness classes over Agora with unique subscriber UIDs and 15-minute cron push reminders, unlock FitTV video courses, and compete in host-created cricket prediction pools.",
    deliverables: [
      "Cross-Platform Android & iOS Mobile Application (Expo / React Native)",
      "55+ Endpoint REST JSON API (~7,500 Lines of CodeIgniter 3 MVC Controller Logic)",
      "Haversine GPS Distance Search & Google Maps Reverse Geocoding Discovery Engine",
      "Duration-Based Pass Cart (Day/Week/Month/Year) with Buy-X-Get-Y-Free Offer Engine",
      "Server-Verified Razorpay Checkout Across Gym Passes, Live Classes, FitTV & Cricket Pools",
      "Agora Live Video Streaming Engine with Server-Generated Tokens, UIDs & Attendance Logs",
      "FitTV On-Demand Video Course Catalogue with Category & Gender Track Filtering",
      "Cricket Match Centre & Host Prediction Pools with Auto-Locking 30-Minute Cutoff"
    ],
    techStack: [
      "Expo Mobile App (Android & iOS)",
      "PHP & CodeIgniter 3 (MVC REST API)",
      "MySQL / MariaDB (40+ Tables)",
      "JWT (firebase/php-jwt) + Token Blacklist",
      "Razorpay Orders, Transfers & Signature Auth",
      "Agora Live Video Streaming SDK",
      "Google Maps Geocoding & Haversine SQL",
      "Expo Push Notifications & FCM",
      "SMS OTP Gateway & Cron Scheduler"
    ],
    modules: [
      {
        title: "Geo-Location Gym & Trainer Discovery",
        icon: "i-compass",
        description: "Location-aware marketplace feed ranking nearby gyms, fitness studios, and personal trainers by real-time GPS distance.",
        features: [
          "Smart home feed featuring promotional banners, service categories, nearest providers, dedicated gym and trainer carousels, and active city lists",
          "Haversine latitude/longitude distance ranking paired with Google Maps reverse geocoding to resolve user city and state automatically",
          "Multi-parameter search and paginated filtering across service type, category, star rating, price bracket, trainer experience, and language",
          "Comprehensive provider profiles showcasing photo galleries, certifications, expertise tags, weekly schedules, 4-tier pass pricing, active offers, and verified user reviews"
        ]
      },
      {
        title: "Flexible Pass Cart, Offers & Razorpay Checkout",
        icon: "i-shopping-bag",
        description: "Multi-duration booking cart supporting provider-level promotions and cryptographic Razorpay signature verification.",
        features: [
          "Duration-based pass selection allowing users to book Day, Week, Month, or Year memberships with custom quantities and validated future start dates",
          "Dual promotional engine supporting provider-level Buy-X-Get-Y-Free rules and platform-wide percentage discounts with minimum order thresholds",
          "Server-side Razorpay order creation and cryptographic signature verification before marking any booking as paid",
          "Instant provider push and in-app notifications upon booking confirmation, plus filterable user booking history"
        ]
      },
      {
        title: "Agora Live Workout Sessions & Auto-Reminders",
        icon: "i-video",
        description: "Interactive live-streamed fitness classes with capacity enforcement, token-secured Agora video rooms, and attendance logs.",
        features: [
          "Live session catalogue displaying upcoming classes, pricing, max participant limits, booked seat counters, and real-time Full/Available badges",
          "Instant booking for free classes and Razorpay-verified checkout for paid live sessions",
          "Server-generated Agora subscriber tokens and unique participant UIDs ensuring only booked users can enter the live video stream",
          "Automated join/leave attendance logging and cron-driven push + in-app reminders sent 15 minutes before class start with duplicate protection"
        ]
      },
      {
        title: "FitTV On-Demand Video Courses",
        icon: "i-tv",
        description: "Structured fitness video library offering categorized workout programmes and one-step course unlocking.",
        features: [
          "Curated FitTV video catalogue organized by workout category and gender-specific training tracks",
          "Supports both free community workout videos and paid premium courses unlocked via Razorpay payment callbacks",
          "Instant entitlement verification granting permanent in-app streaming access once payment signature validation succeeds",
          "Integrated into the unified user profile alongside physical gym passes and live session bookings"
        ]
      },
      {
        title: "Cricket Match Centre & Prediction Pools",
        icon: "i-award",
        description: "High-engagement sports companion featuring live cricket fixtures and host-managed yes/no prediction pools.",
        features: [
          "Match Centre tracking Live, Today, Upcoming, and Completed cricket fixtures with tournament names, venues, team logos, scores, and featured matches",
          "Approved hosts create prediction pools with custom entry fees and participant caps, joined seamlessly via Razorpay",
          "Automated pool cutoff logic blocking duplicate entries, full pools, and joins within 30 minutes of match start",
          "Interactive Yes/No prediction questions that lock at match cutoff and generate right/wrong performance summaries and payment logs"
        ]
      },
      {
        title: "Host Programme, Payouts & JWT Security",
        icon: "i-shield",
        description: "Creator onboarding, provider payout utilities, and stateless JWT authentication backed by a server-side token blacklist.",
        features: [
          "In-app 'Become a Host' application workflow (capturing profile and Instagram credentials) empowering approved creators to host live sessions and cricket pools",
          "Provider bank account management (IFSC, account type, branch) and Razorpay-backed recipient and transfer history utilities",
          "Passwordless SMS OTP sign-in issuing firebase/php-jwt tokens, paired with a database token blacklist on logout and self-service account deletion",
          "Database-driven Terms, Privacy, and Refund policies, 1-to-5 star review moderation, notification centre, and in-app support ticketing"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Haversine GPS Gym & Trainer Discovery",
        desc: "Ranks nearby gyms and personal trainers by exact latitude/longitude distance using Haversine SQL queries and Google Maps reverse geocoding.",
        icon: "i-compass"
      },
      {
        title: "Agora Live Classes with 15-Min Reminders",
        desc: "Streams live workouts with unique Agora UIDs and subscriber tokens, attendance tracking, and automated 15-minute pre-session push alerts.",
        icon: "i-video"
      },
      {
        title: "Multi-Pass Cart & Buy-X-Get-Y Engine",
        desc: "Handles Day, Week, Month, and Year gym passes with provider Buy-X-Get-Y-Free promotions and server-verified Razorpay checkout.",
        icon: "i-shopping-bag"
      },
      {
        title: "FitTV Courses & Cricket Prediction Pools",
        desc: "Combines gender-filtered FitTV workout courses with a live Cricket Match Centre and host-run prediction pools that auto-lock 30 minutes before toss.",
        icon: "i-award"
      }
    ],
    resultsComparison: [
      { metric: "Gym & Trainer Discovery", before: "Fragmented offline enquiries & opaque pricing", after: "Haversine GPS distance search & 4-tier pass comparison" },
      { metric: "Pass & Offer Checkout", before: "Manual cash passes & untracked discounts", after: "Cart with Buy-X-Get-Y rules & verified Razorpay checkout" },
      { metric: "Remote Workouts & Content", before: "Unsecured links & missed class timings", after: "Token-gated Agora live video, 15m cron alerts & FitTV" },
      { metric: "Daily User Retention", before: "App opened only during gym visits", after: "Live Cricket Match Centre & host prediction pools" }
    ],
    architectureDetails: {
      pattern: "CodeIgniter 3 MVC REST JSON API (55+ Endpoints, 40+ MySQL Tables) Powering an Expo Android & iOS Mobile Marketplace",
      highlights: [
        "High-Scale Controller Architecture: Over 7,500 lines of modular PHP CodeIgniter 3 API logic serving 55+ paginated JSON endpoints across 40+ relational tables",
        "Stateless JWT + Blacklist Revocation: Combines SMS OTP verification with firebase/php-jwt access tokens and a server-side blacklist table for immediate logout invalidation",
        "Unified Razorpay Verification Pipeline: Single cryptographic signature verification layer securing gym bookings, live sessions, FitTV courses, pool entries, and host transfers",
        "Real-Time Agora Video & Cron Engine: Dynamic Agora subscriber token generation with UID mapping, join/leave attendance telemetry, and idempotent 15-minute cron push reminders",
        "Geospatial Discovery Queries: Combines Google Maps Reverse Geocoding API with Haversine spherical distance SQL calculations for instant nearest-provider sorting"
      ]
    },
    testimonial: {
      quote: "Vision Technolabs architected the entire Fitcket platform—from nearby gym discovery and flexible pass bookings to Agora live workout classes, FitTV courses, and cricket prediction pools. The 55+ endpoint API handles payments, video tokens, and push reminders reliably.",
      author: "Product & Engineering Team",
      role: "Marketplace Operations",
      company: "Fitcket"
    }
  },
  {
    id: "sitedesk",
    slug: "sitedesk",
    seoTitle: "SiteDesk: Real Estate ERP Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "SiteDesk – Real Estate Plot Sales, EMI Tracking & Site Management Platform",
    subtitle: "Multi-Site Plot Inventory, Buyer Cash/EMI Ledgers, Dastavej Registry, Selfie Attendance & Field Inquiry CRM",
    client: "SiteDesk by Vision Technolabs",
    industry: "Real Estate / Plotting & Layout Development / Sales Operations",
    duration: "12 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.sitedesk",
    domain: "com.visiontechnolabs.sitedesk",
    description: "SiteDesk is a mobile-first operations platform for real estate developers who sell plots across multiple sites. Team members see their assigned sites and live plot availability, register buyers, set up cash or EMI payment plans, record monthly instalments, track sale-deed (dastavej) paperwork, log site expenses with receipts, mark selfie attendance, and manage customer inquiries with follow-ups.",
    shortPitch: "Real estate plot developers juggle multiple layout sites, hundreds of plots, buyers paying via cash or multi-month EMIs, sale-deed (dastavej) registry paperwork, field expenses, staff attendance, and daily buyer inquiries. SiteDesk replaces scattered paper registers and spreadsheets with an Expo mobile app backed by a 40-endpoint CodeIgniter 3 MVC REST API (~4,600 lines of controller code) across 25+ MySQL tables—scoping data strictly to each staff member's assigned sites while automating EMI due reminders via Expo Push Notifications.",
    tags: ["Expo Mobile App", "Plot & EMI Management", "Dastavej Registry Tracker", "Selfie Attendance & CRM", "40 REST API Endpoints"],
    gradient: "linear-gradient(135deg, #0d9488, #0f172a)",
    image: "/app_images/Sitedesk/01_app_SD.webp",
    images: [
      "/app_images/Sitedesk/01_app_SD.webp"
    ],
    gallery: [
      {
        url: "/app_images/Sitedesk/01_app_SD.webp",
        caption: "SiteDesk Real Estate App — Assigned Site & Plot Availability, Buyer EMI Ledger, Dastavej Records & Field CRM",
        tag: "Real Estate Operations App",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "40", label: "REST API Endpoints" },
      { value: "25+", label: "Relational DB Tables" },
      { value: "3-Stage", label: "Auto EMI Push Alerts" },
      { value: "100%", label: "Site-Scoped Access" }
    ],
    challenge: "Real estate plotting developers operating across multiple layout sites struggled to maintain accurate, real-time visibility of available versus sold plots when teams relied on paper registers and phone calls. Buyers purchasing plots through monthly EMI plans or part-cash payments required strict month-by-month balance tracking and timely payment reminders, while sale-deed (dastavej) registry numbers were frequently disconnected from plot records. Furthermore, management lacked verifiable proof of field staff daily attendance, receipt-backed site expenses, and structured follow-up tracking for prospective plot inquiries.",
    solution: "Vision engineered SiteDesk, an Expo-powered mobile application supported by a 40-endpoint CodeIgniter 3 REST API (~4,600 lines of controller logic) and 25+ relational MySQL tables. Staff sign in via 30-minute time-limited mobile OTP with JWT blacklist security and see only their assigned sites, live available/sold plot counts, and layout maps. From the field, teams register buyers with Aadhaar details, configure Cash or monthly EMI plans, log instalments with duplicate protection, record dastavej registry numbers, upload receipt-backed site expenses, submit daily selfie attendance, and track buyer inquiries—while cron jobs automatically send EMI alerts 3 days before, on the due date, and when overdue.",
    deliverables: [
      "Cross-Platform Real Estate Operations Mobile App (Expo / React Native)",
      "40-Endpoint JWT-Secured CodeIgniter 3 MVC REST JSON API (~4,600 Lines of Code)",
      "Assigned-Site & Plot Inventory Engine with Live Available/Sold Filtering & Site Maps",
      "Buyer Onboarding & Flexible Cash / Monthly EMI Payment Plan Ledger",
      "Automated 3-Stage EMI Reminder Cron Engine (3 Days Prior, Due Date & Overdue Push Alerts)",
      "Sale-Deed (Dastavej) Registry Tracker & 4 MB Multi-Format Document Vault (JPG/PNG/PDF)",
      "Receipt-Backed Site Expense Workflow with Overall, Approved & Pending Summaries",
      "Daily Selfie Attendance & Salary Tracker + 4-Stage Field Inquiry Mini-CRM"
    ],
    techStack: [
      "Expo Mobile App (Android & iOS)",
      "PHP & CodeIgniter 3 (MVC REST API)",
      "MySQL / MariaDB (25+ Tables)",
      "JWT (firebase/php-jwt) + Token Blacklist",
      "Mobile SMS OTP Authentication",
      "Expo Push Notifications",
      "Cron Scheduler (EMI & Plan Expiry)",
      "Multipart Image & PDF Vault (Up to 4 MB)"
    ],
    modules: [
      {
        title: "Assigned-Site & Live Plot Inventory Management",
        icon: "i-layers",
        description: "Role-scoped site and plot directory giving sales staff real-time availability, layout maps, and buyer histories.",
        features: [
          "Executive dashboard summarizing total sites, total plots, active buyer inquiries, and cumulative site expenses",
          "Per-user data scoping ensuring field staff view and search only the real estate sites explicitly assigned to them",
          "Site summary cards displaying total, available, and sold plot counters alongside location, area size, site map, and listed layout map",
          "Interactive plot directory filterable by Available or Sold status, with plot detail views showing buyer info, payment plan, paid totals, and dastavej status"
        ]
      },
      {
        title: "Buyer Registration, Cash/EMI Plans & Auto-Reminders",
        icon: "i-credit-card",
        description: "End-to-end financial ledger tracking plot down payments, monthly EMI schedules, cash part-payments, and automated due alerts.",
        features: [
          "Buyer onboarding capturing full name, mobile number, email, residential address, and Aadhaar number linked directly to a specific plot and site",
          "Flexible Cash or EMI payment plans recording total plot price, down payment, remaining balance, EMI duration, start date, and monthly instalment amount",
          "Monthly instalment logging with payment mode, notes, running balance calculation, duplicate-entry prevention, and a separate cash part-payment log",
          "Scheduled cron jobs dispatching automated push and in-app reminders 3 days before the EMI due date, on the due date, and when an instalment is overdue"
        ]
      },
      {
        title: "Sale-Deed (Dastavej) Registry & Document Vault",
        icon: "i-file-text",
        description: "Legal registry tracking and secure cloud document storage tied directly to plots, buyers, and site operations.",
        features: [
          "Dedicated Sale-Deed (Dastavej) recording flow capturing the official registry number and registry amount against the buyer and plot",
          "Automatic completion badge on the plot detail screen once the dastavej record is logged",
          "In-app Document Vault supporting upload, listing, and deletion of personal or site documents across JPG, PNG, and PDF formats (up to 4 MB)",
          "Strict server-side MIME type and file size validation protecting storage integrity"
        ]
      },
      {
        title: "Site Expenses, Selfie Attendance & Monthly Salary",
        icon: "i-camera",
        description: "Field accountability suite combining receipt-verified site expenditure tracking with daily photo attendance and payroll visibility.",
        features: [
          "Site expense submission with description, amount, date, site selection, and mandatory receipt photo upload, filterable by site, month, and year",
          "Split expense totals showing Overall, Approved, and Pending amounts to support administrative review and approval",
          "Daily selfie attendance lock allowing one timestamped photo submission per day held in a pending review state",
          "Attendance and salary breakdown displaying Present, Absent, Pending, and Rejected counts alongside calculated monthly salary"
        ]
      },
      {
        title: "Field Inquiry Mini-CRM & JWT Device Security",
        icon: "i-users",
        description: "Built-in lead follow-up pipeline paired with OTP authentication, device registration, and automated subscription management.",
        features: [
          "Customer inquiry capture recording prospect name, mobile, address, interested site, notes, and scheduled follow-up date, time, and remarks",
          "4-stage lead pipeline tracking inquiries through Pending, Follow-Up, Converted, and Lost statuses with full search, edit, and delete controls",
          "30-minute time-limited Mobile OTP login issuing firebase/php-jwt tokens, backed by a database token blacklist and per-device push token registration",
          "Automated cron job for expiring lapsed subscription plans, plus CMS-served Privacy/Terms policies and self-service soft account deactivation"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Site-Scoped Plot Availability & Maps",
        desc: "Staff access only their assigned plotting sites with live Available/Sold plot counters, layout maps, and one-tap plot status updates.",
        icon: "i-layers"
      },
      {
        title: "Cash & EMI Plans with 3-Stage Alerts",
        desc: "Tracks down payments, monthly EMI instalments, and cash logs while cron jobs automatically alert accounts 3 days prior, on due date, and when overdue.",
        icon: "i-credit-card"
      },
      {
        title: "Dastavej Registry & 4 MB Document Vault",
        desc: "Links sale-deed (dastavej) numbers and amounts directly to plots and buyers, alongside a validated JPG/PNG/PDF document vault.",
        icon: "i-file-text"
      },
      {
        title: "Selfie Attendance, Expenses & Inquiry CRM",
        desc: "Combines daily timestamped selfie attendance, receipt-backed site expense approvals, and a 4-stage buyer inquiry follow-up CRM.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Plot Inventory Visibility", before: "Paper registers & phone calls across sites", after: "Live site-scoped Available/Sold counts & maps" },
      { metric: "EMI & Balance Tracking", before: "Manual spreadsheets & missed due dates", after: "Duplicate-proof EMI ledger & 3-stage push alerts" },
      { metric: "Legal & Field Accountability", before: "Unlinked dastavej files & unverified expenses", after: "Plot-linked dastavej records, receipt uploads & selfie attendance" },
      { metric: "Buyer Lead Conversion", before: "Lost walk-in inquiries & forgotten follow-ups", after: "Scheduled follow-up CRM (Pending to Converted)" }
    ],
    architectureDetails: {
      pattern: "CodeIgniter 3 MVC REST JSON API (40 Endpoints, 25+ MySQL Tables) with Site-Scoped Access & Cron Notification Engine",
      highlights: [
        "Per-User Site Scoping: Relational assignment middleware ensuring sales and field staff can query and mutate only their designated real estate sites",
        "40-Endpoint Controller Architecture: ~4,600 lines of structured PHP CodeIgniter 3 logic managing plots, buyers, EMI schedules, dastavej records, expenses, attendance, and CRM leads",
        "Stateless JWT + Blacklist Security: 30-minute SMS OTP authentication paired with firebase/php-jwt tokens, device push-token binding, and instant logout token blacklisting",
        "Automated Cron Scheduling: Background jobs evaluating EMI due dates (T-3 days, T-0, and Overdue) for Expo Push dispatch and auto-expiring lapsed subscriptions",
        "Idempotent Financial & Attendance Guards: Server-side constraints preventing duplicate monthly instalment entries and enforcing a strict one-selfie-per-day attendance lock"
      ]
    },
    testimonial: {
      quote: "SiteDesk brought all our plotting sites, buyer EMI schedules, dastavej registry records, site expenses, staff selfie attendance, and customer inquiry follow-ups into one mobile app. Each team member sees their assigned sites clearly and no EMI follow-up gets missed.",
      author: "Product & Operations Team",
      role: "Real Estate SaaS Division",
      company: "SiteDesk by Vision Technolabs"
    }
  },
  {
    id: "ghanshyam-murti-app",
    slug: "ghanshyam-murti-app",
    seoTitle: "Ghanshyam Murti: Mobile App Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Ghanshyam Murti Bhandar – Marble Murti E-Commerce Mobile App & REST API",
    subtitle: "Guest Shopping, Weight & Pincode Shiprocket Logistics, Razorpay/COD Checkout, Damage Claims & B2B Partner Onboarding App",
    client: "Ghanshyam Murti Bhandar, Rajkot, Gujarat",
    industry: "Devotional Articles, Marble Idols & Sculptures / Retail & E-Commerce",
    duration: "12 Weeks",
    country: "India",
    website: "https://ghanshyammurtibhandar.com/",
    domain: "ghanshyammurtibhandar.com",
    description: "The Ghanshyam Murti Bhandar mobile app brings a Rajkot handcrafted marble idol and devotional article store onto customers' phones. Shoppers browse categories and products, build a cart as a guest before signing in, calculate pincode-based Shiprocket delivery charges by weight, pay via Razorpay or Cash on Delivery, track shipments, raise photo/video damage claims, and apply as distributors, manufacturers, or investment partners.",
    shortPitch: "Selling heavy, fragile, handcrafted marble idols on mobile requires more than a standard catalogue: shipping costs depend on exact cart weight and buyer pincode, one-of-a-kind stock cannot oversell, and transit damage claims need photo/video evidence. Vision engineered the Ghanshyam Murti Bhandar mobile app and its 75-endpoint CodeIgniter 3 REST API (~5,100 lines of controller code) sharing a unified 35+ table MySQL database with the web storefront and admin suite.",
    tags: ["Mobile App & 75 REST APIs", "Guest Cart & OTP Login", "Shiprocket Weight Shipping", "Razorpay & COD Checkout", "B2B Partner Onboarding"],
    gradient: "linear-gradient(135deg, #b45309, #78350f)",
    image: "/app_images/Ghanshyam_Murti_Bhandar/01_app_GMB.webp",
    images: [
      "/app_images/Ghanshyam_Murti_Bhandar/01_app_GMB.webp"
    ],
    gallery: [
      {
        url: "/app_images/Ghanshyam_Murti_Bhandar/01_app_GMB.webp",
        caption: "Ghanshyam Murti Bhandar Mobile App — Guest Marble Idol Storefront, Shiprocket Pincode Rates, Razorpay Checkout & B2B Onboarding",
        tag: "E-Commerce Mobile App & API",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "75", label: "REST API Endpoints" },
      { value: "35+", label: "Shared MySQL Tables" },
      { value: "Zero-Login", label: "Guest Cart & Shipping Calc" },
      { value: "3-Channel", label: "App, Web & Admin Sync" }
    ],
    challenge: "Handcrafted marble idols and sculptures are heavy, fragile, high-value items where delivery charges vary significantly by total cart weight and destination pincode. Requiring mandatory sign-up before browsing or estimating shipping created friction for first-time mobile shoppers, while limited-stock idols risked overselling across web and app channels. Additionally, the business needed structured photo/video transit damage claim resolution and an in-app onboarding funnel for B2B distributors, manufacturers, and investment partners.",
    solution: "Vision built the Ghanshyam Murti Bhandar mobile application powered by a 75-endpoint CodeIgniter 3 MVC REST API (~5,100 lines of controller code) synchronized with the website and admin panel across 35+ MySQL tables. Visitors browse categories, build a cart, and estimate weight-based Shiprocket delivery charges without logging in, then authenticate via 5-minute SMS OTP + JWT to complete checkout via server-verified Razorpay or Cash on Delivery. Webhook-driven Shiprocket tracking, automated cancellation stock restoration, photo/video damage claims, and document-backed B2B partner onboarding complete the mobile experience.",
    deliverables: [
      "Cross-Platform E-Commerce Mobile App Synchronized with Web & Admin Database",
      "75-Endpoint JWT-Secured CodeIgniter 3 MVC REST API (~5,100 Lines of PHP)",
      "Parallel Guest Shopping Endpoints (Zero-Login Catalogue, Cart & Shipping Estimator)",
      "Dynamic Weight & Pincode Shipping Calculator via Shiprocket Serviceability API",
      "Dual Checkout Engine (Server-Verified Razorpay Signature Auth & Cash on Delivery)",
      "Secret-Token Authenticated Shiprocket Webhook for Real-Time AWB & Timeline Sync",
      "Photo & Video Evidence Damage/Refund Claim Workflow with Full Audit Trail",
      "In-App B2B Onboarding Portals for Distributors, Manufacturers & Investment Partners"
    ],
    techStack: [
      "Cross-Platform Mobile App (Android & iOS)",
      "PHP & CodeIgniter 3 (75 REST Endpoints)",
      "MySQL / MariaDB (35+ Shared Tables)",
      "JWT (firebase/php-jwt) + Token Blacklist",
      "5-Minute SMS OTP Authentication",
      "Razorpay Orders & Signature Verification",
      "Shiprocket Rates & Webhook Integration",
      "Multipart Photo, Video & PDF Upload Engine"
    ],
    modules: [
      {
        title: "Frictionless Guest Shopping & Rich Catalogue",
        icon: "i-shopping-bag",
        description: "Parallel guest and authenticated API routes letting mobile shoppers explore marble idols and build carts before registering.",
        features: [
          "Dedicated guest endpoints for home banners, category trees, best sellers, featured coupon offers, and full cart management without login",
          "Advanced product discovery with category filtering, keyword search, price/popularity sorting, and paginated mobile feeds",
          "Detailed product screens displaying multi-angle image galleries, SKU, HSN code, colour, MRP, selling price, discount %, stock count, and in-stock flags",
          "Seamless 5-minute SMS OTP login and JWT session upgrade with database token blacklisting on logout and self-service account deletion"
        ]
      },
      {
        title: "Weight-Aware Smart Cart & Shiprocket Pincode Rates",
        icon: "i-truck",
        description: "Real-time cart calculation engine factoring item weights, line-item GST, and live courier serviceability.",
        features: [
          "Live cart computation tracking subtotal, MRP total, total savings, line-by-line and aggregate GST, cumulative weight, and item availability",
          "Dynamic Shiprocket rate lookup combining total cart weight with the buyer's delivery pincode, rounding charges cleanly to whole rupees",
          "Full customer address book supporting multiple saved delivery locations with quick selection at checkout",
          "Automatic stock verification and deduction at order placement to prevent overselling one-of-a-kind marble sculptures"
        ]
      },
      {
        title: "Razorpay / COD Checkout & Webhook Order Tracking",
        icon: "i-credit-card",
        description: "High-trust payment processing paired with automated courier webhook updates and instant stock restoration on cancellation.",
        features: [
          "Choice of Cash on Delivery (COD) or online payment via Razorpay with server-side cryptographic signature verification before order confirmation",
          "Paginated order history with status filtering, itemized invoice breakdown, and a chronological order status timeline",
          "Secret-header-authenticated Shiprocket webhook automatically pushing AWB numbers and live courier milestones into the order database",
          "One-tap customer cancellation on pending or confirmed orders that automatically restores deducted stock back into live inventory"
        ]
      },
      {
        title: "Photo/Video Transit Damage & Refund Resolution",
        icon: "i-shield",
        description: "Structured post-purchase protection allowing buyers to submit multimedia proof for damaged marble items.",
        features: [
          "Item-level claim submission where buyers select Refund or Replacement, specify a damage reason, and attach detailed remarks",
          "Direct multipart upload of unboxing photos and video evidence attached to the claim record",
          "5-stage claim lifecycle (Pending, Under Review, Approved, Rejected, Refunded) visible inside the customer's app",
          "Complete resolution transparency showing admin remarks, processor identity, timestamps, refund method, amount, and transaction ID"
        ]
      },
      {
        title: "In-App B2B Network Onboarding (Distributors, Makers & Investors)",
        icon: "i-users",
        description: "Dedicated multi-step business application funnels built directly into the mobile app to expand the brand's supply and retail network.",
        features: [
          "Distributor onboarding capturing GST/PAN, expected monthly volume, territory, bank details, and uploaded GST certificate, PAN card, and shop photo",
          "Manufacturer application recording production capacity, MOQ, dispatch lead time, factory/warehouse details, and PDF price list/catalogue uploads",
          "Investment Partner portal capturing partnership type, capital commitment, source of funds, expected role, equity/profit share, and live application status tracking",
          "Database-driven Privacy Policy, Terms, Refund Policy, and Help & Support screens editable without app store re-releases"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Browse & Cart Without Login",
        desc: "Parallel guest API endpoints let first-time visitors explore categories, add marble idols to their cart, and check pincode shipping rates before signing in.",
        icon: "i-shopping-bag"
      },
      {
        title: "Weight & Pincode Shiprocket Pricing",
        desc: "Calculates exact courier serviceability and delivery charges from the cart's cumulative weight and destination pincode, synced via live Shiprocket webhooks.",
        icon: "i-truck"
      },
      {
        title: "Photo & Video Damage Claim Engine",
        desc: "Buyers submit photo and video evidence for transit damage and track claims from Pending to Refunded or Replaced with full transaction audit trails.",
        icon: "i-shield"
      },
      {
        title: "3-Tier B2B Partner Onboarding",
        desc: "Onboards Distributors, Manufacturers, and Investment Partners directly inside the app with validated GST, PAN, shop photo, and PDF catalogue uploads.",
        icon: "i-users"
      }
    ],
    resultsComparison: [
      { metric: "First-Time Visitor Conversion", before: "Mandatory sign-up wall before cart or shipping check", after: "Zero-login guest browsing, cart & pincode rate check" },
      { metric: "Heavy Idol Shipping Math", before: "Flat or manual shipping estimates causing losses", after: "Live Shiprocket rates by exact cart weight & pincode" },
      { metric: "Transit Damage Handling", before: "Unstructured WhatsApp photos & manual follow-ups", after: "In-app photo/video claim workflow with 5-stage tracking" },
      { metric: "Omnichannel Inventory", before: "Separate stock counts across web & phone orders", after: "Shared 35+ table MySQL DB across App, Web & Admin" }
    ],
    architectureDetails: {
      pattern: "75-Endpoint CodeIgniter 3 MVC REST JSON API Sharing a Unified 35+ Table MySQL Schema Across Mobile App, Web Storefront & Admin Suite",
      highlights: [
        "Unified Omnichannel Database: Shares 35+ relational tables with the web storefront and admin panel so inventory, orders, and pricing stay synchronized in real time",
        "Dual Guest & JWT Session Pipeline: Supports unauthenticated guest carts alongside 5-minute SMS OTP login, firebase/php-jwt tokens, and logout token blacklisting",
        "Automated Logistics & Stock Lifecycle: Combines Shiprocket rate calculation, secret-token webhook status ingestion, checkout stock deduction, and cancellation stock restoration",
        "Cryptographic Payment & Ownership Guards: Enforces server-side Razorpay signature verification and strict user-ID ownership checks on every order and claim endpoint",
        "Validated Multipart Document Engine: Processes high-resolution product galleries, buyer damage photos/videos, and B2B PDF catalogues and KYC certificates"
      ]
    },
    testimonial: {
      quote: "Our mobile app and 75-endpoint API share the exact same database as our website and admin panel. Customers can check Shiprocket delivery charges by pincode, pay via Razorpay or COD, track their marble murti shipment, and even apply as distributors right from their phone.",
      author: "Management Team",
      role: "Retail & E-Commerce Operations",
      company: "Ghanshyam Murti Bhandar, Rajkot"
    }
  },
  {
    id: "kreditmitraa",
    slug: "kreditmitraa",
    seoTitle: "Kreditmitraa: Loan App Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Kreditmitraa – Short-Term Loan & Referral Rewards Mobile App Platform",
    subtitle: "Instant 15/30-Day Loan Calculator, KYC Approval Gate, UPI Receipt Repayment & Milestone Referral Wallet",
    client: "Kreditmitraa",
    industry: "Fintech / Consumer Lending / Micro-Credit Operations",
    duration: "10 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.kreditmitraa",
    domain: "com.visiontechnolabs.kreditmitraa",
    description: "Kreditmitraa is a mobile-first short-term loan platform. Users register with a mobile OTP, complete their KYC and bank profile, wait for admin approval, calculate the exact repayable amount for a 15 or 30-day loan, apply in a few taps, track the loan from application to disbursal, and repay by UPI with a receipt upload. A built-in referral programme lets users earn wallet rewards and request withdrawals.",
    shortPitch: "Consumer lending demands absolute verification and pricing transparency: borrowers need to see every interest rupee, platform fee, and GST charge upfront, while lending teams must enforce strict one-active-loan limits and verify repayment receipts before closing loans. Vision engineered the Kreditmitraa mobile ecosystem and its 18-endpoint CodeIgniter 3 MVC REST API (~1,500 lines of controller code) across 10+ MySQL tables—featuring 30-day JWT sessions, KYC approval gates, scheme-based loan pricing, and a milestone referral wallet.",
    tags: ["Fintech & Loan App", "18 REST API Endpoints", "KYC Approval Gate", "UPI Receipt Repayments", "Referral Rewards Wallet"],
    gradient: "linear-gradient(135deg, #059669, #0284c7)",
    image: "/app_images/Kreditmitraa/01_app_KM.webp",
    images: [
      "/app_images/Kreditmitraa/01_app_KM.webp"
    ],
    gallery: [
      {
        url: "/app_images/Kreditmitraa/01_app_KM.webp",
        caption: "Kreditmitraa Mobile App — Short-Term Loan Dashboard, KYC Approval Gate, Repayment Desk & Referral Wallet",
        tag: "Fintech Mobile App & API",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "18", label: "REST API Endpoints" },
      { value: "15/30", label: "Day Micro-Tenures" },
      { value: "3-Stage", label: "KYC Approval States" },
      { value: "1-Active", label: "Loan Protection Rule" }
    ],
    challenge: "Short-term consumer micro-lending requires strict borrower authentication, zero unverified loan applications, and 100% transparent fee breakdowns (interest, processing fees, platform charges, and GST) before borrowing. Traditional offline processes suffer from unreviewed KYC documents, borrowers taking multiple overlapping loans beyond their repayment capacity, manual payment reconciliation without audit receipts, and no viral growth mechanism to bring in creditworthy new borrowers.",
    solution: "Vision engineered Kreditmitraa, an intuitive mobile lending app powered by an 18-endpoint CodeIgniter 3 REST API and 10+ relational MySQL tables. Borrowers register via time-limited SMS OTP and must pass an admin-reviewed 3-state KYC gate (Incomplete, Under Review, Active) before loan applications unlock. Borrowers select 15 or 30-day schemes with upfront fee itemization, apply in one tap under a strict one-active-loan rule, submit UPI repayments with up to 5 MB receipt uploads for review, and earn milestone referral cash credited to an in-app withdrawal wallet.",
    deliverables: [
      "Cross-Platform Fintech Mobile Application (Android & iOS)",
      "18-Endpoint JWT-Secured CodeIgniter 3 MVC REST JSON API (~1,500 Lines of Code)",
      "Guided 3-State KYC & Bank Account Approval Workflow (Incomplete, Under Review, Active)",
      "Scheme-Based 15/30-Day Loan Pricing Calculator with Complete Upfront GST & Fee Itemization",
      "One-Active-Loan Lifecycle Engine (Pending, Assigned, Funded, Disbursed, Paid, Completed)",
      "UPI Repayment Module with Admin-Managed QR & 5 MB Multipart Receipt Verification",
      "Milestone-Driven Referral Engine with Direct Wallet Crediting & Payout Requests",
      "Admin Configurator for Dynamic Loan Schemes, Payment QR Settings & Referral Rewards"
    ],
    techStack: [
      "Cross-Platform Mobile App (Android & iOS)",
      "PHP & CodeIgniter 3 (18 REST Endpoints)",
      "MySQL / MariaDB (10+ Relational Tables)",
      "HS256 JWT Authentication + Token Blacklist",
      "SMS OTP Verification Gateway",
      "UPI & Dynamic QR Payment Integration",
      "5 MB Document & Receipt Upload Vault",
      "Configurable Admin Lending Schemes"
    ],
    modules: [
      {
        title: "SMS OTP Onboarding & Guided KYC Approval Gate",
        icon: "i-shield",
        description: "Strict borrower verification pipeline preventing fraudulent applications through a guided three-state profile workflow.",
        features: [
          "Passwordless mobile SMS OTP registration and login with 30-day JWT sessions and database token blacklist on logout",
          "Comprehensive profile capture covering personal details, marital status, birth date, education, employment, and address",
          "Identity verification (ID numbers, KYC document photos, selfie photo) and bank account credentials for direct disbursal",
          "Guided 3-state profile tracker (Incomplete, Under Review within 24h, Active) that locks loan applications until an admin formally approves"
        ]
      },
      {
        title: "Transparent Loan Calculator & Single-Loan Engine",
        icon: "i-calculator",
        description: "Scheme-based lending calculation displaying every rupee of interest, fees, and GST upfront before application.",
        features: [
          "Interactive scheme pricing engine supporting 15 and 30-day tenures with interest rates, processing fees, platform charges, and GST",
          "100% upfront fee transparency displaying the exact net disbursal and total repayable amount before the borrower taps Apply",
          "Strict one-active-loan rule automatically blocking new requests if a pending or active loan already exists",
          "Full 6-stage lifecycle tracking: Pending, Assigned, Funded, Approved, Disbursed, and Completed with days-left countdowns"
        ]
      },
      {
        title: "UPI Repayment Desk & Receipt Review Pipeline",
        icon: "i-credit-card",
        description: "Frictionless UPI repayments paired with mandatory transaction receipt verification for clean loan closure.",
        features: [
          "Admin-managed UPI VPA and dynamic QR code served directly to the borrower's app when repayment is due",
          "Multipart receipt submission supporting JPG, PNG, WebP, and PDF uploads (up to 5 MB) linked directly to the disbursed loan",
          "Automated review queue moving submitted repayments into the admin verification pipeline before closing the loan",
          "Enforces lending integrity by allowing repayment submissions exclusively on disbursed loans"
        ]
      },
      {
        title: "Milestone Referral Rewards & Digital Wallet",
        icon: "i-award",
        description: "Viral peer-to-peer growth loop crediting real cash rewards into an in-app wallet upon loan disbursal milestones.",
        features: [
          "Unique referral code and shareable invite link generated for every registered borrower",
          "4-milestone referral tracking (Invited, Applied, Approved, Disbursed) ensuring rewards unlock only when referred users successfully borrow",
          "Digital wallet displaying available balance, cumulative earnings, and detailed milestone transaction history",
          "In-app withdrawal requests to verified bank accounts with admin-configurable minimum thresholds (default ₹500)"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Admin-Gated 3-State KYC Flow",
        desc: "Borrowers advance through Incomplete, Under Review, and Active states, unlocking loan applications only after formal profile verification.",
        icon: "i-shield"
      },
      {
        title: "15/30-Day Loan Pricing Calculator",
        desc: "Displays the exact total payable with itemized interest, processing fees, platform charges, and GST before the borrower submits.",
        icon: "i-calculator"
      },
      {
        title: "UPI Repayment with Receipt Proof",
        desc: "Enables instant UPI QR payments with up to 5 MB document uploads (JPG/PNG/WebP/PDF) for reviewable, dispute-free loan closures.",
        icon: "i-credit-card"
      },
      {
        title: "Milestone Referral Wallet & Payouts",
        desc: "Rewards users with wallet cash when their referred friends get loans disbursed, with bank withdrawal requests above ₹500.",
        icon: "i-award"
      }
    ],
    resultsComparison: [
      { metric: "Borrower Verification", before: "Unchecked applications prone to defaults", after: "3-state KYC review gate before application unlocks" },
      { metric: "Pricing Transparency", before: "Hidden charges discovered at repayment", after: "100% upfront itemization of fees, interest & GST" },
      { metric: "Over-Lending Risk", before: "Borrowers applying for multiple concurrent loans", after: "Strict one-active-loan constraint enforced by API" },
      { metric: "Repayment Auditing", before: "Untracked manual transfers causing disputes", after: "UPI QR + 5 MB receipt upload in admin review queue" }
    ],
    architectureDetails: {
      pattern: "CodeIgniter 3 MVC REST JSON API (18 Endpoints, 10+ Relational MySQL Tables) with 30-Day HS256 JWT Security",
      highlights: [
        "18-Endpoint REST Architecture: ~1,500 lines of structured PHP CodeIgniter 3 controller logic managing auth, KYC, loans, repayments, and wallet ledger",
        "HS256 JWT + Blacklist Security: 30-day token sessions combined with SMS OTP verification and a database blacklist table for immediate logout invalidation",
        "Dynamic Scheme Engine: Decouples interest rates, processing fees, platform charges, and referral amounts into admin-configurable database tables",
        "Deterministic State Machine: Strict loan lifecycle transitions (Pending → Assigned → Funded → Disbursed → Paid/Completed) preventing invalid states",
        "Audit-Proof Multipart Uploads: Server-side validation for KYC document photos, user selfies, and repayment transaction receipts up to 5 MB"
      ]
    },
    testimonial: {
      quote: "Kreditmitraa structured our short-term micro-lending operations from day one. Borrowers see exact loan interest and fees upfront, our team reviews KYC documents before unlocking applications, and UPI repayments are backed by uploaded receipts.",
      author: "Operations & Risk Team",
      role: "Micro-Credit Division",
      company: "Kreditmitraa"
    }
  },
  {
    id: "aexongraphics-crm",
    slug: "aexongraphics-crm",
    seoTitle: "Aexon Graphics: Packaging CRM Case Study",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "Aexon Graphics CRM – Print & Packaging Production, Purchase Order and Invoicing System",
    subtitle: "End-to-End Flexo Printing & Packaging Factory ERP, Station Workstation Tracking & WhatsApp Invoicing",
    client: "Aexon Graphics",
    industry: "Printing, Flexo Printing & Packaging Manufacturing",
    duration: "8 Weeks",
    country: "India",
    website: "https://crm.aexongraphics.com",
    domain: "crm.aexongraphics.com",
    description: "An internal production ERP and shop-floor workflow management system running a print and packaging factory from raw material purchase orders to floor workstation dispatch, material waste control, and WhatsApp invoicing.",
    shortPitch: "The Aexon Graphics CRM runs a print and packaging factory from order to dispatch. The office creates Purchase Orders for raw material, turns each approved order into a Job, and sends it through production stations such as plate making, printing, lamination, punching, pasting, cutting, and dispatch. Each worker sees only their own jobs, and the system tracks material stock, stage progress, and waste. GST-ready Purchase Orders and Proforma Invoices are created as PDFs and sent over WhatsApp.",
    tags: ["Print & Packaging ERP", "PHP / CodeIgniter", "Production Workstations", "Dompdf & WhatsApp", "Live Platform"],
    gradient: "linear-gradient(135deg, #0284c7, #0f172a)",
    image: "/images/axon/01_axon.webp",
    images: [
      "/images/axon/01_axon.webp"
    ],
    gallery: [
      {
        url: "/images/axon/01_axon.webp",
        caption: "Aexon Graphics CRM — Print & Packaging Production, Station Workstation Queue & Invoicing Overview",
        tag: "Production ERP & Factory Desk",
        badge: "Screen 01 · Production Overview"
      }
    ],
    metrics: [
      { value: "8 Stations", label: "Production Floor Stages" },
      { value: "0% Overuse", label: "Material Stock Protection" },
      { value: "<3 Sec", label: "Dompdf & WhatsApp Dispatch" },
      { value: "100%", label: "Floor Stage Traceability" }
    ],
    challenge: "A print and packaging manufacturing plant relies on a precise, multi-step chain: raw materials (sheets, rolls, laminates) must be ordered and inspected; each client order must be split into specialized manufacturing instructions across plate making, flexo printing, lamination, punching, pasting, and cutting machines; and finished units must be packed, dispatched, and invoiced. Prior to this CRM, the entire plant relied on handwritten job cards, loose paper PO slips, and chaotic phone calls between the front office and floor machine operators. This led to frequent scheduling bottlenecks, untracked paper waste and material shortages, lost jobs on the shop floor, workers skipping required quality checkpoints, and tedious manual accounting to calculate GST and email proforma invoices to clients.",
    solution: "Vision architected and deployed a role-governed internal production ERP and shop-floor workflow platform powered by PHP CodeIgniter 3.1 and MySQL. The system bridges front-office procurement with factory operations: approved Purchase Orders dynamically convert into numbered Jobs with strict stock allocation limits; an intelligent stage sequencer routes jobs one active station at a time to dedicated worker dashboards; floor operators log material consumption and final sheet waste counts before closing a stage; and office administrators generate print-ready Dompdf purchase orders and GST proforma invoices, dispatching them directly to vendor and customer WhatsApp numbers via an integrated QR session service.",
    deliverables: [
      "Role-Secured Factory Management ERP (Office Admin & Station Worker Portals)",
      "Purchase Order Management with Multi-Line Raw Material Specs & Automatic GST Split",
      "Dynamic PO-to-Job Converter with Rigid Material Stock Protection & Allocation Caps",
      "8-Station Sequential Job Stage Routing Engine (Plate, Print, Laminate, Punch, Paste, Cut, Dispatch, Complete)",
      "Worker Workstation Floor Queues with Role-Locked Stage Ownership & Instruction Cards",
      "Raw Material Consumption & Production Sheet Waste Tracking Console",
      "GST Proforma Invoicing Engine with Company Profile & Multi-Bank Account Binding",
      "Automated Dompdf PDF Engine with 1-Click WhatsApp Document Dispatch (QR Session Integration)",
      "Built-in Production Text Spell-Check Integration with Industry Term Whitelisting"
    ],
    techStack: [
      "PHP 7.4 / 8.x",
      "CodeIgniter 3.1 MVC",
      "MySQL / MariaDB (mysqli)",
      "Dompdf 3.x (Vector PDF)",
      "WhatsApp Messaging Service (QR Webhooks)",
      "HTML5 & CSS3",
      "Bootstrap Admin Layout",
      "JavaScript (ES6) & jQuery",
      "LanguageTool API",
      "Apache Web Server (LAMP)"
    ],
    modules: [
      {
        title: "Purchase Order & Raw Material Stock Governance",
        icon: "i-clipboard",
        description: "Office procurement desk managing vendor purchases with granular specifications, automated tax splits, and sequential PO numbering.",
        features: [
          "Detailed material line entry: brand, quantity, size, GSM, micron, kilograms, rate, and line amount",
          "Automated subtotal, discount (percentage or fixed), and CGST/SGST tax split calculation",
          "Typeahead party lookup suggesting existing suppliers to eliminate duplicate data entry",
          "Lifecycle states (Pending, Approved, Completed, Cancelled) with edit locks on approved orders"
        ]
      },
      {
        title: "PO-to-Job Conversion & Material Allocation Engine",
        icon: "i-settings",
        description: "Automated transition bridge converting approved vendor POs into production jobs with strict stock consumption boundaries.",
        features: [
          "Unique job numbering algorithm generating deterministic formats (e.g., JOB-<date>-<seq>)",
          "Stock protection logic verifying allocated material against PO line quantities to prevent over-allocation",
          "Per-job material tracking reflecting total PO volume, allocated stock, and unassigned balance in real time",
          "Flexible station checklist allowing custom production routes tailored to specific packaging specifications"
        ]
      },
      {
        title: "8-Station Production Routing & Sequential Stage Engine",
        icon: "i-repeat",
        description: "Deterministically advances jobs through specialized floor stations, enforcing single-active-stage integrity.",
        features: [
          "Dedicated station specifications: Plate cutting dimensions, Printing colors/types, Lamination finishes, Punching methods & Pasting/Cutting counts",
          "Single-active-stage rule: Stage 1 begins 'In Progress' while subsequent stages remain pending until predecessors complete",
          "Automatic assignment linking each selected station to its currently active shop-floor worker",
          "Admin job cockpit displaying real-time stage progress, material logs, and full station instructions"
        ]
      },
      {
        title: "Worker Workstation Floor Console & Station Ownership",
        icon: "i-user-check",
        description: "Distraction-free floor portal displaying only assigned jobs with strict ownership verification.",
        features: [
          "My Work Station queue filtering jobs by stage state (Total, In Progress, Completed, Pending)",
          "Strict ownership enforcement preventing unauthorized workers from advancing external stages",
          "Specialized material usage logging restricted to Printing and Dispatch stations with PO cap validation",
          "Job Complete terminal capturing final output quantity and wasted sheets before closing the job"
        ]
      },
      {
        title: "GST Proforma Invoicing & Company Bank Profiles",
        icon: "i-file-text",
        description: "Commercial invoicing suite linked directly to approved POs with automated tax calculation and multi-bank selection.",
        features: [
          "1-click generation from approved purchase orders carrying customer address, mobile, and GSTIN",
          "Granular line items (product name, quantity, unit, and unit rate) with automated CGST/SGST calculation",
          "Company profile binding featuring company logo, contact data, and selectable primary bank account details",
          "Admin invoice archive with status filters, instant print views, and downloadable files"
        ]
      },
      {
        title: "Automated Dompdf PDF Engine & WhatsApp QR Gateway",
        icon: "i-share-2",
        description: "Direct paperless document delivery sending production POs and invoices over WhatsApp.",
        features: [
          "Dompdf 3.x vector PDF compiler creating pixel-perfect, GST-compliant A4 documents",
          "Integrated WhatsApp web service connecting via admin QR code scan with live status indicators",
          "Instant 1-click dispatch delivering PO and invoice PDFs directly to vendor or client mobile numbers",
          "Eliminates email attachments, manual downloads, and paper printing delays"
        ]
      },
      {
        title: "Factory Floor Spell-Check & Quality Guard",
        icon: "i-check-circle",
        description: "Inline text verification validating production instructions with industry-specific vocabulary.",
        features: [
          "Integrated spell-check API evaluating text fields as office staff enter critical job specifications",
          "Smart whitelisting ignoring industry jargon and business acronyms such as 'AEXON', 'GST', and 'FLEXO'",
          "Eliminates typographical errors in plate dimensions, color notes, and customer delivery remarks",
          "Audited production logs preserving complete historical records for every finished job"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "8-Stage Production Floor Routing",
        desc: "Sequences jobs across Plate, Printing, Lamination, Punching, Pasting, Cutting, Dispatch, and Complete with single-active-stage integrity.",
        icon: "i-layers"
      },
      {
        title: "Strict PO Stock Protection",
        desc: "Guarantees material allocated across production jobs never exceeds approved purchase order stock quantities.",
        icon: "i-shield"
      },
      {
        title: "Worker-Secured Workstations",
        desc: "Shop-floor workers access only their assigned machine stages with role-locked status and waste reporting.",
        icon: "i-users"
      },
      {
        title: "Dompdf + WhatsApp Document Delivery",
        desc: "Generates GST-ready vector PDFs and dispatches them directly to vendor/party WhatsApp chats via QR session.",
        icon: "i-smartphone"
      }
    ],
    resultsComparison: [
      { metric: "Shop-Floor Visibility", before: "Lost paper job cards & constant phone queries", after: "Live digital workstation queues with sequential progress" },
      { metric: "Raw Material Consumption", before: "Unchecked usage causing stock shortfalls", after: "Rigid allocation caps locked to approved PO line stock" },
      { metric: "Document Dispatch Time", before: "Manual PDF printing, scanning & email sending", after: "<3-second automated Dompdf creation & WhatsApp delivery" },
      { metric: "Station Quality & Handover", before: "Unrecorded waste & finger-pointing between shifts", after: "Stage ownership with sheet counts & waste recorded at closure" }
    ],
    architectureDetails: {
      pattern: "CodeIgniter 3.1 MVC Production ERP with Role-Segregated Dashboards, Dompdf Vector Compiler & WhatsApp Gateway",
      highlights: [
        "MVC Architecture: Modular CodeIgniter 3.1 controller and model structure separating procurement, job scheduling, floor workstations, and invoicing",
        "Relational Integrity: Linked MySQL schema enforcing foreign key relations across purchase_orders, jobs, job_stages, and machine-specific detail tables",
        "Single-Active-Stage State Machine: Deterministic progression where stage N+1 unlocks only upon stage N completion, updating global job status in real time",
        "Material Quota Enforcement: Algorithmic checks at database level preventing job allocations from exceeding available purchase order item volumes",
        "Headless Document & Messaging Pipeline: Server-side Dompdf 3.x vector rendering paired with a persistent WebSocket/HTTP WhatsApp QR messaging daemon"
      ]
    },
    testimonial: {
      quote: "Aexon Graphics CRM transformed our packaging factory from chaotic paper job cards into a synchronized digital production floor. Every machine operator knows their exact job queue, our raw material stock is protected against overuse, and our office dispatches GST invoices over WhatsApp in seconds.",
      author: "Plant Operations & Administration",
      role: "Production Management",
      company: "Aexon Graphics"
    }
  },
  {
    id: "loksangeet",
    slug: "loksangeet",
    seoTitle: "Loksangeet: Music App Case Study",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "Loksangeet – Traditional & Regional Songs Lyrics Mobile App Platform",
    subtitle: "Nested Regional Song Library, Multi-Field Search, Community Moderation & Mobile Lyrics Reader",
    client: "Loksangeet",
    industry: "Media & Entertainment / Regional Music and Culture",
    duration: "8 Weeks",
    country: "India",
    website: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.loksangeet",
    domain: "com.visiontechnolabs.loksangeet",
    description: "Loksangeet is a mobile lyrics library for traditional and regional songs. Listeners browse a nested category tree, open any song to read its lyrics, search by title, lyrics or category, and save favourites. Community members can suggest songs or submit lyrics as text or scanned files (images up to 2 MB or PDFs up to 10 MB), routed through an editorial moderation review.",
    shortPitch: "Traditional and regional folk songs often live scattered across handwritten diaries, fragmented PDFs, and oral memory. Loksangeet unifies regional musical heritage into an elegant mobile platform powered by a 26-endpoint CodeIgniter 3 MVC REST API (~2,200 lines of controller code) and relational MySQL database. Featuring a multi-level category tree, full-text lyrics search, personal favourites, lightweight mobile authentication with token blacklisting, and a 3-state community moderation workflow, Loksangeet allows cultural song libraries to grow continuously under strict editorial quality control.",
    tags: ["Lyrics Mobile App", "26 REST Endpoints", "CodeIgniter MVC", "Nested Categories", "Community Moderation", "JWT Security"],
    gradient: "linear-gradient(135deg, #d97706, #9333ea)",
    image: "/app_images/loksangeet/01_app_LSL.webp",
    images: [
      "/app_images/loksangeet/01_app_LSL.webp"
    ],
    gallery: [
      {
        url: "/app_images/loksangeet/01_app_LSL.webp",
        caption: "Loksangeet Mobile App — Traditional & Regional Lyrics Library, Nested Categories, Search & Community Moderation",
        tag: "Lyrics Mobile App & API",
        badge: "Screen 01 · Production View"
      }
    ],
    metrics: [
      { value: "26", label: "REST API Endpoints" },
      { value: "3-Level", label: "Nested Category Tree" },
      { value: "100%", label: "Moderation Gate" },
      { value: "10 MB", label: "Max Scanned PDF Vault" }
    ],
    challenge: "Traditional and regional songs (folk music, bhajans, prarthanas, and cultural poetry) were dispersed across personal notebooks, unorganized PDFs, and social media photos with no unified searchable digital library. Finding a song from a single half-remembered line was nearly impossible; large repertoires required intuitive hierarchical categorization (genres, sub-genres, poets, and occasions); and welcoming community submissions risked inundating the app with spam, corrupt formatting, or copyrighted duplicates without an editorial review gate.",
    solution: "Vision engineered the Loksangeet mobile ecosystem and its robust 26-endpoint CodeIgniter 3 REST JSON API. The platform features lightweight mobile registration and HS256 JWT sessions with instant database token blacklisting upon logout; a nested category and sub-category browsing tree displaying real-time song counters; high-speed multi-field search scanning titles, lyrics text, and categories; a mobile-optimized lyrics reader with normalized typography; and a community submission pipeline enabling users to contribute lyrics as text, photos, or scanned PDFs (up to 10 MB) governed by an admin moderation workflow (Pending, Approved, Rejected).",
    deliverables: [
      "Cross-Platform Mobile Application (Android & iOS) with Clean Lyrics Reader",
      "26-Endpoint JWT-Secured CodeIgniter 3 MVC REST JSON API (~2,200 Lines of Code)",
      "Multi-Tier Hierarchical Category & Sub-Category Browsing Tree with Song Counts",
      "Unified Multi-Field Full-Text Search Engine (Song Titles, Lyrics Content & Categories)",
      "Personal Favourites Manager with Duplicate Protection & Offline Sync",
      "Community Contribution Pipeline for Text Lyrics & Scanned Document Attachments (Images up to 2 MB, PDFs up to 10 MB)",
      "3-State Editorial Moderation Workflow (Pending, Approved, Rejected) with Contributor Status Tracking",
      "Dynamic Certificates Showcase, User Profile Management & Remote In-App Policy Pages"
    ],
    techStack: [
      "PHP 7.4 / 8.x",
      "CodeIgniter 3 MVC",
      "MySQL / MariaDB",
      "RESTful JSON API",
      "firebase/php-jwt (HS256)",
      "Token Blacklist Security",
      "Multi-Field Text Search",
      "Multipart File & PDF Vault",
      "Rich-Text Sanitization",
      "Apache Web Server (LAMP)"
    ],
    modules: [
      {
        title: "Lightweight Onboarding & HS256 JWT Authentication",
        icon: "i-shield",
        description: "Frictionless mobile sign-up and security engine protecting user accounts and personal favourites.",
        features: [
          "Minimalist registration requiring only user name and mobile number, blocking duplicate registrations",
          "Fast mobile-number login with real-time active status validation turning away deactivated accounts",
          "Stateless HS256 JWT sessions backed by a server-side database token blacklist table for immediate invalidation upon logout",
          "In-app account deletion workflow adhering strictly to Google Play and Apple App Store privacy mandates"
        ]
      },
      {
        title: "Multi-Tier Category & Sub-Category Browsing Tree",
        icon: "i-layers",
        description: "Hierarchical catalogue organizing extensive song repertoires into intuitive cultural taxonomies.",
        features: [
          "Multi-level category tree with category banner images, custom display ordering, sub-category counts, and active song totals",
          "Dedicated sub-category listings queried by parent category ID with individual song tallies",
          "Category-specific search and instant filtering enabling listeners to jump directly to target genres",
          "Admin-configurable tree structure allowing new categories and sub-genres without publishing app updates"
        ]
      },
      {
        title: "Mobile-Optimized Song Catalogue & Lyrics Reader",
        icon: "i-music",
        description: "Distraction-free mobile reading experience rendering rich regional typography cleanly.",
        features: [
          "Category-filtered song lists displaying active, approved songs with optimized alphabetical and popularity ordering",
          "Complete song detail view displaying title, verified author/genre details, full lyrics body, and instant favourite status",
          "Rich-text sanitization and normalization pipeline ensuring fonts, stanzas, and regional scripts render seamlessly on all screen sizes",
          "Active status guards preventing draft or unpublished songs from being accessed in the public library"
        ]
      },
      {
        title: "Multi-Field Smart Search Engine",
        icon: "i-search",
        description: "High-speed database search resolving queries across song metadata and lyrics text simultaneously.",
        features: [
          "Simultaneous query execution matching across song titles, lyrics body text, and parent/sub-category names",
          "Surfaces the right song even when listeners remember only a single line or chorus phrase",
          "Case-insensitive matching with regional text phonetic tolerance",
          "Sub-second query response times optimized for high-concurrency mobile traffic"
        ]
      },
      {
        title: "Personal Favourites & User-Curated Collections",
        icon: "i-heart",
        description: "Bookmark engine allowing listeners to curate personal libraries for offline or quick access.",
        features: [
          "Instant one-tap bookmarking from any song detail view",
          "Server-side duplicate protection preventing accidental double-entries in user collections",
          "Automatic verification checking that favourited songs remain active and approved in the central catalogue",
          "Dedicated 'My Favourites' screen with quick-remove swipe gestures and instant reload"
        ]
      },
      {
        title: "Community Submissions & 3-State Moderation Gate",
        icon: "i-file-text",
        description: "Crowdsourced contribution pipeline combining user submissions with editorial quality control.",
        features: [
          "Song suggestions module allowing users to propose unlisted songs with title and banner photo",
          "Comprehensive lyrics contribution desk supporting text typing, image uploads (up to 2 MB), and scanned PDF documents (up to 10 MB)",
          "3-state moderation lifecycle (Pending → Approved / Rejected) ensuring only editor-verified lyrics appear publicly",
          "'My Submissions' tracking console allowing contributors to monitor the review status of their submissions in real time"
        ]
      },
      {
        title: "Certificates Gallery, Profile & Dynamic Policies",
        icon: "i-award",
        description: "Trust and compliance center serving dynamic recognitions, user profiles, and legal policies.",
        features: [
          "Comprehensive user profile editor capturing name, email, business, address, taluka, district, pincode, and profile photo",
          "Certificates gallery displaying active institutional recognitions and awards, served chronologically with newest first",
          "Remote policy delivery rendering Terms & Conditions and Privacy Policy directly from API endpoints without app resubmissions",
          "Centralized media storage managing validated document uploads and image assets"
        ]
      }
    ],
    featureHighlights: [
      {
        title: "Nested Category & Sub-Category Tree",
        desc: "Browse rich regional song collections hierarchically with real-time song counters and custom ordering.",
        icon: "i-layers"
      },
      {
        title: "Multi-Field Full-Text Search",
        desc: "Instant search across song titles, lyrics text, and categories so users find songs from half-remembered lines.",
        icon: "i-search"
      },
      {
        title: "Community Submissions & Moderation",
        desc: "Enables community members to submit lyrics as text or scanned PDFs/images with a 3-state editorial gate.",
        icon: "i-file-text"
      },
      {
        title: "Lightweight JWT & Token Blacklist",
        desc: "Fast onboarding via name & mobile with secure HS256 JWT sessions and instantaneous server-side logout blacklisting.",
        icon: "i-shield"
      }
    ],
    resultsComparison: [
      { metric: "Lyrics Organization", before: "Scattered in paper diaries, photos & PDFs", after: "Centralized nested category tree with instant lyrics reader" },
      { metric: "Song Discovery", before: "Impossible to find songs without exact titles", after: "Full-text search querying titles, lyrics lines & categories" },
      { metric: "Community Sourcing", before: "Unchecked submissions risking spam & duplicates", after: "Editorial moderation gate (Pending/Approved/Rejected)" },
      { metric: "Content Freshness", before: "App update needed to add new songs or policies", after: "100% dynamic API updates without publishing app builds" }
    ],
    architectureDetails: {
      pattern: "26-Endpoint CodeIgniter 3 MVC REST JSON API with HS256 JWT Token Blacklisting & Multi-Part Moderation Pipeline",
      highlights: [
        "26-Endpoint REST Architecture: ~2,200 lines of structured PHP CodeIgniter 3 controller logic handling auth, categories, songs, search, contributions, and certificates",
        "HS256 JWT + Token Blacklist Security: Lightweight mobile authentication combined with a database blacklist table ensuring tokens are revoked immediately on logout",
        "Multi-Field Query Indexing: Fast database queries searching across song titles, rich-text lyrics bodies, and parent/child category names",
        "Moderation State Machine: Crowdsourced submissions flow through strict lifecycle states (Pending → Approved / Rejected), shielding the public catalogue from unverified content",
        "Multi-Part Media & PDF Vault: Secure handling for user avatar photos and contributor submissions supporting images up to 2 MB and PDF manuscripts up to 10 MB"
      ]
    },
    testimonial: {
      quote: "Loksangeet gave our traditional and regional songs a modern digital home. Listeners can find lyrics simply by typing a half-remembered line, and our editorial moderation gate ensures our community keeps contributing songs without sacrificing library quality.",
      author: "Editorial & Cultural Curation Team",
      role: "Content & Community Operations",
      company: "Loksangeet Mobile Platform"
    }
  }
];

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  if (slug === "finedge-lending") {
    return caseStudiesData.find((item) => item.slug === "suryadeepcarrent" || item.id === "suryadeepcarrent") || caseStudiesData[0];
  }
  if (slug === "novapay-b2b-portal") {
    return caseStudiesData.find((item) => item.slug === "srlpixel" || item.id === "srlpixel") || caseStudiesData[1];
  }
  if (slug === "luxe-d2c-storefront") {
    return caseStudiesData.find((item) => item.slug === "recomm" || item.id === "recomm") || caseStudiesData[2];
  }
  if (slug === "glow-skincare-commerce" || slug === "stayflow" || slug === "pg-crm" || slug === "pg") {
    return caseStudiesData.find((item) => item.slug === "stayflow-crm" || item.id === "stayflow-crm") || caseStudiesData[3];
  }
  if (slug === "caresync-telehealth" || slug === "carepulse-telehealth" || slug === "carepulse" || slug === "telehealth") {
    return caseStudiesData.find((item) => item.slug === "carepulse-telehealth" || item.id === "carepulse-telehealth") || caseStudiesData.find((item) => item.slug === "medicheck") || caseStudiesData[4];
  }
  if (slug === "lodgeflow-hospitality" || slug === "lodgeflow" || slug === "hotel-pms" || slug === "hotel") {
    return caseStudiesData.find((item) => item.slug === "lodgeflow-hospitality" || item.id === "lodgeflow-hospitality") || caseStudiesData[0];
  }
  if (slug === "edupulse-learning" || slug === "edupulse" || slug === "lms" || slug === "elearning") {
    return caseStudiesData.find((item) => item.slug === "edupulse-learning" || item.id === "edupulse-learning") || caseStudiesData.find((item) => item.slug === "fitcket") || caseStudiesData[14];
  }
  if (slug === "nandani" || slug === "nandani-appliances" || slug === "nandanikitchenware") {
    return caseStudiesData.find((item) => item.slug === "nandani" || item.id === "nandani") || caseStudiesData[4];
  }
  if (slug === "fitpulse-workout-app" || slug === "medicheck" || slug === "ddi-checker" || slug === "medicheck-ddi") {
    return caseStudiesData.find((item) => item.slug === "medicheck" || item.id === "medicheck") || caseStudiesData[5];
  }
  if (slug === "billbook" || slug === "billsbook" || slug === "bill-book" || slug === "nexus-ai-support-agents" || slug === "intellidoc-rag-engine" || slug === "shipfast-logistics" || slug === "metrobuild-erp-system" || slug === "peakscale-performance-ads" || slug === "urbanzen-cro-campaign") {
    return caseStudiesData.find((item) => item.slug === "billbook" || item.id === "billbook") || caseStudiesData[6];
  }
  if (slug === "ghanshyammurtibhandar" || slug === "ghanshyam" || slug === "murti" || slug === "ghanshyam-murti-bhandar") {
    return caseStudiesData.find((item) => item.slug === "ghanshyammurtibhandar" || item.id === "ghanshyammurtibhandar") || caseStudiesData[7];
  }
  if (slug === "automobile" || slug === "venus-automobile" || slug === "venusautomobile" || slug === "auto-crm" || slug === "auto") {
    return caseStudiesData.find((item) => item.slug === "automobile" || item.id === "automobile") || caseStudiesData[8];
  }
  if (slug === "ananyahomeservice" || slug === "anayahomeservice" || slug === "ananya-home-service" || slug === "anaya-home-service") {
    return caseStudiesData.find((item) => item.slug === "ananyahomeservice" || item.id === "ananyahomeservice") || caseStudiesData[9];
  }
  if (slug === "filterbook" || slug === "filter-book" || slug === "ro-crm") {
    return caseStudiesData.find((item) => item.slug === "filterbook" || item.id === "filterbook") || caseStudiesData[10];
  }
  if (slug === "divyshakti" || slug === "divy-shakti" || slug === "divya-shakti" || slug === "divyashakti") {
    return caseStudiesData.find((item) => item.slug === "divyshakti" || item.id === "divyshakti") || caseStudiesData[11];
  }
  if (slug === "tripsbook" || slug === "tripbook" || slug === "trips-book" || slug === "trip-book") {
    return caseStudiesData.find((item) => item.slug === "tripsbook" || item.id === "tripsbook") || caseStudiesData[12];
  }
  if (slug === "thakarmart" || slug === "thakar-mart" || slug === "thakar_mart" || slug === "jpthakarmart") {
    return caseStudiesData.find((item) => item.slug === "thakarmart" || item.id === "thakarmart") || caseStudiesData[13];
  }
  if (slug === "fitcket" || slug === "fit-cket" || slug === "fitcket-app") {
    return caseStudiesData.find((item) => item.slug === "fitcket" || item.id === "fitcket") || caseStudiesData[14];
  }
  if (slug === "sitedesk" || slug === "sidedesk" || slug === "site-desk" || slug === "side-desk") {
    return caseStudiesData.find((item) => item.slug === "sitedesk" || item.id === "sitedesk") || caseStudiesData[15];
  }
  if (slug === "ghanshyam-murti-app" || slug === "ghanshyammurtibhandar-app" || slug === "gmb-app" || slug === "ghanshyam-app") {
    return caseStudiesData.find((item) => item.slug === "ghanshyam-murti-app" || item.id === "ghanshyam-murti-app") || caseStudiesData[16];
  }
  if (slug === "kreditmitraa" || slug === "kredit-mitraa" || slug === "kreditmitra" || slug === "kredit-mitra") {
    return caseStudiesData.find((item) => item.slug === "kreditmitraa" || item.id === "kreditmitraa") || caseStudiesData[17];
  }
  if (slug === "aexongraphics-crm" || slug === "aexon-graphics-crm" || slug === "aexon-crm" || slug === "aexongraphics" || slug === "axon" || slug === "axon-crm" || slug === "aexon") {
    return caseStudiesData.find((item) => item.slug === "aexongraphics-crm" || item.id === "aexongraphics-crm") || caseStudiesData[18];
  }
  if (slug === "loksangeet" || slug === "lok-sangeet" || slug === "loksangeet-app" || slug === "lok-sangeet-app" || slug === "regional-lyrics" || slug === "loksangeetapp") {
    return caseStudiesData.find((item) => item.slug === "loksangeet" || item.id === "loksangeet") || caseStudiesData[19];
  }
  return caseStudiesData.find((item) => item.slug === slug || item.id === slug) || null;
}

export function getProjectsByService(serviceSlug) {
  if (!serviceSlug) return caseStudiesData.slice(0, 3);

  const serviceProjectMap = {
    "website-development": ["suryadeepcarrent", "nandani", "ananyahomeservice"],
    "ecommerce-solutions": ["srlpixel", "recomm", "ghanshyammurtibhandar"],
    "mobile-app-development": [
      "kreditmitraa",
      "tripsbook",
      "fitcket",
      "divyshakti",
      "thakarmart",
      "filterbook",
      "loksangeet",
      "ghanshyam-murti-app"
    ],
    "ai-automation": ["medicheck", "sitedesk", "stayflow-crm"],
    "ai-automation-agents": ["medicheck", "sitedesk", "stayflow-crm"],
    "rag-knowledge-bases": ["medicheck", "recomm", "srlpixel"],
    "enterprise-rag-search": ["medicheck", "recomm", "srlpixel"],
    "custom-software-crm": ["stayflow-crm", "billbook", "automobile", "aexongraphics-crm"],
    "meta-google-ads": ["srlpixel", "suryadeepcarrent", "divyshakti"],
    "seo-site-optimizations": ["suryadeepcarrent", "nandani", "ananyahomeservice"],
    "cro-conversion-optimization": ["suryadeepcarrent", "nandani", "srlpixel"],
    "cloud-devops-engineering": ["recomm", "suryadeepcarrent", "stayflow-crm"]
  };

  const projectIds = serviceProjectMap[serviceSlug];
  if (projectIds) {
    const list = projectIds
      .map((id) => caseStudiesData.find((p) => p.slug === id || p.id === id))
      .filter(Boolean);
    if (list.length > 0) return list;
  }

  const direct = caseStudiesData.filter((item) => item.serviceSlug === serviceSlug);
  if (direct.length > 0) return direct;

  return caseStudiesData.slice(0, 3);
}
