"use client"

import { Hero } from "@/components/Hero"
import { StatBar } from "@/components/StatBar"
import { HowItWorks } from "@/components/HowItWorks"
import { Features } from "@/components/Features"
import { Integrations } from "@/components/Integrations"
import { SocialProof } from "@/components/SocialProof"
import { Pricing } from "@/components/Pricing"
import { RiskTrust } from "@/components/RiskTrust"
import { ClosingCTA } from "@/components/ClosingCTA"

export default function AskMyAPTLanding() {
  return (
    <div className="bg-white">
      <Hero />
      <StatBar toursBooked={48} responseTime="<60s" hoursSaved={41} />
      <HowItWorks />
      <Features />
      <Integrations />
      <SocialProof
        cases={[
          {
            quote: "Weekend tours doubled, and our team got their evenings back.",
            attribution: "Sarah Chen, Property Manager, Sunset Apartments",
            results: "+35% lead-to-tour rate • 41 hours saved/month",
          },
        ]}
      />
      <Pricing />
      <RiskTrust />
      <ClosingCTA />
    </div>
  )
}
