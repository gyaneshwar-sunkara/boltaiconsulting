"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Shield,
  Code2,
  Sparkles,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

const projects = [
  {
    slug: "eshop-pos-ecommerce",
    title: "Eshop - Enterprise E-commerce Platform",
    subtitle: "POS-Integrated Online Ordering System",
    description: "A full-stack e-commerce platform that seamlessly integrates with OneHubPOS, enabling merchants to manage online stores synced with their point-of-sale data in real-time.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "REST API"],
    metrics: [
      { label: "Development Time", value: "6 weeks" },
      { label: "API Endpoints", value: "50+" },
      { label: "Code Coverage", value: "Enterprise-grade" },
    ],
    featured: true,
  },
  // Add more projects here as you complete them
]

const whyChooseUs = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "We ship production-ready software in weeks, not months. Our AI-augmented workflow means you get quality code faster than traditional agencies.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "We use the latest technologies—React, Next.js, Node.js, TypeScript, AI integrations—ensuring your product is built for scale and maintainability.",
  },
  {
    icon: Shield,
    title: "Production-Grade Quality",
    description: "Enterprise-level security, comprehensive error handling, and battle-tested architecture. We don't cut corners on the things that matter.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "From day one, we architect systems that can handle growth. Background workers, caching layers, and optimized databases come standard.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-muted-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Real Projects. Real Results.</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Our Work Speaks
              <span className="block text-primary">For Itself</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just build software—we craft solutions that solve real business problems.
              Explore our portfolio to see the quality, speed, and innovation we bring to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Featured Project
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A deep dive into one of our recent enterprise-level builds
              </p>
            </div>

            {projects.filter(p => p.featured).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Project Header */}
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary/80 font-medium mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground max-w-3xl mb-8">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center md:text-left">
                          <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>View Full Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Clients Choose BoltBit Consulting
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another dev shop. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                What You Get When You Work With Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Every project includes our full commitment to quality, communication, and results.
                No hidden costs, no surprises—just exceptional software delivered on time.
              </p>

              <div className="space-y-4">
                {[
                  "Complete source code ownership—it's yours forever",
                  "Comprehensive documentation and handoff",
                  "Post-launch support and maintenance options",
                  "Direct communication with senior engineers",
                  "Weekly progress updates and demos",
                  "Scalable architecture from day one",
                  "Security best practices built-in",
                  "Performance optimization included",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Our Process
                  </h3>
                </div>

                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery Call", desc: "We understand your vision, goals, and technical requirements" },
                    { step: "02", title: "Proposal & Planning", desc: "Detailed scope, timeline, and transparent pricing" },
                    { step: "03", title: "Design & Build", desc: "Rapid development with weekly demos and feedback loops" },
                    { step: "04", title: "Launch & Support", desc: "Deployment, documentation, and ongoing partnership" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project. Whether you have a detailed spec or just an idea,
              we'll help you figure out the best path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
