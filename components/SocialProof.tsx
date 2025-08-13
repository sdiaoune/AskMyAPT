interface CaseStudy {
  quote: string
  attribution: string
  results: string
}

interface SocialProofProps {
  cases?: CaseStudy[]
}

export function SocialProof({ cases = [] }: SocialProofProps) {
  if (cases.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-12">
          Teams like yours are closing more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="p-8 border rounded-2xl shadow-sm">
              <p className="text-lg text-zinc-700 mb-6">“{item.quote}”</p>
              <p className="font-semibold text-zinc-900 mb-1">{item.attribution}</p>
              <p className="text-sm text-zinc-600">{item.results}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
