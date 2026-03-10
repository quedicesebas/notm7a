
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Ban, Footprints, Building2, Leaf, TrainFront, Users } from "lucide-react"

export function Objectives() {
  const objectives = [
    {
      title: "No a la expansión del modelo fallido",
      description: "Detener la implementación de TransMilenio por la Séptima, un sistema saturado que no responde a las necesidades del corredor.",
      icon: Ban,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Prioridad al Peatón",
      description: "Promover una Séptima 100% caminable, recuperando el espacio público para los ciudadanos y la micro-movilidad.",
      icon: Footprints,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Protección del Patrimonio",
      description: "Respetar el carácter emblemático, histórico y cultural de la Carrera Séptima como eje vital de Bogotá.",
      icon: Building2,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Conectividad Sostenible",
      description: "Fomentar alternativas de transporte limpio que se integren armoniosamente con el entorno residencial y comercial.",
      icon: Leaf,
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ]

  return (
    <section id="objectives" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Nuestros Objetivos</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nuestra lucha no es solo contra un sistema de transporte, es por el derecho a una ciudad diseñada para la gente y no para los buses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, i) => (
            <Card key={i} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 w-full ${obj.bg.replace('bg-', 'bg-opacity-100 bg-')}`} />
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${obj.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <obj.icon className={`${obj.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold leading-tight">{obj.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {obj.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
            <TrainFront className="w-96 h-96 rotate-12" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">Por una Séptima para la Gente</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Buscamos una alternativa que respete la vocación de avenida caminable, conectada con su entorno cultural, comercial y residencial. La Séptima no es una troncal más, es el corazón de nuestra identidad urbana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
