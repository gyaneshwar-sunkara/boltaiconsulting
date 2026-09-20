import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WORK, MODULES, STATUS_TONE } from "@/lib/work"

/**
 * Home page teaser, not the portfolio.
 *
 * This used to render every work item as a card. Now it makes one argument —
 * these are real systems that shipped, and you can open one of them right now —
 * anchored on the single item a visitor can verify without talking to us, with
 * the rest named rather than laid out.
 *
 * Leads on one large card where the services section is a rail and the
 * capabilities section is centred prose. Three sections, three rhythms.
 */
export function WorkPreview() {
  const featured = WORK[0]
  const rest = WORK.slice(1)

  return (
    <section id="work" className="bd bd-spot border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
            Our work
          </p>
          <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
            Work that shipped.
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
Systems we designed, shipped and still operate, with {MODULES.length} reusable
            components behind them. Keeping software live is what makes the
            four-week quote honest &mdash; the estimate comes from having done it,
            not from hoping.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each is written up as a case study: the problem, how it was built,
            and the part that was genuinely hard. One of them you can open in a
            browser right now.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-[1.3fr_1fr]">
          {/* The one a visitor can verify unaided. */}
          <a
            href={`/work/${featured.slug}`}
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10"
          >
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

            <h3 className="mb-2 flex items-start gap-2 font-display text-3xl font-extrabold tracking-[-0.035em] text-foreground md:text-4xl">
              {featured.name}
              <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </h3>
            <p className="mb-5 font-display text-lg font-bold tracking-[-0.02em] text-primary">
              {featured.tagline}
            </p>
            <p className="mb-8 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              {featured.summary}
            </p>

            <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
              {featured.facts.map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-lg font-extrabold tracking-[-0.025em] text-foreground">
                    {v}
                  </dt>
                  <dd className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>

            {featured.href && (
              <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-primary">
                {featured.href.replace("https://", "")}
                <ExternalLink className="h-3 w-3" />
              </p>
            )}
          </a>

          {/* The rest, named rather than laid out. */}
          <div className="flex flex-col bg-background">
            <p className="border-b border-border px-7 py-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              And {rest.length} more
            </p>
            <ul className="flex-1">
              {rest.map((w, i) => (
                <li key={w.slug} className={i > 0 ? "border-t border-border" : ""}>
                  <a
                    href={`/work/${w.slug}`}
                    className="group flex items-start gap-4 px-7 py-5 transition-colors hover:bg-secondary/50"
                  >
                    <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <w.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 font-display text-[0.98rem] font-bold tracking-[-0.015em] text-foreground">
                        {w.name}
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </p>
                      <p className="mt-0.5 text-[0.85rem] leading-snug text-muted-foreground">
                        {w.tagline}
                      </p>
                    </div>
                    <span
                      className={`mt-0.5 shrink-0 rounded-md px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] ${STATUS_TONE[w.status]}`}
                    >
                      {w.status}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[0.92rem] leading-relaxed text-muted-foreground">
            Each has a page with the problem, how it was built, and the part
            that was actually hard to get right.
          </p>
          <Button
            className="shrink-0 bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="/work">
              See all our work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
