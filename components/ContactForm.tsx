"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    units: "",
    message: "",
    website: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name) newErrors.name = "Name is required"
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email is required"
    if (!form.company) newErrors.company = "Company is required"
    if (!form.units) newErrors.units = "Number of units is required"
    if (!form.message) newErrors.message = "Message is required"
    if (form.website) return false // honeypot
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    console.log("Contact form submitted", form)
    setForm({ name: "", email: "", company: "", units: "", message: "", website: "" })
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-labelledby="contact-heading">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-600">
            {errors.company}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="units">Number of units</Label>
        <Input
          id="units"
          name="units"
          type="number"
          value={form.units}
          onChange={handleChange}
          aria-invalid={!!errors.units}
          aria-describedby={errors.units ? "units-error" : undefined}
        />
        {errors.units && (
          <p id="units-error" className="mt-1 text-sm text-red-600">
            {errors.units}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>
      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
        Send Message
      </Button>
    </form>
  )
}
