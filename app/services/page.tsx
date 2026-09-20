import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import {
  SERVICES, SERVICE_GROUPS, MODEL_LABEL, getService, practicesForService,
} from "@/lib/services"
import { PRACTICES } from "@/lib/practices"
import { CollectionSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve services across web, mobile, ecommerce, AI, integration, data and cloud. Fixed scope and a fixed price, quoted against a written specification.",
  alternates: { canonical: "/services" },
}

/**
 * Grouped by billing model rather than by technology, because that is the
 * first thing that disqualifies a buyer. Somebody who needs a retainer should
 * not have to read four project pages to work out that we do those too.
 */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Services"
        description="Twelve services across web, mobile, ecommerce, AI, integration, data and cloud, each quoted as a fixed price against a written specification."
        url="/services"
        items={SERVICES.map((s) => ({
          name: s.name,
          url: `/services/${s.slug}`,
          description: s.summary,
        }))}
      />
      <Header />

      {/* ── hero ───────────────────────────────────────────── */}
      <section className="bd bd-spot overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">Services</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Services
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              Twelve ways to work with us.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Grouped by how you buy rather than by technology. Most are a fixed
              price against a written specification. Two are monthly retainers,
              and one is the week of work that tells you which you need.
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
                <a href="/capabilities">See the practice areas</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              [String(SERVICES.length), "Services"],
              [String(PRACTICES.length), "Practice areas behind them"],
              ["Week 1", "Written scope, before any code"],
              ["Fixed", "The number does not move"],
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

      {/* ── groups ─────────────────────────────────────────── */}
      {SERVICE_GROUPS.map((group, gi) => {
        const items = group.slugs.map(getService).filter(Boolean)

        return (
          <section
            key={group.name}
            className={`border-t border-border py-18 md:py-24 ${gi % 2 === 1 ? "band-alt" : ""}`}
          >
            <div className="container mx-auto px-4 py-4 md:px-6">
              <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                    {String(gi + 1).padStart(2, "0")} &mdash; {group.name}
                  </p>
                  <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-4xl">
                    {group.blurb}
                  </h2>
                </div>
                <p className="shrink-0 rounded-md border border-border px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {group.billing}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {items.map((s) => {
                  if (!s) return null
                  const practices = practicesForService(s.slug)
                  return (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50 md:p-8"
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <s.icon className="h-[18px] w-[18px]" />
                        </div>
                        <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                          {MODEL_LABEL[s.model]}
                        </p>
                      </div>

                      <h3 className="mb-2 flex items-start gap-1.5 font-display text-xl font-extrabold tracking-[-0.025em] text-foreground">
                        {s.name}
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="mb-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                        {s.summary}
                      </p>

                      <div className="mt-auto border-t border-border pt-4">
                        <p className="mb-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                          Draws on
                        </p>
                        <ul className="flex flex-wrap gap-1.5">
                          {practices.map((p) => (
                            <li
                              key={p.slug}
                              className="rounded-md bg-secondary px-2 py-1 text-[0.72rem] leading-none text-secondary-foreground"
                            >
                              {p.name}
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
        )
      })}

      {/* ── how pricing works ──────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              How pricing works
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              The number is agreed before we start.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Week one is scope",
                b: "We watch how the work happens now and write a specification you sign. No code until you have agreed what it is, because that week is the cheapest place to change your mind.",
              },
              {
                n: "02",
                t: "Quoted against the spec",
                b: "One number for the outcome, not a line item per discipline. It does not move after you sign. If you change the scope, we re-quote the difference in writing first.",
              },
              {
                n: "03",
                t: "Most engagements combine several",
                b: "A build with an integration and a search retainer behind it is normal. You get one scope, one schedule and one point of contact rather than three vendors.",
              },
            ].map((x) => (
              <div key={x.n} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-primary">{x.n}</p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {x.t}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── enquire ────────────────────────────────────────── */}
      <section id="enquire" className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Not sure which one you need?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Most people are not, and that is what the first call is for. Describe
              the problem in your own words and we&rsquo;ll tell you which of the
              twelve it is, and roughly what it costs.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
