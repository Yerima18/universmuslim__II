"use client";

import Link from 'next/link';
import { Truck, ShieldCheck, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-24 sm:py-36 overflow-hidden">
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="islamic-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,4 49,24 70,16 62,37 80,40 62,43 70,64 49,56 40,76 31,56 10,64 18,43 0,40 18,37 10,16 31,24" fill="none" stroke="white" strokeWidth="1"/>
                <rect x="20" y="20" width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(45 40 40)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-grid)"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-dark/60 to-transparent pointer-events-none" />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span
            className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4"
            variants={fadeUp}
            custom={0}
          >
            Boutique islamique — Cotonou, Bénin
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Cadeaux islamiques<br className="hidden sm:block" /> Éducation &amp; Rappels
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-slate-200/90 max-w-2xl mx-auto mb-10"
            variants={fadeUp}
            custom={2}
          >
            Découvrez notre sélection de produits pour nourrir votre foi et celle de vos enfants.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeUp}
            custom={3}
          >
            <Link href="/boutique" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-primary-dark bg-accent hover:brightness-110 transition-all shadow-lg shadow-black/20">
              Voir les produits
            </Link>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="inline-flex justify-center items-center px-8 py-4 border border-white/50 text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-all">
              Commander sur WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { icon: <Truck className="h-6 w-6" />, title: 'Livraison rapide', desc: 'Partout au Bénin et environs.' },
              { icon: <ShieldCheck className="h-6 w-6" />, title: 'Qualité garantie', desc: 'Des produits sélectionnés avec soin.' },
              { icon: <MessageCircle className="h-6 w-6" />, title: 'Service client WhatsApp', desc: 'Une question ? Nous sommes là.' },
            ].map((item, i) => (
              <motion.div key={i} className="flex flex-col items-center" variants={fadeUp} custom={i}>
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-end mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Nos meilleures ventes</h2>
            <p className="mt-2 text-slate-500">Les produits les plus appréciés par notre communauté.</p>
          </div>
          <Link href="/boutique" className="hidden sm:block text-primary font-medium hover:underline">
            Voir tout &rarr;
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featuredProducts.map((product, i) => (
            <motion.div key={product.id} variants={fadeUp} custom={i}>
              <Link href={`/produit/${product.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${product.slug}/400/400`}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">{product.category}</span>
                  <h3 className="text-sm font-medium text-slate-900 flex-grow line-clamp-2">{product.name}</h3>
                  <p className="mt-4 text-lg font-bold text-primary">{product.priceFCFA.toLocaleString('fr-FR')} FCFA</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/boutique" className="text-primary font-medium hover:underline">
            Voir tout &rarr;
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-serif font-bold text-slate-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            Nos catégories
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {['Cartes', 'Enfants', 'Coffrets', 'Rappels'].map((category, i) => (
              <motion.div key={category} variants={fadeUp} custom={i}>
                <Link href={`/boutique?category=${category}`} className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 flex items-center justify-center block">
                  <img
                    src={`https://picsum.photos/seed/${category}/400/400`}
                    alt={category}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <h3 className="relative text-xl sm:text-2xl font-serif font-bold text-white z-10 drop-shadow-md">{category}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
