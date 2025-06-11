"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Replace with your Formspree form ID
  const FORMSPREE_FORM_ID = "mpwdqpbe" // Example ID - replace with your actual Formspree form ID

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add the selected service to the form data
    formData.append("service", selectedService)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const json = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        formRef.current?.reset()
        setSelectedService("")
      } else {
        throw new Error(json.error || "Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 border-2 border-[#4A148C] rounded-lg">
        <div className="h-12 w-12 rounded-full bg-[#F3E5F5] flex items-center justify-center">
          <CheckCircle className="h-6 w-6 text-[#4A148C]" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">Your message has been received. Our team will get back to you shortly.</p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-[#E41B17] hover:bg-[#E41B17]/90">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="john.doe@example.com" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your Company" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accounting">Accounting & Finance</SelectItem>
            <SelectItem value="marketing">Marketing & Sales</SelectItem>
            <SelectItem value="customer-service">Customer Service</SelectItem>
            <SelectItem value="administration">Administration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {/* Hidden input to ensure the service is submitted even if JavaScript is disabled */}
        <input type="hidden" name="service" value={selectedService} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your business needs..."
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#E41B17] hover:bg-[#E41B17]/90" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
