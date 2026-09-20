import { Metadata } from "next"
import {
  Compass, Eye, FileSignature, ListOrdered, Scale, FileSearch,
  Calculator, Handshake,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Product Discovery",
  description:
    "Discovery, a written specification and a fixed-price quote before any build. Technical due diligence, roadmapping and build-versus-buy analysis you keep either way.",
  alternates: { canonical: "/services/product-discovery" },
}

const config: ServiceConfig = {
  slug: "product-discovery",
  eyebrow: "Product Discovery",
  icon: Compass,
  title: "The cheapest week is the one before the build.",
  lede:
    "A written specification, a fixed-price quote and a delivery date. Or an honest assessment that you should buy something instead, change a process, or not build it at all. You keep the document either way.",
  facts: [
    ["1 – 2 weeks", "start to signed spec"],
    ["Fixed price", "the spec is yours either way"],
    ["Yours to keep", "take it to anyone"],
  ],
  forWho: [
    {
      title: "Everyone describes it differently",
      body: "Ask three people what the system should do and you get three answers. Building before resolving that is exactly how scope creep starts.",
    },
    {
      title: "Your quotes vary by four times",
      body: "Because each firm quietly guessed at a different project. A written specification is what makes quotes comparable to one another.",
    },
    {
      title: "You are about to acquire software",
      body: "And you need somebody technical to read the codebase before the price is agreed, rather than during the first month afterwards.",
    },
  ],
  capabilities: [
    {
      icon: Eye,
      title: "Discovery",
      body: "Sitting with the people who do the work today and watching the process, because what people describe and what they perform are different.",
    },
    {
      icon: FileSignature,
      title: "Written specification",
      body: "Screens, rules, edge cases, and what is explicitly out of scope. The out-of-scope list is the sentence that prevents the week-three argument.",
    },
    {
      icon: Calculator,
      title: "Fixed-price quote",
      body: "A number and a date quoted against the spec, which does not move after you sign it. Comparable against any other firm's quote.",
    },
    {
      icon: FileSearch,
      title: "Technical due diligence",
      body: "Reading an existing codebase, or one you are acquiring, with a plain assessment of risk, licence exposure and key-person dependency.",
    },
    {
      icon: ListOrdered,
      title: "Roadmapping",
      body: "Sequenced by dependency and value, so the thing unblocking everything else is not accidentally scheduled for month five.",
    },
    {
      icon: Scale,
      title: "Build versus buy",
      body: "Honest analysis of where existing software is already enough. Sometimes the conclusion is that you do not need us for this part.",
    },
    {
      icon: Handshake,
      title: "Platform selection",
      body: "Choosing a processor, a cloud or an auth provider against your constraints rather than against what is currently fashionable.",
    },
    {
      icon: Compass,
      title: "Feasibility",
      body: "What is genuinely achievable in four weeks, what needs twelve, and which part of the idea is carrying most of the risk.",
    },
  ],
  process: [
    { phase: "Day 1 – 2", label: "Watch", body: "Time with the people who do the work now. Screen recordings, the spreadsheet they actually use, and the workaround nobody mentions in meetings." },
    { phase: "Day 3 – 5", label: "Draft", body: "Screens, data model, rules and edge cases written down, with the out-of-scope list drawn up alongside it." },
    { phase: "Day 6 – 8", label: "Challenge", body: "We walk the draft through with your team and try to break it. Cheaper to find a wrong assumption here than in week three of a build." },
    { phase: "Day 9 – 10", label: "Quote", body: "Final specification, a fixed price, a delivery date and a phased plan if it is bigger than one engagement. Signed, or not, with no pressure either way." },
  ],
  deliverables: [
    "A written specification: screens, rules, edge cases, exclusions",
    "A fixed-price quote and delivery date against that spec",
    "A dependency-ordered roadmap where it spans phases",
    "Build-versus-buy analysis where existing software would do",
    "A technical risk assessment of anything you already run",
    "The whole document is yours, whoever ends up building it",
    "Deducted from the project price if you proceed with us",
  ],
  stack: [
    { group: "Discovery", items: "Process observation, stakeholder interviews, workflow mapping" },
    { group: "Output", items: "Written specification, fixed-price quote, delivery schedule" },
    { group: "Assessment", items: "Codebase review, dependency and licence audit" },
    { group: "Planning", items: "Dependency-ordered roadmap, milestone definition" },
  ],
  pricing: {
    duration: "Fixed price · one to two weeks",
    note: "If you proceed with the build, this comes off the project price, so choosing to scope properly costs you nothing. If you do not proceed, you keep the specification and can take it to any firm you like.",
  },
  faqs: [
    { q: "Is this just a sales process with an invoice attached?", a: "No, and the deliverable is the proof: you keep the specification whatever you decide, including if you take it to a competitor. A sales process does not hand you something useful when you say no." },
    { q: "What if the spec says it is bigger than we thought?", a: "Then you found out in week one for the cost of a week, instead of in month three for the cost of a project. That is the entire reason for doing it first." },
    { q: "Do we have to build it with you afterwards?", a: "No. The quote is an offer, not an obligation, and roughly the same document would let another firm quote against it accurately." },
    { q: "Can you assess a company we are acquiring?", a: "Yes. Codebase review, dependency and licence audit, key-person risk, and a plain assessment of what the technical debt would cost to clear after the deal closes." },
    { q: "Do you write roadmaps for internal teams?", a: "Yes, including where the recommendation turns out to be that your own team builds it. We are not obliged to be the answer to our own assessment." },
    { q: "What if you conclude we should not build it?", a: "You get told that, with the reasoning and the alternative. It costs us a project and it is the right answer, which is what makes the recommendation worth paying for." },
  ],
  related: [
    { href: "/services/web-applications", label: "Web Applications", blurb: "The most common build that follows a discovery." },
    { href: "/services/legacy-modernisation", label: "Legacy Modernisation", blurb: "When discovery concludes the existing system has to go." },
    { href: "/services/dedicated-teams", label: "Dedicated Teams", blurb: "When your own team will build it and needs capacity." },
  ],
  schema: { path: "/services/product-discovery" },
  closing: {
    title: "Tell us the problem, not the solution.",
    body: "Describe what is going wrong today rather than the software you think you need. You leave the first call knowing whether it is worth building at all.",
  },
}

export default function ProductDiscoveryPage() {
  return <ServicePage c={config} />
}
