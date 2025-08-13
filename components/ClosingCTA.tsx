import { Button } from "@/components/ui/button"

export function ClosingCTA() {
  return (
    <section className="py-20 bg-indigo-600 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate leasing?</h2>
        <p className="text-xl text-indigo-100 mb-8">It only takes 15 minutes to see it in action.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
            data-cta="closing-primary"
            aria-label="Book a demo"
          >
            Book a demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-indigo-600 hover:bg-indigo-50"
            data-cta="closing-secondary"
            aria-label="Watch a 2-min demo"
          >
            Watch a 2-min demo
          </Button>
        </div>
      </div>
    </section>
  )
}
