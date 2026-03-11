"use client"

import { MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Defendamos la Séptima</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un esfuerzo ciudadano por la transparencia y el desarrollo urbano responsable en Bogotá.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#objectives" className="hover:text-white transition-colors">Objetivos</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contacto</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Bogotá, Colombia</p>
              <p>
                <a 
                  href="mailto:contacto@defendamoslaseptima.org" 
                  className="hover:text-white transition-colors"
                  onClick={() => trackEvent("contact_click", { method: "email", location: "footer" })}
                >
                  contacto@defendamoslaseptima.org
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/573006609565" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  onClick={() => trackEvent("contact_click", { method: "whatsapp", location: "footer" })}
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  +57 300 660 9565
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Defendamos la Séptima - Comité Ciudadano. Todos los derechos reservados.</p>
            <p>
              Hecho con ❤️ por voluntarios. Es un proyecto <a href="https://github.com/quedicesebas/notm7a" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" onClick={() => trackEvent("outbound_click", { destination: "github", url: "https://github.com/quedicesebas/notm7a" })}>Open Source</a>.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
