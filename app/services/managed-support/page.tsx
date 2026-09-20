import { Metadata } from "next"
import {
  LifeBuoy, Activity, PackageCheck, ShieldCheck, Wrench, FileText,
  Gauge, MessageSquare,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Managed Support",
  description:
    "Support and maintenance retainers with named engineers, monitoring and incident response, monthly dependency and security patching, and documentation kept current.",
  alternates: { canonical: "/services/managed-support" },
}

const config: ServiceConfig = {
  slug: "managed-support",
  eyebrow: "Managed Support",
  icon: LifeBuoy,
  title: "The part after launch, that decides whether it lasted.",
  lede:
    "Monitoring, monthly patching, incident response and a steady pace of small improvements, handled by the engineers who wrote the code. Software nobody maintains does not stay working, it fails later and more expensively.",
  facts: [
    ["Monthly", "rolling, 30 days' notice"],
    ["Named engineers", "the people who built it"],
    ["30 days", "notice, both directions"],
  ],
  forWho: [
    {
      title: "The people who built it have gone",
      body: "The agency moved on or the developer left, and nobody currently at the company has ever opened the repository.",
    },
    {
      title: "Updates have been deferred for a year",
      body: "Every month it gets harder to start. At some point a security advisory makes the decision for you, usually at an inconvenient moment.",
    },
    {
      title: "Nobody knows if it is working right now",
      body: "There is no monitoring, so the honest answer is whoever most recently tried to log in and did not complain about it.",
    },
  ],
  capabilities: [
    {
      icon: MessageSquare,
      title: "Support hours",
      body: "A defined number of hours each month with a response commitment tiered by severity, handled by engineers who already know the codebase.",
    },
    {
      icon: Activity,
      title: "Monitoring & response",
      body: "Alerts routed to a person, runbooks for the failures we already know about, and a written note afterwards about what actually happened.",
    },
    {
      icon: PackageCheck,
      title: "Dependency updates",
      body: "Patches applied monthly rather than accumulated into one frightening upgrade nobody wants to be the person to start.",
    },
    {
      icon: ShieldCheck,
      title: "Security patching",
      body: "Advisories tracked against your real dependency tree, with anything urgent applied out of cycle rather than waiting for the monthly slot.",
    },
    {
      icon: Wrench,
      title: "Iterative delivery",
      body: "A small, steady stream of improvements. The alternative is a rewrite in three years, which costs more and feels considerably worse.",
    },
    {
      icon: Gauge,
      title: "Quarterly review",
      body: "What got slower, what the cloud bill is doing, and what we propose to do about both, costed and prioritised.",
    },
    {
      icon: FileText,
      title: "Living documentation",
      body: "Architecture notes and runbooks kept current, so leaving stays a normal option rather than becoming a negotiation.",
    },
    {
      icon: LifeBuoy,
      title: "Incident write-ups",
      body: "What broke, why, and what changed as a result. Short, honest and sent to you, because incidents nobody documents tend to recur.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Onboard", body: "For software we did not build, a paid audit first: we read the code and tell you honestly whether it is maintainable or whether a retainer would fund a slow rewrite." },
    { phase: "Month 1", label: "Instrument", body: "Monitoring, alerting and runbooks in place, plus the first dependency pass. Most retainers start by discovering what was never being watched." },
    { phase: "Monthly", label: "Maintain", body: "Patching, advisories, agreed improvement work and a written report. A shared channel for anything that cannot wait for the cycle." },
    { phase: "Quarterly", label: "Review", body: "Performance, cost and risk reviewed together, with next quarter's priorities agreed rather than assumed." },
  ],
  deliverables: [
    "A named engineer who knows your system, not a ticket queue",
    "Monitoring and alerting with a runbook per alert",
    "Monthly dependency and security patching",
    "A written monthly report in plain sentences",
    "Incident write-ups within two business days",
    "Documentation kept current throughout",
    "Handover on exit, written into the agreement from the start",
  ],
  stack: [
    { group: "Monitoring", items: "Sentry, uptime checks, OpenTelemetry" },
    { group: "Updates", items: "Dependabot, scheduled review, staged rollout" },
    { group: "Communication", items: "Shared channel, monthly written report" },
    { group: "Access", items: "Scoped credentials in your secret manager" },
  ],
  pricing: {
    duration: "Rolling monthly · 30 days' notice",
    note: "Driven by hours and response commitment. The lighter end is monitoring, patching and a few hours of change work; the heavier end is same-business-day response and continuous delivery of improvements.",
  },
  faqs: [
    { q: "Do we have to take a retainer after launch?", a: "No. Thirty days of fixes are included with every build, and plenty of clients take handover and run it themselves. The documentation and walkthrough are delivered either way." },
    { q: "What is the response time?", a: "Tiered by severity and written into the agreement. Something down in production is not the same as a layout issue on a settings page, and the contract says so explicitly." },
    { q: "Can you maintain software you did not build?", a: "Often, after a paid audit. We read the code first and tell you honestly whether it is maintainable. Sometimes the answer is that a retainer would be funding a slow rewrite, and you should hear that up front." },
    { q: "Do unused hours roll over?", a: "One month, so a quiet period is not wasted and a busy one is not penalised. Beyond that they lapse, because banking six months of hours is how a retainer turns into an unplanned project." },
    { q: "What if we want to leave?", a: "Thirty days' notice, a handover session, current documentation and credentials transferred. Written in from the start rather than negotiated at the end." },
    { q: "Who actually does the work?", a: "The engineers who built it, or for inherited systems the ones who did the audit. Context is most of what makes a fix fast, and rotating the work throws that away." },
  ],
  related: [
    { href: "/services/cloud-and-devops", label: "Cloud & DevOps", blurb: "Putting the monitoring and pipelines in before the retainer starts." },
    { href: "/services/dedicated-teams", label: "Dedicated Teams", blurb: "When you need continuous capacity rather than maintenance." },
    { href: "/services/web-applications", label: "Web Applications", blurb: "The build that most retainers follow on from." },
  ],
  schema: { path: "/services/managed-support" },
  closing: {
    title: "Tell us what you need kept running.",
    body: "What it does, who built it, and what would hurt most if it stopped. For anything we did not build, the first step is a paid audit rather than a promise.",
  },
}

export default function ManagedSupportPage() {
  return <ServicePage c={config} />
}
