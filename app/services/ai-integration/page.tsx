import { Metadata } from "next"
import {
  Brain, MessageSquare, FileScan, Workflow, Search, ShieldCheck,
  BarChart3, Camera,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "AI Integration",
  description:
    "AI added to software that already exists: grounded assistants, document extraction and workflow automation. Scoped and priced before anything is built.",
  alternates: { canonical: "/services/ai-integration" },
}

const config: ServiceConfig = {
  slug: "ai-integration",
  eyebrow: "AI Integration",
  icon: Brain,
  title: "AI in the places it removes real work.",
  lede:
    "Not a chatbot bolted to your homepage. Assistants grounded in your own documents, extraction that ends manual data entry, automation for the process someone currently does by hand every Tuesday.",
  facts: [
    ["2 – 4 weeks", "scope to live"],
    ["Fixed price", "against a written scope"],
    ["Your data", "never used for training"],
  ],
  forWho: [
    {
      title: "Someone retypes documents all day",
      body: "Invoices, delivery notes, forms, receipts. A person converts paper or PDFs into database rows, and the errors they occasionally make cost more than the hour.",
    },
    {
      title: "Your team answers the same questions constantly",
      body: "The answer exists — in a policy document, a manual, a folder somewhere. Finding it takes eleven minutes and interrupting a colleague takes two.",
    },
    {
      title: "You've been sold AI that did nothing",
      body: "A generic chatbot that knew nothing about your business, hallucinated confidently, and got switched off after a month. That experience is common and it is not your fault.",
    },
  ],
  capabilities: [
    {
      icon: MessageSquare,
      title: "Assistants grounded in your data",
      body: "Retrieval-augmented systems that answer from your documents and cite where the answer came from. When it doesn't know, it says so rather than inventing.",
    },
    {
      icon: FileScan,
      title: "Document extraction",
      body: "Invoices, POs, delivery notes, forms. Structured data out of unstructured paper, with a confidence score and a human review step for anything uncertain.",
    },
    {
      icon: Workflow,
      title: "Workflow automation",
      body: "Classification, routing, summarising and triage. The judgement calls that are too fuzzy for rules but too repetitive for a person.",
    },
    {
      icon: Search,
      title: "Semantic search",
      body: "Search that understands what someone meant rather than matching keywords. Works across documents, tickets, products and internal knowledge.",
    },
    {
      icon: Camera,
      title: "Vision & image processing",
      body: "Receipt capture, condition assessment, quality checks, OCR. Anything where a photo currently gets looked at by a person and typed up afterwards.",
    },
    {
      icon: BarChart3,
      title: "Prediction & recommendation",
      body: "Demand forecasting, reorder timing, churn signals, next-best-action. Built on your own history rather than a generic model.",
    },
    {
      icon: ShieldCheck,
      title: "Guardrails & evaluation",
      body: "Test suites over real examples, measured accuracy, fallbacks when confidence is low. You get numbers on how well it works, not a demo and a hope.",
    },
    {
      icon: Brain,
      title: "Model selection & cost control",
      body: "The right model for each task, caching, and routing cheap work to cheap models. AI features that don't quietly become your largest cloud line item.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Scope", body: "We find the process worth automating, gather real examples, and define what 'working' means as a number. If the honest answer is that AI isn't the right tool, you find out here." },
    { phase: "Week 2", label: "Build", body: "The pipeline, grounded in your data, with guardrails. Friday demo running against your real documents — not a curated happy path." },
    { phase: "Week 3", label: "Tune", body: "Evaluation against a held-out test set, accuracy tuning, and the fallback behaviour for cases the model gets wrong or is unsure about." },
    { phase: "Week 4", label: "Ship", body: "Integration into the software your team already uses, monitoring for drift and cost, and training on what the system can and cannot be trusted with." },
  ],
  deliverables: [
    "The feature live inside your existing software, not a separate tool",
    "Source code in a repository you own from the first commit",
    "An evaluation set and measured accuracy figures you can re-run",
    "Defined fallback behaviour for low-confidence cases",
    "Cost monitoring and per-request spend visibility",
    "Training on what to trust it with and what to review",
    "30 days of post-launch tuning at no additional cost",
  ],
  stack: [
    { group: "Models", items: "Claude, GPT, open-weight models where they fit" },
    { group: "Retrieval", items: "pgvector, embeddings, hybrid search, re-ranking" },
    { group: "Orchestration", items: "Structured outputs, tool use, evaluation harnesses" },
    { group: "Infrastructure", items: "NestJS, PostgreSQL, Redis, queued processing" },
  ],
  pricing: {
    duration: "Fixed price · two to four weeks",
    note: "A single extraction pipeline and a full assistant with retrieval are very different jobs, which is why we will not quote one before scoping it. Model usage is billed at cost and shown to you separately.",
  },
  faqs: [
    { q: "Will our data be used to train models?", a: "No. We use enterprise API tiers where inputs are contractually excluded from training, and self-hosted models where the data genuinely cannot leave your infrastructure. This gets written into the contract rather than promised verbally." },
    { q: "What if it gets things wrong?", a: "It will, sometimes — that's why evaluation is a named phase rather than an afterthought. We measure accuracy on a held-out set, set a confidence threshold, and route anything below it to a person. You see the real numbers before launch." },
    { q: "Is this just a ChatGPT wrapper?", a: "For simple cases, using a good model well is most of the work, and pretending otherwise would be dishonest. The engineering is in retrieval, grounding, evaluation and the fallbacks — which is exactly the part generic chatbots skip, and why they get switched off." },
    { q: "What does it cost to run?", a: "It depends almost entirely on volume, and it is usually small next to the build. We show you per-request costs during the build, set a spend alert before launch, and design for cheaper models wherever they perform just as well." },
    { q: "Can you add this to software we already have?", a: "That's most of what we do here. We don't need to have built the original system, though we do need reasonable API access or database access to it." },
    { q: "What if AI isn't the right answer?", a: "We'll say so in week one and you'll have paid for a discovery week rather than a build. Plenty of problems presented to us as AI problems are better solved with a query and a rule." },
  ],
  related: [
    { href: "/services/web-applications", label: "Web Applications", blurb: "The system the AI feature lives inside, if it doesn't exist yet." },
    { href: "/services/mobile-solutions", label: "Mobile Apps", blurb: "Camera capture and on-the-go assistants for people in the field." },
    { href: "/services/search-visibility", label: "Search Visibility", blurb: "The other side of AI — being found by it rather than using it." },
  ],  schema: { path: "/services/ai-integration" },
  closing: {
    title: "What does someone on your team do by hand every week?",
    body: "Describe the repetitive part. We'll tell you honestly whether AI is the right tool for it, and if it is, what it would cost.",
  },
}

export default function AIIntegrationPage() {
  return <ServicePage c={config} />
}
