"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

/* useLayoutEffect warns when React renders this on the server, and the server
   never runs effects anyway. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * Counts a number up when it scrolls into view.
 *
 * Every figure on this site was static text, which is a small thing that adds
 * up: a page where nothing responds to arriving reads as a printed document.
 * This only animates when the value is actually numeric, so "Orlando, FL"
 * passes straight through, and it respects prefers-reduced-motion.
 *
 * The state starts at the *real* value rather than at zero, which matters more
 * than the animation does. Server-rendered HTML is what a crawler reads and
 * what an answer engine quotes, and an earlier version of this shipped
 * "0 practice areas" and "0% already built" into every one of those. The reset
 * to zero happens in a layout effect, which runs before the browser paints, so
 * the count still starts from nothing on screen while the markup underneath
 * always carries the figure.
 *
 * Runs once, then disconnects. No library.
 */
export function CountUp({
  value,
  duration = 1100,
  className = "",
}: {
  value: string
  duration?: number
  className?: string
}) {
  const match = value.match(/^(\D*?)(\d[\d,]*)(.*)$/)
  const target = match ? Number(match[2].replace(/,/g, "")) : null

  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState<number | null>(target)

  useIsomorphicLayoutEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    setShown(0)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          // ease-out cubic, so it decelerates into the final number
          setShown(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  if (target === null) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {match![1]}
      {(shown ?? target).toLocaleString()}
      {match![3]}
    </span>
  )
}
