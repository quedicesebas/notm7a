import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blog - Defendamos la Séptima',
  description: 'Noticias, actualizaciones y artículos sobre nuestra propuesta urbana y defensa de la carrera Séptima en Bogotá.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-6xl text-foreground font-headline uppercase tracking-wide">
              Blog / Noticias
            </h1>
            <div className="w-32 h-2 bg-primary" />
            <p className="text-xl md:text-2xl font-bold mt-6 max-w-2xl text-muted-foreground">
              Entérate de nuestras últimas propuestas, investigaciones y avances en la defensa de la Séptima.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-8">
            {posts.length === 0 ? (
              <p className="text-lg font-bold">Aún no hay artículos publicados. ¡Vuelve pronto!</p>
            ) : (
              posts.map((post) => (
                <article 
                  key={post.slug} 
                  className="bg-card border-4 border-foreground p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex flex-col group"
                >
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">
                      {new Date(post.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-headline uppercase leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                  
                  <p className="text-base md:text-lg font-medium text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wide">Por: {post.author}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors"
                    >
                      Leer más <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
