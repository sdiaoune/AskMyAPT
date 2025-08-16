import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AskMyAPT — AI Leasing Coordinator that Books Tours 24/7",
  description:
    "Capture every lead, reply instantly, and book tours 24/7. AskMyAPT connects to your CRM/PMS, reduces busywork, and helps property teams fill units faster.",
  alternates: { canonical: "https://askmyapt.com" },
  openGraph: {
    title: "AskMyAPT — AI Leasing Coordinator that Books Tours 24/7",
    description:
      "Capture every lead, reply instantly, and book tours 24/7. AskMyAPT connects to your CRM/PMS, reduces busywork, and helps property teams fill units faster.",
    url: "https://askmyapt.com",
    siteName: "AskMyAPT",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AskMyAPT — AI Leasing Coordinator that Books Tours 24/7",
    description:
      "Capture every lead, reply instantly, and book tours 24/7. AskMyAPT connects to your CRM/PMS, reduces busywork, and helps property teams fill units faster.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/AskMyAPTLogo.svg",
  },
}

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AskMyAPT",
  url: "https://askmyapt.com",
  logo: "https://askmyapt.com/AskMyAPTLogo.svg",
}

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AskMyAPT",
  description:
    "AI assistant for apartment communities that answers questions, books tours, and handles resident requests automatically.",
  brand: { "@type": "Brand", name: "AskMyAPT" },
  offers: [
    { "@type": "Offer", name: "Starter", price: "99", priceCurrency: "USD", url: "https://askmyapt.com/#pricing" },
    { "@type": "Offer", name: "Growth", price: "299", priceCurrency: "USD", url: "https://askmyapt.com/#pricing" },
    { "@type": "Offer", name: "Pro", price: "799", priceCurrency: "USD", url: "https://askmyapt.com/#pricing" },
  ],
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does AskMyAPT handle after-hours leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It answers prospect questions and captures leads 24/7, even when your office is closed.",
      },
    },
    {
      "@type": "Question",
      name: "Can AskMyAPT book property tours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it schedules tours directly on your calendar.",
      },
    },
    {
      "@type": "Question",
      name: "Does AskMyAPT support multiple languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can chat with prospects in English, Spanish, and French.",
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17484055351"
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17484055351');
          `}
        </Script>
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify([orgLd, productLd, faqLd])}
        </Script>
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
