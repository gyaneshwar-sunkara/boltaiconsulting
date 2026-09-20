import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { PracticeSchema } from "@/components/json-ld"
import { getPractice, type Practice } from "@/lib/practices"
import { servicesForPractice, MODEL_LABEL } from "@/lib/services"
import { workForPractice, STATUS_TONE } from "@/lib/work"
import { postsForPractice } from "@/lib/blog"

/**
 * A practice page sells depth; a service page sells a package with a price.
 * They are deliberately built from different parts so the two layers do not
 * read as the same page twice — this one leads on the work and the opinions,
 * and hands off to the priced service at the bottom.
 *
 * Sections alternate between the base surface and .band-alt for the same
 * reason the home page does: every section looking identical is what made the
 * old site read flat. The band shifts relative to the active theme, so this
 * stays a rhythm rather than becoming a white panel in dark mode.
 */
export function PracticePage({ p }: { p: Practice }) {
  const siblings = p.related
    .map(getPractice)
    .filter((x): x is Practice => Boolean(x))

  /* Derived, never declared here: the service registry says which services
     include this practice, so the two layers cannot disagree about each
     other no matter which side someone edits. */
  const services = servicesForPractice(p.slug)
  /* Proof, derived from the work registry rather than restated here. */
  const proof = workForPractice(p.slug)
  const posts = postsForPractice(p.slug)

  return (
    <main className="min-h-screen bg-background">
      <PracticeSchema
        name={p.name}
        description={p.metaDescription}
        url={`/capabilities/${p.slug}`}
        covers={p.covers.map((c) => c.title)}
        faqs={p.faqs}
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
            <a href="/capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">{p.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              <p.icon className="h-3.5 w-3.5" />
              <span>{p.name}</span>
            </div>

            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              {p.title}
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {p.lede}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#enquire">Talk to us about this<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              {services[0] && (
                <Button size="lg" variant="outline" className="font-semibold" asChild>
                  <a href={`/services/${services[0].slug}`}>
                    See {services[0].name}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {p.facts.map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── signals ────────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Who this is for
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              You probably need this if&hellip;
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {p.signals.map((s, i) => (
              <div key={s.title} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {s.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── what this covers ───────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                What this covers
              </p>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                The work, in detail.
              </h2>
            </div>
            <p className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
              {p.covers.length} capabilities
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {p.covers.map((c, i) => (
              <div key={c.title} className="flex gap-5 rounded-xl border border-border bg-background p-7">
                <p className="w-8 shrink-0 font-mono text-[0.68rem] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── how we approach it ─────────────────────────────── */}
      <section className="bd bd-mesh overflow-hidden border-t border-border bg-background py-18 md:py-24">
        <div className="container relative mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
              How we approach it
            </p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Positions we actually hold.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Opinions cost something to have. These are the ones we would argue
              for on your project, including where they make the work slower.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {p.principles.map((pr, i) => (
              <div
                key={pr.title}
                className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                <p className="mb-4 font-mono text-[0.68rem] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-card-foreground">
                  {pr.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── stack + evidence ───────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Technology
              </p>
              <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                What we work with.
              </h2>
              <p className="mb-9 text-lg leading-relaxed text-muted-foreground">
                Defaults, not requirements. If you already run something else and
                have a team who knows it, we work in yours.
              </p>
              <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {p.stack.map((s) => (
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
              <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Where this shows up in delivery
              </p>
              <ul className="mb-9 space-y-4">
                {p.evidence.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{e}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Bought as part of
              </p>
              <div className="space-y-2">
                {services.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <s.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-start gap-1.5 font-display text-base font-bold tracking-[-0.02em] text-card-foreground">
                        {s.name}
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </p>
                      <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {MODEL_LABEL[s.model]}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">
                This practice is never sold on its own. It is quoted inside one
                of the engagements above, as part of a single number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── proof ──────────────────────────────────────────── */}
      {proof.length > 0 && (
        <section className="border-t border-border py-18 md:py-24">
          <div className="container mx-auto px-4 py-4 md:px-6">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                  Proof
                </p>
                <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                  Where we have actually done this.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Projects we designed, shipped and wrote up. Each one names the
                  decision that was genuinely hard to get right.
                </p>
              </div>
              <a
                href="/work"
                className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
              >
                All our work &rarr;
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {proof.map((w) => (
                <a
                  key={w.slug}
                  href={`/work/${w.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
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
                    {w.sector}
                  </p>
                  <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {w.name}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {w.tagline}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── faq ────────────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Questions
              </p>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                What people ask about {p.name.toLowerCase()}.
              </h2>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {p.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {f.q}
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── related reading ────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="border-t border-border py-18 md:py-24">
          <div className="container mx-auto px-4 py-4 md:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">
                  Related reading
                </p>
                <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-3xl">
                  Written on this, by us.
                </h2>
              </div>
              <a
                href="/blog"
                className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
              >
                All insights &rarr;
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {post.category} &middot; {post.readTime}
                  </p>
                  <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
                    {post.title}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── related practices ──────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Usually combined with
            </p>
            <a
              href="/capabilities"
              className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
            >
              All practice areas &rarr;
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {siblings.map((s) => (
              <a
                key={s.slug}
                href={`/capabilities/${s.slug}`}
                className="group rounded-xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {s.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{s.summary}</p>
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
              Describe the problem in your own words. We&rsquo;ll come back within one
              business day with a scope, a number and a date.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
