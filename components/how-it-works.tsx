import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TimelineDiagram } from "@/components/diagrams"

/**
 * The four weeks, honestly.
 *
 * The previous version claimed AI made us "10x faster than traditional
 * methods" and promised delivery in "days, not months", which contradicted
 * every service page and was not a number anyone could verify. The real reason
 * four weeks works is the platform, and that argument is stronger because it
 * is checkable.
 *
 * Each week states what *you* do as well as what we do, because the most
 * common cause of slippage on these projects is not engineering — it is
 * waiting for a decision.
 */
const WEEKS = [
  {
    n: "Week 1",
    label: "Scope",
    body: "We watch how the work happens today, get access to your systems, and write a specification you sign. Screens, rules, edge cases, and an explicit list of what is out of scope. No code is written this week.",
    you: "Two or three hours: a walkthrough of your process, and reading the spec properly before signing it.",
    out: "A signed specification and a fixed price that does not move.",
  },
  {
    n: "Week 2",
    label: "Build",
    body: "Core data model, authentication and the primary workflow. Because accounts, permissions and billing already exist on our platform, week two starts at the part that is actually yours.",
    you: "Friday demo, about an hour. You click a real thing with your real data in it.",
    out: "Working software you can use, not a percentage.",
  },
  {
    n: "Week 3",
    label: "Build",
    body: "Reporting, permissions, integrations and the edge cases that only surface once somebody has used it. This is the week where the things you did not think of get caught.",
    you: "Second Friday demo, plus decisions on anything the first demo raised.",
    out: "Feature-complete against the spec.",
  },
  {
    n: "Week 4",
    label: "Ship",
    body: "Deployment, monitoring, migration of your existing data, two recorded training sessions, and documentation written for people rather than engineers.",
    you: "Training attendance, and a decision on who owns it internally.",
    out: "Live, plus the repository, documentation and 30 days of fixes.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              How it works
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Four weeks, in order.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Average, not best case. Mobile runs four to six because app store
              review is outside anybody&rsquo;s control, and genuinely larger projects
              get quoted as phases instead.
            </p>
          </div>

          <Button
            variant="outline"
            className="shrink-0 border-border bg-transparent font-semibold text-foreground hover:bg-secondary hover:text-foreground"
            asChild
          >
            <a href="/services/product-discovery">
              What week one produces
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <TimelineDiagram className="mb-10" />

        <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {WEEKS.map((w, i) => (
            <li
              key={w.n}
              className="ss-reveal flex flex-col bg-background p-7"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <p className="font-display text-xl font-extrabold tracking-[-0.03em] text-foreground">
                  {w.n}
                </p>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">
                  {w.label}
                </p>
              </div>

              <p className="mb-6 text-[0.92rem] leading-relaxed text-muted-foreground">
                {w.body}
              </p>

              <div className="mt-auto space-y-4 border-t border-border pt-5">
                <div>
                  <p className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Your time
                  </p>
                  <p className="text-[0.85rem] leading-snug text-foreground/75">{w.you}</p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                    You end up with
                  </p>
                  <p className="text-[0.85rem] leading-snug text-foreground/75">{w.out}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            Four weeks of our time, not yours.
          </span>{" "}
          You are looking at roughly three hours a week. The most common cause of
          delay on these projects is not engineering &mdash; it is waiting for a
          decision, which is why we ask for one named person who can make them.
        </p>
      </div>
    </section>
  )
}
