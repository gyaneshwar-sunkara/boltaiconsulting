import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormInline } from "@/components/contact-form-inline"
import { ArrowRight, Code, Smartphone, Brain, Zap, Users, TrendingUp } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - BoltBit Consulting",
  description:
    "Explore our AI-powered software development services: Web Applications, Mobile Solutions, and AI Integration.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description:
        "Full-stack web experiences that users love. From SaaS dashboards to e-commerce platforms, we build fast, scalable apps using React, Next.js, and your preferred backend stack. No bloat, just powerful features that drive results.",
      features: [
        "Custom SaaS platforms with real-time collaboration",
        "E-commerce stores with smart recommendations",
        "Internal tools and admin dashboards",
        "API development and third-party integrations",
        "Progressive Web Apps that work offline",
        "AI-powered search and personalization",
      ],
      link: "/services/web-applications",
      example: "Recent: Built a real-time analytics dashboard in 2 weeks (traditional estimate: 3 months)",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Native iOS and Android apps that feel buttery smooth. Whether you need cross-platform speed or native performance, we deliver mobile experiences users can't put down. Built with React Native, Flutter, or native Swift/Kotlin.",
      features: [
        "Consumer apps with social features",
        "Mobile-first marketplaces and platforms",
        "Health, fitness, and wellness tracking",
        "Offline-first apps with sync capabilities",
        "Push notifications and real-time updates",
        "In-app payments and subscriptions",
      ],
      link: "/services/mobile-solutions",
      example: "Recent: Launched cross-platform fitness app in 3 weeks (traditional estimate: 4 months)",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Make your product intelligent. From ChatGPT-powered assistants to custom ML models, we embed AI that actually solves problems. Not AI for AI's sake - we build features that users love and that move your metrics.",
      features: [
        "Smart chatbots that understand context",
        "AI-powered content generation and editing",
        "Image recognition and computer vision",
        "Predictive analytics and recommendations",
        "Voice interfaces and transcription",
        "Document processing and data extraction",
      ],
      link: "/services/ai-integration",
      example: "Recent: Integrated GPT-4 chatbot with 95% accuracy in 1 week (traditional estimate: 6 weeks)",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Ship in Days, Not Months",
      description: "Our AI-powered workflow cuts development time by 90%. What takes traditional agencies 3 months, we deliver in 1-2 weeks.",
    },
    {
      icon: TrendingUp,
      title: "70% Lower Costs",
      description: "Pay $10k instead of $50k for the same quality. AI handles the repetitive work, our experts handle the complexity.",
    },
    {
      icon: Users,
      title: "Your Stack, Your Rules",
      description: "We adapt to your tech preferences. React or Angular, AWS or Azure - we work with what you need, not what we prefer.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span>AI-Powered Development</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Ship Software 10x Faster with AI
            </h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl max-w-3xl mx-auto">
              From idea to production in days, not months. We combine cutting-edge AI tools with expert development to build web apps, mobile solutions, and intelligent features at a fraction of traditional costs.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10x</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">70%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">1-4</div>
                <div className="text-sm text-muted-foreground">Weeks to Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 md:p-12 border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  <div>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-card-foreground">
                      {service.title}
                    </h2>
                    <p className="mb-6 text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-foreground font-medium">{service.example}</p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={service.link}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                      What We Build
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The BoltBit Consulting Advantage
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Traditional agencies charge more and deliver slower. We flip that equation using AI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="p-8 border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Tell us about your project and let's build something amazing together.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
