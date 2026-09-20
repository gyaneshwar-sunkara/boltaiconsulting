import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { FAQSchema } from "@/components/json-ld"
import { SERVICE_GROUPS, getService, MODEL_LABEL } from "@/lib/services"
import { TimelineDiagram } from "@/components/diagrams"

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "How working with us actually works: how a scope becomes a fixed number, what a week looks like, what happens when scope changes, and how an engagement ends.",
  alternates: { canonical: "/engagements" },
}

/**
 * Deliberately not split into sub-pages. Discovery, Build and Retainer already
 * have real service pages behind them — /services/product-discovery and the
 * project and retainer services — so sub-pages here would restate those.
 *
 * What was genuinely missing is the commercial model: how a number is arrived
 * at, what both sides commit to, what happens when scope moves, and how it
 * ends. That is the thing buyers ask on a first call and no page answered.
 */
const SHAPES = [
  {
    slug: "product-discovery",
    name: "Start with a week of thinking",
    body: "When you know the problem but not the shape of the solution. One to two weeks produces a written specification, a fixed quote and a delivery date. You keep the document whether or not you continue, and it comes off the project price if you do.",
  },
  {
    slug: "web-applications",
    name: "Build it to a fixed number",
    body: "The main engagement. Week one is scope, weeks two and three are build with a Friday demo on your real data, week four is deployment, training and handover. The price is agreed before anything starts and does not move.",
  },
  {
    slug: "managed-support",
    name: "Keep it running afterwards",
    body: "Monitoring, monthly patching, incident response and a steady pace of improvements, from the engineers who wrote it. Rolling monthly with thirty days' notice, and thirty days of fixes are included with every build regardless.",
  },
]

const COMMITMENTS = {
  us: [
    "A fixed number quoted against a written scope, which does not move",
    "The engineer who scoped it is the engineer who builds it",
    "Working software every Friday, on your real data",
    "The repository in your organisation from the first commit",
    "Thirty days of post-launch fixes at no extra cost",
    "An honest assessment when we are the wrong firm for the job",
  ],
  you: [
    "Around three hours a week: a demo and a handful of decisions",
    "One named person who can decide without convening a committee",
    "Access to the systems we are integrating with, early",
    "Reading the specification properly before signing it",
    "Telling us when something has changed on your side",
  ],
}

const FAQS = [
  {
    q: "How does a scope become a fixed number?",
    a: "Week one. We watch how the work happens today, get access to your systems, and write a specification covering screens, rules, edge cases and what is explicitly out of scope. You sign it, and the quote is made against that document. No code is written until it is agreed, because that is the cheapest week in which to change your mind.",
  },
  {
    q: "What happens if we want to change something mid-build?",
    a: "We re-quote the difference in writing before touching it, and you approve it or you do not. Nothing gets silently absorbed and presented as a surprise at the end. Small clarifications that do not change the work are just done — we are not going to invoice you for a re-worded label.",
  },
  {
    q: "What if you underestimate the work?",
    a: "That is our problem, not yours. Fixed price means the risk of a bad estimate sits with the party who claimed to be able to estimate. It is also why week one exists and why we will not quote from a conversation alone.",
  },
  {
    q: "How do you invoice?",
    a: "Projects are split across the engagement rather than billed entirely up front, with the schedule written into the agreement. Retainers are monthly in advance. There are no hourly line items to reconcile, because there are no hours being counted.",
  },
  {
    q: "What does the Friday demo actually involve?",
    a: "About an hour. You click a real thing with your real data in it and tell us what is wrong. It is not a slide, a screenshot or a percentage. The point is that problems surface in week two rather than in week four.",
  },
  {
    q: "How does an engagement end?",
    a: "With handover as a deliverable rather than a conversation: the repository, infrastructure accounts, documentation written for people rather than engineers, and two recorded training sessions. Retainers end on thirty days' notice with the same handover, written into the agreement from the start.",
  },
  {
    q: "What if it is not working out?",
    a: "Say so early. For a project, you keep everything built to that point and the specification. For a retainer, thirty days' notice and a handover session. We would rather end something cleanly than manage a relationship nobody is enjoying.",
  },
]

