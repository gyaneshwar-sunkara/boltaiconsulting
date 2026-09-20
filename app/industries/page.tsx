import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { INDUSTRIES } from "@/lib/industries"
import { getWork } from "@/lib/work"
import { CollectionSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Software for restaurants, retail, financial services, logistics, manufacturing, field service, property, health and membership. Twelve sectors, each evidenced.",
  alternates: { canonical: "/industries" },
}

/**
 * The index deliberately shows which systems back each sector. A prospect can
 * tell at a glance whether we have shipped in their industry or whether the
 * pattern transfers from a neighbouring one, without having to open the page
 * and hunt for it.
 */
export default function IndustriesIndex() {
  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Industries"
        description="Twelve sectors we build for, each with the systems that evidence it named on the page."
        url="/industries"
        items={INDUSTRIES.map((i) => ({
          name: i.name,
          url: `/industries/${i.slug}`,
          description: i.summary,
        }))}
      />
      <Header />

      {/* ── hero ───────────────────────────────────────────── */}
      <section className="bd bd-mesh overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">Industries</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Industries
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              The same problems, wearing different uniforms.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Multi-location permissions, stock that has to agree with a shelf,
              money that has to reconcile, and software used somewhere with no
              signal. Those do not care what the business sells. Every page here
              names the system the capability was proven in.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#enquire">Start a conversation<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/work">See what we have built</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              [String(INDUSTRIES.length), "Sectors"],
              ["4", "With a system of ours in them"],
              ["12", "Services behind them"],
              ["No guessing", "every page names its source"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── the grid ───────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRIES.map((ind) => {
              const backing = ind.work.map(getWork).filter(Boolean)
              return (
                <a
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col bg-background p-7 transition-colors hover:bg-secondary/50 md:p-8"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <ind.icon className="h-5 w-5" />
                  </div>

                  <h2 className="mb-2 flex items-start gap-1.5 font-display text-xl font-extrabold tracking-[-0.025em] text-foreground">
                    {ind.name}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h2>
                  <p className="mb-4 font-display text-[0.92rem] font-bold tracking-[-0.01em] text-primary">
                    {ind.tagline}
                  </p>
                  <p className="mb-6 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {ind.blurb}
                  </p>

                  <div className="mt-auto border-t border-border pt-4">
                    <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Proven in
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {backing.map((w) => (
                        <li
                          key={w!.slug}
                          className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] leading-none text-secondary-foreground"
                        >
                          {w!.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── not on the list ────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Not on the list
            </p>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Your sector matters less than your problem.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The questions that decide whether we are a good fit are the same
              everywhere: does authority change depending on where somebody is
              standing, does the software get used somewhere with no signal,
              does money have to reconcile, and do two systems need to agree.
              Describe how your business runs and we will tell you which of
              those you have.
            </p>
          </div>
        </div>
      </section>

      {/* ── enquire ────────────────────────────────────────── */}
      <section id="enquire" className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Tell us how your business actually runs.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The process, not the software you think you need. We&rsquo;ll come back
              within one business day.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
