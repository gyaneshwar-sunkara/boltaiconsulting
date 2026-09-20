import { PRACTICES, getPractice } from "@/lib/practices"
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "SillStack practice area"

export async function generateStaticParams() {
  return PRACTICES.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPractice(slug)
  return ogCard({
    eyebrow: "Practice area",
    title: p?.name ?? "SillStack",
    footer: p ? `${p.covers.length} capabilities` : "sillstack.com",
  })
}
