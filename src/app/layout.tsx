import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NestJS Backend Training — 3-Day Bootcamp',
  description: 'A complete 3-day training guide for backend development with Node.js, TypeScript, and NestJS. Designed for frontend developers transitioning to backend.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0e1a] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
