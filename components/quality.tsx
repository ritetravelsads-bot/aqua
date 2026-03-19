"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Beaker, FileCheck, Award, Search, Droplets, ShieldCheck, CheckCircle } from "lucide-react"

const qualitySteps = [
  {
    icon: Search,
    title: "Source Selection",
    description: "Carefully selected water sources that meet our stringent quality criteria",
  },
  {
    icon: Beaker,
    title: "Advanced Filtration",
    description: "Multi-stage purification process removes contaminants while preserving minerals",
  },
  {
    icon: FileCheck,
    title: "Lab Testing",
    description: "Every batch undergoes rigorous laboratory testing for safety and purity",
  },
  {
    icon: Award,
    title: "Quality Certification",
    description: "ISO-certified processes ensure consistent quality in every bottle",
  },
]

const stats = [
  { value: "99.9%", label: "Purity Rate" },
  { value: "7+", label: "Filtration Stages" },
  { value: "100%", label: "Batch Tested" },
  { value: "24/7", label: "Quality Monitoring" },
]

const certifications = [
  { icon: Award, title: "ISO Certified", subtitle: "Purity Standards" },
  { icon: ShieldCheck, title: "Quality Assured", subtitle: "Rigorous Testing" },
  { icon: Droplets, title: "Eco Packaging", subtitle: "100% Recyclable" },
]

export function Quality() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % qualitySteps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} id="quality" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ShieldCheck className="h-4 w-4" />
              Quality Assurance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our Commitment to <span className="text-primary">Quality</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We guarantee pure water, every time. Our state-of-the-art facilities 
              and rigorous testing protocols ensure that every drop meets the highest 
              standards of purity and safety.
            </p>

            {/* Quality Process - Interactive Steps */}
            <div className="mt-10 space-y-4">
              {qualitySteps.map((step, index) => (
                <div 
                  key={step.title} 
                  className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeStep === index 
                      ? "bg-primary/10 shadow-lg" 
                      : "bg-transparent hover:bg-muted/50"
                  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      activeStep === index 
                        ? "bg-primary text-primary-foreground scale-110" 
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                      <step.icon className={`h-4 w-4 transition-colors ${activeStep === index ? "text-primary" : "text-muted-foreground"}`} />
                      {step.title}
                    </h3>
                    <p className={`mt-1 text-sm transition-colors ${activeStep === index ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.description}
                    </p>
                  </div>
                  {activeStep === index && (
                    <div className="ml-auto flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/quality-testing.jpg"
                alt="Quality testing at Aquapure Water"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating progress indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card p-4 rounded-2xl shadow-xl flex gap-2">
              {qualitySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? "bg-primary scale-125" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trusted Quality
          </span>
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`flex items-center gap-4 px-8 py-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{cert.title}</div>
                  <div className="text-sm text-muted-foreground">{cert.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
