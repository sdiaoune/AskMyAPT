"use client"

import {
  MessageCircle,
  Calendar,
  Database,
  Clock,
  Users,
  BarChart3,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Bot,
  Scale,
  Lock,
  Key,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChatDemo } from "@/components/ChatDemo"
import { IntegrationsStrip } from "@/components/IntegrationsStrip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AskMyAPTLanding() {
  const features = [
    {
      icon: MessageCircle,
      title: "Instant replies, 24/7",
      description: "Capture every after-hours lead automatically.",
    },
    {
      icon: Calendar,
      title: "Tour booking that sticks",
      description: "Real-time scheduling reduces no-shows.",
    },
    {
      icon: CheckCircle,
      title: "Resident support that scales",
      description: "From FAQs to maintenance intake, without tickets piling up.",
    },
    {
      icon: Globe,
      title: "Multilingual by default",
      description: "Welcome prospects in their language.",
    },
    {
      icon: Users,
      title: "Live handoff when it matters",
      description: "Escalate to your team in one click.",
    },
    {
      icon: BarChart3,
      title: "Analytics you can act on",
      description: "See tours booked, first-response times, and conversion by channel.",
    },
    {
      icon: Database,
      title: "CRM/PMS sync",
      description: "Push leads and tours to your existing systems.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: ["Up to 50 units", "Basic chatbot", "Tour booking", "Email support"],
      popular: false,
    },
    {
      name: "Growth",
      price: "$299",
      period: "/month",
      features: [
        "Up to 200 units",
        "Advanced AI features",
        "CRM integrations",
        "Analytics dashboard",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$799",
      period: "/month+",
      features: [
        "Unlimited units",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "Custom training",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                Fill units faster—while your team sleeps.
              </h1>
              <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
                AskMyAPT replies instantly, books tours, and handles resident requests—24/7—so your team can focus on closing.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-cta="hero-primary"
                >
                  <Link
                    href="https://calendly.com/soya-myhoneybot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a demo
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-zinc-900">AskMyAPT Assistant</span>
                  <div className="ml-auto w-3 h-3 bg-emerald-500 rounded-full" aria-hidden="true" />
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm text-zinc-700">
                      Hi! I'm here to help with your apartment search. What can I assist you with?
                    </p>
                  </div>
                  <div className="bg-indigo-600 text-white rounded-2xl p-3 max-w-xs ml-auto">
                    <p className="text-sm">Do you have 2-bedroom units available?</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm text-zinc-700">
                      Yes! We have several 2-bedroom units starting at $1,850/month. Would you like to schedule a tour?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem > Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
              Tired of juggling leasing emails and missed calls?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Missed After-Hour Leads</h3>
                <p className="text-zinc-600">Prospects slip away when no one's available to respond</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Staff Burnout</h3>
                <p className="text-zinc-600">Repetitive tasks drain your team's energy and focus</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-yellow-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Low Conversion</h3>
                <p className="text-zinc-600">Slow response times hurt your leasing success</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-indigo-50 rounded-2xl">
              <p className="text-xl text-zinc-700">
                <strong className="text-indigo-600">AskMyAPT handles leasing, support, and tours</strong> — so your team can focus on closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">How it works</h2>
            <p className="text-xl text-zinc-600">Simple setup, powerful results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Install in minutes</h3>
              <p className="text-zinc-600">Add one snippet to your site.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Connect your systems</h3>
              <p className="text-zinc-600">Sync availability, pricing, and policies with your CRM/PMS.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Go live</h3>
              <p className="text-zinc-600">Capture every lead; we’ll tune replies to your buildings and brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Overview Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              What you get
            </h2>
            <p className="text-xl text-zinc-600">Comprehensive leasing automation for modern properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Teams like yours are closing more
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-lg text-zinc-700 mb-6">
                  "Weekend tours doubled, and our team got their evenings back."
                </p>
                <p className="text-sm text-zinc-600 mb-6">+35% lead-to-tour rate • 41 hours saved/month</p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Photo of Sarah Chen"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900">Sarah Chen</p>
                    <p className="text-zinc-600">Property Manager, Sunset Apartments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-zinc-600">Per-community pricing with unit caps.</p>
          </div>

          <ul className="text-center mb-8">
            <li className="text-zinc-700">All plans include 24/7 chat, tour booking, and email support.</li>
            <li className="text-zinc-700">No long-term contracts. Cancel anytime.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 rounded-2xl ${plan.popular ? "border-indigo-600 shadow-xl" : "border-gray-200 shadow-lg"} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                    <span className="text-zinc-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" aria-hidden="true" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-2xl ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    data-cta="pricing-primary"
                  >
                    <Link
                      href="https://calendly.com/soya-myhoneybot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a demo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What’s included</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    <li><strong>Starter:</strong> 24/7 chat, basic FAQs, tour booking</li>
                    <li><strong>Growth:</strong> Everything in Starter + advanced AI replies, CRM sync, analytics</li>
                    <li><strong>Pro:</strong> Everything in Growth + white-label, custom integrations, dedicated support</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="mt-8 text-center text-zinc-700">Have more units or special requirements? Talk to us for a custom plan.</p>
        </div>
      </section>

      {/* Try the Chatbot Demo */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Try AskMyAPT now</h2>
            <p className="text-xl text-zinc-600">See how natural and helpful our AI assistant is</p>
          </div>

          <ChatDemo />
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Works with your stack</h2>
            <p className="text-xl text-zinc-600">Seamless integration with popular property management systems</p>
          </div>

          <IntegrationsStrip />
        </div>
      </section>

      {/* Risk & Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10 text-center">Built for multifamily, ready for compliance</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Scale className="h-12 w-12 text-indigo-600 mb-4" />
              <p className="text-zinc-700">Fair Housing-aware replies with human oversight</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="h-12 w-12 text-indigo-600 mb-4" />
              <p className="text-zinc-700">Encryption in transit & at rest</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Key className="h-12 w-12 text-indigo-600 mb-4" />
              <p className="text-zinc-700">SSO and audit logging available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate leasing?</h2>
          <p className="text-xl text-indigo-100 mb-8">It only takes 15 minutes to see it in action.</p>
          <div>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              data-cta="closing-primary"
            >
              <Link
                href="https://calendly.com/soya-myhoneybot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
      </div>
    </section>
  </div>
  )
}
