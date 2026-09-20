import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * The previous version of this section called stack flexibility "Our
 * Superpower" and promised we were "technology agnostic" with "zero migration
 * friction". None of that was true, and worse, it contradicted the honest
 * position stated on every service page: we have defaults, and if you need an
 * architecture Sill does not support we are the wrong firm.
 *
 * Nobody is technology agnostic. Saying so out loud, and then being precise
 * about when we use your stack instead of ours, is a more useful answer and a
 * more credible one.
 */
const RULES = [
  {
    when: "You have a team who knows your stack",
    then: "We work in yours",
    body: "Django, Rails, .NET, Laravel, Go. If your engineers maintain it after we leave, their familiarity is worth more than any efficiency we would gain by moving you somewhere we prefer.",
  },
  {
    when: "You are starting from nothing",
    then: "We use ours",
    body: "TypeScript end to end on the Sill platform, because that is where sixty per cent of the build already exists. This is the case where our defaults save you real money.",
  },
  {
    when: "You have a system that works but is unloved",
    then: "We extend rather than replace",
    body: "A layer in front, new work against a clean interface, old system untouched. Replacing something that functions because it is unfashionable is how budgets disappear.",
  },
  {
    when: "You want an architecture Sill does not support",
    then: "We are the wrong firm",
    body: "A different language, a hosting arrangement we do not run, a design we think is a mistake. We would rather say that on the first call than take the work and manage the disappointment later.",
  },
]

export function TechFlexibility() {
  return (
    <section className="bd bd-spot overflow-hidden border-t border-border py-20 md:py-28">

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
              Technology
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Nobody is technology agnostic.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every firm claiming otherwise has a stack they reach for by
              default. Ours is TypeScript on the Sill platform. Here is exactly
              when we use yours instead, and when you should hire somebody else.
            </p>
          </div>

          <Button
            variant="outline"
            className="shrink-0 border-border bg-transparent font-semibold text-foreground hover:bg-secondary hover:text-foreground"
            asChild
          >
            <a href="/capabilities">
              What we work with
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {RULES.map((r, i) => (
            <div
              key={r.when}
              className="ss-reveal flex flex-col bg-background p-7 md:p-8"
              style={{ animationDelay: `${(i % 2) * 60}ms` }}
            >
              <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                If
              </p>
              <p className="mb-5 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
                {r.when}
              </p>

              <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                Then
              </p>
              <p className="mb-4 font-display text-lg font-extrabold leading-snug tracking-[-0.025em] text-primary">
                {r.then}
              </p>

              <p className="mt-auto border-t border-border pt-4 text-[0.92rem] leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
