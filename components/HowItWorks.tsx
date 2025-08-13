export function HowItWorks() {
  const steps = [
    {
      title: "Install in minutes",
      description: "Add one snippet to your site.",
    },
    {
      title: "Connect your systems",
      description: "Sync availability, pricing, and policies with your CRM/PMS.",
    },
    {
      title: "Go live",
      description: "Capture every lead; we’ll tune replies to your buildings and brand.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-zinc-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
