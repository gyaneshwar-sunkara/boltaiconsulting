import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { CollectionSchema } from "@/components/json-ld"
import { STACK_GROUPS, STACK_CORE, STACK_COUNT } from "@/lib/stack"
import { getWork, type WorkItem } from "@/lib/work"

export const metadata: Metadata = {
  title: "Technologies",
  description: `The full stack we build on — ${STACK_COUNT} tools across web, mobile, data, AI, payments, identity, cloud and search. Everything here has shipped something.`,
  alternates: { canonical: "/technologies" },
}

/**
 * One page, not a page per tool.
 *
 * The technology bar on the home page scrolls eighty names past a visitor with
 * nothing behind any of them, which is no use to a prospect who recognises one
 * or to an assistant asked whether we work with Toast. This makes the whole
 * list addressable in a single place.
 *
 * It is deliberately not eighty pages. That shape asserts expertise once per
 * URL and demonstrates it nowhere, and it is what an SEO farm looks like. The
 * substance here is the note under each group saying what we actually do with
 * it, and the short list at the top of the six we genuinely live in.
 */
export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Technologies"
        description={`The full stack SillStack builds on: ${STACK_COUNT} tools across ${STACK_GROUPS.length} areas, each one used on work that shipped.`}
        url="/technologies"
        items={STACK_GROUPS.map((g) => ({
          name: g.name,
          url: "/technologies",
          description: `${g.blurb} ${g.items.join(", ")}.`,
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
            <span className="text-accent-foreground">Technologies</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Technologies
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              Everything we build with, in one list.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              The rule for being on this page is that we have shipped something
              with it. Not evaluated it, not read about it. Under each group is
              a note on what we actually do with it, including the parts we
              would not claim.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#enquire">
                  Ask about your stack<ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/work">See what runs on it</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              [String(STACK_COUNT), "tools and techniques"],
              [String(STACK_GROUPS.length), "areas of the stack"],
              ["In production", "not on a wishlist"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── the core six ───────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              What we live in
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              A long list invites one question.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Which of these do you actually work in every day? These six, and
              each one is named with the systems it is running in right now.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STACK_CORE.map((c) => {
              const running = c.runningIn
                .map(getWork)
                .filter((x): x is WorkItem => Boolean(x))
              return (
                <div
                  key={c.name}
                  className="flex flex-col rounded-xl border border-border bg-background p-7"
                >
                  <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                    {c.name}
                  </h3>
                  <p className="mb-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <p className="mt-auto border-t border-border pt-4 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Running in{" "}
                    <span className="text-primary">
                      {running.map((w) => w.name).join(", ")}
                    </span>
                  </p>
                </div>
              )
            })}
          </div>

          <p className="mt-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            Each of those links through to a case study on{" "}
            <a href="/work" className="text-primary underline underline-offset-4">
              the work page
            </a>
            , where the decision that was genuinely hard to get right is written
            up alongside what we would do differently.
          </p>
        </div>
      </section>

      {/* ── the full list ──────────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              The full stack
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Boring on purpose.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Large hiring pools and long support horizons beat elegance for
              software that has to be maintained for years by people who are not
              in the room yet. The interesting choice is enjoyable for us and
              expensive for whoever inherits it.
            </p>
          </div>

          <div className="space-y-4">
            {STACK_GROUPS.map((g) => (
              <div
                key={g.name}
                className="grid gap-7 rounded-xl border border-border bg-background p-7 md:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
              >
                <div>
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <g.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mb-2.5 font-display text-xl font-bold tracking-[-0.025em] text-foreground">
                    {g.name}
                  </h3>
                  <p className="mb-5 text-[0.95rem] leading-relaxed text-foreground/75">
                    {g.blurb}
                  </p>
                  <p className="text-[0.88rem] leading-relaxed text-muted-foreground">
                    {g.note}
                  </p>
                </div>

                <div className="lg:border-l lg:border-border lg:pl-12">
                  <p className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {g.items.length} in this group
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 font-mono text-[0.68rem] text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── the caveat ─────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Defaults, not requirements
              </p>
              <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                This is our stack. It does not have to be yours.
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                If you already run something else and have a team who know it,
                we work in yours. A rewrite to suit a supplier&rsquo;s preference is
                a cost with no return, and we would say so before quoting one.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Where we genuinely cannot help &mdash; a language we do not write, an
                architecture our platform does not support, a hosting
                arrangement we do not run &mdash; you would be paying us to learn on
                your money. You hear that on the first call.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  t: "Every choice traces to a requirement",
                  b: "If we cannot point at the constraint that forced a decision, it is a preference and we will call it that rather than dress it up as architecture.",
                },
                {
                  t: "You own it, in standard form",
                  b: "Conventional frameworks, conventional structure, your repository from the first commit. Another firm should be able to pick it up without learning anything we invented.",
                },
                {
                  t: "We say when a product would be cheaper",
                  b: "Sometimes the answer is Shopify, or WordPress, or something you could buy this afternoon. That costs us the engagement and it is the reason the advice is worth having.",
                },
                {
                  t: "New things earn their way in",
                  b: "Nothing reaches a client project until it has run on ours first. Our own systems are where a technology gets to fail without anybody else paying for it.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-border bg-background p-7">
                  <h3 className="mb-2 font-display text-[1.05rem] font-bold leading-snug tracking-[-0.02em] text-foreground">
                    {x.t}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{x.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── where to go next ───────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Where this gets used
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { href: "/services", t: "Services", b: "What you can buy, grouped by how you buy it rather than by technology." },
              { href: "/capabilities", t: "Capabilities", b: "The disciplines behind the tools, and the positions we hold on each." },
              { href: "/work", t: "Case studies", b: "The systems this stack is running in, each written up in full." },
            ].map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="group rounded-xl border border-border bg-background p-7 transition-colors hover:border-primary/50"
              >
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {x.t}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{x.b}</p>
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
              Tell us what you&rsquo;re running today.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Including what you are being sold by somebody else. We&rsquo;ll give you
              a straight read on both within one business day.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
