import { Metadata } from "next"
import {
  Cloud, FileCode2, GitBranch, Container, Activity, BellRing,
  Undo2, DollarSign,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Cloud & DevOps",
  description:
    "Infrastructure as code on AWS, Vercel and Cloudflare. CI/CD on every commit, observability, alerting tied to user impact, rehearsed rollback and cost tuning.",
  alternates: { canonical: "/services/cloud-and-devops" },
}

const config: ServiceConfig = {
  slug: "cloud-and-devops",
  eyebrow: "Cloud & DevOps",
  icon: Cloud,
  title: "Deploys that are boring on purpose.",
  lede:
    "Infrastructure defined in a repository you own, a pipeline that runs on every commit, and alerting that reaches you before a customer does. Shipping should be a Tuesday, not an event.",
  facts: [
    ["2 – 4 weeks", "scope to handover"],
    ["Fixed price", "against a written scope"],
    ["One command", "rollback, already rehearsed"],
  ],
  forWho: [
    {
      title: "Deploying is an event",
      body: "It happens on a Friday afternoon, somebody stays late for it, and everyone holds their breath. That fear is accurate information about the setup.",
    },
    {
      title: "You find out from a customer",
      body: "The first sign of an outage is an email. Either there is no alerting, or there is and it fires so often that nobody reads it any more.",
    },
    {
      title: "The bill grew and nobody knows why",
      body: "It went up forty per cent across two quarters and no one in the company can point at the line responsible for it.",
    },
  ],
  capabilities: [
    {
      icon: FileCode2,
      title: "Infrastructure as code",
      body: "Environments defined in a repository you own, so staging and production cannot quietly diverge over the course of a year.",
    },
    {
      icon: GitBranch,
      title: "CI/CD pipelines",
      body: "Typecheck, tests, build and deploy on every commit, with a red pipeline blocking the merge rather than merely embarrassing somebody.",
    },
    {
      icon: Container,
      title: "Containers & runtime",
      body: "Docker where it earns its keep and orchestration only when the workload genuinely needs it, rather than because it looks serious.",
    },
    {
      icon: Activity,
      title: "Observability",
      body: "Structured logs, traces and dashboards that answer “is it slow, and where” without anybody having to open a debugger.",
    },
    {
      icon: BellRing,
      title: "Alerting & runbooks",
      body: "Alerts tied to what a user is experiencing, routed to a named person, each with a runbook attached to it.",
    },
    {
      icon: Undo2,
      title: "Rehearsed rollback",
      body: "A rollback path that has actually been run during the engagement, so it works during an incident rather than being a hope.",
    },
    {
      icon: DollarSign,
      title: "Cost tuning",
      body: "Reading the bill line by line and fixing the three things generating most of it, which is rarely the three things people assume.",
    },
    {
      icon: Cloud,
      title: "Environment parity",
      body: "Preview, staging and production built from the same definitions, so a bug can never be explained away as an environment difference.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Audit", body: "What is running, where, and who configured it. A written inventory including the parts that exist only as console clicks nobody recorded." },
    { phase: "Week 2", label: "Codify", body: "Infrastructure moved into code in your repository, with preview environments working. Friday demo deploying a change end to end." },
    { phase: "Week 3", label: "Observe", body: "Logging, tracing, dashboards and alerting tied to user-visible symptoms, each alert with a runbook. Rollback tested for real." },
    { phase: "Week 4", label: "Hand over", body: "A walkthrough with your team, runbooks reviewed together, and a cost pass with the top items prioritised." },
  ],
  deliverables: [
    "Infrastructure defined in code, in your own repository",
    "CI/CD running on every commit, gating the merge",
    "Preview environments per pull request",
    "Dashboards, structured logging and distributed tracing",
    "Alerting on user impact, with a runbook per alert",
    "A rollback path tested during the engagement",
    "A cost report with the largest items named and prioritised",
  ],
  stack: [
    { group: "Hosting", items: "AWS, Vercel, Cloudflare, Fly.io" },
    { group: "Infrastructure", items: "Terraform, SST, Docker, Kubernetes" },
    { group: "CI/CD", items: "GitHub Actions, preview environments" },
    { group: "Observability", items: "OpenTelemetry, Sentry, structured logging" },
  ],
  pricing: {
    duration: "Fixed price · two to four weeks",
    note: "Mostly a function of how many services and environments exist, and how much of the current setup lives only in somebody's console history. Week one establishes that, and the quote is fixed against the audit.",
  },
  faqs: [
    { q: "Do we have to move cloud provider?", a: "No. If you are on AWS and your team knows AWS, staying there is worth more than any efficiency we would gain by moving you somewhere we happen to prefer." },
    { q: "Can you set it up and hand it over?", a: "Yes, and that is the default. Infrastructure code, runbooks and a walkthrough are deliverables. Plenty of clients run it in-house afterwards, which is a perfectly good outcome." },
    { q: "What about rules on where data lives?", a: "Region pinning is a week-one configuration decision. Tell us the constraint and it is designed in rather than retrofitted after somebody in legal asks about it." },
    { q: "How do you handle secrets?", a: "In your secret manager, never in the repository, with scoped credentials that are handed back at the end of the engagement." },
    { q: "Will this cause downtime?", a: "Codifying existing infrastructure is done alongside what is running, and cutover happens behind a rollback you have already seen work. Any window is agreed in advance, in writing." },
    { q: "Is the cost saving guaranteed?", a: "No, and be sceptical of anyone who guarantees one. We report what the bill is going to, fix the largest items and show you the before and after." },
  ],
  related: [
    { href: "/services/managed-support", label: "Managed Support", blurb: "Keeping it patched and monitored once it is running." },
    { href: "/services/legacy-modernisation", label: "Legacy Modernisation", blurb: "When what is running also needs replacing, not only codifying." },
    { href: "/services/web-applications", label: "Web Applications", blurb: "The software that lands on the infrastructure." },
  ],
  schema: { path: "/services/cloud-and-devops" },
  closing: {
    title: "Tell us what deploying looks like today.",
    body: "Who does it, how long it takes, and what happens when it goes wrong. One call is usually enough to establish where the largest problem sits.",
  },
}

export default function CloudAndDevOpsPage() {
  return <ServicePage c={config} />
}
