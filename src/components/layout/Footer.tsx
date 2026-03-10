
export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Defendamos la Séptima</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un esfuerzo ciudadano por la transparencia y el desarrollo urbano responsable en Bogotá.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Veeduría Ciudadana</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contacto</h4>
            <p className="text-sm text-gray-400">
              Bogotá, Colombia<br />
              comite@defendamos7.org
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Defendamos la Séptima - Comité Ciudadano. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
