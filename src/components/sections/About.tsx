"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Users, BookOpen } from "lucide-react"

export function About() {
  const summary = "Defendamos la Séptima es un comité ciudadano independiente comprometido con el corredor vial más emblemático de Bogotá. Nuestra misión es garantizar que cualquier intervención urbana sea técnica, financiera y socialmente responsable, protegiendo el patrimonio histórico y ambiental mientras aseguramos que la voz de los ciudadanos sea el eje central del desarrollo."

  const objectives = [
    {
      title: "Vanguardia técnica",
      description: "TM es una solución vieja e insuficiente. Hay muchas y mejores opciones para usar el preciado bien que es la superficie.",
      icon: Shield
    },
    {
      title: "Participación",
      description: "Creamos espacios para que la ciudadanía sea parte activa de las decisiones urbanas.",
      icon: Users
    },
    {
      title: "Sostenibilidad",
      description: "Defendemos modelos de movilidad que respeten el entorno, la salud y el patrimonio.",
      icon: Target
    },
    {
      title: "Veeduría",
      description: "Actuamos como vigilantes técnicos frente a los proyectos de movilidad de la ciudad.",
      icon: BookOpen
    }
  ]

  return (
    <section id="about" className="py-24 bg-background border-b-[8px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl text-foreground font-headline uppercase tracking-wide">Quiénes Somos</h2>
          <div className="w-32 h-2 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          <div className="space-y-6 bg-secondary text-secondary-foreground p-8 border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h3 className="text-4xl lg:text-5xl text-accent font-headline uppercase">Nuestra Misión</h3>
            <p className="text-lg md:text-xl leading-relaxed font-bold">
              "{summary}"
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <Card key={i} className="border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-none bg-card hover:bg-muted hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary border-2 border-foreground flex items-center justify-center">
                    <obj.icon className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h4 className="font-headline text-2xl uppercase">{obj.title}</h4>
                  <p className="text-base text-foreground font-medium leading-snug">{obj.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
