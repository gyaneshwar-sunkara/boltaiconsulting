import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { Button } from "@/components/ui/button"
import { ContactFormInline } from "@/components/contact-form-inline"
import { FAQSchema } from "@/components/json-ld"
import { SERVICES } from "@/lib/services"
import { PRACTICES } from "@/lib/practices"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Straight answers on pricing, scope, timelines, code ownership, what happens after launch, and when we are the wrong firm for the job.",
  alternates: { canonical: "/faqs" },
}

/**
 * No figures anywhere. Answers explain how a number is arrived at instead,
 * because a band published before somebody has read what they would be buying
 * anchors the negotiation and caps it at the same time.
 * The previous version of this page quoted a different range and claimed
 * "70% lower than traditional agencies", which contradicted every service
 * page and was not a number anyone could check.
 *
 * Long, complete answers are deliberate. A page that fully answers a question
 * gets quoted by an answer engine; one that teases and asks for an email does
 * not. This is also the page most likely to be retrieved for a "how much does
 * X cost" query, so the numbers are stated plainly rather than gated.
 */
const GROUPS: { name: string; blurb: string; faqs: { q: string; a: string }[] }[] = [
  {
    name: "Money",
    blurb: "What it costs, and how the number is arrived at.",
    faqs: [
      {
        q: "How much does a project cost?",
        a: "It depends on the scope, which is why we do not publish a band. What we can tell you is how the number is arrived at: week one produces a written specification covering screens, rules, edge cases and what is explicitly out of scope, and the quote is made against that document. You get one fixed figure and a delivery date before anything is built, and it does not move afterwards. If the answer is going to be outside what you had in mind, you hear that on the first call rather than in week three.",
      },
      {
        q: "Is it really fixed price?",
        a: "Yes, against the specification you sign in week one. It does not move afterwards. If you change the scope, we re-quote the difference in writing and you approve it or you do not. What we will not do is absorb a change quietly and present it as a surprise at the end, which is the version of fixed price that gives the model a bad name.",
      },
      {
        q: "Why fixed price rather than hourly?",
        a: "Hourly billing means the person doing the estimating benefits from being wrong. Fixed price puts the risk of a bad estimate on us, which is where it belongs, because we are the ones who claim to be able to estimate. It also means you can budget. The trade is that it requires a written scope first, which is why week one exists.",
      },
      {
        q: "What does a retainer cost?",
        a: "Retainers are priced on the capacity you need rather than from a rate card. Managed support is scoped around response time and how much change work you expect month to month. Search visibility runs with a three-month minimum, because nothing measurable happens faster than that. Embedded engineers are priced per person per month. All of them are rolling monthly with 30 days' notice on both sides, and we quote after one call rather than before it.",
      },
      {
        q: "Do you take equity instead of payment?",
        a: "No. It sounds appealing to both sides and it aligns nobody. We would rather be a supplier you can fire than a shareholder you cannot.",
      },
    ],
  },
  {
    name: "Time",
    blurb: "How long things take, and what the weeks contain.",
    faqs: [
      {
        q: "Is four weeks realistic, or is that a sales number?",
        a: "It is our average for a scoped engagement, not a best case. Week one is scope and produces a written specification with no code. Weeks two and three are build, each ending in a Friday demo on your real data. Week four is deployment, migration, training and handover. Mobile runs four to six weeks because app store review is outside anyone's control.",
      },
      {
        q: "What if my project is genuinely bigger than four weeks?",
        a: "Some are, and we say so on the first call rather than discovering it in month two. Larger work gets quoted as phases, each one shipping something usable rather than progress toward a distant finish. If a programme gets paused for budget, you are left with working software instead of a half-built system.",
      },
      {
        q: "How much of my time does this take?",
        a: "About three hours a week: the Friday demo and a handful of decisions. Plus system access and one named person who can answer questions without convening a committee. That last part matters more than people expect — the single biggest cause of delay on our projects is waiting for a decision.",
      },
      {
        q: "How quickly can you start?",
        a: "Usually within two to three weeks of signing. If you need something faster, say so on the first call and we will tell you honestly whether it is possible rather than agreeing and then queueing you.",
      },
    ],
  },
  {
    name: "How it works",
    blurb: "Who does the work and what you actually receive.",
    faqs: [
      {
        q: "Who actually writes the code?",
        a: "The engineer who scoped it on your first call. There is no handoff to a different team and no junior inheriting the project in week three. That is the whole reason we run fewer engagements at once rather than more.",
      },
      {
        q: "Do I own the code?",
        a: "Yes, from the first commit rather than at handover. The repository lives in your organisation with us as collaborators. If you walk away halfway through, you keep everything built so far. The same applies to design files, infrastructure accounts and domains.",
      },
      {
        q: "What exactly do I get at the end?",
        a: "A deployed application, the repository, a written specification, an admin interface so you can run it without calling us, two recorded training sessions, plain-language documentation, and 30 days of post-launch fixes at no extra cost. Handover is a deliverable with a checklist, not a conversation at the end.",
      },
      {
        q: "What is Sill and do I have to use it?",
        a: "Sill is our delivery platform: accounts, permissions, billing, notifications, admin, audit logging, multi-tenancy and background jobs, already hardened in production across every build we ship. Roughly sixty per cent of a typical build already exists because of it, which is why four weeks is possible. You own the resulting code either way. If you need an architecture it does not support, we are the wrong firm and we will say so early.",
      },
      {
        q: "Can you work with our existing codebase?",
        a: "Usually. Week one becomes an audit instead of a greenfield scope: we read the code, map what is there, and tell you honestly what is worth keeping. Sometimes the answer is that a rebuild costs less than the integration, and if so we show you the arithmetic rather than just asserting it.",
      },
    ],
  },
  {
    name: "Technology",
    blurb: "What we build with, and what we will work in.",
    faqs: [
      {
        q: "What is your stack?",
        a: "TypeScript throughout: React and Next.js on the web, React Native and Expo on mobile, Node.js and NestJS on the server, PostgreSQL and Prisma for data, deployed to AWS, Vercel or Cloudflare. We pick tools with large hiring pools and long support horizons, because the clever choice is fun for us and expensive for whoever maintains it after.",
      },
      {
        q: "Do you work with WordPress?",
        a: "Yes. A large share of the sites we are asked to improve are WordPress, and you cannot do technical SEO, Core Web Vitals work or structured data on a site you refuse to touch. We work in WordPress and WooCommerce for search visibility, content and commerce engagements, and integrate them with whatever else you run. We would not usually recommend building a complex multi-tenant application on it, and we will say so if that is what you are asking for.",
      },
      {
        q: "We already run something different. Is that a problem?",
        a: "Generally not. If you have a team who knows Django, Rails, .NET or Laravel, working in your stack is worth more than any efficiency we would gain by moving you. Our defaults are defaults, not requirements. Where it does matter is if you want us to build on Sill, since that is TypeScript.",
      },
      {
        q: "How do you handle AI, and will our data be used to train a model?",
        a: "No, it will not. We use providers under contractual no-training terms, and where the constraint is absolute we run open models on infrastructure you control so nothing leaves your environment. Assistants answer from your own documents with citations attached, and say they do not know rather than inventing an answer. Model usage is billed at cost and shown separately from our fee.",
      },
    ],
  },
  {
    name: "Afterwards",
    blurb: "What happens once it is live.",
    faqs: [
      {
        q: "Do I have to take a support retainer?",
        a: "No. Thirty days of fixes are included with every build, and plenty of clients take handover and run it in-house. The documentation and training are delivered either way, because they are part of what you bought rather than a lever to keep you.",
      },
      {
        q: "What if we want to leave?",
        a: "Thirty days' notice, a handover session, current documentation and credentials transferred. It is written into the agreement from the start rather than negotiated at the end. A retainer should be kept because it is useful, not because leaving is painful.",
      },
      {
        q: "Can you maintain software somebody else built?",
        a: "Often, after a paid audit. We read the code first and tell you honestly whether it is maintainable or whether a retainer would be funding a slow rewrite. Hearing that up front is more useful than finding out over six months.",
      },
    ],
  },
  {
    name: "About us",
    blurb: "Including when you should not hire us.",
    faqs: [
      {
        q: "How big is the team?",
        a: "Small and senior, based in Orlando and working across the United States. We run fewer engagements at once on purpose, because the alternative is layered delivery where the person writing the code has never spoken to you.",
      },
      {
        q: "Can I see something you have built?",
        a: "Yes, all of it. Charten is live at charten.app and you can sign up right now. InvtoryX, Larder, Eshop and our Sill platform we will walk you through on a call. None of it is behind a client NDA, which means we can discuss every architectural decision and every thing we would do differently.",
      },
      {
        q: "When are you the wrong firm for this?",
        a: "When the work is permanent, core and full-time — hire, do not contract. When you need deep regulated-industry expertise we do not have. When you want a specific architecture our platform does not support. When your problem is solved by software that already exists, in which case we will tell you which one. An honest no costs us an engagement and is still the right answer.",
      },
      {
        q: "What do you need from us to start?",
        a: "System access, one named decision-maker, and roughly three hours a week. That is genuinely it. The projects that go badly are almost never technical — they are the ones where nobody on the client side could make a decision without a meeting.",
      },
    ],
  },
]

