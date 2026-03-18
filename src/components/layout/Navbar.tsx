
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { trackEvent } from "@/lib/analytics"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[4px] border-foreground ${
      scrolled ? "bg-background shadow-[0px_8px_0px_rgba(0,0,0,1)] py-2" : "bg-background py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <div className={`flex items-center shrink-0 transition-all duration-300 ${scrolled ? 'gap-2 md:gap-4' : 'gap-0'}`}>
          <div className={`relative flex-shrink-0 transition-all duration-300 overflow-hidden ${
            scrolled ? "w-12 h-12 md:w-16 md:h-16 opacity-100" : "w-0 h-0 opacity-0"
          }`}>
            <Image
              src="/logo.svg"
              alt="Logo Defendamos la Séptima"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col text-foreground">
            <span className="font-headline text-xl md:text-3xl leading-none uppercase tracking-wide">Defendamos la Séptima</span>
            <span className="text-[10px] md:text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Comité Ciudadano</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          <a href="#about" className="font-headline text-xl hover:text-primary transition-colors text-foreground uppercase tracking-wide">Sobre Nosotros</a>
          <a href="#objectives" className="font-headline text-xl hover:text-primary transition-colors text-foreground uppercase tracking-wide">Objetivos</a>
          <Button 
            asChild
            className="bg-accent text-accent-foreground hover:bg-yellow-400 border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-headline text-xl h-12 rounded-none uppercase tracking-wide px-8"
          >
            <a 
              href="https://armatuvaca.com/vaca/yc131858YfH96730" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent("donate_click", { location: "navbar_desktop" })}
            >
              Donar
            </a>
          </Button>
        </div>

        <div className="md:hidden shrink-0">
          <Button 
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-yellow-400 border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all font-headline text-lg rounded-none uppercase tracking-wide px-4 h-10"
          >
            <a 
              href="https://armatuvaca.com/vaca/yc131858YfH96730" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent("donate_click", { location: "navbar_mobile" })}
            >
              Donar
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
