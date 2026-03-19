"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle, Droplets, Users, Globe, Award } from "lucide-react"

const values = [
  "Purity First",
  "Health-Centric Formulation",
  "Transparent Quality",
  "Environmental Responsibility",
]

const stats = [
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Globe, value: "50+", label: "Cities Served" },
  { icon: Droplets, value: "1M+", label: "Bottles Delivered" },
  { icon: Award, value: "10+", label: "Years Experience" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCountersStarted(true), 500)
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
    <section ref={sectionRef} id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative w-full h-full">
                <Image
                  src="/images/purification.jpg"
                  alt="Aquapure Water purification facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-2xl hidden md:block animate-floatSlow">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            {/* Second floating card */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-xl hidden lg:flex items-center gap-3 animate-floatSlower">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-sm font-medium text-foreground">ISO Certified</span>
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              About <span className="text-primary">AquaPure</span>Water
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                AquaPureWater exists to raise hydration standards — for your body, 
                your community, and your planet.
              </p>
              <p>
                We are a team of hydration experts, engineers, and quality scientists 
                united by one belief: water should be pure, healthy, and accessible. 
                Our systems are engineered to meet and exceed global safety norms, 
                giving you water that tastes pure and refreshes deeply.
              </p>
              <p>
                We integrate cutting-edge filtration technology with meticulous testing 
                protocols to remove harmful contaminants without stripping beneficial minerals. 
                Every bottle includes batch testing codes so you can verify quality instantly.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div 
                    key={value} 
                    className={`flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
