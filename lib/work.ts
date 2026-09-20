import type { LucideIcon } from "lucide-react"
import {
  Wallet, UtensilsCrossed, ChefHat, ShoppingCart, Blocks,
  Building2, KeyRound, CreditCard, Bell, LayoutDashboard, FileText,
  ScrollText, RefreshCcw, MapPin, FileScan, GitCompare, Printer,
} from "lucide-react"

/**
 * The work registry.
 *
 * Six real builds. Every status here is accurate and every claim is checkable,
 * because a prospect who opens charten.app or asks "can I see it" should find
 * exactly what this page said they would. Nothing is invented and no client is
 * named who did not exist.
 *
 * Presented as one body of work rather than split into "our products" and
 * "client work". The split was never useful to a buyer, and the unifying
 * description happens to be both true of everything here and the strongest
 * claim available: we designed it, we built it, and we still operate it.
 *
 * `kind` stays in the data as internal context, but nothing renders it — the
 * pages lead on sector and status, which is what a buyer is reading for.
 *
 * Like the service registry, this declares its own links: each entry names the
 * services and practices it evidences, and those pages read it back. That is
 * what turns "we do payments integration" into "here is one we run."
 */
export type WorkKind = "product" | "platform" | "engagement"

export type WorkStatus =
  | "Live"
  | "In production"
  | "Built"
  | "In development"
  | "Shipped"

export type WorkItem = {
  slug: string
  name: string
  icon: LucideIcon
  kind: WorkKind
  sector: string
  status: WorkStatus
  /** Public URL, where there is one. Null means we can show it on a call. */
  href: string | null
  year: string
  tagline: string
  summary: string
  metaDescription: string
  /** Hero stat strip. */
  facts: [string, string][]
  /** The situation that made it worth building. */
  problem: { title: string; body: string }
  /** How it was approached, in order. */
  approach: { phase: string; label: string; body: string }[]
  /** What it actually does. */
  highlights: { title: string; body: string }[]
  /** The engineering decision worth talking about in an interview. */
  hardPart: { title: string; body: string }
  /** What actually changed. A case study without results is a build log. */
  outcome: { title: string; body: string }[]
  /**
   * The retrospective. Two pages on this site promise that everything we
   * would do differently is written up, so it has to actually be written up —
   * and it is the section that makes a case study read as real rather than
   * as marketing.
   */
  differently: string
  stack: { group: string; items: string }[]
  /** Honest close: what it proves, and what it does not. */
  standing: string
  services: string[]
  practices: string[]
}

