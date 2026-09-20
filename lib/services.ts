import type { LucideIcon } from "lucide-react"
import {
  Code, Smartphone, ShoppingCart, Brain, Plug, BarChart3, RefreshCw,
  Cloud, LifeBuoy, Search, Users, Compass,
} from "lucide-react"
import { PRACTICES, type Practice } from "@/lib/practices"

/**
 * The service registry.
 *
 * Two layers, deliberately: a *service* is what you buy — a scope, a price
 * band and a billing model. A *practice* is a discipline we hold. Big firms
 * run exactly this split, and it works because buyers arrive at one of the
 * two: either "I need an app" or "do you do payments?".
 *
 * The relationship lives here and only here. A service declares the practices
 * it draws on; a practice page derives its services by reverse lookup. That
 * way adding a service wires both directions at once and the two pages can
 * never disagree about each other.
 */
export type EngagementModel = "project" | "retainer" | "engagement"

export type ServiceEntry = {
  slug: string
  name: string
  icon: LucideIcon
  /** One line, used on cards and in the nav. */
  summary: string
  model: EngagementModel
  /** Practice slugs this service draws on. */
  practices: string[]
}

export const SERVICES: ServiceEntry[] = [
  /* ── Build it ─────────────────────────────────────────────── */
  {
    slug: "web-applications",
    name: "Web Applications",
    icon: Code,
    summary:
      "Customer portals, operational dashboards, booking systems and internal tools. The things a spreadsheet used to do until it stopped coping.",
    model: "project",
    practices: [
      "product-engineering",
      "design-and-experience",
      "quality-and-testing",
      "security-and-access",
    ],
  },
  {
    slug: "mobile-solutions",
    name: "Mobile Apps",
    icon: Smartphone,
    summary:
      "iOS and Android from one codebase, shipped to both stores. Offline-first where staff work in basements and stockrooms.",
    model: "project",
    practices: [
      "product-engineering",
      "devices-and-edge",
      "design-and-experience",
      "quality-and-testing",
    ],
  },
  {
    slug: "ecommerce-and-pos",
    name: "Ecommerce & POS",
    icon: ShoppingCart,
    summary:
      "Selling online and over a counter, with one stock number behind both. Terminals, printers, card readers and the reconciliation that keeps them honest.",
    model: "project",
    practices: [
      "devices-and-edge",
      "payments-and-commerce",
      "systems-integration",
      "data-and-sync",
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    icon: Brain,
    summary:
      "AI added to software that already exists — where it removes real work, not where it reads well in a deck.",
    model: "project",
    practices: ["ai-automation", "data-and-sync", "product-engineering"],
  },

  /* ── Connect & modernise ──────────────────────────────────── */
  {
    slug: "systems-integration",
    name: "Systems Integration",
    icon: Plug,
    summary:
      "Making the systems you already pay for agree with each other, so nobody is retyping between them at five o'clock.",
    model: "project",
    practices: [
      "systems-integration",
      "business-systems",
      "payments-and-commerce",
      "data-and-sync",
    ],
  },
  {
    slug: "data-and-analytics",
    name: "Data & Analytics",
    icon: BarChart3,
    summary:
      "A warehouse, agreed metric definitions and dashboards built around the decision rather than around the available columns.",
    model: "project",
    practices: ["analytics-and-insight", "data-and-sync", "ai-automation"],
  },
  {
    slug: "legacy-modernisation",
    name: "Legacy Modernisation",
    icon: RefreshCw,
    summary:
      "Replacing the system nobody wants to touch, in pieces, with both running until you are satisfied.",
    model: "project",
    practices: [
      "modernisation-and-migration",
      "systems-integration",
      "cloud-and-delivery",
      "quality-and-testing",
    ],
  },

  /* ── Run it ───────────────────────────────────────────────── */
  {
    slug: "cloud-and-devops",
    name: "Cloud & DevOps",
    icon: Cloud,
    summary:
      "Infrastructure in code, a pipeline on every commit, and alerting that reaches you before a customer does.",
    model: "project",
    practices: [
      "cloud-and-delivery",
      "platform-engineering",
      "security-and-access",
    ],
  },
  {
    slug: "managed-support",
    name: "Managed Support",
    icon: LifeBuoy,
    summary:
      "Monitoring, monthly patching, incident response and a steady pace of small improvements, from the engineers who built it.",
    model: "retainer",
    practices: [
      "managed-services",
      "cloud-and-delivery",
      "security-and-access",
      "quality-and-testing",
    ],
  },

  /* ── Grow & scale ─────────────────────────────────────────── */
  {
    slug: "search-visibility",
    name: "Search Visibility",
    icon: Search,
    summary:
      "SEO, plus getting named when someone asks ChatGPT or Perplexity for a recommendation. Two channels, both reported.",
    model: "retainer",
    practices: [
      "search-and-growth",
      "growth-and-lifecycle",
      "analytics-and-insight",
    ],
  },
  {
    slug: "dedicated-teams",
    name: "Dedicated Teams",
    icon: Users,
    summary:
      "Named engineers inside your team, on your board and in your standups, when you need capacity rather than a project.",
    model: "retainer",
    practices: [
      "embedded-teams",
      "product-engineering",
      "quality-and-testing",
      "enablement-and-training",
    ],
  },

  /* ── Before you build ─────────────────────────────────────── */
  {
    slug: "product-discovery",
    name: "Product Discovery",
    icon: Compass,
    summary:
      "A written specification, a fixed-price quote and a delivery date — or an honest assessment that you should not build it at all.",
    model: "engagement",
    practices: [
      "product-strategy",
      "design-and-experience",
      "modernisation-and-migration",
    ],
  },
]

/** How the services page and the nav are grouped: by what you are buying. */
export const SERVICE_GROUPS: {
  name: string
  blurb: string
  billing: string
  slugs: string[]
}[] = [
  {
    name: "Build it",
    blurb: "New software, scoped in week one and quoted as one number.",
    billing: "Fixed-price project",
    slugs: ["web-applications", "mobile-solutions", "ecommerce-and-pos", "ai-integration"],
  },
  {
    name: "Connect & modernise",
    blurb: "Making what you already own work properly, or replacing it safely.",
    billing: "Fixed-price project",
    slugs: ["systems-integration", "data-and-analytics", "legacy-modernisation"],
  },
  {
    name: "Run it",
    blurb: "The infrastructure underneath, and keeping it standing afterwards.",
    billing: "Project, then optional retainer",
    slugs: ["cloud-and-devops", "managed-support"],
  },
  {
    name: "Grow & scale",
    blurb: "Being found, and adding capacity without a permanent hire.",
    billing: "Monthly retainer",
    slugs: ["search-visibility", "dedicated-teams"],
  },
  {
    name: "Before you build",
    blurb: "Working out what it is, and whether it is worth doing.",
    billing: "Short fixed engagement",
    slugs: ["product-discovery"],
  },
]

export const MODEL_LABEL: Record<EngagementModel, string> = {
  project: "Fixed-price project",
  retainer: "Monthly retainer",
  engagement: "Fixed engagement",
}

export function getService(slug: string): ServiceEntry | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

/** The practice areas a service draws on, in registry order. */
export function practicesForService(slug: string): Practice[] {
  const s = getService(slug)
  if (!s) return []
  return s.practices
    .map((ps) => PRACTICES.find((p) => p.slug === ps))
    .filter((p): p is Practice => Boolean(p))
}

/**
 * Reverse lookup: every service that lists this practice. Practice pages use
 * this instead of naming a service themselves, so the two can never disagree.
 */
export function servicesForPractice(practiceSlug: string): ServiceEntry[] {
  return SERVICES.filter((s) => s.practices.includes(practiceSlug))
}
