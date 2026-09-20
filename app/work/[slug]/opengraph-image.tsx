import { WORK, getWork } from "@/lib/work"
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "SillStack case study"

export async function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const w = getWork(slug)
  return ogCard({
    eyebrow: w ? `Case study · ${w.sector}` : "Case study",
    title: w?.tagline ?? "SillStack",
    footer: w ? `${w.name} · ${w.status}` : "sillstack.com",
  })
}
