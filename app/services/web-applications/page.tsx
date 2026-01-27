import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormInline } from "@/components/contact-form-inline"
import { ArrowRight, Check, Code, Smartphone, Zap, Shield, Database, Cpu } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Applications - BoltBit Consulting",
  description:
    "Full-stack web applications built with modern frameworks and AI-powered features. React, Next.js, real-time features, and more.",
}

export default function WebApplicationsPage() {
  const features = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "Built with React, Next.js, and TypeScript for type-safe, maintainable code.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with server-side rendering and edge computing.",
    },
    {
      icon: Database,
      title: "Real-time Features",
      description: "WebSockets, live updates, and real-time collaboration built-in.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Authentication, authorization, and data encryption out of the box.",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect experience on desktop, tablet, and mobile devices.",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Intelligent features powered by GPT-4, Claude, and custom AI models.",
    },
  ]

  const benefits = [
    "Custom dashboards and admin panels",
    "E-commerce platforms and marketplaces",
    "SaaS products and web applications",
    "Customer portals and internal tools",
    "API integration and third-party services",
    "Progressive Web Apps (PWA)",
    "Content Management Systems (CMS)",
    "Real-time collaboration tools",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Code className="h-4 w-4" />
              <span>Web Applications</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Full-Stack Web Applications Built for Scale
            </h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
              We build modern, responsive web applications using cutting-edge frameworks and AI-powered features.
              From MVPs to enterprise platforms, we deliver fast, secure, and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:border-primary/50 transition-all">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Solutions We Deliver
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                From simple landing pages to complex enterprise applications, we've got you covered.
              </p>

              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 border-border bg-card">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">
                Flexible Tech Stack
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                We work with your preferred technologies or recommend the best stack for your project. Here are some of the technologies we excel at:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Frontend</h4>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, Vue, Angular, TypeScript, Tailwind CSS, Framer Motion, and more
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Backend</h4>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Python, Django, Flask, Ruby on Rails, Java, .NET, Go, PHP
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Databases</h4>
                  <p className="text-sm text-muted-foreground">
                    PostgreSQL, MongoDB, MySQL, Redis, DynamoDB, Supabase, Firebase
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">
                    AWS, Azure, Google Cloud, Vercel, Netlify, Docker, Kubernetes, CI/CD
                  </p>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 shadow-lg">
                <h5 className="text-base font-bold text-foreground mb-2">
                  Your Tech Stack, Not Ours
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have a different tech stack in mind? That's our specialty. We adapt to your existing infrastructure, team preferences, and business requirements - no forced migrations, no vendor lock-in.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Build Your Web Application?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Let's discuss your project and create a custom solution that exceeds your expectations.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
