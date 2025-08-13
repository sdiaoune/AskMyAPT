interface StatBarProps {
  toursBooked?: string | number | null
  responseTime?: string | null
  hoursSaved?: string | number | null
}

export function StatBar({ toursBooked, responseTime, hoursSaved }: StatBarProps) {
  const stats = [
    { label: "Tours booked (last 30 days)", value: toursBooked },
    { label: "Median response time", value: responseTime },
    { label: "Staff hours saved/month", value: hoursSaved },
  ].filter((stat) => stat.value != null)

  if (stats.length === 0) return null

  return (
    <section className="bg-white py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-center text-sm sm:text-base">
          {stats.map((stat) => (
            <div key={stat.label} className="font-medium text-zinc-700">
              {stat.label}: <span className="text-zinc-900">{stat.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-zinc-500 text-center">Pilot averages; results vary.</p>
      </div>
    </section>
  )
}
