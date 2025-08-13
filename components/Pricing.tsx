import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
    },
    {
      name: "Growth",
      price: "$299",
      period: "/month",
    },
    {
      name: "Pro",
      price: "$799+",
      period: "/month",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center">Simple, transparent pricing</h2>
        <p className="text-xl text-zinc-600 text-center mb-12">Per-community pricing with unit caps.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
              <p className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                <span className="text-zinc-600">{plan.period}</span>
              </p>
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                data-cta="pricing-primary"
                aria-label="Book a demo"
              >
                Book a demo
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-600">
          Have more units or special requirements? Talk to us for a custom plan.
        </p>
        <ul className="mt-8 text-sm text-zinc-700 space-y-1 text-center">
          <li>All plans include 24/7 chat, tour booking, and email support.</li>
          <li>No long-term contracts. Cancel anytime.</li>
        </ul>
        <div className="mt-8 max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="included">
              <AccordionTrigger>What’s included</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-zinc-700">
                  <li>
                    <strong>Starter:</strong> 24/7 chat, basic FAQs, tour booking
                  </li>
                  <li>
                    <strong>Growth:</strong> Everything in Starter + advanced AI replies, CRM sync, analytics
                  </li>
                  <li>
                    <strong>Pro:</strong> Everything in Growth + white-label, custom integrations, dedicated support
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
