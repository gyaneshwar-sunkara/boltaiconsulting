"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, X, ArrowUpRight } from "lucide-react"
import type { BlogPostMetadata } from "@/lib/blog"

const ALL = "All"

export function BlogBrowser({ posts }: { posts: BlogPostMetadata[] }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(ALL)
  const [tag, setTag] = useState<string | null>(null)

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(posts.map((p) => p.category))).sort()],
    [posts],
  )

  const tags = useMemo(
    () =>
      Array.from(new Set(posts.flatMap((p) => p.tags)))
        .sort()
        .slice(0, 14),
    [posts],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      if (category !== ALL && p.category !== category) return false
      if (tag && !p.tags.includes(tag)) return false
      if (!q) return true
      // search title, description and tags — not body, which isn't loaded client-side
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      )
    })
  }, [posts, query, category, tag])

  const filtering = query !== "" || category !== ALL || tag !== null

  function clear() {
    setQuery("")
    setCategory(ALL)
    setTag(null)
  }

  return (
    <div>
      {/* search + category */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-md border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* tags */}
      <div className="mb-8 flex flex-wrap items-center gap-2 border-y border-border py-4">
        <span className="mr-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
          Topics
        </span>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(tag === t ? null : t)}
            aria-pressed={tag === t}
            className={`rounded-md px-2.5 py-1 text-[0.72rem] transition-colors ${
              tag === t
                ? "bg-accent text-accent-foreground ring-1 ring-primary"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* result count + clear */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
          {results.length} {results.length === 1 ? "article" : "articles"}
          {filtering && " matching"}
        </p>
        {filtering && (
          <button
            onClick={clear}
            className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-70"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        )}
      </div>

      {/* results */}
      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-20 text-center">
          <p className="mb-2 font-display text-xl font-bold text-foreground">
            Nothing matches that.
          </p>
          <p className="mb-6 text-muted-foreground">
            Try a different term, or clear the filters.
          </p>
          <button
            onClick={clear}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Show all articles
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60"
            >
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-accent-foreground">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="rounded-md border border-primary px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
                    Featured
                  </span>
                )}
                <span className="font-mono text-[0.62rem] text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h2 className="mb-3 flex items-start gap-1.5 font-display text-lg font-bold leading-snug tracking-[-0.018em] text-foreground">
                <span className="text-balance">{post.title}</span>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </h2>

              <p className="mb-6 line-clamp-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="font-mono text-[0.6rem] text-muted-foreground">
                  {post.tags.slice(0, 2).join(" · ")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
