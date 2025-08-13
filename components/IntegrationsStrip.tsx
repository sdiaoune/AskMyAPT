import Image from "next/image"

const logos = [
  { src: "/integrations/appfolio.svg", alt: "AppFolio logo" },
  { src: "/integrations/buildium.svg", alt: "Buildium logo" },
  { src: "/integrations/yardi.svg", alt: "Yardi logo" },
  { src: "/integrations/google-calendar.svg", alt: "Google Calendar logo" },
  { src: "/integrations/twilio.svg", alt: "Twilio logo" },
  { src: "/integrations/hubspot.svg", alt: "HubSpot logo" },
]

export function IntegrationsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center">
          <Image src={logo.src} alt={logo.alt} width={120} height={40} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
