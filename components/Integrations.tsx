import Image from "next/image"

interface Integration {
  name: string
  logo?: string
  line: string
}

export function Integrations() {
  const integrations: Integration[] = [
    { name: "AppFolio", line: "AppFolio • sync availability & pricing", logo: "/integrations/appfolio.svg" },
    { name: "Buildium", line: "Buildium • sync availability & pricing", logo: "/integrations/buildium.svg" },
    { name: "Yardi", line: "Yardi • push tours & log leads", logo: "/integrations/yardi.svg" },
    { name: "Google Calendar", line: "Google Calendar • real-time scheduling", logo: "/integrations/google-calendar.svg" },
    { name: "Twilio", line: "Twilio • SMS & handoff", logo: "/integrations/twilio.svg" },
    { name: "HubSpot", line: "HubSpot • lead capture & tracking", logo: "/integrations/hubspot.svg" },
  ]

  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-12">Works with your stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item) => (
            <div key={item.name} className="flex items-center space-x-4">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded" aria-hidden="true" />
              )}
              <p className="text-zinc-700">{item.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
