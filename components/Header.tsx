"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#demo", label: "Demo" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          AskMyAPT
        </Link>
        <nav className="hidden md:flex space-x-8" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white" data-cta="header-primary">
              <Link href="https://calendly.com/soya-myhoneybot">
                Book a demo
              </Link>
            </Button>
          </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-controls="mobile-menu"
                aria-expanded={open}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent id="mobile-menu" side="top" className="bg-white" aria-label="Mobile">
              <div className="mt-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                  <Button
                    asChild
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                    data-cta="header-primary"
                  >
                    <Link
                      href="https://calendly.com/soya-myhoneybot"
                      onClick={() => setOpen(false)}
                    >
                      Book a demo
                    </Link>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
