import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demo Confirmed - AskMyAPT",
  description: "Confirmation page for scheduled demo",
}

export default function DemoConfirmedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Demo Confirmed</h1>
      <p className="text-zinc-700">
        Thanks for booking a demo. You'll receive the meeting details via email shortly.
      </p>
    </div>
  )
}
