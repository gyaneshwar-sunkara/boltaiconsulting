import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICE_GROUPS, SERVICES } from "@/lib/services"

/**
 * Home page teaser, not a catalogue.
 *
 * This used to render all twelve service cards, which made the home page the
 * menu and left /services with nothing to add. A home page should make the
 * argument and hand off; the full list and the practice areas behind each
 * service live one click away.
 *
 * Price is absent from this rail, from the nav and from the service pages
 * themselves. A published band anchors every later negotiation and caps it at
 * the same time — to a buyer with a large budget it reads as "too small". The
 * figure belongs in a quote written against a signed scope, which is the only
 * point at which it means anything.
 *
 * Layout is asymmetric — prose left, the five groups as a compact rail right —
 * so it does not read like the same block as the two sections after it.
 */
export function Services() {
  return (
    <section id="services" className="bd bd-spot border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* ── the argument ── */}
          <div>
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Services
            </p>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Whatever it is, it starts with a written scope.
            </h2>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              There are {SERVICES.length} of them, grouped by how you buy them
              rather than by technology. Most are a fixed price quoted against a
              specification you sign in week one. Two are monthly retainers. One
              is the short engagement that tells you which of the others you
              actually need.
            </p>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Most engagements combine two or three of them &mdash; a build with an
              integration behind it, or a migration with a support retainer
              after. You get one scope, one schedule, one number and one point
              of contact, rather than three vendors and a coordination problem.
            </p>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every service has a page of its own: what it covers, the practice
              areas behind it, and what we have built with it before. Pricing is
              quoted against a written scope rather than published as a band,
              because a number before a specification is a guess.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="/services">
                  Explore all services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-border bg-transparent font-semibold text-foreground hover:bg-secondary hover:text-foreground"
                asChild
              >
                <a href="/services/product-discovery">Not sure which one?</a>
              </Button>
            </div>
          </div>

          {/* ── the rail ── */}
          <div className="lg:pt-4">
            <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Grouped by how you buy
            </p>
            <ul className="overflow-hidden rounded-xl border border-border">
              {SERVICE_GROUPS.map((g, i) => (
                  <li key={g.name} className={i > 0 ? "border-t border-border" : ""}>
                    <a
                      href="/services"
                      className="group flex items-center justify-between gap-4 bg-background px-5 py-4 transition-colors hover:bg-secondary/50"
                    >
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 font-display text-[0.98rem] font-bold tracking-[-0.015em] text-foreground">
                          {g.name}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </p>
                        <p className="mt-0.5 truncate font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                          {g.billing}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-display text-lg font-extrabold tracking-[-0.03em] text-primary">
                          {g.slugs.length}
                        </p>
                        <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                          {g.slugs.length === 1 ? "service" : "services"}
                        </p>
                      </div>
                    </a>
                  </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-muted-foreground">
              We quote a fixed number against a written scope, not from a rate
              card. Each service page says what that scope usually looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
