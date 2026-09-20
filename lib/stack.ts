import type { LucideIcon } from "lucide-react"
import {
  FileCode2, Globe, Smartphone, Server, Database, BarChart3, Sparkles,
  CreditCard, KeyRound, Building2, Cloud, ShieldCheck, Send, Search, Palette,
} from "lucide-react"

/**
 * The stack, in full.
 *
 * This exists because the technology bar on the home page is a scrolling list
 * of names with nothing behind it. A prospect who recognises one of them, or an
 * answer engine asked "do they work with Toast", had nowhere to land.
 *
 * One page, not one page per tool. A page per technology would have meant
 * eighty thin pages asserting expertise, which is the shape of an SEO farm
 * rather than of a firm. Grouped instead, with a note on each group saying what
 * we actually do with it, and a short list at the top of the handful we are
 * genuinely deepest in.
 *
 * The rule for being on this list is that we have shipped something with it.
 * Not evaluated, not read about. Shipped.
 */

export type StackGroup = {
  name: string
  icon: LucideIcon
  /** What this group is for, in one sentence. */
  blurb: string
  /** The honest note: how we actually use it, or what we would not claim. */
  note: string
  items: string[]
}

export const STACK_GROUPS: StackGroup[] = [
  {
    name: "Languages & runtimes",
    icon: FileCode2,
    blurb: "One language across web, API and mobile, and the others where they genuinely fit.",
    note: "TypeScript end to end is the decision that does most to let a small team ship like a larger one: shared types, shared validation, and an integration break that becomes a compile error rather than a customer's Tuesday. Python where the libraries are, which in practice means data and machine learning.",
    items: [
      "TypeScript", "JavaScript", "Node.js", "Python", "SQL", "Bash",
      "HTML", "CSS", "Dart",
    ],
  },
  {
    name: "Web",
    icon: Globe,
    blurb: "The framework and the interface layer behind every application we ship.",
    note: "Next.js on the App Router, server components by default, client components only where interactivity requires them. The markup arrives complete, which matters for search and matters far more for answer engines that never run JavaScript.",
    items: [
      "React", "Next.js", "App Router", "React Server Components", "Vite",
      "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion",
      "TanStack Query", "React Hook Form", "Zod", "Astro", "Remix",
    ],
  },
  {
    name: "Mobile & devices",
    icon: Smartphone,
    blurb: "iOS and Android from one codebase, plus the hardware a counter actually has on it.",
    note: "React Native with Expo, so a mobile app shares real code with the web application in front of the same API. Offline-first where staff work in stockrooms and vans, which is a decision made on day one rather than a feature added later.",
    items: [
      "React Native", "Expo", "EAS Build", "App Store Connect", "Google Play",
      "Offline-first sync", "SQLite on device", "Push notifications",
      "Barcode scanning", "ESC/POS printers", "Card readers", "Kiosk mode",
    ],
  },
  {
    name: "APIs & backend",
    icon: Server,
    blurb: "Where the business rules live, and anything that has to outlive a request.",
    note: "NestJS for domain logic, background work and integrations, with the client generated from OpenAPI so a renamed field breaks the build instead of production. REST by default because it is simpler to cache, debug and hand to a third party.",
    items: [
      "NestJS", "Express", "REST", "OpenAPI", "GraphQL", "WebSockets",
      "Server-Sent Events", "BullMQ", "Cron & scheduled jobs", "Webhooks",
      "Idempotency keys", "Rate limiting", "FastAPI",
    ],
  },
  {
    name: "Data & storage",
    icon: Database,
    blurb: "One database engine under everything, with the rest reserved for real reasons.",
    note: "PostgreSQL, with row-level security so a forgotten filter in application code still cannot return another tenant's rows. Redis for the things a cache is actually for. Migrations rehearsed against a copy of production before they touch it.",
    items: [
      "PostgreSQL", "Prisma", "Drizzle", "SQLite", "Redis", "pgvector",
      "Row-level security", "Database migrations", "Read replicas",
      "Event sourcing", "S3 & object storage", "Backups & PITR",
    ],
  },
  {
    name: "Analytics & reporting",
    icon: BarChart3,
    blurb: "Agreed definitions first, then dashboards built around a decision.",
    note: "Most reporting problems are definition problems: three teams with three meanings of the same word. We settle that before building anything, then keep reporting off a read model so a heavy query cannot slow down the people taking orders.",
    items: [
      "dbt", "BigQuery", "DuckDB", "Metabase", "Looker Studio",
      "Materialised views", "Read models", "GA4", "PostHog",
      "Scheduled exports",
    ],
  },
  {
    name: "AI & automation",
    icon: Sparkles,
    blurb: "Where it removes real work, and only where a user can tell it got something wrong.",
    note: "Retrieval over documents you own, and extraction with a confidence threshold and a review queue. We do not ship a feature where a wrong answer is invisible, which rules out most of what gets demonstrated.",
    items: [
      "Claude", "OpenAI", "Llama", "Embeddings & vector search",
      "Retrieval-augmented generation", "Structured output",
      "Confidence scoring", "Human review queues", "Document extraction",
      "Speech to text", "Prompt evaluation sets",
    ],
  },
  {
    name: "Payments & commerce",
    icon: CreditCard,
    blurb: "Taking money reliably, and being able to prove afterwards where it went.",
    note: "The common serious bug in payment code is not fraud. It is a retry that creates a second charge. Idempotency keys generated before sending, webhooks treated as hints rather than guarantees, and daily reconciliation that names the specific transactions that disagree.",
    items: [
      "Stripe", "Stripe Terminal", "Stripe Billing", "Adyen", "NMI",
      "Dejavoo", "Authorize.net", "Square", "Toast", "Clover", "Lightspeed",
      "OneHubPOS", "Shopify", "WooCommerce", "Tax & VAT handling",
      "Reconciliation jobs",
    ],
  },
  {
    name: "Identity & access",
    icon: KeyRound,
    blurb: "Who someone is, and precisely what they cannot do.",
    note: "Permissions resolved per request rather than assumed from a single global role, and covered by tests asserting the negative case. Permission bugs never throw an error; they quietly return the wrong rows, which is why the tests matter more here than almost anywhere.",
    items: [
      "Auth.js", "Auth0", "Okta", "Microsoft Entra ID", "Keycloak",
      "SAML", "OIDC", "SCIM", "Passkeys", "Multi-factor authentication",
      "Magic-link SSO", "Role & attribute-based access", "Audit logging",
    ],
  },
  {
    name: "Business systems",
    icon: Building2,
    blurb: "Making the software you already pay for agree with the software we build.",
    note: "Integration work fails on assumptions about the other system, so mapping what it emits, how often and what it does on a delete comes before any code. Every write is idempotent and every integration gets a reconciliation report.",
    items: [
      "QuickBooks", "Xero", "NetSuite", "HubSpot", "Salesforce", "Pipedrive",
      "WordPress", "Zapier", "Make", "SFTP & flat-file feeds", "EDI",
      "Google Workspace", "Microsoft 365",
    ],
  },
  {
    name: "Cloud & delivery",
    icon: Cloud,
    blurb: "Infrastructure defined in code, and a pipeline that stops a bad merge.",
    note: "Anything created by hand in a console exists nowhere and is known to nobody, and will be discovered during an outage. Managed services by default: they cost more per month and far less per year once you count the hours.",
    items: [
      "AWS", "Vercel", "Cloudflare", "Fly.io", "Neon", "Supabase",
      "Docker", "Kubernetes", "Terraform", "SST", "GitHub Actions",
      "Preview environments", "Blue-green deploys", "CDN & edge caching",
    ],
  },
  {
    name: "Quality & observability",
    icon: ShieldCheck,
    blurb: "Knowing it works before a customer tells you that it does not.",
    note: "Tests concentrated where things have actually broken, because your incident history is a better prioritised list than any coverage target. Alerting tied to symptoms a user would notice rather than to every metric available.",
    items: [
      "Playwright", "Vitest", "Jest", "Testing Library", "k6", "axe-core",
      "OpenTelemetry", "Sentry", "Storybook", "ESLint", "Prettier",
      "Dependabot", "CodeQL", "Uptime & synthetic checks",
    ],
  },
  {
    name: "Messaging & notifications",
    icon: Send,
    blurb: "Email, SMS and in-app messages that arrive, and can be proven to have arrived.",
    note: "Deliverability is configuration rather than luck: SPF, DKIM and DMARC set up properly, bounces handled, and a log of what was sent to whom. Most complaints about email landing in spam turn out to be DNS records nobody finished.",
    items: [
      "Twilio", "Resend", "Postmark", "Customer.io", "SendGrid",
      "Web push", "SPF / DKIM / DMARC", "Transactional templates",
      "Delivery logging",
    ],
  },
  {
    name: "Search & visibility",
    icon: Search,
    blurb: "Being found by search engines, and being cited by answer engines.",
    note: "Two different jobs. Ranking rewards authority; being quoted rewards being parseable and complete. This site runs everything we would put on yours, including structured data on every page and an llms.txt.",
    items: [
      "Schema.org", "JSON-LD", "Google Search Console", "Bing Webmaster",
      "Core Web Vitals", "XML sitemaps", "Canonical URLs", "robots.txt",
      "llms.txt", "Open Graph", "Server-side rendering", "Redirect mapping",
    ],
  },
  {
    name: "Design",
    icon: Palette,
    blurb: "Interfaces people can use on the tenth hour, not just in the first minute.",
    note: "Software that demos beautifully and software that is pleasant to use all day pull in opposite directions. If your users live in the tool, we optimise for the second, which usually means fewer animations and more keyboard paths.",
    items: [
      "Figma", "Design tokens", "Component libraries", "Dark mode",
      "WCAG 2.2 AA", "Keyboard navigation", "Responsive layout",
      "Print & receipt layouts",
    ],
  },
]

