"use client"

import Link from "next/link"
import { StickyHeaderCTAs } from "@/components/StickyHeaderCTAs"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          AskMyAPT
        </Link>
        <StickyHeaderCTAs />
      </div>
    </header>
  )
}