const ALL = GROUPS.flatMap((g) => g.faqs)

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <FAQSchema faqs={ALL} />
      <Header />

      {/* ── hero ───────────────────────────────────────────── */}
      <section className="bd bd-spot overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent-foreground">FAQs</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Questions
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              Straight answers, including the awkward ones.
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Real numbers rather than &ldquo;it depends&rdquo;, including a section on
              when you should hire somebody else.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#enquire">Ask us something<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="/services">See what we do</a>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {[
              [String(ALL.length), "Questions answered"],
              [String(SERVICES.length), "Services, each priced"],
              [String(PRACTICES.length), "Practice areas"],
              ["1 day", "Reply to an enquiry"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background p-6">
                <dt className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">{v}</dt>
                <dd className="mt-2 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── groups ─────────────────────────────────────────── */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.name}
          className={`border-t border-border py-18 md:py-24 ${gi % 2 === 0 ? "band-alt" : ""}`}
        >
          <div className="container mx-auto px-4 py-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                  {String(gi + 1).padStart(2, "0")} &mdash; {group.name}
                </p>
                <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-3xl">
                  {group.blurb}
                </h2>
              </div>

              {/* Plain dl rather than an accordion: collapsed answers are not
                  reliably retrievable, and this is the page most likely to be
                  quoted by an answer engine. */}
              <dl className="divide-y divide-border border-y border-border">
                {group.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="mb-2.5 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                      {f.q}
                    </dt>
                    <dd className="leading-relaxed text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      {/* ── enquire ────────────────────────────────────────── */}
      <section id="enquire" className="border-t border-border py-18 md:py-24">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.038em] text-foreground md:text-4xl">
              Still got a question?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ask it here and we&rsquo;ll answer directly. Anything asked more than
              once ends up on this page.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
