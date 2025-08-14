import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AskMyAPT",
  description: "Privacy policy for AskMyAPT",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <p className="text-zinc-700 mb-4">
        Your privacy is important to us. This policy explains what information
        we collect, how we use it, and the choices you have about your data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Information We Collect</h2>
      <p className="text-zinc-700 mb-4">
        We collect information you provide directly, such as contact details and
        messages you send us. We also gather limited technical data like your IP
        address and browser settings to help us improve the service.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">How We Use Information</h2>
      <p className="text-zinc-700 mb-4">
        The information we collect is used to operate and enhance AskMyAPT,
        provide customer support, and communicate updates. We do not sell your
        personal data to third parties.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Sharing of Information</h2>
      <p className="text-zinc-700 mb-4">
        We may share your information with trusted service providers who assist
        us in running the platform. These providers are obligated to safeguard
        your data and use it only for the purposes we specify.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Cookies</h2>
      <p className="text-zinc-700 mb-4">
        Cookies help us remember your preferences and understand how you use the
        site. You can disable cookies through your browser settings, but some
        features may not function properly.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Data Security</h2>
      <p className="text-zinc-700 mb-4">
        We implement reasonable safeguards to protect your information from
        unauthorized access or disclosure. However, no method of transmission is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Changes to This Policy</h2>
      <p className="text-zinc-700 mb-4">
        We may update this policy from time to time. If we make significant
        changes, we will notify you by posting the revised policy on this page
        with a new effective date.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Contact Us</h2>
      <p className="text-zinc-700">
        If you have questions about this policy or our practices, please contact
        us at support@askmyapt.com.
      </p>
    </div>
  )
}
