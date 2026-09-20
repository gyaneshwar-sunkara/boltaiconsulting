import { INDUSTRIES, getIndustry } from "@/lib/industries"
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "SillStack industry"

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const i = getIndustry(slug)
  return ogCard({
    eyebrow: "Industry",
    title: i ? `Software for ${i.name.toLowerCase()}` : "SillStack",
    footer: "sillstack.com",
  })
}
