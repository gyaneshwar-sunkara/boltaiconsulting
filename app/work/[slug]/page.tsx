import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { WorkPage } from "@/components/work-page"
import { WORK, getWork } from "@/lib/work"
import { CaseStudySchema } from "@/components/json-ld"

/* Next 15 made `params` a promise, so both functions await it before reading. */

export async function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const w = getWork(slug)
  if (!w) return { title: "Not found" }

  return {
    title: w.name,
    description: w.metaDescription,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: {
      title: `${w.name} · SillStack`,
      description: w.metaDescription,
      url: `/work/${w.slug}`,
      type: "article",
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const w = getWork(slug)
  if (!w) notFound()

  return (
    <>
      <CaseStudySchema
        name={w.name}
        tagline={w.tagline}
        description={w.metaDescription}
        url={`/work/${w.slug}`}
        date={`${w.year.slice(0, 4)}-01-01`}
        sector={w.sector}
        stack={w.stack.map((s) => s.items)}
      />
      <WorkPage w={w} />
    </>
  )
}
