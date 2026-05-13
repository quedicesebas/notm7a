import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog - Defendamos la Séptima",
  description:
    "Noticias, actualizaciones y artículos sobre nuestra propuesta urbana y defensa de la carrera Séptima en Bogotá.",
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
                  className="bg-card border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex flex-col md:flex-row group overflow-hidden"
                >
                  {post.image && (
                    <div className="w-full md:w-1/3 h-48 md:h-auto relative border-b-4 md:border-b-0 md:border-r-4 border-foreground overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-primary font-bold text-sm tracking-widest uppercase">
                        {formatDate(post.date)}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-headline uppercase leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                          {post.title}
                        </Link>
                      </h2>
                    </div>

                    <p className="text-base md:text-lg font-medium text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="text-sm font-bold uppercase tracking-wide">Por: {post.author}</span>
                      <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm group-hover:text-primary transition-colors">
                        Leer más <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
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
