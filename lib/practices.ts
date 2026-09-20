import type { LucideIcon } from "lucide-react"
import {
  Layers, Brain, Plug, Database, Cloud, Search, PenTool, LifeBuoy,
  CreditCard, ShieldCheck, FlaskConical, Compass,
  BarChart3, Blocks, RefreshCw, Building2, TrendingUp, Cpu, Users,
  GraduationCap,
} from "lucide-react"

/**
 * The twenty practice areas.
 *
 * This file is the single source of truth: the home page grid, the
 * /capabilities index, every /capabilities/<slug> page and the sitemap all
 * read from it. The bullets on the home card are derived from `covers`, so a
 * card can never drift out of sync with the page behind it.
 *
 * Two rules held the content honest, and should keep holding it:
 *
 *   1. Everything listed is evidenced by work already shipped. Depth is what separates a firm from a
 *      freelancer in a buyer's head, but padding it with things we cannot
 *      actually do is how you lose the second meeting.
 *   2. `evidence` never claims a client, a certification or a number we
 *      cannot stand behind. Where a boundary exists (we prepare for an audit,
 *      we do not perform one) the page says so in the buyer's own words.
 */
export type Practice = {
  slug: string
  icon: LucideIcon
  name: string
  /** One line, used on the home grid card and the index. */
  summary: string

  title: string
  lede: string
  metaDescription: string
  facts: [string, string][]
  /** "You probably need this if…" — signals a buyer recognises in themselves. */
  signals: { title: string; body: string }[]
  /** The work itself. Titles double as the bullets on the home card. */
  covers: { title: string; body: string }[]
  /** The opinionated bit. This is what makes a page read like a firm. */
  principles: { title: string; body: string }[]
  stack: { group: string; items: string }[]
  evidence: string[]
  faqs: { q: string; a: string }[]
  /** Sibling practice slugs. */
  related: string[]
}

