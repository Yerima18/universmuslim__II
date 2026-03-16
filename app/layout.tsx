import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartProvider';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnnouncementBar from '@/components/AnnouncementBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Univers Muslim | Outils islamiques, supports éducatifs et rappels bénéfiques',
  description: 'Pour un quotidien inspiré et plus proche de ton Créateur.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-bg text-slate-800 min-h-screen flex flex-col`}>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
