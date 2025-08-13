import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RiskTrust() {
  const bullets = [
    "Fair Housing-aware replies with human oversight",
    "Encryption in transit & at rest",
    "SSO and audit logging available",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
          Built for multifamily, ready for compliance
        </h2>
        <ul className="space-y-3 mb-8">
          {bullets.map((b) => (
            <li key={b} className="text-zinc-700">{b}</li>
          ))}
        </ul>
        <Link
          href="/security"
          className="inline-flex items-center text-indigo-600 font-medium hover:underline"
        >
          See Security <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