export default function EngagementsPage() {
  return (
    <main className="min-h-screen bg-background">
      <FAQSchema faqs={FAQS} />
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
            <span className="text-accent-foreground">Engagements</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Engagements
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              How working with us actually works.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              How a scope becomes a number, what a week looks like from your
              side, what happens when something changes, and how it ends. The
              commercial mechanics, written down before you ask.
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
                <a href="/services">See the twelve services</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              ["Week 1", "Written scope, no code"],
              ["Fixed", "The number does not move"],
              ["Friday", "Working software, weekly"],
              ["30 days", "Notice, both directions"],
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

      {/* ── three shapes ───────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Three ways in
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Most people start at one of these.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {SHAPES.map((s, i) => {
              const svc = getService(s.slug)
              return (
                <div key={s.slug} className="flex flex-col bg-background p-7 md:p-8">
                  <p className="mb-5 font-mono text-[0.68rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 font-display text-xl font-extrabold leading-snug tracking-[-0.025em] text-foreground">
                    {s.name}
                  </h3>
                  <p className="mb-6 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  {svc && (
                    <a
                      href={`/services/${svc.slug}`}
                      className="group mt-auto flex items-center justify-between gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-primary/50"
                    >
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 font-display text-[0.92rem] font-bold tracking-[-0.015em] text-foreground">
                          {svc.name}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                        <span className="mt-0.5 block font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                          {MODEL_LABEL[svc.model]}
                        </span>
                      </span>
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          <p className="mt-6 text-[0.9rem] leading-relaxed text-muted-foreground">
            Those are the common routes.{" "}
            <a href="/services" className="text-primary underline-offset-4 hover:opacity-70">
              All twelve services
            </a>{" "}
            sit across {SERVICE_GROUPS.length} groups, and most engagements
            combine two or three of them under one scope and one number.
          </p>
        </div>
      </section>

      {/* ── how the number is arrived at ───────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Pricing mechanics
            </p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              How a scope becomes a number.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fixed price only works if the scope is written down first. That is
              the entire reason week one exists, and the reason we will not quote
              from a conversation alone.
            </p>
          </div>

          <TimelineDiagram className="mb-10" />

          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {[
              { n: "01", t: "A call", b: "Thirty minutes. What is going wrong today, who it affects, and what you have already tried. You leave knowing whether this is a conversation worth continuing." },
              { n: "02", t: "Week one", b: "Access, a walkthrough of how the work actually happens, and a written specification: screens, rules, edge cases, and what is out of scope." },
              { n: "03", t: "One number", b: "Quoted against that document, with a delivery date. It is comparable against any other firm's quote because they would be quoting the same spec." },
              { n: "04", t: "It holds", b: "The number does not move. If you change the scope we re-quote the difference in writing first, and you decide." },
            ].map((x) => (
              <li key={x.n} className="bg-background p-7">
                <p className="mb-4 font-mono text-[0.68rem] text-primary">{x.n}</p>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {x.t}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{x.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── commitments ────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Both directions
            </p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              What each side signs up for.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The projects that go badly are almost never technical. They are
              the ones where nobody on the client side could make a decision
              without a meeting.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-7 md:p-9">
              <p className="mb-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                What we commit to
              </p>
              <ul className="space-y-4">
                {COMMITMENTS.us.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-7 md:p-9">
              <p className="mb-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                What we need from you
              </p>
              <ul className="space-y-4">
                {COMMITMENTS.you.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── what we do not do ──────────────────────────────── */}
      <section className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Boundaries
            </p>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Things we will not do.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {[
              { t: "Bill by the hour", b: "It rewards the party doing the estimating for being wrong. Fixed price puts that risk where it belongs." },
              { t: "Take equity instead of payment", b: "It sounds appealing to both sides and it aligns nobody. Better to be a supplier you can fire." },
              { t: "Hold your code hostage", b: "The repository is yours from the first commit, including if you walk away halfway through." },
              { t: "Quote a project we cannot deliver", b: "If it is bigger than we can do well, or outside what we know, you hear that on the first call." },
            ].map((x) => (
              <div key={x.t} className="bg-background p-7">
                <X className="mb-4 h-4 w-4 text-muted-foreground/60" />
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {x.t}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── faq ────────────────────────────────────────────── */}
      <section className="band-alt border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
                Questions
              </p>
              <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
                The commercial ones.
              </h2>
              <a
                href="/faqs"
                className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
              >
                All FAQs &rarr;
              </a>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {FAQS.map((f) => (
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

      {/* ── enquire ────────────────────────────────────────── */}
      <section id="enquire" className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Start with the thirty-minute call.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              You&rsquo;ll leave it with a number and a date, whether or not you end up
              working with us.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
