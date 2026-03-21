"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Twitter, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function Social() {
  const socials = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/NoTM7a",
      handle: "@NoTM7a",
      color: "bg-background text-foreground hover:bg-black hover:text-white"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/NoTM7a",
      handle: "@NoTM7a",
      color: "bg-background text-foreground hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://chat.whatsapp.com/DjUXSaJ32LiAEW3arZyGbv",
      handle: "Comunidad",
      color: "bg-background text-foreground hover:bg-green-500 hover:text-black"
    }
  ]

  return (
    <section id="social" className="py-24 bg-accent border-b-[8px] border-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl text-accent-foreground font-headline uppercase tracking-wide mb-6">Mantente Informado</h2>
        <p className="text-accent-foreground text-lg md:text-xl font-bold mb-12 max-w-xl mx-auto">
          Sigue nuestras actualizaciones diarias y únete a la conversación en nuestras redes sociales y comunidades.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socials.map((social, i) => (
            <Button
              key={i}
              asChild
              className={`h-20 px-10 rounded-none border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all ${social.color}`}
            >
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { network: social.name, url: social.url })}
                className="flex items-center"
              >
                <social.icon className="mr-4 h-10 w-10" strokeWidth={2.5} />
                <div className="flex flex-col items-start">
                  <span className="font-headline text-lg uppercase leading-none tracking-wide">{social.name}</span>
                  <span className="font-bold text-sm leading-none mt-1">{social.handle}</span>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
