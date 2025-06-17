"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Atelier",
      details: ["123 Fashion Avenue", "Paris, France 75001"],
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+33 1 42 86 87 88", "+33 1 42 86 87 89"],
      link: "tel:+33142868788",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@elegance-atelier.com", "support@elegance-atelier.com"],
      link: "mailto:hello@elegance-atelier.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-off-white)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[var(--color-mocha)] mb-6">Get in Touch</h1>
          <p className="text-xl text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Have questions about our collections or courses? We'd love to hear from you. Reach out and let's start a
            conversation about fashion and design.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-[var(--color-mocha)] mb-6">Contact Information</h2>
              <p className="text-[var(--color-warm-gray)] mb-8">
                We're here to help with any questions about our fashion collections, design courses, or custom services.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-sm border-0 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[var(--color-mocha)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-mocha)] mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-[var(--color-warm-gray)]">
                              {info.link && detailIndex === 0 ? (
                                <a href={info.link} className="hover:text-[var(--color-gold)] transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white rounded-3xl shadow-lg border-0">
              <CardHeader className="pb-8">
                <CardTitle className="font-display text-3xl font-bold text-[var(--color-mocha)]">
                  Send us a Message
                </CardTitle>
                <p className="text-[var(--color-warm-gray)]">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-mocha)] mb-2">Full Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-[var(--color-beige)] focus:border-[var(--color-mocha)] rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-mocha)] mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-[var(--color-beige)] focus:border-[var(--color-mocha)] rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-mocha)] mb-2">Subject *</label>
                    <Input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="border-[var(--color-beige)] focus:border-[var(--color-mocha)] rounded-xl"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-mocha)] mb-2">Message *</label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-[var(--color-beige)] focus:border-[var(--color-mocha)] rounded-xl resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--color-mocha)] text-white hover:bg-[var(--color-mocha)]/90 py-4 text-lg rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-[var(--color-beige)]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-[var(--color-mocha)] mb-4">Visit Our Atelier</h2>
            <p className="text-lg text-[var(--color-warm-gray)]">
              Located in the heart of Paris, our atelier welcomes visitors by appointment.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="h-96 bg-[var(--color-beige)]/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[var(--color-mocha)] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-[var(--color-mocha)] mb-2">123 Fashion Avenue</h3>
                <p className="text-[var(--color-warm-gray)]">Paris, France 75001</p>
                <Button className="mt-4 bg-[var(--color-mocha)] text-white hover:bg-[var(--color-mocha)]/90">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
