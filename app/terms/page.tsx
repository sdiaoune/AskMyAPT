import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AskMyAPT",
  description: "Terms of Service for AskMyAPT",
}

export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Terms of Service</h1>
      <p className="text-zinc-700">This is where the terms of service will go.</p>
    </div>
  )
}
