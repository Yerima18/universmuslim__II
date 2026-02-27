"use client";

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.slug === resolvedParams.slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleWhatsAppOrder = () => {
    const text = `Salam, je souhaite commander :\n- ${product.name} x${quantity} = ${(product.priceFCFA * quantity).toLocaleString('fr-FR')} FCFA\n\nTotal : ${(product.priceFCFA * quantity).toLocaleString('fr-FR')} FCFA\n\nNom: \nVille/Quartier: \nNote: \n\nBarakAllahu fik.`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/boutique" className="text-slate-500 hover:text-primary text-sm font-medium">
          &larr; Retour à la boutique
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImageIdx}
                src={`https://picsum.photos/seed/${product.slug}-${selectedImageIdx}/800/800`}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`aspect-square bg-slate-100 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIdx === idx
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={`https://picsum.photos/seed/${product.slug}-${idx}/200/200`}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-2">{product.category}</span>
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-2">{product.category}</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-6">{product.priceFCFA.toLocaleString('fr-FR')} FCFA</p>
          
          <div className="prose prose-slate mb-8">
            <p>{product.description}</p>
          </div>

          <div className="border-t border-slate-200 pt-8 mb-8">
            <div className="flex items-center mb-4">
              <span className="text-slate-700 font-medium mr-4">Quantité</span>
              <div className="flex items-center border border-slate-300 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-slate-500 hover:text-primary focus:outline-none cursor-pointer"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-slate-900 font-medium min-w-[3rem] text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-slate-500 hover:text-primary focus:outline-none cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => addItem(product, quantity)}
                className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </button>
              <button 
                onClick={handleWhatsAppOrder}
                className="flex-1 flex items-center justify-center px-6 py-3 border border-slate-300 rounded-md text-base font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" />
                Commander sur WhatsApp
              </button>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Détails</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><span className="font-medium text-slate-900">Public:</span> {product.audience}</li>
              <li><span className="font-medium text-slate-900">Catégorie:</span> {product.category}</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Vous aimerez aussi</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {relatedProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
              >
              <Link href={`/produit/${p.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${p.slug}/400/400`} 
                    alt={p.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-sm font-medium text-slate-900 flex-grow line-clamp-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="mt-2 text-lg font-bold text-primary">{p.priceFCFA.toLocaleString('fr-FR')} FCFA</p>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