export const WORK: WorkItem[] = [
  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "charten",
    name: "Charten",
    icon: Wallet,
    kind: "product",
    sector: "Personal finance",
    status: "Live",
    href: "https://charten.app",
    year: "2026",
    tagline: "Know exactly what you're worth.",
    summary:
      "A private net-worth ledger. Read-only bank and brokerage sync, plus the assets a bank cannot see — property, vehicles, crypto — resolved into one number and a history you can scroll back through.",
    metaDescription:
      "Charten is a live net-worth ledger built by SillStack: read-only account sync, manual assets, multi-currency, 2FA and access logging.",
    facts: [
      ["Live", "public signup, today"],
      ["Read-only", "no write access, ever"],
      ["Encrypted", "at rest, with access logs"],
    ],
    problem: {
      title: "Your money is in eleven places and your net worth is in none of them",
      body: "Bank, brokerage, pension, the house, the car, a crypto wallet or two. Every one of them knows its own number and none of them knows the total. People end up maintaining a spreadsheet that is accurate on the day they update it and wrong every day after that.",
    },
    approach: [
      { phase: "01", label: "Ledger first", body: "Before any sync, the data model: an append-only ledger of balances over time rather than a table of current values. Net worth is a question about history, and a schema that only stores 'now' can never answer it." },
      { phase: "02", label: "Read-only sync", body: "Daily aggregation from banks and brokerages, scoped read-only at the token level. The application is architecturally incapable of moving money, which is the only version of this worth building." },
      { phase: "03", label: "The rest of it", body: "Manual assets for everything an aggregator cannot reach — property, vehicles, private holdings — with their own valuation history rather than a single number somebody typed once." },
      { phase: "04", label: "Prove it is private", body: "2FA, access logging, encryption at rest, and full export. A product asking for this data has to be able to show its work, not assert trustworthiness in a footer." },
    ],
    highlights: [
      { title: "Read-only account sync", body: "Daily balance pulls from banks and brokerages, with read-only scopes. Nothing in the system can initiate a transfer." },
      { title: "Assets a bank cannot see", body: "Property, vehicles, crypto and private holdings, each with its own valuation history rather than a figure that was right once." },
      { title: "Multi-currency", body: "Holdings in several currencies resolved to one reporting currency, with the rate on the day rather than today's rate applied to history." },
      { title: "Access logging", body: "Every session and every read recorded, and visible to the account owner. If you cannot see who opened it, it is not really private." },
      { title: "Export", body: "Full data export in a format a spreadsheet opens. Leaving is a supported operation, not a support ticket." },
      { title: "Free tier, no card", body: "A genuinely free tier that does not ask for payment details, because asking for a card to look at your own money is a strange trade." },
    ],
    hardPart: {
      title: "Net worth is a time series, not a number",
      body: "The naive build stores a current balance per account and computes a total. It works for a week and then someone asks what they were worth last March, and there is no answer because history was never kept. Charten stores balance events and derives every total by replaying them, which also means a corrected balance updates the past correctly instead of creating a fictional jump on the day of the fix.",
    },
    outcome: [
      { title: "Live, with open signup", body: "Publicly available with a free tier that does not ask for card details. Anyone can create an account and see the product working rather than take our word for it." },
      { title: "History that survives a correction", body: "Because totals are replayed from balance events, fixing a wrong figure updates the past correctly instead of creating a step change on the day of the fix." },
      { title: "Read-only by architecture", body: "Scoped at the token level rather than enforced by policy, so the application is structurally incapable of moving money even if something went wrong." },
    ],
    differently:
      "Multi-currency should have been in the schema on day one. We added it after the ledger already assumed a single reporting currency, which meant reprocessing every stored event to attach the rate that applied on the day. Deciding it up front would have cost an afternoon; retrofitting it cost most of a week and a migration we had to rehearse twice.",
    stack: [
      { group: "Application", items: "Next.js, React, TypeScript" },
      { group: "Backend", items: "NestJS, Prisma, PostgreSQL, BullMQ" },
      { group: "Security", items: "2FA, access logging, encryption at rest" },
      { group: "Infrastructure", items: "Scheduled sync workers, daily aggregation" },
    ],
    standing:
      "Publicly live with open signup, and the one piece of our work you can evaluate without a call. What it demonstrates is event-sourced financial data, read-only integrations and a security model built to be inspected — the same foundations we bring to regulated and finance-adjacent engagements.",
    services: ["web-applications", "data-and-analytics", "cloud-and-devops"],
    practices: [
      "product-engineering",
      "security-and-access",
      "data-and-sync",
      "design-and-experience",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "invtoryx",
    name: "InvtoryX",
    icon: UtensilsCrossed,
    kind: "product",
    sector: "Restaurants",
    status: "In development",
    href: null,
    year: "2026",
    tagline: "Back-of-house for restaurant groups that have more than one house.",
    summary:
      "Ingredients tracked across every site, recipe-level food costing, suppliers and purchase orders, with stock deducted as orders land. Built for multi-location groups, where the hard part is that a person's authority changes depending on which restaurant they are standing in.",
    metaDescription:
      "InvtoryX is a restaurant back-of-house build: multi-location inventory, recipe costing, suppliers, purchase orders and per-location role resolution.",
    facts: [
      ["Multi-location", "roles resolved per site"],
      ["Recipe-level", "food cost, not category-level"],
      ["Phase 3", "of a phased migration"],
    ],
    problem: {
      title: "Food cost is known monthly, and by then it is history",
      body: "A group counts stock at month end, compares it to purchases, and learns what margin was four weeks ago. By the time a bad supplier price or an over-portioned dish shows up in the number, it has been running for a month across every site.",
    },
    approach: [
      { phase: "01", label: "Model the recipe", body: "Menu products decompose into raw materials through a bill of materials, so selling a dish is an event that consumes specific quantities of specific ingredients. Cost follows from that rather than being estimated." },
      { phase: "02", label: "Make location real", body: "Not a locationId column. A guard resolves the effective role a user holds at the site being accessed, cached in Redis and covered by integration tests, because multi-unit permissions are where this category usually breaks." },
      { phase: "03", label: "Close the loop", body: "Suppliers, purchase orders and receiving, so stock moves in as well as out and the ledger reflects what is actually on the shelf rather than what was theoretically ordered." },
      { phase: "04", label: "Migrate in phases", body: "Built as a phased migration rather than a single cutover, each phase shipping something usable. Currently at phase three, with the suppliers slice next." },
    ],
    highlights: [
      { title: "Per-location roles", body: "A regional manager at one site and a viewer at another, resolved per request by a guard rather than assumed from a single global role." },
      { title: "Recipe costing (BOM)", body: "Menu items decomposed into raw materials, so food cost is computed from the actual recipe rather than estimated by category." },
      { title: "Automatic stock deduction", body: "An order lands, the recipe resolves, and the ingredients come off stock. Inventory reflects trading rather than the last time somebody counted." },
      { title: "Suppliers & purchase orders", body: "Ordering, receiving and the reconciliation between what was ordered, what arrived and what was invoiced." },
      { title: "Multi-site reporting", body: "The same question answered per location and across the group, which is where single-site tools stop being useful." },
      { title: "Integration-tested permissions", body: "Every role covered by tests asserting what it cannot do. Permission bugs in a multi-tenant system are silent until they are serious." },
    ],
    hardPart: {
      title: "Multi-location is a permissions problem wearing an inventory costume",
      body: "Most inventory software adds multi-site by putting a location column on every table. That falls over the first time somebody manages two restaurants with different authority at each, or a head-office user needs read access everywhere and write access nowhere. InvtoryX resolves an effective role per user per location on each request, caches it in Redis so it does not cost a query every time, and covers it with integration tests. That one decision is most of what makes the system hold together as a group adds sites.",
    },
    outcome: [
      { title: "Authority that matches reality", body: "A user can hold a different effective role at each location, resolved per request and cached, which is the case single-role systems cannot express at all." },
      { title: "Cost from the recipe, not an estimate", body: "Menu items decompose into raw materials, so food cost is derived from what a dish actually consumes rather than averaged by category." },
      { title: "Each phase usable on its own", body: "Built as a phased migration rather than one cutover, so value lands at the end of each phase instead of only at the end of the programme." },
    ],
    differently:
      "We would write the authorisation tests before the authorisation code rather than alongside it. Every permission bug we found in that layer was found by a test written after the fact, which is an uncomfortable thing to notice: it means the bugs still in there are precisely the ones nobody has thought to write a test for yet.",
    stack: [
      { group: "Backend", items: "NestJS, Prisma, PostgreSQL, BullMQ" },
      { group: "Frontend", items: "Next.js, React, TypeScript" },
      { group: "Mobile", items: "Expo, React Native" },
      { group: "Authorisation", items: "Per-location role guard, Redis-cached, integration-tested" },
    ],
    standing:
      "In active development at phase three of a phased migration, with the suppliers slice next. It is the newest of these builds and the least complete, which is stated plainly here because a case study that only shows finished work is not much of an account of how a firm delivers.",
    services: ["web-applications", "systems-integration", "data-and-analytics"],
    practices: [
      "product-engineering",
      "security-and-access",
      "data-and-sync",
      "business-systems",
      "analytics-and-insight",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "larder",
    name: "Larder",
    icon: ChefHat,
    kind: "product",
    sector: "Household",
    status: "Built",
    href: null,
    year: "2025",
    tagline: "A kitchen that knows what is actually in it.",
    summary:
      "A stock ledger for a household: what is in the pantry, what this week's cooking needs, the difference between the two, and when to buy it. Eleven build phases, complete, and the environment where several of our offline-sync and AI-extraction patterns were proven before they went anywhere near client work.",
    metaDescription:
      "Larder is a household inventory and meal-planning build: live stock ledger, shortfall diffing, cook calendar, purchase-timing engine and AI receipt capture.",
    facts: [
      ["11 phases", "all built"],
      ["Offline tolerant", "works in a kitchen"],
      ["Multi-user", "one live household"],
    ],
    problem: {
      title: "Meal planning apps assume an empty kitchen",
      body: "Every one of them starts from a recipe and produces a shopping list, as if the pantry were empty. Real households already own most of what a recipe needs. The useful question is not what to buy but what is missing, and answering it requires knowing what is genuinely in the cupboard.",
    },
    approach: [
      { phase: "01", label: "Stock as a ledger", body: "Quantities as movements rather than a current count, so the number is derived and correctable. A household inventory that cannot be corrected without lying about history stops being trusted within a fortnight." },
      { phase: "02", label: "Diff, don't list", body: "The planner computes the shortfall between what the week's cooking requires and what the ledger says is present. The shopping list is the difference, not the ingredients." },
      { phase: "03", label: "Capture without typing", body: "AI receipt capture, because any system that needs manual entry of forty grocery items after a shop will be abandoned by the second week." },
      { phase: "04", label: "Make it a household", body: "Multiple people editing the same live state from different devices, including the one standing in the kitchen with no signal." },
    ],
    highlights: [
      { title: "Live stock ledger", body: "Movements rather than counts, so the current quantity is derived and a correction fixes history instead of inventing a jump." },
      { title: "Shortfall diffing", body: "The plan needs this, the pantry has that, buy the difference. The core operation the category usually skips." },
      { title: "Cook calendar", body: "A week planned around what is already in stock and what expires soonest, rather than around whatever the recipe feed suggested." },
      { title: "Purchase-timing engine", body: "Not only what to buy but when, based on consumption rate and what is about to run out." },
      { title: "AI receipt capture", body: "Photograph a receipt, get stock movements. Confidence-scored, with review for anything uncertain." },
      { title: "Live household", body: "Several people, several devices, one shared state, with sensible behaviour when two of them edit at once." },
    ],
    hardPart: {
      title: "Two people in a kitchen with bad wifi",
      body: "Household inventory is a distributed systems problem hiding in a domestic one. Two people put things away at the same time, one phone has no signal behind the fridge, and both are editing the same quantities. Larder is local-first with queued operations and an explicit conflict policy, so the till-style rule applies: the device keeps working alone and reconciles honestly afterwards. Those patterns went on to underpin how we build offline-tolerant client work.",
    },
    outcome: [
      { title: "All eleven phases built", body: "A complete system rather than a prototype: stock ledger, planning, purchase timing, capture and a live multi-user household." },
      { title: "Works with no signal", body: "The device is authoritative while offline and reconciles honestly afterwards, which is what makes it usable in the room it was built for." },
      { title: "Patterns reused since", body: "The local-first sync and confidence-scored extraction approaches proven here are the ones we now reach for on retail and field-service work." },
    ],
    differently:
      "We stored quantities as absolute values for the first two phases and had to migrate the entire ledger to movements. Absolute values look simpler and they silently lose data the moment two devices edit while disconnected, because the last write wins and the other change disappears without an error. It is the most expensive lesson in the project, and it is why every stock system we have built since starts as a ledger.",
    stack: [
      { group: "Backend", items: "NestJS, Prisma, PostgreSQL, BullMQ" },
      { group: "Web", items: "Next.js, React, TypeScript" },
      { group: "Mobile", items: "Expo, React Native, local-first sync" },
      { group: "AI", items: "Receipt extraction with confidence scoring" },
    ],
    standing:
      "Built through all eleven phases and running as a live environment rather than a demo. Its value to an engagement is the patterns it proved: local-first sync with an explicit conflict policy, and confidence-scored AI extraction with a review path. Both now ship in retail and field-service work.",
    services: ["mobile-solutions", "ai-integration", "web-applications"],
    practices: [
      "product-engineering",
      "ai-automation",
      "data-and-sync",
      "devices-and-edge",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "eshop-pos-ecommerce",
    name: "Eshop",
    icon: ShoppingCart,
    kind: "engagement",
    sector: "Restaurants & retail",
    status: "Shipped",
    href: null,
    year: "2025",
    tagline: "A storefront that agrees with the till.",
    summary:
      "A POS-connected online store: delta sync against OneHubPOS, two payment gateways, magic-link SSO, multi-tenant access control, and a dual-table design so a merchant's own customisations survive the next sync from the point of sale.",
    metaDescription:
      "Eshop is a POS-integrated ecommerce platform: delta sync with OneHubPOS, NMI and Dejavoo gateways, Keycloak magic-link SSO and multi-tenant RBAC.",
    facts: [
      ["4 locations", "one system, one catalogue"],
      ["80% fewer", "POS API calls after delta sync"],
      ["2 gateways", "NMI and Dejavoo"],
    ],
    problem: {
      title: "The POS owns the catalogue, and the merchant wants to change it",
      body: "Menus, prices, taxes and modifiers all live in the point of sale, and it overwrites on every sync. But a merchant wants better photographs, longer descriptions and web-only items. Store those in the same rows and the next sync erases them. Store them nowhere and the online store reads like a spreadsheet. Most integrations in this category land on one side of that trade or the other.",
    },
    approach: [
      { phase: "01", label: "Map the POS", body: "What it emits, how often, what it silently omits, and what it does on a delete. Integration work fails on assumptions about the other system, so this came before any code." },
      { phase: "02", label: "Two tables, one product", body: "POS data lands in immutable reference tables the sync owns completely; merchant customisations live in a parallel table keyed to the same product. The read layer merges them, so a sync can never clobber a custom description or image." },
      { phase: "03", label: "Payments and identity", body: "Two gateways for routing and redundancy, and magic-link SSO so staff across locations sign in without another password to forget or leak." },
      { phase: "04", label: "Sync and reconcile", body: "A background worker runs timestamped delta syncs on a per-store schedule with retries and backoff, orders push back to the POS automatically, and reconciliation reports anything the two sides disagree about." },
    ],
    highlights: [
      { title: "Delta sync", body: "Changed records only, on a per-store schedule with retries and backoff. Fetching just what moved since the last run cut POS API traffic by roughly 80% while keeping the catalogue fresh." },
      { title: "Dual-table architecture", body: "Merchant customisations live beside POS-owned data rather than inside it, so a sync overwrites what it should and nothing else." },
      { title: "Two payment gateways", body: "NMI and Dejavoo, with routing between them, so a single processor problem is not a closed store." },
      { title: "Magic-link SSO", body: "Keycloak-backed passwordless sign-in for staff across locations, which removes the shared-password problem that multi-site retail always has." },
      { title: "Multi-tenant RBAC", body: "Three roles scoped per location across four stores, enforced server side rather than by hiding navigation." },
      { title: "Reconciliation", body: "Scheduled comparison between the storefront and the POS, naming the records that disagree rather than counting them." },
    ],
    hardPart: {
      title: "Making a sync that cannot destroy someone's work",
      body: "The tempting design is one products table with the sync doing an upsert. It is simpler and it is wrong: the first time a merchant writes a good description, the next sync removes it. Splitting ownership at the field level — immutable POS-owned rows the sync controls entirely, merchant-owned rows it never touches, merged on read — lets the sync stay aggressive and simple, which is what a sync should be. The second half was doing that across four stores without hammering the POS API, which is what timestamped delta sync solved.",
    },
    outcome: [
      { title: "80% fewer POS API calls", body: "Timestamped delta sync replaced full catalogue reloads, fetching only what changed since the last run while keeping four stores current." },
      { title: "Merchant work survives the sync", body: "Descriptions, photography and web-only items live in rows the sync never touches, so the aggressive sync and the merchant's edits stopped being in conflict." },
      { title: "Four locations, one catalogue", body: "Per-store scheduling with retries and backoff, and orders pushing back to the point of sale automatically rather than being re-keyed." },
    ],
    differently:
      "The reconciliation job shipped after launch rather than with the first sync. Its first run surfaced three weeks of accumulated drift — all of it recoverable, none of it detected until then, and none of it visible to anybody in the meantime. Reconciliation is a day of work and it should be part of the first integration, not an improvement you make once you already trust the system.",
    stack: [
      { group: "Application", items: "React, Node.js, TypeScript" },
      { group: "Data", items: "PostgreSQL, Redis, delta sync, reconciliation" },
      { group: "Payments", items: "NMI, Dejavoo gateway routing" },
      { group: "Identity", items: "Keycloak, magic-link SSO, multi-tenant RBAC" },
    ],
    standing:
      "Shipped and running. This is the build the POS and payments pages on this site are describing when they talk about idempotent writes and reconciliation — it is where those opinions came from.",
    services: ["ecommerce-and-pos", "systems-integration", "web-applications"],
    practices: [
      "systems-integration",
      "payments-and-commerce",
      "devices-and-edge",
      "data-and-sync",
      "security-and-access",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "sill-platform",
    name: "Sill",
    icon: Blocks,
    kind: "platform",
    sector: "Delivery platform",
    status: "In production",
    href: null,
    year: "2025 — ongoing",
    tagline: "The layer every engagement starts on.",
    summary:
      "Accounts, permissions, billing, notifications, admin, audit logging, multi-tenancy and background jobs, written once and hardened in production across every build. It is the reason a four-week delivery window is a commitment rather than an ambition.",
    metaDescription:
      "Sill is the delivery platform every engagement is built on: authentication, permissions, billing, notifications, admin, audit logging and multi-tenancy.",
    facts: [
      ["~60%", "of a typical build, already done"],
      ["In production", "across every build"],
      ["One codebase", "not a copy per client"],
    ],
    problem: {
      title: "Most of a quote is plumbing nobody should be paying for twice",
      body: "Logins, roles, billing, notifications, an admin screen, audit logs. Every project needs them, none of them is specific to a business, and firms that rebuild them each time are charging clients to solve a problem they already solved last quarter.",
    },
    approach: [
      { phase: "01", label: "Build it properly once", body: "Not extracted from a client project after the fact, but built as infrastructure with its own tests, its own release process and its own operational burden." },
      { phase: "02", label: "Depend on it", body: "Charten, Larder and InvtoryX all sit on it. Every live project depending on the same foundation is what stops it rotting, because a defect surfaces on our side first." },
      { phase: "03", label: "One codebase, not copies", body: "A fix to the permissions layer reaches every project on the platform, including work that shipped a year ago. Forked copies would each rot separately." },
      { phase: "04", label: "Harden continuously", body: "Security advisories, dependency updates and the fixes production incidents teach us, applied centrally rather than per project." },
    ],
    highlights: [
      { title: "Accounts & authentication", body: "Sessions, MFA, passkeys and SSO, with recovery flows designed rather than improvised." },
      { title: "Roles & permissions", body: "Role and attribute-based access enforced server side, with tests asserting what each role cannot do." },
      { title: "Billing & subscriptions", body: "Plans, proration, trials, dunning and failed-payment recovery, charging real customers every month." },
      { title: "Multi-tenancy", body: "Row-level security at the database, so a forgotten filter in application code still cannot return another tenant's data." },
      { title: "Audit logging", body: "Append-only records of who did what and when, retained and queryable before anybody asks." },
      { title: "Background jobs", body: "Durable queues and scheduled work that survives a restart without losing anything." },
    ],
    hardPart: {
      title: "A platform is only real if its authors depend on it",
      body: "Shared foundations decay when the people maintaining them do not use them. The discipline that keeps Sill honest is that every live project depends on it, so a permissions bug or a billing edge case surfaces on our side before it surfaces on a client's. The maintenance is work we would be doing regardless, and every client on the platform inherits it: the fix lands once and reaches all of them.",
    },
    outcome: [
      { title: "Around sixty per cent already built", body: "Accounts, permissions, billing, notifications, admin, audit logging, multi-tenancy and jobs exist before a project starts, which is what makes a four-week quote possible." },
      { title: "One fix reaches every project", body: "A security patch or a permissions bug is fixed once and lands everywhere on the platform, including work that shipped a year earlier." },
      { title: "Hardened by real usage", body: "Billing takes real payments monthly and tenant isolation is enforced at the database, so the hard parts have been exercised rather than assumed." },
    ],
    differently:
      "We let the admin backoffice grow feature by feature instead of designing it once. It never got the scrutiny the layers underneath it did, and it is now the part of the platform most likely to need a rewrite. Shared infrastructure decays wherever nobody is looking, and the tooling that only staff use is always where nobody is looking.",
    stack: [
      { group: "API", items: "NestJS, Prisma, PostgreSQL, BullMQ" },
      { group: "Web", items: "Next.js, React, TypeScript" },
      { group: "Mobile", items: "Expo, React Native" },
      { group: "Shared", items: "OpenAPI codegen, typed clients, shared config" },
    ],
    standing:
      "In production and continuously maintained. It is not a product we sell — it is the foundation client work is built on, and the honest explanation for how a small team ships this much.",
    services: ["web-applications", "cloud-and-devops", "managed-support"],
    practices: [
      "platform-engineering",
      "security-and-access",
      "payments-and-commerce",
      "cloud-and-delivery",
      "quality-and-testing",
    ],
  },

]

/**
 * Modules.
 *
 * Smaller than a product and bigger than a feature: named, reusable components
 * that already run inside the systems above. Naming an accelerator is standard
 * practice at consulting firms for a good reason — it turns "we could build
 * that" into "that is already running, here is where."
 *
 * Every module below is grounded in something concrete: either the platform's
 * own feature set, or a component identifiable in one of the five builds.
 * `runningIn` is the receipt. A module with nothing in `runningIn` does not
 * belong on this list, because the whole point is that it is not a promise.
 */
export type Module = {
  name: string
  icon: LucideIcon
  blurb: string
  /** Work slugs where this is live. This is the evidence — never leave it empty. */
  runningIn: string[]
  practices: string[]
}

export const MODULES: Module[] = [
  {
    name: "Organisations & membership",
    icon: Building2,
    blurb:
      "Organisations with members, invitations, roles and permissions. The multi-tenant spine every B2B product needs before it can have a single customer.",
    runningIn: ["sill-platform", "invtoryx", "eshop-pos-ecommerce"],
    practices: ["security-and-access", "platform-engineering"],
  },
  {
    name: "Authentication & 2FA",
    icon: KeyRound,
    blurb:
      "Sessions, two-factor, phone sign-in and SSO, with the account recovery paths designed rather than left to a password reset email.",
    runningIn: ["sill-platform", "charten", "eshop-pos-ecommerce"],
    practices: ["security-and-access", "product-engineering"],
  },
  {
    name: "Billing & subscriptions",
    icon: CreditCard,
    blurb:
      "Plans, proration, trials, upgrades, dunning and failed-payment recovery. Charging real customers on live software every month.",
    runningIn: ["sill-platform", "charten"],
    practices: ["payments-and-commerce", "platform-engineering"],
  },
  {
    name: "Notifications & delivery",
    icon: Bell,
    blurb:
      "Email, SMS and in-app messaging with templates, preferences and delivery tracking, so a message that failed to send is visible rather than silent.",
    runningIn: ["sill-platform", "larder"],
    practices: ["growth-and-lifecycle", "platform-engineering"],
  },
  {
    name: "Staff backoffice",
    icon: LayoutDashboard,
    blurb:
      "An internal admin area for the people running the business: accounts, impersonation with an audit trail, support tooling and operational overrides.",
    runningIn: ["sill-platform", "invtoryx"],
    practices: ["business-systems", "design-and-experience"],
  },
  {
    name: "Content management",
    icon: FileText,
    blurb:
      "A CMS for the marketing surface and in-product copy, so changing a page does not require a deploy or an engineer. We work in WordPress where that is what a client already runs.",
    runningIn: ["sill-platform"],
    practices: ["search-and-growth", "product-engineering"],
  },
  {
    name: "Audit trail",
    icon: ScrollText,
    blurb:
      "Append-only records of who did what and when, retained and queryable. Built in from the first commit because retrofitting history is impossible.",
    runningIn: ["sill-platform", "charten", "invtoryx"],
    practices: ["security-and-access", "managed-services"],
  },
  {
    name: "Delta sync engine",
    icon: RefreshCcw,
    blurb:
      "Changed-record sync with tombstoned deletes, idempotent writes and a written conflict policy. The component most integrations get wrong.",
    runningIn: ["larder", "invtoryx", "eshop-pos-ecommerce"],
    practices: ["data-and-sync", "systems-integration"],
  },
  {
    name: "Location guard",
    icon: MapPin,
    blurb:
      "Per-site role resolution for multi-location businesses: the effective role a user holds at the location being accessed, Redis-cached and integration-tested.",
    runningIn: ["invtoryx"],
    practices: ["security-and-access", "business-systems"],
  },
  {
    name: "Document extraction",
    icon: FileScan,
    blurb:
      "Receipts, invoices and delivery notes turned into structured records, with confidence scores and a human review step for anything uncertain.",
    runningIn: ["larder"],
    practices: ["ai-automation", "data-and-sync"],
  },
  {
    name: "Reconciliation jobs",
    icon: GitCompare,
    blurb:
      "Scheduled comparison across two systems that names the records which disagree rather than counting them. A day to build, and it saves an audit.",
    runningIn: ["eshop-pos-ecommerce", "invtoryx"],
    practices: ["data-and-sync", "payments-and-commerce"],
  },
  {
    name: "Device & peripheral layer",
    icon: Printer,
    blurb:
      "Receipt and label printers, barcode scanners, cash drawers and certified card readers, with offline queueing so a counter keeps trading through an outage.",
    runningIn: ["eshop-pos-ecommerce"],
    practices: ["devices-and-edge", "payments-and-commerce"],
  },
]

export const STATUS_TONE: Record<WorkStatus, string> = {
  Live: "bg-[#0E7C5A]/10 text-[#0E7C5A] dark:bg-[#4FC39C]/15 dark:text-[#4FC39C]",
  "In production": "bg-[#0E7C5A]/10 text-[#0E7C5A] dark:bg-[#4FC39C]/15 dark:text-[#4FC39C]",
  Shipped: "bg-accent text-accent-foreground",
  Built: "bg-accent text-accent-foreground",
  "In development": "bg-muted text-muted-foreground",
}

export function getWork(slug: string): WorkItem | undefined {
  return WORK.find((w) => w.slug === slug)
}

/** Work that evidences a given service. Read by the service pages. */
export function workForService(slug: string): WorkItem[] {
  return WORK.filter((w) => w.services.includes(slug))
}

/** Work that evidences a given practice area. Read by the practice pages. */
export function workForPractice(slug: string): WorkItem[] {
  return WORK.filter((w) => w.practices.includes(slug))
}
