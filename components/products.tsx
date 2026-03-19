"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Droplets, Sparkles, Shield, Package, Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "AquaPure Classic",
    tagline: "Everyday Hydration",
    description: "Ultra-pure filtration with a clean, smooth taste. The affordable daily option for families, offices, and schools.",
    features: ["Ultra-pure filtration", "Clean, smooth taste", "Affordable daily option"],
    icon: Droplets,
    badge: "Best Seller",
    badgeColor: "bg-blue-500",
    idealFor: "Families, offices, schools",
    gradient: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    name: "AquaPure Plus",
    tagline: "Mineral-Enriched Hydration",
    description: "Enhanced with calcium & magnesium for health-oriented hydration. Balanced flavour for active users.",
    features: ["Calcium & magnesium enhanced", "Balanced flavour", "Health-oriented hydration"],
    icon: Sparkles,
    badge: "Premium",
    badgeColor: "bg-amber-500",
    idealFor: "Athletes, active users",
    gradient: "from-amber-500/10 via-transparent to-transparent",
  },
  {
    name: "AquaPure Zero",
    tagline: "Maximum Purity",
    description: "Zero contaminants with the highest filtration tier. Perfect for sensitive users requiring absolute purity.",
    features: ["Zero contaminants", "Perfect for sensitive users", "Highest filtration tier"],
    icon: Shield,
    badge: "Purest",
    badgeColor: "bg-emerald-500",
    idealFor: "Babies, seniors, medical use",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
]

const packagingOptions = [
  { size: "500 mL", description: "On the go" },
  { size: "1 L", description: "Personal use" },
  { size: "1.5 L", description: "Family size" },
  { size: "5 L", description: "Bulk supply" },
]

export function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(0)
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
    <section ref={sectionRef} id="products" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our <span className="text-primary">Product</span> Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the perfect hydration solution for your lifestyle. 
            Every product is lab-tested, traceable, and certified for your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className={`relative group hover:shadow-2xl transition-all duration-500 border-border/50 overflow-hidden cursor-pointer ${
                selectedProduct === index ? "ring-2 ring-primary shadow-xl scale-[1.02]" : "hover:-translate-y-2"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProduct(index)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${product.badgeColor} text-white border-0 shadow-lg`}>
                  {product.badge}
                </Badge>
              </div>
              
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <product.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-base">{product.tagline}</CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-sm text-muted-foreground mb-6">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Ideal for: </span>
                  <span className="text-sm font-medium text-foreground">{product.idealFor}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group/btn opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Packaging Options */}
        <div 
          className={`mt-20 bg-background rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-md">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Packaging Options</h3>
              </div>
              <p className="text-muted-foreground">
                All bottles are eco-certified recyclable and manufactured under strict hygiene standards. 
                Choose the size that fits your lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {packagingOptions.map((option, index) => (
                <div
                  key={option.size}
                  className={`group px-6 py-4 rounded-2xl bg-card border-2 border-border hover:border-primary text-center hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {option.size}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{option.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div 
          className={`mt-16 relative rounded-3xl overflow-hidden group transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/product-range.jpg"
              alt="Aquapure Water product range"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold">Complete Product Range</h3>
              <p className="text-white/80 mt-2 max-w-lg">
                From personal bottles to bulk supplies, we have the perfect size for every need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
