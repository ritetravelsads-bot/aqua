"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8744944938",
    href: "tel:+918744944938",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@aquapurewater.in",
    href: "mailto:info@aquapurewater.in",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "AquaPureWater Pvt. Ltd., India",
    href: null,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri | 9:00 AM - 6:00 PM",
    href: null,
    color: "bg-purple-500/10 text-purple-500",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re here to help. Reach out for customer support, partnerships, or general queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Have questions about our products or services? We&apos;d love to hear from you. 
                Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.label} 
                  className={`border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-semibold text-foreground">{item.value}</div>
                        )}
                      </div>
                      {item.href && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">AquaPureWater Headquarters</p>
                  <p className="text-sm text-muted-foreground">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <Card className="border-border/50 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6 animate-bounce">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">Message Sent!</h4>
                    <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-8"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg font-semibold group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
