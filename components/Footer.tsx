import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Univers Muslim"
                className="h-12 w-12 object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="font-serif text-2xl font-bold text-primary">Univers Muslim</span>
            </div>
            <p className="mt-4 text-slate-500 text-sm max-w-md">
              Votre boutique de confiance pour des cadeaux islamiques, livres, jeux éducatifs et rappels. 
              Commandez facilement via WhatsApp et faites-vous livrer.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="text-slate-400 hover:text-primary">
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Liens rapides</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/boutique" className="text-base text-slate-500 hover:text-primary">Boutique</Link></li>
              <li><Link href="/a-propos" className="text-base text-slate-500 hover:text-primary">À propos</Link></li>
              <li><Link href="/contact" className="text-base text-slate-500 hover:text-primary">Contact</Link></li>
              <li><Link href="/panier" className="text-base text-slate-500 hover:text-primary">Panier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-slate-500">WhatsApp: {siteConfig.whatsappNumberDisplay}</li>
              <li className="text-base text-slate-500">Email: contact@universmuslim.com</li>
              <li className="text-base text-slate-500">Cotonou, Bénin</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} Univers Muslim. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
