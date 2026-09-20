import { Metadata } from "next"
import {
  Users, UserCheck, GitPullRequest, Compass, Layers, BookOpen,
  CalendarClock, LogOut,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Dedicated Teams",
  description:
    "Embedded engineers working in your repository, on your board and to your standards. Named people, monthly rolling, with knowledge transfer and handover built in.",
  alternates: { canonical: "/services/dedicated-teams" },
}

const config: ServiceConfig = {
  slug: "dedicated-teams",
  eyebrow: "Dedicated Teams",
  icon: Users,
  title: "Engineers who join your team, not a black box.",
  lede:
    "For when you need capacity rather than a project. Named engineers in your repository, at your standups, working your backlog to your standards, with a defined start and a planned end.",
  facts: [
    ["Monthly", "rolling, 30 days' notice"],
    ["Named people", "the same throughout"],
    ["Monthly", "rolling, 30 days' notice"],
  ],
  forWho: [
    {
      title: "You are hiring and it is taking months",
      body: "The role has been open a quarter, the roadmap keeps slipping, and hiring urgently is reliably how companies end up hiring badly.",
    },
    {
      title: "One senior engineer is the bottleneck",
      body: "Every review and every decision routes through one person. They are exhausted and the queue behind them keeps getting longer.",
    },
    {
      title: "A deadline needs more hands, briefly",
      body: "A three-month push does not justify a permanent hire, and contractors who arrive cold take six weeks to become genuinely useful.",
    },
  ],
  capabilities: [
    {
      icon: UserCheck,
      title: "Dedicated engineers",
      body: "One or more engineers assigned to you and working your backlog, rather than rotating through a pool shared between several clients.",
    },
    {
      icon: Layers,
      title: "Squad augmentation",
      body: "A small team alongside yours for a defined push, with a lead who owns coordination instead of leaving it as your problem.",
    },
    {
      icon: Compass,
      title: "Fractional leadership",
      body: "Architecture decisions, hiring input and technical direction at the days per month you need, rather than at a full-time salary.",
    },
    {
      icon: GitPullRequest,
      title: "Code review",
      body: "An experienced second opinion on every pull request, for teams who are capable but currently light on senior review capacity.",
    },
    {
      icon: CalendarClock,
      title: "Overflow delivery",
      body: "Taking the work that keeps sliding down the board, so your own team stays on the things only they can do.",
    },
    {
      icon: BookOpen,
      title: "Knowledge transfer",
      body: "Pairing and documentation inside the engagement, so capability stays in the building rather than leaving when we do.",
    },
    {
      icon: LogOut,
      title: "Planned exit",
      body: "A written handover and a notice period, because the end of an engagement should be scheduled rather than abrupt.",
    },
    {
      icon: Users,
      title: "Your ways of working",
      body: "Your repository, your board, your ceremonies, your definition of done. An engineer who imports a different process adds friction, not capacity.",
    },
  ],
  process: [
    { phase: "Week 0", label: "Match", body: "We propose specific named people with their actual background, and you interview them. If they are not right, you get different ones before anything starts." },
    { phase: "Week 1", label: "Ramp", body: "Access, environment, codebase walkthrough and the first small piece of real work shipped. We aim for a merged pull request inside the first week." },
    { phase: "Ongoing", label: "Deliver", body: "Working your board at your ceremonies, with a written weekly update visible in your own tools rather than sent as a separate report." },
    { phase: "Exit", label: "Hand over", body: "Notice period, a written handover, documentation current, and pairing time so nothing leaves with us." },
  ],
  deliverables: [
    "Named engineers you interviewed before they started",
    "Work in your repository, on your board, to your standards",
    "A written weekly update in your own tools",
    "Pairing and documentation as part of the engagement",
    "A replacement at our cost if someone is not working out",
    "Written handover and 30 days' notice on exit",
  ],
  stack: [
    { group: "Ways of working", items: "Your board, your ceremonies, your definition of done" },
    { group: "Review", items: "Pull request review, architecture input, pairing" },
    { group: "Common stacks", items: "React, Next.js, TypeScript, Node.js, PostgreSQL, React Native" },
    { group: "Exit", items: "Notice period, written handover, documentation" },
  ],
  pricing: {
    duration: "Per engineer · rolling monthly",
    note: "What moves it is experience level and whether you need a lead who takes coordination off your plate. Fractional technical leadership is priced by days per month rather than as a full-time placement.",
  },
  faqs: [
    { q: "How is this different from a staffing agency?", a: "We are responsible for the work, not only for supplying a person. If an engineer is not working out, replacing them is our problem and our cost rather than a fresh search for you." },
    { q: "What is the minimum commitment?", a: "A month, rolling. Anything shorter and the ramp-up consumes most of the value for both sides, which serves nobody well." },
    { q: "Will they work our hours?", a: "We are based in Orlando, so overlap with United States business hours is the normal case rather than something that has to be negotiated around." },
    { q: "Who owns the code they write?", a: "You do, on the same terms as your own employees. It is your repository and your intellectual property from the first commit." },
    { q: "Can this turn into a fixed-price project?", a: "Often it does, in both directions. The commercial model can change without changing the people, which is usually the point of starting this way." },
  ],
  related: [
    { href: "/services/product-discovery", label: "Product Discovery", blurb: "Working out what the team should build before they start." },
    { href: "/services/managed-support", label: "Managed Support", blurb: "When the need is maintenance rather than continuous delivery." },
    { href: "/services/web-applications", label: "Web Applications", blurb: "The fixed-price alternative, when the scope is knowable." },
  ],
  schema: { path: "/services/dedicated-teams" },
  closing: {
    title: "Tell us what your team is short of.",
    body: "The skills, the seniority and roughly how long you need them. We'll come back within one business day with named people and a number.",
  },
}

export default function DedicatedTeamsPage() {
  return <ServicePage c={config} />
}
