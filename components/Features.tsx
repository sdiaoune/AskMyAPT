import { CheckCircle } from "lucide-react"

export function Features() {
  const items = [
    "Instant replies, 24/7 — Capture every after-hours lead automatically.",
    "Tour booking that sticks — Real-time scheduling reduces no-shows.",
    "Resident support that scales — From FAQs to maintenance intake, without tickets piling up.",
    "Multilingual by default — Welcome prospects in their language.",
    "Live handoff when it matters — Escalate to your team in one click.",
    "Analytics you can act on — See tours booked, first-response times, and conversion by channel.",
    "CRM/PMS sync — Push leads and tours to your existing systems.",
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-12">What you get</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <li key={item} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" aria-hidden="true" />
              <span className="text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
