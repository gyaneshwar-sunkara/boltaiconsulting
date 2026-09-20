import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlatformStackDiagram } from "@/components/diagrams"

/** The layer every engagement inherits. Live in production across shipped builds. */
const FOUNDATION = [
  "Accounts & authentication",
  "Roles & permissions",
  "Billing & subscriptions",
  "Notifications & delivery",
  "Admin backoffice",
  "Audit logging",
  "Multi-tenancy",
  "Background job orchestration",
]

export function Platform() {
  return (
    <section id="platform" className="bd bd-mesh overflow-hidden bg-background py-20 md:py-28">

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
              The Sill platform
            </p>

            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Every project starts at{" "}
              <span className="text-primary">sixty per cent.</span>
            </h2>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Most firms quote three months because they rebuild the same plumbing
              every time &mdash; logins, permissions, billing, admin screens. Work that
              has nothing to do with your business, billed to you anyway.
            </p>

            <p className="mb-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Sill</strong> is our
              delivery platform. It is the layer every SillStack engagement is built
              on, and it is already in production &mdash; handling real users and real
              money on live projects, every day.
            </p>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Your engagement adds the part that is actually yours. That is the
              entire mechanism behind the four-week quote, and there is no second one.
            </p>

            <Button
              variant="outline"
              className="border-border bg-transparent font-semibold text-foreground hover:bg-secondary hover:text-foreground"
              asChild
            >
              <a href="/work/sill-platform">
                See what runs on it
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* the panel mirrors the mark: components resting on one solid sill */}
          <div>
            <PlatformStackDiagram className="mb-6" />


            {/* Assert, never deny. Denying a comparison is how you plant it, so
                this closes on what Sill is: software we wrote, run and answer for. */}
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We wrote every line of Sill and we maintain it. When we harden it on one
              project, that work lands in your build too &mdash; same engineers, same
              codebase, all year.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
