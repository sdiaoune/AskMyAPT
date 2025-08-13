import { ContactForm } from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - AskMyAPT",
  description: "Get in touch with AskMyAPT",
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 id="contact-heading" className="text-3xl font-bold text-zinc-900 mb-8">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  )
}
