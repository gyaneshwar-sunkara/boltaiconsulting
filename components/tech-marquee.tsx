/**
 * Stands in for the client-logo bar every consulting site has.
 *
 * We do not have client logos to show yet, and inventing them is the fastest
 * way to lose a prospect who checks. This does the same visual job honestly:
 * it says "these people work at this level" without claiming anyone's business.
 *
 * Every name here also appears in a stack section on a practice or service
 * page, so the bar is a summary of claims made elsewhere rather than a longer
 * list of its own. If something comes off this list it should come off there
 * too — a prospect who asks about an item expects a page behind it.
 *
 * Two rows travelling in opposite directions at slightly different speeds.
 * One row of eighty would either scroll too fast or run for three minutes,
 * and the mismatched durations stop the pair reading as a single mechanism.
 */

/** Languages, frameworks, data and infrastructure. */
const BUILD = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS",
  "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "Radix UI",
  "Figma", "PostgreSQL", "Prisma", "SQLite", "Redis", "BullMQ",
  "GraphQL", "REST", "WebSockets", "Python", "Docker", "Kubernetes",
  "Terraform", "SST", "AWS", "Vercel", "Cloudflare", "Fly.io",
  "GitHub Actions", "Playwright", "Vitest", "Jest", "k6", "axe-core",
  "OpenTelemetry", "Sentry", "Storybook",
]

/** Platforms, payments, identity, AI and growth tooling. */
const PLATFORMS = [
  "Claude", "OpenAI", "Llama", "pgvector", "Stripe", "Stripe Terminal",
  "Adyen", "Authorize.net", "Square", "Toast", "Clover", "Lightspeed",
  "Shopify", "WooCommerce", "WordPress", "QuickBooks", "Xero", "NetSuite", "HubSpot",
  "Salesforce", "Pipedrive", "Auth.js", "Auth0", "Okta", "Entra ID",
  "SAML", "OIDC", "SCIM", "Twilio", "Resend", "Customer.io", "GA4",
  "Search Console", "Schema.org", "JSON-LD", "dbt", "BigQuery", "DuckDB",
  "Metabase", "Looker Studio", "Dependabot",
]

const ROWS = [
  { items: BUILD, duration: "96s", direction: "normal" },
  { items: PLATFORMS, duration: "112s", direction: "reverse" },
] as const

export function TechMarquee() {
  return (
    <section className="border-y border-border bg-background py-10">
      {/* The bar was decorative and unlinkable. The eight names we actually
          run in production now have pages, so the summary points at them. */}
      <p className="mb-7 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        Built with, and fluent in
      </p>

      <div className="ss-marquee relative space-y-3 overflow-hidden md:space-y-4">
        {ROWS.map((row) => (
          <div
            key={row.direction}
            className="ss-marquee-track"
            data-direction={row.direction}
            style={{ "--ss-marquee-duration": row.duration } as React.CSSProperties}
          >
            {/* Two identical copies: the keyframes translate by exactly -50%,
                so the second copy is in place the instant the first wraps. */}
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1}
              >
                {row.items.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center whitespace-nowrap px-6 font-display text-base font-bold tracking-[-0.02em] text-muted-foreground/70 md:px-8 md:text-lg"
                  >
                    {tech}
                    <span className="ml-6 h-1.5 w-1.5 rounded-full bg-primary/40 md:ml-8" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center">
        <a
          href="/technologies"
          className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-70"
        >
          What we build with, and what we would not &rarr;
        </a>
      </p>
    </section>
  )
}
