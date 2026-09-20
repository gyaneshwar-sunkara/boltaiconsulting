"use client"

import { useEffect, useState } from "react"

/**
 * A hairline of ember across the top of the viewport showing how far down the
 * page you are. Two pixels of chrome that make long pages — and most of these
 * are long — feel navigable rather than endless.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        className="h-full bg-primary transition-[width] duration-75 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
