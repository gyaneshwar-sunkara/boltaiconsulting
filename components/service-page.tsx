import type { LucideIcon } from "lucide-react"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { ServiceSchema } from "@/components/json-ld"
import { practicesForService, MODEL_LABEL, getService } from "@/lib/services"
import { workForService, STATUS_TONE } from "@/lib/work"
import { postsForService } from "@/lib/blog"

export type ServiceConfig = {
  /** Registry key. Drives the practice areas listed on the page. */
  slug: string
  eyebrow: string
  icon: LucideIcon
  title: string
  lede: string
  facts: [string, string][]
  /** The signals a buyer recognises in their own business. */
  forWho: { title: string; body: string }[]
  capabilities: { icon: LucideIcon; title: string; body: string }[]
  process: { phase: string; label: string; body: string }[]
  deliverables: string[]
  stack: { group: string; items: string }[]
  pricing: { duration: string; note: string }
  faqs: { q: string; a: string }[]
  related: { href: string; label: string; blurb: string }[]
  closing: { title: string; body: string }
  /** Feeds Service + Offer structured data. */
  schema: { path: string }
}

export function ServicePage({ c }: { c: ServiceConfig }) {
  const practices = practicesForService(c.slug)
  const entry = getService(c.slug)
  /* Proof, derived from the work registry rather than restated here. */
  const proof = workForService(c.slug)
  const posts = postsForService(c.slug)

  return (
    <main className="min-h-screen bg-background">
      <ServiceSchema
        name={c.eyebrow}
        description={c.lede}
        url={c.schema.path}
        faqs={c.faqs}
      />
      <Header />

      {/* ── hero ───────────────────────────────────────────── */}
      <section className="bd bd-spot overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span className="mx-2 text-border">/</span>
            <a href="/services" className="transition-colors hover:text-foreground">Services</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">{c.eyebrow}</span>
          </nav>

          <div className="max-w-3xl">
            {/* The billing model sits next to the name because it is the first
                thing that disqualifies a buyer, and they should find that out
                here rather than four sections down. */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                <c.icon className="h-3.5 w-3.5" />
                {c.eyebrow}
              </span>
              {entry && (
                <span className="inline-flex items-center rounded-md border border-border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {MODEL_LABEL[entry.model]}
                </span>
              )}
            </div>

            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              {c.title}
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {c.lede}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#enquire">Start a project<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/work">See our work</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {c.facts.map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── who this is for ────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40 py-18 md:py-24">
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
            {c.forWho.map((f, i) => (
              <div key={f.title} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">{f.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── capabilities ───────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              What we build
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              The work, in detail.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.capabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-card-foreground">{cap.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── practice areas behind it ───────────────────────── */}
      {practices.length > 0 && (
        <section className="band-alt border-t border-border py-18 md:py-24">
          <div className="container mx-auto px-4 py-4 md:px-6">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                  Practice areas
                </p>
                <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                  The disciplines behind it.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You buy this as one engagement at one price. Underneath, it
                  draws on {practices.length} of our practice areas, and the
                  same people cover all of them.
                </p>
              </div>
              <a
                href="/capabilities"
                className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
              >
                All 20 practice areas &rarr;
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {practices.map((p) => (
                <a
                  key={p.slug}
                  href={`/capabilities/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <p.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {p.name}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mb-5 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <ul className="mt-auto grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                    {p.covers.slice(0, 4).map((cv) => (
                      <li
                        key={cv.title}
                        className="flex items-start gap-2 text-[0.8rem] leading-snug text-muted-foreground"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {cv.title}
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── process + deliverables ─────────────────────────── */}
      <section className="border-t border-border bg-background py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                How it runs
              </p>
              <h2 className="mb-10 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                Four weeks, in order.
              </h2>
              {/* Rows are bg-background, not bg-foreground: the parent's
                  bg-secondary shows through the space-y-px gaps as hairlines.
                  bg-foreground put white text on a white row. */}
              <ol className="space-y-px overflow-hidden rounded-xl border border-border bg-secondary">
                {c.process.map((p) => (
                  <li key={p.phase} className="flex gap-5 bg-background p-6">
                    <div className="w-24 shrink-0">
                      <p className="font-display text-base font-extrabold tracking-[-0.02em] text-foreground">{p.phase}</p>
                      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">{p.label}</p>
                    </div>
                    <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                What you get, concretely
              </p>
              <ul className="mb-9 space-y-3">
                {c.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>

              {/* No number here. A band published before anyone has read
                  what they would be buying anchors the negotiation and, for a
                  buyer with a large budget, reads as "too small". The shape of
                  the commitment is the useful part; the figure belongs in a
                  quote written against a scope. */}
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Typical engagement
                </p>
                <p className="mt-2.5 font-display text-xl font-extrabold leading-snug tracking-[-0.025em] text-primary">
                  {c.pricing.duration}
                </p>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">{c.pricing.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── stack ──────────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Technology
            </p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              What we build it with.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Defaults, not requirements. If you already run something else and
              have a team who knows it, we work in yours.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {c.stack.map((s) => (
              <div key={s.group} className="bg-background p-7">
                <dt className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent-foreground">{s.group}</dt>
                <dd className="text-[0.92rem] leading-relaxed text-muted-foreground">{s.items}</dd>
              </div>
            ))}
          </dl>
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
                  We have built this before.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Not a reference we cannot name. Systems we designed, shipped
                  and still operate, with the decisions written down.
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
      <section className="border-t border-border bg-secondary/40 py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Questions
              </p>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                What people ask before signing.
              </h2>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {c.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">{f.q}</dt>
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

      {/* ── related ────────────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            Often combined with
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {c.related.map((r) => (
              <a key={r.href} href={r.href} className="group rounded-xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60">
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {r.label}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{r.blurb}</p>
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
              {c.closing.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.closing.body}
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
