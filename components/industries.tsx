import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { INDUSTRIES } from "@/lib/industries"

/**
 * Home teaser. Like the services and capabilities sections, this makes the
 * argument and hands off rather than reproducing all twelve sector pages.
 *
 * The argument is the interesting part: the problems we solve do not belong
 * to an industry. Leading with that is more credible than a logo wall of
 * sectors, and it gives a prospect in an unlisted industry a reason to call.
 */
const PROBLEMS = [
  "Authority changes depending on which site somebody is standing in",
  "Stock in the system has to agree with stock on the shelf",
  "Money has to reconcile, daily, without a person doing it",
  "The software gets used somewhere with no signal",
]

export function Industries() {
  return (
    <section id="industries" className="bd bd-dots border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
          <div>
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Industries
            </p>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              The same problems, wearing different uniforms.
            </h2>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A restaurant group, a distributor and a property manager describe
              their situation in completely different words and then turn out to
              need the same four things built.
            </p>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We work across {INDUSTRIES.length} sectors. Each has a page saying
              what that industry actually needs and naming the system we proved
              it in, so you can judge how well it transfers rather than taking
              our word for it.
            </p>

            <div className="mb-9 rounded-xl border border-border bg-background p-6">
              <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                What we are actually good at
              </p>
              <ul className="space-y-3">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/industries">
                Explore all {INDUSTRIES.length} industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="lg:pt-4">
            <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Sectors we build for
            </p>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {INDUSTRIES.map((ind) => (
                <li key={ind.slug}>
                  <a
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full items-start gap-3 bg-background px-5 py-4 transition-colors hover:bg-secondary/50"
                  >
                    <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <ind.icon className="h-4 w-4" />
                    </div>
                    <span className="flex items-start gap-1.5 font-display text-[0.92rem] font-bold leading-snug tracking-[-0.015em] text-foreground">
                      {ind.name}
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
