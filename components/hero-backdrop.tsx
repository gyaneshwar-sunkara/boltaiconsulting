import { SillStackMark } from "@/components/logo"

/**
 * Hero furniture: the mark, ghosted.
 *
 * Two things learned the hard way. Ember registration brackets and an edge
 * rule read as stray orange marks beside the headline, so they are gone. And
 * the mark's sill bar is hardcoded to var(--primary), which at low opacity
 * read as an unrelated brown rectangle rather than part of a logo — hence
 * `[&>rect]:fill-current`, which pulls that last rect into the same tone as
 * the bars so the whole thing reads as one shape.
 *
 * Sits inside a container so it aligns to the content column rather than the
 * viewport edge. Decoration only: aria-hidden, behind content, no blur.
 */
export function HeroBackdrop({ mark = true }: { mark?: boolean }) {
  if (!mark) return null
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="container relative mx-auto h-full px-4 md:px-6">
        <SillStackMark className="absolute right-0 top-12 hidden h-[15rem] w-auto text-foreground opacity-[0.05] [&>rect]:fill-current md:block lg:h-[19rem]" />
      </div>
    </div>
  )
}
