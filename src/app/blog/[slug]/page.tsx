import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Ensure all paths are statically generated at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${post.metadata.title} - Defendamos la Séptima`,
    description: post.metadata.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back to blog button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Volver al blog
            </Link>

            {/* Article Header */}
            <header className="mb-12 border-b-4 border-foreground pb-8">
              <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase block mb-4">
                {new Date(post.metadata.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h1 className="text-4xl md:text-6xl text-foreground font-headline uppercase tracking-wide leading-tight mb-6">
                {post.metadata.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-muted-foreground font-bold">
                <span className="uppercase tracking-wide">Por: {post.metadata.author}</span>
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg md:prose-xl prose-stone max-w-none prose-headings:font-headline prose-headings:uppercase prose-headings:tracking-wide prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:font-bold prose-img:border-4 prose-img:border-foreground prose-img:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <MDXRemote source={post.content} />
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
