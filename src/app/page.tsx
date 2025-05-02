import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import HeroParallax from "@/components/heroParalla"
import Guide from "@/components/guide"
import TrendingColours from "@/components/trendingColours"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Guide />
      <HeroParallax />
      <TrendingColours />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
