import { Metadata } from "next"
import {
  RefreshCw, FileSearch, Split, Route, ArrowUpCircle, GitCompare,
  Undo2, ServerCog,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Legacy Modernisation",
  description:
    "Replacing legacy systems in pieces: strangler routing, parallel running, automated output comparison and a rollback that has actually been rehearsed.",
  alternates: { canonical: "/services/legacy-modernisation" },
}

const config: ServiceConfig = {
  slug: "legacy-modernisation",
  eyebrow: "Legacy Modernisation",
  icon: RefreshCw,
  title: "Replace the old system without a bad weekend.",
  lede:
    "Functionality moves across one piece at a time, with both systems running and their outputs compared automatically, until switching the old one off is uneventful rather than frightening.",
  facts: [
    ["In phases", "each one delivers something usable"],
    ["Per phase", "each one usable on its own"],
    ["Rehearsed", "every cutover, on a copy first"],
  ],
  forWho: [
    {
      title: "Nobody will touch it",
      body: "It works, and every engineer who has opened it concluded it was somebody else's problem. The risk has been compounding quietly for years.",
    },
    {
      title: "It runs on something unsupported",
      body: "A framework past end of life, a database nobody patches, or a server under a desk. Eventually an insurer, an auditor or a customer asks about it.",
    },
    {
      title: "The rewrite already failed once",
      body: "A team tried a clean rebuild, ran out of runway around sixty per cent, and now you are maintaining two systems instead of one.",
    },
  ],
  capabilities: [
    {
      icon: FileSearch,
      title: "Legacy assessment",
      body: "Reading the old system properly and reporting what it does, what it costs to keep, and what is genuinely risky about changing it.",
    },
    {
      icon: Route,
      title: "Strangler routing",
      body: "A layer in front that decides, per request, whether the old or new system answers. Every move across is independently reversible.",
    },
    {
      icon: Split,
      title: "Monolith decomposition",
      body: "Splitting along the seams that already exist in the code, rather than along an architecture diagram somebody drew in a workshop.",
    },
    {
      icon: ServerCog,
      title: "Re-platforming",
      body: "Off on-premises or an ageing host onto managed infrastructure, with region and compliance constraints designed in rather than retrofitted.",
    },
    {
      icon: ArrowUpCircle,
      title: "Framework upgrades",
      body: "Through several major versions in controlled steps, with the test suite proving each one before the next begins.",
    },
    {
      icon: GitCompare,
      title: "Parallel running",
      body: "Both systems live, outputs compared automatically, until the numbers agree for long enough that the decision makes itself.",
    },
    {
      icon: Undo2,
      title: "Rehearsed cutover",
      body: "A runbook, a rollback path and a written decision about who calls it off and on what signal. All tested before the day.",
    },
    {
      icon: RefreshCw,
      title: "Data migration",
      body: "History moved in a rehearsed run with verified counts on both sides, and a down-migration written at the same time as the up.",
    },
  ],
  process: [
    { phase: "Phase 0", label: "Assess", body: "Two to three weeks reading the system, tracing live traffic and documenting actual behaviour, including the bugs people have built processes around. You get the document whether or not you continue." },
    { phase: "Phase 1", label: "Route", body: "The strangler layer goes in front with everything still served by the old system. Nothing changes for users, and the mechanism for moving pieces now exists." },
    { phase: "Phase 2", label: "Move", body: "The first slice moves across, running in parallel with automated comparison. Once it agrees for long enough, traffic shifts. Then the next slice." },
    { phase: "Phase n", label: "Retire", body: "The old system stops receiving traffic, runs cold for an agreed period, and is switched off. Data archived according to the retention rules agreed up front." },
  ],
  deliverables: [
    "A written assessment of the existing system and its real risks",
    "A routing layer that makes future moves reversible",
    "Each phase delivering working software, not a promise about the end",
    "Automated output comparison between old and new",
    "Rehearsed cutover runbooks with a tested rollback",
    "Documented behaviour of the legacy system, which you keep",
    "30 days of post-phase fixes at no additional cost",
  ],
  stack: [
    { group: "Assessment", items: "Static analysis, dependency and licence audit, traffic mapping" },
    { group: "Routing", items: "Strangler proxies, feature flags, dual writes" },
    { group: "Targets", items: "Node.js, PostgreSQL, containers, managed cloud" },
    { group: "Verification", items: "Output comparison, reconciliation, staged rollout" },
  ],
  pricing: {
    duration: "Fixed price per phase",
    note: "Quoted per phase rather than for the whole programme, because an honest total before the assessment would be a guess. The assessment is priced separately and small, and you can stop after it with the document in hand.",
  },
  faqs: [
    { q: "How long does the whole thing take?", a: "Longer than a rewrite looks on paper and far more likely to finish. Phases across months, each delivering something usable. Anyone quoting a confident total before reading the system is guessing." },
    { q: "Can we keep shipping features during it?", a: "Yes, and usually you must. That is the main argument for the incremental approach, because a six-month feature freeze is rarely survivable commercially." },
    { q: "What if the old code has no documentation?", a: "That is the normal case. Phase 0 reads it, traces the traffic and documents behaviour. That document is valuable to you even if you stop there." },
    { q: "Is a full rewrite ever right?", a: "Occasionally, for small systems or where the business domain genuinely changed underneath. We will say when that is the case rather than defaulting to the longer engagement." },
    { q: "What happens to our data?", a: "Migrated in rehearsed runs with verified counts on both sides and a tested rollback. The real run is a repeat of something that already worked on a copy." },
    { q: "Who decides when to switch off the old system?", a: "You do, on evidence. Parallel running with automated comparison means the decision is made against agreement rates rather than against anyone's confidence." },
  ],
  related: [
    { href: "/services/cloud-and-devops", label: "Cloud & DevOps", blurb: "The infrastructure the new system lands on, defined in code." },
    { href: "/services/systems-integration", label: "Systems Integration", blurb: "Keeping the old and new systems in step while both are live." },
    { href: "/services/product-discovery", label: "Product Discovery", blurb: "The assessment, if you want the read before committing." },
  ],
  schema: { path: "/services/legacy-modernisation" },
  closing: {
    title: "Tell us about the system nobody wants to touch.",
    body: "What it does, roughly how old it is, and what would happen if it stopped. The assessment comes first, and the document is yours either way.",
  },
}

export default function LegacyModernisationPage() {
  return <ServicePage c={config} />
}
