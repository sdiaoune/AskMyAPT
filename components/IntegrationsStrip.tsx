import Image from "next/image"

const logos = [
  {
    src: "/integrations/appfolio.svg",
    alt: "AppFolio logo",
    text: "AppFolio • sync availability & pricing",
  },
  {
    src: "/integrations/buildium.svg",
    alt: "Buildium logo",
    text: "Buildium • sync availability & pricing",
  },
  {
    src: "/integrations/yardi.svg",
    alt: "Yardi logo",
    text: "Yardi • push tours & log leads",
  },
  {
    src: "/integrations/google-calendar.svg",
    alt: "Google Calendar logo",
    text: "Google Calendar • real-time scheduling",
  },
  {
    src: "/integrations/twilio.svg",
    alt: "Twilio logo",
    text: "Twilio • SMS & handoff",
  },
  {
    src: "/integrations/hubspot.svg",
    alt: "HubSpot logo",
    text: "HubSpot • lead capture & tracking",
  },
]

export function IntegrationsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center">
          <div className="text-center">
            <Image src={logo.src} alt={logo.alt} width={120} height={40} loading="lazy" />
            <p className="mt-2 text-sm text-zinc-600">{logo.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
