import { Metadata } from "next"
import {
  Smartphone, Bell, CloudOff, CreditCard, Fingerprint, MapPin,
  RefreshCw, Store,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "iOS and Android apps built from one codebase, shipped to both stores. Offline-first, push notifications, in-app payments. Fixed price, four to six weeks.",
  alternates: { canonical: "/services/mobile-solutions" },
}

const config: ServiceConfig = {
  slug: "mobile-solutions",
  eyebrow: "Mobile Apps",
  icon: Smartphone,
  title: "One codebase. Both stores. No compromises anyone notices.",
  lede:
    "React Native and Expo, shipped to the App Store and Google Play. Your customers can't tell it isn't native, and you aren't paying two teams to build the same product twice.",
  facts: [
    ["4 – 6 weeks", "scope to store submission"],
    ["Fixed price", "against a written scope"],
    ["1 codebase", "iOS and Android"],
  ],
  forWho: [
    {
      title: "Your customers are on their phones, not a desk",
      body: "Drivers, field staff, patients, diners. People who will never open a laptop to do the thing you need them to do, and who bounce off a mobile browser experience.",
    },
    {
      title: "You were quoted twice for the same app",
      body: "Two teams, two codebases, two sets of bugs, two release cycles that drift apart. For most products that's a decision made in 2015 and never revisited.",
    },
    {
      title: "It has to work without signal",
      body: "A stockroom, a basement kitchen, a delivery van. If the app stops being useful when the bars disappear, staff stop using it and go back to paper.",
    },
  ],
  capabilities: [
    {
      icon: Store,
      title: "iOS & Android from one codebase",
      body: "React Native with Expo. Shared business logic, platform-specific behaviour where it genuinely matters — navigation patterns, permissions, share sheets.",
    },
    {
      icon: CloudOff,
      title: "Offline-first architecture",
      body: "Local database, queued writes, conflict resolution on reconnect. The app keeps working with no signal and reconciles cleanly when it comes back.",
    },
    {
      icon: Bell,
      title: "Push notifications",
      body: "Targeted, scheduled and event-triggered. Delivery tracking so you know what actually landed rather than what was theoretically sent.",
    },
    {
      icon: CreditCard,
      title: "In-app payments & subscriptions",
      body: "Apple and Google in-app purchase where the stores require it, Stripe where they don't. Receipt validation and subscription state handled server-side.",
    },
    {
      icon: Fingerprint,
      title: "Biometric & device auth",
      body: "Face ID, Touch ID, secure keychain storage, and session handling that doesn't log people out every time they switch apps.",
    },
    {
      icon: MapPin,
      title: "Location & device features",
      body: "Background location, camera and barcode scanning, file access, Bluetooth. The hardware integrations a mobile browser simply cannot reach.",
    },
    {
      icon: RefreshCw,
      title: "Over-the-air updates",
      body: "Ship most fixes without waiting days for store review. Critical bugs get resolved the same afternoon rather than the following week.",
    },
    {
      icon: Smartphone,
      title: "Store submission & review",
      body: "Listings, screenshots, privacy declarations, and the review process itself. We handle the rejections, which are routine and rarely about your code.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Scope", body: "Screen-by-screen flow, platform decisions, store account setup, and a written specification you sign off before anything is built." },
    { phase: "Week 2–3", label: "Build", body: "Core screens, data layer, offline sync and authentication. You get a TestFlight or internal-track build on Friday — on your actual device, not a simulator video." },
    { phase: "Week 4", label: "Build", body: "Notifications, payments, device integrations and polish. Second build to your phone, plus the edge cases that only appear on real hardware." },
    { phase: "Week 5–6", label: "Ship", body: "Store submission, review responses, staged rollout, analytics and crash reporting. Store review is the one part of the timeline nobody controls." },
  ],
  deliverables: [
    "Apps published to the App Store and Google Play under your accounts",
    "Source code in a repository you own from the first commit",
    "Store listings, screenshots and privacy declarations",
    "Crash reporting and analytics, configured and explained",
    "Over-the-air update pipeline so you can ship fixes fast",
    "Admin interface for managing content and notifications",
    "30 days of post-launch fixes at no additional cost",
  ],
  stack: [
    { group: "App", items: "React Native, Expo, TypeScript, React Navigation" },
    { group: "Local data", items: "SQLite, MMKV, offline sync queues" },
    { group: "Backend", items: "NestJS, PostgreSQL, Redis, push infrastructure" },
    { group: "Delivery", items: "EAS Build, TestFlight, Play Console, Sentry" },
  ],
  pricing: {
    duration: "Fixed price · four to six weeks",
    note: "Mobile runs longer than web because store review is outside anyone's control. One scope covers both platforms; it is not quoted per store.",
  },
  faqs: [
    { q: "Why React Native and not fully native?", a: "For most products the difference is invisible to users and the cost difference is roughly half. If you're building something that genuinely needs native — heavy 3D, complex audio processing, deep platform APIs — we'll tell you, and we'll tell you before you've paid us anything." },
    { q: "Who owns the App Store accounts?", a: "You do. We set them up under your business and work as invited collaborators. If we part ways, your apps and reviews stay exactly where they are." },
    { q: "How long does store review take?", a: "Apple is typically one to three days, Google usually faster. First submissions attract more scrutiny. We build the buffer into the timeline and handle rejections — they're routine, and normally about metadata rather than code." },
    { q: "Can it share a backend with our website?", a: "Yes, and it should. One API serving both means one source of truth and one place to fix things. If you already have a web app we'll build against that rather than duplicating it." },
    { q: "What about updates after launch?", a: "Most changes ship over the air within minutes, skipping review entirely. Anything touching native modules needs a store release. We'll show your team how to do both." },
    { q: "Do you do app design too?", a: "Yes. Interface design is included in the price — we don't quote a separate design phase and then a separate build phase for the same product." },
  ],
  related: [
    { href: "/services/web-applications", label: "Web Applications", blurb: "The admin side and customer portal, sharing one backend with the app." },
    { href: "/services/ai-integration", label: "AI Integration", blurb: "In-app assistants, scanning, and document capture from the camera." },
    { href: "/services/search-visibility", label: "Search Visibility", blurb: "App store optimisation and getting found before the download." },
  ],  schema: { path: "/services/mobile-solutions" },
  closing: {
    title: "What would your customers do on their phone?",
    body: "Tell us what your customers are currently doing badly on a mobile browser, or not doing at all. We'll come back with a scope, a number and a store-submission date.",
  },
}

export default function MobileSolutionsPage() {
  return <ServicePage c={config} />
}
