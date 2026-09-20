import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactFormInline } from "@/components/contact-form-inline"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { RelatedPosts } from "@/components/related-posts"
import { ArticleSchema } from "@/components/json-ld"
import { getService, MODEL_LABEL, type ServiceEntry } from "@/lib/services"
import { getPractice, type Practice } from "@/lib/practices"
import { ArrowUpRight } from "lucide-react"

/* Next 15 made `params` a promise — reading it synchronously logs an error
   today and will break outright in a future release. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      url: `/blog/${slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  /* The other half of the link declared in each post's frontmatter: the
     service and practice pages already list their reading, and this points
     back at what the reading is evidence for. */
  const linkedServices = post.services
    .map(getService)
    .filter((x): x is ServiceEntry => Boolean(x))
  const linkedPractices = post.practices
    .map(getPractice)
    .filter((x): x is Practice => Boolean(x))

  return (
    <main className="min-h-screen bg-background">
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={slug}
        date={post.date}
        tags={post.tags}
        readTime={post.readTime}
      />
      <Header />

      <article className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>

              <h1 className="mb-4 text-4xl sm:text-5xl font-display font-extrabold tracking-[-0.035em] text-foreground md:text-6xl">
                {post.title}
              </h1>

              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mt-10 prose-h1:mb-4 prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:leading-tight
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:leading-snug
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4 prose-p:text-base
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:text-base
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-6
                prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-img:rounded-lg prose-img:border prose-img:border-border prose-img:my-6
                prose-hr:border-border prose-hr:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </article>


      {/* ── what this post is evidence for ─────────────────── */}
      {(linkedServices.length > 0 || linkedPractices.length > 0) && (
        <section className="band-alt border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                We do this for a living
              </p>
              <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground md:text-3xl">
                The work behind this article.
              </h2>
            </div>

            {linkedServices.length > 0 && (
              <div className="mb-10">
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Buy it as
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {linkedServices.map((sv) => (
                    <a
                      key={sv.slug}
                      href={`/services/${sv.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <sv.icon className="h-4 w-4" />
                        </div>
                        <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                          {MODEL_LABEL[sv.model]}
                        </p>
                      </div>
                      <h3 className="mb-1 flex items-start gap-1.5 font-display text-base font-bold tracking-[-0.02em] text-foreground">
                        {sv.name}
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {MODEL_LABEL[sv.model]}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {linkedPractices.length > 0 && (
              <div>
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Practice areas
                </p>
                <ul className="flex flex-wrap gap-2">
                  {linkedPractices.map((pr) => (
                    <li key={pr.slug}>
                      <a
                        href={`/capabilities/${pr.slug}`}
                        className="inline-block rounded-md border border-border bg-secondary px-3 py-2 text-[0.82rem] leading-none text-secondary-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        {pr.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <RelatedPosts slug={slug} />

      <article>
        <div className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <ContactFormInline
              showHeader={true}
              customTitle="Got a project that sounds like this?"
              customDescription="Tell us what you're trying to build. We'll come back within one business day with a scope, a number and a date."
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