/**
 * The handful we are deepest in.
 *
 * A list of eighty names invites the question "yes, but which of these do you
 * actually live in". These are the answer, each tied to work that is running.
 */
export const STACK_CORE: { name: string; body: string; runningIn: string[] }[] = [
  {
    name: "TypeScript",
    body: "Web, API and mobile in one language, with types generated from the schema and shared across all three. One person can hold a whole feature rather than handing it across a boundary.",
    runningIn: ["charten", "invtoryx", "larder", "eshop-pos-ecommerce", "sill-platform"],
  },
  {
    name: "Next.js & React",
    body: "Every web application we have built in the last three years, including this site. Server rendering that is not an afterthought, and a hiring pool that will still exist when somebody else inherits the code.",
    runningIn: ["charten", "invtoryx", "larder", "eshop-pos-ecommerce", "sill-platform"],
  },
  {
    name: "NestJS",
    body: "The API layer under our platform. Structure the next person can follow, background work as a first-class thing, and authorisation written as guards you can test.",
    runningIn: ["charten", "invtoryx", "larder", "sill-platform"],
  },
  {
    name: "PostgreSQL & Prisma",
    body: "The database under everything we operate. Ledgers rather than counts, row-level security for tenant isolation, and migrations rehearsed against real data before they run.",
    runningIn: ["charten", "invtoryx", "larder", "eshop-pos-ecommerce", "sill-platform"],
  },
  {
    name: "React Native & Expo",
    body: "iOS and Android from one codebase, sharing types with the web application. Offline-first where the work happens somewhere with no signal.",
    runningIn: ["invtoryx", "larder", "sill-platform"],
  },
  {
    name: "Payments & POS",
    body: "Gateway routing across two processors, card-present terminals, delta sync against a point of sale, and reconciliation that names what disagrees rather than counting it.",
    runningIn: ["eshop-pos-ecommerce", "sill-platform"],
  },
]

export const STACK_COUNT = STACK_GROUPS.reduce((n, g) => n + g.items.length, 0)
