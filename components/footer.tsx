"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Droplets, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Quality", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ],
  products: [
    { name: "AquaPure Classic", href: "#products" },
    { name: "AquaPure Plus", href: "#products" },
    { name: "AquaPure Zero", href: "#products" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Delivery Info", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "Return Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full fill-foreground">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V3C0,3,0,3.12,0,3.12,48,14.54,96,27.71,144,39.1c48,11.39,97,20.57,177.39,17.34Z" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQUA%20PURE%20WATER%20-%20Final%20Logo%20-%20White-AZZQKXViv7vfjaL17R8zF9mWPA109P.png"
              alt="Aquapure Water Logo"
              width={180}
              height={56}
              className="h-12 w-auto mb-6"
            />
            <p className="text-background/70 leading-relaxed max-w-sm">
              Reinvent your everyday water with AquaPureWater — the perfect balance of purity, 
              health, and refreshing taste for life&apos;s every moment.
            </p>
            <div className="flex items-center gap-2 mt-6 text-primary">
              <Droplets className="h-5 w-5" />
              <span className="font-medium text-background">Pure Water, Pure Life</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Our Products</h3>
            <ul className="space-y-4">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-background/10">
                <span className="text-xs text-background/50 uppercase tracking-wider">Sizes Available</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["500mL", "1L", "1.5L", "5L"].map((size) => (
                    <span key={size} className="px-2 py-1 text-xs rounded bg-background/10 text-background/70">
                      {size}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918744944938"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  +91 8744944938
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aquapurewater.in"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  info@aquapurewater.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/10 flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>AquaPureWater Pvt. Ltd., India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-lg">Stay Hydrated, Stay Updated</h4>
              <p className="text-sm text-background/70 mt-1">Subscribe to our newsletter for exclusive offers and updates.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              />
              <Button className="px-6 bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} AquaPureWater. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollToTop}
                className="text-background/70 hover:text-background hover:bg-background/10 rounded-full"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
