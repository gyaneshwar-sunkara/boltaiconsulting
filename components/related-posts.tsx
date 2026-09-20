import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Button } from "@/components/ui/button"

/**
 * Related by shared tags, then by category, then padded with recent.
 *
 * Internal linking is one of the few SEO levers entirely within our control,
 * and it matters for retrieval too — a page that links to three related pages
 * on the same subject reads as part of a body of work rather than an orphan.
 */
export function RelatedPosts({ slug }: { slug: string }) {
  const all = getAllPosts()
  const current = all.find((p) => p.slug === slug)
  if (!current) return null

  const others = all.filter((p) => p.slug !== slug)

  const scored = others
    .map((p) => {
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length
      const sameCategory = p.category === current.category ? 1 : 0
      return { post: p, score: sharedTags * 2 + sameCategory }
    })
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))

  const related = scored.filter((s) => s.score > 0).slice(0, 3).map((s) => s.post)
  const relatedSlugs = new Set(related.map((p) => p.slug))
  const recent = others.filter((p) => !relatedSlugs.has(p.slug)).slice(0, 4)

  return (
    <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {related.length > 0 && (
          <>
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Related reading
            </p>
            <div className="mb-16 grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60"
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-accent-foreground">
                      {p.category}
                    </span>
                    <span className="font-mono text-[0.62rem] text-muted-foreground">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="mb-3 flex items-start gap-1.5 font-display text-lg font-bold leading-snug tracking-[-0.018em] text-foreground">
                    <span className="text-balance">{p.title}</span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="line-clamp-2 text-[0.88rem] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {recent.length > 0 && (
          <>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                More recent
              </p>
              <Button variant="outline" size="sm" className="font-semibold" asChild>
                <Link href="/blog">
                  All articles
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {recent.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col gap-2 py-5 transition-colors hover:bg-background/60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-display text-base font-bold tracking-[-0.015em] text-foreground group-hover:text-accent-foreground">
                      {p.title}
                    </span>
                    <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {p.category} &middot;{" "}
                      {new Date(p.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
