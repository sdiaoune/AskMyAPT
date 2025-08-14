import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AskMyAPT",
  description: "Privacy policy for AskMyAPT",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <p className="text-zinc-700">This is where the privacy policy will go.</p>
    </div>
  )
}
