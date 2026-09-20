import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { IndustrySchema } from "@/components/json-ld"
import { INDUSTRIES, type Industry } from "@/lib/industries"
import { getService, MODEL_LABEL, type ServiceEntry } from "@/lib/services"
import { getPractice, type Practice } from "@/lib/practices"
import { getWork, STATUS_TONE, type WorkItem } from "@/lib/work"

/**
 * An industry page argues that we understand a sector's problems, then shows
 * where the capability was proven. The "comes from" block is the load-bearing
 * part: it names real systems rather than implying a client list, so a
 * prospect can judge the transfer for themselves.
 */
export function IndustryPage({ ind }: { ind: Industry }) {
  const services = ind.services
    .map(getService)
    .filter((x): x is ServiceEntry => Boolean(x))
  const practices = ind.practices
    .map(getPractice)
    .filter((x): x is Practice => Boolean(x))
  const work = ind.work.map(getWork).filter((x): x is WorkItem => Boolean(x))
  const others = INDUSTRIES.filter((i) => i.slug !== ind.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <IndustrySchema
        name={ind.name}
        description={ind.metaDescription}
        url={`/industries/${ind.slug}`}
        services={services.map((s) => s.name)}
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
            <a href="/industries" className="transition-colors hover:text-foreground">Industries</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">{ind.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              <ind.icon className="h-3.5 w-3.5" />
              {ind.name}
            </div>

            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              {ind.tagline}
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {ind.summary}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#enquire">Talk to us about this<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/work">See what we have built</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {ind.facts.map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── problems ───────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              What we hear
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              If any of this sounds familiar&hellip;
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {ind.problems.map((p, i) => (
              <div key={p.title} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {p.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── what we build ──────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              What we build
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              The pieces this sector actually needs.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {ind.build.map((b) => (
              <div key={b.title} className="flex gap-4 bg-background p-7">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-display text-[1.02rem] font-bold leading-snug tracking-[-0.02em] text-foreground">
                    {b.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── where it comes from ────────────────────────────── */}
      <section className="bd bd-spot overflow-hidden border-t border-border bg-background py-18 md:py-24">
        <div className="container relative mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                Where this comes from
              </p>
              <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                Proven somewhere real.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{ind.comesFrom}</p>
            </div>

            {work.length > 0 && (
              <div>
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Go and read it
                </p>
                <div className="space-y-2">
                  {work.map((w) => (
                    <a
                      key={w.slug}
                      href={`/work/${w.slug}`}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <w.icon className="h-[18px] w-[18px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-start gap-1.5 font-display text-base font-bold tracking-[-0.02em] text-card-foreground">
                          {w.name}
                          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </p>
                        <p className="mt-0.5 text-[0.85rem] leading-snug text-muted-foreground">
                          {w.tagline}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] ${STATUS_TONE[w.status]}`}
                      >
                        {w.status}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── services + practices ───────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              How it is bought
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Usually one of these engagements.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-1 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {s.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {MODEL_LABEL[s.model]}
                </p>
                <p className="text-[0.88rem] leading-relaxed text-muted-foreground">{s.summary}</p>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Practice areas that apply
            </p>
            <ul className="flex flex-wrap gap-2">
              {practices.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/capabilities/${p.slug}`}
                    className="inline-block rounded-md border border-border bg-background px-3 py-2 text-[0.82rem] leading-none text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── other industries ───────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Other sectors we work in
            </p>
            <a
              href="/industries"
              className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
            >
              All {INDUSTRIES.length} industries &rarr;
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <a
                key={o.slug}
                href={`/industries/${o.slug}`}
                className="group rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <o.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {o.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{o.blurb}</p>
              </a>
            ))}
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
