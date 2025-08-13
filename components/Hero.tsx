"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white py-20 sm:py-32 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
          Fill units faster—while your team sleeps.
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          AskMyAPT replies instantly, books tours, and handles resident requests—24/7—so your team can focus on closing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
            data-cta="hero-primary"
            aria-label="Book a demo"
          >
            Book a demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-cta="hero-secondary"
            aria-label="Watch a 2-min demo"
          >
            Watch a 2-min demo
          </Button>
        </div>
      </div>
    </section>
  )
}
