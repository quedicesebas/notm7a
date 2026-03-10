"use client"

import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Image from "next/image"
import { Heart } from "lucide-react"
import { useState } from "react"
import { DonationModal } from "@/components/ui/donation-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg')

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Bogotá Séptima"}
          fill
          className="object-cover brightness-[0.4]"
          priority
          data-ai-hint="Bogota city"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Comité Ciudadano Activo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-white leading-tight">
            Defendamos la <span className="text-primary italic">Séptima</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            Unidos por un corredor vial digno, sostenible y centrado en las personas. 
            Nuestra misión es vigilar, proponer y actuar por el patrimonio de todos los bogotanos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 h-14 rounded-full shadow-lg transition-all hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              <Heart className="mr-2 h-5 w-5 fill-current" />
              Donar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white/60 bg-black/40 backdrop-blur-md hover:bg-white/20 text-lg h-14 rounded-full transition-all"
              asChild
            >
              <a href="#about">Conocer más</a>
            </Button>
          </div>
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
