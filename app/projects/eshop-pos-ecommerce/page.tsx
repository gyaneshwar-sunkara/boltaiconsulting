"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Shield,
  Code2,
  Database,
  Server,
  Smartphone,
  Users,
  ShoppingCart,
  RefreshCw,
  Lock,
  Layers,
  GitBranch,
  Terminal,
  Workflow,
  BarChart3,
  CreditCard,
  Store,
  Package,
  Bell,
  Settings,
  Globe,
} from "lucide-react"
import Link from "next/link"

const techStack = {
  frontend: [
    { name: "React 18", description: "Latest React with concurrent features" },
    { name: "TypeScript", description: "End-to-end type safety" },
    { name: "Vite", description: "Lightning-fast build tooling" },
    { name: "Redux Toolkit", description: "Predictable state management" },
    { name: "React Query", description: "Server state & caching" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "Radix UI", description: "Accessible component primitives" },
    { name: "React Hook Form", description: "Performant form handling" },
  ],
  backend: [
    { name: "Node.js", description: "JavaScript runtime" },
    { name: "Express.js", description: "Minimalist web framework" },
    { name: "TypeScript", description: "Type-safe backend code" },
    { name: "Prisma ORM", description: "Next-gen database toolkit" },
    { name: "PostgreSQL", description: "Enterprise-grade database" },
    { name: "JWT Auth", description: "Secure token authentication" },
    { name: "Zod", description: "Runtime schema validation" },
    { name: "Pino", description: "High-performance logging" },
  ],
  infrastructure: [
    { name: "Background Workers", description: "Async job processing" },
    { name: "Cron Scheduling", description: "Automated sync tasks" },
    { name: "Rate Limiting", description: "API protection" },
    { name: "Helmet.js", description: "Security headers" },
    { name: "SendGrid", description: "Transactional emails" },
    { name: "Swagger/OpenAPI", description: "API documentation" },
  ],
}

const features = [
  {
    icon: Store,
    title: "Multi-Store Management",
    description: "Merchants can manage multiple store locations, each with its own products, orders, and settings—all from a unified dashboard.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time POS Sync",
    description: "Background workers continuously sync products, categories, taxes, and modifiers from OneHubPOS. Changes in the POS reflect in the e-commerce store within minutes.",
  },
  {
    icon: ShoppingCart,
    title: "Complete Order Flow",
    description: "Full shopping experience with cart management, checkout, order tracking, and automatic order push back to the POS system.",
  },
  {
    icon: Lock,
    title: "Dual Authentication",
    description: "Two auth strategies—traditional email/password for customers, and magic link SSO for merchants coming from OneHubPOS portal.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Integrated with NMI and Dejavoo payment gateways with a factory pattern for easy addition of new payment providers.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Three distinct roles—Admin, Owner (Merchant), and User (Customer)—each with tailored permissions and dashboards.",
  },
  {
    icon: Package,
    title: "Product Customization Layer",
    description: "Dual-table architecture allows merchants to customize POS product data (names, descriptions, images) without losing sync capability.",
  },
  {
    icon: Bell,
    title: "Email Notifications",
    description: "Automated transactional emails for order confirmations, status updates, password resets, and email verification via SendGrid.",
  },
]

const architectureHighlights = [
  {
    icon: Layers,
    title: "Dual-Table Pattern",
    description: "POS data is stored in read-only reference tables (pos_stores, pos_products), while customizable e-commerce data lives in separate tables. This preserves data integrity while enabling merchant customization.",
  },
  {
    icon: Workflow,
    title: "Background Worker Architecture",
    description: "A separate Node.js process handles all data synchronization—scheduled syncs, merchant discovery, order pushing, and cleanup tasks. This keeps the API responsive and enables reliable async operations.",
  },
  {
    icon: GitBranch,
    title: "Layered Service Architecture",
    description: "Clean separation between routes, controllers, and services. Business logic lives in services, making the codebase testable, maintainable, and easy to extend.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-layer security with Helmet headers, CORS whitelisting, rate limiting, bcrypt password hashing, short-lived JWTs with refresh token rotation, and comprehensive input validation.",
  },
]

const challenges = [
  {
    challenge: "Real-time data sync without API overload",
    solution: "Implemented delta sync with timestamps—only fetching records modified since the last sync. Combined with configurable cron schedules per store, this reduced API calls by 80% while keeping data fresh.",
  },
  {
    challenge: "Handling POS data changes without losing customizations",
    solution: "Designed a dual-table architecture where POS reference data stays immutable, and merchant customizations layer on top. Updates sync without overwriting custom descriptions, images, or pricing.",
  },
  {
    challenge: "Seamless merchant authentication from external portal",
    solution: "Built magic link authentication that validates Keycloak tokens from OneHubPOS, automatically creates or updates merchant accounts, and issues our own JWT session—all in a single redirect.",
  },
  {
    challenge: "Scaling background jobs reliably",
    solution: "Created a SyncOrchestrator that manages job scheduling, tracks execution history, handles retries with exponential backoff, and provides detailed metrics for monitoring sync health.",
  },
]

