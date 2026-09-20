import { Metadata } from "next"
import {
  Code, Gauge, Radio, ShieldCheck, Smartphone, Cpu, LayoutDashboard,
  GitPullRequest, Users,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Web Application Development",
  description:
    "Custom web applications built in four weeks for a fixed price. Customer portals, dashboards, booking systems and internal tools — React, Next.js, PostgreSQL.",
  alternates: { canonical: "/services/web-applications" },
}

const config: ServiceConfig = {
  slug: "web-applications",
  eyebrow: "Web Applications",
  icon: Code,
  title: "The software your business runs on, in a browser.",
  lede:
    "Customer portals, operational dashboards, booking systems, internal tools. The things a spreadsheet used to do until it stopped coping. Scoped in a week, built in three, live in four.",
  facts: [
    ["4 weeks", "scope to live"],
    ["Fixed price", "against a written scope"],
    ["Week 2", "first working demo"],
  ],
  forWho: [
    {
      title: "A spreadsheet is running something important",
      body: "It started as a quick tracker and now three people depend on it, it breaks when two of them edit at once, and nobody is sure which copy is current.",
    },
    {
      title: "Your systems don't talk to each other",
      body: "Data gets re-keyed between tools every day. Someone's evening job is copying numbers from one screen into another, and the numbers still disagree.",
    },
    {
      title: "Off-the-shelf nearly fits",
      body: "You've tried the SaaS products. Each does eighty per cent and forces you to change how you work for the other twenty. The twenty is the part that makes you money.",
    },
  ],
  capabilities: [
    {
      icon: LayoutDashboard,
      title: "Portals & dashboards",
      body: "Customer-facing portals and internal operational views. Role-scoped, so each person sees exactly what they should and nothing they shouldn't.",
    },
    {
      icon: Radio,
      title: "Real-time features",
      body: "Live updates, collaborative editing, presence, instant notifications. Built on WebSockets and server-sent events rather than polling every few seconds.",
    },
    {
      icon: GitPullRequest,
      title: "API & integration layers",
      body: "REST and GraphQL APIs, webhook handling, and the orchestration that makes several third-party services behave as one coherent system.",
    },
    {
      icon: ShieldCheck,
      title: "Auth, roles & audit",
      body: "Authentication, granular permissions, SSO where you need it, and audit logging so you can answer who changed what, and when.",
    },
    {
      icon: Gauge,
      title: "Performance & scale",
      body: "Server-side rendering, sensible caching, query optimisation and background job processing. Fast on day one and still fast at ten times the data.",
    },
    {
      icon: Smartphone,
      title: "Responsive & offline",
      body: "Works properly on a phone in a stockroom, not just on a desk. Progressive web apps where installability and offline access genuinely matter.",
    },
    {
      icon: Cpu,
      title: "AI where it earns its place",
      body: "Search that understands intent, document extraction, assistants grounded in your own data. Added because it removes work, not because it demos well.",
    },
    {
      icon: Users,
      title: "Multi-tenancy",
      body: "One system, many organisations, clean separation between them. Already solved on the Sill platform rather than invented for your project.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Scope", body: "Access to your systems, a walkthrough of how the work happens today, and a written specification you sign off. No code until you've agreed what it is." },
    { phase: "Week 2", label: "Build", body: "Core data model, authentication, and the primary workflow. Friday demo on your real data — something you can click, not a progress bar." },
    { phase: "Week 3", label: "Build", body: "Reporting, permissions, integrations and the edge cases that only surface once you've used it. Second Friday demo." },
    { phase: "Week 4", label: "Ship", body: "Deployment, monitoring, migration of existing data, training for your team, and documentation written for people rather than engineers." },
  ],
  deliverables: [
    "A live, deployed application on your infrastructure or ours",
    "Source code in a repository you own from the first commit",
    "Written technical specification, signed off before build",
    "Admin interface so you can manage it without calling us",
    "Two training sessions with your team, recorded",
    "Plain-language documentation, not auto-generated API dumps",
    "30 days of post-launch fixes at no additional cost",
  ],
  stack: [
    { group: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS" },
    { group: "Backend", items: "Node.js, NestJS, REST & GraphQL, Prisma" },
    { group: "Data", items: "PostgreSQL, Redis, BullMQ job queues" },
    { group: "Infrastructure", items: "AWS, Vercel, Docker, CI/CD pipelines" },
  ],
  pricing: {
    duration: "Fixed price · four weeks",
    note: "What moves the number is how many integrations are involved and whether existing data needs migrating. Quoted against a written spec, and it does not move after you sign.",
  },
  faqs: [
    { q: "What if my project is bigger than four weeks?", a: "Some genuinely are. We'll say so on the first call and quote what it actually is, usually as two phases with something useful live at the end of the first. What we won't do is quote four weeks and discover the truth in month two." },
    { q: "Do I own the code?", a: "Yes, and from the first commit rather than at handover. The repository is created under your account with us as collaborators. If you walk away mid-project, you keep everything built so far." },
    { q: "Can you work with our existing system?", a: "Usually. We spend week one understanding what's there. Sometimes the honest answer is that a rebuild costs less than the integration — if that's the case we'll show you the arithmetic rather than just asserting it." },
    { q: "What happens after launch?", a: "Thirty days of fixes are included. After that most clients move to a monthly support retainer, but there is no obligation — plenty of people take the code and run it themselves." },
    { q: "Who actually builds it?", a: "The engineer who scoped it on your first call. No handoff to a different team, no junior inheriting the project in week three." },
    { q: "What do you need from us?", a: "About three hours a week: a Friday demo and a handful of decisions. Plus system access and one named person who can answer questions without convening a committee." },
  ],
  related: [
    { href: "/services/ai-integration", label: "AI Integration", blurb: "Add assistants, document processing and automation to what we build." },
    { href: "/services/mobile-solutions", label: "Mobile Apps", blurb: "The same product in your customers' pockets, sharing one backend." },
    { href: "/services/search-visibility", label: "Search Visibility", blurb: "Getting the thing we built actually found by the people who need it." },
  ],  schema: { path: "/services/web-applications" },
  closing: {
    title: "Tell us what your spreadsheet is doing.",
    body: "Describe the process that's outgrown its current tool. We'll come back within one business day with a scope, a number and a date.",
  },
}

export default function WebApplicationsPage() {
  return <ServicePage c={config} />
}
