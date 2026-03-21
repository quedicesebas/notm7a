"use client"

import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import Image from "next/image"

export function Posters() {
  return (
    <section id="posters" className="py-24 bg-background border-b-[8px] border-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side (The Poster) */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative group w-full max-w-2xl">
              {/* Brutalist Shadow/Backing */}
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-4 border-foreground" />
              
              {/* Image Container */}
              <div className="relative border-4 border-foreground bg-white p-4 sm:p-6 rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[1.414/1] w-full min-w-[300px]">
                  <Image
                    src="/cartel.png"
                    alt="Cartel oficial del Comité Soñemos Otra Séptima"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Sticker Label */}
                <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground border-4 border-foreground px-4 py-2 font-headline text-xl uppercase rotate-12 shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20">
                  ¡Pégame!
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-headline uppercase leading-none tracking-tight">
                Vuelven los <span className="text-primary italic">Carteles</span>
              </h2>
              <div className="w-48 h-2 bg-primary mx-auto lg:mx-0" />
            </div>

            <p className="text-xl md:text-2xl font-bold leading-tight">
              Queremos volver a llenar las ventanas de la Carrera Séptima con nuestra voz ciudadana. 
            </p>
            
            <p className="text-lg md:text-xl font-medium opacity-90 leading-snug">
              Haz una donación para apoyar este esfuerzo y te enviaremos a domicilio un kit de carteles impresos. Ayúdanos a mostrar que los vecinos somos quienes decidimos el futuro de nuestro corredor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-yellow-400 border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all font-headline text-xl h-16 px-10 rounded-none uppercase tracking-wide w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://armatuvaca.com/vaca/yc131858YfH96730" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("poster_donate_click", { location: "posters_section" })}
                >
                  Donar y recibir carteles
                </a>
              </Button>
            </div>
            
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">
              * Envíos disponibles inicialmente en el área del corredor de la Séptima.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
