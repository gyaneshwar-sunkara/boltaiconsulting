import { Metadata } from "next"
import {
  Search, Bot, MapPin, FileText, Globe, BarChart3, Star, Link2,
} from "lucide-react"
import { ServicePage, type ServiceConfig } from "@/components/service-page"

export const metadata: Metadata = {
  title: "AI Marketing & Search Visibility",
  description:
    "SEO plus GEO — getting named when someone asks ChatGPT, Perplexity or Google's AI for a recommendation. Monthly retainer, reported in plain numbers.",
  alternates: { canonical: "/services/search-visibility" },
}

const config: ServiceConfig = {
  slug: "search-visibility",
  eyebrow: "Search Visibility",
  icon: Search,
  title: "Getting found is two jobs now.",
  lede:
    "Ranking on Google still matters. But a growing share of customers never see a results page — they ask an AI and take the first name it gives them. We work on both, and report on both.",
  facts: [
    ["3 months", "minimum, honestly stated"],
    ["Monthly", "three-month minimum"],
    ["2 channels", "search engines and answer engines"],
  ],
  forWho: [
    {
      title: "You're invisible to AI assistants",
      body: "Ask ChatGPT for the best option in your category and someone else gets named. You have no idea why, and no report anywhere tells you it's happening.",
    },
    {
      title: "You rank, but nothing comes of it",
      body: "You're on page one for terms nobody searches, and absent for the questions customers actually type. Traffic exists; enquiries don't.",
    },
    {
      title: "Multiple locations, one listing",
      body: "Four sites sharing a single Google Business Profile, or four profiles with contradictory information. You should rank in four neighbourhoods, not one.",
    },
  ],
  capabilities: [
    {
      icon: Search,
      title: "Technical SEO",
      body: "Crawlability, page speed, structure, internal linking, Core Web Vitals. Boring work that determines whether anything else you do gets seen.",
    },
    {
      icon: Bot,
      title: "GEO for answer engines",
      body: "Structuring content so ChatGPT, Perplexity and AI Overviews can quote you accurately. Answers stated plainly and marked up so a model can extract them.",
    },
    {
      icon: MapPin,
      title: "Local & multi-location",
      body: "One correct profile per site, consistent across every directory. Location pages that rank in their own neighbourhoods rather than competing with each other.",
    },
    {
      icon: FileText,
      title: "Content that answers questions",
      body: "Written around what customers actually type, in natural language. Answer engines quote pages that answer clearly, not pages that circle a keyword for 2,000 words.",
    },
    {
      icon: Globe,
      title: "Structured data",
      body: "Organization, LocalBusiness, Service, FAQ and Product schema. A machine-readable statement of what you are, which is what retrieval systems lean on hardest.",
    },
    {
      icon: Star,
      title: "Reviews & reputation",
      body: "Review generation and response. Models weight sentiment and recency, and a wall of unanswered complaints is a reason not to recommend you.",
    },
    {
      icon: Link2,
      title: "Mentions & citations",
      body: "Getting described accurately in trade press, directories and local media. Not for the backlink — for the mention, which is what gets retrieved and quoted.",
    },
    {
      icon: BarChart3,
      title: "Answer-engine tracking",
      body: "We run the questions your customers ask across ChatGPT, Perplexity, Gemini and AI Overviews, monthly, and record who gets named. That list is your ranking report.",
    },
  ],
  process: [
    { phase: "Month 0", label: "Audit", body: "Where you currently stand on both channels, including what the assistants say about you today. You get this before committing to anything." },
    { phase: "Month 1", label: "Foundation", body: "Technical fixes, structured data, profile consolidation. Unglamorous work that everything afterwards depends on." },
    { phase: "Month 2", label: "Content", body: "Pages built around the real questions, marked up so both channels can use them. First movement usually shows here." },
    { phase: "Month 3+", label: "Compound", body: "Ongoing content, citations, reviews and tracking. Reported monthly in plain numbers — what moved, what it cost, what's next." },
  ],
  deliverables: [
    "Baseline audit of both search and answer-engine visibility",
    "Technical fixes implemented, not just listed in a PDF",
    "Structured data across every relevant page type",
    "Google Business Profile per location, fully completed",
    "Two to four content pieces per month, written for your customers",
    "Monthly answer-engine tracking against your real questions",
    "One-page monthly report a human can read in five minutes",
  ],
  stack: [
    { group: "Analysis", items: "Search Console, GA4, Ahrefs, server log analysis" },
    { group: "Answer engines", items: "ChatGPT, Perplexity, Gemini, AI Overviews tracking" },
    { group: "Technical", items: "Schema.org, Core Web Vitals, sitemaps, robots directives" },
    { group: "Platforms", items: "WordPress, WooCommerce, Next.js, Shopify" },
  ],
  pricing: {
    duration: "Three-month minimum, then rolling",
    note: "The minimum isn't a lock-in tactic — nothing meaningful shows up in under three months and we'd rather say that than take your money for one. After that, 30 days' notice.",
  },
  faqs: [
    { q: "How long before I see anything?", a: "Technical fixes can move things in weeks. Content and authority take two to three months to compound. Anyone promising page one in thirty days is either buying ads or lying, and usually both." },
    { q: "What actually is GEO?", a: "Generative Engine Optimization — the work of being one of the names an AI gives when someone asks it for a recommendation. If SEO was about being findable, GEO is about being quotable. Most businesses in most sectors have done nothing here, which is precisely why it's worth doing now." },
    { q: "Our site is WordPress. Can you work on it?", a: "Yes, and most sites we are asked to improve are. You cannot do technical SEO, Core Web Vitals work or structured data on a platform you refuse to touch, so we work directly in WordPress and WooCommerce — themes, plugins, templates and the database behind them. We will tell you when a plugin is the problem rather than adding another one." },
    { q: "Can you guarantee rankings?", a: "No, and neither can anyone else. What we guarantee is the work, the measurement, and telling you plainly when something isn't working rather than burying it in a dashboard." },
    { q: "Do I need a new website for this?", a: "Usually not. We work with what you have and tell you honestly if something about it is holding you back. If a rebuild is genuinely the blocker, we'll show you why rather than assert it." },
    { q: "What if my competitors are doing this?", a: "In most local and trade sectors, almost nobody is doing the GEO half yet. The window where this is a genuine advantage rather than table stakes is open now and will not stay open." },
    { q: "Can I just do this myself?", a: "Parts of it, yes — and we'll tell you which parts. Claiming your profiles and answering reviews are things you can do this week for nothing. We'd rather you did those and paid us for the work that actually needs us." },
  ],
  related: [
    { href: "/services/web-applications", label: "Web Applications", blurb: "If the site itself is the thing holding your visibility back." },
    { href: "/services/ai-integration", label: "AI Integration", blurb: "The other side of AI — using it inside your business rather than being found by it." },
    { href: "/services/mobile-solutions", label: "Mobile Apps", blurb: "App store optimisation, and being found before the download." },
  ],  schema: { path: "/services/search-visibility" },
  closing: {
    title: "Find out what the assistants say about you.",
    body: "Tell us your business and your market. We'll run the questions your customers would ask across ChatGPT, Perplexity and Google's AI, and send you what comes back. That report is free and it is yours regardless.",
  },
}

export default function SearchVisibilityPage() {
  return <ServicePage c={config} />
}
