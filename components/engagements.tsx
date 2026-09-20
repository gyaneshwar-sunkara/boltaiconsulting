import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * The three shapes an engagement takes.
 *
 * This used to lead with price bands, and one of them had drifted out of sync
 * with the service registry. Commitment shape is the more useful filter on a
 * home page anyway — how long, how it is billed, how easily you can stop — and
 * a published number here anchors every later negotiation downward.
 *
 * The bands still exist, on the service pages and in /faqs, where somebody has
 * already read what they would be buying.
 */
const ENGAGEMENTS = [
  {
    name: "Discovery sprint",
    commitment: "Fixed engagement",
    duration: "One to two weeks",
    summary:
      "For when you know the problem but not the shape of the solution. You leave with a written spec and a fixed quote for the build — usable even if you build it elsewhere.",
    includes: [
      "Systems and access audit",
      "Written technical specification",
      "Fixed quote for the build",
      "Yours to keep either way",
    ],
    featured: false,
  },
  {
    name: "Build",
    commitment: "Fixed-price project",
    duration: "Four weeks, typically",
    summary:
      "The main engagement. Fixed scope, fixed price, live at the end of it. You see working software every Friday, not a status report.",
    includes: [
      "Fixed scope and fixed price",
      "Weekly working demos",
      "Ships on the Sill platform",
      "Training and handover included",
    ],
    featured: true,
  },
  {
    name: "Retainer",
    commitment: "Monthly retainer",
    duration: "Rolling, 30 days' notice",
    summary:
      "Ongoing work after launch, or search visibility that compounds month over month. Cancel when the numbers stop moving.",
    includes: [
      "Fixes, changes and monitoring",
      "SEO and GEO programmes",
      "Plain-language monthly reporting",
      "No long lock-in",
    ],
    featured: false,
  },
]

export function Engagements() {
  return (
    <section
      id="engagements"
      className="bd bd-mesh border-t border-border bg-secondary/40 py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
            How to work with us
          </p>
          <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
            Three ways in.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you need a week of thinking, a build with a date on it, or
            somebody on hand after launch. Each one differs in how long it runs,
            how it is billed, and how easily you can stop &mdash; which matters more
            at this stage than a number does.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <div
              key={e.name}
              className={`relative flex flex-col rounded-xl border bg-card p-7 md:p-8 ${
                e.featured
                  ? "border-primary shadow-lg shadow-primary/5"
                  : "border-border"
              }`}
            >
              {e.featured && (
                <span className="absolute -top-2.5 left-7 rounded-md bg-primary px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary-foreground">
                  Most engagements
                </span>
              )}

              <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-card-foreground">
                {e.name}
              </h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {e.duration}
              </p>

              <p className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-primary">
                {e.commitment}
              </p>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {e.summary}
              </p>

              <ul className="mt-7 space-y-3">
                {e.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-[0.9rem] leading-relaxed text-muted-foreground">
                      {i}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full font-semibold ${
                  e.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-transparent text-foreground hover:bg-secondary"
                }`}
                asChild
              >
                <a href="/contact">
                  Start here
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          We quote a fixed number against a written scope rather than from a
          rate card, and it does not move after you sign.{" "}
          <a
            href="/services"
            className="text-primary underline-offset-4 transition-opacity hover:opacity-70"
          >
            Every service page says what that scope usually covers
          </a>{" "}
          once you know which one you are looking at.
        </p>
      </div>
    </section>
  )
}
