import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
            AskMyAPT
          </Link>
          <nav aria-label="Footer" className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              Security
            </Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-zinc-500 text-sm">© 2025 AskMyAPT Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
