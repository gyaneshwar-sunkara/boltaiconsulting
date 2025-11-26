import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormInline } from "@/components/contact-form-inline"
import { ArrowRight, Check, Smartphone, Apple, Zap, Bell, CloudOff, Users } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Solutions - BoltAI Consulting",
  description:
    "Native and cross-platform mobile apps for iOS and Android. Push notifications, offline support, and exceptional user experiences.",
}

export default function MobileSolutionsPage() {
  const features = [
    {
      icon: Apple,
      title: "iOS & Android",
      description: "Native apps for both platforms with platform-specific optimizations.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "React Native and Flutter for unified codebase across platforms.",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Real-time engagement with intelligent notification systems.",
    },
    {
      icon: CloudOff,
      title: "Offline Support",
      description: "Full functionality even without internet connection.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for mobile-first experiences.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed, battery life, and smooth animations.",
    },
  ]

  const benefits = [
    "Native iOS apps (Swift/SwiftUI)",
    "Native Android apps (Kotlin/Jetpack Compose)",
    "Cross-platform apps (React Native/Flutter)",
    "Mobile e-commerce and marketplace apps",
    "Social networking and community apps",
    "Health and fitness tracking apps",
    "On-demand service apps (Uber-like)",
    "Mobile banking and fintech solutions",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Smartphone className="h-4 w-4" />
              <span>Mobile Solutions</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Mobile Apps That Users Love
            </h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
              We create native and cross-platform mobile applications that deliver exceptional user experiences.
              From consumer apps to enterprise solutions, we build mobile products that scale.
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
              Mobile App Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need for a world-class mobile application
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
                Mobile Solutions We Build
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Whether you need a native iOS app, Android app, or cross-platform solution, we deliver excellence.
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
                Flexible Mobile Tech Stack
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                We work with your preferred mobile technologies or recommend the best approach for your app. Here are some of the technologies we specialize in:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">iOS Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Swift, SwiftUI, UIKit, Objective-C, Combine, Core Data, and more
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Android Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Kotlin, Jetpack Compose, Java, Coroutines, Room, Retrofit, Dagger
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Cross-Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    React Native, Flutter, Expo, Ionic, Xamarin, TypeScript
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Backend & Cloud</h4>
                  <p className="text-sm text-muted-foreground">
                    Firebase, AWS Amplify, Azure, Supabase, GraphQL, REST APIs, WebSockets
                  </p>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 shadow-lg">
                <h5 className="text-base font-bold text-foreground mb-2">
                  Your Tech Stack, Not Ours
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Need native performance or prefer cross-platform? We build with whatever technology fits your goals, team expertise, and existing infrastructure. Your choice, our expertise.
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Let's create a mobile experience that your users will love and competitors will envy.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
