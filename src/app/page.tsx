
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Social } from "@/components/sections/Social"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Social />
      <Footer />
    </main>
  )
}
