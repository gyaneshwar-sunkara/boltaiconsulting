import { ArrowUpRight, Check, X } from "lucide-react"

/**
 * A bento, not another uniform grid.
 *
 * Every other section on this site is an even grid of equal cards, which is
 * most of why the page read as one block repeated. This deliberately breaks
 * the rhythm: cells of different weight, one statement carried at display
 * scale, and the trade-offs sitting alongside rather than in another
 * identical row.
 *
 * The argument is unchanged — what we do differently and what each choice
 * costs — because it is the strongest thing on the page. It just stops
 * looking like a spreadsheet.
 */
const TRADES = [
  {
    we: "Fixed price against a written scope",
    them: "Hourly, estimated optimistically",
    cost: "It needs a real week of scoping before anything gets built.",
  },
  {
    we: "The engineer who scoped it builds it",
    them: "Sold by one team, delivered by another",
    cost: "We run fewer engagements at once, so there is sometimes a wait.",
  },
  {
    we: "Built on a platform we already maintain",
    them: "Plumbing rebuilt from scratch, billed to you",
    cost: "It is our architecture. If you need a different one, we are the wrong firm.",
  },
  {
    we: "An honest no when we are wrong for it",
    them: "A proposal for whatever you asked for",
    cost: "We turn down work, which is why the recommendation is worth something.",
  },
]

export function Features() {
  return (
    <section className="bd bd-mesh border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
            How we differ
          </p>
          <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
            Four trades, and what each one costs you.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every firm says it is fast and senior and secure. Here is what we
            actually do differently, with the downside written next to it
            rather than left out.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* The statement, at display scale.
              This cell used to carry "60%", and the row beside it carried the
              service, practice-area and case-study counts. Every one of those
              figures is already stated earlier on this page — the stat bar
              under the hero, the services section, the platform section — so
              the section was mostly a second printing of numbers the reader
              had passed twice. What it says is the part that was not
              duplicated anywhere. */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/30 bg-card p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-primary)_0%,transparent_62%)] opacity-[0.07]"
            />
            <div className="relative">
              <p className="mb-6 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                The honest part
              </p>
              <p className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground md:text-5xl">
                Every one of them{" "}
                <span className="text-primary">costs you something.</span>
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                Any firm can list four advantages. The useful information is
                what each advantage is paid for with, and that is the bottom
                line of every card beside this one.
              </p>
            </div>
            <a
              href="/about"
              className="group relative mt-8 inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary"
            >
              How we work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* the trades */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {TRADES.map((t) => (
              <div
                key={t.we}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="font-display text-[0.98rem] font-bold leading-snug tracking-[-0.01em] text-card-foreground">
                    {t.we}
                  </p>
                </div>
                <div className="mb-5 flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                  <p className="text-[0.88rem] leading-snug text-muted-foreground">
                    {t.them}
                  </p>
                </div>
                <p className="mt-auto border-t border-border pt-4 text-[0.85rem] leading-relaxed text-foreground/70">
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Costs you &mdash;{" "}
                  </span>
                  {t.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
