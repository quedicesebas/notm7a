"use client";

import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import { SOCIAL_LINKS } from "@/lib/constants";

export function Join() {
  return (
    <section id="join" className="py-24 bg-accent border-b-[8px] border-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl text-accent-foreground font-headline uppercase tracking-wide mb-6">
          ¡Actúa Ahora!
        </h2>
        <p className="text-accent-foreground text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
          Firma nuestra petición contra el proyecto y únete al comité ciudadano y nuestra comunidad en WhatsApp para
          defender la Séptima.{" "}
          <span className="font-bold underline decoration-primary decoration-4">Tu apoyo es fundamental</span>.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="h-24 px-12 rounded-none border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all bg-background text-foreground hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 hover:text-white tracking-wider [&_svg]:size-10"
          >
            <a
              href={SOCIAL_LINKS.FORM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("join_click", { action: "sign_and_join", url: SOCIAL_LINKS.FORM })}
              className="flex items-center"
            >
              <ClipboardPen className="mr-4" strokeWidth={2.5} />
              <div className="flex flex-col items-start">
                <span className="font-headline text-lg uppercase leading-none tracking-wide">
                  Firma y Únete al Comité
                </span>
                <span className="font-bold text-sm leading-none mt-1">Podrás acceder a los grupos de WhatsApp</span>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
