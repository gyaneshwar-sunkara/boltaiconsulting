import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRACTICES, PRACTICE_GROUPS } from "@/lib/practices"

/**
 * Home page teaser, not the grid.
 *
 * This used to render all twenty practice cards with their bullets, which was
 * five screens of scrolling and left the /capabilities page redundant. The
 * depth is the point, so it is stated once and shown as a set of disciplines
 * rather than enumerated — the full grid is one click away.
 *
 * Deliberately centred and open, where the services section above is a
 * two-column rail and the work section below leads with a single image-sized
 * card. Three sections, three rhythms.
 */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bd bd-dots border-t border-border bg-secondary/40 py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
            Capabilities
          </p>
          <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
            The depth is the whole argument.
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
            A freelancer can build you a web application. What they cannot do is
            handle the payment reconciliation behind it, the per-location
            permissions it needs at your second site, the migration off the
            system it replaces, and the monitoring that tells you when it breaks
            at two in the morning.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            All of it sits in house, across{" "}
            {PRACTICE_GROUPS.length} disciplines. Most engagements draw on four
            or five at once, and you are quoted a single number for the outcome
            rather than a line item per speciality.
          </p>
        </div>

        {/* The stat bar under the hero already carries the practice-area and
            capability counts. Repeating them here, then again in the button
            below, was the same three figures three times on one screen. The
            disciplines carry their own counts, which is the shape a reader
            actually wants at this point. */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {PRACTICE_GROUPS.map((g) => (
            <a
              key={g.name}
              href="/capabilities"
              className="rounded-md border border-border bg-background px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {g.name}
              <span className="ml-2 text-primary">{g.slugs.length}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Button
            className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="/capabilities">
              Browse all {PRACTICES.length} practice areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="max-w-lg text-center text-[0.88rem] leading-relaxed text-muted-foreground">
            Each one has a page of its own: what it covers, the positions we
            hold on it, and what we have used it on.
          </p>
        </div>
      </div>
    </section>
  )
}
