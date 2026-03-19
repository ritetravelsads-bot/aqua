"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Truck, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

const distributionStats = [
  {
    icon: MapPin,
    value: "Delhi NCR",
    label: "Primary Coverage Area",
  },
  {
    icon: Truck,
    value: "Same Day",
    label: "Delivery Available",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Order Support",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Happy Customers",
  },
]

const coverageAreas = [
  "Central Delhi",
  "South Delhi",
  "North Delhi",
  "East Delhi",
  "West Delhi",
  "Noida",
  "Greater Noida",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
]

export function DistributionMap() {
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
    <section ref={sectionRef} id="distribution" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Distribution Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Serving <span className="text-primary">Delhi NCR</span> With Pure Water
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We proudly distribute premium packaged drinking water across Delhi and the National Capital Region,
            ensuring fresh hydration reaches every corner of the city.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* India Map SVG */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 border border-border/50 overflow-hidden">
              {/* India Map Image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/india-map.jpg"
                  alt="India map showing Delhi NCR distribution area"
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Delhi NCR Marker Overlay */}
                <div className="absolute top-[22%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-primary/30 animate-ping" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-primary/50 animate-pulse" />
                  </div>
                  {/* Center marker */}
                  <div className="relative flex items-center justify-center w-10 h-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <div className="absolute w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>
                
                {/* Delhi NCR Label */}
                <div className="absolute top-[15%] left-[48%] transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                  Delhi NCR
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Active Distribution Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-primary/40 border-dashed" />
                  <span className="text-sm text-muted-foreground">Coverage Radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Complete Coverage Across Delhi NCR
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our distribution network ensures that every household, office, and business in the 
              Delhi National Capital Region has access to pure, safe drinking water. With strategically 
              located distribution centers and a dedicated delivery fleet, we guarantee timely delivery 
              to your doorstep.
            </p>

            {/* Coverage Areas Grid */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Areas We Serve</h4>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div
                    key={area}
                    className={`flex items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {distributionStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
