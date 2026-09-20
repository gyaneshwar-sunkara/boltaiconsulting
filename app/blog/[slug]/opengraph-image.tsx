import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "SillStack"

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return ogCard({
    eyebrow: post?.category ?? "Insights",
    title: post?.title ?? "SillStack",
    footer: post?.readTime ?? "sillstack.com",
  })
}
