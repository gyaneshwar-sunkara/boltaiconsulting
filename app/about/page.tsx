import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services"
import { PRACTICES } from "@/lib/practices"
import { INDUSTRIES } from "@/lib/industries"
import { WORK, MODULES, STATUS_TONE } from "@/lib/work"

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, senior software studio in Orlando serving the United States. How we are set up, what we believe, and how we deliver.",
  alternates: { canonical: "/about" },
}

/**
 * Written as an essay rather than assembled from the section kit the rest of
 * the site uses. No eyebrow chips, no stat strip, no alternating bands, no
 * card grids around the prose — an about page built from the same parts as
 * every other page reads as filler, and this is the one page where the voice
 * is the product.
 *
 * No individual names, by standing instruction. That suits it: a buyer is
 * deciding whether the firm is set up to serve them, not whether they like a
 * headshot.
 */
const BELIEFS: [string, string][] = [
  ["The person who scoped it should build it",
   "Context is most of what makes a decision good. Selling with one team and delivering with another throws that away, and the client pays for the gap in rework."],
  ["A scope in writing beats a conversation",
   "Almost every project that went badly was ambiguous before it was late. Week one exists to make the disagreement happen while it is still cheap."],
  ["Reuse, but maintain what you reuse",
   "Copied code rots because nobody owns it. A maintained platform stays current because every project depends on it. That is the whole difference."],
  ["Boring technology, deliberately",
   "Large hiring pools and long support horizons matter more than elegance. The clever choice is enjoyable for us and expensive for whoever inherits it."],
  ["Say the uncomfortable thing early",
   "That the project is bigger than you hoped, that existing software would do, that we are the wrong firm. It costs us work and it is the only reason the advice is worth anything."],
  ["Leaving should be easy",
   "Your repository, your accounts, current documentation, notice periods written in from the start. A client who stays because exiting is painful is not a reference."],
]

const NOT_US: [string, string][] = [
  ["The work is permanent, core and full-time",
   "Hire. A permanent engineer accumulates context a contractor structurally cannot, and across three years they are cheaper."],
  ["You need deep regulated-industry expertise",
   "Some domains take a year to understand properly. If yours is one, you want somebody who already has that year behind them."],
  ["You want an architecture our platform does not support",
   "A different language, a hosting arrangement we do not run. You would be paying us to learn on your money."],
  ["Existing software already solves it",
   "Sometimes the answer is a product you could buy this afternoon. We will tell you which one, and it costs us the engagement."],
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── opening statement ──────────────────────────────── */}
      <section className="bd bd-spot pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
              About SillStack
            </p>
            <h1 className="mb-10 text-balance font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-4xl md:text-[2.75rem]">
              We are a small software studio in Orlando. We take on few
              engagements at a time, quote a fixed number against a written
              scope, and the engineer who scoped it is the one who builds it.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              That is the whole model. Everything below is the reasoning behind
              it, including the parts that cost us something.
            </p>
          </div>
        </div>
      </section>

      {/* ── essay ──────────────────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-14">
            <div>
              <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                Why fewer engagements
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Large firms run layered delivery because it is the only way to
                operate hundreds of engagements at once. A partner sells it, a
                manager plans it, and somebody three levels down writes the code
                having never spoken to you. It works at that scale, and it costs
                the client context at every layer.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We run the opposite: a small number of projects, each owned end
                to end by the people delivering it. You get the contact details
                of the engineers, and questions are answered by whoever wrote the
                thing you are asking about. It is also the only honest reason a
                four-week commitment holds &mdash; we are not quietly queueing you
                behind six other projects.
              </p>
            </div>

            <figure className="border-l-2 border-primary pl-7">
              <blockquote className="font-display text-xl font-bold leading-snug tracking-[-0.025em] text-foreground md:text-2xl">
                Roughly sixty per cent of a typical build already exists before
                we start. That is not a shortcut &mdash; it is {MODULES.length}{" "}
                modules hardened in production across every project we ship.
              </blockquote>
              <figcaption className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                <a
                  href="/work/sill-platform"
                  className="text-primary transition-opacity hover:opacity-70"
                >
                  The Sill platform &rarr;
                </a>
              </figcaption>
            </figure>

            <div>
              <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                Why fixed price
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Hourly billing means the party doing the estimating benefits
                from being wrong. That is a structural problem rather than a
                question of anybody&rsquo;s integrity, and no amount of goodwill
                fixes an incentive pointing the wrong way.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Fixed price puts the risk of a bad estimate on us, which is
                where it belongs, because we are the ones claiming to be able to
                estimate. The trade is that it only works against a written
                scope &mdash; which is why week one produces a specification and no
                code, and why a change gets re-quoted in writing before anybody
                touches it.
              </p>
            </div>

            <div>
              <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                Breadth, and why the list holds up
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {PRACTICES.length} practice areas across {SERVICES.length}{" "}
                services and {INDUSTRIES.length} sectors is a lot for a studio
                this size, and it would be a red flag if each were a separate
                skill. They are not. Multi-location permissions, offline
                operation, reconciliation and integration are the same four
                problems wearing different uniforms, and having solved them
                properly once is what makes the list plausible rather than
                padded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── beliefs, as a list rather than cards ───────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              Positions, not values
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
              A value nobody would argue with is not worth printing. These are
              the ones that cost us something to hold.
            </p>

            <ol className="divide-y divide-border border-y border-border">
              {BELIEFS.map(([t, b], i) => (
                <li key={t} className="flex gap-6 py-7">
                  <span className="w-8 shrink-0 font-mono text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-[1.1rem] font-bold leading-snug tracking-[-0.02em] text-foreground">
                      {t}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── what we have delivered ─────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              What we have delivered
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {WORK.length} projects, each written up with the problem, the
              approach, and the part that was genuinely hard to get right.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {WORK.map((w) => (
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
                <h3 className="mb-2 flex items-start gap-1.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {w.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{w.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── the boundary ───────────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              When you should hire somebody else
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Most firms will not write this section. It is the most useful part
              of the page.
            </p>

            <dl className="space-y-7">
              {NOT_US.map(([t, b]) => (
                <div key={t}>
                  <dt className="mb-1.5 font-display text-[1.05rem] font-bold tracking-[-0.02em] text-foreground">
                    {t}
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 border-t border-border pt-10">
              <p className="mb-7 text-lg leading-relaxed text-foreground/80">
                If none of those apply, describe how your business runs today
                and we will tell you which part of it is worth building software
                for.
              </p>
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="/contact">
                  Get in front of an engineer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
