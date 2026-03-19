"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, ShieldCheck, Leaf, Play, ArrowDown } from "lucide-react"

const words = ["Pure", "Fresh", "Clean", "Safe"]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-water.jpg"
          alt="Crystal clear water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/50" />
        
        {/* Floating water droplets */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            >
              <Droplets className="h-8 w-8 text-primary" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 animate-pulse">
              <Droplets className="h-4 w-4" />
              Pure Water, Pure Life
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
              <span className="block text-balance">Crystal-Clear</span>
              <span className="block text-balance">Hydration.</span>
              <span className="relative inline-block mt-2">
                <span className="text-primary">Naturally </span>
                <span className="relative">
                  <span 
                    key={currentWord}
                    className="text-primary inline-block animate-slideUp"
                  >
                    {words[currentWord]}.
                  </span>
                </span>
              </span>
            </h1>
            
            <p 
              className={`mt-6 text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Reinvent your everyday water with AquaPureWater — the perfect balance of purity, 
              health, and refreshing taste for life&apos;s every moment.
            </p>
            
            <div 
              className={`mt-8 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button 
                size="lg" 
                asChild 
                className="group relative overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Link href="#products">
                  <span className="relative z-10">Shop Our Water</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 hover:border-primary/50 transition-all duration-300"
              >
                <Link href="#about">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust badges with stagger animation */}
            <div 
              className={`mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {[
                { icon: ShieldCheck, label: "ISO Certified" },
                { icon: Droplets, label: "Ultra Pure" },
                { icon: Leaf, label: "Eco-Friendly" },
              ].map((badge, index) => (
                <div 
                  key={badge.label}
                  className="flex flex-col items-center lg:items-start gap-2 group cursor-pointer"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <badge.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image with floating animation */}
          <div 
            className={`hidden lg:block relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
              
              <div className="absolute inset-0 animate-float">
                <Image
                  src="/images/water-bottle.jpg"
                  alt="Aquapure Water Bottle"
                  fill
                  sizes="(max-width: 1024px) 0vw, 512px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Stats floating cards */}
              <div className="absolute -left-8 top-1/4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-floatSlow">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Purity Rate</div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-floatSlower">
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-xs text-muted-foreground">Filtration Stages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  )
}
