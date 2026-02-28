"use client";

import Link from 'next/link';
import { Truck, ShieldCheck, MessageCircle, Package } from 'lucide-react';
import { products } from '@/data/products';
import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const fadeUpInView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
  viewport: { once: true, margin: '-60px' },
});

/* ── Ornamental divider ─────────────────────────────── */
function Ornament({ light = false }: { light?: boolean }) {
  const c = light ? '#D2B48C' : '#C4922A';
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-12" style={{ backgroundColor: c, opacity: 0.5 }} />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" fill={c} opacity="0.8" />
      </svg>
      <div className="h-px w-12" style={{ backgroundColor: c, opacity: 0.5 }} />
    </div>
  );
}

/* ── Islamic mandala SVG ────────────────────────────── */
function IslamicMandala() {
  // 8-pointed star: outer r=160, inner r=66, centre (200,200)
  const star = '200,40 225,139 313,87 261,175 360,200 261,225 313,313 225,261 200,360 175,261 87,313 139,225 40,200 139,175 87,87 175,139';
  return (
    <svg viewBox="0 0 400 400" className="w-72 h-72 sm:w-96 sm:h-96 opacity-25" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#D2B48C">
        <circle cx="200" cy="200" r="188" strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="200" r="170" strokeWidth="0.8" opacity="0.6" />
        {/* 16 radial spokes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 16;
          return (
            <line key={i}
              x1={200 + 68 * Math.cos(a)} y1={200 + 68 * Math.sin(a)}
              x2={200 + 168 * Math.cos(a)} y2={200 + 168 * Math.sin(a)}
              strokeWidth="0.5" opacity="0.35"
            />
          );
        })}
        {/* 8-pointed star */}
        <polygon points={star} strokeWidth="1.5" opacity="0.9" />
        {/* Inner rings */}
        <circle cx="200" cy="200" r="64" strokeWidth="1" opacity="0.7" />
        <circle cx="200" cy="200" r="42" strokeWidth="0.5" opacity="0.5" />
        <circle cx="200" cy="200" r="22" strokeWidth="1" opacity="0.6" />
        {/* 8 outer petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
          return <circle key={i} cx={200 + 120 * Math.cos(a)} cy={200 + 120 * Math.sin(a)} r="18" strokeWidth="0.7" opacity="0.5" />;
        })}
      </g>
    </svg>
  );
}

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#3B1F0E' }}>
        {/* tiled pattern */}
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,4 49,24 70,16 62,37 80,40 62,43 70,64 49,56 40,76 31,56 10,64 18,43 0,40 18,37 10,16 31,24"
                  fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tile)" />
          </svg>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — content */}
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: '#D2B48C' }}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              >
                Boutique islamique — Porto-Novo, Bénin
              </motion.span>

              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
              >
                <Ornament light />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight mt-4 mb-6 text-white"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
              >
                Nourrissez votre foi,<br />
                <span style={{ color: '#E8C97A' }}>apaisez votre cœur.</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
              >
                Découvrez nos outils spirituels conçus pour accompagner petits et grands dans leur quotidien.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              >
                <Link
                  href="/boutique"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg"
                  style={{ backgroundColor: '#C4922A', color: '#fff' }}
                >
                  Découvrir la collection
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="inline-flex justify-center items-center px-8 py-4 rounded-xl text-sm font-bold tracking-wide border border-white/40 text-white hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Commander sur WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Right — mandala */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              {...fadeUp(0.3)}
            >
              <IslamicMandala />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-3 divide-x divide-slate-100"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { value: '8+', label: 'Produits' },
              { value: '4', label: 'Catégories' },
              { value: '100%', label: 'Qualité garantie' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="py-6 text-center"
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } } }}
              >
                <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">{s.value}</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { icon: <Truck className="h-6 w-6" />, title: 'Livraison rapide', desc: 'Partout au Bénin et environs, livrés à votre porte.' },
              { icon: <ShieldCheck className="h-6 w-6" />, title: 'Qualité garantie', desc: 'Chaque produit est sélectionné avec soin et amour.' },
              { icon: <MessageCircle className="h-6 w-6" />, title: 'Support WhatsApp', desc: 'Une question ? Nous répondons rapidement sur WhatsApp.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5 bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              >
                <div className="h-12 w-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white" style={{ backgroundColor: '#4F6F52' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" {...fadeUpInView()}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sélection</span>
            <Ornament />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-3">Nos meilleures ventes</h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">Les produits les plus appréciés par notre communauté.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              >
                <Link href={`/produit/${product.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={product.images[0]}
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${product.slug}/400/533`; }}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full text-white/90" style={{ backgroundColor: 'rgba(79,111,82,0.85)' }}>
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">{product.priceFCFA.toLocaleString('fr-FR')} <span className="text-xs font-normal text-slate-400">FCFA</span></p>
                      <span className="text-xs font-semibold text-primary border border-primary/30 rounded-full px-3 py-1 group-hover:bg-primary group-hover:text-white transition-all">Voir</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" {...fadeUpInView(0.2)}>
            <Link href="/boutique" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
              <Package className="h-4 w-4" />
              Voir tous les produits
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" {...fadeUpInView()}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Collections</span>
            <Ornament />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-3">Nos catégories</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { name: 'Apaisement & Versets', seed: 'apaisement' },
              { name: 'Défis & Spiritualité', seed: 'defis' },
              { name: 'Coin des Enfants', seed: 'enfants' },
              { name: "Papeterie & Dou'as", seed: 'papeterie' },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } } }}
              >
                <Link
                  href={`/boutique?category=${encodeURIComponent(cat.name)}`}
                  className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-200 flex flex-col items-center justify-end block"
                >
                  <img
                    src={`https://picsum.photos/seed/${cat.seed}/400/400`}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* gradient always on, stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  {/* text slides up on hover */}
                  <div className="relative z-10 p-5 w-full text-center transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow">{cat.name}</h3>
                    <p className="text-white/0 group-hover:text-white/80 text-xs mt-1 transition-all duration-300 font-medium">Explorer →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHATSAPP CTA BANNER ──────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#3B1F0E' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUpInView()}>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#D2B48C' }}>Commander facilement</span>
            <Ornament light />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-3 mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Contactez-nous directement sur WhatsApp. Nous vous guidons vers le cadeau parfait.
            </p>
            <motion.a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Salam, j'ai besoin d'aide pour choisir un produit.")}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-sm shadow-lg transition-all"
              style={{ backgroundColor: '#25D366' }}
              whileHover={{ scale: 1.04, backgroundColor: '#128C7E' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-5 w-5" />
              Discuter sur WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
