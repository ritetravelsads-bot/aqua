"use client"

import { useEffect, useRef, useState } from "react"
import { Droplets, Leaf, ShieldCheck, Truck, Beaker, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    name: "Ultra-Pure Filtration",
    description: "State-of-the-art purification that removes contaminants while retaining essential minerals.",
    icon: Beaker,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Fresh From Source",
    description: "Naturally enriched water that hydrates deeper and tastes cleaner.",
    icon: Droplets,
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    name: "Eco-Mindful Packaging",
    description: "Recyclable bottles designed for sustainability with zero compromise on purity.",
    icon: Leaf,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Quality You Can Trust",
    description: "Each batch tested under ISO standards for absolute safety and reliability.",
    icon: ShieldCheck,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "Available Nationwide",
    description: "Fast and reliable delivery across India to keep you hydrated wherever you are.",
    icon: Truck,
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    name: "Certified Excellence",
    description: "ISO-certified purity standards ensuring the highest quality in every drop.",
    icon: Award,
    color: "from-amber-500/20 to-yellow-500/20",
  },
]

export function Features() {
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
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Why Choose <span className="text-primary">AquaPure</span>Water?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We don&apos;t just sell water — we deliver confidence in every sip. 
            Experience the difference of truly pure hydration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.name} 
              className={`group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-border/50 overflow-hidden bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 relative">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
