
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Defendamos la Séptima - Comité Ciudadano',
  description: 'Comité ciudadano dedicado a la defensa y mejora del corredor de la Carrera Séptima en Bogotá.',
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
