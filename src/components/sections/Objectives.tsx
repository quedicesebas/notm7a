"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Ban, Footprints, Building2, Leaf, TrainFront, Trees, HandCoins, Pickaxe } from "lucide-react";

function ReasonCard({
  title,
  children,
  icon: Icon,
  brutalistColor,
}: {
  title: string;
  children: React.ReactNode;
  icon: any;
  brutalistColor: string;
}) {
  return (
    <Card
      className={`group ${brutalistColor} border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-200 rounded-none overflow-hidden flex flex-col`}
    >
      <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
        <div
          className={`w-16 h-16 border-4 border-foreground bg-background rounded-none flex items-center justify-center transition-transform group-hover:scale-110 shrink-0`}
        >
          <Icon className="text-foreground h-8 w-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-headline uppercase leading-tight">{title}</h3>
        <div className="font-medium text-base md:text-lg leading-snug space-y-4">{children}</div>
      </CardContent>
    </Card>
  );
}

export function Objectives() {
  useEffect(() => {
    // Carga el script de Twitter para renderizar el embed
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Limpieza al desmontar el componente
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="objectives" className="py-24 bg-background border-b-[8px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-5xl font-headline uppercase tracking-wide text-foreground">
            El Falso Dilema
          </h2>
          <div className="w-32 h-2 bg-primary mx-auto" />
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              ¡La 7.ª está en peligro! Quienes promueven este descalabro usan{" "}
              <span className="font-bold underline decoration-primary decoration-4">el abandono intencional</span> de la
              vía como chantaje (<strong>Troncal de TM o nada</strong>) y fabrican conflictos sociales.
            </p>
            <div className="text-lg md:text-xl text-foreground border-l-4 border-l-primary pl-4 text-left">
              <p>
                De los bogotanos dependerá evitar tiempos insufribles (como en la Avenida 68) para al final terminar con
                una vía llena de barreras y de gris.
              </p>
              <p>
                La 7.ª es el escenario para para hacer algo mejor que TransMilenio, otra oportunidad podría tomar
                décadas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          <ReasonCard title="TransMilenio fracasó" icon={Ban} brutalistColor="bg-primary text-primary-foreground">
            <p>
              Las cifras oficiales
              <span className="underline"> lo confirman</span>. Las nuevas troncales incrementan el tráfico y el
              hacinamiento en las existentes.
            </p>
            <p>
              Lejos de mejorar la movilidad y el entorno, ha
              <span className="underline"> aumentado el uso de carros y la proliferación de motos</span>, disparando la
              congestión.
            </p>
            <Image
              src="/encuestamovilidad_brutalist.png"
              alt="Gráfico de TM Fracasó"
              width={800}
              height={600}
              className="mt-6 border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none w-full object-cover bg-background"
            />
          </ReasonCard>
          <ReasonCard
            title="¿Solo movilidad o urbanismo?"
            icon={Trees}
            brutalistColor="bg-accent text-accent-foreground"
          >
            <p>
              ¡No cabe! Requiere tala masiva, demoliciones y traumatismo. Al final, queda una barrera gris que ahoga el
              paisaje, estaciones carcelarias, comercio quebrado y menos espacio para disfrutar.
            </p>
            <p>
              <span className="font-bold underline decoration-4 text-2xl font-headline tracking-wider text-red-600 bg-background pb-1 px-2 mr-1 select-all shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 border-foreground">
                1.500
              </span>
              árboles caerán y recuprar su función tomará décadas, si es que ocurre.
            </p>
            <Image
              src="/arbol_talado_icon.png"
              alt="Icono gráfico de árbol talado"
              width={400}
              height={400}
              className="mt-6 border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none w-full mx-auto object-cover"
            />
          </ReasonCard>
          <ReasonCard
            title="Desconfianza y corrupción"
            icon={HandCoins}
            brutalistColor="bg-secondary text-secondary-foreground"
          >
            <p>El IDU: proyectos que duran el doble, descoordinación y cuestionables de contratistas.</p>
            <p>
              Costo del tramo 3 de la 7.ª (el “fácil”) ya aumentó 50% desde su adjudicación... y forzarán tramos de
              Chapinero.
            </p>
            <p>
              <span className="underline">
                ¿Estamos a merced de los intereses de los contratistas y operadores de TM?
              </span>
            </p>
            <Image
              src="/costo_km_brutalist.png"
              alt="Gráfico de incremento costo por kilómetro Fase I a Fase IV"
              width={800}
              height={600}
              className="mt-6 border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none w-full object-cover bg-background"
            />
          </ReasonCard>
          <ReasonCard title="Mejoras no requieren TM" icon={Pickaxe} brutalistColor="bg-background text-foreground">
            <p>
              Peñalosa, Claudia y Galán son los principales <span className="underline">responsables</span> de la
              situación actual en la 7.ª. Desestimaron con mentiras las alternativas viables y escogidas por la
              ciudadanía, como el LRT o la extensión de rutas duales, y torpedean el tren de la 9.ª.
            </p>
            <p>
              No han sembrado un arbol en años, <span className="underline">es hora de trabajar</span>.
            </p>
            <Image
              src="/septima_brutalist.png"
              alt="Gráfico de mejoras para la Séptima sin TM"
              width={800}
              height={600}
              className="mt-6 border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none w-full object-cover bg-background"
            />
          </ReasonCard>
        </div>

        {/* Twitter Embed Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-headline uppercase tracking-wide mb-2 text-foreground">
              ¿Por qué no soñar con algo mejor?
            </h3>
            <p className="text-lg font-medium text-foreground">
              Mira la pesadilla y uno de los sueños posibles para la Séptima.
            </p>
          </div>
          <div className="flex justify-center bg-background border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)] p-4 md:p-8">
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="es" dir="ltr">
                Con renders tramposos disfrazaron la falsa dicotomía: TM o nada, abandono.
                <br />
                <br />
                También sabemos dibujar, pero para soñar. ¡No más chantaje!
                <br />
                <br />
                Mira la diferencia entre seguir con &quot;lo que tocó&quot; (TM por la 7.ª 🚍) y uno de los sueños
                posibles🌱🚋. ¿Va?
                <br />
                <br />✊ Únete, <a href="https://t.co/SHUWhsxcOI">https://t.co/SHUWhsxcOI</a>{" "}
                <a href="https://t.co/BIc4NqPy8w">pic.twitter.com/BIc4NqPy8w</a>
              </p>
              &mdash; Defendamos la Séptima - Comité Ciudadano (@NoTM7a)
              <a href="https://twitter.com/NoTM7a/status/2042039854016471248?ref_src=twsrc%5Etfw">April 9, 2026</a>
            </blockquote>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 border-4 border-foreground bg-primary text-primary-foreground shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-20">
            <Leaf className="w-96 h-96 rotate-12 text-foreground" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-headline uppercase tracking-wide mb-6">
              Una Movilidad
              <br />
              con Visión de Futuro
            </h3>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              Mejorar la Séptima es urgente, pero en lugar de insistir con TransMilenio, debe hacerse con visión: un
              sistema distrital integrado con trenes, metro subterráneo, buses eléctricos y bicicletas. Una movilidad
              verde pensada para la gente, que no compita por la escasa superficie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
