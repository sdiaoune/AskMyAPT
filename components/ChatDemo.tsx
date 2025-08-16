"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const faq: Record<string, string> = {
  "Do you allow pets?": "Yes, we're pet-friendly! We welcome cats and dogs with a $300 deposit.",
  "Can I book a tour?": "Absolutely—just let us know a day and time that works for you.",
  "How much is rent?": "Two-bedroom units start at $1,850 per month.",
  "Do you support other languages?": "Yes, AskMyAPT supports English, Spanish, and French.",
  "What about after-hours?": "Our assistant responds to leads 24/7, even after your office closes.",
  "How do maintenance requests work?": "Maintenance issues are routed to the right team automatically.",
}

const quickQuestions = Object.keys(faq).slice(0, 5)

export function ChatDemo() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Hi! I'm AskMyAPT. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const announceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
    if (announceRef.current) {
      announceRef.current.textContent = messages[messages.length - 1].content
    }
  }, [messages])

  const ask = (question: string) => {
    setMessages((m) => [...m, { role: "user", content: question }])
    setTyping(true)
    const answer = faq[question] || "I'm just a demo, but our team can share more during a real conversation!"
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", content: answer }])
      setTyping(false)
    }, 600)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const question = input.trim()
    setInput("")
    ask(question)
  }

  return (
    <Card className="border-0 shadow-2xl rounded-2xl max-w-2xl mx-auto">
      <CardContent className="p-0">
        <div className="bg-indigo-600 text-white p-4 rounded-t-2xl flex items-center">
          <Bot className="w-6 h-6 mr-3" aria-hidden="true" />
          <span className="font-semibold">AskMyAPT Demo</span>
          <div className="ml-auto w-3 h-3 bg-emerald-400 rounded-full" aria-hidden="true" />
        </div>
        <div ref={listRef} className="p-6 h-80 overflow-y-auto bg-gray-50" role="log" aria-live="polite">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.role === "user" ? "bg-indigo-600 text-white" : "bg-white text-zinc-700 shadow-sm"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white text-zinc-700 shadow-sm px-4 py-2 rounded-2xl">
                  <p className="text-sm">Typing…</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sr-only" aria-live="polite" ref={announceRef} />
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex flex-wrap gap-2 mb-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => ask(q)}
                className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                {q}
              </button>
            ))}
          </div>
          <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Ask about amenities, pricing, or schedule a tour..."
              className="flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Type your question"
            />
            <Button type="submit" size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl">
              <Send className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
