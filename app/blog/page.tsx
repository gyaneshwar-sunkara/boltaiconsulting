import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { getAllPosts } from "@/lib/blog"
import { Calendar, Clock, Tag } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - BoltBit Consulting",
  description:
    "Insights on AI-powered development, software engineering best practices, and technology trends from the BoltBit Consulting team.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = posts.filter((post) => post.featured)
  const allPosts = posts

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Insights on AI-powered development, rapid software engineering, and building products that users love.
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground">
              Featured Posts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="p-8 border-border bg-card hover:border-primary/50 transition-all h-full cursor-pointer group">
                    <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                      <Tag className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground">
            All Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="p-6 border-border bg-card hover:border-primary/50 transition-all h-full cursor-pointer group">
                  <div className="flex items-center gap-2 mb-3 text-sm text-primary">
                    <Tag className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
