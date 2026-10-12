export const workCategories = [
  "All",
  "Website Development",
  "Ecommerce Solutions",
  "Custom Software & CRM"
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
    image: "/images/suryadeepcarrent/01_suryadeepcarrent.png",
    images: [
      "/images/suryadeepcarrent/01_suryadeepcarrent.png"
      // Add extra images here when added in public/images/suryadeepcarrent/
    ],
    gallery: [
      {
        url: "/images/suryadeepcarrent/01_suryadeepcarrent.png",
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
    image: "/images/srlpixel/01_srlpixel.png",
    images: [
      "/images/srlpixel/01_srlpixel.png"
      // Add extra screenshots here when placed in public/images/srlpixel/
    ],
    gallery: [
      {
        url: "/images/srlpixel/01_srlpixel.png",
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
    image: "/images/recomm/01_recomm.png",
    images: [
      "/images/recomm/01_recomm.png"
      // Add extra screenshots here when placed in public/images/recomm/
    ],
    gallery: [
      {
        url: "/images/recomm/01_recomm.png",
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
    image: "/images/pg/01_pg.png",
    images: [
      "/images/pg/01_pg.png"
      // Add extra screenshots here when placed in public/images/pg/
    ],
    gallery: [
      {
        url: "/images/pg/01_pg.png",
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
    image: "/images/nandani/01_nandani.png",
    images: [
      "/images/nandani/01_nandani.png"
      // Add extra screenshots here when placed in public/images/nandani/
    ],
    gallery: [
      {
        url: "/images/nandani/01_nandani.png",
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
    image: "/images/medicheck/01_medicheck.png",
    images: [
      "/images/medicheck/01_medicheck.png"
      // Add extra screenshots here when placed in public/images/medicheck/
    ],
    gallery: [
      {
        url: "/images/medicheck/01_medicheck.png",
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
    image: "/images/billbook/01_billbook.png",
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
    image: "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.png",
    images: [
      "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.png"
    ],
    gallery: [
      {
        url: "/images/ghanshyammurtibhandar/01_ghanshyammurtibhandar.png",
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
    image: "/images/automobile/01_automobile.png",
    images: [
      "/images/automobile/01_automobile.png"
    ],
    gallery: [
      {
        url: "/images/automobile/01_automobile.png",
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
  if (slug === "caresync-telehealth" || slug === "nandani" || slug === "nandani-appliances" || slug === "nandanikitchenware") {
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
  return caseStudiesData.find((item) => item.slug === slug || item.id === slug) || null;
}

export function getProjectsByService(serviceSlug) {
  const matches = caseStudiesData.filter((item) => item.serviceSlug === serviceSlug);
  if (matches.length > 0) return matches;
  return caseStudiesData.slice(0, 3);
}
