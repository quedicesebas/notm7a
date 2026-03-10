
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://defendamoslaseptima.org'),
  title: 'Defendamos la Séptima - Comité Ciudadano',
  description: 'Comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá.',
  openGraph: {
    title: 'Defendamos la Séptima - Comité Ciudadano',
    description: 'Únete al comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá. ¡Alza tu voz!',
    siteName: 'Defendamos la Séptima',
    url: '/',
    images: [
      {
        url: '/social-preview.png',
        width: 1080,
        height: 1080,
        alt: 'Protesta ciudadana con el mensaje: ¡Defendamos la Séptima!',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defendamos la Séptima - Comité Ciudadano',
    description: 'Únete al comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá. ¡Alza tu voz!',
    images: ['/social-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
