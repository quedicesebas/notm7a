
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { trackEvent } from "@/lib/analytics"

import { useFundraising } from "@/hooks/use-fundraising"

export function Navbar() {
  const { donationUrl } = useFundraising()
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
      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
        <div className={`flex items-center shrink-0 transition-all duration-300 ${scrolled ? 'gap-2 md:gap-4' : 'gap-0'}`}>
          <div className={`relative flex-shrink-0 transition-all duration-300 overflow-hidden ${
            scrolled ? "w-10 h-10 md:w-16 md:h-16 opacity-100" : "w-0 h-0 opacity-0"
          }`}>
            <Image
              src="/logo.svg"
              alt="Logo Defendamos la Séptima"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-headline ${
            !scrolled ? 'text-lg' : 'text-md' } md:text-2xl leading-none uppercase tracking-tighter sm:tracking-tight text-primary`}>Defendamos la Séptima</span>
            <span className="text-[12px] md:text-xs font-bold text-foreground opacity-80 uppercase tracking-widest mt-1 -mb-2 sm:mb-0">Comité Ciudadano</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          <a href="#about" className="font-headline text-lg hover:text-primary transition-colors text-foreground uppercase tracking-wide">Sobre Nosotros</a>
          <a href="#objectives" className="font-headline text-lg hover:text-primary transition-colors text-foreground uppercase tracking-wide">Objetivos</a>
          <Button 
            asChild
            className="bg-accent text-accent-foreground hover:bg-yellow-400 border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-headline text-lg h-12 rounded-none uppercase tracking-wide px-8"
          >
            <a 
              href={donationUrl} 
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
            className="bg-accent text-accent-foreground hover:bg-yellow-400 border-2 border-foreground shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all font-headline text-lg rounded-none uppercase tracking-tight sm:tracking-wide px-3 sm:px-4 h-10"
          >
            <a 
              href={donationUrl} 
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
