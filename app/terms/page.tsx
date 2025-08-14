import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AskMyAPT",
  description: "Terms of Service for AskMyAPT",
}

export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Terms of Service</h1>
      <p className="text-zinc-700 mb-4">
        These Terms govern your use of AskMyAPT. By accessing or using the
        service, you agree to be bound by them.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Use of Service</h2>
      <p className="text-zinc-700 mb-4">
        You may use the platform only in compliance with these Terms and all
        applicable laws. You are responsible for the content you submit and for
        maintaining the security of your account.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Accounts</h2>
      <p className="text-zinc-700 mb-4">
        When you create an account, you must provide accurate information and
        keep it up to date. You are responsible for any activity that occurs
        under your credentials and should notify us of any unauthorized use.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Intellectual Property</h2>
      <p className="text-zinc-700 mb-4">
        All content and materials on AskMyAPT are the property of AskMyAPT Inc.
        or its licensors and are protected by copyright and other laws. You may
        not copy, modify, or distribute any part of the service without written
        permission.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Termination</h2>
      <p className="text-zinc-700 mb-4">
        We may suspend or terminate your access to the service at any time if
        you violate these Terms or for any other reason. Upon termination, your
        right to use the service will cease immediately.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Disclaimer</h2>
      <p className="text-zinc-700 mb-4">
        The service is provided on an "as is" and "as available" basis without
        warranties of any kind, either express or implied. AskMyAPT disclaims
        all warranties including merchantability, fitness for a particular
        purpose, and non-infringement.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Limitation of Liability</h2>
      <p className="text-zinc-700 mb-4">
        To the fullest extent permitted by law, AskMyAPT shall not be liable for
        any indirect, incidental, or consequential damages arising out of your
        use or inability to use the service.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Changes to These Terms</h2>
      <p className="text-zinc-700 mb-4">
        We may modify these Terms from time to time. If we make material
        changes, we will post the revised Terms on this page with an updated
        effective date. Your continued use of the service constitutes acceptance
        of the new Terms.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Contact</h2>
      <p className="text-zinc-700">
        If you have any questions about these Terms, please contact us at
        support@askmyapt.com.
      </p>
    </div>
  )
}