const metrics = [
  { value: "50+", label: "API Endpoints", icon: Terminal },
  { value: "25+", label: "Database Tables", icon: Database },
  { value: "6", label: "Weeks to MVP", icon: Clock },
  { value: "100%", label: "TypeScript Coverage", icon: Code2 },
]

export default function EshopCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "REST API"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Eshop
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Enterprise E-commerce Platform with POS Integration
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              A full-stack e-commerce solution that seamlessly integrates with OneHubPOS, enabling merchants
              to launch online stores that stay perfectly synchronized with their point-of-sale system.
              Built with modern technologies and enterprise-grade architecture.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              The client needed an e-commerce platform that could integrate deeply with their existing POS system.
              The key challenges were:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: RefreshCw,
                  title: "Real-Time Data Synchronization",
                  description: "Products, prices, inventory, and categories needed to stay in sync between the POS and e-commerce platform—automatically and reliably.",
                },
                {
                  icon: Users,
                  title: "Dual User Base",
                  description: "Support both end customers (ordering food/products) and merchants (managing their online presence), each with different authentication and permission needs.",
                },
                {
                  icon: Globe,
                  title: "Multi-Store Architecture",
                  description: "Merchants often operate multiple locations. Each store needed its own products, orders, and settings while sharing a common management interface.",
                },
                {
                  icon: Settings,
                  title: "Customization Without Breaking Sync",
                  description: "Merchants wanted to customize product descriptions and images for their online store, but without losing the ability to sync updates from the POS.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              The Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We built a comprehensive e-commerce platform with a sophisticated synchronization engine,
              flexible customization layer, and intuitive interfaces for both customers and merchants.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Architecture Deep Dive
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The architecture was designed for reliability, scalability, and maintainability.
              Here are the key architectural decisions that made this project successful.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {architectureHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We chose modern, battle-tested technologies that would enable rapid development
              while ensuring long-term maintainability and scalability.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Frontend</h3>
              </div>
              <div className="space-y-4">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Backend</h3>
              </div>
              <div className="space-y-4">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Infrastructure</h3>
              </div>
              <div className="space-y-4">
                {techStack.infrastructure.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Every complex project comes with unique challenges. Here's how we tackled them.
            </p>
          </motion.div>

          <div className="space-y-6">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-destructive mb-2">Challenge</div>
                    <p className="text-lg font-medium text-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">Solution</div>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              The Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A production-ready platform that exceeded expectations
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Rapid Development",
                description: "Full MVP delivered in 6 weeks, including complex POS integration, dual auth systems, and comprehensive admin dashboards.",
              },
              {
                icon: BarChart3,
                title: "Scalable Architecture",
                description: "Built to handle growth from day one—background workers, efficient database queries, and caching strategies ensure performance at scale.",
              },
              {
                icon: Shield,
                title: "Production-Ready Security",
                description: "Enterprise-grade security with JWT rotation, rate limiting, input validation, and comprehensive audit logging.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl border border-border bg-card"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BoltBit Consulting Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Why This Project Succeeded
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                This wasn't just about writing code—it was about understanding the business problem
                and architecting a solution that would work today and scale tomorrow.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Deep Technical Expertise",
                    description: "Our team's experience with complex integrations, background processing, and enterprise architecture made the difference.",
                  },
                  {
                    title: "Clear Communication",
                    description: "Weekly demos, detailed documentation, and proactive updates kept everyone aligned throughout the project.",
                  },
                  {
                    title: "Future-Proof Decisions",
                    description: "Every architectural choice was made with scalability and maintainability in mind—no shortcuts, no tech debt.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Want Similar Results?
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're building an e-commerce platform, a SaaS product, or a complex integration—we
                bring the same level of expertise and dedication to every project.
              </p>
              <div className="space-y-4">
                {[
                  "Full-stack development with modern technologies",
                  "Complex third-party integrations",
                  "Background processing and automation",
                  "Scalable, production-ready architecture",
                  "Comprehensive documentation and handoff",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild>
                  <a href="/#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ContactFormInline
            showHeader={true}
            customTitle="Ready to Build Your Project?"
            customDescription="Let's discuss how we can bring your vision to life with the same quality and attention to detail."
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
