import { getAllPosts } from "@/lib/blog"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * The McKinsey/BCG move: an insights hub that argues you know the field.
 * We already had nine posts written and completely invisible from the homepage.
 */
export function Insights() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="bd bd-dots border-t border-border py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Insights
            </p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              What we&rsquo;ve learned shipping.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Written by the people doing the work, about problems we actually hit.
            </p>
          </div>

          <Button
            variant="outline"
            className="shrink-0 border-border font-semibold"
            asChild
          >
            <Link href="/blog">
              All articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-accent-foreground">
                  {post.category}
                </span>
                <span className="font-mono text-[0.62rem] text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mb-3 flex items-start gap-1.5 font-display text-lg font-bold leading-snug tracking-[-0.018em] text-foreground">
                <span className="text-balance">{post.title}</span>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>

              <p className="mb-6 line-clamp-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <p className="mt-auto font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
