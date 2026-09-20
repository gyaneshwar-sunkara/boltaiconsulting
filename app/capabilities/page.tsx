import type { Metadata } from "next"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import {
  PRACTICES, PRACTICE_GROUPS, CAPABILITY_COUNT, getPractice, type Practice,
} from "@/lib/practices"
import { CollectionSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Capabilities",
  description: `Twenty practice areas and ${CAPABILITY_COUNT} capabilities under one delivery team — engineering, AI, data, integration, cloud, security, design, growth and managed services.`,
  alternates: { canonical: "/capabilities" },
}

export default function CapabilitiesIndex() {
  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Capabilities"
        description={`Twenty practice areas and ${CAPABILITY_COUNT} capabilities held in house across six disciplines.`}
        url="/capabilities"
        items={PRACTICES.map((p) => ({
          name: p.name,
          url: `/capabilities/${p.slug}`,
          description: p.summary,
        }))}
      />
      <Header />

      {/* ── hero ───────────────────────────────────────────── */}
      <section className="bd bd-dots overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">Capabilities</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Capabilities
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              Everything we do, written down.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Twenty practice areas under one delivery team. Most engagements
              draw on four or five of them at once, and you are quoted a single
              number for the outcome rather than a line item per discipline.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="/contact">Start a conversation<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/services">See how you buy it</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              [String(PRACTICES.length), "Practice areas"],
              [String(CAPABILITY_COUNT), "Capabilities"],
              [String(PRACTICE_GROUPS.length), "Disciplines"],
              ["One team", "No handoffs between vendors"],
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

      {/* ── the groups ─────────────────────────────────────── */}
      {PRACTICE_GROUPS.map((group, gi) => {
        const items = group.slugs
          .map(getPractice)
          .filter((x): x is Practice => Boolean(x))

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
                <p className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {items.length} practice {items.length === 1 ? "area" : "areas"}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {items.map((p) => (
                  <a
                    key={p.slug}
                    href={`/capabilities/${p.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50 md:p-8"
                  >
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <p.icon className="h-[18px] w-[18px]" />
                    </div>

                    <h3 className="mb-2 flex items-start gap-1.5 font-display text-xl font-extrabold tracking-[-0.025em] text-foreground">
                      {p.name}
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <p className="mb-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>

                    <ul className="mt-auto grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
                      {p.covers.map((c) => (
                        <li
                          key={c.title}
                          className="flex items-start gap-2 text-[0.82rem] leading-snug text-muted-foreground"
                        >
                          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {c.title}
                        </li>
                      ))}
                    </ul>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── close ──────────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Not sure which of these you need?
            </h2>
            <p className="mb-9 text-lg leading-relaxed text-muted-foreground">
              Most people are not, and working that out is the first week of the
              engagement. Describe the problem in your own words and we&rsquo;ll map it
              to the areas that apply.
            </p>
            <Button
              size="lg"
              className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/contact">Tell us what you&rsquo;re trying to build<ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
