import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import HeroParallax from "@/components/heroParalla"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <HeroParallax/>
      <About />
      <Contact />
      <Footer />
      
    </main>
  )
}

