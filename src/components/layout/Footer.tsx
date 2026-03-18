"use client"

import { MessageCircle, Instagram, Twitter } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 border-t-[8px] border-foreground w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-widest text-background">
              SOÑEMOS OTRA SÉPTIMA
            </h2>
            <p className="text-muted text-sm mt-2 font-body max-w-md mx-auto md:mx-0">
              Un esfuerzo ciudadano por la transparencia y el desarrollo urbano responsable en Bogotá.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com/notm7a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Instagram"
                onClick={() => trackEvent("social_click", { platform: "instagram", location: "footer" })}
              >
                <Instagram className="h-10 w-10" />
              </a>
              <a 
                href="https://twitter.com/notm7a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="X (Twitter)"
                onClick={() => trackEvent("social_click", { platform: "twitter", location: "footer" })}
              >
                <Twitter className="h-10 w-10" />
              </a>
              <div className="font-headline text-3xl md:text-4xl tracking-widest">
                @NoTM7a
              </div>
            </div>
            
            <a 
              href="https://wa.me/573006609565" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-green-400 transition-colors font-bold text-lg"
              onClick={() => trackEvent("contact_click", { method: "whatsapp", location: "footer" })}
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos al WhatsApp
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t-[2px] border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Defendamos la Séptima - Comité Ciudadano.</p>
          </div>
          <div>
             Hecho con ❤️ por voluntarios. Es un proyecto <a href="https://github.com/quedicesebas/notm7a" target="_blank" rel="noopener" className="hover:text-white underline">Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
