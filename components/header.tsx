"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Quality", href: "#quality" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/98 backdrop-blur-md shadow-lg" 
          : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar with contact info */}
      <div 
        className={`bg-primary text-primary-foreground transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 py-0" : "h-auto py-2"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="tel:+918744944938" 
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity group"
            >
              <Phone className="h-3.5 w-3.5 group-hover:animate-pulse" />
              <span>+91 8744944938</span>
            </a>
            <a 
              href="mailto:info@aquapurewater.in" 
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity group"
            >
              <Mail className="h-3.5 w-3.5 group-hover:animate-pulse" />
              <span>info@aquapurewater.in</span>
            </a>
          </div>
          <span className="hidden sm:flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            Pure Water, Pure Life
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link 
              href="#home" 
              className="-m-1.5 p-1.5 transition-transform duration-300 hover:scale-105"
            >
              <span className="sr-only">Aquapure Water</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQUA%20PURE%20WATER%20-%20Final%20Logo-d2MWWLMM9OZfEIfGq6ZRBN07cZiwc6.png"
                alt="Aquapure Water Logo"
                width={180}
                height={56}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              asChild 
              className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href="#contact">
                Get in Touch
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                <SheetHeader className="p-6 border-b border-border">
                  <SheetTitle className="flex items-center justify-between">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQUA%20PURE%20WATER%20-%20Final%20Logo-d2MWWLMM9OZfEIfGq6ZRBN07cZiwc6.png"
                      alt="Aquapure Water Logo"
                      width={140}
                      height={44}
                      className="h-9 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col h-[calc(100vh-85px)]">
                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <nav className="space-y-1 px-4">
                      {navigation.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-4 py-4 text-lg font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-200 group"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span>{item.name}</span>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-border p-6 space-y-4 bg-muted/30">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Contact Us
                    </p>
                    <a 
                      href="tel:+918744944938" 
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">+91 8744944938</span>
                    </a>
                    <a 
                      href="mailto:info@aquapurewater.in" 
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">info@aquapurewater.in</span>
                    </a>
                    
                    <Button 
                      asChild 
                      className="w-full mt-4"
                      size="lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="#contact">
                        Get in Touch
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
