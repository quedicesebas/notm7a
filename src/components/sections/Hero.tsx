"use client"

import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import Image from "next/image"

import { useFundraising } from "@/hooks/use-fundraising"

export function Hero() {
  const { donationUrl } = useFundraising();
  return (
    <section className="relative min-h-[calc(100dvh-80px)] md:min-h-[calc(100dvh-100px)] lg:h-[calc(100dvh-100px)] mt-[80px] md:mt-[100px] flex flex-col bg-background border-b-[8px] border-foreground overflow-hidden">
      
      {/* Main Hero Content (Flex-grow to take available space) */}
              {/* The Sign (Repositioned to top-right whitespace on desktop, bottom on mobile) */}
              <div className="absolute right-4 top-[3dvh] md:top-6 lg:top-12 lg:right-8 xl:right-16 group mx-auto lg:mx-0 w-fit">
                <div className="bg-white border-4 border-foreground p-3 md:p-4 w-full max-w-[300px] sm:max-w-xs rotate-2 md:rotate-6 group-hover:rotate-0 transition-all duration-300 relative z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.05)]">
                  <p className="font-headline text-base text-xs md:text-lg uppercase leading-tight text-foreground text-center">
                    “NO queremos otra troncal de TM, ni una Caracas o Av. 68”
                  </p>
                </div>
              </div>
      <div className="flex-grow flex items-center w-full py-2 pt-10 lg:py-0">
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-8 items-center justify-between w-full">
            

            {/* Visual Side (SVG Symbol) - Left on desktop, Top on mobile */}
            <div className="flex justify-center items-center w-full sm:px-12 md:px-24 lg:px-0 lg:w-[45%] shrink-0">
              <div className="relative w-full aspect-square max-w-[250px] sm:max-w-[400px] lg:max-w-lg">
                <Image
                  src="/logo.svg"
                  alt="Símbolo de No a la Troncal de la Séptima"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            
            {/* Typography Side */}
            <div className="relative space-y-3 md:space-y-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:w-[55%]">
              
              <div className="inline-block bg-secondary text-secondary-foreground border-4 border-foreground font-headline text-md sm:text-xl md:text-2xl px-2 py-0 sm:px-3 sm:py-1 uppercase tracking-wider transform -rotate-2">
                OTRA VEZ NO
              </div>
              
              <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start w-full gap-4 md:gap-0 mt-1 md:mt-1">
                <h1 className="text-primary text-[40px] sm:text-[50px] md:text-[75px] lg:text-[85px] leading-none font-headline uppercase whitespace-nowrap text-left">
                  NO<br />
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary tracking-tight block mt-1">Por la CRA</span>
                </h1>
                
                <div className="flex items-start justify-center md:justify-start mt-0">
                  <span className="text-[80px] sm:text-[110px] md:text-[140px] lg:text-[160px] font-headline text-primary leading-none sm:-ml-3 sm:-mt-1">7</span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline text-primary leading-none mt-2 sm:mt-4">a</span>
                </div>
              </div>

              <div className="flex flex-row gap-3 pt-4 md:pt-6 w-full justify-center lg:justify-start relative z-10">
                <Button 
                   size="lg" 
                   className="bg-accent text-accent-foreground hover:bg-yellow-400 border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-headline text-md sm:text-lg md:text-xl h-14 md:h-16 px-6 sm:px-8 rounded-none uppercase tracking-wide w-full sm:w-auto"
                   asChild
                >
                  <a 
                    href="#posters" 
                    onClick={() => trackEvent("donate_click", { location: "hero_section" })}
                  >
                    <span className="hidden md:inline">Quiero </span>Carteles
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-opacity-90 border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-headline text-md sm:text-lg md:text-xl h-14 md:h-16 rounded-none uppercase tracking-wide px-6 sm:px-8 w-full sm:w-auto"
                  asChild
                >
                  <a href="#social" className="text-white">Hablemos</a>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Background Silhouette (Crowd) */}
      <div 
        className="absolute -bottom-4 sm:bottom-10 left-0 w-full h-96 sm:h-48 md:h-64 opacity-5 pointer-events-none z-0 select-none"
        style={{ 
          backgroundImage: 'url(/crowd-silhouette.svg)',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x'
        }}
      />

      {/* Bottom Black Poster Banner */}
      <div className="w-full bg-foreground text-background py-3 md:py-4 border-t-[6px] border-foreground shrink-0 overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center w-full">
            <h2 className="font-headline sm:text-lg  md:text-2xl md:text-3xl uppercase tracking-wider text-background m-0">
              — SOÑEMOS OTRA SÉPTIMA —
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
