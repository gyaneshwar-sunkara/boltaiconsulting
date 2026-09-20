import { PRACTICES, CAPABILITY_COUNT } from "@/lib/practices"
import { CountUp } from "@/components/count-up"

/**
 * Sits directly under the hero, whose side rail already carries the delivery
 * promise (four weeks / fixed price / Friday demos). Repeating those here read
 * as padding, so this bar answers the buyer's *next* question instead: fine,
 * but what can you actually do, and have you done it?
 *
 * The first two numbers are derived, so adding a practice area updates the
 * headline figure and nobody has to remember to edit it here.
 */
const stats = [
  { value: String(PRACTICES.length), label: "Practice areas" },
  { value: String(CAPABILITY_COUNT), label: "Capabilities in-house" },
  { value: "5", label: "Projects delivered" },
  { value: "Orlando, FL", label: "Serving the United States" },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-secondary/30 py-14 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="ss-reveal border-l-2 border-primary pl-4 md:pl-5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground sm:text-3xl md:text-4xl">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-2 font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
