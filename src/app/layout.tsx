import type {Metadata} from 'next';
import './globals.css';
import FirebaseAnalytics from '@/components/FirebaseAnalytics';
import localFont from 'next/font/local';

const motterCorpus = localFont({
  src: '../fonts/MotterCorpus.woff2',
  variable: '--font-motter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://defendamoslaseptima.org'),
  title: 'Defendamos la Séptima - Comité Ciudadano',
  description: 'Comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá.',
  applicationName: 'NoM7a',
  appleWebApp: {
    capable: true,
    title: 'NoM7a',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'Defendamos la Séptima - Comité Ciudadano',
    description: 'Únete al comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá. ¡Alza tu voz!',
    siteName: 'Defendamos la Séptima',
    url: '/',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Protesta ciudadana con el mensaje: ¡Defendamos la Séptima!',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NoTM7a',
    title: 'Defendamos la Séptima - Comité Ciudadano',
    description: 'Únete al comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá. ¡Alza tu voz!',
    images: ['/og_image_x.png'],
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
      <body className={`font-body antialiased ${motterCorpus.variable}`}>
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
