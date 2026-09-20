import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { WORK, MODULES, STATUS_TONE, getWork } from "@/lib/work"
import { getPractice, type Practice } from "@/lib/practices"
import { CollectionSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Five projects written up in full: a live net-worth ledger, restaurant back-of-house, a POS-connected storefront, household inventory and our delivery platform.",
  alternates: { canonical: "/work" },
}

/**
 * One body of work, not two categories.
 *
 * Splitting this into "our products" and "client work" put a distinction on
 * the page that no buyer was asking about. The unifying description is true of
 * every entry and is the stronger claim anyway: designed, built and still
 * delivered by us, each written up as a case study.
 */
export default function WorkIndex() {
  const featured = WORK[0]
  const rest = WORK.slice(1)

  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Case studies"
        description="Five systems we designed, shipped and still operate, each written up with the decision that was genuinely hard to get right."
        url="/work"
        items={WORK.map((w) => ({
          name: w.name,
          url: `/work/${w.slug}`,
          description: w.tagline,
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
            <span className="text-accent-foreground">Work</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Work
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              Selected work.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Five projects plus the modules underneath them, with the
              engineering decisions written down rather than summarised. One of them you can open in a browser right now,
              and we can walk you through any of the others on a call.
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
                <a href="/services">What you can buy</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              [String(WORK.length), "Systems built"],
              ["3", "In production today"],
              ["4", "Industries"],
              ["Every one", "written up in full"],
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

      {/* ── featured ───────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">
            Live right now
          </p>

          <a
            href={`/work/${featured.slug}`}
            className="group grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="bg-background p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-md bg-accent px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent-foreground">
                  <featured.icon className="h-3 w-3" />
                  {featured.sector}
                </span>
                <span
                  className={`rounded-md px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${STATUS_TONE[featured.status]}`}
                >
                  {featured.status}
                </span>
              </div>

              <h2 className="mb-3 flex items-start gap-2 font-display text-3xl font-extrabold tracking-[-0.035em] text-foreground md:text-5xl">
                {featured.name}
                <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </h2>
              <p className="mb-5 font-display text-lg font-bold tracking-[-0.02em] text-primary md:text-xl">
                {featured.tagline}
              </p>
              <p className="max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-lg">
                {featured.summary}
              </p>
            </div>

            <div className="flex flex-col justify-between bg-background p-8 md:p-12">
              <dl className="space-y-6">
                {featured.facts.map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                    <dd className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
              {featured.href && (
                <p className="mt-8 inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-primary">
                  {featured.href.replace("https://", "")}
                  <ExternalLink className="h-3 w-3" />
                </p>
              )}
            </div>
          </a>
        </div>
      </section>

      {/* ── the rest ───────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                Everything else
              </p>
              <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-4xl">
                Four more, each with the hard part written down.
              </h2>
            </div>
            <p className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
              Case studies, in detail
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((w) => {
              const practices = w.practices
                .slice(0, 3)
                .map(getPractice)
                .filter((x): x is Practice => Boolean(x))

              return (
                <a
                  key={w.slug}
                  href={`/work/${w.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50 md:p-8"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <w.icon className="h-[18px] w-[18px]" />
                    </div>
                    <span
                      className={`rounded-md px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${STATUS_TONE[w.status]}`}
                    >
                      {w.status}
                    </span>
                  </div>

                  <p className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {w.sector} &middot; {w.year}
                  </p>
                  <h3 className="mb-2 flex items-start gap-1.5 font-display text-xl font-extrabold tracking-[-0.025em] text-foreground">
                    {w.name}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mb-3 font-display text-[0.95rem] font-bold tracking-[-0.01em] text-primary">
                    {w.tagline}
                  </p>
                  <p className="mb-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {w.summary}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {practices.map((p) => (
                      <li
                        key={p.slug}
                        className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] leading-none text-secondary-foreground"
                      >
                        {p.name}
                      </li>
                    ))}
                  </ul>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── modules ────────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                Modules
              </p>
              <h2 className="mb-4 text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-4xl">
                Twelve components that already run.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Smaller than a product, bigger than a feature. Each one is live
                inside the systems above, which is why your project inherits it
                rather than commissioning it.
              </p>
            </div>
            <p className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
              {MODULES.length} modules &middot; all in production
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
            {MODULES.map((m) => {
              const where = m.runningIn
                .map(getWork)
                .filter((x): x is NonNullable<typeof x> => Boolean(x))

              return (
                <div key={m.name} className="flex flex-col bg-background p-7">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <m.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mb-2.5 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
                    {m.name}
                  </h3>
                  <p className="mb-5 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {m.blurb}
                  </p>

                  {/* The receipt: a module is only listed if it is running
                      somewhere you can go and read about. */}
                  <div className="mt-auto border-t border-border pt-4">
                    <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Running in
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {where.map((w) => (
                        <li key={w.slug}>
                          <a
                            href={`/work/${w.slug}`}
                            className="inline-block rounded-md bg-secondary px-2 py-1 text-[0.7rem] leading-none text-secondary-foreground transition-colors hover:text-foreground"
                          >
                            {w.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── why this is the proof ──────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Why we show it this way
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Software you can open beats a logo you can&rsquo;t check.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {[
              {
                n: "01",
                t: "You can see all of it",
                b: "Every architectural decision, every trade-off and every thing we would do differently is written up, and we will go deeper on any of it on a call.",
              },
              {
                n: "02",
                t: "Delivered, not prototyped",
                b: "Three of these run in production today. Getting software live is one skill; keeping it working for a year afterwards teaches a different one.",
              },
              {
                n: "03",
                t: "The status labels are honest",
                b: "Live means live, in development means in development. If a page said shipped and it was not, you would find out in ten minutes and rightly stop reading.",
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
              Tell us what you&rsquo;re trying to build.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We&rsquo;ll come back within one business day with a scope, a number and a
              date.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
