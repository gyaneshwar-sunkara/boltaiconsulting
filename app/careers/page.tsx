import type { Metadata } from "next"
import { ArrowUpRight, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PRACTICES } from "@/lib/practices"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We are always interested in hearing from strong engineers. What we look for, what the work is actually like, and how to reach us before a role is advertised.",
  alternates: { canonical: "/careers" },
  // Nothing to index as a job posting, and no JobPosting schema, because
  // publishing one with no role attached is how a careers page loses trust.
}

/**
 * Framed the way a consulting firm's careers page is: an open invitation
 * first, the current vacancy position stated plainly straight after. The
 * pipeline is the point — at this size most people who join were known to us
 * before a role existed, so the page is written to be worth writing to on a
 * day when nothing is advertised.
 */
const LOOK_FOR: [string, string][] = [
  ["Senior, or close to it",
   "We do not run a layered delivery model, so there is no junior tier to grow through. Everybody here talks to clients and owns work end to end."],
  ["Comfortable being the one who decides",
   "You will scope a project and then build it. That means making architectural calls with the consequences attached, rather than implementing somebody else's."],
  ["Willing to say the uncomfortable thing",
   "That an estimate is wrong, that a design will not hold, that a client should buy software instead of commissioning it. That habit is the job, not a personality trait."],
  ["Deep somewhere, curious everywhere",
   `We hold ${PRACTICES.length} practice areas with a small team, which only works if people are genuinely strong in one area and unafraid of the next.`],
]

const WHAT_ITS_LIKE: [string, string][] = [
  ["Fewer projects, owned properly",
   "A small number of engagements at a time. You are not context-switching across six accounts, and you are not inheriting a codebase from somebody who has left."],
  ["Fixed scope, fixed price",
   "No timesheets and no utilisation targets. The commercial model rewards getting it right in week one rather than logging hours in week nine."],
  ["A platform that does the boring parts",
   "Auth, billing, permissions, notifications and audit logging already exist and are maintained. You build the part that is actually the client's business."],
  ["Orlando, remote-friendly, US hours",
   "We are based in Orlando and work across the United States. Most delivery is remote with a weekly demo."],
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── the answer, first ──────────────────────────────── */}
      <section className="bd bd-mesh pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
              Careers
            </p>
            <h1 className="mb-8 text-balance font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-4xl md:text-[2.6rem]">
              Work with us.
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              We are always interested in hearing from strong engineers,
              whether or not a role is advertised. The team grows as the work
              does, and openings tend to follow an engagement that needs a
              particular strength.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              There are no open positions at the moment. When one opens it is
              listed here first, and we go to the people we already know before
              we go anywhere else.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Which is why a note now is worth more than an application later.
              Most of the people who have joined us were on that list before a
              position existed.
            </p>
          </div>
        </div>
      </section>

      {/* ── what the work is ───────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              What the work is actually like
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
              Worth reading before you write, because the model is unusual and
              it does not suit everybody.
            </p>

            <dl className="divide-y divide-border border-y border-border">
              {WHAT_ITS_LIKE.map(([t, b]) => (
                <div key={t} className="py-6">
                  <dt className="mb-2 font-display text-[1.08rem] font-bold tracking-[-0.02em] text-foreground">
                    {t}
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── what we look for ───────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              What we look for
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
              Stated plainly, so you can tell quickly whether the next opening
              is worth your evening.
            </p>

            <ol className="space-y-8">
              {LOOK_FOR.map(([t, b], i) => (
                <li key={t} className="flex gap-6">
                  <span className="w-8 shrink-0 font-mono text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-[1.08rem] font-bold leading-snug tracking-[-0.02em] text-foreground">
                      {t}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── write anyway ───────────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              Writing speculatively
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Send something you built and a short note on the part of it that
              was hard. That tells us more than a CV does, and it is the same
              thing we ask clients for &mdash; the problem, not the summary.
            </p>

            <div className="mb-10 rounded-xl border border-border p-7">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                Worth including
              </p>
              <ul className="space-y-3">
                {[
                  "Something you shipped that is still running, and your part in it",
                  "One decision in it you would make differently now",
                  "Where you are deep, and where you are deliberately not",
                  "Whether you are looking now or in six months",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-[0.95rem] leading-relaxed text-foreground/80">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:careers@sillstack.com?subject=Speculative%20application">
                <Mail className="mr-2 h-4 w-4" />
                careers@sillstack.com
              </a>
            </Button>

            <p className="mt-8 text-[0.92rem] leading-relaxed text-muted-foreground">
              We read everything and reply to most of it, though not always
              quickly when a project is mid-flight. The list turns over as roles
              open, so it is worth a note even if the timing is not yours yet.
            </p>

            <div className="mt-14 border-t border-border pt-10">
              <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                Looking for the other thing
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["/about", "About us", "How the studio is set up, and what we believe"],
                  ["/contact", "Hire us instead", "If you are here to talk about a project"],
                ].map(([href, t, b]) => (
                  <a
                    key={href}
                    href={href}
                    className="group rounded-xl border border-border p-6 transition-colors hover:border-primary/50 hover:bg-secondary/40"
                  >
                    <p className="mb-1.5 flex items-center gap-1.5 font-display text-[1.02rem] font-bold tracking-[-0.02em] text-foreground">
                      {t}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </p>
                    <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{b}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
