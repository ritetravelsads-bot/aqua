"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rohan M.",
    role: "Fitness Enthusiast",
    content: "AquaPureWater tastes so fresh — better than anything I've tried. It's become an essential part of my daily workout routine.",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Ananya S.",
    role: "Homemaker",
    content: "I switched my whole home to AquaPure. The quality is consistent and my family loves the clean taste. Highly recommended!",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Vikram K.",
    role: "Business Owner",
    content: "We've been using AquaPure for our office for over a year now. The delivery is always on time and the quality never disappoints.",
    rating: 5,
    avatar: "VK",
  },
  {
    name: "Priya R.",
    role: "Mother of Two",
    content: "As a mother, I'm very particular about water quality. AquaPure Zero is perfect for my kids — pure and safe every time.",
    rating: 5,
    avatar: "PR",
  },
  {
    name: "Arun D.",
    role: "Restaurant Owner",
    content: "My restaurant relies on AquaPure for all our water needs. Our customers appreciate the quality and so do we!",
    rating: 5,
    avatar: "AD",
  },
  {
    name: "Meera T.",
    role: "Yoga Instructor",
    content: "Hydration is crucial for my practice and my students. AquaPure Plus with minerals is exactly what we need after intense sessions.",
    rating: 5,
    avatar: "MT",
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2))
  }

  return (
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied customers who have made AquaPure their hydration choice.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-2">
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 border-t border-border pt-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-primary w-6" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust indicator */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border/50">
            <div className="flex -space-x-2">
              {["RM", "AS", "VK", "PR"].map((avatar, i) => (
                <div 
                  key={avatar}
                  className="w-8 h-8 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center text-xs font-bold text-primary"
                >
                  {avatar}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">10,000+</span> customers
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
