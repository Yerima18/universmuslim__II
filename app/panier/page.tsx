"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Minus, Plus, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'motion/react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    city: '',
    note: ''
  });

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "Salam, je souhaite commander :\n";
    items.forEach(item => {
      message += `- ${item.name} x${item.quantity} = ${(item.priceFCFA * item.quantity).toLocaleString('fr-FR')} FCFA\n`;
    });

    message += `\nTotal : ${total.toLocaleString('fr-FR')} FCFA\n`;
    
    if (customerInfo.name) message += `Nom: ${customerInfo.name}\n`;
    if (customerInfo.city) message += `Ville/Quartier: ${customerInfo.city}\n`;
    if (customerInfo.note) message += `Note: ${customerInfo.note}\n`;

    message += "\nBarakAllahu fik.";

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-slate-50 text-slate-300 mb-6">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Votre panier est vide</h1>
        <p className="text-slate-500 mb-8">Il semble que vous n'ayez pas encore ajouté de produits à votre panier.</p>
        <Link href="/boutique" className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors">
          Découvrir la boutique
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Votre Panier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <ul className="divide-y divide-slate-100">
              <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 flex flex-col sm:flex-row sm:items-center overflow-hidden"
                >
                  <div className="h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 mb-4 sm:mb-0">
                    <img 
                      src={`https://picsum.photos/seed/${item.slug}/200/200`} 
                      alt={item.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="sm:ml-6 flex-grow">
                    <div className="flex justify-between items-start">
                      <Link href={`/produit/${item.slug}`} className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-primary font-bold mt-1">{item.priceFCFA.toLocaleString('fr-FR')} FCFA</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-slate-200 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-slate-500 hover:text-primary cursor-pointer"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-1 text-slate-900 font-medium min-w-[2.5rem] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-slate-500 hover:text-primary cursor-pointer"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-slate-900 font-semibold">
                        {(item.priceFCFA * item.quantity).toLocaleString('fr-FR')} FCFA
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
              </AnimatePresence>
            </ul>
          </div>
          
          <div className="flex justify-between items-center">
            <Link href="/boutique" className="text-primary font-medium hover:underline">
              &larr; Continuer mes achats
            </Link>
            <button 
              onClick={clearCart}
              className="text-slate-400 hover:text-slate-600 text-sm font-medium"
            >
              Vider le panier
            </button>
          </div>
        </div>

        {/* Order Summary & Customer Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Informations de livraison</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ville / Quartier</label>
                <input 
                  type="text" 
                  value={customerInfo.city}
                  onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                  placeholder="Ex: Cotonou, Fidjrossè"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Note (optionnel)</label>
                <textarea 
                  value={customerInfo.note}
                  onChange={(e) => setCustomerInfo({...customerInfo, note: e.target.value})}
                  placeholder="Précisions sur la livraison..."
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Résumé de la commande</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Sous-total</span>
                <span>{total.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Livraison</span>
                <span className="text-xs italic">Calculée à la confirmation</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-primary">{total.toLocaleString('fr-FR')} FCFA</span>
              </div>
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                Commander sur WhatsApp
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                En cliquant sur commander, vous serez redirigé vers WhatsApp pour finaliser votre achat avec nous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
