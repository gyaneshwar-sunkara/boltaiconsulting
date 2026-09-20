import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { WORK, STATUS_TONE, type WorkItem } from "@/lib/work"
import { DualTableDiagram } from "@/components/diagrams"
import { getService, MODEL_LABEL, type ServiceEntry } from "@/lib/services"
import { getPractice, type Practice } from "@/lib/practices"

/**
 * A case study page.
 *
 * Structured as an argument rather than a brochure: here was the situation,
 * here is how it was approached, here is the decision that was actually hard,
 * and here is honestly where it stands today. The hard-part section is the one
 * that matters — anyone can list features, and a specific engineering decision
 * with a reason behind it is the thing a technical buyer is reading for.
 */
export function WorkPage({ w }: { w: WorkItem }) {
  const services = w.services
    .map(getService)
    .filter((x): x is ServiceEntry => Boolean(x))
  const practices = w.practices
    .map(getPractice)
    .filter((x): x is Practice => Boolean(x))
  const others = WORK.filter((x) => x.slug !== w.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
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
            <a href="/work" className="transition-colors hover:text-foreground">Work</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">{w.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                <w.icon className="h-3.5 w-3.5" />
                {w.sector}
              </span>
              <span
                className={`inline-flex items-center rounded-md px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${STATUS_TONE[w.status]}`}
              >
                {w.status}
              </span>
              <span className="inline-flex items-center rounded-md border border-border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {w.year}
              </span>
            </div>

            <h1 className="mb-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              {w.name}
            </h1>
            <p className="mb-6 font-display text-xl font-bold tracking-[-0.02em] text-primary md:text-2xl">
              {w.tagline}
            </p>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {w.summary}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {w.href ? (
                <Button
                  size="lg"
                  className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={w.href} target="_blank" rel="noopener noreferrer">
                    Open {w.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="/contact">Ask for a walkthrough<ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/work">See the rest of our work</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {w.facts.map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── problem ────────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                The problem
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-balance font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.035em] text-foreground md:text-4xl">
                {w.problem.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{w.problem.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── approach ───────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              How it was built
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              In order, and why.
            </h2>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {w.approach.map((a) => (
              <li key={a.phase} className="flex gap-5 bg-background p-7">
                <div className="w-14 shrink-0">
                  <p className="font-mono text-[0.68rem] text-primary">{a.phase}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {a.label}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── the hard part ──────────────────────────────────── */}
      <section className="bd bd-spot overflow-hidden border-t border-border bg-background py-18 md:py-24">
        <div className="container relative mx-auto px-4 py-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
              The part that was actually hard
            </p>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              {w.hardPart.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{w.hardPart.body}</p>

            {w.slug === "eshop-pos-ecommerce" && (
              <DualTableDiagram className="mt-10" />
            )}
          </div>
        </div>
      </section>

      {/* ── what it does ───────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              What it does
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              The features that carry it.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {w.highlights.map((h, i) => (
              <div key={h.title} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {h.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── what changed ───────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Outcome
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              What actually changed.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {w.outcome.map((o, i) => (
              <div key={o.title} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
                  {o.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── the retrospective ──────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              In hindsight
            </p>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              What we would do differently.
            </h2>
            <p className="border-l-2 border-primary pl-6 text-lg leading-relaxed text-muted-foreground">
              {w.differently}
            </p>
          </div>
        </div>
      </section>

      {/* ── stack + standing ───────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Built with
              </p>
              <h2 className="mb-9 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                The stack underneath.
              </h2>
              <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {w.stack.map((s) => (
                  <div key={s.group} className="bg-background p-6">
                    <dt className="mb-2.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent-foreground">
                      {s.group}
                    </dt>
                    <dd className="text-[0.92rem] leading-relaxed text-muted-foreground">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Where it stands today
              </p>
              <p className="mb-8 text-[0.98rem] leading-relaxed text-foreground/80">
                {w.standing}
              </p>

              {practices.length > 0 && (
                <>
                  <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Practice areas this evidences
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {practices.map((p) => (
                      <li key={p.slug}>
                        <a
                          href={`/capabilities/${p.slug}`}
                          className="inline-block rounded-md border border-border bg-secondary px-2.5 py-1.5 text-[0.78rem] leading-none text-secondary-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                        >
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── buy this kind of work ──────────────────────────── */}
      {services.length > 0 && (
        <section className="border-t border-border py-18 md:py-24">
          <div className="container mx-auto px-4 py-4 md:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Want something like this
              </p>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                This is bought as{services.length > 1 ? " one of these" : ""}.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <s.icon className="h-[18px] w-[18px]" />
                    </div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {MODEL_LABEL[s.model]}
                    </p>
                  </div>
                  <h3 className="mb-1 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {s.name}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {MODEL_LABEL[s.model]}
                  </p>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── more work ──────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              More of what we have built
            </p>
            <a
              href="/work"
              className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
            >
              All work &rarr;
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <a
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <o.icon className="h-[18px] w-[18px]" />
                  </div>
                  <span
                    className={`rounded-md px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${STATUS_TONE[o.status]}`}
                  >
                    {o.status}
                  </span>
                </div>
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {o.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{o.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── enquire ────────────────────────────────────────── */}
      <section id="enquire" className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Tell us what you&rsquo;re trying to build.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If something here looks like the problem you have, say so and we&rsquo;ll
              tell you how close it actually is.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
