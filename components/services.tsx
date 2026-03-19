"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { PartyPopper, Heart, Building2, Megaphone, Plane, UtensilsCrossed, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    name: "Events",
    description: "Keep your guests refreshed at conferences, exhibitions, concerts, and special gatherings with our premium water supply.",
    icon: PartyPopper,
    image: "/images/services/events.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Weddings",
    description: "Make your special day perfect with our elegant water packaging solutions for wedding ceremonies and receptions.",
    icon: Heart,
    image: "/images/services/wedding.jpg",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "Corporate Events",
    description: "Professional hydration solutions for corporate meetings, seminars, workshops, and business conferences.",
    icon: Building2,
    image: "/images/services/corporate.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "Promotions",
    description: "Custom branded water bottles for marketing campaigns, product launches, and promotional activities.",
    icon: Megaphone,
    image: "/images/services/promotions.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Tour & Travel",
    description: "Reliable water supply for tour operators, travel agencies, hotels, and hospitality businesses.",
    icon: Plane,
    image: "/images/services/travel.jpg",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    name: "Bars & Restaurants",
    description: "Premium drinking water for restaurants, cafes, bars, and food service establishments across Delhi NCR.",
    icon: UtensilsCrossed,
    image: "/images/services/restaurant.jpg",
    color: "from-purple-500/20 to-violet-500/20",
  },
]

export function Services() {
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

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Where We <span className="text-primary">Deliver</span> Excellence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From intimate gatherings to large-scale events, we provide premium packaged drinking water 
            solutions tailored to meet every occasion and business need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 overflow-hidden bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-2xl bg-card/90 backdrop-blur-sm shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <CardContent className="pt-4 relative">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 md:p-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-[url('/images/water-pattern.png')] opacity-10" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Need Bulk Water Supply?
              </h3>
              <p className="text-primary-foreground/90">
                Contact us for customized solutions and special pricing for large orders.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-card text-primary hover:bg-card/90 shadow-xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
