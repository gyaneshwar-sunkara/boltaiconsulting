import type { LucideIcon } from "lucide-react"
import {
  UtensilsCrossed, ShoppingCart, Landmark, Home, Briefcase, Stethoscope,
  Truck, Factory, Building, Dumbbell, HeartHandshake, Wrench,
} from "lucide-react"

/**
 * The industry registry.
 *
 * An industry page is a claim about a market, not about a client list. What
 * makes one honest is `comesFrom`: every page names the project the
 * capability was actually proven on, and links to that case study. Four point
 * at a build in that exact sector. The rest name the neighbouring project the
 * pattern came from — multi-location permissions, offline operation,
 * recipe-level costing — because those problems genuinely do not care what the
 * business sells.
 */
export type Industry = {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  summary: string
  metaDescription: string
  /** Short line for the home grid and nav. */
  blurb: string
  facts: [string, string][]
  /** What goes wrong in this sector, in their words. */
  problems: { title: string; body: string }[]
  /** What we would build for them. */
  build: { title: string; body: string }[]
  /** Where the capability was proven. Always names something real. */
  comesFrom: string
  services: string[]
  practices: string[]
  work: string[]
}

export const INDUSTRIES: Industry[] = [
  /* ── sectors with a build in that exact vertical ──────────── */
  {
    slug: "restaurants-and-hospitality",
    name: "Restaurants & Hospitality",
    icon: UtensilsCrossed,
    tagline: "Food cost you know today, not at month end.",
    blurb:
      "Multi-location ordering, POS integration, back-of-house inventory and recipe-level food costing.",
    summary:
      "Groups running more than one site have a permissions problem wearing an inventory costume. We build the back-of-house that knows what a dish actually costs, keeps stock honest across every location, and keeps the till trading when the internet does not.",
    metaDescription:
      "Software for restaurant groups: multi-location inventory, recipe-level food costing, supplier purchase orders, POS integration and offline-capable ordering.",
    facts: [
      ["Per site", "roles resolved per location"],
      ["Recipe-level", "food cost, not category-level"],
      ["Offline", "the till keeps trading"],
    ],
    problems: [
      { title: "Food cost arrives four weeks late", body: "You count stock at month end, compare it to purchases, and learn what margin was a month ago. A bad supplier price or an over-portioned dish has been running across every site the whole time." },
      { title: "A manager covers two sites", body: "Full authority at one, limited at the other. Most systems cannot express that, so somebody gets two logins or too much access, and neither is right." },
      { title: "The internet goes down at seven on a Friday", body: "A cloud-only till means somebody else's outage becomes your queue of people who cannot pay." },
    ],
    build: [
      { title: "Multi-location inventory", body: "One ingredient ledger across every site, with transfers, waste and par levels handled per location rather than averaged." },
      { title: "Recipe costing", body: "Menu items decomposed into raw materials, so cost comes from the actual recipe rather than an estimate by category." },
      { title: "Suppliers & purchase orders", body: "Ordering, receiving and the reconciliation between what was ordered, what turned up and what got invoiced." },
      { title: "POS integration", body: "Square, Toast, Clover and Lightspeed, with delta sync that does not overwrite the changes your team made." },
      { title: "Online ordering", body: "A storefront sharing one catalogue with the counter, so you cannot sell the same last portion twice." },
      { title: "Per-location roles", body: "A guard resolves what somebody is allowed to do at the site they are accessing, rather than assuming one global role." },
    ],
    comesFrom:
      "InvtoryX is a restaurant back-of-house build, built around exactly this: per-location role resolution, recipe-level costing and supplier purchase orders. Eshop connects a storefront to a point of sale across four locations.",
    services: ["ecommerce-and-pos", "web-applications", "systems-integration", "data-and-analytics"],
    practices: ["devices-and-edge", "business-systems", "security-and-access", "data-and-sync"],
    work: ["invtoryx", "eshop-pos-ecommerce"],
  },
  {
    slug: "retail-and-ecommerce",
    name: "Retail & Ecommerce",
    icon: ShoppingCart,
    tagline: "One stock number, online and at the counter.",
    blurb:
      "POS-connected storefronts, payment gateway routing, and catalogue sync that survives merchant edits.",
    summary:
      "Selling in two places with one source of truth. The hard part is never the storefront — it is keeping the catalogue, the stock and the money agreeing with each other while a point of sale overwrites everything on every sync.",
    metaDescription:
      "Retail and ecommerce engineering: POS-connected storefronts, unified inventory, payment gateway routing, delta sync and daily reconciliation.",
    facts: [
      ["One catalogue", "counter and storefront"],
      ["2 gateways", "routing and redundancy"],
      ["Daily", "reconciliation to the processor"],
    ],
    problems: [
      { title: "You oversold the last one", body: "It sold in store and online within the same hour. One customer is getting an apology, and the stock figure was never wrong on purpose." },
      { title: "The sync destroys your work", body: "A merchant writes a good product description, and the next catalogue sync from the POS overwrites it. So people stop bothering." },
      { title: "Month end is a manual reconciliation", body: "Somebody exports the processor report and matches it against your records by hand. It takes a day and nobody enjoys it." },
    ],
    build: [
      { title: "Unified inventory", body: "One stock record behind the till and the storefront, with reservation rules agreed before anybody hits a conflict." },
      { title: "Catalogue that survives sync", body: "POS-owned fields the sync controls completely, merchant-owned fields it never touches, merged when read." },
      { title: "Payment routing", body: "More than one gateway with routing between them, so a single processor problem is not a closed shop." },
      { title: "Reconciliation", body: "Daily comparison of storefront, till, processor and ledger, naming the transactions that disagree rather than counting them." },
      { title: "Multi-location", body: "Per-site configuration, staged updates and reporting across every branch without driving between them." },
      { title: "Storefront", body: "On your own domain, or integrated with the Shopify or WooCommerce store you already run." },
    ],
    comesFrom:
      "Eshop is a POS-connected storefront we shipped: dual-table catalogue architecture, two payment gateways, delta sync across four locations and an 80% reduction in POS API traffic.",
    services: ["ecommerce-and-pos", "systems-integration", "web-applications", "search-visibility"],
    practices: ["payments-and-commerce", "systems-integration", "devices-and-edge", "data-and-sync"],
    work: ["eshop-pos-ecommerce"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    tagline: "Numbers people will act on, and an audit trail behind them.",
    blurb:
      "Account aggregation, read-only bank connections, multi-currency ledgers and audited access.",
    summary:
      "Software that touches money has a higher bar: every balance is a time series, every read is logged, and nothing should be architecturally capable of moving funds it was not meant to.",
    metaDescription:
      "Fintech engineering: account aggregation, read-only bank and brokerage sync, multi-currency ledgers, 2FA, access logging and encryption at rest.",
    facts: [
      ["Read-only", "scoped at the token"],
      ["Append-only", "ledgers, not current values"],
      ["Logged", "every access, queryable"],
    ],
    problems: [
      { title: "The number is right today and wrong tomorrow", body: "A system storing current balances cannot answer what something was worth last March. History has to be a design decision, not a feature added later." },
      { title: "Nobody can prove who looked", body: "A customer asks who accessed their data and there is no log to consult. In this sector that is not an inconvenience." },
      { title: "A correction rewrites the past", body: "A balance gets fixed and the chart shows a fictional jump on the day of the fix rather than a corrected history." },
    ],
    build: [
      { title: "Account aggregation", body: "Read-only sync from banks and brokerages, scoped so the application cannot initiate a transfer even if it wanted to." },
      { title: "Event-sourced ledgers", body: "Balances stored as movements and derived by replay, so a correction fixes history rather than inventing a step change." },
      { title: "Multi-currency", body: "Holdings resolved to one reporting currency using the rate on the day, not today's rate applied backwards." },
      { title: "Access logging", body: "Append-only records of every session and read, retained and searchable before anybody asks for them." },
      { title: "2FA and passkeys", body: "Strong authentication with recovery flows designed deliberately rather than left to a reset email." },
      { title: "Export", body: "Full data export in a format a spreadsheet opens, because leaving should be a supported operation." },
    ],
    comesFrom:
      "Charten is a live net-worth ledger we delivered: read-only bank and brokerage sync, event-sourced balances, multi-currency, 2FA, access logging and encryption at rest. You can open it right now.",
    services: ["web-applications", "data-and-analytics", "cloud-and-devops"],
    practices: ["security-and-access", "data-and-sync", "analytics-and-insight", "product-engineering"],
    work: ["charten"],
  },
  {
    slug: "home-and-consumer",
    name: "Home & Consumer",
    icon: Home,
    tagline: "Apps people open on a Tuesday, not just on launch day.",
    blurb:
      "Subscription products, mobile-first experiences, and the sync problems that come with shared household data.",
    summary:
      "Consumer software lives or dies on the tenth use, not the first. That means offline tolerance, sane conflict handling when two people edit the same thing, and onboarding that gets somebody to value before they close the tab.",
    metaDescription:
      "Consumer app engineering: subscription billing, mobile-first design, offline-tolerant sync, shared household data and behaviour-triggered onboarding.",
    facts: [
      ["Offline first", "works with no signal"],
      ["Local ledger", "movements, not counts"],
      ["Activation", "instrumented from day one"],
    ],
    problems: [
      { title: "People sign up and never come back", body: "Acquisition works and activation does not. You are paying for traffic that leaves before it reaches the part worth paying for." },
      { title: "Two people edit the same thing", body: "Shared household data is a distributed systems problem in domestic clothing. Without an explicit conflict policy, one person's work quietly disappears." },
      { title: "It needs signal to be useful", body: "The kitchen, the garage, the basement. If the app stops working where it gets used, it stops getting used." },
    ],
    build: [
      { title: "Offline-first mobile", body: "A real local store with queued operations, so the app works alone and reconciles honestly when the network returns." },
      { title: "Shared state", body: "Several people, several devices, one live view, with a written rule for what happens when two of them act at once." },
      { title: "Subscriptions", body: "Plans, trials, proration and dunning, including the failed-payment recovery where consumer revenue actually leaks." },
      { title: "Onboarding", body: "The first session designed and instrumented, because activation is where most consumer products lose the people they just acquired." },
      { title: "Lifecycle messaging", body: "Email and push triggered by what somebody did or failed to do, rather than sent to everybody on a Tuesday." },
      { title: "AI capture", body: "Photograph a receipt or a label and get structured data, because nobody types forty items into a form twice." },
    ],
    comesFrom:
      "Larder is a household inventory and meal-planning build: a local-first stock ledger, explicit conflict resolution across a live household, and AI receipt capture. The offline patterns we reuse elsewhere were proven there first.",
    services: ["mobile-solutions", "ai-integration", "web-applications"],
    practices: ["devices-and-edge", "ai-automation", "design-and-experience", "growth-and-lifecycle"],
    work: ["larder"],
  },

  /* ── sectors the same problems show up in ─────────────────── */
  {
    slug: "logistics-and-distribution",
    name: "Logistics & Distribution",
    icon: Truck,
    tagline: "Stock that agrees with the shelf.",
    blurb:
      "Warehouse and multi-site inventory, supplier orders, barcode workflows and delivery reconciliation.",
    summary:
      "Inventory across more than one location, suppliers who send anything from a REST API to a nightly CSV, and scanners in a warehouse where the signal drops behind the racking.",
    metaDescription:
      "Logistics and distribution software: multi-warehouse inventory, supplier integration, barcode scanning workflows, offline operation and reconciliation.",
    facts: [
      ["Multi-site", "stock per location"],
      ["Offline", "scanners keep working"],
      ["Reconciled", "receipts against invoices"],
    ],
    problems: [
      { title: "The system and the shelf disagree", body: "Stock is right in the software and wrong in the aisle. Usually a sync that picked a winner nobody agreed to." },
      { title: "A supplier still emails a CSV", body: "Every partner integrates differently, one of them changes their format without warning, and nobody finds out until a delivery is wrong." },
      { title: "Receiving is a person with a clipboard", body: "What was ordered, what arrived and what was invoiced get reconciled by hand, if at all." },
    ],
    build: [
      { title: "Multi-warehouse inventory", body: "Stock per location with transfers, cycle counts and par levels, rather than one pooled number that is never quite right." },
      { title: "Barcode workflows", body: "Scanner-first interfaces built for somebody moving fast, with offline queueing so a dead zone does not stop the count." },
      { title: "Supplier integration", body: "REST, SFTP, EDI or the nightly CSV, validated on arrival and alerted on the day the format changes." },
      { title: "Purchase orders & receiving", body: "Three-way matching between order, delivery and invoice, with the differences named rather than counted." },
      { title: "Delivery reconciliation", body: "Scheduled comparison across systems so drift shows up in an alert on Tuesday, not in an audit in April." },
      { title: "Operational reporting", body: "Turns, ageing stock and shrinkage per site, built on a read model so a heavy report cannot slow down operations." },
    ],
    comesFrom:
      "This is the same machinery as InvtoryX — multi-location stock ledgers, supplier purchase orders and receiving — and the same offline-first scanner patterns as Larder. Different industry, identical problems.",
    services: ["web-applications", "systems-integration", "mobile-solutions", "data-and-analytics"],
    practices: ["data-and-sync", "devices-and-edge", "systems-integration", "business-systems"],
    work: ["invtoryx", "larder"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    tagline: "What it costs to make, calculated from the bill of materials.",
    blurb:
      "Bills of materials, production costing, work orders, supplier management and shop-floor data capture.",
    summary:
      "A bill of materials is a recipe with a different name. Knowing the true cost of a finished item means decomposing it properly, tracking the raw materials it consumes, and capturing what actually happened on the floor.",
    metaDescription:
      "Manufacturing software: bills of materials, production costing, work orders, raw material inventory, supplier management and shop-floor capture.",
    facts: [
      ["BOM-level", "cost, not estimated"],
      ["Shop floor", "capture that survives no signal"],
      ["Per site", "roles and reporting"],
    ],
    problems: [
      { title: "Unit cost is an educated guess", body: "Margin is calculated from category averages rather than from what the item actually consumed, so the unprofitable line stays unprofitable quietly." },
      { title: "The floor runs on paper", body: "Production data is captured on a clipboard and typed in later, which means it is both delayed and wrong." },
      { title: "Raw materials surprise you", body: "A shortage is discovered at the point of needing it, because consumption was never tracked against what was on hand." },
    ],
    build: [
      { title: "Bills of materials", body: "Multi-level decomposition so a finished item resolves to its actual raw material consumption, and cost follows from that." },
      { title: "Work orders", body: "Planned against stock on hand, with consumption deducted as production happens rather than reconciled monthly." },
      { title: "Shop-floor capture", body: "Tablet and scanner interfaces designed for gloves and noise, with offline queueing for the parts of the building with no signal." },
      { title: "Raw material inventory", body: "Stock ledgers with lot tracking and reorder points based on real consumption rate." },
      { title: "Supplier management", body: "Purchase orders, receiving and the three-way match, integrated with whatever your suppliers can actually send." },
      { title: "Production reporting", body: "Yield, scrap and cost per unit per line, on a read model that does not compete with operations." },
    ],
    comesFrom:
      "The BOM is the same primitive as recipe costing in InvtoryX: decompose a finished item into raw materials, deduct on production, derive true cost. The shop-floor capture is the offline-first device work from Larder and Eshop.",
    services: ["web-applications", "systems-integration", "data-and-analytics", "mobile-solutions"],
    practices: ["data-and-sync", "business-systems", "devices-and-edge", "analytics-and-insight"],
    work: ["invtoryx"],
  },
  {
    slug: "field-service-and-trades",
    name: "Field Service & Trades",
    icon: Wrench,
    tagline: "Software that works in a basement with no bars.",
    blurb:
      "Job scheduling, mobile work orders, offline capture, parts inventory and invoicing from the van.",
    summary:
      "Your team is in crawlspaces, plant rooms and buildings with thick walls. Any system that needs a connection to record a job will be worked around within a fortnight, and then the data stops being real.",
    metaDescription:
      "Field service software: job scheduling, offline-capable mobile work orders, photo capture, parts inventory, and invoicing from site.",
    facts: [
      ["Offline", "capture, queue, reconcile"],
      ["On site", "invoice before leaving"],
      ["Per tech", "parts and van stock"],
    ],
    problems: [
      { title: "Paperwork happens at nine at night", body: "Jobs get written up hours later from memory, which is when detail gets lost and invoices get delayed." },
      { title: "The app needs signal to save", body: "So the technician takes a photo on their own phone and types it in later, and now the system is not the record." },
      { title: "Nobody knows what is on the van", body: "Parts inventory lives in somebody's head, so jobs get booked without the part and a second visit gets scheduled." },
    ],
    build: [
      { title: "Offline work orders", body: "The full job record captured on device with no connection, queued, and reconciled cleanly when the van gets back to signal." },
      { title: "Scheduling & dispatch", body: "Assignment by skill, location and availability, with changes reaching the technician rather than sitting in an inbox." },
      { title: "Photo & signature capture", body: "Evidence attached to the job at the time, uploaded when possible, never blocking the technician from finishing." },
      { title: "Van and parts inventory", body: "Stock per vehicle and per technician, consumed as jobs complete, so restocking is driven by data." },
      { title: "Invoicing on site", body: "Generate and take payment before leaving, with card readers that handle a dropped connection sensibly." },
      { title: "Customer portal", body: "Job history, quotes and invoices in one place, so your office stops fielding calls asking what happened." },
    ],
    comesFrom:
      "Offline-first is the pattern we proved in Larder and shipped in Eshop: a local store that is authoritative while disconnected, queued operations as intent rather than absolute values, and an explicit conflict policy. Card readers and printers come from the same device work.",
    services: ["mobile-solutions", "web-applications", "ecommerce-and-pos"],
    practices: ["devices-and-edge", "product-engineering", "payments-and-commerce", "design-and-experience"],
    work: ["larder", "eshop-pos-ecommerce"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    tagline: "The back office, connected, so nobody retypes anything.",
    blurb:
      "Client portals, project and time tracking, document workflow, and CRM connected to how you actually bill.",
    summary:
      "Agencies, firms and consultancies run on a stack that mostly works, joined together by people copying between tools. The value is rarely a new system — it is removing the handoffs that waste an hour a day.",
    metaDescription:
      "Software for professional services firms: client portals, project and time tracking, document workflow, quote-to-cash and CRM integration.",
    facts: [
      ["One record", "entered once, everywhere"],
      ["Quote to cash", "joined end to end"],
      ["Your tools", "we work in what you own"],
    ],
    problems: [
      { title: "A new client is entered four times", body: "Sales, finance, delivery and support each enter them separately. Three of those are transcription errors waiting for their moment." },
      { title: "Approvals live in email", body: "Somebody forwards a thread. There is no record of who approved what and no way to chase it when it stalls." },
      { title: "Utilisation is a monthly guess", body: "Time is captured late and inconsistently, so the number that runs the business arrives after the month it describes." },
    ],
    build: [
      { title: "Client portals", body: "Documents, status, approvals and invoices in one place, so your team stops answering the same email." },
      { title: "Project & time tracking", body: "Capture that is quick enough to actually happen, feeding utilisation and profitability per engagement." },
      { title: "Quote-to-cash", body: "Quote through order, invoice and payment to recognised revenue, joined up rather than stitched together at month end." },
      { title: "Document workflow", body: "Generation, review, e-signature and storage, with a record of who approved which version." },
      { title: "CRM integration", body: "HubSpot, Salesforce or Pipedrive connected to delivery and finance, configured around how your sales actually works." },
      { title: "Provisioning", body: "Access driven by the HR system, so a new starter has what they need on day one and a leaver loses it the same afternoon." },
    ],
    comesFrom:
      "This is the Business Systems practice applied to a services firm: CRM, accounting and back-office integration, plus the organisations, roles, billing and audit modules already running in production.",
    services: ["web-applications", "systems-integration", "data-and-analytics"],
    practices: ["business-systems", "systems-integration", "analytics-and-insight", "security-and-access"],
    work: ["sill-platform"],
  },
  {
    slug: "property-and-real-estate",
    name: "Property & Real Estate",
    icon: Building,
    tagline: "Every unit, every owner, every job, in one place.",
    blurb:
      "Portfolio and unit management, maintenance ledgers, tenant portals, and payments across multiple properties.",
    summary:
      "Managing property is a multi-location permissions problem with money attached. Who can see which building, who approves which spend, and what actually happened to that unit over five years.",
    metaDescription:
      "Property management software: portfolio and unit records, maintenance ledgers, tenant and owner portals, rent collection and per-property permissions.",
    facts: [
      ["Per property", "roles and visibility"],
      ["Full history", "per unit, kept"],
      ["Reconciled", "rent against the ledger"],
    ],
    problems: [
      { title: "Authority differs by building", body: "A manager runs three properties and reports on a fourth. One global role cannot express that, so somebody ends up with too much access." },
      { title: "Maintenance history is in an inbox", body: "What was done to that unit, by whom, and what it cost, scattered across email threads and a spreadsheet." },
      { title: "Owner reporting is manual", body: "Statements are assembled by hand every month, which is a day of work and a source of errors." },
    ],
    build: [
      { title: "Portfolio & unit records", body: "Properties, units, leases and owners modelled properly, with the history that makes a five-year question answerable." },
      { title: "Per-property permissions", body: "Effective role resolved for the property being accessed, rather than a single role applied everywhere." },
      { title: "Maintenance ledger", body: "Requests, work orders, contractors and cost against each unit, so the asset has a record rather than an inbox." },
      { title: "Tenant & owner portals", body: "Separate views with separate permissions, showing each party exactly what they should see and nothing else." },
      { title: "Rent & payments", body: "Collection, arrears, late fees and reconciliation against the ledger, daily rather than monthly." },
      { title: "Owner statements", body: "Generated on a schedule from the ledger, with the arithmetic visible rather than assembled by hand." },
    ],
    comesFrom:
      "Per-location role resolution is the architecture behind InvtoryX, built for exactly this shape of problem. Payments, ledgers and reconciliation come from Eshop and the billing module running in production on our platform.",
    services: ["web-applications", "systems-integration", "data-and-analytics"],
    practices: ["security-and-access", "payments-and-commerce", "business-systems", "data-and-sync"],
    work: ["invtoryx", "sill-platform"],
  },
  {
    slug: "health-and-clinics",
    name: "Health & Clinics",
    icon: Stethoscope,
    tagline: "Built to the technical safeguards, with the boundary stated.",
    blurb:
      "Scheduling, patient portals, intake workflow and integrations, built with access control and audit logging from the first commit.",
    summary:
      "Clinics and allied health practices need scheduling, intake and records that are quick to use under time pressure and defensible afterwards. We build to the technical safeguards and are explicit about where our responsibility ends.",
    metaDescription:
      "Software for clinics and allied health: scheduling, intake workflow, patient portals, role-based access, audit logging and encryption at rest.",
    facts: [
      ["Deny by default", "access granted, not assumed"],
      ["Audit logged", "who saw what, and when"],
      ["Boundary stated", "we build, counsel advises"],
    ],
    problems: [
      { title: "Intake is paper that gets typed in", body: "Forms filled on a clipboard and re-keyed by reception, which costs an hour a day and introduces errors into a record that matters." },
      { title: "Everyone can see everything", body: "It was simpler at four staff. At twenty it means access nobody deliberately granted, and no log to consult when somebody asks." },
      { title: "Systems do not talk", body: "Scheduling, billing and records each hold part of the picture, and staff bridge the gap by remembering." },
    ],
    build: [
      { title: "Scheduling", body: "Multi-practitioner, multi-room booking with the rules your practice actually runs on, including the awkward recurring ones." },
      { title: "Digital intake", body: "Forms completed before arrival, validated on submission, landing in the record rather than in a printer." },
      { title: "Role-based access", body: "Deny by default, enforced at the database with row-level security so a forgotten filter cannot return somebody else's record." },
      { title: "Audit logging", body: "Append-only records of access, changes and exports, retained and searchable before anyone asks for them." },
      { title: "Patient portal", body: "Appointments, forms, documents and payments in one place, which removes a large share of inbound phone calls." },
      { title: "Integrations", body: "Connecting practice management, billing and payments so nobody is the integration between them." },
    ],
    comesFrom:
      "The access control is the Security & Access practice: deny by default, row-level tenant isolation and append-only audit logging, all running in production and covered by tests. We build to the technical safeguards and take BAAs with infrastructure providers; your compliance counsel owns the policy side, and we say so before an engagement rather than during one.",
    services: ["web-applications", "systems-integration", "cloud-and-devops"],
    practices: ["security-and-access", "business-systems", "design-and-experience", "product-engineering"],
    work: ["sill-platform"],
  },
  {
    slug: "fitness-and-membership",
    name: "Fitness & Membership",
    icon: Dumbbell,
    tagline: "Recurring revenue that does not leak.",
    blurb:
      "Memberships, class booking, multi-site check-in, and the dunning that stops subscriptions ending by accident.",
    summary:
      "Studios, gyms and membership businesses live on recurring revenue, and most of the leak is not churn — it is failed payments nobody chased and members who never activated.",
    metaDescription:
      "Membership and fitness software: subscription billing, dunning, class booking, multi-site check-in, member portals and retention mechanics.",
    facts: [
      ["Dunning", "failed payments chased"],
      ["Multi-site", "one membership, every location"],
      ["Check-in", "works offline at the door"],
    ],
    problems: [
      { title: "Subscriptions end without anybody deciding", body: "A card expires, the charge fails, nobody chases it, and a member leaves who never intended to." },
      { title: "Class booking is a spreadsheet", body: "Capacity, waitlists and cancellations managed by hand, which breaks the first busy week." },
      { title: "Multi-site membership is manual", body: "A member at one location visiting another is handled by somebody recognising them." },
    ],
    build: [
      { title: "Subscription billing", body: "Plans, freezes, proration, upgrades and the dunning flow where recurring revenue actually leaks." },
      { title: "Class & appointment booking", body: "Capacity, waitlists, cancellation windows and no-show policy, enforced rather than remembered." },
      { title: "Check-in", body: "Fast door check-in that keeps working during an outage and reconciles afterwards." },
      { title: "Member portal", body: "Bookings, billing, freezes and cancellation self-serve, which removes most of the front-desk admin." },
      { title: "Multi-site access", body: "One membership valid across locations, with per-site rules and reporting per club." },
      { title: "Retention mechanics", body: "Behaviour-triggered messaging when attendance drops, which is cheaper than winning the member back later." },
    ],
    comesFrom:
      "Billing, subscriptions and dunning run in production, taking real payments every month. Offline-capable check-in is the same device and sync work as Eshop, and per-location rules come from InvtoryX.",
    services: ["web-applications", "ecommerce-and-pos", "mobile-solutions", "search-visibility"],
    practices: ["payments-and-commerce", "growth-and-lifecycle", "devices-and-edge", "product-engineering"],
    work: ["sill-platform", "eshop-pos-ecommerce"],
  },
  {
    slug: "nonprofits-and-associations",
    name: "Nonprofits & Associations",
    icon: HeartHandshake,
    tagline: "Members, giving and reporting, without four systems.",
    blurb:
      "Membership records, recurring giving, event registration, and the reporting a board and a funder both need.",
    summary:
      "Membership organisations run the same machinery as a subscription business, with tighter budgets, more reporting obligations, and volunteers who need software they can use without training.",
    metaDescription:
      "Software for nonprofits and associations: membership records, recurring giving, event registration, volunteer access and funder reporting.",
    facts: [
      ["Recurring", "giving that does not lapse"],
      ["Role-scoped", "volunteers see what they should"],
      ["Reportable", "board and funder, same source"],
    ],
    problems: [
      { title: "Members live in three places", body: "A CRM, a mailing tool and a spreadsheet, none of which agree on who is currently a member." },
      { title: "Recurring gifts quietly lapse", body: "A card expires and nobody follows up, so income falls without a decision being made anywhere." },
      { title: "Reporting is rebuilt every time", body: "The board wants one view, the funder wants another, and both are assembled by hand from the same underlying data." },
    ],
    build: [
      { title: "Membership records", body: "Tiers, renewals, lapses and household relationships modelled properly, in one place that is actually authoritative." },
      { title: "Recurring giving", body: "Scheduled gifts with dunning and recovery, because a lapsed donor who meant to stay is the cheapest income to keep." },
      { title: "Event registration", body: "Tickets, capacity, waitlists and payment, without a separate platform that does not know who your members are." },
      { title: "Volunteer access", body: "Role-scoped permissions so volunteers see what their job needs and nothing more, with an audit trail." },
      { title: "Reporting", body: "One data model answering both the board view and the funder view, generated rather than assembled." },
      { title: "Website & content", body: "A site volunteers can update without a deploy, marked up properly so the organisation is findable." },
    ],
    comesFrom:
      "Organisations, members, roles, billing, notifications and a CMS are modules already running in production. Recurring billing with dunning is the same code taking real payments on a live build.",
    services: ["web-applications", "search-visibility", "managed-support"],
    practices: ["business-systems", "payments-and-commerce", "search-and-growth", "security-and-access"],
    work: ["sill-platform"],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug)
}

/** Industries that name a given service. Read by the service pages. */
export function industriesForService(slug: string): Industry[] {
  return INDUSTRIES.filter((i) => i.services.includes(slug))
}

/** Industries that name a given practice area. */
export function industriesForPractice(slug: string): Industry[] {
  return INDUSTRIES.filter((i) => i.practices.includes(slug))
}
