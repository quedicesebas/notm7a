
"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Ban, Footprints, Building2, Leaf, TrainFront } from "lucide-react"

export function Objectives() {
  useEffect(() => {
    // Carga el script de Twitter para renderizar el embed
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)
    
    return () => {
      // Limpieza al desmontar el componente
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const objectives = [
    {
      title: "No a la expansión del modelo fallido",
      description: "Detener la implementación de TransMilenio por la Séptima, un sistema saturado que no responde a las necesidades del corredor.",
      icon: Ban,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Una avenida para vivir y moverse",
      description: "Promover una Séptima más caminable y conectada con el entorno, recuperando el espacio público para los ciudadanos y todas sus formas de moverse",
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
            Nuestra lucha no es solo contra un sistema de transporte, es por el derecho a una ciudad diseñada para la gente y no para los buses. Una ciudad que respire y se mueva, no una estancada por años como con cada troncal y recientemente con la de la Avenida 68.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Twitter Embed Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">¿Por qué no soñár con algo mejor que la Caracas?</h3>
            <p className="text-muted-foreground">Mira por qué defendemos una alternativa diferente para la Séptima.</p>
          </div>
          <div className="flex justify-center bg-gray-50 rounded-3xl p-4 md:p-8 shadow-inner border border-gray-100">
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="es" dir="ltr">
                Tres alcaldías diseñando y no pudieron si quiera porponer algo así para nuestra Séptima😔<br/><br/>
                Así se diseña en Vitoria (País Vasco)<br/>
                ✅Priorizar el Transporte Público<br/>
                ✅Infraestructura ordenada para la bici<br/>
                ✅BRT mejor pensado <a href="https://t.co/TWvHntNMHG">pic.twitter.com/TWvHntNMHG</a>
              </p>
              &mdash; Defendamos la Séptima - Comité Ciudadano (@NoTM7a) 
              <a href="https://twitter.com/NoTM7a/status/2031125918316454302?ref_src=twsrc%5Etfw">March 9, 2026</a>
            </blockquote>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
            <TrainFront className="w-96 h-96 rotate-12" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">Por una Séptima para la Gente</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Buscamos una alternativa que respete la vocación de avenida principal, con sus costados conectados, tejiendo su entorno cultural, comercial y residencial. La Séptima no es una troncal más, es el corazón de nuestra identidad urbana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
