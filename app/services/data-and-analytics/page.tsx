import { Metadata } from "next"
import {
  BarChart3, Database, Ruler, LayoutDashboard, FlaskConical, ShieldCheck,
  FileDown, Gauge,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Data & Analytics",
  description:
    "Warehousing, agreed metric definitions, dashboards and self-serve reporting. Built on your own stack, documented, with data quality checks in the pipeline.",
  alternates: { canonical: "/services/data-and-analytics" },
}

const config: ServiceConfig = {
  slug: "data-and-analytics",
  eyebrow: "Data & Analytics",
  icon: BarChart3,
  title: "Numbers the whole company agrees on.",
  lede:
    "A place the reporting reads from, every metric defined once, and dashboards built around the decision somebody makes weekly rather than around whichever columns happened to exist.",
  facts: [
    ["3 – 6 weeks", "scope to live"],
    ["Fixed price", "against a written scope"],
    ["Your accounts", "no proprietary layer"],
  ],
  forWho: [
    {
      title: "Every question becomes a ticket",
      body: "Somebody wants a number, an engineer writes a query, and three days later the meeting it was for has already happened without it.",
    },
    {
      title: "Two dashboards disagree",
      body: "Both are technically correct, because the same word was defined differently in each, and the result is that nobody trusts either one.",
    },
    {
      title: "Reporting slows the product down",
      body: "Month-end queries run against the same tables serving customers, and everybody can tell when finance is closing the books.",
    },
  ],
  capabilities: [
    {
      icon: Database,
      title: "Warehouse & modelling",
      body: "A single place reporting reads from, modelled for the questions you will ask in two years rather than only the chart needed this week.",
    },
    {
      icon: Ruler,
      title: "Metrics layer",
      body: "Every definition written once, versioned in the repository and reviewed like code. “Active customer” stops meaning three different things.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards",
      body: "Built around a weekly decision, not around every available column. Fewer views, actually opened, rather than forty nobody reads.",
    },
    {
      icon: FileDown,
      title: "Self-serve analytics",
      body: "Documented models in plain SQL so a non-engineer can answer their own question without raising a ticket and waiting two days.",
    },
    {
      icon: ShieldCheck,
      title: "Quality checks",
      body: "Freshness, row-count and null assertions in the pipeline. Data that fails stops rather than flowing through and quietly getting charted.",
    },
    {
      icon: FlaskConical,
      title: "Experimentation",
      body: "A/B infrastructure with the sample size agreed beforehand, so a result is a conclusion rather than encouragement.",
    },
    {
      icon: Gauge,
      title: "Executive reporting",
      body: "The four numbers that actually run the business, on a schedule, each with a sentence on why it moved.",
    },
    {
      icon: BarChart3,
      title: "Multi-system joins",
      body: "Product, billing, support and finance brought together, including the hard part: agreeing what a customer is across all four.",
    },
  ],
  process: [
    { phase: "Week 1", label: "Define", body: "Which decisions need which numbers, and what each metric actually means. This is the week that prevents two dashboards from disagreeing later." },
    { phase: "Week 2", label: "Model", body: "Extraction, the warehouse or read model, and the metric definitions in version control. Friday demo on your real data." },
    { phase: "Week 3", label: "Surface", body: "Dashboards, self-serve models and the quality assertions that guard them. Second Friday demo with your team driving." },
    { phase: "Week 4", label: "Hand over", body: "Documentation, a walkthrough with whoever will own it, and scheduled delivery of the executive report." },
  ],
  deliverables: [
    "A warehouse or read model, separated from production tables",
    "Metric definitions in version control, reviewed like code",
    "Dashboards for the decisions you named in week one",
    "Data quality checks that fail loudly in the pipeline",
    "Documented models a non-engineer can query",
    "Everything in your own accounts and repository",
    "30 days of post-launch fixes at no additional cost",
  ],
  stack: [
    { group: "Warehouse", items: "PostgreSQL, BigQuery, DuckDB" },
    { group: "Modelling", items: "dbt, SQL, versioned definitions" },
    { group: "Visualisation", items: "Metabase, Looker Studio, embedded charts" },
    { group: "Quality", items: "Freshness and volume tests, failure alerting" },
  ],
  pricing: {
    duration: "Fixed price · three to six weeks",
    note: "Driven mostly by how many source systems are involved and how much they disagree about what a customer is. Extraction is the easy part; reconciling definitions is where the time goes, and week one tells you how much there is.",
  },
  faqs: [
    { q: "Do we need a warehouse, or is our database enough?", a: "At most sizes the database plus a read replica is enough, and we will say so rather than sell you infrastructure. A warehouse earns its place when you are joining several systems, not before." },
    { q: "Who maintains it after you leave?", a: "You can, and it is built for that: documented models, plain SQL, no proprietary layer in the middle. If you would rather we kept it current, that sits in a support retainer." },
    { q: "How do you handle sensitive data?", a: "Masked or aggregated at the model layer with access by role, so analysts see what the question needs and not a row more." },
    { q: "Can you work with the BI tool we already pay for?", a: "Yes, and we would prefer to. Most teams already own more capability than they use, and a new tool rarely fixes what is actually a definitions problem." },
    { q: "What if our data is a mess?", a: "That is the normal starting point. Week one reports honestly on what state it is in, including where the answer is that a source system needs fixing before reporting on it means anything." },
    { q: "Will reporting slow down our app?", a: "No, because it never queries the tables serving customers. That separation is the first thing built, not an optimisation added later." },
  ],
  related: [
    { href: "/services/systems-integration", label: "Systems Integration", blurb: "Getting the source systems to agree before reporting on them." },
    { href: "/services/ai-integration", label: "AI Integration", blurb: "Once the data is modelled, asking questions of it in plain language." },
    { href: "/services/search-visibility", label: "Search Visibility", blurb: "Attribution that connects marketing spend to actual revenue." },
  ],
  schema: { path: "/services/data-and-analytics" },
  closing: {
    title: "Tell us which number nobody trusts.",
    body: "Name the report that starts arguments. We'll tell you whether that is a data problem or a definitions problem, because they are fixed very differently.",
  },
}

export default function DataAndAnalyticsPage() {
  return <ServicePage c={config} />
}
