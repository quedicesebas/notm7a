
"use client"

import { useEffect, useState } from "react"
import { generateCommitteeSummary } from "@/ai/flows/generate-committee-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Shield, Target, Users, BookOpen } from "lucide-react"

export function About() {
  const [summary, setSummary] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadSummary() {
      try {
        const result = await generateCommitteeSummary({
          committeeMaterials: [
            "Somos un grupo de ciudadanos independientes preocupados por el futuro de la Carrera Séptima.",
            "Nuestra misión es garantizar que cualquier intervención en este corredor sea técnica, financiera y socialmente responsable.",
            "Promovemos el debate público informado y la transparencia en la contratación estatal.",
            "Buscamos proteger el patrimonio histórico y ambiental de la ciudad.",
            "Actuamos como veedores ciudadanos frente a los proyectos de movilidad de la alcaldía."
          ]
        })
        setSummary(result.summary)
      } catch (error) {
        console.error("Failed to load summary", error)
        setSummary("Defendamos la Séptima es un comité ciudadano comprometido con la transparencia y la sostenibilidad del corredor vial más emblemático de Bogotá. Trabajamos incansablemente para asegurar que las voces de los ciudadanos sean escuchadas y respetadas en los proyectos de desarrollo urbano.")
      } finally {
        setLoading(false)
      }
    }
    loadSummary()
  }, [])

  const objectives = [
    {
      title: "Transparencia",
      description: "Exigimos claridad total en los procesos de licitación y ejecución de obras.",
      icon: Shield
    },
    {
      title: "Participación",
      description: "Creamos espacios para que la ciudadanía sea parte activa de las decisiones.",
      icon: Users
    },
    {
      title: "Sostenibilidad",
      description: "Defendemos modelos de movilidad que respeten el entorno y la salud.",
      icon: Target
    },
    {
      title: "Educación",
      description: "Informamos a la opinión pública con datos técnicos y reales.",
      icon: BookOpen
    }
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-foreground">Quiénes Somos</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl text-primary font-headline">Nuestra Misión</h3>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6">
                "{summary}"
              </p>
            )}
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
