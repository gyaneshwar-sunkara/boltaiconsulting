/**
 * Diagrams.
 *
 * The site had no imagery at all — text, cards and hairlines, which is why it
 * kept reading as plain no matter what the backgrounds did. Comparable firms
 * fill that gap with stock photography and vendor illustrations; neither is
 * available or honest here.
 *
 * Diagrams are the alternative, and for a consultancy they are better: they
 * explain the argument the page is already making, they are ours, and they
 * cost nothing to keep accurate. All inline SVG on theme tokens, so they
 * follow dark and light without a second asset.
 */

/* ── The four weeks ───────────────────────────────────────────────── */
export function TimelineDiagram({ className = "" }: { className?: string }) {
  const weeks = [
    { label: "Scope", start: 0, span: 1, tone: "muted" },
    { label: "Build", start: 1, span: 2, tone: "primary" },
    { label: "Ship", start: 3, span: 1, tone: "muted" },
  ]
  return (
    <div className={className}>
      <div className="mb-3 grid grid-cols-4 gap-2">
        {["Week 1", "Week 2", "Week 3", "Week 4"].map((w) => (
          <p
            key={w}
            className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            {w}
          </p>
        ))}
      </div>

      {/* the bars */}
      <div className="relative grid grid-cols-4 gap-2">
        {weeks.map((w) => (
          <div
            key={w.label}
            style={{ gridColumn: `${w.start + 1} / span ${w.span}` }}
            className={`flex h-14 items-center rounded-lg px-4 ${
              w.tone === "primary"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground"
            }`}
          >
            <span className="font-display text-sm font-bold tracking-[-0.01em]">
              {w.label}
            </span>
          </div>
        ))}
      </div>

      {/* Friday demo markers under the build weeks */}
      <div className="mt-2 grid grid-cols-4 gap-2">
        <div />
        {[1, 2].map((i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="font-mono text-[0.55rem] uppercase leading-tight tracking-[0.1em] text-muted-foreground">
              Friday demo
            </span>
          </div>
        ))}
        <div className="flex items-start gap-1.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
          <span className="font-mono text-[0.55rem] uppercase leading-tight tracking-[0.1em] text-muted-foreground">
            Live
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Sixty per cent already built ─────────────────────────────────── */
export function PlatformStackDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-border">
        {/* the part that is theirs */}
        <div className="border-b border-border bg-card px-5 py-6">
          <p className="mb-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
            40% &middot; built for you
          </p>
          <p className="font-display text-base font-bold tracking-[-0.02em] text-card-foreground">
            Your product
          </p>
        </div>

        {/* the part that already exists */}
        <div className="bg-background px-5 py-5">
          <p className="mb-3 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-primary">
            60% &middot; already running
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              "Accounts", "Permissions", "Billing", "Notifications",
              "Admin", "Audit log", "Multi-tenancy", "Jobs",
            ].map((m) => (
              <div
                key={m}
                className="rounded border border-border bg-secondary px-2.5 py-1.5 text-[0.7rem] leading-none text-secondary-foreground"
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* the sill */}
        <div className="bg-primary px-5 py-3">
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-primary-foreground">
            Sill &middot; maintained continuously
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Two tables, one product ──────────────────────────────────────── */
export function DualTableDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
            POS-owned
          </p>
          <ul className="space-y-1.5 text-[0.8rem] text-muted-foreground">
            {["Price", "Tax", "Modifiers", "Stock"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-3 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">
            Sync overwrites freely
          </p>
        </div>

        <div className="flex items-center justify-center sm:flex-col">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-primary">
            merged on read
          </span>
        </div>

        <div className="rounded-xl border border-primary/40 bg-card p-5">
          <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-primary">
            Merchant-owned
          </p>
          <ul className="space-y-1.5 text-[0.8rem] text-muted-foreground">
            {["Description", "Photography", "Web-only items", "SEO copy"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-3 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-primary">
            Sync never touches
          </p>
        </div>
      </div>
    </div>
  )
}
