import { Metadata } from "next"
import {
  ShoppingCart, Printer, CreditCard, PackageSearch, WifiOff, Store,
  Receipt, Boxes,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Ecommerce & POS",
  description:
    "Selling online and over a counter with one stock number behind both. POS terminals, receipt and label printers, card readers, offline trading and reconciliation.",
  alternates: { canonical: "/services/ecommerce-and-pos" },
}

const config: ServiceConfig = {
  slug: "ecommerce-and-pos",
  eyebrow: "Ecommerce & POS",
  icon: ShoppingCart,
  title: "One stock number, online and at the counter.",
  lede:
    "Point of sale and ecommerce sharing a single source of truth, on hardware that keeps trading when the internet does not. The gap between the shelf and the website is where most retail software falls over.",
  facts: [
    ["4 – 6 weeks", "scope to live"],
    ["Fixed price", "against a written scope"],
    ["Offline first", "trading continues in an outage"],
  ],
  forWho: [
    {
      title: "You oversold something you did not have",
      body: "It sold in store and online within the same hour. One customer is getting an apology email, and the stock figure was never wrong on purpose.",
    },
    {
      title: "The internet goes down and trading stops",
      body: "A cloud-only till means an outage at somebody else's data centre becomes a queue of people at yours who cannot pay.",
    },
    {
      title: "Each location does it differently",
      body: "The printer was configured by hand at one site and nobody wrote down how. The second site has never produced a correct receipt.",
    },
  ],
  capabilities: [
    {
      icon: Store,
      title: "POS terminal software",
      body: "Built for a counter: fast, touch-first, and usable by somebody who started yesterday with six people waiting in front of them.",
    },
    {
      icon: Boxes,
      title: "Unified inventory",
      body: "One stock record behind the till and the storefront, with reservations and conflict rules agreed before anybody hits a conflict.",
    },
    {
      icon: WifiOff,
      title: "Offline trading",
      body: "A full local store with queued operations, so the till keeps working through an outage and reconciles cleanly when it returns.",
    },
    {
      icon: Printer,
      title: "Peripherals",
      body: "Receipt and label printers, barcode and QR scanners, cash drawers, scales and customer-facing displays, tested on the real hardware.",
    },
    {
      icon: CreditCard,
      title: "Payments at the counter",
      body: "Certified card readers, tips, split payments and refunds, including what happens when a reader disconnects mid-transaction.",
    },
    {
      icon: Receipt,
      title: "Reconciliation",
      body: "Daily comparison of till, storefront, processor and ledger, naming the transactions that disagree rather than counting them.",
    },
    {
      icon: PackageSearch,
      title: "Storefront",
      body: "A customer-facing store on your own domain, or an integration with the Shopify or WooCommerce shop you already run.",
    },
    {
      icon: ShoppingCart,
      title: "Multi-location",
      body: "Per-site configuration, staged updates and reporting across every location, without anybody driving between them.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Scope", body: "A day in the shop watching how selling actually happens, your exact hardware models confirmed, and a written specification you sign off. No code until then." },
    { phase: "Week 2", label: "Build", body: "The core selling flow and the inventory model, running on the real terminal with a real printer attached. Friday demo you can ring a sale on." },
    { phase: "Week 3", label: "Build", body: "Payments, offline queueing, the storefront link and reconciliation. Second Friday demo, including pulling the network cable to prove offline works." },
    { phase: "Week 4", label: "Ship", body: "Pilot site live with the old process still available, staff training, then rollout to the remaining locations once the pilot is quiet." },
  ],
  deliverables: [
    "POS software running on your confirmed hardware",
    "One inventory record shared by counter and storefront",
    "Offline trading with queued sync and conflict reporting",
    "Daily reconciliation across till, processor and ledger",
    "Per-site configuration and staged update rollout",
    "Staff training at the pilot location, recorded",
    "30 days of post-launch fixes at no additional cost",
  ],
  stack: [
    { group: "Devices", items: "Android & iOS terminals, Star and Epson printers, Zebra scanners" },
    { group: "Payments", items: "Stripe Terminal, Square, certified card readers" },
    { group: "Local data", items: "SQLite, local-first sync, queued operations" },
    { group: "Commerce", items: "Shopify, WooCommerce, custom storefronts" },
  ],
  pricing: {
    duration: "Fixed price · four to six weeks",
    note: "Number of locations and how much peripheral hardware is involved move the figure more than anything else. A single till with a printer is a small job; six sites with scales, label printers and an existing storefront sits near the top.",
  },
  faqs: [
    { q: "Do we have to buy new hardware?", a: "Usually not. Most current terminals, printers and scanners are supported. We confirm your exact models in week one, before anybody commits to buying anything." },
    { q: "What actually happens in an outage?", a: "Trading continues. Sales are written locally and queued, then sync when the connection returns, with reconciliation reporting anything that conflicted while you were offline." },
    { q: "Can we keep our existing online store?", a: "Yes. Integrating with a Shopify or WooCommerce store you already run is common and usually cheaper than replacing it." },
    { q: "Who handles payment certification?", a: "We build against certified readers from the processor, which keeps the certification burden with them rather than with you. That is deliberate and much the cheaper path." },
    { q: "How do you roll out to several sites?", a: "One pilot location first, running long enough to be boring, then staged rollout. A bad update across an entire fleet at once makes for a very long day." },
    { q: "What about card data?", a: "It never reaches your servers. Tokenisation and certified readers keep you in the simplest compliance category, and your acquirer confirms the specifics." },
  ],
  related: [
    { href: "/services/systems-integration", label: "Systems Integration", blurb: "Connecting the till to accounting, suppliers and the warehouse." },
    { href: "/services/mobile-solutions", label: "Mobile Apps", blurb: "A customer-facing app sharing the same stock and orders." },
    { href: "/services/data-and-analytics", label: "Data & Analytics", blurb: "Reporting across every location and both sales channels." },
  ],
  schema: { path: "/services/ecommerce-and-pos" },
  closing: {
    title: "Tell us what you sell, and where.",
    body: "How many locations, what hardware is on the counter, and what you sell online. We confirm your exact models before anything is quoted.",
  },
}

export default function EcommerceAndPosPage() {
  return <ServicePage c={config} />
}
