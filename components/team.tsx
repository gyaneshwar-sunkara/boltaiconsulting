import { UserCheck, GitBranch, MessageSquare, Gauge } from "lucide-react"

/**
 * The delivery model, stated as what a client gets rather than what we lack.
 *
 * Earlier drafts framed this negatively ("no account managers", "no handoffs")
 * which reads as a small firm apologising for its size. Same substance, told
 * the way a firm describes a deliberate operating choice.
 */
const MODEL = [
  {
    icon: UserCheck,
    title: "Senior-led delivery",
    body: "Every engagement is led by an engineer who ships, not a manager who reports on people who ship. The person in your first call is the person in your codebase.",
  },
  {
    icon: GitBranch,
    title: "Continuous ownership",
    body: "One team carries your project from scope through to handover. Context accumulates instead of being rewritten every time the work changes hands.",
  },
  {
    icon: MessageSquare,
    title: "Direct engineering access",
    body: "You have the contact details of the people building your software. Questions get answered by whoever wrote the thing you're asking about.",
  },
  {
    icon: Gauge,
    title: "Deliberate capacity",
    body: "We take on a small number of engagements at a time and turn down work we're not the right fit for. It's the reason timelines hold.",
  },
]

export function Team() {
  return (
    <section id="team" className="border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Delivery model
            </p>
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Senior-led, start to finish.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Large firms run layered delivery because it is the only way to
              operate hundreds of engagements simultaneously. It works at that
              scale, and it costs the client context at every layer.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We operate a concentrated model instead: fewer engagements, each one
              owned end to end by the engineers delivering it. Decisions get made
              by people who understand the consequences.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {MODEL.map((m) => (
              <article key={m.title} className="bg-background p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {m.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
