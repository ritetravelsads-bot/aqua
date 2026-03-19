import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { DistributionMap } from "@/components/distribution-map"
import { Services } from "@/components/services"
import { Quality } from "@/components/quality"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <About />
      <Products />
      <DistributionMap />
      <Services />
      <Quality />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