export const PRACTICES: Practice[] = [
  /* ─────────────────────────────────────────────────────────── 01 */
  {
    slug: "product-engineering",
    icon: Layers,
    name: "Product Engineering",
    summary: "The core build. Web and mobile applications from scoped spec to production.",
    title: "Software that ships, not software that demos.",
    lede: "Web and mobile applications built to a written specification, shown working every Friday, and handed over with the keys. The part of the job that everything else supports.",
    metaDescription:
      "Web and mobile application engineering — React, Next.js, React Native, APIs, real-time and offline-first. Scoped in week one, fixed price, you own the code.",
    facts: [
      ["4 weeks", "typical scope to live"],
      ["Every Friday", "working software, not status"],
      ["Day one", "you own the repository"],
    ],
    signals: [
      {
        title: "Your spreadsheet stopped coping",
        body: "It started as one tab. Now four people edit it, two of them overwrite each other most weeks, and nobody can say which version is correct.",
      },
      {
        title: "The quote you got was three months",
        body: "For something you can describe in two paragraphs. Most of that quote is plumbing you should not be paying to have rebuilt from nothing.",
      },
      {
        title: "You have the design but not the build",
        body: "Figma files, a clear idea, maybe a prototype. What is missing is the team that turns it into something with a login and a database behind it.",
      },
    ],
    covers: [
      {
        title: "Web applications",
        body: "Customer portals, operational dashboards, booking systems and the internal tools that replaced a spreadsheet nobody trusts any more.",
      },
      {
        title: "iOS & Android",
        body: "One React Native codebase shipped to both stores, with native modules written for the places the cross-platform layer runs out.",
      },
      {
        title: "API design",
        body: "REST and GraphQL interfaces designed to be consumed by someone who is not you, and documented well enough that they can be.",
      },
      {
        title: "Real-time features",
        body: "Live dashboards, presence and collaborative editing, plus the reconnect logic that decides whether any of it survives bad hotel wifi.",
      },
      {
        title: "Offline-first",
        body: "Applications that keep working in a stockroom with no signal, and reconcile cleanly when the phone finds the network again.",
      },
      {
        title: "Progressive web apps",
        body: "Installable, push-capable web applications for teams who should not have to find you in an app store to do their job.",
      },
      {
        title: "Frontend performance",
        body: "Core Web Vitals, bundle discipline and render behaviour treated as a requirement in the spec rather than a cleanup task at the end.",
      },
    ],
    principles: [
      {
        title: "Specification before keyboard",
        body: "Week one produces a written scope you sign. No code until then. It is the cheapest week in which to change your mind, and the most expensive one to skip.",
      },
      {
        title: "Friday demos, not status reports",
        body: "Every Friday you click something real with your own data in it. Percentage-complete is a number that can be quietly wrong for six weeks.",
      },
      {
        title: "Boring technology on purpose",
        body: "We choose tools with large hiring pools and long support horizons. The clever choice is fun for us and expensive for whoever maintains it next.",
      },
      {
        title: "You own it at the end",
        body: "Repository, infrastructure accounts, domains, documentation. Handover is a deliverable with a checklist attached, not a conversation at the end.",
      },
    ],
    stack: [
      { group: "Frontend", items: "React 19, Next.js, TypeScript, Tailwind CSS" },
      { group: "Mobile", items: "React Native, Expo, native modules where needed" },
      { group: "Backend", items: "Node.js, PostgreSQL, Prisma, REST & GraphQL" },
      { group: "Quality", items: "Playwright, Vitest, typed contracts end to end" },
    ],
    evidence: [
      "Charten, our clinical charting product, is a production React and Next.js application with live users.",
      "Larder runs an offline-tolerant inventory flow built for stockrooms where the signal drops.",
      "Every engagement inherits Sill, so accounts, permissions and billing work on day one rather than week three.",
    ],
    faqs: [
      {
        q: "Can you work with our existing codebase?",
        a: "Yes. Week one becomes an audit instead of a greenfield scope. We read the code, map what is there, and tell you honestly what is worth keeping and what is costing you more than it saves.",
      },
      {
        q: "What if we already have a designer?",
        a: "Then we build to their files. We will flag anything that is going to be expensive or awkward to implement before we start rather than after, so they can adjust while it is still cheap.",
      },
      {
        q: "Do we get the source code?",
        a: "You own it from the first commit. The repository lives in your organisation, not ours, and it stays there whatever happens to the relationship.",
      },
      {
        q: "What happens if the scope changes mid-build?",
        a: "We re-quote the difference in writing before touching it. You approve it or you do not. Nothing gets silently absorbed and then billed as a surprise at the end.",
      },
    ],
    related: ["design-and-experience", "quality-and-testing", "cloud-and-delivery"],
  },

  /* ─────────────────────────────────────────────────────────── 02 */
  {
    slug: "ai-automation",
    icon: Brain,
    name: "AI & Automation",
    summary: "AI applied where it removes real work, not where it reads well in a deck.",
    title: "AI that removes a task, not AI that adds a tab.",
    lede: "Assistants grounded in your own documents, extraction that ends manual data entry, and automation for the process somebody currently does by hand every Tuesday afternoon.",
    metaDescription:
      "AI grounded in your own data: retrieval assistants with citations, document extraction, workflow automation and semantic search. Evaluated before launch.",
    facts: [
      ["2 – 4 weeks", "scope to live"],
      ["Your data", "never used for training"],
      ["Cited answers", "or it says it does not know"],
    ],
    signals: [
      {
        title: "Someone retypes documents all day",
        body: "A person converts paper or PDFs into database rows. The hour costs you something, and the errors they occasionally make cost considerably more.",
      },
      {
        title: "Your team answers the same question constantly",
        body: "The answer exists, in a policy document or a manual or a folder somewhere. Finding it takes eleven minutes. Interrupting a colleague takes two.",
      },
      {
        title: "You have been sold AI that did nothing",
        body: "A generic chatbot that knew nothing about your business, answered confidently and wrongly, and was switched off inside a month. That is common, and it is not your fault.",
      },
    ],
    covers: [
      {
        title: "Grounded assistants",
        body: "Retrieval-augmented answers drawn from your own documents, with a citation attached so anyone reading can check where it came from.",
      },
      {
        title: "Document extraction",
        body: "Invoices, delivery notes, purchase orders and forms turned into database rows, with confidence scores and human review for anything uncertain.",
      },
      {
        title: "Workflow automation",
        body: "Classification, routing, triage and summarising. The judgement calls that are too fuzzy for rules and too repetitive to be worth a person.",
      },
      {
        title: "Semantic search",
        body: "Search that understands what someone meant rather than matching keywords, across documents, tickets, products and internal knowledge.",
      },
      {
        title: "Model evaluation",
        body: "A scored test set before launch and after every prompt change, so that “it feels better” becomes a number somebody can argue with.",
      },
      {
        title: "Guardrails & fallbacks",
        body: "Refusal behaviour, escalation paths, and what the user sees when the provider has an outage at ten o'clock on a Monday morning.",
      },
      {
        title: "Recommendations & forecasting",
        body: "Reorder points, demand signals and next-best-action, built on your own history rather than a general model's idea of your industry.",
      },
    ],
    principles: [
      {
        title: "Grounded or it does not ship",
        body: "Answers come from your documents with a citation attached. A system that cannot show its source is a system you cannot defend to a customer.",
      },
      {
        title: "Evaluated, not eyeballed",
        body: "We build a scored test set before launch. Prompt changes are measured against it, so an improvement is something demonstrable rather than something felt.",
      },
      {
        title: "The fallback is part of the feature",
        body: "Providers have outages and models refuse. What a user sees on a bad day gets designed at the same time as what they see on a good one.",
      },
      {
        title: "Your data stays yours",
        body: "No-training terms contractually, no retention beyond the request where the provider supports it, and open models on your own infrastructure where the constraint is absolute.",
      },
    ],
    stack: [
      { group: "Models", items: "Claude, OpenAI, Llama and other open models on your own infrastructure" },
      { group: "Retrieval", items: "pgvector, hybrid search, reranking" },
      { group: "Orchestration", items: "Typed tool calling, Python services, background job queues" },
      { group: "Evaluation", items: "Scored test sets, regression runs per change" },
    ],
    evidence: [
      "Document extraction runs in production on inventory builds, turning supplier paperwork into stock records.",
      "We run scored evaluation sets against every prompt change we ship, including on shipped client builds.",
      "Where a client's data cannot leave their infrastructure we deploy open models rather than declining the constraint.",
    ],
    faqs: [
      {
        q: "Will our data be used to train a model?",
        a: "No. We use providers under contractual no-training terms, and where the constraint is absolute we run open models on infrastructure you control, so nothing leaves your environment at all.",
      },
      {
        q: "What stops it making things up?",
        a: "Retrieval grounding plus citations. The system answers from retrieved passages and shows you which ones. Where nothing relevant comes back, it says it does not know rather than filling the gap.",
      },
      {
        q: "How do you price AI work when token costs vary?",
        a: "The build is a fixed price. Running costs are estimated from your real volume during scoping and passed through at cost, so you see the provider's bill rather than our markup on it.",
      },
      {
        q: "Can you add AI to software you did not build?",
        a: "Usually, yes. What matters is whether the data is reachable through an API or a database. Week one tells you either way, before you have committed to a build.",
      },
    ],
    related: ["data-and-sync", "systems-integration", "product-engineering"],
  },

  /* ─────────────────────────────────────────────────────────── 03 */
  {
    slug: "systems-integration",
    icon: Plug,
    name: "Systems Integration",
    summary: "Making two systems agree that were never designed to talk to each other.",
    title: "Two systems that were never meant to meet.",
    lede: "Your POS, your accounting package, your warehouse software and the supplier portal that still emails a CSV at midnight. Integration is where most projects actually go wrong, so it is where we spend week one.",
    metaDescription:
      "Integration for POS, payments, identity and legacy platforms. Idempotent writes, signed webhooks and continuous reconciliation.",
    facts: [
      ["Week one", "every system mapped first"],
      ["Idempotent", "retries that cannot double-post"],
      ["Reconciliation", "built in, not bolted on"],
    ],
    signals: [
      {
        title: "The same number is different in two systems",
        body: "Your POS says one thing, your accounting package says another, and reconciling the two of them is somebody's entire Monday morning.",
      },
      {
        title: "A person is the integration",
        body: "Someone exports from one system and imports into another. They are completely reliable right up until the week they take leave.",
      },
      {
        title: "A vendor says it integrates",
        body: "It does, in a demo, with clean data. Under your volume and with your edge cases the claim turns out to be more complicated.",
      },
    ],
    covers: [
      {
        title: "POS & retail platforms",
        body: "Square, Toast, Clover, Lightspeed, and the older terminals that will only speak to something on the local network.",
      },
      {
        title: "Payment routing",
        body: "Gateways, processors and the reconciliation layer that proves the money arrived where the order said that it would.",
      },
      {
        title: "Identity federation",
        body: "SSO, SAML, OIDC and SCIM provisioning, so that someone who leaves loses access the same day rather than eventually.",
      },
      {
        title: "Third-party orchestration",
        body: "Rate limits, retries, backoff and the queue that stops a partner's bad afternoon from quietly becoming your bad afternoon.",
      },
      {
        title: "Legacy modernisation",
        body: "A layer in front of the old system so it can be replaced one piece at a time, instead of in a single frightening weekend.",
      },
      {
        title: "Webhooks & events",
        body: "Signed, replayable, idempotent delivery, with a dead-letter queue that a human being can actually open and read.",
      },
      {
        title: "File-based interchange",
        body: "SFTP, EDI and the nightly CSV a supplier will never stop sending. Parsed, validated, and alerted on when the format quietly changes.",
      },
    ],
    principles: [
      {
        title: "Map before you write",
        body: "Week one is a written inventory of every system, who owns it, what it can emit and what it refuses to. Integrations fail on assumptions, not on code.",
      },
      {
        title: "Assume delivery happens twice",
        body: "Every write is idempotent. Networks retry and partners replay, and a payment that posts twice is a far worse day than one that fails loudly.",
      },
      {
        title: "Reconcile continuously",
        body: "A scheduled job compares both sides and reports the drift. Finding a mismatch in an alert on Tuesday beats finding it in an audit in April.",
      },
      {
        title: "Fail loudly, degrade quietly",
        body: "Integration errors page somebody. The customer-facing side queues and retries rather than showing anyone a stack trace.",
      },
    ],
    stack: [
      { group: "Commerce", items: "Square, Toast, Clover, Shopify, Lightspeed" },
      { group: "Payments", items: "Stripe, Adyen, Authorize.net" },
      { group: "Identity", items: "Auth0, Okta, Entra ID, SAML & OIDC" },
      { group: "Transport", items: "Webhooks, SFTP, message queues, EDI" },
    ],
    evidence: [
      "OneHubPOS connects point-of-sale terminals to ecommerce stock in both directions, including the reconciliation pass.",
      "Our inventory products integrate supplier feeds arriving as anything from a REST API to a nightly CSV.",
      "Sill ships signed, replayable webhook delivery with an inspectable dead-letter queue as standard.",
    ],
    faqs: [
      {
        q: "The vendor says there is no API.",
        a: "Sometimes that is true, and sometimes it means there is no public documentation. We check the network traffic, the partner programme and the database. If there is genuinely no route in, you hear that in week one rather than month two.",
      },
      {
        q: "Can you integrate without replacing our current system?",
        a: "That is usually the right answer. A layer in front lets the old system keep running while new work is built against a clean interface, and it turns a risky replacement into a gradual one.",
      },
      {
        q: "What happens when a partner changes their format?",
        a: "Every inbound payload is validated, and a failure raises an alert. You hear about it from us before you hear about it from a customer.",
      },
      {
        q: "Who owns the credentials?",
        a: "You do. They live in your secret manager. We request scoped access for the work and hand it back at the end of the engagement.",
      },
    ],
    related: ["data-and-sync", "payments-and-commerce", "security-and-access"],
  },

  /* ─────────────────────────────────────────────────────────── 04 */
  {
    slug: "data-and-sync",
    icon: Database,
    name: "Data & Sync",
    summary: "Getting the same number in two places, and keeping it there.",
    title: "One number, in every place it appears.",
    lede: "Schema design, delta sync, migration, and the reconciliation job that catches the drift before an auditor does. Unglamorous work that decides whether anybody trusts the software.",
    metaDescription:
      "Data modelling, delta sync, migration and reconciliation. Reversible migrations, tombstoned deletes, written conflict policy and scheduled drift reporting.",
    facts: [
      ["Delta sync", "changed rows, not full reloads"],
      ["Reversible", "every migration, both directions"],
      ["Drift alerts", "before the quarterly audit"],
    ],
    signals: [
      {
        title: "Two reports, two answers",
        body: "The same question asked in two systems returns different numbers, and the meeting stops while somebody works out which one is right.",
      },
      {
        title: "A nightly job that keeps failing",
        body: "It reloads everything, it takes four hours, and when it breaks at two in the morning nobody finds out until somebody opens a report.",
      },
      {
        title: "History is trapped in the old system",
        body: "You cannot switch it off because five years of records live in it and nobody has ever successfully moved them out.",
      },
    ],
    covers: [
      {
        title: "Schema & modelling",
        body: "Data structures designed for the questions you will be asking in two years, not only for the screen that is needed next month.",
      },
      {
        title: "Delta sync",
        body: "Changed records only, with tombstones for deletions and a conflict policy written down before anybody actually hits a conflict.",
      },
      {
        title: "Reconciliation",
        body: "Scheduled comparison across systems, producing a report that names the rows which disagree rather than a count that does not help.",
      },
      {
        title: "Migration & backfill",
        body: "Moving history off the old system in a rehearsed run with a rollback path, and verified row counts on both sides afterwards.",
      },
      {
        title: "Reporting & dashboards",
        body: "Operational views built on a read model, so that a heavy report cannot slow down the software people are trying to use.",
      },
      {
        title: "Event pipelines",
        body: "Ordered, durable event streams and the job queue that processes them without losing anything when a worker restarts.",
      },
      {
        title: "Retention & archival",
        body: "What gets kept, for how long, and what happens at the end of it. Written down, because at some point somebody is going to ask.",
      },
    ],
    principles: [
      {
        title: "Deletes need a tombstone",
        body: "A record that vanishes from the source must be distinguishable from one that was never sent. Sync bugs are almost always deletion bugs.",
      },
      {
        title: "Rehearse the migration",
        body: "Full dry run on a copy, verified counts, timed. The real run should be a repeat of something that already worked, not a first attempt in front of an audience.",
      },
      {
        title: "Every migration goes both ways",
        body: "A down-migration is written and tested at the same time as the up. A rollback should not be the first time anybody thinks about reversing it.",
      },
      {
        title: "Reconciliation is a feature",
        body: "Anything syncing two sources gets a scheduled job that checks them and reports drift. It costs a day to build and it saves an audit.",
      },
    ],
    stack: [
      { group: "Databases", items: "PostgreSQL, SQLite, Redis" },
      { group: "Access", items: "Prisma, SQL, row-level security" },
      { group: "Pipelines", items: "Job queues, change data capture, scheduled reconciliation" },
      { group: "Reporting", items: "Read models, materialised views, CSV & API export" },
    ],
    evidence: [
      "Larder and InvtoryX both run delta sync between local stock and a central record, conflict resolution included.",
      "Sill carries audit logging and multi-tenancy at the data layer rather than in application code.",
      "We have moved production history off legacy systems in rehearsed, verified, reversible runs.",
    ],
    faqs: [
      {
        q: "How long does a data migration take?",
        a: "The rehearsal takes longer than the migration. Budget about a week of dry runs for anything with real history behind it, after which the live run is usually a matter of hours.",
      },
      {
        q: "Can we keep the old system running in parallel?",
        a: "Yes, and for anything financial we recommend it for at least one full cycle. Reconciliation runs across both until you are satisfied that they agree.",
      },
      {
        q: "Who decides which system wins a conflict?",
        a: "You do, in writing, in week one. After that it is code. An undefined conflict policy is exactly how the same number ends up different in two places.",
      },
      {
        q: "Do we need a data warehouse?",
        a: "Usually not at your size. A read model in the same database answers most operational reporting without giving you a second system to maintain and pay for.",
      },
    ],
    related: ["systems-integration", "cloud-and-delivery", "ai-automation"],
  },

  /* ─────────────────────────────────────────────────────────── 05 */
  {
    slug: "cloud-and-delivery",
    icon: Cloud,
    name: "Cloud & Delivery",
    summary: "The infrastructure underneath, and the pipeline that keeps it moving.",
    title: "Deploys that are boring on purpose.",
    lede: "Infrastructure defined in code, a pipeline that runs on every commit, and alerting that tells you something is wrong before a customer does.",
    metaDescription:
      "Cloud infrastructure and delivery pipelines on AWS, Vercel and Cloudflare. Infrastructure as code, CI/CD on every commit, observability and rehearsed rollback.",
    facts: [
      ["Every commit", "tests, build, deploy"],
      ["In code", "infrastructure, in your repository"],
      ["One command", "rollback, already rehearsed"],
    ],
    signals: [
      {
        title: "Deploying is an event",
        body: "It happens on a Friday afternoon, somebody stays late for it, and everyone holds their breath. It ought to be a Tuesday and it ought to be dull.",
      },
      {
        title: "You find out from a customer",
        body: "The first sign of an outage is an email. Either there is no alerting, or there is and it fires so often that nobody reads it any more.",
      },
      {
        title: "The cloud bill grew and nobody knows why",
        body: "It went up forty per cent over two quarters and no one in the company can point at the line responsible for it.",
      },
    ],
    covers: [
      {
        title: "Deployment & hosting",
        body: "AWS, Vercel and Cloudflare, chosen for what you are actually running rather than for what we happen to enjoy configuring.",
      },
      {
        title: "Infrastructure as code",
        body: "Environments defined in a repository that you own, so that staging and production cannot quietly diverge over a year.",
      },
      {
        title: "CI/CD pipelines",
        body: "Typecheck, tests, build and deploy on every commit, with a red pipeline blocking the merge rather than just embarrassing somebody.",
      },
      {
        title: "Containers & orchestration",
        body: "Docker where it earns its keep, and orchestration only when the workload genuinely needs it rather than because it looks serious.",
      },
      {
        title: "Observability",
        body: "Structured logs, traces and dashboards that answer “is it slow, and where” without anybody having to open a debugger.",
      },
      {
        title: "Alerting & on-call",
        body: "Alerts tied to what a user is experiencing, routed to a named person, with a runbook attached to each one.",
      },
      {
        title: "Cost & performance tuning",
        body: "Reading the bill line by line and fixing the three things generating most of it, which is rarely the three things people assume.",
      },
    ],
    principles: [
      {
        title: "If it is not in the repository it does not exist",
        body: "Console clicks are invisible and unrepeatable. Infrastructure lives in code so that it can be reviewed, reverted and rebuilt by somebody else.",
      },
      {
        title: "Alert on symptoms, not causes",
        body: "Page somebody when checkout is failing, not when CPU hits eighty per cent. One of those matters to a customer and the other might be perfectly normal.",
      },
      {
        title: "Rehearse the rollback",
        body: "A rollback path that has never been run is a hope rather than a plan. We test it during the engagement so that it works during an incident.",
      },
      {
        title: "Right-size before you scale",
        body: "Most performance problems are a missing index or an N+1 query, not a shortage of servers. Bigger instances are the expensive way to avoid reading a query plan.",
      },
    ],
    stack: [
      { group: "Hosting", items: "AWS, Vercel, Cloudflare, Fly.io" },
      { group: "Infrastructure", items: "Terraform, SST, Docker, Kubernetes where the workload needs it" },
      { group: "CI/CD", items: "GitHub Actions, preview environments" },
      { group: "Observability", items: "OpenTelemetry, Sentry, structured logging" },
    ],
    evidence: [
      "Every project deploys through the same pipeline, which is precisely why it is not allowed to be fragile.",
      "Sill ships with environment parity, preview deploys and structured logging configured from the first commit.",
      "Cost tuning is part of a managed retainer rather than a separate upsell when the bill gets noticed.",
    ],
    faqs: [
      {
        q: "Do we have to move to a different cloud?",
        a: "No. If you are on AWS and your team knows AWS, staying there is worth more than any efficiency we would gain by moving you somewhere we prefer.",
      },
      {
        q: "Can you set this up and then hand it over?",
        a: "Yes. Infrastructure code, runbooks and a walkthrough with your team are all deliverables. Plenty of clients take it in-house after handover and that is a perfectly good outcome.",
      },
      {
        q: "What about rules on where our data lives?",
        a: "Region pinning is a configuration decision we make in week one. Tell us the constraint and it gets designed in rather than retrofitted after somebody in legal asks.",
      },
      {
        q: "How do you handle secrets?",
        a: "In your secret manager, never in the repository, using scoped credentials that we hand back at the end of the engagement.",
      },
    ],
    related: ["security-and-access", "quality-and-testing", "managed-services"],
  },

  /* ─────────────────────────────────────────────────────────── 06 */
  {
    slug: "search-and-growth",
    icon: Search,
    name: "Search & Growth",
    summary: "Being found on Google, and being named by the assistants that replaced it.",
    title: "Found on Google. Named by ChatGPT.",
    lede: "Technical SEO for the search engine everybody knows, and generative engine optimisation for the assistants a growing share of buyers now ask instead. Two channels, both measured, both reported in sentences.",
    metaDescription:
      "Technical SEO and generative engine optimisation: structured data, crawlability, local presence and visibility across ChatGPT and AI Overviews.",
    facts: [
      ["Two channels", "search engines and answer engines"],
      ["Monthly", "reporting in plain sentences"],
      ["Your accounts", "everything stays in your name"],
    ],
    signals: [
      {
        title: "You rank and nobody visits",
        body: "Position four for a term that turns out to be purely informational. Traffic without intent is a vanity metric that comes with a hosting bill.",
      },
      {
        title: "Your buyers have started asking an assistant",
        body: "They describe the problem to ChatGPT and act on the three names it gives back. If you are not one of them, the ranking did not help you.",
      },
      {
        title: "The last agency sent a dashboard",
        body: "Forty widgets and no sentence anywhere explaining what changed, what it cost, or whether any of it was worth doing.",
      },
    ],
    covers: [
      {
        title: "Technical SEO",
        body: "Crawlability, indexation, site architecture, Core Web Vitals, and the redirect map that nobody wrote during the last rebuild.",
      },
      {
        title: "Generative engine optimisation",
        body: "Being retrievable and quotable by ChatGPT, Perplexity, Claude and AI Overviews, which is a genuinely different job from ranking.",
      },
      {
        title: "Structured data",
        body: "Schema.org markup that tells a machine what your pages actually are, which is how a page ends up cited rather than skipped over.",
      },
      {
        title: "Local & multi-location",
        body: "Google Business Profiles, location pages that are not near-duplicates of each other, and citation consistency across the directories that matter.",
      },
      {
        title: "Content architecture",
        body: "Topic clusters, internal linking, and pages that answer one question completely enough to be worth quoting from.",
      },
      {
        title: "Analytics & attribution",
        body: "GA4 and Search Console configured properly, with conversion tracking that matches the way you actually make money.",
      },
      {
        title: "Reporting",
        body: "What moved, what it cost, and what we are doing next month. In sentences, not as a screenshot of a dashboard.",
      },
    ],
    principles: [
      {
        title: "Structured data is the price of entry",
        body: "Answer engines retrieve from pages they can parse. Correct schema is the difference between being summarised and being passed over entirely.",
      },
      {
        title: "Answer completely on the page",
        body: "A page that fully answers one question gets quoted. A page that teases and then asks for an email gets skipped by humans and models alike.",
      },
      {
        title: "Do not block the crawlers you want",
        body: "A lot of default configurations quietly block GPTBot and PerplexityBot. For most businesses that amounts to switching off a sales channel by accident.",
      },
      {
        title: "Report in sentences",
        body: "You should be able to read the monthly update in four minutes and come away knowing what changed, what it cost and what happens next.",
      },
    ],
    stack: [
      { group: "Analytics", items: "GA4, Google Search Console, Bing Webmaster" },
      { group: "Markup & audit", items: "JSON-LD, Schema.org, Screaming Frog, PageSpeed Insights" },
      { group: "Platforms", items: "WordPress, WooCommerce, Next.js, Shopify" },
      { group: "Answer engines", items: "ChatGPT, Perplexity, Claude, AI Overviews" },
    ],
    evidence: [
      "This site is built the way we build client sites: full JSON-LD coverage, answer-engine crawlers explicitly allowed, no page depending on JavaScript to be readable.",
      "We track answer-engine citations as a reported metric rather than only search rankings.",
      "Everything runs in your own analytics accounts, so the data stays yours whether or not you keep working with us.",
    ],
    faqs: [
      {
        q: "How long before we see movement?",
        a: "Technical fixes show up within weeks. Content and authority take three to six months. Anyone promising faster than that is describing a paid channel or guessing.",
      },
      {
        q: "What is GEO, and is it real?",
        a: "Generative engine optimisation means being retrievable and citable by AI assistants. It is real in the sense that buyers now ask them, and early in the sense that nobody has ten years of data, which we say out loud rather than pretending otherwise.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No, and neither can anybody else. What we commit to is reporting what moved and what it cost, honestly, every month.",
      },
      {
        q: "Who owns the accounts?",
        a: "You do. GA4, Search Console and Business Profile are all in your name with us added as a user, and that access ends when the engagement does.",
      },
    ],
    related: ["design-and-experience", "product-strategy", "product-engineering"],
  },

  /* ─────────────────────────────────────────────────────────── 07 */
  {
    slug: "design-and-experience",
    icon: PenTool,
    name: "Design & Experience",
    summary: "Interfaces people can use without being trained on them.",
    title: "Software nobody has to be trained to use.",
    lede: "Interface and interaction design for tools people sit in front of all day, plus the design system that keeps the tenth screen looking like the first one.",
    metaDescription:
      "Product UI and interaction design, design systems, prototyping and WCAG 2.2 AA accessibility. Built for the tenth hour, not the first demo.",
    facts: [
      ["WCAG 2.2 AA", "the baseline, not an extra"],
      ["Design tokens", "one source, every surface"],
      ["Tested", "with the people who will use it"],
    ],
    signals: [
      {
        title: "Training is how you onboard",
        body: "Every new hire needs a session with somebody senior before they can use the tool. That is a design cost, and you pay it again every time you hire.",
      },
      {
        title: "People keep a spreadsheet alongside it",
        body: "They use the software because they have to, and track the real state of things somewhere else. That gap is exactly where the design failed.",
      },
      {
        title: "Every screen looks slightly different",
        body: "Three developers, three interpretations, no shared components. It reads as unfinished to a customer even when it works perfectly well.",
      },
    ],
    covers: [
      {
        title: "Product UI design",
        body: "Screens for people doing a job under time pressure, organised around the task rather than around the shape of the database.",
      },
      {
        title: "Interaction design",
        body: "Empty states, loading, errors, and the confirmation step before something irreversible. The screens that decide whether software feels safe.",
      },
      {
        title: "Design systems",
        body: "Tokens, components and documentation, so the tenth screen matches the first one without anybody having to police it in review.",
      },
      {
        title: "Prototyping",
        body: "Clickable flows tested before the build, because changing a prototype costs an afternoon and changing production costs a sprint.",
      },
      {
        title: "Accessibility",
        body: "WCAG 2.2 AA as a build requirement. Contrast, keyboard paths, focus order and screen reader behaviour, all checked rather than assumed.",
      },
      {
        title: "Usability testing",
        body: "Five people from the actual user group, watched doing real tasks. It finds more in an afternoon than a fortnight of internal opinions.",
      },
      {
        title: "Brand & identity",
        body: "Marks, typography, colour systems, and the usage rules that keep it all consistent once other people start applying it without you.",
      },
    ],
    principles: [
      {
        title: "Design for the tenth hour, not the first minute",
        body: "Tools used all day should reward repetition with keyboard paths and predictable placement. Demo appeal and daily use pull in opposite directions.",
      },
      {
        title: "Accessibility is a requirement, not a phase",
        body: "Contrast and keyboard access are cheap when designed in and expensive when retrofitted. We check the numbers rather than trusting somebody's eye.",
      },
      {
        title: "The error states are the product",
        body: "Anyone can design the happy path. What people actually remember is what happened when the upload failed at ninety per cent.",
      },
      {
        title: "Tokens over screenshots",
        body: "Colour, type and spacing live as variables shared by the design files and the code, so a change lands in both instead of drifting apart quietly.",
      },
    ],
    stack: [
      { group: "Design", items: "Figma, design tokens, Storybook" },
      { group: "Implementation", items: "Tailwind CSS, shadcn/ui, Radix UI, CSS custom properties" },
      { group: "Accessibility", items: "axe, contrast auditing, screen reader passes" },
      { group: "Research", items: "Moderated task testing, session review" },
    ],
    evidence: [
      "Our brand system runs on tokens shared between the design files and production CSS, with verified contrast ratios on every pairing.",
      "Charten is designed for clinicians working at speed, where a mis-tap has a cost and the keyboard path matters more than the animation.",
      "Accessibility checks sit inside the definition of done on every engagement rather than appearing as a separate line item.",
    ],
    faqs: [
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We build the product design system on top of your brand rather than replacing it, and flag anything in it that will fail accessibility before we start using it everywhere.",
      },
      {
        q: "Do we need a full design phase?",
        a: "Not always. For an internal tool on an existing system, working inside your current patterns is usually both faster and better than starting from a blank canvas.",
      },
      {
        q: "What does accessible actually mean here?",
        a: "WCAG 2.2 AA: measured contrast, full keyboard operability, correct focus order and sensible labels. It is checked with tooling and by hand, not simply asserted in a proposal.",
      },
      {
        q: "Will you hand over the Figma files?",
        a: "Yes, together with the token definitions and component documentation. Same rule as the code: you own what you paid for.",
      },
    ],
    related: ["product-engineering", "search-and-growth", "product-strategy"],
  },

  /* ─────────────────────────────────────────────────────────── 08 */
  {
    slug: "managed-services",
    icon: LifeBuoy,
    name: "Managed Services",
    summary: "What happens after launch, when the interesting part is over.",
    title: "The part after launch, that decides whether it lasted.",
    lede: "Monitoring, dependency updates, incident response and a steady pace of small improvements. Software nobody maintains does not stay working, it simply fails later and more expensively.",
    metaDescription:
      "Support retainers with named engineers: monitoring, incident response, monthly dependency and security updates, documentation kept current.",
    facts: [
      ["Named engineers", "the people who built it"],
      ["Monthly", "dependency and security updates"],
      ["Exit anytime", "handover is in the contract"],
    ],
    signals: [
      {
        title: "The people who built it have gone",
        body: "The agency moved on, or the developer left, and nobody currently at the company has ever opened the repository.",
      },
      {
        title: "Updates have been deferred for a year",
        body: "Every month it gets harder to start. At some point a security advisory makes the decision on your behalf, usually at an inconvenient moment.",
      },
      {
        title: "Nobody knows if it is working right now",
        body: "There is no monitoring, so the honest answer is whoever most recently tried to log in and did not complain.",
      },
    ],
    covers: [
      {
        title: "Support retainers",
        body: "A defined number of hours each month with a response commitment, handled by the engineers who wrote the code in the first place.",
      },
      {
        title: "Monitoring & incident response",
        body: "Alerts routed to a person, runbooks for the failures we already know about, and a written note afterwards about what actually happened.",
      },
      {
        title: "Iterative delivery",
        body: "A small, steady stream of improvements. The alternative is a rewrite in three years, which costs more and feels considerably worse.",
      },
      {
        title: "Dependency updates",
        body: "Patches applied monthly rather than accumulated into one frightening upgrade that nobody on the team wants to be the person to start.",
      },
      {
        title: "Security patching",
        body: "Advisories tracked against your actual dependency tree, with anything urgent applied out of cycle rather than waiting for the monthly slot.",
      },
      {
        title: "Performance review",
        body: "A quarterly look at what got slower and what the cloud bill is doing, with the fixes prioritised and costed rather than just noted.",
      },
      {
        title: "Handover & documentation",
        body: "Kept current throughout, so that leaving remains a normal option rather than becoming a negotiation.",
      },
    ],
    principles: [
      {
        title: "The builders do the maintenance",
        body: "The engineers who wrote it answer for it. Context is most of what makes a fix fast, and handing the work to a different team throws that away.",
      },
      {
        title: "Small and often beats big and rare",
        body: "Monthly patching is routine and dull. Annual patching is a project with a risk register and an argument about who pays for it.",
      },
      {
        title: "Write up every incident",
        body: "What broke, why, and what changed as a result. Short, honest, and sent to you. Incidents that never get written down tend to happen again.",
      },
      {
        title: "Leaving should be easy",
        body: "Documentation stays current and handover is contractual. A retainer should be kept because it is useful, not because exiting it is painful.",
      },
    ],
    stack: [
      { group: "Monitoring", items: "Sentry, uptime checks, OpenTelemetry" },
      { group: "Updates", items: "Dependabot, scheduled review, staged rollout" },
      { group: "Communication", items: "Shared channel, monthly written report" },
      { group: "Access", items: "Scoped credentials in your secret manager" },
    ],
    evidence: [
      "We stay on call for what we deliver, and hold maintenance to the standard we would want as the client.",
      "Sill is patched centrally, which means a security fix reaches every engagement built on it rather than one project at a time.",
      "Handover documentation is a deliverable on every engagement, whether or not a retainer follows it.",
    ],
    faqs: [
      {
        q: "Do we have to take a retainer after launch?",
        a: "No. Plenty of clients take handover and run it in-house. The documentation and the walkthrough are delivered either way, because they are part of what you bought.",
      },
      {
        q: "What is the response time?",
        a: "Defined in the retainer and tiered by severity. Something down in production is not the same as a layout issue on a settings page, and the agreement says so explicitly.",
      },
      {
        q: "Can you maintain software you did not build?",
        a: "Often yes, after a paid audit. We read the code first and tell you honestly whether it is maintainable or whether a retainer would be funding a slow rewrite.",
      },
      {
        q: "What if we want to leave?",
        a: "Notice period, handover session, current documentation, credentials transferred. All of it written into the agreement from the start rather than negotiated at the end.",
      },
    ],
    related: ["cloud-and-delivery", "quality-and-testing", "security-and-access"],
  },

  /* ─────────────────────────────────────────────────────────── 09 */
  {
    slug: "payments-and-commerce",
    icon: CreditCard,
    name: "Payments & Commerce",
    summary: "Taking money reliably, and being able to prove where it went.",
    title: "Money in, and a paper trail that survives an audit.",
    lede: "Checkout, subscriptions, invoicing and payouts, built so that the ledger and the bank agree at the end of the month without anybody reconciling them by hand.",
    metaDescription:
      "Payments engineering: checkout, subscriptions, invoicing, payouts and tax. Idempotent writes, webhook-confirmed state and daily reconciliation.",
    facts: [
      ["Idempotent", "no double charge on retry"],
      ["SCA & 3DS", "handled, not deferred"],
      ["Daily", "ledger reconciled to processor"],
    ],
    signals: [
      {
        title: "Payments occasionally take twice",
        body: "A retry, a double-click or a replayed webhook, and a customer is charged two hundred dollars where they should have been charged one.",
      },
      {
        title: "Month end is a manual reconciliation",
        body: "Somebody exports the processor report and matches it against your records by hand. It takes a full day and it is nobody's favourite day.",
      },
      {
        title: "Failed payments are quietly lost",
        body: "A card expires, the charge fails, nobody chases it, and a subscription ends without anyone at your company ever deciding that it should.",
      },
    ],
    covers: [
      {
        title: "Checkout & payments",
        body: "Card, wallet and bank payments, with the failure paths designed as carefully as the one where everything goes right.",
      },
      {
        title: "Subscriptions & billing",
        body: "Plans, proration, trials, upgrades and dunning. The edge cases are where subscription revenue actually leaks out of a business.",
      },
      {
        title: "Invoicing & receipts",
        body: "Generated, numbered, delivered and stored, in a sequence that an accountant will accept without asking you to explain the gaps.",
      },
      {
        title: "Marketplace payouts",
        body: "Split payments, connected accounts, holdbacks, and the compliance obligations that arrive the moment you move other people's money.",
      },
      {
        title: "Tax & compliance",
        body: "Sales tax and VAT calculated through a dedicated provider, because getting it wrong is a penalty rather than a bug report.",
      },
      {
        title: "Reconciliation",
        body: "Daily comparison of your ledger against the processor, producing the specific differences by name rather than a count of them.",
      },
      {
        title: "Refunds & disputes",
        body: "Chargeback evidence assembled automatically from the order record, rather than reconstructed by somebody under a seven-day deadline.",
      },
    ],
    principles: [
      {
        title: "Every payment operation is idempotent",
        body: "A retried request must never create a second charge. This is the single most common serious bug in payment code and it is entirely preventable.",
      },
      {
        title: "The webhook is the source of truth",
        body: "Not the browser redirect. Users close tabs and networks drop out. Order state is confirmed server side or it is not confirmed at all.",
      },
      {
        title: "Never store card data",
        body: "Tokenisation through the processor and hosted fields in the browser. Holding card numbers yourself is a liability with no corresponding upside.",
      },
      {
        title: "Reconcile daily, not monthly",
        body: "A discrepancy found the next morning still has a cause you can trace. The same discrepancy found at quarter end is archaeology.",
      },
    ],
    stack: [
      { group: "Processors", items: "Stripe, Adyen, Square, Authorize.net" },
      { group: "Billing", items: "Subscriptions, metering, proration, dunning" },
      { group: "Tax", items: "Stripe Tax, Avalara, TaxJar" },
      { group: "Controls", items: "Idempotency keys, signed webhooks, daily reconciliation" },
    ],
    evidence: [
      "Sill carries billing and subscription handling in production, charging real customers every month.",
      "Dunning, proration and failed-payment recovery live in the platform rather than being reimplemented on each project.",
      "Daily reconciliation between processor reports and the ledger runs on builds we have shipped.",
    ],
    faqs: [
      {
        q: "Are you PCI compliant?",
        a: "The useful question is scope. We build so that card data never touches your servers, using hosted fields and tokenisation, which keeps you in the simplest SAQ category. Your acquirer confirms the specifics for your situation.",
      },
      {
        q: "Can you migrate us to a different processor?",
        a: "Usually. Most processors support importing tokenised cards from another provider, which avoids asking every customer to re-enter their details. It needs coordination between both sides and we scope it as its own piece of work.",
      },
      {
        q: "What about international payments?",
        a: "Multi-currency, local payment methods and regional requirements such as SCA. Which of those you actually need depends on where your customers are, and that is a week-one question.",
      },
      {
        q: "Do you calculate the tax yourselves?",
        a: "No, and nobody should. We integrate a dedicated tax provider. Rates change constantly across thousands of jurisdictions, and being wrong is a penalty rather than something you patch next sprint.",
      },
    ],
    related: ["systems-integration", "security-and-access", "data-and-sync"],
  },

  /* ─────────────────────────────────────────────────────────── 10 */
  {
    slug: "security-and-access",
    icon: ShieldCheck,
    name: "Security & Access",
    summary: "Who can see what, proven rather than assumed.",
    title: "Least privilege, and a log that proves it.",
    lede: "Authentication, permissions, tenant isolation and audit logging, built in from the first commit. Retrofitting access control is how a small application turns into an expensive one.",
    metaDescription:
      "Authentication, role-based permissions, tenant isolation with row-level security, audit logging, secrets management and SOC 2 or HIPAA readiness.",
    facts: [
      ["Deny by default", "access is granted, not assumed"],
      ["Audit logged", "who did what, and when"],
      ["Tested", "authorisation covered by the suite"],
    ],
    signals: [
      {
        title: "Everyone is an administrator",
        body: "It was easier that way at five people. At thirty it means a junior hire on their second day can delete the customer table.",
      },
      {
        title: "You cannot answer who changed that",
        body: "A record is wrong, nobody knows who edited it or when, and there is no log anywhere to consult about it.",
      },
      {
        title: "A customer sent a security questionnaire",
        body: "Forty questions about controls you have almost certainly not written down anywhere, due back by the end of next week.",
      },
    ],
    covers: [
      {
        title: "Authentication",
        body: "Sessions, MFA, passkeys and SSO, with the account recovery flows designed deliberately rather than left to a password reset email.",
      },
      {
        title: "Roles & permissions",
        body: "Role and attribute-based access enforced on the server, because a hidden button is a design choice and not a permission.",
      },
      {
        title: "Tenant isolation",
        body: "Row-level security, so one customer's query cannot return another customer's data, enforced by the database rather than by developer discipline.",
      },
      {
        title: "Audit logging",
        body: "An append-only record of who did what and when, retained and queryable for the day somebody actually asks you about it.",
      },
      {
        title: "Secrets management",
        body: "Credentials in a managed store, scoped to what needs them, rotated on a schedule, and never committed to the repository.",
      },
      {
        title: "Dependency & supply chain",
        body: "Advisory monitoring against your real dependency tree, with anything urgent applied out of cycle instead of waiting for a release window.",
      },
      {
        title: "Compliance readiness",
        body: "Mapping your controls to what SOC 2 or HIPAA will ask for, and being straight about the gap. We prepare you for an audit; we do not perform one.",
      },
    ],
    principles: [
      {
        title: "Deny by default",
        body: "Nothing is reachable until access is explicitly granted. The opposite default is how data reaches people who were never being malicious about it.",
      },
      {
        title: "Enforce at the database",
        body: "Row-level security means a forgotten filter in application code still cannot return another tenant's rows. Discipline fails eventually; constraints do not.",
      },
      {
        title: "Authorisation gets tests",
        body: "Every role is covered by tests asserting what it cannot do. Permission bugs are completely silent right up until they are a headline.",
      },
      {
        title: "Log what you will be asked about",
        body: "Access, changes, exports and permission grants. Append-only, retained, and searchable before anyone needs it rather than after.",
      },
    ],
    stack: [
      { group: "Identity", items: "Auth.js, Auth0, Okta, SAML & OIDC, passkeys" },
      { group: "Authorisation", items: "RBAC & ABAC, PostgreSQL row-level security" },
      { group: "Secrets", items: "AWS Secrets Manager, Doppler, scoped credentials" },
      { group: "Monitoring", items: "Dependency advisories, audit trails, anomaly alerts" },
    ],
    evidence: [
      "Sill ships authentication, role-based permissions, multi-tenancy and audit logging as its foundation layer, already running in production.",
      "Tenant isolation on shipped builds is enforced with row-level security rather than application-level filtering.",
      "Every engagement inherits authorisation tests rather than writing them from scratch, which is the reason they reliably exist.",
    ],
    faqs: [
      {
        q: "Can you get us SOC 2 certified?",
        a: "No, and no engineering firm can. Certification comes from a licensed auditor. What we do is build and document the controls so that the audit becomes a review rather than a rebuild.",
      },
      {
        q: "Is HIPAA something you handle?",
        a: "We build to the technical safeguards: encryption, access control, audit logging, and BAAs with the infrastructure providers. Your compliance counsel owns the policy side, and that division of responsibility should be explicit from day one.",
      },
      {
        q: "Do you do penetration testing?",
        a: "We do not perform the test itself. We prepare for one and remediate the findings, which is the part that genuinely needs the engineers who know the codebase.",
      },
      {
        q: "What if you find something serious in our existing system?",
        a: "You hear about it the day we find it, privately and in writing, with a severity assessment and an estimate of what fixing it would take. That holds whether or not you engage us to do the fixing.",
      },
    ],
    related: ["cloud-and-delivery", "payments-and-commerce", "managed-services"],
  },

  /* ─────────────────────────────────────────────────────────── 11 */
  {
    slug: "quality-and-testing",
    icon: FlaskConical,
    name: "Quality & Testing",
    summary: "Knowing it works before a customer tells you that it does not.",
    title: "Confidence that survives the next deploy.",
    lede: "Automated tests, load testing and accessibility checks wired into the pipeline, so that shipping on a Thursday afternoon is an ordinary thing to do.",
    metaDescription:
      "Automated testing, end-to-end coverage, load testing and accessibility checks in CI. Regression tests for every bug, release gating, and type safety end to end.",
    facts: [
      ["Every commit", "suite runs, red blocks merge"],
      ["Before launch", "load tested at real peak"],
      ["Every bug", "earns a regression test"],
    ],
    signals: [
      {
        title: "Nobody wants to deploy on a Friday",
        body: "That reluctance is information. It means the team does not actually believe the software is safe to change, and they are usually right.",
      },
      {
        title: "Fixed bugs come back",
        body: "The same issue reappears two releases later, because the original fix was never protected by a test that would have caught the regression.",
      },
      {
        title: "It was fast in testing",
        body: "And then fell over at nine in the morning on launch day, under a load that nobody had ever simulated beforehand.",
      },
    ],
    covers: [
      {
        title: "Automated test suites",
        body: "Unit and integration coverage concentrated where the logic and the money are, rather than chased as a percentage across the whole codebase.",
      },
      {
        title: "End-to-end testing",
        body: "The handful of user journeys that must never break, run on every commit in a real browser rather than in a mocked approximation of one.",
      },
      {
        title: "Load & stress testing",
        body: "Behaviour under your actual peak, established before launch rather than discovered live during it with everybody watching.",
      },
      {
        title: "Accessibility testing",
        body: "Automated axe passes plus manual keyboard and screen reader checks, both sitting inside the definition of done.",
      },
      {
        title: "Regression protection",
        body: "Every bug fixed gets a test that fails without the fix in place. The same bug should not be able to come back a second time.",
      },
      {
        title: "Type safety",
        body: "TypeScript end to end, with types generated from the schema so that the database and the interface cannot silently disagree with each other.",
      },
      {
        title: "Release gating",
        body: "Typecheck, lint, tests and build all green before a merge. Not a convention people remember, a rule the pipeline enforces.",
      },
    ],
    principles: [
      {
        title: "Test what breaks, not what is easy",
        body: "Coverage percentage is easy to raise and easy to game. We concentrate tests where a failure costs money or costs trust.",
      },
      {
        title: "Every bug earns a test",
        body: "Reproduce it as a failing test, then fix it. The suite grows in exactly the places that have already proven themselves fragile.",
      },
      {
        title: "The pipeline enforces it",
        body: "A red build blocks the merge. Standards that depend on somebody remembering them are standards that quietly decay over a year.",
      },
      {
        title: "Load test before, not after",
        body: "Establishing behaviour at peak is a day's work beforehand. Discovering it afterwards is a full incident with customers watching.",
      },
    ],
    stack: [
      { group: "Unit & integration", items: "Vitest, Jest, typed fixtures" },
      { group: "End-to-end", items: "Playwright, real browsers, run in CI" },
      { group: "Load", items: "k6, synthetic peak profiles" },
      { group: "Accessibility", items: "axe-core, keyboard and screen reader passes" },
    ],
    evidence: [
      "Sill carries its own test suite, so every engagement starts with the foundation already covered rather than entirely untested.",
      "Every system we operate deploys continuously, which is only possible because a red pipeline actually stops the merge.",
      "Accessibility checks run in CI on this site and on client work alike.",
    ],
    faqs: [
      {
        q: "What coverage percentage do you target?",
        a: "We do not target one. A high number across trivial code is worth less than thorough tests on billing and permissions. We will tell you what is covered and why those parts were chosen.",
      },
      {
        q: "Is testing an extra line item?",
        a: "No. It sits inside the fixed price. A build without tests is cheaper to deliver and considerably more expensive to own, and we would rather not sell you that trade.",
      },
      {
        q: "Can you add tests to an existing codebase?",
        a: "Yes, starting with the paths that have broken before. Retrofitting coverage everywhere at once is rarely worth the money; covering the genuinely fragile parts almost always is.",
      },
      {
        q: "Do you do manual QA as well?",
        a: "For the things automation is bad at: visual judgement, real-device behaviour, and accessibility with an actual screen reader. The repetitive checks are automated so that people spend their time on the rest.",
      },
    ],
    related: ["product-engineering", "cloud-and-delivery", "managed-services"],
  },

  /* ─────────────────────────────────────────────────────────── 12 */
  {
    slug: "product-strategy",
    icon: Compass,
    name: "Product Strategy",
    summary: "Deciding what to build, before spending four weeks building it.",
    title: "The cheapest week is the one before the build.",
    lede: "Scoping, technical due diligence, roadmapping, and a written specification you sign. Most failed projects were decided before anybody opened an editor.",
    metaDescription:
      "Discovery, written specification, technical due diligence, roadmapping and build-versus-buy analysis. Week one produces a signed scope and a fixed-price quote.",
    facts: [
      ["Week one", "written spec, no code yet"],
      ["Fixed price", "quoted from that spec"],
      ["Honest no", "if we are wrong for it"],
    ],
    signals: [
      {
        title: "Everyone describes it differently",
        body: "Ask three people what the system should do and you get three answers. Building before resolving that is precisely how scope creep begins.",
      },
      {
        title: "Your quotes vary by four times",
        body: "Because each firm quietly guessed at a different project. A written specification is the thing that makes quotes comparable to one another.",
      },
      {
        title: "You are about to acquire software",
        body: "And you need somebody technical to read the codebase before the price is agreed rather than during the first month afterwards.",
      },
    ],
    covers: [
      {
        title: "Discovery & scoping",
        body: "Sitting with the people who do the work today, watching the process, and writing down what the software actually has to do.",
      },
      {
        title: "Written specification",
        body: "Screens, rules, edge cases, and what is explicitly out of scope. Signed before the build, which is what makes the quote mean something.",
      },
      {
        title: "Technical due diligence",
        body: "Assessment of an existing codebase, or of a company you are about to acquire, with a plain reading of the risk and the effort involved.",
      },
      {
        title: "Roadmapping",
        body: "Sequencing by dependency and value, so that the thing unblocking everything else is not accidentally scheduled for month five.",
      },
      {
        title: "Build versus buy",
        body: "Honest analysis of where existing software is already enough. Sometimes the answer is that you do not need us for that part at all.",
      },
      {
        title: "Feasibility & estimation",
        body: "What is genuinely achievable in four weeks, what needs twelve, and which part of the idea is carrying most of the risk.",
      },
      {
        title: "Platform selection",
        body: "Choosing a processor, a cloud, an auth provider, judged against your constraints rather than against what is currently fashionable.",
      },
    ],
    principles: [
      {
        title: "Watch the work before designing the software",
        body: "The process people describe and the process they actually perform are different. The gap between them is where the real requirements live.",
      },
      {
        title: "Out of scope gets written down",
        body: "Naming what we are not building is more useful than naming what we are. It is the sentence that prevents the argument in week three.",
      },
      {
        title: "Sequence by dependency",
        body: "Build the thing everything else is waiting on first, even when it is less exciting than the feature that was demoed to the board.",
      },
      {
        title: "An honest no is worth more than a bad yes",
        body: "If your problem is solved by software that already exists, or by a process change, we say so. It costs us an engagement and it is still the right answer.",
      },
    ],
    stack: [
      { group: "Discovery", items: "Process observation, stakeholder interviews, workflow mapping" },
      { group: "Output", items: "Written specification, fixed-price quote, delivery schedule" },
      { group: "Assessment", items: "Codebase review, dependency and risk audit" },
      { group: "Planning", items: "Dependency-ordered roadmap, milestone definition" },
    ],
    evidence: [
      "Week one of every engagement is scope, and it produces a document you sign before any code gets written.",
      "We have delivered five systems end to end, so the sequencing advice comes from having made these calls under real deadlines.",
      "We turn down work that is better solved by software which already exists, which is what makes the recommendation worth anything.",
    ],
    faqs: [
      {
        q: "Is the scoping week charged separately?",
        a: "It is the first week of the engagement and it sits inside the fixed price. If you decide not to continue after it, you keep the specification and can take it to anybody.",
      },
      {
        q: "What if the spec says the project is bigger than we thought?",
        a: "Then you found that out in week one for the cost of a week, rather than in month three for the cost of a project. That is the entire reason for doing it first.",
      },
      {
        q: "Can you do due diligence on a company we are acquiring?",
        a: "Yes. Codebase review, dependency and licence audit, key-person risk, and a plain assessment of what the technical debt would cost to clear after the deal closes.",
      },
      {
        q: "Do you write roadmaps for internal teams?",
        a: "Yes, including where the recommendation turns out to be that your own team builds it. We are not obliged to be the answer to our own assessment.",
      },
    ],
    related: ["product-engineering", "ai-automation", "search-and-growth"],
  },

  /* ─────────────────────────────────────────────────────────── 13 */
  {
    slug: "analytics-and-insight",
    icon: BarChart3,
    name: "Analytics & Insight",
    summary: "Turning what the business already records into something it can decide with.",
    title: "Numbers the whole company agrees on.",
    lede: "A warehouse, a metrics layer where every definition is written down once, and dashboards built around the question somebody actually asked in the meeting.",
    metaDescription:
      "Warehousing, metrics layers, dashboards and experimentation. One definition per metric, quality checks in the pipeline, built on your own stack.",
    facts: [
      ["One definition", "per metric, written down"],
      ["Self-serve", "answers without a ticket"],
      ["Checked", "quality tests in the pipeline"],
    ],
    signals: [
      {
        title: "Every question becomes a ticket",
        body: "Somebody wants a number, an engineer writes a query, and three days later the meeting it was for has already moved on without it.",
      },
      {
        title: "Two dashboards disagree",
        body: "Both are technically correct, because the same word was defined differently in each, and now nobody trusts either of them.",
      },
      {
        title: "The report is a month behind",
        body: "By the time the number arrives, the decision it was meant to inform has already been made on somebody's instinct.",
      },
    ],
    covers: [
      {
        title: "Data warehousing",
        body: "A single place the reporting reads from, so an expensive analytical query cannot slow down the software people are trying to use.",
      },
      {
        title: "Metrics layer",
        body: "Every definition written once and shared. “Active customer” should not quietly mean three different things in three departments.",
      },
      {
        title: "Dashboards",
        body: "Built around the decision somebody makes weekly, rather than around every column that happened to be available in the table.",
      },
      {
        title: "Self-serve analytics",
        body: "Models and documentation that let a non-engineer answer their own question without opening a ticket and waiting two days for it.",
      },
      {
        title: "Pipeline quality",
        body: "Freshness, volume and null checks that fail loudly, because silently wrong data is considerably worse than no data at all.",
      },
      {
        title: "Experimentation",
        body: "A/B infrastructure with the sample size worked out beforehand, so that results are conclusions rather than encouragement.",
      },
      {
        title: "Executive reporting",
        body: "The four numbers that genuinely run the business, delivered on a schedule, with a sentence on why each of them moved.",
      },
    ],
    principles: [
      {
        title: "Define the metric before you chart it",
        body: "Most disagreements about data turn out to be disagreements about definitions. Write them down first and the dashboards stop contradicting each other.",
      },
      {
        title: "Analytics reads from a copy",
        body: "Reporting never queries the production tables customers depend on. One heavy query at month end should not be able to slow down checkout.",
      },
      {
        title: "Data quality checks are tests",
        body: "Freshness, row counts and nulls get asserted in the pipeline. Data that fails should stop rather than flow through and quietly get charted.",
      },
      {
        title: "Fewer dashboards, used more",
        body: "Forty unopened dashboards are worse than four that get used. We build for the decision and then delete the rest without ceremony.",
      },
    ],
    stack: [
      { group: "Warehouse", items: "PostgreSQL, BigQuery, DuckDB" },
      { group: "Modelling", items: "dbt, SQL, versioned definitions" },
      { group: "Visualisation", items: "Metabase, Looker Studio, embedded charts" },
      { group: "Quality", items: "Freshness and volume tests, alerting on failure" },
    ],
    evidence: [
      "Reporting on live usage runs through a read model rather than querying the tables that serve customers.",
      "Metric definitions on our software live in version control beside the code, so a change to one is reviewed like any other change.",
      "We have replaced manual monthly spreadsheets with scheduled, checked reporting on delivery work.",
    ],
    faqs: [
      {
        q: "Do we need a warehouse, or is our database enough?",
        a: "At your size the database is usually enough, with a read replica for reporting. A warehouse earns its place when you need to join data across several systems, and not before that.",
      },
      {
        q: "Can you connect data from different systems?",
        a: "That is most of the work. The extraction is straightforward; agreeing what a customer is across four systems is the hard part and the valuable one.",
      },
      {
        q: "Who maintains the dashboards afterwards?",
        a: "You can, and we build so that you can: documented models, plain SQL, no proprietary layer in the middle. If you would rather we kept them, that sits in a retainer.",
      },
      {
        q: "How do you handle sensitive data in reporting?",
        a: "Masked or aggregated at the model layer, with access granted by role. Analysts see what they need for the question and not a row more than that.",
      },
    ],
    related: ["data-and-sync", "ai-automation", "product-strategy"],
  },

  /* ─────────────────────────────────────────────────────────── 14 */
  {
    slug: "platform-engineering",
    icon: Blocks,
    name: "Platform Engineering",
    summary: "The shared foundation your teams build on, so nobody rebuilds it twice.",
    title: "Build the road once, then everybody drives on it.",
    lede: "Internal platforms, shared libraries and paved paths that make the correct way to do something also the easiest way. It is the discipline behind Sill, and we build it for other people's teams too.",
    metaDescription:
      "Internal developer platforms, shared libraries, service scaffolding and paved paths. One fix reaches every service on the platform.",
    facts: [
      ["Paved path", "the easy way is the right way"],
      ["Shared", "one fix reaches every service"],
      ["Self-serve", "no ticket to start a project"],
    ],
    signals: [
      {
        title: "Every team solves the same problem",
        body: "Four services, four different approaches to logging, and nobody able to trace a single request across more than one of them.",
      },
      {
        title: "Starting a project takes two weeks",
        body: "Before a line of product code exists, somebody sets up CI, secrets, deployment and monitoring from scratch again.",
      },
      {
        title: "Only one person can deploy",
        body: "There is a way to ship and it lives in one engineer's head. Their annual leave is a company-level risk nobody has written down.",
      },
    ],
    covers: [
      {
        title: "Internal developer platforms",
        body: "One consistent way to create, deploy and observe a service, so a new project starts in an afternoon rather than over a fortnight.",
      },
      {
        title: "Shared libraries",
        body: "Authentication, logging, configuration and error handling written once and consumed everywhere, with versioning that respects your teams' release cycles.",
      },
      {
        title: "Paved paths",
        body: "An opinionated default route through the stack. Teams can step off it, but stepping off should be a decision rather than an accident.",
      },
      {
        title: "Service scaffolding",
        body: "Templates that generate a new service already wired for CI, observability, secrets and deployment on the first commit.",
      },
      {
        title: "Environment management",
        body: "Preview, staging and production defined identically in code, so a bug can never be explained away as an environment difference.",
      },
      {
        title: "Developer experience",
        body: "Measuring how long it takes to get from commit to production, and then deliberately shortening it rather than hoping it improves.",
      },
      {
        title: "Platform documentation",
        body: "Written for somebody joining next month, and kept current because it lives next to the code that it describes.",
      },
    ],
    principles: [
      {
        title: "The easy path and the correct path are the same path",
        body: "Standards enforced by documentation get ignored. Standards built into the scaffolding get followed without anybody having to try.",
      },
      {
        title: "Platform teams serve, they do not gate",
        body: "A platform that becomes an approval queue is worse than no platform at all. Self-serve, or your teams will quietly route around it.",
      },
      {
        title: "One fix, everywhere",
        body: "Shared infrastructure means a security patch lands in every service at once, rather than in whichever ones somebody remembered to update.",
      },
      {
        title: "Measure commit-to-production time",
        body: "It is the single number that tells you whether the platform is helping. If it is not falling, something in the design is wrong.",
      },
    ],
    stack: [
      { group: "Foundations", items: "Shared TypeScript libraries, monorepo tooling" },
      { group: "Scaffolding", items: "Service templates, generators, versioned defaults" },
      { group: "Environments", items: "Terraform, SST, preview deployments" },
      { group: "Observability", items: "OpenTelemetry defaults, structured logging by convention" },
    ],
    evidence: [
      "Sill is this discipline applied in practice: one foundation, hardened in production, improved for every project at once.",
      "A fix we make to the permissions layer reaches every engagement on the platform, including work that shipped last year.",
      "We build the same pattern for client teams running several products who keep solving the same problems separately.",
    ],
    faqs: [
      {
        q: "Is this only worth it for large engineering teams?",
        a: "It starts paying off at roughly three teams or four services. Below that the coordination cost is higher than the saving, and we will tell you that rather than sell it anyway.",
      },
      {
        q: "Will this slow our teams down?",
        a: "Only if it becomes a gate. We build platforms that teams opt into because they are faster, not ones they are required to use by policy.",
      },
      {
        q: "What if our teams use different languages?",
        a: "Then the platform covers deployment, observability and environments rather than shared code. A paved path does not have to mean a single stack.",
      },
      {
        q: "Do you run it afterwards?",
        a: "You can, and the documentation is written with that in mind. A retainer is available where you would rather we kept it current instead.",
      },
    ],
    related: ["cloud-and-delivery", "quality-and-testing", "modernisation-and-migration"],
  },

  /* ─────────────────────────────────────────────────────────── 15 */
  {
    slug: "modernisation-and-migration",
    icon: RefreshCw,
    name: "Modernisation & Migration",
    summary: "Replacing the system everyone is afraid of, without a weekend that goes wrong.",
    title: "Replace the old system without a bad weekend.",
    lede: "Legacy replacement done in pieces, with both systems running until you are satisfied. Big-bang cutovers are how ordinary projects become the story a company tells for years afterwards.",
    metaDescription:
      "Legacy modernisation and migration — strangler pattern, monolith decomposition, re-platforming, framework upgrades, rehearsed cutovers and parallel running.",
    facts: [
      ["In pieces", "never one big cutover"],
      ["Both running", "until you are satisfied"],
      ["Rehearsed", "every cutover, on a copy first"],
    ],
    signals: [
      {
        title: "Nobody will touch it",
        body: "It works, and every engineer who has opened it decided it was somebody else's problem. The risk compounds quietly in the background.",
      },
      {
        title: "It runs on something unsupported",
        body: "A framework past end of life, a database nobody patches, a server under a desk. At some point an insurer or a customer asks about it.",
      },
      {
        title: "The rewrite already failed once",
        body: "A team attempted a clean rebuild, ran out of runway at sixty per cent, and now you are maintaining two systems instead of one.",
      },
    ],
    covers: [
      {
        title: "Legacy assessment",
        body: "Reading the old system properly and reporting what it does, what it costs to keep, and what is genuinely risky about changing it.",
      },
      {
        title: "Strangler migration",
        body: "A routing layer in front, so functionality moves across one piece at a time and every individual move can be reversed.",
      },
      {
        title: "Monolith decomposition",
        body: "Splitting along the seams that already exist in the code, rather than along an architecture diagram drawn in a workshop.",
      },
      {
        title: "Re-platforming",
        body: "Moving from on-premises or an ageing host onto managed infrastructure, with region and compliance constraints designed in from the start.",
      },
      {
        title: "Framework upgrades",
        body: "Moving through several major versions in controlled steps, with the test suite proving each one before the next begins.",
      },
      {
        title: "Cutover planning",
        body: "A rehearsed runbook, a rollback path, and a written decision about who calls it off and on what specific signal.",
      },
      {
        title: "Parallel running",
        body: "Both systems live with outputs compared automatically, until the numbers agree for long enough that switching the old one off is uneventful.",
      },
    ],
    principles: [
      {
        title: "Never rewrite everything at once",
        body: "Big-bang rewrites fail at a famous rate. Moving in pieces keeps the business trading and keeps every individual step reversible.",
      },
      {
        title: "The old system is the specification",
        body: "Its behaviour, including the bugs people have quietly built processes around, is the requirement. We document it before replacing any of it.",
      },
      {
        title: "Run both, compare automatically",
        body: "Parallel running with automated output comparison is what turns a leap of faith into a measurement somebody can point at.",
      },
      {
        title: "Every cutover has an off switch",
        body: "Written down before the day, rehearsed, and owned by a named person. Deciding under pressure is how a rollback gets skipped.",
      },
    ],
    stack: [
      { group: "Assessment", items: "Static analysis, dependency and licence audit, traffic mapping" },
      { group: "Routing", items: "Strangler proxies, feature flags, dual writes" },
      { group: "Targets", items: "Node.js, PostgreSQL, containers, managed cloud" },
      { group: "Verification", items: "Output comparison, reconciliation, staged rollout" },
    ],
    evidence: [
      "We have put routing layers in front of live systems so functionality could move across gradually rather than all in one night.",
      "Migration runs are rehearsed on a copy, verified by row count, and reversible.",
      "Where a rewrite is the wrong answer we say so. Sometimes a system needs three fixes and a maintenance plan, not a replacement.",
    ],
    faqs: [
      {
        q: "How long does a modernisation take?",
        a: "Longer than a rewrite looks on paper, and far more likely to actually finish. Expect phases across months, each delivering something usable rather than a promise about the end.",
      },
      {
        q: "Can we keep adding features during it?",
        a: "Yes, and usually you must. That is the main argument for the incremental approach, because a six-month feature freeze is rarely survivable commercially.",
      },
      {
        q: "What if the old code has no documentation?",
        a: "That is the normal case. We read it, trace the live traffic and document the behaviour as the first phase, which is valuable to you even if you then decide to stop there.",
      },
      {
        q: "Is a full rewrite ever the right call?",
        a: "Occasionally, for small systems or where the business domain has genuinely changed underneath. We will say when that is the case rather than defaulting to the longer engagement.",
      },
    ],
    related: ["systems-integration", "cloud-and-delivery", "product-strategy"],
  },

  /* ─────────────────────────────────────────────────────────── 16 */
  {
    slug: "business-systems",
    icon: Building2,
    name: "Business Systems",
    summary: "CRM, ERP and the back office, wired together so nobody retypes anything.",
    title: "The back office, connected.",
    lede: "Your CRM, accounting package, HR system and support desk, integrated and automated so a new customer does not get entered four times by four different people.",
    metaDescription:
      "CRM, ERP and back-office integration — HubSpot, Salesforce, QuickBooks, Xero, NetSuite. Quote-to-cash, approvals, provisioning and custom internal tools.",
    facts: [
      ["No double entry", "one record, everywhere"],
      ["Automated", "the handoffs between systems"],
      ["Your tools", "we work in what you own"],
    ],
    signals: [
      {
        title: "A new customer is entered four times",
        body: "Sales enters them, finance enters them, support enters them, operations enters them. Three of those are transcription errors waiting for their moment.",
      },
      {
        title: "Approvals happen in email",
        body: "Somebody forwards a thread to somebody else. There is no record of who approved what, and no way to chase it when it stalls.",
      },
      {
        title: "Access is granted by memory",
        body: "Somebody remembers to add a new hire to five systems, and nobody at all remembers to remove a leaver from any of them.",
      },
    ],
    covers: [
      {
        title: "CRM implementation",
        body: "HubSpot, Salesforce or Pipedrive configured around the way your sales actually works, rather than around the default pipeline it ships with.",
      },
      {
        title: "ERP & accounting integration",
        body: "QuickBooks, Xero and NetSuite connected to the systems that generate the transactions, so the ledger stops being a retyping exercise.",
      },
      {
        title: "Back-office automation",
        body: "Onboarding, approvals, renewals and offboarding running as workflows with a record, rather than as a sequence of reminder emails.",
      },
      {
        title: "Support desk integration",
        body: "Tickets linked to the customer record and the actual system state, so an agent is not asking a customer to explain what your software did.",
      },
      {
        title: "Quote-to-cash",
        body: "The path from quote through order, invoice and payment to recognised revenue, joined up end to end instead of stitched at month end.",
      },
      {
        title: "HR & provisioning",
        body: "New starters given the right access on day one and losing it the day they leave, driven from the HR system rather than from somebody's memory.",
      },
      {
        title: "Custom internal tools",
        body: "The screen your operations team needs that no product sells, built against the systems you are already paying for.",
      },
    ],
    principles: [
      {
        title: "One record, one owner",
        body: "Each piece of data has a system that owns it and the others read from there. Two systems both believing they are authoritative is where conflict begins.",
      },
      {
        title: "Automate the handoff, not the judgement",
        body: "The value sits in removing the retyping and the chasing. The decision itself usually still belongs to a person who is accountable for it.",
      },
      {
        title: "Configure before you customise",
        body: "Most business platforms do far more than the team realises. We exhaust configuration before writing code, because code is the part you maintain forever.",
      },
      {
        title: "Provisioning follows employment status",
        body: "Access should be driven by the HR system automatically. Manual offboarding is the most common way a company keeps granting access to people who left.",
      },
    ],
    stack: [
      { group: "CRM", items: "HubSpot, Salesforce, Pipedrive" },
      { group: "Finance", items: "QuickBooks, Xero, NetSuite, Stripe Billing" },
      { group: "Workflow", items: "Custom services, queues, scheduled jobs" },
      { group: "Identity", items: "SCIM provisioning, SSO, role mapping from HR" },
    ],
    evidence: [
      "We run quote-to-cash on connected systems rather than on a spreadsheet and good intentions.",
      "Provisioning on shipped builds is driven by role rather than by somebody remembering a checklist.",
      "Integration across POS, inventory and accounting is the same discipline applied to a different set of systems.",
    ],
    faqs: [
      {
        q: "Do we have to change our CRM?",
        a: "No. Working in what you already own and your team already knows is almost always cheaper than a migration, and we will say plainly when it genuinely is not.",
      },
      {
        q: "Can you automate something with no API?",
        a: "Often, through scheduled exports, email parsing, or browser automation as a last resort. Those approaches are more fragile and we tell you which category your case falls into before you commit.",
      },
      {
        q: "Who owns the automations afterwards?",
        a: "You do, documented, in your own accounts. Nothing is left depending on a tool that only we can log into.",
      },
      {
        q: "Does this have to be a big project?",
        a: "No. The highest-value automation is usually a single handoff that currently wastes an hour a day, and that is a week of work rather than a quarter.",
      },
    ],
    related: ["systems-integration", "payments-and-commerce", "analytics-and-insight"],
  },

  /* ─────────────────────────────────────────────────────────── 17 */
  {
    slug: "growth-and-lifecycle",
    icon: TrendingUp,
    name: "Growth & Lifecycle",
    summary: "The engineering behind onboarding, retention and the messages that actually get sent.",
    title: "The engineering behind the funnel.",
    lede: "Onboarding flows, lifecycle messaging, event tracking and the experiments that tell you which version genuinely worked. Built as software, measured properly, handed over in accounts you own.",
    metaDescription:
      "Growth engineering: onboarding flows, behaviour-triggered messaging, event tracking, experimentation and attribution, in your own accounts.",
    facts: [
      ["Event-driven", "messages triggered by behaviour"],
      ["Measured", "sample size agreed beforehand"],
      ["Your stack", "in accounts you own"],
    ],
    signals: [
      {
        title: "People sign up and never come back",
        body: "Acquisition works and activation does not. You are paying for traffic that leaves before it ever reaches the part that was worth paying for.",
      },
      {
        title: "Emails are sent by hand",
        body: "Somebody exports a list, pastes it into a tool and sends. It happens when they remember to, which is not when the customer needed it.",
      },
      {
        title: "You cannot tell which change worked",
        body: "Three things shipped in the same week, the number moved, and everybody in the room has a different favourite explanation.",
      },
    ],
    covers: [
      {
        title: "Onboarding flows",
        body: "The first session, designed and instrumented, because activation is where most products quietly lose the people they just paid to acquire.",
      },
      {
        title: "Lifecycle messaging",
        body: "Email and SMS triggered by what somebody did or failed to do, rather than sent to the entire list on a Tuesday morning.",
      },
      {
        title: "Event tracking",
        body: "A deliberate event schema agreed before implementation, so that the analysis you want to run in six months is actually possible.",
      },
      {
        title: "Customer data",
        body: "A joined view across product, billing and support, so a message knows who it is talking to and what they have already seen.",
      },
      {
        title: "Experimentation",
        body: "A/B and feature-flag experiments with the sample size worked out first and the result read honestly afterwards.",
      },
      {
        title: "Retention mechanics",
        body: "Invites, credits, win-back and renewal prompts built into the product itself rather than run as a campaign alongside it.",
      },
      {
        title: "Attribution",
        body: "Which channel produced revenue rather than which produced clicks, tracked in a way that survives cookie restrictions.",
      },
    ],
    principles: [
      {
        title: "Instrument before you optimise",
        body: "You cannot improve a funnel you cannot see. The event schema comes first, even though it is easily the least exciting part of the work.",
      },
      {
        title: "Behaviour beats broadcast",
        body: "A message triggered by what somebody actually did outperforms a scheduled send, and irritates considerably fewer people on the list.",
      },
      {
        title: "Agree the sample size first",
        body: "Deciding when to stop an experiment after looking at the numbers is how teams talk themselves into results that were never really there.",
      },
      {
        title: "Own your data",
        body: "Events, lists and attribution live in your accounts. A growth stack you cannot leave with is a growth stack that is holding you rather than helping.",
      },
    ],
    stack: [
      { group: "Tracking", items: "Event schema, server-side tracking, GA4" },
      { group: "Messaging", items: "Customer.io, Resend, Twilio, in-product prompts" },
      { group: "Experiments", items: "Feature flags, server-side A/B, sequential testing" },
      { group: "Data", items: "Warehouse-backed segments, joined product and billing" },
    ],
    evidence: [
      "Shipped builds use behaviour-triggered onboarding rather than scheduled email blasts to everybody at once.",
      "Event schemas on our software are versioned in the repository, so analysis does not break silently when somebody renames a field.",
      "Sill carries the notification and delivery layer these flows run on, already in production.",
    ],
    faqs: [
      {
        q: "Is this marketing or engineering?",
        a: "Building it is engineering. We construct and instrument the machinery. Running campaigns day to day belongs to your team or your agency, and we hand it over ready to use.",
      },
      {
        q: "Can you work with the tools we already pay for?",
        a: "Yes, and we would prefer to. Most teams already own more capability than they use, and buying another tool very rarely fixes what is actually a tracking problem.",
      },
      {
        q: "How long until we can see a funnel?",
        a: "Instrumentation is usually two to three weeks. Meaningful conclusions need enough traffic, which depends on your volume, and we estimate that honestly rather than optimistically.",
      },
      {
        q: "Do you guarantee conversion improvements?",
        a: "No. What we commit to is that you will be able to tell whether a change worked, which is the thing most teams are actually missing.",
      },
    ],
    related: ["search-and-growth", "analytics-and-insight", "design-and-experience"],
  },

  /* ─────────────────────────────────────────────────────────── 18 */
  {
    slug: "devices-and-edge",
    icon: Cpu,
    name: "Devices & Edge",
    summary: "Software for the hardware on a counter, in a stockroom or on a wall.",
    title: "The software behind the counter.",
    lede: "Terminals, scanners, receipt printers, label printers, card readers and kiosks. Hardware integration is where a great deal of retail and hospitality software quietly falls over.",
    metaDescription:
      "POS and device software: terminals, printers, scanners, card readers and kiosks. Offline-first operation, edge sync and fleet management.",
    facts: [
      ["Offline first", "it works when the network does not"],
      ["Real hardware", "tested on the actual devices"],
      ["Queued", "nothing lost on reconnect"],
    ],
    signals: [
      {
        title: "The internet goes down and trading stops",
        body: "A cloud-only system means an outage at somebody else's data centre becomes a closed till at your counter.",
      },
      {
        title: "The printer works on one machine",
        body: "It was configured by hand on one device and nobody wrote down how. The second site has never printed a receipt correctly.",
      },
      {
        title: "Stock is right in the system and wrong on the shelf",
        body: "Two terminals, two sessions, and a sync that picked a winner nobody ever agreed to.",
      },
    ],
    covers: [
      {
        title: "POS terminal software",
        body: "Interfaces built for a counter: fast, touch-first, and usable by somebody who started yesterday with a queue in front of them.",
      },
      {
        title: "Peripheral integration",
        body: "Receipt and label printers, barcode and QR scanners, cash drawers, scales and customer-facing displays.",
      },
      {
        title: "Card reader integration",
        body: "Certified payment terminals, tip flows, refunds at the counter, and what happens when a reader disconnects mid-transaction.",
      },
      {
        title: "Kiosk & self-service",
        body: "Locked-down devices, session timeouts, accessibility at a screen somebody is standing in front of, and remote recovery when one wedges.",
      },
      {
        title: "Offline operation",
        body: "A full local store with queued operations, so trading continues through an outage and reconciles cleanly once the connection returns.",
      },
      {
        title: "Device fleet management",
        body: "Provisioning, configuration and staged updates across sites, without anybody having to drive to each location with a USB stick.",
      },
      {
        title: "Edge sync",
        body: "Local-first data with explicit conflict resolution, so two terminals editing the same stock do not produce two different answers.",
      },
    ],
    principles: [
      {
        title: "The device is the source of truth while offline",
        body: "A terminal must be able to trade alone and reconcile later. Anything else makes your revenue dependent on somebody else's uptime.",
      },
      {
        title: "Test on the real hardware",
        body: "Emulators do not reproduce a printer that jams, a scanner that double-reads, or a card reader that drops at exactly the wrong moment.",
      },
      {
        title: "Design for the person with a queue",
        body: "Counter software is used under social pressure. Fewer taps and a forgiving undo matter far more than anything on the settings screen.",
      },
      {
        title: "Update in stages",
        body: "Application and firmware updates roll out to a pilot site first. A bad update across an entire fleet makes for a very long day.",
      },
    ],
    stack: [
      { group: "Devices", items: "Android and iOS terminals, Star and Epson printers, Zebra scanners" },
      { group: "Payments", items: "Stripe Terminal, Square, certified card readers" },
      { group: "Local data", items: "SQLite, local-first sync, queued operations" },
      { group: "Fleet", items: "Staged rollout, remote configuration, device telemetry" },
    ],
    evidence: [
      "OneHubPOS runs on point-of-sale hardware and keeps ecommerce stock in step with the counter in both directions.",
      "Larder and InvtoryX are built around stockrooms with unreliable signal, so offline operation is the default rather than a fallback.",
      "We test on the physical devices, because the failures that matter are precisely the ones an emulator cannot produce.",
    ],
    faqs: [
      {
        q: "Do we have to buy new hardware?",
        a: "Usually not. Most current terminals and printers are supported, and we confirm your exact models in week one before anybody commits to buying anything.",
      },
      {
        q: "What happens during an internet outage?",
        a: "Trading continues. Operations queue locally and sync when the connection returns, with reconciliation reporting anything that conflicted while you were offline.",
      },
      {
        q: "Can you support several locations?",
        a: "Yes, including per-site configuration, staged updates and central reporting across all of them.",
      },
      {
        q: "Who handles payment certification?",
        a: "We build against certified readers from the processor, which keeps the certification burden with them rather than with you. That is deliberate, and it is the cheaper path by a wide margin.",
      },
    ],
    related: ["systems-integration", "payments-and-commerce", "product-engineering"],
  },

  /* ─────────────────────────────────────────────────────────── 19 */
  {
    slug: "embedded-teams",
    icon: Users,
    name: "Embedded Teams",
    summary: "Our engineers inside your team, on your board, in your standups.",
    title: "Engineers who join your team, not a black box.",
    lede: "For when you need capacity rather than a project. Named engineers working in your repository, at your ceremonies, on your priorities, with a defined start and a defined end.",
    metaDescription:
      "Embedded engineers working in your repository, on your board, to your standards. Fractional technical leadership and code review.",
    facts: [
      ["Named people", "the same engineers throughout"],
      ["Your process", "your board, your standards"],
      ["Monthly", "rolling, with clear notice"],
    ],
    signals: [
      {
        title: "You are hiring and it is taking months",
        body: "The role has been open a quarter, the roadmap keeps slipping, and hiring urgently is reliably how companies hire badly.",
      },
      {
        title: "One senior engineer is the bottleneck",
        body: "Everything routes through one person for review and for decisions. They are exhausted and the queue behind them keeps growing.",
      },
      {
        title: "A deadline needs more hands, briefly",
        body: "A three-month push does not justify a permanent hire, and contractors who arrive cold take six weeks to become useful.",
      },
    ],
    covers: [
      {
        title: "Dedicated engineers",
        body: "One or more engineers assigned to you, working your backlog, rather than rotating through a pool shared between several clients.",
      },
      {
        title: "Squad augmentation",
        body: "A small team placed alongside yours for a defined push, with a lead who takes responsibility for coordination rather than leaving it to you.",
      },
      {
        title: "Fractional technical leadership",
        body: "Architecture decisions, hiring input and technical direction at the days per month you actually need, rather than at a full-time salary.",
      },
      {
        title: "Code review as a service",
        body: "An experienced second opinion on every pull request, for teams who are capable but currently light on senior review capacity.",
      },
      {
        title: "Overflow delivery",
        body: "Taking the work that keeps slipping down the board, so your own team stays on the things only they can do.",
      },
      {
        title: "Knowledge transfer",
        body: "Pairing and documentation built into the engagement, so that capability stays in the building after we leave it.",
      },
      {
        title: "Planned exit",
        body: "A written handover and a notice period, because the end of an engagement should be scheduled rather than abrupt.",
      },
    ],
    principles: [
      {
        title: "Named engineers, not a pool",
        body: "You get the same people throughout. Rotating staff between clients is cheaper to run and noticeably worse to be on the receiving end of.",
      },
      {
        title: "We work your way",
        body: "Your repository, your board, your ceremonies, your standards. An embedded engineer who imports a different process is adding friction rather than capacity.",
      },
      {
        title: "Leave capability behind",
        body: "Pairing and documentation are part of the engagement. If your team is no stronger when we leave, we did the work but missed the point of it.",
      },
      {
        title: "Easy to stop",
        body: "Monthly rolling with a clear notice period. Capacity should be something you can turn down as readily as you turned it up.",
      },
    ],
    stack: [
      { group: "Ways of working", items: "Your board, your ceremonies, your definition of done" },
      { group: "Review", items: "Pull request review, architecture input, pairing" },
      { group: "Reporting", items: "Weekly written update, visible in your own tools" },
      { group: "Exit", items: "Notice period, written handover, documentation" },
    ],
    evidence: [
      "The ceremonies and review standards are ones we run on live projects rather than ones we describe in a proposal.",
      "Every engagement ends with written handover as a deliverable, embedded work included.",
      "Our engineers work inside client repositories under client standards rather than importing our own.",
    ],
    faqs: [
      {
        q: "How is this different from a staffing agency?",
        a: "We are responsible for the work, not only for supplying a person. If an engineer is not working out, replacing them is our problem and our cost rather than a new search for you.",
      },
      {
        q: "What is the minimum commitment?",
        a: "Usually a month, rolling. Anything shorter and the ramp-up consumes most of the value for both sides, which serves nobody.",
      },
      {
        q: "Will they work our hours?",
        a: "We are based in Orlando, so overlap with United States business hours is the normal case rather than something that has to be negotiated around.",
      },
      {
        q: "Can embedded work turn into a project?",
        a: "Often it does, and in both directions. The commercial model can change without changing the people, which is usually the whole point of starting this way.",
      },
    ],
    related: ["product-strategy", "quality-and-testing", "enablement-and-training"],
  },

  /* ─────────────────────────────────────────────────────────── 20 */
  {
    slug: "enablement-and-training",
    icon: GraduationCap,
    name: "Enablement & Training",
    summary: "Leaving your team able to do it without us.",
    title: "The goal is that you stop needing us.",
    lede: "Workshops, documentation and structured handover, for teams who would rather own their software than rent the knowledge of how it works.",
    metaDescription:
      "Technical workshops on your own codebase, structured handover programmes, architecture documentation, decision records and AI literacy for engineering teams.",
    facts: [
      ["Recorded", "sessions you keep"],
      ["Hands-on", "your codebase, not slides"],
      ["Written", "documentation, not a conversation"],
    ],
    signals: [
      {
        title: "Knowledge lives in one person",
        body: "One engineer understands the system. Their resignation would be a company-level event, and everybody already knows it.",
      },
      {
        title: "Documentation is a year out of date",
        body: "It exists, it is wrong, and being confidently wrong makes it worse than having none at all.",
      },
      {
        title: "Your team wants to take it over",
        body: "They are capable and they want to own it. What is missing is a structured handover rather than a folder of links and goodwill.",
      },
    ],
    covers: [
      {
        title: "Technical workshops",
        body: "Run on your own codebase with your own engineers, because a generic course does not survive contact with your actual system.",
      },
      {
        title: "Handover programmes",
        body: "A structured series of sessions ending with your team deploying, debugging and extending it without us on the call.",
      },
      {
        title: "Documentation",
        body: "Architecture, runbooks and decision records, written to be read by somebody who joins the company in six months' time.",
      },
      {
        title: "AI literacy for teams",
        body: "What these tools are genuinely good at, where they are dangerous, and how to use them without leaking anything that matters.",
      },
      {
        title: "Code review coaching",
        body: "Raising the standard of review itself, which is the cheapest available way to raise the standard of everything else.",
      },
      {
        title: "Architecture decision records",
        body: "Why a choice was made, what was rejected, and the conditions under which it should be revisited by whoever is here then.",
      },
      {
        title: "Onboarding material",
        body: "The path a new engineer follows in their first week, tested by actually putting somebody through it rather than by assuming.",
      },
    ],
    principles: [
      {
        title: "Teach on the real codebase",
        body: "Generic training is forgotten within a fortnight. Working through your own system, with your own constraints, is what genuinely transfers.",
      },
      {
        title: "Documentation lives with the code",
        body: "In the repository, reviewed in pull requests. Documentation kept anywhere else drifts out of date within a quarter and nobody notices.",
      },
      {
        title: "Record everything",
        body: "Sessions are recorded and kept. The person who most needed a session is very often the one who could not attend it.",
      },
      {
        title: "Success is us being unnecessary",
        body: "The engagement is finished when your team ships without asking. We would rather be re-hired for something new than retained out of dependency.",
      },
    ],
    stack: [
      { group: "Format", items: "Hands-on sessions on your codebase, recorded" },
      { group: "Artefacts", items: "Architecture docs, runbooks, decision records" },
      { group: "Topics", items: "React, Next.js, TypeScript, PostgreSQL, cloud delivery, AI tooling" },
      { group: "Verification", items: "Your team performs the task unaided before sign-off" },
    ],
    evidence: [
      "Handover documentation is a deliverable on every engagement rather than an optional extra somebody has to think to ask for.",
      "We write architecture decision records on everything we build, so the reasoning survives the people who were in the room at the time.",
      "Clients take our work in-house and run it themselves, which we treat as a normal outcome rather than a lost account.",
    ],
    faqs: [
      {
        q: "Can you train our team on a system you did not build?",
        a: "Yes, once we have read it. We cannot teach what we have not understood, so there is an assessment phase first and it is honest about whatever we find in there.",
      },
      {
        q: "How long does a handover take?",
        a: "Typically two to four sessions across a few weeks, spaced so your team can try things in between and bring real questions back to the next one.",
      },
      {
        q: "Do we get the recordings?",
        a: "Yes, along with the written material. They are yours to keep and to use for future hires without asking us again.",
      },
      {
        q: "What if our team is fairly junior?",
        a: "That is a common and perfectly workable starting point. The pace changes and the pairing goes deeper, and we say up front what is realistic in the time available.",
      },
    ],
    related: ["embedded-teams", "platform-engineering", "product-strategy"],
  },
]

