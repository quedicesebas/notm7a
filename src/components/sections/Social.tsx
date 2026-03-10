import { Button } from "@/components/ui/button"
import { Instagram, Twitter } from "lucide-react"

export function Social() {
  const socials = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/NoTM7a",
      handle: "@NoTM7a",
      color: "bg-black text-white hover:bg-gray-900"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/NoTM7a",
      handle: "@NoTM7a",
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white hover:opacity-90"
    }
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-headline mb-4">Mantente Informado</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Sigue nuestras actualizaciones diarias y únete a la conversación en nuestras redes sociales.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, i) => (
            <Button
              key={i}
              asChild
              className={`h-16 px-8 rounded-full text-lg font-medium transition-transform hover:scale-105 ${social.color}`}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="mr-3 h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 leading-none mb-0.5">{social.name}</span>
                  <span className="leading-none">{social.handle}</span>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
