import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { TechMarquee } from "@/components/tech-marquee"
import { Services } from "@/components/services"
import { Capabilities } from "@/components/capabilities"
import { Platform } from "@/components/platform"
import { WorkPreview } from "@/components/work-preview"
import { Industries } from "@/components/industries"
import { Engagements } from "@/components/engagements"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { TechFlexibility } from "@/components/tech-flexibility"
import { Team } from "@/components/team"
import { Insights } from "@/components/insights"
import { ContactFormInline } from "@/components/contact-form-inline"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

/**
 * Section order follows the argument a buyer makes in their head:
 *
 *   what you do  →  why you're fast  →  proof you've done it  →
 *   what you've shipped  →  who you serve  →  what it costs  →
 *   how it runs  →  who I'd work with  →  do they know the field  →  contact
 *
 * Pricing sits deliberately before process: a buyer who can't afford you
 * should find that out before reading three more sections.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <TechMarquee />

      {/* The page alternates weight as you scroll: dark, light, dark, light.
          Fixes two things at once — every section looking identical, and the
          whole page reading too airy. */}
      <div className="band-alt">
        <Services />
        <Capabilities />
      </div>

      <Platform />


      <WorkPreview />

      <div className="band-alt">
        <Industries />
      </div>

      <Engagements />

      <div className="band-alt">
        <HowItWorks />
        <Features />
      </div>

      <TechFlexibility />

      <div className="band-alt">
        <Team />
      </div>

      <Insights />

      <section id="contact" className="band-alt border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Get in touch
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Tell us what you&rsquo;re trying to build.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We&rsquo;ll come back within one business day with a scope, a number and a
              date &mdash; or an honest no if we&rsquo;re not the right people for it.
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
