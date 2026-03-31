"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Users, BookOpen, Handshake } from "lucide-react"

export function About() {
  const summary = "Somos independientey y comprometidos con la vía más emblemática de Bogotá. Queremos una intervención urbana técnica, financiera y socialmente responsable, protegiendo el el ambiente y patrimonio local, mientras aseguramos que la voz de los ciudadanos sea se escuche."

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
          <h2 className="text-3xl md:text-5xl text-foreground font-headline uppercase tracking-wide">Quiénes Somos</h2>
          <div className="w-32 h-2 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Column 1: Mission + Plurality */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6 bg-secondary text-secondary-foreground p-8 border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl lg:text-3xl text-accent font-headline uppercase">Nuestra Misión</h3>
              <p className="text-lg md:text-xl leading-relaxed font-bold">
                "{summary}"
              </p>
            </div>

            {/* Plurality / No Color Block */}
            <div className="bg-accent border-4 border-foreground p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-background border-4 border-foreground flex items-center justify-center rotate-3 transform group-hover:rotate-0 transition-transform">
                    <Handshake className="h-10 w-10 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-headline uppercase leading-none">
                    UN ESPACIO<br/>DE TODOS Y PARA TODOS
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-lg md:text-xl font-bold leading-tight">
                    Este es un comité <span className="text-primary italic">sin color político</span>. 
                  </p>
                  <p className="text-base md:text-lg font-medium opacity-90 leading-snug">
                    Aquí son bienvenidos todos los ciudadanos, grupos y organizaciones cívicas, políticas, académicas y demás.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Objectives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <Card key={i} className="border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-none bg-card hover:bg-muted hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary border-2 border-foreground flex items-center justify-center">
                    <obj.icon className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h4 className="font-headline text-lg sm:text-xl uppercase">{obj.title}</h4>
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
