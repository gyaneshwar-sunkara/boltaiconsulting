import { Metadata } from "next"
import {
  Plug, RefreshCcw, CreditCard, KeyRound, FileSpreadsheet, Building2,
  Webhook, ShieldAlert,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Systems Integration",
  description:
    "Connecting POS, accounting, CRM, payments and warehouse systems so nobody retypes between them. Idempotent writes, signed webhooks and daily reconciliation.",
  alternates: { canonical: "/services/systems-integration" },
}

const config: ServiceConfig = {
  slug: "systems-integration",
  eyebrow: "Systems Integration",
  icon: Plug,
  title: "Make the systems you already pay for agree.",
  lede:
    "Your POS, your accounting package, your CRM and the supplier portal that still emails a CSV at midnight. We join them up so the same number appears in every place it should, without a person in the middle.",
  facts: [
    ["2 – 5 weeks", "scope to live"],
    ["Fixed price", "against a written scope"],
    ["Week 1", "every system mapped first"],
  ],
  forWho: [
    {
      title: "A person is the integration",
      body: "Someone exports from one system and imports into another every morning. They are completely reliable until the week they take leave, and then nothing moves.",
    },
    {
      title: "The same number is different in two places",
      body: "Your POS says one thing and your accounting package says another. Reconciling them is somebody's entire Monday, every Monday.",
    },
    {
      title: "A vendor promised it integrates",
      body: "It does, in a demo, with clean data. Under your volume and with your edge cases the claim turned out to be considerably more complicated.",
    },
  ],
  capabilities: [
    {
      icon: Building2,
      title: "POS & retail platforms",
      body: "Square, Toast, Clover, Lightspeed and Shopify, plus the older terminals that will only talk to something on the local network.",
    },
    {
      icon: CreditCard,
      title: "Payments & accounting",
      body: "Gateways into QuickBooks, Xero or NetSuite, with the reconciliation layer that proves the money landed where the order said it would.",
    },
    {
      icon: KeyRound,
      title: "Identity & provisioning",
      body: "SSO, SAML, OIDC and SCIM, so a new starter has the right access on day one and a leaver loses it the same afternoon.",
    },
    {
      icon: Webhook,
      title: "Webhooks & events",
      body: "Signed, replayable, idempotent delivery with a dead-letter queue that a human being can open, read and re-drive.",
    },
    {
      icon: FileSpreadsheet,
      title: "File-based interchange",
      body: "SFTP, EDI and the nightly CSV a supplier will never stop sending. Parsed, validated, and alerted on the day the format quietly changes.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous reconciliation",
      body: "A scheduled job compares both sides and names the records that disagree. Finding drift in an alert beats finding it in an audit.",
    },
    {
      icon: ShieldAlert,
      title: "Failure handling",
      body: "Retries with backoff, rate-limit awareness and queueing, so a partner's bad afternoon does not become an outage on your side.",
    },
    {
      icon: Plug,
      title: "Legacy bridging",
      body: "A layer in front of a system that cannot be changed, giving new work a clean interface to build against without touching the old one.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Map", body: "A written inventory of every system: who owns it, what it can emit, what it refuses to, and where the real constraints are. Integrations fail on assumptions rather than on code." },
    { phase: "Week 2", label: "Build", body: "The primary flow, end to end, with idempotency and retry behaviour in from the start. Friday demo moving your real records between real systems." },
    { phase: "Week 3", label: "Harden", body: "Edge cases, failure paths, alerting and the reconciliation job. This is the week that decides whether it still works in six months." },
    { phase: "Week 4", label: "Ship", body: "Cutover with the manual process still running in parallel, monitoring live, and a runbook for the failures we already know about." },
  ],
  deliverables: [
    "A written map of every connected system and what it owns",
    "Live integrations with idempotent writes and signed webhooks",
    "A scheduled reconciliation job with drift reporting",
    "Alerting routed to your team, with a runbook per alert",
    "Credentials in your secret manager, scoped and documented",
    "Source code in a repository you own from the first commit",
    "30 days of post-launch fixes at no additional cost",
  ],
  stack: [
    { group: "Commerce", items: "Square, Toast, Clover, Shopify, Lightspeed" },
    { group: "Finance", items: "QuickBooks, Xero, NetSuite, Stripe" },
    { group: "Identity", items: "Auth0, Okta, Entra ID, SAML & OIDC" },
    { group: "Transport", items: "Webhooks, SFTP, EDI, message queues" },
  ],
  pricing: {
    duration: "Fixed price · two to five weeks",
    note: "Two systems with good APIs and six systems where one of them is a nightly CSV are genuinely different jobs. Week one tells you which you have, and the quote is fixed against the map.",
  },
  faqs: [
    { q: "The vendor says there is no API.", a: "Sometimes true, sometimes it means there is no public documentation. We check the network traffic, the partner programme and the database directly. If there is genuinely no route in, you hear that in week one rather than in month two." },
    { q: "Can you do this without replacing our current systems?", a: "That is usually the right answer and the cheaper one. A layer in front lets everything keep running while new work builds against a clean interface." },
    { q: "What happens when a partner changes their format?", a: "Every inbound payload is validated and a failure raises an alert. You hear it from us before you hear it from a customer." },
    { q: "How do you stop duplicate records?", a: "Every write is idempotent, keyed on something stable from the source. Networks retry and partners replay — a system that assumes single delivery will eventually double-post something that matters." },
    { q: "Who holds the credentials?", a: "You do. They live in your secret manager, we request scoped access for the work, and it is handed back at the end of the engagement." },
    { q: "What if one system goes down?", a: "The others keep working. Operations queue and retry, and reconciliation reports anything that did not make it once the connection returns." },
  ],
  related: [
    { href: "/services/ecommerce-and-pos", label: "Ecommerce & POS", blurb: "When the integration is between a counter and an online store." },
    { href: "/services/data-and-analytics", label: "Data & Analytics", blurb: "Once the systems agree, reporting across all of them." },
    { href: "/services/legacy-modernisation", label: "Legacy Modernisation", blurb: "When the honest answer is that the old system has to go." },
  ],
  schema: { path: "/services/systems-integration" },
  closing: {
    title: "Tell us which systems refuse to talk.",
    body: "Name the tools and the handoff that keeps breaking. Week one establishes whether there is a route in, before you have committed to a build.",
  },
}

export default function SystemsIntegrationPage() {
  return <ServicePage c={config} />
}
