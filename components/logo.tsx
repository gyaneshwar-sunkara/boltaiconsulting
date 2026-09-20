import { cn } from "@/lib/utils"

/**
 * The SillStack mark — four stacked forms on one sill.
 *
 * Bars inherit `currentColor`, so the mark follows whatever text colour
 * surrounds it and works on either theme without a second file.
 * The sill is always the accent.
 *
 * Geometry is the 64-unit grid from the brand package. Do not redraw it.
 */
export function SillStackMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="SillStack"
    >
      <g fill="currentColor">
        <rect x="6" y="22" width="12" height="21" rx="1.5" />
        <rect x="22" y="9" width="8" height="34" rx="1.5" />
        <rect x="34" y="29" width="14" height="14" rx="1.5" />
        <rect x="52" y="16" width="6" height="27" rx="1.5" />
      </g>
      <rect x="6" y="46" width="52" height="9" rx="2" fill="var(--primary)" />
    </svg>
  )
}

/**
 * Mark + wordmark lockup.
 *
 * Everything is sized in `em` off the wrapper's font-size, which fixes the
 * proportions the brand guide specifies:
 *   mark height  = 1.125em  (wordmark font-size = mark height × 0.889)
 *   gap          = 0.3em    (17 of the 64-unit grid)
 * Change `className`'s text size and the whole lockup scales correctly.
 */
export function SillStackLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.3em] text-xl leading-none",
        className,
      )}
    >
      <SillStackMark className="h-[1.125em] w-[1.125em]" />
      <span className="font-display font-extrabold tracking-[-0.04em]">
        SillStack
      </span>
    </span>
  )
}
