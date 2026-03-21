
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Objectives } from "@/components/sections/Objectives"
import { Social } from "@/components/sections/Social"
import { Posters } from "@/components/sections/Posters"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Posters />
      <Social />
      <Footer />
    </main>
  )
}
