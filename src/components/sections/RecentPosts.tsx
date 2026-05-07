import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RecentPosts() {
  const posts = getAllPosts().slice(0, 3); // Get only the 3 most recent posts

  if (posts.length === 0) {
    return null; // Don't show the section if there are no posts
  }

  return (
    <section id="blog" className="py-24 bg-background border-b-[8px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Newspaper className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl md:text-5xl text-foreground font-headline uppercase tracking-wide">Últimas Entradas</h2>
          <div className="w-32 h-2 bg-primary mx-auto" />
          <p className="text-xl md:text-2xl font-bold mt-6 max-w-2xl mx-auto text-muted-foreground">
            Acompáñanos en la discusión y mantente al tanto de nuestros análisis técnicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex flex-col group h-full"
            >
              <div className="mb-4">
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                  {new Date(post.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h3 className="text-xl md:text-2xl font-headline uppercase leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>
              
              <p className="text-base font-medium text-muted-foreground mb-6 line-clamp-4 flex-1">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-4 border-t-2 border-foreground/10 flex justify-end">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors"
                >
                  Leer más <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="h-16 px-10 text-lg rounded-none border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-headline uppercase tracking-wider"
          >
            <Link href="/blog">
              Ver Todas las Entradas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
