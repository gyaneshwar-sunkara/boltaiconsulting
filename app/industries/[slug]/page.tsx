import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IndustryPage } from "@/components/industry-page"
import { INDUSTRIES, getIndustry } from "@/lib/industries"

/* Next 15 made `params` a promise, so both functions await it before reading. */

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) return { title: "Not found" }

  return {
    title: ind.name,
    description: ind.metaDescription,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      title: `${ind.name} · SillStack`,
      description: ind.metaDescription,
      url: `/industries/${ind.slug}`,
      type: "website",
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) notFound()

  return <IndustryPage ind={ind} />
}
