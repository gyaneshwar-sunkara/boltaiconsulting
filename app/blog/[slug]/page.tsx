import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactFormInline } from "@/components/contact-form-inline"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - BoltBit Consulting Blog`,
    description: post.description,
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
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
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

              <h1 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
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

        <div className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <ContactFormInline
              showHeader={true}
              customTitle="Ready to Build Something Amazing?"
              customDescription="Whether you need AI integration, mobile apps, or web development, we're here to help you ship faster and smarter."
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
