"use client";

import { Heart, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
  viewport: { once: true, margin: '-60px' },
});

const values = [
  { icon: <Heart className="h-8 w-8" />, title: 'Bienveillance', desc: 'Nous agissons avec sincérité et amour pour notre communauté.' },
  { icon: <Target className="h-8 w-8" />, title: 'Éducation', desc: "Transmettre les valeurs de l'Islam de manière simple et efficace." },
  { icon: <ShieldCheck className="h-8 w-8" />, title: 'Qualité', desc: 'Des produits durables et soignés pour une expérience optimale.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeUp()}>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6">Notre Histoire</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Univers Muslim est né d'une volonté simple : rendre l'apprentissage et la pratique de l'Islam accessibles, ludiques et élégants pour toute la famille.
        </p>
      </motion.div>

      {/* Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <img
            src="https://picsum.photos/seed/mission/800/600"
            alt="Notre mission"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2 className="text-3xl font-serif font-bold text-slate-900">Notre Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nous croyons que chaque foyer musulman mérite des outils de qualité pour nourrir sa spiritualité. Que ce soit à travers des jeux éducatifs pour les plus jeunes ou des rappels quotidiens pour les adultes, notre objectif est d'accompagner chaque étape de votre cheminement.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Basés au Bénin, nous sélectionnons et créons des produits qui allient sens profond et esthétique moderne, pour que le rappel d'Allah soit une source de joie constante dans votre quotidien.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100"
        {...fadeUp()}
      >
        <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Nos Valeurs</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
