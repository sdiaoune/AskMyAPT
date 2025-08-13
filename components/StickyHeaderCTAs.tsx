"use client"

import { Button } from "@/components/ui/button"

export function StickyHeaderCTAs() {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        data-cta="header-secondary"
        aria-label="Watch a 2-min demo"
      >
        Watch a 2-min demo
      </Button>
      <Button
        size="sm"
        data-cta="header-primary"
        aria-label="Book a demo"
        className="bg-amber-600 hover:bg-amber-700 text-white"
      >
        Book a demo
      </Button>
    </div>
  )
}
