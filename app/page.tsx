import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { HowItWorks } from "@/components/how-it-works"
import { TechFlexibility } from "@/components/tech-flexibility"
import { ContactFormInline } from "@/components/contact-form-inline"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <TechFlexibility />
      <Features />
      <Services />
      <HowItWorks />
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Ready to build something amazing? Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
