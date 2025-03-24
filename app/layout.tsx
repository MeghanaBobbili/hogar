import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Hogar Controls | Smart Home Solutions',
  description: 'Premium smart home automation solutions for modern living. Control your home with ease using Hogar Controls products and systems.',
  keywords: 'smart home, home automation, Hogar Controls, smart lighting, smart security',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hogarcontrols.com',
    title: 'Hogar Controls | Smart Home Solutions',
    description: 'Premium smart home automation solutions for modern living',
    siteName: 'Hogar Controls',
  },
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 