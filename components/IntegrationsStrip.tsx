import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const integrations = [
  {
    name: "AppFolio",
    description: "Sync availability & pricing",
  },
  {
    name: "Buildium",
    description: "Sync availability & pricing",
  },
  {
    name: "Yardi",
    description: "Push tours & log leads",
  },
  {
    name: "Google Calendar",
    description: "Real-time scheduling",
  },
  {
    name: "Twilio",
    description: "SMS & handoff",
  },
  {
    name: "HubSpot",
    description: "Lead capture & tracking",
  },
]

export function IntegrationsStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {integrations.map((integration) => (
        <Card key={integration.name} className="text-center">
          <CardHeader className="items-center p-4 text-center">
            <CardTitle className="text-base font-medium">
              {integration.name}
            </CardTitle>
            <CardDescription>{integration.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
