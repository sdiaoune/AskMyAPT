"use client"

import {
  MessageCircle,
  Calendar,
  Database,
  Clock,
  Users,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Bot,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChatDemo } from "@/components/ChatDemo"
import { IntegrationsStrip } from "@/components/IntegrationsStrip"

export default function AskMyAPTLanding() {
  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Leasing Chatbot",
      description: "Never miss a lead with AI that works around the clock",
    },
    {
      icon: Calendar,
      title: "Tour Booking Integration",
      description: "Seamlessly schedule and manage property tours",
    },
    {
      icon: Zap,
      title: "Maintenance Requests",
      description: "Handle resident maintenance requests automatically",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with prospects in multiple languages",
    },
    {
      icon: Users,
      title: "Live Chat Escalation",
      description: "Smooth handoff to human agents when needed",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track performance and optimize your leasing process",
    },
    {
      icon: Database,
      title: "CRM/PMS Integrations",
      description: "Sync with your existing property management tools",
    },
    {
      icon: CheckCircle,
      title: "Resident Support",
      description: "Provide ongoing support for current residents",
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
                Lease 24/7 with AI. <span className="text-indigo-600">No missed leads.</span> No wasted staff time.
              </h1>
              <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
                AskMyAPT is the AI assistant for apartment communities — it answers questions, books tours, and handles resident requests automatically.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">How It Works</h2>
            <p className="text-xl text-zinc-600">Simple setup, powerful results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Website visitor opens chat</h3>
              <p className="text-zinc-600">Prospects engage with your AI assistant instantly on your website</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">AskMyAPT answers questions or books a tour</h3>
              <p className="text-zinc-600">AI handles inquiries and schedules appointments automatically</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Data syncs to your CRM or PMS</h3>
              <p className="text-zinc-600">All interactions and leads flow seamlessly into your existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Overview Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Everything you need in one AI assistant
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
              Trusted by property managers nationwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-lg text-zinc-700 mb-6">
                  "We saved 40+ hours per month and doubled weekend tour bookings. AskMyAPT handles everything while we sleep!"
                </p>
                <p className="text-xs text-zinc-500 mb-4">Sample quote</p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Sarah Chen"
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

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-lg text-zinc-700 mb-6">
                  "Our conversion rate increased by 35% in the first month. The AI is so natural, prospects love chatting with it."
                </p>
                <p className="text-xs text-zinc-500 mb-4">Sample quote</p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Mike Rodriguez"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900">Mike Rodriguez</p>
                    <p className="text-zinc-600">Leasing Director, Metro Properties</p>
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
              Simple pricing that scales with your properties
            </h2>
            <p className="text-xl text-zinc-600">Choose the plan that fits your portfolio</p>
          </div>

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
                  <Button className={`w-full rounded-2xl ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}>
                    See Plan Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Works with the tools you already use</h2>
            <p className="text-xl text-zinc-600">Seamless integration with popular property management systems</p>
          </div>

          <IntegrationsStrip />
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to automate leasing?</h2>
          <p className="text-xl text-indigo-100 mb-8">It only takes 15 minutes to see the magic.</p>
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Demo
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  )
}
