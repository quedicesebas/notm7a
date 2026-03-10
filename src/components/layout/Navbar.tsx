
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { DonationModal } from "@/components/ui/donation-modal"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">
            S
          </div>
          <div className={`flex flex-col ${scrolled ? "text-foreground" : "text-white"}`}>
            <span className="font-bold leading-tight text-sm md:text-base">Defendamos la Séptima</span>
            <span className="text-[10px] md:text-xs font-medium opacity-80 uppercase tracking-widest">Comité Ciudadano</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>Sobre Nosotros</a>
          <a href="#about" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>Objetivos</a>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-bold"
          >
            <Heart className="mr-2 h-4 w-4 fill-current" />
            Donar
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-4 font-bold"
          >
            Donar
          </Button>
        </div>
      </div>
      
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  )
}