export function getPractice(slug: string): Practice | undefined {
  return PRACTICES.find((p) => p.slug === slug)
}

/**
 * Twenty flat cards is a wall. Grouping them into six families gives the
 * /capabilities index a spine a buyer can scan, and lets somebody who came
 * looking for one thing see what sits next to it.
 */
export const PRACTICE_GROUPS: { name: string; blurb: string; slugs: string[] }[] = [
  {
    name: "Build",
    blurb: "Making the thing itself, and making it good enough to hand over.",
    slugs: ["product-engineering", "design-and-experience", "quality-and-testing", "devices-and-edge"],
  },
  {
    name: "Data & Intelligence",
    blurb: "Getting the numbers right, then getting something useful out of them.",
    slugs: ["ai-automation", "data-and-sync", "analytics-and-insight"],
  },
  {
    name: "Connect",
    blurb: "Systems that were never designed to talk to each other, made to agree.",
    slugs: ["systems-integration", "payments-and-commerce", "business-systems"],
  },
  {
    name: "Run",
    blurb: "The infrastructure underneath, and everything that keeps it standing.",
    slugs: ["cloud-and-delivery", "platform-engineering", "security-and-access", "managed-services"],
  },
  {
    name: "Change",
    blurb: "Deciding what to do, replacing what exists, and adding people to do it.",
    slugs: ["product-strategy", "modernisation-and-migration", "embedded-teams", "enablement-and-training"],
  },
  {
    name: "Grow",
    blurb: "Being found, and turning the people who find you into customers.",
    slugs: ["search-and-growth", "growth-and-lifecycle"],
  },
]

/** Total sub-capabilities across every practice, for the counters. */
export const CAPABILITY_COUNT = PRACTICES.reduce((n, p) => n + p.covers.length, 0)
