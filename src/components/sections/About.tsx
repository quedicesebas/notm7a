"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Users, BookOpen } from "lucide-react"

export function About() {
  const summary = "Defendamos la Séptima es un comité ciudadano independiente comprometido con la transparencia y la sostenibilidad del corredor vial más emblemático de Bogotá. Nuestra misión es garantizar que cualquier intervención urbana sea técnica, financiera y socialmente responsable, protegiendo el patrimonio histórico y ambiental mientras aseguramos que la voz de los ciudadanos sea el eje central del desarrollo."

  const objectives = [
    {
      title: "Transparencia",
      description: "Exigimos claridad total en los procesos de licitación y ejecución de obras públicas.",
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-foreground font-headline font-bold">Quiénes Somos</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl text-primary font-headline font-bold">Nuestra Misión</h3>
            <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6">
              "{summary}"
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <obj.icon className="text-primary h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg">{obj.title}</h4>
                  <p className="text-sm text-muted-foreground">{obj.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
