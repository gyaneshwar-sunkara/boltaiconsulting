import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { BlogBrowser } from "@/components/blog-browser"
import { getAllPosts } from "@/lib/blog"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CollectionSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on software delivery, AI integration, POS systems and search visibility — by the people doing the work, about problems we actually hit.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [lead, ...rest] = posts

  return (
    <main className="min-h-screen bg-background">
      <CollectionSchema
        name="Insights"
        description="Writing on software delivery, AI integration, POS systems and search visibility, by the people doing the work."
        url="/blog"
        items={posts.map((p) => ({
          name: p.title,
          url: `/blog/${p.slug}`,
          description: p.description,
        }))}
      />
      <Header />

      <section className="bd bd-dots overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16">
        <HeroBackdrop />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-accent px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-foreground">
              Insights
            </p>
            <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
              What we&rsquo;ve learned shipping.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Written by the people doing the work, about problems we actually hit.
              No listicles, no reheated press releases.
            </p>
          </div>
        </div>
      </section>

      {/* lead article */}
      {lead && (
        <section className="pb-14">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 lg:grid-cols-[1.3fr_1fr]"
            >
              <div className="p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-md bg-primary px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary-foreground">
                    Latest
                  </span>
                  <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-accent-foreground">
                    {lead.category}
                  </span>
                  <span className="font-mono text-[0.62rem] text-muted-foreground">
                    {lead.readTime}
                  </span>
                </div>

                <h2 className="mb-4 flex items-start gap-2 text-balance font-display text-2xl font-extrabold leading-[1.12] tracking-[-0.03em] text-card-foreground md:text-4xl">
                  {lead.title}
                  <ArrowUpRight className="mt-1.5 h-6 w-6 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h2>

                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {lead.description}
                </p>
              </div>

              <div className="border-t border-border bg-secondary/50 p-8 md:p-12 lg:border-l lg:border-t-0">
                <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Published
                </p>
                <p className="mb-8 font-display text-lg font-bold text-foreground">
                  {new Date(lead.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Topics
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {lead.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[0.62rem] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-border py-14 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <BlogBrowser posts={rest.length ? rest : posts} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
